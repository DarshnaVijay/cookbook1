(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-notes-add-notes-module"],{

/***/ "8JNd":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-notes/add-notes.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Add Private Notes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div style=\"margin-top: 10px;\">\n    <form #form=\"ngForm\" (ngSubmit)=\"addNotes(form.value)\">\n      <ion-item>\n        <ion-label position=\"floating\">Topic</ion-label>\n        <ion-input name=\"topic\" ngModel required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Notes</ion-label>\n        <ion-textarea rows=\"2\" auto-grow name=\"notes\" ngModel required></ion-textarea>\n      </ion-item>\n\n      <ion-button [disabled]=\"form.invalid\" expand=\"block\">Add</ion-button>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "F0FC":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-notes/add-notes.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-label {\n  font-size: 18px;\n}\nion-content ion-item {\n  margin-left: -10px;\n  margin-top: 10px;\n}\nion-content ion-button {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtbm90ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQUFSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFJSTtFQUNJLGdCQUFBO0FBRlIiLCJmaWxlIjoiYWRkLW5vdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "Sn9c":
/*!*************************************************************!*\
  !*** ./src/app/pages/add-notes/add-notes-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddNotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotesPageRoutingModule", function() { return AddNotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-notes.page */ "qiX9");




const routes = [
    {
        path: '',
        component: _add_notes_page__WEBPACK_IMPORTED_MODULE_3__["AddNotesPage"]
    }
];
let AddNotesPageRoutingModule = class AddNotesPageRoutingModule {
};
AddNotesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddNotesPageRoutingModule);



/***/ }),

/***/ "mUzz":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-notes/add-notes.module.ts ***!
  \*****************************************************/
/*! exports provided: AddNotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotesPageModule", function() { return AddNotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _add_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-notes-routing.module */ "Sn9c");
/* harmony import */ var _add_notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-notes.page */ "qiX9");







let AddNotesPageModule = class AddNotesPageModule {
};
AddNotesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNotesPageRoutingModule"]
        ],
        declarations: [_add_notes_page__WEBPACK_IMPORTED_MODULE_6__["AddNotesPage"]]
    })
], AddNotesPageModule);



/***/ }),

/***/ "qiX9":
/*!***************************************************!*\
  !*** ./src/app/pages/add-notes/add-notes.page.ts ***!
  \***************************************************/
/*! exports provided: AddNotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotesPage", function() { return AddNotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_notes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-notes.page.html */ "8JNd");
/* harmony import */ var _add_notes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-notes.page.scss */ "F0FC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AddNotesPage = class AddNotesPage {
    constructor() { }
    ngOnInit() {
    }
    addNotes(form) {
    }
};
AddNotesPage.ctorParameters = () => [];
AddNotesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-notes',
        template: _raw_loader_add_notes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_notes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AddNotesPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-notes-add-notes-module.js.map