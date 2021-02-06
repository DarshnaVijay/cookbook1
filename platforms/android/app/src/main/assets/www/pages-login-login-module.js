(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-button {\n  margin: 25px 0px 20px 10px;\n}\nion-content .error-message {\n  color: red;\n}\nion-content ion-card ion-card-header {\n  text-align: center;\n  color: purple;\n}\nion-content ion-card ion-card-header ion-title {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUk7RUFDSSwwQkFBQTtBQUxSO0FBUUk7RUFDSSxVQUFBO0FBTlI7QUFVUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQVJaO0FBVVk7RUFDSSxlQUFBO0FBUmhCIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMjVweCAwcHggMjBweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\n\n  <!--<div style=\"width: 100%;float: left;\">\n    <ion-button style=\"float: right;margin-right: 10px;\" fill=\"outline\" color=\"primary\" routerLink=\"/tabs/tab1\">Skip</ion-button>\n  </div>-->\n\n  <ion-card style=\"width: 50%;margin: 0 auto; margin-top: 35px;\">\n    <div >\n      <img src=\"assets/img/cookbookLogo.png\" />\n    </div>  \n  </ion-card>\n\n  <ion-card style=\"margin-top: 40px;\">\n    <ion-card-header>\n      <ion-title>Login</ion-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form class=\"form\" #form=\"ngForm\" (ngSubmit)=\"login(form.value)\">\n\n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Email</ion-label>\n          <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n          <ion-input type=\"password\" name=\"password\" ngModel required></ion-input>\n        </ion-item>\n    \n        <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!form.valid\">Login</ion-button>\n      </form>\n      <label class=\"error-message\">{{errorMessage}}</label>\n      <label class=\"success-message\">{{successMessage}}</label>\n      \n      <p style=\"margin-left: 10px;\">\n        No account yet? <a routerLink=\"/register\">Create an account.</a>\n      </p>\n    </ion-card-content>\n    \n\n  </ion-card>\n\n  \n  </ion-content>");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _provider_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../provider/common.service */ "OBRK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _provider_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../provider/authentication.service */ "8UXC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let LoginPage = class LoginPage {
    constructor(authService, coomonService, router, loadingController, platform) {
        this.authService = authService;
        this.coomonService = coomonService;
        this.router = router;
        this.loadingController = loadingController;
        this.platform = platform;
    }
    ngOnInit() {
        this.backButtonSubscription = this.platform.backButton.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.router.isActive('/login', true) && this.router.url === '/login') {
                navigator['app'].exitApp();
            }
        }));
        /*localStorage.clear();
        localStorage.removeItem('email');
        localStorage.removeItem('uid');*/
    }
    login(form) {
        this.coomonService.showLoader('');
        this.authService.loginUser(form.email, form.password)
            .then(res => {
            console.log(JSON.stringify(res));
            console.log('email: ' + JSON.stringify(res.user.email));
            console.log('uid : ' + JSON.stringify(res.user.uid));
            localStorage.setItem('uid', res.user.uid);
            localStorage.setItem('email', res.user.email);
            this.errorMessage = '';
            this.coomonService.hideLoader();
            this.router.navigate(['/tabs/tab1']);
        }, err => {
            this.coomonService.hideLoader();
            this.errorMessage = err.message;
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _provider_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _provider_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map