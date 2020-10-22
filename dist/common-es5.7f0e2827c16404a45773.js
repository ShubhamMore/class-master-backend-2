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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('z6cu'),
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'newBranchStudent',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newBranchStudent', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(i.a)(t);
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editBranchStudent',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateBranchStudent', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(i.a)(t);
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('z6cu'),
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
        return u;
      });
      var a = n('2Vo4'),
        r = n('fXoL'),
        u = (function () {
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
            (t.ɵprov = r['\u0275\u0275defineInjectable']({
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.discountTypes = ['percentage', 'amount']),
                (this.discountAndOffers = new i.a([])),
                (this.discountAndOffer = new i.a(null));
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'addDiscountAndOffer',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newDiscountAndOffer', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
    '6Cnf': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var a = n('EQut'),
        r = n('fXoL'),
        u = n('tyNb'),
        i = (function () {
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
              return new (e || t)(r['\u0275\u0275inject'](a.a), r['\u0275\u0275inject'](u.c));
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
    '6Ox6': function (t, e, n) {
      'use strict';
      var a,
        r = n('fCOA'),
        u = n('lJxs'),
        i = n('JIr8'),
        c = n('z6cu'),
        o = n('fXoL'),
        s =
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
                  key: 'generateOrder',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'generateOrder', data: t }).pipe(
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
          })()).ɵfac = function (t) {
            return new (t || a)(o['\u0275\u0275inject'](r.a));
          }),
          (a.ɵprov = o['\u0275\u0275defineInjectable']({
            token: a,
            factory: a.ɵfac,
            providedIn: 'root',
          })),
          a),
        l = n('cxbk'),
        h = n('nwtg'),
        f = n('s5zK'),
        p = n('aceb');
      n.d(e, 'a', function () {
        return v;
      });
      var d,
        v =
          (((d = (function () {
            function t(e, n, a, r, u) {
              _classCallCheck(this, t),
                (this.paymentService = e),
                (this.orderService = n),
                (this.authService = a),
                (this.toastrService = r),
                (this.ref = u);
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
                        key: l.a.razorpayKeyId,
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
                      (this.razorPay = new Razorpay(this.options)),
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
                        t.showToastr('top-right', 'danger', e);
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
                        t.showToastr('top-right', 'danger', e);
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
                        e.showToastr('top-right', 'danger', t);
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
                { key: 'ngOnDestroy', value: function () {} },
              ]),
              t
            );
          })()).ɵfac = function (t) {
            return new (t || d)(
              o['\u0275\u0275directiveInject'](f.a),
              o['\u0275\u0275directiveInject'](s),
              o['\u0275\u0275directiveInject'](h.a),
              o['\u0275\u0275directiveInject'](p.Db),
              o['\u0275\u0275directiveInject'](p.I)
            );
          }),
          (d.ɵcmp = o['\u0275\u0275defineComponent']({
            type: d,
            selectors: [['ngx-payment']],
            decls: 0,
            vars: 0,
            template: function (t, e) {},
            styles: [''],
          })),
          d);
    },
    '7kqb': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        r = n('JIr8'),
        u = n('fCOA'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.lecture = new i.a(null)),
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
                  value: function (t, e, n, u, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getLectures',
                        data: { branch: t, category: e, course: n, batch: u, date: i },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(r.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getLecturesForStudent',
                  value: function (t, e, n, u, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getLecturesForStudent',
                        data: { branch: t, category: e, course: n, batch: u, date: i },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(r.a)(function (t) {
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
                      Object(r.a)(function (t) {
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
              return new (e || t)(o['\u0275\u0275inject'](u.a));
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.lead = new i.a(null));
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
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getLead',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getLead', data: { id: t } }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editLead',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'editLead', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteLead',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'deleteLead', data: { id: t } }).pipe(
                      Object(r.a)(function (t) {
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
        r = n('JIr8'),
        u = n('fCOA'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.courseMaterial = new i.a(null)),
                (this.courseMaterials = new i.a([]));
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
                  value: function (t, e, n, u) {
                    return this.httpService
                      .httpPost({
                        api: 'getCourseMaterials',
                        data: { branch: t, category: e, course: n, subject: u },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getCourseMaterialsForStudent',
                  value: function (t, e, n, u) {
                    return this.httpService
                      .httpPost({
                        api: 'getCourseMaterialsForStudent',
                        data: { branch: t, category: e, course: n, subject: u },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(r.a)(function (t) {
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
                      Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
              return new (e || t)(o['\u0275\u0275inject'](u.a));
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.courses = new i.a([])),
                (this.course = new i.a(null));
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
                      Object(r.a)(function (e) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getCourse',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getCourse', data: { id: t } }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'addCourse',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newCourse', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'editCourse',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateCourse', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.student = new i.a(null));
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
                      Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getStudents',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getStudents', data: {} }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getStudent',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getStudent', data: { id: t } }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editStudent',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateStudent', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.question = new i.a(null)),
                (this.questionAnswer = new i.a(null)),
                (this.questionAnswers = new i.a(null)),
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
                  value: function (t, e, n, a, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getLectureQuestionAnswers',
                        data: { branch: t, category: e, course: n, batch: a, lecture: i },
                      })
                      .pipe(
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'newLectureQuestion',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newLectureQuestion', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'editLectureQuestion',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'editLectureQuestion', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
        return u;
      });
      var a = n('fXoL'),
        r = n('jhN1'),
        u = (function () {
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
              return new (e || t)(a['\u0275\u0275directiveInject'](r.b));
            }),
            (t.ɵpipe = a['\u0275\u0275definePipe']({ name: 'safeUrl', type: t, pure: !0 })),
            t
          );
        })();
    },
    L3Ly: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      var a = n('fXoL'),
        r = (function () {
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
        r = n('JIr8'),
        u = n('fCOA'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.schedule = new i.a(null));
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
                      Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getAllSchedules',
                  value: function (t, e, n, u, i, o) {
                    return this.httpService
                      .httpPost({
                        api: 'getAllSchedule',
                        data: {
                          branch: t,
                          category: e,
                          course: n,
                          batch: u,
                          startDate: i,
                          endDate: o,
                        },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(r.a)(function (t) {
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
                      Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                      Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
              return new (e || t)(o['\u0275\u0275inject'](u.a));
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
        return r;
      });
      var a = n('fXoL'),
        r = (function () {
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.branchEmployee = new i.a(null)),
                (this.branchEmployees = new i.a([])),
                (this.branchEmployeeNameIds = new i.a([]));
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'newBranchEmployee',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newBranchEmployee', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editBranchEmployee',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateBranchEmployee', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
    Vw3K: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var a = n('gbKz'),
        r = n.n(a),
        u = n('m2xi'),
        i = n.n(u);
      function c(t) {
        var e = r.a
            .toWords(+t)
            .replace(',', '')
            .replace('-', ' ')
            .split(' '),
          n = new Array();
        return (
          e.forEach(function (t) {
            n.push(i()(t));
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.studentCourse = new i.a(null));
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'checkBatchRollNumber',
                  value: function (t, e, n, a, i) {
                    return this.httpService
                      .httpPost({
                        api: 'checkBatchRollNumber',
                        data: { branch: t, category: e, course: n, batch: a, rollNumber: i },
                      })
                      .pipe(
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
        r = n('JIr8'),
        u = n('fCOA'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.employeeSalary = new i.a(null));
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
                      Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchEmployeeSalaries',
                  value: function (t, e, n, u) {
                    return this.httpService
                      .httpPost({
                        api: 'getBranchEmployeeSalaries',
                        data: { branch: t, employee: e, month: n, year: u },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
              return new (e || t)(o['\u0275\u0275inject'](u.a));
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
        zoomLiveURL: 'http://localhost:3000/online-meeting/#/live',
        SOCKET_ENDPOINT: '/classMasterSocketConnection',
      };
    },
    emOf: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('lJxs'),
        r = n('JIr8'),
        u = n('fCOA'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.studentCourseInstallmentReceipt = new i.a(null));
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
              return new (e || t)(o['\u0275\u0275inject'](u.a));
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.billingDetails = new i.a(null));
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
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('z6cu'),
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
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(i.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'changePassword',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'changePassword', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(i.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'saveProfile',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'saveProfile', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(i.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getProfile',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getProfile', data: {} }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(i.a)(t);
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
        var r = /(hundred|thousand|(m|b|tr|quadr)illion)$/,
          u = /teen$/,
          i = /y$/,
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
          return r.test(t) || u.test(t)
            ? t + 'th'
            : i.test(t)
            ? t.replace(i, 'ieth')
            : c.test(t)
            ? t.replace(c, l)
            : t;
        }
        function l(t, e) {
          return o[e];
        }
        var h = 100,
          f = 1e3,
          p = 1e6,
          d = 1e9,
          v = 1e12,
          y = 1e15,
          b = 9007199254740992,
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
        function k(t, e) {
          var r,
            u = parseInt(t, 10);
          if (!n(u)) throw new TypeError('Not a finite number: ' + t + ' (' + typeof t + ')');
          if (!a(u))
            throw new RangeError(
              'Input is not a safe number, it\u2019s either too large or too small.'
            );
          return (
            (r = (function t(e) {
              var n,
                a,
                r = arguments[1];
              return 0 === e
                ? r
                  ? r.join(' ').replace(/,$/, '')
                  : 'zero'
                : (r || (r = []),
                  e < 0 && (r.push('minus'), (e = Math.abs(e))),
                  e < 20
                    ? ((n = 0), (a = O[e]))
                    : e < h
                    ? ((n = e % 10), (a = j[Math.floor(e / 10)]), n && ((a += '-' + O[n]), (n = 0)))
                    : e < f
                    ? ((n = e % h), (a = t(Math.floor(e / h)) + ' hundred'))
                    : e < p
                    ? ((n = e % f), (a = t(Math.floor(e / f)) + ' thousand,'))
                    : e < d
                    ? ((n = e % p), (a = t(Math.floor(e / p)) + ' million,'))
                    : e < v
                    ? ((n = e % d), (a = t(Math.floor(e / d)) + ' billion,'))
                    : e < y
                    ? ((n = e % v), (a = t(Math.floor(e / v)) + ' trillion,'))
                    : e <= b && ((n = e % y), (a = t(Math.floor(e / y)) + ' quadrillion,')),
                  r.push(a),
                  t(n, r));
            })(u)),
            e ? s(r) : r
          );
        }
        var S = {
          toOrdinal: function (t) {
            var e = parseInt(t, 10);
            if (!n(e)) throw new TypeError('Not a finite number: ' + t + ' (' + typeof t + ')');
            if (!a(e))
              throw new RangeError(
                'Input is not a safe number, it\u2019s either too large or too small.'
              );
            var r = String(e),
              u = Math.abs(e % 100),
              i = 11 <= u && u <= 13,
              c = r.charAt(r.length - 1);
            return r + (i ? 'th' : '1' === c ? 'st' : '2' === c ? 'nd' : '3' === c ? 'rd' : 'th');
          },
          toWords: k,
          toWordsOrdinal: function (t) {
            return s(k(t));
          },
        };
        t.exports && (e = t.exports = S), (e.numberToWords = S);
      })();
    },
    ggm5: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var a = n('fCOA'),
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('z6cu'),
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'saveAttendance',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'saveAttendance', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(i.a)(t);
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
    hgTq: function (t, e, n) {
      'use strict';
      var a,
        r,
        u = n('fCOA'),
        i = n('fXoL'),
        c =
          (((r = (function () {
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
            return new (t || r)(i['\u0275\u0275inject'](u.a));
          }),
          (r.ɵprov = i['\u0275\u0275defineInjectable']({
            token: r,
            factory: r.ɵfac,
            providedIn: 'root',
          })),
          r),
        o =
          (((a = function t(e) {
            _classCallCheck(this, t), (this.httpService = e);
          }).ɵfac = function (t) {
            return new (t || a)(i['\u0275\u0275inject'](u.a));
          }),
          (a.ɵprov = i['\u0275\u0275defineInjectable']({
            token: a,
            factory: a.ɵfac,
            providedIn: 'root',
          })),
          a),
        s = n('s5zK'),
        l = n('aceb'),
        h = n('ofXK');
      n.d(e, 'a', function () {
        return p;
      });
      var f,
        p =
          (((f = (function () {
            function t(e, n, a, r, u) {
              _classCallCheck(this, t),
                (this.checkoutService = e),
                (this.paymentService = n),
                (this.couponService = a),
                (this.toastrService = r),
                (this.ref = u);
            }
            return (
              _createClass(t, [
                {
                  key: 'ngOnInit',
                  value: function () {
                    this.checkoutData = this.paymentService.getPaymentDetails();
                  },
                },
                {
                  key: 'onClose',
                  value: function () {
                    this.ref.close({ status: !1 });
                  },
                },
                { key: 'applyCoupon', value: function () {} },
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
            return new (t || f)(
              i['\u0275\u0275directiveInject'](c),
              i['\u0275\u0275directiveInject'](s.a),
              i['\u0275\u0275directiveInject'](o),
              i['\u0275\u0275directiveInject'](l.Db),
              i['\u0275\u0275directiveInject'](l.I)
            );
          }),
          (f.ɵcmp = i['\u0275\u0275defineComponent']({
            type: f,
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
                i['\u0275\u0275elementStart'](27, 'tr'),
                i['\u0275\u0275elementStart'](28, 'th'),
                i['\u0275\u0275text'](29, 'Coupon Code:'),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementStart'](30, 'td'),
                i['\u0275\u0275elementStart'](31, 'nb-form-field'),
                i['\u0275\u0275element'](32, 'input', 5),
                i['\u0275\u0275elementStart'](33, 'button', 6),
                i['\u0275\u0275listener']('click', function () {
                  return e.applyCoupon();
                }),
                i['\u0275\u0275element'](34, 'nb-icon', 7),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementStart'](35, 'nb-card-footer'),
                i['\u0275\u0275elementStart'](36, 'button', 8),
                i['\u0275\u0275listener']('click', function () {
                  return e.checkout();
                }),
                i['\u0275\u0275text'](37, ' Checkout '),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd'](),
                i['\u0275\u0275elementEnd']()),
                2 & t &&
                  (i['\u0275\u0275advance'](14),
                  i['\u0275\u0275textInterpolate'](
                    i['\u0275\u0275pipeBind1'](15, 3, e.checkoutData.planType)
                  ),
                  i['\u0275\u0275advance'](6),
                  i['\u0275\u0275textInterpolate'](
                    i['\u0275\u0275pipeBind1'](21, 5, e.checkoutData.packageType)
                  ),
                  i['\u0275\u0275advance'](6),
                  i['\u0275\u0275textInterpolate'](e.checkoutData.amount));
            },
            directives: [l.x, l.z, l.u, l.M, l.w, l.K, l.P, l.vb, l.Fb, l.y],
            pipes: [h.v],
            styles: [
              '.checkout[_ngcontent-%COMP%]{width:60vw;height:auto}@media only screen and (max-width:1200px){.checkout[_ngcontent-%COMP%]{width:65vw}}@media only screen and (max-width:840px){.checkout[_ngcontent-%COMP%]{width:70vw}}@media only screen and (max-width:420px){.checkout[_ngcontent-%COMP%]{width:90vw}}@media only screen and (max-width:300px){.checkout[_ngcontent-%COMP%]{top:2vh;left:2vw;width:96vw}}',
            ],
          })),
          f);
    },
    lst6: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.batches = new i.a([])),
                (this.batch = new i.a(null));
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
                      Object(r.a)(function (e) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getBatch',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getBatch', data: { id: t } }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'addBatch',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'newBatch', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'editBatch',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateBatch', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'deleteBatch',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'deleteBatch', data: { id: t } }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
    pjuo: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.employee = new i.a(null));
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getEmployees',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getEmployees', data: {} }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getEmployee',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getEmployee', data: { id: t } }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editEmployee',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'updateEmployee', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.studentCourseInstallment = new i.a(null));
            }
            return (
              _createClass(t, [
                {
                  key: 'setStudentCourseInstallmentData',
                  value: function (t) {
                    this.studentCourseInstallment.next(t);
                  },
                },
                {
                  key: 'getStudentCourseInstallmentData',
                  value: function () {
                    return this.studentCourseInstallment;
                  },
                },
                {
                  key: 'deleteStudentCourseInstallmentData',
                  value: function () {
                    this.studentCourseInstallment.next(null);
                  },
                },
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
                  key: 'setCourseInstallmentReceipt',
                  value: function (t, e) {
                    this.studentCourseInstallment.subscribe(function (n) {
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
                    return this.studentCourseInstallment.pipe(
                      Object(r.a)(function (e) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('z6cu'),
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
                  key: 'verifyPayment',
                  value: function (t, e) {
                    return this.httpService
                      .httpPost({ api: 'verifyPayment', data: { payment: t, receipt: e } })
                      .pipe(
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(i.a)(t);
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
        return u;
      });
      var a = n('fCOA'),
        r = n('fXoL'),
        u = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e);
            }
            return (
              _createClass(t, [
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
              ]),
              t
            );
          })();
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(r['\u0275\u0275inject'](a.a));
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
    zZNt: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var a = n('fCOA'),
        r = n('lJxs'),
        u = n('JIr8'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t), (this.httpService = e), (this.exam = new i.a(null));
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
                  value: function (t, e, n, a, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getStudentCourseScore',
                        data: { subject: t, month: e, year: n, student: a, studentCourse: i },
                      })
                      .pipe(
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'saveExam',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'saveExam', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
                        return Object(c.a)(t);
                      })
                    );
                  },
                },
                {
                  key: 'getExams',
                  value: function (t, e, n, a, i, o, s) {
                    return this.httpService
                      .httpPost({
                        api: 'getExams',
                        data: {
                          branch: t,
                          category: e,
                          course: n,
                          batch: a,
                          subject: i,
                          month: o,
                          year: s,
                        },
                      })
                      .pipe(
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getExamsPerformance',
                  value: function (t, e, n, a, i, o, s, l) {
                    return this.httpService
                      .httpPost({
                        api: 'getExamsPerformance',
                        data: {
                          month: t,
                          year: e,
                          branch: n,
                          category: a,
                          course: i,
                          batch: o,
                          subject: s,
                          student: l,
                        },
                      })
                      .pipe(
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getExam',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'getExam', data: { id: t } }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'editExam',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'editExam', data: t }).pipe(
                      Object(r.a)(function (t) {
                        return t;
                      }),
                      Object(u.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return t;
                        }),
                        Object(u.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'deleteExam',
                  value: function (t) {
                    return this.httpService.httpPost({ api: 'deleteExam', data: { id: t } }).pipe(
                      Object(r.a)(function (t) {
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
        r = n('JIr8'),
        u = n('fCOA'),
        i = n('2Vo4'),
        c = n('z6cu'),
        o = n('fXoL'),
        s = (function () {
          var t = (function () {
            function t(e) {
              _classCallCheck(this, t),
                (this.httpService = e),
                (this.lectureMaterial = new i.a(null)),
                (this.lectureMaterials = new i.a([]));
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
                  value: function (t, e, n, u, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getLectureMaterials',
                        data: { branch: t, category: e, course: n, batch: u, lecture: i },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
                          return Object(c.a)(t);
                        })
                      );
                  },
                },
                {
                  key: 'getLectureMaterialsForStudent',
                  value: function (t, e, n, u, i) {
                    return this.httpService
                      .httpPost({
                        api: 'getLectureMaterialsForStudent',
                        data: { branch: t, category: e, course: n, batch: u, lecture: i },
                      })
                      .pipe(
                        Object(a.a)(function (t) {
                          return t;
                        }),
                        Object(r.a)(function (t) {
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
                      Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
                        Object(r.a)(function (t) {
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
              return new (e || t)(o['\u0275\u0275inject'](u.a));
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
