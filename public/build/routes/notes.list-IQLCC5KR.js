import {
  links
} from "/build/_shared/chunk-PNAKCCPR.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
  useLoaderData,
  useNavigate
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

// app/routes/notes.list.tsx
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

// app/routes/notes.list.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/notes.list.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes.list.tsx"
  );
  import.meta.hot.lastModified = "1714422499136.2107";
}
function List() {
  _s();
  const notes = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { onClick: () => navigate(-1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "material-icons", children: "chevron_left" }, void 0, false, {
      fileName: "app/routes/notes.list.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/notes.list.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(noteList_default2, { notes }, void 0, false, {
      fileName: "app/routes/notes.list.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.list.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(List, "cG7i9tE7huVDekE8njnT1VEUhdE=", false, function() {
  return [useLoaderData, useNavigate];
});
_c2 = List;
function links3() {
  return [...links(), ...links2()];
}
var _c2;
$RefreshReg$(_c2, "List");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  List as default,
  links3 as links
};
//# sourceMappingURL=/build/routes/notes.list-IQLCC5KR.js.map
