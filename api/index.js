const app = require('./app');
const mongoose = require('mongoose');


require('dotenv').config();


mongoose.connect(`${process.env.CONECTION}`);

mongoose.connection.once('open', _ => {
    
    console.log('Database is connected');

    app.listen(process.env.PORT, () => {
        console.log(`Listening in port:${process.env.PORT}` );
    });
})

mongoose.connection.on('error', err => {
    console.log(err)
})
