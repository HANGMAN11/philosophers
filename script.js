// Get the filter buttons and philosopher cards
const allBtn = document.getElementById("allBtn");
const britishBtn = document.getElementById("britishBtn");
const continentalBtn = document.getElementById("continentalBtn");
const philosopherCards = document.querySelectorAll(".philosopher-card");

// Add event listeners to the filter buttons
allBtn.addEventListener("click", () => {
    filterPhilosophers("all")
}
)

britishBtn.addEventListener("click", () =>{
    filterPhilosophers("British Empiricist")
})

continentalBtn.addEventListener("click", () =>{
    filterPhilosophers("Continental Rationalist")
})

// Function to filter philosophers based on their movement
function filterPhilosophers(movement){
    philosopherCards.forEach((card) => {
        const cardMovement = card.querySelector(".movement").textContent.trim();
        if (movement==='all'||cardMovement===movement){
            card.style.display = "grid";
        } else{
            card.style.display = "none";
        }
    })
}
// Initialize by showing all philosophers
filterPhilosophers("all");


