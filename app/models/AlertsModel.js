module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: {
        type: String,
        default: null,
        min: 2,
        max: 255,
      },
      message: {
        type: String,
        default: null,
        min: 2,
      },
      status: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Alert = mongoose.model("alert", schema);
  return Alert;
};
