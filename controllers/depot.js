const Depot = require("../models/Depot");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc      Get all depots
// @route     GET /api/v1/depots
exports.getDepots = asyncHandler(async (req, res, next) => {
  const depots = await Depot.find();
  res.status(200).json({ success: true, data: depots });
});

// @desc      Create new depot
// @route     POST /api/v1/depots
exports.createDepot = asyncHandler(async (req, res, next) => {
  const depot = await Depot.create(req.body);
  res.status(201).json({ success: true, data: depot });
});
