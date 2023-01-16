const Database = require('./api/config/database');
const config = require('./api/config/config');
const app = require('./api/app');

Database.connect();

app.listen(config.PORT, err => {
    if (err) return console.log(err)
    console.log(`Servidor corriendo en el puerto: ${config.PORT}`);
})