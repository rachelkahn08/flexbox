console.log("Hello World from main.js!");

hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", openNavigation)

function openNavigation() {
	menu = document.querySelector(".navigation-menu");

	hamburgerBar = document.querySelector(".hamburger-bar:first-child");
	hamburgerHeight = hamburgerBar.offsetHeight;
		hamburgerHeightFirst = hamburgerHeight
		hamburgerHeightLast = -2 * hamburgerHeightFirst;
	hamburgerWidth = hamburgerBar.style.width;
		console.log(hamburgerWidth);

	if (!menu.classList.contains("navigation-menu-open")) {
		

		TweenMax.to(".hamburger-bar:first-child",
					.5,
					{
						marginBottom: 0,
						y: hamburgerHeightFirst,
						rotation: "45deg",
					}
				);
		TweenMax.to(".hamburger-bar:nth-Child(2)",
					.25,
					{
						width: 0,
					}
				);
		TweenMax.to(".hamburger-bar:last-child",
					.5,
					{
						y: hamburgerHeightLast,
						rotation: "-45deg",
					}
				);
		menu.classList.add("navigation-menu-open");
		TweenMax.fromTo(".navigation-menu-open",
					1,
					{	
						right: "-50%"
					},
					{
						right: 0
					}
				);
	} else {
		TweenMax.to(".hamburger-bar:first-child",
					.5,
					{
						marginBottom: hamburgerHeight,
						transform: "none",
					}
				);
		TweenMax.to(".hamburger-bar:nth-Child(2)",
					.25,
					{
						width: hamburgerWidth,
						delay: 0.25,
					}
				);
		TweenMax.to(".hamburger-bar:last-child",
					.5,
					{
						transform: "none",
					}
				);
		TweenMax.fromTo(".navigation-menu-open",
					1,
					{
						right: 0,
					},
					{	
						right: "-50%"
					}
				);
		setTimeout(function() {
			menu.classList.remove("navigation-menu-open");
		}, 1000);
	}
}