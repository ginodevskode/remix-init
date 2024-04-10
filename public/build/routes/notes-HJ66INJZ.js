import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
  useRouteError
} from "/build/_shared/chunk-J5IH3TBD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-LUNAMWEU.js";
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

// app/components/newNotes/newNotes.css
var newNotes_default = "/build/_assets/newNotes-ZUI2G4IG.css";

// app/components/newNotes/newNotes.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/newNotes/newNotes.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/newNotes/newNotes.tsx"
  );
}
function NewNote() {
  _s();
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", id: "note-form", children: [
    data?.message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: data.message }, void 0, false, {
      fileName: "app/components/newNotes/newNotes.tsx",
      lineNumber: 29,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", children: "Title" }, void 0, false, {
        fileName: "app/components/newNotes/newNotes.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", name: "title", required: true }, void 0, false, {
        fileName: "app/components/newNotes/newNotes.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/newNotes/newNotes.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "content", children: "Content" }, void 0, false, {
        fileName: "app/components/newNotes/newNotes.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "content", name: "content", rows: "5", required: true }, void 0, false, {
        fileName: "app/components/newNotes/newNotes.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/newNotes/newNotes.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Adding..." : "Add Note" }, void 0, false, {
      fileName: "app/components/newNotes/newNotes.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/newNotes/newNotes.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/newNotes/newNotes.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(NewNote, "VraVGAL90gV7Flw0Yv7Vhlrbn+U=", false, function() {
  return [useActionData, useNavigation];
});
_c = NewNote;
var newNotes_default2 = NewNote;
function links() {
  return [{
    rel: "stylesheet",
    href: newNotes_default
  }];
}
var _c;
$RefreshReg$(_c, "NewNote");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/notes/noteList.css
var noteList_default = "/build/_assets/noteList-JJCLHN7J.css";

// app/components/notes/noteList.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { id: "note-list", children: notes.map((note, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "note", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "note-meta", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
          "#",
          index + 1
        ] }, void 0, true, {
          fileName: "app/components/notes/noteList.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("time", { dateTime: note.id, children: new Date(note.id).toLocaleDateString("en-US", {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: note.title }, void 0, false, {
        fileName: "app/components/notes/noteList.tsx",
        lineNumber: 42,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/notes/noteList.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: note.content }, void 0, false, {
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
_c2 = NoteList;
var noteList_default2 = NoteList;
function links2() {
  return [{
    rel: "stylesheet",
    href: noteList_default
  }];
}
var _c2;
$RefreshReg$(_c2, "NoteList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/notes.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes.tsx"
  );
  import.meta.hot.lastModified = "1712777130551.4758";
}
function NotesPage() {
  _s2();
  const notes = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(newNotes_default2, {}, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(noteList_default2, { notes }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s2(NotesPage, "lCYwax5cFMe1PUxNanskqlEV3FQ=", false, function() {
  return [useLoaderData];
});
_c3 = NotesPage;
function links3() {
  return [...links(), ...links2()];
}
function CatchBoundary() {
  _s22();
  const caughtResponse = useRouteError();
  const message = caughtResponse.data?.message || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(newNotes_default2, {}, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "info-message", children: message }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_s22(CatchBoundary, "TelhunzkOPxHaQqwYaWtm6IJ7/c=", false, function() {
  return [useRouteError];
});
_c22 = CatchBoundary;
function ErrorBoundary({
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "An error related to your notes occurred!" }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message }, void 0, false, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 92,
        columnNumber: 17
      }, this),
      "!"
    ] }, void 0, true, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_c32 = ErrorBoundary;
var _c3;
var _c22;
var _c32;
$RefreshReg$(_c3, "NotesPage");
$RefreshReg$(_c22, "CatchBoundary");
$RefreshReg$(_c32, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  NotesPage as default,
  links3 as links
};
//# sourceMappingURL=/build/routes/notes-HJ66INJZ.js.map
