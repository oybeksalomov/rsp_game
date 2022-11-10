window.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice')


    let r = 'rock',
        s = 'scissors',
        p = 'paper'

    
    let user = choices.forEach((item) => {
        let userChoose
        item.addEventListener('click', () => {
           userChoose = item.name
        })
    })
    console.log(typeof user)
    const compChoose = Math.floor(Math.random() * 3)
    let computer
    if (compChoose == 0) {
        computer = r
    } else if (compChoose == 1) {
        computer = s
    } else if (compChoose == 2) {
        computer = p
    }
    
})