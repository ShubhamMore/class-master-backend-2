(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5], {
    /***/
    "./src/app/pipe/safe-html.pipe.ts":
    /*!****************************************!*\
      !*** ./src/app/pipe/safe-html.pipe.ts ***!
      \****************************************/

    /*! exports provided: SafeHtmlPipe */

    /***/
    function srcAppPipeSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
        return SafeHtmlPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /**
       * Generated class for the SafeHtmlPipe pipe.
       *
       * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
       */


      var SafeHtmlPipe = /*@__PURE__*/function () {
        var SafeHtmlPipe = /*#__PURE__*/function () {
          function SafeHtmlPipe(sanitizer) {
            _classCallCheck(this, SafeHtmlPipe);

            this.sanitizer = sanitizer;
          }

          _createClass(SafeHtmlPipe, [{
            key: "transform",
            value: function transform(html) {
              return this.sanitizer.bypassSecurityTrustHtml(html);
            }
          }]);

          return SafeHtmlPipe;
        }();

        SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
          return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
        };

        SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
          name: "safeHtml",
          type: SafeHtmlPipe,
          pure: true
        });
        return SafeHtmlPipe;
      }();
      /***/

    },

    /***/
    "./src/app/pipe/safe-url.pipe.ts":
    /*!***************************************!*\
      !*** ./src/app/pipe/safe-url.pipe.ts ***!
      \***************************************/

    /*! exports provided: SafeUrlPipe */

    /***/
    function srcAppPipeSafeUrlPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function () {
        return SafeUrlPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      var SafeUrlPipe = /*@__PURE__*/function () {
        var SafeUrlPipe = /*#__PURE__*/function () {
          function SafeUrlPipe(sanitizer) {
            _classCallCheck(this, SafeUrlPipe);

            this.sanitizer = sanitizer;
          }

          _createClass(SafeUrlPipe, [{
            key: "transform",
            value: function transform(url) {
              return this.sanitizer.bypassSecurityTrustResourceUrl(url);
            }
          }]);

          return SafeUrlPipe;
        }();

        SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) {
          return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
        };

        SafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
          name: "safeUrl",
          type: SafeUrlPipe,
          pure: true
        });
        return SafeUrlPipe;
      }();
      /***/

    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../pipe/safe-url.pipe */
      "./src/app/pipe/safe-url.pipe.ts");
      /* harmony import */


      var _pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../pipe/safe-html.pipe */
      "./src/app/pipe/safe-html.pipe.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./terms-conditions/terms-conditions.component */
      "./src/app/shared/terms-conditions/terms-conditions.component.ts");

      var SharedModule = /*@__PURE__*/function () {
        var SharedModule = function SharedModule() {
          _classCallCheck(this, SharedModule);
        };

        SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
          type: SharedModule
        });
        SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
          factory: function SharedModule_Factory(t) {
            return new (t || SharedModule)();
          },
          imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"]]]
        });
        return SharedModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeHtmlPipe"], _pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_1__["SafeUrlPipe"], _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_4__["TermsConditionsComponent"]],
          imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbCardModule"]],
          exports: [_pipe_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__["SafeHtmlPipe"], _pipe_safe_url_pipe__WEBPACK_IMPORTED_MODULE_1__["SafeUrlPipe"], _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_4__["TermsConditionsComponent"]]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/terms-conditions/terms-conditions.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/shared/terms-conditions/terms-conditions.component.ts ***!
      \***********************************************************************/

    /*! exports provided: TermsConditionsComponent */

    /***/
    function srcAppSharedTermsConditionsTermsConditionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function () {
        return TermsConditionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

      var TermsConditionsComponent = /*@__PURE__*/function () {
        var TermsConditionsComponent = /*#__PURE__*/function () {
          function TermsConditionsComponent() {
            _classCallCheck(this, TermsConditionsComponent);
          }

          _createClass(TermsConditionsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return TermsConditionsComponent;
        }();

        TermsConditionsComponent.ɵfac = function TermsConditionsComponent_Factory(t) {
          return new (t || TermsConditionsComponent)();
        };

        TermsConditionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: TermsConditionsComponent,
          selectors: [["ngx-terms-conditions"]],
          decls: 111,
          vars: 0,
          template: function TermsConditionsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "General Terms & Conditions");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " These Advertising Terms and Conditions (the \u201CTerms\u201D) are entered into by and between theclassmaster.in, an SHUBHAM ENTERPRISES brand, and the Client subscribing to The Class Master services, and govern the terms of Client\u2019s usage of The Class Master services including but not limited to Listings and related information on The Class Master\u2019s websites; mobile applications; customer-care no. +919920589037, and other properties. The Terms are effective as of the date that you subscribe to the services, and that as the signer of this Agreement, you represent that you are authorized to sign on behalf of and bind the Client to the obligations under the Agreement. The Agreement (including its Purchase Order) becomes void if not accepted within the calendar month in which the Agreement was sent to Client by Class Master (\u201CAgreement Expiration Date\u201D). ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Listing Account");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " The Class Master will establish a Listing account enabling Client to purchase listing services (\u201CThe Class Master listing\u201D) that The Class Master makes available to Client in connection with The Class Master\u2019s websites, mobile applications, and other properties, including properties set forth in a Purchase Order (\u201CServices\u201D). Each such purchase will be set forth in a purchase order agreed to in writing by both parties which sets forth the The Class Master listings being purchased, applicable fees, the duration of the paid listing commitment (the \u201CCommitment Period\u201D), renewal terms, and the date that paid listing will commence, among other information (\u201CPurchase Order\u201D). Each Purchase Order is governed by and incorporated into the Terms, and any conflict between them will be resolved in favor of the Purchase Order. Client\u2019s initial Purchase Order is attached to these Terms ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The Class Master Listing ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The Class Master Listing encompass a range of different advertising programs. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " The \u201CStarter Kit\u201D allows Client to access advanced features in connection with its business profile page, such as posting multiple programs, photo & video, and dedicated account support. As it develops new advertising features, The Class Master may from time to time replace any of the foregoing features with features of substantially similar value. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Fees and Payment ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Client will pay The Class Master the fees specified in each Purchase Order for the duration of its term. The fees are fixed for the duration of the commitment period specified in the applicable Purchase Order, but may be modified by The Class Master thereafter by providing one month\u2019s prior written notice to Client. The fees are net of any taxes Client may be required to pay in its taxing jurisdiction. Payments are due in advance of the period for which they apply, or as otherwise set forth in the Purchase Order. Unpaid amounts or errors may be billed in subsequent invoices. If Client\u2019s payment method fails or Client\u2019s account is past due, The Class Master may collect past due amounts using other collection mechanisms, and Client agrees to pay all expenses associated with such collection, including reasonable attorneys\u2019 fees. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Cancellation/Refund Policy: While availing any of the payment method/s available on the Website, The Class Master will not be responsible or assume any liability whatsoever in respect of any loss or damage arising directly or indirectly to you. All payments made on the Website, including payments made toward registration for classes, are non-refundable. In the event payment is deducted from the User\u2019s account with non-completion of the booking, the exact amount shall be refunded to the User via the same mode of payment within 3-5 working days. All commercial terms are on a principal-to-principal basis between the Merchant and the users and The Class Master\u2019s payment facility is merely used to facilitate the completion of the transaction. Transaction charges, not limited to payment gateway charges, shall be applicable, unless explicitly waived off by The Class Master. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " IF CLIENT PROVIDES The Class Master WITH CREDIT CARD, DEBIT CARD, OR BANK ACCOUNT INFORMATION, CLIENT AUTHORIZES The Class Master TO USE SUCH PAYMENT INFORMATION TO AUTOMATICALLY CHARGE CLIENT ON A RECURRING BASIS TO COLLECT ALL FEES DUE HEREUNDER. CLIENT REPRESENTS THAT HE OR SHE IS AUTHORIZED TO INCUR CHARGES AGAINST THE PAYMENT CARD USED TO PURCHASE The Class Master ADS. THE FORM OF PAYMENT CANNOT BE CHANGED OR ALTERED UNLESS ALL AMOUNTS DUE UNDER THE TERMS HAVE BEEN PAID IN FULL OR OTHERWISE AGREED TO BY THE PARTIES IN WRITING. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Representations and Warranties ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Each party represents and warrants to the other that it is duly organized, validly existing, and in good standing under the laws of the jurisdiction in which it was organized; all contact and entity information is complete, correct and current, and the execution and delivery of the Terms, and the performance of the transactions contemplated hereby, are within its corporate powers, and have been duly authorized by all necessary corporate action. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Client represents and warrants to The Class Master that any information or materials that Client provides in connection with The Class Master listings will (a) be true and complete, (b) not contain any material which violates The Class Master\u2019s content guidelines or which is otherwise unlawful, defamatory or obscene, or which infringes or violates any third-party rights (including any intellectual property rights or privacy or publicity rights) or which may encourage a criminal offense or otherwise give rise to civil liability and (c) comply with all applicable laws and regulations in its performance of the Terms (including all applicable privacy / data protection laws and regulations and laws related to Promotions). \u201CPromotions\u201D are any contest, sweepstakes, coupon or other promotion appearing on or promoted through the Site by Client. The Class Master reserves the right to reject or remove any Advertising Materials at its sole discretion, and to alter any Advertising Materials to conform to technical specifications. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Client further represents and warrants to The Class Master that Client will not, and will not authorize or induce any other party, to: (a) generate automated, fraudulent or otherwise invalid inquiries, conversions or other actions; (b) use any automated means or form of scraping or data extraction to access, query or otherwise collect Class Master content and reviews from the Site, except as expressly permitted by The Class Master or (c) use any The Class Master trademarks in any manner without The Class Master\u2019s prior written consent. All rights not expressly granted to Client hereunder are reserved by The Class Master. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Information About and Use of the Site ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " The Site allows consumers to post reviews about businesses like Client\u2019s. The Site employs automated software to help it showcase the most relevant and reliable reviews while suppressing others. Client\u2019s purchase of The Class Master Ads will not influence the automated software, or otherwise allow or enable Client, directly or indirectly, to remove, alter or reorder the reviews on the Site. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Termination ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Each Purchase Order will expire at the end of the Commitment Period unless (i) otherwise terminated earlier under these Terms or (ii) the Purchase Order contains a renewal period that automatically extends the term of the Purchase Order beyond the Commitment Period (collectively the \u201CPO Term\u201D). Client must provide written notice (an email to Client\u2019s assigned The Class Master account representative is permissible) to terminate a Purchase Order on or before the 15th day of the month in order for the Purchase Order to terminate at the end of that month. If Client provides written notice after the 15th day of the month, then the Purchase Order will terminate at the end of the following month. Unless otherwise terminated as provided under the Terms, the Terms will automatically expire three (3) months after the termination or expiration of the last surviving Purchase Order. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " IF CLIENT TERMINATES A PURCHASE ORDER BEFORE THE END OF THE COMMITMENT PERIOD, CLIENT AGREES TO PAY ANY AND ALL EARLY TERMINATION FEES SET FORTH IN THE PURCHASE ORDER(S), RECOGNIZING THAT The Class Master BEARS CERTAIN UP-FRONT COSTS, AND THAT THERE IS AN IMPLIED PRICING DISCOUNT BASED ON THE LENGTH OF CLIENT\u2019S CHOSEN COMMITMENT PERIOD. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " The Class Master may terminate any Purchase Order or the Terms at any time for any or no reason without liability, effective immediately, by providing written notice to Client. In the event of such termination, Client will immediately pay all unpaid The Class Master Ad fees through the date of termination, and The Class Master will reimburse any fees that were prepaid for The Class Master Ads to be rendered after the date of such termination. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " The Class Master\u2019S DISCLAIMER OF WARRANTIES ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " CLIENT ACKNOWLEDGES AND AGREES THAT The Class Master SERVICES ARE PROVIDED TO CLIENT ON AN \u201CAS IS\u201D, \u201CWITH ALL FAULTS\u201D AND \u201CAS AVAILABLE\u201D BASIS. The Class Master MAKES NO WARRANTIES, EITHER EXPRESS OR IMPLIED, ABOUT THE The Class Master LISTING AND EXPRESSLY DISCLAIMS THE WARRANTY OF MERCHANTABILITY AND WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE. FURTHERMORE, TO THE FULLEST EXTENT PERMITTED BY LAW, The Class Master SPECIFICALLY DISCLAIMS ALL WARRANTIES AND GUARANTEES REGARDING (I) THE PERFORMANCE, QUALITY AND RESULTS FOR THE SERVICE, (II) PAGE VIEWS, CONVERSIONS OR OTHER PERFORMANCE OR RESULTS FOR THE SERVICE, (III) THE ACCURACY OF THE INFORMATION THAT The Class Master PROVIDES IN CONNECTION WITH THE SITE OR The Class Master LISTING (E.G. REACH, SIZE OF AUDIENCE, DEMOGRAPHICS OR OTHER PURPORTED CHARACTERISTICS OF AUDIENCE), (IV) The Class Master\u2019S ABILITY TO TARGET ADS TO OR IN CONNECTION WITH SPECIFIC USERS, TYPES OF USERS, USER QUERIES, OR OTHER USER BEHAVIORS. The Class Master SHALL NOT BE LIABLE FOR NON-PERFORMANCE DUE TO CAUSES BEYOND ITS REASONABLE CONTROL. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " LIMITATIONS OF LIABILITY ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " FOR ALL CLAIMS ARISING FROM OR IN CONNECTION WITH A PURCHASE ORDER, The Class Master LISTING, OR THE TERMS THAT ARE NOT EXPRESSLY ADDRESSED IN THIS SECTION TITLED \u201CLIMITATIONS OF LIABILITY\u201D, The Class Master\u2019S MAXIMUM LIABILITY AND CLIENT\u2019S EXCLUSIVE REMEDY IS THE AGGREGATE FEES PAYABLE TO The Class Master HEREUNDER DURING THE SPECIFIED COMMITMENT PERIOD EXCEPT WHERE AND TO THE EXTENT PROHIBITED BY APPLICABLE LAW. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " NEITHER PARTY NOR ITS AFFILIATES WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR EXEMPLARY DAMAGES (INCLUDING LOSS OF PROFITS OR REVENUE, OR INTERRUPTION OF BUSINESS) ARISING OUT OF OR RELATED TO A PURCHASE ORDER, THE Class Master LISTING, THE SITE, OR THESE TERMS, REGARDLESS OF THE THEORY OF LIABILITY, EVEN IF A PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " The Class Master does not represent in any manner that: ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "The information, data or contents of the Website are accurate.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " The Website will be available at all times and will operate error free or that there will be uninterrupted access and service. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " The integrity of the information on the Website or information you upload will be maintained. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "We endorses any of the views of any of the users who may have posted content.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " We have verified or guarantee the quality of services or representations made by any user of the Website. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "We have verified the credit worthiness of any user.");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " We have screened or verified any of the information posted herein and The Website or any content is free from viruses or other malware. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Indemnification ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Client will indemnify, defend, and hold The Class Master and its officers, directors, agents, and employees harmless from and against any and all claims, actions, losses, damages, liabilities, costs and expenses (including but not limited to attorneys\u2019 fees and court costs) (collectively a \u201CThird Party Claim\u201D) arising out of or in connection with (i) the Advertising Materials, Client Instructions, or Client\u2019s use of The Class Master Ads, (ii) any breach of representations or warranties provided under these Terms by Client in Section IV, (iii) any Promotion, including any claims for any violation by the Promotion of any applicable law, rule or regulation, (iv) Client\u2019s products or services or the provision thereof to end users. The Class Master will notify Client promptly of any Third Party Claim for which it seeks indemnification and will permit Client to control the defense of such Third Party Claim with counsel chosen by Client; provided, that Client will not enter into any settlement that contains any admission of or stipulation to any guilt, fault, liability or wrongdoing on the part of The Class Master without Class Master\u2019s prior written consent. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Force Majeure ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " In no event shall The Class Master be liable for any acts beyond our control or for any acts of god. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Choice of Law and Arbitration ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Any claim, controversy or dispute arising out of or relating to the Terms (\u201CClaim\u201D) shall be settled under the laws of Indian courts subject to laws of Republic of India. In the event of any dispute of whatever nature, such dispute shall be settled in good faith between the parties. In case, such dispute cannot be resolved by negotiation within 30 days, such dispute shall be referred to a binding arbitration in accordance with the provisions of the Arbitration and Conciliation Act 1996. The place of arbitration shall be Delhi, India. In case of the dispute requiring intervention of courts, courts in Delhi, India alone shall have exclusive jurisdiction. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " XII. In no event shall The Class Master be liable for any loss of profits (anticipated or real), loss of business, loss of reputation, loss of data, loss of goodwill, any business interruption or any direct, indirect, special, incidental, consequential, punitive, tort or other damages, however caused, whether or not we have been advised of the possibility of such damages. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Miscellaneous ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " (a) The Terms and its exhibits are expressly limited to and made conditional upon Client\u2019s acceptance of its terms and conditions before the Expiration Date. Any of Client\u2019s terms or conditions which are in addition to or different from those contained in or added by way of interlineation to the Terms or any Purchase Order as originally provided to Client by The Class Master which are not separately expressly agreed to in writing by both parties are deemed material and are hereby objected to and rejected by The Class Master. No conditions, printed or otherwise, appearing on other contracts, orders or copy instructions which conflict with, vary, or add to these Terms will be binding on The Class Master, and any conflicting or additional terms contain in any other documents or oral discussions are void. The Terms embody the entire and exclusive agreement between the parties respecting the subject matter of herein, and supersede any and all prior related oral, emailed or written representations and agreements between the parties. No statements or promises by either party have been relied upon in entering into these Terms, except as expressly set forth herein. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " (b) Anyone agreeing to the Terms on behalf of Client represents and warrants that it has full legal power and authority to enter into these Terms, perform its obligations hereunder, and authorize the fee payments set forth in the Purchase Order(s). ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " (c) Notices under these Terms must be in writing and sent via facsimile, registered or certified mail or commercial courier to the parties at their respective addresses set forth herein. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " (d) The Terms may not be amended or modified except as agreed upon in writing by the parties. No provision in the Terms may be waived, except pursuant to a writing executed by the party against whom the waiver is sought to be enforced. Client may not assign any rights or obligations under the Terms without The Class Master\u2019s prior consent, and any purported assignment by Client shall be void. If any provision of the Terms is held to be invalid or unenforceable, the parties will substitute for the affected provision a valid or enforceable provision that approximates the intent and economic effect of the affected provision. Sections VII, VIII, IX, X and XI of the Terms will survive any termination of the Term. ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"]],
          styles: [""]
        });
        return TermsConditionsComponent;
      }();
      /***/

    }
  }]);
})();