import ne, { useState as W, useEffect as G } from "react";
import ae from "logiks-chart";
import { Settings as oe } from "lucide-react";
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
var z;
function se() {
  if (z) return E;
  z = 1;
  var r = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function n(a, l, b) {
    var y = null;
    if (b !== void 0 && (y = "" + b), l.key !== void 0 && (y = "" + l.key), "key" in l) {
      b = {};
      for (var c in l)
        c !== "key" && (b[c] = l[c]);
    } else b = l;
    return l = b.ref, {
      $$typeof: r,
      type: a,
      key: y,
      ref: l !== void 0 ? l : null,
      props: b
    };
  }
  return E.Fragment = o, E.jsx = n, E.jsxs = n, E;
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
var F;
function ie() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case Q:
          return "Profiler";
        case q:
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
          case M:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case U:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case O:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function n(e) {
      try {
        o(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var i = t.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), o(e);
      }
    }
    function a(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = w.A;
      return e === null ? null : e.getOwner();
    }
    function b() {
      return Error("react-stack-top-frame");
    }
    function y(e) {
      if (C.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function c(e, t) {
      function i() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function h() {
      var e = r(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function u(e, t, i, d, x, p, N, S) {
      return i = p.ref, e = {
        $$typeof: P,
        type: e,
        key: t,
        props: p,
        _owner: x
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: h
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
    function m(e, t, i, d, x, p, N, S) {
      var f = t.children;
      if (f !== void 0)
        if (d)
          if (re(f)) {
            for (d = 0; d < f.length; d++)
              g(f[d]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(f);
      if (C.call(t, "key")) {
        f = r(e);
        var j = Object.keys(t).filter(function(te) {
          return te !== "key";
        });
        d = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", D[f + d] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), D[f + d] = !0);
      }
      if (f = null, i !== void 0 && (n(i), f = "" + i), y(t) && (n(t.key), f = "" + t.key), "key" in t) {
        i = {};
        for (var A in t)
          A !== "key" && (i[A] = t[A]);
      } else i = t;
      return f && c(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), u(
        e,
        f,
        p,
        x,
        l(),
        i,
        N,
        S
      );
    }
    function g(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var v = ne, P = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), B = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), w = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, re = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, $ = {}, I = v.react_stack_bottom_frame.bind(
      v,
      b
    )(), L = k(a(b)), D = {};
    R.Fragment = _, R.jsx = function(e, t, i, d, x) {
      var p = 1e4 > w.recentlyCreatedOwnerStacks++;
      return m(
        e,
        t,
        i,
        !1,
        d,
        x,
        p ? Error("react-stack-top-frame") : I,
        p ? k(a(e)) : L
      );
    }, R.jsxs = function(e, t, i, d, x) {
      var p = 1e4 > w.recentlyCreatedOwnerStacks++;
      return m(
        e,
        t,
        i,
        !0,
        d,
        x,
        p ? Error("react-stack-top-frame") : I,
        p ? k(a(e)) : L
      );
    };
  })()), R;
}
var J;
function le() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? T.exports = se() : T.exports = ie()), T.exports;
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
function de(r) {
  if (typeof r == "number" || typeof r == "string")
    return { value: r };
  if (!r) return { value: "--" };
  if (Array.isArray(r) && r.length > 0) {
    const o = r[0];
    if (o.value !== void 0)
      return {
        value: o.value,
        label: o.title ?? o.name ?? void 0
      };
    const n = Object.keys(o).find((a) => typeof o[a] == "number");
    if (n) return { value: o[n], label: o.category ?? o.title };
  }
  if (typeof r == "object") {
    const o = Object.keys(r).find((n) => typeof r[n] == "number");
    if (o) return { value: r[o], label: r.label ?? r.title };
  }
  return { value: "--" };
}
function fe(r) {
  return Array.isArray(r) && r.length > 0 ? r : typeof r == "object" && r !== null ? [r] : [];
}
function me({ cardConfig: r, methods: o = {}, sqlOpsUrls: n }) {
  const { source: a } = r, [l, b] = W(0);
  return G(() => {
    (async () => {
      let c = {};
      if (console.log("source type"), a?.type === "method") {
        const u = o[a.method];
        c = u ? await Promise.resolve(u()) : {};
      } else if (a?.type === "api" && a.url)
        c = await fetch(a.url, {
          method: a.method || "GET",
          headers: a.headers || {}
        }).then((u) => u.json());
      else if (a?.type === "sql") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const u = await fetch(n.baseURL + n.registerQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${n?.accessToken}`
            },
            body: JSON.stringify({
              query: a
            })
          }).then((g) => g.json());
          if (!u.queryid) {
            console.log("queryid not generated");
            return;
          }
          const m = await fetch(n.baseURL + n.runQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${n?.accessToken}`
            },
            body: JSON.stringify({
              queryid: u.queryid,
              filter: {}
            })
          }).then((g) => g.json());
          c = m?.data?.data ?? m?.data ?? {};
        } catch (u) {
          console.error("API fetch failed:", u);
        }
      }
      console.log("CardRenderer result", c);
      const h = de(c);
      b(h);
    })();
  }, [JSON.stringify(a)]), /* @__PURE__ */ s.jsx("div", { className: `
      flex flex-col justify-center items-start gap-2 

    
    `, children: /* @__PURE__ */ s.jsx("span", { className: "text-3xl font-bold tracking-tight", children: l?.value ?? "--" }) });
}
function be({ cardConfig: r, methods: o = {}, sqlOpsUrls: n }) {
  const { source: a } = r, [l, b] = W(0);
  if (G(() => {
    (async () => {
      let h = {};
      if (a?.type === "method") {
        const m = o[a.method];
        h = m ? await Promise.resolve(m()) : {};
      } else if (a?.type === "api" && a.url)
        h = await fetch(a.url, {
          method: a.method || "GET",
          headers: a.headers || {}
        }).then((m) => m.json());
      else if (a?.type === "sql") {
        if (!n) {
          console.error("SQL source requires formJson.endPoints but it is missing");
          return;
        }
        try {
          const m = await fetch(n.baseURL + n.registerQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${n?.accessToken}`
            },
            body: JSON.stringify({
              query: a
            })
          }).then((v) => v.json());
          if (!m.queryid) {
            console.log("queryid not generated");
            return;
          }
          const g = await fetch(n.baseURL + n.runQuery, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${n?.accessToken}`
            },
            body: JSON.stringify({
              queryid: m.queryid,
              filter: {}
            })
          }).then((v) => v.json());
          h = g?.data?.data ?? g?.data ?? [];
        } catch (m) {
          console.error("API fetch failed:", m);
        }
      }
      const u = fe(h);
      b(u);
    })();
  }, [JSON.stringify(a)]), !Array.isArray(l))
    return console.warn("GridCard expected array but got:", l), /* @__PURE__ */ s.jsx("div", { children: "No table data" });
  if (!l.length) return /* @__PURE__ */ s.jsx("div", { children: "No records found" });
  const y = Object.keys(l[0] || {});
  return /* @__PURE__ */ s.jsx("div", { className: "w-full overflow-auto rounded-lg ", children: /* @__PURE__ */ s.jsxs("table", { className: "w-full text-sm border", children: [
    /* @__PURE__ */ s.jsx("thead", { className: "bg-neutral-100 ", children: /* @__PURE__ */ s.jsx("tr", { children: y.map((c) => /* @__PURE__ */ s.jsx("th", { className: "p-3 text-left font-semibold capitalize", children: c.replace(/_/g, " ") }, c)) }) }),
    /* @__PURE__ */ s.jsx("tbody", { children: l.map((c, h) => /* @__PURE__ */ s.jsx("tr", { className: "odd:bg-white even:bg-neutral-50", children: y.map((u) => /* @__PURE__ */ s.jsx("td", { className: "p-3 border-b ", children: c[u] }, u)) }, h)) })
  ] }) });
}
const he = ({ cardConfig: r, methods: o = {}, sqlOpsUrls: n }) => {
  if (!r?.config?.type) return null;
  switch (r?.config.type) {
    case "number":
      return /* @__PURE__ */ s.jsx(me, { cardConfig: r, methods: o, sqlOpsUrls: n });
    case "grid":
      return /* @__PURE__ */ s.jsx(be, { cardConfig: r, methods: o, sqlOpsUrls: n });
    default:
      return /* @__PURE__ */ s.jsx(ae, { config: r, methods: o, sqlOpsConfig: n });
  }
};
function pe({ config: r, methods: o, sqlOpsUrls: n }) {
  const a = r.width ?? 6;
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: `col-span-12 md:col-span-6 ${ce[ue(Number(a))] || "lg:col-span-4"}
        bg-white  border border-neutral-200 
        rounded-xl shadow-sm hover:shadow-md transition-all duration-300
         flex flex-col   h-max
  `,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: " px-4 py-2 flex items-center justify-between border-b border-neutral-200 ", children: /* @__PURE__ */ s.jsx("h2", { className: "text-base font-semibold text-neutral-700 ", children: r.title }) }),
        /* @__PURE__ */ s.jsx("div", { className: " p-4 flex-1 ", children: /* @__PURE__ */ s.jsx(he, { cardConfig: r, methods: o ?? {}, sqlOpsUrls: n }) })
      ]
    }
  );
}
function xe({ dashboardJson: r, methods: o }) {
  return /* @__PURE__ */ s.jsxs("div", { className: "p-5 space-y-6", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ s.jsx("h1", { className: "text-2xl font-bold tracking-tight text-neutral-800", children: r.title }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: `
            p-2 rounded-lg border border-neutral-200 
            hover:bg-neutral-100 
            transition-all duration-200
          `,
          onClick: () => console.log("Open Settings"),
          children: /* @__PURE__ */ s.jsx(oe, { size: 20, className: "text-neutral-600 " })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "grid grid-cols-12 gap-5 auto-rows-min", children: Object.values(r.cards).map((n, a) => /* @__PURE__ */ s.jsx(pe, { config: n, methods: o || {}, sqlOpsUrls: r.endPoints }, a)) })
  ] });
}
export {
  xe as LogiksDashboard,
  xe as default
};
