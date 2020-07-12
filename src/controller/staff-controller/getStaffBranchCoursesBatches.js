const Staff = require('../../models/staff.model');
const Branch = require('../../models/branch.model');
const Course = require('../../models/course.model');
const Batch = require('../../models/batch.model');
const errorHandler = require('../../handler/error.handler');

const generateBranchCoursesBatches = async (branches, courseTypes, courses, batches) => {
  const newBranch = new Array();

  branches.forEach((branch) => {
    const branchObj = {
      _id: branch._id,
      branchName: branch.branchName,
    };
    const newCourseTypes = new Array();
    branch.courseTypes.forEach((courseType) => {
      if (courseTypes.includes(courseType._id) && courseType.status === '1') {
        const courseTypeObj = {
          _id: courseType._id,
          courseType: courseType.courseType,
        };

        const newCourses = new Array();

        courses.forEach((course) => {
          if (course.courseType == courseType._id) {
            const courseObj = {
              _id: course._id,
              courseName: course.courseName,
            };
            const newBatches = new Array();
            batches.forEach((batch) => {
              if (batch.course == course._id) {
                const batchObj = {
                  _id: batch._id,
                  batchName: batch.batchName,
                };
                newBatches.push(batchObj);
              }
            });
            courseObj.batches = newBatches;
            newCourses.push(courseObj);
          }
        });
        courseTypeObj.courses = newCourses;
        newCourseTypes.push(courseTypeObj);
      }
    });
    branchObj.courseTypes = newCourseTypes;
    newBranch.push(branchObj);
  });

  return newBranch;
};

const getStaffBranchCoursesBatches = async (req, res) => {
  try {
    const staff = await Staff.findById(req.body._id);
    if (!staff) {
      throw new Error('No Staff Found');
    }

    const branch = await Branch.find({ _id: staff.branch });
    if (!branch) {
      throw new Error('No Branch Found');
    }

    const courses = await Course.find({ branch: branch[0]._id });

    const batches = await Batch.find({ branch: branch[0]._id });

    const data = await generateBranchCoursesBatches(branch, staff.courseTypes, courses, batches);

    res.status(200).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getStaffBranchCoursesBatches;
