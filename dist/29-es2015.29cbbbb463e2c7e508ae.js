(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"0PO0":function(e,t,n){"use strict";n.r(t),n.d(t,"AddCourseModule",(function(){return O}));var r=n("ofXK"),a=n("3Pt+"),s=n("no5z"),o=n("fXoL"),i=n("EQut"),l=n("IAlr"),u=n("aceb"),c=n("tyNb");const m=["stepper"];function d(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," Course Name is required! "),o["\u0275\u0275elementEnd"]())}function p(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," Course Name should contain minimum 3 characters "),o["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275template"](1,d,2,0,"p",51),o["\u0275\u0275template"](2,p,2,0,"p",51),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.courseBasicDetailsForm.get("courseName").errors?null:e.courseBasicDetailsForm.get("courseName").errors.required),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.courseBasicDetailsForm.get("courseName").errors?null:e.courseBasicDetailsForm.get("courseName").errors.minlength)}}function h(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," Course Duration is required! "),o["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," Course Duration should be greater than 1 "),o["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275template"](1,h,2,0,"p",51),o["\u0275\u0275template"](2,b,2,0,"p",51),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.courseBasicDetailsForm.get("duration").errors?null:e.courseBasicDetailsForm.get("duration").errors.required),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.courseBasicDetailsForm.get("duration").errors?null:e.courseBasicDetailsForm.get("duration").errors.min)}}function v(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"nb-option",53),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275property"]("value",e._id),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](e.category)}}function f(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," Branch Category is required! "),o["\u0275\u0275elementEnd"]())}function F(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275template"](1,f,2,0,"p",51),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.courseBasicDetailsForm.get("category").errors?null:e.courseBasicDetailsForm.get("category").errors.required)}}function E(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"button",59),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"](2).deleteSubject()})),o["\u0275\u0275element"](1,"nb-icon",60),o["\u0275\u0275elementEnd"]()}}function D(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"](2).index;o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" Subject ",e+1," is required! ")}}function x(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275template"](1,D,2,1,"p",51),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]().$implicit;o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.get("subject").errors?null:e.get("subject").errors.required)}}function y(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div",54),o["\u0275\u0275elementStart"](1,"div",55),o["\u0275\u0275elementStart"](2,"label",56),o["\u0275\u0275text"](3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"nb-form-field"),o["\u0275\u0275element"](5,"input",57),o["\u0275\u0275template"](6,E,2,0,"button",58),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](7,x,2,1,"ng-container",11),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=t.index;o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("formGroup",e),o["\u0275\u0275advance"](1),o["\u0275\u0275propertyInterpolate1"]("for","input-subject-",n,""),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"]("Subject ",n+1,":"),o["\u0275\u0275advance"](2),o["\u0275\u0275propertyInterpolate1"]("id","input-subject-",n,""),o["\u0275\u0275propertyInterpolate1"]("name","subject-",n,""),o["\u0275\u0275propertyInterpolate1"]("placeholder","Subject ",n+1,""),o["\u0275\u0275property"]("status",e.get("subject").touched?e.get("subject").invalid?"danger":"success":"basic"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",0!==n),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",e.get("subject").invalid&&e.get("subject").touched)}}function C(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," Fee is required! "),o["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," Fee amount should be greater than 0 "),o["\u0275\u0275elementEnd"]())}function I(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275template"](1,C,2,0,"p",51),o["\u0275\u0275template"](2,j,2,0,"p",51),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.courseFeeDetailsForm.get("fees").errors?null:e.courseFeeDetailsForm.get("fees").errors.required),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.courseFeeDetailsForm.get("fees").errors?null:e.courseFeeDetailsForm.get("fees").errors.min)}}function w(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," GST is required! "),o["\u0275\u0275elementEnd"]())}function B(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," GST percentage should be between 0% to 100% "),o["\u0275\u0275elementEnd"]())}function T(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275template"](1,w,2,0,"p",51),o["\u0275\u0275template"](2,B,2,0,"p",51),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.courseFeeDetailsForm.get("gst").errors?null:e.courseFeeDetailsForm.get("gst").errors.required),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",(null==e.courseFeeDetailsForm.get("gst").errors?null:e.courseFeeDetailsForm.get("gst").errors.max)||(null==e.courseFeeDetailsForm.get("gst").errors?null:e.courseFeeDetailsForm.get("gst").errors.maxLength)||(null==e.courseFeeDetailsForm.get("gst").errors?null:e.courseFeeDetailsForm.get("gst").errors.min))}}function N(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," Total Fee is required, Please enter Fee Amount "),o["\u0275\u0275elementEnd"]())}function q(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",52),o["\u0275\u0275text"](1," Total Fee amount should be greater than 0 "),o["\u0275\u0275elementEnd"]())}function G(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275template"](1,N,2,0,"p",51),o["\u0275\u0275template"](2,q,2,0,"p",51),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.courseFeeDetailsForm.get("totalFees").errors?null:e.courseFeeDetailsForm.get("totalFees").errors.required),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",(null==e.courseFeeDetailsForm.get("totalFees").errors?null:e.courseFeeDetailsForm.get("totalFees").errors.min)||(null==e.courseFeeDetailsForm.get("totalFees").errors?null:e.courseFeeDetailsForm.get("totalFees").errors.minLength))}}const k=[{path:"",component:(()=>{class e{constructor(e,t,n,r,a){this.branchService=e,this.courseService=t,this.toastrService=n,this.router=r,this.route=a,this.route.queryParams.subscribe(e=>{e.mode&&this.ngOnInit()})}ngOnInit(){if(this.loading=!0,this.submit=!1,this.branchId=this.branchService.getBranchId(),!this.branchId)return void this.back();let e;return this.courseId=this.courseService.getCourseId(),this.route.queryParams.subscribe(t=>{e=t.mode}),e&&"edit"!==e?(this.showToastr("top-right","danger","Invalid Route"),void this.router.navigate(["../page-not-found"],{relativeTo:this.route})):e&&!this.courseId?(this.showToastr("top-right","danger","Course Not Available"),void this.router.navigate(["../page-not-found"],{relativeTo:this.route})):(this.courseBasicDetailsForm=new a.f({courseName:new a.d(null,{validators:[a.u.required]}),duration:new a.d(null,{validators:[a.u.required,a.u.maxLength(2),a.u.min(1),a.u.max(99)]}),category:new a.d("",{validators:[a.u.required]}),description:new a.d(null,{validators:[]})}),this.courseSubjectForm=new a.f({subjects:new a.b([])},{validators:this.atLeastOneSubjectValidator.bind(this)}),this.courseFeeDetailsForm=new a.f({fees:new a.d(null,{validators:[a.u.required,a.u.min(0)]}),gst:new a.d("0",{validators:[a.u.required,a.u.maxLength(3),a.u.min(0),a.u.max(100)]}),totalFees:new a.d(null,{validators:[a.u.required]})}),this.getCategories(),this.inclusiveGST=!1,void(this.courseId?this.courseService.getCourseForEditing(this.courseId).subscribe(e=>{e?(this.course=e,this.courseBasicDetailsForm.patchValue({courseName:e.basicDetails.courseName,duration:e.basicDetails.duration,category:e.basicDetails.category,description:e.basicDetails.description}),this.courseFeeDetailsForm.patchValue({fees:e.feeDetails.fees,gst:e.feeDetails.gst}),this.inclusiveGST=e.feeDetails.inclusiveGST,this.calculateTotal(),this.getSubjects().controls=[],this.course.subjects.forEach(e=>{this.addSubject(e)}),this.loading=!1):this.router.navigate(["../page-not-found"],{relativeTo:this.route})},e=>{this.router.navigate(["../page-not-found"],{relativeTo:this.route})}):(this.generateSubject(),this.loading=!1)))}getCategories(){this.branchService.getBranchData().subscribe(e=>{e&&(this.categories=e.categories)}),this.categories||this.branchService.getBranch(this.branchId).subscribe(e=>{this.branchService.setBranchData(e),this.categories=e.categories},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}atLeastOneSubjectValidator(e){let t=!1;return e.value.subjects.forEach(e=>{e.status&&(t=!0)}),t?null:{atLeastOneSubjectError:!0}}getSubjects(){return this.courseSubjectForm.get("subjects")}newSubject(e){return new a.f({_id:new a.d(e._id?e._id:(new s.a).toString(),{validators:[a.u.required]}),subject:new a.d(e.subject?e.subject:null,{validators:[a.u.required]}),status:new a.d(e.status,{validators:[]})})}addSubject(e){this.getSubjects().push(this.newSubject(e))}generateSubject(){const e={_id:(new s.a).toString(),subject:"",status:!0};this.addSubject(e)}deleteSubject(e){0!==e&&1!==e&&this.getSubjects().removeAt(e)}inclusiveGSTChanged(e){this.inclusiveGST=e,this.calculateTotal()}calculateTotal(){const e=this.courseFeeDetailsForm.value.fees,t=this.courseFeeDetailsForm.value.gst;if(this.inclusiveGST)return void this.courseFeeDetailsForm.patchValue({totalFees:e});const n=(+e+ +e/100*+t).toString();this.courseFeeDetailsForm.patchValue({totalFees:n})}submitBasicDetails(){this.courseBasicDetailsForm.markAllAsTouched(),this.courseBasicDetailsForm.invalid?this.showToastr("top-right","danger","Basic details are required"):this.stepper.next()}submitSubjects(){this.courseSubjectForm.markAllAsTouched(),this.courseSubjectForm.invalid?this.showToastr("top-right","danger","At least 1 Subject is required"):this.stepper.next()}submitFeeDetails(){this.courseFeeDetailsForm.markAllAsTouched(),this.courseFeeDetailsForm.invalid?this.showToastr("top-right","danger","Fee details are required"):this.stepper.next()}saveCourse(){if(this.courseBasicDetailsForm.markAllAsTouched(),this.courseSubjectForm.markAllAsTouched(),this.courseFeeDetailsForm.markAllAsTouched(),this.courseBasicDetailsForm.invalid)return void this.showToastr("top-right","danger","Basic details are required");if(this.courseSubjectForm.invalid)return void this.showToastr("top-right","danger","At least 1 Subject is required");if(this.courseFeeDetailsForm.invalid)return void this.showToastr("top-right","danger","Fee Details are required");this.submit=!0;const e={branch:this.branchId,basicDetails:this.courseBasicDetailsForm.value,subjects:this.courseSubjectForm.value.subjects,feeDetails:this.courseFeeDetailsForm.value};e.feeDetails.inclusiveGST=this.inclusiveGST,this.course?(e._id=this.course._id,this.courseService.editCourse(e).subscribe(e=>{this.showToastr("top-right","success","Course Updated Successfully!"),this.back()},e=>{this.showToastr("top-right","danger",e),this.submit=!1})):this.courseService.addCourse(e).subscribe(e=>{this.showToastr("top-right","success","New Course Added Successfully!"),this.back()},e=>{this.showToastr("top-right","danger",e),this.submit=!1})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}getGstAmount(){const e=this.courseFeeDetailsForm.getRawValue().totalFees;return Math.round(e-e/(1+this.courseFeeDetailsForm.value.gst/100)).toString()}getCategory(e){const t=this.categories.find(t=>t._id===e);return t?t.category:"--"}getSubjectsData(){const e=[];return this.courseSubjectForm.value.subjects.forEach(t=>{e.push(t.subject)}),e.join(", ")}back(){this.router.navigate(["../"],{relativeTo:this.route,replaceUrl:!0})}ngOnDestroy(){this.courseService.deleteCourseId()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](i.a),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](u.Gb),o["\u0275\u0275directiveInject"](c.c),o["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-add-course"]],viewQuery:function(e,t){var n;1&e&&o["\u0275\u0275viewQuery"](m,!0),2&e&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(t.stepper=n.first)},decls:170,vars:37,consts:[["nbButton","","size","small","status","warning",1,"float-right",3,"click"],[1,""],[3,"linear"],["stepper",""],["label","Basic Details",3,"stepControl"],[1,"",3,"formGroup","submit"],[1,"row"],[1,"col-md-5"],[1,"form-control-group"],["for","input -course-name",1,"label"],["type","text","nbInput","","id","input-course-name","name","courseName","formControlName","courseName","placeholder","Course Name","minlength","3","maxlength","30","fullWidth","",3,"status"],[4,"ngIf"],[1,"col-md-3"],["for","input-duration",1,"label"],["type","number","nbInput","","id","input-duration","name","duration","min","1","maxlength","2","formControlName","duration","placeholder","Duration (in Months)","fullWidth","",3,"status"],[1,"col-md-4"],["for","input-billing-category",1,"label"],["id","input-category","name","category","formControlName","category","placeholder","Select Category","fullWidth","",3,"status"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-12"],["for","input-billing-description",1,"label"],["type","text","nbInput","","id","input-description","name","description","formControlName","description","placeholder","Description (Optional)","fullWidth",""],[1,"col-md-12","text-right"],["nbButton","","size","small","type","submit"],["icon","arrow-ios-forward-outline"],["label","Subject Details",3,"stepControl"],[1,"step-container",3,"formGroup","ngSubmit"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4","mb-3"],["type","button","nbButton","","size","small","fullWidth","",3,"click"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"col-6","text-left"],["nbButton","","size","small","nbStepperPrevious","",1,""],["icon","arrow-ios-back-outline"],[1,"col-6","text-right"],["label","Fee Details",3,"stepControl"],["for","input-fees",1,"label"],["type","number","nbInput","","id","input-fees","name","fees","min","0","formControlName","fees","placeholder","fees","fullWidth","",3,"status","input"],[1,"form-control-group","mt-4"],["id","input-inclusive-GST","name","inclusiveGST",3,"checked","checkedChange"],["for","input-gst",1,"label"],["type","number","nbInput","","id","input-gst","name","gst","min","0","max","100","maxlength","3","formControlName","gst","placeholder","GST (in %)","fullWidth","",3,"status","input"],["for","input-total-fees",1,"label"],["type","number","nbInput","","id","input-total-fees","name","totalFees","formControlName","totalFees","placeholder","Total Fees","fullWidth","","disabled","true",3,"status"],["label","Submit"],[1,"step-container"],[1,"table-responsive"],[1,"table","table-bordered"],["nbButton","","size","small","nbStepperPrevious","",1,"",3,"disabled"],["nbButton","","size","small","nbSpinnerStatus","primary","nbSpinnerSize","small",3,"disabled","nbSpinner","click"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[3,"value"],[1,"col-md-6"],[1,"form-control-group",3,"formGroup"],[1,"label",3,"for"],["type","text","nbInput","","formControlName","subject","fullWidth","",3,"id","name","placeholder","status"],["nbSuffix","","nbButton","","size","small","ghost","",3,"click",4,"ngIf"],["nbSuffix","","nbButton","","size","small","ghost","",3,"click"],["icon","minus-outline","status","danger"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"nb-card"),o["\u0275\u0275elementStart"](1,"nb-card-header"),o["\u0275\u0275elementStart"](2,"button",0),o["\u0275\u0275listener"]("click",(function(){return t.back()})),o["\u0275\u0275text"](3," Back "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"h3",1),o["\u0275\u0275text"](5),o["\u0275\u0275pipe"](6,"uppercase"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"nb-card-body"),o["\u0275\u0275elementStart"](8,"nb-stepper",2,3),o["\u0275\u0275elementStart"](10,"nb-step",4),o["\u0275\u0275elementStart"](11,"form",5),o["\u0275\u0275listener"]("submit",(function(){return t.submitBasicDetails()})),o["\u0275\u0275elementStart"](12,"h6"),o["\u0275\u0275text"](13,"Course Details:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"div",6),o["\u0275\u0275elementStart"](15,"div",7),o["\u0275\u0275elementStart"](16,"div",8),o["\u0275\u0275elementStart"](17,"label",9),o["\u0275\u0275text"](18,"Course Name:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](19,"input",10),o["\u0275\u0275template"](20,g,3,2,"ng-container",11),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"div",12),o["\u0275\u0275elementStart"](22,"div",8),o["\u0275\u0275elementStart"](23,"label",13),o["\u0275\u0275text"](24,"Course Duration:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](25,"input",14),o["\u0275\u0275template"](26,S,3,2,"ng-container",11),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](27,"div",15),o["\u0275\u0275elementStart"](28,"div",8),o["\u0275\u0275elementStart"](29,"label",16),o["\u0275\u0275text"](30,"Category:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](31,"nb-select",17),o["\u0275\u0275elementStart"](32,"nb-option",18),o["\u0275\u0275text"](33,"Select Category"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](34,v,2,2,"nb-option",19),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](35,F,2,1,"ng-container",11),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](36,"div",20),o["\u0275\u0275elementStart"](37,"div",8),o["\u0275\u0275elementStart"](38,"label",21),o["\u0275\u0275text"](39,"Description:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](40,"textarea",22),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](41,"hr"),o["\u0275\u0275elementStart"](42,"div",6),o["\u0275\u0275elementStart"](43,"div",23),o["\u0275\u0275elementStart"](44,"button",24),o["\u0275\u0275elementStart"](45,"span"),o["\u0275\u0275text"](46,"Next"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](47,"nb-icon",25),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](48,"nb-step",26),o["\u0275\u0275elementStart"](49,"form",27),o["\u0275\u0275listener"]("ngSubmit",(function(){return t.submitSubjects()})),o["\u0275\u0275elementStart"](50,"div",6),o["\u0275\u0275elementStart"](51,"div",28),o["\u0275\u0275elementStart"](52,"p"),o["\u0275\u0275text"](53,"Click on following button to add more Subjects"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](54,"div",29),o["\u0275\u0275elementStart"](55,"button",30),o["\u0275\u0275listener"]("click",(function(){return t.generateSubject()})),o["\u0275\u0275text"](56," Add Subject "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](57,"div",6),o["\u0275\u0275template"](58,y,8,9,"div",31),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](59,"hr"),o["\u0275\u0275elementStart"](60,"div",6),o["\u0275\u0275elementStart"](61,"div",32),o["\u0275\u0275elementStart"](62,"button",33),o["\u0275\u0275element"](63,"nb-icon",34),o["\u0275\u0275elementStart"](64,"span"),o["\u0275\u0275text"](65,"prev"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](66,"div",35),o["\u0275\u0275elementStart"](67,"button",24),o["\u0275\u0275elementStart"](68,"span"),o["\u0275\u0275text"](69,"Next"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](70,"nb-icon",25),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](71,"nb-step",36),o["\u0275\u0275elementStart"](72,"form",27),o["\u0275\u0275listener"]("ngSubmit",(function(){return t.submitFeeDetails()})),o["\u0275\u0275elementStart"](73,"div",6),o["\u0275\u0275elementStart"](74,"div",12),o["\u0275\u0275elementStart"](75,"div",8),o["\u0275\u0275elementStart"](76,"label",37),o["\u0275\u0275text"](77,"Fees:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](78,"input",38),o["\u0275\u0275listener"]("input",(function(){return t.calculateTotal()})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](79,I,3,2,"ng-container",11),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](80,"div",12),o["\u0275\u0275elementStart"](81,"div",39),o["\u0275\u0275elementStart"](82,"nb-checkbox",40),o["\u0275\u0275listener"]("checkedChange",(function(e){return t.inclusiveGSTChanged(e)})),o["\u0275\u0275text"](83," Inclusive GST "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](84,"div",12),o["\u0275\u0275elementStart"](85,"div",8),o["\u0275\u0275elementStart"](86,"label",41),o["\u0275\u0275text"](87,"GST (in %):"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](88,"input",42),o["\u0275\u0275listener"]("input",(function(){return t.calculateTotal()})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](89,T,3,2,"ng-container",11),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](90,"div",12),o["\u0275\u0275elementStart"](91,"div",8),o["\u0275\u0275elementStart"](92,"label",43),o["\u0275\u0275text"](93,"Total Fees:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](94,"input",44),o["\u0275\u0275template"](95,G,3,2,"ng-container",11),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](96,"hr"),o["\u0275\u0275elementStart"](97,"div",6),o["\u0275\u0275elementStart"](98,"div",32),o["\u0275\u0275elementStart"](99,"button",33),o["\u0275\u0275element"](100,"nb-icon",34),o["\u0275\u0275elementStart"](101,"span"),o["\u0275\u0275text"](102,"prev"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](103,"div",35),o["\u0275\u0275elementStart"](104,"button",24),o["\u0275\u0275elementStart"](105,"span"),o["\u0275\u0275text"](106,"Next"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](107,"span"),o["\u0275\u0275element"](108,"nb-icon",25),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](109,"nb-step",45),o["\u0275\u0275elementStart"](110,"div",46),o["\u0275\u0275elementStart"](111,"div",47),o["\u0275\u0275elementStart"](112,"table",48),o["\u0275\u0275elementStart"](113,"tbody"),o["\u0275\u0275elementStart"](114,"tr"),o["\u0275\u0275elementStart"](115,"th"),o["\u0275\u0275text"](116,"Course Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](117,"td"),o["\u0275\u0275text"](118),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](119,"tr"),o["\u0275\u0275elementStart"](120,"th"),o["\u0275\u0275text"](121,"Course Duration"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](122,"td"),o["\u0275\u0275text"](123),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](124,"tr"),o["\u0275\u0275elementStart"](125,"th"),o["\u0275\u0275text"](126,"Category"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](127,"td"),o["\u0275\u0275text"](128),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](129,"tr"),o["\u0275\u0275elementStart"](130,"th"),o["\u0275\u0275text"](131,"Description"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](132,"td"),o["\u0275\u0275text"](133),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](134,"tr"),o["\u0275\u0275elementStart"](135,"th"),o["\u0275\u0275text"](136,"Subjects"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](137,"td"),o["\u0275\u0275text"](138),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](139,"tr"),o["\u0275\u0275elementStart"](140,"th"),o["\u0275\u0275text"](141,"Fees"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](142,"td"),o["\u0275\u0275text"](143),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](144,"tr"),o["\u0275\u0275elementStart"](145,"th"),o["\u0275\u0275text"](146,"GST (in %)"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](147,"td"),o["\u0275\u0275text"](148),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](149,"tr"),o["\u0275\u0275elementStart"](150,"th"),o["\u0275\u0275text"](151,"GST Amount"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](152,"td"),o["\u0275\u0275text"](153),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](154,"tr"),o["\u0275\u0275elementStart"](155,"th"),o["\u0275\u0275text"](156,"Total Fees"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](157,"td"),o["\u0275\u0275text"](158),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](159,"hr"),o["\u0275\u0275elementStart"](160,"div",6),o["\u0275\u0275elementStart"](161,"div",32),o["\u0275\u0275elementStart"](162,"button",49),o["\u0275\u0275element"](163,"nb-icon",34),o["\u0275\u0275elementStart"](164,"span"),o["\u0275\u0275text"](165,"prev"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](166,"div",35),o["\u0275\u0275elementStart"](167,"button",50),o["\u0275\u0275listener"]("click",(function(){return t.saveCourse()})),o["\u0275\u0275elementStart"](168,"span"),o["\u0275\u0275text"](169,"Submit"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"](" ",t.course?"Edit Course "+o["\u0275\u0275pipeBind1"](6,35,t.course.basicDetails.courseName):"Add New Course"," "),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("linear",!0),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("stepControl",t.courseBasicDetailsForm),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("formGroup",t.courseBasicDetailsForm),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("status",t.courseBasicDetailsForm.get("courseName").touched?t.courseBasicDetailsForm.get("courseName").invalid?"danger":"success":"basic"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.courseBasicDetailsForm.get("courseName").invalid&&t.courseBasicDetailsForm.get("courseName").touched),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("status",t.courseBasicDetailsForm.get("duration").touched?t.courseBasicDetailsForm.get("duration").invalid?"danger":"success":"basic"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.courseBasicDetailsForm.get("duration").invalid&&t.courseBasicDetailsForm.get("duration").touched),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("status",t.courseBasicDetailsForm.get("category").touched?t.courseBasicDetailsForm.get("category").invalid?"danger":"success":"basic"),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngForOf",t.categories),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.courseBasicDetailsForm.get("category").invalid&&t.courseBasicDetailsForm.get("category").touched),o["\u0275\u0275advance"](13),o["\u0275\u0275property"]("stepControl",t.courseSubjectForm),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("formGroup",t.courseSubjectForm),o["\u0275\u0275advance"](9),o["\u0275\u0275property"]("ngForOf",t.courseSubjectForm.get("subjects").controls),o["\u0275\u0275advance"](13),o["\u0275\u0275property"]("stepControl",t.courseFeeDetailsForm),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("formGroup",t.courseFeeDetailsForm),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("status",t.courseFeeDetailsForm.get("fees").touched?t.courseFeeDetailsForm.get("fees").invalid?"danger":"success":"basic"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.courseFeeDetailsForm.get("fees").invalid&&t.courseFeeDetailsForm.get("fees").touched),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("checked",t.inclusiveGST),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("status",t.courseFeeDetailsForm.get("gst").touched&&t.courseFeeDetailsForm.get("gst").invalid?"danger":"basic"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.courseFeeDetailsForm.get("gst").invalid&&t.courseFeeDetailsForm.get("gst").touched),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("status",t.courseFeeDetailsForm.get("totalFees").touched&&t.courseFeeDetailsForm.get("totalFees").invalid?"danger":"basic"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.courseFeeDetailsForm.get("totalFees").invalid&&t.courseFeeDetailsForm.get("totalFees").touched),o["\u0275\u0275advance"](23),o["\u0275\u0275textInterpolate"](t.courseBasicDetailsForm.value.courseName),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"]("",t.courseBasicDetailsForm.value.duration," Month/s"),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](t.getCategory(t.courseBasicDetailsForm.value.category)),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"](" ",t.courseBasicDetailsForm.value.description?t.courseBasicDetailsForm.value.description:"--"," "),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](t.getSubjectsData()),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](t.courseFeeDetailsForm.value.fees),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"]("",t.courseFeeDetailsForm.value.gst," %"),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate1"](" ",t.inclusiveGST?t.getGstAmount()+" Included in Fee Amount":t.getGstAmount()," "),o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](t.courseFeeDetailsForm.value.totalFees),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("disabled",t.submit),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("disabled",t.submit)("nbSpinner",t.submit))},directives:[u.y,u.A,u.v,u.x,u.vb,u.ub,a.v,a.n,a.g,u.Q,a.a,a.m,a.e,a.j,a.i,r.n,a.q,u.nb,u.gb,r.m,u.N,u.xb,u.D,u.sb,u.L,u.yb],pipes:[r.w],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found",pathMatch:"full"}];let A=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.g.forChild(k)],c.g]}),e})(),O=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,A,u.B,u.w,u.ob,u.P,u.R,u.M,u.E,u.tb,u.wb,u.M,a.s]]}),e})()}}]);
//# sourceMappingURL=29-es2015.29cbbbb463e2c7e508ae.js.map