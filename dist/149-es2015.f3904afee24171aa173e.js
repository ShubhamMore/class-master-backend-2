(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{"O+B8":function(t,e,n){"use strict";n.r(e);var c=n("ofXK"),s=n("JmRu"),i=n("/ehT"),r=n("EQut"),a=n("fXoL"),o=n("aceb"),b=n("tyNb");function u(t,e){if(1&t&&(a.Wb(0,"nb-option",10),a.Cc(1),a.Vb()),2&t){const t=e.$implicit;a.mc("value",t._id),a.Eb(1),a.Dc(t.category)}}function d(t,e){if(1&t){const t=a.Xb();a.Wb(0,"tr"),a.Wb(1,"td"),a.Cc(2),a.Vb(),a.Wb(3,"td"),a.Cc(4),a.Vb(),a.Wb(5,"td"),a.Cc(6),a.Vb(),a.Wb(7,"td"),a.Wb(8,"div",17),a.Wb(9,"button",18),a.ec("click",(function(){a.uc(t);const n=e.$implicit;return a.gc(3).branchStudentCourses(n._id,n.student,n.category)})),a.Cc(10," Courses "),a.Vb(),a.Wb(11,"button",19),a.ec("click",(function(){a.uc(t);const n=e.$implicit;return a.gc(3).branchAddStudentCourses(n._id,n.student,n.category)})),a.Rb(12,"nb-icon",20),a.Vb(),a.Vb(),a.Vb(),a.Wb(13,"td"),a.Wb(14,"button",21),a.ec("click",(function(){a.uc(t);const n=e.$implicit;return a.gc(3).branchStudentCourses(n._id,n.student,n.category)})),a.Cc(15," Installments "),a.Vb(),a.Vb(),a.Wb(16,"td"),a.Wb(17,"button",22),a.ec("click",(function(){a.uc(t);const n=e.$implicit;return a.gc(3).editBranchStudent(n._id,n.student)})),a.Cc(18," Edit "),a.Vb(),a.Vb(),a.Wb(19,"td"),a.Wb(20,"button",23),a.ec("click",(function(){a.uc(t);const n=e.$implicit,c=e.index;return a.gc(3).changeBranchStudentStatus(n._id,!n.status,c)})),a.Cc(21),a.Vb(),a.Vb(),a.Vb()}if(2&t){const t=e.$implicit,n=e.index,c=a.gc(3);a.Eb(2),a.Dc(n+1),a.Eb(2),a.Dc(t.student),a.Eb(2),a.Dc(c.getCategory(t.category)),a.Eb(14),a.mc("status",t.status?"danger":"warning"),a.Eb(1),a.Ec(" ",t.status?"Deactivate":"Activate"," ")}}function h(t,e){if(1&t&&(a.Wb(0,"div",13),a.Wb(1,"table",14),a.Wb(2,"thead"),a.Wb(3,"tr"),a.Wb(4,"th"),a.Cc(5,"#"),a.Vb(),a.Wb(6,"th"),a.Cc(7,"Student"),a.Vb(),a.Wb(8,"th"),a.Cc(9,"Category"),a.Vb(),a.Wb(10,"th"),a.Cc(11,"Courses"),a.Vb(),a.Wb(12,"th"),a.Cc(13,"Installments"),a.Vb(),a.Wb(14,"th",15),a.Cc(15,"Action"),a.Vb(),a.Vb(),a.Vb(),a.Wb(16,"tbody"),a.Ac(17,d,22,5,"tr",16),a.Vb(),a.Vb(),a.Vb()),2&t){const t=a.gc(2);a.Eb(17),a.mc("ngForOf",t.branchStudents)}}function l(t,e){1&t&&(a.Wb(0,"p",24),a.Cc(1,"No Students Available"),a.Vb())}function g(t,e){if(1&t&&(a.Ub(0),a.Ac(1,h,18,1,"div",11),a.Ac(2,l,2,0,"ng-template",null,12,a.Bc),a.Tb()),2&t){const t=a.sc(3),e=a.gc();a.Eb(1),a.mc("ngIf",e.branchStudents.length>0)("ngIfElse",t)}}function S(t,e){1&t&&(a.Wb(0,"p",24),a.Cc(1,"Loading..."),a.Vb())}const p=[{path:"",component:(()=>{class t{constructor(t,e,n,c,s,i){this.branchService=t,this.studentService=e,this.toastrService=n,this.branchStudentService=c,this.router=s,this.route=i,this.route.queryParams.subscribe(t=>{this.ngOnInit()})}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.route.queryParams.subscribe(t=>{this.type=t.type}),"active"===this.type||"inactive"===this.type?(this.studentService.setStudentType(this.type),this.branchStudents=[],this.categories=[],this.category="",this.getCategories(),this.getStudents(this.category)):this.router.navigate(["../page-not-found"],{relativeTo:this.route})):this.router.navigate(["../"],{relativeTo:this.route})}getCategories(){this.branchService.getBranchData().subscribe(t=>{this.categories=t.categories}),this.categories||this.branchService.getBranch(this.branchId).subscribe(t=>{this.branchService.setBranchData(t),this.categories=t.categories},t=>{this.showToastr("top-right","danger",t),this.loading=!1})}getStudents(t){this.loading=!0,this.branchStudentService.getBranchStudents(this.branchId,t,this.type).subscribe(t=>{this.branchStudents=t,this.loading=!1},t=>{this.showToastr("top-right","danger",t),this.loading=!1})}editBranchStudent(t,e){this.studentService.setStudentId(e),this.branchStudentService.setBranchStudentId(t),this.router.navigate(["../edit"],{relativeTo:this.route,queryParams:{mode:"edit"}})}branchStudentCourses(t,e,n){this.studentService.setStudentId(e),this.branchService.setCategoryId(n),this.branchStudentService.setBranchStudentId(t),this.router.navigate(["../course"],{relativeTo:this.route})}branchAddStudentCourses(t,e,n){this.studentService.setStudentId(e),this.branchService.setCategoryId(n),this.branchStudentService.setBranchStudentId(t),this.router.navigate(["../course/add"],{relativeTo:this.route})}changeBranchStudentStatus(t,e,n){this.branchStudentService.changeBranchStudentStatus(t,e).subscribe(t=>{this.branchStudents.splice(n,1),this.loading=!1},t=>{this.loading=!1})}getCategory(t){const e=this.categories.find(e=>e._id===t);return e?e.category:"--"}showToastr(t,e,n){this.toastrService.show(e,n,{position:t,status:e})}}return t.\u0275fac=function(e){return new(e||t)(a.Qb(r.a),a.Qb(s.a),a.Qb(o.xb),a.Qb(i.a),a.Qb(b.c),a.Qb(b.a))},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-manage-student"]],decls:18,vars:7,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["id","select-category","name","category","fullWidth","","placeholder","Select Category",3,"selected","selectedChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"body-container"],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["loadingData",""],[3,"value"],["class","table-responsive",4,"ngIf","ngIfElse"],["noBranchStudents",""],[1,"table-responsive"],[1,"table"],["colspan","2"],[4,"ngFor","ngForOf"],[1,"btn-group"],["nbButton","","status","success","nbPrefix","","size","small",3,"click"],["nbButton","","nbTooltip","Add Course","nbSuffix","","status","success","size","small",1,"",3,"click"],["icon","plus-outline"],["nbButton","","status","info","size","small",3,"click"],["nbButton","","status","basic","size","small",3,"click"],["nbButton","","size","small",1,"",3,"status","click"],[1,"text-center"]],template:function(t,e){if(1&t&&(a.Wb(0,"nb-card"),a.Wb(1,"nb-card-header"),a.Wb(2,"div",0),a.Wb(3,"div",1),a.Wb(4,"h3"),a.Cc(5),a.hc(6,"uppercase"),a.Vb(),a.Vb(),a.Wb(7,"div",2),a.Wb(8,"nb-select",3),a.ec("selectedChange",(function(t){return e.getStudents(t)})),a.Wb(9,"nb-option",4),a.Cc(10,"All"),a.Vb(),a.Ac(11,u,2,2,"nb-option",5),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(12,"nb-card-body",6),a.Wb(13,"div",0),a.Wb(14,"div",7),a.Ac(15,g,4,2,"ng-container",8),a.Ac(16,S,2,0,"ng-template",null,9,a.Bc),a.Vb(),a.Vb(),a.Vb(),a.Vb()),2&t){const t=a.sc(17);a.Eb(5),a.Ec("",a.ic(6,5,e.type)," Students"),a.Eb(3),a.mc("selected",e.category),a.Eb(3),a.mc("ngForOf",e.categories),a.Eb(4),a.mc("ngIf",!e.loading)("ngIfElse",t)}},directives:[o.x,o.z,o.jb,o.eb,c.m,o.w,c.n,o.u,o.hb,o.zb,o.sb,o.L],pipes:[c.v],styles:[""]}),t})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(t=>t.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let v=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(e){return new(e||t)},imports:[[b.g.forChild(p)],b.g]}),t})();n.d(e,"ManageStudentModule",(function(){return f}));let f=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(e){return new(e||t)},imports:[[c.c,v,o.A,o.kb,o.K,o.v,o.N,o.Ab]]}),t})()}}]);