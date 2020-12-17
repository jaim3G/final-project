module.exports = app => {

    // Base URLS
    app.use('/api', require('./activity.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/files', require('./files.routes.js'))
    app.use('/api/mail', require('./email.routes.js'))
   // app.use('/api/watson', require('./watson.routes.js'))

}