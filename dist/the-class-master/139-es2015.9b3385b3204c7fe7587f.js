(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{ojiR:function(e,t,n){"use strict";n.r(t),n.d(t,"StudentCourseModule",(function(){return v}));var s=n("ofXK"),i=n("tyNb"),r=n("fXoL"),a=n("EQut"),d=n("aceb"),c=n("IAlr"),o=n("lst6"),h=n("JmRu"),u=n("5V5q");const l=[{path:"",component:(()=>{class e{constructor(e,t,n,s,i,r,a,d){this.branchService=e,this.toastrService=t,this.courseService=n,this.batchService=s,this.studentService=i,this.discountAndOfferService=r,this.router=a,this.route=d}ngOnInit(){if(this.branchId=this.branchService.getBranchId(),this.categoryId=this.branchService.getCategoryId(),this.studentId=this.studentService.getStudentId(),!this.branchId&&!this.categoryId&&!this.studentId)return this.back(),void this.showToastr("top-right","danger","Student Details Not Available");this.studentService.getStudentByImsId(this.studentId).subscribe(e=>{this.studentService.setStudentData(e)},e=>{this.studentService.setStudentData(null),this.showToastr("top-right","danger",e),this.back()}),this.courseService.getCourses(this.branchId,this.categoryId).subscribe(e=>{this.courseService.setCoursesData(e)},e=>{this.courseService.setCoursesData(null),this.showToastr("top-right","danger",e),this.back()}),this.batchService.getBatches(this.branchId,this.categoryId,"").subscribe(e=>{this.batchService.setBatchesData(e)},e=>{this.batchService.setBatchesData(null),this.showToastr("top-right","danger",e),this.back()}),this.discountAndOfferService.getDiscountAndOffers(this.branchId).subscribe(e=>{this.discountAndOfferService.setDiscountAndOffersData(e)},e=>{this.discountAndOfferService.setDiscountAndOffersData(null),this.showToastr("top-right","danger",e),this.back()})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}back(){const e=this.studentService.getStudentType();this.router.navigate(["../"],{relativeTo:this.route,queryParams:{type:e}})}ngOnDestroy(){this.branchService.deleteCategoryId(),this.studentService.deleteStudentId(),this.studentService.deleteStudentData(),this.courseService.deleteCoursesData(),this.batchService.deleteBatchesData(),this.discountAndOfferService.deleteDiscountAndOffersData()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](d.Gb),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](h.a),r["\u0275\u0275directiveInject"](u.a),r["\u0275\u0275directiveInject"](i.c),r["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-student-course"]],decls:1,vars:0,template:function(e,t){1&e&&r["\u0275\u0275element"](0,"router-outlet")},directives:[i.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(133)]).then(n.bind(null,"i8+/")).then(e=>e.ManageStudentCourseModule)},{path:"add",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(20)]).then(n.bind(null,"QTuy")).then(e=>e.AddStudentCourseModule)},{path:"edit",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(20)]).then(n.bind(null,"QTuy")).then(e=>e.AddStudentCourseModule)},{path:"installment",loadChildren:()=>Promise.all([n.e(1),n.e(137)]).then(n.bind(null,"52Hq")).then(e=>e.StudentCourseInstallmentModule)},{path:"attendance",loadChildren:()=>Promise.all([n.e(1),n.e(134)]).then(n.bind(null,"QG0J")).then(e=>e.StudentCourseAttendanceModule)},{path:"performance",loadChildren:()=>Promise.all([n.e(1),n.e(138)]).then(n.bind(null,"z6sI")).then(e=>e.StudentCoursePerformanceModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let S=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(l)],i.g]}),e})(),v=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.c,S]]}),e})()}}]);
//# sourceMappingURL=139-es2015.9b3385b3204c7fe7587f.js.map