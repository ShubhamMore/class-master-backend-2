(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{"4Gly":function(e,t,n){"use strict";n.r(t),n.d(t,"ManageCourseMaterialModule",(function(){return E}));var r=n("aceb"),a=n("ofXK"),i=n("fXoL"),l=n("EQut"),s=n("IAlr"),o=n("FYcy"),c=n("L3Ly"),d=n("tyNb");function u(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"small"),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"]("of ",e.course.basicDetails.courseName,"")}}function m(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nb-option",16),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275property"]("value",e._id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.subject)}}function h(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"nb-select",13),i["\u0275\u0275listener"]("selectedChange",(function(t){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().getCourseMaterials(t)})),i["\u0275\u0275elementStart"](1,"nb-option",14),i["\u0275\u0275text"](2,"All"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](3,m,2,2,"nb-option",15),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("selected",e.subject),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngForOf",e.course.subjects)}}function p(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"tr"),i["\u0275\u0275elementStart"](1,"td"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"td"),i["\u0275\u0275text"](4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"td"),i["\u0275\u0275text"](6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"td"),i["\u0275\u0275text"](8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"td"),i["\u0275\u0275elementStart"](10,"button",23),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit;return i["\u0275\u0275nextContext"](3).viewCourseMaterial(n)})),i["\u0275\u0275text"](11," View "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"td"),i["\u0275\u0275elementStart"](13,"button",24),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit,r=t.index;return i["\u0275\u0275nextContext"](3).changeCourseMaterialStatus(n._id,!n.status,r)})),i["\u0275\u0275text"](14),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](15,"td"),i["\u0275\u0275elementStart"](16,"button",25),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit;return i["\u0275\u0275nextContext"](3).deleteCourseMaterial(n._id)})),i["\u0275\u0275text"](17," Delete "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index,r=i["\u0275\u0275nextContext"](3);i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](n+1),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](e.title),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](r.getSubject(e.subject)),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](r.getFileSize(e.fileSize)),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("status",e.status?"danger":"warning"),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e.status?"Deactivate":"Activate"," ")}}function g(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",19),i["\u0275\u0275elementStart"](1,"table",20),i["\u0275\u0275elementStart"](2,"thead"),i["\u0275\u0275elementStart"](3,"tr"),i["\u0275\u0275elementStart"](4,"th"),i["\u0275\u0275text"](5,"#"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"th"),i["\u0275\u0275text"](7,"Title"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"th"),i["\u0275\u0275text"](9,"Subject"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"th"),i["\u0275\u0275text"](11,"File Size"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"th",21),i["\u0275\u0275text"](13,"Action"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"tbody"),i["\u0275\u0275template"](15,p,18,6,"tr",22),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"](2);i["\u0275\u0275advance"](15),i["\u0275\u0275property"]("ngForOf",e.courseMaterials)}}function S(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",26),i["\u0275\u0275text"](1,"No Course Material Available"),i["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e&&(i["\u0275\u0275elementContainerStart"](0),i["\u0275\u0275template"](1,g,16,1,"div",17),i["\u0275\u0275template"](2,S,2,0,"ng-template",null,18,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementContainerEnd"]()),2&e){const e=i["\u0275\u0275reference"](3),t=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.courseMaterials.length>0)("ngIfElse",e)}}function f(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p",26),i["\u0275\u0275text"](1,"Loading..."),i["\u0275\u0275elementEnd"]())}const v=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a,i,l){this.branchService=e,this.courseService=t,this.courseMaterialService=n,this.storageService=r,this.toastrService=a,this.router=i,this.route=l}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.subject="",this.courseMaterials=[],this.courseService.getCourseData().subscribe(e=>{this.course=e,this.course?this.getCourseMaterials(this.subject):this.back()})):this.back()}getFileSize(e){const t=this.storageService.convertByteToUnit(e);return t.value.toFixed(1)+" "+t.unit}getCourseMaterials(e){this.loading=!0,this.subject=e,this.courseMaterialService.getCourseMaterials(this.branchId,this.course.basicDetails.category,this.course._id,e).subscribe(e=>{this.courseMaterials=e,this.loading=!1},e=>{this.loading=!1})}addCourseMaterial(){this.router.navigate(["../add"],{relativeTo:this.route})}deleteCourseMaterial(e,t){this.loading=!0,this.courseMaterialService.deleteCourseMaterial(e).subscribe(e=>{this.courseMaterials.splice(t,1),this.showToastr("top-right","success","CourseMaterial Deleted Successfully!"),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}viewCourseMaterial(e){this.courseMaterialService.setCourseMaterialId(e._id),this.courseMaterialService.setCourseMaterialData(e),this.router.navigate(["../view"],{relativeTo:this.route})}getSubject(e){const t=this.course.subjects.find(t=>t._id===e);return t?t.subject:"--"}changeCourseMaterialStatus(e,t,n){this.loading=!0,this.courseMaterialService.changeCourseMaterialStatus(e,t).subscribe(e=>{this.courseMaterials[n].status=t,this.showToastr("top-right","success",`CourseMaterial ${t?"Activated":"Deactivated"} Successfully!`),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}back(){this.router.navigate(["../"],{relativeTo:this.route})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l.a),i["\u0275\u0275directiveInject"](s.a),i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](r.Gb),i["\u0275\u0275directiveInject"](d.c),i["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-manage-course-material"]],decls:25,vars:4,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[4,"ngIf"],[1,"col-md-3","col-sm-4"],["nbButton","","size","small","status","primary","fullWidth","",3,"click"],["icon","plus-circle-outline"],[1,"col-md-9"],[1,"col-md-3"],["id","select-subject","name","subject","fullWidth","","placeholder","Select Subject",3,"selected","selectedChange",4,"ngIf"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],["id","select-subject","name","subject","fullWidth","","placeholder","Select Subject",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["CourseMaterials",""],[1,"table-responsive"],[1,"table"],["colspan","3"],[4,"ngFor","ngForOf"],["nbButton","","size","small","status","info",3,"click"],["nbButton","","size","small",3,"status","click"],["nbButton","","size","small","status","danger",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nb-card"),i["\u0275\u0275elementStart"](1,"nb-card-header"),i["\u0275\u0275elementStart"](2,"div",0),i["\u0275\u0275elementStart"](3,"div",1),i["\u0275\u0275elementStart"](4,"h3"),i["\u0275\u0275text"](5," Course Material "),i["\u0275\u0275template"](6,u,2,1,"small",2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"div",3),i["\u0275\u0275elementStart"](8,"button",4),i["\u0275\u0275listener"]("click",(function(){return t.addCourseMaterial()})),i["\u0275\u0275text"](9," Add Course Material "),i["\u0275\u0275element"](10,"nb-icon",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"nb-card"),i["\u0275\u0275elementStart"](12,"nb-card-header"),i["\u0275\u0275elementStart"](13,"div",0),i["\u0275\u0275elementStart"](14,"div",6),i["\u0275\u0275elementStart"](15,"h5"),i["\u0275\u0275text"](16,"Select Subject"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"div",7),i["\u0275\u0275template"](18,h,4,2,"nb-select",8),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"nb-card-body",9),i["\u0275\u0275elementStart"](20,"div",0),i["\u0275\u0275elementStart"](21,"div",10),i["\u0275\u0275template"](22,b,4,2,"ng-container",11),i["\u0275\u0275template"](23,f,2,0,"ng-template",null,12,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275reference"](24);i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("ngIf",t.course),i["\u0275\u0275advance"](12),i["\u0275\u0275property"]("ngIf",t.course),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[r.y,r.A,a.n,r.v,r.N,r.x,r.nb,r.gb,a.m],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let x=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d.g.forChild(v)],d.g]}),e})(),E=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,x,r.B,r.w,r.P,r.Jb,r.ob]]}),e})()}}]);
//# sourceMappingURL=192-es2015.90a4c789d5b7657e1fa1.js.map