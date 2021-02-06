(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dishes-dishes-module"],{

/***/ "VWRI":
/*!***********************************************!*\
  !*** ./src/app/pages/dishes/dishes.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .outerBox {\n  border: 1px solid #ffffff;\n  height: 215px;\n}\nion-content .textDiv span {\n  font-size: 18px;\n  font-family: serif;\n}\nion-content .textCss {\n  font-size: 25px;\n  text-align: center;\n  color: #ffffff;\n  padding: 5px;\n  margin-top: 174px;\n  background: #dada;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkaXNoZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFFQSxhQUFBO0FBRFI7QUFJUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUZaO0FBS0k7RUFDSSxlQUFBO0VBR0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFMUiIsImZpbGUiOiJkaXNoZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLm91dGVyQm94e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgLy8gd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjE1cHg7XHJcbiAgICB9ICBcclxuICAgIC50ZXh0RGl2IHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHRDc3N7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMzUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTc0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RhZGE7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "WYKb":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dishes/dishes.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{cuisineName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let dish of dishesArray\" (click)=\"dishes(dish.id, dish.name)\">\n    <div class=\"outerBox\" style=\"background: url({{dish.image}}) 0 0/100% 100% no-repeat;\">\n      <div class=\"textCss\">{{dish.name}}</div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "Ywev":
/*!*********************************************!*\
  !*** ./src/app/pages/dishes/dishes.page.ts ***!
  \*********************************************/
/*! exports provided: DishesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishesPage", function() { return DishesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dishes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dishes.page.html */ "WYKb");
/* harmony import */ var _dishes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dishes.page.scss */ "VWRI");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let DishesPage = class DishesPage {
    constructor(route, router, platform) {
        this.route = route;
        this.router = router;
        this.platform = platform;
        this.dishesArray = [];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.cuisineId = this.router.getCurrentNavigation().extras.state.cuisineId;
                this.cuisineName = this.router.getCurrentNavigation().extras.state.cuisineName;
            }
        });
    }
    ngOnInit() {
        this.backButtonSubscription = this.platform.backButton.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.router.isActive('/dishes', true) && this.router.url === '/dishes') {
                this.router.navigate(['/tabs/tab1']);
            }
        }));
        if (this.cuisineName === 'Breakfast') {
            this.dishesArray = [
                { id: '1', name: 'POHA', image: 'assets/img/dishes/poha.jpg' },
                { id: '2', name: 'MOMOS', image: 'assets/img/dishes/momos.jpg' },
                { id: '3', name: 'MIXED VEGETABLE DAL', image: 'assets/img/dishes/daal1.jpg' },
            ];
        }
        else if (this.cuisineName === 'Lunch') {
            this.dishesArray = [
                { id: '1', name: 'MIXED VEGETABLE DAL', image: 'assets/img/dishes/daal1.jpg' },
                { id: '2', name: 'FRUIT RAYTA', image: 'assets/img/dishes/fruitrayta.jpg' },
                { id: '3', name: 'GARLIC TAWA NAAN', image: 'assets/img/dishes/tawaroti.jpg' },
            ];
        }
        else if (this.cuisineName === 'Chinese') {
            this.dishesArray = [
                { id: '1', name: 'CHOW MEIN', image: 'assets/img/dishes/img1.jpg' },
                { id: '2', name: 'MOMOS', image: 'assets/img/dishes/momos.jpg' },
                { id: '3', name: 'MANCHURIAN', image: 'assets/img/dishes/manchurian.jpg' }
            ];
        }
        else if (this.cuisineName === 'Dessert') {
            this.dishesArray = [
                { id: '1', name: 'CHOCOLATE SHAKE', image: 'assets/img/dishes/choclate.jpg' },
                { id: '2', name: 'FRUIT RAYTA', image: 'assets/img/dishes/fruitrayta.jpg' },
            ];
        }
        else if (this.cuisineName === 'Dinner') {
            this.dishesArray = [
                { id: '1', name: 'GARLIC TAWA NAAN', image: 'assets/img/dishes/tawaroti.jpg' },
                { id: '2', name: 'MIXED VEGETABLE DAL', image: 'assets/img/dishes/daal1.jpg' },
                { id: '3', name: 'FRUIT RAYTA', image: 'assets/img/dishes/fruitrayta.jpg' },
                { id: '4', name: 'CHOW MEIN', image: 'assets/img/dishes/img1.jpg' }
            ];
        }
        else if (this.cuisineName === 'Drinks') {
            this.dishesArray = [
                { id: '1', name: 'CHOCOLATE SHAKE', image: 'assets/img/dishes/choclate.jpg' },
                { id: '2', name: 'FRUIT RAYTA', image: 'assets/img/dishes/fruitrayta.jpg' },
            ];
        }
    }
    dishes(id, name) {
        const navigationExtras = {
            state: {
                dishId: id,
                dishName: name
            }
        };
        this.router.navigate(['/single-dish'], navigationExtras);
    }
};
DishesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
DishesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-dishes',
        template: _raw_loader_dishes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dishes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DishesPage);



/***/ }),

/***/ "c8Ai":
/*!***********************************************!*\
  !*** ./src/app/pages/dishes/dishes.module.ts ***!
  \***********************************************/
/*! exports provided: DishesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishesPageModule", function() { return DishesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dishes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dishes-routing.module */ "teN6");
/* harmony import */ var _dishes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dishes.page */ "Ywev");







let DishesPageModule = class DishesPageModule {
};
DishesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dishes_routing_module__WEBPACK_IMPORTED_MODULE_5__["DishesPageRoutingModule"]
        ],
        declarations: [_dishes_page__WEBPACK_IMPORTED_MODULE_6__["DishesPage"]]
    })
], DishesPageModule);



/***/ }),

/***/ "teN6":
/*!*******************************************************!*\
  !*** ./src/app/pages/dishes/dishes-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DishesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishesPageRoutingModule", function() { return DishesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dishes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dishes.page */ "Ywev");




const routes = [
    {
        path: '',
        component: _dishes_page__WEBPACK_IMPORTED_MODULE_3__["DishesPage"]
    }
];
let DishesPageRoutingModule = class DishesPageRoutingModule {
};
DishesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DishesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-dishes-dishes-module.js.map