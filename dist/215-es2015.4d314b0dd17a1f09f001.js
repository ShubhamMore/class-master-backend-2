(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{awVT:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),s=n("nF4J"),r=n("W14u"),c=n("60TI"),o=(n("3lxF"),n("IAlr")),a=n("lst6"),u=n("EQut"),h=n("fXoL"),d=n("aceb"),l=n("tyNb");function b(e,t){1&e&&h["\u0275\u0275element"](0,"router-outlet")}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,i,s,r,c,o,a){this.branchService=e,this.studentBranchService=t,this.studentCourseService=n,this.courseService=i,this.batchService=s,this.subjectService=r,this.toastrService=c,this.router=o,this.route=a}ngOnInit(){if(this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId){if(this.studentCourseService.getStudentCourseData().subscribe(e=>{this.studentCourse=e}),!this.studentCourse)return this.showToastr("top-right","danger","Student Course Not Found"),void this.back();this.batchService.getBatchSubjects(this.studentCourse.course,this.studentCourse.batch).subscribe(e=>{this.subjectService.setSubjectsData(e),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.back()})}else this.back()}back(){const e=this.studentBranchService.getType();this.router.navigate(["../"],{relativeTo:this.route,queryParams:{type:e}})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}ngOnDestroy(){this.courseService.deleteCourseData(),this.batchService.deleteBatchData(),this.subjectService.deleteSubjectsData()}}return e.\u0275fac=function(t){return new(t||e)(h["\u0275\u0275directiveInject"](u.a),h["\u0275\u0275directiveInject"](s.a),h["\u0275\u0275directiveInject"](r.a),h["\u0275\u0275directiveInject"](o.a),h["\u0275\u0275directiveInject"](a.a),h["\u0275\u0275directiveInject"](c.a),h["\u0275\u0275directiveInject"](d.Db),h["\u0275\u0275directiveInject"](l.c),h["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=h["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-assignment"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&h["\u0275\u0275template"](0,b,1,0,"router-outlet",0),2&e&&h["\u0275\u0275property"]("ngIf",!t.loading)},directives:[i.n,l.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>Promise.all([n.e(1),n.e(216)]).then(n.bind(null,"/hif")).then(e=>e.ManageAssignmentModule)},{path:"submission",loadChildren:()=>Promise.all([n.e(1),n.e(214)]).then(n.bind(null,"S0f3")).then(e=>e.AssignmentSubmissionModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let g=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.g.forChild(p)],l.g]}),e})();n.d(t,"AssignmentModule",(function(){return v}));let v=(()=>{class e{}return e.\u0275mod=h["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,g]]}),e})()}}]);