document.addEventListener("DOMContentLoaded", function () {
    const reserveForm = document.querySelector(".reserve-form");

    if (reserveForm) {
        reserveForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload or redirection

            const copiesAvailableElement = document.querySelector("dd:nth-of-type(5)");
            let copiesAvailableText = copiesAvailableElement.innerText;
            let copiesAvailable = parseInt(copiesAvailableText.split(" ")[0]); // Extract number of copies
            
            if (copiesAvailable <= 0) {
                alert("Sorry, no copies are available for reservation.");
                return false;
            }

            const confirmReservation = confirm("Do you want to reserve this book?");
            if (confirmReservation) {
                copiesAvailable--; // Reduce count by 1
                copiesAvailableElement.innerText = `${copiesAvailable} out of 5`; // Update displayed count

                alert("Book reserved successfully!");
                
                // Instead of submitting, you can send the data to backend via fetch() if needed
                // fetch("/reserve", { method: "POST", body: JSON.stringify({ title: "The Great Gatsby" }) });
            }
        });
    }
});
