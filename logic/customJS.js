
var img2=new Image();
    img2.src="graph/black-dog-home.jpg";

var img3=new Image();
    img3.src="graph/bridge-rain-home.jpg";

var ins_id = 1;

var insights = {
 
 ins1: {
 
 imag:'graph/mumbai-dock-home.jpg',
 head:'State capitalism',
 desc:'is not a preserve of mid-income countries. (A more complete grasp of the global business environment might be the edge you need.)'},
 
 ins2:{
 
 imag:'graph/black-dog-home.jpg',
 head:'Animal brains',
 desc:'are capable of much that was until recently thought uniquely human. (Why limit imagination when designing artificial intelligence algorithms?)'},
 
 ins3:{
 
 imag:'graph/bridge-rain-home.jpg',
 head:'Impressionism',
 desc:'had its origin in global trade, when the east opened up to the west! (What might you innovate with when you too connect disparate and distant influences?)' }
 
}



function addIncite(){

if (ins_id == 1) {

ins_id = ins_id + 1;

document.getElementById('insD1').classList.remove('fadeinc');

document.getElementById('insImage').src=insights.ins2.imag;
document.getElementById('insHead').innerHTML=insights.ins2.head;
document.getElementById('insDesc').innerHTML=insights.ins2.desc;

document.getElementById('insD2').classList.add('fadeinc');

}

else if (ins_id == 2) {

//document.getElementById('insButton').innerHTML="BACK";
document.getElementById('insD2').classList.remove('fadeinc');

ins_id = ins_id + 1;
document.getElementById('insImage').src=insights.ins3.imag;
document.getElementById('insHead').innerHTML=insights.ins3.head;
document.getElementById('insDesc').innerHTML=insights.ins3.desc;

document.getElementById('insD3').classList.add('fadeinc');
}

else {

//document.getElementById('insButton').innerHTML="NEXT";
document.getElementById('insD3').classList.remove('fadeinc');

ins_id = 1;
document.getElementById('insImage').src=insights.ins1.imag;
document.getElementById('insHead').innerHTML=insights.ins1.head;
document.getElementById('insDesc').innerHTML=insights.ins1.desc;

document.getElementById('insD1').classList.add('fadeinc');

}

}



var idx = 0;

var twtrList = ["678926231136395264","745661166635069441","729681299003342848","884749850616619008", "690205679525597185", "934765535249571840"];

function addTweet(id){

    var tweet = document.getElementById("twit-window");

    tweet.innerHTML="";

    twttr.widgets.createTweet(
      id, tweet, 
      {
        conversation : 'none',    // or all
        cards        : 'visible',  // or visible 
        linkColor    : '#cc0000', // default is blue
        theme        : 'light'    // or dark
      })
    .then (function (el) {
      el.contentDocument.querySelector(".footer").style.display = "none";
    });

}

function nxtTweet(){

 if (idx<5) {  
 	   idx = idx + 1;
 }
else {
	idx = 0;
}

var idtwt = twtrList[idx];

addTweet(idtwt);

}

function prevTweet(){

 if (idx>0) {  
 	idx = idx - 1;
}
else {
	idx = 5;
}

 var idtwt = twtrList[idx];

addTweet(idtwt);

}


window.onload = (function(){

    var tweet = document.getElementById("twit-window");
    var id_init = twtrList[0];

    twttr.widgets.createTweet(
      id_init, tweet, 
      {
        conversation : 'none',    // or all
        cards        : 'visible',  // or visible 
        linkColor    : '#cc0000', // default is blue
        theme        : 'light'    // or dark
      })
    .then (function (el) {
      el.contentDocument.querySelector(".footer").style.display = "none";
    });

  });


var idxM = 0;

var twtrListM	 = [
"graphic/single-cell-1.png",
"graphic/medicine-1.png",
"graphic/maths-1.png",
"graphic/drought.png",
"graphic/goddess.png",
"graphic/geopolit.png"
];

var tweetimg = document.getElementById("twit-window-img");


function nxtTweetM(){

 if (idxM<5) {  
 	   idxM = idxM + 1;
 }
else {
	idxM = 0;
}

tweetimg.src = twtrListM[idxM];

}

function prevTweetM(){

 if (idxM>0) {  
 	idxM = idxM - 1;
}
else {
	idxM = 5;
}

tweetimg.src = twtrListM[idxM];

}

function sayThank(){
//alert('click');
var eml = document.getElementById("contact-em").value;

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(eml.match(mailformat))
{

document.getElementById("contact-em").value="Hold on, just a sec...";

    var emailObj = {
        email: eml
    };

firebase.database().ref('contact').push().set(emailObj)
        .then(function(snapshot) {
             
document.getElementById("email-submit").style.display = "none" ;           document.getElementById("contact-em").value="Thanks! We will be in touch.";
 
           
        }, function(error) {
        
            document.getElementById("contact-em").value="Sorry, there was an error recording your email.";
            
        });

}

else {

document.getElementById("contact-em").value="Please enter a valid email address";
      
}

}



var insLoop = setInterval(addIncite,4000)

