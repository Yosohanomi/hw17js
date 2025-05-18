const btn = document.querySelector('.btn')
const text = document.querySelector('.text')
btn.textContent = text.textContent

const image = document.querySelector('.image')
image.src = '/img/Без названия (51).jpg'

const link = document.querySelector('.link')
link.href = '/img/Без названия (51).jpg'
const linkImage = document.querySelector('.image__link')

linkImage.alt = 'Peter says to do hw'
console.log(linkImage.alt)

const list = document.querySelector('.list')
list.firstElementChild.textContent = 'bbbb'