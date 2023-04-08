const but1 = document.querySelector('#bt1')
const but2 = document.querySelector('#bt2')
const h11 = document.querySelector('#hh1')
const h22 = document.querySelector('#hh2')
const select = document.querySelector('#slct')

but1.style.backgroundColor = 'rgb(173,248,2)'
but2.style.backgroundColor = 'rgb(135,206,235)'


h11.innerText = 0
but1.addEventListener('click', function () {
    h11.innerText++
    if (h11.innerText === select.options[select.selectedIndex].innerText) {
        but1.disabled = true
        but2.disabled = true
        h11.style.color = 'green'
        h22.style.color = 'red'
    }

})

h22.innerText = 0
but2.addEventListener('click', function () {
    h22.innerText++
    if (h22.innerText === select.options[select.selectedIndex].innerText) {
        but1.disabled = true
        but2.disabled = true
        h11.style.color = 'red'
        h22.style.color = 'green'
    }
})

const resetBtn = document.querySelector('#bt3')
resetBtn.addEventListener('click', function () {
    h11.innerText = 0, h22.innerText = 0, but1.disabled = false, but2.disabled = false
    h11.style.color = 'black', h22.style.color = 'black'

})
resetBtn.style.backgroundColor = 'rgb(255,87,51)'
