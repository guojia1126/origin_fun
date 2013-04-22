var settings = require('../settings'),
  mongoose = require('mongoose');
if(settings.db.type=='mongo'){
  console.log(settings.db.dburl);
  mongoose.connect(settings.db.dburl);
}else{
  console.log('db_tpye='+settings.db.type);
}

module.exports = mongoose;