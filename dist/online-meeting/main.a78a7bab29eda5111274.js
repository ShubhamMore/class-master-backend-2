(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, r) {
      t.exports = r('zUnb');
    },
    zUnb: function (t, e, r) {
      'use strict';
      r.r(e);
      var n = r('fXoL');
      const o = '';
      var i = r('jhN1'),
        s = r('tk/3'),
        a = r('tyNb');
      let c = (() => {
        class t {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          (t.ɵcmp = n.xb({
            type: t,
            selectors: [['app-root']],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && n.Eb(0, 'router-outlet');
            },
            directives: [a.c],
            styles: [''],
          })),
          t
        );
      })();
      var b = r('ofXK'),
        l = r('3hj0'),
        u = r('lJxs'),
        p = r('JIr8'),
        h = r('z6cu');
      let g = (() => {
        class t {
          constructor(t) {
            this.http = t;
          }
          httpGet(t) {
            return this.http.get(o + t.api).pipe(
              Object(u.a)((t) => t),
              Object(p.a)((t) => {
                let e = 'SOMETHING BAD HAPPENED';
                return (
                  t.error &&
                    (e =
                      'object' == typeof t.error
                        ? "Can't Reach Server.., Please Try Again"
                        : t.error),
                  Object(h.a)(e)
                );
              })
            );
          }
          httpPost(t) {
            return this.http.post(o + t.api, t.data).pipe(
              Object(u.a)((t) => t),
              Object(p.a)((t) => {
                let e = 'SOMETHING BAD HAPPENED';
                return (
                  t.error &&
                    (e =
                      'object' == typeof t.error
                        ? "Can't Reach Server.., Please Try Again"
                        : t.error),
                  Object(h.a)(e)
                );
              })
            );
          }
          httpPatch(t) {
            return this.http.patch(o + t.api, t.data).pipe(
              Object(u.a)((t) => t),
              Object(p.a)((t) => {
                let e = 'SOMETHING BAD HAPPENED';
                return (
                  t.error &&
                    (e =
                      'object' == typeof t.error
                        ? "Can't Reach Server.., Please Try Again"
                        : t.error),
                  Object(h.a)(e)
                );
              })
            );
          }
          httpPut(t) {
            return this.http.put(o + t.api, t.data).pipe(
              Object(u.a)((t) => t),
              Object(p.a)((t) => {
                let e = 'SOMETHING BAD HAPPENED';
                return (
                  t.error &&
                    (e =
                      'object' == typeof t.error
                        ? "Can't Reach Server.., Please Try Again"
                        : t.error),
                  Object(h.a)(e)
                );
              })
            );
          }
          httpDelete(t) {
            return this.http.delete(o + t.api, t.data).pipe(
              Object(u.a)((t) => t),
              Object(p.a)((t) => {
                let e = 'SOMETHING BAD HAPPENED';
                return (
                  t.error &&
                    (e =
                      'object' == typeof t.error
                        ? "Can't Reach Server.., Please Try Again"
                        : t.error),
                  Object(h.a)(e)
                );
              })
            );
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(n.Jb(s.a));
          }),
          (t.ɵprov = n.zb({ token: t, factory: t.ɵfac, providedIn: 'root' })),
          t
        );
      })();
      function d(t, e) {
        if (1 & t) {
          const t = n.Hb();
          n.Gb(0, 'main'),
            n.Gb(1, 'h1'),
            n.Wb(2, 'Class Master Online Zoom Meeting'),
            n.Fb(),
            n.Gb(3, 'button', 3),
            n.Lb('click', function () {
              return n.Rb(t), n.Nb(2).startMeeting();
            }),
            n.Wb(4),
            n.Fb(),
            n.Eb(5, 'br'),
            n.Eb(6, 'br'),
            n.Gb(7, 'span'),
            n.Wb(8, 'or'),
            n.Fb(),
            n.Eb(9, 'br'),
            n.Gb(10, 'a', 4),
            n.Wb(11),
            n.Fb(),
            n.Fb();
        }
        if (2 & t) {
          const t = n.Nb(2);
          n.ub(4),
            n.Yb('', 1 === t.meeting.role ? 'Start' : 'Join', ' Meeting'),
            n.ub(6),
            n.Ob('href', t.meeting.startUrl, n.Sb),
            n.ub(1),
            n.Yb('Click Here to ', 1 === t.meeting.role ? 'Start' : 'Join', ' Meeting');
        }
      }
      function f(t, e) {
        if ((1 & t && (n.Gb(0, 'div'), n.Ub(1, d, 12, 3, 'main', 0), n.Fb()), 2 & t)) {
          const t = n.Nb(),
            e = n.Qb(4);
          n.ub(1), n.Ob('ngIf', !t.error)('ngIfElse', e);
        }
      }
      function m(t, e) {
        1 & t && (n.Gb(0, 'h2', 5), n.Wb(1, 'Loading...'), n.Fb());
      }
      function v(t, e) {
        if ((1 & t && (n.Gb(0, 'h2', 6), n.Wb(1), n.Fb()), 2 & t)) {
          const t = n.Nb();
          n.ub(1), n.Xb(t.error);
        }
      }
      l.ZoomMtg.preLoadWasm(), l.ZoomMtg.prepareJssdk();
      const O = [
          {
            path: 'live',
            component: (() => {
              class t {
                constructor(t, e, r, n) {
                  (this.httpClient = t), (this.route = r), (this.httpService = n);
                }
                ngOnInit() {
                  (this.loading = !0),
                    this.route.queryParams.subscribe((t) => {
                      (this.lecture = t.lecture),
                        (this.user = t.user),
                        (this.error = this.lecture
                          ? this.user
                            ? null
                            : 'Invalid User'
                          : 'Invalid Lecture'),
                        this.error
                          ? (this.loading = !1)
                          : ((this.apiKey = '-e4wJMiURO-i3gr436TgsQ'),
                            (this.leaveUrl = `/online-meeting/#/live?lecture=${this.lecture}&user=${this.user}`),
                            console.log(this.leaveUrl),
                            this.getSignature());
                    });
                }
                getSignature() {
                  (this.loading = !0),
                    this.httpService
                      .httpPost({
                        api: '/getZoomMeetingSignature',
                        data: { lecture: this.lecture, user: this.user },
                      })
                      .subscribe(
                        (t) => {
                          t.meetingNumber
                            ? (this.meeting = t)
                            : (this.error = 'Invalid Meeting Id'),
                            (this.loading = !1);
                        },
                        (t) => {
                          (this.error = t), (this.loading = !1);
                        }
                      );
                }
                startMeeting() {
                  (document.getElementById('zmmtg-root').style.display = 'block'),
                    l.ZoomMtg.init({
                      leaveUrl: this.leaveUrl,
                      isSupportAV: !0,
                      success: (t) => {
                        (this.error = null),
                          l.ZoomMtg.join({
                            signature: this.meeting.signature,
                            meetingNumber: +this.meeting.meetingNumber,
                            userName: this.meeting.userName,
                            apiKey: this.apiKey,
                            userEmail: this.meeting.userEmail,
                            passWord: this.meeting.password,
                            success: (t) => {
                              console.log(t);
                            },
                            error: (t) => {
                              console.log(t);
                            },
                          });
                      },
                      error: (t) => {
                        console.log(t);
                      },
                    });
                }
              }
              return (
                (t.ɵfac = function (e) {
                  return new (e || t)(n.Db(s.a), n.Db(b.c), n.Db(a.a), n.Db(g));
                }),
                (t.ɵcmp = n.xb({
                  type: t,
                  selectors: [['app-live']],
                  decls: 5,
                  vars: 2,
                  consts: [
                    [4, 'ngIf', 'ngIfElse'],
                    ['loadingData', ''],
                    ['showError', ''],
                    [3, 'click'],
                    [3, 'href'],
                    [1, 'pt-5', 'pb-5', 'text-center'],
                    [1, 'pt-5', 'pb-5', 'text-center', 'text-danger'],
                  ],
                  template: function (t, e) {
                    if (
                      (1 & t &&
                        (n.Ub(0, f, 2, 2, 'div', 0),
                        n.Ub(1, m, 2, 0, 'ng-template', null, 1, n.Vb),
                        n.Ub(3, v, 2, 1, 'ng-template', null, 2, n.Vb)),
                      2 & t)
                    ) {
                      const t = n.Qb(2);
                      n.Ob('ngIf', !e.loading)('ngIfElse', t);
                    }
                  },
                  directives: [b.h],
                  styles: [
                    'main[_ngcontent-%COMP%]{width:70%;margin:auto;text-align:center}button[_ngcontent-%COMP%]{margin-top:20px;background-color:#2d8cff;color:#fff;text-decoration:none;padding:10px 40px;display:inline-block;border-radius:10px}button[_ngcontent-%COMP%]:hover{background-color:#2681f2}',
                  ],
                })),
                t
              );
            })(),
            canActivate: [],
          },
          { path: '', redirectTo: 'live', pathMatch: 'full' },
          { path: '**', redirectTo: 'live' },
        ],
        y = { useHash: !0, relativeLinkResolution: 'corrected' };
      let E = (() => {
          class t {}
          return (
            (t.ɵmod = n.Bb({ type: t })),
            (t.ɵinj = n.Ab({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[a.b.forRoot(O, y)], a.b],
            })),
            t
          );
        })(),
        j = (() => {
          class t {}
          return (
            (t.ɵmod = n.Bb({ type: t, bootstrap: [c] })),
            (t.ɵinj = n.Ab({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[i.a, s.b, E]],
            })),
            t
          );
        })();
      Object(n.R)(),
        i
          .b()
          .bootstrapModule(j)
          .catch((t) => console.error(t));
    },
    zn8P: function (t, e) {
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
        (r.id = 'zn8P');
    },
  },
  [[0, 0, 4]],
]);
