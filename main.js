function swapImage() {
	const image = document.querySelector("img");
	if (screen.width >= 1100) {
		image.src = "./images/image-header-desktop.jpg";
	} else {
		image.src = "./images/image-header-mobile.jpg";
	}
}

window.addEventListener("resize", swapImage);
