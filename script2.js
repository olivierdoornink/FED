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



// Muziek Speelt Af

	var audio = new Audio ('./audio/giannis.mp3');
	var count	= 0;
	var muziekBtn = document.querySelector("body.highlights section:nth-of-type(1) button")
  var musicBtn = document.querySelector("body.highlights section:nth-of-type(1) button p")

	function speelMuziek(){
		if(count==0){
			count = 1;
			audio.play();
			musicBtn.innerHTML= "STOP!!";
	}
		else{
			count = 0;
			audio.pause();
			musicBtn.innerHTML= "MUSIC!!";
		}
	}

	muziekBtn.addEventListener("click", speelMuziek);


// Button Speelt Video Af

var dunkBtn = document.querySelector("#dunkbutton");

function toggleDunkBtn(){
	let video = document.querySelector("#video");
	let text = document.querySelector("body.highlights section:nth-of-type(2) div:nth-of-type(1) p");
	video.src= "https://www.youtube.com/embed/0USzJs9agOk?autoplay=1&controls=0&mute=1";
	text.innerHTML = "Watch a video of Giannis' best dunks!";
}

dunkBtn.addEventListener("click", toggleDunkBtn);


var shootBtn = document.querySelector("#shootbutton");

function toggleShootBtn(){
	let video = document.querySelector("#video");
	let text = document.querySelector("body.highlights section:nth-of-type(2) div:nth-of-type(1) p");
	video.src= "https://www.youtube.com/embed/IuodljGJnfM?autoplay=1&start=20&mute=1&controls=0";
	text.innerHTML = "Watch a video of Giannis' greatest jumpshots!";
}

shootBtn.addEventListener("click", toggleShootBtn);


var playBtn = document.querySelector("#playbutton");

function togglePlayBtn(){
	let video = document.querySelector("#video");
	let text = document.querySelector("body.highlights section:nth-of-type(2) div:nth-of-type(1) p");
	video.src= "https://www.youtube.com/embed/UeQhz_oSquk?autoplay=1&start=20&mute=1&controls=0";
	text.innerHTML = "Watch a video of Giannis' insane playmaking skills!";
}

playBtn.addEventListener("click", togglePlayBtn);


var defenceBtn = document.querySelector("#defencebutton");

function toggleDefenceBtn(){
	let video = document.querySelector("#video");
	let text = document.querySelector("body.highlights section:nth-of-type(2) div:nth-of-type(1) p");
	video.src= "https://www.youtube.com/embed/QbNpDuwiaMA?autoplay=1&start=20&mute=1&controls=0";
	text.innerHTML = "Watch a video of Giannis' unreal defence!";
}

defenceBtn.addEventListener("click", toggleDefenceBtn);
