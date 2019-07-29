const db = require('./models')

let Miami = "http://upload.wikimedia.org/wikipedia/commons/5/5f/Night_Panorama_Miami_Florida_5462.jpg"
let MiamiT = "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=14338%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra="
let MiamiH = "https://www.hotels.com/search.do?resolved-location=CITY%3A1516192%3AUNKNOWN%3AUNKNOWN&destination-id=1516192&q-destination=Miami,%20Florida,%20United%20States%20of%20America&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"

db.Locations.create({
    country: "US",
    city: "Miami",
    climate: "Tropical",
    population: "High",
    culture: "Western",
    image: Miami,
    cost: "High",
    language: "English",
    continent: "North America",
    currency: "US Dollar",
    trivagoLink: MiamiT,
    hotelLink: MiamiH
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
    currency: "Cuban Peso",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=15382%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink:"https://www.hotels.com/search.do?resolved-location=CITY%3A1911770%3AUNKNOWN%3AUNKNOWN&destination-id=1911770&q-destination=Havana,%20Cuba&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});