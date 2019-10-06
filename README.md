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
3. Update the `volunteer.json` file with all persons you intend to include on calendar invites
4. Add the `csv` file you will be using to import all your events and title it `data.csv`.
    1. Ensure your events have at least Start and End dates, and a Summary. These are Google Calendar requirements
5. In the `eventBuilder.js` file update the `buildEvent` and `buildAttendees` based on the column headers and values you plan on using. 

This application was originally created to solve the need to easily create events for Sunday morning church volunteer areas and the existing columns you can see in the `eventBuilder.js` file represent such. They have been left there as an example for you.


### Run It
1. Once you have completed the initial setup and are ready to upload your events, simply run `node .`
    1. You should be prompted initially with authorization from Google so you can acquire a Token. 
    2. Then, if you have appropriately configured, all your events will be published on the appropriate Google Calendar.