const MongoClient = require('mongodb').MongoClient;

const mongoUri = 'mongodb://hoers:hoersdbpassword@ds161901.mlab.com:61901/heroku_4kxj99wl';

module.exports = {
  get(request) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUri, (err, db) => {
        if (err) {
          reject(err);
        } else {
          const id = parseInt(request.params.id, 10);
          const collection = db.collection(request.params.noun);

          collection.findOne({ id }, (error, item) => {
            resolve(item);
            db.close();
          });
        }
      });
    });
  },
};
