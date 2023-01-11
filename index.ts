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