const admin = require('../admin');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(async () => {
    try {
      await admin();
      console.log('Connected to Database');
    } catch (e) {
      throw new Error(e);
    }
  })
  .catch((e) => {});
