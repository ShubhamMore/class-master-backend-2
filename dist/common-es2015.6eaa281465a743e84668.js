(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '/ehT': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let o = (() => {
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
                Object(r.a)((t) => t),
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
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getBranchAllStudentNameIds(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchAllStudentNameIds', data: { branch: t, category: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getBranchStudent(t, e) {
            return this.httpService
              .httpPost({ api: 'addBranchStudent', data: { id: t, student: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          newBranchStudent(t) {
            return this.httpService.httpPost({ api: 'newBranchStudent', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getBranchStudentForEditing(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchStudentForEditing', data: { id: t, student: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          editBranchStudent(t) {
            return this.httpService.httpPost({ api: 'updateBranchStudent', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          changeBranchStudentStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeBranchStudentStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          deleteBranchStudent(t) {
            return this.httpService.httpPost({ api: 'deleteBranchStudent', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](n.a));
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
        return o;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          getBranchDashboard(t) {
            return this.httpService
              .httpPost({ api: 'getBranchDashboard', data: { branch: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getBranchDashboardForEmployee(t) {
            return this.httpService
              .httpPost({ api: 'getBranchDashboardForEmployee', data: { branch: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getStudentBranchDashboard(t) {
            return this.httpService
              .httpPost({ api: 'getStudentBranchDashboard', data: { branch: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](n.a));
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
      var n = a('2Vo4'),
        r = a('fXoL');
      let i = (() => {
        class t {
          constructor() {
            (this.employeeRole = new n.a(null)),
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
          (t.ɵprov = r['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getDiscountAndOffersForStudent(t) {
            return this.httpService
              .httpPost({ api: 'getDiscountAndOffersForStudent', data: { branch: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getDiscountAndOffer(t) {
            return this.httpService.httpPost({ api: 'getDiscountAndOffer', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getDiscountAndOfferForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getDiscountAndOfferForEditing', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          CheckDiscountAndOffer(t, e) {
            return this.httpService
              .httpPost({ api: 'CheckDiscountAndOffer', data: { branch: t, code: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          addDiscountAndOffer(t) {
            return this.httpService.httpPost({ api: 'newDiscountAndOffer', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editDiscountAndOffer(t) {
            return this.httpService.httpPost({ api: 'updateDiscountAndOffer', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteDiscountAndOffer(t) {
            return this.httpService
              .httpPost({ api: 'deleteDiscountAndOffer', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          changeDiscountAndOfferStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeDiscountAndOfferStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    '60TI': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return s;
      });
      var n = a('fCOA'),
        r = a('2Vo4'),
        i = a('fXoL');
      let s = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.subjects = new r.a([])), (this.subject = new r.a(null));
          }
          setSubjectId(t) {
            this.subjectId = t;
          }
          getSubjectId() {
            return this.subjectId;
          }
          deleteSubjectId() {
            this.subjectId = null;
          }
          setSubjectsData(t) {
            this.subjects.next(t);
          }
          getSubjectsData() {
            return this.subjects;
          }
          deleteSubjectsData() {
            this.subjects.next([]);
          }
          setSubjectData(t) {
            this.subject.next(t);
          }
          getSubjectData() {
            return this.subject;
          }
          deleteSubjectData() {
            this.subject.next(null);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(i['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = i['\u0275\u0275defineInjectable']({
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
      var n = a('EQut'),
        r = a('fXoL'),
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
            return new (e || t)(r['\u0275\u0275inject'](n.a), r['\u0275\u0275inject'](i.c));
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
    '6Ox6': function (t, e, a) {
      'use strict';
      var n = a('EQut'),
        r = a('f8CG'),
        i = a('fCOA'),
        s = a('lJxs'),
        c = a('JIr8'),
        o = a('z6cu'),
        u = a('fXoL');
      let p = (() => {
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
              Object(s.a)((t) => t),
              Object(c.a)((t) => Object(o.a)(t))
            );
          }
          generateOrder(t) {
            return this.httpService.httpPost({ api: 'generateOrder', data: t }).pipe(
              Object(s.a)((t) => t),
              Object(c.a)((t) => Object(o.a)(t))
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
      var h = a('cxbk'),
        d = a('nwtg'),
        l = a('s5zK'),
        b = a('aceb');
      a.d(e, 'a', function () {
        return O;
      });
      let O = (() => {
        class t {
          constructor(t, e, a, n, r, i, s) {
            (this.branchService = t),
              (this.paymentService = e),
              (this.couponService = a),
              (this.orderService = n),
              (this.authService = r),
              (this.toastrService = i),
              (this.ref = s);
          }
          ngOnInit() {
            (this.loading = !0),
              (this.user = this.authService.getUserData()),
              (this.paymentDetails = this.paymentService.getPaymentDetails()),
              (this.options = {
                key: h.a.razorpayKeyId,
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
              (this.razorPay = new Razorpay(this.options));
            const t = this.couponService.getAppliedCoupon(),
              e = this.branchService.getBranchId();
            (this.orderDetails = {
              branch: e,
              userId: this.user.imsMasterId,
              userPhone: this.user.phone,
              userName: this.user.name,
              userEmail: this.user.email,
              amount: this.paymentDetails.amount,
              packageType: this.paymentDetails.packageType,
              planType: this.paymentDetails.planType,
            }),
              t && (this.orderDetails.coupon = t.code),
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
                this.showToastr('top-right', 'danger', t), this.onClose();
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
                this.showToastr('top-right', 'danger', t), this.onClose();
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
                this.showToastr('top-right', 'danger', t), this.onClose();
              }
            );
          }
          onClose() {
            this.ref.close();
          }
          showToastr(t, e, a) {
            this.toastrService.show(e, a, { position: t, status: e });
          }
          ngOnDestroy() {
            this.couponService.deleteAppliedCoupon();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              u['\u0275\u0275directiveInject'](n.a),
              u['\u0275\u0275directiveInject'](l.a),
              u['\u0275\u0275directiveInject'](r.a),
              u['\u0275\u0275directiveInject'](p),
              u['\u0275\u0275directiveInject'](d.a),
              u['\u0275\u0275directiveInject'](b.Db),
              u['\u0275\u0275directiveInject'](b.I)
            );
          }),
          (t.ɵcmp = u['\u0275\u0275defineComponent']({
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
    '72bP': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var n = a('lJxs'),
        r = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.employeeLeave = new s.a(null));
          }
          setEmployeeLeaveData(t) {
            this.employeeLeave.next(t);
          }
          getEmployeeLeaveData() {
            return this.employeeLeave;
          }
          deleteEmployeeLeaveData() {
            this.employeeLeave.next(null);
          }
          setEmployeeLeaveId(t) {
            this.employeeLeaveId = t;
          }
          getEmployeeLeaveId() {
            return this.employeeLeaveId;
          }
          deleteEmployeeLeaveId() {
            this.employeeLeaveId = null;
          }
          createEmployeeLeave(t) {
            return this.httpService.httpPost({ api: 'createEmployeeLeave', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          changeEmployeeLeaveStatus(t) {
            return this.httpService.httpPost({ api: 'changeEmployeeLeaveStatus', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          getEmployeeLeaves(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getEmployeeLeaves', data: { employee: t, month: e, year: a } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getBranchAllEmployeeLeaves(t, e, a, i) {
            return this.httpService
              .httpPost({
                api: 'getBranchAllEmployeeLeaves',
                data: { branch: t, employee: e, month: a, year: i },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeLeaves(t, e, a, i) {
            return this.httpService
              .httpPost({
                api: 'getBranchEmployeeLeaves',
                data: { branch: t, employee: e, month: a, year: i },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getMyBranchLeaves(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getMyBranchLeaves', data: { branch: t, month: e, year: a } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getEmployeeLeave(t) {
            return this.httpService.httpPost({ api: 'getEmployeeLeave', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          updateEmployeeLeave(t) {
            return this.httpService.httpPost({ api: 'updateEmployeeLeave', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          deleteEmployeeLeave(t) {
            return this.httpService.httpPost({ api: 'deleteEmployeeLeave', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    '7kqb': function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var n = a('lJxs'),
        r = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getLecturesForStudent(t, e, a, i, s) {
            return this.httpService
              .httpPost({
                api: 'getLecturesForStudent',
                data: { branch: t, category: e, course: a, batch: i, date: s },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getLecture(t) {
            return this.httpService.httpPost({ api: 'getLecture', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          getUpcomingLecturesForEmployee(t) {
            return this.httpService
              .httpPost({ api: 'getUpcomingLecturesForEmployee', data: { branch: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    AVwh: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.assignment = new s.a(null));
          }
          setAssignmentData(t) {
            this.assignment.next(t);
          }
          getAssignmentData() {
            return this.assignment;
          }
          deleteAssignmentData() {
            this.assignment.next(null);
          }
          setAssignmentId(t) {
            this.assignmentId = t;
          }
          getAssignmentId() {
            return this.assignmentId;
          }
          deleteAssignmentId() {
            this.assignmentId = null;
          }
          saveAssignment(t) {
            return this.httpService.httpPost({ api: 'saveAssignment', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getAssignments(t, e, a, n, s, o, u) {
            return this.httpService
              .httpPost({
                api: 'getAssignments',
                data: {
                  branch: t,
                  category: e,
                  course: a,
                  batch: n,
                  subject: s,
                  month: o,
                  year: u,
                },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getAssignmentsForStudent(t, e, a, n, s, o, u) {
            return this.httpService
              .httpPost({
                api: 'getAssignmentsForStudent',
                data: {
                  branch: t,
                  category: e,
                  course: a,
                  batch: n,
                  subject: s,
                  month: o,
                  year: u,
                },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getAssignment(t) {
            return this.httpService.httpPost({ api: 'getAssignment', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          updateAssignment(t) {
            return this.httpService.httpPost({ api: 'updateAssignment', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          changeAssignmentStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeAssignmentStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteAssignmentAttachment(t, e) {
            return this.httpService
              .httpPost({ api: 'deleteAssignmentAttachment', data: { id: t, publicId: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteAssignment(t) {
            return this.httpService.httpPost({ api: 'deleteAssignment', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getLeads(t, e, a, n) {
            return this.httpService
              .httpPost({
                api: 'getLeads',
                data: { branch: t, category: e, course: a, leadType: n },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getLead(t) {
            return this.httpService.httpPost({ api: 'getLead', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getLeadForEditing(t) {
            return this.httpService.httpPost({ api: 'getLeadForEditing', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editLead(t) {
            return this.httpService.httpPost({ api: 'editLead', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          changeLeadStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeLeadStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteLead(t) {
            return this.httpService.httpPost({ api: 'deleteLead', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('lJxs'),
        r = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getCourseMaterial(t) {
            return this.httpService.httpPost({ api: 'getCourseMaterials', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          getCourseMaterialsForStudent(t, e, a, i) {
            return this.httpService
              .httpPost({
                api: 'getCourseMaterialsForStudent',
                data: { branch: t, category: e, course: a, subject: i },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          newCourseMaterials(t) {
            return this.httpService.httpPost({ api: 'newCourseMaterials', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          changeCourseMaterialStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeCourseMaterialStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          deleteCourseMaterial(t) {
            return this.httpService.httpPost({ api: 'deleteCourseMaterial', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
              Object(r.a)((e) => {
                const a = e.find((e) => e._id === t);
                return a ? a.basicDetails.courseName : '--';
              })
            );
          }
          getCourses(t, e) {
            return this.httpService
              .httpPost({ api: 'getCourses', data: { branch: t, category: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getCourse(t) {
            return this.httpService.httpPost({ api: 'getCourse', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getCourseForEditing(t) {
            return this.httpService.httpPost({ api: 'getCourseForEditing', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          addCourse(t) {
            return this.httpService.httpPost({ api: 'newCourse', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editCourse(t) {
            return this.httpService.httpPost({ api: 'updateCourse', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteCourse(t) {}
          changeCourseStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeCourseStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
            return this.getStudentData().pipe(Object(r.a)((t) => (t ? t.name : '--')));
          }
          addStudent(t, e) {
            return this.httpService
              .httpPost({ api: 'newStudent', data: { student: t, branchStudent: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudents() {
            return this.httpService.httpPost({ api: 'getStudents', data: {} }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getStudent(t) {
            return this.httpService.httpPost({ api: 'getStudent', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getStudentByImsId(t) {
            return this.httpService
              .httpPost({ api: 'getStudentByImsId', data: { studentImsId: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          searchStudent(t) {
            return this.httpService.httpPost({ api: 'searchStudent', data: { studentId: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getStudentForEditing(t) {
            return this.httpService.httpPost({ api: 'getStudentForEditing', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          changeStudentStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeStudentStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          editStudent(t) {
            return this.httpService.httpPost({ api: 'updateStudent', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteStudent(t) {
            return this.httpService.httpPost({ api: 'deleteStudent', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
          getLectureQuestionAnswers(t, e, a, n, s) {
            return this.httpService
              .httpPost({
                api: 'getLectureQuestionAnswers',
                data: { branch: t, category: e, course: a, batch: n, lecture: s },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getLectureQuestionAnswer(t) {
            return this.httpService
              .httpPost({ api: 'getLectureQuestionAnswer', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          newLectureQuestion(t) {
            return this.httpService.httpPost({ api: 'newLectureQuestion', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editLectureQuestion(t) {
            return this.httpService.httpPost({ api: 'editLectureQuestion', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteLectureQuestion(t) {
            return this.httpService
              .httpPost({ api: 'deleteLectureQuestion', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          newLectureQuestionAnswer(t) {
            return this.httpService.httpPost({ api: 'newLectureQuestionAnswer', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editLectureQuestionAnswer(t) {
            return this.httpService.httpPost({ api: 'editLectureQuestionAnswer', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteLectureQuestionAnswer(t) {
            return this.httpService
              .httpPost({ api: 'deleteLectureQuestionAnswer', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
      var n = a('fXoL'),
        r = a('jhN1');
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
            return new (e || t)(n['\u0275\u0275directiveInject'](r.b));
          }),
          (t.ɵpipe = n['\u0275\u0275definePipe']({ name: 'safeUrl', type: t, pure: !0 })),
          t
        );
      })();
    },
    L3Ly: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return r;
      });
      var n = a('fXoL');
      let r = (() => {
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
          (t.ɵprov = n['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('lJxs'),
        r = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          changeScheduleStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeScheduleStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getAllSchedules(t, e, a, i, s, o) {
            return this.httpService
              .httpPost({
                api: 'getAllSchedule',
                data: { branch: t, category: e, course: a, batch: i, startDate: s, endDate: o },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getSchedule(t) {
            return this.httpService.httpPost({ api: 'getSchedule', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          getScheduleForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getScheduleForEditing', data: { schedule: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          editSchedule(t) {
            return this.httpService.httpPost({ api: 'editSchedule', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          deleteSchedule(t) {
            return this.httpService.httpPost({ api: 'deleteSchedule', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return r;
      });
      var n = a('fXoL');
      let r = (() => {
        class t {}
        return (
          (t.ɵmod = n['\u0275\u0275defineNgModule']({ type: t })),
          (t.ɵinj = n['\u0275\u0275defineInjector']({
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeesForBatch(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeesForBatch', data: { branch: t, role: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeNameIds(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeeNameIds', data: { branch: t, type: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchAllEmployeeNameIds(t) {
            return this.httpService
              .httpPost({ api: 'getBranchAllEmployeeNameIds', data: { branch: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeNameIdsForBatch(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeeNameIdsForBatch', data: { branch: t, role: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployee(t, e) {
            return this.httpService
              .httpPost({ api: 'addBranchEmployee', data: { id: t, employee: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeRole(t) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeeRole', data: { branch: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeForSalary(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeeForSalary', data: { id: t, employee: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          newBranchEmployee(t) {
            return this.httpService.httpPost({ api: 'newBranchEmployee', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getBranchEmployeeForEditing(t, e) {
            return this.httpService
              .httpPost({ api: 'getBranchEmployeeForEditing', data: { id: t, employee: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          editBranchEmployee(t) {
            return this.httpService.httpPost({ api: 'updateBranchEmployee', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          changeBranchEmployeeStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeBranchEmployeeStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteBranchEmployee(t) {
            return this.httpService.httpPost({ api: 'deleteBranchEmployee', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    R6I3: function (t, e, a) {},
    RSY0: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var n = a('lJxs'),
        r = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.onlineExam = new s.a(null)), (this.date = null);
          }
          getSearchDate() {
            return this.date;
          }
          setSearchDate(t) {
            this.date = t;
          }
          setOnlineExamData(t) {
            this.onlineExam.next(t);
          }
          getOnlineExamData() {
            return this.onlineExam;
          }
          deleteOnlineExamData() {
            this.onlineExam.next(null);
          }
          setOnlineExamId(t) {
            this.onlineExamId = t;
          }
          getOnlineExamId() {
            return this.onlineExamId;
          }
          deleteOnlineExamId() {
            this.onlineExamId = null;
          }
          getOnlineExam(t) {
            return this.httpService.httpPost({ api: 'getOnlineExam', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          getOnlineExamForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getOnlineExamForEditing', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getOnlineExams(t, e, a, i, s, o, u) {
            return this.httpService
              .httpPost({
                api: 'getOnlineExams',
                data: {
                  branch: t,
                  category: e,
                  course: a,
                  batch: i,
                  subject: s,
                  month: o,
                  year: u,
                },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getOnlineExamsForStudent(t, e, a, i, s, o, u) {
            return this.httpService
              .httpPost({
                api: 'getOnlineExamsForStudent',
                data: {
                  branch: t,
                  category: e,
                  course: a,
                  batch: i,
                  subject: s,
                  month: o,
                  year: u,
                },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          addOnlineExam(t) {
            return this.httpService.httpPost({ api: 'newOnlineExam', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          editOnlineExam(t) {
            return this.httpService.httpPost({ api: 'editOnlineExam', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          changeOnlineExamStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeOnlineExamStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          deleteOnlineExam(t) {
            return this.httpService.httpPost({ api: 'deleteOnlineExam', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          saveOnlineExamResult(t, e) {
            return this.httpService
              .httpPost({
                api: 'saveOnlineExamResult',
                data: { studentQuestionAnswers: t, onlineExam: e },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getOnlineExamResult(t) {
            return this.httpService.httpPost({ api: 'getOnlineExamResult', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    Vw3K: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return c;
      });
      var n = a('gbKz'),
        r = a.n(n),
        i = a('m2xi'),
        s = a.n(i);
      function c(t) {
        const e = r.a
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourses(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getStudentCourses', data: { branch: t, category: e, student: a } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentAllCourses(t) {
            return this.httpService
              .httpPost({ api: 'getStudentAllCourses', data: { branch: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourse(t) {
            return this.httpService.httpPost({ api: 'getStudentCourse', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          checkBatchRollNumber(t, e, a, n, s) {
            return this.httpService
              .httpPost({
                api: 'checkBatchRollNumber',
                data: { branch: t, category: e, course: a, batch: n, rollNumber: s },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseForEditing', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          changeStudentCourseStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeStudentCourseStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
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
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteStudentCourse(t) {
            return this.httpService.httpPost({ api: 'deleteStudentCourse', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('lJxs'),
        r = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          changeEmployeeSalaryStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeEmployeeSalaryStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getBranchEmployeeSalaries(t, e, a, i) {
            return this.httpService
              .httpPost({
                api: 'getBranchEmployeeSalaries',
                data: { branch: t, employee: e, month: a, year: i },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getMyBranchSalaries(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getMyBranchSalaries', data: { branch: t, month: e, year: a } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getEmployeeSalaries(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getEmployeeSalaries', data: { employee: t, month: e, year: a } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getEmployeeSalary(t) {
            return this.httpService.httpPost({ api: 'getEmployeeSalary', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          deleteEmployeeSalary(t) {
            return this.httpService.httpPost({ api: 'deleteEmployeeSalary', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    cbqz: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.assignmentSubmission = new s.a(null));
          }
          setAssignmentSubmissionData(t) {
            this.assignmentSubmission.next(t);
          }
          getAssignmentSubmissionData() {
            return this.assignmentSubmission;
          }
          deleteAssignmentSubmissionData() {
            this.assignmentSubmission.next(null);
          }
          setAssignmentSubmissionId(t) {
            this.assignmentSubmissionId = t;
          }
          getAssignmentSubmissionId() {
            return this.assignmentSubmissionId;
          }
          deleteAssignmentSubmissionId() {
            this.assignmentSubmissionId = null;
          }
          submitAssignment(t) {
            return this.httpService.httpPost({ api: 'submitAssignment', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getAssignmentSubmissions(t) {
            return this.httpService
              .httpPost({ api: 'getAssignmentSubmissions', data: { assignment: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getSubmissionOfAssignment(t) {
            return this.httpService
              .httpPost({ api: 'getSubmissionOfAssignment', data: { assignment: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getAssignmentSubmission(t) {
            return this.httpService
              .httpPost({ api: 'getAssignmentSubmission', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          saveAssignmentSubmissionGrades(t) {
            return this.httpService
              .httpPost({ api: 'saveAssignmentSubmissionGrades', data: t })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          updateAssignmentSubmission(t) {
            return this.httpService.httpPost({ api: 'updateAssignmentSubmission', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteAssignmentSubmission(t) {
            return this.httpService
              .httpPost({ api: 'deleteAssignmentSubmission', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return n;
      });
      const n = {
        production: !0,
        backend: '',
        encKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
        aesKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
        razorpayKeyId: 'rzp_test_1JFxmyJ8eg8wQZ',
        zoomLiveURL: '/online-meeting/#/live',
        SOCKET_ENDPOINT: '/classMasterSocketConnection',
      };
    },
    emOf: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var n = a('lJxs'),
        r = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          generateStudentCourseInstallmentReceipt(t, e) {
            return this.httpService
              .httpPost({
                api: 'generateStudentCourseInstallmentReceipt',
                data: { order: t, receipt: e },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          changeStudentCourseInstallmentReceiptStatus(t, e) {
            return this.httpService
              .httpPost({
                api: 'changeStudentCourseInstallmentReceiptStatus',
                data: { id: t, status: e },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getAllStudentCourseInstallmentReceipts(t) {
            return this.httpService
              .httpPost({ api: 'getAllStudentCourseInstallmentReceipts', data: { student: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getStudentAllCourseInstallmentReceiptsForStudent(t) {
            return this.httpService
              .httpPost({
                api: 'getStudentAllCourseInstallmentReceiptsForStudent',
                data: { student: t },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseInstallmentReceipt(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseInstallmentReceipt', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseInstallmentReceiptForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseInstallmentReceiptForEditing', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          editStudentCourseInstallmentReceipt(t) {
            return this.httpService
              .httpPost({ api: 'editStudentCourseInstallmentReceipt', data: t })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          deleteStudentCourseInstallmentReceipt(t) {
            return this.httpService
              .httpPost({ api: 'deleteStudentCourseInstallmentReceipt', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    f8CG: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            (this.httpService = t),
              (this.discountTypes = ['percentage', 'amount']),
              (this.coupon = new s.a(null));
          }
          getDiscountTypes() {
            return this.discountTypes;
          }
          setCouponId(t) {
            this.couponId = t;
          }
          getCouponId() {
            return this.couponId;
          }
          deleteCouponId() {
            this.couponId = null;
          }
          setAppliedCoupon(t) {
            this.appliedCoupon = t;
          }
          getAppliedCoupon() {
            return this.appliedCoupon;
          }
          deleteAppliedCoupon() {
            this.appliedCoupon = null;
          }
          setCouponData(t) {
            this.coupon.next(t);
          }
          getCouponData() {
            return this.coupon;
          }
          deleteCouponData() {
            this.coupon.next(null);
          }
          getCoupons() {
            return this.httpService.httpPost({ api: 'getCoupons', data: {} }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getCoupon(t) {
            return this.httpService.httpPost({ api: 'getCoupon', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getCouponForEditing(t) {
            return this.httpService.httpPost({ api: 'getCouponForEditing', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          addCoupon(t) {
            return this.httpService.httpPost({ api: 'newCoupon', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editCoupon(t) {
            return this.httpService.httpPost({ api: 'updateCoupon', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteCoupon(t) {
            return this.httpService.httpPost({ api: 'deleteCoupon', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          changeCouponStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeCouponStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          checkCoupon(t) {
            return this.httpService.httpPost({ api: 'checkCoupon', data: { code: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          validateCoupon(t) {
            return this.httpService.httpPost({ api: 'validateCoupon', data: { code: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getBillingDetails(t) {
            return this.httpService
              .httpPost({ api: 'getBillingDetails', data: { branch: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return o;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let o = (() => {
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
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          changePassword(t) {
            return this.httpService.httpPost({ api: 'changePassword', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          saveProfile(t) {
            return this.httpService.httpPost({ api: 'saveProfile', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getProfile() {
            return this.httpService.httpPost({ api: 'getProfile', data: {} }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](n.a));
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
        function n(t) {
          return 'number' == typeof t && Math.abs(t) <= 9007199254740991;
        }
        ('object' == typeof self && self.self === self && self) ||
          ('object' == typeof global && global.global === global && global);
        var r = /(hundred|thousand|(m|b|tr|quadr)illion)$/,
          i = /teen$/,
          s = /y$/,
          c = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,
          o = {
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
        function u(t) {
          return r.test(t) || i.test(t)
            ? t + 'th'
            : s.test(t)
            ? t.replace(s, 'ieth')
            : c.test(t)
            ? t.replace(c, p)
            : t;
        }
        function p(t, e) {
          return o[e];
        }
        var h = 100,
          d = 1e3,
          l = 1e6,
          b = 1e9,
          O = 1e12,
          j = 1e15,
          m = 9007199254740992,
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
          f = [
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
          var r,
            i = parseInt(t, 10);
          if (!a(i)) throw new TypeError('Not a finite number: ' + t + ' (' + typeof t + ')');
          if (!n(i))
            throw new RangeError(
              'Input is not a safe number, it\u2019s either too large or too small.'
            );
          return (
            (r = (function t(e) {
              var a,
                n,
                r = arguments[1];
              return 0 === e
                ? r
                  ? r.join(' ').replace(/,$/, '')
                  : 'zero'
                : (r || (r = []),
                  e < 0 && (r.push('minus'), (e = Math.abs(e))),
                  e < 20
                    ? ((a = 0), (n = S[e]))
                    : e < h
                    ? ((a = e % 10), (n = f[Math.floor(e / 10)]), a && ((n += '-' + S[a]), (a = 0)))
                    : e < d
                    ? ((a = e % h), (n = t(Math.floor(e / h)) + ' hundred'))
                    : e < l
                    ? ((a = e % d), (n = t(Math.floor(e / d)) + ' thousand,'))
                    : e < b
                    ? ((a = e % l), (n = t(Math.floor(e / l)) + ' million,'))
                    : e < O
                    ? ((a = e % b), (n = t(Math.floor(e / b)) + ' billion,'))
                    : e < j
                    ? ((a = e % O), (n = t(Math.floor(e / O)) + ' trillion,'))
                    : e <= m && ((a = e % j), (n = t(Math.floor(e / j)) + ' quadrillion,')),
                  r.push(n),
                  t(a, r));
            })(i)),
            e ? u(r) : r
          );
        }
        var v = {
          toOrdinal: function (t) {
            var e = parseInt(t, 10);
            if (!a(e)) throw new TypeError('Not a finite number: ' + t + ' (' + typeof t + ')');
            if (!n(e))
              throw new RangeError(
                'Input is not a safe number, it\u2019s either too large or too small.'
              );
            var r = String(e),
              i = Math.abs(e % 100),
              s = 11 <= i && i <= 13,
              c = r.charAt(r.length - 1);
            return r + (s ? 'th' : '1' === c ? 'st' : '2' === c ? 'nd' : '3' === c ? 'rd' : 'th');
          },
          toWords: g,
          toWordsOrdinal: function (t) {
            return u(g(t));
          },
        };
        t.exports && (e = t.exports = v), (e.numberToWords = v);
      })();
    },
    ggm5: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          getStudents(t, e, a, n, c) {
            return this.httpService
              .httpPost({
                api: 'getStudentsForAttendance',
                data: { branch: t, category: e, course: a, batch: n, lecture: c },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          saveAttendance(t) {
            return this.httpService.httpPost({ api: 'saveAttendance', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getStudentCourseAttendance(t, e, a, n, c) {
            return this.httpService
              .httpPost({
                api: 'getStudentCourseAttendance',
                data: { subject: t, month: e, year: a, student: n, studentCourse: c },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getAttendance(t, e, a, n, c, o, u) {
            return this.httpService
              .httpPost({
                api: 'getAttendance',
                data: {
                  month: t,
                  year: e,
                  branch: a,
                  category: n,
                  course: c,
                  batch: o,
                  student: u,
                },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](n.a));
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
    gmaa: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var n = a('lJxs'),
        r = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.onlineExamQuestion = new s.a(null));
          }
          setOnlineExamQuestionData(t) {
            this.onlineExamQuestion.next(t);
          }
          getOnlineExamQuestionData() {
            return this.onlineExamQuestion;
          }
          deleteOnlineExamQuestionData() {
            this.onlineExamQuestion.next(null);
          }
          setOnlineExamQuestionId(t) {
            this.onlineExamQuestionId = t;
          }
          getOnlineExamQuestionId() {
            return this.onlineExamQuestionId;
          }
          deleteOnlineExamQuestionId() {
            this.onlineExamQuestionId = null;
          }
          newOnlineExamQuestion(t) {
            return this.httpService.httpPost({ api: 'newOnlineExamQuestion', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          getOnlineExamQuestion(t) {
            return this.httpService
              .httpPost({ api: 'getOnlineExamQuestion', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getOnlineExamQuestions(t) {
            return this.httpService
              .httpPost({ api: 'getOnlineExamQuestions', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getOnlineExamQuestionsForStudent(t) {
            return this.httpService
              .httpPost({ api: 'getOnlineExamQuestionsForStudent', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          changeOnlineExamQuestionStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeOnlineExamQuestionStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          editOnlineExamQuestion(t) {
            return this.httpService.httpPost({ api: 'editOnlineExamQuestion', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          deleteOnlineExamQuestion(t) {
            return this.httpService
              .httpPost({ api: 'deleteOnlineExamQuestion', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
      var n = a('fCOA'),
        r = a('fXoL');
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
            return new (e || t)(r['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = r['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
      var s = a('f8CG'),
        c = a('s5zK'),
        o = a('aceb'),
        u = a('ofXK');
      function p(t, e) {
        if (1 & t) {
          const t = r['\u0275\u0275getCurrentView']();
          r['\u0275\u0275elementStart'](0, 'tr'),
            r['\u0275\u0275elementStart'](1, 'th'),
            r['\u0275\u0275text'](2, 'Coupon Code:'),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementStart'](3, 'td'),
            r['\u0275\u0275elementStart'](4, 'nb-form-field'),
            r['\u0275\u0275elementStart'](5, 'input', 7),
            r['\u0275\u0275listener']('input', function (e) {
              return (
                r['\u0275\u0275restoreView'](t),
                r['\u0275\u0275nextContext']().changeCouponCode(e.target.value)
              );
            }),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementStart'](6, 'button', 8),
            r['\u0275\u0275listener']('click', function () {
              return r['\u0275\u0275restoreView'](t), r['\u0275\u0275nextContext']().applyCoupon();
            }),
            r['\u0275\u0275element'](7, 'nb-icon', 9),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementEnd']();
        }
      }
      function h(t, e) {
        if (
          (1 & t &&
            (r['\u0275\u0275elementStart'](0, 'tr'),
            r['\u0275\u0275elementStart'](1, 'th'),
            r['\u0275\u0275text'](2, 'Coupon Code:'),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementStart'](3, 'td'),
            r['\u0275\u0275text'](4),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = r['\u0275\u0275nextContext']();
          r['\u0275\u0275advance'](4), r['\u0275\u0275textInterpolate'](t.coupon.code);
        }
      }
      function d(t, e) {
        if (
          (1 & t &&
            (r['\u0275\u0275elementStart'](0, 'tr'),
            r['\u0275\u0275elementStart'](1, 'th'),
            r['\u0275\u0275text'](2, 'Discount:'),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementStart'](3, 'td'),
            r['\u0275\u0275text'](4),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = r['\u0275\u0275nextContext']();
          r['\u0275\u0275advance'](4), r['\u0275\u0275textInterpolate'](t.coupon.discount);
        }
      }
      function l(t, e) {
        if (
          (1 & t &&
            (r['\u0275\u0275elementStart'](0, 'tr'),
            r['\u0275\u0275elementStart'](1, 'th'),
            r['\u0275\u0275text'](2, 'Discount Amount:'),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementStart'](3, 'td'),
            r['\u0275\u0275text'](4),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = r['\u0275\u0275nextContext']();
          r['\u0275\u0275advance'](4),
            r['\u0275\u0275textInterpolate1']('', t.getAmount(t.coupon.discountAmount), '/-');
        }
      }
      function b(t, e) {
        if (
          (1 & t &&
            (r['\u0275\u0275elementStart'](0, 'tr'),
            r['\u0275\u0275elementStart'](1, 'th'),
            r['\u0275\u0275text'](2, 'Total Amount:'),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementStart'](3, 'td'),
            r['\u0275\u0275text'](4),
            r['\u0275\u0275elementEnd'](),
            r['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = r['\u0275\u0275nextContext']();
          r['\u0275\u0275advance'](4),
            r['\u0275\u0275textInterpolate1']('', t.getAmount(t.coupon.totalAmount), '/-');
        }
      }
      a.d(e, 'a', function () {
        return O;
      });
      let O = (() => {
        class t {
          constructor(t, e, a, n, r) {
            (this.checkoutService = t),
              (this.couponService = e),
              (this.paymentService = a),
              (this.toastrService = n),
              (this.ref = r);
          }
          ngOnInit() {
            (this.couponCode = null), (this.checkoutData = this.paymentService.getPaymentDetails());
          }
          onClose() {
            this.ref.close({ status: !1 });
          }
          changeCouponCode(t) {
            this.couponCode = t;
          }
          calculateCouponDiscount(t) {
            let e = this.checkoutData.amount,
              a = t.discountAmount;
            'percentage' === t.discountType && (a = (e / 100) * t.discountAmount),
              (e -= a),
              (this.coupon = {
                code: t.code,
                discount: `${
                  'percentage' === t.discountType
                    ? t.discountAmount
                    : this.getAmount(t.discountAmount)
                }${'percentage' === t.discountType ? '%' : '/-'}`,
                discountAmount: a,
                totalAmount: e,
              }),
              this.couponService.setAppliedCoupon(this.coupon);
          }
          applyCoupon() {
            this.couponCode &&
              this.couponService.validateCoupon(this.couponCode).subscribe(
                (t) => {
                  this.calculateCouponDiscount(t);
                },
                (t) => {
                  this.showToastr('top-right', 'danger', t);
                }
              );
          }
          getAmount(t) {
            return (t = parseFloat(t.toString())).toFixed(2).toString();
          }
          showToastr(t, e, a) {
            this.toastrService.show(e, a, { position: t, status: e });
          }
          checkout() {
            this.ref.close({ status: !0 });
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              r['\u0275\u0275directiveInject'](i),
              r['\u0275\u0275directiveInject'](s.a),
              r['\u0275\u0275directiveInject'](c.a),
              r['\u0275\u0275directiveInject'](o.Db),
              r['\u0275\u0275directiveInject'](o.I)
            );
          }),
          (t.ɵcmp = r['\u0275\u0275defineComponent']({
            type: t,
            selectors: [['ngx-checkout']],
            decls: 35,
            vars: 12,
            consts: [
              [1, 'checkout'],
              ['nbButton', '', 'size', 'small', 1, 'float-right', 3, 'click'],
              ['icon', 'close'],
              [1, 'table-responsive'],
              [1, 'table', 'table-bordered'],
              [4, 'ngIf'],
              [
                'type',
                'button',
                'nbButton',
                '',
                'status',
                'primary',
                'size',
                'small',
                1,
                'float-right',
                3,
                'click',
              ],
              ['type', 'text', 'nbInput', '', 'fullWidth', '', 3, 'input'],
              [
                'type',
                'button',
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
            ],
            template: function (t, e) {
              1 & t &&
                (r['\u0275\u0275elementStart'](0, 'nb-card', 0),
                r['\u0275\u0275elementStart'](1, 'nb-card-header'),
                r['\u0275\u0275elementStart'](2, 'button', 1),
                r['\u0275\u0275listener']('click', function () {
                  return e.onClose();
                }),
                r['\u0275\u0275element'](3, 'nb-icon', 2),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementStart'](4, 'h3'),
                r['\u0275\u0275text'](5, 'Checkout'),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementStart'](6, 'nb-card-body'),
                r['\u0275\u0275elementStart'](7, 'div', 3),
                r['\u0275\u0275elementStart'](8, 'table', 4),
                r['\u0275\u0275elementStart'](9, 'tbody'),
                r['\u0275\u0275elementStart'](10, 'tr'),
                r['\u0275\u0275elementStart'](11, 'th'),
                r['\u0275\u0275text'](12, 'Plan Type:'),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementStart'](13, 'td'),
                r['\u0275\u0275text'](14),
                r['\u0275\u0275pipe'](15, 'uppercase'),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementStart'](16, 'tr'),
                r['\u0275\u0275elementStart'](17, 'th'),
                r['\u0275\u0275text'](18, 'Package Type:'),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementStart'](19, 'td'),
                r['\u0275\u0275text'](20),
                r['\u0275\u0275pipe'](21, 'uppercase'),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementStart'](22, 'tr'),
                r['\u0275\u0275elementStart'](23, 'th'),
                r['\u0275\u0275text'](24, 'Amount:'),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementStart'](25, 'td'),
                r['\u0275\u0275text'](26),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275template'](27, p, 8, 0, 'tr', 5),
                r['\u0275\u0275template'](28, h, 5, 1, 'tr', 5),
                r['\u0275\u0275template'](29, d, 5, 1, 'tr', 5),
                r['\u0275\u0275template'](30, l, 5, 1, 'tr', 5),
                r['\u0275\u0275template'](31, b, 5, 1, 'tr', 5),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementStart'](32, 'nb-card-footer'),
                r['\u0275\u0275elementStart'](33, 'button', 6),
                r['\u0275\u0275listener']('click', function () {
                  return e.checkout();
                }),
                r['\u0275\u0275text'](34, ' Checkout '),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementEnd'](),
                r['\u0275\u0275elementEnd']()),
                2 & t &&
                  (r['\u0275\u0275advance'](14),
                  r['\u0275\u0275textInterpolate'](
                    r['\u0275\u0275pipeBind1'](15, 8, e.checkoutData.planType)
                  ),
                  r['\u0275\u0275advance'](6),
                  r['\u0275\u0275textInterpolate'](
                    r['\u0275\u0275pipeBind1'](21, 10, e.checkoutData.packageType)
                  ),
                  r['\u0275\u0275advance'](6),
                  r['\u0275\u0275textInterpolate1']('', e.getAmount(e.checkoutData.amount), '/-'),
                  r['\u0275\u0275advance'](1),
                  r['\u0275\u0275property']('ngIf', !e.coupon),
                  r['\u0275\u0275advance'](1),
                  r['\u0275\u0275property']('ngIf', e.coupon),
                  r['\u0275\u0275advance'](1),
                  r['\u0275\u0275property']('ngIf', e.coupon),
                  r['\u0275\u0275advance'](1),
                  r['\u0275\u0275property']('ngIf', e.coupon),
                  r['\u0275\u0275advance'](1),
                  r['\u0275\u0275property']('ngIf', e.coupon));
            },
            directives: [o.x, o.z, o.u, o.M, o.w, u.n, o.y, o.K, o.P, o.vb, o.Fb],
            pipes: [u.v],
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
              Object(r.a)((e) => {
                const a = e.find((e) => e._id === t);
                return a ? a.basicDetails.batchName : '--';
              })
            );
          }
          getBatches(t, e, a) {
            return this.httpService
              .httpPost({ api: 'getBatches', data: { branch: t, category: e, course: a } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBatch(t) {
            return this.httpService.httpPost({ api: 'getBatch', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getBatchSubjects(t, e) {
            return this.httpService
              .httpPost({ api: 'getBatchSubjects', data: { course: t, batch: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getBatchForEditing(t) {
            return this.httpService.httpPost({ api: 'getBatchForEditing', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          addBatch(t) {
            return this.httpService.httpPost({ api: 'newBatch', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editBatch(t) {
            return this.httpService.httpPost({ api: 'updateBatch', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteBatch(t) {
            return this.httpService.httpPost({ api: 'deleteBatch', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          changeBatchStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeBatchStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
    nPMn: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return o;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let o = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          setLocalInstitutePaymentAccessKey(t) {
            this.institutePaymentAccessKey = t;
          }
          getLocalInstitutePaymentAccessKey() {
            return this.institutePaymentAccessKey;
          }
          getInstituteKeys() {
            return this.httpService.httpPost({ api: 'getInstituteKeys', data: {} }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getInstitutePaymentAccessKey(t) {
            return this.httpService
              .httpPost({ api: 'getInstitutePaymentAccessKey', data: { branch: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          saveInstitutePaymentGatewayKeys(t) {
            return this.httpService
              .httpPost({ api: 'saveInstitutePaymentGatewayKeys', data: { keys: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          saveInstituteZoomKeys(t) {
            return this.httpService.httpPost({ api: 'saveInstituteZoomKeys', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          generateZoomAuthToken() {
            return this.httpService.httpGet({ api: 'generateZoomAuthToken' }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getZoomAuthLink() {
            return this.httpService.httpPost({ api: 'getZoomAuthLink', data: {} }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](n.a));
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
    pjuo: function (t, e, a) {
      'use strict';
      a.d(e, 'a', function () {
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getEmployees() {
            return this.httpService.httpPost({ api: 'getEmployees', data: {} }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getEmployee(t) {
            return this.httpService.httpPost({ api: 'getEmployee', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getEmployeeByIMSId(t) {
            return this.httpService.httpPost({ api: 'getEmployeeByIMSId', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          searchEmployee(t) {
            return this.httpService
              .httpPost({ api: 'searchEmployee', data: { employeeId: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getEmployeeForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getEmployeeForEditing', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          changeEmployeeStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeEmployeeStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          editEmployee(t) {
            return this.httpService.httpPost({ api: 'updateEmployee', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          deleteEmployee(t) {
            return this.httpService.httpPost({ api: 'deleteEmployee', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            (this.httpService = t),
              (this.studentCourseInstallments = new s.a(null)),
              (this.courseInstallment = new s.a(null));
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
          setStudentCourseInstallmentData(t) {
            this.studentCourseInstallments.next(t);
          }
          getStudentCourseInstallmentData() {
            return this.studentCourseInstallments;
          }
          deleteStudentCourseInstallmentData() {
            this.studentCourseInstallments.next(null);
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
          setCourseInstallmentData(t) {
            this.courseInstallment.next(t);
          }
          getCourseInstallmentData() {
            return this.courseInstallment;
          }
          deleteCourseInstallmentData() {
            this.courseInstallment.next(null);
          }
          setCourseInstallmentReceipt(t, e) {
            this.studentCourseInstallments.subscribe((a) => {
              if (a) {
                const n = a.installments.findIndex((e) => e._id === t);
                n >= 0 &&
                  ((a.amountCollected = e
                    ? a.amountCollected + a.installments[n].installmentAmount
                    : a.amountCollected - a.installments[n].installmentAmount),
                  (a.pendingAmount = a.totalAmount - a.amountCollected),
                  (a.installments[n].receiptId = e));
              }
            });
          }
          getCourseInstallment(t) {
            return this.studentCourseInstallments.pipe(
              Object(r.a)((e) => (e ? e.installments.find((e) => e._id === t) : null))
            );
          }
          addStudentCourseInstallment(t, e) {
            return this.httpService
              .httpPost({
                api: 'newStudentCourseInstallment',
                data: { studentCourse: t, studentCourseInstallment: e },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseInstallments(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseInstallments', data: { student: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseInstallment(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseInstallment', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentCourseInstallmentForEditing(t) {
            return this.httpService
              .httpPost({ api: 'getStudentCourseInstallmentForEditing', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          changeStudentCourseInstallmentStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeStudentCourseInstallmentStatus', data: { id: t, status: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          editStudentCourseInstallment(t) {
            return this.httpService
              .httpPost({ api: 'updateStudentCourseInstallment', data: t })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteStudentCourseInstallment(t) {
            return this.httpService
              .httpPost({ api: 'deleteStudentCourseInstallment', data: { id: t } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return o;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('z6cu'),
        c = a('fXoL');
      let o = (() => {
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
          getInstitutePaymentDetails() {
            return this.institutePaymentDetails;
          }
          setInstitutePaymentDetails(t) {
            this.institutePaymentDetails = { amount: t };
          }
          deleteInstitutePaymentDetails() {
            this.institutePaymentDetails = null;
          }
          verifyPayment(t, e) {
            return this.httpService
              .httpPost({ api: 'verifyPayment', data: { payment: t, receipt: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          verifyInstitutePayment(t, e, a) {
            return this.httpService
              .httpPost({
                api: 'verifyInstitutePayment',
                data: { branch: t, payment: e, receipt: a },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](n.a));
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
        return u;
      });
      var n = a('lJxs'),
        r = a('JIr8'),
        i = a('2Vo4'),
        s = a('z6cu'),
        c = a('fCOA'),
        o = a('fXoL');
      let u = (() => {
        class t {
          constructor(t) {
            (this.httpService = t), (this.membershipPlan = new i.a(null));
          }
          setMembershipPlan(t) {
            this.membershipPlan.next(t);
          }
          getMembershipPlan() {
            return this.membershipPlan;
          }
          setMembershipType(t) {
            this.membershipType = t;
          }
          getMembershipType() {
            return this.membershipType;
          }
          getMemberships() {
            return this.httpService.httpPost({ api: 'getMembershipPlans', data: {} }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(s.a)(t))
            );
          }
          getMembership(t) {
            return this.httpService.httpPost({ api: 'getMembershipPlan', data: { name: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(s.a)(t))
            );
          }
          saveMembershipPlan(t) {
            return this.httpService.httpPost({ api: 'saveMembershipPlan', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(s.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](c.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('fCOA'),
        r = a('lJxs'),
        i = a('JIr8'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
          getStudentCourseScore(t, e, a, n, s) {
            return this.httpService
              .httpPost({
                api: 'getStudentCourseScore',
                data: { subject: t, month: e, year: a, student: n, studentCourse: s },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getStudentsForExam(t) {
            return this.httpService.httpPost({ api: 'getStudentsForExam', data: { exam: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          saveExam(t) {
            return this.httpService.httpPost({ api: 'saveExam', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getExams(t, e, a, n, s, o, u) {
            return this.httpService
              .httpPost({
                api: 'getExams',
                data: {
                  branch: t,
                  category: e,
                  course: a,
                  batch: n,
                  subject: s,
                  month: o,
                  year: u,
                },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getExamsPerformance(t, e, a, n, s, o, u, p) {
            return this.httpService
              .httpPost({
                api: 'getExamsPerformance',
                data: {
                  month: t,
                  year: e,
                  branch: a,
                  category: n,
                  course: s,
                  batch: o,
                  subject: u,
                  student: p,
                },
              })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          getExam(t) {
            return this.httpService.httpPost({ api: 'getExam', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getExamReport(t) {
            return this.httpService.httpPost({ api: 'getExamReport', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          getExamForEditing(t) {
            return this.httpService.httpPost({ api: 'getExamForEditing', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          editExam(t) {
            return this.httpService.httpPost({ api: 'editExam', data: t }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
          saveStudentsMarks(t, e) {
            return this.httpService
              .httpPost({ api: 'saveStudentsMarks', data: { id: t, marks: e } })
              .pipe(
                Object(r.a)((t) => t),
                Object(i.a)((t) => Object(c.a)(t))
              );
          }
          deleteExam(t) {
            return this.httpService.httpPost({ api: 'deleteExam', data: { id: t } }).pipe(
              Object(r.a)((t) => t),
              Object(i.a)((t) => Object(c.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](n.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
        return u;
      });
      var n = a('lJxs'),
        r = a('JIr8'),
        i = a('fCOA'),
        s = a('2Vo4'),
        c = a('z6cu'),
        o = a('fXoL');
      let u = (() => {
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
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          getLectureMaterial(t) {
            return this.httpService.httpPost({ api: 'getLectureMaterials', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          getLectureMaterialsForStudent(t, e, a, i, s) {
            return this.httpService
              .httpPost({
                api: 'getLectureMaterialsForStudent',
                data: { branch: t, category: e, course: a, batch: i, lecture: s },
              })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          newLectureMaterials(t) {
            return this.httpService.httpPost({ api: 'newLectureMaterials', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(r.a)((t) => Object(c.a)(t))
            );
          }
          changeLectureMaterialStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeLectureMaterialStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
          deleteLectureMaterial(t) {
            return this.httpService
              .httpPost({ api: 'deleteLectureMaterial', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(r.a)((t) => Object(c.a)(t))
              );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](i.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({
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
