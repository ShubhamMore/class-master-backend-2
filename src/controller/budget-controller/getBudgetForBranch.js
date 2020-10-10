const Budget = require('../../models/budget.model');
const errorHandler = require('../../handler/error.handler');

const getBudgetForBranch = async (req, res) => {
  try {
    const query = {
    
      branch: req.body.branch,
    }
    if (req.body.month !=='' && req.body.year!=='') {
      const date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*');
     query.date = date;
      
    } else if (req.body.year!=='') {
      const date = new RegExp('.*' + req.body.year + '.*');
    query.date = date;
    }

  
    const income = await Budget.find({...query, type: 'income'});
    const expense = await Budget.find({...query, type: 'expense'});

    res.status(201).send({ income, expense });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBudgetForBranch;
