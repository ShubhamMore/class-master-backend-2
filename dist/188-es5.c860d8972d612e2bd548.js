!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{"4Gly":function(n,a,r){"use strict";r.r(a),r.d(a,"ManageCourseMaterialModule",(function(){return j}));var i=r("aceb"),l=r("ofXK"),o=r("fXoL"),c=r("EQut"),s=r("IAlr"),u=r("FYcy"),d=r("L3Ly"),m=r("tyNb");function f(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"small"),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"]("of ",n.course.basicDetails.courseName,"")}}function v(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"nb-option",16),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;o["\u0275\u0275property"]("value",n._id),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](n.subject)}}function h(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"nb-select",13),o["\u0275\u0275listener"]("selectedChange",(function(e){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"]().getCourseMaterials(e)})),o["\u0275\u0275elementStart"](1,"nb-option",14),o["\u0275\u0275text"](2,"All"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](3,v,2,2,"nb-option",15),o["\u0275\u0275elementEnd"]()}if(2&e){var a=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("selected",a.subject),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngForOf",a.course.subjects)}}function p(e,t){if(1&e){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"tr"),o["\u0275\u0275elementStart"](1,"td"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"td"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"td"),o["\u0275\u0275text"](6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"td"),o["\u0275\u0275text"](8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"td"),o["\u0275\u0275elementStart"](10,"button",23),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](n);var e=t.$implicit;return o["\u0275\u0275nextContext"](3).viewCourseMaterial(e)})),o["\u0275\u0275text"](11," View "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"td"),o["\u0275\u0275elementStart"](13,"button",24),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](n);var e=t.$implicit,a=t.index;return o["\u0275\u0275nextContext"](3).changeCourseMaterialStatus(e._id,!e.status,a)})),o["\u0275\u0275text"](14),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"td"),o["\u0275\u0275elementStart"](16,"button",25),o["\u0275\u0275listener"]("click",(function(){o["\u0275\u0275restoreView"](n);var e=t.$implicit;return o["\u0275\u0275nextContext"](3).deleteCourseMaterial(e._id)})),o["\u0275\u0275text"](17," Delete "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,r=t.index,i=o["\u0275\u0275nextContext"](3);o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](r+1),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](a.title),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](i.getSubject(a.subject)),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](i.getFileSize(a.fileSize)),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("status",a.status?"danger":"warning"),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",a.status?"Deactivate":"Activate"," ")}}function g(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div",19),o["\u0275\u0275elementStart"](1,"table",20),o["\u0275\u0275elementStart"](2,"thead"),o["\u0275\u0275elementStart"](3,"tr"),o["\u0275\u0275elementStart"](4,"th"),o["\u0275\u0275text"](5,"#"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"th"),o["\u0275\u0275text"](7,"Title"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"th"),o["\u0275\u0275text"](9,"Subject"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"th"),o["\u0275\u0275text"](11,"File Size"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"th",21),o["\u0275\u0275text"](13,"Action"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"tbody"),o["\u0275\u0275template"](15,p,18,6,"tr",22),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){var n=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](15),o["\u0275\u0275property"]("ngForOf",n.courseMaterials)}}function b(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",26),o["\u0275\u0275text"](1,"No Course Material Available"),o["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275template"](1,g,16,1,"div",17),o["\u0275\u0275template"](2,b,2,0,"ng-template",null,18,o["\u0275\u0275templateRefExtractor"]),o["\u0275\u0275elementContainerEnd"]()),2&e){var n=o["\u0275\u0275reference"](3),a=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",a.courseMaterials.length>0)("ngIfElse",n)}}function x(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",26),o["\u0275\u0275text"](1,"Loading..."),o["\u0275\u0275elementEnd"]())}var E,C,y,M=[{path:"",component:(E=function(){function n(t,a,r,i,l,o,c){e(this,n),this.branchService=t,this.courseService=a,this.courseMaterialService=r,this.storageService=i,this.toastrService=l,this.router=o,this.route=c}var a,r,i;return a=n,(r=[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.subject="",this.courseMaterials=[],this.courseService.getCourseData().subscribe((function(t){e.course=t,e.course?e.getCourseMaterials(e.subject):e.back()}))):this.back()}},{key:"getFileSize",value:function(e){var t=this.storageService.convertByteToUnit(e);return t.value.toFixed(1)+" "+t.unit}},{key:"getCourseMaterials",value:function(e){var t=this;this.loading=!0,this.subject=e,this.courseMaterialService.getCourseMaterials(this.branchId,this.course.basicDetails.category,this.course._id,e).subscribe((function(e){t.courseMaterials=e,t.loading=!1}),(function(e){t.loading=!1}))}},{key:"addCourseMaterial",value:function(){this.router.navigate(["../add"],{relativeTo:this.route})}},{key:"deleteCourseMaterial",value:function(e,t){var n=this;this.loading=!0,this.courseMaterialService.deleteCourseMaterial(e).subscribe((function(e){n.courseMaterials.splice(t,1),n.showToastr("top-right","success","CourseMaterial Deleted Successfully!"),n.loading=!1}),(function(e){n.showToastr("top-right","danger",e),n.loading=!1}))}},{key:"viewCourseMaterial",value:function(e){this.courseMaterialService.setCourseMaterialId(e._id),this.courseMaterialService.setCourseMaterialData(e),this.router.navigate(["../view"],{relativeTo:this.route})}},{key:"getSubject",value:function(e){var t=this.course.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"changeCourseMaterialStatus",value:function(e,t,n){var a=this;this.loading=!0,this.courseMaterialService.changeCourseMaterialStatus(e,t).subscribe((function(e){a.courseMaterials[n].status=t,a.showToastr("top-right","success","CourseMaterial ".concat(t?"Activated":"Deactivated"," Successfully!")),a.loading=!1}),(function(e){a.showToastr("top-right","danger",e),a.loading=!1}))}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}])&&t(a.prototype,r),i&&t(a,i),n}(),E.\u0275fac=function(e){return new(e||E)(o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](u.a),o["\u0275\u0275directiveInject"](d.a),o["\u0275\u0275directiveInject"](i.Gb),o["\u0275\u0275directiveInject"](m.c),o["\u0275\u0275directiveInject"](m.a))},E.\u0275cmp=o["\u0275\u0275defineComponent"]({type:E,selectors:[["ngx-manage-course-material"]],decls:25,vars:4,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[4,"ngIf"],[1,"col-md-3","col-sm-4"],["nbButton","","size","small","status","primary","fullWidth","",3,"click"],["icon","plus-circle-outline"],[1,"col-md-9"],[1,"col-md-3"],["id","select-subject","name","subject","fullWidth","","placeholder","Select Subject",3,"selected","selectedChange",4,"ngIf"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],["id","select-subject","name","subject","fullWidth","","placeholder","Select Subject",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["CourseMaterials",""],[1,"table-responsive"],[1,"table"],["colspan","3"],[4,"ngFor","ngForOf"],["nbButton","","size","small","status","info",3,"click"],["nbButton","","size","small",3,"status","click"],["nbButton","","size","small","status","danger",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"nb-card"),o["\u0275\u0275elementStart"](1,"nb-card-header"),o["\u0275\u0275elementStart"](2,"div",0),o["\u0275\u0275elementStart"](3,"div",1),o["\u0275\u0275elementStart"](4,"h3"),o["\u0275\u0275text"](5," Course Material "),o["\u0275\u0275template"](6,f,2,1,"small",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"div",3),o["\u0275\u0275elementStart"](8,"button",4),o["\u0275\u0275listener"]("click",(function(){return t.addCourseMaterial()})),o["\u0275\u0275text"](9," Add Course Material "),o["\u0275\u0275element"](10,"nb-icon",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"nb-card"),o["\u0275\u0275elementStart"](12,"nb-card-header"),o["\u0275\u0275elementStart"](13,"div",0),o["\u0275\u0275elementStart"](14,"div",6),o["\u0275\u0275elementStart"](15,"h5"),o["\u0275\u0275text"](16,"Select Subject"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"div",7),o["\u0275\u0275template"](18,h,4,2,"nb-select",8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"nb-card-body",9),o["\u0275\u0275elementStart"](20,"div",0),o["\u0275\u0275elementStart"](21,"div",10),o["\u0275\u0275template"](22,S,4,2,"ng-container",11),o["\u0275\u0275template"](23,x,2,0,"ng-template",null,12,o["\u0275\u0275templateRefExtractor"]),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){var n=o["\u0275\u0275reference"](24);o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("ngIf",t.course),o["\u0275\u0275advance"](12),o["\u0275\u0275property"]("ngIf",t.course),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[i.y,i.A,l.n,i.v,i.N,i.x,i.nb,i.gb,l.m],styles:[""]}),E)},{path:"page-not-found",loadChildren:function(){return r.e(0).then(r.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],I=((y=function t(){e(this,t)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[m.g.forChild(M)],m.g]}),y),j=((C=function t(){e(this,t)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[l.c,I,i.B,i.w,i.P,i.Jb,i.ob]]}),C)}}])}();
//# sourceMappingURL=188-es5.c860d8972d612e2bd548.js.map