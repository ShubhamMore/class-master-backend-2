function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/@core/core.module.ts":
  /*!**************************************!*\
    !*** ./src/app/@core/core.module.ts ***!
    \**************************************/

  /*! exports provided: NbSimpleRoleProvider, NB_CORE_PROVIDERS, CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NbSimpleRoleProvider", function () {
      return NbSimpleRoleProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NB_CORE_PROVIDERS", function () {
      return NB_CORE_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/auth */
    "./node_modules/@nebular/auth/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _nebular_security__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/security */
    "./node_modules/@nebular/security/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _module_import_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./module-import-guard */
    "./src/app/@core/module-import-guard.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./utils */
    "./src/app/@core/utils/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _authentication_auth_auth_interpreter_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../authentication/auth/auth-interpreter/auth-interceptor.service */
    "./src/app/authentication/auth/auth-interpreter/auth-interceptor.service.ts");

    var NbSimpleRoleProvider =
    /*#__PURE__*/
    function (_nebular_security__WE) {
      _inherits(NbSimpleRoleProvider, _nebular_security__WE);

      var _super = _createSuper(NbSimpleRoleProvider);

      function NbSimpleRoleProvider() {
        _classCallCheck(this, NbSimpleRoleProvider);

        return _super.apply(this, arguments);
      }

      _createClass(NbSimpleRoleProvider, [{
        key: "getRole",
        value: function getRole() {
          // here you could provide any role based on any auth flow
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('guest');
        }
      }]);

      return NbSimpleRoleProvider;
    }(_nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbRoleProvider"]);

    var NB_CORE_PROVIDERS = [_nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbSecurityModule"].forRoot({
      accessControl: {
        guest: {
          view: '*'
        },
        user: {
          parent: 'guest',
          create: '*',
          edit: '*',
          remove: '*'
        }
      }
    }).providers, {
      provide: _nebular_security__WEBPACK_IMPORTED_MODULE_3__["NbRoleProvider"],
      useClass: NbSimpleRoleProvider
    }, _utils__WEBPACK_IMPORTED_MODULE_6__["AnalyticsService"], _utils__WEBPACK_IMPORTED_MODULE_6__["LayoutService"], _utils__WEBPACK_IMPORTED_MODULE_6__["SeoService"], _utils__WEBPACK_IMPORTED_MODULE_6__["StateService"]];

    var CoreModule =
    /*@__PURE__*/
    function () {
      var CoreModule =
      /*#__PURE__*/
      function () {
        function CoreModule(parentModule) {
          _classCallCheck(this, CoreModule);

          Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_5__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
        }

        _createClass(CoreModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: CoreModule,
              providers: [].concat(NB_CORE_PROVIDERS)
            };
          }
        }]);

        return CoreModule;
      }();

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12));
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
          useClass: _authentication_auth_auth_interpreter_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptorService"],
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"]]
      });
      return CoreModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_nebular_auth__WEBPACK_IMPORTED_MODULE_2__["NbAuthModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/@core/module-import-guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/@core/module-import-guard.ts ***!
    \**********************************************/

  /*! exports provided: throwIfAlreadyLoaded */

  /***/
  function srcAppCoreModuleImportGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function () {
      return throwIfAlreadyLoaded;
    });

    function throwIfAlreadyLoaded(parentModule, moduleName) {
      if (parentModule) {
        throw new Error("".concat(moduleName, " has already been loaded. Import Core modules in the AppModule only."));
      }
    }
    /***/

  },

  /***/
  "./src/app/@core/utils/analytics.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/@core/utils/analytics.service.ts ***!
    \**************************************************/

  /*! exports provided: AnalyticsService */

  /***/
  function srcAppCoreUtilsAnalyticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsService", function () {
      return AnalyticsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AnalyticsService =
    /*@__PURE__*/
    function () {
      var AnalyticsService =
      /*#__PURE__*/
      function () {
        function AnalyticsService(route, router, location) {
          _classCallCheck(this, AnalyticsService);

          this.route = route;
          this.router = router;
          this.location = location;
          this.enabled = false;
        }

        _createClass(AnalyticsService, [{
          key: "trackPageViews",
          value: function trackPageViews() {
            var _this = this;

            if (this.enabled) {
              this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
                return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
              })).subscribe(function () {
                ga('send', {
                  hitType: 'pageview',
                  page: _this.location.path()
                });
              });
            }
          }
        }, {
          key: "trackEvent",
          value: function trackEvent(eventName) {
            if (this.enabled) {
              ga('send', 'event', eventName);
            }
          }
        }]);

        return AnalyticsService;
      }();

      AnalyticsService.ɵfac = function AnalyticsService_Factory(t) {
        return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
      };

      AnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AnalyticsService,
        factory: AnalyticsService.ɵfac
      });
      return AnalyticsService;
    }();
    /***/

  },

  /***/
  "./src/app/@core/utils/index.ts":
  /*!**************************************!*\
    !*** ./src/app/@core/utils/index.ts ***!
    \**************************************/

  /*! exports provided: LayoutService, AnalyticsService, SeoService, StateService */

  /***/
  function srcAppCoreUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./layout.service */
    "./src/app/@core/utils/layout.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return _layout_service__WEBPACK_IMPORTED_MODULE_0__["LayoutService"];
    });
    /* harmony import */


    var _analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./analytics.service */
    "./src/app/@core/utils/analytics.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsService", function () {
      return _analytics_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"];
    });
    /* harmony import */


    var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./state.service */
    "./src/app/@core/utils/state.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"];
    });
    /* harmony import */


    var _seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./seo.service */
    "./src/app/@core/utils/seo.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SeoService", function () {
      return _seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"];
    });
    /***/

  },

  /***/
  "./src/app/@core/utils/layout.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/@core/utils/layout.service.ts ***!
    \***********************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcAppCoreUtilsLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LayoutService =
    /*@__PURE__*/
    function () {
      var LayoutService =
      /*#__PURE__*/
      function () {
        function LayoutService() {
          _classCallCheck(this, LayoutService);

          this.layoutSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.layoutSizeChange$ = this.layoutSize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({
            refCount: true
          }));
        }

        _createClass(LayoutService, [{
          key: "changeLayoutSize",
          value: function changeLayoutSize() {
            this.layoutSize$.next();
          }
        }, {
          key: "onChangeLayoutSize",
          value: function onChangeLayoutSize() {
            return this.layoutSizeChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1));
          }
        }, {
          key: "onSafeChangeLayoutSize",
          value: function onSafeChangeLayoutSize() {
            return this.layoutSizeChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(350));
          }
        }]);

        return LayoutService;
      }();

      LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || LayoutService)();
      };

      LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LayoutService,
        factory: LayoutService.ɵfac
      });
      return LayoutService;
    }();
    /***/

  },

  /***/
  "./src/app/@core/utils/seo.service.ts":
  /*!********************************************!*\
    !*** ./src/app/@core/utils/seo.service.ts ***!
    \********************************************/

  /*! exports provided: SeoService */

  /***/
  function srcAppCoreUtilsSeoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeoService", function () {
      return SeoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SeoService =
    /*@__PURE__*/
    function () {
      var SeoService =
      /*#__PURE__*/
      function () {
        function SeoService(router, document, platformId) {
          _classCallCheck(this, SeoService);

          this.router = router;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId);
          this.dom = document;

          if (this.isBrowser) {
            this.createCanonicalTag();
          }
        }

        _createClass(SeoService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "createCanonicalTag",
          value: function createCanonicalTag() {
            this.linkCanonical = this.dom.createElement('link');
            this.linkCanonical.setAttribute('rel', 'canonical');
            this.dom.head.appendChild(this.linkCanonical);
            this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
          }
        }, {
          key: "trackCanonicalChanges",
          value: function trackCanonicalChanges() {
            var _this2 = this;

            if (!this.isBrowser) {
              return;
            }

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function () {
              _this2.linkCanonical.setAttribute('href', _this2.getCanonicalUrl());
            });
          }
        }, {
          key: "getCanonicalUrl",
          value: function getCanonicalUrl() {
            return this.dom.location.origin + this.dom.location.pathname;
          }
        }]);

        return SeoService;
      }();

      SeoService.ɵfac = function SeoService_Factory(t) {
        return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      };

      SeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SeoService,
        factory: SeoService.ɵfac
      });
      return SeoService;
    }();
    /***/

  },

  /***/
  "./src/app/@core/utils/state.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/@core/utils/state.service.ts ***!
    \**********************************************/

  /*! exports provided: StateService */

  /***/
  function srcAppCoreUtilsStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return StateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var StateService =
    /*@__PURE__*/
    function () {
      var StateService =
      /*#__PURE__*/
      function () {
        function StateService(directionService) {
          var _this3 = this;

          _classCallCheck(this, StateService);

          this.layouts = [{
            name: 'One Column',
            icon: 'nb-layout-default',
            id: 'one-column',
            selected: true
          }, {
            name: 'Two Column',
            icon: 'nb-layout-two-column',
            id: 'two-column'
          }, {
            name: 'Center Column',
            icon: 'nb-layout-centre',
            id: 'center-column'
          }];
          this.sidebars = [{
            name: 'Sidebar at layout start',
            icon: 'nb-layout-sidebar-left',
            id: 'start',
            selected: true
          }, {
            name: 'Sidebar at layout end',
            icon: 'nb-layout-sidebar-right',
            id: 'end'
          }];
          this.layoutState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layouts[0]);
          this.sidebarState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sidebars[0]);
          this.alive = true;
          directionService.onDirectionChange().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () {
            return _this3.alive;
          })).subscribe(function (direction) {
            return _this3.updateSidebarIcons(direction);
          });
          this.updateSidebarIcons(directionService.getDirection());
        }

        _createClass(StateService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.alive = false;
          }
        }, {
          key: "updateSidebarIcons",
          value: function updateSidebarIcons(direction) {
            var _this$sidebars = _slicedToArray(this.sidebars, 2),
                startSidebar = _this$sidebars[0],
                endSidebar = _this$sidebars[1];

            var isLtr = direction === _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirection"].LTR;
            var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
            var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
            startSidebar.icon = startIconClass;
            endSidebar.icon = endIconClass;
          }
        }, {
          key: "setLayoutState",
          value: function setLayoutState(state) {
            this.layoutState$.next(state);
          }
        }, {
          key: "getLayoutStates",
          value: function getLayoutStates() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.layouts);
          }
        }, {
          key: "onLayoutState",
          value: function onLayoutState() {
            return this.layoutState$.asObservable();
          }
        }, {
          key: "setSidebarState",
          value: function setSidebarState(state) {
            this.sidebarState$.next(state);
          }
        }, {
          key: "getSidebarStates",
          value: function getSidebarStates() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sidebars);
          }
        }, {
          key: "onSidebarState",
          value: function onSidebarState() {
            return this.sidebarState$.asObservable();
          }
        }]);

        return StateService;
      }();

      StateService.ɵfac = function StateService_Factory(t) {
        return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"]));
      };

      StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StateService,
        factory: StateService.ɵfac
      });
      return StateService;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/@theme/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppThemeComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*@__PURE__*/
    function () {
      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["ngx-footer"]],
        decls: 6,
        vars: 0,
        consts: [[1, "created-by"], ["href", "https://www.google.com", "target", "_blank"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created with \u2665 by TEAM ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CLASS MASTER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".nb-theme-default   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 575.98px) {\n  .nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\n.nb-theme-dark   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 575.98px) {\n  .nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 575.98px) {\n  .nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n\n.nb-theme-corporate   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 575.98px) {\n  .nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}"]
      });
      return FooterComponent;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/@theme/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppThemeComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _services_branch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/branch.service */
    "./src/app/services/branch.service.ts");
    /* harmony import */


    var _services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../services/shared-services/date.service */
    "./src/app/services/shared-services/date.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../@core/utils */
    "./src/app/@core/utils/index.ts");
    /* harmony import */


    var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../../authentication/auth/auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../../services/notification.service */
    "./src/app/services/notification.service.ts");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_security__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @nebular/security */
    "./node_modules/@nebular/security/__ivy_ngcc__/fesm2015/index.js");

    function HeaderComponent_nb_select_6_nb_option_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var branch_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r10._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](branch_r10.basicDetails.branchName);
      }
    }

    function HeaderComponent_nb_select_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedChange", function HeaderComponent_nb_select_6_Template_nb_select_selectedChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.changeSelectBranch($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Institute");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_nb_select_6_nb_option_3_Template, 2, 2, "nb-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r0.branchId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.branches);
      }
    }

    function HeaderComponent_nb_action_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-action", 16);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbPopover", _r3)("badgeText", ctx_r1.unseenNotificationCount);
      }
    }

    function HeaderComponent_nb_action_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-action", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-user", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbContextMenu", ctx_r2.userMenu)("onlyPicture", ctx_r2.userPictureOnly)("name", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r2.user == null ? null : ctx_r2.user.name));
      }
    }

    function HeaderComponent_ng_template_11_nb_list_1_nb_list_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_11_nb_list_1_nb_list_item_1_Template_span_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var notification_r15 = ctx.$implicit;
          var i_r16 = ctx.index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          return ctx_r17.openNotificationBox(notification_r15, i_r16, _r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_11_nb_list_1_nb_list_item_1_Template_nb_icon_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var notification_r15 = ctx.$implicit;
          var i_r16 = ctx.index;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r19.deleteNotification(notification_r15._id, notification_r15.status, i_r16);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_11_nb_list_1_nb_list_item_1_Template_nb_icon_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var notification_r15 = ctx.$implicit;
          var i_r16 = ctx.index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          return ctx_r20.openNotificationBox(notification_r15, i_r16, _r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notification_r15 = ctx.$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !notification_r15.status ? "new-notification" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.getNotificationLimitedTitle(notification_r15.title), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r14.dateService.getUpToTime(notification_r15.date), " ago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.getNotificationLimitedMessage(notification_r15.message), " ");
      }
    }

    function HeaderComponent_ng_template_11_nb_list_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_template_11_nb_list_1_nb_list_item_1_Template, 19, 4, "nb-list-item", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.notifications);
      }
    }

    function HeaderComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_template_11_nb_list_1_Template, 2, 1, "nb-list", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.notifications && ctx_r4.notifications.length > 0)("ngIfElse", _r7);
      }
    }

    function HeaderComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-card-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_13_Template_button_click_12_listener() {
          var ref_r22 = ctx.dialogRef;
          return ref_r22.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Close ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var notification_r21 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r21.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.dateService.convertToDateTimeHourString(notification_r21.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", notification_r21.message, " ");
      }
    }

    function HeaderComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Notifications Found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["view", "user"];
    };

    var HeaderComponent =
    /*@__PURE__*/
    function () {
      var HeaderComponent =
      /*#__PURE__*/
      function () {
        function HeaderComponent(sidebarService, branchService, dialogService, dateService, router, route, menuService, themeService, layoutService, authService, breakpointService, notificationService, nbMenuService, socketService) {
          _classCallCheck(this, HeaderComponent);

          this.sidebarService = sidebarService;
          this.branchService = branchService;
          this.dialogService = dialogService;
          this.dateService = dateService;
          this.router = router;
          this.route = route;
          this.menuService = menuService;
          this.themeService = themeService;
          this.layoutService = layoutService;
          this.authService = authService;
          this.breakpointService = breakpointService;
          this.notificationService = notificationService;
          this.nbMenuService = nbMenuService;
          this.socketService = socketService;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.userPictureOnly = false;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.socketService.setupSocketConnection();
            this.branchId = '';
            this.branches = [];
            this.userMenu = [];
            this.notifications = [// {
              //   _id: '123',
              //   title: 'My Title',
              //   message:
              //     'My Message My Message My Message My Message My Message My Message My Message My Message ',
              //   date: 1602139523275,
              //   status: true,
              // },
            ];
            this.unseenNotificationCount = 0;
            this.user = this.authService.getUserData();
            this.socket = this.socketService.getSocket();
            this.getNotifications();
            this.userMenu = [];

            if (this.user.userRole !== 'admin') {
              this.userMenu.push({
                title: 'Profile',
                link: '/' + this.user.userRole + '/profile'
              });
            }

            if (this.user.userRole === 'institute' // || this.user.userRole === 'student'
            ) {
                this.userMenu.push({
                  title: 'Transactions',
                  link: '/' + this.user.userRole + '/transaction'
                });
              }

            if (this.user.userRole === 'institute') {
              this.userMenu.push({
                title: 'Settings',
                link: '/institute/settings'
              });
            }

            this.userMenu.push({
              title: 'Logout'
            });
            this.nbMenuService.onItemClick().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_ref) {
              var tag = _ref.tag;
              return tag === 'my-context-menu';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref2) {
              var title = _ref2.item.title;
              return title;
            })).subscribe(function (title) {
              if (title === 'Logout') {
                _this4.logOut();
              }
            });
            this.branchService.getBranchesData().subscribe(function (branches) {
              _this4.branches = branches;
            });
            this.branchService.getSelectedBranchId().subscribe(function (branchId) {
              _this4.branchId = branchId;
            }); // Listening to notifications

            this.socket.on('notify', function (notification) {
              _this4.unseenNotificationCount++;

              _this4.notifications.splice(0, 0, notification);
            });

            var _this$breakpointServi = this.breakpointService.getBreakpointsMap(),
                xl = _this$breakpointServi.xl;

            this.themeService.onMediaQueryChange().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  currentBreakpoint = _ref4[1];

              return currentBreakpoint.width < xl;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(function (isLessThanXl) {
              return _this4.userPictureOnly = isLessThanXl;
            });
          }
        }, {
          key: "changeSelectBranch",
          value: function changeSelectBranch(id) {
            if (id !== '') {
              var branch = this.branches.find(function (curBranch) {
                return curBranch._id === id;
              });

              if (branch && branch.status) {
                this.branchService.setBranchId(id);
                this.router.navigate(['/' + this.user.userRole + '/branch/dashboard'], {
                  relativeTo: this.route
                });
              }
            }
          }
        }, {
          key: "getNotifications",
          value: function getNotifications() {
            var _this5 = this;

            this.notificationService.getNotifications().subscribe(function (notifications) {
              _this5.notifications = notifications;

              if (notifications.length > 0) {
                _this5.unseenNotificationCount = notifications.filter(function (notification) {
                  return !notification.status;
                }).length;
              }
            }, function (error) {});
          }
        }, {
          key: "openNotificationBox",
          value: function openNotificationBox(notification, i, notificationDialog) {
            var _this6 = this;

            this.dialogService.open(notificationDialog, {
              context: notification
            });
            this.notificationService.changeNotificationStatus(notification._id).subscribe(function (res) {
              _this6.notifications[i].status = true;

              if (_this6.unseenNotificationCount > 0) {
                _this6.unseenNotificationCount--;
              }
            }, function (error) {});
          }
        }, {
          key: "getNotificationLimitedTitle",
          value: function getNotificationLimitedTitle(title) {
            if (title.length <= 20) {
              return title;
            }

            return title.substr(0, 17).trim() + '...';
          }
        }, {
          key: "getNotificationLimitedMessage",
          value: function getNotificationLimitedMessage(message) {
            if (message.length <= 30) {
              return message;
            }

            return message.substr(0, 30).trim() + '...';
          }
        }, {
          key: "deleteNotification",
          value: function deleteNotification(id, status, i) {
            var _this7 = this;

            this.notificationService.deleteNotification(id).subscribe(function (res) {
              if (!status) {
                if (_this7.unseenNotificationCount > 0) {
                  _this7.unseenNotificationCount--;
                }
              }

              _this7.notifications.splice(i, 1);
            }, function (error) {});
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.authService.logout();
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            this.sidebarService.toggle(false, 'menu-sidebar');
            this.layoutService.changeLayoutSize();
            return false;
          }
        }, {
          key: "navigateHome",
          value: function navigateHome() {
            this.menuService.navigateHome();
            return false;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
            this.socket.on('disconnect', function () {// console.log('Socket Disconnected');
            });
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branch_service__WEBPACK_IMPORTED_MODULE_4__["BranchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_utils__WEBPACK_IMPORTED_MODULE_7__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMediaBreakpointsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_10__["SocketService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["ngx-header"]],
        decls: 17,
        vars: 4,
        consts: [[1, "header-container"], [1, "logo-container"], ["href", "#", 1, "sidebar-toggle", 3, "click"], ["icon", "menu-2-outline"], ["href", "#", 1, "logo", 3, "click"], ["src", "../../../../assets/brand/class-master.png", "width", "75%", "alt", "IMS Master"], ["size", "medium", "status", "primary", 3, "selected", "selectedChange", 4, "ngIf"], ["class", "control-item", "icon", "bell-outline", "nbPopoverPlacement", "bottom", "badgePosition", "top right", "badgeStatus", "danger", 3, "nbPopover", "badgeText", 4, "ngIf"], ["class", "user-action", 4, "nbIsGranted"], ["notificationPopup", ""], ["notificationDialog", ""], ["noNotifications", ""], ["size", "medium", "status", "primary", 3, "selected", "selectedChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["icon", "bell-outline", "nbPopoverPlacement", "bottom", "badgePosition", "top right", "badgeStatus", "danger", 1, "control-item", 3, "nbPopover", "badgeText"], [1, "user-action"], ["nbContextMenuTag", "my-context-menu", 3, "nbContextMenu", "onlyPicture", "name"], [1, "notification-popup"], [4, "ngIf", "ngIfElse"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "row"], [1, "col-10"], [1, "pointer", 3, "click"], [1, "col-2"], [1, "delete-notification", "pointer", "float-right"], ["icon", "trash-2-outline", "nbTooltip", "Delete", 3, "click"], [1, "notification-text"], [1, "view-notification", "pointer", "float-right"], ["nbTooltip", "Show more..", "icon", "arrow-circle-right-outline", 3, "click"], [1, "notification-modal"], ["nbButton", "", "size", "small", "status", "primary", 1, "float-right", 3, "click"], [1, "mt-2", "mb-2", "text-center"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() {
              return ctx.toggleSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nb-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() {
              return ctx.navigateHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_nb_select_6_Template, 4, 2, "nb-select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_nb_action_9_Template, 1, 2, "nb-action", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_nb_action_10_Template, 3, 5, "nb-action", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_ng_template_11_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_ng_template_13_Template, 14, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_ng_template_15_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.userRole !== "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.userRole !== "admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbIsGranted", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsComponent"], _nebular_security__WEBPACK_IMPORTED_MODULE_12__["NbIsGrantedDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbPopoverDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbUserComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbContextMenuDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"]],
        styles: [".nb-theme-default   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-default   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-default   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-default   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nb-theme-default   [_nghost-%COMP%]     nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8f9bb3;\n}\n[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-right: 1.25rem;\n}\n[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n}\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-left: 1px solid #edf1f7;\n}\n[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-right: 1px solid #edf1f7;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-default   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nb-theme-default   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-default   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nb-theme-dark   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-dark   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-dark   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nb-theme-dark   [_nghost-%COMP%]     nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8f9bb3;\n}\n[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-right: 1.25rem;\n}\n[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-left: 1px solid #151a30;\n}\n[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-right: 1px solid #151a30;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-dark   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nb-theme-dark   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-dark   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]     nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #b4b4db;\n}\n[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-right: 1.25rem;\n}\n[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-left: 1px solid #1b1b38;\n}\n[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-right: 1px solid #1b1b38;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nb-theme-cosmic   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-cosmic   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nb-theme-corporate   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nb-theme-corporate   [_nghost-%COMP%]     nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8f9bb3;\n}\n[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-right: 1.25rem;\n}\n[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-left: 1px solid #edf1f7;\n}\n[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-right: 1px solid #edf1f7;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-corporate   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nb-theme-corporate   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-corporate   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.notification-popup[_ngcontent-%COMP%] {\n  width: 20rem;\n  max-height: 40rem;\n  overflow-y: auto;\n}\n.notification[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n.new-notification[_ngcontent-%COMP%] {\n  background-color: rgba(170, 170, 170, 0.8);\n  padding: 0.25rem 1rem;\n}\n.notification-modal[_ngcontent-%COMP%] {\n  display: block;\n}\n.delete-notification[_ngcontent-%COMP%] {\n  color: #000;\n  transition: all 0.25s;\n}\n.delete-notification[_ngcontent-%COMP%]:hover {\n  color: #ff3d71;\n  transform: scale(1.1);\n}\n.notification-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: inline-block;\n  white-space: nowrap;\n}\n.view-notification[_ngcontent-%COMP%] {\n  color: #000;\n  transition: all 0.25s;\n}\n.view-notification[_ngcontent-%COMP%]:hover {\n  color: #00d68f;\n  transform: scale(1.1);\n}"]
      });
      return HeaderComponent;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/components/index.ts":
  /*!********************************************!*\
    !*** ./src/app/@theme/components/index.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent, FooterComponent, SearchInputComponent, TinyMCEComponent */

  /***/
  function srcAppThemeComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/@theme/components/header/header.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _header_header_component__WEBPACK_IMPORTED_MODULE_0__["HeaderComponent"];
    });
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/@theme/components/footer/footer.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"];
    });
    /* harmony import */


    var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./search-input/search-input.component */
    "./src/app/@theme/components/search-input/search-input.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function () {
      return _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__["SearchInputComponent"];
    });
    /* harmony import */


    var _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tiny-mce/tiny-mce.component */
    "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function () {
      return _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__["TinyMCEComponent"];
    });
    /***/

  },

  /***/
  "./src/app/@theme/components/search-input/search-input.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/@theme/components/search-input/search-input.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SearchInputComponent */

  /***/
  function srcAppThemeComponentsSearchInputSearchInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function () {
      return SearchInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["input"];

    var SearchInputComponent =
    /*@__PURE__*/
    function () {
      var SearchInputComponent =
      /*#__PURE__*/
      function () {
        function SearchInputComponent() {
          _classCallCheck(this, SearchInputComponent);

          this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isInputShown = false;
        }

        _createClass(SearchInputComponent, [{
          key: "showInput",
          value: function showInput() {
            this.isInputShown = true;
            this.input.nativeElement.focus();
          }
        }, {
          key: "hideInput",
          value: function hideInput() {
            this.isInputShown = false;
          }
        }, {
          key: "onInput",
          value: function onInput(val) {
            this.search.emit(val);
          }
        }]);

        return SearchInputComponent;
      }();

      SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) {
        return new (t || SearchInputComponent)();
      };

      SearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchInputComponent,
        selectors: [["ngx-search-input"]],
        viewQuery: function SearchInputComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        outputs: {
          search: "search"
        },
        decls: 3,
        vars: 2,
        consts: [[1, "control-icon", "ion", "ion-ios-search", 3, "click"], ["placeholder", "Type your search request here...", 3, "blur", "input"], ["input", ""]],
        template: function SearchInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_i_click_0_listener() {
              return ctx.showInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchInputComponent_Template_input_blur_1_listener() {
              return ctx.hideInput();
            })("input", function SearchInputComponent_Template_input_input_1_listener($event) {
              return ctx.onInput($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.isInputShown);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]::before {\n  font-size: 2.3rem;\n}\n\n[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  margin-left: 1rem;\n  width: 15rem;\n  transition: width 0.2s ease;\n}\n\n[_nghost-%COMP%]   input.hidden[_ngcontent-%COMP%] {\n  width: 0;\n  margin: 0;\n}\n\n[_nghost-%COMP%]     search-input input {\n  background: transparent;\n}"]
      });
      return SearchInputComponent;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/components/tiny-mce/tiny-mce.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/@theme/components/tiny-mce/tiny-mce.component.ts ***!
    \******************************************************************/

  /*! exports provided: TinyMCEComponent */

  /***/
  function srcAppThemeComponentsTinyMceTinyMceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TinyMCEComponent", function () {
      return TinyMCEComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var TinyMCEComponent =
    /*@__PURE__*/
    function () {
      var TinyMCEComponent =
      /*#__PURE__*/
      function () {
        function TinyMCEComponent(host, locationStrategy) {
          _classCallCheck(this, TinyMCEComponent);

          this.host = host;
          this.locationStrategy = locationStrategy;
          this.editorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(TinyMCEComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this8 = this;

            tinymce.init({
              target: this.host.nativeElement,
              plugins: ['link', 'paste', 'table'],
              skin_url: "".concat(this.locationStrategy.getBaseHref(), "assets/skins/lightgray"),
              setup: function setup(editor) {
                _this8.editor = editor;
                editor.on('keyup', function () {
                  _this8.editorKeyup.emit(editor.getContent());
                });
              },
              height: '320'
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            tinymce.remove(this.editor);
          }
        }]);

        return TinyMCEComponent;
      }();

      TinyMCEComponent.ɵfac = function TinyMCEComponent_Factory(t) {
        return new (t || TinyMCEComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"]));
      };

      TinyMCEComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TinyMCEComponent,
        selectors: [["ngx-tiny-mce"]],
        outputs: {
          editorKeyup: "editorKeyup"
        },
        decls: 0,
        vars: 0,
        template: function TinyMCEComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      return TinyMCEComponent;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/layouts/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/@theme/layouts/index.ts ***!
    \*****************************************/

  /*! exports provided: OneColumnLayoutComponent, TwoColumnsLayoutComponent, ThreeColumnsLayoutComponent */

  /***/
  function srcAppThemeLayoutsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./one-column/one-column.layout */
    "./src/app/@theme/layouts/one-column/one-column.layout.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponent", function () {
      return _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__["OneColumnLayoutComponent"];
    });
    /* harmony import */


    var _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./two-columns/two-columns.layout */
    "./src/app/@theme/layouts/two-columns/two-columns.layout.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TwoColumnsLayoutComponent", function () {
      return _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__["TwoColumnsLayoutComponent"];
    });
    /* harmony import */


    var _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./three-columns/three-columns.layout */
    "./src/app/@theme/layouts/three-columns/three-columns.layout.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ThreeColumnsLayoutComponent", function () {
      return _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__["ThreeColumnsLayoutComponent"];
    });
    /***/

  },

  /***/
  "./src/app/@theme/layouts/one-column/one-column.layout.ts":
  /*!****************************************************************!*\
    !*** ./src/app/@theme/layouts/one-column/one-column.layout.ts ***!
    \****************************************************************/

  /*! exports provided: OneColumnLayoutComponent */

  /***/
  function srcAppThemeLayoutsOneColumnOneColumnLayoutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OneColumnLayoutComponent", function () {
      return OneColumnLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/@theme/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/footer/footer.component */
    "./src/app/@theme/components/footer/footer.component.ts");

    var _c0 = [[["nb-menu"]], [["router-outlet"]]];
    var _c1 = ["nb-menu", "router-outlet"];

    var OneColumnLayoutComponent =
    /*@__PURE__*/
    function () {
      var OneColumnLayoutComponent = function OneColumnLayoutComponent() {
        _classCallCheck(this, OneColumnLayoutComponent);
      };

      OneColumnLayoutComponent.ɵfac = function OneColumnLayoutComponent_Factory(t) {
        return new (t || OneColumnLayoutComponent)();
      };

      OneColumnLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OneColumnLayoutComponent,
        selectors: [["ngx-one-column-layout"]],
        ngContentSelectors: _c1,
        decls: 9,
        vars: 0,
        consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"]],
        template: function OneColumnLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-sidebar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-layout-footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngx-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutFooterComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: [".nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}"]
      });
      return OneColumnLayoutComponent;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/layouts/three-columns/three-columns.layout.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/@theme/layouts/three-columns/three-columns.layout.ts ***!
    \**********************************************************************/

  /*! exports provided: ThreeColumnsLayoutComponent */

  /***/
  function srcAppThemeLayoutsThreeColumnsThreeColumnsLayoutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThreeColumnsLayoutComponent", function () {
      return ThreeColumnsLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/@theme/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/footer/footer.component */
    "./src/app/@theme/components/footer/footer.component.ts");

    var _c0 = [[["nb-menu"]], [["router-outlet"]]];
    var _c1 = ["nb-menu", "router-outlet"];

    var ThreeColumnsLayoutComponent =
    /*@__PURE__*/
    function () {
      var ThreeColumnsLayoutComponent = function ThreeColumnsLayoutComponent() {
        _classCallCheck(this, ThreeColumnsLayoutComponent);
      };

      ThreeColumnsLayoutComponent.ɵfac = function ThreeColumnsLayoutComponent_Factory(t) {
        return new (t || ThreeColumnsLayoutComponent)();
      };

      ThreeColumnsLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ThreeColumnsLayoutComponent,
        selectors: [["ngx-three-columns-layout"]],
        ngContentSelectors: _c1,
        decls: 11,
        vars: 0,
        consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]],
        template: function ThreeColumnsLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-sidebar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-layout-column", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nb-layout-column", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-layout-footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngx-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutFooterComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: [".nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}"]
      });
      return ThreeColumnsLayoutComponent;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/layouts/two-columns/two-columns.layout.ts":
  /*!******************************************************************!*\
    !*** ./src/app/@theme/layouts/two-columns/two-columns.layout.ts ***!
    \******************************************************************/

  /*! exports provided: TwoColumnsLayoutComponent */

  /***/
  function srcAppThemeLayoutsTwoColumnsTwoColumnsLayoutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwoColumnsLayoutComponent", function () {
      return TwoColumnsLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/@theme/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/footer/footer.component */
    "./src/app/@theme/components/footer/footer.component.ts");

    var _c0 = [[["nb-menu"]], [["router-outlet"]]];
    var _c1 = ["nb-menu", "router-outlet"];

    var TwoColumnsLayoutComponent =
    /*@__PURE__*/
    function () {
      var TwoColumnsLayoutComponent = function TwoColumnsLayoutComponent() {
        _classCallCheck(this, TwoColumnsLayoutComponent);
      };

      TwoColumnsLayoutComponent.ɵfac = function TwoColumnsLayoutComponent_Factory(t) {
        return new (t || TwoColumnsLayoutComponent)();
      };

      TwoColumnsLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TwoColumnsLayoutComponent,
        selectors: [["ngx-two-columns-layout"]],
        ngContentSelectors: _c1,
        decls: 10,
        vars: 0,
        consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]],
        template: function TwoColumnsLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-sidebar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-layout-column", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-layout-footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSidebarComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutFooterComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: [".nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}"]
      });
      return TwoColumnsLayoutComponent;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/pipes/capitalize.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/@theme/pipes/capitalize.pipe.ts ***!
    \*************************************************/

  /*! exports provided: CapitalizePipe */

  /***/
  function srcAppThemePipesCapitalizePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function () {
      return CapitalizePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CapitalizePipe =
    /*@__PURE__*/
    function () {
      var CapitalizePipe =
      /*#__PURE__*/
      function () {
        function CapitalizePipe() {
          _classCallCheck(this, CapitalizePipe);
        }

        _createClass(CapitalizePipe, [{
          key: "transform",
          value: function transform(input) {
            return input && input.length ? input.charAt(0).toUpperCase() + input.slice(1).toLowerCase() : input;
          }
        }]);

        return CapitalizePipe;
      }();

      CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) {
        return new (t || CapitalizePipe)();
      };

      CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ngxCapitalize",
        type: CapitalizePipe,
        pure: true
      });
      return CapitalizePipe;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/pipes/index.ts":
  /*!***************************************!*\
    !*** ./src/app/@theme/pipes/index.ts ***!
    \***************************************/

  /*! exports provided: CapitalizePipe, PluralPipe, RoundPipe, TimingPipe, NumberWithCommasPipe */

  /***/
  function srcAppThemePipesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./capitalize.pipe */
    "./src/app/@theme/pipes/capitalize.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function () {
      return _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__["CapitalizePipe"];
    });
    /* harmony import */


    var _plural_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./plural.pipe */
    "./src/app/@theme/pipes/plural.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PluralPipe", function () {
      return _plural_pipe__WEBPACK_IMPORTED_MODULE_1__["PluralPipe"];
    });
    /* harmony import */


    var _round_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./round.pipe */
    "./src/app/@theme/pipes/round.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoundPipe", function () {
      return _round_pipe__WEBPACK_IMPORTED_MODULE_2__["RoundPipe"];
    });
    /* harmony import */


    var _timing_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./timing.pipe */
    "./src/app/@theme/pipes/timing.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TimingPipe", function () {
      return _timing_pipe__WEBPACK_IMPORTED_MODULE_3__["TimingPipe"];
    });
    /* harmony import */


    var _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./number-with-commas.pipe */
    "./src/app/@theme/pipes/number-with-commas.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function () {
      return _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__["NumberWithCommasPipe"];
    });
    /***/

  },

  /***/
  "./src/app/@theme/pipes/number-with-commas.pipe.ts":
  /*!*********************************************************!*\
    !*** ./src/app/@theme/pipes/number-with-commas.pipe.ts ***!
    \*********************************************************/

  /*! exports provided: NumberWithCommasPipe */

  /***/
  function srcAppThemePipesNumberWithCommasPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function () {
      return NumberWithCommasPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NumberWithCommasPipe =
    /*@__PURE__*/
    function () {
      var NumberWithCommasPipe =
      /*#__PURE__*/
      function () {
        function NumberWithCommasPipe() {
          _classCallCheck(this, NumberWithCommasPipe);
        }

        _createClass(NumberWithCommasPipe, [{
          key: "transform",
          value: function transform(input) {
            return new Intl.NumberFormat().format(input);
          }
        }]);

        return NumberWithCommasPipe;
      }();

      NumberWithCommasPipe.ɵfac = function NumberWithCommasPipe_Factory(t) {
        return new (t || NumberWithCommasPipe)();
      };

      NumberWithCommasPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ngxNumberWithCommas",
        type: NumberWithCommasPipe,
        pure: true
      });
      return NumberWithCommasPipe;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/pipes/plural.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/@theme/pipes/plural.pipe.ts ***!
    \*********************************************/

  /*! exports provided: PluralPipe */

  /***/
  function srcAppThemePipesPluralPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PluralPipe", function () {
      return PluralPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PluralPipe =
    /*@__PURE__*/
    function () {
      var PluralPipe =
      /*#__PURE__*/
      function () {
        function PluralPipe() {
          _classCallCheck(this, PluralPipe);
        }

        _createClass(PluralPipe, [{
          key: "transform",
          value: function transform(input, label) {
            var pluralLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            input = input || 0;
            return input === 1 ? "".concat(input, " ").concat(label) : pluralLabel ? "".concat(input, " ").concat(pluralLabel) : "".concat(input, " ").concat(label, "s");
          }
        }]);

        return PluralPipe;
      }();

      PluralPipe.ɵfac = function PluralPipe_Factory(t) {
        return new (t || PluralPipe)();
      };

      PluralPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ngxPlural",
        type: PluralPipe,
        pure: true
      });
      return PluralPipe;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/pipes/round.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/@theme/pipes/round.pipe.ts ***!
    \********************************************/

  /*! exports provided: RoundPipe */

  /***/
  function srcAppThemePipesRoundPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoundPipe", function () {
      return RoundPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RoundPipe =
    /*@__PURE__*/
    function () {
      var RoundPipe =
      /*#__PURE__*/
      function () {
        function RoundPipe() {
          _classCallCheck(this, RoundPipe);
        }

        _createClass(RoundPipe, [{
          key: "transform",
          value: function transform(input) {
            return Math.round(input);
          }
        }]);

        return RoundPipe;
      }();

      RoundPipe.ɵfac = function RoundPipe_Factory(t) {
        return new (t || RoundPipe)();
      };

      RoundPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ngxRound",
        type: RoundPipe,
        pure: true
      });
      return RoundPipe;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/pipes/timing.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/@theme/pipes/timing.pipe.ts ***!
    \*********************************************/

  /*! exports provided: TimingPipe */

  /***/
  function srcAppThemePipesTimingPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimingPipe", function () {
      return TimingPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TimingPipe =
    /*@__PURE__*/
    function () {
      var TimingPipe =
      /*#__PURE__*/
      function () {
        function TimingPipe() {
          _classCallCheck(this, TimingPipe);
        }

        _createClass(TimingPipe, [{
          key: "transform",
          value: function transform(time) {
            if (time) {
              var minutes = Math.floor(time / 60);
              var seconds = Math.floor(time % 60);
              return "".concat(this.initZero(minutes)).concat(minutes, ":").concat(this.initZero(seconds)).concat(seconds);
            }

            return '00:00';
          }
        }, {
          key: "initZero",
          value: function initZero(time) {
            return time < 10 ? '0' : '';
          }
        }]);

        return TimingPipe;
      }();

      TimingPipe.ɵfac = function TimingPipe_Factory(t) {
        return new (t || TimingPipe)();
      };

      TimingPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "timing",
        type: TimingPipe,
        pure: true
      });
      return TimingPipe;
    }();
    /***/

  },

  /***/
  "./src/app/@theme/styles/theme.corporate.ts":
  /*!**************************************************!*\
    !*** ./src/app/@theme/styles/theme.corporate.ts ***!
    \**************************************************/

  /*! exports provided: CORPORATE_THEME */

  /***/
  function srcAppThemeStylesThemeCorporateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CORPORATE_THEME", function () {
      return CORPORATE_THEME;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["CORPORATE_THEME"].variables;
    var CORPORATE_THEME = {
      name: 'corporate',
      base: 'corporate',
      variables: {
        temperature: {
          arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
          arcEmpty: baseThemeVariables.bg2,
          thumbBg: baseThemeVariables.bg2,
          thumbBorder: '#ffa36b'
        },
        solar: {
          gradientLeft: baseThemeVariables.primary,
          gradientRight: baseThemeVariables.primary,
          shadowColor: 'rgba(0, 0, 0, 0)',
          secondSeriesFill: baseThemeVariables.bg2,
          radius: ['80%', '90%']
        },
        traffic: {
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          yAxisSplitLine: 'rgba(0, 0, 0, 0)',
          lineBg: baseThemeVariables.primary,
          lineShadowBlur: '0',
          itemColor: baseThemeVariables.border4,
          itemBorderColor: baseThemeVariables.border4,
          itemEmphasisBorderColor: baseThemeVariables.primaryLight,
          shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          shadowLineShadow: 'rgba(0, 0, 0, 0)',
          gradFrom: baseThemeVariables.bg,
          gradTo: baseThemeVariables.bg
        },
        electricity: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: baseThemeVariables.fgText,
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          axisLineColor: baseThemeVariables.border3,
          xAxisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'solid',
          lineWidth: '4',
          lineGradFrom: baseThemeVariables.primary,
          lineGradTo: baseThemeVariables.primary,
          lineShadow: 'rgba(0, 0, 0, 0)',
          areaGradFrom: 'rgba(0, 0, 0, 0)',
          areaGradTo: 'rgba(0, 0, 0, 0)',
          shadowLineDarkBg: 'rgba(0, 0, 0, 0)'
        },
        bubbleMap: {
          titleColor: baseThemeVariables.fgText,
          areaColor: baseThemeVariables.bg4,
          areaHoverColor: baseThemeVariables.fgHighlight,
          areaBorderColor: baseThemeVariables.border5
        },
        profitBarAnimationEchart: {
          textColor: baseThemeVariables.fgText,
          firstAnimationBarColor: baseThemeVariables.primary,
          secondAnimationBarColor: baseThemeVariables.success,
          splitLineStyleOpacity: '1',
          splitLineStyleWidth: '1',
          splitLineStyleColor: baseThemeVariables.separator,
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '16',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipBorderWidth: '1',
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
        },
        trafficBarEchart: {
          gradientFrom: baseThemeVariables.warningLight,
          gradientTo: baseThemeVariables.warning,
          shadow: baseThemeVariables.warningLight,
          shadowBlur: '0',
          axisTextColor: baseThemeVariables.fgText,
          axisFontSize: '12',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal'
        },
        countryOrders: {
          countryBorderColor: baseThemeVariables.border4,
          countryFillColor: baseThemeVariables.bg4,
          countryBorderWidth: '1',
          hoveredCountryBorderColor: baseThemeVariables.primary,
          hoveredCountryFillColor: baseThemeVariables.primaryLight,
          hoveredCountryBorderWidth: '1',
          chartAxisLineColor: baseThemeVariables.border4,
          chartAxisTextColor: baseThemeVariables.fg,
          chartAxisFontSize: '16',
          chartGradientTo: baseThemeVariables.primary,
          chartGradientFrom: baseThemeVariables.primaryLight,
          chartAxisSplitLine: baseThemeVariables.separator,
          chartShadowLineColor: baseThemeVariables.primaryLight,
          chartLineBottomShadowColor: baseThemeVariables.primary,
          chartInnerLineColor: baseThemeVariables.bg2
        },
        echarts: {
          bg: baseThemeVariables.bg,
          textColor: baseThemeVariables.fgText,
          axisLineColor: baseThemeVariables.fgText,
          splitLineColor: baseThemeVariables.separator,
          itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
          tooltipBackgroundColor: baseThemeVariables.primary,
          areaOpacity: '0.7'
        },
        chartjs: {
          axisLineColor: baseThemeVariables.separator,
          textColor: baseThemeVariables.fgText
        },
        orders: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: 'rgba(0, 0, 0, 0)',
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '20',
          axisLineColor: baseThemeVariables.border4,
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'solid',
          lineWidth: '4',
          // first line
          firstAreaGradFrom: baseThemeVariables.bg3,
          firstAreaGradTo: baseThemeVariables.bg3,
          firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          // second line
          secondLineGradFrom: baseThemeVariables.primary,
          secondLineGradTo: baseThemeVariables.primary,
          secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
          secondAreaGradTo: 'rgba(0, 0, 0, 0)',
          secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          // third line
          thirdLineGradFrom: baseThemeVariables.success,
          thirdLineGradTo: baseThemeVariables.successLight,
          thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
          thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
          thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)'
        },
        profit: {
          bg: baseThemeVariables.bg,
          textColor: baseThemeVariables.fgText,
          axisLineColor: baseThemeVariables.border4,
          splitLineColor: baseThemeVariables.separator,
          areaOpacity: '1',
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          // first bar
          firstLineGradFrom: baseThemeVariables.bg3,
          firstLineGradTo: baseThemeVariables.bg3,
          firstLineShadow: 'rgba(0, 0, 0, 0)',
          // second bar
          secondLineGradFrom: baseThemeVariables.primary,
          secondLineGradTo: baseThemeVariables.primary,
          secondLineShadow: 'rgba(0, 0, 0, 0)',
          // third bar
          thirdLineGradFrom: baseThemeVariables.success,
          thirdLineGradTo: baseThemeVariables.success,
          thirdLineShadow: 'rgba(0, 0, 0, 0)'
        },
        orderProfitLegend: {
          firstItem: baseThemeVariables.success,
          secondItem: baseThemeVariables.primary,
          thirdItem: baseThemeVariables.bg3
        },
        visitors: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: 'rgba(0, 0, 0, 0)',
          tooltipLineWidth: '1',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '20',
          axisLineColor: baseThemeVariables.border4,
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'dotted',
          lineWidth: '6',
          lineGradFrom: '#ffffff',
          lineGradTo: '#ffffff',
          lineShadow: 'rgba(0, 0, 0, 0)',
          areaGradFrom: baseThemeVariables.primary,
          areaGradTo: baseThemeVariables.primaryLight,
          innerLineStyle: 'solid',
          innerLineWidth: '1',
          innerAreaGradFrom: baseThemeVariables.success,
          innerAreaGradTo: baseThemeVariables.success
        },
        visitorsLegend: {
          firstIcon: baseThemeVariables.success,
          secondIcon: baseThemeVariables.primary
        },
        visitorsPie: {
          firstPieGradientLeft: baseThemeVariables.success,
          firstPieGradientRight: baseThemeVariables.success,
          firstPieShadowColor: 'rgba(0, 0, 0, 0)',
          firstPieRadius: ['65%', '90%'],
          secondPieGradientLeft: baseThemeVariables.warning,
          secondPieGradientRight: baseThemeVariables.warningLight,
          secondPieShadowColor: 'rgba(0, 0, 0, 0)',
          secondPieRadius: ['63%', '92%'],
          shadowOffsetX: '-4',
          shadowOffsetY: '-4'
        },
        visitorsPieLegend: {
          firstSection: baseThemeVariables.warning,
          secondSection: baseThemeVariables.success
        },
        earningPie: {
          radius: ['65%', '100%'],
          center: ['50%', '50%'],
          fontSize: '22',
          firstPieGradientLeft: baseThemeVariables.success,
          firstPieGradientRight: baseThemeVariables.success,
          firstPieShadowColor: 'rgba(0, 0, 0, 0)',
          secondPieGradientLeft: baseThemeVariables.primary,
          secondPieGradientRight: baseThemeVariables.primary,
          secondPieShadowColor: 'rgba(0, 0, 0, 0)',
          thirdPieGradientLeft: baseThemeVariables.warning,
          thirdPieGradientRight: baseThemeVariables.warning,
          thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
        },
        earningLine: {
          gradFrom: baseThemeVariables.primary,
          gradTo: baseThemeVariables.primary,
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '16',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipBorderWidth: '1',
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/@theme/styles/theme.cosmic.ts":
  /*!***********************************************!*\
    !*** ./src/app/@theme/styles/theme.cosmic.ts ***!
    \***********************************************/

  /*! exports provided: COSMIC_THEME */

  /***/
  function srcAppThemeStylesThemeCosmicTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COSMIC_THEME", function () {
      return COSMIC_THEME;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["COSMIC_THEME"].variables;
    var COSMIC_THEME = {
      name: 'cosmic',
      base: 'cosmic',
      variables: {
        temperature: {
          arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
          arcEmpty: baseThemeVariables.bg2,
          thumbBg: '#ffffff',
          thumbBorder: '#ffffff'
        },
        solar: {
          gradientLeft: baseThemeVariables.primary,
          gradientRight: baseThemeVariables.primary,
          shadowColor: 'rgba(0, 0, 0, 0)',
          secondSeriesFill: baseThemeVariables.bg2,
          radius: ['70%', '90%']
        },
        traffic: {
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          yAxisSplitLine: baseThemeVariables.separator,
          lineBg: baseThemeVariables.border2,
          lineShadowBlur: '14',
          itemColor: baseThemeVariables.border2,
          itemBorderColor: baseThemeVariables.border2,
          itemEmphasisBorderColor: baseThemeVariables.primary,
          shadowLineDarkBg: baseThemeVariables.border3,
          shadowLineShadow: baseThemeVariables.border3,
          gradFrom: baseThemeVariables.bg,
          gradTo: baseThemeVariables.bg2
        },
        electricity: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: baseThemeVariables.fgText,
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          axisLineColor: baseThemeVariables.border3,
          xAxisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.border2,
          lineStyle: 'dotted',
          lineWidth: '6',
          lineGradFrom: baseThemeVariables.success,
          lineGradTo: baseThemeVariables.warning,
          lineShadow: baseThemeVariables.bg4,
          areaGradFrom: baseThemeVariables.bg2,
          areaGradTo: baseThemeVariables.bg3,
          shadowLineDarkBg: baseThemeVariables.bg3
        },
        bubbleMap: {
          titleColor: baseThemeVariables.fgText,
          areaColor: baseThemeVariables.bg4,
          areaHoverColor: baseThemeVariables.fgHighlight,
          areaBorderColor: baseThemeVariables.border5
        },
        profitBarAnimationEchart: {
          textColor: baseThemeVariables.fgText,
          firstAnimationBarColor: baseThemeVariables.primary,
          secondAnimationBarColor: baseThemeVariables.success,
          splitLineStyleOpacity: '1',
          splitLineStyleWidth: '1',
          splitLineStyleColor: baseThemeVariables.border2,
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '16',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipBorderWidth: '1',
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
        },
        trafficBarEchart: {
          gradientFrom: baseThemeVariables.warningLight,
          gradientTo: baseThemeVariables.warning,
          shadow: baseThemeVariables.warningLight,
          shadowBlur: '5',
          axisTextColor: baseThemeVariables.fgText,
          axisFontSize: '12',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal'
        },
        countryOrders: {
          countryBorderColor: baseThemeVariables.border4,
          countryFillColor: baseThemeVariables.bg3,
          countryBorderWidth: '1',
          hoveredCountryBorderColor: baseThemeVariables.primary,
          hoveredCountryFillColor: baseThemeVariables.primaryLight,
          hoveredCountryBorderWidth: '1',
          chartAxisLineColor: baseThemeVariables.border4,
          chartAxisTextColor: baseThemeVariables.fg,
          chartAxisFontSize: '16',
          chartGradientTo: baseThemeVariables.primary,
          chartGradientFrom: baseThemeVariables.primaryLight,
          chartAxisSplitLine: baseThemeVariables.separator,
          chartShadowLineColor: baseThemeVariables.primaryLight,
          chartLineBottomShadowColor: baseThemeVariables.primary,
          chartInnerLineColor: baseThemeVariables.bg2
        },
        echarts: {
          bg: baseThemeVariables.bg,
          textColor: baseThemeVariables.fgText,
          axisLineColor: baseThemeVariables.fgText,
          splitLineColor: baseThemeVariables.separator,
          itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
          tooltipBackgroundColor: baseThemeVariables.primary,
          areaOpacity: '1'
        },
        chartjs: {
          axisLineColor: baseThemeVariables.separator,
          textColor: baseThemeVariables.fgText
        },
        orders: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: 'rgba(0, 0, 0, 0)',
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '20',
          axisLineColor: baseThemeVariables.border4,
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'solid',
          lineWidth: '4',
          // first line
          firstAreaGradFrom: baseThemeVariables.bg2,
          firstAreaGradTo: baseThemeVariables.bg2,
          firstShadowLineDarkBg: baseThemeVariables.bg2,
          // second line
          secondLineGradFrom: baseThemeVariables.primary,
          secondLineGradTo: baseThemeVariables.primary,
          secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
          secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
          secondShadowLineDarkBg: baseThemeVariables.primary,
          // third line
          thirdLineGradFrom: baseThemeVariables.success,
          thirdLineGradTo: baseThemeVariables.successLight,
          thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
          thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
          thirdShadowLineDarkBg: baseThemeVariables.success
        },
        profit: {
          bg: baseThemeVariables.bg,
          textColor: baseThemeVariables.fgText,
          axisLineColor: baseThemeVariables.border4,
          splitLineColor: baseThemeVariables.separator,
          areaOpacity: '1',
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          // first bar
          firstLineGradFrom: baseThemeVariables.bg2,
          firstLineGradTo: baseThemeVariables.bg2,
          firstLineShadow: 'rgba(0, 0, 0, 0)',
          // second bar
          secondLineGradFrom: baseThemeVariables.primary,
          secondLineGradTo: baseThemeVariables.primary,
          secondLineShadow: 'rgba(0, 0, 0, 0)',
          // third bar
          thirdLineGradFrom: baseThemeVariables.success,
          thirdLineGradTo: baseThemeVariables.successLight,
          thirdLineShadow: 'rgba(0, 0, 0, 0)'
        },
        orderProfitLegend: {
          firstItem: baseThemeVariables.success,
          secondItem: baseThemeVariables.primary,
          thirdItem: baseThemeVariables.bg2
        },
        visitors: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: 'rgba(0, 0, 0, 0)',
          tooltipLineWidth: '1',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '20',
          axisLineColor: baseThemeVariables.border4,
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'dotted',
          lineWidth: '6',
          lineGradFrom: '#ffffff',
          lineGradTo: '#ffffff',
          lineShadow: 'rgba(0, 0, 0, 0)',
          areaGradFrom: baseThemeVariables.primary,
          areaGradTo: baseThemeVariables.primaryLight,
          innerLineStyle: 'solid',
          innerLineWidth: '1',
          innerAreaGradFrom: baseThemeVariables.success,
          innerAreaGradTo: baseThemeVariables.success
        },
        visitorsLegend: {
          firstIcon: baseThemeVariables.success,
          secondIcon: baseThemeVariables.primary
        },
        visitorsPie: {
          firstPieGradientLeft: baseThemeVariables.success,
          firstPieGradientRight: baseThemeVariables.successLight,
          firstPieShadowColor: 'rgba(0, 0, 0, 0)',
          firstPieRadius: ['70%', '90%'],
          secondPieGradientLeft: baseThemeVariables.warning,
          secondPieGradientRight: baseThemeVariables.warningLight,
          secondPieShadowColor: 'rgba(0, 0, 0, 0)',
          secondPieRadius: ['60%', '95%'],
          shadowOffsetX: '0',
          shadowOffsetY: '3'
        },
        visitorsPieLegend: {
          firstSection: baseThemeVariables.warning,
          secondSection: baseThemeVariables.success
        },
        earningPie: {
          radius: ['65%', '100%'],
          center: ['50%', '50%'],
          fontSize: '22',
          firstPieGradientLeft: baseThemeVariables.success,
          firstPieGradientRight: baseThemeVariables.success,
          firstPieShadowColor: 'rgba(0, 0, 0, 0)',
          secondPieGradientLeft: baseThemeVariables.primary,
          secondPieGradientRight: baseThemeVariables.primary,
          secondPieShadowColor: 'rgba(0, 0, 0, 0)',
          thirdPieGradientLeft: baseThemeVariables.warning,
          thirdPieGradientRight: baseThemeVariables.warning,
          thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
        },
        earningLine: {
          gradFrom: baseThemeVariables.primary,
          gradTo: baseThemeVariables.primary,
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '16',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipBorderWidth: '1',
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/@theme/styles/theme.dark.ts":
  /*!*********************************************!*\
    !*** ./src/app/@theme/styles/theme.dark.ts ***!
    \*********************************************/

  /*! exports provided: DARK_THEME */

  /***/
  function srcAppThemeStylesThemeDarkTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DARK_THEME", function () {
      return DARK_THEME;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["DARK_THEME"].variables;
    var DARK_THEME = {
      name: 'dark',
      base: 'dark',
      variables: {
        temperature: {
          arcFill: [baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary],
          arcEmpty: baseThemeVariables.bg2,
          thumbBg: baseThemeVariables.bg2,
          thumbBorder: baseThemeVariables.primary
        },
        solar: {
          gradientLeft: baseThemeVariables.primary,
          gradientRight: baseThemeVariables.primary,
          shadowColor: 'rgba(0, 0, 0, 0)',
          secondSeriesFill: baseThemeVariables.bg2,
          radius: ['80%', '90%']
        },
        traffic: {
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          yAxisSplitLine: baseThemeVariables.separator,
          lineBg: baseThemeVariables.border4,
          lineShadowBlur: '1',
          itemColor: baseThemeVariables.border4,
          itemBorderColor: baseThemeVariables.border4,
          itemEmphasisBorderColor: baseThemeVariables.primary,
          shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          shadowLineShadow: 'rgba(0, 0, 0, 0)',
          gradFrom: baseThemeVariables.bg2,
          gradTo: baseThemeVariables.bg2
        },
        electricity: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: baseThemeVariables.fgText,
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          axisLineColor: baseThemeVariables.border3,
          xAxisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'solid',
          lineWidth: '4',
          lineGradFrom: baseThemeVariables.primary,
          lineGradTo: baseThemeVariables.primary,
          lineShadow: 'rgba(0, 0, 0, 0)',
          areaGradFrom: baseThemeVariables.bg2,
          areaGradTo: baseThemeVariables.bg2,
          shadowLineDarkBg: 'rgba(0, 0, 0, 0)'
        },
        bubbleMap: {
          titleColor: baseThemeVariables.fgText,
          areaColor: baseThemeVariables.bg4,
          areaHoverColor: baseThemeVariables.fgHighlight,
          areaBorderColor: baseThemeVariables.border5
        },
        profitBarAnimationEchart: {
          textColor: baseThemeVariables.fgText,
          firstAnimationBarColor: baseThemeVariables.primary,
          secondAnimationBarColor: baseThemeVariables.success,
          splitLineStyleOpacity: '1',
          splitLineStyleWidth: '1',
          splitLineStyleColor: baseThemeVariables.separator,
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '16',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipBorderWidth: '1',
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
        },
        trafficBarEchart: {
          gradientFrom: baseThemeVariables.warningLight,
          gradientTo: baseThemeVariables.warning,
          shadow: baseThemeVariables.warningLight,
          shadowBlur: '0',
          axisTextColor: baseThemeVariables.fgText,
          axisFontSize: '12',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal'
        },
        countryOrders: {
          countryBorderColor: baseThemeVariables.border4,
          countryFillColor: baseThemeVariables.bg3,
          countryBorderWidth: '1',
          hoveredCountryBorderColor: baseThemeVariables.primary,
          hoveredCountryFillColor: baseThemeVariables.primaryLight,
          hoveredCountryBorderWidth: '1',
          chartAxisLineColor: baseThemeVariables.border4,
          chartAxisTextColor: baseThemeVariables.fg,
          chartAxisFontSize: '16',
          chartGradientTo: baseThemeVariables.primary,
          chartGradientFrom: baseThemeVariables.primaryLight,
          chartAxisSplitLine: baseThemeVariables.separator,
          chartShadowLineColor: baseThemeVariables.primaryLight,
          chartLineBottomShadowColor: baseThemeVariables.primary,
          chartInnerLineColor: baseThemeVariables.bg2
        },
        echarts: {
          bg: baseThemeVariables.bg,
          textColor: baseThemeVariables.fgText,
          axisLineColor: baseThemeVariables.fgText,
          splitLineColor: baseThemeVariables.separator,
          itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
          tooltipBackgroundColor: baseThemeVariables.primary,
          areaOpacity: '0.7'
        },
        chartjs: {
          axisLineColor: baseThemeVariables.separator,
          textColor: baseThemeVariables.fgText
        },
        orders: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: 'rgba(0, 0, 0, 0)',
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '20',
          axisLineColor: baseThemeVariables.border4,
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'solid',
          lineWidth: '4',
          // first line
          firstAreaGradFrom: baseThemeVariables.bg3,
          firstAreaGradTo: baseThemeVariables.bg3,
          firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          // second line
          secondLineGradFrom: baseThemeVariables.primary,
          secondLineGradTo: baseThemeVariables.primary,
          secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
          secondAreaGradTo: 'rgba(51, 102, 255, 0)',
          secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          // third line
          thirdLineGradFrom: baseThemeVariables.success,
          thirdLineGradTo: baseThemeVariables.successLight,
          thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
          thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
          thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)'
        },
        profit: {
          bg: baseThemeVariables.bg,
          textColor: baseThemeVariables.fgText,
          axisLineColor: baseThemeVariables.border4,
          splitLineColor: baseThemeVariables.separator,
          areaOpacity: '1',
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          // first bar
          firstLineGradFrom: baseThemeVariables.bg3,
          firstLineGradTo: baseThemeVariables.bg3,
          firstLineShadow: 'rgba(0, 0, 0, 0)',
          // second bar
          secondLineGradFrom: baseThemeVariables.primary,
          secondLineGradTo: baseThemeVariables.primary,
          secondLineShadow: 'rgba(0, 0, 0, 0)',
          // third bar
          thirdLineGradFrom: baseThemeVariables.success,
          thirdLineGradTo: baseThemeVariables.successLight,
          thirdLineShadow: 'rgba(0, 0, 0, 0)'
        },
        orderProfitLegend: {
          firstItem: baseThemeVariables.success,
          secondItem: baseThemeVariables.primary,
          thirdItem: baseThemeVariables.bg3
        },
        visitors: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: 'rgba(0, 0, 0, 0)',
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '20',
          axisLineColor: baseThemeVariables.border4,
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'dotted',
          lineWidth: '6',
          lineGradFrom: '#ffffff',
          lineGradTo: '#ffffff',
          lineShadow: 'rgba(0, 0, 0, 0)',
          areaGradFrom: baseThemeVariables.primary,
          areaGradTo: baseThemeVariables.primaryLight,
          innerLineStyle: 'solid',
          innerLineWidth: '1',
          innerAreaGradFrom: baseThemeVariables.success,
          innerAreaGradTo: baseThemeVariables.success
        },
        visitorsLegend: {
          firstIcon: baseThemeVariables.success,
          secondIcon: baseThemeVariables.primary
        },
        visitorsPie: {
          firstPieGradientLeft: baseThemeVariables.success,
          firstPieGradientRight: baseThemeVariables.success,
          firstPieShadowColor: 'rgba(0, 0, 0, 0)',
          firstPieRadius: ['70%', '90%'],
          secondPieGradientLeft: baseThemeVariables.warning,
          secondPieGradientRight: baseThemeVariables.warningLight,
          secondPieShadowColor: 'rgba(0, 0, 0, 0)',
          secondPieRadius: ['60%', '97%'],
          shadowOffsetX: '0',
          shadowOffsetY: '0'
        },
        visitorsPieLegend: {
          firstSection: baseThemeVariables.warning,
          secondSection: baseThemeVariables.success
        },
        earningPie: {
          radius: ['65%', '100%'],
          center: ['50%', '50%'],
          fontSize: '22',
          firstPieGradientLeft: baseThemeVariables.success,
          firstPieGradientRight: baseThemeVariables.success,
          firstPieShadowColor: 'rgba(0, 0, 0, 0)',
          secondPieGradientLeft: baseThemeVariables.primary,
          secondPieGradientRight: baseThemeVariables.primary,
          secondPieShadowColor: 'rgba(0, 0, 0, 0)',
          thirdPieGradientLeft: baseThemeVariables.warning,
          thirdPieGradientRight: baseThemeVariables.warning,
          thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
        },
        earningLine: {
          gradFrom: baseThemeVariables.primary,
          gradTo: baseThemeVariables.primary,
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '16',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipBorderWidth: '1',
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/@theme/styles/theme.default.ts":
  /*!************************************************!*\
    !*** ./src/app/@theme/styles/theme.default.ts ***!
    \************************************************/

  /*! exports provided: DEFAULT_THEME */

  /***/
  function srcAppThemeStylesThemeDefaultTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function () {
      return DEFAULT_THEME;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_THEME"].variables;
    var DEFAULT_THEME = {
      name: 'default',
      base: 'default',
      variables: {
        temperature: {
          arcFill: [baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary],
          arcEmpty: baseThemeVariables.bg2,
          thumbBg: baseThemeVariables.bg2,
          thumbBorder: baseThemeVariables.primary
        },
        solar: {
          gradientLeft: baseThemeVariables.primary,
          gradientRight: baseThemeVariables.primary,
          shadowColor: 'rgba(0, 0, 0, 0)',
          secondSeriesFill: baseThemeVariables.bg2,
          radius: ['80%', '90%']
        },
        traffic: {
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          yAxisSplitLine: baseThemeVariables.separator,
          lineBg: baseThemeVariables.border4,
          lineShadowBlur: '1',
          itemColor: baseThemeVariables.border4,
          itemBorderColor: baseThemeVariables.border4,
          itemEmphasisBorderColor: baseThemeVariables.primary,
          shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          shadowLineShadow: 'rgba(0, 0, 0, 0)',
          gradFrom: baseThemeVariables.bg2,
          gradTo: baseThemeVariables.bg2
        },
        electricity: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: baseThemeVariables.fgText,
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          axisLineColor: baseThemeVariables.border3,
          xAxisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'solid',
          lineWidth: '4',
          lineGradFrom: baseThemeVariables.primary,
          lineGradTo: baseThemeVariables.primary,
          lineShadow: 'rgba(0, 0, 0, 0)',
          areaGradFrom: baseThemeVariables.bg2,
          areaGradTo: baseThemeVariables.bg2,
          shadowLineDarkBg: 'rgba(0, 0, 0, 0)'
        },
        bubbleMap: {
          titleColor: baseThemeVariables.fgText,
          areaColor: baseThemeVariables.bg4,
          areaHoverColor: baseThemeVariables.fgHighlight,
          areaBorderColor: baseThemeVariables.border5
        },
        profitBarAnimationEchart: {
          textColor: baseThemeVariables.fgText,
          firstAnimationBarColor: baseThemeVariables.primary,
          secondAnimationBarColor: baseThemeVariables.success,
          splitLineStyleOpacity: '1',
          splitLineStyleWidth: '1',
          splitLineStyleColor: baseThemeVariables.separator,
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '16',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipBorderWidth: '1',
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
        },
        trafficBarEchart: {
          gradientFrom: baseThemeVariables.warningLight,
          gradientTo: baseThemeVariables.warning,
          shadow: baseThemeVariables.warningLight,
          shadowBlur: '0',
          axisTextColor: baseThemeVariables.fgText,
          axisFontSize: '12',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal'
        },
        countryOrders: {
          countryBorderColor: baseThemeVariables.border4,
          countryFillColor: baseThemeVariables.bg3,
          countryBorderWidth: '1',
          hoveredCountryBorderColor: baseThemeVariables.primary,
          hoveredCountryFillColor: baseThemeVariables.primaryLight,
          hoveredCountryBorderWidth: '1',
          chartAxisLineColor: baseThemeVariables.border4,
          chartAxisTextColor: baseThemeVariables.fg,
          chartAxisFontSize: '16',
          chartGradientTo: baseThemeVariables.primary,
          chartGradientFrom: baseThemeVariables.primaryLight,
          chartAxisSplitLine: baseThemeVariables.separator,
          chartShadowLineColor: baseThemeVariables.primaryLight,
          chartLineBottomShadowColor: baseThemeVariables.primary,
          chartInnerLineColor: baseThemeVariables.bg2
        },
        echarts: {
          bg: baseThemeVariables.bg,
          textColor: baseThemeVariables.fgText,
          axisLineColor: baseThemeVariables.fgText,
          splitLineColor: baseThemeVariables.separator,
          itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
          tooltipBackgroundColor: baseThemeVariables.primary,
          areaOpacity: '0.7'
        },
        chartjs: {
          axisLineColor: baseThemeVariables.separator,
          textColor: baseThemeVariables.fgText
        },
        orders: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: 'rgba(0, 0, 0, 0)',
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '20',
          axisLineColor: baseThemeVariables.border4,
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'solid',
          lineWidth: '4',
          // first line
          firstAreaGradFrom: baseThemeVariables.bg3,
          firstAreaGradTo: baseThemeVariables.bg3,
          firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          // second line
          secondLineGradFrom: baseThemeVariables.primary,
          secondLineGradTo: baseThemeVariables.primary,
          secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
          secondAreaGradTo: 'rgba(51, 102, 255, 0)',
          secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          // third line
          thirdLineGradFrom: baseThemeVariables.success,
          thirdLineGradTo: baseThemeVariables.successLight,
          thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
          thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
          thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)'
        },
        profit: {
          bg: baseThemeVariables.bg,
          textColor: baseThemeVariables.fgText,
          axisLineColor: baseThemeVariables.border4,
          splitLineColor: baseThemeVariables.separator,
          areaOpacity: '1',
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          // first bar
          firstLineGradFrom: baseThemeVariables.bg3,
          firstLineGradTo: baseThemeVariables.bg3,
          firstLineShadow: 'rgba(0, 0, 0, 0)',
          // second bar
          secondLineGradFrom: baseThemeVariables.primary,
          secondLineGradTo: baseThemeVariables.primary,
          secondLineShadow: 'rgba(0, 0, 0, 0)',
          // third bar
          thirdLineGradFrom: baseThemeVariables.success,
          thirdLineGradTo: baseThemeVariables.successLight,
          thirdLineShadow: 'rgba(0, 0, 0, 0)'
        },
        orderProfitLegend: {
          firstItem: baseThemeVariables.success,
          secondItem: baseThemeVariables.primary,
          thirdItem: baseThemeVariables.bg3
        },
        visitors: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: 'rgba(0, 0, 0, 0)',
          tooltipLineWidth: '1',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '20',
          axisLineColor: baseThemeVariables.border4,
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'dotted',
          lineWidth: '6',
          lineGradFrom: '#ffffff',
          lineGradTo: '#ffffff',
          lineShadow: 'rgba(0, 0, 0, 0)',
          areaGradFrom: baseThemeVariables.primary,
          areaGradTo: baseThemeVariables.primaryLight,
          innerLineStyle: 'solid',
          innerLineWidth: '1',
          innerAreaGradFrom: baseThemeVariables.success,
          innerAreaGradTo: baseThemeVariables.success
        },
        visitorsLegend: {
          firstIcon: baseThemeVariables.success,
          secondIcon: baseThemeVariables.primary
        },
        visitorsPie: {
          firstPieGradientLeft: baseThemeVariables.success,
          firstPieGradientRight: baseThemeVariables.success,
          firstPieShadowColor: 'rgba(0, 0, 0, 0)',
          firstPieRadius: ['70%', '90%'],
          secondPieGradientLeft: baseThemeVariables.warning,
          secondPieGradientRight: baseThemeVariables.warningLight,
          secondPieShadowColor: 'rgba(0, 0, 0, 0)',
          secondPieRadius: ['60%', '97%'],
          shadowOffsetX: '0',
          shadowOffsetY: '0'
        },
        visitorsPieLegend: {
          firstSection: baseThemeVariables.warning,
          secondSection: baseThemeVariables.success
        },
        earningPie: {
          radius: ['65%', '100%'],
          center: ['50%', '50%'],
          fontSize: '22',
          firstPieGradientLeft: baseThemeVariables.success,
          firstPieGradientRight: baseThemeVariables.success,
          firstPieShadowColor: 'rgba(0, 0, 0, 0)',
          secondPieGradientLeft: baseThemeVariables.primary,
          secondPieGradientRight: baseThemeVariables.primary,
          secondPieShadowColor: 'rgba(0, 0, 0, 0)',
          thirdPieGradientLeft: baseThemeVariables.warning,
          thirdPieGradientRight: baseThemeVariables.warning,
          thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
        },
        earningLine: {
          gradFrom: baseThemeVariables.primary,
          gradTo: baseThemeVariables.primary,
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '16',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipBorderWidth: '1',
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/@theme/theme.module.ts":
  /*!****************************************!*\
    !*** ./src/app/@theme/theme.module.ts ***!
    \****************************************/

  /*! exports provided: ThemeModule */

  /***/
  function srcAppThemeThemeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
      return ThemeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _nebular_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/security */
    "./node_modules/@nebular/security/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components */
    "./src/app/@theme/components/index.ts");
    /* harmony import */


    var _pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pipes */
    "./src/app/@theme/pipes/index.ts");
    /* harmony import */


    var _layouts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts */
    "./src/app/@theme/layouts/index.ts");
    /* harmony import */


    var _styles_theme_default__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./styles/theme.default */
    "./src/app/@theme/styles/theme.default.ts");
    /* harmony import */


    var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./styles/theme.cosmic */
    "./src/app/@theme/styles/theme.cosmic.ts");
    /* harmony import */


    var _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./styles/theme.corporate */
    "./src/app/@theme/styles/theme.corporate.ts");
    /* harmony import */


    var _styles_theme_dark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./styles/theme.dark */
    "./src/app/@theme/styles/theme.dark.ts");

    var NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSearchModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"], _nebular_security__WEBPACK_IMPORTED_MODULE_4__["NbSecurityModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbPopoverModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTooltipModule"]];
    var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["SearchInputComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["TinyMCEComponent"], _layouts__WEBPACK_IMPORTED_MODULE_7__["OneColumnLayoutComponent"], _layouts__WEBPACK_IMPORTED_MODULE_7__["ThreeColumnsLayoutComponent"], _layouts__WEBPACK_IMPORTED_MODULE_7__["TwoColumnsLayoutComponent"]];
    var PIPES = [_pipes__WEBPACK_IMPORTED_MODULE_6__["CapitalizePipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["PluralPipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["TimingPipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["NumberWithCommasPipe"]];

    var ThemeModule =
    /*@__PURE__*/
    function () {
      var ThemeModule =
      /*#__PURE__*/
      function () {
        function ThemeModule() {
          _classCallCheck(this, ThemeModule);
        }

        _createClass(ThemeModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: ThemeModule,
              providers: _toConsumableArray(_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeModule"].forRoot({
                name: 'corporate'
              }, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_THEME"], _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_9__["COSMIC_THEME"], _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_10__["CORPORATE_THEME"], _styles_theme_dark__WEBPACK_IMPORTED_MODULE_11__["DARK_THEME"]]).providers)
            };
          }
        }]);

        return ThemeModule;
      }();

      ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ThemeModule
      });
      ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ThemeModule_Factory(t) {
          return new (t || ThemeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]].concat(NB_MODULES), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
      return ThemeModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeModule, {
        declarations: [_components__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["SearchInputComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["TinyMCEComponent"], _layouts__WEBPACK_IMPORTED_MODULE_7__["OneColumnLayoutComponent"], _layouts__WEBPACK_IMPORTED_MODULE_7__["ThreeColumnsLayoutComponent"], _layouts__WEBPACK_IMPORTED_MODULE_7__["TwoColumnsLayoutComponent"], _pipes__WEBPACK_IMPORTED_MODULE_6__["CapitalizePipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["PluralPipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["TimingPipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["NumberWithCommasPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSearchModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"], _nebular_security__WEBPACK_IMPORTED_MODULE_4__["NbSecurityModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbListModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbPopoverModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbTooltipModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pipes__WEBPACK_IMPORTED_MODULE_6__["CapitalizePipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["PluralPipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["TimingPipe"], _pipes__WEBPACK_IMPORTED_MODULE_6__["NumberWithCommasPipe"], _components__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["SearchInputComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["TinyMCEComponent"], _layouts__WEBPACK_IMPORTED_MODULE_7__["OneColumnLayoutComponent"], _layouts__WEBPACK_IMPORTED_MODULE_7__["ThreeColumnsLayoutComponent"], _layouts__WEBPACK_IMPORTED_MODULE_7__["TwoColumnsLayoutComponent"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _authentication_auth_guards_login_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./authentication/auth/guards/login.auth.guard */
    "./src/app/authentication/auth/guards/login.auth.guard.ts");
    /* harmony import */


    var _authentication_auth_guards_student_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication/auth/guards/student.auth.guard */
    "./src/app/authentication/auth/guards/student.auth.guard.ts");
    /* harmony import */


    var _authentication_auth_guards_employee_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication/auth/guards/employee.auth.guard */
    "./src/app/authentication/auth/guards/employee.auth.guard.ts");
    /* harmony import */


    var _authentication_auth_guards_institute_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication/auth/guards/institute.auth.guard */
    "./src/app/authentication/auth/guards/institute.auth.guard.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var routes = [{
      path: 'admin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        35).then(__webpack_require__.bind(null,
        /*! ./admin/admin.module */
        "./src/app/admin/admin.module.ts")).then(function (m) {
          return m.AdminModule;
        });
      },
      canActivate: []
    }, {
      path: 'institute',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e("common"), __webpack_require__.e(38)]).then(__webpack_require__.bind(null,
        /*! ./institute/institute.module */
        "./src/app/institute/institute.module.ts")).then(function (m) {
          return m.InstituteModule;
        });
      },
      canActivate: [_authentication_auth_guards_institute_auth_guard__WEBPACK_IMPORTED_MODULE_3__["InstituteAuthGuard"]]
    }, {
      path: 'employee',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e("common"), __webpack_require__.e(44)]).then(__webpack_require__.bind(null,
        /*! ./employee/employee.module */
        "./src/app/employee/employee.module.ts")).then(function (m) {
          return m.EmployeeModule;
        });
      },
      canActivate: [_authentication_auth_guards_employee_auth_guard__WEBPACK_IMPORTED_MODULE_2__["EmployeeAuthGuard"]]
    }, {
      path: 'student',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() */
        [__webpack_require__.e("common"), __webpack_require__.e(39)]).then(__webpack_require__.bind(null,
        /*! ./student/student.module */
        "./src/app/student/student.module.ts")).then(function (m) {
          return m.StudentModule;
        });
      },
      canActivate: [_authentication_auth_guards_student_auth_guard__WEBPACK_IMPORTED_MODULE_1__["StudentAuthGuard"]]
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() */
        42).then(__webpack_require__.bind(null,
        /*! ./content/content.module */
        "./src/app/content/content.module.ts")).then(function (m) {
          return m.ContentModule;
        });
      },
      canActivate: [_authentication_auth_guards_login_auth_guard__WEBPACK_IMPORTED_MODULE_0__["LoginAuthGuard"]]
    }, {
      path: '**',
      redirectTo: '/'
    }];
    var config = {
      useHash: true,
      relativeLinkResolution: 'corrected'
    };

    var AppRoutingModule =
    /*@__PURE__*/
    function () {
      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, config)], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
      return AppRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./@core/utils/analytics.service */
    "./src/app/@core/utils/analytics.service.ts");
    /* harmony import */


    var _core_utils_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./@core/utils/seo.service */
    "./src/app/@core/utils/seo.service.ts");
    /* harmony import */


    var _authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication/auth/auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /**
     * @license
     * Copyright Akveo. All Rights Reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     */


    var AppComponent =
    /*@__PURE__*/
    function () {
      var AppComponent =
      /*#__PURE__*/
      function () {
        function AppComponent(analytics, seoService, authService) {
          _classCallCheck(this, AppComponent);

          this.analytics = analytics;
          this.seoService = seoService;
          this.authService = authService; // this.preventBackButton();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.analytics.trackPageViews();
            this.seoService.trackCanonicalChanges();
            var userData = JSON.parse(localStorage.getItem('userData'));

            if (!userData) {
              return;
            }

            this.authService.autoLogin(userData);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_utils_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_auth_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["ngx-app"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        encapsulation: 2
      });
      return AppComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./@core/core.module */
    "./src/app/@core/core.module.ts");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /**
     * @license
     * Copyright Akveo. All Rights Reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     */


    var AppModule =
    /*@__PURE__*/
    function () {
      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_0__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSidebarModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbMenuModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbDatepickerModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbDialogModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbWindowModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbToastrModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbChatModule"].forRoot({
          messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY'
        }), _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(), _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"].forRoot()]]
      });
      return AppModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_0__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbWindowModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbToastrModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_9__["NbChatModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_6__["ThemeModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/authentication/auth/auth-interpreter/auth-interceptor.service.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/authentication/auth/auth-interpreter/auth-interceptor.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: AuthInterceptorService */

  /***/
  function srcAppAuthenticationAuthAuthInterpreterAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function () {
      return AuthInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");

    var AuthInterceptorService =
    /*@__PURE__*/
    function () {
      var AuthInterceptorService =
      /*#__PURE__*/
      function () {
        function AuthInterceptorService(authService) {
          _classCallCheck(this, AuthInterceptorService);

          this.authService = authService;
        }

        _createClass(AuthInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this9 = this;

            return this.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(function (user) {
              if (!user) {
                return next.handle(req);
              }

              var token = 'Bearer ' + _this9.authService.getUserToken();

              var modifiedReq = req.clone({
                headers: req.headers.append('Authorization', token)
              });
              return next.handle(modifiedReq);
            }));
          }
        }]);

        return AuthInterceptorService;
      }();

      AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
        return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptorService,
        factory: AuthInterceptorService.ɵfac
      });
      return AuthInterceptorService;
    }();
    /***/

  },

  /***/
  "./src/app/authentication/auth/auth-model/user.model.ts":
  /*!**************************************************************!*\
    !*** ./src/app/authentication/auth/auth-model/user.model.ts ***!
    \**************************************************************/

  /*! exports provided: User */

  /***/
  function srcAppAuthenticationAuthAuthModelUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User =
    /*#__PURE__*/
    function () {
      function User(_id, name, email, phone, userRole, imsMasterId, _token, _tokenExpirationDate) {
        _classCallCheck(this, User);

        this._id = _id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.userRole = userRole;
        this.imsMasterId = imsMasterId;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
      }

      _createClass(User, [{
        key: "token",
        get: function get() {
          if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
          }

          return this._token;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/authentication/auth/auth-service/auth.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/authentication/auth/auth-service/auth.service.ts ***!
    \******************************************************************/

  /*! exports provided: UserData, AuthService */

  /***/
  function srcAppAuthenticationAuthAuthServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserData", function () {
      return UserData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _auth_model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth-model/user.model */
    "./src/app/authentication/auth/auth-model/user.model.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserData = function UserData() {
      _classCallCheck(this, UserData);
    };

    var AuthService =
    /*@__PURE__*/
    function () {
      var AuthService =
      /*#__PURE__*/
      function () {
        function AuthService(http, router, route) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.route = route;
          this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(AuthService, [{
          key: "getUser",
          value: function getUser() {
            return this.user;
          }
        }, {
          key: "getUserData",
          value: function getUserData() {
            return JSON.parse(localStorage.getItem('userData'));
          }
        }, {
          key: "getUserToken",
          value: function getUserToken() {
            return JSON.parse(localStorage.getItem('userData'))._token;
          }
        }, {
          key: "createUser",
          value: function createUser(data) {
            var _this10 = this;

            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backend + 'newUser', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
              _this10.handleAuthentication(res._id, res.name, res.email, res.phone, res.userRole, res.imsMasterId, res.token, +res.expiresIn);
            }));
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this11 = this;

            var data = {
              email: email,
              password: password
            };
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backend + 'login', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
              _this11.handleAuthentication(res._id, res.name, res.email, res.phone, res.userRole, res.imsMasterId, res.token, res.expiresIn);
            }));
          }
        }, {
          key: "loadUser",
          value: function loadUser(userData) {
            var loadedUser = new _auth_model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](userData._id, userData.name, userData.email, userData.phone, userData.userRole, userData.imsMasterId, userData._token, new Date(userData._tokenExpirationDate));

            if (loadedUser.token) {
              this.user.next(loadedUser);
              var expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
              this.autoLogout(expirationDuration);

              if (loadedUser.userRole === 'admin') {
                this.router.navigate(['/admin'], {
                  relativeTo: this.route
                });
              } else if (loadedUser.userRole === 'institute') {
                this.router.navigate(['/institute'], {
                  relativeTo: this.route
                });
              } else if (loadedUser.userRole === 'employee') {
                this.router.navigate(['/employee'], {
                  relativeTo: this.route
                });
              } else if (loadedUser.userRole === 'student') {
                this.router.navigate(['/student'], {
                  relativeTo: this.route
                });
              } else {
                this.router.navigate(['/'], {
                  relativeTo: this.route
                });
              }

              return;
            }
          }
        }, {
          key: "autoLogin",
          value: function autoLogin(userData) {
            var _this12 = this;

            this.loadUser(userData);
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backend + 'autoLogin', {}).subscribe(function (response) {}, function (err) {
              _this12.removeUser();

              _this12.router.navigate(['/login'], {
                relativeTo: _this12.route
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this13 = this;

            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backend + 'logout', {}).subscribe(function (res) {
              _this13.user.next(null);

              _this13.router.navigate(['/login']);

              localStorage.removeItem('userData');

              if (_this13.tokenExpirationTimer) {
                clearTimeout(_this13.tokenExpirationTimer);
              }

              _this13.tokenExpirationTimer = null;
            }, function (errorMessage) {});
          }
        }, {
          key: "removeUser",
          value: function removeUser() {
            if (localStorage.getItem('userData')) {
              localStorage.removeItem('userData');
            }

            this.user.next(null);
          }
        }, {
          key: "logoutAll",
          value: function logoutAll() {
            var _this14 = this;

            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backend + 'logoutAll', {}).subscribe(function (res) {
              _this14.user.next(null);

              _this14.router.navigate(['/login']);

              localStorage.removeItem('userData');

              if (_this14.tokenExpirationTimer) {
                clearTimeout(_this14.tokenExpirationTimer);
              }

              _this14.tokenExpirationTimer = null;
            }, function (errorMessage) {});
          }
        }, {
          key: "autoLogout",
          value: function autoLogout(expirationDuration) {
            var _this15 = this;

            this.tokenExpirationTimer = setTimeout(function () {
              _this15.logout();
            }, expirationDuration);
          }
        }, {
          key: "handleAuthentication",
          value: function handleAuthentication(userId, name, email, phone, userRole, imsMasterId, token, expiresIn) {
            var expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
            var user = new _auth_model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"](userId, name, email, phone, userRole, imsMasterId, token, expirationDate);
            this.user.next(user);
            this.autoLogout(expiresIn * 1000);
            localStorage.setItem('userData', JSON.stringify(user));
          }
        }, {
          key: "handleError",
          value: function handleError(errorRes) {
            var errorMessage = 'An unknown error occurred!';

            if (errorRes.error) {
              if (typeof errorRes.error === 'object') {
                errorMessage = 'Cant Reach Server.., Please Try Again';
              } else {
                errorMessage = errorRes.error;
              }
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      return AuthService;
    }();
    /***/

  },

  /***/
  "./src/app/authentication/auth/guards/employee.auth.guard.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/authentication/auth/guards/employee.auth.guard.ts ***!
    \*******************************************************************/

  /*! exports provided: EmployeeAuthGuard */

  /***/
  function srcAppAuthenticationAuthGuardsEmployeeAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeAuthGuard", function () {
      return EmployeeAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EmployeeAuthGuard =
    /*@__PURE__*/
    function () {
      var EmployeeAuthGuard =
      /*#__PURE__*/
      function () {
        function EmployeeAuthGuard(authService, router) {
          _classCallCheck(this, EmployeeAuthGuard);

          this.authService = authService;
          this.router = router;
        } // tslint:disable-next-line: max-line-length


        _createClass(EmployeeAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, router) {
            var _this16 = this;

            return this.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              var isAuth = !!user;

              if (isAuth && user.userRole === 'employee') {
                return true;
              }

              return _this16.router.createUrlTree(['/login']);
            }));
          } // tslint:disable-next-line: max-line-length

        }, {
          key: "canActivateChild",
          value: function canActivateChild(route, state) {
            return this.canActivate(route, state);
          }
        }]);

        return EmployeeAuthGuard;
      }();

      EmployeeAuthGuard.ɵfac = function EmployeeAuthGuard_Factory(t) {
        return new (t || EmployeeAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      EmployeeAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EmployeeAuthGuard,
        factory: EmployeeAuthGuard.ɵfac,
        providedIn: 'root'
      });
      return EmployeeAuthGuard;
    }();
    /***/

  },

  /***/
  "./src/app/authentication/auth/guards/institute.auth.guard.ts":
  /*!********************************************************************!*\
    !*** ./src/app/authentication/auth/guards/institute.auth.guard.ts ***!
    \********************************************************************/

  /*! exports provided: InstituteAuthGuard */

  /***/
  function srcAppAuthenticationAuthGuardsInstituteAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InstituteAuthGuard", function () {
      return InstituteAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var InstituteAuthGuard =
    /*@__PURE__*/
    function () {
      var InstituteAuthGuard =
      /*#__PURE__*/
      function () {
        function InstituteAuthGuard(authService, router) {
          _classCallCheck(this, InstituteAuthGuard);

          this.authService = authService;
          this.router = router;
        } // tslint:disable-next-line: max-line-length


        _createClass(InstituteAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, router) {
            var _this17 = this;

            return this.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              var isAuth = !!user;

              if (isAuth && user.userRole === 'institute') {
                return true;
              }

              return _this17.router.createUrlTree(['/login']);
            }));
          } // tslint:disable-next-line: max-line-length

        }, {
          key: "canActivateChild",
          value: function canActivateChild(route, state) {
            return this.canActivate(route, state);
          }
        }]);

        return InstituteAuthGuard;
      }();

      InstituteAuthGuard.ɵfac = function InstituteAuthGuard_Factory(t) {
        return new (t || InstituteAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      InstituteAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InstituteAuthGuard,
        factory: InstituteAuthGuard.ɵfac,
        providedIn: 'root'
      });
      return InstituteAuthGuard;
    }();
    /***/

  },

  /***/
  "./src/app/authentication/auth/guards/login.auth.guard.ts":
  /*!****************************************************************!*\
    !*** ./src/app/authentication/auth/guards/login.auth.guard.ts ***!
    \****************************************************************/

  /*! exports provided: LoginAuthGuard */

  /***/
  function srcAppAuthenticationAuthGuardsLoginAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginAuthGuard", function () {
      return LoginAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginAuthGuard =
    /*@__PURE__*/
    function () {
      var LoginAuthGuard =
      /*#__PURE__*/
      function () {
        function LoginAuthGuard(authService, router) {
          _classCallCheck(this, LoginAuthGuard);

          this.authService = authService;
          this.router = router;
        } // tslint:disable-next-line: max-line-length


        _createClass(LoginAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, router) {
            var _this18 = this;

            return this.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              if (!localStorage.getItem('userData')) {
                _this18.authService.removeUser();
              }

              var isAuth = !!user;

              if (!isAuth) {
                return true;
              } else if (user.userRole === 'admin') {
                return _this18.router.createUrlTree(['/admin']);
              } else if (user.userRole === 'institute') {
                return _this18.router.createUrlTree(['/institute']);
              } else if (user.userRole === 'employee') {
                return _this18.router.createUrlTree(['/employee']);
              } else if (user.userRole === 'student') {
                return _this18.router.createUrlTree(['/student']);
              } else {
                return _this18.router.createUrlTree(['/']);
              }
            }));
          }
        }]);

        return LoginAuthGuard;
      }();

      LoginAuthGuard.ɵfac = function LoginAuthGuard_Factory(t) {
        return new (t || LoginAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginAuthGuard,
        factory: LoginAuthGuard.ɵfac,
        providedIn: 'root'
      });
      return LoginAuthGuard;
    }();
    /***/

  },

  /***/
  "./src/app/authentication/auth/guards/student.auth.guard.ts":
  /*!******************************************************************!*\
    !*** ./src/app/authentication/auth/guards/student.auth.guard.ts ***!
    \******************************************************************/

  /*! exports provided: StudentAuthGuard */

  /***/
  function srcAppAuthenticationAuthGuardsStudentAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAuthGuard", function () {
      return StudentAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth-service/auth.service */
    "./src/app/authentication/auth/auth-service/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StudentAuthGuard =
    /*@__PURE__*/
    function () {
      var StudentAuthGuard =
      /*#__PURE__*/
      function () {
        function StudentAuthGuard(authService, router) {
          _classCallCheck(this, StudentAuthGuard);

          this.authService = authService;
          this.router = router;
        } // tslint:disable-next-line: max-line-length


        _createClass(StudentAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, router) {
            var _this19 = this;

            return this.authService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              var isAuth = !!user;

              if (isAuth && user.userRole === 'student') {
                return true;
              }

              return _this19.router.createUrlTree(['/login']);
            }));
          } // tslint:disable-next-line: max-line-length

        }, {
          key: "canActivateChild",
          value: function canActivateChild(route, state) {
            return this.canActivate(route, state);
          }
        }]);

        return StudentAuthGuard;
      }();

      StudentAuthGuard.ɵfac = function StudentAuthGuard_Factory(t) {
        return new (t || StudentAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      StudentAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StudentAuthGuard,
        factory: StudentAuthGuard.ɵfac,
        providedIn: 'root'
      });
      return StudentAuthGuard;
    }();
    /***/

  },

  /***/
  "./src/app/services/branch.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/branch.service.ts ***!
    \********************************************/

  /*! exports provided: BranchService */

  /***/
  function srcAppServicesBranchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchService", function () {
      return BranchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared-services/http.service */
    "./src/app/services/shared-services/http.service.ts");

    var BranchService =
    /*@__PURE__*/
    function () {
      var BranchService =
      /*#__PURE__*/
      function () {
        function BranchService(httpService) {
          _classCallCheck(this, BranchService);

          this.httpService = httpService;
          this.selectedBranchId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.branch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.branches = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
          this.category = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.categories = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        }

        _createClass(BranchService, [{
          key: "setBranchId",
          value: function setBranchId(branchId) {
            this.branchId = branchId;
            this.setSelectedBranchId(branchId);
          }
        }, {
          key: "deleteBranchId",
          value: function deleteBranchId() {
            this.branchId = null;
          }
        }, {
          key: "getBranchId",
          value: function getBranchId() {
            return this.branchId;
          }
        }, {
          key: "setSelectedBranchId",
          value: function setSelectedBranchId(branchId) {
            this.selectedBranchId.next(branchId);
          }
        }, {
          key: "getSelectedBranchId",
          value: function getSelectedBranchId() {
            return this.selectedBranchId;
          }
        }, {
          key: "setCategoryId",
          value: function setCategoryId(categoryId) {
            this.categoryId = categoryId;
          }
        }, {
          key: "deleteCategoryId",
          value: function deleteCategoryId() {
            this.categoryId = null;
          }
        }, {
          key: "getCategoryId",
          value: function getCategoryId() {
            return this.categoryId;
          }
        }, {
          key: "setBranchData",
          value: function setBranchData(branch) {
            this.branch.next(branch);
          }
        }, {
          key: "getBranchData",
          value: function getBranchData() {
            return this.branch;
          }
        }, {
          key: "deleteBranchData",
          value: function deleteBranchData() {
            this.branch.next(null);
          }
        }, {
          key: "setBranchesData",
          value: function setBranchesData(branches) {
            this.branches.next(branches);
          }
        }, {
          key: "getBranchesData",
          value: function getBranchesData() {
            return this.branches;
          }
        }, {
          key: "deleteBranchesData",
          value: function deleteBranchesData() {
            this.branches.next(null);
          }
        }, {
          key: "setCategoryData",
          value: function setCategoryData(category) {
            this.category.next(category);
          }
        }, {
          key: "getCategoryData",
          value: function getCategoryData() {
            return this.category;
          }
        }, {
          key: "deleteCategoryData",
          value: function deleteCategoryData() {
            this.category.next(null);
          }
        }, {
          key: "setCategoriesData",
          value: function setCategoriesData(categories) {
            this.categories.next(categories);
          }
        }, {
          key: "getCategoriesData",
          value: function getCategoriesData() {
            return this.categories;
          }
        }, {
          key: "deleteCategoriesData",
          value: function deleteCategoriesData() {
            this.categories.next([]);
          }
        }, {
          key: "getBranches",
          value: function getBranches() {
            var data = {
              api: 'getBranches',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBranchCoursesAndBatches",
          value: function getBranchCoursesAndBatches(branchId) {
            var data = {
              api: 'getBranchCoursesAndBatches',
              data: {
                branch: branchId
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBranchesForEmployee",
          value: function getBranchesForEmployee() {
            var data = {
              api: 'getBranchesForEmployee',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBranchForStudent",
          value: function getBranchForStudent(id) {
            var data = {
              api: 'getBranchForStudent',
              data: {
                id: id
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "checkBranchStatus",
          value: function checkBranchStatus(id) {
            var data = {
              api: 'checkBranchStatus',
              data: {
                id: id
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBranchesForStudent",
          value: function getBranchesForStudent() {
            var data = {
              api: 'getBranchesForStudent',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBranch",
          value: function getBranch(id) {
            var data = {
              api: 'getBranch',
              data: {
                id: id
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getBranchForEditing",
          value: function getBranchForEditing(id) {
            var data = {
              api: 'getBranchForEditing',
              data: {
                id: id
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "addBranch",
          value: function addBranch(branch) {
            var data = {
              api: 'newBranch',
              data: branch
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "editBranch",
          value: function editBranch(branch) {
            var data = {
              api: 'updateBranch',
              data: branch
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "activateBranch",
          value: function activateBranch(id, paymentDetails) {
            var data = {
              api: 'activateBranch',
              data: {
                id: id,
                paymentDetails: paymentDetails
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deactivateBranch",
          value: function deactivateBranch(branch) {
            var data = {
              api: 'deactivateBranch',
              data: {
                branch: branch
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeBranchStatus",
          value: function changeBranchStatus(id, status) {
            var data = {
              api: 'changeBranchStatus',
              data: {
                id: id,
                status: status
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteBranch",
          value: function deleteBranch(id) {
            var data = {
              api: 'deleteBranch',
              data: {
                id: id
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return BranchService;
      }();

      BranchService.ɵfac = function BranchService_Factory(t) {
        return new (t || BranchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      BranchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BranchService,
        factory: BranchService.ɵfac,
        providedIn: 'root'
      });
      return BranchService;
    }();
    /***/

  },

  /***/
  "./src/app/services/notification.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/notification.service.ts ***!
    \**************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared-services/http.service */
    "./src/app/services/shared-services/http.service.ts");

    var NotificationService =
    /*@__PURE__*/
    function () {
      var NotificationService =
      /*#__PURE__*/
      function () {
        function NotificationService(httpService) {
          _classCallCheck(this, NotificationService);

          this.httpService = httpService;
        }

        _createClass(NotificationService, [{
          key: "getNotifications",
          value: function getNotifications() {
            var data = {
              api: 'getNotifications',
              data: {}
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "getNotification",
          value: function getNotification(id) {
            var data = {
              api: 'getNotification',
              data: {
                id: id
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "deleteNotification",
          value: function deleteNotification(id) {
            var data = {
              api: 'deleteNotification',
              data: {
                id: id
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }, {
          key: "changeNotificationStatus",
          value: function changeNotificationStatus(id) {
            var data = {
              api: 'changeNotificationStatus',
              data: {
                id: id
              }
            };
            return this.httpService.httpPost(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }));
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ɵfac = function NotificationService_Factory(t) {
        return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationService,
        factory: NotificationService.ɵfac,
        providedIn: 'root'
      });
      return NotificationService;
    }();
    /***/

  },

  /***/
  "./src/app/services/shared-services/date.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/shared-services/date.service.ts ***!
    \**********************************************************/

  /*! exports provided: Month, DateService */

  /***/
  function srcAppServicesSharedServicesDateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Month", function () {
      return Month;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateService", function () {
      return DateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Month = function Month(monthNo, month) {
      _classCallCheck(this, Month);

      this.monthNo = monthNo;
      this.month = month;
    };

    var DateService =
    /*@__PURE__*/
    function () {
      var DateService =
      /*#__PURE__*/
      function () {
        function DateService() {
          _classCallCheck(this, DateService);

          this.date = new Date();
          this.oneDayInMilliseconds = 24 * 60 * 60 * 1000;
          this.dateString = this.convertToDateString(this.date);
          this.dateInMilliseconds = this.date.getTime();
          this.dateTimeString = this.convertToDateTimeString(this.date);
          this.dateTimeISOString = this.convertToISOString(this.date);
          this.months = [{
            monthNo: '01',
            month: 'Jan'
          }, {
            monthNo: '02',
            month: 'Feb'
          }, {
            monthNo: '03',
            month: 'Mar'
          }, {
            monthNo: '04',
            month: 'Apr'
          }, {
            monthNo: '05',
            month: 'May'
          }, {
            monthNo: '06',
            month: 'Jun'
          }, {
            monthNo: '07',
            month: 'Jul'
          }, {
            monthNo: '08',
            month: 'Aug'
          }, {
            monthNo: '09',
            month: 'Sep'
          }, {
            monthNo: '10',
            month: 'Oct'
          }, {
            monthNo: '11',
            month: 'Nov'
          }, {
            monthNo: '12',
            month: 'Dec'
          }];
          this.weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
          this.years = [];

          for (var year = 2018; year <= this.date.getFullYear(); year++) {
            this.years.push(year.toString());
          }
        }

        _createClass(DateService, [{
          key: "getWeekDays",
          value: function getWeekDays() {
            return this.weekDays;
          }
        }, {
          key: "getWeekDay",
          value: function getWeekDay(day) {
            return this.weekDays[day];
          }
        }, {
          key: "getDay",
          value: function getDay(date) {
            if (!date) {
              return '--';
            }

            date = new Date(date);
            return this.weekDays[date.getDay()];
          }
        }, {
          key: "getMonths",
          value: function getMonths() {
            return this.months;
          }
        }, {
          key: "getMonthByMonthNumber",
          value: function getMonthByMonthNumber(monthNo) {
            var month = this.months.find(function (curMonth) {
              return curMonth.monthNo === monthNo;
            });

            if (!month) {
              return '--';
            }

            return month.month;
          }
        }, {
          key: "getMonth",
          value: function getMonth(month) {
            return this.months[month].month;
          }
        }, {
          key: "getCurrentMonth",
          value: function getCurrentMonth() {
            var month = this.date.getMonth();
            return (month + 1).toString().padStart(2, '0');
          }
        }, {
          key: "getYears",
          value: function getYears() {
            return this.years;
          }
        }, {
          key: "getCurrentYear",
          value: function getCurrentYear() {
            return this.date.getFullYear().toString();
          }
        }, {
          key: "getDate",
          value: function getDate() {
            var date = new Date(this.date);
            return date;
          }
        }, {
          key: "getDateString",
          value: function getDateString() {
            return this.dateString;
          }
        }, {
          key: "getFormattedDate",
          value: function getFormattedDate() {
            return this.formatDate(this.dateString);
          }
        }, {
          key: "getDateInMilliseconds",
          value: function getDateInMilliseconds() {
            return this.dateInMilliseconds;
          }
        }, {
          key: "getDateTimeString",
          value: function getDateTimeString() {
            return this.dateTimeString;
          }
        }, {
          key: "getDateTimeISOString",
          value: function getDateTimeISOString() {
            return this.dateTimeISOString;
          }
        }, {
          key: "dateToMilliseconds",
          value: function dateToMilliseconds(date) {
            return new Date(date).getTime();
          }
        }, {
          key: "millisecondsToDate",
          value: function millisecondsToDate(milliseconds) {
            return new Date(milliseconds);
          }
        }, {
          key: "millisecondsToDateString",
          value: function millisecondsToDateString(milliseconds) {
            return this.convertToDateString(milliseconds);
          }
        }, {
          key: "convertToDate",
          value: function convertToDate(date) {
            return new Date(date);
          }
        }, {
          key: "convertToDateString",
          value: function convertToDateString(date) {
            if (!date) {
              return '--';
            }

            date = new Date(date);
            return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
          }
        }, {
          key: "reverseDate",
          value: function reverseDate(date) {
            if (!date) {
              return '--';
            }

            return date.split('-').reverse().join('-');
          }
        }, {
          key: "addDaysInDate",
          value: function addDaysInDate(date, days) {
            if (!date) {
              return '--';
            }

            var curDate = new Date(date);
            curDate.setDate(curDate.getDate() + (days - 1));
            var myDate = new Date(curDate);
            return myDate;
          }
        }, {
          key: "convertToISOString",
          value: function convertToISOString(date) {
            if (!date) {
              return '--';
            }

            return new Date(date).toISOString();
          }
        }, {
          key: "convertToDateTimeString",
          value: function convertToDateTimeString(date) {
            if (!date) {
              return '--';
            }

            date = new Date(date);
            return this.convertToDateString(date) + 'T' + date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0');
          }
        }, {
          key: "convertToDateTimeHourString",
          value: function convertToDateTimeHourString(date) {
            if (!date) {
              return '--';
            }

            date = new Date(date);
            return this.convertToDateString(date) + ' ' + this.formatTime(date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0'));
          }
        }, {
          key: "formatDate",
          value: function formatDate(date) {
            if (!date) {
              return '--';
            }

            return date.split('-').reverse().join('-');
          }
        }, {
          key: "formatTime",
          value: function formatTime(time) {
            if (!time) {
              return '--';
            }

            time = time.split(':');
            var hours = +time[0];
            var minute = time[1];
            var meridiem = hours >= 12 ? 'PM' : 'AM';

            if (hours === 0) {
              hours = 12;
            } else if (hours > 12) {
              hours -= 12;
            }

            return hours.toString().padStart(2, '0') + ':' + minute + ' ' + meridiem;
          }
        }, {
          key: "formatDateTime",
          value: function formatDateTime(date) {
            if (!date) {
              return '--';
            }

            date = new Date(date).toISOString().split('T');
            return this.formatDate(date[0]) + ' ' + this.formatTime(date[1]);
          }
        }, {
          key: "compareDates",
          value: function compareDates(date1, date2) {
            return this.convertToDate(date1) <= this.convertToDate(date2);
          }
        }, {
          key: "dateDifferenceInDays",
          value: function dateDifferenceInDays(date1, date2) {
            var dateDifference = this.dateToMilliseconds(date2) - this.dateToMilliseconds(date1);
            return dateDifference / this.oneDayInMilliseconds;
          }
        }, {
          key: "getUpToTime",
          value: function getUpToTime(date) {
            date = new Date(date).getTime();
            var curDate = this.getDateInMilliseconds();
            var timeDifference = Math.round((curDate - date) / 1000); // 1 sec  = 1000 ms

            if (timeDifference >= 0 && timeDifference < 60) {
              return timeDifference + ' sec'; // 1 sec  = 1000 ms
            } else if (timeDifference >= 60 && timeDifference < 3600) {
              var difference = Math.round(timeDifference / 60); // 1 min = 60 sec

              return difference + (difference <= 1 ? ' min' : ' mins');
            } else if (timeDifference >= 3600 && timeDifference < 86400) {
              var _difference = Math.round(timeDifference / (60 * 60)); // 1 hr = 60 m


              return _difference + (_difference <= 1 ? ' hr' : ' hrs');
            } else if (timeDifference >= 86400 && timeDifference < 604800) {
              var _difference2 = Math.round(timeDifference / (60 * 60 * 24)); // 1 day = 24 hr


              return _difference2 + (_difference2 <= 1 ? ' day' : ' days');
            } else if (timeDifference >= 604800 && timeDifference < 2630880) {
              var _difference3 = Math.round(timeDifference / (60 * 60 * 24 * 7)); // 1 week = 7 day


              return _difference3 + (_difference3 <= 1 ? ' week' : ' weeks');
            } else if (timeDifference >= 2630880 && timeDifference < 31570560) {
              var _difference4 = Math.round(timeDifference / (60 * 60 * 24 * 7 * 4.35)); // 1 month = 4.35 weeks


              return _difference4 + (_difference4 <= 1 ? ' month' : ' months');
            } else if (timeDifference >= 31570560) {
              var _difference5 = Math.round(timeDifference / (60 * 60 * 24 * 7 * 4.35 * 12)); // 1 year = 12 months


              return _difference5 + (_difference5 <= 1 ? ' year' : ' years');
            } else {
              return '';
            }
          }
        }]);

        return DateService;
      }();

      DateService.ɵfac = function DateService_Factory(t) {
        return new (t || DateService)();
      };

      DateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DateService,
        factory: DateService.ɵfac,
        providedIn: 'root'
      });
      return DateService;
    }();
    /***/

  },

  /***/
  "./src/app/services/shared-services/http.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/shared-services/http.service.ts ***!
    \**********************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesSharedServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HttpService =
    /*@__PURE__*/
    function () {
      var HttpService =
      /*#__PURE__*/
      function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "httpGet",
          value: function httpGet(data) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend + data.api).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
              var msg = 'SOMETHING BAD HAPPENED';

              if (err.error) {
                if (typeof err.error === 'object') {
                  msg = "Can't Reach Server.., Please Try Again";
                } else {
                  msg = err.error;
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(msg);
            }));
          }
        }, {
          key: "httpPost",
          value: function httpPost(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend + data.api, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
              var msg = 'SOMETHING BAD HAPPENED';

              if (err.error) {
                if (typeof err.error === 'object') {
                  msg = "Can't Reach Server.., Please Try Again";
                } else {
                  msg = err.error;
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(msg);
            }));
          }
        }, {
          key: "httpPatch",
          value: function httpPatch(data) {
            return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend + data.api, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
              var msg = 'SOMETHING BAD HAPPENED';

              if (err.error) {
                if (typeof err.error === 'object') {
                  msg = "Can't Reach Server.., Please Try Again";
                } else {
                  msg = err.error;
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(msg);
            }));
          }
        }, {
          key: "httpPut",
          value: function httpPut(data) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend + data.api, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
              var msg = 'SOMETHING BAD HAPPENED';

              if (err.error) {
                if (typeof err.error === 'object') {
                  msg = "Can't Reach Server.., Please Try Again";
                } else {
                  msg = err.error;
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(msg);
            }));
          }
        }, {
          key: "httpDelete",
          value: function httpDelete(data) {
            return this.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backend + data.api, data.data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
              return response;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (err) {
              var msg = 'SOMETHING BAD HAPPENED';

              if (err.error) {
                if (typeof err.error === 'object') {
                  msg = "Can't Reach Server.., Please Try Again";
                } else {
                  msg = err.error;
                }
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(msg);
            }));
          }
        }]);

        return HttpService;
      }();

      HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: HttpService,
        factory: HttpService.ɵfac,
        providedIn: 'root'
      });
      return HttpService;
    }();
    /***/

  },

  /***/
  "./src/app/services/socket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/socket.service.ts ***!
    \********************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppServicesSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);

    var SocketService =
    /*@__PURE__*/
    function () {
      var SocketService =
      /*#__PURE__*/
      function () {
        function SocketService() {
          _classCallCheck(this, SocketService);
        }

        _createClass(SocketService, [{
          key: "setupSocketConnection",
          value: function setupSocketConnection() {
            var _this20 = this;

            var token = 'Bearer ' + JSON.parse(localStorage.getItem('userData'))._token;

            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].SOCKET_ENDPOINT, {
              query: {
                token: token
              }
            });
            this.socket.on('connect', function () {
              _this20.socket.token = token;
            });
          }
        }, {
          key: "getSocket",
          value: function getSocket() {
            return this.socket;
          }
        }]);

        return SocketService;
      }();

      SocketService.ɵfac = function SocketService_Factory(t) {
        return new (t || SocketService)();
      };

      SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: SocketService,
        factory: SocketService.ɵfac,
        providedIn: 'root'
      });
      return SocketService;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /**
     * @license
     * Copyright Akveo. All Rights Reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     */


    var environment = {
      production: true,
      backend: '',
      encKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
      aesKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
      razorpayKeyId: 'rzp_test_1JFxmyJ8eg8wQZ',
      zoomLiveURL: '/online-meeting/#/live',
      SOCKET_ENDPOINT: '/classMasterSocketConnection'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /**
     * @license
     * Copyright Akveo. All Rights Reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\MEAN Projects\Class Management\class-master-2.0\class-master\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);