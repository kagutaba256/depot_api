const mongoose = require("mongoose");
const slugify = require("slugify");

const DepotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  slug: String,
  schema: {
    type: Object,
    required: [true, "Schema is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create slug from name
DepotSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("Depot", DepotSchema);
