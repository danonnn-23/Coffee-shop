// Плавний скролл до секції

document.querySelectorAll('[data-scroll]').forEach(item => {
  item.addEventListener('click', function() {
    const targetId = this.getAttribute('data-scroll');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Масив з продуктами

let products = [
    {
        category: "Coffee",
        subcategories: [
            {
                name: "Grained coffee",
                items: [
                    {
                        name: "Ethiopia Yirgacheffe",
                        description: "Light, aromatic grain with bright acidity, notes of jasmine, citrus and honey.",
                        price: 320,
                        weight: "250g",
                        country: "Ethiopia",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Best for alternative brewing methods (V60, Chemex, AeroPress)."
                    },
                    {
                        name: "Colombia Supremo",
                        description: "Balanced grain with medium acidity, notes of chocolate, caramel and nuts.",
                        price: 280,
                        weight: "250g",
                        country: "Colombia",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Great for espresso and filter coffee."
                    },
                    {
                        name: "Brazil Santos",
                        description: "Smooth grain with low acidity, notes of chocolate, nuts and caramel.",
                        price: 260,
                        weight: "250g",
                        country: "Brazil",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Perfect for espresso and milk-based drinks."
                    },
                    {
                        name: "Guatemala Antigua",
                        description: "Rich grain with medium acidity, notes of chocolate, spices and dried fruits.",
                        price: 300,
                        weight: "250g",
                        country: "Guatemala",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Best for filter coffee and pour-over methods."
                    },
                    {
                        name: "Kenya AA",
                        description: "Bright grain with high acidity, notes of black currant, citrus and berries.",
                        price: 350,
                        weight: "250g",
                        country: "Kenya",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Ideal for pour-over and French press."
                    },
                    {
                        name: "Sumatra Mandheling",
                        description: "Full-bodied grain with low acidity, notes of chocolate, earth and herbs.",
                        price: 330,
                        weight: "250g",
                        country: "Indonesia",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Great for espresso and cold brew."
                    },
                    {
                        name: "Costa Rica Tarrazú",
                        description: "Bright grain with medium acidity, notes of citrus, honey and nuts.",
                        price: 340,
                        weight: "250g",
                        country: "Costa Rica",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Best for pour-over and filter coffee."
                    }
                ]
            },
            {
                name: "Ground coffee",
                items: [
                    {
                        name: "Ethiopia Yirgacheffe",
                        description: "Light, aromatic ground coffee with bright acidity, notes of jasmine, citrus and honey.",
                        price: 300,
                        weight: "250g",
                        country: "Ethiopia",
                        roasting: "Medium roast",
                        grind: "Fine grind",
                        type: "Arabica 100%",
                        recomendation: "Best for alternative brewing methods (V60, Chemex, AeroPress)."
                    },
                    {
                        name: "Colombia Supremo",
                        description: "Balanced ground coffee with medium acidity, notes of chocolate, caramel and nuts.",
                        price: 270,
                        weight: "250g",
                        country: "Colombia",
                        roasting: "Medium roast",
                        grind: "Medium grind",
                        type: "Arabica 100%",
                        recomendation: "Great for espresso and filter coffee."
                    },
                    {
                        name: "Brazil Santos",
                        description: "Smooth ground coffee with low acidity, notes of chocolate, nuts and caramel.",
                        price: 250,
                        weight: "250g",
                        country: "Brazil",
                        roasting: "Medium roast",
                        grind: "Coarse grind",
                        type: "Arabica 100%",
                        recomendation: "Perfect for espresso and milk-based drinks."
                    },
                    {
                        name: "Guatemala Antigua",
                        description: "Rich ground coffee with medium acidity, notes of chocolate, spices and dried fruits.",
                        price: 290,
                        weight: "250g",
                        country: "Guatemala",
                        roasting: "Medium roast",
                        grind: "Medium grind",
                        type: "Arabica 100%",
                        recomendation: "Best for filter coffee and pour-over methods."
                    },
                    {
                        name: "Kenya AA",
                        description: "Bright ground coffee with high acidity, notes of black currant, citrus and berries.",
                        price: 340,
                        weight: "250g",
                        country: "Kenya",
                        roasting: "Medium roast",
                        grind: "Fine grind",
                        type: "Arabica 100%",
                        recomendation: "Ideal for pour-over and French press."
                    },
                    {
                        name: "Sumatra Mandheling",
                        description: "Full-bodied ground coffee with low acidity, notes of chocolate, earth and herbs.",
                        price: 320,
                        weight: "250g",
                        country: "Indonesia",
                        roasting: "Medium roast",
                        grind: "Coarse grind",
                        type: "Arabica 100%",
                        recomendation: "Great for espresso and cold brew."
                    },
                    {
                        name: "Costa Rica Tarrazú",
                        description: "Bright ground coffee with medium acidity, notes of citrus, honey and nuts.",
                        price: 330,
                        weight: "250g",
                        country: "Costa Rica",
                        roasting: "Medium roast",
                        grind: "Medium grind",
                        type: "Arabica 100%",
                        recomendation: "Best for pour-over and filter coffee."
                    }
                ]
            },
            {
                name: "Drip coffee",
                items: [
                    {
                        name: "Ethiopia Yirgacheffe Drip",
                        description: "Light, aromatic drip coffee with bright acidity, notes of jasmine, citrus and honey.",
                        price: 350,
                        weight: "250g",
                        country: "Ethiopia",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Best for alternative brewing methods (V60, Chemex, AeroPress)."
                    },
                    {
                        name: "Colombia Supremo Drip",
                        description: "Balanced drip coffee with medium acidity, notes of chocolate, caramel and nuts.",
                        price: 320,
                        weight: "250g",
                        country: "Colombia",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Great for espresso and filter coffee."
                    },
                    {
                        name: "Brazil Santos Drip",
                        description: "Smooth drip coffee with low acidity, notes of chocolate, nuts and caramel.",
                        price: 300,
                        weight: "250g",
                        country: "Brazil",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Perfect for espresso and milk-based drinks."
                    },
                    {
                        name: "Guatemala Antigua Drip",
                        description: "Rich drip coffee with medium acidity, notes of chocolate, spices and dried fruits.",
                        price: 340,
                        weight: "250g",
                        country: "Guatemala",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Best for filter coffee and pour-over methods."
                    },
                    {
                        name: "Kenya AA Drip",
                        description: "Bright drip coffee with high acidity, notes of black currant, citrus and berries.",
                        price: 380,
                        weight: "250g",
                        country: "Kenya",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Ideal for pour-over and French press."
                    },
                    {
                        name: "Sumatra Mandheling Drip",
                        description: "Full-bodied drip coffee with low acidity, notes of chocolate, earth and herbs.",
                        price: 360,
                        weight: "250g",
                        country: "Indonesia",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Great for espresso and cold brew."
                    },
                    {
                        name: "Costa Rica Tarrazú Drip",
                        description: "Bright drip coffee with medium acidity, notes of citrus, honey and nuts.",
                        price: 370,
                        weight: "250g",
                        country: "Costa Rica",
                        roasting: "Medium roast",
                        type: "Arabica 100%",
                        recomendation: "Best for pour-over and filter coffee."
                    }
                ]
            }
        ]
    },
    {
        category: "Coffee Accessories",
        subcategories: [
            {
                name: "Coffee Makers",
                items: [
                    {
                        name: "French Press",
                        description: "Classic French press for brewing aromatic coffee.",
                        price: 450,
                        weight: "500g",
                        material: "Glass, stainless steel",
                        capacity: "350ml"
                    },
                    {
                        name: "Pour-Over Set",
                        description: "Set for brewing coffee using pour-over method.",
                        price: 600,
                        weight: "700g",
                        material: "Ceramic, glass",
                        capacity: "500ml"
                    },
                    {
                        name: "Aeropress",
                        description: "Compact device for making coffee with pressure.",
                        price: 800,
                        weight: "300g",
                        material: "Plastic, stainless steel",
                        capacity: "250ml"
                    }
                ]
            },
            {
                name: "Coffee Grinders",
                items: [
                    {
                        name: "Manual Grinder",
                        description: "Hand grinder for grinding coffee beans.",
                        price: 400,
                        weight: "200g",
                        material: "Wood, stainless steel"
                    },
                    {
                        name: "Electric Grinder",
                        description: "Electric grinder with adjustable grind size.",
                        price: 1200,
                        weight: "1kg",
                        material: "Plastic, stainless steel"
                    }
                ]
            },
            {
                name: "Coffee Accessories",
                items: [
                    {
                        name: "Coffee Scale",
                        description: "Precision scale for measuring coffee and water.",
                        price: 300,
                        weight: "200g",
                        material: "Plastic, metal"
                    },
                    {
                        name: "Milk Frother",
                        description: "Device for frothing milk for coffee drinks.",
                        price: 500,
                        weight: "300g",
                        material: "Plastic, stainless steel"
                    }
                ]
            },
            {
                name: "Filter coffee",
                supersubcategories: [
                    {
                        name: "Filter Paper",
                        items: [
                            {
                                name: "V60 Filter Paper",
                                description: "Special filter paper for V60 coffee maker.",
                                price: 150,
                                weight: "50g",
                                type: "Cone-shaped",
                                quantities: "40 sheets"
                            },
                            {
                                name: "Chemex Filter Paper",
                                description: "Thick filter paper for Chemex coffee maker.",
                                price: 200,
                                weight: "100g",
                                type: "Square",
                                quantities: "100 sheets"
                            }
                        ]
                    },
                    {
                        name: "Pourover Devices",
                        items: [
                            {
                                name: "Hario V60 02 plastic pourover white",
                                description: "Ideal for home use!",
                                price: 305,
                                material: "plastic",
                                volume: "1-4 cups"
                            },
                            {
                                name: "Hario V60 Glass Set",
                                description: "Hario V60 02 glass transparent set for brewing coffee using the pourover method. Perfect as a gift.",
                                price: 1450,
                                material: "Borosilicate glass, plastic",
                                volume: "1-4 cups"
                            },
                            {
                                name: "Hario Switch 02 glass pourover",
                                description: "The Hario SWITCH pourover is a hybrid device that allows you to brew coffee like a regular V60 funnel or like an immersion Clever.",
                                price: 1550,
                                material: "Heat-resistant glass, plastic.",
                                volume: "1-4 cups"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        category: "Tea",
        subcategories: [
            {
                name: "Loose Leaf Tea",
                items: [
                    {
                        name: "Green Tea Sencha",
                        description: "Japanese green tea with fresh, grassy notes.",
                        price: 250,
                        weight: "100g",
                        country: "Japan",
                        type: "Green tea"
                    },
                    {
                        name: "Black Tea Assam",
                        description: "Strong Indian black tea with malty flavor.",
                        price: 220,
                        weight: "100g",
                        country: "India",
                        type: "Black tea"
                    },
                    {
                        name: "Herbal Tea Chamomile",
                        description: "Soothing herbal tea with chamomile flowers.",
                        price: 180,
                        weight: "100g",
                        country: "Egypt",
                        type: "Herbal tea"
                    }
                ]
            },
            {
                name: "Tea Accessories",
                items: [
                    {
                        name: "Tea Infuser",
                        description: "Infuser for brewing loose leaf tea.",
                        price: 150,
                        weight: "50g",
                        material: "Stainless steel"
                    },
                    {
                        name: "Teapot",
                        description: "Ceramic teapot for brewing and serving tea.",
                        price: 600,
                        weight: "800g",
                        material: "Ceramic"
                    }
                ]
            }
        ]
    }
];

// Масив з відгуками

let reviews = [
    {
        name: "John Doe",
        year: 2025,
        month: 8,
        day: 15,
        hour: 10,
        minute: 30,
        rating: 5,
        comment: "Great coffee! The Ethiopian Yirgacheffe is my favorite."
    },
    {
        name: "Jane Smith",
        year: 2025,
        month: 8,
        day: 18,
        hour: 19,
        minute: 32,
        rating: 4,
        comment: "Good selection of coffee accessories. The French Press works well."
    },
    {
        name: "Alice Johnson",
        year: 2025,
        month: 8,
        day: 10,
        hour: 20,
        minute: 13,
        rating: 5,
        comment: "I love the loose leaf tea collection, especially the Green Tea Sencha."
    },
    {
        name: "Bob Brown",
        year: 2025,
        month: 8,
        day: 12,
        hour: 15,
        minute: 45,
        rating: 3,
        comment: "The coffee was good, but the delivery took too long."
    },
    {
        name: "Charlie Davis",
        year: 2025,
        month: 8,
        day: 14,
        hour: 9,
        minute: 20,
        rating: 4,
        comment: "Great service and friendly staff. Will come back again!"
    },
    {
        name: "Diana Evans",
        year: 2025,
        month: 8,
        day: 16,
        hour: 11,
        minute: 5,
        rating: 5,
        comment: "The coffee grinder is excellent! Makes perfect ground coffee."
    },
    {
        name: "Ethan Green",
        year: 2025,
        month: 8,
        day: 17,
        hour: 14,
        minute: 25,
        rating: 4,
        comment: "Good quality coffee makers. The Aeropress is my new favorite."
    },
    {
        name: "Fiona White",
        year: 2025,
        month: 8,
        day: 19,
        hour: 16,
        minute: 10,
        rating: 5,
        comment: "I appreciate the variety of coffee beans. The Brazil Santos is amazing!"
    },
    {
        name: "George Black",
        year: 2025,
        month: 8,
        day: 20,
        hour: 17,
        minute: 55,
        rating: 4,
        comment: "The tea accessories are great. The teapot is beautiful and functional."
    },
    {
        name: "Hannah Blue",
        year: 2025,
        month: 8,
        day: 21,
        hour: 18,
        minute: 30,
        rating: 5,
        comment: "Fantastic selection of coffee and tea. The Chamomile tea is very calming."
    }
];

// Відображення відгуків на сторінці

const feedbackContainer = document.querySelector('.reviews');

reviews.forEach(review => {
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();

    let reviewTime = 0;
    let reviewTimeIntoText = "";

    if (year > review.year) {
        reviewTime = year - review.year;
        reviewTimeIntoText = reviewTime + " year(s) ago";
    } else if (year === review.year && month > review.month) {
        reviewTime = month - review.month; 
        reviewTimeIntoText = reviewTime + " month(s) ago";
    } else if (year === review.year && month === review.month && day > review.day) {
        reviewTime = day - review.day; 
        reviewTimeIntoText = reviewTime + " day(s) ago";
    } else if (year === review.year && month === review.month && day === review.day && hour > review.hour) {
        reviewTime = hour - review.hour; 
        reviewTimeIntoText = reviewTime + " hour(s) ago";
    } else if (year === review.year && month === review.month && day === review.day && hour === review.hour && minute > review.minute) {
        reviewTime = minute - review.minute; 
        reviewTimeIntoText = reviewTime + " minute(s) ago";
    } else {
        reviewTime = 0;
        reviewTimeIntoText = "just now";
    }

    const svgColors = ["#b49459ff", "#8295a1ff", "#312400ff", "#5a6145ff", "#e9c46a", "#d1d1d1ff"];

    function getRandomColor() {
        return svgColors[Math.floor(Math.random() * svgColors.length)];
    }
    

    reviewDiv.innerHTML = `
        <div class="review-header">
            <svg class="avatar" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.02958 19.4012C5.97501 19.9508 6.3763 20.4405 6.92589 20.4951C7.47547 20.5497 7.96523 20.1484 8.01979 19.5988L6.02958 19.4012ZM15.9802 19.5988C16.0348 20.1484 16.5245 20.5497 17.0741 20.4951C17.6237 20.4405 18.025 19.9508 17.9704 19.4012L15.9802 19.5988ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM13 10C13 10.5523 12.5523 11 12 11V13C13.6569 13 15 11.6569 15 10H13ZM12 11C11.4477 11 11 10.5523 11 10H9C9 11.6569 10.3431 13 12 13V11ZM11 10C11 9.44772 11.4477 9 12 9V7C10.3431 7 9 8.34315 9 10H11ZM12 9C12.5523 9 13 9.44772 13 10H15C15 8.34315 13.6569 7 12 7V9ZM8.01979 19.5988C8.22038 17.5785 9.92646 16 12 16V14C8.88819 14 6.33072 16.3681 6.02958 19.4012L8.01979 19.5988ZM12 16C14.0735 16 15.7796 17.5785 15.9802 19.5988L17.9704 19.4012C17.6693 16.3681 15.1118 14 12 14V16Z" fill="${getRandomColor()}"></path> </g></svg>
            <span class="review-name">${review.name}</span>
            <span class="review-date">${reviewTimeIntoText}</span>
            <span class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
        <div class="review-comment">${review.comment}</div>
        </div>
    `;
    feedbackContainer.appendChild(reviewDiv);
});

// Публікація нового відгуку

const stars = document.querySelectorAll(".star");
let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const rating = index + 1; // бо індекс з 0
    stars.forEach((s, i) => {
      s.textContent = i < rating ? "★" : "☆";
    selectedRating = rating;
    });
  });
});

const commentText = document.getElementById("exampleFormControlTextarea1");
const counter = document.getElementById("counter");
const maxLength = commentText.getAttribute("maxlength");

commentText.addEventListener("input", () => {
    const currentLength = commentText.value.length;
    counter.textContent = `${currentLength} / ${maxLength}`;
});

const nameInput = document.querySelector('.name_form');
const surnameInput = document.querySelector('.surname_form');
const submitButton = document.querySelector('.btn-submit');

submitButton.addEventListener('click', () => {
    if (nameInput.value.trim() === '') {
        alert('Please enter your name');
    } else if (surnameInput.value.trim() === '') {
        alert('Please enter your surname');
    } else if (selectedRating === 0) {
        alert('Please select a rating');
    } else {
        const now = new Date();
        const newReview = {
            name: nameInput.value.trim() + " " + surnameInput.value.trim(),
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            day: now.getDate(),
            hour: now.getHours(),
            minute: now.getMinutes(),
            rating: selectedRating,
            comment: commentText.value.trim()
        };
        reviews.push(newReview);
        renderReview(newReview); // додаємо на сторінку **без очищення старих**
        alert('Thank you for your review!');

        // ---- очищаємо форму ----
        nameInput.value = '';
        surnameInput.value = '';
        commentText.value = '';
        selectedRating = 0;

        // повертаємо всі зірки в початковий стан
        stars.forEach(star => star.textContent = '☆');

        // обнуляємо лічильник символів
        counter.textContent = `0 / ${commentText.getAttribute("maxlength")}`;
    }
});

// Відображення нового відгуку на сторінці

function renderReview(review) {
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();

    // Розрахунок "x time ago" — можна спростити, як ти робив
    let reviewTimeIntoText = "just now"; // для спрощення

    const svgColors = ["#b49459ff", "#8295a1ff", "#312400ff", "#5a6145ff", "#e9c46a", "#d1d1d1ff"];
    function getRandomColor() {
        return svgColors[Math.floor(Math.random() * svgColors.length)];
    }

    reviewDiv.innerHTML = `
        <div class="review-header">
            <svg class="avatar" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.02958 19.4012C5.97501 19.9508 6.3763 20.4405 6.92589 20.4951C7.47547 20.5497 7.96523 20.1484 8.01979 19.5988L6.02958 19.4012ZM15.9802 19.5988C16.0348 20.1484 16.5245 20.5497 17.0741 20.4951C17.6237 20.4405 18.025 19.9508 17.9704 19.4012L15.9802 19.5988ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM13 10C13 10.5523 12.5523 11 12 11V13C13.6569 13 15 11.6569 15 10H13ZM12 11C11.4477 11 11 10.5523 11 10H9C9 11.6569 10.3431 13 12 13V11ZM11 10C11 9.44772 11.4477 9 12 9V7C10.3431 7 9 8.34315 9 10H11ZM12 9C12.5523 9 13 9.44772 13 10H15C15 8.34315 13.6569 7 12 7V9ZM8.01979 19.5988C8.22038 17.5785 9.92646 16 12 16V14C8.88819 14 6.33072 16.3681 6.02958 19.4012L8.01979 19.5988ZM12 16C14.0735 16 15.7796 17.5785 15.9802 19.5988L17.9704 19.4012C17.6693 16.3681 15.1118 14 12 14V16Z" fill="${getRandomColor()}"></path> </g></svg>
            <span class="review-name">${review.name}</span>
            <span class="review-date">${reviewTimeIntoText}</span>
            <span class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
        <div class="review-comment">${review.comment}</div>
        </div>
    `;
    feedbackContainer.appendChild(reviewDiv); // додаємо **тільки цей відгук**
}

// Відображення контактної інформації при кліку на кнопку

const contactBtn = document.getElementById('contact_btn');
const filterBg = document.createElement('div');
filterBg.className = 'filter-bg';
document.body.appendChild(filterBg);

// CSS-стилі
Object.assign(filterBg.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // кінцевий колір
    opacity: '0',            // початково прозорий
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',   // не клікабельний поки невидимий
    zIndex: '1000'
});

const contactsDiv = document.createElement('div');
contactsDiv.className = 'contacts-div';
document.body.appendChild(contactsDiv);

// CSS-стилі
Object.assign(contactsDiv.style, {
    position: 'fixed',
    top: '-20%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // центр по горизонталі і вертикалі
    width: '40vw',
    height: '35vh',
    backgroundColor: 'rgba(216, 216, 216, 1)',
    opacity: '0',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
    zIndex: '1100',
    borderRadius: '10px'
});

contactsDiv.innerHTML = `
    <svg class="close-contacts" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 6L18 18M18 6L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    <h2 class="contacts-banner">Contacts</h2>
    <hr>
    <p class="contacts-message">Please send an email to the address below if you have any questions or suggestions.</p>
    <input class="form-control email-copy" type="text" value="tolochkodan.work@gmail.com" aria-label="Disabled input example" disabled readonly>
    <hr>
    <div class="contacts-buttons">
        <button id="copy-mail-btn" type="button" class="btn btn-outline-secondary">Copy email</button>
        <button id="gmail-btn" type="button" class="btn btn-primary">Send a message</button>
    </div>
    `

Object.assign(contactsDiv.querySelector('.contacts-buttons').style, {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginRight: '3%'
});

const copyBtn = document.getElementById('copy-mail-btn');
const emailInput = document.querySelector('.email-copy');

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailInput.value)
        .then(() => {
            alert('Email скопійовано у буфер обміну!');
        })
        .catch(err => {
            console.error('Помилка копіювання: ', err);
        });
});

const gmailBtn = document.getElementById('gmail-btn');
gmailBtn.addEventListener('click', () => {
    const email = 'tolochkodan.work@gmail.com';
    const subject = 'Question';
    const body = 'Hello!';
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // відкриваємо у popup
    window.open(
        gmailUrl,
        '_blank',
        'width=800,height=600,scrollbars=yes,resizable=yes'
    );
});

contactBtn.addEventListener('click', () => {
    // фон
    filterBg.style.pointerEvents = 'auto';
    filterBg.style.opacity = '1';

    // блок контактів
    contactsDiv.style.pointerEvents = 'auto';
    contactsDiv.style.opacity = '1';
    contactsDiv.style.top = '20%';
    document.body.style.overflow = 'hidden';
});

const closeContactsBtn = document.querySelector(".close-contacts");

function closeContacts() {
    // фон
    filterBg.style.opacity = '0';
    filterBg.style.pointerEvents = 'none';

    // блок контактів
    contactsDiv.style.opacity = '0';
    contactsDiv.style.pointerEvents = 'none';
    contactsDiv.style.top = '-20%';
    document.body.style.overflow = 'auto';
}

// клік по фону
filterBg.addEventListener('click', closeContacts);

// клік по кнопці закриття
closeContactsBtn.addEventListener('click', closeContacts);


