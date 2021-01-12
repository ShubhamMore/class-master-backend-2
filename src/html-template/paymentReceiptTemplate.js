const header = require('./header');
const footer = require('./footer');

const getDate = (date) => {
  date = new Date(date);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return year + '-' + month + '-' + day;
};

const paymentReceiptTemplate = async (branch, paymentReceipt) => {
  const receiptAmount = +paymentReceipt.amount;

  const gstAmount = (receiptAmount * 0.18).toFixed(2);
  const amount = (receiptAmount - gstAmount).toFixed(2);
  const totalAmount = receiptAmount.toFixed(2);

  return `
    ${header()}
  
    <div class="row">
      <div class="col-12">
        <h4>Payment Receipt of Branch ${branch.basicDetails.branchName}.</h4>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-12 text-center">
        <h2>Class Master</h2>
        <h3>Thane, Thane - 400 605</h3>
      </div>
      <div class="col-12">
        <p class="text-right"><strong>Date: </strong> ${getDate(
          branch.currentPlanDetails.activationDate
        )}</p>
      </div>
    </div>
    <br />
    <br />

    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th>Particular</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${paymentReceipt.packageType}&nbsp;${paymentReceipt.planType} Activation Plan</td>
              <td>${amount}/-</td>
            </tr>
            <tr>
              <td>GST (18%)</td>
              <td>${gstAmount}/-</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Grand Total</th>
              <th>${totalAmount}/-</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <br />
    <br />
    <div class="row">
      <div class="col-12">
        <h4 class="text-center">
          *This is Computer Generated Receipt, Does not Required any Stamp or Signature.
        </h4>
      </div>
    </div>

    ${footer()}
    `;
};

module.exports = paymentReceiptTemplate;
