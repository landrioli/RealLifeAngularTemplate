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

/***/ "./node_modules/raw-loader/index.js!./src/app/home/welcome.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/welcome.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    {{pageTitle}}\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"text-center\">\r\n        <img src=\"./assets/images/logo.jpg\"\r\n             class=\"img-responsive center-block\"\r\n             style=\"max-height:300px;padding-bottom:50px\" />\r\n      </div>\r\n\r\n      <div class=\"text-center\">Developed by:</div>\r\n      <div class=\"text-center\">\r\n        <h3>Deborah Kurata</h3>\r\n      </div>\r\n\r\n      <div class=\"text-center\">@deborahkurata</div>\r\n      <div class=\"text-center\">\r\n        <a href=\"http://www.bit.ly/DeborahKsBlog\">www.bit.ly/DeborahKsBlog</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{pageTitle}}</p>\n<div class='card-body'>\n    <div class='row'>\n      <div class='col-md-8'>\n        <div class='row'>\n          <div class='col-md-4'>Name:</div>\n          <div class='col-md-8'>{{product.productName}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Code:</div>\n          <div class='col-md-8'>{{product.productCode | lowercase | convertToSpaces: '-'}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Description:</div>\n          <div class='col-md-8'>{{product.description}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Availability:</div>\n          <div class='col-md-8'>{{product.releaseDate}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>Price:</div>\n          <div class='col-md-8'>{{product.price|currency:'USD':'symbol'}}</div>\n        </div>\n        <div class='row'>\n          <div class='col-md-4'>5 Star Rating:</div>\n          <div class='col-md-8'>\n            <pm-star [rating]='product.starRating'>\n            </pm-star>\n          </div>\n        </div>\n      </div>\n\n      <div class='col-md-4'>\n        <img class='center-block img-responsive'\n             [style.width.px]='200'\n             [style.margin.px]='2'\n             [src]='product.imageUrl'\n             [title]='product.productName'>\n      </div>\n    </div>\n  </div>\n\n  <div class='card-footer'>\n    <button class='btn btn-outline-secondary'\n            (click)='onBack()'\n            style='width:80px'>\n      <i class='fa fa-chevron-left'></i> Back\n    </button>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product/product-list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product/product-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='panel panel-primary'>\r\n  <div class='panel-heading'>\r\n    {{pageTitle}}\r\n  </div>\r\n  <div class='panel-body'>\r\n    <div class='row'>\r\n      <div class='col-md-2'>Filter by:</div>\r\n      <div class='col-md-4'>\r\n        <input type='text'\r\n               [(ngModel)]='listFilter' />\r\n      </div>\r\n    </div>\r\n    <div class='row'>\r\n      <div class='col-md-6'>\r\n        <h4>Filtered by: {{listFilter}}</h4>\r\n      </div>\r\n    </div>\r\n    <div class='table-responsive'>\r\n      <table class='table'\r\n             *ngIf='products && products.length'>\r\n        <thead>\r\n          <tr>\r\n            <th>\r\n              <button class='btn btn-primary'\r\n                      (click)='toggleImage()'>\r\n                {{showImage ? 'Hide' : 'Show'}} Image\r\n              </button>\r\n            </th>\r\n            <th>Product</th>\r\n            <th>Code</th>\r\n            <th>Available</th>\r\n            <th>Price</th>\r\n            <th>5 Star Rating</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor='let product of filteredProducts'>\r\n            <td>\r\n              <img *ngIf='showImage'\r\n                   [src]='product.imageUrl'\r\n                   [title]='product.productName'\r\n                   [style.width.px]='imageWidth'\r\n                   [style.margin.px]='imageMargin'>\r\n            </td>\r\n            <td>\r\n              <a [routerLink]=\"['/product', product.productId]\">\r\n                {{ product.productName }}\r\n              </a>\r\n            </td>\r\n            <td>{{ product.productCode | lowercase | convertToSpaces: '-':'LA' }}</td>\r\n            <td>{{ product.releaseDate }}</td>\r\n            <td>{{ product.price | currency:'BRL':'symbol':'1.2-2' }}</td>\r\n            <td>\r\n              <pm-star [rating]='product.starRating'\r\n                       (ratingClicked)='onRatingClicked($event)'></pm-star>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/star.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/star.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\"\r\n     [style.width.px]=\"starWidth\"\r\n     [title]=\"rating\"\r\n     (click)=\"onClick()\">\r\n  <div style=\"width: 75px\">\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n    <span class=\"fa fa-star\"></span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n  font-size: large;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4iXX0= */"

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
        this.title = 'Angular: Getting Started';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pm-root',
        template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/product']">Product List</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_home_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var src_app_product_product_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/product/product-guard.service */ "./src/app/product/product-guard.service.ts");
/* harmony import */ var src_app_product_product_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/product/product.module */ "./src/app/product/product.module.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            src_app_home_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                { path: 'welcome', component: src_app_home_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"] },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            src_app_product_product_module__WEBPACK_IMPORTED_MODULE_9__["ProductModule"]
        ],
        providers: [src_app_product_product_guard_service__WEBPACK_IMPORTED_MODULE_8__["ProductGuardService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() {
        this.pageTitle = 'Welcome';
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/welcome.component.html")
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/app/product/product-detail.component.css":
/*!******************************************************!*\
  !*** ./src/app/product/product-detail.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product-detail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/product/product-detail.component.ts ***!
  \*****************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProductDetailComponent = class ProductDetailComponent {
    constructor(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Produtc Detail';
    }
    ngOnInit() {
        //the + sign convert string to a numeric id
        let id = +this._route.snapshot.paramMap.get('id');
        console.log(id);
        this.pageTitle += ' ' + id;
        console.log(this.pageTitle);
        this.product = {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2019",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "assets/images/saw.png"
        };
    }
    onBack() {
        this._router.navigate(['/product']);
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pm-product-detail',
        template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product-detail.component.html"),
        styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product/product-detail.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/product/product-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/product/product-guard.service.ts ***!
  \**************************************************/
/*! exports provided: ProductGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGuardService", function() { return ProductGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ProductGuardService = class ProductGuardService {
    constructor(_router) {
        this._router = _router;
    }
    canActivate(next, state) {
        const id = +next.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            this._router.navigate(['/product']);
            return false;
        }
        return true;
    }
};
ProductGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductGuardService);



/***/ }),

/***/ "./src/app/product/product-list.component.css":
/*!****************************************************!*\
  !*** ./src/app/product/product-list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead{\r\n    color:blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aGVhZHtcclxuICAgIGNvbG9yOmJsdWU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product/product-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/product/product-list.component.ts ***!
  \***************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/product/product.service */ "./src/app/product/product.service.ts");



let ProductListComponent = class ProductListComponent {
    constructor(_productService) {
        this._productService = _productService;
        this.pageTitle = 'Product List!';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this._listFilter = 'default';
        this.products = [];
    }
    get listFilter() {
        return this._listFilter;
    }
    set listFilter(filter) {
        this._listFilter = filter;
        this.filteredProducts = this._listFilter ? this.perfomFilter(this.listFilter) : this.products;
    }
    onRatingClicked(message) {
        this.pageTitle = 'Product List ' + message;
    }
    perfomFilter(filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage() {
        this.showImage = !this.showImage;
    }
    ngOnInit() {
        console.log('InitCalled');
        this._productService.getProducts().subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        }, error => this.errorMessage = error);
    }
};
ProductListComponent.ctorParameters = () => [
    { type: src_app_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/product/product-list.component.html"),
        styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product/product-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
], ProductListComponent);



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/convert-to-spaces-pipe */ "./src/app/shared/convert-to-spaces-pipe.ts");
/* harmony import */ var src_app_product_product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/product/product-detail.component */ "./src/app/product/product-detail.component.ts");
/* harmony import */ var src_app_product_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/product/product-list.component */ "./src/app/product/product-list.component.ts");
/* harmony import */ var src_app_product_product_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/product/product-guard.service */ "./src/app/product/product-guard.service.ts");
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/product/product.service */ "./src/app/product/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");









let ProductModule = class ProductModule {
};
ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_product_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
            src_app_product_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"],
            src_app_shared_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_2__["ConvertToEspacesPipe"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild([
                { path: 'product', component: src_app_product_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"] },
                { path: 'product/:id', canActivate: [src_app_product_product_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProductGuardService"]], component: src_app_product_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"] }
            ]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ],
        providers: [src_app_product_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], src_app_product_product_guard_service__WEBPACK_IMPORTED_MODULE_5__["ProductGuardService"]]
    })
], ProductModule);



/***/ }),

/***/ "./src/app/product/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/product/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProductService = class ProductService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this._productUrl = './api/products/products.json';
    }
    getProducts() {
        return this._httpClient.get(this._productUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductService);



/***/ }),

/***/ "./src/app/shared/convert-to-spaces-pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/convert-to-spaces-pipe.ts ***!
  \**************************************************/
/*! exports provided: ConvertToEspacesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToEspacesPipe", function() { return ConvertToEspacesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConvertToEspacesPipe = class ConvertToEspacesPipe {
    transform(value, character, prefix) {
        return prefix + value.replace(character, ' ');
    }
};
ConvertToEspacesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'convertToSpaces'
    })
], ConvertToEspacesPipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/star.component */ "./src/app/shared/star.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [
            src_app_shared_star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"]
        ],
        exports: [
            src_app_shared_star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]
    })
], SharedModule);

;


/***/ }),

/***/ "./src/app/shared/star.component.css":
/*!*******************************************!*\
  !*** ./src/app/shared/star.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n  overflow: hidden;\r\n}\r\ndiv {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5kaXYge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/star.component.ts":
/*!******************************************!*\
  !*** ./src/app/shared/star.component.ts ***!
  \******************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StarComponent = class StarComponent {
    constructor() {
        this.rating = 4;
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges() {
        this.startWidth = this.rating * 75 / 5;
    }
    onClick() {
        this.ratingClicked.emit('This rating ' + this.rating);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], StarComponent.prototype, "rating", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], StarComponent.prototype, "ratingClicked", void 0);
StarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pm-star',
        template: __webpack_require__(/*! raw-loader!./star.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/star.component.html"),
        styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/shared/star.component.css")]
    })
], StarComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Workspace\AngularBasicStartTemplate\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map