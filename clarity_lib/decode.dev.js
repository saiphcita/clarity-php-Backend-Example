/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/globalize2.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./decode/clarity.ts":
/*!***************************!*\
  !*** ./decode/clarity.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var version_1 = __webpack_require__(/*! ../src/core/version */ "./src/core/version.ts");
var data = __webpack_require__(/*! ./data */ "./decode/data.ts");
var diagnostic = __webpack_require__(/*! ./diagnostic */ "./decode/diagnostic.ts");
var interaction = __webpack_require__(/*! ./interaction */ "./decode/interaction.ts");
var layout = __webpack_require__(/*! ./layout */ "./decode/layout.ts");
var r = __webpack_require__(/*! ./render */ "./decode/render.ts");
var pageId = null;
function decode(input) {
    console.log("Decoded is running!!! 69 ", input);
    var json = typeof input === "string" ? JSON.parse(input) : input;
    console.log('inpute ype: ', typeof input);
    console.log('json 707 ');
    console.log('json@@ ', json);
    console.log('jsone ', json.e);
    var envelope = data.envelope(json.e);
    var timestamp = Date.now();
    var payload = { timestamp: timestamp, envelope: envelope };
    var encoded = json.d;
    if (payload.envelope.version !== version_1.default) {
        throw new Error("Invalid Clarity Version. Actual: " + payload.envelope.version + " | Expected: " + version_1.default + " | " + input.substr(0, 250));
    }
    /* Reset components before decoding to keep them stateless */
    data.reset();
    layout.reset();
    for (var _i = 0, encoded_1 = encoded; _i < encoded_1.length; _i++) {
        var entry = encoded_1[_i];
        data.summarize(entry);
        switch (entry[1]) {
            case 20 /* Page */:
                if (payload.page === undefined) {
                    payload.page = [];
                }
                payload.page.push(data.decode(entry));
                break;
            case 22 /* Ping */:
                if (payload.ping === undefined) {
                    payload.ping = [];
                }
                payload.ping.push(data.decode(entry));
                break;
            case 21 /* Tag */:
                if (payload.tag === undefined) {
                    payload.tag = [];
                }
                payload.tag.push(data.decode(entry));
                break;
            case 0 /* Metric */:
                if (payload.metric === undefined) {
                    payload.metric = [];
                }
                payload.metric.push(data.decode(entry));
                break;
            case 32 /* Upload */:
                if (payload.upload === undefined) {
                    payload.upload = [];
                }
                payload.upload.push(data.decode(entry));
                break;
            case 10 /* MouseDown */:
            case 11 /* MouseUp */:
            case 9 /* MouseMove */:
            case 12 /* MouseWheel */:
            case 8 /* Click */:
            case 13 /* DoubleClick */:
            case 14 /* RightClick */:
            case 15 /* TouchStart */:
            case 18 /* TouchCancel */:
            case 16 /* TouchEnd */:
            case 17 /* TouchMove */:
                if (payload.pointer === undefined) {
                    payload.pointer = [];
                }
                payload.pointer.push(interaction.decode(entry));
                break;
            case 7 /* Scroll */:
                if (payload.scroll === undefined) {
                    payload.scroll = [];
                }
                payload.scroll.push(interaction.decode(entry));
                break;
            case 5 /* Resize */:
                if (payload.resize === undefined) {
                    payload.resize = [];
                }
                payload.resize.push(interaction.decode(entry));
                break;
            case 19 /* Selection */:
                if (payload.selection === undefined) {
                    payload.selection = [];
                }
                payload.selection.push(interaction.decode(entry));
                break;
            case 24 /* InputChange */:
                if (payload.input === undefined) {
                    payload.input = [];
                }
                payload.input.push(interaction.decode(entry));
                break;
            case 23 /* Unload */:
                if (payload.unload === undefined) {
                    payload.unload = [];
                }
                payload.unload.push(interaction.decode(entry));
                break;
            case 25 /* Visibility */:
                if (payload.visibility === undefined) {
                    payload.visibility = [];
                }
                payload.visibility.push(interaction.decode(entry));
                break;
            case 33 /* Target */:
                if (payload.target === undefined) {
                    payload.target = [];
                }
                payload.target.push(layout.decode(entry));
                break;
            case 3 /* BoxModel */:
                if (payload.boxmodel === undefined) {
                    payload.boxmodel = [];
                }
                payload.boxmodel.push(layout.decode(entry));
                break;
            case 1 /* Discover */:
            case 2 /* Mutation */:
                if (payload.dom === undefined) {
                    payload.dom = [];
                }
                payload.dom.push(layout.decode(entry));
                break;
            case 4 /* Hash */:
                if (payload.hash === undefined) {
                    payload.hash = [];
                }
                payload.hash.push(layout.decode(entry));
                break;
            case 6 /* Document */:
                if (payload.doc === undefined) {
                    payload.doc = [];
                }
                payload.doc.push(layout.decode(entry));
                break;
            case 28 /* ScriptError */:
                if (payload.script === undefined) {
                    payload.script = [];
                }
                payload.script.push(diagnostic.decode(entry));
                break;
            case 29 /* ImageError */:
                if (payload.image === undefined) {
                    payload.image = [];
                }
                payload.image.push(diagnostic.decode(entry));
                break;
            default:
                console.error("No handler for Event: " + JSON.stringify(entry));
                break;
        }
    }
    /* Enrich decoded payload with derived events */
    payload.summary = data.summary();
    if (payload.dom && payload.dom.length > 0) {
        payload.hash = layout.hash();
    }
    if (layout.resources.length > 0) {
        payload.resource = layout.resource();
    }
    return payload;
}
exports.decode = decode;
function html(decoded) {
    var iframe = document.createElement("iframe");
    render(decoded, iframe);
    return iframe.contentDocument.documentElement.outerHTML;
}
exports.html = html;
function render(decoded, iframe, header) {
    // Reset rendering if we receive a new pageId
    if (pageId !== decoded.envelope.pageId) {
        pageId = decoded.envelope.pageId;
        r.reset();
    }
    // Replay events
    var events = [];
    for (var key in decoded) {
        if (Array.isArray(decoded[key])) {
            events = events.concat(decoded[key]);
        }
    }
    replay(events.sort(sort), iframe, header);
}
exports.render = render;
// should return Generator<Promise<Number>>
// but because of bug on TS 3.6+, it doesn't work:
// https://github.com/mobxjs/mobx-state-tree/issues/1378
function replayGenerator(events, iframe, header) {
    var start, _i, events_1, entry;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                start = events[0].time;
                _i = 0, events_1 = events;
                _a.label = 1;
            case 1:
                if (!(_i < events_1.length)) return [3 /*break*/, 5];
                entry = events_1[_i];
                if (!(entry.time - start > 16)) return [3 /*break*/, 3];
                start = entry.time;
                return [4 /*yield*/, waitEvent(entry)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                renderEvent(entry, iframe, header);
                _a.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}
exports.replayGenerator = replayGenerator;
function waitEvent(e) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wait(e.time)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, e];
            }
        });
    });
}
function replay(events, iframe, header) {
    return __awaiter(this, void 0, void 0, function () {
        var start, _i, events_2, entry;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    start = events[0].time;
                    _i = 0, events_2 = events;
                    _a.label = 1;
                case 1:
                    if (!(_i < events_2.length)) return [3 /*break*/, 5];
                    entry = events_2[_i];
                    if (!(entry.time - start > 16)) return [3 /*break*/, 3];
                    return [4 /*yield*/, wait(entry.time)];
                case 2:
                    start = _a.sent();
                    _a.label = 3;
                case 3:
                    renderEvent(entry, iframe, header);
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.replay = replay;
function renderEvent(entry, iframe, header) {
    switch (entry.event) {
        case 20 /* Page */:
            var pageEvent = entry;
            r.page(pageEvent.data, iframe);
            break;
        case 0 /* Metric */:
            var metricEvent = entry;
            if (header) {
                r.metric(metricEvent.data, header);
            }
            break;
        case 1 /* Discover */:
        case 2 /* Mutation */:
            var domEvent = entry;
            r.markup(domEvent.data, iframe);
            break;
        case 3 /* BoxModel */:
            var boxModelEvent = entry;
            r.boxmodel(boxModelEvent.data, iframe);
            break;
        case 10 /* MouseDown */:
        case 11 /* MouseUp */:
        case 9 /* MouseMove */:
        case 12 /* MouseWheel */:
        case 8 /* Click */:
        case 13 /* DoubleClick */:
        case 14 /* RightClick */:
        case 15 /* TouchStart */:
        case 18 /* TouchCancel */:
        case 16 /* TouchEnd */:
        case 17 /* TouchMove */:
            var pointerEvent = entry;
            r.pointer(pointerEvent.event, pointerEvent.data, iframe);
            break;
        case 24 /* InputChange */:
            var changeEvent = entry;
            r.change(changeEvent.data, iframe);
            break;
        case 19 /* Selection */:
            var selectionEvent = entry;
            r.selection(selectionEvent.data, iframe);
            break;
        case 5 /* Resize */:
            var resizeEvent = entry;
            r.resize(resizeEvent.data, iframe);
            break;
        case 7 /* Scroll */:
            var scrollEvent = entry;
            r.scroll(scrollEvent.data, iframe);
            break;
    }
}
exports.renderEvent = renderEvent;
function wait(timestamp) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(resolve, 10, timestamp);
                    return timestamp;
                })];
        });
    });
}
function sort(a, b) {
    return a.time - b.time;
}


/***/ }),

/***/ "./decode/data.ts":
/*!************************!*\
  !*** ./decode/data.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var summaries = null;
var SUMMARY_THRESHOLD = 30;
function reset() {
    summaries = {};
}
exports.reset = reset;
function decode(tokens) {
    var time = tokens[0];
    var event = tokens[1];
    switch (event) {
        case 20 /* Page */:
            var page = {
                timestamp: tokens[2],
                ua: tokens[3],
                url: tokens[4],
                referrer: tokens[5],
                lean: tokens[6],
            };
            return { time: time, event: event, data: page };
        case 22 /* Ping */:
            var ping = { gap: tokens[2] };
            return { time: time, event: event, data: ping };
        case 21 /* Tag */:
            var tag = { key: tokens[2], value: tokens[3] };
            return { time: time, event: event, data: tag };
        case 32 /* Upload */:
            var upload = { sequence: tokens[2], attempts: tokens[3], status: tokens[4] };
            return { time: time, event: event, data: upload };
        case 0 /* Metric */:
            var i = 2; // Start from 3rd index since first two are used for time & event
            var metrics = {};
            while (i < tokens.length) {
                metrics[tokens[i++]] = tokens[i++];
            }
            return { time: time, event: event, data: metrics };
    }
}
exports.decode = decode;
function envelope(tokens) {
    return {
        sequence: tokens[0],
        version: tokens[1],
        projectId: tokens[2],
        userId: tokens[3],
        sessionId: tokens[4],
        pageId: tokens[5],
        upload: tokens[6],
        end: tokens[7]
    };
}
exports.envelope = envelope;
function summarize(entry) {
    var time = entry[0];
    var type = entry[1];
    var data = { event: type, start: time, end: time };
    if (!(type in summaries)) {
        summaries[type] = [data];
    }
    var s = summaries[type][summaries[type].length - 1];
    if (time - s.end < SUMMARY_THRESHOLD) {
        s.end = time;
    }
    else {
        summaries[type].push(data);
    }
}
exports.summarize = summarize;
function summary() {
    var data = [];
    var time = null;
    for (var type in summaries) {
        if (summaries[type]) {
            for (var _i = 0, _a = summaries[type]; _i < _a.length; _i++) {
                var d = _a[_i];
                time = time ? Math.min(time, d.start) : d.start;
                data.push(d);
            }
        }
    }
    return data.length > 0 ? [{ time: time, event: 31 /* Summary */, data: data }] : null;
}
exports.summary = summary;


/***/ }),

/***/ "./decode/diagnostic.ts":
/*!******************************!*\
  !*** ./decode/diagnostic.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function decode(tokens) {
    var time = tokens[0];
    var event = tokens[1];
    switch (event) {
        case 29 /* ImageError */:
            var imageError = {
                source: tokens[2],
                target: tokens[3]
            };
            return { time: time, event: event, data: imageError };
        case 28 /* ScriptError */:
            var scriptError = {
                message: tokens[3],
                line: tokens[4],
                column: tokens[5],
                stack: tokens[6],
                source: tokens[2]
            };
            return { time: time, event: event, data: scriptError };
    }
}
exports.decode = decode;


/***/ }),

/***/ "./decode/interaction.ts":
/*!*******************************!*\
  !*** ./decode/interaction.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function decode(tokens) {
    var time = tokens[0];
    var event = tokens[1];
    switch (event) {
        case 10 /* MouseDown */:
        case 11 /* MouseUp */:
        case 9 /* MouseMove */:
        case 12 /* MouseWheel */:
        case 8 /* Click */:
        case 13 /* DoubleClick */:
        case 14 /* RightClick */:
        case 15 /* TouchStart */:
        case 18 /* TouchCancel */:
        case 16 /* TouchEnd */:
        case 17 /* TouchMove */:
            var pointerData = { target: tokens[2], x: tokens[3], y: tokens[4] };
            return { time: time, event: event, data: pointerData };
        case 5 /* Resize */:
            var resizeData = { width: tokens[2], height: tokens[3] };
            return { time: time, event: event, data: resizeData };
        case 24 /* InputChange */:
            var changeData = {
                target: tokens[2],
                value: tokens[3]
            };
            return { time: time, event: event, data: changeData };
        case 19 /* Selection */:
            var selectionData = {
                start: tokens[2],
                startOffset: tokens[3],
                end: tokens[4],
                endOffset: tokens[5]
            };
            return { time: time, event: event, data: selectionData };
        case 7 /* Scroll */:
            var scrollData = { target: tokens[2], x: tokens[3], y: tokens[4] };
            return { time: time, event: event, data: scrollData };
        case 25 /* Visibility */:
            var visibleData = { visible: tokens[2] };
            return { time: time, event: event, data: visibleData };
        case 23 /* Unload */:
            var unloadData = { name: tokens[2] };
            return { time: time, event: event, data: unloadData };
    }
}
exports.decode = decode;


/***/ }),

/***/ "./decode/layout.ts":
/*!**************************!*\
  !*** ./decode/layout.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hash_1 = __webpack_require__(/*! ../src/data/hash */ "./src/data/hash.ts");
var token_1 = __webpack_require__(/*! ../src/data/token */ "./src/data/token.ts");
var selector_1 = __webpack_require__(/*! ../src/layout/selector */ "./src/layout/selector.ts");
var placeholderImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNiOAMAANUAz5n+TlUAAAAASUVORK5CYII=";
exports.hashes = {};
var lastTime;
function reset() {
    exports.hashes = {};
    exports.resources = [];
    lastTime = null;
}
exports.reset = reset;
function decode(tokens) {
    var time = lastTime = tokens[0];
    var event = tokens[1];
    switch (event) {
        case 6 /* Document */:
            var documentData = { width: tokens[2], height: tokens[3] };
            return { time: time, event: event, data: documentData };
        case 3 /* BoxModel */:
            var boxmodelData = [];
            for (var i = 2; i < tokens.length; i += 2) {
                var boxmodel = { id: tokens[i], box: tokens[i + 1] };
                boxmodelData.push(boxmodel);
            }
            return { time: time, event: event, data: boxmodelData };
        case 33 /* Target */:
            var targetData = [];
            for (var i = 2; i < tokens.length; i += 3) {
                var target = { id: tokens[i], hash: tokens[i + 1], box: tokens[i + 2] };
                targetData.push(target);
            }
            return { time: time, event: event, data: targetData };
        case 4 /* Hash */:
            var reference = 0;
            var hashData = [];
            for (var i = 2; i < tokens.length; i += 2) {
                var id = tokens[i] + reference;
                var token = tokens[i + 1];
                var cs = { id: id, hash: typeof (token) === "object" ? tokens[token[0]] : token };
                hashData.push(cs);
                reference = id;
            }
            return { time: time, event: event, data: hashData };
        case 1 /* Discover */:
        case 2 /* Mutation */:
            var lastType = null;
            var node = [];
            var tagIndex = 0;
            var domData = [];
            for (var i = 2; i < tokens.length; i++) {
                var token = tokens[i];
                var type = typeof (token);
                switch (type) {
                    case "number":
                        if (type !== lastType && lastType !== null) {
                            domData.push(process(node, tagIndex));
                            node = [];
                            tagIndex = 0;
                        }
                        node.push(token);
                        tagIndex++;
                        break;
                    case "string":
                        node.push(token);
                        break;
                    case "object":
                        var subtoken = token[0];
                        var subtype = typeof (subtoken);
                        switch (subtype) {
                            case "string":
                                var keys = token_1.resolve(token);
                                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                    var key = keys_1[_i];
                                    node.push(key);
                                }
                                break;
                            case "number":
                                token = tokens.length > subtoken ? tokens[subtoken] : null;
                                node.push(token);
                                break;
                        }
                }
                lastType = type;
            }
            // Process last node
            domData.push(process(node, tagIndex));
            return { time: time, event: event, data: domData };
    }
}
exports.decode = decode;
function hash() {
    var data = [];
    for (var id in exports.hashes) {
        if (exports.hashes[id]) {
            data.push(exports.hashes[id]);
        }
    }
    return data.length > 0 ? [{ time: lastTime, event: 4 /* Hash */, data: data }] : null;
}
exports.hash = hash;
function resource() {
    return exports.resources.length > 0 ? [{ time: lastTime, event: 30 /* Resource */, data: exports.resources }] : null;
}
exports.resource = resource;
function process(node, tagIndex) {
    var _a = node[tagIndex] ? node[tagIndex].split("~") : [node[tagIndex]], tag = _a[0], position = _a[1];
    var output = {
        id: node[0],
        parent: tagIndex > 1 ? node[1] : null,
        next: tagIndex > 2 ? node[2] : null,
        tag: tag,
        position: position ? parseInt(position, 10) : null
    };
    var hasAttribute = false;
    var attributes = {};
    var value = null;
    var prefix = output.parent in exports.hashes ? exports.hashes[output.parent].selector + ">" : (output.parent ? "" : null);
    for (var i = tagIndex + 1; i < node.length; i++) {
        var token = node[i];
        var keyIndex = token.indexOf("=");
        var lastChar = token[token.length - 1];
        if (i === (node.length - 1) && output.tag === "STYLE") {
            value = token;
        }
        else if (lastChar === ">" && keyIndex === -1) {
            prefix = token;
        }
        else if (output.tag !== "*T" && keyIndex > 0) {
            hasAttribute = true;
            var k = token.substr(0, keyIndex);
            var v = token.substr(keyIndex + 1);
            switch (k) {
                case "src":
                    v = v.length === 0 ? placeholderImage : v;
                    break;
                default:
                    break;
            }
            attributes[k] = v;
        }
        else if (output.tag === "*T") {
            value = token;
        }
    }
    var s = selector_1.default(output.tag, prefix, attributes, output.position);
    if (s.length > 0) {
        exports.hashes[output.id] = { id: output.id, hash: hash_1.default(s), selector: s };
    }
    getResource(output.tag, attributes);
    if (hasAttribute) {
        output.attributes = attributes;
    }
    if (value) {
        output.value = value;
    }
    return output;
}
function getResource(tag, attributes) {
    switch (tag) {
        case "LINK":
            if ("href" in attributes && "rel" in attributes && attributes["rel"] === "stylesheet") {
                exports.resources.push({ tag: tag, url: attributes["href"] });
            }
            break;
    }
}


/***/ }),

/***/ "./decode/render.ts":
/*!**************************!*\
  !*** ./decode/render.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nodes = {};
var boxmodels = {};
var metrics = null;
var lean = false;
var METRIC_MAP = {};
METRIC_MAP[0 /* Nodes */] = { name: "Node Count", unit: "" };
METRIC_MAP[1 /* LayoutBytes */] = { name: "Layout Bytes", unit: "KB" };
METRIC_MAP[2 /* InteractionBytes */] = { name: "Interaction Bytes", unit: "KB" };
METRIC_MAP[3 /* NetworkBytes */] = { name: "Network Bytes", unit: "KB" };
METRIC_MAP[4 /* DiagnosticBytes */] = { name: "Diagnostic Bytes", unit: "KB" };
METRIC_MAP[5 /* Mutations */] = { name: "Mutation Count", unit: "" };
METRIC_MAP[6 /* Interactions */] = { name: "Interaction Count", unit: "" };
METRIC_MAP[7 /* Clicks */] = { name: "Click Count", unit: "" };
METRIC_MAP[8 /* Selections */] = { name: "Selection Count", unit: "" };
METRIC_MAP[10 /* ScriptErrors */] = { name: "Script Errors", unit: "" };
METRIC_MAP[11 /* ImageErrors */] = { name: "Image Errors", unit: "" };
METRIC_MAP[12 /* DiscoverTime */] = { name: "Discover Time", unit: "ms" };
METRIC_MAP[13 /* MutationTime */] = { name: "Mutation Time", unit: "ms" };
METRIC_MAP[14 /* BoxModelTime */] = { name: "Box Model Time", unit: "ms" };
METRIC_MAP[15 /* StartTime */] = { name: "Start Time", unit: "s" };
METRIC_MAP[16 /* ActiveTime */] = { name: "Active Time", unit: "ms" };
METRIC_MAP[17 /* EndTime */] = { name: "End Time", unit: "s" };
METRIC_MAP[18 /* ViewportWidth */] = { name: "Viewport Width", unit: "px" };
METRIC_MAP[19 /* ViewportHeight */] = { name: "Viewport Height", unit: "px" };
METRIC_MAP[20 /* DocumentWidth */] = { name: "Document Width", unit: "px" };
METRIC_MAP[21 /* DocumentHeight */] = { name: "Document Height", unit: "px" };
// tslint:disable-next-line: max-line-length
var pointerIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAdTAAAOpgAAA6lwAAF2+XqZnUAAACaUlEQVR4nGL8f58BHYgAsT8Q2wGxBBAzQcX/AfFrID4CxOuA+BWKLoX/YAoggBjRDHQD4ngglgRiPgyrIOAzEL8E4lVQg1EMBAggFiSFYUAcA8RSOAyCAV4oTgViTiBeiiwJEEAw71gRaRgyEAXiKCB2RBYECCCQgcIMEG+SYhgMiANxEhDzwwQAAghkoAMQK5NhGAwoALE1jAMQQCADQU7mpMBAZqijwAAggEAGqgAxOwUGskHNAAOAAAIZyEtIh4INg3bfHHD6xAUEYAyAAAIZ+IuQgU9fMLCXdzDIzV3JIIhDyQ8YAyCAQAaCUv8/fAZysDP8+/OXgTG7jkFhwRoMQ0F6n8M4AAEEMvAKsg34wM9fDEwgQ1dtRSQTIPgNxFdhHIAAAhm4AYg/EmMgCHz7zsCUVMaguHob3FCQYzbD5AECCGTgJSDeCbWJKPD1GwNzSjmD4tZ9DFxgvQr/b8PkAAIIlvVWA/FuUgz99IWBOTyXQcE+nOEOsjhAACGXNnJAHAnE9kAshqyIV5vB4Ms3cALGBkAlj9////9PgTgAAcSEJPEIiDuBeBYQP2CAhOt3BsLJCpSfNzAyMpqDOAABhF4ewh3FAMmf2kAsyqnBUPDjJ8HcdBvoSjWAAGIEEgTUMTAAbf/AwICSVGCgD4hPgJQA8WegWdsBAogFiyJC4C0QgxI3KLj4gIasRpYECCAGkAsJYSAAuRDEAKUEQwZIzgDxvwCxCrJagAAi1kAQAYpFESh/BlQMhJuR1QIEELEGlgOxHBLflAGSh0Gc60DMBpMDCCCiDMRhyXoGSJUaDgpPmDhAgAEAN5Ugk0bMYNIAAAAASUVORK5CYII=";
// tslint:disable-next-line: max-line-length
var clickIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAdTAAAOpgAAA6lwAAF2+XqZnUAAADvklEQVR4nGL8//8/AzJgZGQQAVL+QGwHxBJAzASV+gfEr4H4CBCvA2p7xYAFAAQQI7KBQMPcgFQ8EEsCMR82DUDwGYhfAvEqoNZ16JIAAQQ3EGhYGJCKAWIpHAahA5BrlwC1L0UWBAggJqhhViQaBgKiQBwF1OuILAgQQExAAWEGiDeRDJsEFOM1AFplzMCgrcnAcIoTh6HiQJwENIMfJgAQQCAXOgCxMkLNaqBkvgIDg8Z3BoaC5wwMz9kYGKIVGRg+MjFgB0C1DNYwDkAAgRSBnIzkgnUCDAyswIBdf4+Bof8ZA0PHYwaGO0D5/Tw4DGSGOgoMAAIIZKAKELMj5D8AFXD+BUbyXwhf9Scw5QAt+MmIw0A2qBlgABBAIAN5cSgkBQjAGAABxALEv1BdiA4YobgFmDZPcjMwZLyB+JILmNAl/0AV/YCpBgggkIGg9MTNgMgRWAAL0MuvWRkYJgNzznRgzP4AqmUHGpj/AhgFnxgYlD4yMKiBVQIEEMiQK8g2YAJQ2JUAY/vFZQaGmfeBvgO6qhUYUU5AQ7qASc1Tg4FB35+RkRGUXRkAAgjkwg0MDMedGBh2AW3m+QtxCQuSgZxAl9h+gbAtvzEwJAN9VAXMxzc+Qlwa+JSBoRQUZL1AvBEggECB4wdMJqsYGH6zQ8IKlBWlgOF6/SowpoGGvQKaDgoqKSDxCWjAA2Cs6gF99AXIfgLEGsuA+kAJuwqYjRkBAgjk5S5gQQL00vHJDAwnLgFz1G9gPCElEbE/EMNAAGSBHjR4eIBiGtuBjKVQV4ABQACBDASG5t/dDAwWPQwMZkDbJlyApMG/UEN38UBc9hvIPwCMPFDy/AmM6UnXgN6eDywcniKHOEAAgQw8BsRBQGezASU7gfm9jYGh8hxQIzD2GIDZ7yYwjXwHuuYPMIHfApr2HxghbxcBY/giA4PmE6TUAgYAAQRilALxASCeBYwpb2A4bGBkTNnLAMmf2sDYBWbN73cZGDiAZeBxYBlp1w00CBg5DBlIXpUH4mcgBkAAMUDLw2So5CQQHxkDQRwQCzFAEn8oAyRVg/J+IVQM5ChgvmfYDFIPEEDIGudCDQ1HM9CFAZI9gckJXC2AggmUfwOh8mpQfZUgPkAAIWsEaToOxF+B2ATdpbgwEKRCDbQB8QECCF1SB4hBkXEeiPmJNBCUbEDZlwfEBwgg5CwBUnAFGDHpQCYw+TBsAbI3MUBqO2xFFyj9CELDdRlQLzg3AQQQLlujoAH9H6oRG/4HlT8ExCowvQABBgBOKHD8+UgEvgAAAABJRU5ErkJggg==";
// tslint:disable-next-line: max-line-length
var touchIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOS0xMVQwNjo1MzozMC0wNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDktMTFUMDY6NTQ6NDAtMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDktMTFUMDY6NTQ6NDAtMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODZmNTE5ZGQtN2E3MS1hOTQyLTgwNTktMjc3OTJjNTM1YTNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg2ZjUxOWRkLTdhNzEtYTk0Mi04MDU5LTI3NzkyYzUzNWEzZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjg2ZjUxOWRkLTdhNzEtYTk0Mi04MDU5LTI3NzkyYzUzNWEzZSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODZmNTE5ZGQtN2E3MS1hOTQyLTgwNTktMjc3OTJjNTM1YTNlIiBzdEV2dDp3aGVuPSIyMDE5LTA5LTExVDA2OjUzOjMwLTA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgqF3McAAAOgSURBVDiNlZVdbBRVFMd/d7o7penS7c6ghT60JRLCRx9s0JAIUvajJtCkVYw1IVaKUr/wpQk+qO8YRV8aEw3Q1EjpAwkNlkZNDMEYxUDoh9gSH7CNrXQptbtsHeluu7vHh5kuQ90l8k9ucuece373zJl77igRwa1YXK0BmoFdwFpAc1xZYBb4EegzAnKbPFJuYCyungEOAOuAsnwBwN/ADHDGCEhfQWAsrlqAl4DKAqCVmgV6jICcdhs1B/bUQ8IAHgH2x+IqeB8wFlcm9mvmYOFwq2kavsdNg22msWVzf39VSQFoBfBKLK787gx3A48tG44cCfpHhk/VwKYFn+9QFKL6wTZ9/Z07mvYfnK0aYIcbGARyGXzR/Wg5eOXq4Oj4H5Mnp3fVN0zBjZJjHz3tKwAscpLKATcAxcsGkUQRlGQMYzED0Ng4mgJNLEtXBYC6w8gBVxdY+DAqdwMXH7RSKQBFT090XXVVe+XQULl+7VqZPjWle1zLkssTD/Z5KuVeR+SRR2DWa1ndaxsingpIalCc9ftfu/XW4aH5UOhGIhK+l+Goe4eVsixdmeaB6Fxs5tdIw7MTUJ6urj40BaFEInG88oOjVzc1RJLNSqnmZeC5s2fXZ2u3tlfs3NG2Bma9duK2AoGF7OG3r1gAHR0X75pm0+zQ8MnbX39z5SYEE3V1rddBpoFP7OJAE3jPwFKx/ShA5eL4xK0xvz+bjUa9nlSqiJqaZDqR0LTBwQo9FIomLUtpY2OGtn37XK9p4AfeExGlgN+gqPjEiarzHm+m/mDbwmYQxidio35/NvuA75UFLgCfmgZvAu+LiNKAjZD5bt/zEx83NU32trRsG4GyTDqtKYDOzjpfIqFpS0uorq4tpZkMpFL8FQ63Xr982ew2AnLTvYsGXAL2mQa6EZAPP/v826P1u58cSqfVPLDQ/1VtkWV50um0Sg0M1GZEmIpGV305Mnzql7175v50nZbc5B3ge+C4UqpRRM719akL2P25dXJyVXB+Xv+9tDQ9c+knvWxw0Dy2d8/cXeANp+AA1cA0AM59+Krj7BQR3AN4GTCw2/MF7N4tATocmwcYB86LCO7ALgf64gpgBLs9vdi/BQ27f59z/BuduHdXAlcDPwP/AE+szLTQANod4M77gI6zFpgHhgH//wSexm5fn4jgbnBEZFQp9TrQCwwopfqd85bv6soAAaeuvSJi5T5Knl33O4UWJzDfyDr+H4ANy7H/AvM1z7/FQv/oAAAAAElFTkSuQmCC";
function reset() {
    nodes = {};
    boxmodels = {};
    metrics = {};
}
exports.reset = reset;
function metric(data, header) {
    var html = [];
    // Copy over metrics for future reference
    for (var m in data) {
        if (data[m]) {
            metrics[m] = data[m];
        }
    }
    for (var entry in metrics) {
        if (metrics[entry]) {
            var m = metrics[entry];
            var map = METRIC_MAP[entry];
            html.push("<li><h2>" + value(m, map.unit) + "<span>" + map.unit + "</span></h2>" + map.name + "</li>");
        }
    }
    header.innerHTML = "<ul>" + html.join("") + "</ul>";
}
exports.metric = metric;
function value(input, unit) {
    switch (unit) {
        case "KB": return Math.round(input / 1024);
        case "s": return Math.round(input / 1000);
        default: return input;
    }
}
function page(data, iframe) {
    lean = !!data.lean;
}
exports.page = page;
function boxmodel(data, iframe) {
    var doc = iframe.contentDocument;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var bm = data_1[_i];
        var el = element(bm.id);
        if (lean) {
            var box = el ? el : doc.createElement("DIV");
            box.style.left = bm.box[0] + "px";
            box.style.top = bm.box[1] + "px";
            box.style.width = bm.box[2] + "px";
            box.style.height = bm.box[3] + "px";
            box.style.position = "absolute";
            box.style.border = "1px solid red";
            doc.body.appendChild(box);
            nodes[bm.id] = box;
        }
        else if (el && el.tagName === "IFRAME") {
            var s = getComputedStyle(el, null);
            var width = bm.box[2];
            var height = bm.box[3];
            if (s["boxSizing"] !== "border-box") {
                width -= (css(s, "paddingLeft") + css(s, "paddingRight") + css(s, "borderLeftWidth") + css(s, "borderRightWidth"));
                height -= (css(s, "paddingTop") + css(s, "paddingBottom") + css(s, "borderTopWidth") + css(s, "borderBottomWidth"));
            }
            el.style.width = width + "px";
            el.style.height = height + "px";
            if (el.tagName === "IFRAME") {
                el.style.backgroundColor = "maroon";
            }
            boxmodels[bm.id] = bm;
        }
    }
}
exports.boxmodel = boxmodel;
function css(style, field) {
    return parseInt(style[field], 10);
}
function markup(data, iframe) {
    var doc = iframe.contentDocument;
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var node = data_2[_i];
        var parent_1 = element(node.parent);
        var next = element(node.next);
        switch (node.tag) {
            case "*D":
                if (typeof XMLSerializer !== "undefined") {
                    doc.open();
                    doc.write(new XMLSerializer().serializeToString(doc.implementation.createDocumentType(node.attributes["name"], node.attributes["publicId"], node.attributes["systemId"])));
                    doc.close();
                }
                break;
            case "*T":
                var textElement = element(node.id);
                textElement = textElement ? textElement : doc.createTextNode(null);
                textElement.nodeValue = unmask(node.value);
                insert(node, parent_1, textElement, next);
                break;
            case "HTML":
                var docElement = element(node.id);
                if (docElement === null) {
                    var newDoc = doc.implementation.createHTMLDocument("");
                    docElement = newDoc.documentElement;
                    var p = doc.importNode(docElement, true);
                    doc.replaceChild(p, doc.documentElement);
                    if (doc.head) {
                        doc.head.parentNode.removeChild(doc.head);
                    }
                    if (doc.body) {
                        doc.body.parentNode.removeChild(doc.body);
                    }
                }
                setAttributes(doc.documentElement, node.attributes);
                nodes[node.id] = doc.documentElement;
                break;
            case "HEAD":
                var headElement = element(node.id);
                if (headElement === null) {
                    headElement = doc.createElement(node.tag);
                    var base = doc.createElement("base");
                    base.href = node.attributes["*B"];
                    headElement.appendChild(base);
                    delete node.attributes["*B"];
                }
                setAttributes(headElement, node.attributes);
                insert(node, parent_1, headElement, next);
                break;
            case "STYLE":
                var styleElement = element(node.id);
                styleElement = styleElement ? styleElement : doc.createElement(node.tag);
                setAttributes(styleElement, node.attributes);
                styleElement.textContent = node.value;
                insert(node, parent_1, styleElement, next);
                break;
            default:
                var domElement = element(node.id);
                domElement = domElement ? domElement : createElement(doc, node.tag, parent_1);
                if (!node.attributes) {
                    node.attributes = {};
                }
                node.attributes["data-id"] = "" + node.id;
                setAttributes(domElement, node.attributes);
                if (node.id in boxmodels) {
                    boxmodel([boxmodels[node.id]], iframe);
                }
                insert(node, parent_1, domElement, next);
                break;
        }
    }
}
exports.markup = markup;
function createElement(doc, tag, parent) {
    if (tag && tag.indexOf("svg:" /* SVG_PREFIX */) === 0) {
        return doc.createElementNS("http://www.w3.org/2000/svg" /* SVG_NAMESPACE */, tag.substr("svg:" /* SVG_PREFIX */.length));
    }
    return doc.createElement(tag);
}
function element(nodeId) {
    return nodeId !== null && nodeId > 0 && nodeId in nodes ? nodes[nodeId] : null;
}
function insert(data, parent, node, next) {
    if (parent !== null) {
        next = next && next.parentElement !== parent ? null : next;
        try {
            parent.insertBefore(node, next);
        }
        catch (ex) {
            console.warn("Node: " + node + " | Parent: " + parent + " | Data: " + JSON.stringify(data));
            console.warn("Exception encountered while inserting node: " + ex);
        }
    }
    else if (parent === null && node.parentElement !== null) {
        node.parentElement.removeChild(node);
        node = null;
    }
    nodes[data.id] = node;
}
function setAttributes(node, attributes) {
    // First remove all its existing attributes
    if (node.attributes) {
        var length_1 = node.attributes.length;
        while (node.attributes && length_1 > 0) {
            node.removeAttribute(node.attributes[0].name);
            length_1--;
        }
    }
    // Add new attributes
    for (var attribute in attributes) {
        if (attributes[attribute] !== undefined) {
            try {
                var v = unmask(attributes[attribute]);
                if (attribute.indexOf("xlink:") === 0) {
                    node.setAttributeNS("http://www.w3.org/1999/xlink", attribute, v);
                }
                else {
                    node.setAttribute(attribute, v);
                }
            }
            catch (ex) {
                console.warn("Node: " + node + " | " + JSON.stringify(attributes));
                console.warn("Exception encountered while adding attributes: " + ex);
            }
        }
    }
}
function scroll(data, iframe) {
    var target = getNode(data.target);
    if (target) {
        target.scrollTo(data.x, data.y);
    }
}
exports.scroll = scroll;
function resize(data, iframe) {
    iframe.removeAttribute("style");
    var margin = 10;
    var px = "px";
    var width = data.width;
    var height = data.height;
    var availableWidth = (iframe.contentWindow.innerWidth - (2 * margin));
    var scaleWidth = Math.min(availableWidth / width, 1);
    var scaleHeight = Math.min((iframe.contentWindow.innerHeight - (16 * margin)) / height, 1);
    var scale = Math.min(scaleWidth, scaleHeight);
    iframe.style.position = "relative";
    iframe.style.width = width + px;
    iframe.style.height = height + px;
    iframe.style.left = ((availableWidth - (width * scale)) / 2) + px;
    iframe.style.transformOrigin = "0 0 0";
    iframe.style.transform = "scale(" + scale + ")";
    iframe.style.border = "1px solid #cccccc";
    iframe.style.margin = margin + px;
    iframe.style.overflow = "hidden";
}
exports.resize = resize;
function change(data, iframe) {
    var el = element(data.target);
    if (el) {
        el.value = data.value;
    }
}
exports.change = change;
function selection(data, iframe) {
    var doc = iframe.contentDocument;
    var s = doc.getSelection();
    s.setBaseAndExtent(element(data.start), data.startOffset, element(data.end), data.endOffset);
}
exports.selection = selection;
function pointer(event, data, iframe) {
    var doc = iframe.contentDocument;
    var p = doc.getElementById("clarity-pointer");
    var pointerWidth = 20;
    var pointerHeight = 24;
    if (p === null) {
        p = doc.createElement("DIV");
        p.id = "clarity-pointer";
        p.style.position = "absolute";
        p.style.zIndex = "1000";
        p.style.width = pointerWidth + "px";
        p.style.height = pointerHeight + "px";
        doc.body.appendChild(p);
    }
    console.log('6969 jsx: Pointer ', p);
    console.log('6969 jsx: move ', data.x, data.y);
    p.style.left = (data.x - 8) + "px";
    p.style.top = (data.y - 8) + "px";
    switch (event) {
        case 8 /* Click */:
        case 14 /* RightClick */:
        case 13 /* DoubleClick */:
            p.style.background = "url(" + clickIcon + ") no-repeat left center";
            break;
        case 17 /* TouchMove */:
        case 15 /* TouchStart */:
        case 16 /* TouchEnd */:
        case 18 /* TouchCancel */:
            p.style.background = "url(" + touchIcon + ") no-repeat left center";
            break;
        default:
            p.style.background = "url(" + pointerIcon + ") no-repeat left center";
            break;
    }
}
exports.pointer = pointer;
function getNode(id) {
    return id in nodes ? nodes[id] : null;
}
function unmask(v) {
    if (v && v.length > 0) {
        var parts = v.split("*");
        var placeholder = "x";
        if (parts.length === 3 && parts[0] === "") {
            var textCount = parseInt(parts[1], 36);
            var wordCount = parseInt(parts[2], 36);
            if (isFinite(textCount) && isFinite(wordCount)) {
                if (wordCount > 0 && textCount === 0) {
                    v = " ";
                }
                else if (wordCount === 0 && textCount > 0) {
                    v = Array(textCount + 1).join(placeholder);
                }
                else if (wordCount > 0 && textCount > 0) {
                    v = "";
                    var avg = Math.floor(textCount / wordCount);
                    while (v.length < textCount + wordCount) {
                        var gap = Math.min(avg, textCount + wordCount - v.length);
                        v += Array(gap + 1).join(placeholder) + " ";
                    }
                }
                else {
                    v = Array(textCount + wordCount + 1).join(placeholder);
                }
            }
        }
    }
    return v;
}


/***/ }),

/***/ "./src/core/version.ts":
/*!*****************************!*\
  !*** ./src/core/version.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var version = "1.0.0-b10";
exports.default = version;


/***/ }),

/***/ "./src/data/hash.ts":
/*!**************************!*\
  !*** ./src/data/hash.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: no-bitwise
function default_1(input) {
    // Code inspired from C# GetHashCode: https://github.com/Microsoft/referencesource/blob/master/mscorlib/system/string.cs
    var hash = 0;
    var hashOne = 5381;
    var hashTwo = hashOne;
    for (var i = 0; i < input.length; i += 2) {
        var charOne = input.charCodeAt(i);
        hashOne = ((hashOne << 5) + hashOne) ^ charOne;
        if (i + 1 < input.length) {
            var charTwo = input.charCodeAt(i + 1);
            hashTwo = ((hashTwo << 5) + hashTwo) ^ charTwo;
        }
    }
    // Replace the magic number from C# implementation (1566083941) with a smaller prime number (11579)
    // This ensures we don't hit integer overflow and prevent collisions
    hash = Math.abs(hashOne + (hashTwo * 11579));
    return hash.toString(36).slice(-6); // Limit hashes to 6 characters
}
exports.default = default_1;


/***/ }),

/***/ "./src/data/token.ts":
/*!***************************!*\
  !*** ./src/data/token.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tokens = [];
function check(hash) {
    var output = tokens.indexOf(hash) >= 0;
    return output;
}
exports.check = check;
function resolve(hash) {
    return check(hash) ? tokens[hash] : [];
}
exports.resolve = resolve;


/***/ }),

/***/ "./src/layout/selector.ts":
/*!********************************!*\
  !*** ./src/layout/selector.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(tag, prefix, attributes, position) {
    var empty = "";
    var suffix = position ? ":nth-of-type(" + position + ")" : empty;
    switch (tag) {
        case "STYLE":
        case "TITLE":
        case "LINK":
        case "META":
        case "*T":
        case "*D":
            return empty;
        case "HTML":
            return "HTML";
        default:
            if (prefix === null) {
                return empty;
            }
            tag = tag.indexOf("svg:" /* SVG_PREFIX */) === 0 ? tag.substr("svg:" /* SVG_PREFIX */.length) : tag;
            var selector = "" + prefix + tag + suffix;
            if ("data-clarity" /* ID_ATTRIBUTE */ in attributes) {
                selector = "*" + attributes["data-clarity" /* ID_ATTRIBUTE */];
            }
            else if ("id" in attributes && attributes["id"].length > 0) {
                selector = tag + "#" + attributes.id;
            }
            else if ("class" in attributes && attributes["class"].length > 0) {
                selector = "" + prefix + tag + "." + attributes.class.trim().split(/\s+/).join(".") + suffix;
            }
            return selector;
    }
}
exports.default = default_1;


/***/ }),

/***/ "./webpack/globalize2.ts":
/*!*******************************!*\
  !*** ./webpack/globalize2.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var clarity = __webpack_require__(/*! ../decode/clarity */ "./decode/clarity.ts");
// When built with webpack for prod, compiled clarity-js bundle doesn't expose the module anywhere on the page.
// Since we need clarity-js to be available globally, we can create a wrapper module that would assign clarity to window.
if (typeof window !== "undefined") {
    window.clarityDecoder = clarity;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVjb2RlL2NsYXJpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vZGVjb2RlL2RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vZGVjb2RlL2RpYWdub3N0aWMudHMiLCJ3ZWJwYWNrOi8vLy4vZGVjb2RlL2ludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL2RlY29kZS9sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vZGVjb2RlL3JlbmRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS92ZXJzaW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2hhc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvdG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dsb2JhbGl6ZTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNE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QUFRLENBQUM7S0FDdkI7QUFDTCxDQUFDO0FBMUJELDRCQTBCQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJELGtGQUE2QztBQUU3QywrR0FBK0c7QUFDL0cseUhBQXlIO0FBQ3pILElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO0lBQzlCLE1BQWMsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO0NBQzVDIiwiZmlsZSI6ImRlY29kZS5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYnBhY2svZ2xvYmFsaXplMi50c1wiKTtcbiIsImltcG9ydCB2ZXJzaW9uIGZyb20gXCIuLi9zcmMvY29yZS92ZXJzaW9uXCI7XHJcbmltcG9ydCB7IEV2ZW50LCBQYXlsb2FkLCBUb2tlbiB9IGZyb20gXCIuLi90eXBlcy9kYXRhXCI7XHJcbmltcG9ydCB7IE1ldHJpY0V2ZW50LCBQYWdlRXZlbnQsIFBpbmdFdmVudCwgU3VtbWFyeUV2ZW50LCBUYWdFdmVudCwgVXBsb2FkRXZlbnQgfSBmcm9tIFwiLi4vdHlwZXMvZGVjb2RlL2RhdGFcIjtcclxuaW1wb3J0IHsgRGVjb2RlZEV2ZW50LCBEZWNvZGVkUGF5bG9hZCB9IGZyb20gXCIuLi90eXBlcy9kZWNvZGUvZGVjb2RlXCI7XHJcbmltcG9ydCB7IEltYWdlRXJyb3JFdmVudCwgU2NyaXB0RXJyb3JFdmVudCB9IGZyb20gXCIuLi90eXBlcy9kZWNvZGUvZGlhZ25vc3RpY1wiO1xyXG5pbXBvcnQgeyBJbnB1dENoYW5nZUV2ZW50LCBQb2ludGVyRXZlbnQsIFJlc2l6ZUV2ZW50LCBTY3JvbGxFdmVudCB9IGZyb20gXCIuLi90eXBlcy9kZWNvZGUvaW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IHsgU2VsZWN0aW9uRXZlbnQsIFVubG9hZEV2ZW50LCBWaXNpYmlsaXR5RXZlbnQgfSBmcm9tIFwiLi4vdHlwZXMvZGVjb2RlL2ludGVyYWN0aW9uXCI7XHJcbmltcG9ydCB7IEJveE1vZGVsRXZlbnQsIERvY3VtZW50RXZlbnQsIERvbUV2ZW50LCBIYXNoRXZlbnQsIFJlc291cmNlRXZlbnQsIFRhcmdldEV2ZW50IH0gZnJvbSBcIi4uL3R5cGVzL2RlY29kZS9sYXlvdXRcIjtcclxuXHJcbmltcG9ydCAqIGFzIGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFnbm9zdGljIGZyb20gXCIuL2RpYWdub3N0aWNcIjtcclxuaW1wb3J0ICogYXMgaW50ZXJhY3Rpb24gZnJvbSBcIi4vaW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgbGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xyXG5pbXBvcnQgKiBhcyByIGZyb20gXCIuL3JlbmRlclwiO1xyXG5cclxubGV0IHBhZ2VJZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGUoaW5wdXQ6IHN0cmluZyk6IERlY29kZWRQYXlsb2FkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiRGVjb2RlZCBpcyBydW5uaW5nISEhIDY5IFwiLCBpbnB1dCk7XHJcblx0XHRsZXQganNvbjogUGF5bG9hZCA9IHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIiA/IEpTT04ucGFyc2UoaW5wdXQpIDogaW5wdXQ7XHJcblx0XHRjb25zb2xlLmxvZygnaW5wdXRlIHlwZTogJywgIHR5cGVvZiBpbnB1dCk7XHJcblx0XHRjb25zb2xlLmxvZygnanNvbiA3MDcgJyk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKCdqc29uQEAgJywganNvbik7XHJcblx0XHRjb25zb2xlLmxvZygnanNvbmUgJywganNvbi5lKTtcclxuICAgIGxldCBlbnZlbG9wZSA9IGRhdGEuZW52ZWxvcGUoanNvbi5lKTtcclxuICAgIGxldCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgbGV0IHBheWxvYWQ6IERlY29kZWRQYXlsb2FkID0geyB0aW1lc3RhbXAsIGVudmVsb3BlIH07XHJcbiAgICBsZXQgZW5jb2RlZDogVG9rZW5bXVtdID0ganNvbi5kO1xyXG5cclxuICAgIGlmIChwYXlsb2FkLmVudmVsb3BlLnZlcnNpb24gIT09IHZlcnNpb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgQ2xhcml0eSBWZXJzaW9uLiBBY3R1YWw6ICR7cGF5bG9hZC5lbnZlbG9wZS52ZXJzaW9ufSB8IEV4cGVjdGVkOiAke3ZlcnNpb259IHwgJHtpbnB1dC5zdWJzdHIoMCwgMjUwKX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBSZXNldCBjb21wb25lbnRzIGJlZm9yZSBkZWNvZGluZyB0byBrZWVwIHRoZW0gc3RhdGVsZXNzICovXHJcbiAgICBkYXRhLnJlc2V0KCk7XHJcbiAgICBsYXlvdXQucmVzZXQoKTtcclxuXHJcbiAgICBmb3IgKGxldCBlbnRyeSBvZiBlbmNvZGVkKSB7XHJcbiAgICAgICAgZGF0YS5zdW1tYXJpemUoZW50cnkpO1xyXG4gICAgICAgIHN3aXRjaCAoZW50cnlbMV0pIHtcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5QYWdlOlxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQucGFnZSA9PT0gdW5kZWZpbmVkKSB7IHBheWxvYWQucGFnZSA9IFtdOyB9XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnBhZ2UucHVzaChkYXRhLmRlY29kZShlbnRyeSkgYXMgUGFnZUV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEV2ZW50LlBpbmc6XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5waW5nID09PSB1bmRlZmluZWQpIHsgcGF5bG9hZC5waW5nID0gW107IH1cclxuICAgICAgICAgICAgICAgIHBheWxvYWQucGluZy5wdXNoKGRhdGEuZGVjb2RlKGVudHJ5KSBhcyBQaW5nRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuVGFnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQudGFnID09PSB1bmRlZmluZWQpIHsgcGF5bG9hZC50YWcgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC50YWcucHVzaChkYXRhLmRlY29kZShlbnRyeSkgYXMgVGFnRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuTWV0cmljOlxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQubWV0cmljID09PSB1bmRlZmluZWQpIHsgcGF5bG9hZC5tZXRyaWMgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5tZXRyaWMucHVzaChkYXRhLmRlY29kZShlbnRyeSkgYXMgTWV0cmljRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuVXBsb2FkOlxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQudXBsb2FkID09PSB1bmRlZmluZWQpIHsgcGF5bG9hZC51cGxvYWQgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC51cGxvYWQucHVzaChkYXRhLmRlY29kZShlbnRyeSkgYXMgVXBsb2FkRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuTW91c2VEb3duOlxyXG4gICAgICAgICAgICBjYXNlIEV2ZW50Lk1vdXNlVXA6XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuTW91c2VNb3ZlOlxyXG4gICAgICAgICAgICBjYXNlIEV2ZW50Lk1vdXNlV2hlZWw6XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuQ2xpY2s6XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuRG91YmxlQ2xpY2s6XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuUmlnaHRDbGljazpcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5Ub3VjaFN0YXJ0OlxyXG4gICAgICAgICAgICBjYXNlIEV2ZW50LlRvdWNoQ2FuY2VsOlxyXG4gICAgICAgICAgICBjYXNlIEV2ZW50LlRvdWNoRW5kOlxyXG4gICAgICAgICAgICBjYXNlIEV2ZW50LlRvdWNoTW92ZTpcclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnBvaW50ZXIgPT09IHVuZGVmaW5lZCkgeyBwYXlsb2FkLnBvaW50ZXIgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5wb2ludGVyLnB1c2goaW50ZXJhY3Rpb24uZGVjb2RlKGVudHJ5KSBhcyBQb2ludGVyRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuU2Nyb2xsOlxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuc2Nyb2xsID09PSB1bmRlZmluZWQpIHsgcGF5bG9hZC5zY3JvbGwgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5zY3JvbGwucHVzaChpbnRlcmFjdGlvbi5kZWNvZGUoZW50cnkpIGFzIFNjcm9sbEV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEV2ZW50LlJlc2l6ZTpcclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnJlc2l6ZSA9PT0gdW5kZWZpbmVkKSB7IHBheWxvYWQucmVzaXplID0gW107IH1cclxuICAgICAgICAgICAgICAgIHBheWxvYWQucmVzaXplLnB1c2goaW50ZXJhY3Rpb24uZGVjb2RlKGVudHJ5KSBhcyBSZXNpemVFdmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5TZWxlY3Rpb246XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5zZWxlY3Rpb24gPT09IHVuZGVmaW5lZCkgeyBwYXlsb2FkLnNlbGVjdGlvbiA9IFtdOyB9XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnNlbGVjdGlvbi5wdXNoKGludGVyYWN0aW9uLmRlY29kZShlbnRyeSkgYXMgU2VsZWN0aW9uRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuSW5wdXRDaGFuZ2U6XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC5pbnB1dCA9PT0gdW5kZWZpbmVkKSB7IHBheWxvYWQuaW5wdXQgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5pbnB1dC5wdXNoKGludGVyYWN0aW9uLmRlY29kZShlbnRyeSkgYXMgSW5wdXRDaGFuZ2VFdmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5VbmxvYWQ6XHJcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZC51bmxvYWQgPT09IHVuZGVmaW5lZCkgeyBwYXlsb2FkLnVubG9hZCA9IFtdOyB9XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnVubG9hZC5wdXNoKGludGVyYWN0aW9uLmRlY29kZShlbnRyeSkgYXMgVW5sb2FkRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuVmlzaWJpbGl0eTpcclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnZpc2liaWxpdHkgPT09IHVuZGVmaW5lZCkgeyBwYXlsb2FkLnZpc2liaWxpdHkgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC52aXNpYmlsaXR5LnB1c2goaW50ZXJhY3Rpb24uZGVjb2RlKGVudHJ5KSBhcyBWaXNpYmlsaXR5RXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuVGFyZ2V0OlxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQudGFyZ2V0ID09PSB1bmRlZmluZWQpIHsgcGF5bG9hZC50YXJnZXQgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC50YXJnZXQucHVzaChsYXlvdXQuZGVjb2RlKGVudHJ5KSBhcyBUYXJnZXRFdmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5Cb3hNb2RlbDpcclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmJveG1vZGVsID09PSB1bmRlZmluZWQpIHsgcGF5bG9hZC5ib3htb2RlbCA9IFtdOyB9XHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkLmJveG1vZGVsLnB1c2gobGF5b3V0LmRlY29kZShlbnRyeSkgYXMgQm94TW9kZWxFdmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5EaXNjb3ZlcjpcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5NdXRhdGlvbjpcclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmRvbSA9PT0gdW5kZWZpbmVkKSB7IHBheWxvYWQuZG9tID0gW107IH1cclxuICAgICAgICAgICAgICAgIHBheWxvYWQuZG9tLnB1c2gobGF5b3V0LmRlY29kZShlbnRyeSkgYXMgRG9tRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnQuSGFzaDpcclxuICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLmhhc2ggPT09IHVuZGVmaW5lZCkgeyBwYXlsb2FkLmhhc2ggPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5oYXNoLnB1c2gobGF5b3V0LmRlY29kZShlbnRyeSkgYXMgSGFzaEV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEV2ZW50LkRvY3VtZW50OlxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuZG9jID09PSB1bmRlZmluZWQpIHsgcGF5bG9hZC5kb2MgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5kb2MucHVzaChsYXlvdXQuZGVjb2RlKGVudHJ5KSBhcyBEb2N1bWVudEV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEV2ZW50LlNjcmlwdEVycm9yOlxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuc2NyaXB0ID09PSB1bmRlZmluZWQpIHsgcGF5bG9hZC5zY3JpcHQgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5zY3JpcHQucHVzaChkaWFnbm9zdGljLmRlY29kZShlbnRyeSkgYXMgU2NyaXB0RXJyb3JFdmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBFdmVudC5JbWFnZUVycm9yOlxyXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQuaW1hZ2UgPT09IHVuZGVmaW5lZCkgeyBwYXlsb2FkLmltYWdlID0gW107IH1cclxuICAgICAgICAgICAgICAgIHBheWxvYWQuaW1hZ2UucHVzaChkaWFnbm9zdGljLmRlY29kZShlbnRyeSkgYXMgSW1hZ2VFcnJvckV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgTm8gaGFuZGxlciBmb3IgRXZlbnQ6ICR7SlNPTi5zdHJpbmdpZnkoZW50cnkpfWApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEVucmljaCBkZWNvZGVkIHBheWxvYWQgd2l0aCBkZXJpdmVkIGV2ZW50cyAqL1xyXG4gICAgcGF5bG9hZC5zdW1tYXJ5ID0gZGF0YS5zdW1tYXJ5KCkgYXMgU3VtbWFyeUV2ZW50W107XHJcbiAgICBpZiAocGF5bG9hZC5kb20gJiYgcGF5bG9hZC5kb20ubGVuZ3RoID4gMCkgeyBwYXlsb2FkLmhhc2ggPSBsYXlvdXQuaGFzaCgpIGFzIEhhc2hFdmVudFtdOyB9XHJcbiAgICBpZiAobGF5b3V0LnJlc291cmNlcy5sZW5ndGggPiAwKSB7IHBheWxvYWQucmVzb3VyY2UgPSBsYXlvdXQucmVzb3VyY2UoKSBhcyBSZXNvdXJjZUV2ZW50W107IH1cclxuXHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGh0bWwoZGVjb2RlZDogRGVjb2RlZFBheWxvYWQpOiBzdHJpbmcge1xyXG4gICAgbGV0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICByZW5kZXIoZGVjb2RlZCwgaWZyYW1lKTtcclxuICAgIHJldHVybiBpZnJhbWUuY29udGVudERvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoZGVjb2RlZDogRGVjb2RlZFBheWxvYWQsIGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQsIGhlYWRlcj86IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAvLyBSZXNldCByZW5kZXJpbmcgaWYgd2UgcmVjZWl2ZSBhIG5ldyBwYWdlSWRcclxuICAgIGlmIChwYWdlSWQgIT09IGRlY29kZWQuZW52ZWxvcGUucGFnZUlkKSB7XHJcbiAgICAgICAgcGFnZUlkID0gZGVjb2RlZC5lbnZlbG9wZS5wYWdlSWQ7XHJcbiAgICAgICAgci5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgLy8gUmVwbGF5IGV2ZW50c1xyXG4gICAgbGV0IGV2ZW50czogRGVjb2RlZEV2ZW50W10gPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiBkZWNvZGVkKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGVjb2RlZFtrZXldKSkge1xyXG4gICAgICAgICAgICBldmVudHMgPSBldmVudHMuY29uY2F0KGRlY29kZWRba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cdFx0fVxyXG4gICAgcmVwbGF5KGV2ZW50cy5zb3J0KHNvcnQpLCBpZnJhbWUsIGhlYWRlcik7XHJcbn1cclxuLy8gc2hvdWxkIHJldHVybiBHZW5lcmF0b3I8UHJvbWlzZTxOdW1iZXI+PlxyXG4vLyBidXQgYmVjYXVzZSBvZiBidWcgb24gVFMgMy42KywgaXQgZG9lc24ndCB3b3JrOlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngtc3RhdGUtdHJlZS9pc3N1ZXMvMTM3OFxyXG5leHBvcnQgZnVuY3Rpb24qIHJlcGxheUdlbmVyYXRvcihldmVudHM6IERlY29kZWRFdmVudFtdLCBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50LCBoZWFkZXI/OiBIVE1MRWxlbWVudCk6IGFueXtcclxuXHRsZXQgc3RhcnQgPSBldmVudHNbMF0udGltZTtcclxuXHRmb3IgKGxldCBlbnRyeSBvZiBldmVudHMpIHtcclxuXHRcdFx0aWYgKGVudHJ5LnRpbWUgLSBzdGFydCA+IDE2KSB7IFxyXG5cdFx0XHRcdHN0YXJ0ID0gZW50cnkudGltZTtcclxuXHRcdFx0XHR5aWVsZCB3YWl0RXZlbnQoZW50cnkpOyBcclxuXHRcdFx0fVxyXG5cdFx0XHRyZW5kZXJFdmVudChlbnRyeSwgaWZyYW1lLCBoZWFkZXIpO1xyXG5cdH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd2FpdEV2ZW50IChlOiBEZWNvZGVkRXZlbnQpe1xyXG5cdGF3YWl0IHdhaXQoZS50aW1lKTtcclxuXHRyZXR1cm4gZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcGxheShldmVudHM6IERlY29kZWRFdmVudFtdLCBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50LCBoZWFkZXI/OiBIVE1MRWxlbWVudCk6IFByb21pc2U8dm9pZD4ge1xyXG5cdGxldCBzdGFydCA9IGV2ZW50c1swXS50aW1lO1xyXG5cdGZvciAobGV0IGVudHJ5IG9mIGV2ZW50cykge1xyXG5cdFx0XHRpZiAoZW50cnkudGltZSAtIHN0YXJ0ID4gMTYpIHsgc3RhcnQgPSBhd2FpdCB3YWl0KGVudHJ5LnRpbWUpOyB9XHJcblx0XHRcdHJlbmRlckV2ZW50KGVudHJ5LCBpZnJhbWUsIGhlYWRlcik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRXZlbnQgKGVudHJ5OiBEZWNvZGVkRXZlbnQsIGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQsIGhlYWRlcj86IEhUTUxFbGVtZW50KXtcclxuXHRzd2l0Y2ggKGVudHJ5LmV2ZW50KSB7XHJcblx0XHRjYXNlIEV2ZW50LlBhZ2U6XHJcblx0XHRcdFx0bGV0IHBhZ2VFdmVudCA9IGVudHJ5IGFzIFBhZ2VFdmVudDtcclxuXHRcdFx0XHRyLnBhZ2UocGFnZUV2ZW50LmRhdGEsIGlmcmFtZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEV2ZW50Lk1ldHJpYzpcclxuXHRcdFx0XHRsZXQgbWV0cmljRXZlbnQgPSBlbnRyeSBhcyBNZXRyaWNFdmVudDtcclxuXHRcdFx0XHRpZiAoaGVhZGVyKSB7IHIubWV0cmljKG1ldHJpY0V2ZW50LmRhdGEsIGhlYWRlcik7IH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRXZlbnQuRGlzY292ZXI6XHJcblx0XHRjYXNlIEV2ZW50Lk11dGF0aW9uOlxyXG5cdFx0XHRcdGxldCBkb21FdmVudCA9IGVudHJ5IGFzIERvbUV2ZW50O1xyXG5cdFx0XHRcdHIubWFya3VwKGRvbUV2ZW50LmRhdGEsIGlmcmFtZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEV2ZW50LkJveE1vZGVsOlxyXG5cdFx0XHRcdGxldCBib3hNb2RlbEV2ZW50ID0gZW50cnkgYXMgQm94TW9kZWxFdmVudDtcclxuXHRcdFx0XHRyLmJveG1vZGVsKGJveE1vZGVsRXZlbnQuZGF0YSwgaWZyYW1lKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRXZlbnQuTW91c2VEb3duOlxyXG5cdFx0Y2FzZSBFdmVudC5Nb3VzZVVwOlxyXG5cdFx0Y2FzZSBFdmVudC5Nb3VzZU1vdmU6XHJcblx0XHRjYXNlIEV2ZW50Lk1vdXNlV2hlZWw6XHJcblx0XHRjYXNlIEV2ZW50LkNsaWNrOlxyXG5cdFx0Y2FzZSBFdmVudC5Eb3VibGVDbGljazpcclxuXHRcdGNhc2UgRXZlbnQuUmlnaHRDbGljazpcclxuXHRcdGNhc2UgRXZlbnQuVG91Y2hTdGFydDpcclxuXHRcdGNhc2UgRXZlbnQuVG91Y2hDYW5jZWw6XHJcblx0XHRjYXNlIEV2ZW50LlRvdWNoRW5kOlxyXG5cdFx0Y2FzZSBFdmVudC5Ub3VjaE1vdmU6XHJcblx0XHRcdFx0bGV0IHBvaW50ZXJFdmVudCA9IGVudHJ5IGFzIFBvaW50ZXJFdmVudDtcclxuXHRcdFx0XHRyLnBvaW50ZXIocG9pbnRlckV2ZW50LmV2ZW50LCBwb2ludGVyRXZlbnQuZGF0YSwgaWZyYW1lKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRXZlbnQuSW5wdXRDaGFuZ2U6XHJcblx0XHRcdFx0bGV0IGNoYW5nZUV2ZW50ID0gZW50cnkgYXMgSW5wdXRDaGFuZ2VFdmVudDtcclxuXHRcdFx0XHRyLmNoYW5nZShjaGFuZ2VFdmVudC5kYXRhLCBpZnJhbWUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBFdmVudC5TZWxlY3Rpb246XHJcblx0XHRcdFx0bGV0IHNlbGVjdGlvbkV2ZW50ID0gZW50cnkgYXMgU2VsZWN0aW9uRXZlbnQ7XHJcblx0XHRcdFx0ci5zZWxlY3Rpb24oc2VsZWN0aW9uRXZlbnQuZGF0YSwgaWZyYW1lKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdGNhc2UgRXZlbnQuUmVzaXplOlxyXG5cdFx0XHRcdGxldCByZXNpemVFdmVudCA9IGVudHJ5IGFzIFJlc2l6ZUV2ZW50O1xyXG5cdFx0XHRcdHIucmVzaXplKHJlc2l6ZUV2ZW50LmRhdGEsIGlmcmFtZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIEV2ZW50LlNjcm9sbDpcclxuXHRcdFx0XHRsZXQgc2Nyb2xsRXZlbnQgPSBlbnRyeSBhcyBTY3JvbGxFdmVudDtcclxuXHRcdFx0XHRyLnNjcm9sbChzY3JvbGxFdmVudC5kYXRhLCBpZnJhbWUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gd2FpdCh0aW1lc3RhbXA6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZTogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spOiBudW1iZXIgPT4ge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQocmVzb2x2ZSwgMTAsIHRpbWVzdGFtcCk7XHJcblx0XHRcdFx0cmV0dXJuIHRpbWVzdGFtcDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0KGE6IERlY29kZWRFdmVudCwgYjogRGVjb2RlZEV2ZW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBhLnRpbWUgLSBiLnRpbWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQm9vbGVhbkZsYWcsIEVudmVsb3BlLCBFdmVudCwgTWV0cmljRGF0YSwgUGFnZURhdGEsIFBpbmdEYXRhIH0gZnJvbSBcIi4uL3R5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHsgU3VtbWFyeURhdGEsIFRhZ0RhdGEsIFRva2VuLCBVcGxvYWQsIFVwbG9hZERhdGEgfSBmcm9tIFwiLi4vdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBEYXRhRXZlbnQgfSBmcm9tIFwiLi4vdHlwZXMvZGVjb2RlL2RhdGFcIjtcclxuXHJcbmxldCBzdW1tYXJpZXM6IHsgW2tleTogbnVtYmVyXTogU3VtbWFyeURhdGFbXSB9ID0gbnVsbDtcclxuY29uc3QgU1VNTUFSWV9USFJFU0hPTEQgPSAzMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNldCgpOiB2b2lkIHtcclxuICAgIHN1bW1hcmllcyA9IHt9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlKHRva2VuczogVG9rZW5bXSk6IERhdGFFdmVudCB7XHJcbiAgICBsZXQgdGltZSA9IHRva2Vuc1swXSBhcyBudW1iZXI7XHJcbiAgICBsZXQgZXZlbnQgPSB0b2tlbnNbMV0gYXMgRXZlbnQ7XHJcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgY2FzZSBFdmVudC5QYWdlOlxyXG4gICAgICAgICAgICBsZXQgcGFnZTogUGFnZURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRva2Vuc1syXSBhcyBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICB1YTogdG9rZW5zWzNdIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHVybDogdG9rZW5zWzRdIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHJlZmVycmVyOiB0b2tlbnNbNV0gYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgbGVhbjogdG9rZW5zWzZdIGFzIEJvb2xlYW5GbGFnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4geyB0aW1lLCBldmVudCwgZGF0YTogcGFnZSB9O1xyXG4gICAgICAgIGNhc2UgRXZlbnQuUGluZzpcclxuICAgICAgICAgICAgbGV0IHBpbmc6IFBpbmdEYXRhID0geyBnYXA6IHRva2Vuc1syXSBhcyBudW1iZXIgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGltZSwgZXZlbnQsIGRhdGE6IHBpbmcgfTtcclxuICAgICAgICBjYXNlIEV2ZW50LlRhZzpcclxuICAgICAgICAgICAgbGV0IHRhZzogVGFnRGF0YSA9IHsga2V5OiB0b2tlbnNbMl0gYXMgc3RyaW5nLCB2YWx1ZTogdG9rZW5zWzNdIGFzIHN0cmluZyB9O1xyXG4gICAgICAgICAgICByZXR1cm4geyB0aW1lLCBldmVudCwgZGF0YTogdGFnIH07XHJcbiAgICAgICAgY2FzZSBFdmVudC5VcGxvYWQ6XHJcbiAgICAgICAgICAgIGxldCB1cGxvYWQ6IFVwbG9hZERhdGEgPSB7IHNlcXVlbmNlOiB0b2tlbnNbMl0gYXMgbnVtYmVyLCBhdHRlbXB0czogdG9rZW5zWzNdIGFzIG51bWJlciwgc3RhdHVzOiB0b2tlbnNbNF0gYXMgbnVtYmVyfTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGltZSwgZXZlbnQsIGRhdGE6IHVwbG9hZCB9O1xyXG4gICAgICAgIGNhc2UgRXZlbnQuTWV0cmljOlxyXG4gICAgICAgICAgICBsZXQgaSA9IDI7IC8vIFN0YXJ0IGZyb20gM3JkIGluZGV4IHNpbmNlIGZpcnN0IHR3byBhcmUgdXNlZCBmb3IgdGltZSAmIGV2ZW50XHJcbiAgICAgICAgICAgIGxldCBtZXRyaWNzOiBNZXRyaWNEYXRhID0ge307XHJcbiAgICAgICAgICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbWV0cmljc1t0b2tlbnNbaSsrXSBhcyBudW1iZXJdID0gdG9rZW5zW2krK10gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpbWUsIGV2ZW50LCBkYXRhOiBtZXRyaWNzIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnZlbG9wZSh0b2tlbnM6IFRva2VuW10pOiBFbnZlbG9wZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlcXVlbmNlOiB0b2tlbnNbMF0gYXMgbnVtYmVyLFxyXG4gICAgICAgIHZlcnNpb246IHRva2Vuc1sxXSBhcyBzdHJpbmcsXHJcbiAgICAgICAgcHJvamVjdElkOiB0b2tlbnNbMl0gYXMgc3RyaW5nLFxyXG4gICAgICAgIHVzZXJJZDogdG9rZW5zWzNdIGFzIHN0cmluZyxcclxuICAgICAgICBzZXNzaW9uSWQ6IHRva2Vuc1s0XSBhcyBzdHJpbmcsXHJcbiAgICAgICAgcGFnZUlkOiB0b2tlbnNbNV0gYXMgc3RyaW5nLFxyXG4gICAgICAgIHVwbG9hZDogdG9rZW5zWzZdIGFzIFVwbG9hZCxcclxuICAgICAgICBlbmQ6IHRva2Vuc1s3XSBhcyBCb29sZWFuRmxhZ1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1bW1hcml6ZShlbnRyeTogVG9rZW5bXSk6IHZvaWQge1xyXG4gICAgbGV0IHRpbWUgPSBlbnRyeVswXSBhcyBudW1iZXI7XHJcbiAgICBsZXQgdHlwZSA9IGVudHJ5WzFdIGFzIEV2ZW50O1xyXG4gICAgbGV0IGRhdGE6IFN1bW1hcnlEYXRhID0geyBldmVudDogdHlwZSwgc3RhcnQ6IHRpbWUsIGVuZDogdGltZSB9O1xyXG4gICAgaWYgKCEodHlwZSBpbiBzdW1tYXJpZXMpKSB7IHN1bW1hcmllc1t0eXBlXSA9IFtkYXRhXTsgfVxyXG5cclxuICAgIGxldCBzID0gc3VtbWFyaWVzW3R5cGVdW3N1bW1hcmllc1t0eXBlXS5sZW5ndGggLSAxXTtcclxuICAgIGlmICh0aW1lIC0gcy5lbmQgPCBTVU1NQVJZX1RIUkVTSE9MRCkgeyBzLmVuZCA9IHRpbWU7IH0gZWxzZSB7IHN1bW1hcmllc1t0eXBlXS5wdXNoKGRhdGEpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW1tYXJ5KCk6IERhdGFFdmVudFtdIHtcclxuICAgIGxldCBkYXRhOiBTdW1tYXJ5RGF0YVtdID0gW107XHJcbiAgICBsZXQgdGltZSA9IG51bGw7XHJcbiAgICBmb3IgKGxldCB0eXBlIGluIHN1bW1hcmllcykge1xyXG4gICAgICAgIGlmIChzdW1tYXJpZXNbdHlwZV0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZCBvZiBzdW1tYXJpZXNbdHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aW1lID8gTWF0aC5taW4odGltZSwgZC5zdGFydCkgOiBkLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGEubGVuZ3RoID4gMCA/IFt7IHRpbWUsIGV2ZW50OiBFdmVudC5TdW1tYXJ5LCBkYXRhIH1dIDogbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudCwgVG9rZW4gfSBmcm9tIFwiLi4vdHlwZXMvZGF0YVwiO1xyXG5pbXBvcnQgeyBEaWFnbm9zdGljRXZlbnQgfSBmcm9tIFwiLi4vdHlwZXMvZGVjb2RlL2RpYWdub3N0aWNcIjtcclxuaW1wb3J0IHsgSW1hZ2VFcnJvckRhdGEsIFNjcmlwdEVycm9yRGF0YSB9IGZyb20gXCIuLi90eXBlcy9kaWFnbm9zdGljXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlKHRva2VuczogVG9rZW5bXSk6IERpYWdub3N0aWNFdmVudCB7XHJcbiAgICBsZXQgdGltZSA9IHRva2Vuc1swXSBhcyBudW1iZXI7XHJcbiAgICBsZXQgZXZlbnQgPSB0b2tlbnNbMV0gYXMgRXZlbnQ7XHJcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgY2FzZSBFdmVudC5JbWFnZUVycm9yOlxyXG4gICAgICAgICAgICBsZXQgaW1hZ2VFcnJvcjogSW1hZ2VFcnJvckRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHRva2Vuc1syXSBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRva2Vuc1szXSBhcyBudW1iZXJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGltZSwgZXZlbnQsIGRhdGE6IGltYWdlRXJyb3IgfTtcclxuICAgICAgICBjYXNlIEV2ZW50LlNjcmlwdEVycm9yOlxyXG4gICAgICAgICAgICBsZXQgc2NyaXB0RXJyb3I6IFNjcmlwdEVycm9yRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRva2Vuc1szXSBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBsaW5lOiB0b2tlbnNbNF0gYXMgbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uOiB0b2tlbnNbNV0gYXMgbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgc3RhY2s6IHRva2Vuc1s2XSBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHRva2Vuc1syXSBhcyBzdHJpbmdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGltZSwgZXZlbnQsIGRhdGE6IHNjcmlwdEVycm9yIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnQsIFRva2VuIH0gZnJvbSBcIi4uL3R5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3Rpb25FdmVudCB9IGZyb20gXCIuLi90eXBlcy9kZWNvZGUvaW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IHsgSW5wdXRDaGFuZ2VEYXRhLCBQb2ludGVyRGF0YSwgUmVzaXplRGF0YSwgU2Nyb2xsRGF0YSwgU2VsZWN0aW9uRGF0YSwgVW5sb2FkRGF0YSwgVmlzaWJpbGl0eURhdGEgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJhY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGUodG9rZW5zOiBUb2tlbltdKTogSW50ZXJhY3Rpb25FdmVudCAge1xyXG4gICAgbGV0IHRpbWUgPSB0b2tlbnNbMF0gYXMgbnVtYmVyO1xyXG4gICAgbGV0IGV2ZW50ID0gdG9rZW5zWzFdIGFzIEV2ZW50O1xyXG4gICAgc3dpdGNoIChldmVudCkge1xyXG4gICAgICAgIGNhc2UgRXZlbnQuTW91c2VEb3duOlxyXG4gICAgICAgIGNhc2UgRXZlbnQuTW91c2VVcDpcclxuICAgICAgICBjYXNlIEV2ZW50Lk1vdXNlTW92ZTpcclxuICAgICAgICBjYXNlIEV2ZW50Lk1vdXNlV2hlZWw6XHJcbiAgICAgICAgY2FzZSBFdmVudC5DbGljazpcclxuICAgICAgICBjYXNlIEV2ZW50LkRvdWJsZUNsaWNrOlxyXG4gICAgICAgIGNhc2UgRXZlbnQuUmlnaHRDbGljazpcclxuICAgICAgICBjYXNlIEV2ZW50LlRvdWNoU3RhcnQ6XHJcbiAgICAgICAgY2FzZSBFdmVudC5Ub3VjaENhbmNlbDpcclxuICAgICAgICBjYXNlIEV2ZW50LlRvdWNoRW5kOlxyXG4gICAgICAgIGNhc2UgRXZlbnQuVG91Y2hNb3ZlOlxyXG4gICAgICAgICAgICBsZXQgcG9pbnRlckRhdGE6IFBvaW50ZXJEYXRhID0geyB0YXJnZXQ6IHRva2Vuc1syXSBhcyBudW1iZXIsIHg6IHRva2Vuc1szXSBhcyBudW1iZXIsIHk6IHRva2Vuc1s0XSBhcyBudW1iZXIgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdGltZSwgZXZlbnQsIGRhdGE6IHBvaW50ZXJEYXRhIH07XHJcbiAgICAgICAgY2FzZSBFdmVudC5SZXNpemU6XHJcbiAgICAgICAgICAgIGxldCByZXNpemVEYXRhOiBSZXNpemVEYXRhID0geyB3aWR0aDogdG9rZW5zWzJdIGFzIG51bWJlciwgaGVpZ2h0OiB0b2tlbnNbM10gYXMgbnVtYmVyIH07XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpbWUsIGV2ZW50LCBkYXRhOiByZXNpemVEYXRhIH07XHJcbiAgICAgICAgY2FzZSBFdmVudC5JbnB1dENoYW5nZTpcclxuICAgICAgICAgICAgbGV0IGNoYW5nZURhdGE6IElucHV0Q2hhbmdlRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdG9rZW5zWzJdIGFzIG51bWJlcixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0b2tlbnNbM10gYXMgc3RyaW5nXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpbWUsIGV2ZW50LCBkYXRhOiBjaGFuZ2VEYXRhIH07XHJcbiAgICAgICAgY2FzZSBFdmVudC5TZWxlY3Rpb246XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3Rpb25EYXRhOiBTZWxlY3Rpb25EYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHRva2Vuc1syXSBhcyBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBzdGFydE9mZnNldDogdG9rZW5zWzNdIGFzIG51bWJlcixcclxuICAgICAgICAgICAgICAgIGVuZDogdG9rZW5zWzRdIGFzIG51bWJlcixcclxuICAgICAgICAgICAgICAgIGVuZE9mZnNldDogdG9rZW5zWzVdIGFzIG51bWJlclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4geyB0aW1lLCBldmVudCwgZGF0YTogc2VsZWN0aW9uRGF0YSB9O1xyXG4gICAgICAgIGNhc2UgRXZlbnQuU2Nyb2xsOlxyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsRGF0YTogU2Nyb2xsRGF0YSA9IHsgdGFyZ2V0OiB0b2tlbnNbMl0gYXMgbnVtYmVyLCB4OiB0b2tlbnNbM10gYXMgbnVtYmVyLCB5OiB0b2tlbnNbNF0gYXMgbnVtYmVyIH07XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpbWUsIGV2ZW50LCBkYXRhOiBzY3JvbGxEYXRhIH07XHJcbiAgICAgICAgY2FzZSBFdmVudC5WaXNpYmlsaXR5OlxyXG4gICAgICAgICAgICBsZXQgdmlzaWJsZURhdGE6IFZpc2liaWxpdHlEYXRhID0geyB2aXNpYmxlOiB0b2tlbnNbMl0gYXMgc3RyaW5nIH07XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpbWUsIGV2ZW50LCBkYXRhOiB2aXNpYmxlRGF0YSB9O1xyXG4gICAgICAgIGNhc2UgRXZlbnQuVW5sb2FkOlxyXG4gICAgICAgICAgICBsZXQgdW5sb2FkRGF0YTogVW5sb2FkRGF0YSA9IHsgbmFtZTogdG9rZW5zWzJdIGFzIHN0cmluZyB9O1xyXG4gICAgICAgICAgICByZXR1cm4geyB0aW1lLCBldmVudCwgZGF0YTogdW5sb2FkRGF0YSB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBnZW5lcmF0ZUhhc2ggZnJvbSBcIi4uL3NyYy9kYXRhL2hhc2hcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCIuLi9zcmMvZGF0YS90b2tlblwiO1xyXG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NyYy9sYXlvdXQvc2VsZWN0b3JcIjtcclxuaW1wb3J0IHsgRXZlbnQsIFRva2VuIH0gZnJvbSBcIi4uL3R5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHsgRG9tRGF0YSwgTGF5b3V0RXZlbnQgfSBmcm9tIFwiLi4vdHlwZXMvZGVjb2RlL2xheW91dFwiO1xyXG5pbXBvcnQgeyBBdHRyaWJ1dGVzLCBCb3hNb2RlbERhdGEsIERvY3VtZW50RGF0YSwgSGFzaERhdGEsIFJlc291cmNlRGF0YSwgVGFyZ2V0RGF0YSB9IGZyb20gXCIuLi90eXBlcy9sYXlvdXRcIjtcclxuXHJcbmxldCBwbGFjZWhvbGRlckltYWdlID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFFQUFBQUJDQVFBQUFDMUhBd0NBQUFBQzBsRVFWUjRuR05pT0FNQUFOVUF6NW4rVGxVQUFBQUFTVVZPUks1Q1lJST1cIjtcclxuZXhwb3J0IGxldCBoYXNoZXM6IHsgW2tleTogbnVtYmVyXTogSGFzaERhdGEgfSA9IHt9O1xyXG5leHBvcnQgbGV0IHJlc291cmNlczogUmVzb3VyY2VEYXRhW107XHJcbmxldCBsYXN0VGltZTogbnVtYmVyO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgaGFzaGVzID0ge307XHJcbiAgICByZXNvdXJjZXMgPSBbXTtcclxuICAgIGxhc3RUaW1lID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZSh0b2tlbnM6IFRva2VuW10pOiBMYXlvdXRFdmVudCB7XHJcbiAgICBsZXQgdGltZSA9IGxhc3RUaW1lID0gdG9rZW5zWzBdIGFzIG51bWJlcjtcclxuICAgIGxldCBldmVudCA9IHRva2Vuc1sxXSBhcyBFdmVudDtcclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgY2FzZSBFdmVudC5Eb2N1bWVudDpcclxuICAgICAgICAgICAgbGV0IGRvY3VtZW50RGF0YTogRG9jdW1lbnREYXRhID0geyB3aWR0aDogdG9rZW5zWzJdIGFzIG51bWJlciwgaGVpZ2h0OiB0b2tlbnNbM10gYXMgbnVtYmVyIH07XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpbWUsIGV2ZW50LCBkYXRhOiBkb2N1bWVudERhdGEgfTtcclxuICAgICAgICBjYXNlIEV2ZW50LkJveE1vZGVsOlxyXG4gICAgICAgICAgICBsZXQgYm94bW9kZWxEYXRhOiBCb3hNb2RlbERhdGFbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IHRva2Vucy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJveG1vZGVsOiBCb3hNb2RlbERhdGEgPSB7IGlkOiB0b2tlbnNbaV0gYXMgbnVtYmVyLCBib3g6IHRva2Vuc1tpICsgMV0gYXMgbnVtYmVyW10gfTtcclxuICAgICAgICAgICAgICAgIGJveG1vZGVsRGF0YS5wdXNoKGJveG1vZGVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4geyB0aW1lLCBldmVudCwgZGF0YTogYm94bW9kZWxEYXRhIH07XHJcbiAgICAgICAgY2FzZSBFdmVudC5UYXJnZXQ6XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXREYXRhOiBUYXJnZXREYXRhW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCB0b2tlbnMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQ6IFRhcmdldERhdGEgPSB7IGlkOiB0b2tlbnNbaV0gYXMgbnVtYmVyLCBoYXNoOiB0b2tlbnNbaSArIDFdIGFzIHN0cmluZywgYm94OiB0b2tlbnNbaSArIDJdIGFzIG51bWJlcltdIH07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXREYXRhLnB1c2godGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4geyB0aW1lLCBldmVudCwgZGF0YTogdGFyZ2V0RGF0YSB9O1xyXG4gICAgICAgIGNhc2UgRXZlbnQuSGFzaDpcclxuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZSA9IDA7XHJcbiAgICAgICAgICAgIGxldCBoYXNoRGF0YTogSGFzaERhdGFbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IHRva2Vucy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gKHRva2Vuc1tpXSBhcyBudW1iZXIpICsgcmVmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdG9rZW5zW2kgKyAxXTtcclxuICAgICAgICAgICAgICAgIGxldCBjczogSGFzaERhdGEgPSB7IGlkLCBoYXNoOiB0eXBlb2YodG9rZW4pID09PSBcIm9iamVjdFwiID8gdG9rZW5zW3Rva2VuWzBdXSA6IHRva2VuIH07XHJcbiAgICAgICAgICAgICAgICBoYXNoRGF0YS5wdXNoKGNzKTtcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSA9IGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7IHRpbWUsIGV2ZW50LCBkYXRhOiBoYXNoRGF0YSB9O1xyXG4gICAgICAgIGNhc2UgRXZlbnQuRGlzY292ZXI6XHJcbiAgICAgICAgY2FzZSBFdmVudC5NdXRhdGlvbjpcclxuICAgICAgICAgICAgbGV0IGxhc3RUeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHRhZ0luZGV4ID0gMDtcclxuICAgICAgICAgICAgbGV0IGRvbURhdGE6IERvbURhdGFbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gdG9rZW5zW2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSB0eXBlb2YodG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSAhPT0gbGFzdFR5cGUgJiYgbGFzdFR5cGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbURhdGEucHVzaChwcm9jZXNzKG5vZGUsIHRhZ0luZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wdXNoKHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnB1c2godG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdWJ0b2tlbiA9IHRva2VuWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3VidHlwZSA9IHR5cGVvZihzdWJ0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc3VidHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlzID0gcmVzb2x2ZSh0b2tlbiBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRva2Vucy5sZW5ndGggPiBzdWJ0b2tlbiA/IHRva2Vuc1tzdWJ0b2tlbl0gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhc3RUeXBlID0gdHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBQcm9jZXNzIGxhc3Qgbm9kZVxyXG4gICAgICAgICAgICBkb21EYXRhLnB1c2gocHJvY2Vzcyhub2RlLCB0YWdJbmRleCkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgdGltZSwgZXZlbnQsIGRhdGE6IGRvbURhdGEgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc2goKTogTGF5b3V0RXZlbnRbXSB7XHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaWQgaW4gaGFzaGVzKSB7IGlmIChoYXNoZXNbaWRdKSB7IGRhdGEucHVzaChoYXNoZXNbaWRdKTsgfSB9XHJcbiAgICByZXR1cm4gZGF0YS5sZW5ndGggPiAwID8gW3sgdGltZTogbGFzdFRpbWUsIGV2ZW50OiBFdmVudC5IYXNoLCBkYXRhIH1dIDogbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc291cmNlKCk6IExheW91dEV2ZW50W10ge1xyXG4gICAgcmV0dXJuIHJlc291cmNlcy5sZW5ndGggPiAwID8gW3sgdGltZTogbGFzdFRpbWUsIGV2ZW50OiBFdmVudC5SZXNvdXJjZSwgZGF0YTogcmVzb3VyY2VzIH1dIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzcyhub2RlOiBhbnlbXSB8IG51bWJlcltdLCB0YWdJbmRleDogbnVtYmVyKTogRG9tRGF0YSB7XHJcbiAgICBsZXQgW3RhZywgcG9zaXRpb25dOiBzdHJpbmdbXSAgPSBub2RlW3RhZ0luZGV4XSA/IG5vZGVbdGFnSW5kZXhdLnNwbGl0KFwiflwiKSA6IFtub2RlW3RhZ0luZGV4XV07XHJcbiAgICBsZXQgb3V0cHV0OiBEb21EYXRhID0ge1xyXG4gICAgICAgIGlkOiBub2RlWzBdLFxyXG4gICAgICAgIHBhcmVudDogdGFnSW5kZXggPiAxID8gbm9kZVsxXSA6IG51bGwsXHJcbiAgICAgICAgbmV4dDogdGFnSW5kZXggPiAyID8gbm9kZVsyXSA6IG51bGwsXHJcbiAgICAgICAgdGFnLFxyXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbiA/IHBhcnNlSW50KHBvc2l0aW9uLCAxMCkgOiBudWxsXHJcbiAgICB9O1xyXG4gICAgbGV0IGhhc0F0dHJpYnV0ZSA9IGZhbHNlO1xyXG4gICAgbGV0IGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXMgPSB7fTtcclxuICAgIGxldCB2YWx1ZSA9IG51bGw7XHJcbiAgICBsZXQgcHJlZml4ID0gb3V0cHV0LnBhcmVudCBpbiBoYXNoZXMgPyBgJHtoYXNoZXNbb3V0cHV0LnBhcmVudF0uc2VsZWN0b3J9PmAgOiAob3V0cHV0LnBhcmVudCA/IFwiXCIgOiBudWxsKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gdGFnSW5kZXggKyAxOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCB0b2tlbiA9IG5vZGVbaV0gYXMgc3RyaW5nO1xyXG4gICAgICAgIGxldCBrZXlJbmRleCA9IHRva2VuLmluZGV4T2YoXCI9XCIpO1xyXG4gICAgICAgIGxldCBsYXN0Q2hhciA9IHRva2VuW3Rva2VuLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChpID09PSAobm9kZS5sZW5ndGggLSAxKSAmJiBvdXRwdXQudGFnID09PSBcIlNUWUxFXCIpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0b2tlbjtcclxuICAgICAgICB9IGVsc2UgaWYgKGxhc3RDaGFyID09PSBcIj5cIiAmJiBrZXlJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcHJlZml4ID0gdG9rZW47XHJcbiAgICAgICAgfSBlbHNlIGlmIChvdXRwdXQudGFnICE9PSBcIipUXCIgJiYga2V5SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIGhhc0F0dHJpYnV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBrID0gdG9rZW4uc3Vic3RyKDAsIGtleUluZGV4KTtcclxuICAgICAgICAgICAgbGV0IHYgPSB0b2tlbi5zdWJzdHIoa2V5SW5kZXggKyAxKTtcclxuICAgICAgICAgICAgc3dpdGNoIChrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3JjXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IHYubGVuZ3RoID09PSAwID8gcGxhY2Vob2xkZXJJbWFnZSA6IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba10gPSB2O1xyXG4gICAgICAgIH0gZWxzZSBpZiAob3V0cHV0LnRhZyA9PT0gXCIqVFwiKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzID0gc2VsZWN0b3Iob3V0cHV0LnRhZywgcHJlZml4LCBhdHRyaWJ1dGVzLCBvdXRwdXQucG9zaXRpb24pO1xyXG4gICAgaWYgKHMubGVuZ3RoID4gMCkgeyBoYXNoZXNbb3V0cHV0LmlkXSA9IHsgaWQ6IG91dHB1dC5pZCwgaGFzaDogZ2VuZXJhdGVIYXNoKHMpLCBzZWxlY3RvcjogcyB9OyB9XHJcblxyXG4gICAgZ2V0UmVzb3VyY2Uob3V0cHV0LnRhZywgYXR0cmlidXRlcyk7XHJcbiAgICBpZiAoaGFzQXR0cmlidXRlKSB7IG91dHB1dC5hdHRyaWJ1dGVzID0gYXR0cmlidXRlczsgfVxyXG4gICAgaWYgKHZhbHVlKSB7IG91dHB1dC52YWx1ZSA9IHZhbHVlOyB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzb3VyY2UodGFnOiBzdHJpbmcsIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXMpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGFnKSB7XHJcbiAgICAgICAgY2FzZSBcIkxJTktcIjpcclxuICAgICAgICAgICAgaWYgKFwiaHJlZlwiIGluIGF0dHJpYnV0ZXMgJiYgXCJyZWxcIiBpbiBhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXNbXCJyZWxcIl0gPT09IFwic3R5bGVzaGVldFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZXMucHVzaCh7IHRhZywgdXJsOiBhdHRyaWJ1dGVzW1wiaHJlZlwiXX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50LCBNZXRyaWMsIE1ldHJpY0RhdGEsIFBhZ2VEYXRhIH0gZnJvbSBcIi4uL3R5cGVzL2RhdGFcIjtcclxuaW1wb3J0IHsgRG9tRGF0YSB9IGZyb20gXCIuLi90eXBlcy9kZWNvZGUvbGF5b3V0XCI7XHJcbmltcG9ydCB7IElucHV0Q2hhbmdlRGF0YSwgUG9pbnRlckRhdGEsIFJlc2l6ZURhdGEsIFNjcm9sbERhdGEsIFNlbGVjdGlvbkRhdGEgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJhY3Rpb25cIjtcclxuaW1wb3J0IHsgQm94TW9kZWxEYXRhLCBDb25zdGFudCB9IGZyb20gXCIuLi90eXBlcy9sYXlvdXRcIjtcclxuXHJcbmxldCBub2RlcyA9IHt9O1xyXG5sZXQgYm94bW9kZWxzID0ge307XHJcbmxldCBtZXRyaWNzOiBNZXRyaWNEYXRhID0gbnVsbDtcclxubGV0IGxlYW4gPSBmYWxzZTtcclxuY29uc3QgTUVUUklDX01BUCA9IHt9O1xyXG5NRVRSSUNfTUFQW01ldHJpYy5Ob2Rlc10gPSB7IG5hbWU6IFwiTm9kZSBDb3VudFwiLCB1bml0OiBcIlwifTtcclxuTUVUUklDX01BUFtNZXRyaWMuTGF5b3V0Qnl0ZXNdID0geyBuYW1lOiBcIkxheW91dCBCeXRlc1wiLCB1bml0OiBcIktCXCJ9O1xyXG5NRVRSSUNfTUFQW01ldHJpYy5JbnRlcmFjdGlvbkJ5dGVzXSA9IHsgbmFtZTogXCJJbnRlcmFjdGlvbiBCeXRlc1wiLCB1bml0OiBcIktCXCJ9O1xyXG5NRVRSSUNfTUFQW01ldHJpYy5OZXR3b3JrQnl0ZXNdID0geyBuYW1lOiBcIk5ldHdvcmsgQnl0ZXNcIiwgdW5pdDogXCJLQlwifTtcclxuTUVUUklDX01BUFtNZXRyaWMuRGlhZ25vc3RpY0J5dGVzXSA9IHsgbmFtZTogXCJEaWFnbm9zdGljIEJ5dGVzXCIsIHVuaXQ6IFwiS0JcIn07XHJcbk1FVFJJQ19NQVBbTWV0cmljLk11dGF0aW9uc10gPSB7IG5hbWU6IFwiTXV0YXRpb24gQ291bnRcIiwgdW5pdDogXCJcIn07XHJcbk1FVFJJQ19NQVBbTWV0cmljLkludGVyYWN0aW9uc10gPSB7IG5hbWU6IFwiSW50ZXJhY3Rpb24gQ291bnRcIiwgdW5pdDogXCJcIn07XHJcbk1FVFJJQ19NQVBbTWV0cmljLkNsaWNrc10gPSB7IG5hbWU6IFwiQ2xpY2sgQ291bnRcIiwgdW5pdDogXCJcIn07XHJcbk1FVFJJQ19NQVBbTWV0cmljLlNlbGVjdGlvbnNdID0geyBuYW1lOiBcIlNlbGVjdGlvbiBDb3VudFwiLCB1bml0OiBcIlwifTtcclxuTUVUUklDX01BUFtNZXRyaWMuU2NyaXB0RXJyb3JzXSA9IHsgbmFtZTogXCJTY3JpcHQgRXJyb3JzXCIsIHVuaXQ6IFwiXCJ9O1xyXG5NRVRSSUNfTUFQW01ldHJpYy5JbWFnZUVycm9yc10gPSB7IG5hbWU6IFwiSW1hZ2UgRXJyb3JzXCIsIHVuaXQ6IFwiXCJ9O1xyXG5NRVRSSUNfTUFQW01ldHJpYy5EaXNjb3ZlclRpbWVdID0geyBuYW1lOiBcIkRpc2NvdmVyIFRpbWVcIiwgdW5pdDogXCJtc1wifTtcclxuTUVUUklDX01BUFtNZXRyaWMuTXV0YXRpb25UaW1lXSA9IHsgbmFtZTogXCJNdXRhdGlvbiBUaW1lXCIsIHVuaXQ6IFwibXNcIn07XHJcbk1FVFJJQ19NQVBbTWV0cmljLkJveE1vZGVsVGltZV0gPSB7IG5hbWU6IFwiQm94IE1vZGVsIFRpbWVcIiwgdW5pdDogXCJtc1wifTtcclxuTUVUUklDX01BUFtNZXRyaWMuU3RhcnRUaW1lXSA9IHsgbmFtZTogXCJTdGFydCBUaW1lXCIsIHVuaXQ6IFwic1wifTtcclxuTUVUUklDX01BUFtNZXRyaWMuQWN0aXZlVGltZV0gPSB7IG5hbWU6IFwiQWN0aXZlIFRpbWVcIiwgdW5pdDogXCJtc1wifTtcclxuTUVUUklDX01BUFtNZXRyaWMuRW5kVGltZV0gPSB7IG5hbWU6IFwiRW5kIFRpbWVcIiwgdW5pdDogXCJzXCJ9O1xyXG5NRVRSSUNfTUFQW01ldHJpYy5WaWV3cG9ydFdpZHRoXSA9IHsgbmFtZTogXCJWaWV3cG9ydCBXaWR0aFwiLCB1bml0OiBcInB4XCJ9O1xyXG5NRVRSSUNfTUFQW01ldHJpYy5WaWV3cG9ydEhlaWdodF0gPSB7IG5hbWU6IFwiVmlld3BvcnQgSGVpZ2h0XCIsIHVuaXQ6IFwicHhcIn07XHJcbk1FVFJJQ19NQVBbTWV0cmljLkRvY3VtZW50V2lkdGhdID0geyBuYW1lOiBcIkRvY3VtZW50IFdpZHRoXCIsIHVuaXQ6IFwicHhcIn07XHJcbk1FVFJJQ19NQVBbTWV0cmljLkRvY3VtZW50SGVpZ2h0XSA9IHsgbmFtZTogXCJEb2N1bWVudCBIZWlnaHRcIiwgdW5pdDogXCJweFwifTtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbmxldCBwb2ludGVySWNvbiA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFZQ0FZQUFBRDZTOTEyQUFBQUJHZEJUVUVBQUxHT2ZQdFJrd0FBQUNCalNGSk5BQUI2SlFBQWdJTUFBUG4vQUFDQTZBQUFkVEFBQU9wZ0FBQTZsd0FBRjIrWHFablVBQUFDYVVsRVFWUjRuR0w4ZjU4QkhZZ0FzVDhRMndHeEJCQXpRY1gvQWZGcklENEN4T3VBK0JXS0xvWC9ZQW9nZ0JqUkRIUUQ0bmdnbGdSaVBneXJJT0F6RUw4RTRsVlFnMUVNQkFnZ0ZpU0ZZVUFjQThSU09BeUNBVjRvVGdWaVRpQmVpaXdKRUVBdzcxZ1JhUmd5RUFYaUtDQjJSQllFQ0NDUWdjSU1FRytTWWhnTWlBTnhFaER6d3dRQUFnaGtvQU1RSzVOaEdBd29BTEUxakFNUVFDQURRVTdtcE1CQVpxaWp3QUFnZ0VBR3FnQXhPd1VHc2tITkFBT0FBQUlaeUV0SWg0SU5nM2JmSEhENnhBVUVZQXlBQUFJWitJdVFnVTlmTUxDWGR6REl6VjNKSUloRHlROFlBeUNBUUFhQ1V2OC9mQVp5c0RQOCsvT1hnVEc3amtGaHdSb01RMEY2bjhNNEFBRUVNdkFLc2czNHdNOWZERXdnUTFkdFJTUVRJUGdOeEZkaEhJQUFBaG00QVlnL0VtTWdDSHo3enNDVVZNYWd1SG9iM0ZDUVl6YkQ1QUVDQ0dUZ0pTRGVDYldKS1BEMUd3TnpTam1ENHRaOURGeGd2UXIvYjhQa0FBSUlsdlZXQS9GdVVnejk5SVdCT1R5WFFjRStuT0VPc2poQUFDR1hObkpBSEFuRTlrQXNocXlJVjV2QjRNczNjQUxHQmtBbGo5Ly8vLzlQZ1RnQUFjU0VKUEVJaUR1QmVCWVFQMkNBaE90M0JzTEpDcFNmTnpBeU1wcURPQUFCaEY0ZXdoM0ZBTW1mMmtBc3lxbkJVUERqSjhIY2RCdm9TaldBQUdJRUVnVFVNVEFBYmYvQXdJQ1NWR0NnRDRoUGdKUUE4V2VnV2RzQkFvZ0ZpeUpDNEMwUWd4STNLTGo0Z0lhc1JwWUVDQ0FHa0FzSllTQUF1UkRFQUtVRVF3Wkl6Z0R4dndDeENySmFnQUFpMWtBUUFZcEZFU2gvQmxRTWhKdVIxUUlFRUxFR2xnT3hIQkxmbEFHU2gwR2M2MERNQnBNRENDQ2lETVJoeVhvR1NKVWFEZ3BQbURoQWdBRUFONVVnazBiTVlOSUFBQUFBU1VWT1JLNUNZSUk9XCI7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbmxldCBjbGlja0ljb24gPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBWUNBWUFBQUQ2UzkxMkFBQUFCR2RCVFVFQUFMR09mUHRSa3dBQUFDQmpTRkpOQUFCNkpRQUFnSU1BQVBuL0FBQ0E2QUFBZFRBQUFPcGdBQUE2bHdBQUYyK1hxWm5VQUFBRHZrbEVRVlI0bkdMOC8vOC9BekpnWkdRUUFWTCtRR3dIeEJKQXpBU1YrZ2ZFcjRINENCQ3ZBMnA3eFlBRkFBUVFJN0tCUU1QY2dGUThFRXNDTVI4MkRVRHdHWWhmQXZFcW9OWjE2SklBQVFRM0VHaFlHSkNLQVdJcEhBYWhBNUJybHdDMUwwVVdCQWdnSnFoaFZpUWFCZ0tpUUJ3RjFPdUlMQWdRUUV4QUFXRUdpRGVSREpzRUZPTTFBRnBsek1DZ3JjbkFjSW9UaDZIaVFKd0VOSU1mSmdBUVFDQVhPZ0N4TWtMTmFxQmt2Z0lEZzhaM0JvYUM1d3dNejlrWUdLSVZHUmcrTWpGZ0IwQzFETll3RGtBQWdSU0JuSXprZ25VQ0RBeXN3SUJkZjQrQm9mOFpBMFBIWXdhR08wRDUvVHc0REdTR09nb01BQUlJWktBS0VMTWo1RDhBRlhEK0JVYnlYd2hmOVNjdzVRQXQrTW1JdzBBMnFCbGdBQkJBSUFONWNTZ2tCUWpBR0FBQnhBTEV2MUJkaUE0WW9iZ0ZtRFpQY2pNd1pMeUIrSklMbU5BbC8wQVYvWUNwQmdnZ2tJR2c5TVROZ01nUldBQUwwTXV2V1JrWUpnTnp6blJnelA0QXFtVUhHcGovQWhnRm54Z1lsRDR5TUtpQlZRSUVFTWlRSzhnMllBSlEySlVBWS92RlpRYUdtZmVCdmdPNnFoVVlVVTVBUTdxQVNjMVRnNEZCMzUrUmtSR1VYUmtBQWdqa3dnME1ETWVkR0JoMkFXM20rUXR4Q1F1U2daeEFsOWgrZ2JBdHZ6RXdKQU45VkFYTXh6YytRbHdhK0pTQm9SUVVaTDFBdkJFZ2dFQ0I0d2RNSnFzWUdINnpROElLbEJXbGdPRjYvU293cG9HR3ZRS2FEZ29xS1NEeENXakFBMkNzNmdGOTlBWElmZ0xFR3N1QStrQUp1d3FZalJrQkFnams1UzVnUVFMMDB2SEpEQXduTGdGejFHOWdQQ0VsRWJFL0VNTkFBR1NCSGpSNGVJQmlHdHVCaktWUVY0QUJRQUNCREFTRzV0L2REQXdXUFF3TVprRGJKbHlBcE1HL1VFTjM4VUJjOWh2SVB3Q01QRkR5L0FtTTZVblhnTjZlRHl3Y25pS0hPRUFBZ1F3OEJzUkJRR2V6QVNVN2dmbTlqWUdoOGh4UUl6RDJHSURaN3lZd2pYd0h1dVlQTUlIZkFwcjJIeGdoYnhjQlkvZ2lBNFBtRTZUVUFnWUFBUVJpbEFMeEFTQ2VCWXdwYjJBNGJHQmtUTm5MQU1tZjJzRFlCV2JONzNjWkdEaUFaZUJ4WUJscDF3MDBDQmc1REJsSVhwVUg0bWNnQmtBQU1VREx3MlNvNUNRUUh4a0RRUndRQ3pGQUVuOG9BeVJWZy9KK0lWUU01Q2hndm1mWURGSVBFRURJR3VkQ0RRMUhNOUNGQVpJOWdja0pYQzJBZ2dtVWZ3T2g4bXBRZlpVZ1BrQUFJV3NFYVRvT3hGK0IyQVRkcGJnd0VLUkNEYlFCOFFFQ0NGMVNCNGhCa1hFZWlQbUpOQkNVYkVEWmx3ZkVCd2dnNUN3QlVuQUZHREhwUUNZdytUQnNBYkkzTVVCcU8yeEZGeWo5Q0VMRGRSbFFMemczQVFRUUxsdWpvQUg5SDZvUkcvNEhsVDhFeENvd3ZRQUJCZ0JPS0hEOCtVZ0V2Z0FBQUFCSlJVNUVya0pnZ2c9PVwiO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG5sZXQgdG91Y2hJY29uID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVlDQVlBQUFENlM5MTJBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBRkVtbFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNMdnU3OGlJR2xrUFNKWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FpUHo0Z1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTSmhaRzlpWlRwdWN6cHRaWFJoTHlJZ2VEcDRiWEIwYXowaVFXUnZZbVVnV0UxUUlFTnZjbVVnTlM0MkxXTXhORElnTnprdU1UWXdPVEkwTENBeU1ERTNMekEzTHpFekxUQXhPakEyT2pNNUlDQWdJQ0FnSUNBaVBpQThjbVJtT2xKRVJpQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlQaUE4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBpSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Ykc1ek9tUmpQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012Wld4bGJXVnVkSE12TVM0eEx5SWdlRzFzYm5NNmNHaHZkRzl6YUc5d1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM0JvYjNSdmMyaHZjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUkZkblE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVVYyWlc1MEl5SWdlRzF3T2tOeVpXRjBiM0pVYjI5c1BTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ1EwTWdLRmRwYm1SdmQzTXBJaUI0YlhBNlEzSmxZWFJsUkdGMFpUMGlNakF4T1Mwd09TMHhNVlF3TmpvMU16b3pNQzB3Tnpvd01DSWdlRzF3T2sxdlpHbG1lVVJoZEdVOUlqSXdNVGt0TURrdE1URlVNRFk2TlRRNk5EQXRNRGM2TURBaUlIaHRjRHBOWlhSaFpHRjBZVVJoZEdVOUlqSXdNVGt0TURrdE1URlVNRFk2TlRRNk5EQXRNRGM2TURBaUlHUmpPbVp2Y20xaGREMGlhVzFoWjJVdmNHNW5JaUJ3YUc5MGIzTm9iM0E2UTI5c2IzSk5iMlJsUFNJeklpQndhRzkwYjNOb2IzQTZTVU5EVUhKdlptbHNaVDBpYzFKSFFpQkpSVU0yTVRrMk5pMHlMakVpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2T0RabU5URTVaR1F0TjJFM01TMWhPVFF5TFRnd05Ua3RNamMzT1RKak5UTTFZVE5sSWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pnMlpqVXhPV1JrTFRkaE56RXRZVGswTWkwNE1EVTVMVEkzTnpreVl6VXpOV0V6WlNJZ2VHMXdUVTA2VDNKcFoybHVZV3hFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pnMlpqVXhPV1JrTFRkaE56RXRZVGswTWkwNE1EVTVMVEkzTnpreVl6VXpOV0V6WlNJK0lEeDRiWEJOVFRwSWFYTjBiM0o1UGlBOGNtUm1PbE5sY1Q0Z1BISmtaanBzYVNCemRFVjJkRHBoWTNScGIyNDlJbU55WldGMFpXUWlJSE4wUlhaME9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZPRFptTlRFNVpHUXROMkUzTVMxaE9UUXlMVGd3TlRrdE1qYzNPVEpqTlRNMVlUTmxJaUJ6ZEVWMmREcDNhR1Z1UFNJeU1ERTVMVEE1TFRFeFZEQTJPalV6T2pNd0xUQTNPakF3SWlCemRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBTSkJaRzlpWlNCUWFHOTBiM05vYjNBZ1EwTWdLRmRwYm1SdmQzTXBJaTgrSUR3dmNtUm1PbE5sY1Q0Z1BDOTRiWEJOVFRwSWFYTjBiM0o1UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGdxRjNNY0FBQU9nU1VSQlZEaU5sWlZkYkJSVkZNZC9kN283cGVuUzdjNmdoVDYwSlJMQ1J4OXMwSkFJVXZhakp0Q2tWWXcxSVZhS1VyL3dwUWsrcU84WVJWOGFFdzNRMUVqcEF3a05sa1pORE1FWXhVRG9oOWdTSDdDTnJYUXB0YnRzSGVsdXU3dkhoNWt1UTkwbDhrOXVjdWVjZTM3M3pKbDc3aWdSd2ExWVhLMEJtb0Zkd0ZwQWMxeFpZQmI0RWVnekFuS2JQRkp1WUN5dW5nRU9BT3VBc253QndOL0FESERHQ0VoZlFXQXNybHFBbDRES0FxQ1ZtZ1Y2aklDY2RoczFCL2JVUThJQUhnSDJ4K0lxZUI4d0ZsY205bXZtWU9Gd3Eya2F2c2ROZzIybXNXVnpmMzlWU1FGb0JmQktMSzc4N2d4M0E0OHRHNDRjQ2ZwSGhrL1Z3S1lGbis5UUZLTDZ3VFo5L1owN212WWZuSzBhWUljYkdBUnlHWHpSL1dnNWVPWHE0T2o0SDVNbnAzZlZOMHpCalpKakh6M3RLd0FzY3BMS0FUY0F4Y3NHa1VRUmxHUU1ZekVEME5nNG1nSk5MRXRYQllDNnc4Z0JWeGRZK0RBcWR3TVhIN1JTS1FCRlQwOTBYWFZWZStYUVVMbCs3VnFaUGpXbGUxekxrc3NURC9aNUt1VmVSK1NSUjJEV2ExbmRheHNpbmdwSWFsQ2M5ZnRmdS9YVzRhSDVVT2hHSWhLK2wrR29lNGVWc2l4ZG1lYUI2RnhzNXRkSXc3TVRVSjZ1cmo0MEJhRkVJbkc4OG9PalZ6YzFSSkxOU3FubVplQzVzMmZYWjJ1M3RsZnMzTkcyQm1hOWR1SzJBb0dGN09HM3IxZ0FIUjBYNzVwbTArelE4TW5iWDM5ejVTWUVFM1YxcmRkQnBvRlA3T0pBRTNqUHdGS3gvU2hBNWVMNHhLMHh2eitialVhOW5sU3FpSnFhWkRxUjBMVEJ3UW85RklvbUxVdHBZMk9HdG4zN1hLOXA0QWZlRXhHbGdOK2dxUGpFaWFyekhtK20vbURid21ZUXhpZGlvMzUvTnZ1QTc1VUZMZ0NmbWdadkF1K0xpTktBalpENWJ0L3pFeDgzTlUzMnRyUnNHNEd5VERxdEtZRE96anBmSXFGcFMwdW9ycTR0cFprTXBGTDhGUTYzWHI5ODJldzJBbkxUdllzR1hBTDJtUWE2RVpBUFAvdjgyNlAxdTU4Y1NxZlZQTERRLzFWdGtXVjUwdW0wU2cwTTFHWkVtSXBHVjMwNU1uenFsNzE3NXY1MG5aYmM1QjNnZStDNFVxcFJSTTcxOWFrTDJQMjVkWEp5VlhCK1h2Kzl0RFE5YytrbnZXeHcwRHkyZDgvY1hlQU5wK0FBMWNBMEFNNTkrS3JqN0JRUjNBTjRHVEN3Mi9NRjdONHRBVG9jbXdjWUI4NkxDTzdBTGdmNjRncGdCTHM5dmRpL0JRMjdmNTl6L0J1ZHVIZFhBbGNEUHdQL0FFK3N6TFRRQU5vZDRNNzdnSTZ6RnBnSGhnSC8vd1NleG01Zm40amdibkJFWkZRcDlUclFDd3dvcGZxZDg1YnY2c29BQWFldXZTSmk1VDVLbmwzM080VVdKekRmeURyK0g0QU55N0gvQXZNMXo3L0ZRdi9vQUFBQUFFbEZUa1N1UW1DQ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgbm9kZXMgPSB7fTtcclxuICAgIGJveG1vZGVscyA9IHt9O1xyXG4gICAgbWV0cmljcyA9IHt9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWV0cmljKGRhdGE6IE1ldHJpY0RhdGEsIGhlYWRlcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGxldCBodG1sID0gW107XHJcblxyXG4gICAgLy8gQ29weSBvdmVyIG1ldHJpY3MgZm9yIGZ1dHVyZSByZWZlcmVuY2VcclxuICAgIGZvciAobGV0IG0gaW4gZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhW21dKSB7IG1ldHJpY3NbbV0gPSBkYXRhW21dOyB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBlbnRyeSBpbiBtZXRyaWNzKSB7XHJcbiAgICAgICAgaWYgKG1ldHJpY3NbZW50cnldKSB7XHJcbiAgICAgICAgICAgIGxldCBtID0gbWV0cmljc1tlbnRyeV07XHJcbiAgICAgICAgICAgIGxldCBtYXAgPSBNRVRSSUNfTUFQW2VudHJ5XTtcclxuICAgICAgICAgICAgaHRtbC5wdXNoKGA8bGk+PGgyPiR7dmFsdWUobSwgbWFwLnVuaXQpfTxzcGFuPiR7bWFwLnVuaXR9PC9zcGFuPjwvaDI+JHttYXAubmFtZX08L2xpPmApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gYDx1bD4ke2h0bWwuam9pbihcIlwiKX08L3VsPmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbHVlKGlucHV0OiBudW1iZXIsIHVuaXQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICBjYXNlIFwiS0JcIjogcmV0dXJuIE1hdGgucm91bmQoaW5wdXQgLyAxMDI0KTtcclxuICAgICAgICBjYXNlIFwic1wiOiByZXR1cm4gTWF0aC5yb3VuZChpbnB1dCAvIDEwMDApO1xyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBpbnB1dDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2UoZGF0YTogUGFnZURhdGEsIGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGxlYW4gPSAhIWRhdGEubGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJveG1vZGVsKGRhdGE6IEJveE1vZGVsRGF0YVtdLCBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50KTogdm9pZCB7XHJcbiAgICBsZXQgZG9jID0gaWZyYW1lLmNvbnRlbnREb2N1bWVudDtcclxuICAgIGZvciAobGV0IGJtIG9mIGRhdGEpIHtcclxuICAgICAgICBsZXQgZWwgPSBlbGVtZW50KGJtLmlkKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBpZiAobGVhbikge1xyXG4gICAgICAgICAgICBsZXQgYm94ID0gZWwgPyBlbCA6IGRvYy5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICAgICAgICBib3guc3R5bGUubGVmdCA9IGJtLmJveFswXSArIFwicHhcIjtcclxuICAgICAgICAgICAgYm94LnN0eWxlLnRvcCA9IGJtLmJveFsxXSArIFwicHhcIjtcclxuICAgICAgICAgICAgYm94LnN0eWxlLndpZHRoID0gYm0uYm94WzJdICsgXCJweFwiO1xyXG4gICAgICAgICAgICBib3guc3R5bGUuaGVpZ2h0ID0gYm0uYm94WzNdICsgXCJweFwiO1xyXG4gICAgICAgICAgICBib3guc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgIGJveC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcclxuICAgICAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoYm94KTtcclxuICAgICAgICAgICAgbm9kZXNbYm0uaWRdID0gYm94O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWwgJiYgZWwudGFnTmFtZSA9PT0gXCJJRlJBTUVcIikge1xyXG4gICAgICAgICAgICBsZXQgcyA9IGdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSBibS5ib3hbMl07XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBibS5ib3hbM107XHJcbiAgICAgICAgICAgIGlmIChzW1wiYm94U2l6aW5nXCJdICE9PSBcImJvcmRlci1ib3hcIikge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggLT0gKGNzcyhzLCBcInBhZGRpbmdMZWZ0XCIpICsgY3NzKHMsIFwicGFkZGluZ1JpZ2h0XCIpICsgY3NzKHMsIFwiYm9yZGVyTGVmdFdpZHRoXCIpICsgY3NzKHMsIFwiYm9yZGVyUmlnaHRXaWR0aFwiKSk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgLT0gKGNzcyhzLCBcInBhZGRpbmdUb3BcIikgKyBjc3MocywgXCJwYWRkaW5nQm90dG9tXCIpICsgY3NzKHMsIFwiYm9yZGVyVG9wV2lkdGhcIikgKyBjc3MocywgXCJib3JkZXJCb3R0b21XaWR0aFwiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWwuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICBpZiAoZWwudGFnTmFtZSA9PT0gXCJJRlJBTUVcIikgeyBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIm1hcm9vblwiOyB9XHJcbiAgICAgICAgICAgIGJveG1vZGVsc1tibS5pZF0gPSBibTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNzcyhzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgZmllbGQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gcGFyc2VJbnQoc3R5bGVbZmllbGRdLCAxMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXJrdXAoZGF0YTogRG9tRGF0YVtdLCBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50KTogdm9pZCB7XHJcbiAgICBsZXQgZG9jID0gaWZyYW1lLmNvbnRlbnREb2N1bWVudDtcclxuICAgIGZvciAobGV0IG5vZGUgb2YgZGF0YSkge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBlbGVtZW50KG5vZGUucGFyZW50KTtcclxuICAgICAgICBsZXQgbmV4dCA9IGVsZW1lbnQobm9kZS5uZXh0KTtcclxuICAgICAgICBzd2l0Y2ggKG5vZGUudGFnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIqRFwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBYTUxTZXJpYWxpemVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLm9wZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2Mud3JpdGUobmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50VHlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXR0cmlidXRlc1tcIm5hbWVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmF0dHJpYnV0ZXNbXCJwdWJsaWNJZFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXR0cmlidXRlc1tcInN5c3RlbUlkXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2MuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiKlRcIjpcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0RWxlbWVudCA9IGVsZW1lbnQobm9kZS5pZCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudCA9IHRleHRFbGVtZW50ID8gdGV4dEVsZW1lbnQgOiBkb2MuY3JlYXRlVGV4dE5vZGUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC5ub2RlVmFsdWUgPSB1bm1hc2sobm9kZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnQobm9kZSwgcGFyZW50LCB0ZXh0RWxlbWVudCwgbmV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkhUTUxcIjpcclxuICAgICAgICAgICAgICAgIGxldCBkb2NFbGVtZW50ID0gZWxlbWVudChub2RlLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb2NFbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RvYyA9IGRvYy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jRWxlbWVudCA9IG5ld0RvYy5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSBkb2MuaW1wb3J0Tm9kZShkb2NFbGVtZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2MucmVwbGFjZUNoaWxkKHAsIGRvYy5kb2N1bWVudEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2MuaGVhZCkgeyBkb2MuaGVhZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvYy5oZWFkKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2MuYm9keSkgeyBkb2MuYm9keS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvYy5ib2R5KTsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhkb2MuZG9jdW1lbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50LCBub2RlLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgbm9kZXNbbm9kZS5pZF0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJIRUFEXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVhZEVsZW1lbnQgPSBlbGVtZW50KG5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRFbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZEVsZW1lbnQgPSBkb2MuY3JlYXRlRWxlbWVudChub2RlLnRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhc2UgPSBkb2MuY3JlYXRlRWxlbWVudChcImJhc2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZS5ocmVmID0gbm9kZS5hdHRyaWJ1dGVzW1wiKkJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGUuYXR0cmlidXRlc1tcIipCXCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhoZWFkRWxlbWVudCBhcyBIVE1MRWxlbWVudCwgbm9kZS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgIGluc2VydChub2RlLCBwYXJlbnQsIGhlYWRFbGVtZW50LCBuZXh0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiU1RZTEVcIjpcclxuICAgICAgICAgICAgICAgIGxldCBzdHlsZUVsZW1lbnQgPSBlbGVtZW50KG5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVFbGVtZW50ID0gc3R5bGVFbGVtZW50ID8gc3R5bGVFbGVtZW50IDogZG9jLmNyZWF0ZUVsZW1lbnQobm9kZS50YWcpO1xyXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQsIG5vZGUuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBub2RlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0KG5vZGUsIHBhcmVudCwgc3R5bGVFbGVtZW50LCBuZXh0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbGV0IGRvbUVsZW1lbnQgPSBlbGVtZW50KG5vZGUuaWQpO1xyXG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQgPyBkb21FbGVtZW50IDogY3JlYXRlRWxlbWVudChkb2MsIG5vZGUudGFnLCBwYXJlbnQgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLmF0dHJpYnV0ZXMpIHsgbm9kZS5hdHRyaWJ1dGVzID0ge307IH1cclxuICAgICAgICAgICAgICAgIG5vZGUuYXR0cmlidXRlc1tcImRhdGEtaWRcIl0gPSBgJHtub2RlLmlkfWA7XHJcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKGRvbUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQsIG5vZGUuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCBpbiBib3htb2RlbHMpIHsgYm94bW9kZWwoW2JveG1vZGVsc1tub2RlLmlkXV0sIGlmcmFtZSk7IH1cclxuICAgICAgICAgICAgICAgIGluc2VydChub2RlLCBwYXJlbnQsIGRvbUVsZW1lbnQsIG5leHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGRvYzogRG9jdW1lbnQsIHRhZzogc3RyaW5nLCBwYXJlbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xyXG4gICAgaWYgKHRhZyAmJiB0YWcuaW5kZXhPZihDb25zdGFudC5TVkdfUFJFRklYKSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBkb2MuY3JlYXRlRWxlbWVudE5TKENvbnN0YW50LlNWR19OQU1FU1BBQ0UgYXMgc3RyaW5nLCB0YWcuc3Vic3RyKENvbnN0YW50LlNWR19QUkVGSVgubGVuZ3RoKSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZG9jLmNyZWF0ZUVsZW1lbnQodGFnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWxlbWVudChub2RlSWQ6IG51bWJlcik6IE5vZGUge1xyXG4gICAgcmV0dXJuIG5vZGVJZCAhPT0gbnVsbCAmJiBub2RlSWQgPiAwICYmIG5vZGVJZCBpbiBub2RlcyA/IG5vZGVzW25vZGVJZF0gOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnQoZGF0YTogRG9tRGF0YSwgcGFyZW50OiBOb2RlLCBub2RlOiBOb2RlLCBuZXh0OiBOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAocGFyZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgbmV4dCA9IG5leHQgJiYgbmV4dC5wYXJlbnRFbGVtZW50ICE9PSBwYXJlbnQgPyBudWxsIDogbmV4dDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vZGU6IFwiICsgbm9kZSArIFwiIHwgUGFyZW50OiBcIiArIHBhcmVudCArIFwiIHwgRGF0YTogXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkV4Y2VwdGlvbiBlbmNvdW50ZXJlZCB3aGlsZSBpbnNlcnRpbmcgbm9kZTogXCIgKyBleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChwYXJlbnQgPT09IG51bGwgJiYgbm9kZS5wYXJlbnRFbGVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgbm9kZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gICAgICAgIG5vZGUgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgbm9kZXNbZGF0YS5pZF0gPSBub2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKG5vZGU6IEhUTUxFbGVtZW50LCBhdHRyaWJ1dGVzOiBvYmplY3QpOiB2b2lkIHtcclxuICAgIC8vIEZpcnN0IHJlbW92ZSBhbGwgaXRzIGV4aXN0aW5nIGF0dHJpYnV0ZXNcclxuICAgIGlmIChub2RlLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAobm9kZS5hdHRyaWJ1dGVzICYmIGxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobm9kZS5hdHRyaWJ1dGVzWzBdLm5hbWUpO1xyXG4gICAgICAgICAgICBsZW5ndGgtLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIG5ldyBhdHRyaWJ1dGVzXHJcbiAgICBmb3IgKGxldCBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSB1bm1hc2soYXR0cmlidXRlc1thdHRyaWJ1dGVdKTtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUuaW5kZXhPZihcInhsaW5rOlwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIGF0dHJpYnV0ZSwgdik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJOb2RlOiBcIiArIG5vZGUgKyBcIiB8IFwiICsgSlNPTi5zdHJpbmdpZnkoYXR0cmlidXRlcykpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRXhjZXB0aW9uIGVuY291bnRlcmVkIHdoaWxlIGFkZGluZyBhdHRyaWJ1dGVzOiBcIiArIGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbChkYXRhOiBTY3JvbGxEYXRhLCBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50KTogdm9pZCB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZ2V0Tm9kZShkYXRhLnRhcmdldCk7XHJcbiAgICBpZiAodGFyZ2V0KSB7IHRhcmdldC5zY3JvbGxUbyhkYXRhLngsIGRhdGEueSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2l6ZShkYXRhOiBSZXNpemVEYXRhLCBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZnJhbWUucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XHJcbiAgICBsZXQgbWFyZ2luID0gMTA7XHJcbiAgICBsZXQgcHggPSBcInB4XCI7XHJcbiAgICBsZXQgd2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgbGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG4gICAgbGV0IGF2YWlsYWJsZVdpZHRoID0gKGlmcmFtZS5jb250ZW50V2luZG93LmlubmVyV2lkdGggLSAoMiAqIG1hcmdpbikpO1xyXG4gICAgbGV0IHNjYWxlV2lkdGggPSBNYXRoLm1pbihhdmFpbGFibGVXaWR0aCAvIHdpZHRoLCAxKTtcclxuICAgIGxldCBzY2FsZUhlaWdodCA9IE1hdGgubWluKChpZnJhbWUuY29udGVudFdpbmRvdy5pbm5lckhlaWdodCAtICgxNiAqIG1hcmdpbikpIC8gaGVpZ2h0LCAxKTtcclxuICAgIGxldCBzY2FsZSA9IE1hdGgubWluKHNjYWxlV2lkdGgsIHNjYWxlSGVpZ2h0KTtcclxuICAgIGlmcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgIGlmcmFtZS5zdHlsZS53aWR0aCA9IHdpZHRoICsgcHg7XHJcbiAgICBpZnJhbWUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgcHg7XHJcbiAgICBpZnJhbWUuc3R5bGUubGVmdCA9ICgoYXZhaWxhYmxlV2lkdGggLSAod2lkdGggKiBzY2FsZSkpIC8gMikgKyBweDtcclxuICAgIGlmcmFtZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIjAgMCAwXCI7XHJcbiAgICBpZnJhbWUuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZShcIiArIHNjYWxlICsgXCIpXCI7XHJcbiAgICBpZnJhbWUuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2NjY2NjY1wiO1xyXG4gICAgaWZyYW1lLnN0eWxlLm1hcmdpbiA9IG1hcmdpbiArIHB4O1xyXG4gICAgaWZyYW1lLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZShkYXRhOiBJbnB1dENoYW5nZURhdGEsIGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGxldCBlbCA9IGVsZW1lbnQoZGF0YS50YXJnZXQpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZiAoZWwpIHsgZWwudmFsdWUgPSBkYXRhLnZhbHVlOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3Rpb24oZGF0YTogU2VsZWN0aW9uRGF0YSwgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbGV0IGRvYyA9IGlmcmFtZS5jb250ZW50RG9jdW1lbnQ7XHJcbiAgICBsZXQgcyA9IGRvYy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHMuc2V0QmFzZUFuZEV4dGVudChlbGVtZW50KGRhdGEuc3RhcnQpLCBkYXRhLnN0YXJ0T2Zmc2V0LCBlbGVtZW50KGRhdGEuZW5kKSwgZGF0YS5lbmRPZmZzZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9pbnRlcihldmVudDogRXZlbnQsIGRhdGE6IFBvaW50ZXJEYXRhLCBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50KTogdm9pZCB7XHJcbiAgICBsZXQgZG9jID0gaWZyYW1lLmNvbnRlbnREb2N1bWVudDtcclxuICAgIGxldCBwID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiY2xhcml0eS1wb2ludGVyXCIpO1xyXG4gICAgbGV0IHBvaW50ZXJXaWR0aCA9IDIwO1xyXG4gICAgbGV0IHBvaW50ZXJIZWlnaHQgPSAyNDtcclxuXHJcbiAgICBpZiAocCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHAgPSBkb2MuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxuICAgICAgICBwLmlkID0gXCJjbGFyaXR5LXBvaW50ZXJcIjtcclxuICAgICAgICBwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIHAuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgcC5zdHlsZS53aWR0aCA9IHBvaW50ZXJXaWR0aCArIFwicHhcIjtcclxuICAgICAgICBwLnN0eWxlLmhlaWdodCA9IHBvaW50ZXJIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICB9XHJcblx0XHRjb25zb2xlLmxvZygnNjk2OSBqc3g6IFBvaW50ZXIgJywgcCk7XHJcblx0XHRjb25zb2xlLmxvZygnNjk2OSBqc3g6IG1vdmUgJywgZGF0YS54LCBkYXRhLnkpO1xyXG4gICAgcC5zdHlsZS5sZWZ0ID0gKGRhdGEueCAtIDgpICsgXCJweFwiO1xyXG4gICAgcC5zdHlsZS50b3AgPSAoZGF0YS55IC0gOCkgKyBcInB4XCI7XHJcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgY2FzZSBFdmVudC5DbGljazpcclxuICAgICAgICBjYXNlIEV2ZW50LlJpZ2h0Q2xpY2s6XHJcbiAgICAgICAgY2FzZSBFdmVudC5Eb3VibGVDbGljazpcclxuICAgICAgICAgICAgcC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2NsaWNrSWNvbn0pIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcmA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRXZlbnQuVG91Y2hNb3ZlOlxyXG4gICAgICAgIGNhc2UgRXZlbnQuVG91Y2hTdGFydDpcclxuICAgICAgICBjYXNlIEV2ZW50LlRvdWNoRW5kOlxyXG4gICAgICAgIGNhc2UgRXZlbnQuVG91Y2hDYW5jZWw6XHJcbiAgICAgICAgICAgIHAuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHt0b3VjaEljb259KSBuby1yZXBlYXQgbGVmdCBjZW50ZXJgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBwLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7cG9pbnRlckljb259KSBuby1yZXBlYXQgbGVmdCBjZW50ZXJgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Tm9kZShpZDogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIGlkIGluIG5vZGVzID8gbm9kZXNbaWRdIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5tYXNrKHY6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAodiAmJiB2Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgcGFydHMgPSB2LnNwbGl0KFwiKlwiKTtcclxuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBcInhcIjtcclxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAzICYmIHBhcnRzWzBdID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0Q291bnQgPSBwYXJzZUludChwYXJ0c1sxXSwgMzYpO1xyXG4gICAgICAgICAgICBsZXQgd29yZENvdW50ID0gcGFyc2VJbnQocGFydHNbMl0sIDM2KTtcclxuICAgICAgICAgICAgaWYgKGlzRmluaXRlKHRleHRDb3VudCkgJiYgaXNGaW5pdGUod29yZENvdW50KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdvcmRDb3VudCA+IDAgJiYgdGV4dENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3b3JkQ291bnQgPT09IDAgJiYgdGV4dENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYgPSBBcnJheSh0ZXh0Q291bnQgKyAxKS5qb2luKHBsYWNlaG9sZGVyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod29yZENvdW50ID4gMCAmJiB0ZXh0Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF2ZyA9IE1hdGguZmxvb3IodGV4dENvdW50IC8gd29yZENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodi5sZW5ndGggPCB0ZXh0Q291bnQgKyB3b3JkQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhcCA9IE1hdGgubWluKGF2ZywgdGV4dENvdW50ICsgd29yZENvdW50IC0gdi5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ICs9IEFycmF5KGdhcCArIDEpLmpvaW4ocGxhY2Vob2xkZXIpICsgXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gQXJyYXkodGV4dENvdW50ICsgd29yZENvdW50ICsgMSkuam9pbihwbGFjZWhvbGRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdjtcclxufVxyXG4iLCJsZXQgdmVyc2lvbiA9IFwiMS4wLjAtYjEwXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHZlcnNpb247XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOiBuby1iaXR3aXNlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gQ29kZSBpbnNwaXJlZCBmcm9tIEMjIEdldEhhc2hDb2RlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L3JlZmVyZW5jZXNvdXJjZS9ibG9iL21hc3Rlci9tc2NvcmxpYi9zeXN0ZW0vc3RyaW5nLmNzXHJcbiAgICBsZXQgaGFzaCA9IDA7XHJcbiAgICBsZXQgaGFzaE9uZSA9IDUzODE7XHJcbiAgICBsZXQgaGFzaFR3byA9IGhhc2hPbmU7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAyKSB7XHJcbiAgICAgICAgbGV0IGNoYXJPbmUgPSBpbnB1dC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGhhc2hPbmUgPSAoKGhhc2hPbmUgPDwgNSkgKyBoYXNoT25lKSBeIGNoYXJPbmU7XHJcbiAgICAgICAgaWYgKGkgKyAxIDwgaW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyVHdvID0gaW5wdXQuY2hhckNvZGVBdChpICsgMSk7XHJcbiAgICAgICAgICAgIGhhc2hUd28gPSAoKGhhc2hUd28gPDwgNSkgKyBoYXNoVHdvKSBeIGNoYXJUd287XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gUmVwbGFjZSB0aGUgbWFnaWMgbnVtYmVyIGZyb20gQyMgaW1wbGVtZW50YXRpb24gKDE1NjYwODM5NDEpIHdpdGggYSBzbWFsbGVyIHByaW1lIG51bWJlciAoMTE1NzkpXHJcbiAgICAvLyBUaGlzIGVuc3VyZXMgd2UgZG9uJ3QgaGl0IGludGVnZXIgb3ZlcmZsb3cgYW5kIHByZXZlbnQgY29sbGlzaW9uc1xyXG4gICAgaGFzaCA9IE1hdGguYWJzKGhhc2hPbmUgKyAoaGFzaFR3byAqIDExNTc5KSk7XHJcbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygzNikuc2xpY2UoLTYpOyAvLyBMaW1pdCBoYXNoZXMgdG8gNiBjaGFyYWN0ZXJzXHJcbn1cclxuIiwibGV0IHRva2Vuczogc3RyaW5nW10gPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVjayhoYXNoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGxldCBvdXRwdXQgPSB0b2tlbnMuaW5kZXhPZihoYXNoKSA+PSAwO1xyXG4gICAgcmV0dXJuIG91dHB1dDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmUoaGFzaDogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIGNoZWNrKGhhc2gpID8gdG9rZW5zW2hhc2hdIDogW107XHJcbn1cclxuIiwiaW1wb3J0IHsgQXR0cmlidXRlcywgQ29uc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXMvbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0YWc6IHN0cmluZywgcHJlZml4OiBzdHJpbmcsIGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZXMsIHBvc2l0aW9uOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgbGV0IGVtcHR5ID0gXCJcIjtcclxuICAgIGxldCBzdWZmaXggPSBwb3NpdGlvbiA/IGA6bnRoLW9mLXR5cGUoJHtwb3NpdGlvbn0pYCA6IGVtcHR5O1xyXG4gICAgc3dpdGNoICh0YWcpIHtcclxuICAgICAgICBjYXNlIFwiU1RZTEVcIjpcclxuICAgICAgICBjYXNlIFwiVElUTEVcIjpcclxuICAgICAgICBjYXNlIFwiTElOS1wiOlxyXG4gICAgICAgIGNhc2UgXCJNRVRBXCI6XHJcbiAgICAgICAgY2FzZSBcIipUXCI6XHJcbiAgICAgICAgY2FzZSBcIipEXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBlbXB0eTtcclxuICAgICAgICBjYXNlIFwiSFRNTFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCJIVE1MXCI7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaWYgKHByZWZpeCA9PT0gbnVsbCkgeyByZXR1cm4gZW1wdHk7IH1cclxuICAgICAgICAgICAgdGFnID0gdGFnLmluZGV4T2YoQ29uc3RhbnQuU1ZHX1BSRUZJWCkgPT09IDAgPyB0YWcuc3Vic3RyKENvbnN0YW50LlNWR19QUkVGSVgubGVuZ3RoKSA6IHRhZztcclxuICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gYCR7cHJlZml4fSR7dGFnfSR7c3VmZml4fWA7XHJcbiAgICAgICAgICAgIGlmIChDb25zdGFudC5JRF9BVFRSSUJVVEUgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBgKiR7YXR0cmlidXRlc1tDb25zdGFudC5JRF9BVFRSSUJVVEVdfWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJpZFwiIGluIGF0dHJpYnV0ZXMgJiYgYXR0cmlidXRlc1tcImlkXCJdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gYCR7dGFnfSMke2F0dHJpYnV0ZXMuaWR9YDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcImNsYXNzXCIgaW4gYXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzW1wiY2xhc3NcIl0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBgJHtwcmVmaXh9JHt0YWd9LiR7YXR0cmlidXRlcy5jbGFzcy50cmltKCkuc3BsaXQoL1xccysvKS5qb2luKFwiLlwiKX0ke3N1ZmZpeH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBjbGFyaXR5IGZyb20gXCIuLi9kZWNvZGUvY2xhcml0eVwiO1xyXG5cclxuLy8gV2hlbiBidWlsdCB3aXRoIHdlYnBhY2sgZm9yIHByb2QsIGNvbXBpbGVkIGNsYXJpdHktanMgYnVuZGxlIGRvZXNuJ3QgZXhwb3NlIHRoZSBtb2R1bGUgYW55d2hlcmUgb24gdGhlIHBhZ2UuXHJcbi8vIFNpbmNlIHdlIG5lZWQgY2xhcml0eS1qcyB0byBiZSBhdmFpbGFibGUgZ2xvYmFsbHksIHdlIGNhbiBjcmVhdGUgYSB3cmFwcGVyIG1vZHVsZSB0aGF0IHdvdWxkIGFzc2lnbiBjbGFyaXR5IHRvIHdpbmRvdy5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICh3aW5kb3cgYXMgYW55KS5jbGFyaXR5RGVjb2RlciA9IGNsYXJpdHk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==