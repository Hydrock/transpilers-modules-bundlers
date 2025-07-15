"use strict";
// ignore attempts to require any types of assets
(() => {
    // simply ignore css files, it wont cause any damage
    const ignoreExtensions = ['.css'];
    // warn about other requires, because it may lead to unexpected behaviour in production
    const warnExtensions = [
        '.gif',
        '.jpeg',
        '.jpg',
        '.ico',
        '.png',
        '.xml',
        '.svg',
        '.mp4',
        '.webm',
        '.ogv',
        '.aac',
        '.mp3',
        '.wav',
        '.ogg',
    ];
    const noop = () => { };
    const warn = (_, path) => console.warn(`\u001B[0;31mWARNING!
    Trying to require ${path} in node.js.
    Non-js files is ignored when required in node_modules\u001B[0m`);
    ignoreExtensions.forEach((e) => {
        require.extensions[e] = noop;
    });
    warnExtensions.forEach((e) => {
        require.extensions[e] = warn;
    });
})();

(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./node_modules/@module-federation/error-codes/dist/index.cjs.js": (function (__unused_webpack_module, exports) {

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var RUNTIME_001 = 'RUNTIME-001';
var RUNTIME_002 = 'RUNTIME-002';
var RUNTIME_003 = 'RUNTIME-003';
var RUNTIME_004 = 'RUNTIME-004';
var RUNTIME_005 = 'RUNTIME-005';
var RUNTIME_006 = 'RUNTIME-006';
var RUNTIME_007 = 'RUNTIME-007';
var RUNTIME_008 = 'RUNTIME-008';
var TYPE_001 = 'TYPE-001';
var BUILD_001 = 'BUILD-001';
var BUILD_002 = 'BUILD-002';
var getDocsUrl = function(errorCode) {
    var type = errorCode.split('-')[0].toLowerCase();
    return "View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/".concat(type, "/").concat(errorCode);
};
var getShortErrorMsg = function(errorCode, errorDescMap, args, originalErrorMsg) {
    var msg = [
        "".concat([
            errorDescMap[errorCode]
        ], " #").concat(errorCode)
    ];
    args && msg.push("args: ".concat(JSON.stringify(args)));
    msg.push(getDocsUrl(errorCode));
    originalErrorMsg && msg.push("Original Error Message:\n ".concat(originalErrorMsg));
    return msg.join('\n');
};
function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var _obj;
var runtimeDescMap = (_obj = {}, _define_property(_obj, RUNTIME_001, 'Failed to get remoteEntry exports.'), _define_property(_obj, RUNTIME_002, 'The remote entry interface does not contain "init"'), _define_property(_obj, RUNTIME_003, 'Failed to get manifest.'), _define_property(_obj, RUNTIME_004, 'Failed to locate remote.'), _define_property(_obj, RUNTIME_005, 'Invalid loadShareSync function call from bundler runtime'), _define_property(_obj, RUNTIME_006, 'Invalid loadShareSync function call from runtime'), _define_property(_obj, RUNTIME_007, 'Failed to get remote snapshot.'), _define_property(_obj, RUNTIME_008, 'Failed to load script resources.'), _obj);
var typeDescMap = _define_property({}, TYPE_001, 'Failed to generate type declaration. Execute the below cmd to reproduce and fix the error.');
var _obj1;
var buildDescMap = (_obj1 = {}, _define_property(_obj1, BUILD_001, 'Failed to find expose module.'), _define_property(_obj1, BUILD_002, 'PublicPath is required in prod mode.'), _obj1);
var errorDescMap = _extends({}, runtimeDescMap, typeDescMap, buildDescMap);
exports.BUILD_001 = BUILD_001;
exports.BUILD_002 = BUILD_002;
exports.RUNTIME_001 = RUNTIME_001;
exports.RUNTIME_002 = RUNTIME_002;
exports.RUNTIME_003 = RUNTIME_003;
exports.RUNTIME_004 = RUNTIME_004;
exports.RUNTIME_005 = RUNTIME_005;
exports.RUNTIME_006 = RUNTIME_006;
exports.RUNTIME_007 = RUNTIME_007;
exports.RUNTIME_008 = RUNTIME_008;
exports.TYPE_001 = TYPE_001;
exports.buildDescMap = buildDescMap;
exports.errorDescMap = errorDescMap;
exports.getShortErrorMsg = getShortErrorMsg;
exports.runtimeDescMap = runtimeDescMap;
exports.typeDescMap = typeDescMap;


}),
"@hapi/hapi": (function (module) {
module.exports = require("@hapi/hapi");

}),
"./node_modules/@module-federation/runtime-core/dist/index.cjs.cjs": (function (__unused_webpack_module, exports, __webpack_require__) {

function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var polyfills = __webpack_require__(/*! ./polyfills.cjs.cjs */ "./node_modules/@module-federation/runtime-core/dist/polyfills.cjs.cjs");
var sdk = __webpack_require__(/*! @module-federation/sdk */ "./node_modules/@module-federation/sdk/dist/index.cjs.cjs");
var errorCodes = __webpack_require__(/*! @module-federation/error-codes */ "./node_modules/@module-federation/error-codes/dist/index.cjs.js");
var LOG_CATEGORY = '[ Federation Runtime ]';
// FIXME: pre-bundle ?
var logger = sdk.createLogger(LOG_CATEGORY);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function assert(condition, msg) {
    if (!condition) {
        error(msg);
    }
}
function error(msg) {
    if (_instanceof(msg, Error)) {
        msg.message = "".concat(LOG_CATEGORY, ": ").concat(msg.message);
        throw msg;
    }
    throw new Error("".concat(LOG_CATEGORY, ": ").concat(msg));
}
function warn(msg) {
    if (_instanceof(msg, Error)) {
        msg.message = "".concat(LOG_CATEGORY, ": ").concat(msg.message);
        logger.warn(msg);
    } else {
        logger.warn(msg);
    }
}
function addUniqueItem(arr, item) {
    if (arr.findIndex(function(name) {
        return name === item;
    }) === -1) {
        arr.push(item);
    }
    return arr;
}
function getFMId(remoteInfo) {
    if ('version' in remoteInfo && remoteInfo.version) {
        return "".concat(remoteInfo.name, ":").concat(remoteInfo.version);
    } else if ('entry' in remoteInfo && remoteInfo.entry) {
        return "".concat(remoteInfo.name, ":").concat(remoteInfo.entry);
    } else {
        return "".concat(remoteInfo.name);
    }
}
function isRemoteInfoWithEntry(remote) {
    return typeof remote.entry !== 'undefined';
}
function isPureRemoteEntry(remote) {
    return !remote.entry.includes('.json');
}
function safeWrapper(callback, disableWarn) {
    return _safeWrapper.apply(this, arguments);
}
function _safeWrapper() {
    _safeWrapper = // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _async_to_generator(function(callback, disableWarn) {
        var res, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        callback()
                    ];
                case 1:
                    res = _state.sent();
                    return [
                        2,
                        res
                    ];
                case 2:
                    e = _state.sent();
                    !disableWarn && warn(e);
                    return [
                        2
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _safeWrapper.apply(this, arguments);
}
function isObject(val) {
    return val && (typeof val === "undefined" ? "undefined" : _type_of(val)) === 'object';
}
var objectToString = Object.prototype.toString;
// eslint-disable-next-line @typescript-eslint/ban-types
function isPlainObject(val) {
    return objectToString.call(val) === '[object Object]';
}
function isStaticResourcesEqual(url1, url2) {
    var REG_EXP = /^(https?:)?\/\//i;
    // Transform url1 and url2 into relative paths
    var relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
    var relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
    // Check if the relative paths are identical
    return relativeUrl1 === relativeUrl2;
}
function arrayOptions(options) {
    return Array.isArray(options) ? options : [
        options
    ];
}
function getRemoteEntryInfoFromSnapshot(snapshot) {
    var defaultRemoteEntryInfo = {
        url: '',
        type: 'global',
        globalName: ''
    };
    if (sdk.isBrowserEnv() || sdk.isReactNativeEnv()) {
        return 'remoteEntry' in snapshot ? {
            url: snapshot.remoteEntry,
            type: snapshot.remoteEntryType,
            globalName: snapshot.globalName
        } : defaultRemoteEntryInfo;
    }
    if ('ssrRemoteEntry' in snapshot) {
        return {
            url: snapshot.ssrRemoteEntry || defaultRemoteEntryInfo.url,
            type: snapshot.ssrRemoteEntryType || defaultRemoteEntryInfo.type,
            globalName: snapshot.globalName
        };
    }
    return defaultRemoteEntryInfo;
}
var processModuleAlias = function(name, subPath) {
    // @host/ ./button -> @host/button
    var moduleName;
    if (name.endsWith('/')) {
        moduleName = name.slice(0, -1);
    } else {
        moduleName = name;
    }
    if (subPath.startsWith('.')) {
        subPath = subPath.slice(1);
    }
    moduleName = moduleName + subPath;
    return moduleName;
};
var CurrentGlobal = (typeof globalThis === "undefined" ? "undefined" : _type_of(globalThis)) === 'object' ? globalThis : window;
var nativeGlobal = function() {
    try {
        // get real window (incase of sandbox)
        return document.defaultView;
    } catch (e) {
        // node env
        return CurrentGlobal;
    }
}();
var Global = nativeGlobal;
function definePropertyGlobalVal(target, key, val) {
    Object.defineProperty(target, key, {
        value: val,
        configurable: false,
        writable: true
    });
}
function includeOwnProperty(target, key) {
    return Object.hasOwnProperty.call(target, key);
}
// This section is to prevent encapsulation by certain microfrontend frameworks. Due to reuse policies, sandbox escapes.
// The sandbox in the microfrontend does not replicate the value of 'configurable'.
// If there is no loading content on the global object, this section defines the loading object.
if (!includeOwnProperty(CurrentGlobal, '__GLOBAL_LOADING_REMOTE_ENTRY__')) {
    definePropertyGlobalVal(CurrentGlobal, '__GLOBAL_LOADING_REMOTE_ENTRY__', {});
}
var globalLoading = CurrentGlobal.__GLOBAL_LOADING_REMOTE_ENTRY__;
function setGlobalDefaultVal(target) {
    var _target___FEDERATION__, _target___FEDERATION__1, _target___FEDERATION__2, _target___FEDERATION__3, _target___FEDERATION__4, _target___FEDERATION__5;
    if (includeOwnProperty(target, '__VMOK__') && !includeOwnProperty(target, '__FEDERATION__')) {
        definePropertyGlobalVal(target, '__FEDERATION__', target.__VMOK__);
    }
    if (!includeOwnProperty(target, '__FEDERATION__')) {
        definePropertyGlobalVal(target, '__FEDERATION__', {
            __GLOBAL_PLUGIN__: [],
            __INSTANCES__: [],
            moduleInfo: {},
            __SHARE__: {},
            __MANIFEST_LOADING__: {},
            __PRELOADED_MAP__: new Map()
        });
        definePropertyGlobalVal(target, '__VMOK__', target.__FEDERATION__);
    }
    var ___GLOBAL_PLUGIN__;
    (___GLOBAL_PLUGIN__ = (_target___FEDERATION__ = target.__FEDERATION__).__GLOBAL_PLUGIN__) != null ? ___GLOBAL_PLUGIN__ : _target___FEDERATION__.__GLOBAL_PLUGIN__ = [];
    var ___INSTANCES__;
    (___INSTANCES__ = (_target___FEDERATION__1 = target.__FEDERATION__).__INSTANCES__) != null ? ___INSTANCES__ : _target___FEDERATION__1.__INSTANCES__ = [];
    var _moduleInfo;
    (_moduleInfo = (_target___FEDERATION__2 = target.__FEDERATION__).moduleInfo) != null ? _moduleInfo : _target___FEDERATION__2.moduleInfo = {};
    var ___SHARE__;
    (___SHARE__ = (_target___FEDERATION__3 = target.__FEDERATION__).__SHARE__) != null ? ___SHARE__ : _target___FEDERATION__3.__SHARE__ = {};
    var ___MANIFEST_LOADING__;
    (___MANIFEST_LOADING__ = (_target___FEDERATION__4 = target.__FEDERATION__).__MANIFEST_LOADING__) != null ? ___MANIFEST_LOADING__ : _target___FEDERATION__4.__MANIFEST_LOADING__ = {};
    var ___PRELOADED_MAP__;
    (___PRELOADED_MAP__ = (_target___FEDERATION__5 = target.__FEDERATION__).__PRELOADED_MAP__) != null ? ___PRELOADED_MAP__ : _target___FEDERATION__5.__PRELOADED_MAP__ = new Map();
}
setGlobalDefaultVal(CurrentGlobal);
setGlobalDefaultVal(nativeGlobal);
function resetFederationGlobalInfo() {
    CurrentGlobal.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
    CurrentGlobal.__FEDERATION__.__INSTANCES__ = [];
    CurrentGlobal.__FEDERATION__.moduleInfo = {};
    CurrentGlobal.__FEDERATION__.__SHARE__ = {};
    CurrentGlobal.__FEDERATION__.__MANIFEST_LOADING__ = {};
    Object.keys(globalLoading).forEach(function(key) {
        delete globalLoading[key];
    });
}
function setGlobalFederationInstance(FederationInstance) {
    CurrentGlobal.__FEDERATION__.__INSTANCES__.push(FederationInstance);
}
function getGlobalFederationConstructor() {
    return CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
}
function setGlobalFederationConstructor(FederationConstructor) {
    var isDebug = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : sdk.isDebugMode();
    if (isDebug) {
        CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;
        CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.16.0";
    }
}
// eslint-disable-next-line @typescript-eslint/ban-types
function getInfoWithoutType(target, key) {
    if (typeof key === 'string') {
        var keyRes = target[key];
        if (keyRes) {
            return {
                value: target[key],
                key: key
            };
        } else {
            var targetKeys = Object.keys(target);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = targetKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var targetKey = _step.value;
                    var _targetKey_split = _sliced_to_array(targetKey.split(':'), 2), targetTypeOrName = _targetKey_split[0], _ = _targetKey_split[1];
                    var nKey = "".concat(targetTypeOrName, ":").concat(key);
                    var typeWithKeyRes = target[nKey];
                    if (typeWithKeyRes) {
                        return {
                            value: typeWithKeyRes,
                            key: nKey
                        };
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            return {
                value: undefined,
                key: key
            };
        }
    } else {
        throw new Error('key must be string');
    }
}
var getGlobalSnapshot = function() {
    return nativeGlobal.__FEDERATION__.moduleInfo;
};
var getTargetSnapshotInfoByModuleInfo = function(moduleInfo, snapshot) {
    // Check if the remote is included in the hostSnapshot
    var moduleKey = getFMId(moduleInfo);
    var getModuleInfo = getInfoWithoutType(snapshot, moduleKey).value;
    // The remoteSnapshot might not include a version
    if (getModuleInfo && !getModuleInfo.version && 'version' in moduleInfo && moduleInfo['version']) {
        getModuleInfo.version = moduleInfo['version'];
    }
    if (getModuleInfo) {
        return getModuleInfo;
    }
    // If the remote is not included in the hostSnapshot, deploy a micro app snapshot
    if ('version' in moduleInfo && moduleInfo['version']) {
        var version = moduleInfo.version, resModuleInfo = polyfills._object_without_properties_loose(moduleInfo, [
            "version"
        ]);
        var moduleKeyWithoutVersion = getFMId(resModuleInfo);
        var getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;
        if ((getModuleInfoWithoutVersion == null ? void 0 : getModuleInfoWithoutVersion.version) === version) {
            return getModuleInfoWithoutVersion;
        }
    }
    return;
};
var getGlobalSnapshotInfoByModuleInfo = function(moduleInfo) {
    return getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);
};
var setGlobalSnapshotInfoByModuleInfo = function(remoteInfo, moduleDetailInfo) {
    var moduleKey = getFMId(remoteInfo);
    nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;
    return nativeGlobal.__FEDERATION__.moduleInfo;
};
var addGlobalSnapshot = function(moduleInfos) {
    nativeGlobal.__FEDERATION__.moduleInfo = polyfills._extends({}, nativeGlobal.__FEDERATION__.moduleInfo, moduleInfos);
    return function() {
        var keys = Object.keys(moduleInfos);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                delete nativeGlobal.__FEDERATION__.moduleInfo[key];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    };
};
var getRemoteEntryExports = function(name, globalName) {
    var remoteEntryKey = globalName || "__FEDERATION_".concat(name, ":custom__");
    var entryExports = CurrentGlobal[remoteEntryKey];
    return {
        remoteEntryKey: remoteEntryKey,
        entryExports: entryExports
    };
};
// This function is used to register global plugins.
// It iterates over the provided plugins and checks if they are already registered.
// If a plugin is not registered, it is added to the global plugins.
// If a plugin is already registered, a warning message is logged.
var registerGlobalPlugins = function(plugins) {
    var __GLOBAL_PLUGIN__ = nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
    plugins.forEach(function(plugin) {
        if (__GLOBAL_PLUGIN__.findIndex(function(p) {
            return p.name === plugin.name;
        }) === -1) {
            __GLOBAL_PLUGIN__.push(plugin);
        } else {
            warn("The plugin ".concat(plugin.name, " has been registered."));
        }
    });
};
var getGlobalHostPlugins = function() {
    return nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
};
var getPreloaded = function(id) {
    return CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.get(id);
};
var setPreloaded = function(id) {
    return CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.set(id, true);
};
var DEFAULT_SCOPE = 'default';
var DEFAULT_REMOTE_TYPE = 'global';
// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// those constants are based on https://www.rubydoc.info/gems/semantic_range/3.0.0/SemanticRange#BUILDIDENTIFIER-constant
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
var buildIdentifier = '[0-9A-Za-z-]+';
var build = "(?:\\+(".concat(buildIdentifier, "(?:\\.").concat(buildIdentifier, ")*))");
var numericIdentifier = '0|[1-9]\\d*';
var numericIdentifierLoose = '[0-9]+';
var nonNumericIdentifier = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
var preReleaseIdentifierLoose = "(?:".concat(numericIdentifierLoose, "|").concat(nonNumericIdentifier, ")");
var preReleaseLoose = "(?:-?(".concat(preReleaseIdentifierLoose, "(?:\\.").concat(preReleaseIdentifierLoose, ")*))");
var preReleaseIdentifier = "(?:".concat(numericIdentifier, "|").concat(nonNumericIdentifier, ")");
var preRelease = "(?:-(".concat(preReleaseIdentifier, "(?:\\.").concat(preReleaseIdentifier, ")*))");
var xRangeIdentifier = "".concat(numericIdentifier, "|x|X|\\*");
var xRangePlain = "[v=\\s]*(".concat(xRangeIdentifier, ")(?:\\.(").concat(xRangeIdentifier, ")(?:\\.(").concat(xRangeIdentifier, ")(?:").concat(preRelease, ")?").concat(build, "?)?)?");
var hyphenRange = "^\\s*(".concat(xRangePlain, ")\\s+-\\s+(").concat(xRangePlain, ")\\s*$");
var mainVersionLoose = "(".concat(numericIdentifierLoose, ")\\.(").concat(numericIdentifierLoose, ")\\.(").concat(numericIdentifierLoose, ")");
var loosePlain = "[v=\\s]*".concat(mainVersionLoose).concat(preReleaseLoose, "?").concat(build, "?");
var gtlt = '((?:<|>)?=?)';
var comparatorTrim = "(\\s*)".concat(gtlt, "\\s*(").concat(loosePlain, "|").concat(xRangePlain, ")");
var loneTilde = '(?:~>?)';
var tildeTrim = "(\\s*)".concat(loneTilde, "\\s+");
var loneCaret = '(?:\\^)';
var caretTrim = "(\\s*)".concat(loneCaret, "\\s+");
var star = '(<|>)?=?\\s*\\*';
var caret = "^".concat(loneCaret).concat(xRangePlain, "$");
var mainVersion = "(".concat(numericIdentifier, ")\\.(").concat(numericIdentifier, ")\\.(").concat(numericIdentifier, ")");
var fullPlain = "v?".concat(mainVersion).concat(preRelease, "?").concat(build, "?");
var tilde = "^".concat(loneTilde).concat(xRangePlain, "$");
var xRange = "^".concat(gtlt, "\\s*").concat(xRangePlain, "$");
var comparator = "^".concat(gtlt, "\\s*(").concat(fullPlain, ")$|^$");
// copy from semver package
var gte0 = '^\\s*>=\\s*0.0.0\\s*$';
// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseRegex(source) {
    return new RegExp(source);
}
function isXVersion(version) {
    return !version || version.toLowerCase() === 'x' || version === '*';
}
function pipe() {
    for(var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++){
        fns[_key] = arguments[_key];
    }
    return function(x) {
        return fns.reduce(function(v, f) {
            return f(v);
        }, x);
    };
}
function extractComparator(comparatorString) {
    return comparatorString.match(parseRegex(comparator));
}
function combineVersion(major, minor, patch, preRelease) {
    var mainVersion = "".concat(major, ".").concat(minor, ".").concat(patch);
    if (preRelease) {
        return "".concat(mainVersion, "-").concat(preRelease);
    }
    return mainVersion;
}
// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseHyphen(range) {
    return range.replace(parseRegex(hyphenRange), function(_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease) {
        if (isXVersion(fromMajor)) {
            from = '';
        } else if (isXVersion(fromMinor)) {
            from = ">=".concat(fromMajor, ".0.0");
        } else if (isXVersion(fromPatch)) {
            from = ">=".concat(fromMajor, ".").concat(fromMinor, ".0");
        } else {
            from = ">=".concat(from);
        }
        if (isXVersion(toMajor)) {
            to = '';
        } else if (isXVersion(toMinor)) {
            to = "<".concat(Number(toMajor) + 1, ".0.0-0");
        } else if (isXVersion(toPatch)) {
            to = "<".concat(toMajor, ".").concat(Number(toMinor) + 1, ".0-0");
        } else if (toPreRelease) {
            to = "<=".concat(toMajor, ".").concat(toMinor, ".").concat(toPatch, "-").concat(toPreRelease);
        } else {
            to = "<=".concat(to);
        }
        return "".concat(from, " ").concat(to).trim();
    });
}
function parseComparatorTrim(range) {
    return range.replace(parseRegex(comparatorTrim), '$1$2$3');
}
function parseTildeTrim(range) {
    return range.replace(parseRegex(tildeTrim), '$1~');
}
function parseCaretTrim(range) {
    return range.replace(parseRegex(caretTrim), '$1^');
}
function parseCarets(range) {
    return range.trim().split(/\s+/).map(function(rangeVersion) {
        return rangeVersion.replace(parseRegex(caret), function(_, major, minor, patch, preRelease) {
            if (isXVersion(major)) {
                return '';
            } else if (isXVersion(minor)) {
                return ">=".concat(major, ".0.0 <").concat(Number(major) + 1, ".0.0-0");
            } else if (isXVersion(patch)) {
                if (major === '0') {
                    return ">=".concat(major, ".").concat(minor, ".0 <").concat(major, ".").concat(Number(minor) + 1, ".0-0");
                } else {
                    return ">=".concat(major, ".").concat(minor, ".0 <").concat(Number(major) + 1, ".0.0-0");
                }
            } else if (preRelease) {
                if (major === '0') {
                    if (minor === '0') {
                        return ">=".concat(major, ".").concat(minor, ".").concat(patch, "-").concat(preRelease, " <").concat(major, ".").concat(minor, ".").concat(Number(patch) + 1, "-0");
                    } else {
                        return ">=".concat(major, ".").concat(minor, ".").concat(patch, "-").concat(preRelease, " <").concat(major, ".").concat(Number(minor) + 1, ".0-0");
                    }
                } else {
                    return ">=".concat(major, ".").concat(minor, ".").concat(patch, "-").concat(preRelease, " <").concat(Number(major) + 1, ".0.0-0");
                }
            } else {
                if (major === '0') {
                    if (minor === '0') {
                        return ">=".concat(major, ".").concat(minor, ".").concat(patch, " <").concat(major, ".").concat(minor, ".").concat(Number(patch) + 1, "-0");
                    } else {
                        return ">=".concat(major, ".").concat(minor, ".").concat(patch, " <").concat(major, ".").concat(Number(minor) + 1, ".0-0");
                    }
                }
                return ">=".concat(major, ".").concat(minor, ".").concat(patch, " <").concat(Number(major) + 1, ".0.0-0");
            }
        });
    }).join(' ');
}
function parseTildes(range) {
    return range.trim().split(/\s+/).map(function(rangeVersion) {
        return rangeVersion.replace(parseRegex(tilde), function(_, major, minor, patch, preRelease) {
            if (isXVersion(major)) {
                return '';
            } else if (isXVersion(minor)) {
                return ">=".concat(major, ".0.0 <").concat(Number(major) + 1, ".0.0-0");
            } else if (isXVersion(patch)) {
                return ">=".concat(major, ".").concat(minor, ".0 <").concat(major, ".").concat(Number(minor) + 1, ".0-0");
            } else if (preRelease) {
                return ">=".concat(major, ".").concat(minor, ".").concat(patch, "-").concat(preRelease, " <").concat(major, ".").concat(Number(minor) + 1, ".0-0");
            }
            return ">=".concat(major, ".").concat(minor, ".").concat(patch, " <").concat(major, ".").concat(Number(minor) + 1, ".0-0");
        });
    }).join(' ');
}
function parseXRanges(range) {
    return range.split(/\s+/).map(function(rangeVersion) {
        return rangeVersion.trim().replace(parseRegex(xRange), function(ret, gtlt, major, minor, patch, preRelease) {
            var isXMajor = isXVersion(major);
            var isXMinor = isXMajor || isXVersion(minor);
            var isXPatch = isXMinor || isXVersion(patch);
            if (gtlt === '=' && isXPatch) {
                gtlt = '';
            }
            preRelease = '';
            if (isXMajor) {
                if (gtlt === '>' || gtlt === '<') {
                    // nothing is allowed
                    return '<0.0.0-0';
                } else {
                    // nothing is forbidden
                    return '*';
                }
            } else if (gtlt && isXPatch) {
                // replace X with 0
                if (isXMinor) {
                    minor = 0;
                }
                patch = 0;
                if (gtlt === '>') {
                    // >1 => >=2.0.0
                    // >1.2 => >=1.3.0
                    gtlt = '>=';
                    if (isXMinor) {
                        major = Number(major) + 1;
                        minor = 0;
                        patch = 0;
                    } else {
                        minor = Number(minor) + 1;
                        patch = 0;
                    }
                } else if (gtlt === '<=') {
                    // <=0.7.x is actually <0.8.0, since any 0.7.x should pass
                    // Similarly, <=7.x is actually <8.0.0, etc.
                    gtlt = '<';
                    if (isXMinor) {
                        major = Number(major) + 1;
                    } else {
                        minor = Number(minor) + 1;
                    }
                }
                if (gtlt === '<') {
                    preRelease = '-0';
                }
                return "".concat(gtlt + major, ".").concat(minor, ".").concat(patch).concat(preRelease);
            } else if (isXMinor) {
                return ">=".concat(major, ".0.0").concat(preRelease, " <").concat(Number(major) + 1, ".0.0-0");
            } else if (isXPatch) {
                return ">=".concat(major, ".").concat(minor, ".0").concat(preRelease, " <").concat(major, ".").concat(Number(minor) + 1, ".0-0");
            }
            return ret;
        });
    }).join(' ');
}
function parseStar(range) {
    return range.trim().replace(parseRegex(star), '');
}
function parseGTE0(comparatorString) {
    return comparatorString.trim().replace(parseRegex(gte0), '');
}
// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function compareAtom(rangeAtom, versionAtom) {
    rangeAtom = Number(rangeAtom) || rangeAtom;
    versionAtom = Number(versionAtom) || versionAtom;
    if (rangeAtom > versionAtom) {
        return 1;
    }
    if (rangeAtom === versionAtom) {
        return 0;
    }
    return -1;
}
function comparePreRelease(rangeAtom, versionAtom) {
    var rangePreRelease = rangeAtom.preRelease;
    var versionPreRelease = versionAtom.preRelease;
    if (rangePreRelease === undefined && Boolean(versionPreRelease)) {
        return 1;
    }
    if (Boolean(rangePreRelease) && versionPreRelease === undefined) {
        return -1;
    }
    if (rangePreRelease === undefined && versionPreRelease === undefined) {
        return 0;
    }
    for(var i = 0, n = rangePreRelease.length; i <= n; i++){
        var rangeElement = rangePreRelease[i];
        var versionElement = versionPreRelease[i];
        if (rangeElement === versionElement) {
            continue;
        }
        if (rangeElement === undefined && versionElement === undefined) {
            return 0;
        }
        if (!rangeElement) {
            return 1;
        }
        if (!versionElement) {
            return -1;
        }
        return compareAtom(rangeElement, versionElement);
    }
    return 0;
}
function compareVersion(rangeAtom, versionAtom) {
    return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
}
function eq(rangeAtom, versionAtom) {
    return rangeAtom.version === versionAtom.version;
}
function compare(rangeAtom, versionAtom) {
    switch(rangeAtom.operator){
        case '':
        case '=':
            return eq(rangeAtom, versionAtom);
        case '>':
            return compareVersion(rangeAtom, versionAtom) < 0;
        case '>=':
            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
        case '<':
            return compareVersion(rangeAtom, versionAtom) > 0;
        case '<=':
            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
        case undefined:
            {
                // mean * or x -> all versions
                return true;
            }
        default:
            return false;
    }
}
// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseComparatorString(range) {
    return pipe(// ^ --> * (any, kinda silly)
    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
    // ^1.2.3 --> >=1.2.3 <2.0.0-0
    // ^1.2.0 --> >=1.2.0 <2.0.0-0
    parseCarets, // ~, ~> --> * (any, kinda silly)
    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
    parseTildes, parseXRanges, parseStar)(range);
}
function parseRange(range) {
    return pipe(// `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    parseHyphen, // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    parseComparatorTrim, // `~ 1.2.3` => `~1.2.3`
    parseTildeTrim, // `^ 1.2.3` => `^1.2.3`
    parseCaretTrim)(range.trim()).split(/\s+/).join(' ');
}
function satisfy(version, range) {
    if (!version) {
        return false;
    }
    // Extract version details once
    var extractedVersion = extractComparator(version);
    if (!extractedVersion) {
        // If the version string is invalid, it can't satisfy any range
        return false;
    }
    var _extractedVersion = _sliced_to_array(extractedVersion, 7), versionOperator = _extractedVersion[1], versionMajor = _extractedVersion[3], versionMinor = _extractedVersion[4], versionPatch = _extractedVersion[5], versionPreRelease = _extractedVersion[6];
    var versionAtom = {
        operator: versionOperator,
        version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
        major: versionMajor,
        minor: versionMinor,
        patch: versionPatch,
        preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split('.')
    };
    // Split the range by || to handle OR conditions
    var orRanges = range.split('||');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = orRanges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var orRange = _step.value;
            var trimmedOrRange = orRange.trim();
            if (!trimmedOrRange) {
                // An empty range string signifies wildcard *, satisfy any valid version
                // (We already checked if the version itself is valid)
                return true;
            }
            // Handle simple wildcards explicitly before complex parsing
            if (trimmedOrRange === '*' || trimmedOrRange === 'x') {
                return true;
            }
            try {
                // Apply existing parsing logic to the current OR sub-range
                var parsedSubRange = parseRange(trimmedOrRange); // Handles hyphens, trims etc.
                // Check if the result of initial parsing is empty, which can happen
                // for some wildcard cases handled by parseRange/parseComparatorString.
                // E.g. `parseStar` used in `parseComparatorString` returns ''.
                if (!parsedSubRange.trim()) {
                    // If parsing results in empty string, treat as wildcard match
                    return true;
                }
                var parsedComparatorString = parsedSubRange.split(' ').map(function(rangeVersion) {
                    return parseComparatorString(rangeVersion);
                }) // Expands ^, ~
                .join(' ');
                // Check again if the comparator string became empty after specific parsing like ^ or ~
                if (!parsedComparatorString.trim()) {
                    return true;
                }
                // Split the sub-range by space for implicit AND conditions
                var comparators = parsedComparatorString.split(/\s+/).map(function(comparator) {
                    return parseGTE0(comparator);
                }) // Filter out empty strings that might result from multiple spaces
                .filter(Boolean);
                // If a sub-range becomes empty after parsing (e.g., invalid characters),
                // it cannot be satisfied. This check might be redundant now but kept for safety.
                if (comparators.length === 0) {
                    continue;
                }
                var subRangeSatisfied = true;
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = comparators[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var comparator = _step1.value;
                        var extractedComparator = extractComparator(comparator);
                        // If any part of the AND sub-range is invalid, the sub-range is not satisfied
                        if (!extractedComparator) {
                            subRangeSatisfied = false;
                            break;
                        }
                        var _extractedComparator = _sliced_to_array(extractedComparator, 7), rangeOperator = _extractedComparator[1], rangeMajor = _extractedComparator[3], rangeMinor = _extractedComparator[4], rangePatch = _extractedComparator[5], rangePreRelease = _extractedComparator[6];
                        var rangeAtom = {
                            operator: rangeOperator,
                            version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
                            major: rangeMajor,
                            minor: rangeMinor,
                            patch: rangePatch,
                            preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split('.')
                        };
                        // Check if the version satisfies this specific comparator in the AND chain
                        if (!compare(rangeAtom, versionAtom)) {
                            subRangeSatisfied = false; // This part of the AND condition failed
                            break; // No need to check further comparators in this sub-range
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                // If all AND conditions within this OR sub-range were met, the overall range is satisfied
                if (subRangeSatisfied) {
                    return true;
                }
            } catch (e) {
                // Log error and treat this sub-range as unsatisfied
                console.error('[semver] Error processing range part "'.concat(trimmedOrRange, '":'), e);
                continue;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    // If none of the OR sub-ranges were satisfied
    return false;
}
function formatShare(shareArgs, from, name, shareStrategy) {
    var get;
    if ('get' in shareArgs) {
        // eslint-disable-next-line prefer-destructuring
        get = shareArgs.get;
    } else if ('lib' in shareArgs) {
        get = function() {
            return Promise.resolve(shareArgs.lib);
        };
    } else {
        get = function() {
            return Promise.resolve(function() {
                throw new Error("Can not get shared '".concat(name, "'!"));
            });
        };
    }
    var _shareArgs_version, _shareArgs_scope, _shareArgs_strategy;
    return polyfills._extends({
        deps: [],
        useIn: [],
        from: from,
        loading: null
    }, shareArgs, {
        shareConfig: polyfills._extends({
            requiredVersion: "^".concat(shareArgs.version),
            singleton: false,
            eager: false,
            strictVersion: false
        }, shareArgs.shareConfig),
        get: get,
        loaded: (shareArgs == null ? void 0 : shareArgs.loaded) || 'lib' in shareArgs ? true : undefined,
        version: (_shareArgs_version = shareArgs.version) != null ? _shareArgs_version : '0',
        scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [
            (_shareArgs_scope = shareArgs.scope) != null ? _shareArgs_scope : 'default'
        ],
        strategy: ((_shareArgs_strategy = shareArgs.strategy) != null ? _shareArgs_strategy : shareStrategy) || 'version-first'
    });
}
function formatShareConfigs(globalOptions, userOptions) {
    var shareArgs = userOptions.shared || {};
    var from = userOptions.name;
    var shareInfos = Object.keys(shareArgs).reduce(function(res, pkgName) {
        var arrayShareArgs = arrayOptions(shareArgs[pkgName]);
        res[pkgName] = res[pkgName] || [];
        arrayShareArgs.forEach(function(shareConfig) {
            res[pkgName].push(formatShare(shareConfig, from, pkgName, userOptions.shareStrategy));
        });
        return res;
    }, {});
    var shared = polyfills._extends({}, globalOptions.shared);
    Object.keys(shareInfos).forEach(function(shareKey) {
        if (!shared[shareKey]) {
            shared[shareKey] = shareInfos[shareKey];
        } else {
            shareInfos[shareKey].forEach(function(newUserSharedOptions) {
                var isSameVersion = shared[shareKey].find(function(sharedVal) {
                    return sharedVal.version === newUserSharedOptions.version;
                });
                if (!isSameVersion) {
                    shared[shareKey].push(newUserSharedOptions);
                }
            });
        }
    });
    return {
        shared: shared,
        shareInfos: shareInfos
    };
}
function versionLt(a, b) {
    var transformInvalidVersion = function(version) {
        var isNumberVersion = !Number.isNaN(Number(version));
        if (isNumberVersion) {
            var splitArr = version.split('.');
            var validVersion = version;
            for(var i = 0; i < 3 - splitArr.length; i++){
                validVersion += '.0';
            }
            return validVersion;
        }
        return version;
    };
    if (satisfy(transformInvalidVersion(a), "<=".concat(transformInvalidVersion(b)))) {
        return true;
    } else {
        return false;
    }
}
var findVersion = function(shareVersionMap, cb) {
    var callback = cb || function(prev, cur) {
        return versionLt(prev, cur);
    };
    return Object.keys(shareVersionMap).reduce(function(prev, cur) {
        if (!prev) {
            return cur;
        }
        if (callback(prev, cur)) {
            return cur;
        }
        // default version is '0' https://github.com/webpack/webpack/blob/main/lib/sharing/ProvideSharedModule.js#L136
        if (prev === '0') {
            return cur;
        }
        return prev;
    }, 0);
};
var isLoaded = function(shared) {
    return Boolean(shared.loaded) || typeof shared.lib === 'function';
};
var isLoading = function(shared) {
    return Boolean(shared.loading);
};
function findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName) {
    var versions = shareScopeMap[scope][pkgName];
    var callback = function callback(prev, cur) {
        return !isLoaded(versions[prev]) && versionLt(prev, cur);
    };
    return findVersion(shareScopeMap[scope][pkgName], callback);
}
function findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName) {
    var versions = shareScopeMap[scope][pkgName];
    var callback = function callback(prev, cur) {
        var isLoadingOrLoaded = function(shared) {
            return isLoaded(shared) || isLoading(shared);
        };
        if (isLoadingOrLoaded(versions[cur])) {
            if (isLoadingOrLoaded(versions[prev])) {
                return Boolean(versionLt(prev, cur));
            } else {
                return true;
            }
        }
        if (isLoadingOrLoaded(versions[prev])) {
            return false;
        }
        return versionLt(prev, cur);
    };
    return findVersion(shareScopeMap[scope][pkgName], callback);
}
function getFindShareFunction(strategy) {
    if (strategy === 'loaded-first') {
        return findSingletonVersionOrderByLoaded;
    }
    return findSingletonVersionOrderByVersion;
}
function getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {
    if (!localShareScopeMap) {
        return;
    }
    var shareConfig = shareInfo.shareConfig, _shareInfo_scope = shareInfo.scope, scope = _shareInfo_scope === void 0 ? DEFAULT_SCOPE : _shareInfo_scope, strategy = shareInfo.strategy;
    var scopes = Array.isArray(scope) ? scope : [
        scope
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var sc = _step.value;
            if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {
                var requiredVersion = shareConfig.requiredVersion;
                var findShareFunction = getFindShareFunction(strategy);
                var maxOrSingletonVersion = findShareFunction(localShareScopeMap, sc, pkgName);
                //@ts-ignore
                var defaultResolver = function() {
                    if (shareConfig.singleton) {
                        if (typeof requiredVersion === 'string' && !satisfy(maxOrSingletonVersion, requiredVersion)) {
                            var msg = "Version ".concat(maxOrSingletonVersion, " from ").concat(maxOrSingletonVersion && localShareScopeMap[sc][pkgName][maxOrSingletonVersion].from, " of shared singleton module ").concat(pkgName, " does not satisfy the requirement of ").concat(shareInfo.from, " which needs ").concat(requiredVersion, ")");
                            if (shareConfig.strictVersion) {
                                error(msg);
                            } else {
                                warn(msg);
                            }
                        }
                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                    } else {
                        if (requiredVersion === false || requiredVersion === '*') {
                            return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                        }
                        if (satisfy(maxOrSingletonVersion, requiredVersion)) {
                            return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                        }
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = Object.entries(localShareScopeMap[sc][pkgName])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var _step_value = _sliced_to_array(_step.value, 2), versionKey = _step_value[0], versionValue = _step_value[1];
                                if (satisfy(versionKey, requiredVersion)) {
                                    return versionValue;
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                };
                var params = {
                    shareScopeMap: localShareScopeMap,
                    scope: sc,
                    pkgName: pkgName,
                    version: maxOrSingletonVersion,
                    GlobalFederation: Global.__FEDERATION__,
                    resolver: defaultResolver
                };
                var resolveShared = resolveShare.emit(params) || params;
                return {
                    v: resolveShared.resolver()
                };
            }
        };
        for(var _iterator = scopes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _ret = _loop();
            if (_type_of(_ret) === "object") return _ret.v;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function getGlobalShareScope() {
    return Global.__FEDERATION__.__SHARE__;
}
function getTargetSharedOptions(options) {
    var pkgName = options.pkgName, extraOptions = options.extraOptions, shareInfos = options.shareInfos;
    var defaultResolver = function(sharedOptions) {
        if (!sharedOptions) {
            return undefined;
        }
        var shareVersionMap = {};
        sharedOptions.forEach(function(shared) {
            shareVersionMap[shared.version] = shared;
        });
        var callback = function callback(prev, cur) {
            return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);
        };
        var maxVersion = findVersion(shareVersionMap, callback);
        return shareVersionMap[maxVersion];
    };
    var _extraOptions_resolver;
    var resolver = (_extraOptions_resolver = extraOptions == null ? void 0 : extraOptions.resolver) != null ? _extraOptions_resolver : defaultResolver;
    return Object.assign({}, resolver(shareInfos[pkgName]), extraOptions == null ? void 0 : extraOptions.customShareInfo);
}
var ShareUtils = {
    getRegisteredShare: getRegisteredShare,
    getGlobalShareScope: getGlobalShareScope
};
var GlobalUtils = {
    Global: Global,
    nativeGlobal: nativeGlobal,
    resetFederationGlobalInfo: resetFederationGlobalInfo,
    setGlobalFederationInstance: setGlobalFederationInstance,
    getGlobalFederationConstructor: getGlobalFederationConstructor,
    setGlobalFederationConstructor: setGlobalFederationConstructor,
    getInfoWithoutType: getInfoWithoutType,
    getGlobalSnapshot: getGlobalSnapshot,
    getTargetSnapshotInfoByModuleInfo: getTargetSnapshotInfoByModuleInfo,
    getGlobalSnapshotInfoByModuleInfo: getGlobalSnapshotInfoByModuleInfo,
    setGlobalSnapshotInfoByModuleInfo: setGlobalSnapshotInfoByModuleInfo,
    addGlobalSnapshot: addGlobalSnapshot,
    getRemoteEntryExports: getRemoteEntryExports,
    registerGlobalPlugins: registerGlobalPlugins,
    getGlobalHostPlugins: getGlobalHostPlugins,
    getPreloaded: getPreloaded,
    setPreloaded: setPreloaded
};
var helpers = {
    global: GlobalUtils,
    share: ShareUtils
};
function getBuilderId() {
    //@ts-ignore
    return  true ? "host:1.0.0" : 0;
}
// Function to match a remote with its name and expose
// id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
// id: alias(app1) + expose(button) = app1/button
// id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
function matchRemoteWithNameAndExpose(remotes, id) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = remotes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var remote = _step.value;
            // match pkgName
            var isNameMatched = id.startsWith(remote.name);
            var expose = id.replace(remote.name, '');
            if (isNameMatched) {
                if (expose.startsWith('/')) {
                    var pkgNameOrAlias = remote.name;
                    expose = ".".concat(expose);
                    return {
                        pkgNameOrAlias: pkgNameOrAlias,
                        expose: expose,
                        remote: remote
                    };
                } else if (expose === '') {
                    return {
                        pkgNameOrAlias: remote.name,
                        expose: '.',
                        remote: remote
                    };
                }
            }
            // match alias
            var isAliasMatched = remote.alias && id.startsWith(remote.alias);
            var exposeWithAlias = remote.alias && id.replace(remote.alias, '');
            if (remote.alias && isAliasMatched) {
                if (exposeWithAlias && exposeWithAlias.startsWith('/')) {
                    var pkgNameOrAlias1 = remote.alias;
                    exposeWithAlias = ".".concat(exposeWithAlias);
                    return {
                        pkgNameOrAlias: pkgNameOrAlias1,
                        expose: exposeWithAlias,
                        remote: remote
                    };
                } else if (exposeWithAlias === '') {
                    return {
                        pkgNameOrAlias: remote.alias,
                        expose: '.',
                        remote: remote
                    };
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return;
}
// Function to match a remote with its name or alias
function matchRemote(remotes, nameOrAlias) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = remotes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var remote = _step.value;
            var isNameMatched = nameOrAlias === remote.name;
            if (isNameMatched) {
                return remote;
            }
            var isAliasMatched = remote.alias && nameOrAlias === remote.alias;
            if (isAliasMatched) {
                return remote;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return;
}
function registerPlugins(plugins, hookInstances) {
    var globalPlugins = getGlobalHostPlugins();
    // Incorporate global plugins
    if (globalPlugins.length > 0) {
        globalPlugins.forEach(function(plugin) {
            if (plugins == null ? void 0 : plugins.find(function(item) {
                return item.name !== plugin.name;
            })) {
                plugins.push(plugin);
            }
        });
    }
    if (plugins && plugins.length > 0) {
        plugins.forEach(function(plugin) {
            hookInstances.forEach(function(hookInstance) {
                hookInstance.applyPlugin(plugin);
            });
        });
    }
    return plugins;
}
var importCallback = '.then(callbacks[0]).catch(callbacks[1])';
function loadEsmEntry(_) {
    return _loadEsmEntry.apply(this, arguments);
}
function _loadEsmEntry() {
    _loadEsmEntry = _async_to_generator(function(param) {
        var entry, remoteEntryExports;
        return _ts_generator(this, function(_state) {
            entry = param.entry, remoteEntryExports = param.remoteEntryExports;
            return [
                2,
                new Promise(function(resolve, reject) {
                    try {
                        if (!remoteEntryExports) {
                            if (typeof FEDERATION_ALLOW_NEW_FUNCTION !== 'undefined') {
                                new Function('callbacks', 'import("'.concat(entry, '")').concat(importCallback))([
                                    resolve,
                                    reject
                                ]);
                            } else {
                                import(/* webpackIgnore: true */ /* @vite-ignore */ entry).then(resolve).catch(reject);
                            }
                        } else {
                            resolve(remoteEntryExports);
                        }
                    } catch (e) {
                        reject(e);
                    }
                })
            ];
        });
    });
    return _loadEsmEntry.apply(this, arguments);
}
function loadSystemJsEntry(_) {
    return _loadSystemJsEntry.apply(this, arguments);
}
function _loadSystemJsEntry() {
    _loadSystemJsEntry = _async_to_generator(function(param) {
        var entry, remoteEntryExports;
        return _ts_generator(this, function(_state) {
            entry = param.entry, remoteEntryExports = param.remoteEntryExports;
            return [
                2,
                new Promise(function(resolve, reject) {
                    try {
                        if (!remoteEntryExports) {
                            //@ts-ignore
                            if (false) {} else {
                                new Function('callbacks', 'System.import("'.concat(entry, '")').concat(importCallback))([
                                    resolve,
                                    reject
                                ]);
                            }
                        } else {
                            resolve(remoteEntryExports);
                        }
                    } catch (e) {
                        reject(e);
                    }
                })
            ];
        });
    });
    return _loadSystemJsEntry.apply(this, arguments);
}
function handleRemoteEntryLoaded(name, globalName, entry) {
    var _getRemoteEntryExports = getRemoteEntryExports(name, globalName), remoteEntryKey = _getRemoteEntryExports.remoteEntryKey, entryExports = _getRemoteEntryExports.entryExports;
    assert(entryExports, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_001, errorCodes.runtimeDescMap, {
        remoteName: name,
        remoteEntryUrl: entry,
        remoteEntryKey: remoteEntryKey
    }));
    return entryExports;
}
function loadEntryScript(_) {
    return _loadEntryScript.apply(this, arguments);
}
function _loadEntryScript() {
    _loadEntryScript = _async_to_generator(function(param) {
        var name, globalName, entry, loaderHook, _getRemoteEntryExports, remoteEntryExports;
        return _ts_generator(this, function(_state) {
            name = param.name, globalName = param.globalName, entry = param.entry, loaderHook = param.loaderHook;
            _getRemoteEntryExports = getRemoteEntryExports(name, globalName), remoteEntryExports = _getRemoteEntryExports.entryExports;
            if (remoteEntryExports) {
                return [
                    2,
                    remoteEntryExports
                ];
            }
            return [
                2,
                sdk.loadScript(entry, {
                    attrs: {},
                    createScriptHook: function(url, attrs) {
                        var res = loaderHook.lifecycle.createScript.emit({
                            url: url,
                            attrs: attrs
                        });
                        if (!res) return;
                        if (_instanceof(res, HTMLScriptElement)) {
                            return res;
                        }
                        if ('script' in res || 'timeout' in res) {
                            return res;
                        }
                        return;
                    }
                }).then(function() {
                    return handleRemoteEntryLoaded(name, globalName, entry);
                }).catch(function(e) {
                    assert(undefined, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_008, errorCodes.runtimeDescMap, {
                        remoteName: name,
                        resourceUrl: entry
                    }));
                    throw e;
                })
            ];
        });
    });
    return _loadEntryScript.apply(this, arguments);
}
function loadEntryDom(_) {
    return _loadEntryDom.apply(this, arguments);
}
function _loadEntryDom() {
    _loadEntryDom = _async_to_generator(function(param) {
        var remoteInfo, remoteEntryExports, loaderHook, entry, globalName, name, type;
        return _ts_generator(this, function(_state) {
            remoteInfo = param.remoteInfo, remoteEntryExports = param.remoteEntryExports, loaderHook = param.loaderHook;
            entry = remoteInfo.entry, globalName = remoteInfo.entryGlobalName, name = remoteInfo.name, type = remoteInfo.type;
            switch(type){
                case 'esm':
                case 'module':
                    return [
                        2,
                        loadEsmEntry({
                            entry: entry,
                            remoteEntryExports: remoteEntryExports
                        })
                    ];
                case 'system':
                    return [
                        2,
                        loadSystemJsEntry({
                            entry: entry,
                            remoteEntryExports: remoteEntryExports
                        })
                    ];
                default:
                    return [
                        2,
                        loadEntryScript({
                            entry: entry,
                            globalName: globalName,
                            name: name,
                            loaderHook: loaderHook
                        })
                    ];
            }
            return [
                2
            ];
        });
    });
    return _loadEntryDom.apply(this, arguments);
}
function loadEntryNode(_) {
    return _loadEntryNode.apply(this, arguments);
}
function _loadEntryNode() {
    _loadEntryNode = _async_to_generator(function(param) {
        var remoteInfo, loaderHook, entry, globalName, name, type, _getRemoteEntryExports, remoteEntryExports;
        return _ts_generator(this, function(_state) {
            remoteInfo = param.remoteInfo, loaderHook = param.loaderHook;
            entry = remoteInfo.entry, globalName = remoteInfo.entryGlobalName, name = remoteInfo.name, type = remoteInfo.type;
            _getRemoteEntryExports = getRemoteEntryExports(name, globalName), remoteEntryExports = _getRemoteEntryExports.entryExports;
            if (remoteEntryExports) {
                return [
                    2,
                    remoteEntryExports
                ];
            }
            return [
                2,
                sdk.loadScriptNode(entry, {
                    attrs: {
                        name: name,
                        globalName: globalName,
                        type: type
                    },
                    loaderHook: {
                        createScriptHook: function(url) {
                            var attrs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            var res = loaderHook.lifecycle.createScript.emit({
                                url: url,
                                attrs: attrs
                            });
                            if (!res) return;
                            if ('url' in res) {
                                return res;
                            }
                            return;
                        }
                    }
                }).then(function() {
                    return handleRemoteEntryLoaded(name, globalName, entry);
                }).catch(function(e) {
                    throw e;
                })
            ];
        });
    });
    return _loadEntryNode.apply(this, arguments);
}
function getRemoteEntryUniqueKey(remoteInfo) {
    var entry = remoteInfo.entry, name = remoteInfo.name;
    return sdk.composeKeyWithSeparator(name, entry);
}
function getRemoteEntry(_) {
    return _getRemoteEntry.apply(this, arguments);
}
function _getRemoteEntry() {
    _getRemoteEntry = _async_to_generator(function(param) {
        var origin, remoteEntryExports, remoteInfo, uniqueKey, loadEntryHook, loaderHook;
        return _ts_generator(this, function(_state) {
            origin = param.origin, remoteEntryExports = param.remoteEntryExports, remoteInfo = param.remoteInfo;
            uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
            if (remoteEntryExports) {
                return [
                    2,
                    remoteEntryExports
                ];
            }
            if (!globalLoading[uniqueKey]) {
                loadEntryHook = origin.remoteHandler.hooks.lifecycle.loadEntry;
                loaderHook = origin.loaderHook;
                globalLoading[uniqueKey] = loadEntryHook.emit({
                    loaderHook: loaderHook,
                    remoteInfo: remoteInfo,
                    remoteEntryExports: remoteEntryExports
                }).then(function(res) {
                    if (res) {
                        return res;
                    }
                    // Use ENV_TARGET if defined, otherwise fallback to isBrowserEnv, must keep this
                    var isWebEnvironment = typeof ENV_TARGET !== 'undefined' ? ENV_TARGET === 'web' : sdk.isBrowserEnv();
                    return isWebEnvironment ? loadEntryDom({
                        remoteInfo: remoteInfo,
                        remoteEntryExports: remoteEntryExports,
                        loaderHook: loaderHook
                    }) : loadEntryNode({
                        remoteInfo: remoteInfo,
                        loaderHook: loaderHook
                    });
                });
            }
            return [
                2,
                globalLoading[uniqueKey]
            ];
        });
    });
    return _getRemoteEntry.apply(this, arguments);
}
function getRemoteInfo(remote) {
    return polyfills._extends({}, remote, {
        entry: 'entry' in remote ? remote.entry : '',
        type: remote.type || DEFAULT_REMOTE_TYPE,
        entryGlobalName: remote.entryGlobalName || remote.name,
        shareScope: remote.shareScope || DEFAULT_SCOPE
    });
}
var Module = /*#__PURE__*/ function() {
    function Module(param) {
        var remoteInfo = param.remoteInfo, host = param.host;
        _class_call_check(this, Module);
        this.inited = false;
        this.lib = undefined;
        this.remoteInfo = remoteInfo;
        this.host = host;
    }
    _create_class(Module, [
        {
            key: "getEntry",
            value: function getEntry() {
                var _this = this;
                return _async_to_generator(function() {
                    var remoteEntryExports, err, uniqueKey;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.remoteEntryExports) {
                                    return [
                                        2,
                                        _this.remoteEntryExports
                                    ];
                                }
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    getRemoteEntry({
                                        origin: _this.host,
                                        remoteInfo: _this.remoteInfo,
                                        remoteEntryExports: _this.remoteEntryExports
                                    })
                                ];
                            case 2:
                                remoteEntryExports = _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 3:
                                err = _state.sent();
                                uniqueKey = getRemoteEntryUniqueKey(_this.remoteInfo);
                                return [
                                    4,
                                    _this.host.loaderHook.lifecycle.loadEntryError.emit({
                                        getRemoteEntry: getRemoteEntry,
                                        origin: _this.host,
                                        remoteInfo: _this.remoteInfo,
                                        remoteEntryExports: _this.remoteEntryExports,
                                        globalLoading: globalLoading,
                                        uniqueKey: uniqueKey
                                    })
                                ];
                            case 4:
                                remoteEntryExports = _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 5:
                                assert(remoteEntryExports, "remoteEntryExports is undefined \n ".concat(sdk.safeToString(_this.remoteInfo)));
                                _this.remoteEntryExports = remoteEntryExports;
                                return [
                                    2,
                                    _this.remoteEntryExports
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "get",
            value: // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
            function get(id, expose, options, remoteSnapshot) {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, _ref_loadFactory, loadFactory, remoteEntryExports, localShareScopeMap, shareScopeKeys, shareScope, initScope, remoteEntryInitOptions, initContainerOptions, moduleFactory, symbolName, wrapModuleFactory, exposeContent;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _ref = options || {
                                    loadFactory: true
                                }, _ref_loadFactory = _ref.loadFactory, loadFactory = _ref_loadFactory === void 0 ? true : _ref_loadFactory;
                                return [
                                    4,
                                    _this.getEntry()
                                ];
                            case 1:
                                remoteEntryExports = _state.sent();
                                if (!!_this.inited) return [
                                    3,
                                    5
                                ];
                                localShareScopeMap = _this.host.shareScopeMap;
                                shareScopeKeys = Array.isArray(_this.remoteInfo.shareScope) ? _this.remoteInfo.shareScope : [
                                    _this.remoteInfo.shareScope
                                ];
                                if (!shareScopeKeys.length) {
                                    shareScopeKeys.push('default');
                                }
                                shareScopeKeys.forEach(function(shareScopeKey) {
                                    if (!localShareScopeMap[shareScopeKey]) {
                                        localShareScopeMap[shareScopeKey] = {};
                                    }
                                });
                                // TODO: compate legacy init params, should use shareScopeMap if exist
                                shareScope = localShareScopeMap[shareScopeKeys[0]];
                                initScope = [];
                                remoteEntryInitOptions = {
                                    version: _this.remoteInfo.version || '',
                                    shareScopeKeys: Array.isArray(_this.remoteInfo.shareScope) ? shareScopeKeys : _this.remoteInfo.shareScope || 'default'
                                };
                                // Help to find host instance
                                Object.defineProperty(remoteEntryInitOptions, 'shareScopeMap', {
                                    value: localShareScopeMap,
                                    // remoteEntryInitOptions will be traversed and assigned during container init, ,so this attribute is not allowed to be traversed
                                    enumerable: false
                                });
                                return [
                                    4,
                                    _this.host.hooks.lifecycle.beforeInitContainer.emit({
                                        shareScope: shareScope,
                                        // @ts-ignore shareScopeMap will be set by Object.defineProperty
                                        remoteEntryInitOptions: remoteEntryInitOptions,
                                        initScope: initScope,
                                        remoteInfo: _this.remoteInfo,
                                        origin: _this.host
                                    })
                                ];
                            case 2:
                                initContainerOptions = _state.sent();
                                if (typeof (remoteEntryExports == null ? void 0 : remoteEntryExports.init) === 'undefined') {
                                    error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_002, errorCodes.runtimeDescMap, {
                                        hostName: _this.host.name,
                                        remoteName: _this.remoteInfo.name,
                                        remoteEntryUrl: _this.remoteInfo.entry,
                                        remoteEntryKey: _this.remoteInfo.entryGlobalName
                                    }));
                                }
                                return [
                                    4,
                                    remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions)
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    4,
                                    _this.host.hooks.lifecycle.initContainer.emit(polyfills._extends({}, initContainerOptions, {
                                        id: id,
                                        remoteSnapshot: remoteSnapshot,
                                        remoteEntryExports: remoteEntryExports
                                    }))
                                ];
                            case 4:
                                _state.sent();
                                _state.label = 5;
                            case 5:
                                _this.lib = remoteEntryExports;
                                _this.inited = true;
                                return [
                                    4,
                                    _this.host.loaderHook.lifecycle.getModuleFactory.emit({
                                        remoteEntryExports: remoteEntryExports,
                                        expose: expose,
                                        moduleInfo: _this.remoteInfo
                                    })
                                ];
                            case 6:
                                moduleFactory = _state.sent();
                                if (!!moduleFactory) return [
                                    3,
                                    8
                                ];
                                return [
                                    4,
                                    remoteEntryExports.get(expose)
                                ];
                            case 7:
                                moduleFactory = _state.sent();
                                _state.label = 8;
                            case 8:
                                assert(moduleFactory, "".concat(getFMId(_this.remoteInfo), " remote don't export ").concat(expose, "."));
                                // keep symbol for module name always one format
                                symbolName = processModuleAlias(_this.remoteInfo.name, expose);
                                wrapModuleFactory = _this.wraperFactory(moduleFactory, symbolName);
                                if (!loadFactory) {
                                    return [
                                        2,
                                        wrapModuleFactory
                                    ];
                                }
                                return [
                                    4,
                                    wrapModuleFactory()
                                ];
                            case 9:
                                exposeContent = _state.sent();
                                return [
                                    2,
                                    exposeContent
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "wraperFactory",
            value: function wraperFactory(moduleFactory, id) {
                function defineModuleId(res, id) {
                    if (res && (typeof res === "undefined" ? "undefined" : _type_of(res)) === 'object' && Object.isExtensible(res) && !Object.getOwnPropertyDescriptor(res, Symbol.for('mf_module_id'))) {
                        Object.defineProperty(res, Symbol.for('mf_module_id'), {
                            value: id,
                            enumerable: false
                        });
                    }
                }
                if (_instanceof(moduleFactory, Promise)) {
                    return /*#__PURE__*/ _async_to_generator(function() {
                        var res;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        moduleFactory()
                                    ];
                                case 1:
                                    res = _state.sent();
                                    // This parameter is used for bridge debugging
                                    defineModuleId(res, id);
                                    return [
                                        2,
                                        res
                                    ];
                            }
                        });
                    });
                } else {
                    return function() {
                        var res = moduleFactory();
                        // This parameter is used for bridge debugging
                        defineModuleId(res, id);
                        return res;
                    };
                }
            }
        }
    ]);
    return Module;
}();
var SyncHook = /*#__PURE__*/ function() {
    function SyncHook(type) {
        _class_call_check(this, SyncHook);
        this.type = '';
        this.listeners = new Set();
        if (type) {
            this.type = type;
        }
    }
    _create_class(SyncHook, [
        {
            key: "on",
            value: function on(fn) {
                if (typeof fn === 'function') {
                    this.listeners.add(fn);
                }
            }
        },
        {
            key: "once",
            value: function once(fn) {
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var self = this;
                this.on(function wrapper() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    self.remove(wrapper);
                    // eslint-disable-next-line prefer-spread
                    return fn.apply(null, args);
                });
            }
        },
        {
            key: "emit",
            value: function emit() {
                for(var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++){
                    data[_key] = arguments[_key];
                }
                var result;
                if (this.listeners.size > 0) {
                    // eslint-disable-next-line prefer-spread
                    this.listeners.forEach(function(fn) {
                        result = fn.apply(void 0, _to_consumable_array(data));
                    });
                }
                return result;
            }
        },
        {
            key: "remove",
            value: function remove(fn) {
                this.listeners.delete(fn);
            }
        },
        {
            key: "removeAll",
            value: function removeAll() {
                this.listeners.clear();
            }
        }
    ]);
    return SyncHook;
}();
var AsyncHook = /*#__PURE__*/ function(SyncHook) {
    _inherits(AsyncHook, SyncHook);
    function AsyncHook() {
        _class_call_check(this, AsyncHook);
        return _call_super(this, AsyncHook, arguments);
    }
    _create_class(AsyncHook, [
        {
            key: "emit",
            value: function emit() {
                for(var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++){
                    data[_key] = arguments[_key];
                }
                var result;
                var ls = Array.from(this.listeners);
                if (ls.length > 0) {
                    var i = 0;
                    var call = function(prev) {
                        if (prev === false) {
                            return false; // Abort process
                        } else if (i < ls.length) {
                            return Promise.resolve(ls[i++].apply(null, data)).then(call);
                        } else {
                            return prev;
                        }
                    };
                    result = call();
                }
                return Promise.resolve(result);
            }
        }
    ]);
    return AsyncHook;
}(SyncHook);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function checkReturnData(originalData, returnedData) {
    if (!isObject(returnedData)) {
        return false;
    }
    if (originalData !== returnedData) {
        // eslint-disable-next-line no-restricted-syntax
        for(var key in originalData){
            if (!(key in returnedData)) {
                return false;
            }
        }
    }
    return true;
}
var SyncWaterfallHook = /*#__PURE__*/ function(SyncHook) {
    _inherits(SyncWaterfallHook, SyncHook);
    function SyncWaterfallHook(type) {
        _class_call_check(this, SyncWaterfallHook);
        var _this;
        _this = _call_super(this, SyncWaterfallHook), _this.onerror = error;
        _this.type = type;
        return _this;
    }
    _create_class(SyncWaterfallHook, [
        {
            key: "emit",
            value: function emit(data) {
                if (!isObject(data)) {
                    error('The data for the "'.concat(this.type, '" hook should be an object.'));
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var fn = _step.value;
                        try {
                            var tempData = fn(data);
                            if (checkReturnData(data, tempData)) {
                                data = tempData;
                            } else {
                                this.onerror('A plugin returned an unacceptable value for the "'.concat(this.type, '" type.'));
                                break;
                            }
                        } catch (e) {
                            warn(e);
                            this.onerror(e);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return data;
            }
        }
    ]);
    return SyncWaterfallHook;
}(SyncHook);
var AsyncWaterfallHook = /*#__PURE__*/ function(SyncHook) {
    _inherits(AsyncWaterfallHook, SyncHook);
    function AsyncWaterfallHook(type) {
        _class_call_check(this, AsyncWaterfallHook);
        var _this;
        _this = _call_super(this, AsyncWaterfallHook), _this.onerror = error;
        _this.type = type;
        return _this;
    }
    _create_class(AsyncWaterfallHook, [
        {
            key: "emit",
            value: function emit(data) {
                var _this = this;
                if (!isObject(data)) {
                    error('The response data for the "'.concat(this.type, '" hook must be an object.'));
                }
                var ls = Array.from(this.listeners);
                if (ls.length > 0) {
                    var i = 0;
                    var processError = function(e) {
                        warn(e);
                        _this.onerror(e);
                        return data;
                    };
                    var call = function(prevData) {
                        if (checkReturnData(data, prevData)) {
                            data = prevData;
                            if (i < ls.length) {
                                try {
                                    return Promise.resolve(ls[i++](data)).then(call, processError);
                                } catch (e) {
                                    return processError(e);
                                }
                            }
                        } else {
                            _this.onerror('A plugin returned an incorrect value for the "'.concat(_this.type, '" type.'));
                        }
                        return data;
                    };
                    return Promise.resolve(call(data));
                }
                return Promise.resolve(data);
            }
        }
    ]);
    return AsyncWaterfallHook;
}(SyncHook);
var PluginSystem = /*#__PURE__*/ function() {
    function PluginSystem(lifecycle) {
        _class_call_check(this, PluginSystem);
        this.registerPlugins = {};
        this.lifecycle = lifecycle;
        this.lifecycleKeys = Object.keys(lifecycle);
    }
    _create_class(PluginSystem, [
        {
            key: "applyPlugin",
            value: function applyPlugin(plugin) {
                var _this = this;
                assert(isPlainObject(plugin), 'Plugin configuration is invalid.');
                // The plugin's name is mandatory and must be unique
                var pluginName = plugin.name;
                assert(pluginName, 'A name must be provided by the plugin.');
                if (!this.registerPlugins[pluginName]) {
                    this.registerPlugins[pluginName] = plugin;
                    Object.keys(this.lifecycle).forEach(function(key) {
                        var pluginLife = plugin[key];
                        if (pluginLife) {
                            _this.lifecycle[key].on(pluginLife);
                        }
                    });
                }
            }
        },
        {
            key: "removePlugin",
            value: function removePlugin(pluginName) {
                var _this = this;
                assert(pluginName, 'A name is required.');
                var plugin = this.registerPlugins[pluginName];
                assert(plugin, 'The plugin "'.concat(pluginName, '" is not registered.'));
                Object.keys(plugin).forEach(function(key) {
                    if (key !== 'name') {
                        _this.lifecycle[key].remove(plugin[key]);
                    }
                });
            }
        },
        {
            // eslint-disable-next-line @typescript-eslint/no-shadow
            key: "inherit",
            value: function inherit(param) {
                var _this = this;
                var lifecycle = param.lifecycle, registerPlugins = param.registerPlugins;
                Object.keys(lifecycle).forEach(function(hookName) {
                    assert(!_this.lifecycle[hookName], 'The hook "'.concat(hookName, '" has a conflict and cannot be inherited.'));
                    _this.lifecycle[hookName] = lifecycle[hookName];
                });
                Object.keys(registerPlugins).forEach(function(pluginName) {
                    assert(!_this.registerPlugins[pluginName], 'The plugin "'.concat(pluginName, '" has a conflict and cannot be inherited.'));
                    _this.applyPlugin(registerPlugins[pluginName]);
                });
            }
        }
    ]);
    return PluginSystem;
}();
function defaultPreloadArgs(preloadConfig) {
    return polyfills._extends({
        resourceCategory: 'sync',
        share: true,
        depsRemote: true,
        prefetchInterface: false
    }, preloadConfig);
}
function formatPreloadArgs(remotes, preloadArgs) {
    return preloadArgs.map(function(args) {
        var remoteInfo = matchRemote(remotes, args.nameOrAlias);
        assert(remoteInfo, "Unable to preload ".concat(args.nameOrAlias, " as it is not included in ").concat(!remoteInfo && sdk.safeToString({
            remoteInfo: remoteInfo,
            remotes: remotes
        })));
        return {
            remote: remoteInfo,
            preloadConfig: defaultPreloadArgs(args)
        };
    });
}
function normalizePreloadExposes(exposes) {
    if (!exposes) {
        return [];
    }
    return exposes.map(function(expose) {
        if (expose === '.') {
            return expose;
        }
        if (expose.startsWith('./')) {
            return expose.replace('./', '');
        }
        return expose;
    });
}
function preloadAssets(remoteInfo, host, assets) {
    var useLinkPreload = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
    var cssAssets = assets.cssAssets, jsAssetsWithoutEntry = assets.jsAssetsWithoutEntry, entryAssets = assets.entryAssets;
    if (host.options.inBrowser) {
        entryAssets.forEach(function(asset) {
            var moduleInfo = asset.moduleInfo;
            var module = host.moduleCache.get(remoteInfo.name);
            if (module) {
                getRemoteEntry({
                    origin: host,
                    remoteInfo: moduleInfo,
                    remoteEntryExports: module.remoteEntryExports
                });
            } else {
                getRemoteEntry({
                    origin: host,
                    remoteInfo: moduleInfo,
                    remoteEntryExports: undefined
                });
            }
        });
        if (useLinkPreload) {
            var defaultAttrs = {
                rel: 'preload',
                as: 'style'
            };
            cssAssets.forEach(function(cssUrl) {
                var _sdk_createLink = sdk.createLink({
                    url: cssUrl,
                    cb: function() {
                    // noop
                    },
                    attrs: defaultAttrs,
                    createLinkHook: function(url, attrs) {
                        var res = host.loaderHook.lifecycle.createLink.emit({
                            url: url,
                            attrs: attrs
                        });
                        if (_instanceof(res, HTMLLinkElement)) {
                            return res;
                        }
                        return;
                    }
                }), cssEl = _sdk_createLink.link, needAttach = _sdk_createLink.needAttach;
                needAttach && document.head.appendChild(cssEl);
            });
        } else {
            var defaultAttrs1 = {
                rel: 'stylesheet',
                type: 'text/css'
            };
            cssAssets.forEach(function(cssUrl) {
                var _sdk_createLink = sdk.createLink({
                    url: cssUrl,
                    cb: function() {
                    // noop
                    },
                    attrs: defaultAttrs1,
                    createLinkHook: function(url, attrs) {
                        var res = host.loaderHook.lifecycle.createLink.emit({
                            url: url,
                            attrs: attrs
                        });
                        if (_instanceof(res, HTMLLinkElement)) {
                            return res;
                        }
                        return;
                    },
                    needDeleteLink: false
                }), cssEl = _sdk_createLink.link, needAttach = _sdk_createLink.needAttach;
                needAttach && document.head.appendChild(cssEl);
            });
        }
        if (useLinkPreload) {
            var defaultAttrs2 = {
                rel: 'preload',
                as: 'script'
            };
            jsAssetsWithoutEntry.forEach(function(jsUrl) {
                var _sdk_createLink = sdk.createLink({
                    url: jsUrl,
                    cb: function() {
                    // noop
                    },
                    attrs: defaultAttrs2,
                    createLinkHook: function(url, attrs) {
                        var res = host.loaderHook.lifecycle.createLink.emit({
                            url: url,
                            attrs: attrs
                        });
                        if (_instanceof(res, HTMLLinkElement)) {
                            return res;
                        }
                        return;
                    }
                }), linkEl = _sdk_createLink.link, needAttach = _sdk_createLink.needAttach;
                needAttach && document.head.appendChild(linkEl);
            });
        } else {
            var defaultAttrs3 = {
                fetchpriority: 'high',
                type: (remoteInfo == null ? void 0 : remoteInfo.type) === 'module' ? 'module' : 'text/javascript'
            };
            jsAssetsWithoutEntry.forEach(function(jsUrl) {
                var _sdk_createScript = sdk.createScript({
                    url: jsUrl,
                    cb: function() {
                    // noop
                    },
                    attrs: defaultAttrs3,
                    createScriptHook: function(url, attrs) {
                        var res = host.loaderHook.lifecycle.createScript.emit({
                            url: url,
                            attrs: attrs
                        });
                        if (_instanceof(res, HTMLScriptElement)) {
                            return res;
                        }
                        return;
                    },
                    needDeleteScript: true
                }), scriptEl = _sdk_createScript.script, needAttach = _sdk_createScript.needAttach;
                needAttach && document.head.appendChild(scriptEl);
            });
        }
    }
}
function assignRemoteInfo(remoteInfo, remoteSnapshot) {
    var remoteEntryInfo = getRemoteEntryInfoFromSnapshot(remoteSnapshot);
    if (!remoteEntryInfo.url) {
        error("The attribute remoteEntry of ".concat(remoteInfo.name, " must not be undefined."));
    }
    var entryUrl = sdk.getResourceUrl(remoteSnapshot, remoteEntryInfo.url);
    if (!sdk.isBrowserEnv() && !entryUrl.startsWith('http')) {
        entryUrl = "https:".concat(entryUrl);
    }
    remoteInfo.type = remoteEntryInfo.type;
    remoteInfo.entryGlobalName = remoteEntryInfo.globalName;
    remoteInfo.entry = entryUrl;
    remoteInfo.version = remoteSnapshot.version;
    remoteInfo.buildVersion = remoteSnapshot.buildVersion;
}
function snapshotPlugin() {
    return {
        name: 'snapshot-plugin',
        afterResolve: function afterResolve(args) {
            return _async_to_generator(function() {
                var remote, pkgNameOrAlias, expose, origin, remoteInfo, id, _ref, remoteSnapshot, globalSnapshot, preloadOptions, assets;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            remote = args.remote, pkgNameOrAlias = args.pkgNameOrAlias, expose = args.expose, origin = args.origin, remoteInfo = args.remoteInfo, id = args.id;
                            if (!(!isRemoteInfoWithEntry(remote) || !isPureRemoteEntry(remote))) return [
                                3,
                                3
                            ];
                            return [
                                4,
                                origin.snapshotHandler.loadRemoteSnapshotInfo({
                                    moduleInfo: remote,
                                    id: id
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), remoteSnapshot = _ref.remoteSnapshot, globalSnapshot = _ref.globalSnapshot;
                            assignRemoteInfo(remoteInfo, remoteSnapshot);
                            // preloading assets
                            preloadOptions = {
                                remote: remote,
                                preloadConfig: {
                                    nameOrAlias: pkgNameOrAlias,
                                    exposes: [
                                        expose
                                    ],
                                    resourceCategory: 'sync',
                                    share: false,
                                    depsRemote: false
                                }
                            };
                            return [
                                4,
                                origin.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
                                    origin: origin,
                                    preloadOptions: preloadOptions,
                                    remoteInfo: remoteInfo,
                                    remote: remote,
                                    remoteSnapshot: remoteSnapshot,
                                    globalSnapshot: globalSnapshot
                                })
                            ];
                        case 2:
                            assets = _state.sent();
                            if (assets) {
                                preloadAssets(remoteInfo, origin, assets, false);
                            }
                            return [
                                2,
                                polyfills._extends({}, args, {
                                    remoteSnapshot: remoteSnapshot
                                })
                            ];
                        case 3:
                            return [
                                2,
                                args
                            ];
                    }
                });
            })();
        }
    };
}
// name
// name:version
function splitId(id) {
    var splitInfo = id.split(':');
    if (splitInfo.length === 1) {
        return {
            name: splitInfo[0],
            version: undefined
        };
    } else if (splitInfo.length === 2) {
        return {
            name: splitInfo[0],
            version: splitInfo[1]
        };
    } else {
        return {
            name: splitInfo[1],
            version: splitInfo[2]
        };
    }
}
// Traverse all nodes in moduleInfo and traverse the entire snapshot
function traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot) {
    var memo = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, remoteSnapshot = arguments.length > 5 ? arguments[5] : void 0;
    var id = getFMId(remoteInfo);
    var _getInfoWithoutType = getInfoWithoutType(globalSnapshot, id), snapshotValue = _getInfoWithoutType.value;
    var effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;
    if (effectiveRemoteSnapshot && !sdk.isManifestProvider(effectiveRemoteSnapshot)) {
        traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);
        if (effectiveRemoteSnapshot.remotesInfo) {
            var remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = remoteKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var key = _step.value;
                    if (memo[key]) {
                        continue;
                    }
                    memo[key] = true;
                    var subRemoteInfo = splitId(key);
                    var remoteValue = effectiveRemoteSnapshot.remotesInfo[key];
                    traverseModuleInfo(globalSnapshot, {
                        name: subRemoteInfo.name,
                        version: remoteValue.matchedVersion
                    }, traverse, false, memo, undefined);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }
}
var isExisted = function(type, url) {
    return document.querySelector("".concat(type, "[").concat(type === 'link' ? 'href' : 'src', '="').concat(url, '"]'));
};
// eslint-disable-next-line max-lines-per-function
function generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {
    var cssAssets = [];
    var jsAssets = [];
    var entryAssets = [];
    var loadedSharedJsAssets = new Set();
    var loadedSharedCssAssets = new Set();
    var options = origin.options;
    var rootPreloadConfig = preloadOptions.preloadConfig;
    var depsRemote = rootPreloadConfig.depsRemote;
    var memo = {};
    traverseModuleInfo(globalSnapshot, remote, function(moduleInfoSnapshot, remoteInfo, isRoot) {
        var handleAssets = function handleAssets(assets) {
            var assetsRes = assets.map(function(asset) {
                return sdk.getResourceUrl(moduleInfoSnapshot, asset);
            });
            if (preloadConfig.filter) {
                return assetsRes.filter(preloadConfig.filter);
            }
            return assetsRes;
        };
        var preloadConfig;
        if (isRoot) {
            preloadConfig = rootPreloadConfig;
        } else {
            if (Array.isArray(depsRemote)) {
                // eslint-disable-next-line array-callback-return
                var findPreloadConfig = depsRemote.find(function(remoteConfig) {
                    if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) {
                        return true;
                    }
                    return false;
                });
                if (!findPreloadConfig) {
                    return;
                }
                preloadConfig = defaultPreloadArgs(findPreloadConfig);
            } else if (depsRemote === true) {
                preloadConfig = rootPreloadConfig;
            } else {
                return;
            }
        }
        var remoteEntryUrl = sdk.getResourceUrl(moduleInfoSnapshot, getRemoteEntryInfoFromSnapshot(moduleInfoSnapshot).url);
        if (remoteEntryUrl) {
            entryAssets.push({
                name: remoteInfo.name,
                moduleInfo: {
                    name: remoteInfo.name,
                    entry: remoteEntryUrl,
                    type: 'remoteEntryType' in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : 'global',
                    entryGlobalName: 'globalName' in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,
                    shareScope: '',
                    version: 'version' in moduleInfoSnapshot ? moduleInfoSnapshot.version : undefined
                },
                url: remoteEntryUrl
            });
        }
        var moduleAssetsInfo = 'modules' in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];
        var normalizedPreloadExposes = normalizePreloadExposes(preloadConfig.exposes);
        if (normalizedPreloadExposes.length && 'modules' in moduleInfoSnapshot) {
            var _moduleInfoSnapshot_modules;
            moduleAssetsInfo = moduleInfoSnapshot == null ? void 0 : (_moduleInfoSnapshot_modules = moduleInfoSnapshot.modules) == null ? void 0 : _moduleInfoSnapshot_modules.reduce(function(assets, moduleAssetInfo) {
                if ((normalizedPreloadExposes == null ? void 0 : normalizedPreloadExposes.indexOf(moduleAssetInfo.moduleName)) !== -1) {
                    assets.push(moduleAssetInfo);
                }
                return assets;
            }, []);
        }
        if (moduleAssetsInfo) {
            var assetsLength = moduleAssetsInfo.length;
            for(var index = 0; index < assetsLength; index++){
                var assetsInfo = moduleAssetsInfo[index];
                var exposeFullPath = "".concat(remoteInfo.name, "/").concat(assetsInfo.moduleName);
                origin.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                    id: assetsInfo.moduleName === '.' ? remoteInfo.name : exposeFullPath,
                    name: remoteInfo.name,
                    remoteSnapshot: moduleInfoSnapshot,
                    preloadConfig: preloadConfig,
                    remote: remoteInfo,
                    origin: origin
                });
                var preloaded = getPreloaded(exposeFullPath);
                if (preloaded) {
                    continue;
                }
                if (preloadConfig.resourceCategory === 'all') {
                    var _cssAssets, _cssAssets1, _jsAssets, _jsAssets1;
                    (_cssAssets = cssAssets).push.apply(_cssAssets, _to_consumable_array(handleAssets(assetsInfo.assets.css.async)));
                    (_cssAssets1 = cssAssets).push.apply(_cssAssets1, _to_consumable_array(handleAssets(assetsInfo.assets.css.sync)));
                    (_jsAssets = jsAssets).push.apply(_jsAssets, _to_consumable_array(handleAssets(assetsInfo.assets.js.async)));
                    (_jsAssets1 = jsAssets).push.apply(_jsAssets1, _to_consumable_array(handleAssets(assetsInfo.assets.js.sync)));
                // eslint-disable-next-line no-constant-condition
                } else if (preloadConfig.resourceCategory = 'sync') {
                    var _cssAssets2, _jsAssets2;
                    (_cssAssets2 = cssAssets).push.apply(_cssAssets2, _to_consumable_array(handleAssets(assetsInfo.assets.css.sync)));
                    (_jsAssets2 = jsAssets).push.apply(_jsAssets2, _to_consumable_array(handleAssets(assetsInfo.assets.js.sync)));
                }
                setPreloaded(exposeFullPath);
            }
        }
    }, true, memo, remoteSnapshot);
    if (remoteSnapshot.shared) {
        var collectSharedAssets = function(shareInfo, snapshotShared) {
            var registeredShared = getRegisteredShare(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.sharedHandler.hooks.lifecycle.resolveShare);
            // If the global share does not exist, or the lib function does not exist, it means that the shared has not been loaded yet and can be preloaded.
            if (registeredShared && typeof registeredShared.lib === 'function') {
                snapshotShared.assets.js.sync.forEach(function(asset) {
                    loadedSharedJsAssets.add(asset);
                });
                snapshotShared.assets.css.sync.forEach(function(asset) {
                    loadedSharedCssAssets.add(asset);
                });
            }
        };
        remoteSnapshot.shared.forEach(function(shared) {
            var _options_shared;
            var shareInfos = (_options_shared = options.shared) == null ? void 0 : _options_shared[shared.sharedName];
            if (!shareInfos) {
                return;
            }
            // if no version, preload all shared
            var sharedOptions = shared.version ? shareInfos.find(function(s) {
                return s.version === shared.version;
            }) : shareInfos;
            if (!sharedOptions) {
                return;
            }
            var arrayShareInfo = arrayOptions(sharedOptions);
            arrayShareInfo.forEach(function(s) {
                collectSharedAssets(s, shared);
            });
        });
    }
    var needPreloadJsAssets = jsAssets.filter(function(asset) {
        return !loadedSharedJsAssets.has(asset) && !isExisted('script', asset);
    });
    var needPreloadCssAssets = cssAssets.filter(function(asset) {
        return !loadedSharedCssAssets.has(asset) && !isExisted('link', asset);
    });
    return {
        cssAssets: needPreloadCssAssets,
        jsAssetsWithoutEntry: needPreloadJsAssets,
        entryAssets: entryAssets.filter(function(entry) {
            return !isExisted('script', entry.url);
        })
    };
}
var generatePreloadAssetsPlugin = function generatePreloadAssetsPlugin() {
    return {
        name: 'generate-preload-assets-plugin',
        generatePreloadAssets: function generatePreloadAssets1(args) {
            return _async_to_generator(function() {
                var origin, preloadOptions, remoteInfo, remote, globalSnapshot, remoteSnapshot, assets;
                return _ts_generator(this, function(_state) {
                    origin = args.origin, preloadOptions = args.preloadOptions, remoteInfo = args.remoteInfo, remote = args.remote, globalSnapshot = args.globalSnapshot, remoteSnapshot = args.remoteSnapshot;
                    if (!sdk.isBrowserEnv()) {
                        return [
                            2,
                            {
                                cssAssets: [],
                                jsAssetsWithoutEntry: [],
                                entryAssets: []
                            }
                        ];
                    }
                    if (isRemoteInfoWithEntry(remote) && isPureRemoteEntry(remote)) {
                        return [
                            2,
                            {
                                cssAssets: [],
                                jsAssetsWithoutEntry: [],
                                entryAssets: [
                                    {
                                        name: remote.name,
                                        url: remote.entry,
                                        moduleInfo: {
                                            name: remoteInfo.name,
                                            entry: remote.entry,
                                            type: remoteInfo.type || 'global',
                                            entryGlobalName: '',
                                            shareScope: ''
                                        }
                                    }
                                ]
                            }
                        ];
                    }
                    assignRemoteInfo(remoteInfo, remoteSnapshot);
                    assets = generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);
                    return [
                        2,
                        assets
                    ];
                });
            })();
        }
    };
};
function getGlobalRemoteInfo(moduleInfo, origin) {
    var hostGlobalSnapshot = getGlobalSnapshotInfoByModuleInfo({
        name: origin.name,
        version: origin.options.version
    });
    // get remote detail info from global
    var globalRemoteInfo = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;
    if (globalRemoteInfo && globalRemoteInfo.matchedVersion) {
        return {
            hostGlobalSnapshot: hostGlobalSnapshot,
            globalSnapshot: getGlobalSnapshot(),
            remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
                name: moduleInfo.name,
                version: globalRemoteInfo.matchedVersion
            })
        };
    }
    return {
        hostGlobalSnapshot: undefined,
        globalSnapshot: getGlobalSnapshot(),
        remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
            name: moduleInfo.name,
            version: 'version' in moduleInfo ? moduleInfo.version : undefined
        })
    };
}
var SnapshotHandler = /*#__PURE__*/ function() {
    function SnapshotHandler(HostInstance) {
        _class_call_check(this, SnapshotHandler);
        this.loadingHostSnapshot = null;
        this.manifestCache = new Map();
        this.hooks = new PluginSystem({
            beforeLoadRemoteSnapshot: new AsyncHook('beforeLoadRemoteSnapshot'),
            loadSnapshot: new AsyncWaterfallHook('loadGlobalSnapshot'),
            loadRemoteSnapshot: new AsyncWaterfallHook('loadRemoteSnapshot'),
            afterLoadSnapshot: new AsyncWaterfallHook('afterLoadSnapshot')
        });
        this.manifestLoading = Global.__FEDERATION__.__MANIFEST_LOADING__;
        this.HostInstance = HostInstance;
        this.loaderHook = HostInstance.loaderHook;
    }
    _create_class(SnapshotHandler, [
        {
            key: "loadRemoteSnapshotInfo",
            value: // eslint-disable-next-line max-lines-per-function
            function loadRemoteSnapshotInfo(param) {
                var moduleInfo = param.moduleInfo, id = param.id, expose = param.expose;
                var _this = this;
                return _async_to_generator(function() {
                    var options, hostSnapshot, _this_getGlobalRemoteInfo, hostGlobalSnapshot, remoteSnapshot, globalSnapshot, _ref, globalRemoteSnapshot, globalSnapshotRes, mSnapshot, gSnapshot, remoteEntry, moduleSnapshot, globalSnapshotRes1, _ref1, remoteSnapshotRes, moduleSnapshot1, globalSnapshotRes2, _ref2, remoteSnapshotRes1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                options = _this.HostInstance.options;
                                return [
                                    4,
                                    _this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
                                        options: options,
                                        moduleInfo: moduleInfo
                                    })
                                ];
                            case 1:
                                _state.sent();
                                hostSnapshot = getGlobalSnapshotInfoByModuleInfo({
                                    name: _this.HostInstance.options.name,
                                    version: _this.HostInstance.options.version
                                });
                                if (!hostSnapshot) {
                                    hostSnapshot = {
                                        version: _this.HostInstance.options.version || '',
                                        remoteEntry: '',
                                        remotesInfo: {}
                                    };
                                    addGlobalSnapshot(_define_property({}, _this.HostInstance.options.name, hostSnapshot));
                                }
                                // In dynamic loadRemote scenarios, incomplete remotesInfo delivery may occur. In such cases, the remotesInfo in the host needs to be completed in the snapshot at runtime.
                                // This ensures the snapshot's integrity and helps the chrome plugin correctly identify all producer modules, ensuring that proxyable producer modules will not be missing.
                                if (hostSnapshot && 'remotesInfo' in hostSnapshot && !getInfoWithoutType(hostSnapshot.remotesInfo, moduleInfo.name).value) {
                                    if ('version' in moduleInfo || 'entry' in moduleInfo) {
                                        hostSnapshot.remotesInfo = polyfills._extends({}, hostSnapshot == null ? void 0 : hostSnapshot.remotesInfo, _define_property({}, moduleInfo.name, {
                                            matchedVersion: 'version' in moduleInfo ? moduleInfo.version : moduleInfo.entry
                                        }));
                                    }
                                }
                                _this_getGlobalRemoteInfo = _this.getGlobalRemoteInfo(moduleInfo), hostGlobalSnapshot = _this_getGlobalRemoteInfo.hostGlobalSnapshot, remoteSnapshot = _this_getGlobalRemoteInfo.remoteSnapshot, globalSnapshot = _this_getGlobalRemoteInfo.globalSnapshot;
                                return [
                                    4,
                                    _this.hooks.lifecycle.loadSnapshot.emit({
                                        options: options,
                                        moduleInfo: moduleInfo,
                                        hostGlobalSnapshot: hostGlobalSnapshot,
                                        remoteSnapshot: remoteSnapshot,
                                        globalSnapshot: globalSnapshot
                                    })
                                ];
                            case 2:
                                _ref = _state.sent(), globalRemoteSnapshot = _ref.remoteSnapshot, globalSnapshotRes = _ref.globalSnapshot;
                                if (!globalRemoteSnapshot) return [
                                    3,
                                    7
                                ];
                                if (!sdk.isManifestProvider(globalRemoteSnapshot)) return [
                                    3,
                                    4
                                ];
                                remoteEntry = sdk.isBrowserEnv() ? globalRemoteSnapshot.remoteEntry : globalRemoteSnapshot.ssrRemoteEntry || globalRemoteSnapshot.remoteEntry || '';
                                return [
                                    4,
                                    _this.getManifestJson(remoteEntry, moduleInfo, {})
                                ];
                            case 3:
                                moduleSnapshot = _state.sent();
                                // eslint-disable-next-line @typescript-eslint/no-shadow
                                globalSnapshotRes1 = setGlobalSnapshotInfoByModuleInfo(polyfills._extends({}, moduleInfo, {
                                    // The global remote may be overridden
                                    // Therefore, set the snapshot key to the global address of the actual request
                                    entry: remoteEntry
                                }), moduleSnapshot);
                                mSnapshot = moduleSnapshot;
                                gSnapshot = globalSnapshotRes1;
                                return [
                                    3,
                                    6
                                ];
                            case 4:
                                return [
                                    4,
                                    _this.hooks.lifecycle.loadRemoteSnapshot.emit({
                                        options: _this.HostInstance.options,
                                        moduleInfo: moduleInfo,
                                        remoteSnapshot: globalRemoteSnapshot,
                                        from: 'global'
                                    })
                                ];
                            case 5:
                                _ref1 = _state.sent(), remoteSnapshotRes = _ref1.remoteSnapshot;
                                mSnapshot = remoteSnapshotRes;
                                gSnapshot = globalSnapshotRes;
                                _state.label = 6;
                            case 6:
                                return [
                                    3,
                                    11
                                ];
                            case 7:
                                if (!isRemoteInfoWithEntry(moduleInfo)) return [
                                    3,
                                    10
                                ];
                                return [
                                    4,
                                    _this.getManifestJson(moduleInfo.entry, moduleInfo, {})
                                ];
                            case 8:
                                moduleSnapshot1 = _state.sent();
                                // eslint-disable-next-line @typescript-eslint/no-shadow
                                globalSnapshotRes2 = setGlobalSnapshotInfoByModuleInfo(moduleInfo, moduleSnapshot1);
                                return [
                                    4,
                                    _this.hooks.lifecycle.loadRemoteSnapshot.emit({
                                        options: _this.HostInstance.options,
                                        moduleInfo: moduleInfo,
                                        remoteSnapshot: moduleSnapshot1,
                                        from: 'global'
                                    })
                                ];
                            case 9:
                                _ref2 = _state.sent(), remoteSnapshotRes1 = _ref2.remoteSnapshot;
                                mSnapshot = remoteSnapshotRes1;
                                gSnapshot = globalSnapshotRes2;
                                return [
                                    3,
                                    11
                                ];
                            case 10:
                                error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_007, errorCodes.runtimeDescMap, {
                                    hostName: moduleInfo.name,
                                    hostVersion: moduleInfo.version,
                                    globalSnapshot: JSON.stringify(globalSnapshotRes)
                                }));
                                _state.label = 11;
                            case 11:
                                return [
                                    4,
                                    _this.hooks.lifecycle.afterLoadSnapshot.emit({
                                        id: id,
                                        host: _this.HostInstance,
                                        options: options,
                                        moduleInfo: moduleInfo,
                                        remoteSnapshot: mSnapshot
                                    })
                                ];
                            case 12:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        remoteSnapshot: mSnapshot,
                                        globalSnapshot: gSnapshot
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getGlobalRemoteInfo",
            value: function getGlobalRemoteInfo1(moduleInfo) {
                return getGlobalRemoteInfo(moduleInfo, this.HostInstance);
            }
        },
        {
            key: "getManifestJson",
            value: function getManifestJson(manifestUrl, moduleInfo, extraOptions) {
                var _this = this;
                return _async_to_generator(function() {
                    var getManifest, asyncLoadProcess;
                    return _ts_generator(this, function(_state) {
                        getManifest = /*#__PURE__*/ function() {
                            var _ref = _async_to_generator(function() {
                                var manifestJson, res, err;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            manifestJson = _this.manifestCache.get(manifestUrl);
                                            if (manifestJson) {
                                                return [
                                                    2,
                                                    manifestJson
                                                ];
                                            }
                                            _state.label = 1;
                                        case 1:
                                            _state.trys.push([
                                                1,
                                                6,
                                                ,
                                                8
                                            ]);
                                            return [
                                                4,
                                                _this.loaderHook.lifecycle.fetch.emit(manifestUrl, {})
                                            ];
                                        case 2:
                                            res = _state.sent();
                                            if (!(!res || !_instanceof(res, Response))) return [
                                                3,
                                                4
                                            ];
                                            return [
                                                4,
                                                fetch(manifestUrl, {})
                                            ];
                                        case 3:
                                            res = _state.sent();
                                            _state.label = 4;
                                        case 4:
                                            return [
                                                4,
                                                res.json()
                                            ];
                                        case 5:
                                            manifestJson = _state.sent();
                                            return [
                                                3,
                                                8
                                            ];
                                        case 6:
                                            err = _state.sent();
                                            return [
                                                4,
                                                _this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                                                    id: manifestUrl,
                                                    error: err,
                                                    from: 'runtime',
                                                    lifecycle: 'afterResolve',
                                                    origin: _this.HostInstance
                                                })
                                            ];
                                        case 7:
                                            manifestJson = _state.sent();
                                            if (!manifestJson) {
                                                delete _this.manifestLoading[manifestUrl];
                                                error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_003, errorCodes.runtimeDescMap, {
                                                    manifestUrl: manifestUrl,
                                                    moduleName: moduleInfo.name,
                                                    hostName: _this.HostInstance.options.name
                                                }, "".concat(err)));
                                            }
                                            return [
                                                3,
                                                8
                                            ];
                                        case 8:
                                            assert(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, "".concat(manifestUrl, " is not a federation manifest"));
                                            _this.manifestCache.set(manifestUrl, manifestJson);
                                            return [
                                                2,
                                                manifestJson
                                            ];
                                    }
                                });
                            });
                            return function getManifest() {
                                return _ref.apply(this, arguments);
                            };
                        }();
                        asyncLoadProcess = /*#__PURE__*/ function() {
                            var _ref = _async_to_generator(function() {
                                var manifestJson, remoteSnapshot, _ref, remoteSnapshotRes;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                getManifest()
                                            ];
                                        case 1:
                                            manifestJson = _state.sent();
                                            remoteSnapshot = sdk.generateSnapshotFromManifest(manifestJson, {
                                                version: manifestUrl
                                            });
                                            return [
                                                4,
                                                _this.hooks.lifecycle.loadRemoteSnapshot.emit({
                                                    options: _this.HostInstance.options,
                                                    moduleInfo: moduleInfo,
                                                    manifestJson: manifestJson,
                                                    remoteSnapshot: remoteSnapshot,
                                                    manifestUrl: manifestUrl,
                                                    from: 'manifest'
                                                })
                                            ];
                                        case 2:
                                            _ref = _state.sent(), remoteSnapshotRes = _ref.remoteSnapshot;
                                            return [
                                                2,
                                                remoteSnapshotRes
                                            ];
                                    }
                                });
                            });
                            return function asyncLoadProcess() {
                                return _ref.apply(this, arguments);
                            };
                        }();
                        if (!_this.manifestLoading[manifestUrl]) {
                            _this.manifestLoading[manifestUrl] = asyncLoadProcess().then(function(res) {
                                return res;
                            });
                        }
                        return [
                            2,
                            _this.manifestLoading[manifestUrl]
                        ];
                    });
                })();
            }
        }
    ]);
    return SnapshotHandler;
}();
var SharedHandler = /*#__PURE__*/ function() {
    function SharedHandler(host) {
        _class_call_check(this, SharedHandler);
        this.hooks = new PluginSystem({
            afterResolve: new AsyncWaterfallHook('afterResolve'),
            beforeLoadShare: new AsyncWaterfallHook('beforeLoadShare'),
            // not used yet
            loadShare: new AsyncHook(),
            resolveShare: new SyncWaterfallHook('resolveShare'),
            // maybe will change, temporarily for internal use only
            initContainerShareScopeMap: new SyncWaterfallHook('initContainerShareScopeMap')
        });
        this.host = host;
        this.shareScopeMap = {};
        this.initTokens = {};
        this._setGlobalShareScopeMap(host.options);
    }
    _create_class(SharedHandler, [
        {
            // register shared in shareScopeMap
            key: "registerShared",
            value: function registerShared(globalOptions, userOptions) {
                var _this = this;
                var _formatShareConfigs = formatShareConfigs(globalOptions, userOptions), shareInfos = _formatShareConfigs.shareInfos, shared = _formatShareConfigs.shared;
                var sharedKeys = Object.keys(shareInfos);
                sharedKeys.forEach(function(sharedKey) {
                    var sharedVals = shareInfos[sharedKey];
                    sharedVals.forEach(function(sharedVal) {
                        var registeredShared = getRegisteredShare(_this.shareScopeMap, sharedKey, sharedVal, _this.hooks.lifecycle.resolveShare);
                        if (!registeredShared && sharedVal && sharedVal.lib) {
                            _this.setShared({
                                pkgName: sharedKey,
                                lib: sharedVal.lib,
                                get: sharedVal.get,
                                loaded: true,
                                shared: sharedVal,
                                from: userOptions.name
                            });
                        }
                    });
                });
                return {
                    shareInfos: shareInfos,
                    shared: shared
                };
            }
        },
        {
            key: "loadShare",
            value: function loadShare(pkgName, extraOptions) {
                var _this = this;
                return _async_to_generator(function() {
                    var host, shareInfo, loadShareRes, shareInfoRes, registeredShared, addUseIn, factory, asyncLoadProcess, loading, asyncLoadProcess1, loading1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                host = _this.host;
                                // This function performs the following steps:
                                // 1. Checks if the currently loaded share already exists, if not, it throws an error
                                // 2. Searches globally for a matching share, if found, it uses it directly
                                // 3. If not found, it retrieves it from the current share and stores the obtained share globally.
                                shareInfo = getTargetSharedOptions({
                                    pkgName: pkgName,
                                    extraOptions: extraOptions,
                                    shareInfos: host.options.shared
                                });
                                if (!(shareInfo == null ? void 0 : shareInfo.scope)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    Promise.all(shareInfo.scope.map(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(shareScope) {
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            Promise.all(_this.initializeSharing(shareScope, {
                                                                strategy: shareInfo.strategy
                                                            }))
                                                        ];
                                                    case 1:
                                                        _state.sent();
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(shareScope) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()))
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    _this.hooks.lifecycle.beforeLoadShare.emit({
                                        pkgName: pkgName,
                                        shareInfo: shareInfo,
                                        shared: host.options.shared,
                                        origin: host
                                    })
                                ];
                            case 3:
                                loadShareRes = _state.sent();
                                shareInfoRes = loadShareRes.shareInfo;
                                // Assert that shareInfoRes exists, if not, throw an error
                                assert(shareInfoRes, "Cannot find ".concat(pkgName, " Share in the ").concat(host.options.name, ". Please ensure that the ").concat(pkgName, " Share parameters have been injected"));
                                // Retrieve from cache
                                registeredShared = getRegisteredShare(_this.shareScopeMap, pkgName, shareInfoRes, _this.hooks.lifecycle.resolveShare);
                                addUseIn = function(shared) {
                                    if (!shared.useIn) {
                                        shared.useIn = [];
                                    }
                                    addUniqueItem(shared.useIn, host.options.name);
                                };
                                if (!(registeredShared && registeredShared.lib)) return [
                                    3,
                                    4
                                ];
                                addUseIn(registeredShared);
                                return [
                                    2,
                                    registeredShared.lib
                                ];
                            case 4:
                                if (!(registeredShared && registeredShared.loading && !registeredShared.loaded)) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    registeredShared.loading
                                ];
                            case 5:
                                factory = _state.sent();
                                registeredShared.loaded = true;
                                if (!registeredShared.lib) {
                                    registeredShared.lib = factory;
                                }
                                addUseIn(registeredShared);
                                return [
                                    2,
                                    factory
                                ];
                            case 6:
                                if (registeredShared) {
                                    asyncLoadProcess = /*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function() {
                                            var factory, gShared;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            registeredShared.get()
                                                        ];
                                                    case 1:
                                                        factory = _state.sent();
                                                        shareInfoRes.lib = factory;
                                                        shareInfoRes.loaded = true;
                                                        addUseIn(shareInfoRes);
                                                        gShared = getRegisteredShare(_this.shareScopeMap, pkgName, shareInfoRes, _this.hooks.lifecycle.resolveShare);
                                                        if (gShared) {
                                                            gShared.lib = factory;
                                                            gShared.loaded = true;
                                                        }
                                                        return [
                                                            2,
                                                            factory
                                                        ];
                                                }
                                            });
                                        });
                                        return function asyncLoadProcess() {
                                            return _ref.apply(this, arguments);
                                        };
                                    }();
                                    loading = asyncLoadProcess();
                                    _this.setShared({
                                        pkgName: pkgName,
                                        loaded: false,
                                        shared: registeredShared,
                                        from: host.options.name,
                                        lib: null,
                                        loading: loading
                                    });
                                    return [
                                        2,
                                        loading
                                    ];
                                } else {
                                    if (extraOptions == null ? void 0 : extraOptions.customShareInfo) {
                                        return [
                                            2,
                                            false
                                        ];
                                    }
                                    asyncLoadProcess1 = /*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function() {
                                            var factory, gShared;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            shareInfoRes.get()
                                                        ];
                                                    case 1:
                                                        factory = _state.sent();
                                                        shareInfoRes.lib = factory;
                                                        shareInfoRes.loaded = true;
                                                        addUseIn(shareInfoRes);
                                                        gShared = getRegisteredShare(_this.shareScopeMap, pkgName, shareInfoRes, _this.hooks.lifecycle.resolveShare);
                                                        if (gShared) {
                                                            gShared.lib = factory;
                                                            gShared.loaded = true;
                                                        }
                                                        return [
                                                            2,
                                                            factory
                                                        ];
                                                }
                                            });
                                        });
                                        return function asyncLoadProcess1() {
                                            return _ref.apply(this, arguments);
                                        };
                                    }();
                                    loading1 = asyncLoadProcess1();
                                    _this.setShared({
                                        pkgName: pkgName,
                                        loaded: false,
                                        shared: shareInfoRes,
                                        from: host.options.name,
                                        lib: null,
                                        loading: loading1
                                    });
                                    return [
                                        2,
                                        loading1
                                    ];
                                }
                                _state.label = 7;
                            case 7:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
   * This function initializes the sharing sequence (executed only once per share scope).
   * It accepts one argument, the name of the share scope.
   * If the share scope does not exist, it creates one.
   */ // eslint-disable-next-line @typescript-eslint/member-ordering
            key: "initializeSharing",
            value: function initializeSharing() {
                var shareScopeName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_SCOPE, extraOptions = arguments.length > 1 ? arguments[1] : void 0;
                var host = this.host;
                var from = extraOptions == null ? void 0 : extraOptions.from;
                var strategy = extraOptions == null ? void 0 : extraOptions.strategy;
                var initScope = extraOptions == null ? void 0 : extraOptions.initScope;
                var promises = [];
                if (from !== 'build') {
                    var initTokens = this.initTokens;
                    if (!initScope) initScope = [];
                    var initToken = initTokens[shareScopeName];
                    if (!initToken) initToken = initTokens[shareScopeName] = {
                        from: this.host.name
                    };
                    if (initScope.indexOf(initToken) >= 0) return promises;
                    initScope.push(initToken);
                }
                var shareScope = this.shareScopeMap;
                var hostName = host.options.name;
                // Creates a new share scope if necessary
                if (!shareScope[shareScopeName]) {
                    shareScope[shareScopeName] = {};
                }
                // Executes all initialization snippets from all accessible modules
                var scope = shareScope[shareScopeName];
                var register = function(name, shared) {
                    var _activeVersion_shareConfig;
                    var version = shared.version, eager = shared.eager;
                    scope[name] = scope[name] || {};
                    var versions = scope[name];
                    var activeVersion = versions[version];
                    var activeVersionEager = Boolean(activeVersion && (activeVersion.eager || ((_activeVersion_shareConfig = activeVersion.shareConfig) == null ? void 0 : _activeVersion_shareConfig.eager)));
                    if (!activeVersion || activeVersion.strategy !== 'loaded-first' && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > activeVersion.from)) {
                        versions[version] = shared;
                    }
                };
                var initFn = function(mod) {
                    return mod && mod.init && mod.init(shareScope[shareScopeName], initScope);
                };
                var initRemoteModule = /*#__PURE__*/ function() {
                    var _ref = _async_to_generator(function(key) {
                        var module, remoteEntryExports, error;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        host.remoteHandler.getRemoteModuleAndOptions({
                                            id: key
                                        })
                                    ];
                                case 1:
                                    module = _state.sent().module;
                                    if (!module.getEntry) return [
                                        3,
                                        8
                                    ];
                                    _state.label = 2;
                                case 2:
                                    _state.trys.push([
                                        2,
                                        4,
                                        ,
                                        6
                                    ]);
                                    return [
                                        4,
                                        module.getEntry()
                                    ];
                                case 3:
                                    remoteEntryExports = _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 4:
                                    error = _state.sent();
                                    return [
                                        4,
                                        host.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                                            id: key,
                                            error: error,
                                            from: 'runtime',
                                            lifecycle: 'beforeLoadShare',
                                            origin: host
                                        })
                                    ];
                                case 5:
                                    remoteEntryExports = _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 6:
                                    if (!!module.inited) return [
                                        3,
                                        8
                                    ];
                                    return [
                                        4,
                                        initFn(remoteEntryExports)
                                    ];
                                case 7:
                                    _state.sent();
                                    module.inited = true;
                                    _state.label = 8;
                                case 8:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function initRemoteModule(key) {
                        return _ref.apply(this, arguments);
                    };
                }();
                Object.keys(host.options.shared).forEach(function(shareName) {
                    var sharedArr = host.options.shared[shareName];
                    sharedArr.forEach(function(shared) {
                        if (shared.scope.includes(shareScopeName)) {
                            register(shareName, shared);
                        }
                    });
                });
                // TODO: strategy==='version-first' need to be removed in the future
                if (host.options.shareStrategy === 'version-first' || strategy === 'version-first') {
                    host.options.remotes.forEach(function(remote) {
                        if (remote.shareScope === shareScopeName) {
                            promises.push(initRemoteModule(remote.name));
                        }
                    });
                }
                return promises;
            }
        },
        {
            // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
            // 1. If the loaded shared already exists globally, then it will be reused
            // 2. If lib exists in local shared, it will be used directly
            // 3. If the local get returns something other than Promise, then it will be used directly
            key: "loadShareSync",
            value: function loadShareSync(pkgName, extraOptions) {
                var _this = this;
                var host = this.host;
                var shareInfo = getTargetSharedOptions({
                    pkgName: pkgName,
                    extraOptions: extraOptions,
                    shareInfos: host.options.shared
                });
                if (shareInfo == null ? void 0 : shareInfo.scope) {
                    shareInfo.scope.forEach(function(shareScope) {
                        _this.initializeSharing(shareScope, {
                            strategy: shareInfo.strategy
                        });
                    });
                }
                var registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareInfo, this.hooks.lifecycle.resolveShare);
                var addUseIn = function(shared) {
                    if (!shared.useIn) {
                        shared.useIn = [];
                    }
                    addUniqueItem(shared.useIn, host.options.name);
                };
                if (registeredShared) {
                    if (typeof registeredShared.lib === 'function') {
                        addUseIn(registeredShared);
                        if (!registeredShared.loaded) {
                            registeredShared.loaded = true;
                            if (registeredShared.from === host.options.name) {
                                shareInfo.loaded = true;
                            }
                        }
                        return registeredShared.lib;
                    }
                    if (typeof registeredShared.get === 'function') {
                        var module = registeredShared.get();
                        if (!_instanceof(module, Promise)) {
                            addUseIn(registeredShared);
                            this.setShared({
                                pkgName: pkgName,
                                loaded: true,
                                from: host.options.name,
                                lib: module,
                                shared: registeredShared
                            });
                            return module;
                        }
                    }
                }
                if (shareInfo.lib) {
                    if (!shareInfo.loaded) {
                        shareInfo.loaded = true;
                    }
                    return shareInfo.lib;
                }
                if (shareInfo.get) {
                    var module1 = shareInfo.get();
                    if (_instanceof(module1, Promise)) {
                        var errorCode = (extraOptions == null ? void 0 : extraOptions.from) === 'build' ? errorCodes.RUNTIME_005 : errorCodes.RUNTIME_006;
                        throw new Error(errorCodes.getShortErrorMsg(errorCode, errorCodes.runtimeDescMap, {
                            hostName: host.options.name,
                            sharedPkgName: pkgName
                        }));
                    }
                    shareInfo.lib = module1;
                    this.setShared({
                        pkgName: pkgName,
                        loaded: true,
                        from: host.options.name,
                        lib: shareInfo.lib,
                        shared: shareInfo
                    });
                    return shareInfo.lib;
                }
                throw new Error(errorCodes.getShortErrorMsg(errorCodes.RUNTIME_006, errorCodes.runtimeDescMap, {
                    hostName: host.options.name,
                    sharedPkgName: pkgName
                }));
            }
        },
        {
            key: "initShareScopeMap",
            value: function initShareScopeMap(scopeName, shareScope) {
                var extraOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var host = this.host;
                this.shareScopeMap[scopeName] = shareScope;
                this.hooks.lifecycle.initContainerShareScopeMap.emit({
                    shareScope: shareScope,
                    options: host.options,
                    origin: host,
                    scopeName: scopeName,
                    hostShareScopeMap: extraOptions.hostShareScopeMap
                });
            }
        },
        {
            key: "setShared",
            value: function setShared(param) {
                var _this = this;
                var pkgName = param.pkgName, shared = param.shared, from = param.from, lib = param.lib, loading = param.loading, loaded = param.loaded, get = param.get;
                var version = shared.version, _shared_scope = shared.scope, scope = _shared_scope === void 0 ? 'default' : _shared_scope, shareInfo = polyfills._object_without_properties_loose(shared, [
                    "version",
                    "scope"
                ]);
                var scopes = Array.isArray(scope) ? scope : [
                    scope
                ];
                scopes.forEach(function(sc) {
                    if (!_this.shareScopeMap[sc]) {
                        _this.shareScopeMap[sc] = {};
                    }
                    if (!_this.shareScopeMap[sc][pkgName]) {
                        _this.shareScopeMap[sc][pkgName] = {};
                    }
                    if (!_this.shareScopeMap[sc][pkgName][version]) {
                        _this.shareScopeMap[sc][pkgName][version] = polyfills._extends({
                            version: version,
                            scope: [
                                'default'
                            ]
                        }, shareInfo, {
                            lib: lib,
                            loaded: loaded,
                            loading: loading
                        });
                        if (get) {
                            _this.shareScopeMap[sc][pkgName][version].get = get;
                        }
                        return;
                    }
                    var registeredShared = _this.shareScopeMap[sc][pkgName][version];
                    if (loading && !registeredShared.loading) {
                        registeredShared.loading = loading;
                    }
                });
            }
        },
        {
            key: "_setGlobalShareScopeMap",
            value: function _setGlobalShareScopeMap(hostOptions) {
                var globalShareScopeMap = getGlobalShareScope();
                var identifier = hostOptions.id || hostOptions.name;
                if (identifier && !globalShareScopeMap[identifier]) {
                    globalShareScopeMap[identifier] = this.shareScopeMap;
                }
            }
        }
    ]);
    return SharedHandler;
}();
var RemoteHandler = /*#__PURE__*/ function() {
    function RemoteHandler(host) {
        _class_call_check(this, RemoteHandler);
        this.hooks = new PluginSystem({
            beforeRegisterRemote: new SyncWaterfallHook('beforeRegisterRemote'),
            registerRemote: new SyncWaterfallHook('registerRemote'),
            beforeRequest: new AsyncWaterfallHook('beforeRequest'),
            onLoad: new AsyncHook('onLoad'),
            handlePreloadModule: new SyncHook('handlePreloadModule'),
            errorLoadRemote: new AsyncHook('errorLoadRemote'),
            beforePreloadRemote: new AsyncHook('beforePreloadRemote'),
            generatePreloadAssets: new AsyncHook('generatePreloadAssets'),
            // not used yet
            afterPreloadRemote: new AsyncHook(),
            loadEntry: new AsyncHook()
        });
        this.host = host;
        this.idToRemoteMap = {};
    }
    _create_class(RemoteHandler, [
        {
            key: "formatAndRegisterRemote",
            value: function formatAndRegisterRemote(globalOptions, userOptions) {
                var _this = this;
                var userRemotes = userOptions.remotes || [];
                return userRemotes.reduce(function(res, remote) {
                    _this.registerRemote(remote, res, {
                        force: false
                    });
                    return res;
                }, globalOptions.remotes);
            }
        },
        {
            key: "setIdToRemoteMap",
            value: function setIdToRemoteMap(id, remoteMatchInfo) {
                var remote = remoteMatchInfo.remote, expose = remoteMatchInfo.expose;
                var name = remote.name, alias = remote.alias;
                this.idToRemoteMap[id] = {
                    name: remote.name,
                    expose: expose
                };
                if (alias && id.startsWith(name)) {
                    var idWithAlias = id.replace(name, alias);
                    this.idToRemoteMap[idWithAlias] = {
                        name: remote.name,
                        expose: expose
                    };
                    return;
                }
                if (alias && id.startsWith(alias)) {
                    var idWithName = id.replace(alias, name);
                    this.idToRemoteMap[idWithName] = {
                        name: remote.name,
                        expose: expose
                    };
                }
            }
        },
        {
            key: "loadRemote",
            value: // eslint-disable-next-line max-lines-per-function
            // eslint-disable-next-line @typescript-eslint/member-ordering
            function loadRemote(id, options) {
                var _this = this;
                return _async_to_generator(function() {
                    var host, _ref, _ref_loadFactory, loadFactory, _ref1, module, moduleOptions, remoteMatchInfo, pkgNameOrAlias, remote, expose, idRes, remoteSnapshot, moduleOrFactory, moduleWrapper, error, _ref2, _ref_from, from, failOver;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                host = _this.host;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    5,
                                    ,
                                    7
                                ]);
                                _ref = options || {
                                    loadFactory: true
                                }, _ref_loadFactory = _ref.loadFactory, loadFactory = _ref_loadFactory === void 0 ? true : _ref_loadFactory;
                                return [
                                    4,
                                    _this.getRemoteModuleAndOptions({
                                        id: id
                                    })
                                ];
                            case 2:
                                _ref1 = _state.sent(), module = _ref1.module, moduleOptions = _ref1.moduleOptions, remoteMatchInfo = _ref1.remoteMatchInfo;
                                pkgNameOrAlias = remoteMatchInfo.pkgNameOrAlias, remote = remoteMatchInfo.remote, expose = remoteMatchInfo.expose, idRes = remoteMatchInfo.id, remoteSnapshot = remoteMatchInfo.remoteSnapshot;
                                return [
                                    4,
                                    module.get(idRes, expose, options, remoteSnapshot)
                                ];
                            case 3:
                                moduleOrFactory = _state.sent();
                                return [
                                    4,
                                    _this.hooks.lifecycle.onLoad.emit({
                                        id: idRes,
                                        pkgNameOrAlias: pkgNameOrAlias,
                                        expose: expose,
                                        exposeModule: loadFactory ? moduleOrFactory : undefined,
                                        exposeModuleFactory: loadFactory ? undefined : moduleOrFactory,
                                        remote: remote,
                                        options: moduleOptions,
                                        moduleInstance: module,
                                        origin: host
                                    })
                                ];
                            case 4:
                                moduleWrapper = _state.sent();
                                _this.setIdToRemoteMap(id, remoteMatchInfo);
                                if (typeof moduleWrapper === 'function') {
                                    return [
                                        2,
                                        moduleWrapper
                                    ];
                                }
                                return [
                                    2,
                                    moduleOrFactory
                                ];
                            case 5:
                                error = _state.sent();
                                _ref2 = options || {
                                    from: 'runtime'
                                }, _ref_from = _ref2.from, from = _ref_from === void 0 ? 'runtime' : _ref_from;
                                return [
                                    4,
                                    _this.hooks.lifecycle.errorLoadRemote.emit({
                                        id: id,
                                        error: error,
                                        from: from,
                                        lifecycle: 'onLoad',
                                        origin: host
                                    })
                                ];
                            case 6:
                                failOver = _state.sent();
                                if (!failOver) {
                                    throw error;
                                }
                                return [
                                    2,
                                    failOver
                                ];
                            case 7:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "preloadRemote",
            value: // eslint-disable-next-line @typescript-eslint/member-ordering
            function preloadRemote(preloadOptions) {
                var _this = this;
                return _async_to_generator(function() {
                    var host, preloadOps;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                host = _this.host;
                                return [
                                    4,
                                    _this.hooks.lifecycle.beforePreloadRemote.emit({
                                        preloadOps: preloadOptions,
                                        options: host.options,
                                        origin: host
                                    })
                                ];
                            case 1:
                                _state.sent();
                                preloadOps = formatPreloadArgs(host.options.remotes, preloadOptions);
                                return [
                                    4,
                                    Promise.all(preloadOps.map(/*#__PURE__*/ function() {
                                        var _ref = _async_to_generator(function(ops) {
                                            var remote, remoteInfo, _ref, globalSnapshot, remoteSnapshot, assets;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        remote = ops.remote;
                                                        remoteInfo = getRemoteInfo(remote);
                                                        return [
                                                            4,
                                                            host.snapshotHandler.loadRemoteSnapshotInfo({
                                                                moduleInfo: remote
                                                            })
                                                        ];
                                                    case 1:
                                                        _ref = _state.sent(), globalSnapshot = _ref.globalSnapshot, remoteSnapshot = _ref.remoteSnapshot;
                                                        return [
                                                            4,
                                                            _this.hooks.lifecycle.generatePreloadAssets.emit({
                                                                origin: host,
                                                                preloadOptions: ops,
                                                                remote: remote,
                                                                remoteInfo: remoteInfo,
                                                                globalSnapshot: globalSnapshot,
                                                                remoteSnapshot: remoteSnapshot
                                                            })
                                                        ];
                                                    case 2:
                                                        assets = _state.sent();
                                                        if (!assets) {
                                                            return [
                                                                2
                                                            ];
                                                        }
                                                        preloadAssets(remoteInfo, host, assets);
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        });
                                        return function(ops) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }()))
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "registerRemotes",
            value: function registerRemotes(remotes, options) {
                var _this = this;
                var host = this.host;
                remotes.forEach(function(remote) {
                    _this.registerRemote(remote, host.options.remotes, {
                        force: options == null ? void 0 : options.force
                    });
                });
            }
        },
        {
            key: "getRemoteModuleAndOptions",
            value: function getRemoteModuleAndOptions(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var host, id, loadRemoteArgs, error, idRes, remoteSplitInfo, rawRemote, remoteInfo, matchInfo, remote, expose, module, moduleOptions;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                host = _this.host;
                                id = options.id;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    3,
                                    ,
                                    5
                                ]);
                                return [
                                    4,
                                    _this.hooks.lifecycle.beforeRequest.emit({
                                        id: id,
                                        options: host.options,
                                        origin: host
                                    })
                                ];
                            case 2:
                                loadRemoteArgs = _state.sent();
                                return [
                                    3,
                                    5
                                ];
                            case 3:
                                error = _state.sent();
                                return [
                                    4,
                                    _this.hooks.lifecycle.errorLoadRemote.emit({
                                        id: id,
                                        options: host.options,
                                        origin: host,
                                        from: 'runtime',
                                        error: error,
                                        lifecycle: 'beforeRequest'
                                    })
                                ];
                            case 4:
                                loadRemoteArgs = _state.sent();
                                if (!loadRemoteArgs) {
                                    throw error;
                                }
                                return [
                                    3,
                                    5
                                ];
                            case 5:
                                idRes = loadRemoteArgs.id;
                                remoteSplitInfo = matchRemoteWithNameAndExpose(host.options.remotes, idRes);
                                assert(remoteSplitInfo, errorCodes.getShortErrorMsg(errorCodes.RUNTIME_004, errorCodes.runtimeDescMap, {
                                    hostName: host.options.name,
                                    requestId: idRes
                                }));
                                rawRemote = remoteSplitInfo.remote;
                                remoteInfo = getRemoteInfo(rawRemote);
                                return [
                                    4,
                                    host.sharedHandler.hooks.lifecycle.afterResolve.emit(polyfills._extends({
                                        id: idRes
                                    }, remoteSplitInfo, {
                                        options: host.options,
                                        origin: host,
                                        remoteInfo: remoteInfo
                                    }))
                                ];
                            case 6:
                                matchInfo = _state.sent();
                                remote = matchInfo.remote, expose = matchInfo.expose;
                                assert(remote && expose, "The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ".concat(idRes, "."));
                                module = host.moduleCache.get(remote.name);
                                moduleOptions = {
                                    host: host,
                                    remoteInfo: remoteInfo
                                };
                                if (!module) {
                                    module = new Module(moduleOptions);
                                    host.moduleCache.set(remote.name, module);
                                }
                                return [
                                    2,
                                    {
                                        module: module,
                                        moduleOptions: moduleOptions,
                                        remoteMatchInfo: matchInfo
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "registerRemote",
            value: function registerRemote(remote, targetRemotes, options) {
                var host = this.host;
                var normalizeRemote = function() {
                    if (remote.alias) {
                        // Validate if alias equals the prefix of remote.name and remote.alias, if so, throw an error
                        // As multi-level path references cannot guarantee unique names, alias being a prefix of remote.name is not supported
                        var findEqual = targetRemotes.find(function(item) {
                            var _item_alias;
                            return remote.alias && (item.name.startsWith(remote.alias) || ((_item_alias = item.alias) == null ? void 0 : _item_alias.startsWith(remote.alias)));
                        });
                        assert(!findEqual, "The alias ".concat(remote.alias, " of remote ").concat(remote.name, " is not allowed to be the prefix of ").concat(findEqual && findEqual.name, " name or alias"));
                    }
                    // Set the remote entry to a complete path
                    if ('entry' in remote) {
                        if (sdk.isBrowserEnv() && !remote.entry.startsWith('http')) {
                            remote.entry = new URL(remote.entry, window.location.origin).href;
                        }
                    }
                    if (!remote.shareScope) {
                        remote.shareScope = DEFAULT_SCOPE;
                    }
                    if (!remote.type) {
                        remote.type = DEFAULT_REMOTE_TYPE;
                    }
                };
                this.hooks.lifecycle.beforeRegisterRemote.emit({
                    remote: remote,
                    origin: host
                });
                var registeredRemote = targetRemotes.find(function(item) {
                    return item.name === remote.name;
                });
                if (!registeredRemote) {
                    normalizeRemote();
                    targetRemotes.push(remote);
                    this.hooks.lifecycle.registerRemote.emit({
                        remote: remote,
                        origin: host
                    });
                } else {
                    var messages = [
                        'The remote "'.concat(remote.name, '" is already registered.'),
                        'Please note that overriding it may cause unexpected errors.'
                    ];
                    if (options == null ? void 0 : options.force) {
                        // remove registered remote
                        this.removeRemote(registeredRemote);
                        normalizeRemote();
                        targetRemotes.push(remote);
                        this.hooks.lifecycle.registerRemote.emit({
                            remote: remote,
                            origin: host
                        });
                        sdk.warn(messages.join(' '));
                    }
                }
            }
        },
        {
            key: "removeRemote",
            value: function removeRemote(remote) {
                try {
                    var host = this.host;
                    var name = remote.name;
                    var remoteIndex = host.options.remotes.findIndex(function(item) {
                        return item.name === name;
                    });
                    if (remoteIndex !== -1) {
                        host.options.remotes.splice(remoteIndex, 1);
                    }
                    var loadedModule = host.moduleCache.get(remote.name);
                    if (loadedModule) {
                        var remoteInfo = loadedModule.remoteInfo;
                        var key = remoteInfo.entryGlobalName;
                        if (CurrentGlobal[key]) {
                            var _Object_getOwnPropertyDescriptor;
                            if ((_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(CurrentGlobal, key)) == null ? void 0 : _Object_getOwnPropertyDescriptor.configurable) {
                                delete CurrentGlobal[key];
                            } else {
                                // @ts-ignore
                                CurrentGlobal[key] = undefined;
                            }
                        }
                        var remoteEntryUniqueKey = getRemoteEntryUniqueKey(loadedModule.remoteInfo);
                        if (globalLoading[remoteEntryUniqueKey]) {
                            delete globalLoading[remoteEntryUniqueKey];
                        }
                        host.snapshotHandler.manifestCache.delete(remoteInfo.entry);
                        // delete unloaded shared and instance
                        var remoteInsId = remoteInfo.buildVersion ? sdk.composeKeyWithSeparator(remoteInfo.name, remoteInfo.buildVersion) : remoteInfo.name;
                        var remoteInsIndex = CurrentGlobal.__FEDERATION__.__INSTANCES__.findIndex(function(ins) {
                            if (remoteInfo.buildVersion) {
                                return ins.options.id === remoteInsId;
                            } else {
                                return ins.name === remoteInsId;
                            }
                        });
                        if (remoteInsIndex !== -1) {
                            var remoteIns = CurrentGlobal.__FEDERATION__.__INSTANCES__[remoteInsIndex];
                            remoteInsId = remoteIns.options.id || remoteInsId;
                            var globalShareScopeMap = getGlobalShareScope();
                            var isAllSharedNotUsed = true;
                            var needDeleteKeys = [];
                            Object.keys(globalShareScopeMap).forEach(function(instId) {
                                var shareScopeMap = globalShareScopeMap[instId];
                                shareScopeMap && Object.keys(shareScopeMap).forEach(function(shareScope) {
                                    var shareScopeVal = shareScopeMap[shareScope];
                                    shareScopeVal && Object.keys(shareScopeVal).forEach(function(shareName) {
                                        var sharedPkgs = shareScopeVal[shareName];
                                        sharedPkgs && Object.keys(sharedPkgs).forEach(function(shareVersion) {
                                            var shared = sharedPkgs[shareVersion];
                                            if (shared && (typeof shared === "undefined" ? "undefined" : _type_of(shared)) === 'object' && shared.from === remoteInfo.name) {
                                                if (shared.loaded || shared.loading) {
                                                    shared.useIn = shared.useIn.filter(function(usedHostName) {
                                                        return usedHostName !== remoteInfo.name;
                                                    });
                                                    if (shared.useIn.length) {
                                                        isAllSharedNotUsed = false;
                                                    } else {
                                                        needDeleteKeys.push([
                                                            instId,
                                                            shareScope,
                                                            shareName,
                                                            shareVersion
                                                        ]);
                                                    }
                                                } else {
                                                    needDeleteKeys.push([
                                                        instId,
                                                        shareScope,
                                                        shareName,
                                                        shareVersion
                                                    ]);
                                                }
                                            }
                                        });
                                    });
                                });
                            });
                            if (isAllSharedNotUsed) {
                                remoteIns.shareScopeMap = {};
                                delete globalShareScopeMap[remoteInsId];
                            }
                            needDeleteKeys.forEach(function(param) {
                                var _param = _sliced_to_array(param, 4), insId = _param[0], shareScope = _param[1], shareName = _param[2], shareVersion = _param[3];
                                var _globalShareScopeMap_insId_shareScope_shareName, _globalShareScopeMap_insId_shareScope, _globalShareScopeMap_insId;
                                (_globalShareScopeMap_insId = globalShareScopeMap[insId]) == null ? true : (_globalShareScopeMap_insId_shareScope = _globalShareScopeMap_insId[shareScope]) == null ? true : (_globalShareScopeMap_insId_shareScope_shareName = _globalShareScopeMap_insId_shareScope[shareName]) == null ? true : delete _globalShareScopeMap_insId_shareScope_shareName[shareVersion];
                            });
                            CurrentGlobal.__FEDERATION__.__INSTANCES__.splice(remoteInsIndex, 1);
                        }
                        var hostGlobalSnapshot = getGlobalRemoteInfo(remote, host).hostGlobalSnapshot;
                        if (hostGlobalSnapshot) {
                            var remoteKey = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, remote.name).key;
                            if (remoteKey) {
                                delete hostGlobalSnapshot.remotesInfo[remoteKey];
                                if (Boolean(Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey])) {
                                    delete Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey];
                                }
                            }
                        }
                        host.moduleCache.delete(remote.name);
                    }
                } catch (err) {
                    logger.log('removeRemote fail: ', err);
                }
            }
        }
    ]);
    return RemoteHandler;
}();
var USE_SNAPSHOT =  true ? !false : 0; // Default to true (use snapshot) when not explicitly defined
var FederationHost = /*#__PURE__*/ function() {
    function FederationHost(userOptions) {
        _class_call_check(this, FederationHost);
        this.hooks = new PluginSystem({
            beforeInit: new SyncWaterfallHook('beforeInit'),
            init: new SyncHook(),
            // maybe will change, temporarily for internal use only
            beforeInitContainer: new AsyncWaterfallHook('beforeInitContainer'),
            // maybe will change, temporarily for internal use only
            initContainer: new AsyncWaterfallHook('initContainer')
        });
        this.version = "0.16.0";
        this.moduleCache = new Map();
        this.loaderHook = new PluginSystem({
            // FIXME: may not be suitable , not open to the public yet
            getModuleInfo: new SyncHook(),
            createScript: new SyncHook(),
            createLink: new SyncHook(),
            fetch: new AsyncHook(),
            loadEntryError: new AsyncHook(),
            getModuleFactory: new AsyncHook()
        });
        this.bridgeHook = new PluginSystem({
            beforeBridgeRender: new SyncHook(),
            afterBridgeRender: new SyncHook(),
            beforeBridgeDestroy: new SyncHook(),
            afterBridgeDestroy: new SyncHook()
        });
        var plugins = USE_SNAPSHOT ? [
            snapshotPlugin(),
            generatePreloadAssetsPlugin()
        ] : [];
        // TODO: Validate the details of the options
        // Initialize options with default values
        var defaultOptions = {
            id: getBuilderId(),
            name: userOptions.name,
            plugins: plugins,
            remotes: [],
            shared: {},
            inBrowser: sdk.isBrowserEnv()
        };
        this.name = userOptions.name;
        this.options = defaultOptions;
        this.snapshotHandler = new SnapshotHandler(this);
        this.sharedHandler = new SharedHandler(this);
        this.remoteHandler = new RemoteHandler(this);
        this.shareScopeMap = this.sharedHandler.shareScopeMap;
        this.registerPlugins(_to_consumable_array(defaultOptions.plugins).concat(_to_consumable_array(userOptions.plugins || [])));
        this.options = this.formatOptions(defaultOptions, userOptions);
    }
    _create_class(FederationHost, [
        {
            key: "initOptions",
            value: function initOptions(userOptions) {
                this.registerPlugins(userOptions.plugins);
                var options = this.formatOptions(this.options, userOptions);
                this.options = options;
                return options;
            }
        },
        {
            key: "loadShare",
            value: function loadShare(pkgName, extraOptions) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.sharedHandler.loadShare(pkgName, extraOptions)
                        ];
                    });
                })();
            }
        },
        {
            // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
            // 1. If the loaded shared already exists globally, then it will be reused
            // 2. If lib exists in local shared, it will be used directly
            // 3. If the local get returns something other than Promise, then it will be used directly
            key: "loadShareSync",
            value: function loadShareSync(pkgName, extraOptions) {
                return this.sharedHandler.loadShareSync(pkgName, extraOptions);
            }
        },
        {
            key: "initializeSharing",
            value: function initializeSharing() {
                var shareScopeName = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_SCOPE, extraOptions = arguments.length > 1 ? arguments[1] : void 0;
                return this.sharedHandler.initializeSharing(shareScopeName, extraOptions);
            }
        },
        {
            key: "initRawContainer",
            value: function initRawContainer(name, url, container) {
                var remoteInfo = getRemoteInfo({
                    name: name,
                    entry: url
                });
                var module = new Module({
                    host: this,
                    remoteInfo: remoteInfo
                });
                module.remoteEntryExports = container;
                this.moduleCache.set(name, module);
                return module;
            }
        },
        {
            key: "loadRemote",
            value: // eslint-disable-next-line max-lines-per-function
            // eslint-disable-next-line @typescript-eslint/member-ordering
            function loadRemote(id, options) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.remoteHandler.loadRemote(id, options)
                        ];
                    });
                })();
            }
        },
        {
            key: "preloadRemote",
            value: // eslint-disable-next-line @typescript-eslint/member-ordering
            function preloadRemote(preloadOptions) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _this.remoteHandler.preloadRemote(preloadOptions)
                        ];
                    });
                })();
            }
        },
        {
            key: "initShareScopeMap",
            value: function initShareScopeMap(scopeName, shareScope) {
                var extraOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                this.sharedHandler.initShareScopeMap(scopeName, shareScope, extraOptions);
            }
        },
        {
            key: "formatOptions",
            value: function formatOptions(globalOptions, userOptions) {
                var shared = formatShareConfigs(globalOptions, userOptions).shared;
                var _this_hooks_lifecycle_beforeInit_emit = this.hooks.lifecycle.beforeInit.emit({
                    origin: this,
                    userOptions: userOptions,
                    options: globalOptions,
                    shareInfo: shared
                }), userOptionsRes = _this_hooks_lifecycle_beforeInit_emit.userOptions, globalOptionsRes = _this_hooks_lifecycle_beforeInit_emit.options;
                var remotes = this.remoteHandler.formatAndRegisterRemote(globalOptionsRes, userOptionsRes);
                var _this_sharedHandler_registerShared = this.sharedHandler.registerShared(globalOptionsRes, userOptionsRes), handledShared = _this_sharedHandler_registerShared.shared;
                var plugins = _to_consumable_array(globalOptionsRes.plugins);
                if (userOptionsRes.plugins) {
                    userOptionsRes.plugins.forEach(function(plugin) {
                        if (!plugins.includes(plugin)) {
                            plugins.push(plugin);
                        }
                    });
                }
                var optionsRes = polyfills._extends({}, globalOptions, userOptions, {
                    plugins: plugins,
                    remotes: remotes,
                    shared: handledShared
                });
                this.hooks.lifecycle.init.emit({
                    origin: this,
                    options: optionsRes
                });
                return optionsRes;
            }
        },
        {
            key: "registerPlugins",
            value: function registerPlugins1(plugins) {
                var pluginRes = registerPlugins(plugins, [
                    this.hooks,
                    this.remoteHandler.hooks,
                    this.sharedHandler.hooks,
                    this.snapshotHandler.hooks,
                    this.loaderHook,
                    this.bridgeHook
                ]);
                // Merge plugin
                this.options.plugins = this.options.plugins.reduce(function(res, plugin) {
                    if (!plugin) return res;
                    if (res && !res.find(function(item) {
                        return item.name === plugin.name;
                    })) {
                        res.push(plugin);
                    }
                    return res;
                }, pluginRes || []);
            }
        },
        {
            key: "registerRemotes",
            value: function registerRemotes(remotes, options) {
                return this.remoteHandler.registerRemotes(remotes, options);
            }
        }
    ]);
    return FederationHost;
}();
var index = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
exports.loadScript = sdk.loadScript;
exports.loadScriptNode = sdk.loadScriptNode;
exports.CurrentGlobal = CurrentGlobal;
exports.FederationHost = FederationHost;
exports.Global = Global;
exports.Module = Module;
exports.addGlobalSnapshot = addGlobalSnapshot;
exports.assert = assert;
exports.getGlobalFederationConstructor = getGlobalFederationConstructor;
exports.getGlobalSnapshot = getGlobalSnapshot;
exports.getInfoWithoutType = getInfoWithoutType;
exports.getRegisteredShare = getRegisteredShare;
exports.getRemoteEntry = getRemoteEntry;
exports.getRemoteInfo = getRemoteInfo;
exports.helpers = helpers;
exports.isStaticResourcesEqual = isStaticResourcesEqual;
exports.matchRemoteWithNameAndExpose = matchRemoteWithNameAndExpose;
exports.registerGlobalPlugins = registerGlobalPlugins;
exports.resetFederationGlobalInfo = resetFederationGlobalInfo;
exports.safeWrapper = safeWrapper;
exports.satisfy = satisfy;
exports.setGlobalFederationConstructor = setGlobalFederationConstructor;
exports.setGlobalFederationInstance = setGlobalFederationInstance;
exports.types = index;


}),
"./node_modules/@module-federation/runtime-core/dist/polyfills.cjs.cjs": (function (__unused_webpack_module, exports) {

function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports._extends = _extends;
exports._object_without_properties_loose = _object_without_properties_loose;


}),
"./node_modules/@module-federation/runtime/dist/index.cjs.cjs": (function (__unused_webpack_module, exports, __webpack_require__) {

var runtimeCore = __webpack_require__(/*! @module-federation/runtime-core */ "./node_modules/@module-federation/runtime-core/dist/index.cjs.cjs");
var utils = __webpack_require__(/*! ./utils.cjs.cjs */ "./node_modules/@module-federation/runtime/dist/utils.cjs.cjs");
var FederationInstance = null;
function init(options) {
    // Retrieve the same instance with the same name
    var instance = utils.getGlobalFederationInstance(options.name, options.version);
    if (!instance) {
        // Retrieve debug constructor
        var FederationConstructor = runtimeCore.getGlobalFederationConstructor() || runtimeCore.FederationHost;
        FederationInstance = new FederationConstructor(options);
        runtimeCore.setGlobalFederationInstance(FederationInstance);
        return FederationInstance;
    } else {
        // Merge options
        instance.initOptions(options);
        if (!FederationInstance) {
            FederationInstance = instance;
        }
        return instance;
    }
}
function loadRemote() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    runtimeCore.assert(FederationInstance, 'Please call init first');
    var loadRemote1 = FederationInstance.loadRemote;
    // eslint-disable-next-line prefer-spread
    return loadRemote1.apply(FederationInstance, args);
}
function loadShare() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    var loadShare1 = FederationInstance.loadShare;
    return loadShare1.apply(FederationInstance, args);
}
function loadShareSync() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    runtimeCore.assert(FederationInstance, 'Please call init first');
    var loadShareSync1 = FederationInstance.loadShareSync;
    // eslint-disable-next-line prefer-spread
    return loadShareSync1.apply(FederationInstance, args);
}
function preloadRemote() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.preloadRemote.apply(FederationInstance, args);
}
function registerRemotes() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerRemotes.apply(FederationInstance, args);
}
function registerPlugins() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    runtimeCore.assert(FederationInstance, 'Please call init first');
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerPlugins.apply(FederationInstance, args);
}
function getInstance() {
    return FederationInstance;
}
// Inject for debug
runtimeCore.setGlobalFederationConstructor(runtimeCore.FederationHost);
exports.FederationHost = runtimeCore.FederationHost;
exports.Module = runtimeCore.Module;
exports.getRemoteEntry = runtimeCore.getRemoteEntry;
exports.getRemoteInfo = runtimeCore.getRemoteInfo;
exports.loadScript = runtimeCore.loadScript;
exports.loadScriptNode = runtimeCore.loadScriptNode;
exports.registerGlobalPlugins = runtimeCore.registerGlobalPlugins;
exports.getInstance = getInstance;
exports.init = init;
exports.loadRemote = loadRemote;
exports.loadShare = loadShare;
exports.loadShareSync = loadShareSync;
exports.preloadRemote = preloadRemote;
exports.registerPlugins = registerPlugins;
exports.registerRemotes = registerRemotes;


}),
"./node_modules/@module-federation/runtime/dist/utils.cjs.cjs": (function (__unused_webpack_module, exports, __webpack_require__) {

var runtimeCore = __webpack_require__(/*! @module-federation/runtime-core */ "./node_modules/@module-federation/runtime-core/dist/index.cjs.cjs");
// injected by bundler, so it can not use runtime-core stuff
function getBuilderId() {
    //@ts-ignore
    return  true ? "host:1.0.0" : 0;
}
function getGlobalFederationInstance(name, version) {
    var buildId = getBuilderId();
    return runtimeCore.CurrentGlobal.__FEDERATION__.__INSTANCES__.find(function(GMInstance) {
        if (buildId && GMInstance.options.id === getBuilderId()) {
            return true;
        }
        if (GMInstance.options.name === name && !GMInstance.options.version && !version) {
            return true;
        }
        if (GMInstance.options.name === name && version && GMInstance.options.version === version) {
            return true;
        }
        return false;
    });
}
exports.getGlobalFederationInstance = getGlobalFederationInstance;


}),
"./node_modules/@module-federation/sdk/dist/index.cjs.cjs": (function (__unused_webpack_module, exports, __webpack_require__) {

function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error1) {
        reject(error1);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var polyfills = __webpack_require__(/*! ./polyfills.cjs.cjs */ "./node_modules/@module-federation/sdk/dist/polyfills.cjs.cjs");
var FederationModuleManifest = 'federation-manifest.json';
var MANIFEST_EXT = '.json';
var BROWSER_LOG_KEY = 'FEDERATION_DEBUG';
var NameTransformSymbol = {
    AT: '@',
    HYPHEN: '-',
    SLASH: '/'
};
var _obj;
var NameTransformMap = (_obj = {}, _define_property(_obj, NameTransformSymbol.AT, 'scope_'), _define_property(_obj, NameTransformSymbol.HYPHEN, '_'), _define_property(_obj, NameTransformSymbol.SLASH, '__'), _obj);
var _obj1;
var EncodedNameTransformMap = (_obj1 = {}, _define_property(_obj1, NameTransformMap[NameTransformSymbol.AT], NameTransformSymbol.AT), _define_property(_obj1, NameTransformMap[NameTransformSymbol.HYPHEN], NameTransformSymbol.HYPHEN), _define_property(_obj1, NameTransformMap[NameTransformSymbol.SLASH], NameTransformSymbol.SLASH), _obj1);
var SEPARATOR = ':';
var ManifestFileName = 'mf-manifest.json';
var StatsFileName = 'mf-stats.json';
var MFModuleType = {
    NPM: 'npm',
    APP: 'app'
};
var MODULE_DEVTOOL_IDENTIFIER = '__MF_DEVTOOLS_MODULE_INFO__';
var ENCODE_NAME_PREFIX = 'ENCODE_NAME_PREFIX';
var TEMP_DIR = '.federation';
var MFPrefetchCommon = {
    identifier: 'MFDataPrefetch',
    globalKey: '__PREFETCH__',
    library: 'mf-data-prefetch',
    exportsKey: '__PREFETCH_EXPORTS__',
    fileName: 'bootstrap.js'
};
var ContainerPlugin = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
var ContainerReferencePlugin = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
var ModuleFederationPlugin = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
var SharePlugin = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
function isBrowserEnv() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}
function isReactNativeEnv() {
    var _navigator;
    return typeof navigator !== 'undefined' && ((_navigator = navigator) == null ? void 0 : _navigator.product) === 'ReactNative';
}
function isBrowserDebug() {
    try {
        if (isBrowserEnv() && window.localStorage) {
            return Boolean(localStorage.getItem(BROWSER_LOG_KEY));
        }
    } catch (error1) {
        return false;
    }
    return false;
}
function isDebugMode() {
    if (typeof process !== 'undefined' && process.env && process.env['FEDERATION_DEBUG']) {
        return Boolean(process.env['FEDERATION_DEBUG']);
    }
    if (typeof FEDERATION_DEBUG !== 'undefined' && Boolean(FEDERATION_DEBUG)) {
        return true;
    }
    return isBrowserDebug();
}
var getProcessEnv = function getProcessEnv1() {
    return typeof process !== 'undefined' && process.env ? process.env : {};
};
var LOG_CATEGORY = '[ Federation Runtime ]';
// entry: name:version   version : 1.0.0 | ^1.2.3
// entry: name:entry  entry:  https://localhost:9000/federation-manifest.json
var parseEntry = function(str, devVerOrUrl) {
    var separator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : SEPARATOR;
    var strSplit = str.split(separator);
    var devVersionOrUrl = getProcessEnv()['NODE_ENV'] === 'development' && devVerOrUrl;
    var defaultVersion = '*';
    var isEntry = function(s) {
        return s.startsWith('http') || s.includes(MANIFEST_EXT);
    };
    // Check if the string starts with a type
    if (strSplit.length >= 2) {
        var _strSplit = _to_array(strSplit), name = _strSplit[0], versionOrEntryArr = _strSplit.slice(1);
        // @name@manifest-url.json
        if (str.startsWith(separator)) {
            name = strSplit.slice(0, 2).join(separator);
            versionOrEntryArr = [
                devVersionOrUrl || strSplit.slice(2).join(separator)
            ];
        }
        var versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
        if (isEntry(versionOrEntry)) {
            return {
                name: name,
                entry: versionOrEntry
            };
        } else {
            // Apply version rule
            // devVersionOrUrl => inputVersion => defaultVersion
            return {
                name: name,
                version: versionOrEntry || defaultVersion
            };
        }
    } else if (strSplit.length === 1) {
        var _strSplit1 = _sliced_to_array(strSplit, 1), name1 = _strSplit1[0];
        if (devVersionOrUrl && isEntry(devVersionOrUrl)) {
            return {
                name: name1,
                entry: devVersionOrUrl
            };
        }
        return {
            name: name1,
            version: devVersionOrUrl || defaultVersion
        };
    } else {
        throw "Invalid entry value: ".concat(str);
    }
};
var composeKeyWithSeparator = function composeKeyWithSeparator1() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    if (!args.length) {
        return '';
    }
    return args.reduce(function(sum, cur) {
        if (!cur) {
            return sum;
        }
        if (!sum) {
            return cur;
        }
        return "".concat(sum).concat(SEPARATOR).concat(cur);
    }, '');
};
var encodeName = function encodeName1(name) {
    var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '', withExt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    try {
        var ext = withExt ? '.js' : '';
        return "".concat(prefix).concat(name.replace(new RegExp("".concat(NameTransformSymbol.AT), 'g'), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp("".concat(NameTransformSymbol.HYPHEN), 'g'), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp("".concat(NameTransformSymbol.SLASH), 'g'), NameTransformMap[NameTransformSymbol.SLASH])).concat(ext);
    } catch (err) {
        throw err;
    }
};
var decodeName = function decodeName1(name, prefix, withExt) {
    try {
        var decodedName = name;
        if (prefix) {
            if (!decodedName.startsWith(prefix)) {
                return decodedName;
            }
            decodedName = decodedName.replace(new RegExp(prefix, 'g'), '');
        }
        decodedName = decodedName.replace(new RegExp("".concat(NameTransformMap[NameTransformSymbol.AT]), 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp("".concat(NameTransformMap[NameTransformSymbol.SLASH]), 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp("".concat(NameTransformMap[NameTransformSymbol.HYPHEN]), 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
        if (withExt) {
            decodedName = decodedName.replace('.js', '');
        }
        return decodedName;
    } catch (err) {
        throw err;
    }
};
var generateExposeFilename = function(exposeName, withExt) {
    if (!exposeName) {
        return '';
    }
    var expose = exposeName;
    if (expose === '.') {
        expose = 'default_export';
    }
    if (expose.startsWith('./')) {
        expose = expose.replace('./', '');
    }
    return encodeName(expose, '__federation_expose_', withExt);
};
var generateShareFilename = function(pkgName, withExt) {
    if (!pkgName) {
        return '';
    }
    return encodeName(pkgName, '__federation_shared_', withExt);
};
var getResourceUrl = function(module, sourceUrl) {
    if ('getPublicPath' in module) {
        var publicPath;
        if (!module.getPublicPath.startsWith('function')) {
            publicPath = new Function(module.getPublicPath)();
        } else {
            publicPath = new Function('return ' + module.getPublicPath)()();
        }
        return "".concat(publicPath).concat(sourceUrl);
    } else if ('publicPath' in module) {
        if (!isBrowserEnv() && !isReactNativeEnv() && 'ssrPublicPath' in module) {
            return "".concat(module.ssrPublicPath).concat(sourceUrl);
        }
        return "".concat(module.publicPath).concat(sourceUrl);
    } else {
        console.warn('Cannot get resource URL. If in debug mode, please ignore.', module, sourceUrl);
        return '';
    }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var assert = function(condition, msg) {
    if (!condition) {
        error(msg);
    }
};
var error = function(msg) {
    throw new Error("".concat(LOG_CATEGORY, ": ").concat(msg));
};
var warn = function(msg) {
    console.warn("".concat(LOG_CATEGORY, ": ").concat(msg));
};
function safeToString(info) {
    try {
        return JSON.stringify(info, null, 2);
    } catch (e) {
        return '';
    }
}
// RegExp for version string
var VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
function isRequiredVersion(str) {
    return VERSION_PATTERN_REGEXP.test(str);
}
var simpleJoinRemoteEntry = function(rPath, rName) {
    if (!rPath) {
        return rName;
    }
    var transformPath = function(str) {
        if (str === '.') {
            return '';
        }
        if (str.startsWith('./')) {
            return str.replace('./', '');
        }
        if (str.startsWith('/')) {
            var strWithoutSlash = str.slice(1);
            if (strWithoutSlash.endsWith('/')) {
                return strWithoutSlash.slice(0, -1);
            }
            return strWithoutSlash;
        }
        return str;
    };
    var transformedPath = transformPath(rPath);
    if (!transformedPath) {
        return rName;
    }
    if (transformedPath.endsWith('/')) {
        return "".concat(transformedPath).concat(rName);
    }
    return "".concat(transformedPath, "/").concat(rName);
};
function inferAutoPublicPath(url) {
    return url.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/');
}
// Priority: overrides > remotes
// eslint-disable-next-line max-lines-per-function
function generateSnapshotFromManifest(manifest) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _manifest_metaData, _manifest_metaData1;
    var _options_remotes = options.remotes, remotes = _options_remotes === void 0 ? {} : _options_remotes, _options_overrides = options.overrides, overrides = _options_overrides === void 0 ? {} : _options_overrides, version = options.version;
    var remoteSnapshot;
    var getPublicPath = function() {
        if ('publicPath' in manifest.metaData) {
            if (manifest.metaData.publicPath === 'auto' && version) {
                // use same implementation as publicPath auto runtime module implements
                return inferAutoPublicPath(version);
            }
            return manifest.metaData.publicPath;
        } else {
            return manifest.metaData.getPublicPath;
        }
    };
    var overridesKeys = Object.keys(overrides);
    var remotesInfo = {};
    // If remotes are not provided, only the remotes in the manifest will be read
    if (!Object.keys(remotes).length) {
        var _manifest_remotes;
        remotesInfo = ((_manifest_remotes = manifest.remotes) == null ? void 0 : _manifest_remotes.reduce(function(res, next) {
            var matchedVersion;
            var name = next.federationContainerName;
            // overrides have higher priority
            if (overridesKeys.includes(name)) {
                matchedVersion = overrides[name];
            } else {
                if ('version' in next) {
                    matchedVersion = next.version;
                } else {
                    matchedVersion = next.entry;
                }
            }
            res[name] = {
                matchedVersion: matchedVersion
            };
            return res;
        }, {})) || {};
    }
    // If remotes (deploy scenario) are specified, they need to be traversed again
    Object.keys(remotes).forEach(function(key) {
        return remotesInfo[key] = {
            // overrides will override dependencies
            matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]
        };
    });
    var _manifest_metaData2 = manifest.metaData, _manifest_metaData_remoteEntry = _manifest_metaData2.remoteEntry, remoteEntryPath = _manifest_metaData_remoteEntry.path, remoteEntryName = _manifest_metaData_remoteEntry.name, remoteEntryType = _manifest_metaData_remoteEntry.type, remoteTypes = _manifest_metaData2.types, buildVersion = _manifest_metaData2.buildInfo.buildVersion, globalName = _manifest_metaData2.globalName, ssrRemoteEntry = _manifest_metaData2.ssrRemoteEntry;
    var exposes = manifest.exposes;
    var basicRemoteSnapshot = {
        version: version ? version : '',
        buildVersion: buildVersion,
        globalName: globalName,
        remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
        remoteEntryType: remoteEntryType,
        remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
        remoteTypesZip: remoteTypes.zip || '',
        remoteTypesAPI: remoteTypes.api || '',
        remotesInfo: remotesInfo,
        shared: manifest == null ? void 0 : manifest.shared.map(function(item) {
            return {
                assets: item.assets,
                sharedName: item.name,
                version: item.version
            };
        }),
        modules: exposes == null ? void 0 : exposes.map(function(expose) {
            return {
                moduleName: expose.name,
                modulePath: expose.path,
                assets: expose.assets
            };
        })
    };
    if ((_manifest_metaData = manifest.metaData) == null ? void 0 : _manifest_metaData.prefetchInterface) {
        var prefetchInterface = manifest.metaData.prefetchInterface;
        basicRemoteSnapshot = polyfills._({}, basicRemoteSnapshot, {
            prefetchInterface: prefetchInterface
        });
    }
    if ((_manifest_metaData1 = manifest.metaData) == null ? void 0 : _manifest_metaData1.prefetchEntry) {
        var _manifest_metaData_prefetchEntry = manifest.metaData.prefetchEntry, path = _manifest_metaData_prefetchEntry.path, name = _manifest_metaData_prefetchEntry.name, type = _manifest_metaData_prefetchEntry.type;
        basicRemoteSnapshot = polyfills._({}, basicRemoteSnapshot, {
            prefetchEntry: simpleJoinRemoteEntry(path, name),
            prefetchEntryType: type
        });
    }
    if ('publicPath' in manifest.metaData) {
        remoteSnapshot = polyfills._({}, basicRemoteSnapshot, {
            publicPath: getPublicPath(),
            ssrPublicPath: manifest.metaData.ssrPublicPath
        });
    } else {
        remoteSnapshot = polyfills._({}, basicRemoteSnapshot, {
            getPublicPath: getPublicPath()
        });
    }
    if (ssrRemoteEntry) {
        var fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);
        remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;
        remoteSnapshot.ssrRemoteEntryType = ssrRemoteEntry.type || 'commonjs-module';
    }
    return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
    if ('remoteEntry' in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {
        return true;
    } else {
        return false;
    }
}
var PREFIX = '[ Module Federation ]';
var Logger = /*#__PURE__*/ function() {
    function Logger1(prefix) {
        _class_call_check(this, Logger1);
        this.prefix = prefix;
    }
    _create_class(Logger1, [
        {
            key: "setPrefix",
            value: function setPrefix(prefix) {
                this.prefix = prefix;
            }
        },
        {
            key: "log",
            value: function log() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                (_console = console).log.apply(_console, [
                    this.prefix
                ].concat(_to_consumable_array(args)));
            }
        },
        {
            key: "warn",
            value: function warn1() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                (_console = console).log.apply(_console, [
                    this.prefix
                ].concat(_to_consumable_array(args)));
            }
        },
        {
            key: "error",
            value: function error1() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                (_console = console).log.apply(_console, [
                    this.prefix
                ].concat(_to_consumable_array(args)));
            }
        },
        {
            key: "success",
            value: function success() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                (_console = console).log.apply(_console, [
                    this.prefix
                ].concat(_to_consumable_array(args)));
            }
        },
        {
            key: "info",
            value: function info() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                (_console = console).log.apply(_console, [
                    this.prefix
                ].concat(_to_consumable_array(args)));
            }
        },
        {
            key: "ready",
            value: function ready() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                (_console = console).log.apply(_console, [
                    this.prefix
                ].concat(_to_consumable_array(args)));
            }
        },
        {
            key: "debug",
            value: function debug() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                if (isDebugMode()) {
                    var _console;
                    (_console = console).log.apply(_console, [
                        this.prefix
                    ].concat(_to_consumable_array(args)));
                }
            }
        }
    ]);
    return Logger1;
}();
function createLogger(prefix) {
    return new Logger(prefix);
}
var logger = createLogger(PREFIX);
function safeWrapper(callback, disableWarn) {
    return _safeWrapper.apply(this, arguments);
}
function _safeWrapper() {
    _safeWrapper = // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _async_to_generator(function(callback, disableWarn) {
        var res, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        callback()
                    ];
                case 1:
                    res = _state.sent();
                    return [
                        2,
                        res
                    ];
                case 2:
                    e = _state.sent();
                    !disableWarn && warn(e);
                    return [
                        2
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _safeWrapper.apply(this, arguments);
}
function isStaticResourcesEqual(url1, url2) {
    var REG_EXP = /^(https?:)?\/\//i;
    // Transform url1 and url2 into relative paths
    var relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
    var relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
    // Check if the relative paths are identical
    return relativeUrl1 === relativeUrl2;
}
function createScript(info) {
    // Retrieve the existing script element by its src attribute
    var script = null;
    var needAttach = true;
    var timeout = 20000;
    var timeoutId;
    var scripts = document.getElementsByTagName('script');
    for(var i = 0; i < scripts.length; i++){
        var s = scripts[i];
        var scriptSrc = s.getAttribute('src');
        if (scriptSrc && isStaticResourcesEqual(scriptSrc, info.url)) {
            script = s;
            needAttach = false;
            break;
        }
    }
    if (!script) {
        var attrs = info.attrs;
        script = document.createElement('script');
        script.type = (attrs == null ? void 0 : attrs['type']) === 'module' ? 'module' : 'text/javascript';
        var createScriptRes = undefined;
        if (info.createScriptHook) {
            createScriptRes = info.createScriptHook(info.url, info.attrs);
            if (_instanceof(createScriptRes, HTMLScriptElement)) {
                script = createScriptRes;
            } else if ((typeof createScriptRes === "undefined" ? "undefined" : _type_of(createScriptRes)) === 'object') {
                if ('script' in createScriptRes && createScriptRes.script) {
                    script = createScriptRes.script;
                }
                if ('timeout' in createScriptRes && createScriptRes.timeout) {
                    timeout = createScriptRes.timeout;
                }
            }
        }
        if (!script.src) {
            script.src = info.url;
        }
        if (attrs && !createScriptRes) {
            Object.keys(attrs).forEach(function(name) {
                if (script) {
                    if (name === 'async' || name === 'defer') {
                        script[name] = attrs[name];
                    // Attributes that do not exist are considered overridden
                    } else if (!script.getAttribute(name)) {
                        script.setAttribute(name, attrs[name]);
                    }
                }
            });
        }
    }
    var onScriptComplete = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(prev, event) {
            var onScriptCompleteCallback, result, res;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        clearTimeout(timeoutId);
                        onScriptCompleteCallback = function() {
                            if ((event == null ? void 0 : event.type) === 'error') {
                                (info == null ? void 0 : info.onErrorCallback) && (info == null ? void 0 : info.onErrorCallback(event));
                            } else {
                                (info == null ? void 0 : info.cb) && (info == null ? void 0 : info.cb());
                            }
                        };
                        if (!script) return [
                            3,
                            3
                        ];
                        script.onerror = null;
                        script.onload = null;
                        safeWrapper(function() {
                            var _info_needDeleteScript = info.needDeleteScript, needDeleteScript = _info_needDeleteScript === void 0 ? true : _info_needDeleteScript;
                            if (needDeleteScript) {
                                (script == null ? void 0 : script.parentNode) && script.parentNode.removeChild(script);
                            }
                        });
                        if (!(prev && typeof prev === 'function')) return [
                            3,
                            3
                        ];
                        result = prev(event);
                        if (!_instanceof(result, Promise)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            result
                        ];
                    case 1:
                        res = _state.sent();
                        onScriptCompleteCallback();
                        return [
                            2,
                            res
                        ];
                    case 2:
                        onScriptCompleteCallback();
                        return [
                            2,
                            result
                        ];
                    case 3:
                        onScriptCompleteCallback();
                        return [
                            2
                        ];
                }
            });
        });
        return function onScriptComplete(prev, event) {
            return _ref.apply(this, arguments);
        };
    }();
    script.onerror = onScriptComplete.bind(null, script.onerror);
    script.onload = onScriptComplete.bind(null, script.onload);
    timeoutId = setTimeout(function() {
        onScriptComplete(null, new Error('Remote script "'.concat(info.url, '" time-outed.')));
    }, timeout);
    return {
        script: script,
        needAttach: needAttach
    };
}
function createLink(info) {
    // <link rel="preload" href="script.js" as="script">
    // Retrieve the existing script element by its src attribute
    var link = null;
    var needAttach = true;
    var links = document.getElementsByTagName('link');
    for(var i = 0; i < links.length; i++){
        var l = links[i];
        var linkHref = l.getAttribute('href');
        var linkRel = l.getAttribute('rel');
        if (linkHref && isStaticResourcesEqual(linkHref, info.url) && linkRel === info.attrs['rel']) {
            link = l;
            needAttach = false;
            break;
        }
    }
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('href', info.url);
        var createLinkRes = undefined;
        var attrs = info.attrs;
        if (info.createLinkHook) {
            createLinkRes = info.createLinkHook(info.url, attrs);
            if (_instanceof(createLinkRes, HTMLLinkElement)) {
                link = createLinkRes;
            }
        }
        if (attrs && !createLinkRes) {
            Object.keys(attrs).forEach(function(name) {
                if (link && !link.getAttribute(name)) {
                    link.setAttribute(name, attrs[name]);
                }
            });
        }
    }
    var onLinkComplete = function(prev, event) {
        var onLinkCompleteCallback = function() {
            if ((event == null ? void 0 : event.type) === 'error') {
                (info == null ? void 0 : info.onErrorCallback) && (info == null ? void 0 : info.onErrorCallback(event));
            } else {
                (info == null ? void 0 : info.cb) && (info == null ? void 0 : info.cb());
            }
        };
        // Prevent memory leaks in IE.
        if (link) {
            link.onerror = null;
            link.onload = null;
            safeWrapper(function() {
                var _info_needDeleteLink = info.needDeleteLink, needDeleteLink = _info_needDeleteLink === void 0 ? true : _info_needDeleteLink;
                if (needDeleteLink) {
                    (link == null ? void 0 : link.parentNode) && link.parentNode.removeChild(link);
                }
            });
            if (prev) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var res = prev(event);
                onLinkCompleteCallback();
                return res;
            }
        }
        onLinkCompleteCallback();
    };
    link.onerror = onLinkComplete.bind(null, link.onerror);
    link.onload = onLinkComplete.bind(null, link.onload);
    return {
        link: link,
        needAttach: needAttach
    };
}
function loadScript(url, info) {
    var _info_attrs = info.attrs, attrs = _info_attrs === void 0 ? {} : _info_attrs, createScriptHook = info.createScriptHook;
    return new Promise(function(resolve, reject) {
        var _createScript = createScript({
            url: url,
            cb: resolve,
            onErrorCallback: reject,
            attrs: polyfills._({
                fetchpriority: 'high'
            }, attrs),
            createScriptHook: createScriptHook,
            needDeleteScript: true
        }), script = _createScript.script, needAttach = _createScript.needAttach;
        needAttach && document.head.appendChild(script);
    });
}
function importNodeModule(name) {
    if (!name) {
        throw new Error('import specifier is required');
    }
    var importModule = new Function('name', "return import(name)");
    return importModule(name).then(function(res) {
        return res;
    }).catch(function(error1) {
        console.error("Error importing module ".concat(name, ":"), error1);
        throw error1;
    });
}
var loadNodeFetch = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function() {
        var fetchModule;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        importNodeModule('node-fetch')
                    ];
                case 1:
                    fetchModule = _state.sent();
                    return [
                        2,
                        fetchModule.default || fetchModule
                    ];
            }
        });
    });
    return function loadNodeFetch1() {
        return _ref.apply(this, arguments);
    };
}();
var lazyLoaderHookFetch = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function(input, init, loaderHook) {
        var hook, res, fetchFunction, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    hook = function(url, init) {
                        return loaderHook.lifecycle.fetch.emit(url, init);
                    };
                    return [
                        4,
                        hook(input, init || {})
                    ];
                case 1:
                    res = _state.sent();
                    if (!(!res || !_instanceof(res, Response))) return [
                        3,
                        5
                    ];
                    if (!(typeof fetch === 'undefined')) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        loadNodeFetch()
                    ];
                case 2:
                    _tmp = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    _tmp = fetch;
                    _state.label = 4;
                case 4:
                    fetchFunction = _tmp;
                    return [
                        2,
                        fetchFunction(input, init || {})
                    ];
                case 5:
                    return [
                        2,
                        res
                    ];
            }
        });
    });
    return function lazyLoaderHookFetch1(input, init, loaderHook) {
        return _ref.apply(this, arguments);
    };
}();
var createScriptNode = typeof ENV_TARGET === 'undefined' || ENV_TARGET !== 'web' ? function(url, cb, attrs, loaderHook) {
    if (loaderHook == null ? void 0 : loaderHook.createScriptHook) {
        var hookResult = loaderHook.createScriptHook(url);
        if (hookResult && (typeof hookResult === "undefined" ? "undefined" : _type_of(hookResult)) === 'object' && 'url' in hookResult) {
            url = hookResult.url;
        }
    }
    var urlObj;
    try {
        urlObj = new URL(url);
    } catch (e) {
        console.error('Error constructing URL:', e);
        cb(new Error("Invalid URL: ".concat(e)));
        return;
    }
    var getFetch = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                if (loaderHook == null ? void 0 : loaderHook.fetch) {
                    return [
                        2,
                        function(input, init) {
                            return lazyLoaderHookFetch(input, init, loaderHook);
                        }
                    ];
                }
                return [
                    2,
                    typeof fetch === 'undefined' ? loadNodeFetch() : fetch
                ];
            });
        });
        return function getFetch() {
            return _ref.apply(this, arguments);
        };
    }();
    var handleScriptFetch = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(f, urlObj) {
            var _vm_constants, res, data, _ref, path, vm, scriptContext, urlDirname, filename, _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER, script, exportedInterface, container, e;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            4,
                            ,
                            5
                        ]);
                        return [
                            4,
                            f(urlObj.href)
                        ];
                    case 1:
                        res = _state.sent();
                        return [
                            4,
                            res.text()
                        ];
                    case 2:
                        data = _state.sent();
                        return [
                            4,
                            Promise.all([
                                importNodeModule('path'),
                                importNodeModule('vm')
                            ])
                        ];
                    case 3:
                        _ref = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            2
                        ]), path = _ref[0], vm = _ref[1];
                        scriptContext = {
                            exports: {},
                            module: {
                                exports: {}
                            }
                        };
                        urlDirname = urlObj.pathname.split('/').slice(0, -1).join('/');
                        filename = path.basename(urlObj.pathname);
                        script = new vm.Script("(function(exports, module, require, __dirname, __filename) {".concat(data, "\n})"), {
                            filename: filename,
                            importModuleDynamically: (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = (_vm_constants = vm.constants) == null ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) != null ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule
                        });
                        script.runInThisContext()(scriptContext.exports, scriptContext.module, eval('require'), urlDirname, filename);
                        exportedInterface = scriptContext.module.exports || scriptContext.exports;
                        if (attrs && exportedInterface && attrs['globalName']) {
                            container = exportedInterface[attrs['globalName']] || exportedInterface;
                            cb(undefined, container);
                            return [
                                2
                            ];
                        }
                        cb(undefined, exportedInterface);
                        return [
                            3,
                            5
                        ];
                    case 4:
                        e = _state.sent();
                        cb(_instanceof(e, Error) ? e : new Error("Script execution error: ".concat(e)));
                        return [
                            3,
                            5
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleScriptFetch(f, urlObj) {
            return _ref.apply(this, arguments);
        };
    }();
    getFetch().then(/*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(f) {
            var _tmp, _tmp1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!((attrs == null ? void 0 : attrs['type']) === 'esm' || (attrs == null ? void 0 : attrs['type']) === 'module')) return [
                            3,
                            2
                        ];
                        _tmp = [
                            urlObj.href
                        ];
                        _tmp1 = {
                            fetch: f
                        };
                        return [
                            4,
                            importNodeModule('vm')
                        ];
                    case 1:
                        return [
                            2,
                            loadModule.apply(void 0, _tmp.concat([
                                (_tmp1.vm = _state.sent(), _tmp1)
                            ])).then(/*#__PURE__*/ function() {
                                var _ref = _async_to_generator(function(module) {
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                return [
                                                    4,
                                                    module.evaluate()
                                                ];
                                            case 1:
                                                _state.sent();
                                                cb(undefined, module.namespace);
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                });
                                return function(module) {
                                    return _ref.apply(this, arguments);
                                };
                            }()).catch(function(e) {
                                cb(_instanceof(e, Error) ? e : new Error("Script execution error: ".concat(e)));
                            })
                        ];
                    case 2:
                        handleScriptFetch(f, urlObj);
                        return [
                            2
                        ];
                }
            });
        });
        return function(f) {
            return _ref.apply(this, arguments);
        };
    }()).catch(function(err) {
        cb(err);
    });
} : function(url, cb, attrs, loaderHook) {
    cb(new Error('createScriptNode is disabled in non-Node.js environment'));
};
var loadScriptNode = typeof ENV_TARGET === 'undefined' || ENV_TARGET !== 'web' ? function(url, info) {
    return new Promise(function(resolve, reject) {
        createScriptNode(url, function(error1, scriptContext) {
            if (error1) {
                reject(error1);
            } else {
                var _info_attrs, _info_attrs1;
                var remoteEntryKey = (info == null ? void 0 : (_info_attrs = info.attrs) == null ? void 0 : _info_attrs['globalName']) || "__FEDERATION_".concat(info == null ? void 0 : (_info_attrs1 = info.attrs) == null ? void 0 : _info_attrs1['name'], ":custom__");
                var entryExports = globalThis[remoteEntryKey] = scriptContext;
                resolve(entryExports);
            }
        }, info.attrs, info.loaderHook);
    });
} : function(url, info) {
    throw new Error('loadScriptNode is disabled in non-Node.js environment');
};
function loadModule(url, options) {
    return _loadModule.apply(this, arguments);
}
function _loadModule() {
    _loadModule = _async_to_generator(function(url, options) {
        var fetch1, vm, response, code, module;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fetch1 = options.fetch, vm = options.vm;
                    return [
                        4,
                        fetch1(url)
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        4,
                        response.text()
                    ];
                case 2:
                    code = _state.sent();
                    module = new vm.SourceTextModule(code, {
                        // @ts-ignore
                        importModuleDynamically: /*#__PURE__*/ function() {
                            var _ref = _async_to_generator(function(specifier, script) {
                                var resolvedUrl;
                                return _ts_generator(this, function(_state) {
                                    resolvedUrl = new URL(specifier, url).href;
                                    return [
                                        2,
                                        loadModule(resolvedUrl, options)
                                    ];
                                });
                            });
                            return function(specifier, script) {
                                return _ref.apply(this, arguments);
                            };
                        }()
                    });
                    return [
                        4,
                        module.link(/*#__PURE__*/ function() {
                            var _ref = _async_to_generator(function(specifier) {
                                var resolvedUrl, module;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            resolvedUrl = new URL(specifier, url).href;
                                            return [
                                                4,
                                                loadModule(resolvedUrl, options)
                                            ];
                                        case 1:
                                            module = _state.sent();
                                            return [
                                                2,
                                                module
                                            ];
                                    }
                                });
                            });
                            return function(specifier) {
                                return _ref.apply(this, arguments);
                            };
                        }())
                    ];
                case 3:
                    _state.sent();
                    return [
                        2,
                        module
                    ];
            }
        });
    });
    return _loadModule.apply(this, arguments);
}
function normalizeOptions(enableDefault, defaultOptions, key) {
    return function(options) {
        if (options === false) {
            return false;
        }
        if (typeof options === 'undefined') {
            if (enableDefault) {
                return defaultOptions;
            } else {
                return false;
            }
        }
        if (options === true) {
            return defaultOptions;
        }
        if (options && (typeof options === "undefined" ? "undefined" : _type_of(options)) === 'object') {
            return polyfills._({}, defaultOptions, options);
        }
        throw new Error("Unexpected type for `".concat(key, "`, expect boolean/undefined/object, got: ").concat(typeof options === "undefined" ? "undefined" : _type_of(options)));
    };
}
var createModuleFederationConfig = function(options) {
    return options;
};
exports.BROWSER_LOG_KEY = BROWSER_LOG_KEY;
exports.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX;
exports.EncodedNameTransformMap = EncodedNameTransformMap;
exports.FederationModuleManifest = FederationModuleManifest;
exports.MANIFEST_EXT = MANIFEST_EXT;
exports.MFModuleType = MFModuleType;
exports.MFPrefetchCommon = MFPrefetchCommon;
exports.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER;
exports.ManifestFileName = ManifestFileName;
exports.NameTransformMap = NameTransformMap;
exports.NameTransformSymbol = NameTransformSymbol;
exports.SEPARATOR = SEPARATOR;
exports.StatsFileName = StatsFileName;
exports.TEMP_DIR = TEMP_DIR;
exports.assert = assert;
exports.composeKeyWithSeparator = composeKeyWithSeparator;
exports.containerPlugin = ContainerPlugin;
exports.containerReferencePlugin = ContainerReferencePlugin;
exports.createLink = createLink;
exports.createLogger = createLogger;
exports.createModuleFederationConfig = createModuleFederationConfig;
exports.createScript = createScript;
exports.createScriptNode = createScriptNode;
exports.decodeName = decodeName;
exports.encodeName = encodeName;
exports.error = error;
exports.generateExposeFilename = generateExposeFilename;
exports.generateShareFilename = generateShareFilename;
exports.generateSnapshotFromManifest = generateSnapshotFromManifest;
exports.getProcessEnv = getProcessEnv;
exports.getResourceUrl = getResourceUrl;
exports.inferAutoPublicPath = inferAutoPublicPath;
exports.isBrowserEnv = isBrowserEnv;
exports.isDebugMode = isDebugMode;
exports.isManifestProvider = isManifestProvider;
exports.isReactNativeEnv = isReactNativeEnv;
exports.isRequiredVersion = isRequiredVersion;
exports.isStaticResourcesEqual = isStaticResourcesEqual;
exports.loadScript = loadScript;
exports.loadScriptNode = loadScriptNode;
exports.logger = logger;
exports.moduleFederationPlugin = ModuleFederationPlugin;
exports.normalizeOptions = normalizeOptions;
exports.parseEntry = parseEntry;
exports.safeToString = safeToString;
exports.safeWrapper = safeWrapper;
exports.sharePlugin = SharePlugin;
exports.simpleJoinRemoteEntry = simpleJoinRemoteEntry;
exports.warn = warn;


}),
"./node_modules/@module-federation/sdk/dist/polyfills.cjs.cjs": (function (__unused_webpack_module, exports) {

function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
exports._ = _extends;


}),
"./node_modules/@module-federation/webpack-bundler-runtime/dist/constant.cjs.cjs": (function (__unused_webpack_module, exports) {

var FEDERATION_SUPPORTED_TYPES = [
    'script'
];
exports.FEDERATION_SUPPORTED_TYPES = FEDERATION_SUPPORTED_TYPES;


}),
"./node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.cjs": (function (module, __unused_webpack_exports, __webpack_require__) {

var runtime = __webpack_require__(/*! @module-federation/runtime */ "./node_modules/@module-federation/runtime/dist/index.cjs.cjs");
var constant = __webpack_require__(/*! ./constant.cjs.cjs */ "./node_modules/@module-federation/webpack-bundler-runtime/dist/constant.cjs.cjs");
var sdk = __webpack_require__(/*! @module-federation/sdk */ "./node_modules/@module-federation/sdk/dist/index.cjs.cjs");
function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        for(var k in e){
            n[k] = e[k];
        }
    }
    n.default = e;
    return Object.freeze(n);
}
var runtime__namespace = /*#__PURE__*/ _interopNamespaceDefault(runtime);
function attachShareScopeMap(webpackRequire) {
    if (!webpackRequire.S || webpackRequire.federation.hasAttachShareScopeMap || !webpackRequire.federation.instance || !webpackRequire.federation.instance.shareScopeMap) {
        return;
    }
    webpackRequire.S = webpackRequire.federation.instance.shareScopeMap;
    webpackRequire.federation.hasAttachShareScopeMap = true;
}
function remotes(options) {
    var chunkId = options.chunkId, promises = options.promises, chunkMapping = options.chunkMapping, idToExternalAndNameMapping = options.idToExternalAndNameMapping, webpackRequire = options.webpackRequire, idToRemoteMap = options.idToRemoteMap;
    attachShareScopeMap(webpackRequire);
    if (webpackRequire.o(chunkMapping, chunkId)) {
        chunkMapping[chunkId].forEach(function(id) {
            var getScope = webpackRequire.R;
            if (!getScope) {
                getScope = [];
            }
            var data = idToExternalAndNameMapping[id];
            var remoteInfos = idToRemoteMap[id];
            // @ts-ignore seems not work
            if (getScope.indexOf(data) >= 0) {
                return;
            }
            // @ts-ignore seems not work
            getScope.push(data);
            if (data.p) {
                return promises.push(data.p);
            }
            var onError = function(error) {
                if (!error) {
                    error = new Error('Container missing');
                }
                if (typeof error.message === 'string') {
                    error.message += '\nwhile loading "'.concat(data[1], '" from ').concat(data[2]);
                }
                webpackRequire.m[id] = function() {
                    throw error;
                };
                data.p = 0;
            };
            var handleFunction = function(fn, arg1, arg2, d, next, first) {
                try {
                    var promise = fn(arg1, arg2);
                    if (promise && promise.then) {
                        var p = promise.then(function(result) {
                            return next(result, d);
                        }, onError);
                        if (first) {
                            promises.push(data.p = p);
                        } else {
                            return p;
                        }
                    } else {
                        return next(promise, d, first);
                    }
                } catch (error) {
                    onError(error);
                }
            };
            var onExternal = function(external, _, first) {
                return external ? handleFunction(webpackRequire.I, data[0], 0, external, onInitialized, first) : onError();
            };
            // eslint-disable-next-line no-var
            var onInitialized = function(_, external, first) {
                return handleFunction(external.get, data[1], getScope, 0, onFactory, first);
            };
            // eslint-disable-next-line no-var
            var onFactory = function(factory) {
                data.p = 1;
                webpackRequire.m[id] = function(module1) {
                    module1.exports = factory();
                };
            };
            var onRemoteLoaded = function() {
                try {
                    var remoteName = sdk.decodeName(remoteInfos[0].name, sdk.ENCODE_NAME_PREFIX);
                    var remoteModuleName = remoteName + data[1].slice(1);
                    var instance = webpackRequire.federation.instance;
                    var loadRemote = function() {
                        return webpackRequire.federation.instance.loadRemote(remoteModuleName, {
                            loadFactory: false,
                            from: 'build'
                        });
                    };
                    if (instance.options.shareStrategy === 'version-first') {
                        return Promise.all(instance.sharedHandler.initializeSharing(data[0])).then(function() {
                            return loadRemote();
                        });
                    }
                    return loadRemote();
                } catch (error) {
                    onError(error);
                }
            };
            var useRuntimeLoad = remoteInfos.length === 1 && constant.FEDERATION_SUPPORTED_TYPES.includes(remoteInfos[0].externalType) && remoteInfos[0].name;
            if (useRuntimeLoad) {
                handleFunction(onRemoteLoaded, data[2], 0, 0, onFactory, 1);
            } else {
                handleFunction(webpackRequire, data[2], 0, 0, onExternal, 1);
            }
        });
    }
}
function consumes(options) {
    var chunkId = options.chunkId, promises = options.promises, chunkMapping = options.chunkMapping, installedModules = options.installedModules, moduleToHandlerMapping = options.moduleToHandlerMapping, webpackRequire = options.webpackRequire;
    attachShareScopeMap(webpackRequire);
    if (webpackRequire.o(chunkMapping, chunkId)) {
        chunkMapping[chunkId].forEach(function(id) {
            if (webpackRequire.o(installedModules, id)) {
                return promises.push(installedModules[id]);
            }
            var onFactory = function(factory) {
                installedModules[id] = 0;
                webpackRequire.m[id] = function(module1) {
                    delete webpackRequire.c[id];
                    module1.exports = factory();
                };
            };
            var onError = function(error) {
                delete installedModules[id];
                webpackRequire.m[id] = function(module1) {
                    delete webpackRequire.c[id];
                    throw error;
                };
            };
            try {
                var federationInstance = webpackRequire.federation.instance;
                if (!federationInstance) {
                    throw new Error('Federation instance not found!');
                }
                var _moduleToHandlerMapping_id = moduleToHandlerMapping[id], shareKey = _moduleToHandlerMapping_id.shareKey, getter = _moduleToHandlerMapping_id.getter, shareInfo = _moduleToHandlerMapping_id.shareInfo;
                var promise = federationInstance.loadShare(shareKey, {
                    customShareInfo: shareInfo
                }).then(function(factory) {
                    if (factory === false) {
                        return getter();
                    }
                    return factory;
                });
                if (promise.then) {
                    promises.push(installedModules[id] = promise.then(onFactory).catch(onError));
                } else {
                    // @ts-ignore maintain previous logic
                    onFactory(promise);
                }
            } catch (e) {
                onError(e);
            }
        });
    }
}
function initializeSharing(param) {
    var shareScopeName = param.shareScopeName, webpackRequire = param.webpackRequire, initPromises = param.initPromises, initTokens = param.initTokens, initScope = param.initScope;
    var shareScopeKeys = Array.isArray(shareScopeName) ? shareScopeName : [
        shareScopeName
    ];
    var initializeSharingPromises = [];
    var _initializeSharing = function _initializeSharing(shareScopeKey) {
        if (!initScope) initScope = [];
        var mfInstance = webpackRequire.federation.instance;
        // handling circular init calls
        var initToken = initTokens[shareScopeKey];
        if (!initToken) initToken = initTokens[shareScopeKey] = {
            from: mfInstance.name
        };
        if (initScope.indexOf(initToken) >= 0) return;
        initScope.push(initToken);
        var promise = initPromises[shareScopeKey];
        if (promise) return promise;
        var warn = function(msg) {
            return typeof console !== 'undefined' && console.warn && console.warn(msg);
        };
        var initExternal = function(id) {
            var handleError = function(err) {
                return warn('Initialization of sharing external failed: ' + err);
            };
            try {
                var _$module = webpackRequire(id);
                if (!_$module) return;
                var initFn = function(module1) {
                    return module1 && module1.init && // @ts-ignore compat legacy mf shared behavior
                    module1.init(webpackRequire.S[shareScopeKey], initScope, {
                        shareScopeMap: webpackRequire.S || {},
                        shareScopeKeys: shareScopeName
                    });
                };
                if (_$module.then) return promises.push(_$module.then(initFn, handleError));
                var initResult = initFn(_$module);
                // @ts-ignore
                if (initResult && typeof initResult !== 'boolean' && initResult.then) return promises.push(initResult['catch'](handleError));
            } catch (err) {
                handleError(err);
            }
        };
        var promises = mfInstance.initializeSharing(shareScopeKey, {
            strategy: mfInstance.options.shareStrategy,
            initScope: initScope,
            from: 'build'
        });
        attachShareScopeMap(webpackRequire);
        var bundlerRuntimeRemotesOptions = webpackRequire.federation.bundlerRuntimeOptions.remotes;
        if (bundlerRuntimeRemotesOptions) {
            Object.keys(bundlerRuntimeRemotesOptions.idToRemoteMap).forEach(function(moduleId) {
                var info = bundlerRuntimeRemotesOptions.idToRemoteMap[moduleId];
                var externalModuleId = bundlerRuntimeRemotesOptions.idToExternalAndNameMapping[moduleId][2];
                if (info.length > 1) {
                    initExternal(externalModuleId);
                } else if (info.length === 1) {
                    var remoteInfo = info[0];
                    if (!constant.FEDERATION_SUPPORTED_TYPES.includes(remoteInfo.externalType)) {
                        initExternal(externalModuleId);
                    }
                }
            });
        }
        if (!promises.length) {
            return initPromises[shareScopeKey] = true;
        }
        return initPromises[shareScopeKey] = Promise.all(promises).then(function() {
            return initPromises[shareScopeKey] = true;
        });
    };
    shareScopeKeys.forEach(function(key) {
        initializeSharingPromises.push(_initializeSharing(key));
    });
    return Promise.all(initializeSharingPromises).then(function() {
        return true;
    });
}
function handleInitialConsumes(options) {
    var moduleId = options.moduleId, moduleToHandlerMapping = options.moduleToHandlerMapping, webpackRequire = options.webpackRequire;
    var federationInstance = webpackRequire.federation.instance;
    if (!federationInstance) {
        throw new Error('Federation instance not found!');
    }
    var _moduleToHandlerMapping_moduleId = moduleToHandlerMapping[moduleId], shareKey = _moduleToHandlerMapping_moduleId.shareKey, shareInfo = _moduleToHandlerMapping_moduleId.shareInfo;
    try {
        return federationInstance.loadShareSync(shareKey, {
            customShareInfo: shareInfo
        });
    } catch (err) {
        console.error('loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.');
        console.error('The original error message is as follows: ');
        throw err;
    }
}
function installInitialConsumes(options) {
    var moduleToHandlerMapping = options.moduleToHandlerMapping, webpackRequire = options.webpackRequire, installedModules = options.installedModules, initialConsumes = options.initialConsumes;
    initialConsumes.forEach(function(id) {
        webpackRequire.m[id] = function(module1) {
            // Handle scenario when module is used synchronously
            installedModules[id] = 0;
            delete webpackRequire.c[id];
            var factory = handleInitialConsumes({
                moduleId: id,
                moduleToHandlerMapping: moduleToHandlerMapping,
                webpackRequire: webpackRequire
            });
            if (typeof factory !== 'function') {
                throw new Error("Shared module is not available for eager consumption: ".concat(id));
            }
            module1.exports = factory();
        };
    });
}
function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function initContainerEntry(options) {
    var webpackRequire = options.webpackRequire, shareScope = options.shareScope, initScope = options.initScope, shareScopeKey = options.shareScopeKey, remoteEntryInitOptions = options.remoteEntryInitOptions;
    if (!webpackRequire.S) return;
    if (!webpackRequire.federation || !webpackRequire.federation.instance || !webpackRequire.federation.initOptions) return;
    var federationInstance = webpackRequire.federation.instance;
    federationInstance.initOptions(_extends({
        name: webpackRequire.federation.initOptions.name,
        remotes: []
    }, remoteEntryInitOptions));
    var hostShareScopeKeys = remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeKeys;
    var hostShareScopeMap = remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap;
    // host: 'default' remote: 'default'  remote['default'] = hostShareScopeMap['default']
    // host: ['default', 'scope1'] remote: 'default'  remote['default'] = hostShareScopeMap['default']; remote['scope1'] = hostShareScopeMap['scop1']
    // host: 'default' remote: ['default','scope1']  remote['default'] = hostShareScopeMap['default']; remote['scope1'] = hostShareScopeMap['scope1'] = {}
    // host: ['scope1','default'] remote: ['scope1','scope2'] => remote['scope1'] = hostShareScopeMap['scope1']; remote['scope2'] = hostShareScopeMap['scope2'] = {};
    if (!shareScopeKey || typeof shareScopeKey === 'string') {
        var key = shareScopeKey || 'default';
        if (Array.isArray(hostShareScopeKeys)) {
            // const sc = hostShareScopeMap![key];
            // if (!sc) {
            //   throw new Error('shareScopeKey is not exist in hostShareScopeMap');
            // }
            // federationInstance.initShareScopeMap(key, sc, {
            //   hostShareScopeMap: remoteEntryInitOptions?.shareScopeMap || {},
            // });
            hostShareScopeKeys.forEach(function(hostKey) {
                if (!hostShareScopeMap[hostKey]) {
                    hostShareScopeMap[hostKey] = {};
                }
                var sc = hostShareScopeMap[hostKey];
                federationInstance.initShareScopeMap(hostKey, sc, {
                    hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
                });
            });
        } else {
            federationInstance.initShareScopeMap(key, shareScope, {
                hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
            });
        }
    } else {
        shareScopeKey.forEach(function(key) {
            if (!hostShareScopeKeys || !hostShareScopeMap) {
                federationInstance.initShareScopeMap(key, shareScope, {
                    hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
                });
                return;
            }
            if (!hostShareScopeMap[key]) {
                hostShareScopeMap[key] = {};
            }
            var sc = hostShareScopeMap[key];
            federationInstance.initShareScopeMap(key, sc, {
                hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
            });
        });
    }
    if (webpackRequire.federation.attachShareScopeMap) {
        webpackRequire.federation.attachShareScopeMap(webpackRequire);
    }
    if (typeof webpackRequire.federation.prefetch === 'function') {
        webpackRequire.federation.prefetch();
    }
    if (!Array.isArray(shareScopeKey)) {
        // @ts-ignore
        return webpackRequire.I(shareScopeKey || 'default', initScope);
    }
    var proxyInitializeSharing = Boolean(webpackRequire.federation.initOptions.shared);
    if (proxyInitializeSharing) {
        // @ts-ignore
        return webpackRequire.I(shareScopeKey, initScope);
    }
    // @ts-ignore
    return Promise.all(shareScopeKey.map(function(key) {
        // @ts-ignore
        return webpackRequire.I(key, initScope);
    })).then(function() {
        return true;
    });
}
var federation = {
    runtime: runtime__namespace,
    instance: undefined,
    initOptions: undefined,
    bundlerRuntime: {
        remotes: remotes,
        consumes: consumes,
        I: initializeSharing,
        S: {},
        installInitialConsumes: installInitialConsumes,
        initContainerEntry: initContainerEntry
    },
    attachShareScopeMap: attachShareScopeMap,
    bundlerRuntimeOptions: {}
};
module.exports = federation;


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// module_federation/runtime
(() => {

if(!__webpack_require__.federation){
    __webpack_require__.federation = {
        
chunkMatcher: function(chunkId) {
    return true;
}

    };
}

})();
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = function () {
	return "1.1.5";
};

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.1.5";

})();
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Users_avechkanov_Desktop_transpilers_modules_bundlers_lessons_lesson_13_consumer2_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.cjs */ "./node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.cjs");
/* ESM import */var _Users_avechkanov_Desktop_transpilers_modules_bundlers_lessons_lesson_13_consumer2_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_cjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_avechkanov_Desktop_transpilers_modules_bundlers_lessons_lesson_13_consumer2_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_cjs__WEBPACK_IMPORTED_MODULE_0__);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

var __module_federation_runtime_plugins__ = [];
var __module_federation_remote_infos__ = {
    "provider": [
        {
            "alias": "provider",
            "name": "provider",
            "entry": "http://localhost:3001/mf-manifest.json",
            "externalType": "script",
            "shareScope": "default"
        }
    ]
};
var __module_federation_container_name__ = "host";
var __module_federation_share_strategy__ = "version-first";
if ((__webpack_require__.initializeSharingData || __webpack_require__.initializeExposesData) && __webpack_require__.federation) {
    var __webpack_require___remotesLoadingData, __webpack_require___remotesLoadingData1, __webpack_require___initializeSharingData, __webpack_require___consumesLoadingData, __webpack_require___consumesLoadingData1, __webpack_require___initializeExposesData, __webpack_require___consumesLoadingData2;
    var override = function(obj, key, value) {
        if (!obj) return;
        if (obj[key]) obj[key] = value;
    };
    var merge = function(obj, key, fn) {
        var value = fn();
        if (Array.isArray(value)) {
            var _obj_key;
            var _obj, _key;
            var _;
            (_ = (_obj = obj)[_key = key]) !== null && _ !== void 0 ? _ : _obj[_key] = [];
            (_obj_key = obj[key]).push.apply(_obj_key, _to_consumable_array(value));
        } else if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && value !== null) {
            var _obj1, _key1;
            var _1;
            (_1 = (_obj1 = obj)[_key1 = key]) !== null && _1 !== void 0 ? _1 : _obj1[_key1] = {};
            Object.assign(obj[key], value);
        }
    };
    var early = function(obj, key, initial) {
        var _obj, _key;
        var _;
        (_ = (_obj = obj)[_key = key]) !== null && _ !== void 0 ? _ : _obj[_key] = initial();
    };
    var __webpack_require___remotesLoadingData_chunkMapping;
    var remotesLoadingChunkMapping = (__webpack_require___remotesLoadingData_chunkMapping = (__webpack_require___remotesLoadingData = __webpack_require__.remotesLoadingData) === null || __webpack_require___remotesLoadingData === void 0 ? void 0 : __webpack_require___remotesLoadingData.chunkMapping) !== null && __webpack_require___remotesLoadingData_chunkMapping !== void 0 ? __webpack_require___remotesLoadingData_chunkMapping : {};
    var __webpack_require___remotesLoadingData_moduleIdToRemoteDataMapping;
    var remotesLoadingModuleIdToRemoteDataMapping = (__webpack_require___remotesLoadingData_moduleIdToRemoteDataMapping = (__webpack_require___remotesLoadingData1 = __webpack_require__.remotesLoadingData) === null || __webpack_require___remotesLoadingData1 === void 0 ? void 0 : __webpack_require___remotesLoadingData1.moduleIdToRemoteDataMapping) !== null && __webpack_require___remotesLoadingData_moduleIdToRemoteDataMapping !== void 0 ? __webpack_require___remotesLoadingData_moduleIdToRemoteDataMapping : {};
    var __webpack_require___initializeSharingData_scopeToSharingDataMapping;
    var initializeSharingScopeToInitDataMapping = (__webpack_require___initializeSharingData_scopeToSharingDataMapping = (__webpack_require___initializeSharingData = __webpack_require__.initializeSharingData) === null || __webpack_require___initializeSharingData === void 0 ? void 0 : __webpack_require___initializeSharingData.scopeToSharingDataMapping) !== null && __webpack_require___initializeSharingData_scopeToSharingDataMapping !== void 0 ? __webpack_require___initializeSharingData_scopeToSharingDataMapping : {};
    var __webpack_require___consumesLoadingData_chunkMapping;
    var consumesLoadingChunkMapping = (__webpack_require___consumesLoadingData_chunkMapping = (__webpack_require___consumesLoadingData = __webpack_require__.consumesLoadingData) === null || __webpack_require___consumesLoadingData === void 0 ? void 0 : __webpack_require___consumesLoadingData.chunkMapping) !== null && __webpack_require___consumesLoadingData_chunkMapping !== void 0 ? __webpack_require___consumesLoadingData_chunkMapping : {};
    var __webpack_require___consumesLoadingData_moduleIdToConsumeDataMapping;
    var consumesLoadingModuleToConsumeDataMapping = (__webpack_require___consumesLoadingData_moduleIdToConsumeDataMapping = (__webpack_require___consumesLoadingData1 = __webpack_require__.consumesLoadingData) === null || __webpack_require___consumesLoadingData1 === void 0 ? void 0 : __webpack_require___consumesLoadingData1.moduleIdToConsumeDataMapping) !== null && __webpack_require___consumesLoadingData_moduleIdToConsumeDataMapping !== void 0 ? __webpack_require___consumesLoadingData_moduleIdToConsumeDataMapping : {};
    var consumesLoadinginstalledModules = {};
    var initializeSharingInitPromises = [];
    var initializeSharingInitTokens = {};
    var containerShareScope = (__webpack_require___initializeExposesData = __webpack_require__.initializeExposesData) === null || __webpack_require___initializeExposesData === void 0 ? void 0 : __webpack_require___initializeExposesData.shareScope;
    for(var key in (_Users_avechkanov_Desktop_transpilers_modules_bundlers_lessons_lesson_13_consumer2_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_cjs__WEBPACK_IMPORTED_MODULE_0___default())){
        __webpack_require__.federation[key] = (_Users_avechkanov_Desktop_transpilers_modules_bundlers_lessons_lesson_13_consumer2_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_cjs__WEBPACK_IMPORTED_MODULE_0___default())[key];
    }
    early(__webpack_require__.federation, "consumesLoadingModuleToHandlerMapping", function() {
        var consumesLoadingModuleToHandlerMapping = {};
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(consumesLoadingModuleToConsumeDataMapping)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), moduleId = _step_value[0], data = _step_value[1];
                consumesLoadingModuleToHandlerMapping[moduleId] = {
                    getter: data.fallback,
                    shareInfo: {
                        shareConfig: {
                            fixedDependencies: false,
                            requiredVersion: data.requiredVersion,
                            strictVersion: data.strictVersion,
                            singleton: data.singleton,
                            eager: data.eager
                        },
                        scope: [
                            data.shareScope
                        ]
                    },
                    shareKey: data.shareKey
                };
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return consumesLoadingModuleToHandlerMapping;
    });
    early(__webpack_require__.federation, "initOptions", function() {
        return {};
    });
    early(__webpack_require__.federation.initOptions, "name", function() {
        return __module_federation_container_name__;
    });
    early(__webpack_require__.federation.initOptions, "shareStrategy", function() {
        return __module_federation_share_strategy__;
    });
    early(__webpack_require__.federation.initOptions, "shared", function() {
        var shared = {};
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(initializeSharingScopeToInitDataMapping)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), scope = _step_value[0], stages = _step_value[1];
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = stages[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var stage = _step1.value;
                        if ((typeof stage === "undefined" ? "undefined" : _type_of(stage)) === "object" && stage !== null) {
                            var name = stage.name, version = stage.version, factory = stage.factory, eager = stage.eager, singleton = stage.singleton, requiredVersion = stage.requiredVersion, strictVersion = stage.strictVersion;
                            var shareConfig = {};
                            var isValidValue = function isValidValue(val) {
                                return typeof val !== "undefined";
                            };
                            if (isValidValue(singleton)) {
                                shareConfig.singleton = singleton;
                            }
                            if (isValidValue(requiredVersion)) {
                                shareConfig.requiredVersion = requiredVersion;
                            }
                            if (isValidValue(eager)) {
                                shareConfig.eager = eager;
                            }
                            if (isValidValue(strictVersion)) {
                                shareConfig.strictVersion = strictVersion;
                            }
                            var options = {
                                version: version,
                                scope: [
                                    scope
                                ],
                                shareConfig: shareConfig,
                                get: factory
                            };
                            if (shared[name]) {
                                shared[name].push(options);
                            } else {
                                shared[name] = [
                                    options
                                ];
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return shared;
    });
    merge(__webpack_require__.federation.initOptions, "remotes", function() {
        return Object.values(__module_federation_remote_infos__).flat().filter(function(remote) {
            return remote.externalType === "script";
        });
    });
    merge(__webpack_require__.federation.initOptions, "plugins", function() {
        return __module_federation_runtime_plugins__;
    });
    early(__webpack_require__.federation, "bundlerRuntimeOptions", function() {
        return {};
    });
    early(__webpack_require__.federation.bundlerRuntimeOptions, "remotes", function() {
        return {};
    });
    early(__webpack_require__.federation.bundlerRuntimeOptions.remotes, "chunkMapping", function() {
        return remotesLoadingChunkMapping;
    });
    early(__webpack_require__.federation.bundlerRuntimeOptions.remotes, "idToExternalAndNameMapping", function() {
        var remotesLoadingIdToExternalAndNameMappingMapping = {};
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(remotesLoadingModuleIdToRemoteDataMapping)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), moduleId = _step_value[0], data = _step_value[1];
                remotesLoadingIdToExternalAndNameMappingMapping[moduleId] = [
                    data.shareScope,
                    data.name,
                    data.externalModuleId,
                    data.remoteName
                ];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return remotesLoadingIdToExternalAndNameMappingMapping;
    });
    early(__webpack_require__.federation.bundlerRuntimeOptions.remotes, "webpackRequire", function() {
        return __webpack_require__;
    });
    merge(__webpack_require__.federation.bundlerRuntimeOptions.remotes, "idToRemoteMap", function() {
        var idToRemoteMap = {};
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.entries(remotesLoadingModuleIdToRemoteDataMapping)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), id = _step_value[0], remoteData = _step_value[1];
                var info = __module_federation_remote_infos__[remoteData.remoteName];
                if (info) idToRemoteMap[id] = info;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return idToRemoteMap;
    });
    override(__webpack_require__, "S", __webpack_require__.federation.bundlerRuntime.S);
    if (__webpack_require__.federation.attachShareScopeMap) {
        __webpack_require__.federation.attachShareScopeMap(__webpack_require__);
    }
    override(__webpack_require__.f, "remotes", function(chunkId, promises) {
        return __webpack_require__.federation.bundlerRuntime.remotes({
            chunkId: chunkId,
            promises: promises,
            chunkMapping: remotesLoadingChunkMapping,
            idToExternalAndNameMapping: __webpack_require__.federation.bundlerRuntimeOptions.remotes.idToExternalAndNameMapping,
            idToRemoteMap: __webpack_require__.federation.bundlerRuntimeOptions.remotes.idToRemoteMap,
            webpackRequire: __webpack_require__
        });
    });
    override(__webpack_require__.f, "consumes", function(chunkId, promises) {
        return __webpack_require__.federation.bundlerRuntime.consumes({
            chunkId: chunkId,
            promises: promises,
            chunkMapping: consumesLoadingChunkMapping,
            moduleToHandlerMapping: __webpack_require__.federation.consumesLoadingModuleToHandlerMapping,
            installedModules: consumesLoadinginstalledModules,
            webpackRequire: __webpack_require__
        });
    });
    override(__webpack_require__, "I", function(name, initScope) {
        return __webpack_require__.federation.bundlerRuntime.I({
            shareScopeName: name,
            initScope: initScope,
            initPromises: initializeSharingInitPromises,
            initTokens: initializeSharingInitTokens,
            webpackRequire: __webpack_require__
        });
    });
    override(__webpack_require__, "initContainer", function(shareScope, initScope, remoteEntryInitOptions) {
        return __webpack_require__.federation.bundlerRuntime.initContainerEntry({
            shareScope: shareScope,
            initScope: initScope,
            remoteEntryInitOptions: remoteEntryInitOptions,
            shareScopeKey: containerShareScope,
            webpackRequire: __webpack_require__
        });
    });
    override(__webpack_require__, "getContainer", function(module1, getScope) {
        var moduleMap = __webpack_require__.initializeExposesData.moduleMap;
        __webpack_require__.R = getScope;
        getScope = Object.prototype.hasOwnProperty.call(moduleMap, module1) ? moduleMap[module1]() : Promise.resolve().then(function() {
            throw new Error('Module "' + module1 + '" does not exist in container.');
        });
        __webpack_require__.R = undefined;
        return getScope;
    });
    __webpack_require__.federation.instance = __webpack_require__.federation.runtime.init(__webpack_require__.federation.initOptions);
    if ((__webpack_require___consumesLoadingData2 = __webpack_require__.consumesLoadingData) === null || __webpack_require___consumesLoadingData2 === void 0 ? void 0 : __webpack_require___consumesLoadingData2.initialConsumes) {
        __webpack_require__.federation.bundlerRuntime.installInitialConsumes({
            webpackRequire: __webpack_require__,
            installedModules: consumesLoadinginstalledModules,
            initialConsumes: __webpack_require__.consumesLoadingData.initialConsumes,
            moduleToHandlerMapping: __webpack_require__.federation.consumesLoadingModuleToHandlerMapping
        });
    }
}

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _hapi_hapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/hapi */ "@hapi/hapi");
/* ESM import */var _hapi_hapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_hapi__WEBPACK_IMPORTED_MODULE_0__);
// server.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

var init = /*#__PURE__*/ _async_to_generator(function() {
    var server;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                server = _hapi_hapi__WEBPACK_IMPORTED_MODULE_0___default().server({
                    port: 3002,
                    host: '127.0.0.1'
                });
                server.route({
                    method: 'GET',
                    path: '/',
                    handler: function(request, h) {
                        return h.response('\n                <!DOCTYPE html>\n                <html lang="ru">\n                <head>\n                <meta charset="UTF-8">\n                <title>Hapi Server</title>\n                </head>\n                <body>\n                <div id="root"></div>\n                <script src="/assets/main.js"></script>\n                </body>\n                </html>\n            ').type('text/html');
                    }
                });
                return [
                    4,
                    server.start()
                ];
            case 1:
                _state.sent();
                console.log("Сервер запущен на " + server.info.uri);
                return [
                    2
                ];
        }
    });
});
process.on('unhandledRejection', function(err) {
    console.error(err);
    process.exit(1);
});
init();

})();

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQG1vZHVsZS1mZWRlcmF0aW9uL2Vycm9yLWNvZGVzL2Rpc3QvaW5kZXguY2pzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi9ydW50aW1lLWNvcmUvZGlzdC9pbmRleC5janMuY2pzIiwiLi4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi9ydW50aW1lLWNvcmUvZGlzdC9wb2x5ZmlsbHMuY2pzLmNqcyIsIi4uL25vZGVfbW9kdWxlcy9AbW9kdWxlLWZlZGVyYXRpb24vcnVudGltZS9kaXN0L2luZGV4LmNqcy5janMiLCIuLi9ub2RlX21vZHVsZXMvQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUvZGlzdC91dGlscy5janMuY2pzIiwiLi4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi9zZGsvZGlzdC9pbmRleC5janMuY2pzIiwiLi4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi9zZGsvZGlzdC9wb2x5ZmlsbHMuY2pzLmNqcyIsIi4uL25vZGVfbW9kdWxlcy9AbW9kdWxlLWZlZGVyYXRpb24vd2VicGFjay1idW5kbGVyLXJ1bnRpbWUvZGlzdC9jb25zdGFudC5janMuY2pzIiwiLi4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi93ZWJwYWNrLWJ1bmRsZXItcnVudGltZS9kaXN0L2luZGV4LmNqcy5janMiLCIuLi89PVwidW5kZWZpbmVkXCJ9O2lmKGlzVmFsaWRWYWx1ZShzaW5nbGV0b24pKXtzaGFyZUNvbmZpZy5zaW5nbGV0b249c2luZ2xldG9ufWlmKGlzVmFsaWRWYWx1ZShyZXF1aXJlZFZlcnNpb24pKXtzaGFyZUNvbmZpZy5yZXF1aXJlZFZlcnNpb249cmVxdWlyZWRWZXJzaW9ufWlmKGlzVmFsaWRWYWx1ZShlYWdlcikpe3NoYXJlQ29uZmlnLmVhZ2VyPWVhZ2VyfWlmKGlzVmFsaWRWYWx1ZShzdHJpY3RWZXJzaW9uKSl7c2hhcmVDb25maWcuc3RyaWN0VmVyc2lvbj1zdHJpY3RWZXJzaW9ufWNvbnN0IG9wdGlvbnM9e3ZlcnNpb24sc2NvcGU6W3Njb3BlXSxzaGFyZUNvbmZpZyxnZXQ6ZmFjdG9yeX07aWYoc2hhcmVkW25hbWVdKXtzaGFyZWRbbmFtZV0ucHVzaChvcHRpb25zKX1lbHNle3NoYXJlZFtuYW1lXT1bb3B0aW9uc119fX19cmV0dXJuIHNoYXJlZH0pO21lcmdlKF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucyxcInJlbW90ZXNcIiwoKT0+T2JqZWN0LnZhbHVlcyhfX21vZHVsZV9mZWRlcmF0aW9uX3JlbW90ZV9pbmZvc19fKS5mbGF0KCkuZmlsdGVyKHJlbW90ZT0+cmVtb3RlLmV4dGVybmFsVHlwZT09PVwic2NyaXB0XCIpKTttZXJnZShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMsXCJwbHVnaW5zXCIsKCk9Pl9fbW9kdWxlX2ZlZGVyYXRpb25fcnVudGltZV9wbHVnaW5zX18pO2Vhcmx5KF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbixcImJ1bmRsZXJSdW50aW1lT3B0aW9uc1wiLCgpPT4oe30pKTtlYXJseShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWVPcHRpb25zLFwicmVtb3Rlc1wiLCgpPT4oe30pKTtlYXJseShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWVPcHRpb25zLnJlbW90ZXMsXCJjaHVua01hcHBpbmdcIiwoKT0+cmVtb3Rlc0xvYWRpbmdDaHVua01hcHBpbmcpO2Vhcmx5KF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZU9wdGlvbnMucmVtb3RlcyxcImlkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nXCIsKCk9Pntjb25zdCByZW1vdGVzTG9hZGluZ0lkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nTWFwcGluZz17fTtmb3IobGV0W21vZHVsZUlkLGRhdGFdb2YgT2JqZWN0LmVudHJpZXMocmVtb3Rlc0xvYWRpbmdNb2R1bGVJZFRvUmVtb3RlRGF0YU1hcHBpbmcpKXtyZW1vdGVzTG9hZGluZ0lkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nTWFwcGluZ1ttb2R1bGVJZF09W2RhdGEuc2hhcmVTY29wZSxkYXRhLm5hbWUsZGF0YS5leHRlcm5hbE1vZHVsZUlkLGRhdGEucmVtb3RlTmFtZV19cmV0dXJuIHJlbW90ZXNMb2FkaW5nSWRUb0V4dGVybmFsQW5kTmFtZU1hcHBpbmdNYXBwaW5nfSk7ZWFybHkoX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lT3B0aW9ucy5yZW1vdGVzLFwid2VicGFja1JlcXVpcmVcIiwoKT0+X193ZWJwYWNrX3JlcXVpcmVfXyk7bWVyZ2UoX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lT3B0aW9ucy5yZW1vdGVzLFwiaWRUb1JlbW90ZU1hcFwiLCgpPT57Y29uc3QgaWRUb1JlbW90ZU1hcD17fTtmb3IobGV0W2lkLHJlbW90ZURhdGFdb2YgT2JqZWN0LmVudHJpZXMocmVtb3Rlc0xvYWRpbmdNb2R1bGVJZFRvUmVtb3RlRGF0YU1hcHBpbmcpKXtjb25zdCBpbmZvPV9fbW9kdWxlX2ZlZGVyYXRpb25fcmVtb3RlX2luZm9zX19bcmVtb3RlRGF0YS5yZW1vdGVOYW1lXTtpZihpbmZvKWlkVG9SZW1vdGVNYXBbaWRdPWluZm99cmV0dXJuIGlkVG9SZW1vdGVNYXB9KTtvdmVycmlkZShfX3dlYnBhY2tfcmVxdWlyZV9fLFwiU1wiLF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5TKTtpZihfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYXR0YWNoU2hhcmVTY29wZU1hcCl7X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmF0dGFjaFNoYXJlU2NvcGVNYXAoX193ZWJwYWNrX3JlcXVpcmVfXyl9b3ZlcnJpZGUoX193ZWJwYWNrX3JlcXVpcmVfXy5mLFwicmVtb3Rlc1wiLChjaHVua0lkLHByb21pc2VzKT0+X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLnJlbW90ZXMoe2NodW5rSWQscHJvbWlzZXMsY2h1bmtNYXBwaW5nOnJlbW90ZXNMb2FkaW5nQ2h1bmtNYXBwaW5nLGlkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nOl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZU9wdGlvbnMucmVtb3Rlcy5pZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZyxpZFRvUmVtb3RlTWFwOl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZU9wdGlvbnMucmVtb3Rlcy5pZFRvUmVtb3RlTWFwLHdlYnBhY2tSZXF1aXJlOl9fd2VicGFja19yZXF1aXJlX199KSk7b3ZlcnJpZGUoX193ZWJwYWNrX3JlcXVpcmVfXy5mLFwiY29uc3VtZXNcIiwoY2h1bmtJZCxwcm9taXNlcyk9Pl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5jb25zdW1lcyh7Y2h1bmtJZCxwcm9taXNlcyxjaHVua01hcHBpbmc6Y29uc3VtZXNMb2FkaW5nQ2h1bmtNYXBwaW5nLG1vZHVsZVRvSGFuZGxlck1hcHBpbmc6X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmNvbnN1bWVzTG9hZGluZ01vZHVsZVRvSGFuZGxlck1hcHBpbmcsaW5zdGFsbGVkTW9kdWxlczpjb25zdW1lc0xvYWRpbmdpbnN0YWxsZWRNb2R1bGVzLHdlYnBhY2tSZXF1aXJlOl9fd2VicGFja19yZXF1aXJlX199KSk7b3ZlcnJpZGUoX193ZWJwYWNrX3JlcXVpcmVfXyxcIklcIiwobmFtZSxpbml0U2NvcGUpPT5fX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuSSh7c2hhcmVTY29wZU5hbWU6bmFtZSxpbml0U2NvcGUsaW5pdFByb21pc2VzOmluaXRpYWxpemVTaGFyaW5nSW5pdFByb21pc2VzLGluaXRUb2tlbnM6aW5pdGlhbGl6ZVNoYXJpbmdJbml0VG9rZW5zLHdlYnBhY2tSZXF1aXJlOl9fd2VicGFja19yZXF1aXJlX199KSk7b3ZlcnJpZGUoX193ZWJwYWNrX3JlcXVpcmVfXyxcImluaXRDb250YWluZXJcIiwoc2hhcmVTY29wZSxpbml0U2NvcGUscmVtb3RlRW50cnlJbml0T3B0aW9ucyk9Pl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5pbml0Q29udGFpbmVyRW50cnkoe3NoYXJlU2NvcGUsaW5pdFNjb3BlLHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMsc2hhcmVTY29wZUtleTpjb250YWluZXJTaGFyZVNjb3BlLHdlYnBhY2tSZXF1aXJlOl9fd2VicGFja19yZXF1aXJlX199KSk7b3ZlcnJpZGUoX193ZWJwYWNrX3JlcXVpcmVfXyxcImdldENvbnRhaW5lclwiLChtb2R1bGUxLGdldFNjb3BlKT0+e3ZhciBtb2R1bGVNYXA9X193ZWJwYWNrX3JlcXVpcmVfXy5pbml0aWFsaXplRXhwb3Nlc0RhdGEubW9kdWxlTWFwO19fd2VicGFja19yZXF1aXJlX18uUj1nZXRTY29wZTtnZXRTY29wZT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kdWxlTWFwLG1vZHVsZTEpP21vZHVsZU1hcFttb2R1bGUxXSgpOlByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pnt0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSBcIicrbW9kdWxlMSsnXCIgZG9lcyBub3QgZXhpc3QgaW4gY29udGFpbmVyLicpfSk7X193ZWJwYWNrX3JlcXVpcmVfXy5SPXVuZGVmaW5lZDtyZXR1cm4gZ2V0U2NvcGV9KTtfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5zdGFuY2U9X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLnJ1bnRpbWUuaW5pdChfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMpO2lmKChfX3dlYnBhY2tfcmVxdWlyZV9fX2NvbnN1bWVzTG9hZGluZ0RhdGEyPV9fd2VicGFja19yZXF1aXJlX18uY29uc3VtZXNMb2FkaW5nRGF0YSk9PT1udWxsfHxfX3dlYnBhY2tfcmVxdWlyZV9fX2NvbnN1bWVzTG9hZGluZ0RhdGEyPT09dm9pZCAwP3ZvaWQgMDpfX3dlYnBhY2tfcmVxdWlyZV9fX2NvbnN1bWVzTG9hZGluZ0RhdGEyLmluaXRpYWxDb25zdW1lcyl7X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLmluc3RhbGxJbml0aWFsQ29uc3VtZXMoe3dlYnBhY2tSZXF1aXJlOl9fd2VicGFja19yZXF1aXJlX18saW5zdGFsbGVkTW9kdWxlczpjb25zdW1lc0xvYWRpbmdpbnN0YWxsZWRNb2R1bGVzLGluaXRpYWxDb25zdW1lczpfX3dlYnBhY2tfcmVxdWlyZV9fLmNvbnN1bWVzTG9hZGluZ0RhdGEuaW5pdGlhbENvbnN1bWVzLG1vZHVsZVRvSGFuZGxlck1hcHBpbmc6X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmNvbnN1bWVzTG9hZGluZ01vZHVsZVRvSGFuZGxlck1hcHBpbmd9KX19Iiwic2VydmVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmZ1bmN0aW9uIF9kZWZpbmVfcHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbnZhciBSVU5USU1FXzAwMSA9ICdSVU5USU1FLTAwMSc7XG52YXIgUlVOVElNRV8wMDIgPSAnUlVOVElNRS0wMDInO1xudmFyIFJVTlRJTUVfMDAzID0gJ1JVTlRJTUUtMDAzJztcbnZhciBSVU5USU1FXzAwNCA9ICdSVU5USU1FLTAwNCc7XG52YXIgUlVOVElNRV8wMDUgPSAnUlVOVElNRS0wMDUnO1xudmFyIFJVTlRJTUVfMDA2ID0gJ1JVTlRJTUUtMDA2JztcbnZhciBSVU5USU1FXzAwNyA9ICdSVU5USU1FLTAwNyc7XG52YXIgUlVOVElNRV8wMDggPSAnUlVOVElNRS0wMDgnO1xudmFyIFRZUEVfMDAxID0gJ1RZUEUtMDAxJztcbnZhciBCVUlMRF8wMDEgPSAnQlVJTEQtMDAxJztcbnZhciBCVUlMRF8wMDIgPSAnQlVJTEQtMDAyJztcbnZhciBnZXREb2NzVXJsID0gZnVuY3Rpb24oZXJyb3JDb2RlKSB7XG4gICAgdmFyIHR5cGUgPSBlcnJvckNvZGUuc3BsaXQoJy0nKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBcIlZpZXcgdGhlIGRvY3MgdG8gc2VlIGhvdyB0byBzb2x2ZTogaHR0cHM6Ly9tb2R1bGUtZmVkZXJhdGlvbi5pby9ndWlkZS90cm91Ymxlc2hvb3RpbmcvXCIuY29uY2F0KHR5cGUsIFwiL1wiKS5jb25jYXQoZXJyb3JDb2RlKTtcbn07XG52YXIgZ2V0U2hvcnRFcnJvck1zZyA9IGZ1bmN0aW9uKGVycm9yQ29kZSwgZXJyb3JEZXNjTWFwLCBhcmdzLCBvcmlnaW5hbEVycm9yTXNnKSB7XG4gICAgdmFyIG1zZyA9IFtcbiAgICAgICAgXCJcIi5jb25jYXQoW1xuICAgICAgICAgICAgZXJyb3JEZXNjTWFwW2Vycm9yQ29kZV1cbiAgICAgICAgXSwgXCIgI1wiKS5jb25jYXQoZXJyb3JDb2RlKVxuICAgIF07XG4gICAgYXJncyAmJiBtc2cucHVzaChcImFyZ3M6IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShhcmdzKSkpO1xuICAgIG1zZy5wdXNoKGdldERvY3NVcmwoZXJyb3JDb2RlKSk7XG4gICAgb3JpZ2luYWxFcnJvck1zZyAmJiBtc2cucHVzaChcIk9yaWdpbmFsIEVycm9yIE1lc3NhZ2U6XFxuIFwiLmNvbmNhdChvcmlnaW5hbEVycm9yTXNnKSk7XG4gICAgcmV0dXJuIG1zZy5qb2luKCdcXG4nKTtcbn07XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBzb3VyY2UpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxudmFyIF9vYmo7XG52YXIgcnVudGltZURlc2NNYXAgPSAoX29iaiA9IHt9LCBfZGVmaW5lX3Byb3BlcnR5KF9vYmosIFJVTlRJTUVfMDAxLCAnRmFpbGVkIHRvIGdldCByZW1vdGVFbnRyeSBleHBvcnRzLicpLCBfZGVmaW5lX3Byb3BlcnR5KF9vYmosIFJVTlRJTUVfMDAyLCAnVGhlIHJlbW90ZSBlbnRyeSBpbnRlcmZhY2UgZG9lcyBub3QgY29udGFpbiBcImluaXRcIicpLCBfZGVmaW5lX3Byb3BlcnR5KF9vYmosIFJVTlRJTUVfMDAzLCAnRmFpbGVkIHRvIGdldCBtYW5pZmVzdC4nKSwgX2RlZmluZV9wcm9wZXJ0eShfb2JqLCBSVU5USU1FXzAwNCwgJ0ZhaWxlZCB0byBsb2NhdGUgcmVtb3RlLicpLCBfZGVmaW5lX3Byb3BlcnR5KF9vYmosIFJVTlRJTUVfMDA1LCAnSW52YWxpZCBsb2FkU2hhcmVTeW5jIGZ1bmN0aW9uIGNhbGwgZnJvbSBidW5kbGVyIHJ1bnRpbWUnKSwgX2RlZmluZV9wcm9wZXJ0eShfb2JqLCBSVU5USU1FXzAwNiwgJ0ludmFsaWQgbG9hZFNoYXJlU3luYyBmdW5jdGlvbiBjYWxsIGZyb20gcnVudGltZScpLCBfZGVmaW5lX3Byb3BlcnR5KF9vYmosIFJVTlRJTUVfMDA3LCAnRmFpbGVkIHRvIGdldCByZW1vdGUgc25hcHNob3QuJyksIF9kZWZpbmVfcHJvcGVydHkoX29iaiwgUlVOVElNRV8wMDgsICdGYWlsZWQgdG8gbG9hZCBzY3JpcHQgcmVzb3VyY2VzLicpLCBfb2JqKTtcbnZhciB0eXBlRGVzY01hcCA9IF9kZWZpbmVfcHJvcGVydHkoe30sIFRZUEVfMDAxLCAnRmFpbGVkIHRvIGdlbmVyYXRlIHR5cGUgZGVjbGFyYXRpb24uIEV4ZWN1dGUgdGhlIGJlbG93IGNtZCB0byByZXByb2R1Y2UgYW5kIGZpeCB0aGUgZXJyb3IuJyk7XG52YXIgX29iajE7XG52YXIgYnVpbGREZXNjTWFwID0gKF9vYmoxID0ge30sIF9kZWZpbmVfcHJvcGVydHkoX29iajEsIEJVSUxEXzAwMSwgJ0ZhaWxlZCB0byBmaW5kIGV4cG9zZSBtb2R1bGUuJyksIF9kZWZpbmVfcHJvcGVydHkoX29iajEsIEJVSUxEXzAwMiwgJ1B1YmxpY1BhdGggaXMgcmVxdWlyZWQgaW4gcHJvZCBtb2RlLicpLCBfb2JqMSk7XG52YXIgZXJyb3JEZXNjTWFwID0gX2V4dGVuZHMoe30sIHJ1bnRpbWVEZXNjTWFwLCB0eXBlRGVzY01hcCwgYnVpbGREZXNjTWFwKTtcbmV4cG9ydHMuQlVJTERfMDAxID0gQlVJTERfMDAxO1xuZXhwb3J0cy5CVUlMRF8wMDIgPSBCVUlMRF8wMDI7XG5leHBvcnRzLlJVTlRJTUVfMDAxID0gUlVOVElNRV8wMDE7XG5leHBvcnRzLlJVTlRJTUVfMDAyID0gUlVOVElNRV8wMDI7XG5leHBvcnRzLlJVTlRJTUVfMDAzID0gUlVOVElNRV8wMDM7XG5leHBvcnRzLlJVTlRJTUVfMDA0ID0gUlVOVElNRV8wMDQ7XG5leHBvcnRzLlJVTlRJTUVfMDA1ID0gUlVOVElNRV8wMDU7XG5leHBvcnRzLlJVTlRJTUVfMDA2ID0gUlVOVElNRV8wMDY7XG5leHBvcnRzLlJVTlRJTUVfMDA3ID0gUlVOVElNRV8wMDc7XG5leHBvcnRzLlJVTlRJTUVfMDA4ID0gUlVOVElNRV8wMDg7XG5leHBvcnRzLlRZUEVfMDAxID0gVFlQRV8wMDE7XG5leHBvcnRzLmJ1aWxkRGVzY01hcCA9IGJ1aWxkRGVzY01hcDtcbmV4cG9ydHMuZXJyb3JEZXNjTWFwID0gZXJyb3JEZXNjTWFwO1xuZXhwb3J0cy5nZXRTaG9ydEVycm9yTXNnID0gZ2V0U2hvcnRFcnJvck1zZztcbmV4cG9ydHMucnVudGltZURlc2NNYXAgPSBydW50aW1lRGVzY01hcDtcbmV4cG9ydHMudHlwZURlc2NNYXAgPSB0eXBlRGVzY01hcDtcbiIsIid1c2Ugc3RyaWN0JztcbmZ1bmN0aW9uIF9hcnJheV9saWtlX3RvX2FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgZm9yKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspYXJyMltpXSA9IGFycltpXTtcbiAgICByZXR1cm4gYXJyMjtcbn1cbmZ1bmN0aW9uIF9hcnJheV93aXRoX2hvbGVzKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5mdW5jdGlvbiBfYXJyYXlfd2l0aG91dF9ob2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5X2xpa2VfdG9fYXJyYXkoYXJyKTtcbn1cbmZ1bmN0aW9uIF9hc3NlcnRfdGhpc19pbml0aWFsaXplZChzZWxmKSB7XG4gICAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuICAgIHJldHVybiBzZWxmO1xufVxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9hc3luY190b19nZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2NhbGxfc3VwZXIoX3RoaXMsIGRlcml2ZWQsIGFyZ3MpIHtcbiAgICBkZXJpdmVkID0gX2dldF9wcm90b3R5cGVfb2YoZGVyaXZlZCk7XG4gICAgcmV0dXJuIF9wb3NzaWJsZV9jb25zdHJ1Y3Rvcl9yZXR1cm4oX3RoaXMsIF9pc19uYXRpdmVfcmVmbGVjdF9jb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KGRlcml2ZWQsIGFyZ3MgfHwgW10sIF9nZXRfcHJvdG90eXBlX29mKF90aGlzKS5jb25zdHJ1Y3RvcikgOiBkZXJpdmVkLmFwcGx5KF90aGlzLCBhcmdzKSk7XG59XG5mdW5jdGlvbiBfY2xhc3NfY2FsbF9jaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVfY2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbmZ1bmN0aW9uIF9kZWZpbmVfcHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9nZXRfcHJvdG90eXBlX29mKG8pIHtcbiAgICBfZ2V0X3Byb3RvdHlwZV9vZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKG8pIHtcbiAgICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICB9O1xuICAgIHJldHVybiBfZ2V0X3Byb3RvdHlwZV9vZihvKTtcbn1cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgX3NldF9wcm90b3R5cGVfb2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuZnVuY3Rpb24gX2luc3RhbmNlb2YobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAocmlnaHQgIT0gbnVsbCAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIHJpZ2h0W1N5bWJvbC5oYXNJbnN0YW5jZV0pIHtcbiAgICAgICAgcmV0dXJuICEhcmlnaHRbU3ltYm9sLmhhc0luc3RhbmNlXShsZWZ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGVmdCBpbnN0YW5jZW9mIHJpZ2h0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZV90b19hcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5mdW5jdGlvbiBfaXRlcmFibGVfdG9fYXJyYXlfbGltaXQoYXJyLCBpKSB7XG4gICAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuICAgIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfcywgX2U7XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKXtcbiAgICAgICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2QgPSB0cnVlO1xuICAgICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9hcnI7XG59XG5mdW5jdGlvbiBfbm9uX2l0ZXJhYmxlX3Jlc3QoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZnVuY3Rpb24gX25vbl9pdGVyYWJsZV9zcHJlYWQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIF9wb3NzaWJsZV9jb25zdHJ1Y3Rvcl9yZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgIGlmIChjYWxsICYmIChfdHlwZV9vZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgICAgICByZXR1cm4gY2FsbDtcbiAgICB9XG4gICAgcmV0dXJuIF9hc3NlcnRfdGhpc19pbml0aWFsaXplZChzZWxmKTtcbn1cbmZ1bmN0aW9uIF9zZXRfcHJvdG90eXBlX29mKG8sIHApIHtcbiAgICBfc2V0X3Byb3RvdHlwZV9vZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICAgIG8uX19wcm90b19fID0gcDtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfTtcbiAgICByZXR1cm4gX3NldF9wcm90b3R5cGVfb2YobywgcCk7XG59XG5mdW5jdGlvbiBfc2xpY2VkX3RvX2FycmF5KGFyciwgaSkge1xuICAgIHJldHVybiBfYXJyYXlfd2l0aF9ob2xlcyhhcnIpIHx8IF9pdGVyYWJsZV90b19hcnJheV9saW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZF9pdGVyYWJsZV90b19hcnJheShhcnIsIGkpIHx8IF9ub25faXRlcmFibGVfcmVzdCgpO1xufVxuZnVuY3Rpb24gX3RvX2NvbnN1bWFibGVfYXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheV93aXRob3V0X2hvbGVzKGFycikgfHwgX2l0ZXJhYmxlX3RvX2FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkX2l0ZXJhYmxlX3RvX2FycmF5KGFycikgfHwgX25vbl9pdGVyYWJsZV9zcHJlYWQoKTtcbn1cbmZ1bmN0aW9uIF90eXBlX29mKG9iaikge1xuICAgIFwiQHN3Yy9oZWxwZXJzIC0gdHlwZW9mXCI7XG4gICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRfaXRlcmFibGVfdG9fYXJyYXkobywgbWluTGVuKSB7XG4gICAgaWYgKCFvKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5X2xpa2VfdG9fYXJyYXkobywgbWluTGVuKTtcbiAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gICAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTtcbiAgICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheV9saWtlX3RvX2FycmF5KG8sIG1pbkxlbik7XG59XG5mdW5jdGlvbiBfaXNfbmF0aXZlX3JlZmxlY3RfY29uc3RydWN0KCkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbigpIHt9KSk7XG4gICAgfSBjYXRjaCAoXykge31cbiAgICByZXR1cm4gKF9pc19uYXRpdmVfcmVmbGVjdF9jb25zdHJ1Y3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICEhcmVzdWx0O1xuICAgIH0pKCk7XG59XG5mdW5jdGlvbiBfdHNfZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgZiwgeSwgdCwgZywgXyA9IHtcbiAgICAgICAgbGFiZWw6IDAsXG4gICAgICAgIHNlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdO1xuICAgICAgICAgICAgcmV0dXJuIHRbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHRyeXM6IFtdLFxuICAgICAgICBvcHM6IFtdXG4gICAgfTtcbiAgICByZXR1cm4gZyA9IHtcbiAgICAgICAgbmV4dDogdmVyYigwKSxcbiAgICAgICAgXCJ0aHJvd1wiOiB2ZXJiKDEpLFxuICAgICAgICBcInJldHVyblwiOiB2ZXJiKDIpXG4gICAgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcChbXG4gICAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlKF8pdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbXG4gICAgICAgICAgICAgICAgb3BbMF0gJiAyLFxuICAgICAgICAgICAgICAgIHQudmFsdWVcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBzd2l0Y2gob3BbMF0pe1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHQgPSBvcDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBfLmxhYmVsKys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCsrO1xuICAgICAgICAgICAgICAgICAgICB5ID0gb3BbMV07XG4gICAgICAgICAgICAgICAgICAgIG9wID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIG9wID0gXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCBvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCA9IG9wWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsID0gdFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsID0gdFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3BzLnB1c2gob3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG9wID0gW1xuICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICBmID0gdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCxcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG59XG52YXIgcG9seWZpbGxzID0gcmVxdWlyZSgnLi9wb2x5ZmlsbHMuY2pzLmNqcycpO1xudmFyIHNkayA9IHJlcXVpcmUoJ0Btb2R1bGUtZmVkZXJhdGlvbi9zZGsnKTtcbnZhciBlcnJvckNvZGVzID0gcmVxdWlyZSgnQG1vZHVsZS1mZWRlcmF0aW9uL2Vycm9yLWNvZGVzJyk7XG52YXIgTE9HX0NBVEVHT1JZID0gJ1sgRmVkZXJhdGlvbiBSdW50aW1lIF0nO1xuLy8gRklYTUU6IHByZS1idW5kbGUgP1xudmFyIGxvZ2dlciA9IHNkay5jcmVhdGVMb2dnZXIoTE9HX0NBVEVHT1JZKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtc2cpIHtcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICBlcnJvcihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVycm9yKG1zZykge1xuICAgIGlmIChfaW5zdGFuY2VvZihtc2csIEVycm9yKSkge1xuICAgICAgICBtc2cubWVzc2FnZSA9IFwiXCIuY29uY2F0KExPR19DQVRFR09SWSwgXCI6IFwiKS5jb25jYXQobXNnLm1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBtc2c7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcIlwiLmNvbmNhdChMT0dfQ0FURUdPUlksIFwiOiBcIikuY29uY2F0KG1zZykpO1xufVxuZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICBpZiAoX2luc3RhbmNlb2YobXNnLCBFcnJvcikpIHtcbiAgICAgICAgbXNnLm1lc3NhZ2UgPSBcIlwiLmNvbmNhdChMT0dfQ0FURUdPUlksIFwiOiBcIikuY29uY2F0KG1zZy5tZXNzYWdlKTtcbiAgICAgICAgbG9nZ2VyLndhcm4obXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2dnZXIud2Fybihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZFVuaXF1ZUl0ZW0oYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFyci5maW5kSW5kZXgoZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZSA9PT0gaXRlbTtcbiAgICB9KSA9PT0gLTEpIHtcbiAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5mdW5jdGlvbiBnZXRGTUlkKHJlbW90ZUluZm8pIHtcbiAgICBpZiAoJ3ZlcnNpb24nIGluIHJlbW90ZUluZm8gJiYgcmVtb3RlSW5mby52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChyZW1vdGVJbmZvLm5hbWUsIFwiOlwiKS5jb25jYXQocmVtb3RlSW5mby52ZXJzaW9uKTtcbiAgICB9IGVsc2UgaWYgKCdlbnRyeScgaW4gcmVtb3RlSW5mbyAmJiByZW1vdGVJbmZvLmVudHJ5KSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChyZW1vdGVJbmZvLm5hbWUsIFwiOlwiKS5jb25jYXQocmVtb3RlSW5mby5lbnRyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHJlbW90ZUluZm8ubmFtZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNSZW1vdGVJbmZvV2l0aEVudHJ5KHJlbW90ZSkge1xuICAgIHJldHVybiB0eXBlb2YgcmVtb3RlLmVudHJ5ICE9PSAndW5kZWZpbmVkJztcbn1cbmZ1bmN0aW9uIGlzUHVyZVJlbW90ZUVudHJ5KHJlbW90ZSkge1xuICAgIHJldHVybiAhcmVtb3RlLmVudHJ5LmluY2x1ZGVzKCcuanNvbicpO1xufVxuZnVuY3Rpb24gc2FmZVdyYXBwZXIoY2FsbGJhY2ssIGRpc2FibGVXYXJuKSB7XG4gICAgcmV0dXJuIF9zYWZlV3JhcHBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX3NhZmVXcmFwcGVyKCkge1xuICAgIF9zYWZlV3JhcHBlciA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbihjYWxsYmFjaywgZGlzYWJsZVdhcm4pIHtcbiAgICAgICAgdmFyIHJlcywgZTtcbiAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9zdGF0ZS50cnlzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBlID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgIWRpc2FibGVXYXJuICYmIHdhcm4oZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gX3NhZmVXcmFwcGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgICByZXR1cm4gdmFsICYmICh0eXBlb2YgdmFsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlX29mKHZhbCkpID09PSAnb2JqZWN0Jztcbn1cbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbmZ1bmN0aW9uIGlzU3RhdGljUmVzb3VyY2VzRXF1YWwodXJsMSwgdXJsMikge1xuICAgIHZhciBSRUdfRVhQID0gL14oaHR0cHM/Oik/XFwvXFwvL2k7XG4gICAgLy8gVHJhbnNmb3JtIHVybDEgYW5kIHVybDIgaW50byByZWxhdGl2ZSBwYXRoc1xuICAgIHZhciByZWxhdGl2ZVVybDEgPSB1cmwxLnJlcGxhY2UoUkVHX0VYUCwgJycpLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgdmFyIHJlbGF0aXZlVXJsMiA9IHVybDIucmVwbGFjZShSRUdfRVhQLCAnJykucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgcmVsYXRpdmUgcGF0aHMgYXJlIGlkZW50aWNhbFxuICAgIHJldHVybiByZWxhdGl2ZVVybDEgPT09IHJlbGF0aXZlVXJsMjtcbn1cbmZ1bmN0aW9uIGFycmF5T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob3B0aW9ucykgPyBvcHRpb25zIDogW1xuICAgICAgICBvcHRpb25zXG4gICAgXTtcbn1cbmZ1bmN0aW9uIGdldFJlbW90ZUVudHJ5SW5mb0Zyb21TbmFwc2hvdChzbmFwc2hvdCkge1xuICAgIHZhciBkZWZhdWx0UmVtb3RlRW50cnlJbmZvID0ge1xuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0eXBlOiAnZ2xvYmFsJyxcbiAgICAgICAgZ2xvYmFsTmFtZTogJydcbiAgICB9O1xuICAgIGlmIChzZGsuaXNCcm93c2VyRW52KCkgfHwgc2RrLmlzUmVhY3ROYXRpdmVFbnYoKSkge1xuICAgICAgICByZXR1cm4gJ3JlbW90ZUVudHJ5JyBpbiBzbmFwc2hvdCA/IHtcbiAgICAgICAgICAgIHVybDogc25hcHNob3QucmVtb3RlRW50cnksXG4gICAgICAgICAgICB0eXBlOiBzbmFwc2hvdC5yZW1vdGVFbnRyeVR5cGUsXG4gICAgICAgICAgICBnbG9iYWxOYW1lOiBzbmFwc2hvdC5nbG9iYWxOYW1lXG4gICAgICAgIH0gOiBkZWZhdWx0UmVtb3RlRW50cnlJbmZvO1xuICAgIH1cbiAgICBpZiAoJ3NzclJlbW90ZUVudHJ5JyBpbiBzbmFwc2hvdCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJsOiBzbmFwc2hvdC5zc3JSZW1vdGVFbnRyeSB8fCBkZWZhdWx0UmVtb3RlRW50cnlJbmZvLnVybCxcbiAgICAgICAgICAgIHR5cGU6IHNuYXBzaG90LnNzclJlbW90ZUVudHJ5VHlwZSB8fCBkZWZhdWx0UmVtb3RlRW50cnlJbmZvLnR5cGUsXG4gICAgICAgICAgICBnbG9iYWxOYW1lOiBzbmFwc2hvdC5nbG9iYWxOYW1lXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UmVtb3RlRW50cnlJbmZvO1xufVxudmFyIHByb2Nlc3NNb2R1bGVBbGlhcyA9IGZ1bmN0aW9uKG5hbWUsIHN1YlBhdGgpIHtcbiAgICAvLyBAaG9zdC8gLi9idXR0b24gLT4gQGhvc3QvYnV0dG9uXG4gICAgdmFyIG1vZHVsZU5hbWU7XG4gICAgaWYgKG5hbWUuZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICBtb2R1bGVOYW1lID0gbmFtZS5zbGljZSgwLCAtMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlTmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIGlmIChzdWJQYXRoLnN0YXJ0c1dpdGgoJy4nKSkge1xuICAgICAgICBzdWJQYXRoID0gc3ViUGF0aC5zbGljZSgxKTtcbiAgICB9XG4gICAgbW9kdWxlTmFtZSA9IG1vZHVsZU5hbWUgKyBzdWJQYXRoO1xuICAgIHJldHVybiBtb2R1bGVOYW1lO1xufTtcbnZhciBDdXJyZW50R2xvYmFsID0gKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlX29mKGdsb2JhbFRoaXMpKSA9PT0gJ29iamVjdCcgPyBnbG9iYWxUaGlzIDogd2luZG93O1xudmFyIG5hdGl2ZUdsb2JhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGdldCByZWFsIHdpbmRvdyAoaW5jYXNlIG9mIHNhbmRib3gpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIG5vZGUgZW52XG4gICAgICAgIHJldHVybiBDdXJyZW50R2xvYmFsO1xuICAgIH1cbn0oKTtcbnZhciBHbG9iYWwgPSBuYXRpdmVHbG9iYWw7XG5mdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eUdsb2JhbFZhbCh0YXJnZXQsIGtleSwgdmFsKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbmNsdWRlT3duUHJvcGVydHkodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBrZXkpO1xufVxuLy8gVGhpcyBzZWN0aW9uIGlzIHRvIHByZXZlbnQgZW5jYXBzdWxhdGlvbiBieSBjZXJ0YWluIG1pY3JvZnJvbnRlbmQgZnJhbWV3b3Jrcy4gRHVlIHRvIHJldXNlIHBvbGljaWVzLCBzYW5kYm94IGVzY2FwZXMuXG4vLyBUaGUgc2FuZGJveCBpbiB0aGUgbWljcm9mcm9udGVuZCBkb2VzIG5vdCByZXBsaWNhdGUgdGhlIHZhbHVlIG9mICdjb25maWd1cmFibGUnLlxuLy8gSWYgdGhlcmUgaXMgbm8gbG9hZGluZyBjb250ZW50IG9uIHRoZSBnbG9iYWwgb2JqZWN0LCB0aGlzIHNlY3Rpb24gZGVmaW5lcyB0aGUgbG9hZGluZyBvYmplY3QuXG5pZiAoIWluY2x1ZGVPd25Qcm9wZXJ0eShDdXJyZW50R2xvYmFsLCAnX19HTE9CQUxfTE9BRElOR19SRU1PVEVfRU5UUllfXycpKSB7XG4gICAgZGVmaW5lUHJvcGVydHlHbG9iYWxWYWwoQ3VycmVudEdsb2JhbCwgJ19fR0xPQkFMX0xPQURJTkdfUkVNT1RFX0VOVFJZX18nLCB7fSk7XG59XG52YXIgZ2xvYmFsTG9hZGluZyA9IEN1cnJlbnRHbG9iYWwuX19HTE9CQUxfTE9BRElOR19SRU1PVEVfRU5UUllfXztcbmZ1bmN0aW9uIHNldEdsb2JhbERlZmF1bHRWYWwodGFyZ2V0KSB7XG4gICAgdmFyIF90YXJnZXRfX19GRURFUkFUSU9OX18sIF90YXJnZXRfX19GRURFUkFUSU9OX18xLCBfdGFyZ2V0X19fRkVERVJBVElPTl9fMiwgX3RhcmdldF9fX0ZFREVSQVRJT05fXzMsIF90YXJnZXRfX19GRURFUkFUSU9OX180LCBfdGFyZ2V0X19fRkVERVJBVElPTl9fNTtcbiAgICBpZiAoaW5jbHVkZU93blByb3BlcnR5KHRhcmdldCwgJ19fVk1PS19fJykgJiYgIWluY2x1ZGVPd25Qcm9wZXJ0eSh0YXJnZXQsICdfX0ZFREVSQVRJT05fXycpKSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5R2xvYmFsVmFsKHRhcmdldCwgJ19fRkVERVJBVElPTl9fJywgdGFyZ2V0Ll9fVk1PS19fKTtcbiAgICB9XG4gICAgaWYgKCFpbmNsdWRlT3duUHJvcGVydHkodGFyZ2V0LCAnX19GRURFUkFUSU9OX18nKSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eUdsb2JhbFZhbCh0YXJnZXQsICdfX0ZFREVSQVRJT05fXycsIHtcbiAgICAgICAgICAgIF9fR0xPQkFMX1BMVUdJTl9fOiBbXSxcbiAgICAgICAgICAgIF9fSU5TVEFOQ0VTX186IFtdLFxuICAgICAgICAgICAgbW9kdWxlSW5mbzoge30sXG4gICAgICAgICAgICBfX1NIQVJFX186IHt9LFxuICAgICAgICAgICAgX19NQU5JRkVTVF9MT0FESU5HX186IHt9LFxuICAgICAgICAgICAgX19QUkVMT0FERURfTUFQX186IG5ldyBNYXAoKVxuICAgICAgICB9KTtcbiAgICAgICAgZGVmaW5lUHJvcGVydHlHbG9iYWxWYWwodGFyZ2V0LCAnX19WTU9LX18nLCB0YXJnZXQuX19GRURFUkFUSU9OX18pO1xuICAgIH1cbiAgICB2YXIgX19fR0xPQkFMX1BMVUdJTl9fO1xuICAgIChfX19HTE9CQUxfUExVR0lOX18gPSAoX3RhcmdldF9fX0ZFREVSQVRJT05fXyA9IHRhcmdldC5fX0ZFREVSQVRJT05fXykuX19HTE9CQUxfUExVR0lOX18pICE9IG51bGwgPyBfX19HTE9CQUxfUExVR0lOX18gOiBfdGFyZ2V0X19fRkVERVJBVElPTl9fLl9fR0xPQkFMX1BMVUdJTl9fID0gW107XG4gICAgdmFyIF9fX0lOU1RBTkNFU19fO1xuICAgIChfX19JTlNUQU5DRVNfXyA9IChfdGFyZ2V0X19fRkVERVJBVElPTl9fMSA9IHRhcmdldC5fX0ZFREVSQVRJT05fXykuX19JTlNUQU5DRVNfXykgIT0gbnVsbCA/IF9fX0lOU1RBTkNFU19fIDogX3RhcmdldF9fX0ZFREVSQVRJT05fXzEuX19JTlNUQU5DRVNfXyA9IFtdO1xuICAgIHZhciBfbW9kdWxlSW5mbztcbiAgICAoX21vZHVsZUluZm8gPSAoX3RhcmdldF9fX0ZFREVSQVRJT05fXzIgPSB0YXJnZXQuX19GRURFUkFUSU9OX18pLm1vZHVsZUluZm8pICE9IG51bGwgPyBfbW9kdWxlSW5mbyA6IF90YXJnZXRfX19GRURFUkFUSU9OX18yLm1vZHVsZUluZm8gPSB7fTtcbiAgICB2YXIgX19fU0hBUkVfXztcbiAgICAoX19fU0hBUkVfXyA9IChfdGFyZ2V0X19fRkVERVJBVElPTl9fMyA9IHRhcmdldC5fX0ZFREVSQVRJT05fXykuX19TSEFSRV9fKSAhPSBudWxsID8gX19fU0hBUkVfXyA6IF90YXJnZXRfX19GRURFUkFUSU9OX18zLl9fU0hBUkVfXyA9IHt9O1xuICAgIHZhciBfX19NQU5JRkVTVF9MT0FESU5HX187XG4gICAgKF9fX01BTklGRVNUX0xPQURJTkdfXyA9IChfdGFyZ2V0X19fRkVERVJBVElPTl9fNCA9IHRhcmdldC5fX0ZFREVSQVRJT05fXykuX19NQU5JRkVTVF9MT0FESU5HX18pICE9IG51bGwgPyBfX19NQU5JRkVTVF9MT0FESU5HX18gOiBfdGFyZ2V0X19fRkVERVJBVElPTl9fNC5fX01BTklGRVNUX0xPQURJTkdfXyA9IHt9O1xuICAgIHZhciBfX19QUkVMT0FERURfTUFQX187XG4gICAgKF9fX1BSRUxPQURFRF9NQVBfXyA9IChfdGFyZ2V0X19fRkVERVJBVElPTl9fNSA9IHRhcmdldC5fX0ZFREVSQVRJT05fXykuX19QUkVMT0FERURfTUFQX18pICE9IG51bGwgPyBfX19QUkVMT0FERURfTUFQX18gOiBfdGFyZ2V0X19fRkVERVJBVElPTl9fNS5fX1BSRUxPQURFRF9NQVBfXyA9IG5ldyBNYXAoKTtcbn1cbnNldEdsb2JhbERlZmF1bHRWYWwoQ3VycmVudEdsb2JhbCk7XG5zZXRHbG9iYWxEZWZhdWx0VmFsKG5hdGl2ZUdsb2JhbCk7XG5mdW5jdGlvbiByZXNldEZlZGVyYXRpb25HbG9iYWxJbmZvKCkge1xuICAgIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19HTE9CQUxfUExVR0lOX18gPSBbXTtcbiAgICBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fSU5TVEFOQ0VTX18gPSBbXTtcbiAgICBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLm1vZHVsZUluZm8gPSB7fTtcbiAgICBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fU0hBUkVfXyA9IHt9O1xuICAgIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19NQU5JRkVTVF9MT0FESU5HX18gPSB7fTtcbiAgICBPYmplY3Qua2V5cyhnbG9iYWxMb2FkaW5nKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBkZWxldGUgZ2xvYmFsTG9hZGluZ1trZXldO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0R2xvYmFsRmVkZXJhdGlvbkluc3RhbmNlKEZlZGVyYXRpb25JbnN0YW5jZSkge1xuICAgIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19JTlNUQU5DRVNfXy5wdXNoKEZlZGVyYXRpb25JbnN0YW5jZSk7XG59XG5mdW5jdGlvbiBnZXRHbG9iYWxGZWRlcmF0aW9uQ29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19ERUJVR19DT05TVFJVQ1RPUl9fO1xufVxuZnVuY3Rpb24gc2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yKEZlZGVyYXRpb25Db25zdHJ1Y3Rvcikge1xuICAgIHZhciBpc0RlYnVnID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB2b2lkIDAgPyBhcmd1bWVudHNbMV0gOiBzZGsuaXNEZWJ1Z01vZGUoKTtcbiAgICBpZiAoaXNEZWJ1Zykge1xuICAgICAgICBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fREVCVUdfQ09OU1RSVUNUT1JfXyA9IEZlZGVyYXRpb25Db25zdHJ1Y3RvcjtcbiAgICAgICAgQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0RFQlVHX0NPTlNUUlVDVE9SX1ZFUlNJT05fXyA9IFwiMC4xNi4wXCI7XG4gICAgfVxufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIGdldEluZm9XaXRob3V0VHlwZSh0YXJnZXQsIGtleSkge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIga2V5UmVzID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmIChrZXlSZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRhcmdldFtrZXldLFxuICAgICAgICAgICAgICAgIGtleToga2V5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhcmdldEtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlLCBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBfaXRlcmF0b3IgPSB0YXJnZXRLZXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRLZXkgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90YXJnZXRLZXlfc3BsaXQgPSBfc2xpY2VkX3RvX2FycmF5KHRhcmdldEtleS5zcGxpdCgnOicpLCAyKSwgdGFyZ2V0VHlwZU9yTmFtZSA9IF90YXJnZXRLZXlfc3BsaXRbMF0sIF8gPSBfdGFyZ2V0S2V5X3NwbGl0WzFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbktleSA9IFwiXCIuY29uY2F0KHRhcmdldFR5cGVPck5hbWUsIFwiOlwiKS5jb25jYXQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGVXaXRoS2V5UmVzID0gdGFyZ2V0W25LZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZVdpdGhLZXlSZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHR5cGVXaXRoS2V5UmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbktleVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAga2V5OiBrZXlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2tleSBtdXN0IGJlIHN0cmluZycpO1xuICAgIH1cbn1cbnZhciBnZXRHbG9iYWxTbmFwc2hvdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18ubW9kdWxlSW5mbztcbn07XG52YXIgZ2V0VGFyZ2V0U25hcHNob3RJbmZvQnlNb2R1bGVJbmZvID0gZnVuY3Rpb24obW9kdWxlSW5mbywgc25hcHNob3QpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgcmVtb3RlIGlzIGluY2x1ZGVkIGluIHRoZSBob3N0U25hcHNob3RcbiAgICB2YXIgbW9kdWxlS2V5ID0gZ2V0Rk1JZChtb2R1bGVJbmZvKTtcbiAgICB2YXIgZ2V0TW9kdWxlSW5mbyA9IGdldEluZm9XaXRob3V0VHlwZShzbmFwc2hvdCwgbW9kdWxlS2V5KS52YWx1ZTtcbiAgICAvLyBUaGUgcmVtb3RlU25hcHNob3QgbWlnaHQgbm90IGluY2x1ZGUgYSB2ZXJzaW9uXG4gICAgaWYgKGdldE1vZHVsZUluZm8gJiYgIWdldE1vZHVsZUluZm8udmVyc2lvbiAmJiAndmVyc2lvbicgaW4gbW9kdWxlSW5mbyAmJiBtb2R1bGVJbmZvWyd2ZXJzaW9uJ10pIHtcbiAgICAgICAgZ2V0TW9kdWxlSW5mby52ZXJzaW9uID0gbW9kdWxlSW5mb1sndmVyc2lvbiddO1xuICAgIH1cbiAgICBpZiAoZ2V0TW9kdWxlSW5mbykge1xuICAgICAgICByZXR1cm4gZ2V0TW9kdWxlSW5mbztcbiAgICB9XG4gICAgLy8gSWYgdGhlIHJlbW90ZSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGhvc3RTbmFwc2hvdCwgZGVwbG95IGEgbWljcm8gYXBwIHNuYXBzaG90XG4gICAgaWYgKCd2ZXJzaW9uJyBpbiBtb2R1bGVJbmZvICYmIG1vZHVsZUluZm9bJ3ZlcnNpb24nXSkge1xuICAgICAgICB2YXIgdmVyc2lvbiA9IG1vZHVsZUluZm8udmVyc2lvbiwgcmVzTW9kdWxlSW5mbyA9IHBvbHlmaWxscy5fb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllc19sb29zZShtb2R1bGVJbmZvLCBbXG4gICAgICAgICAgICBcInZlcnNpb25cIlxuICAgICAgICBdKTtcbiAgICAgICAgdmFyIG1vZHVsZUtleVdpdGhvdXRWZXJzaW9uID0gZ2V0Rk1JZChyZXNNb2R1bGVJbmZvKTtcbiAgICAgICAgdmFyIGdldE1vZHVsZUluZm9XaXRob3V0VmVyc2lvbiA9IGdldEluZm9XaXRob3V0VHlwZShuYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18ubW9kdWxlSW5mbywgbW9kdWxlS2V5V2l0aG91dFZlcnNpb24pLnZhbHVlO1xuICAgICAgICBpZiAoKGdldE1vZHVsZUluZm9XaXRob3V0VmVyc2lvbiA9PSBudWxsID8gdm9pZCAwIDogZ2V0TW9kdWxlSW5mb1dpdGhvdXRWZXJzaW9uLnZlcnNpb24pID09PSB2ZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TW9kdWxlSW5mb1dpdGhvdXRWZXJzaW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn07XG52YXIgZ2V0R2xvYmFsU25hcHNob3RJbmZvQnlNb2R1bGVJbmZvID0gZnVuY3Rpb24obW9kdWxlSW5mbykge1xuICAgIHJldHVybiBnZXRUYXJnZXRTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8obW9kdWxlSW5mbywgbmF0aXZlR2xvYmFsLl9fRkVERVJBVElPTl9fLm1vZHVsZUluZm8pO1xufTtcbnZhciBzZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8gPSBmdW5jdGlvbihyZW1vdGVJbmZvLCBtb2R1bGVEZXRhaWxJbmZvKSB7XG4gICAgdmFyIG1vZHVsZUtleSA9IGdldEZNSWQocmVtb3RlSW5mbyk7XG4gICAgbmF0aXZlR2xvYmFsLl9fRkVERVJBVElPTl9fLm1vZHVsZUluZm9bbW9kdWxlS2V5XSA9IG1vZHVsZURldGFpbEluZm87XG4gICAgcmV0dXJuIG5hdGl2ZUdsb2JhbC5fX0ZFREVSQVRJT05fXy5tb2R1bGVJbmZvO1xufTtcbnZhciBhZGRHbG9iYWxTbmFwc2hvdCA9IGZ1bmN0aW9uKG1vZHVsZUluZm9zKSB7XG4gICAgbmF0aXZlR2xvYmFsLl9fRkVERVJBVElPTl9fLm1vZHVsZUluZm8gPSBwb2x5ZmlsbHMuX2V4dGVuZHMoe30sIG5hdGl2ZUdsb2JhbC5fX0ZFREVSQVRJT05fXy5tb2R1bGVJbmZvLCBtb2R1bGVJbmZvcyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG1vZHVsZUluZm9zKTtcbiAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlLCBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvcih2YXIgX2l0ZXJhdG9yID0ga2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpe1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmF0aXZlR2xvYmFsLl9fRkVERVJBVElPTl9fLm1vZHVsZUluZm9ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59O1xudmFyIGdldFJlbW90ZUVudHJ5RXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUsIGdsb2JhbE5hbWUpIHtcbiAgICB2YXIgcmVtb3RlRW50cnlLZXkgPSBnbG9iYWxOYW1lIHx8IFwiX19GRURFUkFUSU9OX1wiLmNvbmNhdChuYW1lLCBcIjpjdXN0b21fX1wiKTtcbiAgICB2YXIgZW50cnlFeHBvcnRzID0gQ3VycmVudEdsb2JhbFtyZW1vdGVFbnRyeUtleV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3RlRW50cnlLZXk6IHJlbW90ZUVudHJ5S2V5LFxuICAgICAgICBlbnRyeUV4cG9ydHM6IGVudHJ5RXhwb3J0c1xuICAgIH07XG59O1xuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlZ2lzdGVyIGdsb2JhbCBwbHVnaW5zLlxuLy8gSXQgaXRlcmF0ZXMgb3ZlciB0aGUgcHJvdmlkZWQgcGx1Z2lucyBhbmQgY2hlY2tzIGlmIHRoZXkgYXJlIGFscmVhZHkgcmVnaXN0ZXJlZC5cbi8vIElmIGEgcGx1Z2luIGlzIG5vdCByZWdpc3RlcmVkLCBpdCBpcyBhZGRlZCB0byB0aGUgZ2xvYmFsIHBsdWdpbnMuXG4vLyBJZiBhIHBsdWdpbiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQsIGEgd2FybmluZyBtZXNzYWdlIGlzIGxvZ2dlZC5cbnZhciByZWdpc3Rlckdsb2JhbFBsdWdpbnMgPSBmdW5jdGlvbihwbHVnaW5zKSB7XG4gICAgdmFyIF9fR0xPQkFMX1BMVUdJTl9fID0gbmF0aXZlR2xvYmFsLl9fRkVERVJBVElPTl9fLl9fR0xPQkFMX1BMVUdJTl9fO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgaWYgKF9fR0xPQkFMX1BMVUdJTl9fLmZpbmRJbmRleChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgICByZXR1cm4gcC5uYW1lID09PSBwbHVnaW4ubmFtZTtcbiAgICAgICAgfSkgPT09IC0xKSB7XG4gICAgICAgICAgICBfX0dMT0JBTF9QTFVHSU5fXy5wdXNoKHBsdWdpbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YXJuKFwiVGhlIHBsdWdpbiBcIi5jb25jYXQocGx1Z2luLm5hbWUsIFwiIGhhcyBiZWVuIHJlZ2lzdGVyZWQuXCIpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbnZhciBnZXRHbG9iYWxIb3N0UGx1Z2lucyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18uX19HTE9CQUxfUExVR0lOX187XG59O1xudmFyIGdldFByZWxvYWRlZCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19QUkVMT0FERURfTUFQX18uZ2V0KGlkKTtcbn07XG52YXIgc2V0UHJlbG9hZGVkID0gZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX1BSRUxPQURFRF9NQVBfXy5zZXQoaWQsIHRydWUpO1xufTtcbnZhciBERUZBVUxUX1NDT1BFID0gJ2RlZmF1bHQnO1xudmFyIERFRkFVTFRfUkVNT1RFX1RZUEUgPSAnZ2xvYmFsJztcbi8vIGZvcmsgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbi9ibG9iL3YxLjEuMTIvcGFja2FnZXMvbGliL3NyYy91dGlscy9zZW12ZXIvaW5kZXgudHNcbi8vIHRob3NlIGNvbnN0YW50cyBhcmUgYmFzZWQgb24gaHR0cHM6Ly93d3cucnVieWRvYy5pbmZvL2dlbXMvc2VtYW50aWNfcmFuZ2UvMy4wLjAvU2VtYW50aWNSYW5nZSNCVUlMRElERU5USUZJRVItY29uc3RhbnRcbi8vIENvcHlyaWdodCAoYylcbi8vIHZpdGUtcGx1Z2luLWZlZGVyYXRpb24gaXMgbGljZW5zZWQgdW5kZXIgTXVsYW4gUFNMIHYyLlxuLy8gWW91IGNhbiB1c2UgdGhpcyBzb2Z0d2FyZSBhY2NvcmRpbmcgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoZSBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgTXVsYW4gUFNMIHYyIGF0OlxuLy8gICAgICBodHRwOi8vbGljZW5zZS5jb3NjbC5vcmcuY24vTXVsYW5QU0wyXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIE9OIEFOIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9GIEFOWSBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSBPUiBGSVQgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuLy8gU2VlIHRoZSBNdWxhbiBQU0wgdjIgZm9yIG1vcmUgZGV0YWlscy5cbnZhciBidWlsZElkZW50aWZpZXIgPSAnWzAtOUEtWmEtei1dKyc7XG52YXIgYnVpbGQgPSBcIig/OlxcXFwrKFwiLmNvbmNhdChidWlsZElkZW50aWZpZXIsIFwiKD86XFxcXC5cIikuY29uY2F0KGJ1aWxkSWRlbnRpZmllciwgXCIpKikpXCIpO1xudmFyIG51bWVyaWNJZGVudGlmaWVyID0gJzB8WzEtOV1cXFxcZConO1xudmFyIG51bWVyaWNJZGVudGlmaWVyTG9vc2UgPSAnWzAtOV0rJztcbnZhciBub25OdW1lcmljSWRlbnRpZmllciA9ICdcXFxcZCpbYS16QS1aLV1bYS16QS1aMC05LV0qJztcbnZhciBwcmVSZWxlYXNlSWRlbnRpZmllckxvb3NlID0gXCIoPzpcIi5jb25jYXQobnVtZXJpY0lkZW50aWZpZXJMb29zZSwgXCJ8XCIpLmNvbmNhdChub25OdW1lcmljSWRlbnRpZmllciwgXCIpXCIpO1xudmFyIHByZVJlbGVhc2VMb29zZSA9IFwiKD86LT8oXCIuY29uY2F0KHByZVJlbGVhc2VJZGVudGlmaWVyTG9vc2UsIFwiKD86XFxcXC5cIikuY29uY2F0KHByZVJlbGVhc2VJZGVudGlmaWVyTG9vc2UsIFwiKSopKVwiKTtcbnZhciBwcmVSZWxlYXNlSWRlbnRpZmllciA9IFwiKD86XCIuY29uY2F0KG51bWVyaWNJZGVudGlmaWVyLCBcInxcIikuY29uY2F0KG5vbk51bWVyaWNJZGVudGlmaWVyLCBcIilcIik7XG52YXIgcHJlUmVsZWFzZSA9IFwiKD86LShcIi5jb25jYXQocHJlUmVsZWFzZUlkZW50aWZpZXIsIFwiKD86XFxcXC5cIikuY29uY2F0KHByZVJlbGVhc2VJZGVudGlmaWVyLCBcIikqKSlcIik7XG52YXIgeFJhbmdlSWRlbnRpZmllciA9IFwiXCIuY29uY2F0KG51bWVyaWNJZGVudGlmaWVyLCBcInx4fFh8XFxcXCpcIik7XG52YXIgeFJhbmdlUGxhaW4gPSBcIlt2PVxcXFxzXSooXCIuY29uY2F0KHhSYW5nZUlkZW50aWZpZXIsIFwiKSg/OlxcXFwuKFwiKS5jb25jYXQoeFJhbmdlSWRlbnRpZmllciwgXCIpKD86XFxcXC4oXCIpLmNvbmNhdCh4UmFuZ2VJZGVudGlmaWVyLCBcIikoPzpcIikuY29uY2F0KHByZVJlbGVhc2UsIFwiKT9cIikuY29uY2F0KGJ1aWxkLCBcIj8pPyk/XCIpO1xudmFyIGh5cGhlblJhbmdlID0gXCJeXFxcXHMqKFwiLmNvbmNhdCh4UmFuZ2VQbGFpbiwgXCIpXFxcXHMrLVxcXFxzKyhcIikuY29uY2F0KHhSYW5nZVBsYWluLCBcIilcXFxccyokXCIpO1xudmFyIG1haW5WZXJzaW9uTG9vc2UgPSBcIihcIi5jb25jYXQobnVtZXJpY0lkZW50aWZpZXJMb29zZSwgXCIpXFxcXC4oXCIpLmNvbmNhdChudW1lcmljSWRlbnRpZmllckxvb3NlLCBcIilcXFxcLihcIikuY29uY2F0KG51bWVyaWNJZGVudGlmaWVyTG9vc2UsIFwiKVwiKTtcbnZhciBsb29zZVBsYWluID0gXCJbdj1cXFxcc10qXCIuY29uY2F0KG1haW5WZXJzaW9uTG9vc2UpLmNvbmNhdChwcmVSZWxlYXNlTG9vc2UsIFwiP1wiKS5jb25jYXQoYnVpbGQsIFwiP1wiKTtcbnZhciBndGx0ID0gJygoPzo8fD4pPz0/KSc7XG52YXIgY29tcGFyYXRvclRyaW0gPSBcIihcXFxccyopXCIuY29uY2F0KGd0bHQsIFwiXFxcXHMqKFwiKS5jb25jYXQobG9vc2VQbGFpbiwgXCJ8XCIpLmNvbmNhdCh4UmFuZ2VQbGFpbiwgXCIpXCIpO1xudmFyIGxvbmVUaWxkZSA9ICcoPzp+Pj8pJztcbnZhciB0aWxkZVRyaW0gPSBcIihcXFxccyopXCIuY29uY2F0KGxvbmVUaWxkZSwgXCJcXFxccytcIik7XG52YXIgbG9uZUNhcmV0ID0gJyg/OlxcXFxeKSc7XG52YXIgY2FyZXRUcmltID0gXCIoXFxcXHMqKVwiLmNvbmNhdChsb25lQ2FyZXQsIFwiXFxcXHMrXCIpO1xudmFyIHN0YXIgPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG52YXIgY2FyZXQgPSBcIl5cIi5jb25jYXQobG9uZUNhcmV0KS5jb25jYXQoeFJhbmdlUGxhaW4sIFwiJFwiKTtcbnZhciBtYWluVmVyc2lvbiA9IFwiKFwiLmNvbmNhdChudW1lcmljSWRlbnRpZmllciwgXCIpXFxcXC4oXCIpLmNvbmNhdChudW1lcmljSWRlbnRpZmllciwgXCIpXFxcXC4oXCIpLmNvbmNhdChudW1lcmljSWRlbnRpZmllciwgXCIpXCIpO1xudmFyIGZ1bGxQbGFpbiA9IFwidj9cIi5jb25jYXQobWFpblZlcnNpb24pLmNvbmNhdChwcmVSZWxlYXNlLCBcIj9cIikuY29uY2F0KGJ1aWxkLCBcIj9cIik7XG52YXIgdGlsZGUgPSBcIl5cIi5jb25jYXQobG9uZVRpbGRlKS5jb25jYXQoeFJhbmdlUGxhaW4sIFwiJFwiKTtcbnZhciB4UmFuZ2UgPSBcIl5cIi5jb25jYXQoZ3RsdCwgXCJcXFxccypcIikuY29uY2F0KHhSYW5nZVBsYWluLCBcIiRcIik7XG52YXIgY29tcGFyYXRvciA9IFwiXlwiLmNvbmNhdChndGx0LCBcIlxcXFxzKihcIikuY29uY2F0KGZ1bGxQbGFpbiwgXCIpJHxeJFwiKTtcbi8vIGNvcHkgZnJvbSBzZW12ZXIgcGFja2FnZVxudmFyIGd0ZTAgPSAnXlxcXFxzKj49XFxcXHMqMC4wLjBcXFxccyokJztcbi8vIGZvcmsgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbi9ibG9iL3YxLjEuMTIvcGFja2FnZXMvbGliL3NyYy91dGlscy9zZW12ZXIvaW5kZXgudHNcbi8vIENvcHlyaWdodCAoYylcbi8vIHZpdGUtcGx1Z2luLWZlZGVyYXRpb24gaXMgbGljZW5zZWQgdW5kZXIgTXVsYW4gUFNMIHYyLlxuLy8gWW91IGNhbiB1c2UgdGhpcyBzb2Z0d2FyZSBhY2NvcmRpbmcgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoZSBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgTXVsYW4gUFNMIHYyIGF0OlxuLy8gICAgICBodHRwOi8vbGljZW5zZS5jb3NjbC5vcmcuY24vTXVsYW5QU0wyXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIE9OIEFOIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9GIEFOWSBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSBPUiBGSVQgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuLy8gU2VlIHRoZSBNdWxhbiBQU0wgdjIgZm9yIG1vcmUgZGV0YWlscy5cbmZ1bmN0aW9uIHBhcnNlUmVnZXgoc291cmNlKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoc291cmNlKTtcbn1cbmZ1bmN0aW9uIGlzWFZlcnNpb24odmVyc2lvbikge1xuICAgIHJldHVybiAhdmVyc2lvbiB8fCB2ZXJzaW9uLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCB2ZXJzaW9uID09PSAnKic7XG59XG5mdW5jdGlvbiBwaXBlKCkge1xuICAgIGZvcih2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICBmbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgICAgIHJldHVybiBmbnMucmVkdWNlKGZ1bmN0aW9uKHYsIGYpIHtcbiAgICAgICAgICAgIHJldHVybiBmKHYpO1xuICAgICAgICB9LCB4KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gZXh0cmFjdENvbXBhcmF0b3IoY29tcGFyYXRvclN0cmluZykge1xuICAgIHJldHVybiBjb21wYXJhdG9yU3RyaW5nLm1hdGNoKHBhcnNlUmVnZXgoY29tcGFyYXRvcikpO1xufVxuZnVuY3Rpb24gY29tYmluZVZlcnNpb24obWFqb3IsIG1pbm9yLCBwYXRjaCwgcHJlUmVsZWFzZSkge1xuICAgIHZhciBtYWluVmVyc2lvbiA9IFwiXCIuY29uY2F0KG1ham9yLCBcIi5cIikuY29uY2F0KG1pbm9yLCBcIi5cIikuY29uY2F0KHBhdGNoKTtcbiAgICBpZiAocHJlUmVsZWFzZSkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQobWFpblZlcnNpb24sIFwiLVwiKS5jb25jYXQocHJlUmVsZWFzZSk7XG4gICAgfVxuICAgIHJldHVybiBtYWluVmVyc2lvbjtcbn1cbi8vIGZvcmsgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbi9ibG9iL3YxLjEuMTIvcGFja2FnZXMvbGliL3NyYy91dGlscy9zZW12ZXIvaW5kZXgudHNcbi8vIENvcHlyaWdodCAoYylcbi8vIHZpdGUtcGx1Z2luLWZlZGVyYXRpb24gaXMgbGljZW5zZWQgdW5kZXIgTXVsYW4gUFNMIHYyLlxuLy8gWW91IGNhbiB1c2UgdGhpcyBzb2Z0d2FyZSBhY2NvcmRpbmcgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoZSBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgTXVsYW4gUFNMIHYyIGF0OlxuLy8gICAgICBodHRwOi8vbGljZW5zZS5jb3NjbC5vcmcuY24vTXVsYW5QU0wyXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIE9OIEFOIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9GIEFOWSBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSBPUiBGSVQgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuLy8gU2VlIHRoZSBNdWxhbiBQU0wgdjIgZm9yIG1vcmUgZGV0YWlscy5cbmZ1bmN0aW9uIHBhcnNlSHlwaGVuKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnJlcGxhY2UocGFyc2VSZWdleChoeXBoZW5SYW5nZSksIGZ1bmN0aW9uKF9yYW5nZSwgZnJvbSwgZnJvbU1ham9yLCBmcm9tTWlub3IsIGZyb21QYXRjaCwgX2Zyb21QcmVSZWxlYXNlLCBfZnJvbUJ1aWxkLCB0bywgdG9NYWpvciwgdG9NaW5vciwgdG9QYXRjaCwgdG9QcmVSZWxlYXNlKSB7XG4gICAgICAgIGlmIChpc1hWZXJzaW9uKGZyb21NYWpvcikpIHtcbiAgICAgICAgICAgIGZyb20gPSAnJztcbiAgICAgICAgfSBlbHNlIGlmIChpc1hWZXJzaW9uKGZyb21NaW5vcikpIHtcbiAgICAgICAgICAgIGZyb20gPSBcIj49XCIuY29uY2F0KGZyb21NYWpvciwgXCIuMC4wXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzWFZlcnNpb24oZnJvbVBhdGNoKSkge1xuICAgICAgICAgICAgZnJvbSA9IFwiPj1cIi5jb25jYXQoZnJvbU1ham9yLCBcIi5cIikuY29uY2F0KGZyb21NaW5vciwgXCIuMFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb20gPSBcIj49XCIuY29uY2F0KGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1hWZXJzaW9uKHRvTWFqb3IpKSB7XG4gICAgICAgICAgICB0byA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKGlzWFZlcnNpb24odG9NaW5vcikpIHtcbiAgICAgICAgICAgIHRvID0gXCI8XCIuY29uY2F0KE51bWJlcih0b01ham9yKSArIDEsIFwiLjAuMC0wXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzWFZlcnNpb24odG9QYXRjaCkpIHtcbiAgICAgICAgICAgIHRvID0gXCI8XCIuY29uY2F0KHRvTWFqb3IsIFwiLlwiKS5jb25jYXQoTnVtYmVyKHRvTWlub3IpICsgMSwgXCIuMC0wXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHRvUHJlUmVsZWFzZSkge1xuICAgICAgICAgICAgdG8gPSBcIjw9XCIuY29uY2F0KHRvTWFqb3IsIFwiLlwiKS5jb25jYXQodG9NaW5vciwgXCIuXCIpLmNvbmNhdCh0b1BhdGNoLCBcIi1cIikuY29uY2F0KHRvUHJlUmVsZWFzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0byA9IFwiPD1cIi5jb25jYXQodG8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChmcm9tLCBcIiBcIikuY29uY2F0KHRvKS50cmltKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3JUcmltKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnJlcGxhY2UocGFyc2VSZWdleChjb21wYXJhdG9yVHJpbSksICckMSQyJDMnKTtcbn1cbmZ1bmN0aW9uIHBhcnNlVGlsZGVUcmltKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnJlcGxhY2UocGFyc2VSZWdleCh0aWxkZVRyaW0pLCAnJDF+Jyk7XG59XG5mdW5jdGlvbiBwYXJzZUNhcmV0VHJpbShyYW5nZSkge1xuICAgIHJldHVybiByYW5nZS5yZXBsYWNlKHBhcnNlUmVnZXgoY2FyZXRUcmltKSwgJyQxXicpO1xufVxuZnVuY3Rpb24gcGFyc2VDYXJldHMocmFuZ2UpIHtcbiAgICByZXR1cm4gcmFuZ2UudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKHJhbmdlVmVyc2lvbikge1xuICAgICAgICByZXR1cm4gcmFuZ2VWZXJzaW9uLnJlcGxhY2UocGFyc2VSZWdleChjYXJldCksIGZ1bmN0aW9uKF8sIG1ham9yLCBtaW5vciwgcGF0Y2gsIHByZVJlbGVhc2UpIHtcbiAgICAgICAgICAgIGlmIChpc1hWZXJzaW9uKG1ham9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNYVmVyc2lvbihtaW5vcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI+PVwiLmNvbmNhdChtYWpvciwgXCIuMC4wIDxcIikuY29uY2F0KE51bWJlcihtYWpvcikgKyAxLCBcIi4wLjAtMFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNYVmVyc2lvbihwYXRjaCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFqb3IgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI+PVwiLmNvbmNhdChtYWpvciwgXCIuXCIpLmNvbmNhdChtaW5vciwgXCIuMCA8XCIpLmNvbmNhdChtYWpvciwgXCIuXCIpLmNvbmNhdChOdW1iZXIobWlub3IpICsgMSwgXCIuMC0wXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIj49XCIuY29uY2F0KG1ham9yLCBcIi5cIikuY29uY2F0KG1pbm9yLCBcIi4wIDxcIikuY29uY2F0KE51bWJlcihtYWpvcikgKyAxLCBcIi4wLjAtMFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByZVJlbGVhc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFqb3IgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlub3IgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPj1cIi5jb25jYXQobWFqb3IsIFwiLlwiKS5jb25jYXQobWlub3IsIFwiLlwiKS5jb25jYXQocGF0Y2gsIFwiLVwiKS5jb25jYXQocHJlUmVsZWFzZSwgXCIgPFwiKS5jb25jYXQobWFqb3IsIFwiLlwiKS5jb25jYXQobWlub3IsIFwiLlwiKS5jb25jYXQoTnVtYmVyKHBhdGNoKSArIDEsIFwiLTBcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI+PVwiLmNvbmNhdChtYWpvciwgXCIuXCIpLmNvbmNhdChtaW5vciwgXCIuXCIpLmNvbmNhdChwYXRjaCwgXCItXCIpLmNvbmNhdChwcmVSZWxlYXNlLCBcIiA8XCIpLmNvbmNhdChtYWpvciwgXCIuXCIpLmNvbmNhdChOdW1iZXIobWlub3IpICsgMSwgXCIuMC0wXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPj1cIi5jb25jYXQobWFqb3IsIFwiLlwiKS5jb25jYXQobWlub3IsIFwiLlwiKS5jb25jYXQocGF0Y2gsIFwiLVwiKS5jb25jYXQocHJlUmVsZWFzZSwgXCIgPFwiKS5jb25jYXQoTnVtYmVyKG1ham9yKSArIDEsIFwiLjAuMC0wXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG1ham9yID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbm9yID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIj49XCIuY29uY2F0KG1ham9yLCBcIi5cIikuY29uY2F0KG1pbm9yLCBcIi5cIikuY29uY2F0KHBhdGNoLCBcIiA8XCIpLmNvbmNhdChtYWpvciwgXCIuXCIpLmNvbmNhdChtaW5vciwgXCIuXCIpLmNvbmNhdChOdW1iZXIocGF0Y2gpICsgMSwgXCItMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIj49XCIuY29uY2F0KG1ham9yLCBcIi5cIikuY29uY2F0KG1pbm9yLCBcIi5cIikuY29uY2F0KHBhdGNoLCBcIiA8XCIpLmNvbmNhdChtYWpvciwgXCIuXCIpLmNvbmNhdChOdW1iZXIobWlub3IpICsgMSwgXCIuMC0wXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBcIj49XCIuY29uY2F0KG1ham9yLCBcIi5cIikuY29uY2F0KG1pbm9yLCBcIi5cIikuY29uY2F0KHBhdGNoLCBcIiA8XCIpLmNvbmNhdChOdW1iZXIobWFqb3IpICsgMSwgXCIuMC4wLTBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIHBhcnNlVGlsZGVzKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihyYW5nZVZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlVmVyc2lvbi5yZXBsYWNlKHBhcnNlUmVnZXgodGlsZGUpLCBmdW5jdGlvbihfLCBtYWpvciwgbWlub3IsIHBhdGNoLCBwcmVSZWxlYXNlKSB7XG4gICAgICAgICAgICBpZiAoaXNYVmVyc2lvbihtYWpvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzWFZlcnNpb24obWlub3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPj1cIi5jb25jYXQobWFqb3IsIFwiLjAuMCA8XCIpLmNvbmNhdChOdW1iZXIobWFqb3IpICsgMSwgXCIuMC4wLTBcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzWFZlcnNpb24ocGF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPj1cIi5jb25jYXQobWFqb3IsIFwiLlwiKS5jb25jYXQobWlub3IsIFwiLjAgPFwiKS5jb25jYXQobWFqb3IsIFwiLlwiKS5jb25jYXQoTnVtYmVyKG1pbm9yKSArIDEsIFwiLjAtMFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlUmVsZWFzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIj49XCIuY29uY2F0KG1ham9yLCBcIi5cIikuY29uY2F0KG1pbm9yLCBcIi5cIikuY29uY2F0KHBhdGNoLCBcIi1cIikuY29uY2F0KHByZVJlbGVhc2UsIFwiIDxcIikuY29uY2F0KG1ham9yLCBcIi5cIikuY29uY2F0KE51bWJlcihtaW5vcikgKyAxLCBcIi4wLTBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCI+PVwiLmNvbmNhdChtYWpvciwgXCIuXCIpLmNvbmNhdChtaW5vciwgXCIuXCIpLmNvbmNhdChwYXRjaCwgXCIgPFwiKS5jb25jYXQobWFqb3IsIFwiLlwiKS5jb25jYXQoTnVtYmVyKG1pbm9yKSArIDEsIFwiLjAtMFwiKTtcbiAgICAgICAgfSk7XG4gICAgfSkuam9pbignICcpO1xufVxuZnVuY3Rpb24gcGFyc2VYUmFuZ2VzKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKHJhbmdlVmVyc2lvbikge1xuICAgICAgICByZXR1cm4gcmFuZ2VWZXJzaW9uLnRyaW0oKS5yZXBsYWNlKHBhcnNlUmVnZXgoeFJhbmdlKSwgZnVuY3Rpb24ocmV0LCBndGx0LCBtYWpvciwgbWlub3IsIHBhdGNoLCBwcmVSZWxlYXNlKSB7XG4gICAgICAgICAgICB2YXIgaXNYTWFqb3IgPSBpc1hWZXJzaW9uKG1ham9yKTtcbiAgICAgICAgICAgIHZhciBpc1hNaW5vciA9IGlzWE1ham9yIHx8IGlzWFZlcnNpb24obWlub3IpO1xuICAgICAgICAgICAgdmFyIGlzWFBhdGNoID0gaXNYTWlub3IgfHwgaXNYVmVyc2lvbihwYXRjaCk7XG4gICAgICAgICAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGlzWFBhdGNoKSB7XG4gICAgICAgICAgICAgICAgZ3RsdCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlUmVsZWFzZSA9ICcnO1xuICAgICAgICAgICAgaWYgKGlzWE1ham9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPDAuMC4wLTAnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnKic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChndGx0ICYmIGlzWFBhdGNoKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgICAgICAgICAgIGlmIChpc1hNaW5vcikge1xuICAgICAgICAgICAgICAgICAgICBtaW5vciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGNoID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgICAgICAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgICAgICAgICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNYTWlub3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ham9yID0gTnVtYmVyKG1ham9yKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5vciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5vciA9IE51bWJlcihtaW5vcikgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2ggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkIHBhc3NcbiAgICAgICAgICAgICAgICAgICAgLy8gU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgZ3RsdCA9ICc8JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzWE1pbm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWpvciA9IE51bWJlcihtYWpvcikgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlub3IgPSBOdW1iZXIobWlub3IpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZVJlbGVhc2UgPSAnLTAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQoZ3RsdCArIG1ham9yLCBcIi5cIikuY29uY2F0KG1pbm9yLCBcIi5cIikuY29uY2F0KHBhdGNoKS5jb25jYXQocHJlUmVsZWFzZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzWE1pbm9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPj1cIi5jb25jYXQobWFqb3IsIFwiLjAuMFwiKS5jb25jYXQocHJlUmVsZWFzZSwgXCIgPFwiKS5jb25jYXQoTnVtYmVyKG1ham9yKSArIDEsIFwiLjAuMC0wXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1hQYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIj49XCIuY29uY2F0KG1ham9yLCBcIi5cIikuY29uY2F0KG1pbm9yLCBcIi4wXCIpLmNvbmNhdChwcmVSZWxlYXNlLCBcIiA8XCIpLmNvbmNhdChtYWpvciwgXCIuXCIpLmNvbmNhdChOdW1iZXIobWlub3IpICsgMSwgXCIuMC0wXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgfSkuam9pbignICcpO1xufVxuZnVuY3Rpb24gcGFyc2VTdGFyKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnRyaW0oKS5yZXBsYWNlKHBhcnNlUmVnZXgoc3RhciksICcnKTtcbn1cbmZ1bmN0aW9uIHBhcnNlR1RFMChjb21wYXJhdG9yU3RyaW5nKSB7XG4gICAgcmV0dXJuIGNvbXBhcmF0b3JTdHJpbmcudHJpbSgpLnJlcGxhY2UocGFyc2VSZWdleChndGUwKSwgJycpO1xufVxuLy8gZm9yayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9vcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uL2Jsb2IvdjEuMS4xMi9wYWNrYWdlcy9saWIvc3JjL3V0aWxzL3NlbXZlci9pbmRleC50c1xuLy8gQ29weXJpZ2h0IChjKVxuLy8gdml0ZS1wbHVnaW4tZmVkZXJhdGlvbiBpcyBsaWNlbnNlZCB1bmRlciBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgY2FuIHVzZSB0aGlzIHNvZnR3YXJlIGFjY29yZGluZyB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhlIE11bGFuIFBTTCB2Mi5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiBNdWxhbiBQU0wgdjIgYXQ6XG4vLyAgICAgIGh0dHA6Ly9saWNlbnNlLmNvc2NsLm9yZy5jbi9NdWxhblBTTDJcbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgT04gQU4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT0YgQU5ZIEtJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gTk9OLUlORlJJTkdFTUVOVCwgTUVSQ0hBTlRBQklMSVRZIE9SIEZJVCBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4vLyBTZWUgdGhlIE11bGFuIFBTTCB2MiBmb3IgbW9yZSBkZXRhaWxzLlxuZnVuY3Rpb24gY29tcGFyZUF0b20ocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSkge1xuICAgIHJhbmdlQXRvbSA9IE51bWJlcihyYW5nZUF0b20pIHx8IHJhbmdlQXRvbTtcbiAgICB2ZXJzaW9uQXRvbSA9IE51bWJlcih2ZXJzaW9uQXRvbSkgfHwgdmVyc2lvbkF0b207XG4gICAgaWYgKHJhbmdlQXRvbSA+IHZlcnNpb25BdG9tKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAocmFuZ2VBdG9tID09PSB2ZXJzaW9uQXRvbSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gY29tcGFyZVByZVJlbGVhc2UocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSkge1xuICAgIHZhciByYW5nZVByZVJlbGVhc2UgPSByYW5nZUF0b20ucHJlUmVsZWFzZTtcbiAgICB2YXIgdmVyc2lvblByZVJlbGVhc2UgPSB2ZXJzaW9uQXRvbS5wcmVSZWxlYXNlO1xuICAgIGlmIChyYW5nZVByZVJlbGVhc2UgPT09IHVuZGVmaW5lZCAmJiBCb29sZWFuKHZlcnNpb25QcmVSZWxlYXNlKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKEJvb2xlYW4ocmFuZ2VQcmVSZWxlYXNlKSAmJiB2ZXJzaW9uUHJlUmVsZWFzZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHJhbmdlUHJlUmVsZWFzZSA9PT0gdW5kZWZpbmVkICYmIHZlcnNpb25QcmVSZWxlYXNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGZvcih2YXIgaSA9IDAsIG4gPSByYW5nZVByZVJlbGVhc2UubGVuZ3RoOyBpIDw9IG47IGkrKyl7XG4gICAgICAgIHZhciByYW5nZUVsZW1lbnQgPSByYW5nZVByZVJlbGVhc2VbaV07XG4gICAgICAgIHZhciB2ZXJzaW9uRWxlbWVudCA9IHZlcnNpb25QcmVSZWxlYXNlW2ldO1xuICAgICAgICBpZiAocmFuZ2VFbGVtZW50ID09PSB2ZXJzaW9uRWxlbWVudCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmdlRWxlbWVudCA9PT0gdW5kZWZpbmVkICYmIHZlcnNpb25FbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmFuZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZlcnNpb25FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBhcmVBdG9tKHJhbmdlRWxlbWVudCwgdmVyc2lvbkVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pIHtcbiAgICByZXR1cm4gY29tcGFyZUF0b20ocmFuZ2VBdG9tLm1ham9yLCB2ZXJzaW9uQXRvbS5tYWpvcikgfHwgY29tcGFyZUF0b20ocmFuZ2VBdG9tLm1pbm9yLCB2ZXJzaW9uQXRvbS5taW5vcikgfHwgY29tcGFyZUF0b20ocmFuZ2VBdG9tLnBhdGNoLCB2ZXJzaW9uQXRvbS5wYXRjaCkgfHwgY29tcGFyZVByZVJlbGVhc2UocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSk7XG59XG5mdW5jdGlvbiBlcShyYW5nZUF0b20sIHZlcnNpb25BdG9tKSB7XG4gICAgcmV0dXJuIHJhbmdlQXRvbS52ZXJzaW9uID09PSB2ZXJzaW9uQXRvbS52ZXJzaW9uO1xufVxuZnVuY3Rpb24gY29tcGFyZShyYW5nZUF0b20sIHZlcnNpb25BdG9tKSB7XG4gICAgc3dpdGNoKHJhbmdlQXRvbS5vcGVyYXRvcil7XG4gICAgICAgIGNhc2UgJyc6XG4gICAgICAgIGNhc2UgJz0nOlxuICAgICAgICAgICAgcmV0dXJuIGVxKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pO1xuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlVmVyc2lvbihyYW5nZUF0b20sIHZlcnNpb25BdG9tKSA8IDA7XG4gICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgIHJldHVybiBlcShyYW5nZUF0b20sIHZlcnNpb25BdG9tKSB8fCBjb21wYXJlVmVyc2lvbihyYW5nZUF0b20sIHZlcnNpb25BdG9tKSA8IDA7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVWZXJzaW9uKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pID4gMDtcbiAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgcmV0dXJuIGVxKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pIHx8IGNvbXBhcmVWZXJzaW9uKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pID4gMDtcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gbWVhbiAqIG9yIHggLT4gYWxsIHZlcnNpb25zXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuLy8gZm9yayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9vcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uL2Jsb2IvdjEuMS4xMi9wYWNrYWdlcy9saWIvc3JjL3V0aWxzL3NlbXZlci9pbmRleC50c1xuLy8gQ29weXJpZ2h0IChjKVxuLy8gdml0ZS1wbHVnaW4tZmVkZXJhdGlvbiBpcyBsaWNlbnNlZCB1bmRlciBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgY2FuIHVzZSB0aGlzIHNvZnR3YXJlIGFjY29yZGluZyB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhlIE11bGFuIFBTTCB2Mi5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiBNdWxhbiBQU0wgdjIgYXQ6XG4vLyAgICAgIGh0dHA6Ly9saWNlbnNlLmNvc2NsLm9yZy5jbi9NdWxhblBTTDJcbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgT04gQU4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT0YgQU5ZIEtJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gTk9OLUlORlJJTkdFTUVOVCwgTUVSQ0hBTlRBQklMSVRZIE9SIEZJVCBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4vLyBTZWUgdGhlIE11bGFuIFBTTCB2MiBmb3IgbW9yZSBkZXRhaWxzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yU3RyaW5nKHJhbmdlKSB7XG4gICAgcmV0dXJuIHBpcGUoLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbiAgICAvLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4gICAgLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4gICAgLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMC0wXG4gICAgLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMC0wXG4gICAgLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMC0wXG4gICAgcGFyc2VDYXJldHMsIC8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuICAgIC8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjAtMFxuICAgIC8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wLTBcbiAgICAvLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMC0wXG4gICAgLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMC0wXG4gICAgLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMC0wXG4gICAgcGFyc2VUaWxkZXMsIHBhcnNlWFJhbmdlcywgcGFyc2VTdGFyKShyYW5nZSk7XG59XG5mdW5jdGlvbiBwYXJzZVJhbmdlKHJhbmdlKSB7XG4gICAgcmV0dXJuIHBpcGUoLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gICAgcGFyc2VIeXBoZW4sIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICAgIHBhcnNlQ29tcGFyYXRvclRyaW0sIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICAgIHBhcnNlVGlsZGVUcmltLCAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgICBwYXJzZUNhcmV0VHJpbSkocmFuZ2UudHJpbSgpKS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIHNhdGlzZnkodmVyc2lvbiwgcmFuZ2UpIHtcbiAgICBpZiAoIXZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBFeHRyYWN0IHZlcnNpb24gZGV0YWlscyBvbmNlXG4gICAgdmFyIGV4dHJhY3RlZFZlcnNpb24gPSBleHRyYWN0Q29tcGFyYXRvcih2ZXJzaW9uKTtcbiAgICBpZiAoIWV4dHJhY3RlZFZlcnNpb24pIHtcbiAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gc3RyaW5nIGlzIGludmFsaWQsIGl0IGNhbid0IHNhdGlzZnkgYW55IHJhbmdlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIF9leHRyYWN0ZWRWZXJzaW9uID0gX3NsaWNlZF90b19hcnJheShleHRyYWN0ZWRWZXJzaW9uLCA3KSwgdmVyc2lvbk9wZXJhdG9yID0gX2V4dHJhY3RlZFZlcnNpb25bMV0sIHZlcnNpb25NYWpvciA9IF9leHRyYWN0ZWRWZXJzaW9uWzNdLCB2ZXJzaW9uTWlub3IgPSBfZXh0cmFjdGVkVmVyc2lvbls0XSwgdmVyc2lvblBhdGNoID0gX2V4dHJhY3RlZFZlcnNpb25bNV0sIHZlcnNpb25QcmVSZWxlYXNlID0gX2V4dHJhY3RlZFZlcnNpb25bNl07XG4gICAgdmFyIHZlcnNpb25BdG9tID0ge1xuICAgICAgICBvcGVyYXRvcjogdmVyc2lvbk9wZXJhdG9yLFxuICAgICAgICB2ZXJzaW9uOiBjb21iaW5lVmVyc2lvbih2ZXJzaW9uTWFqb3IsIHZlcnNpb25NaW5vciwgdmVyc2lvblBhdGNoLCB2ZXJzaW9uUHJlUmVsZWFzZSksXG4gICAgICAgIG1ham9yOiB2ZXJzaW9uTWFqb3IsXG4gICAgICAgIG1pbm9yOiB2ZXJzaW9uTWlub3IsXG4gICAgICAgIHBhdGNoOiB2ZXJzaW9uUGF0Y2gsXG4gICAgICAgIHByZVJlbGVhc2U6IHZlcnNpb25QcmVSZWxlYXNlID09IG51bGwgPyB2b2lkIDAgOiB2ZXJzaW9uUHJlUmVsZWFzZS5zcGxpdCgnLicpXG4gICAgfTtcbiAgICAvLyBTcGxpdCB0aGUgcmFuZ2UgYnkgfHwgdG8gaGFuZGxlIE9SIGNvbmRpdGlvbnNcbiAgICB2YXIgb3JSYW5nZXMgPSByYW5nZS5zcGxpdCgnfHwnKTtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2UsIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICAgIGZvcih2YXIgX2l0ZXJhdG9yID0gb3JSYW5nZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKXtcbiAgICAgICAgICAgIHZhciBvclJhbmdlID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgICB2YXIgdHJpbW1lZE9yUmFuZ2UgPSBvclJhbmdlLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICghdHJpbW1lZE9yUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBBbiBlbXB0eSByYW5nZSBzdHJpbmcgc2lnbmlmaWVzIHdpbGRjYXJkICosIHNhdGlzZnkgYW55IHZhbGlkIHZlcnNpb25cbiAgICAgICAgICAgICAgICAvLyAoV2UgYWxyZWFkeSBjaGVja2VkIGlmIHRoZSB2ZXJzaW9uIGl0c2VsZiBpcyB2YWxpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhhbmRsZSBzaW1wbGUgd2lsZGNhcmRzIGV4cGxpY2l0bHkgYmVmb3JlIGNvbXBsZXggcGFyc2luZ1xuICAgICAgICAgICAgaWYgKHRyaW1tZWRPclJhbmdlID09PSAnKicgfHwgdHJpbW1lZE9yUmFuZ2UgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBBcHBseSBleGlzdGluZyBwYXJzaW5nIGxvZ2ljIHRvIHRoZSBjdXJyZW50IE9SIHN1Yi1yYW5nZVxuICAgICAgICAgICAgICAgIHZhciBwYXJzZWRTdWJSYW5nZSA9IHBhcnNlUmFuZ2UodHJpbW1lZE9yUmFuZ2UpOyAvLyBIYW5kbGVzIGh5cGhlbnMsIHRyaW1zIGV0Yy5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcmVzdWx0IG9mIGluaXRpYWwgcGFyc2luZyBpcyBlbXB0eSwgd2hpY2ggY2FuIGhhcHBlblxuICAgICAgICAgICAgICAgIC8vIGZvciBzb21lIHdpbGRjYXJkIGNhc2VzIGhhbmRsZWQgYnkgcGFyc2VSYW5nZS9wYXJzZUNvbXBhcmF0b3JTdHJpbmcuXG4gICAgICAgICAgICAgICAgLy8gRS5nLiBgcGFyc2VTdGFyYCB1c2VkIGluIGBwYXJzZUNvbXBhcmF0b3JTdHJpbmdgIHJldHVybnMgJycuXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRTdWJSYW5nZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcGFyc2luZyByZXN1bHRzIGluIGVtcHR5IHN0cmluZywgdHJlYXQgYXMgd2lsZGNhcmQgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBwYXJzZWRDb21wYXJhdG9yU3RyaW5nID0gcGFyc2VkU3ViUmFuZ2Uuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24ocmFuZ2VWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUNvbXBhcmF0b3JTdHJpbmcocmFuZ2VWZXJzaW9uKTtcbiAgICAgICAgICAgICAgICB9KSAvLyBFeHBhbmRzIF4sIH5cbiAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGFnYWluIGlmIHRoZSBjb21wYXJhdG9yIHN0cmluZyBiZWNhbWUgZW1wdHkgYWZ0ZXIgc3BlY2lmaWMgcGFyc2luZyBsaWtlIF4gb3IgflxuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkQ29tcGFyYXRvclN0cmluZy50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNwbGl0IHRoZSBzdWItcmFuZ2UgYnkgc3BhY2UgZm9yIGltcGxpY2l0IEFORCBjb25kaXRpb25zXG4gICAgICAgICAgICAgICAgdmFyIGNvbXBhcmF0b3JzID0gcGFyc2VkQ29tcGFyYXRvclN0cmluZy5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUdURTAoY29tcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgfSkgLy8gRmlsdGVyIG91dCBlbXB0eSBzdHJpbmdzIHRoYXQgbWlnaHQgcmVzdWx0IGZyb20gbXVsdGlwbGUgc3BhY2VzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIHN1Yi1yYW5nZSBiZWNvbWVzIGVtcHR5IGFmdGVyIHBhcnNpbmcgKGUuZy4sIGludmFsaWQgY2hhcmFjdGVycyksXG4gICAgICAgICAgICAgICAgLy8gaXQgY2Fubm90IGJlIHNhdGlzZmllZC4gVGhpcyBjaGVjayBtaWdodCBiZSByZWR1bmRhbnQgbm93IGJ1dCBrZXB0IGZvciBzYWZldHkuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmF0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHN1YlJhbmdlU2F0aXNmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjEgPSB0cnVlLCBfZGlkSXRlcmF0b3JFcnJvcjEgPSBmYWxzZSwgX2l0ZXJhdG9yRXJyb3IxID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgX2l0ZXJhdG9yMSA9IGNvbXBhcmF0b3JzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAxOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24xID0gKF9zdGVwMSA9IF9pdGVyYXRvcjEubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjEgPSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21wYXJhdG9yID0gX3N0ZXAxLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dHJhY3RlZENvbXBhcmF0b3IgPSBleHRyYWN0Q29tcGFyYXRvcihjb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGFueSBwYXJ0IG9mIHRoZSBBTkQgc3ViLXJhbmdlIGlzIGludmFsaWQsIHRoZSBzdWItcmFuZ2UgaXMgbm90IHNhdGlzZmllZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFleHRyYWN0ZWRDb21wYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViUmFuZ2VTYXRpc2ZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZXh0cmFjdGVkQ29tcGFyYXRvciA9IF9zbGljZWRfdG9fYXJyYXkoZXh0cmFjdGVkQ29tcGFyYXRvciwgNyksIHJhbmdlT3BlcmF0b3IgPSBfZXh0cmFjdGVkQ29tcGFyYXRvclsxXSwgcmFuZ2VNYWpvciA9IF9leHRyYWN0ZWRDb21wYXJhdG9yWzNdLCByYW5nZU1pbm9yID0gX2V4dHJhY3RlZENvbXBhcmF0b3JbNF0sIHJhbmdlUGF0Y2ggPSBfZXh0cmFjdGVkQ29tcGFyYXRvcls1XSwgcmFuZ2VQcmVSZWxlYXNlID0gX2V4dHJhY3RlZENvbXBhcmF0b3JbNl07XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmFuZ2VBdG9tID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiByYW5nZU9wZXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246IGNvbWJpbmVWZXJzaW9uKHJhbmdlTWFqb3IsIHJhbmdlTWlub3IsIHJhbmdlUGF0Y2gsIHJhbmdlUHJlUmVsZWFzZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFqb3I6IHJhbmdlTWFqb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlub3I6IHJhbmdlTWlub3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2g6IHJhbmdlUGF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlUmVsZWFzZTogcmFuZ2VQcmVSZWxlYXNlID09IG51bGwgPyB2b2lkIDAgOiByYW5nZVByZVJlbGVhc2Uuc3BsaXQoJy4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSB2ZXJzaW9uIHNhdGlzZmllcyB0aGlzIHNwZWNpZmljIGNvbXBhcmF0b3IgaW4gdGhlIEFORCBjaGFpblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wYXJlKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViUmFuZ2VTYXRpc2ZpZWQgPSBmYWxzZTsgLy8gVGhpcyBwYXJ0IG9mIHRoZSBBTkQgY29uZGl0aW9uIGZhaWxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBObyBuZWVkIHRvIGNoZWNrIGZ1cnRoZXIgY29tcGFyYXRvcnMgaW4gdGhpcyBzdWItcmFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvcjEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvcjEgPSBlcnI7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMSAmJiBfaXRlcmF0b3IxLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yMS5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiBhbGwgQU5EIGNvbmRpdGlvbnMgd2l0aGluIHRoaXMgT1Igc3ViLXJhbmdlIHdlcmUgbWV0LCB0aGUgb3ZlcmFsbCByYW5nZSBpcyBzYXRpc2ZpZWRcbiAgICAgICAgICAgICAgICBpZiAoc3ViUmFuZ2VTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIExvZyBlcnJvciBhbmQgdHJlYXQgdGhpcyBzdWItcmFuZ2UgYXMgdW5zYXRpc2ZpZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbc2VtdmVyXSBFcnJvciBwcm9jZXNzaW5nIHJhbmdlIHBhcnQgXCInLmNvbmNhdCh0cmltbWVkT3JSYW5nZSwgJ1wiOicpLCBlKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIG5vbmUgb2YgdGhlIE9SIHN1Yi1yYW5nZXMgd2VyZSBzYXRpc2ZpZWRcbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBmb3JtYXRTaGFyZShzaGFyZUFyZ3MsIGZyb20sIG5hbWUsIHNoYXJlU3RyYXRlZ3kpIHtcbiAgICB2YXIgZ2V0O1xuICAgIGlmICgnZ2V0JyBpbiBzaGFyZUFyZ3MpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIGdldCA9IHNoYXJlQXJncy5nZXQ7XG4gICAgfSBlbHNlIGlmICgnbGliJyBpbiBzaGFyZUFyZ3MpIHtcbiAgICAgICAgZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNoYXJlQXJncy5saWIpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGdldCBzaGFyZWQgJ1wiLmNvbmNhdChuYW1lLCBcIichXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgX3NoYXJlQXJnc192ZXJzaW9uLCBfc2hhcmVBcmdzX3Njb3BlLCBfc2hhcmVBcmdzX3N0cmF0ZWd5O1xuICAgIHJldHVybiBwb2x5ZmlsbHMuX2V4dGVuZHMoe1xuICAgICAgICBkZXBzOiBbXSxcbiAgICAgICAgdXNlSW46IFtdLFxuICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICBsb2FkaW5nOiBudWxsXG4gICAgfSwgc2hhcmVBcmdzLCB7XG4gICAgICAgIHNoYXJlQ29uZmlnOiBwb2x5ZmlsbHMuX2V4dGVuZHMoe1xuICAgICAgICAgICAgcmVxdWlyZWRWZXJzaW9uOiBcIl5cIi5jb25jYXQoc2hhcmVBcmdzLnZlcnNpb24pLFxuICAgICAgICAgICAgc2luZ2xldG9uOiBmYWxzZSxcbiAgICAgICAgICAgIGVhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmljdFZlcnNpb246IGZhbHNlXG4gICAgICAgIH0sIHNoYXJlQXJncy5zaGFyZUNvbmZpZyksXG4gICAgICAgIGdldDogZ2V0LFxuICAgICAgICBsb2FkZWQ6IChzaGFyZUFyZ3MgPT0gbnVsbCA/IHZvaWQgMCA6IHNoYXJlQXJncy5sb2FkZWQpIHx8ICdsaWInIGluIHNoYXJlQXJncyA/IHRydWUgOiB1bmRlZmluZWQsXG4gICAgICAgIHZlcnNpb246IChfc2hhcmVBcmdzX3ZlcnNpb24gPSBzaGFyZUFyZ3MudmVyc2lvbikgIT0gbnVsbCA/IF9zaGFyZUFyZ3NfdmVyc2lvbiA6ICcwJyxcbiAgICAgICAgc2NvcGU6IEFycmF5LmlzQXJyYXkoc2hhcmVBcmdzLnNjb3BlKSA/IHNoYXJlQXJncy5zY29wZSA6IFtcbiAgICAgICAgICAgIChfc2hhcmVBcmdzX3Njb3BlID0gc2hhcmVBcmdzLnNjb3BlKSAhPSBudWxsID8gX3NoYXJlQXJnc19zY29wZSA6ICdkZWZhdWx0J1xuICAgICAgICBdLFxuICAgICAgICBzdHJhdGVneTogKChfc2hhcmVBcmdzX3N0cmF0ZWd5ID0gc2hhcmVBcmdzLnN0cmF0ZWd5KSAhPSBudWxsID8gX3NoYXJlQXJnc19zdHJhdGVneSA6IHNoYXJlU3RyYXRlZ3kpIHx8ICd2ZXJzaW9uLWZpcnN0J1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZm9ybWF0U2hhcmVDb25maWdzKGdsb2JhbE9wdGlvbnMsIHVzZXJPcHRpb25zKSB7XG4gICAgdmFyIHNoYXJlQXJncyA9IHVzZXJPcHRpb25zLnNoYXJlZCB8fCB7fTtcbiAgICB2YXIgZnJvbSA9IHVzZXJPcHRpb25zLm5hbWU7XG4gICAgdmFyIHNoYXJlSW5mb3MgPSBPYmplY3Qua2V5cyhzaGFyZUFyZ3MpLnJlZHVjZShmdW5jdGlvbihyZXMsIHBrZ05hbWUpIHtcbiAgICAgICAgdmFyIGFycmF5U2hhcmVBcmdzID0gYXJyYXlPcHRpb25zKHNoYXJlQXJnc1twa2dOYW1lXSk7XG4gICAgICAgIHJlc1twa2dOYW1lXSA9IHJlc1twa2dOYW1lXSB8fCBbXTtcbiAgICAgICAgYXJyYXlTaGFyZUFyZ3MuZm9yRWFjaChmdW5jdGlvbihzaGFyZUNvbmZpZykge1xuICAgICAgICAgICAgcmVzW3BrZ05hbWVdLnB1c2goZm9ybWF0U2hhcmUoc2hhcmVDb25maWcsIGZyb20sIHBrZ05hbWUsIHVzZXJPcHRpb25zLnNoYXJlU3RyYXRlZ3kpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuICAgIHZhciBzaGFyZWQgPSBwb2x5ZmlsbHMuX2V4dGVuZHMoe30sIGdsb2JhbE9wdGlvbnMuc2hhcmVkKTtcbiAgICBPYmplY3Qua2V5cyhzaGFyZUluZm9zKS5mb3JFYWNoKGZ1bmN0aW9uKHNoYXJlS2V5KSB7XG4gICAgICAgIGlmICghc2hhcmVkW3NoYXJlS2V5XSkge1xuICAgICAgICAgICAgc2hhcmVkW3NoYXJlS2V5XSA9IHNoYXJlSW5mb3Nbc2hhcmVLZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hhcmVJbmZvc1tzaGFyZUtleV0uZm9yRWFjaChmdW5jdGlvbihuZXdVc2VyU2hhcmVkT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBpc1NhbWVWZXJzaW9uID0gc2hhcmVkW3NoYXJlS2V5XS5maW5kKGZ1bmN0aW9uKHNoYXJlZFZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hhcmVkVmFsLnZlcnNpb24gPT09IG5ld1VzZXJTaGFyZWRPcHRpb25zLnZlcnNpb247XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1NhbWVWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZFtzaGFyZUtleV0ucHVzaChuZXdVc2VyU2hhcmVkT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaGFyZWQ6IHNoYXJlZCxcbiAgICAgICAgc2hhcmVJbmZvczogc2hhcmVJbmZvc1xuICAgIH07XG59XG5mdW5jdGlvbiB2ZXJzaW9uTHQoYSwgYikge1xuICAgIHZhciB0cmFuc2Zvcm1JbnZhbGlkVmVyc2lvbiA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICAgICAgdmFyIGlzTnVtYmVyVmVyc2lvbiA9ICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZlcnNpb24pKTtcbiAgICAgICAgaWYgKGlzTnVtYmVyVmVyc2lvbikge1xuICAgICAgICAgICAgdmFyIHNwbGl0QXJyID0gdmVyc2lvbi5zcGxpdCgnLicpO1xuICAgICAgICAgICAgdmFyIHZhbGlkVmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgMyAtIHNwbGl0QXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB2YWxpZFZlcnNpb24gKz0gJy4wJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWxpZFZlcnNpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgfTtcbiAgICBpZiAoc2F0aXNmeSh0cmFuc2Zvcm1JbnZhbGlkVmVyc2lvbihhKSwgXCI8PVwiLmNvbmNhdCh0cmFuc2Zvcm1JbnZhbGlkVmVyc2lvbihiKSkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG52YXIgZmluZFZlcnNpb24gPSBmdW5jdGlvbihzaGFyZVZlcnNpb25NYXAsIGNiKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gY2IgfHwgZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uTHQocHJldiwgY3VyKTtcbiAgICB9O1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzaGFyZVZlcnNpb25NYXApLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgICAgICByZXR1cm4gY3VyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFjayhwcmV2LCBjdXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VyO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRlZmF1bHQgdmVyc2lvbiBpcyAnMCcgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9ibG9iL21haW4vbGliL3NoYXJpbmcvUHJvdmlkZVNoYXJlZE1vZHVsZS5qcyNMMTM2XG4gICAgICAgIGlmIChwcmV2ID09PSAnMCcpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwgMCk7XG59O1xudmFyIGlzTG9hZGVkID0gZnVuY3Rpb24oc2hhcmVkKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oc2hhcmVkLmxvYWRlZCkgfHwgdHlwZW9mIHNoYXJlZC5saWIgPT09ICdmdW5jdGlvbic7XG59O1xudmFyIGlzTG9hZGluZyA9IGZ1bmN0aW9uKHNoYXJlZCkge1xuICAgIHJldHVybiBCb29sZWFuKHNoYXJlZC5sb2FkaW5nKTtcbn07XG5mdW5jdGlvbiBmaW5kU2luZ2xldG9uVmVyc2lvbk9yZGVyQnlWZXJzaW9uKHNoYXJlU2NvcGVNYXAsIHNjb3BlLCBwa2dOYW1lKSB7XG4gICAgdmFyIHZlcnNpb25zID0gc2hhcmVTY29wZU1hcFtzY29wZV1bcGtnTmFtZV07XG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socHJldiwgY3VyKSB7XG4gICAgICAgIHJldHVybiAhaXNMb2FkZWQodmVyc2lvbnNbcHJldl0pICYmIHZlcnNpb25MdChwcmV2LCBjdXIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZpbmRWZXJzaW9uKHNoYXJlU2NvcGVNYXBbc2NvcGVdW3BrZ05hbWVdLCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBmaW5kU2luZ2xldG9uVmVyc2lvbk9yZGVyQnlMb2FkZWQoc2hhcmVTY29wZU1hcCwgc2NvcGUsIHBrZ05hbWUpIHtcbiAgICB2YXIgdmVyc2lvbnMgPSBzaGFyZVNjb3BlTWFwW3Njb3BlXVtwa2dOYW1lXTtcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhwcmV2LCBjdXIpIHtcbiAgICAgICAgdmFyIGlzTG9hZGluZ09yTG9hZGVkID0gZnVuY3Rpb24oc2hhcmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkZWQoc2hhcmVkKSB8fCBpc0xvYWRpbmcoc2hhcmVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzTG9hZGluZ09yTG9hZGVkKHZlcnNpb25zW2N1cl0pKSB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkaW5nT3JMb2FkZWQodmVyc2lvbnNbcHJldl0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odmVyc2lvbkx0KHByZXYsIGN1cikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMb2FkaW5nT3JMb2FkZWQodmVyc2lvbnNbcHJldl0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlcnNpb25MdChwcmV2LCBjdXIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZpbmRWZXJzaW9uKHNoYXJlU2NvcGVNYXBbc2NvcGVdW3BrZ05hbWVdLCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBnZXRGaW5kU2hhcmVGdW5jdGlvbihzdHJhdGVneSkge1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2xvYWRlZC1maXJzdCcpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRTaW5nbGV0b25WZXJzaW9uT3JkZXJCeUxvYWRlZDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmRTaW5nbGV0b25WZXJzaW9uT3JkZXJCeVZlcnNpb247XG59XG5mdW5jdGlvbiBnZXRSZWdpc3RlcmVkU2hhcmUobG9jYWxTaGFyZVNjb3BlTWFwLCBwa2dOYW1lLCBzaGFyZUluZm8sIHJlc29sdmVTaGFyZSkge1xuICAgIGlmICghbG9jYWxTaGFyZVNjb3BlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHNoYXJlQ29uZmlnID0gc2hhcmVJbmZvLnNoYXJlQ29uZmlnLCBfc2hhcmVJbmZvX3Njb3BlID0gc2hhcmVJbmZvLnNjb3BlLCBzY29wZSA9IF9zaGFyZUluZm9fc2NvcGUgPT09IHZvaWQgMCA/IERFRkFVTFRfU0NPUEUgOiBfc2hhcmVJbmZvX3Njb3BlLCBzdHJhdGVneSA9IHNoYXJlSW5mby5zdHJhdGVneTtcbiAgICB2YXIgc2NvcGVzID0gQXJyYXkuaXNBcnJheShzY29wZSkgPyBzY29wZSA6IFtcbiAgICAgICAgc2NvcGVcbiAgICBdO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZSwgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2MgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgIGlmIChzaGFyZUNvbmZpZyAmJiBsb2NhbFNoYXJlU2NvcGVNYXBbc2NdICYmIGxvY2FsU2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWlyZWRWZXJzaW9uID0gc2hhcmVDb25maWcucmVxdWlyZWRWZXJzaW9uO1xuICAgICAgICAgICAgICAgIHZhciBmaW5kU2hhcmVGdW5jdGlvbiA9IGdldEZpbmRTaGFyZUZ1bmN0aW9uKHN0cmF0ZWd5KTtcbiAgICAgICAgICAgICAgICB2YXIgbWF4T3JTaW5nbGV0b25WZXJzaW9uID0gZmluZFNoYXJlRnVuY3Rpb24obG9jYWxTaGFyZVNjb3BlTWFwLCBzYywgcGtnTmFtZSk7XG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRSZXNvbHZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcmVDb25maWcuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmVkVmVyc2lvbiA9PT0gJ3N0cmluZycgJiYgIXNhdGlzZnkobWF4T3JTaW5nbGV0b25WZXJzaW9uLCByZXF1aXJlZFZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9IFwiVmVyc2lvbiBcIi5jb25jYXQobWF4T3JTaW5nbGV0b25WZXJzaW9uLCBcIiBmcm9tIFwiKS5jb25jYXQobWF4T3JTaW5nbGV0b25WZXJzaW9uICYmIGxvY2FsU2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bbWF4T3JTaW5nbGV0b25WZXJzaW9uXS5mcm9tLCBcIiBvZiBzaGFyZWQgc2luZ2xldG9uIG1vZHVsZSBcIikuY29uY2F0KHBrZ05hbWUsIFwiIGRvZXMgbm90IHNhdGlzZnkgdGhlIHJlcXVpcmVtZW50IG9mIFwiKS5jb25jYXQoc2hhcmVJbmZvLmZyb20sIFwiIHdoaWNoIG5lZWRzIFwiKS5jb25jYXQocmVxdWlyZWRWZXJzaW9uLCBcIilcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXJlQ29uZmlnLnN0cmljdFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsU2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bbWF4T3JTaW5nbGV0b25WZXJzaW9uXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZFZlcnNpb24gPT09IGZhbHNlIHx8IHJlcXVpcmVkVmVyc2lvbiA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsU2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bbWF4T3JTaW5nbGV0b25WZXJzaW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYXRpc2Z5KG1heE9yU2luZ2xldG9uVmVyc2lvbiwgcmVxdWlyZWRWZXJzaW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbFNoYXJlU2NvcGVNYXBbc2NdW3BrZ05hbWVdW21heE9yU2luZ2xldG9uVmVyc2lvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2UsIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIF9pdGVyYXRvciA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV0pW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfc3RlcF92YWx1ZSA9IF9zbGljZWRfdG9fYXJyYXkoX3N0ZXAudmFsdWUsIDIpLCB2ZXJzaW9uS2V5ID0gX3N0ZXBfdmFsdWVbMF0sIHZlcnNpb25WYWx1ZSA9IF9zdGVwX3ZhbHVlWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2F0aXNmeSh2ZXJzaW9uS2V5LCByZXF1aXJlZFZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmVyc2lvblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZU1hcDogbG9jYWxTaGFyZVNjb3BlTWFwLFxuICAgICAgICAgICAgICAgICAgICBzY29wZTogc2MsXG4gICAgICAgICAgICAgICAgICAgIHBrZ05hbWU6IHBrZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb246IG1heE9yU2luZ2xldG9uVmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgR2xvYmFsRmVkZXJhdGlvbjogR2xvYmFsLl9fRkVERVJBVElPTl9fLFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlcjogZGVmYXVsdFJlc29sdmVyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZVNoYXJlZCA9IHJlc29sdmVTaGFyZS5lbWl0KHBhcmFtcykgfHwgcGFyYW1zO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHY6IHJlc29sdmVTaGFyZWQucmVzb2x2ZXIoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvcih2YXIgX2l0ZXJhdG9yID0gc2NvcGVzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSl7XG4gICAgICAgICAgICB2YXIgX3JldCA9IF9sb29wKCk7XG4gICAgICAgICAgICBpZiAoX3R5cGVfb2YoX3JldCkgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0LnY7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGdldEdsb2JhbFNoYXJlU2NvcGUoKSB7XG4gICAgcmV0dXJuIEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX1NIQVJFX187XG59XG5mdW5jdGlvbiBnZXRUYXJnZXRTaGFyZWRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB2YXIgcGtnTmFtZSA9IG9wdGlvbnMucGtnTmFtZSwgZXh0cmFPcHRpb25zID0gb3B0aW9ucy5leHRyYU9wdGlvbnMsIHNoYXJlSW5mb3MgPSBvcHRpb25zLnNoYXJlSW5mb3M7XG4gICAgdmFyIGRlZmF1bHRSZXNvbHZlciA9IGZ1bmN0aW9uKHNoYXJlZE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFzaGFyZWRPcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaGFyZVZlcnNpb25NYXAgPSB7fTtcbiAgICAgICAgc2hhcmVkT3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHNoYXJlZCkge1xuICAgICAgICAgICAgc2hhcmVWZXJzaW9uTWFwW3NoYXJlZC52ZXJzaW9uXSA9IHNoYXJlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKHByZXYsIGN1cikge1xuICAgICAgICAgICAgcmV0dXJuICFpc0xvYWRlZChzaGFyZVZlcnNpb25NYXBbcHJldl0pICYmIHZlcnNpb25MdChwcmV2LCBjdXIpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgbWF4VmVyc2lvbiA9IGZpbmRWZXJzaW9uKHNoYXJlVmVyc2lvbk1hcCwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gc2hhcmVWZXJzaW9uTWFwW21heFZlcnNpb25dO1xuICAgIH07XG4gICAgdmFyIF9leHRyYU9wdGlvbnNfcmVzb2x2ZXI7XG4gICAgdmFyIHJlc29sdmVyID0gKF9leHRyYU9wdGlvbnNfcmVzb2x2ZXIgPSBleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5yZXNvbHZlcikgIT0gbnVsbCA/IF9leHRyYU9wdGlvbnNfcmVzb2x2ZXIgOiBkZWZhdWx0UmVzb2x2ZXI7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlc29sdmVyKHNoYXJlSW5mb3NbcGtnTmFtZV0pLCBleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5jdXN0b21TaGFyZUluZm8pO1xufVxudmFyIFNoYXJlVXRpbHMgPSB7XG4gICAgZ2V0UmVnaXN0ZXJlZFNoYXJlOiBnZXRSZWdpc3RlcmVkU2hhcmUsXG4gICAgZ2V0R2xvYmFsU2hhcmVTY29wZTogZ2V0R2xvYmFsU2hhcmVTY29wZVxufTtcbnZhciBHbG9iYWxVdGlscyA9IHtcbiAgICBHbG9iYWw6IEdsb2JhbCxcbiAgICBuYXRpdmVHbG9iYWw6IG5hdGl2ZUdsb2JhbCxcbiAgICByZXNldEZlZGVyYXRpb25HbG9iYWxJbmZvOiByZXNldEZlZGVyYXRpb25HbG9iYWxJbmZvLFxuICAgIHNldEdsb2JhbEZlZGVyYXRpb25JbnN0YW5jZTogc2V0R2xvYmFsRmVkZXJhdGlvbkluc3RhbmNlLFxuICAgIGdldEdsb2JhbEZlZGVyYXRpb25Db25zdHJ1Y3RvcjogZ2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yLFxuICAgIHNldEdsb2JhbEZlZGVyYXRpb25Db25zdHJ1Y3Rvcjogc2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yLFxuICAgIGdldEluZm9XaXRob3V0VHlwZTogZ2V0SW5mb1dpdGhvdXRUeXBlLFxuICAgIGdldEdsb2JhbFNuYXBzaG90OiBnZXRHbG9iYWxTbmFwc2hvdCxcbiAgICBnZXRUYXJnZXRTbmFwc2hvdEluZm9CeU1vZHVsZUluZm86IGdldFRhcmdldFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyxcbiAgICBnZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm86IGdldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyxcbiAgICBzZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm86IHNldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyxcbiAgICBhZGRHbG9iYWxTbmFwc2hvdDogYWRkR2xvYmFsU25hcHNob3QsXG4gICAgZ2V0UmVtb3RlRW50cnlFeHBvcnRzOiBnZXRSZW1vdGVFbnRyeUV4cG9ydHMsXG4gICAgcmVnaXN0ZXJHbG9iYWxQbHVnaW5zOiByZWdpc3Rlckdsb2JhbFBsdWdpbnMsXG4gICAgZ2V0R2xvYmFsSG9zdFBsdWdpbnM6IGdldEdsb2JhbEhvc3RQbHVnaW5zLFxuICAgIGdldFByZWxvYWRlZDogZ2V0UHJlbG9hZGVkLFxuICAgIHNldFByZWxvYWRlZDogc2V0UHJlbG9hZGVkXG59O1xudmFyIGhlbHBlcnMgPSB7XG4gICAgZ2xvYmFsOiBHbG9iYWxVdGlscyxcbiAgICBzaGFyZTogU2hhcmVVdGlsc1xufTtcbmZ1bmN0aW9uIGdldEJ1aWxkZXJJZCgpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICByZXR1cm4gdHlwZW9mIEZFREVSQVRJT05fQlVJTERfSURFTlRJRklFUiAhPT0gJ3VuZGVmaW5lZCcgPyBGRURFUkFUSU9OX0JVSUxEX0lERU5USUZJRVIgOiAnJztcbn1cbi8vIEZ1bmN0aW9uIHRvIG1hdGNoIGEgcmVtb3RlIHdpdGggaXRzIG5hbWUgYW5kIGV4cG9zZVxuLy8gaWQ6IHBrZ05hbWUoQGZlZGVyYXRpb24vYXBwMSkgKyBleHBvc2UoYnV0dG9uKSA9IEBmZWRlcmF0aW9uL2FwcDEvYnV0dG9uXG4vLyBpZDogYWxpYXMoYXBwMSkgKyBleHBvc2UoYnV0dG9uKSA9IGFwcDEvYnV0dG9uXG4vLyBpZDogYWxpYXMoYXBwMS91dGlscykgKyBleHBvc2UobG9hZGFzaC9zb3J0KSA9IGFwcDEvdXRpbHMvbG9hZGFzaC9zb3J0XG5mdW5jdGlvbiBtYXRjaFJlbW90ZVdpdGhOYW1lQW5kRXhwb3NlKHJlbW90ZXMsIGlkKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlLCBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgICBmb3IodmFyIF9pdGVyYXRvciA9IHJlbW90ZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKXtcbiAgICAgICAgICAgIHZhciByZW1vdGUgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgIC8vIG1hdGNoIHBrZ05hbWVcbiAgICAgICAgICAgIHZhciBpc05hbWVNYXRjaGVkID0gaWQuc3RhcnRzV2l0aChyZW1vdGUubmFtZSk7XG4gICAgICAgICAgICB2YXIgZXhwb3NlID0gaWQucmVwbGFjZShyZW1vdGUubmFtZSwgJycpO1xuICAgICAgICAgICAgaWYgKGlzTmFtZU1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3NlLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGtnTmFtZU9yQWxpYXMgPSByZW1vdGUubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZXhwb3NlID0gXCIuXCIuY29uY2F0KGV4cG9zZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwa2dOYW1lT3JBbGlhczogcGtnTmFtZU9yQWxpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvc2U6IGV4cG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZTogcmVtb3RlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChleHBvc2UgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwa2dOYW1lT3JBbGlhczogcmVtb3RlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvc2U6ICcuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZTogcmVtb3RlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWF0Y2ggYWxpYXNcbiAgICAgICAgICAgIHZhciBpc0FsaWFzTWF0Y2hlZCA9IHJlbW90ZS5hbGlhcyAmJiBpZC5zdGFydHNXaXRoKHJlbW90ZS5hbGlhcyk7XG4gICAgICAgICAgICB2YXIgZXhwb3NlV2l0aEFsaWFzID0gcmVtb3RlLmFsaWFzICYmIGlkLnJlcGxhY2UocmVtb3RlLmFsaWFzLCAnJyk7XG4gICAgICAgICAgICBpZiAocmVtb3RlLmFsaWFzICYmIGlzQWxpYXNNYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9zZVdpdGhBbGlhcyAmJiBleHBvc2VXaXRoQWxpYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwa2dOYW1lT3JBbGlhczEgPSByZW1vdGUuYWxpYXM7XG4gICAgICAgICAgICAgICAgICAgIGV4cG9zZVdpdGhBbGlhcyA9IFwiLlwiLmNvbmNhdChleHBvc2VXaXRoQWxpYXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGtnTmFtZU9yQWxpYXM6IHBrZ05hbWVPckFsaWFzMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zZTogZXhwb3NlV2l0aEFsaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlOiByZW1vdGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV4cG9zZVdpdGhBbGlhcyA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBrZ05hbWVPckFsaWFzOiByZW1vdGUuYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvc2U6ICcuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZTogcmVtb3RlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xufVxuLy8gRnVuY3Rpb24gdG8gbWF0Y2ggYSByZW1vdGUgd2l0aCBpdHMgbmFtZSBvciBhbGlhc1xuZnVuY3Rpb24gbWF0Y2hSZW1vdGUocmVtb3RlcywgbmFtZU9yQWxpYXMpIHtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2UsIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuICAgIHRyeSB7XG4gICAgICAgIGZvcih2YXIgX2l0ZXJhdG9yID0gcmVtb3Rlc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpe1xuICAgICAgICAgICAgdmFyIHJlbW90ZSA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgdmFyIGlzTmFtZU1hdGNoZWQgPSBuYW1lT3JBbGlhcyA9PT0gcmVtb3RlLm5hbWU7XG4gICAgICAgICAgICBpZiAoaXNOYW1lTWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZW1vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaXNBbGlhc01hdGNoZWQgPSByZW1vdGUuYWxpYXMgJiYgbmFtZU9yQWxpYXMgPT09IHJlbW90ZS5hbGlhcztcbiAgICAgICAgICAgIGlmIChpc0FsaWFzTWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZW1vdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5mdW5jdGlvbiByZWdpc3RlclBsdWdpbnMocGx1Z2lucywgaG9va0luc3RhbmNlcykge1xuICAgIHZhciBnbG9iYWxQbHVnaW5zID0gZ2V0R2xvYmFsSG9zdFBsdWdpbnMoKTtcbiAgICAvLyBJbmNvcnBvcmF0ZSBnbG9iYWwgcGx1Z2luc1xuICAgIGlmIChnbG9iYWxQbHVnaW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZ2xvYmFsUGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICAgICAgaWYgKHBsdWdpbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHBsdWdpbnMuZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZSAhPT0gcGx1Z2luLm5hbWU7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHBsdWdpbnMgJiYgcGx1Z2lucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgIGhvb2tJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbihob29rSW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBob29rSW5zdGFuY2UuYXBwbHlQbHVnaW4ocGx1Z2luKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBsdWdpbnM7XG59XG52YXIgaW1wb3J0Q2FsbGJhY2sgPSAnLnRoZW4oY2FsbGJhY2tzWzBdKS5jYXRjaChjYWxsYmFja3NbMV0pJztcbmZ1bmN0aW9uIGxvYWRFc21FbnRyeShfKSB7XG4gICAgcmV0dXJuIF9sb2FkRXNtRW50cnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9sb2FkRXNtRW50cnkoKSB7XG4gICAgX2xvYWRFc21FbnRyeSA9IF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgICAgdmFyIGVudHJ5LCByZW1vdGVFbnRyeUV4cG9ydHM7XG4gICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgZW50cnkgPSBwYXJhbS5lbnRyeSwgcmVtb3RlRW50cnlFeHBvcnRzID0gcGFyYW0ucmVtb3RlRW50cnlFeHBvcnRzO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZW1vdGVFbnRyeUV4cG9ydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEZFREVSQVRJT05fQUxMT1dfTkVXX0ZVTkNUSU9OICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRnVuY3Rpb24oJ2NhbGxiYWNrcycsICdpbXBvcnQoXCInLmNvbmNhdChlbnRyeSwgJ1wiKScpLmNvbmNhdChpbXBvcnRDYWxsYmFjaykpKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi8gLyogQHZpdGUtaWdub3JlICovIGVudHJ5KS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlbW90ZUVudHJ5RXhwb3J0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2xvYWRFc21FbnRyeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gbG9hZFN5c3RlbUpzRW50cnkoXykge1xuICAgIHJldHVybiBfbG9hZFN5c3RlbUpzRW50cnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9sb2FkU3lzdGVtSnNFbnRyeSgpIHtcbiAgICBfbG9hZFN5c3RlbUpzRW50cnkgPSBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICAgIHZhciBlbnRyeSwgcmVtb3RlRW50cnlFeHBvcnRzO1xuICAgICAgICByZXR1cm4gX3RzX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfc3RhdGUpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gcGFyYW0uZW50cnksIHJlbW90ZUVudHJ5RXhwb3J0cyA9IHBhcmFtLnJlbW90ZUVudHJ5RXhwb3J0cztcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVtb3RlRW50cnlFeHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfX3N5c3RlbV9jb250ZXh0X18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTeXN0ZW0uaW1wb3J0KGVudHJ5KS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEZ1bmN0aW9uKCdjYWxsYmFja3MnLCAnU3lzdGVtLmltcG9ydChcIicuY29uY2F0KGVudHJ5LCAnXCIpJykuY29uY2F0KGltcG9ydENhbGxiYWNrKSkoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVtb3RlRW50cnlFeHBvcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBfbG9hZFN5c3RlbUpzRW50cnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVJlbW90ZUVudHJ5TG9hZGVkKG5hbWUsIGdsb2JhbE5hbWUsIGVudHJ5KSB7XG4gICAgdmFyIF9nZXRSZW1vdGVFbnRyeUV4cG9ydHMgPSBnZXRSZW1vdGVFbnRyeUV4cG9ydHMobmFtZSwgZ2xvYmFsTmFtZSksIHJlbW90ZUVudHJ5S2V5ID0gX2dldFJlbW90ZUVudHJ5RXhwb3J0cy5yZW1vdGVFbnRyeUtleSwgZW50cnlFeHBvcnRzID0gX2dldFJlbW90ZUVudHJ5RXhwb3J0cy5lbnRyeUV4cG9ydHM7XG4gICAgYXNzZXJ0KGVudHJ5RXhwb3J0cywgZXJyb3JDb2Rlcy5nZXRTaG9ydEVycm9yTXNnKGVycm9yQ29kZXMuUlVOVElNRV8wMDEsIGVycm9yQ29kZXMucnVudGltZURlc2NNYXAsIHtcbiAgICAgICAgcmVtb3RlTmFtZTogbmFtZSxcbiAgICAgICAgcmVtb3RlRW50cnlVcmw6IGVudHJ5LFxuICAgICAgICByZW1vdGVFbnRyeUtleTogcmVtb3RlRW50cnlLZXlcbiAgICB9KSk7XG4gICAgcmV0dXJuIGVudHJ5RXhwb3J0cztcbn1cbmZ1bmN0aW9uIGxvYWRFbnRyeVNjcmlwdChfKSB7XG4gICAgcmV0dXJuIF9sb2FkRW50cnlTY3JpcHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9sb2FkRW50cnlTY3JpcHQoKSB7XG4gICAgX2xvYWRFbnRyeVNjcmlwdCA9IF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgICAgdmFyIG5hbWUsIGdsb2JhbE5hbWUsIGVudHJ5LCBsb2FkZXJIb29rLCBfZ2V0UmVtb3RlRW50cnlFeHBvcnRzLCByZW1vdGVFbnRyeUV4cG9ydHM7XG4gICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgbmFtZSA9IHBhcmFtLm5hbWUsIGdsb2JhbE5hbWUgPSBwYXJhbS5nbG9iYWxOYW1lLCBlbnRyeSA9IHBhcmFtLmVudHJ5LCBsb2FkZXJIb29rID0gcGFyYW0ubG9hZGVySG9vaztcbiAgICAgICAgICAgIF9nZXRSZW1vdGVFbnRyeUV4cG9ydHMgPSBnZXRSZW1vdGVFbnRyeUV4cG9ydHMobmFtZSwgZ2xvYmFsTmFtZSksIHJlbW90ZUVudHJ5RXhwb3J0cyA9IF9nZXRSZW1vdGVFbnRyeUV4cG9ydHMuZW50cnlFeHBvcnRzO1xuICAgICAgICAgICAgaWYgKHJlbW90ZUVudHJ5RXhwb3J0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0c1xuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgc2RrLmxvYWRTY3JpcHQoZW50cnksIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTY3JpcHRIb29rOiBmdW5jdGlvbih1cmwsIGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzID0gbG9hZGVySG9vay5saWZlY3ljbGUuY3JlYXRlU2NyaXB0LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiBhdHRyc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pbnN0YW5jZW9mKHJlcywgSFRNTFNjcmlwdEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnc2NyaXB0JyBpbiByZXMgfHwgJ3RpbWVvdXQnIGluIHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlUmVtb3RlRW50cnlMb2FkZWQobmFtZSwgZ2xvYmFsTmFtZSwgZW50cnkpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0KHVuZGVmaW5lZCwgZXJyb3JDb2Rlcy5nZXRTaG9ydEVycm9yTXNnKGVycm9yQ29kZXMuUlVOVElNRV8wMDgsIGVycm9yQ29kZXMucnVudGltZURlc2NNYXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVVybDogZW50cnlcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2xvYWRFbnRyeVNjcmlwdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gbG9hZEVudHJ5RG9tKF8pIHtcbiAgICByZXR1cm4gX2xvYWRFbnRyeURvbS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2xvYWRFbnRyeURvbSgpIHtcbiAgICBfbG9hZEVudHJ5RG9tID0gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbihwYXJhbSkge1xuICAgICAgICB2YXIgcmVtb3RlSW5mbywgcmVtb3RlRW50cnlFeHBvcnRzLCBsb2FkZXJIb29rLCBlbnRyeSwgZ2xvYmFsTmFtZSwgbmFtZSwgdHlwZTtcbiAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICByZW1vdGVJbmZvID0gcGFyYW0ucmVtb3RlSW5mbywgcmVtb3RlRW50cnlFeHBvcnRzID0gcGFyYW0ucmVtb3RlRW50cnlFeHBvcnRzLCBsb2FkZXJIb29rID0gcGFyYW0ubG9hZGVySG9vaztcbiAgICAgICAgICAgIGVudHJ5ID0gcmVtb3RlSW5mby5lbnRyeSwgZ2xvYmFsTmFtZSA9IHJlbW90ZUluZm8uZW50cnlHbG9iYWxOYW1lLCBuYW1lID0gcmVtb3RlSW5mby5uYW1lLCB0eXBlID0gcmVtb3RlSW5mby50eXBlO1xuICAgICAgICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgJ2VzbSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnbW9kdWxlJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkRXNtRW50cnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5OiBlbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHM6IHJlbW90ZUVudHJ5RXhwb3J0c1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjYXNlICdzeXN0ZW0nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRTeXN0ZW1Kc0VudHJ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeTogZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzOiByZW1vdGVFbnRyeUV4cG9ydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkRW50cnlTY3JpcHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5OiBlbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxOYW1lOiBnbG9iYWxOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVySG9vazogbG9hZGVySG9va1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIF9sb2FkRW50cnlEb20uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGxvYWRFbnRyeU5vZGUoXykge1xuICAgIHJldHVybiBfbG9hZEVudHJ5Tm9kZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2xvYWRFbnRyeU5vZGUoKSB7XG4gICAgX2xvYWRFbnRyeU5vZGUgPSBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICAgIHZhciByZW1vdGVJbmZvLCBsb2FkZXJIb29rLCBlbnRyeSwgZ2xvYmFsTmFtZSwgbmFtZSwgdHlwZSwgX2dldFJlbW90ZUVudHJ5RXhwb3J0cywgcmVtb3RlRW50cnlFeHBvcnRzO1xuICAgICAgICByZXR1cm4gX3RzX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfc3RhdGUpIHtcbiAgICAgICAgICAgIHJlbW90ZUluZm8gPSBwYXJhbS5yZW1vdGVJbmZvLCBsb2FkZXJIb29rID0gcGFyYW0ubG9hZGVySG9vaztcbiAgICAgICAgICAgIGVudHJ5ID0gcmVtb3RlSW5mby5lbnRyeSwgZ2xvYmFsTmFtZSA9IHJlbW90ZUluZm8uZW50cnlHbG9iYWxOYW1lLCBuYW1lID0gcmVtb3RlSW5mby5uYW1lLCB0eXBlID0gcmVtb3RlSW5mby50eXBlO1xuICAgICAgICAgICAgX2dldFJlbW90ZUVudHJ5RXhwb3J0cyA9IGdldFJlbW90ZUVudHJ5RXhwb3J0cyhuYW1lLCBnbG9iYWxOYW1lKSwgcmVtb3RlRW50cnlFeHBvcnRzID0gX2dldFJlbW90ZUVudHJ5RXhwb3J0cy5lbnRyeUV4cG9ydHM7XG4gICAgICAgICAgICBpZiAocmVtb3RlRW50cnlFeHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICBzZGsubG9hZFNjcmlwdE5vZGUoZW50cnksIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxOYW1lOiBnbG9iYWxOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsb2FkZXJIb29rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTY3JpcHRIb29rOiBmdW5jdGlvbih1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBsb2FkZXJIb29rLmxpZmVjeWNsZS5jcmVhdGVTY3JpcHQuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgndXJsJyBpbiByZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVJlbW90ZUVudHJ5TG9hZGVkKG5hbWUsIGdsb2JhbE5hbWUsIGVudHJ5KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBfbG9hZEVudHJ5Tm9kZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gZ2V0UmVtb3RlRW50cnlVbmlxdWVLZXkocmVtb3RlSW5mbykge1xuICAgIHZhciBlbnRyeSA9IHJlbW90ZUluZm8uZW50cnksIG5hbWUgPSByZW1vdGVJbmZvLm5hbWU7XG4gICAgcmV0dXJuIHNkay5jb21wb3NlS2V5V2l0aFNlcGFyYXRvcihuYW1lLCBlbnRyeSk7XG59XG5mdW5jdGlvbiBnZXRSZW1vdGVFbnRyeShfKSB7XG4gICAgcmV0dXJuIF9nZXRSZW1vdGVFbnRyeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2dldFJlbW90ZUVudHJ5KCkge1xuICAgIF9nZXRSZW1vdGVFbnRyeSA9IF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgICAgdmFyIG9yaWdpbiwgcmVtb3RlRW50cnlFeHBvcnRzLCByZW1vdGVJbmZvLCB1bmlxdWVLZXksIGxvYWRFbnRyeUhvb2ssIGxvYWRlckhvb2s7XG4gICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgb3JpZ2luID0gcGFyYW0ub3JpZ2luLCByZW1vdGVFbnRyeUV4cG9ydHMgPSBwYXJhbS5yZW1vdGVFbnRyeUV4cG9ydHMsIHJlbW90ZUluZm8gPSBwYXJhbS5yZW1vdGVJbmZvO1xuICAgICAgICAgICAgdW5pcXVlS2V5ID0gZ2V0UmVtb3RlRW50cnlVbmlxdWVLZXkocmVtb3RlSW5mbyk7XG4gICAgICAgICAgICBpZiAocmVtb3RlRW50cnlFeHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZ2xvYmFsTG9hZGluZ1t1bmlxdWVLZXldKSB7XG4gICAgICAgICAgICAgICAgbG9hZEVudHJ5SG9vayA9IG9yaWdpbi5yZW1vdGVIYW5kbGVyLmhvb2tzLmxpZmVjeWNsZS5sb2FkRW50cnk7XG4gICAgICAgICAgICAgICAgbG9hZGVySG9vayA9IG9yaWdpbi5sb2FkZXJIb29rO1xuICAgICAgICAgICAgICAgIGdsb2JhbExvYWRpbmdbdW5pcXVlS2V5XSA9IGxvYWRFbnRyeUhvb2suZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlckhvb2s6IGxvYWRlckhvb2ssXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUluZm86IHJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0czogcmVtb3RlRW50cnlFeHBvcnRzXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgRU5WX1RBUkdFVCBpZiBkZWZpbmVkLCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gaXNCcm93c2VyRW52LCBtdXN0IGtlZXAgdGhpc1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNXZWJFbnZpcm9ubWVudCA9IHR5cGVvZiBFTlZfVEFSR0VUICE9PSAndW5kZWZpbmVkJyA/IEVOVl9UQVJHRVQgPT09ICd3ZWInIDogc2RrLmlzQnJvd3NlckVudigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNXZWJFbnZpcm9ubWVudCA/IGxvYWRFbnRyeURvbSh7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVJbmZvOiByZW1vdGVJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzOiByZW1vdGVFbnRyeUV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXJIb29rOiBsb2FkZXJIb29rXG4gICAgICAgICAgICAgICAgICAgIH0pIDogbG9hZEVudHJ5Tm9kZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVJbmZvOiByZW1vdGVJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVySG9vazogbG9hZGVySG9va1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICBnbG9iYWxMb2FkaW5nW3VuaXF1ZUtleV1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBfZ2V0UmVtb3RlRW50cnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGdldFJlbW90ZUluZm8ocmVtb3RlKSB7XG4gICAgcmV0dXJuIHBvbHlmaWxscy5fZXh0ZW5kcyh7fSwgcmVtb3RlLCB7XG4gICAgICAgIGVudHJ5OiAnZW50cnknIGluIHJlbW90ZSA/IHJlbW90ZS5lbnRyeSA6ICcnLFxuICAgICAgICB0eXBlOiByZW1vdGUudHlwZSB8fCBERUZBVUxUX1JFTU9URV9UWVBFLFxuICAgICAgICBlbnRyeUdsb2JhbE5hbWU6IHJlbW90ZS5lbnRyeUdsb2JhbE5hbWUgfHwgcmVtb3RlLm5hbWUsXG4gICAgICAgIHNoYXJlU2NvcGU6IHJlbW90ZS5zaGFyZVNjb3BlIHx8IERFRkFVTFRfU0NPUEVcbiAgICB9KTtcbn1cbnZhciBNb2R1bGUgPSAvKiNfX1BVUkVfXyovIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIE1vZHVsZShwYXJhbSkge1xuICAgICAgICB2YXIgcmVtb3RlSW5mbyA9IHBhcmFtLnJlbW90ZUluZm8sIGhvc3QgPSBwYXJhbS5ob3N0O1xuICAgICAgICBfY2xhc3NfY2FsbF9jaGVjayh0aGlzLCBNb2R1bGUpO1xuICAgICAgICB0aGlzLmluaXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpYiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZW1vdGVJbmZvID0gcmVtb3RlSW5mbztcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICB9XG4gICAgX2NyZWF0ZV9jbGFzcyhNb2R1bGUsIFtcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImdldEVudHJ5XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RW50cnkoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW90ZUVudHJ5RXhwb3J0cywgZXJyLCB1bmlxdWVLZXk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKF9zdGF0ZS5sYWJlbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucmVtb3RlRW50cnlFeHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVtb3RlRW50cnlFeHBvcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdGF0ZS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUudHJ5cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRSZW1vdGVFbnRyeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBfdGhpcy5ob3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUluZm86IF90aGlzLnJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzOiBfdGhpcy5yZW1vdGVFbnRyeUV4cG9ydHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHMgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUtleSA9IGdldFJlbW90ZUVudHJ5VW5pcXVlS2V5KF90aGlzLnJlbW90ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhvc3QubG9hZGVySG9vay5saWZlY3ljbGUubG9hZEVudHJ5RXJyb3IuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmVtb3RlRW50cnk6IGdldFJlbW90ZUVudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogX3RoaXMuaG9zdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVJbmZvOiBfdGhpcy5yZW1vdGVJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0czogX3RoaXMucmVtb3RlRW50cnlFeHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbExvYWRpbmc6IGdsb2JhbExvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlS2V5OiB1bmlxdWVLZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHMgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydChyZW1vdGVFbnRyeUV4cG9ydHMsIFwicmVtb3RlRW50cnlFeHBvcnRzIGlzIHVuZGVmaW5lZCBcXG4gXCIuY29uY2F0KHNkay5zYWZlVG9TdHJpbmcoX3RoaXMucmVtb3RlSW5mbykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVtb3RlRW50cnlFeHBvcnRzID0gcmVtb3RlRW50cnlFeHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlbW90ZUVudHJ5RXhwb3J0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZ2V0XCIsXG4gICAgICAgICAgICB2YWx1ZTogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldChpZCwgZXhwb3NlLCBvcHRpb25zLCByZW1vdGVTbmFwc2hvdCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfcmVmLCBfcmVmX2xvYWRGYWN0b3J5LCBsb2FkRmFjdG9yeSwgcmVtb3RlRW50cnlFeHBvcnRzLCBsb2NhbFNoYXJlU2NvcGVNYXAsIHNoYXJlU2NvcGVLZXlzLCBzaGFyZVNjb3BlLCBpbml0U2NvcGUsIHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMsIGluaXRDb250YWluZXJPcHRpb25zLCBtb2R1bGVGYWN0b3J5LCBzeW1ib2xOYW1lLCB3cmFwTW9kdWxlRmFjdG9yeSwgZXhwb3NlQ29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBvcHRpb25zIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRGYWN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9yZWZfbG9hZEZhY3RvcnkgPSBfcmVmLmxvYWRGYWN0b3J5LCBsb2FkRmFjdG9yeSA9IF9yZWZfbG9hZEZhY3RvcnkgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmX2xvYWRGYWN0b3J5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldEVudHJ5KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0cyA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIV90aGlzLmluaXRlZCkgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU2hhcmVTY29wZU1hcCA9IF90aGlzLmhvc3Quc2hhcmVTY29wZU1hcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZUtleXMgPSBBcnJheS5pc0FycmF5KF90aGlzLnJlbW90ZUluZm8uc2hhcmVTY29wZSkgPyBfdGhpcy5yZW1vdGVJbmZvLnNoYXJlU2NvcGUgOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdGVJbmZvLnNoYXJlU2NvcGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGFyZVNjb3BlS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGVLZXlzLnB1c2goJ2RlZmF1bHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVNjb3BlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKHNoYXJlU2NvcGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbG9jYWxTaGFyZVNjb3BlTWFwW3NoYXJlU2NvcGVLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTaGFyZVNjb3BlTWFwW3NoYXJlU2NvcGVLZXldID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBjb21wYXRlIGxlZ2FjeSBpbml0IHBhcmFtcywgc2hvdWxkIHVzZSBzaGFyZVNjb3BlTWFwIGlmIGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGUgPSBsb2NhbFNoYXJlU2NvcGVNYXBbc2hhcmVTY29wZUtleXNbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0U2NvcGUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlJbml0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246IF90aGlzLnJlbW90ZUluZm8udmVyc2lvbiB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGVLZXlzOiBBcnJheS5pc0FycmF5KF90aGlzLnJlbW90ZUluZm8uc2hhcmVTY29wZSkgPyBzaGFyZVNjb3BlS2V5cyA6IF90aGlzLnJlbW90ZUluZm8uc2hhcmVTY29wZSB8fCAnZGVmYXVsdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGVscCB0byBmaW5kIGhvc3QgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMsICdzaGFyZVNjb3BlTWFwJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGxvY2FsU2hhcmVTY29wZU1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMgd2lsbCBiZSB0cmF2ZXJzZWQgYW5kIGFzc2lnbmVkIGR1cmluZyBjb250YWluZXIgaW5pdCwgLHNvIHRoaXMgYXR0cmlidXRlIGlzIG5vdCBhbGxvd2VkIHRvIGJlIHRyYXZlcnNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaG9zdC5ob29rcy5saWZlY3ljbGUuYmVmb3JlSW5pdENvbnRhaW5lci5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVNjb3BlOiBzaGFyZVNjb3BlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgc2hhcmVTY29wZU1hcCB3aWxsIGJlIHNldCBieSBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUluaXRPcHRpb25zOiByZW1vdGVFbnRyeUluaXRPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRTY29wZTogaW5pdFNjb3BlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUluZm86IF90aGlzLnJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBfdGhpcy5ob3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdENvbnRhaW5lck9wdGlvbnMgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChyZW1vdGVFbnRyeUV4cG9ydHMgPT0gbnVsbCA/IHZvaWQgMCA6IHJlbW90ZUVudHJ5RXhwb3J0cy5pbml0KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKGVycm9yQ29kZXMuZ2V0U2hvcnRFcnJvck1zZyhlcnJvckNvZGVzLlJVTlRJTUVfMDAyLCBlcnJvckNvZGVzLnJ1bnRpbWVEZXNjTWFwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdE5hbWU6IF90aGlzLmhvc3QubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVOYW1lOiBfdGhpcy5yZW1vdGVJbmZvLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlVcmw6IF90aGlzLnJlbW90ZUluZm8uZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlLZXk6IF90aGlzLnJlbW90ZUluZm8uZW50cnlHbG9iYWxOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHMuaW5pdChpbml0Q29udGFpbmVyT3B0aW9ucy5zaGFyZVNjb3BlLCBpbml0Q29udGFpbmVyT3B0aW9ucy5pbml0U2NvcGUsIGluaXRDb250YWluZXJPcHRpb25zLnJlbW90ZUVudHJ5SW5pdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhvc3QuaG9va3MubGlmZWN5Y2xlLmluaXRDb250YWluZXIuZW1pdChwb2x5ZmlsbHMuX2V4dGVuZHMoe30sIGluaXRDb250YWluZXJPcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90OiByZW1vdGVTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHM6IHJlbW90ZUVudHJ5RXhwb3J0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubGliID0gcmVtb3RlRW50cnlFeHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhvc3QubG9hZGVySG9vay5saWZlY3ljbGUuZ2V0TW9kdWxlRmFjdG9yeS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHM6IHJlbW90ZUVudHJ5RXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvc2U6IGV4cG9zZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVJbmZvOiBfdGhpcy5yZW1vdGVJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlRmFjdG9yeSA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIW1vZHVsZUZhY3RvcnkpIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0cy5nZXQoZXhwb3NlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlRmFjdG9yeSA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdGF0ZS5sYWJlbCA9IDg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQobW9kdWxlRmFjdG9yeSwgXCJcIi5jb25jYXQoZ2V0Rk1JZChfdGhpcy5yZW1vdGVJbmZvKSwgXCIgcmVtb3RlIGRvbid0IGV4cG9ydCBcIikuY29uY2F0KGV4cG9zZSwgXCIuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBzeW1ib2wgZm9yIG1vZHVsZSBuYW1lIGFsd2F5cyBvbmUgZm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbE5hbWUgPSBwcm9jZXNzTW9kdWxlQWxpYXMoX3RoaXMucmVtb3RlSW5mby5uYW1lLCBleHBvc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwTW9kdWxlRmFjdG9yeSA9IF90aGlzLndyYXBlckZhY3RvcnkobW9kdWxlRmFjdG9yeSwgc3ltYm9sTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbG9hZEZhY3RvcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwTW9kdWxlRmFjdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBNb2R1bGVGYWN0b3J5KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zZUNvbnRlbnQgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zZUNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcIndyYXBlckZhY3RvcnlcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3cmFwZXJGYWN0b3J5KG1vZHVsZUZhY3RvcnksIGlkKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVmaW5lTW9kdWxlSWQocmVzLCBpZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzICYmICh0eXBlb2YgcmVzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlX29mKHJlcykpID09PSAnb2JqZWN0JyAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHJlcykgJiYgIU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocmVzLCBTeW1ib2wuZm9yKCdtZl9tb2R1bGVfaWQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXMsIFN5bWJvbC5mb3IoJ21mX21vZHVsZV9pZCcpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX2luc3RhbmNlb2YobW9kdWxlRmFjdG9yeSwgUHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RzX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUZhY3RvcnkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGlzIHVzZWQgZm9yIGJyaWRnZSBkZWJ1Z2dpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZU1vZHVsZUlkKHJlcywgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IG1vZHVsZUZhY3RvcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGlzIHVzZWQgZm9yIGJyaWRnZSBkZWJ1Z2dpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluZU1vZHVsZUlkKHJlcywgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKTtcbiAgICByZXR1cm4gTW9kdWxlO1xufSgpO1xudmFyIFN5bmNIb29rID0gLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBTeW5jSG9vayh0eXBlKSB7XG4gICAgICAgIF9jbGFzc19jYWxsX2NoZWNrKHRoaXMsIFN5bmNIb29rKTtcbiAgICAgICAgdGhpcy50eXBlID0gJyc7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfY3JlYXRlX2NsYXNzKFN5bmNIb29rLCBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJvblwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGZuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5hZGQoZm4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcIm9uY2VcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMub24oZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZSh3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZW1pdFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGF0YSA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICAgICAgICAgICAgICBkYXRhW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBmbi5hcHBseSh2b2lkIDAsIF90b19jb25zdW1hYmxlX2FycmF5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJyZW1vdmVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoZm4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5kZWxldGUoZm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwicmVtb3ZlQWxsXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlQWxsKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKTtcbiAgICByZXR1cm4gU3luY0hvb2s7XG59KCk7XG52YXIgQXN5bmNIb29rID0gLyojX19QVVJFX18qLyBmdW5jdGlvbihTeW5jSG9vaykge1xuICAgIF9pbmhlcml0cyhBc3luY0hvb2ssIFN5bmNIb29rKTtcbiAgICBmdW5jdGlvbiBBc3luY0hvb2soKSB7XG4gICAgICAgIF9jbGFzc19jYWxsX2NoZWNrKHRoaXMsIEFzeW5jSG9vayk7XG4gICAgICAgIHJldHVybiBfY2FsbF9zdXBlcih0aGlzLCBBc3luY0hvb2ssIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIF9jcmVhdGVfY2xhc3MoQXN5bmNIb29rLCBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJlbWl0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdCgpIHtcbiAgICAgICAgICAgICAgICBmb3IodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBkYXRhID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICAgICAgdmFyIGxzID0gQXJyYXkuZnJvbSh0aGlzLmxpc3RlbmVycyk7XG4gICAgICAgICAgICAgICAgaWYgKGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbCA9IGZ1bmN0aW9uKHByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gQWJvcnQgcHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsc1tpKytdLmFwcGx5KG51bGwsIGRhdGEpKS50aGVuKGNhbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKTtcbiAgICByZXR1cm4gQXN5bmNIb29rO1xufShTeW5jSG9vayk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZnVuY3Rpb24gY2hlY2tSZXR1cm5EYXRhKG9yaWdpbmFsRGF0YSwgcmV0dXJuZWREYXRhKSB7XG4gICAgaWYgKCFpc09iamVjdChyZXR1cm5lZERhdGEpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9yaWdpbmFsRGF0YSAhPT0gcmV0dXJuZWREYXRhKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICBmb3IodmFyIGtleSBpbiBvcmlnaW5hbERhdGEpe1xuICAgICAgICAgICAgaWYgKCEoa2V5IGluIHJldHVybmVkRGF0YSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG52YXIgU3luY1dhdGVyZmFsbEhvb2sgPSAvKiNfX1BVUkVfXyovIGZ1bmN0aW9uKFN5bmNIb29rKSB7XG4gICAgX2luaGVyaXRzKFN5bmNXYXRlcmZhbGxIb29rLCBTeW5jSG9vayk7XG4gICAgZnVuY3Rpb24gU3luY1dhdGVyZmFsbEhvb2sodHlwZSkge1xuICAgICAgICBfY2xhc3NfY2FsbF9jaGVjayh0aGlzLCBTeW5jV2F0ZXJmYWxsSG9vayk7XG4gICAgICAgIHZhciBfdGhpcztcbiAgICAgICAgX3RoaXMgPSBfY2FsbF9zdXBlcih0aGlzLCBTeW5jV2F0ZXJmYWxsSG9vayksIF90aGlzLm9uZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgX3RoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgX2NyZWF0ZV9jbGFzcyhTeW5jV2F0ZXJmYWxsSG9vaywgW1xuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZW1pdFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ1RoZSBkYXRhIGZvciB0aGUgXCInLmNvbmNhdCh0aGlzLnR5cGUsICdcIiBob29rIHNob3VsZCBiZSBhbiBvYmplY3QuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2UsIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgX2l0ZXJhdG9yID0gdGhpcy5saXN0ZW5lcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGEgPSBmbihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tSZXR1cm5EYXRhKGRhdGEsIHRlbXBEYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gdGVtcERhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmVycm9yKCdBIHBsdWdpbiByZXR1cm5lZCBhbiB1bmFjY2VwdGFibGUgdmFsdWUgZm9yIHRoZSBcIicuY29uY2F0KHRoaXMudHlwZSwgJ1wiIHR5cGUuJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FybihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0pO1xuICAgIHJldHVybiBTeW5jV2F0ZXJmYWxsSG9vaztcbn0oU3luY0hvb2spO1xudmFyIEFzeW5jV2F0ZXJmYWxsSG9vayA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24oU3luY0hvb2spIHtcbiAgICBfaW5oZXJpdHMoQXN5bmNXYXRlcmZhbGxIb29rLCBTeW5jSG9vayk7XG4gICAgZnVuY3Rpb24gQXN5bmNXYXRlcmZhbGxIb29rKHR5cGUpIHtcbiAgICAgICAgX2NsYXNzX2NhbGxfY2hlY2sodGhpcywgQXN5bmNXYXRlcmZhbGxIb29rKTtcbiAgICAgICAgdmFyIF90aGlzO1xuICAgICAgICBfdGhpcyA9IF9jYWxsX3N1cGVyKHRoaXMsIEFzeW5jV2F0ZXJmYWxsSG9vayksIF90aGlzLm9uZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgX3RoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgX2NyZWF0ZV9jbGFzcyhBc3luY1dhdGVyZmFsbEhvb2ssIFtcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImVtaXRcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbWl0KGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ1RoZSByZXNwb25zZSBkYXRhIGZvciB0aGUgXCInLmNvbmNhdCh0aGlzLnR5cGUsICdcIiBob29rIG11c3QgYmUgYW4gb2JqZWN0LicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxzID0gQXJyYXkuZnJvbSh0aGlzLmxpc3RlbmVycyk7XG4gICAgICAgICAgICAgICAgaWYgKGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc0Vycm9yID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2FybihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGwgPSBmdW5jdGlvbihwcmV2RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrUmV0dXJuRGF0YShkYXRhLCBwcmV2RGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gcHJldkRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBscy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobHNbaSsrXShkYXRhKSkudGhlbihjYWxsLCBwcm9jZXNzRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzc0Vycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbmVycm9yKCdBIHBsdWdpbiByZXR1cm5lZCBhbiBpbmNvcnJlY3QgdmFsdWUgZm9yIHRoZSBcIicuY29uY2F0KF90aGlzLnR5cGUsICdcIiB0eXBlLicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhbGwoZGF0YSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSk7XG4gICAgcmV0dXJuIEFzeW5jV2F0ZXJmYWxsSG9vaztcbn0oU3luY0hvb2spO1xudmFyIFBsdWdpblN5c3RlbSA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gUGx1Z2luU3lzdGVtKGxpZmVjeWNsZSkge1xuICAgICAgICBfY2xhc3NfY2FsbF9jaGVjayh0aGlzLCBQbHVnaW5TeXN0ZW0pO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUGx1Z2lucyA9IHt9O1xuICAgICAgICB0aGlzLmxpZmVjeWNsZSA9IGxpZmVjeWNsZTtcbiAgICAgICAgdGhpcy5saWZlY3ljbGVLZXlzID0gT2JqZWN0LmtleXMobGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgX2NyZWF0ZV9jbGFzcyhQbHVnaW5TeXN0ZW0sIFtcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImFwcGx5UGx1Z2luXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXBwbHlQbHVnaW4ocGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICBhc3NlcnQoaXNQbGFpbk9iamVjdChwbHVnaW4pLCAnUGx1Z2luIGNvbmZpZ3VyYXRpb24gaXMgaW52YWxpZC4nKTtcbiAgICAgICAgICAgICAgICAvLyBUaGUgcGx1Z2luJ3MgbmFtZSBpcyBtYW5kYXRvcnkgYW5kIG11c3QgYmUgdW5pcXVlXG4gICAgICAgICAgICAgICAgdmFyIHBsdWdpbk5hbWUgPSBwbHVnaW4ubmFtZTtcbiAgICAgICAgICAgICAgICBhc3NlcnQocGx1Z2luTmFtZSwgJ0EgbmFtZSBtdXN0IGJlIHByb3ZpZGVkIGJ5IHRoZSBwbHVnaW4uJyk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnJlZ2lzdGVyUGx1Z2luc1twbHVnaW5OYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyUGx1Z2luc1twbHVnaW5OYW1lXSA9IHBsdWdpbjtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5saWZlY3ljbGUpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGx1Z2luTGlmZSA9IHBsdWdpbltrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsdWdpbkxpZmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5saWZlY3ljbGVba2V5XS5vbihwbHVnaW5MaWZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwicmVtb3ZlUGx1Z2luXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGFzc2VydChwbHVnaW5OYW1lLCAnQSBuYW1lIGlzIHJlcXVpcmVkLicpO1xuICAgICAgICAgICAgICAgIHZhciBwbHVnaW4gPSB0aGlzLnJlZ2lzdGVyUGx1Z2luc1twbHVnaW5OYW1lXTtcbiAgICAgICAgICAgICAgICBhc3NlcnQocGx1Z2luLCAnVGhlIHBsdWdpbiBcIicuY29uY2F0KHBsdWdpbk5hbWUsICdcIiBpcyBub3QgcmVnaXN0ZXJlZC4nKSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGx1Z2luKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnbmFtZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxpZmVjeWNsZVtrZXldLnJlbW92ZShwbHVnaW5ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1zaGFkb3dcbiAgICAgICAgICAgIGtleTogXCJpbmhlcml0XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5oZXJpdChwYXJhbSkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGxpZmVjeWNsZSA9IHBhcmFtLmxpZmVjeWNsZSwgcmVnaXN0ZXJQbHVnaW5zID0gcGFyYW0ucmVnaXN0ZXJQbHVnaW5zO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpZmVjeWNsZSkuZm9yRWFjaChmdW5jdGlvbihob29rTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoIV90aGlzLmxpZmVjeWNsZVtob29rTmFtZV0sICdUaGUgaG9vayBcIicuY29uY2F0KGhvb2tOYW1lLCAnXCIgaGFzIGEgY29uZmxpY3QgYW5kIGNhbm5vdCBiZSBpbmhlcml0ZWQuJykpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5saWZlY3ljbGVbaG9va05hbWVdID0gbGlmZWN5Y2xlW2hvb2tOYW1lXTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhyZWdpc3RlclBsdWdpbnMpLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoIV90aGlzLnJlZ2lzdGVyUGx1Z2luc1twbHVnaW5OYW1lXSwgJ1RoZSBwbHVnaW4gXCInLmNvbmNhdChwbHVnaW5OYW1lLCAnXCIgaGFzIGEgY29uZmxpY3QgYW5kIGNhbm5vdCBiZSBpbmhlcml0ZWQuJykpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hcHBseVBsdWdpbihyZWdpc3RlclBsdWdpbnNbcGx1Z2luTmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSk7XG4gICAgcmV0dXJuIFBsdWdpblN5c3RlbTtcbn0oKTtcbmZ1bmN0aW9uIGRlZmF1bHRQcmVsb2FkQXJncyhwcmVsb2FkQ29uZmlnKSB7XG4gICAgcmV0dXJuIHBvbHlmaWxscy5fZXh0ZW5kcyh7XG4gICAgICAgIHJlc291cmNlQ2F0ZWdvcnk6ICdzeW5jJyxcbiAgICAgICAgc2hhcmU6IHRydWUsXG4gICAgICAgIGRlcHNSZW1vdGU6IHRydWUsXG4gICAgICAgIHByZWZldGNoSW50ZXJmYWNlOiBmYWxzZVxuICAgIH0sIHByZWxvYWRDb25maWcpO1xufVxuZnVuY3Rpb24gZm9ybWF0UHJlbG9hZEFyZ3MocmVtb3RlcywgcHJlbG9hZEFyZ3MpIHtcbiAgICByZXR1cm4gcHJlbG9hZEFyZ3MubWFwKGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgdmFyIHJlbW90ZUluZm8gPSBtYXRjaFJlbW90ZShyZW1vdGVzLCBhcmdzLm5hbWVPckFsaWFzKTtcbiAgICAgICAgYXNzZXJ0KHJlbW90ZUluZm8sIFwiVW5hYmxlIHRvIHByZWxvYWQgXCIuY29uY2F0KGFyZ3MubmFtZU9yQWxpYXMsIFwiIGFzIGl0IGlzIG5vdCBpbmNsdWRlZCBpbiBcIikuY29uY2F0KCFyZW1vdGVJbmZvICYmIHNkay5zYWZlVG9TdHJpbmcoe1xuICAgICAgICAgICAgcmVtb3RlSW5mbzogcmVtb3RlSW5mbyxcbiAgICAgICAgICAgIHJlbW90ZXM6IHJlbW90ZXNcbiAgICAgICAgfSkpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlbW90ZTogcmVtb3RlSW5mbyxcbiAgICAgICAgICAgIHByZWxvYWRDb25maWc6IGRlZmF1bHRQcmVsb2FkQXJncyhhcmdzKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUHJlbG9hZEV4cG9zZXMoZXhwb3Nlcykge1xuICAgIGlmICghZXhwb3Nlcykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBleHBvc2VzLm1hcChmdW5jdGlvbihleHBvc2UpIHtcbiAgICAgICAgaWYgKGV4cG9zZSA9PT0gJy4nKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3NlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChleHBvc2Uuc3RhcnRzV2l0aCgnLi8nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cG9zZS5yZXBsYWNlKCcuLycsICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwb3NlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcHJlbG9hZEFzc2V0cyhyZW1vdGVJbmZvLCBob3N0LCBhc3NldHMpIHtcbiAgICB2YXIgdXNlTGlua1ByZWxvYWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1szXSA6IHRydWU7XG4gICAgdmFyIGNzc0Fzc2V0cyA9IGFzc2V0cy5jc3NBc3NldHMsIGpzQXNzZXRzV2l0aG91dEVudHJ5ID0gYXNzZXRzLmpzQXNzZXRzV2l0aG91dEVudHJ5LCBlbnRyeUFzc2V0cyA9IGFzc2V0cy5lbnRyeUFzc2V0cztcbiAgICBpZiAoaG9zdC5vcHRpb25zLmluQnJvd3Nlcikge1xuICAgICAgICBlbnRyeUFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgICAgICAgICB2YXIgbW9kdWxlSW5mbyA9IGFzc2V0Lm1vZHVsZUluZm87XG4gICAgICAgICAgICB2YXIgbW9kdWxlID0gaG9zdC5tb2R1bGVDYWNoZS5nZXQocmVtb3RlSW5mby5uYW1lKTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBnZXRSZW1vdGVFbnRyeSh7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdCxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlSW5mbzogbW9kdWxlSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzOiBtb2R1bGUucmVtb3RlRW50cnlFeHBvcnRzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdldFJlbW90ZUVudHJ5KHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0LFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVJbmZvOiBtb2R1bGVJbmZvLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHM6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVzZUxpbmtQcmVsb2FkKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdEF0dHJzID0ge1xuICAgICAgICAgICAgICAgIHJlbDogJ3ByZWxvYWQnLFxuICAgICAgICAgICAgICAgIGFzOiAnc3R5bGUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY3NzQXNzZXRzLmZvckVhY2goZnVuY3Rpb24oY3NzVXJsKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9zZGtfY3JlYXRlTGluayA9IHNkay5jcmVhdGVMaW5rKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjc3NVcmwsXG4gICAgICAgICAgICAgICAgICAgIGNiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogZGVmYXVsdEF0dHJzLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVMaW5rSG9vazogZnVuY3Rpb24odXJsLCBhdHRycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IGhvc3QubG9hZGVySG9vay5saWZlY3ljbGUuY3JlYXRlTGluay5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pbnN0YW5jZW9mKHJlcywgSFRNTExpbmtFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSwgY3NzRWwgPSBfc2RrX2NyZWF0ZUxpbmsubGluaywgbmVlZEF0dGFjaCA9IF9zZGtfY3JlYXRlTGluay5uZWVkQXR0YWNoO1xuICAgICAgICAgICAgICAgIG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3NFbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0QXR0cnMxID0ge1xuICAgICAgICAgICAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0L2NzcydcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjc3NBc3NldHMuZm9yRWFjaChmdW5jdGlvbihjc3NVcmwpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3Nka19jcmVhdGVMaW5rID0gc2RrLmNyZWF0ZUxpbmsoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGNzc1VybCxcbiAgICAgICAgICAgICAgICAgICAgY2I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBub29wXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiBkZWZhdWx0QXR0cnMxLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVMaW5rSG9vazogZnVuY3Rpb24odXJsLCBhdHRycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcyA9IGhvc3QubG9hZGVySG9vay5saWZlY3ljbGUuY3JlYXRlTGluay5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pbnN0YW5jZW9mKHJlcywgSFRNTExpbmtFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5lZWREZWxldGVMaW5rOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pLCBjc3NFbCA9IF9zZGtfY3JlYXRlTGluay5saW5rLCBuZWVkQXR0YWNoID0gX3Nka19jcmVhdGVMaW5rLm5lZWRBdHRhY2g7XG4gICAgICAgICAgICAgICAgbmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGNzc0VsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1c2VMaW5rUHJlbG9hZCkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRBdHRyczIgPSB7XG4gICAgICAgICAgICAgICAgcmVsOiAncHJlbG9hZCcsXG4gICAgICAgICAgICAgICAgYXM6ICdzY3JpcHQnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAganNBc3NldHNXaXRob3V0RW50cnkuZm9yRWFjaChmdW5jdGlvbihqc1VybCkge1xuICAgICAgICAgICAgICAgIHZhciBfc2RrX2NyZWF0ZUxpbmsgPSBzZGsuY3JlYXRlTGluayh7XG4gICAgICAgICAgICAgICAgICAgIHVybDoganNVcmwsXG4gICAgICAgICAgICAgICAgICAgIGNiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogZGVmYXVsdEF0dHJzMixcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTGlua0hvb2s6IGZ1bmN0aW9uKHVybCwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBob3N0LmxvYWRlckhvb2subGlmZWN5Y2xlLmNyZWF0ZUxpbmsuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IGF0dHJzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfaW5zdGFuY2VvZihyZXMsIEhUTUxMaW5rRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksIGxpbmtFbCA9IF9zZGtfY3JlYXRlTGluay5saW5rLCBuZWVkQXR0YWNoID0gX3Nka19jcmVhdGVMaW5rLm5lZWRBdHRhY2g7XG4gICAgICAgICAgICAgICAgbmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtFbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0QXR0cnMzID0ge1xuICAgICAgICAgICAgICAgIGZldGNocHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAocmVtb3RlSW5mbyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlSW5mby50eXBlKSA9PT0gJ21vZHVsZScgPyAnbW9kdWxlJyA6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAganNBc3NldHNXaXRob3V0RW50cnkuZm9yRWFjaChmdW5jdGlvbihqc1VybCkge1xuICAgICAgICAgICAgICAgIHZhciBfc2RrX2NyZWF0ZVNjcmlwdCA9IHNkay5jcmVhdGVTY3JpcHQoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGpzVXJsLFxuICAgICAgICAgICAgICAgICAgICBjYjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vb3BcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IGRlZmF1bHRBdHRyczMsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNjcmlwdEhvb2s6IGZ1bmN0aW9uKHVybCwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXMgPSBob3N0LmxvYWRlckhvb2subGlmZWN5Y2xlLmNyZWF0ZVNjcmlwdC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pbnN0YW5jZW9mKHJlcywgSFRNTFNjcmlwdEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmVlZERlbGV0ZVNjcmlwdDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pLCBzY3JpcHRFbCA9IF9zZGtfY3JlYXRlU2NyaXB0LnNjcmlwdCwgbmVlZEF0dGFjaCA9IF9zZGtfY3JlYXRlU2NyaXB0Lm5lZWRBdHRhY2g7XG4gICAgICAgICAgICAgICAgbmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdEVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYXNzaWduUmVtb3RlSW5mbyhyZW1vdGVJbmZvLCByZW1vdGVTbmFwc2hvdCkge1xuICAgIHZhciByZW1vdGVFbnRyeUluZm8gPSBnZXRSZW1vdGVFbnRyeUluZm9Gcm9tU25hcHNob3QocmVtb3RlU25hcHNob3QpO1xuICAgIGlmICghcmVtb3RlRW50cnlJbmZvLnVybCkge1xuICAgICAgICBlcnJvcihcIlRoZSBhdHRyaWJ1dGUgcmVtb3RlRW50cnkgb2YgXCIuY29uY2F0KHJlbW90ZUluZm8ubmFtZSwgXCIgbXVzdCBub3QgYmUgdW5kZWZpbmVkLlwiKSk7XG4gICAgfVxuICAgIHZhciBlbnRyeVVybCA9IHNkay5nZXRSZXNvdXJjZVVybChyZW1vdGVTbmFwc2hvdCwgcmVtb3RlRW50cnlJbmZvLnVybCk7XG4gICAgaWYgKCFzZGsuaXNCcm93c2VyRW52KCkgJiYgIWVudHJ5VXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICBlbnRyeVVybCA9IFwiaHR0cHM6XCIuY29uY2F0KGVudHJ5VXJsKTtcbiAgICB9XG4gICAgcmVtb3RlSW5mby50eXBlID0gcmVtb3RlRW50cnlJbmZvLnR5cGU7XG4gICAgcmVtb3RlSW5mby5lbnRyeUdsb2JhbE5hbWUgPSByZW1vdGVFbnRyeUluZm8uZ2xvYmFsTmFtZTtcbiAgICByZW1vdGVJbmZvLmVudHJ5ID0gZW50cnlVcmw7XG4gICAgcmVtb3RlSW5mby52ZXJzaW9uID0gcmVtb3RlU25hcHNob3QudmVyc2lvbjtcbiAgICByZW1vdGVJbmZvLmJ1aWxkVmVyc2lvbiA9IHJlbW90ZVNuYXBzaG90LmJ1aWxkVmVyc2lvbjtcbn1cbmZ1bmN0aW9uIHNuYXBzaG90UGx1Z2luKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdzbmFwc2hvdC1wbHVnaW4nLFxuICAgICAgICBhZnRlclJlc29sdmU6IGZ1bmN0aW9uIGFmdGVyUmVzb2x2ZShhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3RlLCBwa2dOYW1lT3JBbGlhcywgZXhwb3NlLCBvcmlnaW4sIHJlbW90ZUluZm8sIGlkLCBfcmVmLCByZW1vdGVTbmFwc2hvdCwgZ2xvYmFsU25hcHNob3QsIHByZWxvYWRPcHRpb25zLCBhc3NldHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChfc3RhdGUubGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZSA9IGFyZ3MucmVtb3RlLCBwa2dOYW1lT3JBbGlhcyA9IGFyZ3MucGtnTmFtZU9yQWxpYXMsIGV4cG9zZSA9IGFyZ3MuZXhwb3NlLCBvcmlnaW4gPSBhcmdzLm9yaWdpbiwgcmVtb3RlSW5mbyA9IGFyZ3MucmVtb3RlSW5mbywgaWQgPSBhcmdzLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKCFpc1JlbW90ZUluZm9XaXRoRW50cnkocmVtb3RlKSB8fCAhaXNQdXJlUmVtb3RlRW50cnkocmVtb3RlKSkpIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbi5zbmFwc2hvdEhhbmRsZXIubG9hZFJlbW90ZVNuYXBzaG90SW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVJbmZvOiByZW1vdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfc3RhdGUuc2VudCgpLCByZW1vdGVTbmFwc2hvdCA9IF9yZWYucmVtb3RlU25hcHNob3QsIGdsb2JhbFNuYXBzaG90ID0gX3JlZi5nbG9iYWxTbmFwc2hvdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25SZW1vdGVJbmZvKHJlbW90ZUluZm8sIHJlbW90ZVNuYXBzaG90KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmVsb2FkaW5nIGFzc2V0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGU6IHJlbW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZENvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZU9yQWxpYXM6IHBrZ05hbWVPckFsaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3NlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlQ2F0ZWdvcnk6ICdzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcHNSZW1vdGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbi5yZW1vdGVIYW5kbGVyLmhvb2tzLmxpZmVjeWNsZS5nZW5lcmF0ZVByZWxvYWRBc3NldHMuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRPcHRpb25zOiBwcmVsb2FkT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUluZm86IHJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGU6IHJlbW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90OiByZW1vdGVTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFNuYXBzaG90OiBnbG9iYWxTbmFwc2hvdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXRzID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRBc3NldHMocmVtb3RlSW5mbywgb3JpZ2luLCBhc3NldHMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9seWZpbGxzLl9leHRlbmRzKHt9LCBhcmdzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdDogcmVtb3RlU25hcHNob3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIG5hbWVcbi8vIG5hbWU6dmVyc2lvblxuZnVuY3Rpb24gc3BsaXRJZChpZCkge1xuICAgIHZhciBzcGxpdEluZm8gPSBpZC5zcGxpdCgnOicpO1xuICAgIGlmIChzcGxpdEluZm8ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBzcGxpdEluZm9bMF0sXG4gICAgICAgICAgICB2ZXJzaW9uOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHNwbGl0SW5mby5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHNwbGl0SW5mb1swXSxcbiAgICAgICAgICAgIHZlcnNpb246IHNwbGl0SW5mb1sxXVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBzcGxpdEluZm9bMV0sXG4gICAgICAgICAgICB2ZXJzaW9uOiBzcGxpdEluZm9bMl1cbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyBUcmF2ZXJzZSBhbGwgbm9kZXMgaW4gbW9kdWxlSW5mbyBhbmQgdHJhdmVyc2UgdGhlIGVudGlyZSBzbmFwc2hvdFxuZnVuY3Rpb24gdHJhdmVyc2VNb2R1bGVJbmZvKGdsb2JhbFNuYXBzaG90LCByZW1vdGVJbmZvLCB0cmF2ZXJzZSwgaXNSb290KSB7XG4gICAgdmFyIG1lbW8gPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1s0XSA6IHt9LCByZW1vdGVTbmFwc2hvdCA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdm9pZCAwO1xuICAgIHZhciBpZCA9IGdldEZNSWQocmVtb3RlSW5mbyk7XG4gICAgdmFyIF9nZXRJbmZvV2l0aG91dFR5cGUgPSBnZXRJbmZvV2l0aG91dFR5cGUoZ2xvYmFsU25hcHNob3QsIGlkKSwgc25hcHNob3RWYWx1ZSA9IF9nZXRJbmZvV2l0aG91dFR5cGUudmFsdWU7XG4gICAgdmFyIGVmZmVjdGl2ZVJlbW90ZVNuYXBzaG90ID0gcmVtb3RlU25hcHNob3QgfHwgc25hcHNob3RWYWx1ZTtcbiAgICBpZiAoZWZmZWN0aXZlUmVtb3RlU25hcHNob3QgJiYgIXNkay5pc01hbmlmZXN0UHJvdmlkZXIoZWZmZWN0aXZlUmVtb3RlU25hcHNob3QpKSB7XG4gICAgICAgIHRyYXZlcnNlKGVmZmVjdGl2ZVJlbW90ZVNuYXBzaG90LCByZW1vdGVJbmZvLCBpc1Jvb3QpO1xuICAgICAgICBpZiAoZWZmZWN0aXZlUmVtb3RlU25hcHNob3QucmVtb3Rlc0luZm8pIHtcbiAgICAgICAgICAgIHZhciByZW1vdGVLZXlzID0gT2JqZWN0LmtleXMoZWZmZWN0aXZlUmVtb3RlU25hcHNob3QucmVtb3Rlc0luZm8pO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlLCBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBfaXRlcmF0b3IgPSByZW1vdGVLZXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lbW9ba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWVtb1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1YlJlbW90ZUluZm8gPSBzcGxpdElkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZW1vdGVWYWx1ZSA9IGVmZmVjdGl2ZVJlbW90ZVNuYXBzaG90LnJlbW90ZXNJbmZvW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHRyYXZlcnNlTW9kdWxlSW5mbyhnbG9iYWxTbmFwc2hvdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc3ViUmVtb3RlSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogcmVtb3RlVmFsdWUubWF0Y2hlZFZlcnNpb25cbiAgICAgICAgICAgICAgICAgICAgfSwgdHJhdmVyc2UsIGZhbHNlLCBtZW1vLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG52YXIgaXNFeGlzdGVkID0gZnVuY3Rpb24odHlwZSwgdXJsKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJcIi5jb25jYXQodHlwZSwgXCJbXCIpLmNvbmNhdCh0eXBlID09PSAnbGluaycgPyAnaHJlZicgOiAnc3JjJywgJz1cIicpLmNvbmNhdCh1cmwsICdcIl0nKSk7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIGdlbmVyYXRlUHJlbG9hZEFzc2V0cyhvcmlnaW4sIHByZWxvYWRPcHRpb25zLCByZW1vdGUsIGdsb2JhbFNuYXBzaG90LCByZW1vdGVTbmFwc2hvdCkge1xuICAgIHZhciBjc3NBc3NldHMgPSBbXTtcbiAgICB2YXIganNBc3NldHMgPSBbXTtcbiAgICB2YXIgZW50cnlBc3NldHMgPSBbXTtcbiAgICB2YXIgbG9hZGVkU2hhcmVkSnNBc3NldHMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIGxvYWRlZFNoYXJlZENzc0Fzc2V0cyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9yaWdpbi5vcHRpb25zO1xuICAgIHZhciByb290UHJlbG9hZENvbmZpZyA9IHByZWxvYWRPcHRpb25zLnByZWxvYWRDb25maWc7XG4gICAgdmFyIGRlcHNSZW1vdGUgPSByb290UHJlbG9hZENvbmZpZy5kZXBzUmVtb3RlO1xuICAgIHZhciBtZW1vID0ge307XG4gICAgdHJhdmVyc2VNb2R1bGVJbmZvKGdsb2JhbFNuYXBzaG90LCByZW1vdGUsIGZ1bmN0aW9uKG1vZHVsZUluZm9TbmFwc2hvdCwgcmVtb3RlSW5mbywgaXNSb290KSB7XG4gICAgICAgIHZhciBoYW5kbGVBc3NldHMgPSBmdW5jdGlvbiBoYW5kbGVBc3NldHMoYXNzZXRzKSB7XG4gICAgICAgICAgICB2YXIgYXNzZXRzUmVzID0gYXNzZXRzLm1hcChmdW5jdGlvbihhc3NldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZGsuZ2V0UmVzb3VyY2VVcmwobW9kdWxlSW5mb1NuYXBzaG90LCBhc3NldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwcmVsb2FkQ29uZmlnLmZpbHRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhc3NldHNSZXMuZmlsdGVyKHByZWxvYWRDb25maWcuZmlsdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhc3NldHNSZXM7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBwcmVsb2FkQ29uZmlnO1xuICAgICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgICAgICBwcmVsb2FkQ29uZmlnID0gcm9vdFByZWxvYWRDb25maWc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkZXBzUmVtb3RlKSkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgICAgICB2YXIgZmluZFByZWxvYWRDb25maWcgPSBkZXBzUmVtb3RlLmZpbmQoZnVuY3Rpb24ocmVtb3RlQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdGVDb25maWcubmFtZU9yQWxpYXMgPT09IHJlbW90ZUluZm8ubmFtZSB8fCByZW1vdGVDb25maWcubmFtZU9yQWxpYXMgPT09IHJlbW90ZUluZm8uYWxpYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmRQcmVsb2FkQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJlbG9hZENvbmZpZyA9IGRlZmF1bHRQcmVsb2FkQXJncyhmaW5kUHJlbG9hZENvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlcHNSZW1vdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmVsb2FkQ29uZmlnID0gcm9vdFByZWxvYWRDb25maWc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVtb3RlRW50cnlVcmwgPSBzZGsuZ2V0UmVzb3VyY2VVcmwobW9kdWxlSW5mb1NuYXBzaG90LCBnZXRSZW1vdGVFbnRyeUluZm9Gcm9tU25hcHNob3QobW9kdWxlSW5mb1NuYXBzaG90KS51cmwpO1xuICAgICAgICBpZiAocmVtb3RlRW50cnlVcmwpIHtcbiAgICAgICAgICAgIGVudHJ5QXNzZXRzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlbW90ZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICBtb2R1bGVJbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlbW90ZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnk6IHJlbW90ZUVudHJ5VXJsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVtb3RlRW50cnlUeXBlJyBpbiBtb2R1bGVJbmZvU25hcHNob3QgPyBtb2R1bGVJbmZvU25hcHNob3QucmVtb3RlRW50cnlUeXBlIDogJ2dsb2JhbCcsXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5R2xvYmFsTmFtZTogJ2dsb2JhbE5hbWUnIGluIG1vZHVsZUluZm9TbmFwc2hvdCA/IG1vZHVsZUluZm9TbmFwc2hvdC5nbG9iYWxOYW1lIDogcmVtb3RlSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZVNjb3BlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogJ3ZlcnNpb24nIGluIG1vZHVsZUluZm9TbmFwc2hvdCA/IG1vZHVsZUluZm9TbmFwc2hvdC52ZXJzaW9uIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cmw6IHJlbW90ZUVudHJ5VXJsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW9kdWxlQXNzZXRzSW5mbyA9ICdtb2R1bGVzJyBpbiBtb2R1bGVJbmZvU25hcHNob3QgPyBtb2R1bGVJbmZvU25hcHNob3QubW9kdWxlcyA6IFtdO1xuICAgICAgICB2YXIgbm9ybWFsaXplZFByZWxvYWRFeHBvc2VzID0gbm9ybWFsaXplUHJlbG9hZEV4cG9zZXMocHJlbG9hZENvbmZpZy5leHBvc2VzKTtcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRQcmVsb2FkRXhwb3Nlcy5sZW5ndGggJiYgJ21vZHVsZXMnIGluIG1vZHVsZUluZm9TbmFwc2hvdCkge1xuICAgICAgICAgICAgdmFyIF9tb2R1bGVJbmZvU25hcHNob3RfbW9kdWxlcztcbiAgICAgICAgICAgIG1vZHVsZUFzc2V0c0luZm8gPSBtb2R1bGVJbmZvU25hcHNob3QgPT0gbnVsbCA/IHZvaWQgMCA6IChfbW9kdWxlSW5mb1NuYXBzaG90X21vZHVsZXMgPSBtb2R1bGVJbmZvU25hcHNob3QubW9kdWxlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9tb2R1bGVJbmZvU25hcHNob3RfbW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24oYXNzZXRzLCBtb2R1bGVBc3NldEluZm8pIHtcbiAgICAgICAgICAgICAgICBpZiAoKG5vcm1hbGl6ZWRQcmVsb2FkRXhwb3NlcyA9PSBudWxsID8gdm9pZCAwIDogbm9ybWFsaXplZFByZWxvYWRFeHBvc2VzLmluZGV4T2YobW9kdWxlQXNzZXRJbmZvLm1vZHVsZU5hbWUpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXRzLnB1c2gobW9kdWxlQXNzZXRJbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0cztcbiAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kdWxlQXNzZXRzSW5mbykge1xuICAgICAgICAgICAgdmFyIGFzc2V0c0xlbmd0aCA9IG1vZHVsZUFzc2V0c0luZm8ubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpbmRleCA9IDA7IGluZGV4IDwgYXNzZXRzTGVuZ3RoOyBpbmRleCsrKXtcbiAgICAgICAgICAgICAgICB2YXIgYXNzZXRzSW5mbyA9IG1vZHVsZUFzc2V0c0luZm9baW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBleHBvc2VGdWxsUGF0aCA9IFwiXCIuY29uY2F0KHJlbW90ZUluZm8ubmFtZSwgXCIvXCIpLmNvbmNhdChhc3NldHNJbmZvLm1vZHVsZU5hbWUpO1xuICAgICAgICAgICAgICAgIG9yaWdpbi5yZW1vdGVIYW5kbGVyLmhvb2tzLmxpZmVjeWNsZS5oYW5kbGVQcmVsb2FkTW9kdWxlLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBpZDogYXNzZXRzSW5mby5tb2R1bGVOYW1lID09PSAnLicgPyByZW1vdGVJbmZvLm5hbWUgOiBleHBvc2VGdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVtb3RlSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdDogbW9kdWxlSW5mb1NuYXBzaG90LFxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkQ29uZmlnOiBwcmVsb2FkQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGU6IHJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHByZWxvYWRlZCA9IGdldFByZWxvYWRlZChleHBvc2VGdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHByZWxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZWxvYWRDb25maWcucmVzb3VyY2VDYXRlZ29yeSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jc3NBc3NldHMsIF9jc3NBc3NldHMxLCBfanNBc3NldHMsIF9qc0Fzc2V0czE7XG4gICAgICAgICAgICAgICAgICAgIChfY3NzQXNzZXRzID0gY3NzQXNzZXRzKS5wdXNoLmFwcGx5KF9jc3NBc3NldHMsIF90b19jb25zdW1hYmxlX2FycmF5KGhhbmRsZUFzc2V0cyhhc3NldHNJbmZvLmFzc2V0cy5jc3MuYXN5bmMpKSk7XG4gICAgICAgICAgICAgICAgICAgIChfY3NzQXNzZXRzMSA9IGNzc0Fzc2V0cykucHVzaC5hcHBseShfY3NzQXNzZXRzMSwgX3RvX2NvbnN1bWFibGVfYXJyYXkoaGFuZGxlQXNzZXRzKGFzc2V0c0luZm8uYXNzZXRzLmNzcy5zeW5jKSkpO1xuICAgICAgICAgICAgICAgICAgICAoX2pzQXNzZXRzID0ganNBc3NldHMpLnB1c2guYXBwbHkoX2pzQXNzZXRzLCBfdG9fY29uc3VtYWJsZV9hcnJheShoYW5kbGVBc3NldHMoYXNzZXRzSW5mby5hc3NldHMuanMuYXN5bmMpKSk7XG4gICAgICAgICAgICAgICAgICAgIChfanNBc3NldHMxID0ganNBc3NldHMpLnB1c2guYXBwbHkoX2pzQXNzZXRzMSwgX3RvX2NvbnN1bWFibGVfYXJyYXkoaGFuZGxlQXNzZXRzKGFzc2V0c0luZm8uYXNzZXRzLmpzLnN5bmMpKSk7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlbG9hZENvbmZpZy5yZXNvdXJjZUNhdGVnb3J5ID0gJ3N5bmMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfY3NzQXNzZXRzMiwgX2pzQXNzZXRzMjtcbiAgICAgICAgICAgICAgICAgICAgKF9jc3NBc3NldHMyID0gY3NzQXNzZXRzKS5wdXNoLmFwcGx5KF9jc3NBc3NldHMyLCBfdG9fY29uc3VtYWJsZV9hcnJheShoYW5kbGVBc3NldHMoYXNzZXRzSW5mby5hc3NldHMuY3NzLnN5bmMpKSk7XG4gICAgICAgICAgICAgICAgICAgIChfanNBc3NldHMyID0ganNBc3NldHMpLnB1c2guYXBwbHkoX2pzQXNzZXRzMiwgX3RvX2NvbnN1bWFibGVfYXJyYXkoaGFuZGxlQXNzZXRzKGFzc2V0c0luZm8uYXNzZXRzLmpzLnN5bmMpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFByZWxvYWRlZChleHBvc2VGdWxsUGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB0cnVlLCBtZW1vLCByZW1vdGVTbmFwc2hvdCk7XG4gICAgaWYgKHJlbW90ZVNuYXBzaG90LnNoYXJlZCkge1xuICAgICAgICB2YXIgY29sbGVjdFNoYXJlZEFzc2V0cyA9IGZ1bmN0aW9uKHNoYXJlSW5mbywgc25hcHNob3RTaGFyZWQpIHtcbiAgICAgICAgICAgIHZhciByZWdpc3RlcmVkU2hhcmVkID0gZ2V0UmVnaXN0ZXJlZFNoYXJlKG9yaWdpbi5zaGFyZVNjb3BlTWFwLCBzbmFwc2hvdFNoYXJlZC5zaGFyZWROYW1lLCBzaGFyZUluZm8sIG9yaWdpbi5zaGFyZWRIYW5kbGVyLmhvb2tzLmxpZmVjeWNsZS5yZXNvbHZlU2hhcmUpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGdsb2JhbCBzaGFyZSBkb2VzIG5vdCBleGlzdCwgb3IgdGhlIGxpYiBmdW5jdGlvbiBkb2VzIG5vdCBleGlzdCwgaXQgbWVhbnMgdGhhdCB0aGUgc2hhcmVkIGhhcyBub3QgYmVlbiBsb2FkZWQgeWV0IGFuZCBjYW4gYmUgcHJlbG9hZGVkLlxuICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWRTaGFyZWQgJiYgdHlwZW9mIHJlZ2lzdGVyZWRTaGFyZWQubGliID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc25hcHNob3RTaGFyZWQuYXNzZXRzLmpzLnN5bmMuZm9yRWFjaChmdW5jdGlvbihhc3NldCkge1xuICAgICAgICAgICAgICAgICAgICBsb2FkZWRTaGFyZWRKc0Fzc2V0cy5hZGQoYXNzZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNuYXBzaG90U2hhcmVkLmFzc2V0cy5jc3Muc3luYy5mb3JFYWNoKGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZFNoYXJlZENzc0Fzc2V0cy5hZGQoYXNzZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZW1vdGVTbmFwc2hvdC5zaGFyZWQuZm9yRWFjaChmdW5jdGlvbihzaGFyZWQpIHtcbiAgICAgICAgICAgIHZhciBfb3B0aW9uc19zaGFyZWQ7XG4gICAgICAgICAgICB2YXIgc2hhcmVJbmZvcyA9IChfb3B0aW9uc19zaGFyZWQgPSBvcHRpb25zLnNoYXJlZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRpb25zX3NoYXJlZFtzaGFyZWQuc2hhcmVkTmFtZV07XG4gICAgICAgICAgICBpZiAoIXNoYXJlSW5mb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBubyB2ZXJzaW9uLCBwcmVsb2FkIGFsbCBzaGFyZWRcbiAgICAgICAgICAgIHZhciBzaGFyZWRPcHRpb25zID0gc2hhcmVkLnZlcnNpb24gPyBzaGFyZUluZm9zLmZpbmQoZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzLnZlcnNpb24gPT09IHNoYXJlZC52ZXJzaW9uO1xuICAgICAgICAgICAgfSkgOiBzaGFyZUluZm9zO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGFycmF5U2hhcmVJbmZvID0gYXJyYXlPcHRpb25zKHNoYXJlZE9wdGlvbnMpO1xuICAgICAgICAgICAgYXJyYXlTaGFyZUluZm8uZm9yRWFjaChmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgY29sbGVjdFNoYXJlZEFzc2V0cyhzLCBzaGFyZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgbmVlZFByZWxvYWRKc0Fzc2V0cyA9IGpzQXNzZXRzLmZpbHRlcihmdW5jdGlvbihhc3NldCkge1xuICAgICAgICByZXR1cm4gIWxvYWRlZFNoYXJlZEpzQXNzZXRzLmhhcyhhc3NldCkgJiYgIWlzRXhpc3RlZCgnc2NyaXB0JywgYXNzZXQpO1xuICAgIH0pO1xuICAgIHZhciBuZWVkUHJlbG9hZENzc0Fzc2V0cyA9IGNzc0Fzc2V0cy5maWx0ZXIoZnVuY3Rpb24oYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuICFsb2FkZWRTaGFyZWRDc3NBc3NldHMuaGFzKGFzc2V0KSAmJiAhaXNFeGlzdGVkKCdsaW5rJywgYXNzZXQpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNzc0Fzc2V0czogbmVlZFByZWxvYWRDc3NBc3NldHMsXG4gICAgICAgIGpzQXNzZXRzV2l0aG91dEVudHJ5OiBuZWVkUHJlbG9hZEpzQXNzZXRzLFxuICAgICAgICBlbnRyeUFzc2V0czogZW50cnlBc3NldHMuZmlsdGVyKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gIWlzRXhpc3RlZCgnc2NyaXB0JywgZW50cnkudXJsKTtcbiAgICAgICAgfSlcbiAgICB9O1xufVxudmFyIGdlbmVyYXRlUHJlbG9hZEFzc2V0c1BsdWdpbiA9IGZ1bmN0aW9uIGdlbmVyYXRlUHJlbG9hZEFzc2V0c1BsdWdpbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnZ2VuZXJhdGUtcHJlbG9hZC1hc3NldHMtcGx1Z2luJyxcbiAgICAgICAgZ2VuZXJhdGVQcmVsb2FkQXNzZXRzOiBmdW5jdGlvbiBnZW5lcmF0ZVByZWxvYWRBc3NldHMxKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW4sIHByZWxvYWRPcHRpb25zLCByZW1vdGVJbmZvLCByZW1vdGUsIGdsb2JhbFNuYXBzaG90LCByZW1vdGVTbmFwc2hvdCwgYXNzZXRzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW4gPSBhcmdzLm9yaWdpbiwgcHJlbG9hZE9wdGlvbnMgPSBhcmdzLnByZWxvYWRPcHRpb25zLCByZW1vdGVJbmZvID0gYXJncy5yZW1vdGVJbmZvLCByZW1vdGUgPSBhcmdzLnJlbW90ZSwgZ2xvYmFsU25hcHNob3QgPSBhcmdzLmdsb2JhbFNuYXBzaG90LCByZW1vdGVTbmFwc2hvdCA9IGFyZ3MucmVtb3RlU25hcHNob3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2RrLmlzQnJvd3NlckVudigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NBc3NldHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc0Fzc2V0c1dpdGhvdXRFbnRyeTogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5QXNzZXRzOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVtb3RlSW5mb1dpdGhFbnRyeShyZW1vdGUpICYmIGlzUHVyZVJlbW90ZUVudHJ5KHJlbW90ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc0Fzc2V0czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzQXNzZXRzV2l0aG91dEVudHJ5OiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlBc3NldHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZW1vdGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJlbW90ZS5lbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVJbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlbW90ZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnk6IHJlbW90ZS5lbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcmVtb3RlSW5mby50eXBlIHx8ICdnbG9iYWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeUdsb2JhbE5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVNjb3BlOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXNzaWduUmVtb3RlSW5mbyhyZW1vdGVJbmZvLCByZW1vdGVTbmFwc2hvdCk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cyA9IGdlbmVyYXRlUHJlbG9hZEFzc2V0cyhvcmlnaW4sIHByZWxvYWRPcHRpb25zLCByZW1vdGVJbmZvLCBnbG9iYWxTbmFwc2hvdCwgcmVtb3RlU25hcHNob3QpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0c1xuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuZnVuY3Rpb24gZ2V0R2xvYmFsUmVtb3RlSW5mbyhtb2R1bGVJbmZvLCBvcmlnaW4pIHtcbiAgICB2YXIgaG9zdEdsb2JhbFNuYXBzaG90ID0gZ2V0R2xvYmFsU25hcHNob3RJbmZvQnlNb2R1bGVJbmZvKHtcbiAgICAgICAgbmFtZTogb3JpZ2luLm5hbWUsXG4gICAgICAgIHZlcnNpb246IG9yaWdpbi5vcHRpb25zLnZlcnNpb25cbiAgICB9KTtcbiAgICAvLyBnZXQgcmVtb3RlIGRldGFpbCBpbmZvIGZyb20gZ2xvYmFsXG4gICAgdmFyIGdsb2JhbFJlbW90ZUluZm8gPSBob3N0R2xvYmFsU25hcHNob3QgJiYgJ3JlbW90ZXNJbmZvJyBpbiBob3N0R2xvYmFsU25hcHNob3QgJiYgaG9zdEdsb2JhbFNuYXBzaG90LnJlbW90ZXNJbmZvICYmIGdldEluZm9XaXRob3V0VHlwZShob3N0R2xvYmFsU25hcHNob3QucmVtb3Rlc0luZm8sIG1vZHVsZUluZm8ubmFtZSkudmFsdWU7XG4gICAgaWYgKGdsb2JhbFJlbW90ZUluZm8gJiYgZ2xvYmFsUmVtb3RlSW5mby5tYXRjaGVkVmVyc2lvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaG9zdEdsb2JhbFNuYXBzaG90OiBob3N0R2xvYmFsU25hcHNob3QsXG4gICAgICAgICAgICBnbG9iYWxTbmFwc2hvdDogZ2V0R2xvYmFsU25hcHNob3QoKSxcbiAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90OiBnZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8oe1xuICAgICAgICAgICAgICAgIG5hbWU6IG1vZHVsZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBnbG9iYWxSZW1vdGVJbmZvLm1hdGNoZWRWZXJzaW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBob3N0R2xvYmFsU25hcHNob3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgZ2xvYmFsU25hcHNob3Q6IGdldEdsb2JhbFNuYXBzaG90KCksXG4gICAgICAgIHJlbW90ZVNuYXBzaG90OiBnZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8oe1xuICAgICAgICAgICAgbmFtZTogbW9kdWxlSW5mby5uYW1lLFxuICAgICAgICAgICAgdmVyc2lvbjogJ3ZlcnNpb24nIGluIG1vZHVsZUluZm8gPyBtb2R1bGVJbmZvLnZlcnNpb24gOiB1bmRlZmluZWRcbiAgICAgICAgfSlcbiAgICB9O1xufVxudmFyIFNuYXBzaG90SGFuZGxlciA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gU25hcHNob3RIYW5kbGVyKEhvc3RJbnN0YW5jZSkge1xuICAgICAgICBfY2xhc3NfY2FsbF9jaGVjayh0aGlzLCBTbmFwc2hvdEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmxvYWRpbmdIb3N0U25hcHNob3QgPSBudWxsO1xuICAgICAgICB0aGlzLm1hbmlmZXN0Q2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgUGx1Z2luU3lzdGVtKHtcbiAgICAgICAgICAgIGJlZm9yZUxvYWRSZW1vdGVTbmFwc2hvdDogbmV3IEFzeW5jSG9vaygnYmVmb3JlTG9hZFJlbW90ZVNuYXBzaG90JyksXG4gICAgICAgICAgICBsb2FkU25hcHNob3Q6IG5ldyBBc3luY1dhdGVyZmFsbEhvb2soJ2xvYWRHbG9iYWxTbmFwc2hvdCcpLFxuICAgICAgICAgICAgbG9hZFJlbW90ZVNuYXBzaG90OiBuZXcgQXN5bmNXYXRlcmZhbGxIb29rKCdsb2FkUmVtb3RlU25hcHNob3QnKSxcbiAgICAgICAgICAgIGFmdGVyTG9hZFNuYXBzaG90OiBuZXcgQXN5bmNXYXRlcmZhbGxIb29rKCdhZnRlckxvYWRTbmFwc2hvdCcpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1hbmlmZXN0TG9hZGluZyA9IEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX01BTklGRVNUX0xPQURJTkdfXztcbiAgICAgICAgdGhpcy5Ib3N0SW5zdGFuY2UgPSBIb3N0SW5zdGFuY2U7XG4gICAgICAgIHRoaXMubG9hZGVySG9vayA9IEhvc3RJbnN0YW5jZS5sb2FkZXJIb29rO1xuICAgIH1cbiAgICBfY3JlYXRlX2NsYXNzKFNuYXBzaG90SGFuZGxlciwgW1xuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwibG9hZFJlbW90ZVNuYXBzaG90SW5mb1wiLFxuICAgICAgICAgICAgdmFsdWU6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG4gICAgICAgICAgICBmdW5jdGlvbiBsb2FkUmVtb3RlU25hcHNob3RJbmZvKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZHVsZUluZm8gPSBwYXJhbS5tb2R1bGVJbmZvLCBpZCA9IHBhcmFtLmlkLCBleHBvc2UgPSBwYXJhbS5leHBvc2U7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMsIGhvc3RTbmFwc2hvdCwgX3RoaXNfZ2V0R2xvYmFsUmVtb3RlSW5mbywgaG9zdEdsb2JhbFNuYXBzaG90LCByZW1vdGVTbmFwc2hvdCwgZ2xvYmFsU25hcHNob3QsIF9yZWYsIGdsb2JhbFJlbW90ZVNuYXBzaG90LCBnbG9iYWxTbmFwc2hvdFJlcywgbVNuYXBzaG90LCBnU25hcHNob3QsIHJlbW90ZUVudHJ5LCBtb2R1bGVTbmFwc2hvdCwgZ2xvYmFsU25hcHNob3RSZXMxLCBfcmVmMSwgcmVtb3RlU25hcHNob3RSZXMsIG1vZHVsZVNuYXBzaG90MSwgZ2xvYmFsU25hcHNob3RSZXMyLCBfcmVmMiwgcmVtb3RlU25hcHNob3RSZXMxO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RzX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChfc3RhdGUubGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IF90aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLmxpZmVjeWNsZS5iZWZvcmVMb2FkUmVtb3RlU25hcHNob3QuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVJbmZvOiBtb2R1bGVJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdFNuYXBzaG90ID0gZ2V0R2xvYmFsU25hcHNob3RJbmZvQnlNb2R1bGVJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IF90aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiBfdGhpcy5Ib3N0SW5zdGFuY2Uub3B0aW9ucy52ZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhvc3RTbmFwc2hvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdFNuYXBzaG90ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246IF90aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zLnZlcnNpb24gfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnk6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZXNJbmZvOiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEdsb2JhbFNuYXBzaG90KF9kZWZpbmVfcHJvcGVydHkoe30sIF90aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zLm5hbWUsIGhvc3RTbmFwc2hvdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluIGR5bmFtaWMgbG9hZFJlbW90ZSBzY2VuYXJpb3MsIGluY29tcGxldGUgcmVtb3Rlc0luZm8gZGVsaXZlcnkgbWF5IG9jY3VyLiBJbiBzdWNoIGNhc2VzLCB0aGUgcmVtb3Rlc0luZm8gaW4gdGhlIGhvc3QgbmVlZHMgdG8gYmUgY29tcGxldGVkIGluIHRoZSBzbmFwc2hvdCBhdCBydW50aW1lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIHNuYXBzaG90J3MgaW50ZWdyaXR5IGFuZCBoZWxwcyB0aGUgY2hyb21lIHBsdWdpbiBjb3JyZWN0bHkgaWRlbnRpZnkgYWxsIHByb2R1Y2VyIG1vZHVsZXMsIGVuc3VyaW5nIHRoYXQgcHJveHlhYmxlIHByb2R1Y2VyIG1vZHVsZXMgd2lsbCBub3QgYmUgbWlzc2luZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvc3RTbmFwc2hvdCAmJiAncmVtb3Rlc0luZm8nIGluIGhvc3RTbmFwc2hvdCAmJiAhZ2V0SW5mb1dpdGhvdXRUeXBlKGhvc3RTbmFwc2hvdC5yZW1vdGVzSW5mbywgbW9kdWxlSW5mby5uYW1lKS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCd2ZXJzaW9uJyBpbiBtb2R1bGVJbmZvIHx8ICdlbnRyeScgaW4gbW9kdWxlSW5mbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RTbmFwc2hvdC5yZW1vdGVzSW5mbyA9IHBvbHlmaWxscy5fZXh0ZW5kcyh7fSwgaG9zdFNuYXBzaG90ID09IG51bGwgPyB2b2lkIDAgOiBob3N0U25hcHNob3QucmVtb3Rlc0luZm8sIF9kZWZpbmVfcHJvcGVydHkoe30sIG1vZHVsZUluZm8ubmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkVmVyc2lvbjogJ3ZlcnNpb24nIGluIG1vZHVsZUluZm8gPyBtb2R1bGVJbmZvLnZlcnNpb24gOiBtb2R1bGVJbmZvLmVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzX2dldEdsb2JhbFJlbW90ZUluZm8gPSBfdGhpcy5nZXRHbG9iYWxSZW1vdGVJbmZvKG1vZHVsZUluZm8pLCBob3N0R2xvYmFsU25hcHNob3QgPSBfdGhpc19nZXRHbG9iYWxSZW1vdGVJbmZvLmhvc3RHbG9iYWxTbmFwc2hvdCwgcmVtb3RlU25hcHNob3QgPSBfdGhpc19nZXRHbG9iYWxSZW1vdGVJbmZvLnJlbW90ZVNuYXBzaG90LCBnbG9iYWxTbmFwc2hvdCA9IF90aGlzX2dldEdsb2JhbFJlbW90ZUluZm8uZ2xvYmFsU25hcHNob3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaG9va3MubGlmZWN5Y2xlLmxvYWRTbmFwc2hvdC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUluZm86IG1vZHVsZUluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdEdsb2JhbFNuYXBzaG90OiBob3N0R2xvYmFsU25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlU25hcHNob3Q6IHJlbW90ZVNuYXBzaG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFNuYXBzaG90OiBnbG9iYWxTbmFwc2hvdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfc3RhdGUuc2VudCgpLCBnbG9iYWxSZW1vdGVTbmFwc2hvdCA9IF9yZWYucmVtb3RlU25hcHNob3QsIGdsb2JhbFNuYXBzaG90UmVzID0gX3JlZi5nbG9iYWxTbmFwc2hvdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnbG9iYWxSZW1vdGVTbmFwc2hvdCkgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2RrLmlzTWFuaWZlc3RQcm92aWRlcihnbG9iYWxSZW1vdGVTbmFwc2hvdCkpIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeSA9IHNkay5pc0Jyb3dzZXJFbnYoKSA/IGdsb2JhbFJlbW90ZVNuYXBzaG90LnJlbW90ZUVudHJ5IDogZ2xvYmFsUmVtb3RlU25hcHNob3Quc3NyUmVtb3RlRW50cnkgfHwgZ2xvYmFsUmVtb3RlU25hcHNob3QucmVtb3RlRW50cnkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0TWFuaWZlc3RKc29uKHJlbW90ZUVudHJ5LCBtb2R1bGVJbmZvLCB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZVNuYXBzaG90ID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1zaGFkb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsU25hcHNob3RSZXMxID0gc2V0R2xvYmFsU25hcHNob3RJbmZvQnlNb2R1bGVJbmZvKHBvbHlmaWxscy5fZXh0ZW5kcyh7fSwgbW9kdWxlSW5mbywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGdsb2JhbCByZW1vdGUgbWF5IGJlIG92ZXJyaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXJlZm9yZSwgc2V0IHRoZSBzbmFwc2hvdCBrZXkgdG8gdGhlIGdsb2JhbCBhZGRyZXNzIG9mIHRoZSBhY3R1YWwgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnk6IHJlbW90ZUVudHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBtb2R1bGVTbmFwc2hvdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1TbmFwc2hvdCA9IG1vZHVsZVNuYXBzaG90O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnU25hcHNob3QgPSBnbG9iYWxTbmFwc2hvdFJlczE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy5saWZlY3ljbGUubG9hZFJlbW90ZVNuYXBzaG90LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF90aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUluZm86IG1vZHVsZUluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlU25hcHNob3Q6IGdsb2JhbFJlbW90ZVNuYXBzaG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICdnbG9iYWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjEgPSBfc3RhdGUuc2VudCgpLCByZW1vdGVTbmFwc2hvdFJlcyA9IF9yZWYxLnJlbW90ZVNuYXBzaG90O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtU25hcHNob3QgPSByZW1vdGVTbmFwc2hvdFJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ1NuYXBzaG90ID0gZ2xvYmFsU25hcHNob3RSZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdGF0ZS5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDExXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUmVtb3RlSW5mb1dpdGhFbnRyeShtb2R1bGVJbmZvKSkgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdldE1hbmlmZXN0SnNvbihtb2R1bGVJbmZvLmVudHJ5LCBtb2R1bGVJbmZvLCB7fSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZVNuYXBzaG90MSA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFNuYXBzaG90UmVzMiA9IHNldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyhtb2R1bGVJbmZvLCBtb2R1bGVTbmFwc2hvdDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLmxpZmVjeWNsZS5sb2FkUmVtb3RlU25hcHNob3QuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3RoaXMuSG9zdEluc3RhbmNlLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlSW5mbzogbW9kdWxlSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdDogbW9kdWxlU25hcHNob3QxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICdnbG9iYWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjIgPSBfc3RhdGUuc2VudCgpLCByZW1vdGVTbmFwc2hvdFJlczEgPSBfcmVmMi5yZW1vdGVTbmFwc2hvdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbVNuYXBzaG90ID0gcmVtb3RlU25hcHNob3RSZXMxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnU25hcHNob3QgPSBnbG9iYWxTbmFwc2hvdFJlczI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihlcnJvckNvZGVzLmdldFNob3J0RXJyb3JNc2coZXJyb3JDb2Rlcy5SVU5USU1FXzAwNywgZXJyb3JDb2Rlcy5ydW50aW1lRGVzY01hcCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdE5hbWU6IG1vZHVsZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RWZXJzaW9uOiBtb2R1bGVJbmZvLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxTbmFwc2hvdDogSlNPTi5zdHJpbmdpZnkoZ2xvYmFsU25hcHNob3RSZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3N0YXRlLmxhYmVsID0gMTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy5saWZlY3ljbGUuYWZ0ZXJMb2FkU25hcHNob3QuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IF90aGlzLkhvc3RJbnN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUluZm86IG1vZHVsZUluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlU25hcHNob3Q6IG1TbmFwc2hvdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdDogbVNuYXBzaG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFNuYXBzaG90OiBnU25hcHNob3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImdldEdsb2JhbFJlbW90ZUluZm9cIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRHbG9iYWxSZW1vdGVJbmZvMShtb2R1bGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEdsb2JhbFJlbW90ZUluZm8obW9kdWxlSW5mbywgdGhpcy5Ib3N0SW5zdGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZ2V0TWFuaWZlc3RKc29uXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWFuaWZlc3RKc29uKG1hbmlmZXN0VXJsLCBtb2R1bGVJbmZvLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZ2V0TWFuaWZlc3QsIGFzeW5jTG9hZFByb2Nlc3M7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TWFuaWZlc3QgPSAvKiNfX1BVUkVfXyovIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmID0gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hbmlmZXN0SnNvbiwgcmVzLCBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKF9zdGF0ZS5sYWJlbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdEpzb24gPSBfdGhpcy5tYW5pZmVzdENhY2hlLmdldChtYW5pZmVzdFVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYW5pZmVzdEpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdEpzb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3N0YXRlLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdGF0ZS50cnlzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvYWRlckhvb2subGlmZWN5Y2xlLmZldGNoLmVtaXQobWFuaWZlc3RVcmwsIHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoIXJlcyB8fCAhX2luc3RhbmNlb2YocmVzLCBSZXNwb25zZSkpKSByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaChtYW5pZmVzdFVybCwge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdEpzb24gPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuSG9zdEluc3RhbmNlLnJlbW90ZUhhbmRsZXIuaG9va3MubGlmZWN5Y2xlLmVycm9yTG9hZFJlbW90ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWFuaWZlc3RVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAncnVudGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlmZWN5Y2xlOiAnYWZ0ZXJSZXNvbHZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IF90aGlzLkhvc3RJbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmlmZXN0SnNvbiA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWFuaWZlc3RKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMubWFuaWZlc3RMb2FkaW5nW21hbmlmZXN0VXJsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKGVycm9yQ29kZXMuZ2V0U2hvcnRFcnJvck1zZyhlcnJvckNvZGVzLlJVTlRJTUVfMDAzLCBlcnJvckNvZGVzLnJ1bnRpbWVEZXNjTWFwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuaWZlc3RVcmw6IG1hbmlmZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IG1vZHVsZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0TmFtZTogX3RoaXMuSG9zdEluc3RhbmNlLm9wdGlvbnMubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJcIi5jb25jYXQoZXJyKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0KG1hbmlmZXN0SnNvbi5tZXRhRGF0YSAmJiBtYW5pZmVzdEpzb24uZXhwb3NlcyAmJiBtYW5pZmVzdEpzb24uc2hhcmVkLCBcIlwiLmNvbmNhdChtYW5pZmVzdFVybCwgXCIgaXMgbm90IGEgZmVkZXJhdGlvbiBtYW5pZmVzdFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm1hbmlmZXN0Q2FjaGUuc2V0KG1hbmlmZXN0VXJsLCBtYW5pZmVzdEpzb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmlmZXN0SnNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0TWFuaWZlc3QoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jTG9hZFByb2Nlc3MgPSAvKiNfX1BVUkVfXyovIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmID0gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hbmlmZXN0SnNvbiwgcmVtb3RlU25hcHNob3QsIF9yZWYsIHJlbW90ZVNuYXBzaG90UmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RzX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChfc3RhdGUubGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRNYW5pZmVzdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdEpzb24gPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdCA9IHNkay5nZW5lcmF0ZVNuYXBzaG90RnJvbU1hbmlmZXN0KG1hbmlmZXN0SnNvbiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogbWFuaWZlc3RVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaG9va3MubGlmZWN5Y2xlLmxvYWRSZW1vdGVTbmFwc2hvdC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdGhpcy5Ib3N0SW5zdGFuY2Uub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVJbmZvOiBtb2R1bGVJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmlmZXN0SnNvbjogbWFuaWZlc3RKc29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90OiByZW1vdGVTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdFVybDogbWFuaWZlc3RVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJ21hbmlmZXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfc3RhdGUuc2VudCgpLCByZW1vdGVTbmFwc2hvdFJlcyA9IF9yZWYucmVtb3RlU25hcHNob3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlU25hcHNob3RSZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jTG9hZFByb2Nlc3MoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMubWFuaWZlc3RMb2FkaW5nW21hbmlmZXN0VXJsXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm1hbmlmZXN0TG9hZGluZ1ttYW5pZmVzdFVybF0gPSBhc3luY0xvYWRQcm9jZXNzKCkudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYW5pZmVzdExvYWRpbmdbbWFuaWZlc3RVcmxdXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXSk7XG4gICAgcmV0dXJuIFNuYXBzaG90SGFuZGxlcjtcbn0oKTtcbnZhciBTaGFyZWRIYW5kbGVyID0gLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBTaGFyZWRIYW5kbGVyKGhvc3QpIHtcbiAgICAgICAgX2NsYXNzX2NhbGxfY2hlY2sodGhpcywgU2hhcmVkSGFuZGxlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgUGx1Z2luU3lzdGVtKHtcbiAgICAgICAgICAgIGFmdGVyUmVzb2x2ZTogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnYWZ0ZXJSZXNvbHZlJyksXG4gICAgICAgICAgICBiZWZvcmVMb2FkU2hhcmU6IG5ldyBBc3luY1dhdGVyZmFsbEhvb2soJ2JlZm9yZUxvYWRTaGFyZScpLFxuICAgICAgICAgICAgLy8gbm90IHVzZWQgeWV0XG4gICAgICAgICAgICBsb2FkU2hhcmU6IG5ldyBBc3luY0hvb2soKSxcbiAgICAgICAgICAgIHJlc29sdmVTaGFyZTogbmV3IFN5bmNXYXRlcmZhbGxIb29rKCdyZXNvbHZlU2hhcmUnKSxcbiAgICAgICAgICAgIC8vIG1heWJlIHdpbGwgY2hhbmdlLCB0ZW1wb3JhcmlseSBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICAgICAgICAgIGluaXRDb250YWluZXJTaGFyZVNjb3BlTWFwOiBuZXcgU3luY1dhdGVyZmFsbEhvb2soJ2luaXRDb250YWluZXJTaGFyZVNjb3BlTWFwJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuc2hhcmVTY29wZU1hcCA9IHt9O1xuICAgICAgICB0aGlzLmluaXRUb2tlbnMgPSB7fTtcbiAgICAgICAgdGhpcy5fc2V0R2xvYmFsU2hhcmVTY29wZU1hcChob3N0Lm9wdGlvbnMpO1xuICAgIH1cbiAgICBfY3JlYXRlX2NsYXNzKFNoYXJlZEhhbmRsZXIsIFtcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgc2hhcmVkIGluIHNoYXJlU2NvcGVNYXBcbiAgICAgICAgICAgIGtleTogXCJyZWdpc3RlclNoYXJlZFwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyU2hhcmVkKGdsb2JhbE9wdGlvbnMsIHVzZXJPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgX2Zvcm1hdFNoYXJlQ29uZmlncyA9IGZvcm1hdFNoYXJlQ29uZmlncyhnbG9iYWxPcHRpb25zLCB1c2VyT3B0aW9ucyksIHNoYXJlSW5mb3MgPSBfZm9ybWF0U2hhcmVDb25maWdzLnNoYXJlSW5mb3MsIHNoYXJlZCA9IF9mb3JtYXRTaGFyZUNvbmZpZ3Muc2hhcmVkO1xuICAgICAgICAgICAgICAgIHZhciBzaGFyZWRLZXlzID0gT2JqZWN0LmtleXMoc2hhcmVJbmZvcyk7XG4gICAgICAgICAgICAgICAgc2hhcmVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKHNoYXJlZEtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2hhcmVkVmFscyA9IHNoYXJlSW5mb3Nbc2hhcmVkS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkVmFscy5mb3JFYWNoKGZ1bmN0aW9uKHNoYXJlZFZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2lzdGVyZWRTaGFyZWQgPSBnZXRSZWdpc3RlcmVkU2hhcmUoX3RoaXMuc2hhcmVTY29wZU1hcCwgc2hhcmVkS2V5LCBzaGFyZWRWYWwsIF90aGlzLmhvb2tzLmxpZmVjeWNsZS5yZXNvbHZlU2hhcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWdpc3RlcmVkU2hhcmVkICYmIHNoYXJlZFZhbCAmJiBzaGFyZWRWYWwubGliKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U2hhcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGtnTmFtZTogc2hhcmVkS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWI6IHNoYXJlZFZhbC5saWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldDogc2hhcmVkVmFsLmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWQ6IHNoYXJlZFZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogdXNlck9wdGlvbnMubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzaGFyZUluZm9zOiBzaGFyZUluZm9zLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZWQ6IHNoYXJlZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJsb2FkU2hhcmVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkU2hhcmUocGtnTmFtZSwgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhvc3QsIHNoYXJlSW5mbywgbG9hZFNoYXJlUmVzLCBzaGFyZUluZm9SZXMsIHJlZ2lzdGVyZWRTaGFyZWQsIGFkZFVzZUluLCBmYWN0b3J5LCBhc3luY0xvYWRQcm9jZXNzLCBsb2FkaW5nLCBhc3luY0xvYWRQcm9jZXNzMSwgbG9hZGluZzE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKF9zdGF0ZS5sYWJlbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0ID0gX3RoaXMuaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBwZXJmb3JtcyB0aGUgZm9sbG93aW5nIHN0ZXBzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiBDaGVja3MgaWYgdGhlIGN1cnJlbnRseSBsb2FkZWQgc2hhcmUgYWxyZWFkeSBleGlzdHMsIGlmIG5vdCwgaXQgdGhyb3dzIGFuIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIuIFNlYXJjaGVzIGdsb2JhbGx5IGZvciBhIG1hdGNoaW5nIHNoYXJlLCBpZiBmb3VuZCwgaXQgdXNlcyBpdCBkaXJlY3RseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAzLiBJZiBub3QgZm91bmQsIGl0IHJldHJpZXZlcyBpdCBmcm9tIHRoZSBjdXJyZW50IHNoYXJlIGFuZCBzdG9yZXMgdGhlIG9idGFpbmVkIHNoYXJlIGdsb2JhbGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZUluZm8gPSBnZXRUYXJnZXRTaGFyZWRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBrZ05hbWU6IHBrZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYU9wdGlvbnM6IGV4dHJhT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mb3M6IGhvc3Qub3B0aW9ucy5zaGFyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHNoYXJlSW5mbyA9PSBudWxsID8gdm9pZCAwIDogc2hhcmVJbmZvLnNjb3BlKSkgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoc2hhcmVJbmZvLnNjb3BlLm1hcCgvKiNfX1BVUkVfXyovIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmID0gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbihzaGFyZVNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKF9zdGF0ZS5sYWJlbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKF90aGlzLmluaXRpYWxpemVTaGFyaW5nKHNoYXJlU2NvcGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJhdGVneTogc2hhcmVJbmZvLnN0cmF0ZWd5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihzaGFyZVNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy5saWZlY3ljbGUuYmVmb3JlTG9hZFNoYXJlLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBrZ05hbWU6IHBrZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVJbmZvOiBzaGFyZUluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkOiBob3N0Lm9wdGlvbnMuc2hhcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRTaGFyZVJlcyA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mb1JlcyA9IGxvYWRTaGFyZVJlcy5zaGFyZUluZm87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzc2VydCB0aGF0IHNoYXJlSW5mb1JlcyBleGlzdHMsIGlmIG5vdCwgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0KHNoYXJlSW5mb1JlcywgXCJDYW5ub3QgZmluZCBcIi5jb25jYXQocGtnTmFtZSwgXCIgU2hhcmUgaW4gdGhlIFwiKS5jb25jYXQoaG9zdC5vcHRpb25zLm5hbWUsIFwiLiBQbGVhc2UgZW5zdXJlIHRoYXQgdGhlIFwiKS5jb25jYXQocGtnTmFtZSwgXCIgU2hhcmUgcGFyYW1ldGVycyBoYXZlIGJlZW4gaW5qZWN0ZWRcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXRyaWV2ZSBmcm9tIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQgPSBnZXRSZWdpc3RlcmVkU2hhcmUoX3RoaXMuc2hhcmVTY29wZU1hcCwgcGtnTmFtZSwgc2hhcmVJbmZvUmVzLCBfdGhpcy5ob29rcy5saWZlY3ljbGUucmVzb2x2ZVNoYXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVXNlSW4gPSBmdW5jdGlvbihzaGFyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hhcmVkLnVzZUluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkLnVzZUluID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRVbmlxdWVJdGVtKHNoYXJlZC51c2VJbiwgaG9zdC5vcHRpb25zLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShyZWdpc3RlcmVkU2hhcmVkICYmIHJlZ2lzdGVyZWRTaGFyZWQubGliKSkgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFVzZUluKHJlZ2lzdGVyZWRTaGFyZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQubGliXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShyZWdpc3RlcmVkU2hhcmVkICYmIHJlZ2lzdGVyZWRTaGFyZWQubG9hZGluZyAmJiAhcmVnaXN0ZXJlZFNoYXJlZC5sb2FkZWQpKSByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkU2hhcmVkLmxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY3RvcnkgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkU2hhcmVkLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVnaXN0ZXJlZFNoYXJlZC5saWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQubGliID0gZmFjdG9yeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRVc2VJbihyZWdpc3RlcmVkU2hhcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVnaXN0ZXJlZFNoYXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNMb2FkUHJvY2VzcyA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmFjdG9yeSwgZ1NoYXJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFNoYXJlZC5nZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjdG9yeSA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mb1Jlcy5saWIgPSBmYWN0b3J5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZUluZm9SZXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVXNlSW4oc2hhcmVJbmZvUmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ1NoYXJlZCA9IGdldFJlZ2lzdGVyZWRTaGFyZShfdGhpcy5zaGFyZVNjb3BlTWFwLCBwa2dOYW1lLCBzaGFyZUluZm9SZXMsIF90aGlzLmhvb2tzLmxpZmVjeWNsZS5yZXNvbHZlU2hhcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ1NoYXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ1NoYXJlZC5saWIgPSBmYWN0b3J5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ1NoYXJlZC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNMb2FkUHJvY2VzcygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA9IGFzeW5jTG9hZFByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFNoYXJlZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGtnTmFtZTogcGtnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZDogcmVnaXN0ZXJlZFNoYXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBob3N0Lm9wdGlvbnMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5jdXN0b21TaGFyZUluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY0xvYWRQcm9jZXNzMSA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmFjdG9yeSwgZ1NoYXJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVJbmZvUmVzLmdldCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3J5ID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVJbmZvUmVzLmxpYiA9IGZhY3Rvcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mb1Jlcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRVc2VJbihzaGFyZUluZm9SZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnU2hhcmVkID0gZ2V0UmVnaXN0ZXJlZFNoYXJlKF90aGlzLnNoYXJlU2NvcGVNYXAsIHBrZ05hbWUsIHNoYXJlSW5mb1JlcywgX3RoaXMuaG9va3MubGlmZWN5Y2xlLnJlc29sdmVTaGFyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnU2hhcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnU2hhcmVkLmxpYiA9IGZhY3Rvcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnU2hhcmVkLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0xvYWRQcm9jZXNzMSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzEgPSBhc3luY0xvYWRQcm9jZXNzMSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U2hhcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwa2dOYW1lOiBwa2dOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkOiBzaGFyZUluZm9SZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogaG9zdC5vcHRpb25zLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGliOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUubGFiZWwgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIHNoYXJpbmcgc2VxdWVuY2UgKGV4ZWN1dGVkIG9ubHkgb25jZSBwZXIgc2hhcmUgc2NvcGUpLlxuICAgKiBJdCBhY2NlcHRzIG9uZSBhcmd1bWVudCwgdGhlIG5hbWUgb2YgdGhlIHNoYXJlIHNjb3BlLlxuICAgKiBJZiB0aGUgc2hhcmUgc2NvcGUgZG9lcyBub3QgZXhpc3QsIGl0IGNyZWF0ZXMgb25lLlxuICAgKi8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgICAgICAgICAgIGtleTogXCJpbml0aWFsaXplU2hhcmluZ1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRpYWxpemVTaGFyaW5nKCkge1xuICAgICAgICAgICAgICAgIHZhciBzaGFyZVNjb3BlTmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzBdIDogREVGQVVMVF9TQ09QRSwgZXh0cmFPcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIGhvc3QgPSB0aGlzLmhvc3Q7XG4gICAgICAgICAgICAgICAgdmFyIGZyb20gPSBleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5mcm9tO1xuICAgICAgICAgICAgICAgIHZhciBzdHJhdGVneSA9IGV4dHJhT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZXh0cmFPcHRpb25zLnN0cmF0ZWd5O1xuICAgICAgICAgICAgICAgIHZhciBpbml0U2NvcGUgPSBleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5pbml0U2NvcGU7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgICAgICAgICAgaWYgKGZyb20gIT09ICdidWlsZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluaXRUb2tlbnMgPSB0aGlzLmluaXRUb2tlbnM7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5pdFNjb3BlKSBpbml0U2NvcGUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbc2hhcmVTY29wZU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluaXRUb2tlbikgaW5pdFRva2VuID0gaW5pdFRva2Vuc1tzaGFyZVNjb3BlTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiB0aGlzLmhvc3QubmFtZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdFNjb3BlLmluZGV4T2YoaW5pdFRva2VuKSA+PSAwKSByZXR1cm4gcHJvbWlzZXM7XG4gICAgICAgICAgICAgICAgICAgIGluaXRTY29wZS5wdXNoKGluaXRUb2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzaGFyZVNjb3BlID0gdGhpcy5zaGFyZVNjb3BlTWFwO1xuICAgICAgICAgICAgICAgIHZhciBob3N0TmFtZSA9IGhvc3Qub3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBuZXcgc2hhcmUgc2NvcGUgaWYgbmVjZXNzYXJ5XG4gICAgICAgICAgICAgICAgaWYgKCFzaGFyZVNjb3BlW3NoYXJlU2NvcGVOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBzaGFyZVNjb3BlW3NoYXJlU2NvcGVOYW1lXSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFeGVjdXRlcyBhbGwgaW5pdGlhbGl6YXRpb24gc25pcHBldHMgZnJvbSBhbGwgYWNjZXNzaWJsZSBtb2R1bGVzXG4gICAgICAgICAgICAgICAgdmFyIHNjb3BlID0gc2hhcmVTY29wZVtzaGFyZVNjb3BlTmFtZV07XG4gICAgICAgICAgICAgICAgdmFyIHJlZ2lzdGVyID0gZnVuY3Rpb24obmFtZSwgc2hhcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYWN0aXZlVmVyc2lvbl9zaGFyZUNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZlcnNpb24gPSBzaGFyZWQudmVyc2lvbiwgZWFnZXIgPSBzaGFyZWQuZWFnZXI7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlW25hbWVdID0gc2NvcGVbbmFtZV0gfHwge307XG4gICAgICAgICAgICAgICAgICAgIHZhciB2ZXJzaW9ucyA9IHNjb3BlW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlVmVyc2lvbiA9IHZlcnNpb25zW3ZlcnNpb25dO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlVmVyc2lvbkVhZ2VyID0gQm9vbGVhbihhY3RpdmVWZXJzaW9uICYmIChhY3RpdmVWZXJzaW9uLmVhZ2VyIHx8ICgoX2FjdGl2ZVZlcnNpb25fc2hhcmVDb25maWcgPSBhY3RpdmVWZXJzaW9uLnNoYXJlQ29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX2FjdGl2ZVZlcnNpb25fc2hhcmVDb25maWcuZWFnZXIpKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aXZlVmVyc2lvbiB8fCBhY3RpdmVWZXJzaW9uLnN0cmF0ZWd5ICE9PSAnbG9hZGVkLWZpcnN0JyAmJiAhYWN0aXZlVmVyc2lvbi5sb2FkZWQgJiYgKEJvb2xlYW4oIWVhZ2VyKSAhPT0gIWFjdGl2ZVZlcnNpb25FYWdlciA/IGVhZ2VyIDogaG9zdE5hbWUgPiBhY3RpdmVWZXJzaW9uLmZyb20pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uc1t2ZXJzaW9uXSA9IHNoYXJlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGluaXRGbiA9IGZ1bmN0aW9uKG1vZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kICYmIG1vZC5pbml0ICYmIG1vZC5pbml0KHNoYXJlU2NvcGVbc2hhcmVTY29wZU5hbWVdLCBpbml0U2NvcGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGluaXRSZW1vdGVNb2R1bGUgPSAvKiNfX1BVUkVfXyovIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kdWxlLCByZW1vdGVFbnRyeUV4cG9ydHMsIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKF9zdGF0ZS5sYWJlbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0LnJlbW90ZUhhbmRsZXIuZ2V0UmVtb3RlTW9kdWxlQW5kT3B0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBrZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlID0gX3N0YXRlLnNlbnQoKS5tb2R1bGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1vZHVsZS5nZXRFbnRyeSkgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUudHJ5cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5nZXRFbnRyeSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHMgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0LnJlbW90ZUhhbmRsZXIuaG9va3MubGlmZWN5Y2xlLmVycm9yTG9hZFJlbW90ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAncnVudGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZmVjeWNsZTogJ2JlZm9yZUxvYWRTaGFyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHMgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIW1vZHVsZS5pbml0ZWQpIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRGbihyZW1vdGVFbnRyeUV4cG9ydHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmluaXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUubGFiZWwgPSA4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gaW5pdFJlbW90ZU1vZHVsZShrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSgpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGhvc3Qub3B0aW9ucy5zaGFyZWQpLmZvckVhY2goZnVuY3Rpb24oc2hhcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaGFyZWRBcnIgPSBob3N0Lm9wdGlvbnMuc2hhcmVkW3NoYXJlTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZEFyci5mb3JFYWNoKGZ1bmN0aW9uKHNoYXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXJlZC5zY29wZS5pbmNsdWRlcyhzaGFyZVNjb3BlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcihzaGFyZU5hbWUsIHNoYXJlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHN0cmF0ZWd5PT09J3ZlcnNpb24tZmlyc3QnIG5lZWQgdG8gYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlXG4gICAgICAgICAgICAgICAgaWYgKGhvc3Qub3B0aW9ucy5zaGFyZVN0cmF0ZWd5ID09PSAndmVyc2lvbi1maXJzdCcgfHwgc3RyYXRlZ3kgPT09ICd2ZXJzaW9uLWZpcnN0Jykge1xuICAgICAgICAgICAgICAgICAgICBob3N0Lm9wdGlvbnMucmVtb3Rlcy5mb3JFYWNoKGZ1bmN0aW9uKHJlbW90ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW90ZS5zaGFyZVNjb3BlID09PSBzaGFyZVNjb3BlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goaW5pdFJlbW90ZU1vZHVsZShyZW1vdGUubmFtZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBUaGUgbGliIGZ1bmN0aW9uIHdpbGwgb25seSBiZSBhdmFpbGFibGUgaWYgdGhlIHNoYXJlZCBzZXQgYnkgZWFnZXIgb3IgcnVudGltZSBpbml0IGlzIHNldCBvciB0aGUgc2hhcmVkIGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWQuXG4gICAgICAgICAgICAvLyAxLiBJZiB0aGUgbG9hZGVkIHNoYXJlZCBhbHJlYWR5IGV4aXN0cyBnbG9iYWxseSwgdGhlbiBpdCB3aWxsIGJlIHJldXNlZFxuICAgICAgICAgICAgLy8gMi4gSWYgbGliIGV4aXN0cyBpbiBsb2NhbCBzaGFyZWQsIGl0IHdpbGwgYmUgdXNlZCBkaXJlY3RseVxuICAgICAgICAgICAgLy8gMy4gSWYgdGhlIGxvY2FsIGdldCByZXR1cm5zIHNvbWV0aGluZyBvdGhlciB0aGFuIFByb21pc2UsIHRoZW4gaXQgd2lsbCBiZSB1c2VkIGRpcmVjdGx5XG4gICAgICAgICAgICBrZXk6IFwibG9hZFNoYXJlU3luY1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRTaGFyZVN5bmMocGtnTmFtZSwgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgaG9zdCA9IHRoaXMuaG9zdDtcbiAgICAgICAgICAgICAgICB2YXIgc2hhcmVJbmZvID0gZ2V0VGFyZ2V0U2hhcmVkT3B0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgIHBrZ05hbWU6IHBrZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhT3B0aW9uczogZXh0cmFPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZUluZm9zOiBob3N0Lm9wdGlvbnMuc2hhcmVkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHNoYXJlSW5mbyA9PSBudWxsID8gdm9pZCAwIDogc2hhcmVJbmZvLnNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mby5zY29wZS5mb3JFYWNoKGZ1bmN0aW9uKHNoYXJlU2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmluaXRpYWxpemVTaGFyaW5nKHNoYXJlU2NvcGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJhdGVneTogc2hhcmVJbmZvLnN0cmF0ZWd5XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZWdpc3RlcmVkU2hhcmVkID0gZ2V0UmVnaXN0ZXJlZFNoYXJlKHRoaXMuc2hhcmVTY29wZU1hcCwgcGtnTmFtZSwgc2hhcmVJbmZvLCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5yZXNvbHZlU2hhcmUpO1xuICAgICAgICAgICAgICAgIHZhciBhZGRVc2VJbiA9IGZ1bmN0aW9uKHNoYXJlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYXJlZC51c2VJbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkLnVzZUluID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYWRkVW5pcXVlSXRlbShzaGFyZWQudXNlSW4sIGhvc3Qub3B0aW9ucy5uYW1lKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkU2hhcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVnaXN0ZXJlZFNoYXJlZC5saWIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFVzZUluKHJlZ2lzdGVyZWRTaGFyZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWdpc3RlcmVkU2hhcmVkLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVnaXN0ZXJlZFNoYXJlZC5mcm9tID09PSBob3N0Lm9wdGlvbnMubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZUluZm8ubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJlZFNoYXJlZC5saWI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWdpc3RlcmVkU2hhcmVkLmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZHVsZSA9IHJlZ2lzdGVyZWRTaGFyZWQuZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pbnN0YW5jZW9mKG1vZHVsZSwgUHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRVc2VJbihyZWdpc3RlcmVkU2hhcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNoYXJlZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBrZ05hbWU6IHBrZ05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogaG9zdC5vcHRpb25zLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpYjogbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWQ6IHJlZ2lzdGVyZWRTaGFyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaGFyZUluZm8ubGliKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hhcmVJbmZvLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVJbmZvLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNoYXJlSW5mby5saWI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaGFyZUluZm8uZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2R1bGUxID0gc2hhcmVJbmZvLmdldCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2luc3RhbmNlb2YobW9kdWxlMSwgUHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvckNvZGUgPSAoZXh0cmFPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBleHRyYU9wdGlvbnMuZnJvbSkgPT09ICdidWlsZCcgPyBlcnJvckNvZGVzLlJVTlRJTUVfMDA1IDogZXJyb3JDb2Rlcy5SVU5USU1FXzAwNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvckNvZGVzLmdldFNob3J0RXJyb3JNc2coZXJyb3JDb2RlLCBlcnJvckNvZGVzLnJ1bnRpbWVEZXNjTWFwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdE5hbWU6IGhvc3Qub3B0aW9ucy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZFBrZ05hbWU6IHBrZ05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaGFyZUluZm8ubGliID0gbW9kdWxlMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTaGFyZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGtnTmFtZTogcGtnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGhvc3Qub3B0aW9ucy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGliOiBzaGFyZUluZm8ubGliLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkOiBzaGFyZUluZm9cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaGFyZUluZm8ubGliO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JDb2Rlcy5nZXRTaG9ydEVycm9yTXNnKGVycm9yQ29kZXMuUlVOVElNRV8wMDYsIGVycm9yQ29kZXMucnVudGltZURlc2NNYXAsIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdE5hbWU6IGhvc3Qub3B0aW9ucy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZWRQa2dOYW1lOiBwa2dOYW1lXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiaW5pdFNoYXJlU2NvcGVNYXBcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0U2hhcmVTY29wZU1hcChzY29wZU5hbWUsIHNoYXJlU2NvcGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXh0cmFPcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB2b2lkIDAgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgICAgICAgICAgICB2YXIgaG9zdCA9IHRoaXMuaG9zdDtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlU2NvcGVNYXBbc2NvcGVOYW1lXSA9IHNoYXJlU2NvcGU7XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy5saWZlY3ljbGUuaW5pdENvbnRhaW5lclNoYXJlU2NvcGVNYXAuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGU6IHNoYXJlU2NvcGUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGhvc3Qub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0LFxuICAgICAgICAgICAgICAgICAgICBzY29wZU5hbWU6IHNjb3BlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaG9zdFNoYXJlU2NvcGVNYXA6IGV4dHJhT3B0aW9ucy5ob3N0U2hhcmVTY29wZU1hcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwic2V0U2hhcmVkXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2hhcmVkKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgcGtnTmFtZSA9IHBhcmFtLnBrZ05hbWUsIHNoYXJlZCA9IHBhcmFtLnNoYXJlZCwgZnJvbSA9IHBhcmFtLmZyb20sIGxpYiA9IHBhcmFtLmxpYiwgbG9hZGluZyA9IHBhcmFtLmxvYWRpbmcsIGxvYWRlZCA9IHBhcmFtLmxvYWRlZCwgZ2V0ID0gcGFyYW0uZ2V0O1xuICAgICAgICAgICAgICAgIHZhciB2ZXJzaW9uID0gc2hhcmVkLnZlcnNpb24sIF9zaGFyZWRfc2NvcGUgPSBzaGFyZWQuc2NvcGUsIHNjb3BlID0gX3NoYXJlZF9zY29wZSA9PT0gdm9pZCAwID8gJ2RlZmF1bHQnIDogX3NoYXJlZF9zY29wZSwgc2hhcmVJbmZvID0gcG9seWZpbGxzLl9vYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzX2xvb3NlKHNoYXJlZCwgW1xuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJzY29wZVwiXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgdmFyIHNjb3BlcyA9IEFycmF5LmlzQXJyYXkoc2NvcGUpID8gc2NvcGUgOiBbXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBzY29wZXMuZm9yRWFjaChmdW5jdGlvbihzYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLnNoYXJlU2NvcGVNYXBbc2NdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zaGFyZVNjb3BlTWFwW3NjXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuc2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNoYXJlU2NvcGVNYXBbc2NdW3BrZ05hbWVdID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5zaGFyZVNjb3BlTWFwW3NjXVtwa2dOYW1lXVt2ZXJzaW9uXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bdmVyc2lvbl0gPSBwb2x5ZmlsbHMuX2V4dGVuZHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgc2hhcmVJbmZvLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGliOiBsaWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiBsb2FkZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bdmVyc2lvbl0uZ2V0ID0gZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWdpc3RlcmVkU2hhcmVkID0gX3RoaXMuc2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bdmVyc2lvbl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2FkaW5nICYmICFyZWdpc3RlcmVkU2hhcmVkLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQubG9hZGluZyA9IGxvYWRpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcIl9zZXRHbG9iYWxTaGFyZVNjb3BlTWFwXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldEdsb2JhbFNoYXJlU2NvcGVNYXAoaG9zdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZ2xvYmFsU2hhcmVTY29wZU1hcCA9IGdldEdsb2JhbFNoYXJlU2NvcGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgaWRlbnRpZmllciA9IGhvc3RPcHRpb25zLmlkIHx8IGhvc3RPcHRpb25zLm5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGlkZW50aWZpZXIgJiYgIWdsb2JhbFNoYXJlU2NvcGVNYXBbaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsU2hhcmVTY29wZU1hcFtpZGVudGlmaWVyXSA9IHRoaXMuc2hhcmVTY29wZU1hcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKTtcbiAgICByZXR1cm4gU2hhcmVkSGFuZGxlcjtcbn0oKTtcbnZhciBSZW1vdGVIYW5kbGVyID0gLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBSZW1vdGVIYW5kbGVyKGhvc3QpIHtcbiAgICAgICAgX2NsYXNzX2NhbGxfY2hlY2sodGhpcywgUmVtb3RlSGFuZGxlcik7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgUGx1Z2luU3lzdGVtKHtcbiAgICAgICAgICAgIGJlZm9yZVJlZ2lzdGVyUmVtb3RlOiBuZXcgU3luY1dhdGVyZmFsbEhvb2soJ2JlZm9yZVJlZ2lzdGVyUmVtb3RlJyksXG4gICAgICAgICAgICByZWdpc3RlclJlbW90ZTogbmV3IFN5bmNXYXRlcmZhbGxIb29rKCdyZWdpc3RlclJlbW90ZScpLFxuICAgICAgICAgICAgYmVmb3JlUmVxdWVzdDogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnYmVmb3JlUmVxdWVzdCcpLFxuICAgICAgICAgICAgb25Mb2FkOiBuZXcgQXN5bmNIb29rKCdvbkxvYWQnKSxcbiAgICAgICAgICAgIGhhbmRsZVByZWxvYWRNb2R1bGU6IG5ldyBTeW5jSG9vaygnaGFuZGxlUHJlbG9hZE1vZHVsZScpLFxuICAgICAgICAgICAgZXJyb3JMb2FkUmVtb3RlOiBuZXcgQXN5bmNIb29rKCdlcnJvckxvYWRSZW1vdGUnKSxcbiAgICAgICAgICAgIGJlZm9yZVByZWxvYWRSZW1vdGU6IG5ldyBBc3luY0hvb2soJ2JlZm9yZVByZWxvYWRSZW1vdGUnKSxcbiAgICAgICAgICAgIGdlbmVyYXRlUHJlbG9hZEFzc2V0czogbmV3IEFzeW5jSG9vaygnZ2VuZXJhdGVQcmVsb2FkQXNzZXRzJyksXG4gICAgICAgICAgICAvLyBub3QgdXNlZCB5ZXRcbiAgICAgICAgICAgIGFmdGVyUHJlbG9hZFJlbW90ZTogbmV3IEFzeW5jSG9vaygpLFxuICAgICAgICAgICAgbG9hZEVudHJ5OiBuZXcgQXN5bmNIb29rKClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuaWRUb1JlbW90ZU1hcCA9IHt9O1xuICAgIH1cbiAgICBfY3JlYXRlX2NsYXNzKFJlbW90ZUhhbmRsZXIsIFtcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImZvcm1hdEFuZFJlZ2lzdGVyUmVtb3RlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0QW5kUmVnaXN0ZXJSZW1vdGUoZ2xvYmFsT3B0aW9ucywgdXNlck9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciB1c2VyUmVtb3RlcyA9IHVzZXJPcHRpb25zLnJlbW90ZXMgfHwgW107XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJSZW1vdGVzLnJlZHVjZShmdW5jdGlvbihyZXMsIHJlbW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3RlclJlbW90ZShyZW1vdGUsIHJlcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2U6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgIH0sIGdsb2JhbE9wdGlvbnMucmVtb3Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJzZXRJZFRvUmVtb3RlTWFwXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SWRUb1JlbW90ZU1hcChpZCwgcmVtb3RlTWF0Y2hJbmZvKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW90ZSA9IHJlbW90ZU1hdGNoSW5mby5yZW1vdGUsIGV4cG9zZSA9IHJlbW90ZU1hdGNoSW5mby5leHBvc2U7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSByZW1vdGUubmFtZSwgYWxpYXMgPSByZW1vdGUuYWxpYXM7XG4gICAgICAgICAgICAgICAgdGhpcy5pZFRvUmVtb3RlTWFwW2lkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVtb3RlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9zZTogZXhwb3NlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoYWxpYXMgJiYgaWQuc3RhcnRzV2l0aChuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWRXaXRoQWxpYXMgPSBpZC5yZXBsYWNlKG5hbWUsIGFsaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZFRvUmVtb3RlTWFwW2lkV2l0aEFsaWFzXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlbW90ZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3NlOiBleHBvc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWxpYXMgJiYgaWQuc3RhcnRzV2l0aChhbGlhcykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkV2l0aE5hbWUgPSBpZC5yZXBsYWNlKGFsaWFzLCBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZFRvUmVtb3RlTWFwW2lkV2l0aE5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVtb3RlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvc2U6IGV4cG9zZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImxvYWRSZW1vdGVcIixcbiAgICAgICAgICAgIHZhbHVlOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxvYWRSZW1vdGUoaWQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaG9zdCwgX3JlZiwgX3JlZl9sb2FkRmFjdG9yeSwgbG9hZEZhY3RvcnksIF9yZWYxLCBtb2R1bGUsIG1vZHVsZU9wdGlvbnMsIHJlbW90ZU1hdGNoSW5mbywgcGtnTmFtZU9yQWxpYXMsIHJlbW90ZSwgZXhwb3NlLCBpZFJlcywgcmVtb3RlU25hcHNob3QsIG1vZHVsZU9yRmFjdG9yeSwgbW9kdWxlV3JhcHBlciwgZXJyb3IsIF9yZWYyLCBfcmVmX2Zyb20sIGZyb20sIGZhaWxPdmVyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RzX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChfc3RhdGUubGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdCA9IF90aGlzLmhvc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdGF0ZS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUudHJ5cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgN1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZiA9IG9wdGlvbnMgfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEZhY3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX3JlZl9sb2FkRmFjdG9yeSA9IF9yZWYubG9hZEZhY3RvcnksIGxvYWRGYWN0b3J5ID0gX3JlZl9sb2FkRmFjdG9yeSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWZfbG9hZEZhY3Rvcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0UmVtb3RlTW9kdWxlQW5kT3B0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3JlZjEgPSBfc3RhdGUuc2VudCgpLCBtb2R1bGUgPSBfcmVmMS5tb2R1bGUsIG1vZHVsZU9wdGlvbnMgPSBfcmVmMS5tb2R1bGVPcHRpb25zLCByZW1vdGVNYXRjaEluZm8gPSBfcmVmMS5yZW1vdGVNYXRjaEluZm87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBrZ05hbWVPckFsaWFzID0gcmVtb3RlTWF0Y2hJbmZvLnBrZ05hbWVPckFsaWFzLCByZW1vdGUgPSByZW1vdGVNYXRjaEluZm8ucmVtb3RlLCBleHBvc2UgPSByZW1vdGVNYXRjaEluZm8uZXhwb3NlLCBpZFJlcyA9IHJlbW90ZU1hdGNoSW5mby5pZCwgcmVtb3RlU25hcHNob3QgPSByZW1vdGVNYXRjaEluZm8ucmVtb3RlU25hcHNob3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmdldChpZFJlcywgZXhwb3NlLCBvcHRpb25zLCByZW1vdGVTbmFwc2hvdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU9yRmFjdG9yeSA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaG9va3MubGlmZWN5Y2xlLm9uTG9hZC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRSZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGtnTmFtZU9yQWxpYXM6IHBrZ05hbWVPckFsaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zZTogZXhwb3NlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zZU1vZHVsZTogbG9hZEZhY3RvcnkgPyBtb2R1bGVPckZhY3RvcnkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3NlTW9kdWxlRmFjdG9yeTogbG9hZEZhY3RvcnkgPyB1bmRlZmluZWQgOiBtb2R1bGVPckZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlOiByZW1vdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogbW9kdWxlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVJbnN0YW5jZTogbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZVdyYXBwZXIgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRJZFRvUmVtb3RlTWFwKGlkLCByZW1vdGVNYXRjaEluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1vZHVsZVdyYXBwZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVXcmFwcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlT3JGYWN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYyID0gb3B0aW9ucyB8fCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAncnVudGltZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX3JlZl9mcm9tID0gX3JlZjIuZnJvbSwgZnJvbSA9IF9yZWZfZnJvbSA9PT0gdm9pZCAwID8gJ3J1bnRpbWUnIDogX3JlZl9mcm9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLmxpZmVjeWNsZS5lcnJvckxvYWRSZW1vdGUuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZmVjeWNsZTogJ29uTG9hZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbE92ZXIgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZhaWxPdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWxPdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwicHJlbG9hZFJlbW90ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG4gICAgICAgICAgICBmdW5jdGlvbiBwcmVsb2FkUmVtb3RlKHByZWxvYWRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhvc3QsIHByZWxvYWRPcHM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKF9zdGF0ZS5sYWJlbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0ID0gX3RoaXMuaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy5saWZlY3ljbGUuYmVmb3JlUHJlbG9hZFJlbW90ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkT3BzOiBwcmVsb2FkT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBob3N0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZE9wcyA9IGZvcm1hdFByZWxvYWRBcmdzKGhvc3Qub3B0aW9ucy5yZW1vdGVzLCBwcmVsb2FkT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJlbG9hZE9wcy5tYXAoLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24ob3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1vdGUsIHJlbW90ZUluZm8sIF9yZWYsIGdsb2JhbFNuYXBzaG90LCByZW1vdGVTbmFwc2hvdCwgYXNzZXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RzX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChfc3RhdGUubGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlID0gb3BzLnJlbW90ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlSW5mbyA9IGdldFJlbW90ZUluZm8ocmVtb3RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0LnNuYXBzaG90SGFuZGxlci5sb2FkUmVtb3RlU25hcHNob3RJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVJbmZvOiByZW1vdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVmID0gX3N0YXRlLnNlbnQoKSwgZ2xvYmFsU25hcHNob3QgPSBfcmVmLmdsb2JhbFNuYXBzaG90LCByZW1vdGVTbmFwc2hvdCA9IF9yZWYucmVtb3RlU25hcHNob3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaG9va3MubGlmZWN5Y2xlLmdlbmVyYXRlUHJlbG9hZEFzc2V0cy5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGhvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZE9wdGlvbnM6IG9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGU6IHJlbW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVJbmZvOiByZW1vdGVJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFNuYXBzaG90OiBnbG9iYWxTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdDogcmVtb3RlU25hcHNob3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NldHMgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFzc2V0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRBc3NldHMocmVtb3RlSW5mbywgaG9zdCwgYXNzZXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcInJlZ2lzdGVyUmVtb3Rlc1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyUmVtb3RlcyhyZW1vdGVzLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgaG9zdCA9IHRoaXMuaG9zdDtcbiAgICAgICAgICAgICAgICByZW1vdGVzLmZvckVhY2goZnVuY3Rpb24ocmVtb3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyUmVtb3RlKHJlbW90ZSwgaG9zdC5vcHRpb25zLnJlbW90ZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmZvcmNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiZ2V0UmVtb3RlTW9kdWxlQW5kT3B0aW9uc1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlbW90ZU1vZHVsZUFuZE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBob3N0LCBpZCwgbG9hZFJlbW90ZUFyZ3MsIGVycm9yLCBpZFJlcywgcmVtb3RlU3BsaXRJbmZvLCByYXdSZW1vdGUsIHJlbW90ZUluZm8sIG1hdGNoSW5mbywgcmVtb3RlLCBleHBvc2UsIG1vZHVsZSwgbW9kdWxlT3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3QgPSBfdGhpcy5ob3N0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9IG9wdGlvbnMuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdGF0ZS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUudHJ5cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy5saWZlY3ljbGUuYmVmb3JlUmVxdWVzdC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogaG9zdC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRSZW1vdGVBcmdzID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaG9va3MubGlmZWN5Y2xlLmVycm9yTG9hZFJlbW90ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogaG9zdC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAncnVudGltZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZmVjeWNsZTogJ2JlZm9yZVJlcXVlc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFJlbW90ZUFyZ3MgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWxvYWRSZW1vdGVBcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUmVzID0gbG9hZFJlbW90ZUFyZ3MuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZVNwbGl0SW5mbyA9IG1hdGNoUmVtb3RlV2l0aE5hbWVBbmRFeHBvc2UoaG9zdC5vcHRpb25zLnJlbW90ZXMsIGlkUmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0KHJlbW90ZVNwbGl0SW5mbywgZXJyb3JDb2Rlcy5nZXRTaG9ydEVycm9yTXNnKGVycm9yQ29kZXMuUlVOVElNRV8wMDQsIGVycm9yQ29kZXMucnVudGltZURlc2NNYXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3ROYW1lOiBob3N0Lm9wdGlvbnMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZDogaWRSZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdSZW1vdGUgPSByZW1vdGVTcGxpdEluZm8ucmVtb3RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVJbmZvID0gZ2V0UmVtb3RlSW5mbyhyYXdSZW1vdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Quc2hhcmVkSGFuZGxlci5ob29rcy5saWZlY3ljbGUuYWZ0ZXJSZXNvbHZlLmVtaXQocG9seWZpbGxzLl9leHRlbmRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRSZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlbW90ZVNwbGl0SW5mbywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGhvc3Qub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGhvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlSW5mbzogcmVtb3RlSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEluZm8gPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdGUgPSBtYXRjaEluZm8ucmVtb3RlLCBleHBvc2UgPSBtYXRjaEluZm8uZXhwb3NlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQocmVtb3RlICYmIGV4cG9zZSwgXCJUaGUgJ2JlZm9yZVJlcXVlc3QnIGhvb2sgd2FzIGV4ZWN1dGVkLCBidXQgaXQgZmFpbGVkIHRvIHJldHVybiB0aGUgY29ycmVjdCAncmVtb3RlJyBhbmQgJ2V4cG9zZScgdmFsdWVzIHdoaWxlIGxvYWRpbmcgXCIuY29uY2F0KGlkUmVzLCBcIi5cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUgPSBob3N0Lm1vZHVsZUNhY2hlLmdldChyZW1vdGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3N0OiBob3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlSW5mbzogcmVtb3RlSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlID0gbmV3IE1vZHVsZShtb2R1bGVPcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3QubW9kdWxlQ2FjaGUuc2V0KHJlbW90ZS5uYW1lLCBtb2R1bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogbW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU9wdGlvbnM6IG1vZHVsZU9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlTWF0Y2hJbmZvOiBtYXRjaEluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcInJlZ2lzdGVyUmVtb3RlXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJSZW1vdGUocmVtb3RlLCB0YXJnZXRSZW1vdGVzLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhvc3QgPSB0aGlzLmhvc3Q7XG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZVJlbW90ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3RlLmFsaWFzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBpZiBhbGlhcyBlcXVhbHMgdGhlIHByZWZpeCBvZiByZW1vdGUubmFtZSBhbmQgcmVtb3RlLmFsaWFzLCBpZiBzbywgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzIG11bHRpLWxldmVsIHBhdGggcmVmZXJlbmNlcyBjYW5ub3QgZ3VhcmFudGVlIHVuaXF1ZSBuYW1lcywgYWxpYXMgYmVpbmcgYSBwcmVmaXggb2YgcmVtb3RlLm5hbWUgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbmRFcXVhbCA9IHRhcmdldFJlbW90ZXMuZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9pdGVtX2FsaWFzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdGUuYWxpYXMgJiYgKGl0ZW0ubmFtZS5zdGFydHNXaXRoKHJlbW90ZS5hbGlhcykgfHwgKChfaXRlbV9hbGlhcyA9IGl0ZW0uYWxpYXMpID09IG51bGwgPyB2b2lkIDAgOiBfaXRlbV9hbGlhcy5zdGFydHNXaXRoKHJlbW90ZS5hbGlhcykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0KCFmaW5kRXF1YWwsIFwiVGhlIGFsaWFzIFwiLmNvbmNhdChyZW1vdGUuYWxpYXMsIFwiIG9mIHJlbW90ZSBcIikuY29uY2F0KHJlbW90ZS5uYW1lLCBcIiBpcyBub3QgYWxsb3dlZCB0byBiZSB0aGUgcHJlZml4IG9mIFwiKS5jb25jYXQoZmluZEVxdWFsICYmIGZpbmRFcXVhbC5uYW1lLCBcIiBuYW1lIG9yIGFsaWFzXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHJlbW90ZSBlbnRyeSB0byBhIGNvbXBsZXRlIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdlbnRyeScgaW4gcmVtb3RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2RrLmlzQnJvd3NlckVudigpICYmICFyZW1vdGUuZW50cnkuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlLmVudHJ5ID0gbmV3IFVSTChyZW1vdGUuZW50cnksIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZW1vdGUuc2hhcmVTY29wZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlLnNoYXJlU2NvcGUgPSBERUZBVUxUX1NDT1BFO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVtb3RlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZS50eXBlID0gREVGQVVMVF9SRU1PVEVfVFlQRTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy5saWZlY3ljbGUuYmVmb3JlUmVnaXN0ZXJSZW1vdGUuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZTogcmVtb3RlLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGhvc3RcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgcmVnaXN0ZXJlZFJlbW90ZSA9IHRhcmdldFJlbW90ZXMuZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUgPT09IHJlbW90ZS5uYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghcmVnaXN0ZXJlZFJlbW90ZSkge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVSZW1vdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UmVtb3Rlcy5wdXNoKHJlbW90ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9va3MubGlmZWN5Y2xlLnJlZ2lzdGVyUmVtb3RlLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlOiByZW1vdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGhvc3RcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1RoZSByZW1vdGUgXCInLmNvbmNhdChyZW1vdGUubmFtZSwgJ1wiIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdQbGVhc2Ugbm90ZSB0aGF0IG92ZXJyaWRpbmcgaXQgbWF5IGNhdXNlIHVuZXhwZWN0ZWQgZXJyb3JzLidcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZm9yY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSByZWdpc3RlcmVkIHJlbW90ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVSZW1vdGUocmVnaXN0ZXJlZFJlbW90ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVSZW1vdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFJlbW90ZXMucHVzaChyZW1vdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rcy5saWZlY3ljbGUucmVnaXN0ZXJSZW1vdGUuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlOiByZW1vdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkay53YXJuKG1lc3NhZ2VzLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJyZW1vdmVSZW1vdGVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVSZW1vdGUocmVtb3RlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhvc3QgPSB0aGlzLmhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gcmVtb3RlLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZW1vdGVJbmRleCA9IGhvc3Qub3B0aW9ucy5yZW1vdGVzLmZpbmRJbmRleChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lID09PSBuYW1lO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW90ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdC5vcHRpb25zLnJlbW90ZXMuc3BsaWNlKHJlbW90ZUluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZGVkTW9kdWxlID0gaG9zdC5tb2R1bGVDYWNoZS5nZXQocmVtb3RlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9hZGVkTW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3RlSW5mbyA9IGxvYWRlZE1vZHVsZS5yZW1vdGVJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IHJlbW90ZUluZm8uZW50cnlHbG9iYWxOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEN1cnJlbnRHbG9iYWxba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfT2JqZWN0X2dldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKF9PYmplY3RfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDdXJyZW50R2xvYmFsLCBrZXkpKSA9PSBudWxsID8gdm9pZCAwIDogX09iamVjdF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBDdXJyZW50R2xvYmFsW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXJyZW50R2xvYmFsW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW90ZUVudHJ5VW5pcXVlS2V5ID0gZ2V0UmVtb3RlRW50cnlVbmlxdWVLZXkobG9hZGVkTW9kdWxlLnJlbW90ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbExvYWRpbmdbcmVtb3RlRW50cnlVbmlxdWVLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGdsb2JhbExvYWRpbmdbcmVtb3RlRW50cnlVbmlxdWVLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdC5zbmFwc2hvdEhhbmRsZXIubWFuaWZlc3RDYWNoZS5kZWxldGUocmVtb3RlSW5mby5lbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgdW5sb2FkZWQgc2hhcmVkIGFuZCBpbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW90ZUluc0lkID0gcmVtb3RlSW5mby5idWlsZFZlcnNpb24gPyBzZGsuY29tcG9zZUtleVdpdGhTZXBhcmF0b3IocmVtb3RlSW5mby5uYW1lLCByZW1vdGVJbmZvLmJ1aWxkVmVyc2lvbikgOiByZW1vdGVJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3RlSW5zSW5kZXggPSBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fSU5TVEFOQ0VTX18uZmluZEluZGV4KGZ1bmN0aW9uKGlucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdGVJbmZvLmJ1aWxkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zLm9wdGlvbnMuaWQgPT09IHJlbW90ZUluc0lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnMubmFtZSA9PT0gcmVtb3RlSW5zSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3RlSW5zSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW90ZUlucyA9IEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19JTlNUQU5DRVNfX1tyZW1vdGVJbnNJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlSW5zSWQgPSByZW1vdGVJbnMub3B0aW9ucy5pZCB8fCByZW1vdGVJbnNJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2xvYmFsU2hhcmVTY29wZU1hcCA9IGdldEdsb2JhbFNoYXJlU2NvcGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNBbGxTaGFyZWROb3RVc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmVlZERlbGV0ZUtleXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhnbG9iYWxTaGFyZVNjb3BlTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGluc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhcmVTY29wZU1hcCA9IGdsb2JhbFNoYXJlU2NvcGVNYXBbaW5zdElkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZU1hcCAmJiBPYmplY3Qua2V5cyhzaGFyZVNjb3BlTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKHNoYXJlU2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFyZVNjb3BlVmFsID0gc2hhcmVTY29wZU1hcFtzaGFyZVNjb3BlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGVWYWwgJiYgT2JqZWN0LmtleXMoc2hhcmVTY29wZVZhbCkuZm9yRWFjaChmdW5jdGlvbihzaGFyZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hhcmVkUGtncyA9IHNoYXJlU2NvcGVWYWxbc2hhcmVOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWRQa2dzICYmIE9iamVjdC5rZXlzKHNoYXJlZFBrZ3MpLmZvckVhY2goZnVuY3Rpb24oc2hhcmVWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFyZWQgPSBzaGFyZWRQa2dzW3NoYXJlVmVyc2lvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFyZWQgJiYgKHR5cGVvZiBzaGFyZWQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVfb2Yoc2hhcmVkKSkgPT09ICdvYmplY3QnICYmIHNoYXJlZC5mcm9tID09PSByZW1vdGVJbmZvLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFyZWQubG9hZGVkIHx8IHNoYXJlZC5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkLnVzZUluID0gc2hhcmVkLnVzZUluLmZpbHRlcihmdW5jdGlvbih1c2VkSG9zdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZWRIb3N0TmFtZSAhPT0gcmVtb3RlSW5mby5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFyZWQudXNlSW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWxsU2hhcmVkTm90VXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lZWREZWxldGVLZXlzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVmVyc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lZWREZWxldGVLZXlzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVWZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBbGxTaGFyZWROb3RVc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW90ZUlucy5zaGFyZVNjb3BlTWFwID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnbG9iYWxTaGFyZVNjb3BlTWFwW3JlbW90ZUluc0lkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZERlbGV0ZUtleXMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3BhcmFtID0gX3NsaWNlZF90b19hcnJheShwYXJhbSwgNCksIGluc0lkID0gX3BhcmFtWzBdLCBzaGFyZVNjb3BlID0gX3BhcmFtWzFdLCBzaGFyZU5hbWUgPSBfcGFyYW1bMl0sIHNoYXJlVmVyc2lvbiA9IF9wYXJhbVszXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9nbG9iYWxTaGFyZVNjb3BlTWFwX2luc0lkX3NoYXJlU2NvcGVfc2hhcmVOYW1lLCBfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZF9zaGFyZVNjb3BlLCBfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF9nbG9iYWxTaGFyZVNjb3BlTWFwX2luc0lkID0gZ2xvYmFsU2hhcmVTY29wZU1hcFtpbnNJZF0pID09IG51bGwgPyB0cnVlIDogKF9nbG9iYWxTaGFyZVNjb3BlTWFwX2luc0lkX3NoYXJlU2NvcGUgPSBfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZFtzaGFyZVNjb3BlXSkgPT0gbnVsbCA/IHRydWUgOiAoX2dsb2JhbFNoYXJlU2NvcGVNYXBfaW5zSWRfc2hhcmVTY29wZV9zaGFyZU5hbWUgPSBfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZF9zaGFyZVNjb3BlW3NoYXJlTmFtZV0pID09IG51bGwgPyB0cnVlIDogZGVsZXRlIF9nbG9iYWxTaGFyZVNjb3BlTWFwX2luc0lkX3NoYXJlU2NvcGVfc2hhcmVOYW1lW3NoYXJlVmVyc2lvbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0lOU1RBTkNFU19fLnNwbGljZShyZW1vdGVJbnNJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaG9zdEdsb2JhbFNuYXBzaG90ID0gZ2V0R2xvYmFsUmVtb3RlSW5mbyhyZW1vdGUsIGhvc3QpLmhvc3RHbG9iYWxTbmFwc2hvdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChob3N0R2xvYmFsU25hcHNob3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3RlS2V5ID0gaG9zdEdsb2JhbFNuYXBzaG90ICYmICdyZW1vdGVzSW5mbycgaW4gaG9zdEdsb2JhbFNuYXBzaG90ICYmIGhvc3RHbG9iYWxTbmFwc2hvdC5yZW1vdGVzSW5mbyAmJiBnZXRJbmZvV2l0aG91dFR5cGUoaG9zdEdsb2JhbFNuYXBzaG90LnJlbW90ZXNJbmZvLCByZW1vdGUubmFtZSkua2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGhvc3RHbG9iYWxTbmFwc2hvdC5yZW1vdGVzSW5mb1tyZW1vdGVLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQm9vbGVhbihHbG9iYWwuX19GRURFUkFUSU9OX18uX19NQU5JRkVTVF9MT0FESU5HX19bcmVtb3RlS2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBHbG9iYWwuX19GRURFUkFUSU9OX18uX19NQU5JRkVTVF9MT0FESU5HX19bcmVtb3RlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3QubW9kdWxlQ2FjaGUuZGVsZXRlKHJlbW90ZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKCdyZW1vdmVSZW1vdGUgZmFpbDogJywgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKTtcbiAgICByZXR1cm4gUmVtb3RlSGFuZGxlcjtcbn0oKTtcbnZhciBVU0VfU05BUFNIT1QgPSB0eXBlb2YgRkVERVJBVElPTl9PUFRJTUlaRV9OT19TTkFQU0hPVF9QTFVHSU4gPT09ICdib29sZWFuJyA/ICFGRURFUkFUSU9OX09QVElNSVpFX05PX1NOQVBTSE9UX1BMVUdJTiA6IHRydWU7IC8vIERlZmF1bHQgdG8gdHJ1ZSAodXNlIHNuYXBzaG90KSB3aGVuIG5vdCBleHBsaWNpdGx5IGRlZmluZWRcbnZhciBGZWRlcmF0aW9uSG9zdCA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRmVkZXJhdGlvbkhvc3QodXNlck9wdGlvbnMpIHtcbiAgICAgICAgX2NsYXNzX2NhbGxfY2hlY2sodGhpcywgRmVkZXJhdGlvbkhvc3QpO1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IFBsdWdpblN5c3RlbSh7XG4gICAgICAgICAgICBiZWZvcmVJbml0OiBuZXcgU3luY1dhdGVyZmFsbEhvb2soJ2JlZm9yZUluaXQnKSxcbiAgICAgICAgICAgIGluaXQ6IG5ldyBTeW5jSG9vaygpLFxuICAgICAgICAgICAgLy8gbWF5YmUgd2lsbCBjaGFuZ2UsIHRlbXBvcmFyaWx5IGZvciBpbnRlcm5hbCB1c2Ugb25seVxuICAgICAgICAgICAgYmVmb3JlSW5pdENvbnRhaW5lcjogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnYmVmb3JlSW5pdENvbnRhaW5lcicpLFxuICAgICAgICAgICAgLy8gbWF5YmUgd2lsbCBjaGFuZ2UsIHRlbXBvcmFyaWx5IGZvciBpbnRlcm5hbCB1c2Ugb25seVxuICAgICAgICAgICAgaW5pdENvbnRhaW5lcjogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnaW5pdENvbnRhaW5lcicpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMTYuMFwiO1xuICAgICAgICB0aGlzLm1vZHVsZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlckhvb2sgPSBuZXcgUGx1Z2luU3lzdGVtKHtcbiAgICAgICAgICAgIC8vIEZJWE1FOiBtYXkgbm90IGJlIHN1aXRhYmxlICwgbm90IG9wZW4gdG8gdGhlIHB1YmxpYyB5ZXRcbiAgICAgICAgICAgIGdldE1vZHVsZUluZm86IG5ldyBTeW5jSG9vaygpLFxuICAgICAgICAgICAgY3JlYXRlU2NyaXB0OiBuZXcgU3luY0hvb2soKSxcbiAgICAgICAgICAgIGNyZWF0ZUxpbms6IG5ldyBTeW5jSG9vaygpLFxuICAgICAgICAgICAgZmV0Y2g6IG5ldyBBc3luY0hvb2soKSxcbiAgICAgICAgICAgIGxvYWRFbnRyeUVycm9yOiBuZXcgQXN5bmNIb29rKCksXG4gICAgICAgICAgICBnZXRNb2R1bGVGYWN0b3J5OiBuZXcgQXN5bmNIb29rKClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnJpZGdlSG9vayA9IG5ldyBQbHVnaW5TeXN0ZW0oe1xuICAgICAgICAgICAgYmVmb3JlQnJpZGdlUmVuZGVyOiBuZXcgU3luY0hvb2soKSxcbiAgICAgICAgICAgIGFmdGVyQnJpZGdlUmVuZGVyOiBuZXcgU3luY0hvb2soKSxcbiAgICAgICAgICAgIGJlZm9yZUJyaWRnZURlc3Ryb3k6IG5ldyBTeW5jSG9vaygpLFxuICAgICAgICAgICAgYWZ0ZXJCcmlkZ2VEZXN0cm95OiBuZXcgU3luY0hvb2soKVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHBsdWdpbnMgPSBVU0VfU05BUFNIT1QgPyBbXG4gICAgICAgICAgICBzbmFwc2hvdFBsdWdpbigpLFxuICAgICAgICAgICAgZ2VuZXJhdGVQcmVsb2FkQXNzZXRzUGx1Z2luKClcbiAgICAgICAgXSA6IFtdO1xuICAgICAgICAvLyBUT0RPOiBWYWxpZGF0ZSB0aGUgZGV0YWlscyBvZiB0aGUgb3B0aW9uc1xuICAgICAgICAvLyBJbml0aWFsaXplIG9wdGlvbnMgd2l0aCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBpZDogZ2V0QnVpbGRlcklkKCksXG4gICAgICAgICAgICBuYW1lOiB1c2VyT3B0aW9ucy5uYW1lLFxuICAgICAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgICAgICAgIHJlbW90ZXM6IFtdLFxuICAgICAgICAgICAgc2hhcmVkOiB7fSxcbiAgICAgICAgICAgIGluQnJvd3Nlcjogc2RrLmlzQnJvd3NlckVudigpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubmFtZSA9IHVzZXJPcHRpb25zLm5hbWU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgICAgICB0aGlzLnNuYXBzaG90SGFuZGxlciA9IG5ldyBTbmFwc2hvdEhhbmRsZXIodGhpcyk7XG4gICAgICAgIHRoaXMuc2hhcmVkSGFuZGxlciA9IG5ldyBTaGFyZWRIYW5kbGVyKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW90ZUhhbmRsZXIgPSBuZXcgUmVtb3RlSGFuZGxlcih0aGlzKTtcbiAgICAgICAgdGhpcy5zaGFyZVNjb3BlTWFwID0gdGhpcy5zaGFyZWRIYW5kbGVyLnNoYXJlU2NvcGVNYXA7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJQbHVnaW5zKF90b19jb25zdW1hYmxlX2FycmF5KGRlZmF1bHRPcHRpb25zLnBsdWdpbnMpLmNvbmNhdChfdG9fY29uc3VtYWJsZV9hcnJheSh1c2VyT3B0aW9ucy5wbHVnaW5zIHx8IFtdKSkpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmZvcm1hdE9wdGlvbnMoZGVmYXVsdE9wdGlvbnMsIHVzZXJPcHRpb25zKTtcbiAgICB9XG4gICAgX2NyZWF0ZV9jbGFzcyhGZWRlcmF0aW9uSG9zdCwgW1xuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiaW5pdE9wdGlvbnNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0T3B0aW9ucyh1c2VyT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQbHVnaW5zKHVzZXJPcHRpb25zLnBsdWdpbnMpO1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5mb3JtYXRPcHRpb25zKHRoaXMub3B0aW9ucywgdXNlck9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJsb2FkU2hhcmVcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkU2hhcmUocGtnTmFtZSwgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2hhcmVkSGFuZGxlci5sb2FkU2hhcmUocGtnTmFtZSwgZXh0cmFPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gVGhlIGxpYiBmdW5jdGlvbiB3aWxsIG9ubHkgYmUgYXZhaWxhYmxlIGlmIHRoZSBzaGFyZWQgc2V0IGJ5IGVhZ2VyIG9yIHJ1bnRpbWUgaW5pdCBpcyBzZXQgb3IgdGhlIHNoYXJlZCBpcyBzdWNjZXNzZnVsbHkgbG9hZGVkLlxuICAgICAgICAgICAgLy8gMS4gSWYgdGhlIGxvYWRlZCBzaGFyZWQgYWxyZWFkeSBleGlzdHMgZ2xvYmFsbHksIHRoZW4gaXQgd2lsbCBiZSByZXVzZWRcbiAgICAgICAgICAgIC8vIDIuIElmIGxpYiBleGlzdHMgaW4gbG9jYWwgc2hhcmVkLCBpdCB3aWxsIGJlIHVzZWQgZGlyZWN0bHlcbiAgICAgICAgICAgIC8vIDMuIElmIHRoZSBsb2NhbCBnZXQgcmV0dXJucyBzb21ldGhpbmcgb3RoZXIgdGhhbiBQcm9taXNlLCB0aGVuIGl0IHdpbGwgYmUgdXNlZCBkaXJlY3RseVxuICAgICAgICAgICAga2V5OiBcImxvYWRTaGFyZVN5bmNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkU2hhcmVTeW5jKHBrZ05hbWUsIGV4dHJhT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYXJlZEhhbmRsZXIubG9hZFNoYXJlU3luYyhwa2dOYW1lLCBleHRyYU9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiaW5pdGlhbGl6ZVNoYXJpbmdcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0aWFsaXplU2hhcmluZygpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2hhcmVTY29wZU5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1swXSA6IERFRkFVTFRfU0NPUEUsIGV4dHJhT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYXJlZEhhbmRsZXIuaW5pdGlhbGl6ZVNoYXJpbmcoc2hhcmVTY29wZU5hbWUsIGV4dHJhT3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJpbml0UmF3Q29udGFpbmVyXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdFJhd0NvbnRhaW5lcihuYW1lLCB1cmwsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHZhciByZW1vdGVJbmZvID0gZ2V0UmVtb3RlSW5mbyh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5OiB1cmxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgbW9kdWxlID0gbmV3IE1vZHVsZSh7XG4gICAgICAgICAgICAgICAgICAgIGhvc3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUluZm86IHJlbW90ZUluZm9cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtb2R1bGUucmVtb3RlRW50cnlFeHBvcnRzID0gY29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlQ2FjaGUuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImxvYWRSZW1vdGVcIixcbiAgICAgICAgICAgIHZhbHVlOiAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxvYWRSZW1vdGUoaWQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RzX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdGVIYW5kbGVyLmxvYWRSZW1vdGUoaWQsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwicHJlbG9hZFJlbW90ZVwiLFxuICAgICAgICAgICAgdmFsdWU6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG4gICAgICAgICAgICBmdW5jdGlvbiBwcmVsb2FkUmVtb3RlKHByZWxvYWRPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICByZXR1cm4gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVtb3RlSGFuZGxlci5wcmVsb2FkUmVtb3RlKHByZWxvYWRPcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImluaXRTaGFyZVNjb3BlTWFwXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdFNoYXJlU2NvcGVNYXAoc2NvcGVOYW1lLCBzaGFyZVNjb3BlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4dHJhT3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRIYW5kbGVyLmluaXRTaGFyZVNjb3BlTWFwKHNjb3BlTmFtZSwgc2hhcmVTY29wZSwgZXh0cmFPcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImZvcm1hdE9wdGlvbnNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRPcHRpb25zKGdsb2JhbE9wdGlvbnMsIHVzZXJPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNoYXJlZCA9IGZvcm1hdFNoYXJlQ29uZmlncyhnbG9iYWxPcHRpb25zLCB1c2VyT3B0aW9ucykuc2hhcmVkO1xuICAgICAgICAgICAgICAgIHZhciBfdGhpc19ob29rc19saWZlY3ljbGVfYmVmb3JlSW5pdF9lbWl0ID0gdGhpcy5ob29rcy5saWZlY3ljbGUuYmVmb3JlSW5pdC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB1c2VyT3B0aW9uczogdXNlck9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IGdsb2JhbE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mbzogc2hhcmVkXG4gICAgICAgICAgICAgICAgfSksIHVzZXJPcHRpb25zUmVzID0gX3RoaXNfaG9va3NfbGlmZWN5Y2xlX2JlZm9yZUluaXRfZW1pdC51c2VyT3B0aW9ucywgZ2xvYmFsT3B0aW9uc1JlcyA9IF90aGlzX2hvb2tzX2xpZmVjeWNsZV9iZWZvcmVJbml0X2VtaXQub3B0aW9ucztcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3RlcyA9IHRoaXMucmVtb3RlSGFuZGxlci5mb3JtYXRBbmRSZWdpc3RlclJlbW90ZShnbG9iYWxPcHRpb25zUmVzLCB1c2VyT3B0aW9uc1Jlcyk7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzX3NoYXJlZEhhbmRsZXJfcmVnaXN0ZXJTaGFyZWQgPSB0aGlzLnNoYXJlZEhhbmRsZXIucmVnaXN0ZXJTaGFyZWQoZ2xvYmFsT3B0aW9uc1JlcywgdXNlck9wdGlvbnNSZXMpLCBoYW5kbGVkU2hhcmVkID0gX3RoaXNfc2hhcmVkSGFuZGxlcl9yZWdpc3RlclNoYXJlZC5zaGFyZWQ7XG4gICAgICAgICAgICAgICAgdmFyIHBsdWdpbnMgPSBfdG9fY29uc3VtYWJsZV9hcnJheShnbG9iYWxPcHRpb25zUmVzLnBsdWdpbnMpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VyT3B0aW9uc1Jlcy5wbHVnaW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJPcHRpb25zUmVzLnBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGx1Z2lucy5pbmNsdWRlcyhwbHVnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uc1JlcyA9IHBvbHlmaWxscy5fZXh0ZW5kcyh7fSwgZ2xvYmFsT3B0aW9ucywgdXNlck9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlczogcmVtb3RlcyxcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkOiBoYW5kbGVkU2hhcmVkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy5saWZlY3ljbGUuaW5pdC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zUmVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnNSZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJyZWdpc3RlclBsdWdpbnNcIixcbiAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlclBsdWdpbnMxKHBsdWdpbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGx1Z2luUmVzID0gcmVnaXN0ZXJQbHVnaW5zKHBsdWdpbnMsIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob29rcyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdGVIYW5kbGVyLmhvb2tzLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEhhbmRsZXIuaG9va3MsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc25hcHNob3RIYW5kbGVyLmhvb2tzLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlckhvb2ssXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJpZGdlSG9va1xuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBsdWdpblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wbHVnaW5zID0gdGhpcy5vcHRpb25zLnBsdWdpbnMucmVkdWNlKGZ1bmN0aW9uKHJlcywgcGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGx1Z2luKSByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzICYmICFyZXMuZmluZChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lID09PSBwbHVnaW4ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5wdXNoKHBsdWdpbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICB9LCBwbHVnaW5SZXMgfHwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwicmVnaXN0ZXJSZW1vdGVzXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJSZW1vdGVzKHJlbW90ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVIYW5kbGVyLnJlZ2lzdGVyUmVtb3RlcyhyZW1vdGVzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF0pO1xuICAgIHJldHVybiBGZWRlcmF0aW9uSG9zdDtcbn0oKTtcbnZhciBpbmRleCA9IC8qI19fUFVSRV9fKi8gT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsXG59KTtcbmV4cG9ydHMubG9hZFNjcmlwdCA9IHNkay5sb2FkU2NyaXB0O1xuZXhwb3J0cy5sb2FkU2NyaXB0Tm9kZSA9IHNkay5sb2FkU2NyaXB0Tm9kZTtcbmV4cG9ydHMuQ3VycmVudEdsb2JhbCA9IEN1cnJlbnRHbG9iYWw7XG5leHBvcnRzLkZlZGVyYXRpb25Ib3N0ID0gRmVkZXJhdGlvbkhvc3Q7XG5leHBvcnRzLkdsb2JhbCA9IEdsb2JhbDtcbmV4cG9ydHMuTW9kdWxlID0gTW9kdWxlO1xuZXhwb3J0cy5hZGRHbG9iYWxTbmFwc2hvdCA9IGFkZEdsb2JhbFNuYXBzaG90O1xuZXhwb3J0cy5hc3NlcnQgPSBhc3NlcnQ7XG5leHBvcnRzLmdldEdsb2JhbEZlZGVyYXRpb25Db25zdHJ1Y3RvciA9IGdldEdsb2JhbEZlZGVyYXRpb25Db25zdHJ1Y3RvcjtcbmV4cG9ydHMuZ2V0R2xvYmFsU25hcHNob3QgPSBnZXRHbG9iYWxTbmFwc2hvdDtcbmV4cG9ydHMuZ2V0SW5mb1dpdGhvdXRUeXBlID0gZ2V0SW5mb1dpdGhvdXRUeXBlO1xuZXhwb3J0cy5nZXRSZWdpc3RlcmVkU2hhcmUgPSBnZXRSZWdpc3RlcmVkU2hhcmU7XG5leHBvcnRzLmdldFJlbW90ZUVudHJ5ID0gZ2V0UmVtb3RlRW50cnk7XG5leHBvcnRzLmdldFJlbW90ZUluZm8gPSBnZXRSZW1vdGVJbmZvO1xuZXhwb3J0cy5oZWxwZXJzID0gaGVscGVycztcbmV4cG9ydHMuaXNTdGF0aWNSZXNvdXJjZXNFcXVhbCA9IGlzU3RhdGljUmVzb3VyY2VzRXF1YWw7XG5leHBvcnRzLm1hdGNoUmVtb3RlV2l0aE5hbWVBbmRFeHBvc2UgPSBtYXRjaFJlbW90ZVdpdGhOYW1lQW5kRXhwb3NlO1xuZXhwb3J0cy5yZWdpc3Rlckdsb2JhbFBsdWdpbnMgPSByZWdpc3Rlckdsb2JhbFBsdWdpbnM7XG5leHBvcnRzLnJlc2V0RmVkZXJhdGlvbkdsb2JhbEluZm8gPSByZXNldEZlZGVyYXRpb25HbG9iYWxJbmZvO1xuZXhwb3J0cy5zYWZlV3JhcHBlciA9IHNhZmVXcmFwcGVyO1xuZXhwb3J0cy5zYXRpc2Z5ID0gc2F0aXNmeTtcbmV4cG9ydHMuc2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yID0gc2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yO1xuZXhwb3J0cy5zZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2UgPSBzZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2U7XG5leHBvcnRzLnR5cGVzID0gaW5kZXg7XG4iLCIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBzb3VyY2UpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX29iamVjdF93aXRob3V0X3Byb3BlcnRpZXNfbG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICAgIHZhciB0YXJnZXQgPSB7fTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmV4cG9ydHMuX2V4dGVuZHMgPSBfZXh0ZW5kcztcbmV4cG9ydHMuX29iamVjdF93aXRob3V0X3Byb3BlcnRpZXNfbG9vc2UgPSBfb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllc19sb29zZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBydW50aW1lQ29yZSA9IHJlcXVpcmUoJ0Btb2R1bGUtZmVkZXJhdGlvbi9ydW50aW1lLWNvcmUnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuY2pzLmNqcycpO1xudmFyIEZlZGVyYXRpb25JbnN0YW5jZSA9IG51bGw7XG5mdW5jdGlvbiBpbml0KG9wdGlvbnMpIHtcbiAgICAvLyBSZXRyaWV2ZSB0aGUgc2FtZSBpbnN0YW5jZSB3aXRoIHRoZSBzYW1lIG5hbWVcbiAgICB2YXIgaW5zdGFuY2UgPSB1dGlscy5nZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2Uob3B0aW9ucy5uYW1lLCBvcHRpb25zLnZlcnNpb24pO1xuICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgLy8gUmV0cmlldmUgZGVidWcgY29uc3RydWN0b3JcbiAgICAgICAgdmFyIEZlZGVyYXRpb25Db25zdHJ1Y3RvciA9IHJ1bnRpbWVDb3JlLmdldEdsb2JhbEZlZGVyYXRpb25Db25zdHJ1Y3RvcigpIHx8IHJ1bnRpbWVDb3JlLkZlZGVyYXRpb25Ib3N0O1xuICAgICAgICBGZWRlcmF0aW9uSW5zdGFuY2UgPSBuZXcgRmVkZXJhdGlvbkNvbnN0cnVjdG9yKG9wdGlvbnMpO1xuICAgICAgICBydW50aW1lQ29yZS5zZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2UoRmVkZXJhdGlvbkluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIEZlZGVyYXRpb25JbnN0YW5jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBvcHRpb25zXG4gICAgICAgIGluc3RhbmNlLmluaXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBpZiAoIUZlZGVyYXRpb25JbnN0YW5jZSkge1xuICAgICAgICAgICAgRmVkZXJhdGlvbkluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvYWRSZW1vdGUoKSB7XG4gICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBydW50aW1lQ29yZS5hc3NlcnQoRmVkZXJhdGlvbkluc3RhbmNlLCAnUGxlYXNlIGNhbGwgaW5pdCBmaXJzdCcpO1xuICAgIHZhciBsb2FkUmVtb3RlMSA9IEZlZGVyYXRpb25JbnN0YW5jZS5sb2FkUmVtb3RlO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgcmV0dXJuIGxvYWRSZW1vdGUxLmFwcGx5KEZlZGVyYXRpb25JbnN0YW5jZSwgYXJncyk7XG59XG5mdW5jdGlvbiBsb2FkU2hhcmUoKSB7XG4gICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBydW50aW1lQ29yZS5hc3NlcnQoRmVkZXJhdGlvbkluc3RhbmNlLCAnUGxlYXNlIGNhbGwgaW5pdCBmaXJzdCcpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgdmFyIGxvYWRTaGFyZTEgPSBGZWRlcmF0aW9uSW5zdGFuY2UubG9hZFNoYXJlO1xuICAgIHJldHVybiBsb2FkU2hhcmUxLmFwcGx5KEZlZGVyYXRpb25JbnN0YW5jZSwgYXJncyk7XG59XG5mdW5jdGlvbiBsb2FkU2hhcmVTeW5jKCkge1xuICAgIGZvcih2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKXtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcnVudGltZUNvcmUuYXNzZXJ0KEZlZGVyYXRpb25JbnN0YW5jZSwgJ1BsZWFzZSBjYWxsIGluaXQgZmlyc3QnKTtcbiAgICB2YXIgbG9hZFNoYXJlU3luYzEgPSBGZWRlcmF0aW9uSW5zdGFuY2UubG9hZFNoYXJlU3luYztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgIHJldHVybiBsb2FkU2hhcmVTeW5jMS5hcHBseShGZWRlcmF0aW9uSW5zdGFuY2UsIGFyZ3MpO1xufVxuZnVuY3Rpb24gcHJlbG9hZFJlbW90ZSgpIHtcbiAgICBmb3IodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKyl7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJ1bnRpbWVDb3JlLmFzc2VydChGZWRlcmF0aW9uSW5zdGFuY2UsICdQbGVhc2UgY2FsbCBpbml0IGZpcnN0Jyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICByZXR1cm4gRmVkZXJhdGlvbkluc3RhbmNlLnByZWxvYWRSZW1vdGUuYXBwbHkoRmVkZXJhdGlvbkluc3RhbmNlLCBhcmdzKTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyUmVtb3RlcygpIHtcbiAgICBmb3IodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKyl7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJ1bnRpbWVDb3JlLmFzc2VydChGZWRlcmF0aW9uSW5zdGFuY2UsICdQbGVhc2UgY2FsbCBpbml0IGZpcnN0Jyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICByZXR1cm4gRmVkZXJhdGlvbkluc3RhbmNlLnJlZ2lzdGVyUmVtb3Rlcy5hcHBseShGZWRlcmF0aW9uSW5zdGFuY2UsIGFyZ3MpO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW5zKCkge1xuICAgIGZvcih2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKXtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcnVudGltZUNvcmUuYXNzZXJ0KEZlZGVyYXRpb25JbnN0YW5jZSwgJ1BsZWFzZSBjYWxsIGluaXQgZmlyc3QnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgIHJldHVybiBGZWRlcmF0aW9uSW5zdGFuY2UucmVnaXN0ZXJQbHVnaW5zLmFwcGx5KEZlZGVyYXRpb25JbnN0YW5jZSwgYXJncyk7XG59XG5mdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gRmVkZXJhdGlvbkluc3RhbmNlO1xufVxuLy8gSW5qZWN0IGZvciBkZWJ1Z1xucnVudGltZUNvcmUuc2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yKHJ1bnRpbWVDb3JlLkZlZGVyYXRpb25Ib3N0KTtcbmV4cG9ydHMuRmVkZXJhdGlvbkhvc3QgPSBydW50aW1lQ29yZS5GZWRlcmF0aW9uSG9zdDtcbmV4cG9ydHMuTW9kdWxlID0gcnVudGltZUNvcmUuTW9kdWxlO1xuZXhwb3J0cy5nZXRSZW1vdGVFbnRyeSA9IHJ1bnRpbWVDb3JlLmdldFJlbW90ZUVudHJ5O1xuZXhwb3J0cy5nZXRSZW1vdGVJbmZvID0gcnVudGltZUNvcmUuZ2V0UmVtb3RlSW5mbztcbmV4cG9ydHMubG9hZFNjcmlwdCA9IHJ1bnRpbWVDb3JlLmxvYWRTY3JpcHQ7XG5leHBvcnRzLmxvYWRTY3JpcHROb2RlID0gcnVudGltZUNvcmUubG9hZFNjcmlwdE5vZGU7XG5leHBvcnRzLnJlZ2lzdGVyR2xvYmFsUGx1Z2lucyA9IHJ1bnRpbWVDb3JlLnJlZ2lzdGVyR2xvYmFsUGx1Z2lucztcbmV4cG9ydHMuZ2V0SW5zdGFuY2UgPSBnZXRJbnN0YW5jZTtcbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvYWRSZW1vdGUgPSBsb2FkUmVtb3RlO1xuZXhwb3J0cy5sb2FkU2hhcmUgPSBsb2FkU2hhcmU7XG5leHBvcnRzLmxvYWRTaGFyZVN5bmMgPSBsb2FkU2hhcmVTeW5jO1xuZXhwb3J0cy5wcmVsb2FkUmVtb3RlID0gcHJlbG9hZFJlbW90ZTtcbmV4cG9ydHMucmVnaXN0ZXJQbHVnaW5zID0gcmVnaXN0ZXJQbHVnaW5zO1xuZXhwb3J0cy5yZWdpc3RlclJlbW90ZXMgPSByZWdpc3RlclJlbW90ZXM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcnVudGltZUNvcmUgPSByZXF1aXJlKCdAbW9kdWxlLWZlZGVyYXRpb24vcnVudGltZS1jb3JlJyk7XG4vLyBpbmplY3RlZCBieSBidW5kbGVyLCBzbyBpdCBjYW4gbm90IHVzZSBydW50aW1lLWNvcmUgc3R1ZmZcbmZ1bmN0aW9uIGdldEJ1aWxkZXJJZCgpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICByZXR1cm4gdHlwZW9mIEZFREVSQVRJT05fQlVJTERfSURFTlRJRklFUiAhPT0gJ3VuZGVmaW5lZCcgPyBGRURFUkFUSU9OX0JVSUxEX0lERU5USUZJRVIgOiAnJztcbn1cbmZ1bmN0aW9uIGdldEdsb2JhbEZlZGVyYXRpb25JbnN0YW5jZShuYW1lLCB2ZXJzaW9uKSB7XG4gICAgdmFyIGJ1aWxkSWQgPSBnZXRCdWlsZGVySWQoKTtcbiAgICByZXR1cm4gcnVudGltZUNvcmUuQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0lOU1RBTkNFU19fLmZpbmQoZnVuY3Rpb24oR01JbnN0YW5jZSkge1xuICAgICAgICBpZiAoYnVpbGRJZCAmJiBHTUluc3RhbmNlLm9wdGlvbnMuaWQgPT09IGdldEJ1aWxkZXJJZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoR01JbnN0YW5jZS5vcHRpb25zLm5hbWUgPT09IG5hbWUgJiYgIUdNSW5zdGFuY2Uub3B0aW9ucy52ZXJzaW9uICYmICF2ZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoR01JbnN0YW5jZS5vcHRpb25zLm5hbWUgPT09IG5hbWUgJiYgdmVyc2lvbiAmJiBHTUluc3RhbmNlLm9wdGlvbnMudmVyc2lvbiA9PT0gdmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xufVxuZXhwb3J0cy5nZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2UgPSBnZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2U7XG4iLCIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBfYXJyYXlfbGlrZV90b19hcnJheShhcnIsIGxlbikge1xuICAgIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIGZvcih2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKWFycjJbaV0gPSBhcnJbaV07XG4gICAgcmV0dXJuIGFycjI7XG59XG5mdW5jdGlvbiBfYXJyYXlfd2l0aF9ob2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuZnVuY3Rpb24gX2FycmF5X3dpdGhvdXRfaG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheV9saWtlX3RvX2FycmF5KGFycik7XG59XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgICAgICByZWplY3QoZXJyb3IxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG59XG5mdW5jdGlvbiBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9jbGFzc19jYWxsX2NoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZV9jbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuZnVuY3Rpb24gX2RlZmluZV9wcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2luc3RhbmNlb2YobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAocmlnaHQgIT0gbnVsbCAmJiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIHJpZ2h0W1N5bWJvbC5oYXNJbnN0YW5jZV0pIHtcbiAgICAgICAgcmV0dXJuICEhcmlnaHRbU3ltYm9sLmhhc0luc3RhbmNlXShsZWZ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGVmdCBpbnN0YW5jZW9mIHJpZ2h0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZV90b19hcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5mdW5jdGlvbiBfaXRlcmFibGVfdG9fYXJyYXlfbGltaXQoYXJyLCBpKSB7XG4gICAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuICAgIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfcywgX2U7XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKXtcbiAgICAgICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2QgPSB0cnVlO1xuICAgICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9hcnI7XG59XG5mdW5jdGlvbiBfbm9uX2l0ZXJhYmxlX3Jlc3QoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZnVuY3Rpb24gX25vbl9pdGVyYWJsZV9zcHJlYWQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIF9zbGljZWRfdG9fYXJyYXkoYXJyLCBpKSB7XG4gICAgcmV0dXJuIF9hcnJheV93aXRoX2hvbGVzKGFycikgfHwgX2l0ZXJhYmxlX3RvX2FycmF5X2xpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkX2l0ZXJhYmxlX3RvX2FycmF5KGFyciwgaSkgfHwgX25vbl9pdGVyYWJsZV9yZXN0KCk7XG59XG5mdW5jdGlvbiBfdG9fYXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheV93aXRoX2hvbGVzKGFycikgfHwgX2l0ZXJhYmxlX3RvX2FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkX2l0ZXJhYmxlX3RvX2FycmF5KGFycikgfHwgX25vbl9pdGVyYWJsZV9yZXN0KCk7XG59XG5mdW5jdGlvbiBfdG9fY29uc3VtYWJsZV9hcnJheShhcnIpIHtcbiAgICByZXR1cm4gX2FycmF5X3dpdGhvdXRfaG9sZXMoYXJyKSB8fCBfaXRlcmFibGVfdG9fYXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRfaXRlcmFibGVfdG9fYXJyYXkoYXJyKSB8fCBfbm9uX2l0ZXJhYmxlX3NwcmVhZCgpO1xufVxuZnVuY3Rpb24gX3R5cGVfb2Yob2JqKSB7XG4gICAgXCJAc3djL2hlbHBlcnMgLSB0eXBlb2ZcIjtcbiAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZF9pdGVyYWJsZV90b19hcnJheShvLCBtaW5MZW4pIHtcbiAgICBpZiAoIW8pIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlfbGlrZV90b19hcnJheShvLCBtaW5MZW4pO1xuICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICAgIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5X2xpa2VfdG9fYXJyYXkobywgbWluTGVuKTtcbn1cbmZ1bmN0aW9uIF90c19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBmLCB5LCB0LCBnLCBfID0ge1xuICAgICAgICBsYWJlbDogMCxcbiAgICAgICAgc2VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodFswXSAmIDEpIHRocm93IHRbMV07XG4gICAgICAgICAgICByZXR1cm4gdFsxXTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJ5czogW10sXG4gICAgICAgIG9wczogW11cbiAgICB9O1xuICAgIHJldHVybiBnID0ge1xuICAgICAgICBuZXh0OiB2ZXJiKDApLFxuICAgICAgICBcInRocm93XCI6IHZlcmIoMSksXG4gICAgICAgIFwicmV0dXJuXCI6IHZlcmIoMilcbiAgICB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKFtcbiAgICAgICAgICAgICAgICBuLFxuICAgICAgICAgICAgICAgIHZcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUoXyl0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtcbiAgICAgICAgICAgICAgICBvcFswXSAmIDIsXG4gICAgICAgICAgICAgICAgdC52YWx1ZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHN3aXRjaChvcFswXSl7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdCA9IG9wO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIF8ubGFiZWwrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBfLmxhYmVsKys7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBvcFsxXTtcbiAgICAgICAgICAgICAgICAgICAgb3AgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgb3AgPSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsID0gb3BbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwgPSB0WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwgPSB0WzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHMucHVzaChvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgb3AgPSBbXG4gICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICBlXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgIGYgPSB0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cbn1cbnZhciBwb2x5ZmlsbHMgPSByZXF1aXJlKCcuL3BvbHlmaWxscy5janMuY2pzJyk7XG52YXIgRmVkZXJhdGlvbk1vZHVsZU1hbmlmZXN0ID0gJ2ZlZGVyYXRpb24tbWFuaWZlc3QuanNvbic7XG52YXIgTUFOSUZFU1RfRVhUID0gJy5qc29uJztcbnZhciBCUk9XU0VSX0xPR19LRVkgPSAnRkVERVJBVElPTl9ERUJVRyc7XG52YXIgTmFtZVRyYW5zZm9ybVN5bWJvbCA9IHtcbiAgICBBVDogJ0AnLFxuICAgIEhZUEhFTjogJy0nLFxuICAgIFNMQVNIOiAnLydcbn07XG52YXIgX29iajtcbnZhciBOYW1lVHJhbnNmb3JtTWFwID0gKF9vYmogPSB7fSwgX2RlZmluZV9wcm9wZXJ0eShfb2JqLCBOYW1lVHJhbnNmb3JtU3ltYm9sLkFULCAnc2NvcGVfJyksIF9kZWZpbmVfcHJvcGVydHkoX29iaiwgTmFtZVRyYW5zZm9ybVN5bWJvbC5IWVBIRU4sICdfJyksIF9kZWZpbmVfcHJvcGVydHkoX29iaiwgTmFtZVRyYW5zZm9ybVN5bWJvbC5TTEFTSCwgJ19fJyksIF9vYmopO1xudmFyIF9vYmoxO1xudmFyIEVuY29kZWROYW1lVHJhbnNmb3JtTWFwID0gKF9vYmoxID0ge30sIF9kZWZpbmVfcHJvcGVydHkoX29iajEsIE5hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5BVF0sIE5hbWVUcmFuc2Zvcm1TeW1ib2wuQVQpLCBfZGVmaW5lX3Byb3BlcnR5KF9vYmoxLCBOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuSFlQSEVOXSwgTmFtZVRyYW5zZm9ybVN5bWJvbC5IWVBIRU4pLCBfZGVmaW5lX3Byb3BlcnR5KF9vYmoxLCBOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuU0xBU0hdLCBOYW1lVHJhbnNmb3JtU3ltYm9sLlNMQVNIKSwgX29iajEpO1xudmFyIFNFUEFSQVRPUiA9ICc6JztcbnZhciBNYW5pZmVzdEZpbGVOYW1lID0gJ21mLW1hbmlmZXN0Lmpzb24nO1xudmFyIFN0YXRzRmlsZU5hbWUgPSAnbWYtc3RhdHMuanNvbic7XG52YXIgTUZNb2R1bGVUeXBlID0ge1xuICAgIE5QTTogJ25wbScsXG4gICAgQVBQOiAnYXBwJ1xufTtcbnZhciBNT0RVTEVfREVWVE9PTF9JREVOVElGSUVSID0gJ19fTUZfREVWVE9PTFNfTU9EVUxFX0lORk9fXyc7XG52YXIgRU5DT0RFX05BTUVfUFJFRklYID0gJ0VOQ09ERV9OQU1FX1BSRUZJWCc7XG52YXIgVEVNUF9ESVIgPSAnLmZlZGVyYXRpb24nO1xudmFyIE1GUHJlZmV0Y2hDb21tb24gPSB7XG4gICAgaWRlbnRpZmllcjogJ01GRGF0YVByZWZldGNoJyxcbiAgICBnbG9iYWxLZXk6ICdfX1BSRUZFVENIX18nLFxuICAgIGxpYnJhcnk6ICdtZi1kYXRhLXByZWZldGNoJyxcbiAgICBleHBvcnRzS2V5OiAnX19QUkVGRVRDSF9FWFBPUlRTX18nLFxuICAgIGZpbGVOYW1lOiAnYm9vdHN0cmFwLmpzJ1xufTtcbnZhciBDb250YWluZXJQbHVnaW4gPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbFxufSk7XG52YXIgQ29udGFpbmVyUmVmZXJlbmNlUGx1Z2luID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGxcbn0pO1xudmFyIE1vZHVsZUZlZGVyYXRpb25QbHVnaW4gPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbFxufSk7XG52YXIgU2hhcmVQbHVnaW4gPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbFxufSk7XG5mdW5jdGlvbiBpc0Jyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xufVxuZnVuY3Rpb24gaXNSZWFjdE5hdGl2ZUVudigpIHtcbiAgICB2YXIgX25hdmlnYXRvcjtcbiAgICByZXR1cm4gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKChfbmF2aWdhdG9yID0gbmF2aWdhdG9yKSA9PSBudWxsID8gdm9pZCAwIDogX25hdmlnYXRvci5wcm9kdWN0KSA9PT0gJ1JlYWN0TmF0aXZlJztcbn1cbmZ1bmN0aW9uIGlzQnJvd3NlckRlYnVnKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChpc0Jyb3dzZXJFbnYoKSAmJiB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShCUk9XU0VSX0xPR19LRVkpKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzRGVidWdNb2RlKCkge1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnZbJ0ZFREVSQVRJT05fREVCVUcnXSkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihwcm9jZXNzLmVudlsnRkVERVJBVElPTl9ERUJVRyddKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBGRURFUkFUSU9OX0RFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBCb29sZWFuKEZFREVSQVRJT05fREVCVUcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaXNCcm93c2VyRGVidWcoKTtcbn1cbnZhciBnZXRQcm9jZXNzRW52ID0gZnVuY3Rpb24gZ2V0UHJvY2Vzc0VudjEoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudiA/IHByb2Nlc3MuZW52IDoge307XG59O1xudmFyIExPR19DQVRFR09SWSA9ICdbIEZlZGVyYXRpb24gUnVudGltZSBdJztcbi8vIGVudHJ5OiBuYW1lOnZlcnNpb24gICB2ZXJzaW9uIDogMS4wLjAgfCBeMS4yLjNcbi8vIGVudHJ5OiBuYW1lOmVudHJ5ICBlbnRyeTogIGh0dHBzOi8vbG9jYWxob3N0OjkwMDAvZmVkZXJhdGlvbi1tYW5pZmVzdC5qc29uXG52YXIgcGFyc2VFbnRyeSA9IGZ1bmN0aW9uKHN0ciwgZGV2VmVyT3JVcmwpIHtcbiAgICB2YXIgc2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB2b2lkIDAgPyBhcmd1bWVudHNbMl0gOiBTRVBBUkFUT1I7XG4gICAgdmFyIHN0clNwbGl0ID0gc3RyLnNwbGl0KHNlcGFyYXRvcik7XG4gICAgdmFyIGRldlZlcnNpb25PclVybCA9IGdldFByb2Nlc3NFbnYoKVsnTk9ERV9FTlYnXSA9PT0gJ2RldmVsb3BtZW50JyAmJiBkZXZWZXJPclVybDtcbiAgICB2YXIgZGVmYXVsdFZlcnNpb24gPSAnKic7XG4gICAgdmFyIGlzRW50cnkgPSBmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBzLnN0YXJ0c1dpdGgoJ2h0dHAnKSB8fCBzLmluY2x1ZGVzKE1BTklGRVNUX0VYVCk7XG4gICAgfTtcbiAgICAvLyBDaGVjayBpZiB0aGUgc3RyaW5nIHN0YXJ0cyB3aXRoIGEgdHlwZVxuICAgIGlmIChzdHJTcGxpdC5sZW5ndGggPj0gMikge1xuICAgICAgICB2YXIgX3N0clNwbGl0ID0gX3RvX2FycmF5KHN0clNwbGl0KSwgbmFtZSA9IF9zdHJTcGxpdFswXSwgdmVyc2lvbk9yRW50cnlBcnIgPSBfc3RyU3BsaXQuc2xpY2UoMSk7XG4gICAgICAgIC8vIEBuYW1lQG1hbmlmZXN0LXVybC5qc29uXG4gICAgICAgIGlmIChzdHIuc3RhcnRzV2l0aChzZXBhcmF0b3IpKSB7XG4gICAgICAgICAgICBuYW1lID0gc3RyU3BsaXQuc2xpY2UoMCwgMikuam9pbihzZXBhcmF0b3IpO1xuICAgICAgICAgICAgdmVyc2lvbk9yRW50cnlBcnIgPSBbXG4gICAgICAgICAgICAgICAgZGV2VmVyc2lvbk9yVXJsIHx8IHN0clNwbGl0LnNsaWNlKDIpLmpvaW4oc2VwYXJhdG9yKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmVyc2lvbk9yRW50cnkgPSBkZXZWZXJzaW9uT3JVcmwgfHwgdmVyc2lvbk9yRW50cnlBcnIuam9pbihzZXBhcmF0b3IpO1xuICAgICAgICBpZiAoaXNFbnRyeSh2ZXJzaW9uT3JFbnRyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBlbnRyeTogdmVyc2lvbk9yRW50cnlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBcHBseSB2ZXJzaW9uIHJ1bGVcbiAgICAgICAgICAgIC8vIGRldlZlcnNpb25PclVybCA9PiBpbnB1dFZlcnNpb24gPT4gZGVmYXVsdFZlcnNpb25cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uT3JFbnRyeSB8fCBkZWZhdWx0VmVyc2lvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RyU3BsaXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBfc3RyU3BsaXQxID0gX3NsaWNlZF90b19hcnJheShzdHJTcGxpdCwgMSksIG5hbWUxID0gX3N0clNwbGl0MVswXTtcbiAgICAgICAgaWYgKGRldlZlcnNpb25PclVybCAmJiBpc0VudHJ5KGRldlZlcnNpb25PclVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZTEsXG4gICAgICAgICAgICAgICAgZW50cnk6IGRldlZlcnNpb25PclVybFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbmFtZTEsXG4gICAgICAgICAgICB2ZXJzaW9uOiBkZXZWZXJzaW9uT3JVcmwgfHwgZGVmYXVsdFZlcnNpb25cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBcIkludmFsaWQgZW50cnkgdmFsdWU6IFwiLmNvbmNhdChzdHIpO1xuICAgIH1cbn07XG52YXIgY29tcG9zZUtleVdpdGhTZXBhcmF0b3IgPSBmdW5jdGlvbiBjb21wb3NlS2V5V2l0aFNlcGFyYXRvcjEoKSB7XG4gICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICBpZiAoIWFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKHN1bSwgY3VyKSB7XG4gICAgICAgIGlmICghY3VyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3VtKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChzdW0pLmNvbmNhdChTRVBBUkFUT1IpLmNvbmNhdChjdXIpO1xuICAgIH0sICcnKTtcbn07XG52YXIgZW5jb2RlTmFtZSA9IGZ1bmN0aW9uIGVuY29kZU5hbWUxKG5hbWUpIHtcbiAgICB2YXIgcHJlZml4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB2b2lkIDAgPyBhcmd1bWVudHNbMV0gOiAnJywgd2l0aEV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGV4dCA9IHdpdGhFeHQgPyAnLmpzJyA6ICcnO1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQocHJlZml4KS5jb25jYXQobmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoTmFtZVRyYW5zZm9ybVN5bWJvbC5BVCksICdnJyksIE5hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5BVF0pLnJlcGxhY2UobmV3IFJlZ0V4cChcIlwiLmNvbmNhdChOYW1lVHJhbnNmb3JtU3ltYm9sLkhZUEhFTiksICdnJyksIE5hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5IWVBIRU5dKS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoTmFtZVRyYW5zZm9ybVN5bWJvbC5TTEFTSCksICdnJyksIE5hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5TTEFTSF0pKS5jb25jYXQoZXh0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbn07XG52YXIgZGVjb2RlTmFtZSA9IGZ1bmN0aW9uIGRlY29kZU5hbWUxKG5hbWUsIHByZWZpeCwgd2l0aEV4dCkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBkZWNvZGVkTmFtZSA9IG5hbWU7XG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICAgIGlmICghZGVjb2RlZE5hbWUuc3RhcnRzV2l0aChwcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZWROYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVjb2RlZE5hbWUgPSBkZWNvZGVkTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAocHJlZml4LCAnZycpLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVjb2RlZE5hbWUgPSBkZWNvZGVkTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLkFUXSksICdnJyksIEVuY29kZWROYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5BVF1dKS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLlNMQVNIXSksICdnJyksIEVuY29kZWROYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5TTEFTSF1dKS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLkhZUEhFTl0pLCAnZycpLCBFbmNvZGVkTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuSFlQSEVOXV0pO1xuICAgICAgICBpZiAod2l0aEV4dCkge1xuICAgICAgICAgICAgZGVjb2RlZE5hbWUgPSBkZWNvZGVkTmFtZS5yZXBsYWNlKCcuanMnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlY29kZWROYW1lO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxufTtcbnZhciBnZW5lcmF0ZUV4cG9zZUZpbGVuYW1lID0gZnVuY3Rpb24oZXhwb3NlTmFtZSwgd2l0aEV4dCkge1xuICAgIGlmICghZXhwb3NlTmFtZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciBleHBvc2UgPSBleHBvc2VOYW1lO1xuICAgIGlmIChleHBvc2UgPT09ICcuJykge1xuICAgICAgICBleHBvc2UgPSAnZGVmYXVsdF9leHBvcnQnO1xuICAgIH1cbiAgICBpZiAoZXhwb3NlLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgZXhwb3NlID0gZXhwb3NlLnJlcGxhY2UoJy4vJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlTmFtZShleHBvc2UsICdfX2ZlZGVyYXRpb25fZXhwb3NlXycsIHdpdGhFeHQpO1xufTtcbnZhciBnZW5lcmF0ZVNoYXJlRmlsZW5hbWUgPSBmdW5jdGlvbihwa2dOYW1lLCB3aXRoRXh0KSB7XG4gICAgaWYgKCFwa2dOYW1lKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZU5hbWUocGtnTmFtZSwgJ19fZmVkZXJhdGlvbl9zaGFyZWRfJywgd2l0aEV4dCk7XG59O1xudmFyIGdldFJlc291cmNlVXJsID0gZnVuY3Rpb24obW9kdWxlLCBzb3VyY2VVcmwpIHtcbiAgICBpZiAoJ2dldFB1YmxpY1BhdGgnIGluIG1vZHVsZSkge1xuICAgICAgICB2YXIgcHVibGljUGF0aDtcbiAgICAgICAgaWYgKCFtb2R1bGUuZ2V0UHVibGljUGF0aC5zdGFydHNXaXRoKCdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgICBwdWJsaWNQYXRoID0gbmV3IEZ1bmN0aW9uKG1vZHVsZS5nZXRQdWJsaWNQYXRoKSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVibGljUGF0aCA9IG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyBtb2R1bGUuZ2V0UHVibGljUGF0aCkoKSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwdWJsaWNQYXRoKS5jb25jYXQoc291cmNlVXJsKTtcbiAgICB9IGVsc2UgaWYgKCdwdWJsaWNQYXRoJyBpbiBtb2R1bGUpIHtcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXJFbnYoKSAmJiAhaXNSZWFjdE5hdGl2ZUVudigpICYmICdzc3JQdWJsaWNQYXRoJyBpbiBtb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChtb2R1bGUuc3NyUHVibGljUGF0aCkuY29uY2F0KHNvdXJjZVVybCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KG1vZHVsZS5wdWJsaWNQYXRoKS5jb25jYXQoc291cmNlVXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBnZXQgcmVzb3VyY2UgVVJMLiBJZiBpbiBkZWJ1ZyBtb2RlLCBwbGVhc2UgaWdub3JlLicsIG1vZHVsZSwgc291cmNlVXJsKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xudmFyIGFzc2VydCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgbXNnKSB7XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgZXJyb3IobXNnKTtcbiAgICB9XG59O1xudmFyIGVycm9yID0gZnVuY3Rpb24obXNnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KExPR19DQVRFR09SWSwgXCI6IFwiKS5jb25jYXQobXNnKSk7XG59O1xudmFyIHdhcm4gPSBmdW5jdGlvbihtc2cpIHtcbiAgICBjb25zb2xlLndhcm4oXCJcIi5jb25jYXQoTE9HX0NBVEVHT1JZLCBcIjogXCIpLmNvbmNhdChtc2cpKTtcbn07XG5mdW5jdGlvbiBzYWZlVG9TdHJpbmcoaW5mbykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCAyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG4vLyBSZWdFeHAgZm9yIHZlcnNpb24gc3RyaW5nXG52YXIgVkVSU0lPTl9QQVRURVJOX1JFR0VYUCA9IC9eKFtcXGRePXY8Pn5dfFsqeFhdJCkvO1xuZnVuY3Rpb24gaXNSZXF1aXJlZFZlcnNpb24oc3RyKSB7XG4gICAgcmV0dXJuIFZFUlNJT05fUEFUVEVSTl9SRUdFWFAudGVzdChzdHIpO1xufVxudmFyIHNpbXBsZUpvaW5SZW1vdGVFbnRyeSA9IGZ1bmN0aW9uKHJQYXRoLCByTmFtZSkge1xuICAgIGlmICghclBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHJOYW1lO1xuICAgIH1cbiAgICB2YXIgdHJhbnNmb3JtUGF0aCA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICBpZiAoc3RyID09PSAnLicpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgnLi8nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIHZhciBzdHJXaXRob3V0U2xhc2ggPSBzdHIuc2xpY2UoMSk7XG4gICAgICAgICAgICBpZiAoc3RyV2l0aG91dFNsYXNoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyV2l0aG91dFNsYXNoLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHJXaXRob3V0U2xhc2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9O1xuICAgIHZhciB0cmFuc2Zvcm1lZFBhdGggPSB0cmFuc2Zvcm1QYXRoKHJQYXRoKTtcbiAgICBpZiAoIXRyYW5zZm9ybWVkUGF0aCkge1xuICAgICAgICByZXR1cm4gck5hbWU7XG4gICAgfVxuICAgIGlmICh0cmFuc2Zvcm1lZFBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodHJhbnNmb3JtZWRQYXRoKS5jb25jYXQock5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIi5jb25jYXQodHJhbnNmb3JtZWRQYXRoLCBcIi9cIikuY29uY2F0KHJOYW1lKTtcbn07XG5mdW5jdGlvbiBpbmZlckF1dG9QdWJsaWNQYXRoKHVybCkge1xuICAgIHJldHVybiB1cmwucmVwbGFjZSgvIy4qJC8sICcnKS5yZXBsYWNlKC9cXD8uKiQvLCAnJykucmVwbGFjZSgvXFwvW15cXC9dKyQvLCAnLycpO1xufVxuLy8gUHJpb3JpdHk6IG92ZXJyaWRlcyA+IHJlbW90ZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBnZW5lcmF0ZVNuYXBzaG90RnJvbU1hbmlmZXN0KG1hbmlmZXN0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBfbWFuaWZlc3RfbWV0YURhdGEsIF9tYW5pZmVzdF9tZXRhRGF0YTE7XG4gICAgdmFyIF9vcHRpb25zX3JlbW90ZXMgPSBvcHRpb25zLnJlbW90ZXMsIHJlbW90ZXMgPSBfb3B0aW9uc19yZW1vdGVzID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zX3JlbW90ZXMsIF9vcHRpb25zX292ZXJyaWRlcyA9IG9wdGlvbnMub3ZlcnJpZGVzLCBvdmVycmlkZXMgPSBfb3B0aW9uc19vdmVycmlkZXMgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnNfb3ZlcnJpZGVzLCB2ZXJzaW9uID0gb3B0aW9ucy52ZXJzaW9uO1xuICAgIHZhciByZW1vdGVTbmFwc2hvdDtcbiAgICB2YXIgZ2V0UHVibGljUGF0aCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJ3B1YmxpY1BhdGgnIGluIG1hbmlmZXN0Lm1ldGFEYXRhKSB7XG4gICAgICAgICAgICBpZiAobWFuaWZlc3QubWV0YURhdGEucHVibGljUGF0aCA9PT0gJ2F1dG8nICYmIHZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAvLyB1c2Ugc2FtZSBpbXBsZW1lbnRhdGlvbiBhcyBwdWJsaWNQYXRoIGF1dG8gcnVudGltZSBtb2R1bGUgaW1wbGVtZW50c1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmZlckF1dG9QdWJsaWNQYXRoKHZlcnNpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hbmlmZXN0Lm1ldGFEYXRhLnB1YmxpY1BhdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWFuaWZlc3QubWV0YURhdGEuZ2V0UHVibGljUGF0aDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG92ZXJyaWRlc0tleXMgPSBPYmplY3Qua2V5cyhvdmVycmlkZXMpO1xuICAgIHZhciByZW1vdGVzSW5mbyA9IHt9O1xuICAgIC8vIElmIHJlbW90ZXMgYXJlIG5vdCBwcm92aWRlZCwgb25seSB0aGUgcmVtb3RlcyBpbiB0aGUgbWFuaWZlc3Qgd2lsbCBiZSByZWFkXG4gICAgaWYgKCFPYmplY3Qua2V5cyhyZW1vdGVzKS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIF9tYW5pZmVzdF9yZW1vdGVzO1xuICAgICAgICByZW1vdGVzSW5mbyA9ICgoX21hbmlmZXN0X3JlbW90ZXMgPSBtYW5pZmVzdC5yZW1vdGVzKSA9PSBudWxsID8gdm9pZCAwIDogX21hbmlmZXN0X3JlbW90ZXMucmVkdWNlKGZ1bmN0aW9uKHJlcywgbmV4dCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRWZXJzaW9uO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBuZXh0LmZlZGVyYXRpb25Db250YWluZXJOYW1lO1xuICAgICAgICAgICAgLy8gb3ZlcnJpZGVzIGhhdmUgaGlnaGVyIHByaW9yaXR5XG4gICAgICAgICAgICBpZiAob3ZlcnJpZGVzS2V5cy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRWZXJzaW9uID0gb3ZlcnJpZGVzW25hbWVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3ZlcnNpb24nIGluIG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFZlcnNpb24gPSBuZXh0LnZlcnNpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFZlcnNpb24gPSBuZXh0LmVudHJ5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc1tuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkVmVyc2lvbjogbWF0Y2hlZFZlcnNpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9LCB7fSkpIHx8IHt9O1xuICAgIH1cbiAgICAvLyBJZiByZW1vdGVzIChkZXBsb3kgc2NlbmFyaW8pIGFyZSBzcGVjaWZpZWQsIHRoZXkgbmVlZCB0byBiZSB0cmF2ZXJzZWQgYWdhaW5cbiAgICBPYmplY3Qua2V5cyhyZW1vdGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gcmVtb3Rlc0luZm9ba2V5XSA9IHtcbiAgICAgICAgICAgIC8vIG92ZXJyaWRlcyB3aWxsIG92ZXJyaWRlIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgbWF0Y2hlZFZlcnNpb246IG92ZXJyaWRlc0tleXMuaW5jbHVkZXMoa2V5KSA/IG92ZXJyaWRlc1trZXldIDogcmVtb3Rlc1trZXldXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgdmFyIF9tYW5pZmVzdF9tZXRhRGF0YTIgPSBtYW5pZmVzdC5tZXRhRGF0YSwgX21hbmlmZXN0X21ldGFEYXRhX3JlbW90ZUVudHJ5ID0gX21hbmlmZXN0X21ldGFEYXRhMi5yZW1vdGVFbnRyeSwgcmVtb3RlRW50cnlQYXRoID0gX21hbmlmZXN0X21ldGFEYXRhX3JlbW90ZUVudHJ5LnBhdGgsIHJlbW90ZUVudHJ5TmFtZSA9IF9tYW5pZmVzdF9tZXRhRGF0YV9yZW1vdGVFbnRyeS5uYW1lLCByZW1vdGVFbnRyeVR5cGUgPSBfbWFuaWZlc3RfbWV0YURhdGFfcmVtb3RlRW50cnkudHlwZSwgcmVtb3RlVHlwZXMgPSBfbWFuaWZlc3RfbWV0YURhdGEyLnR5cGVzLCBidWlsZFZlcnNpb24gPSBfbWFuaWZlc3RfbWV0YURhdGEyLmJ1aWxkSW5mby5idWlsZFZlcnNpb24sIGdsb2JhbE5hbWUgPSBfbWFuaWZlc3RfbWV0YURhdGEyLmdsb2JhbE5hbWUsIHNzclJlbW90ZUVudHJ5ID0gX21hbmlmZXN0X21ldGFEYXRhMi5zc3JSZW1vdGVFbnRyeTtcbiAgICB2YXIgZXhwb3NlcyA9IG1hbmlmZXN0LmV4cG9zZXM7XG4gICAgdmFyIGJhc2ljUmVtb3RlU25hcHNob3QgPSB7XG4gICAgICAgIHZlcnNpb246IHZlcnNpb24gPyB2ZXJzaW9uIDogJycsXG4gICAgICAgIGJ1aWxkVmVyc2lvbjogYnVpbGRWZXJzaW9uLFxuICAgICAgICBnbG9iYWxOYW1lOiBnbG9iYWxOYW1lLFxuICAgICAgICByZW1vdGVFbnRyeTogc2ltcGxlSm9pblJlbW90ZUVudHJ5KHJlbW90ZUVudHJ5UGF0aCwgcmVtb3RlRW50cnlOYW1lKSxcbiAgICAgICAgcmVtb3RlRW50cnlUeXBlOiByZW1vdGVFbnRyeVR5cGUsXG4gICAgICAgIHJlbW90ZVR5cGVzOiBzaW1wbGVKb2luUmVtb3RlRW50cnkocmVtb3RlVHlwZXMucGF0aCwgcmVtb3RlVHlwZXMubmFtZSksXG4gICAgICAgIHJlbW90ZVR5cGVzWmlwOiByZW1vdGVUeXBlcy56aXAgfHwgJycsXG4gICAgICAgIHJlbW90ZVR5cGVzQVBJOiByZW1vdGVUeXBlcy5hcGkgfHwgJycsXG4gICAgICAgIHJlbW90ZXNJbmZvOiByZW1vdGVzSW5mbyxcbiAgICAgICAgc2hhcmVkOiBtYW5pZmVzdCA9PSBudWxsID8gdm9pZCAwIDogbWFuaWZlc3Quc2hhcmVkLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFzc2V0czogaXRlbS5hc3NldHMsXG4gICAgICAgICAgICAgICAgc2hhcmVkTmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IGl0ZW0udmVyc2lvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICAgIG1vZHVsZXM6IGV4cG9zZXMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4cG9zZXMubWFwKGZ1bmN0aW9uKGV4cG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiBleHBvc2UubmFtZSxcbiAgICAgICAgICAgICAgICBtb2R1bGVQYXRoOiBleHBvc2UucGF0aCxcbiAgICAgICAgICAgICAgICBhc3NldHM6IGV4cG9zZS5hc3NldHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgfTtcbiAgICBpZiAoKF9tYW5pZmVzdF9tZXRhRGF0YSA9IG1hbmlmZXN0Lm1ldGFEYXRhKSA9PSBudWxsID8gdm9pZCAwIDogX21hbmlmZXN0X21ldGFEYXRhLnByZWZldGNoSW50ZXJmYWNlKSB7XG4gICAgICAgIHZhciBwcmVmZXRjaEludGVyZmFjZSA9IG1hbmlmZXN0Lm1ldGFEYXRhLnByZWZldGNoSW50ZXJmYWNlO1xuICAgICAgICBiYXNpY1JlbW90ZVNuYXBzaG90ID0gcG9seWZpbGxzLl8oe30sIGJhc2ljUmVtb3RlU25hcHNob3QsIHtcbiAgICAgICAgICAgIHByZWZldGNoSW50ZXJmYWNlOiBwcmVmZXRjaEludGVyZmFjZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKChfbWFuaWZlc3RfbWV0YURhdGExID0gbWFuaWZlc3QubWV0YURhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfbWFuaWZlc3RfbWV0YURhdGExLnByZWZldGNoRW50cnkpIHtcbiAgICAgICAgdmFyIF9tYW5pZmVzdF9tZXRhRGF0YV9wcmVmZXRjaEVudHJ5ID0gbWFuaWZlc3QubWV0YURhdGEucHJlZmV0Y2hFbnRyeSwgcGF0aCA9IF9tYW5pZmVzdF9tZXRhRGF0YV9wcmVmZXRjaEVudHJ5LnBhdGgsIG5hbWUgPSBfbWFuaWZlc3RfbWV0YURhdGFfcHJlZmV0Y2hFbnRyeS5uYW1lLCB0eXBlID0gX21hbmlmZXN0X21ldGFEYXRhX3ByZWZldGNoRW50cnkudHlwZTtcbiAgICAgICAgYmFzaWNSZW1vdGVTbmFwc2hvdCA9IHBvbHlmaWxscy5fKHt9LCBiYXNpY1JlbW90ZVNuYXBzaG90LCB7XG4gICAgICAgICAgICBwcmVmZXRjaEVudHJ5OiBzaW1wbGVKb2luUmVtb3RlRW50cnkocGF0aCwgbmFtZSksXG4gICAgICAgICAgICBwcmVmZXRjaEVudHJ5VHlwZTogdHlwZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCdwdWJsaWNQYXRoJyBpbiBtYW5pZmVzdC5tZXRhRGF0YSkge1xuICAgICAgICByZW1vdGVTbmFwc2hvdCA9IHBvbHlmaWxscy5fKHt9LCBiYXNpY1JlbW90ZVNuYXBzaG90LCB7XG4gICAgICAgICAgICBwdWJsaWNQYXRoOiBnZXRQdWJsaWNQYXRoKCksXG4gICAgICAgICAgICBzc3JQdWJsaWNQYXRoOiBtYW5pZmVzdC5tZXRhRGF0YS5zc3JQdWJsaWNQYXRoXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW90ZVNuYXBzaG90ID0gcG9seWZpbGxzLl8oe30sIGJhc2ljUmVtb3RlU25hcHNob3QsIHtcbiAgICAgICAgICAgIGdldFB1YmxpY1BhdGg6IGdldFB1YmxpY1BhdGgoKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNzclJlbW90ZUVudHJ5KSB7XG4gICAgICAgIHZhciBmdWxsU1NSUmVtb3RlRW50cnkgPSBzaW1wbGVKb2luUmVtb3RlRW50cnkoc3NyUmVtb3RlRW50cnkucGF0aCwgc3NyUmVtb3RlRW50cnkubmFtZSk7XG4gICAgICAgIHJlbW90ZVNuYXBzaG90LnNzclJlbW90ZUVudHJ5ID0gZnVsbFNTUlJlbW90ZUVudHJ5O1xuICAgICAgICByZW1vdGVTbmFwc2hvdC5zc3JSZW1vdGVFbnRyeVR5cGUgPSBzc3JSZW1vdGVFbnRyeS50eXBlIHx8ICdjb21tb25qcy1tb2R1bGUnO1xuICAgIH1cbiAgICByZXR1cm4gcmVtb3RlU25hcHNob3Q7XG59XG5mdW5jdGlvbiBpc01hbmlmZXN0UHJvdmlkZXIobW9kdWxlSW5mbykge1xuICAgIGlmICgncmVtb3RlRW50cnknIGluIG1vZHVsZUluZm8gJiYgbW9kdWxlSW5mby5yZW1vdGVFbnRyeS5pbmNsdWRlcyhNQU5JRkVTVF9FWFQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG52YXIgUFJFRklYID0gJ1sgTW9kdWxlIEZlZGVyYXRpb24gXSc7XG52YXIgTG9nZ2VyID0gLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBMb2dnZXIxKHByZWZpeCkge1xuICAgICAgICBfY2xhc3NfY2FsbF9jaGVjayh0aGlzLCBMb2dnZXIxKTtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgfVxuICAgIF9jcmVhdGVfY2xhc3MoTG9nZ2VyMSwgW1xuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwic2V0UHJlZml4XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UHJlZml4KHByZWZpeCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwibG9nXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9nKCkge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKXtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIF9jb25zb2xlO1xuICAgICAgICAgICAgICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmxvZy5hcHBseShfY29uc29sZSwgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWZpeFxuICAgICAgICAgICAgICAgIF0uY29uY2F0KF90b19jb25zdW1hYmxlX2FycmF5KGFyZ3MpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJ3YXJuXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2FybjEoKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX2NvbnNvbGU7XG4gICAgICAgICAgICAgICAgKF9jb25zb2xlID0gY29uc29sZSkubG9nLmFwcGx5KF9jb25zb2xlLCBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZml4XG4gICAgICAgICAgICAgICAgXS5jb25jYXQoX3RvX2NvbnN1bWFibGVfYXJyYXkoYXJncykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImVycm9yXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IxKCkge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKXtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIF9jb25zb2xlO1xuICAgICAgICAgICAgICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmxvZy5hcHBseShfY29uc29sZSwgW1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWZpeFxuICAgICAgICAgICAgICAgIF0uY29uY2F0KF90b19jb25zdW1hYmxlX2FycmF5KGFyZ3MpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgICBmb3IodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBfY29uc29sZTtcbiAgICAgICAgICAgICAgICAoX2NvbnNvbGUgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUsIFtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmaXhcbiAgICAgICAgICAgICAgICBdLmNvbmNhdChfdG9fY29uc3VtYWJsZV9hcnJheShhcmdzKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwiaW5mb1wiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluZm8oKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX2NvbnNvbGU7XG4gICAgICAgICAgICAgICAgKF9jb25zb2xlID0gY29uc29sZSkubG9nLmFwcGx5KF9jb25zb2xlLCBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZml4XG4gICAgICAgICAgICAgICAgXS5jb25jYXQoX3RvX2NvbnN1bWFibGVfYXJyYXkoYXJncykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcInJlYWR5XCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX2NvbnNvbGU7XG4gICAgICAgICAgICAgICAgKF9jb25zb2xlID0gY29uc29sZSkubG9nLmFwcGx5KF9jb25zb2xlLCBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlZml4XG4gICAgICAgICAgICAgICAgXS5jb25jYXQoX3RvX2NvbnN1bWFibGVfYXJyYXkoYXJncykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcImRlYnVnXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5Kyspe1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNEZWJ1Z01vZGUoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2NvbnNvbGU7XG4gICAgICAgICAgICAgICAgICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmxvZy5hcHBseShfY29uc29sZSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVmaXhcbiAgICAgICAgICAgICAgICAgICAgXS5jb25jYXQoX3RvX2NvbnN1bWFibGVfYXJyYXkoYXJncykpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdKTtcbiAgICByZXR1cm4gTG9nZ2VyMTtcbn0oKTtcbmZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihwcmVmaXgpIHtcbiAgICByZXR1cm4gbmV3IExvZ2dlcihwcmVmaXgpO1xufVxudmFyIGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcihQUkVGSVgpO1xuZnVuY3Rpb24gc2FmZVdyYXBwZXIoY2FsbGJhY2ssIGRpc2FibGVXYXJuKSB7XG4gICAgcmV0dXJuIF9zYWZlV3JhcHBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX3NhZmVXcmFwcGVyKCkge1xuICAgIF9zYWZlV3JhcHBlciA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbihjYWxsYmFjaywgZGlzYWJsZVdhcm4pIHtcbiAgICAgICAgdmFyIHJlcywgZTtcbiAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9zdGF0ZS50cnlzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBlID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgIWRpc2FibGVXYXJuICYmIHdhcm4oZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gX3NhZmVXcmFwcGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBpc1N0YXRpY1Jlc291cmNlc0VxdWFsKHVybDEsIHVybDIpIHtcbiAgICB2YXIgUkVHX0VYUCA9IC9eKGh0dHBzPzopP1xcL1xcLy9pO1xuICAgIC8vIFRyYW5zZm9ybSB1cmwxIGFuZCB1cmwyIGludG8gcmVsYXRpdmUgcGF0aHNcbiAgICB2YXIgcmVsYXRpdmVVcmwxID0gdXJsMS5yZXBsYWNlKFJFR19FWFAsICcnKS5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIHZhciByZWxhdGl2ZVVybDIgPSB1cmwyLnJlcGxhY2UoUkVHX0VYUCwgJycpLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlbGF0aXZlIHBhdGhzIGFyZSBpZGVudGljYWxcbiAgICByZXR1cm4gcmVsYXRpdmVVcmwxID09PSByZWxhdGl2ZVVybDI7XG59XG5mdW5jdGlvbiBjcmVhdGVTY3JpcHQoaW5mbykge1xuICAgIC8vIFJldHJpZXZlIHRoZSBleGlzdGluZyBzY3JpcHQgZWxlbWVudCBieSBpdHMgc3JjIGF0dHJpYnV0ZVxuICAgIHZhciBzY3JpcHQgPSBudWxsO1xuICAgIHZhciBuZWVkQXR0YWNoID0gdHJ1ZTtcbiAgICB2YXIgdGltZW91dCA9IDIwMDAwO1xuICAgIHZhciB0aW1lb3V0SWQ7XG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgcyA9IHNjcmlwdHNbaV07XG4gICAgICAgIHZhciBzY3JpcHRTcmMgPSBzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGlmIChzY3JpcHRTcmMgJiYgaXNTdGF0aWNSZXNvdXJjZXNFcXVhbChzY3JpcHRTcmMsIGluZm8udXJsKSkge1xuICAgICAgICAgICAgc2NyaXB0ID0gcztcbiAgICAgICAgICAgIG5lZWRBdHRhY2ggPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghc2NyaXB0KSB7XG4gICAgICAgIHZhciBhdHRycyA9IGluZm8uYXR0cnM7XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9IChhdHRycyA9PSBudWxsID8gdm9pZCAwIDogYXR0cnNbJ3R5cGUnXSkgPT09ICdtb2R1bGUnID8gJ21vZHVsZScgOiAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgdmFyIGNyZWF0ZVNjcmlwdFJlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGluZm8uY3JlYXRlU2NyaXB0SG9vaykge1xuICAgICAgICAgICAgY3JlYXRlU2NyaXB0UmVzID0gaW5mby5jcmVhdGVTY3JpcHRIb29rKGluZm8udXJsLCBpbmZvLmF0dHJzKTtcbiAgICAgICAgICAgIGlmIChfaW5zdGFuY2VvZihjcmVhdGVTY3JpcHRSZXMsIEhUTUxTY3JpcHRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IGNyZWF0ZVNjcmlwdFJlcztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiBjcmVhdGVTY3JpcHRSZXMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVfb2YoY3JlYXRlU2NyaXB0UmVzKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCdzY3JpcHQnIGluIGNyZWF0ZVNjcmlwdFJlcyAmJiBjcmVhdGVTY3JpcHRSZXMuc2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdCA9IGNyZWF0ZVNjcmlwdFJlcy5zY3JpcHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgndGltZW91dCcgaW4gY3JlYXRlU2NyaXB0UmVzICYmIGNyZWF0ZVNjcmlwdFJlcy50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBjcmVhdGVTY3JpcHRSZXMudGltZW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzY3JpcHQuc3JjKSB7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gaW5mby51cmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJzICYmICFjcmVhdGVTY3JpcHRSZXMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnYXN5bmMnIHx8IG5hbWUgPT09ICdkZWZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdFtuYW1lXSA9IGF0dHJzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRyaWJ1dGVzIHRoYXQgZG8gbm90IGV4aXN0IGFyZSBjb25zaWRlcmVkIG92ZXJyaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc2NyaXB0LmdldEF0dHJpYnV0ZShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgb25TY3JpcHRDb21wbGV0ZSA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfcmVmID0gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbihwcmV2LCBldmVudCkge1xuICAgICAgICAgICAgdmFyIG9uU2NyaXB0Q29tcGxldGVDYWxsYmFjaywgcmVzdWx0LCByZXM7XG4gICAgICAgICAgICByZXR1cm4gX3RzX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNjcmlwdENvbXBsZXRlQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGV2ZW50ID09IG51bGwgPyB2b2lkIDAgOiBldmVudC50eXBlKSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW5mbyA9PSBudWxsID8gdm9pZCAwIDogaW5mby5vbkVycm9yQ2FsbGJhY2spICYmIChpbmZvID09IG51bGwgPyB2b2lkIDAgOiBpbmZvLm9uRXJyb3JDYWxsYmFjayhldmVudCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmZvID09IG51bGwgPyB2b2lkIDAgOiBpbmZvLmNiKSAmJiAoaW5mbyA9PSBudWxsID8gdm9pZCAwIDogaW5mby5jYigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzY3JpcHQpIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYWZlV3JhcHBlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2luZm9fbmVlZERlbGV0ZVNjcmlwdCA9IGluZm8ubmVlZERlbGV0ZVNjcmlwdCwgbmVlZERlbGV0ZVNjcmlwdCA9IF9pbmZvX25lZWREZWxldGVTY3JpcHQgPT09IHZvaWQgMCA/IHRydWUgOiBfaW5mb19uZWVkRGVsZXRlU2NyaXB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZWVkRGVsZXRlU2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzY3JpcHQgPT0gbnVsbCA/IHZvaWQgMCA6IHNjcmlwdC5wYXJlbnROb2RlKSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocHJldiAmJiB0eXBlb2YgcHJldiA9PT0gJ2Z1bmN0aW9uJykpIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcHJldihldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pbnN0YW5jZW9mKHJlc3VsdCwgUHJvbWlzZSkpIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2NyaXB0Q29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgb25TY3JpcHRDb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNjcmlwdENvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvblNjcmlwdENvbXBsZXRlKHByZXYsIGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH0oKTtcbiAgICBzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG4gICAgc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBvblNjcmlwdENvbXBsZXRlKG51bGwsIG5ldyBFcnJvcignUmVtb3RlIHNjcmlwdCBcIicuY29uY2F0KGluZm8udXJsLCAnXCIgdGltZS1vdXRlZC4nKSkpO1xuICAgIH0sIHRpbWVvdXQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjcmlwdDogc2NyaXB0LFxuICAgICAgICBuZWVkQXR0YWNoOiBuZWVkQXR0YWNoXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUxpbmsoaW5mbykge1xuICAgIC8vIDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwic2NyaXB0LmpzXCIgYXM9XCJzY3JpcHRcIj5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgZXhpc3Rpbmcgc2NyaXB0IGVsZW1lbnQgYnkgaXRzIHNyYyBhdHRyaWJ1dGVcbiAgICB2YXIgbGluayA9IG51bGw7XG4gICAgdmFyIG5lZWRBdHRhY2ggPSB0cnVlO1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaW5rJyk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIGwgPSBsaW5rc1tpXTtcbiAgICAgICAgdmFyIGxpbmtIcmVmID0gbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgdmFyIGxpbmtSZWwgPSBsLmdldEF0dHJpYnV0ZSgncmVsJyk7XG4gICAgICAgIGlmIChsaW5rSHJlZiAmJiBpc1N0YXRpY1Jlc291cmNlc0VxdWFsKGxpbmtIcmVmLCBpbmZvLnVybCkgJiYgbGlua1JlbCA9PT0gaW5mby5hdHRyc1sncmVsJ10pIHtcbiAgICAgICAgICAgIGxpbmsgPSBsO1xuICAgICAgICAgICAgbmVlZEF0dGFjaCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW5mby51cmwpO1xuICAgICAgICB2YXIgY3JlYXRlTGlua1JlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGF0dHJzID0gaW5mby5hdHRycztcbiAgICAgICAgaWYgKGluZm8uY3JlYXRlTGlua0hvb2spIHtcbiAgICAgICAgICAgIGNyZWF0ZUxpbmtSZXMgPSBpbmZvLmNyZWF0ZUxpbmtIb29rKGluZm8udXJsLCBhdHRycyk7XG4gICAgICAgICAgICBpZiAoX2luc3RhbmNlb2YoY3JlYXRlTGlua1JlcywgSFRNTExpbmtFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGxpbmsgPSBjcmVhdGVMaW5rUmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRycyAmJiAhY3JlYXRlTGlua1Jlcykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChsaW5rICYmICFsaW5rLmdldEF0dHJpYnV0ZShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIG9uTGlua0NvbXBsZXRlID0gZnVuY3Rpb24ocHJldiwgZXZlbnQpIHtcbiAgICAgICAgdmFyIG9uTGlua0NvbXBsZXRlQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgoZXZlbnQgPT0gbnVsbCA/IHZvaWQgMCA6IGV2ZW50LnR5cGUpID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgKGluZm8gPT0gbnVsbCA/IHZvaWQgMCA6IGluZm8ub25FcnJvckNhbGxiYWNrKSAmJiAoaW5mbyA9PSBudWxsID8gdm9pZCAwIDogaW5mby5vbkVycm9yQ2FsbGJhY2soZXZlbnQpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgKGluZm8gPT0gbnVsbCA/IHZvaWQgMCA6IGluZm8uY2IpICYmIChpbmZvID09IG51bGwgPyB2b2lkIDAgOiBpbmZvLmNiKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBQcmV2ZW50IG1lbW9yeSBsZWFrcyBpbiBJRS5cbiAgICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgICAgIGxpbmsub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICBsaW5rLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICBzYWZlV3JhcHBlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2luZm9fbmVlZERlbGV0ZUxpbmsgPSBpbmZvLm5lZWREZWxldGVMaW5rLCBuZWVkRGVsZXRlTGluayA9IF9pbmZvX25lZWREZWxldGVMaW5rID09PSB2b2lkIDAgPyB0cnVlIDogX2luZm9fbmVlZERlbGV0ZUxpbms7XG4gICAgICAgICAgICAgICAgaWYgKG5lZWREZWxldGVMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIChsaW5rID09IG51bGwgPyB2b2lkIDAgOiBsaW5rLnBhcmVudE5vZGUpICYmIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gcHJldihldmVudCk7XG4gICAgICAgICAgICAgICAgb25MaW5rQ29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25MaW5rQ29tcGxldGVDYWxsYmFjaygpO1xuICAgIH07XG4gICAgbGluay5vbmVycm9yID0gb25MaW5rQ29tcGxldGUuYmluZChudWxsLCBsaW5rLm9uZXJyb3IpO1xuICAgIGxpbmsub25sb2FkID0gb25MaW5rQ29tcGxldGUuYmluZChudWxsLCBsaW5rLm9ubG9hZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGluazogbGluayxcbiAgICAgICAgbmVlZEF0dGFjaDogbmVlZEF0dGFjaFxuICAgIH07XG59XG5mdW5jdGlvbiBsb2FkU2NyaXB0KHVybCwgaW5mbykge1xuICAgIHZhciBfaW5mb19hdHRycyA9IGluZm8uYXR0cnMsIGF0dHJzID0gX2luZm9fYXR0cnMgPT09IHZvaWQgMCA/IHt9IDogX2luZm9fYXR0cnMsIGNyZWF0ZVNjcmlwdEhvb2sgPSBpbmZvLmNyZWF0ZVNjcmlwdEhvb2s7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgX2NyZWF0ZVNjcmlwdCA9IGNyZWF0ZVNjcmlwdCh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIGNiOiByZXNvbHZlLFxuICAgICAgICAgICAgb25FcnJvckNhbGxiYWNrOiByZWplY3QsXG4gICAgICAgICAgICBhdHRyczogcG9seWZpbGxzLl8oe1xuICAgICAgICAgICAgICAgIGZldGNocHJpb3JpdHk6ICdoaWdoJ1xuICAgICAgICAgICAgfSwgYXR0cnMpLFxuICAgICAgICAgICAgY3JlYXRlU2NyaXB0SG9vazogY3JlYXRlU2NyaXB0SG9vayxcbiAgICAgICAgICAgIG5lZWREZWxldGVTY3JpcHQ6IHRydWVcbiAgICAgICAgfSksIHNjcmlwdCA9IF9jcmVhdGVTY3JpcHQuc2NyaXB0LCBuZWVkQXR0YWNoID0gX2NyZWF0ZVNjcmlwdC5uZWVkQXR0YWNoO1xuICAgICAgICBuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGltcG9ydE5vZGVNb2R1bGUobmFtZSkge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ltcG9ydCBzcGVjaWZpZXIgaXMgcmVxdWlyZWQnKTtcbiAgICB9XG4gICAgdmFyIGltcG9ydE1vZHVsZSA9IG5ldyBGdW5jdGlvbignbmFtZScsIFwicmV0dXJuIGltcG9ydChuYW1lKVwiKTtcbiAgICByZXR1cm4gaW1wb3J0TW9kdWxlKG5hbWUpLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IxKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbXBvcnRpbmcgbW9kdWxlIFwiLmNvbmNhdChuYW1lLCBcIjpcIiksIGVycm9yMSk7XG4gICAgICAgIHRocm93IGVycm9yMTtcbiAgICB9KTtcbn1cbnZhciBsb2FkTm9kZUZldGNoID0gLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3JlZiA9IF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmZXRjaE1vZHVsZTtcbiAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0Tm9kZU1vZHVsZSgnbm9kZS1mZXRjaCcpXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBmZXRjaE1vZHVsZSA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hNb2R1bGUuZGVmYXVsdCB8fCBmZXRjaE1vZHVsZVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gbG9hZE5vZGVGZXRjaDEoKSB7XG4gICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn0oKTtcbnZhciBsYXp5TG9hZGVySG9va0ZldGNoID0gLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3JlZiA9IF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24oaW5wdXQsIGluaXQsIGxvYWRlckhvb2spIHtcbiAgICAgICAgdmFyIGhvb2ssIHJlcywgZmV0Y2hGdW5jdGlvbiwgX3RtcDtcbiAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGhvb2sgPSBmdW5jdGlvbih1cmwsIGluaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2FkZXJIb29rLmxpZmVjeWNsZS5mZXRjaC5lbWl0KHVybCwgaW5pdCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9vayhpbnB1dCwgaW5pdCB8fCB7fSlcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKCFyZXMgfHwgIV9pbnN0YW5jZW9mKHJlcywgUmVzcG9uc2UpKSkgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiBmZXRjaCA9PT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkTm9kZUZldGNoKClcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIF90bXAgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIF90bXAgPSBmZXRjaDtcbiAgICAgICAgICAgICAgICAgICAgX3N0YXRlLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGZldGNoRnVuY3Rpb24gPSBfdG1wO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRnVuY3Rpb24oaW5wdXQsIGluaXQgfHwge30pXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc1xuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gbGF6eUxvYWRlckhvb2tGZXRjaDEoaW5wdXQsIGluaXQsIGxvYWRlckhvb2spIHtcbiAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufSgpO1xudmFyIGNyZWF0ZVNjcmlwdE5vZGUgPSB0eXBlb2YgRU5WX1RBUkdFVCA9PT0gJ3VuZGVmaW5lZCcgfHwgRU5WX1RBUkdFVCAhPT0gJ3dlYicgPyBmdW5jdGlvbih1cmwsIGNiLCBhdHRycywgbG9hZGVySG9vaykge1xuICAgIGlmIChsb2FkZXJIb29rID09IG51bGwgPyB2b2lkIDAgOiBsb2FkZXJIb29rLmNyZWF0ZVNjcmlwdEhvb2spIHtcbiAgICAgICAgdmFyIGhvb2tSZXN1bHQgPSBsb2FkZXJIb29rLmNyZWF0ZVNjcmlwdEhvb2sodXJsKTtcbiAgICAgICAgaWYgKGhvb2tSZXN1bHQgJiYgKHR5cGVvZiBob29rUmVzdWx0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlX29mKGhvb2tSZXN1bHQpKSA9PT0gJ29iamVjdCcgJiYgJ3VybCcgaW4gaG9va1Jlc3VsdCkge1xuICAgICAgICAgICAgdXJsID0gaG9va1Jlc3VsdC51cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHVybE9iajtcbiAgICB0cnkge1xuICAgICAgICB1cmxPYmogPSBuZXcgVVJMKHVybCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb25zdHJ1Y3RpbmcgVVJMOicsIGUpO1xuICAgICAgICBjYihuZXcgRXJyb3IoXCJJbnZhbGlkIFVSTDogXCIuY29uY2F0KGUpKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGdldEZldGNoID0gLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYWRlckhvb2sgPT0gbnVsbCA/IHZvaWQgMCA6IGxvYWRlckhvb2suZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXp5TG9hZGVySG9va0ZldGNoKGlucHV0LCBpbml0LCBsb2FkZXJIb29rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGZldGNoID09PSAndW5kZWZpbmVkJyA/IGxvYWROb2RlRmV0Y2goKSA6IGZldGNoXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldEZldGNoKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9KCk7XG4gICAgdmFyIGhhbmRsZVNjcmlwdEZldGNoID0gLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKGYsIHVybE9iaikge1xuICAgICAgICAgICAgdmFyIF92bV9jb25zdGFudHMsIHJlcywgZGF0YSwgX3JlZiwgcGF0aCwgdm0sIHNjcmlwdENvbnRleHQsIHVybERpcm5hbWUsIGZpbGVuYW1lLCBfdm1fY29uc3RhbnRzX1VTRV9NQUlOX0NPTlRFWFRfREVGQVVMVF9MT0FERVIsIHNjcmlwdCwgZXhwb3J0ZWRJbnRlcmZhY2UsIGNvbnRhaW5lciwgZTtcbiAgICAgICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChfc3RhdGUubGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUudHJ5cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYodXJsT2JqLmhyZWYpXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy50ZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0Tm9kZU1vZHVsZSgncGF0aCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnROb2RlTW9kdWxlKCd2bScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWYgPSBfc2xpY2VkX3RvX2FycmF5LmFwcGx5KHZvaWQgMCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9zdGF0ZS5zZW50KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgXSksIHBhdGggPSBfcmVmWzBdLCB2bSA9IF9yZWZbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRDb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxEaXJuYW1lID0gdXJsT2JqLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmpvaW4oJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gcGF0aC5iYXNlbmFtZSh1cmxPYmoucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0ID0gbmV3IHZtLlNjcmlwdChcIihmdW5jdGlvbihleHBvcnRzLCBtb2R1bGUsIHJlcXVpcmUsIF9fZGlybmFtZSwgX19maWxlbmFtZSkge1wiLmNvbmNhdChkYXRhLCBcIlxcbn0pXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE1vZHVsZUR5bmFtaWNhbGx5OiAoX3ZtX2NvbnN0YW50c19VU0VfTUFJTl9DT05URVhUX0RFRkFVTFRfTE9BREVSID0gKF92bV9jb25zdGFudHMgPSB2bS5jb25zdGFudHMpID09IG51bGwgPyB2b2lkIDAgOiBfdm1fY29uc3RhbnRzLlVTRV9NQUlOX0NPTlRFWFRfREVGQVVMVF9MT0FERVIpICE9IG51bGwgPyBfdm1fY29uc3RhbnRzX1VTRV9NQUlOX0NPTlRFWFRfREVGQVVMVF9MT0FERVIgOiBpbXBvcnROb2RlTW9kdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdC5ydW5JblRoaXNDb250ZXh0KCkoc2NyaXB0Q29udGV4dC5leHBvcnRzLCBzY3JpcHRDb250ZXh0Lm1vZHVsZSwgZXZhbCgncmVxdWlyZScpLCB1cmxEaXJuYW1lLCBmaWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRlZEludGVyZmFjZSA9IHNjcmlwdENvbnRleHQubW9kdWxlLmV4cG9ydHMgfHwgc2NyaXB0Q29udGV4dC5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzICYmIGV4cG9ydGVkSW50ZXJmYWNlICYmIGF0dHJzWydnbG9iYWxOYW1lJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBleHBvcnRlZEludGVyZmFjZVthdHRyc1snZ2xvYmFsTmFtZSddXSB8fCBleHBvcnRlZEludGVyZmFjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYih1bmRlZmluZWQsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYih1bmRlZmluZWQsIGV4cG9ydGVkSW50ZXJmYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKF9pbnN0YW5jZW9mKGUsIEVycm9yKSA/IGUgOiBuZXcgRXJyb3IoXCJTY3JpcHQgZXhlY3V0aW9uIGVycm9yOiBcIi5jb25jYXQoZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gaGFuZGxlU2NyaXB0RmV0Y2goZiwgdXJsT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH0oKTtcbiAgICBnZXRGZXRjaCgpLnRoZW4oLyojX19QVVJFX18qLyBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICAgIHZhciBfdG1wLCBfdG1wMTtcbiAgICAgICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChfc3RhdGUubGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgoYXR0cnMgPT0gbnVsbCA/IHZvaWQgMCA6IGF0dHJzWyd0eXBlJ10pID09PSAnZXNtJyB8fCAoYXR0cnMgPT0gbnVsbCA/IHZvaWQgMCA6IGF0dHJzWyd0eXBlJ10pID09PSAnbW9kdWxlJykpIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RtcCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxPYmouaHJlZlxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90bXAxID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoOiBmXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE5vZGVNb2R1bGUoJ3ZtJylcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9kdWxlLmFwcGx5KHZvaWQgMCwgX3RtcC5jb25jYXQoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3RtcDEudm0gPSBfc3RhdGUuc2VudCgpLCBfdG1wMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSkudGhlbigvKiNfX1BVUkVfXyovIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IF9hc3luY190b19nZW5lcmF0b3IoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RzX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5ldmFsdWF0ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IodW5kZWZpbmVkLCBtb2R1bGUubmFtZXNwYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpKS5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNiKF9pbnN0YW5jZW9mKGUsIEVycm9yKSA/IGUgOiBuZXcgRXJyb3IoXCJTY3JpcHQgZXhlY3V0aW9uIGVycm9yOiBcIi5jb25jYXQoZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2NyaXB0RmV0Y2goZiwgdXJsT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH0oKSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNiKGVycik7XG4gICAgfSk7XG59IDogZnVuY3Rpb24odXJsLCBjYiwgYXR0cnMsIGxvYWRlckhvb2spIHtcbiAgICBjYihuZXcgRXJyb3IoJ2NyZWF0ZVNjcmlwdE5vZGUgaXMgZGlzYWJsZWQgaW4gbm9uLU5vZGUuanMgZW52aXJvbm1lbnQnKSk7XG59O1xudmFyIGxvYWRTY3JpcHROb2RlID0gdHlwZW9mIEVOVl9UQVJHRVQgPT09ICd1bmRlZmluZWQnIHx8IEVOVl9UQVJHRVQgIT09ICd3ZWInID8gZnVuY3Rpb24odXJsLCBpbmZvKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBjcmVhdGVTY3JpcHROb2RlKHVybCwgZnVuY3Rpb24oZXJyb3IxLCBzY3JpcHRDb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IxKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBfaW5mb19hdHRycywgX2luZm9fYXR0cnMxO1xuICAgICAgICAgICAgICAgIHZhciByZW1vdGVFbnRyeUtleSA9IChpbmZvID09IG51bGwgPyB2b2lkIDAgOiAoX2luZm9fYXR0cnMgPSBpbmZvLmF0dHJzKSA9PSBudWxsID8gdm9pZCAwIDogX2luZm9fYXR0cnNbJ2dsb2JhbE5hbWUnXSkgfHwgXCJfX0ZFREVSQVRJT05fXCIuY29uY2F0KGluZm8gPT0gbnVsbCA/IHZvaWQgMCA6IChfaW5mb19hdHRyczEgPSBpbmZvLmF0dHJzKSA9PSBudWxsID8gdm9pZCAwIDogX2luZm9fYXR0cnMxWyduYW1lJ10sIFwiOmN1c3RvbV9fXCIpO1xuICAgICAgICAgICAgICAgIHZhciBlbnRyeUV4cG9ydHMgPSBnbG9iYWxUaGlzW3JlbW90ZUVudHJ5S2V5XSA9IHNjcmlwdENvbnRleHQ7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShlbnRyeUV4cG9ydHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBpbmZvLmF0dHJzLCBpbmZvLmxvYWRlckhvb2spO1xuICAgIH0pO1xufSA6IGZ1bmN0aW9uKHVybCwgaW5mbykge1xuICAgIHRocm93IG5ldyBFcnJvcignbG9hZFNjcmlwdE5vZGUgaXMgZGlzYWJsZWQgaW4gbm9uLU5vZGUuanMgZW52aXJvbm1lbnQnKTtcbn07XG5mdW5jdGlvbiBsb2FkTW9kdWxlKHVybCwgb3B0aW9ucykge1xuICAgIHJldHVybiBfbG9hZE1vZHVsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2xvYWRNb2R1bGUoKSB7XG4gICAgX2xvYWRNb2R1bGUgPSBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKHVybCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZmV0Y2gxLCB2bSwgcmVzcG9uc2UsIGNvZGUsIG1vZHVsZTtcbiAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIGZldGNoMSA9IG9wdGlvbnMuZmV0Y2gsIHZtID0gb3B0aW9ucy52bTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaDEodXJsKVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9IF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSA9IG5ldyB2bS5Tb3VyY2VUZXh0TW9kdWxlKGNvZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE1vZHVsZUR5bmFtaWNhbGx5OiAvKiNfX1BVUkVfXyovIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfcmVmID0gX2FzeW5jX3RvX2dlbmVyYXRvcihmdW5jdGlvbihzcGVjaWZpZXIsIHNjcmlwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWRVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdHNfZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uKF9zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRVcmwgPSBuZXcgVVJMKHNwZWNpZmllciwgdXJsKS5ocmVmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb2R1bGUocmVzb2x2ZWRVcmwsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oc3BlY2lmaWVyLCBzY3JpcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSgpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5saW5rKC8qI19fUFVSRV9fKi8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZWRVcmwsIG1vZHVsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goX3N0YXRlLmxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkVXJsID0gbmV3IFVSTChzcGVjaWZpZXIsIHVybCkuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9kdWxlKHJlc29sdmVkVXJsLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlID0gX3N0YXRlLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KCkpXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfc3RhdGUuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gX2xvYWRNb2R1bGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9wdGlvbnMoZW5hYmxlRGVmYXVsdCwgZGVmYXVsdE9wdGlvbnMsIGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChlbmFibGVEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucyAmJiAodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVfb2Yob3B0aW9ucykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHBvbHlmaWxscy5fKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCB0eXBlIGZvciBgXCIuY29uY2F0KGtleSwgXCJgLCBleHBlY3QgYm9vbGVhbi91bmRlZmluZWQvb2JqZWN0LCBnb3Q6IFwiKS5jb25jYXQodHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVfb2Yob3B0aW9ucykpKTtcbiAgICB9O1xufVxudmFyIGNyZWF0ZU1vZHVsZUZlZGVyYXRpb25Db25maWcgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59O1xuZXhwb3J0cy5CUk9XU0VSX0xPR19LRVkgPSBCUk9XU0VSX0xPR19LRVk7XG5leHBvcnRzLkVOQ09ERV9OQU1FX1BSRUZJWCA9IEVOQ09ERV9OQU1FX1BSRUZJWDtcbmV4cG9ydHMuRW5jb2RlZE5hbWVUcmFuc2Zvcm1NYXAgPSBFbmNvZGVkTmFtZVRyYW5zZm9ybU1hcDtcbmV4cG9ydHMuRmVkZXJhdGlvbk1vZHVsZU1hbmlmZXN0ID0gRmVkZXJhdGlvbk1vZHVsZU1hbmlmZXN0O1xuZXhwb3J0cy5NQU5JRkVTVF9FWFQgPSBNQU5JRkVTVF9FWFQ7XG5leHBvcnRzLk1GTW9kdWxlVHlwZSA9IE1GTW9kdWxlVHlwZTtcbmV4cG9ydHMuTUZQcmVmZXRjaENvbW1vbiA9IE1GUHJlZmV0Y2hDb21tb247XG5leHBvcnRzLk1PRFVMRV9ERVZUT09MX0lERU5USUZJRVIgPSBNT0RVTEVfREVWVE9PTF9JREVOVElGSUVSO1xuZXhwb3J0cy5NYW5pZmVzdEZpbGVOYW1lID0gTWFuaWZlc3RGaWxlTmFtZTtcbmV4cG9ydHMuTmFtZVRyYW5zZm9ybU1hcCA9IE5hbWVUcmFuc2Zvcm1NYXA7XG5leHBvcnRzLk5hbWVUcmFuc2Zvcm1TeW1ib2wgPSBOYW1lVHJhbnNmb3JtU3ltYm9sO1xuZXhwb3J0cy5TRVBBUkFUT1IgPSBTRVBBUkFUT1I7XG5leHBvcnRzLlN0YXRzRmlsZU5hbWUgPSBTdGF0c0ZpbGVOYW1lO1xuZXhwb3J0cy5URU1QX0RJUiA9IFRFTVBfRElSO1xuZXhwb3J0cy5hc3NlcnQgPSBhc3NlcnQ7XG5leHBvcnRzLmNvbXBvc2VLZXlXaXRoU2VwYXJhdG9yID0gY29tcG9zZUtleVdpdGhTZXBhcmF0b3I7XG5leHBvcnRzLmNvbnRhaW5lclBsdWdpbiA9IENvbnRhaW5lclBsdWdpbjtcbmV4cG9ydHMuY29udGFpbmVyUmVmZXJlbmNlUGx1Z2luID0gQ29udGFpbmVyUmVmZXJlbmNlUGx1Z2luO1xuZXhwb3J0cy5jcmVhdGVMaW5rID0gY3JlYXRlTGluaztcbmV4cG9ydHMuY3JlYXRlTG9nZ2VyID0gY3JlYXRlTG9nZ2VyO1xuZXhwb3J0cy5jcmVhdGVNb2R1bGVGZWRlcmF0aW9uQ29uZmlnID0gY3JlYXRlTW9kdWxlRmVkZXJhdGlvbkNvbmZpZztcbmV4cG9ydHMuY3JlYXRlU2NyaXB0ID0gY3JlYXRlU2NyaXB0O1xuZXhwb3J0cy5jcmVhdGVTY3JpcHROb2RlID0gY3JlYXRlU2NyaXB0Tm9kZTtcbmV4cG9ydHMuZGVjb2RlTmFtZSA9IGRlY29kZU5hbWU7XG5leHBvcnRzLmVuY29kZU5hbWUgPSBlbmNvZGVOYW1lO1xuZXhwb3J0cy5lcnJvciA9IGVycm9yO1xuZXhwb3J0cy5nZW5lcmF0ZUV4cG9zZUZpbGVuYW1lID0gZ2VuZXJhdGVFeHBvc2VGaWxlbmFtZTtcbmV4cG9ydHMuZ2VuZXJhdGVTaGFyZUZpbGVuYW1lID0gZ2VuZXJhdGVTaGFyZUZpbGVuYW1lO1xuZXhwb3J0cy5nZW5lcmF0ZVNuYXBzaG90RnJvbU1hbmlmZXN0ID0gZ2VuZXJhdGVTbmFwc2hvdEZyb21NYW5pZmVzdDtcbmV4cG9ydHMuZ2V0UHJvY2Vzc0VudiA9IGdldFByb2Nlc3NFbnY7XG5leHBvcnRzLmdldFJlc291cmNlVXJsID0gZ2V0UmVzb3VyY2VVcmw7XG5leHBvcnRzLmluZmVyQXV0b1B1YmxpY1BhdGggPSBpbmZlckF1dG9QdWJsaWNQYXRoO1xuZXhwb3J0cy5pc0Jyb3dzZXJFbnYgPSBpc0Jyb3dzZXJFbnY7XG5leHBvcnRzLmlzRGVidWdNb2RlID0gaXNEZWJ1Z01vZGU7XG5leHBvcnRzLmlzTWFuaWZlc3RQcm92aWRlciA9IGlzTWFuaWZlc3RQcm92aWRlcjtcbmV4cG9ydHMuaXNSZWFjdE5hdGl2ZUVudiA9IGlzUmVhY3ROYXRpdmVFbnY7XG5leHBvcnRzLmlzUmVxdWlyZWRWZXJzaW9uID0gaXNSZXF1aXJlZFZlcnNpb247XG5leHBvcnRzLmlzU3RhdGljUmVzb3VyY2VzRXF1YWwgPSBpc1N0YXRpY1Jlc291cmNlc0VxdWFsO1xuZXhwb3J0cy5sb2FkU2NyaXB0ID0gbG9hZFNjcmlwdDtcbmV4cG9ydHMubG9hZFNjcmlwdE5vZGUgPSBsb2FkU2NyaXB0Tm9kZTtcbmV4cG9ydHMubG9nZ2VyID0gbG9nZ2VyO1xuZXhwb3J0cy5tb2R1bGVGZWRlcmF0aW9uUGx1Z2luID0gTW9kdWxlRmVkZXJhdGlvblBsdWdpbjtcbmV4cG9ydHMubm9ybWFsaXplT3B0aW9ucyA9IG5vcm1hbGl6ZU9wdGlvbnM7XG5leHBvcnRzLnBhcnNlRW50cnkgPSBwYXJzZUVudHJ5O1xuZXhwb3J0cy5zYWZlVG9TdHJpbmcgPSBzYWZlVG9TdHJpbmc7XG5leHBvcnRzLnNhZmVXcmFwcGVyID0gc2FmZVdyYXBwZXI7XG5leHBvcnRzLnNoYXJlUGx1Z2luID0gU2hhcmVQbHVnaW47XG5leHBvcnRzLnNpbXBsZUpvaW5SZW1vdGVFbnRyeSA9IHNpbXBsZUpvaW5SZW1vdGVFbnRyeTtcbmV4cG9ydHMud2FybiA9IHdhcm47XG4iLCIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBzb3VyY2UpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZXhwb3J0cy5fID0gX2V4dGVuZHM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgRkVERVJBVElPTl9TVVBQT1JURURfVFlQRVMgPSBbXG4gICAgJ3NjcmlwdCdcbl07XG5leHBvcnRzLkZFREVSQVRJT05fU1VQUE9SVEVEX1RZUEVTID0gRkVERVJBVElPTl9TVVBQT1JURURfVFlQRVM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcnVudGltZSA9IHJlcXVpcmUoJ0Btb2R1bGUtZmVkZXJhdGlvbi9ydW50aW1lJyk7XG52YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50LmNqcy5janMnKTtcbnZhciBzZGsgPSByZXF1aXJlKCdAbW9kdWxlLWZlZGVyYXRpb24vc2RrJyk7XG5mdW5jdGlvbiBfaW50ZXJvcE5hbWVzcGFjZURlZmF1bHQoZSkge1xuICAgIHZhciBuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBpZiAoZSkge1xuICAgICAgICBmb3IodmFyIGsgaW4gZSl7XG4gICAgICAgICAgICBuW2tdID0gZVtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBuLmRlZmF1bHQgPSBlO1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKG4pO1xufVxudmFyIHJ1bnRpbWVfX25hbWVzcGFjZSA9IC8qI19fUFVSRV9fKi8gX2ludGVyb3BOYW1lc3BhY2VEZWZhdWx0KHJ1bnRpbWUpO1xuZnVuY3Rpb24gYXR0YWNoU2hhcmVTY29wZU1hcCh3ZWJwYWNrUmVxdWlyZSkge1xuICAgIGlmICghd2VicGFja1JlcXVpcmUuUyB8fCB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmhhc0F0dGFjaFNoYXJlU2NvcGVNYXAgfHwgIXdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2UgfHwgIXdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2Uuc2hhcmVTY29wZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHdlYnBhY2tSZXF1aXJlLlMgPSB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmluc3RhbmNlLnNoYXJlU2NvcGVNYXA7XG4gICAgd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5oYXNBdHRhY2hTaGFyZVNjb3BlTWFwID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHJlbW90ZXMob3B0aW9ucykge1xuICAgIHZhciBjaHVua0lkID0gb3B0aW9ucy5jaHVua0lkLCBwcm9taXNlcyA9IG9wdGlvbnMucHJvbWlzZXMsIGNodW5rTWFwcGluZyA9IG9wdGlvbnMuY2h1bmtNYXBwaW5nLCBpZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZyA9IG9wdGlvbnMuaWRUb0V4dGVybmFsQW5kTmFtZU1hcHBpbmcsIHdlYnBhY2tSZXF1aXJlID0gb3B0aW9ucy53ZWJwYWNrUmVxdWlyZSwgaWRUb1JlbW90ZU1hcCA9IG9wdGlvbnMuaWRUb1JlbW90ZU1hcDtcbiAgICBhdHRhY2hTaGFyZVNjb3BlTWFwKHdlYnBhY2tSZXF1aXJlKTtcbiAgICBpZiAod2VicGFja1JlcXVpcmUubyhjaHVua01hcHBpbmcsIGNodW5rSWQpKSB7XG4gICAgICAgIGNodW5rTWFwcGluZ1tjaHVua0lkXS5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICB2YXIgZ2V0U2NvcGUgPSB3ZWJwYWNrUmVxdWlyZS5SO1xuICAgICAgICAgICAgaWYgKCFnZXRTY29wZSkge1xuICAgICAgICAgICAgICAgIGdldFNjb3BlID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZGF0YSA9IGlkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nW2lkXTtcbiAgICAgICAgICAgIHZhciByZW1vdGVJbmZvcyA9IGlkVG9SZW1vdGVNYXBbaWRdO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBzZWVtcyBub3Qgd29ya1xuICAgICAgICAgICAgaWYgKGdldFNjb3BlLmluZGV4T2YoZGF0YSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgc2VlbXMgbm90IHdvcmtcbiAgICAgICAgICAgIGdldFNjb3BlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzLnB1c2goZGF0YS5wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKCdDb250YWluZXIgbWlzc2luZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgKz0gJ1xcbndoaWxlIGxvYWRpbmcgXCInLmNvbmNhdChkYXRhWzFdLCAnXCIgZnJvbSAnKS5jb25jYXQoZGF0YVsyXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdlYnBhY2tSZXF1aXJlLm1baWRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZGF0YS5wID0gMDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgaGFuZGxlRnVuY3Rpb24gPSBmdW5jdGlvbihmbiwgYXJnMSwgYXJnMiwgZCwgbmV4dCwgZmlyc3QpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IGZuKGFyZzEsIGFyZzIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KHJlc3VsdCwgZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goZGF0YS5wID0gcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQocHJvbWlzZSwgZCwgZmlyc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvbkV4dGVybmFsID0gZnVuY3Rpb24oZXh0ZXJuYWwsIF8sIGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4dGVybmFsID8gaGFuZGxlRnVuY3Rpb24od2VicGFja1JlcXVpcmUuSSwgZGF0YVswXSwgMCwgZXh0ZXJuYWwsIG9uSW5pdGlhbGl6ZWQsIGZpcnN0KSA6IG9uRXJyb3IoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gICAgICAgICAgICB2YXIgb25Jbml0aWFsaXplZCA9IGZ1bmN0aW9uKF8sIGV4dGVybmFsLCBmaXJzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVGdW5jdGlvbihleHRlcm5hbC5nZXQsIGRhdGFbMV0sIGdldFNjb3BlLCAwLCBvbkZhY3RvcnksIGZpcnN0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gICAgICAgICAgICB2YXIgb25GYWN0b3J5ID0gZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICAgICAgICAgICAgIGRhdGEucCA9IDE7XG4gICAgICAgICAgICAgICAgd2VicGFja1JlcXVpcmUubVtpZF0gPSBmdW5jdGlvbihtb2R1bGUxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTEuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvblJlbW90ZUxvYWRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZW1vdGVOYW1lID0gc2RrLmRlY29kZU5hbWUocmVtb3RlSW5mb3NbMF0ubmFtZSwgc2RrLkVOQ09ERV9OQU1FX1BSRUZJWCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZW1vdGVNb2R1bGVOYW1lID0gcmVtb3RlTmFtZSArIGRhdGFbMV0uc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2FkUmVtb3RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbnN0YW5jZS5sb2FkUmVtb3RlKHJlbW90ZU1vZHVsZU5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkRmFjdG9yeTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJ2J1aWxkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5vcHRpb25zLnNoYXJlU3RyYXRlZ3kgPT09ICd2ZXJzaW9uLWZpcnN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGluc3RhbmNlLnNoYXJlZEhhbmRsZXIuaW5pdGlhbGl6ZVNoYXJpbmcoZGF0YVswXSkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRSZW1vdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2FkUmVtb3RlKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB1c2VSdW50aW1lTG9hZCA9IHJlbW90ZUluZm9zLmxlbmd0aCA9PT0gMSAmJiBjb25zdGFudC5GRURFUkFUSU9OX1NVUFBPUlRFRF9UWVBFUy5pbmNsdWRlcyhyZW1vdGVJbmZvc1swXS5leHRlcm5hbFR5cGUpICYmIHJlbW90ZUluZm9zWzBdLm5hbWU7XG4gICAgICAgICAgICBpZiAodXNlUnVudGltZUxvYWQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVGdW5jdGlvbihvblJlbW90ZUxvYWRlZCwgZGF0YVsyXSwgMCwgMCwgb25GYWN0b3J5LCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRnVuY3Rpb24od2VicGFja1JlcXVpcmUsIGRhdGFbMl0sIDAsIDAsIG9uRXh0ZXJuYWwsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBjb25zdW1lcyhvcHRpb25zKSB7XG4gICAgdmFyIGNodW5rSWQgPSBvcHRpb25zLmNodW5rSWQsIHByb21pc2VzID0gb3B0aW9ucy5wcm9taXNlcywgY2h1bmtNYXBwaW5nID0gb3B0aW9ucy5jaHVua01hcHBpbmcsIGluc3RhbGxlZE1vZHVsZXMgPSBvcHRpb25zLmluc3RhbGxlZE1vZHVsZXMsIG1vZHVsZVRvSGFuZGxlck1hcHBpbmcgPSBvcHRpb25zLm1vZHVsZVRvSGFuZGxlck1hcHBpbmcsIHdlYnBhY2tSZXF1aXJlID0gb3B0aW9ucy53ZWJwYWNrUmVxdWlyZTtcbiAgICBhdHRhY2hTaGFyZVNjb3BlTWFwKHdlYnBhY2tSZXF1aXJlKTtcbiAgICBpZiAod2VicGFja1JlcXVpcmUubyhjaHVua01hcHBpbmcsIGNodW5rSWQpKSB7XG4gICAgICAgIGNodW5rTWFwcGluZ1tjaHVua0lkXS5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICBpZiAod2VicGFja1JlcXVpcmUubyhpbnN0YWxsZWRNb2R1bGVzLCBpZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZXMucHVzaChpbnN0YWxsZWRNb2R1bGVzW2lkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb25GYWN0b3J5ID0gZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICAgICAgICAgICAgIGluc3RhbGxlZE1vZHVsZXNbaWRdID0gMDtcbiAgICAgICAgICAgICAgICB3ZWJwYWNrUmVxdWlyZS5tW2lkXSA9IGZ1bmN0aW9uKG1vZHVsZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHdlYnBhY2tSZXF1aXJlLmNbaWRdO1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUxLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbaWRdO1xuICAgICAgICAgICAgICAgIHdlYnBhY2tSZXF1aXJlLm1baWRdID0gZnVuY3Rpb24obW9kdWxlMSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgd2VicGFja1JlcXVpcmUuY1tpZF07XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZmVkZXJhdGlvbkluc3RhbmNlID0gd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBpZiAoIWZlZGVyYXRpb25JbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZlZGVyYXRpb24gaW5zdGFuY2Ugbm90IGZvdW5kIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX21vZHVsZVRvSGFuZGxlck1hcHBpbmdfaWQgPSBtb2R1bGVUb0hhbmRsZXJNYXBwaW5nW2lkXSwgc2hhcmVLZXkgPSBfbW9kdWxlVG9IYW5kbGVyTWFwcGluZ19pZC5zaGFyZUtleSwgZ2V0dGVyID0gX21vZHVsZVRvSGFuZGxlck1hcHBpbmdfaWQuZ2V0dGVyLCBzaGFyZUluZm8gPSBfbW9kdWxlVG9IYW5kbGVyTWFwcGluZ19pZC5zaGFyZUluZm87XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBmZWRlcmF0aW9uSW5zdGFuY2UubG9hZFNoYXJlKHNoYXJlS2V5LCB7XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVNoYXJlSW5mbzogc2hhcmVJbmZvXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWN0b3J5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRNb2R1bGVzW2lkXSA9IHByb21pc2UudGhlbihvbkZhY3RvcnkpLmNhdGNoKG9uRXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIG1haW50YWluIHByZXZpb3VzIGxvZ2ljXG4gICAgICAgICAgICAgICAgICAgIG9uRmFjdG9yeShwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgb25FcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNoYXJpbmcocGFyYW0pIHtcbiAgICB2YXIgc2hhcmVTY29wZU5hbWUgPSBwYXJhbS5zaGFyZVNjb3BlTmFtZSwgd2VicGFja1JlcXVpcmUgPSBwYXJhbS53ZWJwYWNrUmVxdWlyZSwgaW5pdFByb21pc2VzID0gcGFyYW0uaW5pdFByb21pc2VzLCBpbml0VG9rZW5zID0gcGFyYW0uaW5pdFRva2VucywgaW5pdFNjb3BlID0gcGFyYW0uaW5pdFNjb3BlO1xuICAgIHZhciBzaGFyZVNjb3BlS2V5cyA9IEFycmF5LmlzQXJyYXkoc2hhcmVTY29wZU5hbWUpID8gc2hhcmVTY29wZU5hbWUgOiBbXG4gICAgICAgIHNoYXJlU2NvcGVOYW1lXG4gICAgXTtcbiAgICB2YXIgaW5pdGlhbGl6ZVNoYXJpbmdQcm9taXNlcyA9IFtdO1xuICAgIHZhciBfaW5pdGlhbGl6ZVNoYXJpbmcgPSBmdW5jdGlvbiBfaW5pdGlhbGl6ZVNoYXJpbmcoc2hhcmVTY29wZUtleSkge1xuICAgICAgICBpZiAoIWluaXRTY29wZSkgaW5pdFNjb3BlID0gW107XG4gICAgICAgIHZhciBtZkluc3RhbmNlID0gd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbnN0YW5jZTtcbiAgICAgICAgLy8gaGFuZGxpbmcgY2lyY3VsYXIgaW5pdCBjYWxsc1xuICAgICAgICB2YXIgaW5pdFRva2VuID0gaW5pdFRva2Vuc1tzaGFyZVNjb3BlS2V5XTtcbiAgICAgICAgaWYgKCFpbml0VG9rZW4pIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbc2hhcmVTY29wZUtleV0gPSB7XG4gICAgICAgICAgICBmcm9tOiBtZkluc3RhbmNlLm5hbWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGluaXRTY29wZS5pbmRleE9mKGluaXRUb2tlbikgPj0gMCkgcmV0dXJuO1xuICAgICAgICBpbml0U2NvcGUucHVzaChpbml0VG9rZW4pO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IGluaXRQcm9taXNlc1tzaGFyZVNjb3BlS2V5XTtcbiAgICAgICAgaWYgKHByb21pc2UpIHJldHVybiBwcm9taXNlO1xuICAgICAgICB2YXIgd2FybiA9IGZ1bmN0aW9uKG1zZykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBpbml0RXh0ZXJuYWwgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZUVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdhcm4oJ0luaXRpYWxpemF0aW9uIG9mIHNoYXJpbmcgZXh0ZXJuYWwgZmFpbGVkOiAnICsgZXJyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBfJG1vZHVsZSA9IHdlYnBhY2tSZXF1aXJlKGlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIV8kbW9kdWxlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIGluaXRGbiA9IGZ1bmN0aW9uKG1vZHVsZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZHVsZTEgJiYgbW9kdWxlMS5pbml0ICYmIC8vIEB0cy1pZ25vcmUgY29tcGF0IGxlZ2FjeSBtZiBzaGFyZWQgYmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlMS5pbml0KHdlYnBhY2tSZXF1aXJlLlNbc2hhcmVTY29wZUtleV0sIGluaXRTY29wZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZU1hcDogd2VicGFja1JlcXVpcmUuUyB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGVLZXlzOiBzaGFyZVNjb3BlTmFtZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChfJG1vZHVsZS50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChfJG1vZHVsZS50aGVuKGluaXRGbiwgaGFuZGxlRXJyb3IpKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5pdFJlc3VsdCA9IGluaXRGbihfJG1vZHVsZSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGlmIChpbml0UmVzdWx0ICYmIHR5cGVvZiBpbml0UmVzdWx0ICE9PSAnYm9vbGVhbicgJiYgaW5pdFJlc3VsdC50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChpbml0UmVzdWx0WydjYXRjaCddKGhhbmRsZUVycm9yKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcHJvbWlzZXMgPSBtZkluc3RhbmNlLmluaXRpYWxpemVTaGFyaW5nKHNoYXJlU2NvcGVLZXksIHtcbiAgICAgICAgICAgIHN0cmF0ZWd5OiBtZkluc3RhbmNlLm9wdGlvbnMuc2hhcmVTdHJhdGVneSxcbiAgICAgICAgICAgIGluaXRTY29wZTogaW5pdFNjb3BlLFxuICAgICAgICAgICAgZnJvbTogJ2J1aWxkJ1xuICAgICAgICB9KTtcbiAgICAgICAgYXR0YWNoU2hhcmVTY29wZU1hcCh3ZWJwYWNrUmVxdWlyZSk7XG4gICAgICAgIHZhciBidW5kbGVyUnVudGltZVJlbW90ZXNPcHRpb25zID0gd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZU9wdGlvbnMucmVtb3RlcztcbiAgICAgICAgaWYgKGJ1bmRsZXJSdW50aW1lUmVtb3Rlc09wdGlvbnMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJ1bmRsZXJSdW50aW1lUmVtb3Rlc09wdGlvbnMuaWRUb1JlbW90ZU1hcCkuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmZvID0gYnVuZGxlclJ1bnRpbWVSZW1vdGVzT3B0aW9ucy5pZFRvUmVtb3RlTWFwW21vZHVsZUlkXTtcbiAgICAgICAgICAgICAgICB2YXIgZXh0ZXJuYWxNb2R1bGVJZCA9IGJ1bmRsZXJSdW50aW1lUmVtb3Rlc09wdGlvbnMuaWRUb0V4dGVybmFsQW5kTmFtZU1hcHBpbmdbbW9kdWxlSWRdWzJdO1xuICAgICAgICAgICAgICAgIGlmIChpbmZvLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdEV4dGVybmFsKGV4dGVybmFsTW9kdWxlSWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5mby5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW90ZUluZm8gPSBpbmZvWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnN0YW50LkZFREVSQVRJT05fU1VQUE9SVEVEX1RZUEVTLmluY2x1ZGVzKHJlbW90ZUluZm8uZXh0ZXJuYWxUeXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdEV4dGVybmFsKGV4dGVybmFsTW9kdWxlSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBpbml0UHJvbWlzZXNbc2hhcmVTY29wZUtleV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbml0UHJvbWlzZXNbc2hhcmVTY29wZUtleV0gPSBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBpbml0UHJvbWlzZXNbc2hhcmVTY29wZUtleV0gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHNoYXJlU2NvcGVLZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGluaXRpYWxpemVTaGFyaW5nUHJvbWlzZXMucHVzaChfaW5pdGlhbGl6ZVNoYXJpbmcoa2V5KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGluaXRpYWxpemVTaGFyaW5nUHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFuZGxlSW5pdGlhbENvbnN1bWVzKG9wdGlvbnMpIHtcbiAgICB2YXIgbW9kdWxlSWQgPSBvcHRpb25zLm1vZHVsZUlkLCBtb2R1bGVUb0hhbmRsZXJNYXBwaW5nID0gb3B0aW9ucy5tb2R1bGVUb0hhbmRsZXJNYXBwaW5nLCB3ZWJwYWNrUmVxdWlyZSA9IG9wdGlvbnMud2VicGFja1JlcXVpcmU7XG4gICAgdmFyIGZlZGVyYXRpb25JbnN0YW5jZSA9IHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2U7XG4gICAgaWYgKCFmZWRlcmF0aW9uSW5zdGFuY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGZWRlcmF0aW9uIGluc3RhbmNlIG5vdCBmb3VuZCEnKTtcbiAgICB9XG4gICAgdmFyIF9tb2R1bGVUb0hhbmRsZXJNYXBwaW5nX21vZHVsZUlkID0gbW9kdWxlVG9IYW5kbGVyTWFwcGluZ1ttb2R1bGVJZF0sIHNoYXJlS2V5ID0gX21vZHVsZVRvSGFuZGxlck1hcHBpbmdfbW9kdWxlSWQuc2hhcmVLZXksIHNoYXJlSW5mbyA9IF9tb2R1bGVUb0hhbmRsZXJNYXBwaW5nX21vZHVsZUlkLnNoYXJlSW5mbztcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZmVkZXJhdGlvbkluc3RhbmNlLmxvYWRTaGFyZVN5bmMoc2hhcmVLZXksIHtcbiAgICAgICAgICAgIGN1c3RvbVNoYXJlSW5mbzogc2hhcmVJbmZvXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdsb2FkU2hhcmVTeW5jIGZhaWxlZCEgVGhlIGZ1bmN0aW9uIHNob3VsZCBub3QgYmUgY2FsbGVkIHVubGVzcyB5b3Ugc2V0IFwiZWFnZXI6dHJ1ZVwiLiBJZiB5b3UgZG8gbm90IHNldCBpdCwgYW5kIGVuY291bnRlciB0aGlzIGlzc3VlLCB5b3UgY2FuIGNoZWNrIHdoZXRoZXIgYW4gYXN5bmMgYm91bmRhcnkgaXMgaW1wbGVtZW50ZWQuJyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBvcmlnaW5hbCBlcnJvciBtZXNzYWdlIGlzIGFzIGZvbGxvd3M6ICcpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zdGFsbEluaXRpYWxDb25zdW1lcyhvcHRpb25zKSB7XG4gICAgdmFyIG1vZHVsZVRvSGFuZGxlck1hcHBpbmcgPSBvcHRpb25zLm1vZHVsZVRvSGFuZGxlck1hcHBpbmcsIHdlYnBhY2tSZXF1aXJlID0gb3B0aW9ucy53ZWJwYWNrUmVxdWlyZSwgaW5zdGFsbGVkTW9kdWxlcyA9IG9wdGlvbnMuaW5zdGFsbGVkTW9kdWxlcywgaW5pdGlhbENvbnN1bWVzID0gb3B0aW9ucy5pbml0aWFsQ29uc3VtZXM7XG4gICAgaW5pdGlhbENvbnN1bWVzLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgd2VicGFja1JlcXVpcmUubVtpZF0gPSBmdW5jdGlvbihtb2R1bGUxKSB7XG4gICAgICAgICAgICAvLyBIYW5kbGUgc2NlbmFyaW8gd2hlbiBtb2R1bGUgaXMgdXNlZCBzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICBpbnN0YWxsZWRNb2R1bGVzW2lkXSA9IDA7XG4gICAgICAgICAgICBkZWxldGUgd2VicGFja1JlcXVpcmUuY1tpZF07XG4gICAgICAgICAgICB2YXIgZmFjdG9yeSA9IGhhbmRsZUluaXRpYWxDb25zdW1lcyh7XG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6IGlkLFxuICAgICAgICAgICAgICAgIG1vZHVsZVRvSGFuZGxlck1hcHBpbmc6IG1vZHVsZVRvSGFuZGxlck1hcHBpbmcsXG4gICAgICAgICAgICAgICAgd2VicGFja1JlcXVpcmU6IHdlYnBhY2tSZXF1aXJlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmFjdG9yeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoYXJlZCBtb2R1bGUgaXMgbm90IGF2YWlsYWJsZSBmb3IgZWFnZXIgY29uc3VtcHRpb246IFwiLmNvbmNhdChpZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kdWxlMS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gc291cmNlKWlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIGluaXRDb250YWluZXJFbnRyeShvcHRpb25zKSB7XG4gICAgdmFyIHdlYnBhY2tSZXF1aXJlID0gb3B0aW9ucy53ZWJwYWNrUmVxdWlyZSwgc2hhcmVTY29wZSA9IG9wdGlvbnMuc2hhcmVTY29wZSwgaW5pdFNjb3BlID0gb3B0aW9ucy5pbml0U2NvcGUsIHNoYXJlU2NvcGVLZXkgPSBvcHRpb25zLnNoYXJlU2NvcGVLZXksIHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMgPSBvcHRpb25zLnJlbW90ZUVudHJ5SW5pdE9wdGlvbnM7XG4gICAgaWYgKCF3ZWJwYWNrUmVxdWlyZS5TKSByZXR1cm47XG4gICAgaWYgKCF3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uIHx8ICF3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmluc3RhbmNlIHx8ICF3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmluaXRPcHRpb25zKSByZXR1cm47XG4gICAgdmFyIGZlZGVyYXRpb25JbnN0YW5jZSA9IHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2U7XG4gICAgZmVkZXJhdGlvbkluc3RhbmNlLmluaXRPcHRpb25zKF9leHRlbmRzKHtcbiAgICAgICAgbmFtZTogd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5uYW1lLFxuICAgICAgICByZW1vdGVzOiBbXVxuICAgIH0sIHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMpKTtcbiAgICB2YXIgaG9zdFNoYXJlU2NvcGVLZXlzID0gcmVtb3RlRW50cnlJbml0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlRW50cnlJbml0T3B0aW9ucy5zaGFyZVNjb3BlS2V5cztcbiAgICB2YXIgaG9zdFNoYXJlU2NvcGVNYXAgPSByZW1vdGVFbnRyeUluaXRPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiByZW1vdGVFbnRyeUluaXRPcHRpb25zLnNoYXJlU2NvcGVNYXA7XG4gICAgLy8gaG9zdDogJ2RlZmF1bHQnIHJlbW90ZTogJ2RlZmF1bHQnICByZW1vdGVbJ2RlZmF1bHQnXSA9IGhvc3RTaGFyZVNjb3BlTWFwWydkZWZhdWx0J11cbiAgICAvLyBob3N0OiBbJ2RlZmF1bHQnLCAnc2NvcGUxJ10gcmVtb3RlOiAnZGVmYXVsdCcgIHJlbW90ZVsnZGVmYXVsdCddID0gaG9zdFNoYXJlU2NvcGVNYXBbJ2RlZmF1bHQnXTsgcmVtb3RlWydzY29wZTEnXSA9IGhvc3RTaGFyZVNjb3BlTWFwWydzY29wMSddXG4gICAgLy8gaG9zdDogJ2RlZmF1bHQnIHJlbW90ZTogWydkZWZhdWx0Jywnc2NvcGUxJ10gIHJlbW90ZVsnZGVmYXVsdCddID0gaG9zdFNoYXJlU2NvcGVNYXBbJ2RlZmF1bHQnXTsgcmVtb3RlWydzY29wZTEnXSA9IGhvc3RTaGFyZVNjb3BlTWFwWydzY29wZTEnXSA9IHt9XG4gICAgLy8gaG9zdDogWydzY29wZTEnLCdkZWZhdWx0J10gcmVtb3RlOiBbJ3Njb3BlMScsJ3Njb3BlMiddID0+IHJlbW90ZVsnc2NvcGUxJ10gPSBob3N0U2hhcmVTY29wZU1hcFsnc2NvcGUxJ107IHJlbW90ZVsnc2NvcGUyJ10gPSBob3N0U2hhcmVTY29wZU1hcFsnc2NvcGUyJ10gPSB7fTtcbiAgICBpZiAoIXNoYXJlU2NvcGVLZXkgfHwgdHlwZW9mIHNoYXJlU2NvcGVLZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBrZXkgPSBzaGFyZVNjb3BlS2V5IHx8ICdkZWZhdWx0JztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaG9zdFNoYXJlU2NvcGVLZXlzKSkge1xuICAgICAgICAgICAgLy8gY29uc3Qgc2MgPSBob3N0U2hhcmVTY29wZU1hcCFba2V5XTtcbiAgICAgICAgICAgIC8vIGlmICghc2MpIHtcbiAgICAgICAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdzaGFyZVNjb3BlS2V5IGlzIG5vdCBleGlzdCBpbiBob3N0U2hhcmVTY29wZU1hcCcpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZmVkZXJhdGlvbkluc3RhbmNlLmluaXRTaGFyZVNjb3BlTWFwKGtleSwgc2MsIHtcbiAgICAgICAgICAgIC8vICAgaG9zdFNoYXJlU2NvcGVNYXA6IHJlbW90ZUVudHJ5SW5pdE9wdGlvbnM/LnNoYXJlU2NvcGVNYXAgfHwge30sXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGhvc3RLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhvc3RTaGFyZVNjb3BlTWFwW2hvc3RLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwW2hvc3RLZXldID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzYyA9IGhvc3RTaGFyZVNjb3BlTWFwW2hvc3RLZXldO1xuICAgICAgICAgICAgICAgIGZlZGVyYXRpb25JbnN0YW5jZS5pbml0U2hhcmVTY29wZU1hcChob3N0S2V5LCBzYywge1xuICAgICAgICAgICAgICAgICAgICBob3N0U2hhcmVTY29wZU1hcDogKHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMuc2hhcmVTY29wZU1hcCkgfHwge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmVkZXJhdGlvbkluc3RhbmNlLmluaXRTaGFyZVNjb3BlTWFwKGtleSwgc2hhcmVTY29wZSwge1xuICAgICAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwOiAocmVtb3RlRW50cnlJbml0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlRW50cnlJbml0T3B0aW9ucy5zaGFyZVNjb3BlTWFwKSB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBzaGFyZVNjb3BlS2V5LmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBpZiAoIWhvc3RTaGFyZVNjb3BlS2V5cyB8fCAhaG9zdFNoYXJlU2NvcGVNYXApIHtcbiAgICAgICAgICAgICAgICBmZWRlcmF0aW9uSW5zdGFuY2UuaW5pdFNoYXJlU2NvcGVNYXAoa2V5LCBzaGFyZVNjb3BlLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwOiAocmVtb3RlRW50cnlJbml0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlRW50cnlJbml0T3B0aW9ucy5zaGFyZVNjb3BlTWFwKSB8fCB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaG9zdFNoYXJlU2NvcGVNYXBba2V5XSkge1xuICAgICAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwW2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzYyA9IGhvc3RTaGFyZVNjb3BlTWFwW2tleV07XG4gICAgICAgICAgICBmZWRlcmF0aW9uSW5zdGFuY2UuaW5pdFNoYXJlU2NvcGVNYXAoa2V5LCBzYywge1xuICAgICAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwOiAocmVtb3RlRW50cnlJbml0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlRW50cnlJbml0T3B0aW9ucy5zaGFyZVNjb3BlTWFwKSB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAod2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5hdHRhY2hTaGFyZVNjb3BlTWFwKSB7XG4gICAgICAgIHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uYXR0YWNoU2hhcmVTY29wZU1hcCh3ZWJwYWNrUmVxdWlyZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5wcmVmZXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLnByZWZldGNoKCk7XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFyZVNjb3BlS2V5KSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB3ZWJwYWNrUmVxdWlyZS5JKHNoYXJlU2NvcGVLZXkgfHwgJ2RlZmF1bHQnLCBpbml0U2NvcGUpO1xuICAgIH1cbiAgICB2YXIgcHJveHlJbml0aWFsaXplU2hhcmluZyA9IEJvb2xlYW4od2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQpO1xuICAgIGlmIChwcm94eUluaXRpYWxpemVTaGFyaW5nKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIHdlYnBhY2tSZXF1aXJlLkkoc2hhcmVTY29wZUtleSwgaW5pdFNjb3BlKTtcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBQcm9taXNlLmFsbChzaGFyZVNjb3BlS2V5Lm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gd2VicGFja1JlcXVpcmUuSShrZXksIGluaXRTY29wZSk7XG4gICAgfSkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxudmFyIGZlZGVyYXRpb24gPSB7XG4gICAgcnVudGltZTogcnVudGltZV9fbmFtZXNwYWNlLFxuICAgIGluc3RhbmNlOiB1bmRlZmluZWQsXG4gICAgaW5pdE9wdGlvbnM6IHVuZGVmaW5lZCxcbiAgICBidW5kbGVyUnVudGltZToge1xuICAgICAgICByZW1vdGVzOiByZW1vdGVzLFxuICAgICAgICBjb25zdW1lczogY29uc3VtZXMsXG4gICAgICAgIEk6IGluaXRpYWxpemVTaGFyaW5nLFxuICAgICAgICBTOiB7fSxcbiAgICAgICAgaW5zdGFsbEluaXRpYWxDb25zdW1lczogaW5zdGFsbEluaXRpYWxDb25zdW1lcyxcbiAgICAgICAgaW5pdENvbnRhaW5lckVudHJ5OiBpbml0Q29udGFpbmVyRW50cnlcbiAgICB9LFxuICAgIGF0dGFjaFNoYXJlU2NvcGVNYXA6IGF0dGFjaFNoYXJlU2NvcGVNYXAsXG4gICAgYnVuZGxlclJ1bnRpbWVPcHRpb25zOiB7fVxufTtcbm1vZHVsZS5leHBvcnRzID0gZmVkZXJhdGlvbjtcbiIsImZ1bmN0aW9uIF9hcnJheV9saWtlX3RvX2FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgZm9yKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspYXJyMltpXSA9IGFycltpXTtcbiAgICByZXR1cm4gYXJyMjtcbn1cbmZ1bmN0aW9uIF9hcnJheV93aXRoX2hvbGVzKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5mdW5jdGlvbiBfYXJyYXlfd2l0aG91dF9ob2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5X2xpa2VfdG9fYXJyYXkoYXJyKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZV90b19hcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5mdW5jdGlvbiBfaXRlcmFibGVfdG9fYXJyYXlfbGltaXQoYXJyLCBpKSB7XG4gICAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuICAgIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfcywgX2U7XG4gICAgdHJ5IHtcbiAgICAgICAgZm9yKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKXtcbiAgICAgICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2QgPSB0cnVlO1xuICAgICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9hcnI7XG59XG5mdW5jdGlvbiBfbm9uX2l0ZXJhYmxlX3Jlc3QoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxcXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZnVuY3Rpb24gX25vbl9pdGVyYWJsZV9zcHJlYWQoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIF9zbGljZWRfdG9fYXJyYXkoYXJyLCBpKSB7XG4gICAgcmV0dXJuIF9hcnJheV93aXRoX2hvbGVzKGFycikgfHwgX2l0ZXJhYmxlX3RvX2FycmF5X2xpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkX2l0ZXJhYmxlX3RvX2FycmF5KGFyciwgaSkgfHwgX25vbl9pdGVyYWJsZV9yZXN0KCk7XG59XG5mdW5jdGlvbiBfdG9fY29uc3VtYWJsZV9hcnJheShhcnIpIHtcbiAgICByZXR1cm4gX2FycmF5X3dpdGhvdXRfaG9sZXMoYXJyKSB8fCBfaXRlcmFibGVfdG9fYXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRfaXRlcmFibGVfdG9fYXJyYXkoYXJyKSB8fCBfbm9uX2l0ZXJhYmxlX3NwcmVhZCgpO1xufVxuZnVuY3Rpb24gX3R5cGVfb2Yob2JqKSB7XG4gICAgXCJAc3djL2hlbHBlcnMgLSB0eXBlb2ZcIjtcbiAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZF9pdGVyYWJsZV90b19hcnJheShvLCBtaW5MZW4pIHtcbiAgICBpZiAoIW8pIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlfbGlrZV90b19hcnJheShvLCBtaW5MZW4pO1xuICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICAgIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5X2xpa2VfdG9fYXJyYXkobywgbWluTGVuKTtcbn1cbmltcG9ydCBfX21vZHVsZV9mZWRlcmF0aW9uX2J1bmRsZXJfcnVudGltZV9fIGZyb20gXCIvVXNlcnMvYXZlY2hrYW5vdi9EZXNrdG9wL3RyYW5zcGlsZXJzLW1vZHVsZXMtYnVuZGxlcnMvbGVzc29ucy9sZXNzb25fMTMvY29uc3VtZXIyL25vZGVfbW9kdWxlcy9AbW9kdWxlLWZlZGVyYXRpb24vd2VicGFjay1idW5kbGVyLXJ1bnRpbWUvZGlzdC9pbmRleC5janMuY2pzXCI7XG52YXIgX19tb2R1bGVfZmVkZXJhdGlvbl9ydW50aW1lX3BsdWdpbnNfXyA9IFtdO1xudmFyIF9fbW9kdWxlX2ZlZGVyYXRpb25fcmVtb3RlX2luZm9zX18gPSB7XG4gICAgXCJwcm92aWRlclwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiYWxpYXNcIjogXCJwcm92aWRlclwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicHJvdmlkZXJcIixcbiAgICAgICAgICAgIFwiZW50cnlcIjogXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbWYtbWFuaWZlc3QuanNvblwiLFxuICAgICAgICAgICAgXCJleHRlcm5hbFR5cGVcIjogXCJzY3JpcHRcIixcbiAgICAgICAgICAgIFwic2hhcmVTY29wZVwiOiBcImRlZmF1bHRcIlxuICAgICAgICB9XG4gICAgXVxufTtcbnZhciBfX21vZHVsZV9mZWRlcmF0aW9uX2NvbnRhaW5lcl9uYW1lX18gPSBcImhvc3RcIjtcbnZhciBfX21vZHVsZV9mZWRlcmF0aW9uX3NoYXJlX3N0cmF0ZWd5X18gPSBcInZlcnNpb24tZmlyc3RcIjtcbmlmICgoX193ZWJwYWNrX3JlcXVpcmVfXy5pbml0aWFsaXplU2hhcmluZ0RhdGEgfHwgX193ZWJwYWNrX3JlcXVpcmVfXy5pbml0aWFsaXplRXhwb3Nlc0RhdGEpICYmIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbikge1xuICAgIHZhciBfX3dlYnBhY2tfcmVxdWlyZV9fX3JlbW90ZXNMb2FkaW5nRGF0YSwgX193ZWJwYWNrX3JlcXVpcmVfX19yZW1vdGVzTG9hZGluZ0RhdGExLCBfX3dlYnBhY2tfcmVxdWlyZV9fX2luaXRpYWxpemVTaGFyaW5nRGF0YSwgX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhLCBfX3dlYnBhY2tfcmVxdWlyZV9fX2NvbnN1bWVzTG9hZGluZ0RhdGExLCBfX3dlYnBhY2tfcmVxdWlyZV9fX2luaXRpYWxpemVFeHBvc2VzRGF0YSwgX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhMjtcbiAgICB2YXIgb3ZlcnJpZGUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCFvYmopIHJldHVybjtcbiAgICAgICAgaWYgKG9ialtrZXldKSBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gICAgdmFyIG1lcmdlID0gZnVuY3Rpb24ob2JqLCBrZXksIGZuKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGZuKCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFyIF9vYmpfa2V5O1xuICAgICAgICAgICAgdmFyIF9vYmosIF9rZXk7XG4gICAgICAgICAgICB2YXIgXztcbiAgICAgICAgICAgIChfID0gKF9vYmogPSBvYmopW19rZXkgPSBrZXldKSAhPT0gbnVsbCAmJiBfICE9PSB2b2lkIDAgPyBfIDogX29ialtfa2V5XSA9IFtdO1xuICAgICAgICAgICAgKF9vYmpfa2V5ID0gb2JqW2tleV0pLnB1c2guYXBwbHkoX29ial9rZXksIF90b19jb25zdW1hYmxlX2FycmF5KHZhbHVlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZV9vZih2YWx1ZSkpID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgX29iajEsIF9rZXkxO1xuICAgICAgICAgICAgdmFyIF8xO1xuICAgICAgICAgICAgKF8xID0gKF9vYmoxID0gb2JqKVtfa2V5MSA9IGtleV0pICE9PSBudWxsICYmIF8xICE9PSB2b2lkIDAgPyBfMSA6IF9vYmoxW19rZXkxXSA9IHt9O1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvYmpba2V5XSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgZWFybHkgPSBmdW5jdGlvbihvYmosIGtleSwgaW5pdGlhbCkge1xuICAgICAgICB2YXIgX29iaiwgX2tleTtcbiAgICAgICAgdmFyIF87XG4gICAgICAgIChfID0gKF9vYmogPSBvYmopW19rZXkgPSBrZXldKSAhPT0gbnVsbCAmJiBfICE9PSB2b2lkIDAgPyBfIDogX29ialtfa2V5XSA9IGluaXRpYWwoKTtcbiAgICB9O1xuICAgIHZhciBfX3dlYnBhY2tfcmVxdWlyZV9fX3JlbW90ZXNMb2FkaW5nRGF0YV9jaHVua01hcHBpbmc7XG4gICAgdmFyIHJlbW90ZXNMb2FkaW5nQ2h1bmtNYXBwaW5nID0gKF9fd2VicGFja19yZXF1aXJlX19fcmVtb3Rlc0xvYWRpbmdEYXRhX2NodW5rTWFwcGluZyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fX3JlbW90ZXNMb2FkaW5nRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ucmVtb3Rlc0xvYWRpbmdEYXRhKSA9PT0gbnVsbCB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fX3JlbW90ZXNMb2FkaW5nRGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX193ZWJwYWNrX3JlcXVpcmVfX19yZW1vdGVzTG9hZGluZ0RhdGEuY2h1bmtNYXBwaW5nKSAhPT0gbnVsbCAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fX3JlbW90ZXNMb2FkaW5nRGF0YV9jaHVua01hcHBpbmcgIT09IHZvaWQgMCA/IF9fd2VicGFja19yZXF1aXJlX19fcmVtb3Rlc0xvYWRpbmdEYXRhX2NodW5rTWFwcGluZyA6IHt9O1xuICAgIHZhciBfX3dlYnBhY2tfcmVxdWlyZV9fX3JlbW90ZXNMb2FkaW5nRGF0YV9tb2R1bGVJZFRvUmVtb3RlRGF0YU1hcHBpbmc7XG4gICAgdmFyIHJlbW90ZXNMb2FkaW5nTW9kdWxlSWRUb1JlbW90ZURhdGFNYXBwaW5nID0gKF9fd2VicGFja19yZXF1aXJlX19fcmVtb3Rlc0xvYWRpbmdEYXRhX21vZHVsZUlkVG9SZW1vdGVEYXRhTWFwcGluZyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fX3JlbW90ZXNMb2FkaW5nRGF0YTEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnJlbW90ZXNMb2FkaW5nRGF0YSkgPT09IG51bGwgfHwgX193ZWJwYWNrX3JlcXVpcmVfX19yZW1vdGVzTG9hZGluZ0RhdGExID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfX3dlYnBhY2tfcmVxdWlyZV9fX3JlbW90ZXNMb2FkaW5nRGF0YTEubW9kdWxlSWRUb1JlbW90ZURhdGFNYXBwaW5nKSAhPT0gbnVsbCAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fX3JlbW90ZXNMb2FkaW5nRGF0YV9tb2R1bGVJZFRvUmVtb3RlRGF0YU1hcHBpbmcgIT09IHZvaWQgMCA/IF9fd2VicGFja19yZXF1aXJlX19fcmVtb3Rlc0xvYWRpbmdEYXRhX21vZHVsZUlkVG9SZW1vdGVEYXRhTWFwcGluZyA6IHt9O1xuICAgIHZhciBfX3dlYnBhY2tfcmVxdWlyZV9fX2luaXRpYWxpemVTaGFyaW5nRGF0YV9zY29wZVRvU2hhcmluZ0RhdGFNYXBwaW5nO1xuICAgIHZhciBpbml0aWFsaXplU2hhcmluZ1Njb3BlVG9Jbml0RGF0YU1hcHBpbmcgPSAoX193ZWJwYWNrX3JlcXVpcmVfX19pbml0aWFsaXplU2hhcmluZ0RhdGFfc2NvcGVUb1NoYXJpbmdEYXRhTWFwcGluZyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fX2luaXRpYWxpemVTaGFyaW5nRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18uaW5pdGlhbGl6ZVNoYXJpbmdEYXRhKSA9PT0gbnVsbCB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fX2luaXRpYWxpemVTaGFyaW5nRGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX193ZWJwYWNrX3JlcXVpcmVfX19pbml0aWFsaXplU2hhcmluZ0RhdGEuc2NvcGVUb1NoYXJpbmdEYXRhTWFwcGluZykgIT09IG51bGwgJiYgX193ZWJwYWNrX3JlcXVpcmVfX19pbml0aWFsaXplU2hhcmluZ0RhdGFfc2NvcGVUb1NoYXJpbmdEYXRhTWFwcGluZyAhPT0gdm9pZCAwID8gX193ZWJwYWNrX3JlcXVpcmVfX19pbml0aWFsaXplU2hhcmluZ0RhdGFfc2NvcGVUb1NoYXJpbmdEYXRhTWFwcGluZyA6IHt9O1xuICAgIHZhciBfX3dlYnBhY2tfcmVxdWlyZV9fX2NvbnN1bWVzTG9hZGluZ0RhdGFfY2h1bmtNYXBwaW5nO1xuICAgIHZhciBjb25zdW1lc0xvYWRpbmdDaHVua01hcHBpbmcgPSAoX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhX2NodW5rTWFwcGluZyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fX2NvbnN1bWVzTG9hZGluZ0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNvbnN1bWVzTG9hZGluZ0RhdGEpID09PSBudWxsIHx8IF9fd2VicGFja19yZXF1aXJlX19fY29uc3VtZXNMb2FkaW5nRGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhLmNodW5rTWFwcGluZykgIT09IG51bGwgJiYgX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhX2NodW5rTWFwcGluZyAhPT0gdm9pZCAwID8gX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhX2NodW5rTWFwcGluZyA6IHt9O1xuICAgIHZhciBfX3dlYnBhY2tfcmVxdWlyZV9fX2NvbnN1bWVzTG9hZGluZ0RhdGFfbW9kdWxlSWRUb0NvbnN1bWVEYXRhTWFwcGluZztcbiAgICB2YXIgY29uc3VtZXNMb2FkaW5nTW9kdWxlVG9Db25zdW1lRGF0YU1hcHBpbmcgPSAoX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhX21vZHVsZUlkVG9Db25zdW1lRGF0YU1hcHBpbmcgPSAoX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhMSA9IF9fd2VicGFja19yZXF1aXJlX18uY29uc3VtZXNMb2FkaW5nRGF0YSkgPT09IG51bGwgfHwgX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhMS5tb2R1bGVJZFRvQ29uc3VtZURhdGFNYXBwaW5nKSAhPT0gbnVsbCAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fX2NvbnN1bWVzTG9hZGluZ0RhdGFfbW9kdWxlSWRUb0NvbnN1bWVEYXRhTWFwcGluZyAhPT0gdm9pZCAwID8gX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhX21vZHVsZUlkVG9Db25zdW1lRGF0YU1hcHBpbmcgOiB7fTtcbiAgICB2YXIgY29uc3VtZXNMb2FkaW5naW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuICAgIHZhciBpbml0aWFsaXplU2hhcmluZ0luaXRQcm9taXNlcyA9IFtdO1xuICAgIHZhciBpbml0aWFsaXplU2hhcmluZ0luaXRUb2tlbnMgPSB7fTtcbiAgICB2YXIgY29udGFpbmVyU2hhcmVTY29wZSA9IChfX3dlYnBhY2tfcmVxdWlyZV9fX2luaXRpYWxpemVFeHBvc2VzRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18uaW5pdGlhbGl6ZUV4cG9zZXNEYXRhKSA9PT0gbnVsbCB8fCBfX3dlYnBhY2tfcmVxdWlyZV9fX2luaXRpYWxpemVFeHBvc2VzRGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX193ZWJwYWNrX3JlcXVpcmVfX19pbml0aWFsaXplRXhwb3Nlc0RhdGEuc2hhcmVTY29wZTtcbiAgICBmb3IodmFyIGtleSBpbiBfX21vZHVsZV9mZWRlcmF0aW9uX2J1bmRsZXJfcnVudGltZV9fKXtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uW2tleV0gPSBfX21vZHVsZV9mZWRlcmF0aW9uX2J1bmRsZXJfcnVudGltZV9fW2tleV07XG4gICAgfVxuICAgIGVhcmx5KF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbiwgXCJjb25zdW1lc0xvYWRpbmdNb2R1bGVUb0hhbmRsZXJNYXBwaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29uc3VtZXNMb2FkaW5nTW9kdWxlVG9IYW5kbGVyTWFwcGluZyA9IHt9O1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2UsIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yKHZhciBfaXRlcmF0b3IgPSBPYmplY3QuZW50cmllcyhjb25zdW1lc0xvYWRpbmdNb2R1bGVUb0NvbnN1bWVEYXRhTWFwcGluZylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKXtcbiAgICAgICAgICAgICAgICB2YXIgX3N0ZXBfdmFsdWUgPSBfc2xpY2VkX3RvX2FycmF5KF9zdGVwLnZhbHVlLCAyKSwgbW9kdWxlSWQgPSBfc3RlcF92YWx1ZVswXSwgZGF0YSA9IF9zdGVwX3ZhbHVlWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN1bWVzTG9hZGluZ01vZHVsZVRvSGFuZGxlck1hcHBpbmdbbW9kdWxlSWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBnZXR0ZXI6IGRhdGEuZmFsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhlZERlcGVuZGVuY2llczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRWZXJzaW9uOiBkYXRhLnJlcXVpcmVkVmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpY3RWZXJzaW9uOiBkYXRhLnN0cmljdFZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xldG9uOiBkYXRhLnNpbmdsZXRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYWdlcjogZGF0YS5lYWdlclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5zaGFyZVNjb3BlXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlS2V5OiBkYXRhLnNoYXJlS2V5XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uc3VtZXNMb2FkaW5nTW9kdWxlVG9IYW5kbGVyTWFwcGluZztcbiAgICB9KTtcbiAgICBlYXJseShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24sIFwiaW5pdE9wdGlvbnNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9KTtcbiAgICBlYXJseShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMsIFwibmFtZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fbW9kdWxlX2ZlZGVyYXRpb25fY29udGFpbmVyX25hbWVfXztcbiAgICB9KTtcbiAgICBlYXJseShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMsIFwic2hhcmVTdHJhdGVneVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fbW9kdWxlX2ZlZGVyYXRpb25fc2hhcmVfc3RyYXRlZ3lfXztcbiAgICB9KTtcbiAgICBlYXJseShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMsIFwic2hhcmVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2hhcmVkID0ge307XG4gICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZSwgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IodmFyIF9pdGVyYXRvciA9IE9iamVjdC5lbnRyaWVzKGluaXRpYWxpemVTaGFyaW5nU2NvcGVUb0luaXREYXRhTWFwcGluZylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKXtcbiAgICAgICAgICAgICAgICB2YXIgX3N0ZXBfdmFsdWUgPSBfc2xpY2VkX3RvX2FycmF5KF9zdGVwLnZhbHVlLCAyKSwgc2NvcGUgPSBfc3RlcF92YWx1ZVswXSwgc3RhZ2VzID0gX3N0ZXBfdmFsdWVbMV07XG4gICAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24xID0gdHJ1ZSwgX2RpZEl0ZXJhdG9yRXJyb3IxID0gZmFsc2UsIF9pdGVyYXRvckVycm9yMSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIF9pdGVyYXRvcjEgPSBzdGFnZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDE7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjEgPSAoX3N0ZXAxID0gX2l0ZXJhdG9yMS5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMSA9IHRydWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YWdlID0gX3N0ZXAxLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0eXBlb2Ygc3RhZ2UgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVfb2Yoc3RhZ2UpKSA9PT0gXCJvYmplY3RcIiAmJiBzdGFnZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gc3RhZ2UubmFtZSwgdmVyc2lvbiA9IHN0YWdlLnZlcnNpb24sIGZhY3RvcnkgPSBzdGFnZS5mYWN0b3J5LCBlYWdlciA9IHN0YWdlLmVhZ2VyLCBzaW5nbGV0b24gPSBzdGFnZS5zaW5nbGV0b24sIHJlcXVpcmVkVmVyc2lvbiA9IHN0YWdlLnJlcXVpcmVkVmVyc2lvbiwgc3RyaWN0VmVyc2lvbiA9IHN0YWdlLnN0cmljdFZlcnNpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXJlQ29uZmlnID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzVmFsaWRWYWx1ZSA9IGZ1bmN0aW9uIGlzVmFsaWRWYWx1ZSh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFZhbHVlKHNpbmdsZXRvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVDb25maWcuc2luZ2xldG9uID0gc2luZ2xldG9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFZhbHVlKHJlcXVpcmVkVmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVDb25maWcucmVxdWlyZWRWZXJzaW9uID0gcmVxdWlyZWRWZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFZhbHVlKGVhZ2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZUNvbmZpZy5lYWdlciA9IGVhZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFZhbHVlKHN0cmljdFZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlQ29uZmlnLnN0cmljdFZlcnNpb24gPSBzdHJpY3RWZXJzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlQ29uZmlnOiBzaGFyZUNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmYWN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcmVkW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZFtuYW1lXS5wdXNoKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZFtuYW1lXSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IxID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IxID0gZXJyO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjEgJiYgX2l0ZXJhdG9yMS5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjEucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoYXJlZDtcbiAgICB9KTtcbiAgICBtZXJnZShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMsIFwicmVtb3Rlc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoX19tb2R1bGVfZmVkZXJhdGlvbl9yZW1vdGVfaW5mb3NfXykuZmxhdCgpLmZpbHRlcihmdW5jdGlvbihyZW1vdGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZW1vdGUuZXh0ZXJuYWxUeXBlID09PSBcInNjcmlwdFwiO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBtZXJnZShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMsIFwicGx1Z2luc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fbW9kdWxlX2ZlZGVyYXRpb25fcnVudGltZV9wbHVnaW5zX187XG4gICAgfSk7XG4gICAgZWFybHkoX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLCBcImJ1bmRsZXJSdW50aW1lT3B0aW9uc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0pO1xuICAgIGVhcmx5KF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZU9wdGlvbnMsIFwicmVtb3Rlc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH0pO1xuICAgIGVhcmx5KF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZU9wdGlvbnMucmVtb3RlcywgXCJjaHVua01hcHBpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZW1vdGVzTG9hZGluZ0NodW5rTWFwcGluZztcbiAgICB9KTtcbiAgICBlYXJseShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWVPcHRpb25zLnJlbW90ZXMsIFwiaWRUb0V4dGVybmFsQW5kTmFtZU1hcHBpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZW1vdGVzTG9hZGluZ0lkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nTWFwcGluZyA9IHt9O1xuICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2UsIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yKHZhciBfaXRlcmF0b3IgPSBPYmplY3QuZW50cmllcyhyZW1vdGVzTG9hZGluZ01vZHVsZUlkVG9SZW1vdGVEYXRhTWFwcGluZylbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKXtcbiAgICAgICAgICAgICAgICB2YXIgX3N0ZXBfdmFsdWUgPSBfc2xpY2VkX3RvX2FycmF5KF9zdGVwLnZhbHVlLCAyKSwgbW9kdWxlSWQgPSBfc3RlcF92YWx1ZVswXSwgZGF0YSA9IF9zdGVwX3ZhbHVlWzFdO1xuICAgICAgICAgICAgICAgIHJlbW90ZXNMb2FkaW5nSWRUb0V4dGVybmFsQW5kTmFtZU1hcHBpbmdNYXBwaW5nW21vZHVsZUlkXSA9IFtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zaGFyZVNjb3BlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZXh0ZXJuYWxNb2R1bGVJZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yZW1vdGVOYW1lXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVtb3Rlc0xvYWRpbmdJZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZ01hcHBpbmc7XG4gICAgfSk7XG4gICAgZWFybHkoX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lT3B0aW9ucy5yZW1vdGVzLCBcIndlYnBhY2tSZXF1aXJlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiAgICB9KTtcbiAgICBtZXJnZShfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWVPcHRpb25zLnJlbW90ZXMsIFwiaWRUb1JlbW90ZU1hcFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGlkVG9SZW1vdGVNYXAgPSB7fTtcbiAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlLCBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvcih2YXIgX2l0ZXJhdG9yID0gT2JqZWN0LmVudHJpZXMocmVtb3Rlc0xvYWRpbmdNb2R1bGVJZFRvUmVtb3RlRGF0YU1hcHBpbmcpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgdmFyIF9zdGVwX3ZhbHVlID0gX3NsaWNlZF90b19hcnJheShfc3RlcC52YWx1ZSwgMiksIGlkID0gX3N0ZXBfdmFsdWVbMF0sIHJlbW90ZURhdGEgPSBfc3RlcF92YWx1ZVsxXTtcbiAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IF9fbW9kdWxlX2ZlZGVyYXRpb25fcmVtb3RlX2luZm9zX19bcmVtb3RlRGF0YS5yZW1vdGVOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoaW5mbykgaWRUb1JlbW90ZU1hcFtpZF0gPSBpbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZFRvUmVtb3RlTWFwO1xuICAgIH0pO1xuICAgIG92ZXJyaWRlKF9fd2VicGFja19yZXF1aXJlX18sIFwiU1wiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuUyk7XG4gICAgaWYgKF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5hdHRhY2hTaGFyZVNjb3BlTWFwKSB7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5hdHRhY2hTaGFyZVNjb3BlTWFwKF9fd2VicGFja19yZXF1aXJlX18pO1xuICAgIH1cbiAgICBvdmVycmlkZShfX3dlYnBhY2tfcmVxdWlyZV9fLmYsIFwicmVtb3Rlc1wiLCBmdW5jdGlvbihjaHVua0lkLCBwcm9taXNlcykge1xuICAgICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLnJlbW90ZXMoe1xuICAgICAgICAgICAgY2h1bmtJZDogY2h1bmtJZCxcbiAgICAgICAgICAgIHByb21pc2VzOiBwcm9taXNlcyxcbiAgICAgICAgICAgIGNodW5rTWFwcGluZzogcmVtb3Rlc0xvYWRpbmdDaHVua01hcHBpbmcsXG4gICAgICAgICAgICBpZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZzogX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lT3B0aW9ucy5yZW1vdGVzLmlkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nLFxuICAgICAgICAgICAgaWRUb1JlbW90ZU1hcDogX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lT3B0aW9ucy5yZW1vdGVzLmlkVG9SZW1vdGVNYXAsXG4gICAgICAgICAgICB3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfX1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBvdmVycmlkZShfX3dlYnBhY2tfcmVxdWlyZV9fLmYsIFwiY29uc3VtZXNcIiwgZnVuY3Rpb24oY2h1bmtJZCwgcHJvbWlzZXMpIHtcbiAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5jb25zdW1lcyh7XG4gICAgICAgICAgICBjaHVua0lkOiBjaHVua0lkLFxuICAgICAgICAgICAgcHJvbWlzZXM6IHByb21pc2VzLFxuICAgICAgICAgICAgY2h1bmtNYXBwaW5nOiBjb25zdW1lc0xvYWRpbmdDaHVua01hcHBpbmcsXG4gICAgICAgICAgICBtb2R1bGVUb0hhbmRsZXJNYXBwaW5nOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uY29uc3VtZXNMb2FkaW5nTW9kdWxlVG9IYW5kbGVyTWFwcGluZyxcbiAgICAgICAgICAgIGluc3RhbGxlZE1vZHVsZXM6IGNvbnN1bWVzTG9hZGluZ2luc3RhbGxlZE1vZHVsZXMsXG4gICAgICAgICAgICB3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfX1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBvdmVycmlkZShfX3dlYnBhY2tfcmVxdWlyZV9fLCBcIklcIiwgZnVuY3Rpb24obmFtZSwgaW5pdFNjb3BlKSB7XG4gICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuSSh7XG4gICAgICAgICAgICBzaGFyZVNjb3BlTmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluaXRTY29wZTogaW5pdFNjb3BlLFxuICAgICAgICAgICAgaW5pdFByb21pc2VzOiBpbml0aWFsaXplU2hhcmluZ0luaXRQcm9taXNlcyxcbiAgICAgICAgICAgIGluaXRUb2tlbnM6IGluaXRpYWxpemVTaGFyaW5nSW5pdFRva2VucyxcbiAgICAgICAgICAgIHdlYnBhY2tSZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIG92ZXJyaWRlKF9fd2VicGFja19yZXF1aXJlX18sIFwiaW5pdENvbnRhaW5lclwiLCBmdW5jdGlvbihzaGFyZVNjb3BlLCBpbml0U2NvcGUsIHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5pbml0Q29udGFpbmVyRW50cnkoe1xuICAgICAgICAgICAgc2hhcmVTY29wZTogc2hhcmVTY29wZSxcbiAgICAgICAgICAgIGluaXRTY29wZTogaW5pdFNjb3BlLFxuICAgICAgICAgICAgcmVtb3RlRW50cnlJbml0T3B0aW9uczogcmVtb3RlRW50cnlJbml0T3B0aW9ucyxcbiAgICAgICAgICAgIHNoYXJlU2NvcGVLZXk6IGNvbnRhaW5lclNoYXJlU2NvcGUsXG4gICAgICAgICAgICB3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfX1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBvdmVycmlkZShfX3dlYnBhY2tfcmVxdWlyZV9fLCBcImdldENvbnRhaW5lclwiLCBmdW5jdGlvbihtb2R1bGUxLCBnZXRTY29wZSkge1xuICAgICAgICB2YXIgbW9kdWxlTWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pbml0aWFsaXplRXhwb3Nlc0RhdGEubW9kdWxlTWFwO1xuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLlIgPSBnZXRTY29wZTtcbiAgICAgICAgZ2V0U2NvcGUgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kdWxlTWFwLCBtb2R1bGUxKSA/IG1vZHVsZU1hcFttb2R1bGUxXSgpIDogUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTW9kdWxlIFwiJyArIG1vZHVsZTEgKyAnXCIgZG9lcyBub3QgZXhpc3QgaW4gY29udGFpbmVyLicpO1xuICAgICAgICB9KTtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5SID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gZ2V0U2NvcGU7XG4gICAgfSk7XG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluc3RhbmNlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLnJ1bnRpbWUuaW5pdChfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMpO1xuICAgIGlmICgoX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhMiA9IF9fd2VicGFja19yZXF1aXJlX18uY29uc3VtZXNMb2FkaW5nRGF0YSkgPT09IG51bGwgfHwgX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX193ZWJwYWNrX3JlcXVpcmVfX19jb25zdW1lc0xvYWRpbmdEYXRhMi5pbml0aWFsQ29uc3VtZXMpIHtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLmluc3RhbGxJbml0aWFsQ29uc3VtZXMoe1xuICAgICAgICAgICAgd2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG4gICAgICAgICAgICBpbnN0YWxsZWRNb2R1bGVzOiBjb25zdW1lc0xvYWRpbmdpbnN0YWxsZWRNb2R1bGVzLFxuICAgICAgICAgICAgaW5pdGlhbENvbnN1bWVzOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmNvbnN1bWVzTG9hZGluZ0RhdGEuaW5pdGlhbENvbnN1bWVzLFxuICAgICAgICAgICAgbW9kdWxlVG9IYW5kbGVyTWFwcGluZzogX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmNvbnN1bWVzTG9hZGluZ01vZHVsZVRvSGFuZGxlck1hcHBpbmdcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLy8gc2VydmVyLnRzXG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jX3RvX2dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBfdHNfZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgZiwgeSwgdCwgZywgXyA9IHtcbiAgICAgICAgbGFiZWw6IDAsXG4gICAgICAgIHNlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdO1xuICAgICAgICAgICAgcmV0dXJuIHRbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHRyeXM6IFtdLFxuICAgICAgICBvcHM6IFtdXG4gICAgfTtcbiAgICByZXR1cm4gZyA9IHtcbiAgICAgICAgbmV4dDogdmVyYigwKSxcbiAgICAgICAgXCJ0aHJvd1wiOiB2ZXJiKDEpLFxuICAgICAgICBcInJldHVyblwiOiB2ZXJiKDIpXG4gICAgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcChbXG4gICAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgICB2XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlKF8pdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbXG4gICAgICAgICAgICAgICAgb3BbMF0gJiAyLFxuICAgICAgICAgICAgICAgIHQudmFsdWVcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBzd2l0Y2gob3BbMF0pe1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHQgPSBvcDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBfLmxhYmVsKys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3BbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCsrO1xuICAgICAgICAgICAgICAgICAgICB5ID0gb3BbMV07XG4gICAgICAgICAgICAgICAgICAgIG9wID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIG9wID0gXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCBvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCA9IG9wWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsID0gdFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsID0gdFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3BzLnB1c2gob3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG9wID0gW1xuICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICBmID0gdCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCxcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG59XG5pbXBvcnQgSGFwaSBmcm9tICdAaGFwaS9oYXBpJztcbnZhciBpbml0ID0gLyojX19QVVJFX18qLyBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZXJ2ZXI7XG4gICAgcmV0dXJuIF90c19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX3N0YXRlKSB7XG4gICAgICAgIHN3aXRjaChfc3RhdGUubGFiZWwpe1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHNlcnZlciA9IEhhcGkuc2VydmVyKHtcbiAgICAgICAgICAgICAgICAgICAgcG9ydDogMzAwMixcbiAgICAgICAgICAgICAgICAgICAgaG9zdDogJzEyNy4wLjAuMSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXJ2ZXIucm91dGUoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHJlcXVlc3QsIGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoLnJlc3BvbnNlKCdcXG4gICAgICAgICAgICAgICAgPCFET0NUWVBFIGh0bWw+XFxuICAgICAgICAgICAgICAgIDxodG1sIGxhbmc9XCJydVwiPlxcbiAgICAgICAgICAgICAgICA8aGVhZD5cXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XFxuICAgICAgICAgICAgICAgIDx0aXRsZT5IYXBpIFNlcnZlcjwvdGl0bGU+XFxuICAgICAgICAgICAgICAgIDwvaGVhZD5cXG4gICAgICAgICAgICAgICAgPGJvZHk+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2Fzc2V0cy9tYWluLmpzXCI+PC9zY3JpcHQ+XFxuICAgICAgICAgICAgICAgIDwvYm9keT5cXG4gICAgICAgICAgICAgICAgPC9odG1sPlxcbiAgICAgICAgICAgICcpLnR5cGUoJ3RleHQvaHRtbCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgNCxcbiAgICAgICAgICAgICAgICAgICAgc2VydmVyLnN0YXJ0KClcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9zdGF0ZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLQodC10YDQstC10YAg0LfQsNC/0YPRidC10L0g0L3QsCBcIiArIHNlcnZlci5pbmZvLnVyaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xucHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgZnVuY3Rpb24oZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNoN0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzUzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSJ9