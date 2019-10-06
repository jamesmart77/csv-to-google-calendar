# CSV to Google Calendar

With the limitations of Google Calendar import not allowing the upload of event attendees and notification overrides, this repository was conceived!

This application is built following the Node.JS Quickstart section of the [Google Calendar API Guide](https://developers.google.com/calendar/quickstart/nodejs?authuser=1).

### Prerequisites
1. Node.js
2. NPM


### Library Dependencies
1. googleapis 
    1. `npm install googleapis@39 --save`
2. csvtojson 
    1. `npm install csvtojson --save`



### Initial Setup
1. Navigate to the [Google Calendar Quickstart](https://developers.google.com/calendar/quickstart/nodejs?authuser=1) guide for Node.JS.
2. Complete the first two steps in the Quickstart guide
    1. Download the `credentials.json` file and add to root directory