(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"n/oW":function(e,t,n){"use strict";n.r(t),n.d(t,"ManageStudyMaterialModule",(function(){return f}));var r=n("aceb"),i=n("ofXK"),a=n("fXoL"),l=n("EQut"),c=n("7kqb"),s=n("ziii"),o=n("tyNb");function d(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"tr"),a["\u0275\u0275elementStart"](1,"td"),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"td"),a["\u0275\u0275text"](4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"td"),a["\u0275\u0275elementStart"](6,"button",15),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"](3).viewLectureMaterial(n)})),a["\u0275\u0275text"](7," View "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"td"),a["\u0275\u0275elementStart"](9,"button",16),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit,r=t.index;return a["\u0275\u0275nextContext"](3).changeLectureMaterialStatus(n._id,!n.status,r)})),a["\u0275\u0275text"](10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"td"),a["\u0275\u0275elementStart"](12,"button",17),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](e);const n=t.$implicit;return a["\u0275\u0275nextContext"](3).deleteLectureMaterial(n._id)})),a["\u0275\u0275text"](13," Delete "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index;a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](n+1),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](e.title),a["\u0275\u0275advance"](5),a["\u0275\u0275property"]("status",e.status?"danger":"warning"),a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" ",e.status?"Deactivate":"Activate"," ")}}function u(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",11),a["\u0275\u0275elementStart"](1,"table",12),a["\u0275\u0275elementStart"](2,"thead"),a["\u0275\u0275elementStart"](3,"tr"),a["\u0275\u0275elementStart"](4,"th"),a["\u0275\u0275text"](5,"#"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"th"),a["\u0275\u0275text"](7,"Title"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"th",13),a["\u0275\u0275text"](9,"Action"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"tbody"),a["\u0275\u0275template"](11,d,14,4,"tr",14),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](11),a["\u0275\u0275property"]("ngForOf",e.lectureMaterials)}}function m(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",18),a["\u0275\u0275text"](1,"No Lecture Material Available"),a["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,u,12,1,"div",9),a["\u0275\u0275template"](2,m,2,0,"ng-template",null,10,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275elementContainerEnd"]()),2&e){const e=a["\u0275\u0275reference"](3),t=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf",t.lectureMaterials.length>0)("ngIfElse",e)}}function g(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",18),a["\u0275\u0275text"](1,"Loading..."),a["\u0275\u0275elementEnd"]())}const p=[{path:"",component:(()=>{class e{constructor(e,t,n,r,i,a){this.branchService=e,this.lectureService=t,this.lectureMaterialService=n,this.toastrService=r,this.router=i,this.route=a}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.subject="",this.lectureMaterials=[],this.lectureService.getLectureData().subscribe(e=>{this.lecture=e,this.lecture?this.getLectureMaterials(this.subject):this.back()})):this.back()}getLectureMaterials(e){this.loading=!0,this.subject=e,this.lectureMaterialService.getLectureMaterials(this.branchId,this.lecture.category,this.lecture.course,this.lecture.batch,this.lecture._id).subscribe(e=>{this.lectureMaterials=e,this.loading=!1},e=>{this.loading=!1})}addLectureMaterial(){this.router.navigate(["../add"],{relativeTo:this.route})}deleteLectureMaterial(e,t){this.loading=!0,this.lectureMaterialService.deleteLectureMaterial(e).subscribe(e=>{this.lectureMaterials.splice(t,1),this.showToastr("top-right","success","LectureMaterial Deleted Successfully!"),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}viewLectureMaterial(e){this.lectureMaterialService.setLectureMaterialId(e._id),this.lectureMaterialService.setLectureMaterialData(e),this.router.navigate(["../view"],{relativeTo:this.route})}getSubject(e){const t=this.course.subjects.find(t=>t._id===e);return t?t.subject:"--"}changeLectureMaterialStatus(e,t,n){this.loading=!0,this.lectureMaterialService.changeLectureMaterialStatus(e,t).subscribe(e=>{this.lectureMaterials[n].status=t,this.showToastr("top-right","success",`LectureMaterial ${t?"Activated":"Deactivated"} Successfully!`),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}back(){this.router.navigate(["../"],{relativeTo:this.route})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](c.a),a["\u0275\u0275directiveInject"](s.a),a["\u0275\u0275directiveInject"](r.Gb),a["\u0275\u0275directiveInject"](o.c),a["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-study-material"]],decls:16,vars:2,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","size","small","status","primary","fullWidth","",3,"click"],["icon","plus-circle-outline"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],["class","table-responsive",4,"ngIf","ngIfElse"],["noLectureMaterials",""],[1,"table-responsive"],[1,"table"],["colspan","3"],[4,"ngFor","ngForOf"],["nbButton","","size","small","status","info",3,"click"],["nbButton","","size","small",3,"status","click"],["nbButton","","size","small","status","danger",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275elementStart"](2,"div",0),a["\u0275\u0275elementStart"](3,"div",1),a["\u0275\u0275elementStart"](4,"h3"),a["\u0275\u0275text"](5," Lecture Material "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"div",2),a["\u0275\u0275elementStart"](7,"button",3),a["\u0275\u0275listener"]("click",(function(){return t.addLectureMaterial()})),a["\u0275\u0275text"](8," Add Lecture Material "),a["\u0275\u0275element"](9,"nb-icon",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"nb-card-body",5),a["\u0275\u0275elementStart"](11,"div",0),a["\u0275\u0275elementStart"](12,"div",6),a["\u0275\u0275template"](13,h,4,2,"ng-container",7),a["\u0275\u0275template"](14,g,2,0,"ng-template",null,8,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){const e=a["\u0275\u0275reference"](15);a["\u0275\u0275advance"](13),a["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[r.y,r.A,r.v,r.N,r.x,i.n,i.m],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found"}];let b=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(p)],o.g]}),e})(),f=(()=>{class e{}return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,b,r.B,r.w,r.P,r.ob]]}),e})()}}]);
//# sourceMappingURL=107-es2015.952a652398561164b6d2.js.map