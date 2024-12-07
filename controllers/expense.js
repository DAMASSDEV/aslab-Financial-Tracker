const ExpenseSchema = require("../models/expenseModel");


exports.addExpense = async (req, res) => {
  const { judul, jumlah, kategori, deskripsi, date } = req.body;

  // membuat instance
  const expense = ExpenseSchema ({
    judul,
    jumlah,
    kategori,
    deskripsi,
    date,
  });

  try {
    // validasi jika inputan tidak sesuai
    if (!judul || !kategori || !deskripsi || !date) {
      return res
        .status(400)
        .json({ message: "Semua kolom harus diisi, tidak boleh kosong!" });
    }
    if (jumlah <= 0 || !jumlah === "number") {
      return res
        .status(400)
        .json({ message: "jumlah harus positif dan bertipe integer" });
    }
    await expense.save();
    res.status(200).json({ message: "Expense Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
  console.log(expense);
};

exports.getExpense = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense Deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server Error" });
    });
};
