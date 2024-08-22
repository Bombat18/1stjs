const planes = document.querySelectorAll('.panel')
planes.forEach(plane => {
    plane.addEventListener('click', () => {
        removeActiveClasses()
        plane.classList.add('active')
    })
})

function removeActiveClasses() {
    planes.forEach(panel => {
        panel.classList.remove('active')
    })
}
