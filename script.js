const username = document.querySelector('.username')
const password = document.querySelector('.password')
const toggleBtn = document.querySelector('.password-button')
const face = document.querySelector('.face')
const tongue = document.querySelector('.tongue')
const hands = document.querySelectorAll('.hand')

// username
username.addEventListener('focus', () => {
    const length = username.value.length

    if(length < 31) {
        face.style.transform = `rotate(${15 - length}deg)`
    }

})

username.addEventListener('blur', () => {
    face.style.transform = 'rotate(0deg)'
})

username.addEventListener('input', () => {
    const length = username.value.length
    if(length < 31) {
        face.style.transform = `rotate(${15 - length}deg)`
    }
})



// password
password.addEventListener('focus', () => {
    tongue.classList.remove('breath')
    
    hands.forEach(hand => {
        hand.classList.add('hide')
    })
})

password.addEventListener('blur', () => {
    tongue.classList.remove('breath')
    
    hands.forEach(hand => {
        hand.classList.remove('hide')
    })
})

// show password
toggleBtn.addEventListener('mousedown', () => {
    password.type = 'text'
    // tongue.classList.remove('breath')

    hands.forEach(hand => {
        hand.classList.remove('hide')
        hand.classList.add('peek')
    })
})

toggleBtn.addEventListener('mouseup', () => {
    hands.forEach(hand => {
        hand.classList.remove('peek')
    })
    password.type = 'password'
    password.focus()
})


window.addEventListener('mouseup', () => {
    password.type = 'password'
    hands.forEach(hand => {
        hand.classList.remove('peek')
    })
})
