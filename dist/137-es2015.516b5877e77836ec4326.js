(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{nEq8:function(e,t,n){"use strict";n.r(t),n.d(t,"ManageStudentReportsModule",(function(){return b}));var r=n("aceb"),a=n("ofXK"),i=n("fXoL"),o=n("EQut"),s=n("JmRu"),c=n("/ehT"),l=n("tyNb");function d(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nb-option",13),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275property"]("value",e._id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.category)}}function h(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"tr"),i["\u0275\u0275elementStart"](1,"td"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"td"),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"td"),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"td"),i["\u0275\u0275elementStart"](8,"span",19),i["\u0275\u0275text"](9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"td"),i["\u0275\u0275elementStart"](11,"button",20),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit;return i["\u0275\u0275nextContext"](3).branchStudentCourses(n._id,n.student,n.category)})),i["\u0275\u0275text"](12," Course Reports "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,r=i["\u0275\u0275nextContext"](3);i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n+1),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](e.name),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](r.getCategory(e.category)),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngClass",e.status?"active":"inactive"),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.status?"Active":"Inactive")}}function m(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",16),i["\u0275\u0275elementStart"](1,"table",17),i["\u0275\u0275elementStart"](2,"thead"),i["\u0275\u0275elementStart"](3,"tr"),i["\u0275\u0275elementStart"](4,"th"),i["\u0275\u0275text"](5,"#"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"th"),i["\u0275\u0275text"](7,"Student"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"th"),i["\u0275\u0275text"](9,"Category"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"th"),i["\u0275\u0275text"](11,"Status"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"th"),i["\u0275\u0275text"](13,"Course Reports"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"tbody"),i["\u0275\u0275template"](15,h,13,5,"tr",18),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](15),i["\u0275\u0275property"]("ngForOf",e.filteredBranchStudents)}}function u(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",21),i["\u0275\u0275text"](1,"No Students Available"),i["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275template"](1,m,16,1,"div",14),i["\u0275\u0275template"](2,u,2,0,"ng-template",null,15,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementContainerEnd"]()),2&e){const e=i["\u0275\u0275reference"](3),t=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.filteredBranchStudents.length>0)("ngIfElse",e)}}function S(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",21),i["\u0275\u0275text"](1,"Loading..."),i["\u0275\u0275elementEnd"]())}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a,i){this.branchService=e,this.studentService=t,this.toastrService=n,this.branchStudentService=r,this.router=a,this.route=i,this.route.queryParams.subscribe(e=>{this.ngOnInit()})}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.branchStudents=[],this.filteredBranchStudents=[],this.categories=[],this.category="",this.getCategories(),this.getStudents(this.category)):this.router.navigate(["../"],{relativeTo:this.route})}getCategories(){this.branchService.getBranchData().subscribe(e=>{e&&(this.categories=e.categories)}),this.categories||this.branchService.getBranch(this.branchId).subscribe(e=>{this.branchService.setBranchData(e),this.categories=e.categories},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}getStudents(e){this.loading=!0,this.branchStudentService.getBranchAllStudentNameIds(this.branchId,e).subscribe(e=>{this.branchStudents=e,this.filteredBranchStudents=e,this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}searchStudent(e){e=e.trim().toLowerCase(),this.filteredBranchStudents=e?this.branchStudents.filter(t=>t.name.toLowerCase().includes(e)):[...this.branchStudents]}branchStudentCourses(e,t,n){this.studentService.setStudentId(t),this.branchService.setCategoryId(n),this.branchStudentService.setBranchStudentId(e),this.router.navigate(["../course"],{relativeTo:this.route})}getCategory(e){const t=this.categories.find(t=>t._id===e);return t?t.category:"--"}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](s.a),i["\u0275\u0275directiveInject"](r.Gb),i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](l.c),i["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-student-reports"]],decls:23,vars:4,consts:[[1,"row"],[1,"col-md-9","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"body-container"],[1,"col-md-6","col-sm-8","col-12"],["nbPrefix","","icon","search-outline","pack","eva"],["type","text","nbInput","","shape","round","placeholder","Search","fullWidth","",3,"input"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBranchStudents",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[3,"ngClass"],["nbButton","","size","small","status","success","nbPrefix","",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nb-card"),i["\u0275\u0275elementStart"](1,"nb-card-header"),i["\u0275\u0275elementStart"](2,"div",0),i["\u0275\u0275elementStart"](3,"div",1),i["\u0275\u0275elementStart"](4,"h3"),i["\u0275\u0275text"](5,"Student Reports"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",2),i["\u0275\u0275elementStart"](7,"nb-select",3),i["\u0275\u0275listener"]("selectedChange",(function(e){return t.getStudents(e)})),i["\u0275\u0275elementStart"](8,"nb-option",4),i["\u0275\u0275text"](9,"All"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](10,d,2,2,"nb-option",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"nb-card-body",6),i["\u0275\u0275elementStart"](12,"div",0),i["\u0275\u0275elementStart"](13,"div",7),i["\u0275\u0275elementStart"](14,"nb-form-field"),i["\u0275\u0275element"](15,"nb-icon",8),i["\u0275\u0275elementStart"](16,"input",9),i["\u0275\u0275listener"]("input",(function(e){return t.searchStudent(e.target.value)})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](17,"br"),i["\u0275\u0275elementStart"](18,"div",0),i["\u0275\u0275elementStart"](19,"div",10),i["\u0275\u0275template"](20,g,4,2,"ng-container",11),i["\u0275\u0275template"](21,S,2,0,"ng-template",null,12,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275reference"](22);i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("selected",t.category),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngForOf",t.categories),i["\u0275\u0275advance"](10),i["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[r.y,r.A,r.nb,r.gb,a.m,r.x,r.L,r.N,r.jb,r.Q,a.n,a.l,r.v],styles:[".active[_ngcontent-%COMP%]{color:#00d68f}.inactive[_ngcontent-%COMP%]{color:#ff3d71}"]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let f=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.g.forChild(p)],l.g]}),e})(),b=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,f,r.B,r.R,r.ob,r.M,r.w,r.P,r.Jb]]}),e})()}}]);
//# sourceMappingURL=137-es2015.516b5877e77836ec4326.js.map