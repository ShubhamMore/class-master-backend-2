function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Vtcy:function(e,t,n){"use strict";n.r(t);var a=n("3Pt+"),r=n("ofXK"),i=n("aceb"),l=n("ZatZ"),o=n("EQut"),m=n("RSY0"),s=n("lst6"),d=n("IAlr"),u=n("fXoL"),c=n("tyNb"),p=["stepper"];function E(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Online Exam Title is required! "),u["\u0275\u0275elementEnd"]())}function x(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,E,2,0,"p",45),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("title").errors?null:n.onlineExamForm.get("title").errors.required)}}function v(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"nb-option",47),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275property"]("value",n._id),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](n.subject)}}function h(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Subject is required! "),u["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,h,2,0,"p",45),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("subject").errors?null:n.onlineExamForm.get("subject").errors.required)}}function f(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Date is required! "),u["\u0275\u0275elementEnd"]())}function b(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,f,2,0,"p",45),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("date").errors?null:n.onlineExamForm.get("date").errors.required)}}function S(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Time is required! "),u["\u0275\u0275elementEnd"]())}function F(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,S,2,0,"p",45),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("time").errors?null:n.onlineExamForm.get("time").errors.required)}}function k(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Duration is required! "),u["\u0275\u0275elementEnd"]())}function y(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Duration should be greater than 0 "),u["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,k,2,0,"p",45),u["\u0275\u0275template"](2,y,2,0,"p",45),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("duration").errors?null:n.onlineExamForm.get("duration").errors.required),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("duration").errors?null:n.onlineExamForm.get("duration").errors.min)}}function I(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Description is required! "),u["\u0275\u0275elementEnd"]())}function C(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,I,2,0,"p",45),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("description").errors?null:n.onlineExamForm.get("description").errors.required)}}function Q(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Each Question Marks is required! "),u["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Each Question Marks should be greater than 0 "),u["\u0275\u0275elementEnd"]())}function w(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,Q,2,0,"p",45),u["\u0275\u0275template"](2,j,2,0,"p",45),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("eachQuestionMarks").errors?null:n.onlineExamForm.get("eachQuestionMarks").errors.required),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("eachQuestionMarks").errors?null:n.onlineExamForm.get("eachQuestionMarks").errors.min)}}function T(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Total Questions are required! "),u["\u0275\u0275elementEnd"]())}function q(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Total Questions should be greater than 0 "),u["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,T,2,0,"p",45),u["\u0275\u0275template"](2,q,2,0,"p",45),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("totalQuestions").errors?null:n.onlineExamForm.get("totalQuestions").errors.required),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("totalQuestions").errors?null:n.onlineExamForm.get("totalQuestions").errors.min)}}function D(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Total Marks are required! "),u["\u0275\u0275elementEnd"]())}function N(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Total Marks should be greater than 0 "),u["\u0275\u0275elementEnd"]())}function _(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,D,2,0,"p",45),u["\u0275\u0275template"](2,N,2,0,"p",45),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("totalMarks").errors?null:n.onlineExamForm.get("totalMarks").errors.required),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("totalMarks").errors?null:n.onlineExamForm.get("totalMarks").errors.min)}}function P(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Passing Marks is required! "),u["\u0275\u0275elementEnd"]())}function A(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",46),u["\u0275\u0275text"](1," Passing Marks should be greater than 0 "),u["\u0275\u0275elementEnd"]())}function W(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,P,2,0,"p",45),u["\u0275\u0275template"](2,A,2,0,"p",45),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("passingMarks").errors?null:n.onlineExamForm.get("passingMarks").errors.required),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.onlineExamForm.get("passingMarks").errors?null:n.onlineExamForm.get("passingMarks").errors.min)}}var B,R,z=[{path:"",component:(B=function(){function e(t,n,a,r,i,l,o,m){_classCallCheck(this,e),this.branchService=t,this.courseService=n,this.dateService=a,this.batchService=r,this.onlineExamService=i,this.toastrService=l,this.router=o,this.route=m}return _createClass(e,[{key:"ngOnInit",value:function(){var e,t=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.route.queryParams.subscribe((function(t){e=t.mode})),this.onlineExamId=this.onlineExamService.getOnlineExamId(),e&&"edit"!==e?this.showToastr("top-right","danger","Invalid Route"):!e||this.onlineExamId?(this.branchService.getCategoryData().subscribe((function(e){t.category=e})),this.courseService.getCourseData().subscribe((function(e){t.course=e})),this.batchService.getBatchData().subscribe((function(e){t.batch=e})),this.subjects=[],this.batch.subjects.forEach((function(e){var n=t.course.subjects.find((function(t){return t._id===e.subject}));t.subjects.push(n)})),this.onlineExamForm=new a.f({title:new a.d(null,{validators:[a.u.required]}),subject:new a.d("",{validators:[a.u.required]}),date:new a.d(this.dateService.getDateString(),{validators:[a.u.required]}),time:new a.d(null,{validators:[a.u.required]}),duration:new a.d(null,{validators:[a.u.required]}),description:new a.d(null,{validators:[]}),eachQuestionMarks:new a.d(null,{validators:[a.u.required,a.u.min(1)]}),totalQuestions:new a.d(null,{validators:[a.u.required,a.u.min(1)]}),totalMarks:new a.d(null,{validators:[]}),passingMarks:new a.d(null,{validators:[a.u.required,a.u.min(1)]})}),e&&this.onlineExamId?this.onlineExamService.getOnlineExam(this.onlineExamId).subscribe((function(e){t.onlineExam=e,t.onlineExamForm.patchValue({title:t.onlineExam.title,subject:t.onlineExam.subject,date:t.onlineExam.date,time:t.onlineExam.time,duration:t.onlineExam.duration,branch:t.onlineExam.branch,description:t.onlineExam.description,eachQuestionMarks:t.onlineExam.eachQuestionMarks,totalQuestions:t.onlineExam.totalQuestions,totalMarks:t.onlineExam.totalMarks,passingMarks:t.onlineExam.passingMarks}),t.loading=!1}),(function(e){t.showToastr("top-right","danger",e),t.back()})):this.loading=!1):this.showToastr("top-right","danger","OnlineExam Not Found")):this.router.navigate(["../"],{relativeTo:this.route})}},{key:"previousStep",value:function(){this.stepper.previous()}},{key:"submitOnlineExamForm",value:function(){this.onlineExamForm.markAllAsTouched(),this.onlineExamForm.invalid?this.showToastr("top-right","danger","All Online Exam Fields are Required"):this.stepper.next()}},{key:"calculateTotalMarks",value:function(){this.onlineExamForm.patchValue({totalMarks:(this.onlineExamForm.value.totalQuestions||0)*(this.onlineExamForm.value.eachQuestionMarks||0)})}},{key:"saveOnlineExam",value:function(){var e=this;if(this.onlineExamForm.markAllAsTouched(),this.onlineExamForm.invalid)this.showToastr("top-right","danger","All Online Exam Fields are Required");else{this.loading=!0;var t=Object.assign({},this.onlineExamForm.getRawValue());t.branch=this.branchId,t.category=this.category._id,t.course=this.course._id,t.batch=this.batch._id,this.onlineExam?(t._id=this.onlineExam._id,this.onlineExamService.editOnlineExam(t).subscribe((function(t){e.showToastr("top-right","success","Online Exam Updated Successfully!"),e.back()}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))):this.onlineExamService.addOnlineExam(t).subscribe((function(t){e.showToastr("top-right","success","New Online Exam Added Successfully!"),e.back()}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}}},{key:"getSubject",value:function(e){var t=this.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"back",value:function(){this.router.navigate(["../manage"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.onlineExamService.deleteOnlineExamId(),this.onlineExamService.deleteOnlineExamData()}}]),e}(),B.\u0275fac=function(e){return new(e||B)(u["\u0275\u0275directiveInject"](o.a),u["\u0275\u0275directiveInject"](d.a),u["\u0275\u0275directiveInject"](l.a),u["\u0275\u0275directiveInject"](s.a),u["\u0275\u0275directiveInject"](m.a),u["\u0275\u0275directiveInject"](i.Db),u["\u0275\u0275directiveInject"](c.c),u["\u0275\u0275directiveInject"](c.a))},B.\u0275cmp=u["\u0275\u0275defineComponent"]({type:B,selectors:[["ngx-add-online-test"]],viewQuery:function(e,t){var n;1&e&&u["\u0275\u0275viewQuery"](p,!0),2&e&&u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.stepper=n.first)},decls:151,vars:37,consts:[[1,"row"],[1,"col-9"],[1,"col-3"],["nbButton","","size","tiny","status","warning",1,"float-right",3,"click"],[1,"col-12"],[3,"linear","disableStepNavigation"],["stepper",""],["label","Online Exam Details",3,"stepControl"],[3,"formGroup","submit"],[1,"col-md-12"],[1,"form-control-group"],["for","input-online-exam-title",1,"label"],["type","text","nbInput","","id","input-online-exam-title","name","title","formControlName","title","placeholder","Online Exam Title","fullWidth","",3,"status"],[4,"ngIf"],[1,"col-md-6"],["for","input-subject",1,"label"],["id","input-subject","name","subject","formControlName","subject","placeholder","Subject","fullWidth","",3,"status"],["value",""],[3,"value",4,"ngFor","ngForOf"],["for","input-date",1,"label"],["type","date","nbInput","","id","input-date","name","date","formControlName","date","placeholder","Date","fullWidth","",3,"min","status"],["for","input-time",1,"label"],["type","time","step","300","nbInput","","id","input-time","name","time","formControlName","time","placeholder","Time","fullWidth","",3,"status"],["for","input-duration",1,"label"],["type","number","nbInput","","id","input-duration","name","duration","min","0","formControlName","duration","placeholder","Duration (in Min)","fullWidth","",3,"status"],["for","input-description",1,"label"],["type","text","nbInput","","rows","2","id","input-description","name","description","min","0","formControlName","description","placeholder","Description","fullWidth","",3,"status"],["for","input-each-question-marks",1,"label"],["type","number","nbInput","","id","input-each-question-marks","name","eachQuestionMarks","min","0","formControlName","eachQuestionMarks","placeholder","Each Question Marks","fullWidth","",3,"status","input"],["for","input-total-question",1,"label"],["type","number","nbInput","","id","input-total-question","name","totalQuestions","min","0","formControlName","totalQuestions","placeholder","Total Question","fullWidth","",3,"status","input"],["for","input-total-marks",1,"label"],["type","number","nbInput","","id","input-total-marks","name","totalMarks","min","0","formControlName","totalMarks","placeholder","Total Marks","disabled","true","fullWidth","",3,"status"],["for","input-onlineExam-passing-marks",1,"label"],["type","number","nbInput","","id","input-onlineExam-passing-marks","name","passingMarks","min","0","formControlName","passingMarks","placeholder","Passing Marks","fullWidth","",3,"status"],["type","submit","nbButton","","status","basic","size","small",1,"float-right"],["label","Submit"],[1,"step-container"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"col-md-6","text-left"],["type","button","nbButton","",1,"",3,"click"],["icon","arrow-ios-back-outline"],[1,"col-md-6","text-right"],["nbButton","","size","medium",3,"click"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[3,"value"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"nb-card"),u["\u0275\u0275elementStart"](1,"nb-card-header"),u["\u0275\u0275elementStart"](2,"div",0),u["\u0275\u0275elementStart"](3,"div",1),u["\u0275\u0275elementStart"](4,"h3"),u["\u0275\u0275text"](5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"div",2),u["\u0275\u0275elementStart"](7,"button",3),u["\u0275\u0275listener"]("click",(function(){return t.back()})),u["\u0275\u0275text"](8," Back "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"nb-card-body"),u["\u0275\u0275elementStart"](10,"div",0),u["\u0275\u0275elementStart"](11,"div",4),u["\u0275\u0275elementStart"](12,"nb-stepper",5,6),u["\u0275\u0275elementStart"](14,"nb-step",7),u["\u0275\u0275elementStart"](15,"form",8),u["\u0275\u0275listener"]("submit",(function(){return t.submitOnlineExamForm()})),u["\u0275\u0275elementStart"](16,"div",0),u["\u0275\u0275elementStart"](17,"div",9),u["\u0275\u0275elementStart"](18,"div",10),u["\u0275\u0275elementStart"](19,"label",11),u["\u0275\u0275text"](20,"Online Exam Title:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](21,"input",12),u["\u0275\u0275template"](22,x,2,1,"ng-container",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](23,"div",14),u["\u0275\u0275elementStart"](24,"div",10),u["\u0275\u0275elementStart"](25,"label",15),u["\u0275\u0275text"](26,"Subject:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](27,"nb-select",16),u["\u0275\u0275elementStart"](28,"nb-option",17),u["\u0275\u0275text"](29,"Select Subject"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](30,v,2,2,"nb-option",18),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](31,g,2,1,"ng-container",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](32,"div",14),u["\u0275\u0275elementStart"](33,"div",10),u["\u0275\u0275elementStart"](34,"label",19),u["\u0275\u0275text"](35,"Date:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](36,"input",20),u["\u0275\u0275template"](37,b,2,1,"ng-container",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](38,"div",14),u["\u0275\u0275elementStart"](39,"div",10),u["\u0275\u0275elementStart"](40,"label",21),u["\u0275\u0275text"](41,"Time:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](42,"input",22),u["\u0275\u0275template"](43,F,2,1,"ng-container",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](44,"div",14),u["\u0275\u0275elementStart"](45,"div",10),u["\u0275\u0275elementStart"](46,"label",23),u["\u0275\u0275text"](47,"Duration (in Min):"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](48,"input",24),u["\u0275\u0275template"](49,M,3,2,"ng-container",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](50,"div",9),u["\u0275\u0275elementStart"](51,"div",10),u["\u0275\u0275elementStart"](52,"label",25),u["\u0275\u0275text"](53,"Description:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](54,"textarea",26),u["\u0275\u0275template"](55,C,2,1,"ng-container",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](56,"div",14),u["\u0275\u0275elementStart"](57,"div",10),u["\u0275\u0275elementStart"](58,"label",27),u["\u0275\u0275text"](59,"Each Question Marks:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](60,"input",28),u["\u0275\u0275listener"]("input",(function(){return t.calculateTotalMarks()})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](61,w,3,2,"ng-container",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](62,"div",14),u["\u0275\u0275elementStart"](63,"div",10),u["\u0275\u0275elementStart"](64,"label",29),u["\u0275\u0275text"](65,"Total Question:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](66,"input",30),u["\u0275\u0275listener"]("input",(function(){return t.calculateTotalMarks()})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](67,O,3,2,"ng-container",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](68,"div",14),u["\u0275\u0275elementStart"](69,"div",10),u["\u0275\u0275elementStart"](70,"label",31),u["\u0275\u0275text"](71,"Total Marks:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](72,"input",32),u["\u0275\u0275template"](73,_,3,2,"ng-container",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](74,"div",14),u["\u0275\u0275elementStart"](75,"div",10),u["\u0275\u0275elementStart"](76,"label",33),u["\u0275\u0275text"](77,"Passing Marks:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](78,"input",34),u["\u0275\u0275template"](79,W,3,2,"ng-container",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](80,"hr"),u["\u0275\u0275elementStart"](81,"div",0),u["\u0275\u0275elementStart"](82,"div",4),u["\u0275\u0275elementStart"](83,"button",35),u["\u0275\u0275text"](84," Next "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](85,"nb-step",36),u["\u0275\u0275elementStart"](86,"div",37),u["\u0275\u0275elementStart"](87,"div",38),u["\u0275\u0275elementStart"](88,"table",39),u["\u0275\u0275elementStart"](89,"tbody"),u["\u0275\u0275elementStart"](90,"tr"),u["\u0275\u0275elementStart"](91,"th"),u["\u0275\u0275text"](92,"Online Exam Title"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](93,"td"),u["\u0275\u0275text"](94),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](95,"tr"),u["\u0275\u0275elementStart"](96,"th"),u["\u0275\u0275text"](97,"Subject"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](98,"td"),u["\u0275\u0275text"](99),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](100,"tr"),u["\u0275\u0275elementStart"](101,"th"),u["\u0275\u0275text"](102,"Date"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](103,"td"),u["\u0275\u0275text"](104),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](105,"tr"),u["\u0275\u0275elementStart"](106,"th"),u["\u0275\u0275text"](107,"Time"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](108,"td"),u["\u0275\u0275text"](109),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](110,"tr"),u["\u0275\u0275elementStart"](111,"th"),u["\u0275\u0275text"](112,"Duration (in Min)"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](113,"td"),u["\u0275\u0275text"](114),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](115,"tr"),u["\u0275\u0275elementStart"](116,"th"),u["\u0275\u0275text"](117,"Description"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](118,"td"),u["\u0275\u0275text"](119),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](120,"tr"),u["\u0275\u0275elementStart"](121,"th"),u["\u0275\u0275text"](122,"Each Question Marks"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](123,"td"),u["\u0275\u0275text"](124),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](125,"tr"),u["\u0275\u0275elementStart"](126,"th"),u["\u0275\u0275text"](127,"Total Questions"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](128,"td"),u["\u0275\u0275text"](129),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](130,"tr"),u["\u0275\u0275elementStart"](131,"th"),u["\u0275\u0275text"](132,"Total Marks"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](133,"td"),u["\u0275\u0275text"](134),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](135,"tr"),u["\u0275\u0275elementStart"](136,"th"),u["\u0275\u0275text"](137,"Passing Marks"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](138,"td"),u["\u0275\u0275text"](139),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](140,"hr"),u["\u0275\u0275elementStart"](141,"div",0),u["\u0275\u0275elementStart"](142,"div",40),u["\u0275\u0275elementStart"](143,"button",41),u["\u0275\u0275listener"]("click",(function(){return t.previousStep()})),u["\u0275\u0275element"](144,"nb-icon",42),u["\u0275\u0275elementStart"](145,"span"),u["\u0275\u0275text"](146,"prev"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](147,"div",43),u["\u0275\u0275elementStart"](148,"button",44),u["\u0275\u0275listener"]("click",(function(){return t.saveOnlineExam()})),u["\u0275\u0275elementStart"](149,"span"),u["\u0275\u0275text"](150,"Submit"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate1"]("",t.onlineExam?"Edit":"Add"," Online Test"),u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("linear",!0)("disableStepNavigation",!0),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("stepControl",t.onlineExamForm),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.onlineExamForm),u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("status",t.onlineExamForm.get("title").touched?t.onlineExamForm.get("title").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.onlineExamForm.get("title").invalid&&t.onlineExamForm.get("title").touched),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("status",t.onlineExamForm.get("subject").touched?t.onlineExamForm.get("subject").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngForOf",t.subjects),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.onlineExamForm.get("subject").invalid&&t.onlineExamForm.get("subject").touched),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("min",t.onlineExam?t.onlineExam.date:t.dateService.getDateString())("status",t.onlineExamForm.get("date").touched?t.onlineExamForm.get("date").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.onlineExamForm.get("date").invalid&&t.onlineExamForm.get("date").touched),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("status",t.onlineExamForm.get("time").touched?t.onlineExamForm.get("time").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.onlineExamForm.get("time").invalid&&t.onlineExamForm.get("time").touched),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("status",t.onlineExamForm.get("duration").touched?t.onlineExamForm.get("duration").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.onlineExamForm.get("duration").invalid&&t.onlineExamForm.get("duration").touched),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("status",t.onlineExamForm.get("description").touched?t.onlineExamForm.get("description").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.onlineExamForm.get("description").invalid&&t.onlineExamForm.get("description").touched),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("status",t.onlineExamForm.get("eachQuestionMarks").touched?t.onlineExamForm.get("eachQuestionMarks").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.onlineExamForm.get("eachQuestionMarks").invalid&&t.onlineExamForm.get("eachQuestionMarks").touched),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("status",t.onlineExamForm.get("totalQuestions").touched?t.onlineExamForm.get("totalQuestions").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.onlineExamForm.get("totalQuestions").invalid&&t.onlineExamForm.get("totalQuestions").touched),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("status",t.onlineExamForm.get("totalMarks").touched?t.onlineExamForm.get("totalMarks").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.onlineExamForm.get("totalMarks").invalid&&t.onlineExamForm.get("totalMarks").touched),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("status",t.onlineExamForm.get("passingMarks").touched?t.onlineExamForm.get("passingMarks").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.onlineExamForm.get("passingMarks").invalid&&t.onlineExamForm.get("passingMarks").touched),u["\u0275\u0275advance"](15),u["\u0275\u0275textInterpolate"](t.onlineExamForm.value.title),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.getSubject(t.onlineExamForm.value.subject)),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.dateService.formatDate(t.onlineExamForm.value.date)),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.dateService.formatTime(t.onlineExamForm.value.time)),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate1"]("",t.onlineExamForm.value.duration," Min"),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.onlineExamForm.value.description),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.onlineExamForm.value.eachQuestionMarks),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.onlineExamForm.value.totalQuestions),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.onlineExamForm.value.totalMarks),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.onlineExamForm.value.passingMarks))},directives:[i.x,i.z,i.u,i.w,i.sb,i.rb,a.v,a.n,a.g,i.P,a.a,a.m,a.e,r.n,i.mb,i.fb,r.m,a.q,i.M],styles:[""]}),B)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],V=((R=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:R}),R.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||R)},imports:[[c.g.forChild(z)],c.g]}),R);n.d(t,"AddOnlineTestModule",(function(){return J}));var G,J=((G=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:G}),G.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||G)},imports:[[r.c,V,i.Q,i.v,i.A,i.tb,i.nb,i.O,a.s]]}),G)}}]);