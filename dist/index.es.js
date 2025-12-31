import ne, { useState as W, useEffect as M } from "react";
import oe from "logiks-chart";
import { Settings as ae } from "lucide-react";
var T = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function se() {
  if (F) return E;
  F = 1;
  var o = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function n(t, i, m) {
    var h = null;
    if (m !== void 0 && (h = "" + m), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      m = {};
      for (var b in i)
        b !== "key" && (m[b] = i[b]);
    } else m = i;
    return i = m.ref, {
      $$typeof: o,
      type: t,
      key: h,
      ref: i !== void 0 ? i : null,
      props: m
    };
  }
  return E.Fragment = c, E.jsx = n, E.jsxs = n, E;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function le() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && (function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case Q:
          return "Profiler";
        case G:
          return "StrictMode";
        case H:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case U:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case O:
            r = e._payload, e = e._init;
            try {
              return o(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function n(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var l = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), c(e);
      }
    }
    function t(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function m() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, r) {
      function l() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function f() {
      var e = o(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function s(e, r, l, u, x, g, k, S) {
      return l = g.ref, e = {
        $$typeof: A,
        type: e,
        key: r,
        props: g,
        _owner: x
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function y(e, r, l, u, x, g, k, S) {
      var d = r.children;
      if (d !== void 0)
        if (u)
          if (re(d)) {
            for (u = 0; u < d.length; u++)
              p(d[u]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(d);
      if (C.call(r, "key")) {
        d = o(e);
        var j = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        u = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", D[d + u] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          d,
          j,
          d
        ), D[d + u] = !0);
      }
      if (d = null, l !== void 0 && (n(l), d = "" + l), h(r) && (n(r.key), d = "" + r.key), "key" in r) {
        l = {};
        for (var P in r)
          P !== "key" && (l[P] = r[P]);
      } else l = r;
      return d && b(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), s(
        e,
        d,
        g,
        x,
        i(),
        l,
        k,
        S
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === A && e._store && (e._store.validated = 1);
    }
    var R = ne, A = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), B = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), w = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, re = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, $ = {}, I = R.react_stack_bottom_frame.bind(
      R,
      m
    )(), L = N(t(m)), D = {};
    v.Fragment = _, v.jsx = function(e, r, l, u, x) {
      var g = 1e4 > w.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        l,
        !1,
        u,
        x,
        g ? Error("react-stack-top-frame") : I,
        g ? N(t(e)) : L
      );
    }, v.jsxs = function(e, r, l, u, x) {
      var g = 1e4 > w.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        l,
        !0,
        u,
        x,
        g ? Error("react-stack-top-frame") : I,
        g ? N(t(e)) : L
      );
    };
  })()), v;
}
var z;
function ie() {
  return z || (z = 1, process.env.NODE_ENV === "production" ? T.exports = se() : T.exports = le()), T.exports;
}
var a = ie();
const ce = {
  12: "lg:col-span-12",
  11: "lg:col-span-11",
  10: "lg:col-span-10",
  9: "lg:col-span-9",
  8: "lg:col-span-8",
  7: "lg:col-span-7",
  6: "lg:col-span-6",
  5: "lg:col-span-5",
  4: "lg:col-span-4",
  3: "lg:col-span-3",
  2: "lg:col-span-2",
  1: "lg:col-span-1"
};
function ue(o) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(o) ? o : 6;
}
function de({ cardConfig: o, methods: c = {}, sqlOpsUrls: n }) {
  const { source: t } = o, [i, m] = W(0);
  M(() => {
    (async () => {
      let f = {};
      if (console.log("source type"), t?.type === "method") {
        const s = c[t.method];
        f = s ? await Promise.resolve(s()) : {};
      } else if (t?.type === "api" && t.url)
        f = await fetch(t.url, {
          method: t.method || "GET",
          headers: t.headers || {}
        }).then((s) => s.json());
      else if (t?.type === "sql") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const s = await fetch(n.baseURL + n.registerQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${n?.accessToken}`
            },
            body: JSON.stringify({
              query: {
                cols: t.cols,
                table: t.table
              }
            })
          }).then((p) => p.json());
          if (!s.queryid) {
            console.log("queryid not generated");
            return;
          }
          const y = await fetch(n.baseURL + n.runQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${n?.accessToken}`
            },
            body: JSON.stringify({
              queryid: s.queryid,
              filter: {}
            })
          }).then((p) => p.json());
          f = y?.data?.data ?? y?.data ?? {};
        } catch (s) {
          console.error("API fetch failed:", s);
        }
      }
      console.log("CardRenderer result", f), m(f);
    })();
  }, [JSON.stringify(t)]);
  const h = typeof i == "number" || typeof i == "string";
  return /* @__PURE__ */ a.jsx("div", { className: `
      flex flex-col justify-center items-start gap-2 

    
    `, children: /* @__PURE__ */ a.jsx("span", { className: "text-3xl font-bold tracking-tight", children: h ? i : "--" }) });
}
function fe({ cardConfig: o, methods: c = {}, sqlOpsUrls: n }) {
  const { source: t } = o, [i, m] = W(0);
  if (M(() => {
    (async () => {
      let f = {};
      if (console.log("source type"), t?.type === "method") {
        const s = c[t.method];
        f = s ? await Promise.resolve(s()) : {};
      } else if (t?.type === "api" && t.url)
        f = await fetch(t.url, {
          method: t.method || "GET",
          headers: t.headers || {}
        }).then((s) => s.json());
      else if (t?.type === "sql") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const s = await fetch(n.baseURL + n.registerQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${n?.accessToken}`
            },
            body: JSON.stringify({
              query: {
                cols: t.cols,
                table: t.table
              }
            })
          }).then((p) => p.json());
          if (!s.queryid) {
            console.log("queryid not generated");
            return;
          }
          const y = await fetch(n.baseURL + n.runQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${n?.accessToken}`
            },
            body: JSON.stringify({
              queryid: s.queryid,
              filter: {}
            })
          }).then((p) => p.json());
          f = y?.data?.data ?? y?.data ?? {};
        } catch (s) {
          console.error("API fetch failed:", s);
        }
      }
      console.log("CardRenderer result", f), m(f);
    })();
  }, [JSON.stringify(t)]), !Array.isArray(i))
    return console.warn("GridCard expected array but got:", i), /* @__PURE__ */ a.jsx("div", { children: "No table data" });
  if (!i.length) return /* @__PURE__ */ a.jsx("div", { children: "No records found" });
  const h = Object.keys(i[0] || {});
  return /* @__PURE__ */ a.jsx("div", { className: "w-full overflow-auto rounded-lg ", children: /* @__PURE__ */ a.jsxs("table", { className: "w-full text-sm border", children: [
    /* @__PURE__ */ a.jsx("thead", { className: "bg-neutral-100 ", children: /* @__PURE__ */ a.jsx("tr", { children: h.map((b) => /* @__PURE__ */ a.jsx("th", { className: "p-3 text-left font-semibold capitalize", children: b.replace(/_/g, " ") }, b)) }) }),
    /* @__PURE__ */ a.jsx("tbody", { children: i.map((b, f) => /* @__PURE__ */ a.jsx("tr", { className: "odd:bg-white even:bg-neutral-50", children: h.map((s) => /* @__PURE__ */ a.jsx("td", { className: "p-3 border-b ", children: b[s] }, s)) }, f)) })
  ] }) });
}
const me = ({ cardConfig: o, methods: c = {}, sqlOpsUrls: n }) => {
  if (!o?.config?.type) return null;
  switch (o?.config.type) {
    case "number":
      return /* @__PURE__ */ a.jsx(de, { cardConfig: o, methods: c, sqlOpsUrls: n });
    case "grid":
      return /* @__PURE__ */ a.jsx(fe, { cardConfig: o, methods: c, sqlOpsUrls: n });
    default:
      return /* @__PURE__ */ a.jsx(oe, { config: o, methods: c, sqlOpsConfig: n });
  }
};
function be({ config: o, methods: c, sqlOpsUrls: n }) {
  const t = o.width ?? 6;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `col-span-12 md:col-span-6 ${ce[ue(Number(t))] || "lg:col-span-4"}
        bg-white  border border-neutral-200 
        rounded-xl shadow-sm hover:shadow-md transition-all duration-300
         flex flex-col   
  `,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: " px-4 py-2 flex items-center justify-between border-b border-neutral-200 ", children: /* @__PURE__ */ a.jsx("h2", { className: "text-base font-semibold text-neutral-700 ", children: o.title }) }),
        /* @__PURE__ */ a.jsx("div", { className: " p-4 flex-1", children: /* @__PURE__ */ a.jsx(me, { cardConfig: o, methods: c ?? {}, sqlOpsUrls: n }) })
      ]
    }
  );
}
function ye({ dashboardJson: o, methods: c }) {
  return /* @__PURE__ */ a.jsxs("div", { className: "p-5 space-y-6", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ a.jsx("h1", { className: "text-2xl font-bold tracking-tight text-neutral-800", children: o.title }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: `
            p-2 rounded-lg border border-neutral-200 
            hover:bg-neutral-100 
            transition-all duration-200
          `,
          onClick: () => console.log("Open Settings"),
          children: /* @__PURE__ */ a.jsx(ae, { size: 20, className: "text-neutral-600 " })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-12 gap-5 auto-rows-min", children: Object.values(o.cards).map((n, t) => /* @__PURE__ */ a.jsx(be, { config: n, methods: c || {}, sqlOpsUrls: o.endPoints }, t)) })
  ] });
}
export {
  ye as LogiksDashboard,
  ye as default
};
