const Course = require('../../models/course.model');
const Branch = require('../../models/branch.model');
const errorHandler = require('../../handler/error.handler');

const generateBranchesAndCourses = async (branches, courses) => {
  const newBranches = new Array();

  branches.forEach((branch) => {
    const branchObj = {
      _id: branch._id,
      branchName: branch.branchName,
    };
    const newCourseTypes = new Array();
    branch.courseTypes.forEach((courseType) => {
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
          newCourses.push(courseObj);
        }
      });
      courseTypeObj.courses = newCourses;
      newCourseTypes.push(courseTypeObj);
    });
    branchObj.courseTypes = newCourseTypes;
    newBranches.push(branchObj);
  });

  return newBranches;
};

const getBranchesAndCourses = async (req, res) => {
  try {
    const branches = await Branch.find();
    if (branches.length < 1) {
      throw new Error('No Branch Found');
    }
    const courses = await Course.find();
    const data = await generateBranchesAndCourses(branches, courses);

    res.status(200).send(data);
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = getBranchesAndCourses;
