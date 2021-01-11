const header = require('./header');
const footer = require('./footer');

const getNewUserMailTemplate = async (user) => {
  return `
    ${header()}
    <div class="row">
        <div class="col-12">
          <h3>Welcome to Class Master ${user.name.toUpperCase()}</h3>
          <h5>Yoy are registered as a ${user.userRole.toUpperCase()} and Your Login credentials for Class Master are as Follows:</h5>
          <p>
            <strong>Username: </strong> ${user.email}
            <br />
            <strong>Password: </strong> ${user.phone}
          </p>
          <div class="text-center">
            <a class="btn" href="${process.env.SITE_URL}">Click Here</a>
          </div>
          <br />
          <hr />
          <br />
          <div class="text-center">
            <h5>Having Trouble to Login click on Following Link</h5>
            <a href="${process.env.SITE_URL}">${process.env.SITE_URL}</a>
          </div>
        </div>
      </div>
      ${footer()}
    `;
};

module.exports = getNewUserMailTemplate;
