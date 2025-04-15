// Task 7: Add New Recommendation
function addRecommendation() {
    let newRecommendation = document.getElementById("new-recommendation").value;
    if (newRecommendation) {
        let recommendationSection = document.getElementById("recommendations");
        let newDiv = document.createElement("div");
        newDiv.classList.add("recommendation");
        newDiv.innerHTML = `<p>${newRecommendation}</p>`;
        recommendationSection.appendChild(newDiv);

        // Show popup confirmation
        showPopup();
    }
}

// Task 9: Popup Confirmation
function showPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
}
