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

/*
 * Всплывающие дилоговые окна
 */

var recallForm = document.querySelector(".recall-form");

if (recallForm) {

    var submitButton = recallForm.querySelector("input[type=submit]");

    var failureDialog = document.querySelector(".modal-dialog--failure");
    var successDialog = document.querySelector(".modal-dialog--success");

    submitButton.addEventListener("click", function(event) {
      event.preventDefault();

      if (recallForm.checkValidity()) {
          // Форма валидна
          successDialog.classList.add("modal-dialog--show");

      } else {
          // Форма заполнена с ошибками
          failureDialog.classList.add("modal-dialog--show");
      }
    });

    var failureDialogOkBtn = failureDialog.querySelector(".modal-dialog__btn-ok");

    failureDialogOkBtn.addEventListener("click", function(event) {
        event.preventDefault();

        failureDialog.classList.remove("modal-dialog--show");
    })

    var successDialogCancelBtn = successDialog.querySelector(".modal-dialog__btn-cancel");

    successDialogCancelBtn.addEventListener("click", function(event) {
        event.preventDefault();

        successDialog.classList.remove("modal-dialog--show");
    })
}
