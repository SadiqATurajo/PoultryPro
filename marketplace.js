// JavaScript for Poultry Pro Marketplace

document.addEventListener('DOMContentLoaded', function() {
    // Get all category links
    const categoryLinks = document.querySelectorAll('.category-link');
    const listingGrid = document.getElementById('listing-grid');

    // Get all listing cards
    const listingCards = Array.from(listingGrid.getElementsByClassName('listing-card'));

    // Add event listeners to category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');

            // Filter listings based on the selected category
            listingCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Handle contact seller button clicks
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sellerId = this.getAttribute('data-seller-id');
            alert(`Contacting seller with ID: ${sellerId}`);
            // You can replace the alert with actual functionality to contact the seller
        });
    });

    // Add hover effect to listing cards
    listingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Search functionality
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-btn');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchBar.value.toLowerCase();

        listingCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const productLocation = card.querySelector('.location').textContent.toLowerCase();

            if (productName.includes(searchTerm) || productLocation.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Footer year update
    const footerBottom = document.querySelector('.footer-bottom');
    const currentYear = new Date().getFullYear();
    footerBottom.querySelector('p').textContent = `© ${currentYear} Poultry Pro. All rights reserved.`;
});

// Modal Handling
const modal = document.getElementById('seller-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.querySelector('.close-modal');

// Open modal when "List Your Product" button is clicked
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Submission Handling
document.getElementById('product-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const category = document.getElementById('category').value;
    const productName = document.getElementById('product-name').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;
    const imageFile = document.getElementById('image').files[0];
    const description = document.getElementById('description').value;

    // Create listing card
    const listingCard = document.createElement('div');
    listingCard.className = 'listing-card';
    listingCard.setAttribute('data-category', category);

    // Add image preview
    const img = document.createElement('img');
    img.src = URL.createObjectURL(imageFile);
    img.alt = productName;
    listingCard.appendChild(img);

    // Add product name
    const name = document.createElement('h3');
    name.textContent = productName;
    listingCard.appendChild(name);

    // Add price and quantity
    const container = document.createElement('div');
    container.className = 'container-1';

    const priceEl = document.createElement('p');
    priceEl.className = 'price';
    priceEl.textContent = `₦${price}`;
    container.appendChild(priceEl);

    const quantityEl = document.createElement('p');
    quantityEl.className = 'quantity';
    quantityEl.textContent = `${quantity} available`;
    container.appendChild(quantityEl);

    listingCard.appendChild(container);

    // Add location
    const locationEl = document.createElement('p');
    locationEl.className = 'location';
    locationEl.textContent = location;
    listingCard.appendChild(locationEl);

    // Add contact button
    const contactBtn = document.createElement('button');
    contactBtn.className = 'contact-btn';
    contactBtn.textContent = 'Contact Seller';
    contactBtn.setAttribute('data-seller-id', 'seller123'); // Replace with dynamic ID
    listingCard.appendChild(contactBtn);

    // Add description (optional)
    if (description) {
        const descEl = document.createElement('p');
        descEl.textContent = description;
        listingCard.appendChild(descEl);
    }

    // Append to marketplace
    document.getElementById('listing-grid').appendChild(listingCard);

    // Close modal and reset form
    modal.style.display = 'none';
    e.target.reset();
    alert('Product listed successfully!');
});