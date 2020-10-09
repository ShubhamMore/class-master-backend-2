function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{DbrI:function(e,t,a){"use strict";a.r(t);var r=a("aceb"),i=a("3Pt+"),n=a("ofXK"),o=a("zZNt"),s=a("lst6"),b=a("IAlr"),u=(a("R6I3"),a("EQut")),c=a("ZatZ"),m=a("fXoL"),l=a("tyNb"),d=["stepper"];function g(e,t){1&e&&(m.Wb(0,"p",40),m.Cc(1," Exam title is required! "),m.Vb())}function f(e,t){if(1&e&&(m.Ub(0),m.Ac(1,g,2,0,"p",39),m.Tb()),2&e){var a=m.gc();m.Eb(1),m.mc("ngIf",null==a.examForm.get("examTitle").errors?null:a.examForm.get("examTitle").errors.required)}}function h(e,t){if(1&e&&(m.Wb(0,"nb-option",41),m.Cc(1),m.Vb()),2&e){var a=t.$implicit;m.mc("value",a._id),m.Eb(1),m.Dc(a.subject)}}function p(e,t){1&e&&(m.Wb(0,"p",40),m.Cc(1," Subject is required! "),m.Vb())}function x(e,t){if(1&e&&(m.Ub(0),m.Ac(1,p,2,0,"p",39),m.Tb()),2&e){var a=m.gc();m.Eb(1),m.mc("ngIf",null==a.examForm.get("subject").errors?null:a.examForm.get("subject").errors.required)}}function v(e,t){1&e&&(m.Wb(0,"p",40),m.Cc(1," Out of Marks is required! "),m.Vb())}function W(e,t){1&e&&(m.Wb(0,"p",40),m.Cc(1," Out of Marks should be greater than 0 "),m.Vb())}function V(e,t){if(1&e&&(m.Ub(0),m.Ac(1,v,2,0,"p",39),m.Ac(2,W,2,0,"p",39),m.Tb()),2&e){var a=m.gc();m.Eb(1),m.mc("ngIf",null==a.examForm.get("outOfMarks").errors?null:a.examForm.get("outOfMarks").errors.required),m.Eb(1),m.mc("ngIf",null==a.examForm.get("outOfMarks").errors?null:a.examForm.get("outOfMarks").errors.min)}}function k(e,t){1&e&&(m.Wb(0,"p",40),m.Cc(1," Passing Marks is required! "),m.Vb())}function F(e,t){1&e&&(m.Wb(0,"p",40),m.Cc(1," Passing Marks should be greater than 0 "),m.Vb())}function E(e,t){if(1&e&&(m.Ub(0),m.Ac(1,k,2,0,"p",39),m.Ac(2,F,2,0,"p",39),m.Tb()),2&e){var a=m.gc();m.Eb(1),m.mc("ngIf",null==a.examForm.get("passingMarks").errors?null:a.examForm.get("passingMarks").errors.required),m.Eb(1),m.mc("ngIf",null==a.examForm.get("passingMarks").errors?null:a.examForm.get("passingMarks").errors.min)}}function C(e,t){1&e&&(m.Wb(0,"p",40),m.Cc(1," Date is required! "),m.Vb())}function M(e,t){if(1&e&&(m.Ub(0),m.Ac(1,C,2,0,"p",39),m.Tb()),2&e){var a=m.gc();m.Eb(1),m.mc("ngIf",null==a.examForm.get("date").errors?null:a.examForm.get("date").errors.required)}}function T(e,t){1&e&&(m.Wb(0,"p",40),m.Cc(1," Time is required! "),m.Vb())}function I(e,t){if(1&e&&(m.Ub(0),m.Ac(1,T,2,0,"p",39),m.Tb()),2&e){var a=m.gc();m.Eb(1),m.mc("ngIf",null==a.examForm.get("time").errors?null:a.examForm.get("time").errors.required)}}function S(e,t){1&e&&(m.Wb(0,"p",40),m.Cc(1," Duration is required! "),m.Vb())}function y(e,t){1&e&&(m.Wb(0,"p",40),m.Cc(1," Duration should be greater than 0 "),m.Vb())}function w(e,t){if(1&e&&(m.Ub(0),m.Ac(1,S,2,0,"p",39),m.Ac(2,y,2,0,"p",39),m.Tb()),2&e){var a=m.gc();m.Eb(1),m.mc("ngIf",null==a.examForm.get("duration").errors?null:a.examForm.get("duration").errors.required),m.Eb(1),m.mc("ngIf",null==a.examForm.get("duration").errors?null:a.examForm.get("duration").errors.min)}}var j,A,D=[{path:"",component:(j=function(){function e(t,a,r,i,n,o,s,b){_classCallCheck(this,e),this.branchService=t,this.courseService=a,this.dateService=r,this.batchService=i,this.examService=n,this.toastrService=o,this.router=s,this.route=b}return _createClass(e,[{key:"ngOnInit",value:function(){var e,t=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.route.queryParams.subscribe((function(t){e=t.mode})),this.examId=this.examService.getExamId(),e&&"edit"!==e?this.showToastr("top-right","danger","Invalid Route"):!e||this.examId?(this.branchService.getCategoryData().subscribe((function(e){t.category=e})),this.courseService.getCourseData().subscribe((function(e){t.course=e})),this.batchService.getBatchData().subscribe((function(e){t.batch=e})),this.subjects=[],this.batch.subjects.forEach((function(e){var a=t.course.subjects.find((function(t){return t._id===e.subject}));t.subjects.push(a)})),this.examForm=new i.f({examTitle:new i.d(null,{validators:[i.u.required]}),subject:new i.d(null,{validators:[i.u.required]}),outOfMarks:new i.d(null,{validators:[i.u.required,i.u.min(0)]}),passingMarks:new i.d(null,{validators:[i.u.required,i.u.min(0)]}),date:new i.d(this.dateService.getDateString(),{validators:[i.u.required]}),time:new i.d(null,{validators:[i.u.required]}),duration:new i.d(null,{validators:[i.u.required,i.u.min(0)]})}),e&&this.examId?this.examService.getExam(this.examId).subscribe((function(e){t.exam=e,t.examForm.patchValue({examTitle:t.exam.examTitle,subject:t.exam.subject,outOfMarks:t.exam.outOfMarks,passingMarks:t.exam.passingMarks,date:t.exam.date,time:t.exam.time,duration:t.exam.duration}),t.loading=!1}),(function(e){t.showToastr("top-right","danger",e),t.back()})):this.loading=!1):this.showToastr("top-right","danger","Exam Not Found")):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"previousStep",value:function(){this.stepper.previous()}},{key:"submitExamForm",value:function(){this.examForm.markAllAsTouched(),this.examForm.invalid?this.showToastr("top-right","danger","All Exam Fields are Required"):this.stepper.next()}},{key:"saveExam",value:function(){var e=this;if(this.examForm.markAllAsTouched(),this.examForm.invalid)this.showToastr("top-right","danger","All Exam Fields are Required");else{this.loading=!0;var t=this.examForm.value;t.branch=this.branchId,t.category=this.category._id,t.course=this.course._id,t.batch=this.batch._id,this.exam?(t._id=this.exam._id,t.marks=this.exam.marks,this.examService.editExam(t).subscribe((function(t){e.showToastr("top-right","success","New Exam Updated Successfully!"),e.back()}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))):this.examService.saveExam(t).subscribe((function(t){e.showToastr("top-right","success","New Exam Added Successfully!"),e.back()}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}}},{key:"getSubject",value:function(e){var t=this.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"showToastr",value:function(e,t,a){this.toastrService.show(t,a,{position:e,status:t})}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.examService.deleteExamId(),this.examService.deleteExamData()}}]),e}(),j.\u0275fac=function(e){return new(e||j)(m.Qb(u.a),m.Qb(b.a),m.Qb(c.a),m.Qb(s.a),m.Qb(o.a),m.Qb(r.xb),m.Qb(l.c),m.Qb(l.a))},j.\u0275cmp=m.Kb({type:j,selectors:[["ngx-add-test"]],viewQuery:function(e,t){var a;1&e&&m.Hc(d,!0),2&e&&m.rc(a=m.fc())&&(t.stepper=a.first)},decls:119,vars:29,consts:[[1,"row"],[1,"col-9"],[1,"col-3"],["nbButton","","size","tiny","status","warning",1,"float-right",3,"click"],[1,"col-12"],[3,"linear","disableStepNavigation"],["stepper",""],["label","Exam Details",3,"stepControl"],[3,"formGroup","submit"],[1,"col-md-6"],[1,"form-control-group"],["for","input-exam-title",1,"label"],["type","text","nbInput","","id","input-exam-title","name","title","formControlName","examTitle","placeholder","Exam Title","fullWidth","",3,"status"],[4,"ngIf"],["for","input-subject",1,"label"],["id","input-subject","name","subject","formControlName","subject","placeholder","Subject","fullWidth","",3,"status"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","input-exam-out-of-marks",1,"label"],["type","number","nbInput","","id","input-exam-out-of-marks","name","outOfMarks","min","0","formControlName","outOfMarks","placeholder","Out of Marks","fullWidth","",3,"status"],["for","input-exam-passing-marks",1,"label"],["type","number","nbInput","","id","input-exam-passing-marks","name","passingMarks","min","0","formControlName","passingMarks","placeholder","Passing Marks","fullWidth","",3,"status"],["for","input-date",1,"label"],["type","date","nbInput","","id","input-date","name","date","formControlName","date","placeholder","Date","fullWidth","",3,"min","status"],["for","input-time",1,"label"],["type","time","step","300","nbInput","","id","input-time","name","time","formControlName","time","placeholder","Time","fullWidth","",3,"status"],["for","input-duration",1,"label"],["type","number","nbInput","","id","input-duration","name","duration","min","0","formControlName","duration","placeholder","Duration (in Min)","fullWidth","",3,"status"],["type","submit","nbButton","","status","basic","size","small",1,"float-right"],["label","Submit"],[1,"step-container"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"col-md-6","text-left"],["type","button","nbButton","",1,"",3,"click"],["icon","arrow-ios-back-outline"],[1,"col-md-6","text-right"],["nbButton","","size","medium",3,"click"],["size","medium",3,"formGroup","submit"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[3,"value"]],template:function(e,t){1&e&&(m.Wb(0,"nb-card"),m.Wb(1,"nb-card-header"),m.Wb(2,"div",0),m.Wb(3,"div",1),m.Wb(4,"h3"),m.Cc(5),m.Vb(),m.Vb(),m.Wb(6,"div",2),m.Wb(7,"button",3),m.ec("click",(function(){return t.back()})),m.Cc(8," Back "),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Wb(9,"nb-card-body"),m.Wb(10,"div",0),m.Wb(11,"div",4),m.Wb(12,"nb-stepper",5,6),m.Wb(14,"nb-step",7),m.Wb(15,"form",8),m.ec("submit",(function(){return t.submitExamForm()})),m.Wb(16,"div",0),m.Wb(17,"div",9),m.Wb(18,"div",10),m.Wb(19,"label",11),m.Cc(20,"Exam Title:"),m.Vb(),m.Rb(21,"input",12),m.Ac(22,f,2,1,"ng-container",13),m.Vb(),m.Vb(),m.Wb(23,"div",9),m.Wb(24,"div",10),m.Wb(25,"label",14),m.Cc(26,"Subject:"),m.Vb(),m.Wb(27,"nb-select",15),m.Wb(28,"nb-option",16),m.Cc(29,"Select Subject"),m.Vb(),m.Ac(30,h,2,2,"nb-option",17),m.Vb(),m.Ac(31,x,2,1,"ng-container",13),m.Vb(),m.Vb(),m.Wb(32,"div",9),m.Wb(33,"div",10),m.Wb(34,"label",18),m.Cc(35,"Out of Marks:"),m.Vb(),m.Rb(36,"input",19),m.Ac(37,V,3,2,"ng-container",13),m.Vb(),m.Vb(),m.Wb(38,"div",9),m.Wb(39,"div",10),m.Wb(40,"label",20),m.Cc(41,"Passing Marks:"),m.Vb(),m.Rb(42,"input",21),m.Ac(43,E,3,2,"ng-container",13),m.Vb(),m.Vb(),m.Wb(44,"div",9),m.Wb(45,"div",10),m.Wb(46,"label",22),m.Cc(47,"Date:"),m.Vb(),m.Rb(48,"input",23),m.Ac(49,M,2,1,"ng-container",13),m.Vb(),m.Vb(),m.Wb(50,"div",9),m.Wb(51,"div",10),m.Wb(52,"label",24),m.Cc(53,"Time:"),m.Vb(),m.Rb(54,"input",25),m.Ac(55,I,2,1,"ng-container",13),m.Vb(),m.Vb(),m.Wb(56,"div",9),m.Wb(57,"div",10),m.Wb(58,"label",26),m.Cc(59,"Duration (in Min):"),m.Vb(),m.Rb(60,"input",27),m.Ac(61,w,3,2,"ng-container",13),m.Vb(),m.Vb(),m.Vb(),m.Rb(62,"hr"),m.Wb(63,"div",0),m.Wb(64,"div",4),m.Wb(65,"button",28),m.Cc(66," Next "),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Wb(67,"nb-step",29),m.Wb(68,"div",30),m.Wb(69,"div",31),m.Wb(70,"table",32),m.Wb(71,"tbody"),m.Wb(72,"tr"),m.Wb(73,"th"),m.Cc(74,"Exam Title"),m.Vb(),m.Wb(75,"td"),m.Cc(76),m.Vb(),m.Vb(),m.Wb(77,"tr"),m.Wb(78,"th"),m.Cc(79,"Subject"),m.Vb(),m.Wb(80,"td"),m.Cc(81),m.Vb(),m.Vb(),m.Wb(82,"tr"),m.Wb(83,"th"),m.Cc(84,"Out of Marks"),m.Vb(),m.Wb(85,"td"),m.Cc(86),m.Vb(),m.Vb(),m.Wb(87,"tr"),m.Wb(88,"th"),m.Cc(89,"Passing Marks"),m.Vb(),m.Wb(90,"td"),m.Cc(91),m.Vb(),m.Vb(),m.Wb(92,"tr"),m.Wb(93,"th"),m.Cc(94,"Date"),m.Vb(),m.Wb(95,"td"),m.Cc(96),m.Vb(),m.Vb(),m.Wb(97,"tr"),m.Wb(98,"th"),m.Cc(99,"Time"),m.Vb(),m.Wb(100,"td"),m.Cc(101),m.Vb(),m.Vb(),m.Wb(102,"tr"),m.Wb(103,"th"),m.Cc(104,"Duration (in Min)"),m.Vb(),m.Wb(105,"td"),m.Cc(106),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Rb(107,"hr"),m.Wb(108,"div",0),m.Wb(109,"div",33),m.Wb(110,"button",34),m.ec("click",(function(){return t.previousStep()})),m.Rb(111,"nb-icon",35),m.Wb(112,"span"),m.Cc(113,"prev"),m.Vb(),m.Vb(),m.Vb(),m.Wb(114,"div",36),m.Wb(115,"button",37),m.ec("click",(function(){return t.saveExam()})),m.Wb(116,"span"),m.Cc(117,"Submit"),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Wb(118,"form",38),m.ec("submit",(function(){return t.saveExam()})),m.Vb(),m.Vb(),m.Vb(),m.Vb(),m.Vb()),2&e&&(m.Eb(5),m.Ec("",t.exam?"Edit":"Add"," Test"),m.Eb(7),m.mc("linear",!0)("disableStepNavigation",!0),m.Eb(2),m.mc("stepControl",t.examForm),m.Eb(1),m.mc("formGroup",t.examForm),m.Eb(6),m.mc("status",t.examForm.get("examTitle").touched?t.examForm.get("examTitle").invalid?"danger":"success":"basic"),m.Eb(1),m.mc("ngIf",t.examForm.get("examTitle").invalid&&t.examForm.get("examTitle").touched),m.Eb(5),m.mc("status",t.examForm.get("subject").touched?t.examForm.get("subject").invalid?"danger":"success":"basic"),m.Eb(3),m.mc("ngForOf",t.subjects),m.Eb(1),m.mc("ngIf",t.examForm.get("subject").invalid&&t.examForm.get("subject").touched),m.Eb(5),m.mc("status",t.examForm.get("outOfMarks").touched?t.examForm.get("outOfMarks").invalid?"danger":"success":"basic"),m.Eb(1),m.mc("ngIf",t.examForm.get("outOfMarks").invalid&&t.examForm.get("outOfMarks").touched),m.Eb(5),m.mc("status",t.examForm.get("passingMarks").touched?t.examForm.get("passingMarks").invalid?"danger":"success":"basic"),m.Eb(1),m.mc("ngIf",t.examForm.get("passingMarks").invalid&&t.examForm.get("passingMarks").touched),m.Eb(5),m.mc("min",t.exam?t.exam.date:t.dateService.getDateString())("status",t.examForm.get("date").touched?t.examForm.get("date").invalid?"danger":"success":"basic"),m.Eb(1),m.mc("ngIf",t.examForm.get("date").invalid&&t.examForm.get("date").touched),m.Eb(5),m.mc("status",t.examForm.get("time").touched?t.examForm.get("time").invalid?"danger":"success":"basic"),m.Eb(1),m.mc("ngIf",t.examForm.get("time").invalid&&t.examForm.get("time").touched),m.Eb(5),m.mc("status",t.examForm.get("duration").touched?t.examForm.get("duration").invalid?"danger":"success":"basic"),m.Eb(1),m.mc("ngIf",t.examForm.get("duration").invalid&&t.examForm.get("duration").touched),m.Eb(15),m.Dc(t.examForm.value.examTitle),m.Eb(5),m.Dc(t.getSubject(t.examForm.value.subject)),m.Eb(5),m.Dc(t.examForm.value.outOfMarks),m.Eb(5),m.Dc(t.examForm.value.passingMarks),m.Eb(5),m.Dc(t.dateService.formatDate(t.examForm.value.date)),m.Eb(5),m.Dc(t.dateService.formatTime(t.examForm.value.time)),m.Eb(5),m.Ec("",t.examForm.value.duration," Min"),m.Eb(12),m.mc("formGroup",t.examForm))},directives:[r.x,r.z,r.u,r.w,r.pb,r.ob,i.v,i.n,i.g,r.O,i.a,i.m,i.e,n.n,r.jb,r.eb,n.m,i.q,r.L],styles:[""]}),j)},{path:"page-not-found",loadChildren:function(){return a.e(0).then(a.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],O=((A=function e(){_classCallCheck(this,e)}).\u0275mod=m.Ob({type:A}),A.\u0275inj=m.Nb({factory:function(e){return new(e||A)},imports:[[l.g.forChild(D)],l.g]}),A);a.d(t,"AddTestModule",(function(){return N}));var q,N=((q=function e(){_classCallCheck(this,e)}).\u0275mod=m.Ob({type:q}),q.\u0275inj=m.Nb({factory:function(e){return new(e||q)},imports:[[n.c,O,r.P,r.N,r.kb,r.A,r.qb,r.v,i.s]]}),q)}}]);