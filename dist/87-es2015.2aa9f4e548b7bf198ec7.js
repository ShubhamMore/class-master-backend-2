(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"wOv/":function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),i=n("7kqb"),a=n("Pj/w"),c=n("IAlr"),h=n("lst6"),o=n("EQut"),l=n("fXoL"),s=n("tyNb");const d=[{path:"",component:(()=>{class e{constructor(e,t,n,r,i,a,c){this.branchService=e,this.branchEmployeeService=t,this.lectureService=n,this.courseService=r,this.batchService=i,this.router=a,this.route=c}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.courseService.getCourses(this.branchId,"").subscribe(e=>{this.courseService.setCoursesData(e),this.loading=!1},e=>{}),this.batchService.getBatches(this.branchId,"","").subscribe(e=>{this.batchService.setBatchesData(e)},e=>{}),this.branchEmployeeService.getBranchEmployeesForBatch(this.branchId,"teacher").subscribe(e=>{this.branchEmployeeService.setBranchEmployeesData(e),this.loading=!1},e=>{this.router.navigate(["../"],{relativeTo:this.route})})):this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.courseService.deleteCoursesData(),this.batchService.deleteBatchesData(),this.lectureService.setSearchDate(null)}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](o.a),l["\u0275\u0275directiveInject"](a.a),l["\u0275\u0275directiveInject"](i.a),l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](h.a),l["\u0275\u0275directiveInject"](s.c),l["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-lecture"]],decls:1,vars:0,template:function(e,t){1&e&&l["\u0275\u0275element"](0,"router-outlet")},directives:[s.h],styles:[""]}),e})(),children:[{path:"batch",loadChildren:()=>Promise.all([n.e(1),n.e(86)]).then(n.bind(null,"HiKI")).then(e=>e.BatchLectureModule)},{path:"manage",loadChildren:()=>Promise.all([n.e(2),n.e(1),n.e(88)]).then(n.bind(null,"fWff")).then(e=>e.ManageLectureModule)},{path:"view",loadChildren:()=>n.e(93).then(n.bind(null,"q3Gl")).then(e=>e.ViewLectureModule)},{path:"material",loadChildren:()=>n.e(91).then(n.bind(null,"61+n")).then(e=>e.StudyMaterialModule)},{path:"q&a",loadChildren:()=>Promise.all([n.e(1),n.e(40)]).then(n.bind(null,"01H7")).then(e=>e.QuestionAnswersModule)},{path:"attendance",loadChildren:()=>Promise.all([n.e(1),n.e(85)]).then(n.bind(null,"dGLe")).then(e=>e.AttendanceModule)},{path:"",redirectTo:"batch",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let u=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.g.forChild(d)],s.g]}),e})();n.d(t,"LectureModule",(function(){return b}));let b=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,u]]}),e})()}}]);