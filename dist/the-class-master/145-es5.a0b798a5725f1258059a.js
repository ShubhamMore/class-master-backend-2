!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{X9bE:function(n,r,i){"use strict";i.r(r),i.d(r,"StudentCoursesModule",(function(){return I}));var c,s,o,a=i("ofXK"),u=i("fXoL"),d=i("EQut"),h=i("aceb"),f=i("IAlr"),l=i("lst6"),v=i("JmRu"),b=i("5V5q"),S=i("tyNb"),g=[{path:"",component:(c=function(){function n(t,r,i,c,s,o,a,u){e(this,n),this.branchService=t,this.toastrService=r,this.courseService=i,this.batchService=c,this.studentService=s,this.discountAndOfferService=o,this.router=a,this.route=u}var r,i,c;return r=n,(i=[{key:"ngOnInit",value:function(){var e=this;if(this.branchId=this.branchService.getBranchId(),this.categoryId=this.branchService.getCategoryId(),this.studentId=this.studentService.getStudentId(),!this.branchId&&!this.categoryId&&!this.studentId)return this.back(),void this.showToastr("top-right","danger","Student Details Not Available");this.studentService.getStudentByImsId(this.studentId).subscribe((function(t){e.studentService.setStudentData(t)}),(function(t){e.studentService.setStudentData(null),e.showToastr("top-right","danger",t),e.back()})),this.courseService.getCourses(this.branchId,this.categoryId).subscribe((function(t){e.courseService.setCoursesData(t)}),(function(t){e.courseService.setCoursesData(null),e.showToastr("top-right","danger",t),e.back()})),this.batchService.getBatches(this.branchId,this.categoryId,"").subscribe((function(t){e.batchService.setBatchesData(t)}),(function(t){e.batchService.setBatchesData(null),e.showToastr("top-right","danger",t),e.back()})),this.discountAndOfferService.getDiscountAndOffers(this.branchId).subscribe((function(t){e.discountAndOfferService.setDiscountAndOffersData(t)}),(function(t){e.discountAndOfferService.setDiscountAndOffersData(null),e.showToastr("top-right","danger",t),e.back()}))}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"back",value:function(){var e=this.studentService.getStudentType();this.router.navigate(["../"],{relativeTo:this.route,queryParams:{type:e}})}},{key:"ngOnDestroy",value:function(){this.branchService.deleteCategoryId(),this.studentService.deleteStudentId(),this.studentService.deleteStudentData(),this.courseService.deleteCoursesData(),this.batchService.deleteBatchesData(),this.discountAndOfferService.deleteDiscountAndOffersData()}}])&&t(r.prototype,i),c&&t(r,c),n}(),c.\u0275fac=function(e){return new(e||c)(u["\u0275\u0275directiveInject"](d.a),u["\u0275\u0275directiveInject"](h.Gb),u["\u0275\u0275directiveInject"](f.a),u["\u0275\u0275directiveInject"](l.a),u["\u0275\u0275directiveInject"](v.a),u["\u0275\u0275directiveInject"](b.a),u["\u0275\u0275directiveInject"](S.c),u["\u0275\u0275directiveInject"](S.a))},c.\u0275cmp=u["\u0275\u0275defineComponent"]({type:c,selectors:[["ngx-student-courses"]],decls:1,vars:0,template:function(e,t){1&e&&u["\u0275\u0275element"](0,"router-outlet")},directives:[S.h],styles:[""]}),c),children:[{path:"manage",loadChildren:function(){return Promise.all([i.e(1),i.e(142)]).then(i.bind(null,"3xri")).then((function(e){return e.ManageStudentCourseModule}))}},{path:"attendance",loadChildren:function(){return Promise.all([i.e(1),i.e(143)]).then(i.bind(null,"2I2l")).then((function(e){return e.StudentCourseAttendanceModule}))}},{path:"performance",loadChildren:function(){return Promise.all([i.e(1),i.e(144)]).then(i.bind(null,"Wwho")).then((function(e){return e.StudentCoursePerformanceModule}))}},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:function(){return i.e(0).then(i.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}],p=((o=function t(){e(this,t)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[S.g.forChild(g)],S.g]}),o),I=((s=function t(){e(this,t)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:s}),s.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||s)},imports:[[a.c,p]]}),s)}}])}();
//# sourceMappingURL=145-es5.a0b798a5725f1258059a.js.map