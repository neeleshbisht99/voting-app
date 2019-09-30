const mongoose=require('mongoose');
mongoose.set('debug',true);
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/vote', {
    useNewUrlParser: true,
    useUnifiedTopology: true},
     (err, client) => { if (err) {
    console.error(err)
    return
  }})

module.exports.User=require('./user');
module.exports.Poll=require('./poll');
