//*
//1.getElementById
//2.getElementsByClassName
//3.getElementsByTagName
//4.queryselector
//5.queryseletorAll


document.title = "dom-practice"
console.log(document.title);

let heading = document.getElementById("dom");
console.log(heading);

let heading1 = document.getElementsByTagName('p');
for ( i=0; i<heading1.length; i++){
    console.log(heading1[i]);
}

let heading2 = document.getElementsByClassName("box");
for ( i=0; i<heading2.length; i++){
    console.log(heading2[i]);
}

let heading3 = document.queryselector("h4");
console.log(heading3);

let queryselectorall = document.queryselectorall("h2");
for (i=0; i<queryselectorall.length; i++){
    console.log(queryselectorall[i]);
}


