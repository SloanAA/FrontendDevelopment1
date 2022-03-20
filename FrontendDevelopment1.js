var ratings = document.querySelectorAll('.rating')

ratings.forEach(rating => {
        rating.addEventListener("click", () => {
                rating.classList.toggle('orange')
        })
})
