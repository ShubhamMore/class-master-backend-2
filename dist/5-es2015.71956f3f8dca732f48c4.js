(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{M9zO:function(e,t,n){"use strict";const i=[{title:"Home",icon:"home",link:"/institute/home",home:!0,hidden:!1},{title:"My Institutes",icon:"",link:"/institute/my-institutes",hidden:!1},{title:"Dashboard",icon:"",link:"/institute/branch/dashboard",hidden:!0},{title:"Branch Management",icon:"",hidden:!0,children:[{title:"Receipt Details",link:"/institute/branch/manage-branch/receipt",hidden:!0},{title:"Course",link:"/institute/branch/manage-branch/course",hidden:!0},{title:"Discount & Offers",link:"/institute/branch/manage-branch/discount-and-offers",hidden:!0}]},{title:"Student Management",icon:"",hidden:!0,children:[{title:"Add Student",link:"/institute/branch/student/add",hidden:!0},{title:"Active Students",link:"/institute/branch/student/manage",queryParams:{type:"active"},hidden:!0},{title:"Inactive Students",link:"/institute/branch/student/manage",queryParams:{type:"inactive"},hidden:!0}]},{title:"Schedule Class",icon:"",link:"/institute/branch/schedule/manage",hidden:!0},{title:"Student Attendance",icon:"",link:"/institute/branch/attendance/manage",hidden:!0},{title:"Exam Management",icon:"",hidden:!0,children:[{title:"Schedule Classroom Test",link:"/institute/branch/exam/test/manage",hidden:!0},{title:"Schedule Online Exam",link:"/institute/branch/exam/online-test/manage",hidden:!0}]},{title:"Employee Management",icon:"",hidden:!0,children:[{title:"Add Employee",link:"/institute/branch/employee/add",hidden:!0},{title:"Active Employees",link:"/institute/branch/employee/manage",queryParams:{type:"active"},hidden:!0},{title:"Inactive Employees",link:"/institute/branch/employee/manage",queryParams:{type:"inactive"},hidden:!0}]},{title:"Lead Management",icon:"",hidden:!0,children:[{title:"Add Lead",link:"/institute/branch/lead/add",hidden:!0},{title:"Active Leads",link:"/institute/branch/lead/manage",queryParams:{type:"active"}},{title:"Close Leads",link:"/institute/branch/lead/manage",queryParams:{type:"inactive"}}]},{title:"Budget Management",icon:"",link:"/institute/branch/budget/manage",hidden:!0}];var a=n("fXoL");n.d(t,"a",(function(){return s}));let s=(()=>{class e{constructor(){this.menuItems=[]}getMenuItems(){return this.menuItems}setMenuItemSequence(){this.menuItems=[],this.menuItems.push(i[0]),this.menuItems.push(i[1]),this.menuItems.push(i[2]),this.menuItems.push(i[3]),this.menuItems.push(i[4]),this.menuItems.push(i[5]),this.menuItems.push(i[6]),this.menuItems.push(i[7]),this.menuItems.push(i[8]),this.menuItems.push(i[9]),this.menuItems.push(i[10])}hideMenu(){this.menuItems=i.map((e,t)=>{if(0!==t&&1!==t)return e.hidden=!0,e.children&&e.children.map(e=>{e.hidden=!0}),e})}showMenu(){this.menuItems=i.map((e,t)=>(e.hidden=!1,e.children&&e.children.map(e=>{e.hidden=!1}),e))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Mb({token:e,factory:e.\u0275fac}),e})()},V0SI:function(e,t,n){"use strict";n.r(t);var i=n("M9zO"),a=n("aceb"),s=n("vTDv"),d=n("EQut"),h=n("fXoL"),u=n("tyNb");let r=(()=>{class e{constructor(e,t){this.branchService=e,this.router=t}canActivate(e,t){const n=this.branchService.getBranchId();return!(!n||""===n)||this.router.createUrlTree(["/"])}canActivateChild(e,t){return this.canActivate(e,t)}}return e.\u0275fac=function(t){return new(t||e)(h.ac(d.a),h.ac(u.c))},e.\u0275prov=h.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=n("mgFL");const c=[{path:"",component:(()=>{class e{constructor(e){this.menuService=e,this.menu=[]}ngOnInit(){this.menuService.setMenuItemSequence(),this.menu=this.menuService.getMenuItems()}}return e.\u0275fac=function(t){return new(t||e)(h.Qb(i.a))},e.\u0275cmp=h.Kb({type:e,selectors:[["ngx-institute"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&(h.Wb(0,"ngx-one-column-layout"),h.Rb(1,"nb-menu",0),h.Rb(2,"router-outlet"),h.Vb()),2&e&&(h.Eb(1),h.mc("items",t.menu))},directives:[l.a,a.Q,u.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),e})(),children:[{path:"profile",loadChildren:()=>Promise.all([n.e(2),n.e(1),n.e(64)]).then(n.bind(null,"eXDF")).then(e=>e.ProfileModule),canActivate:[]},{path:"home",loadChildren:()=>n.e(60).then(n.bind(null,"BeyL")).then(e=>e.HomeModule),canActivate:[]},{path:"my-institutes",loadChildren:()=>n.e(61).then(n.bind(null,"g1+o")).then(e=>e.ManageInstituteModule),canActivate:[]},{path:"membership-plans",loadChildren:()=>Promise.all([n.e(1),n.e(63)]).then(n.bind(null,"zgr8")).then(e=>e.MembershipPlansModule),canActivate:[]},{path:"add",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(6)]).then(n.bind(null,"wSJA")).then(e=>e.AddInstituteModule),canActivate:[]},{path:"view",loadChildren:()=>n.e(62).then(n.bind(null,"ZcVN")).then(e=>e.ViewInstituteModule),canActivate:[]},{path:"edit",loadChildren:()=>Promise.all([n.e(3),n.e(1),n.e(6)]).then(n.bind(null,"wSJA")).then(e=>e.AddInstituteModule),canActivate:[]},{path:"branch",loadChildren:()=>n.e(31).then(n.bind(null,"MZNv")).then(e=>e.BranchModule),canActivate:[r]},{path:"",redirectTo:"home",pathMatch:"full"},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}]}];let o=(()=>{class e{}return e.\u0275mod=h.Ob({type:e}),e.\u0275inj=h.Nb({factory:function(t){return new(t||e)},imports:[[u.g.forChild(c)],u.g]}),e})();n.d(t,"InstituteModule",(function(){return m}));let m=(()=>{class e{}return e.\u0275mod=h.Ob({type:e}),e.\u0275inj=h.Nb({factory:function(t){return new(t||e)},providers:[i.a],imports:[[o,s.a,a.R]]}),e})()}}]);