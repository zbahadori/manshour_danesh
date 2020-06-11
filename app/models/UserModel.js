module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: {
        type: String,
        default: null,
        min: 2,
        max: 255,
      },
      lastname: {
        type: String,
        default: null,
        min: 2,
        max: 255,
      },
      name_english: {
        type: String,
        default: null,
        min: 2,
        max: 255,
      },
      lastname_english: {
        type: String,
        default: null,
        min: 2,
        max: 255,
      },
      phone_number: {
        type: Number,
        required: true,
        length: 11,
      },
      phone_number: {
        type: Number,
        default: null,
        unique: true,
        length: 11,
      },
      father_name: {
        type: String,
        default: null,
        min: 2,
        max: 255,
      },
      phone_verified: {
        type: Boolean,
        default: false,
      },
      grade: {
        type: Number,
        default: null,
      },
      provance: {
        type: String,
        default: null,
        min: 2,
        max: 255,
      },
      city: {
        type: String,
        default: null,
        min: 2,
        max: 255,
      },
      school: {
        type: String,
        default: null,
        min: 2,
        max: 255,
      },
      national_id: {
        type: Number,
        default: null,
        length: 10,
      },
      national_id_image: {
        type: String,
        default: null,
        min: 5,
        max: 255,
      },
      role: {
        type: String,
        required: true,
        default: "student",
        min: 6,
        max: 255,
      },
      user_image: {
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
