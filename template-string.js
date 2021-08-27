const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi shopno charini`;

const multiLine = 'This is my first line. ghjklo'+'this is my second line.\n'+
'third is my second line.\n'+
'fourth is my second line.\n';



const multiLineNew =`this is is multi 
line. this is second line
this is fourth line`;



const friends =['abul', 'babul', 'kabul','sabul'];
const friendCount =5;
const old = ',h3 class= "friend-name">Friend-5</h3>'
const old2= '<h3 class= "friend-name">Friend-' + friendCount+ '</h3>';
const old3= `<h3 class= "friend-name">Friend- ${friendCount}</h3>`;

const new1 =`<h3 class= "friend-name">Friend-${friends.length}</h3>`;
console.log(new1);


const first ='Mamun';
const last='Chowdhury';
const fullOld =first+' '+last;
// dynamic string use example
const fullNew = `This person name is: ${first} ${last}.Has money ${friends.length*500}tk. He lives in Dhaka.`;
console.log(fullNew);



//console.log(multiLineNew);
//console.log(multiLine);