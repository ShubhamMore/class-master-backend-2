(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7e1n":function(e,t,n){"use strict";n.r(t);var i=n("aceb"),l=n("ofXK"),a=n("ziii"),r=n("7kqb"),o=n("EQut"),c=n("fXoL"),s=n("tyNb");const d=["filePicker"];function u(e,t){1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275elementStart"](1,"p",16),c["\u0275\u0275text"](2," *Please Select a Valid File (*.pdf, '*.jpg, *.png, *.jpeg, *.mp4) "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementContainerEnd"]())}function m(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tr",20),c["\u0275\u0275elementStart"](1,"td",25),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"td",25),c["\u0275\u0275elementStart"](4,"span",26),c["\u0275\u0275text"](5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"td",27),c["\u0275\u0275elementStart"](7,"button",28),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](e);const n=t.index;return c["\u0275\u0275nextContext"](3).removeFile(n)})),c["\u0275\u0275element"](8,"nb-icon",29),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=t.index;c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](n+1),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" ",e.name," "),c["\u0275\u0275advance"](2),c["\u0275\u0275propertyInterpolate1"]("nbTooltip","Remove ",e.name,"")}}function p(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",17),c["\u0275\u0275elementStart"](1,"table",18),c["\u0275\u0275elementStart"](2,"thead",19),c["\u0275\u0275elementStart"](3,"tr",20),c["\u0275\u0275elementStart"](4,"th",21),c["\u0275\u0275text"](5,"ID"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"th",21),c["\u0275\u0275text"](7,"Content File"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"th",22),c["\u0275\u0275text"](9,"Remove"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"tbody",23),c["\u0275\u0275template"](11,m,9,3,"tr",24),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("ngForOf",e.uploadLectureMaterials)}}function h(e,t){1&e&&c["\u0275\u0275text"](0," No Files Selected, Please Select Files to Upload ")}function f(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275elementStart"](3,"div",2),c["\u0275\u0275elementStart"](4,"h3"),c["\u0275\u0275text"](5,"Add Material"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"div",3),c["\u0275\u0275elementStart"](7,"button",4),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().saveLectureMaterial()})),c["\u0275\u0275text"](8," Upload\xa0 "),c["\u0275\u0275element"](9,"nb-icon",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"nb-card-body"),c["\u0275\u0275elementStart"](11,"div",1),c["\u0275\u0275elementStart"](12,"div",6),c["\u0275\u0275elementStart"](13,"div",7),c["\u0275\u0275elementStart"](14,"label",8),c["\u0275\u0275text"](15,"Click on Following Button to Select Lecture Material Files"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"input",9,10),c["\u0275\u0275listener"]("change",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().onFilePicked(t)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"button",11),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275reference"](17).click()})),c["\u0275\u0275text"](19," Click Here to Pick Files "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](20,u,3,0,"ng-container",0),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](21,"hr"),c["\u0275\u0275elementStart"](22,"h4",12),c["\u0275\u0275text"](23,"File/s To Upload"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](24,"div",1),c["\u0275\u0275elementStart"](25,"div",13),c["\u0275\u0275template"](26,p,12,1,"div",14),c["\u0275\u0275template"](27,h,1,0,"ng-template",null,15,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275reference"](28),t=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](20),c["\u0275\u0275property"]("ngIf",t.invalidFile),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngIf",t.uploadLectureMaterials.length>0)("ngIfElse",e)}}const g=[{path:"",component:(()=>{class e{constructor(e,t,n,i,l,a,r){this.branchService=e,this.lectureService=t,this.lectureMaterialService=n,this.toastrService=i,this.router=l,this.location=a,this.route=r}ngOnInit(){if(this.loading=!0,this.invalidFile=!1,this.branchId=this.branchService.getBranchId(),!this.branchId)return this.showToastr("top-right","danger","Invalid Lecture"),void this.cancel();this.uploadLectureMaterials=[],this.lectureService.getLectureData().subscribe(e=>{e?(this.lecture=e,this.loading=!1):this.cancel()})}onFilePicked(e){this.invalidFile=!1;const t=e.target.files,n=["pdf","jpg","png","jpeg","mp4"];let i=null;const l=t.length;for(let a=0;a<l;a++)if(i=t[a].name.substring(t[a].name.lastIndexOf(".")+1).toLowerCase(),-1===n.indexOf(i))return this.invalidFile=!0,void(this.fileInput.nativeElement.value="");this.invalidFile=!1;for(let a=0;a<l;a++)this.uploadLectureMaterials.push(t[a]);this.fileInput.nativeElement.value=""}saveLectureMaterial(){if(this.uploadLectureMaterials.length<1)return this.showToastr("top-right","danger","Select at least 1 Lecture material File"),void(this.invalidFile=!0);this.loading=!0,this.invalidFile=!1;const e=new FormData;e.append("branch",this.branchId),e.append("category",this.lecture.category),e.append("course",this.lecture.course),e.append("batch",this.lecture.batch),e.append("lecture",this.lecture._id);for(let t=0;t<this.uploadLectureMaterials.length;t++)e.append("material",this.uploadLectureMaterials[t],this.uploadLectureMaterials[t].name.substring(0,this.uploadLectureMaterials[t].name.lastIndexOf(".")));this.lectureMaterialService.newLectureMaterials(e).subscribe(e=>{const t=this.uploadLectureMaterials.length,n=e.overStorageFiles;n<t&&this.showToastr("top-right","success",`${t-n} file${t-n==1?" is":"s are"} Uploaded Successfully!`),n>0&&this.showToastr("top-right","danger",`Storage is full, ${n} file${1===n?" is":"s are"} not Uploaded`),this.uploadLectureMaterials=[],this.cancel()},e=>{this.loading=!1})}removeFile(e){this.uploadLectureMaterials.splice(e,1)}showToastr(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}cancel(){this.router.navigate(["../"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](r.a),c["\u0275\u0275directiveInject"](a.a),c["\u0275\u0275directiveInject"](i.Db),c["\u0275\u0275directiveInject"](s.c),c["\u0275\u0275directiveInject"](l.i),c["\u0275\u0275directiveInject"](s.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-add-study-material"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](d,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.fileInput=n.first)},decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","type","button","size","medium","fullWidth","","size","small","status","primary",3,"click"],["icon","arrow-circle-up-outline"],[1,"col-12"],[1,"form-control-group"],["for","input-subject",1,"label"],["type","file","nbInput","","id","input-file","name","file","placeholder","Select File","fullWidth","","multiple","","hidden","",3,"change"],["filePicker",""],["nbButton","","type","button","fullWidth","","size","small","status","warning","id","files",3,"click"],[1,"text-center"],[1,"col-md-10","mx-auto"],["class","table-responsive",4,"ngIf","ngIfElse"],["noFiles",""],[1,"caption","status-danger"],[1,"table-responsive"],[1,"table","table-sm","table-hover"],[1,"table-heading"],[1,"table-row"],[1,"table-heading-data"],[1,"table-heading-data","text-center"],[1,"table-body"],["class","table-row",4,"ngFor","ngForOf"],[1,"table-data"],[1,"mr-2"],[1,"table-data","text-center"],["type","button","nbButton","","shape","round","status","danger","size","tiny",3,"nbTooltip","click"],["icon","close-outline"]],template:function(e,t){1&e&&c["\u0275\u0275template"](0,f,29,3,"nb-card",0),2&e&&c["\u0275\u0275property"]("ngIf",!t.loading)},directives:[l.n,i.x,i.z,i.u,i.M,i.w,l.m,i.Fb],styles:[""]}),e})()},{path:"page-not-found",loadChildren:()=>n.e(0).then(n.bind(null,"DeSt")).then(e=>e.PageNotFoundModule)},{path:"**",redirectTo:"page-not-found"}];let v=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[s.g.forChild(g)],s.g]}),e})();n.d(t,"AddStudyMaterialModule",(function(){return b}));let b=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.c,v,i.A,i.v,i.nb,i.O,i.Gb]]}),e})()}}]);