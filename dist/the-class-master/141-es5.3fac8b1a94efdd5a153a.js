!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{nEq8:function(t,a,i){"use strict";i.r(a),i.d(a,"ManageStudentReportsModule",(function(){return C}));var o=i("aceb"),c=i("ofXK"),l=i("fXoL"),s=i("EQut"),d=i("JmRu"),u=i("/ehT"),m=i("tyNb");function h(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-option",13),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275property"]("value",n._id),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](n.category)}}function f(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tr"),l["\u0275\u0275elementStart"](1,"td"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"td"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"td"),l["\u0275\u0275text"](6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"td"),l["\u0275\u0275elementStart"](8,"span",19),l["\u0275\u0275text"](9),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"td"),l["\u0275\u0275elementStart"](11,"button",20),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=t.$implicit;return l["\u0275\u0275nextContext"](3).branchStudentCourses(e._id,e.student,e.category)})),l["\u0275\u0275text"](12," Course Reports "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,a=t.index,i=l["\u0275\u0275nextContext"](3);l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](a+1),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](r.name),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate"](i.getCategory(r.category)),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngClass",r.status?"active":"inactive"),l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate"](r.status?"Active":"Inactive")}}function g(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",16),l["\u0275\u0275elementStart"](1,"table",17),l["\u0275\u0275elementStart"](2,"thead"),l["\u0275\u0275elementStart"](3,"tr"),l["\u0275\u0275elementStart"](4,"th"),l["\u0275\u0275text"](5,"#"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"th"),l["\u0275\u0275text"](7,"Student"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"th"),l["\u0275\u0275text"](9,"Category"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](10,"th"),l["\u0275\u0275text"](11,"Status"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](12,"th"),l["\u0275\u0275text"](13,"Course Reports"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"tbody"),l["\u0275\u0275template"](15,f,13,5,"tr",18),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"](2);l["\u0275\u0275advance"](15),l["\u0275\u0275property"]("ngForOf",n.filteredBranchStudents)}}function p(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",21),l["\u0275\u0275text"](1,"No Students Available"),l["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e&&(l["\u0275\u0275elementContainerStart"](0),l["\u0275\u0275template"](1,g,16,1,"div",14),l["\u0275\u0275template"](2,p,2,0,"ng-template",null,15,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementContainerEnd"]()),2&e){var n=l["\u0275\u0275reference"](3),r=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",r.filteredBranchStudents.length>0)("ngIfElse",n)}}function S(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"p",21),l["\u0275\u0275text"](1,"Loading..."),l["\u0275\u0275elementEnd"]())}var b,y,E,x=[{path:"",component:(b=function(){function t(e,r,a,i,o,c){var l=this;n(this,t),this.branchService=e,this.studentService=r,this.toastrService=a,this.branchStudentService=i,this.router=o,this.route=c,this.route.queryParams.subscribe((function(e){l.ngOnInit()}))}var a,i,o;return a=t,(i=[{key:"ngOnInit",value:function(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.branchStudents=[],this.filteredBranchStudents=[],this.categories=[],this.category="",this.getCategories(),this.getStudents(this.category)):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getCategories",value:function(){var e=this;this.branchService.getBranchData().subscribe((function(t){t&&(e.categories=t.categories)})),this.categories||this.branchService.getBranch(this.branchId).subscribe((function(t){e.branchService.setBranchData(t),e.categories=t.categories}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"getStudents",value:function(e){var t=this;this.loading=!0,this.branchStudentService.getBranchAllStudentNameIds(this.branchId,e).subscribe((function(e){t.branchStudents=e,t.filteredBranchStudents=e,t.loading=!1}),(function(e){t.showToastr("top-right","danger",e),t.loading=!1}))}},{key:"searchStudent",value:function(t){t=t.trim().toLowerCase(),this.filteredBranchStudents=t?this.branchStudents.filter((function(e){return e.name.toLowerCase().includes(t)})):e(this.branchStudents)}},{key:"branchStudentCourses",value:function(e,t,n){this.studentService.setStudentId(t),this.branchService.setCategoryId(n),this.branchStudentService.setBranchStudentId(e),this.router.navigate(["../course"],{relativeTo:this.route})}},{key:"getCategory",value:function(e){var t=this.categories.find((function(t){return t._id===e}));return t?t.category:"--"}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}])&&r(a.prototype,i),o&&r(a,o),t}(),b.\u0275fac=function(e){return new(e||b)(l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](d.a),l["\u0275\u0275directiveInject"](o.Gb),l["\u0275\u0275directiveInject"](u.a),l["\u0275\u0275directiveInject"](m.c),l["\u0275\u0275directiveInject"](m.a))},b.\u0275cmp=l["\u0275\u0275defineComponent"]({type:b,selectors:[["ngx-manage-student-reports"]],decls:23,vars:4,consts:[[1,"row"],[1,"col-md-9","col-sm-4"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"body-container"],[1,"col-md-6","col-sm-8","col-12"],["nbPrefix","","icon","search-outline","pack","eva"],["type","text","nbInput","","shape","round","placeholder","Search","fullWidth","",3,"input"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBranchStudents",""],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[3,"ngClass"],["nbButton","","size","small","status","success","nbPrefix","",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"nb-card"),l["\u0275\u0275elementStart"](1,"nb-card-header"),l["\u0275\u0275elementStart"](2,"div",0),l["\u0275\u0275elementStart"](3,"div",1),l["\u0275\u0275elementStart"](4,"h3"),l["\u0275\u0275text"](5,"Student Reports"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",2),l["\u0275\u0275elementStart"](7,"nb-select",3),l["\u0275\u0275listener"]("selectedChange",(function(e){return t.getStudents(e)})),l["\u0275\u0275elementStart"](8,"nb-option",4),l["\u0275\u0275text"](9,"All"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](10,h,2,2,"nb-option",5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"nb-card-body",6),l["\u0275\u0275elementStart"](12,"div",0),l["\u0275\u0275elementStart"](13,"div",7),l["\u0275\u0275elementStart"](14,"nb-form-field"),l["\u0275\u0275element"](15,"nb-icon",8),l["\u0275\u0275elementStart"](16,"input",9),l["\u0275\u0275listener"]("input",(function(e){return t.searchStudent(e.target.value)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](17,"br"),l["\u0275\u0275elementStart"](18,"div",0),l["\u0275\u0275elementStart"](19,"div",10),l["\u0275\u0275template"](20,v,4,2,"ng-container",11),l["\u0275\u0275template"](21,S,2,0,"ng-template",null,12,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275reference"](22);l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("selected",t.category),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.categories),l["\u0275\u0275advance"](10),l["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[o.y,o.A,o.nb,o.gb,c.m,o.x,o.L,o.N,o.jb,o.Q,c.n,c.l,o.v],styles:[".active[_ngcontent-%COMP%]{color:#00d68f}.inactive[_ngcontent-%COMP%]{color:#ff3d71}"]}),b)},{path:"page-not-found",loadChildren:function(){return i.e(0).then(i.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],I=((E=function e(){n(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[m.g.forChild(x)],m.g]}),E),C=((y=function e(){n(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[c.c,I,o.B,o.R,o.ob,o.M,o.w,o.P,o.Jb]]}),y)}}])}();
//# sourceMappingURL=141-es5.3fac8b1a94efdd5a153a.js.map