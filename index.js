var gcm = require('node-gcm');

// Create a message
// ... with default values
//var message = new gcm.Message();

// ... or some given values
var message = new gcm.Message({
    collapseKey: 'demo',
    priority: 'high',
    contentAvailable: true,
    delayWhileIdle: true,
    timeToLive: 3,
    restrictedPackageName: "somePackageName",
    dryRun: true,
    data: {
        key1: 'message1',
        key2: 'message2'
    },
    notification: {
        title: "Hello, World",
        icon: "ic_launcher",
        body: "This is a notification that will be displayed if your app is in the background."
    }
});

// Change the message data
// ... as key-value
/*message.addData('key1','message1');
message.addData('key2','message2');

// ... or as a data object (overwrites previous data object)
message.addData({
    key1: 'message1',
    key2: 'message2'
});*/

// Set up the sender with you API key
var sender = new gcm.Sender(process.env.API_KEY);

// Add the registration tokens of the devices you want to send to
var registrationTokens = [];
registrationTokens.push('dV_32YFU43Y:APA91bG0PqFtbxj_xbBz9-8dVZIP43TMAj31MixzoFrZO4WiyCqfAEEVA0CWVmyVKRLum497_Ko_OYG95JkyIGPOodZLMN7TJOCk7SWUY3B8fdGb0Amt6FbUJtPo_13CNSSEbLpIQqek');
registrationTokens.push('881b965a8a4d2b0d0b6bc61fa4fd32b2289cfe7c');

// Send the message
// ... trying only once
sender.sendNoRetry(message, { registrationTokens: registrationTokens }, function(err, response) {
  if(err) console.error(err);
  else    console.log(response);
});
/*
// ... or retrying
sender.send(message, { registrationTokens: registrationTokens }, function (err, response) {
  if(err) console.error(err);
  else    console.log(response);
});

// ... or retrying a specific number of times (10)
sender.send(message, { registrationTokens: registrationTokens }, 10, function (err, response) {
  if(err) console.error(err);
  else    console.log(response);
});*/