module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      phone_number: {
        type: String,
        required: true,
        length: 11,
      },
      code: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const loginCode = mongoose.model("login_code", schema);
  return loginCode;
};
