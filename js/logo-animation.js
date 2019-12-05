function navToMenu(){
	console.log("triggered");
}

gsap.to("#logo",{
	// animates for 2 sceonds
	duration: 2, 
	// Moves Up 50 pixles
	y: -50, 
	// fully visible at end
	opacity: 1,
	// when finished
	onComplete: navToMenu
});