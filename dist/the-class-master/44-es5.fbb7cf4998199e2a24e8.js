!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{DLXF:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var r,s,o=i("3Pt+"),u=i("aceb"),c=i("ofXK"),a=i("tyNb"),l=i("fXoL"),d=[],m=((s=function e(){n(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:s}),s.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||s)},imports:[[a.g.forChild(d)],a.g]}),s),h=((r=function e(){n(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[c.c,m,u.B,u.w,u.tb,u.R,u.P,o.s]]}),r)},c9j8:function(e,i,r){"use strict";r.d(i,"a",(function(){return f}));var s=r("3Pt+"),o=r("fXoL"),u=r("aceb"),c=r("EQut"),a=r("7kqb"),l=r("K8P5"),d=r("ofXK");function m(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p",14),o["\u0275\u0275text"](1," Question is required! "),o["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275template"](1,m,2,0,"p",13),o["\u0275\u0275elementContainerEnd"]()),2&e){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==n.lectureQuestionForm.get("question").errors?null:n.lectureQuestionForm.get("question").errors.required)}}var f=function(){var e=function(){function e(t,i,r,s,o){n(this,e),this.toastrService=t,this.branchService=i,this.lectureService=r,this.questionAnswersService=s,this.ref=o}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.submit=!1,this.branchId=this.branchService.getBranchId(),this.branchId?(this.lectureQuestionForm=new s.f({question:new s.d(null,{validators:[s.u.required]})}),this.questionAnswersService.getQuestion().subscribe((function(t){e.lectureQuestion=t,t&&e.lectureQuestionForm.patchValue({question:e.lectureQuestion.question})})),this.lectureService.getLectureData().subscribe((function(t){e.lecture=t,e.lecture?e.loading=!1:e.onClose()}))):this.onClose()}},{key:"saveLectureQuestion",value:function(){var e=this;if(this.lectureQuestionForm.markAllAsTouched(),this.lectureQuestionForm.invalid)this.showToastr("top-right","danger","Question is Required");else{this.submit=!0;var t=this.lectureQuestionForm.value.question,n={branch:this.branchId,category:this.lecture.category,course:this.lecture.course,batch:this.lecture.batch,lecture:this.lecture._id,question:t};this.lectureQuestion?(n._id=this.lectureQuestion._id,this.questionAnswersService.editLectureQuestion(n).subscribe((function(n){e.lectureQuestion.question=t,e.showToastr("top-right","success","Question Updated Successfully!"),e.ref.close(e.lectureQuestion)}),(function(t){e.showToastr("top-right","danger",t),e.submit=!1}))):this.questionAnswersService.newLectureQuestion(n).subscribe((function(t){e.showToastr("top-right","success","New Question Added Successfully!"),e.ref.close(t)}),(function(t){e.showToastr("top-right","danger",t),e.submit=!1}))}}},{key:"onClose",value:function(){this.ref.close()}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"ngOnDestroy",value:function(){this.questionAnswersService.deleteQuestionId(),this.questionAnswersService.deleteQuestion()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](u.Gb),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](l.a),o["\u0275\u0275directiveInject"](u.J))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-add-question"]],decls:22,vars:7,consts:[[1,"question-box"],["icon","close-outline",1,"float-right","pointer",3,"click"],[3,"formGroup","submit"],[1,"row"],[1,"col-12"],[1,"form-control-group"],["for","input-question",1,"label"],["type","text","nbInput","","id","input-question","name","question","formControlName","question","placeholder","Question","fullWidth","",3,"status"],[4,"ngIf"],[1,"col-6"],["type","button","nbButton","","size","small","status","danger",3,"disabled","click"],[1,"col-6","text-right"],["type","submit","nbButton","","size","small","status","success","nbSpinnerStatus","primary","nbSpinnerSize","small",3,"disabled","nbSpinner"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"nb-card",0),o["\u0275\u0275elementStart"](1,"nb-card-header"),o["\u0275\u0275elementStart"](2,"nb-icon",1),o["\u0275\u0275listener"]("click",(function(){return t.onClose()})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"h3"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"nb-card-body"),o["\u0275\u0275elementStart"](6,"form",2),o["\u0275\u0275listener"]("submit",(function(){return t.saveLectureQuestion()})),o["\u0275\u0275elementStart"](7,"div",3),o["\u0275\u0275elementStart"](8,"div",4),o["\u0275\u0275elementStart"](9,"div",5),o["\u0275\u0275elementStart"](10,"label",6),o["\u0275\u0275text"](11,"Question:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](12,"textarea",7),o["\u0275\u0275template"](13,h,2,1,"ng-container",8),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](14,"hr"),o["\u0275\u0275elementStart"](15,"div",3),o["\u0275\u0275elementStart"](16,"div",9),o["\u0275\u0275elementStart"](17,"button",10),o["\u0275\u0275listener"]("click",(function(){return t.onClose()})),o["\u0275\u0275text"](18," Cancel "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](19,"div",11),o["\u0275\u0275elementStart"](20,"button",12),o["\u0275\u0275text"](21," Save "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate1"]("",t.lectureQuestion?"Edit":"New"," Question"),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("formGroup",t.lectureQuestionForm),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("status",t.lectureQuestionForm.get("question").touched?t.lectureQuestionForm.get("question").invalid?"danger":"success":"basic"),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",t.lectureQuestionForm.get("question").invalid&&t.lectureQuestionForm.get("question").touched),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("disabled",t.submit),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("disabled",t.submit)("nbSpinner",t.submit))},directives:[u.y,u.A,u.N,u.x,s.v,s.n,s.g,u.Q,s.a,s.m,s.e,d.n,u.v,u.sb],styles:[".question-box[_ngcontent-%COMP%]{width:60vw;height:auto}@media only screen and (max-width:1200px){.question-box[_ngcontent-%COMP%]{width:65vw}}@media only screen and (max-width:840px){.question-box[_ngcontent-%COMP%]{width:70vw}}@media only screen and (max-width:420px){.question-box[_ngcontent-%COMP%]{width:90vw}}@media only screen and (max-width:300px){.question-box[_ngcontent-%COMP%]{top:2vh;left:2vw;width:96vw}}"]}),e}()},wPrP:function(e,i,r){"use strict";r.r(i),r.d(i,"QuestionAnswersModule",(function(){return A}));var s=r("DLXF"),o=r("aceb"),u=r("ofXK"),c=r("c9j8"),a=r("fXoL"),l=r("nwtg"),d=r("EQut"),m=r("7kqb"),h=r("K8P5"),f=r("tyNb"),v=r("ZatZ");function p(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"button",19),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](n);var e=a["\u0275\u0275nextContext"]().$implicit;return a["\u0275\u0275nextContext"](3).editQuestion(e)})),a["\u0275\u0275text"](1," Edit "),a["\u0275\u0275elementEnd"]()}}function b(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"button",20),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](n);var e=a["\u0275\u0275nextContext"]().$implicit;return a["\u0275\u0275nextContext"](3).deleteQuestion(e._id)})),a["\u0275\u0275text"](1," Delete "),a["\u0275\u0275elementEnd"]()}}function g(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275elementStart"](2,"div",0),a["\u0275\u0275elementStart"](3,"div",12),a["\u0275\u0275element"](4,"nb-user",13),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"div",14),a["\u0275\u0275template"](6,p,2,0,"button",15),a["\u0275\u0275elementStart"](7,"button",16),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](n);var e=t.$implicit;return a["\u0275\u0275nextContext"](3).viewQuestionAnswer(e)})),a["\u0275\u0275text"](8," View "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](9,b,2,0,"button",17),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"nb-card-body"),a["\u0275\u0275element"](11,"div",18),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit,r=a["\u0275\u0275nextContext"](3);a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("name",i.name?i.name:"Unknown")("title",r.formatQuestionAnswerDate(i.createdAt)),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",i.createdBy===r.user.imsMasterId),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngIf",i.createdBy===r.user.imsMasterId),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("innerHTML",i.question,a["\u0275\u0275sanitizeHtml"])}}function w(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275template"](1,g,12,5,"nb-card",11),a["\u0275\u0275elementContainerEnd"]()),2&e){var n=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",n.questionsAnswers)}}function S(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",21),a["\u0275\u0275text"](1,"You are first to Ask the Question"),a["\u0275\u0275elementEnd"]())}function y(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",8),a["\u0275\u0275template"](2,w,2,1,"ng-container",9),a["\u0275\u0275template"](3,S,2,0,"ng-template",null,10,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){var n=a["\u0275\u0275reference"](4),i=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf",i.questionsAnswers.length>0)("ngIfElse",n)}}function Q(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p",21),a["\u0275\u0275text"](1,"Loading..."),a["\u0275\u0275elementEnd"]())}var x,I,q,E=[{path:"",component:(x=function(){function e(t,i,r,s,o,u,c,a,l){n(this,e),this.authService=t,this.branchService=i,this.lectureService=r,this.questionAnswerService=s,this.toastrService=o,this.router=u,this.route=c,this.dialogService=a,this.dateService=l}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.loading=!0,this.branchId=this.branchService.getBranchId(),this.branchId?(this.editLectureQuestion=!1,this.user=this.authService.getUserData(),this.questionsAnswers=[],this.lectureService.getLectureData().subscribe((function(t){e.lecture=t,e.lecture?e.getQuestionAnswers():e.back()}))):this.back()}},{key:"getQuestionAnswers",value:function(){var e=this;this.loading=!0,this.questionAnswerService.getLectureQuestionAnswers(this.branchId,this.lecture.category,this.lecture.course,this.lecture.batch,this.lecture._id).subscribe((function(t){e.questionsAnswers=t,e.loading=!1}),(function(t){e.loading=!1}))}},{key:"addQuestion",value:function(){this.openQuestionDialog()}},{key:"openQuestionDialog",value:function(){var e=this;this.dialogService.open(c.a,{context:{}}).onClose.subscribe((function(t){return t&&e.saveLectureQuestion(t)}))}},{key:"editQuestion",value:function(e){this.questionAnswerService.setQuestionId(e._id),this.questionAnswerService.setQuestion(e),this.editLectureQuestion=!0,this.openQuestionDialog()}},{key:"formatQuestionAnswerDate",value:function(e){return this.dateService.convertToDate(e).toString().substr(0,21)}},{key:"deleteQuestion",value:function(e,t){var n=this;this.loading=!0,this.questionAnswerService.deleteLectureQuestion(e).subscribe((function(e){n.questionsAnswers.splice(t,1),n.showToastr("top-right","success","Question Deleted Successfully!"),n.loading=!1}),(function(e){n.showToastr("top-right","danger",e),n.loading=!1}))}},{key:"viewQuestionAnswer",value:function(e){this.questionAnswerService.setQuestionAnswersId(e._id),this.questionAnswerService.setQuestionAnswers(e),this.router.navigate(["./view"],{relativeTo:this.route})}},{key:"saveLectureQuestion",value:function(e){if(this.editLectureQuestion){var t=this.questionsAnswers.findIndex((function(t){return t._id===e._id}));t>=0&&(this.questionsAnswers[t]=e),this.editLectureQuestion=!1}else e.name=this.user.name,this.questionsAnswers.push(e)}},{key:"back",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}}]),e}(),x.\u0275fac=function(e){return new(e||x)(a["\u0275\u0275directiveInject"](l.a),a["\u0275\u0275directiveInject"](d.a),a["\u0275\u0275directiveInject"](m.a),a["\u0275\u0275directiveInject"](h.a),a["\u0275\u0275directiveInject"](o.Gb),a["\u0275\u0275directiveInject"](f.c),a["\u0275\u0275directiveInject"](f.a),a["\u0275\u0275directiveInject"](o.K),a["\u0275\u0275directiveInject"](v.a))},x.\u0275cmp=a["\u0275\u0275defineComponent"]({type:x,selectors:[["ngx-question-answers"]],decls:14,vars:2,consts:[[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","size","small","status","primary","fullWidth","",3,"click"],["icon","plus-circle-outline"],[1,"body-container"],["class","row",4,"ngIf","ngIfElse"],["loadingData",""],[1,"col-md-12"],[4,"ngIf","ngIfElse"],["noQuestions",""],[4,"ngFor","ngForOf"],[1,"col-md-6","col-12"],[3,"name","title"],[1,"col-md-6","col-12","text-right"],["class","mr-3","nbButton","","size","small","status","basic",3,"click",4,"ngIf"],["nbButton","","size","small","status","primary",1,"mr-3",3,"click"],["class","mr-3","nbButton","","size","small","status","danger",3,"click",4,"ngIf"],[3,"innerHTML"],["nbButton","","size","small","status","basic",1,"mr-3",3,"click"],["nbButton","","size","small","status","danger",1,"mr-3",3,"click"],[1,"text-center","pt-5","pb-5"]],template:function(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"nb-card"),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275elementStart"](2,"div",0),a["\u0275\u0275elementStart"](3,"div",1),a["\u0275\u0275elementStart"](4,"h3"),a["\u0275\u0275text"](5,"Question & Answers"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"div",2),a["\u0275\u0275elementStart"](7,"button",3),a["\u0275\u0275listener"]("click",(function(){return t.addQuestion()})),a["\u0275\u0275text"](8," Add Question "),a["\u0275\u0275element"](9,"nb-icon",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"nb-card-body",5),a["\u0275\u0275template"](11,y,5,2,"div",6),a["\u0275\u0275template"](12,Q,2,0,"ng-template",null,7,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){var n=a["\u0275\u0275reference"](13);a["\u0275\u0275advance"](11),a["\u0275\u0275property"]("ngIf",!t.loading)("ngIfElse",n)}},directives:[o.y,o.A,o.v,o.N,o.x,u.n,u.m,o.Kb],styles:[""]}),x)},{path:"view",loadChildren:function(){return r.e(243).then(r.bind(null,"atI5")).then((function(e){return e.ViewQuestionAnswersModule}))}},{path:"page-not-found",loadChildren:function(){return r.e(0).then(r.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}],k=((q=function e(){n(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:q}),q.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||q)},imports:[[f.g.forChild(E)],f.g]}),q),A=((I=function e(){n(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[u.c,k,s.a,o.B,o.w,o.P,o.Lb]]}),I)}}])}();
//# sourceMappingURL=44-es5.fbb7cf4998199e2a24e8.js.map