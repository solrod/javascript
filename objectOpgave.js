
// Oprette restaurantMenus objekt
const restaurantMenus = {
    _forretter: ["Varmrøget laks m. salat", "Bruchetta", "Kyllinge nuggets"],
    _hovedRetter: ["Spaghetti med kødsovs", "KarryKylling i fad", "Oksemørbrad m. kartofler"],
    _desserter: ["Banansplit", "Pandekage m. is", "Irish Coffee"],

    // get metoder
    get forretter(){
        return this._forretter
    },

    get hovedRetter(){
        return this._hovedRetter
    },

    get desserter() {
        return this._desserter
    },
};

// tilføje en hovedret til hovedRetter uden brug ef setter metode
restaurantMenus._hovedRetter[3] = "Stegt flæsk m. persillesovs";

// foreslå tilfældigt sammensat 3 retters menu
function randomMenu(){
    antalForretter = restaurantMenus.forretter.length;
    randomIndexForret = Math.floor(Math.random() * antalForretter);
    randomForret = restaurantMenus.forretter[randomIndexForret];

    antalHovedretter = restaurantMenus.hovedRetter.length;
    randomIndex = Math.floor(Math.random() * antalHovedretter);
    randomHovedret = restaurantMenus.hovedRetter[randomIndex];

    antalDesserter = restaurantMenus.desserter.length;
    randomIndexDessert = Math.floor(Math.random() * antalDesserter);
    randomDessert = restaurantMenus.desserter[randomIndexDessert];

    const menu = [randomForret, randomHovedret, randomDessert]
    return menu;
};

console.log(`Må vi foreslå denne Menu bestående af:\nForret: ${randomMenu()[0]},\nHovedret: ${randomMenu()[1]},\nDessert: ${randomMenu()[2]}`);
