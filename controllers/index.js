module.exports = function (app) {

    /*app.get('/', function (req, res) {
        if (req.session.isLoggedIn) {
            res.redirect('/home');
        } else {
            res.render('login', { title: 'Login'});
        }
    });*/

    app.get('./web-client/', function (req, res) {
        res.render('index', { title: 'In2Indie'});
    });

    app.get('/web-client/login', function (req, res){
        res.render('/web-client/login', { title: 'Login to In2Indie'});
    });

    app.get('/signup', function (req, res) {
        res.render('signup', { title: 'Sign up for In2Indie'});
    });

    app.get('/sample-video', function (req, res) {
        res.render('sample-video', { title: 'View Sample-Video'});
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