const eternalsData = [

    {
        name: "Black Knight",

        power: "swordsman", 

        pic: "blackKnight.jpg"

    },

    {
        name: "Ikaris",

        power: "levitation",

        pic: "ikaris.jpg"

    },

    {
        name: "Thena",

        power: "manipulation",

        pic: "thena.jpg"

    },

    {
        name: "Makkari",
        
        power: "speed",

        pic: "Makkari_1.jpg"

    },

    {
        name: "Blade", 

        power: "immunity",

        pic: "blade.png"

    }


];


const showInfo = () => {

    let userInput = document.querySelector("#eternalAttribute").value;
    
    console.log(userInput);
    
    let selectedEternalInfo = document.querySelector(".selectedEternalInfo");
    let eternalPic = document.querySelector(".selectedEternalPic");
    

    let eternal = eternalsData.find((eternal) => {
            if (eternal.power == userInput) {
                return(eternal);
            } else 
                return(null)    
            }
    )
    selectedEternalInfo.textContent = eternal.name + " has the skill of " + userInput;
    eternalPic.src = eternal.pic;
    selectedEternalPic = eternal.pic;
};

let eternalsInfo = document.querySelector(".eternalsInfo");
eternalsInfo.textContent = "The Eternals";

let allEternalsInfo = `<ul>`;
eternalsData.forEach((eternal) => {
    allEternalsInfo += `<li>${eternal.name}</li>`;
});
allEternalsInfo += `</ul>`;

allEternalsInfo += `<br> You can choose: `;
eternalsData.forEach((eternalCharacter) => {
    allEternalsInfo += eternalCharacter.power + ', ';
});

eternalsInfo.innerHTML = allEternalsInfo;
