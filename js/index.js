document.addEventListener('DOMContentLoaded', () => {

    // switch mode

    const isMatchesDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches

    if(isMatchesDarkMode) {
        switchMode()
    }

    const modeSwitch = document.querySelector('#mode-switch')
    modeSwitch.addEventListener('click', switchMode)


    // switch image

    const thumbs = document.querySelectorAll('.thumbs__image')
    const image = document.querySelector('.photo__pic')
    thumbs.forEach(pic => {
        pic.addEventListener("click", switchPic(image))
    })

    // fadein effect on switching

    const observer = new MutationObserver(([record], observer) => {
        record.target.style = ""
        record.target.style.opacity = 0
        requestAnimationFrame((time) => {
            record.target.style.transition = "opacity .3s ease-in-out"
            record.target.style.opacity = 1
        })
    })

    observer.observe(image, {
        attributes: true,
        attributeFilter: ["src"]
    })
})

function switchMode() {
    document.documentElement.classList.toggle('dark-mode')
}

function switchPic(targetEl) {
    return function (event) {
        targetEl.src = event.target.src
    }
}