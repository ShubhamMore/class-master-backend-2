function _inherits(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _createSuper(e) {
  var t = _isNativeReflectConstruct();
  return function () {
    var r,
      n = _getPrototypeOf(e);
    if (t) {
      var o = _getPrototypeOf(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return _possibleConstructorReturn(this, r);
  };
}
function _possibleConstructorReturn(e, t) {
  return !t || ('object' != typeof t && 'function' != typeof t) ? _assertThisInitialized(e) : t;
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _isNativeReflectConstruct() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ('function' == typeof Proxy) return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _iterableToArray(e) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === r && e.constructor && (r = e.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(e)
        : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? _arrayLikeToArray(e, t)
        : void 0
    );
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function _iterableToArrayLimit(e, t) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
    var r = [],
      n = !0,
      o = !1,
      i = void 0;
    try {
      for (
        var a, s = e[Symbol.iterator]();
        !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t);
        n = !0
      );
    } catch (c) {
      (o = !0), (i = c);
    } finally {
      try {
        n || null == s.return || s.return();
      } finally {
        if (o) throw i;
      }
    }
    return r;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass(e, t, r) {
  return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    0: function (e, t, r) {
      e.exports = r('zUnb');
    },
    1: function (e, t) {},
    AytR: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return n;
      });
      var n = {
        production: !0,
        backend: '',
        encKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
        aesKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
        razorpayKeyId: 'rzp_test_1JFxmyJ8eg8wQZ',
        zoomLiveURL: '/online-meeting/#/live',
        SOCKET_ENDPOINT: '/classMasterSocketConnection',
      };
    },
    BoUZ: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return s;
      });
      var n = r('tyNb'),
        o = r('pLZG'),
        i = r('fXoL'),
        a = r('ofXK'),
        s = (function () {
          var e = (function () {
            function e(t, r, n) {
              _classCallCheck(this, e),
                (this.route = t),
                (this.router = r),
                (this.location = n),
                (this.enabled = !1);
            }
            return (
              _createClass(e, [
                {
                  key: 'trackPageViews',
                  value: function () {
                    var e = this;
                    this.enabled &&
                      this.router.events
                        .pipe(
                          Object(o.a)(function (e) {
                            return e instanceof n.b;
                          })
                        )
                        .subscribe(function () {
                          ga('send', { hitType: 'pageview', page: e.location.path() });
                        });
                  },
                },
                {
                  key: 'trackEvent',
                  value: function (e) {
                    this.enabled && ga('send', 'event', e);
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i['\u0275\u0275inject'](n.a),
                i['\u0275\u0275inject'](n.c),
                i['\u0275\u0275inject'](a.i)
              );
            }),
            (e.ɵprov = i['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })();
    },
    EQut: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return l;
      });
      var n = r('fCOA'),
        o = r('lJxs'),
        i = r('JIr8'),
        a = r('2Vo4'),
        s = r('z6cu'),
        c = r('fXoL'),
        l = (function () {
          var e = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (this.httpService = t),
                (this.selectedBranchId = new a.a(null)),
                (this.branch = new a.a(null)),
                (this.branches = new a.a([])),
                (this.category = new a.a(null)),
                (this.categories = new a.a([]));
            }
            return (
              _createClass(e, [
                {
                  key: 'setBranchId',
                  value: function (e) {
                    (this.branchId = e), this.setSelectedBranchId(e);
                  },
                },
                {
                  key: 'deleteBranchId',
                  value: function () {
                    this.branchId = null;
                  },
                },
                {
                  key: 'getBranchId',
                  value: function () {
                    return this.branchId;
                  },
                },
                {
                  key: 'setSelectedBranchId',
                  value: function (e) {
                    this.selectedBranchId.next(e);
                  },
                },
                {
                  key: 'getSelectedBranchId',
                  value: function () {
                    return this.selectedBranchId;
                  },
                },
                {
                  key: 'setCategoryId',
                  value: function (e) {
                    this.categoryId = e;
                  },
                },
                {
                  key: 'deleteCategoryId',
                  value: function () {
                    this.categoryId = null;
                  },
                },
                {
                  key: 'getCategoryId',
                  value: function () {
                    return this.categoryId;
                  },
                },
                {
                  key: 'setBranchData',
                  value: function (e) {
                    this.branch.next(e);
                  },
                },
                {
                  key: 'getBranchData',
                  value: function () {
                    return this.branch;
                  },
                },
                {
                  key: 'deleteBranchData',
                  value: function () {
                    this.branch.next(null);
                  },
                },
                {
                  key: 'setBranchesData',
                  value: function (e) {
                    this.branches.next(e);
                  },
                },
                {
                  key: 'getBranchesData',
                  value: function () {
                    return this.branches;
                  },
                },
                {
                  key: 'deleteBranchesData',
                  value: function () {
                    this.branches.next(null);
                  },
                },
                {
                  key: 'setCategoryData',
                  value: function (e) {
                    this.category.next(e);
                  },
                },
                {
                  key: 'getCategoryData',
                  value: function () {
                    return this.category;
                  },
                },
                {
                  key: 'deleteCategoryData',
                  value: function () {
                    this.category.next(null);
                  },
                },
                {
                  key: 'setCategoriesData',
                  value: function (e) {
                    this.categories.next(e);
                  },
                },
                {
                  key: 'getCategoriesData',
                  value: function () {
                    return this.categories;
                  },
                },
                {
                  key: 'deleteCategoriesData',
                  value: function () {
                    this.categories.next([]);
                  },
                },
                {
                  key: 'getBranches',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getBranches', data: {} }).pipe(
                      Object(o.a)(function (e) {
                        return e;
                      }),
                      Object(i.a)(function (e) {
                        return Object(s.a)(e);
                      })
                    );
                  },
                },
                {
                  key: 'getBranchCoursesAndBatches',
                  value: function (e) {
                    return this.httpService
                      .httpPost({ api: 'getBranchCoursesAndBatches', data: { branch: e } })
                      .pipe(
                        Object(o.a)(function (e) {
                          return e;
                        }),
                        Object(i.a)(function (e) {
                          return Object(s.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchesForEmployee',
                  value: function () {
                    return this.httpService
                      .httpPost({ api: 'getBranchesForEmployee', data: {} })
                      .pipe(
                        Object(o.a)(function (e) {
                          return e;
                        }),
                        Object(i.a)(function (e) {
                          return Object(s.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchForStudent',
                  value: function (e) {
                    return this.httpService
                      .httpPost({ api: 'getBranchForStudent', data: { id: e } })
                      .pipe(
                        Object(o.a)(function (e) {
                          return e;
                        }),
                        Object(i.a)(function (e) {
                          return Object(s.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'checkBranchStatus',
                  value: function (e) {
                    return this.httpService
                      .httpPost({ api: 'checkBranchStatus', data: { id: e } })
                      .pipe(
                        Object(o.a)(function (e) {
                          return e;
                        }),
                        Object(i.a)(function (e) {
                          return Object(s.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'getBranchesForStudent',
                  value: function () {
                    return this.httpService
                      .httpPost({ api: 'getBranchesForStudent', data: {} })
                      .pipe(
                        Object(o.a)(function (e) {
                          return e;
                        }),
                        Object(i.a)(function (e) {
                          return Object(s.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'getBranch',
                  value: function (e) {
                    return this.httpService.httpPost({ api: 'getBranch', data: { id: e } }).pipe(
                      Object(o.a)(function (e) {
                        return e;
                      }),
                      Object(i.a)(function (e) {
                        return Object(s.a)(e);
                      })
                    );
                  },
                },
                {
                  key: 'getBranchForEditing',
                  value: function (e) {
                    return this.httpService
                      .httpPost({ api: 'getBranchForEditing', data: { id: e } })
                      .pipe(
                        Object(o.a)(function (e) {
                          return e;
                        }),
                        Object(i.a)(function (e) {
                          return Object(s.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'addBranch',
                  value: function (e) {
                    return this.httpService.httpPost({ api: 'newBranch', data: e }).pipe(
                      Object(o.a)(function (e) {
                        return e;
                      }),
                      Object(i.a)(function (e) {
                        return Object(s.a)(e);
                      })
                    );
                  },
                },
                {
                  key: 'editBranch',
                  value: function (e) {
                    return this.httpService.httpPost({ api: 'updateBranch', data: e }).pipe(
                      Object(o.a)(function (e) {
                        return e;
                      }),
                      Object(i.a)(function (e) {
                        return Object(s.a)(e);
                      })
                    );
                  },
                },
                {
                  key: 'activateBranch',
                  value: function (e, t) {
                    return this.httpService
                      .httpPost({ api: 'activateBranch', data: { id: e, paymentDetails: t } })
                      .pipe(
                        Object(o.a)(function (e) {
                          return e;
                        }),
                        Object(i.a)(function (e) {
                          return Object(s.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'deactivateBranch',
                  value: function (e) {
                    return this.httpService
                      .httpPost({ api: 'deactivateBranch', data: { branch: e } })
                      .pipe(
                        Object(o.a)(function (e) {
                          return e;
                        }),
                        Object(i.a)(function (e) {
                          return Object(s.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'changeBranchStatus',
                  value: function (e, t) {
                    return this.httpService
                      .httpPost({ api: 'changeBranchStatus', data: { id: e, status: t } })
                      .pipe(
                        Object(o.a)(function (e) {
                          return e;
                        }),
                        Object(i.a)(function (e) {
                          return Object(s.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'deleteBranch',
                  value: function (e) {
                    return this.httpService.httpPost({ api: 'deleteBranch', data: { id: e } }).pipe(
                      Object(o.a)(function (e) {
                        return e;
                      }),
                      Object(i.a)(function (e) {
                        return Object(s.a)(e);
                      })
                    );
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(c['\u0275\u0275inject'](n.a));
            }),
            (e.ɵprov = c['\u0275\u0275defineInjectable']({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            })),
            e
          );
        })();
    },
    KWzY: function (e, t, r) {
      'use strict';
      var n,
        o,
        i = r('ZatZ'),
        a = r('lJxs'),
        s = r('JIr8'),
        c = r('fCOA'),
        l = r('z6cu'),
        d = r('fXoL'),
        u =
          (((n = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.httpService = t);
            }
            return (
              _createClass(e, [
                {
                  key: 'getNotifications',
                  value: function () {
                    return this.httpService.httpPost({ api: 'getNotifications', data: {} }).pipe(
                      Object(a.a)(function (e) {
                        return e;
                      }),
                      Object(s.a)(function (e) {
                        return Object(l.a)(e);
                      })
                    );
                  },
                },
                {
                  key: 'getNotification',
                  value: function (e) {
                    return this.httpService
                      .httpPost({ api: 'getNotification', data: { id: e } })
                      .pipe(
                        Object(a.a)(function (e) {
                          return e;
                        }),
                        Object(s.a)(function (e) {
                          return Object(l.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'deleteNotification',
                  value: function (e) {
                    return this.httpService
                      .httpPost({ api: 'deleteNotification', data: { id: e } })
                      .pipe(
                        Object(a.a)(function (e) {
                          return e;
                        }),
                        Object(s.a)(function (e) {
                          return Object(l.a)(e);
                        })
                      );
                  },
                },
                {
                  key: 'changeNotificationStatus',
                  value: function (e) {
                    return this.httpService
                      .httpPost({ api: 'changeNotificationStatus', data: { id: e } })
                      .pipe(
                        Object(a.a)(function (e) {
                          return e;
                        }),
                        Object(s.a)(function (e) {
                          return Object(l.a)(e);
                        })
                      );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || n)(d['\u0275\u0275inject'](c.a));
          }),
          (n.ɵprov = d['\u0275\u0275defineInjectable']({
            token: n,
            factory: n.ɵfac,
            providedIn: 'root',
          })),
          n),
        h = r('EQut'),
        g = r('AytR'),
        p = r('gFX4'),
        f =
          (((o = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, [
                {
                  key: 'setupSocketConnection',
                  value: function () {
                    var e = this,
                      t = 'Bearer ' + JSON.parse(localStorage.getItem('userData'))._token;
                    (this.socket = p(g.a.SOCKET_ENDPOINT, { query: { token: t } })),
                      this.socket.on('connect', function () {
                        e.socket.token = t;
                      });
                  },
                },
                {
                  key: 'getSocket',
                  value: function () {
                    return this.socket;
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵprov = d['\u0275\u0275defineInjectable']({
            token: o,
            factory: o.ɵfac,
            providedIn: 'root',
          })),
          o),
        b = r('nwtg'),
        m = r('vC38'),
        C = r('pLZG'),
        y = r('1G5W'),
        v = r('XNiG'),
        x = r('aceb'),
        S = r('tyNb'),
        O = r('ofXK'),
        P = r('lWTH');
      function k(e, t) {
        if (
          (1 & e &&
            (d['\u0275\u0275elementStart'](0, 'nb-option', 16),
            d['\u0275\u0275text'](1),
            d['\u0275\u0275elementEnd']()),
          2 & e)
        ) {
          var r = t.$implicit;
          d['\u0275\u0275property']('value', r._id),
            d['\u0275\u0275advance'](1),
            d['\u0275\u0275textInterpolate'](r.basicDetails.branchName);
        }
      }
      function w(e, t) {
        if (1 & e) {
          var r = d['\u0275\u0275getCurrentView']();
          d['\u0275\u0275elementStart'](0, 'nb-select', 13),
            d['\u0275\u0275listener']('selectedChange', function (e) {
              return (
                d['\u0275\u0275restoreView'](r),
                d['\u0275\u0275nextContext']().changeSelectBranch(e)
              );
            }),
            d['\u0275\u0275elementStart'](1, 'nb-option', 14),
            d['\u0275\u0275text'](2, 'Select Institute'),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275template'](3, k, 2, 2, 'nb-option', 15),
            d['\u0275\u0275elementEnd']();
        }
        if (2 & e) {
          var n = d['\u0275\u0275nextContext']();
          d['\u0275\u0275property']('selected', n.branchId),
            d['\u0275\u0275advance'](3),
            d['\u0275\u0275property']('ngForOf', n.branches);
        }
      }
      function L(e, t) {
        if ((1 & e && d['\u0275\u0275element'](0, 'nb-action', 17), 2 & e)) {
          var r = d['\u0275\u0275nextContext'](),
            n = d['\u0275\u0275reference'](12);
          d['\u0275\u0275property']('nbPopover', n)('badgeText', r.unseenNotificationCount);
        }
      }
      function T(e, t) {
        if (
          (1 & e &&
            (d['\u0275\u0275elementStart'](0, 'nb-action', 18),
            d['\u0275\u0275element'](1, 'nb-user', 19),
            d['\u0275\u0275pipe'](2, 'uppercase'),
            d['\u0275\u0275elementEnd']()),
          2 & e)
        ) {
          var r = d['\u0275\u0275nextContext']();
          d['\u0275\u0275advance'](1),
            d['\u0275\u0275property']('nbContextMenu', r.userMenu)(
              'onlyPicture',
              r.userPictureOnly
            )('name', d['\u0275\u0275pipeBind1'](2, 3, null == r.user ? null : r.user.name));
        }
      }
      function _(e, t) {
        if (1 & e) {
          var r = d['\u0275\u0275getCurrentView']();
          d['\u0275\u0275elementStart'](0, 'nb-list-item', 23),
            d['\u0275\u0275elementStart'](1, 'div', 24),
            d['\u0275\u0275elementStart'](2, 'div', 25),
            d['\u0275\u0275elementStart'](3, 'h6'),
            d['\u0275\u0275elementStart'](4, 'span', 26),
            d['\u0275\u0275listener']('click', function () {
              d['\u0275\u0275restoreView'](r);
              var e = t.$implicit,
                n = t.index,
                o = d['\u0275\u0275nextContext'](3),
                i = d['\u0275\u0275reference'](14);
              return o.openNotificationBox(e, n, i);
            }),
            d['\u0275\u0275text'](5),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementStart'](6, 'span'),
            d['\u0275\u0275text'](7, '\xa0\xa0'),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementStart'](8, 'small'),
            d['\u0275\u0275text'](9),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementStart'](10, 'div', 27),
            d['\u0275\u0275elementStart'](11, 'span', 28),
            d['\u0275\u0275elementStart'](12, 'nb-icon', 29),
            d['\u0275\u0275listener']('click', function () {
              d['\u0275\u0275restoreView'](r);
              var e = t.$implicit,
                n = t.index,
                o = d['\u0275\u0275nextContext'](3),
                i = d['\u0275\u0275reference'](14);
              return o.openNotificationBox(e, n, i);
            }),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementStart'](13, 'div', 25),
            d['\u0275\u0275elementStart'](14, 'span', 30),
            d['\u0275\u0275text'](15),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementStart'](16, 'div', 27),
            d['\u0275\u0275elementStart'](17, 'span', 31),
            d['\u0275\u0275elementStart'](18, 'nb-icon', 32),
            d['\u0275\u0275listener']('click', function () {
              d['\u0275\u0275restoreView'](r);
              var e = t.$implicit,
                n = t.index,
                o = d['\u0275\u0275nextContext'](3),
                i = d['\u0275\u0275reference'](14);
              return o.openNotificationBox(e, n, i);
            }),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd']();
        }
        if (2 & e) {
          var n = t.$implicit,
            o = d['\u0275\u0275nextContext'](3);
          d['\u0275\u0275property']('ngClass', n.status ? 'new-notification' : ''),
            d['\u0275\u0275advance'](5),
            d['\u0275\u0275textInterpolate1'](' ', o.getNotificationLimitedTitle(n.title), ' '),
            d['\u0275\u0275advance'](4),
            d['\u0275\u0275textInterpolate1']('', o.dateService.getUpToTime(n.date), ' ago'),
            d['\u0275\u0275advance'](6),
            d['\u0275\u0275textInterpolate1'](' ', o.getNotificationLimitedMessage(n.message), ' ');
        }
      }
      function M(e, t) {
        if (
          (1 & e &&
            (d['\u0275\u0275elementStart'](0, 'nb-list'),
            d['\u0275\u0275template'](1, _, 19, 4, 'nb-list-item', 22),
            d['\u0275\u0275elementEnd']()),
          2 & e)
        ) {
          var r = d['\u0275\u0275nextContext'](2);
          d['\u0275\u0275advance'](1), d['\u0275\u0275property']('ngForOf', r.notifications);
        }
      }
      function B(e, t) {
        if (
          (1 & e &&
            (d['\u0275\u0275elementStart'](0, 'div', 20),
            d['\u0275\u0275template'](1, M, 2, 1, 'nb-list', 21),
            d['\u0275\u0275elementEnd']()),
          2 & e)
        ) {
          var r = d['\u0275\u0275nextContext'](),
            n = d['\u0275\u0275reference'](16);
          d['\u0275\u0275advance'](1),
            d['\u0275\u0275property']('ngIf', r.notifications && r.notifications.length > 0)(
              'ngIfElse',
              n
            );
        }
      }
      function j(e, t) {
        if (
          (1 & e &&
            (d['\u0275\u0275elementStart'](0, 'nb-card'),
            d['\u0275\u0275elementStart'](1, 'nb-card-header'),
            d['\u0275\u0275elementStart'](2, 'h4'),
            d['\u0275\u0275elementStart'](3, 'span'),
            d['\u0275\u0275text'](4),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275element'](5, 'br'),
            d['\u0275\u0275elementStart'](6, 'small'),
            d['\u0275\u0275text'](7),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementStart'](8, 'nb-card-body'),
            d['\u0275\u0275elementStart'](9, 'div', 33),
            d['\u0275\u0275text'](10),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementStart'](11, 'nb-card-footer'),
            d['\u0275\u0275elementStart'](12, 'button', 34),
            d['\u0275\u0275listener']('click', function () {
              return t.dialogRef.close();
            }),
            d['\u0275\u0275text'](13, ' Close '),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd'](),
            d['\u0275\u0275elementEnd']()),
          2 & e)
        ) {
          var r = t.$implicit,
            n = d['\u0275\u0275nextContext']();
          d['\u0275\u0275advance'](4),
            d['\u0275\u0275textInterpolate'](r.title),
            d['\u0275\u0275advance'](3),
            d['\u0275\u0275textInterpolate'](n.dateService.convertToDateTimeHourString(r.date)),
            d['\u0275\u0275advance'](3),
            d['\u0275\u0275textInterpolate1'](' ', r.message, ' ');
        }
      }
      function I(e, t) {
        1 & e &&
          (d['\u0275\u0275elementStart'](0, 'p', 35),
          d['\u0275\u0275text'](1, 'No Notifications Found'),
          d['\u0275\u0275elementEnd']());
      }
      r.d(t, 'a', function () {
        return A;
      });
      var F,
        G = function () {
          return ['view', 'user'];
        },
        A =
          (((F = (function () {
            function e(t, r, n, o, i, a, s, c, l, d, u, h, g, p) {
              _classCallCheck(this, e),
                (this.sidebarService = t),
                (this.branchService = r),
                (this.dialogService = n),
                (this.dateService = o),
                (this.router = i),
                (this.route = a),
                (this.menuService = s),
                (this.themeService = c),
                (this.layoutService = l),
                (this.authService = d),
                (this.breakpointService = u),
                (this.notificationService = h),
                (this.nbMenuService = g),
                (this.socketService = p),
                (this.destroy$ = new v.a()),
                (this.userPictureOnly = !1);
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnInit',
                  value: function () {
                    var e = this;
                    this.socketService.setupSocketConnection(),
                      (this.branchId = ''),
                      (this.branches = []),
                      (this.userMenu = []),
                      (this.notifications = []),
                      (this.unseenNotificationCount = 0),
                      (this.user = this.authService.getUserData()),
                      (this.socket = this.socketService.getSocket()),
                      this.getNotifications(),
                      (this.userMenu = []),
                      'admin' !== this.user.userRole &&
                        this.userMenu.push({
                          title: 'Profile',
                          link: '/' + this.user.userRole + '/profile',
                        }),
                      'institute' === this.user.userRole &&
                        this.userMenu.push({ title: 'Settings', link: '/institute/settings' }),
                      this.userMenu.push({ title: 'Logout' }),
                      this.nbMenuService
                        .onItemClick()
                        .pipe(
                          Object(C.a)(function (e) {
                            return 'my-context-menu' === e.tag;
                          }),
                          Object(a.a)(function (e) {
                            return e.item.title;
                          })
                        )
                        .subscribe(function (t) {
                          'Logout' === t && e.logOut();
                        }),
                      this.branchService.getBranchesData().subscribe(function (t) {
                        e.branches = t;
                      }),
                      this.branchService.getSelectedBranchId().subscribe(function (t) {
                        e.branchId = t;
                      }),
                      this.socket.on('notify', function (t) {
                        e.unseenNotificationCount++, e.notifications.splice(0, 0, t);
                      });
                    var t = this.breakpointService.getBreakpointsMap().xl;
                    this.themeService
                      .onMediaQueryChange()
                      .pipe(
                        Object(a.a)(function (e) {
                          return _slicedToArray(e, 2)[1].width < t;
                        }),
                        Object(y.a)(this.destroy$)
                      )
                      .subscribe(function (t) {
                        return (e.userPictureOnly = t);
                      });
                  },
                },
                {
                  key: 'changeSelectBranch',
                  value: function (e) {
                    if ('' !== e) {
                      var t = this.branches.find(function (t) {
                        return t._id === e;
                      });
                      t &&
                        t.status &&
                        (this.branchService.setBranchId(e),
                        this.router.navigate(['/' + this.user.userRole + '/branch/dashboard'], {
                          relativeTo: this.route,
                        }));
                    }
                  },
                },
                {
                  key: 'getNotifications',
                  value: function () {
                    var e = this;
                    this.notificationService.getNotifications().subscribe(
                      function (t) {
                        (e.notifications = t),
                          t.length > 0 &&
                            (e.unseenNotificationCount = t.filter(function (e) {
                              return e.status;
                            }).length);
                      },
                      function (e) {}
                    );
                  },
                },
                {
                  key: 'openNotificationBox',
                  value: function (e, t, r) {
                    var n = this;
                    this.dialogService.open(r, { context: e }),
                      this.notificationService.changeNotificationStatus(e._id).subscribe(
                        function (e) {
                          (n.notifications[t].status = !0),
                            n.unseenNotificationCount > 0 && n.unseenNotificationCount--;
                        },
                        function (e) {}
                      );
                  },
                },
                {
                  key: 'getNotificationLimitedTitle',
                  value: function (e) {
                    return e.length <= 20 ? e : e.substr(0, 17).trim() + '...';
                  },
                },
                {
                  key: 'getNotificationLimitedMessage',
                  value: function (e) {
                    return e.length <= 30 ? e : e.substr(0, 30).trim() + '...';
                  },
                },
                {
                  key: 'deleteNotification',
                  value: function (e, t, r) {
                    var n = this;
                    this.notificationService.deleteNotification(e).subscribe(
                      function (e) {
                        t || (n.unseenNotificationCount > 0 && n.unseenNotificationCount--),
                          n.notifications.splice(r, 1);
                      },
                      function (e) {}
                    );
                  },
                },
                {
                  key: 'logOut',
                  value: function () {
                    this.authService.logout();
                  },
                },
                {
                  key: 'toggleSidebar',
                  value: function () {
                    return (
                      this.sidebarService.toggle(!1, 'menu-sidebar'),
                      this.layoutService.changeLayoutSize(),
                      !1
                    );
                  },
                },
                {
                  key: 'navigateHome',
                  value: function () {
                    return this.menuService.navigateHome(), !1;
                  },
                },
                {
                  key: 'ngOnDestroy',
                  value: function () {
                    this.destroy$.next(),
                      this.destroy$.complete(),
                      this.socket.on('disconnect', function () {});
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || F)(
              d['\u0275\u0275directiveInject'](x.qb),
              d['\u0275\u0275directiveInject'](h.a),
              d['\u0275\u0275directiveInject'](x.J),
              d['\u0275\u0275directiveInject'](i.a),
              d['\u0275\u0275directiveInject'](S.c),
              d['\u0275\u0275directiveInject'](S.a),
              d['\u0275\u0275directiveInject'](x.eb),
              d['\u0275\u0275directiveInject'](x.Bb),
              d['\u0275\u0275directiveInject'](m.b),
              d['\u0275\u0275directiveInject'](b.a),
              d['\u0275\u0275directiveInject'](x.bb),
              d['\u0275\u0275directiveInject'](u),
              d['\u0275\u0275directiveInject'](x.eb),
              d['\u0275\u0275directiveInject'](f)
            );
          }),
          (F.ɵcmp = d['\u0275\u0275defineComponent']({
            type: F,
            selectors: [['ngx-header']],
            decls: 17,
            vars: 4,
            consts: [
              [1, 'header-container'],
              [1, 'logo-container'],
              ['href', '#', 1, 'sidebar-toggle', 3, 'click'],
              ['icon', 'menu-2-outline'],
              ['href', '#', 1, 'logo', 3, 'click'],
              [
                'src',
                '../../../../assets/brand/class-master.png',
                'width',
                '75%',
                'alt',
                'IMS Master',
              ],
              ['size', 'medium', 'status', 'primary', 3, 'selected', 'selectedChange', 4, 'ngIf'],
              ['size', 'small'],
              [
                'class',
                'control-item',
                'icon',
                'bell-outline',
                'nbPopoverPlacement',
                'bottom',
                'badgePosition',
                'top right',
                'badgeStatus',
                'danger',
                3,
                'nbPopover',
                'badgeText',
                4,
                'ngIf',
              ],
              ['class', 'user-action', 4, 'nbIsGranted'],
              ['notificationPopup', ''],
              ['notificationDialog', ''],
              ['noNotifications', ''],
              ['size', 'medium', 'status', 'primary', 3, 'selected', 'selectedChange'],
              ['value', ''],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              [3, 'value'],
              [
                'icon',
                'bell-outline',
                'nbPopoverPlacement',
                'bottom',
                'badgePosition',
                'top right',
                'badgeStatus',
                'danger',
                1,
                'control-item',
                3,
                'nbPopover',
                'badgeText',
              ],
              [1, 'user-action'],
              ['nbContextMenuTag', 'my-context-menu', 3, 'nbContextMenu', 'onlyPicture', 'name'],
              [1, 'notification-popup'],
              [4, 'ngIf', 'ngIfElse'],
              [3, 'ngClass', 4, 'ngFor', 'ngForOf'],
              [3, 'ngClass'],
              [1, 'row'],
              [1, 'col-10'],
              [1, 'pointer', 3, 'click'],
              [1, 'col-2'],
              [1, 'delete-notification', 'pointer', 'float-right'],
              ['icon', 'trash-2-outline', 'nbTooltip', 'Delete', 3, 'click'],
              [1, 'notification-text'],
              [1, 'view-notification', 'pointer', 'float-right'],
              ['nbTooltip', 'Show more..', 'icon', 'arrow-circle-right-outline', 3, 'click'],
              [1, 'notification-modal'],
              ['nbButton', '', 'size', 'small', 'status', 'primary', 1, 'float-right', 3, 'click'],
              [1, 'mt-2', 'mb-2', 'text-center'],
            ],
            template: function (e, t) {
              1 & e &&
                (d['\u0275\u0275elementStart'](0, 'div', 0),
                d['\u0275\u0275elementStart'](1, 'div', 1),
                d['\u0275\u0275elementStart'](2, 'a', 2),
                d['\u0275\u0275listener']('click', function () {
                  return t.toggleSidebar();
                }),
                d['\u0275\u0275element'](3, 'nb-icon', 3),
                d['\u0275\u0275elementEnd'](),
                d['\u0275\u0275elementStart'](4, 'a', 4),
                d['\u0275\u0275listener']('click', function () {
                  return t.navigateHome();
                }),
                d['\u0275\u0275element'](5, 'img', 5),
                d['\u0275\u0275elementEnd'](),
                d['\u0275\u0275elementEnd'](),
                d['\u0275\u0275template'](6, w, 4, 2, 'nb-select', 6),
                d['\u0275\u0275elementEnd'](),
                d['\u0275\u0275elementStart'](7, 'div', 0),
                d['\u0275\u0275elementStart'](8, 'nb-actions', 7),
                d['\u0275\u0275template'](9, L, 1, 2, 'nb-action', 8),
                d['\u0275\u0275template'](10, T, 3, 5, 'nb-action', 9),
                d['\u0275\u0275elementEnd'](),
                d['\u0275\u0275elementEnd'](),
                d['\u0275\u0275template'](
                  11,
                  B,
                  2,
                  2,
                  'ng-template',
                  null,
                  10,
                  d['\u0275\u0275templateRefExtractor']
                ),
                d['\u0275\u0275template'](
                  13,
                  j,
                  14,
                  3,
                  'ng-template',
                  null,
                  11,
                  d['\u0275\u0275templateRefExtractor']
                ),
                d['\u0275\u0275template'](
                  15,
                  I,
                  2,
                  0,
                  'ng-template',
                  null,
                  12,
                  d['\u0275\u0275templateRefExtractor']
                )),
                2 & e &&
                  (d['\u0275\u0275advance'](6),
                  d['\u0275\u0275property']('ngIf', 'admin' !== t.user.userRole),
                  d['\u0275\u0275advance'](3),
                  d['\u0275\u0275property']('ngIf', 'admin' !== t.user.userRole),
                  d['\u0275\u0275advance'](1),
                  d['\u0275\u0275property']('nbIsGranted', d['\u0275\u0275pureFunction0'](3, G)));
            },
            directives: [
              x.M,
              O.n,
              x.m,
              P.a,
              x.mb,
              x.fb,
              O.m,
              x.l,
              x.gb,
              x.Hb,
              x.E,
              x.Y,
              x.Z,
              O.l,
              x.Fb,
              x.x,
              x.z,
              x.w,
              x.y,
              x.u,
            ],
            pipes: [O.v],
            styles: [
              '.nb-theme-default   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-default   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:14.75rem}.nb-theme-default   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-default   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-default   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #edf1f7}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-default   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-default   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-dark   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-dark   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:14.75rem}.nb-theme-dark   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-dark   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-dark   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #151a30}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #151a30}@media (max-width:767.98px){.nb-theme-dark   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-dark   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-cosmic   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:14.75rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-cosmic   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-cosmic   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#b4b4db}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #1b1b38}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #1b1b38}@media (max-width:767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-corporate   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:14.75rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-corporate   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-corporate   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #edf1f7}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-corporate   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.notification-popup[_ngcontent-%COMP%]{width:20rem;max-height:40rem;overflow-y:auto}.notification[_ngcontent-%COMP%]{width:15rem}.new-notification[_ngcontent-%COMP%]{background-color:hsla(0,0%,66.7%,.8);padding:.25rem 1rem}.notification-modal[_ngcontent-%COMP%]{display:block}.delete-notification[_ngcontent-%COMP%]{color:#000;transition:all .25s}.delete-notification[_ngcontent-%COMP%]:hover{color:#ff3d71;transform:scale(1.1)}.notification-text[_ngcontent-%COMP%]{overflow:hidden;display:inline-block;white-space:nowrap}.view-notification[_ngcontent-%COMP%]{color:#000;transition:all .25s}.view-notification[_ngcontent-%COMP%]:hover{color:#00d68f;transform:scale(1.1)}',
            ],
          })),
          F);
    },
    SXPc: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return o;
      });
      var n = r('fXoL'),
        o = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = n['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['ngx-footer']],
              decls: 6,
              vars: 0,
              consts: [
                [1, 'created-by'],
                ['href', 'https://www.google.com', 'target', '_blank'],
              ],
              template: function (e, t) {
                1 & e &&
                  (n['\u0275\u0275elementStart'](0, 'span', 0),
                  n['\u0275\u0275text'](1, ' Created with \u2665 by TEAM '),
                  n['\u0275\u0275elementStart'](2, 'strong'),
                  n['\u0275\u0275elementStart'](3, 'a', 1),
                  n['\u0275\u0275text'](4, 'CLASS MASTER'),
                  n['\u0275\u0275elementEnd'](),
                  n['\u0275\u0275elementEnd'](),
                  n['\u0275\u0275text'](5, ' 2020 '),
                  n['\u0275\u0275elementEnd']());
              },
              styles: [
                '.nb-theme-default   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-dark   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}@media (max-width:575.98px){.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-cosmic   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-corporate   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}',
              ],
            })),
            e
          );
        })();
    },
    ZatZ: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return o;
      });
      var n = r('fXoL'),
        o = (function () {
          var e = (function () {
            function e() {
              _classCallCheck(this, e),
                (this.date = new Date()),
                (this.oneDayInMilliseconds = 864e5),
                (this.dateString = this.convertToDateString(this.date)),
                (this.dateInMilliseconds = this.date.getTime()),
                (this.dateTimeString = this.convertToDateTimeString(this.date)),
                (this.dateTimeISOString = this.convertToISOString(this.date)),
                (this.months = [
                  { monthNo: '01', month: 'Jan' },
                  { monthNo: '02', month: 'Feb' },
                  { monthNo: '03', month: 'Mar' },
                  { monthNo: '04', month: 'Apr' },
                  { monthNo: '05', month: 'May' },
                  { monthNo: '06', month: 'Jun' },
                  { monthNo: '07', month: 'Jul' },
                  { monthNo: '08', month: 'Aug' },
                  { monthNo: '09', month: 'Sep' },
                  { monthNo: '10', month: 'Oct' },
                  { monthNo: '11', month: 'Nov' },
                  { monthNo: '12', month: 'Dec' },
                ]),
                (this.weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']),
                (this.years = []);
              for (var t = 2018; t <= this.date.getFullYear(); t++) this.years.push(t.toString());
            }
            return (
              _createClass(e, [
                {
                  key: 'getWeekDays',
                  value: function () {
                    return this.weekDays;
                  },
                },
                {
                  key: 'getWeekDay',
                  value: function (e) {
                    return this.weekDays[e];
                  },
                },
                {
                  key: 'getDay',
                  value: function (e) {
                    return e ? ((e = new Date(e)), this.weekDays[e.getDay()]) : '--';
                  },
                },
                {
                  key: 'getMonths',
                  value: function () {
                    return this.months;
                  },
                },
                {
                  key: 'getMonthByMonthNumber',
                  value: function (e) {
                    var t = this.months.find(function (t) {
                      return t.monthNo === e;
                    });
                    return t ? t.month : '--';
                  },
                },
                {
                  key: 'getMonth',
                  value: function (e) {
                    return this.months[e].month;
                  },
                },
                {
                  key: 'getCurrentMonth',
                  value: function () {
                    return (this.date.getMonth() + 1).toString().padStart(2, '0');
                  },
                },
                {
                  key: 'getYears',
                  value: function () {
                    return this.years;
                  },
                },
                {
                  key: 'getCurrentYear',
                  value: function () {
                    return this.date.getFullYear().toString();
                  },
                },
                {
                  key: 'getDate',
                  value: function () {
                    return new Date(this.date);
                  },
                },
                {
                  key: 'getDateString',
                  value: function () {
                    return this.dateString;
                  },
                },
                {
                  key: 'getFormattedDate',
                  value: function () {
                    return this.formatDate(this.dateString);
                  },
                },
                {
                  key: 'getDateInMilliseconds',
                  value: function () {
                    return this.dateInMilliseconds;
                  },
                },
                {
                  key: 'getDateTimeString',
                  value: function () {
                    return this.dateTimeString;
                  },
                },
                {
                  key: 'getDateTimeISOString',
                  value: function () {
                    return this.dateTimeISOString;
                  },
                },
                {
                  key: 'dateToMilliseconds',
                  value: function (e) {
                    return new Date(e).getTime();
                  },
                },
                {
                  key: 'millisecondsToDate',
                  value: function (e) {
                    return new Date(e);
                  },
                },
                {
                  key: 'millisecondsToDateString',
                  value: function (e) {
                    return this.convertToDateString(e);
                  },
                },
                {
                  key: 'convertToDate',
                  value: function (e) {
                    return new Date(e);
                  },
                },
                {
                  key: 'convertToDateString',
                  value: function (e) {
                    return e
                      ? (e = new Date(e)).getFullYear() +
                          '-' +
                          (e.getMonth() + 1).toString().padStart(2, '0') +
                          '-' +
                          e.getDate().toString().padStart(2, '0')
                      : '--';
                  },
                },
                {
                  key: 'reverseDate',
                  value: function (e) {
                    return e ? e.split('-').reverse().join('-') : '--';
                  },
                },
                {
                  key: 'addDaysInDate',
                  value: function (e, t) {
                    if (!e) return '--';
                    var r = new Date(e);
                    return r.setDate(r.getDate() + (t - 1)), new Date(r);
                  },
                },
                {
                  key: 'convertToISOString',
                  value: function (e) {
                    return e ? new Date(e).toISOString() : '--';
                  },
                },
                {
                  key: 'convertToDateTimeString',
                  value: function (e) {
                    return e
                      ? ((e = new Date(e)),
                        this.convertToDateString(e) +
                          'T' +
                          e.getHours().toString().padStart(2, '0') +
                          ':' +
                          e.getMinutes().toString().padStart(2, '0'))
                      : '--';
                  },
                },
                {
                  key: 'convertToDateTimeHourString',
                  value: function (e) {
                    return e
                      ? ((e = new Date(e)),
                        this.convertToDateString(e) +
                          ' ' +
                          this.formatTime(
                            e.getHours().toString().padStart(2, '0') +
                              ':' +
                              e.getMinutes().toString().padStart(2, '0')
                          ))
                      : '--';
                  },
                },
                {
                  key: 'formatDate',
                  value: function (e) {
                    return e ? e.split('-').reverse().join('-') : '--';
                  },
                },
                {
                  key: 'formatTime',
                  value: function (e) {
                    if (!e) return '--';
                    var t = +(e = e.split(':'))[0],
                      r = e[1],
                      n = t >= 12 ? 'PM' : 'AM';
                    return (
                      0 === t ? (t = 12) : t > 12 && (t -= 12),
                      t.toString().padStart(2, '0') + ':' + r + ' ' + n
                    );
                  },
                },
                {
                  key: 'formatDateTime',
                  value: function (e) {
                    return e
                      ? ((e = new Date(e).toISOString().split('T')),
                        this.formatDate(e[0]) + ' ' + this.formatTime(e[1]))
                      : '--';
                  },
                },
                {
                  key: 'compareDates',
                  value: function (e, t) {
                    return this.convertToDate(e) <= this.convertToDate(t);
                  },
                },
                {
                  key: 'dateDifferenceInDays',
                  value: function (e, t) {
                    return (
                      (this.dateToMilliseconds(t) - this.dateToMilliseconds(e)) /
                      this.oneDayInMilliseconds
                    );
                  },
                },
                {
                  key: 'getUpToTime',
                  value: function (e) {
                    e = new Date(e).getTime();
                    var t = this.getDateInMilliseconds(),
                      r = Math.round((t - e) / 1e3);
                    if (r >= 0 && r < 60) return r + ' sec';
                    if (r >= 60 && r < 3600) {
                      var n = Math.round(r / 60);
                      return n + (n <= 1 ? ' min' : ' mins');
                    }
                    if (r >= 3600 && r < 86400) {
                      var o = Math.round(r / 3600);
                      return o + (o <= 1 ? ' hr' : ' hrs');
                    }
                    if (r >= 86400 && r < 604800) {
                      var i = Math.round(r / 86400);
                      return i + (i <= 1 ? ' day' : ' days');
                    }
                    if (r >= 604800 && r < 2630880) {
                      var a = Math.round(r / 604800);
                      return a + (a <= 1 ? ' week' : ' weeks');
                    }
                    if (r >= 2630880 && r < 31570560) {
                      var s = Math.round(r / 2630880);
                      return s + (s <= 1 ? ' month' : ' months');
                    }
                    if (r >= 31570560) {
                      var c = Math.round(r / 31570560);
                      return c + (c <= 1 ? ' year' : ' years');
                    }
                    return '';
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = n['\u0275\u0275defineInjectable']({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            })),
            e
          );
        })();
    },
    coMT: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return d;
      });
      var n = r('fXoL'),
        o = r('ofXK'),
        i = r('tyNb'),
        a = r('aceb'),
        s = r('pLZG'),
        c = r('1G5W'),
        l = r('XNiG'),
        d = (function () {
          var e = (function () {
            function e(t, r, n) {
              _classCallCheck(this, e),
                (this.router = t),
                (this.destroy$ = new l.a()),
                (this.isBrowser = Object(o.A)(n)),
                (this.dom = r),
                this.isBrowser && this.createCanonicalTag();
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnDestroy',
                  value: function () {
                    this.destroy$.next(), this.destroy$.complete();
                  },
                },
                {
                  key: 'createCanonicalTag',
                  value: function () {
                    (this.linkCanonical = this.dom.createElement('link')),
                      this.linkCanonical.setAttribute('rel', 'canonical'),
                      this.dom.head.appendChild(this.linkCanonical),
                      this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
                  },
                },
                {
                  key: 'trackCanonicalChanges',
                  value: function () {
                    var e = this;
                    this.isBrowser &&
                      this.router.events
                        .pipe(
                          Object(s.a)(function (e) {
                            return e instanceof i.b;
                          }),
                          Object(c.a)(this.destroy$)
                        )
                        .subscribe(function () {
                          e.linkCanonical.setAttribute('href', e.getCanonicalUrl());
                        });
                  },
                },
                {
                  key: 'getCanonicalUrl',
                  value: function () {
                    return this.dom.location.origin + this.dom.location.pathname;
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                n['\u0275\u0275inject'](i.c),
                n['\u0275\u0275inject'](a.e),
                n['\u0275\u0275inject'](n.PLATFORM_ID)
              );
            }),
            (e.ɵprov = n['\u0275\u0275defineInjectable']({ token: e, factory: e.ɵfac })),
            e
          );
        })();
    },
    crnd: function (e, t) {
      function r(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (r.keys = function () {
        return [];
      }),
        (r.resolve = r),
        (e.exports = r),
        (r.id = 'crnd');
    },
    fCOA: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return l;
      });
      var n = r('lJxs'),
        o = r('JIr8'),
        i = r('z6cu'),
        a = r('AytR'),
        s = r('fXoL'),
        c = r('tk/3'),
        l = (function () {
          var e = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.http = t);
            }
            return (
              _createClass(e, [
                {
                  key: 'httpGet',
                  value: function (e) {
                    return this.http.get(a.a.backend + e.api).pipe(
                      Object(n.a)(function (e) {
                        return e;
                      }),
                      Object(o.a)(function (e) {
                        var t = 'SOMETHING BAD HAPPENED';
                        return (
                          e.error &&
                            (t =
                              'object' == typeof e.error
                                ? "Can't Reach Server.., Please Try Again"
                                : e.error),
                          Object(i.a)(t)
                        );
                      })
                    );
                  },
                },
                {
                  key: 'httpPost',
                  value: function (e) {
                    return this.http.post(a.a.backend + e.api, e.data).pipe(
                      Object(n.a)(function (e) {
                        return e;
                      }),
                      Object(o.a)(function (e) {
                        var t = 'SOMETHING BAD HAPPENED';
                        return (
                          e.error &&
                            (t =
                              'object' == typeof e.error
                                ? "Can't Reach Server.., Please Try Again"
                                : e.error),
                          Object(i.a)(t)
                        );
                      })
                    );
                  },
                },
                {
                  key: 'httpPatch',
                  value: function (e) {
                    return this.http.patch(a.a.backend + e.api, e.data).pipe(
                      Object(n.a)(function (e) {
                        return e;
                      }),
                      Object(o.a)(function (e) {
                        var t = 'SOMETHING BAD HAPPENED';
                        return (
                          e.error &&
                            (t =
                              'object' == typeof e.error
                                ? "Can't Reach Server.., Please Try Again"
                                : e.error),
                          Object(i.a)(t)
                        );
                      })
                    );
                  },
                },
                {
                  key: 'httpPut',
                  value: function (e) {
                    return this.http.put(a.a.backend + e.api, e.data).pipe(
                      Object(n.a)(function (e) {
                        return e;
                      }),
                      Object(o.a)(function (e) {
                        var t = 'SOMETHING BAD HAPPENED';
                        return (
                          e.error &&
                            (t =
                              'object' == typeof e.error
                                ? "Can't Reach Server.., Please Try Again"
                                : e.error),
                          Object(i.a)(t)
                        );
                      })
                    );
                  },
                },
                {
                  key: 'httpDelete',
                  value: function (e) {
                    return this.http.delete(a.a.backend + e.api, e.data).pipe(
                      Object(n.a)(function (e) {
                        return e;
                      }),
                      Object(o.a)(function (e) {
                        var t = 'SOMETHING BAD HAPPENED';
                        return (
                          e.error &&
                            (t =
                              'object' == typeof e.error
                                ? "Can't Reach Server.., Please Try Again"
                                : e.error),
                          Object(i.a)(t)
                        );
                      })
                    );
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(s['\u0275\u0275inject'](c.b));
            }),
            (e.ɵprov = s['\u0275\u0275defineInjectable']({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            })),
            e
          );
        })();
    },
    mgFL: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return l;
      });
      var n = r('fXoL'),
        o = r('aceb'),
        i = r('KWzY'),
        a = r('SXPc'),
        s = [[['nb-menu']], [['router-outlet']]],
        c = ['nb-menu', 'router-outlet'],
        l = (function () {
          var e = function e() {
            _classCallCheck(this, e);
          };
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = n['\u0275\u0275defineComponent']({
              type: e,
              selectors: [['ngx-one-column-layout']],
              ngContentSelectors: c,
              decls: 9,
              vars: 0,
              consts: [
                ['windowMode', ''],
                ['fixed', ''],
                ['tag', 'menu-sidebar', 'responsive', '', 1, 'menu-sidebar'],
              ],
              template: function (e, t) {
                1 & e &&
                  (n['\u0275\u0275projectionDef'](s),
                  n['\u0275\u0275elementStart'](0, 'nb-layout', 0),
                  n['\u0275\u0275elementStart'](1, 'nb-layout-header', 1),
                  n['\u0275\u0275element'](2, 'ngx-header'),
                  n['\u0275\u0275elementEnd'](),
                  n['\u0275\u0275elementStart'](3, 'nb-sidebar', 2),
                  n['\u0275\u0275projection'](4),
                  n['\u0275\u0275elementEnd'](),
                  n['\u0275\u0275elementStart'](5, 'nb-layout-column'),
                  n['\u0275\u0275projection'](6, 1),
                  n['\u0275\u0275elementEnd'](),
                  n['\u0275\u0275elementStart'](7, 'nb-layout-footer', 1),
                  n['\u0275\u0275element'](8, 'ngx-footer'),
                  n['\u0275\u0275elementEnd'](),
                  n['\u0275\u0275elementEnd']());
              },
              directives: [o.S, o.W, i.a, o.ob, o.R, o.V, a.a],
              styles: [
                '.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable, .nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable, .nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable, .nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}',
              ],
            })),
            e
          );
        })();
    },
    nwtg: function (e, t, r) {
      'use strict';
      var n = r('JIr8'),
        o = r('vkgz'),
        i = r('2Vo4'),
        a = r('z6cu'),
        s = (function () {
          function e(t, r, n, o, i, a, s, c) {
            _classCallCheck(this, e),
              (this._id = t),
              (this.name = r),
              (this.email = n),
              (this.phone = o),
              (this.userRole = i),
              (this.imsMasterId = a),
              (this._token = s),
              (this._tokenExpirationDate = c);
          }
          return (
            _createClass(e, [
              {
                key: 'token',
                get: function () {
                  return !this._tokenExpirationDate || new Date() > this._tokenExpirationDate
                    ? null
                    : this._token;
                },
              },
            ]),
            e
          );
        })(),
        c = r('AytR'),
        l = r('fXoL'),
        d = r('tk/3'),
        u = r('tyNb');
      r.d(t, 'a', function () {
        return g;
      });
      var h,
        g =
          (((h = (function () {
            function e(t, r, n) {
              _classCallCheck(this, e),
                (this.http = t),
                (this.router = r),
                (this.route = n),
                (this.user = new i.a(null));
            }
            return (
              _createClass(e, [
                {
                  key: 'getUser',
                  value: function () {
                    return this.user;
                  },
                },
                {
                  key: 'getUserData',
                  value: function () {
                    return JSON.parse(localStorage.getItem('userData'));
                  },
                },
                {
                  key: 'getUserToken',
                  value: function () {
                    return JSON.parse(localStorage.getItem('userData'))._token;
                  },
                },
                {
                  key: 'createUser',
                  value: function (e) {
                    var t = this;
                    return this.http.post(c.a.backend + 'newUser', e).pipe(
                      Object(n.a)(this.handleError),
                      Object(o.a)(function (e) {
                        t.handleAuthentication(
                          e._id,
                          e.name,
                          e.email,
                          e.phone,
                          e.userRole,
                          e.imsMasterId,
                          e.token,
                          +e.expiresIn
                        );
                      })
                    );
                  },
                },
                {
                  key: 'login',
                  value: function (e, t) {
                    var r = this;
                    return this.http.post(c.a.backend + 'login', { email: e, password: t }).pipe(
                      Object(n.a)(this.handleError),
                      Object(o.a)(function (e) {
                        r.handleAuthentication(
                          e._id,
                          e.name,
                          e.email,
                          e.phone,
                          e.userRole,
                          e.imsMasterId,
                          e.token,
                          e.expiresIn
                        );
                      })
                    );
                  },
                },
                {
                  key: 'loadUser',
                  value: function (e) {
                    var t = new s(
                      e._id,
                      e.name,
                      e.email,
                      e.phone,
                      e.userRole,
                      e.imsMasterId,
                      e._token,
                      new Date(e._tokenExpirationDate)
                    );
                    if (t.token) {
                      this.user.next(t);
                      var r = new Date(e._tokenExpirationDate).getTime() - new Date().getTime();
                      return (
                        this.autoLogout(r),
                        void this.router.navigate(
                          'admin' === t.userRole
                            ? ['/admin']
                            : 'institute' === t.userRole
                            ? ['/institute']
                            : 'employee' === t.userRole
                            ? ['/employee']
                            : 'student' === t.userRole
                            ? ['/student']
                            : ['/'],
                          { relativeTo: this.route }
                        )
                      );
                    }
                  },
                },
                {
                  key: 'autoLogin',
                  value: function (e) {
                    var t = this;
                    this.loadUser(e),
                      this.http.post(c.a.backend + 'autoLogin', {}).subscribe(
                        function (e) {},
                        function (e) {
                          t.removeUser(), t.router.navigate(['/login'], { relativeTo: t.route });
                        }
                      );
                  },
                },
                {
                  key: 'logout',
                  value: function () {
                    var e = this;
                    return this.http.post(c.a.backend + 'logout', {}).subscribe(
                      function (t) {
                        e.user.next(null),
                          e.router.navigate(['/login']),
                          localStorage.removeItem('userData'),
                          e.tokenExpirationTimer && clearTimeout(e.tokenExpirationTimer),
                          (e.tokenExpirationTimer = null);
                      },
                      function (e) {}
                    );
                  },
                },
                {
                  key: 'removeUser',
                  value: function () {
                    localStorage.getItem('userData') && localStorage.removeItem('userData'),
                      this.user.next(null);
                  },
                },
                {
                  key: 'logoutAll',
                  value: function () {
                    var e = this;
                    return this.http.post(c.a.backend + 'logoutAll', {}).subscribe(
                      function (t) {
                        e.user.next(null),
                          e.router.navigate(['/login']),
                          localStorage.removeItem('userData'),
                          e.tokenExpirationTimer && clearTimeout(e.tokenExpirationTimer),
                          (e.tokenExpirationTimer = null);
                      },
                      function (e) {}
                    );
                  },
                },
                {
                  key: 'autoLogout',
                  value: function (e) {
                    var t = this;
                    this.tokenExpirationTimer = setTimeout(function () {
                      t.logout();
                    }, e);
                  },
                },
                {
                  key: 'handleAuthentication',
                  value: function (e, t, r, n, o, i, a, c) {
                    var l = new Date(new Date().getTime() + 1e3 * c),
                      d = new s(e, t, r, n, o, i, a, l);
                    this.user.next(d),
                      this.autoLogout(1e3 * c),
                      localStorage.setItem('userData', JSON.stringify(d));
                  },
                },
                {
                  key: 'handleError',
                  value: function (e) {
                    var t = 'An unknown error occurred!';
                    return (
                      e.error &&
                        (t =
                          'object' == typeof e.error
                            ? 'Cant Reach Server.., Please Try Again'
                            : e.error),
                      Object(a.a)(t)
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || h)(
              l['\u0275\u0275inject'](d.b),
              l['\u0275\u0275inject'](u.c),
              l['\u0275\u0275inject'](u.a)
            );
          }),
          (h.ɵprov = l['\u0275\u0275defineInjectable']({
            token: h,
            factory: h.ɵfac,
            providedIn: 'root',
          })),
          h);
    },
    vC38: function (e, t, r) {
      'use strict';
      var n,
        o,
        i = r('XNiG'),
        a = r('UXun'),
        s = r('3E0/'),
        c = r('Kj3r'),
        l = r('fXoL'),
        d =
          (((n = (function () {
            function e() {
              _classCallCheck(this, e),
                (this.layoutSize$ = new i.a()),
                (this.layoutSizeChange$ = this.layoutSize$.pipe(Object(a.a)({ refCount: !0 })));
            }
            return (
              _createClass(e, [
                {
                  key: 'changeLayoutSize',
                  value: function () {
                    this.layoutSize$.next();
                  },
                },
                {
                  key: 'onChangeLayoutSize',
                  value: function () {
                    return this.layoutSizeChange$.pipe(Object(s.a)(1));
                  },
                },
                {
                  key: 'onSafeChangeLayoutSize',
                  value: function () {
                    return this.layoutSizeChange$.pipe(Object(c.a)(350));
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || n)();
          }),
          (n.ɵprov = l['\u0275\u0275defineInjectable']({ token: n, factory: n.ɵfac })),
          n),
        u = r('BoUZ'),
        h = r('2Vo4'),
        g = r('LRne'),
        p = r('GJmQ'),
        f = r('aceb'),
        b =
          (((o = (function () {
            function e(t) {
              var r = this;
              _classCallCheck(this, e),
                (this.layouts = [
                  { name: 'One Column', icon: 'nb-layout-default', id: 'one-column', selected: !0 },
                  { name: 'Two Column', icon: 'nb-layout-two-column', id: 'two-column' },
                  { name: 'Center Column', icon: 'nb-layout-centre', id: 'center-column' },
                ]),
                (this.sidebars = [
                  {
                    name: 'Sidebar at layout start',
                    icon: 'nb-layout-sidebar-left',
                    id: 'start',
                    selected: !0,
                  },
                  { name: 'Sidebar at layout end', icon: 'nb-layout-sidebar-right', id: 'end' },
                ]),
                (this.layoutState$ = new h.a(this.layouts[0])),
                (this.sidebarState$ = new h.a(this.sidebars[0])),
                (this.alive = !0),
                t
                  .onDirectionChange()
                  .pipe(
                    Object(p.a)(function () {
                      return r.alive;
                    })
                  )
                  .subscribe(function (e) {
                    return r.updateSidebarIcons(e);
                  }),
                this.updateSidebarIcons(t.getDirection());
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnDestroy',
                  value: function () {
                    this.alive = !1;
                  },
                },
                {
                  key: 'updateSidebarIcons',
                  value: function (e) {
                    var t = _slicedToArray(this.sidebars, 2),
                      r = t[0],
                      n = t[1],
                      o = e === f.T.LTR,
                      i = o ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
                    (r.icon = o ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right'),
                      (n.icon = i);
                  },
                },
                {
                  key: 'setLayoutState',
                  value: function (e) {
                    this.layoutState$.next(e);
                  },
                },
                {
                  key: 'getLayoutStates',
                  value: function () {
                    return Object(g.a)(this.layouts);
                  },
                },
                {
                  key: 'onLayoutState',
                  value: function () {
                    return this.layoutState$.asObservable();
                  },
                },
                {
                  key: 'setSidebarState',
                  value: function (e) {
                    this.sidebarState$.next(e);
                  },
                },
                {
                  key: 'getSidebarStates',
                  value: function () {
                    return Object(g.a)(this.sidebars);
                  },
                },
                {
                  key: 'onSidebarState',
                  value: function () {
                    return this.sidebarState$.asObservable();
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || o)(l['\u0275\u0275inject'](f.U));
          }),
          (o.ɵprov = l['\u0275\u0275defineInjectable']({ token: o, factory: o.ɵfac })),
          o),
        m = r('coMT');
      r.d(t, 'b', function () {
        return d;
      }),
        r.d(t, 'a', function () {
          return u.a;
        }),
        r.d(t, 'c', function () {
          return m.a;
        }),
        r.d(t, 'd', function () {
          return b;
        });
    },
    vTDv: function (e, t, r) {
      'use strict';
      var n = r('ofXK'),
        o = r('aceb'),
        i = r('tR1z'),
        a = r('lWTH'),
        s = (r('KWzY'), r('SXPc'), r('fXoL'));
      r('mgFL');
      var c = o.d.variables,
        l = {
          name: 'default',
          base: 'default',
          variables: {
            temperature: {
              arcFill: [c.primary, c.primary, c.primary, c.primary, c.primary],
              arcEmpty: c.bg2,
              thumbBg: c.bg2,
              thumbBorder: c.primary,
            },
            solar: {
              gradientLeft: c.primary,
              gradientRight: c.primary,
              shadowColor: 'rgba(0, 0, 0, 0)',
              secondSeriesFill: c.bg2,
              radius: ['80%', '90%'],
            },
            traffic: {
              tooltipBg: c.bg,
              tooltipBorderColor: c.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: c.fgText,
              tooltipFontWeight: 'normal',
              yAxisSplitLine: c.separator,
              lineBg: c.border4,
              lineShadowBlur: '1',
              itemColor: c.border4,
              itemBorderColor: c.border4,
              itemEmphasisBorderColor: c.primary,
              shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              shadowLineShadow: 'rgba(0, 0, 0, 0)',
              gradFrom: c.bg2,
              gradTo: c.bg2,
            },
            electricity: {
              tooltipBg: c.bg,
              tooltipLineColor: c.fgText,
              tooltipLineWidth: '0',
              tooltipBorderColor: c.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: c.fgText,
              tooltipFontWeight: 'normal',
              axisLineColor: c.border3,
              xAxisTextColor: c.fg,
              yAxisSplitLine: c.separator,
              itemBorderColor: c.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              lineGradFrom: c.primary,
              lineGradTo: c.primary,
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: c.bg2,
              areaGradTo: c.bg2,
              shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
              titleColor: c.fgText,
              areaColor: c.bg4,
              areaHoverColor: c.fgHighlight,
              areaBorderColor: c.border5,
            },
            profitBarAnimationEchart: {
              textColor: c.fgText,
              firstAnimationBarColor: c.primary,
              secondAnimationBarColor: c.success,
              splitLineStyleOpacity: '1',
              splitLineStyleWidth: '1',
              splitLineStyleColor: c.separator,
              tooltipTextColor: c.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: c.bg,
              tooltipBorderColor: c.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
              gradientFrom: c.warningLight,
              gradientTo: c.warning,
              shadow: c.warningLight,
              shadowBlur: '0',
              axisTextColor: c.fgText,
              axisFontSize: '12',
              tooltipBg: c.bg,
              tooltipBorderColor: c.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: c.fgText,
              tooltipFontWeight: 'normal',
            },
            countryOrders: {
              countryBorderColor: c.border4,
              countryFillColor: c.bg3,
              countryBorderWidth: '1',
              hoveredCountryBorderColor: c.primary,
              hoveredCountryFillColor: c.primaryLight,
              hoveredCountryBorderWidth: '1',
              chartAxisLineColor: c.border4,
              chartAxisTextColor: c.fg,
              chartAxisFontSize: '16',
              chartGradientTo: c.primary,
              chartGradientFrom: c.primaryLight,
              chartAxisSplitLine: c.separator,
              chartShadowLineColor: c.primaryLight,
              chartLineBottomShadowColor: c.primary,
              chartInnerLineColor: c.bg2,
            },
            echarts: {
              bg: c.bg,
              textColor: c.fgText,
              axisLineColor: c.fgText,
              splitLineColor: c.separator,
              itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
              tooltipBackgroundColor: c.primary,
              areaOpacity: '0.7',
            },
            chartjs: { axisLineColor: c.separator, textColor: c.fgText },
            orders: {
              tooltipBg: c.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '0',
              tooltipBorderColor: c.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: c.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: c.border4,
              axisFontSize: '16',
              axisTextColor: c.fg,
              yAxisSplitLine: c.separator,
              itemBorderColor: c.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              firstAreaGradFrom: c.bg3,
              firstAreaGradTo: c.bg3,
              firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: c.primary,
              secondLineGradTo: c.primary,
              secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
              secondAreaGradTo: 'rgba(51, 102, 255, 0)',
              secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: c.success,
              thirdLineGradTo: c.successLight,
              thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
              thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
              thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
              bg: c.bg,
              textColor: c.fgText,
              axisLineColor: c.border4,
              splitLineColor: c.separator,
              areaOpacity: '1',
              axisFontSize: '16',
              axisTextColor: c.fg,
              firstLineGradFrom: c.bg3,
              firstLineGradTo: c.bg3,
              firstLineShadow: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: c.primary,
              secondLineGradTo: c.primary,
              secondLineShadow: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: c.success,
              thirdLineGradTo: c.successLight,
              thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: { firstItem: c.success, secondItem: c.primary, thirdItem: c.bg3 },
            visitors: {
              tooltipBg: c.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '1',
              tooltipBorderColor: c.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: c.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: c.border4,
              axisFontSize: '16',
              axisTextColor: c.fg,
              yAxisSplitLine: c.separator,
              itemBorderColor: c.primary,
              lineStyle: 'dotted',
              lineWidth: '6',
              lineGradFrom: '#ffffff',
              lineGradTo: '#ffffff',
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: c.primary,
              areaGradTo: c.primaryLight,
              innerLineStyle: 'solid',
              innerLineWidth: '1',
              innerAreaGradFrom: c.success,
              innerAreaGradTo: c.success,
            },
            visitorsLegend: { firstIcon: c.success, secondIcon: c.primary },
            visitorsPie: {
              firstPieGradientLeft: c.success,
              firstPieGradientRight: c.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              firstPieRadius: ['70%', '90%'],
              secondPieGradientLeft: c.warning,
              secondPieGradientRight: c.warningLight,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieRadius: ['60%', '97%'],
              shadowOffsetX: '0',
              shadowOffsetY: '0',
            },
            visitorsPieLegend: { firstSection: c.warning, secondSection: c.success },
            earningPie: {
              radius: ['65%', '100%'],
              center: ['50%', '50%'],
              fontSize: '22',
              firstPieGradientLeft: c.success,
              firstPieGradientRight: c.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieGradientLeft: c.primary,
              secondPieGradientRight: c.primary,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              thirdPieGradientLeft: c.warning,
              thirdPieGradientRight: c.warning,
              thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
              gradFrom: c.primary,
              gradTo: c.primary,
              tooltipTextColor: c.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: c.bg,
              tooltipBorderColor: c.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
          },
        },
        d = o.b.variables,
        u = {
          name: 'cosmic',
          base: 'cosmic',
          variables: {
            temperature: {
              arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
              arcEmpty: d.bg2,
              thumbBg: '#ffffff',
              thumbBorder: '#ffffff',
            },
            solar: {
              gradientLeft: d.primary,
              gradientRight: d.primary,
              shadowColor: 'rgba(0, 0, 0, 0)',
              secondSeriesFill: d.bg2,
              radius: ['70%', '90%'],
            },
            traffic: {
              tooltipBg: d.bg,
              tooltipBorderColor: d.border2,
              tooltipExtraCss:
                'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: d.fgText,
              tooltipFontWeight: 'normal',
              yAxisSplitLine: d.separator,
              lineBg: d.border2,
              lineShadowBlur: '14',
              itemColor: d.border2,
              itemBorderColor: d.border2,
              itemEmphasisBorderColor: d.primary,
              shadowLineDarkBg: d.border3,
              shadowLineShadow: d.border3,
              gradFrom: d.bg,
              gradTo: d.bg2,
            },
            electricity: {
              tooltipBg: d.bg,
              tooltipLineColor: d.fgText,
              tooltipLineWidth: '0',
              tooltipBorderColor: d.border2,
              tooltipExtraCss:
                'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: d.fgText,
              tooltipFontWeight: 'normal',
              axisLineColor: d.border3,
              xAxisTextColor: d.fg,
              yAxisSplitLine: d.separator,
              itemBorderColor: d.border2,
              lineStyle: 'dotted',
              lineWidth: '6',
              lineGradFrom: d.success,
              lineGradTo: d.warning,
              lineShadow: d.bg4,
              areaGradFrom: d.bg2,
              areaGradTo: d.bg3,
              shadowLineDarkBg: d.bg3,
            },
            bubbleMap: {
              titleColor: d.fgText,
              areaColor: d.bg4,
              areaHoverColor: d.fgHighlight,
              areaBorderColor: d.border5,
            },
            profitBarAnimationEchart: {
              textColor: d.fgText,
              firstAnimationBarColor: d.primary,
              secondAnimationBarColor: d.success,
              splitLineStyleOpacity: '1',
              splitLineStyleWidth: '1',
              splitLineStyleColor: d.border2,
              tooltipTextColor: d.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: d.bg,
              tooltipBorderColor: d.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
              gradientFrom: d.warningLight,
              gradientTo: d.warning,
              shadow: d.warningLight,
              shadowBlur: '5',
              axisTextColor: d.fgText,
              axisFontSize: '12',
              tooltipBg: d.bg,
              tooltipBorderColor: d.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: d.fgText,
              tooltipFontWeight: 'normal',
            },
            countryOrders: {
              countryBorderColor: d.border4,
              countryFillColor: d.bg3,
              countryBorderWidth: '1',
              hoveredCountryBorderColor: d.primary,
              hoveredCountryFillColor: d.primaryLight,
              hoveredCountryBorderWidth: '1',
              chartAxisLineColor: d.border4,
              chartAxisTextColor: d.fg,
              chartAxisFontSize: '16',
              chartGradientTo: d.primary,
              chartGradientFrom: d.primaryLight,
              chartAxisSplitLine: d.separator,
              chartShadowLineColor: d.primaryLight,
              chartLineBottomShadowColor: d.primary,
              chartInnerLineColor: d.bg2,
            },
            echarts: {
              bg: d.bg,
              textColor: d.fgText,
              axisLineColor: d.fgText,
              splitLineColor: d.separator,
              itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
              tooltipBackgroundColor: d.primary,
              areaOpacity: '1',
            },
            chartjs: { axisLineColor: d.separator, textColor: d.fgText },
            orders: {
              tooltipBg: d.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '0',
              tooltipBorderColor: d.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: d.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: d.border4,
              axisFontSize: '16',
              axisTextColor: d.fg,
              yAxisSplitLine: d.separator,
              itemBorderColor: d.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              firstAreaGradFrom: d.bg2,
              firstAreaGradTo: d.bg2,
              firstShadowLineDarkBg: d.bg2,
              secondLineGradFrom: d.primary,
              secondLineGradTo: d.primary,
              secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
              secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
              secondShadowLineDarkBg: d.primary,
              thirdLineGradFrom: d.success,
              thirdLineGradTo: d.successLight,
              thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
              thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
              thirdShadowLineDarkBg: d.success,
            },
            profit: {
              bg: d.bg,
              textColor: d.fgText,
              axisLineColor: d.border4,
              splitLineColor: d.separator,
              areaOpacity: '1',
              axisFontSize: '16',
              axisTextColor: d.fg,
              firstLineGradFrom: d.bg2,
              firstLineGradTo: d.bg2,
              firstLineShadow: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: d.primary,
              secondLineGradTo: d.primary,
              secondLineShadow: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: d.success,
              thirdLineGradTo: d.successLight,
              thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: { firstItem: d.success, secondItem: d.primary, thirdItem: d.bg2 },
            visitors: {
              tooltipBg: d.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '1',
              tooltipBorderColor: d.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: d.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: d.border4,
              axisFontSize: '16',
              axisTextColor: d.fg,
              yAxisSplitLine: d.separator,
              itemBorderColor: d.primary,
              lineStyle: 'dotted',
              lineWidth: '6',
              lineGradFrom: '#ffffff',
              lineGradTo: '#ffffff',
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: d.primary,
              areaGradTo: d.primaryLight,
              innerLineStyle: 'solid',
              innerLineWidth: '1',
              innerAreaGradFrom: d.success,
              innerAreaGradTo: d.success,
            },
            visitorsLegend: { firstIcon: d.success, secondIcon: d.primary },
            visitorsPie: {
              firstPieGradientLeft: d.success,
              firstPieGradientRight: d.successLight,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              firstPieRadius: ['70%', '90%'],
              secondPieGradientLeft: d.warning,
              secondPieGradientRight: d.warningLight,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieRadius: ['60%', '95%'],
              shadowOffsetX: '0',
              shadowOffsetY: '3',
            },
            visitorsPieLegend: { firstSection: d.warning, secondSection: d.success },
            earningPie: {
              radius: ['65%', '100%'],
              center: ['50%', '50%'],
              fontSize: '22',
              firstPieGradientLeft: d.success,
              firstPieGradientRight: d.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieGradientLeft: d.primary,
              secondPieGradientRight: d.primary,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              thirdPieGradientLeft: d.warning,
              thirdPieGradientRight: d.warning,
              thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
              gradFrom: d.primary,
              gradTo: d.primary,
              tooltipTextColor: d.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: d.bg,
              tooltipBorderColor: d.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
          },
        },
        h = o.a.variables,
        g = {
          name: 'corporate',
          base: 'corporate',
          variables: {
            temperature: {
              arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
              arcEmpty: h.bg2,
              thumbBg: h.bg2,
              thumbBorder: '#ffa36b',
            },
            solar: {
              gradientLeft: h.primary,
              gradientRight: h.primary,
              shadowColor: 'rgba(0, 0, 0, 0)',
              secondSeriesFill: h.bg2,
              radius: ['80%', '90%'],
            },
            traffic: {
              tooltipBg: h.bg,
              tooltipBorderColor: h.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: h.fgText,
              tooltipFontWeight: 'normal',
              yAxisSplitLine: 'rgba(0, 0, 0, 0)',
              lineBg: h.primary,
              lineShadowBlur: '0',
              itemColor: h.border4,
              itemBorderColor: h.border4,
              itemEmphasisBorderColor: h.primaryLight,
              shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              shadowLineShadow: 'rgba(0, 0, 0, 0)',
              gradFrom: h.bg,
              gradTo: h.bg,
            },
            electricity: {
              tooltipBg: h.bg,
              tooltipLineColor: h.fgText,
              tooltipLineWidth: '0',
              tooltipBorderColor: h.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: h.fgText,
              tooltipFontWeight: 'normal',
              axisLineColor: h.border3,
              xAxisTextColor: h.fg,
              yAxisSplitLine: h.separator,
              itemBorderColor: h.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              lineGradFrom: h.primary,
              lineGradTo: h.primary,
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: 'rgba(0, 0, 0, 0)',
              areaGradTo: 'rgba(0, 0, 0, 0)',
              shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
              titleColor: h.fgText,
              areaColor: h.bg4,
              areaHoverColor: h.fgHighlight,
              areaBorderColor: h.border5,
            },
            profitBarAnimationEchart: {
              textColor: h.fgText,
              firstAnimationBarColor: h.primary,
              secondAnimationBarColor: h.success,
              splitLineStyleOpacity: '1',
              splitLineStyleWidth: '1',
              splitLineStyleColor: h.separator,
              tooltipTextColor: h.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: h.bg,
              tooltipBorderColor: h.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
              gradientFrom: h.warningLight,
              gradientTo: h.warning,
              shadow: h.warningLight,
              shadowBlur: '0',
              axisTextColor: h.fgText,
              axisFontSize: '12',
              tooltipBg: h.bg,
              tooltipBorderColor: h.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: h.fgText,
              tooltipFontWeight: 'normal',
            },
            countryOrders: {
              countryBorderColor: h.border4,
              countryFillColor: h.bg4,
              countryBorderWidth: '1',
              hoveredCountryBorderColor: h.primary,
              hoveredCountryFillColor: h.primaryLight,
              hoveredCountryBorderWidth: '1',
              chartAxisLineColor: h.border4,
              chartAxisTextColor: h.fg,
              chartAxisFontSize: '16',
              chartGradientTo: h.primary,
              chartGradientFrom: h.primaryLight,
              chartAxisSplitLine: h.separator,
              chartShadowLineColor: h.primaryLight,
              chartLineBottomShadowColor: h.primary,
              chartInnerLineColor: h.bg2,
            },
            echarts: {
              bg: h.bg,
              textColor: h.fgText,
              axisLineColor: h.fgText,
              splitLineColor: h.separator,
              itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
              tooltipBackgroundColor: h.primary,
              areaOpacity: '0.7',
            },
            chartjs: { axisLineColor: h.separator, textColor: h.fgText },
            orders: {
              tooltipBg: h.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '0',
              tooltipBorderColor: h.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: h.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: h.border4,
              axisFontSize: '16',
              axisTextColor: h.fg,
              yAxisSplitLine: h.separator,
              itemBorderColor: h.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              firstAreaGradFrom: h.bg3,
              firstAreaGradTo: h.bg3,
              firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: h.primary,
              secondLineGradTo: h.primary,
              secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
              secondAreaGradTo: 'rgba(0, 0, 0, 0)',
              secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: h.success,
              thirdLineGradTo: h.successLight,
              thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
              thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
              thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
              bg: h.bg,
              textColor: h.fgText,
              axisLineColor: h.border4,
              splitLineColor: h.separator,
              areaOpacity: '1',
              axisFontSize: '16',
              axisTextColor: h.fg,
              firstLineGradFrom: h.bg3,
              firstLineGradTo: h.bg3,
              firstLineShadow: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: h.primary,
              secondLineGradTo: h.primary,
              secondLineShadow: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: h.success,
              thirdLineGradTo: h.success,
              thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: { firstItem: h.success, secondItem: h.primary, thirdItem: h.bg3 },
            visitors: {
              tooltipBg: h.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '1',
              tooltipBorderColor: h.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: h.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: h.border4,
              axisFontSize: '16',
              axisTextColor: h.fg,
              yAxisSplitLine: h.separator,
              itemBorderColor: h.primary,
              lineStyle: 'dotted',
              lineWidth: '6',
              lineGradFrom: '#ffffff',
              lineGradTo: '#ffffff',
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: h.primary,
              areaGradTo: h.primaryLight,
              innerLineStyle: 'solid',
              innerLineWidth: '1',
              innerAreaGradFrom: h.success,
              innerAreaGradTo: h.success,
            },
            visitorsLegend: { firstIcon: h.success, secondIcon: h.primary },
            visitorsPie: {
              firstPieGradientLeft: h.success,
              firstPieGradientRight: h.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              firstPieRadius: ['65%', '90%'],
              secondPieGradientLeft: h.warning,
              secondPieGradientRight: h.warningLight,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieRadius: ['63%', '92%'],
              shadowOffsetX: '-4',
              shadowOffsetY: '-4',
            },
            visitorsPieLegend: { firstSection: h.warning, secondSection: h.success },
            earningPie: {
              radius: ['65%', '100%'],
              center: ['50%', '50%'],
              fontSize: '22',
              firstPieGradientLeft: h.success,
              firstPieGradientRight: h.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieGradientLeft: h.primary,
              secondPieGradientRight: h.primary,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              thirdPieGradientLeft: h.warning,
              thirdPieGradientRight: h.warning,
              thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
              gradFrom: h.primary,
              gradTo: h.primary,
              tooltipTextColor: h.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: h.bg,
              tooltipBorderColor: h.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
          },
        },
        p = o.c.variables,
        f = {
          name: 'dark',
          base: 'dark',
          variables: {
            temperature: {
              arcFill: [p.primary, p.primary, p.primary, p.primary, p.primary],
              arcEmpty: p.bg2,
              thumbBg: p.bg2,
              thumbBorder: p.primary,
            },
            solar: {
              gradientLeft: p.primary,
              gradientRight: p.primary,
              shadowColor: 'rgba(0, 0, 0, 0)',
              secondSeriesFill: p.bg2,
              radius: ['80%', '90%'],
            },
            traffic: {
              tooltipBg: p.bg,
              tooltipBorderColor: p.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: p.fgText,
              tooltipFontWeight: 'normal',
              yAxisSplitLine: p.separator,
              lineBg: p.border4,
              lineShadowBlur: '1',
              itemColor: p.border4,
              itemBorderColor: p.border4,
              itemEmphasisBorderColor: p.primary,
              shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              shadowLineShadow: 'rgba(0, 0, 0, 0)',
              gradFrom: p.bg2,
              gradTo: p.bg2,
            },
            electricity: {
              tooltipBg: p.bg,
              tooltipLineColor: p.fgText,
              tooltipLineWidth: '0',
              tooltipBorderColor: p.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: p.fgText,
              tooltipFontWeight: 'normal',
              axisLineColor: p.border3,
              xAxisTextColor: p.fg,
              yAxisSplitLine: p.separator,
              itemBorderColor: p.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              lineGradFrom: p.primary,
              lineGradTo: p.primary,
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: p.bg2,
              areaGradTo: p.bg2,
              shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
              titleColor: p.fgText,
              areaColor: p.bg4,
              areaHoverColor: p.fgHighlight,
              areaBorderColor: p.border5,
            },
            profitBarAnimationEchart: {
              textColor: p.fgText,
              firstAnimationBarColor: p.primary,
              secondAnimationBarColor: p.success,
              splitLineStyleOpacity: '1',
              splitLineStyleWidth: '1',
              splitLineStyleColor: p.separator,
              tooltipTextColor: p.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: p.bg,
              tooltipBorderColor: p.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
              gradientFrom: p.warningLight,
              gradientTo: p.warning,
              shadow: p.warningLight,
              shadowBlur: '0',
              axisTextColor: p.fgText,
              axisFontSize: '12',
              tooltipBg: p.bg,
              tooltipBorderColor: p.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: p.fgText,
              tooltipFontWeight: 'normal',
            },
            countryOrders: {
              countryBorderColor: p.border4,
              countryFillColor: p.bg3,
              countryBorderWidth: '1',
              hoveredCountryBorderColor: p.primary,
              hoveredCountryFillColor: p.primaryLight,
              hoveredCountryBorderWidth: '1',
              chartAxisLineColor: p.border4,
              chartAxisTextColor: p.fg,
              chartAxisFontSize: '16',
              chartGradientTo: p.primary,
              chartGradientFrom: p.primaryLight,
              chartAxisSplitLine: p.separator,
              chartShadowLineColor: p.primaryLight,
              chartLineBottomShadowColor: p.primary,
              chartInnerLineColor: p.bg2,
            },
            echarts: {
              bg: p.bg,
              textColor: p.fgText,
              axisLineColor: p.fgText,
              splitLineColor: p.separator,
              itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
              tooltipBackgroundColor: p.primary,
              areaOpacity: '0.7',
            },
            chartjs: { axisLineColor: p.separator, textColor: p.fgText },
            orders: {
              tooltipBg: p.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '0',
              tooltipBorderColor: p.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: p.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: p.border4,
              axisFontSize: '16',
              axisTextColor: p.fg,
              yAxisSplitLine: p.separator,
              itemBorderColor: p.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              firstAreaGradFrom: p.bg3,
              firstAreaGradTo: p.bg3,
              firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: p.primary,
              secondLineGradTo: p.primary,
              secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
              secondAreaGradTo: 'rgba(51, 102, 255, 0)',
              secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: p.success,
              thirdLineGradTo: p.successLight,
              thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
              thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
              thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
              bg: p.bg,
              textColor: p.fgText,
              axisLineColor: p.border4,
              splitLineColor: p.separator,
              areaOpacity: '1',
              axisFontSize: '16',
              axisTextColor: p.fg,
              firstLineGradFrom: p.bg3,
              firstLineGradTo: p.bg3,
              firstLineShadow: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: p.primary,
              secondLineGradTo: p.primary,
              secondLineShadow: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: p.success,
              thirdLineGradTo: p.successLight,
              thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: { firstItem: p.success, secondItem: p.primary, thirdItem: p.bg3 },
            visitors: {
              tooltipBg: p.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '0',
              tooltipBorderColor: p.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: p.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: p.border4,
              axisFontSize: '16',
              axisTextColor: p.fg,
              yAxisSplitLine: p.separator,
              itemBorderColor: p.primary,
              lineStyle: 'dotted',
              lineWidth: '6',
              lineGradFrom: '#ffffff',
              lineGradTo: '#ffffff',
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: p.primary,
              areaGradTo: p.primaryLight,
              innerLineStyle: 'solid',
              innerLineWidth: '1',
              innerAreaGradFrom: p.success,
              innerAreaGradTo: p.success,
            },
            visitorsLegend: { firstIcon: p.success, secondIcon: p.primary },
            visitorsPie: {
              firstPieGradientLeft: p.success,
              firstPieGradientRight: p.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              firstPieRadius: ['70%', '90%'],
              secondPieGradientLeft: p.warning,
              secondPieGradientRight: p.warningLight,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieRadius: ['60%', '97%'],
              shadowOffsetX: '0',
              shadowOffsetY: '0',
            },
            visitorsPieLegend: { firstSection: p.warning, secondSection: p.success },
            earningPie: {
              radius: ['65%', '100%'],
              center: ['50%', '50%'],
              fontSize: '22',
              firstPieGradientLeft: p.success,
              firstPieGradientRight: p.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieGradientLeft: p.primary,
              secondPieGradientRight: p.primary,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              thirdPieGradientLeft: p.warning,
              thirdPieGradientRight: p.warning,
              thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
              gradFrom: p.primary,
              gradTo: p.primary,
              tooltipTextColor: p.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: p.bg,
              tooltipBorderColor: p.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
          },
        };
      r.d(t, 'a', function () {
        return C;
      });
      var b,
        m = [
          o.X,
          o.db,
          o.Ib,
          o.n,
          o.lb,
          o.pb,
          o.F,
          a.c,
          o.v,
          o.nb,
          o.O,
          i.a,
          o.ab,
          o.hb,
          o.A,
          o.Gb,
        ],
        C =
          (((b = (function () {
            function e() {
              _classCallCheck(this, e);
            }
            return (
              _createClass(e, null, [
                {
                  key: 'forRoot',
                  value: function () {
                    return {
                      ngModule: e,
                      providers: _toConsumableArray(
                        o.Ab.forRoot({ name: 'default' }, [l, u, g, f]).providers
                      ),
                    };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = s['\u0275\u0275defineNgModule']({ type: b })),
          (b.ɵinj = s['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || b)();
            },
            imports: [[n.c].concat(m), n.c],
          })),
          b);
    },
    zUnb: function (e, t, r) {
      'use strict';
      r.r(t);
      var n,
        o,
        i,
        a,
        s,
        c,
        l,
        d,
        u,
        h = r('fXoL'),
        g = r('AytR'),
        p = r('tR1z'),
        f = r('jhN1'),
        b = r('R1ws'),
        m = r('tk/3'),
        C = r('ofXK'),
        y = r('McNs'),
        v = r('lWTH'),
        x = r('LRne'),
        S = r('vC38'),
        O = r('IzEk'),
        P = r('XqQ8'),
        k = r('nwtg'),
        w =
          (((n = (function () {
            function e(t) {
              _classCallCheck(this, e), (this.authService = t);
            }
            return (
              _createClass(e, [
                {
                  key: 'intercept',
                  value: function (e, t) {
                    var r = this;
                    return this.authService.getUser().pipe(
                      Object(O.a)(1),
                      Object(P.a)(function (n) {
                        if (!n) return t.handle(e);
                        var o = 'Bearer ' + r.authService.getUserToken(),
                          i = e.clone({ headers: e.headers.append('Authorization', o) });
                        return t.handle(i);
                      })
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || n)(h['\u0275\u0275inject'](k.a));
          }),
          (n.ɵprov = h['\u0275\u0275defineInjectable']({ token: n, factory: n.ɵfac })),
          n),
        L = [
          v.c.forRoot({
            accessControl: {
              guest: { view: '*' },
              user: { parent: 'guest', create: '*', edit: '*', remove: '*' },
            },
          }).providers,
          {
            provide: v.b,
            useClass: (function (e) {
              _inherits(r, e);
              var t = _createSuper(r);
              function r() {
                return _classCallCheck(this, r), t.apply(this, arguments);
              }
              return (
                _createClass(r, [
                  {
                    key: 'getRole',
                    value: function () {
                      return Object(x.a)('guest');
                    },
                  },
                ]),
                r
              );
            })(v.b),
          },
          S.a,
          S.b,
          S.c,
          S.d,
        ],
        T =
          (((o = (function () {
            function e(t) {
              _classCallCheck(this, e),
                (function (e, t) {
                  if (e)
                    throw new Error(
                      'CoreModule has already been loaded. Import Core modules in the AppModule only.'
                    );
                })(t);
            }
            return (
              _createClass(e, null, [
                {
                  key: 'forRoot',
                  value: function () {
                    return { ngModule: e, providers: [].concat(L) };
                  },
                },
              ]),
              e
            );
          })()).ɵmod = h['\u0275\u0275defineNgModule']({ type: o })),
          (o.ɵinj = h['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || o)(h['\u0275\u0275inject'](o, 12));
            },
            providers: [{ provide: m.a, useClass: w, multi: !0 }],
            imports: [[C.c], y.a],
          })),
          o),
        _ = r('vTDv'),
        M = r('BoUZ'),
        B = r('coMT'),
        j = r('tyNb'),
        I =
          (((i = (function () {
            function e(t, r, n) {
              _classCallCheck(this, e),
                (this.analytics = t),
                (this.seoService = r),
                (this.authService = n);
            }
            return (
              _createClass(e, [
                {
                  key: 'ngOnInit',
                  value: function () {
                    this.analytics.trackPageViews(), this.seoService.trackCanonicalChanges();
                    var e = JSON.parse(localStorage.getItem('userData'));
                    e && this.authService.autoLogin(e);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || i)(
              h['\u0275\u0275directiveInject'](M.a),
              h['\u0275\u0275directiveInject'](B.a),
              h['\u0275\u0275directiveInject'](k.a)
            );
          }),
          (i.ɵcmp = h['\u0275\u0275defineComponent']({
            type: i,
            selectors: [['ngx-app']],
            decls: 1,
            vars: 0,
            template: function (e, t) {
              1 & e && h['\u0275\u0275element'](0, 'router-outlet');
            },
            directives: [j.h],
            encapsulation: 2,
          })),
          i),
        F = r('lJxs'),
        G =
          (((c = (function () {
            function e(t, r) {
              _classCallCheck(this, e), (this.authService = t), (this.router = r);
            }
            return (
              _createClass(e, [
                {
                  key: 'canActivate',
                  value: function (e, t) {
                    var r = this;
                    return this.authService.getUser().pipe(
                      Object(O.a)(1),
                      Object(F.a)(function (e) {
                        return (
                          localStorage.getItem('userData') || r.authService.removeUser(),
                          !e ||
                            r.router.createUrlTree(
                              'admin' === e.userRole
                                ? ['/admin']
                                : 'institute' === e.userRole
                                ? ['/institute']
                                : 'employee' === e.userRole
                                ? ['/employee']
                                : 'student' === e.userRole
                                ? ['/student']
                                : ['/']
                            )
                        );
                      })
                    );
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || c)(h['\u0275\u0275inject'](k.a), h['\u0275\u0275inject'](j.c));
          }),
          (c.ɵprov = h['\u0275\u0275defineInjectable']({
            token: c,
            factory: c.ɵfac,
            providedIn: 'root',
          })),
          c),
        A =
          (((s = (function () {
            function e(t, r) {
              _classCallCheck(this, e), (this.authService = t), (this.router = r);
            }
            return (
              _createClass(e, [
                {
                  key: 'canActivate',
                  value: function (e, t) {
                    var r = this;
                    return this.authService.getUser().pipe(
                      Object(O.a)(1),
                      Object(F.a)(function (e) {
                        return (
                          !(!e || 'student' !== e.userRole) || r.router.createUrlTree(['/login'])
                        );
                      })
                    );
                  },
                },
                {
                  key: 'canActivateChild',
                  value: function (e, t) {
                    return this.canActivate(e, t);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || s)(h['\u0275\u0275inject'](k.a), h['\u0275\u0275inject'](j.c));
          }),
          (s.ɵprov = h['\u0275\u0275defineInjectable']({
            token: s,
            factory: s.ɵfac,
            providedIn: 'root',
          })),
          s),
        E =
          (((a = (function () {
            function e(t, r) {
              _classCallCheck(this, e), (this.authService = t), (this.router = r);
            }
            return (
              _createClass(e, [
                {
                  key: 'canActivate',
                  value: function (e, t) {
                    var r = this;
                    return this.authService.getUser().pipe(
                      Object(O.a)(1),
                      Object(F.a)(function (e) {
                        return (
                          !(!e || 'employee' !== e.userRole) || r.router.createUrlTree(['/login'])
                        );
                      })
                    );
                  },
                },
                {
                  key: 'canActivateChild',
                  value: function (e, t) {
                    return this.canActivate(e, t);
                  },
                },
              ]),
              e
            );
          })()).ɵfac = function (e) {
            return new (e || a)(h['\u0275\u0275inject'](k.a), h['\u0275\u0275inject'](j.c));
          }),
          (a.ɵprov = h['\u0275\u0275defineInjectable']({
            token: a,
            factory: a.ɵfac,
            providedIn: 'root',
          })),
          a),
        D = [
          {
            path: 'admin',
            loadChildren: function () {
              return r
                .e(40)
                .then(r.bind(null, 'jkDv'))
                .then(function (e) {
                  return e.AdminModule;
                });
            },
            canActivate: [],
          },
          {
            path: 'institute',
            loadChildren: function () {
              return Promise.all([r.e(1), r.e(49)])
                .then(r.bind(null, 'V0SI'))
                .then(function (e) {
                  return e.InstituteModule;
                });
            },
            canActivate: [
              ((l = (function () {
                function e(t, r) {
                  _classCallCheck(this, e), (this.authService = t), (this.router = r);
                }
                return (
                  _createClass(e, [
                    {
                      key: 'canActivate',
                      value: function (e, t) {
                        var r = this;
                        return this.authService.getUser().pipe(
                          Object(O.a)(1),
                          Object(F.a)(function (e) {
                            return (
                              !(!e || 'institute' !== e.userRole) ||
                              r.router.createUrlTree(['/login'])
                            );
                          })
                        );
                      },
                    },
                    {
                      key: 'canActivateChild',
                      value: function (e, t) {
                        return this.canActivate(e, t);
                      },
                    },
                  ]),
                  e
                );
              })()),
              (l.ɵfac = function (e) {
                return new (e || l)(h['\u0275\u0275inject'](k.a), h['\u0275\u0275inject'](j.c));
              }),
              (l.ɵprov = h['\u0275\u0275defineInjectable']({
                token: l,
                factory: l.ɵfac,
                providedIn: 'root',
              })),
              l),
            ],
          },
          {
            path: 'employee',
            loadChildren: function () {
              return Promise.all([r.e(1), r.e(46)])
                .then(r.bind(null, 'PgJR'))
                .then(function (e) {
                  return e.EmployeeModule;
                });
            },
            canActivate: [E],
          },
          {
            path: 'student',
            loadChildren: function () {
              return Promise.all([r.e(1), r.e(52)])
                .then(r.bind(null, 'ejW6'))
                .then(function (e) {
                  return e.StudentModule;
                });
            },
            canActivate: [A],
          },
          {
            path: '',
            loadChildren: function () {
              return r
                .e(63)
                .then(r.bind(null, 'lehC'))
                .then(function (e) {
                  return e.ContentModule;
                });
            },
            canActivate: [G],
          },
          { path: '**', redirectTo: '/' },
        ],
        R = { useHash: !0, relativeLinkResolution: 'corrected' },
        W =
          (((d = function e() {
            _classCallCheck(this, e);
          }).ɵmod = h['\u0275\u0275defineNgModule']({ type: d })),
          (d.ɵinj = h['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || d)();
            },
            imports: [[j.g.forRoot(D, R)], j.g],
          })),
          d),
        z = r('aceb'),
        N =
          (((u = function e() {
            _classCallCheck(this, e);
          }).ɵmod = h['\u0275\u0275defineNgModule']({ type: u, bootstrap: [I] })),
          (u.ɵinj = h['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || u)();
            },
            imports: [
              [
                f.a,
                b.a,
                m.c,
                W,
                p.a,
                z.pb.forRoot(),
                z.db.forRoot(),
                z.G.forRoot(),
                z.H.forRoot(),
                z.Jb.forRoot(),
                z.Cb.forRoot(),
                z.B.forRoot({ messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY' }),
                T.forRoot(),
                _.a.forRoot(),
              ],
            ],
          })),
          u);
      g.a.production && Object(h.enableProdMode)(),
        f
          .c()
          .bootstrapModule(N)
          .catch(function (e) {
            return console.error(e);
          });
    },
  },
  [[0, 5, 39]],
]);
