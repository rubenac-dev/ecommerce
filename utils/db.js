const mongoose = require('mongoose');

const urlDb = 'mongodb://127.0.0.1:27017/proyect'

const connect = async () => {
    try {
        await mongoose.connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`Conected with db succesfully`);
    }catch(error) {
        console.log('Error to connect with db')
    };
}

module.exports = {
    connect
};