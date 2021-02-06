(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-dish-add-dish-module"],{

/***/ "/OrQ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-dish/add-dish.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Add Your Dish</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n    <div style=\"margin-top: 10px;\">\n      <form #form=\"ngForm\" (ngSubmit)=\"addDish(form.value)\">\n        <ion-item>\n          <ion-label position=\"floating\">Cuisine</ion-label>\n          <ion-select name=\"cuisine\" ngModel required>\n            <ion-select-option value=\"Breakfast\">Breakfast</ion-select-option>\n            <ion-select-option value=\"Lunch\">Lunch</ion-select-option>\n            <ion-select-option value=\"Chinese\">Chinese</ion-select-option>\n            <ion-select-option value=\"Dessert\">Dessert</ion-select-option>\n            <ion-select-option value=\"Dinner\">Dinner</ion-select-option>\n            <ion-select-option value=\"Drinks\">Drinks</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Dish Name</ion-label>\n          <ion-input name=\"dish\" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Total Time</ion-label>\n          <ion-input name=\"time\" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Serves</ion-label>\n          <ion-input name=\"serves\" ngModel required></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Ingredients</ion-label>\n          <ion-textarea rows=\"2\" auto-grow name=\"ingredients\" ngModel required></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Directions</ion-label>\n          <ion-textarea rows=\"2\" auto-grow name=\"directions\" ngModel required></ion-textarea>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"floating\">Add a private notes</ion-label>\n          <ion-textarea rows=\"2\" auto-grow name=\"notes\" ngModel ></ion-textarea>\n        </ion-item>\n  \n        <ion-button [disabled]=\"form.invalid\" expand=\"block\">Add</ion-button>\n      </form>\n    </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "6ezt":
/*!*************************************************!*\
  !*** ./src/app/pages/add-dish/add-dish.page.ts ***!
  \*************************************************/
/*! exports provided: AddDishPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDishPage", function() { return AddDishPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_dish_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-dish.page.html */ "/OrQ");
/* harmony import */ var _add_dish_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-dish.page.scss */ "TRM3");
/* harmony import */ var _provider_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../provider/common.service */ "OBRK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let AddDishPage = class AddDishPage {
    constructor(router, commonService) {
        this.router = router;
        this.commonService = commonService;
    }
    ngOnInit() {
    }
    addDish(form) {
        this.commonService.toast('Your recipe added succesfully');
        this.router.navigate(['/tabs/tab3']);
    }
};
AddDishPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _provider_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
AddDishPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-add-dish',
        template: _raw_loader_add_dish_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_dish_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddDishPage);



/***/ }),

/***/ "PyVe":
/*!***************************************************!*\
  !*** ./src/app/pages/add-dish/add-dish.module.ts ***!
  \***************************************************/
/*! exports provided: AddDishPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDishPageModule", function() { return AddDishPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_dish_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-dish-routing.module */ "o1TX");
/* harmony import */ var _add_dish_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-dish.page */ "6ezt");







let AddDishPageModule = class AddDishPageModule {
};
AddDishPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_dish_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddDishPageRoutingModule"]
        ],
        declarations: [_add_dish_page__WEBPACK_IMPORTED_MODULE_6__["AddDishPage"]]
    })
], AddDishPageModule);



/***/ }),

/***/ "TRM3":
/*!***************************************************!*\
  !*** ./src/app/pages/add-dish/add-dish.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-label {\n  font-size: 18px;\n}\nion-content ion-item {\n  margin-left: -10px;\n  margin-top: 10px;\n}\nion-content ion-button {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtZGlzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0FBQVI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUlJO0VBQ0ksZ0JBQUE7QUFGUiIsImZpbGUiOiJhZGQtZGlzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "o1TX":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-dish/add-dish-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddDishPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDishPageRoutingModule", function() { return AddDishPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_dish_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-dish.page */ "6ezt");




const routes = [
    {
        path: '',
        component: _add_dish_page__WEBPACK_IMPORTED_MODULE_3__["AddDishPage"]
    }
];
let AddDishPageRoutingModule = class AddDishPageRoutingModule {
};
AddDishPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddDishPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-add-dish-add-dish-module.js.map