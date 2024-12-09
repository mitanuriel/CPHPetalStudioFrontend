const API_BASE_URL = "http://localhost:8080/api";

// This function will fetch and display bouquets
document.addEventListener("DOMContentLoaded", () => {
    // Fetch all bouquets when the page loads
    fetch(`${API_BASE_URL}/bouquets`)
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            const output = document.getElementById("output");
            output.innerHTML = ""; // Clear any existing content

            // Loop through each bouquet and display it
            data.forEach(bouquet => {
                const div = document.createElement("div");
                div.classList.add("col-md-4", "mb-4");

                // Create a card for each bouquet
                div.innerHTML = `
                    <div class="card product-card position-relative">
                        ${bouquet.featured ? '<span class="most-popular">Most Popular</span>' : ''}
                        <img src="${bouquet.imageUrl}" class="card-img-top" alt="${bouquet.name}">
                        <div class="card-body">
                            <h5 class="card-title">${bouquet.name}</h5>
                            <p class="card-text">${bouquet.description}</p>
                            <p class="card-text text-success">$${bouquet.price.toFixed(2)}</p>
                            <form action="/cart/add" method="POST">
                                <input type="hidden" name="productId" value="${bouquet.id}" />
                                <button type="submit" class="btn btn-primary">Add to Cart</button>
                            </form>
                        </div>
                    </div>
                `;

                // Append the new card to the output container
                output.appendChild(div);
            });
        })
        .catch(error => {
            console.error("Error fetching bouquets:", error);
        });
});
