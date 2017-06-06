const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const mongoUri = 'mongodb://hoers:hoersdbpassword@ds161901.mlab.com:61901/heroku_4kxj99wl';

const api = {
  get(request) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUri, (err, db) => {
        if (err) {
          reject(err);
        } else {
          const id = parseInt(request.params.id, 10);
          const collection = db.collection(request.params.noun);

          collection.findOne({ id }, (error, item) => {
            if (error) {
              reject(error);
            } else {
              resolve(item);
              db.close();
            }
          });
        }
      });
    });
  },

  getAll(request) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUri, (err, db) => {
        if (err) {
          reject(err);
        } else {
          const collection = db.collection(request.params.noun);

          collection.find().toArray((error, items) => {
            if (error) {
              reject(error);
            } else {
              resolve(items);
              db.close();
            }
          });
        }
      });
    });
  },

  save(request) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUri, (err, db) => {
        if (err) {
          reject(err);
        } else {
          const collection = db.collection(request.params.noun);

          collection.insert(request.body, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result.ops[0]);
              db.close();
            }
          });
        }
      });
    });
  },
};

module.exports = function (app) {
  app.use(bodyParser.json());

  app.get('/api/:noun/:id', (request, response) => {
    api.get(request).then((data) => {
      response.send(data);
    });
  });

  app.get('/api/:noun', (request, response) => {
    api.getAll(request).then((data) => {
      response.send(data);
    });
  });

  app.post('/api/:noun', (request, response) => {
    api.save(request).then((data) => {
      response.send(data);
    });
  });

  return app;
};
