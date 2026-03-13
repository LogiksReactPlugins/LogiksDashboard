import ae, { useState as W, useEffect as G } from "react";
import oe from "logiks-chart";
var _ = { exports: {} }, j = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function se() {
  if (q) return j;
  q = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function o(i, t, c) {
    var u = null;
    if (c !== void 0 && (u = "" + c), t.key !== void 0 && (u = "" + t.key), "key" in t) {
      c = {};
      for (var y in t)
        y !== "key" && (c[y] = t[y]);
    } else c = t;
    return t = c.ref, {
      $$typeof: r,
      type: i,
      key: u,
      ref: t !== void 0 ? t : null,
      props: c
    };
  }
  return j.Fragment = a, j.jsx = o, j.jsxs = o, j;
}
var R = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function ie() {
  return z || (z = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case V:
          return "Profiler";
        case Q:
          return "StrictMode";
        case H:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case B:
            return (e._context.displayName || "Context") + ".Consumer";
          case U:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return n = e.displayName || null, n !== null ? n : r(e.type) || "Memo";
          case O:
            n = e._payload, e = e._init;
            try {
              return r(e(n));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function o(e) {
      try {
        a(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var l = n.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), a(e);
      }
    }
    function i(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var n = r(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function t() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (C.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function y(e, n) {
      function l() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function b() {
      var e = r(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, n, l, d, x, v, N, A) {
      return l = v.ref, e = {
        $$typeof: P,
        type: e,
        key: n,
        props: v,
        _owner: x
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: b
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
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function f(e, n, l, d, x, v, N, A) {
      var m = n.children;
      if (m !== void 0)
        if (d)
          if (te(m)) {
            for (d = 0; d < m.length; d++)
              p(m[d]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(m);
      if (C.call(n, "key")) {
        m = r(e);
        var E = Object.keys(n).filter(function(ne) {
          return ne !== "key";
        });
        d = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", L[m + d] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          m,
          E,
          m
        ), L[m + d] = !0);
      }
      if (m = null, l !== void 0 && (o(l), m = "" + l), u(n) && (o(n.key), m = "" + n.key), "key" in n) {
        l = {};
        for (var S in n)
          S !== "key" && (l[S] = n[S]);
      } else l = n;
      return m && y(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        m,
        v,
        x,
        t(),
        l,
        N,
        A
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var g = ae, P = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), X = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), T = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, te = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, Y = {}, D = g.react_stack_bottom_frame.bind(
      g,
      c
    )(), $ = k(i(c)), L = {};
    R.Fragment = w, R.jsx = function(e, n, l, d, x) {
      var v = 1e4 > T.recentlyCreatedOwnerStacks++;
      return f(
        e,
        n,
        l,
        !1,
        d,
        x,
        v ? Error("react-stack-top-frame") : D,
        v ? k(i(e)) : $
      );
    }, R.jsxs = function(e, n, l, d, x) {
      var v = 1e4 > T.recentlyCreatedOwnerStacks++;
      return f(
        e,
        n,
        l,
        !0,
        d,
        x,
        v ? Error("react-stack-top-frame") : D,
        v ? k(i(e)) : $
      );
    };
  })()), R;
}
var F;
function le() {
  return F || (F = 1, process.env.NODE_ENV === "production" ? _.exports = se() : _.exports = ie()), _.exports;
}
var s = le();
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
function ue(r) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(r) ? r : 6;
}
function fe(r) {
  if (typeof r == "number" || typeof r == "string")
    return { value: r };
  if (!r) return { value: "--" };
  if (Array.isArray(r) && r.length > 0) {
    const a = r[0];
    if (a.value !== void 0)
      return {
        value: a.value,
        label: a.title ?? a.name ?? void 0
      };
    const o = Object.keys(a).find((i) => typeof a[i] == "number");
    if (o) return { value: a[o], label: a.category ?? a.title };
  }
  if (typeof r == "object") {
    const a = Object.keys(r).find((o) => typeof r[o] == "number");
    if (a) return { value: r[a], label: r.label ?? r.title };
  }
  return { value: "--" };
}
function de(r) {
  return Array.isArray(r) && r.length > 0 ? r : typeof r == "object" && r !== null ? [r] : [];
}
async function J(r, a, o, i = void 0, t = void 0, c = {}) {
  try {
    let u = o;
    return u || (u = (await fetch(r.baseURL + r.registerQuery, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r?.accessToken}`
      },
      body: JSON.stringify({
        query: a,
        srcid: t
      })
    }).then((h) => h.json())).data.queryid), await fetch(r.baseURL + r.runQuery, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${r?.accessToken}`
      },
      body: JSON.stringify({
        queryid: u,
        filter: c,
        refid: i,
        page: 0,
        limit: 1e4
      })
    }).then((b) => b.json());
  } catch (u) {
    throw u;
  }
}
function me({ cardConfig: r, methods: a = {}, sqlOpsUrls: o, module_refid: i }) {
  const { source: t } = r, [c, u] = W(0);
  return G(() => {
    (async () => {
      let b = {};
      if (t?.type === "method") {
        const f = a[t.method];
        b = f ? await Promise.resolve(f()) : {};
      } else if (t?.type === "api" && t.url)
        b = await fetch(t.url, {
          method: t.method || "GET",
          headers: t.headers || {}
        }).then((f) => f.json());
      else if (t?.type === "sql") {
        if (!o) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let f;
          t.queryid || (f = {
            table: t.table,
            cols: t.columns ?? t.cols,
            where: t.where ?? {},
            orderby: t.orderby ?? "",
            groupby: t.groupby ?? ""
          });
          const p = await J(o, f, t?.queryid, void 0, i);
          b = p?.data?.data ?? p?.data ?? {};
        } catch (f) {
          console.error("API fetch failed:", f);
        }
      }
      const h = fe(b);
      u(h);
    })();
  }, [JSON.stringify(t)]), /* @__PURE__ */ s.jsx("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ s.jsx("span", { className: "text-3xl text-center tracking-tight", children: c?.value ?? "--" }) });
}
function be({ cardConfig: r, methods: a = {}, sqlOpsUrls: o, module_refid: i }) {
  const { source: t } = r, [c, u] = W(0);
  if (G(() => {
    (async () => {
      let h = {};
      if (t?.type === "method") {
        const p = a[t.method];
        h = p ? await Promise.resolve(p()) : {};
      } else if (t?.type === "api" && t.url)
        h = await fetch(t.url, {
          method: t.method || "GET",
          headers: t.headers || {}
        }).then((p) => p.json());
      else if (t?.type === "sql") {
        if (!o) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let p;
          t.queryid || (p = {
            table: t.table,
            cols: t.columns ?? t.cols,
            where: t.where ?? {},
            orderby: t.orderby ?? "",
            groupby: t.groupby ?? ""
          });
          const g = await J(o, p, t?.queryid, void 0, i);
          h = g?.data?.data ?? g?.data ?? [];
        } catch (p) {
          console.error("API fetch failed:", p);
        }
      }
      const f = de(h);
      u(f);
    })();
  }, [JSON.stringify(t)]), !Array.isArray(c))
    return console.warn("GridCard expected array but got:", c), /* @__PURE__ */ s.jsx("div", { children: "No table data" });
  if (!c.length) return /* @__PURE__ */ s.jsx("div", { children: "No records found" });
  const y = Object.keys(c[0] || {});
  return /* @__PURE__ */ s.jsx("div", { className: "w-full overflow-auto rounded-lg ", children: /* @__PURE__ */ s.jsxs("table", { className: "w-full text-sm ", children: [
    /* @__PURE__ */ s.jsx("thead", { className: "bg-neutral-100 ", children: /* @__PURE__ */ s.jsx("tr", { children: y.map((b) => /* @__PURE__ */ s.jsx("th", { className: "p-3 text-left font-semibold capitalize", children: b.replace(/_/g, " ") }, b)) }) }),
    /* @__PURE__ */ s.jsx("tbody", { children: c.map((b, h) => /* @__PURE__ */ s.jsx("tr", { className: "odd:bg-white even:bg-neutral-50", children: y.map((f) => /* @__PURE__ */ s.jsx("td", { className: "p-3  ", children: b[f] }, f)) }, h)) })
  ] }) });
}
const pe = ({ cardConfig: r, methods: a = {}, sqlOpsUrls: o, module_refid: i }) => {
  if (!r?.config?.type) return null;
  switch (r?.config.type) {
    case "number":
      return /* @__PURE__ */ s.jsx(me, { module_refid: i, cardConfig: r, methods: a, sqlOpsUrls: o });
    case "grid":
      return /* @__PURE__ */ s.jsx(be, { module_refid: i, cardConfig: r, methods: a, sqlOpsUrls: o });
    default:
      return /* @__PURE__ */ s.jsx(oe, { module_refid: i, graph_config: r, methods: a, sqlOpsConfig: o });
  }
};
function he({ config: r, methods: a, sqlOpsUrls: o, module_refid: i, onClick: t }) {
  const c = r.width ?? 6, u = r?.config?.type === "number";
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      onClick: t,
      className: `
    ${u ? "col-span-6" : "col-span-12"}
    md:col-span-6
    ${ce[ue(Number(c))] || "lg:col-span-4"}
    bg-white border border-neutral-200
    rounded-md shadow-sm hover:shadow-md
    transition-all duration-300
    flex flex-col h-max cursor-pointer
  `,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: " p-1 flex items-center justify-between border-neutral-200 ", children: /* @__PURE__ */ s.jsx("h2", { className: "text-base  text-neutral-700 text-xs ", children: r.title }) }),
        /* @__PURE__ */ s.jsx("div", { className: "p-1 flex-1 mb-5", children: /* @__PURE__ */ s.jsx(pe, { module_refid: i, cardConfig: r, methods: a ?? {}, sqlOpsUrls: o }) })
      ]
    }
  );
}
function xe({
  dashboardJson: r,
  methods: a,
  handleAction: o = () => {
  }
}) {
  return /* @__PURE__ */ s.jsxs("div", { className: "px-4 py-2 space-y-1", children: [
    /* @__PURE__ */ s.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ s.jsx("h1", { className: "text-2xl font-bold tracking-tight text-neutral-800", children: r.title }) }),
    /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-1 auto-rows-min", children: Object.values(r.cards).map((i, t) => /* @__PURE__ */ s.jsx(
      he,
      {
        module_refid: r?.module_refid,
        config: i,
        onClick: () => {
          i?.url && o(i?.url);
        },
        methods: a || {},
        sqlOpsUrls: r.endPoints
      },
      t
    )) })
  ] });
}
export {
  xe as LogiksDashboard,
  xe as default
};
