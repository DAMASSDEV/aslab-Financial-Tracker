const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    judul: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50,
    },
    jumlah: {
      type: Number,
      required: true,
      maxLength: 20,
      trim: true,
    },
    tipe: {
      type: String,
      default: "expense",
    },
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    kategori: {
      type: String,
      required: true,
      trim: true,
    },
    deskripsi: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", ExpenseSchema);
