(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{A19k:function(e,t,n){"use strict";n.r(t);var s=n("ofXK"),i=n("tyNb"),r=n("lst6"),a=n("IAlr"),d=n("5V5q"),c=n("JmRu"),o=n("EQut"),h=n("fXoL"),u=n("aceb");const l=[{path:"",component:(()=>{class e{constructor(e,t,n,s,i,r,a,d){this.branchService=e,this.toastrService=t,this.courseService=n,this.batchService=s,this.studentService=i,this.discountAndOfferService=r,this.router=a,this.route=d}ngOnInit(){if(this.branchId=this.branchService.getBranchId(),this.categoryId=this.branchService.getCategoryId(),this.studentId=this.studentService.getStudentId(),!this.branchId&&!this.categoryId&&!this.studentId)return this.back(),void this.showToastr("top-right","danger","Student Details Not Available");this.studentService.getStudentByImsId(this.studentId).subscribe(e=>{this.studentService.setStudentData(e)},e=>{this.studentService.setStudentData(null),this.showToastr("top-right","danger",e),this.back()}),this.courseService.getCourses(this.branchId,this.categoryId).subscribe(e=>{this.courseService.setCoursesData(e)},e=>{this.courseService.setCoursesData(null),this.showToastr("top-right","danger",e),this.back()}),this.batchService.getBatches(this.branchId,this.categoryId,"").subscribe(e=>{this.batchService.setBatchesData(e)},e=>{this.batchService.setBatchesData(null),this.showToastr("top-right","danger",e),this.back()}),this.discountAndOfferService.getDiscountAndOffers(this.branchId).subscribe(e=>{this.discountAndOfferService.setDiscountAndOffersData(e)},e=>{this.discountAndOfferService.setDiscountAndOffersData(null),this.showToastr("top-right","danger",e),this.back()})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}back(){const e=this.studentService.getStudentType();this.router.navigate(["../"],{relativeTo:this.route,queryParams:{type:e}})}ngOnDestroy(){this.branchService.deleteCategoryId(),this.studentService.deleteStudentId(),this.studentService.deleteStudentData(),this.courseService.deleteCoursesData(),this.batchService.deleteBatchesData(),this.discountAndOfferService.deleteDiscountAndOffersData()}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](o.a),h["\u0275\u0275directiveInject"](u.Db),h["\u0275\u0275directiveInject"](a.a),h["\u0275\u0275directiveInject"](r.a),h["\u0275\u0275directiveInject"](c.a),h["\u0275\u0275directiveInject"](d.a),h["\u0275\u0275directiveInject"](i.c),h["\u0275\u0275directiveInject"](i.a))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-student-course"]],decls:1,vars:0,template:function(e,t){1&e&&h["\u0275\u0275element"](0,"router-outlet")},directives:[i.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(174)]).then(n.bind(null,"/p1B")).then(e=>e.ManageStudentCourseModule)},{path:"add",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(32)]).then(n.bind(null,"B4m4")).then(e=>e.AddStudentCourseModule)},{path:"edit",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(32)]).then(n.bind(null,"B4m4")).then(e=>e.AddStudentCourseModule)},{path:"installment",loadChildren:()=>Promise.all([n.e(1),n.e(178)]).then(n.bind(null,"BWAu")).then(e=>e.StudentCourseInstallmentModule)},{path:"attendance",loadChildren:()=>Promise.all([n.e(1),n.e(175)]).then(n.bind(null,"mh6m")).then(e=>e.StudentCourseAttendanceModule)},{path:"performance",loadChildren:()=>Promise.all([n.e(1),n.e(179)]).then(n.bind(null,"6ZKD")).then(e=>e.StudentCoursePerformanceModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let S=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(l)],i.g]}),e})();n.d(t,"StudentCourseModule",(function(){return v}));let v=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.c,S]]}),e})()}}]);