const InstituteKeys = require('../../models/institute-keys.model');
const promiseRequest = require('request-promise');
const errorHandler = require('../../handler/error.handler');

const success = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          <title>Verification of Zoom Credentials</title>
      </head>
      <body>
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <h3 class="text-center">Zoom User Authenticated Successfully</h3>
                  </div>
              </div>
          </div>
      </body>
    </html>
  `;
};

const generateZoomAuthToken = async (req, res) => {
  try {
    const decryptedImsMasterId = Buffer.from(req.query.instituteImsId, 'hex').toString('utf8');

    const zoomCredentials = await InstituteKeys.findOne(
      {
        imsMasterId: decryptedImsMasterId,
      },
      { onlineClassesKeys: 1 }
    );

    if (!zoomCredentials) {
      throw new Error('No Zoom Credentials Found');
    }

    const redirectURL =
      process.env.ZOOM_REDIRECT_URL +
      '/generateZoomAuthToken?instituteImsId=' +
      req.query.instituteImsId;

    const options = {
      method: 'POST',
      url: 'https://zoom.us/oauth/token',
      qs: {
        grant_type: 'authorization_code',
        //The code below is a sample authorization code. Replace it with your actual authorization code while making requests.
        code: req.query.code,
        //The uri below is a sample redirect_uri. Replace it with your actual redirect_uri while making requests.
        redirect_uri: redirectURL,
      },
      headers: {
        /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
         **/
        Authorization:
          'Basic ' +
          Buffer.from(
            zoomCredentials.onlineClassesKeys.accessKey +
              ':' +
              zoomCredentials.onlineClassesKeys.secretKey
          ).toString('base64'),
      },
    };

    let response = await promiseRequest(options);

    response = JSON.parse(response);

    const currentTime = new Date().getTime() / 1000;

    const expiresIn = response.expires_in + currentTime;

    await InstituteKeys.findOneAndUpdate(
      {
        imsMasterId: decryptedImsMasterId,
      },
      {
        $set: {
          'onlineClassesKeys.accessToken': response.access_token,
          'onlineClassesKeys.refreshToken': response.refresh_token,
          'onlineClassesKeys.expiresIn': expiresIn,
        },
      },
      {
        multi: true,
      }
    );

    res.status(200).send(success());
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = generateZoomAuthToken;
