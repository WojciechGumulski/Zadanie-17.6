var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

res.render('/auth/google', {
    res.render('main', {
		login: req.query.login,
		password: req.query.password
	});
});

app.get('/', function(req, res) {
    res.render('sign_up');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});