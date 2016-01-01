var ua = require('universal-analytics');
module.exports = function (googleAnalyticsId) {
    return function (request, response, next) {
        if (!googleAnalyticsId) {
            setImmediate(next);
            return;
        }

        var visitor = ua(googleAnalyticsId);

        visitor.pageview({
            dp: request.url,
            dh: request.headers.host,
            uip: request.headers['x-forwarded-for'] || request.connection.remoteAddress
            ua: request.headers['user-agent'],
            dr: request.headers.referrer || request.headers.referer,
            de: request.headers['accept-encoding'],
            ul: request.headers['accept-language']
        }).send();

        next();
    };
};