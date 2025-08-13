function updateTime() {
    let losAngelesElement = document.getElementById("los-angeles");

    if(losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");

        let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss [<small>]A[</small>]");
    }

    let sydneyElement = document.getElementById("sydney");

    if(sydneyElement) {
        let sydneyDateElement = sydneyElement.querySelector(".date");
        let sydneyTimeElement = sydneyElement.querySelector(".time");

        let sydneyTime = moment().tz("Australia/Sydney");

sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("HH:mm:ss [<small>]A[</small>]");
    }
}

updateTime();
setInterval(updateTime, 1000);