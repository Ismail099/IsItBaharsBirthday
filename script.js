document.addEventListener('DOMContentLoaded', function(){

    const birthdayTime = document.querySelector('#birthdayTime')
    const countdownContainer = document.querySelector("#coutndown")
    const daysCountdown = document.querySelector("#days")
    const hoursCountdown = document.querySelector("#hours")
    const minutesCountdown = document.querySelector("#minutes")
    const secondsCountdown = document.querySelector("#seconds")

    const currentTime = new Date()
    let yearOfTheEvent = currentTime.getFullYear()
    let eventDate = new Date(yearOfTheEvent, 00, 27)
    const isItJanuary1st = currentTime.getMonth === 01 && currentTime.getDate() === 27


    /**
     * @brief countdown Function which counts down to the specified date.
     */
    function countdown() {
        const now = new Date()

        if (now > eventDate) {
            eventDate = new Date(yearOfTheEvent + 1, 00, 27)
        }
        else if (now.getFullYear(), 00, 27) {
            eventDate = new Date(now.getFullYear(), 00, 27)
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
}) // end of DOMContentLoaded
