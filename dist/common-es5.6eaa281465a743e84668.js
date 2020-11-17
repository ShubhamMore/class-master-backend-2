function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var a = e[n];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(t, a.key, a);
  }
}
function _createClass(t, e, n) {
  return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '/ehT': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('z6cu'),
        c = n('fXoL'),
        o = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'setBranchStudentData',
                  value: function (t) {
                    this.branchStudent = t;
                  },
                },
                {
                  key: 'getBranchStudentData',
                  value: function () {
                    return this.branchStudent;
                  },
                },
                {
                  key: 'deleteBranchStudentData',
                  value: function () {
                    this.branchStudent = null;
                  },
                },
                {
                  key: 'setBranchStudentId',
                  value: function (t) {
                    this.branchStudentId = t;
                  },
                },
                {
                  key: 'getBranchStudentId',
                  value: function () {
                    return this.branchStudentId;
                  },
                },
                {
                  key: 'deleteBranchStudentId',
                  value: function () {
                    this.branchStudentId = null;
                  },
                },
                {
                  key: 'getBranchStudents',
                  value: function (t, e, n) {
                    return this.httpService
                      .httpPost({
                        api: 'getBranchStudents',
                        data: { branch: t, category: e, type: n },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchStudentNameIds',
                  value: function (t, e, n) {
                    return this.httpService
                      .httpPost({
                        api: 'getBranchStudentNameIds',
                        data: { branch: t, category: e, type: n },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchAllStudentNameIds',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'getBranchAllStudentNameIds',
                        data: { branch: t, category: e },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchStudent',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'addBranchStudent', data: { id: t, student: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'newBranchStudent',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newBranchStudent', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getBranchStudentForEditing',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'getBranchStudentForEditing', data: { id: t, student: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editBranchStudent',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateBranchStudent', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeBranchStudentStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeBranchStudentStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteBranchStudent',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteBranchStudent', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c['\u0275\u0275inject'](a.a));
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
    '0AbP': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('z6cu'),
        c = n('fXoL'),
        o = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'getBranchDashboard',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getBranchDashboard', data: { branch: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchDashboardForEmployee',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getBranchDashboardForEmployee', data: { branch: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentBranchDashboard',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentBranchDashboard', data: { branch: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c['\u0275\u0275inject'](a.a));
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
    '3b5Z': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var a = n('2Vo4'),
        u = n('fXoL'),
        i = (function () {
          var t = (function () {
            function t() {
              _classCallCheck(this, t),
                (this.employeeRole = new a.a(null)),
                (this.userRoles = ['institute', 'employee', 'student']),
                (this.employeeRoles = ['manager', 'teacher', 'councillor']);
            }
            return (
              _createClass(t, [
                {
                  key: 'getUserRoles',
                  value: function () {
                    return this.userRoles;
                  },
                },
                {
                  key: 'setEmployeeRole',
                  value: function (t) {
                    this.employeeRole.next(t);
                  },
                },
                {
                  key: 'getEmployeeRole',
                  value: function () {
                    return this.employeeRole;
                  },
                },
                {
                  key: 'getEmployeeRoles',
                  value: function () {
                    return this.employeeRoles;
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
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
    '3lxF': function (t, e, n) {},
    '5V5q': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.discountTypes = ['percentage', 'amount']),
                (this.discountAndOffers = new r.a([])),
                (this.discountAndOffer = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'getDiscountTypes',
                  value: function () {
                    return this.discountTypes;
                  },
                },
                {
                  key: 'setDiscountAndOfferId',
                  value: function (t) {
                    this.discountAndOfferId = t;
                  },
                },
                {
                  key: 'getDiscountAndOfferId',
                  value: function () {
                    return this.discountAndOfferId;
                  },
                },
                {
                  key: 'deleteDiscountAndOfferId',
                  value: function () {
                    this.discountAndOfferId = null;
                  },
                },
                {
                  key: 'setDiscountAndOffersData',
                  value: function (t) {
                    this.discountAndOffers.next(t);
                  },
                },
                {
                  key: 'getDiscountAndOffersData',
                  value: function () {
                    return this.discountAndOffers;
                  },
                },
                {
                  key: 'deleteDiscountAndOffersData',
                  value: function () {
                    this.discountAndOffers.next([]);
                  },
                },
                {
                  key: 'setDiscountAndOfferData',
                  value: function (t) {
                    this.discountAndOffer.next(t);
                  },
                },
                {
                  key: 'getDiscountAndOfferData',
                  value: function () {
                    return this.discountAndOffer;
                  },
                },
                {
                  key: 'deleteDiscountAndOfferData',
                  value: function () {
                    this.discountAndOffer.next(null);
                  },
                },
                {
                  key: 'getDiscountAndOffers',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getDiscountAndOffers', data: { branch: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getDiscountAndOffersForStudent',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getDiscountAndOffersForStudent', data: { branch: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getDiscountAndOffer',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getDiscountAndOffer', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getDiscountAndOfferForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getDiscountAndOfferForEditing', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'CheckDiscountAndOffer',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'CheckDiscountAndOffer', data: { branch: t, code: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'addDiscountAndOffer',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newDiscountAndOffer', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'editDiscountAndOffer',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'updateDiscountAndOffer', data: t })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteDiscountAndOffer',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteDiscountAndOffer', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'changeDiscountAndOfferStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeDiscountAndOfferStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    '60TI': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var a = n('fCOA'),
        u = n('2Vo4'),
        i = n('fXoL'),
        r = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.subjects = new u.a([])),
                (this.subject = new u.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setSubjectId',
                  value: function (t) {
                    this.subjectId = t;
                  },
                },
                {
                  key: 'getSubjectId',
                  value: function () {
                    return this.subjectId;
                  },
                },
                {
                  key: 'deleteSubjectId',
                  value: function () {
                    this.subjectId = null;
                  },
                },
                {
                  key: 'setSubjectsData',
                  value: function (t) {
                    this.subjects.next(t);
                  },
                },
                {
                  key: 'getSubjectsData',
                  value: function () {
                    return this.subjects;
                  },
                },
                {
                  key: 'deleteSubjectsData',
                  value: function () {
                    this.subjects.next([]);
                  },
                },
                {
                  key: 'setSubjectData',
                  value: function (t) {
                    this.subject.next(t);
                  },
                },
                {
                  key: 'getSubjectData',
                  value: function () {
                    return this.subject;
                  },
                },
                {
                  key: 'deleteSubjectData',
                  value: function () {
                    this.subject.next(null);
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(i['\u0275\u0275inject'](a.a));
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
    '6Cnf': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var a = n('EQut'),
        u = n('fXoL'),
        i = n('tyNb'),
        r = (function () {
          var t = (function () {
            function t(e, n) {
              _classCallCheck(this, t), (this.branchService = e), (this.router = n);
            }
            return (
              _createClass(t, [
                {
                  key: 'canActivate',
                  value: function (t, e) {
                    var n = this.branchService.getBranchId();
                    return !(!n || '' === n) || this.router.createUrlTree(['/']);
                  },
                },
                {
                  key: 'canActivateChild',
                  value: function (t, e) {
                    return this.canActivate(t, e);
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(u['\u0275\u0275inject'](a.a), u['\u0275\u0275inject'](i.c));
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
    '6Ox6': function (t, e, n) {
      'use strict';
      var a,
        u = n('EQut'),
        i = n('f8CG'),
        r = n('fCOA'),
        c = n('lJxs'),
        o = n('JIr8'),
        s = n('z6cu'),
        l = n('fXoL'),
        p =
          (((a = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'getOrderDetails',
                  value: function () {
                    return this.orderDetails;
                  },
                },
                {
                  key: 'setOrderDetails',
                  value: function (t) {
                    this.orderDetails = t;
                  },
                },
                {
                  key: 'deleteOrderDetails',
                  value: function () {
                    this.orderDetails = null;
                  },
                },
                {
                  key: 'deleteOrder',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'deleteOrder', data: { id: t } }).pipe(
                      Object(c.a)(function (t) {
                        return t;
                      }),
                      Object(o.a)(function (t) {
                        return Object(s.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'generateOrder',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'generateOrder', data: t }).pipe(
                      Object(c.a)(function (t) {
                        return t;
                      }),
                      Object(o.a)(function (t) {
                        return Object(s.a)(t);
                      })
                    );
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || a)(l['\u0275\u0275inject'](r.a));
          }),
          (a.ɵprov = l['\u0275\u0275defineInjectable']({
            token: a,
            factory: a.ɵfac,
            providedIn: 'root',
          })),
          a),
        h = n('cxbk'),
        f = n('nwtg'),
        d = n('s5zK'),
        v = n('aceb');
      n.d(e, 'a', function () {
        return y;
      });
      var b,
        y =
          (((b = (function () {
            function t(e, n, a, u, i, r, c) {
              _classCallCheck(this, t),
                (this.branchService = e),
                (this.paymentService = n),
                (this.couponService = a),
                (this.orderService = u),
                (this.authService = i),
                (this.toastrService = r),
                (this.ref = c);
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function () {
                    var t = this;
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
                        handler: function (e) {
                          t.verifyPayment(e);
                        },
                        modal: {
                          ondismiss: function () {
                            t.deleteOrder();
                          },
                        },
                        prefill: {
                          name: this.user.name,
                          email: this.user.email,
                          contact: this.user.phone,
                        },
                        notes: { address: '' },
                        theme: { color: '#528FF0' },
                      }),
                      (this.razorPay = new Razorpay(this.options));
                    var e = this.couponService.getAppliedCoupon(),
                      n = this.branchService.getBranchId();
                    (this.orderDetails = {
                      branch: n,
                      userId: this.user.imsMasterId,
                      userPhone: this.user.phone,
                      userName: this.user.name,
                      userEmail: this.user.email,
                      amount: this.paymentDetails.amount,
                      packageType: this.paymentDetails.packageType,
                      planType: this.paymentDetails.planType,
                    }),
                      e && (this.orderDetails.coupon = e.code),
                      this.generateOrder(),
                      (this.loading = !1);
                  },
                },
                {
                  key: 'generateOrder',
                  value: function () {
                    var t = this;
                    this.orderService.generateOrder(this.orderDetails).subscribe(
                      function (e) {
                        (t.placedOrderReceipt = e.paymentReceipt),
                          (t.options.amount = '1'),
                          (t.options.order_id = e.order.id),
                          (t.options.currency = e.order.currency),
                          (t.options.prefill.name = t.user.name),
                          (t.options.prefill.email = t.user.email),
                          (t.options.prefill.contact = t.user.phone),
                          (t.razorPay = new Razorpay(t.options)),
                          t.pay();
                      },
                      function (e) {
                        t.showToastr('top-right', 'danger', e), t.onClose();
                      }
                    );
                  },
                },
                {
                  key: 'pay',
                  value: function () {
                    this.razorPay.open();
                  },
                },
                {
                  key: 'deleteOrder',
                  value: function () {
                    var t = this;
                    this.orderService.deleteOrder(this.placedOrderReceipt._id).subscribe(
                      function (e) {
                        (t.placedOrderReceipt = null), t.ref.close({ status: !1 });
                      },
                      function (e) {
                        t.showToastr('top-right', 'danger', e), t.onClose();
                      }
                    );
                  },
                },
                {
                  key: 'verifyPayment',
                  value: function (t) {
                    var e = this;
                    this.paymentService.verifyPayment(t, this.placedOrderReceipt).subscribe(
                      function (t) {
                        e.showToastr('top-right', 'success', 'Payment Verified Successfully'),
                          e.ref.close({ status: !0, order: t.orderId, receipt: t.receiptId });
                      },
                      function (t) {
                        e.showToastr('top-right', 'danger', t), e.onClose();
                      }
                    );
                  },
                },
                {
                  key: 'onClose',
                  value: function () {
                    this.ref.close();
                  },
                },
                {
                  key: 'showToastr',
                  value: function (t, e, n) {
                    this.toastrService.show(e, n, { position: t, status: e });
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function () {
                    this.couponService.deleteAppliedCoupon();
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || b)(
              l['\u0275\u0275directiveInject'](u.a),
              l['\u0275\u0275directiveInject'](d.a),
              l['\u0275\u0275directiveInject'](i.a),
              l['\u0275\u0275directiveInject'](p),
              l['\u0275\u0275directiveInject'](f.a),
              l['\u0275\u0275directiveInject'](v.Db),
              l['\u0275\u0275directiveInject'](v.I)
            );
          }),
          (b.ɵcmp = l['\u0275\u0275defineComponent']({
            type: b,
            selectors: [['ngx-payment']],
            decls: 0,
            vars: 0,
            template: function (t, e) {},
            styles: [''],
          })),
          b);
    },
    '72bP': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        u = n('JIr8'),
        i = n('fCOA'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.employeeLeave = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setEmployeeLeaveData',
                  value: function (t) {
                    this.employeeLeave.next(t);
                  },
                },
                {
                  key: 'getEmployeeLeaveData',
                  value: function () {
                    return this.employeeLeave;
                  },
                },
                {
                  key: 'deleteEmployeeLeaveData',
                  value: function () {
                    this.employeeLeave.next(null);
                  },
                },
                {
                  key: 'setEmployeeLeaveId',
                  value: function (t) {
                    this.employeeLeaveId = t;
                  },
                },
                {
                  key: 'getEmployeeLeaveId',
                  value: function () {
                    return this.employeeLeaveId;
                  },
                },
                {
                  key: 'deleteEmployeeLeaveId',
                  value: function () {
                    this.employeeLeaveId = null;
                  },
                },
                {
                  key: 'createEmployeeLeave',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'createEmployeeLeave', data: t }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeEmployeeLeaveStatus',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'changeEmployeeLeaveStatus', data: t })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getEmployeeLeaves',
                  value: function (t, e, n) {
                    return this.httpService
                      .httpPost({
                        api: 'getEmployeeLeaves',
                        data: { employee: t, month: e, year: n },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchAllEmployeeLeaves',
                  value: function (t, e, n, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getBranchAllEmployeeLeaves',
                        data: { branch: t, employee: e, month: n, year: i },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchEmployeeLeaves',
                  value: function (t, e, n, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getBranchEmployeeLeaves',
                        data: { branch: t, employee: e, month: n, year: i },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getMyBranchLeaves',
                  value: function (t, e, n) {
                    return this.httpService
                      .httpPost({
                        api: 'getMyBranchLeaves',
                        data: { branch: t, month: e, year: n },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getEmployeeLeave',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getEmployeeLeave', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'updateEmployeeLeave',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateEmployeeLeave', data: t }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'deleteEmployeeLeave',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteEmployeeLeave', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
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
    '7kqb': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        u = n('JIr8'),
        i = n('fCOA'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.lecture = new r.a(null)),
                (this.lectureId = null),
                (this.date = null);
            }
            return (
              _createClass(t, [
                {
                  key: 'getSearchDate',
                  value: function () {
                    return this.date;
                  },
                },
                {
                  key: 'setSearchDate',
                  value: function (t) {
                    this.date = t;
                  },
                },
                {
                  key: 'setLectureData',
                  value: function (t) {
                    this.lecture.next(t);
                  },
                },
                {
                  key: 'getLectureData',
                  value: function () {
                    return this.lecture;
                  },
                },
                {
                  key: 'deleteLectureData',
                  value: function () {
                    this.lecture.next(null);
                  },
                },
                {
                  key: 'setLectureId',
                  value: function (t) {
                    this.lectureId = t;
                  },
                },
                {
                  key: 'getLectureId',
                  value: function () {
                    return this.lectureId;
                  },
                },
                {
                  key: 'deleteLectureId',
                  value: function () {
                    this.lectureId = null;
                  },
                },
                {
                  key: 'getLectures',
                  value: function (t, e, n, i, r) {
                    return this.httpService
                      .httpPost({
                        api: 'getLectures',
                        data: { branch: t, category: e, course: n, batch: i, date: r },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getLecturesForStudent',
                  value: function (t, e, n, i, r) {
                    return this.httpService
                      .httpPost({
                        api: 'getLecturesForStudent',
                        data: { branch: t, category: e, course: n, batch: i, date: r },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getLecture',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getLecture', data: { id: t } }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getUpcomingLecturesForEmployee',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getUpcomingLecturesForEmployee', data: { branch: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
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
    AVwh: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.assignment = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setAssignmentData',
                  value: function (t) {
                    this.assignment.next(t);
                  },
                },
                {
                  key: 'getAssignmentData',
                  value: function () {
                    return this.assignment;
                  },
                },
                {
                  key: 'deleteAssignmentData',
                  value: function () {
                    this.assignment.next(null);
                  },
                },
                {
                  key: 'setAssignmentId',
                  value: function (t) {
                    this.assignmentId = t;
                  },
                },
                {
                  key: 'getAssignmentId',
                  value: function () {
                    return this.assignmentId;
                  },
                },
                {
                  key: 'deleteAssignmentId',
                  value: function () {
                    this.assignmentId = null;
                  },
                },
                {
                  key: 'saveAssignment',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'saveAssignment', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getAssignments',
                  value: function (t, e, n, a, r, o, s) {
                    return this.httpService
                      .httpPost({
                        api: 'getAssignments',
                        data: {
                          branch: t,
                          category: e,
                          course: n,
                          batch: a,
                          subject: r,
                          month: o,
                          year: s,
                        },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getAssignmentsForStudent',
                  value: function (t, e, n, a, r, o, s) {
                    return this.httpService
                      .httpPost({
                        api: 'getAssignmentsForStudent',
                        data: {
                          branch: t,
                          category: e,
                          course: n,
                          batch: a,
                          subject: r,
                          month: o,
                          year: s,
                        },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getAssignment',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getAssignment', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'updateAssignment',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateAssignment', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeAssignmentStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeAssignmentStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteAssignmentAttachment',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'deleteAssignmentAttachment', data: { id: t, publicId: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteAssignment',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteAssignment', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    F3IG: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.lead = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setLeadData',
                  value: function (t) {
                    this.lead.next(t);
                  },
                },
                {
                  key: 'getLeadType',
                  value: function () {
                    return this.leadType;
                  },
                },
                {
                  key: 'setLeadType',
                  value: function (t) {
                    this.leadType = t;
                  },
                },
                {
                  key: 'deleteLeadType',
                  value: function () {
                    this.leadType = null;
                  },
                },
                {
                  key: 'getLeadData',
                  value: function () {
                    return this.lead;
                  },
                },
                {
                  key: 'deleteLeadData',
                  value: function () {
                    this.lead.next(null);
                  },
                },
                {
                  key: 'setLeadId',
                  value: function (t) {
                    this.leadId = t;
                  },
                },
                {
                  key: 'getLeadId',
                  value: function () {
                    return this.leadId;
                  },
                },
                {
                  key: 'deleteLeadId',
                  value: function () {
                    this.leadId = null;
                  },
                },
                {
                  key: 'saveLead',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'saveLead', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getLeads',
                  value: function (t, e, n, a) {
                    return this.httpService
                      .httpPost({
                        api: 'getLeads',
                        data: { branch: t, category: e, course: n, leadType: a },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getLead',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getLead', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getLeadForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getLeadForEditing', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editLead',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'editLead', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeLeadStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeLeadStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteLead',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'deleteLead', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    FYcy: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        u = n('JIr8'),
        i = n('fCOA'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.courseMaterial = new r.a(null)),
                (this.courseMaterials = new r.a([]));
            }
            return (
              _createClass(t, [
                {
                  key: 'setCourseMaterialId',
                  value: function (t) {
                    this.courseMaterialId = t;
                  },
                },
                {
                  key: 'getCourseMaterialId',
                  value: function () {
                    return this.courseMaterialId;
                  },
                },
                {
                  key: 'deleteCourseMaterialId',
                  value: function () {
                    this.courseMaterialId = null;
                  },
                },
                {
                  key: 'setCourseMaterialsData',
                  value: function (t) {
                    this.courseMaterials.next(t);
                  },
                },
                {
                  key: 'getCourseMaterialsData',
                  value: function () {
                    return this.courseMaterials;
                  },
                },
                {
                  key: 'deleteCourseMaterialsData',
                  value: function () {
                    this.courseMaterials.next([]);
                  },
                },
                {
                  key: 'setCourseMaterialData',
                  value: function (t) {
                    this.courseMaterial.next(t);
                  },
                },
                {
                  key: 'getCourseMaterialData',
                  value: function () {
                    return this.courseMaterial;
                  },
                },
                {
                  key: 'deleteCourseMaterialData',
                  value: function () {
                    this.courseMaterial.next(null);
                  },
                },
                {
                  key: 'getCourseMaterials',
                  value: function (t, e, n, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getCourseMaterials',
                        data: { branch: t, category: e, course: n, subject: i },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getCourseMaterial',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getCourseMaterials', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getCourseMaterialsForStudent',
                  value: function (t, e, n, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getCourseMaterialsForStudent',
                        data: { branch: t, category: e, course: n, subject: i },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'newCourseMaterials',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newCourseMaterials', data: t }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeCourseMaterialStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeCourseMaterialStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteCourseMaterial',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteCourseMaterial', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
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
    IAlr: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.courses = new r.a([])),
                (this.course = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setCourseId',
                  value: function (t) {
                    this.courseId = t;
                  },
                },
                {
                  key: 'getCourseId',
                  value: function () {
                    return this.courseId;
                  },
                },
                {
                  key: 'deleteCourseId',
                  value: function () {
                    this.courseId = null;
                  },
                },
                {
                  key: 'setCoursesData',
                  value: function (t) {
                    this.courses.next(t);
                  },
                },
                {
                  key: 'getCoursesData',
                  value: function () {
                    return this.courses;
                  },
                },
                {
                  key: 'deleteCoursesData',
                  value: function () {
                    this.courses.next([]);
                  },
                },
                {
                  key: 'setCourseData',
                  value: function (t) {
                    this.course.next(t);
                  },
                },
                {
                  key: 'getCourseData',
                  value: function () {
                    return this.course;
                  },
                },
                {
                  key: 'deleteCourseData',
                  value: function () {
                    this.course.next(null);
                  },
                },
                {
                  key: 'getCourseName',
                  value: function (t) {
                    return this.courses.pipe(
                      Object(u.a)(function (e) {
                        var n = e.find(function (e) {
                          return e._id === t;
                        });
                        return n ? n.basicDetails.courseName : '--';
                      })
                    );
                  },
                },
                {
                  key: 'getCourses',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'getCourses', data: { branch: t, category: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getCourse',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getCourse', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getCourseForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getCourseForEditing', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'addCourse',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newCourse', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'editCourse',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateCourse', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                { key: 'deleteCourse', value: function (t) {} },
                {
                  key: 'changeCourseStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeCourseStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    JmRu: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.student = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setStudentType',
                  value: function (t) {
                    this.studentType = t;
                  },
                },
                {
                  key: 'getStudentType',
                  value: function () {
                    return this.studentType;
                  },
                },
                {
                  key: 'deleteStudentType',
                  value: function () {
                    this.studentType = null;
                  },
                },
                {
                  key: 'setStudentData',
                  value: function (t) {
                    this.student.next(t);
                  },
                },
                {
                  key: 'getStudentData',
                  value: function () {
                    return this.student;
                  },
                },
                {
                  key: 'deleteStudentData',
                  value: function () {
                    this.student.next(null);
                  },
                },
                {
                  key: 'setStudentId',
                  value: function (t) {
                    this.studentId = t;
                  },
                },
                {
                  key: 'getStudentId',
                  value: function () {
                    return this.studentId;
                  },
                },
                {
                  key: 'deleteStudentId',
                  value: function () {
                    this.studentId = null;
                  },
                },
                {
                  key: 'getStudentName',
                  value: function () {
                    return this.getStudentData().pipe(
                      Object(u.a)(function (t) {
                        return t ? t.name : '--';
                      })
                    );
                  },
                },
                {
                  key: 'addStudent',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'newStudent', data: { student: t, branchStudent: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudents',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getStudents', data: {} }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getStudent',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getStudent', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getStudentByImsId',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentByImsId', data: { studentImsId: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'searchStudent',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'searchStudent', data: { studentId: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentForEditing', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'changeStudentStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeStudentStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editStudent',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateStudent', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'deleteStudent',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteStudent', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    K8P5: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.question = new r.a(null)),
                (this.questionAnswer = new r.a(null)),
                (this.questionAnswers = new r.a(null)),
                (this.questionId = null),
                (this.questionAnswerId = null),
                (this.questionAnswersId = null);
            }
            return (
              _createClass(t, [
                {
                  key: 'setQuestion',
                  value: function (t) {
                    this.question.next(t);
                  },
                },
                {
                  key: 'getQuestion',
                  value: function () {
                    return this.question;
                  },
                },
                {
                  key: 'deleteQuestion',
                  value: function () {
                    this.question.next(null);
                  },
                },
                {
                  key: 'setQuestionId',
                  value: function (t) {
                    this.questionId = t;
                  },
                },
                {
                  key: 'getQuestionId',
                  value: function () {
                    return this.questionId;
                  },
                },
                {
                  key: 'deleteQuestionId',
                  value: function () {
                    this.questionId = null;
                  },
                },
                {
                  key: 'setQuestionAnswer',
                  value: function (t) {
                    this.questionAnswer.next(t);
                  },
                },
                {
                  key: 'getQuestionAnswer',
                  value: function () {
                    return this.questionAnswer;
                  },
                },
                {
                  key: 'deleteQuestionAnswer',
                  value: function () {
                    this.questionAnswer.next(null);
                  },
                },
                {
                  key: 'setQuestionAnswerId',
                  value: function (t) {
                    this.questionAnswerId = t;
                  },
                },
                {
                  key: 'getQuestionAnswerId',
                  value: function () {
                    return this.questionAnswerId;
                  },
                },
                {
                  key: 'deleteQuestionAnswerId',
                  value: function () {
                    this.questionAnswerId = null;
                  },
                },
                {
                  key: 'setQuestionAnswers',
                  value: function (t) {
                    this.questionAnswers.next(t);
                  },
                },
                {
                  key: 'getQuestionAnswers',
                  value: function () {
                    return this.questionAnswers;
                  },
                },
                {
                  key: 'deleteQuestionAnswers',
                  value: function () {
                    this.questionAnswers.next(null);
                  },
                },
                {
                  key: 'setQuestionAnswersId',
                  value: function (t) {
                    this.questionAnswersId = t;
                  },
                },
                {
                  key: 'getQuestionAnswersId',
                  value: function () {
                    return this.questionAnswersId;
                  },
                },
                {
                  key: 'deleteQuestionAnswersId',
                  value: function () {
                    this.questionAnswersId = null;
                  },
                },
                {
                  key: 'getLectureQuestionAnswers',
                  value: function (t, e, n, a, r) {
                    return this.httpService
                      .httpPost({
                        api: 'getLectureQuestionAnswers',
                        data: { branch: t, category: e, course: n, batch: a, lecture: r },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getLectureQuestionAnswer',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getLectureQuestionAnswer', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'newLectureQuestion',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newLectureQuestion', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'editLectureQuestion',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'editLectureQuestion', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'deleteLectureQuestion',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteLectureQuestion', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'newLectureQuestionAnswer',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'newLectureQuestionAnswer', data: t })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editLectureQuestionAnswer',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'editLectureQuestionAnswer', data: t })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteLectureQuestionAnswer',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteLectureQuestionAnswer', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    L09S: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var a = n('fXoL'),
        u = n('jhN1'),
        i = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.sanitizer = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'transform',
                  value: function (t) {
                    return this.sanitizer.bypassSecurityTrustResourceUrl(t);
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(a['\u0275\u0275directiveInject'](u.b));
            }),
            (t.ɵpipe = a['\u0275\u0275definePipe']({ name: 'safeUrl', type: t, pure: !0 })),
            t
          );
        })();
    },
    L3Ly: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var a = n('fXoL'),
        u = (function () {
          var t = (function () {
            function t() {
              _classCallCheck(this, t),
                (this.KB = 1024),
                (this.MB = 1048576),
                (this.GB = 1073741824);
            }
            return (
              _createClass(t, [
                {
                  key: 'convertByteToUnit',
                  value: function (t) {
                    var e, n;
                    return (
                      (t = +t) < this.KB
                        ? (n = (e = t) <= 1 ? 'Byte' : 'Bytes')
                        : t >= this.KB && t < this.MB
                        ? ((e = t / this.KB), (n = 'KB'))
                        : t >= this.MB && t < this.GB
                        ? ((e = t / this.MB), (n = 'MB'))
                        : ((e = t / this.GB), (n = 'GB')),
                      { value: e, unit: n }
                    );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = a['\u0275\u0275defineInjectable']({
              token: t,
              factory: t.ɵfac,
              providedIn: 'root',
            })),
            t
          );
        })();
    },
    'OeS+': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        u = n('JIr8'),
        i = n('fCOA'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.schedule = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setScheduleData',
                  value: function (t) {
                    this.schedule.next(t);
                  },
                },
                {
                  key: 'getScheduleData',
                  value: function () {
                    return this.schedule;
                  },
                },
                {
                  key: 'deleteScheduleData',
                  value: function () {
                    this.schedule.next(null);
                  },
                },
                {
                  key: 'setScheduleId',
                  value: function (t) {
                    this.scheduleId = t;
                  },
                },
                {
                  key: 'getScheduleId',
                  value: function () {
                    return this.scheduleId;
                  },
                },
                {
                  key: 'deleteScheduleId',
                  value: function () {
                    this.scheduleId = null;
                  },
                },
                {
                  key: 'setScheduleDay',
                  value: function (t) {
                    this.scheduleDay = t;
                  },
                },
                {
                  key: 'getScheduleDay',
                  value: function () {
                    return this.scheduleDay;
                  },
                },
                {
                  key: 'deleteScheduleDay',
                  value: function () {
                    this.scheduleDay = null;
                  },
                },
                {
                  key: 'addSchedule',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newSchedule', data: t }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeScheduleStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeScheduleStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getAllSchedules',
                  value: function (t, e, n, i, r, o) {
                    return this.httpService
                      .httpPost({
                        api: 'getAllSchedule',
                        data: {
                          branch: t,
                          category: e,
                          course: n,
                          batch: i,
                          startDate: r,
                          endDate: o,
                        },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getSchedule',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getSchedule', data: { id: t } }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getScheduleForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getScheduleForEditing', data: { schedule: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editSchedule',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'editSchedule', data: t }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'deleteSchedule',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteSchedule', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
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
    PCNd: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var a = n('fXoL'),
        u = (function () {
          var t = function t() {
            _classCallCheck(this, t);
          };
          return (
            (t.ɵmod = a['\u0275\u0275defineNgModule']({ type: t })),
            (t.ɵinj = a['\u0275\u0275defineInjector']({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[]],
            })),
            t
          );
        })();
    },
    'Pj/w': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.branchEmployee = new r.a(null)),
                (this.branchEmployees = new r.a([])),
                (this.branchEmployeeNameIds = new r.a([]));
            }
            return (
              _createClass(t, [
                {
                  key: 'setBranchEmployeeData',
                  value: function (t) {
                    this.branchEmployee.next(t);
                  },
                },
                {
                  key: 'getBranchEmployeeData',
                  value: function () {
                    return this.branchEmployee;
                  },
                },
                {
                  key: 'deleteBranchEmployeeData',
                  value: function () {
                    this.branchEmployee.next(null);
                  },
                },
                {
                  key: 'setBranchEmployeesData',
                  value: function (t) {
                    this.branchEmployees.next(t);
                  },
                },
                {
                  key: 'getBranchEmployeesData',
                  value: function () {
                    return this.branchEmployees;
                  },
                },
                {
                  key: 'deleteBranchEmployeesData',
                  value: function () {
                    this.branchEmployees.next([]);
                  },
                },
                {
                  key: 'setBranchEmployeeNameIdsData',
                  value: function (t) {
                    this.branchEmployeeNameIds.next(t);
                  },
                },
                {
                  key: 'getBranchEmployeeNameIdsData',
                  value: function () {
                    return this.branchEmployeeNameIds;
                  },
                },
                {
                  key: 'deleteBranchEmployeeNameIdsData',
                  value: function () {
                    this.branchEmployeeNameIds.next([]);
                  },
                },
                {
                  key: 'setBranchEmployeeId',
                  value: function (t) {
                    this.branchEmployeeId = t;
                  },
                },
                {
                  key: 'getBranchEmployeeId',
                  value: function () {
                    return this.branchEmployeeId;
                  },
                },
                {
                  key: 'deleteBranchEmployeeId',
                  value: function () {
                    this.branchEmployeeId = null;
                  },
                },
                {
                  key: 'getBranchEmployees',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'getBranchEmployees', data: { branch: t, type: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchEmployeesForBatch',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'getBranchEmployeesForBatch', data: { branch: t, role: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchEmployeeNameIds',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'getBranchEmployeeNameIds', data: { branch: t, type: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchAllEmployeeNameIds',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getBranchAllEmployeeNameIds', data: { branch: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchEmployeeNameIdsForBatch',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'getBranchEmployeeNameIdsForBatch',
                        data: { branch: t, role: e },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchEmployee',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'addBranchEmployee', data: { id: t, employee: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchEmployeeRole',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getBranchEmployeeRole', data: { branch: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchEmployeeForSalary',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'getBranchEmployeeForSalary', data: { id: t, employee: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'newBranchEmployee',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newBranchEmployee', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getBranchEmployeeForEditing',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'getBranchEmployeeForEditing',
                        data: { id: t, employee: e },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editBranchEmployee',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateBranchEmployee', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeBranchEmployeeStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeBranchEmployeeStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteBranchEmployee',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteBranchEmployee', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    R6I3: function (t, e, n) {},
    RSY0: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        u = n('JIr8'),
        i = n('fCOA'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.onlineExam = new r.a(null)),
                (this.date = null);
            }
            return (
              _createClass(t, [
                {
                  key: 'getSearchDate',
                  value: function () {
                    return this.date;
                  },
                },
                {
                  key: 'setSearchDate',
                  value: function (t) {
                    this.date = t;
                  },
                },
                {
                  key: 'setOnlineExamData',
                  value: function (t) {
                    this.onlineExam.next(t);
                  },
                },
                {
                  key: 'getOnlineExamData',
                  value: function () {
                    return this.onlineExam;
                  },
                },
                {
                  key: 'deleteOnlineExamData',
                  value: function () {
                    this.onlineExam.next(null);
                  },
                },
                {
                  key: 'setOnlineExamId',
                  value: function (t) {
                    this.onlineExamId = t;
                  },
                },
                {
                  key: 'getOnlineExamId',
                  value: function () {
                    return this.onlineExamId;
                  },
                },
                {
                  key: 'deleteOnlineExamId',
                  value: function () {
                    this.onlineExamId = null;
                  },
                },
                {
                  key: 'getOnlineExam',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getOnlineExam', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getOnlineExamForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getOnlineExamForEditing', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getOnlineExams',
                  value: function (t, e, n, i, r, o, s) {
                    return this.httpService
                      .httpPost({
                        api: 'getOnlineExams',
                        data: {
                          branch: t,
                          category: e,
                          course: n,
                          batch: i,
                          subject: r,
                          month: o,
                          year: s,
                        },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getOnlineExamsForStudent',
                  value: function (t, e, n, i, r, o, s) {
                    return this.httpService
                      .httpPost({
                        api: 'getOnlineExamsForStudent',
                        data: {
                          branch: t,
                          category: e,
                          course: n,
                          batch: i,
                          subject: r,
                          month: o,
                          year: s,
                        },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'addOnlineExam',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newOnlineExam', data: t }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'editOnlineExam',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'editOnlineExam', data: t }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeOnlineExamStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeOnlineExamStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteOnlineExam',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteOnlineExam', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'saveOnlineExamResult',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'saveOnlineExamResult',
                        data: { studentQuestionAnswers: t, onlineExam: e },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getOnlineExamResult',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getOnlineExamResult', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
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
    Vw3K: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var a = n('gbKz'),
        u = n.n(a),
        i = n('m2xi'),
        r = n.n(i);
      function c(t) {
        var e = u.a
            .toWords(+t)
            .replace(',', '')
            .replace('-', ' ')
            .split(' '),
          n = new Array();
        return (
          e.forEach(function (t) {
            n.push(r()(t));
          }),
          n.join(' ')
        );
      }
    },
    W14u: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.studentCourse = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setStudentCourseData',
                  value: function (t) {
                    this.studentCourse.next(t);
                  },
                },
                {
                  key: 'getStudentCourseData',
                  value: function () {
                    return this.studentCourse;
                  },
                },
                {
                  key: 'deleteStudentCourseData',
                  value: function () {
                    this.studentCourse.next(null);
                  },
                },
                {
                  key: 'setStudentCourseId',
                  value: function (t) {
                    this.studentCourseId = t;
                  },
                },
                {
                  key: 'getStudentCourseId',
                  value: function () {
                    return this.studentCourseId;
                  },
                },
                {
                  key: 'deleteStudentCourseId',
                  value: function () {
                    this.studentCourseId = null;
                  },
                },
                {
                  key: 'addStudentCourse',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'newStudentCourse',
                        data: { studentCourse: t, studentCourseInstallment: e },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentCourses',
                  value: function (t, e, n) {
                    return this.httpService
                      .httpPost({
                        api: 'getStudentCourses',
                        data: { branch: t, category: e, student: n },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentAllCourses',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentAllCourses', data: { branch: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentCourse',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentCourse', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'checkBatchRollNumber',
                  value: function (t, e, n, a, r) {
                    return this.httpService
                      .httpPost({
                        api: 'checkBatchRollNumber',
                        data: { branch: t, category: e, course: n, batch: a, rollNumber: r },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentCourseForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentCourseForEditing', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'changeStudentCourseStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeStudentCourseStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editStudentCourse',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'updateStudentCourse',
                        data: { studentCourse: t, studentCourseInstallment: e },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteStudentCourse',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteStudentCourse', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    cS08: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        u = n('JIr8'),
        i = n('fCOA'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.employeeSalary = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setEmployeeSalaryData',
                  value: function (t) {
                    this.employeeSalary.next(t);
                  },
                },
                {
                  key: 'getEmployeeSalaryData',
                  value: function () {
                    return this.employeeSalary;
                  },
                },
                {
                  key: 'deleteEmployeeSalaryData',
                  value: function () {
                    this.employeeSalary.next(null);
                  },
                },
                {
                  key: 'setEmployeeSalaryId',
                  value: function (t) {
                    this.employeeSalaryId = t;
                  },
                },
                {
                  key: 'getEmployeeSalaryId',
                  value: function () {
                    return this.employeeSalaryId;
                  },
                },
                {
                  key: 'deleteEmployeeSalaryId',
                  value: function () {
                    this.employeeSalaryId = null;
                  },
                },
                {
                  key: 'addEmployeeSalary',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newEmployeeSalary', data: t }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeEmployeeSalaryStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeEmployeeSalaryStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchEmployeeSalaries',
                  value: function (t, e, n, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getBranchEmployeeSalaries',
                        data: { branch: t, employee: e, month: n, year: i },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getMyBranchSalaries',
                  value: function (t, e, n) {
                    return this.httpService
                      .httpPost({
                        api: 'getMyBranchSalaries',
                        data: { branch: t, month: e, year: n },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getEmployeeSalaries',
                  value: function (t, e, n) {
                    return this.httpService
                      .httpPost({
                        api: 'getEmployeeSalaries',
                        data: { employee: t, month: e, year: n },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getEmployeeSalary',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getEmployeeSalary', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteEmployeeSalary',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteEmployeeSalary', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
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
    cbqz: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.assignmentSubmission = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setAssignmentSubmissionData',
                  value: function (t) {
                    this.assignmentSubmission.next(t);
                  },
                },
                {
                  key: 'getAssignmentSubmissionData',
                  value: function () {
                    return this.assignmentSubmission;
                  },
                },
                {
                  key: 'deleteAssignmentSubmissionData',
                  value: function () {
                    this.assignmentSubmission.next(null);
                  },
                },
                {
                  key: 'setAssignmentSubmissionId',
                  value: function (t) {
                    this.assignmentSubmissionId = t;
                  },
                },
                {
                  key: 'getAssignmentSubmissionId',
                  value: function () {
                    return this.assignmentSubmissionId;
                  },
                },
                {
                  key: 'deleteAssignmentSubmissionId',
                  value: function () {
                    this.assignmentSubmissionId = null;
                  },
                },
                {
                  key: 'submitAssignment',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'submitAssignment', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getAssignmentSubmissions',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getAssignmentSubmissions', data: { assignment: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getSubmissionOfAssignment',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getSubmissionOfAssignment', data: { assignment: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getAssignmentSubmission',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getAssignmentSubmission', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'saveAssignmentSubmissionGrades',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'saveAssignmentSubmissionGrades', data: t })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'updateAssignmentSubmission',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'updateAssignmentSubmission', data: t })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteAssignmentSubmission',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteAssignmentSubmission', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    cxbk: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var a = {
        production: !0,
        backend: '',
        encKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
        aesKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
        razorpayKeyId: 'rzp_test_1JFxmyJ8eg8wQZ',
        zoomLiveURL: '/online-meeting/#/live',
        SOCKET_ENDPOINT: '/classMasterSocketConnection',
      };
    },
    emOf: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        u = n('JIr8'),
        i = n('fCOA'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.studentCourseInstallmentReceipt = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setStudentCourseInstallmentReceiptData',
                  value: function (t) {
                    this.studentCourseInstallmentReceipt.next(t);
                  },
                },
                {
                  key: 'getStudentCourseInstallmentReceiptData',
                  value: function () {
                    return this.studentCourseInstallmentReceipt;
                  },
                },
                {
                  key: 'deleteStudentCourseInstallmentReceiptData',
                  value: function () {
                    this.studentCourseInstallmentReceipt.next(null);
                  },
                },
                {
                  key: 'setStudentCourseInstallmentReceiptId',
                  value: function (t) {
                    this.studentCourseInstallmentReceiptId = t;
                  },
                },
                {
                  key: 'getStudentCourseInstallmentReceiptId',
                  value: function () {
                    return this.studentCourseInstallmentReceiptId;
                  },
                },
                {
                  key: 'deleteStudentCourseInstallmentReceiptId',
                  value: function () {
                    this.studentCourseInstallmentReceiptId = null;
                  },
                },
                {
                  key: 'addStudentCourseInstallmentReceipt',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'newStudentCourseInstallmentReceipt', data: t })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'generateStudentCourseInstallmentReceipt',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'generateStudentCourseInstallmentReceipt',
                        data: { order: t, receipt: e },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'changeStudentCourseInstallmentReceiptStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'changeStudentCourseInstallmentReceiptStatus',
                        data: { id: t, status: e },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getAllStudentCourseInstallmentReceipts',
                  value: function (t) {
                    return this.httpService
                      .httpPost({
                        api: 'getAllStudentCourseInstallmentReceipts',
                        data: { student: t },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentAllCourseInstallmentReceiptsForStudent',
                  value: function (t) {
                    return this.httpService
                      .httpPost({
                        api: 'getStudentAllCourseInstallmentReceiptsForStudent',
                        data: { student: t },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentCourseInstallmentReceipt',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentCourseInstallmentReceipt', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentCourseInstallmentReceiptForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({
                        api: 'getStudentCourseInstallmentReceiptForEditing',
                        data: { id: t },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editStudentCourseInstallmentReceipt',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'editStudentCourseInstallmentReceipt', data: t })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteStudentCourseInstallmentReceipt',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteStudentCourseInstallmentReceipt', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
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
    f8CG: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.discountTypes = ['percentage', 'amount']),
                (this.coupon = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'getDiscountTypes',
                  value: function () {
                    return this.discountTypes;
                  },
                },
                {
                  key: 'setCouponId',
                  value: function (t) {
                    this.couponId = t;
                  },
                },
                {
                  key: 'getCouponId',
                  value: function () {
                    return this.couponId;
                  },
                },
                {
                  key: 'deleteCouponId',
                  value: function () {
                    this.couponId = null;
                  },
                },
                {
                  key: 'setAppliedCoupon',
                  value: function (t) {
                    this.appliedCoupon = t;
                  },
                },
                {
                  key: 'getAppliedCoupon',
                  value: function () {
                    return this.appliedCoupon;
                  },
                },
                {
                  key: 'deleteAppliedCoupon',
                  value: function () {
                    this.appliedCoupon = null;
                  },
                },
                {
                  key: 'setCouponData',
                  value: function (t) {
                    this.coupon.next(t);
                  },
                },
                {
                  key: 'getCouponData',
                  value: function () {
                    return this.coupon;
                  },
                },
                {
                  key: 'deleteCouponData',
                  value: function () {
                    this.coupon.next(null);
                  },
                },
                {
                  key: 'getCoupons',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getCoupons', data: {} }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getCoupon',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getCoupon', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getCouponForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getCouponForEditing', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'addCoupon',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newCoupon', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'editCoupon',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateCoupon', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'deleteCoupon',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'deleteCoupon', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeCouponStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeCouponStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'checkCoupon',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'checkCoupon', data: { code: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'validateCoupon',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'validateCoupon', data: { code: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    fDUG: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.billingDetails = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setBilling',
                  value: function (t) {
                    this.billingDetails.next(t);
                  },
                },
                {
                  key: 'getBilling',
                  value: function () {
                    return this.billingDetails;
                  },
                },
                {
                  key: 'deleteBilling',
                  value: function () {
                    this.billingDetails.next(null);
                  },
                },
                {
                  key: 'saveBillingDetails',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'saveBillingDetails', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getBillingDetails',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getBillingDetails', data: { branch: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    fvxu: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('z6cu'),
        c = n('fXoL'),
        o = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'setUserProfile',
                  value: function (t) {
                    this.userProfile = t;
                  },
                },
                {
                  key: 'getUserProfile',
                  value: function () {
                    return this.userProfile;
                  },
                },
                {
                  key: 'checkUser',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'checkUser', data: { email: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changePassword',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'changePassword', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'saveProfile',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'saveProfile', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getProfile',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getProfile', data: {} }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c['\u0275\u0275inject'](a.a));
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
    gbKz: function (t, e, n) {
      !(function () {
        'use strict';
        function n(t) {
          return !('number' != typeof t || t != t || t === 1 / 0 || t === -1 / 0);
        }
        function a(t) {
          return 'number' == typeof t && Math.abs(t) <= 9007199254740991;
        }
        ('object' == typeof self && self.self === self && self) ||
          ('object' == typeof global && global.global === global && global);
        var u = /(hundred|thousand|(m|b|tr|quadr)illion)$/,
          i = /teen$/,
          r = /y$/,
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
        function s(t) {
          return u.test(t) || i.test(t)
            ? t + 'th'
            : r.test(t)
            ? t.replace(r, 'ieth')
            : c.test(t)
            ? t.replace(c, l)
            : t;
        }
        function l(t, e) {
          return o[e];
        }
        var p = 100,
          h = 1e3,
          f = 1e6,
          d = 1e9,
          v = 1e12,
          b = 1e15,
          y = 9007199254740992,
          O = [
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
          j = [
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
        function m(t, e) {
          var u,
            i = parseInt(t, 10);
          if (!n(i)) throw new TypeError('Not a finite number: ' + t + ' (' + typeof t + ')');
          if (!a(i))
            throw new RangeError(
              'Input is not a safe number, it\u2019s either too large or too small.'
            );
          return (
            (u = (function t(e) {
              var n,
                a,
                u = arguments[1];
              return 0 === e
                ? u
                  ? u.join(' ').replace(/,$/, '')
                  : 'zero'
                : (u || (u = []),
                  e < 0 && (u.push('minus'), (e = Math.abs(e))),
                  e < 20
                    ? ((n = 0), (a = O[e]))
                    : e < p
                    ? ((n = e % 10), (a = j[Math.floor(e / 10)]), n && ((a += '-' + O[n]), (n = 0)))
                    : e < h
                    ? ((n = e % p), (a = t(Math.floor(e / p)) + ' hundred'))
                    : e < f
                    ? ((n = e % h), (a = t(Math.floor(e / h)) + ' thousand,'))
                    : e < d
                    ? ((n = e % f), (a = t(Math.floor(e / f)) + ' million,'))
                    : e < v
                    ? ((n = e % d), (a = t(Math.floor(e / d)) + ' billion,'))
                    : e < b
                    ? ((n = e % v), (a = t(Math.floor(e / v)) + ' trillion,'))
                    : e <= y && ((n = e % b), (a = t(Math.floor(e / b)) + ' quadrillion,')),
                  u.push(a),
                  t(n, u));
            })(i)),
            e ? s(u) : u
          );
        }
        var k = {
          toOrdinal: function (t) {
            var e = parseInt(t, 10);
            if (!n(e)) throw new TypeError('Not a finite number: ' + t + ' (' + typeof t + ')');
            if (!a(e))
              throw new RangeError(
                'Input is not a safe number, it\u2019s either too large or too small.'
              );
            var u = String(e),
              i = Math.abs(e % 100),
              r = 11 <= i && i <= 13,
              c = u.charAt(u.length - 1);
            return u + (r ? 'th' : '1' === c ? 'st' : '2' === c ? 'nd' : '3' === c ? 'rd' : 'th');
          },
          toWords: m,
          toWordsOrdinal: function (t) {
            return s(m(t));
          },
        };
        t.exports && (e = t.exports = k), (e.numberToWords = k);
      })();
    },
    ggm5: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('z6cu'),
        c = n('fXoL'),
        o = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'getStudents',
                  value: function (t, e, n, a, c) {
                    return this.httpService
                      .httpPost({
                        api: 'getStudentsForAttendance',
                        data: { branch: t, category: e, course: n, batch: a, lecture: c },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'saveAttendance',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'saveAttendance', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getStudentCourseAttendance',
                  value: function (t, e, n, a, c) {
                    return this.httpService
                      .httpPost({
                        api: 'getStudentCourseAttendance',
                        data: { subject: t, month: e, year: n, student: a, studentCourse: c },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getAttendance',
                  value: function (t, e, n, a, c, o, s) {
                    return this.httpService
                      .httpPost({
                        api: 'getAttendance',
                        data: {
                          month: t,
                          year: e,
                          branch: n,
                          category: a,
                          course: c,
                          batch: o,
                          student: s,
                        },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c['\u0275\u0275inject'](a.a));
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
    gmaa: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        u = n('JIr8'),
        i = n('fCOA'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.onlineExamQuestion = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setOnlineExamQuestionData',
                  value: function (t) {
                    this.onlineExamQuestion.next(t);
                  },
                },
                {
                  key: 'getOnlineExamQuestionData',
                  value: function () {
                    return this.onlineExamQuestion;
                  },
                },
                {
                  key: 'deleteOnlineExamQuestionData',
                  value: function () {
                    this.onlineExamQuestion.next(null);
                  },
                },
                {
                  key: 'setOnlineExamQuestionId',
                  value: function (t) {
                    this.onlineExamQuestionId = t;
                  },
                },
                {
                  key: 'getOnlineExamQuestionId',
                  value: function () {
                    return this.onlineExamQuestionId;
                  },
                },
                {
                  key: 'deleteOnlineExamQuestionId',
                  value: function () {
                    this.onlineExamQuestionId = null;
                  },
                },
                {
                  key: 'newOnlineExamQuestion',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'newOnlineExamQuestion', data: t })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getOnlineExamQuestion',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getOnlineExamQuestion', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getOnlineExamQuestions',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getOnlineExamQuestions', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getOnlineExamQuestionsForStudent',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getOnlineExamQuestionsForStudent', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'changeOnlineExamQuestionStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'changeOnlineExamQuestionStatus',
                        data: { id: t, status: e },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editOnlineExamQuestion',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'editOnlineExamQuestion', data: t })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteOnlineExamQuestion',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteOnlineExamQuestion', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
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
    hgTq: function (t, e, n) {
      'use strict';
      var a,
        u = n('fCOA'),
        i = n('fXoL'),
        r =
          (((a = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'setCheckoutDetails',
                  value: function (t) {
                    this.checkoutDetails = t;
                  },
                },
                {
                  key: 'getCheckoutDetails',
                  value: function () {
                    return this.checkoutDetails;
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || a)(i['\u0275\u0275inject'](u.a));
          }),
          (a.ɵprov = i['\u0275\u0275defineInjectable']({
            token: a,
            factory: a.ɵfac,
            providedIn: 'root',
          })),
          a),
        c = n('f8CG'),
        o = n('s5zK'),
        s = n('aceb'),
        l = n('ofXK');
      function p(t, e) {
        if (1 & t) {
          var n = i['\u0275\u0275getCurrentView']();
          i['\u0275\u0275elementStart'](0, 'tr'),
            i['\u0275\u0275elementStart'](1, 'th'),
            i['\u0275\u0275text'](2, 'Coupon Code:'),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementStart'](3, 'td'),
            i['\u0275\u0275elementStart'](4, 'nb-form-field'),
            i['\u0275\u0275elementStart'](5, 'input', 7),
            i['\u0275\u0275listener']('input', function (t) {
              return (
                i['\u0275\u0275restoreView'](n),
                i['\u0275\u0275nextContext']().changeCouponCode(t.target.value)
              );
            }),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementStart'](6, 'button', 8),
            i['\u0275\u0275listener']('click', function () {
              return i['\u0275\u0275restoreView'](n), i['\u0275\u0275nextContext']().applyCoupon();
            }),
            i['\u0275\u0275element'](7, 'nb-icon', 9),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementEnd']();
        }
      }
      function h(t, e) {
        if (
          (1 & t &&
            (i['\u0275\u0275elementStart'](0, 'tr'),
            i['\u0275\u0275elementStart'](1, 'th'),
            i['\u0275\u0275text'](2, 'Coupon Code:'),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementStart'](3, 'td'),
            i['\u0275\u0275text'](4),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = i['\u0275\u0275nextContext']();
          i['\u0275\u0275advance'](4), i['\u0275\u0275textInterpolate'](n.coupon.code);
        }
      }
      function f(t, e) {
        if (
          (1 & t &&
            (i['\u0275\u0275elementStart'](0, 'tr'),
            i['\u0275\u0275elementStart'](1, 'th'),
            i['\u0275\u0275text'](2, 'Discount:'),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementStart'](3, 'td'),
            i['\u0275\u0275text'](4),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = i['\u0275\u0275nextContext']();
          i['\u0275\u0275advance'](4), i['\u0275\u0275textInterpolate'](n.coupon.discount);
        }
      }
      function d(t, e) {
        if (
          (1 & t &&
            (i['\u0275\u0275elementStart'](0, 'tr'),
            i['\u0275\u0275elementStart'](1, 'th'),
            i['\u0275\u0275text'](2, 'Discount Amount:'),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementStart'](3, 'td'),
            i['\u0275\u0275text'](4),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = i['\u0275\u0275nextContext']();
          i['\u0275\u0275advance'](4),
            i['\u0275\u0275textInterpolate1']('', n.getAmount(n.coupon.discountAmount), '/-');
        }
      }
      function v(t, e) {
        if (
          (1 & t &&
            (i['\u0275\u0275elementStart'](0, 'tr'),
            i['\u0275\u0275elementStart'](1, 'th'),
            i['\u0275\u0275text'](2, 'Total Amount:'),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementStart'](3, 'td'),
            i['\u0275\u0275text'](4),
            i['\u0275\u0275elementEnd'](),
            i['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          var n = i['\u0275\u0275nextContext']();
          i['\u0275\u0275advance'](4),
            i['\u0275\u0275textInterpolate1']('', n.getAmount(n.coupon.totalAmount), '/-');
        }
      }
      n.d(e, 'a', function () {
        return y;
      });
      var b,
        y =
          (((b = (function () {
            function t(e, n, a, u, i) {
              _classCallCheck(this, t),
                (this.checkoutService = e),
                (this.couponService = n),
                (this.paymentService = a),
                (this.toastrService = u),
                (this.ref = i);
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function () {
                    (this.couponCode = null),
                      (this.checkoutData = this.paymentService.getPaymentDetails());
                  },
                },
                {
                  key: 'onClose',
                  value: function () {
                    this.ref.close({ status: !1 });
                  },
                },
                {
                  key: 'changeCouponCode',
                  value: function (t) {
                    this.couponCode = t;
                  },
                },
                {
                  key: 'calculateCouponDiscount',
                  value: function (t) {
                    var e = this.checkoutData.amount,
                      n = t.discountAmount;
                    'percentage' === t.discountType && (n = (e / 100) * t.discountAmount),
                      (e -= n),
                      (this.coupon = {
                        code: t.code,
                        discount: ''
                          .concat(
                            'percentage' === t.discountType
                              ? t.discountAmount
                              : this.getAmount(t.discountAmount)
                          )
                          .concat('percentage' === t.discountType ? '%' : '/-'),
                        discountAmount: n,
                        totalAmount: e,
                      }),
                      this.couponService.setAppliedCoupon(this.coupon);
                  },
                },
                {
                  key: 'applyCoupon',
                  value: function () {
                    var t = this;
                    this.couponCode &&
                      this.couponService.validateCoupon(this.couponCode).subscribe(
                        function (e) {
                          t.calculateCouponDiscount(e);
                        },
                        function (e) {
                          t.showToastr('top-right', 'danger', e);
                        }
                      );
                  },
                },
                {
                  key: 'getAmount',
                  value: function (t) {
                    return (t = parseFloat(t.toString())).toFixed(2).toString();
                  },
                },
                {
                  key: 'showToastr',
                  value: function (t, e, n) {
                    this.toastrService.show(e, n, { position: t, status: e });
                  },
                },
                {
                  key: 'checkout',
                  value: function () {
                    this.ref.close({ status: !0 });
                  },
                },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || b)(
              i['\u0275\u0275directiveInject'](r),
              i['\u0275\u0275directiveInject'](c.a),
              i['\u0275\u0275directiveInject'](o.a),
              i['\u0275\u0275directiveInject'](s.Db),
              i['\u0275\u0275directiveInject'](s.I)
            );
          }),
          (b.ɵcmp = i['\u0275\u0275defineComponent']({
            type: b,
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
                (i['\u0275\u0275elementStart'](0, 'nb-card', 0),
                i['\u0275\u0275elementStart'](1, 'nb-card-header'),
                i['\u0275\u0275elementStart'](2, 'button', 1),
                i['\u0275\u0275listener']('click', function () {
                  return e.onClose();
                }),
                i['\u0275\u0275element'](3, 'nb-icon', 2),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementStart'](4, 'h3'),
                i['\u0275\u0275text'](5, 'Checkout'),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementStart'](6, 'nb-card-body'),
                i['\u0275\u0275elementStart'](7, 'div', 3),
                i['\u0275\u0275elementStart'](8, 'table', 4),
                i['\u0275\u0275elementStart'](9, 'tbody'),
                i['\u0275\u0275elementStart'](10, 'tr'),
                i['\u0275\u0275elementStart'](11, 'th'),
                i['\u0275\u0275text'](12, 'Plan Type:'),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementStart'](13, 'td'),
                i['\u0275\u0275text'](14),
                i['\u0275\u0275pipe'](15, 'uppercase'),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementStart'](16, 'tr'),
                i['\u0275\u0275elementStart'](17, 'th'),
                i['\u0275\u0275text'](18, 'Package Type:'),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementStart'](19, 'td'),
                i['\u0275\u0275text'](20),
                i['\u0275\u0275pipe'](21, 'uppercase'),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementStart'](22, 'tr'),
                i['\u0275\u0275elementStart'](23, 'th'),
                i['\u0275\u0275text'](24, 'Amount:'),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementStart'](25, 'td'),
                i['\u0275\u0275text'](26),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275template'](27, p, 8, 0, 'tr', 5),
                i['\u0275\u0275template'](28, h, 5, 1, 'tr', 5),
                i['\u0275\u0275template'](29, f, 5, 1, 'tr', 5),
                i['\u0275\u0275template'](30, d, 5, 1, 'tr', 5),
                i['\u0275\u0275template'](31, v, 5, 1, 'tr', 5),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementStart'](32, 'nb-card-footer'),
                i['\u0275\u0275elementStart'](33, 'button', 6),
                i['\u0275\u0275listener']('click', function () {
                  return e.checkout();
                }),
                i['\u0275\u0275text'](34, ' Checkout '),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd']()),
                2 & t &&
                  (i['\u0275\u0275advance'](14),
                  i['\u0275\u0275textInterpolate'](
                    i['\u0275\u0275pipeBind1'](15, 8, e.checkoutData.planType)
                  ),
                  i['\u0275\u0275advance'](6),
                  i['\u0275\u0275textInterpolate'](
                    i['\u0275\u0275pipeBind1'](21, 10, e.checkoutData.packageType)
                  ),
                  i['\u0275\u0275advance'](6),
                  i['\u0275\u0275textInterpolate1']('', e.getAmount(e.checkoutData.amount), '/-'),
                  i['\u0275\u0275advance'](1),
                  i['\u0275\u0275property']('ngIf', !e.coupon),
                  i['\u0275\u0275advance'](1),
                  i['\u0275\u0275property']('ngIf', e.coupon),
                  i['\u0275\u0275advance'](1),
                  i['\u0275\u0275property']('ngIf', e.coupon),
                  i['\u0275\u0275advance'](1),
                  i['\u0275\u0275property']('ngIf', e.coupon),
                  i['\u0275\u0275advance'](1),
                  i['\u0275\u0275property']('ngIf', e.coupon));
            },
            directives: [s.x, s.z, s.u, s.M, s.w, l.n, s.y, s.K, s.P, s.vb, s.Fb],
            pipes: [l.v],
            styles: [
              '.checkout[_ngcontent-%COMP%]{width:60vw;height:auto}@media only screen and (max-width:1200px){.checkout[_ngcontent-%COMP%]{width:65vw}}@media only screen and (max-width:840px){.checkout[_ngcontent-%COMP%]{width:70vw}}@media only screen and (max-width:420px){.checkout[_ngcontent-%COMP%]{width:90vw}}@media only screen and (max-width:300px){.checkout[_ngcontent-%COMP%]{top:2vh;left:2vw;width:96vw}}',
            ],
          })),
          b);
    },
    lst6: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.batches = new r.a([])),
                (this.batch = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setBatchId',
                  value: function (t) {
                    this.batchId = t;
                  },
                },
                {
                  key: 'getBatchId',
                  value: function () {
                    return this.batchId;
                  },
                },
                {
                  key: 'deleteBatchId',
                  value: function () {
                    this.batchId = null;
                  },
                },
                {
                  key: 'setBatchesData',
                  value: function (t) {
                    this.batches.next(t);
                  },
                },
                {
                  key: 'getBatchesData',
                  value: function () {
                    return this.batches;
                  },
                },
                {
                  key: 'deleteBatchesData',
                  value: function () {
                    this.batches.next([]);
                  },
                },
                {
                  key: 'setBatchData',
                  value: function (t) {
                    this.batch.next(t);
                  },
                },
                {
                  key: 'getBatchData',
                  value: function () {
                    return this.batch;
                  },
                },
                {
                  key: 'deleteBatchData',
                  value: function () {
                    this.batch.next(null);
                  },
                },
                {
                  key: 'getBatchName',
                  value: function (t) {
                    return this.batches.pipe(
                      Object(u.a)(function (e) {
                        var n = e.find(function (e) {
                          return e._id === t;
                        });
                        return n ? n.basicDetails.batchName : '--';
                      })
                    );
                  },
                },
                {
                  key: 'getBatches',
                  value: function (t, e, n) {
                    return this.httpService
                      .httpPost({ api: 'getBatches', data: { branch: t, category: e, course: n } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBatch',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getBatch', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getBatchSubjects',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'getBatchSubjects', data: { course: t, batch: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBatchForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getBatchForEditing', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'addBatch',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newBatch', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'editBatch',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateBatch', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'deleteBatch',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'deleteBatch', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeBatchStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeBatchStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    nPMn: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('z6cu'),
        c = n('fXoL'),
        o = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'setLocalInstitutePaymentAccessKey',
                  value: function (t) {
                    this.institutePaymentAccessKey = t;
                  },
                },
                {
                  key: 'getLocalInstitutePaymentAccessKey',
                  value: function () {
                    return this.institutePaymentAccessKey;
                  },
                },
                {
                  key: 'getInstituteKeys',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getInstituteKeys', data: {} }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getInstitutePaymentAccessKey',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getInstitutePaymentAccessKey', data: { branch: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'saveInstitutePaymentGatewayKeys',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'saveInstitutePaymentGatewayKeys', data: { keys: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'saveInstituteZoomKeys',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'saveInstituteZoomKeys', data: t })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'generateZoomAuthToken',
                  value: function () {
                    return this.httpService.httpGet({ api: 'generateZoomAuthToken' }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getZoomAuthLink',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getZoomAuthLink', data: {} }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c['\u0275\u0275inject'](a.a));
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
    pjuo: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.employee = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setEmployeeData',
                  value: function (t) {
                    this.employee.next(t);
                  },
                },
                {
                  key: 'getEmployeeData',
                  value: function () {
                    return this.employee;
                  },
                },
                {
                  key: 'deleteEmployeeData',
                  value: function () {
                    this.employee.next(null);
                  },
                },
                {
                  key: 'setEmployeeType',
                  value: function (t) {
                    this.employeeType = t;
                  },
                },
                {
                  key: 'getEmployeeType',
                  value: function () {
                    return this.employeeType;
                  },
                },
                {
                  key: 'deleteEmployeeType',
                  value: function () {
                    this.employeeType = null;
                  },
                },
                {
                  key: 'setEmployeeId',
                  value: function (t) {
                    this.employeeId = t;
                  },
                },
                {
                  key: 'getEmployeeId',
                  value: function () {
                    return this.employeeId;
                  },
                },
                {
                  key: 'deleteEmployeeId',
                  value: function () {
                    this.employeeId = null;
                  },
                },
                {
                  key: 'addEmployee',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'newEmployee', data: { employee: t, branchEmployee: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getEmployees',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getEmployees', data: {} }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getEmployee',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getEmployee', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getEmployeeByIMSId',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getEmployeeByIMSId', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'searchEmployee',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'searchEmployee', data: { employeeId: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getEmployeeForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getEmployeeForEditing', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'changeEmployeeStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeEmployeeStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editEmployee',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateEmployee', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'deleteEmployee',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteEmployee', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    qsE9: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.studentCourseInstallments = new r.a(null)),
                (this.courseInstallment = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setStudentCourseInstallmentId',
                  value: function (t) {
                    this.studentCourseInstallmentId = t;
                  },
                },
                {
                  key: 'getStudentCourseInstallmentId',
                  value: function () {
                    return this.studentCourseInstallmentId;
                  },
                },
                {
                  key: 'deleteStudentCourseInstallmentId',
                  value: function () {
                    this.studentCourseInstallmentId = null;
                  },
                },
                {
                  key: 'setStudentCourseInstallmentData',
                  value: function (t) {
                    this.studentCourseInstallments.next(t);
                  },
                },
                {
                  key: 'getStudentCourseInstallmentData',
                  value: function () {
                    return this.studentCourseInstallments;
                  },
                },
                {
                  key: 'deleteStudentCourseInstallmentData',
                  value: function () {
                    this.studentCourseInstallments.next(null);
                  },
                },
                {
                  key: 'setCourseInstallmentId',
                  value: function (t) {
                    this.courseInstallmentId = t;
                  },
                },
                {
                  key: 'getCourseInstallmentId',
                  value: function () {
                    return this.courseInstallmentId;
                  },
                },
                {
                  key: 'deleteCourseInstallmentId',
                  value: function () {
                    this.courseInstallmentId = null;
                  },
                },
                {
                  key: 'setCourseInstallmentData',
                  value: function (t) {
                    this.courseInstallment.next(t);
                  },
                },
                {
                  key: 'getCourseInstallmentData',
                  value: function () {
                    return this.courseInstallment;
                  },
                },
                {
                  key: 'deleteCourseInstallmentData',
                  value: function () {
                    this.courseInstallment.next(null);
                  },
                },
                {
                  key: 'setCourseInstallmentReceipt',
                  value: function (t, e) {
                    this.studentCourseInstallments.subscribe(function (n) {
                      if (n) {
                        var a = n.installments.findIndex(function (e) {
                          return e._id === t;
                        });
                        a >= 0 &&
                          ((n.amountCollected = e
                            ? n.amountCollected + n.installments[a].installmentAmount
                            : n.amountCollected - n.installments[a].installmentAmount),
                          (n.pendingAmount = n.totalAmount - n.amountCollected),
                          (n.installments[a].receiptId = e));
                      }
                    });
                  },
                },
                {
                  key: 'getCourseInstallment',
                  value: function (t) {
                    return this.studentCourseInstallments.pipe(
                      Object(u.a)(function (e) {
                        return e
                          ? e.installments.find(function (e) {
                              return e._id === t;
                            })
                          : null;
                      })
                    );
                  },
                },
                {
                  key: 'addStudentCourseInstallment',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'newStudentCourseInstallment',
                        data: { studentCourse: t, studentCourseInstallment: e },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentCourseInstallments',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentCourseInstallments', data: { student: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentCourseInstallment',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentCourseInstallment', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentCourseInstallmentForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentCourseInstallmentForEditing', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'changeStudentCourseInstallmentStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({
                        api: 'changeStudentCourseInstallmentStatus',
                        data: { id: t, status: e },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editStudentCourseInstallment',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'updateStudentCourseInstallment', data: t })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteStudentCourseInstallment',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteStudentCourseInstallment', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    s5zK: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('z6cu'),
        c = n('fXoL'),
        o = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e);
            }
            return (
              _createClass(t, [
                {
                  key: 'getPaymentDetails',
                  value: function () {
                    return this.paymentDetails;
                  },
                },
                {
                  key: 'setPaymentDetails',
                  value: function (t, e, n) {
                    this.paymentDetails = { planType: t, packageType: e, amount: n };
                  },
                },
                {
                  key: 'deletePaymentDetails',
                  value: function () {
                    this.paymentDetails = null;
                  },
                },
                {
                  key: 'getInstitutePaymentDetails',
                  value: function () {
                    return this.institutePaymentDetails;
                  },
                },
                {
                  key: 'setInstitutePaymentDetails',
                  value: function (t) {
                    this.institutePaymentDetails = { amount: t };
                  },
                },
                {
                  key: 'deleteInstitutePaymentDetails',
                  value: function () {
                    this.institutePaymentDetails = null;
                  },
                },
                {
                  key: 'verifyPayment',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'verifyPayment', data: { payment: t, receipt: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'verifyInstitutePayment',
                  value: function (t, e, n) {
                    return this.httpService
                      .httpPost({
                        api: 'verifyInstitutePayment',
                        data: { branch: t, payment: e, receipt: n },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(c['\u0275\u0275inject'](a.a));
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
    xyIN: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        r = n('z6cu'),
        c = n('fCOA'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.membershipPlan = new i.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setMembershipPlan',
                  value: function (t) {
                    this.membershipPlan.next(t);
                  },
                },
                {
                  key: 'getMembershipPlan',
                  value: function () {
                    return this.membershipPlan;
                  },
                },
                {
                  key: 'setMembershipType',
                  value: function (t) {
                    this.membershipType = t;
                  },
                },
                {
                  key: 'getMembershipType',
                  value: function () {
                    return this.membershipType;
                  },
                },
                {
                  key: 'getMemberships',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getMembershipPlans', data: {} }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getMembership',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getMembershipPlan', data: { name: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(r.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'saveMembershipPlan',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'saveMembershipPlan', data: t }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(r.a)(t);
                      })
                    );
                  },
                },
              ]),
              t
            );
          })();
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
    zZNt: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.exam = new r.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setExamData',
                  value: function (t) {
                    this.exam.next(t);
                  },
                },
                {
                  key: 'getExamData',
                  value: function () {
                    return this.exam;
                  },
                },
                {
                  key: 'deleteExamData',
                  value: function () {
                    this.exam.next(null);
                  },
                },
                {
                  key: 'setExamId',
                  value: function (t) {
                    this.examId = t;
                  },
                },
                {
                  key: 'getExamId',
                  value: function () {
                    return this.examId;
                  },
                },
                {
                  key: 'deleteExamId',
                  value: function () {
                    this.examId = null;
                  },
                },
                {
                  key: 'getStudentCourseScore',
                  value: function (t, e, n, a, r) {
                    return this.httpService
                      .httpPost({
                        api: 'getStudentCourseScore',
                        data: { subject: t, month: e, year: n, student: a, studentCourse: r },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudentsForExam',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getStudentsForExam', data: { exam: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'saveExam',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'saveExam', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getExams',
                  value: function (t, e, n, a, r, o, s) {
                    return this.httpService
                      .httpPost({
                        api: 'getExams',
                        data: {
                          branch: t,
                          category: e,
                          course: n,
                          batch: a,
                          subject: r,
                          month: o,
                          year: s,
                        },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getExamsPerformance',
                  value: function (t, e, n, a, r, o, s, l) {
                    return this.httpService
                      .httpPost({
                        api: 'getExamsPerformance',
                        data: {
                          month: t,
                          year: e,
                          branch: n,
                          category: a,
                          course: r,
                          batch: o,
                          subject: s,
                          student: l,
                        },
                      })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getExam',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getExam', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getExamReport',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getExamReport', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getExamForEditing',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getExamForEditing', data: { id: t } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editExam',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'editExam', data: t }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'saveStudentsMarks',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'saveStudentsMarks', data: { id: t, marks: e } })
                      .pipe(
                        Object(u.a)(function (t) {
                          return t;
                        }),
                        Object(i.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteExam',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'deleteExam', data: { id: t } }).pipe(
                      Object(u.a)(function (t) {
                        return t;
                      }),
                      Object(i.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](a.a));
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
    ziii: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        u = n('JIr8'),
        i = n('fCOA'),
        r = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.lectureMaterial = new r.a(null)),
                (this.lectureMaterials = new r.a([]));
            }
            return (
              _createClass(t, [
                {
                  key: 'setLectureMaterialId',
                  value: function (t) {
                    this.lectureMaterialId = t;
                  },
                },
                {
                  key: 'getLectureMaterialId',
                  value: function () {
                    return this.lectureMaterialId;
                  },
                },
                {
                  key: 'deleteLectureMaterialId',
                  value: function () {
                    this.lectureMaterialId = null;
                  },
                },
                {
                  key: 'setLectureMaterialsData',
                  value: function (t) {
                    this.lectureMaterials.next(t);
                  },
                },
                {
                  key: 'getLectureMaterialsData',
                  value: function () {
                    return this.lectureMaterials;
                  },
                },
                {
                  key: 'deleteLectureMaterialsData',
                  value: function () {
                    this.lectureMaterials.next([]);
                  },
                },
                {
                  key: 'setLectureMaterialData',
                  value: function (t) {
                    this.lectureMaterial.next(t);
                  },
                },
                {
                  key: 'getLectureMaterialData',
                  value: function () {
                    return this.lectureMaterial;
                  },
                },
                {
                  key: 'deleteLectureMaterialData',
                  value: function () {
                    this.lectureMaterial.next(null);
                  },
                },
                {
                  key: 'getLectureMaterials',
                  value: function (t, e, n, i, r) {
                    return this.httpService
                      .httpPost({
                        api: 'getLectureMaterials',
                        data: { branch: t, category: e, course: n, batch: i, lecture: r },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getLectureMaterial',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'getLectureMaterials', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getLectureMaterialsForStudent',
                  value: function (t, e, n, i, r) {
                    return this.httpService
                      .httpPost({
                        api: 'getLectureMaterialsForStudent',
                        data: { branch: t, category: e, course: n, batch: i, lecture: r },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'newLectureMaterials',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newLectureMaterials', data: t }).pipe(
                      Object(a.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changeLectureMaterialStatus',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'changeLectureMaterialStatus', data: { id: t, status: e } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteLectureMaterial',
                  value: function (t) {
                    return this.httpService
                      .httpPost({ api: 'deleteLectureMaterial', data: { id: t } })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
              ]),
              t
            );
          })();
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
