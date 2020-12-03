(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm5/ngx-bootstrap-carousel.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm5/ngx-bootstrap-carousel.js ***!
  \******************************************************************************************/
/*! exports provided: CarouselComponent, CarouselConfig, CarouselModule, SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


function CarouselComponent_ol_1_li_1_Template(rf, ctx) {
    if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var i_r5 = ctx.index; var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.selectSlide(i_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var slide_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", slide_r4.active === true);
    }
}
function CarouselComponent_ol_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ol_1_li_1_Template, 1, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.indicatorsSlides());
    }
}
function CarouselComponent_a_4_span_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
}
function CarouselComponent_a_4_Template(rf, ctx) {
    if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.previousSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r1.activeSlide === 0 && ctx_r1.noWrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isBs4);
    }
}
function CarouselComponent_a_5_Template(rf, ctx) {
    if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.nextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx_r2.isLast(ctx_r2.activeSlide) && ctx_r2.noWrap);
    }
}
var _c0 = function (a0) { return { "display": a0 }; };
var _c1 = ["*"];
var CarouselConfig = /** @class */ /*@__PURE__*/ (function () {
    function CarouselConfig() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
    CarouselConfig.ɵfac = function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); };
    CarouselConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CarouselConfig, factory: function (t) { return CarouselConfig.ɵfac(t); } });
    return CarouselConfig;
}());
if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
    /** @type {?} */
    var l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
    /** @type {?} */
    var out = [];
    /** @type {?} */
    var n = Math.ceil((array.length) / size);
    /** @type {?} */
    var i = 0;
    while (i < n) {
        /** @type {?} */
        var chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Direction = /*@__PURE__*/ (function () {
    var Direction = {
        UNKNOWN: 0,
        NEXT: 1,
        PREV: 2,
    };
    Direction[Direction.UNKNOWN] = 'UNKNOWN';
    Direction[Direction.NEXT] = 'NEXT';
    Direction[Direction.PREV] = 'PREV';
    return Direction;
}());
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ /*@__PURE__*/ (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /* If `true` - carousel indicators indicate slides chunks
             works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /**
         * Turn on/off animation. Animation doesn't work for multilist carousel
         */
        this.isAnimated = false;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        /**
         * Will be emitted when active slides has been changed in multilist mode
         */
        this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["LinkedList"]();
        this._currentVisibleSlidesIndex = 0;
        this.destroyed = false;
        this.getActive = ( /**
         * @param {?} slide
         * @return {?}
         */function (slide) { return slide.active; });
        this.makeSlidesConsistent = ( /**
         * @param {?} slides
         * @return {?}
         */function (slides) {
            slides.forEach(( /**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */function (slide, index) { return slide.item.order = index; }));
        });
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: /**
         * @return {?}
         */ function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */ function (index) {
            if (this.multilist) {
                return;
            }
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         */
        get: /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         * @return {?}
         */ function () {
            return this._interval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */ function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */ function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */ function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
        function () {
            var _this = this;
            setTimeout(( /**
             * @return {?}
             */function () {
                if (_this.singleSlideOffset) {
                    _this.indicatorsByChunk = false;
                }
                if (_this.multilist) {
                    _this._chunkedSlides = chunkByNumber(_this.mapSlidesAndIndexes(), _this.itemsPerSlide);
                    _this.selectInitialSlides();
                }
            }), 0);
        };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
        function () {
            this.destroyed = true;
        };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
        function (slide) {
            this._slides.add(slide);
            if (this.multilist && this._slides.length <= this.itemsPerSlide) {
                slide.active = true;
            }
            if (!this.multilist && this.isAnimated) {
                slide.isAnimated = true;
            }
            if (!this.multilist && this._slides.length === 1) {
                this._currentActiveSlide = undefined;
                this.activeSlide = 0;
                this.play();
            }
            if (this.multilist && this._slides.length > this.itemsPerSlide) {
                this.play();
            }
        };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
        function (slide) {
            var _this = this;
            /** @type {?} */
            var remIndex = this._slides.indexOf(slide);
            if (this._currentActiveSlide === remIndex) {
                // removing of active slide
                /** @type {?} */
                var nextSlideIndex_1 = void 0;
                if (this._slides.length > 1) {
                    // if this slide last - will roll to first slide, if noWrap flag is
                    // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                    // middle of collection, index of next slide is same to removed
                    nextSlideIndex_1 = !this.isLast(remIndex)
                        ? remIndex
                        : this.noWrap ? remIndex - 1 : 0;
                }
                this._slides.remove(remIndex);
                // prevents exception with changing some value after checking
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this._select(nextSlideIndex_1);
                }), 0);
            }
            else {
                this._slides.remove(remIndex);
                /** @type {?} */
                var currentSlideIndex_1 = this.getCurrentSlideIndex();
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    // after removing, need to actualize index of current active slide
                    _this._currentActiveSlide = currentSlideIndex_1;
                    _this.activeSlideChange.emit(_this._currentActiveSlide);
                }), 0);
            }
        };
    /**
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlideFromInterval = /**
     * @param {?=} force
     * @return {?}
     */
        function (force) {
            if (force === void 0) {
                force = false;
            }
            this.move(Direction.NEXT, force);
        };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
        function (force) {
            if (force === void 0) {
                force = false;
            }
            if (this.isPlaying) {
                this.restartTimer();
            }
            this.move(Direction.NEXT, force);
        };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
        function (force) {
            if (force === void 0) {
                force = false;
            }
            if (this.isPlaying) {
                this.restartTimer();
            }
            this.move(Direction.PREV, force);
        };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getFirstVisibleIndex = /**
     * @return {?}
     */
        function () {
            return this.slides.findIndex(this.getActive);
        };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getLastVisibleIndex = /**
     * @return {?}
     */
        function () {
            return findLastIndex(this.slides, this.getActive);
        };
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.move = /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
        function (direction, force) {
            if (force === void 0) {
                force = false;
            }
            /** @type {?} */
            var firstVisibleIndex = this.getFirstVisibleIndex();
            /** @type {?} */
            var lastVisibleIndex = this.getLastVisibleIndex();
            if (this.noWrap) {
                if (direction === Direction.NEXT &&
                    this.isLast(lastVisibleIndex) ||
                    direction === Direction.PREV &&
                        firstVisibleIndex === 0) {
                    return;
                }
            }
            if (!this.multilist) {
                this.activeSlide = this.findNextSlideIndex(direction, force);
            }
            else {
                this.moveMultilist(direction);
            }
        };
    /**
     * Swith slides by enter, space and arrows keys
     * @internal
     */
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.keydownPress = /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
        function (event) {
            // tslint:disable-next-line:deprecation
            if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
                this.nextSlide();
                event.preventDefault();
                return;
            }
            // tslint:disable-next-line:deprecation
            if (event.keyCode === 37 || event.key === 'LeftArrow') {
                this.previousSlide();
                return;
            }
            // tslint:disable-next-line:deprecation
            if (event.keyCode === 39 || event.key === 'RightArrow') {
                this.nextSlide();
                return;
            }
        };
    /**
     * Play on mouse leave
     * @internal
     */
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.onMouseLeave = /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
        function () {
            if (!this.pauseOnFocus) {
                this.play();
            }
        };
    /**
     * Play on mouse up
     * @internal
     */
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.onMouseUp = /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
        function () {
            if (!this.pauseOnFocus) {
                this.play();
            }
        };
    /**
     * When slides on focus autoplay is stopped(optional)
     * @internal
     */
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.pauseFocusIn = /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
        function () {
            if (this.pauseOnFocus) {
                this.isPlaying = false;
                this.resetTimer();
            }
        };
    /**
     * When slides out of focus autoplay is started
     * @internal
     */
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.pauseFocusOut = /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
        function () {
            this.play();
        };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
        function (index) {
            if (this.isPlaying) {
                this.restartTimer();
            }
            if (!this.multilist) {
                this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
            }
            else {
                this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
            }
        };
    /**
     * Starts a auto changing of slides
     */
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.play = /**
     * Starts a auto changing of slides
     * @return {?}
     */
        function () {
            if (!this.isPlaying) {
                this.isPlaying = true;
                this.restartTimer();
            }
        };
    /**
     * Stops a auto changing of slides
     */
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.pause = /**
     * Stops a auto changing of slides
     * @return {?}
     */
        function () {
            if (!this.noPause) {
                this.isPlaying = false;
                this.resetTimer();
            }
        };
    /**
     * Finds and returns index of currently displayed slide
     */
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
        function () {
            return this._slides.findIndex(this.getActive);
        };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     */
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
        function (index) {
            return index + 1 >= this._slides.length;
        };
    /**
     * Defines, whether the specified index is first in collection
     * @param index
     */
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isFirst = /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
        function (index) {
            return index === 0;
        };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.indicatorsSlides = /**
     * @return {?}
     */
        function () {
            var _this = this;
            return this.slides.filter(( /**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */function (slide, index) { return !_this.indicatorsByChunk || index % _this.itemsPerSlide === 0; }));
        };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.selectInitialSlides = /**
     * @private
     * @return {?}
     */
        function () {
            /** @type {?} */
            var startIndex = this.startFromIndex <= this._slides.length
                ? this.startFromIndex
                : 0;
            this.hideSlides();
            if (this.singleSlideOffset) {
                this._slidesWithIndexes = this.mapSlidesAndIndexes();
                if (this._slides.length - startIndex < this.itemsPerSlide) {
                    /** @type {?} */
                    var slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                    this._slidesWithIndexes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._slidesWithIndexes, slidesToAppend).slice(slidesToAppend.length)
                        .slice(0, this.itemsPerSlide);
                }
                else {
                    this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
                }
                this._slidesWithIndexes.forEach(( /**
                 * @param {?} slide
                 * @return {?}
                 */function (slide) { return slide.item.active = true; }));
                this.makeSlidesConsistent(this._slidesWithIndexes);
            }
            else {
                this.selectRangeByNestedIndex(startIndex);
            }
            this.slideRangeChange.emit(this.getVisibleIndexes());
        };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     */
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
        function (direction, force) {
            /** @type {?} */
            var nextSlideIndex = 0;
            if (!force &&
                (this.isLast(this.activeSlide) &&
                    direction !== Direction.PREV &&
                    this.noWrap)) {
                return undefined;
            }
            switch (direction) {
                case Direction.NEXT:
                    // if this is last slide, not force, looping is disabled
                    // and need to going forward - select current slide, as a next
                    nextSlideIndex = !this.isLast(this._currentActiveSlide)
                        ? this._currentActiveSlide + 1
                        : !force && this.noWrap ? this._currentActiveSlide : 0;
                    break;
                case Direction.PREV:
                    // if this is first slide, not force, looping is disabled
                    // and need to going backward - select current slide, as a next
                    nextSlideIndex =
                        this._currentActiveSlide > 0
                            ? this._currentActiveSlide - 1
                            : !force && this.noWrap
                                ? this._currentActiveSlide
                                : this._slides.length - 1;
                    break;
                default:
                    throw new Error('Unknown direction');
            }
            return nextSlideIndex;
        };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.mapSlidesAndIndexes = /**
     * @private
     * @return {?}
     */
        function () {
            return this.slides
                .slice()
                .map(( /**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */function (slide, index) {
                return {
                    index: index,
                    item: slide
                };
            }));
        };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlideRange = /**
     * @private
     * @param {?} index
     * @return {?}
     */
        function (index) {
            if (this.isIndexInRange(index)) {
                return;
            }
            this.hideSlides();
            if (!this.singleSlideOffset) {
                this.selectRangeByNestedIndex(index);
            }
            else {
                /** @type {?} */
                var startIndex = this.isIndexOnTheEdges(index)
                    ? index
                    : index - this.itemsPerSlide + 1;
                /** @type {?} */
                var endIndex = this.isIndexOnTheEdges(index)
                    ? index + this.itemsPerSlide
                    : index + 1;
                this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
                this.makeSlidesConsistent(this._slidesWithIndexes);
                this._slidesWithIndexes.forEach(( /**
                 * @param {?} slide
                 * @return {?}
                 */function (slide) { return slide.item.active = true; }));
            }
            this.slideRangeChange.emit(this.getVisibleIndexes());
        };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectRangeByNestedIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
        function (index) {
            /** @type {?} */
            var selectedRange = this._chunkedSlides
                .map(( /**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */function (slidesList, i) {
                return {
                    index: i,
                    list: slidesList
                };
            }))
                .find(( /**
         * @param {?} slidesList
         * @return {?}
         */function (slidesList) {
                return slidesList.list.find(( /**
                 * @param {?} slide
                 * @return {?}
                 */function (slide) { return slide.index === index; })) !== undefined;
            }));
            this._currentVisibleSlidesIndex = selectedRange.index;
            this._chunkedSlides[selectedRange.index].forEach(( /**
             * @param {?} slide
             * @return {?}
             */function (slide) {
                slide.item.active = true;
            }));
        };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isIndexOnTheEdges = /**
     * @private
     * @param {?} index
     * @return {?}
     */
        function (index) {
            return (index + 1 - this.itemsPerSlide <= 0 ||
                index + this.itemsPerSlide <= this._slides.length);
        };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isIndexInRange = /**
     * @private
     * @param {?} index
     * @return {?}
     */
        function (index) {
            if (this.singleSlideOffset) {
                /** @type {?} */
                var visibleIndexes = this._slidesWithIndexes.map(( /**
                 * @param {?} slide
                 * @return {?}
                 */function (slide) { return slide.index; }));
                return visibleIndexes.indexOf(index) >= 0;
            }
            return (index <= this.getLastVisibleIndex() &&
                index >= this.getFirstVisibleIndex());
        };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.hideSlides = /**
     * @private
     * @return {?}
     */
        function () {
            this.slides.forEach(( /**
             * @param {?} slide
             * @return {?}
             */function (slide) { return slide.active = false; }));
        };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.isVisibleSlideListLast = /**
     * @private
     * @return {?}
     */
        function () {
            return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
        };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.isVisibleSlideListFirst = /**
     * @private
     * @return {?}
     */
        function () {
            return this._currentVisibleSlidesIndex === 0;
        };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.moveSliderByOneItem = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
        function (direction) {
            /** @type {?} */
            var firstVisibleIndex;
            /** @type {?} */
            var lastVisibleIndex;
            /** @type {?} */
            var indexToHide;
            /** @type {?} */
            var indexToShow;
            if (this.noWrap) {
                firstVisibleIndex = this.getFirstVisibleIndex();
                lastVisibleIndex = this.getLastVisibleIndex();
                indexToHide = direction === Direction.NEXT
                    ? firstVisibleIndex
                    : lastVisibleIndex;
                indexToShow = direction !== Direction.NEXT
                    ? firstVisibleIndex - 1
                    : !this.isLast(lastVisibleIndex)
                        ? lastVisibleIndex + 1 : 0;
                this._slides.get(indexToHide).active = false;
                this._slides.get(indexToShow).active = true;
                /** @type {?} */
                var slidesToReorder = this.mapSlidesAndIndexes().filter(( /**
                 * @param {?} slide
                 * @return {?}
                 */function (slide) { return slide.item.active; }));
                this.makeSlidesConsistent(slidesToReorder);
                this.slideRangeChange.emit(this.getVisibleIndexes());
            }
            else {
                /** @type {?} */
                var displayedIndex = void 0;
                firstVisibleIndex = this._slidesWithIndexes[0].index;
                lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
                if (direction === Direction.NEXT) {
                    this._slidesWithIndexes.shift();
                    displayedIndex = this.isLast(lastVisibleIndex)
                        ? 0
                        : lastVisibleIndex + 1;
                    this._slidesWithIndexes.push({
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    });
                }
                else {
                    this._slidesWithIndexes.pop();
                    displayedIndex = this.isFirst(firstVisibleIndex)
                        ? this._slides.length - 1
                        : firstVisibleIndex - 1;
                    this._slidesWithIndexes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([{
                            index: displayedIndex,
                            item: this._slides.get(displayedIndex)
                        }], this._slidesWithIndexes);
                }
                this.hideSlides();
                this._slidesWithIndexes.forEach(( /**
                 * @param {?} slide
                 * @return {?}
                 */function (slide) { return slide.item.active = true; }));
                this.makeSlidesConsistent(this._slidesWithIndexes);
                this.slideRangeChange.emit(this._slidesWithIndexes.map(( /**
                 * @param {?} slide
                 * @return {?}
                 */function (slide) { return slide.index; })));
            }
        };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.moveMultilist = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
        function (direction) {
            if (this.singleSlideOffset) {
                this.moveSliderByOneItem(direction);
            }
            else {
                this.hideSlides();
                if (this.noWrap) {
                    this._currentVisibleSlidesIndex = direction === Direction.NEXT
                        ? this._currentVisibleSlidesIndex + 1
                        : this._currentVisibleSlidesIndex - 1;
                }
                else {
                    if (direction === Direction.NEXT) {
                        this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                            ? 0
                            : this._currentVisibleSlidesIndex + 1;
                    }
                    else {
                        this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                            ? this._chunkedSlides.length - 1
                            : this._currentVisibleSlidesIndex - 1;
                    }
                }
                this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(( /**
                 * @param {?} slide
                 * @return {?}
                 */function (slide) { return slide.item.active = true; }));
                this.slideRangeChange.emit(this.getVisibleIndexes());
            }
        };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.getVisibleIndexes = /**
     * @private
     * @return {?}
     */
        function () {
            if (!this.singleSlideOffset) {
                return this._chunkedSlides[this._currentVisibleSlidesIndex]
                    .map(( /**
             * @param {?} slide
             * @return {?}
             */function (slide) { return slide.index; }));
            }
            else {
                return this._slidesWithIndexes.map(( /**
                 * @param {?} slide
                 * @return {?}
                 */function (slide) { return slide.index; }));
            }
        };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     */
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
        function (index) {
            if (isNaN(index)) {
                this.pause();
                return;
            }
            if (!this.multilist) {
                /** @type {?} */
                var currentSlide = this._slides.get(this._currentActiveSlide);
                if (currentSlide) {
                    currentSlide.active = false;
                }
            }
            /** @type {?} */
            var nextSlide = this._slides.get(index);
            if (nextSlide) {
                this._currentActiveSlide = index;
                nextSlide.active = true;
                this.activeSlide = index;
                this.activeSlideChange.emit(index);
            }
        };
    /**
     * Starts loop of auto changing of slides
     */
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
        function () {
            var _this = this;
            this.resetTimer();
            /** @type {?} */
            var interval = +this.interval;
            if (!isNaN(interval) && interval > 0) {
                this.currentInterval = this.ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    return setInterval(( /**
                     * @return {?}
                     */function () {
                        /** @type {?} */
                        var nInterval = +_this.interval;
                        _this.ngZone.run(( /**
                         * @return {?}
                         */function () {
                            if (_this.isPlaying &&
                                !isNaN(_this.interval) &&
                                nInterval > 0 &&
                                _this.slides.length) {
                                _this.nextSlideFromInterval();
                            }
                            else {
                                _this.pause();
                            }
                        }));
                    }), interval);
                }));
            }
        };
    Object.defineProperty(CarouselComponent.prototype, "multilist", {
        get: /**
         * @return {?}
         */ function () {
            return this.itemsPerSlide > 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Stops loop of auto changing of slides
     */
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
        function () {
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
                this.currentInterval = void 0;
            }
        };
    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["carousel"]], inputs: { indicatorsByChunk: "indicatorsByChunk", itemsPerSlide: "itemsPerSlide", singleSlideOffset: "singleSlideOffset", isAnimated: "isAnimated", startFromIndex: "startFromIndex", activeSlide: "activeSlide", interval: "interval", noWrap: "noWrap", noPause: "noPause", showIndicators: "showIndicators", pauseOnFocus: "pauseOnFocus" }, outputs: { activeSlideChange: "activeSlideChange", slideRangeChange: "slideRangeChange" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() { return ctx.pause(); })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() { return ctx.onMouseUp(); })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) { return ctx.keydownPress($event); })("focusin", function CarouselComponent_Template_div_focusin_0_listener() { return ctx.pauseFocusIn(); })("focusout", function CarouselComponent_Template_div_focusout_0_listener() { return ctx.pauseFocusOut(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselComponent_a_4_Template, 3, 3, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CarouselComponent_a_5_Template, 4, 2, "a", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showIndicators && ctx.slides.length > 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, ctx.multilist ? "flex" : "block"));
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], encapsulation: 2 });
    return CarouselComponent;
}());
if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideComponent = /** @class */ /*@__PURE__*/ (function () {
    function SlideComponent(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
        function () {
            this.carousel.addSlide(this);
            this.itemWidth = 100 / this.carousel.itemsPerSlide + "%";
        };
    /** Fires changes in container collection after removing of this slide instance */
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
        function () {
            this.carousel.removeSlide(this);
        };
    SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CarouselComponent)); };
    SlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SlideComponent, selectors: [["slide"]], hostVars: 13, hostBindings: function SlideComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-hidden", !ctx.active);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.itemWidth)("order", ctx.order);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("item", ctx.addClass)("carousel-item", ctx.addClass)("active", ctx.active)("carousel-animation", ctx.isAnimated);
            }
        }, inputs: { active: "active" }, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.active);
            }
        }, styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"] });
    return SlideComponent;
}());
if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselModule = /** @class */ /*@__PURE__*/ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = /**
     * @return {?}
     */
        function () {
            return { ngModule: CarouselModule, providers: [] };
        };
    CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CarouselModule });
    CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, providers: [CarouselConfig], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: function () {
                return [SlideComponent,
                    CarouselComponent];
            }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () {
                return [SlideComponent,
                    CarouselComponent];
            } });
    })();
    return CarouselModule;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

//# sourceMappingURL=ngx-bootstrap-carousel.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm5/ngx-bootstrap-utils.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm5/ngx-bootstrap-utils.js ***!
  \************************************************************************************/
/*! exports provided: LinkedList, OnChange, Trigger, Utils, document, isBs3, listenToTriggers, listenToTriggersV2, parseTriggers, registerEscClick, registerOutsideClick, setTheme, warnOnce, window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return OnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return isBs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggers", function() { return listenToTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return listenToTriggersV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return parseTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEscClick", function() { return registerEscClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return registerOutsideClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return setTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return warnOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ /*@__PURE__*/ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = /**
     * @return {?}
     */
        function () {
            return this.open === 'manual' || this.close === 'manual';
        };
    return Trigger;
}());
if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ListenOptions() { }
if (false) {}
/** @type {?} */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/* tslint:disable-next-line: no-any */
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) {
        aliases = DEFAULT_ALIASES;
    }
    /** @type {?} */
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    var parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map(( /**
 * @param {?} trigger
 * @return {?}
 */function (trigger) { return trigger.split(':'); }))
        .map(( /**
 * @param {?} triggerPair
 * @return {?}
 */function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    }));
    /** @type {?} */
    var manualTriggers = parsedTriggers.filter(( /**
     * @param {?} triggerPair
     * @return {?}
     */function (triggerPair) {
        return triggerPair.isManual();
    }));
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
function listenToTriggers(renderer, 
/* tslint:disable-next-line: no-any */
target, triggers, showFn, hideFn, toggleFn) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(triggers);
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(( /**
     * @param {?} trigger
     * @return {?}
     */function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    }));
    return ( /**
     * @return {?}
     */function () {
        listeners.forEach(( /**
         * @param {?} unsubscribeFn
         * @return {?}
         */function (unsubscribeFn) { return unsubscribeFn(); }));
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function listenToTriggersV2(renderer, options) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(options.triggers);
    /** @type {?} */
    var target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    var listeners = [];
    // lazy listeners registration
    /** @type {?} */
    var _registerHide = [];
    /** @type {?} */
    var registerHide = ( /**
     * @return {?}
     */function () {
        // add hide listeners to unregister array
        _registerHide.forEach(( /**
         * @param {?} fn
         * @return {?}
         */function (fn) { return listeners.push(fn()); }));
        // register hide events only once
        _registerHide.length = 0;
    });
    // register open\close\toggle listeners
    parsedTriggers.forEach(( /**
     * @param {?} trigger
     * @return {?}
     */function (trigger) {
        /** @type {?} */
        var useToggle = trigger.open === trigger.close;
        /** @type {?} */
        var showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push(( /**
             * @return {?}
             */function () {
                return renderer.listen(target, trigger.close, options.hide);
            }));
        }
        listeners.push(renderer.listen(target, trigger.open, ( /**
         * @return {?}
         */function () { return showFn(registerHide); })));
    }));
    return ( /**
     * @return {?}
     */function () {
        listeners.forEach(( /**
         * @param {?} unsubscribeFn
         * @return {?}
         */function (unsubscribeFn) { return unsubscribeFn(); }));
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    /* tslint:disable-next-line: no-any */
    return renderer.listen('document', 'click', ( /**
     * @param {?} event
     * @return {?}
     */function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some(( /**
             * @param {?} target
             * @return {?}
             */function (target) { return target.contains(event.target); }))) {
            return undefined;
        }
        options.hide();
    }));
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function registerEscClick(renderer, options) {
    if (!options.outsideEsc) {
        return Function.prototype;
    }
    return renderer.listen('document', 'keyup.esc', ( /**
     * @param {?} event
     * @return {?}
     */function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some(( /**
             * @param {?} target
             * @return {?}
             */function (target) { return target.contains(event.target); }))) {
            return undefined;
        }
        options.hide();
    }));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 * @type {?}
 */
var win = (typeof window !== 'undefined' && window) || ( /** @type {?} */({}));
/** @type {?} */
var document$1 = win.document;
/** @type {?} */
var location = win.location;
/** @type {?} */
var gc = win.gc ? ( /**
 * @return {?}
 */function () { return win.gc(); }) : ( /**
 * @return {?}
 */function () { return null; });
/** @type {?} */
var performance = win.performance ? win.performance : null;
/** @type {?} */
var Event = win.Event;
/** @type {?} */
var MouseEvent = win.MouseEvent;
/** @type {?} */
var KeyboardEvent = win.KeyboardEvent;
/** @type {?} */
var EventTarget = win.EventTarget;
/** @type {?} */
var History = win.History;
/** @type {?} */
var Location = win.Location;
/** @type {?} */
var EventListener = win.EventListener;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var guessedVersion;
/**
 * @return {?}
 */
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    /** @type {?} */
    var spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    /** @type {?} */
    var rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
/**
 * @param {?} theme
 * @return {?}
 */
function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
/**
 * @return {?}
 */
function isBs3() {
    if (typeof win === 'undefined') {
        return true;
    }
    if (typeof win.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return win.__theme !== 'bs4';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */ LinkedList = /** @class */ /*@__PURE__*/ (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.get = /**
     * @param {?} position
     * @return {?}
     */
        function (position) {
            if (this.length === 0 || position < 0 || position >= this.length) {
                return void 0;
            }
            /** @type {?} */
            var current = this.head;
            for (var index = 0; index < position; index++) {
                current = current.next;
            }
            return current.value;
        };
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.add = /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
        function (value, position) {
            if (position === void 0) {
                position = this.length;
            }
            if (position < 0 || position > this.length) {
                throw new Error('Position is out of the list');
            }
            /* tslint:disable-next-line: no-any*/
            /** @type {?} */
            var node = {
                value: value,
                next: undefined,
                previous: undefined
            };
            if (this.length === 0) {
                this.head = node;
                this.tail = node;
                this.current = node;
            }
            else {
                if (position === 0) {
                    // first node
                    node.next = this.head;
                    this.head.previous = node;
                    this.head = node;
                }
                else if (position === this.length) {
                    // last node
                    this.tail.next = node;
                    node.previous = this.tail;
                    this.tail = node;
                }
                else {
                    // node in middle
                    /** @type {?} */
                    var currentPreviousNode = this.getNode(position - 1);
                    /** @type {?} */
                    var currentNextNode = currentPreviousNode.next;
                    currentPreviousNode.next = node;
                    currentNextNode.previous = node;
                    node.previous = currentPreviousNode;
                    node.next = currentNextNode;
                }
            }
            this.length++;
            this.createInternalArrayRepresentation();
        };
    /**
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.remove = /**
     * @param {?=} position
     * @return {?}
     */
        function (position) {
            if (position === void 0) {
                position = 0;
            }
            if (this.length === 0 || position < 0 || position >= this.length) {
                throw new Error('Position is out of the list');
            }
            if (position === 0) {
                // first node
                this.head = this.head.next;
                if (this.head) {
                    // there is no second node
                    this.head.previous = undefined;
                }
                else {
                    // there is no second node
                    this.tail = undefined;
                }
            }
            else if (position === this.length - 1) {
                // last node
                this.tail = this.tail.previous;
                this.tail.next = undefined;
            }
            else {
                // middle node
                /** @type {?} */
                var removedNode = this.getNode(position);
                removedNode.next.previous = removedNode.previous;
                removedNode.previous.next = removedNode.next;
            }
            this.length--;
            this.createInternalArrayRepresentation();
        };
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.set = /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
        function (position, value) {
            if (this.length === 0 || position < 0 || position >= this.length) {
                throw new Error('Position is out of the list');
            }
            /** @type {?} */
            var node = this.getNode(position);
            node.value = value;
            this.createInternalArrayRepresentation();
        };
    /**
     * @return {?}
     */
    LinkedList.prototype.toArray = /**
     * @return {?}
     */
        function () {
            return this.asArray;
        };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findAll = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            /** @type {?} */
            var current = this.head;
            /* tslint:disable-next-line: no-any*/
            /** @type {?} */
            var result = [];
            for (var index = 0; index < this.length; index++) {
                if (fn(current.value, index)) {
                    result.push({ index: index, value: current.value });
                }
                current = current.next;
            }
            return result;
        };
    // Array methods overriding start
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.push =
        // Array methods overriding start
        /**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            /* tslint:disable-next-line: no-any*/
            args.forEach(( /**
             * @param {?} arg
             * @return {?}
             */function (arg) {
                _this.add(arg);
            }));
            return this.length;
        };
    /**
     * @return {?}
     */
    LinkedList.prototype.pop = /**
     * @return {?}
     */
        function () {
            if (this.length === 0) {
                return undefined;
            }
            /** @type {?} */
            var last = this.tail;
            this.remove(this.length - 1);
            return last.value;
        };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.unshift = /**
     * @param {...?} args
     * @return {?}
     */
        function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args.reverse();
            /* tslint:disable-next-line: no-any*/
            args.forEach(( /**
             * @param {?} arg
             * @return {?}
             */function (arg) {
                _this.add(arg, 0);
            }));
            return this.length;
        };
    /**
     * @return {?}
     */
    LinkedList.prototype.shift = /**
     * @return {?}
     */
        function () {
            if (this.length === 0) {
                return undefined;
            }
            /** @type {?} */
            var lastItem = this.head.value;
            this.remove();
            return lastItem;
        };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.forEach = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            /** @type {?} */
            var current = this.head;
            for (var index = 0; index < this.length; index++) {
                fn(current.value, index);
                current = current.next;
            }
        };
    /**
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.indexOf = /**
     * @param {?} value
     * @return {?}
     */
        function (value) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */
            var position = 0;
            for (var index = 0; index < this.length; index++) {
                if (current.value === value) {
                    position = index;
                    break;
                }
                current = current.next;
            }
            return position;
        };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.some = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */
            var result = false;
            while (current && !result) {
                if (fn(current.value)) {
                    result = true;
                    break;
                }
                current = current.next;
            }
            return result;
        };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.every = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */
            var result = true;
            while (current && result) {
                if (!fn(current.value)) {
                    result = false;
                }
                current = current.next;
            }
            return result;
        };
    /**
     * @return {?}
     */
    LinkedList.prototype.toString = /**
     * @return {?}
     */
        function () {
            return '[Linked List]';
        };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.find = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */
            var result;
            for (var index = 0; index < this.length; index++) {
                if (fn(current.value, index)) {
                    result = current.value;
                    break;
                }
                current = current.next;
            }
            return result;
        };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findIndex = /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            /** @type {?} */
            var current = this.head;
            /** @type {?} */
            var result;
            for (var index = 0; index < this.length; index++) {
                if (fn(current.value, index)) {
                    result = index;
                    break;
                }
                current = current.next;
            }
            return result;
        };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.getNode = /* tslint:disable-next-line: no-any*/
        /**
         * @protected
         * @param {?} position
         * @return {?}
         */
        function (position) {
            if (this.length === 0 || position < 0 || position >= this.length) {
                throw new Error('Position is out of the list');
            }
            /** @type {?} */
            var current = this.head;
            for (var index = 0; index < position; index++) {
                current = current.next;
            }
            return current;
        };
    /**
     * @protected
     * @return {?}
     */
    LinkedList.prototype.createInternalArrayRepresentation = /**
     * @protected
     * @return {?}
     */
        function () {
            /* tslint:disable-next-line: no-any*/
            /** @type {?} */
            var outArray = [];
            /** @type {?} */
            var current = this.head;
            while (current) {
                outArray.push(current.value);
                current = current.next;
            }
            this.asArray = outArray;
        };
    return LinkedList;
}());
if (false) {}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable:no-invalid-this */
/* tslint:disable-next-line: no-any */
/**
 * @param {?=} defaultValue
 * @return {?}
 */
function OnChange(defaultValue) {
    /** @type {?} */
    var sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return ( /**
     * @param {?} target
     * @param {?} propertyKey
     * @return {?}
     */function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */
            get: /* tslint:disable-next-line: no-any */ 
            /**
             * @return {?}
             */
            function () {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            set: /* tslint:disable-next-line: no-any */ 
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    });
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Utils = /** @class */ /*@__PURE__*/ (function () {
    function Utils() {
    }
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = /* tslint:disable-next-line: no-any */
        /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /* tslint:disable-next-line: no-any */
            (( /**
             * @param {?} bs
             * @return {?}
             */function (bs) { return bs; }))(element.offsetHeight);
        };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /* tslint:disable-next-line: no-any */
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles =
        // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} elem
         * @return {?}
         */
        function (elem) {
            // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
            // IE throws on elements created in popups
            // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
            /** @type {?} */
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) {
                view = win;
            }
            return view.getComputedStyle(elem);
        };
    return Utils;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var _messagesHash = {};
/** @type {?} */
var _hideMsg = typeof console === 'undefined' || !('warn' in console);
/**
 * @param {?} msg
 * @return {?}
 */
function warnOnce(msg) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

//# sourceMappingURL=ngx-bootstrap-utils.js.map


/***/ }),

/***/ "./src/app/content/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/content/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/content/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");





var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    },
    {
        path: 'page-not-found',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../shared/page-not-found/page-not-found.module */ "./src/app/shared/page-not-found/page-not-found.module.ts")).then(function (m) { return m.PageNotFoundModule; });
        },
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full',
    },
];
var HomeRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return HomeRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "./src/app/content/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/content/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");




var HomeComponent = /** @class */ /*@__PURE__*/ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.cities = 8;
        this.institutes = 237;
        this.teachers = 953;
        this.students = 2584;
    };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ngx-home"]], decls: 250, vars: 5, consts: [[1, "main-container"], [1, "container"], ["interval", "3000", 3, "isAnimated"], ["src", "./../../../assets/images/home/slide-1.jpg", "alt", "first slide", 1, "slide-content-image"], ["src", "./../../../assets/images/home/slide-2.jpg", "alt", "second slide", 1, "slide-content-image"], ["src", "./../../../assets/images/home/slide-3.jpg", "alt", "third slide", 1, "slide-content-image"], [1, "bg-warning", "text-center"], [1, "row"], [1, "col-md-3", "col-sm-6", "col-12"], [1, "counter-text"], [1, "text-center"], [1, "col-md-3", "col-sm-6", "col-12", "mx-auto"], [1, "service"], [1, "icon"], [1, "far", "fa-calendar-alt"], [1, "far", "fa-id-badge"], [1, "fas", "fa-user-check"], [1, "far", "fa-credit-card"], [1, "fas", "fa-user-slash"], [1, "fa", "fa-bar-chart"], [1, "fa", "fa-line-chart"], [1, "far", "fa-bell"], [1, "fa", "fa-video"], [1, "fas", "fa-book-reader"], [1, "far", "fa-edit"], [1, "fas", "fa-desktop"], [1, "fas", "fa-tasks"], [1, "fa", "fa-share-square"], [1, "col-md-4", "cpl-sm-6", "col-12", "mx-auto"], [1, "fa", "fa-user"]], template: function HomeComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "carousel", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "slide");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "slide");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "slide");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cities");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Institutes");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Teachers");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Students");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "POWER TO YOU");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " CLASS MANAGEMENT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " No more tedious paperwork and running after students to communicate your schedule. Easily maintain and communicate your schedules to students and parents. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " STUDENT MANAGEMENT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Maintain and manage your enrollments hassle free. Add students with a single click and view their details anytime, anywhere. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " ATTENDANCE MANAGEMENT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Mark your attendance digitally and instantly update parents about their child\u2019s attendance. Instant communication means happier parents. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " FEE RECORDS & MANAGEMENT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Go paperless with automatic receipt generations for fee collections. Get reminded of and send reminders of fee instalment dates automatically. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " EMPLOYEE MANAGEMENT & ACCESS CONTROL ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Add teachers, managers and counsellors and control what they can view for your students and batches. Divide roles and responsibilities and keep your data secure. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " INSIGHTFUL BUSINESS REPORTS ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Class Master enables you to look at your key business metrics consolidated into a single dashboard. Understand your business trends better. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " STUDENT PERFORMANCE TRACKER ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Don\u2019t just learn. Benchmark! Now get a personalized performance record of your child\u2019s performance. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " REAL TIME NOTIFICATIONS & ALERTS ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Everything at Class Master is Real time. Reduce your cost and effort of communication and maintain a log to ensure that no student misses an important update. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " ENHANCED LIVE CLASS EXPERIENCE ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Go Online! Integrate your platform of choice and provide students the comfort of learning from their homes and reach out to students across larger geographies to increase your reach and enrollments. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " LECTURE MANAGEMENT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " With Class Master Learning Management Organize your eLearning content in one location and Easily tracks learner progress and performance. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " EXAM MANAGEMENT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " No more tedious paperwork to maintain mark-sheets, manage mark-sheets digitally and instantly update parents about their child\u2019s Exam Performance. Instant communication means happier parents. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " ONLINE EXAM MANAGEMENT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " With the online Exam Management, there comes hassle-free exam preparation. There are no more time-taking activities including manual question paper creation and printing, allocation of tasks to faculty, managing records of students attending exams, allocating rooms, and much more. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " ASSIGNMENT MANAGEMENT ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Class Master Assignment Management help is regarded as the easiest way to lift off the academic burden. The experts handling the writing tasks are skilled to accommodate last minute assignments in different challenging subjects. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " COURSE & LECTURE MATERIAL ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Reduce your cost of photocopies. Share your notes and material digitally to a single student or your entire institute at no additional cost. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h1", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Why We?");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "LOW COST");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " For the features it packs, Eduatlas is super value for money. We have priced our plans so that you end up saving at least 5 times of what you spend. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "SECURE");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " We know that your data is your pot of gold and for that we have secured it using SSL AES 256-bit encryption and multiple layers of security. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h1", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Testimonials");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "i", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Chinmay Palshetkar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Sarvesh Nerurkar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "nb-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "nb-card-header", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "i", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h4");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Akash Kulkarni");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "hr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cities, "+");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.institutes, "+");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.teachers, "+");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.students, "+");
            }
        }, directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"]], styles: [".slide-content-image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.counter[_ngcontent-%COMP%], .counter-text[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n}\n\n.card-color[_ngcontent-%COMP%] {\n  background-color: #fcce02;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.mark-attendance-selector[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 75%;\n  border-radius: 50%;\n  background: #fcce02;\n  height: 3.5rem;\n  width: 3.5rem;\n  padding-top: 0.9rem;\n  margin: 0.25rem;\n  line-height: 1.5rem;\n  text-align: center;\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n}"] });
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/content/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/content/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm5/index.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/content/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/content/home/home-routing.module.ts");







var HomeModule = /** @class */ /*@__PURE__*/ (function () {
    function HomeModule() {
    }
    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbActionsModule"],
            ]] });
    return HomeModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbActionsModule"]] });
})();


/***/ })

}]);