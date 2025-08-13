function updateTime()

let losAngelesElement = document.querySelector("#los-angeles");
if(losAngelesDateElement) {
    losAngelesDateElement = losAngelesElement.querySelector("#.date");
    losAngelesTimeElement = losAngelesElement.querySelector("#.time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss" [<small>]A[</small>]");

}

