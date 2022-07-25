const collection = [
    {
        name:"Venusaur",
        genre:["Grass","Poison"],
        weakness:["Fire","Psychic","Flying","Ice"],
        evolution:"Evolution de Ivysaur",
        sousEvo:"Ivysaur",
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
        sousEvo:"Chameleon",
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
        sousEvo:"Wartortle",
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
        sousEvo:"Metapod",
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
        sousEvo:"Kakuna",
        image:"./accets/015.png",
        imageSousEvo :"./accets/014.png",
        descrition:"It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
        link:"https://www.pokemon.com/us/pokedex/beedrill"
    },
    {
        name:"Pidgeot",
        genre:["Flying","Normal"],
        weakness:["Electric","Ice","Rock"],
        evolution:"Evolution de Pidgeotte",
        sousEvo:"Pidgeotte",
        image:"./accets/018.png",
        imageSousEvo :"./accets/017.png",
        descrition:"This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
        link:"https://www.pokemon.com/us/pokedex/pidgeot"
    },
    {
        name:"Raticate",
        genre:["Normal"],
        weakness:["Fighting"],
        evolution:"Evolution de Rattata",
        sousEvo:"Rattata",
        image:"./accets/020.png",
        imageSousEvo :"./accets/019.png",
        descrition:"Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
        link:"https://www.pokemon.com/us/pokedex/raticate"
    },
    {
        name:"Fearow",
        genre:["Flying","Normal"],
        weakness:["Electric","Ice","Rock"],
        evolution:"Evolution de Spearow",
        sousEvo:"Spearow",
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
        sousEvo:"Ekans",
        image:"./accets/024.png",
        imageSousEvo :"./accets/023.png",
        descrition:"The frightening patterns on its belly have been studied. Six variations have been confirmed.",
        link:"https://www.pokemon.com/us/pokedex/arbok"
    },
    {
        name:"Raichu",
        genre:["Electric"],
        weakness:["Ground"],
        evolution:"Evolution de Pikachu",
        sousEvo:"Pikachu",
        image:"./accets/026.png",
        imageSousEvo :"./accets/025.png",
        descrition:"Its long tail serves as a ground to protect itself from its own high-voltage power.",
        link:"https://www.pokemon.com/us/pokedex/raichu"
    },
];
const imgLink = "./accets/pdx.png";

function addElementsMAin(Array){
    const selectMain = document.querySelector("main");
    
    for(let x =0; x < Array.length; x++){
        const addArticle = document.createElement("article");
        selectMain.appendChild(addArticle);
        addArticle.setAttribute("class",`Card ${Array[x].name}`);
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
    addPrincImage.classList.add("imageSize");
    backgroundType(Array.genre[0],addPrincImage);

    return addPrincImage;
}

function addType(Array){
    const addDiv = document.createElement("div");
    addDiv.setAttribute("class","type");
    const addH3 = document.createElement("h4");
    addH3.classList.add("posElementType0");
    addH3.innerText = "Type :";
    addDiv.appendChild(addH3);
    for(let i = 0; i < Array.genre.length; i++){
        const addElementListe = document.createElement("p");
        addElementListe.innerText = Array.genre[i];
        addElementListe.setAttribute("class",`posElementType${i+1}`);
        backgroundType(Array.genre[i],addElementListe);
        addDiv.appendChild(addElementListe);
    }
    return addDiv;
}

function addWeakness(Array){
    const addDiv = document.createElement("div");
    addDiv.setAttribute("class","weakness");
    const addH3 = document.createElement("h4");
    addH3.innerText = "Weakness :";
    //addH3.classList.add(`posElementType${Array.genre.length}`);
    addDiv.appendChild(addH3);
   for(let i = 0; i < Array.weakness.length; i++){
        const addweakness = document.createElement("p");
        addweakness.setAttribute("class",`posElementWeakness${[i]}`);
        backgroundType(Array.weakness[i], addweakness);
        addweakness.innerText = Array.weakness[i];
        addDiv.appendChild(addweakness);
    }
    return addDiv;
}

function addSousEvo(Array){
    const addDiv = document.createElement("div");
    addDiv.classList.add("elementSousEvo");
    const addparagraph = document.createElement("p");
    addparagraph.classList.add("posElementSousEvo0");
    const tagU = document.createElement("u");
    addparagraph.appendChild(tagU);
    tagU.innerText = `${Array.evolution} :`;
    addDiv.appendChild(addparagraph);
    const addImage = document.createElement("img");
    addImage.classList.add("posElementSousEvo");
    addImage.src = Array.imageSousEvo;
    addImage.alt = `image de ${Array.sousEvo}`;
    addImage.width = "60";
    addImage.height = "60";
    addDiv.appendChild(addImage);
    return addDiv;
}

function addDescrip(Array){
    const adddiv = document.createElement("div");
    const addName = document.createElement("h3");
    addName.innerText = Array.name;
    adddiv.appendChild(addName);
    const addParagraph = document.createElement("p");
    addParagraph.innerText = Array.descrition;
    adddiv.appendChild(addParagraph);
    return adddiv;
}

function addLink(Array){
    const addlink = document.createElement("a");
    const imagelink = document.createElement("img");
    imagelink.src=imgLink;
    imagelink.alt = "image pokedex";
    imagelink.width=50;
    imagelink.height=40;
    addlink.href = Array.link;
    addlink.appendChild(imagelink);
    return addlink;
}

function backgroundType(Array,element){
    switch(Array){
        case "Fire" : element.classList.add("fire"); break;
        case "Grass" :element.classList.add("grass"); break;
        case "Water": element.classList.add("water"); break;
        case "Normal": element.classList.add("normal");break;
        case "Poison":element.classList.add("poison");break;
        case "Flying": element.classList.add("fly");break;
        case "Bug": element.classList.add("insect");break;
        case "Electric": element.classList.add("elect");break;
        case "Psychic": element.classList.add("psy");break;
        case "Rock": element.classList.add("rock");break; 
        case "Ice" :element.classList.add("ice");break;
        case "Fighting": element.classList.add("fight");break;
        case "Ground": element.classList.add("ground");break;

    }
}

addElementsMAin(collection);



