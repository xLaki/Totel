const db = require('./models');

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
    activity1: "Go on an Everglades Tour",
    activity2: "Tour of Wynwood Walls",
    activity3: "Go on a Crazy Speedboat Ride",
    currency: "US Dollar",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=14338%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1516192%3AUNKNOWN%3AUNKNOWN&destination-id=1516192&q-destination=Miami,%20Florida,%20United%20States%20of%20America&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
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
    activity1: "Shop at San Jose Market",
    activity2: "See the View at Camera Obscura",
    activity3: "Visit Fabrica de Arte Cubano",
    currency: "Cuban Peso",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=15382%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1911770%3AUNKNOWN%3AUNKNOWN&destination-id=1911770&q-destination=Havana,%20Cuba&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Brazil",
    city: "Rio De Janeiro",
    climate: "Tropical",
    population: "High",
    culture: "Western",
    image: "http://www.mauriciotravels.com/wp-content/uploads/2014/02/rio1-1024x640.jpg",
    cost: "Low",
    language: "Portuguese",
    continent: "South America",
    activity1: "Go See Christ the Redeemer",
    activity2: "Cable Car Ride to Sugar Loaf Mountain",
    activity3: "View the Aesthetics of Prainha Beach",
    currency: "Brazilian Real",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=59182%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A146100%3AUNKNOWN%3AUNKNOWN&destination-id=146100&q-destination=Rio%20de%20Janeiro,%20Brazil&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Saint Marten",
    city: "Philipsburg",
    climate: "Tropical",
    population: "Low",
    culture: "Western",
    image: "http://www.grandcasebeachclub.com/wp-content/uploads/2017/03/grand-case-beach-club-38.jpg",
    cost: "High",
    language: "French",
    continent: "North America",
    activity1: "Check out Front Street",
    activity2: "Visit the Great Bay Beach",
    activity3: "Yoda Guy Movie Exhibit (for all you Star Wars Fans)",
    currency: "Antillean Guilder",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=410257%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A11464%3AUNKNOWN%3AUNKNOWN&f-distance=5.0&f-lid=1657232&destination-id=11464&q-destination=Philipsburg,%20Sint%20Maarten&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0&sort-order=DISTANCE_FROM_LANDMARK"
});

db.Locations.create({
    country: "Mexico",
    city: "Playa Del Carmen",
    climate: "Tropical",
    population: "Low",
    culture: "Western",
    image: "https://www.visitmexico.com/viajemospormexico/assets/uploads/destinos/quintana-roo_destinos-principales_playa-del-carmen_01.jpg",
    cost: "Medium",
    language: "Spanish",
    continent: "North America",
    activity1: "Sightsee at Playacar",
    activity2: "View the Sculptures at Los Fundadores Park",
    activity3: "Shop in Markets on Fifth Avenue (yes, in Mexico!)",
    currency: "Peso",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=32193%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A862967%3AUNKNOWN%3AUNKNOWN&destination-id=862967&q-destination=Playa%20del%20Carmen,%20Quintana%20Roo,%20Mexico&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Colombia",
    city: "Cartagena",
    climate: "Tropical",
    population: "Low",
    culture: "Western",
    image: "https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2013/01/Cartagena_Colombia_cs-b9a2c77a9fe3.jpg",
    cost: "Low",
    language: "Spanish",
    continent: "South America",
    activity1: "Have Fun in the Water at Rosario Islands",
    activity2: "Check out the Palace of Inquisition",
    activity3: "Visit Castillo de San Felipe de Barajas",
    currency: "Colombian Peso",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=65529%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A295594%3AUNKNOWN%3AUNKNOWN&destination-id=295594&q-destination=Cartagena,%20Colombia&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Spain",
    city: "Madrid",
    climate: "Moderate",
    population: "High",
    culture: "Western",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Calle_de_Alcal%C3%A1_%28Madrid%29_16.jpg",
    cost: "High",
    language: "Spanish",
    continent: "Europe",
    activity1: "View the Art at Museo Nacional del Prado",
    activity2: "Walk Around in Plaza Mayor",
    activity3: "Float Around in El Retiro Park",
    currency: "Euro",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=13628%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A457987%3AUNKNOWN%3AUNKNOWN&destination-id=457987&q-destination=Madrid,%20Spain&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Italy",
    city: "Rome",
    climate: "Moderate",
    population: "High",
    culture: "Western",
    image: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
    cost: "Medium",
    language: "Italian",
    continent: "Europe",
    activity1: "See the Ruins of The Colosseum",
    activity2: "Visit the Excavated Roman Forum",
    activity3: "Check Out the Style of Trevi Fountain",
    currency: "Euro",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=25084%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A712491%3AUNKNOWN%3AUNKNOWN&destination-id=712491&q-destination=Rome,%20Italy&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Greece",
    city: "Athens",
    climate: "Moderate",
    population: "High",
    culture: "Western",
    image: "https://www.discovergreece.com/~/media/images/highlight-large-images/az/a/athens-city/odeon-of-herodes-atticus-athens.ashx",
    cost: "Low",
    language: "Greek",
    continent: "Europe",
    activity1: "Check Out the Historical Acropolis",
    activity2: "View the Ruins of The Parthenon",
    activity3: "Visit the Treasures of the Acropolis Museum",
    currency: "Euro",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=13914%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A593632%3AUNKNOWN%3AUNKNOWN&destination-id=593632&q-destination=Athens,%20Greece&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Italy",
    city: "Venice",
    climate: "Moderate",
    population: "Low",
    culture: "Western",
    image: "https://media.timeout.com/images/105278500/image.jpg",
    cost: "High",
    language: "Italian",
    continent: "Europe",
    activity1: "See the Gothic Doge's Palace",
    activity2: "Take in the Vibe of St. Mark's Square",
    activity3: "Walk On or Float Under Rialto Bridge",
    currency: "Euro",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=26802%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A710846%3AUNKNOWN%3AUNKNOWN&destination-id=710846&q-destination=Venice,%20Italy&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Croatia",
    city: "Plitvice",
    climate: "Moderate",
    population: "Low",
    culture: "Western",
    image: "https://www.huckfinncroatia.com/syst/wp-content/uploads/2016/12/Plitvice-Lakes-National-Park-walking-trip-001.jpg",
    cost: "Medium",
    language: "Croatian",
    continent: "Europe",
    activity1: "Feel the Mist at the Big Waterfall",
    activity2: "Check Out the View at Kozjak",
    activity3: "Have Fun with the Water at Korana",
    currency: "Euro",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=134019%2F500&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1693342%3AUNKNOWN%3AUNKNOWN&destination-id=1693342&q-destination=Plitvicka%20jezera,%20Croatia&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Greece",
    city: "Sparta",
    climate: "Moderate",
    population: "Low",
    culture: "Western",
    image: "https://i.redd.it/ujylvb2mhts21.jpg",
    cost: "Low",
    language: "Greek",
    continent: "Europe",
    activity1: "Check Out the Shrine at Menelaion",
    activity2: "See the Ruins at Sanctuary of Artemis Orthia",
    activity3: "View the Ancient Artifacts at the Archaeological Museum of Sparta",
    currency: "Euro",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=14015%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A588770%3AUNKNOWN%3AUNKNOWN&destination-id=588770&q-destination=Sparta,%20Greece&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "France",
    city: "Paris",
    climate: "Continental",
    population: "High",
    culture: "Western",
    image: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg",
    cost: "High",
    language: "French",
    continent: "Europe",
    activity1: "Go To the Eiffel Tower",
    activity2: "View the Arts at Louvre Museum",
    activity3: "Check Out Arc de Triomphe",
    currency: "Euro",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=22235%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A504261%3AUNKNOWN%3AUNKNOWN&destination-id=504261&q-destination=Paris,%20France&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "US",
    city: "New York",
    climate: "Continental",
    population: "High",
    culture: "Western",
    image: "https://media.timeout.com/images/103444978/image.jpg",
    cost: "Medium",
    language: "English",
    continent: "North America",
    activity1: "Visit the Statue of Liberty",
    activity2: "Take a Walk in Central Park",
    activity3: "Have a Blast at Rockefeller Center",
    currency: "US Dollar",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=14734%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1506246%3AUNKNOWN%3AUNKNOWN&destination-id=1506246&q-destination=New%20York,%20New%20York,%20United%20States%20Of%20America&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "England",
    city: "London",
    climate: "Continental",
    population: "High",
    culture: "Western",
    image: "https://www.fodors.com/wp-content/uploads/2017/10/HERO_UltimateLondon_Hero_shutterstock412054315.jpg",
    cost: "Low",
    language: "English",
    continent: "Europe",
    activity1: "View the One-And-Only Big Ben",
    activity2: "See the Tower of London",
    activity3: "Ride the Coca-Cola London Eye",
    currency: "Pound",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=17399%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A549499%3AUNKNOWN%3AUNKNOWN&destination-id=549499&q-destination=London,%20England,%20United%20Kingdom&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "US",
    city: "Anchorage",
    climate: "Continental",
    population: "Low",
    culture: "Western",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Anchorage_on_an_April_evening.jpg",
    cost: "High",
    language: "English",
    continent: "North America",
    activity1: "Go on a Tour at Portage Glacier",
    activity2: "Go On an Outdoor Expedition at Chugach State Park",
    activity3: "See the Animals at Alaska Wildlife Conservation",
    currency: "US Dollar",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=14206%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1490614%3AUNKNOWN%3AUNKNOWN&destination-id=1490614&q-destination=Anchorage,%20Alaska,%20United%20States%20of%20America&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Canada",
    city: "Quebec",
    climate: "Continental",
    population: "Low",
    culture: "Western",
    image: "https://static.quebec-cite.com/media/2981604/jefffrenettephotography_otqete_160902_0064.jpg",
    cost: "Medium",
    language: "French",
    continent: "North America",
    activity1: "Walk Around in Old Quebec",
    activity2: "See Montmorency Falls",
    activity3: "Take a Tour of La Citadelle de Quebec",
    currency: "Canadian Dollar",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=25000%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A169995%3AUNKNOWN%3AUNKNOWN&destination-id=169995&q-destination=Quebec,%20Quebec,%20Canada&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "US",
    city: "Helena",
    climate: "Continental",
    population: "Low",
    culture: "Western",
    image: "https://travelingmel.com/WordPress/wp-content/uploads/2018/06/04Montana-Glacier.jpg",
    cost: "Low",
    language: "English",
    continent: "North America",
    activity1: "Scale Mount Helena",
    activity2: "Check out the Architecture at the Cathedral of Saint Helena",
    activity3: "See the Works at Holter Museum of Art",
    currency: "US Dollar",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=14652%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1522564%3AUNKNOWN%3AUNKNOWN&destination-id=1522564&q-destination=Helena,%20Montana,%20United%20States%20of%20America&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Egypt",
    city: "Cairo",
    climate: "Tropical",
    population: "High",
    culture: "Eastern",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/All_Gizah_Pyramids.jpg",
    cost: "High",
    language: "Egyptian",
    continent: "Africa",
    activity1: "See the Pyramids at Giza Necropolis",
    activity2: "Shop in the Bazaar at Khan el-Khalili",
    activity3: "Check Out the History at Egyptian Museum",
    currency: "Egyptian Pound",
    activity1: "Activate the Mummies Curse",
    activity2: "Eat Papyrus",
    activity3: "swim in the Nile",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=8%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1634358%3AUNKNOWN%3AUNKNOWN&destination-id=1634358&q-destination=Cairo,%20Egypt&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Australia",
    city: "Sydney",
    climate: "Tropical",
    population: "High",
    culture: "Eastern",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ1vrByHvtgRxD_h4df4FLagOJSXqXhr8Zw9DJytposOpvHnr9",
    cost: "Medium",
    language: "English",
    continent: "Oceania",
    currency: "Australian Dollar",
    activity1: "die in the Outback",
    activity2: "Survive in the Outback",
    activity3: "Purgatory is the Outback",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=25057%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A26633%3AUNKNOWN%3AUNKNOWN&destination-id=26633&q-destination=Sydney,%20New%20South%20Wales,%20Australia&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Indonesia",
    city: "Jakarta",
    climate: "Tropical",
    population: "High",
    culture: "Eastern",
    image: "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201904/718236082.jpg",
    cost: "Low",
    language: "Indonesian",
    continent: "Oceania",
    currency: "Indonesian Rupiah",
    activity1: "wish you were in Australia",
    activity2: "enjoy vietnam and thailand but from a distance",
    activity3: "cool insect life though",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=72399%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A659455%3AUNKNOWN%3AUNKNOWN&destination-id=659455&q-destination=Jakarta,%20Indonesia&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Fiji",
    city: "Suva",
    climate: "Tropical",
    population: "Low",
    culture: "Eastern",
    image: "http://south-seas-adventures.com/sites/default/files/country-cover-photo/2017-01/fiji-country-header.jpg",
    cost: "High",
    language: "English",
    continent: "Oceania",
    currency: "Fijian Dollar",
    activity1: "drown",
    activity2: "swim",
    activity3: "eaten out by sharks",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=54%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=COUNTRY%3A10233053%3AUNKNOWN%3AUNKNOWN&destination-id=10233053&q-destination=Fiji&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Chile",
    city: "Hanga Roa",
    climate: "Tropical",
    population: "Low",
    culture: "Eastern",
    image: "http://cdn.cnn.com/cnnnext/dam/assets/190111092720-easter-island-moais-file-restricted.jpg",
    cost: "Medium",
    language: "Chilean",
    continent: "South America",
    currency: "Chilean Peso",
    activity1: "LLama",
    activity2: "Striped Sweater",
    activity3: "Mayan sacrifice",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=81566%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=REGION%3A1641798%3AUNKNOWN%3AUNKNOWN&destination-id=1641798&q-destination=Easter%20Island,%20Chile&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Vietnam",
    city: "Ha Long",
    climate: "Tropical",
    population: "Low",
    culture: "Eastern",
    image: "https://www.abercrombiekent.co.uk/-/media/abercrombieandkent/images/page-header-images/asia/vietnam/hanoi-halong-bay-and-sapa/hanoi-halong-bay--sapa0000vietnamhalong-bayshutterstock243530122.jpg?la=en&hash=84E3E1CB1154408A946857EB4AAFD1B2CB86F032",
    cost: "Low",
    language: "Vietnamese",
    continent: "Asia",
    currency: "Vietnamese Dong",
    activity1: "I am the Lorax",
    activity2: "and I speak for the Trees",
    activity3: "and the trees are speaking Vietnamese",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=428528%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=REGION%3A1640036%3AUNKNOWN%3AUNKNOWN&destination-id=1640036&q-destination=Halong%20Bay,%20Vietnam&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "UAE",
    city: "Dubai",
    climate: "Moderate",
    population: "High",
    culture: "Eastern",
    image: "https://io.telkomuniversity.ac.id/wp-content/uploads/2015/03/Dubai-e1434096715956.jpg",
    cost: "High",
    language: "English",
    continent: "Asia",
    currency: "Dirhams",
    activity1: "go to jail in a Lambo",
    activity2: "Rob a Casino",
    activity3: "Ride a Camel",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=15075%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A11594%3AUNKNOWN%3AUNKNOWN&destination-id=11594&q-destination=Dubai,%20United%20Arab%20Emirates&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Turkey",
    city: "Istanbul",
    climate: "Moderate",
    population: "High",
    culture: "Eastern",
    image: "https://travelboulevard.be/wp-content/uploads/2015/05/Istanbul015.jpg",
    cost: "Medium",
    language: "Turkish",
    continent: "Asia",
    currency: "Turkish Lira",
    activity1: "eat Turkey",
    activity2: "Fuck the byzantine",
    activity3: "discount roman empire",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=15288%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1341107%3AUNKNOWN%3AUNKNOWN&destination-id=1341107&q-destination=Istanbul,%20Turkey&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "India",
    city: "New Delhi",
    climate: "Moderate",
    population: "High",
    culture: "Eastern",
    image: "https://www.beenaroundtheglobe.com/wp-content/uploads/2018/01/mausolee-de-safdar-jung-new-delhi.jpg",
    cost: "Low",
    language: "Indian",
    continent: "Asia",
    currency: "Indian Rupee",
    activity1: "Swim in river ;)",
    activity2: "Call Center",
    activity3: "Dowry BABY",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=420699%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A675357%3AUNKNOWN%3AUNKNOWN&destination-id=675357&q-destination=New%20Delhi,%20India&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "South Africa",
    city: "Upington",
    climate: "Moderate",
    population: "Low",
    culture: "Eastern",
    image: "https://www.wandersafe.com/wp-content/uploads/2019/01/south-africa-safaris-header.jpg",
    cost: "High",
    language: "English",
    continent: "Africa",
    currency: "South African Rand",
    activity1: "Enjoy French Colonization",
    activity2: "Oui Oui",
    activity3: "Baguette",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=186%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=COUNTRY%3A10233158%3AUNKNOWN%3AUNKNOWN&destination-id=10233158&q-destination=South%20Africa&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Morocco",
    city: "Midelt",
    climate: "Moderate",
    population: "Low",
    culture: "Eastern",
    image: "https://www.roughguides.com/wp-content/uploads/2013/01/melilla-morocco-shutterstock_589530758-1.jpg",
    cost: "Medium",
    language: "Arabic",
    continent: "Africa",
    currency: "Moroccan Dirham",
    activity1: "enjoy Africa",
    activity2: "Enjoy Best Country in Africa",
    activity3: "Enjoy African Outback",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=409749%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=COUNTRY%3A10233117%3AUNKNOWN%3AUNKNOWN&destination-id=10233117&q-destination=Morocco&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Japan",
    city: "Nara",
    climate: "Moderate",
    population: "Low",
    culture: "Eastern",
    image: "https://worldstrides.com/wp-content/uploads/2015/07/12-Chureito-pagoda-and-Mount-Fuji-Japan.jpg",
    cost: "Low",
    language: "Japanese",
    continent: "Asia",
    currency: "Japanese Yen",
    activity1: "spicy green juice",
    activity2: "Godzirra",
    activity3: "Naruoto Ran",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=71644%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A728341%3AUNKNOWN%3AUNKNOWN&destination-id=728341&q-destination=Nara,%20Japan&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Japan",
    city: "Tokyo",
    climate: "Continental",
    population: "High",
    culture: "Eastern",
    image: "https://d1lltolwj6ps3l.cloudfront.net/office_images/Office-Hero/_2048x1152_crop_center-center_50/Tokyo.jpg?mtime=20171127174900",
    cost: "High",
    language: "Japanese",
    continent: "Asia",
    currency: "Japanese Yen",
    activity1: "Anime",
    activity2: "Hentai",
    activity3: "Tentacles",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=71462%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A726784%3AUNKNOWN%3AUNKNOWN&destination-id=726784&q-destination=Tokyo,%20Japan&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Russia",
    city: "Moscow",
    climate: "Continental",
    population: "High",
    culture: "Eastern",
    image: "https://www.roughguides.com/wp-content/uploads/2018/06/moscow-cathedral.jpg",
    cost: "Medium",
    language: "Russian",
    continent: "Asia",
    currency: "Russian Ruble",
    activity1: "Drink",
    activity2: "Wear Adidas",
    activity3: "Squat",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=66938%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1153093%3AUNKNOWN%3AUNKNOWN&destination-id=1153093&q-destination=Moscow,%20Russia&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "South Korea",
    city: "Seoul",
    climate: "Continental",
    population: "High",
    culture: "Eastern",
    image: "https://media.timeout.com/images/105292780/image.jpg",
    cost: "Low",
    language: "Korean",
    continent: "Asia",
    currency: "Korean Won",
    activity1: "Starcraft",
    activity2: "Starcraft 2",
    activity3: "Overwatch",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=188%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A210777%3AUNKNOWN%3AUNKNOWN&f-distance=25.0&f-lid=10601202&destination-id=210777&q-destination=Dandong,%20China&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0&sort-order=DISTANCE_FROM_LANDMARK"
});

db.Locations.create({
    country: "Ukraine",
    city: "Chernobyl",
    climate: "Continental",
    population: "Low",
    culture: "Eastern",
    image: "https://media1.popsugar-assets.com/files/thumbor/A0ruCzlXq5x06HURi23DDYef_vk/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/04/29/152/n/1922283/tmp_wKBcQo_e680b7887e8de748_GettyImages-72450926.jpg",
    cost: "High",
    language: "Russian",
    continent: "Europe",
    currency: "Russian Ruble",
    activity1: "Die to a RadRoach",
    activity2: "Die to a Deathclaw",
    activity3: "Become a Ghoul",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=2188678%2F500&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1378654%3AUNKNOWN%3AUNKNOWN&destination-id=1378654&q-destination=Kiev,%20Ukraine&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});

db.Locations.create({
    country: "Moldova",
    city: "Crasnoe",
    climate: "Continental",
    population: "Low",
    culture: "Eastern",
    image: "https://www.telegraph.co.uk/content/dam/Travel/2016/August/moldova-travel-AP-7.jpg",
    cost: "Medium",
    language: "Romanian",
    continent: "Europe",
    currency: "Moldovan Leu",
    activity1: "Not Invade Poland",
    activity2: "Not Invade France",
    activity3: "Not Invade Spaghetti land",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=130%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=GEO_LOCATION%3ACrasnoe,%20Moldova%7C46.6432639%7C29.8286866%3AGEOCODE%3AUNKNOWN&q-destination=Crasnoe,%20Moldova&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0&sort-order=DISTANCE_FROM_LANDMARK"
});

db.Locations.create({
    country: "Russia",
    city: "Tyumen",
    climate: "Continental",
    population: "Low",
    culture: "Eastern",
    image: "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/H1jGc6V-xivfgh7db/videoblocks-altai-mountains-beautiful-highland-landscape-russia-siberia-timelapse_h54btot8m_thumbnail-full01.png",
    cost: "Low",
    language: "Russian",
    continent: "Asia",
    currency: "Russian Ruble",
    activity1: "Drink",
    activity2: "Party",
    activity3: "Join the Mafia",
    trivagoLink: "https://www.trivago.com/?aDateRange%5Barr%5D=2019-08-01&aDateRange%5Bdep%5D=2019-08-02&aPriceRange%5Bfrom%5D=0&aPriceRange%5Bto%5D=0&iRoomType=7&aRooms%5B0%5D%5Badults%5D=2&cpt2=66907%2F200&iViewType=0&bIsSeoPage=0&sortingId=1&slideoutsPageItemId=&iGeoDistanceLimit=16093&address=&addressGeoCode=&offset=0&ra=",
    hotelLink: "https://www.hotels.com/search.do?resolved-location=CITY%3A1174644%3AUNKNOWN%3AUNKNOWN&destination-id=1174644&q-destination=Tyumen,%20Russia&q-check-in=2019-07-25&q-check-out=2019-07-26&q-rooms=1&q-room-0-adults=2&q-room-0-children=0"
});