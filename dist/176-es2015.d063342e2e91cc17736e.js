(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{Sj0N:function(e,t,n){"use strict";n.r(t);var l=n("aceb"),r=n("ofXK"),s=n("emOf"),a=n("ZatZ"),i=n("lJxs"),o=n("qsE9"),d=n("EQut"),c=n("JmRu"),m=n("IAlr"),u=n("fXoL"),p=n("tyNb");function I(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",16),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const t=u["\u0275\u0275nextContext"]().$implicit;return u["\u0275\u0275nextContext"](3).editReceipt(t._id,t.receiptId)})),u["\u0275\u0275element"](1,"nb-icon",17),u["\u0275\u0275elementEnd"]()}}function h(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",18),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const t=u["\u0275\u0275nextContext"]().$implicit;return u["\u0275\u0275nextContext"](3).deleteReceipt(t._id,t.receiptId)})),u["\u0275\u0275element"](1,"nb-icon",19),u["\u0275\u0275elementEnd"]()}}function S(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tr"),u["\u0275\u0275elementStart"](1,"td"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"td"),u["\u0275\u0275text"](4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"td"),u["\u0275\u0275text"](6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"td"),u["\u0275\u0275text"](8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"td"),u["\u0275\u0275elementStart"](10,"button",13),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const n=t.$implicit,l=u["\u0275\u0275nextContext"](3);return n.receiptId?l.showReceipt(n.receiptId):l.collectInstallment(n._id)})),u["\u0275\u0275text"](11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"td"),u["\u0275\u0275template"](13,I,2,0,"button",14),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"td"),u["\u0275\u0275template"](15,h,2,0,"button",15),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=u["\u0275\u0275nextContext"](3);u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"]("Installment ",e.installmentNo,""),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](n.dateService.formatDate(e.installmentDate)),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](e.installmentAmount),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](e.amountPending),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("status",e.receiptId?"success":"info"),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",e.receiptId?"Receipt":" Collect"," "),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",e.receiptId),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",e.receiptId)}}function g(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",6),u["\u0275\u0275elementStart"](1,"table",7),u["\u0275\u0275elementStart"](2,"thead"),u["\u0275\u0275elementStart"](3,"tr"),u["\u0275\u0275elementStart"](4,"th"),u["\u0275\u0275text"](5,"Installment No"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"th"),u["\u0275\u0275text"](7,"Installment Date"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"th"),u["\u0275\u0275text"](9,"Installment Amount"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"th"),u["\u0275\u0275text"](11,"Pending Amount"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"th"),u["\u0275\u0275text"](13,"Collect/Receipt"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"th",11),u["\u0275\u0275text"](15,"Action"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](16,"tbody"),u["\u0275\u0275template"](17,S,16,8,"tr",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"](2);u["\u0275\u0275advance"](17),u["\u0275\u0275property"]("ngForOf",e.studentCourseInstallment.installments)}}function v(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",20),u["\u0275\u0275text"](1,"No Student Course Installments Available"),u["\u0275\u0275elementEnd"]())}function C(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275elementStart"](1,"div",6),u["\u0275\u0275elementStart"](2,"table",7),u["\u0275\u0275elementStart"](3,"tbody"),u["\u0275\u0275elementStart"](4,"tr",8),u["\u0275\u0275elementStart"](5,"td"),u["\u0275\u0275elementStart"](6,"span"),u["\u0275\u0275elementStart"](7,"strong"),u["\u0275\u0275text"](8,"Course: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](9),u["\u0275\u0275pipe"](10,"async"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](11,"br"),u["\u0275\u0275elementStart"](12,"span"),u["\u0275\u0275elementStart"](13,"strong"),u["\u0275\u0275text"](14,"Date: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](15),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](16,"td"),u["\u0275\u0275elementStart"](17,"span"),u["\u0275\u0275elementStart"](18,"strong"),u["\u0275\u0275text"](19,"Collected Amount: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](20),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](21,"br"),u["\u0275\u0275elementStart"](22,"span"),u["\u0275\u0275elementStart"](23,"strong"),u["\u0275\u0275text"](24,"Pending Amount: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](25),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](26,"br"),u["\u0275\u0275elementStart"](27,"span"),u["\u0275\u0275elementStart"](28,"strong"),u["\u0275\u0275text"](29,"Total Amount: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](30),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](31,"br"),u["\u0275\u0275template"](32,g,18,1,"div",9),u["\u0275\u0275template"](33,v,2,0,"ng-template",null,10,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementContainerEnd"]()),2&e){const e=u["\u0275\u0275reference"](34),t=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](9),u["\u0275\u0275textInterpolate1"]("",u["\u0275\u0275pipeBind1"](10,7,t.getCourseName(t.studentCourseInstallment.course))," "),u["\u0275\u0275advance"](6),u["\u0275\u0275textInterpolate1"]("",t.dateService.formatDate(t.studentCourseInstallment.date)," "),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate1"]("",t.studentCourseInstallment.amountCollected," "),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate1"]("",t.studentCourseInstallment.pendingAmount," "),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.studentCourseInstallment.totalAmount),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",t.studentCourseInstallment.installments.length>0)("ngIfElse",e)}}function f(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",20),u["\u0275\u0275text"](1,"Loading..."),u["\u0275\u0275elementEnd"]())}const E=[{path:"",component:(()=>{class e{constructor(e,t,n,l,r,s,a,i,o){this.branchService=e,this.dateService=t,this.toastrService=n,this.studentCourseInstallmentService=l,this.studentCourseInstallmentReceiptService=r,this.courseService=s,this.studentService=a,this.router=i,this.route=o}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.categoryId=this.branchService.getCategoryId(),this.studentId=this.studentService.getStudentId(),this.courseId=this.courseService.getCourseId(),this.studentCourseInstallmentId=this.studentCourseInstallmentService.getStudentCourseInstallmentId(),this.branchId&&this.categoryId&&this.courseId&&this.studentId&&this.studentCourseInstallmentId?this.studentCourseInstallmentService.getStudentCourseInstallment(this.studentCourseInstallmentId).subscribe(e=>{this.studentCourseInstallmentService.setStudentCourseInstallmentData(e),this.studentCourseInstallment=e,this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.router.navigate(["../"],{relativeTo:this.route})}):this.router.navigate(["../"],{relativeTo:this.route})}getStudentName(){return this.studentService.getStudentName().pipe(Object(i.a)(e=>e))}getCourseName(e){return this.courseService.getCourseName(e).pipe(Object(i.a)(e=>e))}editReceipt(e,t){this.studentCourseInstallmentReceiptService.setStudentCourseInstallmentReceiptId(t),this.studentCourseInstallmentService.setCourseInstallmentId(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}showReceipt(e){this.studentCourseInstallmentReceiptService.setStudentCourseInstallmentReceiptId(e),this.router.navigate(["../receipt"],{relativeTo:this.route})}deleteReceipt(e,t){this.loading=!0,this.studentCourseInstallmentReceiptService.deleteStudentCourseInstallmentReceipt(t).subscribe(t=>{this.studentCourseInstallmentService.setCourseInstallmentReceipt(e,null),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}collectInstallment(e){this.studentCourseInstallmentService.setCourseInstallmentId(e),this.router.navigate(["../collect"],{relativeTo:this.route})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](d.a),u["\u0275\u0275directiveInject"](a.a),u["\u0275\u0275directiveInject"](l.Db),u["\u0275\u0275directiveInject"](o.a),u["\u0275\u0275directiveInject"](s.a),u["\u0275\u0275directiveInject"](m.a),u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](p.c),u["\u0275\u0275directiveInject"](p.a))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-student-course-installment"]],decls:16,vars:7,consts:[[1,"row"],[1,"col-md-9"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[1,"table-responsive"],[1,"table"],[1,"border","shadow-sm"],["class","table-responsive",4,"ngIf","ngIfElse"],["noStudentCourseInstallments",""],["colspan","2"],[4,"ngFor","ngForOf"],["nbButton","","size","small",3,"status","click"],["nbButton","","status","basic","size","small",3,"click",4,"ngIf"],["nbButton","","status","danger","size","small",3,"click",4,"ngIf"],["nbButton","","status","basic","size","small",3,"click"],["nbTooltip","Edit Receipt","icon","edit-outline"],["nbButton","","status","danger","size","small",3,"click"],["nbTooltip","Delete Receipt","icon","trash-outline"],[1,"text-center"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"nb-card"),u["\u0275\u0275elementStart"](1,"nb-card-header"),u["\u0275\u0275elementStart"](2,"div",0),u["\u0275\u0275elementStart"](3,"div",1),u["\u0275\u0275elementStart"](4,"h3"),u["\u0275\u0275text"](5," Installments "),u["\u0275\u0275elementStart"](6,"small"),u["\u0275\u0275text"](7),u["\u0275\u0275pipe"](8,"uppercase"),u["\u0275\u0275pipe"](9,"async"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"nb-card-body",2),u["\u0275\u0275elementStart"](11,"div",0),u["\u0275\u0275elementStart"](12,"div",3),u["\u0275\u0275template"](13,C,35,9,"ng-container",4),u["\u0275\u0275template"](14,f,2,0,"ng-template",null,5,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275reference"](15);u["\u0275\u0275advance"](7),u["\u0275\u0275textInterpolate1"]("of ",u["\u0275\u0275pipeBind1"](8,3,u["\u0275\u0275pipeBind1"](9,5,t.getStudentName())),""),u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[l.x,l.z,l.w,r.n,r.m,l.u,l.M,l.Fb],pipes:[r.v,r.b],styles:["td[_ngcontent-%COMP%]{white-space:nowrap}"]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let x=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[p.g.forChild(E)],p.g]}),e})();n.d(t,"ManageStudentCourseInstallmentModule",(function(){return b}));let b=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,x,l.A,l.v,l.O,l.Gb]]}),e})()}}]);