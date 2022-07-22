const collection = [
    {
        name:"Venusaur",
        genre:["Grass","Poison"],
        weakness:["Fire","Psychis-c","Flying","Ice"],
        evolution:"Evolution de Ivysaur",
        image:"./accets/003.png",
        imageSousEvo :"./accets/002.png",
        descrition:"ts plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight. ",
        link:"https://www.pokemon.com/us/pokedex/venusaur"
    },
    {
        name:"Charizard",
        genre:["Fire","Flying"],
        weakness:["Water","Electric","Rock"] ,
        evolution:"Evolution de Chameleon",
        image:"./accets/006.png",
        imageSousEvo :"./accets/005.png",
        descrition:"It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        link:"https://www.pokemon.com/us/pokedex/charizard"
    },
    {
        name:"Blastoise",
        genre:["Water"],
        weakness:["Grass","Electric"],
        evolution:"Evolution de Wartortle",
        image:"./accets/009.png",
        imageSousEvo :"./accets/008.png",
        descrition:"It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell. ",
        link:"https://www.pokemon.com/us/pokedex/blastoise"
    },
    {
        name:"Butterfree",
        genre:["Bug","Flying"],
        weakness:["Fire","Flying","Electric","Ice","Rock"],
        evolution:"Evolution de Metapod",
        image:"./accets/012.png",
        imageSousEvo :"./accets/011.png",
        descrition:" In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        link:"https://www.pokemon.com/us/pokedex/butterfree"
    },
    {
        name:"Beedrill",
        genre:["Bug","Poison"],
        weakness:["Fire","Psychic","Flying","Rock"],
        evolution:"Evolution de Kakuna",
        image:"./accets/015.png",
        imageSousEvo :"./accets/014.png",
        descrition:"It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
        link:"https://www.pokemon.com/us/pokedex/beedrill"
    },
    {
        name:"Pidgeot",
        genre:["Normal","Flying"],
        weakness:["Electric","Ice","Rock"],
        evolution:"Evolution de Pidgeotte",
        image:"./accets/018.png",
        imageSousEvo :"./accets/017.png",
        descrition:"This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
        link:"https://www.pokemon.com/us/pokedex/pidgeot"
    },
    {
        name:"Raticate",
        genre:["Normal"],
        weakness:["Fighting"],
        evolution:"Evolution de Rattata ",
        image:"./accets/020.png",
        imageSousEvo :"./accets/019.png",
        descrition:"Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
        link:"https://www.pokemon.com/us/pokedex/raticate"
    },
    {
        name:"Fearow",
        genre:["Normal","Flying"],
        weakness:["Electric","Ice","Rock"],
        evolution:"Evolution de Spearow",
        image:"./accets/022.png",
        imageSousEvo :"./accets/021.png",
        descrition:"A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
        link:"https://www.pokemon.com/us/pokedex/fearow"
    },
    {
        name:"Arbok",
        genre:["Poison"],
        weakness:["Psychic","Ground"],
        evolution:"Evolution de Ekans",
        image:"./accets/024.png",
        imageSousEvo :"./accets/023.png",
        descrition:"The frightening patterns on its belly have been studied. Six variations have been confirmed.",
        link:"https://www.pokemon.com/us/pokedex/arbok"
    },
    {
        name:"Raichu",
        genre:["Electric"],
        weakness:["Ground"],
        evolution:"Evolution de Pickachu",
        image:"./accets/026.png",
        imageSousEvo :"./accets/025.png",
        descrition:"Its long tail serves as a ground to protect itself from its own high-voltage power.",
        link:"https://www.pokemon.com/us/pokedex/raichu"
    },
];

function addElementsMAin(Array){
    const selectMain = document.querySelector("main");
    for(let x =0; x < Array.length; x++){
        const addArticle = document.createElement("article");
        selectMain.appendChild(addArticle);
        addArticle.appendChild(addImageTop(Array[x]));
        addArticle.appendChild(addType(Array[x]));
        addArticle.appendChild(addWeakness(Array[x]));
        addArticle.appendChild(addSousEvo(Array[x]));
        addArticle.appendChild(addDescrip(Array[x]));
        addArticle.appendChild(addLink(Array[x]));
    }
}

function addImageTop(Array){
   const addPrincImage = document.createElement("img");
    addPrincImage.src = Array.image;
    addPrincImage.alt = `image de ${Array.name}`;
    return addPrincImage
}

function addType(Array){
    const addDiv = document.createElement("div");
    const addH3 = document.createElement("h4");
    addH3.innerText = "Type";
    addDiv.appendChild(addH3);
    for(let i = 0; i < Array.genre.length; i++){
        const addElementListe = document.createElement("p");
        addElementListe.innerText = Array.genre[i];
        addDiv.appendChild(addElementListe);
    }
    return addDiv;
}

function addWeakness(Array){
    const addDiv = document.createElement("div");
    const addH3 = document.createElement("h4");
    addH3.innerText = "Weakness";
    addDiv.appendChild(addH3);
   for(let i = 0; i < Array.weakness.length; i++){
        const addweakness = document.createElement("p");
        addweakness.innerText = Array.weakness[i];
        addDiv.appendChild(addweakness);
    }
    return addDiv;
}

function addSousEvo(Array){
    const addDiv = document.createElement("div");
    const addparagraph = document.createElement("p");
    addparagraph.innerText = Array.evolution;
    addDiv.appendChild(addparagraph);
    const addImage = document.createElement("img");
    addImage.src = Array.imageSousEvo;
    addImage.alt = "";
    addImage.width = "50";
    addImage.height = "50"
    addDiv.appendChild(addImage);
    return addDiv;
}

function addDescrip(Array){
    const addParagraph = document.createElement("p")
    addParagraph.innerText = Array.descrition;
    return addParagraph;
}

function addLink(Array){
    const addlink = document.createElement("a");
    addlink.href = Array.link;
    return addlink;
}

function sizeImage(){
    const selectImage = document.querySelectorAll("img");
    for(let i = 0; i < selectImage.length; i++){
        selectImage[i].setAttribute("class",".sizeImage");
    }
}

addElementsMAin(collection);
sizeImage();

