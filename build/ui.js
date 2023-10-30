(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function h(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function p(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, t3) {
    var i3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? i3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return d(l3, f3, i3, o3, null);
  }
  function d(n2, t3, i3, o3, r3) {
    var f3 = { type: n2, props: t3, key: i3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function k(n2) {
    return n2.children;
  }
  function b(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function g(n2, l3) {
    if (null == l3)
      return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__d || u3.__e;
    return "function" == typeof n2.type ? g(n2) : null;
  }
  function m(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return m(n2);
    }
  }
  function w(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n2, l3, u3, t3, o3, r3, e3, c3, s3;
    for (i.sort(f); n2 = i.shift(); )
      n2.__d && (l3 = i.length, t3 = void 0, o3 = void 0, r3 = void 0, c3 = (e3 = (u3 = n2).__v).__e, (s3 = u3.__P) && (t3 = [], o3 = [], (r3 = h({}, e3)).__v = e3.__v + 1, z(s3, e3, r3, u3.__n, void 0 !== s3.ownerSVGElement, null != e3.__h ? [c3] : null, t3, null == c3 ? g(e3) : c3, e3.__h, o3), L(t3, e3, o3), e3.__e != c3 && m(e3)), i.length > l3 && i.sort(f));
    x.__r = 0;
  }
  function P(n2, l3, u3, t3, i3, o3, r3, f3, e3, a3, h3) {
    var p3, y2, _2, b3, m3, w3, x2, P2, C2, D2 = 0, H2 = t3 && t3.__k || s, I2 = H2.length, T3 = I2, j3 = l3.length;
    for (u3.__k = [], p3 = 0; p3 < j3; p3++)
      null != (b3 = u3.__k[p3] = null == (b3 = l3[p3]) || "boolean" == typeof b3 || "function" == typeof b3 ? null : "string" == typeof b3 || "number" == typeof b3 || "bigint" == typeof b3 ? d(null, b3, null, null, b3) : v(b3) ? d(k, { children: b3 }, null, null, null) : b3.__b > 0 ? d(b3.type, b3.props, b3.key, b3.ref ? b3.ref : null, b3.__v) : b3) ? (b3.__ = u3, b3.__b = u3.__b + 1, -1 === (P2 = A(b3, H2, x2 = p3 + D2, T3)) ? _2 = c : (_2 = H2[P2] || c, H2[P2] = void 0, T3--), z(n2, b3, _2, i3, o3, r3, f3, e3, a3, h3), m3 = b3.__e, (y2 = b3.ref) && _2.ref != y2 && (_2.ref && N(_2.ref, null, b3), h3.push(y2, b3.__c || m3, b3)), null != m3 && (null == w3 && (w3 = m3), (C2 = _2 === c || null === _2.__v) ? -1 == P2 && D2-- : P2 !== x2 && (P2 === x2 + 1 ? D2++ : P2 > x2 ? T3 > j3 - x2 ? D2 += P2 - x2 : D2-- : D2 = P2 < x2 && P2 == x2 - 1 ? P2 - x2 : 0), x2 = p3 + D2, "function" != typeof b3.type || P2 === x2 && _2.__k !== b3.__k ? "function" == typeof b3.type || P2 === x2 && !C2 ? void 0 !== b3.__d ? (e3 = b3.__d, b3.__d = void 0) : e3 = m3.nextSibling : e3 = S(n2, m3, e3) : e3 = $(b3, e3, n2), "function" == typeof u3.type && (u3.__d = e3))) : (_2 = H2[p3]) && null == _2.key && _2.__e && (_2.__e == e3 && (_2.__ = t3, e3 = g(_2)), O(_2, _2, false), H2[p3] = null);
    for (u3.__e = w3, p3 = I2; p3--; )
      null != H2[p3] && ("function" == typeof u3.type && null != H2[p3].__e && H2[p3].__e == u3.__d && (u3.__d = H2[p3].__e.nextSibling), O(H2[p3], H2[p3]));
  }
  function $(n2, l3, u3) {
    for (var t3, i3 = n2.__k, o3 = 0; i3 && o3 < i3.length; o3++)
      (t3 = i3[o3]) && (t3.__ = n2, l3 = "function" == typeof t3.type ? $(t3, l3, u3) : S(u3, t3.__e, l3));
    return l3;
  }
  function C(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (v(n2) ? n2.some(function(n3) {
      C(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function S(n2, l3, u3) {
    return null == u3 || u3.parentNode !== n2 ? n2.insertBefore(l3, null) : l3 == u3 && null != l3.parentNode || n2.insertBefore(l3, u3), l3.nextSibling;
  }
  function A(n2, l3, u3, t3) {
    var i3 = n2.key, o3 = n2.type, r3 = u3 - 1, f3 = u3 + 1, e3 = l3[u3];
    if (null === e3 || e3 && i3 == e3.key && o3 === e3.type)
      return u3;
    if (t3 > (null != e3 ? 1 : 0))
      for (; r3 >= 0 || f3 < l3.length; ) {
        if (r3 >= 0) {
          if ((e3 = l3[r3]) && i3 == e3.key && o3 === e3.type)
            return r3;
          r3--;
        }
        if (f3 < l3.length) {
          if ((e3 = l3[f3]) && i3 == e3.key && o3 === e3.type)
            return f3;
          f3++;
        }
      }
    return -1;
  }
  function D(n2, l3, u3, t3, i3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || I(n2, o3, null, u3[o3], t3);
    for (o3 in l3)
      i3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || I(n2, o3, l3[o3], u3[o3], t3);
  }
  function H(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function I(n2, l3, u3, t3, i3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
            for (l3 in t3)
              u3 && l3 in u3 || H(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              t3 && u3[l3] === t3[l3] || H(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/(PointerCapture)$|Capture$/, "$1")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = Date.now(), n2.addEventListener(l3, o3 ? j : T, o3)) : n2.removeEventListener(l3, o3 ? j : T, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (i3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && "rowSpan" !== l3 && "colSpan" !== l3 && "role" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function T(n2) {
    var u3 = this.l[n2.type + false];
    if (n2.t) {
      if (n2.t <= u3.u)
        return;
    } else
      n2.t = Date.now();
    return u3(l.event ? l.event(n2) : n2);
  }
  function j(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function z(n2, u3, t3, i3, o3, r3, f3, e3, c3, s3) {
    var a3, p3, y2, d3, _2, g3, m3, w3, x2, $2, C2, S2, A2, D2, H2, I2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != t3.__h && (c3 = t3.__h, e3 = u3.__e = t3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
    n:
      if ("function" == typeof I2)
        try {
          if (w3 = u3.props, x2 = (a3 = I2.contextType) && i3[a3.__c], $2 = a3 ? x2 ? x2.props.value : a3.__ : i3, t3.__c ? m3 = (p3 = u3.__c = t3.__c).__ = p3.__E : ("prototype" in I2 && I2.prototype.render ? u3.__c = p3 = new I2(w3, $2) : (u3.__c = p3 = new b(w3, $2), p3.constructor = I2, p3.render = q), x2 && x2.sub(p3), p3.props = w3, p3.state || (p3.state = {}), p3.context = $2, p3.__n = i3, y2 = p3.__d = true, p3.__h = [], p3._sb = []), null == p3.__s && (p3.__s = p3.state), null != I2.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = h({}, p3.__s)), h(p3.__s, I2.getDerivedStateFromProps(w3, p3.__s))), d3 = p3.props, _2 = p3.state, p3.__v = u3, y2)
            null == I2.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && w3 !== d3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(w3, $2), !p3.__e && (null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(w3, p3.__s, $2) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (p3.props = w3, p3.state = p3.__s, p3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), C2 = 0; C2 < p3._sb.length; C2++)
                p3.__h.push(p3._sb[C2]);
              p3._sb = [], p3.__h.length && f3.push(p3);
              break n;
            }
            null != p3.componentWillUpdate && p3.componentWillUpdate(w3, p3.__s, $2), null != p3.componentDidUpdate && p3.__h.push(function() {
              p3.componentDidUpdate(d3, _2, g3);
            });
          }
          if (p3.context = $2, p3.props = w3, p3.__P = n2, p3.__e = false, S2 = l.__r, A2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (p3.state = p3.__s, p3.__d = false, S2 && S2(u3), a3 = p3.render(p3.props, p3.state, p3.context), D2 = 0; D2 < p3._sb.length; D2++)
              p3.__h.push(p3._sb[D2]);
            p3._sb = [];
          } else
            do {
              p3.__d = false, S2 && S2(u3), a3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
            } while (p3.__d && ++A2 < 25);
          p3.state = p3.__s, null != p3.getChildContext && (i3 = h(h({}, i3), p3.getChildContext())), y2 || null == p3.getSnapshotBeforeUpdate || (g3 = p3.getSnapshotBeforeUpdate(d3, _2)), P(n2, v(H2 = null != a3 && a3.type === k && null == a3.key ? a3.props.children : a3) ? H2 : [H2], u3, t3, i3, o3, r3, f3, e3, c3, s3), p3.base = u3.__e, u3.__h = null, p3.__h.length && f3.push(p3), m3 && (p3.__E = p3.__ = null);
        } catch (n3) {
          u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, t3);
        }
      else
        null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = M(t3.__e, u3, t3, i3, o3, r3, f3, c3, s3);
    (a3 = l.diffed) && a3(u3);
  }
  function L(n2, u3, t3) {
    for (var i3 = 0; i3 < t3.length; i3++)
      N(t3[i3], t3[++i3], t3[++i3]);
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function M(l3, u3, t3, i3, o3, r3, f3, e3, s3) {
    var a3, h3, y2, d3 = t3.props, _2 = u3.props, k3 = u3.type, b3 = 0;
    if ("svg" === k3 && (o3 = true), null != r3) {
      for (; b3 < r3.length; b3++)
        if ((a3 = r3[b3]) && "setAttribute" in a3 == !!k3 && (k3 ? a3.localName === k3 : 3 === a3.nodeType)) {
          l3 = a3, r3[b3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === k3)
        return document.createTextNode(_2);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", k3) : document.createElement(k3, _2.is && _2), r3 = null, e3 = false;
    }
    if (null === k3)
      d3 === _2 || e3 && l3.data === _2 || (l3.data = _2);
    else {
      if (r3 = r3 && n.call(l3.childNodes), h3 = (d3 = t3.props || c).dangerouslySetInnerHTML, y2 = _2.dangerouslySetInnerHTML, !e3) {
        if (null != r3)
          for (d3 = {}, b3 = 0; b3 < l3.attributes.length; b3++)
            d3[l3.attributes[b3].name] = l3.attributes[b3].value;
        (y2 || h3) && (y2 && (h3 && y2.__html == h3.__html || y2.__html === l3.innerHTML) || (l3.innerHTML = y2 && y2.__html || ""));
      }
      if (D(l3, _2, d3, o3, e3), y2)
        u3.__k = [];
      else if (P(l3, v(b3 = u3.props.children) ? b3 : [b3], u3, t3, i3, o3 && "foreignObject" !== k3, r3, f3, r3 ? r3[0] : t3.__k && g(t3, 0), e3, s3), null != r3)
        for (b3 = r3.length; b3--; )
          null != r3[b3] && p(r3[b3]);
      e3 || ("value" in _2 && void 0 !== (b3 = _2.value) && (b3 !== l3.value || "progress" === k3 && !b3 || "option" === k3 && b3 !== d3.value) && I(l3, "value", b3, d3.value, false), "checked" in _2 && void 0 !== (b3 = _2.checked) && b3 !== l3.checked && I(l3, "checked", b3, d3.checked, false));
    }
    return l3;
  }
  function N(n2, u3, t3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, t3);
    }
  }
  function O(n2, u3, t3) {
    var i3, o3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || N(i3, null, u3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount)
        try {
          i3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      i3.base = i3.__P = null, n2.__c = void 0;
    }
    if (i3 = n2.__k)
      for (o3 = 0; o3 < i3.length; o3++)
        i3[o3] && O(i3[o3], u3, t3 || "function" != typeof n2.type);
    t3 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, t3, i3) {
    var o3, r3, f3, e3;
    l.__ && l.__(u3, t3), r3 = (o3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, f3 = [], e3 = [], z(t3, u3 = (!o3 && i3 || t3).__k = y(k, null, [u3]), r3 || c, c, void 0 !== t3.ownerSVGElement, !o3 && i3 ? [i3] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o3 && i3 ? i3 : r3 ? r3.__e : t3.firstChild, o3, e3), L(f3, u3, e3);
  }
  var n, l, u, t, i, o, r, f, e, c, s, a, v;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      c = {};
      s = [];
      a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      v = Array.isArray;
      n = s.slice, l = { __e: function(n2, l3, u3, t3) {
        for (var i3, o3, r3; l3 = l3.__; )
          if ((i3 = l3.__c) && !i3.__)
            try {
              if ((o3 = i3.constructor) && null != o3.getDerivedStateFromError && (i3.setState(o3.getDerivedStateFromError(n2)), r3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), r3 = i3.__d), r3)
                return i3.__E = i3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, t = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, b.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), w(this));
      }, b.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
      }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, x.__r = 0, e = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function p2(u3, i3) {
    var o3 = d2(t2++, 3);
    !l.__s && z2(o3.__H, i3) && (o3.__ = u3, o3.i = i3, r2.__H.__h.push(o3));
  }
  function _(n2) {
    return o2 = 5, F(function() {
      return { current: n2 };
    }, []);
  }
  function F(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F(function() {
      return n2;
    }, t3);
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [], t2 = 0)), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/254d88d3-768e-4201-9c0a-8e12140ed46e/loading-indicator.module.js
  var loading_indicator_module_default;
  var init_loading_indicator_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/254d88d3-768e-4201-9c0a-8e12140ed46e/loading-indicator.module.js"() {
      if (document.getElementById("b456d8bce7") === null) {
        const element = document.createElement("style");
        element.id = "b456d8bce7";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_module_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return y(
      "div",
      __spreadProps(__spreadValues({}, rest), { class: loading_indicator_module_default.loadingIndicator }),
      y(
        "svg",
        { class: loading_indicator_module_default.svg, style: typeof color === "undefined" ? void 0 : {
          fill: `var(--figma-color-icon-${color})`
        } },
        y("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })
      )
    );
  }
  var init_loading_indicator = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_loading_indicator_module();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/e1b9d224-4e3d-47ad-8bfa-f84b93793866/button.module.js
  var button_module_default;
  var init_button_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/e1b9d224-4e3d-47ad-8bfa-f84b93793866/button.module.js"() {
      if (document.getElementById("0fe45ce862") === null) {
        const element = document.createElement("style");
        element.id = "0fe45ce862";
        element.textContent = `._button_5fxgc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_5fxgc_7 {
  display: block;
}

._button_5fxgc_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
}

._disabled_5fxgc_17 button {
  cursor: not-allowed;
}

._fullWidth_5fxgc_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_5fxgc_29 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
  line-height: 28px;
}
._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-brand-strong);
}
._default_5fxgc_29._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_5fxgc_56 button {
  padding: 0 15px;
  border: 1px solid var(--figma-color-border-strong);
  background-color: transparent;
  color: var(--figma-color-text);
  line-height: 30px;
}
._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
  line-height: 28px;
}
._secondary_5fxgc_56._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_5fxgc_86 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_5fxgc_29 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-onbrand);
}
._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text);
}
._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._children_5fxgc_122 {
  display: inline;
}
._loading_5fxgc_86 ._children_5fxgc_122 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDZDQUE2QztFQUM3QyxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLGdEQUFnRDtFQUNoRCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9EQUFvRDtFQUNwRCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxxREFBcUQ7QUFDdkQ7QUFDQTtFQUNFLHVEQUF1RDtFQUN2RCx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24ubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZ1bGxXaWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnV0dG9uIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTYpO1xufVxuXG4uZGlzYWJsZWQgYnV0dG9uIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZ1bGxXaWR0aCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGVmYXVsdCBidXR0b24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1icmFuZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uYnJhbmQpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5kZWZhdWx0Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGFuZ2VyKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kYW5nZXIpO1xufVxuLmRlZmF1bHQuZGFuZ2VyOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xufVxuLmRlZmF1bHQuZGFuZ2VyLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRpc2FibGVkKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItc3Ryb25nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLnNlY29uZGFyeS5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xufVxuLnNlY29uZGFyeS5kYW5nZXI6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGFuZ2VyLXN0cm9uZyk7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kZWZhdWx0IC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRhbmdlcik7XG59XG4uZGVmYXVsdC5kYW5nZXIuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLnNlY29uZGFyeSAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubG9hZGluZyAuY2hpbGRyZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_module_default = { "button": "_button_5fxgc_1", "fullWidth": "_fullWidth_5fxgc_7", "disabled": "_disabled_5fxgc_17", "default": "_default_5fxgc_29", "danger": "_danger_5fxgc_44", "secondary": "_secondary_5fxgc_56", "loadingIndicator": "_loadingIndicator_5fxgc_86", "children": "_children_5fxgc_122", "loading": "_loading_5fxgc_86" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return y(
      "div",
      { class: createClassName([
        button_module_default.button,
        secondary === true ? button_module_default.secondary : button_module_default.default,
        danger === true ? button_module_default.danger : null,
        fullWidth === true ? button_module_default.fullWidth : null,
        disabled === true ? button_module_default.disabled : null,
        loading === true ? button_module_default.loading : null
      ]) },
      loading === true ? y(
        "div",
        { class: button_module_default.loadingIndicator },
        y(LoadingIndicator, null)
      ) : null,
      y(
        "button",
        __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }),
        y("div", { class: button_module_default.children }, children)
      )
    );
  }
  var init_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator();
      init_button_module();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/0dcdadc5-2149-4528-bf8e-bb616d0843f4/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/0dcdadc5-2149-4528-bf8e-bb616d0843f4/icon.module.js"() {
      if (document.getElementById("b1db16f347") === null) {
        const element = document.createElement("style");
        element.id = "b1db16f347";
        element.textContent = `._icon_13804_1 {
  fill: currentColor;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_module_default = { "icon": "_icon_13804_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return function Icon(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return y(
        "svg",
        __spreadProps(__spreadValues({}, rest), { class: icon_module_default.icon, height, style: typeof color === "undefined" ? void 0 : {
          fill: `var(--figma-color-icon-${color})`
        }, width, xmlns: "http://www.w3.org/2000/svg" }),
        y("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" })
      );
    };
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js"() {
      init_preact_module();
      init_icon_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-12/icon-control-checkbox-checked-12.js
  var IconControlCheckboxChecked12;
  var init_icon_control_checkbox_checked_12 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-12/icon-control-checkbox-checked-12.js"() {
      init_create_icon();
      IconControlCheckboxChecked12 = createIcon("m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024l1.17647-1.17647Z", { height: 12, width: 12 });
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/7004589c-d9ca-48d4-a17a-cf40c98e4fc3/checkbox.module.js
  var checkbox_module_default;
  var init_checkbox_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/7004589c-d9ca-48d4-a17a-cf40c98e4fc3/checkbox.module.js"() {
      if (document.getElementById("50b1a0e101") === null) {
        const element = document.createElement("style");
        element.id = "50b1a0e101";
        element.textContent = `._checkbox_1a43f_1 {
  position: relative;
  z-index: var(--z-index-1);
}

._input_1a43f_6 {
  position: absolute;
  z-index: var(
    --z-index-1
  ); /* stack \`.input\` over all other elements within \`.checkbox\` */
  top: -8px;
  right: -16px;
  bottom: -8px;
  left: -16px;
  display: block;
  width: calc(100% + 32px);
}
._disabled_1a43f_18 ._input_1a43f_6 {
  cursor: not-allowed;
}

._fill_1a43f_22,
._border_1a43f_23 {
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  border-radius: var(--border-radius-2);
}

._border_1a43f_23 {
  border: 1px solid var(--figma-color-border-strong);
}
._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:focus ~ ._border_1a43f_23 {
  border-color: var(--figma-color-border-brand-strong);
  box-shadow: 0 0 0 1px var(--figma-color-border-brand-strong);
}
._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked ~ ._border_1a43f_23 {
  border: 0;
}
._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked:focus ~ ._border_1a43f_23 {
  box-shadow: 0 0 0 1px var(--figma-color-bg),
    0 0 0 2px var(--figma-color-border-brand-strong);
}
._disabled_1a43f_18 ._input_1a43f_6 ~ ._border_1a43f_23 {
  border-color: var(--figma-color-border-disabled-strong);
}
._disabled_1a43f_18 ._input_1a43f_6:checked ~ ._border_1a43f_23 {
  border: 0;
}

._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked ~ ._fill_1a43f_22 {
  background-color: var(--figma-color-bg-brand);
}
._disabled_1a43f_18 ._input_1a43f_6:checked ~ ._fill_1a43f_22 {
  background-color: var(--figma-color-bg-disabled);
}

._checkIcon_1a43f_60 {
  color: var(--figma-color-icon-onbrand);
}
._disabled_1a43f_18 ._checkIcon_1a43f_60 {
  color: var(--figma-color-icon-ondisabled);
}

._children_1a43f_67 {
  min-height: 12px;
  padding: 2px 0 0 20px;
  color: var(--figma-color-text);
}
._disabled_1a43f_18 ._children_1a43f_67 {
  opacity: var(--opacity-30);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7R0FFQyxFQUFFLDhEQUE4RDtFQUNqRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxvREFBb0Q7RUFDcEQsNERBQTREO0FBQzlEO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFO29EQUNrRDtBQUNwRDtBQUNBO0VBQ0UsdURBQXVEO0FBQ3pEO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbn1cblxuLmlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiB2YXIoXG4gICAgLS16LWluZGV4LTFcbiAgKTsgLyogc3RhY2sgYC5pbnB1dGAgb3ZlciBhbGwgb3RoZXIgZWxlbWVudHMgd2l0aGluIGAuY2hlY2tib3hgICovXG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC0xNnB4O1xuICBib3R0b206IC04cHg7XG4gIGxlZnQ6IC0xNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xufVxuLmRpc2FibGVkIC5pbnB1dCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5maWxsLFxuLmJvcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLXN0cm9uZyk7XG59XG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmZvY3VzIH4gLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItYnJhbmQtc3Ryb25nKTtcbn1cbi5jaGVja2JveDpub3QoLmRpc2FibGVkKSAuaW5wdXQ6Y2hlY2tlZCB+IC5ib3JkZXIge1xuICBib3JkZXI6IDA7XG59XG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmNoZWNrZWQ6Zm9jdXMgfiAuYm9yZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHZhcigtLWZpZ21hLWNvbG9yLWJnKSxcbiAgICAwIDAgMCAycHggdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGlzYWJsZWQgLmlucHV0IH4gLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkLXN0cm9uZyk7XG59XG4uZGlzYWJsZWQgLmlucHV0OmNoZWNrZWQgfiAuYm9yZGVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmNoZWNrZWQgfiAuZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQ6Y2hlY2tlZCB+IC5maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGlzYWJsZWQpO1xufVxuXG4uY2hlY2tJY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGlzYWJsZWQgLmNoZWNrSWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBtaW4taGVpZ2h0OiAxMnB4O1xuICBwYWRkaW5nOiAycHggMCAwIDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuY2hpbGRyZW4ge1xuICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      checkbox_module_default = { "checkbox": "_checkbox_1a43f_1", "input": "_input_1a43f_6", "disabled": "_disabled_1a43f_18", "fill": "_fill_1a43f_22", "border": "_border_1a43f_23", "checkIcon": "_checkIcon_1a43f_60", "children": "_children_1a43f_67" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/checkbox/checkbox.js
  function Checkbox(_a) {
    var _b = _a, { children, disabled = false, name, onChange = function() {
    }, onValueChange = function() {
    }, propagateEscapeKeyDown = true, value = false } = _b, rest = __objRest(_b, ["children", "disabled", "name", "onChange", "onValueChange", "propagateEscapeKeyDown", "value"]);
    const handleChange = T2(function(event) {
      const newValue = event.currentTarget.checked;
      onValueChange(newValue, name);
      onChange(event);
    }, [name, onChange, onValueChange]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return y(
      "label",
      { class: createClassName([
        checkbox_module_default.checkbox,
        disabled === true ? checkbox_module_default.disabled : null
      ]) },
      y("input", __spreadProps(__spreadValues({}, rest), { checked: value === true, class: checkbox_module_default.input, disabled: disabled === true, name, onChange: handleChange, onKeyDown: handleKeyDown, tabIndex: disabled === true ? -1 : 0, type: "checkbox" })),
      y("div", { class: checkbox_module_default.fill }, value === true ? y(
        "div",
        { class: checkbox_module_default.checkIcon },
        y(IconControlCheckboxChecked12, null)
      ) : null),
      y("div", { class: checkbox_module_default.border }),
      y("div", { class: checkbox_module_default.children }, children)
    );
  }
  var init_checkbox = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/checkbox/checkbox.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_control_checkbox_checked_12();
      init_create_class_name();
      init_checkbox_module();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/2bf11019-b91b-4fed-ba60-913d6dd50177/icon-button.module.js
  var icon_button_module_default;
  var init_icon_button_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/2bf11019-b91b-4fed-ba60-913d6dd50177/icon-button.module.js"() {
      if (document.getElementById("d5250bb173") === null) {
        const element = document.createElement("style");
        element.id = "d5250bb173";
        element.textContent = `._iconButton_1bkfg_1 {
  position: relative;
  width: 30px;
  height: 30px;
  border: 2px solid transparent;
  border-radius: var(--border-radius-2);
}

._iconButton_1bkfg_1:not(:disabled) {
  color: var(--figma-color-icon);
}
._iconButton_1bkfg_1:not(:disabled):hover {
  background-color: var(--figma-color-bg-hover);
}
._iconButton_1bkfg_1:not(:disabled):focus {
  border-color: var(--figma-color-border-brand-strong);
}
._iconButton_1bkfg_1:disabled {
  color: var(--figma-color-icon-disabled);
  cursor: not-allowed;
}

._icon_1bkfg_1 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9pY29uLWJ1dHRvbi9pY29uLWJ1dHRvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25CdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xufVxuXG4uaWNvbkJ1dHRvbjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uKTtcbn1cbi5pY29uQnV0dG9uOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLmljb25CdXR0b246bm90KDpkaXNhYmxlZCk6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xufVxuLmljb25CdXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_button_module_default = { "iconButton": "_iconButton_1bkfg_1", "icon": "_icon_1bkfg_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/icon-button/icon-button.js
  function IconButton(_a) {
    var _b = _a, { children, disabled = false, onClick, propagateEscapeKeyDown = true } = _b, rest = __objRest(_b, ["children", "disabled", "onClick", "propagateEscapeKeyDown"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return y(
      "button",
      __spreadProps(__spreadValues({}, rest), { class: icon_button_module_default.iconButton, disabled: disabled === true, onClick: disabled === true ? void 0 : onClick, onKeyDown: disabled === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }),
      y("div", { class: icon_button_module_default.icon }, children)
    );
  }
  var init_icon_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/icon-button/icon-button.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_button_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-cross-32.js
  var IconCross32;
  var init_icon_cross_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-cross-32.js"() {
      init_create_icon();
      IconCross32 = createIcon("m16 15.293 4.6465-4.6464.7071.7071-4.6465 4.6464 4.6465 4.6465-.7071.7071L16 16.7073l-4.6464 4.6464-.7071-.7071 4.6464-4.6465-4.6464-4.6463.7071-.7071L16 15.293Z", { height: 32, width: 32 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/private/get-focusable-elements.js
  function getFocusableElements(rootElement) {
    const elements = (typeof rootElement === "undefined" ? document : rootElement).querySelectorAll(':not([disabled])[tabindex]:not([tabindex="-1"])');
    return Array.prototype.slice.call(elements);
  }
  var init_get_focusable_elements = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/private/get-focusable-elements.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/private/create-focus-trap-key-down-handler.js
  function createFocusTrapKeyDownHandler(rootElement) {
    return function(event) {
      if (event.key !== "Tab") {
        return;
      }
      event.preventDefault();
      const focusableElements = getFocusableElements(rootElement);
      if (focusableElements.length === 0) {
        return;
      }
      const index = findElementIndex(event.target, focusableElements);
      if (index === focusableElements.length - 1 && event.shiftKey === false) {
        focusableElements[0].focus();
        return;
      }
      if (index === 0 && event.shiftKey === true) {
        focusableElements[focusableElements.length - 1].focus();
        return;
      }
      focusableElements[event.shiftKey === true ? index - 1 : index + 1].focus();
    };
  }
  function findElementIndex(targetElement, elements) {
    return elements.reduce(function(result, element, index) {
      if (result === -1 && element.isSameNode(targetElement) === true) {
        return index;
      }
      return result;
    }, -1);
  }
  var init_create_focus_trap_key_down_handler = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/private/create-focus-trap-key-down-handler.js"() {
      init_get_focusable_elements();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/ec9d8ed7-33cd-47f5-b359-358dc4813692/text.module.js
  var text_module_default;
  var init_text_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/ec9d8ed7-33cd-47f5-b359-358dc4813692/text.module.js"() {
      if (document.getElementById("b1b65478a0") === null) {
        const element = document.createElement("style");
        element.id = "b1b65478a0";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      text_module_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  function Text(_a) {
    var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
      text_module_default.text,
      text_module_default[align],
      numeric === true ? text_module_default.numeric : null
    ]) }), children);
  }
  var init_text = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_text_module();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/05494382-db97-46ca-aef6-e1ac9d6c2106/modal.module.js
  var modal_module_default;
  var init_modal_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/05494382-db97-46ca-aef6-e1ac9d6c2106/modal.module.js"() {
      if (document.getElementById("e17c1c6313") === null) {
        const element = document.createElement("style");
        element.id = "e17c1c6313";
        element.textContent = `._modal_1pejl_1 {
  position: fixed;
  z-index: var(--z-index-2);
  display: flex;
  flex-direction: column;
  background-color: var(--figma-color-bg);
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
._noTransition_1pejl_10 {
  transition: none;
}

._center_1pejl_14 {
  top: 50%;
  left: 50%;
  border-radius: var(--border-radius-2);
  box-shadow: var(--box-shadow-modal);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition-property: opacity;
}
._open_1pejl_24._center_1pejl_14 {
  opacity: 1;
  pointer-events: all;
}

._bottom_1pejl_29 {
  top: 100%;
  left: 0;
  width: 100%;
}
._open_1pejl_24._bottom_1pejl_29 {
  box-shadow: var(--box-shadow-modal);
  transform: translate(0, -100%);
}

._left_1pejl_39 {
  top: 0;
  right: 100%;
  height: 100%;
}
._open_1pejl_24._left_1pejl_39 {
  box-shadow: var(--box-shadow-modal);
  transform: translate(100%, 0);
}

._right_1pejl_49 {
  top: 0;
  left: 100%;
  height: 100%;
}
._open_1pejl_24._right_1pejl_49 {
  box-shadow: var(--box-shadow-modal);
  transform: translate(-100%, 0);
}

._topBar_1pejl_59 {
  display: flex;
  min-height: 41px;
  align-items: center;
  order: -1;
  padding: 4px;
  border-color: var(--figma-color-border);
  border-bottom-width: 1px;
}

._closeButtonLeft_1pejl_69 {
  order: -1;
}

._title_1pejl_73 {
  flex-grow: 1;
  padding: 0 var(--space-extra-small);
}

._overlay_1pejl_78 {
  position: fixed;
  z-index: var(--z-index-1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5); /* FIXME */
  opacity: 0;
  pointer-events: none;
  transition: opacity ease 0.3s;
}
._open_1pejl_24 ~ ._overlay_1pejl_78 {
  opacity: 1;
  pointer-events: all;
}
._noTransition_1pejl_10 ~ ._overlay_1pejl_78 {
  transition: none;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVDQUF1QztFQUN2Qyx5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULHFDQUFxQztFQUNyQyxtQ0FBbUM7RUFDbkMsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0FBQ2I7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLE1BQU07RUFDTixVQUFVO0VBQ1YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLG9DQUFvQyxFQUFFLFVBQVU7RUFDaEQsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmcpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbn1cbi5ub1RyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4uY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1tb2RhbCk7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbn1cbi5vcGVuLmNlbnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5ib3R0b20ge1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9wZW4uYm90dG9tIHtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1tb2RhbCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDAlKTtcbn1cblxuLmxlZnQge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ub3Blbi5sZWZ0IHtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1tb2RhbCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApO1xufVxuXG4ucmlnaHQge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5vcGVuLnJpZ2h0IHtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdy1tb2RhbCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwKTtcbn1cblxuLnRvcEJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDQxcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9yZGVyOiAtMTtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbn1cblxuLmNsb3NlQnV0dG9uTGVmdCB7XG4gIG9yZGVyOiAtMTtcbn1cblxuLnRpdGxlIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBGSVhNRSAqL1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDAuM3M7XG59XG4ub3BlbiB+IC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbi5ub1RyYW5zaXRpb24gfiAub3ZlcmxheSB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      modal_module_default = { "modal": "_modal_1pejl_1", "noTransition": "_noTransition_1pejl_10", "center": "_center_1pejl_14", "open": "_open_1pejl_24", "bottom": "_bottom_1pejl_29", "left": "_left_1pejl_39", "right": "_right_1pejl_49", "topBar": "_topBar_1pejl_59", "closeButtonLeft": "_closeButtonLeft_1pejl_69", "title": "_title_1pejl_73", "overlay": "_overlay_1pejl_78" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/modal/modal.js
  function Modal(_a) {
    var _b = _a, { children, closeButtonIcon = y(IconCross32, null), closeButtonPosition = "right", open, noTransition = false, onCloseButtonClick, onEscapeKeyDown, onOverlayClick, position = "center", title } = _b, rest = __objRest(_b, ["children", "closeButtonIcon", "closeButtonPosition", "open", "noTransition", "onCloseButtonClick", "onEscapeKeyDown", "onOverlayClick", "position", "title"]);
    const rootElementRef = _(null);
    const previousFocusedElementRef = _(null);
    p2(function() {
      const rootElement = document.createElement("div");
      document.body.appendChild(rootElement);
      rootElementRef.current = rootElement;
      return function() {
        document.body.removeChild(rootElement);
      };
    }, []);
    p2(function() {
      if (rootElementRef.current === null) {
        throw new Error("`rootElementRef.current` is `null`");
      }
      const focusTrapKeyDownHandler = createFocusTrapKeyDownHandler(rootElementRef.current);
      function handleTabKeyDown(event) {
        if (open === true) {
          focusTrapKeyDownHandler(event);
        }
      }
      window.addEventListener("keydown", handleTabKeyDown);
      return function() {
        window.removeEventListener("keydown", handleTabKeyDown);
      };
    }, [open]);
    p2(function() {
      function handleEscapeKeyDown(event) {
        if (open === false || event.key !== "Escape" || typeof onEscapeKeyDown === "undefined" || rootElements[rootElements.length - 1] !== rootElementRef.current) {
          return;
        }
        onEscapeKeyDown(event);
      }
      window.addEventListener("keydown", handleEscapeKeyDown);
      return function() {
        window.removeEventListener("keydown", handleEscapeKeyDown);
      };
    }, [open, onEscapeKeyDown]);
    p2(function() {
      if (rootElementRef.current === null) {
        throw new Error("`rootElementRef.current` is `null`");
      }
      const bodyElement = document.body;
      if (open === true) {
        if (rootElements.length === 0) {
          const hasScrollbar = bodyElement.scrollHeight > window.innerHeight;
          bodyElement.style.cssText += `position:fixed;overflow-y:${hasScrollbar === true ? "scroll" : "hidden"};width:100%;`;
        }
        rootElements.push(rootElementRef.current);
        rootElementRef.current.style.cssText = "position:absolute;top:0;left:0;bottom:0;right:0;z-index:1";
        previousFocusedElementRef.current = document.activeElement;
        const focusableElements = getFocusableElements(rootElementRef.current);
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          previousFocusedElementRef.current.blur();
        }
      } else {
        if (rootElements.length === 1) {
          bodyElement.style.removeProperty("position");
          bodyElement.style.removeProperty("overflow-y");
          bodyElement.style.removeProperty("width");
        }
        rootElements.pop();
        rootElementRef.current.style.cssText = "position:static";
      }
      return function() {
        if (previousFocusedElementRef.current !== null) {
          previousFocusedElementRef.current.focus();
        }
      };
    }, [open]);
    p2(function() {
      if (rootElementRef.current === null) {
        throw new Error("`rootElementRef.current` is `null`");
      }
      B(y(
        k,
        null,
        y(
          "div",
          __spreadProps(__spreadValues({}, rest), { class: createClassName([
            modal_module_default.modal,
            open === true ? modal_module_default.open : null,
            noTransition === true ? modal_module_default.noTransition : null,
            modal_module_default[position]
          ]) }),
          children,
          typeof onCloseButtonClick === "undefined" && typeof title === "undefined" ? null : y(
            "div",
            { class: modal_module_default.topBar },
            y("div", { class: modal_module_default.title }, typeof title === "undefined" ? null : y(
              Text,
              null,
              y("strong", null, title)
            )),
            typeof onCloseButtonClick === "undefined" ? null : y(
              "div",
              { class: closeButtonPosition === "left" ? modal_module_default.closeButtonLeft : void 0 },
              y(IconButton, { onClick: onCloseButtonClick }, closeButtonIcon)
            )
          )
        ),
        y("div", { class: modal_module_default.overlay, onClick: typeof onOverlayClick === "undefined" ? void 0 : onOverlayClick })
      ), rootElementRef.current);
    }, [
      children,
      closeButtonIcon,
      closeButtonPosition,
      noTransition,
      onCloseButtonClick,
      onOverlayClick,
      open,
      position,
      rest,
      title
    ]);
    return null;
  }
  var rootElements;
  var init_modal = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/modal/modal.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_cross_32();
      init_create_class_name();
      init_create_focus_trap_key_down_handler();
      init_get_focusable_elements();
      init_icon_button();
      init_text();
      init_modal_module();
      rootElements = [];
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/8cef16f5-6980-43f1-a22b-60699ada3b34/stack.module.js
  var stack_module_default;
  var init_stack_module = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/8cef16f5-6980-43f1-a22b-60699ada3b34/stack.module.js"() {
      if (document.getElementById("a90bc49ae1") === null) {
        const element = document.createElement("style");
        element.id = "a90bc49ae1";
        element.textContent = `._extraSmall_dpsd3_1 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-extra-small);
}
._small_dpsd3_4 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-small);
}
._medium_dpsd3_7 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-medium);
}
._large_dpsd3_10 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-large);
}
._extraLarge_dpsd3_13 > ._child_dpsd3_1:not(:first-child) {
  margin-top: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3N0YWNrL3N0YWNrLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC9zdGFjay9zdGFjay5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwgPiAuY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwgPiAuY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG4ubWVkaXVtID4gLmNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSA+IC5jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlID4gLmNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      stack_module_default = { "extraSmall": "_extraSmall_dpsd3_1", "child": "_child_dpsd3_1", "small": "_small_dpsd3_4", "medium": "_medium_dpsd3_7", "large": "_large_dpsd3_10", "extraLarge": "_extraLarge_dpsd3_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/stack/stack.js
  function Stack(_a) {
    var _b = _a, { children, space } = _b, rest = __objRest(_b, ["children", "space"]);
    return y("div", __spreadProps(__spreadValues({}, rest), { class: stack_module_default[space] }), C(children).map(function(element, index) {
      return y("div", { key: index, class: stack_module_default.child }, element);
    }));
  }
  var init_stack = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/stack/stack.js"() {
      init_preact_module();
      init_stack_module();
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    let invoked = false;
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
        invoked = true;
      }
    }
    if (invoked === false) {
      throw new Error(`No event handler with name \`${name}\``);
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function(args) {
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = args;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const args = event.data.pluginMessage;
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = event.data.pluginMessage;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-layer-component-16.js
  var IconLayerComponent16;
  var init_icon_layer_component_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-layer-component-16.js"() {
      init_create_icon();
      IconLayerComponent16 = createIcon("M5.74273 4.74815 8 2.5002l2.2573 2.24795L8 6.9961 5.74273 4.74815Zm-.9946 5.50915L2.50018 8l2.24795-2.25727L6.99608 8l-2.24795 2.2573Zm5.50917.9946-2.25732 2.2479-2.25727-2.2479 2.25727-2.24799 2.25732 2.24799Zm3.2425-3.25189-2.248-2.25727-2.24791 2.25727 2.24791 2.25729 2.248-2.25729Z", { height: 16, width: 16 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-layer-frame-16.js
  var IconLayerFrame16;
  var init_icon_layer_frame_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-layer-frame-16.js"() {
      init_create_icon();
      IconLayerFrame16 = createIcon("M6 2.5V5h4V2.5h1V5h2.5v1H11v4h2.5v1H11v2.5h-1V11H6v2.5H5V11H2.5v-1H5V6H2.5V5H5V2.5h1Zm4 7.5V6H6v4h4Z", { height: 16, width: 16 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-layer-group-16.js
  var IconLayerGroup16;
  var init_icon_layer_group_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-layer-group-16.js"() {
      init_create_icon();
      IconLayerGroup16 = createIcon("M9 3H7v1h2V3Zm2.5 9h.5v-.5h1V13h-1.5v-1ZM4 7v2H3V7h1Zm8-2.5V4h-.5V3H13v1.5h-1ZM12 7v2h1V7h-1ZM4 4.5V4h.5V3H3v1.5h1ZM3 12v-.5h1v.5h.5v1H3v-1Zm6 0H7v1h2v-1Z", { height: 16, width: 16 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-layer-instance-16.js
  var IconLayerInstance16;
  var init_icon_layer_instance_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-layer-instance-16.js"() {
      init_create_icon();
      IconLayerInstance16 = createIcon("m1.82825 8 .33587-.33588 5.5-5.5L8 1.82825l.33587.33587 5.50003 5.5L14.1717 8l-.3358.33587-5.50003 5.50003L8 14.1717l-.33588-.3358-5.5-5.50003L1.82825 8ZM8 12.8282 12.8282 8 8 3.17175 3.17175 8 8 12.8282Z", { height: 16, width: 16 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-target-16.js
  var IconTarget16;
  var init_icon_target_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-target-16.js"() {
      init_create_icon();
      IconTarget16 = createIcon("M8.5 3.02469V1.5h-1v1.52469C5.13779 3.25922 3.25922 5.13779 3.02469 7.5H1.5v1h1.52469c.23453 2.3622 2.1131 4.2408 4.47531 4.4753V14.5h1v-1.5247c2.3622-.2345 4.2408-2.1131 4.4753-4.4753H14.5v-1h-1.5247C12.7408 5.13779 10.8622 3.25922 8.5 3.02469Zm-1 1.00626V6.5h1V4.03095c1.8094.22562 3.2434 1.65969 3.4691 3.46905H9.5v1h2.4691c-.2257 1.8094-1.6597 3.2434-3.4691 3.4691V9.5h-1v2.4691C5.69064 11.7434 4.25657 10.3094 4.03095 8.5H6.5v-1H4.03095C4.25657 5.69064 5.69064 4.25657 7.5 4.03095Z", { height: 16, width: 16 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-adjust-32.js
  var IconAdjust32;
  var init_icon_adjust_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-adjust-32.js"() {
      init_create_icon();
      IconAdjust32 = createIcon("M12 15.95V23h1v-7.05c1.1411-.2316 2-1.2405 2-2.45 0-1.2095-.8589-2.2184-2-2.45V9h-1v2.05c-1.1411.2316-2 1.2405-2 2.45 0 1.2095.8589 2.2184 2 2.45Zm2-2.45c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5ZM19 9h1v7.05c1.1411.2316 2 1.2405 2 2.45 0 1.2095-.8589 2.2184-2 2.45V23h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45 0-1.2095.8589-2.2184 2-2.45V9Zm2 9.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Z", { height: 32, width: 32 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-swap-32.js
  var IconSwap32;
  var init_icon_swap_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-swap-32.js"() {
      init_create_icon();
      IconSwap32 = createIcon("m23 13.1877-1.1747 1.4683a5.51905 5.51905 0 0 0-.0265-.156 5.49981 5.49981 0 0 0-.9894-2.2746 5.50027 5.50027 0 0 0-6.2658-1.9061 5.50036 5.50036 0 0 0-2.0884 1.3383 5.49027 5.49027 0 0 0-.633.7796l.0001.0001.8305.5568.0001.0001a4.4999 4.4999 0 0 1 2.2266-1.7328A4.49983 4.49983 0 0 1 17.7 11.195a4.4987 4.4987 0 0 1 2.3058 1.6259c.4847.6541.7812 1.4251.862 2.2297l-2.2-1.4666-.5547.832 3 2 .3814.2543.2864-.358 2-2.5L23 13.1877Zm-12 1.5-2 2.5.78087.6246 1.17473-1.4683c.0081.0521.0169.1041.0265.156.1515.8194.4881 1.5981.9894 2.2746a5.50042 5.50042 0 0 0 2.8182 1.9873 5.50033 5.50033 0 0 0 3.4475-.0812 5.50073 5.50073 0 0 0 2.0885-1.3383c.2326-.2383.4444-.4984.6318-.7778l.0012-.0018-.0001-.0001-.8305-.5568-.0001-.0001-.0011.0016a4.5001 4.5001 0 0 1-2.2255 1.7312 4.50016 4.50016 0 0 1-2.8206.0664 4.49885 4.49885 0 0 1-2.3057-1.6259 4.49861 4.49861 0 0 1-.862-2.2297l2.2 1.4666.5547-.832-3-2-.3814-.2543-.2864.358Z", { height: 32, width: 32 });
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/ff7ddd3c-f4ef-444d-a6c3-bbd07c1b12d7/base.js
  var init_base = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/ff7ddd3c-f4ef-444d-a6c3-bbd07c1b12d7/base.js"() {
      if (document.getElementById("fbf7762b77") === null) {
        const element = document.createElement("style");
        element.id = "fbf7762b77";
        element.innerHTML = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      B(y(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button();
      init_checkbox();
      init_modal();
      init_text();
      init_icon_layer_component_16();
      init_icon_layer_frame_16();
      init_icon_layer_group_16();
      init_icon_layer_instance_16();
      init_icon_target_16();
      init_icon_adjust_32();
      init_icon_swap_32();
      init_stack();
      init_render();
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/98f115f7-7a2a-41ee-beb6-7011cd5a3a0c/styles.js
  var styles_default;
  var init_styles = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/98f115f7-7a2a-41ee-beb6-7011cd5a3a0c/styles.js"() {
      if (document.getElementById("95eebb2676") === null) {
        const element = document.createElement("style");
        element.id = "95eebb2676";
        element.textContent = `._container_1r9fv_1{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;


}
._filter_1r9fv_10{
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: solid 1px var(--figma-color-border);
    align-items: center;
    /* background-color: var(--figma-color-bg) */
}
._filter-tags_1r9fv_18{
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
}
._filter-item_1r9fv_23{
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
}
._filter-item_1r9fv_23:hover{
    cursor: pointer;
    background-color: var(--figma-color-bg-hover);
}
._filter-item-active_1r9fv_31{

    background-color: var(--figma-color-bg-inverse);
    color: var(--figma-color-text-oninverse)
}
._filter-item-active_1r9fv_31:hover{
    color: var(--figma-color-text);
    background-color: var(--figma-color-bg-hover);
}
._results_1r9fv_40{
    height: 90%;
    padding: 0.5rem 0.5rem 4rem 0.5rem ;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* background-color: aqua; */
    overflow-y: scroll;

}
._result-item_1r9fv_50{
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border: 1px solid var(--figma-color-border);
    border-radius: 0.125rem;
}
._result-item_1r9fv_50:hover{
    background-color:var(--figma-color-bg-hover);
}
._result-name_1r9fv_62{
    cursor: pointer;
}
._result-message_1r9fv_65{
    color: var(--figma-color-text-disabled);
    cursor: pointer;
}
._result-right_1r9fv_69{
    width: 100%;

}


._run-again-button_1r9fv_75{
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    background-color: var( --figma-color-bg-brand);
    padding: 0.125rem;
    border-radius: 100%;
    color: #fff
}
._run-again-button_1r9fv_75:hover{
    background-color: var( --figma-color-bg-brand-hover);
    cursor: pointer;
}
/* .title-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem
} */

/* HOME */
._home_1r9fv_96{
    width: 100%;
    height: 100%;
    padding: 1.5rem;

}
._home-wrapper_1r9fv_102{
    background-color: #DBEEFF;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #00499D

}
._home-title_1r9fv_114{
    font-size: 1.5rem;
    font-weight: bold;
 
}

._home-description_1r9fv_120{
    font-size: 0.75rem;
}

._home-buttons_1r9fv_124{
    display: flex;
    gap: 0.5rem;
}
._icon-button_1r9fv_128{
    padding: 0.1rem;
    border-radius: 100%;
}
._icon-button_1r9fv_128:hover{
    cursor: pointer;
    background-color: var(--figma-color-bg-brand);
    color: #fff;
}
._setting-modal_1r9fv_137{
    width: 280px;
    padding: 1rem;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLEtBQUs7SUFDTCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7OztBQUdoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0RBQWtEO0lBQ2xELG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDZDQUE2QztBQUNqRDtBQUNBOztJQUVJLCtDQUErQztJQUMvQztBQUNKO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLDJDQUEyQztJQUMzQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksb0RBQW9EO0lBQ3BELGVBQWU7QUFDbkI7QUFDQTs7Ozs7R0FLRzs7QUFFSCxTQUFTO0FBQ1Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNUOztBQUVKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cblxufVxuLmZpbHRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZykgKi9cbn1cbi5maWx0ZXItdGFnc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmlsdGVyLWl0ZW17XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5maWx0ZXItaXRlbTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLmZpbHRlci1pdGVtLWFjdGl2ZXtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWludmVyc2UpO1xuICAgIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uaW52ZXJzZSlcbn1cbi5maWx0ZXItaXRlbS1hY3RpdmU6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWhvdmVyKTtcbn1cbi5yZXN1bHRze1xuICAgIGhlaWdodDogOTAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gNHJlbSAwLjVyZW0gO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxufVxuLnJlc3VsdC1pdGVte1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xufVxuLnJlc3VsdC1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLnJlc3VsdC1uYW1le1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZXN1bHQtbWVzc2FnZXtcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlc3VsdC1yaWdodHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG5cbi5ydW4tYWdhaW4tYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDFyZW07XG4gICAgcmlnaHQ6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbiAgICBwYWRkaW5nOiAwLjEyNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmXG59XG4ucnVuLWFnYWluLWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tZmlnbWEtY29sb3ItYmctYnJhbmQtaG92ZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIC50aXRsZS1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW1cbn0gKi9cblxuLyogSE9NRSAqL1xuLmhvbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcblxufVxuLmhvbWUtd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJFRUZGO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBjb2xvcjogIzAwNDk5RFxuXG59XG4uaG9tZS10aXRsZXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiBcbn1cblxuLmhvbWUtZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4uaG9tZS1idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG59XG4uaWNvbi1idXR0b257XG4gICAgcGFkZGluZzogMC4xcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uaWNvbi1idXR0b246aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5zZXR0aW5nLW1vZGFse1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xufSJdfQ== */`;
        document.head.append(element);
      }
      styles_default = { "container": "_container_1r9fv_1", "filter": "_filter_1r9fv_10", "filter-tags": "_filter-tags_1r9fv_18", "filter-item": "_filter-item_1r9fv_23", "filter-item-active": "_filter-item-active_1r9fv_31", "results": "_results_1r9fv_40", "result-item": "_result-item_1r9fv_50", "result-name": "_result-name_1r9fv_62", "result-message": "_result-message_1r9fv_65", "result-right": "_result-right_1r9fv_69", "run-again-button": "_run-again-button_1r9fv_75", "home": "_home_1r9fv_96", "home-wrapper": "_home-wrapper_1r9fv_102", "home-title": "_home-title_1r9fv_114", "home-description": "_home-description_1r9fv_120", "home-buttons": "_home-buttons_1r9fv_124", "icon-button": "_icon-button_1r9fv_128", "setting-modal": "_setting-modal_1r9fv_137" };
    }
  });

  // src/screens/Home.jsx
  var Home, Illustration;
  var init_Home = __esm({
    "src/screens/Home.jsx"() {
      init_lib2();
      init_styles();
      init_preact_module();
      init_hooks_module();
      init_lib();
      Home = ({ handleStartClick, options }) => {
        const [isSettingOpen, setIsSettingOpen] = h2(false);
        const [criteria, setCriteria] = h2(options);
        const handleCheck = (type) => {
          const arr = Object.values(criteria);
          if (type === "all") {
            if (arr.every((val) => val === arr[0])) {
              setCriteria({
                avoid: !arr[0],
                named_frames: !arr[0],
                auto_layout: !arr[0],
                padding: !arr[0],
                gap: !arr[0],
                fill: !arr[0],
                stroke: !arr[0],
                corner_radius: !arr[0]
              });
            } else {
              setCriteria({
                avoid: true,
                named_frames: true,
                auto_layout: true,
                padding: true,
                gap: true,
                fill: true,
                stroke: true,
                corner_radius: true
              });
            }
            return;
          }
          setCriteria(__spreadProps(__spreadValues({}, criteria), { [type]: !criteria[type] }));
        };
        const handleSettingClick = () => {
          setIsSettingOpen(true);
        };
        const handleCloseButtonClick = () => {
          setIsSettingOpen(false);
        };
        const handleSave = () => {
          setIsSettingOpen(false);
          emit("SAVE", criteria);
        };
        return /* @__PURE__ */ y("div", { className: styles_default["home"] }, /* @__PURE__ */ y("div", { className: styles_default["home-wrapper"] }, /* @__PURE__ */ y("div", { className: styles_default["home-illustration"] }, /* @__PURE__ */ y(Illustration, null)), /* @__PURE__ */ y("div", { className: styles_default["home-title"] }, "Deel Design Linter"), /* @__PURE__ */ y("div", { className: styles_default["home-description"] }, "Select a layer to get started"), /* @__PURE__ */ y("div", { className: styles_default["home-buttons"] }, /* @__PURE__ */ y(
          Button,
          {
            fullWidth: true,
            onClick: handleStartClick
          },
          "Run Linter"
        ), /* @__PURE__ */ y(
          "div",
          {
            className: styles_default["icon-button"],
            onClick: handleSettingClick
          },
          /* @__PURE__ */ y(IconAdjust32, null)
        ))), /* @__PURE__ */ y(
          Modal,
          {
            open: isSettingOpen,
            title: "Select criteria to lint with:",
            onCloseButtonClick: handleCloseButtonClick
          },
          /* @__PURE__ */ y("div", { className: styles_default["setting-modal"] }, /* @__PURE__ */ y(Stack, { space: "large" }, /* @__PURE__ */ y(
            Checkbox,
            {
              value: Object.values(criteria).every(
                (val) => val === criteria.avoid
              ) && criteria.avoid,
              onChange: () => {
                handleCheck("all");
              }
            },
            /* @__PURE__ */ y(Text, null, "All")
          ), /* @__PURE__ */ y(Stack, { space: "small" }, /* @__PURE__ */ y(Text, null, "Avoid using:"), /* @__PURE__ */ y(
            Checkbox,
            {
              value: criteria.avoid,
              onChange: () => {
                handleCheck("avoid");
              }
            },
            /* @__PURE__ */ y(Text, null, "Group and Boolean Operation")
          )), /* @__PURE__ */ y(Stack, { space: "small" }, /* @__PURE__ */ y(Text, null, "Must use:"), /* @__PURE__ */ y(
            Checkbox,
            {
              value: criteria.named_frames,
              onChange: () => {
                handleCheck("named_frames");
              }
            },
            /* @__PURE__ */ y(Text, null, "Named frames")
          ), /* @__PURE__ */ y(
            Checkbox,
            {
              value: criteria.auto_layout,
              onChange: () => {
                handleCheck("auto_layout");
              }
            },
            /* @__PURE__ */ y(Text, null, "Auto layout")
          )), /* @__PURE__ */ y(Stack, { space: "small" }, /* @__PURE__ */ y(Text, null, "Must apply variables to:"), /* @__PURE__ */ y(
            Checkbox,
            {
              value: criteria.padding,
              onChange: () => {
                handleCheck("padding");
              }
            },
            /* @__PURE__ */ y(Text, null, "Padding")
          ), /* @__PURE__ */ y(
            Checkbox,
            {
              value: criteria.gap,
              onChange: () => {
                handleCheck("gap");
              }
            },
            /* @__PURE__ */ y(Text, null, "Gap")
          ), /* @__PURE__ */ y(
            Checkbox,
            {
              value: criteria.fill,
              onChange: () => {
                handleCheck("fill");
              }
            },
            /* @__PURE__ */ y(Text, null, "Fill")
          ), /* @__PURE__ */ y(
            Checkbox,
            {
              value: criteria.stroke,
              onChange: () => {
                handleCheck("stroke");
              }
            },
            /* @__PURE__ */ y(Text, null, "Stroke")
          ), /* @__PURE__ */ y(
            Checkbox,
            {
              value: criteria.corner_radius,
              onChange: () => {
                handleCheck("corner_radius");
              }
            },
            /* @__PURE__ */ y(Text, null, "Corner Radius")
          )), /* @__PURE__ */ y(
            Button,
            {
              fullWidth: true,
              onClick: handleSave
            },
            "Save"
          )))
        ));
      };
      Illustration = () => {
        return /* @__PURE__ */ y(
          "svg",
          {
            width: "280",
            height: "280",
            viewBox: "0 0 280 280",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
          },
          /* @__PURE__ */ y(
            "rect",
            {
              width: "280",
              height: "280",
              rx: "12",
              fill: "#DBEEFF"
            }
          ),
          /* @__PURE__ */ y(
            "path",
            {
              d: "M208.398 96.9851C212.725 134.56 185.434 167.829 147.683 172.177C109.931 176.525 76.0137 150.305 71.6863 112.729C67.359 75.1541 94.4548 41.1689 132.207 36.8212C169.958 32.4735 204.07 59.4098 208.398 96.9851Z",
              fill: "#00499D"
            }
          ),
          /* @__PURE__ */ y(
            "path",
            {
              d: "M154.453 246.65L143.314 172.94L159.943 168.493L178.629 243.899L154.453 246.65Z",
              fill: "#C7E2FE"
            }
          ),
          /* @__PURE__ */ y(
            "path",
            {
              d: "M162.614 179.23L146.264 192.657L143.014 171.663L160.161 169.344L162.614 179.23Z",
              fill: "#00499D"
            }
          ),
          /* @__PURE__ */ y(
            "mask",
            {
              id: "mask0_564_4235",
              style: "mask-type:alpha",
              maskUnits: "userSpaceOnUse",
              x: "142",
              y: "168",
              width: "21",
              height: "25"
            },
            /* @__PURE__ */ y(
              "path",
              {
                d: "M162.618 179.238L146.248 192.623L142.987 170.96L160.031 168.726L162.618 179.238Z",
                fill: "#DBEEFF"
              }
            )
          ),
          /* @__PURE__ */ y("g", { mask: "url(#mask0_564_4235)" }, /* @__PURE__ */ y(
            "mask",
            {
              id: "mask1_564_4235",
              style: "mask-type:alpha",
              maskUnits: "userSpaceOnUse",
              x: "-83",
              y: "137",
              width: "428",
              height: "330"
            },
            /* @__PURE__ */ y(
              "rect",
              {
                x: "-82.8571",
                y: "137.972",
                width: "426.976",
                height: "328.046",
                fill: "url(#pattern0)"
              }
            )
          ), /* @__PURE__ */ y("g", { mask: "url(#mask1_564_4235)" }, /* @__PURE__ */ y(
            "rect",
            {
              x: "-82.8571",
              y: "137.972",
              width: "426.976",
              height: "328.046",
              fill: "#DBEEFF"
            }
          ))),
          /* @__PURE__ */ y(
            "ellipse",
            {
              cx: "143.703",
              cy: "103.768",
              rx: "67.9938",
              ry: "70.2432",
              fill: "#C7E2FE"
            }
          ),
          /* @__PURE__ */ y(
            "path",
            {
              d: "M200.081 103.768C200.081 136.146 174.822 162.361 143.703 162.361C112.584 162.361 87.3263 136.146 87.3263 103.768C87.3263 71.3906 112.584 45.1753 143.703 45.1753C174.822 45.1753 200.081 71.3906 200.081 103.768Z",
              fill: "#FAF4EE",
              stroke: "#00499D",
              "stroke-width": "0.964413"
            }
          ),
          /* @__PURE__ */ y(
            "path",
            {
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M161.885 159.759C184.371 151.88 200.563 129.788 200.563 103.768C200.563 71.1419 175.106 44.6931 143.703 44.6931C134.528 44.6931 125.859 46.9514 118.185 50.9622C123.894 48.9619 130.008 47.8777 136.367 47.8777C167.769 47.8777 193.226 74.3264 193.226 106.953C193.226 130.045 180.473 150.043 161.885 159.759Z",
              fill: "#00499D"
            }
          ),
          /* @__PURE__ */ y(
            "mask",
            {
              id: "mask2_564_4235",
              style: "mask-type:alpha",
              maskUnits: "userSpaceOnUse",
              x: "109",
              y: "47",
              width: "90",
              height: "101"
            },
            /* @__PURE__ */ y(
              "path",
              {
                d: "M173.009 87.4059C157.982 57.272 123.674 56.6806 109.409 57.7018C132.146 39.9301 157.579 48.6038 167.453 55.162C190.8 68.5826 197.551 94.9873 198.007 106.512C198.007 126.97 185.95 142.397 179.921 147.553C184.228 137.818 188.942 119.358 173.009 87.4059Z",
                fill: "#D9D9D9"
              }
            )
          ),
          /* @__PURE__ */ y("g", { mask: "url(#mask2_564_4235)" }, /* @__PURE__ */ y(
            "mask",
            {
              id: "mask3_564_4235",
              style: "mask-type:alpha",
              maskUnits: "userSpaceOnUse",
              x: "-153",
              y: "18",
              width: "498",
              height: "383"
            },
            /* @__PURE__ */ y(
              "rect",
              {
                x: "-152.36",
                y: "18.4685",
                width: "496.779",
                height: "381.675",
                fill: "url(#pattern1)"
              }
            )
          ), /* @__PURE__ */ y("g", { mask: "url(#mask3_564_4235)" }, /* @__PURE__ */ y(
            "rect",
            {
              x: "-152.36",
              y: "18.4685",
              width: "496.779",
              height: "381.675",
              fill: "#00499D"
            }
          ))),
          /* @__PURE__ */ y(
            "ellipse",
            {
              cx: "166.569",
              cy: "245.651",
              rx: "11.3164",
              ry: "4.29714",
              transform: "rotate(-5.69996 166.569 245.651)",
              fill: "#00499D",
              stroke: "#00499D",
              "stroke-width": "1.70572"
            }
          ),
          /* @__PURE__ */ y(
            "path",
            {
              d: "M199.813 103.768C199.813 136.007 174.665 162.093 143.703 162.093C112.742 162.093 87.5941 136.007 87.5941 103.768C87.5941 71.5288 112.742 45.4431 143.703 45.4431C174.665 45.4431 199.813 71.5288 199.813 103.768Z",
              stroke: "#00499D",
              "stroke-width": "1.5"
            }
          ),
          /* @__PURE__ */ y("defs", null, /* @__PURE__ */ y(
            "pattern",
            {
              id: "pattern0",
              patternContentUnits: "objectBoundingBox",
              width: "0.935414",
              height: "1.21751"
            },
            /* @__PURE__ */ y(
              "use",
              {
                "xlink:href": "#image0_564_4235",
                transform: "scale(0.000456745 0.000594489)"
              }
            )
          ), /* @__PURE__ */ y(
            "pattern",
            {
              id: "pattern1",
              patternContentUnits: "objectBoundingBox",
              width: "0.935414",
              height: "1.21751"
            },
            /* @__PURE__ */ y(
              "use",
              {
                "xlink:href": "#image0_564_4235",
                transform: "scale(0.000456745 0.000594488)"
              }
            )
          ), /* @__PURE__ */ y(
            "image",
            {
              id: "image0_564_4235",
              width: "2048",
              height: "2048",
            }
          ))
        );
      };
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/c08ba0f7-5e9e-404d-9320-8e246d6e98a6/styles.js
  var styles_default2;
  var init_styles2 = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/c08ba0f7-5e9e-404d-9320-8e246d6e98a6/styles.js"() {
      if (document.getElementById("95eebb2676") === null) {
        const element = document.createElement("style");
        element.id = "95eebb2676";
        element.textContent = `._container_1r9fv_1{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;


}
._filter_1r9fv_10{
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: solid 1px var(--figma-color-border);
    align-items: center;
    /* background-color: var(--figma-color-bg) */
}
._filter-tags_1r9fv_18{
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
}
._filter-item_1r9fv_23{
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
}
._filter-item_1r9fv_23:hover{
    cursor: pointer;
    background-color: var(--figma-color-bg-hover);
}
._filter-item-active_1r9fv_31{

    background-color: var(--figma-color-bg-inverse);
    color: var(--figma-color-text-oninverse)
}
._filter-item-active_1r9fv_31:hover{
    color: var(--figma-color-text);
    background-color: var(--figma-color-bg-hover);
}
._results_1r9fv_40{
    height: 90%;
    padding: 0.5rem 0.5rem 4rem 0.5rem ;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* background-color: aqua; */
    overflow-y: scroll;

}
._result-item_1r9fv_50{
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border: 1px solid var(--figma-color-border);
    border-radius: 0.125rem;
}
._result-item_1r9fv_50:hover{
    background-color:var(--figma-color-bg-hover);
}
._result-name_1r9fv_62{
    cursor: pointer;
}
._result-message_1r9fv_65{
    color: var(--figma-color-text-disabled);
    cursor: pointer;
}
._result-right_1r9fv_69{
    width: 100%;

}


._run-again-button_1r9fv_75{
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    background-color: var( --figma-color-bg-brand);
    padding: 0.125rem;
    border-radius: 100%;
    color: #fff
}
._run-again-button_1r9fv_75:hover{
    background-color: var( --figma-color-bg-brand-hover);
    cursor: pointer;
}
/* .title-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem
} */

/* HOME */
._home_1r9fv_96{
    width: 100%;
    height: 100%;
    padding: 1.5rem;

}
._home-wrapper_1r9fv_102{
    background-color: #DBEEFF;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #00499D

}
._home-title_1r9fv_114{
    font-size: 1.5rem;
    font-weight: bold;
 
}

._home-description_1r9fv_120{
    font-size: 0.75rem;
}

._home-buttons_1r9fv_124{
    display: flex;
    gap: 0.5rem;
}
._icon-button_1r9fv_128{
    padding: 0.1rem;
    border-radius: 100%;
}
._icon-button_1r9fv_128:hover{
    cursor: pointer;
    background-color: var(--figma-color-bg-brand);
    color: #fff;
}
._setting-modal_1r9fv_137{
    width: 280px;
    padding: 1rem;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLEtBQUs7SUFDTCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7OztBQUdoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0RBQWtEO0lBQ2xELG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDZDQUE2QztBQUNqRDtBQUNBOztJQUVJLCtDQUErQztJQUMvQztBQUNKO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLDJDQUEyQztJQUMzQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksb0RBQW9EO0lBQ3BELGVBQWU7QUFDbkI7QUFDQTs7Ozs7R0FLRzs7QUFFSCxTQUFTO0FBQ1Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNUOztBQUVKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cblxufVxuLmZpbHRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZykgKi9cbn1cbi5maWx0ZXItdGFnc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmlsdGVyLWl0ZW17XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5maWx0ZXItaXRlbTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLmZpbHRlci1pdGVtLWFjdGl2ZXtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWludmVyc2UpO1xuICAgIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uaW52ZXJzZSlcbn1cbi5maWx0ZXItaXRlbS1hY3RpdmU6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWhvdmVyKTtcbn1cbi5yZXN1bHRze1xuICAgIGhlaWdodDogOTAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gNHJlbSAwLjVyZW0gO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxufVxuLnJlc3VsdC1pdGVte1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xufVxuLnJlc3VsdC1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLnJlc3VsdC1uYW1le1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZXN1bHQtbWVzc2FnZXtcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlc3VsdC1yaWdodHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG5cbi5ydW4tYWdhaW4tYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDFyZW07XG4gICAgcmlnaHQ6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbiAgICBwYWRkaW5nOiAwLjEyNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmXG59XG4ucnVuLWFnYWluLWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tZmlnbWEtY29sb3ItYmctYnJhbmQtaG92ZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIC50aXRsZS1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW1cbn0gKi9cblxuLyogSE9NRSAqL1xuLmhvbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcblxufVxuLmhvbWUtd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJFRUZGO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBjb2xvcjogIzAwNDk5RFxuXG59XG4uaG9tZS10aXRsZXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiBcbn1cblxuLmhvbWUtZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4uaG9tZS1idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG59XG4uaWNvbi1idXR0b257XG4gICAgcGFkZGluZzogMC4xcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uaWNvbi1idXR0b246aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5zZXR0aW5nLW1vZGFse1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xufSJdfQ== */`;
        document.head.append(element);
      }
      styles_default2 = { "container": "_container_1r9fv_1", "filter": "_filter_1r9fv_10", "filter-tags": "_filter-tags_1r9fv_18", "filter-item": "_filter-item_1r9fv_23", "filter-item-active": "_filter-item-active_1r9fv_31", "results": "_results_1r9fv_40", "result-item": "_result-item_1r9fv_50", "result-name": "_result-name_1r9fv_62", "result-message": "_result-message_1r9fv_65", "result-right": "_result-right_1r9fv_69", "run-again-button": "_run-again-button_1r9fv_75", "home": "_home_1r9fv_96", "home-wrapper": "_home-wrapper_1r9fv_102", "home-title": "_home-title_1r9fv_114", "home-description": "_home-description_1r9fv_120", "home-buttons": "_home-buttons_1r9fv_124", "icon-button": "_icon-button_1r9fv_128", "setting-modal": "_setting-modal_1r9fv_137" };
    }
  });

  // src/components/filter.jsx
  var Filter, FilterItem;
  var init_filter = __esm({
    "src/components/filter.jsx"() {
      init_preact_module();
      init_hooks_module();
      init_styles2();
      FilterLabels = {
        Must_Be_Named: "Name",
        Must_Use_Spacing_Tokens: "Spacing",
        Must_Use_Autolayout: "Autolayout",
        Should_Avoid: "Avoid",
        Must_Use_Fill_Variable: "Fill",
        Must_Use_Stroke_Variable: "Stroke",
        Must_Use_Radius_Variable: "Radius"
      };
      Filter = ({ filter, setFilter, result }) => {
        return /* @__PURE__ */ y("div", { className: styles_default2["filter"] }, /* @__PURE__ */ y("div", { className: styles_default2["filter-tags"] }, Object.keys(result).map((item, index) => {
          return /* @__PURE__ */ y(
            FilterItem,
            {
              item,
              filter,
              setFilter,
              label: FilterLabels[item],
              length: result[item].length
            }
          );
        })));
      };
      FilterItem = ({ item, filter, setFilter, label, length }) => {
        const handleFilterItemClick = () => {
          setFilter(__spreadProps(__spreadValues({}, filter), {
            [item]: { active: !filter[item].active }
          }));
        };
        return /* @__PURE__ */ y(
          "div",
          {
            className: `${styles_default2["filter-item"]} ${filter[item].active && styles_default2["filter-item-active"]}`,
            onClick: handleFilterItemClick
          },
          label,
          "(",
          length,
          ")"
        );
      };
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/c4e04d42-52c7-410a-b274-dcbe8578a24c/styles.js
  var styles_default3;
  var init_styles3 = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/c4e04d42-52c7-410a-b274-dcbe8578a24c/styles.js"() {
      if (document.getElementById("95eebb2676") === null) {
        const element = document.createElement("style");
        element.id = "95eebb2676";
        element.textContent = `._container_1r9fv_1{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;


}
._filter_1r9fv_10{
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: solid 1px var(--figma-color-border);
    align-items: center;
    /* background-color: var(--figma-color-bg) */
}
._filter-tags_1r9fv_18{
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
}
._filter-item_1r9fv_23{
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
}
._filter-item_1r9fv_23:hover{
    cursor: pointer;
    background-color: var(--figma-color-bg-hover);
}
._filter-item-active_1r9fv_31{

    background-color: var(--figma-color-bg-inverse);
    color: var(--figma-color-text-oninverse)
}
._filter-item-active_1r9fv_31:hover{
    color: var(--figma-color-text);
    background-color: var(--figma-color-bg-hover);
}
._results_1r9fv_40{
    height: 90%;
    padding: 0.5rem 0.5rem 4rem 0.5rem ;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* background-color: aqua; */
    overflow-y: scroll;

}
._result-item_1r9fv_50{
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border: 1px solid var(--figma-color-border);
    border-radius: 0.125rem;
}
._result-item_1r9fv_50:hover{
    background-color:var(--figma-color-bg-hover);
}
._result-name_1r9fv_62{
    cursor: pointer;
}
._result-message_1r9fv_65{
    color: var(--figma-color-text-disabled);
    cursor: pointer;
}
._result-right_1r9fv_69{
    width: 100%;

}


._run-again-button_1r9fv_75{
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    background-color: var( --figma-color-bg-brand);
    padding: 0.125rem;
    border-radius: 100%;
    color: #fff
}
._run-again-button_1r9fv_75:hover{
    background-color: var( --figma-color-bg-brand-hover);
    cursor: pointer;
}
/* .title-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem
} */

/* HOME */
._home_1r9fv_96{
    width: 100%;
    height: 100%;
    padding: 1.5rem;

}
._home-wrapper_1r9fv_102{
    background-color: #DBEEFF;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #00499D

}
._home-title_1r9fv_114{
    font-size: 1.5rem;
    font-weight: bold;
 
}

._home-description_1r9fv_120{
    font-size: 0.75rem;
}

._home-buttons_1r9fv_124{
    display: flex;
    gap: 0.5rem;
}
._icon-button_1r9fv_128{
    padding: 0.1rem;
    border-radius: 100%;
}
._icon-button_1r9fv_128:hover{
    cursor: pointer;
    background-color: var(--figma-color-bg-brand);
    color: #fff;
}
._setting-modal_1r9fv_137{
    width: 280px;
    padding: 1rem;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLEtBQUs7SUFDTCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7OztBQUdoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0RBQWtEO0lBQ2xELG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDZDQUE2QztBQUNqRDtBQUNBOztJQUVJLCtDQUErQztJQUMvQztBQUNKO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLDJDQUEyQztJQUMzQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksb0RBQW9EO0lBQ3BELGVBQWU7QUFDbkI7QUFDQTs7Ozs7R0FLRzs7QUFFSCxTQUFTO0FBQ1Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNUOztBQUVKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cblxufVxuLmZpbHRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZykgKi9cbn1cbi5maWx0ZXItdGFnc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmlsdGVyLWl0ZW17XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5maWx0ZXItaXRlbTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLmZpbHRlci1pdGVtLWFjdGl2ZXtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWludmVyc2UpO1xuICAgIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uaW52ZXJzZSlcbn1cbi5maWx0ZXItaXRlbS1hY3RpdmU6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWhvdmVyKTtcbn1cbi5yZXN1bHRze1xuICAgIGhlaWdodDogOTAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gNHJlbSAwLjVyZW0gO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxufVxuLnJlc3VsdC1pdGVte1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xufVxuLnJlc3VsdC1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLnJlc3VsdC1uYW1le1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZXN1bHQtbWVzc2FnZXtcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlc3VsdC1yaWdodHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG5cbi5ydW4tYWdhaW4tYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDFyZW07XG4gICAgcmlnaHQ6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbiAgICBwYWRkaW5nOiAwLjEyNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmXG59XG4ucnVuLWFnYWluLWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tZmlnbWEtY29sb3ItYmctYnJhbmQtaG92ZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIC50aXRsZS1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW1cbn0gKi9cblxuLyogSE9NRSAqL1xuLmhvbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcblxufVxuLmhvbWUtd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJFRUZGO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBjb2xvcjogIzAwNDk5RFxuXG59XG4uaG9tZS10aXRsZXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiBcbn1cblxuLmhvbWUtZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4uaG9tZS1idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG59XG4uaWNvbi1idXR0b257XG4gICAgcGFkZGluZzogMC4xcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uaWNvbi1idXR0b246aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5zZXR0aW5nLW1vZGFse1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xufSJdfQ== */`;
        document.head.append(element);
      }
      styles_default3 = { "container": "_container_1r9fv_1", "filter": "_filter_1r9fv_10", "filter-tags": "_filter-tags_1r9fv_18", "filter-item": "_filter-item_1r9fv_23", "filter-item-active": "_filter-item-active_1r9fv_31", "results": "_results_1r9fv_40", "result-item": "_result-item_1r9fv_50", "result-name": "_result-name_1r9fv_62", "result-message": "_result-message_1r9fv_65", "result-right": "_result-right_1r9fv_69", "run-again-button": "_run-again-button_1r9fv_75", "home": "_home_1r9fv_96", "home-wrapper": "_home-wrapper_1r9fv_102", "home-title": "_home-title_1r9fv_114", "home-description": "_home-description_1r9fv_120", "home-buttons": "_home-buttons_1r9fv_124", "icon-button": "_icon-button_1r9fv_128", "setting-modal": "_setting-modal_1r9fv_137" };
    }
  });

  // src/screens/Result.jsx
  var Result, ResultItem;
  var init_Result = __esm({
    "src/screens/Result.jsx"() {
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_filter();
      init_styles3();
      Result = ({ result }) => {
        const convertResultToFilter = (array, result2) => {
          const initialValue = {};
          array.map((item) => {
            initialValue[item] = {
              value: item,
              active: result2[item].length > 0
            };
          });
          return initialValue;
        };
        const [filter, setFilter] = h2(
          convertResultToFilter(Object.keys(result), result)
        );
        const handleLintAgainClick = () => {
          emit("START");
        };
        return /* @__PURE__ */ y(Stack, null, /* @__PURE__ */ y(
          Filter,
          {
            filter,
            setFilter,
            result
          }
        ), /* @__PURE__ */ y("div", { className: styles_default3["results"] }, Object.keys(result).filter((item) => {
          return filter[item].active;
        }).map((criteria, index) => {
          return result[criteria].map((item, index2) => {
            return /* @__PURE__ */ y(ResultItem, { item });
          });
        })), /* @__PURE__ */ y(
          "div",
          {
            className: styles_default3["run-again-button"],
            onClick: handleLintAgainClick
          },
          /* @__PURE__ */ y(IconSwap32, null)
        ));
      };
      ResultItem = ({ item }) => {
        const handleTargetClick = () => {
          emit("SELECT_TARGET", item.node.id);
        };
        return /* @__PURE__ */ y(
          "div",
          {
            className: styles_default3["result-item"],
            onClick: handleTargetClick
          },
          /* @__PURE__ */ y("div", { className: styles_default3["result-left"] }, item.node.type === "FRAME" && /* @__PURE__ */ y(IconLayerFrame16, null), item.node.type === "INSTANCE" && /* @__PURE__ */ y(IconLayerInstance16, null), item.node.type === "GROUP" && /* @__PURE__ */ y(IconLayerGroup16, null), item.node.type === "COMPONENT" && /* @__PURE__ */ y(IconLayerComponent16, null)),
          /* @__PURE__ */ y("div", { className: styles_default3["result-right"] }, /* @__PURE__ */ y("div", { className: styles_default3["result-name"] }, item.node.name), /* @__PURE__ */ y("div", { className: styles_default3["result-message"] }, item.message)),
          /* @__PURE__ */ y(IconTarget16, null)
        );
      };
    }
  });

  // ../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/0efdca59-99d3-45cb-bc21-c056e7586d0c/styles.js
  var styles_default4;
  var init_styles4 = __esm({
    "../../../../../private/var/folders/q3/phj1q3716nq2zh1ttfzj02g80000gn/T/0efdca59-99d3-45cb-bc21-c056e7586d0c/styles.js"() {
      if (document.getElementById("95eebb2676") === null) {
        const element = document.createElement("style");
        element.id = "95eebb2676";
        element.textContent = `._container_1r9fv_1{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;


}
._filter_1r9fv_10{
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: solid 1px var(--figma-color-border);
    align-items: center;
    /* background-color: var(--figma-color-bg) */
}
._filter-tags_1r9fv_18{
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
}
._filter-item_1r9fv_23{
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
}
._filter-item_1r9fv_23:hover{
    cursor: pointer;
    background-color: var(--figma-color-bg-hover);
}
._filter-item-active_1r9fv_31{

    background-color: var(--figma-color-bg-inverse);
    color: var(--figma-color-text-oninverse)
}
._filter-item-active_1r9fv_31:hover{
    color: var(--figma-color-text);
    background-color: var(--figma-color-bg-hover);
}
._results_1r9fv_40{
    height: 90%;
    padding: 0.5rem 0.5rem 4rem 0.5rem ;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* background-color: aqua; */
    overflow-y: scroll;

}
._result-item_1r9fv_50{
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border: 1px solid var(--figma-color-border);
    border-radius: 0.125rem;
}
._result-item_1r9fv_50:hover{
    background-color:var(--figma-color-bg-hover);
}
._result-name_1r9fv_62{
    cursor: pointer;
}
._result-message_1r9fv_65{
    color: var(--figma-color-text-disabled);
    cursor: pointer;
}
._result-right_1r9fv_69{
    width: 100%;

}


._run-again-button_1r9fv_75{
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    background-color: var( --figma-color-bg-brand);
    padding: 0.125rem;
    border-radius: 100%;
    color: #fff
}
._run-again-button_1r9fv_75:hover{
    background-color: var( --figma-color-bg-brand-hover);
    cursor: pointer;
}
/* .title-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem
} */

/* HOME */
._home_1r9fv_96{
    width: 100%;
    height: 100%;
    padding: 1.5rem;

}
._home-wrapper_1r9fv_102{
    background-color: #DBEEFF;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #00499D

}
._home-title_1r9fv_114{
    font-size: 1.5rem;
    font-weight: bold;
 
}

._home-description_1r9fv_120{
    font-size: 0.75rem;
}

._home-buttons_1r9fv_124{
    display: flex;
    gap: 0.5rem;
}
._icon-button_1r9fv_128{
    padding: 0.1rem;
    border-radius: 100%;
}
._icon-button_1r9fv_128:hover{
    cursor: pointer;
    background-color: var(--figma-color-bg-brand);
    color: #fff;
}
._setting-modal_1r9fv_137{
    width: 280px;
    padding: 1rem;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLEtBQUs7SUFDTCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7OztBQUdoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0RBQWtEO0lBQ2xELG1CQUFtQjtJQUNuQiw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDZDQUE2QztBQUNqRDtBQUNBOztJQUVJLCtDQUErQztJQUMvQztBQUNKO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsNkNBQTZDO0FBQ2pEO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLDRCQUE0QjtJQUM1QixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLDJDQUEyQztJQUMzQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7O0FBRWY7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksb0RBQW9EO0lBQ3BELGVBQWU7QUFDbkI7QUFDQTs7Ozs7R0FLRzs7QUFFSCxTQUFTO0FBQ1Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNUOztBQUVKO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cblxufVxuLmZpbHRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZykgKi9cbn1cbi5maWx0ZXItdGFnc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmlsdGVyLWl0ZW17XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5maWx0ZXItaXRlbTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLmZpbHRlci1pdGVtLWFjdGl2ZXtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWludmVyc2UpO1xuICAgIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uaW52ZXJzZSlcbn1cbi5maWx0ZXItaXRlbS1hY3RpdmU6aG92ZXJ7XG4gICAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWhvdmVyKTtcbn1cbi5yZXN1bHRze1xuICAgIGhlaWdodDogOTAlO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gNHJlbSAwLjVyZW0gO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxufVxuLnJlc3VsdC1pdGVte1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDAuNXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xufVxuLnJlc3VsdC1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tZmlnbWEtY29sb3ItYmctaG92ZXIpO1xufVxuLnJlc3VsdC1uYW1le1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZXN1bHQtbWVzc2FnZXtcbiAgICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlc3VsdC1yaWdodHtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG5cbi5ydW4tYWdhaW4tYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDFyZW07XG4gICAgcmlnaHQ6IDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbiAgICBwYWRkaW5nOiAwLjEyNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmXG59XG4ucnVuLWFnYWluLWJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tZmlnbWEtY29sb3ItYmctYnJhbmQtaG92ZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qIC50aXRsZS1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW1cbn0gKi9cblxuLyogSE9NRSAqL1xuLmhvbWV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcblxufVxuLmhvbWUtd3JhcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJFRUZGO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBjb2xvcjogIzAwNDk5RFxuXG59XG4uaG9tZS10aXRsZXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiBcbn1cblxuLmhvbWUtZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG4uaG9tZS1idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVyZW07XG59XG4uaWNvbi1idXR0b257XG4gICAgcGFkZGluZzogMC4xcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uaWNvbi1idXR0b246aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5zZXR0aW5nLW1vZGFse1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xufSJdfQ== */`;
        document.head.append(element);
      }
      styles_default4 = { "container": "_container_1r9fv_1", "filter": "_filter_1r9fv_10", "filter-tags": "_filter-tags_1r9fv_18", "filter-item": "_filter-item_1r9fv_23", "filter-item-active": "_filter-item-active_1r9fv_31", "results": "_results_1r9fv_40", "result-item": "_result-item_1r9fv_50", "result-name": "_result-name_1r9fv_62", "result-message": "_result-message_1r9fv_65", "result-right": "_result-right_1r9fv_69", "run-again-button": "_run-again-button_1r9fv_75", "home": "_home_1r9fv_96", "home-wrapper": "_home-wrapper_1r9fv_102", "home-title": "_home-title_1r9fv_114", "home-description": "_home-description_1r9fv_120", "home-buttons": "_home-buttons_1r9fv_124", "icon-button": "_icon-button_1r9fv_128", "setting-modal": "_setting-modal_1r9fv_137" };
    }
  });

  // src/ui.jsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin(data) {
    const handleStartClick = () => {
      emit("START");
    };
    const result = _(data.result);
    return /* @__PURE__ */ y("div", { className: styles_default4["container"] }, Object.keys(result.current).length === 0 && /* @__PURE__ */ y(
      Home,
      {
        handleStartClick,
        options: data.options
      }
    ), Object.keys(result.current).length > 0 && /* @__PURE__ */ y(Result, { result: result.current }));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.jsx"() {
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_Home();
      init_Result();
      init_styles4();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.js--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.js--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();