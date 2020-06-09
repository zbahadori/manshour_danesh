module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      phone_number: {
        type: String,
        required: true,
        length: 11,
      },
      Phone_code: {
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

  const User = mongoose.model("user", schema);
  return User;
};
