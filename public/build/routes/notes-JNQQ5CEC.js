import {
  links,
  newNotes_default
} from "/build/_shared/chunk-GMM2LYIC.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useRouteError
} from "/build/_shared/chunk-AMXRFA7U.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-N7UW2VWJ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/notes.tsx
var import_node = __toESM(require_node(), 1);

// app/components/notes/noteList.css
var noteList_default = "/build/_assets/noteList-JJCLHN7J.css";

// app/components/notes/noteList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/notes/noteList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/notes/noteList.tsx"
  );
}
function NoteList({
  notes
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { id: "note-list", children: notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "note", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "note-meta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          "#",
          index + 1
        ] }, void 0, true, {
          fileName: "app/components/notes/noteList.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }) }, void 0, false, {
          fileName: "app/components/notes/noteList.tsx",
          lineNumber: 31,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/notes/noteList.tsx",
          lineNumber: 30,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/notes/noteList.tsx",
        lineNumber: 28,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: note.title }, void 0, false, {
        fileName: "app/components/notes/noteList.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/notes/noteList.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: note.content }, void 0, false, {
      fileName: "app/components/notes/noteList.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/notes/noteList.tsx",
    lineNumber: 26,
    columnNumber: 11
  }, this) }, note.id, false, {
    fileName: "app/components/notes/noteList.tsx",
    lineNumber: 25,
    columnNumber: 35
  }, this)) }, void 0, false, {
    fileName: "app/components/notes/noteList.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = NoteList;
var noteList_default2 = NoteList;
function links2() {
  return [{
    rel: "stylesheet",
    href: noteList_default
  }];
}
var _c;
$RefreshReg$(_c, "NoteList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/notes.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes.tsx"
  );
  import.meta.hot.lastModified = "1714416301629.9377";
}
function NotesPage() {
  _s();
  const notes = useLoaderData();
  const {
    pathname
  } = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Notes" }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(noteList_default2, { notes }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `${pathname}/create`, children: "create note" }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(NotesPage, "CxX8p6rtTv95yR8plpRRQl5C0tQ=", false, function() {
  return [useLoaderData, useLocation];
});
_c2 = NotesPage;
function links3() {
  return [...links(), ...links2()];
}
function CatchBoundary() {
  _s2();
  const caughtResponse = useRouteError();
  const message = caughtResponse.data?.message || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(newNotes_default, {}, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "info-message", children: message }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_s2(CatchBoundary, "TelhunzkOPxHaQqwYaWtm6IJ7/c=", false, function() {
  return [useRouteError];
});
_c22 = CatchBoundary;
function ErrorBoundary({
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "An error related to your notes occurred!" }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this),
      "!"
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_c3 = ErrorBoundary;
var _c2;
var _c22;
var _c3;
$RefreshReg$(_c2, "NotesPage");
$RefreshReg$(_c22, "CatchBoundary");
$RefreshReg$(_c3, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  NotesPage as default,
  links3 as links
};
//# sourceMappingURL=/build/routes/notes-JNQQ5CEC.js.map
