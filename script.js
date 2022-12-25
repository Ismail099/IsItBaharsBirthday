document.addEventListener('DOMContentLoaded', function () {

    const birthdayTime = document.querySelector('#birthdayTime')
    const countdownContainer = document.querySelector("#body")
    const daysCountdown = document.querySelector("#days")
    const hoursCountdown = document.querySelector("#hours")
    const minutesCountdown = document.querySelector("#minutes")
    const secondsCountdown = document.querySelector("#seconds")

    const currentTime = new Date()
    let yearOfTheEvent = currentTime.getFullYear()
    let eventDate = new Date(yearOfTheEvent, 11, 25, 14, 50, 00, 00)
    const isItJanuary1st = currentTime.getMonth() === 11 && currentTime.getDate() === 25 &&
        currentTime.getHours() === 14 && currentTime.getMinutes() === 50

    console.log(currentTime.getMonth() + "." + currentTime.getDate() + " " +
        currentTime.getMinutes() + ":" + currentTime.getSeconds())

    // let eventDate = new Date(yearOfTheEvent, 00, 27)
    // const isItJanuary1st = currentTime.getMonth === 00 && currentTime.getDate() === 27


    /**
     * @brief countdown Function which counts down to the specified date.
     */
    function countdown() {
        const now = new Date()

        if (now > eventDate) {
            // eventDate = new Date(yearOfTheEvent + 1, 00, 27)
            eventDate = new Date(yearOfTheEvent + 1, 11, 25)
        }
        else if (now.getFullYear() === eventDate.getFullYear() + 1) {
            // eventDate = new Date(now.getFullYear(), 00, 27)
            eventDate = new Date(now.getFullYear(), 11, 25)
            // eventDate = new Date("2022-12-25")
        }

        const currentTime = now.getTime()
        const eventTime = eventDate.getTime()
        const remainingTime = eventTime - currentTime

        let seconds = Math.floor(remainingTime / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        let days = Math.floor(hours / 24)

        hours %= 24
        minutes %= 60
        seconds %= 60

        if (isItJanuary1st) {
            alert('Happ Birthday, Bahar 🥳🥳')
            console.log('Happ Birthday, Bahar 🥳🥳')

            countdownContainer.style.display = "none"
            birthdayTime.style.display = "block"
        }
        else {
            daysCountdown.textContent = days
            hoursCountdown.textContent = hours
            minutesCountdown.textContent = minutes
            secondsCountdown.textContent = seconds

            setTimeout(countdown, 1000)
        }
    } // End of countdown

    // countdown()






    // Set the date we're counting down to
    var endDate = new Date("Jan 27 2023 00:00:00").getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = endDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in elements with id="cdHour/cdMin/cdSec"
        document.getElementById("daysNum").innerHTML = ("0" + days).slice(-2);
        document.getElementById("hoursNum").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minsNum").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("secsNum").innerHTML = ("0" + seconds).slice(-2);
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            alert('Happ Birthday, Bahar 🥳🥳')
            console.log('Happ Birthday, Bahar 🥳🥳')

            countdownContainer.style.display = "none"
            birthdayTime.style.display = "block"
        }
    }, 1000);

}) // end of DOMContentLoaded
