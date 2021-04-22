const cron = require('node-cron');

const BranchStorage = require('../models/branch-storage.model');
const CourseMaterial = require('../models/course-material.model');
const LectureMaterial = require('../models/lecture-material.model');
const Assignment = require('../models/assignment.model');
const AssignmentSubmission = require('../models/assignment-submission.model');

const awsRemoveFile = require('../uploads/aws-upload/awsRemoveFile');

const getDate = () => {
  let d = new Date();
  const tempDate = d.setDate(d.getDate() - 7);

  d = new Date(tempDate);

  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    d.getDate().toString().padStart(2, '0');
  return date;
};

const deleteBranchExtraStorage = async () => {
  cron.schedule(
    '00 15 00 * * *', // Every day on 00:15:00
    async () => {
      const date = getDate();

      try {
        const branches = await BranchStorage.aggregate([
          { $match: { extraStorageExpireOn: date } },
        ]);

        for (let branch of branches) {
          const branchId = branch._id.toString();

          const awsFilesToRemove = new Array();

          const assignments = await Assignment.find({
            branch: branchId,
            storageType: 'extra',
          });

          const assignmentSubmissions = await AssignmentSubmission.find({
            branch: branchId,
            storageType: 'extra',
          });

          const lectureMaterials = await LectureMaterial.find({
            branch: branchId,
            storageType: 'extra',
          });

          const courseMaterials = await CourseMaterial.find({
            branch: branchId,
            storageType: 'extra',
          });

          for (let assignment of assignments) {
            if (assignment.publicId) {
              awsFilesToRemove.push(awsRemoveFile(assignment.publicId));
            }
          }

          for (let assignmentSubmission of assignmentSubmissions) {
            if (assignmentSubmission.publicId) {
              awsFilesToRemove.push(awsRemoveFile(assignmentSubmission.publicId));
            }
          }

          for (let lectureMaterial of lectureMaterials) {
            if (lectureMaterial.publicId) {
              awsFilesToRemove.push(awsRemoveFile(lectureMaterial.publicId));
            }
          }

          for (let courseMaterial of courseMaterials) {
            if (courseMaterial.publicId) {
              awsFilesToRemove.push(awsRemoveFile(courseMaterial.publicId));
            }
          }

          try {
            Promise.all(awsFilesToRemove)
              .then(async (resData) => {
                try {
                  await Assignment.updateMany(
                    {
                      branch: branchId,
                      storageType: 'extra',
                    },
                    {
                      $set: {
                        storageType: null,
                        fileName: null,
                        fileSize: null,
                        fileType: null,
                        secureUrl: null,
                        publicId: null,
                      },
                    }
                  );

                  await AssignmentSubmission.updateMany(
                    {
                      branch: branchId,
                      storageType: 'extra',
                    },
                    {
                      $set: {
                        storageType: null,
                        fileName: null,
                        fileSize: null,
                        fileType: null,
                        secureUrl: null,
                        publicId: null,
                      },
                    }
                  );

                  await LectureMaterial.updateMany(
                    {
                      branch: branchId,
                      storageType: 'extra',
                    },
                    {
                      $set: {
                        storageType: null,
                        fileName: null,
                        fileSize: null,
                        fileType: null,
                        secureUrl: null,
                        publicId: null,
                      },
                    }
                  );

                  await CourseMaterial.updateMany(
                    {
                      branch: branchId,
                      storageType: 'extra',
                    },
                    {
                      $set: {
                        storageType: null,
                        fileName: null,
                        fileSize: null,
                        fileType: null,
                        secureUrl: null,
                        publicId: null,
                      },
                    }
                  );
                } catch (e) {}
              })
              .catch((e) => {});
          } catch (e) {}
        }

        await BranchStorage.updateMany(
          { extraStorageExpireOn: { $lt: date } },
          {
            $set: {
              extraStorageExpireOn: null,
            },
          },
          { multi: true }
        );
      } catch (e) {}
    },
    {
      scheduled: true,
      timezone: 'Asia/Kolkata',
    }
  );
};

module.exports = deleteBranchExtraStorage;
