/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom-markup.js":
/*!***************************!*\
  !*** ./src/dom-markup.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createElements; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction setAttributes(elem, attr) {\n  Object.entries(attr).forEach(function (args) {\n    return elem.setAttribute.apply(elem, _toConsumableArray(args));\n  });\n}\n\nfunction none(elem) {\n  var hidden = elem;\n  hidden.style.display = 'none';\n}\n\nfunction createElements() {\n  var fragment = document.createDocumentFragment();\n  var wrapperDiv = document.createElement('div');\n  var searchDiv = document.createElement('div');\n  var form = document.createElement('form');\n  var input = document.createElement('input');\n  var button = document.createElement('button');\n  var iconElem = document.createElement('i');\n  var videoSection = document.createElement('section');\n  var output = document.createElement('div');\n  wrapperDiv.className = 'wrapper';\n  searchDiv.className = 'search';\n  form.setAttribute('id', 'search-form');\n  setAttributes(input, {\n    type: 'text',\n    id: 'search-input',\n    class: 'searchTerm',\n    placeholder: 'What are you looking for?'\n  });\n  setAttributes(button, {\n    type: 'submit',\n    class: 'searchButton'\n  });\n  iconElem.setAttribute('class', 'fas fa-search');\n  videoSection.className = 'video-wrapper';\n  output.setAttribute('class', 'video');\n  button.appendChild(iconElem);\n  form.appendChild(input);\n  form.appendChild(button);\n  searchDiv.appendChild(form);\n  wrapperDiv.appendChild(searchDiv);\n  wrapperDiv.appendChild(videoSection);\n  videoSection.appendChild(output);\n  fragment.appendChild(wrapperDiv);\n  document.body.appendChild(fragment);\n  var navigation = document.createElement('div');\n  navigation.setAttribute('class', 'navigation-arrows');\n  var arrowR = document.createElement('i');\n  arrowR.setAttribute('class', 'fas fa-angle-right');\n  var arrowL = document.createElement('i');\n  arrowL.setAttribute('class', 'fas fa-angle-left');\n  navigation.appendChild(arrowL);\n  navigation.appendChild(arrowR);\n  var pagination = document.createElement('div');\n  pagination.setAttribute('class', 'navigation-dots-box');\n\n  for (var i = 1; i < 6; i += 1) {\n    var dots = document.createElement('span');\n    dots.setAttribute('class', 'dots');\n    dots.setAttribute('id', \"page-\".concat(i));\n    pagination.appendChild(dots);\n  }\n\n  videoSection.appendChild(navigation);\n  videoSection.appendChild(pagination);\n  var first = document.querySelector('#page-1');\n  first.innerHTML = '1';\n  first.className += ' active';\n  first.className += ' over';\n  none(pagination);\n  none(navigation);\n}\n\n//# sourceURL=webpack:///./src/dom-markup.js?");

/***/ }),

/***/ "./src/fetch-request.js":
/*!******************************!*\
  !*** ./src/fetch-request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return search; });\nfunction search(searchTerm) {\n  var url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCfpcPtX2aFu_GcQJ1UIOWB8yYhZYoZY1E&type=video&part=snippet&maxResults=15';\n  return fetch(\"\".concat(url, \"&q=\").concat(searchTerm)).then(function (response) {\n    if (response.status !== 200) {\n      return \"Looks like there was a problem. Status Code: \".concat(response.status);\n    }\n\n    return response.json();\n  }).then(function (data) {\n    var idVideo = data.items.map(function (items) {\n      return items.id.videoId;\n    });\n    idVideo = idVideo.join(',');\n    var PageToken = data.nextPageToken;\n    localStorage.setItem('pageToken', \"\".concat(PageToken));\n    return fetch(\"https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCfpcPtX2aFu_GcQJ1UIOWB8yYhZYoZY1E&id=\".concat(idVideo, \"&part=snippet,statistics\"));\n  }).then(function (resp) {\n    return resp.json();\n  }).then(function (data) {\n    return data.items;\n  }).catch(function (err) {\n    return err;\n  });\n}\n\n//# sourceURL=webpack:///./src/fetch-request.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_markup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-markup */ \"./src/dom-markup.js\");\n/* harmony import */ var _fetch_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-request */ \"./src/fetch-request.js\");\n/* harmony import */ var _next_page_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./next-page-request */ \"./src/next-page-request.js\");\n\n\n\nObject(_dom_markup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nvar form = document.querySelector('#search-form');\nvar input = document.querySelector('#search-input');\nvar output = document.querySelector('.video');\nvar pagination = document.querySelector('.navigation-dots-box');\nvar navigation = document.querySelector('.navigation-arrows');\nvar wrapperDiv = document.querySelector('.wrapper');\nvar searchDiv = document.querySelector('.search');\nvar arrowL = document.querySelector('.fa-angle-left');\nvar arrowR = document.querySelector('.fa-angle-right');\nvar dots = document.querySelectorAll('.dots');\nvar videoPerPage = 4;\n\nfunction showMessage(message, className) {\n  var div = document.createElement('div');\n  div.className = \"\".concat(className);\n  var span = document.createElement('span');\n  span.innerHTML = message;\n  div.appendChild(span);\n  wrapperDiv.insertBefore(div, searchDiv);\n  setTimeout(function () {\n    div.remove();\n  }, 5000);\n}\n\nfunction truncWord(descr, limit) {\n  var shortend = descr.indexOf(' ', limit);\n  if (shortend === -1) return descr;\n  return descr.substring(0, shortend);\n}\n\nfunction btnActive(arg) {\n  var span = arg;\n  var active = document.querySelector('.active');\n  active.className = active.className.replace(' active', '');\n  active.className = active.className.replace(' over', '');\n  active.innerHTML = '';\n  span.className += ' active';\n}\n\nfunction nextPage() {\n  var searchTerm = input.value;\n  var clipsNumber = localStorage.getItem('clipsNumber');\n  Object(_next_page_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(searchTerm).then(function (results) {\n    var arrayOfVideo = [];\n    results.forEach(function (video, i) {\n      var dataIndex = +clipsNumber + +i;\n      arrayOfVideo.push(\"\\n          <div class=\\\"video-item\\\" data-index=\\\"\".concat(dataIndex, \"\\\">\\n            <p class=\\\"image-background\\\">\\n                  <img class=\\\"preview\\\" src=\\\"\").concat(video.snippet.thumbnails.medium.url, \"\\\" alt=\\\"\").concat(video.snippet.title, \"\\\">\\n              </p>\\n            <div class=\\\"video-item-content\\\">\\n              <a href=\\\"https://www.youtube.com/watch?v=\").concat(video.id, \"\\\" target=\\\"_blank\\\">\").concat(video.snippet.title, \"</a>\\n              <i class=\\\"fas fa-user\\\"></i>\\n              <span>\").concat(video.snippet.channelTitle, \"</span>\\n              <i class=\\\"far fa-calendar-alt\\\"></i>\\n              <span>\").concat(video.snippet.publishedAt, \"</span>\\n              <i class=\\\"far fa-eye\\\"></i>\\n              <span>\").concat(video.statistics.viewCount, \"</span>\\n              <p>\").concat(truncWord(video.snippet.description, 120), \"</p> \\n            </div>\\n          </div>\\n          \"));\n    });\n    var numVideo = arrayOfVideo.length;\n    var sumOfClips = +clipsNumber + numVideo;\n    localStorage.setItem('clipsNumber', \"\".concat(sumOfClips));\n\n    for (var i = 0; i < arrayOfVideo.length; i += 1) {\n      output.innerHTML += arrayOfVideo[i];\n    }\n\n    output.style.setProperty('--n', sumOfClips);\n  });\n}\n\nform.addEventListener('submit', function (e) {\n  var searchTerm = input.value;\n\n  if (searchTerm === undefined) {\n    showMessage('Please type anything to search', 'alert-danger');\n  }\n\n  input.value = '';\n  Object(_fetch_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(searchTerm).then(function (results) {\n    if (searchTerm !== '') {\n      output.innerHTML = '';\n      output.style.setProperty('--i', 0);\n      var arrayOfVideo = [];\n      results.forEach(function (video, i) {\n        arrayOfVideo.push(\"\\n            <div class=\\\"video-item\\\" data-index=\\\"\".concat(i, \"\\\">\\n              <p class=\\\"image-background\\\">\\n                    <img class=\\\"preview\\\" src=\\\"\").concat(video.snippet.thumbnails.medium.url, \"\\\" alt=\\\"\").concat(video.snippet.title, \"\\\">\\n                </p>\\n              <div class=\\\"video-item-content\\\">\\n                <a href=\\\"https://www.youtube.com/watch?v=\").concat(video.id, \"\\\" target=\\\"_blank\\\">\").concat(video.snippet.title, \"</a>\\n                <i class=\\\"fas fa-user\\\"></i>\\n                <span>\").concat(video.snippet.channelTitle, \"</span>\\n                <i class=\\\"far fa-calendar-alt\\\"></i>\\n                <span>\").concat(video.snippet.publishedAt, \"</span>\\n                <i class=\\\"far fa-eye\\\"></i>\\n                <span>\").concat(video.statistics.viewCount, \"</span>\\n                <p>\").concat(truncWord(video.snippet.description, 120), \"</p> \\n              </div>\\n            </div>\\n            \"));\n      });\n      var numVideo = arrayOfVideo.length;\n      localStorage.setItem('clipsNumber', \"\".concat(numVideo));\n\n      for (var _i = 0; _i < arrayOfVideo.length; _i += 1) {\n        output.innerHTML += arrayOfVideo[_i];\n      }\n\n      output.style.setProperty('--n', numVideo);\n      pagination.style.display = '';\n      navigation.style.display = '';\n    }\n  });\n\n  function unify(elem) {\n    return elem.changedTouches ? elem.changedTouches[0] : elem;\n  }\n\n  var x0 = null;\n\n  function lock(f) {\n    x0 = unify(f).clientX;\n  }\n\n  var i = 0;\n\n  function move(item) {\n    if (x0 || x0 === 0) {\n      var dx = unify(item).clientX - x0;\n      var s = Math.sign(dx);\n      var clipsNumber = localStorage.getItem('clipsNumber');\n\n      if ((i > 0 || s < 0) && (i < Math.ceil(clipsNumber / videoPerPage) - 1 || s > 0)) {\n        output.style.setProperty('--i', i -= s);\n\n        if (i === Math.floor(clipsNumber / videoPerPage / 2)) {\n          nextPage();\n        }\n\n        var current = document.querySelector(\"#page-\".concat(i + 1));\n\n        if (i < 3) {\n          btnActive(current);\n          current.innerHTML = \"\".concat(i + 1);\n        } else {\n          current = document.querySelector('#page-3');\n          btnActive(current);\n          current.innerHTML = \"\".concat(i + 1);\n        }\n      }\n\n      x0 = null;\n    }\n  }\n\n  arrowL.addEventListener('click', function () {\n    if (i > 0) {\n      output.style.setProperty('--i', i -= 1);\n      var current = document.querySelector(\"#page-\".concat(i + 1));\n\n      if (i < 3) {\n        btnActive(current);\n        current.innerHTML = \"\".concat(i + 1);\n      } else {\n        current = document.querySelector('#page-3');\n        btnActive(current);\n        current.innerHTML = \"\".concat(i + 1);\n      }\n    }\n  });\n  arrowR.addEventListener('click', function () {\n    var clipsNumber = localStorage.getItem('clipsNumber');\n\n    if (i === Math.floor(clipsNumber / videoPerPage / 2)) {\n      nextPage();\n    }\n\n    if (i < Math.ceil(clipsNumber / videoPerPage) - 1) {\n      output.style.setProperty('--i', i += 1);\n      var current = document.querySelector(\"#page-\".concat(i + 1));\n\n      if (i < 3) {\n        btnActive(current);\n        current.innerHTML = \"\".concat(i + 1);\n      } else {\n        current = document.querySelector('#page-3');\n        btnActive(current);\n        current.innerHTML = \"\".concat(i + 1);\n      }\n    }\n  });\n  output.addEventListener('mousedown', lock, false);\n  output.addEventListener('touchstart', lock, false);\n  output.addEventListener('mouseup', move, false);\n  output.addEventListener('touchend', move, false);\n  e.preventDefault();\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/next-page-request.js":
/*!**********************************!*\
  !*** ./src/next-page-request.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return searchNext; });\nfunction searchNext(searchTerm) {\n  var url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCfpcPtX2aFu_GcQJ1UIOWB8yYhZYoZY1E&type=video&part=snippet&maxResults=15';\n  var next = localStorage.getItem('pageToken');\n  return fetch(\"\".concat(url, \"&q=\").concat(searchTerm, \"&pageToken=\").concat(next)).then(function (response) {\n    if (response.status !== 200) {\n      return \"Looks like there was a problem. Status Code: \".concat(response.status);\n    }\n\n    return response.json();\n  }).then(function (data) {\n    var idVideo = data.items.map(function (items) {\n      return items.id.videoId;\n    });\n    idVideo = idVideo.join(',');\n    var PageToken = data.nextPageToken;\n    localStorage.removeItem('pageToken');\n    localStorage.setItem('pageToken', \"\".concat(PageToken));\n    return fetch(\"https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCfpcPtX2aFu_GcQJ1UIOWB8yYhZYoZY1E&id=\".concat(idVideo, \"&part=snippet,statistics\"));\n  }).then(function (resp) {\n    return resp.json();\n  }).then(function (data) {\n    return data.items;\n  }).catch(function (err) {\n    return err;\n  });\n}\n\n//# sourceURL=webpack:///./src/next-page-request.js?");

/***/ })

/******/ });