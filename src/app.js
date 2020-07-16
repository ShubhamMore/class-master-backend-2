const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');
var cors = require('cors');

require('./database/mongoose');

// MANAGEMENT
// const attendanceRouter = require('./routers/attendance.route');
const branchRouter = require('./routers/branch.route');
// const budgetRouter = require('./routers/budget.route');
const courseRouter = require('./routers/course.route');
// const batchRouter = require('./routers/batch.route');
// const dashboardRouter = require('./routers/dashboard.route');
// const examRouter = require('./routers/exam.route');
const employeeRouter = require('./routers/employee.route');
const employeeBranchRouter = require('./routers/employee-branch.route');
const employeeSalaryRouter = require('./routers/employee-salary.route');
// const onlineExamRouter = require('./routers/online-exam.route');
// const onlineExamQuestionRouter = require('./routers/online-exam-question.route');
// const lectureContentRouter = require('./routers/lecture-content.route');
// const lectureRouter = require('./routers/lecture.route');
// const receiptRouter = require('./routers/receipt.route');
// const leadRouter = require('./routers/lead.route');
// const scheduleRouter = require('./routers/schedule.route');
// const studentRouter = require('./routers/student.route');
const orderRouter = require('./routers/order.route');
const paymentRouter = require('./routers/payment.route');
const instituteBillingRouter = require('./routers/institute-billing.route');
const profileRouter = require('./routers/profile.route');
const userRouter = require('./routers/user.route');

const app = express();

app.use(express.json());

app.use(cors());
app.use(compression());

app.use('/lecture-contents', express.static(path.join('lecture-contents')));

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('tiny'));

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// MANAGEMENT
// app.use(attendanceRouter);
app.use(branchRouter);
// app.use(budgetRouter);
app.use(courseRouter);
// app.use(batchRouter);
// app.use(dashboardRouter);
app.use(employeeRouter);
app.use(employeeBranchRouter);
app.use(employeeSalaryRouter);
// app.use(examRouter);
// app.use(onlineExamRouter);
// app.use(onlineExamQuestionRouter);
// app.use(lectureContentRouter);
// app.use(lectureRouter);
// app.use(receiptRouter);
// app.use(leadRouter);
// app.use(scheduleRouter);
// app.use(studentRouter);
app.use(orderRouter);
app.use(paymentRouter);
app.use(instituteBillingRouter);
app.use(profileRouter);
app.use(userRouter);

app.use((req, res, next) => {
  const error = new Error('NOT FOUND');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
