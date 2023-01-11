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
printScientist(); // Printar ut alla scientists i början samt lägger ut en eventlistener för när man trycker på en scientists namn, vilken man trycker på kommer koden ihåg automatiskt pga forEach loopen.
function printScientist() {
    scientistList.innerHTML = "";
    scientists.forEach(function (scientist) {
        var scientistName = scientist.name;
        var scientistDiv = document.createElement("div");
        scientistDiv.innerHTML = scientistName;
        scientistList.appendChild(scientistDiv);
        scientistDiv.addEventListener("click", function () {
            var selectedSection = document.getElementById("selected-Scientist");
            selectedSection.innerHTML = "<p>Name: ".concat(scientist.name, "</p>\n            <p>Henchmen: ").concat(scientist.henchmen, "</p>\n            <p>Description: ").concat(scientist.description, "</p>");
        });
    });
}
var submitForm = document.getElementById("add-form"); // Eventlistener på knapp
submitForm.addEventListener("click", function (event) {
    event.preventDefault();
    var evilScientistName = document.querySelector("#evilScientistName").value;
    var evilScientistHenchmen = Number(document.querySelector("#evilScientistHenchmen").value);
    var evilScientistDescription = document.querySelector("#evilScientistDescription").value;
    var scientist = {
        name: evilScientistName,
        henchmen: evilScientistHenchmen,
        description: evilScientistDescription
    };
    var inputFields = document.querySelectorAll("input"); //Clearar input fields
    inputFields.forEach(function (input) {
        input.value = "";
    });
    scientists.push(scientist); //pushar in det nya objektet o sedan kallar på print functionen
    printScientist();
});
