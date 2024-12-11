/*

const API_BASE_URL = "http://localhost:8080/api";

// This function will fetch and display bouquets
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




fetch('http://localhost:8080/api/user/profile', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`,
        'Content-Type': 'application/json',
    },
})
    .then(response => response.json())
    .then(data => {
        const profile = document.getElementById("profile");
        profile.innerHTML = ""; // Clear any existing content

        const div = document.createElement("div");
        div.classList.add("card", "mb-4");
        div.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">
                <!-- Missing profile data rendering here -->
            </div>
        `;
    })
    .catch(error => {
        console.error("Error fetching user profile:", error);
    });




 */