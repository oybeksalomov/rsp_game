window.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice'),
        gameResult = document.querySelector('.gameResult'),
        userChoice = document.querySelector('.user'),
        computerChoice = document.querySelector('.computer'),
        userResult = document.querySelector('.userResult'),
        username = document.querySelector('.username'),
        addInput = document.querySelector('.addInput'),
        computerResult = document.querySelector('.computerResult'),
        reset = document.querySelector('.resetBtn')

    /* Birinchi page'dan Username'ni input orqali olib, 2-page'ga qo'yish kerak -----------------------*/

    // get Username from input
    // game function
    let userChangeType = Number(userResult.innerHTML),
        compChangeType = Number(computerResult.innerHTML)

    function playGame(user, computer) {
        if (user == computer) {
            gameResult.innerHTML = "Tie!"
           
        } else if (user == 'rock' && computer == 'scissors') {
            gameResult.innerHTML = "You Win!"
            userResult.innerHTML = 1 + userChangeType++
            userResult.classList.add('numberAnimation')
        } else if (user == 'scissors' && computer == 'paper') {
            gameResult.innerHTML = "You Win!"
            userResult.innerHTML = 1 + userChangeType++
            userResult.classList.add('numberAnimation')
        } else if (user == 'paper' && computer == 'rock') {
            gameResult.innerHTML = "You Win!"
            userResult.innerHTML = 1 + userChangeType++
            userResult.classList.add('numberAnimation')
        } else {
            gameResult.innerHTML = "You Lose!"
            computerResult.innerHTML = 1 + compChangeType++
            computerResult.classList.add('numberAnimation')
        }
        setTimeout(() => {
            userResult.classList.remove('numberAnimation')
            computerResult.classList.remove('numberAnimation')
        }, 500)
    }

    // Show choices of user and computer function
    function showChoice(user, computer) {
        userChoice.innerHTML = `<img src='img/${user}.png' alt='picture' class='col-6 col-sm-5'>`
        computerChoice.innerHTML = `<img src='img/${computer}.png' alt='picture' class='col-6 col-sm-5'>`
    }

    // User choose one
    choices.forEach((item) => {
        item.addEventListener('click', () => {
            userChoice.innerHTML = "<img src='img/rock.png' alt='picture' class='col-6 col-sm-5'>"
            computerChoice.innerHTML = "<img src='img/rock.png' alt='picture' class='col-6 col-sm-5'>"
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
            userChoice.classList.add('userAnimation')
            computerChoice.classList.add('compAnimation')

            setTimeout(() => {
                userChoice.classList.remove('userAnimation')
                computerChoice.classList.remove('compAnimation')
            }, 1000)
            setTimeout(() => {playGame(item.name, computerChoose)}, 1000)
            setTimeout(() => {showChoice(item.name, computerChoose)}, 1000)   
        })
    })
    
    // Reset function
    reset.addEventListener('click', () => {
        window.location.reload()
    })

    // Calculate results function

    
})