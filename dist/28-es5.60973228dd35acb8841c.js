function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{MDGh:function(e,t,n){"use strict";n.r(t);var a=n("ofXK"),r=n("IAlr"),i=n("3Pt+"),l=n("lst6"),c=n("EQut"),o=n("no5z"),s=n("Pj/w"),u=n("fXoL"),d=n("aceb"),m=n("tyNb"),h=["stepper"];function b(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",36),u["\u0275\u0275text"](1," Batch Name is required! "),u["\u0275\u0275elementEnd"]())}function p(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,b,2,0,"p",35),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.batchBasicDetailsForm.get("batchName").errors?null:n.batchBasicDetailsForm.get("batchName").errors.required)}}function v(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",36),u["\u0275\u0275text"](1," Batch Start Date is required! "),u["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,v,2,0,"p",35),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",null==n.batchBasicDetailsForm.get("startDate").errors?null:n.batchBasicDetailsForm.get("startDate").errors.required)}}function S(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"nb-option",44),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275property"]("value",n.employee),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](n.name)}}function g(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275elementStart"](1,"div",37),u["\u0275\u0275elementStart"](2,"div",38),u["\u0275\u0275elementStart"](3,"div",8),u["\u0275\u0275elementStart"](4,"nb-checkbox",39),u["\u0275\u0275listener"]("checkedChange",(function(e){u["\u0275\u0275restoreView"](n);var a=t.index;return u["\u0275\u0275nextContext"]().changeSubjectStatus(e,a)})),u["\u0275\u0275elementStart"](5,"label",40),u["\u0275\u0275text"](6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"div",38),u["\u0275\u0275elementStart"](8,"div",8),u["\u0275\u0275elementStart"](9,"nb-select",41),u["\u0275\u0275elementStart"](10,"nb-option",42),u["\u0275\u0275text"](11,"Select Teacher "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](12,S,2,2,"nb-option",43),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementContainerEnd"]()}if(2&e){var a=t.$implicit,r=t.index,i=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",a),u["\u0275\u0275advance"](3),u["\u0275\u0275propertyInterpolate1"]("id","status-",r,""),u["\u0275\u0275property"]("checked",a.value.status),u["\u0275\u0275advance"](1),u["\u0275\u0275propertyInterpolate1"]("for","status-",r,""),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate"](i.getSubjectName(a.value.subject)),u["\u0275\u0275advance"](3),u["\u0275\u0275propertyInterpolate1"]("id","teacher-",r,""),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("ngForOf",i.teachers)}}function E(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tr"),u["\u0275\u0275elementStart"](1,"th"),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"td"),u["\u0275\u0275text"](4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]().$implicit,a=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](a.getSubjectName(n.value.subject)),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](a.getTeacherName(n.value.teacher))}}function x(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,E,5,2,"tr",11),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",n.value.status)}}var y,j,B=[{path:"",component:(y=function(){function e(t,n,a,r,i,l,c){var o=this;_classCallCheck(this,e),this.branchService=t,this.branchEmployeeService=n,this.batchService=a,this.courseService=r,this.toastrService=i,this.router=l,this.route=c,this.route.queryParams.subscribe((function(e){o.ngOnInit()}))}return _createClass(e,[{key:"ngOnInit",value:function(){var e,t=this;if(this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId)return this.courseService.getCourseData().subscribe((function(e){t.course=e,t.course||t.router.navigate(["../"],{relativeTo:t.route})})),this.batchId=this.batchService.getBatchId(),this.route.queryParams.subscribe((function(t){e=t.mode})),e&&"edit"!==e?(this.showToastr("top-right","danger","Invalid Route"),void this.router.navigate(["../page-not-found"],{relativeTo:this.route})):e&&!this.batchId?(this.showToastr("top-right","danger","Batch Not Available"),void this.router.navigate(["../page-not-found"],{relativeTo:this.route})):(this.batchBasicDetailsForm=new i.f({batchName:new i.d(null,{validators:[i.u.required]}),startDate:new i.d(null,{validators:[i.u.required]}),rollNoPrefix:new i.d(null,{validators:[]}),description:new i.d(null,{validators:[]})}),this.batchSubjectForm=new i.f({subjects:new i.b([])},{validators:this.atLeastOneSubjectValidator.bind(this)}),this.teachers=[],this.subjects=this.course.subjects.filter((function(e){return e.status})),this.subjects.forEach((function(e){var n={_id:new o.a,subject:e._id,teacher:"",status:!0};t.addBatchSubject(n)})),void this.branchEmployeeService.getBranchEmployeeNameIdsForBatch(this.branchId,"teacher").subscribe((function(e){t.teachers=e,t.batchId?t.batchService.getBatchForEditing(t.batchId).subscribe((function(n){if(n){t.batch=n,t.batchBasicDetailsForm.patchValue({batchName:n.basicDetails.batchName,startDate:n.basicDetails.startDate,duration:n.basicDetails.rollNoPrefix,description:n.basicDetails.description});var a=n.subjects;t.subjects.forEach((function(n,r){var i=a.find((function(e){return e.subject===n._id})),l="";i&&(t.changeSubjectStatus(i.status,r),t.getBatchSubjects().controls[r].get("_id").setValue(i._id),e.find((function(e){return e.employee===i.teacher}))&&(l=i.teacher)),t.getBatchSubjects().controls[r].get("teacher").setValue(l)})),t.loading=!1}else t.router.navigate(["../page-not-found"],{relativeTo:t.route})}),(function(e){t.router.navigate(["../page-not-found"],{relativeTo:t.route})})):t.loading=!1}),(function(e){t.showToastr("top-right","danger",e),t.loading=!1})));this.router.navigate(["../"],{relativeTo:this.route})}},{key:"atLeastOneSubjectValidator",value:function(e){var t=!1;return e.value.subjects.forEach((function(e){e.status&&(t=!0)})),t?null:{atLeastOneSubjectError:!0}}},{key:"getBatchSubjects",value:function(){return this.batchSubjectForm.get("subjects")}},{key:"newBatchSubject",value:function(e){return new i.f({_id:new i.d(e._id?e._id:(new o.a).toString(),{validators:[i.u.required]}),subject:new i.d(e.subject?e.subject:null,{validators:[i.u.required]}),teacher:new i.d(e.teacher?e.teacher:"",{validators:[]}),status:new i.d(!e.status||e.status,{validators:[]})})}},{key:"addBatchSubject",value:function(e){this.getBatchSubjects().push(this.newBatchSubject(e))}},{key:"changeSubjectStatus",value:function(e,t){var n=this.getBatchSubjects().controls[t];n.get("status").setValue(e),e?n.get("teacher").enable():(n.get("teacher").setValue(""),n.get("teacher").disable())}},{key:"getSubjectName",value:function(e){var t=this.subjects.find((function(t){return t._id===e}));return t?t.subject:"--"}},{key:"getTeacherName",value:function(e){var t=this.teachers.find((function(t){return t.employee===e}));return t?t.name:"--"}},{key:"submitBasicDetails",value:function(){this.batchBasicDetailsForm.markAllAsTouched(),this.batchBasicDetailsForm.invalid?this.showToastr("top-right","danger","Basic details are required"):this.stepper.next()}},{key:"submitSubjects",value:function(){this.batchSubjectForm.markAllAsTouched(),this.batchSubjectForm.invalid?this.showToastr("top-right","danger","At least 1 Subject is required"):this.stepper.next()}},{key:"saveBatch",value:function(){var e=this;if(this.batchBasicDetailsForm.markAllAsTouched(),this.batchSubjectForm.markAllAsTouched(),this.batchBasicDetailsForm.invalid)this.showToastr("top-right","danger","Basic details are required");else if(this.batchSubjectForm.invalid)this.showToastr("top-right","danger","At least 1 Subject is required");else{this.loading=!0;var t={branch:this.branchId,category:this.course.basicDetails.category,course:this.course._id,basicDetails:this.batchBasicDetailsForm.value,subjects:this.batchSubjectForm.value.subjects};this.batch?(t._id=this.batch._id,this.batchService.editBatch(t).subscribe((function(t){e.showToastr("top-right","success","Batch Updated Successfully!"),e.router.navigate(["../"],{relativeTo:e.route})}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))):this.batchService.addBatch(t).subscribe((function(t){e.showToastr("top-right","success","New Batch Added Successfully!"),e.router.navigate(["../"],{relativeTo:e.route})}),(function(t){e.showToastr("top-right","danger",t),e.loading=!1}))}}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"ngOnDestroy",value:function(){this.batchService.deleteBatchId()}}]),e}(),y.\u0275fac=function(e){return new(e||y)(u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](s.a),u["\u0275\u0275directiveInject"](l.a),u["\u0275\u0275directiveInject"](r.a),u["\u0275\u0275directiveInject"](d.Db),u["\u0275\u0275directiveInject"](m.c),u["\u0275\u0275directiveInject"](m.a))},y.\u0275cmp=u["\u0275\u0275defineComponent"]({type:y,selectors:[["ngx-add-batch"]],viewQuery:function(e,t){var n;1&e&&u["\u0275\u0275viewQuery"](h,!0),2&e&&u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.stepper=n.first)},decls:97,vars:17,consts:[["nbButton","","status","warning","size","tiny",1,"float-right",3,"click"],[1,""],[3,"linear"],["stepper",""],["label","Basic Details",3,"stepControl"],[1,"",3,"formGroup","submit"],[1,"row"],[1,"col-md-4"],[1,"form-control-group"],["for","input -batch-name",1,"label"],["type","text","nbInput","","id","input-batch-name","name","batchName","formControlName","batchName","placeholder","Batch Name","maxlength","30","fullWidth","",3,"status"],[4,"ngIf"],["for","input -batch-start-date",1,"label"],["type","date","nbInput","","id","input-batch-start-date","name","startDate","formControlName","startDate","fullWidth","",3,"status"],["for","input-rollNoPrefix",1,"label"],["type","text","nbInput","","id","input-rollNoPrefix","name","rollNoPrefix","maxlength","15","formControlName","rollNoPrefix","placeholder","Roll No Prefix","fullWidth",""],[1,"col-md-12"],["for","input-billing-description",1,"label"],["type","text","nbInput","","id","input-description","name","description","formControlName","description","placeholder","Description (Optional)","fullWidth",""],[1,"col-md-12","text-right"],["nbButton","","type","submit"],["icon","arrow-ios-forward-outline"],["label","Subject Details",3,"stepControl"],[1,"step-container",3,"formGroup","ngSubmit"],[4,"ngFor","ngForOf"],[1,"col-md-6","text-left"],["nbButton","","nbStepperPrevious","",1,""],["icon","arrow-ios-back-outline"],[1,"col-md-6","text-right"],["label","Submit"],[1,"step-container"],[1,"table-responsive"],[1,"table","table-bordered"],[1,"table","table-sm","table-borderless"],["nbButton","",3,"click"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[1,"row","mb-3",3,"formGroup"],[1,"col-md-4","col-sm-6","mx-auto"],["name","status","formControlName","status",3,"id","checked","checkedChange"],[3,"for"],["name","teacher","formControlName","teacher","placeholder","Select Teacher","fullWidth","",3,"id"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"nb-card"),u["\u0275\u0275elementStart"](1,"nb-card-header"),u["\u0275\u0275elementStart"](2,"button",0),u["\u0275\u0275listener"]("click",(function(){return t.back()})),u["\u0275\u0275text"](3," Back "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"h3",1),u["\u0275\u0275text"](5),u["\u0275\u0275pipe"](6,"uppercase"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"nb-card-body"),u["\u0275\u0275elementStart"](8,"nb-stepper",2,3),u["\u0275\u0275elementStart"](10,"nb-step",4),u["\u0275\u0275elementStart"](11,"form",5),u["\u0275\u0275listener"]("submit",(function(){return t.submitBasicDetails()})),u["\u0275\u0275elementStart"](12,"h6"),u["\u0275\u0275text"](13,"Batch Details:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"div",6),u["\u0275\u0275elementStart"](15,"div",7),u["\u0275\u0275elementStart"](16,"div",8),u["\u0275\u0275elementStart"](17,"label",9),u["\u0275\u0275text"](18,"Batch Name:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](19,"input",10),u["\u0275\u0275template"](20,p,2,1,"ng-container",11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](21,"div",7),u["\u0275\u0275elementStart"](22,"div",8),u["\u0275\u0275elementStart"](23,"label",12),u["\u0275\u0275text"](24,"Batch Start Date:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](25,"input",13),u["\u0275\u0275template"](26,f,2,1,"ng-container",11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](27,"div",7),u["\u0275\u0275elementStart"](28,"div",8),u["\u0275\u0275elementStart"](29,"label",14),u["\u0275\u0275text"](30,"Roll No Prefix:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](31,"input",15),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](32,"div",16),u["\u0275\u0275elementStart"](33,"div",8),u["\u0275\u0275elementStart"](34,"label",17),u["\u0275\u0275text"](35,"Description:"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](36,"textarea",18),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](37,"hr"),u["\u0275\u0275elementStart"](38,"div",6),u["\u0275\u0275elementStart"](39,"div",19),u["\u0275\u0275elementStart"](40,"button",20),u["\u0275\u0275elementStart"](41,"span"),u["\u0275\u0275text"](42,"Next"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](43,"nb-icon",21),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](44,"nb-step",22),u["\u0275\u0275elementStart"](45,"form",23),u["\u0275\u0275listener"]("ngSubmit",(function(){return t.submitSubjects()})),u["\u0275\u0275template"](46,g,13,7,"ng-container",24),u["\u0275\u0275element"](47,"hr"),u["\u0275\u0275elementStart"](48,"div",6),u["\u0275\u0275elementStart"](49,"div",25),u["\u0275\u0275elementStart"](50,"button",26),u["\u0275\u0275element"](51,"nb-icon",27),u["\u0275\u0275elementStart"](52,"span"),u["\u0275\u0275text"](53,"prev"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](54,"div",28),u["\u0275\u0275elementStart"](55,"button",20),u["\u0275\u0275elementStart"](56,"span"),u["\u0275\u0275text"](57,"Next"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](58,"nb-icon",21),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](59,"nb-step",29),u["\u0275\u0275elementStart"](60,"div",30),u["\u0275\u0275elementStart"](61,"div",31),u["\u0275\u0275elementStart"](62,"table",32),u["\u0275\u0275elementStart"](63,"tbody"),u["\u0275\u0275elementStart"](64,"tr"),u["\u0275\u0275elementStart"](65,"th"),u["\u0275\u0275text"](66,"Batch Name"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](67,"td"),u["\u0275\u0275text"](68),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](69,"tr"),u["\u0275\u0275elementStart"](70,"th"),u["\u0275\u0275text"](71,"Batch Roll No Prefix"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](72,"td"),u["\u0275\u0275text"](73),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](74,"tr"),u["\u0275\u0275elementStart"](75,"th"),u["\u0275\u0275text"](76,"Description"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](77,"td"),u["\u0275\u0275text"](78),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](79,"tr"),u["\u0275\u0275elementStart"](80,"th"),u["\u0275\u0275text"](81,"Subjects"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](82,"td"),u["\u0275\u0275elementStart"](83,"table",33),u["\u0275\u0275elementStart"](84,"tbody"),u["\u0275\u0275template"](85,x,2,1,"ng-container",24),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](86,"hr"),u["\u0275\u0275elementStart"](87,"div",6),u["\u0275\u0275elementStart"](88,"div",25),u["\u0275\u0275elementStart"](89,"button",26),u["\u0275\u0275element"](90,"nb-icon",27),u["\u0275\u0275elementStart"](91,"span"),u["\u0275\u0275text"](92,"prev"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](93,"div",28),u["\u0275\u0275elementStart"](94,"button",34),u["\u0275\u0275listener"]("click",(function(){return t.saveBatch()})),u["\u0275\u0275elementStart"](95,"span"),u["\u0275\u0275text"](96,"Submit"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate1"](" ",t.batch?"Edit Batch "+u["\u0275\u0275pipeBind1"](6,15,t.batch.basicDetails.batchName):"Add New Batch"," "),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("linear",!0),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("stepControl",t.batchBasicDetailsForm),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.batchBasicDetailsForm),u["\u0275\u0275advance"](8),u["\u0275\u0275property"]("status",t.batchBasicDetailsForm.get("batchName").touched?t.batchBasicDetailsForm.get("batchName").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.batchBasicDetailsForm.get("batchName").invalid&&t.batchBasicDetailsForm.get("batchName").touched),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("status",t.batchBasicDetailsForm.get("startDate").touched?t.batchBasicDetailsForm.get("startDate").invalid?"danger":"success":"basic"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.batchBasicDetailsForm.get("startDate").invalid&&t.batchBasicDetailsForm.get("startDate").touched),u["\u0275\u0275advance"](18),u["\u0275\u0275property"]("stepControl",t.batchSubjectForm),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.batchSubjectForm),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",t.batchSubjectForm.get("subjects").controls),u["\u0275\u0275advance"](22),u["\u0275\u0275textInterpolate"](t.batchBasicDetailsForm.value.batchName),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.batchBasicDetailsForm.value.rollNoPrefix),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate"](t.batchBasicDetailsForm.value.description),u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("ngForOf",t.batchSubjectForm.get("subjects").controls))},directives:[d.x,d.z,d.u,d.w,d.sb,d.rb,i.v,i.n,i.g,d.P,i.a,i.m,i.e,i.i,a.n,d.M,a.m,d.ub,d.C,d.mb,d.fb],pipes:[a.v],styles:[""]}),y)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}],D=((j=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:j}),j.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||j)},imports:[[m.g.forChild(B)],m.g]}),j);n.d(t,"AddBatchModule",(function(){return N}));var w,N=((w=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:w}),w.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||w)},imports:[[a.c,D,d.A,d.v,d.nb,d.O,d.Q,d.L,d.D,d.tb,d.L,i.s]]}),w)}}]);