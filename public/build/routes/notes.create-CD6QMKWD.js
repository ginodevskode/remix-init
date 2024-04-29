import {
  links,
  newNotes_default
} from "/build/_shared/chunk-PNAKCCPR.js";
import {
  Link,
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

// app/routes/notes.create.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/notes.create.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes.create.tsx"
  );
  import.meta.hot.lastModified = "1714422533469.6592";
}
function Create() {
  _s();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: () => navigate(-1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "material-icons", children: "chevron_left" }, void 0, false, {
      fileName: "app/routes/notes.create.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/notes.create.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(newNotes_default, {}, void 0, false, {
      fileName: "app/routes/notes.create.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.create.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_s(Create, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c = Create;
function links2() {
  return [...links()];
}
var _c;
$RefreshReg$(_c, "Create");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Create as default,
  links2 as links
};
//# sourceMappingURL=/build/routes/notes.create-CD6QMKWD.js.map
