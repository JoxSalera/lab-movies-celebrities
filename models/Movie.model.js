// import
const mongoose = require("mongoose");

//schema
const schema = mongoose.Schema({
  title: String,
  genre: String,
  plot: String,
  cast: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Celebrity",
  },
});

// model
const Movie = mongoose.model("Movie", schema);

// export
module.exports = Movie;
