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

