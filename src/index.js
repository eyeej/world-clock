let losAngelesElement = document.querySelector("#los-angeles");
losAngelesDateElement = losAngelesElement.querySelector("#.date");
losAngelesTimeElement = losAngelesElement.querySelector("#.time");

losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = "06:43 <small>PM</small>";
