function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"1TA9":function(e,t,n){"use strict";n.r(t);var a=n("3Pt+"),r=n("aceb"),o=n("ofXK"),s=n("tyNb"),i=n("qsE9"),l=n("lJxs"),c=n("IAlr"),u=n("ZatZ"),m=n("EQut"),b=n("JmRu"),d=n("emOf"),p=n("fXoL"),I=["stepper"];function g(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Generated By is required! "),p.Vb())}function h(e,t){if(1&e&&(p.Ub(0),p.Ac(1,g,2,0,"p",51),p.Tb()),2&e){var n=p.gc(2);p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("generatedBy").errors?null:n.courseInstallmentReceiptForm.get("generatedBy").errors.required)}}function v(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Installment Date is required! "),p.Vb())}function f(e,t){if(1&e&&(p.Ub(0),p.Ac(1,v,2,0,"p",51),p.Tb()),2&e){var n=p.gc(2);p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("date").errors?null:n.courseInstallmentReceiptForm.get("date").errors.required)}}function R(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Installment Amount is required! "),p.Vb())}function C(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Minimum Installment Amount should be 0 "),p.Vb())}function W(e,t){if(1&e&&(p.Ub(0),p.Ac(1,R,2,0,"p",51),p.Ac(2,C,2,0,"p",51),p.Tb()),2&e){var n=p.gc(2);p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("amount").errors?null:n.courseInstallmentReceiptForm.get("amount").errors.required),p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("amount").errors?null:n.courseInstallmentReceiptForm.get("amount").errors.min)}}function V(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Minimum late fee Amount should be 0. "),p.Vb())}function F(e,t){if(1&e&&(p.Ub(0),p.Ac(1,V,2,0,"p",51),p.Tb()),2&e){var n=p.gc(2);p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("lateFee").errors?null:n.courseInstallmentReceiptForm.get("lateFee").errors.min)}}function y(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Total Amount is Required! "),p.Vb())}function D(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Minimum late fee Amount should be 0. "),p.Vb())}function A(e,t){if(1&e&&(p.Ub(0),p.Ac(1,y,2,0,"p",51),p.Ac(2,D,2,0,"p",51),p.Tb()),2&e){var n=p.gc(2);p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("totalAmount").errors?null:n.courseInstallmentReceiptForm.get("totalAmount").errors.required),p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("totalAmount").errors?null:n.courseInstallmentReceiptForm.get("totalAmount").errors.min)}}function E(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Pending Amount is Required! "),p.Vb())}function k(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Minimum Pending Amount should be 0. "),p.Vb())}function w(e,t){if(1&e&&(p.Ub(0),p.Ac(1,E,2,0,"p",51),p.Ac(2,k,2,0,"p",51),p.Tb()),2&e){var n=p.gc(2);p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("amountDue").errors?null:n.courseInstallmentReceiptForm.get("amountDue").errors.required),p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("amountDue").errors?null:n.courseInstallmentReceiptForm.get("amountDue").errors.min)}}function S(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Payment date is required! "),p.Vb())}function T(e,t){if(1&e&&(p.Ub(0),p.Ac(1,S,2,0,"p",51),p.Tb()),2&e){var n=p.gc(2);p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("paymentDate").errors?null:n.courseInstallmentReceiptForm.get("paymentDate").errors.required)}}function q(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Payment Mode is required! "),p.Vb())}function B(e,t){if(1&e&&(p.Ub(0),p.Ac(1,q,2,0,"p",51),p.Tb()),2&e){var n=p.gc(2);p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("paymentMode").errors?null:n.courseInstallmentReceiptForm.get("paymentMode").errors.required)}}function M(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Bank Details are required! "),p.Vb())}function N(e,t){if(1&e&&(p.Ub(0),p.Ac(1,M,2,0,"p",51),p.Tb()),2&e){var n=p.gc(2);p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("bankDetails").errors?null:n.courseInstallmentReceiptForm.get("bankDetails").errors.required)}}function P(e,t){1&e&&(p.Wb(0,"p",52),p.Cc(1," Transaction Details are required! "),p.Vb())}function x(e,t){if(1&e&&(p.Ub(0),p.Ac(1,P,2,0,"p",51),p.Tb()),2&e){var n=p.gc(2);p.Eb(1),p.mc("ngIf",null==n.courseInstallmentReceiptForm.get("transactionDetails").errors?null:n.courseInstallmentReceiptForm.get("transactionDetails").errors.required)}}function Q(e,t){if(1&e){var n=p.Xb();p.Wb(0,"nb-card"),p.Wb(1,"nb-card-header"),p.Wb(2,"button",1),p.ec("click",(function(){return p.uc(n),p.gc().back()})),p.Cc(3," Back "),p.Vb(),p.Wb(4,"h3",2),p.Cc(5," Collect Installment "),p.Vb(),p.Vb(),p.Wb(6,"nb-card-body"),p.Wb(7,"nb-stepper",3,4),p.Wb(9,"nb-step",5),p.Wb(10,"form",6),p.ec("submit",(function(){return p.uc(n),p.gc().courseInstallmentReceiptFormSubmit()})),p.Wb(11,"div",7),p.Wb(12,"div",8),p.Wb(13,"div",9),p.Wb(14,"label",10),p.Cc(15,"Generated By:"),p.Vb(),p.Rb(16,"input",11),p.Ac(17,h,2,1,"ng-container",0),p.Vb(),p.Vb(),p.Wb(18,"div",8),p.Wb(19,"div",9),p.Wb(20,"label",12),p.Cc(21,"Installment Date:"),p.Vb(),p.Rb(22,"input",13),p.Ac(23,f,2,1,"ng-container",0),p.Vb(),p.Vb(),p.Wb(24,"div",14),p.Wb(25,"div",9),p.Wb(26,"label",15),p.Cc(27,"Installment Amount:"),p.Vb(),p.Rb(28,"input",16),p.Ac(29,W,3,2,"ng-container",0),p.Vb(),p.Vb(),p.Wb(30,"div",14),p.Wb(31,"div",9),p.Wb(32,"label",17),p.Cc(33,"Late Fee:"),p.Vb(),p.Wb(34,"input",18),p.ec("input",(function(){return p.uc(n),p.gc().calculateTotalAmount()})),p.Vb(),p.Ac(35,F,2,1,"ng-container",0),p.Vb(),p.Vb(),p.Wb(36,"div",14),p.Wb(37,"div",9),p.Wb(38,"label",19),p.Cc(39,"Total Fee:"),p.Vb(),p.Rb(40,"input",20),p.Ac(41,A,3,2,"ng-container",0),p.Vb(),p.Vb(),p.Wb(42,"div",14),p.Wb(43,"div",9),p.Wb(44,"label",21),p.Cc(45,"Pending Amount:"),p.Vb(),p.Rb(46,"input",22),p.Ac(47,w,3,2,"ng-container",0),p.Vb(),p.Vb(),p.Wb(48,"div",14),p.Wb(49,"div",9),p.Wb(50,"label",23),p.Cc(51,"Payment Date:"),p.Vb(),p.Rb(52,"input",24),p.Ac(53,T,2,1,"ng-container",0),p.Vb(),p.Vb(),p.Wb(54,"div",14),p.Wb(55,"div",9),p.Wb(56,"label",25),p.Cc(57,"Payment Mode:"),p.Vb(),p.Wb(58,"nb-select",26),p.Wb(59,"nb-option",27),p.Cc(60,"Select Payment Mode"),p.Vb(),p.Wb(61,"nb-option",28),p.Cc(62,"Cash"),p.Vb(),p.Wb(63,"nb-option",29),p.Cc(64,"Card"),p.Vb(),p.Wb(65,"nb-option",30),p.Cc(66,"Waller"),p.Vb(),p.Wb(67,"nb-option",31),p.Cc(68,"Other"),p.Vb(),p.Vb(),p.Vb(),p.Ac(69,B,2,1,"ng-container",0),p.Vb(),p.Wb(70,"div",8),p.Wb(71,"div",9),p.Wb(72,"label",32),p.Cc(73,"Bank Details:"),p.Vb(),p.Rb(74,"input",33),p.Ac(75,N,2,1,"ng-container",0),p.Vb(),p.Vb(),p.Wb(76,"div",8),p.Wb(77,"div",9),p.Wb(78,"label",34),p.Cc(79,"Transaction Details:"),p.Vb(),p.Rb(80,"input",35),p.Ac(81,x,2,1,"ng-container",0),p.Vb(),p.Vb(),p.Wb(82,"div",36),p.Wb(83,"div",9),p.Wb(84,"label",37),p.Cc(85,"Description:"),p.Vb(),p.Rb(86,"textarea",38),p.Vb(),p.Vb(),p.Vb(),p.Rb(87,"hr"),p.Wb(88,"div",7),p.Wb(89,"div",39),p.Wb(90,"button",40),p.Wb(91,"span"),p.Cc(92,"Next"),p.Vb(),p.Rb(93,"nb-icon",41),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Wb(94,"nb-step",42),p.Wb(95,"div",43),p.Wb(96,"div",44),p.Wb(97,"table",45),p.Wb(98,"tbody"),p.Wb(99,"tr"),p.Wb(100,"th"),p.Cc(101,"Course"),p.Vb(),p.Wb(102,"td"),p.Cc(103),p.hc(104,"async"),p.Vb(),p.Vb(),p.Wb(105,"tr"),p.Wb(106,"th"),p.Cc(107,"Generated By"),p.Vb(),p.Wb(108,"td"),p.Cc(109),p.Vb(),p.Vb(),p.Wb(110,"tr"),p.Wb(111,"th"),p.Cc(112,"Installment Date"),p.Vb(),p.Wb(113,"td"),p.Cc(114),p.Vb(),p.Vb(),p.Wb(115,"tr"),p.Wb(116,"th"),p.Cc(117,"Installment Amount"),p.Vb(),p.Wb(118,"td"),p.Cc(119),p.Vb(),p.Vb(),p.Wb(120,"tr"),p.Wb(121,"th"),p.Cc(122,"Late Fee"),p.Vb(),p.Wb(123,"td"),p.Cc(124),p.Vb(),p.Vb(),p.Wb(125,"tr"),p.Wb(126,"th"),p.Cc(127,"Total Amount"),p.Vb(),p.Wb(128,"td"),p.Cc(129),p.Vb(),p.Vb(),p.Wb(130,"tr"),p.Wb(131,"th"),p.Cc(132,"Payment Date"),p.Vb(),p.Wb(133,"td"),p.Cc(134),p.Vb(),p.Vb(),p.Wb(135,"tr"),p.Wb(136,"th"),p.Cc(137,"Payment Mode"),p.Vb(),p.Wb(138,"td"),p.Cc(139),p.hc(140,"uppercase"),p.Vb(),p.Vb(),p.Wb(141,"tr"),p.Wb(142,"th"),p.Cc(143,"Bank Details"),p.Vb(),p.Wb(144,"td"),p.Cc(145),p.Vb(),p.Vb(),p.Wb(146,"tr"),p.Wb(147,"th"),p.Cc(148,"Transaction Details"),p.Vb(),p.Wb(149,"td"),p.Cc(150),p.Vb(),p.Vb(),p.Wb(151,"tr"),p.Wb(152,"th"),p.Cc(153,"description"),p.Vb(),p.Wb(154,"td"),p.Cc(155),p.Vb(),p.Vb(),p.Wb(156,"tr"),p.Wb(157,"th"),p.Cc(158,"Pending Amount"),p.Vb(),p.Wb(159,"td"),p.Cc(160),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Rb(161,"hr"),p.Wb(162,"div",7),p.Wb(163,"div",46),p.Wb(164,"button",47),p.ec("click",(function(){return p.uc(n),p.gc().previousStep()})),p.Rb(165,"nb-icon",48),p.Wb(166,"span"),p.Cc(167,"prev"),p.Vb(),p.Vb(),p.Vb(),p.Wb(168,"div",49),p.Wb(169,"button",50),p.ec("click",(function(){return p.uc(n),p.gc().saveCourseInstallmentReceipt()})),p.Wb(170,"span"),p.Cc(171,"Submit"),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Vb(),p.Vb()}if(2&e){var a=p.gc();p.Eb(7),p.mc("linear",!0)("disableStepNavigation",!0),p.Eb(2),p.mc("stepControl",a.courseInstallmentReceiptForm),p.Eb(1),p.mc("formGroup",a.courseInstallmentReceiptForm),p.Eb(6),p.mc("status",a.courseInstallmentReceiptForm.get("generatedBy").touched?a.courseInstallmentReceiptForm.get("generatedBy").invalid?"danger":"success":"basic"),p.Eb(1),p.mc("ngIf",a.courseInstallmentReceiptForm.get("generatedBy").invalid&&a.courseInstallmentReceiptForm.get("generatedBy").touched),p.Eb(5),p.mc("status",a.courseInstallmentReceiptForm.get("date").touched?a.courseInstallmentReceiptForm.get("date").invalid?"danger":"success":"basic"),p.Eb(1),p.mc("ngIf",a.courseInstallmentReceiptForm.get("date").invalid&&a.courseInstallmentReceiptForm.get("date").touched),p.Eb(5),p.mc("status",a.courseInstallmentReceiptForm.get("amount").touched?a.courseInstallmentReceiptForm.get("amount").invalid?"danger":"success":"basic"),p.Eb(1),p.mc("ngIf",a.courseInstallmentReceiptForm.get("amount").invalid&&a.courseInstallmentReceiptForm.get("amount").touched),p.Eb(5),p.mc("status",a.courseInstallmentReceiptForm.get("lateFee").touched?a.courseInstallmentReceiptForm.get("lateFee").invalid?"danger":"success":"basic"),p.Eb(1),p.mc("ngIf",a.courseInstallmentReceiptForm.get("lateFee").invalid&&a.courseInstallmentReceiptForm.get("lateFee").touched),p.Eb(5),p.mc("status",a.courseInstallmentReceiptForm.get("totalAmount").touched?a.courseInstallmentReceiptForm.get("totalAmount").invalid?"danger":"success":"basic"),p.Eb(1),p.mc("ngIf",a.courseInstallmentReceiptForm.get("totalAmount").invalid&&a.courseInstallmentReceiptForm.get("totalAmount").touched),p.Eb(5),p.mc("status",a.courseInstallmentReceiptForm.get("amountDue").touched?a.courseInstallmentReceiptForm.get("amountDue").invalid?"danger":"success":"basic"),p.Eb(1),p.mc("ngIf",a.courseInstallmentReceiptForm.get("amountDue").invalid&&a.courseInstallmentReceiptForm.get("amountDue").touched),p.Eb(5),p.mc("status",a.courseInstallmentReceiptForm.get("paymentDate").touched?a.courseInstallmentReceiptForm.get("paymentDate").invalid?"danger":"success":"basic"),p.Eb(1),p.mc("ngIf",a.courseInstallmentReceiptForm.get("paymentDate").touched&&a.courseInstallmentReceiptForm.get("paymentDate").invalid),p.Eb(5),p.mc("status",a.courseInstallmentReceiptForm.get("paymentMode").touched?a.courseInstallmentReceiptForm.get("paymentMode").invalid?"danger":"success":"basic"),p.Eb(11),p.mc("ngIf",a.courseInstallmentReceiptForm.get("paymentMode").touched&&a.courseInstallmentReceiptForm.get("paymentMode").invalid),p.Eb(5),p.mc("status",a.courseInstallmentReceiptForm.get("bankDetails").touched?a.courseInstallmentReceiptForm.get("bankDetails").invalid?"danger":"success":"basic"),p.Eb(1),p.mc("ngIf",a.courseInstallmentReceiptForm.get("bankDetails").invalid&&a.courseInstallmentReceiptForm.get("bankDetails").touched),p.Eb(5),p.mc("status",a.courseInstallmentReceiptForm.get("transactionDetails").touched?a.courseInstallmentReceiptForm.get("transactionDetails").invalid?"danger":"success":"basic"),p.Eb(1),p.mc("ngIf",a.courseInstallmentReceiptForm.get("transactionDetails").invalid&&a.courseInstallmentReceiptForm.get("transactionDetails").touched),p.Eb(22),p.Dc(p.ic(104,36,a.getCourseName(a.courseId))),p.Eb(6),p.Dc(a.courseInstallmentReceiptForm.value.generatedBy),p.Eb(5),p.Dc(a.dateService.formatDate(a.courseInstallmentReceiptForm.value.date)),p.Eb(5),p.Ec(" ",a.courseInstallmentReceiptForm.value.installmentAmount," "),p.Eb(5),p.Dc(a.courseInstallmentReceiptForm.value.lateFee),p.Eb(5),p.Dc(a.courseInstallmentReceiptForm.value.totalAmount),p.Eb(5),p.Ec(" ",a.dateService.formatDate(a.courseInstallmentReceiptForm.value.paymentDate)," "),p.Eb(5),p.Dc(p.ic(140,38,a.courseInstallmentReceiptForm.value.paymentMode)),p.Eb(6),p.Dc(a.courseInstallmentReceiptForm.value.bankDetails),p.Eb(5),p.Dc(a.courseInstallmentReceiptForm.value.transactionDetails),p.Eb(5),p.Dc(a.courseInstallmentReceiptForm.value.description),p.Eb(5),p.Dc(a.courseInstallmentReceiptForm.value.amountDue)}}var U,_,O=[{path:"",component:(U=function(){function e(t,n,a,r,o,s,i,l,c){_classCallCheck(this,e),this.dateService=t,this.branchService=n,this.toastrService=a,this.studentService=r,this.courseService=o,this.studentCourseInstallmentService=s,this.studentCourseInstallmentReceiptService=i,this.router=l,this.route=c}return _createClass(e,[{key:"ngOnInit",value:function(){var e,t=this;if(this.loading=!0,this.branchId=this.branchService.getBranchId(),this.categoryId=this.branchService.getCategoryId(),this.courseId=this.courseService.getCourseId(),this.studentId=this.studentService.getStudentId(),this.courseInstallmentId=this.studentCourseInstallmentService.getCourseInstallmentId(),this.branchId&&this.categoryId&&this.courseId&&this.studentId)return this.studentCourseInstallmentId=this.studentCourseInstallmentService.getStudentCourseInstallmentId(),this.courseInstallmentReceiptForm=new a.f({generatedBy:new a.d(null,{validators:[a.u.required]}),date:new a.d(null,{validators:[a.u.required]}),amount:new a.d(null,{validators:[a.u.min(0)]}),lateFee:new a.d(0,{validators:[a.u.min(0)]}),totalAmount:new a.d(null,{validators:[a.u.required,a.u.min(0)]}),paymentDate:new a.d(this.dateService.getDateString(),{validators:[a.u.required]}),paymentMode:new a.d("",{validators:[a.u.required]}),bankDetails:new a.d(null,{validators:[]}),transactionDetails:new a.d(null,{validators:[]}),description:new a.d(null,{validators:[]}),amountDue:new a.d(null,{validators:[a.u.required,a.u.min(0)]})}),this.route.queryParams.subscribe((function(t){e=t.mode})),e&&"edit"!==e?(this.showToastr("top-right","danger","Invalid Route"),void this.router.navigate(["../"],{relativeTo:this.route})):(this.studentCourseInstallmentReceiptId=this.studentCourseInstallmentReceiptService.getStudentCourseInstallmentReceiptId(),e&&!this.studentCourseInstallmentReceiptId?(this.showToastr("top-right","danger","Receipt Id Not Provided"),void this.router.navigate(["../"],{relativeTo:this.route})):void(this.studentCourseInstallmentReceiptId?this.studentCourseInstallmentReceiptService.getStudentCourseInstallmentReceiptForEditing(this.studentCourseInstallmentReceiptId).subscribe((function(e){if(!e)return t.showToastr("top-right","danger","Receipt Not Available"),void t.router.navigate(["../"],{relativeTo:t.route});t.studentCourseInstallmentReceipt=e,t.courseInstallmentReceiptForm.patchValue({generatedBy:t.studentCourseInstallmentReceipt.generatedBy,date:t.studentCourseInstallmentReceipt.date,amount:t.studentCourseInstallmentReceipt.amount,lateFee:t.studentCourseInstallmentReceipt.lateFee,totalAmount:t.studentCourseInstallmentReceipt.totalAmount,paymentDate:t.studentCourseInstallmentReceipt.paymentDate,paymentMode:t.studentCourseInstallmentReceipt.paymentMode,bankDetails:t.studentCourseInstallmentReceipt.bankDetails,transactionDetails:t.studentCourseInstallmentReceipt.transactionDetails,description:t.studentCourseInstallmentReceipt.description,amountDue:t.studentCourseInstallmentReceipt.amountDue}),t.loading=!1}),(function(e){t.showToastr("top-right","danger","Receipt Not Available"),t.router.navigate(["../"],{relativeTo:t.route})})):this.studentCourseInstallmentService.getCourseInstallment(this.courseInstallmentId).subscribe((function(e){e?(t.courseInstallment=e,t.courseInstallmentReceiptForm.patchValue({date:e.installmentDate,amount:e.installmentAmount,amountDue:e.amountPending}),t.calculateTotalAmount(),t.loading=!1):t.router.navigate(["../"],{relativeTo:t.route})}))));this.router.navigate(["../"],{relativeTo:this.route})}},{key:"calculateTotalAmount",value:function(){var e=+this.courseInstallmentReceiptForm.getRawValue().lateFee;(!e||e<0)&&(e=0);var t=+this.courseInstallmentReceiptForm.getRawValue().amount;this.courseInstallmentReceiptForm.patchValue({totalAmount:t+e})}},{key:"previousStep",value:function(){this.stepper.previous()}},{key:"courseInstallmentReceiptFormSubmit",value:function(){this.courseInstallmentReceiptForm.markAllAsTouched(),this.courseInstallmentReceiptForm.invalid?this.showToastr("top-right","danger","Receipt Details are Required"):this.stepper.next()}},{key:"saveCourseInstallmentReceipt",value:function(){var e=this;if(this.courseInstallmentReceiptForm.invalid)this.showToastr("top-right","danger","Receipt Details are Required");else{this.loading=!0;var t=this.courseInstallmentReceiptForm.getRawValue();t.studentCourseInstallmentId=this.studentCourseInstallmentId,t.courseInstallmentId=this.courseInstallmentId,t.branch=this.branchId,t.category=this.categoryId,t.course=this.courseId,t.student=this.studentId,this.studentCourseInstallmentReceipt?(t._id=this.studentCourseInstallmentReceipt._id,this.studentCourseInstallmentReceiptService.editStudentCourseInstallmentReceipt(t).subscribe((function(t){e.showToastr("top-right","success","Installment Receipt Updated Successfully!"),e.back()}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))):this.studentCourseInstallmentReceiptService.addStudentCourseInstallmentReceipt(t).subscribe((function(t){e.showToastr("top-right","success","Installment Receipt Generated Successfully!"),e.studentCourseInstallmentService.setCourseInstallmentReceipt(e.courseInstallmentId,t.receiptId),e.back()}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}}},{key:"getCourseName",value:function(e){return this.courseService.getCourseName(e).pipe(Object(l.a)((function(e){return e})))}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"ngOnDestroy",value:function(){this.studentCourseInstallmentReceiptService.deleteStudentCourseInstallmentReceiptId(),this.studentCourseInstallmentService.deleteCourseInstallmentId()}}]),e}(),U.\u0275fac=function(e){return new(e||U)(p.Qb(u.a),p.Qb(m.a),p.Qb(r.xb),p.Qb(b.a),p.Qb(c.a),p.Qb(i.a),p.Qb(d.a),p.Qb(s.c),p.Qb(s.a))},U.\u0275cmp=p.Kb({type:U,selectors:[["ngx-collect-student-course-installment"]],viewQuery:function(e,t){var n;1&e&&p.Hc(I,!0),2&e&&p.rc(n=p.fc())&&(t.stepper=n.first)},decls:1,vars:1,consts:[[4,"ngIf"],["type","button","nbButton","","status","warning","size","tiny",1,"float-right",3,"click"],[1,""],[3,"linear","disableStepNavigation"],["stepper",""],["label","Receipt Details",3,"stepControl"],[1,"",3,"formGroup","submit"],[1,"row"],[1,"col-md-6"],[1,"form-control-group"],["for","input-generatedBy",1,"label"],["type","text","nbInput","","id","input-generatedBy","name","generatedBy","formControlName","generatedBy","placeholder","Generated By","fullWidth","",3,"status"],["for","input-date",1,"label"],["type","date","nbInput","","id","input-date","name","date","formControlName","date","placeholder","Date","fullWidth","","disabled","true",3,"status"],[1,"col-md-4"],["for","input-amount",1,"label"],["type","number","nbInput","","id","input-amount","name","amount","min","0","formControlName","amount","placeholder","amount","fullWidth","","disabled","true",3,"status"],["for","input-lateFee",1,"label"],["type","number","nbInput","","id","input-lateFee","name","lateFee","min","0","formControlName","lateFee","placeholder","lateFee","fullWidth","",3,"status","input"],["for","input-totalAmount",1,"label"],["type","number","nbInput","","id","input-totalAmount","name","totalAmount","min","0","formControlName","totalAmount","placeholder","totalAmount","fullWidth","","disabled","true",3,"status"],["for","input-amountDue",1,"label"],["type","number","nbInput","","id","input-amountDue","name","amountDue","min","0","formControlName","amountDue","placeholder","Amount Due","fullWidth","","disabled","true",3,"status"],["for","input-paymentDate",1,"label"],["type","date","nbInput","","id","input-paymentDate","name","paymentDate","formControlName","paymentDate","placeholder","Payment Date","fullWidth","",3,"status"],["for","input-paymentMode",1,"label"],["id","input-paymentMode","name","paymentMode","formControlName","paymentMode","placeholder","paymentMode","fullWidth","",3,"status"],["value",""],["value","cash"],["value","card"],["value","wallet"],["value","other"],["for","input-bankDetails",1,"label"],["type","text","nbInput","","id","input-bankDetails","name","bankDetails","formControlName","bankDetails","placeholder","Bank Details","fullWidth","",3,"status"],["for","input-transactionDetails",1,"label"],["type","text","nbInput","","id","input-transactionDetails","name","transactionDetails","formControlName","transactionDetails","placeholder","Transaction Details","fullWidth","",3,"status"],[1,"col-md-12"],["for","input-description",1,"label"],["type","text","nbInput","","rows","2","id","input-description","name","description","formControlName","description","placeholder","Description (Optional)","fullWidth",""],[1,"col-md-12","text-right"],["nbButton","","type","submit"],["icon","arrow-ios-forward-outline"],["label","Submit"],[1,"step-container"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"col-md-6","text-left"],["type","button","nbButton","",1,"",3,"click"],["icon","arrow-ios-back-outline"],[1,"col-md-6","text-right"],["nbButton","","type","button",3,"click"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){1&e&&p.Ac(0,Q,172,40,"nb-card",0),2&e&&p.mc("ngIf",!t.loading)},directives:[o.n,r.x,r.z,r.u,r.w,r.pb,r.ob,a.v,a.n,a.g,r.O,a.a,a.m,a.e,a.q,r.jb,r.eb,r.L],pipes:[o.b,o.v],styles:[""]}),U)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],G=((_=function e(){_classCallCheck(this,e)}).\u0275mod=p.Ob({type:_}),_.\u0275inj=p.Nb({factory:function(e){return new(e||_)},imports:[[s.g.forChild(O)],s.g]}),_);n.d(t,"CollectStudentCourseInstallmentModule",(function(){return J}));var j,J=((j=function e(){_classCallCheck(this,e)}).\u0275mod=p.Ob({type:j}),j.\u0275inj=p.Nb({factory:function(e){return new(e||j)},imports:[[o.c,G,r.A,r.P,r.kb,r.v,r.N,r.qb,a.s]]}),j)}}]);