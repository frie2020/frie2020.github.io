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
/* harmony default export */ __webpack_exports__["default"] = ("<grille-jeu></grille-jeu>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n\n    <div class=\"row\">\n        <div class=\"panel-group\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" href=\"#collapse1\">MENU</a>\n                </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse\">\n                <div class=\"panel-body\"><a routerLink=\"\" (click)=\"playGame()\">Play</a></div>\n                <div class=\"panel-body\"><a routerLink=\"\" (click)=\"playAgain()\">Play again</a></div>\n                <div class=\"panel-body\"><a routerLink=\"\" (click)=\"restart()\">Restart</a></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"form-group\" *ngFor=\"let player of players; let i = index\" [ngStyle]=\"{'display': player.visible}\">\n            <div [ngClass]=\"{'player1' : i === 0,\n                    'player2' : i === 1}\">\n                    <label [for]=\"player.name\">{{player.name}}</label>\n            </div>\n            <input [(ngModel)] =\"player.id\" [name]=\"player.name\" type=\"text\" class=\"form-control\" (change)=\"log()\">\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"overlay\">\n        <div class=\"modal-dialog modal-dialog-centered\">\n            <div class=\"modal-content\" role=\"document\">\n                <div class=\"modal-body text-center\">\n                    <img src=\"../../assets/img/hey-ho-lets-go.png\" width=\"30%\" class=\"mx-auto d-block\">\n                </div>\n            </div>\n        </div>\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grille-jeu/grille-jeu.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grille-jeu/grille-jeu.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"jumbotron\">\n    </div>\n    <div class=\"panel panel-primary\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"contactZone\">\n                    <contact-form (onclicked)=\"onclicked($event)\" (onclickedplayagain)=\"onclickedplayagain($event)\" #contact></contact-form>\n                </div> \n            </div>\n            <div class=\"col-md-6\">\n                <h2>Morpion \n                    <button class=\"btn btn-primary btn-circle btn-lg glyphicon\" \n                    [ngClass]=\"{'glyphicon-volume-up': soundtoggle === false, \n                    'glyphicon-volume-off' :  soundtoggle === true}\"\n                    (click)=\"toggleSound();contact.stopSound(soundtoggle)\"></button>\n                </h2>\n                <hr>\n                <h4 class=\"text-center\">{{playerText}}</h4>\n                <div class=\"gameZone\" [ngClass]=\"{'invisible' : gameOn === false}\">\n                    <div class=\"box\" *ngFor=\"let case of cases; let i = index\" \n                    [ngClass]=\"{'croix': case.value === 'C', \n                    'croixNext' : case.value === '',\n                    'rond' : case.value === 'R' }\"\n                    (click) = \"playerClick(i);contact.setVisible(tour)\">\n                    <h1 class=\"glyphicon glyphicon-remove\" [ngStyle]=\"{'display': case.visiblecroix}\"></h1>\n                    <h1 class=\"glyphicon glyphicon-unchecked\" [ngStyle]=\"{'display': case.visiblerond}\"></h1>\n                </div>\n            </div>\n            <hr>\n            </div>\n        </div>\n    </div>\n</div>");

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

/***/ "./src/Core/case.ts":
/*!**************************!*\
  !*** ./src/Core/case.ts ***!
  \**************************/
/*! exports provided: Case */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Case", function() { return Case; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Case {
    constructor() {
    }
    setValue(val) {
        this.value = val;
    }
    setcroixVisible(visiblecroix) {
        this.visiblecroix = visiblecroix;
    }
    setrondVisible(visiblerond) {
        this.visiblerond = visiblerond;
    }
}


/***/ }),

/***/ "./src/Core/game-service.ts":
/*!**********************************!*\
  !*** ./src/Core/game-service.ts ***!
  \**********************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GameService {
    constructor() {
        this.tour = 0;
    }
    changementDeJoueur() {
        if (this.tour === 0) {
            this.tour = 1;
            return 1;
        }
        else {
            this.tour = 0;
            return 0;
        }
    }
}


/***/ }),

/***/ "./src/Core/grille.ts":
/*!****************************!*\
  !*** ./src/Core/grille.ts ***!
  \****************************/
/*! exports provided: Grille */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grille", function() { return Grille; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./case */ "./src/Core/case.ts");


class Grille {
    constructor() {
        this.cases = [];
        this.initGame();
    }
    initGame() {
        this.nbCasesVides = 9;
        // initialisation des cases
        this.cases = [];
        this.tour = 0;
        for (let i = 0; i < this.nbCasesVides; i++) {
            const oCase = new _case__WEBPACK_IMPORTED_MODULE_1__["Case"]();
            oCase.setValue('');
            oCase.setcroixVisible('none');
            oCase.setrondVisible('none');
            this.cases.push(oCase);
        }
    }
}


/***/ }),

/***/ "./src/Core/player.ts":
/*!****************************!*\
  !*** ./src/Core/player.ts ***!
  \****************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Player {
    constructor(name, id, visible) {
        this.name = name;
        this.id = id;
        this.visible = visible;
    }
    setVisible() {
        this.visible = 'block';
    }
    setNoneVisible() {
        this.visible = 'none';
    }
    getVisible() {
        return this.visible;
    }
}


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
        this.title = 'Morpion';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Core_grille__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Core/grille */ "./src/Core/grille.ts");
/* harmony import */ var _Core_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Core/game-service */ "./src/Core/game-service.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _grille_jeu_grille_jeu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grille-jeu/grille-jeu.component */ "./src/app/grille-jeu/grille-jeu.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__["ContactFormComponent"],
            _grille_jeu_grille_jeu_component__WEBPACK_IMPORTED_MODULE_8__["GrilleJeuComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [_Core_grille__WEBPACK_IMPORTED_MODULE_5__["Grille"], _Core_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__["ContactFormComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\n  color: white;\n  padding-left: 10px;\n}\n\n.player1 {\n  background-color: #dc685a;\n}\n\n.player2 {\n  background-color: #b6d173;\n}\n\n.play {\n  width: 50%;\n  height: 50%;\n  background-image: url('play.png');\n}\n\n.btn {\n  background-color: DodgerBlue;\n  border: none;\n  color: white;\n  padding: 12px 16px;\n  font-size: 16px;\n  cursor: pointer;\n  border-radius: 15px;\n}\n\n.btn:hover {\n  background-color: RoyalBlue;\n}\n\n.modal-dialog {\n  transform: translate(0, -50%);\n  top: 50%;\n  margin: 0 auto;\n}\n\n.no-border {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1mb3JtL0Q6XFxGT1JNQVRJT05cXGFuZ3VsYXJcXG1vcnBpb24vc3JjXFxhcHBcXGNvbnRhY3QtZm9ybVxcY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucGxheWVyMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM2ODVhO1xyXG59XHJcblxyXG4ucGxheWVyMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkMTczO1xyXG59XHJcblxyXG4ucGxheSB7XHJcbiAgICB3aWR0aCA6IDUwJTtcclxuICAgIGhlaWdodCA6IDUwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvcGxheS5wbmdcIik7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTsgXHJcbiAgICBib3JkZXI6IG5vbmU7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDsgXHJcbiAgICBmb250LXNpemU6IDE2cHg7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuICBcclxuLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSb3lhbEJsdWU7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubm8tYm9yZGVye1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuIiwibGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnBsYXllcjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM2ODVhO1xufVxuXG4ucGxheWVyMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNmQxNzM7XG59XG5cbi5wbGF5IHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvcGxheS5wbmdcIik7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBEb2RnZXJCbHVlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IFJveWFsQmx1ZTtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5uby1ib3JkZXIge1xuICBib3JkZXI6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Core_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core/player */ "./src/Core/player.ts");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_3__);


//import {GrilleJeuComponent} from '../../app/grille-jeu/grille-jeu.component';


let ContactFormComponent = class ContactFormComponent {
    //constructor(private grilleJeuComponent:GrilleJeuComponent) { 
    constructor() {
        this.players = [];
        this.onclicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onclickedplayagain = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        const player1 = new _Core_player__WEBPACK_IMPORTED_MODULE_2__["Player"]("Ready player one", "player1", "block");
        this.players.push(player1);
        const player2 = new _Core_player__WEBPACK_IMPORTED_MODULE_2__["Player"]("Ready player two", "player2", "block");
        this.players.push(player2);
        this.sound1 = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
            src: ['assets/sounds/counter.mp3'],
            onplay: function () {
            },
            onend: function () {
            }
        });
        this.sound2 = new howler__WEBPACK_IMPORTED_MODULE_3__["Howl"]({
            src: ['assets/sounds/Xenon2.mp3'],
            onplay: function () {
            },
            onend: function () {
            }
        });
        this.playDisable = false;
    }
    log() {
    }
    playGame() {
        this.sound1.stop();
        this.sound2.stop();
        this.sound1.play();
        setTimeout(() => { this.sound2.play(); }, 2000);
        $("#overlay").modal('show');
        setTimeout(function () {
            $('#overlay').modal('hide');
        }, 2000);
        this.onclicked.emit(true);
        this.players[0].setVisible();
        this.players[1].setNoneVisible();
        this.playDisable = true;
    }
    playAgain() {
        this.onclickedplayagain.emit(true);
        this.players[0].setVisible();
        this.players[1].setNoneVisible();
    }
    restart() {
        this.onclickedplayagain.emit(true);
        this.players[0].setVisible();
        this.players[1].setVisible();
    }
    stopSound(toggle) {
        this.sound1.mute(toggle);
        this.sound2.mute(toggle);
        console.log(toggle);
    }
    setVisible(tour) {
        if (tour == 0) {
            this.players[0].setVisible();
            this.players[1].setNoneVisible();
        }
        else {
            this.players[1].setVisible();
            this.players[0].setNoneVisible();
        }
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactFormComponent.prototype, "onclicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ContactFormComponent.prototype, "onclickedplayagain", void 0);
ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-form.component.scss */ "./src/app/contact-form/contact-form.component.scss")).default]
    })
], ContactFormComponent);



/***/ }),

/***/ "./src/app/grille-jeu/grille-jeu.component.scss":
/*!******************************************************!*\
  !*** ./src/app/grille-jeu/grille-jeu.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron {\n  height: 150px;\n  padding-bottom: 25px;\n  background-image: url('tic-tac-toe-game.png');\n}\n\n.jumbotron h1, h2 {\n  color: white;\n}\n\n.panel-primary {\n  border-color: transparent;\n}\n\n.panel-primary > .panel-heading {\n  border-color: transparent;\n}\n\n.panel-heading {\n  background-color: #dc685a;\n}\n\n.contactZone {\n  width: 200px;\n  margin: 0 auto;\n  color: #fff;\n}\n\n.gameZone {\n  width: 300px;\n  height: 300px;\n  margin: 0 auto;\n  color: #fff;\n  display: grid;\n  grid-template: repeat(3, 1fr)/repeat(3, 1fr);\n}\n\nspan {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.box {\n  margin: 3px;\n  border-radius: 15px;\n  font-family: Helvetica;\n  font-weight: bold;\n  font-size: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Font Awesome 5 Free\";\n  background-color: #D3D3D3;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.box.croixNext:hover.croixNext::after {\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.box.croix {\n  background-color: #dc685a;\n}\n\n.box.croix.croix::after {\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.box.rond {\n  background-color: #b6d173;\n}\n\n.box.rond.rond:hover {\n  background-color: #b6d173;\n}\n\n.box.rond.rond::after {\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.text-center {\n  text-align: center;\n}\n\nhr {\n  margin: 20px auto 20px auto;\n  width: 300px;\n  border-color: black;\n}\n\nh2 {\n  text-align: center;\n  margin-top: 20px;\n  color: black;\n}\n\n.glyphicon.glyphicon-volume-up {\n  font-size: 25px;\n}\n\n.glyphicon.glyphicon-volume-off {\n  font-size: 25px;\n}\n\n.btn-circle {\n  width: 4rem;\n  height: 4rem;\n  text-align: center;\n  padding: 0.375rem 0;\n  font-size: 0.75rem;\n  line-height: 1.428571429;\n  border-radius: 0.938rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpbGxlLWpldS9EOlxcRk9STUFUSU9OXFxhbmd1bGFyXFxtb3JwaW9uL3NyY1xcYXBwXFxncmlsbGUtamV1XFxncmlsbGUtamV1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ncmlsbGUtamV1L2dyaWxsZS1qZXUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSw2Q0FBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ0FKOztBRElRO0VBQ0ksMkNBQUE7QUNGWjs7QURNSTtFQUNJLHlCQUFBO0FDSlI7O0FETVE7RUFDSSwyQ0FBQTtBQ0paOztBRFNJO0VBQ0kseUJBQUE7QUNQUjs7QURTUTtFQUNJLHlCQUFBO0FDUFo7O0FEU1E7RUFDRSwyQ0FBQTtBQ1BWOztBRFlBO0VBQ0ksa0JBQUE7QUNUSjs7QURZQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVEo7O0FEWUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1RKOztBRFlBO0VBQ0ksZUFBQTtBQ1RKOztBRFlBO0VBQ0ksZUFBQTtBQ1RKOztBRFlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9ncmlsbGUtamV1L2dyaWxsZS1qZXUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvdGljLXRhYy10b2UtZ2FtZS5wbmdcIik7XHJcbiAgICAvL2JhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24gaDEsaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFuZWwtcHJpbWFyeSB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFuZWwtcHJpbWFyeT4ucGFuZWwtaGVhZGluZyB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzY4NWE7XHJcbn1cclxuXHJcbi5jb250YWN0Wm9uZSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZ2FtZVpvbmUge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYm94IHtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG5cclxuICAgICYuY3JvaXhOZXh0OmhvdmVyIHtcclxuXHJcbiAgICAgICAgJi5jcm9peE5leHQ6OmFmdGVyIHtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmNyb2l4IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGM2ODVhO1xyXG4gICAgICAgXHJcbiAgICAgICAgJi5jcm9peDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgJi5yb25kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkMTczO1xyXG4gICAgXHJcbiAgICAgICAgJi5yb25kOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I2ZDE3MztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5yb25kOjphZnRlciB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZ2x5cGhpY29uLmdseXBoaWNvbi12b2x1bWUtdXAge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uZ2x5cGhpY29uLmdseXBoaWNvbi12b2x1bWUtb2ZmIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmJ0bi1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDRyZW07XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC45MzhyZW07XHJcbn0gICIsIi5qdW1ib3Ryb24ge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy90aWMtdGFjLXRvZS1nYW1lLnBuZ1wiKTtcbn1cblxuLmp1bWJvdHJvbiBoMSwgaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wYW5lbC1wcmltYXJ5IHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhbmVsLXByaW1hcnkgPiAucGFuZWwtaGVhZGluZyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wYW5lbC1oZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjNjg1YTtcbn1cblxuLmNvbnRhY3Rab25lIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5nYW1lWm9uZSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgMWZyKS9yZXBlYXQoMywgMWZyKTtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJveCB7XG4gIG1hcmdpbjogM3B4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDNEM0QzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cbi5ib3guY3JvaXhOZXh0OmhvdmVyLmNyb2l4TmV4dDo6YWZ0ZXIge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmJveC5jcm9peCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzY4NWE7XG59XG4uYm94LmNyb2l4LmNyb2l4OjphZnRlciB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uYm94LnJvbmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkMTczO1xufVxuLmJveC5yb25kLnJvbmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkMTczO1xufVxuLmJveC5yb25kLnJvbmQ6OmFmdGVyIHtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ociB7XG4gIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ2x5cGhpY29uLmdseXBoaWNvbi12b2x1bWUtdXAge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5nbHlwaGljb24uZ2x5cGhpY29uLXZvbHVtZS1vZmYge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5idG4tY2lyY2xlIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcbiAgYm9yZGVyLXJhZGl1czogMC45MzhyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/grille-jeu/grille-jeu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/grille-jeu/grille-jeu.component.ts ***!
  \****************************************************/
/*! exports provided: GrilleJeuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrilleJeuComponent", function() { return GrilleJeuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Core_grille__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Core/grille */ "./src/Core/grille.ts");
/* harmony import */ var _Core_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Core/game-service */ "./src/Core/game-service.ts");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");






let GrilleJeuComponent = class GrilleJeuComponent {
    constructor(grille, gameService, contact) {
        this.grille = grille;
        this.gameService = gameService;
        this.contact = contact;
        this.cases = [];
        this.tour = gameService.tour;
        this.gameOn = false;
        this.cases = grille.cases;
        this.sound = new howler__WEBPACK_IMPORTED_MODULE_4__["Howl"]({
            src: ['assets/sounds/click.mp3'],
            onplay: function () {
                console.log('PLAYING ... ');
            }
        });
        this.soundtoggle = false;
        this.playerText = '';
    }
    onclicked(agreed) {
        this.playGame();
    }
    onclickedplayagain(agreed) {
        this.playAgain();
    }
    playerClick(i) {
        this.sound.stop();
        if (this.grille.tour === 0) {
            this.play(i);
        }
        this.sound.play();
    }
    play(i) {
        if (this.grille.cases[i].value === '') {
            if (this.tour === 0) {
                this.grille.cases[i].setValue('C');
                this.grille.cases[i].setcroixVisible('block');
                this.grille.cases[i].setrondVisible('none');
            }
            else {
                this.grille.cases[i].setValue('R');
                this.grille.cases[i].setcroixVisible('none');
                this.grille.cases[i].setrondVisible('block');
            }
            this.tour = this.gameService.changementDeJoueur();
            this.changePlayerText();
        }
    }
    playGame() {
        this.grille.initGame();
        this.cases = this.grille.cases;
        this.tour = 0;
        this.gameOn = true;
        this.changePlayerText();
    }
    playAgain() {
        this.grille.initGame();
        this.cases = this.grille.cases;
        this.gameService.tour = 0;
        this.tour = 0;
        this.changePlayerText();
    }
    getVisibility(i, s) {
        console.log(' case ' + i + ' s' + s + ' val ' + this.grille.cases[i].value + 'tour' + this.tour);
        switch (s) {
            case '1':
                if (this.tour === 0) {
                    if (this.grille.cases[i].value === 'C' || this.grille.cases[i].value === '') {
                        return 'none';
                    }
                    else {
                        return 'block';
                    }
                }
                return 'none';
                break;
            case '2':
                if (this.tour === 1) {
                    if (this.grille.cases[i].value === 'R') {
                        return 'block';
                    }
                    else {
                        return 'none';
                    }
                }
                return 'none';
                break;
            default:
                return 'none';
                break;
        }
    }
    toggleSound() {
        if (this.soundtoggle === false) {
            this.soundtoggle = true;
        }
        else {
            this.soundtoggle = false;
        }
    }
    changePlayerText() {
        if (this.tour === 0) {
            this.playerText = 'Ready player one plays';
        }
        else {
            this.playerText = 'Ready player two plays';
        }
    }
    ngOnInit() {
    }
};
GrilleJeuComponent.ctorParameters = () => [
    { type: _Core_grille__WEBPACK_IMPORTED_MODULE_2__["Grille"] },
    { type: _Core_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
    { type: _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_5__["ContactFormComponent"] }
];
GrilleJeuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'grille-jeu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grille-jeu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grille-jeu/grille-jeu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grille-jeu.component.scss */ "./src/app/grille-jeu/grille-jeu.component.scss")).default]
    })
], GrilleJeuComponent);



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

module.exports = __webpack_require__(/*! D:\FORMATION\angular\morpion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map