module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        min: 2,
        max: 255,
      },
      username: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },
      email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },
      password: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },
      status: {
        type: Boolean,
        required: true,
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
