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
      phone_number: {
        type: String,
        required: true,
        length: 11,
      },
      phone_verified: {
        type: Boolean,
        required: true,
        default: false,
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
      role: {
        type: String,
        required: true,
        default: "student",
        min: 6,
        max: 255,
      },
      image: {
        type: String,
        required: true,
        default: "default_image.jpg",
        min: 6,
        max: 255,
      },
      status: {
        type: Boolean,
        required: true,
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

  const User = mongoose.model("user", schema);
  return User;
};
