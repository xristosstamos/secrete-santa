 let emails=[];
 let names=[];

document.getElementById("button2").onclick = function(){
   let mail = document.getElementById("emails").value
   emails.push(mail);
   //console.log(emails);
   document.getElementById("emails").value = null;
}

document.getElementById("button1").onclick = function(){
    let name = document.getElementById("names").value
    names.push(name);
    console.log(names);
    document.getElementById("names").value = null;
}

document.getElementById("shuffle").onclick = function(){
let i = names.length, j, temp;
while(--i > 0){
    j = Math.floor(Math.random()*(i+1));
    temp = names[j];
    names[j] = names[i];
    names[i] = temp;
}
//console.log(names);
}

