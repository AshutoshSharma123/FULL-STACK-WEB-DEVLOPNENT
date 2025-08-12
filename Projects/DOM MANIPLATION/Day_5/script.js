let array = [

    {
        team: "India",
        captain: "Rohit Sharma",
        coach: "Rahul Dravid",
        worldCupWins: 2,
        color: "blue"
    }, {
        team: "Australia",

        captain: "Pat Cummins",
        coach: "Andrew McDonald",
        worldCupWins: 5,
        color: "yellow"
    }, {
        team: "Pakistan",

        captain: "Babar Azam",
        coach: "Grant Bradburn",
        worldCupWins: 1,
        color: "green"
        
    }, {
        team: "England",

        captain: "Jos Buttler",
        coach: "Matthew Mott",
        worldCupWins: 1,
        color: "voilet"
    }];


let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let bd = document.querySelector("body");

btn.addEventListener('click', () => {
    let num = Math.floor(Math.random() * array.length);

    h2.innerHTML = `Team: ${array[num].team}, Captain: ${array[num].captain}, Coach: ${array[num].coach}, World Cup Wins: ${array[num].worldCupWins}`;

    bd.style.backgroundColor = array[num].color;
})
