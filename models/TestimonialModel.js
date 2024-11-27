import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    feedback: {
      type: String,
      trim: true,
      required: [true, 'Feedback is required'],
    },
    serviceType: {
        type: String,
        enum: ["commercial", "residential", "deep"],
        default: "commercial",
      },
  },
  { timestamps: true }
);

export default mongoose.model('Testimonial', testimonialSchema);
