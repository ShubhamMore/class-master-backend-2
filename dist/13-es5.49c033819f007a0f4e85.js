function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7e1n":function(e,t,n){"use strict";n.r(t);var a=n("aceb"),i=n("ofXK"),l=n("ziii"),r=n("7kqb"),o=n("EQut"),c=n("fXoL"),s=n("tyNb"),d=["filePicker"];function u(e,t){1&e&&(c["\u0275\u0275elementContainerStart"](0),c["\u0275\u0275elementStart"](1,"p",16),c["\u0275\u0275text"](2," *Please Select a Valid File (*.pdf, '*.jpg, *.png, *.jpeg, *.mp4) "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementContainerEnd"]())}function m(e,t){if(1&e){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tr",20),c["\u0275\u0275elementStart"](1,"td",25),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"td",25),c["\u0275\u0275elementStart"](4,"span",26),c["\u0275\u0275text"](5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"td",27),c["\u0275\u0275elementStart"](7,"button",28),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var e=t.index;return c["\u0275\u0275nextContext"](3).removeFile(e)})),c["\u0275\u0275element"](8,"nb-icon",29),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,i=t.index;c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](i+1),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" ",a.name," "),c["\u0275\u0275advance"](2),c["\u0275\u0275propertyInterpolate1"]("nbTooltip","Remove ",a.name,"")}}function p(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"div",17),c["\u0275\u0275elementStart"](1,"table",18),c["\u0275\u0275elementStart"](2,"thead",19),c["\u0275\u0275elementStart"](3,"tr",20),c["\u0275\u0275elementStart"](4,"th",21),c["\u0275\u0275text"](5,"ID"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"th",21),c["\u0275\u0275text"](7,"Content File"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"th",22),c["\u0275\u0275text"](9,"Remove"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"tbody",23),c["\u0275\u0275template"](11,m,9,3,"tr",24),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=c["\u0275\u0275nextContext"](2);c["\u0275\u0275advance"](11),c["\u0275\u0275property"]("ngForOf",n.uploadLectureMaterials)}}function h(e,t){1&e&&c["\u0275\u0275text"](0," No Files Selected, Please Select Files to Upload ")}function f(e,t){if(1&e){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275elementStart"](3,"div",2),c["\u0275\u0275elementStart"](4,"h3"),c["\u0275\u0275text"](5,"Add Material"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"div",3),c["\u0275\u0275elementStart"](7,"button",4),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().saveLectureMaterial()})),c["\u0275\u0275text"](8," Upload\xa0 "),c["\u0275\u0275element"](9,"nb-icon",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"nb-card-body"),c["\u0275\u0275elementStart"](11,"div",1),c["\u0275\u0275elementStart"](12,"div",6),c["\u0275\u0275elementStart"](13,"div",7),c["\u0275\u0275elementStart"](14,"label",8),c["\u0275\u0275text"](15,"Click on Following Button to Select Lecture Material Files"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"input",9,10),c["\u0275\u0275listener"]("change",(function(e){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().onFilePicked(e)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](18,"button",11),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275reference"](17).click()})),c["\u0275\u0275text"](19," Click Here to Pick Files "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](20,u,3,0,"ng-container",0),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](21,"hr"),c["\u0275\u0275elementStart"](22,"h4",12),c["\u0275\u0275text"](23,"File/s To Upload"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](24,"div",1),c["\u0275\u0275elementStart"](25,"div",13),c["\u0275\u0275template"](26,p,12,1,"div",14),c["\u0275\u0275template"](27,h,1,0,"ng-template",null,15,c["\u0275\u0275templateRefExtractor"]),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){var a=c["\u0275\u0275reference"](28),i=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](20),c["\u0275\u0275property"]("ngIf",i.invalidFile),c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngIf",i.uploadLectureMaterials.length>0)("ngIfElse",a)}}var v,g,b=[{path:"",component:(v=function(){function e(t,n,a,i,l,r,o){_classCallCheck(this,e),this.branchService=t,this.lectureService=n,this.lectureMaterialService=a,this.toastrService=i,this.router=l,this.location=r,this.route=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;if(this.loading=!0,this.invalidFile=!1,this.branchId=this.branchService.getBranchId(),!this.branchId)return this.showToastr("top-right","danger","Invalid Lecture"),void this.cancel();this.uploadLectureMaterials=[],this.lectureService.getLectureData().subscribe((function(t){t?(e.lecture=t,e.loading=!1):e.cancel()}))}},{key:"onFilePicked",value:function(e){this.invalidFile=!1;for(var t=e.target.files,n=["pdf","jpg","png","jpeg","mp4"],a=null,i=t.length,l=0;l<i;l++)if(a=t[l].name.substring(t[l].name.lastIndexOf(".")+1).toLowerCase(),-1===n.indexOf(a))return this.invalidFile=!0,void(this.fileInput.nativeElement.value="");this.invalidFile=!1;for(var r=0;r<i;r++)this.uploadLectureMaterials.push(t[r]);this.fileInput.nativeElement.value=""}},{key:"saveLectureMaterial",value:function(){var e=this;if(this.uploadLectureMaterials.length<1)return this.showToastr("top-right","danger","Select at least 1 Lecture material File"),void(this.invalidFile=!0);this.loading=!0,this.invalidFile=!1;var t=new FormData;t.append("branch",this.branchId),t.append("category",this.lecture.category),t.append("course",this.lecture.course),t.append("batch",this.lecture.batch),t.append("lecture",this.lecture._id);for(var n=0;n<this.uploadLectureMaterials.length;n++)t.append("material",this.uploadLectureMaterials[n],this.uploadLectureMaterials[n].name.substring(0,this.uploadLectureMaterials[n].name.lastIndexOf(".")));this.lectureMaterialService.newLectureMaterials(t).subscribe((function(t){var n=e.uploadLectureMaterials.length,a=t.overStorageFiles;a<n&&e.showToastr("top-right","success","".concat(n-a," file").concat(n-a==1?" is":"s are"," Uploaded Successfully!")),a>0&&e.showToastr("top-right","danger","Storage is full, ".concat(a," file").concat(1===a?" is":"s are"," not Uploaded")),e.uploadLectureMaterials=[],e.cancel()}),(function(t){e.loading=!1}))}},{key:"removeFile",value:function(e){this.uploadLectureMaterials.splice(e,1)}},{key:"showToastr",value:function(e,t,n){this.toastrService.show(t,n,{position:e,status:t})}},{key:"cancel",value:function(){this.router.navigate(["../"],{relativeTo:this.route})}}]),e}(),v.\u0275fac=function(e){return new(e||v)(c["\u0275\u0275directiveInject"](o.a),c["\u0275\u0275directiveInject"](r.a),c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](a.Db),c["\u0275\u0275directiveInject"](s.c),c["\u0275\u0275directiveInject"](i.i),c["\u0275\u0275directiveInject"](s.a))},v.\u0275cmp=c["\u0275\u0275defineComponent"]({type:v,selectors:[["ngx-add-study-material"]],viewQuery:function(e,t){var n;1&e&&c["\u0275\u0275viewQuery"](d,!0),2&e&&c["\u0275\u0275queryRefresh"](n=c["\u0275\u0275loadQuery"]())&&(t.fileInput=n.first)},decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-9","col-sm-8"],[1,"col-md-3","col-sm-4"],["nbButton","","type","button","size","medium","fullWidth","","size","small","status","primary",3,"click"],["icon","arrow-circle-up-outline"],[1,"col-12"],[1,"form-control-group"],["for","input-subject",1,"label"],["type","file","nbInput","","id","input-file","name","file","placeholder","Select File","fullWidth","","multiple","","hidden","",3,"change"],["filePicker",""],["nbButton","","type","button","fullWidth","","size","small","status","warning","id","files",3,"click"],[1,"text-center"],[1,"col-md-10","mx-auto"],["class","table-responsive",4,"ngIf","ngIfElse"],["noFiles",""],[1,"caption","status-danger"],[1,"table-responsive"],[1,"table","table-sm","table-hover"],[1,"table-heading"],[1,"table-row"],[1,"table-heading-data"],[1,"table-heading-data","text-center"],[1,"table-body"],["class","table-row",4,"ngFor","ngForOf"],[1,"table-data"],[1,"mr-2"],[1,"table-data","text-center"],["type","button","nbButton","","shape","round","status","danger","size","tiny",3,"nbTooltip","click"],["icon","close-outline"]],template:function(e,t){1&e&&c["\u0275\u0275template"](0,f,29,3,"nb-card",0),2&e&&c["\u0275\u0275property"]("ngIf",!t.loading)},directives:[i.n,a.x,a.z,a.u,a.M,a.w,i.m,a.Fb],styles:[""]}),v)},{path:"page-not-found",loadChildren:function(){return n.e(0).then(n.bind(null,"DeSt")).then((function(e){return e.PageNotFoundModule}))}},{path:"**",redirectTo:"page-not-found"}],S=((g=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||g)},imports:[[s.g.forChild(b)],s.g]}),g);n.d(t,"AddStudyMaterialModule",(function(){return E}));var y,E=((y=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[i.c,S,a.A,a.v,a.nb,a.O,a.Gb]]}),y)}}]);