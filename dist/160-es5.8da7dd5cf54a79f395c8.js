function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{"4Gly":function(e,t,n){"use strict";n.r(t);var a=n("aceb"),r=n("ofXK"),i=n("L3Ly"),l=n("IAlr"),o=n("FYcy"),c=n("EQut"),s=n("fXoL"),u=n("tyNb");function d(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"small"),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"]("of ",n.course.basicDetails.courseName,"")}}function m(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-option",16),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275property"]("value",n._id),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](n.subject)}}function f(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"nb-select",13),s["\u0275\u0275listener"]("selectedChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().getCourseMaterials(e)})),s["\u0275\u0275elementStart"](1,"nb-option",14),s["\u0275\u0275text"](2,"All"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,m,2,2,"nb-option",15),s["\u0275\u0275elementEnd"]()}if(2&e){var a=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("selected",a.subject),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngForOf",a.course.subjects)}}function v(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"td"),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"td"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"td"),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"td"),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"td"),s["\u0275\u0275elementStart"](10,"button",23),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](n);var e=t.$implicit;return s["\u0275\u0275nextContext"](3).viewCourseMaterial(e)})),s["\u0275\u0275text"](11," View "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"td"),s["\u0275\u0275elementStart"](13,"button",24),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](n);var e=t.$implicit,a=t.index;return s["\u0275\u0275nextContext"](3).changeCourseMaterialStatus(e._id,!e.status,a)})),s["\u0275\u0275text"](14),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"td"),s["\u0275\u0275elementStart"](16,"button",25),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](n);var e=t.$implicit;return s["\u0275\u0275nextContext"](3).deleteCourseMaterial(e._id)})),s["\u0275\u0275text"](17," Delete "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,r=t.index,i=s["\u0275\u0275nextContext"](3);s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](r+1),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](a.title),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](i.getSubject(a.subject)),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](i.getFileSize(a.fileSize)),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("status",a.status?"danger":"warning"),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",a.status?"Deactivate":"Activate"," ")}}function h(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",19),s["\u0275\u0275elementStart"](1,"table",20),s["\u0275\u0275elementStart"](2,"thead"),s["\u0275\u0275elementStart"](3,"tr"),s["\u0275\u0275elementStart"](4,"th"),s["\u0275\u0275text"](5,"#"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"th"),s["\u0275\u0275text"](7,"Title"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"th"),s["\u0275\u0275text"](9,"Subject"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"th"),s["\u0275\u0275text"](11,"File Size"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"th",21),s["\u0275\u0275text"](13,"Action"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"tbody"),s["\u0275\u0275template"](15,v,18,6,"tr",22),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](15),s["\u0275\u0275property"]("ngForOf",n.courseMaterials)}}function p(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",26),s["\u0275\u0275text"](1,"No Course Material Available"),s["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,h,16,1,"div",17),s["\u0275\u0275template"](2,p,2,0,"ng-template",null,18,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementContainerEnd"]()),2&e){var n=s["\u0275\u0275reference"](3),a=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",a.courseMaterials.length>0)("ngIfElse",n)}}function S(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",26),s["\u0275\u0275text"](1,"Loading..."),s["\u0275\u0275elementEnd"]())}var b,C,x=[{path:"",component:(b=function(){function e(t,n,a,r,i,l,o){_classCallCheck(this,e),this.branchService=t,this.courseService=n,this.courseMaterialService=a,this.storageService=r,this.toastrService=i,this.router=l,this.route=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.subject="",this.courseMaterials=[],this.courseService.getCourseData().subscribe((function(t){e.course=t,e.course?e.getCourseMaterials(e.subject):e.router.navigate(["../"],{relativeTo:e.route})}))):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getFileSize",value:function(e){var t=this.storageService.convertByteToUnit(e);return t.value.toFixed(1)+" "+t.unit}},{key:"getCourseMaterials",value:function(e){var t=this;this.loading=!0,this.subject=e,this.courseMaterialService.getCourseMaterials(this.branchId,this.course.basicDetails.category,this.course._id,e).subscribe((function(e){t.courseMaterials=e,t.loading=!1}),(function(e){t.loading=!1}))}},{key:"addCourseMaterial",value:function(){this.router.navigate(["../add"],{relativeTo:this.route})}},{key:"deleteCourseMaterial",value:function(e,t){var n=this;this.loading=!0,this.courseMaterialService.deleteCourseMaterial(e).subscribe((function(e){n.courseMaterials.splice(t,1),n.showToastr("top-right","success","CourseMaterial Deleted Successfully!"),n.loading=!1}),(function(e){n.showToastr("top-right","danger",e),n.loading=!1}))}},{key:"viewCourseMaterial",value:function(e){this.courseMaterialService.setCourseMaterialId(e._id),this.courseMaterialService.setCourseMaterialData(e),this.router.navigate(["../view"],{relativeTo:this.route})}},{key:"getSubject",value:function(e){var t=this.course.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"changeCourseMaterialStatus",value:function(e,t,n){var a=this;this.loading=!0,this.courseMaterialService.changeCourseMaterialStatus(e,t).subscribe((function(e){a.courseMaterials[n].status=t,a.showToastr("top-right","success","CourseMaterial ".concat(t?"Activated":"Deactivated"," Successfully!")),a.loading=!1}),(function(e){a.showToastr("top-right","danger",e),a.loading=!1}))}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}]),e}(),b.\u0275fac=function(e){return new(e||b)(s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](l.a),s["\u0275\u0275directiveInject"](o.a),s["\u0275\u0275directiveInject"](i.a),s["\u0275\u0275directiveInject"](a.Db),s["\u0275\u0275directiveInject"](u.c),s["\u0275\u0275directiveInject"](u.a))},b.\u0275cmp=s["\u0275\u0275defineComponent"]({type:b,selectors:[["ngx-manage-course-material"]],decls:25,vars:4,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[4,"ngIf"],[1,"col-md-3","col-sm-4"],["nbButton","","status","primary","fullWidth","","size","small",3,"click"],["icon","plus-circle-outline"],[1,"col-md-9"],[1,"col-md-3"],["id","select-subject","name","subject","fullWidth","","placeholder","Select Subject",3,"selected","selectedChange",4,"ngIf"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],["id","select-subject","name","subject","fullWidth","","placeholder","Select Subject",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["CourseMaterials",""],[1,"table-responsive"],[1,"table"],["colspan","3"],[4,"ngFor","ngForOf"],["nbButton","","status","info","size","small",3,"click"],["nbButton","","size","small",3,"status","click"],["nbButton","","status","danger","size","small",3,"click"],[1,"text-center"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"div",0),s["\u0275\u0275elementStart"](3,"div",1),s["\u0275\u0275elementStart"](4,"h3"),s["\u0275\u0275text"](5," Course Material "),s["\u0275\u0275template"](6,d,2,1,"small",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"div",3),s["\u0275\u0275elementStart"](8,"button",4),s["\u0275\u0275listener"]("click",(function(){return t.addCourseMaterial()})),s["\u0275\u0275text"](9," Add Course Material "),s["\u0275\u0275element"](10,"nb-icon",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"nb-card"),s["\u0275\u0275elementStart"](12,"nb-card-header"),s["\u0275\u0275elementStart"](13,"div",0),s["\u0275\u0275elementStart"](14,"div",6),s["\u0275\u0275elementStart"](15,"h5"),s["\u0275\u0275text"](16,"Select Subject"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"div",7),s["\u0275\u0275template"](18,f,4,2,"nb-select",8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"nb-card-body",9),s["\u0275\u0275elementStart"](20,"div",0),s["\u0275\u0275elementStart"](21,"div",10),s["\u0275\u0275template"](22,g,4,2,"ng-container",11),s["\u0275\u0275template"](23,S,2,0,"ng-template",null,12,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275reference"](24);s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("ngIf",t.course),s["\u0275\u0275advance"](12),s["\u0275\u0275property"]("ngIf",t.course),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[a.x,a.z,r.n,a.u,a.M,a.w,a.mb,a.fb,r.m],styles:[""]}),b)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],E=((C=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[u.g.forChild(x)],u.g]}),C);n.d(t,"ManageCourseMaterialModule",(function(){return y}));var M,y=((M=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:M}),M.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||M)},imports:[[r.c,E,a.A,a.v,a.O,a.Gb,a.nb]]}),M)}}]);