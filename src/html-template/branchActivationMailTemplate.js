const header = require('./header');
const footer = require('./footer');

const getDate = (date) => {
  date = new Date(date);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return year + '-' + month + '-' + day;
};

const branchActivationMailTemplate = async (branch) => {
  return `
    ${header()}
    <div class="row">
        <div class="col-12">
          <h3>Your Branch ${branch.basicDetails.branchName} is Activated Successfully!!</h3>
          <h4>Your Activation Details are as Follows:</h4>
          <p>
            <strong>Plan Type: </strong> ${branch.currentPlanDetails.planType}
            <br />
            <strong>Activation Date: </strong> ${getDate(branch.currentPlanDetails.activationDate)}
            <br />
            <strong>Expiry Date: </strong> ${getDate(branch.currentPlanDetails.expiryDate)}
          </p>
        </div>
      </div>
      ${footer()}
    `;
};

module.exports = branchActivationMailTemplate;
