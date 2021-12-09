
// NAV DROPDOWN

var deButton = document.querySelector("div:nth-of-type(1)");

function doeFormNeerEnOp(){
	let hetFormulier = document.querySelector("nav");
	hetFormulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", doeFormNeerEnOp);


function doeCtaNeerEnOp(){
	let hetFormulier = document.querySelector("div:nth-of-type(1)");
	deButton.classList.toggle("toonCta");
}

deButton.addEventListener("click", doeCtaNeerEnOp);


// CLICKABLES

// Jrue Holiday

var jrueDiv = document.querySelector(".giannis section:nth-of-type(4) div.jrue");

function laatJrueZien(){
	let jrueHoliday = document.querySelector(".giannis section:nth-of-type(4) img:nth-of-type(1)");
	jrueHoliday.classList.toggle("toonJrue");
}

jrueDiv.addEventListener("click", laatJrueZien);


function maakDiv1Groot(){
	let jrueHoliday = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(1)");
	jrueHoliday.classList.toggle("div1Groot");
}

jrueDiv.addEventListener("click", maakDiv1Groot);


// Donte Divincenzo

var donteDiv = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(2)");

function laatDonteZien(){
	let donteDivincenzo = document.querySelector(".giannis section:nth-of-type(4) img:nth-of-type(2)");
	donteDivincenzo.classList.toggle("toonDonte");
}

donteDiv.addEventListener("click", laatDonteZien);


function maakDiv2Groot(){
	let jrueHoliday = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(2)");
	donteDivincenzo.classList.toggle("div2Groot");
}

donteDiv.addEventListener("click", maakDiv2Groot);
