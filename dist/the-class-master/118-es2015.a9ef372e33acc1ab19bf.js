(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{lc0P:function(e,t,n){"use strict";n.r(t),n.d(t,"ManageCourseModule",(function(){return S}));var r=n("ofXK"),a=n("fXoL"),i=n("EQut"),s=n("IAlr"),o=n("aceb"),l=n("tyNb");function c(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"nb-option",14),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;a["\u0275\u0275property"]("value",e._id),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](e.category)}}function d(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"tr"),a["\u0275\u0275elementStart"](1,"td"),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"td"),a["\u0275\u0275text"](4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"td"),a["\u0275\u0275text"](6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"td"),a["\u0275\u0275text"](8),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"td"),a["\u0275\u0275elementStart"](10,"button",21),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"](3).courseBatches(n)})),a["\u0275\u0275text"](11," Batches "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"td"),a["\u0275\u0275elementStart"](13,"button",22),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"](3).courseMaterial(n)})),a["\u0275\u0275text"](14," Course Material "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](15,"td"),a["\u0275\u0275elementStart"](16,"button",23),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"](3).editCourse(n._id)})),a["\u0275\u0275text"](17," Edit "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](18,"td"),a["\u0275\u0275elementStart"](19,"button",24),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit,r=t.index;return a["\u0275\u0275nextContext"](3).changeCourseStatus(n._id,!n.status,r)})),a["\u0275\u0275text"](20),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,r=a["\u0275\u0275nextContext"](3);a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](n+1),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](e.basicDetails.courseName),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](r.getCategory(e.basicDetails.category)),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"]("",e.feeDetails.totalFees,"/-"),a["\u0275\u0275advance"](11),a["\u0275\u0275property"]("status",e.status?"danger":"warning"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.status?"Deactivate":"Activate"," ")}}function u(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",17),a["\u0275\u0275elementStart"](1,"table",18),a["\u0275\u0275elementStart"](2,"thead"),a["\u0275\u0275elementStart"](3,"tr"),a["\u0275\u0275elementStart"](4,"th"),a["\u0275\u0275text"](5,"#"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"th"),a["\u0275\u0275text"](7,"Course"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"th"),a["\u0275\u0275text"](9,"Category"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"th"),a["\u0275\u0275text"](11,"Fees"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"th",19),a["\u0275\u0275text"](13,"Action"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"tbody"),a["\u0275\u0275template"](15,d,21,6,"tr",20),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](15),a["\u0275\u0275property"]("ngForOf",e.courses)}}function m(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",25),a["\u0275\u0275text"](1,"No Courses Available"),a["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,u,16,1,"div",15),a["\u0275\u0275template"](2,m,2,0,"ng-template",null,16,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275reference"](3),t=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.courses.length>0)("ngIfElse",e)}}function g(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",25),a["\u0275\u0275text"](1,"Loading..."),a["\u0275\u0275elementEnd"]())}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a){this.branchService=e,this.courseService=t,this.toastrService=n,this.router=r,this.route=a}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.courses=[],this.categories=[],this.category="",this.branchService.getBranch(this.branchId).subscribe(e=>{this.branchService.setBranchData(e),this.categories=e.categories,this.getCourses("")},e=>{})):this.router.navigate(["../"],{relativeTo:this.route})}getCourses(e){this.loading=!0,this.category=e,this.courseService.getCourses(this.branchId,e).subscribe(e=>{this.courses=e,this.loading=!1},e=>{this.loading=!1})}getCategory(e){const t=this.categories.find(t=>t._id===e);return t?t.category:"--"}addCourse(){this.router.navigate(["../add"],{relativeTo:this.route})}courseBatches(e){this.courseService.setCourseId(e._id),this.courseService.setCourseData(e),this.router.navigate(["../batch"],{relativeTo:this.route})}courseMaterial(e){this.courseService.setCourseId(e._id),this.courseService.setCourseData(e),this.router.navigate(["../course-material"],{relativeTo:this.route})}editCourse(e){this.courseService.setCourseId(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}changeCourseStatus(e,t,n){this.loading=!0,this.courseService.changeCourseStatus(e,t).subscribe(e=>{this.courses[n].status=t,this.showToastr("top-right","success",`Course ${t?"Activated":"Deactivated"} Successfully!`),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](i.a),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](o.Gb),a["\u0275\u0275directiveInject"](l.c),a["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-course"]],decls:27,vars:4,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","size","small","status","primary","fullWidth","",3,"click"],["icon","plus-circle-outline"],[1,"col-md-9"],[1,"col-md-3"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noCourses",""],[1,"table-responsive"],[1,"table"],["colspan","4"],[4,"ngFor","ngForOf"],["nbButton","","size","small","status","info",1,"mr-3",3,"click"],["nbButton","","size","small","status","success",1,"mr-3",3,"click"],["nbButton","","size","small","status","basic",1,"mr-3",3,"click"],["nbButton","","size","small",1,"",3,"status","click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275elementStart"](2,"div",0),a["\u0275\u0275elementStart"](3,"div",1),a["\u0275\u0275elementStart"](4,"h3"),a["\u0275\u0275text"](5,"Courses"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"div",2),a["\u0275\u0275elementStart"](7,"button",3),a["\u0275\u0275listener"]("click",(function(){return t.addCourse()})),a["\u0275\u0275text"](8," Add Course "),a["\u0275\u0275element"](9,"nb-icon",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"nb-card"),a["\u0275\u0275elementStart"](11,"nb-card-header"),a["\u0275\u0275elementStart"](12,"div",0),a["\u0275\u0275elementStart"](13,"div",5),a["\u0275\u0275elementStart"](14,"h5"),a["\u0275\u0275text"](15,"Select Category"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"div",6),a["\u0275\u0275elementStart"](17,"nb-select",7),a["\u0275\u0275listener"]("selectedChange",(function(e){return t.getCourses(e)})),a["\u0275\u0275elementStart"](18,"nb-option",8),a["\u0275\u0275text"](19,"All"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](20,c,2,2,"nb-option",9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](21,"nb-card-body",10),a["\u0275\u0275elementStart"](22,"div",0),a["\u0275\u0275elementStart"](23,"div",11),a["\u0275\u0275template"](24,h,4,2,"ng-container",12),a["\u0275\u0275template"](25,g,2,0,"ng-template",null,13,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275reference"](26);a["\u0275\u0275advance"](17),a["\u0275\u0275property"]("selected",t.category),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngForOf",t.categories),a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[o.y,o.A,o.v,o.N,o.nb,o.gb,r.m,o.x,r.n],styles:[".body-container[_ngcontent-%COMP%]{height:25rem;max-height:25rem;overflow-y:auto}"]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let v=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.g.forChild(p)],l.g]}),e})(),S=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,v,o.B,o.w,o.ob,o.P,o.R]]}),e})()}}]);
//# sourceMappingURL=118-es2015.a9ef372e33acc1ab19bf.js.map