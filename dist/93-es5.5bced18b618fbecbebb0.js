function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{dldG:function(t,e,n){"use strict";n.r(e);var c=n("ofXK"),i=n("JmRu"),r=n("/ehT"),a=n("EQut"),s=n("fXoL"),o=n("aceb"),u=n("tyNb");function b(t,e){if(1&t&&(s.Wb(0,"nb-option",10),s.Cc(1),s.Vb()),2&t){var n=e.$implicit;s.mc("value",n._id),s.Eb(1),s.Dc(n.category)}}function d(t,e){if(1&t){var n=s.Xb();s.Wb(0,"tr"),s.Wb(1,"td"),s.Cc(2),s.Vb(),s.Wb(3,"td"),s.Cc(4),s.Vb(),s.Wb(5,"td"),s.Cc(6),s.Vb(),s.Wb(7,"td"),s.Wb(8,"div",17),s.Wb(9,"button",18),s.ec("click",(function(){s.uc(n);var t=e.$implicit;return s.gc(3).branchStudentCourses(t._id,t.student,t.category)})),s.Cc(10," Courses "),s.Vb(),s.Wb(11,"button",19),s.ec("click",(function(){s.uc(n);var t=e.$implicit;return s.gc(3).branchAddStudentCourses(t._id,t.student,t.category)})),s.Rb(12,"nb-icon",20),s.Vb(),s.Vb(),s.Vb(),s.Wb(13,"td"),s.Wb(14,"button",21),s.ec("click",(function(){s.uc(n);var t=e.$implicit;return s.gc(3).branchStudentCourses(t._id,t.student,t.category)})),s.Cc(15," Installments "),s.Vb(),s.Vb(),s.Wb(16,"td"),s.Wb(17,"button",22),s.ec("click",(function(){s.uc(n);var t=e.$implicit;return s.gc(3).editBranchStudent(t._id,t.student)})),s.Cc(18," Edit "),s.Vb(),s.Vb(),s.Wb(19,"td"),s.Wb(20,"button",23),s.ec("click",(function(){s.uc(n);var t=e.$implicit,c=e.index;return s.gc(3).changeBranchStudentStatus(t._id,!t.status,c)})),s.Cc(21),s.Vb(),s.Vb(),s.Vb()}if(2&t){var c=e.$implicit,i=e.index,r=s.gc(3);s.Eb(2),s.Dc(i+1),s.Eb(2),s.Dc(c.student),s.Eb(2),s.Dc(r.getCategory(c.category)),s.Eb(14),s.mc("status",c.status?"danger":"warning"),s.Eb(1),s.Ec(" ",c.status?"Deactivate":"Activate"," ")}}function h(t,e){if(1&t&&(s.Wb(0,"div",13),s.Wb(1,"table",14),s.Wb(2,"thead"),s.Wb(3,"tr"),s.Wb(4,"th"),s.Cc(5,"#"),s.Vb(),s.Wb(6,"th"),s.Cc(7,"Student"),s.Vb(),s.Wb(8,"th"),s.Cc(9,"Category"),s.Vb(),s.Wb(10,"th"),s.Cc(11,"Courses"),s.Vb(),s.Wb(12,"th"),s.Cc(13,"Installments"),s.Vb(),s.Wb(14,"th",15),s.Cc(15,"Action"),s.Vb(),s.Vb(),s.Vb(),s.Wb(16,"tbody"),s.Ac(17,d,22,5,"tr",16),s.Vb(),s.Vb(),s.Vb()),2&t){var n=s.gc(2);s.Eb(17),s.mc("ngForOf",n.branchStudents)}}function l(t,e){1&t&&(s.Wb(0,"p",24),s.Cc(1,"No Students Available"),s.Vb())}function g(t,e){if(1&t&&(s.Ub(0),s.Ac(1,h,18,1,"div",11),s.Ac(2,l,2,0,"ng-template",null,12,s.Bc),s.Tb()),2&t){var n=s.sc(3),c=s.gc();s.Eb(1),s.mc("ngIf",c.branchStudents.length>0)("ngIfElse",n)}}function f(t,e){1&t&&(s.Wb(0,"p",24),s.Cc(1,"Loading..."),s.Vb())}var v,p,S=[{path:"",component:(v=function(){function t(e,n,c,i,r,a){var s=this;_classCallCheck(this,t),this.branchService=e,this.studentService=n,this.toastrService=c,this.branchStudentService=i,this.router=r,this.route=a,this.route.queryParams.subscribe((function(t){s.ngOnInit()}))}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.route.queryParams.subscribe((function(e){t.type=e.type})),"active"===this.type||"inactive"===this.type?(this.studentService.setStudentType(this.type),this.branchStudents=[],this.categories=[],this.category="",this.getCategories(),this.getStudents(this.category)):this.router.navigate(["../page-not-found"],{relativeTo:this.route})):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"getCategories",value:function(){var t=this;this.branchService.getBranchData().subscribe((function(e){t.categories=e.categories})),this.categories||this.branchService.getBranch(this.branchId).subscribe((function(e){t.branchService.setBranchData(e),t.categories=e.categories}),(function(e){t.showToastr("top-right","danger",e),t.loading=!1}))}},{key:"getStudents",value:function(t){var e=this;this.loading=!0,this.branchStudentService.getBranchStudents(this.branchId,t,this.type).subscribe((function(t){e.branchStudents=t,e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"editBranchStudent",value:function(t,e){this.studentService.setStudentId(e),this.branchStudentService.setBranchStudentId(t),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}},{key:"branchStudentCourses",value:function(t,e,n){this.studentService.setStudentId(e),this.branchService.setCategoryId(n),this.branchStudentService.setBranchStudentId(t),this.router.navigate(["../course"],{relativeTo:this.route})}},{key:"branchAddStudentCourses",value:function(t,e,n){this.studentService.setStudentId(e),this.branchService.setCategoryId(n),this.branchStudentService.setBranchStudentId(t),this.router.navigate(["../course/add"],{relativeTo:this.route})}},{key:"changeBranchStudentStatus",value:function(t,e,n){var c=this;this.branchStudentService.changeBranchStudentStatus(t,e).subscribe((function(t){c.branchStudents.splice(n,1),c.loading=!1}),(function(t){c.loading=!1}))}},{key:"getCategory",value:function(t){var e=this.categories.find((function(e){return e._id===t}));return e?e.category:"--"}},{key:"showToastr",value:function(t,e,n){this.toastrService.show(e,n,{position:t,status:e})}}]),t}(),v.\u0275fac=function(t){return new(t||v)(s.Qb(a.a),s.Qb(i.a),s.Qb(o.xb),s.Qb(r.a),s.Qb(u.c),s.Qb(u.a))},v.\u0275cmp=s.Kb({type:v,selectors:[["ngx-manage-student"]],decls:18,vars:7,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBranchStudents",""],[1,"table-responsive"],[1,"table"],["colspan","2"],[4,"ngFor","ngForOf"],[1,"btn-group"],["nbButton","","status","success","nbPrefix","","size","small",3,"click"],["nbButton","","nbTooltip","Add Course","nbSuffix","","status","success","size","small",1,"",3,"click"],["icon","plus-outline"],["nbButton","","status","info","size","small",3,"click"],["nbButton","","status","basic","size","small",3,"click"],["nbButton","","size","small",1,"",3,"status","click"],[1,"text-center"]],template:function(t,e){if(1&t&&(s.Wb(0,"nb-card"),s.Wb(1,"nb-card-header"),s.Wb(2,"div",0),s.Wb(3,"div",1),s.Wb(4,"h3"),s.Cc(5),s.hc(6,"uppercase"),s.Vb(),s.Vb(),s.Wb(7,"div",2),s.Wb(8,"nb-select",3),s.ec("selectedChange",(function(t){return e.getStudents(t)})),s.Wb(9,"nb-option",4),s.Cc(10,"All"),s.Vb(),s.Ac(11,b,2,2,"nb-option",5),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(12,"nb-card-body",6),s.Wb(13,"div",0),s.Wb(14,"div",7),s.Ac(15,g,4,2,"ng-container",8),s.Ac(16,f,2,0,"ng-template",null,9,s.Bc),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&t){var n=s.sc(17);s.Eb(5),s.Ec("",s.ic(6,5,e.type)," Students"),s.Eb(3),s.mc("selected",e.category),s.Eb(3),s.mc("ngForOf",e.categories),s.Eb(4),s.mc("ngIf",!e.loading)("ngIfElse",n)}},directives:[o.x,o.z,o.jb,o.eb,c.m,o.w,c.n,o.u,o.hb,o.zb,o.sb,o.L],pipes:[c.v],styles:[""]}),v)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(t){return t.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],y=((p=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ob({type:p}),p.\u0275inj=s.Nb({factory:function(t){return new(t||p)},imports:[[u.g.forChild(S)],u.g]}),p);n.d(e,"ManageStudentModule",(function(){return m}));var C,m=((C=function t(){_classCallCheck(this,t)}).\u0275mod=s.Ob({type:C}),C.\u0275inj=s.Nb({factory:function(t){return new(t||C)},imports:[[c.c,y,o.A,o.kb,o.K,o.v,o.N,o.Ab]]}),C)}}]);