var scientistList = document.getElementById("scientist-List");
var EvilScientists = /** @class */ (function () {
    function EvilScientists() {
        this.scientists = [
            { name: "Dr. Anton", henchmen: 2, description: "Wack" },
            { name: "Dr. Max", henchmen: 8, description: "Cool guy" },
            { name: "Dr. Andre", henchmen: 52, description: "Cool guy" }
        ];
    }
    return EvilScientists;
}());
var scientists = new EvilScientists().scientists; // skapar en ny instance och kör koden i constructor o sedan tar property och sparar det i den här variabeln. 
console.log(scientists);
