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
    //console.log(names);
    document.getElementById("names").value = null;
}

