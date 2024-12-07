const IncomeSchema = require("../models/incomeModels")

exports.addIncome = async(req, res) =>{
    const {judul,jumlah,kategori,deskripsi,date} = req.body

    // membuat instance
    const income = IncomeSchema({
        judul,
        jumlah,
        kategori,
        deskripsi,
        date
    })

    try {
        // validasi jika inputan tidak sesuai
        if(!judul || !kategori || !deskripsi || !date ){
            return res.status(400).json({message: 'Semua kolom harus diisi, tidak boleh kosong!'})
        }
        if (jumlah <= 0 || !jumlah === 'number') {
            return res.status(400).json({ message: "jumlah harus positif dan bertipe integer" })
        }
        await income.save()
        res.status(200).json({message:'Income Successfully'})
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
        
    }
    console.log(income);

}

exports.getIncomes = async(req,res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
        
    }
}

exports.deleteIncomes = async(req,res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
        res.status(200).json({ message: "Income Deleted" });

        })
        .catch((err) =>{
        res.status(500).json({ message: "Server Error" });

        })

}