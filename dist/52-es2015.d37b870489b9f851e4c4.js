(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{wVrR:function(e,t,o){"use strict";o.r(t);var n=o("ofXK"),r=o("tyNb"),a=o("EQut"),i=o("Pj/w"),s=o("pjuo"),l=o("fXoL"),c=o("aceb");function h(e,t){1&e&&l.Rb(0,"router-outlet")}const u=[{path:"",component:(()=>{class e{constructor(e,t,o,n,r,a){this.employeeService=e,this.branchEmployeeService=t,this.branchService=o,this.router=n,this.route=r,this.toastrService=a}ngOnInit(){this.loading=!0,this.branchService.getBranchId()?this.branchEmployeeService.getBranchEmployeeData().subscribe(e=>{if(!e)return this.showToastr("top-right","danger","Branch Employee Not Found"),void this.back();this.employeeService.getEmployeeByIMSId(e.employee).subscribe(e=>{this.employeeService.setEmployeeData(e),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.back()})}):this.back()}showToastr(e,t,o){this.toastrService.show(t,o,{position:e,status:t})}back(){const e=this.employeeService.getEmployeeType();this.router.navigate(["../"],{relativeTo:this.route,queryParams:{type:e}})}ngOnDestroy(){this.employeeService.deleteEmployeeData()}}return e.\u0275fac=function(t){return new(t||e)(l.Qb(s.a),l.Qb(i.a),l.Qb(a.a),l.Qb(r.c),l.Qb(r.a),l.Qb(c.xb))},e.\u0275cmp=l.Kb({type:e,selectors:[["ngx-manage-employee-salary"]],decls:1,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&l.Ac(0,h,1,0,"router-outlet",0),2&e&&l.mc("ngIf",!t.loading)},directives:[n.n,r.h],styles:[""]}),e})(),children:[{path:"add",loadChildren:()=>Promise.all([o.e(1),o.e(51)]).then(o.bind(null,"cHWv")).then(e=>e.AddSalaryModule)},{path:"view",loadChildren:()=>Promise.all([o.e(1),o.e(54)]).then(o.bind(null,"w+WK")).then(e=>e.ViewSalaryReceiptModule)},{path:"",loadChildren:()=>Promise.all([o.e(1),o.e(53)]).then(o.bind(null,"tEkE")).then(e=>e.ManageSalaryModule)},{path:"page-not-found",loadChildren:()=>o.e(0).then(o.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let p=(()=>{class e{}return e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({factory:function(t){return new(t||e)},imports:[[r.g.forChild(u)],r.g]}),e})();o.d(t,"ManageEmployeeSalaryModule",(function(){return d}));let d=(()=>{class e{}return e.\u0275mod=l.Ob({type:e}),e.\u0275inj=l.Nb({factory:function(t){return new(t||e)},imports:[[n.c,p]]}),e})()}}]);