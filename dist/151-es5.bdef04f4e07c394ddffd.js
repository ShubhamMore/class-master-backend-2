function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{Sj0N:function(t,e,n){"use strict";n.r(e);var s=n("aceb"),c=n("ofXK"),i=n("emOf"),a=n("ZatZ"),o=n("lJxs"),r=n("qsE9"),l=n("EQut"),b=n("JmRu"),u=n("IAlr"),d=n("fXoL"),m=n("tyNb");function h(t,e){if(1&t){var n=d.Xb();d.Wb(0,"button",16),d.ec("click",(function(){d.uc(n);var t=d.gc().$implicit;return d.gc(3).editReceipt(t._id,t.receiptId)})),d.Rb(1,"nb-icon",17),d.Vb()}}function p(t,e){if(1&t){var n=d.Xb();d.Wb(0,"button",18),d.ec("click",(function(){d.uc(n);var t=d.gc().$implicit;return d.gc(3).deleteReceipt(t._id,t.receiptId)})),d.Rb(1,"nb-icon",19),d.Vb()}}function f(t,e){if(1&t){var n=d.Xb();d.Wb(0,"tr"),d.Wb(1,"td"),d.Cc(2),d.Vb(),d.Wb(3,"td"),d.Cc(4),d.Vb(),d.Wb(5,"td"),d.Cc(6),d.Vb(),d.Wb(7,"td"),d.Cc(8),d.Vb(),d.Wb(9,"td"),d.Wb(10,"button",13),d.ec("click",(function(){d.uc(n);var t=e.$implicit,s=d.gc(3);return t.receiptId?s.showReceipt(t.receiptId):s.collectInstallment(t._id)})),d.Cc(11),d.Vb(),d.Vb(),d.Wb(12,"td"),d.Ac(13,h,2,0,"button",14),d.Vb(),d.Wb(14,"td"),d.Ac(15,p,2,0,"button",15),d.Vb(),d.Vb()}if(2&t){var s=e.$implicit,c=d.gc(3);d.Eb(2),d.Ec("Installment ",s.installmentNo,""),d.Eb(2),d.Dc(c.dateService.formatDate(s.installmentDate)),d.Eb(2),d.Dc(s.installmentAmount),d.Eb(2),d.Dc(s.amountPending),d.Eb(2),d.mc("status",s.receiptId?"success":"info"),d.Eb(1),d.Ec(" ",s.receiptId?"Receipt":" Collect"," "),d.Eb(2),d.mc("ngIf",s.receiptId),d.Eb(2),d.mc("ngIf",s.receiptId)}}function g(t,e){if(1&t&&(d.Wb(0,"div",6),d.Wb(1,"table",7),d.Wb(2,"thead"),d.Wb(3,"tr"),d.Wb(4,"th"),d.Cc(5,"Installment No"),d.Vb(),d.Wb(6,"th"),d.Cc(7,"Installment Date"),d.Vb(),d.Wb(8,"th"),d.Cc(9,"Installment Amount"),d.Vb(),d.Wb(10,"th"),d.Cc(11,"Pending Amount"),d.Vb(),d.Wb(12,"th"),d.Cc(13,"Collect/Receipt"),d.Vb(),d.Wb(14,"th",11),d.Cc(15,"Action"),d.Vb(),d.Vb(),d.Vb(),d.Wb(16,"tbody"),d.Ac(17,f,16,8,"tr",12),d.Vb(),d.Vb(),d.Vb()),2&t){var n=d.gc(2);d.Eb(17),d.mc("ngForOf",n.studentCourseInstallment.installments)}}function C(t,e){1&t&&(d.Wb(0,"p",20),d.Cc(1,"No Student Course Installments Available"),d.Vb())}function v(t,e){if(1&t&&(d.Ub(0),d.Wb(1,"div",6),d.Wb(2,"table",7),d.Wb(3,"tbody"),d.Wb(4,"tr",8),d.Wb(5,"td"),d.Wb(6,"span"),d.Wb(7,"strong"),d.Cc(8,"Course: "),d.Vb(),d.Cc(9),d.hc(10,"async"),d.Vb(),d.Rb(11,"br"),d.Wb(12,"span"),d.Wb(13,"strong"),d.Cc(14,"Date: "),d.Vb(),d.Cc(15),d.Vb(),d.Vb(),d.Wb(16,"td"),d.Wb(17,"span"),d.Wb(18,"strong"),d.Cc(19,"Collected Amount: "),d.Vb(),d.Cc(20),d.Vb(),d.Rb(21,"br"),d.Wb(22,"span"),d.Wb(23,"strong"),d.Cc(24,"Pending Amount: "),d.Vb(),d.Cc(25),d.Vb(),d.Rb(26,"br"),d.Wb(27,"span"),d.Wb(28,"strong"),d.Cc(29,"Total Amount: "),d.Vb(),d.Cc(30),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Rb(31,"br"),d.Ac(32,g,18,1,"div",9),d.Ac(33,C,2,0,"ng-template",null,10,d.Bc),d.Tb()),2&t){var n=d.sc(34),s=d.gc();d.Eb(9),d.Ec("",d.ic(10,7,s.getCourseName(s.studentCourseInstallment.course))," "),d.Eb(6),d.Ec("",s.dateService.formatDate(s.studentCourseInstallment.date)," "),d.Eb(5),d.Ec("",s.studentCourseInstallment.amountCollected," "),d.Eb(5),d.Ec("",s.studentCourseInstallment.pendingAmount," "),d.Eb(5),d.Dc(s.studentCourseInstallment.totalAmount),d.Eb(2),d.mc("ngIf",s.studentCourseInstallment.installments.length>0)("ngIfElse",n)}}function I(t,e){1&t&&(d.Wb(0,"p",20),d.Cc(1,"Loading..."),d.Vb())}var V,W,S=[{path:"",component:(V=function(){function t(e,n,s,c,i,a,o,r,l){_classCallCheck(this,t),this.branchService=e,this.dateService=n,this.toastrService=s,this.studentCourseInstallmentService=c,this.studentCourseInstallmentReceiptService=i,this.courseService=a,this.studentService=o,this.router=r,this.route=l}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.categoryId=this.branchService.getCategoryId(),this.studentId=this.studentService.getStudentId(),this.branchId&&this.categoryId&&this.studentId?(this.studentCourseInstallmentService.getStudentCourseInstallmentData().subscribe((function(e){t.studentCourseInstallment=e})),this.loading=!1):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getStudentName",value:function(){return this.studentService.getStudentName().pipe(Object(o.a)((function(t){return t})))}},{key:"getCourseName",value:function(t){return this.courseService.getCourseName(t).pipe(Object(o.a)((function(t){return t})))}},{key:"editReceipt",value:function(t,e){this.studentCourseInstallmentReceiptService.setStudentCourseInstallmentReceiptId(e),this.studentCourseInstallmentService.setCourseInstallmentId(t),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}},{key:"showReceipt",value:function(t){this.studentCourseInstallmentReceiptService.setStudentCourseInstallmentReceiptId(t),this.router.navigate(["../receipt"],{relativeTo:this.route})}},{key:"deleteReceipt",value:function(t,e){var n=this;this.loading=!0,this.studentCourseInstallmentReceiptService.deleteStudentCourseInstallmentReceipt(e).subscribe((function(e){n.studentCourseInstallmentService.setCourseInstallmentReceipt(t,null),n.loading=!1}),(function(t){n.showToastr("top-right","danger",t),n.loading=!1}))}},{key:"collectInstallment",value:function(t){this.studentCourseInstallmentService.setCourseInstallmentId(t),this.router.navigate(["../collect"],{relativeTo:this.route})}},{key:"showToastr",value:function(t,e,n){this.toastrService.show(e,n,{position:t,status:e})}},{key:"ngOnDestroy",value:function(){}}]),t}(),V.\u0275fac=function(t){return new(t||V)(d.Qb(l.a),d.Qb(a.a),d.Qb(s.xb),d.Qb(r.a),d.Qb(i.a),d.Qb(u.a),d.Qb(b.a),d.Qb(m.c),d.Qb(m.a))},V.\u0275cmp=d.Kb({type:V,selectors:[["ngx-manage-student-course-installment"]],decls:16,vars:7,consts:[[1,"row"],[1,"col-md-9"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[1,"table-responsive"],[1,"table"],[1,"border","shadow-sm"],["class","table-responsive",4,"ngIf","ngIfElse"],["noStudentCourseInstallments",""],["colspan","2"],[4,"ngFor","ngForOf"],["nbButton","","size","small",3,"status","click"],["nbButton","","status","basic","size","small",3,"click",4,"ngIf"],["nbButton","","status","danger","size","small",3,"click",4,"ngIf"],["nbButton","","status","basic","size","small",3,"click"],["nbTooltip","Edit Receipt","icon","edit-outline"],["nbButton","","status","danger","size","small",3,"click"],["nbTooltip","Delete Receipt","icon","trash-outline"],[1,"text-center"]],template:function(t,e){if(1&t&&(d.Wb(0,"nb-card"),d.Wb(1,"nb-card-header"),d.Wb(2,"div",0),d.Wb(3,"div",1),d.Wb(4,"h3"),d.Cc(5," Installments "),d.Wb(6,"small"),d.Cc(7),d.hc(8,"uppercase"),d.hc(9,"async"),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Vb(),d.Wb(10,"nb-card-body",2),d.Wb(11,"div",0),d.Wb(12,"div",3),d.Ac(13,v,35,9,"ng-container",4),d.Ac(14,I,2,0,"ng-template",null,5,d.Bc),d.Vb(),d.Vb(),d.Vb(),d.Vb()),2&t){var n=d.sc(15);d.Eb(7),d.Ec("of ",d.ic(8,3,d.ic(9,5,e.getStudentName())),""),d.Eb(6),d.mc("ngIf",!e.loading)("ngIfElse",n)}},directives:[s.x,s.z,s.w,c.n,c.m,s.u,s.L,s.zb],pipes:[c.v,c.b],styles:["td[_ngcontent-%COMP%]{white-space:nowrap}"]}),V)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(t){return t.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],E=((W=function t(){_classCallCheck(this,t)}).\u0275mod=d.Ob({type:W}),W.\u0275inj=d.Nb({factory:function(t){return new(t||W)},imports:[[m.g.forChild(S)],m.g]}),W);n.d(e,"ManageStudentCourseInstallmentModule",(function(){return R}));var y,R=((y=function t(){_classCallCheck(this,t)}).\u0275mod=d.Ob({type:y}),y.\u0275inj=d.Nb({factory:function(t){return new(t||y)},imports:[[c.c,E,s.A,s.v,s.N,s.Ab]]}),y)}}]);