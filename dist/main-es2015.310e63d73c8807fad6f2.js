(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    0: function (t, e, r) {
      t.exports = r('zUnb');
    },
    1: function (t, e) {},
    AytR: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return o;
      });
      const o = {
        production: !0,
        backend: '',
        encKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
        aesKey: 'b417cf7714f5c803ac31ea7ea4ee3a11',
        razorpayKeyId: 'rzp_test_1JFxmyJ8eg8wQZ',
        zoomLiveURL: 'http://localhost:3000/online-meeting/#/live',
        SOCKET_ENDPOINT: '/classMasterSocketConnection',
      };
    },
    BoUZ: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return s;
      });
      var o = r('tyNb'),
        n = r('pLZG'),
        i = r('fXoL'),
        a = r('ofXK');
      let s = (() => {
        class t {
          constructor(t, e, r) {
            (this.route = t), (this.router = e), (this.location = r), (this.enabled = !1);
          }
          trackPageViews() {
            this.enabled &&
              this.router.events.pipe(Object(n.a)((t) => t instanceof o.b)).subscribe(() => {
                ga('send', { hitType: 'pageview', page: this.location.path() });
              });
          }
          trackEvent(t) {
            this.enabled && ga('send', 'event', t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              i['\u0275\u0275inject'](o.a),
              i['\u0275\u0275inject'](o.c),
              i['\u0275\u0275inject'](a.i)
            );
          }),
          (t.ɵprov = i['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac })),
          t
        );
      })();
    },
    EQut: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return d;
      });
      var o = r('fCOA'),
        n = r('lJxs'),
        i = r('JIr8'),
        a = r('2Vo4'),
        s = r('z6cu'),
        c = r('fXoL');
      let d = (() => {
        class t {
          constructor(t) {
            (this.httpService = t),
              (this.selectedBranchId = new a.a(null)),
              (this.branch = new a.a(null)),
              (this.branches = new a.a([])),
              (this.category = new a.a(null)),
              (this.categories = new a.a([]));
          }
          setBranchId(t) {
            (this.branchId = t), this.setSelectedBranchId(t);
          }
          deleteBranchId() {
            this.branchId = null;
          }
          getBranchId() {
            return this.branchId;
          }
          setSelectedBranchId(t) {
            this.selectedBranchId.next(t);
          }
          getSelectedBranchId() {
            return this.selectedBranchId;
          }
          setCategoryId(t) {
            this.categoryId = t;
          }
          deleteCategoryId() {
            this.categoryId = null;
          }
          getCategoryId() {
            return this.categoryId;
          }
          setBranchData(t) {
            this.branch.next(t);
          }
          getBranchData() {
            return this.branch;
          }
          deleteBranchData() {
            this.branch.next(null);
          }
          setBranchesData(t) {
            this.branches.next(t);
          }
          getBranchesData() {
            return this.branches;
          }
          deleteBranchesData() {
            this.branches.next(null);
          }
          setCategoryData(t) {
            this.category.next(t);
          }
          getCategoryData() {
            return this.category;
          }
          deleteCategoryData() {
            this.category.next(null);
          }
          setCategoriesData(t) {
            this.categories.next(t);
          }
          getCategoriesData() {
            return this.categories;
          }
          deleteCategoriesData() {
            this.categories.next([]);
          }
          getBranches() {
            return this.httpService.httpPost({ api: 'getBranches', data: {} }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getBranchCoursesAndBatches(t) {
            return this.httpService
              .httpPost({ api: 'getBranchCoursesAndBatches', data: { branch: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          getBranchesForEmployee() {
            return this.httpService.httpPost({ api: 'getBranchesForEmployee', data: {} }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getBranchesForStudent() {
            return this.httpService.httpPost({ api: 'getBranchesForStudent', data: {} }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getBranch(t) {
            return this.httpService.httpPost({ api: 'getBranch', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getBranchForEditing(t) {
            return this.httpService.httpPost({ api: 'getBranchForEditing', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          addBranch(t) {
            return this.httpService.httpPost({ api: 'newBranch', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          editBranch(t) {
            return this.httpService.httpPost({ api: 'updateBranch', data: t }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          activateBranch(t, e) {
            return this.httpService
              .httpPost({ api: 'activateBranch', data: { id: t, paymentDetails: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          deactivateBranch(t) {
            return this.httpService.httpPost({ api: 'deactivateBranch', data: { branch: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          changeBranchStatus(t, e) {
            return this.httpService
              .httpPost({ api: 'changeBranchStatus', data: { id: t, status: e } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
          deleteBranch(t) {
            return this.httpService.httpPost({ api: 'deleteBranch', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(c['\u0275\u0275inject'](o.a));
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
    KWzY: function (t, e, r) {
      'use strict';
      var o = r('ZatZ'),
        n = r('lJxs'),
        i = r('JIr8'),
        a = r('fCOA'),
        s = r('z6cu'),
        c = r('fXoL');
      let d = (() => {
        class t {
          constructor(t) {
            this.httpService = t;
          }
          getNotifications() {
            return this.httpService.httpPost({ api: 'getNotifications', data: {} }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          getNotification(t) {
            return this.httpService.httpPost({ api: 'getNotification', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          deleteNotification(t) {
            return this.httpService.httpPost({ api: 'deleteNotification', data: { id: t } }).pipe(
              Object(n.a)((t) => t),
              Object(i.a)((t) => Object(s.a)(t))
            );
          }
          changeNotificationStatus(t) {
            return this.httpService
              .httpPost({ api: 'changeNotificationStatus', data: { id: t } })
              .pipe(
                Object(n.a)((t) => t),
                Object(i.a)((t) => Object(s.a)(t))
              );
          }
        }
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
      var l = r('EQut'),
        h = r('AytR'),
        g = r('gFX4');
      let p = (() => {
        class t {
          constructor() {}
          setupSocketConnection() {
            const t = 'Bearer ' + JSON.parse(localStorage.getItem('userData'))._token;
            (this.socket = g(h.a.SOCKET_ENDPOINT, { query: { token: t } })),
              this.socket.on('connect', () => {
                this.socket.token = t;
              });
          }
          getSocket() {
            return this.socket;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = c['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
      var u = r('nwtg'),
        b = r('vC38'),
        m = r('pLZG'),
        f = r('1G5W'),
        C = r('XNiG'),
        x = r('aceb'),
        y = r('tyNb'),
        S = r('ofXK'),
        O = r('lWTH');
      function P(t, e) {
        if (
          (1 & t &&
            (c['\u0275\u0275elementStart'](0, 'nb-option', 16),
            c['\u0275\u0275text'](1),
            c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit;
          c['\u0275\u0275property']('value', t._id),
            c['\u0275\u0275advance'](1),
            c['\u0275\u0275textInterpolate'](t.basicDetails.branchName);
        }
      }
      function v(t, e) {
        if (1 & t) {
          const t = c['\u0275\u0275getCurrentView']();
          c['\u0275\u0275elementStart'](0, 'nb-select', 13),
            c['\u0275\u0275listener']('selectedChange', function (e) {
              return (
                c['\u0275\u0275restoreView'](t),
                c['\u0275\u0275nextContext']().changeSelectBranch(e)
              );
            }),
            c['\u0275\u0275elementStart'](1, 'nb-option', 14),
            c['\u0275\u0275text'](2, 'Select Institute'),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275template'](3, P, 2, 2, 'nb-option', 15),
            c['\u0275\u0275elementEnd']();
        }
        if (2 & t) {
          const t = c['\u0275\u0275nextContext']();
          c['\u0275\u0275property']('selected', t.branchId),
            c['\u0275\u0275advance'](3),
            c['\u0275\u0275property']('ngForOf', t.branches);
        }
      }
      function L(t, e) {
        if ((1 & t && c['\u0275\u0275element'](0, 'nb-action', 17), 2 & t)) {
          const t = c['\u0275\u0275nextContext'](),
            e = c['\u0275\u0275reference'](12);
          c['\u0275\u0275property']('nbPopover', e)('badgeText', t.unseenNotificationCount);
        }
      }
      function w(t, e) {
        if (
          (1 & t &&
            (c['\u0275\u0275elementStart'](0, 'nb-action', 18),
            c['\u0275\u0275element'](1, 'nb-user', 19),
            c['\u0275\u0275pipe'](2, 'uppercase'),
            c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = c['\u0275\u0275nextContext']();
          c['\u0275\u0275advance'](1),
            c['\u0275\u0275property']('nbContextMenu', t.userMenu)(
              'onlyPicture',
              t.userPictureOnly
            )('name', c['\u0275\u0275pipeBind1'](2, 3, null == t.user ? null : t.user.name));
        }
      }
      function T(t, e) {
        if (1 & t) {
          const t = c['\u0275\u0275getCurrentView']();
          c['\u0275\u0275elementStart'](0, 'nb-list-item', 23),
            c['\u0275\u0275elementStart'](1, 'div', 24),
            c['\u0275\u0275elementStart'](2, 'div', 25),
            c['\u0275\u0275elementStart'](3, 'h6'),
            c['\u0275\u0275elementStart'](4, 'span', 26),
            c['\u0275\u0275listener']('click', function () {
              c['\u0275\u0275restoreView'](t);
              const r = e.$implicit,
                o = e.index,
                n = c['\u0275\u0275nextContext'](3),
                i = c['\u0275\u0275reference'](14);
              return n.openNotificationBox(r, o, i);
            }),
            c['\u0275\u0275text'](5),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementStart'](6, 'span'),
            c['\u0275\u0275text'](7, '\xa0\xa0'),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementStart'](8, 'small'),
            c['\u0275\u0275text'](9),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementStart'](10, 'div', 27),
            c['\u0275\u0275elementStart'](11, 'span', 28),
            c['\u0275\u0275elementStart'](12, 'nb-icon', 29),
            c['\u0275\u0275listener']('click', function () {
              c['\u0275\u0275restoreView'](t);
              const r = e.$implicit,
                o = e.index,
                n = c['\u0275\u0275nextContext'](3),
                i = c['\u0275\u0275reference'](14);
              return n.openNotificationBox(r, o, i);
            }),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementStart'](13, 'div', 25),
            c['\u0275\u0275elementStart'](14, 'span', 30),
            c['\u0275\u0275text'](15),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementStart'](16, 'div', 27),
            c['\u0275\u0275elementStart'](17, 'span', 31),
            c['\u0275\u0275elementStart'](18, 'nb-icon', 32),
            c['\u0275\u0275listener']('click', function () {
              c['\u0275\u0275restoreView'](t);
              const r = e.$implicit,
                o = e.index,
                n = c['\u0275\u0275nextContext'](3),
                i = c['\u0275\u0275reference'](14);
              return n.openNotificationBox(r, o, i);
            }),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd']();
        }
        if (2 & t) {
          const t = e.$implicit,
            r = c['\u0275\u0275nextContext'](3);
          c['\u0275\u0275property']('ngClass', t.status ? 'new-notification' : ''),
            c['\u0275\u0275advance'](5),
            c['\u0275\u0275textInterpolate1'](' ', r.getNotificationLimitedTitle(t.title), ' '),
            c['\u0275\u0275advance'](4),
            c['\u0275\u0275textInterpolate1']('', r.dateService.getUpToTime(t.date), ' ago'),
            c['\u0275\u0275advance'](6),
            c['\u0275\u0275textInterpolate1'](' ', r.getNotificationLimitedMessage(t.message), ' ');
        }
      }
      function M(t, e) {
        if (
          (1 & t &&
            (c['\u0275\u0275elementStart'](0, 'nb-list'),
            c['\u0275\u0275template'](1, T, 19, 4, 'nb-list-item', 22),
            c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = c['\u0275\u0275nextContext'](2);
          c['\u0275\u0275advance'](1), c['\u0275\u0275property']('ngForOf', t.notifications);
        }
      }
      function B(t, e) {
        if (
          (1 & t &&
            (c['\u0275\u0275elementStart'](0, 'div', 20),
            c['\u0275\u0275template'](1, M, 2, 1, 'nb-list', 21),
            c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = c['\u0275\u0275nextContext'](),
            e = c['\u0275\u0275reference'](16);
          c['\u0275\u0275advance'](1),
            c['\u0275\u0275property']('ngIf', t.notifications && t.notifications.length > 0)(
              'ngIfElse',
              e
            );
        }
      }
      function _(t, e) {
        if (
          (1 & t &&
            (c['\u0275\u0275elementStart'](0, 'nb-card'),
            c['\u0275\u0275elementStart'](1, 'nb-card-header'),
            c['\u0275\u0275elementStart'](2, 'h4'),
            c['\u0275\u0275elementStart'](3, 'span'),
            c['\u0275\u0275text'](4),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275element'](5, 'br'),
            c['\u0275\u0275elementStart'](6, 'small'),
            c['\u0275\u0275text'](7),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementStart'](8, 'nb-card-body'),
            c['\u0275\u0275elementStart'](9, 'div', 33),
            c['\u0275\u0275text'](10),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementStart'](11, 'nb-card-footer'),
            c['\u0275\u0275elementStart'](12, 'button', 34),
            c['\u0275\u0275listener']('click', function () {
              return e.dialogRef.close();
            }),
            c['\u0275\u0275text'](13, ' Close '),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd'](),
            c['\u0275\u0275elementEnd']()),
          2 & t)
        ) {
          const t = e.$implicit,
            r = c['\u0275\u0275nextContext']();
          c['\u0275\u0275advance'](4),
            c['\u0275\u0275textInterpolate'](t.title),
            c['\u0275\u0275advance'](3),
            c['\u0275\u0275textInterpolate'](r.dateService.convertToDateTimeHourString(t.date)),
            c['\u0275\u0275advance'](3),
            c['\u0275\u0275textInterpolate1'](' ', t.message, ' ');
        }
      }
      function j(t, e) {
        1 & t &&
          (c['\u0275\u0275elementStart'](0, 'p', 35),
          c['\u0275\u0275text'](1, 'No Notifications Found'),
          c['\u0275\u0275elementEnd']());
      }
      r.d(e, 'a', function () {
        return G;
      });
      const F = function () {
        return ['view', 'user'];
      };
      let G = (() => {
        class t {
          constructor(t, e, r, o, n, i, a, s, c, d, l, h, g, p) {
            (this.sidebarService = t),
              (this.branchService = e),
              (this.dialogService = r),
              (this.dateService = o),
              (this.router = n),
              (this.route = i),
              (this.menuService = a),
              (this.themeService = s),
              (this.layoutService = c),
              (this.authService = d),
              (this.breakpointService = l),
              (this.notificationService = h),
              (this.nbMenuService = g),
              (this.socketService = p),
              (this.destroy$ = new C.a()),
              (this.userPictureOnly = !1);
          }
          ngOnInit() {
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
                  Object(m.a)(({ tag: t }) => 'my-context-menu' === t),
                  Object(n.a)(({ item: { title: t } }) => t)
                )
                .subscribe((t) => {
                  'Logout' === t && this.logOut();
                }),
              this.branchService.getBranchesData().subscribe((t) => {
                this.branches = t;
              }),
              this.branchService.getSelectedBranchId().subscribe((t) => {
                this.branchId = t;
              }),
              this.socket.on('notify', (t) => {
                this.unseenNotificationCount++, this.notifications.splice(0, 0, t);
              });
            const { xl: t } = this.breakpointService.getBreakpointsMap();
            this.themeService
              .onMediaQueryChange()
              .pipe(
                Object(n.a)(([, e]) => e.width < t),
                Object(f.a)(this.destroy$)
              )
              .subscribe((t) => (this.userPictureOnly = t));
          }
          changeSelectBranch(t) {
            '' !== t &&
              (this.branchService.setBranchId(t),
              this.router.navigate(['/' + this.user.userRole + '/branch/dashboard'], {
                relativeTo: this.route,
              }));
          }
          getNotifications() {
            this.notificationService.getNotifications().subscribe(
              (t) => {
                (this.notifications = t),
                  t.length > 0 && (this.unseenNotificationCount = t.filter((t) => t.status).length);
              },
              (t) => {}
            );
          }
          openNotificationBox(t, e, r) {
            this.dialogService.open(r, { context: t }),
              this.notificationService.changeNotificationStatus(t._id).subscribe(
                (t) => {
                  (this.notifications[e].status = !0),
                    this.unseenNotificationCount > 0 && this.unseenNotificationCount--;
                },
                (t) => {}
              );
          }
          getNotificationLimitedTitle(t) {
            return t.length <= 20 ? t : t.substr(0, 17).trim() + '...';
          }
          getNotificationLimitedMessage(t) {
            return t.length <= 30 ? t : t.substr(0, 30).trim() + '...';
          }
          deleteNotification(t, e, r) {
            this.notificationService.deleteNotification(t).subscribe(
              (t) => {
                e || (this.unseenNotificationCount > 0 && this.unseenNotificationCount--),
                  this.notifications.splice(r, 1);
              },
              (t) => {}
            );
          }
          logOut() {
            this.authService.logout();
          }
          toggleSidebar() {
            return (
              this.sidebarService.toggle(!0, 'menu-sidebar'),
              this.layoutService.changeLayoutSize(),
              !1
            );
          }
          navigateHome() {
            return this.menuService.navigateHome(), !1;
          }
          ngOnDestroy() {
            this.destroy$.next(), this.destroy$.complete(), this.socket.on('disconnect', () => {});
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              c['\u0275\u0275directiveInject'](x.qb),
              c['\u0275\u0275directiveInject'](l.a),
              c['\u0275\u0275directiveInject'](x.J),
              c['\u0275\u0275directiveInject'](o.a),
              c['\u0275\u0275directiveInject'](y.c),
              c['\u0275\u0275directiveInject'](y.a),
              c['\u0275\u0275directiveInject'](x.eb),
              c['\u0275\u0275directiveInject'](x.Bb),
              c['\u0275\u0275directiveInject'](b.b),
              c['\u0275\u0275directiveInject'](u.a),
              c['\u0275\u0275directiveInject'](x.bb),
              c['\u0275\u0275directiveInject'](d),
              c['\u0275\u0275directiveInject'](x.eb),
              c['\u0275\u0275directiveInject'](p)
            );
          }),
          (t.ɵcmp = c['\u0275\u0275defineComponent']({
            type: t,
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
            template: function (t, e) {
              1 & t &&
                (c['\u0275\u0275elementStart'](0, 'div', 0),
                c['\u0275\u0275elementStart'](1, 'div', 1),
                c['\u0275\u0275elementStart'](2, 'a', 2),
                c['\u0275\u0275listener']('click', function () {
                  return e.toggleSidebar();
                }),
                c['\u0275\u0275element'](3, 'nb-icon', 3),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275elementStart'](4, 'a', 4),
                c['\u0275\u0275listener']('click', function () {
                  return e.navigateHome();
                }),
                c['\u0275\u0275element'](5, 'img', 5),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275template'](6, v, 4, 2, 'nb-select', 6),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275elementStart'](7, 'div', 0),
                c['\u0275\u0275elementStart'](8, 'nb-actions', 7),
                c['\u0275\u0275template'](9, L, 1, 2, 'nb-action', 8),
                c['\u0275\u0275template'](10, w, 3, 5, 'nb-action', 9),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275elementEnd'](),
                c['\u0275\u0275template'](
                  11,
                  B,
                  2,
                  2,
                  'ng-template',
                  null,
                  10,
                  c['\u0275\u0275templateRefExtractor']
                ),
                c['\u0275\u0275template'](
                  13,
                  _,
                  14,
                  3,
                  'ng-template',
                  null,
                  11,
                  c['\u0275\u0275templateRefExtractor']
                ),
                c['\u0275\u0275template'](
                  15,
                  j,
                  2,
                  0,
                  'ng-template',
                  null,
                  12,
                  c['\u0275\u0275templateRefExtractor']
                )),
                2 & t &&
                  (c['\u0275\u0275advance'](6),
                  c['\u0275\u0275property']('ngIf', 'admin' !== e.user.userRole),
                  c['\u0275\u0275advance'](3),
                  c['\u0275\u0275property']('ngIf', 'admin' !== e.user.userRole),
                  c['\u0275\u0275advance'](1),
                  c['\u0275\u0275property']('nbIsGranted', c['\u0275\u0275pureFunction0'](3, F)));
            },
            directives: [
              x.M,
              S.n,
              x.m,
              O.a,
              x.mb,
              x.fb,
              S.m,
              x.l,
              x.gb,
              x.Hb,
              x.E,
              x.Y,
              x.Z,
              S.l,
              x.Fb,
              x.x,
              x.z,
              x.w,
              x.y,
              x.u,
            ],
            pipes: [S.v],
            styles: [
              '.nb-theme-default   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-default   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:14.75rem}.nb-theme-default   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-default   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-default   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #edf1f7}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-default   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-default   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-dark   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-dark   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:14.75rem}.nb-theme-dark   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-dark   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-dark   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #151a30}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #151a30}@media (max-width:767.98px){.nb-theme-dark   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-dark   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-cosmic   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:14.75rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-cosmic   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-cosmic   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#b4b4db}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #1b1b38}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #1b1b38}@media (max-width:767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-corporate   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:14.75rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-corporate   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-corporate   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #edf1f7}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}@media (max-width:767.98px){.nb-theme-corporate   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.notification-popup[_ngcontent-%COMP%]{width:20rem;max-height:40rem;overflow-y:auto}.notification[_ngcontent-%COMP%]{width:15rem}.new-notification[_ngcontent-%COMP%]{background-color:hsla(0,0%,66.7%,.8);padding:.25rem 1rem}.notification-modal[_ngcontent-%COMP%]{display:block}.delete-notification[_ngcontent-%COMP%]{color:#000;transition:all .25s}.delete-notification[_ngcontent-%COMP%]:hover{color:#ff3d71;transform:scale(1.1)}.notification-text[_ngcontent-%COMP%]{overflow:hidden;display:inline-block;white-space:nowrap}.view-notification[_ngcontent-%COMP%]{color:#000;transition:all .25s}.view-notification[_ngcontent-%COMP%]:hover{color:#00d68f;transform:scale(1.1)}',
            ],
          })),
          t
        );
      })();
    },
    SXPc: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return n;
      });
      var o = r('fXoL');
      let n = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = o['\u0275\u0275defineComponent']({
            type: t,
            selectors: [['ngx-footer']],
            decls: 6,
            vars: 0,
            consts: [
              [1, 'created-by'],
              ['href', 'https://www.google.com', 'target', '_blank'],
            ],
            template: function (t, e) {
              1 & t &&
                (o['\u0275\u0275elementStart'](0, 'span', 0),
                o['\u0275\u0275text'](1, ' Created with \u2665 by TEAM '),
                o['\u0275\u0275elementStart'](2, 'strong'),
                o['\u0275\u0275elementStart'](3, 'a', 1),
                o['\u0275\u0275text'](4, 'CLASS MASTER'),
                o['\u0275\u0275elementEnd'](),
                o['\u0275\u0275elementEnd'](),
                o['\u0275\u0275text'](5, ' 2020 '),
                o['\u0275\u0275elementEnd']());
            },
            styles: [
              '.nb-theme-default   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-dark   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}@media (max-width:575.98px){.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-cosmic   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-corporate   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}',
            ],
          })),
          t
        );
      })();
    },
    ZatZ: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return n;
      });
      var o = r('fXoL');
      let n = (() => {
        class t {
          constructor() {
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
            for (let t = 2018; t <= this.date.getFullYear(); t++) this.years.push(t.toString());
          }
          getWeekDays() {
            return this.weekDays;
          }
          getWeekDay(t) {
            return this.weekDays[t];
          }
          getDay(t) {
            return t ? ((t = new Date(t)), this.weekDays[t.getDay()]) : '--';
          }
          getMonths() {
            return this.months;
          }
          getMonthByMonthNumber(t) {
            const e = this.months.find((e) => e.monthNo === t);
            return e ? e.month : '--';
          }
          getMonth(t) {
            return this.months[t].month;
          }
          getCurrentMonth() {
            return (this.date.getMonth() + 1).toString().padStart(2, '0');
          }
          getYears() {
            return this.years;
          }
          getCurrentYear() {
            return this.date.getFullYear().toString();
          }
          getDate() {
            return new Date(this.date);
          }
          getDateString() {
            return this.dateString;
          }
          getFormattedDate() {
            return this.formatDate(this.dateString);
          }
          getDateInMilliseconds() {
            return this.dateInMilliseconds;
          }
          getDateTimeString() {
            return this.dateTimeString;
          }
          getDateTimeISOString() {
            return this.dateTimeISOString;
          }
          dateToMilliseconds(t) {
            return new Date(t).getTime();
          }
          millisecondsToDate(t) {
            return new Date(t);
          }
          millisecondsToDateString(t) {
            return this.convertToDateString(t);
          }
          convertToDate(t) {
            return new Date(t);
          }
          convertToDateString(t) {
            return t
              ? (t = new Date(t)).getFullYear() +
                  '-' +
                  (t.getMonth() + 1).toString().padStart(2, '0') +
                  '-' +
                  t.getDate().toString().padStart(2, '0')
              : '--';
          }
          reverseDate(t) {
            return t ? t.split('-').reverse().join('-') : '--';
          }
          addDaysInDate(t, e) {
            if (!t) return '--';
            const r = new Date(t);
            return r.setDate(r.getDate() + (e - 1)), new Date(r);
          }
          convertToISOString(t) {
            return t ? new Date(t).toISOString() : '--';
          }
          convertToDateTimeString(t) {
            return t
              ? ((t = new Date(t)),
                this.convertToDateString(t) +
                  'T' +
                  t.getHours().toString().padStart(2, '0') +
                  ':' +
                  t.getMinutes().toString().padStart(2, '0'))
              : '--';
          }
          convertToDateTimeHourString(t) {
            return t
              ? ((t = new Date(t)),
                this.convertToDateString(t) +
                  ' ' +
                  this.formatTime(
                    t.getHours().toString().padStart(2, '0') +
                      ':' +
                      t.getMinutes().toString().padStart(2, '0')
                  ))
              : '--';
          }
          formatDate(t) {
            return t ? t.split('-').reverse().join('-') : '--';
          }
          formatTime(t) {
            if (!t) return '--';
            let e = +(t = t.split(':'))[0];
            const r = t[1],
              o = e >= 12 ? 'PM' : 'AM';
            return (
              0 === e ? (e = 12) : e > 12 && (e -= 12),
              e.toString().padStart(2, '0') + ':' + r + ' ' + o
            );
          }
          formatDateTime(t) {
            return t
              ? ((t = new Date(t).toISOString().split('T')),
                this.formatDate(t[0]) + ' ' + this.formatTime(t[1]))
              : '--';
          }
          compareDates(t, e) {
            return this.convertToDate(t) <= this.convertToDate(e);
          }
          dateDifferenceInDays(t, e) {
            return (
              (this.dateToMilliseconds(e) - this.dateToMilliseconds(t)) / this.oneDayInMilliseconds
            );
          }
          getUpToTime(t) {
            t = new Date(t).getTime();
            const e = this.getDateInMilliseconds(),
              r = Math.round((e - t) / 1e3);
            if (r >= 0 && r < 60) return r + ' sec';
            if (r >= 60 && r < 3600) {
              const t = Math.round(r / 60);
              return t + (t <= 1 ? ' min' : ' mins');
            }
            if (r >= 3600 && r < 86400) {
              const t = Math.round(r / 3600);
              return t + (t <= 1 ? ' hr' : ' hrs');
            }
            if (r >= 86400 && r < 604800) {
              const t = Math.round(r / 86400);
              return t + (t <= 1 ? ' day' : ' days');
            }
            if (r >= 604800 && r < 2630880) {
              const t = Math.round(r / 604800);
              return t + (t <= 1 ? ' week' : ' weeks');
            }
            if (r >= 2630880 && r < 31570560) {
              const t = Math.round(r / 2630880);
              return t + (t <= 1 ? ' month' : ' months');
            }
            if (r >= 31570560) {
              const t = Math.round(r / 31570560);
              return t + (t <= 1 ? ' year' : ' years');
            }
            return '';
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
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
    coMT: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return l;
      });
      var o = r('fXoL'),
        n = r('ofXK'),
        i = r('tyNb'),
        a = r('aceb'),
        s = r('pLZG'),
        c = r('1G5W'),
        d = r('XNiG');
      let l = (() => {
        class t {
          constructor(t, e, r) {
            (this.router = t),
              (this.destroy$ = new d.a()),
              (this.isBrowser = Object(n.A)(r)),
              (this.dom = e),
              this.isBrowser && this.createCanonicalTag();
          }
          ngOnDestroy() {
            this.destroy$.next(), this.destroy$.complete();
          }
          createCanonicalTag() {
            (this.linkCanonical = this.dom.createElement('link')),
              this.linkCanonical.setAttribute('rel', 'canonical'),
              this.dom.head.appendChild(this.linkCanonical),
              this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
          }
          trackCanonicalChanges() {
            this.isBrowser &&
              this.router.events
                .pipe(
                  Object(s.a)((t) => t instanceof i.b),
                  Object(c.a)(this.destroy$)
                )
                .subscribe(() => {
                  this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
                });
          }
          getCanonicalUrl() {
            return this.dom.location.origin + this.dom.location.pathname;
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              o['\u0275\u0275inject'](i.c),
              o['\u0275\u0275inject'](a.e),
              o['\u0275\u0275inject'](o.PLATFORM_ID)
            );
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac })),
          t
        );
      })();
    },
    crnd: function (t, e) {
      function r(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (r.keys = function () {
        return [];
      }),
        (r.resolve = r),
        (t.exports = r),
        (r.id = 'crnd');
    },
    fCOA: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return d;
      });
      var o = r('lJxs'),
        n = r('JIr8'),
        i = r('z6cu'),
        a = r('AytR'),
        s = r('fXoL'),
        c = r('tk/3');
      let d = (() => {
        class t {
          constructor(t) {
            this.http = t;
          }
          httpGet(t) {
            return this.http.get(a.a.backend + t.api).pipe(
              Object(o.a)((t) => t),
              Object(n.a)((t) => {
                let e = 'SOMETHING BAD HAPPENED';
                return (
                  t.error &&
                    (e =
                      'object' == typeof t.error
                        ? "Can't Reach Server.., Please Try Again"
                        : t.error),
                  Object(i.a)(e)
                );
              })
            );
          }
          httpPost(t) {
            return this.http.post(a.a.backend + t.api, t.data).pipe(
              Object(o.a)((t) => t),
              Object(n.a)((t) => {
                let e = 'SOMETHING BAD HAPPENED';
                return (
                  t.error &&
                    (e =
                      'object' == typeof t.error
                        ? "Can't Reach Server.., Please Try Again"
                        : t.error),
                  Object(i.a)(e)
                );
              })
            );
          }
          httpPatch(t) {
            return this.http.patch(a.a.backend + t.api, t.data).pipe(
              Object(o.a)((t) => t),
              Object(n.a)((t) => {
                let e = 'SOMETHING BAD HAPPENED';
                return (
                  t.error &&
                    (e =
                      'object' == typeof t.error
                        ? "Can't Reach Server.., Please Try Again"
                        : t.error),
                  Object(i.a)(e)
                );
              })
            );
          }
          httpPut(t) {
            return this.http.put(a.a.backend + t.api, t.data).pipe(
              Object(o.a)((t) => t),
              Object(n.a)((t) => {
                let e = 'SOMETHING BAD HAPPENED';
                return (
                  t.error &&
                    (e =
                      'object' == typeof t.error
                        ? "Can't Reach Server.., Please Try Again"
                        : t.error),
                  Object(i.a)(e)
                );
              })
            );
          }
          httpDelete(t) {
            return this.http.delete(a.a.backend + t.api, t.data).pipe(
              Object(o.a)((t) => t),
              Object(n.a)((t) => {
                let e = 'SOMETHING BAD HAPPENED';
                return (
                  t.error &&
                    (e =
                      'object' == typeof t.error
                        ? "Can't Reach Server.., Please Try Again"
                        : t.error),
                  Object(i.a)(e)
                );
              })
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s['\u0275\u0275inject'](c.b));
          }),
          (t.ɵprov = s['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    mgFL: function (t, e, r) {
      'use strict';
      r.d(e, 'a', function () {
        return d;
      });
      var o = r('fXoL'),
        n = r('aceb'),
        i = r('KWzY'),
        a = r('SXPc');
      const s = [[['nb-menu']], [['router-outlet']]],
        c = ['nb-menu', 'router-outlet'];
      let d = (() => {
        class t {}
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = o['\u0275\u0275defineComponent']({
            type: t,
            selectors: [['ngx-one-column-layout']],
            ngContentSelectors: c,
            decls: 9,
            vars: 0,
            consts: [
              ['windowMode', ''],
              ['fixed', ''],
              ['tag', 'menu-sidebar', 'responsive', '', 1, 'menu-sidebar'],
            ],
            template: function (t, e) {
              1 & t &&
                (o['\u0275\u0275projectionDef'](s),
                o['\u0275\u0275elementStart'](0, 'nb-layout', 0),
                o['\u0275\u0275elementStart'](1, 'nb-layout-header', 1),
                o['\u0275\u0275element'](2, 'ngx-header'),
                o['\u0275\u0275elementEnd'](),
                o['\u0275\u0275elementStart'](3, 'nb-sidebar', 2),
                o['\u0275\u0275projection'](4),
                o['\u0275\u0275elementEnd'](),
                o['\u0275\u0275elementStart'](5, 'nb-layout-column'),
                o['\u0275\u0275projection'](6, 1),
                o['\u0275\u0275elementEnd'](),
                o['\u0275\u0275elementStart'](7, 'nb-layout-footer', 1),
                o['\u0275\u0275element'](8, 'ngx-footer'),
                o['\u0275\u0275elementEnd'](),
                o['\u0275\u0275elementEnd']());
            },
            directives: [n.S, n.W, i.a, n.ob, n.R, n.V, a.a],
            styles: [
              '.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable, .nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable, .nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable, .nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}',
            ],
          })),
          t
        );
      })();
    },
    nwtg: function (t, e, r) {
      'use strict';
      var o = r('JIr8'),
        n = r('vkgz'),
        i = r('2Vo4'),
        a = r('z6cu');
      class s {
        constructor(t, e, r, o, n, i, a, s) {
          (this._id = t),
            (this.name = e),
            (this.email = r),
            (this.phone = o),
            (this.userRole = n),
            (this.imsMasterId = i),
            (this._token = a),
            (this._tokenExpirationDate = s);
        }
        get token() {
          return !this._tokenExpirationDate || new Date() > this._tokenExpirationDate
            ? null
            : this._token;
        }
      }
      var c = r('AytR'),
        d = r('fXoL'),
        l = r('tk/3'),
        h = r('tyNb');
      r.d(e, 'a', function () {
        return g;
      });
      let g = (() => {
        class t {
          constructor(t, e, r) {
            (this.http = t), (this.router = e), (this.route = r), (this.user = new i.a(null));
          }
          getUser() {
            return this.user;
          }
          getUserData() {
            return JSON.parse(localStorage.getItem('userData'));
          }
          getUserToken() {
            return JSON.parse(localStorage.getItem('userData'))._token;
          }
          createUser(t) {
            return this.http.post(c.a.backend + 'newUser', t).pipe(
              Object(o.a)(this.handleError),
              Object(n.a)((t) => {
                this.handleAuthentication(
                  t._id,
                  t.name,
                  t.email,
                  t.phone,
                  t.userRole,
                  t.imsMasterId,
                  t.token,
                  +t.expiresIn
                );
              })
            );
          }
          login(t, e) {
            return this.http.post(c.a.backend + 'login', { email: t, password: e }).pipe(
              Object(o.a)(this.handleError),
              Object(n.a)((t) => {
                this.handleAuthentication(
                  t._id,
                  t.name,
                  t.email,
                  t.phone,
                  t.userRole,
                  t.imsMasterId,
                  t.token,
                  t.expiresIn
                );
              })
            );
          }
          loadUser(t) {
            const e = new s(
              t._id,
              t.name,
              t.email,
              t.phone,
              t.userRole,
              t.imsMasterId,
              t._token,
              new Date(t._tokenExpirationDate)
            );
            if (e.token) {
              this.user.next(e);
              const r = new Date(t._tokenExpirationDate).getTime() - new Date().getTime();
              return (
                this.autoLogout(r),
                void this.router.navigate(
                  'admin' === e.userRole
                    ? ['/admin']
                    : 'institute' === e.userRole
                    ? ['/institute']
                    : 'employee' === e.userRole
                    ? ['/employee']
                    : 'student' === e.userRole
                    ? ['/student']
                    : ['/'],
                  { relativeTo: this.route }
                )
              );
            }
          }
          autoLogin(t) {
            this.loadUser(t),
              this.http.post(c.a.backend + 'autoLogin', {}).subscribe(
                (t) => {},
                (t) => {
                  this.removeUser(), this.router.navigate(['/login'], { relativeTo: this.route });
                }
              );
          }
          logout() {
            return this.http.post(c.a.backend + 'logout', {}).subscribe(
              (t) => {
                this.user.next(null),
                  this.router.navigate(['/login']),
                  localStorage.removeItem('userData'),
                  this.tokenExpirationTimer && clearTimeout(this.tokenExpirationTimer),
                  (this.tokenExpirationTimer = null);
              },
              (t) => {}
            );
          }
          removeUser() {
            localStorage.getItem('userData') && localStorage.removeItem('userData'),
              this.user.next(null);
          }
          logoutAll() {
            return this.http.post(c.a.backend + 'logoutAll', {}).subscribe(
              (t) => {
                this.user.next(null),
                  this.router.navigate(['/login']),
                  localStorage.removeItem('userData'),
                  this.tokenExpirationTimer && clearTimeout(this.tokenExpirationTimer),
                  (this.tokenExpirationTimer = null);
              },
              (t) => {}
            );
          }
          autoLogout(t) {
            this.tokenExpirationTimer = setTimeout(() => {
              this.logout();
            }, t);
          }
          handleAuthentication(t, e, r, o, n, i, a, c) {
            const d = new Date(new Date().getTime() + 1e3 * c),
              l = new s(t, e, r, o, n, i, a, d);
            this.user.next(l),
              this.autoLogout(1e3 * c),
              localStorage.setItem('userData', JSON.stringify(l));
          }
          handleError(t) {
            let e = 'An unknown error occurred!';
            return (
              t.error &&
                (e =
                  'object' == typeof t.error ? 'Cant Reach Server.., Please Try Again' : t.error),
              Object(a.a)(e)
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              d['\u0275\u0275inject'](l.b),
              d['\u0275\u0275inject'](h.c),
              d['\u0275\u0275inject'](h.a)
            );
          }),
          (t.ɵprov = d['\u0275\u0275defineInjectable']({
            token: t,
            factory: t.ɵfac,
            providedIn: 'root',
          })),
          t
        );
      })();
    },
    vC38: function (t, e, r) {
      'use strict';
      var o = r('XNiG'),
        n = r('UXun'),
        i = r('3E0/'),
        a = r('Kj3r'),
        s = r('fXoL');
      let c = (() => {
        class t {
          constructor() {
            (this.layoutSize$ = new o.a()),
              (this.layoutSizeChange$ = this.layoutSize$.pipe(Object(n.a)({ refCount: !0 })));
          }
          changeLayoutSize() {
            this.layoutSize$.next();
          }
          onChangeLayoutSize() {
            return this.layoutSizeChange$.pipe(Object(i.a)(1));
          }
          onSafeChangeLayoutSize() {
            return this.layoutSizeChange$.pipe(Object(a.a)(350));
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵprov = s['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      var d = r('BoUZ'),
        l = r('2Vo4'),
        h = r('LRne'),
        g = r('GJmQ'),
        p = r('aceb');
      let u = (() => {
        class t {
          constructor(t) {
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
              (this.layoutState$ = new l.a(this.layouts[0])),
              (this.sidebarState$ = new l.a(this.sidebars[0])),
              (this.alive = !0),
              t
                .onDirectionChange()
                .pipe(Object(g.a)(() => this.alive))
                .subscribe((t) => this.updateSidebarIcons(t)),
              this.updateSidebarIcons(t.getDirection());
          }
          ngOnDestroy() {
            this.alive = !1;
          }
          updateSidebarIcons(t) {
            const [e, r] = this.sidebars,
              o = t === p.T.LTR,
              n = o ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
            (e.icon = o ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right'), (r.icon = n);
          }
          setLayoutState(t) {
            this.layoutState$.next(t);
          }
          getLayoutStates() {
            return Object(h.a)(this.layouts);
          }
          onLayoutState() {
            return this.layoutState$.asObservable();
          }
          setSidebarState(t) {
            this.sidebarState$.next(t);
          }
          getSidebarStates() {
            return Object(h.a)(this.sidebars);
          }
          onSidebarState() {
            return this.sidebarState$.asObservable();
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s['\u0275\u0275inject'](p.U));
          }),
          (t.ɵprov = s['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      var b = r('coMT');
      r.d(e, 'b', function () {
        return c;
      }),
        r.d(e, 'a', function () {
          return d.a;
        }),
        r.d(e, 'c', function () {
          return b.a;
        }),
        r.d(e, 'd', function () {
          return u;
        });
    },
    vTDv: function (t, e, r) {
      'use strict';
      var o = r('ofXK'),
        n = r('aceb'),
        i = r('tR1z'),
        a = r('lWTH'),
        s = (r('KWzY'), r('SXPc'), r('fXoL'));
      r('mgFL');
      const c = n.d.variables,
        d = {
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
        l = n.b.variables,
        h = {
          name: 'cosmic',
          base: 'cosmic',
          variables: {
            temperature: {
              arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
              arcEmpty: l.bg2,
              thumbBg: '#ffffff',
              thumbBorder: '#ffffff',
            },
            solar: {
              gradientLeft: l.primary,
              gradientRight: l.primary,
              shadowColor: 'rgba(0, 0, 0, 0)',
              secondSeriesFill: l.bg2,
              radius: ['70%', '90%'],
            },
            traffic: {
              tooltipBg: l.bg,
              tooltipBorderColor: l.border2,
              tooltipExtraCss:
                'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: l.fgText,
              tooltipFontWeight: 'normal',
              yAxisSplitLine: l.separator,
              lineBg: l.border2,
              lineShadowBlur: '14',
              itemColor: l.border2,
              itemBorderColor: l.border2,
              itemEmphasisBorderColor: l.primary,
              shadowLineDarkBg: l.border3,
              shadowLineShadow: l.border3,
              gradFrom: l.bg,
              gradTo: l.bg2,
            },
            electricity: {
              tooltipBg: l.bg,
              tooltipLineColor: l.fgText,
              tooltipLineWidth: '0',
              tooltipBorderColor: l.border2,
              tooltipExtraCss:
                'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: l.fgText,
              tooltipFontWeight: 'normal',
              axisLineColor: l.border3,
              xAxisTextColor: l.fg,
              yAxisSplitLine: l.separator,
              itemBorderColor: l.border2,
              lineStyle: 'dotted',
              lineWidth: '6',
              lineGradFrom: l.success,
              lineGradTo: l.warning,
              lineShadow: l.bg4,
              areaGradFrom: l.bg2,
              areaGradTo: l.bg3,
              shadowLineDarkBg: l.bg3,
            },
            bubbleMap: {
              titleColor: l.fgText,
              areaColor: l.bg4,
              areaHoverColor: l.fgHighlight,
              areaBorderColor: l.border5,
            },
            profitBarAnimationEchart: {
              textColor: l.fgText,
              firstAnimationBarColor: l.primary,
              secondAnimationBarColor: l.success,
              splitLineStyleOpacity: '1',
              splitLineStyleWidth: '1',
              splitLineStyleColor: l.border2,
              tooltipTextColor: l.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: l.bg,
              tooltipBorderColor: l.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
              gradientFrom: l.warningLight,
              gradientTo: l.warning,
              shadow: l.warningLight,
              shadowBlur: '5',
              axisTextColor: l.fgText,
              axisFontSize: '12',
              tooltipBg: l.bg,
              tooltipBorderColor: l.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: l.fgText,
              tooltipFontWeight: 'normal',
            },
            countryOrders: {
              countryBorderColor: l.border4,
              countryFillColor: l.bg3,
              countryBorderWidth: '1',
              hoveredCountryBorderColor: l.primary,
              hoveredCountryFillColor: l.primaryLight,
              hoveredCountryBorderWidth: '1',
              chartAxisLineColor: l.border4,
              chartAxisTextColor: l.fg,
              chartAxisFontSize: '16',
              chartGradientTo: l.primary,
              chartGradientFrom: l.primaryLight,
              chartAxisSplitLine: l.separator,
              chartShadowLineColor: l.primaryLight,
              chartLineBottomShadowColor: l.primary,
              chartInnerLineColor: l.bg2,
            },
            echarts: {
              bg: l.bg,
              textColor: l.fgText,
              axisLineColor: l.fgText,
              splitLineColor: l.separator,
              itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
              tooltipBackgroundColor: l.primary,
              areaOpacity: '1',
            },
            chartjs: { axisLineColor: l.separator, textColor: l.fgText },
            orders: {
              tooltipBg: l.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '0',
              tooltipBorderColor: l.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: l.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: l.border4,
              axisFontSize: '16',
              axisTextColor: l.fg,
              yAxisSplitLine: l.separator,
              itemBorderColor: l.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              firstAreaGradFrom: l.bg2,
              firstAreaGradTo: l.bg2,
              firstShadowLineDarkBg: l.bg2,
              secondLineGradFrom: l.primary,
              secondLineGradTo: l.primary,
              secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
              secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
              secondShadowLineDarkBg: l.primary,
              thirdLineGradFrom: l.success,
              thirdLineGradTo: l.successLight,
              thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
              thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
              thirdShadowLineDarkBg: l.success,
            },
            profit: {
              bg: l.bg,
              textColor: l.fgText,
              axisLineColor: l.border4,
              splitLineColor: l.separator,
              areaOpacity: '1',
              axisFontSize: '16',
              axisTextColor: l.fg,
              firstLineGradFrom: l.bg2,
              firstLineGradTo: l.bg2,
              firstLineShadow: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: l.primary,
              secondLineGradTo: l.primary,
              secondLineShadow: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: l.success,
              thirdLineGradTo: l.successLight,
              thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: { firstItem: l.success, secondItem: l.primary, thirdItem: l.bg2 },
            visitors: {
              tooltipBg: l.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '1',
              tooltipBorderColor: l.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: l.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: l.border4,
              axisFontSize: '16',
              axisTextColor: l.fg,
              yAxisSplitLine: l.separator,
              itemBorderColor: l.primary,
              lineStyle: 'dotted',
              lineWidth: '6',
              lineGradFrom: '#ffffff',
              lineGradTo: '#ffffff',
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: l.primary,
              areaGradTo: l.primaryLight,
              innerLineStyle: 'solid',
              innerLineWidth: '1',
              innerAreaGradFrom: l.success,
              innerAreaGradTo: l.success,
            },
            visitorsLegend: { firstIcon: l.success, secondIcon: l.primary },
            visitorsPie: {
              firstPieGradientLeft: l.success,
              firstPieGradientRight: l.successLight,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              firstPieRadius: ['70%', '90%'],
              secondPieGradientLeft: l.warning,
              secondPieGradientRight: l.warningLight,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieRadius: ['60%', '95%'],
              shadowOffsetX: '0',
              shadowOffsetY: '3',
            },
            visitorsPieLegend: { firstSection: l.warning, secondSection: l.success },
            earningPie: {
              radius: ['65%', '100%'],
              center: ['50%', '50%'],
              fontSize: '22',
              firstPieGradientLeft: l.success,
              firstPieGradientRight: l.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieGradientLeft: l.primary,
              secondPieGradientRight: l.primary,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              thirdPieGradientLeft: l.warning,
              thirdPieGradientRight: l.warning,
              thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
              gradFrom: l.primary,
              gradTo: l.primary,
              tooltipTextColor: l.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: l.bg,
              tooltipBorderColor: l.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
          },
        },
        g = n.a.variables,
        p = {
          name: 'corporate',
          base: 'corporate',
          variables: {
            temperature: {
              arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
              arcEmpty: g.bg2,
              thumbBg: g.bg2,
              thumbBorder: '#ffa36b',
            },
            solar: {
              gradientLeft: g.primary,
              gradientRight: g.primary,
              shadowColor: 'rgba(0, 0, 0, 0)',
              secondSeriesFill: g.bg2,
              radius: ['80%', '90%'],
            },
            traffic: {
              tooltipBg: g.bg,
              tooltipBorderColor: g.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: g.fgText,
              tooltipFontWeight: 'normal',
              yAxisSplitLine: 'rgba(0, 0, 0, 0)',
              lineBg: g.primary,
              lineShadowBlur: '0',
              itemColor: g.border4,
              itemBorderColor: g.border4,
              itemEmphasisBorderColor: g.primaryLight,
              shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              shadowLineShadow: 'rgba(0, 0, 0, 0)',
              gradFrom: g.bg,
              gradTo: g.bg,
            },
            electricity: {
              tooltipBg: g.bg,
              tooltipLineColor: g.fgText,
              tooltipLineWidth: '0',
              tooltipBorderColor: g.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: g.fgText,
              tooltipFontWeight: 'normal',
              axisLineColor: g.border3,
              xAxisTextColor: g.fg,
              yAxisSplitLine: g.separator,
              itemBorderColor: g.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              lineGradFrom: g.primary,
              lineGradTo: g.primary,
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: 'rgba(0, 0, 0, 0)',
              areaGradTo: 'rgba(0, 0, 0, 0)',
              shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
              titleColor: g.fgText,
              areaColor: g.bg4,
              areaHoverColor: g.fgHighlight,
              areaBorderColor: g.border5,
            },
            profitBarAnimationEchart: {
              textColor: g.fgText,
              firstAnimationBarColor: g.primary,
              secondAnimationBarColor: g.success,
              splitLineStyleOpacity: '1',
              splitLineStyleWidth: '1',
              splitLineStyleColor: g.separator,
              tooltipTextColor: g.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: g.bg,
              tooltipBorderColor: g.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
              gradientFrom: g.warningLight,
              gradientTo: g.warning,
              shadow: g.warningLight,
              shadowBlur: '0',
              axisTextColor: g.fgText,
              axisFontSize: '12',
              tooltipBg: g.bg,
              tooltipBorderColor: g.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: g.fgText,
              tooltipFontWeight: 'normal',
            },
            countryOrders: {
              countryBorderColor: g.border4,
              countryFillColor: g.bg4,
              countryBorderWidth: '1',
              hoveredCountryBorderColor: g.primary,
              hoveredCountryFillColor: g.primaryLight,
              hoveredCountryBorderWidth: '1',
              chartAxisLineColor: g.border4,
              chartAxisTextColor: g.fg,
              chartAxisFontSize: '16',
              chartGradientTo: g.primary,
              chartGradientFrom: g.primaryLight,
              chartAxisSplitLine: g.separator,
              chartShadowLineColor: g.primaryLight,
              chartLineBottomShadowColor: g.primary,
              chartInnerLineColor: g.bg2,
            },
            echarts: {
              bg: g.bg,
              textColor: g.fgText,
              axisLineColor: g.fgText,
              splitLineColor: g.separator,
              itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
              tooltipBackgroundColor: g.primary,
              areaOpacity: '0.7',
            },
            chartjs: { axisLineColor: g.separator, textColor: g.fgText },
            orders: {
              tooltipBg: g.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '0',
              tooltipBorderColor: g.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: g.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: g.border4,
              axisFontSize: '16',
              axisTextColor: g.fg,
              yAxisSplitLine: g.separator,
              itemBorderColor: g.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              firstAreaGradFrom: g.bg3,
              firstAreaGradTo: g.bg3,
              firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: g.primary,
              secondLineGradTo: g.primary,
              secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
              secondAreaGradTo: 'rgba(0, 0, 0, 0)',
              secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: g.success,
              thirdLineGradTo: g.successLight,
              thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
              thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
              thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
              bg: g.bg,
              textColor: g.fgText,
              axisLineColor: g.border4,
              splitLineColor: g.separator,
              areaOpacity: '1',
              axisFontSize: '16',
              axisTextColor: g.fg,
              firstLineGradFrom: g.bg3,
              firstLineGradTo: g.bg3,
              firstLineShadow: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: g.primary,
              secondLineGradTo: g.primary,
              secondLineShadow: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: g.success,
              thirdLineGradTo: g.success,
              thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: { firstItem: g.success, secondItem: g.primary, thirdItem: g.bg3 },
            visitors: {
              tooltipBg: g.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '1',
              tooltipBorderColor: g.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: g.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: g.border4,
              axisFontSize: '16',
              axisTextColor: g.fg,
              yAxisSplitLine: g.separator,
              itemBorderColor: g.primary,
              lineStyle: 'dotted',
              lineWidth: '6',
              lineGradFrom: '#ffffff',
              lineGradTo: '#ffffff',
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: g.primary,
              areaGradTo: g.primaryLight,
              innerLineStyle: 'solid',
              innerLineWidth: '1',
              innerAreaGradFrom: g.success,
              innerAreaGradTo: g.success,
            },
            visitorsLegend: { firstIcon: g.success, secondIcon: g.primary },
            visitorsPie: {
              firstPieGradientLeft: g.success,
              firstPieGradientRight: g.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              firstPieRadius: ['65%', '90%'],
              secondPieGradientLeft: g.warning,
              secondPieGradientRight: g.warningLight,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieRadius: ['63%', '92%'],
              shadowOffsetX: '-4',
              shadowOffsetY: '-4',
            },
            visitorsPieLegend: { firstSection: g.warning, secondSection: g.success },
            earningPie: {
              radius: ['65%', '100%'],
              center: ['50%', '50%'],
              fontSize: '22',
              firstPieGradientLeft: g.success,
              firstPieGradientRight: g.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieGradientLeft: g.primary,
              secondPieGradientRight: g.primary,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              thirdPieGradientLeft: g.warning,
              thirdPieGradientRight: g.warning,
              thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
              gradFrom: g.primary,
              gradTo: g.primary,
              tooltipTextColor: g.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: g.bg,
              tooltipBorderColor: g.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
          },
        },
        u = n.c.variables,
        b = {
          name: 'dark',
          base: 'dark',
          variables: {
            temperature: {
              arcFill: [u.primary, u.primary, u.primary, u.primary, u.primary],
              arcEmpty: u.bg2,
              thumbBg: u.bg2,
              thumbBorder: u.primary,
            },
            solar: {
              gradientLeft: u.primary,
              gradientRight: u.primary,
              shadowColor: 'rgba(0, 0, 0, 0)',
              secondSeriesFill: u.bg2,
              radius: ['80%', '90%'],
            },
            traffic: {
              tooltipBg: u.bg,
              tooltipBorderColor: u.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: u.fgText,
              tooltipFontWeight: 'normal',
              yAxisSplitLine: u.separator,
              lineBg: u.border4,
              lineShadowBlur: '1',
              itemColor: u.border4,
              itemBorderColor: u.border4,
              itemEmphasisBorderColor: u.primary,
              shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              shadowLineShadow: 'rgba(0, 0, 0, 0)',
              gradFrom: u.bg2,
              gradTo: u.bg2,
            },
            electricity: {
              tooltipBg: u.bg,
              tooltipLineColor: u.fgText,
              tooltipLineWidth: '0',
              tooltipBorderColor: u.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: u.fgText,
              tooltipFontWeight: 'normal',
              axisLineColor: u.border3,
              xAxisTextColor: u.fg,
              yAxisSplitLine: u.separator,
              itemBorderColor: u.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              lineGradFrom: u.primary,
              lineGradTo: u.primary,
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: u.bg2,
              areaGradTo: u.bg2,
              shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            bubbleMap: {
              titleColor: u.fgText,
              areaColor: u.bg4,
              areaHoverColor: u.fgHighlight,
              areaBorderColor: u.border5,
            },
            profitBarAnimationEchart: {
              textColor: u.fgText,
              firstAnimationBarColor: u.primary,
              secondAnimationBarColor: u.success,
              splitLineStyleOpacity: '1',
              splitLineStyleWidth: '1',
              splitLineStyleColor: u.separator,
              tooltipTextColor: u.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: u.bg,
              tooltipBorderColor: u.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
            trafficBarEchart: {
              gradientFrom: u.warningLight,
              gradientTo: u.warning,
              shadow: u.warningLight,
              shadowBlur: '0',
              axisTextColor: u.fgText,
              axisFontSize: '12',
              tooltipBg: u.bg,
              tooltipBorderColor: u.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
              tooltipTextColor: u.fgText,
              tooltipFontWeight: 'normal',
            },
            countryOrders: {
              countryBorderColor: u.border4,
              countryFillColor: u.bg3,
              countryBorderWidth: '1',
              hoveredCountryBorderColor: u.primary,
              hoveredCountryFillColor: u.primaryLight,
              hoveredCountryBorderWidth: '1',
              chartAxisLineColor: u.border4,
              chartAxisTextColor: u.fg,
              chartAxisFontSize: '16',
              chartGradientTo: u.primary,
              chartGradientFrom: u.primaryLight,
              chartAxisSplitLine: u.separator,
              chartShadowLineColor: u.primaryLight,
              chartLineBottomShadowColor: u.primary,
              chartInnerLineColor: u.bg2,
            },
            echarts: {
              bg: u.bg,
              textColor: u.fgText,
              axisLineColor: u.fgText,
              splitLineColor: u.separator,
              itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
              tooltipBackgroundColor: u.primary,
              areaOpacity: '0.7',
            },
            chartjs: { axisLineColor: u.separator, textColor: u.fgText },
            orders: {
              tooltipBg: u.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '0',
              tooltipBorderColor: u.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: u.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: u.border4,
              axisFontSize: '16',
              axisTextColor: u.fg,
              yAxisSplitLine: u.separator,
              itemBorderColor: u.primary,
              lineStyle: 'solid',
              lineWidth: '4',
              firstAreaGradFrom: u.bg3,
              firstAreaGradTo: u.bg3,
              firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: u.primary,
              secondLineGradTo: u.primary,
              secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
              secondAreaGradTo: 'rgba(51, 102, 255, 0)',
              secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: u.success,
              thirdLineGradTo: u.successLight,
              thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
              thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
              thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            },
            profit: {
              bg: u.bg,
              textColor: u.fgText,
              axisLineColor: u.border4,
              splitLineColor: u.separator,
              areaOpacity: '1',
              axisFontSize: '16',
              axisTextColor: u.fg,
              firstLineGradFrom: u.bg3,
              firstLineGradTo: u.bg3,
              firstLineShadow: 'rgba(0, 0, 0, 0)',
              secondLineGradFrom: u.primary,
              secondLineGradTo: u.primary,
              secondLineShadow: 'rgba(0, 0, 0, 0)',
              thirdLineGradFrom: u.success,
              thirdLineGradTo: u.successLight,
              thirdLineShadow: 'rgba(0, 0, 0, 0)',
            },
            orderProfitLegend: { firstItem: u.success, secondItem: u.primary, thirdItem: u.bg3 },
            visitors: {
              tooltipBg: u.bg,
              tooltipLineColor: 'rgba(0, 0, 0, 0)',
              tooltipLineWidth: '0',
              tooltipBorderColor: u.border2,
              tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
              tooltipTextColor: u.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '20',
              axisLineColor: u.border4,
              axisFontSize: '16',
              axisTextColor: u.fg,
              yAxisSplitLine: u.separator,
              itemBorderColor: u.primary,
              lineStyle: 'dotted',
              lineWidth: '6',
              lineGradFrom: '#ffffff',
              lineGradTo: '#ffffff',
              lineShadow: 'rgba(0, 0, 0, 0)',
              areaGradFrom: u.primary,
              areaGradTo: u.primaryLight,
              innerLineStyle: 'solid',
              innerLineWidth: '1',
              innerAreaGradFrom: u.success,
              innerAreaGradTo: u.success,
            },
            visitorsLegend: { firstIcon: u.success, secondIcon: u.primary },
            visitorsPie: {
              firstPieGradientLeft: u.success,
              firstPieGradientRight: u.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              firstPieRadius: ['70%', '90%'],
              secondPieGradientLeft: u.warning,
              secondPieGradientRight: u.warningLight,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieRadius: ['60%', '97%'],
              shadowOffsetX: '0',
              shadowOffsetY: '0',
            },
            visitorsPieLegend: { firstSection: u.warning, secondSection: u.success },
            earningPie: {
              radius: ['65%', '100%'],
              center: ['50%', '50%'],
              fontSize: '22',
              firstPieGradientLeft: u.success,
              firstPieGradientRight: u.success,
              firstPieShadowColor: 'rgba(0, 0, 0, 0)',
              secondPieGradientLeft: u.primary,
              secondPieGradientRight: u.primary,
              secondPieShadowColor: 'rgba(0, 0, 0, 0)',
              thirdPieGradientLeft: u.warning,
              thirdPieGradientRight: u.warning,
              thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
            },
            earningLine: {
              gradFrom: u.primary,
              gradTo: u.primary,
              tooltipTextColor: u.fgText,
              tooltipFontWeight: 'normal',
              tooltipFontSize: '16',
              tooltipBg: u.bg,
              tooltipBorderColor: u.border2,
              tooltipBorderWidth: '1',
              tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            },
          },
        };
      r.d(e, 'a', function () {
        return f;
      });
      const m = [
        n.X,
        n.db,
        n.Ib,
        n.n,
        n.lb,
        n.pb,
        n.F,
        a.c,
        n.v,
        n.nb,
        n.O,
        i.a,
        n.ab,
        n.hb,
        n.A,
        n.Gb,
      ];
      let f = (() => {
        class t {
          static forRoot() {
            return {
              ngModule: t,
              providers: [...n.Ab.forRoot({ name: 'default' }, [d, h, p, b]).providers],
            };
          }
        }
        return (
          (t.ɵmod = s['\u0275\u0275defineNgModule']({ type: t })),
          (t.ɵinj = s['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[o.c, ...m], o.c],
          })),
          t
        );
      })();
    },
    zUnb: function (t, e, r) {
      'use strict';
      r.r(e);
      var o = r('fXoL'),
        n = r('AytR'),
        i = r('tR1z'),
        a = r('jhN1'),
        s = r('R1ws'),
        c = r('tk/3'),
        d = r('ofXK'),
        l = r('McNs'),
        h = r('lWTH'),
        g = r('LRne'),
        p = r('vC38'),
        u = r('IzEk'),
        b = r('XqQ8'),
        m = r('nwtg');
      let f = (() => {
        class t {
          constructor(t) {
            this.authService = t;
          }
          intercept(t, e) {
            return this.authService.getUser().pipe(
              Object(u.a)(1),
              Object(b.a)((r) => {
                if (!r) return e.handle(t);
                const o = 'Bearer ' + this.authService.getUserToken(),
                  n = t.clone({ headers: t.headers.append('Authorization', o) });
                return e.handle(n);
              })
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(o['\u0275\u0275inject'](m.a));
          }),
          (t.ɵprov = o['\u0275\u0275defineInjectable']({ token: t, factory: t.ɵfac })),
          t
        );
      })();
      const C = [
        h.c.forRoot({
          accessControl: {
            guest: { view: '*' },
            user: { parent: 'guest', create: '*', edit: '*', remove: '*' },
          },
        }).providers,
        {
          provide: h.b,
          useClass: class extends h.b {
            getRole() {
              return Object(g.a)('guest');
            }
          },
        },
        p.a,
        p.b,
        p.c,
        p.d,
      ];
      let x = (() => {
        class t {
          constructor(t) {
            !(function (t, e) {
              if (t)
                throw new Error(
                  'CoreModule has already been loaded. Import Core modules in the AppModule only.'
                );
            })(t);
          }
          static forRoot() {
            return { ngModule: t, providers: [...C] };
          }
        }
        return (
          (t.ɵmod = o['\u0275\u0275defineNgModule']({ type: t })),
          (t.ɵinj = o['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || t)(o['\u0275\u0275inject'](t, 12));
            },
            providers: [{ provide: c.a, useClass: f, multi: !0 }],
            imports: [[d.c], l.a],
          })),
          t
        );
      })();
      var y = r('vTDv'),
        S = r('BoUZ'),
        O = r('coMT'),
        P = r('tyNb');
      let v = (() => {
        class t {
          constructor(t, e, r) {
            (this.analytics = t), (this.seoService = e), (this.authService = r);
          }
          ngOnInit() {
            this.analytics.trackPageViews(), this.seoService.trackCanonicalChanges();
            const t = JSON.parse(localStorage.getItem('userData'));
            t && this.authService.autoLogin(t);
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(
              o['\u0275\u0275directiveInject'](S.a),
              o['\u0275\u0275directiveInject'](O.a),
              o['\u0275\u0275directiveInject'](m.a)
            );
          }),
          (t.ɵcmp = o['\u0275\u0275defineComponent']({
            type: t,
            selectors: [['ngx-app']],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && o['\u0275\u0275element'](0, 'router-outlet');
            },
            directives: [P.h],
            encapsulation: 2,
          })),
          t
        );
      })();
      var L = r('lJxs');
      let w = (() => {
          class t {
            constructor(t, e) {
              (this.authService = t), (this.router = e);
            }
            canActivate(t, e) {
              return this.authService.getUser().pipe(
                Object(u.a)(1),
                Object(L.a)(
                  (t) => (
                    localStorage.getItem('userData') || this.authService.removeUser(),
                    !t ||
                      this.router.createUrlTree(
                        'admin' === t.userRole
                          ? ['/admin']
                          : 'institute' === t.userRole
                          ? ['/institute']
                          : 'employee' === t.userRole
                          ? ['/employee']
                          : 'student' === t.userRole
                          ? ['/student']
                          : ['/']
                      )
                  )
                )
              );
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](m.a), o['\u0275\u0275inject'](P.c));
            }),
            (t.ɵprov = o['\u0275\u0275defineInjectable']({
              token: t,
              factory: t.ɵfac,
              providedIn: 'root',
            })),
            t
          );
        })(),
        T = (() => {
          class t {
            constructor(t, e) {
              (this.authService = t), (this.router = e);
            }
            canActivate(t, e) {
              return this.authService.getUser().pipe(
                Object(u.a)(1),
                Object(L.a)(
                  (t) => !(!t || 'student' !== t.userRole) || this.router.createUrlTree(['/login'])
                )
              );
            }
            canActivateChild(t, e) {
              return this.canActivate(t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](m.a), o['\u0275\u0275inject'](P.c));
            }),
            (t.ɵprov = o['\u0275\u0275defineInjectable']({
              token: t,
              factory: t.ɵfac,
              providedIn: 'root',
            })),
            t
          );
        })(),
        M = (() => {
          class t {
            constructor(t, e) {
              (this.authService = t), (this.router = e);
            }
            canActivate(t, e) {
              return this.authService.getUser().pipe(
                Object(u.a)(1),
                Object(L.a)(
                  (t) => !(!t || 'employee' !== t.userRole) || this.router.createUrlTree(['/login'])
                )
              );
            }
            canActivateChild(t, e) {
              return this.canActivate(t, e);
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(o['\u0275\u0275inject'](m.a), o['\u0275\u0275inject'](P.c));
            }),
            (t.ɵprov = o['\u0275\u0275defineInjectable']({
              token: t,
              factory: t.ɵfac,
              providedIn: 'root',
            })),
            t
          );
        })();
      const B = [
          {
            path: 'admin',
            loadChildren: () =>
              r
                .e(50)
                .then(r.bind(null, 'jkDv'))
                .then((t) => t.AdminModule),
            canActivate: [],
          },
          {
            path: 'institute',
            loadChildren: () =>
              Promise.all([r.e(1), r.e(48)])
                .then(r.bind(null, 'V0SI'))
                .then((t) => t.InstituteModule),
            canActivate: [
              (() => {
                class t {
                  constructor(t, e) {
                    (this.authService = t), (this.router = e);
                  }
                  canActivate(t, e) {
                    return this.authService.getUser().pipe(
                      Object(u.a)(1),
                      Object(L.a)(
                        (t) =>
                          !(!t || 'institute' !== t.userRole) ||
                          this.router.createUrlTree(['/login'])
                      )
                    );
                  }
                  canActivateChild(t, e) {
                    return this.canActivate(t, e);
                  }
                }
                return (
                  (t.ɵfac = function (e) {
                    return new (e || t)(o['\u0275\u0275inject'](m.a), o['\u0275\u0275inject'](P.c));
                  }),
                  (t.ɵprov = o['\u0275\u0275defineInjectable']({
                    token: t,
                    factory: t.ɵfac,
                    providedIn: 'root',
                  })),
                  t
                );
              })(),
            ],
          },
          {
            path: 'employee',
            loadChildren: () =>
              Promise.all([r.e(1), r.e(45)])
                .then(r.bind(null, 'PgJR'))
                .then((t) => t.EmployeeModule),
            canActivate: [M],
          },
          {
            path: 'student',
            loadChildren: () =>
              Promise.all([r.e(1), r.e(49)])
                .then(r.bind(null, 'ejW6'))
                .then((t) => t.StudentModule),
            canActivate: [T],
          },
          {
            path: '',
            loadChildren: () =>
              r
                .e(60)
                .then(r.bind(null, 'lehC'))
                .then((t) => t.ContentModule),
            canActivate: [w],
          },
          { path: '**', redirectTo: '/' },
        ],
        _ = { useHash: !0, relativeLinkResolution: 'corrected' };
      let j = (() => {
        class t {}
        return (
          (t.ɵmod = o['\u0275\u0275defineNgModule']({ type: t })),
          (t.ɵinj = o['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [[P.g.forRoot(B, _)], P.g],
          })),
          t
        );
      })();
      var F = r('aceb');
      let G = (() => {
        class t {}
        return (
          (t.ɵmod = o['\u0275\u0275defineNgModule']({ type: t, bootstrap: [v] })),
          (t.ɵinj = o['\u0275\u0275defineInjector']({
            factory: function (e) {
              return new (e || t)();
            },
            imports: [
              [
                a.a,
                s.a,
                c.c,
                j,
                i.a,
                F.pb.forRoot(),
                F.db.forRoot(),
                F.G.forRoot(),
                F.H.forRoot(),
                F.Jb.forRoot(),
                F.Cb.forRoot(),
                F.B.forRoot({ messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY' }),
                x.forRoot(),
                y.a.forRoot(),
              ],
            ],
          })),
          t
        );
      })();
      n.a.production && Object(o.enableProdMode)(),
        a
          .c()
          .bootstrapModule(G)
          .catch((t) => console.error(t));
    },
  },
  [[0, 5, 39]],
]);
