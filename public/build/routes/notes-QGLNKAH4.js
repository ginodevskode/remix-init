import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  NavLink,
  Outlet,
  useRouteError
} from "/build/_shared/chunk-WRYHSGZG.js";
import {
  createHotContext
} from "/build/_shared/chunk-N7UW2VWJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/notes.tsx
var import_node = __toESM(require_node(), 1);

// app/styles/routes-styles/notes.css
var notes_default = "/build/_assets/notes-RUN65PVS.css";

// app/routes/notes.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/notes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes.tsx"
  );
}
function NotesPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Notes" }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/notes/list", children: "NoteList" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/notes/create", children: "Create" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = NotesPage;
function CatchBoundary() {
  _s();
  const caughtResponse = useRouteError();
  const message = caughtResponse.data?.message || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "info-message", children: message }, void 0, false, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(CatchBoundary, "TelhunzkOPxHaQqwYaWtm6IJ7/c=", false, function() {
  return [useRouteError];
});
_c2 = CatchBoundary;
function ErrorBoundary({
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "An error related to your notes occurred!" }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error.message }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      "!"
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
function links() {
  return [{
    rel: "stylesheet",
    href: notes_default
  }];
}
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "NotesPage");
$RefreshReg$(_c2, "CatchBoundary");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  NotesPage as default,
  links
};
//# sourceMappingURL=/build/routes/notes-QGLNKAH4.js.map
