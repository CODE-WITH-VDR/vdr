burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-classresp');
    navList.classList.toggle('v-classresp');
    navbar.classList.toggle('h-navresp');
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbwyQDZNJx4rirna1Xv_oHnjAD2gFKnAHZOXGe7X9YqudzgLCMJYAomjne1pP6UjLkVyLA/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting me..! I Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})

const btnScrollToTop=document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click",function(){
    window.scrollTo(0,0);
})

$(".change").on("click", function () {
  if ($("body").hasClass("dark")) {
      $("body").removeClass("dark")
      $(".change").text("OFF");
  } else {
      $("body").addClass("dark");      
      $(".change").text("ON");
  }

});

const f = document.getElementById('example');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=';
const site = '';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);
//Reload


//DISABLE CONTEXT MENU
/*document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
  window.event.returnValue = false;
  });
}*/
