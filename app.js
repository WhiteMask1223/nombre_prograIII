const express = require ('express');
const path = require ('path');
const app = express();
const morgan = require ('morgan');


const rutas =  require('./routes/rutas.js');


app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(morgan('dev'));
app.use('/', rutas);
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});