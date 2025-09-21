const mongoose=require('mongoose');
const uri='mongodb+srv://waqararshadwma15_db_user:HIfOqDbOOfzgiEQm@cluster0.3gfkwcw.mongodb.net/SMIT_8_Apis'
async function connectDB() {
    await mongoose.connect(uri)
}


module.exports = {
    connectDB
}