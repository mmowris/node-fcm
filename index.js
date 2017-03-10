"use strict";
const apn = require('apn');
var key = require("./APNsAuthKey_49GQKEW5EP.p8");
let options = {
  token: {
     key: key,
     // Replace keyID and teamID with the values you've previously saved.
     keyId: "49GQKEW5EP",
     teamId: "WCQEEPJWL6"
   },
   production: false
 };
 
let apnProvider = new apn.Provider(options);

// Replace deviceToken with your particular token:
let deviceToken = "D4F2693A9D33E0D101BC3B86CB8A711713E96390D912E27E3A2F65A1F348BD2A";

// Prepare the notifications
let notification = new apn.Notification();
notification.expiry = Math.floor(Date.now() / 1000) + 24 * 3600; // will expire in 24 hours from now
notification.badge = 2;
notification.sound = "ping.aiff";
notification.alert = "Hello from solarianprogrammer.com";
notification.payload = {'messageFrom': 'Solarian Programmer'};

// Replace this with your app bundle ID:
notification.topic = "com.cleeq.ios";

// Send the actual notification
apnProvider.send(notification, deviceToken).then( result => {
// Show the result of the send operation:
console.log(result);
});
 
 
// Close the server
apnProvider.shutdown();