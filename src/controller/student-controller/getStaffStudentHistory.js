const History = require('../../models/history.model');

const Staff = require('../../models/staff.model');

const Branch = require('../../models/branch.model');
const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const constructStaffStudentHistory = async (branches, staffBranch, staffCourseTypes) => {
  const branch = await Branch.find();
  const course = await Course.find();
  const batch = await Batch.find();

  const branchArr = new Array();
  branches.forEach((curBranchHistory) => {
    if (curBranchHistory.branch.toString() === staffBranch.toString()) {
      const thisBranch = branch.find((curBranch) => curBranchHistory.branch == curBranch._id);
      let branchObj = {};
      branchObj._id = thisBranch._id;
      branchObj.branch = thisBranch.branchName;
      const courseTypeArr = new Array();
      curBranchHistory.courseTypes.forEach((curCourseTypeHistory) => {
        if (staffCourseTypes.includes(curCourseTypeHistory.courseType.toString())) {
          const thisCourseType = thisBranch.courseTypes.find(
            (curCourseType) => curCourseTypeHistory.courseType == curCourseType._id
          );
          if (thisCourseType.status === '1') {
            let courseTypeObj = {};
            courseTypeObj._id = thisCourseType._id;
            courseTypeObj.courseType = thisCourseType.courseType;
            const courseArr = new Array();
            curCourseTypeHistory.courses.forEach((curCourseHistory) => {
              const thisCourse = course.find(
                (curCourse) => curCourseHistory.course == curCourse._id
              );
              let courseObj = {};
              courseObj._id = thisCourse._id;
              courseObj.course = thisCourse.courseName;
              const batchArr = new Array();
              curCourseHistory.batches.forEach((curBatchHistory) => {
                const thisBatch = batch.find((curBatch) => curBatchHistory.batch == curBatch._id);
                let batchObj = {};
                batchObj._id = thisBatch._id;
                batchObj.batch = thisBatch.batchName;
                batchArr.push(batchObj);
              });

              courseObj.batches = batchArr;
              courseArr.push(courseObj);
            });

            courseTypeObj.courses = courseArr;
            courseTypeArr.push(courseTypeObj);
          }
        }
      });
      branchObj.courseTypes = courseTypeArr;
      branchArr.push(branchObj);
    }
  });

  return branchArr;
};

const getStaffStudentHistory = async (req, res) => {
  try {
    const staff = await Staff.findById(req.body.staff, { branch: 1, courseTypes: 1 });

    const history = await History.findOne({
      student: req.body.student,
    });
    if (!history) {
      throw new Error('No Student History Found');
    }

    const studentHistory = await constructStaffStudentHistory(
      history.branches,
      staff.branch,
      staff.courseTypes
    );

    res.status(200).send({ history: studentHistory });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStaffStudentHistory;
