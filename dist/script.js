/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modals */ "./src/js/modules/modals.js");


var forms = function forms() {
  var forms = document.querySelectorAll('form'),
      inputs = document.querySelectorAll('input');
  var message = {
    loading: '../src/img/spinner.svg',
    success: 'Спасибо за вашу заявку!',
    successText: 'Наш менеджер свяжется с вами в ближайшее время!',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(function (item) {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = "\n            display: block;\n            margin: 0 auto;\n            ";
      form.insertAdjacentElement('afterend', statusMessage);
      var formData = new FormData(form);
      var object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      fetch('../src/server.php', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(object)
      }).then(function (data) {
        return data.text();
      }).then(function (data) {
        console.log(data);
        showThanksModal(message.success);
        form.reset();
        statusMessage.remove();
      })["catch"](function () {
        showThanksModal(message.failure);
      })["finally"](function () {
        form.reset();
      });
    });
  }

  function showThanksModal(message) {
    var prevModal = document.getElementById('consultation');
    prevModal.style.display = 'none';
    (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__.openModal)('#thanks');
    var thanksModal = document.createElement('div');
    thanksModal.classList.add('modal_mini');
    thanksModal.innerHTML = "\n        <div class=\"modal_mini\">\n           <div class=\"modal__close\" data-close>\xD7</div>\n           <div class=\"modal__subtitle\">".concat(message, "</div>\n       </div>\n        ");
    document.querySelector('#thanks').append(thanksModal);
    setTimeout(function () {
      thanksModal.remove();
      prevModal.style.display = 'block';
      (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__.closeModal)('#thanks');
    }, 4000);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector) {
  var windows = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector(modalSelector),
      overlay = document.querySelector('.overlay');
  windows.forEach(function (item) {
    item.style.display = 'none';
  });
  modal.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) {
  var windows = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector(modalSelector),
      overlay = document.querySelector('.overlay');
  windows.forEach(function (item) {
    item.style.display = 'none';
  });
  modal.style.display = "none";
  overlay.style.display = 'none';
  document.body.style.overflow = "";
}

var modals = function modals(triggerSelector, modalSelector, closeSelector) {
  var trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelectorAll(closeSelector),
      overlay = document.querySelector('.overlay');
  trigger.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target) {
        e.preventDefault();
      }

      openModal(modalSelector);
    });
  });
  close.forEach(function (item) {
    item.addEventListener('click', function () {
      closeModal(modalSelector);
    });
  });
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target.matches('.modal__close')) {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.code === "Escape" && modal.style.display == 'block') {
      closeModal(modalSelector);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");


window.addEventListener('DOMContentLoaded', function () {
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-open="consultation"]', '#consultation', '.modal__close');
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-open="order"]', '#order', '.modal__close');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map