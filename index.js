var ua = require('universal-analytics');
module.exports = function (googleAnalyticsId) {
    return function (userId, request, response, next) {
        if (!userId) {
            setImmediate(next);
            return;
        }

        var visitor = ua(userId);

        visitor.pageview({
            dp: request.url,
            dh: request.headers.host,
            uip: request.headers['x-forwarded-for'] || request.connection.remoteAddress,
            ua: request.headers['user-agent'],
            dr: request.headers.referrer || request.headers.referer,
            de: request.headers['accept-encoding'],
            ul: request.headers['accept-language']
        }).send();

        next();
    }.bind(this, googleAnalyticsId);
};