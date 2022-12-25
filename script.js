// @ts-check
document.addEventListener('DOMContentLoaded', function () {

    const birthdayTime = document.querySelector('#birthdayTime')
    const countdownContainer = document.querySelector("#container")


    const currentDtTime = new Date()
    let yearOfTheEvent = currentDtTime.getFullYear()

    // Set the date we're counting down to "Jan 27 2023 00:00:00"
    let endDate = new Date(yearOfTheEvent, 00, 27, 19, 00)
    let endDateTime = endDate.getTime()

    let isItJanuary27th;


    /**
     * @brief countdown Function which counts down to the specified date.
     */
    // @ts-check
    // var x = setInterval(function () {
    function countdown() {
        const now = new Date()

        isItJanuary27th = now.getMonth() === endDate.getMonth() &&
            now.getDate() === endDate.getDate() &&
            now.getHours() === endDate.getHours() &&
            now.getMinutes() === endDate.getMinutes()

        if (now > endDate) {
            endDateTime = new Date(yearOfTheEvent + 1, endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes(), endDate.getMilliseconds()).getTime()
        }
        else if (now.getFullYear() === endDate.getFullYear() + 1) {
            endDate = new Date(now.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes(), endDate.getMilliseconds())
        }

        // Find the distance between now an the count down date
        var distance = endDateTime - now.getTime();

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // If the count down is over, write some text 
        if (isItJanuary27th) {
            countdownContainer.style.display = "none"
            birthdayTime.style.display = "block"
            alert('Happ Birthday, Bahar 🥳🥳')
        }
        else {
            // Output the result in elements with id="cdHour/cdMin/cdSec"
            document.getElementById("daysNum").innerHTML = ("0" + days).slice(-3);
            document.getElementById("hoursNum").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minsNum").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("secsNum").innerHTML = ("0" + seconds).slice(-2);

            setTimeout(countdown, 1000)
        }

    // }, // End of countdown
    //    1000)
    }
    countdown()

}) // end of DOMContentLoaded
