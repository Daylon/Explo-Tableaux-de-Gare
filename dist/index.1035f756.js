// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lfFOz":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "88edd5cb1035f756";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"kqUTu":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory(require("fastdom"));
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ // Flag the module as loaded
            /******/ module1.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var strictdom = __webpack_require__(1);
            var fastdom = __webpack_require__(2);
            /**
	 * Mini logger
	 *
	 * @return {Function}
	 */ var debug = function() {};
            /**
	 * Enabled state
	 *
	 * @type {Boolean}
	 */ var enabled = false;
            window.fastdom = module1.exports = fastdom.extend({
                measure: function(task, ctx) {
                    debug("measure");
                    return this.fastdom.measure(function() {
                        if (!enabled) return task();
                        return strictdom.phase("measure", task);
                    }, ctx);
                },
                mutate: function(task, ctx) {
                    debug("mutate");
                    return this.fastdom.mutate(function() {
                        if (!enabled) return task();
                        return strictdom.phase("mutate", task);
                    }, ctx);
                },
                strict: function(value) {
                    if (value) {
                        enabled = true;
                        strictdom.enable();
                    } else {
                        enabled = false;
                        strictdom.disable();
                    }
                }
            });
            // turn on strict-mode
            window.fastdom.strict(true);
        /***/ },
        /* 1 */ /***/ function(module1, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            !function() {
                "use strict";
                var debug = function() {};
                /**
	 * Crude webkit test.
	 *
	 * @type {Boolean}
	 */ // var isWebkit = !!window.webkitURL;
                /**
	 * List of properties observed.
	 *
	 * @type {Object}
	 */ var properties = {
                    prototype: {
                        Document: {
                            execCommand: Mutate,
                            elementFromPoint: Measure,
                            elementsFromPoint: Measure,
                            scrollingElement: Measure
                        },
                        Node: {
                            appendChild: {
                                type: Mutate,
                                test: function(dom, parent, args) {
                                    var attached = isAttached(parent) || isAttached(args[0]);
                                    if (attached && dom.not("mutate")) throw error(3, this.name);
                                }
                            },
                            insertBefore: {
                                type: Mutate,
                                test: function(dom, parent, args) {
                                    var attached = isAttached(parent) || isAttached(args[0]);
                                    if (attached && dom.not("mutate")) throw error(3, this.name);
                                }
                            },
                            removeChild: {
                                type: Mutate,
                                test: function(dom, parent, args) {
                                    var attached = isAttached(parent) || isAttached(args[0]);
                                    if (attached && dom.not("mutate")) throw error(3, this.name);
                                }
                            },
                            textContent: Mutate
                        },
                        Element: {
                            scrollIntoView: Mutate,
                            scrollBy: Mutate,
                            scrollTo: Mutate,
                            getClientRects: Measure,
                            getBoundingClientRect: Measure,
                            clientLeft: Measure,
                            clientWidth: Measure,
                            clientHeight: Measure,
                            scrollLeft: Accessor,
                            scrollTop: Accessor,
                            scrollWidth: Measure,
                            scrollHeight: Measure,
                            innerHTML: Mutate,
                            outerHTML: Mutate,
                            insertAdjacentHTML: Mutate,
                            remove: Mutate,
                            setAttribute: Mutate,
                            removeAttribute: Mutate,
                            className: Mutate,
                            classList: ClassList
                        },
                        HTMLElement: {
                            offsetLeft: Measure,
                            offsetTop: Measure,
                            offsetWidth: Measure,
                            offsetHeight: Measure,
                            offsetParent: Measure,
                            innerText: Accessor,
                            outerText: Accessor,
                            focus: Measure,
                            blur: Measure,
                            style: Style
                        },
                        CharacterData: {
                            remove: Mutate,
                            data: Mutate
                        },
                        Range: {
                            getClientRects: Measure,
                            getBoundingClientRect: Measure
                        },
                        MouseEvent: {
                            layerX: Measure,
                            layerY: Measure,
                            offsetX: Measure,
                            offsetY: Measure
                        },
                        HTMLButtonElement: {
                            reportValidity: Measure
                        },
                        HTMLDialogElement: {
                            showModal: Mutate
                        },
                        HTMLFieldSetElement: {
                            reportValidity: Measure
                        },
                        HTMLImageElement: {
                            width: Accessor,
                            height: Accessor,
                            x: Measure,
                            y: Measure
                        },
                        HTMLInputElement: {
                            reportValidity: Measure
                        },
                        HTMLKeygenElement: {
                            reportValidity: Measure
                        },
                        SVGSVGElement: {
                            currentScale: Accessor
                        }
                    },
                    instance: {
                        window: {
                            getComputedStyle: {
                                type: Measure,
                                /**
	         * Throws when the Element is in attached
	         * and strictdom is not in the 'measure' phase.
	         *
	         * @param  {StrictDom} strictdom
	         * @param  {Window} win
	         * @param  {Object} args
	         */ test: function(strictdom, win, args) {
                                    if (isAttached(args[0]) && strictdom.not("measure")) throw error(2, "getComputedStyle");
                                }
                            },
                            // innerWidth: {
                            //   type: isWebkit ? Value : Measure,
                            //
                            //   /**
                            //    * Throws when the window is nested (in <iframe>)
                            //    * and StrictDom is not in the 'measure' phase.
                            //    *
                            //    * @param  {StrictDom} strictdom
                            //    */
                            //   test: function(strictdom) {
                            //     var inIframe = window !== window.top;
                            //     if (inIframe && strictdom.not('measure')) {
                            //       throw error(2, '`.innerWidth` (in iframe)');
                            //     }
                            //   }
                            // },
                            //
                            // innerHeight: {
                            //   type: isWebkit ? Value : Measure,
                            //
                            //   /**
                            //    * Throws when the window is nested (in <iframe>)
                            //    * and StrictDom is not in the 'measure' phase.
                            //    *
                            //    * @param  {StrictDom} strictdom
                            //    */
                            //   test: function(strictdom) {
                            //     var inIframe = window !== window.top;
                            //     if (inIframe && strictdom.not('measure')) {
                            //       throw error(2, '`.innerHeight` (in iframe)');
                            //     }
                            //   }
                            // },
                            //
                            // scrollX: isWebkit ? Value : Measure,
                            // scrollY: isWebkit ? Value : Measure,
                            scrollBy: Mutate,
                            scrollTo: Mutate,
                            scroll: Mutate
                        }
                    }
                };
                /**
	 * The master controller for all properties.
	 *
	 * @param {Window} win
	 */ function StrictDom(win) {
                    this.properties = [];
                    this._phase = null;
                    this.win = win;
                    this.createPrototypeProperties();
                    this.createInstanceProperties();
                }
                StrictDom.prototype = {
                    /**
	   * Set the current phase.
	   * @param  {[type]} value [description]
	   * @return {[type]}       [description]
	   */ phase: function(type, task) {
                        if (!arguments.length) return this._phase;
                        if (!this.knownPhase(type)) throw error(4, type);
                        var previous = this._phase;
                        this._phase = type;
                        if (typeof task != "function") return;
                        var result = task();
                        this._phase = previous;
                        return result;
                    },
                    knownPhase: function(value) {
                        return !!~[
                            "measure",
                            "mutate",
                            null
                        ].indexOf(value);
                    },
                    is: function(value) {
                        return this._phase === value;
                    },
                    not: function(value) {
                        return !this.is(value);
                    },
                    /**
	   * Enable strict mode.
	   *
	   * @public
	   */ enable: function() {
                        if (this.enabled) return;
                        debug("enable");
                        var i = this.properties.length;
                        while(i--)this.properties[i].enable();
                        this.enabled = true;
                    },
                    /**
	   * Disable strict mode.
	   *
	   * @public
	   */ disable: function() {
                        if (!this.enabled) return;
                        debug("disable");
                        var i = this.properties.length;
                        while(i--)this.properties[i].disable();
                        this.enabled = false;
                        this.phase(null);
                    },
                    /**
	   * Create wrappers for each of
	   * of the prototype properties.
	   *
	   * @private
	   */ createPrototypeProperties: function() {
                        debug("create prototype properties");
                        var props = properties.prototype;
                        for(var key in props)for(var name in props[key]){
                            var object = this.win[key] && this.win[key].prototype;
                            if (!object || !object.hasOwnProperty(name)) continue;
                            this.properties.push(this.create(object, name, props[key][name]));
                        }
                    },
                    /**
	   * Create wrappers for each of
	   * of the instance properties.
	   *
	   * @private
	   */ createInstanceProperties: function() {
                        debug("create instance properties");
                        var props = properties.instance;
                        for(var key in props)for(var name in props[key]){
                            var object = this.win[key];
                            if (!object || !object.hasOwnProperty(name)) continue;
                            this.properties.push(this.create(object, name, props[key][name]));
                        }
                    },
                    /**
	   * Create a wrapped `Property` that
	   * can be individually enabled/disabled.
	   *
	   * @param  {Object} object - the parent object (eg. Node.prototype)
	   * @param  {String} name - the property name (eg. 'appendChild')
	   * @param  {(constructor|Object)} config - from the above property definition
	   * @return {Property}
	   */ create: function(object, name, config) {
                        debug("create", name);
                        var Constructor = config.type || config;
                        return new Constructor(object, name, config, this);
                    }
                };
                /**
	 * Create a new `Property`.
	 *
	 * A wrapper around a property that observes
	 * usage, throwing errors when used in the
	 * incorrect phase.
	 *
	 * @param {Object} object - the parent object (eg. Node.prototype)
	 * @param {[type]} name - the property name (eg. 'appendChild')
	 * @param {(constructor|Object)} config - from the above definition
	 * @param {StrictDom} strictdom - injected as a dependency
	 */ function Property(object, name, config, strictdom) {
                    debug("Property", name, config);
                    this.strictdom = strictdom;
                    this.object = object;
                    this.name = name;
                    var descriptor = this.getDescriptor();
                    // defaults can be overriden from config
                    if (typeof config == "object") Object.assign(this, config);
                    this.descriptors = {
                        unwrapped: descriptor,
                        wrapped: this.wrap(descriptor)
                    };
                }
                Property.prototype = {
                    /**
	   * Get the property's descriptor.
	   *
	   * @return {Object}
	   * @private
	   */ getDescriptor: function() {
                        debug("get descriptor", this.name);
                        return Object.getOwnPropertyDescriptor(this.object, this.name);
                    },
                    /**
	   * Enable observation by replacing the
	   * current descriptor with the wrapped one.
	   *
	   * @private
	   */ enable: function() {
                        debug("enable", this.name);
                        Object.defineProperty(this.object, this.name, this.descriptors.wrapped);
                    },
                    /**
	   * Disable observation by replacing the
	   * current descriptor with the original one.
	   *
	   * @private
	   */ disable: function() {
                        debug("disable", this.name);
                        Object.defineProperty(this.object, this.name, this.descriptors.unwrapped);
                    },
                    // to be overwritten by subclass
                    wrap: function() {}
                };
                /**
	 * A wrapper for properties that measure
	 * geometry data from the DOM.
	 *
	 * Once a `Measure` property is enabled
	 * it can only be used when StrictDom
	 * is in the 'measure' phase, else it
	 * will throw.
	 *
	 * @constructor
	 * @extends Property
	 */ function Measure() {
                    Property.apply(this, arguments);
                }
                Measure.prototype = extend(Property, {
                    /**
	   * Return a wrapped descriptor.
	   *
	   * @param  {Object} descriptor
	   * @return {Object}
	   */ wrap: function(descriptor) {
                        debug("wrap measure", this.name);
                        var clone = Object.assign({}, descriptor);
                        var value = descriptor.value;
                        var get = descriptor.get;
                        var self = this;
                        if (typeof value == "function") clone.value = function() {
                            debug("measure", self.name);
                            self.test(self.strictdom, this, arguments);
                            return value.apply(this, arguments);
                        };
                        else if (get) clone.get = function() {
                            debug("measure", self.name);
                            self.test(self.strictdom, this, arguments);
                            return get.apply(this, arguments);
                        };
                        return clone;
                    },
                    /**
	   * Throws an Error if the element is attached
	   * and StrictDOM is not in the 'measure' phase.
	   *
	   * If methods/properties are used without
	   * a context (eg. `getComputedStyle()` instead
	   * of `window.getComputedStyle()`) we infer
	   * a `window` context.
	   *
	   * @param  {StrictDom} strictdom
	   * @param  {Node} ctx
	   */ test: function(strictdom, ctx) {
                        if (isAttached(ctx || window) && strictdom.not("measure")) throw error(2, this.name);
                    }
                });
                /**
	 * A wrapper for properties that mutate
	 * to the DOM, triggering style/reflow
	 * operations.
	 *
	 * Once a `Mutate` property is enabled
	 * it can only be used when StrictDom
	 * is in the 'measure' phase, else it
	 * will throw.
	 *
	 * @constructor
	 * @extends Property
	 */ function Mutate() {
                    Property.apply(this, arguments);
                }
                Mutate.prototype = extend(Property, {
                    /**
	   * Return a wrapped descriptor.
	   *
	   * @param  {Object} descriptor
	   * @return {Object}
	   */ wrap: function(descriptor) {
                        debug("wrap mutate", this.name);
                        var clone = Object.assign({}, descriptor);
                        var value = descriptor.value;
                        var self = this;
                        if (typeof value == "function") clone.value = function() {
                            self.test(self.strictdom, this, arguments);
                            return value.apply(this, arguments);
                        };
                        else if (descriptor.set) clone.set = function() {
                            self.test(self.strictdom, this, arguments);
                            return descriptor.set.apply(this, arguments);
                        };
                        return clone;
                    },
                    /**
	   * Throws an Error if the element is attached
	   * and StrictDOM is not in the 'mutate' phase.
	   *
	   * If methods/properties are used without
	   * a context (eg. `getComputedStyle()` instead
	   * of `window.getComputedStyle()`) we infer
	   * a `window` context.
	   *
	   * @param  {StrictDom} strictdom
	   * @param  {Node} ctx
	   */ test: function(strictdom, ctx) {
                        if (isAttached(ctx || window) && strictdom.not("mutate")) throw error(3, this.name);
                    }
                });
                /**
	 * A wrapper for 'accessor' (get/set) properties.
	 *
	 * An `Accessor` should be used to wrap
	 * properties that can both measure and mutate
	 * the DOM (eg. `element.scrollTop`).
	 *
	 * @constructor
	 * @extends Property
	 */ function Accessor() {
                    Property.apply(this, arguments);
                }
                Accessor.prototype = extend(Property, {
                    /**
	   * Return a wrapped descriptor.
	   *
	   * @param  {Object} descriptor
	   * @return {Object}
	   */ wrap: function(descriptor) {
                        debug("wrap accessor", this.name);
                        var clone = Object.assign({}, descriptor);
                        var get = descriptor.get;
                        var set = descriptor.set;
                        var self = this;
                        if (get) clone.get = function() {
                            self.testRead(self.strictdom, this, arguments);
                            return get.apply(this, arguments);
                        };
                        if (descriptor.set) clone.set = function() {
                            self.testWrite(self.strictdom, this, arguments);
                            return set.apply(this, arguments);
                        };
                        return clone;
                    },
                    testRead: Measure.prototype.test,
                    testWrite: Mutate.prototype.test
                });
                /**
	 * A wrapper for 'value' properties.
	 *
	 * A `Value` should be used to wrap special
	 * values that like `window.innerWidth`, which
	 * in Chrome (not Gecko) are not normal 'getter'
	 * functions, but magical flat getters.
	 *
	 * Value wrappers are a for very special cases.
	 *
	 * @constructor
	 * @extends Property
	 */ function Value() {
                    Property.apply(this, arguments);
                }
                Value.prototype = extend(Property, {
                    /**
	   * Calling `Object.getOwnDescriptor()` can
	   * trigger a reflow as it returns the `value`
	   * of the property. So here we just
	   * return an empty object instead.
	   *
	   * @return {Object}
	   * @private
	   */ getDescriptor: function() {
                        return {};
                    },
                    /**
	   * Value wrappers are disabled by simply
	   * deleting them from the instance,
	   * revealing the original descriptor.
	   *
	   * @private
	   */ disable: function() {
                        delete this.object[this.name];
                    },
                    /**
	   * Return a wrapped descriptor.
	   *
	   * `Value` properties are actually on the
	   * instance of objects. To wrap them we need
	   * to replace them with a getter which
	   * deletes itself on access, call into the v8
	   * interceptor, and then add themselves back.
	   *
	   * This won't be fast, but these are rarely
	   * accessed so it should be fine.
	   *
	   * @param  {Object} descriptor
	   * @return {Object}
	   */ wrap: function(descriptor) {
                        debug("wrap value");
                        var name = this.name;
                        var self = this;
                        descriptor.get = function() {
                            debug("get value", name);
                            self.test(self.strictdom, this, arguments);
                            self.disable();
                            var result = this[name];
                            self.enable();
                            return result;
                        };
                        return descriptor;
                    },
                    test: Measure.prototype.test
                });
                function Style() {
                    Property.apply(this, arguments);
                }
                Style.prototype = extend(Property, {
                    wrap: function(descriptor) {
                        debug("wrap style");
                        var strictdom = this.strictdom;
                        var clone = Object.assign({}, descriptor);
                        clone.get = function() {
                            return new StrictStyle(this, strictdom);
                        };
                        return clone;
                    }
                });
                function ClassList() {
                    Property.apply(this, arguments);
                }
                ClassList.prototype = extend(Property, {
                    wrap: function(descriptor) {
                        debug("wrap style");
                        var strictdom = this.strictdom;
                        var clone = Object.assign({}, descriptor);
                        clone.get = function() {
                            return new StrictClassList(this, strictdom);
                        };
                        return clone;
                    }
                });
                function StrictStyle(el, strictdom) {
                    this.strictdom = strictdom;
                    this.el = el;
                }
                StrictStyle.prototype = {
                    _getter: getDescriptor(HTMLElement.prototype, "style").get,
                    _get: function() {
                        return this._getter.call(this.el);
                    },
                    setProperty: function(key, value) {
                        var illegal = isAttached(this.el) && this.strictdom.not("mutate");
                        if (illegal) throw error(1, "style." + key);
                        return this._get()[key] = value;
                    },
                    removeProperty: function(key) {
                        var illegal = isAttached(this.el) && this.strictdom.not("mutate");
                        if (illegal) throw error(1, "style." + key);
                        return this._get().removeProperty(key);
                    }
                };
                // dynamically construct prototype
                // from real element.style
                (function() {
                    var styles = document.createElement("div").style;
                    var proto = {};
                    for(var key in styles)if (styles[key] === "") Object.defineProperty(StrictStyle.prototype, key, {
                        get: getter(key),
                        set: setter(key)
                    });
                    [
                        "item",
                        "getPropertyValue",
                        "getPropertyCSSValue",
                        "getPropertyPriority"
                    ].forEach(function(method) {
                        StrictStyle.prototype[method] = caller(method);
                    });
                    function getter(key) {
                        return function() {
                            return this._get()[key];
                        };
                    }
                    function setter(key) {
                        return function(value) {
                            var illegal = isAttached(this.el) && this.strictdom.not("mutate");
                            if (illegal) throw error(1, "style." + key);
                            return this.setProperty(key, value);
                        };
                    }
                    function caller(key) {
                        return function() {
                            var style = this._get();
                            return style[key].apply(style, arguments);
                        };
                    }
                    return proto;
                })();
                function StrictClassList(el, strictdom) {
                    this.strictdom = strictdom;
                    this.el = el;
                }
                StrictClassList.prototype = {
                    _getter: getDescriptor(Element.prototype, "classList").get,
                    _get: function() {
                        return this._getter.call(this.el);
                    },
                    add: function(className) {
                        var illegal = isAttached(this.el) && this.strictdom.not("mutate");
                        if (illegal) throw error(1, "class names");
                        this._get().add(className);
                    },
                    contains: function(className) {
                        return this._get().contains(className);
                    },
                    remove: function(className) {
                        var illegal = isAttached(this.el) && this.strictdom.not("mutate");
                        if (illegal) throw error(1, "class names");
                        this._get().remove(className);
                    },
                    toggle: function() {
                        var illegal = isAttached(this.el) && this.strictdom.not("mutate");
                        if (illegal) throw error(1, "class names");
                        var classList = this._get();
                        return classList.toggle.apply(classList, arguments);
                    }
                };
                /**
	 * Utils
	 */ function error(type) {
                    return new Error({
                        1: "Can only set " + arguments[1] + " during 'mutate' phase",
                        2: "Can only get " + arguments[1] + " during 'measure' phase",
                        3: "Can only call `." + arguments[1] + "()` during 'mutate' phase",
                        4: "Invalid phase: " + arguments[1]
                    }[type]);
                }
                function getDescriptor(object, prop) {
                    return Object.getOwnPropertyDescriptor(object, prop);
                }
                function extend(parent, props) {
                    return Object.assign(Object.create(parent.prototype), props);
                }
                function isAttached(el) {
                    return el === window || document.contains(el);
                }
                /**
	 * Exports
	 */ // Only ever allow one `StrictDom` per document
                var exports = window["strictdom"] = window["strictdom"] || new StrictDom(window); // jshint ignore:line
                __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                    return exports;
                }).call(exports, __webpack_require__, exports, module1), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module1.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            }();
        /***/ },
        /* 2 */ /***/ function(module1, exports) {
            module1.exports = __WEBPACK_EXTERNAL_MODULE_2__;
        /***/ }
    ]);
});

},{"fastdom":"321a5"}],"321a5":[function(require,module,exports) {
!function(win) {
    /**
 * FastDom
 *
 * Eliminates layout thrashing
 * by batching DOM read/write
 * interactions.
 *
 * @author Wilson Page <wilsonpage@me.com>
 * @author Kornel Lesinski <kornel.lesinski@ft.com>
 */ "use strict";
    /**
 * Mini logger
 *
 * @return {Function}
 */ var debug = function() {};
    /**
 * Normalized rAF
 *
 * @type {Function}
 */ var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function(cb) {
        return setTimeout(cb, 16);
    };
    /**
 * Initialize a `FastDom`.
 *
 * @constructor
 */ function FastDom() {
        var self = this;
        self.reads = [];
        self.writes = [];
        self.raf = raf.bind(win); // test hook
        debug("initialized", self);
    }
    FastDom.prototype = {
        constructor: FastDom,
        /**
   * We run this inside a try catch
   * so that if any jobs error, we
   * are able to recover and continue
   * to flush the batch until it's empty.
   *
   * @param {Array} tasks
   */ runTasks: function(tasks) {
            debug("run tasks");
            var task;
            while(task = tasks.shift())task();
        },
        /**
   * Adds a job to the read batch and
   * schedules a new frame if need be.
   *
   * @param  {Function} fn
   * @param  {Object} ctx the context to be bound to `fn` (optional).
   * @public
   */ measure: function(fn, ctx) {
            debug("measure");
            var task = !ctx ? fn : fn.bind(ctx);
            this.reads.push(task);
            scheduleFlush(this);
            return task;
        },
        /**
   * Adds a job to the
   * write batch and schedules
   * a new frame if need be.
   *
   * @param  {Function} fn
   * @param  {Object} ctx the context to be bound to `fn` (optional).
   * @public
   */ mutate: function(fn, ctx) {
            debug("mutate");
            var task = !ctx ? fn : fn.bind(ctx);
            this.writes.push(task);
            scheduleFlush(this);
            return task;
        },
        /**
   * Clears a scheduled 'read' or 'write' task.
   *
   * @param {Object} task
   * @return {Boolean} success
   * @public
   */ clear: function(task) {
            debug("clear", task);
            return remove(this.reads, task) || remove(this.writes, task);
        },
        /**
   * Extend this FastDom with some
   * custom functionality.
   *
   * Because fastdom must *always* be a
   * singleton, we're actually extending
   * the fastdom instance. This means tasks
   * scheduled by an extension still enter
   * fastdom's global task queue.
   *
   * The 'super' instance can be accessed
   * from `this.fastdom`.
   *
   * @example
   *
   * var myFastdom = fastdom.extend({
   *   initialize: function() {
   *     // runs on creation
   *   },
   *
   *   // override a method
   *   measure: function(fn) {
   *     // do extra stuff ...
   *
   *     // then call the original
   *     return this.fastdom.measure(fn);
   *   },
   *
   *   ...
   * });
   *
   * @param  {Object} props  properties to mixin
   * @return {FastDom}
   */ extend: function(props) {
            debug("extend", props);
            if (typeof props != "object") throw new Error("expected object");
            var child = Object.create(this);
            mixin(child, props);
            child.fastdom = this;
            // run optional creation hook
            if (child.initialize) child.initialize();
            return child;
        },
        // override this with a function
        // to prevent Errors in console
        // when tasks throw
        catch: null
    };
    /**
 * Schedules a new read/write
 * batch if one isn't pending.
 *
 * @private
 */ function scheduleFlush(fastdom) {
        if (!fastdom.scheduled) {
            fastdom.scheduled = true;
            fastdom.raf(flush.bind(null, fastdom));
            debug("flush scheduled");
        }
    }
    /**
 * Runs queued `read` and `write` tasks.
 *
 * Errors are caught and thrown by default.
 * If a `.catch` function has been defined
 * it is called instead.
 *
 * @private
 */ function flush(fastdom) {
        debug("flush");
        var writes = fastdom.writes;
        var reads = fastdom.reads;
        var error;
        try {
            debug("flushing reads", reads.length);
            fastdom.runTasks(reads);
            debug("flushing writes", writes.length);
            fastdom.runTasks(writes);
        } catch (e) {
            error = e;
        }
        fastdom.scheduled = false;
        // If the batch errored we may still have tasks queued
        if (reads.length || writes.length) scheduleFlush(fastdom);
        if (error) {
            debug("task errored", error.message);
            if (fastdom.catch) fastdom.catch(error);
            else throw error;
        }
    }
    /**
 * Remove an item from an Array.
 *
 * @param  {Array} array
 * @param  {*} item
 * @return {Boolean}
 */ function remove(array, item) {
        var index = array.indexOf(item);
        return !!~index && !!array.splice(index, 1);
    }
    /**
 * Mixin own properties of source
 * object into the target.
 *
 * @param  {Object} target
 * @param  {Object} source
 */ function mixin(target, source) {
        for(var key in source)if (source.hasOwnProperty(key)) target[key] = source[key];
    }
    // There should never be more than
    // one instance of `FastDom` in an app
    var exports = win.fastdom = win.fastdom || new FastDom(); // jshint ignore:line
    // Expose to CJS & AMD
    if (typeof define == "function") define(function() {
        return exports;
    });
    else module.exports = exports;
}(typeof window !== "undefined" ? window : this);

},{}]},["lfFOz","kqUTu"], "kqUTu", "parcelRequire94c2")

//# sourceMappingURL=index.1035f756.js.map
