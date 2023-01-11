let scientistList:any = document.getElementById("scientist-List") as HTMLDivElement;
class EvilScientists {
scientists: { name: string, henchmen: number, description: string }[];

constructor() {
    this.scientists = [
        { name: "Dr. Anton", henchmen: 2, description: "Wack" },
        { name: "Dr. Max", henchmen: 8, description: "Cool guy" },
        { name: "Dr. Andre", henchmen: 52, description: "Cool guy" }
    ];
}
}
const scientists = new EvilScientists().scientists; // skapar en ny instance och kör koden i constructor o sedan tar property och sparar det i den här variabeln. 
console.log(scientists);

printScientist() // Printar ut alla scientists i början samt lägger ut en eventlistener för när man trycker på en scientists namn, vilken man trycker på kommer koden ihåg automatiskt pga forEach loopen.
function printScientist() {
  scientistList.innerHTML = "";
  scientists.forEach((scientist) => {
    const scientistName = scientist.name;
    const scientistDiv = document.createElement("div");
    scientistDiv.innerHTML = scientistName;
    scientistList.appendChild(scientistDiv);
    scientistDiv.addEventListener("click", () => {
        const selectedSection = document.getElementById("selected-Scientist") as HTMLDivElement;
        selectedSection.innerHTML = `<p>Name: ${scientist.name}</p>
            <p>Henchmen: ${scientist.henchmen}</p>
            <p>Description: ${scientist.description}</p>`;
    });
  });
}