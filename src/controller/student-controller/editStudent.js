const Student = require('../../models/student.model');
const Course = require('../../models/course.model');
const History = require('../../models/history.model');
const User = require('../../models/user.model');
const errorHandler = require('../../handler/error.handler');

const editStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.body._id);

    if (!student) {
      throw new Error('Student Updation Failed');
    }

    if (student.email !== req.body.email) {
      let user = await User.find({ email: student.email });
      if (!user) {
        throw new Error('User Not Found..');
      }

      await User.findByIdAndRemove(user._id);

      const newUser = {
        name: req.body.name.toLowerCase(),
        email: req.body.email,
        password: req.body.password,
        userType: 'student',
      };
      user = new User(newUser);
      await user.save();
    }

    if (student.status !== req.body.status) {
      if (req.body.status === '0' || req.body.status === '2') {
        const user = await User.findOneAndRemove({
          email: student.email,
          userType: 'student',
        });
        if (!user) {
          throw new Error('Deactivation Failed, User Not Found');
        }
      } else if (req.body.status === '1') {
        const newUser = {
          name: student.name.toLowerCase(),
          email: student.email,
          password: req.body.password,
          userType: 'student',
        };
        const user = new User(newUser);
        await user.save();
      }
    }

    const updatedStudent = {
      _id: req.body._id,
      name: req.body.name.toLowerCase(),
      birthDate: req.body.birthDate,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      parentName: req.body.parentName,
      parentEmail: req.body.parentEmail,
      parentPhone: req.body.parentPhone,
      branch: req.body.branch,
      courseType: req.body.courseType,
      course: req.body.course,
      batch: req.body.batch,
      paidAmount: req.body.paidAmount,
      passoutYear: req.body.passoutYear,
      status: req.body.status,
    };

    const course = await Course.findById(updatedStudent.course);

    let totalFees = parseInt(course.totalFees);
    if (student.course.toString() === req.body.course.toString()) {
      updatedStudent.amountDue = totalFees - parseInt(updatedStudent.paidAmount);
    } else {
      if (parseInt(req.body.amountDue) > 0) {
        throw new Error('Cant Update Student Course, Due to Previous Fee Dues');
      }
      updatedStudent.paidAmount = 0;
      updatedStudent.amountDue = totalFees;
    }

    await Student.findByIdAndUpdate(req.body._id, updatedStudent);

    const history = await History.findOne({ student: student._id });

    if (student.branch != req.body.branch) {
      let index = null;
      let branch = null;
      let courseType = null;
      let course = null;

      history.branches.forEach((curBranch, br) => {
        if (req.body.branch.toString() == curBranch.branch.toString()) {
          index = br;
          branch = index;
        }
      });
      if (index == null) {
        const newBranch = {
          branch: req.body.branch,
          courseTypes: [
            {
              courseType: req.body.courseType,
              courses: [
                {
                  course: req.body.course,
                  batches: [
                    {
                      batch: req.body.batch,
                    },
                  ],
                },
              ],
            },
          ],
        };
        history.branches.push(newBranch);
      } else {
        index = null;
        history.branches[branch].courseTypes.forEach((curCourseType, ct) => {
          if (req.body.courseType.toString() == curCourseType.courseType.toString()) {
            index = ct;
            courseType = index;
          }
        });
        if (index == null) {
          const newCourseType = {
            courseType: req.body.courseType,
            courses: [
              {
                course: req.body.course,
                batches: [
                  {
                    batch: req.body.batch,
                  },
                ],
              },
            ],
          };
          history.branches[branch].courseTypes.push(newCourseType);
        } else {
          index = null;
          history.branches[branch].courseTypes[courseType].courses.forEach((curCourse, cr) => {
            if (req.body.course.toString() == curCourse.course.toString()) {
              index = cr;
              course = index;
            }
          });
          if (index == null) {
            const newCourse = {
              course: req.body.course,
              batches: [
                {
                  batch: req.body.batch,
                },
              ],
            };
            history.branches[branch].courseTypes[courseType].courses.push(newCourse);
          } else {
            index = null;
            history.branches[branch].courseTypes[courseType].courses[course].batches.forEach(
              (curBatch, ba) => {
                if (req.body.batch.toString() == curBatch.batch.toString()) {
                  index = ba;
                  batch = index;
                }
              }
            );
            if (index == null) {
              const newBatch = {
                batch: req.body.batch,
              };
              history.branches[branch].courseTypes[courseType].courses[course].batches.push(
                newBatch
              );
            }
          }
        }
        await History.findByIdAndUpdate(history._id, history);
      }
      await History.findByIdAndUpdate(history._id, history);
    } else if (student.courseType != req.body.courseType) {
      let index = null;
      let branch = null;
      let courseType = null;
      let course = null;
      history.branches.forEach((curBranch, br) => {
        if (req.body.branch.toString() == curBranch.branch.toString()) {
          branch = br;
          curBranch.courseTypes.forEach((curCourseType, ct) => {
            if (req.body.courseType.toString() == curCourseType.courseType.toString()) {
              index = ct;
              courseType = index;
            }
          });
          if (index == null) {
            const newCourseType = {
              courseType: req.body.courseType,
              courses: [
                {
                  course: req.body.course,
                  batches: [
                    {
                      batch: req.body.batch,
                    },
                  ],
                },
              ],
            };
            history.branches[branch].courseTypes.push(newCourseType);
          } else {
            index = null;
            history.branches[branch].courseTypes[courseType].courses.forEach((curCourse, cr) => {
              if (req.body.course.toString() == curCourse.course.toString()) {
                index = cr;
                course = index;
              }
            });
            if (index == null) {
              const newCourse = {
                course: req.body.course,
                batches: [
                  {
                    batch: req.body.batch,
                  },
                ],
              };
              history.branches[branch].courseTypes[courseType].courses.push(newCourse);
            } else {
              index = null;
              history.branches[branch].courseTypes[courseType].courses[course].batches.forEach(
                (curBatch, ba) => {
                  if (req.body.batch.toString() == curBatch.batch.toString()) {
                    index = ba;
                  }
                }
              );
              if (index == null) {
                const newBatch = {
                  batch: req.body.batch,
                };
                history.branches[branch].courseTypes[courseType].courses[course].batches.push(
                  newBatch
                );
              }
            }
          }
        }
      });
      await History.findByIdAndUpdate(history._id, history);
    } else if (student.course != req.body.course) {
      let index = null;
      let branch = null;
      let courseType = null;
      let course = null;

      history.branches.forEach((curBranch, br) => {
        if (req.body.branch.toString() == curBranch.branch.toString()) {
          branch = br;
          curBranch.courseTypes.forEach((curCourseType, ct) => {
            if (req.body.courseType.toString() == curCourseType.courseType.toString()) {
              courseType = ct;
              curCourseType.courses.forEach((curCourse, cr) => {
                if (req.body.course.toString() == curCourse.course.toString()) {
                  index = cr;
                  course = index;
                }
              });
              if (index == null) {
                const newCourse = {
                  course: req.body.course,
                  batches: [
                    {
                      batch: req.body.batch,
                    },
                  ],
                };
                history.branches[branch].courseTypes[courseType].courses.push(newCourse);
              } else {
                index = null;
                history.branches[branch].courseTypes[courseType].courses[course].batches.forEach(
                  (curBatch, ba) => {
                    if (req.body.batch.toString() == curBatch.batch.toString()) {
                      index = ba;
                    }
                  }
                );
                if (index == null) {
                  const newBatch = {
                    batch: req.body.batch,
                  };
                  history.branches[branch].courseTypes[courseType].courses[course].batches.push(
                    newBatch
                  );
                }
              }
            }
          });
        }
      });
      await History.findByIdAndUpdate(history._id, history);
    } else if (student.batch != req.body.batch) {
      let index = null;
      let branch = null;
      let courseType = null;
      let course = null;

      history.branches.forEach((curBranch, br) => {
        if (req.body.branch.toString() == curBranch.branch.toString()) {
          branch = br;
          curBranch.courseTypes.forEach((curCourseType, ct) => {
            if (req.body.courseType.toString() == curCourseType.courseType.toString()) {
              courseType = ct;
              curCourseType.courses.forEach((curCourse, cr) => {
                if (req.body.course.toString() == curCourse.course.toString()) {
                  course = cr;
                  curCourse.batches.forEach((curBatch, ba) => {
                    if (req.body.batch.toString() == curBatch.batch.toString()) {
                      index = ba;
                    }
                  });
                  if (index == null) {
                    const newBatch = {
                      batch: req.body.batch,
                    };
                    history.branches[branch].courseTypes[courseType].courses[course].batches.push(
                      newBatch
                    );
                  }
                }
              });
            }
          });
        }
      });
      await History.findByIdAndUpdate(history._id, history);
    }
    res.status(200).send({ success: true });
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = editStudent;
