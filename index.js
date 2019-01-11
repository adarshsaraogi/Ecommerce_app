import express from 'express';
import path from 'path';
// import url from 'url';
// import morgan from 'morgan';

const app = express();
// Declaring  path for the css
// view engine setup using pug js
app.set('view engine', 'pug');
app.set('views', './views');
// static file for css and images
app.use(express.static('public'));
// app.use(express.static(font));
app.get('/', (req, res) => {
  // const parsedurl = url.parse(req.url, true);
  // console.log(req.body);
  res.render('index.pug');
});
app.listen(process.env.PORT || 25000, () => console.log('The app listening to the port 25000'));
