const Assignment = require('../../models/assignment.model');
const BranchStorage = require('../../models/branch-storage.model');

const deleteFile = require('../../uploads/delete-file');

const request = require('request-promise');

const awsUploadFile = require('../../uploads/aws-upload/awsUploadFile');

const getNotificationRequest = (notification) => {
  const options = {
    method: 'POST',
    url: process.env.API_URI + '/sendNotification',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + process.env.SERVER_TOKEN,
    },
    body: notification,
    json: true,
  };

  return request(options);
};

const errorHandler = require('../../handler/error.handler');

const saveAssignment = async (req, res) => {
  try {
    const file = req.file;

    req.body.generatedBy = req.user.imsMasterId;

    const branchStorage = await BranchStorage.findOne({ branch: req.body.branch });

    if (!branchStorage) {
      throw new Error('Branch Storage not Found');
    }

    let availableBranchStorage =
      branchStorage.totalStorageAssigned - branchStorage.totalStorageUsed;

    if (availableBranchStorage <= 0) {
      throw new Error('Storage is Full, File Uploading Failed');
    }

    let usedBranchStorage = branchStorage.totalStorageUsed;
    let totalFileUploadSize = 0;

    let attachment = {
      storageType: null,
      fileName: null,
      fileSize: null,
      fileType: null,
      secureUrl: null,
      publicId: null,
    };

    if (file && file !== undefined) {
      const fileSize = file.size;

      if (fileSize > availableBranchStorage) {
        await deleteFile(file.path);
        throw new Error('Branch Storage is full');
      }

      const filePath = file.path;
      let fileName = file.filename;

      const cloudDirectory = req.user.imsMasterId + '/' + req.body.branch + '/assignments';
      const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

      const uploadRes = uploadResponce.uploadRes;

      usedBranchStorage += fileSize;
      totalFileUploadSize += fileSize;
      availableBranchStorage -= fileSize;

      let fileType;
      const curFileType = file.filename.substring(file.filename.lastIndexOf('.') + 1);

      if (curFileType === 'pdf') {
        fileType = 'PDF';
      } else if (curFileType === 'mp4') {
        fileType = 'MP4';
      } else {
        fileType = 'IMAGE';
      }

      fileName = `${file.filename.substring(0, file.filename.lastIndexOf('-'))}.${curFileType}`;

      const regularStorage = +branchStorage.regularStorageAssigned;
      const storageType = usedBranchStorage > regularStorage ? 'extra' : 'regular';

      attachment.storageType = storageType;
      attachment.fileName = fileName;
      attachment.fileSize = fileSize;
      attachment.fileType = fileType;
      attachment.secureUrl = uploadRes.Location;
      attachment.publicId = uploadRes.key;

      await BranchStorage.findOneAndUpdate(
        { branch: req.body.branch },
        {
          $inc: {
            totalStorageUsed: totalFileUploadSize,
          },
        }
      );
    }

    const newAssignment = {
      ...req.body,
      ...attachment,
    };

    const assignment = new Assignment(newAssignment);
    await assignment.save();

    res.status(200).send(assignment);

    const assinmentDetails = await Assignment.aggregate([
      { $match: { _id: assignment._id } },
      {
        $addFields: {
          branchId: { $toObjectId: '$branch' },
          categoryId: { $toObjectId: '$category' },
          courseId: { $toObjectId: '$course' },
          batchId: { $toObjectId: '$batch' },
          subjectId: { $toObjectId: '$subject' },
        },
      },

      {
        $lookup: {
          from: 'courses',
          let: { course: '$courseId', subject: '$subjectId' },
          pipeline: [
            {
              $match: { $expr: { $eq: ['$_id', '$$course'] } },
            },
            { $project: { basicDetails: 1, subjects: 1, _id: 0 } },
            { $addFields: { subjectId: '$$subject' } },
            {
              $project: {
                basicDetails: 1,
                tempSubject: {
                  $filter: {
                    input: '$subjects',
                    as: 'subject',
                    cond: {
                      $eq: ['$$subject._id', '$subjectId'],
                    },
                  },
                },
              },
            },
            {
              $replaceRoot: {
                newRoot: { $mergeObjects: [{ $arrayElemAt: ['$tempSubject', 0] }, '$$ROOT'] },
              },
            },
            {
              $project: {
                _id: 0,
                subjectName: '$subject',
                courseName: '$basicDetails.courseName',
              },
            },
          ],
          as: 'courses',
        },
      },
      {
        $lookup: {
          from: 'batches',
          let: { batch: '$batchId' },
          pipeline: [
            {
              $match: { $expr: { $eq: ['$_id', '$$batch'] } },
            },
            { $project: { basicDetails: 1, _id: 0 } },
            { $project: { batchName: '$basicDetails.batchName' } },
          ],
          as: 'batches',
        },
      },

      {
        $lookup: {
          from: 'studentcourses',
          let: {
            branchId: '$branch',
            categoryId: '$category',
            courseId: '$course',
            batchId: '$batch',
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$branch', '$$branchId'] },
                    { $eq: ['$category', '$$categoryId'] },
                    { $eq: ['$course', '$$courseId'] },
                    { $eq: ['$batch', '$$batchId'] },
                  ],
                },
              },
            },

            {
              $project: {
                _id: 0,
                student: 1,
              },
            },

            {
              $lookup: {
                from: 'students',
                let: {
                  imsId: '$student',
                },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $eq: ['$imsMasterId', '$$imsId'],
                      },
                    },
                  },

                  {
                    $project: {
                      _id: 0,
                      imsMasterId: 1,
                      phone: 1,
                      name: 1,
                      email: 1,
                    },
                  },
                ],
                as: 'students',
              },
            },
            {
              $replaceRoot: {
                newRoot: {
                  $mergeObjects: [
                    {
                      $arrayElemAt: ['$students', 0],
                    },
                    '$$ROOT',
                  ],
                },
              },
            },

            { $project: { students: 0, student: 0 } },
          ],
          as: 'students',
        },
      },

      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              {
                $arrayElemAt: ['$courses', 0],
              },
              '$$ROOT',
            ],
          },
        },
      },

      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              {
                $arrayElemAt: ['$batches', 0],
              },
              '$$ROOT',
            ],
          },
        },
      },
      {
        $project: {
          courses: 0,
          batches: 0,
          branchId: 0,
          categoryId: 0,
          courseId: 0,
          batchId: 0,
          subjectId: 0,
          __v: 0,
        },
      },
    ]);

    if (assinmentDetails[0]) {
      const _assignment = assinmentDetails[0];

      const userNotificationRequests = new Array();

      const assignmentMessage = `You Have new Assignment on topic ${_assignment.topic} of Subject ${
        _assignment.subjectName
      } of course ${_assignment.courseName} submit before ${_assignment.submissionDate
        .split('-')
        .reverse()
        .join('-')}
    } `;

      for (let student of _assignment.students) {
        const newNotification = {
          receiverId: student.imsMasterId,
          title: 'New Assignment',
          message: assignmentMessage,
        };

        notificationRequest = getNotificationRequest(newNotification);

        userNotificationRequests.push(notificationRequest);
      }

      try {
        Promise.all(userNotificationRequests)
          .then((resData) => {})
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    errorHandler(e, 400, res);
  }
};

module.exports = saveAssignment;
