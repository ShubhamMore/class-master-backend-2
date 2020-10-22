(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '/ehT': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          setBranchStudentData(t) {
            this.branchStudent = t;
          }
          getBranchStudentData() {
            return this.branchStudent;
          }
          deleteBranchStudentData() {
            this.branchStudent = null;
          }
          setBranchStudentId(t) {
            this.branchStudentId = t;
          }
          getBranchStudentId() {
            return this.branchStudentId;
          }
          deleteBranchStudentId() {
            this.branchStudentId = null;
          }
          getBranchStudents(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getBranchStudents', data: { branch: t, category: e, type: a } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getBranchStudentNameIds(t, e, a) {
            return this.httpService
              .httpPost({
                api: 'getBranchStudentNameIds',
                data: { branch: t, category: e, type: a },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getBranchAllStudentNameIds(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchAllStudentNameIds', data: { branch: t, category: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getBranchStudent(t, e) {
            return this.httpService
              .httpPost({ api: 'addBranchStudent', data: { id: t, student: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          newBranchStudent(t) {
            return this.httpService.httpPost({ api: 'newBranchStudent', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getBranchStudentForEditing(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchStudentForEditing', data: { id: t, student: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          editBranchStudent(t) {
            return this.httpService.httpPost({ api: 'updateBranchStudent', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          changeBranchStudentStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeBranchStudentStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          deleteBranchStudent(t) {
            return this.httpService.httpPost({ api: 'deleteBranchStudent', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = c['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    '0AbP': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          getBranchDashboard(t) {
            return this.httpService
              .httpPost({ api: 'getBranchDashboard', data: { branch: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getBranchDashboardForEmployee(t) {
            return this.httpService
              .httpPost({ api: 'getBranchDashboardForEmployee', data: { branch: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getStudentBranchDashboard(t) {
            return this.httpService
              .httpPost({ api: 'getStudentBranchDashboard', data: { branch: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = c['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    '3b5Z': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return i;
      });
      var r = a('2Vo4'),
        n = a('fXoL');
      let i = (() => {
        class t {
          constructor() {
            (this.employeeRole = new r.a(null)),
              (this.userRoles = ['institute', 'employee', 'student']),
              (this.employeeRoles = ['manager', 'teacher', 'councillor']);
          }
          getUserRoles() {
            return this.userRoles;
          }
          setEmployeeRole(t) {
            this.employeeRole.next(t);
          }
          getEmployeeRole() {
            return this.employeeRole;
          }
          getEmployeeRoles() {
            return this.employeeRoles;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = n['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    '3lxF': function (t, e, a) {},
    '5V5q': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t),
              (this.discountTypes = ['percentage', 'amount']),
              (this.discountAndOffers = new s.a([])),
              (this.discountAndOffer = new s.a(null));
          }
          getDiscountTypes() {
            return this.discountTypes;
          }
          setDiscountAndOfferId(t) {
            this.discountAndOfferId = t;
          }
          getDiscountAndOfferId() {
            return this.discountAndOfferId;
          }
          deleteDiscountAndOfferId() {
            this.discountAndOfferId = null;
          }
          setDiscountAndOffersData(t) {
            this.discountAndOffers.next(t);
          }
          getDiscountAndOffersData() {
            return this.discountAndOffers;
          }
          deleteDiscountAndOffersData() {
            this.discountAndOffers.next([]);
          }
          setDiscountAndOfferData(t) {
            this.discountAndOffer.next(t);
          }
          getDiscountAndOfferData() {
            return this.discountAndOffer;
          }
          deleteDiscountAndOfferData() {
            this.discountAndOffer.next(null);
          }
          getDiscountAndOffers(t) {
            return this.httpService
              .httpPost({ api: 'getDiscountAndOffers', data: { branch: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getDiscountAndOffersForStudent(t) {
            return this.httpService
              .httpPost({ api: 'getDiscountAndOffersForStudent', data: { branch: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getDiscountAndOffer(t) {
            return this.httpService.httpPost({ api: 'getDiscountAndOffer', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getDiscountAndOfferForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getDiscountAndOfferForEditing', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          CheckDiscountAndOffer(t, e) {
            return this.httpService
              .httpPost({ api: 'CheckDiscountAndOffer', data: { branch: t, code: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          addDiscountAndOffer(t) {
            return this.httpService.httpPost({ api: 'newDiscountAndOffer', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editDiscountAndOffer(t) {
            return this.httpService.httpPost({ api: 'updateDiscountAndOffer', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteDiscountAndOffer(t) {
            return this.httpService
              .httpPost({ api: 'deleteDiscountAndOffer', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          changeDiscountAndOfferStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeDiscountAndOfferStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    '6Cnf': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return s;
      });
      var r = a('EQut'),
        n = a('fXoL'),
        i = a('tyNb');
      let s = (() => {
        class t {
          constructor(t, e) {
            (this.branchService = t), (this.router = e);
          }
          canActivate(t, e) {
            const a = this.branchService.getBranchId();
            return !(!a || '' === a) || this.router.createUrlTree(['/']);
          }
          canActivateChild(t, e) {
            return this.canActivate(t, e);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(n['\u0275\u0275inject'](r.a), n['\u0275\u0275inject'](i.c));
          }),
          (t.ɵprov = n['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    '6Ox6': function (t, e, a) {
      'use strict';
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          getOrderDetails() {
            return this.orderDetails;
          }
          setOrderDetails(t) {
            this.orderDetails = t;
          }
          deleteOrderDetails() {
            this.orderDetails = null;
          }
          deleteOrder(t) {
            return this.httpService.httpPost({ api: 'deleteOrder', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          generateOrder(t) {
            return this.httpService.httpPost({ api: 'generateOrder', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = c['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
      var o = a('cxbk'),
        p = a('nwtg'),
        h = a('s5zK'),
        d = a('aceb');
      a.d(e, 'a', function () {
        return l;
      });
      let l = (() => {
        class t {
          constructor(t, e, a, r, n) {
            (this.paymentService = t),
              (this.orderService = e),
              (this.authService = a),
              (this.toastrService = r),
              (this.ref = n);
          }
          ngOnInit() {
            (this.loading = !0),
              (this.user = this.authService.getUserData()),
              (this.paymentDetails = this.paymentService.getPaymentDetails()),
              (this.orderDetails = {
                userId: this.user._id,
                userPhone: this.user.phone,
                userName: this.user.name,
                userEmail: this.user.email,
                amount: this.paymentDetails.amount,
                packageType: this.paymentDetails.packageType,
                planType: this.paymentDetails.planType,
              }),
              (this.options = {
                key: o.a.razorpayKeyId,
                amount: '',
                currency: 'INR',
                name: 'IMS Master',
                description: 'Class Master Transaction',
                image: '../../../assets/brand/class-master-mini.png',
                order_id: '',
                handler: (t) => {
                  this.verifyPayment(t);
                },
                modal: {
                  ondismiss: () => {
                    this.deleteOrder();
                  },
                },
                prefill: { name: this.user.name, email: this.user.email, contact: this.user.phone },
                notes: { address: '' },
                theme: { color: '#528FF0' },
              }),
              (this.razorPay = new Razorpay(this.options)),
              this.generateOrder(),
              (this.loading = !1);
          }
          generateOrder() {
            this.orderService.generateOrder(this.orderDetails).subscribe(
              (t) => {
                (this.placedOrderReceipt = t.paymentReceipt),
                  (this.options.amount = '1'),
                  (this.options.order_id = t.order.id),
                  (this.options.currency = t.order.currency),
                  (this.options.prefill.name = this.user.name),
                  (this.options.prefill.email = this.user.email),
                  (this.options.prefill.contact = this.user.phone),
                  (this.razorPay = new Razorpay(this.options)),
                  this.pay();
              },
              (t) => {
                this.showToastr('top-right', 'danger', t);
              }
            );
          }
          pay() {
            this.razorPay.open();
          }
          deleteOrder() {
            this.orderService.deleteOrder(this.placedOrderReceipt._id).subscribe(
              (t) => {
                (this.placedOrderReceipt = null), this.ref.close({ status: !1 });
              },
              (t) => {
                this.showToastr('top-right', 'danger', t);
              }
            );
          }
          verifyPayment(t) {
            this.paymentService.verifyPayment(t, this.placedOrderReceipt).subscribe(
              (t) => {
                this.showToastr('top-right', 'success', 'Payment Verified Successfully'),
                  this.ref.close({ status: !0, order: t.orderId, receipt: t.receiptId });
              },
              (t) => {
                this.showToastr('top-right', 'danger', t);
              }
            );
          }
          onClose() {
            this.ref.close();
          }
          showToastr(t, e, a) {
            this.toastrService.show(e, a, { position: t, status: e });
          }
          ngOnDestroy() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              c['\u0275\u0275directiveInject'](h.a),
              c['\u0275\u0275directiveInject'](u),
              c['\u0275\u0275directiveInject'](p.a),
              c['\u0275\u0275directiveInject'](d.Db),
              c['\u0275\u0275directiveInject'](d.I)
            );
          }),
          (t.ɵcmp = c['\u0275\u0275defineComponent']({
            type: t,
            selectors: [['ngx-payment']],
            decls: 0,
            vars: 0,
            template: function (t, e) {},
            styles: [''],
          })),
          t
        );
      })();
    },
    '7kqb': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('lJxs'),
        n = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t),
              (this.lecture = new s.a(null)),
              (this.lectureId = null),
              (this.date = null);
          }
          getSearchDate() {
            return this.date;
          }
          setSearchDate(t) {
            this.date = t;
          }
          setLectureData(t) {
            this.lecture.next(t);
          }
          getLectureData() {
            return this.lecture;
          }
          deleteLectureData() {
            this.lecture.next(null);
          }
          setLectureId(t) {
            this.lectureId = t;
          }
          getLectureId() {
            return this.lectureId;
          }
          deleteLectureId() {
            this.lectureId = null;
          }
          getLectures(t, e, a, i, s) {
            return this.httpService
              .httpPost({
                api: 'getLectures',
                data: { branch: t, category: e, course: a, batch: i, date: s },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getLecturesForStudent(t, e, a, i, s) {
            return this.httpService
              .httpPost({
                api: 'getLecturesForStudent',
                data: { branch: t, category: e, course: a, batch: i, date: s },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getLecture(t) {
            return this.httpService.httpPost({ api: 'getLecture', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    F3IG: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.lead = new s.a(null));
          }
          setLeadData(t) {
            this.lead.next(t);
          }
          getLeadType() {
            return this.leadType;
          }
          setLeadType(t) {
            this.leadType = t;
          }
          deleteLeadType() {
            this.leadType = null;
          }
          getLeadData() {
            return this.lead;
          }
          deleteLeadData() {
            this.lead.next(null);
          }
          setLeadId(t) {
            this.leadId = t;
          }
          getLeadId() {
            return this.leadId;
          }
          deleteLeadId() {
            this.leadId = null;
          }
          saveLead(t) {
            return this.httpService.httpPost({ api: 'saveLead', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getLeads(t, e, a, r) {
            return this.httpService
              .httpPost({
                api: 'getLeads',
                data: { branch: t, category: e, course: a, leadType: r },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getLead(t) {
            return this.httpService.httpPost({ api: 'getLead', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getLeadForEditing(t) {
            return this.httpService.httpPost({ api: 'getLeadForEditing', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editLead(t) {
            return this.httpService.httpPost({ api: 'editLead', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          changeLeadStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeLeadStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteLead(t) {
            return this.httpService.httpPost({ api: 'deleteLead', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    FYcy: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('lJxs'),
        n = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t),
              (this.courseMaterial = new s.a(null)),
              (this.courseMaterials = new s.a([]));
          }
          setCourseMaterialId(t) {
            this.courseMaterialId = t;
          }
          getCourseMaterialId() {
            return this.courseMaterialId;
          }
          deleteCourseMaterialId() {
            this.courseMaterialId = null;
          }
          setCourseMaterialsData(t) {
            this.courseMaterials.next(t);
          }
          getCourseMaterialsData() {
            return this.courseMaterials;
          }
          deleteCourseMaterialsData() {
            this.courseMaterials.next([]);
          }
          setCourseMaterialData(t) {
            this.courseMaterial.next(t);
          }
          getCourseMaterialData() {
            return this.courseMaterial;
          }
          deleteCourseMaterialData() {
            this.courseMaterial.next(null);
          }
          getCourseMaterials(t, e, a, i) {
            return this.httpService
              .httpPost({
                api: 'getCourseMaterials',
                data: { branch: t, category: e, course: a, subject: i },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getCourseMaterial(t) {
            return this.httpService.httpPost({ api: 'getCourseMaterials', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
          getCourseMaterialsForStudent(t, e, a, i) {
            return this.httpService
              .httpPost({
                api: 'getCourseMaterialsForStudent',
                data: { branch: t, category: e, course: a, subject: i },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          newCourseMaterials(t) {
            return this.httpService.httpPost({ api: 'newCourseMaterials', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
          changeCourseMaterialStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeCourseMaterialStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          deleteCourseMaterial(t) {
            return this.httpService.httpPost({ api: 'deleteCourseMaterial', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    IAlr: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.courses = new s.a([])), (this.course = new s.a(null));
          }
          setCourseId(t) {
            this.courseId = t;
          }
          getCourseId() {
            return this.courseId;
          }
          deleteCourseId() {
            this.courseId = null;
          }
          setCoursesData(t) {
            this.courses.next(t);
          }
          getCoursesData() {
            return this.courses;
          }
          deleteCoursesData() {
            this.courses.next([]);
          }
          setCourseData(t) {
            this.course.next(t);
          }
          getCourseData() {
            return this.course;
          }
          deleteCourseData() {
            this.course.next(null);
          }
          getCourseName(t) {
            return this.courses.pipe(
              Object(n.a)((e) => {
                const a = e.find((e) => e._id === t);
                return a ? a.basicDetails.courseName : '--';
              })
            );
          }
          getCourses(t, e) {
            return this.httpService
              .httpPost({ api: 'getCourses', data: { branch: t, category: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getCourse(t) {
            return this.httpService.httpPost({ api: 'getCourse', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getCourseForEditing(t) {
            return this.httpService.httpPost({ api: 'getCourseForEditing', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          addCourse(t) {
            return this.httpService.httpPost({ api: 'newCourse', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editCourse(t) {
            return this.httpService.httpPost({ api: 'updateCourse', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteCourse(t) {}
          changeCourseStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeCourseStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    JmRu: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.student = new s.a(null));
          }
          setStudentType(t) {
            this.studentType = t;
          }
          getStudentType() {
            return this.studentType;
          }
          deleteStudentType() {
            this.studentType = null;
          }
          setStudentData(t) {
            this.student.next(t);
          }
          getStudentData() {
            return this.student;
          }
          deleteStudentData() {
            this.student.next(null);
          }
          setStudentId(t) {
            this.studentId = t;
          }
          getStudentId() {
            return this.studentId;
          }
          deleteStudentId() {
            this.studentId = null;
          }
          getStudentName() {
            return this.getStudentData().pipe(Object(n.a)((t) => (t ? t.name : '--')));
          }
          addStudent(t, e) {
            return this.httpService
              .httpPost({ api: 'newStudent', data: { student: t, branchStudent: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudents() {
            return this.httpService.httpPost({ api: 'getStudents', data: {} }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getStudent(t) {
            return this.httpService.httpPost({ api: 'getStudent', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getStudentByImsId(t) {
            return this.httpService
              .httpPost({ api: 'getStudentByImsId', data: { studentImsId: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          searchStudent(t) {
            return this.httpService.httpPost({ api: 'searchStudent', data: { studentId: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getStudentForEditing(t) {
            return this.httpService.httpPost({ api: 'getStudentForEditing', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          changeStudentStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeStudentStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          editStudent(t) {
            return this.httpService.httpPost({ api: 'updateStudent', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteStudent(t) {
            return this.httpService.httpPost({ api: 'deleteStudent', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    K8P5: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t),
              (this.question = new s.a(null)),
              (this.questionAnswer = new s.a(null)),
              (this.questionAnswers = new s.a(null)),
              (this.questionId = null),
              (this.questionAnswerId = null),
              (this.questionAnswersId = null);
          }
          setQuestion(t) {
            this.question.next(t);
          }
          getQuestion() {
            return this.question;
          }
          deleteQuestion() {
            this.question.next(null);
          }
          setQuestionId(t) {
            this.questionId = t;
          }
          getQuestionId() {
            return this.questionId;
          }
          deleteQuestionId() {
            this.questionId = null;
          }
          setQuestionAnswer(t) {
            this.questionAnswer.next(t);
          }
          getQuestionAnswer() {
            return this.questionAnswer;
          }
          deleteQuestionAnswer() {
            this.questionAnswer.next(null);
          }
          setQuestionAnswerId(t) {
            this.questionAnswerId = t;
          }
          getQuestionAnswerId() {
            return this.questionAnswerId;
          }
          deleteQuestionAnswerId() {
            this.questionAnswerId = null;
          }
          setQuestionAnswers(t) {
            this.questionAnswers.next(t);
          }
          getQuestionAnswers() {
            return this.questionAnswers;
          }
          deleteQuestionAnswers() {
            this.questionAnswers.next(null);
          }
          setQuestionAnswersId(t) {
            this.questionAnswersId = t;
          }
          getQuestionAnswersId() {
            return this.questionAnswersId;
          }
          deleteQuestionAnswersId() {
            this.questionAnswersId = null;
          }
          getLectureQuestionAnswers(t, e, a, r, s) {
            return this.httpService
              .httpPost({
                api: 'getLectureQuestionAnswers',
                data: { branch: t, category: e, course: a, batch: r, lecture: s },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getLectureQuestionAnswer(t) {
            return this.httpService
              .httpPost({ api: 'getLectureQuestionAnswer', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          newLectureQuestion(t) {
            return this.httpService.httpPost({ api: 'newLectureQuestion', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editLectureQuestion(t) {
            return this.httpService.httpPost({ api: 'editLectureQuestion', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteLectureQuestion(t) {
            return this.httpService
              .httpPost({ api: 'deleteLectureQuestion', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          newLectureQuestionAnswer(t) {
            return this.httpService.httpPost({ api: 'newLectureQuestionAnswer', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editLectureQuestionAnswer(t) {
            return this.httpService.httpPost({ api: 'editLectureQuestionAnswer', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteLectureQuestionAnswer(t) {
            return this.httpService
              .httpPost({ api: 'deleteLectureQuestionAnswer', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    L09S: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return i;
      });
      var r = a('fXoL'),
        n = a('jhN1');
      let i = (() => {
        class t {
          constructor(t) {
            this.sanitizer = t;
          }
          transform(t) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(r['\u0275\u0275directiveInject'](n.b));
          }),
          (t.ɵpipe = r['\u0275\u0275definePipe']({ name: 'safeUrl', type: t, pure: !0 })),
          t
        );
      })();
    },
    L3Ly: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return n;
      });
      var r = a('fXoL');
      let n = (() => {
        class t {
          constructor() {
            (this.KB = 1024), (this.MB = 1048576), (this.GB = 1073741824);
          }
          convertByteToUnit(t) {
            let e, a;
            return (
              (t = +t) < this.KB
                ? ((e = t), (a = e <= 1 ? 'Byte' : 'Bytes'))
                : t >= this.KB && t < this.MB
                ? ((e = t / this.KB), (a = 'KB'))
                : t >= this.MB && t < this.GB
                ? ((e = t / this.MB), (a = 'MB'))
                : ((e = t / this.GB), (a = 'GB')),
              { value: e, unit: a }
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = r['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    'OeS+': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('lJxs'),
        n = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.schedule = new s.a(null));
          }
          setScheduleData(t) {
            this.schedule.next(t);
          }
          getScheduleData() {
            return this.schedule;
          }
          deleteScheduleData() {
            this.schedule.next(null);
          }
          setScheduleId(t) {
            this.scheduleId = t;
          }
          getScheduleId() {
            return this.scheduleId;
          }
          deleteScheduleId() {
            this.scheduleId = null;
          }
          setScheduleDay(t) {
            this.scheduleDay = t;
          }
          getScheduleDay() {
            return this.scheduleDay;
          }
          deleteScheduleDay() {
            this.scheduleDay = null;
          }
          addSchedule(t) {
            return this.httpService.httpPost({ api: 'newSchedule', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
          changeScheduleStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeScheduleStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getAllSchedules(t, e, a, i, s, u) {
            return this.httpService
              .httpPost({
                api: 'getAllSchedule',
                data: { branch: t, category: e, course: a, batch: i, startDate: s, endDate: u },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getSchedule(t) {
            return this.httpService.httpPost({ api: 'getSchedule', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
          getScheduleForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getScheduleForEditing', data: { schedule: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          editSchedule(t) {
            return this.httpService.httpPost({ api: 'editSchedule', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
          deleteSchedule(t) {
            return this.httpService.httpPost({ api: 'deleteSchedule', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    PCNd: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return n;
      });
      var r = a('fXoL');
      let n = (() => {
        class t {}
        return (
          (t.ɵmod = r['\u0275\u0275defineNgModule']({ type: t })),
          (t.ɵinj = r['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[]],
          })),
          t
        );
      })();
    },
    'Pj/w': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t),
              (this.branchEmployee = new s.a(null)),
              (this.branchEmployees = new s.a([])),
              (this.branchEmployeeNameIds = new s.a([]));
          }
          setBranchEmployeeData(t) {
            this.branchEmployee.next(t);
          }
          getBranchEmployeeData() {
            return this.branchEmployee;
          }
          deleteBranchEmployeeData() {
            this.branchEmployee.next(null);
          }
          setBranchEmployeesData(t) {
            this.branchEmployees.next(t);
          }
          getBranchEmployeesData() {
            return this.branchEmployees;
          }
          deleteBranchEmployeesData() {
            this.branchEmployees.next([]);
          }
          setBranchEmployeeNameIdsData(t) {
            this.branchEmployeeNameIds.next(t);
          }
          getBranchEmployeeNameIdsData() {
            return this.branchEmployeeNameIds;
          }
          deleteBranchEmployeeNameIdsData() {
            this.branchEmployeeNameIds.next([]);
          }
          setBranchEmployeeId(t) {
            this.branchEmployeeId = t;
          }
          getBranchEmployeeId() {
            return this.branchEmployeeId;
          }
          deleteBranchEmployeeId() {
            this.branchEmployeeId = null;
          }
          getBranchEmployees(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployees', data: { branch: t, type: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeesForBatch(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeesForBatch', data: { branch: t, role: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeNameIds(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeeNameIds', data: { branch: t, type: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeNameIdsForBatch(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeeNameIdsForBatch', data: { branch: t, role: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployee(t, e) {
            return this.httpService
              .httpPost({ api: 'addBranchEmployee', data: { id: t, employee: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeRole(t) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeeRole', data: { branch: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeForSalary(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeeForSalary', data: { id: t, employee: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          newBranchEmployee(t) {
            return this.httpService.httpPost({ api: 'newBranchEmployee', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getBranchEmployeeForEditing(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeeForEditing', data: { id: t, employee: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          editBranchEmployee(t) {
            return this.httpService.httpPost({ api: 'updateBranchEmployee', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          changeBranchEmployeeStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeBranchEmployeeStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteBranchEmployee(t) {
            return this.httpService.httpPost({ api: 'deleteBranchEmployee', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    R6I3: function (t, e, a) {},
    Vw3K: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return c;
      });
      var r = a('gbKz'),
        n = a.n(r),
        i = a('m2xi'),
        s = a.n(i);
      function c(t) {
        const e = n.a
            .toWords(+t)
            .replace(',', '')
            .replace('-', ' ')
            .split(' '),
          a = new Array();
        return (
          e.forEach((t) => {
            a.push(s()(t));
          }),
          a.join(' ')
        );
      }
    },
    W14u: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.studentCourse = new s.a(null));
          }
          setStudentCourseData(t) {
            this.studentCourse.next(t);
          }
          getStudentCourseData() {
            return this.studentCourse;
          }
          deleteStudentCourseData() {
            this.studentCourse.next(null);
          }
          setStudentCourseId(t) {
            this.studentCourseId = t;
          }
          getStudentCourseId() {
            return this.studentCourseId;
          }
          deleteStudentCourseId() {
            this.studentCourseId = null;
          }
          addStudentCourse(t, e) {
            return this.httpService
              .httpPost({
                api: 'newStudentCourse',
                data: { studentCourse: t, studentCourseInstallment: e },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourses(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getStudentCourses', data: { branch: t, category: e, student: a } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentAllCourses(t) {
            return this.httpService
              .httpPost({ api: 'getStudentAllCourses', data: { branch: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourse(t) {
            return this.httpService.httpPost({ api: 'getStudentCourse', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          checkBatchRollNumber(t, e, a, r, s) {
            return this.httpService
              .httpPost({
                api: 'checkBatchRollNumber',
                data: { branch: t, category: e, course: a, batch: r, rollNumber: s },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseForEditing', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          changeStudentCourseStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeStudentCourseStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          editStudentCourse(t, e) {
            return this.httpService
              .httpPost({
                api: 'updateStudentCourse',
                data: { studentCourse: t, studentCourseInstallment: e },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteStudentCourse(t) {
            return this.httpService.httpPost({ api: 'deleteStudentCourse', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    cS08: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('lJxs'),
        n = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.employeeSalary = new s.a(null));
          }
          setEmployeeSalaryData(t) {
            this.employeeSalary.next(t);
          }
          getEmployeeSalaryData() {
            return this.employeeSalary;
          }
          deleteEmployeeSalaryData() {
            this.employeeSalary.next(null);
          }
          setEmployeeSalaryId(t) {
            this.employeeSalaryId = t;
          }
          getEmployeeSalaryId() {
            return this.employeeSalaryId;
          }
          deleteEmployeeSalaryId() {
            this.employeeSalaryId = null;
          }
          addEmployeeSalary(t) {
            return this.httpService.httpPost({ api: 'newEmployeeSalary', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
          changeEmployeeSalaryStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeEmployeeSalaryStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeSalaries(t, e, a, i) {
            return this.httpService
              .httpPost({
                api: 'getBranchEmployeeSalaries',
                data: { branch: t, employee: e, month: a, year: i },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getMyBranchSalaries(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getMyBranchSalaries', data: { branch: t, month: e, year: a } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getEmployeeSalaries(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getEmployeeSalaries', data: { employee: t, month: e, year: a } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getEmployeeSalary(t) {
            return this.httpService.httpPost({ api: 'getEmployeeSalary', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
          deleteEmployeeSalary(t) {
            return this.httpService.httpPost({ api: 'deleteEmployeeSalary', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    cxbk: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return r;
      });
      const r = {
        production: !0,
        backend: '',
        encKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
        aesKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
        razorpayKeyId: 'rzp_test_1JFxmyJ8eg8wQZ',
        zoomLiveURL: 'http://localhost:3000/online-meeting/#/live',
        SOCKET_ENDPOINT: '/classMasterSocketConnection',
      };
    },
    emOf: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('lJxs'),
        n = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.studentCourseInstallmentReceipt = new s.a(null));
          }
          setStudentCourseInstallmentReceiptData(t) {
            this.studentCourseInstallmentReceipt.next(t);
          }
          getStudentCourseInstallmentReceiptData() {
            return this.studentCourseInstallmentReceipt;
          }
          deleteStudentCourseInstallmentReceiptData() {
            this.studentCourseInstallmentReceipt.next(null);
          }
          setStudentCourseInstallmentReceiptId(t) {
            this.studentCourseInstallmentReceiptId = t;
          }
          getStudentCourseInstallmentReceiptId() {
            return this.studentCourseInstallmentReceiptId;
          }
          deleteStudentCourseInstallmentReceiptId() {
            this.studentCourseInstallmentReceiptId = null;
          }
          addStudentCourseInstallmentReceipt(t) {
            return this.httpService
              .httpPost({ api: 'newStudentCourseInstallmentReceipt', data: t })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          changeStudentCourseInstallmentReceiptStatus(t, e) {
            return this.httpService
              .httpPost({
                api: 'changeStudentCourseInstallmentReceiptStatus',
                data: { id: t, status: e },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getAllStudentCourseInstallmentReceipts(t) {
            return this.httpService
              .httpPost({ api: 'getAllStudentCourseInstallmentReceipts', data: { student: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getStudentAllCourseInstallmentReceiptsForStudent(t) {
            return this.httpService
              .httpPost({
                api: 'getStudentAllCourseInstallmentReceiptsForStudent',
                data: { student: t },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseInstallmentReceipt(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseInstallmentReceipt', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseInstallmentReceiptForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseInstallmentReceiptForEditing', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          editStudentCourseInstallmentReceipt(t) {
            return this.httpService
              .httpPost({ api: 'editStudentCourseInstallmentReceipt', data: t })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          deleteStudentCourseInstallmentReceipt(t) {
            return this.httpService
              .httpPost({ api: 'deleteStudentCourseInstallmentReceipt', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    fDUG: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.billingDetails = new s.a(null));
          }
          setBilling(t) {
            this.billingDetails.next(t);
          }
          getBilling() {
            return this.billingDetails;
          }
          deleteBilling() {
            this.billingDetails.next(null);
          }
          saveBillingDetails(t) {
            return this.httpService.httpPost({ api: 'saveBillingDetails', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getBillingDetails(t) {
            return this.httpService
              .httpPost({ api: 'getBillingDetails', data: { branch: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    fvxu: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          setUserProfile(t) {
            this.userProfile = t;
          }
          getUserProfile() {
            return this.userProfile;
          }
          checkUser(t) {
            return this.httpService.httpPost({ api: 'checkUser', data: { email: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          changePassword(t) {
            return this.httpService.httpPost({ api: 'changePassword', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          saveProfile(t) {
            return this.httpService.httpPost({ api: 'saveProfile', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getProfile() {
            return this.httpService.httpPost({ api: 'getProfile', data: {} }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = c['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    gbKz: function (t, e, a) {
      !(function () {
        'use strict';
        function a(t) {
          return !('number' != typeof t || t != t || t === 1 / 0 || t === -1 / 0);
        }
        function r(t) {
          return 'number' == typeof t && Math.abs(t) <= 9007199254740991;
        }
        ('object' == typeof self && self.self === self && self) ||
          ('object' == typeof global && global.global === global && global);
        var n = /(hundred|thousand|(m|b|tr|quadr)illion)$/,
          i = /teen$/,
          s = /y$/,
          c = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,
          u = {
            zero: 'zeroth',
            one: 'first',
            two: 'second',
            three: 'third',
            four: 'fourth',
            five: 'fifth',
            six: 'sixth',
            seven: 'seventh',
            eight: 'eighth',
            nine: 'ninth',
            ten: 'tenth',
            eleven: 'eleventh',
            twelve: 'twelfth',
          };
        function o(t) {
          return n.test(t) || i.test(t)
            ? t + 'th'
            : s.test(t)
            ? t.replace(s, 'ieth')
            : c.test(t)
            ? t.replace(c, p)
            : t;
        }
        function p(t, e) {
          return u[e];
        }
        var h = 100,
          d = 1e3,
          l = 1e6,
          b = 1e9,
          O = 1e12,
          j = 1e15,
          f = 9007199254740992,
          S = [
            'zero',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
          ],
          m = [
            'zero',
            'ten',
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety',
          ];
        function g(t, e) {
          var n,
            i = parseInt(t, 10);
          if (!a(i)) throw new TypeError('Not a finite number: ' + t + ' (' + typeof t + ')');
          if (!r(i))
            throw new RangeError(
              'Input is not a safe number, it\u2019s either too large or too small.'
            );
          return (
            (n = (function t(e) {
              var a,
                r,
                n = arguments[1];
              return 0 === e
                ? n
                  ? n.join(' ').replace(/,$/, '')
                  : 'zero'
                : (n || (n = []),
                  e < 0 && (n.push('minus'), (e = Math.abs(e))),
                  e < 20
                    ? ((a = 0), (r = S[e]))
                    : e < h
                    ? ((a = e % 10), (r = m[Math.floor(e / 10)]), a && ((r += '-' + S[a]), (a = 0)))
                    : e < d
                    ? ((a = e % h), (r = t(Math.floor(e / h)) + ' hundred'))
                    : e < l
                    ? ((a = e % d), (r = t(Math.floor(e / d)) + ' thousand,'))
                    : e < b
                    ? ((a = e % l), (r = t(Math.floor(e / l)) + ' million,'))
                    : e < O
                    ? ((a = e % b), (r = t(Math.floor(e / b)) + ' billion,'))
                    : e < j
                    ? ((a = e % O), (r = t(Math.floor(e / O)) + ' trillion,'))
                    : e <= f && ((a = e % j), (r = t(Math.floor(e / j)) + ' quadrillion,')),
                  n.push(r),
                  t(a, n));
            })(i)),
            e ? o(n) : n
          );
        }
        var v = {
          toOrdinal: function (t) {
            var e = parseInt(t, 10);
            if (!a(e)) throw new TypeError('Not a finite number: ' + t + ' (' + typeof t + ')');
            if (!r(e))
              throw new RangeError(
                'Input is not a safe number, it\u2019s either too large or too small.'
              );
            var n = String(e),
              i = Math.abs(e % 100),
              s = 11 <= i && i <= 13,
              c = n.charAt(n.length - 1);
            return n + (s ? 'th' : '1' === c ? 'st' : '2' === c ? 'nd' : '3' === c ? 'rd' : 'th');
          },
          toWords: g,
          toWordsOrdinal: function (t) {
            return o(g(t));
          },
        };
        t.exports && (e = t.exports = v), (e.numberToWords = v);
      })();
    },
    ggm5: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          getStudents(t, e, a, r, c) {
            return this.httpService
              .httpPost({
                api: 'getStudentsForAttendance',
                data: { branch: t, category: e, course: a, batch: r, lecture: c },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          saveAttendance(t) {
            return this.httpService.httpPost({ api: 'saveAttendance', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getStudentCourseAttendance(t, e, a, r, c) {
            return this.httpService
              .httpPost({
                api: 'getStudentCourseAttendance',
                data: { subject: t, month: e, year: a, student: r, studentCourse: c },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getAttendance(t, e, a, r, c, u, o) {
            return this.httpService
              .httpPost({
                api: 'getAttendance',
                data: {
                  month: t,
                  year: e,
                  branch: a,
                  category: r,
                  course: c,
                  batch: u,
                  student: o,
                },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = c['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    hgTq: function (t, e, a) {
      'use strict';
      var r = a('fCOA'),
        n = a('fXoL');
      let i = (() => {
          class t {
            constructor(t) {
              this.httpService = t;
            }
            setCheckoutDetails(t) {
              this.checkoutDetails = t;
            }
            getCheckoutDetails() {
              return this.checkoutDetails;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(n['\u0275\u0275inject'](r.a));
            }),
            (t.ɵprov = n['\u0275\u0275defineInjectable']({
              token: t,
              factory: t.ɵfac,
              providedIn: 'root',
            })),
            t
          );
        })(),
        s = (() => {
          class t {
            constructor(t) {
              this.httpService = t;
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(n['\u0275\u0275inject'](r.a));
            }),
            (t.ɵprov = n['\u0275\u0275defineInjectable']({
              token: t,
              factory: t.ɵfac,
              providedIn: 'root',
            })),
            t
          );
        })();
      var c = a('s5zK'),
        u = a('aceb'),
        o = a('ofXK');
      a.d(e, 'a', function () {
        return p;
      });
      let p = (() => {
        class t {
          constructor(t, e, a, r, n) {
            (this.checkoutService = t),
              (this.paymentService = e),
              (this.couponService = a),
              (this.toastrService = r),
              (this.ref = n);
          }
          ngOnInit() {
            this.checkoutData = this.paymentService.getPaymentDetails();
          }
          onClose() {
            this.ref.close({ status: !1 });
          }
          applyCoupon() {}
          checkout() {
            this.ref.close({ status: !0 });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              n['\u0275\u0275directiveInject'](i),
              n['\u0275\u0275directiveInject'](c.a),
              n['\u0275\u0275directiveInject'](s),
              n['\u0275\u0275directiveInject'](u.Db),
              n['\u0275\u0275directiveInject'](u.I)
            );
          }),
          (t.ɵcmp = n['\u0275\u0275defineComponent']({
            type: t,
            selectors: [['ngx-checkout']],
            decls: 38,
            vars: 7,
            consts: [
              [1, 'checkout'],
              ['nbButton', '', 'size', 'small', 1, 'float-right', 3, 'click'],
              ['icon', 'close'],
              [1, 'table-responsive'],
              [1, 'table', 'table-bordered'],
              ['type', 'text', 'nbInput', '', 'fullWidth', ''],
              [
                'nbSuffix',
                '',
                'nbButton',
                '',
                'ghost',
                '',
                'nbTooltip',
                'Apply Coupon Now',
                'status',
                'success',
                3,
                'click',
              ],
              ['icon', 'paper-plane-outline'],
              ['nbButton', '', 'status', 'primary', 'size', 'small', 1, 'float-right', 3, 'click'],
            ],
            template: function (t, e) {
              1 & t &&
                (n['\u0275\u0275elementStart'](0, 'nb-card', 0),
                n['\u0275\u0275elementStart'](1, 'nb-card-header'),
                n['\u0275\u0275elementStart'](2, 'button', 1),
                n['\u0275\u0275listener']('click', function () {
                  return e.onClose();
                }),
                n['\u0275\u0275element'](3, 'nb-icon', 2),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementStart'](4, 'h3'),
                n['\u0275\u0275text'](5, 'Checkout'),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementStart'](6, 'nb-card-body'),
                n['\u0275\u0275elementStart'](7, 'div', 3),
                n['\u0275\u0275elementStart'](8, 'table', 4),
                n['\u0275\u0275elementStart'](9, 'tbody'),
                n['\u0275\u0275elementStart'](10, 'tr'),
                n['\u0275\u0275elementStart'](11, 'th'),
                n['\u0275\u0275text'](12, 'Plan Type:'),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementStart'](13, 'td'),
                n['\u0275\u0275text'](14),
                n['\u0275\u0275pipe'](15, 'uppercase'),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementStart'](16, 'tr'),
                n['\u0275\u0275elementStart'](17, 'th'),
                n['\u0275\u0275text'](18, 'Package Type:'),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementStart'](19, 'td'),
                n['\u0275\u0275text'](20),
                n['\u0275\u0275pipe'](21, 'uppercase'),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementStart'](22, 'tr'),
                n['\u0275\u0275elementStart'](23, 'th'),
                n['\u0275\u0275text'](24, 'Amount:'),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementStart'](25, 'td'),
                n['\u0275\u0275text'](26),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementStart'](27, 'tr'),
                n['\u0275\u0275elementStart'](28, 'th'),
                n['\u0275\u0275text'](29, 'Coupon Code:'),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementStart'](30, 'td'),
                n['\u0275\u0275elementStart'](31, 'nb-form-field'),
                n['\u0275\u0275element'](32, 'input', 5),
                n['\u0275\u0275elementStart'](33, 'button', 6),
                n['\u0275\u0275listener']('click', function () {
                  return e.applyCoupon();
                }),
                n['\u0275\u0275element'](34, 'nb-icon', 7),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementStart'](35, 'nb-card-footer'),
                n['\u0275\u0275elementStart'](36, 'button', 8),
                n['\u0275\u0275listener']('click', function () {
                  return e.checkout();
                }),
                n['\u0275\u0275text'](37, ' Checkout '),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd'](),
                n['\u0275\u0275elementEnd']()),
                2 & t &&
                  (n['\u0275\u0275advance'](14),
                  n['\u0275\u0275textInterpolate'](
                    n['\u0275\u0275pipeBind1'](15, 3, e.checkoutData.planType)
                  ),
                  n['\u0275\u0275advance'](6),
                  n['\u0275\u0275textInterpolate'](
                    n['\u0275\u0275pipeBind1'](21, 5, e.checkoutData.packageType)
                  ),
                  n['\u0275\u0275advance'](6),
                  n['\u0275\u0275textInterpolate'](e.checkoutData.amount));
            },
            directives: [u.x, u.z, u.u, u.M, u.w, u.K, u.P, u.vb, u.Fb, u.y],
            pipes: [o.v],
            styles: [
              '.checkout[_ngcontent-%COMP%]{width:60vw;height:auto}@media only screen and (max-width:1200px){.checkout[_ngcontent-%COMP%]{width:65vw}}@media only screen and (max-width:840px){.checkout[_ngcontent-%COMP%]{width:70vw}}@media only screen and (max-width:420px){.checkout[_ngcontent-%COMP%]{width:90vw}}@media only screen and (max-width:300px){.checkout[_ngcontent-%COMP%]{top:2vh;left:2vw;width:96vw}}',
            ],
          })),
          t
        );
      })();
    },
    lst6: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.batches = new s.a([])), (this.batch = new s.a(null));
          }
          setBatchId(t) {
            this.batchId = t;
          }
          getBatchId() {
            return this.batchId;
          }
          deleteBatchId() {
            this.batchId = null;
          }
          setBatchesData(t) {
            this.batches.next(t);
          }
          getBatchesData() {
            return this.batches;
          }
          deleteBatchesData() {
            this.batches.next([]);
          }
          setBatchData(t) {
            this.batch.next(t);
          }
          getBatchData() {
            return this.batch;
          }
          deleteBatchData() {
            this.batch.next(null);
          }
          getBatchName(t) {
            return this.batches.pipe(
              Object(n.a)((e) => {
                const a = e.find((e) => e._id === t);
                return a ? a.basicDetails.batchName : '--';
              })
            );
          }
          getBatches(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getBatches', data: { branch: t, category: e, course: a } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBatch(t) {
            return this.httpService.httpPost({ api: 'getBatch', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getBatchSubjects(t, e) {
            return this.httpService
              .httpPost({ api: 'getBatchSubjects', data: { course: t, batch: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBatchForEditing(t) {
            return this.httpService.httpPost({ api: 'getBatchForEditing', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          addBatch(t) {
            return this.httpService.httpPost({ api: 'newBatch', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editBatch(t) {
            return this.httpService.httpPost({ api: 'updateBatch', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteBatch(t) {
            return this.httpService.httpPost({ api: 'deleteBatch', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          changeBatchStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeBatchStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    m2xi: function (t, e) {
      (t.exports = function (t, e) {
        return e || (t = t.toLowerCase()), t.charAt(0).toUpperCase() + t.substring(1);
      }),
        (t.exports.words = function (t, e) {
          return (
            e || (t = t.toLowerCase()),
            t.replace(
              /(?!^[0-9])(^|[^a-zA-Z\u00C0-\u017F\u0400-\u04FF'])([a-zA-Z\u00C0-\u017F\u0400-\u04FF])/g,
              function (t) {
                return t.toUpperCase();
              }
            )
          );
        });
    },
    pjuo: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.employee = new s.a(null));
          }
          setEmployeeData(t) {
            this.employee.next(t);
          }
          getEmployeeData() {
            return this.employee;
          }
          deleteEmployeeData() {
            this.employee.next(null);
          }
          setEmployeeType(t) {
            this.employeeType = t;
          }
          getEmployeeType() {
            return this.employeeType;
          }
          deleteEmployeeType() {
            this.employeeType = null;
          }
          setEmployeeId(t) {
            this.employeeId = t;
          }
          getEmployeeId() {
            return this.employeeId;
          }
          deleteEmployeeId() {
            this.employeeId = null;
          }
          addEmployee(t, e) {
            return this.httpService
              .httpPost({ api: 'newEmployee', data: { employee: t, branchEmployee: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getEmployees() {
            return this.httpService.httpPost({ api: 'getEmployees', data: {} }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getEmployee(t) {
            return this.httpService.httpPost({ api: 'getEmployee', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getEmployeeByIMSId(t) {
            return this.httpService.httpPost({ api: 'getEmployeeByIMSId', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          searchEmployee(t) {
            return this.httpService
              .httpPost({ api: 'searchEmployee', data: { employeeId: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getEmployeeForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getEmployeeForEditing', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          changeEmployeeStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeEmployeeStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          editEmployee(t) {
            return this.httpService.httpPost({ api: 'updateEmployee', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteEmployee(t) {
            return this.httpService.httpPost({ api: 'deleteEmployee', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    qsE9: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.studentCourseInstallment = new s.a(null));
          }
          setStudentCourseInstallmentData(t) {
            this.studentCourseInstallment.next(t);
          }
          getStudentCourseInstallmentData() {
            return this.studentCourseInstallment;
          }
          deleteStudentCourseInstallmentData() {
            this.studentCourseInstallment.next(null);
          }
          setStudentCourseInstallmentId(t) {
            this.studentCourseInstallmentId = t;
          }
          getStudentCourseInstallmentId() {
            return this.studentCourseInstallmentId;
          }
          deleteStudentCourseInstallmentId() {
            this.studentCourseInstallmentId = null;
          }
          setCourseInstallmentId(t) {
            this.courseInstallmentId = t;
          }
          getCourseInstallmentId() {
            return this.courseInstallmentId;
          }
          deleteCourseInstallmentId() {
            this.courseInstallmentId = null;
          }
          setCourseInstallmentReceipt(t, e) {
            this.studentCourseInstallment.subscribe((a) => {
              if (a) {
                const r = a.installments.findIndex((e) => e._id === t);
                r >= 0 &&
                  ((a.amountCollected = e
                    ? a.amountCollected + a.installments[r].installmentAmount
                    : a.amountCollected - a.installments[r].installmentAmount),
                  (a.pendingAmount = a.totalAmount - a.amountCollected),
                  (a.installments[r].receiptId = e));
              }
            });
          }
          getCourseInstallment(t) {
            return this.studentCourseInstallment.pipe(
              Object(n.a)((e) => (e ? e.installments.find((e) => e._id === t) : null))
            );
          }
          addStudentCourseInstallment(t, e) {
            return this.httpService
              .httpPost({
                api: 'newStudentCourseInstallment',
                data: { studentCourse: t, studentCourseInstallment: e },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseInstallments(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseInstallments', data: { student: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseInstallment(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseInstallment', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseInstallmentForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseInstallmentForEditing', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          changeStudentCourseInstallmentStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeStudentCourseInstallmentStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          editStudentCourseInstallment(t) {
            return this.httpService
              .httpPost({ api: 'updateStudentCourseInstallment', data: t })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteStudentCourseInstallment(t) {
            return this.httpService
              .httpPost({ api: 'deleteStudentCourseInstallment', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    s5zK: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          getPaymentDetails() {
            return this.paymentDetails;
          }
          setPaymentDetails(t, e, a) {
            this.paymentDetails = { planType: t, packageType: e, amount: a };
          }
          deletePaymentDetails() {
            this.paymentDetails = null;
          }
          verifyPayment(t, e) {
            return this.httpService
              .httpPost({ api: 'verifyPayment', data: { payment: t, receipt: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = c['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    xyIN: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return i;
      });
      var r = a('fCOA'),
        n = a('fXoL');
      let i = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          setMembershipType(t) {
            this.membershipType = t;
          }
          getMembershipType() {
            return this.membershipType;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(n['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = n['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    zZNt: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('fCOA'),
        n = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.exam = new s.a(null));
          }
          setExamData(t) {
            this.exam.next(t);
          }
          getExamData() {
            return this.exam;
          }
          deleteExamData() {
            this.exam.next(null);
          }
          setExamId(t) {
            this.examId = t;
          }
          getExamId() {
            return this.examId;
          }
          deleteExamId() {
            this.examId = null;
          }
          getStudentCourseScore(t, e, a, r, s) {
            return this.httpService
              .httpPost({
                api: 'getStudentCourseScore',
                data: { subject: t, month: e, year: a, student: r, studentCourse: s },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentsForExam(t) {
            return this.httpService.httpPost({ api: 'getStudentsForExam', data: { exam: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          saveExam(t) {
            return this.httpService.httpPost({ api: 'saveExam', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getExams(t, e, a, r, s, u, o) {
            return this.httpService
              .httpPost({
                api: 'getExams',
                data: {
                  branch: t,
                  category: e,
                  course: a,
                  batch: r,
                  subject: s,
                  month: u,
                  year: o,
                },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getExamsPerformance(t, e, a, r, s, u, o, p) {
            return this.httpService
              .httpPost({
                api: 'getExamsPerformance',
                data: {
                  month: t,
                  year: e,
                  branch: a,
                  category: r,
                  course: s,
                  batch: u,
                  subject: o,
                  student: p,
                },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getExam(t) {
            return this.httpService.httpPost({ api: 'getExam', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getExamReport(t) {
            return this.httpService.httpPost({ api: 'getExamReport', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getExamForEditing(t) {
            return this.httpService.httpPost({ api: 'getExamForEditing', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editExam(t) {
            return this.httpService.httpPost({ api: 'editExam', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          saveStudentsMarks(t, e) {
            return this.httpService
              .httpPost({ api: 'saveStudentsMarks', data: { id: t, marks: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteExam(t) {
            return this.httpService.httpPost({ api: 'deleteExam', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](r.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    ziii: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var r = a('lJxs'),
        n = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        u = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            (this.httpService = t),
              (this.lectureMaterial = new s.a(null)),
              (this.lectureMaterials = new s.a([]));
          }
          setLectureMaterialId(t) {
            this.lectureMaterialId = t;
          }
          getLectureMaterialId() {
            return this.lectureMaterialId;
          }
          deleteLectureMaterialId() {
            this.lectureMaterialId = null;
          }
          setLectureMaterialsData(t) {
            this.lectureMaterials.next(t);
          }
          getLectureMaterialsData() {
            return this.lectureMaterials;
          }
          deleteLectureMaterialsData() {
            this.lectureMaterials.next([]);
          }
          setLectureMaterialData(t) {
            this.lectureMaterial.next(t);
          }
          getLectureMaterialData() {
            return this.lectureMaterial;
          }
          deleteLectureMaterialData() {
            this.lectureMaterial.next(null);
          }
          getLectureMaterials(t, e, a, i, s) {
            return this.httpService
              .httpPost({
                api: 'getLectureMaterials',
                data: { branch: t, category: e, course: a, batch: i, lecture: s },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          getLectureMaterial(t) {
            return this.httpService.httpPost({ api: 'getLectureMaterials', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
          getLectureMaterialsForStudent(t, e, a, i, s) {
            return this.httpService
              .httpPost({
                api: 'getLectureMaterialsForStudent',
                data: { branch: t, category: e, course: a, batch: i, lecture: s },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          newLectureMaterials(t) {
            return this.httpService.httpPost({ api: 'newLectureMaterials', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(n.a)((t) => Object(c.a)(t))
            );
          }
          changeLectureMaterialStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeLectureMaterialStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
          deleteLectureMaterial(t) {
            return this.httpService
              .httpPost({ api: 'deleteLectureMaterial', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(n.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(u['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = u['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
  },
]);
