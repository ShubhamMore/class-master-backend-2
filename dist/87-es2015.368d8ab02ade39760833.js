(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{Ds35:function(e,t,n){"use strict";n.r(t),n.d(t,"ManageEmployeeModule",(function(){return b}));var a=n("ofXK"),r=n("fXoL"),i=n("EQut"),l=n("pjuo"),o=n("Pj/w"),c=n("tyNb"),s=n("aceb");function m(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"tr"),r["\u0275\u0275elementStart"](1,"td"),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"td"),r["\u0275\u0275text"](4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"td"),r["\u0275\u0275text"](6),r["\u0275\u0275pipe"](7,"uppercase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"td"),r["\u0275\u0275elementStart"](9,"button",10),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const n=t.$implicit;return r["\u0275\u0275nextContext"](3).editBranchEmployee(n._id,n.employee)})),r["\u0275\u0275text"](10," Edit "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"button",11),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const n=t.$implicit;return r["\u0275\u0275nextContext"](3).branchEmployeeSalary(n)})),r["\u0275\u0275text"](12," Salary "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"button",12),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const n=t.$implicit,a=t.index;return r["\u0275\u0275nextContext"](3).changeBranchEmployeeStatus(n._id,!n.status,a)})),r["\u0275\u0275text"](14),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](n+1),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](e.name),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](7,5,e.role)),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("status",e.status?"danger":"warning"),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",e.status?"Deactivate":"Activate"," ")}}function d(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div",7),r["\u0275\u0275elementStart"](1,"table",8),r["\u0275\u0275elementStart"](2,"thead"),r["\u0275\u0275elementStart"](3,"tr"),r["\u0275\u0275elementStart"](4,"th"),r["\u0275\u0275text"](5,"#"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"th"),r["\u0275\u0275text"](7,"Employee"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"th"),r["\u0275\u0275text"](9,"Role"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"th"),r["\u0275\u0275text"](11,"Action"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"tbody"),r["\u0275\u0275template"](13,m,15,7,"tr",9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"](2);r["\u0275\u0275advance"](13),r["\u0275\u0275property"]("ngForOf",e.branchEmployees)}}function p(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p",13),r["\u0275\u0275text"](1,"No Employees Available"),r["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275template"](1,d,14,1,"div",5),r["\u0275\u0275template"](2,p,2,0,"ng-template",null,6,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=r["\u0275\u0275reference"](3),t=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",t.branchEmployees.length>0)("ngIfElse",e)}}function u(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p",13),r["\u0275\u0275text"](1,"Loading..."),r["\u0275\u0275elementEnd"]())}const y=[{path:"",component:(()=>{class e{constructor(e,t,n,a,r){this.branchService=e,this.employeeService=t,this.branchEmployeeService=n,this.router=a,this.route=r,this.route.queryParams.subscribe(e=>{this.ngOnInit()})}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.route.queryParams.subscribe(e=>{this.type=e.type}),"active"===this.type||"inactive"===this.type?(this.employeeService.setEmployeeType(this.type),this.branchEmployees=[],this.branchEmployeeService.getBranchEmployeeNameIds(this.branchId,this.type).subscribe(e=>{this.branchEmployees=e,this.loading=!1},e=>{this.loading=!1})):this.router.navigate(["../manage"],{relativeTo:this.route,queryParams:{type:"active"}})):this.router.navigate(["../"],{relativeTo:this.route})}editBranchEmployee(e,t){this.employeeService.setEmployeeId(t),this.branchEmployeeService.setBranchEmployeeId(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}branchEmployeeSalary(e){this.branchEmployeeService.setBranchEmployeeData(e),this.router.navigate(["../salary"],{relativeTo:this.route})}changeBranchEmployeeStatus(e,t,n){this.branchEmployeeService.changeBranchEmployeeStatus(e,t).subscribe(e=>{this.branchEmployees.splice(n,1),this.loading=!1},e=>{this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](c.c),r["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-employee"]],decls:13,vars:5,consts:[[1,"row"],[1,"col-md-12"],[1,"body-container"],[4,"ngIf","ngIfElse"],["loadingData",""],["class","table-responsive",4,"ngIf","ngIfElse"],["noBranchEmployees",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["nbButton","","size","small","status","basic",1,"mr-3",3,"click"],["nbButton","","size","small","status","success",1,"mr-3",3,"click"],["nbButton","","size","small",1,"",3,"status","click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"nb-card"),r["\u0275\u0275elementStart"](1,"nb-card-header"),r["\u0275\u0275elementStart"](2,"div",0),r["\u0275\u0275elementStart"](3,"div",1),r["\u0275\u0275elementStart"](4,"h3"),r["\u0275\u0275text"](5),r["\u0275\u0275pipe"](6,"uppercase"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"nb-card-body",2),r["\u0275\u0275elementStart"](8,"div",0),r["\u0275\u0275elementStart"](9,"div",1),r["\u0275\u0275template"](10,h,4,2,"ng-container",3),r["\u0275\u0275template"](11,u,2,0,"ng-template",null,4,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275reference"](12);r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"]("",r["\u0275\u0275pipeBind1"](6,3,t.type)," Employees"),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[s.y,s.A,s.x,a.n,a.m,s.v],pipes:[a.w],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let E=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.g.forChild(y)],c.g]}),e})(),b=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,E,s.B,s.w,s.P,s.Jb]]}),e})()}}]);
//# sourceMappingURL=87-es2015.368d8ab02ade39760833.js.map