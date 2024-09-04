const button = document.querySelector('button')
const closeIcon = document.querySelector('.close-icon')
const popup = document.querySelector('.popup-container')
const overlay = document.querySelector('.over-lay')


button.addEventListener('click', (e)=>{popup.classList.add('popup-open')})

closeIcon.addEventListener('click', (e)=>{popup.classList.remove('popup-open')}
)

overlay.addEventListener('click', (e)=>{popup.classList.remove('popup-open')}
)