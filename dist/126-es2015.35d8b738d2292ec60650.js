(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{ZAMY:function(e,t,r){"use strict";r.r(t);var n=r("ofXK"),a=r("7kqb"),i=r("Pj/w"),h=r("IAlr"),c=r("lst6"),s=r("EQut"),o=r("fXoL"),l=r("tyNb");const u=[{path:"",component:(()=>{class e{constructor(e,t,r,n,a,i,h){this.branchService=e,this.branchEmployeeService=t,this.lectureService=r,this.courseService=n,this.batchService=a,this.router=i,this.route=h}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.courseService.getCourses(this.branchId,"").subscribe(e=>{this.courseService.setCoursesData(e),this.loading=!1},e=>{}),this.batchService.getBatches(this.branchId,"","").subscribe(e=>{this.batchService.setBatchesData(e)},e=>{}),this.branchEmployeeService.getBranchEmployeesForBatch(this.branchId,"teacher").subscribe(e=>{this.branchEmployeeService.setBranchEmployeesData(e),this.loading=!1},e=>{this.router.navigate(["../"],{relativeTo:this.route})})):this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.courseService.deleteCoursesData(),this.batchService.deleteBatchesData(),this.lectureService.setSearchDate(null)}}return e.\u0275fac=function(t){return new(t||e)(o.Qb(s.a),o.Qb(i.a),o.Qb(a.a),o.Qb(h.a),o.Qb(c.a),o.Qb(l.c),o.Qb(l.a))},e.\u0275cmp=o.Kb({type:e,selectors:[["ngx-lecture"]],decls:1,vars:0,template:function(e,t){1&e&&o.Rb(0,"router-outlet")},directives:[l.h],styles:[""]}),e})(),children:[{path:"batch",loadChildren:()=>Promise.all([r.e(1),r.e(125)]).then(r.bind(null,"IntY")).then(e=>e.BatchLectureModule)},{path:"manage",loadChildren:()=>r.e(127).then(r.bind(null,"P9E7")).then(e=>e.ManageLectureModule)},{path:"view",loadChildren:()=>r.e(131).then(r.bind(null,"UyCp")).then(e=>e.ViewLectureModule)},{path:"material",loadChildren:()=>r.e(129).then(r.bind(null,"z9h6")).then(e=>e.StudyMaterialModule)},{path:"attendance",loadChildren:()=>Promise.all([r.e(1),r.e(124)]).then(r.bind(null,"q/Ke")).then(e=>e.AttendanceModule)},{path:"",redirectTo:"batch",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>r.e(0).then(r.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let d=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[l.g.forChild(u)],l.g]}),e})();r.d(t,"LectureModule",(function(){return b}));let b=(()=>{class e{}return e.\u0275mod=o.Ob({type:e}),e.\u0275inj=o.Nb({factory:function(t){return new(t||e)},imports:[[n.c,d]]}),e})()}}]);