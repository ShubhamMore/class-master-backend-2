function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{LoJD:function(t,e,n){"use strict";n.r(e);var i=n("ofXK"),r=n("tyNb"),o=n("ZatZ"),c=n("3Pt+"),d=n("5V5q"),s=n("EQut"),u=n("fXoL"),a=n("aceb"),f=["stepper"];function b(t,e){1&t&&(u.Wb(0,"p",42),u.Cc(1," Offer Name is required! "),u.Vb())}function l(t,e){if(1&t&&(u.Ub(0),u.Ac(1,b,2,0,"p",41),u.Tb()),2&t){var n=u.gc();u.Eb(1),u.mc("ngIf",null==n.discountAndOfferForm.get("offerName").errors?null:n.discountAndOfferForm.get("offerName").errors.required)}}function p(t,e){1&t&&(u.Wb(0,"p",42),u.Cc(1," Code is required! "),u.Vb())}function m(t,e){1&t&&(u.Wb(0,"p",42),u.Cc(1," This Offer Code Already Exist! "),u.Vb())}function h(t,e){if(1&t&&(u.Ub(0),u.Ac(1,p,2,0,"p",41),u.Ac(2,m,2,0,"p",41),u.Tb()),2&t){var n=u.gc();u.Eb(1),u.mc("ngIf",null==n.discountAndOfferForm.get("code").errors?null:n.discountAndOfferForm.get("code").errors.required),u.Eb(1),u.mc("ngIf",!n.validOfferCode)}}function v(t,e){if(1&t&&(u.Wb(0,"nb-option",43),u.Cc(1),u.hc(2,"uppercase"),u.Vb()),2&t){var n=e.$implicit;u.mc("value",n),u.Eb(1),u.Dc(u.ic(2,2,n))}}function g(t,e){1&t&&(u.Wb(0,"p",42),u.Cc(1," Discount Type is required! "),u.Vb())}function A(t,e){if(1&t&&(u.Ub(0),u.Ac(1,g,2,0,"p",41),u.Tb()),2&t){var n=u.gc();u.Eb(1),u.mc("ngIf",null==n.discountAndOfferForm.get("discountType").errors?null:n.discountAndOfferForm.get("discountType").errors.required)}}function O(t,e){1&t&&(u.Wb(0,"p",42),u.Cc(1," Discount Amount is required! "),u.Vb())}function W(t,e){1&t&&(u.Wb(0,"p",42),u.Cc(1," Discount Amount should be more than or equal to 0 "),u.Vb())}function V(t,e){1&t&&(u.Wb(0,"p",42),u.Cc(1," Discount Percentage should be between 0% to 100% "),u.Vb())}function C(t,e){if(1&t&&(u.Ub(0),u.Ac(1,O,2,0,"p",41),u.Ac(2,W,2,0,"p",41),u.Ac(3,V,2,0,"p",41),u.Tb()),2&t){var n=u.gc();u.Eb(1),u.mc("ngIf",null==n.discountAndOfferForm.get("discountAmount").errors?null:n.discountAndOfferForm.get("discountAmount").errors.required),u.Eb(1),u.mc("ngIf",null==n.discountAndOfferForm.get("discountAmount").errors?null:n.discountAndOfferForm.get("discountAmount").errors.min),u.Eb(1),u.mc("ngIf",n.discountAndOfferForm.hasError("invalidDiscountPercentage"))}}function D(t,e){1&t&&(u.Wb(0,"p",42),u.Cc(1," Start Date is required! "),u.Vb())}function y(t,e){if(1&t&&(u.Ub(0),u.Ac(1,D,2,0,"p",41),u.Tb()),2&t){var n=u.gc();u.Eb(1),u.mc("ngIf",null==n.discountAndOfferForm.get("startDate").errors?null:n.discountAndOfferForm.get("startDate").errors.required)}}var F,T,E=[{path:"",component:(F=function(){function t(e,n,i,r,o,c){var d=this;_classCallCheck(this,t),this.branchService=e,this.dateService=n,this.discountAndOfferService=i,this.toastrService=r,this.router=o,this.route=c,this.route.queryParams.subscribe((function(t){d.ngOnInit()}))}return _createClass(t,[{key:"ngOnInit",value:function(){var t,e=this;if(this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId)return this.discountAndOfferId=this.discountAndOfferService.getDiscountAndOfferId(),this.route.queryParams.subscribe((function(e){t=e.mode})),t&&"edit"!==t?(this.showToastr("top-right","danger","Invalid Route"),void this.router.navigate(["../page-not-found"],{relativeTo:this.route})):t&&!this.discountAndOfferId?(this.showToastr("top-right","danger","Discount And Offer Not Available"),void this.router.navigate(["../page-not-found"],{relativeTo:this.route})):(this.discountTypes=this.discountAndOfferService.getDiscountTypes(),this.validOfferCode=!0,this.discountAndOfferForm=new c.f({offerName:new c.d(null,{validators:[c.u.required]}),code:new c.d(null,{validators:[c.u.required]}),discountType:new c.d(null,{validators:[c.u.required]}),discountAmount:new c.d(null,{validators:[c.u.required,c.u.min(0)]}),startDate:new c.d(null,{validators:[c.u.required]}),expiryDate:new c.d(null,{validators:[]}),description:new c.d(null,{validators:[]}),termsAndConditions:new c.d(null,{validators:[]})},{validators:this.discountPercentageValidator.bind(this)}),void(this.discountAndOfferId?this.discountAndOfferService.getDiscountAndOfferForEditing(this.discountAndOfferId).subscribe((function(t){t?(e.discountAndOffer=t,e.discountAndOfferForm.patchValue({offerName:t.offerName,code:t.code,discountType:t.discountType,discountAmount:t.discountAmount,startDate:t.startDate,expiryDate:t.expiryDate,description:t.description,termsAndConditions:t.termsAndConditions}),e.loading=!1):e.router.navigate(["../page-not-found"],{relativeTo:e.route})}),(function(t){e.router.navigate(["../page-not-found"],{relativeTo:e.route})})):this.loading=!1));this.router.navigate(["../"],{relativeTo:this.route})}},{key:"discountPercentageValidator",value:function(t){return"percentage"===t.value.discountType&&+t.value.discountAmount>100?{invalidDiscountPercentage:!0}:null}},{key:"checkOfferCode",value:function(t){var e=this;this.discountAndOffer&&this.discountAndOffer.code===t?this.validOfferCode=!0:this.discountAndOfferService.CheckDiscountAndOffer(this.branchId,t).subscribe((function(t){e.validOfferCode=t.status}),(function(t){}))}},{key:"submitDiscountAndOffer",value:function(){this.discountAndOfferForm.markAllAsTouched(),this.discountAndOfferForm.invalid?this.showToastr("top-right","danger","Discount & Offer Details are required"):this.validOfferCode?this.stepper.next():this.showToastr("top-right","danger","This Offer Code Already Exist")}},{key:"saveDiscountAndOffer",value:function(){var t=this;if(this.discountAndOfferForm.markAllAsTouched(),this.discountAndOfferForm.invalid)this.showToastr("top-right","danger","Discount & Offer Details are required");else if(this.validOfferCode){this.loading=!0;var e=this.discountAndOfferForm.value;e.branch=this.branchId,this.discountAndOffer?(e._id=this.discountAndOffer._id,this.discountAndOfferService.editDiscountAndOffer(e).subscribe((function(e){t.showToastr("top-right","success","Discount And Offer Updated Successfully!"),t.router.navigate(["../"],{relativeTo:t.route})}),(function(e){t.showToastr("top-right","danger",e),t.loading=!1}))):this.discountAndOfferService.addDiscountAndOffer(e).subscribe((function(e){t.showToastr("top-right","success","New Discount And Offer Added Successfully!"),t.router.navigate(["../"],{relativeTo:t.route})}),(function(e){t.showToastr("top-right","danger",e),t.loading=!1}))}else this.showToastr("top-right","danger","This Offer Code Already Exist")}},{key:"showToastr",value:function(t,e,n){this.toastrService.show(e,n,{position:t,status:e})}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.discountAndOfferService.deleteDiscountAndOfferId()}}]),t}(),F.\u0275fac=function(t){return new(t||F)(u.Qb(s.a),u.Qb(o.a),u.Qb(d.a),u.Qb(a.xb),u.Qb(r.c),u.Qb(r.a))},F.\u0275cmp=u.Kb({type:F,selectors:[["ngx-add-discount-and-offer"]],viewQuery:function(t,e){var n;1&t&&u.Hc(f,!0),2&t&&u.rc(n=u.fc())&&(e.stepper=n.first)},decls:127,vars:31,consts:[["nbButton","","status","warning","size","tiny",1,"float-right",3,"click"],[1,""],[3,"linear"],["stepper",""],["label","Basic Details",3,"stepControl"],[1,"",3,"formGroup","submit"],[1,"row"],[1,"col-md-4"],[1,"form-control-group"],["for","input-offer-name",1,"label"],["type","text","nbInput","","id","input-offer-name","name","offerName","formControlName","offerName","placeholder","Offer Name","maxlength","30","fullWidth","",3,"status"],[4,"ngIf"],["for","input-code",1,"label"],["type","text","nbInput","","id","input-code","name","code","formControlName","code","placeholder","Code","maxlength","30","fullWidth","",3,"status","input"],["for","input-billing-discount-type",1,"label"],["id","input-discount-type","name","discountType","formControlName","discountType","placeholder","Select Discount Type","fullWidth","",3,"status"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","input-discount-amount",1,"label"],["type","number","nbInput","","id","input-discount-amount","name","discountAmount","min","0","formControlName","discountAmount","fullWidth","",3,"placeholder","status"],["for","input-start-date",1,"label"],["type","date","nbInput","","id","input-start-date","name","startDate","formControlName","startDate","placeholder","Start Date","fullWidth","",3,"min","status"],["for","input-expiry-date",1,"label"],["type","date","nbInput","","id","input-expiry-date","name","expiryDate","formControlName","expiryDate","placeholder","Expiry Date ","fullWidth","",3,"min"],[1,"col-md-12"],["for","input-billing-description",1,"label"],["type","text","nbInput","","id","input-description","name","description","formControlName","description","placeholder","Description (Optional)","fullWidth",""],["for","input-billing-terms-and-conditions",1,"label"],["type","text","nbInput","","id","input-terms-and-conditions","name","termsAndConditions","formControlName","termsAndConditions","placeholder","Terms & Conditions (Optional)","fullWidth",""],[1,"col-md-12","text-right"],["nbButton","","type","submit"],["icon","arrow-ios-forward-outline"],["label","Submit"],[1,"step-container"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"col-md-6","text-left"],["nbButton","","nbStepperPrevious","",1,""],["icon","arrow-ios-back-outline"],[1,"col-md-6","text-right"],["nbButton","",3,"click"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[3,"value"]],template:function(t,e){1&t&&(u.Wb(0,"nb-card"),u.Wb(1,"nb-card-header"),u.Wb(2,"button",0),u.ec("click",(function(){return e.back()})),u.Cc(3," Back "),u.Vb(),u.Wb(4,"h3",1),u.Cc(5),u.hc(6,"uppercase"),u.Vb(),u.Vb(),u.Wb(7,"nb-card-body"),u.Wb(8,"nb-stepper",2,3),u.Wb(10,"nb-step",4),u.Wb(11,"form",5),u.ec("submit",(function(){return e.submitDiscountAndOffer()})),u.Wb(12,"h6"),u.Cc(13,"Discount & Offer:"),u.Vb(),u.Wb(14,"div",6),u.Wb(15,"div",7),u.Wb(16,"div",8),u.Wb(17,"label",9),u.Cc(18,"Offer Name:"),u.Vb(),u.Rb(19,"input",10),u.Ac(20,l,2,1,"ng-container",11),u.Vb(),u.Vb(),u.Wb(21,"div",7),u.Wb(22,"div",8),u.Wb(23,"label",12),u.Cc(24,"Code:"),u.Vb(),u.Wb(25,"input",13),u.ec("input",(function(t){return e.checkOfferCode(t.target.value)})),u.Vb(),u.Ac(26,h,3,2,"ng-container",11),u.Vb(),u.Vb(),u.Wb(27,"div",7),u.Wb(28,"div",8),u.Wb(29,"label",14),u.Cc(30,"Discount Type:"),u.Vb(),u.Wb(31,"nb-select",15),u.Wb(32,"nb-option",16),u.Cc(33,"Select Discount Type"),u.Vb(),u.Ac(34,v,3,4,"nb-option",17),u.Vb(),u.Ac(35,A,2,1,"ng-container",11),u.Vb(),u.Vb(),u.Wb(36,"div",7),u.Wb(37,"div",8),u.Wb(38,"label",18),u.Cc(39,"Discount Amount:"),u.Vb(),u.Rb(40,"input",19),u.Ac(41,C,4,3,"ng-container",11),u.Vb(),u.Vb(),u.Wb(42,"div",7),u.Wb(43,"div",8),u.Wb(44,"label",20),u.Cc(45,"Start Date:"),u.Vb(),u.Rb(46,"input",21),u.Ac(47,y,2,1,"ng-container",11),u.Vb(),u.Vb(),u.Wb(48,"div",7),u.Wb(49,"div",8),u.Wb(50,"label",22),u.Cc(51,"Expiry Date:"),u.Vb(),u.Rb(52,"input",23),u.Vb(),u.Vb(),u.Wb(53,"div",24),u.Wb(54,"div",8),u.Wb(55,"label",25),u.Cc(56,"Description:"),u.Vb(),u.Rb(57,"textarea",26),u.Vb(),u.Vb(),u.Wb(58,"div",24),u.Wb(59,"div",8),u.Wb(60,"label",27),u.Cc(61,"Terms & Conditions:"),u.Vb(),u.Rb(62,"textarea",28),u.Vb(),u.Vb(),u.Vb(),u.Rb(63,"hr"),u.Wb(64,"div",6),u.Wb(65,"div",29),u.Wb(66,"button",30),u.Wb(67,"span"),u.Cc(68,"Next"),u.Vb(),u.Rb(69,"nb-icon",31),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Wb(70,"nb-step",32),u.Wb(71,"div",33),u.Wb(72,"div",34),u.Wb(73,"table",35),u.Wb(74,"tbody"),u.Wb(75,"tr"),u.Wb(76,"th"),u.Cc(77,"Offer Name"),u.Vb(),u.Wb(78,"td"),u.Cc(79),u.Vb(),u.Vb(),u.Wb(80,"tr"),u.Wb(81,"th"),u.Cc(82,"Offer Code"),u.Vb(),u.Wb(83,"td"),u.Cc(84),u.Vb(),u.Vb(),u.Wb(85,"tr"),u.Wb(86,"th"),u.Cc(87,"Discount Type"),u.Vb(),u.Wb(88,"td"),u.Cc(89),u.hc(90,"uppercase"),u.Vb(),u.Vb(),u.Wb(91,"tr"),u.Wb(92,"th"),u.Cc(93,"Discount Amount"),u.Vb(),u.Wb(94,"td"),u.Cc(95),u.Vb(),u.Vb(),u.Wb(96,"tr"),u.Wb(97,"th"),u.Cc(98,"Start Date"),u.Vb(),u.Wb(99,"td"),u.Cc(100),u.Vb(),u.Vb(),u.Wb(101,"tr"),u.Wb(102,"th"),u.Cc(103,"Expiry Date"),u.Vb(),u.Wb(104,"td"),u.Cc(105),u.Vb(),u.Vb(),u.Wb(106,"tr"),u.Wb(107,"th"),u.Cc(108,"Description"),u.Vb(),u.Wb(109,"td"),u.Cc(110),u.Vb(),u.Vb(),u.Wb(111,"tr"),u.Wb(112,"th"),u.Cc(113,"Terms & Conditions"),u.Vb(),u.Wb(114,"td"),u.Cc(115),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Rb(116,"hr"),u.Wb(117,"div",6),u.Wb(118,"div",36),u.Wb(119,"button",37),u.Rb(120,"nb-icon",38),u.Wb(121,"span"),u.Cc(122,"prev"),u.Vb(),u.Vb(),u.Vb(),u.Wb(123,"div",39),u.Wb(124,"button",40),u.ec("click",(function(){return e.saveDiscountAndOffer()})),u.Wb(125,"span"),u.Cc(126,"Submit"),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&t&&(u.Eb(5),u.Ec(" ",e.discountAndOffer?"Edit Offer "+u.ic(6,27,e.discountAndOffer.offerName):"Add New DiscountAndOffer"," "),u.Eb(3),u.mc("linear",!0),u.Eb(2),u.mc("stepControl",e.discountAndOfferForm),u.Eb(1),u.mc("formGroup",e.discountAndOfferForm),u.Eb(8),u.mc("status",e.discountAndOfferForm.get("offerName").touched?e.discountAndOfferForm.get("offerName").invalid?"danger":"success":"basic"),u.Eb(1),u.mc("ngIf",e.discountAndOfferForm.get("offerName").invalid&&e.discountAndOfferForm.get("offerName").touched),u.Eb(5),u.mc("status",e.discountAndOfferForm.get("code").touched?e.discountAndOfferForm.get("code").invalid||!e.validOfferCode?"danger":"success":"basic"),u.Eb(1),u.mc("ngIf",e.discountAndOfferForm.get("code").touched),u.Eb(5),u.mc("status",e.discountAndOfferForm.get("discountType").touched?e.discountAndOfferForm.get("discountType").invalid?"danger":"success":"basic"),u.Eb(3),u.mc("ngForOf",e.discountTypes),u.Eb(1),u.mc("ngIf",e.discountAndOfferForm.get("discountType").touched),u.Eb(5),u.oc("placeholder","Discount ","percentage"===e.discountAndOfferForm.value.discountType?"Percentage (%)":"Amount"," "),u.mc("status",e.discountAndOfferForm.get("discountAmount").touched?e.discountAndOfferForm.get("discountAmount").invalid||e.discountAndOfferForm.hasError("invalidDiscountPercentage")?"danger":"success":"basic"),u.Eb(1),u.mc("ngIf",e.discountAndOfferForm.get("discountAmount").touched),u.Eb(5),u.mc("min",e.discountAndOffer?e.discountAndOffer.startDate:e.dateService.getDateString())("status",e.discountAndOfferForm.get("startDate").touched?e.discountAndOfferForm.get("startDate").invalid?"danger":"success":"basic"),u.Eb(1),u.mc("ngIf",e.discountAndOfferForm.get("startDate").invalid&&e.discountAndOfferForm.get("startDate").touched),u.Eb(5),u.mc("min",e.discountAndOffer?e.discountAndOffer.startDate:e.dateService.getDateString()),u.Eb(27),u.Dc(e.discountAndOfferForm.value.offerName),u.Eb(5),u.Dc(e.discountAndOfferForm.value.code),u.Eb(5),u.Dc(u.ic(90,29,e.discountAndOfferForm.value.discountType)),u.Eb(6),u.Fc(" ",e.discountAndOfferForm.value.discountAmount," ","percentage"===e.discountAndOfferForm.value.discountType?"%":""," "),u.Eb(5),u.Dc(e.dateService.formatDate(e.discountAndOfferForm.value.startDate)),u.Eb(5),u.Dc(e.dateService.formatDate(e.discountAndOfferForm.value.expiryDate)),u.Eb(5),u.Dc(e.discountAndOfferForm.value.description),u.Eb(5),u.Dc(e.discountAndOfferForm.value.termsAndConditions))},directives:[a.x,a.z,a.u,a.w,a.pb,a.ob,c.v,c.n,c.g,a.O,c.a,c.m,c.e,c.i,i.n,a.jb,a.eb,i.m,c.q,a.L,a.rb],pipes:[i.v],styles:[""]}),F)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(t){return t.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],w=((T=function t(){_classCallCheck(this,t)}).\u0275mod=u.Ob({type:T}),T.\u0275inj=u.Nb({factory:function(t){return new(t||T)},imports:[[r.g.forChild(E)],r.g]}),T);n.d(e,"AddDiscountAndOfferModule",(function(){return N}));var I,N=((I=function t(){_classCallCheck(this,t)}).\u0275mod=u.Ob({type:I}),I.\u0275inj=u.Nb({factory:function(t){return new(t||I)},imports:[[i.c,w,a.A,a.v,a.kb,a.N,a.P,a.K,a.D,a.qb,a.K,c.s]]}),I)}}]);