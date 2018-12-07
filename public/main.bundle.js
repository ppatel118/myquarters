webpackJsonp([1,4],{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http, flashMessage) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.favorites = [];
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('favorites', JSON.stringify(user['favorites']));
        this.authToken = token;
        this.user = user;
        this.favorites = user['favorites'];
    };
    AuthService.prototype.saveFav = function (img) {
        var notFav = this.user.favorites.indexOf(img);
        if (notFav == -1) {
            this.user.favorites.push(img);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            return this.http.put('users/favorite', this.user, { headers: headers })
                .map(function (res) { return res.json(); });
        }
        else {
            this.flashMessage.show('This image is already a favorite.', { cssClass: 'alert-danger' });
        }
    };
    AuthService.prototype.getFav = function () {
        return this.user.favorites;
    };
    AuthService.prototype.deleteFav = function (img) {
        var notFav = this.user.favorites.indexOf(img);
        if (notFav > -1) {
            this.user.favorites.splice(notFav, 1);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            return this.http.put('users/favorite', this.user, { headers: headers })
                .map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.savePost = function (post) {
        var savePost = this.user.posts.indexOf(post);
        this.user.posts.push(post);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('users/post', this.user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPost = function () {
        return this.user.posts;
    };
    AuthService.prototype.deletePost = function (post) {
        var deletePost = this.user.posts.indexOf(post);
        this.user.posts.splice(deletePost, 1);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('users/post', this.user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.saveProfilePic = function (profilePic) {
        var saveProfilePic = this.user.profilePic;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('users/profilePic', this.user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfilePic = function () {
        return this.user.profilePic;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/auth.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/validate.service.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 394;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/main.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(705),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_bed_bed_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_kitchen_kitchen_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_living_living_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_outdoor_outdoor_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_decor_decor_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_lighting_lighting_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_favorites_favorites_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_validate_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__ = __webpack_require__(527);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'bed', component: __WEBPACK_IMPORTED_MODULE_14__components_bed_bed_component__["a" /* BedComponent */] },
    { path: 'kitchen', component: __WEBPACK_IMPORTED_MODULE_15__components_kitchen_kitchen_component__["a" /* KitchenComponent */] },
    { path: 'living', component: __WEBPACK_IMPORTED_MODULE_16__components_living_living_component__["a" /* LivingComponent */] },
    { path: 'outdoor', component: __WEBPACK_IMPORTED_MODULE_17__components_outdoor_outdoor_component__["a" /* OutdoorComponent */] },
    { path: 'decor', component: __WEBPACK_IMPORTED_MODULE_18__components_decor_decor_component__["a" /* DecorComponent */] },
    { path: 'lighting', component: __WEBPACK_IMPORTED_MODULE_19__components_lighting_lighting_component__["a" /* LightingComponent */] },
    { path: 'favorites', component: __WEBPACK_IMPORTED_MODULE_20__components_favorites_favorites_component__["a" /* FavoritesComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_bed_bed_component__["a" /* BedComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_kitchen_kitchen_component__["a" /* KitchenComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_living_living_component__["a" /* LivingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_outdoor_outdoor_component__["a" /* OutdoorComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_decor_decor_component__["a" /* DecorComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_lighting_lighting_component__["a" /* LightingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_favorites_favorites_component__["a" /* FavoritesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_23_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_21__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BedComponent = (function () {
    function BedComponent(authService) {
        this.authService = authService;
    }
    BedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    BedComponent.prototype.addToFav = function (img) {
        this.authService.saveFav(img).subscribe();
    };
    BedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bed',
            template: __webpack_require__(706),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], BedComponent);
    return BedComponent;
    var _a;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/bed.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(707),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DecorComponent = (function () {
    function DecorComponent(authService) {
        this.authService = authService;
    }
    DecorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DecorComponent.prototype.addToFav = function (img) {
        this.authService.saveFav(img).subscribe();
    };
    DecorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-decor',
            template: __webpack_require__(708),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], DecorComponent);
    return DecorComponent;
    var _a;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/decor.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoritesComponent = (function () {
    function FavoritesComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.favorites = [];
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.favorites = this.authService.getFav();
    };
    FavoritesComponent.prototype.removeFav = function (img) {
        this.authService.deleteFav(img).subscribe();
        this.favorites = this.authService.getFav();
    };
    FavoritesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(709),
            styles: [__webpack_require__(695)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], FavoritesComponent);
    return FavoritesComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/favorites.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(710),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/home.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KitchenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KitchenComponent = (function () {
    function KitchenComponent(authService) {
        this.authService = authService;
    }
    KitchenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    KitchenComponent.prototype.addToFav = function (img) {
        this.authService.saveFav(img).subscribe();
    };
    KitchenComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kitchen',
            template: __webpack_require__(711),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], KitchenComponent);
    return KitchenComponent;
    var _a;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/kitchen.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LightingComponent = (function () {
    function LightingComponent(authService) {
        this.authService = authService;
    }
    LightingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    LightingComponent.prototype.addToFav = function (img) {
        this.authService.saveFav(img).subscribe();
    };
    LightingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lighting',
            template: __webpack_require__(712),
            styles: [__webpack_require__(698)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], LightingComponent);
    return LightingComponent;
    var _a;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/lighting.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LivingComponent = (function () {
    function LivingComponent(authService) {
        this.authService = authService;
    }
    LivingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    LivingComponent.prototype.addToFav = function (img) {
        this.authService.saveFav(img).subscribe();
    };
    LivingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-living',
            template: __webpack_require__(713),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], LivingComponent);
    return LivingComponent;
    var _a;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/living.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger' });
                _this.router.navigate(['/login']);
            }
            ;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(714),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/login.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Thank you for using myquarters.com!', { cssClass: 'alert-success' });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(715),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutdoorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OutdoorComponent = (function () {
    function OutdoorComponent(authService) {
        this.authService = authService;
    }
    OutdoorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    OutdoorComponent.prototype.addToFav = function (img) {
        this.authService.saveFav(img).subscribe();
    };
    OutdoorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-outdoor',
            template: __webpack_require__(716),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], OutdoorComponent);
    return OutdoorComponent;
    var _a;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/outdoor.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.posts = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.posts = this.authService.getPost();
        this.profilePic = this.authService.getProfilePic();
    };
    ProfileComponent.prototype.onFileSelected = function (event) {
        this.profilePic = event.target.files[0];
        // if (this.profilePic) {
        console.log(event);
        this.authService.saveProfilePic(this.profilePic).subscribe();
        console.log(this.profilePic);
        // return this.authService.saveProfilePic(this.profilePic).subscribe();
        //}
    };
    // onFileSelected(profilePic) {
    //   this.profilePic = profilePic;
    //   console.log(this.profilePic);
    // }
    ProfileComponent.prototype.saveProfilePic = function (profilePic) {
        this.authService.saveProfilePic(profilePic).subscribe();
    };
    ProfileComponent.prototype.addToWall = function (post) {
        this.authService.savePost(post).subscribe();
    };
    ProfileComponent.prototype.removePost = function (post) {
        this.authService.deletePost(post).subscribe();
        this.posts = this.authService.getPost();
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(717),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/profile.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields.', { cssClass: 'alert-danger' });
            return false;
        }
        ;
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email address.', { cssClass: 'alert-danger' });
            return false;
        }
        ;
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in.', { cssClass: 'alert-sucess' });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong.', { cssClass: 'alert-danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(718),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/register.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/users/pooja.patel/desktop/mq/angular-src/src/environment.js.map

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<app-navbar></app-navbar>\n\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\"\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "\n<h2>Bed and Bath</h2>\n\n    <p>\n        The most important part of a home is the bedroom and bathroom. Afterall, you spend the most amount of time in these rooms. A wooden bedframe gives the room a peaceful look. The new trend is having a very modern home. You don't need a large space to give a room a modern touch. And finally, the bathroom. The most important part of any home. Not only will you feel better in a nice elegant bathroom, but your guests will adore it as well.\n    </p>\n\n    <div class=\"row\">\n        <div class=\"col\"><img src=\"./images/bed1.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('bed1.jpg')\" class=\"fas fa-heart\"></i><div>Wooden Bedframe</div></div>\n        <div class=\"col\"><img src=\"./images/bed2.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('bed2.jpg')\" class=\"fas fa-heart\"></i><div>Modern Bedroom</div></div>\n        <div class=\"col\"><img src=\"./images/bed3.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('bed3.jpg')\" class=\"fas fa-heart\"></i><div>Unique Bathroom</div></div>\n    </div><br>\n\n    <a [routerLink]=\"['/dashboard']\" style=\"color:blue\">Back</a>"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<h2>Choose a Category to Explore</h2>\n<div class=\"row\">\n  <div class=\"col\"><a [routerLink]=\"['/bed']\"><img src=\"./images/bedroom.jpg\"><div>Bed and Bath</div></a></div>\n  <div class=\"col\"><a [routerLink]=\"['/kitchen']\"><img src=\"./images/kitchen.jpg\"><div>Kitchen</div></a></div>\n  <div class=\"col\"><a [routerLink]=\"['/living']\"><img src=\"./images/living.jpg\"><div>Living</div></a></div>\n  <div class=\"col\"><a [routerLink]=\"['/outdoor']\"><img src=\"./images/outdoor.jpg\"><div>Outdoor</div></a></div>\n  <div class=\"col\"><a [routerLink]=\"['/decor']\"><img src=\"./images/decor.jpg\"><div>Decor</div></a></div>  \n  <div class=\"col\"><a [routerLink]=\"['/lighting']\"><img src=\"./images/lighting.jpg\"><div>Lighting</div></a></div>\n</div>"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "\n<h2>Home Decor</h2>\n\n    <p>\n        So many places offer great finds for home decor. There are many DIY projects and other simple finds that can completely the change the look of any room. Flowers and different scents help bring outdoors inside.\n    </p>\n\n    <div class=\"row\">\n        <div class=\"col\"><img src=\"./images/decor1.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('decor1.jpg')\" class=\"fas fa-heart\"></i><div>Spice Up Your Life</div></div>\n        <div class=\"col\"><img src=\"./images/decor2.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('decor2.jpg')\" class=\"fas fa-heart\"></i><div>Light Reading</div></div>\n        <div class=\"col\"><img src=\"./images/decor3.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('decor3.jpg')\" class=\"fas fa-heart\"></i><div>Floral Art</div></div>\n    </div><br>\n\n    <a [routerLink]=\"['/dashboard']\" style=\"color:blue\">Back</a>"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2>Favorite Images</h2>\n  <div class=\"row\">\n    <div class=\"col\" *ngFor=\"let img of favorites\"><img src=\"./images/{{img}}\"><i (click)=\"removeFav(img)\" class=\"fas fa-trash\"></i></div>\n  </div>\n</div>\n\n<div *ngIf=\"!user\">\n      <h2>Please sign in to access Favorites.</h2>\n</div>"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<h2>\n  Welcome!\n</h2>\n\n<p style=\"text-align: center\">\n  Please <a [routerLink]=\"['/login']\" style=\"color:blue\">login</a> or <a [routerLink]=\"['/register']\" style=\"color:blue\">register</a> to continue.\n</p>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "\n<h2>Home Decor</h2>\n\n<p>\n    The rustic look is in right now. Wooden panels add just the right touch. An organized kitchen not only helps with cooking, but leaves guests stunned. A large island is the way to go. It's adds a great space to entertain and is an extra spot to dine at when you're in a hurry.\n</p>\n\n<div class=\"row\">\n    <div class=\"col\"><img src=\"./images/kitchen1.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('kitchen1.jpg')\" class=\"fas fa-heart\"></i><div>Rustic</div></div>\n    <div class=\"col\"><img src=\"./images/kitchen2.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('kitchen2.jpg')\" class=\"fas fa-heart\"></i><div>Organized Spices</div></div>\n    <div class=\"col\"><img src=\"./images/kitchen3.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('kitchen3.jpg')\" class=\"fas fa-heart\"></i><div>Large Island</div></div>\n</div><br>\n\n<a [routerLink]=\"['/dashboard']\" style=\"color:blue\">Back</a>"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<h2>Lighting</h2>\n\n    <p>\n        Brighten up any room with nice lighting. String lights are the perfect addition to a backyard. Chandeliers add an elegant touch to an entrance or dinning room. Barnyard lights are very trendy addition to any living space.\n    </p>\n\n    <div class=\"row\">\n        <div class=\"col\"><img src=\"./images/lighting1.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('lighting1.jpg')\" class=\"fas fa-heart\"></i><div>String Lights</div></div>\n        <div class=\"col\"><img src=\"./images/lighting2.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('lighting2.jpg')\" class=\"fas fa-heart\"></i><div>Chandelier</div></div>\n        <div class=\"col\"><img src=\"./images/lighting3.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('lighting3.jpg')\" class=\"fas fa-heart\"></i><div>Barnyard Lights</div></div>\n    </div><br>\n\n    <a [routerLink]=\"['/dashboard']\" style=\"color:blue\">Back</a>"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<h2>Living</h2>\n\n    <p>\n        A fun living area is a great addition to any home. Whether you have a small space or a large space, the possibilities are endless. The pictures below show a few different ways to use different pieces of art and furniture to make a living room come together.\n    </p>\n\n    <div class=\"row\">\n        <div class=\"col\"><img src=\"./images/living1.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('living1.jpg')\" class=\"fas fa-heart\"></i><div>Blue and White</div></div>\n        <div class=\"col\"><img src=\"./images/living2.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('living2.jpg')\" class=\"fas fa-heart\"></i><div>Studio</div></div>\n        <div class=\"col\"><img src=\"./images/living3.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('living3.jpg')\" class=\"fas fa-heart\"></i><div>Contemporary</div></div>\n    </div><br>\n\n    <a [routerLink]=\"['/dashboard']\" style=\"color:blue\">Back</a>"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>SIGN IN</h2>\n\n<form (submit)=\"onLoginSubmit()\" class=\"form\">\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"USERNAME\" required=\"\"/><br>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"PASSWORD\" required=\"\"/><br><br>\n\n    <button type=\"submit\" value=\"Login\">Login</button>\n</form>\n\n<img src=\"./images/logo.jpg\" class=\"logo\"><br>\n\n<div class=\"links\">\n    <span class=\"register\"><a [routerLink]=\"['/register']\" style=\"color:blue\">Register</a></span>\n</div>    "

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<a href=\"news\">\n    <img src=\"./images/logo.JPG\" class=\"logo2\">\n</a>\n\n<a *ngIf=\"authService.user\" (click)=\"onLogoutClick()\"><button class=\"out\">Log Out</button></a>\n<a [routerLink]=\"['/login']\"><button *ngIf=\"!authService.user\" class=\"out\">Log In</button></a>\n\n<div class=\"navbar\">\n    <span>myquarters.com</span>\n    \n    <a *ngIf=\"!authService.user\" [routerLink]=\"['/']\"><i class=\"fa fa-fw fa-home fa-lg\"></i><div class=\"nav\">Home</div></a>\n    <a *ngIf=\"authService.user\" [routerLink]=\"['/dashboard']\"><i class=\"fa fa-fw fa-newspaper fa-lg\"></i><div class=\"nav\">Category</div></a> \n    <a *ngIf=\"authService.user\" [routerLink]=\"['/profile']\"><i class=\"fa fa-fw fa-user fa-lg\"></i><div class=\"nav\">Profile</div></a> \n    <a *ngIf=\"authService.user\" [routerLink]=\"['/favorites']\"><i class=\"fa fa-fw fa-heart\"></i><div class=\"nav\">Favorites</div></a>\n\n</div>"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<h2>Outdoor</h2>\n\n    <p>\n        Backyards can provide a great escape without actually having to go anywhere. Stone paths add a nice cottage touch to the home. Or a swing can be a great place to relax. The best backyards have awesome pools. These are really handly when it's 100 degrees outside.\n    </p>\n\n    <div class=\"row\">\n        <div class=\"col\"><img src=\"./images/outdoor1.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('outdoor1.jpg')\" class=\"fas fa-heart\"></i><div>Stone Backyard</div></div>\n        <div class=\"col\"><img src=\"./images/outdoor2.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('outdoor2.jpg')\" class=\"fas fa-heart\"></i><div>Swing</div></div>\n        <div class=\"col\"><img src=\"./images/outdoor3.jpg\"><i *ngIf=\"user\" (click)=\"addToFav('outdoor3.jpg')\" class=\"fas fa-heart\"></i><div>Pool</div></div>\n    </div><br>\n\n    <a [routerLink]=\"['/dashboard']\" style=\"color:blue\">Back</a>"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n        <h2 class=\"page-header\">Welcome, {{user.name}}!</h2>\n\n<br>\n<div style=\"text-align:center\">\n    <h6>Current Mood</h6>\n    <img src=\"../../../avatars/{{user?.profilePic}}\">\n</div>\n\n<div class=\"upload-btn\">\n        <image-upload class=\"customClass\" url=\"http://localhost:3000/users/upload/{{user._id}}\"></image-upload>  \n</div>\n\n<div class=\"wall\">\n    <h3>User Activity</h3>\n    <input type=\"text\" [(ngModel)]=\"post\" name=\"post\" class=\"wallText\" placeholder=\"What's on your mind?\"/><br><br>\n    <button (click)=\"addToWall(post)\" type=\"button\" >Post</button> <br> <br>\n\n    <div class=\"container\">\n        <div>\n            <div style=\"text-align: center\" *ngFor=\"let post of posts\">\n                <span>{{post}}</span>  &nbsp;<i (click)=\"removePost(post)\" class=\"fas fa-trash\"></i><br>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\n<div *ngIf=\"!user\">\n    <h2>Please sign in to access Profile.</h2>\n</div>"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<h3>Let's get you registered!</h3>\n\n  <form (submit)=\"onRegisterSubmit()\" class=\"form\">\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"NAME\" required=\"\"/><br>    \n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"USERNAME\" required=\"\"/><br>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"EMAIL\" required=\"\"/><br>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"PASSWORD\" required=\"\"/><br><br>\n    \n    <button type=\"submit\">Register</button>\n  </form>\n\n\n  <a [routerLink]=\"['/login']\">Back</a>"

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ })

},[757]);
//# sourceMappingURL=main.bundle.map