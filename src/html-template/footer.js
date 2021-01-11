const footer = () => {
  return `
                <div class="row bg-dark py-3">
                    <div class="col-12">
                        <p class="text-light text-center">
                        Copyright &#169; 2020, <a href="${process.env.SITE_URL}">${process.env.SITE_URL_SHORT}</a> All
                        Rights Reserved.
                        </p>
                    </div>
                    </div>
                </div>
            </body>
        </html>
    `;
};

module.exports = footer;
