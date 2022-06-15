// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Item = require('./models/item');
const Category = require('./models/category');
// const Garden = require('./models/garden');

// Local variables will come in handy for holding retrieved documents
let u, i, c, o;

// User.create({ name: 'Laura', email: 'laura@email.com', password: 'abcd' }).then(user => u = user)
// u.save()