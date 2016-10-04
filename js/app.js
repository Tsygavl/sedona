/*
 * Навигация мобильной версии сайта
 */

var mainNavigation = document.querySelector(".main-nav");

var mainNvaigationItems = mainNavigation.querySelector(".main-nav__list");
var btnOpenNavigation = mainNavigation.querySelector(".main-nav__btn-open");
var btnCloseNavigation = mainNavigation.querySelector(".main-nav__btn-close");


btnOpenNavigation.addEventListener("click", function() {

	if (mainNvaigationItems.classList.contains("visually-hidden")) {

		mainNvaigationItems.classList.remove("visually-hidden");

		btnOpenNavigation.classList.add("visually-hidden");
		btnCloseNavigation.classList.remove("visually-hidden");
	}
});


btnCloseNavigation.addEventListener("click", function() {
	
	if (!mainNvaigationItems.classList.contains("visually-hidden")) {

		mainNvaigationItems.classList.add("visually-hidden");

		btnOpenNavigation.classList.remove("visually-hidden");
		btnCloseNavigation.classList.add("visually-hidden");
	}
});
