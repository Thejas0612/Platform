!(function (t) {
  var e = {};
  function i(s) {
    if (e[s]) return e[s].exports;
    var n = (e[s] = { i: s, l: !1, exports: {} });
    return t[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = t),
  (i.c = e),
  (i.d = function (t, e, s) {
    i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
  }),
  (i.r = function (t) {
    'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
    Object.defineProperty(t, "__esModule", { value: !0 });
  }),
  (i.t = function (t, e) {
    if ((1 & e && (t = i(t)), 8 & e)) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var s = Object.create(null);
    if (
      (i.r(s),
      Object.defineProperty(s, "default", { enumerable: !0, value: t }),
      2 & e && "string" != typeof t)
    )
      for (var n in t)
        i.d(
          s,
          n,
          function (e) {
            return t[e];
          }.bind(null, n)
        );
    return s;
  }),
  (i.n = function (t) {
    var e =
        t && t.__esModule
          ? function () {
            return t.default;
          }
          : function () {
            return t;
          };
    return i.d(e, "a", e), e;
  }),
  (i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }),
  (i.p = ""),
  i((i.s = 0));
})([
  function (t, e, i) {
    "use strict";
    i.r(e),
    i.d(e, "DDLBigFeature", function () {
      return nt;
    });
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const s =
        window.ShadowRoot &&
        (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
        "adoptedStyleSheets" in Document.prototype &&
        "replace" in CSSStyleSheet.prototype,
      n = Symbol(),
      r = new Map();
    class o {
      constructor(t, e) {
        if (((this._$cssResult$ = !0), e !== n))
          throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t;
      }
      get styleSheet() {
        let t = r.get(this.cssText);
        return (
          s &&
            void 0 === t &&
            (r.set(this.cssText, (t = new CSSStyleSheet())), t.replaceSync(this.cssText)),
          t
        );
      }
      toString() {
        return this.cssText;
      }
    }
    const l = s
      ? (t) => t
      : (t) =>
        t instanceof CSSStyleSheet
          ? ((t) => {
            let e = "";
            for (const i of t.cssRules) e += i.cssText;
            return ((t) => new o("string" == typeof t ? t : t + "", n))(e);
          })(t)
          : t;
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */ var h;
    const a = window.trustedTypes,
      d = a ? a.emptyScript : "",
      c = window.reactiveElementPolyfillSupport,
      u = {
        toAttribute(t, e) {
          switch (e) {
          case Boolean:
            t = t ? d : null;
            break;
          case Object:
          case Array:
            t = null == t ? t : JSON.stringify(t);
          }
          return t;
        },
        fromAttribute(t, e) {
          let i = t;
          switch (e) {
          case Boolean:
            i = null !== t;
            break;
          case Number:
            i = null === t ? null : Number(t);
            break;
          case Object:
          case Array:
            try {
              i = JSON.parse(t);
            } catch (t) {
              i = null;
            }
          }
          return i;
        }
      },
      p = (t, e) => e !== t && (e == e || t == t),
      v = { attribute: !0, type: String, converter: u, reflect: !1, hasChanged: p };
    class $ extends HTMLElement {
      constructor() {
        super(),
        (this._$Et = new Map()),
        (this.isUpdatePending = !1),
        (this.hasUpdated = !1),
        (this._$Ei = null),
        this.o();
      }
      static addInitializer(t) {
        var e;
        (null !== (e = this.l) && void 0 !== e) || (this.l = []), this.l.push(t);
      }
      static get observedAttributes() {
        this.finalize();
        const t = [];
        return (
          this.elementProperties.forEach((e, i) => {
            const s = this._$Eh(i, e);
            void 0 !== s && (this._$Eu.set(s, i), t.push(s));
          }),
          t
        );
      }
      static createProperty(t, e = v) {
        if (
          (e.state && (e.attribute = !1),
          this.finalize(),
          this.elementProperties.set(t, e),
          !e.noAccessor && !this.prototype.hasOwnProperty(t))
        ) {
          const i = "symbol" == typeof t ? Symbol() : "__" + t,
            s = this.getPropertyDescriptor(t, i, e);
          void 0 !== s && Object.defineProperty(this.prototype, t, s);
        }
      }
      static getPropertyDescriptor(t, e, i) {
        return {
          get() {
            return this[e];
          },
          set(s) {
            const n = this[t];
            (this[e] = s), this.requestUpdate(t, n, i);
          },
          configurable: !0,
          enumerable: !0
        };
      }
      static getPropertyOptions(t) {
        return this.elementProperties.get(t) || v;
      }
      static finalize() {
        if (this.hasOwnProperty("finalized")) return !1;
        this.finalized = !0;
        const t = Object.getPrototypeOf(this);
        if (
          (t.finalize(),
          (this.elementProperties = new Map(t.elementProperties)),
          (this._$Eu = new Map()),
          this.hasOwnProperty("properties"))
        ) {
          const t = this.properties,
            e = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
          for (const i of e) this.createProperty(i, t[i]);
        }
        return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
      }
      static finalizeStyles(t) {
        const e = [];
        if (Array.isArray(t)) {
          const i = new Set(t.flat(1 / 0).reverse());
          for (const t of i) e.unshift(l(t));
        } else void 0 !== t && e.push(l(t));
        return e;
      }
      static _$Eh(t, e) {
        const i = e.attribute;
        return !1 === i
          ? void 0
          : "string" == typeof i
            ? i
            : "string" == typeof t
              ? t.toLowerCase()
              : void 0;
      }
      o() {
        var t;
        (this._$Ep = new Promise((t) => (this.enableUpdating = t))),
        (this._$AL = new Map()),
        this._$Em(),
        this.requestUpdate(),
        null === (t = this.constructor.l) || void 0 === t || t.forEach((t) => t(this));
      }
      addController(t) {
        var e, i;
        (null !== (e = this._$Eg) && void 0 !== e ? e : (this._$Eg = [])).push(t),
        void 0 !== this.renderRoot &&
            this.isConnected &&
            (null === (i = t.hostConnected) || void 0 === i || i.call(t));
      }
      removeController(t) {
        var e;
        null === (e = this._$Eg) || void 0 === e || e.splice(this._$Eg.indexOf(t) >>> 0, 1);
      }
      _$Em() {
        this.constructor.elementProperties.forEach((t, e) => {
          this.hasOwnProperty(e) && (this._$Et.set(e, this[e]), delete this[e]);
        });
      }
      createRenderRoot() {
        var t;
        const e =
          null !== (t = this.shadowRoot) && void 0 !== t
            ? t
            : this.attachShadow(this.constructor.shadowRootOptions);
        return (
          (i = e),
          (n = this.constructor.elementStyles),
          s
            ? (i.adoptedStyleSheets = n.map((t) => (t instanceof CSSStyleSheet ? t : t.styleSheet)))
            : n.forEach((t) => {
              const e = document.createElement("style"),
                s = window.litNonce;
              void 0 !== s && e.setAttribute("nonce", s),
              (e.textContent = t.cssText),
              i.appendChild(e);
            }),
          e
        );
        var i, n;
      }
      connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
        this.enableUpdating(!0),
        null === (t = this._$Eg) ||
            void 0 === t ||
            t.forEach((t) => {
              var e;
              return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t);
            });
      }
      enableUpdating(t) {}
      disconnectedCallback() {
        var t;
        null === (t = this._$Eg) ||
          void 0 === t ||
          t.forEach((t) => {
            var e;
            return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t);
          });
      }
      attributeChangedCallback(t, e, i) {
        this._$AK(t, i);
      }
      _$ES(t, e, i = v) {
        var s, n;
        const r = this.constructor._$Eh(t, i);
        if (void 0 !== r && !0 === i.reflect) {
          const o = (
            null !== (n = null === (s = i.converter) || void 0 === s ? void 0 : s.toAttribute) &&
              void 0 !== n
              ? n
              : u.toAttribute
          )(e, i.type);
          (this._$Ei = t),
          null == o ? this.removeAttribute(r) : this.setAttribute(r, o),
          (this._$Ei = null);
        }
      }
      _$AK(t, e) {
        var i, s, n;
        const r = this.constructor,
          o = r._$Eu.get(t);
        if (void 0 !== o && this._$Ei !== o) {
          const t = r.getPropertyOptions(o),
            l = t.converter,
            h =
              null !==
                (n =
                  null !== (s = null === (i = l) || void 0 === i ? void 0 : i.fromAttribute) &&
                  void 0 !== s
                    ? s
                    : "function" == typeof l
                      ? l
                      : null) && void 0 !== n
                ? n
                : u.fromAttribute;
          (this._$Ei = o), (this[o] = h(e, t.type)), (this._$Ei = null);
        }
      }
      requestUpdate(t, e, i) {
        let s = !0;
        void 0 !== t &&
          (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || p)(this[t], e)
            ? (this._$AL.has(t) || this._$AL.set(t, e),
            !0 === i.reflect &&
                this._$Ei !== t &&
                (void 0 === this._$E_ && (this._$E_ = new Map()), this._$E_.set(t, i)))
            : (s = !1)),
        !this.isUpdatePending && s && (this._$Ep = this._$EC());
      }
      async _$EC() {
        this.isUpdatePending = !0;
        try {
          await this._$Ep;
        } catch (t) {
          Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && (await t), !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated,
        this._$Et && (this._$Et.forEach((t, e) => (this[e] = t)), (this._$Et = void 0));
        let e = !1;
        const i = this._$AL;
        try {
          (e = this.shouldUpdate(i)),
          e
            ? (this.willUpdate(i),
            null === (t = this._$Eg) ||
                  void 0 === t ||
                  t.forEach((t) => {
                    var e;
                    return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t);
                  }),
            this.update(i))
            : this._$EU();
        } catch (t) {
          throw ((e = !1), this._$EU(), t);
        }
        e && this._$AE(i);
      }
      willUpdate(t) {}
      _$AE(t) {
        var e;
        null === (e = this._$Eg) ||
          void 0 === e ||
          e.forEach((t) => {
            var e;
            return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t);
          }),
        this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
        this.updated(t);
      }
      _$EU() {
        (this._$AL = new Map()), (this.isUpdatePending = !1);
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$Ep;
      }
      shouldUpdate(t) {
        return !0;
      }
      update(t) {
        void 0 !== this._$E_ &&
          (this._$E_.forEach((t, e) => this._$ES(e, this[e], t)), (this._$E_ = void 0)),
        this._$EU();
      }
      updated(t) {}
      firstUpdated(t) {}
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var _;
    ($.finalized = !0),
    ($.elementProperties = new Map()),
    ($.elementStyles = []),
    ($.shadowRootOptions = { mode: "open" }),
    null == c || c({ ReactiveElement: $ }),
    (null !== (h = globalThis.reactiveElementVersions) && void 0 !== h
      ? h
      : (globalThis.reactiveElementVersions = [])
    ).push("1.2.1");
    const f = globalThis.trustedTypes,
      A = f ? f.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
      y = `lit$${(Math.random() + "").slice(9)}$`,
      g = "?" + y,
      m = `<${g}>`,
      b = document,
      E = (t = "") => b.createComment(t),
      S = (t) => null === t || ("object" != typeof t && "function" != typeof t),
      w = Array.isArray,
      C = (t) => {
        var e;
        return (
          w(t) ||
          "function" == typeof (null === (e = t) || void 0 === e ? void 0 : e[Symbol.iterator])
        );
      },
      x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
      P = /-->/g,
      U = />/g,
      H = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
      T = /'/g,
      O = /"/g,
      M = /^(?:script|style|textarea)$/i,
      N =
        (t) =>
          (e, ...i) => ({ _$litType$: t, strings: e, values: i }),
      R = N(1),
      k = (N(2), Symbol.for("lit-noChange")),
      L = Symbol.for("lit-nothing"),
      j = new WeakMap(),
      D = b.createTreeWalker(b, 129, null, !1),
      B = (t, e) => {
        const i = t.length - 1,
          s = [];
        let n,
          r = 2 === e ? "<svg>" : "",
          o = x;
        for (let e = 0; e < i; e++) {
          const i = t[e];
          let l,
            h,
            a = -1,
            d = 0;
          for (; d < i.length && ((o.lastIndex = d), (h = o.exec(i)), null !== h); )
            (d = o.lastIndex),
            o === x
              ? "!--" === h[1]
                ? (o = P)
                : void 0 !== h[1]
                  ? (o = U)
                  : void 0 !== h[2]
                    ? (M.test(h[2]) && (n = RegExp("</" + h[2], "g")), (o = H))
                    : void 0 !== h[3] && (o = H)
              : o === H
                ? ">" === h[0]
                  ? ((o = null != n ? n : x), (a = -1))
                  : void 0 === h[1]
                    ? (a = -2)
                    : ((a = o.lastIndex - h[2].length),
                    (l = h[1]),
                    (o = void 0 === h[3] ? H : "\"" === h[3] ? O : T))
                : o === O || o === T
                  ? (o = H)
                  : o === P || o === U
                    ? (o = x)
                    : ((o = H), (n = void 0));
          const c = o === H && t[e + 1].startsWith("/>") ? " " : "";
          r +=
            o === x
              ? i + m
              : a >= 0
                ? (s.push(l), i.slice(0, a) + "$lit$" + i.slice(a) + y + c)
                : i + y + (-2 === a ? (s.push(void 0), e) : c);
        }
        const l = r + (t[i] || "<?>") + (2 === e ? "</svg>" : "");
        if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return [void 0 !== A ? A.createHTML(l) : l, s];
      };
    class z {
      constructor({ strings: t, _$litType$: e }, i) {
        let s;
        this.parts = [];
        let n = 0,
          r = 0;
        const o = t.length - 1,
          l = this.parts,
          [h, a] = B(t, e);
        if (((this.el = z.createElement(h, i)), (D.currentNode = this.el.content), 2 === e)) {
          const t = this.el.content,
            e = t.firstChild;
          e.remove(), t.append(...e.childNodes);
        }
        for (; null !== (s = D.nextNode()) && l.length < o; ) {
          if (1 === s.nodeType) {
            if (s.hasAttributes()) {
              const t = [];
              for (const e of s.getAttributeNames())
                if (e.endsWith("$lit$") || e.startsWith(y)) {
                  const i = a[r++];
                  if ((t.push(e), void 0 !== i)) {
                    const t = s.getAttribute(i.toLowerCase() + "$lit$").split(y),
                      e = /([.?@])?(.*)/.exec(i);
                    l.push({
                      type: 1,
                      index: n,
                      name: e[2],
                      strings: t,
                      ctor: "." === e[1] ? J : "?" === e[1] ? Z : "@" === e[1] ? F : W
                    });
                  } else l.push({ type: 6, index: n });
                }
              for (const e of t) s.removeAttribute(e);
            }
            if (M.test(s.tagName)) {
              const t = s.textContent.split(y),
                e = t.length - 1;
              if (e > 0) {
                s.textContent = f ? f.emptyScript : "";
                for (let i = 0; i < e; i++)
                  s.append(t[i], E()), D.nextNode(), l.push({ type: 2, index: ++n });
                s.append(t[e], E());
              }
            }
          } else if (8 === s.nodeType)
            if (s.data === g) l.push({ type: 2, index: n });
            else {
              let t = -1;
              for (; -1 !== (t = s.data.indexOf(y, t + 1)); )
                l.push({ type: 7, index: n }), (t += y.length - 1);
            }
          n++;
        }
      }
      static createElement(t, e) {
        const i = b.createElement("template");
        return (i.innerHTML = t), i;
      }
    }
    function I(t, e, i = t, s) {
      var n, r, o, l;
      if (e === k) return e;
      let h = void 0 !== s ? (null === (n = i._$Cl) || void 0 === n ? void 0 : n[s]) : i._$Cu;
      const a = S(e) ? void 0 : e._$litDirective$;
      return (
        (null == h ? void 0 : h.constructor) !== a &&
          (null === (r = null == h ? void 0 : h._$AO) || void 0 === r || r.call(h, !1),
          void 0 === a ? (h = void 0) : ((h = new a(t)), h._$AT(t, i, s)),
          void 0 !== s
            ? ((null !== (o = (l = i)._$Cl) && void 0 !== o ? o : (l._$Cl = []))[s] = h)
            : (i._$Cu = h)),
        void 0 !== h && (e = I(t, h._$AS(t, e.values), h, s)),
        e
      );
    }
    class V {
      constructor(t, e) {
        (this.v = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      p(t) {
        var e;
        const {
            el: { content: i },
            parts: s
          } = this._$AD,
          n = (
            null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : b
          ).importNode(i, !0);
        D.currentNode = n;
        let r = D.nextNode(),
          o = 0,
          l = 0,
          h = s[0];
        for (; void 0 !== h; ) {
          if (o === h.index) {
            let e;
            2 === h.type
              ? (e = new q(r, r.nextSibling, this, t))
              : 1 === h.type
                ? (e = new h.ctor(r, h.name, h.strings, this, t))
                : 6 === h.type && (e = new G(r, this, t)),
            this.v.push(e),
            (h = s[++l]);
          }
          o !== (null == h ? void 0 : h.index) && ((r = D.nextNode()), o++);
        }
        return n;
      }
      m(t) {
        let e = 0;
        for (const i of this.v)
          void 0 !== i &&
            (void 0 !== i.strings ? (i._$AI(t, i, e), (e += i.strings.length - 2)) : i._$AI(t[e])),
          e++;
      }
    }
    class q {
      constructor(t, e, i, s) {
        var n;
        (this.type = 2),
        (this._$AH = L),
        (this._$AN = void 0),
        (this._$AA = t),
        (this._$AB = e),
        (this._$AM = i),
        (this.options = s),
        (this._$Cg = null === (n = null == s ? void 0 : s.isConnected) || void 0 === n || n);
      }
      get _$AU() {
        var t, e;
        return null !== (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
          void 0 !== e
          ? e
          : this._$Cg;
      }
      get parentNode() {
        let t = this._$AA.parentNode;
        const e = this._$AM;
        return void 0 !== e && 11 === t.nodeType && (t = e.parentNode), t;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t, e = this) {
        (t = I(this, t, e)),
        S(t)
          ? t === L || null == t || "" === t
            ? (this._$AH !== L && this._$AR(), (this._$AH = L))
            : t !== this._$AH && t !== k && this.$(t)
          : void 0 !== t._$litType$
            ? this.T(t)
            : void 0 !== t.nodeType
              ? this.S(t)
              : C(t)
                ? this.A(t)
                : this.$(t);
      }
      M(t, e = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, e);
      }
      S(t) {
        this._$AH !== t && (this._$AR(), (this._$AH = this.M(t)));
      }
      $(t) {
        this._$AH !== L && S(this._$AH)
          ? (this._$AA.nextSibling.data = t)
          : this.S(b.createTextNode(t)),
        (this._$AH = t);
      }
      T(t) {
        var e;
        const { values: i, _$litType$: s } = t,
          n =
            "number" == typeof s
              ? this._$AC(t)
              : (void 0 === s.el && (s.el = z.createElement(s.h, this.options)), s);
        if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === n) this._$AH.m(i);
        else {
          const t = new V(n, this),
            e = t.p(this.options);
          t.m(i), this.S(e), (this._$AH = t);
        }
      }
      _$AC(t) {
        let e = j.get(t.strings);
        return void 0 === e && j.set(t.strings, (e = new z(t))), e;
      }
      A(t) {
        w(this._$AH) || ((this._$AH = []), this._$AR());
        const e = this._$AH;
        let i,
          s = 0;
        for (const n of t)
          s === e.length
            ? e.push((i = new q(this.M(E()), this.M(E()), this, this.options)))
            : (i = e[s]),
          i._$AI(n),
          s++;
        s < e.length && (this._$AR(i && i._$AB.nextSibling, s), (e.length = s));
      }
      _$AR(t = this._$AA.nextSibling, e) {
        var i;
        for (
          null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, e);
          t && t !== this._$AB;

        ) {
          const e = t.nextSibling;
          t.remove(), (t = e);
        }
      }
      setConnected(t) {
        var e;
        void 0 === this._$AM &&
          ((this._$Cg = t), null === (e = this._$AP) || void 0 === e || e.call(this, t));
      }
    }
    class W {
      constructor(t, e, i, s, n) {
        (this.type = 1),
        (this._$AH = L),
        (this._$AN = void 0),
        (this.element = t),
        (this.name = e),
        (this._$AM = s),
        (this.options = n),
        i.length > 2 || "" !== i[0] || "" !== i[1]
          ? ((this._$AH = Array(i.length - 1).fill(new String())), (this.strings = i))
          : (this._$AH = L);
      }
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t, e = this, i, s) {
        const n = this.strings;
        let r = !1;
        if (void 0 === n)
          (t = I(this, t, e, 0)), (r = !S(t) || (t !== this._$AH && t !== k)), r && (this._$AH = t);
        else {
          const s = t;
          let o, l;
          for (t = n[0], o = 0; o < n.length - 1; o++)
            (l = I(this, s[i + o], e, o)),
            l === k && (l = this._$AH[o]),
            r || (r = !S(l) || l !== this._$AH[o]),
            l === L ? (t = L) : t !== L && (t += (null != l ? l : "") + n[o + 1]),
            (this._$AH[o] = l);
        }
        r && !s && this.k(t);
      }
      k(t) {
        t === L
          ? this.element.removeAttribute(this.name)
          : this.element.setAttribute(this.name, null != t ? t : "");
      }
    }
    class J extends W {
      constructor() {
        super(...arguments), (this.type = 3);
      }
      k(t) {
        this.element[this.name] = t === L ? void 0 : t;
      }
    }
    const K = f ? f.emptyScript : "";
    class Z extends W {
      constructor() {
        super(...arguments), (this.type = 4);
      }
      k(t) {
        t && t !== L
          ? this.element.setAttribute(this.name, K)
          : this.element.removeAttribute(this.name);
      }
    }
    class F extends W {
      constructor(t, e, i, s, n) {
        super(t, e, i, s, n), (this.type = 5);
      }
      _$AI(t, e = this) {
        var i;
        if ((t = null !== (i = I(this, t, e, 0)) && void 0 !== i ? i : L) === k) return;
        const s = this._$AH,
          n =
            (t === L && s !== L) ||
            t.capture !== s.capture ||
            t.once !== s.once ||
            t.passive !== s.passive,
          r = t !== L && (s === L || n);
        n && this.element.removeEventListener(this.name, this, s),
        r && this.element.addEventListener(this.name, this, t),
        (this._$AH = t);
      }
      handleEvent(t) {
        var e, i;
        "function" == typeof this._$AH
          ? this._$AH.call(
            null !== (i = null === (e = this.options) || void 0 === e ? void 0 : e.host) &&
                void 0 !== i
              ? i
              : this.element,
            t
          )
          : this._$AH.handleEvent(t);
      }
    }
    class G {
      constructor(t, e, i) {
        (this.element = t),
        (this.type = 6),
        (this._$AN = void 0),
        (this._$AM = e),
        (this.options = i);
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t) {
        I(this, t);
      }
    }
    const Q = window.litHtmlPolyfillSupport;
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var X, Y;
    null == Q || Q(z, q),
    (null !== (_ = globalThis.litHtmlVersions) && void 0 !== _
      ? _
      : (globalThis.litHtmlVersions = [])
    ).push("2.1.2");
    class tt extends $ {
      constructor() {
        super(...arguments), (this.renderOptions = { host: this }), (this._$Dt = void 0);
      }
      createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return (
          (null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t) ||
            (e.renderBefore = i.firstChild),
          i
        );
      }
      update(t) {
        const e = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        (this._$Dt = ((t, e, i) => {
          var s, n;
          const r = null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s ? s : e;
          let o = r._$litPart$;
          if (void 0 === o) {
            const t =
                null !== (n = null == i ? void 0 : i.renderBefore) && void 0 !== n ? n : null;
            r._$litPart$ = o = new q(e.insertBefore(E(), t), t, void 0, null != i ? i : {});
          }
          return o._$AI(t), o;
        })(e, this.renderRoot, this.renderOptions));
      }
      connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!0);
      }
      disconnectedCallback() {
        var t;
        super.disconnectedCallback(),
        null === (t = this._$Dt) || void 0 === t || t.setConnected(!1);
      }
      render() {
        return k;
      }
    }
    (tt.finalized = !0),
    (tt._$litElement$ = !0),
    null === (X = globalThis.litElementHydrateSupport) ||
        void 0 === X ||
        X.call(globalThis, { LitElement: tt });
    const et = globalThis.litElementPolyfillSupport;
    null == et || et({ LitElement: tt });
    (null !== (Y = globalThis.litElementVersions) && void 0 !== Y
      ? Y
      : (globalThis.litElementVersions = [])
    ).push("3.1.2");
    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var it;
    null === (it = window.HTMLSlotElement) || void 0 === it || it.prototype.assignedElements;
    var st = function (t, e, i, s) {
      var n,
        r = arguments.length,
        o = r < 3 ? e : null === s ? (s = Object.getOwnPropertyDescriptor(e, i)) : s;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        o = Reflect.decorate(t, e, i, s);
      else
        for (var l = t.length - 1; l >= 0; l--)
          (n = t[l]) && (o = (r < 3 ? n(o) : r > 3 ? n(e, i, o) : n(e, i)) || o);
      return r > 3 && o && Object.defineProperty(e, i, o), o;
    };
    let nt = class extends tt {
      constructor() {
        super(), this.addEventListener("click", this.buttonClickHandler);
      }
      buttonClickHandler(t) {
        const e = this.querySelector(".play-button");
        if (t.target === e) {
          e.style.display = "none";
          const t = this.querySelector("img");
          t && (t.style.display = "none"),
          this.removeEventListener("click", this.buttonClickHandler);
        }
      }
      render() {
        return R`
        <slot></slot>
    `;
      }
    };
    var rt;
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */ nt = st(
      [
        ((rt = "ddl-big-feature"),
        (t) =>
          "function" == typeof t
            ? ((t, e) => (window.customElements.define(t, e), e))(rt, t)
            : ((t, e) => {
              const { kind: i, elements: s } = e;
              return {
                kind: i,
                elements: s,
                finisher(e) {
                  window.customElements.define(t, e);
                }
              };
            })(rt, t))
      ],
      nt
    );
  }
]);
