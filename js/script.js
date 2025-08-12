let slider = document.getElementById('btn-slider')
let style = document.getElementById('style')

slider.addEventListener('click', () => {
    slider.classList.toggle('active')

    if(slider.classList.contains('active')) {
        style.textContent = 'Claro'
    } else {
        style.textContent = 'Escuro'
    }
})