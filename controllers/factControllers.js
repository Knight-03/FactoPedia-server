const Fact = require("../models/factModel");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require('./../utils/catchAsync');

exports.getAllFacts = async (req, res) => {
  // console.log(req.query);
  try {
    const features = new APIFeatures(Fact.find(), req.query).filter();
    const fact = await features.query;
    res.status(200).json({
      status: "success",
      data: {
        fact,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.createFact = async (req, res) => {
  try {
    // console.log(req.body);
    const newFact = await Fact.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newFact,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateEmojis = async (req, res) => {
  // console.log(req.body);
  const id = req.params.id;
  const action = req.query.action;

  try {
    const updateField =
      action === "likes"
        ? { likes: 1 }
        : action === "repeats"
        ? { repeats: 1 }
        : action === "disputed"
        ? { disputed: 1 }
        : {};

    const updatedFact = await Fact.findByIdAndUpdate(
      id,
      { $inc: updateField },
      { new: true }
    );

    res.status(200).json({
      status : 'success',
      data : {
        updatedFact
      }
    })
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
