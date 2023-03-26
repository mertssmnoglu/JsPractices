const networkError = document.getElementById('internetyok')
window.addEventListener('online', () => {
    networkError.style.display = 'none'
})

window.addEventListener('offline', () => {
    networkError.style.display = 'block'
})
