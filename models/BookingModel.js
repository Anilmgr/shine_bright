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
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      validate: {
        validator: phoneValidator,
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    serviceType: {
      type: String,
      enum: ["commercial", "residential", "deep"],
      default: "commercial",
      required: true,
    },
    preferredDate: {
      type: Date,
      required: [true, 'Preferred date is required'],
      validate: {
        validator: function (date) {
          return date >= new Date();
        },
        message: 'Preferred date cannot be in the past.',
      },
    },
    preferredTime: {
      type: String,
      required: [true, 'Preferred time is required'],
      validate: {
        validator: function (time) {
          return /^([01]\d|2[0-3]):[0-5]\d$/.test(time);
        },
        message: 'Preferred time must be in HH:mm format (e.g., 14:30).',
      },
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    specialInstructions: {
      type: String,
      trim: true,
    },
    bookingStatus: {
      type: String,
      enum: ["unconfirmed", "confirmed", "processing", "finished"],
      default: "unconfirmed",
      required: true,
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
