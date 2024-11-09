import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
        message: props => `${props.value} is not a valid email!`
      },
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
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
      required: true,
      validate: {
        validator: function (date) {
          return date >= new Date();
        },
        message: 'Preferred date cannot be in the past.',
      },
    },
    preferredTime: {
      type: String,
      required: true,
      validate: {
        validator: function (time) {
          return /^([01]\d|2[0-3]):[0-5]\d$/.test(time); // Validates time in HH:mm format
        },
        message: 'Preferred time must be in HH:mm format (e.g., 14:30).',
      },
    },
    address: {
      type: String,
      required: true,
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
  }, { timestamps: true });

  export default mongoose.model('Booking', bookingSchema);