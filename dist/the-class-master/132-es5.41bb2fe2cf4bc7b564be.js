!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{dldG:function(t,a,i){"use strict";i.r(a),i.d(a,"ManageStudentModule",(function(){return C}));var o=i("ofXK"),c=i("fXoL"),s=i("EQut"),l=i("JmRu"),d=i("aceb"),u=i("/ehT"),h=i("tyNb");function m(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-option",13),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;c["\u0275\u0275property"]("value",n._id),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](n.category)}}function f(e,t){if(1&e){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tr"),c["\u0275\u0275elementStart"](1,"td"),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"td"),c["\u0275\u0275text"](4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"td"),c["\u0275\u0275text"](6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"td"),c["\u0275\u0275elementStart"](8,"div",20),c["\u0275\u0275elementStart"](9,"button",21),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.$implicit;return c["\u0275\u0275nextContext"](3).branchStudentCourses(e._id,e.student,e.category)})),c["\u0275\u0275text"](10," Courses "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"button",22),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.$implicit;return c["\u0275\u0275nextContext"](3).branchAddStudentCourses(e._id,e.student,e.category)})),c["\u0275\u0275element"](12,"nb-icon",23),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"td"),c["\u0275\u0275elementStart"](14,"button",24),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.$implicit;return c["\u0275\u0275nextContext"](3).editBranchStudent(e._id,e.student)})),c["\u0275\u0275text"](15," Edit "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"td"),c["\u0275\u0275elementStart"](17,"button",25),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.$implicit,r=t.index;return c["\u0275\u0275nextContext"](3).changeBranchStudentStatus(e._id,!e.status,r)})),c["\u0275\u0275text"](18),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit,a=t.index,i=c["\u0275\u0275nextContext"](3);c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](a+1),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](r.name),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](i.getCategory(r.category)),c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("status",r.status?"danger":"warning"),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",r.status?"Deactivate":"Activate"," ")}}function S(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",16),c["\u0275\u0275elementStart"](1,"table",17),c["\u0275\u0275elementStart"](2,"thead"),c["\u0275\u0275elementStart"](3,"tr"),c["\u0275\u0275elementStart"](4,"th"),c["\u0275\u0275text"](5,"#"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"th"),c["\u0275\u0275text"](7,"Student"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"th"),c["\u0275\u0275text"](9,"Category"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"th"),c["\u0275\u0275text"](11,"Courses"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"th",18),c["\u0275\u0275text"](13,"Action"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"tbody"),c["\u0275\u0275template"](15,f,19,5,"tr",19),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](15),c["\u0275\u0275property"]("ngForOf",n.filteredBranchStudents)}}function p(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",26),c["\u0275\u0275text"](1,"No Students Available"),c["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,S,16,1,"div",14),c["\u0275\u0275template"](2,p,2,0,"ng-template",null,15,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementContainerEnd"]()),2&e){var n=c["\u0275\u0275reference"](3),r=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf",r.filteredBranchStudents.length>0)("ngIfElse",n)}}function g(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",26),c["\u0275\u0275text"](1,"Loading..."),c["\u0275\u0275elementEnd"]())}var b,y,E,x=[{path:"",component:(b=function(){function t(e,r,a,i,o,c){var s=this;n(this,t),this.branchService=e,this.studentService=r,this.toastrService=a,this.branchStudentService=i,this.router=o,this.route=c,this.route.queryParams.subscribe((function(e){s.ngOnInit()}))}var a,i,o;return a=t,(i=[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.route.queryParams.subscribe((function(t){e.type=t.type})),"active"===this.type||"inactive"===this.type?(this.studentService.setStudentType(this.type),this.branchStudents=[],this.filteredBranchStudents=[],this.categories=[],this.category="",this.getCategories(),this.getStudents(this.category)):this.router.navigate(["../manage"],{relativeTo:this.route,queryParams:{type:"active"}})):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getCategories",value:function(){var e=this;this.branchService.getBranchData().subscribe((function(t){t&&(e.categories=t.categories)})),this.categories||this.branchService.getBranch(this.branchId).subscribe((function(t){e.branchService.setBranchData(t),e.categories=t.categories}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"getStudents",value:function(e){var t=this;this.loading=!0,this.branchStudentService.getBranchStudentNameIds(this.branchId,e,this.type).subscribe((function(e){t.branchStudents=e,t.filteredBranchStudents=e,t.loading=!1}),(function(e){t.showToastr("top-right","danger",e),t.loading=!1}))}},{key:"searchStudent",value:function(t){t=t.trim().toLowerCase(),this.filteredBranchStudents=t?this.branchStudents.filter((function(e){return e.name.toLowerCase().includes(t)})):e(this.branchStudents)}},{key:"editBranchStudent",value:function(e,t){this.studentService.setStudentId(t),this.branchStudentService.setBranchStudentId(e),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}},{key:"branchStudentCourses",value:function(e,t,n){this.studentService.setStudentId(t),this.branchService.setCategoryId(n),this.branchStudentService.setBranchStudentId(e),this.router.navigate(["../course"],{relativeTo:this.route})}},{key:"branchAddStudentCourses",value:function(e,t,n){this.studentService.setStudentId(t),this.branchService.setCategoryId(n),this.branchStudentService.setBranchStudentId(e),this.router.navigate(["../course/add"],{relativeTo:this.route})}},{key:"changeBranchStudentStatus",value:function(e,t,n){var r=this;this.branchStudentService.changeBranchStudentStatus(e,t).subscribe((function(e){r.branchStudents.splice(n,1),r.loading=!1}),(function(e){r.loading=!1}))}},{key:"getCategory",value:function(e){var t=this.categories.find((function(t){return t._id===e}));return t?t.category:"--"}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}])&&r(a.prototype,i),o&&r(a,o),t}(),b.\u0275fac=function(e){return new(e||b)(c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](d.Gb),c["\u0275\u0275directiveInject"](u.a),c["\u0275\u0275directiveInject"](h.c),c["\u0275\u0275directiveInject"](h.a))},b.\u0275cmp=c["\u0275\u0275defineComponent"]({type:b,selectors:[["ngx-manage-student"]],decls:24,vars:7,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"body-container"],[1,"col-md-6","col-sm-8","col-12"],["nbPrefix","","icon","search-outline","pack","eva"],["type","text","nbInput","","shape","round","placeholder","Search","fullWidth","",3,"input"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBranchStudents",""],[1,"table-responsive"],[1,"table"],["colspan","2"],[4,"ngFor","ngForOf"],[1,"btn-group"],["nbButton","","size","small","status","success","nbPrefix","",3,"click"],["nbButton","","size","small","nbTooltip","Add Course","nbSuffix","","status","success",1,"",3,"click"],["icon","plus-outline"],["nbButton","","size","small","status","basic",3,"click"],["nbButton","","size","small",1,"",3,"status","click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"div",0),c["\u0275\u0275elementStart"](3,"div",1),c["\u0275\u0275elementStart"](4,"h3"),c["\u0275\u0275text"](5),c["\u0275\u0275pipe"](6,"uppercase"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"div",2),c["\u0275\u0275elementStart"](8,"nb-select",3),c["\u0275\u0275listener"]("selectedChange",(function(e){return t.getStudents(e)})),c["\u0275\u0275elementStart"](9,"nb-option",4),c["\u0275\u0275text"](10,"All"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](11,m,2,2,"nb-option",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](12,"nb-card-body",6),c["\u0275\u0275elementStart"](13,"div",0),c["\u0275\u0275elementStart"](14,"div",7),c["\u0275\u0275elementStart"](15,"nb-form-field"),c["\u0275\u0275element"](16,"nb-icon",8),c["\u0275\u0275elementStart"](17,"input",9),c["\u0275\u0275listener"]("input",(function(e){return t.searchStudent(e.target.value)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](18,"br"),c["\u0275\u0275elementStart"](19,"div",0),c["\u0275\u0275elementStart"](20,"div",10),c["\u0275\u0275template"](21,v,4,2,"ng-container",11),c["\u0275\u0275template"](22,g,2,0,"ng-template",null,12,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275reference"](23);c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate1"]("",c["\u0275\u0275pipeBind1"](6,5,t.type)," Students"),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("selected",t.category),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngForOf",t.categories),c["\u0275\u0275advance"](10),c["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[d.y,d.A,d.nb,d.gb,o.m,d.x,d.L,d.N,d.jb,d.Q,o.n,d.v,d.Ib,d.yb],pipes:[o.w],styles:[""]}),b)},{path:"page-not-found",loadChildren:function(){return i.e(0).then(i.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],I=((E=function e(){n(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:E}),E.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||E)},imports:[[h.g.forChild(x)],h.g]}),E),C=((y=function e(){n(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[o.c,I,d.B,d.R,d.ob,d.M,d.w,d.P,d.Jb]]}),y)}}])}();
//# sourceMappingURL=132-es5.41bb2fe2cf4bc7b564be.js.map