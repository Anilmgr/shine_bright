import mongoose from "mongoose";

// Utility function to validate phone numbers (can be extended for different formats)
const phoneValidator = (v) => /^\d{10}$/.test(v);

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
    },
    serviceType: {
      type: String,
      enum: ["commercial", "residential", "deep"],
      default: "commercial",
    },
    preferredDate: {
      type: Date,
    },
    preferredTime: {
      type: String,
    },
    address: {
      type: String,
    },
    specialInstructions: {
      type: String,
      trim: true,
    },
    bookingStatus: {
      type: String,
      enum: ["unconfirmed", "confirmed", "processing", "finished"],
      default: "unconfirmed",
    },
    statusUpdatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

bookingSchema.pre('save', function (next) {
  if (this.isModified('bookingStatus')) {
    this.statusUpdatedAt = Date.now();
  }
  next();
});

export default mongoose.model('Booking', bookingSchema);
