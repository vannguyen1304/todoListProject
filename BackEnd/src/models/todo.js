const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/f8_dev");

const schema = mongoose.Schema;

const accountSchema = new schema(
  {
    todo: String,
    isCompleted: Boolean,
  },
  {
    collection: "todo",
  }
);

module.exports = mongoose.model("todo", accountSchema);
