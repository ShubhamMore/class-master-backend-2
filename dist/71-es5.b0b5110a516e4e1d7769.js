function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"7WzG":function(e,t,n){"use strict";n.r(t);var r=n("aceb"),a=n("3Pt+"),l=n("ofXK"),o=n("lst6"),i=n("IAlr"),m=n("ZatZ"),s=n("zZNt"),c=n("EQut"),d=n("fXoL"),u=n("tyNb");function p(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p",20),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](2).$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" Enter valid Marks of ",n.value.name," ")}}function f(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",20),d["\u0275\u0275text"](1," Minimum marks should be 0 "),d["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p",20),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275nextContext"](4);d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" Maximum marks should be ",n.exam.outOfMarks," ")}}function h(e,t){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275template"](1,p,2,1,"p",19),d["\u0275\u0275template"](2,f,2,0,"p",19),d["\u0275\u0275template"](3,v,2,1,"p",19),d["\u0275\u0275elementContainerEnd"]()),2&e){var n=d["\u0275\u0275nextContext"]().$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",null==n.get("marks").errors?null:n.get("marks").errors.required),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",null==n.get("marks").errors?null:n.get("marks").errors.min),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",null==n.get("marks").errors?null:n.get("marks").errors.max)}}function S(e,t){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275elementStart"](1,"tr",15),d["\u0275\u0275elementStart"](2,"td"),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"td"),d["\u0275\u0275text"](5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"td"),d["\u0275\u0275elementStart"](7,"div",16),d["\u0275\u0275element"](8,"input",17),d["\u0275\u0275template"](9,h,4,3,"ng-container",18),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit,r=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formGroup",n),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](n.value.name),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](n.value.rollNumber),d["\u0275\u0275advance"](3),d["\u0275\u0275propertyInterpolate1"]("placeholder","Marks of ",n.value.name,""),d["\u0275\u0275property"]("id",n.student)("name",n.student)("max",r.exam.outOfMarks)("status",n.get("marks").touched?n.get("marks").invalid?"danger":"success":"basic"),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",n.get("marks").invalid&&n.get("marks").touched)}}function x(e,t){if(1&e){var n=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275elementStart"](1,"form",8),d["\u0275\u0275listener"]("submit",(function(){return d["\u0275\u0275restoreView"](n),d["\u0275\u0275nextContext"]().saveMarks()})),d["\u0275\u0275elementStart"](2,"div",0),d["\u0275\u0275elementStart"](3,"div",9),d["\u0275\u0275elementStart"](4,"div",10),d["\u0275\u0275elementStart"](5,"table",11),d["\u0275\u0275elementStart"](6,"thead"),d["\u0275\u0275elementStart"](7,"tr"),d["\u0275\u0275elementStart"](8,"th"),d["\u0275\u0275text"](9,"Student Name"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"th"),d["\u0275\u0275text"](11,"Roll Number"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"th"),d["\u0275\u0275text"](13,"Marks"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"tbody"),d["\u0275\u0275template"](15,S,10,9,"ng-container",12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](16,"div",9),d["\u0275\u0275element"](17,"hr"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"div",13),d["\u0275\u0275elementStart"](19,"button",14),d["\u0275\u0275text"](20," Save "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementContainerEnd"]()}if(2&e){var r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formGroup",r.examMarksForm),d["\u0275\u0275advance"](14),d["\u0275\u0275property"]("ngForOf",r.examMarksForm.get("marks").controls)}}function g(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",21),d["\u0275\u0275text"](1,"No Students Found"),d["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",22),d["\u0275\u0275text"](1," No Students Found "),d["\u0275\u0275elementEnd"]())}var E,k,y=[{path:"",component:(E=function(){function e(t,n,r,a,l,o,i,m){_classCallCheck(this,e),this.branchService=t,this.toastrService=n,this.courseService=r,this.batchService=a,this.router=l,this.examService=o,this.dateService=i,this.route=m}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;if(this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId){if(this.examService.getExamData().subscribe((function(t){e.exam=t})),!this.exam)return this.showToastr("top-right","danger","Exam Not Found"),void this.back();this.examMarksForm=new a.f({marks:new a.b([])}),this.branchService.getCategoryData().subscribe((function(t){e.category=t})),this.courseService.getCourseData().subscribe((function(t){e.course=t})),this.batchService.getBatchData().subscribe((function(t){e.batch=t})),this.getStudents()}else this.back()}},{key:"getStudents",value:function(){var e=this;this.loading=!0,this.examService.getStudentsForExam(this.exam._id).subscribe((function(t){t.map((function(e){return e.marks=e.marks?e.marks:0})),e.getStudentsScore().controls=[],t.forEach((function(t){e.addStudentScore(t)})),e.loading=!1}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}},{key:"getStudentsScore",value:function(){return this.examMarksForm.get("marks")}},{key:"addStudentScore",value:function(e){this.getStudentsScore().push(this.newStudentScore(e))}},{key:"newStudentScore",value:function(e){return new a.f({name:new a.d(e.name,{validators:[a.u.required]}),student:new a.d(e.student,{validators:[a.u.required]}),rollNumber:new a.d(e.rollNumber,{validators:[a.u.required]}),marks:new a.d(e.marks?e.marks:0,{validators:[a.u.required,a.u.min(0),a.u.max(this.exam.outOfMarks)]})})}},{key:"isNumber",value:function(e){return Number.isInteger(e)}},{key:"saveMarks",value:function(){var e=this;this.examMarksForm.markAllAsTouched(),this.examMarksForm.invalid?this.showToastr("top-right","danger","Enter Valid Marks for All Students"):this.examService.saveStudentsMarks(this.exam._id,this.examMarksForm.value.marks).subscribe((function(t){e.showToastr("top-right","success","Exam Marks Updated Successfully"),e.back()}),(function(t){e.showToastr("top-right","danger",t)}))}},{key:"getSubject",value:function(e){var t=this.course.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"back",value:function(){this.router.navigate(["../manage"],{relativeTo:this.route})}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}]),e}(),E.\u0275fac=function(e){return new(e||E)(d["\u0275\u0275directiveInject"](c.a),d["\u0275\u0275directiveInject"](r.Db),d["\u0275\u0275directiveInject"](i.a),d["\u0275\u0275directiveInject"](o.a),d["\u0275\u0275directiveInject"](u.c),d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](m.a),d["\u0275\u0275directiveInject"](u.a))},E.\u0275cmp=d["\u0275\u0275defineComponent"]({type:E,selectors:[["ngx-add-test-score"]],decls:59,vars:10,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","status","warning","size","tiny",1,"float-right",3,"click"],[1,"col-md-6","col-12"],[4,"ngIf","ngIfElse"],["noStudents",""],["noStudentMarks",""],[1,"",3,"formGroup","submit"],[1,"col-12"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"col-12","text-right"],["type","submit","nbButton","","status","primary","size","small"],[3,"formGroup"],[1,"form-control-group"],["type","number","nbInput","","fullWidth","","size","small","formControlName","marks","min","0",1,"input-marks",3,"id","name","placeholder","max","status"],[4,"ngIf"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[1,"text-center"],[1,"text-center","mt-5","mb-5"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"nb-card"),d["\u0275\u0275elementStart"](1,"nb-card-header"),d["\u0275\u0275elementStart"](2,"div",0),d["\u0275\u0275elementStart"](3,"div",1),d["\u0275\u0275elementStart"](4,"h3"),d["\u0275\u0275text"](5,"Exam Score"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"div",2),d["\u0275\u0275elementStart"](7,"button",3),d["\u0275\u0275listener"]("click",(function(){return t.back()})),d["\u0275\u0275text"](8," Back "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"nb-card-body"),d["\u0275\u0275elementStart"](10,"nb-card"),d["\u0275\u0275elementStart"](11,"nb-card-header"),d["\u0275\u0275elementStart"](12,"div",0),d["\u0275\u0275elementStart"](13,"div",4),d["\u0275\u0275elementStart"](14,"span"),d["\u0275\u0275elementStart"](15,"strong"),d["\u0275\u0275text"](16,"Exam Title: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](17),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](18,"br"),d["\u0275\u0275elementStart"](19,"span"),d["\u0275\u0275elementStart"](20,"strong"),d["\u0275\u0275text"](21,"Date: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](22),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](23,"br"),d["\u0275\u0275elementStart"](24,"span"),d["\u0275\u0275elementStart"](25,"strong"),d["\u0275\u0275text"](26,"Time: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](27),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](28,"br"),d["\u0275\u0275elementStart"](29,"span"),d["\u0275\u0275elementStart"](30,"strong"),d["\u0275\u0275text"](31,"Duration: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](32),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](33,"div",4),d["\u0275\u0275elementStart"](34,"span"),d["\u0275\u0275elementStart"](35,"strong"),d["\u0275\u0275text"](36,"Category: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](37),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](38,"br"),d["\u0275\u0275elementStart"](39,"span"),d["\u0275\u0275elementStart"](40,"strong"),d["\u0275\u0275text"](41,"Course: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](42),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](43,"br"),d["\u0275\u0275elementStart"](44,"span"),d["\u0275\u0275elementStart"](45,"strong"),d["\u0275\u0275text"](46,"Batch: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](47),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](48,"br"),d["\u0275\u0275elementStart"](49,"span"),d["\u0275\u0275elementStart"](50,"strong"),d["\u0275\u0275text"](51,"Subject: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](52),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](53,"nb-card-body"),d["\u0275\u0275template"](54,x,21,2,"ng-container",5),d["\u0275\u0275template"](55,g,2,0,"ng-template",null,6,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](57,b,2,0,"ng-template",null,7,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275reference"](56);d["\u0275\u0275advance"](17),d["\u0275\u0275textInterpolate"](t.exam.examTitle),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](t.dateService.formatDate(t.exam.date)),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](t.dateService.formatTime(t.exam.time)),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate1"]("",t.exam.duration," Min"),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](t.category.category),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](t.course.basicDetails.courseName),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](t.batch.basicDetails.batchName),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](t.getSubject(t.exam.subject)),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",t.examMarksForm.get("marks").controls.length>0)("ngIfElse",n)}},directives:[r.x,r.z,r.u,r.w,l.n,a.v,a.n,a.g,l.m,a.q,r.P,a.a,a.m,a.e],styles:[""]}),E)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],I=((k=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:k}),k.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||k)},imports:[[u.g.forChild(y)],u.g]}),k);n.d(t,"AddTestScoreModule",(function(){return C}));var w,C=((w=function e(){_classCallCheck(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[l.c,I,r.A,r.Q,r.v,a.s]]}),w)}}]);