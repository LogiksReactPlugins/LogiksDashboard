import ne, { useState as W, useEffect as M } from "react";
import ae from "logiks-chart";
import { Settings as oe } from "lucide-react";
var T = { exports: {} }, j = {};
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
  if (F) return j;
  F = 1;
  var a = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function n(t, i, m) {
    var h = null;
    if (m !== void 0 && (h = "" + m), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      m = {};
      for (var b in i)
        b !== "key" && (m[b] = i[b]);
    } else m = i;
    return i = m.ref, {
      $$typeof: a,
      type: t,
      key: h,
      ref: i !== void 0 ? i : null,
      props: m
    };
  }
  return j.Fragment = c, j.jsx = n, j.jsxs = n, j;
}
var E = {};
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
    function a(e) {
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
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case O:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
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
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = k.A;
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
      var e = a(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function s(e, r, l, u, x, g, N, S) {
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
        value: N
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function y(e, r, l, u, x, g, N, S) {
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
        d = a(e);
        var v = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        u = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", D[d + u] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          d,
          v,
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
        N,
        S
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === A && e._store && (e._store.validated = 1);
    }
    var R = ne, A = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), B = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), k = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, re = Array.isArray, w = console.createTask ? console.createTask : function() {
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
    )(), L = w(t(m)), D = {};
    E.Fragment = _, E.jsx = function(e, r, l, u, x) {
      var g = 1e4 > k.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        l,
        !1,
        u,
        x,
        g ? Error("react-stack-top-frame") : I,
        g ? w(t(e)) : L
      );
    }, E.jsxs = function(e, r, l, u, x) {
      var g = 1e4 > k.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        l,
        !0,
        u,
        x,
        g ? Error("react-stack-top-frame") : I,
        g ? w(t(e)) : L
      );
    };
  })()), E;
}
var z;
function ie() {
  return z || (z = 1, process.env.NODE_ENV === "production" ? T.exports = se() : T.exports = le()), T.exports;
}
var o = ie();
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
function ue(a) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(a) ? a : 6;
}
function de({ cardConfig: a, methods: c = {}, sqlOpsUrls: n }) {
  const { source: t } = a, [i, m] = W(0);
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
  return /* @__PURE__ */ o.jsx("div", { className: `
      flex flex-col justify-center items-start gap-2 

    
    `, children: /* @__PURE__ */ o.jsx("span", { className: "text-3xl font-bold tracking-tight", children: h ? i : "--" }) });
}
function fe({ cardConfig: a, methods: c = {}, sqlOpsUrls: n }) {
  const { source: t } = a, [i, m] = W(0);
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
    return console.warn("GridCard expected array but got:", i), /* @__PURE__ */ o.jsx("div", { children: "No table data" });
  if (!i.length) return /* @__PURE__ */ o.jsx("div", { children: "No records found" });
  const h = Object.keys(i[0] || {});
  return /* @__PURE__ */ o.jsx("div", { className: "w-full overflow-auto rounded-lg ", children: /* @__PURE__ */ o.jsxs("table", { className: "w-full text-sm border", children: [
    /* @__PURE__ */ o.jsx("thead", { className: "bg-neutral-100 dark:bg-neutral-800", children: /* @__PURE__ */ o.jsx("tr", { children: h.map((b) => /* @__PURE__ */ o.jsx("th", { className: "p-3 text-left font-semibold capitalize", children: b.replace(/_/g, " ") }, b)) }) }),
    /* @__PURE__ */ o.jsx("tbody", { children: i.map((b, f) => /* @__PURE__ */ o.jsx("tr", { className: "odd:bg-white even:bg-neutral-50 dark:odd:bg-neutral-900 dark:even:bg-neutral-800", children: h.map((s) => /* @__PURE__ */ o.jsx("td", { className: "p-3 border-b dark:border-neutral-700", children: b[s] }, s)) }, f)) })
  ] }) });
}
const me = ({ cardConfig: a, methods: c = {}, sqlOpsUrls: n }) => {
  if (!a?.config?.type) return null;
  switch (console.log("sqlOpsUrls", n), a?.config.type) {
    case "number":
      return /* @__PURE__ */ o.jsx(de, { cardConfig: a, methods: c, sqlOpsUrls: n });
    case "grid":
      return /* @__PURE__ */ o.jsx(fe, { cardConfig: a, methods: c, sqlOpsUrls: n });
    default:
      return /* @__PURE__ */ o.jsx(ae, { config: a, methods: c, sqlOpsConfig: n });
  }
};
function be({ config: a, methods: c, sqlOpsUrls: n }) {
  const t = a.width ?? 6;
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `col-span-12 md:col-span-6 ${ce[ue(Number(t))] || "lg:col-span-4"}
        bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700
        rounded-xl shadow-sm hover:shadow-md transition-all duration-300
         flex flex-col gap-3
  `,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: " px-4 py-2 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700", children: /* @__PURE__ */ o.jsx("h2", { className: "text-base font-semibold text-neutral-700 dark:text-neutral-100", children: a.title }) }),
        /* @__PURE__ */ o.jsx("div", { className: " p-4 flex-1", children: /* @__PURE__ */ o.jsx(me, { cardConfig: a, methods: c ?? {}, sqlOpsUrls: n }) })
      ]
    }
  );
}
function ye({ dashboardJson: a, methods: c }) {
  return /* @__PURE__ */ o.jsxs("div", { className: "p-5 space-y-6", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ o.jsx("h1", { className: "text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100", children: a.title }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `
            p-2 rounded-lg border border-neutral-200 dark:border-neutral-700
            hover:bg-neutral-100 dark:hover:bg-neutral-800
            transition-all duration-200
          `,
          onClick: () => console.log("Open Settings"),
          children: /* @__PURE__ */ o.jsx(oe, { size: 20, className: "text-neutral-600 dark:text-neutral-200" })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-5 auto-rows-min", children: Object.values(a.cards).map((n, t) => /* @__PURE__ */ o.jsx(be, { config: n, methods: c || {}, sqlOpsUrls: a.endPoints }, t)) })
  ] });
}
export {
  ye as LogiksDashboard,
  ye as default
};
