const db = require('./models')

db.Locations.create({
    country: "US",
    city: "Miami",
    climate: "Tropical",
    population: "High",
    culture: "Western",
    image: "http://upload.wikimedia.org/wikipedia/commons/5/5f/Night_Panorama_Miami_Florida_5462.jpg",
    cost: "High",
    language: "English",
    continent: "North America",
    currency: "US Dollar"
});

db.Locations.create({
    country: "Cuba",
    city: "Havana",
    climate: "Tropical",
    population: "High",
    culture: "Western",
    image: "https://d.newsweek.com/en/full/1333310/havana-underground.jpg",
    cost: "Medium",
    language: "Spanish",
    continent: "North America",
    currency: "Cuban Peso"
});

db.Locations.create({
    country: "Brazil",
    city: "Rio Be Janeiro",
    climate: "Tropical",
    population: "High",
    culture: "Western",
    image: "http://www.mauriciotravels.com/wp-content/uploads/2014/02/rio1-1024x640.jpg",
    cost: "Low",
    language: "Portuguese",
    continent: "South America",
    currency: "Brazilian Real"
});

db.Locations.create({
    country: "Brazil",
    city: "Rio Be Janeiro",
    climate: "Tropical",
    population: "High",
    culture: "Western",
    image: "http://www.mauriciotravels.com/wp-content/uploads/2014/02/rio1-1024x640.jpg",
    cost: "Low",
    language: "Portuguese",
    continent: "South America",
    currency: "Brazilian Real"
});