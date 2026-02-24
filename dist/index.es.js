import ae, { useState as W, useEffect as G } from "react";
import oe from "logiks-chart";
import { Settings as se } from "lucide-react";
var _ = { exports: {} }, E = {};
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
function ie() {
  if (q) return E;
  q = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function s(c, t, l) {
    var m = null;
    if (l !== void 0 && (m = "" + l), t.key !== void 0 && (m = "" + t.key), "key" in t) {
      l = {};
      for (var y in t)
        y !== "key" && (l[y] = t[y]);
    } else l = t;
    return t = l.ref, {
      $$typeof: r,
      type: c,
      key: m,
      ref: t !== void 0 ? t : null,
      props: l
    };
  }
  return E.Fragment = a, E.jsx = s, E.jsxs = s, E;
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
function le() {
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
    function s(e) {
      try {
        a(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var i = n.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), a(e);
      }
    }
    function c(e) {
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
    function l() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (C.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function y(e, n) {
      function i() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function b() {
      var e = r(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, n, i, d, g, v, N, A) {
      return i = v.ref, e = {
        $$typeof: P,
        type: e,
        key: n,
        props: v,
        _owner: g
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
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
    function u(e, n, i, d, g, v, N, A) {
      var f = n.children;
      if (f !== void 0)
        if (d)
          if (te(f)) {
            for (d = 0; d < f.length; d++)
              p(f[d]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(f);
      if (C.call(n, "key")) {
        f = r(e);
        var j = Object.keys(n).filter(function(ne) {
          return ne !== "key";
        });
        d = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", L[f + d] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          f,
          j,
          f
        ), L[f + d] = !0);
      }
      if (f = null, i !== void 0 && (s(i), f = "" + i), m(n) && (s(n.key), f = "" + n.key), "key" in n) {
        i = {};
        for (var S in n)
          S !== "key" && (i[S] = n[S]);
      } else i = n;
      return f && y(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        f,
        v,
        g,
        t(),
        i,
        N,
        A
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var x = ae, P = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), X = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), T = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, te = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, Y = {}, D = x.react_stack_bottom_frame.bind(
      x,
      l
    )(), $ = k(c(l)), L = {};
    R.Fragment = w, R.jsx = function(e, n, i, d, g) {
      var v = 1e4 > T.recentlyCreatedOwnerStacks++;
      return u(
        e,
        n,
        i,
        !1,
        d,
        g,
        v ? Error("react-stack-top-frame") : D,
        v ? k(c(e)) : $
      );
    }, R.jsxs = function(e, n, i, d, g) {
      var v = 1e4 > T.recentlyCreatedOwnerStacks++;
      return u(
        e,
        n,
        i,
        !0,
        d,
        g,
        v ? Error("react-stack-top-frame") : D,
        v ? k(c(e)) : $
      );
    };
  })()), R;
}
var F;
function ce() {
  return F || (F = 1, process.env.NODE_ENV === "production" ? _.exports = ie() : _.exports = le()), _.exports;
}
var o = ce();
const ue = {
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
function de(r) {
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
    const s = Object.keys(a).find((c) => typeof a[c] == "number");
    if (s) return { value: a[s], label: a.category ?? a.title };
  }
  if (typeof r == "object") {
    const a = Object.keys(r).find((s) => typeof r[s] == "number");
    if (a) return { value: r[a], label: r.label ?? r.title };
  }
  return { value: "--" };
}
function me(r) {
  return Array.isArray(r) && r.length > 0 ? r : typeof r == "object" && r !== null ? [r] : [];
}
async function J(r, a, s, c = void 0, t = void 0, l = {}) {
  try {
    let m = s;
    return m || (m = (await fetch(r.baseURL + r.registerQuery, {
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
        queryid: m,
        filter: l,
        refid: c,
        page: 0,
        limit: 1e4
      })
    }).then((b) => b.json());
  } catch (m) {
    throw m;
  }
}
function be({ cardConfig: r, methods: a = {}, sqlOpsUrls: s, module_refid: c }) {
  const { source: t } = r, [l, m] = W(0);
  return G(() => {
    (async () => {
      let b = {};
      if (t?.type === "method") {
        const u = a[t.method];
        b = u ? await Promise.resolve(u()) : {};
      } else if (t?.type === "api" && t.url)
        b = await fetch(t.url, {
          method: t.method || "GET",
          headers: t.headers || {}
        }).then((u) => u.json());
      else if (t?.type === "sql") {
        if (!s) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          let u;
          t.queryid || (u = {
            table: t.table,
            cols: t.columns ?? t.cols,
            where: t.where ?? {},
            orderby: t.orderby ?? "",
            groupby: t.groupby ?? ""
          });
          const p = await J(s, u, t?.queryid, void 0, c);
          b = p?.data?.data ?? p?.data ?? {};
        } catch (u) {
          console.error("API fetch failed:", u);
        }
      }
      const h = fe(b);
      m(h);
    })();
  }, [JSON.stringify(t)]), /* @__PURE__ */ o.jsx("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ o.jsx("span", { className: "text-3xl text-center tracking-tight", children: l?.value ?? "--" }) });
}
function pe({ cardConfig: r, methods: a = {}, sqlOpsUrls: s, module_refid: c }) {
  const { source: t } = r, [l, m] = W(0);
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
        if (!s) {
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
          const x = await J(s, p, t?.queryid, void 0, c);
          h = x?.data?.data ?? x?.data ?? [];
        } catch (p) {
          console.error("API fetch failed:", p);
        }
      }
      const u = me(h);
      m(u);
    })();
  }, [JSON.stringify(t)]), !Array.isArray(l))
    return console.warn("GridCard expected array but got:", l), /* @__PURE__ */ o.jsx("div", { children: "No table data" });
  if (!l.length) return /* @__PURE__ */ o.jsx("div", { children: "No records found" });
  const y = Object.keys(l[0] || {});
  return /* @__PURE__ */ o.jsx("div", { className: "w-full overflow-auto rounded-lg ", children: /* @__PURE__ */ o.jsxs("table", { className: "w-full text-sm ", children: [
    /* @__PURE__ */ o.jsx("thead", { className: "bg-neutral-100 ", children: /* @__PURE__ */ o.jsx("tr", { children: y.map((b) => /* @__PURE__ */ o.jsx("th", { className: "p-3 text-left font-semibold capitalize", children: b.replace(/_/g, " ") }, b)) }) }),
    /* @__PURE__ */ o.jsx("tbody", { children: l.map((b, h) => /* @__PURE__ */ o.jsx("tr", { className: "odd:bg-white even:bg-neutral-50", children: y.map((u) => /* @__PURE__ */ o.jsx("td", { className: "p-3  ", children: b[u] }, u)) }, h)) })
  ] }) });
}
const he = ({ cardConfig: r, methods: a = {}, sqlOpsUrls: s, module_refid: c }) => {
  if (!r?.config?.type) return null;
  switch (r?.config.type) {
    case "number":
      return /* @__PURE__ */ o.jsx(be, { module_refid: c, cardConfig: r, methods: a, sqlOpsUrls: s });
    case "grid":
      return /* @__PURE__ */ o.jsx(pe, { module_refid: c, cardConfig: r, methods: a, sqlOpsUrls: s });
    default:
      return /* @__PURE__ */ o.jsx(oe, { module_refid: c, graph_config: r, methods: a, sqlOpsConfig: s });
  }
};
function ye({ config: r, methods: a, sqlOpsUrls: s, module_refid: c }) {
  const t = r.width ?? 6, l = r?.config?.type === "number";
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `
    ${l ? "col-span-6" : "col-span-12"}
    md:col-span-6
    ${ue[de(Number(t))] || "lg:col-span-4"}
    bg-white border border-neutral-200
    rounded-md shadow-sm hover:shadow-md
    transition-all duration-300
    flex flex-col h-max
  `,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: " p-1 flex items-center justify-between border-neutral-200 ", children: /* @__PURE__ */ o.jsx("h2", { className: "text-base  text-neutral-700 text-xs ", children: r.title }) }),
        /* @__PURE__ */ o.jsx("div", { className: "p-1 flex-1 mb-5", children: /* @__PURE__ */ o.jsx(he, { module_refid: c, cardConfig: r, methods: a ?? {}, sqlOpsUrls: s }) })
      ]
    }
  );
}
function je({ dashboardJson: r, methods: a }) {
  return /* @__PURE__ */ o.jsxs("div", { className: "px-4 py-2 space-y-1", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ o.jsx("h1", { className: "text-2xl font-bold tracking-tight text-neutral-800", children: r.title }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `
            p-2 rounded-lg border border-neutral-200 
            hover:bg-neutral-100 
            transition-all duration-200
          `,
          onClick: () => console.log("Open Settings"),
          children: /* @__PURE__ */ o.jsx(se, { size: 20, className: "text-neutral-600 " })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-1 auto-rows-min", children: Object.values(r.cards).map((s, c) => /* @__PURE__ */ o.jsx(ye, { module_refid: r?.module_refid, config: s, methods: a || {}, sqlOpsUrls: r.endPoints }, c)) })
  ] });
}
export {
  je as LogiksDashboard,
  je as default
};
