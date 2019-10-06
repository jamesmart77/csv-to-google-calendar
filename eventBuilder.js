const csv = require('csvtojson');
const data = require("./volunteers");

async function parseCsv() {

    let events = [];
    const csvFilePath = './data.csv'

    await csv()
        .fromFile(csvFilePath)
        .on('data',(data)=>{
            //data is a buffer object
            const jsonStr= JSON.parse(data.toString('utf8'));
            events.push(buildEvent(jsonStr));
        })
        .on('done',(error)=>{
            if (error) {
                console.error("ERROR! Message: ", error);
            } else {
                console.log("Finished parsing csv!");
            }
        })
    
    return events;
}


buildEvent = (data) => {
    const { 
        date, 
        bibleText, 
        musicLead, 
        guitar1, 
        guitar2, 
        piano, 
        drums, 
        vocalist, 
        computer, 
        preschool1, 
        preschool2, 
        nursery1, 
        nursery2,
        } = data;

    const attendees = buildAttendees(data);
    let description = `Thank you so much for serving! Please see below for who is serving where:

    <b>Bible Text</b>: ${bibleText}
    <b>Preschool</b>: ${preschool1} & ${preschool2} 
    <b>Nursery</b>: ${nursery1} & ${nursery2} 
    <b>Computer</b>: ${computer} 
    <b>Music Lead</b>: ${musicLead}\n`;

        
    if (guitar1) description += `    <b>Guitar</b>: ${guitar1}\n`;
    if (guitar2) description += `    <b>Additional Guitar</b>: ${guitar2}\n`;
    if (piano) description += `    <b>Piano</b>: ${piano}\n`;
    if (drums) description += `    <b>Drums</b>: ${drums}\n`;
    if (vocalist) description += `    <b>Vocalist</b>: ${vocalist}\n`;

    return {
        'summary': 'Sunday Serving',
        'description': description,
        'start': {
          'dateTime': `${date}T08:30:00-04:00`,
        },
        'end': {
          'dateTime': `${date}T12:00:00-04:00`,
        },
        'attendees': attendees,
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60 * 6},  // 6 days
            {'method': 'popup', 'minutes': 24 * 60},      // 1 day
          ],
        }
    };
}

buildAttendees = (data) => {
    const { 
        guitar1, 
        guitar2, 
        piano, 
        drums, 
        vocalist, 
        computer, 
        preschool1, 
        preschool2, 
        nursery1, 
        nursery2,
    } = data;

    const attendees = [];

    if (guitar1) attendees.push(findVolunteerEmail(guitar1));
    if (guitar2) attendees.push(findVolunteerEmail(guitar2));
    if (piano) attendees.push(findVolunteerEmail(piano));
    if (drums) attendees.push(findVolunteerEmail(drums));
    if (vocalist) attendees.push(findVolunteerEmail(vocalist));
    if (computer) attendees.push(findVolunteerEmail(computer));
    if (preschool1) attendees.push(findVolunteerEmail(preschool1));
    if (preschool2) attendees.push(findVolunteerEmail(preschool2));
    if (nursery1) attendees.push(findVolunteerEmail(nursery1));
    if (nursery2) attendees.push(findVolunteerEmail(nursery2));

    return attendees;

}

findVolunteerEmail = (name) => {
    const volunteer = data.volunteers.find(volunteer => volunteer.name === name);
    return {
        displayName: name,
        email: volunteer.email
    }
}

module.exports = parseCsv;