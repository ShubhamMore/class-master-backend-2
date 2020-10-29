const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const branchMembershipValidation = require('./cron-jobs/branch-membership.cron');

require('./database/mongoose');

// MANAGEMENT
const adminZoomRouter = require('./routers/admin-zoom.route');
const attendanceRouter = require('./routers/attendance.route');
const branchRouter = require('./routers/branch.route');
const budgetRouter = require('./routers/budget.route');
const courseRouter = require('./routers/course.route');
const couponRouter = require('./routers/coupon.route');
const courseMaterialRouter = require('./routers/course-material.route');
const batchRouter = require('./routers/batch.route');
const discountAndOfferRouter = require('./routers/discount-and-offer.route');
const dashboardRouter = require('./routers/dashboard.route');
const examRouter = require('./routers/exam.route');
const employeeRouter = require('./routers/employee.route');
const branchStudentRouter = require('./routers/branch-student.route');
const branchEmployeeRouter = require('./routers/branch-employee.route');
const employeeSalaryRouter = require('./routers/employee-salary.route');
const employeeLeaveRouter = require('./routers/employee-leave.route');
const instituteOrderRouter = require('./routers/institute-order.route');
const instituteRouter = require('./routers/institute.route');
const membershipRouter = require('./routers/membership.route');
// const onlineExamRouter = require('./routers/online-exam.route');
// const onlineExamQuestionRouter = require('./routers/online-exam-question.route');
const lectureRouter = require('./routers/lecture.route');
const lectureMaterialRouter = require('./routers/lecture-material.route');
const leadRouter = require('./routers/lead.route');
const scheduleRouter = require('./routers/schedule.route');
const studentCourseInstallmentReceiptRouter = require('./routers/student-course-installment-receipt.route');
const studentCourseInstallmentRouter = require('./routers/student-course-installment.route');
const studentCourseRouter = require('./routers/student-course.route');
const studentRouter = require('./routers/student.route');
const orderRouter = require('./routers/order.route');
const notificationRouter = require('./routers/notification.route');
const paymentRouter = require('./routers/payment.route');
const questionAnswersRouter = require('./routers/question-answers.route');
const instituteBillingRouter = require('./routers/institute-billing.route');
const instituteKeysRouter = require('./routers/institute-keys.route');
const profileRouter = require('./routers/profile.route');
const userRouter = require('./routers/user.route');
const zoomRouter = require('./routers/zoom.route');

const app = express();

app.use(express.json());

app.use(express.json({ limit: '100mb' }));

app.use(cors());
app.use(compression());

app.use(cookieParser());

app.use('/course-materials', express.static(path.join('course-materials')));
app.use('/lecture-materials', express.static(path.join('lecture-materials')));

app.use('/', express.static(path.join(__dirname, '../dist')));

app.use(express.static(path.join(__dirname, '../dist/online-meeting')));
app.use('/online-meeting', express.static(path.join(__dirname, '../dist/online-meeting')));

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
app.use(adminZoomRouter);
app.use(attendanceRouter);
app.use(branchRouter);
app.use(budgetRouter);
app.use(courseRouter);
app.use(couponRouter);
app.use(courseMaterialRouter);
app.use(batchRouter);
app.use(discountAndOfferRouter);
app.use(dashboardRouter);
app.use(employeeRouter);
app.use(branchEmployeeRouter);
app.use(branchStudentRouter);
app.use(employeeSalaryRouter);
app.use(employeeLeaveRouter);
app.use(examRouter);
app.use(instituteOrderRouter);
app.use(instituteRouter);
app.use(membershipRouter);
// app.use(onlineExamRouter);
// app.use(onlineExamQuestionRouter);
app.use(instituteKeysRouter);
app.use(instituteBillingRouter);
app.use(lectureRouter);
app.use(lectureMaterialRouter);
app.use(leadRouter);
app.use(orderRouter);
app.use(profileRouter);
app.use(paymentRouter);
app.use(questionAnswersRouter);
app.use(notificationRouter);
app.use(scheduleRouter);
app.use(studentCourseInstallmentReceiptRouter);
app.use(studentCourseInstallmentRouter);
app.use(studentCourseRouter);
app.use(studentRouter);
app.use(userRouter);
app.use(zoomRouter);

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

branchMembershipValidation();

module.exports = app;
