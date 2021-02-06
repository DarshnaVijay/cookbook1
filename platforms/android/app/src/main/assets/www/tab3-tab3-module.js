(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _provider_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../provider/common.service */ "OBRK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







let Tab3Page = class Tab3Page {
    constructor(platform, router, toastCtrl, commonService) {
        this.platform = platform;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.commonService = commonService;
        this.uid = localStorage.getItem('uid');
        this.email = localStorage.getItem('email');
    }
    ngOnInit() {
        this.backButtonSubscription = this.platform.backButton.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.router.isActive('/tabs/tab3', true) && this.router.url === '/tabs/tab3') {
                this.router.navigate(['/tabs/tab1']);
            }
        }));
    }
    addDish() {
        if (this.uid !== '' && this.uid != null) {
            this.router.navigate(['/add-dish']);
        }
        else {
            this.commonService.toast('Please Login First!!');
        }
    }
    goRecipe(name) {
        const navigate = {
            state: {
                dishName: name,
                pageName: 'Tab3'
            }
        };
        this.router.navigate(['/single-dish'], navigate);
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _provider_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div class=\"headerDiv\">\n    <div *ngIf=\"uid != '' && uid != null\"  class=\"headerDiv1\" routerLink=\"/login\">\n      <ion-icon name=\"power\" color=\"light\"></ion-icon>\n    </div>\n    <div style=\"padding: 10px;\"><span>Your Cuisines</span></div>\n  </div>\n  <ion-card class=\"contentCard\">\n    <div *ngIf=\"uid != '' && uid != null;else notUid\">\n      <div> Your Welcome</div>\n      <span>{{email}}</span>\n    </div>\n    <ng-template #notUid>\n      <div>\n        <div>To explore more, please</div>\n        <ion-button routerLink=\"/login\">Login</ion-button>\n      </div>\n    </ng-template>\n  </ion-card>\n\n  <ion-card class=\"contentCard2\">\n    <div>\n      <span>Add your best recipes with us</span>\n    </div>\n  </ion-card>\n\n  <ion-card class=\"contentCard2\">\n    <div class=\"myRecipeDiv\">\n      <span>Add Your favorites Cuisine </span>\n    </div>\n    <div class=\"myRecipeDiv1\">\n      <ion-select  class=\"ion-select\" multiple=\"false\" value=\"Lunch\"  required name=\"option1\" >\n        <ion-select-option value=\"Breakfast\">Breakfast</ion-select-option>\n        <ion-select-option value=\"Lunch\">Lunch</ion-select-option>\n        <ion-select-option value=\"Chinese\">Chinese</ion-select-option>\n        <ion-select-option value=\"Dessert\">Dessert</ion-select-option>\n        <ion-select-option value=\"Dinner\">Dinner</ion-select-option>\n        <ion-select-option value=\"Drinks\">Drinks</ion-select-option>\n      </ion-select>\n    </div>\n  </ion-card>  \n\n  <ion-card class=\"contentCard2\" *ngIf=\"uid != '' && uid != null;\">\n    <div class=\"myRecipeDiv\">\n      <span>My Recipes</span>\n    </div>\n    <div class=\"myRecipeDiv1\">\n      <ion-row (click)=\"goRecipe('CHOCOLATE SHAKE')\">\n        <ion-col size=\"3\">\n          <ion-thumbnail>\n            <img src=\"assets/img/dishes/choclate.jpg\" />\n          </ion-thumbnail>\n        </ion-col>\n        <ion-col size=\"9\">\n          <p>CHOCOLATE SHAKE</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-card>  \n\n  <ion-fab  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addDish()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  color: #000;\n}\nion-content .headerDiv {\n  background: purple;\n  height: 150px;\n  text-align: center;\n  font-size: 30px;\n  color: #ffffff;\n  font-family: auto;\n}\nion-content .headerDiv .headerDiv1 {\n  text-align: right;\n  width: 100%;\n  padding: 10px;\n}\nion-content .contentCard {\n  min-height: 80px;\n  padding: 15px;\n  /* width: 85%; */\n  text-align: center;\n  margin: -20px 30px 0px 30px;\n  font-size: 18px;\n}\nion-content .contentCard2 {\n  padding: 20px;\n  font-size: 18px;\n  margin: 35px 30px;\n}\nion-content .myRecipeDiv {\n  text-align: center;\n  font-weight: bold;\n  color: purple;\n  margin-bottom: 15px;\n}\nion-content .myRecipeDiv1 p {\n  color: black;\n  margin-top: 10px;\n}\nion-content .ion-select {\n  border: 1px solid #dada;\n  padding: 7px;\n  color: #000000;\n  margin-top: 10px;\n  --background: #f4f5f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUNRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNaO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUhSO0FBT1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFMWjtBQVNJO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFQUiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgLmhlYWRlckRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcHVycGxlO1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBhdXRvO1xyXG5cclxuICAgICAgICAuaGVhZGVyRGl2MSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnRDYXJkIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgLyogd2lkdGg6IDg1JTsgKi9cclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAtMjBweCAzMHB4IDBweCAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudENhcmQyIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW46IDM1cHggMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAubXlSZWNpcGVEaXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogcHVycGxlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm15UmVjaXBlRGl2MSB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmlvbi1zZWxlY3Qge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcclxuICAgIH1cclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map