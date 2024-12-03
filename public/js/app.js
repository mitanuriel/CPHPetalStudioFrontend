const API_BASE_URL = "http://localhost:8080/api";

document.addEventListener("DOMContentLoaded", () => {
    // Example: Fetch bouquets and display them
    fetch(`${API_BASE_URL}/bouquets`)
        .then(response => response.json())
        .then(data => {
            const output = document.getElementById("output");
            data.forEach(bouquet => {
                const div = document.createElement("div");
                div.textContent = bouquet.name;
                output.appendChild(div);
            });
        })
        .catch(error => console.error("Error:", error));
});
// This code snippet fetches the list of bouquets from the backend and displays them on the page.
// The API_BASE_URL variable is used to construct the URL for the API endpoint. The fetch function is used to make a GET request to the /bouquets endpoint,
// and the response is processed in a similar way as in the original script.js file. The list of bouquets is displayed in a div element with the id "output".