import ae, { useState as S, useEffect as G } from "react";
import oe from "logiks-chart";
import { EyeOff as se, Eye as ie } from "lucide-react";
var R = { exports: {} }, E = {};
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
function le() {
  if (q) return E;
  q = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function s(i, t, l) {
    var u = null;
    if (l !== void 0 && (u = "" + l), t.key !== void 0 && (u = "" + t.key), "key" in t) {
      l = {};
      for (var y in t)
        y !== "key" && (l[y] = t[y]);
    } else l = t;
    return t = l.ref, {
      $$typeof: r,
      type: i,
      key: u,
      ref: t !== void 0 ? t : null,
      props: l
    };
  }
  return E.Fragment = a, E.jsx = s, E.jsxs = s, E;
}
var w = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ce() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
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
          case C:
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
        var c = n.error, m = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          m
        ), a(e);
      }
    }
    function i(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === C)
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
    function u(e) {
      if (I.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function y(e, n) {
      function c() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function d() {
      var e = r(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function h(e, n, c, m, x, v, N, A) {
      return c = v.ref, e = {
        $$typeof: O,
        type: e,
        key: n,
        props: v,
        _owner: x
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: d
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
    function f(e, n, c, m, x, v, N, A) {
      var b = n.children;
      if (b !== void 0)
        if (m)
          if (te(b)) {
            for (m = 0; m < b.length; m++)
              p(b[m]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(b);
      if (I.call(n, "key")) {
        b = r(e);
        var j = Object.keys(n).filter(function(ne) {
          return ne !== "key";
        });
        m = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", L[b + m] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          m,
          b,
          j,
          b
        ), L[b + m] = !0);
      }
      if (b = null, c !== void 0 && (s(c), b = "" + c), u(n) && (s(n.key), b = "" + n.key), "key" in n) {
        c = {};
        for (var P in n)
          P !== "key" && (c[P] = n[P]);
      } else c = n;
      return b && y(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), h(
        e,
        b,
        v,
        x,
        t(),
        c,
        N,
        A
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === O && e._store && (e._store.validated = 1);
    }
    var g = ae, O = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), X = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), re = Symbol.for("react.client.reference"), T = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, te = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, D = {}, $ = g.react_stack_bottom_frame.bind(
      g,
      l
    )(), z = k(i(l)), L = {};
    w.Fragment = _, w.jsx = function(e, n, c, m, x) {
      var v = 1e4 > T.recentlyCreatedOwnerStacks++;
      return f(
        e,
        n,
        c,
        !1,
        m,
        x,
        v ? Error("react-stack-top-frame") : $,
        v ? k(i(e)) : z
      );
    }, w.jsxs = function(e, n, c, m, x) {
      var v = 1e4 > T.recentlyCreatedOwnerStacks++;
      return f(
        e,
        n,
        c,
        !0,
        m,
        x,
        v ? Error("react-stack-top-frame") : $,
        v ? k(i(e)) : z
      );
    };
  })()), w;
}
var W;
function ue() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? R.exports = le() : R.exports = ce()), R.exports;
}
var o = ue();
const de = {
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
function fe(r) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(r) ? r : 6;
}
function me(r) {
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
    const s = Object.keys(a).find((i) => typeof a[i] == "number");
    if (s) return { value: a[s], label: a.category ?? a.title };
  }
  if (typeof r == "object") {
    const a = Object.keys(r).find((s) => typeof r[s] == "number");
    if (a) return { value: r[a], label: r.label ?? r.title };
  }
  return { value: "--" };
}
function be(r) {
  return Array.isArray(r) && r.length > 0 ? r : typeof r == "object" && r !== null ? [r] : [];
}
async function J(r, a, s, i = void 0, t = void 0, l = {}) {
  try {
    let u = s;
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
        filter: l,
        refid: i,
        page: 0,
        limit: 1e4
      })
    }).then((d) => d.json());
  } catch (u) {
    throw u;
  }
}
function pe({ cardConfig: r, methods: a = {}, sqlOpsUrls: s, module_refid: i }) {
  const { source: t } = r, [l, u] = S(0);
  return G(() => {
    (async () => {
      let d = {};
      if (t?.type === "method") {
        const f = a[t.method];
        d = f ? await Promise.resolve(f()) : {};
      } else if (t?.type === "api" && t.url)
        d = await fetch(t.url, {
          method: t.method || "GET",
          headers: t.headers || {}
        }).then((f) => f.json());
      else if (t?.type === "sql") {
        if (!s) {
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
          const p = await J(s, f, t?.queryid, void 0, i);
          d = p?.data?.data ?? p?.data ?? {};
        } catch (f) {
          console.error("API fetch failed:", f);
        }
      }
      const h = me(d);
      u(h);
    })();
  }, [JSON.stringify(t)]), /* @__PURE__ */ o.jsx("div", { className: "flex flex-col justify-center", children: /* @__PURE__ */ o.jsx("span", { className: "text-3xl text-center tracking-tight", children: l?.value ?? "--" }) });
}
function he({ cardConfig: r, methods: a = {}, sqlOpsUrls: s, module_refid: i }) {
  const { source: t } = r, [l, u] = S(0);
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
          const g = await J(s, p, t?.queryid, void 0, i);
          h = g?.data?.data ?? g?.data ?? [];
        } catch (p) {
          console.error("API fetch failed:", p);
        }
      }
      const f = be(h);
      u(f);
    })();
  }, [JSON.stringify(t)]), !Array.isArray(l))
    return console.warn("GridCard expected array but got:", l), /* @__PURE__ */ o.jsx("div", { children: "No table data" });
  if (!l.length) return /* @__PURE__ */ o.jsx("div", { children: "No records found" });
  const y = Object.keys(l[0] || {});
  return /* @__PURE__ */ o.jsx("div", { className: "w-full overflow-auto rounded-lg ", children: /* @__PURE__ */ o.jsxs("table", { className: "w-full text-sm ", children: [
    /* @__PURE__ */ o.jsx("thead", { className: "bg-neutral-100 ", children: /* @__PURE__ */ o.jsx("tr", { children: y.map((d) => /* @__PURE__ */ o.jsx("th", { className: "p-3 text-left font-semibold capitalize", children: d.replace(/_/g, " ") }, d)) }) }),
    /* @__PURE__ */ o.jsx("tbody", { children: l.map((d, h) => /* @__PURE__ */ o.jsx("tr", { className: "odd:bg-white even:bg-neutral-50", children: y.map((f) => /* @__PURE__ */ o.jsx("td", { className: "p-3  ", children: d[f] }, f)) }, h)) })
  ] }) });
}
const ye = ({ cardConfig: r, methods: a = {}, sqlOpsUrls: s, module_refid: i }) => {
  if (!r?.config?.type) return null;
  switch (r?.config.type) {
    case "number":
      return /* @__PURE__ */ o.jsx(pe, { module_refid: i, cardConfig: r, methods: a, sqlOpsUrls: s });
    case "grid":
      return /* @__PURE__ */ o.jsx(he, { module_refid: i, cardConfig: r, methods: a, sqlOpsUrls: s });
    default:
      return /* @__PURE__ */ o.jsx(oe, { module_refid: i, graph_config: r, methods: a, sqlOpsConfig: s });
  }
};
function ve({ config: r, methods: a, sqlOpsUrls: s, module_refid: i, onClick: t }) {
  const [l, u] = S(!1), y = r.width ?? 6, d = r?.config?.type === "number";
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      onClick: t,
      className: `
    ${d ? "col-span-6" : "col-span-12"}
    md:col-span-6
    ${de[fe(Number(y))] || "lg:col-span-4"}
    bg-white border border-neutral-200
    rounded-md shadow-sm hover:shadow-md
    transition-all duration-300
    flex flex-col h-max cursor-pointer
  `,
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "p-1 flex items-center justify-between border-neutral-200 relative", children: [
          /* @__PURE__ */ o.jsx("h2", { className: "text-neutral-700 text-xs", children: r.title }),
          r?.description && /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: () => u((h) => !h),
                className: "text-neutral-600 hover:text-black cursor-pointer",
                children: l ? /* @__PURE__ */ o.jsx(se, { size: 16 }) : /* @__PURE__ */ o.jsx(ie, { size: 16 })
              }
            ),
            l && /* @__PURE__ */ o.jsx("div", { className: "absolute right-0 w-64 bg-white rounded-md shadow-lg p-2 z-50", children: /* @__PURE__ */ o.jsx("p", { className: "text-xs text-gray-700", children: r.description }) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "p-1 flex-1 mb-5", children: /* @__PURE__ */ o.jsx(ye, { module_refid: i, cardConfig: r, methods: a ?? {}, sqlOpsUrls: s }) })
      ]
    }
  );
}
function Ee({
  dashboardJson: r,
  methods: a,
  handleAction: s = () => {
  }
}) {
  return /* @__PURE__ */ o.jsxs("div", { className: "px-4 py-2 space-y-1", children: [
    /* @__PURE__ */ o.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ o.jsx("h1", { className: "text-2xl font-bold tracking-tight text-neutral-800", children: r.title }) }),
    /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-12 gap-1 auto-rows-min", children: Object.values(r.cards).map((i, t) => /* @__PURE__ */ o.jsx(
      ve,
      {
        module_refid: r?.module_refid,
        config: i,
        onClick: () => {
          i?.url && s(i?.url);
        },
        methods: a || {},
        sqlOpsUrls: r.endPoints
      },
      t
    )) })
  ] });
}
export {
  Ee as LogiksDashboard,
  Ee as default
};
