(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "+mX6":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "gnlj");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "/al4":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <ion-card style=\"width: 50%;margin: 0 auto; margin-top: 35px;\">\n    <div >\n      <img src=\"assets/img/cookbookLogo.png\" />\n    </div>  \n  </ion-card>\n\n  <ion-card style=\"margin-top: 40px;\">\n    <ion-card-header>\n      <ion-title>Register</ion-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form class=\"form\" #form=\"ngForm\" (ngSubmit)=\"tryRegister(form.value)\">\n\n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\n          <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n          <ion-input type=\"password\" name=\"password\" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\n          <ion-input type=\"password\" name=\"password2\" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-button class=\"submit-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!form.valid\">Register</ion-button>\n        <label class=\"error-message\">{{errorMessage}}</label>\n        <label class=\"success-message\">{{successMessage}}</label>\n      </form>\n      \n      <p style=\"margin-left: 10px;\">Already have an account? <a routerLink=\"/login\">Try to Log In.</a></p>\n    </ion-card-content>\n  </ion-card>    \n\n</ion-content>");

/***/ }),

/***/ "fQjJ":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-message {\n  color: red;\n}\n\nion-button {\n  margin: 30px 0px 20px 10px;\n}\n\nion-card ion-card-header {\n  text-align: center;\n  color: purple;\n}\n\nion-card ion-card-header ion-title {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FBQVI7O0FBRVE7RUFDSSxlQUFBO0FBQVoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbjogMzBweCAwcHggMjBweCAxMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogcHVycGxlO1xyXG5cclxuICAgICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "fhSy":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "+mX6");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "gnlj");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "gnlj":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "/al4");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "fQjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _provider_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../provider/authentication.service */ "8UXC");
/* harmony import */ var _provider_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../provider/common.service */ "OBRK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthenticationService } from 'src/app/provider/authentication.service';
let RegisterPage = class RegisterPage {
    constructor(authService, commonService, router, toastCtrl, platform) {
        this.authService = authService;
        this.commonService = commonService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.errorMessage = '';
        this.successMessage = '';
    }
    ngOnInit() {
        this.backButtonSubscription = this.platform.backButton.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.router.isActive('/register', true) && this.router.url === '/register') {
                this.router.navigate(['/login']);
            }
        }));
    }
    tryRegister(value) {
        this.authService.registerUser(value.email, value.password)
            .then(res => {
            console.log(res);
            this.errorMessage = '';
            this.commonService.toast('Your account has been created. Please log in.');
            // this.successMessage = 'Your account has been created. Please log in.';
            this.router.navigate(['/;login']);
        }, err => {
            console.log(err);
            this.errorMessage = err.message;
            this.successMessage = '';
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _provider_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _provider_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map