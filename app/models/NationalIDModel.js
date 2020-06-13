module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      phone_number: {
        type: String,
        required: true,
        unique: true,
        length: 11,
      },
      national_id: {
        type: String,
        required: true,
        unique: true,
        length: 10,
      },
      national_id_image: {
        type: String,
        required: true,
        min: 5,
        max: 255,
      },
      verified: {
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

  const NationalID = mongoose.model("national_id", schema);
  return NationalID;
};
