module.exports = app => {

    // Base URLS
    app.use('/api', require('./activity.routes.js'))
}