const buttons = document.getElementsByClassName("button");
for(let i = 0; i < buttons.length; i++)
{
	buttons[i].addEventListener('mouseenter', () => console.log('mouse enter'));
}
function buttonMouseEnter(eleId)
{
	const btn = document.getElementById(eleId);
	btn.style.background = "LINEAR-GRADIENT(RGB(254, 129, 202), RGB(255, 224, 245))";
}
window.onload = function load()
{
	buttonMouseExit("buttonContact");
	buttonMouseExit("buttonDownloadResume");
}
function buttonMouseExit(eleId)
{
	const btn = document.getElementById(eleId);
	btn.style.background = "LINEAR-GRADIENT(RGB(254, 103, 191), RGB(254, 205, 238))";
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


function scrollFunction1() {
	let e = document.getElementById("el1");
	e.scrollIntoView({
	  block: 'start',
	  behavior: 'smooth',
	  inline: 'start'
	});
  }
  
  $('#myCollapsible').collapse({
	toggle: false
  })