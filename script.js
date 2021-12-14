
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

var jrueDiv = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(1)");

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
	let donteDivincenzo = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(2)");
	donteDivincenzo.classList.toggle("div2Groot");
}

donteDiv.addEventListener("click", maakDiv2Groot);


// Khris Middleton

var khrisDiv = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(3)");

function laatKhrisZien(){
	let khrisMiddleton = document.querySelector(".giannis section:nth-of-type(4) img:nth-of-type(3)");
	khrisMiddleton.classList.toggle("toonKhris");
}

khrisDiv.addEventListener("click", laatKhrisZien);


function maakDiv3Groot(){
	let khrisMiddleton = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(3)");
	khrisMiddleton.classList.toggle("div3Groot");
}

khrisDiv.addEventListener("click", maakDiv3Groot);


// Giannis Antetokounmpo

var giannisDiv = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(4)");

function laatGiannisZien(){
	let giannisAntetokounmpo = document.querySelector(".giannis section:nth-of-type(4) img:nth-of-type(4)");
	giannisAntetokounmpo.classList.toggle("toonGiannis");
}

giannisDiv.addEventListener("click", laatGiannisZien);


function maakDiv4Groot(){
	let giannisAntetokounmpo = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(4)");
	giannisAntetokounmpo.classList.toggle("div4Groot");
}

giannisDiv.addEventListener("click", maakDiv4Groot);


// Brook Lopez

var brookDiv = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(5)");

function laatBrookZien(){
	let brookLopez = document.querySelector(".giannis section:nth-of-type(4) img:nth-of-type(5)");
	brookLopez.classList.toggle("toonBrook");
}

brookDiv.addEventListener("click", laatBrookZien);


function maakDiv5Groot(){
	let brookLopez = document.querySelector(".giannis section:nth-of-type(4) div:nth-of-type(5)");
	brookLopez.classList.toggle("div5Groot");
}

brookDiv.addEventListener("click", maakDiv5Groot);
