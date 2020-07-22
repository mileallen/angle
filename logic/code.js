
const img1 = new Image();
img1.src = "graph/mumbai-dock-home.jpg";

const img2 = new Image();
img2.src = "graph/black-dog-home.jpg";

const img3 = new Image();
img3.src = "graph/bridge-rain-home.jpg";


const insights = [ 
  {
    imag: 'graph/mumbai-dock-home.jpg',
    head: 'State capitalism',
    desc: 'is not a preserve of mid-income countries. (A more complete grasp of the global business environment might be the edge you need.)'
  },
  {
    imag: 'graph/black-dog-home.jpg',
    head: 'Animal brains',
    desc: 'are capable of much that was until recently thought uniquely human. (Why limit imagination when designing artificial intelligence algorithms?)'
  },
  {
    imag: 'graph/bridge-rain-home.jpg',
    head: 'Impressionism',
    desc: 'had its origin in global trade, when the east opened up to the west! (What might you innovate with when you too connect disparate and distant influences?)'
  } 
]



const page = {

  els: {
    elD1: document.getElementById('insD1'),
    elIm: document.getElementById('insImage'),
    elHe: document.getElementById('insHead'),
    elDe: document.getElementById('insDesc')
  },
  i: 0,
  insReset: null,
  insLoop: null
}



function addIncite() {

  page.insReset = setTimeout(() => { page.els.elD1.style.opacity = 0 }, 2500)

  if ( page.i === insights.length ) page.i = 0

  page.els.elIm.src = insights[page.i].imag;
  page.els.elHe.innerHTML = insights[page.i].head;
  page.els.elDe.innerHTML = insights[page.i].desc;
  page.els.elD1.style.opacity = 1
  page.i++

}



page.idx = 0;

const twtrList = ["678926231136395264", "745661166635069441", "729681299003342848", "884749850616619008", "690205679525597185", "934765535249571840"];

function addTweet(id, obj=page.twtObj) {

  var tweet = document.getElementById("twit-window");
  tweet.innerHTML = "";

  obj.widgets.createTweet(
    id, tweet,
    {
      conversation: 'none',    // or all
      cards: 'visible',  // or visible 
      linkColor: '#cc0000', // default is blue
      theme: 'light'    // or dark
    })
    .then(function (el) {
      el.contentDocument.querySelector(".footer").style.display = "none";
    });

}

function nxtTweet() {
  if (page.idx < 5) page.idx = page.idx + 1
  else page.idx = 0
  var idtwt = twtrList[page.idx]
  addTweet(idtwt)
}

function prevTweet() {
  if (page.idx > 0) page.idx = page.idx - 1
  else page.idx = 5
  var idtwt = twtrList[page.idx];
  addTweet(idtwt);
}


window.onload = (function () {

  page.twtObj = twttr
  addTweet(twtrList[0])
});


function sayThank() {
  let eml_inp = document.getElementById("contact-em")
  let eml = eml_inp.value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (eml.match(mailformat)) {
    eml_inp.value = "Hold on, just a sec...";
    let emailObj = { email: eml };

    firebase.database().ref('contact').push().set(emailObj)
      .then(function (snapshot) {
      document.getElementById("email-submit").style.display = "none";
      eml_inp.value = "Thanks! We will be in touch.";
    }, function (error) {
      eml_inp.value = "Sorry, there was an error recording your email.";
    });
  }
  else  eml_inp.value = "Please enter a valid email address";
}

page.insLoop = setInterval(addIncite, 3000)

