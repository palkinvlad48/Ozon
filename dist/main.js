/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n\r\n//import counter from \"./modules/counter\"\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_filter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n//counter()\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nconst cart = () => {\r\n  const cartBtn = document.getElementById('cart')\r\n  const cartModal = document.querySelector('.cart')\r\n  const cartCloseBtn = cartModal.querySelector('.cart-close')\r\n  const cartTotal = cartModal.querySelector('.cart-total > span')\r\n  const goodsWrapper = document.querySelector('.goods')\r\n  const cartWrapper = document.querySelector('.cart-wrapper')\r\n  const cartSendBtn = document.querySelector('.cart-confirm')\r\n  const spanCounter = document.querySelector('.counter')\r\n  //console.log('spanCounter:', spanCounter)\r\n  //console.log('cartTotal', cartTotal)\r\n\r\n  const openCart = () => {\r\n    const cart = localStorage.getItem('cart') ?\r\n      JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n    cartModal.style.display = 'flex'\r\n    ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n    counter(cart.length)\r\n    console.log('openCart:', cart)\r\n    cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n      return sum + goodItem.price\r\n    }, 0)\r\n    counter()\r\n  }\r\n\r\n  const closeCart = () => {\r\n    cartModal.style.display = 'none'\r\n    counter()\r\n  }\r\n\r\n  const counter = () => {\r\n    //const numCounter = localStorage.getItem('cart')\r\n    const cart = localStorage.getItem('cart') ?\r\n      JSON.parse(localStorage.getItem('cart')) : []\r\n    // console.log('spanCounter:', spanCounter)\r\n\r\n    // spanCounter.addEventListener('click', (par) => {\r\n    spanCounter.textContent = cart.length\r\n    // })\r\n  }\r\n\r\n  // spanCounter.addEventListener('click', () => {\r\n  //   spanCounter.textContent = cart.length\r\n  // })\r\n\r\n  cartBtn.addEventListener('click', openCart)\r\n\r\n  cartCloseBtn.addEventListener('click', closeCart)\r\n\r\n  goodsWrapper.addEventListener('click', (ev) => {\r\n    const target = ev.target\r\n    if (target.classList.contains('btn-primary')) {\r\n      const card = target.closest('.card')\r\n      const key = card.dataset.key\r\n      const goods = JSON.parse(localStorage.getItem('goods'))\r\n      //console.log('goods:', card)\r\n      const cart = localStorage.getItem('cart') ?\r\n        JSON.parse(localStorage.getItem('cart')) : []\r\n      console.log('cart:', cart)\r\n      const goodItem = goods.find((item) => {\r\n        return item.id === +key\r\n      })\r\n      cart.push(goodItem)\r\n      localStorage.setItem('cart', JSON.stringify(cart))\r\n      //renderCart(cart)\r\n      counter(cart.length)\r\n      console.log(cart.length)\r\n    }\r\n  })\r\n\r\n  cartWrapper.addEventListener('click', (ev) => {\r\n    if (ev.target.classList.contains('btn-primary')) {\r\n      const cart = localStorage.getItem('cart') ?\r\n        JSON.parse(localStorage.getItem('cart')) : []\r\n      const card = ev.target.closest('.card')\r\n      const key = card.dataset.key\r\n      console.log(key)\r\n      const index = cart.findIndex((item) => {\r\n        return item.id === +key\r\n      })\r\n      cart.splice(index, 1)\r\n\r\n      localStorage.setItem('cart', JSON.stringify(cart))\r\n\r\n      ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n      cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n        return sum + goodItem.price\r\n      }, 0)\r\n    }\r\n  })\r\n\r\n  cartSendBtn.addEventListener('click', () => {\r\n    const cart = localStorage.getItem('cart') ?\r\n      JSON.parse(localStorage.getItem('cart')) : []\r\n    console.log('cartSendBtn', cart)\r\n    ;(0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n      localStorage.setItem('cart', JSON.stringify([]))\r\n      ;(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\r\n\r\n      cartTotal.textContent = 0\r\n    })\r\n    closeCart()\r\n  })\r\n\r\n  counter()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n\r\n  const btnCatalog = document.querySelector('.catalog-button > button')\r\n  const catalogModal = document.querySelector('.catalog')\r\n  const catalogModalItems = document.querySelectorAll('.catalog li')\r\n\r\n  btnCatalog.addEventListener('click', () => {\r\n    catalogModal.classList.toggle('visible')\r\n    //style.display = 'block'\r\n  })\r\n\r\n  catalogModalItems.forEach(item => {\r\n    item.addEventListener('click', (e) => {\r\n      const text = item.textContent\r\n\r\n      ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\r\n      })\r\n\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst filter = () => {\r\n  const minInput = document.getElementById('min')\r\n  const maxInput = document.getElementById('max')\r\n  const checkboxInput = document.getElementById('discount-checkbox')\r\n  const checkboxSpan = document.querySelector('.filter-check_checkmark')\r\n  \r\n  minInput.addEventListener('input', () => {\r\n    //console.log(minInput.value)\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, minInput.value, maxInput.value)))\r\n    })\r\n  })\r\n\r\n  maxInput.addEventListener('input', () => {\r\n    //console.log(typeof maxInput.value)\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, minInput.value, maxInput.value)))\r\n    })\r\n  })\r\n\r\n  checkboxInput.addEventListener('change', () => {\r\n    if (checkboxInput.checked) {\r\n      checkboxSpan.classList.add('checked')\r\n    } else {\r\n      checkboxSpan.classList.remove('checked')\r\n    }\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value))\r\n    })\r\n  })\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toUpperCase().includes(value.toUpperCase())\r\n  })\r\n\r\n}\r\n\r\nconst categoryFilter = (goods, value) => {\r\n\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category === value\r\n  })\r\n\r\n}\r\n\r\nconst priceFilter = (goods, min, max) => {\r\n  return goods.filter((goodsItem) => {\r\n    if (min === '' && max === '') {\r\n      return goodsItem\r\n    } else if (min !== '' && max !== '') {\r\n      return goodsItem.price > +min && goodsItem.price < +max\r\n    } else if (min !== '' && max === '') {\r\n      return goodsItem.price > +min\r\n    } else if (min === '' && max !== '') {\r\n      return goodsItem.price < +max\r\n    }\r\n\r\n  })\r\n\r\n}\r\n// по акциям\r\nconst hotSaleFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    if (value) {\r\n      return goodsItem.sale === true\r\n    } else {\r\n      return goodsItem\r\n    }\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\r\n  //'https://jsonplaceholder.typicode.com/posts/1') ('http://localhost:3000/goods')\r\n  //return fetch(`https://test-9d858-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : '' }`) можно бы было с json-server\r\n\r\n  return fetch(`https://test-9d858-default-rtdb.firebaseio.com/goods.json`)\r\n    .then((response) => {\r\n      return response.json()\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\nconst load = () => {\r\n  const cartBtn = document.getElementById('cart')\r\n\r\n  ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    .then((data) => {\r\n      ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data)\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\r\n  \r\n  return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n    method: 'POST',\r\n    body: JSON.stringify(cart),\r\n    headers: {\r\n      'Content-Type': 'applocation/json; charset=UTF-8',\r\n    },\r\n  })\r\n    .then(res => res.json())\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n  const cartWrapper = document.querySelector('.cart-wrapper')\r\n\r\n  cartWrapper.innerHTML = ''\r\n\r\n  if (goods.length === 0) {\r\n    cartWrapper.insertAdjacentHTML('beforeend', `\r\n        <div id=\"cart-empty\">\r\n        Ваша корзина пуста\r\n        </div>\r\n      `)\r\n  } else {\r\n    goods.forEach((goodsItem) => {\r\n      cartWrapper.insertAdjacentHTML('beforeend', `\r\n\t\t\t<div class=\"card\" data-key=\"${goodsItem.id}\">\r\n        ${(goodsItem.sale) ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t<span class=\"card-img-top\" style=\"background-image: url(${goodsItem.img})\" alt=\"${goodsItem.title}\">\r\n          </span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t<div class=\"card-price\">${goodsItem.price} ₽</div>\r\n\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\r\n\t\t\t\t\t<button class=\"btn btn-primary\">Удалить</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\t\r\n    `)\r\n    });\r\n  }\r\n  console.log(goods.length)\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n  const goodsWrapper = document.querySelector('.goods')\r\n\r\n  localStorage.setItem('goods', JSON.stringify(goods))\r\n\r\n  goodsWrapper.innerHTML = ''\r\n\r\n  goods.forEach(goodsItem => {\r\n    let imgCurr = goodsItem.img\r\n    let imgNo = \"https://cdn1.ozone.ru/multimedia/c400/1021877092.jpg\"//'C:/GloAk/Ozon_JS_1221/src/modules/image_182.jpg'\r\n    // 'https://cdn1.ozone.ru/multimedia/c400/102538227.jpg' -> 404?\r\n    // 'https://cdn1.ozone.ru/multimedia/c400/102538725.jpg' -> 404?\r\n\r\n    if (!imgCurr) {\r\n      console.log('Нет рисунка')\r\n    }  //else { console.log(imgCurr) }\r\n    goodsWrapper.insertAdjacentHTML('beforeend', `\r\n    <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                  ${(goodsItem.sale) ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"card-img-top\" style=\"background-image: url(${(imgCurr) ? goodsItem.img : imgNo})\"  alt=\"${goodsItem.title}\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-price\">${goodsItem.price} ₽</div>\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n    `)\r\n  });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n  const searchInput = document.querySelector('.search-wrapper_input')\r\n  \r\n  searchInput.addEventListener('input', (ev) => {\r\n    const value = ev.target.value\r\n\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n      .then((data) => {\r\n        ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\r\n      })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://Ozon_JS_1221/./src/modules/search.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;