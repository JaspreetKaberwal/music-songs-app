(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-info\">\n    <h3>Hello, {{username}}</h3>\n    <button (click)=\"logout()\">Logout</button>\n</div>\n<div *ngIf=\"showModal\" class=\"modal\" (click)=\"showModal=false\">\n    <div class=\"container\" (click)=\"$event.stopPropagation();\">\n        <input [(ngModel)]=\"song.name\" placeholder=\"Song Name\" />\n        <input [(ngModel)]=\"song.artist\" placeholder=\"Artist\" />\n        <label>Genre: </label>\n        <select [(ngModel)]=\"song.genre\">\n            <option *ngFor=\"let genre of genres\">{{genre}}</option>\n        </select>\n        <button class=\"add-song-modal\" (click)=\"newSong()\">Add Song</button>\n    </div>\n</div>\n<button class=\"add-song\" (click)=\"showModal=true\"><span>ADD SONG</span></button>\n\n<div class=\"all-playlists\">\n    <h1>Genre based Playlists</h1>\n    <div class=\"playlists\">\n        <div *ngFor=\"let playlist of allPlaylists\" class=\"playlist\">\n            <h1>{{playlist.genre}}</h1>\n            <div>\n                <div *ngFor=\"let song of playlist.songs;let i=index\">\n                    {{i+1}}) {{song.name}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"all-songs\">\n    <h1>My Songs</h1>\n    <div class=\"songs\">\n        <div *ngFor=\"let song of allSongs\" class=\"song\">\n            <div class=\"delete-song\" (click)=\"deleteSong(song._id)\">X</div>\n            <h1>{{song.name}}</h1>\n            <h6>Artist: {{song.artist}}</h6>\n            <h6>Genre: {{song.genre}}</h6>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <img class=\"head-image\" src=\"assets/login.png\"/>\n    <div class=\"form\">\n        <h1>Login to amazing music</h1>\n        <input [(ngModel)]=\"username\" type=\"text\" placeholder=\"Username\"/>\n        <input [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\"/>\n        <div class=\"buttons\">\n            <button (click)=\"login()\">Login</button>\n            <button (click)=\"signUp()\">Signup</button>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/api-calls.service.ts":
/*!**************************************!*\
  !*** ./src/app/api-calls.service.ts ***!
  \**************************************/
/*! exports provided: ApiCallsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCallsService", function() { return ApiCallsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiCallsService = class ApiCallsService {
    constructor(http) {
        this.http = http;
        // BASE_URL: string = 'http://localhost:3000'
        this.BASE_URL = 'https://music-songs.herokuapp.com';
    }
    signUp(username, password) {
        return this.http.post(`${this.BASE_URL}/signup`, { username, password });
    }
    login(username, password) {
        return this.http.post(`${this.BASE_URL}/login`, { username, password });
    }
    addSong(song) {
        return this.http.post(`${this.BASE_URL}/song`, song);
    }
    getSongs() {
        return this.http.get(`${this.BASE_URL}/songs`);
    }
    deleteSong(songId) {
        return this.http.delete(`${this.BASE_URL}/song/${songId}`);
    }
};
ApiCallsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiCallsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiCallsService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'music';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  justify-content: center;\n  align-items: center;\n}\n\n.modal .container {\n  width: 50%;\n  background-color: white;\n  padding: 20px;\n}\n\ninput {\n  margin: 10px 0px;\n  padding: 10px;\n  display: block;\n  width: 100%;\n}\n\nbutton:focus {\n  outline: none;\n}\n\ninput:focus {\n  outline: none;\n  border: 1px solid black;\n}\n\n.add-song {\n  background-color: black;\n  color: white;\n  position: fixed;\n  width: 140px;\n  height: 70px;\n  font-size: 20px;\n  bottom: 0;\n  right: 0;\n  margin: 20px;\n  border-radius: 10%;\n}\n\n.add-song-modal {\n  display: block;\n  background-color: black;\n  color: white;\n  padding: 10px 20px;\n}\n\n.all-playlists {\n  padding: 40px;\n}\n\n.all-playlists .playlists {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.all-playlists .playlists .playlist {\n  padding: 5px;\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 300px;\n  margin: 20px;\n  border: 8px solid black;\n  box-shadow: 10px 10px 19px -10px rgba(0, 0, 0, 0.75);\n}\n\n.all-playlists .playlists .playlist h1 {\n  align-self: center;\n}\n\n.all-playlists .playlists .playlist:hover {\n  background: wheat;\n  cursor: pointer;\n}\n\n.all-songs {\n  padding: 40px;\n}\n\n.all-songs .songs {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.all-songs .songs .song {\n  position: relative;\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 10px 20px;\n  min-width: 200px;\n  min-height: 70px;\n  margin: 20px;\n  border: 4px solid black;\n  box-shadow: 10px 10px 19px -10px rgba(0, 0, 0, 0.75);\n}\n\n.all-songs .songs .song:hover {\n  background: lightgrey;\n  cursor: pointer;\n}\n\nselect {\n  margin-bottom: 20px;\n  margin-left: 20px;\n  padding: 10px;\n}\n\n.delete-song {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 30px;\n  color: white;\n  height: 30px;\n  top: 0;\n  right: 0;\n  background-color: rgba(255, 0, 0, 0.2);\n}\n\n.delete-song:hover {\n  background-color: rgba(255, 0, 0, 0.9);\n}\n\n.user-info {\n  position: fixed;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.user-info button {\n  padding: 10px 20px;\n  background-color: black;\n  color: white;\n}\n\nh3 {\n  display: inline-flex;\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXkvRG9jdW1lbnRzL3dvcmsvcGVyc29uYWwveWFzaC1wcm9qZWN0L211c2ljL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNHSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREFBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ0dKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBR0Esb0RBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNJSjs7QUREQTtFQUNJLGFBQUE7QUNJSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDSUo7O0FEREE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUdBLG9EQUFBO0FDSUo7O0FEREE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNJSjs7QUREQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDSUo7O0FEREE7RUFDSSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esc0NBQUE7QUNJSjs7QUREQTtFQUNJLHNDQUFBO0FDSUo7O0FEREE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0lKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNJSjs7QUREQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMC40KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9kYWwgLmNvbnRhaW5lcntcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5pbnB1dHtcbiAgICBtYXJnaW46MTBweCAwcHg7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYWRkLXNvbmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiAgNzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbi5hZGQtc29uZy1tb2RhbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uYWxsLXBsYXlsaXN0c3tcbiAgICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uYWxsLXBsYXlsaXN0cyAucGxheWxpc3Rze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYWxsLXBsYXlsaXN0cyAucGxheWxpc3RzIC5wbGF5bGlzdHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXI6OHB4IHNvbGlkIGJsYWNrO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggLTEwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggLTEwcHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cblxuLmFsbC1wbGF5bGlzdHMgLnBsYXlsaXN0cyAucGxheWxpc3QgaDF7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmFsbC1wbGF5bGlzdHMgLnBsYXlsaXN0cyAucGxheWxpc3Q6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogd2hlYXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWxsLXNvbmdze1xuICAgIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5hbGwtc29uZ3MgLnNvbmdze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uYWxsLXNvbmdzIC5zb25ncyAuc29uZ3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXI6NHB4IHNvbGlkIGJsYWNrO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggLTEwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggLTEwcHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cblxuLmFsbC1zb25ncyAuc29uZ3MgLnNvbmc6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc2VsZWN0e1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmRlbGV0ZS1zb25ne1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB0b3A6MDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU2LDAsMCwwLjIpO1xufVxuXG4uZGVsZXRlLXNvbmc6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NiwwLDAsMC45KTtcbn1cblxuLnVzZXItaW5mb3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVzZXItaW5mbyBidXR0b257XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG5oM3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBtYXJnaW4tcmlnaHQ6MjBweCA7XG59IiwiLm1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbCAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uYWRkLXNvbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG4uYWRkLXNvbmctbW9kYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uYWxsLXBsYXlsaXN0cyB7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5hbGwtcGxheWxpc3RzIC5wbGF5bGlzdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hbGwtcGxheWxpc3RzIC5wbGF5bGlzdHMgLnBsYXlsaXN0IHtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyOiA4cHggc29saWQgYmxhY2s7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDE5cHggLTEwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggMTlweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTlweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4uYWxsLXBsYXlsaXN0cyAucGxheWxpc3RzIC5wbGF5bGlzdCBoMSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmFsbC1wbGF5bGlzdHMgLnBsYXlsaXN0cyAucGxheWxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWxsLXNvbmdzIHtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLmFsbC1zb25ncyAuc29uZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hbGwtc29uZ3MgLnNvbmdzIC5zb25nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMTlweCAtMTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxOXB4IC0xMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5hbGwtc29uZ3MgLnNvbmdzIC5zb25nOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNlbGVjdCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGVsZXRlLXNvbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcbn1cblxuLmRlbGV0ZS1zb25nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7XG59XG5cbi51c2VyLWluZm8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlci1pbmZvIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDMge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-calls.service */ "./src/app/api-calls.service.ts");




let HomeComponent = class HomeComponent {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.showModal = false;
        this.song = {
            name: '',
            artist: '',
            genre: '',
        };
        this.allSongs = [];
        this.allPlaylists = [];
        this.username = '';
        this.genres = ['Pop', 'Rock', 'Metal', 'Classical'];
        let user = localStorage.getItem('user');
        if (!user) {
            this.router.navigate(['']);
        }
        else {
            this.username = JSON.parse(user).username;
            this.getSongs();
        }
    }
    newSong() {
        this.api.addSong(this.song).subscribe((resp) => {
            if (resp.success) {
                this.getSongs();
            }
        });
    }
    updatePage(songs) {
        this.showModal = false;
        this.allSongs = songs;
        this.allPlaylists = this.genres.map(genre => {
            return {
                genre,
                songs: this.allSongs.filter(song => song.genre == genre)
            };
        });
    }
    getSongs() {
        this.api.getSongs().subscribe((resp) => {
            if (resp.success) {
                this.updatePage(resp.songs);
            }
        });
    }
    deleteSong(songId) {
        this.api.deleteSong(songId).subscribe((resp) => {
            if (resp.success) {
                this.getSongs();
            }
        });
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['']);
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _api_calls_service__WEBPACK_IMPORTED_MODULE_3__["ApiCallsService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Baskervville&display=swap\");\nbutton:focus {\n  outline: none;\n}\ninput:focus {\n  outline: none;\n  border: 1px solid black;\n}\n.wrapper {\n  display: flex;\n  height: 100vh;\n  justify-content: space-around;\n  align-items: center;\n}\n.head-image {\n  width: 700px;\n}\n.form {\n  display: flex;\n  flex-direction: column;\n}\n.form input {\n  margin: 10px 0px;\n  padding: 10px;\n}\n.form .buttons {\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-around;\n}\n.form .buttons button {\n  background-color: black;\n  color: white;\n  font-size: 20px;\n  border: none;\n  width: 150px;\n  padding: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXkvRG9jdW1lbnRzL3dvcmsvcGVyc29uYWwveWFzaC1wcm9qZWN0L211c2ljL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGdGQUFBO0FBRVI7RUFDSSxhQUFBO0FDQUo7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0E7RUFFSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENBO0VBQ0ksWUFBQTtBQ0VKO0FEQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNHSjtBREFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDR0o7QURBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDR0o7QURBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFza2VydnZpbGxlJmRpc3BsYXk9c3dhcCcpO1xuXG5idXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5pbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xufVxuLndyYXBwZXJ7XG4gICAgLy8gZm9udC1mYW1pbHk6ICdCYXNrZXJ2dmlsbGUnLCBzZXJpZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkLWltYWdle1xuICAgIHdpZHRoOiA3MDBweDtcbn1cbi5mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvcm0gaW5wdXR7XG4gICAgbWFyZ2luOjEwcHggMHB4O1xuICAgIHBhZGRpbmc6MTBweDtcbn1cblxuLmZvcm0gLmJ1dHRvbnN7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5mb3JtIC5idXR0b25zIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgcGFkZGluZzoxMHB4IDEwcHg7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFza2VydnZpbGxlJmRpc3BsYXk9c3dhcFwiKTtcbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkLWltYWdlIHtcbiAgd2lkdGg6IDcwMHB4O1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtIGlucHV0IHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZvcm0gLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmZvcm0gLmJ1dHRvbnMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-calls.service */ "./src/app/api-calls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        let user = localStorage.getItem('user');
        if (user) {
            this.router.navigate(['home']);
        }
    }
    ngOnInit() {
    }
    login() {
        this.api.login(this.username, this.password).subscribe((resp) => {
            if (resp.success) {
                localStorage.setItem('user', JSON.stringify(resp.user));
                this.router.navigate(['home']);
            }
        });
    }
    signUp() {
        this.api.signUp(this.username, this.password).subscribe((resp) => {
            if (resp.success) {
                localStorage.setItem('user', JSON.stringify({
                    username: this.username,
                    password: this.password
                }));
                this.router.navigate(['home']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _api_calls_service__WEBPACK_IMPORTED_MODULE_2__["ApiCallsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kay/Documents/work/personal/yash-project/music/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map