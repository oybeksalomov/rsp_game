window.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice'),
        gameResult = document.querySelector('.gameResult'),
        userChoice = document.querySelector('.user'),
        computerChoice = document.querySelector('.computer')

    // game function
    function playGame(user, computer) {

        if (user == computer) {
            gameResult.innerHTML = "Tie!"
        } else if (user == 'rock' && computer == 'scissors') {
            gameResult.innerHTML = "You Win!"
        } else if (user == 'scissors' && computer == 'paper') {
            gameResult.innerHTML = "You Win!"
        } else if (user == 'paper' && computer == 'rock') {
            gameResult.innerHTML = "You Win!"
        } else {
            gameResult.innerHTML = "You Lose!"
        }

        console.log(user)
        console.log(computer)
    }

    // Show choices of user and computer function
    function showChoice(user, computer) {
        userChoice.innerHTML = `<img src='img/${user}.png' alt='picture' class='col-6 col-sm-5'>`
        computerChoice.innerHTML = `<img src='img/${computer}.png' alt='picture' class='col-6 col-sm-5'>`
    }
    
    // User choose one
    choices.forEach((item) => {
        item.addEventListener('click', () => {

            // Computer choose random
            const compRandom = Math.floor(Math.random() * 3)
            let computerChoose
            if (compRandom == 0) {
                computerChoose = 'rock'
            } else if (compRandom == 1) {
                computerChoose = 'scissors'
            } else if (compRandom == 2) {
                computerChoose = 'paper'
            }

            playGame(item.name, computerChoose)
            showChoice(item.name, computerChoose)    
        })
    })
    
    

    
})