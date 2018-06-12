(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Constants/author-api-endpoints.ts":
/*!***************************************************!*\
  !*** ./src/app/Constants/author-api-endpoints.ts ***!
  \***************************************************/
/*! exports provided: AUTHOR_API_ENDPOINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHOR_API_ENDPOINTS", function() { return AUTHOR_API_ENDPOINTS; });
var AUTHOR_API_ENDPOINTS = {
    getAuthorSummary: 'http://openlibrary.org/authors/AUTHOR_CODE.json',
    getAuthorWorkDetails: 'http://openlibrary.org/authors/AUTHOR_CODE/works.json'
};


/***/ }),

/***/ "./src/app/Services/author.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/author.service.ts ***!
  \********************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _Constants_author_api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Constants/author-api-endpoints */ "./src/app/Constants/author-api-endpoints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorService = /** @class */ (function () {
    function AuthorService(_http) {
        this._http = _http;
    }
    AuthorService.prototype.generateUrl = function (api, authorCode) {
        return api.replace('AUTHOR_CODE', authorCode);
    };
    AuthorService.prototype.getAuthorDetails = function (authorCode) {
        var url = this.generateUrl(_Constants_author_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["AUTHOR_API_ENDPOINTS"].getAuthorSummary, authorCode);
        return this._http.get(url);
    };
    AuthorService.prototype.getAuthorWorks = function (authorCode) {
        var url = this.generateUrl(_Constants_author_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["AUTHOR_API_ENDPOINTS"].getAuthorWorkDetails, authorCode);
        return this._http.get(url);
    };
    AuthorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthorService);
    return AuthorService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n  font-size: 14px;\r\n}\r\n\r\ninput {\r\n  padding: 8px;\r\n}\r\n\r\ninput[type='search'] {\r\n  width: 300px;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 15px;\r\n}\r\n\r\n.author-detail {\r\n  padding: 15px 0;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in-out;\r\n  padding: 8px;\r\n  background-color: #FFF;\r\n  border: 1px solid #3D3D3D;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #3d3d3d;\r\n  color: #FFF;\r\n}\r\n\r\n.pt-15 {\r\n  padding: 15px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n\n<form (submit)='eventSearchAuthors()'>\n\n  <input type=\"search\"\n  placeholder=\"Please input author code to search\"\n  [(ngModel)]=\"authorCode\"\n  autocomplete=\"off\"\n  name=\"textAuthorCode\" />\n\n  <input type='submit' value='Search' />\n\n  <br>\n\n  <span *ngIf=\"errorMessage\" style=\"color:red\">{{ errorMessage }}</span>\n\n  <summary>\n    <div class='author-detail' *ngIf='authorDetails'>\n      <strong>Author Name: </strong>\n      <span>{{ authorDetails?.name }}</span>\n      <span *ngIf='authorDetails?.death_date'>&nbsp;(dead)</span>\n    </div>\n    <button *ngIf='authorDetails' (click)='getAuthorRecentWorks()'>Show recent works</button>\n    <summary class='pt-15' *ngIf='authorWorks'>\n      <strong>Recent Works:</strong>\n      <ol *ngIf='authorWorks?.entries?.length > 0; else noData'>\n        <li *ngFor='let data of authorWorks?.entries'>{{ data?.title }}</li>\n      </ol>\n    </summary>\n  </summary>\n\n</form>\n\n<ng-template #noData>\n  <strong>NO DATA AVAILABLE</strong>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_author_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/author.service */ "./src/app/Services/author.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_authorService) {
        this._authorService = _authorService;
        this.title = 'Search Authors App';
        this.authorCode = '';
    }
    AppComponent.prototype.isAlphaNumeric = function (valueToCheck) {
        var regex = /^[a-zA-Z0-9]*$/;
        return regex.test(valueToCheck);
    };
    AppComponent.prototype.eventSearchAuthors = function () {
        if (this.authorCode && this.isAlphaNumeric(this.authorCode.trim())) {
            this.errorMessage = '';
            this.getAuthorDetails();
        }
        else {
            this.errorMessage = 'Please input a valid AlphaNumeric value.';
        }
    };
    AppComponent.prototype.getAuthorDetails = function () {
        var _this = this;
        this._authorService.getAuthorDetails(this.authorCode)
            .subscribe(function (result) {
            _this.authorDetails = result.json();
            _this.authorWorks = null;
        }, function (err) {
            _this.authorDetails = null;
            _this.authorWorks = null;
            _this.errorMessage = "There is no author with code " + _this.authorCode + " in our system. Please try again.";
        });
    };
    AppComponent.prototype.getAuthorRecentWorks = function () {
        var _this = this;
        this._authorService.getAuthorWorks(this.authorCode)
            .subscribe(function (result) {
            _this.authorWorks = result.json();
        }, function (err) {
            _this.authorDetails = null;
            _this.authorWorks = null;
            _this.errorMessage = "There is no author with code " + _this.authorCode + " in our system. Please try again.";
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_author_service__WEBPACK_IMPORTED_MODULE_1__["AuthorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Services_author_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/author.service */ "./src/app/Services/author.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            ],
            providers: [
                _Services_author_service__WEBPACK_IMPORTED_MODULE_5__["AuthorService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\New folder (2)\SearchAuthors\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map