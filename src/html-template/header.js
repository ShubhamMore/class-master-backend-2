const header = () => {
  return `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>New User</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
                .container {
                    width: 90%;
                    margin: auto;
                }
                .row {
                    width: 100%;
                }
                .col-12 {
                    width: 100%;
                    padding: 0.25rem;
                }
                .bg-light {
                    background-color: #f0f0f0;
                }
                .bg-dark {
                    background-color: #0f0f0f;
                }
                .text-dark {
                    color: #0f0f0f;
                }
                .text-light {
                    color: #f0f0f0;
                }
                .text-center {
                    text-align: center;
                }
                .text-right {
                    text-align: right;
                }
                .py-3 {
                    padding: 1rem 0.25rem;
                }
                a:link.btn, a:visited.btn {
                    background-color: #00c851;
                    color: white;
                    padding: 1rem 1.8rem;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    border-radius: .025rem;
                    transition: all 0.25s;
                }
                a:hover.btn, a:active.btn { 
                    background-color: #007e33;
                }
                table, td, th {
                    border: 1px solid black;
                    border-collapse: collapse;
                }
                td, th {
                    padding: 0.25rem;
                }
                .table {
                    width: 75%;
                    margin: auto
                } 
            </style>     
        </head>
        <body>
            <div class="container">
            <div class="row bg-light py-2">
                <div class="col-12 text-center text-dark">
                <img src="${process.env.API_URI + '/assets/class-master.png'}" alt="Class Master" />
                <h1>CLASS MASTER</h1>
                </div>
            </div>
    `;
};

module.exports = header;
