(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{iy8L:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),a=n("IAlr"),i=n("EQut"),s=n("fXoL"),o=n("aceb"),l=n("tyNb");function c(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-option",14),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e._id),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](e.category)}}function d(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"td"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"td"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"td"),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"td"),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"td"),s["\u0275\u0275elementStart"](10,"button",21),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](3).courseBatches(n)})),s["\u0275\u0275text"](11," Batches "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"td"),s["\u0275\u0275elementStart"](13,"button",22),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](3).courseMaterial(n)})),s["\u0275\u0275text"](14," Course Material "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"td"),s["\u0275\u0275elementStart"](16,"button",23),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](3).editCourse(n._id)})),s["\u0275\u0275text"](17," Edit "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"td"),s["\u0275\u0275elementStart"](19,"button",24),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit,r=t.index;return s["\u0275\u0275nextContext"](3).changeCourseStatus(n._id,!n.status,r)})),s["\u0275\u0275text"](20),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,r=s["\u0275\u0275nextContext"](3);s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](n+1),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](e.basicDetails.courseName),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](r.getCategory(e.basicDetails.category)),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](e.feeDetails.totalFees),s["\u0275\u0275advance"](11),s["\u0275\u0275property"]("status",e.status?"danger":"warning"),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.status?"Deactivate":"Activate"," ")}}function u(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",17),s["\u0275\u0275elementStart"](1,"table",18),s["\u0275\u0275elementStart"](2,"thead"),s["\u0275\u0275elementStart"](3,"tr"),s["\u0275\u0275elementStart"](4,"th"),s["\u0275\u0275text"](5,"#"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"th"),s["\u0275\u0275text"](7,"Course"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"th"),s["\u0275\u0275text"](9,"Category"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"th"),s["\u0275\u0275text"](11,"Fees"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"th",19),s["\u0275\u0275text"](13,"Action"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"tbody"),s["\u0275\u0275template"](15,d,21,6,"tr",20),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](15),s["\u0275\u0275property"]("ngForOf",e.courses)}}function m(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",25),s["\u0275\u0275text"](1,"No Courses Available"),s["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,u,16,1,"div",15),s["\u0275\u0275template"](2,m,2,0,"ng-template",null,16,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275reference"](3),t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.courses.length>0)("ngIfElse",e)}}function g(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",25),s["\u0275\u0275text"](1,"Loading..."),s["\u0275\u0275elementEnd"]())}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a){this.branchService=e,this.courseService=t,this.toastrService=n,this.router=r,this.route=a}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.courses=[],this.categories=[],this.category="",this.branchService.getBranch(this.branchId).subscribe(e=>{this.branchService.setBranchData(e),this.categories=e.categories,this.getCourses("")},e=>{})):this.router.navigate(["../"],{relativeTo:this.route})}getCourses(e){this.loading=!0,this.category=e,this.courseService.getCourses(this.branchId,e).subscribe(e=>{this.courses=e,this.loading=!1},e=>{this.loading=!1})}getCategory(e){const t=this.categories.find(t=>t._id===e);return t?t.category:"--"}addCourse(){this.router.navigate(["../add"],{relativeTo:this.route})}courseBatches(e){this.courseService.setCourseId(e._id),this.courseService.setCourseData(e),this.router.navigate(["../batch"],{relativeTo:this.route})}courseMaterial(e){this.courseService.setCourseId(e._id),this.courseService.setCourseData(e),this.router.navigate(["../course-material"],{relativeTo:this.route})}editCourse(e){this.courseService.setCourseId(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}changeCourseStatus(e,t,n){this.loading=!0,this.courseService.changeCourseStatus(e,t).subscribe(e=>{this.courses[n].status=t,this.showToastr("top-right","success",`Course ${t?"Activated":"Deactivated"} Successfully!`),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](i.a),s["\u0275\u0275directiveInject"](a.a),s["\u0275\u0275directiveInject"](o.Db),s["\u0275\u0275directiveInject"](l.c),s["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-course"]],decls:27,vars:4,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","status","primary","fullWidth","","size","small",3,"click"],["icon","plus-circle-outline"],[1,"col-md-9"],[1,"col-md-3"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noCourses",""],[1,"table-responsive"],[1,"table"],["colspan","4"],[4,"ngFor","ngForOf"],["nbButton","","status","info","size","small",1,"mr-3",3,"click"],["nbButton","","status","success","size","small",1,"mr-3",3,"click"],["nbButton","","status","basic","size","small",1,"mr-3",3,"click"],["nbButton","","size","small",1,"",3,"status","click"],[1,"text-center"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"div",0),s["\u0275\u0275elementStart"](3,"div",1),s["\u0275\u0275elementStart"](4,"h3"),s["\u0275\u0275text"](5,"Courses"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"div",2),s["\u0275\u0275elementStart"](7,"button",3),s["\u0275\u0275listener"]("click",(function(){return t.addCourse()})),s["\u0275\u0275text"](8," Add Course "),s["\u0275\u0275element"](9,"nb-icon",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"nb-card"),s["\u0275\u0275elementStart"](11,"nb-card-header"),s["\u0275\u0275elementStart"](12,"div",0),s["\u0275\u0275elementStart"](13,"div",5),s["\u0275\u0275elementStart"](14,"h5"),s["\u0275\u0275text"](15,"Select Category"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"div",6),s["\u0275\u0275elementStart"](17,"nb-select",7),s["\u0275\u0275listener"]("selectedChange",(function(e){return t.getCourses(e)})),s["\u0275\u0275elementStart"](18,"nb-option",8),s["\u0275\u0275text"](19,"All"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](20,c,2,2,"nb-option",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"nb-card-body",10),s["\u0275\u0275elementStart"](22,"div",0),s["\u0275\u0275elementStart"](23,"div",11),s["\u0275\u0275template"](24,h,4,2,"ng-container",12),s["\u0275\u0275template"](25,g,2,0,"ng-template",null,13,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275reference"](26);s["\u0275\u0275advance"](17),s["\u0275\u0275property"]("selected",t.category),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngForOf",t.categories),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[o.x,o.z,o.u,o.M,o.mb,o.fb,r.m,o.w,r.n],styles:[".body-container[_ngcontent-%COMP%]{height:25rem;max-height:25rem;overflow-y:auto}"]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let v=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.g.forChild(p)],l.g]}),e})();n.d(t,"ManageCourseModule",(function(){return S}));let S=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,v,o.A,o.v,o.nb,o.O,o.Q]]}),e})()}}]);