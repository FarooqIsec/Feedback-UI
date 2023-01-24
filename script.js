const ratingElement = document.querySelectorAll(".rating");
const btnE1 = document.getElementById('btn');
const containerE = document.getElementById('condiner')

let selectedrating = "";



ratingElement.forEach((ratingElemen) => {
    ratingElemen.addEventListener("click", (even) => {
    removeActive(); 
        selectedrating = even.target.innerText || even.target.parentNode.innerHTML;

        even.target.classList.add("active");
        even.target.parentNode.classList.add("active");


    });
});

btnE1.addEventListener('click', ()=>{
    if(selectedrating!==""){
        containerE.innerHTML = 
        `   <strong>Thanks for give the review!</strong> 
        <br>
        <br>
        <strong>Feedback: ${selectedrating}</strong>
        <p>Thanks provide the better review.We will improve our costemer support:)</p>
        
        `
    }
} )

function removeActive(){
    ratingElement.forEach((ratingElemen) => {
        ratingElemen.classList.remove("active"); 
    });
}