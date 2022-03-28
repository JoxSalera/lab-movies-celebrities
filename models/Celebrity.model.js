// import
const mongoose = require("mongoose");

//schema
const schema = mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

// model
const Celebrity = mongoose.model("Celebrity", schema);

// export
module.exports = Celebrity;
