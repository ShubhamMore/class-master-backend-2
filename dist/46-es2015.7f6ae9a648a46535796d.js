(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"1ucL":function(e,t,n){"use strict";n.r(t);var r=n("aceb"),a=n("ofXK"),h=n("3b5Z"),i=n("Pj/w"),o=n("EQut"),l=n("WeFf"),s=n("fXoL"),c=n("tyNb");let d=(()=>{class e{constructor(e,t,n){this.branchService=e,this.router=t,this.route=n}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchService.getBranch(this.branchId).subscribe(e=>{this.branch=e,this.branchService.setBranchData(e),this.loading=!1},e=>{}):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(s.Qb(o.a),s.Qb(c.c),s.Qb(c.a))},e.\u0275cmp=s.Kb({type:e,selectors:[["ngx-branch-header"]],decls:0,vars:0,template:function(e,t){},styles:[""]}),e})();function u(e,t){1&e&&s.Rb(0,"router-outlet")}const b=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a,h,i){this.menuService=e,this.toastrService=t,this.branchService=n,this.branchEmployeeService=r,this.roleService=a,this.router=h,this.route=i}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?this.branchEmployeeService.getBranchEmployeeRole(this.branchId).subscribe(e=>{this.roleService.setEmployeeRole(e.role),this.menuService.showMenus(),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.router.navigate(["../"],{relativeTo:this.route})}):this.router.navigate(["../page-not-found"],{relativeTo:this.route})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}ngOnDestroy(){this.branchService.deleteBranchId(),this.branchService.deleteBranchData(),this.roleService.setEmployeeRole(null)}}return e.\u0275fac=function(t){return new(t||e)(s.Qb(l.a),s.Qb(r.xb),s.Qb(o.a),s.Qb(i.a),s.Qb(h.a),s.Qb(c.c),s.Qb(c.a))},e.\u0275cmp=s.Kb({type:e,selectors:[["ngx-branch"]],decls:2,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&(s.Rb(0,"ngx-branch-header"),s.Ac(1,u,1,0,"router-outlet",0)),2&e&&(s.Eb(1),s.mc("ngIf",!t.loading))},directives:[d,a.n,c.h],styles:[""]}),e})(),children:[{path:"dashboard",loadChildren:()=>n.e(49).then(n.bind(null,"xdzg")).then(e=>e.DashboardModule)},{path:"manage-branch",loadChildren:()=>n.e(86).then(n.bind(null,"X0Xa")).then(e=>e.ManageBranchModule)},{path:"schedule",loadChildren:()=>Promise.all([n.e(1),n.e(92)]).then(n.bind(null,"GeaL")).then(e=>e.ScheduleModule)},{path:"lecture",loadChildren:()=>Promise.all([n.e(1),n.e(70)]).then(n.bind(null,"wOv/")).then(e=>e.LectureModule)},{path:"lead",loadChildren:()=>Promise.all([n.e(1),n.e(66)]).then(n.bind(null,"J1Az")).then(e=>e.LeadModule)},{path:"exam",loadChildren:()=>n.e(56).then(n.bind(null,"WA2b")).then(e=>e.ExamModule)},{path:"budget",loadChildren:()=>n.e(47).then(n.bind(null,"dbKD")).then(e=>e.BudgetModule)},{path:"student",loadChildren:()=>Promise.all([n.e(1),n.e(99)]).then(n.bind(null,"ktXP")).then(e=>e.StudentModule)},{path:"employee",loadChildren:()=>Promise.all([n.e(1),n.e(50)]).then(n.bind(null,"UTrs")).then(e=>e.EmployeeModule)},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let p=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(t){return new(t||e)},imports:[[c.g.forChild(b)],c.g]}),e})();n.d(t,"BranchModule",(function(){return g}));let g=(()=>{class e{}return e.\u0275mod=s.Ob({type:e}),e.\u0275inj=s.Nb({factory:function(t){return new(t||e)},imports:[[a.c,p,r.A,r.Cb]]}),e})()}}]);