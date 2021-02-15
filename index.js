/// SET A RAMDOM COLOR RED OR BLACK
  let aleatorio = '';
  const posibilities = ["red" , "black"];
    aleatorio = Math.floor(Math.random() * posibilities.length);
    let color = posibilities[aleatorio];
//GENERADOR DE LETRAS Y SIMNOLOS ALEATORIO
   let caracter    = '';
   let values     = '23456789AQJK';
   let valuesLength = values.length;
   caracter += values.charAt(Math.floor(Math.random() * valuesLength));

//GENERADOR DE 
   let palo           = '';
   let characters       = '♣♦♠♣';
   let charactersLength = characters.length;
   palo += characters.charAt(Math.floor(Math.random() * charactersLength));
    
/// FIRST SYMBOL
let SYMBOL1 = document.createElement("H2");//make an p element
let node1 = document.createTextNode(palo);//create an innerhtml node
SYMBOL1.className = "symbol-left";
SYMBOL1.style.color = color;
SYMBOL1.appendChild(node1);//add the text to the p element

let element1 = document.getElementById("carta");//search the div1
let child1 = document.getElementById("p1");//search the first p element
element1.insertBefore(SYMBOL1, child1);

//ADD LETTER OR NUMBER
let SYMBOL2 = document.createElement("H2");//make an p element
let node2 = document.createTextNode(caracter);//create an innerhtml node
SYMBOL2.className = "number";
SYMBOL2.style.color = color;
SYMBOL2.appendChild(node2);//add the text to the p element

let element2 = document.getElementById("carta");//search the div1
let child2 = document.getElementById("p1");//search the first p element
element2.insertBefore(SYMBOL2, child2);

//ADD SECOND SYMBOL

let SYMBOL3 = document.createElement("H2");//make an p element
let node3 = document.createTextNode(palo);//create an innerhtml node
SYMBOL3.className = "symbol-right";
SYMBOL3.style.color = color;
SYMBOL3.appendChild(node3);//add the text to the p element

let element3 = document.getElementById("carta");//search the div1
let child3 = document.getElementById("p1");//search the first p element
element3.insertBefore(SYMBOL3, child3);

