let item = document.querySelector('.item')

item.style.width = '500px'
item.style.height = '500px'
item.style.transitionDuration = '6s'


item.addEventListener('click', () => {
    item.classList.toggle('rotated')
})

