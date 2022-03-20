
var rating = document.querySelectorAll('.rating')

rating.forEach(rating => {

rating.addEventListener("click", orange)
})



function orange() 
{
        rating.style.background = 'hsl(25, 97%, 53%)';
        rating.style.color = 'hsl(0, 0%, 100%)';
}
