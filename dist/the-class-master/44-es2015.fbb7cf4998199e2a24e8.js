(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{DLXF:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("3Pt+"),s=n("aceb"),r=n("ofXK"),o=n("tyNb"),c=n("fXoL");const u=[];let a=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.g.forChild(u)],o.g]}),e})(),l=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,a,s.B,s.w,s.tb,s.R,s.P,i.s]]}),e})()},c9j8:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n("3Pt+"),s=n("fXoL"),r=n("aceb"),o=n("EQut"),c=n("7kqb"),u=n("K8P5"),a=n("ofXK");function l(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p",14),s["\u0275\u0275text"](1," Question is required! "),s["\u0275\u0275elementEnd"]())}function d(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,l,2,0,"p",13),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==e.lectureQuestionForm.get("question").errors?null:e.lectureQuestionForm.get("question").errors.required)}}let h=(()=>{class e{constructor(e,t,n,i,s){this.toastrService=e,this.branchService=t,this.lectureService=n,this.questionAnswersService=i,this.ref=s}ngOnInit(){this.loading=!0,this.submit=!1,this.branchId=this.branchService.getBranchId(),this.branchId?(this.lectureQuestionForm=new i.f({question:new i.d(null,{validators:[i.u.required]})}),this.questionAnswersService.getQuestion().subscribe(e=>{this.lectureQuestion=e,e&&this.lectureQuestionForm.patchValue({question:this.lectureQuestion.question})}),this.lectureService.getLectureData().subscribe(e=>{this.lecture=e,this.lecture?this.loading=!1:this.onClose()})):this.onClose()}saveLectureQuestion(){if(this.lectureQuestionForm.markAllAsTouched(),this.lectureQuestionForm.invalid)return void this.showToastr("top-right","danger","Question is Required");this.submit=!0;const e=this.lectureQuestionForm.value.question,t={branch:this.branchId,category:this.lecture.category,course:this.lecture.course,batch:this.lecture.batch,lecture:this.lecture._id,question:e};this.lectureQuestion?(t._id=this.lectureQuestion._id,this.questionAnswersService.editLectureQuestion(t).subscribe(t=>{this.lectureQuestion.question=e,this.showToastr("top-right","success","Question Updated Successfully!"),this.ref.close(this.lectureQuestion)},e=>{this.showToastr("top-right","danger",e),this.submit=!1})):this.questionAnswersService.newLectureQuestion(t).subscribe(e=>{this.showToastr("top-right","success","New Question Added Successfully!"),this.ref.close(e)},e=>{this.showToastr("top-right","danger",e),this.submit=!1})}onClose(){this.ref.close()}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}ngOnDestroy(){this.questionAnswersService.deleteQuestionId(),this.questionAnswersService.deleteQuestion()}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](r.Gb),s["\u0275\u0275directiveInject"](o.a),s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](r.J))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-add-question"]],decls:22,vars:7,consts:[[1,"question-box"],["icon","close-outline",1,"float-right","pointer",3,"click"],[3,"formGroup","submit"],[1,"row"],[1,"col-12"],[1,"form-control-group"],["for","input-question",1,"label"],["type","text","nbInput","","id","input-question","name","question","formControlName","question","placeholder","Question","fullWidth","",3,"status"],[4,"ngIf"],[1,"col-6"],["type","button","nbButton","","size","small","status","danger",3,"disabled","click"],[1,"col-6","text-right"],["type","submit","nbButton","","size","small","status","success","nbSpinnerStatus","primary","nbSpinnerSize","small",3,"disabled","nbSpinner"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card",0),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"nb-icon",1),s["\u0275\u0275listener"]("click",(function(){return t.onClose()})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"h3"),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"nb-card-body"),s["\u0275\u0275elementStart"](6,"form",2),s["\u0275\u0275listener"]("submit",(function(){return t.saveLectureQuestion()})),s["\u0275\u0275elementStart"](7,"div",3),s["\u0275\u0275elementStart"](8,"div",4),s["\u0275\u0275elementStart"](9,"div",5),s["\u0275\u0275elementStart"](10,"label",6),s["\u0275\u0275text"](11,"Question:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](12,"textarea",7),s["\u0275\u0275template"](13,d,2,1,"ng-container",8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](14,"hr"),s["\u0275\u0275elementStart"](15,"div",3),s["\u0275\u0275elementStart"](16,"div",9),s["\u0275\u0275elementStart"](17,"button",10),s["\u0275\u0275listener"]("click",(function(){return t.onClose()})),s["\u0275\u0275text"](18," Cancel "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"div",11),s["\u0275\u0275elementStart"](20,"button",12),s["\u0275\u0275text"](21," Save "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](4),s["\u0275\u0275textInterpolate1"]("",t.lectureQuestion?"Edit":"New"," Question"),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("formGroup",t.lectureQuestionForm),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("status",t.lectureQuestionForm.get("question").touched?t.lectureQuestionForm.get("question").invalid?"danger":"success":"basic"),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.lectureQuestionForm.get("question").invalid&&t.lectureQuestionForm.get("question").touched),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("disabled",t.submit),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("disabled",t.submit)("nbSpinner",t.submit))},directives:[r.y,r.A,r.N,r.x,i.v,i.n,i.g,r.Q,i.a,i.m,i.e,a.n,r.v,r.sb],styles:[".question-box[_ngcontent-%COMP%]{width:60vw;height:auto}@media only screen and (max-width:1200px){.question-box[_ngcontent-%COMP%]{width:65vw}}@media only screen and (max-width:840px){.question-box[_ngcontent-%COMP%]{width:70vw}}@media only screen and (max-width:420px){.question-box[_ngcontent-%COMP%]{width:90vw}}@media only screen and (max-width:300px){.question-box[_ngcontent-%COMP%]{top:2vh;left:2vw;width:96vw}}"]}),e})()},wPrP:function(e,t,n){"use strict";n.r(t),n.d(t,"QuestionAnswersModule",(function(){return I}));var i=n("DLXF"),s=n("aceb"),r=n("ofXK"),o=n("c9j8"),c=n("fXoL"),u=n("nwtg"),a=n("EQut"),l=n("7kqb"),d=n("K8P5"),h=n("tyNb"),m=n("ZatZ");function p(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"button",19),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]().$implicit;return c["\u0275\u0275nextContext"](3).editQuestion(t)})),c["\u0275\u0275text"](1," Edit "),c["\u0275\u0275elementEnd"]()}}function b(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"button",20),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const t=c["\u0275\u0275nextContext"]().$implicit;return c["\u0275\u0275nextContext"](3).deleteQuestion(t._id)})),c["\u0275\u0275text"](1," Delete "),c["\u0275\u0275elementEnd"]()}}function v(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"div",0),c["\u0275\u0275elementStart"](3,"div",12),c["\u0275\u0275element"](4,"nb-user",13),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"div",14),c["\u0275\u0275template"](6,p,2,0,"button",15),c["\u0275\u0275elementStart"](7,"button",16),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=t.$implicit;return c["\u0275\u0275nextContext"](3).viewQuestionAnswer(n)})),c["\u0275\u0275text"](8," View "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](9,b,2,0,"button",17),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"nb-card-body"),c["\u0275\u0275element"](11,"div",18),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=c["\u0275\u0275nextContext"](3);c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("name",e.name?e.name:"Unknown")("title",n.formatQuestionAnswerDate(e.createdAt)),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",e.createdBy===n.user.imsMasterId),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf",e.createdBy===n.user.imsMasterId),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("innerHTML",e.question,c["\u0275\u0275sanitizeHtml"])}}function f(e,t){if(1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275template"](1,v,12,5,"nb-card",11),c["\u0275\u0275elementContainerEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",e.questionsAnswers)}}function g(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",21),c["\u0275\u0275text"](1,"You are first to Ask the Question"),c["\u0275\u0275elementEnd"]())}function w(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",8),c["\u0275\u0275template"](2,f,2,1,"ng-container",9),c["\u0275\u0275template"](3,g,2,0,"ng-template",null,10,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275reference"](4),t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngIf",t.questionsAnswers.length>0)("ngIfElse",e)}}function S(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"p",21),c["\u0275\u0275text"](1,"Loading..."),c["\u0275\u0275elementEnd"]())}const Q=[{path:"",component:(()=>{class e{constructor(e,t,n,i,s,r,o,c,u){this.authService=e,this.branchService=t,this.lectureService=n,this.questionAnswerService=i,this.toastrService=s,this.router=r,this.route=o,this.dialogService=c,this.dateService=u}ngOnInit(){this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.editLectureQuestion=!1,this.user=this.authService.getUserData(),this.questionsAnswers=[],this.lectureService.getLectureData().subscribe(e=>{this.lecture=e,this.lecture?this.getQuestionAnswers():this.back()})):this.back()}getQuestionAnswers(){this.loading=!0,this.questionAnswerService.getLectureQuestionAnswers(this.branchId,this.lecture.category,this.lecture.course,this.lecture.batch,this.lecture._id).subscribe(e=>{this.questionsAnswers=e,this.loading=!1},e=>{this.loading=!1})}addQuestion(){this.openQuestionDialog()}openQuestionDialog(){this.dialogService.open(o.a,{context:{}}).onClose.subscribe(e=>e&&this.saveLectureQuestion(e))}editQuestion(e){this.questionAnswerService.setQuestionId(e._id),this.questionAnswerService.setQuestion(e),this.editLectureQuestion=!0,this.openQuestionDialog()}formatQuestionAnswerDate(e){return this.dateService.convertToDate(e).toString().substr(0,21)}deleteQuestion(e,t){this.loading=!0,this.questionAnswerService.deleteLectureQuestion(e).subscribe(e=>{this.questionsAnswers.splice(t,1),this.showToastr("top-right","success","Question Deleted Successfully!"),this.loading=!1},e=>{this.showToastr("top-right","danger",e),this.loading=!1})}viewQuestionAnswer(e){this.questionAnswerService.setQuestionAnswersId(e._id),this.questionAnswerService.setQuestionAnswers(e),this.router.navigate(["./view"],{relativeTo:this.route})}saveLectureQuestion(e){if(this.editLectureQuestion){const t=this.questionsAnswers.findIndex(t=>t._id===e._id);t>=0&&(this.questionsAnswers[t]=e),this.editLectureQuestion=!1}else e.name=this.user.name,this.questionsAnswers.push(e)}back(){this.router.navigate(["../"],{relativeTo:this.route})}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](u.a),c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](d.a),c["\u0275\u0275directiveInject"](s.Gb),c["\u0275\u0275directiveInject"](h.c),c["\u0275\u0275directiveInject"](h.a),c["\u0275\u0275directiveInject"](s.K),c["\u0275\u0275directiveInject"](m.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-question-answers"]],decls:14,vars:2,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","size","small","status","primary","fullWidth","",3,"click"],["icon","plus-circle-outline"],[1,"body-container"],["class","row",4,"ngIf","ngIfElse"],["loadingData",""],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["noQuestions",""],[4,"ngFor","ngForOf"],[1,"col-md-6","col-12"],[3,"name","title"],[1,"col-md-6","col-12","text-right"],["class","mr-3","nbButton","","size","small","status","basic",3,"click",4,"ngIf"],["nbButton","","size","small","status","primary",1,"mr-3",3,"click"],["class","mr-3","nbButton","","size","small","status","danger",3,"click",4,"ngIf"],[3,"innerHTML"],["nbButton","","size","small","status","basic",1,"mr-3",3,"click"],["nbButton","","size","small","status","danger",1,"mr-3",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"div",0),c["\u0275\u0275elementStart"](3,"div",1),c["\u0275\u0275elementStart"](4,"h3"),c["\u0275\u0275text"](5,"Question & Answers"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"div",2),c["\u0275\u0275elementStart"](7,"button",3),c["\u0275\u0275listener"]("click",(function(){return t.addQuestion()})),c["\u0275\u0275text"](8," Add Question "),c["\u0275\u0275element"](9,"nb-icon",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"nb-card-body",5),c["\u0275\u0275template"](11,w,5,2,"div",6),c["\u0275\u0275template"](12,S,2,0,"ng-template",null,7,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275reference"](13);c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",e)}},directives:[s.y,s.A,s.v,s.N,s.x,r.n,r.m,s.Kb],styles:[""]}),e})()},{path:"view",loadChildren:()=>n.e(243).then(n.bind(null,"atI5")).then(e=>e.ViewQuestionAnswersModule)},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found"}];let x=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[h.g.forChild(Q)],h.g]}),e})(),I=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,x,i.a,s.B,s.w,s.P,s.Lb]]}),e})()}}]);
//# sourceMappingURL=44-es2015.fbb7cf4998199e2a24e8.js.map