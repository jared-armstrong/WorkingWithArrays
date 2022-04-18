const eternalsData = [

    {
        horseman: "Black Knight is an expert horseman",

        sword: "Black Knight is an excellent swordsman", 

        weapons: "Black Knight uses the Ebony Blade or Sword of Light and Shield of Night",

        pic: "images2\\blackKnight.jpg"

    },

    {
        levitate: "Ikaris is able to levitate himself and others at speeds of 850 mph",

        telepathy: "Ikaris is a telepathic individual",

        strength: "Ikaris possesses super human strength!",

        pic: "images2\\ikaris.jpg"

    },

    {
        manipulate: "Thena can manipulate cosmic energy to augment her life force",

        illusions: "Thena can cast illusions and disguise her appearance from others",

        teleport: "Then has the ability to teleport herself and others!",

        pic: "images2\\thena.jpg"

    },

    {
        speed: "Makkari can run at the speed of light",

        weak: "Because Makkari uses their Cosmic Energy towards speed, Makkari has half the strength that normally would be had",

        mechanical: "Makkari is able to pilot most land and air vehicles",

        pic: "images2\\Makkari_1.jpg"

    },

    {
        immunity: "Blade is immune to vampire bites as his mother was bit when he was being born",

        healing: "Blade has a rapid healing factor that attacks any alien substances in his body",

        age: "Blade also ages very slowly and can preternaturally sense supernatural activity.",

        pic: "images2\\blade.png"

    }


];


const showInfo = () => {

    let userInput = document.querySelector("#eternalAttribute").value;
    
    
    let selectedEternalInfo = document.querySelector(".selectedEternalInfo");

    //let eternal = eternalsData[userInput];
    // set the information

    selectedEternalInfo = eternalsData.find((element) => element.includes(userInput));

    selectedEternalInfo.textContent = selectedEternalInfo //`${eternal.userInput}`;
    let eternalPic = document.querySelector(".selectedEternalPic");
    // set the image
    eternalPic.src = eternal.pic;

    // JAVASCRIPT
    // Get a handle to the petsInfo paragraph
    let eternalsInfo = document.querySelector(".eternalsInfo");
    // Add content by modifying the textContent property
    eternalsInfo.textContent = "The Eternals";

    let eternalsList = document.querySelector(".eternalsList");
    let allEternalsList = `<ol>`;
    eternalsData.forEach((eternal) => {
        allEternalsList += `<li> ${eternal.name} </li>`;
    });
    allPetsList += `</ol>`;

    eternalsList.innerHTML = allEternalsList;


}