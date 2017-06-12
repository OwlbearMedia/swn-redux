const jwt = require('jsonwebtoken');
const credential = require('credential');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const pw = credential();
// @todo: move username and password to config file
const mongoUri = 'mongodb://hoers:hoersdbpassword@ds161901.mlab.com:61901/heroku_4kxj99wl';

/*
// check header or url parameters or post parameters for token
var token = req.body.token || req.query.token || req.headers['x-access-token'];

// decode token
if (token) {

  // verifies secret and checks exp
  jwt.verify(token, app.get('superSecret'), function(err, decoded) {
    if (err) {
      return res.json({ success: false, message: 'Failed to authenticate token.' });
    } else {
      // if everything is good, save to request for use in other routes
      req.decoded = decoded;
      next();
    }
  });

} else {

  // if there is no token
  // return an error
  return res.status(403).send({
    success: false,
    message: 'No token provided.'
  });

function isAuthenticated(user) {

}
*/

const api = {
  authenticate(request) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUri, (err, db) => {
        if (err) {
          reject(err);
        } else {
          const collection = db.collection('users');

          collection.findOne({ login: request.body.login }, (error, user) => {
            if (user) {
              pw.verify(user.password, request.body.password).then((isValid) => {
                if (isValid) {
                  // @todo: move secret key to config file
                  const token = jwt.sign(user, 'superSecret', {
                    expiresIn: '2 days',
                  });
                  resolve({
                    token,
                    login: user.login,
                    character: user.character,
                    name: `${user.firstName} ${user.lastName}`,
                  });
                } else {
                  reject({ message: 'Username or password is incorrect' });
                }
              });
            } else {
              reject({ message: 'Username or password is incorrect' });
            }
          });
        }
      });
    });
  },

  get(request) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUri, (err, db) => {
        if (err) {
          reject(err);
        } else {
          const id = parseInt(request.params.id, 10);
          const collection = db.collection(request.params.noun);

          collection.findOne({ _id: id }, (error, item) => {
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

  saveUser(request) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUri, (err, db) => {
        if (err) {
          reject(err);
        } else {
          const user = request.body;
          const collection = db.collection('users');

          pw.hash(user.password).then((hash) => {
            user.password = hash;

            collection.insert(user, (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result.ops[0]);
              }
              db.close();
            });
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

  update(request) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUri, (err, db) => {
        if (err) {
          reject(err);
        } else {
          const id = parseInt(request.params.id, 10);
          const collection = db.collection(request.params.noun);

          collection.updateOne({ _id: id }, { $set: request.body }, (error, result) => {
            if (error) {
              reject(error);
            } else if (result.ok) {
              resolve({ message: `Sector ${id} successfully updated.` });
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

  app.post('/api/authenticate', (request, response) => {
    api.authenticate(request).then((data) => {
      response.send(data);
    }).catch((err) => {
      response.status(400).send(err);
    });
  });

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

  app.post('/api/users', (request, response) => {
    api.saveUser(request).then((data) => {
      response.send(data);
    });
  });

  app.post('/api/:noun', (request, response) => {
    api.save(request).then((data) => {
      response.send(data);
    });
  });

  app.put('/api/:noun/:id', (request, response) => {
    api.update(request).then((data) => {
      response.send(data);
    });
  });

  return app;
};
