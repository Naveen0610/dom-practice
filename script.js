//*
//1.getElementById
//2.getElementsByClassName
//3.getElementsByTagName
//4.queryselector
//5.queryseletorAll


//document.title = "dom-practice"
//console.log(document.title);

//let heading = document.getElementById("dom");
//console.log(heading);

//let heading1 = document.getElementsByTagName('p');
//for ( i=0; i<heading1.length; i++){
  //  console.log(heading1[i]);
//

//let heading2 = document.getElementsByClassName("box");
//for ( i=0; i<heading2.length; i++){
  //  console.log(heading2[i]);


//let heading3 = document.queryselector("h4");
//console.log(heading3);

//let queryselectorall = document.queryselectorall("h2");
//for (i=0; i<queryselectorall.length; i++){
  //  console.log(queryselectorall[i]);
//


let parentEl = document.getElementById("parent")
console.log(parentEl);
let parentE2 = document.getElementById('parent')
console.log(parentE2.firstchild);
let parentE3 = document.getElementById('parent')
console.log(parentE3.lastChild);
let parentE4 = document.getElementById('parent')
console.log(parentE4.firstElementChild);
let parentE5 = document.getElementById('parent')
console.log(parentE5.lastElementChild);
let parentE6 = document.getElementById('parent')
console.log(parentE6.childNodes);
let parentE7 = document.getElementById('parent')
console.log(parentE7.children[3]);
let mid1 = document.getElementById('midpara')
console.log(mid1.nextSibling);
let mid2 = document.getElementById('midpara')
console.log(mid2.nextElementSibling);
let mid3 = document.getElementById('midpara')
console.log(mid3.previousElementSibling);



let paragraph = document,getElementById('content')
console.log(paragraph);

function onAddClass(){
  let paragraph = document.getElementById('content')
  paragraph.classList.add("bluetext");
}

function onRemoveClass(){
  let paragraph = document.getElementById('content')
  paragraph.classList.add('bluetext');
}

//inner text
//text content
//inner html


let para = document.getElementById('heading')
console.log(para.innerText);
let para = document.getElementById('heading')
console.log(para.textContent);
let para = document.getElementById('heading')
console.log(para.innerHTML);