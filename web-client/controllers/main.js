module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index', { title: 'In2Indie'});
    });
 
    app.get('/success', function(req, res, next) {
        res.redirect('/home'); 
    });
 
    app.get('/error', function(req, res, next) {
        res.send("Error logging in.");
    });

    app.get('/home', function (req, res) {
        res.render('home', { title: 'In2Indie'});
    });

    app.get('/login', function (req, res){
        res.render('login', { title: 'Login to In2Indie'});
    });

    app.get('/signup', function (req, res) {
        res.render('signup', { title: 'Sign up for In2Indie'});
    });

    app.get('/result', function (req, res) {
        res.render('result', { title: 'Result:'});
    });

    app.get('/browse', function (req, res) {
        res.render('browse', { title: 'Browse'});
    });

    app.get('/profile', function (req, res) {
        res.render('profile', { title: 'profile'});
    });

    app.get('/settings', function (req, res) {
        res.render('settings', { title: 'Settings'});
    });

    app.get('/logout', function (req, res) {
        res.render('logout', {title: 'Logout'});
    });

    app.get('/about', function (req, res) {
        res.render('about', { title: 'About'});
    });

    app.get('/FAQ', function (req, res) {
        res.render('FAQ', { title: 'FAQ'});
    });

    app.get('/privacy', function (req, res) {
        res.render('privacy', { title: 'Privacy'});
    });

    app.get('/contact', function (req, res) {
        res.render('contact', { title: 'Contact Us'});
    });

}
