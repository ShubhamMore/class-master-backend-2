(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{ynng:function(e,t,n){"use strict";n.r(t),n.d(t,"LectureModule",(function(){return s}));var r=n("ofXK"),i=n("fXoL"),o=n("EQut"),c=n("nF4J"),a=n("7kqb"),u=n("W14u"),d=n("tyNb");const l=[{path:"",component:(()=>{class e{constructor(e,t,n,r,i,o){this.branchService=e,this.studentBranchService=t,this.lectureService=n,this.studentCourseService=r,this.router=i,this.route=o}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId||this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.lectureService.setSearchDate(null),this.studentCourseService.deleteStudentCourseData()}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](a.a),i["\u0275\u0275directiveInject"](u.a),i["\u0275\u0275directiveInject"](d.c),i["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-lecture"]],decls:1,vars:0,template:function(e,t){1&e&&i["\u0275\u0275element"](0,"router-outlet")},directives:[d.h],styles:[""]}),e})(),children:[{path:"manage",loadChildren:()=>n.e(237).then(n.bind(null,"lzu1")).then(e=>e.ManageLectureModule)},{path:"view",loadChildren:()=>n.e(242).then(n.bind(null,"mYgu")).then(e=>e.ViewLectureModule)},{path:"material",loadChildren:()=>n.e(240).then(n.bind(null,"oZfr")).then(e=>e.StudyMaterialModule)},{path:"q&a",loadChildren:()=>Promise.all([n.e(1),n.e(44)]).then(n.bind(null,"wPrP")).then(e=>e.QuestionAnswersModule)},{path:"",redirectTo:"manage",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let h=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.g.forChild(l)],d.g]}),e})(),s=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,h]]}),e})()}}]);
//# sourceMappingURL=236-es2015.6826b05c1af61db72a95.js.map