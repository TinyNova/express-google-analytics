# express_google_analytics

## Pushing Access Logs to Google Analytics

A middleware for express to publish access logs to Google Analytics. Useful for tracking API usage on microservice APIs built on express.

##### How to implement
---

```javascript
// Get the module
var expressGoogleAnalytics = require('express-google-analytics');

// Insert your Google Analytics Id, Shoule be something like 'UA-12345678-9'
var analytics = expressGoogleAnalytics('YOUR_ANALYTICS_ID_HERE');

//Add to express before your routes
app.use(analytics);

```
