 //const emails=[];
 const names=[];

/*document.getElementById("button2").onclick = function(){ //array to save email inputs
   let mail = document.getElementById("emails").value
   emails.push(mail);
   console.log(emails);
   document.getElementById("emails").value = null;
}*/
let h = '';
document.getElementById("button1").onclick = function(){ // array to save names inputs
    const input = document.getElementById("names").value
   //switch (name){
    //case :
     //alert('please give a name');
     //return
     //break
   //}
    names.push(input);
    console.log(names);
    document.getElementById("names").value = null;
}

document.getElementById("shuffle").onclick = function(){
     let i = names.length; //first Counter
     let j; //second Counter
     let temp; //temporary vallue for names
    //let temp2; //temporary vallue for emails
 while(--i > 0){  // algorithm yates fisher for shuffle
     j = Math.floor(Math.random()*(i+1));
     temp = names[j];
     names[j] = names[i];
     names[i] = temp;
     /* temp2 = emails[j];
     emails[j] = emails[i];
     emails[i] = emails[j];
*/
 }
i = 0
let k = 1 //counter for gift reciever
while (i<names.length){
   if(names.length>k){
       const C =  '<li class="list-item">'+  names[i] + ' '+'is santa for'+" "+ names[k]  +'</li>';
       const ki = C.toString();  // constructs the list for the givers and receivers
       console.log(ki);
       h = h +''+ ki +' .  ';
       console.log(h);
       ++i;
       ++k
    } else{
        C = '<li class="list-item">'+ names[i] + ' '+'is santa for'+' '+ names[0] +'</li>';
        const ki = C.toString(); // makes last name of the array give gift to the first
       console.log(ki);
       h = h +''+ ki +' .  ';
       console.log(h);
       ++i;
       ++k
    }

}
console.log(names);
document.getElementById("santa").innerHTML =' <div class="list-content"><div class="list">'+ h +'</div></div>';
//console.log(emails);
}

