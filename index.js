//SET A RAMDOM COLOR RED OR BLACK
// let aleatorio = '';
// const posibilities = ["red" , "black"];
// aleatorio = Math.floor(Math.random() * posibilities.length);
// let color = posibilities[aleatorio];

// GENERADOR DE LETRAS Y SIMBOLOS ALEATORIO
   let caracter = '';
   const values = '23456789AQJK';
   let valuesLength = values.length;
   caracter += values.charAt(Math.floor(Math.random() * valuesLength));
  

// GENERADOR DE SIMBOL
   let palo             = '';
   let characters       = '♣♦♠♥';
   let charactersLength = characters.length;
   palo += characters.charAt(Math.floor(Math.random() * charactersLength));
 
//CHOOSE COLOR  
if (palo == "♥" ||  palo == "♦")
    color = "red";
    else color = "black"

///FIRST SYMBOL
let symbol = document.createElement("H2");//make an p element
let node = document.createTextNode(palo);//create an innerhtml node
symbol.className = "symbol-left";

symbol.style.color = color;
symbol.appendChild(node);//add the text to the p element

let element = document.getElementById("carta");//search the div1
let child = document.getElementById("p1");//search the first p element
element.insertBefore(symbol, child);

//ADD LETTER OR NUMBER
let symbol2 = document.createElement("H2");//make an p element
let node2 = document.createTextNode(caracter);//create an innerhtml node
symbol2.className = "number";
symbol2.style.color = color;
symbol2.appendChild(node2);//add the text to the p element

let element2 = document.getElementById("carta");//search the div1
let child2 = document.getElementById("p1");//search the first p element
element2.insertBefore(symbol2, child2);

//ADD SECOND SYMBOL

let symbol3 = document.createElement("H2");//make an p element
let node3 = document.createTextNode(palo);//create an innerhtml node
symbol3.className = "symbol-right";
symbol3.style.color = color;
symbol3.appendChild(node3);//add the text to the p element

let element3 = document.getElementById("carta");//search the div1
let child3 = document.getElementById("p1");//search the first p element
element3.insertBefore(symbol3, child3);

