import {
  Form,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-WRYHSGZG.js";
import {
  createHotContext
} from "/build/_shared/chunk-N7UW2VWJ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

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

export {
  newNotes_default2 as newNotes_default,
  links
};
//# sourceMappingURL=/build/_shared/chunk-PNAKCCPR.js.map
