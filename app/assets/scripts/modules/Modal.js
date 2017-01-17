import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() {
		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));
		// clicking the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));
		// pushes the esc key
		$(document).keyup(this.keyPressHandler.bind(this));
		// clicking outside modal inner container
		$(window).click(this.outsideModal.bind(this));
	}

	outsideModal(el) {
			if (el.target == this.modal[0]) {
				console.log(el);
				this.closeModal();
			}
		}

	keyPressHandler(e) {
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;