const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
const { addIncome, getIncomes, deleteIncomes } = require('../controllers/income')

const router  = require('express').Router()

// CEK di postman di foldern ini apakah berfungsi
router.get('/', (req,res) =>{
    res.send('Hello lur')
})

// DIGUNAKAN UNTUK POSTMAN INCOME
router.post('/add-income', addIncome)
        .get('/get-incomes', getIncomes)
        .delete('/delete-incomes/:id', deleteIncomes)

        // DIGUNAKAN UNTUK POSTMAN EXPENSE
        .post('/add-expense', addExpense)
        .get('/get-expense', getExpense)
        .delete('/delete-expense/:id', deleteExpense)

module.exports = router