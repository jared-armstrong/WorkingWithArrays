const eternalsData = [

    {
        name: "Black Knight",

        power: "swordsman", 

        pic: "images2\\blackKnight.jpg"

    },

    {
        name: "Ikaris",

        power: "levitation",

        pic: "images2\\ikaris.jpg"

    },

    {
        name: "Thena",

        power: "manipulation",

        pic: "images2\\thena.jpg"

    },

    {
        name: "Makkari",
        
        power: "speed",

        pic: "images2\\Makkari_1.jpg"

    },

    {
        name: "Blade", 

        power: "immunity",

        pic: "images2\\blade.png"

    }


];


const showInfo = () => {

    let userInput = document.querySelector("#eternalAttribute").value;
    
    console.log(userInput);
    
    let selectedEternalInfo = document.querySelector(".selectedEternalInfo");
    let eternalPic = document.querySelector(".selectedEternalPic");
    // set the image
    eternalPic.src = eternal.pic;

    let eternal = eternalsData.find((eternal) => {
            if (eternal.power == userInput) {
                return(eternal);
            } else 
                return(null)    
            }
    )
    selectedEternalInfo.textContent = eternal.name + " has the skill of " + userInput;
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
    allEternalsInfo += eternalCharacter.power + ' ';
});

eternalsInfo.innerHTML = allEternalsInfo;
