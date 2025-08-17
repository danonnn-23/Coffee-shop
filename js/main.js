document.querySelectorAll('[data-scroll]').forEach(item => {
  item.addEventListener('click', function() {
    const targetId = this.getAttribute('data-scroll');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const products = [
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
]