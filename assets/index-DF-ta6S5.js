(function () {
	const l = document.createElement("link").relList;
	if (l && l.supports && l.supports("modulepreload")) return;
	for (const s of document.querySelectorAll('link[rel="modulepreload"]')) u(s);
	new MutationObserver(s => {
		for (const f of s)
			if (f.type === "childList")
				for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && u(d)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function i(s) {
		const f = {};
		return s.integrity && (f.integrity = s.integrity), s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? f.credentials = "include" : s.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
	}

	function u(s) {
		if (s.ep) return;
		s.ep = !0;
		const f = i(s);
		fetch(s.href, f)
	}
})();

function mi(a) {
	return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var zc = {
		exports: {}
	},
	Fr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yp;

function U1() {
	if (Yp) return Fr;
	Yp = 1;
	var a = Symbol.for("react.transitional.element"),
		l = Symbol.for("react.fragment");

	function i(u, s, f) {
		var d = null;
		if (f !== void 0 && (d = "" + f), s.key !== void 0 && (d = "" + s.key), "key" in s) {
			f = {};
			for (var m in s) m !== "key" && (f[m] = s[m])
		} else f = s;
		return s = f.ref, {
			$$typeof: a,
			type: u,
			key: d,
			ref: s !== void 0 ? s : null,
			props: f
		}
	}
	return Fr.Fragment = l, Fr.jsx = i, Fr.jsxs = i, Fr
}
var Gp;

function z1() {
	return Gp || (Gp = 1, zc.exports = U1()), zc.exports
}
var x = z1(),
	Bc = {
		exports: {}
	},
	be = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xp;

function B1() {
	if (Xp) return be;
	Xp = 1;
	var a = Symbol.for("react.transitional.element"),
		l = Symbol.for("react.portal"),
		i = Symbol.for("react.fragment"),
		u = Symbol.for("react.strict_mode"),
		s = Symbol.for("react.profiler"),
		f = Symbol.for("react.consumer"),
		d = Symbol.for("react.context"),
		m = Symbol.for("react.forward_ref"),
		p = Symbol.for("react.suspense"),
		h = Symbol.for("react.memo"),
		y = Symbol.for("react.lazy"),
		E = Symbol.iterator;

	function S(T) {
		return T === null || typeof T != "object" ? null : (T = E && T[E] || T["@@iterator"], typeof T == "function" ? T : null)
	}
	var C = {
			isMounted: function () {
				return !1
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {}
		},
		R = Object.assign,
		A = {};

	function w(T, X, W) {
		this.props = T, this.context = X, this.refs = A, this.updater = W || C
	}
	w.prototype.isReactComponent = {}, w.prototype.setState = function (T, X) {
		if (typeof T != "object" && typeof T != "function" && T != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, T, X, "setState")
	}, w.prototype.forceUpdate = function (T) {
		this.updater.enqueueForceUpdate(this, T, "forceUpdate")
	};

	function D() {}
	D.prototype = w.prototype;

	function $(T, X, W) {
		this.props = T, this.context = X, this.refs = A, this.updater = W || C
	}
	var _ = $.prototype = new D;
	_.constructor = $, R(_, w.prototype), _.isPureReactComponent = !0;
	var Y = Array.isArray,
		q = {
			H: null,
			A: null,
			T: null,
			S: null,
			V: null
		},
		Q = Object.prototype.hasOwnProperty;

	function Z(T, X, W, J, P, ue) {
		return W = ue.ref, {
			$$typeof: a,
			type: T,
			key: X,
			ref: W !== void 0 ? W : null,
			props: ue
		}
	}

	function I(T, X) {
		return Z(T.type, X, void 0, void 0, void 0, T.props)
	}

	function te(T) {
		return typeof T == "object" && T !== null && T.$$typeof === a
	}

	function se(T) {
		var X = {
			"=": "=0",
			":": "=2"
		};
		return "$" + T.replace(/[=:]/g, function (W) {
			return X[W]
		})
	}
	var ae = /\/+/g;

	function le(T, X) {
		return typeof T == "object" && T !== null && T.key != null ? se("" + T.key) : X.toString(36)
	}

	function he() {}

	function we(T) {
		switch (T.status) {
			case "fulfilled":
				return T.value;
			case "rejected":
				throw T.reason;
			default:
				switch (typeof T.status == "string" ? T.then(he, he) : (T.status = "pending", T.then(function (X) {
					T.status === "pending" && (T.status = "fulfilled", T.value = X)
				}, function (X) {
					T.status === "pending" && (T.status = "rejected", T.reason = X)
				})), T.status) {
					case "fulfilled":
						return T.value;
					case "rejected":
						throw T.reason
				}
		}
		throw T
	}

	function xe(T, X, W, J, P) {
		var ue = typeof T;
		(ue === "undefined" || ue === "boolean") && (T = null);
		var ee = !1;
		if (T === null) ee = !0;
		else switch (ue) {
			case "bigint":
			case "string":
			case "number":
				ee = !0;
				break;
			case "object":
				switch (T.$$typeof) {
					case a:
					case l:
						ee = !0;
						break;
					case y:
						return ee = T._init, xe(ee(T._payload), X, W, J, P)
				}
		}
		if (ee) return P = P(T), ee = J === "" ? "." + le(T, 0) : J, Y(P) ? (W = "", ee != null && (W = ee.replace(ae, "$&/") + "/"), xe(P, X, W, "", function (We) {
			return We
		})) : P != null && (te(P) && (P = I(P, W + (P.key == null || T && T.key === P.key ? "" : ("" + P.key).replace(ae, "$&/") + "/") + ee)), X.push(P)), 1;
		ee = 0;
		var Xe = J === "" ? "." : J + ":";
		if (Y(T))
			for (var ye = 0; ye < T.length; ye++) J = T[ye], ue = Xe + le(J, ye), ee += xe(J, X, W, ue, P);
		else if (ye = S(T), typeof ye == "function")
			for (T = ye.call(T), ye = 0; !(J = T.next()).done;) J = J.value, ue = Xe + le(J, ye++), ee += xe(J, X, W, ue, P);
		else if (ue === "object") {
			if (typeof T.then == "function") return xe(we(T), X, W, J, P);
			throw X = String(T), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.")
		}
		return ee
	}

	function B(T, X, W) {
		if (T == null) return T;
		var J = [],
			P = 0;
		return xe(T, J, "", "", function (ue) {
			return X.call(W, ue, P++)
		}), J
	}

	function K(T) {
		if (T._status === -1) {
			var X = T._result;
			X = X(), X.then(function (W) {
				(T._status === 0 || T._status === -1) && (T._status = 1, T._result = W)
			}, function (W) {
				(T._status === 0 || T._status === -1) && (T._status = 2, T._result = W)
			}), T._status === -1 && (T._status = 0, T._result = X)
		}
		if (T._status === 1) return T._result.default;
		throw T._result
	}
	var F = typeof reportError == "function" ? reportError : function (T) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var X = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
				error: T
			});
			if (!window.dispatchEvent(X)) return
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", T);
			return
		}
		console.error(T)
	};

	function ce() {}
	return be.Children = {
		map: B,
		forEach: function (T, X, W) {
			B(T, function () {
				X.apply(this, arguments)
			}, W)
		},
		count: function (T) {
			var X = 0;
			return B(T, function () {
				X++
			}), X
		},
		toArray: function (T) {
			return B(T, function (X) {
				return X
			}) || []
		},
		only: function (T) {
			if (!te(T)) throw Error("React.Children.only expected to receive a single React element child.");
			return T
		}
	}, be.Component = w, be.Fragment = i, be.Profiler = s, be.PureComponent = $, be.StrictMode = u, be.Suspense = p, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, be.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function (T) {
			return q.H.useMemoCache(T)
		}
	}, be.cache = function (T) {
		return function () {
			return T.apply(null, arguments)
		}
	}, be.cloneElement = function (T, X, W) {
		if (T == null) throw Error("The argument must be a React element, but you passed " + T + ".");
		var J = R({}, T.props),
			P = T.key,
			ue = void 0;
		if (X != null)
			for (ee in X.ref !== void 0 && (ue = void 0), X.key !== void 0 && (P = "" + X.key), X) !Q.call(X, ee) || ee === "key" || ee === "__self" || ee === "__source" || ee === "ref" && X.ref === void 0 || (J[ee] = X[ee]);
		var ee = arguments.length - 2;
		if (ee === 1) J.children = W;
		else if (1 < ee) {
			for (var Xe = Array(ee), ye = 0; ye < ee; ye++) Xe[ye] = arguments[ye + 2];
			J.children = Xe
		}
		return Z(T.type, P, void 0, void 0, ue, J)
	}, be.createContext = function (T) {
		return T = {
			$$typeof: d,
			_currentValue: T,
			_currentValue2: T,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, T.Provider = T, T.Consumer = {
			$$typeof: f,
			_context: T
		}, T
	}, be.createElement = function (T, X, W) {
		var J, P = {},
			ue = null;
		if (X != null)
			for (J in X.key !== void 0 && (ue = "" + X.key), X) Q.call(X, J) && J !== "key" && J !== "__self" && J !== "__source" && (P[J] = X[J]);
		var ee = arguments.length - 2;
		if (ee === 1) P.children = W;
		else if (1 < ee) {
			for (var Xe = Array(ee), ye = 0; ye < ee; ye++) Xe[ye] = arguments[ye + 2];
			P.children = Xe
		}
		if (T && T.defaultProps)
			for (J in ee = T.defaultProps, ee) P[J] === void 0 && (P[J] = ee[J]);
		return Z(T, ue, void 0, void 0, null, P)
	}, be.createRef = function () {
		return {
			current: null
		}
	}, be.forwardRef = function (T) {
		return {
			$$typeof: m,
			render: T
		}
	}, be.isValidElement = te, be.lazy = function (T) {
		return {
			$$typeof: y,
			_payload: {
				_status: -1,
				_result: T
			},
			_init: K
		}
	}, be.memo = function (T, X) {
		return {
			$$typeof: h,
			type: T,
			compare: X === void 0 ? null : X
		}
	}, be.startTransition = function (T) {
		var X = q.T,
			W = {};
		q.T = W;
		try {
			var J = T(),
				P = q.S;
			P !== null && P(W, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(ce, F)
		} catch (ue) {
			F(ue)
		} finally {
			q.T = X
		}
	}, be.unstable_useCacheRefresh = function () {
		return q.H.useCacheRefresh()
	}, be.use = function (T) {
		return q.H.use(T)
	}, be.useActionState = function (T, X, W) {
		return q.H.useActionState(T, X, W)
	}, be.useCallback = function (T, X) {
		return q.H.useCallback(T, X)
	}, be.useContext = function (T) {
		return q.H.useContext(T)
	}, be.useDebugValue = function () {}, be.useDeferredValue = function (T, X) {
		return q.H.useDeferredValue(T, X)
	}, be.useEffect = function (T, X, W) {
		var J = q.H;
		if (typeof W == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
		return J.useEffect(T, X)
	}, be.useId = function () {
		return q.H.useId()
	}, be.useImperativeHandle = function (T, X, W) {
		return q.H.useImperativeHandle(T, X, W)
	}, be.useInsertionEffect = function (T, X) {
		return q.H.useInsertionEffect(T, X)
	}, be.useLayoutEffect = function (T, X) {
		return q.H.useLayoutEffect(T, X)
	}, be.useMemo = function (T, X) {
		return q.H.useMemo(T, X)
	}, be.useOptimistic = function (T, X) {
		return q.H.useOptimistic(T, X)
	}, be.useReducer = function (T, X, W) {
		return q.H.useReducer(T, X, W)
	}, be.useRef = function (T) {
		return q.H.useRef(T)
	}, be.useState = function (T) {
		return q.H.useState(T)
	}, be.useSyncExternalStore = function (T, X, W) {
		return q.H.useSyncExternalStore(T, X, W)
	}, be.useTransition = function () {
		return q.H.useTransition()
	}, be.version = "19.1.0", be
}
var kp;

function Ef() {
	return kp || (kp = 1, Bc.exports = B1()), Bc.exports
}
var g = Ef();
const $e = mi(g);
var Lc = {
		exports: {}
	},
	Wr = {},
	Hc = {
		exports: {}
	},
	qc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vp;

function L1() {
	return Vp || (Vp = 1, function (a) {
		function l(B, K) {
			var F = B.length;
			B.push(K);
			e: for (; 0 < F;) {
				var ce = F - 1 >>> 1,
					T = B[ce];
				if (0 < s(T, K)) B[ce] = K, B[F] = T, F = ce;
				else break e
			}
		}

		function i(B) {
			return B.length === 0 ? null : B[0]
		}

		function u(B) {
			if (B.length === 0) return null;
			var K = B[0],
				F = B.pop();
			if (F !== K) {
				B[0] = F;
				e: for (var ce = 0, T = B.length, X = T >>> 1; ce < X;) {
					var W = 2 * (ce + 1) - 1,
						J = B[W],
						P = W + 1,
						ue = B[P];
					if (0 > s(J, F)) P < T && 0 > s(ue, J) ? (B[ce] = ue, B[P] = F, ce = P) : (B[ce] = J, B[W] = F, ce = W);
					else if (P < T && 0 > s(ue, F)) B[ce] = ue, B[P] = F, ce = P;
					else break e
				}
			}
			return K
		}

		function s(B, K) {
			var F = B.sortIndex - K.sortIndex;
			return F !== 0 ? F : B.id - K.id
		}
		if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
			var f = performance;
			a.unstable_now = function () {
				return f.now()
			}
		} else {
			var d = Date,
				m = d.now();
			a.unstable_now = function () {
				return d.now() - m
			}
		}
		var p = [],
			h = [],
			y = 1,
			E = null,
			S = 3,
			C = !1,
			R = !1,
			A = !1,
			w = !1,
			D = typeof setTimeout == "function" ? setTimeout : null,
			$ = typeof clearTimeout == "function" ? clearTimeout : null,
			_ = typeof setImmediate < "u" ? setImmediate : null;

		function Y(B) {
			for (var K = i(h); K !== null;) {
				if (K.callback === null) u(h);
				else if (K.startTime <= B) u(h), K.sortIndex = K.expirationTime, l(p, K);
				else break;
				K = i(h)
			}
		}

		function q(B) {
			if (A = !1, Y(B), !R)
				if (i(p) !== null) R = !0, Q || (Q = !0, le());
				else {
					var K = i(h);
					K !== null && xe(q, K.startTime - B)
				}
		}
		var Q = !1,
			Z = -1,
			I = 5,
			te = -1;

		function se() {
			return w ? !0 : !(a.unstable_now() - te < I)
		}

		function ae() {
			if (w = !1, Q) {
				var B = a.unstable_now();
				te = B;
				var K = !0;
				try {
					e: {
						R = !1,
						A && (A = !1, $(Z), Z = -1),
						C = !0;
						var F = S;
						try {
							t: {
								for (Y(B), E = i(p); E !== null && !(E.expirationTime > B && se());) {
									var ce = E.callback;
									if (typeof ce == "function") {
										E.callback = null, S = E.priorityLevel;
										var T = ce(E.expirationTime <= B);
										if (B = a.unstable_now(), typeof T == "function") {
											E.callback = T, Y(B), K = !0;
											break t
										}
										E === i(p) && u(p), Y(B)
									} else u(p);
									E = i(p)
								}
								if (E !== null) K = !0;
								else {
									var X = i(h);
									X !== null && xe(q, X.startTime - B), K = !1
								}
							}
							break e
						}
						finally {
							E = null, S = F, C = !1
						}
						K = void 0
					}
				}
				finally {
					K ? le() : Q = !1
				}
			}
		}
		var le;
		if (typeof _ == "function") le = function () {
			_(ae)
		};
		else if (typeof MessageChannel < "u") {
			var he = new MessageChannel,
				we = he.port2;
			he.port1.onmessage = ae, le = function () {
				we.postMessage(null)
			}
		} else le = function () {
			D(ae, 0)
		};

		function xe(B, K) {
			Z = D(function () {
				B(a.unstable_now())
			}, K)
		}
		a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function (B) {
			B.callback = null
		}, a.unstable_forceFrameRate = function (B) {
			0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < B ? Math.floor(1e3 / B) : 5
		}, a.unstable_getCurrentPriorityLevel = function () {
			return S
		}, a.unstable_next = function (B) {
			switch (S) {
				case 1:
				case 2:
				case 3:
					var K = 3;
					break;
				default:
					K = S
			}
			var F = S;
			S = K;
			try {
				return B()
			} finally {
				S = F
			}
		}, a.unstable_requestPaint = function () {
			w = !0
		}, a.unstable_runWithPriority = function (B, K) {
			switch (B) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					B = 3
			}
			var F = S;
			S = B;
			try {
				return K()
			} finally {
				S = F
			}
		}, a.unstable_scheduleCallback = function (B, K, F) {
			var ce = a.unstable_now();
			switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? ce + F : ce) : F = ce, B) {
				case 1:
					var T = -1;
					break;
				case 2:
					T = 250;
					break;
				case 5:
					T = 1073741823;
					break;
				case 4:
					T = 1e4;
					break;
				default:
					T = 5e3
			}
			return T = F + T, B = {
				id: y++,
				callback: K,
				priorityLevel: B,
				startTime: F,
				expirationTime: T,
				sortIndex: -1
			}, F > ce ? (B.sortIndex = F, l(h, B), i(p) === null && B === i(h) && (A ? ($(Z), Z = -1) : A = !0, xe(q, F - ce))) : (B.sortIndex = T, l(p, B), R || C || (R = !0, Q || (Q = !0, le()))), B
		}, a.unstable_shouldYield = se, a.unstable_wrapCallback = function (B) {
			var K = S;
			return function () {
				var F = S;
				S = K;
				try {
					return B.apply(this, arguments)
				} finally {
					S = F
				}
			}
		}
	}(qc)), qc
}
var Qp;

function H1() {
	return Qp || (Qp = 1, Hc.exports = L1()), Hc.exports
}
var $c = {
		exports: {}
	},
	ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kp;

function q1() {
	if (Kp) return ht;
	Kp = 1;
	var a = Ef();

	function l(p) {
		var h = "https://react.dev/errors/" + p;
		if (1 < arguments.length) {
			h += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var y = 2; y < arguments.length; y++) h += "&args[]=" + encodeURIComponent(arguments[y])
		}
		return "Minified React error #" + p + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}

	function i() {}
	var u = {
			d: {
				f: i,
				r: function () {
					throw Error(l(522))
				},
				D: i,
				C: i,
				L: i,
				m: i,
				X: i,
				S: i,
				M: i
			},
			p: 0,
			findDOMNode: null
		},
		s = Symbol.for("react.portal");

	function f(p, h, y) {
		var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: s,
			key: E == null ? null : "" + E,
			children: p,
			containerInfo: h,
			implementation: y
		}
	}
	var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

	function m(p, h) {
		if (p === "font") return "";
		if (typeof h == "string") return h === "use-credentials" ? h : ""
	}
	return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, ht.createPortal = function (p, h) {
		var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(l(299));
		return f(p, h, null, y)
	}, ht.flushSync = function (p) {
		var h = d.T,
			y = u.p;
		try {
			if (d.T = null, u.p = 2, p) return p()
		} finally {
			d.T = h, u.p = y, u.d.f()
		}
	}, ht.preconnect = function (p, h) {
		typeof p == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, u.d.C(p, h))
	}, ht.prefetchDNS = function (p) {
		typeof p == "string" && u.d.D(p)
	}, ht.preinit = function (p, h) {
		if (typeof p == "string" && h && typeof h.as == "string") {
			var y = h.as,
				E = m(y, h.crossOrigin),
				S = typeof h.integrity == "string" ? h.integrity : void 0,
				C = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
			y === "style" ? u.d.S(p, typeof h.precedence == "string" ? h.precedence : void 0, {
				crossOrigin: E,
				integrity: S,
				fetchPriority: C
			}) : y === "script" && u.d.X(p, {
				crossOrigin: E,
				integrity: S,
				fetchPriority: C,
				nonce: typeof h.nonce == "string" ? h.nonce : void 0
			})
		}
	}, ht.preinitModule = function (p, h) {
		if (typeof p == "string")
			if (typeof h == "object" && h !== null) {
				if (h.as == null || h.as === "script") {
					var y = m(h.as, h.crossOrigin);
					u.d.M(p, {
						crossOrigin: y,
						integrity: typeof h.integrity == "string" ? h.integrity : void 0,
						nonce: typeof h.nonce == "string" ? h.nonce : void 0
					})
				}
			} else h == null && u.d.M(p)
	}, ht.preload = function (p, h) {
		if (typeof p == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
			var y = h.as,
				E = m(y, h.crossOrigin);
			u.d.L(p, y, {
				crossOrigin: E,
				integrity: typeof h.integrity == "string" ? h.integrity : void 0,
				nonce: typeof h.nonce == "string" ? h.nonce : void 0,
				type: typeof h.type == "string" ? h.type : void 0,
				fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
				referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
				imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
				imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
				media: typeof h.media == "string" ? h.media : void 0
			})
		}
	}, ht.preloadModule = function (p, h) {
		if (typeof p == "string")
			if (h) {
				var y = m(h.as, h.crossOrigin);
				u.d.m(p, {
					as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
					crossOrigin: y,
					integrity: typeof h.integrity == "string" ? h.integrity : void 0
				})
			} else u.d.m(p)
	}, ht.requestFormReset = function (p) {
		u.d.r(p)
	}, ht.unstable_batchedUpdates = function (p, h) {
		return p(h)
	}, ht.useFormState = function (p, h, y) {
		return d.H.useFormState(p, h, y)
	}, ht.useFormStatus = function () {
		return d.H.useHostTransitionStatus()
	}, ht.version = "19.1.0", ht
}
var Zp;

function Pv() {
	if (Zp) return $c.exports;
	Zp = 1;

	function a() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
		} catch (l) {
			console.error(l)
		}
	}
	return a(), $c.exports = q1(), $c.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jp;

function $1() {
	if (Jp) return Wr;
	Jp = 1;
	var a = H1(),
		l = Ef(),
		i = Pv();

	function u(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	}

	function s(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
	}

	function f(e) {
		var t = e,
			n = e;
		if (e.alternate)
			for (; t.return;) t = t.return;
		else {
			e = t;
			do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
		}
		return t.tag === 3 ? n : null
	}

	function d(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
		}
		return null
	}

	function m(e) {
		if (f(e) !== e) throw Error(u(188))
	}

	function p(e) {
		var t = e.alternate;
		if (!t) {
			if (t = f(e), t === null) throw Error(u(188));
			return t !== e ? null : e
		}
		for (var n = e, r = t;;) {
			var o = n.return;
			if (o === null) break;
			var c = o.alternate;
			if (c === null) {
				if (r = o.return, r !== null) {
					n = r;
					continue
				}
				break
			}
			if (o.child === c.child) {
				for (c = o.child; c;) {
					if (c === n) return m(o), e;
					if (c === r) return m(o), t;
					c = c.sibling
				}
				throw Error(u(188))
			}
			if (n.return !== r.return) n = o, r = c;
			else {
				for (var v = !1, b = o.child; b;) {
					if (b === n) {
						v = !0, n = o, r = c;
						break
					}
					if (b === r) {
						v = !0, r = o, n = c;
						break
					}
					b = b.sibling
				}
				if (!v) {
					for (b = c.child; b;) {
						if (b === n) {
							v = !0, n = c, r = o;
							break
						}
						if (b === r) {
							v = !0, r = c, n = o;
							break
						}
						b = b.sibling
					}
					if (!v) throw Error(u(189))
				}
			}
			if (n.alternate !== r) throw Error(u(190))
		}
		if (n.tag !== 3) throw Error(u(188));
		return n.stateNode.current === n ? e : t
	}

	function h(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = h(e), t !== null) return t;
			e = e.sibling
		}
		return null
	}
	var y = Object.assign,
		E = Symbol.for("react.element"),
		S = Symbol.for("react.transitional.element"),
		C = Symbol.for("react.portal"),
		R = Symbol.for("react.fragment"),
		A = Symbol.for("react.strict_mode"),
		w = Symbol.for("react.profiler"),
		D = Symbol.for("react.provider"),
		$ = Symbol.for("react.consumer"),
		_ = Symbol.for("react.context"),
		Y = Symbol.for("react.forward_ref"),
		q = Symbol.for("react.suspense"),
		Q = Symbol.for("react.suspense_list"),
		Z = Symbol.for("react.memo"),
		I = Symbol.for("react.lazy"),
		te = Symbol.for("react.activity"),
		se = Symbol.for("react.memo_cache_sentinel"),
		ae = Symbol.iterator;

	function le(e) {
		return e === null || typeof e != "object" ? null : (e = ae && e[ae] || e["@@iterator"], typeof e == "function" ? e : null)
	}
	var he = Symbol.for("react.client.reference");

	function we(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === he ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case R:
				return "Fragment";
			case w:
				return "Profiler";
			case A:
				return "StrictMode";
			case q:
				return "Suspense";
			case Q:
				return "SuspenseList";
			case te:
				return "Activity"
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case C:
				return "Portal";
			case _:
				return (e.displayName || "Context") + ".Provider";
			case $:
				return (e._context.displayName || "Context") + ".Consumer";
			case Y:
				var t = e.render;
				return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
			case Z:
				return t = e.displayName || null, t !== null ? t : we(e.type) || "Memo";
			case I:
				t = e._payload, e = e._init;
				try {
					return we(e(t))
				} catch {}
		}
		return null
	}
	var xe = Array.isArray,
		B = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		K = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		F = {
			pending: !1,
			data: null,
			method: null,
			action: null
		},
		ce = [],
		T = -1;

	function X(e) {
		return {
			current: e
		}
	}

	function W(e) {
		0 > T || (e.current = ce[T], ce[T] = null, T--)
	}

	function J(e, t) {
		T++, ce[T] = e.current, e.current = t
	}
	var P = X(null),
		ue = X(null),
		ee = X(null),
		Xe = X(null);

	function ye(e, t) {
		switch (J(ee, t), J(ue, e), J(P, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? pp(e) : 0;
				break;
			default:
				if (e = t.tagName, t = t.namespaceURI) t = pp(t), e = vp(t, e);
				else switch (e) {
					case "svg":
						e = 1;
						break;
					case "math":
						e = 2;
						break;
					default:
						e = 0
				}
		}
		W(P), J(P, e)
	}

	function We() {
		W(P), W(ue), W(ee)
	}

	function $t(e) {
		e.memoizedState !== null && J(Xe, e);
		var t = P.current,
			n = vp(t, e.type);
		t !== n && (J(ue, e), J(P, n))
	}

	function Qe(e) {
		ue.current === e && (W(P), W(ue)), Xe.current === e && (W(Xe), Vr._currentValue = F)
	}
	var Pe = Object.prototype.hasOwnProperty,
		yt = a.unstable_scheduleCallback,
		At = a.unstable_cancelCallback,
		Ce = a.unstable_shouldYield,
		xn = a.unstable_requestPaint,
		Ie = a.unstable_now,
		Pl = a.unstable_getCurrentPriorityLevel,
		Za = a.unstable_ImmediatePriority,
		Yt = a.unstable_UserBlockingPriority,
		It = a.unstable_NormalPriority,
		Ja = a.unstable_LowPriority,
		Vn = a.unstable_IdlePriority,
		on = a.log,
		xa = a.unstable_setDisableYieldValue,
		sn = null,
		nt = null;

	function jt(e) {
		if (typeof on == "function" && xa(e), nt && typeof nt.setStrictMode == "function") try {
			nt.setStrictMode(sn, e)
		} catch {}
	}
	var ct = Math.clz32 ? Math.clz32 : ve,
		Il = Math.log,
		Ti = Math.LN2;

	function ve(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Il(e) / Ti | 0) | 0
	}
	var Ae = 256,
		gt = 4194304;

	function Dt(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return e & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return e
		}
	}

	function Fa(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var o = 0,
			c = e.suspendedLanes,
			v = e.pingedLanes;
		e = e.warmLanes;
		var b = r & 134217727;
		return b !== 0 ? (r = b & ~c, r !== 0 ? o = Dt(r) : (v &= b, v !== 0 ? o = Dt(v) : n || (n = b & ~e, n !== 0 && (o = Dt(n))))) : (b = r & ~c, b !== 0 ? o = Dt(b) : v !== 0 ? o = Dt(v) : n || (n = r & ~e, n !== 0 && (o = Dt(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & c) === 0 && (c = o & -o, n = t & -t, c >= n || c === 32 && (n & 4194048) !== 0) ? t : o
	}

	function er(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
	}

	function E0(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1
		}
	}

	function Wf() {
		var e = Ae;
		return Ae <<= 1, (Ae & 4194048) === 0 && (Ae = 256), e
	}

	function Pf() {
		var e = gt;
		return gt <<= 1, (gt & 62914560) === 0 && (gt = 4194304), e
	}

	function Oo(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t
	}

	function tr(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
	}

	function S0(e, t, n, r, o, c) {
		var v = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var b = e.entanglements,
			O = e.expirationTimes,
			U = e.hiddenUpdates;
		for (n = v & ~n; 0 < n;) {
			var G = 31 - ct(n),
				V = 1 << G;
			b[G] = 0, O[G] = -1;
			var z = U[G];
			if (z !== null)
				for (U[G] = null, G = 0; G < z.length; G++) {
					var L = z[G];
					L !== null && (L.lane &= -536870913)
				}
			n &= ~V
		}
		r !== 0 && If(e, r, 0), c !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= c & ~(v & ~t))
	}

	function If(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - ct(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 4194090
	}

	function ed(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - ct(n),
				o = 1 << r;
			o & t | e[r] & t && (e[r] |= t), n &= ~o
		}
	}

	function To(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default:
				e = 0
		}
		return e
	}

	function wo(e) {
		return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
	}

	function td() {
		var e = K.p;
		return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : zp(e.type))
	}

	function R0(e, t) {
		var n = K.p;
		try {
			return K.p = e, t()
		} finally {
			K.p = n
		}
	}
	var Qn = Math.random().toString(36).slice(2),
		ft = "__reactFiber$" + Qn,
		bt = "__reactProps$" + Qn,
		Wa = "__reactContainer$" + Qn,
		Co = "__reactEvents$" + Qn,
		O0 = "__reactListeners$" + Qn,
		T0 = "__reactHandles$" + Qn,
		nd = "__reactResources$" + Qn,
		nr = "__reactMarker$" + Qn;

	function No(e) {
		delete e[ft], delete e[bt], delete e[Co], delete e[O0], delete e[T0]
	}

	function Pa(e) {
		var t = e[ft];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Wa] || n[ft]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
					for (e = xp(e); e !== null;) {
						if (n = e[ft]) return n;
						e = xp(e)
					}
				return t
			}
			e = n, n = e.parentNode
		}
		return null
	}

	function Ia(e) {
		if (e = e[ft] || e[Wa]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
		}
		return null
	}

	function ar(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(u(33))
	}

	function el(e) {
		var t = e[nd];
		return t || (t = e[nd] = {
			hoistableStyles: new Map,
			hoistableScripts: new Map
		}), t
	}

	function at(e) {
		e[nr] = !0
	}
	var ad = new Set,
		ld = {};

	function Ea(e, t) {
		tl(e, t), tl(e + "Capture", t)
	}

	function tl(e, t) {
		for (ld[e] = t, e = 0; e < t.length; e++) ad.add(t[e])
	}
	var w0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
		rd = {},
		ud = {};

	function C0(e) {
		return Pe.call(ud, e) ? !0 : Pe.call(rd, e) ? !1 : w0.test(e) ? ud[e] = !0 : (rd[e] = !0, !1)
	}

	function wi(e, t, n) {
		if (C0(t))
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return
						}
				}
				e.setAttribute(t, "" + n)
			}
	}

	function Ci(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return
			}
			e.setAttribute(t, "" + n)
		}
	}

	function En(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return
			}
			e.setAttributeNS(t, n, "" + r)
		}
	}
	var Ao, od;

	function nl(e) {
		if (Ao === void 0) try {
			throw Error()
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Ao = t && t[1] || "", od = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
		}
		return `
` + Ao + e + od
	}
	var jo = !1;

	function Do(e, t) {
		if (!e || jo) return "";
		jo = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var V = function () {
								throw Error()
							};
							if (Object.defineProperty(V.prototype, "props", {
									set: function () {
										throw Error()
									}
								}), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(V, [])
								} catch (L) {
									var z = L
								}
								Reflect.construct(e, [], V)
							} else {
								try {
									V.call()
								} catch (L) {
									z = L
								}
								e.call(V.prototype)
							}
						} else {
							try {
								throw Error()
							} catch (L) {
								z = L
							}(V = e()) && typeof V.catch == "function" && V.catch(function () {})
						}
					} catch (L) {
						if (L && z && typeof L.stack == "string") return [L.stack, z.stack]
					}
					return [null, null]
				}
			};
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var o = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			o && o.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
				value: "DetermineComponentFrameRoot"
			});
			var c = r.DetermineComponentFrameRoot(),
				v = c[0],
				b = c[1];
			if (v && b) {
				var O = v.split(`
`),
					U = b.split(`
`);
				for (o = r = 0; r < O.length && !O[r].includes("DetermineComponentFrameRoot");) r++;
				for (; o < U.length && !U[o].includes("DetermineComponentFrameRoot");) o++;
				if (r === O.length || o === U.length)
					for (r = O.length - 1, o = U.length - 1; 1 <= r && 0 <= o && O[r] !== U[o];) o--;
				for (; 1 <= r && 0 <= o; r--, o--)
					if (O[r] !== U[o]) {
						if (r !== 1 || o !== 1)
							do
								if (r--, o--, 0 > o || O[r] !== U[o]) {
									var G = `
` + O[r].replace(" at new ", " at ");
									return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), G
								} while (1 <= r && 0 <= o);
						break
					}
			}
		} finally {
			jo = !1, Error.prepareStackTrace = n
		}
		return (n = e ? e.displayName || e.name : "") ? nl(n) : ""
	}

	function N0(e) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5:
				return nl(e.type);
			case 16:
				return nl("Lazy");
			case 13:
				return nl("Suspense");
			case 19:
				return nl("SuspenseList");
			case 0:
			case 15:
				return Do(e.type, !1);
			case 11:
				return Do(e.type.render, !1);
			case 1:
				return Do(e.type, !0);
			case 31:
				return nl("Activity");
			default:
				return ""
		}
	}

	function sd(e) {
		try {
			var t = "";
			do t += N0(e), e = e.return; while (e);
			return t
		} catch (n) {
			return `
Error generating stack: ` + n.message + `
` + n.stack
		}
	}

	function Gt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return e;
			case "object":
				return e;
			default:
				return ""
		}
	}

	function cd(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
	}

	function A0(e) {
		var t = cd(e) ? "checked" : "value",
			n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
			r = "" + e[t];
		if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
			var o = n.get,
				c = n.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this)
				},
				set: function (v) {
					r = "" + v, c.call(this, v)
				}
			}), Object.defineProperty(e, t, {
				enumerable: n.enumerable
			}), {
				getValue: function () {
					return r
				},
				setValue: function (v) {
					r = "" + v
				},
				stopTracking: function () {
					e._valueTracker = null, delete e[t]
				}
			}
		}
	}

	function Ni(e) {
		e._valueTracker || (e._valueTracker = A0(e))
	}

	function fd(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(),
			r = "";
		return e && (r = cd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
	}

	function Ai(e) {
		if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
		try {
			return e.activeElement || e.body
		} catch {
			return e.body
		}
	}
	var j0 = /[\n"\\]/g;

	function Xt(e) {
		return e.replace(j0, function (t) {
			return "\\" + t.charCodeAt(0).toString(16) + " "
		})
	}

	function Mo(e, t, n, r, o, c, v, b) {
		e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"), t != null ? v === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Gt(t)) : e.value !== "" + Gt(t) && (e.value = "" + Gt(t)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"), t != null ? _o(e, v, Gt(t)) : n != null ? _o(e, v, Gt(n)) : r != null && e.removeAttribute("value"), o == null && c != null && (e.defaultChecked = !!c), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + Gt(b) : e.removeAttribute("name")
	}

	function dd(e, t, n, r, o, c, v, b) {
		if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.type = c), t != null || n != null) {
			if (!(c !== "submit" && c !== "reset" || t != null)) return;
			n = n != null ? "" + Gt(n) : "", t = t != null ? "" + Gt(t) : n, b || t === e.value || (e.value = t), e.defaultValue = t
		}
		r = r ?? o, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = b ? e.checked : !!r, e.defaultChecked = !!r, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v)
	}

	function _o(e, t, n) {
		t === "number" && Ai(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
	}

	function al(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
			for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
		} else {
			for (n = "" + Gt(n), t = null, o = 0; o < e.length; o++) {
				if (e[o].value === n) {
					e[o].selected = !0, r && (e[o].defaultSelected = !0);
					return
				}
				t !== null || e[o].disabled || (t = e[o])
			}
			t !== null && (t.selected = !0)
		}
	}

	function hd(e, t, n) {
		if (t != null && (t = "" + Gt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return
		}
		e.defaultValue = n != null ? "" + Gt(n) : ""
	}

	function md(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(u(92));
				if (xe(r)) {
					if (1 < r.length) throw Error(u(93));
					r = r[0]
				}
				n = r
			}
			n == null && (n = ""), t = n
		}
		n = Gt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r)
	}

	function ll(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return
			}
		}
		e.textContent = t
	}
	var D0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

	function pd(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || D0.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
	}

	function vd(e, t, n) {
		if (t != null && typeof t != "object") throw Error(u(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
			for (var o in t) r = t[o], t.hasOwnProperty(o) && n[o] !== r && pd(e, o, r)
		} else
			for (var c in t) t.hasOwnProperty(c) && pd(e, c, t[c])
	}

	function Uo(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0
		}
	}
	var M0 = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]),
		_0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

	function ji(e) {
		return _0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
	}
	var zo = null;

	function Bo(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
	}
	var rl = null,
		il = null;

	function yd(e) {
		var t = Ia(e);
		if (t && (e = t.stateNode)) {
			var n = e[bt] || null;
			e: switch (e = t.stateNode, t.type) {
				case "input":
					if (Mo(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll('input[name="' + Xt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var o = r[bt] || null;
								if (!o) throw Error(u(90));
								Mo(r, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && fd(r)
					}
					break e;
				case "textarea":
					hd(e, n.value, n.defaultValue);
					break e;
				case "select":
					t = n.value, t != null && al(e, !!n.multiple, t, !1)
			}
		}
	}
	var Lo = !1;

	function gd(e, t, n) {
		if (Lo) return e(t, n);
		Lo = !0;
		try {
			var r = e(t);
			return r
		} finally {
			if (Lo = !1, (rl !== null || il !== null) && (pu(), rl && (t = rl, e = il, il = rl = null, yd(t), e)))
				for (t = 0; t < e.length; t++) yd(e[t])
		}
	}

	function lr(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[bt] || null;
		if (r === null) return null;
		n = r[t];
		e: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
				break e;
			default:
				e = !1
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(u(231, t, typeof n));
		return n
	}
	var Sn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
		Ho = !1;
	if (Sn) try {
		var rr = {};
		Object.defineProperty(rr, "passive", {
			get: function () {
				Ho = !0
			}
		}), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr)
	} catch {
		Ho = !1
	}
	var Kn = null,
		qo = null,
		Di = null;

	function bd() {
		if (Di) return Di;
		var e, t = qo,
			n = t.length,
			r, o = "value" in Kn ? Kn.value : Kn.textContent,
			c = o.length;
		for (e = 0; e < n && t[e] === o[e]; e++);
		var v = n - e;
		for (r = 1; r <= v && t[n - r] === o[c - r]; r++);
		return Di = o.slice(e, 1 < r ? 1 - r : void 0)
	}

	function Mi(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
	}

	function _i() {
		return !0
	}

	function xd() {
		return !1
	}

	function xt(e) {
		function t(n, r, o, c, v) {
			this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = c, this.target = v, this.currentTarget = null;
			for (var b in e) e.hasOwnProperty(b) && (n = e[b], this[b] = n ? n(c) : c[b]);
			return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? _i : xd, this.isPropagationStopped = xd, this
		}
		return y(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _i)
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _i)
			},
			persist: function () {},
			isPersistent: _i
		}), t
	}
	var Sa = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now()
			},
			defaultPrevented: 0,
			isTrusted: 0
		},
		Ui = xt(Sa),
		ir = y({}, Sa, {
			view: 0,
			detail: 0
		}),
		U0 = xt(ir),
		$o, Yo, ur, zi = y({}, ir, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: Xo,
			button: 0,
			buttons: 0,
			relatedTarget: function (e) {
				return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
			},
			movementX: function (e) {
				return "movementX" in e ? e.movementX : (e !== ur && (ur && e.type === "mousemove" ? ($o = e.screenX - ur.screenX, Yo = e.screenY - ur.screenY) : Yo = $o = 0, ur = e), $o)
			},
			movementY: function (e) {
				return "movementY" in e ? e.movementY : Yo
			}
		}),
		Ed = xt(zi),
		z0 = y({}, zi, {
			dataTransfer: 0
		}),
		B0 = xt(z0),
		L0 = y({}, ir, {
			relatedTarget: 0
		}),
		Go = xt(L0),
		H0 = y({}, Sa, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		}),
		q0 = xt(H0),
		$0 = y({}, Sa, {
			clipboardData: function (e) {
				return "clipboardData" in e ? e.clipboardData : window.clipboardData
			}
		}),
		Y0 = xt($0),
		G0 = y({}, Sa, {
			data: 0
		}),
		Sd = xt(G0),
		X0 = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		},
		k0 = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		},
		V0 = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};

	function Q0(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = V0[e]) ? !!t[e] : !1
	}

	function Xo() {
		return Q0
	}
	var K0 = y({}, ir, {
			key: function (e) {
				if (e.key) {
					var t = X0[e.key] || e.key;
					if (t !== "Unidentified") return t
				}
				return e.type === "keypress" ? (e = Mi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? k0[e.keyCode] || "Unidentified" : ""
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: Xo,
			charCode: function (e) {
				return e.type === "keypress" ? Mi(e) : 0
			},
			keyCode: function (e) {
				return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
			},
			which: function (e) {
				return e.type === "keypress" ? Mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
			}
		}),
		Z0 = xt(K0),
		J0 = y({}, zi, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		}),
		Rd = xt(J0),
		F0 = y({}, ir, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Xo
		}),
		W0 = xt(F0),
		P0 = y({}, Sa, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		}),
		I0 = xt(P0),
		eb = y({}, zi, {
			deltaX: function (e) {
				return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
			},
			deltaY: function (e) {
				return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
			},
			deltaZ: 0,
			deltaMode: 0
		}),
		tb = xt(eb),
		nb = y({}, Sa, {
			newState: 0,
			oldState: 0
		}),
		ab = xt(nb),
		lb = [9, 13, 27, 32],
		ko = Sn && "CompositionEvent" in window,
		or = null;
	Sn && "documentMode" in document && (or = document.documentMode);
	var rb = Sn && "TextEvent" in window && !or,
		Od = Sn && (!ko || or && 8 < or && 11 >= or),
		Td = " ",
		wd = !1;

	function Cd(e, t) {
		switch (e) {
			case "keyup":
				return lb.indexOf(t.keyCode) !== -1;
			case "keydown":
				return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1
		}
	}

	function Nd(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
	}
	var ul = !1;

	function ib(e, t) {
		switch (e) {
			case "compositionend":
				return Nd(t);
			case "keypress":
				return t.which !== 32 ? null : (wd = !0, Td);
			case "textInput":
				return e = t.data, e === Td && wd ? null : e;
			default:
				return null
		}
	}

	function ub(e, t) {
		if (ul) return e === "compositionend" || !ko && Cd(e, t) ? (e = bd(), Di = qo = Kn = null, ul = !1, e) : null;
		switch (e) {
			case "paste":
				return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which)
				}
				return null;
			case "compositionend":
				return Od && t.locale !== "ko" ? null : t.data;
			default:
				return null
		}
	}
	var ob = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};

	function Ad(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!ob[e.type] : t === "textarea"
	}

	function jd(e, t, n, r) {
		rl ? il ? il.push(r) : il = [r] : rl = r, t = Eu(t, "onChange"), 0 < t.length && (n = new Ui("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}))
	}
	var sr = null,
		cr = null;

	function sb(e) {
		cp(e, 0)
	}

	function Bi(e) {
		var t = ar(e);
		if (fd(t)) return e
	}

	function Dd(e, t) {
		if (e === "change") return t
	}
	var Md = !1;
	if (Sn) {
		var Vo;
		if (Sn) {
			var Qo = "oninput" in document;
			if (!Qo) {
				var _d = document.createElement("div");
				_d.setAttribute("oninput", "return;"), Qo = typeof _d.oninput == "function"
			}
			Vo = Qo
		} else Vo = !1;
		Md = Vo && (!document.documentMode || 9 < document.documentMode)
	}

	function Ud() {
		sr && (sr.detachEvent("onpropertychange", zd), cr = sr = null)
	}

	function zd(e) {
		if (e.propertyName === "value" && Bi(cr)) {
			var t = [];
			jd(t, cr, e, Bo(e)), gd(sb, t)
		}
	}

	function cb(e, t, n) {
		e === "focusin" ? (Ud(), sr = t, cr = n, sr.attachEvent("onpropertychange", zd)) : e === "focusout" && Ud()
	}

	function fb(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bi(cr)
	}

	function db(e, t) {
		if (e === "click") return Bi(t)
	}

	function hb(e, t) {
		if (e === "input" || e === "change") return Bi(t)
	}

	function mb(e, t) {
		return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
	}
	var Mt = typeof Object.is == "function" ? Object.is : mb;

	function fr(e, t) {
		if (Mt(e, t)) return !0;
		if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
		var n = Object.keys(e),
			r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var o = n[r];
			if (!Pe.call(t, o) || !Mt(e[o], t[o])) return !1
		}
		return !0
	}

	function Bd(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e
	}

	function Ld(e, t) {
		var n = Bd(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r
			}
			e: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break e
					}
					n = n.parentNode
				}
				n = void 0
			}
			n = Bd(n)
		}
	}

	function Hd(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
	}

	function qd(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Ai(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string"
			} catch {
				n = !1
			}
			if (n) e = t.contentWindow;
			else break;
			t = Ai(e.document)
		}
		return t
	}

	function Ko(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
	}
	var pb = Sn && "documentMode" in document && 11 >= document.documentMode,
		ol = null,
		Zo = null,
		dr = null,
		Jo = !1;

	function $d(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Jo || ol == null || ol !== Ai(r) || (r = ol, "selectionStart" in r && Ko(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), dr && fr(dr, r) || (dr = r, r = Eu(Zo, "onSelect"), 0 < r.length && (t = new Ui("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = ol)))
	}

	function Ra(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
	}
	var sl = {
			animationend: Ra("Animation", "AnimationEnd"),
			animationiteration: Ra("Animation", "AnimationIteration"),
			animationstart: Ra("Animation", "AnimationStart"),
			transitionrun: Ra("Transition", "TransitionRun"),
			transitionstart: Ra("Transition", "TransitionStart"),
			transitioncancel: Ra("Transition", "TransitionCancel"),
			transitionend: Ra("Transition", "TransitionEnd")
		},
		Fo = {},
		Yd = {};
	Sn && (Yd = document.createElement("div").style, "AnimationEvent" in window || (delete sl.animationend.animation, delete sl.animationiteration.animation, delete sl.animationstart.animation), "TransitionEvent" in window || delete sl.transitionend.transition);

	function Oa(e) {
		if (Fo[e]) return Fo[e];
		if (!sl[e]) return e;
		var t = sl[e],
			n;
		for (n in t)
			if (t.hasOwnProperty(n) && n in Yd) return Fo[e] = t[n];
		return e
	}
	var Gd = Oa("animationend"),
		Xd = Oa("animationiteration"),
		kd = Oa("animationstart"),
		vb = Oa("transitionrun"),
		yb = Oa("transitionstart"),
		gb = Oa("transitioncancel"),
		Vd = Oa("transitionend"),
		Qd = new Map,
		Wo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	Wo.push("scrollEnd");

	function en(e, t) {
		Qd.set(e, t), Ea(t, [e])
	}
	var Kd = new WeakMap;

	function kt(e, t) {
		if (typeof e == "object" && e !== null) {
			var n = Kd.get(e);
			return n !== void 0 ? n : (t = {
				value: e,
				source: t,
				stack: sd(t)
			}, Kd.set(e, t), t)
		}
		return {
			value: e,
			source: t,
			stack: sd(t)
		}
	}
	var Vt = [],
		cl = 0,
		Po = 0;

	function Li() {
		for (var e = cl, t = Po = cl = 0; t < e;) {
			var n = Vt[t];
			Vt[t++] = null;
			var r = Vt[t];
			Vt[t++] = null;
			var o = Vt[t];
			Vt[t++] = null;
			var c = Vt[t];
			if (Vt[t++] = null, r !== null && o !== null) {
				var v = r.pending;
				v === null ? o.next = o : (o.next = v.next, v.next = o), r.pending = o
			}
			c !== 0 && Zd(n, o, c)
		}
	}

	function Hi(e, t, n, r) {
		Vt[cl++] = e, Vt[cl++] = t, Vt[cl++] = n, Vt[cl++] = r, Po |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r)
	}

	function Io(e, t, n, r) {
		return Hi(e, t, n, r), qi(e)
	}

	function fl(e, t) {
		return Hi(e, null, null, t), qi(e)
	}

	function Zd(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var o = !1, c = e.return; c !== null;) c.childLanes |= n, r = c.alternate, r !== null && (r.childLanes |= n), c.tag === 22 && (e = c.stateNode, e === null || e._visibility & 1 || (o = !0)), e = c, c = c.return;
		return e.tag === 3 ? (c = e.stateNode, o && t !== null && (o = 31 - ct(n), e = c.hiddenUpdates, r = e[o], r === null ? e[o] = [t] : r.push(t), t.lane = n | 536870912), c) : null
	}

	function qi(e) {
		if (50 < Lr) throw Lr = 0, rc = null, Error(u(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null
	}
	var dl = {};

	function bb(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
	}

	function _t(e, t, n, r) {
		return new bb(e, t, n, r)
	}

	function es(e) {
		return e = e.prototype, !(!e || !e.isReactComponent)
	}

	function Rn(e, t) {
		var n = e.alternate;
		return n === null ? (n = _t(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
	}

	function Jd(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e
	}

	function $i(e, t, n, r, o, c) {
		var v = 0;
		if (r = e, typeof e == "function") es(e) && (v = 1);
		else if (typeof e == "string") v = E1(e, n, P.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else e: switch (e) {
			case te:
				return e = _t(31, n, t, o), e.elementType = te, e.lanes = c, e;
			case R:
				return Ta(n.children, o, c, t);
			case A:
				v = 8, o |= 24;
				break;
			case w:
				return e = _t(12, n, t, o | 2), e.elementType = w, e.lanes = c, e;
			case q:
				return e = _t(13, n, t, o), e.elementType = q, e.lanes = c, e;
			case Q:
				return e = _t(19, n, t, o), e.elementType = Q, e.lanes = c, e;
			default:
				if (typeof e == "object" && e !== null) switch (e.$$typeof) {
					case D:
					case _:
						v = 10;
						break e;
					case $:
						v = 9;
						break e;
					case Y:
						v = 11;
						break e;
					case Z:
						v = 14;
						break e;
					case I:
						v = 16, r = null;
						break e
				}
				v = 29, n = Error(u(130, e === null ? "null" : typeof e, "")), r = null
		}
		return t = _t(v, n, t, o), t.elementType = e, t.type = r, t.lanes = c, t
	}

	function Ta(e, t, n, r) {
		return e = _t(7, e, r, t), e.lanes = n, e
	}

	function ts(e, t, n) {
		return e = _t(6, e, null, t), e.lanes = n, e
	}

	function ns(e, t, n) {
		return t = _t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t
	}
	var hl = [],
		ml = 0,
		Yi = null,
		Gi = 0,
		Qt = [],
		Kt = 0,
		wa = null,
		On = 1,
		Tn = "";

	function Ca(e, t) {
		hl[ml++] = Gi, hl[ml++] = Yi, Yi = e, Gi = t
	}

	function Fd(e, t, n) {
		Qt[Kt++] = On, Qt[Kt++] = Tn, Qt[Kt++] = wa, wa = e;
		var r = On;
		e = Tn;
		var o = 32 - ct(r) - 1;
		r &= ~(1 << o), n += 1;
		var c = 32 - ct(t) + o;
		if (30 < c) {
			var v = o - o % 5;
			c = (r & (1 << v) - 1).toString(32), r >>= v, o -= v, On = 1 << 32 - ct(t) + o | n << o | r, Tn = c + e
		} else On = 1 << c | n << o | r, Tn = e
	}

	function as(e) {
		e.return !== null && (Ca(e, 1), Fd(e, 1, 0))
	}

	function ls(e) {
		for (; e === Yi;) Yi = hl[--ml], hl[ml] = null, Gi = hl[--ml], hl[ml] = null;
		for (; e === wa;) wa = Qt[--Kt], Qt[Kt] = null, Tn = Qt[--Kt], Qt[Kt] = null, On = Qt[--Kt], Qt[Kt] = null
	}
	var vt = null,
		ke = null,
		je = !1,
		Na = null,
		cn = !1,
		rs = Error(u(519));

	function Aa(e) {
		var t = Error(u(418, ""));
		throw pr(kt(t, e)), rs
	}

	function Wd(e) {
		var t = e.stateNode,
			n = e.type,
			r = e.memoizedProps;
		switch (t[ft] = e, t[bt] = r, n) {
			case "dialog":
				Oe("cancel", t), Oe("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Oe("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < qr.length; n++) Oe(qr[n], t);
				break;
			case "source":
				Oe("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Oe("error", t), Oe("load", t);
				break;
			case "details":
				Oe("toggle", t);
				break;
			case "input":
				Oe("invalid", t), dd(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), Ni(t);
				break;
			case "select":
				Oe("invalid", t);
				break;
			case "textarea":
				Oe("invalid", t), md(t, r.value, r.defaultValue, r.children), Ni(t)
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || r.suppressHydrationWarning === !0 || mp(t.textContent, n) ? (r.popover != null && (Oe("beforetoggle", t), Oe("toggle", t)), r.onScroll != null && Oe("scroll", t), r.onScrollEnd != null && Oe("scrollend", t), r.onClick != null && (t.onclick = Su), t = !0) : t = !1, t || Aa(e)
	}

	function Pd(e) {
		for (vt = e.return; vt;) switch (vt.tag) {
			case 5:
			case 13:
				cn = !1;
				return;
			case 27:
			case 3:
				cn = !0;
				return;
			default:
				vt = vt.return
		}
	}

	function hr(e) {
		if (e !== vt) return !1;
		if (!je) return Pd(e), je = !0, !1;
		var t = e.tag,
			n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ec(e.type, e.memoizedProps)), n = !n), n && ke && Aa(e), Pd(e), t === 13) {
			if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
			e: {
				for (e = e.nextSibling, t = 0; e;) {
					if (e.nodeType === 8)
						if (n = e.data, n === "/$") {
							if (t === 0) {
								ke = nn(e.nextSibling);
								break e
							}
							t--
						} else n !== "$" && n !== "$!" && n !== "$?" || t++;
					e = e.nextSibling
				}
				ke = null
			}
		} else t === 27 ? (t = ke, sa(e.type) ? (e = Tc, Tc = null, ke = e) : ke = t) : ke = vt ? nn(e.stateNode.nextSibling) : null;
		return !0
	}

	function mr() {
		ke = vt = null, je = !1
	}

	function Id() {
		var e = Na;
		return e !== null && (Rt === null ? Rt = e : Rt.push.apply(Rt, e), Na = null), e
	}

	function pr(e) {
		Na === null ? Na = [e] : Na.push(e)
	}
	var is = X(null),
		ja = null,
		wn = null;

	function Zn(e, t, n) {
		J(is, t._currentValue), t._currentValue = n
	}

	function Cn(e) {
		e._currentValue = is.current, W(is)
	}

	function us(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
			e = e.return
		}
	}

	function os(e, t, n, r) {
		var o = e.child;
		for (o !== null && (o.return = e); o !== null;) {
			var c = o.dependencies;
			if (c !== null) {
				var v = o.child;
				c = c.firstContext;
				e: for (; c !== null;) {
					var b = c;
					c = o;
					for (var O = 0; O < t.length; O++)
						if (b.context === t[O]) {
							c.lanes |= n, b = c.alternate, b !== null && (b.lanes |= n), us(c.return, n, e), r || (v = null);
							break e
						} c = b.next
				}
			} else if (o.tag === 18) {
				if (v = o.return, v === null) throw Error(u(341));
				v.lanes |= n, c = v.alternate, c !== null && (c.lanes |= n), us(v, n, e), v = null
			} else v = o.child;
			if (v !== null) v.return = o;
			else
				for (v = o; v !== null;) {
					if (v === e) {
						v = null;
						break
					}
					if (o = v.sibling, o !== null) {
						o.return = v.return, v = o;
						break
					}
					v = v.return
				}
			o = v
		}
	}

	function vr(e, t, n, r) {
		e = null;
		for (var o = t, c = !1; o !== null;) {
			if (!c) {
				if ((o.flags & 524288) !== 0) c = !0;
				else if ((o.flags & 262144) !== 0) break
			}
			if (o.tag === 10) {
				var v = o.alternate;
				if (v === null) throw Error(u(387));
				if (v = v.memoizedProps, v !== null) {
					var b = o.type;
					Mt(o.pendingProps.value, v.value) || (e !== null ? e.push(b) : e = [b])
				}
			} else if (o === Xe.current) {
				if (v = o.alternate, v === null) throw Error(u(387));
				v.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Vr) : e = [Vr])
			}
			o = o.return
		}
		e !== null && os(t, e, n, r), t.flags |= 262144
	}

	function Xi(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Mt(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next
		}
		return !1
	}

	function Da(e) {
		ja = e, wn = null, e = e.dependencies, e !== null && (e.firstContext = null)
	}

	function dt(e) {
		return eh(ja, e)
	}

	function ki(e, t) {
		return ja === null && Da(e), eh(e, t)
	}

	function eh(e, t) {
		var n = t._currentValue;
		if (t = {
				context: t,
				memoizedValue: n,
				next: null
			}, wn === null) {
			if (e === null) throw Error(u(308));
			wn = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288
		} else wn = wn.next = t;
		return n
	}
	var xb = typeof AbortController < "u" ? AbortController : function () {
			var e = [],
				t = this.signal = {
					aborted: !1,
					addEventListener: function (n, r) {
						e.push(r)
					}
				};
			this.abort = function () {
				t.aborted = !0, e.forEach(function (n) {
					return n()
				})
			}
		},
		Eb = a.unstable_scheduleCallback,
		Sb = a.unstable_NormalPriority,
		et = {
			$$typeof: _,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0
		};

	function ss() {
		return {
			controller: new xb,
			data: new Map,
			refCount: 0
		}
	}

	function yr(e) {
		e.refCount--, e.refCount === 0 && Eb(Sb, function () {
			e.controller.abort()
		})
	}
	var gr = null,
		cs = 0,
		pl = 0,
		vl = null;

	function Rb(e, t) {
		if (gr === null) {
			var n = gr = [];
			cs = 0, pl = dc(), vl = {
				status: "pending",
				value: void 0,
				then: function (r) {
					n.push(r)
				}
			}
		}
		return cs++, t.then(th, th), t
	}

	function th() {
		if (--cs === 0 && gr !== null) {
			vl !== null && (vl.status = "fulfilled");
			var e = gr;
			gr = null, pl = 0, vl = null;
			for (var t = 0; t < e.length; t++)(0, e[t])()
		}
	}

	function Ob(e, t) {
		var n = [],
			r = {
				status: "pending",
				value: null,
				reason: null,
				then: function (o) {
					n.push(o)
				}
			};
		return e.then(function () {
			r.status = "fulfilled", r.value = t;
			for (var o = 0; o < n.length; o++)(0, n[o])(t)
		}, function (o) {
			for (r.status = "rejected", r.reason = o, o = 0; o < n.length; o++)(0, n[o])(void 0)
		}), r
	}
	var nh = B.S;
	B.S = function (e, t) {
		typeof t == "object" && t !== null && typeof t.then == "function" && Rb(e, t), nh !== null && nh(e, t)
	};
	var Ma = X(null);

	function fs() {
		var e = Ma.current;
		return e !== null ? e : Le.pooledCache
	}

	function Vi(e, t) {
		t === null ? J(Ma, Ma.current) : J(Ma, t.pool)
	}

	function ah() {
		var e = fs();
		return e === null ? null : {
			parent: et._currentValue,
			pool: e
		}
	}
	var br = Error(u(460)),
		lh = Error(u(474)),
		Qi = Error(u(542)),
		ds = {
			then: function () {}
		};

	function rh(e) {
		return e = e.status, e === "fulfilled" || e === "rejected"
	}

	function Ki() {}

	function ih(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Ki, Ki), t = n), t.status) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw e = t.reason, oh(e), e;
			default:
				if (typeof t.status == "string") t.then(Ki, Ki);
				else {
					if (e = Le, e !== null && 100 < e.shellSuspendCounter) throw Error(u(482));
					e = t, e.status = "pending", e.then(function (r) {
						if (t.status === "pending") {
							var o = t;
							o.status = "fulfilled", o.value = r
						}
					}, function (r) {
						if (t.status === "pending") {
							var o = t;
							o.status = "rejected", o.reason = r
						}
					})
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw e = t.reason, oh(e), e
				}
				throw xr = t, br
		}
	}
	var xr = null;

	function uh() {
		if (xr === null) throw Error(u(459));
		var e = xr;
		return xr = null, e
	}

	function oh(e) {
		if (e === br || e === Qi) throw Error(u(483))
	}
	var Jn = !1;

	function hs(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		}
	}

	function ms(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		})
	}

	function Fn(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		}
	}

	function Wn(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, (De & 2) !== 0) {
			var o = r.pending;
			return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, t = qi(e), Zd(e, null, n), t
		}
		return Hi(e, r, t, n), qi(e)
	}

	function Er(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, ed(e, n)
		}
	}

	function ps(e, t) {
		var n = e.updateQueue,
			r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var o = null,
				c = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var v = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					c === null ? o = c = v : c = c.next = v, n = n.next
				} while (n !== null);
				c === null ? o = c = t : c = c.next = t
			} else o = c = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: o,
				lastBaseUpdate: c,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
	}
	var vs = !1;

	function Sr() {
		if (vs) {
			var e = vl;
			if (e !== null) throw e
		}
	}

	function Rr(e, t, n, r) {
		vs = !1;
		var o = e.updateQueue;
		Jn = !1;
		var c = o.firstBaseUpdate,
			v = o.lastBaseUpdate,
			b = o.shared.pending;
		if (b !== null) {
			o.shared.pending = null;
			var O = b,
				U = O.next;
			O.next = null, v === null ? c = U : v.next = U, v = O;
			var G = e.alternate;
			G !== null && (G = G.updateQueue, b = G.lastBaseUpdate, b !== v && (b === null ? G.firstBaseUpdate = U : b.next = U, G.lastBaseUpdate = O))
		}
		if (c !== null) {
			var V = o.baseState;
			v = 0, G = U = O = null, b = c;
			do {
				var z = b.lane & -536870913,
					L = z !== b.lane;
				if (L ? (Te & z) === z : (r & z) === z) {
					z !== 0 && z === pl && (vs = !0), G !== null && (G = G.next = {
						lane: 0,
						tag: b.tag,
						payload: b.payload,
						callback: null,
						next: null
					});
					e: {
						var me = e,
							oe = b;z = t;
						var ze = n;
						switch (oe.tag) {
							case 1:
								if (me = oe.payload, typeof me == "function") {
									V = me.call(ze, V, z);
									break e
								}
								V = me;
								break e;
							case 3:
								me.flags = me.flags & -65537 | 128;
							case 0:
								if (me = oe.payload, z = typeof me == "function" ? me.call(ze, V, z) : me, z == null) break e;
								V = y({}, V, z);
								break e;
							case 2:
								Jn = !0
						}
					}
					z = b.callback, z !== null && (e.flags |= 64, L && (e.flags |= 8192), L = o.callbacks, L === null ? o.callbacks = [z] : L.push(z))
				} else L = {
					lane: z,
					tag: b.tag,
					payload: b.payload,
					callback: b.callback,
					next: null
				}, G === null ? (U = G = L, O = V) : G = G.next = L, v |= z;
				if (b = b.next, b === null) {
					if (b = o.shared.pending, b === null) break;
					L = b, b = L.next, L.next = null, o.lastBaseUpdate = L, o.shared.pending = null
				}
			} while (!0);
			G === null && (O = V), o.baseState = O, o.firstBaseUpdate = U, o.lastBaseUpdate = G, c === null && (o.shared.lanes = 0), ra |= v, e.lanes = v, e.memoizedState = V
		}
	}

	function sh(e, t) {
		if (typeof e != "function") throw Error(u(191, e));
		e.call(t)
	}

	function ch(e, t) {
		var n = e.callbacks;
		if (n !== null)
			for (e.callbacks = null, e = 0; e < n.length; e++) sh(n[e], t)
	}
	var yl = X(null),
		Zi = X(0);

	function fh(e, t) {
		e = Un, J(Zi, e), J(yl, t), Un = e | t.baseLanes
	}

	function ys() {
		J(Zi, Un), J(yl, yl.current)
	}

	function gs() {
		Un = Zi.current, W(yl), W(Zi)
	}
	var Pn = 0,
		Ee = null,
		_e = null,
		Je = null,
		Ji = !1,
		gl = !1,
		_a = !1,
		Fi = 0,
		Or = 0,
		bl = null,
		Tb = 0;

	function Ke() {
		throw Error(u(321))
	}

	function bs(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++)
			if (!Mt(e[n], t[n])) return !1;
		return !0
	}

	function xs(e, t, n, r, o, c) {
		return Pn = c, Ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e === null || e.memoizedState === null ? Zh : Jh, _a = !1, c = n(r, o), _a = !1, gl && (c = hh(t, n, r, o)), dh(e), c
	}

	function dh(e) {
		B.H = nu;
		var t = _e !== null && _e.next !== null;
		if (Pn = 0, Je = _e = Ee = null, Ji = !1, Or = 0, bl = null, t) throw Error(u(300));
		e === null || lt || (e = e.dependencies, e !== null && Xi(e) && (lt = !0))
	}

	function hh(e, t, n, r) {
		Ee = e;
		var o = 0;
		do {
			if (gl && (bl = null), Or = 0, gl = !1, 25 <= o) throw Error(u(301));
			if (o += 1, Je = _e = null, e.updateQueue != null) {
				var c = e.updateQueue;
				c.lastEffect = null, c.events = null, c.stores = null, c.memoCache != null && (c.memoCache.index = 0)
			}
			B.H = Mb, c = t(n, r)
		} while (gl);
		return c
	}

	function wb() {
		var e = B.H,
			t = e.useState()[0];
		return t = typeof t.then == "function" ? Tr(t) : t, e = e.useState()[0], (_e !== null ? _e.memoizedState : null) !== e && (Ee.flags |= 1024), t
	}

	function Es() {
		var e = Fi !== 0;
		return Fi = 0, e
	}

	function Ss(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
	}

	function Rs(e) {
		if (Ji) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next
			}
			Ji = !1
		}
		Pn = 0, Je = _e = Ee = null, gl = !1, Or = Fi = 0, bl = null
	}

	function Et() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Je === null ? Ee.memoizedState = Je = e : Je = Je.next = e, Je
	}

	function Fe() {
		if (_e === null) {
			var e = Ee.alternate;
			e = e !== null ? e.memoizedState : null
		} else e = _e.next;
		var t = Je === null ? Ee.memoizedState : Je.next;
		if (t !== null) Je = t, _e = e;
		else {
			if (e === null) throw Ee.alternate === null ? Error(u(467)) : Error(u(310));
			_e = e, e = {
				memoizedState: _e.memoizedState,
				baseState: _e.baseState,
				baseQueue: _e.baseQueue,
				queue: _e.queue,
				next: null
			}, Je === null ? Ee.memoizedState = Je = e : Je = Je.next = e
		}
		return Je
	}

	function Os() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		}
	}

	function Tr(e) {
		var t = Or;
		return Or += 1, bl === null && (bl = []), e = ih(bl, e, t), t = Ee, (Je === null ? t.memoizedState : Je.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? Zh : Jh), e
	}

	function Wi(e) {
		if (e !== null && typeof e == "object") {
			if (typeof e.then == "function") return Tr(e);
			if (e.$$typeof === _) return dt(e)
		}
		throw Error(u(438, String(e)))
	}

	function Ts(e) {
		var t = null,
			n = Ee.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = Ee.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function (o) {
					return o.slice()
				}),
				index: 0
			})))
		}
		if (t == null && (t = {
				data: [],
				index: 0
			}), n === null && (n = Os(), Ee.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
			for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = se;
		return t.index++, n
	}

	function Nn(e, t) {
		return typeof t == "function" ? t(e) : t
	}

	function Pi(e) {
		var t = Fe();
		return ws(t, _e, e)
	}

	function ws(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(u(311));
		r.lastRenderedReducer = n;
		var o = e.baseQueue,
			c = r.pending;
		if (c !== null) {
			if (o !== null) {
				var v = o.next;
				o.next = c.next, c.next = v
			}
			t.baseQueue = o = c, r.pending = null
		}
		if (c = e.baseState, o === null) e.memoizedState = c;
		else {
			t = o.next;
			var b = v = null,
				O = null,
				U = t,
				G = !1;
			do {
				var V = U.lane & -536870913;
				if (V !== U.lane ? (Te & V) === V : (Pn & V) === V) {
					var z = U.revertLane;
					if (z === 0) O !== null && (O = O.next = {
						lane: 0,
						revertLane: 0,
						action: U.action,
						hasEagerState: U.hasEagerState,
						eagerState: U.eagerState,
						next: null
					}), V === pl && (G = !0);
					else if ((Pn & z) === z) {
						U = U.next, z === pl && (G = !0);
						continue
					} else V = {
						lane: 0,
						revertLane: U.revertLane,
						action: U.action,
						hasEagerState: U.hasEagerState,
						eagerState: U.eagerState,
						next: null
					}, O === null ? (b = O = V, v = c) : O = O.next = V, Ee.lanes |= z, ra |= z;
					V = U.action, _a && n(c, V), c = U.hasEagerState ? U.eagerState : n(c, V)
				} else z = {
					lane: V,
					revertLane: U.revertLane,
					action: U.action,
					hasEagerState: U.hasEagerState,
					eagerState: U.eagerState,
					next: null
				}, O === null ? (b = O = z, v = c) : O = O.next = z, Ee.lanes |= V, ra |= V;
				U = U.next
			} while (U !== null && U !== t);
			if (O === null ? v = c : O.next = b, !Mt(c, e.memoizedState) && (lt = !0, G && (n = vl, n !== null))) throw n;
			e.memoizedState = c, e.baseState = v, e.baseQueue = O, r.lastRenderedState = c
		}
		return o === null && (r.lanes = 0), [e.memoizedState, r.dispatch]
	}

	function Cs(e) {
		var t = Fe(),
			n = t.queue;
		if (n === null) throw Error(u(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch,
			o = n.pending,
			c = t.memoizedState;
		if (o !== null) {
			n.pending = null;
			var v = o = o.next;
			do c = e(c, v.action), v = v.next; while (v !== o);
			Mt(c, t.memoizedState) || (lt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), n.lastRenderedState = c
		}
		return [c, r]
	}

	function mh(e, t, n) {
		var r = Ee,
			o = Fe(),
			c = je;
		if (c) {
			if (n === void 0) throw Error(u(407));
			n = n()
		} else n = t();
		var v = !Mt((_e || o).memoizedState, n);
		v && (o.memoizedState = n, lt = !0), o = o.queue;
		var b = yh.bind(null, r, o, e);
		if (wr(2048, 8, b, [e]), o.getSnapshot !== t || v || Je !== null && Je.memoizedState.tag & 1) {
			if (r.flags |= 2048, xl(9, Ii(), vh.bind(null, r, o, n, t), null), Le === null) throw Error(u(349));
			c || (Pn & 124) !== 0 || ph(r, t, n)
		}
		return n
	}

	function ph(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = Ee.updateQueue, t === null ? (t = Os(), Ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
	}

	function vh(e, t, n, r) {
		t.value = n, t.getSnapshot = r, gh(t) && bh(e)
	}

	function yh(e, t, n) {
		return n(function () {
			gh(t) && bh(e)
		})
	}

	function gh(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Mt(e, n)
		} catch {
			return !0
		}
	}

	function bh(e) {
		var t = fl(e, 2);
		t !== null && Ht(t, e, 2)
	}

	function Ns(e) {
		var t = Et();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), _a) {
				jt(!0);
				try {
					n()
				} finally {
					jt(!1)
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Nn,
			lastRenderedState: e
		}, t
	}

	function xh(e, t, n, r) {
		return e.baseState = n, ws(e, _e, typeof r == "function" ? r : Nn)
	}

	function Cb(e, t, n, r, o) {
		if (tu(e)) throw Error(u(485));
		if (e = t.action, e !== null) {
			var c = {
				payload: o,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function (v) {
					c.listeners.push(v)
				}
			};
			B.T !== null ? n(!0) : c.isTransition = !1, r(c), n = t.pending, n === null ? (c.next = t.pending = c, Eh(t, c)) : (c.next = n.next, t.pending = n.next = c)
		}
	}

	function Eh(e, t) {
		var n = t.action,
			r = t.payload,
			o = e.state;
		if (t.isTransition) {
			var c = B.T,
				v = {};
			B.T = v;
			try {
				var b = n(o, r),
					O = B.S;
				O !== null && O(v, b), Sh(e, t, b)
			} catch (U) {
				As(e, t, U)
			} finally {
				B.T = c
			}
		} else try {
			c = n(o, r), Sh(e, t, c)
		} catch (U) {
			As(e, t, U)
		}
	}

	function Sh(e, t, n) {
		n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function (r) {
			Rh(e, t, r)
		}, function (r) {
			return As(e, t, r)
		}) : Rh(e, t, n)
	}

	function Rh(e, t, n) {
		t.status = "fulfilled", t.value = n, Oh(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Eh(e, n)))
	}

	function As(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do t.status = "rejected", t.reason = n, Oh(t), t = t.next; while (t !== r)
		}
		e.action = null
	}

	function Oh(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++)(0, e[t])()
	}

	function Th(e, t) {
		return t
	}

	function wh(e, t) {
		if (je) {
			var n = Le.formState;
			if (n !== null) {
				e: {
					var r = Ee;
					if (je) {
						if (ke) {
							t: {
								for (var o = ke, c = cn; o.nodeType !== 8;) {
									if (!c) {
										o = null;
										break t
									}
									if (o = nn(o.nextSibling), o === null) {
										o = null;
										break t
									}
								}
								c = o.data,
								o = c === "F!" || c === "F" ? o : null
							}
							if (o) {
								ke = nn(o.nextSibling), r = o.data === "F!";
								break e
							}
						}
						Aa(r)
					}
					r = !1
				}
				r && (t = n[0])
			}
		}
		return n = Et(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Th,
			lastRenderedState: t
		}, n.queue = r, n = Vh.bind(null, Ee, r), r.dispatch = n, r = Ns(!1), c = Us.bind(null, Ee, !1, r.queue), r = Et(), o = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = o, n = Cb.bind(null, Ee, o, c, n), o.dispatch = n, r.memoizedState = e, [t, n, !1]
	}

	function Ch(e) {
		var t = Fe();
		return Nh(t, _e, e)
	}

	function Nh(e, t, n) {
		if (t = ws(e, t, Th)[0], e = Pi(Nn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
			var r = Tr(t)
		} catch (v) {
			throw v === br ? Qi : v
		} else r = t;
		t = Fe();
		var o = t.queue,
			c = o.dispatch;
		return n !== t.memoizedState && (Ee.flags |= 2048, xl(9, Ii(), Nb.bind(null, o, n), null)), [r, c, e]
	}

	function Nb(e, t) {
		e.action = t
	}

	function Ah(e) {
		var t = Fe(),
			n = _e;
		if (n !== null) return Nh(t, n, e);
		Fe(), t = t.memoizedState, n = Fe();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [t, r, !1]
	}

	function xl(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = Ee.updateQueue, t === null && (t = Os(), Ee.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
	}

	function Ii() {
		return {
			destroy: void 0,
			resource: void 0
		}
	}

	function jh() {
		return Fe().memoizedState
	}

	function eu(e, t, n, r) {
		var o = Et();
		r = r === void 0 ? null : r, Ee.flags |= e, o.memoizedState = xl(1 | t, Ii(), n, r)
	}

	function wr(e, t, n, r) {
		var o = Fe();
		r = r === void 0 ? null : r;
		var c = o.memoizedState.inst;
		_e !== null && r !== null && bs(r, _e.memoizedState.deps) ? o.memoizedState = xl(t, c, n, r) : (Ee.flags |= e, o.memoizedState = xl(1 | t, c, n, r))
	}

	function Dh(e, t) {
		eu(8390656, 8, e, t)
	}

	function Mh(e, t) {
		wr(2048, 8, e, t)
	}

	function _h(e, t) {
		return wr(4, 2, e, t)
	}

	function Uh(e, t) {
		return wr(4, 4, e, t)
	}

	function zh(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function () {
				typeof n == "function" ? n() : t(null)
			}
		}
		if (t != null) return e = e(), t.current = e,
			function () {
				t.current = null
			}
	}

	function Bh(e, t, n) {
		n = n != null ? n.concat([e]) : null, wr(4, 4, zh.bind(null, t, e), n)
	}

	function js() {}

	function Lh(e, t) {
		var n = Fe();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && bs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
	}

	function Hh(e, t) {
		var n = Fe();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && bs(t, r[1])) return r[0];
		if (r = e(), _a) {
			jt(!0);
			try {
				e()
			} finally {
				jt(!1)
			}
		}
		return n.memoizedState = [r, t], r
	}

	function Ds(e, t, n) {
		return n === void 0 || (Pn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = Ym(), Ee.lanes |= e, ra |= e, n)
	}

	function qh(e, t, n, r) {
		return Mt(n, t) ? n : yl.current !== null ? (e = Ds(e, n, r), Mt(e, t) || (lt = !0), e) : (Pn & 42) === 0 ? (lt = !0, e.memoizedState = n) : (e = Ym(), Ee.lanes |= e, ra |= e, t)
	}

	function $h(e, t, n, r, o) {
		var c = K.p;
		K.p = c !== 0 && 8 > c ? c : 8;
		var v = B.T,
			b = {};
		B.T = b, Us(e, !1, t, n);
		try {
			var O = o(),
				U = B.S;
			if (U !== null && U(b, O), O !== null && typeof O == "object" && typeof O.then == "function") {
				var G = Ob(O, r);
				Cr(e, t, G, Lt(e))
			} else Cr(e, t, r, Lt(e))
		} catch (V) {
			Cr(e, t, {
				then: function () {},
				status: "rejected",
				reason: V
			}, Lt())
		} finally {
			K.p = c, B.T = v
		}
	}

	function Ab() {}

	function Ms(e, t, n, r) {
		if (e.tag !== 5) throw Error(u(476));
		var o = Yh(e).queue;
		$h(e, o, t, F, n === null ? Ab : function () {
			return Gh(e), n(r)
		})
	}

	function Yh(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: F,
			baseState: F,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Nn,
				lastRenderedState: F
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Nn,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
	}

	function Gh(e) {
		var t = Yh(e).next.queue;
		Cr(e, t, {}, Lt())
	}

	function _s() {
		return dt(Vr)
	}

	function Xh() {
		return Fe().memoizedState
	}

	function kh() {
		return Fe().memoizedState
	}

	function jb(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = Lt();
					e = Fn(n);
					var r = Wn(t, e, n);
					r !== null && (Ht(r, t, n), Er(r, t, n)), t = {
						cache: ss()
					}, e.payload = t;
					return
			}
			t = t.return
		}
	}

	function Db(e, t, n) {
		var r = Lt();
		n = {
			lane: r,
			revertLane: 0,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, tu(e) ? Qh(t, n) : (n = Io(e, t, n, r), n !== null && (Ht(n, e, r), Kh(n, t, r)))
	}

	function Vh(e, t, n) {
		var r = Lt();
		Cr(e, t, n, r)
	}

	function Cr(e, t, n, r) {
		var o = {
			lane: r,
			revertLane: 0,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (tu(e)) Qh(t, o);
		else {
			var c = e.alternate;
			if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
				var v = t.lastRenderedState,
					b = c(v, n);
				if (o.hasEagerState = !0, o.eagerState = b, Mt(b, v)) return Hi(e, t, o, 0), Le === null && Li(), !1
			} catch {} finally {}
			if (n = Io(e, t, o, r), n !== null) return Ht(n, e, r), Kh(n, t, r), !0
		}
		return !1
	}

	function Us(e, t, n, r) {
		if (r = {
				lane: 2,
				revertLane: dc(),
				action: r,
				hasEagerState: !1,
				eagerState: null,
				next: null
			}, tu(e)) {
			if (t) throw Error(u(479))
		} else t = Io(e, n, r, 2), t !== null && Ht(t, e, 2)
	}

	function tu(e) {
		var t = e.alternate;
		return e === Ee || t !== null && t === Ee
	}

	function Qh(e, t) {
		gl = Ji = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
	}

	function Kh(e, t, n) {
		if ((n & 4194048) !== 0) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, ed(e, n)
		}
	}
	var nu = {
			readContext: dt,
			use: Wi,
			useCallback: Ke,
			useContext: Ke,
			useEffect: Ke,
			useImperativeHandle: Ke,
			useLayoutEffect: Ke,
			useInsertionEffect: Ke,
			useMemo: Ke,
			useReducer: Ke,
			useRef: Ke,
			useState: Ke,
			useDebugValue: Ke,
			useDeferredValue: Ke,
			useTransition: Ke,
			useSyncExternalStore: Ke,
			useId: Ke,
			useHostTransitionStatus: Ke,
			useFormState: Ke,
			useActionState: Ke,
			useOptimistic: Ke,
			useMemoCache: Ke,
			useCacheRefresh: Ke
		},
		Zh = {
			readContext: dt,
			use: Wi,
			useCallback: function (e, t) {
				return Et().memoizedState = [e, t === void 0 ? null : t], e
			},
			useContext: dt,
			useEffect: Dh,
			useImperativeHandle: function (e, t, n) {
				n = n != null ? n.concat([e]) : null, eu(4194308, 4, zh.bind(null, t, e), n)
			},
			useLayoutEffect: function (e, t) {
				return eu(4194308, 4, e, t)
			},
			useInsertionEffect: function (e, t) {
				eu(4, 2, e, t)
			},
			useMemo: function (e, t) {
				var n = Et();
				t = t === void 0 ? null : t;
				var r = e();
				if (_a) {
					jt(!0);
					try {
						e()
					} finally {
						jt(!1)
					}
				}
				return n.memoizedState = [r, t], r
			},
			useReducer: function (e, t, n) {
				var r = Et();
				if (n !== void 0) {
					var o = n(t);
					if (_a) {
						jt(!0);
						try {
							n(t)
						} finally {
							jt(!1)
						}
					}
				} else o = t;
				return r.memoizedState = r.baseState = o, e = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: o
				}, r.queue = e, e = e.dispatch = Db.bind(null, Ee, e), [r.memoizedState, e]
			},
			useRef: function (e) {
				var t = Et();
				return e = {
					current: e
				}, t.memoizedState = e
			},
			useState: function (e) {
				e = Ns(e);
				var t = e.queue,
					n = Vh.bind(null, Ee, t);
				return t.dispatch = n, [e.memoizedState, n]
			},
			useDebugValue: js,
			useDeferredValue: function (e, t) {
				var n = Et();
				return Ds(n, e, t)
			},
			useTransition: function () {
				var e = Ns(!1);
				return e = $h.bind(null, Ee, e.queue, !0, !1), Et().memoizedState = e, [!1, e]
			},
			useSyncExternalStore: function (e, t, n) {
				var r = Ee,
					o = Et();
				if (je) {
					if (n === void 0) throw Error(u(407));
					n = n()
				} else {
					if (n = t(), Le === null) throw Error(u(349));
					(Te & 124) !== 0 || ph(r, t, n)
				}
				o.memoizedState = n;
				var c = {
					value: n,
					getSnapshot: t
				};
				return o.queue = c, Dh(yh.bind(null, r, c, e), [e]), r.flags |= 2048, xl(9, Ii(), vh.bind(null, r, c, n, t), null), n
			},
			useId: function () {
				var e = Et(),
					t = Le.identifierPrefix;
				if (je) {
					var n = Tn,
						r = On;
					n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = Fi++, 0 < n && (t += "H" + n.toString(32)), t += "»"
				} else n = Tb++, t = "«" + t + "r" + n.toString(32) + "»";
				return e.memoizedState = t
			},
			useHostTransitionStatus: _s,
			useFormState: wh,
			useActionState: wh,
			useOptimistic: function (e) {
				var t = Et();
				t.memoizedState = t.baseState = e;
				var n = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null
				};
				return t.queue = n, t = Us.bind(null, Ee, !0, n), n.dispatch = t, [e, t]
			},
			useMemoCache: Ts,
			useCacheRefresh: function () {
				return Et().memoizedState = jb.bind(null, Ee)
			}
		},
		Jh = {
			readContext: dt,
			use: Wi,
			useCallback: Lh,
			useContext: dt,
			useEffect: Mh,
			useImperativeHandle: Bh,
			useInsertionEffect: _h,
			useLayoutEffect: Uh,
			useMemo: Hh,
			useReducer: Pi,
			useRef: jh,
			useState: function () {
				return Pi(Nn)
			},
			useDebugValue: js,
			useDeferredValue: function (e, t) {
				var n = Fe();
				return qh(n, _e.memoizedState, e, t)
			},
			useTransition: function () {
				var e = Pi(Nn)[0],
					t = Fe().memoizedState;
				return [typeof e == "boolean" ? e : Tr(e), t]
			},
			useSyncExternalStore: mh,
			useId: Xh,
			useHostTransitionStatus: _s,
			useFormState: Ch,
			useActionState: Ch,
			useOptimistic: function (e, t) {
				var n = Fe();
				return xh(n, _e, e, t)
			},
			useMemoCache: Ts,
			useCacheRefresh: kh
		},
		Mb = {
			readContext: dt,
			use: Wi,
			useCallback: Lh,
			useContext: dt,
			useEffect: Mh,
			useImperativeHandle: Bh,
			useInsertionEffect: _h,
			useLayoutEffect: Uh,
			useMemo: Hh,
			useReducer: Cs,
			useRef: jh,
			useState: function () {
				return Cs(Nn)
			},
			useDebugValue: js,
			useDeferredValue: function (e, t) {
				var n = Fe();
				return _e === null ? Ds(n, e, t) : qh(n, _e.memoizedState, e, t)
			},
			useTransition: function () {
				var e = Cs(Nn)[0],
					t = Fe().memoizedState;
				return [typeof e == "boolean" ? e : Tr(e), t]
			},
			useSyncExternalStore: mh,
			useId: Xh,
			useHostTransitionStatus: _s,
			useFormState: Ah,
			useActionState: Ah,
			useOptimistic: function (e, t) {
				var n = Fe();
				return _e !== null ? xh(n, _e, e, t) : (n.baseState = e, [e, n.queue.dispatch])
			},
			useMemoCache: Ts,
			useCacheRefresh: kh
		},
		El = null,
		Nr = 0;

	function au(e) {
		var t = Nr;
		return Nr += 1, El === null && (El = []), ih(El, e, t)
	}

	function Ar(e, t) {
		t = t.props.ref, e.ref = t !== void 0 ? t : null
	}

	function lu(e, t) {
		throw t.$$typeof === E ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
	}

	function Fh(e) {
		var t = e._init;
		return t(e._payload)
	}

	function Wh(e) {
		function t(j, N) {
			if (e) {
				var M = j.deletions;
				M === null ? (j.deletions = [N], j.flags |= 16) : M.push(N)
			}
		}

		function n(j, N) {
			if (!e) return null;
			for (; N !== null;) t(j, N), N = N.sibling;
			return null
		}

		function r(j) {
			for (var N = new Map; j !== null;) j.key !== null ? N.set(j.key, j) : N.set(j.index, j), j = j.sibling;
			return N
		}

		function o(j, N) {
			return j = Rn(j, N), j.index = 0, j.sibling = null, j
		}

		function c(j, N, M) {
			return j.index = M, e ? (M = j.alternate, M !== null ? (M = M.index, M < N ? (j.flags |= 67108866, N) : M) : (j.flags |= 67108866, N)) : (j.flags |= 1048576, N)
		}

		function v(j) {
			return e && j.alternate === null && (j.flags |= 67108866), j
		}

		function b(j, N, M, k) {
			return N === null || N.tag !== 6 ? (N = ts(M, j.mode, k), N.return = j, N) : (N = o(N, M), N.return = j, N)
		}

		function O(j, N, M, k) {
			var ne = M.type;
			return ne === R ? G(j, N, M.props.children, k, M.key) : N !== null && (N.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === I && Fh(ne) === N.type) ? (N = o(N, M.props), Ar(N, M), N.return = j, N) : (N = $i(M.type, M.key, M.props, null, j.mode, k), Ar(N, M), N.return = j, N)
		}

		function U(j, N, M, k) {
			return N === null || N.tag !== 4 || N.stateNode.containerInfo !== M.containerInfo || N.stateNode.implementation !== M.implementation ? (N = ns(M, j.mode, k), N.return = j, N) : (N = o(N, M.children || []), N.return = j, N)
		}

		function G(j, N, M, k, ne) {
			return N === null || N.tag !== 7 ? (N = Ta(M, j.mode, k, ne), N.return = j, N) : (N = o(N, M), N.return = j, N)
		}

		function V(j, N, M) {
			if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return N = ts("" + N, j.mode, M), N.return = j, N;
			if (typeof N == "object" && N !== null) {
				switch (N.$$typeof) {
					case S:
						return M = $i(N.type, N.key, N.props, null, j.mode, M), Ar(M, N), M.return = j, M;
					case C:
						return N = ns(N, j.mode, M), N.return = j, N;
					case I:
						var k = N._init;
						return N = k(N._payload), V(j, N, M)
				}
				if (xe(N) || le(N)) return N = Ta(N, j.mode, M, null), N.return = j, N;
				if (typeof N.then == "function") return V(j, au(N), M);
				if (N.$$typeof === _) return V(j, ki(j, N), M);
				lu(j, N)
			}
			return null
		}

		function z(j, N, M, k) {
			var ne = N !== null ? N.key : null;
			if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return ne !== null ? null : b(j, N, "" + M, k);
			if (typeof M == "object" && M !== null) {
				switch (M.$$typeof) {
					case S:
						return M.key === ne ? O(j, N, M, k) : null;
					case C:
						return M.key === ne ? U(j, N, M, k) : null;
					case I:
						return ne = M._init, M = ne(M._payload), z(j, N, M, k)
				}
				if (xe(M) || le(M)) return ne !== null ? null : G(j, N, M, k, null);
				if (typeof M.then == "function") return z(j, N, au(M), k);
				if (M.$$typeof === _) return z(j, N, ki(j, M), k);
				lu(j, M)
			}
			return null
		}

		function L(j, N, M, k, ne) {
			if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return j = j.get(M) || null, b(N, j, "" + k, ne);
			if (typeof k == "object" && k !== null) {
				switch (k.$$typeof) {
					case S:
						return j = j.get(k.key === null ? M : k.key) || null, O(N, j, k, ne);
					case C:
						return j = j.get(k.key === null ? M : k.key) || null, U(N, j, k, ne);
					case I:
						var Se = k._init;
						return k = Se(k._payload), L(j, N, M, k, ne)
				}
				if (xe(k) || le(k)) return j = j.get(M) || null, G(N, j, k, ne, null);
				if (typeof k.then == "function") return L(j, N, M, au(k), ne);
				if (k.$$typeof === _) return L(j, N, M, ki(N, k), ne);
				lu(N, k)
			}
			return null
		}

		function me(j, N, M, k) {
			for (var ne = null, Se = null, re = N, fe = N = 0, it = null; re !== null && fe < M.length; fe++) {
				re.index > fe ? (it = re, re = null) : it = re.sibling;
				var Ne = z(j, re, M[fe], k);
				if (Ne === null) {
					re === null && (re = it);
					break
				}
				e && re && Ne.alternate === null && t(j, re), N = c(Ne, N, fe), Se === null ? ne = Ne : Se.sibling = Ne, Se = Ne, re = it
			}
			if (fe === M.length) return n(j, re), je && Ca(j, fe), ne;
			if (re === null) {
				for (; fe < M.length; fe++) re = V(j, M[fe], k), re !== null && (N = c(re, N, fe), Se === null ? ne = re : Se.sibling = re, Se = re);
				return je && Ca(j, fe), ne
			}
			for (re = r(re); fe < M.length; fe++) it = L(re, j, fe, M[fe], k), it !== null && (e && it.alternate !== null && re.delete(it.key === null ? fe : it.key), N = c(it, N, fe), Se === null ? ne = it : Se.sibling = it, Se = it);
			return e && re.forEach(function (ma) {
				return t(j, ma)
			}), je && Ca(j, fe), ne
		}

		function oe(j, N, M, k) {
			if (M == null) throw Error(u(151));
			for (var ne = null, Se = null, re = N, fe = N = 0, it = null, Ne = M.next(); re !== null && !Ne.done; fe++, Ne = M.next()) {
				re.index > fe ? (it = re, re = null) : it = re.sibling;
				var ma = z(j, re, Ne.value, k);
				if (ma === null) {
					re === null && (re = it);
					break
				}
				e && re && ma.alternate === null && t(j, re), N = c(ma, N, fe), Se === null ? ne = ma : Se.sibling = ma, Se = ma, re = it
			}
			if (Ne.done) return n(j, re), je && Ca(j, fe), ne;
			if (re === null) {
				for (; !Ne.done; fe++, Ne = M.next()) Ne = V(j, Ne.value, k), Ne !== null && (N = c(Ne, N, fe), Se === null ? ne = Ne : Se.sibling = Ne, Se = Ne);
				return je && Ca(j, fe), ne
			}
			for (re = r(re); !Ne.done; fe++, Ne = M.next()) Ne = L(re, j, fe, Ne.value, k), Ne !== null && (e && Ne.alternate !== null && re.delete(Ne.key === null ? fe : Ne.key), N = c(Ne, N, fe), Se === null ? ne = Ne : Se.sibling = Ne, Se = Ne);
			return e && re.forEach(function (_1) {
				return t(j, _1)
			}), je && Ca(j, fe), ne
		}

		function ze(j, N, M, k) {
			if (typeof M == "object" && M !== null && M.type === R && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
				switch (M.$$typeof) {
					case S:
						e: {
							for (var ne = M.key; N !== null;) {
								if (N.key === ne) {
									if (ne = M.type, ne === R) {
										if (N.tag === 7) {
											n(j, N.sibling), k = o(N, M.props.children), k.return = j, j = k;
											break e
										}
									} else if (N.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === I && Fh(ne) === N.type) {
										n(j, N.sibling), k = o(N, M.props), Ar(k, M), k.return = j, j = k;
										break e
									}
									n(j, N);
									break
								} else t(j, N);
								N = N.sibling
							}
							M.type === R ? (k = Ta(M.props.children, j.mode, k, M.key), k.return = j, j = k) : (k = $i(M.type, M.key, M.props, null, j.mode, k), Ar(k, M), k.return = j, j = k)
						}
						return v(j);
					case C:
						e: {
							for (ne = M.key; N !== null;) {
								if (N.key === ne)
									if (N.tag === 4 && N.stateNode.containerInfo === M.containerInfo && N.stateNode.implementation === M.implementation) {
										n(j, N.sibling), k = o(N, M.children || []), k.return = j, j = k;
										break e
									} else {
										n(j, N);
										break
									}
								else t(j, N);
								N = N.sibling
							}
							k = ns(M, j.mode, k),
							k.return = j,
							j = k
						}
						return v(j);
					case I:
						return ne = M._init, M = ne(M._payload), ze(j, N, M, k)
				}
				if (xe(M)) return me(j, N, M, k);
				if (le(M)) {
					if (ne = le(M), typeof ne != "function") throw Error(u(150));
					return M = ne.call(M), oe(j, N, M, k)
				}
				if (typeof M.then == "function") return ze(j, N, au(M), k);
				if (M.$$typeof === _) return ze(j, N, ki(j, M), k);
				lu(j, M)
			}
			return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, N !== null && N.tag === 6 ? (n(j, N.sibling), k = o(N, M), k.return = j, j = k) : (n(j, N), k = ts(M, j.mode, k), k.return = j, j = k), v(j)) : n(j, N)
		}
		return function (j, N, M, k) {
			try {
				Nr = 0;
				var ne = ze(j, N, M, k);
				return El = null, ne
			} catch (re) {
				if (re === br || re === Qi) throw re;
				var Se = _t(29, re, null, j.mode);
				return Se.lanes = k, Se.return = j, Se
			} finally {}
		}
	}
	var Sl = Wh(!0),
		Ph = Wh(!1),
		Zt = X(null),
		fn = null;

	function In(e) {
		var t = e.alternate;
		J(tt, tt.current & 1), J(Zt, e), fn === null && (t === null || yl.current !== null || t.memoizedState !== null) && (fn = e)
	}

	function Ih(e) {
		if (e.tag === 22) {
			if (J(tt, tt.current), J(Zt, e), fn === null) {
				var t = e.alternate;
				t !== null && t.memoizedState !== null && (fn = e)
			}
		} else ea()
	}

	function ea() {
		J(tt, tt.current), J(Zt, Zt.current)
	}

	function An(e) {
		W(Zt), fn === e && (fn = null), W(tt)
	}
	var tt = X(0);

	function ru(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Oc(n))) return t
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if ((t.flags & 128) !== 0) return t
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
		return null
	}

	function zs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
	}
	var Bs = {
		enqueueSetState: function (e, t, n) {
			e = e._reactInternals;
			var r = Lt(),
				o = Fn(r);
			o.payload = t, n != null && (o.callback = n), t = Wn(e, o, r), t !== null && (Ht(t, e, r), Er(t, e, r))
		},
		enqueueReplaceState: function (e, t, n) {
			e = e._reactInternals;
			var r = Lt(),
				o = Fn(r);
			o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Wn(e, o, r), t !== null && (Ht(t, e, r), Er(t, e, r))
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals;
			var n = Lt(),
				r = Fn(n);
			r.tag = 2, t != null && (r.callback = t), t = Wn(e, r, n), t !== null && (Ht(t, e, n), Er(t, e, n))
		}
	};

	function em(e, t, n, r, o, c, v) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, c, v) : t.prototype && t.prototype.isPureReactComponent ? !fr(n, r) || !fr(o, c) : !0
	}

	function tm(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bs.enqueueReplaceState(t, t.state, null)
	}

	function Ua(e, t) {
		var n = t;
		if ("ref" in t) {
			n = {};
			for (var r in t) r !== "ref" && (n[r] = t[r])
		}
		if (e = e.defaultProps) {
			n === t && (n = y({}, n));
			for (var o in e) n[o] === void 0 && (n[o] = e[o])
		}
		return n
	}
	var iu = typeof reportError == "function" ? reportError : function (e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return
		}
		console.error(e)
	};

	function nm(e) {
		iu(e)
	}

	function am(e) {
		console.error(e)
	}

	function lm(e) {
		iu(e)
	}

	function uu(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, {
				componentStack: t.stack
			})
		} catch (r) {
			setTimeout(function () {
				throw r
			})
		}
	}

	function rm(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			})
		} catch (o) {
			setTimeout(function () {
				throw o
			})
		}
	}

	function Ls(e, t, n) {
		return n = Fn(n), n.tag = 3, n.payload = {
			element: null
		}, n.callback = function () {
			uu(e, t)
		}, n
	}

	function im(e) {
		return e = Fn(e), e.tag = 3, e
	}

	function um(e, t, n, r) {
		var o = n.type.getDerivedStateFromError;
		if (typeof o == "function") {
			var c = r.value;
			e.payload = function () {
				return o(c)
			}, e.callback = function () {
				rm(t, n, r)
			}
		}
		var v = n.stateNode;
		v !== null && typeof v.componentDidCatch == "function" && (e.callback = function () {
			rm(t, n, r), typeof o != "function" && (ia === null ? ia = new Set([this]) : ia.add(this));
			var b = r.stack;
			this.componentDidCatch(r.value, {
				componentStack: b !== null ? b : ""
			})
		})
	}

	function _b(e, t, n, r, o) {
		if (n.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
			if (t = n.alternate, t !== null && vr(t, n, o, !0), n = Zt.current, n !== null) {
				switch (n.tag) {
					case 13:
						return fn === null ? uc() : n.alternate === null && Ve === 0 && (Ve = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, r === ds ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([r]) : t.add(r), sc(e, r, o)), !1;
					case 22:
						return n.flags |= 65536, r === ds ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
							transitions: null,
							markerInstances: null,
							retryQueue: new Set([r])
						}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([r]) : n.add(r)), sc(e, r, o)), !1
				}
				throw Error(u(435, n.tag))
			}
			return sc(e, r, o), uc(), !1
		}
		if (je) return t = Zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, r !== rs && (e = Error(u(422), {
			cause: r
		}), pr(kt(e, n)))) : (r !== rs && (t = Error(u(423), {
			cause: r
		}), pr(kt(t, n))), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, r = kt(r, n), o = Ls(e.stateNode, r, o), ps(e, o), Ve !== 4 && (Ve = 2)), !1;
		var c = Error(u(520), {
			cause: r
		});
		if (c = kt(c, n), Br === null ? Br = [c] : Br.push(c), Ve !== 4 && (Ve = 2), t === null) return !0;
		r = kt(r, n), n = t;
		do {
			switch (n.tag) {
				case 3:
					return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Ls(n.stateNode, r, e), ps(n, e), !1;
				case 1:
					if (t = n.type, c = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (ia === null || !ia.has(c)))) return n.flags |= 65536, o &= -o, n.lanes |= o, o = im(o), um(o, e, n, r), ps(n, o), !1
			}
			n = n.return
		} while (n !== null);
		return !1
	}
	var om = Error(u(461)),
		lt = !1;

	function ut(e, t, n, r) {
		t.child = e === null ? Ph(t, null, n, r) : Sl(t, e.child, n, r)
	}

	function sm(e, t, n, r, o) {
		n = n.render;
		var c = t.ref;
		if ("ref" in r) {
			var v = {};
			for (var b in r) b !== "ref" && (v[b] = r[b])
		} else v = r;
		return Da(t), r = xs(e, t, n, v, c, o), b = Es(), e !== null && !lt ? (Ss(e, t, o), jn(e, t, o)) : (je && b && as(t), t.flags |= 1, ut(e, t, r, o), t.child)
	}

	function cm(e, t, n, r, o) {
		if (e === null) {
			var c = n.type;
			return typeof c == "function" && !es(c) && c.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = c, fm(e, t, c, r, o)) : (e = $i(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
		}
		if (c = e.child, !Vs(e, o)) {
			var v = c.memoizedProps;
			if (n = n.compare, n = n !== null ? n : fr, n(v, r) && e.ref === t.ref) return jn(e, t, o)
		}
		return t.flags |= 1, e = Rn(c, r), e.ref = t.ref, e.return = t, t.child = e
	}

	function fm(e, t, n, r, o) {
		if (e !== null) {
			var c = e.memoizedProps;
			if (fr(c, r) && e.ref === t.ref)
				if (lt = !1, t.pendingProps = r = c, Vs(e, o))(e.flags & 131072) !== 0 && (lt = !0);
				else return t.lanes = e.lanes, jn(e, t, o)
		}
		return Hs(e, t, n, r, o)
	}

	function dm(e, t, n) {
		var r = t.pendingProps,
			o = r.children,
			c = e !== null ? e.memoizedState : null;
		if (r.mode === "hidden") {
			if ((t.flags & 128) !== 0) {
				if (r = c !== null ? c.baseLanes | n : n, e !== null) {
					for (o = t.child = e.child, c = 0; o !== null;) c = c | o.lanes | o.childLanes, o = o.sibling;
					t.childLanes = c & ~r
				} else t.childLanes = 0, t.child = null;
				return hm(e, t, r, n)
			}
			if ((n & 536870912) !== 0) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Vi(t, c !== null ? c.cachePool : null), c !== null ? fh(t, c) : ys(), Ih(t);
			else return t.lanes = t.childLanes = 536870912, hm(e, t, c !== null ? c.baseLanes | n : n, n)
		} else c !== null ? (Vi(t, c.cachePool), fh(t, c), ea(), t.memoizedState = null) : (e !== null && Vi(t, null), ys(), ea());
		return ut(e, t, o, n), t.child
	}

	function hm(e, t, n, r) {
		var o = fs();
		return o = o === null ? null : {
			parent: et._currentValue,
			pool: o
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: o
		}, e !== null && Vi(t, null), ys(), Ih(t), e !== null && vr(e, t, r, !0), null
	}

	function ou(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(u(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816)
		}
	}

	function Hs(e, t, n, r, o) {
		return Da(t), n = xs(e, t, n, r, void 0, o), r = Es(), e !== null && !lt ? (Ss(e, t, o), jn(e, t, o)) : (je && r && as(t), t.flags |= 1, ut(e, t, n, o), t.child)
	}

	function mm(e, t, n, r, o, c) {
		return Da(t), t.updateQueue = null, n = hh(t, r, n, o), dh(e), r = Es(), e !== null && !lt ? (Ss(e, t, c), jn(e, t, c)) : (je && r && as(t), t.flags |= 1, ut(e, t, n, c), t.child)
	}

	function pm(e, t, n, r, o) {
		if (Da(t), t.stateNode === null) {
			var c = dl,
				v = n.contextType;
			typeof v == "object" && v !== null && (c = dt(v)), c = new n(r, c), t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, c.updater = Bs, t.stateNode = c, c._reactInternals = t, c = t.stateNode, c.props = r, c.state = t.memoizedState, c.refs = {}, hs(t), v = n.contextType, c.context = typeof v == "object" && v !== null ? dt(v) : dl, c.state = t.memoizedState, v = n.getDerivedStateFromProps, typeof v == "function" && (zs(t, n, v, r), c.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (v = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), v !== c.state && Bs.enqueueReplaceState(c, c.state, null), Rr(t, r, c, o), Sr(), c.state = t.memoizedState), typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !0
		} else if (e === null) {
			c = t.stateNode;
			var b = t.memoizedProps,
				O = Ua(n, b);
			c.props = O;
			var U = c.context,
				G = n.contextType;
			v = dl, typeof G == "object" && G !== null && (v = dt(G));
			var V = n.getDerivedStateFromProps;
			G = typeof V == "function" || typeof c.getSnapshotBeforeUpdate == "function", b = t.pendingProps !== b, G || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (b || U !== v) && tm(t, c, r, v), Jn = !1;
			var z = t.memoizedState;
			c.state = z, Rr(t, r, c, o), Sr(), U = t.memoizedState, b || z !== U || Jn ? (typeof V == "function" && (zs(t, n, V, r), U = t.memoizedState), (O = Jn || em(t, n, O, r, z, U, v)) ? (G || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = U), c.props = r, c.state = U, c.context = v, r = O) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
		} else {
			c = t.stateNode, ms(e, t), v = t.memoizedProps, G = Ua(n, v), c.props = G, V = t.pendingProps, z = c.context, U = n.contextType, O = dl, typeof U == "object" && U !== null && (O = dt(U)), b = n.getDerivedStateFromProps, (U = typeof b == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v !== V || z !== O) && tm(t, c, r, O), Jn = !1, z = t.memoizedState, c.state = z, Rr(t, r, c, o), Sr();
			var L = t.memoizedState;
			v !== V || z !== L || Jn || e !== null && e.dependencies !== null && Xi(e.dependencies) ? (typeof b == "function" && (zs(t, n, b, r), L = t.memoizedState), (G = Jn || em(t, n, G, r, z, L, O) || e !== null && e.dependencies !== null && Xi(e.dependencies)) ? (U || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, L, O), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, L, O)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || v === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = L), c.props = r, c.state = L, c.context = O, r = G) : (typeof c.componentDidUpdate != "function" || v === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), r = !1)
		}
		return c = r, ou(e, t), r = (t.flags & 128) !== 0, c || r ? (c = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : c.render(), t.flags |= 1, e !== null && r ? (t.child = Sl(t, e.child, null, o), t.child = Sl(t, null, n, o)) : ut(e, t, n, o), t.memoizedState = c.state, e = t.child) : e = jn(e, t, o), e
	}

	function vm(e, t, n, r) {
		return mr(), t.flags |= 256, ut(e, t, n, r), t.child
	}
	var qs = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};

	function $s(e) {
		return {
			baseLanes: e,
			cachePool: ah()
		}
	}

	function Ys(e, t, n) {
		return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Jt), e
	}

	function ym(e, t, n) {
		var r = t.pendingProps,
			o = !1,
			c = (t.flags & 128) !== 0,
			v;
		if ((v = c) || (v = e !== null && e.memoizedState === null ? !1 : (tt.current & 2) !== 0), v && (o = !0, t.flags &= -129), v = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
			if (je) {
				if (o ? In(t) : ea(), je) {
					var b = ke,
						O;
					if (O = b) {
						e: {
							for (O = b, b = cn; O.nodeType !== 8;) {
								if (!b) {
									b = null;
									break e
								}
								if (O = nn(O.nextSibling), O === null) {
									b = null;
									break e
								}
							}
							b = O
						}
						b !== null ? (t.memoizedState = {
							dehydrated: b,
							treeContext: wa !== null ? {
								id: On,
								overflow: Tn
							} : null,
							retryLane: 536870912,
							hydrationErrors: null
						}, O = _t(18, null, null, 0), O.stateNode = b, O.return = t, t.child = O, vt = t, ke = null, O = !0) : O = !1
					}
					O || Aa(t)
				}
				if (b = t.memoizedState, b !== null && (b = b.dehydrated, b !== null)) return Oc(b) ? t.lanes = 32 : t.lanes = 536870912, null;
				An(t)
			}
			return b = r.children, r = r.fallback, o ? (ea(), o = t.mode, b = su({
				mode: "hidden",
				children: b
			}, o), r = Ta(r, o, n, null), b.return = t, r.return = t, b.sibling = r, t.child = b, o = t.child, o.memoizedState = $s(n), o.childLanes = Ys(e, v, n), t.memoizedState = qs, r) : (In(t), Gs(t, b))
		}
		if (O = e.memoizedState, O !== null && (b = O.dehydrated, b !== null)) {
			if (c) t.flags & 256 ? (In(t), t.flags &= -257, t = Xs(e, t, n)) : t.memoizedState !== null ? (ea(), t.child = e.child, t.flags |= 128, t = null) : (ea(), o = r.fallback, b = t.mode, r = su({
				mode: "visible",
				children: r.children
			}, b), o = Ta(o, b, n, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, Sl(t, e.child, null, n), r = t.child, r.memoizedState = $s(n), r.childLanes = Ys(e, v, n), t.memoizedState = qs, t = o);
			else if (In(t), Oc(b)) {
				if (v = b.nextSibling && b.nextSibling.dataset, v) var U = v.dgst;
				v = U, r = Error(u(419)), r.stack = "", r.digest = v, pr({
					value: r,
					source: null,
					stack: null
				}), t = Xs(e, t, n)
			} else if (lt || vr(e, t, n, !1), v = (n & e.childLanes) !== 0, lt || v) {
				if (v = Le, v !== null && (r = n & -n, r = (r & 42) !== 0 ? 1 : To(r), r = (r & (v.suspendedLanes | n)) !== 0 ? 0 : r, r !== 0 && r !== O.retryLane)) throw O.retryLane = r, fl(e, r), Ht(v, e, r), om;
				b.data === "$?" || uc(), t = Xs(e, t, n)
			} else b.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = O.treeContext, ke = nn(b.nextSibling), vt = t, je = !0, Na = null, cn = !1, e !== null && (Qt[Kt++] = On, Qt[Kt++] = Tn, Qt[Kt++] = wa, On = e.id, Tn = e.overflow, wa = t), t = Gs(t, r.children), t.flags |= 4096);
			return t
		}
		return o ? (ea(), o = r.fallback, b = t.mode, O = e.child, U = O.sibling, r = Rn(O, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = O.subtreeFlags & 65011712, U !== null ? o = Rn(U, o) : (o = Ta(o, b, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, b = e.child.memoizedState, b === null ? b = $s(n) : (O = b.cachePool, O !== null ? (U = et._currentValue, O = O.parent !== U ? {
			parent: U,
			pool: U
		} : O) : O = ah(), b = {
			baseLanes: b.baseLanes | n,
			cachePool: O
		}), o.memoizedState = b, o.childLanes = Ys(e, v, n), t.memoizedState = qs, r) : (In(t), n = e.child, e = n.sibling, n = Rn(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (v = t.deletions, v === null ? (t.deletions = [e], t.flags |= 16) : v.push(e)), t.child = n, t.memoizedState = null, n)
	}

	function Gs(e, t) {
		return t = su({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t
	}

	function su(e, t) {
		return e = _t(22, e, null, t), e.lanes = 0, e.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}, e
	}

	function Xs(e, t, n) {
		return Sl(t, e.child, null, n), e = Gs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
	}

	function gm(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), us(e.return, t, n)
	}

	function ks(e, t, n, r, o) {
		var c = e.memoizedState;
		c === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: o
		} : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = r, c.tail = n, c.tailMode = o)
	}

	function bm(e, t, n) {
		var r = t.pendingProps,
			o = r.revealOrder,
			c = r.tail;
		if (ut(e, t, r.children, n), r = tt.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
		else {
			if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && gm(e, n, t);
				else if (e.tag === 19) gm(e, n, t);
				else if (e.child !== null) {
					e.child.return = e, e = e.child;
					continue
				}
				if (e === t) break e;
				for (; e.sibling === null;) {
					if (e.return === null || e.return === t) break e;
					e = e.return
				}
				e.sibling.return = e.return, e = e.sibling
			}
			r &= 1
		}
		switch (J(tt, r), o) {
			case "forwards":
				for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && ru(e) === null && (o = n), n = n.sibling;
				n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ks(t, !1, o, n, c);
				break;
			case "backwards":
				for (n = null, o = t.child, t.child = null; o !== null;) {
					if (e = o.alternate, e !== null && ru(e) === null) {
						t.child = o;
						break
					}
					e = o.sibling, o.sibling = n, n = o, o = e
				}
				ks(t, !0, n, null, c);
				break;
			case "together":
				ks(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null
		}
		return t.child
	}

	function jn(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), ra |= t.lanes, (n & t.childLanes) === 0)
			if (e !== null) {
				if (vr(e, t, n, !1), (n & t.childLanes) === 0) return null
			} else return null;
		if (e !== null && t.child !== e.child) throw Error(u(153));
		if (t.child !== null) {
			for (e = t.child, n = Rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Rn(e, e.pendingProps), n.return = t;
			n.sibling = null
		}
		return t.child
	}

	function Vs(e, t) {
		return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Xi(e)))
	}

	function Ub(e, t, n) {
		switch (t.tag) {
			case 3:
				ye(t, t.stateNode.containerInfo), Zn(t, et, e.memoizedState.cache), mr();
				break;
			case 27:
			case 5:
				$t(t);
				break;
			case 4:
				ye(t, t.stateNode.containerInfo);
				break;
			case 10:
				Zn(t, t.type, t.memoizedProps.value);
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated !== null ? (In(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ym(e, t, n) : (In(t), e = jn(e, t, n), e !== null ? e.sibling : null);
				In(t);
				break;
			case 19:
				var o = (e.flags & 128) !== 0;
				if (r = (n & t.childLanes) !== 0, r || (vr(e, t, n, !1), r = (n & t.childLanes) !== 0), o) {
					if (r) return bm(e, t, n);
					t.flags |= 128
				}
				if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), J(tt, tt.current), r) break;
				return null;
			case 22:
			case 23:
				return t.lanes = 0, dm(e, t, n);
			case 24:
				Zn(t, et, e.memoizedState.cache)
		}
		return jn(e, t, n)
	}

	function xm(e, t, n) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps) lt = !0;
			else {
				if (!Vs(e, n) && (t.flags & 128) === 0) return lt = !1, Ub(e, t, n);
				lt = (e.flags & 131072) !== 0
			}
		else lt = !1, je && (t.flags & 1048576) !== 0 && Fd(t, Gi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				e: {
					e = t.pendingProps;
					var r = t.elementType,
						o = r._init;
					if (r = o(r._payload), t.type = r, typeof r == "function") es(r) ? (e = Ua(r, e), t.tag = 1, t = pm(null, t, r, e, n)) : (t.tag = 0, t = Hs(null, t, r, e, n));
					else {
						if (r != null) {
							if (o = r.$$typeof, o === Y) {
								t.tag = 11, t = sm(null, t, r, e, n);
								break e
							} else if (o === Z) {
								t.tag = 14, t = cm(null, t, r, e, n);
								break e
							}
						}
						throw t = we(r) || r, Error(u(306, t, ""))
					}
				}
				return t;
			case 0:
				return Hs(e, t, t.type, t.pendingProps, n);
			case 1:
				return r = t.type, o = Ua(r, t.pendingProps), pm(e, t, r, o, n);
			case 3:
				e: {
					if (ye(t, t.stateNode.containerInfo), e === null) throw Error(u(387));r = t.pendingProps;
					var c = t.memoizedState;o = c.element,
					ms(e, t),
					Rr(t, r, null, n);
					var v = t.memoizedState;
					if (r = v.cache, Zn(t, et, r), r !== c.cache && os(t, [et], n, !0), Sr(), r = v.element, c.isDehydrated)
						if (c = {
								element: r,
								isDehydrated: !1,
								cache: v.cache
							}, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
							t = vm(e, t, r, n);
							break e
						} else if (r !== o) {
						o = kt(Error(u(424)), t), pr(o), t = vm(e, t, r, n);
						break e
					} else {
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default:
								e = e.nodeName === "HTML" ? e.ownerDocument.body : e
						}
						for (ke = nn(e.firstChild), vt = t, je = !0, Na = null, cn = !0, n = Ph(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling
					} else {
						if (mr(), r === o) {
							t = jn(e, t, n);
							break e
						}
						ut(e, t, r, n)
					}
					t = t.child
				}
				return t;
			case 26:
				return ou(e, t), e === null ? (n = Op(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : je || (n = t.type, e = t.pendingProps, r = Ru(ee.current).createElement(n), r[ft] = t, r[bt] = e, st(r, n, e), at(r), t.stateNode = r) : t.memoizedState = Op(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27:
				return $t(t), e === null && je && (r = t.stateNode = Ep(t.type, t.pendingProps, ee.current), vt = t, cn = !0, o = ke, sa(t.type) ? (Tc = o, ke = nn(r.firstChild)) : ke = o), ut(e, t, t.pendingProps.children, n), ou(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5:
				return e === null && je && ((o = r = ke) && (r = o1(r, t.type, t.pendingProps, cn), r !== null ? (t.stateNode = r, vt = t, ke = nn(r.firstChild), cn = !1, o = !0) : o = !1), o || Aa(t)), $t(t), o = t.type, c = t.pendingProps, v = e !== null ? e.memoizedProps : null, r = c.children, Ec(o, c) ? r = null : v !== null && Ec(o, v) && (t.flags |= 32), t.memoizedState !== null && (o = xs(e, t, wb, null, null, n), Vr._currentValue = o), ou(e, t), ut(e, t, r, n), t.child;
			case 6:
				return e === null && je && ((e = n = ke) && (n = s1(n, t.pendingProps, cn), n !== null ? (t.stateNode = n, vt = t, ke = null, e = !0) : e = !1), e || Aa(t)), null;
			case 13:
				return ym(e, t, n);
			case 4:
				return ye(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Sl(t, null, r, n) : ut(e, t, r, n), t.child;
			case 11:
				return sm(e, t, t.type, t.pendingProps, n);
			case 7:
				return ut(e, t, t.pendingProps, n), t.child;
			case 8:
				return ut(e, t, t.pendingProps.children, n), t.child;
			case 12:
				return ut(e, t, t.pendingProps.children, n), t.child;
			case 10:
				return r = t.pendingProps, Zn(t, t.type, r.value), ut(e, t, r.children, n), t.child;
			case 9:
				return o = t.type._context, r = t.pendingProps.children, Da(t), o = dt(o), r = r(o), t.flags |= 1, ut(e, t, r, n), t.child;
			case 14:
				return cm(e, t, t.type, t.pendingProps, n);
			case 15:
				return fm(e, t, t.type, t.pendingProps, n);
			case 19:
				return bm(e, t, n);
			case 31:
				return r = t.pendingProps, n = t.mode, r = {
					mode: r.mode,
					children: r.children
				}, e === null ? (n = su(r, n), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = Rn(e.child, r), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
			case 22:
				return dm(e, t, n);
			case 24:
				return Da(t), r = dt(et), e === null ? (o = fs(), o === null && (o = Le, c = ss(), o.pooledCache = c, c.refCount++, c !== null && (o.pooledCacheLanes |= n), o = c), t.memoizedState = {
					parent: r,
					cache: o
				}, hs(t), Zn(t, et, o)) : ((e.lanes & n) !== 0 && (ms(e, t), Rr(t, null, null, n), Sr()), o = e.memoizedState, c = t.memoizedState, o.parent !== r ? (o = {
					parent: r,
					cache: r
				}, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Zn(t, et, r)) : (r = c.cache, Zn(t, et, r), r !== o.cache && os(t, [et], n, !0))), ut(e, t, t.pendingProps.children, n), t.child;
			case 29:
				throw t.pendingProps
		}
		throw Error(u(156, t.tag))
	}

	function Dn(e) {
		e.flags |= 4
	}

	function Em(e, t) {
		if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ap(t)) {
			if (t = Zt.current, t !== null && ((Te & 4194048) === Te ? fn !== null : (Te & 62914560) !== Te && (Te & 536870912) === 0 || t !== fn)) throw xr = ds, lh;
			e.flags |= 8192
		}
	}

	function cu(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Pf() : 536870912, e.lanes |= t, wl |= t)
	}

	function jr(e, t) {
		if (!je) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
		}
	}

	function qe(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			n = 0,
			r = 0;
		if (t)
			for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 65011712, r |= o.flags & 65011712, o.return = e, o = o.sibling;
		else
			for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t
	}

	function zb(e, t, n) {
		var r = t.pendingProps;
		switch (ls(t), t.tag) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return qe(t), null;
			case 1:
				return qe(t), null;
			case 3:
				return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Cn(et), We(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (hr(t) ? Dn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Id())), qe(t), null;
			case 26:
				return n = t.memoizedState, e === null ? (Dn(t), n !== null ? (qe(t), Em(t, n)) : (qe(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Dn(t), qe(t), Em(t, n)) : (qe(t), t.flags &= -16777217) : (e.memoizedProps !== r && Dn(t), qe(t), t.flags &= -16777217), null;
			case 27:
				Qe(t), n = ee.current;
				var o = t.type;
				if (e !== null && t.stateNode != null) e.memoizedProps !== r && Dn(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(u(166));
						return qe(t), null
					}
					e = P.current, hr(t) ? Wd(t) : (e = Ep(o, r, n), t.stateNode = e, Dn(t))
				}
				return qe(t), null;
			case 5:
				if (Qe(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Dn(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(u(166));
						return qe(t), null
					}
					if (e = P.current, hr(t)) Wd(t);
					else {
						switch (o = Ru(ee.current), e) {
							case 1:
								e = o.createElementNS("http://www.w3.org/2000/svg", n);
								break;
							case 2:
								e = o.createElementNS("http://www.w3.org/1998/Math/MathML", n);
								break;
							default:
								switch (n) {
									case "svg":
										e = o.createElementNS("http://www.w3.org/2000/svg", n);
										break;
									case "math":
										e = o.createElementNS("http://www.w3.org/1998/Math/MathML", n);
										break;
									case "script":
										e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
										break;
									case "select":
										e = typeof r.is == "string" ? o.createElement("select", {
											is: r.is
										}) : o.createElement("select"), r.multiple ? e.multiple = !0 : r.size && (e.size = r.size);
										break;
									default:
										e = typeof r.is == "string" ? o.createElement(n, {
											is: r.is
										}) : o.createElement(n)
								}
						}
						e[ft] = t, e[bt] = r;
						e: for (o = t.child; o !== null;) {
							if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
							else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
								o.child.return = o, o = o.child;
								continue
							}
							if (o === t) break e;
							for (; o.sibling === null;) {
								if (o.return === null || o.return === t) break e;
								o = o.return
							}
							o.sibling.return = o.return, o = o.sibling
						}
						t.stateNode = e;
						e: switch (st(e, n, r), n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								e = !!r.autoFocus;
								break e;
							case "img":
								e = !0;
								break e;
							default:
								e = !1
						}
						e && Dn(t)
					}
				}
				return qe(t), t.flags &= -16777217, null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && Dn(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
					if (e = ee.current, hr(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, o = vt, o !== null) switch (o.tag) {
							case 27:
							case 5:
								r = o.memoizedProps
						}
						e[ft] = t, e = !!(e.nodeValue === n || r !== null && r.suppressHydrationWarning === !0 || mp(e.nodeValue, n)), e || Aa(t)
					} else e = Ru(e).createTextNode(r), e[ft] = t, t.stateNode = e
				}
				return qe(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (o = hr(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!o) throw Error(u(318));
							if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
							o[ft] = t
						} else mr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
						qe(t), o = !1
					} else o = Id(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
					if (!o) return t.flags & 256 ? (An(t), t) : (An(t), null)
				}
				if (An(t), (t.flags & 128) !== 0) return t.lanes = n, t;
				if (n = r !== null, e = e !== null && e.memoizedState !== null, n) {
					r = t.child, o = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (o = r.alternate.memoizedState.cachePool.pool);
					var c = null;
					r.memoizedState !== null && r.memoizedState.cachePool !== null && (c = r.memoizedState.cachePool.pool), c !== o && (r.flags |= 2048)
				}
				return n !== e && n && (t.child.flags |= 8192), cu(t, t.updateQueue), qe(t), null;
			case 4:
				return We(), e === null && vc(t.stateNode.containerInfo), qe(t), null;
			case 10:
				return Cn(t.type), qe(t), null;
			case 19:
				if (W(tt), o = t.memoizedState, o === null) return qe(t), null;
				if (r = (t.flags & 128) !== 0, c = o.rendering, c === null)
					if (r) jr(o, !1);
					else {
						if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
							for (e = t.child; e !== null;) {
								if (c = ru(e), c !== null) {
									for (t.flags |= 128, jr(o, !1), e = c.updateQueue, t.updateQueue = e, cu(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Jd(n, e), n = n.sibling;
									return J(tt, tt.current & 1 | 2), t.child
								}
								e = e.sibling
							}
						o.tail !== null && Ie() > hu && (t.flags |= 128, r = !0, jr(o, !1), t.lanes = 4194304)
					}
				else {
					if (!r)
						if (e = ru(c), e !== null) {
							if (t.flags |= 128, r = !0, e = e.updateQueue, t.updateQueue = e, cu(t, e), jr(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !je) return qe(t), null
						} else 2 * Ie() - o.renderingStartTime > hu && n !== 536870912 && (t.flags |= 128, r = !0, jr(o, !1), t.lanes = 4194304);
					o.isBackwards ? (c.sibling = t.child, t.child = c) : (e = o.last, e !== null ? e.sibling = c : t.child = c, o.last = c)
				}
				return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Ie(), t.sibling = null, e = tt.current, J(tt, r ? e & 1 | 2 : e & 1), t) : (qe(t), null);
			case 22:
			case 23:
				return An(t), gs(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), n = t.updateQueue, n !== null && cu(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && W(Ma), null;
			case 24:
				return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Cn(et), qe(t), null;
			case 25:
				return null;
			case 30:
				return null
		}
		throw Error(u(156, t.tag))
	}

	function Bb(e, t) {
		switch (ls(t), t.tag) {
			case 1:
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3:
				return Cn(et), We(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5:
				return Qe(t), null;
			case 13:
				if (An(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(u(340));
					mr()
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19:
				return W(tt), null;
			case 4:
				return We(), null;
			case 10:
				return Cn(t.type), null;
			case 22:
			case 23:
				return An(t), gs(), e !== null && W(Ma), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24:
				return Cn(et), null;
			case 25:
				return null;
			default:
				return null
		}
	}

	function Sm(e, t) {
		switch (ls(t), t.tag) {
			case 3:
				Cn(et), We();
				break;
			case 26:
			case 27:
			case 5:
				Qe(t);
				break;
			case 4:
				We();
				break;
			case 13:
				An(t);
				break;
			case 19:
				W(tt);
				break;
			case 10:
				Cn(t.type);
				break;
			case 22:
			case 23:
				An(t), gs(), e !== null && W(Ma);
				break;
			case 24:
				Cn(et)
		}
	}

	function Dr(e, t) {
		try {
			var n = t.updateQueue,
				r = n !== null ? n.lastEffect : null;
			if (r !== null) {
				var o = r.next;
				n = o;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var c = n.create,
							v = n.inst;
						r = c(), v.destroy = r
					}
					n = n.next
				} while (n !== o)
			}
		} catch (b) {
			Be(t, t.return, b)
		}
	}

	function ta(e, t, n) {
		try {
			var r = t.updateQueue,
				o = r !== null ? r.lastEffect : null;
			if (o !== null) {
				var c = o.next;
				r = c;
				do {
					if ((r.tag & e) === e) {
						var v = r.inst,
							b = v.destroy;
						if (b !== void 0) {
							v.destroy = void 0, o = t;
							var O = n,
								U = b;
							try {
								U()
							} catch (G) {
								Be(o, O, G)
							}
						}
					}
					r = r.next
				} while (r !== c)
			}
		} catch (G) {
			Be(t, t.return, G)
		}
	}

	function Rm(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				ch(t, n)
			} catch (r) {
				Be(e, e.return, r)
			}
		}
	}

	function Om(e, t, n) {
		n.props = Ua(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount()
		} catch (r) {
			Be(e, t, r)
		}
	}

	function Mr(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default:
						r = e.stateNode
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r
			}
		} catch (o) {
			Be(e, t, o)
		}
	}

	function dn(e, t) {
		var n = e.ref,
			r = e.refCleanup;
		if (n !== null)
			if (typeof r == "function") try {
				r()
			} catch (o) {
				Be(e, t, o)
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
			} else if (typeof n == "function") try {
				n(null)
			} catch (o) {
				Be(e, t, o)
			} else n.current = null
	}

	function Tm(e) {
		var t = e.type,
			n = e.memoizedProps,
			r = e.stateNode;
		try {
			e: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break e;
				case "img":
					n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
			}
		}
		catch (o) {
			Be(e, e.return, o)
		}
	}

	function Qs(e, t, n) {
		try {
			var r = e.stateNode;
			a1(r, e.type, n, t), r[bt] = t
		} catch (o) {
			Be(e, e.return, o)
		}
	}

	function wm(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && sa(e.type) || e.tag === 4
	}

	function Ks(e) {
		e: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || wm(e.return)) return null;
				e = e.return
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && sa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
				e.child.return = e, e = e.child
			}
			if (!(e.flags & 2)) return e.stateNode
		}
	}

	function Zs(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Su));
		else if (r !== 4 && (r === 27 && sa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
			for (Zs(e, t, n), e = e.sibling; e !== null;) Zs(e, t, n), e = e.sibling
	}

	function fu(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && sa(e.type) && (n = e.stateNode), e = e.child, e !== null))
			for (fu(e, t, n), e = e.sibling; e !== null;) fu(e, t, n), e = e.sibling
	}

	function Cm(e) {
		var t = e.stateNode,
			n = e.memoizedProps;
		try {
			for (var r = e.type, o = t.attributes; o.length;) t.removeAttributeNode(o[0]);
			st(t, r, n), t[ft] = e, t[bt] = n
		} catch (c) {
			Be(e, e.return, c)
		}
	}
	var Mn = !1,
		Ze = !1,
		Js = !1,
		Nm = typeof WeakSet == "function" ? WeakSet : Set,
		rt = null;

	function Lb(e, t) {
		if (e = e.containerInfo, bc = Au, e = qd(e), Ko(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else e: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var o = r.anchorOffset,
						c = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, c.nodeType
					} catch {
						n = null;
						break e
					}
					var v = 0,
						b = -1,
						O = -1,
						U = 0,
						G = 0,
						V = e,
						z = null;
					t: for (;;) {
						for (var L; V !== n || o !== 0 && V.nodeType !== 3 || (b = v + o), V !== c || r !== 0 && V.nodeType !== 3 || (O = v + r), V.nodeType === 3 && (v += V.nodeValue.length), (L = V.firstChild) !== null;) z = V, V = L;
						for (;;) {
							if (V === e) break t;
							if (z === n && ++U === o && (b = v), z === c && ++G === r && (O = v), (L = V.nextSibling) !== null) break;
							V = z, z = V.parentNode
						}
						V = L
					}
					n = b === -1 || O === -1 ? null : {
						start: b,
						end: O
					}
				} else n = null
			}
			n = n || {
				start: 0,
				end: 0
			}
		} else n = null;
		for (xc = {
				focusedElem: e,
				selectionRange: n
			}, Au = !1, rt = t; rt !== null;)
			if (t = rt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, rt = e;
			else
				for (; rt !== null;) {
					switch (t = rt, c = t.alternate, e = t.flags, t.tag) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((e & 1024) !== 0 && c !== null) {
								e = void 0, n = t, o = c.memoizedProps, c = c.memoizedState, r = n.stateNode;
								try {
									var me = Ua(n.type, o, n.elementType === n.type);
									e = r.getSnapshotBeforeUpdate(me, c), r.__reactInternalSnapshotBeforeUpdate = e
								} catch (oe) {
									Be(n, n.return, oe)
								}
							}
							break;
						case 3:
							if ((e & 1024) !== 0) {
								if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) Rc(e);
								else if (n === 1) switch (e.nodeName) {
									case "HEAD":
									case "HTML":
									case "BODY":
										Rc(e);
										break;
									default:
										e.textContent = ""
								}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((e & 1024) !== 0) throw Error(u(163))
					}
					if (e = t.sibling, e !== null) {
						e.return = t.return, rt = e;
						break
					}
					rt = t.return
				}
	}

	function Am(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				na(e, n), r & 4 && Dr(5, n);
				break;
			case 1:
				if (na(e, n), r & 4)
					if (e = n.stateNode, t === null) try {
						e.componentDidMount()
					} catch (v) {
						Be(n, n.return, v)
					} else {
						var o = Ua(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(o, t, e.__reactInternalSnapshotBeforeUpdate)
						} catch (v) {
							Be(n, n.return, v)
						}
					}
				r & 64 && Rm(n), r & 512 && Mr(n, n.return);
				break;
			case 3:
				if (na(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1:
							t = n.child.stateNode
					}
					try {
						ch(e, t)
					} catch (v) {
						Be(n, n.return, v)
					}
				}
				break;
			case 27:
				t === null && r & 4 && Cm(n);
			case 26:
			case 5:
				na(e, n), t === null && r & 4 && Tm(n), r & 512 && Mr(n, n.return);
				break;
			case 12:
				na(e, n);
				break;
			case 13:
				na(e, n), r & 4 && Mm(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Qb.bind(null, n), c1(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || Mn, !r) {
					t = t !== null && t.memoizedState !== null || Ze, o = Mn;
					var c = Ze;
					Mn = r, (Ze = t) && !c ? aa(e, n, (n.subtreeFlags & 8772) !== 0) : na(e, n), Mn = o, Ze = c
				}
				break;
			case 30:
				break;
			default:
				na(e, n)
		}
	}

	function jm(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, jm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && No(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
	}
	var He = null,
		St = !1;

	function _n(e, t, n) {
		for (n = n.child; n !== null;) Dm(e, t, n), n = n.sibling
	}

	function Dm(e, t, n) {
		if (nt && typeof nt.onCommitFiberUnmount == "function") try {
			nt.onCommitFiberUnmount(sn, n)
		} catch {}
		switch (n.tag) {
			case 26:
				Ze || dn(n, t), _n(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				Ze || dn(n, t);
				var r = He,
					o = St;
				sa(n.type) && (He = n.stateNode, St = !1), _n(e, t, n), Yr(n.stateNode), He = r, St = o;
				break;
			case 5:
				Ze || dn(n, t);
			case 6:
				if (r = He, o = St, He = null, _n(e, t, n), He = r, St = o, He !== null)
					if (St) try {
						(He.nodeType === 9 ? He.body : He.nodeName === "HTML" ? He.ownerDocument.body : He).removeChild(n.stateNode)
					} catch (c) {
						Be(n, t, c)
					} else try {
						He.removeChild(n.stateNode)
					} catch (c) {
						Be(n, t, c)
					}
				break;
			case 18:
				He !== null && (St ? (e = He, bp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Jr(e)) : bp(He, n.stateNode));
				break;
			case 4:
				r = He, o = St, He = n.stateNode.containerInfo, St = !0, _n(e, t, n), He = r, St = o;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Ze || ta(2, n, t), Ze || ta(4, n, t), _n(e, t, n);
				break;
			case 1:
				Ze || (dn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Om(n, t, r)), _n(e, t, n);
				break;
			case 21:
				_n(e, t, n);
				break;
			case 22:
				Ze = (r = Ze) || n.memoizedState !== null, _n(e, t, n), Ze = r;
				break;
			default:
				_n(e, t, n)
		}
	}

	function Mm(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Jr(e)
		} catch (n) {
			Be(t, t.return, n)
		}
	}

	function Hb(e) {
		switch (e.tag) {
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new Nm), t;
			case 22:
				return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Nm), t;
			default:
				throw Error(u(435, e.tag))
		}
	}

	function Fs(e, t) {
		var n = Hb(e);
		t.forEach(function (r) {
			var o = Kb.bind(null, e, r);
			n.has(r) || (n.add(r), r.then(o, o))
		})
	}

	function Ut(e, t) {
		var n = t.deletions;
		if (n !== null)
			for (var r = 0; r < n.length; r++) {
				var o = n[r],
					c = e,
					v = t,
					b = v;
				e: for (; b !== null;) {
					switch (b.tag) {
						case 27:
							if (sa(b.type)) {
								He = b.stateNode, St = !1;
								break e
							}
							break;
						case 5:
							He = b.stateNode, St = !1;
							break e;
						case 3:
						case 4:
							He = b.stateNode.containerInfo, St = !0;
							break e
					}
					b = b.return
				}
				if (He === null) throw Error(u(160));
				Dm(c, v, o), He = null, St = !1, c = o.alternate, c !== null && (c.return = null), o.return = null
			}
		if (t.subtreeFlags & 13878)
			for (t = t.child; t !== null;) _m(t, e), t = t.sibling
	}
	var tn = null;

	function _m(e, t) {
		var n = e.alternate,
			r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				Ut(t, e), zt(e), r & 4 && (ta(3, e, e.return), Dr(3, e), ta(5, e, e.return));
				break;
			case 1:
				Ut(t, e), zt(e), r & 512 && (Ze || n === null || dn(n, n.return)), r & 64 && Mn && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var o = tn;
				if (Ut(t, e), zt(e), r & 512 && (Ze || n === null || dn(n, n.return)), r & 4) {
					var c = n !== null ? n.memoizedState : null;
					if (r = e.memoizedState, n === null)
						if (r === null)
							if (e.stateNode === null) {
								e: {
									r = e.type,
									n = e.memoizedProps,
									o = o.ownerDocument || o;t: switch (r) {
										case "title":
											c = o.getElementsByTagName("title")[0], (!c || c[nr] || c[ft] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(r), o.head.insertBefore(c, o.querySelector("head > title"))), st(c, r, n), c[ft] = e, at(c), r = c;
											break e;
										case "link":
											var v = Cp("link", "href", o).get(r + (n.href || ""));
											if (v) {
												for (var b = 0; b < v.length; b++)
													if (c = v[b], c.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && c.getAttribute("rel") === (n.rel == null ? null : n.rel) && c.getAttribute("title") === (n.title == null ? null : n.title) && c.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														v.splice(b, 1);
														break t
													}
											}
											c = o.createElement(r), st(c, r, n), o.head.appendChild(c);
											break;
										case "meta":
											if (v = Cp("meta", "content", o).get(r + (n.content || ""))) {
												for (b = 0; b < v.length; b++)
													if (c = v[b], c.getAttribute("content") === (n.content == null ? null : "" + n.content) && c.getAttribute("name") === (n.name == null ? null : n.name) && c.getAttribute("property") === (n.property == null ? null : n.property) && c.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && c.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														v.splice(b, 1);
														break t
													}
											}
											c = o.createElement(r), st(c, r, n), o.head.appendChild(c);
											break;
										default:
											throw Error(u(468, r))
									}
									c[ft] = e,
									at(c),
									r = c
								}
								e.stateNode = r
							}
					else Np(o, e.type, e.stateNode);
					else e.stateNode = wp(o, r, e.memoizedProps);
					else c !== r ? (c === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : c.count--, r === null ? Np(o, e.type, e.stateNode) : wp(o, r, e.memoizedProps)) : r === null && e.stateNode !== null && Qs(e, e.memoizedProps, n.memoizedProps)
				}
				break;
			case 27:
				Ut(t, e), zt(e), r & 512 && (Ze || n === null || dn(n, n.return)), n !== null && r & 4 && Qs(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (Ut(t, e), zt(e), r & 512 && (Ze || n === null || dn(n, n.return)), e.flags & 32) {
					o = e.stateNode;
					try {
						ll(o, "")
					} catch (L) {
						Be(e, e.return, L)
					}
				}
				r & 4 && e.stateNode != null && (o = e.memoizedProps, Qs(e, o, n !== null ? n.memoizedProps : o)), r & 1024 && (Js = !0);
				break;
			case 6:
				if (Ut(t, e), zt(e), r & 4) {
					if (e.stateNode === null) throw Error(u(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r
					} catch (L) {
						Be(e, e.return, L)
					}
				}
				break;
			case 3:
				if (wu = null, o = tn, tn = Ou(t.containerInfo), Ut(t, e), tn = o, zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Jr(t.containerInfo)
				} catch (L) {
					Be(e, e.return, L)
				}
				Js && (Js = !1, Um(e));
				break;
			case 4:
				r = tn, tn = Ou(e.stateNode.containerInfo), Ut(t, e), zt(e), tn = r;
				break;
			case 12:
				Ut(t, e), zt(e);
				break;
			case 13:
				Ut(t, e), zt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (nc = Ie()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Fs(e, r)));
				break;
			case 22:
				o = e.memoizedState !== null;
				var O = n !== null && n.memoizedState !== null,
					U = Mn,
					G = Ze;
				if (Mn = U || o, Ze = G || O, Ut(t, e), Ze = G, Mn = U, zt(e), r & 8192) e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || O || Mn || Ze || za(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							O = n = t;
							try {
								if (c = O.stateNode, o) v = c.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
								else {
									b = O.stateNode;
									var V = O.memoizedProps.style,
										z = V != null && V.hasOwnProperty("display") ? V.display : null;
									b.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim()
								}
							} catch (L) {
								Be(O, O.return, L)
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							O = t;
							try {
								O.stateNode.nodeValue = o ? "" : O.memoizedProps
							} catch (L) {
								Be(O, O.return, L)
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue
					}
					if (t === e) break e;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break e;
						n === t && (n = null), t = t.return
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, Fs(e, n))));
				break;
			case 19:
				Ut(t, e), zt(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, Fs(e, r)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				Ut(t, e), zt(e)
		}
	}

	function zt(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (wm(r)) {
						n = r;
						break
					}
					r = r.return
				}
				if (n == null) throw Error(u(160));
				switch (n.tag) {
					case 27:
						var o = n.stateNode,
							c = Ks(e);
						fu(e, c, o);
						break;
					case 5:
						var v = n.stateNode;
						n.flags & 32 && (ll(v, ""), n.flags &= -33);
						var b = Ks(e);
						fu(e, b, v);
						break;
					case 3:
					case 4:
						var O = n.stateNode.containerInfo,
							U = Ks(e);
						Zs(e, U, O);
						break;
					default:
						throw Error(u(161))
				}
			} catch (G) {
				Be(e, e.return, G)
			}
			e.flags &= -3
		}
		t & 4096 && (e.flags &= -4097)
	}

	function Um(e) {
		if (e.subtreeFlags & 1024)
			for (e = e.child; e !== null;) {
				var t = e;
				Um(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
			}
	}

	function na(e, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null;) Am(e, t.alternate, t), t = t.sibling
	}

	function za(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					ta(4, t, t.return), za(t);
					break;
				case 1:
					dn(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && Om(t, t.return, n), za(t);
					break;
				case 27:
					Yr(t.stateNode);
				case 26:
				case 5:
					dn(t, t.return), za(t);
					break;
				case 22:
					t.memoizedState === null && za(t);
					break;
				case 30:
					za(t);
					break;
				default:
					za(t)
			}
			e = e.sibling
		}
	}

	function aa(e, t, n) {
		for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
			var r = t.alternate,
				o = e,
				c = t,
				v = c.flags;
			switch (c.tag) {
				case 0:
				case 11:
				case 15:
					aa(o, c, n), Dr(4, c);
					break;
				case 1:
					if (aa(o, c, n), r = c, o = r.stateNode, typeof o.componentDidMount == "function") try {
						o.componentDidMount()
					} catch (U) {
						Be(r, r.return, U)
					}
					if (r = c, o = r.updateQueue, o !== null) {
						var b = r.stateNode;
						try {
							var O = o.shared.hiddenCallbacks;
							if (O !== null)
								for (o.shared.hiddenCallbacks = null, o = 0; o < O.length; o++) sh(O[o], b)
						} catch (U) {
							Be(r, r.return, U)
						}
					}
					n && v & 64 && Rm(c), Mr(c, c.return);
					break;
				case 27:
					Cm(c);
				case 26:
				case 5:
					aa(o, c, n), n && r === null && v & 4 && Tm(c), Mr(c, c.return);
					break;
				case 12:
					aa(o, c, n);
					break;
				case 13:
					aa(o, c, n), n && v & 4 && Mm(o, c);
					break;
				case 22:
					c.memoizedState === null && aa(o, c, n), Mr(c, c.return);
					break;
				case 30:
					break;
				default:
					aa(o, c, n)
			}
			t = t.sibling
		}
	}

	function Ws(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && yr(n))
	}

	function Ps(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && yr(e))
	}

	function hn(e, t, n, r) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null;) zm(e, t, n, r), t = t.sibling
	}

	function zm(e, t, n, r) {
		var o = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				hn(e, t, n, r), o & 2048 && Dr(9, t);
				break;
			case 1:
				hn(e, t, n, r);
				break;
			case 3:
				hn(e, t, n, r), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && yr(e)));
				break;
			case 12:
				if (o & 2048) {
					hn(e, t, n, r), e = t.stateNode;
					try {
						var c = t.memoizedProps,
							v = c.id,
							b = c.onPostCommit;
						typeof b == "function" && b(v, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
					} catch (O) {
						Be(t, t.return, O)
					}
				} else hn(e, t, n, r);
				break;
			case 13:
				hn(e, t, n, r);
				break;
			case 23:
				break;
			case 22:
				c = t.stateNode, v = t.alternate, t.memoizedState !== null ? c._visibility & 2 ? hn(e, t, n, r) : _r(e, t) : c._visibility & 2 ? hn(e, t, n, r) : (c._visibility |= 2, Rl(e, t, n, r, (t.subtreeFlags & 10256) !== 0)), o & 2048 && Ws(v, t);
				break;
			case 24:
				hn(e, t, n, r), o & 2048 && Ps(t.alternate, t);
				break;
			default:
				hn(e, t, n, r)
		}
	}

	function Rl(e, t, n, r, o) {
		for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
			var c = e,
				v = t,
				b = n,
				O = r,
				U = v.flags;
			switch (v.tag) {
				case 0:
				case 11:
				case 15:
					Rl(c, v, b, O, o), Dr(8, v);
					break;
				case 23:
					break;
				case 22:
					var G = v.stateNode;
					v.memoizedState !== null ? G._visibility & 2 ? Rl(c, v, b, O, o) : _r(c, v) : (G._visibility |= 2, Rl(c, v, b, O, o)), o && U & 2048 && Ws(v.alternate, v);
					break;
				case 24:
					Rl(c, v, b, O, o), o && U & 2048 && Ps(v.alternate, v);
					break;
				default:
					Rl(c, v, b, O, o)
			}
			t = t.sibling
		}
	}

	function _r(e, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null;) {
				var n = e,
					r = t,
					o = r.flags;
				switch (r.tag) {
					case 22:
						_r(n, r), o & 2048 && Ws(r.alternate, r);
						break;
					case 24:
						_r(n, r), o & 2048 && Ps(r.alternate, r);
						break;
					default:
						_r(n, r)
				}
				t = t.sibling
			}
	}
	var Ur = 8192;

	function Ol(e) {
		if (e.subtreeFlags & Ur)
			for (e = e.child; e !== null;) Bm(e), e = e.sibling
	}

	function Bm(e) {
		switch (e.tag) {
			case 26:
				Ol(e), e.flags & Ur && e.memoizedState !== null && R1(tn, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Ol(e);
				break;
			case 3:
			case 4:
				var t = tn;
				tn = Ou(e.stateNode.containerInfo), Ol(e), tn = t;
				break;
			case 22:
				e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ur, Ur = 16777216, Ol(e), Ur = t) : Ol(e));
				break;
			default:
				Ol(e)
		}
	}

	function Lm(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do t = e.sibling, e.sibling = null, e = t; while (e !== null)
		}
	}

	function zr(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					rt = r, qm(r, e)
				}
			Lm(e)
		}
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null;) Hm(e), e = e.sibling
	}

	function Hm(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				zr(e), e.flags & 2048 && ta(9, e, e.return);
				break;
			case 3:
				zr(e);
				break;
			case 12:
				zr(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, du(e)) : zr(e);
				break;
			default:
				zr(e)
		}
	}

	function du(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					rt = r, qm(r, e)
				}
			Lm(e)
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					ta(8, t, t.return), du(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, du(t));
					break;
				default:
					du(t)
			}
			e = e.sibling
		}
	}

	function qm(e, t) {
		for (; rt !== null;) {
			var n = rt;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					ta(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++
					}
					break;
				case 24:
					yr(n.memoizedState.cache)
			}
			if (r = n.child, r !== null) r.return = n, rt = r;
			else e: for (n = e; rt !== null;) {
				r = rt;
				var o = r.sibling,
					c = r.return;
				if (jm(r), r === n) {
					rt = null;
					break e
				}
				if (o !== null) {
					o.return = c, rt = o;
					break e
				}
				rt = c
			}
		}
	}
	var qb = {
			getCacheForType: function (e) {
				var t = dt(et),
					n = t.data.get(e);
				return n === void 0 && (n = e(), t.data.set(e, n)), n
			}
		},
		$b = typeof WeakMap == "function" ? WeakMap : Map,
		De = 0,
		Le = null,
		Re = null,
		Te = 0,
		Me = 0,
		Bt = null,
		la = !1,
		Tl = !1,
		Is = !1,
		Un = 0,
		Ve = 0,
		ra = 0,
		Ba = 0,
		ec = 0,
		Jt = 0,
		wl = 0,
		Br = null,
		Rt = null,
		tc = !1,
		nc = 0,
		hu = 1 / 0,
		mu = null,
		ia = null,
		ot = 0,
		ua = null,
		Cl = null,
		Nl = 0,
		ac = 0,
		lc = null,
		$m = null,
		Lr = 0,
		rc = null;

	function Lt() {
		if ((De & 2) !== 0 && Te !== 0) return Te & -Te;
		if (B.T !== null) {
			var e = pl;
			return e !== 0 ? e : dc()
		}
		return td()
	}

	function Ym() {
		Jt === 0 && (Jt = (Te & 536870912) === 0 || je ? Wf() : 536870912);
		var e = Zt.current;
		return e !== null && (e.flags |= 32), Jt
	}

	function Ht(e, t, n) {
		(e === Le && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null) && (Al(e, 0), oa(e, Te, Jt, !1)), tr(e, n), ((De & 2) === 0 || e !== Le) && (e === Le && ((De & 2) === 0 && (Ba |= n), Ve === 4 && oa(e, Te, Jt, !1)), mn(e))
	}

	function Gm(e, t, n) {
		if ((De & 6) !== 0) throw Error(u(327));
		var r = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || er(e, t),
			o = r ? Xb(e, t) : oc(e, t, !0),
			c = r;
		do {
			if (o === 0) {
				Tl && !r && oa(e, t, 0, !1);
				break
			} else {
				if (n = e.current.alternate, c && !Yb(n)) {
					o = oc(e, t, !1), c = !1;
					continue
				}
				if (o === 2) {
					if (c = t, e.errorRecoveryDisabledLanes & c) var v = 0;
					else v = e.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
					if (v !== 0) {
						t = v;
						e: {
							var b = e;o = Br;
							var O = b.current.memoizedState.isDehydrated;
							if (O && (Al(b, v).flags |= 256), v = oc(b, v, !1), v !== 2) {
								if (Is && !O) {
									b.errorRecoveryDisabledLanes |= c, Ba |= c, o = 4;
									break e
								}
								c = Rt, Rt = o, c !== null && (Rt === null ? Rt = c : Rt.push.apply(Rt, c))
							}
							o = v
						}
						if (c = !1, o !== 2) continue
					}
				}
				if (o === 1) {
					Al(e, 0), oa(e, t, 0, !0);
					break
				}
				e: {
					switch (r = e, c = o, c) {
						case 0:
						case 1:
							throw Error(u(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							oa(r, t, Jt, !la);
							break e;
						case 2:
							Rt = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(u(329))
					}
					if ((t & 62914560) === t && (o = nc + 300 - Ie(), 10 < o)) {
						if (oa(r, t, Jt, !la), Fa(r, 0, !0) !== 0) break e;
						r.timeoutHandle = yp(Xm.bind(null, r, n, Rt, mu, tc, t, Jt, Ba, wl, la, c, 2, -0, 0), o);
						break e
					}
					Xm(r, n, Rt, mu, tc, t, Jt, Ba, wl, la, c, 0, -0, 0)
				}
			}
			break
		} while (!0);
		mn(e)
	}

	function Xm(e, t, n, r, o, c, v, b, O, U, G, V, z, L) {
		if (e.timeoutHandle = -1, V = t.subtreeFlags, (V & 8192 || (V & 16785408) === 16785408) && (kr = {
				stylesheets: null,
				count: 0,
				unsuspend: S1
			}, Bm(t), V = O1(), V !== null)) {
			e.cancelPendingCommit = V(Fm.bind(null, e, t, c, n, r, o, v, b, O, G, 1, z, L)), oa(e, c, v, !U);
			return
		}
		Fm(e, t, c, n, r, o, v, b, O)
	}

	function Yb(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						c = o.getSnapshot;
					o = o.value;
					try {
						if (!Mt(c(), o)) return !1
					} catch {
						return !1
					}
				}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return
				}
				t.sibling.return = t.return, t = t.sibling
			}
		}
		return !0
	}

	function oa(e, t, n, r) {
		t &= ~ec, t &= ~Ba, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var o = t; 0 < o;) {
			var c = 31 - ct(o),
				v = 1 << c;
			r[c] = -1, o &= ~v
		}
		n !== 0 && If(e, n, t)
	}

	function pu() {
		return (De & 6) === 0 ? (Hr(0), !1) : !0
	}

	function ic() {
		if (Re !== null) {
			if (Me === 0) var e = Re.return;
			else e = Re, wn = ja = null, Rs(e), El = null, Nr = 0, e = Re;
			for (; e !== null;) Sm(e.alternate, e), e = e.return;
			Re = null
		}
	}

	function Al(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, r1(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), ic(), Le = e, Re = n = Rn(e.current, null), Te = t, Me = 0, Bt = null, la = !1, Tl = er(e, t), Is = !1, wl = Jt = ec = Ba = ra = Ve = 0, Rt = Br = null, tc = !1, (t & 8) !== 0 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0)
			for (e = e.entanglements, r &= t; 0 < r;) {
				var o = 31 - ct(r),
					c = 1 << o;
				t |= e[o], r &= ~c
			}
		return Un = t, Li(), n
	}

	function km(e, t) {
		Ee = null, B.H = nu, t === br || t === Qi ? (t = uh(), Me = 3) : t === lh ? (t = uh(), Me = 4) : Me = t === om ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Bt = t, Re === null && (Ve = 1, uu(e, kt(t, e.current)))
	}

	function Vm() {
		var e = B.H;
		return B.H = nu, e === null ? nu : e
	}

	function Qm() {
		var e = B.A;
		return B.A = qb, e
	}

	function uc() {
		Ve = 4, la || (Te & 4194048) !== Te && Zt.current !== null || (Tl = !0), (ra & 134217727) === 0 && (Ba & 134217727) === 0 || Le === null || oa(Le, Te, Jt, !1)
	}

	function oc(e, t, n) {
		var r = De;
		De |= 2;
		var o = Vm(),
			c = Qm();
		(Le !== e || Te !== t) && (mu = null, Al(e, t)), t = !1;
		var v = Ve;
		e: do try {
				if (Me !== 0 && Re !== null) {
					var b = Re,
						O = Bt;
					switch (Me) {
						case 8:
							ic(), v = 6;
							break e;
						case 3:
						case 2:
						case 9:
						case 6:
							Zt.current === null && (t = !0);
							var U = Me;
							if (Me = 0, Bt = null, jl(e, b, O, U), n && Tl) {
								v = 0;
								break e
							}
							break;
						default:
							U = Me, Me = 0, Bt = null, jl(e, b, O, U)
					}
				}
				Gb(), v = Ve;
				break
			} catch (G) {
				km(e, G)
			}
			while (!0);
			return t && e.shellSuspendCounter++, wn = ja = null, De = r, B.H = o, B.A = c, Re === null && (Le = null, Te = 0, Li()), v
	}

	function Gb() {
		for (; Re !== null;) Km(Re)
	}

	function Xb(e, t) {
		var n = De;
		De |= 2;
		var r = Vm(),
			o = Qm();
		Le !== e || Te !== t ? (mu = null, hu = Ie() + 500, Al(e, t)) : Tl = er(e, t);
		e: do try {
				if (Me !== 0 && Re !== null) {
					t = Re;
					var c = Bt;
					t: switch (Me) {
						case 1:
							Me = 0, Bt = null, jl(e, t, c, 1);
							break;
						case 2:
						case 9:
							if (rh(c)) {
								Me = 0, Bt = null, Zm(t);
								break
							}
							t = function () {
								Me !== 2 && Me !== 9 || Le !== e || (Me = 7), mn(e)
							}, c.then(t, t);
							break e;
						case 3:
							Me = 7;
							break e;
						case 4:
							Me = 5;
							break e;
						case 7:
							rh(c) ? (Me = 0, Bt = null, Zm(t)) : (Me = 0, Bt = null, jl(e, t, c, 7));
							break;
						case 5:
							var v = null;
							switch (Re.tag) {
								case 26:
									v = Re.memoizedState;
								case 5:
								case 27:
									var b = Re;
									if (!v || Ap(v)) {
										Me = 0, Bt = null;
										var O = b.sibling;
										if (O !== null) Re = O;
										else {
											var U = b.return;
											U !== null ? (Re = U, vu(U)) : Re = null
										}
										break t
									}
							}
							Me = 0, Bt = null, jl(e, t, c, 5);
							break;
						case 6:
							Me = 0, Bt = null, jl(e, t, c, 6);
							break;
						case 8:
							ic(), Ve = 6;
							break e;
						default:
							throw Error(u(462))
					}
				}
				kb();
				break
			} catch (G) {
				km(e, G)
			}
			while (!0);
			return wn = ja = null, B.H = r, B.A = o, De = n, Re !== null ? 0 : (Le = null, Te = 0, Li(), Ve)
	}

	function kb() {
		for (; Re !== null && !Ce();) Km(Re)
	}

	function Km(e) {
		var t = xm(e.alternate, e, Un);
		e.memoizedProps = e.pendingProps, t === null ? vu(e) : Re = t
	}

	function Zm(e) {
		var t = e,
			n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = mm(n, t, t.pendingProps, t.type, void 0, Te);
				break;
			case 11:
				t = mm(n, t, t.pendingProps, t.type.render, t.ref, Te);
				break;
			case 5:
				Rs(t);
			default:
				Sm(n, t), t = Re = Jd(t, Un), t = xm(n, t, Un)
		}
		e.memoizedProps = e.pendingProps, t === null ? vu(e) : Re = t
	}

	function jl(e, t, n, r) {
		wn = ja = null, Rs(t), El = null, Nr = 0;
		var o = t.return;
		try {
			if (_b(e, o, t, n, Te)) {
				Ve = 1, uu(e, kt(n, e.current)), Re = null;
				return
			}
		} catch (c) {
			if (o !== null) throw Re = o, c;
			Ve = 1, uu(e, kt(n, e.current)), Re = null;
			return
		}
		t.flags & 32768 ? (je || r === 1 ? e = !0 : Tl || (Te & 536870912) !== 0 ? e = !1 : (la = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Zt.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Jm(t, e)) : vu(t)
	}

	function vu(e) {
		var t = e;
		do {
			if ((t.flags & 32768) !== 0) {
				Jm(t, la);
				return
			}
			e = t.return;
			var n = zb(t.alternate, t, Un);
			if (n !== null) {
				Re = n;
				return
			}
			if (t = t.sibling, t !== null) {
				Re = t;
				return
			}
			Re = t = e
		} while (t !== null);
		Ve === 0 && (Ve = 5)
	}

	function Jm(e, t) {
		do {
			var n = Bb(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, Re = n;
				return
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				Re = e;
				return
			}
			Re = e = n
		} while (e !== null);
		Ve = 6, Re = null
	}

	function Fm(e, t, n, r, o, c, v, b, O) {
		e.cancelPendingCommit = null;
		do yu(); while (ot !== 0);
		if ((De & 6) !== 0) throw Error(u(327));
		if (t !== null) {
			if (t === e.current) throw Error(u(177));
			if (c = t.lanes | t.childLanes, c |= Po, S0(e, n, c, v, b, O), e === Le && (Re = Le = null, Te = 0), Cl = t, ua = e, Nl = n, ac = c, lc = o, $m = r, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Zb(It, function () {
					return tp(), null
				})) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
				r = B.T, B.T = null, o = K.p, K.p = 2, v = De, De |= 4;
				try {
					Lb(e, t, n)
				} finally {
					De = v, K.p = o, B.T = r
				}
			}
			ot = 1, Wm(), Pm(), Im()
		}
	}

	function Wm() {
		if (ot === 1) {
			ot = 0;
			var e = ua,
				t = Cl,
				n = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || n) {
				n = B.T, B.T = null;
				var r = K.p;
				K.p = 2;
				var o = De;
				De |= 4;
				try {
					_m(t, e);
					var c = xc,
						v = qd(e.containerInfo),
						b = c.focusedElem,
						O = c.selectionRange;
					if (v !== b && b && b.ownerDocument && Hd(b.ownerDocument.documentElement, b)) {
						if (O !== null && Ko(b)) {
							var U = O.start,
								G = O.end;
							if (G === void 0 && (G = U), "selectionStart" in b) b.selectionStart = U, b.selectionEnd = Math.min(G, b.value.length);
							else {
								var V = b.ownerDocument || document,
									z = V && V.defaultView || window;
								if (z.getSelection) {
									var L = z.getSelection(),
										me = b.textContent.length,
										oe = Math.min(O.start, me),
										ze = O.end === void 0 ? oe : Math.min(O.end, me);
									!L.extend && oe > ze && (v = ze, ze = oe, oe = v);
									var j = Ld(b, oe),
										N = Ld(b, ze);
									if (j && N && (L.rangeCount !== 1 || L.anchorNode !== j.node || L.anchorOffset !== j.offset || L.focusNode !== N.node || L.focusOffset !== N.offset)) {
										var M = V.createRange();
										M.setStart(j.node, j.offset), L.removeAllRanges(), oe > ze ? (L.addRange(M), L.extend(N.node, N.offset)) : (M.setEnd(N.node, N.offset), L.addRange(M))
									}
								}
							}
						}
						for (V = [], L = b; L = L.parentNode;) L.nodeType === 1 && V.push({
							element: L,
							left: L.scrollLeft,
							top: L.scrollTop
						});
						for (typeof b.focus == "function" && b.focus(), b = 0; b < V.length; b++) {
							var k = V[b];
							k.element.scrollLeft = k.left, k.element.scrollTop = k.top
						}
					}
					Au = !!bc, xc = bc = null
				} finally {
					De = o, K.p = r, B.T = n
				}
			}
			e.current = t, ot = 2
		}
	}

	function Pm() {
		if (ot === 2) {
			ot = 0;
			var e = ua,
				t = Cl,
				n = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || n) {
				n = B.T, B.T = null;
				var r = K.p;
				K.p = 2;
				var o = De;
				De |= 4;
				try {
					Am(e, t.alternate, t)
				} finally {
					De = o, K.p = r, B.T = n
				}
			}
			ot = 3
		}
	}

	function Im() {
		if (ot === 4 || ot === 3) {
			ot = 0, xn();
			var e = ua,
				t = Cl,
				n = Nl,
				r = $m;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ot = 5 : (ot = 0, Cl = ua = null, ep(e, e.pendingLanes));
			var o = e.pendingLanes;
			if (o === 0 && (ia = null), wo(n), t = t.stateNode, nt && typeof nt.onCommitFiberRoot == "function") try {
				nt.onCommitFiberRoot(sn, t, void 0, (t.current.flags & 128) === 128)
			} catch {}
			if (r !== null) {
				t = B.T, o = K.p, K.p = 2, B.T = null;
				try {
					for (var c = e.onRecoverableError, v = 0; v < r.length; v++) {
						var b = r[v];
						c(b.value, {
							componentStack: b.stack
						})
					}
				} finally {
					B.T = t, K.p = o
				}
			}(Nl & 3) !== 0 && yu(), mn(e), o = e.pendingLanes, (n & 4194090) !== 0 && (o & 42) !== 0 ? e === rc ? Lr++ : (Lr = 0, rc = e) : Lr = 0, Hr(0)
		}
	}

	function ep(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, yr(t)))
	}

	function yu(e) {
		return Wm(), Pm(), Im(), tp()
	}

	function tp() {
		if (ot !== 5) return !1;
		var e = ua,
			t = ac;
		ac = 0;
		var n = wo(Nl),
			r = B.T,
			o = K.p;
		try {
			K.p = 32 > n ? 32 : n, B.T = null, n = lc, lc = null;
			var c = ua,
				v = Nl;
			if (ot = 0, Cl = ua = null, Nl = 0, (De & 6) !== 0) throw Error(u(331));
			var b = De;
			if (De |= 4, Hm(c.current), zm(c, c.current, v, n), De = b, Hr(0, !1), nt && typeof nt.onPostCommitFiberRoot == "function") try {
				nt.onPostCommitFiberRoot(sn, c)
			} catch {}
			return !0
		} finally {
			K.p = o, B.T = r, ep(e, t)
		}
	}

	function np(e, t, n) {
		t = kt(n, t), t = Ls(e.stateNode, t, 2), e = Wn(e, t, 2), e !== null && (tr(e, 2), mn(e))
	}

	function Be(e, t, n) {
		if (e.tag === 3) np(e, e, n);
		else
			for (; t !== null;) {
				if (t.tag === 3) {
					np(t, e, n);
					break
				} else if (t.tag === 1) {
					var r = t.stateNode;
					if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ia === null || !ia.has(r))) {
						e = kt(n, e), n = im(2), r = Wn(t, n, 2), r !== null && (um(n, r, t, e), tr(r, 2), mn(r));
						break
					}
				}
				t = t.return
			}
	}

	function sc(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new $b;
			var o = new Set;
			r.set(t, o)
		} else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
		o.has(n) || (Is = !0, o.add(n), e = Vb.bind(null, e, t, n), t.then(e, e))
	}

	function Vb(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Le === e && (Te & n) === n && (Ve === 4 || Ve === 3 && (Te & 62914560) === Te && 300 > Ie() - nc ? (De & 2) === 0 && Al(e, 0) : ec |= n, wl === Te && (wl = 0)), mn(e)
	}

	function ap(e, t) {
		t === 0 && (t = Pf()), e = fl(e, t), e !== null && (tr(e, t), mn(e))
	}

	function Qb(e) {
		var t = e.memoizedState,
			n = 0;
		t !== null && (n = t.retryLane), ap(e, n)
	}

	function Kb(e, t) {
		var n = 0;
		switch (e.tag) {
			case 13:
				var r = e.stateNode,
					o = e.memoizedState;
				o !== null && (n = o.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default:
				throw Error(u(314))
		}
		r !== null && r.delete(t), ap(e, n)
	}

	function Zb(e, t) {
		return yt(e, t)
	}
	var gu = null,
		Dl = null,
		cc = !1,
		bu = !1,
		fc = !1,
		La = 0;

	function mn(e) {
		e !== Dl && e.next === null && (Dl === null ? gu = Dl = e : Dl = Dl.next = e), bu = !0, cc || (cc = !0, Fb())
	}

	function Hr(e, t) {
		if (!fc && bu) {
			fc = !0;
			do
				for (var n = !1, r = gu; r !== null;) {
					if (e !== 0) {
						var o = r.pendingLanes;
						if (o === 0) var c = 0;
						else {
							var v = r.suspendedLanes,
								b = r.pingedLanes;
							c = (1 << 31 - ct(42 | e) + 1) - 1, c &= o & ~(v & ~b), c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
						}
						c !== 0 && (n = !0, up(r, c))
					} else c = Te, c = Fa(r, r === Le ? c : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (c & 3) === 0 || er(r, c) || (n = !0, up(r, c));
					r = r.next
				}
			while (n);
			fc = !1
		}
	}

	function Jb() {
		lp()
	}

	function lp() {
		bu = cc = !1;
		var e = 0;
		La !== 0 && (l1() && (e = La), La = 0);
		for (var t = Ie(), n = null, r = gu; r !== null;) {
			var o = r.next,
				c = rp(r, t);
			c === 0 ? (r.next = null, n === null ? gu = o : n.next = o, o === null && (Dl = n)) : (n = r, (e !== 0 || (c & 3) !== 0) && (bu = !0)), r = o
		}
		Hr(e)
	}

	function rp(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, c = e.pendingLanes & -62914561; 0 < c;) {
			var v = 31 - ct(c),
				b = 1 << v,
				O = o[v];
			O === -1 ? ((b & n) === 0 || (b & r) !== 0) && (o[v] = E0(b, t)) : O <= t && (e.expiredLanes |= b), c &= ~b
		}
		if (t = Le, n = Te, n = Fa(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Me === 2 || Me === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && At(r), e.callbackNode = null, e.callbackPriority = 0;
		if ((n & 3) === 0 || er(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && At(r), wo(n)) {
				case 2:
				case 8:
					n = Yt;
					break;
				case 32:
					n = It;
					break;
				case 268435456:
					n = Vn;
					break;
				default:
					n = It
			}
			return r = ip.bind(null, e), n = yt(n, r), e.callbackPriority = t, e.callbackNode = n, t
		}
		return r !== null && r !== null && At(r), e.callbackPriority = 2, e.callbackNode = null, 2
	}

	function ip(e, t) {
		if (ot !== 0 && ot !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (yu() && e.callbackNode !== n) return null;
		var r = Te;
		return r = Fa(e, e === Le ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Gm(e, r, t), rp(e, Ie()), e.callbackNode != null && e.callbackNode === n ? ip.bind(null, e) : null)
	}

	function up(e, t) {
		if (yu()) return null;
		Gm(e, t, !0)
	}

	function Fb() {
		i1(function () {
			(De & 6) !== 0 ? yt(Za, Jb) : lp()
		})
	}

	function dc() {
		return La === 0 && (La = Wf()), La
	}

	function op(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ji("" + e)
	}

	function sp(e, t) {
		var n = t.ownerDocument.createElement("input");
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
	}

	function Wb(e, t, n, r, o) {
		if (t === "submit" && n && n.stateNode === o) {
			var c = op((o[bt] || null).action),
				v = r.submitter;
			v && (t = (t = v[bt] || null) ? op(t.formAction) : v.getAttribute("formAction"), t !== null && (c = t, v = null));
			var b = new Ui("action", "action", null, r, o);
			e.push({
				event: b,
				listeners: [{
					instance: null,
					listener: function () {
						if (r.defaultPrevented) {
							if (La !== 0) {
								var O = v ? sp(o, v) : new FormData(o);
								Ms(n, {
									pending: !0,
									data: O,
									method: o.method,
									action: c
								}, null, O)
							}
						} else typeof c == "function" && (b.preventDefault(), O = v ? sp(o, v) : new FormData(o), Ms(n, {
							pending: !0,
							data: O,
							method: o.method,
							action: c
						}, c, O))
					},
					currentTarget: o
				}]
			})
		}
	}
	for (var hc = 0; hc < Wo.length; hc++) {
		var mc = Wo[hc],
			Pb = mc.toLowerCase(),
			Ib = mc[0].toUpperCase() + mc.slice(1);
		en(Pb, "on" + Ib)
	}
	en(Gd, "onAnimationEnd"), en(Xd, "onAnimationIteration"), en(kd, "onAnimationStart"), en("dblclick", "onDoubleClick"), en("focusin", "onFocus"), en("focusout", "onBlur"), en(vb, "onTransitionRun"), en(yb, "onTransitionStart"), en(gb, "onTransitionCancel"), en(Vd, "onTransitionEnd"), tl("onMouseEnter", ["mouseout", "mouseover"]), tl("onMouseLeave", ["mouseout", "mouseover"]), tl("onPointerEnter", ["pointerout", "pointerover"]), tl("onPointerLeave", ["pointerout", "pointerover"]), Ea("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ea("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ea("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ea("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ea("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ea("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
		e1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qr));

	function cp(e, t) {
		t = (t & 4) !== 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n],
				o = r.event;
			r = r.listeners;
			e: {
				var c = void 0;
				if (t)
					for (var v = r.length - 1; 0 <= v; v--) {
						var b = r[v],
							O = b.instance,
							U = b.currentTarget;
						if (b = b.listener, O !== c && o.isPropagationStopped()) break e;
						c = b, o.currentTarget = U;
						try {
							c(o)
						} catch (G) {
							iu(G)
						}
						o.currentTarget = null, c = O
					} else
						for (v = 0; v < r.length; v++) {
							if (b = r[v], O = b.instance, U = b.currentTarget, b = b.listener, O !== c && o.isPropagationStopped()) break e;
							c = b, o.currentTarget = U;
							try {
								c(o)
							} catch (G) {
								iu(G)
							}
							o.currentTarget = null, c = O
						}
			}
		}
	}

	function Oe(e, t) {
		var n = t[Co];
		n === void 0 && (n = t[Co] = new Set);
		var r = e + "__bubble";
		n.has(r) || (fp(t, e, 2, !1), n.add(r))
	}

	function pc(e, t, n) {
		var r = 0;
		t && (r |= 4), fp(n, e, r, t)
	}
	var xu = "_reactListening" + Math.random().toString(36).slice(2);

	function vc(e) {
		if (!e[xu]) {
			e[xu] = !0, ad.forEach(function (n) {
				n !== "selectionchange" && (e1.has(n) || pc(n, !1, e), pc(n, !0, e))
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[xu] || (t[xu] = !0, pc("selectionchange", !1, t))
		}
	}

	function fp(e, t, n, r) {
		switch (zp(t)) {
			case 2:
				var o = C1;
				break;
			case 8:
				o = N1;
				break;
			default:
				o = jc
		}
		n = o.bind(null, t, n, e), o = void 0, !Ho || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
			capture: !0,
			passive: o
		}) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
			passive: o
		}) : e.addEventListener(t, n, !1)
	}

	function yc(e, t, n, r, o) {
		var c = r;
		if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (;;) {
			if (r === null) return;
			var v = r.tag;
			if (v === 3 || v === 4) {
				var b = r.stateNode.containerInfo;
				if (b === o) break;
				if (v === 4)
					for (v = r.return; v !== null;) {
						var O = v.tag;
						if ((O === 3 || O === 4) && v.stateNode.containerInfo === o) return;
						v = v.return
					}
				for (; b !== null;) {
					if (v = Pa(b), v === null) return;
					if (O = v.tag, O === 5 || O === 6 || O === 26 || O === 27) {
						r = c = v;
						continue e
					}
					b = b.parentNode
				}
			}
			r = r.return
		}
		gd(function () {
			var U = c,
				G = Bo(n),
				V = [];
			e: {
				var z = Qd.get(e);
				if (z !== void 0) {
					var L = Ui,
						me = e;
					switch (e) {
						case "keypress":
							if (Mi(n) === 0) break e;
						case "keydown":
						case "keyup":
							L = Z0;
							break;
						case "focusin":
							me = "focus", L = Go;
							break;
						case "focusout":
							me = "blur", L = Go;
							break;
						case "beforeblur":
						case "afterblur":
							L = Go;
							break;
						case "click":
							if (n.button === 2) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							L = Ed;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							L = B0;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							L = W0;
							break;
						case Gd:
						case Xd:
						case kd:
							L = q0;
							break;
						case Vd:
							L = I0;
							break;
						case "scroll":
						case "scrollend":
							L = U0;
							break;
						case "wheel":
							L = tb;
							break;
						case "copy":
						case "cut":
						case "paste":
							L = Y0;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							L = Rd;
							break;
						case "toggle":
						case "beforetoggle":
							L = ab
					}
					var oe = (t & 4) !== 0,
						ze = !oe && (e === "scroll" || e === "scrollend"),
						j = oe ? z !== null ? z + "Capture" : null : z;
					oe = [];
					for (var N = U, M; N !== null;) {
						var k = N;
						if (M = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || M === null || j === null || (k = lr(N, j), k != null && oe.push($r(N, k, M))), ze) break;
						N = N.return
					}
					0 < oe.length && (z = new L(z, me, null, n, G), V.push({
						event: z,
						listeners: oe
					}))
				}
			}
			if ((t & 7) === 0) {
				e: {
					if (z = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", z && n !== zo && (me = n.relatedTarget || n.fromElement) && (Pa(me) || me[Wa])) break e;
					if ((L || z) && (z = G.window === G ? G : (z = G.ownerDocument) ? z.defaultView || z.parentWindow : window, L ? (me = n.relatedTarget || n.toElement, L = U, me = me ? Pa(me) : null, me !== null && (ze = f(me), oe = me.tag, me !== ze || oe !== 5 && oe !== 27 && oe !== 6) && (me = null)) : (L = null, me = U), L !== me)) {
						if (oe = Ed, k = "onMouseLeave", j = "onMouseEnter", N = "mouse", (e === "pointerout" || e === "pointerover") && (oe = Rd, k = "onPointerLeave", j = "onPointerEnter", N = "pointer"), ze = L == null ? z : ar(L), M = me == null ? z : ar(me), z = new oe(k, N + "leave", L, n, G), z.target = ze, z.relatedTarget = M, k = null, Pa(G) === U && (oe = new oe(j, N + "enter", me, n, G), oe.target = M, oe.relatedTarget = ze, k = oe), ze = k, L && me) t: {
							for (oe = L, j = me, N = 0, M = oe; M; M = Ml(M)) N++;
							for (M = 0, k = j; k; k = Ml(k)) M++;
							for (; 0 < N - M;) oe = Ml(oe),
							N--;
							for (; 0 < M - N;) j = Ml(j),
							M--;
							for (; N--;) {
								if (oe === j || j !== null && oe === j.alternate) break t;
								oe = Ml(oe), j = Ml(j)
							}
							oe = null
						}
						else oe = null;
						L !== null && dp(V, z, L, oe, !1), me !== null && ze !== null && dp(V, ze, me, oe, !0)
					}
				}
				e: {
					if (z = U ? ar(U) : window, L = z.nodeName && z.nodeName.toLowerCase(), L === "select" || L === "input" && z.type === "file") var ne = Dd;
					else if (Ad(z))
						if (Md) ne = hb;
						else {
							ne = fb;
							var Se = cb
						}
					else L = z.nodeName,
					!L || L.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? U && Uo(U.elementType) && (ne = Dd) : ne = db;
					if (ne && (ne = ne(e, U))) {
						jd(V, ne, n, G);
						break e
					}
					Se && Se(e, z, U),
					e === "focusout" && U && z.type === "number" && U.memoizedProps.value != null && _o(z, "number", z.value)
				}
				switch (Se = U ? ar(U) : window, e) {
					case "focusin":
						(Ad(Se) || Se.contentEditable === "true") && (ol = Se, Zo = U, dr = null);
						break;
					case "focusout":
						dr = Zo = ol = null;
						break;
					case "mousedown":
						Jo = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Jo = !1, $d(V, n, G);
						break;
					case "selectionchange":
						if (pb) break;
					case "keydown":
					case "keyup":
						$d(V, n, G)
				}
				var re;
				if (ko) e: {
					switch (e) {
						case "compositionstart":
							var fe = "onCompositionStart";
							break e;
						case "compositionend":
							fe = "onCompositionEnd";
							break e;
						case "compositionupdate":
							fe = "onCompositionUpdate";
							break e
					}
					fe = void 0
				}
				else ul ? Cd(e, n) && (fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (fe = "onCompositionStart");fe && (Od && n.locale !== "ko" && (ul || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && ul && (re = bd()) : (Kn = G, qo = "value" in Kn ? Kn.value : Kn.textContent, ul = !0)), Se = Eu(U, fe), 0 < Se.length && (fe = new Sd(fe, e, null, n, G), V.push({
					event: fe,
					listeners: Se
				}), re ? fe.data = re : (re = Nd(n), re !== null && (fe.data = re)))),
				(re = rb ? ib(e, n) : ub(e, n)) && (fe = Eu(U, "onBeforeInput"), 0 < fe.length && (Se = new Sd("onBeforeInput", "beforeinput", null, n, G), V.push({
					event: Se,
					listeners: fe
				}), Se.data = re)),
				Wb(V, e, U, n, G)
			}
			cp(V, t)
		})
	}

	function $r(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		}
	}

	function Eu(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var o = e,
				c = o.stateNode;
			if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || c === null || (o = lr(e, n), o != null && r.unshift($r(e, o, c)), o = lr(e, t), o != null && r.push($r(e, o, c))), e.tag === 3) return r;
			e = e.return
		}
		return []
	}

	function Ml(e) {
		if (e === null) return null;
		do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
		return e || null
	}

	function dp(e, t, n, r, o) {
		for (var c = t._reactName, v = []; n !== null && n !== r;) {
			var b = n,
				O = b.alternate,
				U = b.stateNode;
			if (b = b.tag, O !== null && O === r) break;
			b !== 5 && b !== 26 && b !== 27 || U === null || (O = U, o ? (U = lr(n, c), U != null && v.unshift($r(n, U, O))) : o || (U = lr(n, c), U != null && v.push($r(n, U, O)))), n = n.return
		}
		v.length !== 0 && e.push({
			event: t,
			listeners: v
		})
	}
	var t1 = /\r\n?/g,
		n1 = /\u0000|\uFFFD/g;

	function hp(e) {
		return (typeof e == "string" ? e : "" + e).replace(t1, `
`).replace(n1, "")
	}

	function mp(e, t) {
		return t = hp(t), hp(e) === t
	}

	function Su() {}

	function Ue(e, t, n, r, o, c) {
		switch (n) {
			case "children":
				typeof r == "string" ? t === "body" || t === "textarea" && r === "" || ll(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && ll(e, "" + r);
				break;
			case "className":
				Ci(e, "class", r);
				break;
			case "tabIndex":
				Ci(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Ci(e, n, r);
				break;
			case "style":
				vd(e, r, c);
				break;
			case "data":
				if (t !== "object") {
					Ci(e, "data", r);
					break
				}
				case "src":
				case "href":
					if (r === "" && (t !== "a" || n !== "href")) {
						e.removeAttribute(n);
						break
					}
					if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
						e.removeAttribute(n);
						break
					}
					r = ji("" + r), e.setAttribute(n, r);
					break;
				case "action":
				case "formAction":
					if (typeof r == "function") {
						e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
						break
					} else typeof c == "function" && (n === "formAction" ? (t !== "input" && Ue(e, t, "name", o.name, o, null), Ue(e, t, "formEncType", o.formEncType, o, null), Ue(e, t, "formMethod", o.formMethod, o, null), Ue(e, t, "formTarget", o.formTarget, o, null)) : (Ue(e, t, "encType", o.encType, o, null), Ue(e, t, "method", o.method, o, null), Ue(e, t, "target", o.target, o, null)));
					if (r == null || typeof r == "symbol" || typeof r == "boolean") {
						e.removeAttribute(n);
						break
					}
					r = ji("" + r), e.setAttribute(n, r);
					break;
				case "onClick":
					r != null && (e.onclick = Su);
					break;
				case "onScroll":
					r != null && Oe("scroll", e);
					break;
				case "onScrollEnd":
					r != null && Oe("scrollend", e);
					break;
				case "dangerouslySetInnerHTML":
					if (r != null) {
						if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
						if (n = r.__html, n != null) {
							if (o.children != null) throw Error(u(60));
							e.innerHTML = n
						}
					}
					break;
				case "multiple":
					e.multiple = r && typeof r != "function" && typeof r != "symbol";
					break;
				case "muted":
					e.muted = r && typeof r != "function" && typeof r != "symbol";
					break;
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref":
					break;
				case "autoFocus":
					break;
				case "xlinkHref":
					if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
						e.removeAttribute("xlink:href");
						break
					}
					n = ji("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
					break;
				case "contentEditable":
				case "spellCheck":
				case "draggable":
				case "value":
				case "autoReverse":
				case "externalResourcesRequired":
				case "focusable":
				case "preserveAlpha":
					r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
					break;
				case "inert":
				case "allowFullScreen":
				case "async":
				case "autoPlay":
				case "controls":
				case "default":
				case "defer":
				case "disabled":
				case "disablePictureInPicture":
				case "disableRemotePlayback":
				case "formNoValidate":
				case "hidden":
				case "loop":
				case "noModule":
				case "noValidate":
				case "open":
				case "playsInline":
				case "readOnly":
				case "required":
				case "reversed":
				case "scoped":
				case "seamless":
				case "itemScope":
					r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
					break;
				case "capture":
				case "download":
					r === !0 ? e.setAttribute(n, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
					break;
				case "cols":
				case "rows":
				case "size":
				case "span":
					r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
					break;
				case "rowSpan":
				case "start":
					r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
					break;
				case "popover":
					Oe("beforetoggle", e), Oe("toggle", e), wi(e, "popover", r);
					break;
				case "xlinkActuate":
					En(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
					break;
				case "xlinkArcrole":
					En(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
					break;
				case "xlinkRole":
					En(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
					break;
				case "xlinkShow":
					En(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
					break;
				case "xlinkTitle":
					En(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
					break;
				case "xlinkType":
					En(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
					break;
				case "xmlBase":
					En(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
					break;
				case "xmlLang":
					En(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
					break;
				case "xmlSpace":
					En(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
					break;
				case "is":
					wi(e, "is", r);
					break;
				case "innerText":
				case "textContent":
					break;
				default:
					(!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = M0.get(n) || n, wi(e, n, r))
		}
	}

	function gc(e, t, n, r, o, c) {
		switch (n) {
			case "style":
				vd(e, r, c);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(u(61));
					if (n = r.__html, n != null) {
						if (o.children != null) throw Error(u(60));
						e.innerHTML = n
					}
				}
				break;
			case "children":
				typeof r == "string" ? ll(e, r) : (typeof r == "number" || typeof r == "bigint") && ll(e, "" + r);
				break;
			case "onScroll":
				r != null && Oe("scroll", e);
				break;
			case "onScrollEnd":
				r != null && Oe("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = Su);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!ld.hasOwnProperty(n)) e: {
					if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), c = e[bt] || null, c = c != null ? c[n] : null, typeof c == "function" && e.removeEventListener(t, c, o), typeof r == "function")) {
						typeof c != "function" && c !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, o);
						break e
					}
					n in e ? e[n] = r : r === !0 ? e.setAttribute(n, "") : wi(e, n, r)
				}
		}
	}

	function st(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img":
				Oe("error", e), Oe("load", e);
				var r = !1,
					o = !1,
					c;
				for (c in n)
					if (n.hasOwnProperty(c)) {
						var v = n[c];
						if (v != null) switch (c) {
							case "src":
								r = !0;
								break;
							case "srcSet":
								o = !0;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(u(137, t));
							default:
								Ue(e, t, c, v, n, null)
						}
					} o && Ue(e, t, "srcSet", n.srcSet, n, null), r && Ue(e, t, "src", n.src, n, null);
				return;
			case "input":
				Oe("invalid", e);
				var b = c = v = o = null,
					O = null,
					U = null;
				for (r in n)
					if (n.hasOwnProperty(r)) {
						var G = n[r];
						if (G != null) switch (r) {
							case "name":
								o = G;
								break;
							case "type":
								v = G;
								break;
							case "checked":
								O = G;
								break;
							case "defaultChecked":
								U = G;
								break;
							case "value":
								c = G;
								break;
							case "defaultValue":
								b = G;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (G != null) throw Error(u(137, t));
								break;
							default:
								Ue(e, t, r, G, n, null)
						}
					} dd(e, c, b, O, U, v, o, !1), Ni(e);
				return;
			case "select":
				Oe("invalid", e), r = v = c = null;
				for (o in n)
					if (n.hasOwnProperty(o) && (b = n[o], b != null)) switch (o) {
						case "value":
							c = b;
							break;
						case "defaultValue":
							v = b;
							break;
						case "multiple":
							r = b;
						default:
							Ue(e, t, o, b, n, null)
					}
				t = c, n = v, e.multiple = !!r, t != null ? al(e, !!r, t, !1) : n != null && al(e, !!r, n, !0);
				return;
			case "textarea":
				Oe("invalid", e), c = o = r = null;
				for (v in n)
					if (n.hasOwnProperty(v) && (b = n[v], b != null)) switch (v) {
						case "value":
							r = b;
							break;
						case "defaultValue":
							o = b;
							break;
						case "children":
							c = b;
							break;
						case "dangerouslySetInnerHTML":
							if (b != null) throw Error(u(91));
							break;
						default:
							Ue(e, t, v, b, n, null)
					}
				md(e, r, o, c), Ni(e);
				return;
			case "option":
				for (O in n)
					if (n.hasOwnProperty(O) && (r = n[O], r != null)) switch (O) {
						case "selected":
							e.selected = r && typeof r != "function" && typeof r != "symbol";
							break;
						default:
							Ue(e, t, O, r, n, null)
					}
				return;
			case "dialog":
				Oe("beforetoggle", e), Oe("toggle", e), Oe("cancel", e), Oe("close", e);
				break;
			case "iframe":
			case "object":
				Oe("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < qr.length; r++) Oe(qr[r], e);
				break;
			case "image":
				Oe("error", e), Oe("load", e);
				break;
			case "details":
				Oe("toggle", e);
				break;
			case "embed":
			case "source":
			case "link":
				Oe("error", e), Oe("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (U in n)
					if (n.hasOwnProperty(U) && (r = n[U], r != null)) switch (U) {
						case "children":
						case "dangerouslySetInnerHTML":
							throw Error(u(137, t));
						default:
							Ue(e, t, U, r, n, null)
					}
				return;
			default:
				if (Uo(t)) {
					for (G in n) n.hasOwnProperty(G) && (r = n[G], r !== void 0 && gc(e, t, G, r, n, void 0));
					return
				}
		}
		for (b in n) n.hasOwnProperty(b) && (r = n[b], r != null && Ue(e, t, b, r, n, null))
	}

	function a1(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input":
				var o = null,
					c = null,
					v = null,
					b = null,
					O = null,
					U = null,
					G = null;
				for (L in n) {
					var V = n[L];
					if (n.hasOwnProperty(L) && V != null) switch (L) {
						case "checked":
							break;
						case "value":
							break;
						case "defaultValue":
							O = V;
						default:
							r.hasOwnProperty(L) || Ue(e, t, L, null, r, V)
					}
				}
				for (var z in r) {
					var L = r[z];
					if (V = n[z], r.hasOwnProperty(z) && (L != null || V != null)) switch (z) {
						case "type":
							c = L;
							break;
						case "name":
							o = L;
							break;
						case "checked":
							U = L;
							break;
						case "defaultChecked":
							G = L;
							break;
						case "value":
							v = L;
							break;
						case "defaultValue":
							b = L;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (L != null) throw Error(u(137, t));
							break;
						default:
							L !== V && Ue(e, t, z, L, r, V)
					}
				}
				Mo(e, v, b, O, U, G, c, o);
				return;
			case "select":
				L = v = b = z = null;
				for (c in n)
					if (O = n[c], n.hasOwnProperty(c) && O != null) switch (c) {
						case "value":
							break;
						case "multiple":
							L = O;
						default:
							r.hasOwnProperty(c) || Ue(e, t, c, null, r, O)
					}
				for (o in r)
					if (c = r[o], O = n[o], r.hasOwnProperty(o) && (c != null || O != null)) switch (o) {
						case "value":
							z = c;
							break;
						case "defaultValue":
							b = c;
							break;
						case "multiple":
							v = c;
						default:
							c !== O && Ue(e, t, o, c, r, O)
					}
				t = b, n = v, r = L, z != null ? al(e, !!n, z, !1) : !!r != !!n && (t != null ? al(e, !!n, t, !0) : al(e, !!n, n ? [] : "", !1));
				return;
			case "textarea":
				L = z = null;
				for (b in n)
					if (o = n[b], n.hasOwnProperty(b) && o != null && !r.hasOwnProperty(b)) switch (b) {
						case "value":
							break;
						case "children":
							break;
						default:
							Ue(e, t, b, null, r, o)
					}
				for (v in r)
					if (o = r[v], c = n[v], r.hasOwnProperty(v) && (o != null || c != null)) switch (v) {
						case "value":
							z = o;
							break;
						case "defaultValue":
							L = o;
							break;
						case "children":
							break;
						case "dangerouslySetInnerHTML":
							if (o != null) throw Error(u(91));
							break;
						default:
							o !== c && Ue(e, t, v, o, r, c)
					}
				hd(e, z, L);
				return;
			case "option":
				for (var me in n)
					if (z = n[me], n.hasOwnProperty(me) && z != null && !r.hasOwnProperty(me)) switch (me) {
						case "selected":
							e.selected = !1;
							break;
						default:
							Ue(e, t, me, null, r, z)
					}
				for (O in r)
					if (z = r[O], L = n[O], r.hasOwnProperty(O) && z !== L && (z != null || L != null)) switch (O) {
						case "selected":
							e.selected = z && typeof z != "function" && typeof z != "symbol";
							break;
						default:
							Ue(e, t, O, z, r, L)
					}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var oe in n) z = n[oe], n.hasOwnProperty(oe) && z != null && !r.hasOwnProperty(oe) && Ue(e, t, oe, null, r, z);
				for (U in r)
					if (z = r[U], L = n[U], r.hasOwnProperty(U) && z !== L && (z != null || L != null)) switch (U) {
						case "children":
						case "dangerouslySetInnerHTML":
							if (z != null) throw Error(u(137, t));
							break;
						default:
							Ue(e, t, U, z, r, L)
					}
				return;
			default:
				if (Uo(t)) {
					for (var ze in n) z = n[ze], n.hasOwnProperty(ze) && z !== void 0 && !r.hasOwnProperty(ze) && gc(e, t, ze, void 0, r, z);
					for (G in r) z = r[G], L = n[G], !r.hasOwnProperty(G) || z === L || z === void 0 && L === void 0 || gc(e, t, G, z, r, L);
					return
				}
		}
		for (var j in n) z = n[j], n.hasOwnProperty(j) && z != null && !r.hasOwnProperty(j) && Ue(e, t, j, null, r, z);
		for (V in r) z = r[V], L = n[V], !r.hasOwnProperty(V) || z === L || z == null && L == null || Ue(e, t, V, z, r, L)
	}
	var bc = null,
		xc = null;

	function Ru(e) {
		return e.nodeType === 9 ? e : e.ownerDocument
	}

	function pp(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0
		}
	}

	function vp(e, t) {
		if (e === 0) switch (t) {
			case "svg":
				return 1;
			case "math":
				return 2;
			default:
				return 0
		}
		return e === 1 && t === "foreignObject" ? 0 : e
	}

	function Ec(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
	}
	var Sc = null;

	function l1() {
		var e = window.event;
		return e && e.type === "popstate" ? e === Sc ? !1 : (Sc = e, !0) : (Sc = null, !1)
	}
	var yp = typeof setTimeout == "function" ? setTimeout : void 0,
		r1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
		gp = typeof Promise == "function" ? Promise : void 0,
		i1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof gp < "u" ? function (e) {
			return gp.resolve(null).then(e).catch(u1)
		} : yp;

	function u1(e) {
		setTimeout(function () {
			throw e
		})
	}

	function sa(e) {
		return e === "head"
	}

	function bp(e, t) {
		var n = t,
			r = 0,
			o = 0;
		do {
			var c = n.nextSibling;
			if (e.removeChild(n), c && c.nodeType === 8)
				if (n = c.data, n === "/$") {
					if (0 < r && 8 > r) {
						n = r;
						var v = e.ownerDocument;
						if (n & 1 && Yr(v.documentElement), n & 2 && Yr(v.body), n & 4)
							for (n = v.head, Yr(n), v = n.firstChild; v;) {
								var b = v.nextSibling,
									O = v.nodeName;
								v[nr] || O === "SCRIPT" || O === "STYLE" || O === "LINK" && v.rel.toLowerCase() === "stylesheet" || n.removeChild(v), v = b
							}
					}
					if (o === 0) {
						e.removeChild(c), Jr(t);
						return
					}
					o--
				} else n === "$" || n === "$?" || n === "$!" ? o++ : r = n.charCodeAt(0) - 48;
			else r = 0;
			n = c
		} while (n);
		Jr(t)
	}

	function Rc(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					Rc(n), No(n);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (n.rel.toLowerCase() === "stylesheet") continue
			}
			e.removeChild(n)
		}
	}

	function o1(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var o = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
			} else if (r) {
				if (!e[nr]) switch (t) {
					case "meta":
						if (!e.hasAttribute("itemprop")) break;
						return e;
					case "link":
						if (c = e.getAttribute("rel"), c === "stylesheet" && e.hasAttribute("data-precedence")) break;
						if (c !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title)) break;
						return e;
					case "style":
						if (e.hasAttribute("data-precedence")) break;
						return e;
					case "script":
						if (c = e.getAttribute("src"), (c !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
						return e;
					default:
						return e
				}
			} else if (t === "input" && e.type === "hidden") {
				var c = o.name == null ? null : "" + o.name;
				if (o.type === "hidden" && e.getAttribute("name") === c) return e
			} else return e;
			if (e = nn(e.nextSibling), e === null) break
		}
		return null
	}

	function s1(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;)
			if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = nn(e.nextSibling), e === null)) return null;
		return e
	}

	function Oc(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
	}

	function c1(e, t) {
		var n = e.ownerDocument;
		if (e.data !== "$?" || n.readyState === "complete") t();
		else {
			var r = function () {
				t(), n.removeEventListener("DOMContentLoaded", r)
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r
		}
	}

	function nn(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
				if (t === "/$") return null
			}
		}
		return e
	}
	var Tc = null;

	function xp(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?") {
					if (t === 0) return e;
					t--
				} else n === "/$" && t++
			}
			e = e.previousSibling
		}
		return null
	}

	function Ep(e, t, n) {
		switch (t = Ru(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(u(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(u(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(u(454));
				return e;
			default:
				throw Error(u(451))
		}
	}

	function Yr(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		No(e)
	}
	var Ft = new Map,
		Sp = new Set;

	function Ou(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
	}
	var zn = K.d;
	K.d = {
		f: f1,
		r: d1,
		D: h1,
		C: m1,
		L: p1,
		m: v1,
		X: g1,
		S: y1,
		M: b1
	};

	function f1() {
		var e = zn.f(),
			t = pu();
		return e || t
	}

	function d1(e) {
		var t = Ia(e);
		t !== null && t.tag === 5 && t.type === "form" ? Gh(t) : zn.r(e)
	}
	var _l = typeof document > "u" ? null : document;

	function Rp(e, t, n) {
		var r = _l;
		if (r && typeof t == "string" && t) {
			var o = Xt(t);
			o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), Sp.has(o) || (Sp.add(o), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(o) === null && (t = r.createElement("link"), st(t, "link", e), at(t), r.head.appendChild(t)))
		}
	}

	function h1(e) {
		zn.D(e), Rp("dns-prefetch", e, null)
	}

	function m1(e, t) {
		zn.C(e, t), Rp("preconnect", e, t)
	}

	function p1(e, t, n) {
		zn.L(e, t, n);
		var r = _l;
		if (r && e && t) {
			var o = 'link[rel="preload"][as="' + Xt(t) + '"]';
			t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + Xt(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + Xt(n.imageSizes) + '"]')) : o += '[href="' + Xt(e) + '"]';
			var c = o;
			switch (t) {
				case "style":
					c = Ul(e);
					break;
				case "script":
					c = zl(e)
			}
			Ft.has(c) || (e = y({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), Ft.set(c, e), r.querySelector(o) !== null || t === "style" && r.querySelector(Gr(c)) || t === "script" && r.querySelector(Xr(c)) || (t = r.createElement("link"), st(t, "link", e), at(t), r.head.appendChild(t)))
		}
	}

	function v1(e, t) {
		zn.m(e, t);
		var n = _l;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script",
				o = 'link[rel="modulepreload"][as="' + Xt(r) + '"][href="' + Xt(e) + '"]',
				c = o;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					c = zl(e)
			}
			if (!Ft.has(c) && (e = y({
					rel: "modulepreload",
					href: e
				}, t), Ft.set(c, e), n.querySelector(o) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (n.querySelector(Xr(c))) return
				}
				r = n.createElement("link"), st(r, "link", e), at(r), n.head.appendChild(r)
			}
		}
	}

	function y1(e, t, n) {
		zn.S(e, t, n);
		var r = _l;
		if (r && e) {
			var o = el(r).hoistableStyles,
				c = Ul(e);
			t = t || "default";
			var v = o.get(c);
			if (!v) {
				var b = {
					loading: 0,
					preload: null
				};
				if (v = r.querySelector(Gr(c))) b.loading = 5;
				else {
					e = y({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = Ft.get(c)) && wc(e, n);
					var O = v = r.createElement("link");
					at(O), st(O, "link", e), O._p = new Promise(function (U, G) {
						O.onload = U, O.onerror = G
					}), O.addEventListener("load", function () {
						b.loading |= 1
					}), O.addEventListener("error", function () {
						b.loading |= 2
					}), b.loading |= 4, Tu(v, t, r)
				}
				v = {
					type: "stylesheet",
					instance: v,
					count: 1,
					state: b
				}, o.set(c, v)
			}
		}
	}

	function g1(e, t) {
		zn.X(e, t);
		var n = _l;
		if (n && e) {
			var r = el(n).hoistableScripts,
				o = zl(e),
				c = r.get(o);
			c || (c = n.querySelector(Xr(o)), c || (e = y({
				src: e,
				async: !0
			}, t), (t = Ft.get(o)) && Cc(e, t), c = n.createElement("script"), at(c), st(c, "link", e), n.head.appendChild(c)), c = {
				type: "script",
				instance: c,
				count: 1,
				state: null
			}, r.set(o, c))
		}
	}

	function b1(e, t) {
		zn.M(e, t);
		var n = _l;
		if (n && e) {
			var r = el(n).hoistableScripts,
				o = zl(e),
				c = r.get(o);
			c || (c = n.querySelector(Xr(o)), c || (e = y({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = Ft.get(o)) && Cc(e, t), c = n.createElement("script"), at(c), st(c, "link", e), n.head.appendChild(c)), c = {
				type: "script",
				instance: c,
				count: 1,
				state: null
			}, r.set(o, c))
		}
	}

	function Op(e, t, n, r) {
		var o = (o = ee.current) ? Ou(o) : null;
		if (!o) throw Error(u(446));
		switch (e) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Ul(n.href), n = el(o).hoistableStyles, r = n.get(t), r || (r = {
					type: "style",
					instance: null,
					count: 0,
					state: null
				}, n.set(t, r)), r) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Ul(n.href);
					var c = el(o).hoistableStyles,
						v = c.get(e);
					if (v || (o = o.ownerDocument || o, v = {
							type: "stylesheet",
							instance: null,
							count: 0,
							state: {
								loading: 0,
								preload: null
							}
						}, c.set(e, v), (c = o.querySelector(Gr(e))) && !c._p && (v.instance = c, v.state.loading = 5), Ft.has(e) || (n = {
							rel: "preload",
							as: "style",
							href: n.href,
							crossOrigin: n.crossOrigin,
							integrity: n.integrity,
							media: n.media,
							hrefLang: n.hrefLang,
							referrerPolicy: n.referrerPolicy
						}, Ft.set(e, n), c || x1(o, e, n, v.state))), t && r === null) throw Error(u(528, ""));
					return v
				}
				if (t && r !== null) throw Error(u(529, ""));
				return null;
			case "script":
				return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = zl(n), n = el(o).hoistableScripts, r = n.get(t), r || (r = {
					type: "script",
					instance: null,
					count: 0,
					state: null
				}, n.set(t, r)), r) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
			default:
				throw Error(u(444, e))
		}
	}

	function Ul(e) {
		return 'href="' + Xt(e) + '"'
	}

	function Gr(e) {
		return 'link[rel="stylesheet"][' + e + "]"
	}

	function Tp(e) {
		return y({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		})
	}

	function x1(e, t, n, r) {
		e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function () {
			return r.loading |= 1
		}), t.addEventListener("error", function () {
			return r.loading |= 2
		}), st(t, "link", n), at(t), e.head.appendChild(t))
	}

	function zl(e) {
		return '[src="' + Xt(e) + '"]'
	}

	function Xr(e) {
		return "script[async]" + e
	}

	function wp(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector('style[data-href~="' + Xt(n.href) + '"]');
				if (r) return t.instance = r, at(r), r;
				var o = y({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), at(r), st(r, "style", o), Tu(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				o = Ul(n.href);
				var c = e.querySelector(Gr(o));
				if (c) return t.state.loading |= 4, t.instance = c, at(c), c;
				r = Tp(n), (o = Ft.get(o)) && wc(r, o), c = (e.ownerDocument || e).createElement("link"), at(c);
				var v = c;
				return v._p = new Promise(function (b, O) {
					v.onload = b, v.onerror = O
				}), st(c, "link", r), t.state.loading |= 4, Tu(c, n.precedence, e), t.instance = c;
			case "script":
				return c = zl(n.src), (o = e.querySelector(Xr(c))) ? (t.instance = o, at(o), o) : (r = n, (o = Ft.get(c)) && (r = y({}, n), Cc(r, o)), e = e.ownerDocument || e, o = e.createElement("script"), at(o), st(o, "link", r), e.head.appendChild(o), t.instance = o);
			case "void":
				return null;
			default:
				throw Error(u(443, t.type))
		} else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, Tu(r, n.precedence, e));
		return t.instance
	}

	function Tu(e, t, n) {
		for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = r.length ? r[r.length - 1] : null, c = o, v = 0; v < r.length; v++) {
			var b = r[v];
			if (b.dataset.precedence === t) c = b;
			else if (c !== o) break
		}
		c ? c.parentNode.insertBefore(e, c.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild))
	}

	function wc(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
	}

	function Cc(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
	}
	var wu = null;

	function Cp(e, t, n) {
		if (wu === null) {
			var r = new Map,
				o = wu = new Map;
			o.set(n, r)
		} else o = wu, r = o.get(n), r || (r = new Map, o.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
			var c = n[o];
			if (!(c[nr] || c[ft] || e === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
				var v = c.getAttribute(t) || "";
				v = e + v;
				var b = r.get(v);
				b ? b.push(c) : r.set(v, [c])
			}
		}
		return r
	}

	function Np(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
	}

	function E1(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet":
						return e = t.disabled, typeof t.precedence == "string" && e == null;
					default:
						return !0
				}
				case "script":
					if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
		}
		return !1
	}

	function Ap(e) {
		return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
	}
	var kr = null;

	function S1() {}

	function R1(e, t, n) {
		if (kr === null) throw Error(u(475));
		var r = kr;
		if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
			if (t.instance === null) {
				var o = Ul(n.href),
					c = e.querySelector(Gr(o));
				if (c) {
					e = c._p, e !== null && typeof e == "object" && typeof e.then == "function" && (r.count++, r = Cu.bind(r), e.then(r, r)), t.state.loading |= 4, t.instance = c, at(c);
					return
				}
				c = e.ownerDocument || e, n = Tp(n), (o = Ft.get(o)) && wc(n, o), c = c.createElement("link"), at(c);
				var v = c;
				v._p = new Promise(function (b, O) {
					v.onload = b, v.onerror = O
				}), st(c, "link", n), t.instance = c
			}
			r.stylesheets === null && (r.stylesheets = new Map), r.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (r.count++, t = Cu.bind(r), e.addEventListener("load", t), e.addEventListener("error", t))
		}
	}

	function O1() {
		if (kr === null) throw Error(u(475));
		var e = kr;
		return e.stylesheets && e.count === 0 && Nc(e, e.stylesheets), 0 < e.count ? function (t) {
			var n = setTimeout(function () {
				if (e.stylesheets && Nc(e, e.stylesheets), e.unsuspend) {
					var r = e.unsuspend;
					e.unsuspend = null, r()
				}
			}, 6e4);
			return e.unsuspend = t,
				function () {
					e.unsuspend = null, clearTimeout(n)
				}
		} : null
	}

	function Cu() {
		if (this.count--, this.count === 0) {
			if (this.stylesheets) Nc(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e()
			}
		}
	}
	var Nu = null;

	function Nc(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Nu = new Map, t.forEach(T1, e), Nu = null, Cu.call(e))
	}

	function T1(e, t) {
		if (!(t.state.loading & 4)) {
			var n = Nu.get(e);
			if (n) var r = n.get(null);
			else {
				n = new Map, Nu.set(e, n);
				for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < o.length; c++) {
					var v = o[c];
					(v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (n.set(v.dataset.precedence, v), r = v)
				}
				r && n.set(null, r)
			}
			o = t.instance, v = o.getAttribute("data-precedence"), c = n.get(v) || r, c === r && n.set(null, o), n.set(v, o), this.count++, r = Cu.bind(this), o.addEventListener("load", r), o.addEventListener("error", r), c ? c.parentNode.insertBefore(o, c.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4
		}
	}
	var Vr = {
		$$typeof: _,
		Provider: null,
		Consumer: null,
		_currentValue: F,
		_currentValue2: F,
		_threadCount: 0
	};

	function w1(e, t, n, r, o, c, v, b) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Oo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Oo(0), this.hiddenUpdates = Oo(null), this.identifierPrefix = r, this.onUncaughtError = o, this.onCaughtError = c, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = new Map
	}

	function jp(e, t, n, r, o, c, v, b, O, U, G, V) {
		return e = new w1(e, t, n, v, b, O, U, V), t = 1, c === !0 && (t |= 24), c = _t(3, null, null, t), e.current = c, c.stateNode = e, t = ss(), t.refCount++, e.pooledCache = t, t.refCount++, c.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, hs(c), e
	}

	function Dp(e) {
		return e ? (e = dl, e) : dl
	}

	function Mp(e, t, n, r, o, c) {
		o = Dp(o), r.context === null ? r.context = o : r.pendingContext = o, r = Fn(t), r.payload = {
			element: n
		}, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = Wn(e, r, t), n !== null && (Ht(n, e, t), Er(n, e, t))
	}

	function _p(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t
		}
	}

	function Ac(e, t) {
		_p(e, t), (e = e.alternate) && _p(e, t)
	}

	function Up(e) {
		if (e.tag === 13) {
			var t = fl(e, 67108864);
			t !== null && Ht(t, e, 67108864), Ac(e, 67108864)
		}
	}
	var Au = !0;

	function C1(e, t, n, r) {
		var o = B.T;
		B.T = null;
		var c = K.p;
		try {
			K.p = 2, jc(e, t, n, r)
		} finally {
			K.p = c, B.T = o
		}
	}

	function N1(e, t, n, r) {
		var o = B.T;
		B.T = null;
		var c = K.p;
		try {
			K.p = 8, jc(e, t, n, r)
		} finally {
			K.p = c, B.T = o
		}
	}

	function jc(e, t, n, r) {
		if (Au) {
			var o = Dc(r);
			if (o === null) yc(e, t, r, ju, n), Bp(e, r);
			else if (j1(o, e, t, n, r)) r.stopPropagation();
			else if (Bp(e, r), t & 4 && -1 < A1.indexOf(e)) {
				for (; o !== null;) {
					var c = Ia(o);
					if (c !== null) switch (c.tag) {
						case 3:
							if (c = c.stateNode, c.current.memoizedState.isDehydrated) {
								var v = Dt(c.pendingLanes);
								if (v !== 0) {
									var b = c;
									for (b.pendingLanes |= 2, b.entangledLanes |= 2; v;) {
										var O = 1 << 31 - ct(v);
										b.entanglements[1] |= O, v &= ~O
									}
									mn(c), (De & 6) === 0 && (hu = Ie() + 500, Hr(0))
								}
							}
							break;
						case 13:
							b = fl(c, 2), b !== null && Ht(b, c, 2), pu(), Ac(c, 2)
					}
					if (c = Dc(r), c === null && yc(e, t, r, ju, n), c === o) break;
					o = c
				}
				o !== null && r.stopPropagation()
			} else yc(e, t, r, null, n)
		}
	}

	function Dc(e) {
		return e = Bo(e), Mc(e)
	}
	var ju = null;

	function Mc(e) {
		if (ju = null, e = Pa(e), e !== null) {
			var t = f(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = d(t), e !== null) return e;
					e = null
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null
				} else t !== e && (e = null)
			}
		}
		return ju = e, null
	}

	function zp(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (Pl()) {
					case Za:
						return 2;
					case Yt:
						return 8;
					case It:
					case Ja:
						return 32;
					case Vn:
						return 268435456;
					default:
						return 32
				}
				default:
					return 32
		}
	}
	var _c = !1,
		ca = null,
		fa = null,
		da = null,
		Qr = new Map,
		Kr = new Map,
		ha = [],
		A1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

	function Bp(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				ca = null;
				break;
			case "dragenter":
			case "dragleave":
				fa = null;
				break;
			case "mouseover":
			case "mouseout":
				da = null;
				break;
			case "pointerover":
			case "pointerout":
				Qr.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				Kr.delete(t.pointerId)
		}
	}

	function Zr(e, t, n, r, o, c) {
		return e === null || e.nativeEvent !== c ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: c,
			targetContainers: [o]
		}, t !== null && (t = Ia(t), t !== null && Up(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
	}

	function j1(e, t, n, r, o) {
		switch (t) {
			case "focusin":
				return ca = Zr(ca, e, t, n, r, o), !0;
			case "dragenter":
				return fa = Zr(fa, e, t, n, r, o), !0;
			case "mouseover":
				return da = Zr(da, e, t, n, r, o), !0;
			case "pointerover":
				var c = o.pointerId;
				return Qr.set(c, Zr(Qr.get(c) || null, e, t, n, r, o)), !0;
			case "gotpointercapture":
				return c = o.pointerId, Kr.set(c, Zr(Kr.get(c) || null, e, t, n, r, o)), !0
		}
		return !1
	}

	function Lp(e) {
		var t = Pa(e.target);
		if (t !== null) {
			var n = f(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = d(n), t !== null) {
						e.blockedOn = t, R0(e.priority, function () {
							if (n.tag === 13) {
								var r = Lt();
								r = To(r);
								var o = fl(n, r);
								o !== null && Ht(o, n, r), Ac(n, r)
							}
						});
						return
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return
				}
			}
		}
		e.blockedOn = null
	}

	function Du(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = Dc(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				zo = r, n.target.dispatchEvent(r), zo = null
			} else return t = Ia(n), t !== null && Up(t), e.blockedOn = n, !1;
			t.shift()
		}
		return !0
	}

	function Hp(e, t, n) {
		Du(e) && n.delete(t)
	}

	function D1() {
		_c = !1, ca !== null && Du(ca) && (ca = null), fa !== null && Du(fa) && (fa = null), da !== null && Du(da) && (da = null), Qr.forEach(Hp), Kr.forEach(Hp)
	}

	function Mu(e, t) {
		e.blockedOn === t && (e.blockedOn = null, _c || (_c = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, D1)))
	}
	var _u = null;

	function qp(e) {
		_u !== e && (_u = e, a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
			_u === e && (_u = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t],
					r = e[t + 1],
					o = e[t + 2];
				if (typeof r != "function") {
					if (Mc(r || n) === null) continue;
					break
				}
				var c = Ia(n);
				c !== null && (e.splice(t, 3), t -= 3, Ms(c, {
					pending: !0,
					data: o,
					method: n.method,
					action: r
				}, r, o))
			}
		}))
	}

	function Jr(e) {
		function t(O) {
			return Mu(O, e)
		}
		ca !== null && Mu(ca, e), fa !== null && Mu(fa, e), da !== null && Mu(da, e), Qr.forEach(t), Kr.forEach(t);
		for (var n = 0; n < ha.length; n++) {
			var r = ha[n];
			r.blockedOn === e && (r.blockedOn = null)
		}
		for (; 0 < ha.length && (n = ha[0], n.blockedOn === null);) Lp(n), n.blockedOn === null && ha.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
			for (r = 0; r < n.length; r += 3) {
				var o = n[r],
					c = n[r + 1],
					v = o[bt] || null;
				if (typeof c == "function") v || qp(n);
				else if (v) {
					var b = null;
					if (c && c.hasAttribute("formAction")) {
						if (o = c, v = c[bt] || null) b = v.formAction;
						else if (Mc(o) !== null) continue
					} else b = v.action;
					typeof b == "function" ? n[r + 1] = b : (n.splice(r, 3), r -= 3), qp(n)
				}
			}
	}

	function Uc(e) {
		this._internalRoot = e
	}
	Uu.prototype.render = Uc.prototype.render = function (e) {
		var t = this._internalRoot;
		if (t === null) throw Error(u(409));
		var n = t.current,
			r = Lt();
		Mp(n, r, e, t, null, null)
	}, Uu.prototype.unmount = Uc.prototype.unmount = function () {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			Mp(e.current, 2, null, e, null, null), pu(), t[Wa] = null
		}
	};

	function Uu(e) {
		this._internalRoot = e
	}
	Uu.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var t = td();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < ha.length && t !== 0 && t < ha[n].priority; n++);
			ha.splice(n, 0, e), n === 0 && Lp(e)
		}
	};
	var $p = l.version;
	if ($p !== "19.1.0") throw Error(u(527, $p, "19.1.0"));
	K.findDOMNode = function (e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
		return e = p(t), e = e !== null ? h(e) : null, e = e === null ? null : e.stateNode, e
	};
	var M1 = {
		bundleType: 0,
		version: "19.1.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: B,
		reconcilerVersion: "19.1.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!zu.isDisabled && zu.supportsFiber) try {
			sn = zu.inject(M1), nt = zu
		} catch {}
	}
	return Wr.createRoot = function (e, t) {
		if (!s(e)) throw Error(u(299));
		var n = !1,
			r = "",
			o = nm,
			c = am,
			v = lm,
			b = null;
		return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (v = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)), t = jp(e, 1, !1, null, null, n, r, o, c, v, b, null), e[Wa] = t.current, vc(e), new Uc(t)
	}, Wr.hydrateRoot = function (e, t, n) {
		if (!s(e)) throw Error(u(299));
		var r = !1,
			o = "",
			c = nm,
			v = am,
			b = lm,
			O = null,
			U = null;
		return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (v = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks), n.formState !== void 0 && (U = n.formState)), t = jp(e, 1, !0, t, n ?? null, r, o, c, v, b, O, U), t.context = Dp(null), n = t.current, r = Lt(), r = To(r), o = Fn(r), o.callback = null, Wn(n, o, r), n = r, t.current.lanes = n, tr(t, n), mn(t), e[Wa] = t.current, vc(e), new Uu(t)
	}, Wr.version = "19.1.0", Wr
}
var Fp;

function Y1() {
	if (Fp) return Lc.exports;
	Fp = 1;

	function a() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
		} catch (l) {
			console.error(l)
		}
	}
	return a(), Lc.exports = $1(), Lc.exports
}
var G1 = Y1(),
	Pr = {},
	Wp;

function X1() {
	if (Wp) return Pr;
	Wp = 1, Object.defineProperty(Pr, "__esModule", {
		value: !0
	}), Pr.parse = d, Pr.serialize = h;
	const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
		l = /^[\u0021-\u003A\u003C-\u007E]*$/,
		i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
		u = /^[\u0020-\u003A\u003D-\u007E]*$/,
		s = Object.prototype.toString,
		f = (() => {
			const S = function () {};
			return S.prototype = Object.create(null), S
		})();

	function d(S, C) {
		const R = new f,
			A = S.length;
		if (A < 2) return R;
		const w = (C == null ? void 0 : C.decode) || y;
		let D = 0;
		do {
			const $ = S.indexOf("=", D);
			if ($ === -1) break;
			const _ = S.indexOf(";", D),
				Y = _ === -1 ? A : _;
			if ($ > Y) {
				D = S.lastIndexOf(";", $ - 1) + 1;
				continue
			}
			const q = m(S, D, $),
				Q = p(S, $, q),
				Z = S.slice(q, Q);
			if (R[Z] === void 0) {
				let I = m(S, $ + 1, Y),
					te = p(S, Y, I);
				const se = w(S.slice(I, te));
				R[Z] = se
			}
			D = Y + 1
		} while (D < A);
		return R
	}

	function m(S, C, R) {
		do {
			const A = S.charCodeAt(C);
			if (A !== 32 && A !== 9) return C
		} while (++C < R);
		return R
	}

	function p(S, C, R) {
		for (; C > R;) {
			const A = S.charCodeAt(--C);
			if (A !== 32 && A !== 9) return C + 1
		}
		return R
	}

	function h(S, C, R) {
		const A = (R == null ? void 0 : R.encode) || encodeURIComponent;
		if (!a.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
		const w = A(C);
		if (!l.test(w)) throw new TypeError(`argument val is invalid: ${C}`);
		let D = S + "=" + w;
		if (!R) return D;
		if (R.maxAge !== void 0) {
			if (!Number.isInteger(R.maxAge)) throw new TypeError(`option maxAge is invalid: ${R.maxAge}`);
			D += "; Max-Age=" + R.maxAge
		}
		if (R.domain) {
			if (!i.test(R.domain)) throw new TypeError(`option domain is invalid: ${R.domain}`);
			D += "; Domain=" + R.domain
		}
		if (R.path) {
			if (!u.test(R.path)) throw new TypeError(`option path is invalid: ${R.path}`);
			D += "; Path=" + R.path
		}
		if (R.expires) {
			if (!E(R.expires) || !Number.isFinite(R.expires.valueOf())) throw new TypeError(`option expires is invalid: ${R.expires}`);
			D += "; Expires=" + R.expires.toUTCString()
		}
		if (R.httpOnly && (D += "; HttpOnly"), R.secure && (D += "; Secure"), R.partitioned && (D += "; Partitioned"), R.priority) switch (typeof R.priority == "string" ? R.priority.toLowerCase() : void 0) {
			case "low":
				D += "; Priority=Low";
				break;
			case "medium":
				D += "; Priority=Medium";
				break;
			case "high":
				D += "; Priority=High";
				break;
			default:
				throw new TypeError(`option priority is invalid: ${R.priority}`)
		}
		if (R.sameSite) switch (typeof R.sameSite == "string" ? R.sameSite.toLowerCase() : R.sameSite) {
			case !0:
			case "strict":
				D += "; SameSite=Strict";
				break;
			case "lax":
				D += "; SameSite=Lax";
				break;
			case "none":
				D += "; SameSite=None";
				break;
			default:
				throw new TypeError(`option sameSite is invalid: ${R.sameSite}`)
		}
		return D
	}

	function y(S) {
		if (S.indexOf("%") === -1) return S;
		try {
			return decodeURIComponent(S)
		} catch {
			return S
		}
	}

	function E(S) {
		return s.call(S) === "[object Date]"
	}
	return Pr
}
X1();
var Pp = "popstate";

function k1(a = {}) {
	function l(u, s) {
		let {
			pathname: f,
			search: d,
			hash: m
		} = u.location;
		return lf("", {
			pathname: f,
			search: d,
			hash: m
		}, s.state && s.state.usr || null, s.state && s.state.key || "default")
	}

	function i(u, s) {
		return typeof s == "string" ? s : ui(s)
	}
	return Q1(l, i, null, a)
}

function Ye(a, l) {
	if (a === !1 || a === null || typeof a > "u") throw new Error(l)
}

function gn(a, l) {
	if (!a) {
		typeof console < "u" && console.warn(l);
		try {
			throw new Error(l)
		} catch {}
	}
}

function V1() {
	return Math.random().toString(36).substring(2, 10)
}

function Ip(a, l) {
	return {
		usr: a.state,
		key: a.key,
		idx: l
	}
}

function lf(a, l, i = null, u) {
	return {
		pathname: typeof a == "string" ? a : a.pathname,
		search: "",
		hash: "",
		...typeof l == "string" ? Ql(l) : l,
		state: i,
		key: l && l.key || u || V1()
	}
}

function ui({
	pathname: a = "/",
	search: l = "",
	hash: i = ""
}) {
	return l && l !== "?" && (a += l.charAt(0) === "?" ? l : "?" + l), i && i !== "#" && (a += i.charAt(0) === "#" ? i : "#" + i), a
}

function Ql(a) {
	let l = {};
	if (a) {
		let i = a.indexOf("#");
		i >= 0 && (l.hash = a.substring(i), a = a.substring(0, i));
		let u = a.indexOf("?");
		u >= 0 && (l.search = a.substring(u), a = a.substring(0, u)), a && (l.pathname = a)
	}
	return l
}

function Q1(a, l, i, u = {}) {
	let {
		window: s = document.defaultView,
		v5Compat: f = !1
	} = u, d = s.history, m = "POP", p = null, h = y();
	h == null && (h = 0, d.replaceState({
		...d.state,
		idx: h
	}, ""));

	function y() {
		return (d.state || {
			idx: null
		}).idx
	}

	function E() {
		m = "POP";
		let w = y(),
			D = w == null ? null : w - h;
		h = w, p && p({
			action: m,
			location: A.location,
			delta: D
		})
	}

	function S(w, D) {
		m = "PUSH";
		let $ = lf(A.location, w, D);
		h = y() + 1;
		let _ = Ip($, h),
			Y = A.createHref($);
		try {
			d.pushState(_, "", Y)
		} catch (q) {
			if (q instanceof DOMException && q.name === "DataCloneError") throw q;
			s.location.assign(Y)
		}
		f && p && p({
			action: m,
			location: A.location,
			delta: 1
		})
	}

	function C(w, D) {
		m = "REPLACE";
		let $ = lf(A.location, w, D);
		h = y();
		let _ = Ip($, h),
			Y = A.createHref($);
		d.replaceState(_, "", Y), f && p && p({
			action: m,
			location: A.location,
			delta: 0
		})
	}

	function R(w) {
		return K1(w)
	}
	let A = {
		get action() {
			return m
		},
		get location() {
			return a(s, d)
		},
		listen(w) {
			if (p) throw new Error("A history only accepts one active listener");
			return s.addEventListener(Pp, E), p = w, () => {
				s.removeEventListener(Pp, E), p = null
			}
		},
		createHref(w) {
			return l(s, w)
		},
		createURL: R,
		encodeLocation(w) {
			let D = R(w);
			return {
				pathname: D.pathname,
				search: D.search,
				hash: D.hash
			}
		},
		push: S,
		replace: C,
		go(w) {
			return d.go(w)
		}
	};
	return A
}

function K1(a, l = !1) {
	let i = "http://localhost";
	typeof window < "u" && (i = window.location.origin !== "null" ? window.location.origin : window.location.href), Ye(i, "No window.location.(origin|href) available to create URL");
	let u = typeof a == "string" ? a : ui(a);
	return u = u.replace(/ $/, "%20"), !l && u.startsWith("//") && (u = i + u), new URL(u, i)
}

function Iv(a, l, i = "/") {
	return Z1(a, l, i, !1)
}

function Z1(a, l, i, u) {
	let s = typeof l == "string" ? Ql(l) : l,
		f = $n(s.pathname || "/", i);
	if (f == null) return null;
	let d = ey(a);
	J1(d);
	let m = null;
	for (let p = 0; m == null && p < d.length; ++p) {
		let h = ix(f);
		m = lx(d[p], h, u)
	}
	return m
}

function ey(a, l = [], i = [], u = "") {
	let s = (f, d, m) => {
		let p = {
			relativePath: m === void 0 ? f.path || "" : m,
			caseSensitive: f.caseSensitive === !0,
			childrenIndex: d,
			route: f
		};
		p.relativePath.startsWith("/") && (Ye(p.relativePath.startsWith(u), `Absolute route path "${p.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), p.relativePath = p.relativePath.slice(u.length));
		let h = Hn([u, p.relativePath]),
			y = i.concat(p);
		f.children && f.children.length > 0 && (Ye(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${h}".`), ey(f.children, l, y, h)), !(f.path == null && !f.index) && l.push({
			path: h,
			score: nx(h, f.index),
			routesMeta: y
		})
	};
	return a.forEach((f, d) => {
		var m;
		if (f.path === "" || !((m = f.path) != null && m.includes("?"))) s(f, d);
		else
			for (let p of ty(f.path)) s(f, d, p)
	}), l
}

function ty(a) {
	let l = a.split("/");
	if (l.length === 0) return [];
	let [i, ...u] = l, s = i.endsWith("?"), f = i.replace(/\?$/, "");
	if (u.length === 0) return s ? [f, ""] : [f];
	let d = ty(u.join("/")),
		m = [];
	return m.push(...d.map(p => p === "" ? f : [f, p].join("/"))), s && m.push(...d), m.map(p => a.startsWith("/") && p === "" ? "/" : p)
}

function J1(a) {
	a.sort((l, i) => l.score !== i.score ? i.score - l.score : ax(l.routesMeta.map(u => u.childrenIndex), i.routesMeta.map(u => u.childrenIndex)))
}
var F1 = /^:[\w-]+$/,
	W1 = 3,
	P1 = 2,
	I1 = 1,
	ex = 10,
	tx = -2,
	ev = a => a === "*";

function nx(a, l) {
	let i = a.split("/"),
		u = i.length;
	return i.some(ev) && (u += tx), l && (u += P1), i.filter(s => !ev(s)).reduce((s, f) => s + (F1.test(f) ? W1 : f === "" ? I1 : ex), u)
}

function ax(a, l) {
	return a.length === l.length && a.slice(0, -1).every((u, s) => u === l[s]) ? a[a.length - 1] - l[l.length - 1] : 0
}

function lx(a, l, i = !1) {
	let {
		routesMeta: u
	} = a, s = {}, f = "/", d = [];
	for (let m = 0; m < u.length; ++m) {
		let p = u[m],
			h = m === u.length - 1,
			y = f === "/" ? l : l.slice(f.length) || "/",
			E = Vu({
				path: p.relativePath,
				caseSensitive: p.caseSensitive,
				end: h
			}, y),
			S = p.route;
		if (!E && h && i && !u[u.length - 1].route.index && (E = Vu({
				path: p.relativePath,
				caseSensitive: p.caseSensitive,
				end: !1
			}, y)), !E) return null;
		Object.assign(s, E.params), d.push({
			params: s,
			pathname: Hn([f, E.pathname]),
			pathnameBase: cx(Hn([f, E.pathnameBase])),
			route: S
		}), E.pathnameBase !== "/" && (f = Hn([f, E.pathnameBase]))
	}
	return d
}

function Vu(a, l) {
	typeof a == "string" && (a = {
		path: a,
		caseSensitive: !1,
		end: !0
	});
	let [i, u] = rx(a.path, a.caseSensitive, a.end), s = l.match(i);
	if (!s) return null;
	let f = s[0],
		d = f.replace(/(.)\/+$/, "$1"),
		m = s.slice(1);
	return {
		params: u.reduce((h, {
			paramName: y,
			isOptional: E
		}, S) => {
			if (y === "*") {
				let R = m[S] || "";
				d = f.slice(0, f.length - R.length).replace(/(.)\/+$/, "$1")
			}
			const C = m[S];
			return E && !C ? h[y] = void 0 : h[y] = (C || "").replace(/%2F/g, "/"), h
		}, {}),
		pathname: f,
		pathnameBase: d,
		pattern: a
	}
}

function rx(a, l = !1, i = !0) {
	gn(a === "*" || !a.endsWith("*") || a.endsWith("/*"), `Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);
	let u = [],
		s = "^" + a.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, m, p) => (u.push({
			paramName: m,
			isOptional: p != null
		}), p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
	return a.endsWith("*") ? (u.push({
		paramName: "*"
	}), s += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? s += "\\/*$" : a !== "" && a !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, l ? void 0 : "i"), u]
}

function ix(a) {
	try {
		return a.split("/").map(l => decodeURIComponent(l).replace(/\//g, "%2F")).join("/")
	} catch (l) {
		return gn(!1, `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`), a
	}
}

function $n(a, l) {
	if (l === "/") return a;
	if (!a.toLowerCase().startsWith(l.toLowerCase())) return null;
	let i = l.endsWith("/") ? l.length - 1 : l.length,
		u = a.charAt(i);
	return u && u !== "/" ? null : a.slice(i) || "/"
}

function ux(a, l = "/") {
	let {
		pathname: i,
		search: u = "",
		hash: s = ""
	} = typeof a == "string" ? Ql(a) : a;
	return {
		pathname: i ? i.startsWith("/") ? i : ox(i, l) : l,
		search: fx(u),
		hash: dx(s)
	}
}

function ox(a, l) {
	let i = l.replace(/\/+$/, "").split("/");
	return a.split("/").forEach(s => {
		s === ".." ? i.length > 1 && i.pop() : s !== "." && i.push(s)
	}), i.length > 1 ? i.join("/") : "/"
}

function Yc(a, l, i, u) {
	return `Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function sx(a) {
	return a.filter((l, i) => i === 0 || l.route.path && l.route.path.length > 0)
}

function ny(a) {
	let l = sx(a);
	return l.map((i, u) => u === l.length - 1 ? i.pathname : i.pathnameBase)
}

function ay(a, l, i, u = !1) {
	let s;
	typeof a == "string" ? s = Ql(a) : (s = {
		...a
	}, Ye(!s.pathname || !s.pathname.includes("?"), Yc("?", "pathname", "search", s)), Ye(!s.pathname || !s.pathname.includes("#"), Yc("#", "pathname", "hash", s)), Ye(!s.search || !s.search.includes("#"), Yc("#", "search", "hash", s)));
	let f = a === "" || s.pathname === "",
		d = f ? "/" : s.pathname,
		m;
	if (d == null) m = i;
	else {
		let E = l.length - 1;
		if (!u && d.startsWith("..")) {
			let S = d.split("/");
			for (; S[0] === "..";) S.shift(), E -= 1;
			s.pathname = S.join("/")
		}
		m = E >= 0 ? l[E] : "/"
	}
	let p = ux(s, m),
		h = d && d !== "/" && d.endsWith("/"),
		y = (f || d === ".") && i.endsWith("/");
	return !p.pathname.endsWith("/") && (h || y) && (p.pathname += "/"), p
}
var Hn = a => a.join("/").replace(/\/\/+/g, "/"),
	cx = a => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
	fx = a => !a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a,
	dx = a => !a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a;

function hx(a) {
	return a != null && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.internal == "boolean" && "data" in a
}
var ly = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ly);
var mx = ["GET", ...ly];
new Set(mx);
var Kl = g.createContext(null);
Kl.displayName = "DataRouter";
var to = g.createContext(null);
to.displayName = "DataRouterState";
var ry = g.createContext({
	isTransitioning: !1
});
ry.displayName = "ViewTransition";
var px = g.createContext(new Map);
px.displayName = "Fetchers";
var vx = g.createContext(null);
vx.displayName = "Await";
var bn = g.createContext(null);
bn.displayName = "Navigation";
var pi = g.createContext(null);
pi.displayName = "Location";
var Xn = g.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
Xn.displayName = "Route";
var Sf = g.createContext(null);
Sf.displayName = "RouteError";

function yx(a, {
	relative: l
} = {}) {
	Ye(vi(), "useHref() may be used only in the context of a <Router> component.");
	let {
		basename: i,
		navigator: u
	} = g.useContext(bn), {
		hash: s,
		pathname: f,
		search: d
	} = yi(a, {
		relative: l
	}), m = f;
	return i !== "/" && (m = f === "/" ? i : Hn([i, f])), u.createHref({
		pathname: m,
		search: d,
		hash: s
	})
}

function vi() {
	return g.useContext(pi) != null
}

function ga() {
	return Ye(vi(), "useLocation() may be used only in the context of a <Router> component."), g.useContext(pi).location
}
var iy = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function uy(a) {
	g.useContext(bn).static || g.useLayoutEffect(a)
}

function no() {
	let {
		isDataRoute: a
	} = g.useContext(Xn);
	return a ? jx() : gx()
}

function gx() {
	Ye(vi(), "useNavigate() may be used only in the context of a <Router> component.");
	let a = g.useContext(Kl),
		{
			basename: l,
			navigator: i
		} = g.useContext(bn),
		{
			matches: u
		} = g.useContext(Xn),
		{
			pathname: s
		} = ga(),
		f = JSON.stringify(ny(u)),
		d = g.useRef(!1);
	return uy(() => {
		d.current = !0
	}), g.useCallback((p, h = {}) => {
		if (gn(d.current, iy), !d.current) return;
		if (typeof p == "number") {
			i.go(p);
			return
		}
		let y = ay(p, JSON.parse(f), s, h.relative === "path");
		a == null && l !== "/" && (y.pathname = y.pathname === "/" ? l : Hn([l, y.pathname])), (h.replace ? i.replace : i.push)(y, h.state, h)
	}, [l, i, f, s, a])
}
g.createContext(null);

function yi(a, {
	relative: l
} = {}) {
	let {
		matches: i
	} = g.useContext(Xn), {
		pathname: u
	} = ga(), s = JSON.stringify(ny(i));
	return g.useMemo(() => ay(a, JSON.parse(s), u, l === "path"), [a, s, u, l])
}

function bx(a, l) {
	return oy(a, l)
}

function oy(a, l, i, u) {
	var $;
	Ye(vi(), "useRoutes() may be used only in the context of a <Router> component.");
	let {
		navigator: s,
		static: f
	} = g.useContext(bn), {
		matches: d
	} = g.useContext(Xn), m = d[d.length - 1], p = m ? m.params : {}, h = m ? m.pathname : "/", y = m ? m.pathnameBase : "/", E = m && m.route; {
		let _ = E && E.path || "";
		sy(h, !E || _.endsWith("*") || _.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)
	}
	let S = ga(),
		C;
	if (l) {
		let _ = typeof l == "string" ? Ql(l) : l;
		Ye(y === "/" || (($ = _.pathname) == null ? void 0 : $.startsWith(y)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${_.pathname}" was given in the \`location\` prop.`), C = _
	} else C = S;
	let R = C.pathname || "/",
		A = R;
	if (y !== "/") {
		let _ = y.replace(/^\//, "").split("/");
		A = "/" + R.replace(/^\//, "").split("/").slice(_.length).join("/")
	}
	let w = !f && i && i.matches && i.matches.length > 0 ? i.matches : Iv(a, {
		pathname: A
	});
	gn(E || w != null, `No routes matched location "${C.pathname}${C.search}${C.hash}" `), gn(w == null || w[w.length - 1].route.element !== void 0 || w[w.length - 1].route.Component !== void 0 || w[w.length - 1].route.lazy !== void 0, `Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let D = Ox(w && w.map(_ => Object.assign({}, _, {
		params: Object.assign({}, p, _.params),
		pathname: Hn([y, s.encodeLocation ? s.encodeLocation(_.pathname).pathname : _.pathname]),
		pathnameBase: _.pathnameBase === "/" ? y : Hn([y, s.encodeLocation ? s.encodeLocation(_.pathnameBase).pathname : _.pathnameBase])
	})), d, i, u);
	return l && D ? g.createElement(pi.Provider, {
		value: {
			location: {
				pathname: "/",
				search: "",
				hash: "",
				state: null,
				key: "default",
				...C
			},
			navigationType: "POP"
		}
	}, D) : D
}

function xx() {
	let a = Ax(),
		l = hx(a) ? `${a.status} ${a.statusText}` : a instanceof Error ? a.message : JSON.stringify(a),
		i = a instanceof Error ? a.stack : null,
		u = "rgba(200,200,200, 0.5)",
		s = {
			padding: "0.5rem",
			backgroundColor: u
		},
		f = {
			padding: "2px 4px",
			backgroundColor: u
		},
		d = null;
	return console.error("Error handled by React Router default ErrorBoundary:", a), d = g.createElement(g.Fragment, null, g.createElement("p", null, "💿 Hey developer 👋"), g.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", g.createElement("code", {
		style: f
	}, "ErrorBoundary"), " or", " ", g.createElement("code", {
		style: f
	}, "errorElement"), " prop on your route.")), g.createElement(g.Fragment, null, g.createElement("h2", null, "Unexpected Application Error!"), g.createElement("h3", {
		style: {
			fontStyle: "italic"
		}
	}, l), i ? g.createElement("pre", {
		style: s
	}, i) : null, d)
}
var Ex = g.createElement(xx, null),
	Sx = class extends g.Component {
		constructor(a) {
			super(a), this.state = {
				location: a.location,
				revalidation: a.revalidation,
				error: a.error
			}
		}
		static getDerivedStateFromError(a) {
			return {
				error: a
			}
		}
		static getDerivedStateFromProps(a, l) {
			return l.location !== a.location || l.revalidation !== "idle" && a.revalidation === "idle" ? {
				error: a.error,
				location: a.location,
				revalidation: a.revalidation
			} : {
				error: a.error !== void 0 ? a.error : l.error,
				location: l.location,
				revalidation: a.revalidation || l.revalidation
			}
		}
		componentDidCatch(a, l) {
			console.error("React Router caught the following error during render", a, l)
		}
		render() {
			return this.state.error !== void 0 ? g.createElement(Xn.Provider, {
				value: this.props.routeContext
			}, g.createElement(Sf.Provider, {
				value: this.state.error,
				children: this.props.component
			})) : this.props.children
		}
	};

function Rx({
	routeContext: a,
	match: l,
	children: i
}) {
	let u = g.useContext(Kl);
	return u && u.static && u.staticContext && (l.route.errorElement || l.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = l.route.id), g.createElement(Xn.Provider, {
		value: a
	}, i)
}

function Ox(a, l = [], i = null, u = null) {
	if (a == null) {
		if (!i) return null;
		if (i.errors) a = i.matches;
		else if (l.length === 0 && !i.initialized && i.matches.length > 0) a = i.matches;
		else return null
	}
	let s = a,
		f = i == null ? void 0 : i.errors;
	if (f != null) {
		let p = s.findIndex(h => h.route.id && (f == null ? void 0 : f[h.route.id]) !== void 0);
		Ye(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), s = s.slice(0, Math.min(s.length, p + 1))
	}
	let d = !1,
		m = -1;
	if (i)
		for (let p = 0; p < s.length; p++) {
			let h = s[p];
			if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (m = p), h.route.id) {
				let {
					loaderData: y,
					errors: E
				} = i, S = h.route.loader && !y.hasOwnProperty(h.route.id) && (!E || E[h.route.id] === void 0);
				if (h.route.lazy || S) {
					d = !0, m >= 0 ? s = s.slice(0, m + 1) : s = [s[0]];
					break
				}
			}
		}
	return s.reduceRight((p, h, y) => {
		let E, S = !1,
			C = null,
			R = null;
		i && (E = f && h.route.id ? f[h.route.id] : void 0, C = h.route.errorElement || Ex, d && (m < 0 && y === 0 ? (sy("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), S = !0, R = null) : m === y && (S = !0, R = h.route.hydrateFallbackElement || null)));
		let A = l.concat(s.slice(0, y + 1)),
			w = () => {
				let D;
				return E ? D = C : S ? D = R : h.route.Component ? D = g.createElement(h.route.Component, null) : h.route.element ? D = h.route.element : D = p, g.createElement(Rx, {
					match: h,
					routeContext: {
						outlet: p,
						matches: A,
						isDataRoute: i != null
					},
					children: D
				})
			};
		return i && (h.route.ErrorBoundary || h.route.errorElement || y === 0) ? g.createElement(Sx, {
			location: i.location,
			revalidation: i.revalidation,
			component: C,
			error: E,
			children: w(),
			routeContext: {
				outlet: null,
				matches: A,
				isDataRoute: !0
			}
		}) : w()
	}, null)
}

function Rf(a) {
	return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Tx(a) {
	let l = g.useContext(Kl);
	return Ye(l, Rf(a)), l
}

function wx(a) {
	let l = g.useContext(to);
	return Ye(l, Rf(a)), l
}

function Cx(a) {
	let l = g.useContext(Xn);
	return Ye(l, Rf(a)), l
}

function Of(a) {
	let l = Cx(a),
		i = l.matches[l.matches.length - 1];
	return Ye(i.route.id, `${a} can only be used on routes that contain a unique "id"`), i.route.id
}

function Nx() {
	return Of("useRouteId")
}

function Ax() {
	var u;
	let a = g.useContext(Sf),
		l = wx("useRouteError"),
		i = Of("useRouteError");
	return a !== void 0 ? a : (u = l.errors) == null ? void 0 : u[i]
}

function jx() {
	let {
		router: a
	} = Tx("useNavigate"), l = Of("useNavigate"), i = g.useRef(!1);
	return uy(() => {
		i.current = !0
	}), g.useCallback(async (s, f = {}) => {
		gn(i.current, iy), i.current && (typeof s == "number" ? a.navigate(s) : await a.navigate(s, {
			fromRouteId: l,
			...f
		}))
	}, [a, l])
}
var tv = {};

function sy(a, l, i) {
	!l && !tv[a] && (tv[a] = !0, gn(!1, i))
}
g.memo(Dx);

function Dx({
	routes: a,
	future: l,
	state: i
}) {
	return oy(a, void 0, i, l)
}

function ql(a) {
	Ye(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function Mx({
	basename: a = "/",
	children: l = null,
	location: i,
	navigationType: u = "POP",
	navigator: s,
	static: f = !1
}) {
	Ye(!vi(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let d = a.replace(/^\/*/, "/"),
		m = g.useMemo(() => ({
			basename: d,
			navigator: s,
			static: f,
			future: {}
		}), [d, s, f]);
	typeof i == "string" && (i = Ql(i));
	let {
		pathname: p = "/",
		search: h = "",
		hash: y = "",
		state: E = null,
		key: S = "default"
	} = i, C = g.useMemo(() => {
		let R = $n(p, d);
		return R == null ? null : {
			location: {
				pathname: R,
				search: h,
				hash: y,
				state: E,
				key: S
			},
			navigationType: u
		}
	}, [d, p, h, y, E, S, u]);
	return gn(C != null, `<Router basename="${d}"> is not able to match the URL "${p}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`), C == null ? null : g.createElement(bn.Provider, {
		value: m
	}, g.createElement(pi.Provider, {
		children: l,
		value: C
	}))
}

function _x({
	children: a,
	location: l
}) {
	return bx(rf(a), l)
}

function rf(a, l = []) {
	let i = [];
	return g.Children.forEach(a, (u, s) => {
		if (!g.isValidElement(u)) return;
		let f = [...l, s];
		if (u.type === g.Fragment) {
			i.push.apply(i, rf(u.props.children, f));
			return
		}
		Ye(u.type === ql, `[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Ye(!u.props.index || !u.props.children, "An index route cannot have child routes.");
		let d = {
			id: u.props.id || f.join("-"),
			caseSensitive: u.props.caseSensitive,
			element: u.props.element,
			Component: u.props.Component,
			index: u.props.index,
			path: u.props.path,
			loader: u.props.loader,
			action: u.props.action,
			hydrateFallbackElement: u.props.hydrateFallbackElement,
			HydrateFallback: u.props.HydrateFallback,
			errorElement: u.props.errorElement,
			ErrorBoundary: u.props.ErrorBoundary,
			hasErrorBoundary: u.props.hasErrorBoundary === !0 || u.props.ErrorBoundary != null || u.props.errorElement != null,
			shouldRevalidate: u.props.shouldRevalidate,
			handle: u.props.handle,
			lazy: u.props.lazy
		};
		u.props.children && (d.children = rf(u.props.children, f)), i.push(d)
	}), i
}
var qu = "get",
	$u = "application/x-www-form-urlencoded";

function ao(a) {
	return a != null && typeof a.tagName == "string"
}

function Ux(a) {
	return ao(a) && a.tagName.toLowerCase() === "button"
}

function zx(a) {
	return ao(a) && a.tagName.toLowerCase() === "form"
}

function Bx(a) {
	return ao(a) && a.tagName.toLowerCase() === "input"
}

function Lx(a) {
	return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey)
}

function Hx(a, l) {
	return a.button === 0 && (!l || l === "_self") && !Lx(a)
}
var Bu = null;

function qx() {
	if (Bu === null) try {
		new FormData(document.createElement("form"), 0), Bu = !1
	} catch {
		Bu = !0
	}
	return Bu
}
var $x = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Gc(a) {
	return a != null && !$x.has(a) ? (gn(!1, `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$u}"`), null) : a
}

function Yx(a, l) {
	let i, u, s, f, d;
	if (zx(a)) {
		let m = a.getAttribute("action");
		u = m ? $n(m, l) : null, i = a.getAttribute("method") || qu, s = Gc(a.getAttribute("enctype")) || $u, f = new FormData(a)
	} else if (Ux(a) || Bx(a) && (a.type === "submit" || a.type === "image")) {
		let m = a.form;
		if (m == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
		let p = a.getAttribute("formaction") || m.getAttribute("action");
		if (u = p ? $n(p, l) : null, i = a.getAttribute("formmethod") || m.getAttribute("method") || qu, s = Gc(a.getAttribute("formenctype")) || Gc(m.getAttribute("enctype")) || $u, f = new FormData(m, a), !qx()) {
			let {
				name: h,
				type: y,
				value: E
			} = a;
			if (y === "image") {
				let S = h ? `${h}.` : "";
				f.append(`${S}x`, "0"), f.append(`${S}y`, "0")
			} else h && f.append(h, E)
		}
	} else {
		if (ao(a)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
		i = qu, u = null, s = $u, d = a
	}
	return f && s === "text/plain" && (d = f, f = void 0), {
		action: u,
		method: i.toLowerCase(),
		encType: s,
		formData: f,
		body: d
	}
}

function Tf(a, l) {
	if (a === !1 || a === null || typeof a > "u") throw new Error(l)
}
async function Gx(a, l) {
	if (a.id in l) return l[a.id];
	try {
		let i = await import(a.module);
		return l[a.id] = i, i
	} catch (i) {
		return console.error(`Error loading route module \`${a.module}\`, reloading page...`), console.error(i), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
	}
}

function Xx(a) {
	return a == null ? !1 : a.href == null ? a.rel === "preload" && typeof a.imageSrcSet == "string" && typeof a.imageSizes == "string" : typeof a.rel == "string" && typeof a.href == "string"
}
async function kx(a, l, i) {
	let u = await Promise.all(a.map(async s => {
		let f = l.routes[s.route.id];
		if (f) {
			let d = await Gx(f, i);
			return d.links ? d.links() : []
		}
		return []
	}));
	return Zx(u.flat(1).filter(Xx).filter(s => s.rel === "stylesheet" || s.rel === "preload").map(s => s.rel === "stylesheet" ? {
		...s,
		rel: "prefetch",
		as: "style"
	} : {
		...s,
		rel: "prefetch"
	}))
}

function nv(a, l, i, u, s, f) {
	let d = (p, h) => i[h] ? p.route.id !== i[h].route.id : !0,
		m = (p, h) => {
			var y;
			return i[h].pathname !== p.pathname || ((y = i[h].route.path) == null ? void 0 : y.endsWith("*")) && i[h].params["*"] !== p.params["*"]
		};
	return f === "assets" ? l.filter((p, h) => d(p, h) || m(p, h)) : f === "data" ? l.filter((p, h) => {
		var E;
		let y = u.routes[p.route.id];
		if (!y || !y.hasLoader) return !1;
		if (d(p, h) || m(p, h)) return !0;
		if (p.route.shouldRevalidate) {
			let S = p.route.shouldRevalidate({
				currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
				currentParams: ((E = i[0]) == null ? void 0 : E.params) || {},
				nextUrl: new URL(a, window.origin),
				nextParams: p.params,
				defaultShouldRevalidate: !0
			});
			if (typeof S == "boolean") return S
		}
		return !0
	}) : []
}

function Vx(a, l, {
	includeHydrateFallback: i
} = {}) {
	return Qx(a.map(u => {
		let s = l.routes[u.route.id];
		if (!s) return [];
		let f = [s.module];
		return s.clientActionModule && (f = f.concat(s.clientActionModule)), s.clientLoaderModule && (f = f.concat(s.clientLoaderModule)), i && s.hydrateFallbackModule && (f = f.concat(s.hydrateFallbackModule)), s.imports && (f = f.concat(s.imports)), f
	}).flat(1))
}

function Qx(a) {
	return [...new Set(a)]
}

function Kx(a) {
	let l = {},
		i = Object.keys(a).sort();
	for (let u of i) l[u] = a[u];
	return l
}

function Zx(a, l) {
	let i = new Set;
	return new Set(l), a.reduce((u, s) => {
		let f = JSON.stringify(Kx(s));
		return i.has(f) || (i.add(f), u.push({
			key: f,
			link: s
		})), u
	}, [])
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Jx = new Set([100, 101, 204, 205]);

function Fx(a, l) {
	let i = typeof a == "string" ? new URL(a, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : a;
	return i.pathname === "/" ? i.pathname = "_root.data" : l && $n(i.pathname, l) === "/" ? i.pathname = `${l.replace(/\/$/,"")}/_root.data` : i.pathname = `${i.pathname.replace(/\/$/,"")}.data`, i
}

function cy() {
	let a = g.useContext(Kl);
	return Tf(a, "You must render this element inside a <DataRouterContext.Provider> element"), a
}

function Wx() {
	let a = g.useContext(to);
	return Tf(a, "You must render this element inside a <DataRouterStateContext.Provider> element"), a
}
var wf = g.createContext(void 0);
wf.displayName = "FrameworkContext";

function fy() {
	let a = g.useContext(wf);
	return Tf(a, "You must render this element inside a <HydratedRouter> element"), a
}

function Px(a, l) {
	let i = g.useContext(wf),
		[u, s] = g.useState(!1),
		[f, d] = g.useState(!1),
		{
			onFocus: m,
			onBlur: p,
			onMouseEnter: h,
			onMouseLeave: y,
			onTouchStart: E
		} = l,
		S = g.useRef(null);
	g.useEffect(() => {
		if (a === "render" && d(!0), a === "viewport") {
			let A = D => {
					D.forEach($ => {
						d($.isIntersecting)
					})
				},
				w = new IntersectionObserver(A, {
					threshold: .5
				});
			return S.current && w.observe(S.current), () => {
				w.disconnect()
			}
		}
	}, [a]), g.useEffect(() => {
		if (u) {
			let A = setTimeout(() => {
				d(!0)
			}, 100);
			return () => {
				clearTimeout(A)
			}
		}
	}, [u]);
	let C = () => {
			s(!0)
		},
		R = () => {
			s(!1), d(!1)
		};
	return i ? a !== "intent" ? [f, S, {}] : [f, S, {
		onFocus: Ir(m, C),
		onBlur: Ir(p, R),
		onMouseEnter: Ir(h, C),
		onMouseLeave: Ir(y, R),
		onTouchStart: Ir(E, C)
	}] : [!1, S, {}]
}

function Ir(a, l) {
	return i => {
		a && a(i), i.defaultPrevented || l(i)
	}
}

function Ix({
	page: a,
	...l
}) {
	let {
		router: i
	} = cy(), u = g.useMemo(() => Iv(i.routes, a, i.basename), [i.routes, a, i.basename]);
	return u ? g.createElement(tE, {
		page: a,
		matches: u,
		...l
	}) : null
}

function eE(a) {
	let {
		manifest: l,
		routeModules: i
	} = fy(), [u, s] = g.useState([]);
	return g.useEffect(() => {
		let f = !1;
		return kx(a, l, i).then(d => {
			f || s(d)
		}), () => {
			f = !0
		}
	}, [a, l, i]), u
}

function tE({
	page: a,
	matches: l,
	...i
}) {
	let u = ga(),
		{
			manifest: s,
			routeModules: f
		} = fy(),
		{
			basename: d
		} = cy(),
		{
			loaderData: m,
			matches: p
		} = Wx(),
		h = g.useMemo(() => nv(a, l, p, s, u, "data"), [a, l, p, s, u]),
		y = g.useMemo(() => nv(a, l, p, s, u, "assets"), [a, l, p, s, u]),
		E = g.useMemo(() => {
			if (a === u.pathname + u.search + u.hash) return [];
			let R = new Set,
				A = !1;
			if (l.forEach(D => {
					var _;
					let $ = s.routes[D.route.id];
					!$ || !$.hasLoader || (!h.some(Y => Y.route.id === D.route.id) && D.route.id in m && ((_ = f[D.route.id]) != null && _.shouldRevalidate) || $.hasClientLoader ? A = !0 : R.add(D.route.id))
				}), R.size === 0) return [];
			let w = Fx(a, d);
			return A && R.size > 0 && w.searchParams.set("_routes", l.filter(D => R.has(D.route.id)).map(D => D.route.id).join(",")), [w.pathname + w.search]
		}, [d, m, u, s, h, l, a, f]),
		S = g.useMemo(() => Vx(y, s), [y, s]),
		C = eE(y);
	return g.createElement(g.Fragment, null, E.map(R => g.createElement("link", {
		key: R,
		rel: "prefetch",
		as: "fetch",
		href: R,
		...i
	})), S.map(R => g.createElement("link", {
		key: R,
		rel: "modulepreload",
		href: R,
		...i
	})), C.map(({
		key: R,
		link: A
	}) => g.createElement("link", {
		key: R,
		...A
	})))
}

function nE(...a) {
	return l => {
		a.forEach(i => {
			typeof i == "function" ? i(l) : i != null && (i.current = l)
		})
	}
}
var dy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
	dy && (window.__reactRouterVersion = "7.6.0")
} catch {}

function aE({
	basename: a,
	children: l,
	window: i
}) {
	let u = g.useRef();
	u.current == null && (u.current = k1({
		window: i,
		v5Compat: !0
	}));
	let s = u.current,
		[f, d] = g.useState({
			action: s.action,
			location: s.location
		}),
		m = g.useCallback(p => {
			g.startTransition(() => d(p))
		}, [d]);
	return g.useLayoutEffect(() => s.listen(m), [s, m]), g.createElement(Mx, {
		basename: a,
		children: l,
		location: f.location,
		navigationType: f.action,
		navigator: s
	})
}
var hy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	my = g.forwardRef(function ({
		onClick: l,
		discover: i = "render",
		prefetch: u = "none",
		relative: s,
		reloadDocument: f,
		replace: d,
		state: m,
		target: p,
		to: h,
		preventScrollReset: y,
		viewTransition: E,
		...S
	}, C) {
		let {
			basename: R
		} = g.useContext(bn), A = typeof h == "string" && hy.test(h), w, D = !1;
		if (typeof h == "string" && A && (w = h, dy)) try {
			let te = new URL(window.location.href),
				se = h.startsWith("//") ? new URL(te.protocol + h) : new URL(h),
				ae = $n(se.pathname, R);
			se.origin === te.origin && ae != null ? h = ae + se.search + se.hash : D = !0
		} catch {
			gn(!1, `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
		}
		let $ = yx(h, {
				relative: s
			}),
			[_, Y, q] = Px(u, S),
			Q = uE(h, {
				replace: d,
				state: m,
				target: p,
				preventScrollReset: y,
				relative: s,
				viewTransition: E
			});

		function Z(te) {
			l && l(te), te.defaultPrevented || Q(te)
		}
		let I = g.createElement("a", {
			...S,
			...q,
			href: w || $,
			onClick: D || f ? l : Z,
			ref: nE(C, Y),
			target: p,
			"data-discover": !A && i === "render" ? "true" : void 0
		});
		return _ && !A ? g.createElement(g.Fragment, null, I, g.createElement(Ix, {
			page: $
		})) : I
	});
my.displayName = "Link";
var lE = g.forwardRef(function ({
	"aria-current": l = "page",
	caseSensitive: i = !1,
	className: u = "",
	end: s = !1,
	style: f,
	to: d,
	viewTransition: m,
	children: p,
	...h
}, y) {
	let E = yi(d, {
			relative: h.relative
		}),
		S = ga(),
		C = g.useContext(to),
		{
			navigator: R,
			basename: A
		} = g.useContext(bn),
		w = C != null && dE(E) && m === !0,
		D = R.encodeLocation ? R.encodeLocation(E).pathname : E.pathname,
		$ = S.pathname,
		_ = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
	i || ($ = $.toLowerCase(), _ = _ ? _.toLowerCase() : null, D = D.toLowerCase()), _ && A && (_ = $n(_, A) || _);
	const Y = D !== "/" && D.endsWith("/") ? D.length - 1 : D.length;
	let q = $ === D || !s && $.startsWith(D) && $.charAt(Y) === "/",
		Q = _ != null && (_ === D || !s && _.startsWith(D) && _.charAt(D.length) === "/"),
		Z = {
			isActive: q,
			isPending: Q,
			isTransitioning: w
		},
		I = q ? l : void 0,
		te;
	typeof u == "function" ? te = u(Z) : te = [u, q ? "active" : null, Q ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" ");
	let se = typeof f == "function" ? f(Z) : f;
	return g.createElement(my, {
		...h,
		"aria-current": I,
		className: te,
		ref: y,
		style: se,
		to: d,
		viewTransition: m
	}, typeof p == "function" ? p(Z) : p)
});
lE.displayName = "NavLink";
var rE = g.forwardRef(({
	discover: a = "render",
	fetcherKey: l,
	navigate: i,
	reloadDocument: u,
	replace: s,
	state: f,
	method: d = qu,
	action: m,
	onSubmit: p,
	relative: h,
	preventScrollReset: y,
	viewTransition: E,
	...S
}, C) => {
	let R = cE(),
		A = fE(m, {
			relative: h
		}),
		w = d.toLowerCase() === "get" ? "get" : "post",
		D = typeof m == "string" && hy.test(m),
		$ = _ => {
			if (p && p(_), _.defaultPrevented) return;
			_.preventDefault();
			let Y = _.nativeEvent.submitter,
				q = (Y == null ? void 0 : Y.getAttribute("formmethod")) || d;
			R(Y || _.currentTarget, {
				fetcherKey: l,
				method: q,
				navigate: i,
				replace: s,
				state: f,
				relative: h,
				preventScrollReset: y,
				viewTransition: E
			})
		};
	return g.createElement("form", {
		ref: C,
		method: w,
		action: A,
		onSubmit: u ? p : $,
		...S,
		"data-discover": !D && a === "render" ? "true" : void 0
	})
});
rE.displayName = "Form";

function iE(a) {
	return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function py(a) {
	let l = g.useContext(Kl);
	return Ye(l, iE(a)), l
}

function uE(a, {
	target: l,
	replace: i,
	state: u,
	preventScrollReset: s,
	relative: f,
	viewTransition: d
} = {}) {
	let m = no(),
		p = ga(),
		h = yi(a, {
			relative: f
		});
	return g.useCallback(y => {
		if (Hx(y, l)) {
			y.preventDefault();
			let E = i !== void 0 ? i : ui(p) === ui(h);
			m(a, {
				replace: E,
				state: u,
				preventScrollReset: s,
				relative: f,
				viewTransition: d
			})
		}
	}, [p, m, h, i, u, l, a, s, f, d])
}
var oE = 0,
	sE = () => `__${String(++oE)}__`;

function cE() {
	let {
		router: a
	} = py("useSubmit"), {
		basename: l
	} = g.useContext(bn), i = Nx();
	return g.useCallback(async (u, s = {}) => {
		let {
			action: f,
			method: d,
			encType: m,
			formData: p,
			body: h
		} = Yx(u, l);
		if (s.navigate === !1) {
			let y = s.fetcherKey || sE();
			await a.fetch(y, i, s.action || f, {
				preventScrollReset: s.preventScrollReset,
				formData: p,
				body: h,
				formMethod: s.method || d,
				formEncType: s.encType || m,
				flushSync: s.flushSync
			})
		} else await a.navigate(s.action || f, {
			preventScrollReset: s.preventScrollReset,
			formData: p,
			body: h,
			formMethod: s.method || d,
			formEncType: s.encType || m,
			replace: s.replace,
			state: s.state,
			fromRouteId: i,
			flushSync: s.flushSync,
			viewTransition: s.viewTransition
		})
	}, [a, l, i])
}

function fE(a, {
	relative: l
} = {}) {
	let {
		basename: i
	} = g.useContext(bn), u = g.useContext(Xn);
	Ye(u, "useFormAction must be used inside a RouteContext");
	let [s] = u.matches.slice(-1), f = {
		...yi(a || ".", {
			relative: l
		})
	}, d = ga();
	if (a == null) {
		f.search = d.search;
		let m = new URLSearchParams(f.search),
			p = m.getAll("index");
		if (p.some(y => y === "")) {
			m.delete("index"), p.filter(E => E).forEach(E => m.append("index", E));
			let y = m.toString();
			f.search = y ? `?${y}` : ""
		}
	}
	return (!a || a === ".") && s.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (f.pathname = f.pathname === "/" ? i : Hn([i, f.pathname])), ui(f)
}

function dE(a, l = {}) {
	let i = g.useContext(ry);
	Ye(i != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let {
		basename: u
	} = py("useViewTransitionState"), s = yi(a, {
		relative: l.relative
	});
	if (!i.isTransitioning) return !1;
	let f = $n(i.currentLocation.pathname, u) || i.currentLocation.pathname,
		d = $n(i.nextLocation.pathname, u) || i.nextLocation.pathname;
	return Vu(s.pathname, d) != null || Vu(s.pathname, f) != null
} [...Jx];
var hE = Pv();
const $l = mi(hE);
var Xc = {
	exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var av;

function mE() {
	return av || (av = 1, function (a) {
		(function () {
			var l = {}.hasOwnProperty;

			function i() {
				for (var f = "", d = 0; d < arguments.length; d++) {
					var m = arguments[d];
					m && (f = s(f, u(m)))
				}
				return f
			}

			function u(f) {
				if (typeof f == "string" || typeof f == "number") return f;
				if (typeof f != "object") return "";
				if (Array.isArray(f)) return i.apply(null, f);
				if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]")) return f.toString();
				var d = "";
				for (var m in f) l.call(f, m) && f[m] && (d = s(d, m));
				return d
			}

			function s(f, d) {
				return d ? f ? f + " " + d : f + d : f
			}
			a.exports ? (i.default = i, a.exports = i) : window.classNames = i
		})()
	}(Xc)), Xc.exports
}
var pE = mE();
const ie = mi(pE);

function uf() {
	return uf = Object.assign ? Object.assign.bind() : function (a) {
		for (var l = 1; l < arguments.length; l++) {
			var i = arguments[l];
			for (var u in i)({}).hasOwnProperty.call(i, u) && (a[u] = i[u])
		}
		return a
	}, uf.apply(null, arguments)
}

function vy(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) !== -1) continue;
			i[u] = a[u]
		} return i
}

function lv(a) {
	return "default" + a.charAt(0).toUpperCase() + a.substr(1)
}

function vE(a) {
	var l = yE(a, "string");
	return typeof l == "symbol" ? l : String(l)
}

function yE(a, l) {
	if (typeof a != "object" || a === null) return a;
	var i = a[Symbol.toPrimitive];
	if (i !== void 0) {
		var u = i.call(a, l);
		if (typeof u != "object") return u;
		throw new TypeError("@@toPrimitive must return a primitive value.")
	}
	return String(a)
}

function gE(a, l, i) {
	var u = g.useRef(a !== void 0),
		s = g.useState(l),
		f = s[0],
		d = s[1],
		m = a !== void 0,
		p = u.current;
	return u.current = m, !m && p && f !== l && d(l), [m ? a : f, g.useCallback(function (h) {
		for (var y = arguments.length, E = new Array(y > 1 ? y - 1 : 0), S = 1; S < y; S++) E[S - 1] = arguments[S];
		i && i.apply(void 0, [h].concat(E)), d(h)
	}, [i])]
}

function lo(a, l) {
	return Object.keys(l).reduce(function (i, u) {
		var s, f = i,
			d = f[lv(u)],
			m = f[u],
			p = vy(f, [lv(u), u].map(vE)),
			h = l[u],
			y = gE(m, d, a[h]),
			E = y[0],
			S = y[1];
		return uf({}, p, (s = {}, s[u] = E, s[h] = S, s))
	}, a)
}

function of (a, l) {
	return of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (i, u) {
		return i.__proto__ = u, i
	}, of (a, l)
}

function bE(a, l) {
	a.prototype = Object.create(l.prototype), a.prototype.constructor = a, of (a, l)
}
const xE = ["xxl", "xl", "lg", "md", "sm", "xs"],
	EE = "xs",
	gi = g.createContext({
		prefixes: {},
		breakpoints: xE,
		minBreakpoint: EE
	}),
	{
		Consumer: Hw,
		Provider: qw
	} = gi;

function de(a, l) {
	const {
		prefixes: i
	} = g.useContext(gi);
	return a || i[l] || l
}

function SE() {
	const {
		breakpoints: a
	} = g.useContext(gi);
	return a
}

function RE() {
	const {
		minBreakpoint: a
	} = g.useContext(gi);
	return a
}

function yy() {
	const {
		dir: a
	} = g.useContext(gi);
	return a === "rtl"
}

function ro(a) {
	return a && a.ownerDocument || document
}

function OE(a) {
	var l = ro(a);
	return l && l.defaultView || window
}

function TE(a, l) {
	return OE(a).getComputedStyle(a, l)
}
var wE = /([A-Z])/g;

function CE(a) {
	return a.replace(wE, "-$1").toLowerCase()
}
var NE = /^ms-/;

function Lu(a) {
	return CE(a).replace(NE, "-ms-")
}
var AE = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function jE(a) {
	return !!(a && AE.test(a))
}

function qn(a, l) {
	var i = "",
		u = "";
	if (typeof l == "string") return a.style.getPropertyValue(Lu(l)) || TE(a).getPropertyValue(Lu(l));
	Object.keys(l).forEach(function (s) {
		var f = l[s];
		!f && f !== 0 ? a.style.removeProperty(Lu(s)) : jE(s) ? u += s + "(" + f + ") " : i += Lu(s) + ": " + f + ";"
	}), u && (i += "transform: " + u + ";"), a.style.cssText += ";" + i
}
var kc = {
		exports: {}
	},
	Vc, rv;

function DE() {
	if (rv) return Vc;
	rv = 1;
	var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	return Vc = a, Vc
}
var Qc, iv;

function ME() {
	if (iv) return Qc;
	iv = 1;
	var a = DE();

	function l() {}

	function i() {}
	return i.resetWarningCache = l, Qc = function () {
		function u(d, m, p, h, y, E) {
			if (E !== a) {
				var S = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw S.name = "Invariant Violation", S
			}
		}
		u.isRequired = u;

		function s() {
			return u
		}
		var f = {
			array: u,
			bigint: u,
			bool: u,
			func: u,
			number: u,
			object: u,
			string: u,
			symbol: u,
			any: u,
			arrayOf: s,
			element: u,
			elementType: u,
			instanceOf: s,
			node: u,
			objectOf: s,
			oneOf: s,
			oneOfType: s,
			shape: s,
			exact: s,
			checkPropTypes: i,
			resetWarningCache: l
		};
		return f.PropTypes = f, f
	}, Qc
}
var uv;

function _E() {
	return uv || (uv = 1, kc.exports = ME()()), kc.exports
}
var UE = _E();
const Ot = mi(UE),
	ov = {
		disabled: !1
	},
	gy = $e.createContext(null);
var zE = function (l) {
		return l.scrollTop
	},
	ai = "unmounted",
	pa = "exited",
	ln = "entering",
	Ln = "entered",
	oi = "exiting",
	kn = function (a) {
		bE(l, a);

		function l(u, s) {
			var f;
			f = a.call(this, u, s) || this;
			var d = s,
				m = d && !d.isMounting ? u.enter : u.appear,
				p;
			return f.appearStatus = null, u.in ? m ? (p = pa, f.appearStatus = ln) : p = Ln : u.unmountOnExit || u.mountOnEnter ? p = ai : p = pa, f.state = {
				status: p
			}, f.nextCallback = null, f
		}
		l.getDerivedStateFromProps = function (s, f) {
			var d = s.in;
			return d && f.status === ai ? {
				status: pa
			} : null
		};
		var i = l.prototype;
		return i.componentDidMount = function () {
			this.updateStatus(!0, this.appearStatus)
		}, i.componentDidUpdate = function (s) {
			var f = null;
			if (s !== this.props) {
				var d = this.state.status;
				this.props.in ? d !== ln && d !== Ln && (f = ln) : (d === ln || d === Ln) && (f = oi)
			}
			this.updateStatus(!1, f)
		}, i.componentWillUnmount = function () {
			this.cancelNextCallback()
		}, i.getTimeouts = function () {
			var s = this.props.timeout,
				f, d, m;
			return f = d = m = s, s != null && typeof s != "number" && (f = s.exit, d = s.enter, m = s.appear !== void 0 ? s.appear : d), {
				exit: f,
				enter: d,
				appear: m
			}
		}, i.updateStatus = function (s, f) {
			if (s === void 0 && (s = !1), f !== null)
				if (this.cancelNextCallback(), f === ln) {
					if (this.props.unmountOnExit || this.props.mountOnEnter) {
						var d = this.props.nodeRef ? this.props.nodeRef.current : $l.findDOMNode(this);
						d && zE(d)
					}
					this.performEnter(s)
				} else this.performExit();
			else this.props.unmountOnExit && this.state.status === pa && this.setState({
				status: ai
			})
		}, i.performEnter = function (s) {
			var f = this,
				d = this.props.enter,
				m = this.context ? this.context.isMounting : s,
				p = this.props.nodeRef ? [m] : [$l.findDOMNode(this), m],
				h = p[0],
				y = p[1],
				E = this.getTimeouts(),
				S = m ? E.appear : E.enter;
			if (!s && !d || ov.disabled) {
				this.safeSetState({
					status: Ln
				}, function () {
					f.props.onEntered(h)
				});
				return
			}
			this.props.onEnter(h, y), this.safeSetState({
				status: ln
			}, function () {
				f.props.onEntering(h, y), f.onTransitionEnd(S, function () {
					f.safeSetState({
						status: Ln
					}, function () {
						f.props.onEntered(h, y)
					})
				})
			})
		}, i.performExit = function () {
			var s = this,
				f = this.props.exit,
				d = this.getTimeouts(),
				m = this.props.nodeRef ? void 0 : $l.findDOMNode(this);
			if (!f || ov.disabled) {
				this.safeSetState({
					status: pa
				}, function () {
					s.props.onExited(m)
				});
				return
			}
			this.props.onExit(m), this.safeSetState({
				status: oi
			}, function () {
				s.props.onExiting(m), s.onTransitionEnd(d.exit, function () {
					s.safeSetState({
						status: pa
					}, function () {
						s.props.onExited(m)
					})
				})
			})
		}, i.cancelNextCallback = function () {
			this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
		}, i.safeSetState = function (s, f) {
			f = this.setNextCallback(f), this.setState(s, f)
		}, i.setNextCallback = function (s) {
			var f = this,
				d = !0;
			return this.nextCallback = function (m) {
				d && (d = !1, f.nextCallback = null, s(m))
			}, this.nextCallback.cancel = function () {
				d = !1
			}, this.nextCallback
		}, i.onTransitionEnd = function (s, f) {
			this.setNextCallback(f);
			var d = this.props.nodeRef ? this.props.nodeRef.current : $l.findDOMNode(this),
				m = s == null && !this.props.addEndListener;
			if (!d || m) {
				setTimeout(this.nextCallback, 0);
				return
			}
			if (this.props.addEndListener) {
				var p = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback],
					h = p[0],
					y = p[1];
				this.props.addEndListener(h, y)
			}
			s != null && setTimeout(this.nextCallback, s)
		}, i.render = function () {
			var s = this.state.status;
			if (s === ai) return null;
			var f = this.props,
				d = f.children;
			f.in, f.mountOnEnter, f.unmountOnExit, f.appear, f.enter, f.exit, f.timeout, f.addEndListener, f.onEnter, f.onEntering, f.onEntered, f.onExit, f.onExiting, f.onExited, f.nodeRef;
			var m = vy(f, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
			return $e.createElement(gy.Provider, {
				value: null
			}, typeof d == "function" ? d(s, m) : $e.cloneElement($e.Children.only(d), m))
		}, l
	}($e.Component);
kn.contextType = gy;
kn.propTypes = {};

function Bl() {}
kn.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: Bl,
	onEntering: Bl,
	onEntered: Bl,
	onExit: Bl,
	onExiting: Bl,
	onExited: Bl
};
kn.UNMOUNTED = ai;
kn.EXITED = pa;
kn.ENTERING = ln;
kn.ENTERED = Ln;
kn.EXITING = oi;

function BE(a) {
	return a.code === "Escape" || a.keyCode === 27
}

function LE() {
	const a = g.version.split(".");
	return {
		major: +a[0],
		minor: +a[1],
		patch: +a[2]
	}
}

function Zl(a) {
	if (!a || typeof a == "function") return null;
	const {
		major: l
	} = LE();
	return l >= 19 ? a.props.ref : a.ref
}
const io = !!(typeof window < "u" && window.document && window.document.createElement);
var sf = !1,
	cf = !1;
try {
	var Kc = {
		get passive() {
			return sf = !0
		},
		get once() {
			return cf = sf = !0
		}
	};
	io && (window.addEventListener("test", Kc, Kc), window.removeEventListener("test", Kc, !0))
} catch {}

function by(a, l, i, u) {
	if (u && typeof u != "boolean" && !cf) {
		var s = u.once,
			f = u.capture,
			d = i;
		!cf && s && (d = i.__once || function m(p) {
			this.removeEventListener(l, m, f), i.call(this, p)
		}, i.__once = d), a.addEventListener(l, d, sf ? u : f)
	}
	a.addEventListener(l, i, u)
}

function HE(a, l, i, u) {
	var s = u && typeof u != "boolean" ? u.capture : u;
	a.removeEventListener(l, i, s), i.__once && a.removeEventListener(l, i.__once, s)
}

function va(a, l, i, u) {
	return by(a, l, i, u),
		function () {
			HE(a, l, i, u)
		}
}

function qE(a, l, i, u) {
	if (u === void 0 && (u = !0), a) {
		var s = document.createEvent("HTMLEvents");
		s.initEvent(l, i, u), a.dispatchEvent(s)
	}
}

function $E(a) {
	var l = qn(a, "transitionDuration") || "",
		i = l.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(l) * i
}

function YE(a, l, i) {
	i === void 0 && (i = 5);
	var u = !1,
		s = setTimeout(function () {
			u || qE(a, "transitionend", !0)
		}, l + i),
		f = va(a, "transitionend", function () {
			u = !0
		}, {
			once: !0
		});
	return function () {
		clearTimeout(s), f()
	}
}

function GE(a, l, i, u) {
	i == null && (i = $E(a) || 0);
	var s = YE(a, i, u),
		f = va(a, "transitionend", l);
	return function () {
		s(), f()
	}
}

function sv(a, l) {
	const i = qn(a, l) || "",
		u = i.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(i) * u
}

function uo(a, l) {
	const i = sv(a, "transitionDuration"),
		u = sv(a, "transitionDelay"),
		s = GE(a, f => {
			f.target === a && (s(), l(f))
		}, i + u)
}

function ei(...a) {
	return a.filter(l => l != null).reduce((l, i) => {
		if (typeof i != "function") throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
		return l === null ? i : function (...s) {
			l.apply(this, s), i.apply(this, s)
		}
	}, null)
}

function Cf(a) {
	a.offsetHeight
}
const cv = a => !a || typeof a == "function" ? a : l => {
	a.current = l
};

function XE(a, l) {
	const i = cv(a),
		u = cv(l);
	return s => {
		i && i(s), u && u(s)
	}
}

function Nf(a, l) {
	return g.useMemo(() => XE(a, l), [a, l])
}

function kE(a) {
	return a && "setState" in a ? $l.findDOMNode(a) : a ?? null
}
const bi = $e.forwardRef(({
	onEnter: a,
	onEntering: l,
	onEntered: i,
	onExit: u,
	onExiting: s,
	onExited: f,
	addEndListener: d,
	children: m,
	childRef: p,
	...h
}, y) => {
	const E = g.useRef(null),
		S = Nf(E, p),
		C = Q => {
			S(kE(Q))
		},
		R = Q => Z => {
			Q && E.current && Q(E.current, Z)
		},
		A = g.useCallback(R(a), [a]),
		w = g.useCallback(R(l), [l]),
		D = g.useCallback(R(i), [i]),
		$ = g.useCallback(R(u), [u]),
		_ = g.useCallback(R(s), [s]),
		Y = g.useCallback(R(f), [f]),
		q = g.useCallback(R(d), [d]);
	return x.jsx(kn, {
		ref: y,
		...h,
		onEnter: A,
		onEntered: D,
		onEntering: w,
		onExit: $,
		onExited: Y,
		onExiting: _,
		addEndListener: q,
		nodeRef: E,
		children: typeof m == "function" ? (Q, Z) => m(Q, {
			...Z,
			ref: C
		}) : $e.cloneElement(m, {
			ref: C
		})
	})
});
bi.displayName = "TransitionWrapper";
const VE = {
	height: ["marginTop", "marginBottom"],
	width: ["marginLeft", "marginRight"]
};

function QE(a, l) {
	const i = `offset${a[0].toUpperCase()}${a.slice(1)}`,
		u = l[i],
		s = VE[a];
	return u + parseInt(qn(l, s[0]), 10) + parseInt(qn(l, s[1]), 10)
}
const KE = {
		[pa]: "collapse",
		[oi]: "collapsing",
		[ln]: "collapsing",
		[Ln]: "collapse show"
	},
	xy = $e.forwardRef(({
		onEnter: a,
		onEntering: l,
		onEntered: i,
		onExit: u,
		onExiting: s,
		className: f,
		children: d,
		dimension: m = "height",
		in: p = !1,
		timeout: h = 300,
		mountOnEnter: y = !1,
		unmountOnExit: E = !1,
		appear: S = !1,
		getDimensionValue: C = QE,
		...R
	}, A) => {
		const w = typeof m == "function" ? m() : m,
			D = g.useMemo(() => ei(Q => {
				Q.style[w] = "0"
			}, a), [w, a]),
			$ = g.useMemo(() => ei(Q => {
				const Z = `scroll${w[0].toUpperCase()}${w.slice(1)}`;
				Q.style[w] = `${Q[Z]}px`
			}, l), [w, l]),
			_ = g.useMemo(() => ei(Q => {
				Q.style[w] = null
			}, i), [w, i]),
			Y = g.useMemo(() => ei(Q => {
				Q.style[w] = `${C(w,Q)}px`, Cf(Q)
			}, u), [u, C, w]),
			q = g.useMemo(() => ei(Q => {
				Q.style[w] = null
			}, s), [w, s]);
		return x.jsx(bi, {
			ref: A,
			addEndListener: uo,
			...R,
			"aria-expanded": R.role ? p : null,
			onEnter: D,
			onEntering: $,
			onEntered: _,
			onExit: Y,
			onExiting: q,
			childRef: Zl(d),
			in: p,
			timeout: h,
			mountOnEnter: y,
			unmountOnExit: E,
			appear: S,
			children: (Q, Z) => $e.cloneElement(d, {
				...Z,
				className: ie(f, d.props.className, KE[Q], w === "width" && "collapse-horizontal")
			})
		})
	});
xy.displayName = "Collapse";

function Ey(a) {
	const l = g.useRef(a);
	return g.useEffect(() => {
		l.current = a
	}, [a]), l
}

function Xa(a) {
	const l = Ey(a);
	return g.useCallback(function (...i) {
		return l.current && l.current(...i)
	}, [l])
}
const Af = a => g.forwardRef((l, i) => x.jsx("div", {
	...l,
	ref: i,
	className: ie(l.className, a)
}));

function ZE() {
	return g.useState(null)
}

function JE(a) {
	const l = g.useRef(a);
	return g.useEffect(() => {
		l.current = a
	}, [a]), l
}

function mt(a) {
	const l = JE(a);
	return g.useCallback(function (...i) {
		return l.current && l.current(...i)
	}, [l])
}

function FE(a, l, i, u = !1) {
	const s = mt(i);
	g.useEffect(() => {
		const f = typeof a == "function" ? a() : a;
		return f.addEventListener(l, s, u), () => f.removeEventListener(l, s, u)
	}, [a])
}

function Sy() {
	const a = g.useRef(!0),
		l = g.useRef(() => a.current);
	return g.useEffect(() => (a.current = !0, () => {
		a.current = !1
	}), []), l.current
}

function Ry(a) {
	const l = g.useRef(null);
	return g.useEffect(() => {
		l.current = a
	}), l.current
}
const WE = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative",
	PE = typeof document < "u",
	fv = PE || WE ? g.useLayoutEffect : g.useEffect,
	IE = ["as", "disabled"];

function eS(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}

function tS(a) {
	return !a || a.trim() === "#"
}

function jf({
	tagName: a,
	disabled: l,
	href: i,
	target: u,
	rel: s,
	role: f,
	onClick: d,
	tabIndex: m = 0,
	type: p
}) {
	a || (i != null || u != null || s != null ? a = "a" : a = "button");
	const h = {
		tagName: a
	};
	if (a === "button") return [{
		type: p || "button",
		disabled: l
	}, h];
	const y = S => {
			if ((l || a === "a" && tS(i)) && S.preventDefault(), l) {
				S.stopPropagation();
				return
			}
			d == null || d(S)
		},
		E = S => {
			S.key === " " && (S.preventDefault(), y(S))
		};
	return a === "a" && (i || (i = "#"), l && (i = void 0)), [{
		role: f ?? "button",
		disabled: void 0,
		tabIndex: l ? void 0 : m,
		href: i,
		target: a === "a" ? u : void 0,
		"aria-disabled": l || void 0,
		rel: a === "a" ? s : void 0,
		onClick: y,
		onKeyDown: E
	}, h]
}
const Df = g.forwardRef((a, l) => {
	let {
		as: i,
		disabled: u
	} = a, s = eS(a, IE);
	const [f, {
		tagName: d
	}] = jf(Object.assign({
		tagName: i,
		disabled: u
	}, s));
	return x.jsx(d, Object.assign({}, s, f, {
		ref: l
	}))
});
Df.displayName = "Button";
const nS = ["onKeyDown"];

function aS(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}

function lS(a) {
	return !a || a.trim() === "#"
}
const si = g.forwardRef((a, l) => {
	let {
		onKeyDown: i
	} = a, u = aS(a, nS);
	const [s] = jf(Object.assign({
		tagName: "a"
	}, u)), f = mt(d => {
		s.onKeyDown(d), i == null || i(d)
	});
	return lS(u.href) || u.role === "button" ? x.jsx("a", Object.assign({
		ref: l
	}, u, s, {
		onKeyDown: f
	})) : x.jsx("a", Object.assign({
		ref: l
	}, u, {
		onKeyDown: i
	}))
});
si.displayName = "Anchor";
const rS = {
		[ln]: "show",
		[Ln]: "show"
	},
	Oy = g.forwardRef(({
		className: a,
		children: l,
		transitionClasses: i = {},
		onEnter: u,
		...s
	}, f) => {
		const d = {
				in: !1,
				timeout: 300,
				mountOnEnter: !1,
				unmountOnExit: !1,
				appear: !1,
				...s
			},
			m = g.useCallback((p, h) => {
				Cf(p), u == null || u(p, h)
			}, [u]);
		return x.jsx(bi, {
			ref: f,
			addEndListener: uo,
			...d,
			onEnter: m,
			childRef: Zl(l),
			children: (p, h) => g.cloneElement(l, {
				...h,
				className: ie("fade", a, l.props.className, rS[p], i[p])
			})
		})
	});
Oy.displayName = "Fade";
const iS = {
		"aria-label": Ot.string,
		onClick: Ot.func,
		variant: Ot.oneOf(["white"])
	},
	Mf = g.forwardRef(({
		className: a,
		variant: l,
		"aria-label": i = "Close",
		...u
	}, s) => x.jsx("button", {
		ref: s,
		type: "button",
		className: ie("btn-close", l && `btn-close-${l}`, a),
		"aria-label": i,
		...u
	}));
Mf.displayName = "CloseButton";
Mf.propTypes = iS;
const rn = g.forwardRef(({
	as: a,
	bsPrefix: l,
	variant: i = "primary",
	size: u,
	active: s = !1,
	disabled: f = !1,
	className: d,
	...m
}, p) => {
	const h = de(l, "btn"),
		[y, {
			tagName: E
		}] = jf({
			tagName: a,
			disabled: f,
			...m
		}),
		S = E;
	return x.jsx(S, {
		...y,
		...m,
		ref: p,
		disabled: f,
		className: ie(d, h, s && "active", i && `${h}-${i}`, u && `${h}-${u}`, m.href && f && "disabled")
	})
});
rn.displayName = "Button";
const _f = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "div",
	...u
}, s) => (l = de(l, "card-body"), x.jsx(i, {
	ref: s,
	className: ie(a, l),
	...u
})));
_f.displayName = "CardBody";
const Ty = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "div",
	...u
}, s) => (l = de(l, "card-footer"), x.jsx(i, {
	ref: s,
	className: ie(a, l),
	...u
})));
Ty.displayName = "CardFooter";
const Uf = g.createContext(null);
Uf.displayName = "CardHeaderContext";
const wy = g.forwardRef(({
	bsPrefix: a,
	className: l,
	as: i = "div",
	...u
}, s) => {
	const f = de(a, "card-header"),
		d = g.useMemo(() => ({
			cardHeaderBsPrefix: f
		}), [f]);
	return x.jsx(Uf.Provider, {
		value: d,
		children: x.jsx(i, {
			ref: s,
			...u,
			className: ie(l, f)
		})
	})
});
wy.displayName = "CardHeader";
const Cy = g.forwardRef(({
	bsPrefix: a,
	className: l,
	variant: i,
	as: u = "img",
	...s
}, f) => {
	const d = de(a, "card-img");
	return x.jsx(u, {
		ref: f,
		className: ie(i ? `${d}-${i}` : d, l),
		...s
	})
});
Cy.displayName = "CardImg";
const Ny = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "div",
	...u
}, s) => (l = de(l, "card-img-overlay"), x.jsx(i, {
	ref: s,
	className: ie(a, l),
	...u
})));
Ny.displayName = "CardImgOverlay";
const Ay = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "a",
	...u
}, s) => (l = de(l, "card-link"), x.jsx(i, {
	ref: s,
	className: ie(a, l),
	...u
})));
Ay.displayName = "CardLink";
const uS = Af("h6"),
	jy = g.forwardRef(({
		className: a,
		bsPrefix: l,
		as: i = uS,
		...u
	}, s) => (l = de(l, "card-subtitle"), x.jsx(i, {
		ref: s,
		className: ie(a, l),
		...u
	})));
jy.displayName = "CardSubtitle";
const Dy = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "p",
	...u
}, s) => (l = de(l, "card-text"), x.jsx(i, {
	ref: s,
	className: ie(a, l),
	...u
})));
Dy.displayName = "CardText";
const oS = Af("h5"),
	My = g.forwardRef(({
		className: a,
		bsPrefix: l,
		as: i = oS,
		...u
	}, s) => (l = de(l, "card-title"), x.jsx(i, {
		ref: s,
		className: ie(a, l),
		...u
	})));
My.displayName = "CardTitle";
const _y = g.forwardRef(({
	bsPrefix: a,
	className: l,
	bg: i,
	text: u,
	border: s,
	body: f = !1,
	children: d,
	as: m = "div",
	...p
}, h) => {
	const y = de(a, "card");
	return x.jsx(m, {
		ref: h,
		...p,
		className: ie(l, y, i && `bg-${i}`, u && `text-${u}`, s && `border-${s}`),
		children: f ? x.jsx(_f, {
			children: d
		}) : d
	})
});
_y.displayName = "Card";
const qa = Object.assign(_y, {
	Img: Cy,
	Title: My,
	Subtitle: jy,
	Body: _f,
	Link: Ay,
	Text: Dy,
	Header: wy,
	Footer: Ty,
	ImgOverlay: Ny
});

function sS(a, l) {
	const i = g.useRef(!0);
	g.useEffect(() => {
		if (i.current) {
			i.current = !1;
			return
		}
		return a()
	}, l)
}

function cS() {
	const a = g.useRef(!0),
		l = g.useRef(() => a.current);
	return g.useEffect(() => (a.current = !0, () => {
		a.current = !1
	}), []), l.current
}

function fS(a) {
	const l = g.useRef(a);
	return l.current = a, l
}

function dS(a) {
	const l = fS(a);
	g.useEffect(() => () => l.current(), [])
}
const ff = 2 ** 31 - 1;

function Uy(a, l, i) {
	const u = i - Date.now();
	a.current = u <= ff ? setTimeout(l, u) : setTimeout(() => Uy(a, l, i), ff)
}

function hS() {
	const a = cS(),
		l = g.useRef();
	return dS(() => clearTimeout(l.current)), g.useMemo(() => {
		const i = () => clearTimeout(l.current);

		function u(s, f = 0) {
			a() && (i(), f <= ff ? l.current = setTimeout(s, f) : Uy(l, s, Date.now() + f))
		}
		return {
			set: u,
			clear: i,
			handleRef: l
		}
	}, [])
}
const zy = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "div",
	...u
}, s) => (l = de(l, "carousel-caption"), x.jsx(i, {
	ref: s,
	className: ie(a, l),
	...u
})));
zy.displayName = "CarouselCaption";
const By = g.forwardRef(({
	as: a = "div",
	bsPrefix: l,
	className: i,
	...u
}, s) => {
	const f = ie(i, de(l, "carousel-item"));
	return x.jsx(a, {
		ref: s,
		...u,
		className: f
	})
});
By.displayName = "CarouselItem";

function dv(a, l) {
	let i = 0;
	return g.Children.map(a, u => g.isValidElement(u) ? l(u, i++) : u)
}

function mS(a, l) {
	let i = 0;
	g.Children.forEach(a, u => {
		g.isValidElement(u) && l(u, i++)
	})
}

function pS(a, l) {
	return g.Children.toArray(a).some(i => g.isValidElement(i) && i.type === l)
}
const vS = 40;

function yS(a) {
	if (!a || !a.style || !a.parentNode || !a.parentNode.style) return !1;
	const l = getComputedStyle(a);
	return l.display !== "none" && l.visibility !== "hidden" && getComputedStyle(a.parentNode).display !== "none"
}
const Ly = g.forwardRef(({
	defaultActiveIndex: a = 0,
	...l
}, i) => {
	const {
		as: u = "div",
		bsPrefix: s,
		slide: f = !0,
		fade: d = !1,
		controls: m = !0,
		indicators: p = !0,
		indicatorLabels: h = [],
		activeIndex: y,
		onSelect: E,
		onSlide: S,
		onSlid: C,
		interval: R = 5e3,
		keyboard: A = !0,
		onKeyDown: w,
		pause: D = "hover",
		onMouseOver: $,
		onMouseOut: _,
		wrap: Y = !0,
		touch: q = !0,
		onTouchStart: Q,
		onTouchMove: Z,
		onTouchEnd: I,
		prevIcon: te = x.jsx("span", {
			"aria-hidden": "true",
			className: "carousel-control-prev-icon"
		}),
		prevLabel: se = "Previous",
		nextIcon: ae = x.jsx("span", {
			"aria-hidden": "true",
			className: "carousel-control-next-icon"
		}),
		nextLabel: le = "Next",
		variant: he,
		className: we,
		children: xe,
		...B
	} = lo({
		defaultActiveIndex: a,
		...l
	}, {
		activeIndex: "onSelect"
	}), K = de(s, "carousel"), F = yy(), ce = g.useRef(null), [T, X] = g.useState("next"), [W, J] = g.useState(!1), [P, ue] = g.useState(!1), [ee, Xe] = g.useState(y || 0);
	g.useEffect(() => {
		!P && y !== ee && (ce.current ? X(ce.current) : X((y || 0) > ee ? "next" : "prev"), f && ue(!0), Xe(y || 0))
	}, [y, P, ee, f]), g.useEffect(() => {
		ce.current && (ce.current = null)
	});
	let ye = 0,
		We;
	mS(xe, (ve, Ae) => {
		++ye, Ae === y && (We = ve.props.interval)
	});
	const $t = Ey(We),
		Qe = g.useCallback(ve => {
			if (P) return;
			let Ae = ee - 1;
			if (Ae < 0) {
				if (!Y) return;
				Ae = ye - 1
			}
			ce.current = "prev", E == null || E(Ae, ve)
		}, [P, ee, E, Y, ye]),
		Pe = Xa(ve => {
			if (P) return;
			let Ae = ee + 1;
			if (Ae >= ye) {
				if (!Y) return;
				Ae = 0
			}
			ce.current = "next", E == null || E(Ae, ve)
		}),
		yt = g.useRef();
	g.useImperativeHandle(i, () => ({
		element: yt.current,
		prev: Qe,
		next: Pe
	}));
	const At = Xa(() => {
			!document.hidden && yS(yt.current) && (F ? Qe() : Pe())
		}),
		Ce = T === "next" ? "start" : "end";
	sS(() => {
		f || (S == null || S(ee, Ce), C == null || C(ee, Ce))
	}, [ee]);
	const xn = `${K}-item-${T}`,
		Ie = `${K}-item-${Ce}`,
		Pl = g.useCallback(ve => {
			Cf(ve), S == null || S(ee, Ce)
		}, [S, ee, Ce]),
		Za = g.useCallback(() => {
			ue(!1), C == null || C(ee, Ce)
		}, [C, ee, Ce]),
		Yt = g.useCallback(ve => {
			if (A && !/input|textarea/i.test(ve.target.tagName)) switch (ve.key) {
				case "ArrowLeft":
					ve.preventDefault(), F ? Pe(ve) : Qe(ve);
					return;
				case "ArrowRight":
					ve.preventDefault(), F ? Qe(ve) : Pe(ve);
					return
			}
			w == null || w(ve)
		}, [A, w, Qe, Pe, F]),
		It = g.useCallback(ve => {
			D === "hover" && J(!0), $ == null || $(ve)
		}, [D, $]),
		Ja = g.useCallback(ve => {
			J(!1), _ == null || _(ve)
		}, [_]),
		Vn = g.useRef(0),
		on = g.useRef(0),
		xa = hS(),
		sn = g.useCallback(ve => {
			Vn.current = ve.touches[0].clientX, on.current = 0, D === "hover" && J(!0), Q == null || Q(ve)
		}, [D, Q]),
		nt = g.useCallback(ve => {
			ve.touches && ve.touches.length > 1 ? on.current = 0 : on.current = ve.touches[0].clientX - Vn.current, Z == null || Z(ve)
		}, [Z]),
		jt = g.useCallback(ve => {
			if (q) {
				const Ae = on.current;
				Math.abs(Ae) > vS && (Ae > 0 ? Qe(ve) : Pe(ve))
			}
			D === "hover" && xa.set(() => {
				J(!1)
			}, R || void 0), I == null || I(ve)
		}, [q, D, Qe, Pe, xa, R, I]),
		ct = R != null && !W && !P,
		Il = g.useRef();
	g.useEffect(() => {
		var ve, Ae;
		if (!ct) return;
		const gt = F ? Qe : Pe;
		return Il.current = window.setInterval(document.visibilityState ? At : gt, (ve = (Ae = $t.current) != null ? Ae : R) != null ? ve : void 0), () => {
			Il.current !== null && clearInterval(Il.current)
		}
	}, [ct, Qe, Pe, $t, R, At, F]);
	const Ti = g.useMemo(() => p && Array.from({
		length: ye
	}, (ve, Ae) => gt => {
		E == null || E(Ae, gt)
	}), [p, ye, E]);
	return x.jsxs(u, {
		ref: yt,
		...B,
		onKeyDown: Yt,
		onMouseOver: It,
		onMouseOut: Ja,
		onTouchStart: sn,
		onTouchMove: nt,
		onTouchEnd: jt,
		className: ie(we, K, f && "slide", d && `${K}-fade`, he && `${K}-${he}`),
		children: [p && x.jsx("div", {
			className: `${K}-indicators`,
			children: dv(xe, (ve, Ae) => x.jsx("button", {
				type: "button",
				"data-bs-target": "",
				"aria-label": h != null && h.length ? h[Ae] : `Slide ${Ae+1}`,
				className: Ae === ee ? "active" : void 0,
				onClick: Ti ? Ti[Ae] : void 0,
				"aria-current": Ae === ee
			}, Ae))
		}), x.jsx("div", {
			className: `${K}-inner`,
			children: dv(xe, (ve, Ae) => {
				const gt = Ae === ee;
				return f ? x.jsx(bi, {
					in: gt,
					onEnter: gt ? Pl : void 0,
					onEntered: gt ? Za : void 0,
					addEndListener: uo,
					children: (Dt, Fa) => g.cloneElement(ve, {
						...Fa,
						className: ie(ve.props.className, gt && Dt !== "entered" && xn, (Dt === "entered" || Dt === "exiting") && "active", (Dt === "entering" || Dt === "exiting") && Ie)
					})
				}) : g.cloneElement(ve, {
					className: ie(ve.props.className, gt && "active")
				})
			})
		}), m && x.jsxs(x.Fragment, {
			children: [(Y || y !== 0) && x.jsxs(si, {
				className: `${K}-control-prev`,
				onClick: Qe,
				children: [te, se && x.jsx("span", {
					className: "visually-hidden",
					children: se
				})]
			}), (Y || y !== ye - 1) && x.jsxs(si, {
				className: `${K}-control-next`,
				onClick: Pe,
				children: [ae, le && x.jsx("span", {
					className: "visually-hidden",
					children: le
				})]
			})]
		})]
	})
});
Ly.displayName = "Carousel";
const Ha = Object.assign(Ly, {
	Caption: zy,
	Item: By
});

function gS({
	as: a,
	bsPrefix: l,
	className: i,
	...u
}) {
	l = de(l, "col");
	const s = SE(),
		f = RE(),
		d = [],
		m = [];
	return s.forEach(p => {
		const h = u[p];
		delete u[p];
		let y, E, S;
		typeof h == "object" && h != null ? {
			span: y,
			offset: E,
			order: S
		} = h : y = h;
		const C = p !== f ? `-${p}` : "";
		y && d.push(y === !0 ? `${l}${C}` : `${l}${C}-${y}`), S != null && m.push(`order${C}-${S}`), E != null && m.push(`offset${C}-${E}`)
	}), [{
		...u,
		className: ie(i, ...d, ...m)
	}, {
		as: a,
		bsPrefix: l,
		spans: d
	}]
}
const Hy = g.forwardRef((a, l) => {
	const [{
		className: i,
		...u
	}, {
		as: s = "div",
		bsPrefix: f,
		spans: d
	}] = gS(a);
	return x.jsx(s, {
		...u,
		ref: l,
		className: ie(i, !d.length && f)
	})
});
Hy.displayName = "Col";
const Qu = g.forwardRef(({
	bsPrefix: a,
	fluid: l = !1,
	as: i = "div",
	className: u,
	...s
}, f) => {
	const d = de(a, "container"),
		m = typeof l == "string" ? `-${l}` : "-fluid";
	return x.jsx(i, {
		ref: f,
		...s,
		className: ie(u, l ? `${d}${m}` : d)
	})
});
Qu.displayName = "Container";
var bS = Function.prototype.bind.call(Function.prototype.call, [].slice);

function Bn(a, l) {
	return bS(a.querySelectorAll(l))
}

function xS(a, l, i) {
	const u = g.useRef(a !== void 0),
		[s, f] = g.useState(l),
		d = a !== void 0,
		m = u.current;
	return u.current = d, !d && m && s !== l && f(l), [d ? a : s, g.useCallback((...p) => {
		const [h, ...y] = p;
		let E = i == null ? void 0 : i(h, ...y);
		return f(h), E
	}, [i])]
}

function qy() {
	const [, a] = g.useReducer(l => l + 1, 0);
	return a
}
const oo = g.createContext(null);
var hv = Object.prototype.hasOwnProperty;

function mv(a, l, i) {
	for (i of a.keys())
		if (li(i, l)) return i
}

function li(a, l) {
	var i, u, s;
	if (a === l) return !0;
	if (a && l && (i = a.constructor) === l.constructor) {
		if (i === Date) return a.getTime() === l.getTime();
		if (i === RegExp) return a.toString() === l.toString();
		if (i === Array) {
			if ((u = a.length) === l.length)
				for (; u-- && li(a[u], l[u]););
			return u === -1
		}
		if (i === Set) {
			if (a.size !== l.size) return !1;
			for (u of a)
				if (s = u, s && typeof s == "object" && (s = mv(l, s), !s) || !l.has(s)) return !1;
			return !0
		}
		if (i === Map) {
			if (a.size !== l.size) return !1;
			for (u of a)
				if (s = u[0], s && typeof s == "object" && (s = mv(l, s), !s) || !li(u[1], l.get(s))) return !1;
			return !0
		}
		if (i === ArrayBuffer) a = new Uint8Array(a), l = new Uint8Array(l);
		else if (i === DataView) {
			if ((u = a.byteLength) === l.byteLength)
				for (; u-- && a.getInt8(u) === l.getInt8(u););
			return u === -1
		}
		if (ArrayBuffer.isView(a)) {
			if ((u = a.byteLength) === l.byteLength)
				for (; u-- && a[u] === l[u];);
			return u === -1
		}
		if (!i || typeof a == "object") {
			u = 0;
			for (i in a)
				if (hv.call(a, i) && ++u && !hv.call(l, i) || !(i in l) || !li(a[i], l[i])) return !1;
			return Object.keys(l).length === u
		}
	}
	return a !== a && l !== l
}

function ES(a) {
	const l = Sy();
	return [a[0], g.useCallback(i => {
		if (l()) return a[1](i)
	}, [l, a[1]])]
}
var Tt = "top",
	Wt = "bottom",
	Pt = "right",
	wt = "left",
	zf = "auto",
	xi = [Tt, Wt, Pt, wt],
	Gl = "start",
	ci = "end",
	SS = "clippingParents",
	$y = "viewport",
	ti = "popper",
	RS = "reference",
	pv = xi.reduce(function (a, l) {
		return a.concat([l + "-" + Gl, l + "-" + ci])
	}, []),
	Yy = [].concat(xi, [zf]).reduce(function (a, l) {
		return a.concat([l, l + "-" + Gl, l + "-" + ci])
	}, []),
	OS = "beforeRead",
	TS = "read",
	wS = "afterRead",
	CS = "beforeMain",
	NS = "main",
	AS = "afterMain",
	jS = "beforeWrite",
	DS = "write",
	MS = "afterWrite",
	_S = [OS, TS, wS, CS, NS, AS, jS, DS, MS];

function vn(a) {
	return a.split("-")[0]
}

function qt(a) {
	if (a == null) return window;
	if (a.toString() !== "[object Window]") {
		var l = a.ownerDocument;
		return l && l.defaultView || window
	}
	return a
}

function ka(a) {
	var l = qt(a).Element;
	return a instanceof l || a instanceof Element
}

function yn(a) {
	var l = qt(a).HTMLElement;
	return a instanceof l || a instanceof HTMLElement
}

function Bf(a) {
	if (typeof ShadowRoot > "u") return !1;
	var l = qt(a).ShadowRoot;
	return a instanceof l || a instanceof ShadowRoot
}
var Ya = Math.max,
	Ku = Math.min,
	Xl = Math.round;

function df() {
	var a = navigator.userAgentData;
	return a != null && a.brands && Array.isArray(a.brands) ? a.brands.map(function (l) {
		return l.brand + "/" + l.version
	}).join(" ") : navigator.userAgent
}

function Gy() {
	return !/^((?!chrome|android).)*safari/i.test(df())
}

function kl(a, l, i) {
	l === void 0 && (l = !1), i === void 0 && (i = !1);
	var u = a.getBoundingClientRect(),
		s = 1,
		f = 1;
	l && yn(a) && (s = a.offsetWidth > 0 && Xl(u.width) / a.offsetWidth || 1, f = a.offsetHeight > 0 && Xl(u.height) / a.offsetHeight || 1);
	var d = ka(a) ? qt(a) : window,
		m = d.visualViewport,
		p = !Gy() && i,
		h = (u.left + (p && m ? m.offsetLeft : 0)) / s,
		y = (u.top + (p && m ? m.offsetTop : 0)) / f,
		E = u.width / s,
		S = u.height / f;
	return {
		width: E,
		height: S,
		top: y,
		right: h + E,
		bottom: y + S,
		left: h,
		x: h,
		y
	}
}

function Lf(a) {
	var l = kl(a),
		i = a.offsetWidth,
		u = a.offsetHeight;
	return Math.abs(l.width - i) <= 1 && (i = l.width), Math.abs(l.height - u) <= 1 && (u = l.height), {
		x: a.offsetLeft,
		y: a.offsetTop,
		width: i,
		height: u
	}
}

function Xy(a, l) {
	var i = l.getRootNode && l.getRootNode();
	if (a.contains(l)) return !0;
	if (i && Bf(i)) {
		var u = l;
		do {
			if (u && a.isSameNode(u)) return !0;
			u = u.parentNode || u.host
		} while (u)
	}
	return !1
}

function ya(a) {
	return a ? (a.nodeName || "").toLowerCase() : null
}

function Yn(a) {
	return qt(a).getComputedStyle(a)
}

function US(a) {
	return ["table", "td", "th"].indexOf(ya(a)) >= 0
}

function ba(a) {
	return ((ka(a) ? a.ownerDocument : a.document) || window.document).documentElement
}

function so(a) {
	return ya(a) === "html" ? a : a.assignedSlot || a.parentNode || (Bf(a) ? a.host : null) || ba(a)
}

function vv(a) {
	return !yn(a) || Yn(a).position === "fixed" ? null : a.offsetParent
}

function zS(a) {
	var l = /firefox/i.test(df()),
		i = /Trident/i.test(df());
	if (i && yn(a)) {
		var u = Yn(a);
		if (u.position === "fixed") return null
	}
	var s = so(a);
	for (Bf(s) && (s = s.host); yn(s) && ["html", "body"].indexOf(ya(s)) < 0;) {
		var f = Yn(s);
		if (f.transform !== "none" || f.perspective !== "none" || f.contain === "paint" || ["transform", "perspective"].indexOf(f.willChange) !== -1 || l && f.willChange === "filter" || l && f.filter && f.filter !== "none") return s;
		s = s.parentNode
	}
	return null
}

function Ei(a) {
	for (var l = qt(a), i = vv(a); i && US(i) && Yn(i).position === "static";) i = vv(i);
	return i && (ya(i) === "html" || ya(i) === "body" && Yn(i).position === "static") ? l : i || zS(a) || l
}

function Hf(a) {
	return ["top", "bottom"].indexOf(a) >= 0 ? "x" : "y"
}

function ri(a, l, i) {
	return Ya(a, Ku(l, i))
}

function BS(a, l, i) {
	var u = ri(a, l, i);
	return u > i ? i : u
}

function ky() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	}
}

function Vy(a) {
	return Object.assign({}, ky(), a)
}

function Qy(a, l) {
	return l.reduce(function (i, u) {
		return i[u] = a, i
	}, {})
}
var LS = function (l, i) {
	return l = typeof l == "function" ? l(Object.assign({}, i.rects, {
		placement: i.placement
	})) : l, Vy(typeof l != "number" ? l : Qy(l, xi))
};

function HS(a) {
	var l, i = a.state,
		u = a.name,
		s = a.options,
		f = i.elements.arrow,
		d = i.modifiersData.popperOffsets,
		m = vn(i.placement),
		p = Hf(m),
		h = [wt, Pt].indexOf(m) >= 0,
		y = h ? "height" : "width";
	if (!(!f || !d)) {
		var E = LS(s.padding, i),
			S = Lf(f),
			C = p === "y" ? Tt : wt,
			R = p === "y" ? Wt : Pt,
			A = i.rects.reference[y] + i.rects.reference[p] - d[p] - i.rects.popper[y],
			w = d[p] - i.rects.reference[p],
			D = Ei(f),
			$ = D ? p === "y" ? D.clientHeight || 0 : D.clientWidth || 0 : 0,
			_ = A / 2 - w / 2,
			Y = E[C],
			q = $ - S[y] - E[R],
			Q = $ / 2 - S[y] / 2 + _,
			Z = ri(Y, Q, q),
			I = p;
		i.modifiersData[u] = (l = {}, l[I] = Z, l.centerOffset = Z - Q, l)
	}
}

function qS(a) {
	var l = a.state,
		i = a.options,
		u = i.element,
		s = u === void 0 ? "[data-popper-arrow]" : u;
	s != null && (typeof s == "string" && (s = l.elements.popper.querySelector(s), !s) || Xy(l.elements.popper, s) && (l.elements.arrow = s))
}
const $S = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: HS,
	effect: qS,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};

function Vl(a) {
	return a.split("-")[1]
}
var YS = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};

function GS(a, l) {
	var i = a.x,
		u = a.y,
		s = l.devicePixelRatio || 1;
	return {
		x: Xl(i * s) / s || 0,
		y: Xl(u * s) / s || 0
	}
}

function yv(a) {
	var l, i = a.popper,
		u = a.popperRect,
		s = a.placement,
		f = a.variation,
		d = a.offsets,
		m = a.position,
		p = a.gpuAcceleration,
		h = a.adaptive,
		y = a.roundOffsets,
		E = a.isFixed,
		S = d.x,
		C = S === void 0 ? 0 : S,
		R = d.y,
		A = R === void 0 ? 0 : R,
		w = typeof y == "function" ? y({
			x: C,
			y: A
		}) : {
			x: C,
			y: A
		};
	C = w.x, A = w.y;
	var D = d.hasOwnProperty("x"),
		$ = d.hasOwnProperty("y"),
		_ = wt,
		Y = Tt,
		q = window;
	if (h) {
		var Q = Ei(i),
			Z = "clientHeight",
			I = "clientWidth";
		if (Q === qt(i) && (Q = ba(i), Yn(Q).position !== "static" && m === "absolute" && (Z = "scrollHeight", I = "scrollWidth")), Q = Q, s === Tt || (s === wt || s === Pt) && f === ci) {
			Y = Wt;
			var te = E && Q === q && q.visualViewport ? q.visualViewport.height : Q[Z];
			A -= te - u.height, A *= p ? 1 : -1
		}
		if (s === wt || (s === Tt || s === Wt) && f === ci) {
			_ = Pt;
			var se = E && Q === q && q.visualViewport ? q.visualViewport.width : Q[I];
			C -= se - u.width, C *= p ? 1 : -1
		}
	}
	var ae = Object.assign({
			position: m
		}, h && YS),
		le = y === !0 ? GS({
			x: C,
			y: A
		}, qt(i)) : {
			x: C,
			y: A
		};
	if (C = le.x, A = le.y, p) {
		var he;
		return Object.assign({}, ae, (he = {}, he[Y] = $ ? "0" : "", he[_] = D ? "0" : "", he.transform = (q.devicePixelRatio || 1) <= 1 ? "translate(" + C + "px, " + A + "px)" : "translate3d(" + C + "px, " + A + "px, 0)", he))
	}
	return Object.assign({}, ae, (l = {}, l[Y] = $ ? A + "px" : "", l[_] = D ? C + "px" : "", l.transform = "", l))
}

function XS(a) {
	var l = a.state,
		i = a.options,
		u = i.gpuAcceleration,
		s = u === void 0 ? !0 : u,
		f = i.adaptive,
		d = f === void 0 ? !0 : f,
		m = i.roundOffsets,
		p = m === void 0 ? !0 : m,
		h = {
			placement: vn(l.placement),
			variation: Vl(l.placement),
			popper: l.elements.popper,
			popperRect: l.rects.popper,
			gpuAcceleration: s,
			isFixed: l.options.strategy === "fixed"
		};
	l.modifiersData.popperOffsets != null && (l.styles.popper = Object.assign({}, l.styles.popper, yv(Object.assign({}, h, {
		offsets: l.modifiersData.popperOffsets,
		position: l.options.strategy,
		adaptive: d,
		roundOffsets: p
	})))), l.modifiersData.arrow != null && (l.styles.arrow = Object.assign({}, l.styles.arrow, yv(Object.assign({}, h, {
		offsets: l.modifiersData.arrow,
		position: "absolute",
		adaptive: !1,
		roundOffsets: p
	})))), l.attributes.popper = Object.assign({}, l.attributes.popper, {
		"data-popper-placement": l.placement
	})
}
const kS = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: XS,
	data: {}
};
var Hu = {
	passive: !0
};

function VS(a) {
	var l = a.state,
		i = a.instance,
		u = a.options,
		s = u.scroll,
		f = s === void 0 ? !0 : s,
		d = u.resize,
		m = d === void 0 ? !0 : d,
		p = qt(l.elements.popper),
		h = [].concat(l.scrollParents.reference, l.scrollParents.popper);
	return f && h.forEach(function (y) {
			y.addEventListener("scroll", i.update, Hu)
		}), m && p.addEventListener("resize", i.update, Hu),
		function () {
			f && h.forEach(function (y) {
				y.removeEventListener("scroll", i.update, Hu)
			}), m && p.removeEventListener("resize", i.update, Hu)
		}
}
const QS = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function () {},
	effect: VS,
	data: {}
};
var KS = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};

function Yu(a) {
	return a.replace(/left|right|bottom|top/g, function (l) {
		return KS[l]
	})
}
var ZS = {
	start: "end",
	end: "start"
};

function gv(a) {
	return a.replace(/start|end/g, function (l) {
		return ZS[l]
	})
}

function qf(a) {
	var l = qt(a),
		i = l.pageXOffset,
		u = l.pageYOffset;
	return {
		scrollLeft: i,
		scrollTop: u
	}
}

function $f(a) {
	return kl(ba(a)).left + qf(a).scrollLeft
}

function JS(a, l) {
	var i = qt(a),
		u = ba(a),
		s = i.visualViewport,
		f = u.clientWidth,
		d = u.clientHeight,
		m = 0,
		p = 0;
	if (s) {
		f = s.width, d = s.height;
		var h = Gy();
		(h || !h && l === "fixed") && (m = s.offsetLeft, p = s.offsetTop)
	}
	return {
		width: f,
		height: d,
		x: m + $f(a),
		y: p
	}
}

function FS(a) {
	var l, i = ba(a),
		u = qf(a),
		s = (l = a.ownerDocument) == null ? void 0 : l.body,
		f = Ya(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
		d = Ya(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
		m = -u.scrollLeft + $f(a),
		p = -u.scrollTop;
	return Yn(s || i).direction === "rtl" && (m += Ya(i.clientWidth, s ? s.clientWidth : 0) - f), {
		width: f,
		height: d,
		x: m,
		y: p
	}
}

function Yf(a) {
	var l = Yn(a),
		i = l.overflow,
		u = l.overflowX,
		s = l.overflowY;
	return /auto|scroll|overlay|hidden/.test(i + s + u)
}

function Ky(a) {
	return ["html", "body", "#document"].indexOf(ya(a)) >= 0 ? a.ownerDocument.body : yn(a) && Yf(a) ? a : Ky(so(a))
}

function ii(a, l) {
	var i;
	l === void 0 && (l = []);
	var u = Ky(a),
		s = u === ((i = a.ownerDocument) == null ? void 0 : i.body),
		f = qt(u),
		d = s ? [f].concat(f.visualViewport || [], Yf(u) ? u : []) : u,
		m = l.concat(d);
	return s ? m : m.concat(ii(so(d)))
}

function hf(a) {
	return Object.assign({}, a, {
		left: a.x,
		top: a.y,
		right: a.x + a.width,
		bottom: a.y + a.height
	})
}

function WS(a, l) {
	var i = kl(a, !1, l === "fixed");
	return i.top = i.top + a.clientTop, i.left = i.left + a.clientLeft, i.bottom = i.top + a.clientHeight, i.right = i.left + a.clientWidth, i.width = a.clientWidth, i.height = a.clientHeight, i.x = i.left, i.y = i.top, i
}

function bv(a, l, i) {
	return l === $y ? hf(JS(a, i)) : ka(l) ? WS(l, i) : hf(FS(ba(a)))
}

function PS(a) {
	var l = ii(so(a)),
		i = ["absolute", "fixed"].indexOf(Yn(a).position) >= 0,
		u = i && yn(a) ? Ei(a) : a;
	return ka(u) ? l.filter(function (s) {
		return ka(s) && Xy(s, u) && ya(s) !== "body"
	}) : []
}

function IS(a, l, i, u) {
	var s = l === "clippingParents" ? PS(a) : [].concat(l),
		f = [].concat(s, [i]),
		d = f[0],
		m = f.reduce(function (p, h) {
			var y = bv(a, h, u);
			return p.top = Ya(y.top, p.top), p.right = Ku(y.right, p.right), p.bottom = Ku(y.bottom, p.bottom), p.left = Ya(y.left, p.left), p
		}, bv(a, d, u));
	return m.width = m.right - m.left, m.height = m.bottom - m.top, m.x = m.left, m.y = m.top, m
}

function Zy(a) {
	var l = a.reference,
		i = a.element,
		u = a.placement,
		s = u ? vn(u) : null,
		f = u ? Vl(u) : null,
		d = l.x + l.width / 2 - i.width / 2,
		m = l.y + l.height / 2 - i.height / 2,
		p;
	switch (s) {
		case Tt:
			p = {
				x: d,
				y: l.y - i.height
			};
			break;
		case Wt:
			p = {
				x: d,
				y: l.y + l.height
			};
			break;
		case Pt:
			p = {
				x: l.x + l.width,
				y: m
			};
			break;
		case wt:
			p = {
				x: l.x - i.width,
				y: m
			};
			break;
		default:
			p = {
				x: l.x,
				y: l.y
			}
	}
	var h = s ? Hf(s) : null;
	if (h != null) {
		var y = h === "y" ? "height" : "width";
		switch (f) {
			case Gl:
				p[h] = p[h] - (l[y] / 2 - i[y] / 2);
				break;
			case ci:
				p[h] = p[h] + (l[y] / 2 - i[y] / 2);
				break
		}
	}
	return p
}

function fi(a, l) {
	l === void 0 && (l = {});
	var i = l,
		u = i.placement,
		s = u === void 0 ? a.placement : u,
		f = i.strategy,
		d = f === void 0 ? a.strategy : f,
		m = i.boundary,
		p = m === void 0 ? SS : m,
		h = i.rootBoundary,
		y = h === void 0 ? $y : h,
		E = i.elementContext,
		S = E === void 0 ? ti : E,
		C = i.altBoundary,
		R = C === void 0 ? !1 : C,
		A = i.padding,
		w = A === void 0 ? 0 : A,
		D = Vy(typeof w != "number" ? w : Qy(w, xi)),
		$ = S === ti ? RS : ti,
		_ = a.rects.popper,
		Y = a.elements[R ? $ : S],
		q = IS(ka(Y) ? Y : Y.contextElement || ba(a.elements.popper), p, y, d),
		Q = kl(a.elements.reference),
		Z = Zy({
			reference: Q,
			element: _,
			placement: s
		}),
		I = hf(Object.assign({}, _, Z)),
		te = S === ti ? I : Q,
		se = {
			top: q.top - te.top + D.top,
			bottom: te.bottom - q.bottom + D.bottom,
			left: q.left - te.left + D.left,
			right: te.right - q.right + D.right
		},
		ae = a.modifiersData.offset;
	if (S === ti && ae) {
		var le = ae[s];
		Object.keys(se).forEach(function (he) {
			var we = [Pt, Wt].indexOf(he) >= 0 ? 1 : -1,
				xe = [Tt, Wt].indexOf(he) >= 0 ? "y" : "x";
			se[he] += le[xe] * we
		})
	}
	return se
}

function eR(a, l) {
	l === void 0 && (l = {});
	var i = l,
		u = i.placement,
		s = i.boundary,
		f = i.rootBoundary,
		d = i.padding,
		m = i.flipVariations,
		p = i.allowedAutoPlacements,
		h = p === void 0 ? Yy : p,
		y = Vl(u),
		E = y ? m ? pv : pv.filter(function (R) {
			return Vl(R) === y
		}) : xi,
		S = E.filter(function (R) {
			return h.indexOf(R) >= 0
		});
	S.length === 0 && (S = E);
	var C = S.reduce(function (R, A) {
		return R[A] = fi(a, {
			placement: A,
			boundary: s,
			rootBoundary: f,
			padding: d
		})[vn(A)], R
	}, {});
	return Object.keys(C).sort(function (R, A) {
		return C[R] - C[A]
	})
}

function tR(a) {
	if (vn(a) === zf) return [];
	var l = Yu(a);
	return [gv(a), l, gv(l)]
}

function nR(a) {
	var l = a.state,
		i = a.options,
		u = a.name;
	if (!l.modifiersData[u]._skip) {
		for (var s = i.mainAxis, f = s === void 0 ? !0 : s, d = i.altAxis, m = d === void 0 ? !0 : d, p = i.fallbackPlacements, h = i.padding, y = i.boundary, E = i.rootBoundary, S = i.altBoundary, C = i.flipVariations, R = C === void 0 ? !0 : C, A = i.allowedAutoPlacements, w = l.options.placement, D = vn(w), $ = D === w, _ = p || ($ || !R ? [Yu(w)] : tR(w)), Y = [w].concat(_).reduce(function (P, ue) {
				return P.concat(vn(ue) === zf ? eR(l, {
					placement: ue,
					boundary: y,
					rootBoundary: E,
					padding: h,
					flipVariations: R,
					allowedAutoPlacements: A
				}) : ue)
			}, []), q = l.rects.reference, Q = l.rects.popper, Z = new Map, I = !0, te = Y[0], se = 0; se < Y.length; se++) {
			var ae = Y[se],
				le = vn(ae),
				he = Vl(ae) === Gl,
				we = [Tt, Wt].indexOf(le) >= 0,
				xe = we ? "width" : "height",
				B = fi(l, {
					placement: ae,
					boundary: y,
					rootBoundary: E,
					altBoundary: S,
					padding: h
				}),
				K = we ? he ? Pt : wt : he ? Wt : Tt;
			q[xe] > Q[xe] && (K = Yu(K));
			var F = Yu(K),
				ce = [];
			if (f && ce.push(B[le] <= 0), m && ce.push(B[K] <= 0, B[F] <= 0), ce.every(function (P) {
					return P
				})) {
				te = ae, I = !1;
				break
			}
			Z.set(ae, ce)
		}
		if (I)
			for (var T = R ? 3 : 1, X = function (ue) {
					var ee = Y.find(function (Xe) {
						var ye = Z.get(Xe);
						if (ye) return ye.slice(0, ue).every(function (We) {
							return We
						})
					});
					if (ee) return te = ee, "break"
				}, W = T; W > 0; W--) {
				var J = X(W);
				if (J === "break") break
			}
		l.placement !== te && (l.modifiersData[u]._skip = !0, l.placement = te, l.reset = !0)
	}
}
const aR = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: nR,
	requiresIfExists: ["offset"],
	data: {
		_skip: !1
	}
};

function xv(a, l, i) {
	return i === void 0 && (i = {
		x: 0,
		y: 0
	}), {
		top: a.top - l.height - i.y,
		right: a.right - l.width + i.x,
		bottom: a.bottom - l.height + i.y,
		left: a.left - l.width - i.x
	}
}

function Ev(a) {
	return [Tt, Pt, Wt, wt].some(function (l) {
		return a[l] >= 0
	})
}

function lR(a) {
	var l = a.state,
		i = a.name,
		u = l.rects.reference,
		s = l.rects.popper,
		f = l.modifiersData.preventOverflow,
		d = fi(l, {
			elementContext: "reference"
		}),
		m = fi(l, {
			altBoundary: !0
		}),
		p = xv(d, u),
		h = xv(m, s, f),
		y = Ev(p),
		E = Ev(h);
	l.modifiersData[i] = {
		referenceClippingOffsets: p,
		popperEscapeOffsets: h,
		isReferenceHidden: y,
		hasPopperEscaped: E
	}, l.attributes.popper = Object.assign({}, l.attributes.popper, {
		"data-popper-reference-hidden": y,
		"data-popper-escaped": E
	})
}
const rR = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: lR
};

function iR(a, l, i) {
	var u = vn(a),
		s = [wt, Tt].indexOf(u) >= 0 ? -1 : 1,
		f = typeof i == "function" ? i(Object.assign({}, l, {
			placement: a
		})) : i,
		d = f[0],
		m = f[1];
	return d = d || 0, m = (m || 0) * s, [wt, Pt].indexOf(u) >= 0 ? {
		x: m,
		y: d
	} : {
		x: d,
		y: m
	}
}

function uR(a) {
	var l = a.state,
		i = a.options,
		u = a.name,
		s = i.offset,
		f = s === void 0 ? [0, 0] : s,
		d = Yy.reduce(function (y, E) {
			return y[E] = iR(E, l.rects, f), y
		}, {}),
		m = d[l.placement],
		p = m.x,
		h = m.y;
	l.modifiersData.popperOffsets != null && (l.modifiersData.popperOffsets.x += p, l.modifiersData.popperOffsets.y += h), l.modifiersData[u] = d
}
const oR = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: uR
};

function sR(a) {
	var l = a.state,
		i = a.name;
	l.modifiersData[i] = Zy({
		reference: l.rects.reference,
		element: l.rects.popper,
		placement: l.placement
	})
}
const cR = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: sR,
	data: {}
};

function fR(a) {
	return a === "x" ? "y" : "x"
}

function dR(a) {
	var l = a.state,
		i = a.options,
		u = a.name,
		s = i.mainAxis,
		f = s === void 0 ? !0 : s,
		d = i.altAxis,
		m = d === void 0 ? !1 : d,
		p = i.boundary,
		h = i.rootBoundary,
		y = i.altBoundary,
		E = i.padding,
		S = i.tether,
		C = S === void 0 ? !0 : S,
		R = i.tetherOffset,
		A = R === void 0 ? 0 : R,
		w = fi(l, {
			boundary: p,
			rootBoundary: h,
			padding: E,
			altBoundary: y
		}),
		D = vn(l.placement),
		$ = Vl(l.placement),
		_ = !$,
		Y = Hf(D),
		q = fR(Y),
		Q = l.modifiersData.popperOffsets,
		Z = l.rects.reference,
		I = l.rects.popper,
		te = typeof A == "function" ? A(Object.assign({}, l.rects, {
			placement: l.placement
		})) : A,
		se = typeof te == "number" ? {
			mainAxis: te,
			altAxis: te
		} : Object.assign({
			mainAxis: 0,
			altAxis: 0
		}, te),
		ae = l.modifiersData.offset ? l.modifiersData.offset[l.placement] : null,
		le = {
			x: 0,
			y: 0
		};
	if (Q) {
		if (f) {
			var he, we = Y === "y" ? Tt : wt,
				xe = Y === "y" ? Wt : Pt,
				B = Y === "y" ? "height" : "width",
				K = Q[Y],
				F = K + w[we],
				ce = K - w[xe],
				T = C ? -I[B] / 2 : 0,
				X = $ === Gl ? Z[B] : I[B],
				W = $ === Gl ? -I[B] : -Z[B],
				J = l.elements.arrow,
				P = C && J ? Lf(J) : {
					width: 0,
					height: 0
				},
				ue = l.modifiersData["arrow#persistent"] ? l.modifiersData["arrow#persistent"].padding : ky(),
				ee = ue[we],
				Xe = ue[xe],
				ye = ri(0, Z[B], P[B]),
				We = _ ? Z[B] / 2 - T - ye - ee - se.mainAxis : X - ye - ee - se.mainAxis,
				$t = _ ? -Z[B] / 2 + T + ye + Xe + se.mainAxis : W + ye + Xe + se.mainAxis,
				Qe = l.elements.arrow && Ei(l.elements.arrow),
				Pe = Qe ? Y === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0,
				yt = (he = ae == null ? void 0 : ae[Y]) != null ? he : 0,
				At = K + We - yt - Pe,
				Ce = K + $t - yt,
				xn = ri(C ? Ku(F, At) : F, K, C ? Ya(ce, Ce) : ce);
			Q[Y] = xn, le[Y] = xn - K
		}
		if (m) {
			var Ie, Pl = Y === "x" ? Tt : wt,
				Za = Y === "x" ? Wt : Pt,
				Yt = Q[q],
				It = q === "y" ? "height" : "width",
				Ja = Yt + w[Pl],
				Vn = Yt - w[Za],
				on = [Tt, wt].indexOf(D) !== -1,
				xa = (Ie = ae == null ? void 0 : ae[q]) != null ? Ie : 0,
				sn = on ? Ja : Yt - Z[It] - I[It] - xa + se.altAxis,
				nt = on ? Yt + Z[It] + I[It] - xa - se.altAxis : Vn,
				jt = C && on ? BS(sn, Yt, nt) : ri(C ? sn : Ja, Yt, C ? nt : Vn);
			Q[q] = jt, le[q] = jt - Yt
		}
		l.modifiersData[u] = le
	}
}
const hR = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: dR,
	requiresIfExists: ["offset"]
};

function mR(a) {
	return {
		scrollLeft: a.scrollLeft,
		scrollTop: a.scrollTop
	}
}

function pR(a) {
	return a === qt(a) || !yn(a) ? qf(a) : mR(a)
}

function vR(a) {
	var l = a.getBoundingClientRect(),
		i = Xl(l.width) / a.offsetWidth || 1,
		u = Xl(l.height) / a.offsetHeight || 1;
	return i !== 1 || u !== 1
}

function yR(a, l, i) {
	i === void 0 && (i = !1);
	var u = yn(l),
		s = yn(l) && vR(l),
		f = ba(l),
		d = kl(a, s, i),
		m = {
			scrollLeft: 0,
			scrollTop: 0
		},
		p = {
			x: 0,
			y: 0
		};
	return (u || !u && !i) && ((ya(l) !== "body" || Yf(f)) && (m = pR(l)), yn(l) ? (p = kl(l, !0), p.x += l.clientLeft, p.y += l.clientTop) : f && (p.x = $f(f))), {
		x: d.left + m.scrollLeft - p.x,
		y: d.top + m.scrollTop - p.y,
		width: d.width,
		height: d.height
	}
}

function gR(a) {
	var l = new Map,
		i = new Set,
		u = [];
	a.forEach(function (f) {
		l.set(f.name, f)
	});

	function s(f) {
		i.add(f.name);
		var d = [].concat(f.requires || [], f.requiresIfExists || []);
		d.forEach(function (m) {
			if (!i.has(m)) {
				var p = l.get(m);
				p && s(p)
			}
		}), u.push(f)
	}
	return a.forEach(function (f) {
		i.has(f.name) || s(f)
	}), u
}

function bR(a) {
	var l = gR(a);
	return _S.reduce(function (i, u) {
		return i.concat(l.filter(function (s) {
			return s.phase === u
		}))
	}, [])
}

function xR(a) {
	var l;
	return function () {
		return l || (l = new Promise(function (i) {
			Promise.resolve().then(function () {
				l = void 0, i(a())
			})
		})), l
	}
}

function ER(a) {
	var l = a.reduce(function (i, u) {
		var s = i[u.name];
		return i[u.name] = s ? Object.assign({}, s, u, {
			options: Object.assign({}, s.options, u.options),
			data: Object.assign({}, s.data, u.data)
		}) : u, i
	}, {});
	return Object.keys(l).map(function (i) {
		return l[i]
	})
}
var Sv = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};

function Rv() {
	for (var a = arguments.length, l = new Array(a), i = 0; i < a; i++) l[i] = arguments[i];
	return !l.some(function (u) {
		return !(u && typeof u.getBoundingClientRect == "function")
	})
}

function SR(a) {
	a === void 0 && (a = {});
	var l = a,
		i = l.defaultModifiers,
		u = i === void 0 ? [] : i,
		s = l.defaultOptions,
		f = s === void 0 ? Sv : s;
	return function (m, p, h) {
		h === void 0 && (h = f);
		var y = {
				placement: "bottom",
				orderedModifiers: [],
				options: Object.assign({}, Sv, f),
				modifiersData: {},
				elements: {
					reference: m,
					popper: p
				},
				attributes: {},
				styles: {}
			},
			E = [],
			S = !1,
			C = {
				state: y,
				setOptions: function (D) {
					var $ = typeof D == "function" ? D(y.options) : D;
					A(), y.options = Object.assign({}, f, y.options, $), y.scrollParents = {
						reference: ka(m) ? ii(m) : m.contextElement ? ii(m.contextElement) : [],
						popper: ii(p)
					};
					var _ = bR(ER([].concat(u, y.options.modifiers)));
					return y.orderedModifiers = _.filter(function (Y) {
						return Y.enabled
					}), R(), C.update()
				},
				forceUpdate: function () {
					if (!S) {
						var D = y.elements,
							$ = D.reference,
							_ = D.popper;
						if (Rv($, _)) {
							y.rects = {
								reference: yR($, Ei(_), y.options.strategy === "fixed"),
								popper: Lf(_)
							}, y.reset = !1, y.placement = y.options.placement, y.orderedModifiers.forEach(function (se) {
								return y.modifiersData[se.name] = Object.assign({}, se.data)
							});
							for (var Y = 0; Y < y.orderedModifiers.length; Y++) {
								if (y.reset === !0) {
									y.reset = !1, Y = -1;
									continue
								}
								var q = y.orderedModifiers[Y],
									Q = q.fn,
									Z = q.options,
									I = Z === void 0 ? {} : Z,
									te = q.name;
								typeof Q == "function" && (y = Q({
									state: y,
									options: I,
									name: te,
									instance: C
								}) || y)
							}
						}
					}
				},
				update: xR(function () {
					return new Promise(function (w) {
						C.forceUpdate(), w(y)
					})
				}),
				destroy: function () {
					A(), S = !0
				}
			};
		if (!Rv(m, p)) return C;
		C.setOptions(h).then(function (w) {
			!S && h.onFirstUpdate && h.onFirstUpdate(w)
		});

		function R() {
			y.orderedModifiers.forEach(function (w) {
				var D = w.name,
					$ = w.options,
					_ = $ === void 0 ? {} : $,
					Y = w.effect;
				if (typeof Y == "function") {
					var q = Y({
							state: y,
							name: D,
							instance: C,
							options: _
						}),
						Q = function () {};
					E.push(q || Q)
				}
			})
		}

		function A() {
			E.forEach(function (w) {
				return w()
			}), E = []
		}
		return C
	}
}
const RR = SR({
		defaultModifiers: [rR, cR, kS, QS, oR, aR, hR, $S]
	}),
	OR = ["enabled", "placement", "strategy", "modifiers"];

function TR(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}
const wR = {
		name: "applyStyles",
		enabled: !1,
		phase: "afterWrite",
		fn: () => {}
	},
	CR = {
		name: "ariaDescribedBy",
		enabled: !0,
		phase: "afterWrite",
		effect: ({
			state: a
		}) => () => {
			const {
				reference: l,
				popper: i
			} = a.elements;
			if ("removeAttribute" in l) {
				const u = (l.getAttribute("aria-describedby") || "").split(",").filter(s => s.trim() !== i.id);
				u.length ? l.setAttribute("aria-describedby", u.join(",")) : l.removeAttribute("aria-describedby")
			}
		},
		fn: ({
			state: a
		}) => {
			var l;
			const {
				popper: i,
				reference: u
			} = a.elements, s = (l = i.getAttribute("role")) == null ? void 0 : l.toLowerCase();
			if (i.id && s === "tooltip" && "setAttribute" in u) {
				const f = u.getAttribute("aria-describedby");
				if (f && f.split(",").indexOf(i.id) !== -1) return;
				u.setAttribute("aria-describedby", f ? `${f},${i.id}` : i.id)
			}
		}
	},
	NR = [];

function AR(a, l, i = {}) {
	let {
		enabled: u = !0,
		placement: s = "bottom",
		strategy: f = "absolute",
		modifiers: d = NR
	} = i, m = TR(i, OR);
	const p = g.useRef(d),
		h = g.useRef(),
		y = g.useCallback(() => {
			var w;
			(w = h.current) == null || w.update()
		}, []),
		E = g.useCallback(() => {
			var w;
			(w = h.current) == null || w.forceUpdate()
		}, []),
		[S, C] = ES(g.useState({
			placement: s,
			update: y,
			forceUpdate: E,
			attributes: {},
			styles: {
				popper: {},
				arrow: {}
			}
		})),
		R = g.useMemo(() => ({
			name: "updateStateModifier",
			enabled: !0,
			phase: "write",
			requires: ["computeStyles"],
			fn: ({
				state: w
			}) => {
				const D = {},
					$ = {};
				Object.keys(w.elements).forEach(_ => {
					D[_] = w.styles[_], $[_] = w.attributes[_]
				}), C({
					state: w,
					styles: D,
					attributes: $,
					update: y,
					forceUpdate: E,
					placement: w.placement
				})
			}
		}), [y, E, C]),
		A = g.useMemo(() => (li(p.current, d) || (p.current = d), p.current), [d]);
	return g.useEffect(() => {
		!h.current || !u || h.current.setOptions({
			placement: s,
			strategy: f,
			modifiers: [...A, R, wR]
		})
	}, [f, s, R, u, A]), g.useEffect(() => {
		if (!(!u || a == null || l == null)) return h.current = RR(a, l, Object.assign({}, m, {
			placement: s,
			strategy: f,
			modifiers: [...A, CR, R]
		})), () => {
			h.current != null && (h.current.destroy(), h.current = void 0, C(w => Object.assign({}, w, {
				attributes: {},
				styles: {
					popper: {}
				}
			})))
		}
	}, [u, a, l]), S
}

function Zu(a, l) {
	if (a.contains) return a.contains(l);
	if (a.compareDocumentPosition) return a === l || !!(a.compareDocumentPosition(l) & 16)
}
var Zc, Ov;

function jR() {
	if (Ov) return Zc;
	Ov = 1;
	var a = function () {};
	return Zc = a, Zc
}
var DR = jR();
const MR = mi(DR),
	Tv = () => {};

function _R(a) {
	return a.button === 0
}

function UR(a) {
	return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey)
}
const Jc = a => a && ("current" in a ? a.current : a),
	wv = {
		click: "mousedown",
		mouseup: "mousedown",
		pointerup: "pointerdown"
	};

function zR(a, l = Tv, {
	disabled: i,
	clickTrigger: u = "click"
} = {}) {
	const s = g.useRef(!1),
		f = g.useRef(!1),
		d = g.useCallback(h => {
			const y = Jc(a);
			MR(!!y, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"), s.current = !y || UR(h) || !_R(h) || !!Zu(y, h.target) || f.current, f.current = !1
		}, [a]),
		m = mt(h => {
			const y = Jc(a);
			y && Zu(y, h.target) ? f.current = !0 : f.current = !1
		}),
		p = mt(h => {
			s.current || l(h)
		});
	g.useEffect(() => {
		var h, y;
		if (i || a == null) return;
		const E = ro(Jc(a)),
			S = E.defaultView || window;
		let C = (h = S.event) != null ? h : (y = S.parent) == null ? void 0 : y.event,
			R = null;
		wv[u] && (R = va(E, wv[u], m, !0));
		const A = va(E, u, d, !0),
			w = va(E, u, $ => {
				if ($ === C) {
					C = void 0;
					return
				}
				p($)
			});
		let D = [];
		return "ontouchstart" in E.documentElement && (D = [].slice.call(E.body.children).map($ => va($, "mousemove", Tv))), () => {
			R == null || R(), A(), w(), D.forEach($ => $())
		}
	}, [a, i, u, d, m, p])
}

function BR(a) {
	const l = {};
	return Array.isArray(a) ? (a == null || a.forEach(i => {
		l[i.name] = i
	}), l) : a || l
}

function LR(a = {}) {
	return Array.isArray(a) ? a : Object.keys(a).map(l => (a[l].name = l, a[l]))
}

function HR({
	enabled: a,
	enableEvents: l,
	placement: i,
	flip: u,
	offset: s,
	fixed: f,
	containerPadding: d,
	arrowElement: m,
	popperConfig: p = {}
}) {
	var h, y, E, S, C;
	const R = BR(p.modifiers);
	return Object.assign({}, p, {
		placement: i,
		enabled: a,
		strategy: f ? "fixed" : p.strategy,
		modifiers: LR(Object.assign({}, R, {
			eventListeners: {
				enabled: l,
				options: (h = R.eventListeners) == null ? void 0 : h.options
			},
			preventOverflow: Object.assign({}, R.preventOverflow, {
				options: d ? Object.assign({
					padding: d
				}, (y = R.preventOverflow) == null ? void 0 : y.options) : (E = R.preventOverflow) == null ? void 0 : E.options
			}),
			offset: {
				options: Object.assign({
					offset: s
				}, (S = R.offset) == null ? void 0 : S.options)
			},
			arrow: Object.assign({}, R.arrow, {
				enabled: !!m,
				options: Object.assign({}, (C = R.arrow) == null ? void 0 : C.options, {
					element: m
				})
			}),
			flip: Object.assign({
				enabled: !!u
			}, R.flip)
		}))
	})
}
const qR = ["children", "usePopper"];

function $R(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}
const YR = () => {};

function Jy(a = {}) {
	const l = g.useContext(oo),
		[i, u] = ZE(),
		s = g.useRef(!1),
		{
			flip: f,
			offset: d,
			rootCloseEvent: m,
			fixed: p = !1,
			placement: h,
			popperConfig: y = {},
			enableEventListeners: E = !0,
			usePopper: S = !!l
		} = a,
		C = (l == null ? void 0 : l.show) == null ? !!a.show : l.show;
	C && !s.current && (s.current = !0);
	const R = Q => {
			l == null || l.toggle(!1, Q)
		},
		{
			placement: A,
			setMenu: w,
			menuElement: D,
			toggleElement: $
		} = l || {},
		_ = AR($, D, HR({
			placement: h || A || "bottom-start",
			enabled: S,
			enableEvents: E ?? C,
			offset: d,
			flip: f,
			fixed: p,
			arrowElement: i,
			popperConfig: y
		})),
		Y = Object.assign({
			ref: w || YR,
			"aria-labelledby": $ == null ? void 0 : $.id
		}, _.attributes.popper, {
			style: _.styles.popper
		}),
		q = {
			show: C,
			placement: A,
			hasShown: s.current,
			toggle: l == null ? void 0 : l.toggle,
			popper: S ? _ : null,
			arrowProps: S ? Object.assign({
				ref: u
			}, _.attributes.arrow, {
				style: _.styles.arrow
			}) : {}
		};
	return zR(D, R, {
		clickTrigger: m,
		disabled: !C
	}), [Y, q]
}

function Fy(a) {
	let {
		children: l,
		usePopper: i = !0
	} = a, u = $R(a, qR);
	const [s, f] = Jy(Object.assign({}, u, {
		usePopper: i
	}));
	return x.jsx(x.Fragment, {
		children: l(s, f)
	})
}
Fy.displayName = "DropdownMenu";
const Wy = {
		prefix: String(Math.round(Math.random() * 1e10)),
		current: 0
	},
	Py = $e.createContext(Wy),
	GR = $e.createContext(!1);
let Fc = new WeakMap;

function XR(a = !1) {
	let l = g.useContext(Py),
		i = g.useRef(null);
	if (i.current === null && !a) {
		var u, s;
		let f = (s = $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || s === void 0 || (u = s.ReactCurrentOwner) === null || u === void 0 ? void 0 : u.current;
		if (f) {
			let d = Fc.get(f);
			d == null ? Fc.set(f, {
				id: l.current,
				state: f.memoizedState
			}) : f.memoizedState !== d.state && (l.current = d.id, Fc.delete(f))
		}
		i.current = ++l.current
	}
	return i.current
}

function kR(a) {
	let l = g.useContext(Py),
		i = XR(!!a),
		u = `react-aria${l.prefix}`;
	return a || `${u}-${i}`
}

function VR(a) {
	let l = $e.useId(),
		[i] = g.useState(FR()),
		u = i ? "react-aria" : `react-aria${Wy.prefix}`;
	return a || `${u}-${l}`
}
const QR = typeof $e.useId == "function" ? VR : kR;

function KR() {
	return !1
}

function ZR() {
	return !0
}

function JR(a) {
	return () => {}
}

function FR() {
	return typeof $e.useSyncExternalStore == "function" ? $e.useSyncExternalStore(JR, KR, ZR) : g.useContext(GR)
}
const Iy = a => {
		var l;
		return ((l = a.getAttribute("role")) == null ? void 0 : l.toLowerCase()) === "menu"
	},
	Cv = () => {};

function eg() {
	const a = QR(),
		{
			show: l = !1,
			toggle: i = Cv,
			setToggle: u,
			menuElement: s
		} = g.useContext(oo) || {},
		f = g.useCallback(m => {
			i(!l, m)
		}, [l, i]),
		d = {
			id: a,
			ref: u || Cv,
			onClick: f,
			"aria-expanded": !!l
		};
	return s && Iy(s) && (d["aria-haspopup"] = !0), [d, {
		show: l,
		toggle: i
	}]
}

function tg({
	children: a
}) {
	const [l, i] = eg();
	return x.jsx(x.Fragment, {
		children: a(l, i)
	})
}
tg.displayName = "DropdownToggle";
const Va = g.createContext(null),
	di = (a, l = null) => a != null ? String(a) : l || null,
	co = g.createContext(null);
co.displayName = "NavContext";
const WR = "data-rr-ui-",
	PR = "rrUi";

function Jl(a) {
	return `${WR}${a}`
}

function IR(a) {
	return `${PR}${a}`
}
const eO = ["eventKey", "disabled", "onClick", "active", "as"];

function tO(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}

function ng({
	key: a,
	href: l,
	active: i,
	disabled: u,
	onClick: s
}) {
	const f = g.useContext(Va),
		d = g.useContext(co),
		{
			activeKey: m
		} = d || {},
		p = di(a, l),
		h = i == null && a != null ? di(m) === p : i;
	return [{
		onClick: mt(E => {
			u || (s == null || s(E), f && !E.isPropagationStopped() && f(p, E))
		}),
		"aria-disabled": u || void 0,
		"aria-selected": h,
		[Jl("dropdown-item")]: ""
	}, {
		isActive: h
	}]
}
const ag = g.forwardRef((a, l) => {
	let {
		eventKey: i,
		disabled: u,
		onClick: s,
		active: f,
		as: d = Df
	} = a, m = tO(a, eO);
	const [p] = ng({
		key: i,
		href: m.href,
		disabled: u,
		onClick: s,
		active: f
	});
	return x.jsx(d, Object.assign({}, m, {
		ref: l
	}, p))
});
ag.displayName = "DropdownItem";
const lg = g.createContext(io ? window : void 0);
lg.Provider;

function fo() {
	return g.useContext(lg)
}

function Nv() {
	const a = qy(),
		l = g.useRef(null),
		i = g.useCallback(u => {
			l.current = u, a()
		}, [a]);
	return [l, i]
}

function Si({
	defaultShow: a,
	show: l,
	onSelect: i,
	onToggle: u,
	itemSelector: s = `* [${Jl("dropdown-item")}]`,
	focusFirstItemOnShow: f,
	placement: d = "bottom-start",
	children: m
}) {
	const p = fo(),
		[h, y] = xS(l, a, u),
		[E, S] = Nv(),
		C = E.current,
		[R, A] = Nv(),
		w = R.current,
		D = Ry(h),
		$ = g.useRef(null),
		_ = g.useRef(!1),
		Y = g.useContext(Va),
		q = g.useCallback((ae, le, he = le == null ? void 0 : le.type) => {
			y(ae, {
				originalEvent: le,
				source: he
			})
		}, [y]),
		Q = mt((ae, le) => {
			i == null || i(ae, le), q(!1, le, "select"), le.isPropagationStopped() || Y == null || Y(ae, le)
		}),
		Z = g.useMemo(() => ({
			toggle: q,
			placement: d,
			show: h,
			menuElement: C,
			toggleElement: w,
			setMenu: S,
			setToggle: A
		}), [q, d, h, C, w, S, A]);
	C && D && !h && (_.current = C.contains(C.ownerDocument.activeElement));
	const I = mt(() => {
			w && w.focus && w.focus()
		}),
		te = mt(() => {
			const ae = $.current;
			let le = f;
			if (le == null && (le = E.current && Iy(E.current) ? "keyboard" : !1), le === !1 || le === "keyboard" && !/^key.+$/.test(ae)) return;
			const he = Bn(E.current, s)[0];
			he && he.focus && he.focus()
		});
	g.useEffect(() => {
		h ? te() : _.current && (_.current = !1, I())
	}, [h, _, I, te]), g.useEffect(() => {
		$.current = null
	});
	const se = (ae, le) => {
		if (!E.current) return null;
		const he = Bn(E.current, s);
		let we = he.indexOf(ae) + le;
		return we = Math.max(0, Math.min(we, he.length)), he[we]
	};
	return FE(g.useCallback(() => p.document, [p]), "keydown", ae => {
		var le, he;
		const {
			key: we
		} = ae, xe = ae.target, B = (le = E.current) == null ? void 0 : le.contains(xe), K = (he = R.current) == null ? void 0 : he.contains(xe);
		if (/input|textarea/i.test(xe.tagName) && (we === " " || we !== "Escape" && B || we === "Escape" && xe.type === "search") || !B && !K || we === "Tab" && (!E.current || !h)) return;
		$.current = ae.type;
		const ce = {
			originalEvent: ae,
			source: ae.type
		};
		switch (we) {
			case "ArrowUp": {
				const T = se(xe, -1);
				T && T.focus && T.focus(), ae.preventDefault();
				return
			}
			case "ArrowDown":
				if (ae.preventDefault(), !h) y(!0, ce);
				else {
					const T = se(xe, 1);
					T && T.focus && T.focus()
				}
				return;
			case "Tab":
				by(xe.ownerDocument, "keyup", T => {
					var X;
					(T.key === "Tab" && !T.target || !((X = E.current) != null && X.contains(T.target))) && y(!1, ce)
				}, {
					once: !0
				});
				break;
			case "Escape":
				we === "Escape" && (ae.preventDefault(), ae.stopPropagation()), y(!1, ce);
				break
		}
	}), x.jsx(Va.Provider, {
		value: Q,
		children: x.jsx(oo.Provider, {
			value: Z,
			children: m
		})
	})
}
Si.displayName = "Dropdown";
Si.Menu = Fy;
Si.Toggle = tg;
Si.Item = ag;
const Gf = g.createContext({});
Gf.displayName = "DropdownContext";
const rg = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "hr",
	role: u = "separator",
	...s
}, f) => (l = de(l, "dropdown-divider"), x.jsx(i, {
	ref: f,
	className: ie(a, l),
	role: u,
	...s
})));
rg.displayName = "DropdownDivider";
const ig = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "div",
	role: u = "heading",
	...s
}, f) => (l = de(l, "dropdown-header"), x.jsx(i, {
	ref: f,
	className: ie(a, l),
	role: u,
	...s
})));
ig.displayName = "DropdownHeader";
const ug = g.forwardRef(({
	bsPrefix: a,
	className: l,
	eventKey: i,
	disabled: u = !1,
	onClick: s,
	active: f,
	as: d = si,
	...m
}, p) => {
	const h = de(a, "dropdown-item"),
		[y, E] = ng({
			key: i,
			href: m.href,
			disabled: u,
			onClick: s,
			active: f
		});
	return x.jsx(d, {
		...m,
		...y,
		ref: p,
		className: ie(l, h, E.isActive && "active", u && "disabled")
	})
});
ug.displayName = "DropdownItem";
const og = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "span",
	...u
}, s) => (l = de(l, "dropdown-item-text"), x.jsx(i, {
	ref: s,
	className: ie(a, l),
	...u
})));
og.displayName = "DropdownItemText";
const nO = typeof global < "u" && global.navigator && global.navigator.product === "ReactNative",
	aO = typeof document < "u",
	sg = aO || nO ? g.useLayoutEffect : g.useEffect,
	Xf = g.createContext(null);
Xf.displayName = "InputGroupContext";
const Ka = g.createContext(null);
Ka.displayName = "NavbarContext";

function cg(a, l) {
	return a
}

function fg(a, l, i) {
	const u = i ? "top-end" : "top-start",
		s = i ? "top-start" : "top-end",
		f = i ? "bottom-end" : "bottom-start",
		d = i ? "bottom-start" : "bottom-end",
		m = i ? "right-start" : "left-start",
		p = i ? "right-end" : "left-end",
		h = i ? "left-start" : "right-start",
		y = i ? "left-end" : "right-end";
	let E = a ? d : f;
	return l === "up" ? E = a ? s : u : l === "end" ? E = a ? y : h : l === "start" ? E = a ? p : m : l === "down-centered" ? E = "bottom" : l === "up-centered" && (E = "top"), E
}
const dg = g.forwardRef(({
	bsPrefix: a,
	className: l,
	align: i,
	rootCloseEvent: u,
	flip: s = !0,
	show: f,
	renderOnMount: d,
	as: m = "div",
	popperConfig: p,
	variant: h,
	...y
}, E) => {
	let S = !1;
	const C = g.useContext(Ka),
		R = de(a, "dropdown-menu"),
		{
			align: A,
			drop: w,
			isRTL: D
		} = g.useContext(Gf);
	i = i || A;
	const $ = g.useContext(Xf),
		_ = [];
	if (i)
		if (typeof i == "object") {
			const ae = Object.keys(i);
			if (ae.length) {
				const le = ae[0],
					he = i[le];
				S = he === "start", _.push(`${R}-${le}-${he}`)
			}
		} else i === "end" && (S = !0);
	const Y = fg(S, w, D),
		[q, {
			hasShown: Q,
			popper: Z,
			show: I,
			toggle: te
		}] = Jy({
			flip: s,
			rootCloseEvent: u,
			show: f,
			usePopper: !C && _.length === 0,
			offset: [0, 2],
			popperConfig: p,
			placement: Y
		});
	if (q.ref = Nf(cg(E), q.ref), sg(() => {
			I && (Z == null || Z.update())
		}, [I]), !Q && !d && !$) return null;
	typeof m != "string" && (q.show = I, q.close = () => te == null ? void 0 : te(!1), q.align = i);
	let se = y.style;
	return Z != null && Z.placement && (se = {
		...y.style,
		...q.style
	}, y["x-placement"] = Z.placement), x.jsx(m, {
		...y,
		...q,
		style: se,
		...(_.length || C) && {
			"data-bs-popper": "static"
		},
		className: ie(l, R, I && "show", S && `${R}-end`, h && `${R}-${h}`, ..._)
	})
});
dg.displayName = "DropdownMenu";
const hg = g.forwardRef(({
	bsPrefix: a,
	split: l,
	className: i,
	childBsPrefix: u,
	as: s = rn,
	...f
}, d) => {
	const m = de(a, "dropdown-toggle"),
		p = g.useContext(oo);
	u !== void 0 && (f.bsPrefix = u);
	const [h] = eg();
	return h.ref = Nf(h.ref, cg(d)), x.jsx(s, {
		className: ie(i, m, l && `${m}-split`, (p == null ? void 0 : p.show) && "show"),
		...h,
		...f
	})
});
hg.displayName = "DropdownToggle";
const mg = g.forwardRef((a, l) => {
	const {
		bsPrefix: i,
		drop: u = "down",
		show: s,
		className: f,
		align: d = "start",
		onSelect: m,
		onToggle: p,
		focusFirstItemOnShow: h,
		as: y = "div",
		navbar: E,
		autoClose: S = !0,
		...C
	} = lo(a, {
		show: "onToggle"
	}), R = g.useContext(Xf), A = de(i, "dropdown"), w = yy(), D = Z => S === !1 ? Z === "click" : S === "inside" ? Z !== "rootClose" : S === "outside" ? Z !== "select" : !0, $ = Xa((Z, I) => {
		var te;
		!((te = I.originalEvent) == null || (te = te.target) == null) && te.classList.contains("dropdown-toggle") && I.source === "mousedown" || (I.originalEvent.currentTarget === document && (I.source !== "keydown" || I.originalEvent.key === "Escape") && (I.source = "rootClose"), D(I.source) && (p == null || p(Z, I)))
	}), Y = fg(d === "end", u, w), q = g.useMemo(() => ({
		align: d,
		drop: u,
		isRTL: w
	}), [d, u, w]), Q = {
		down: A,
		"down-centered": `${A}-center`,
		up: "dropup",
		"up-centered": "dropup-center dropup",
		end: "dropend",
		start: "dropstart"
	};
	return x.jsx(Gf.Provider, {
		value: q,
		children: x.jsx(Si, {
			placement: Y,
			show: s,
			onSelect: m,
			onToggle: $,
			focusFirstItemOnShow: h,
			itemSelector: `.${A}-item:not(.disabled):not(:disabled)`,
			children: R ? C.children : x.jsx(y, {
				...C,
				ref: l,
				className: ie(f, s && "show", Q[u])
			})
		})
	})
});
mg.displayName = "Dropdown";
const an = Object.assign(mg, {
	Toggle: hg,
	Menu: dg,
	Item: ug,
	ItemText: og,
	Divider: rg,
	Header: ig
});
Ot.string, Ot.bool, Ot.bool, Ot.bool, Ot.bool;
const Yl = g.forwardRef(({
	bsPrefix: a,
	className: l,
	fluid: i = !1,
	rounded: u = !1,
	roundedCircle: s = !1,
	thumbnail: f = !1,
	...d
}, m) => (a = de(a, "img"), x.jsx("img", {
	ref: m,
	...d,
	className: ie(l, i && `${a}-fluid`, u && "rounded", s && "rounded-circle", f && `${a}-thumbnail`)
})));
Yl.displayName = "Image";
const lO = {
		type: Ot.string,
		tooltip: Ot.bool,
		as: Ot.elementType
	},
	ho = g.forwardRef(({
		as: a = "div",
		className: l,
		type: i = "valid",
		tooltip: u = !1,
		...s
	}, f) => x.jsx(a, {
		...s,
		ref: f,
		className: ie(l, `${i}-${u?"tooltip":"feedback"}`)
	}));
ho.displayName = "Feedback";
ho.propTypes = lO;
const Gn = g.createContext({}),
	kf = g.forwardRef(({
		id: a,
		bsPrefix: l,
		className: i,
		type: u = "checkbox",
		isValid: s = !1,
		isInvalid: f = !1,
		as: d = "input",
		...m
	}, p) => {
		const {
			controlId: h
		} = g.useContext(Gn);
		return l = de(l, "form-check-input"), x.jsx(d, {
			...m,
			ref: p,
			type: u,
			id: a || h,
			className: ie(i, l, s && "is-valid", f && "is-invalid")
		})
	});
kf.displayName = "FormCheckInput";
const Ju = g.forwardRef(({
	bsPrefix: a,
	className: l,
	htmlFor: i,
	...u
}, s) => {
	const {
		controlId: f
	} = g.useContext(Gn);
	return a = de(a, "form-check-label"), x.jsx("label", {
		...u,
		ref: s,
		htmlFor: i || f,
		className: ie(l, a)
	})
});
Ju.displayName = "FormCheckLabel";
const pg = g.forwardRef(({
	id: a,
	bsPrefix: l,
	bsSwitchPrefix: i,
	inline: u = !1,
	reverse: s = !1,
	disabled: f = !1,
	isValid: d = !1,
	isInvalid: m = !1,
	feedbackTooltip: p = !1,
	feedback: h,
	feedbackType: y,
	className: E,
	style: S,
	title: C = "",
	type: R = "checkbox",
	label: A,
	children: w,
	as: D = "input",
	...$
}, _) => {
	l = de(l, "form-check"), i = de(i, "form-switch");
	const {
		controlId: Y
	} = g.useContext(Gn), q = g.useMemo(() => ({
		controlId: a || Y
	}), [Y, a]), Q = !w && A != null && A !== !1 || pS(w, Ju), Z = x.jsx(kf, {
		...$,
		type: R === "switch" ? "checkbox" : R,
		ref: _,
		isValid: d,
		isInvalid: m,
		disabled: f,
		as: D
	});
	return x.jsx(Gn.Provider, {
		value: q,
		children: x.jsx("div", {
			style: S,
			className: ie(E, Q && l, u && `${l}-inline`, s && `${l}-reverse`, R === "switch" && i),
			children: w || x.jsxs(x.Fragment, {
				children: [Z, Q && x.jsx(Ju, {
					title: C,
					children: A
				}), h && x.jsx(ho, {
					type: y,
					tooltip: p,
					children: h
				})]
			})
		})
	})
});
pg.displayName = "FormCheck";
const Fu = Object.assign(pg, {
		Input: kf,
		Label: Ju
	}),
	vg = g.forwardRef(({
		bsPrefix: a,
		type: l,
		size: i,
		htmlSize: u,
		id: s,
		className: f,
		isValid: d = !1,
		isInvalid: m = !1,
		plaintext: p,
		readOnly: h,
		as: y = "input",
		...E
	}, S) => {
		const {
			controlId: C
		} = g.useContext(Gn);
		return a = de(a, "form-control"), x.jsx(y, {
			...E,
			type: l,
			size: u,
			ref: S,
			readOnly: h,
			id: s || C,
			className: ie(f, p ? `${a}-plaintext` : a, i && `${a}-${i}`, l === "color" && `${a}-color`, d && "is-valid", m && "is-invalid")
		})
	});
vg.displayName = "FormControl";
const rO = Object.assign(vg, {
		Feedback: ho
	}),
	yg = g.forwardRef(({
		className: a,
		bsPrefix: l,
		as: i = "div",
		...u
	}, s) => (l = de(l, "form-floating"), x.jsx(i, {
		ref: s,
		className: ie(a, l),
		...u
	})));
yg.displayName = "FormFloating";
const Vf = g.forwardRef(({
	controlId: a,
	as: l = "div",
	...i
}, u) => {
	const s = g.useMemo(() => ({
		controlId: a
	}), [a]);
	return x.jsx(Gn.Provider, {
		value: s,
		children: x.jsx(l, {
			...i,
			ref: u
		})
	})
});
Vf.displayName = "FormGroup";
const gg = g.forwardRef(({
	as: a = "label",
	bsPrefix: l,
	column: i = !1,
	visuallyHidden: u = !1,
	className: s,
	htmlFor: f,
	...d
}, m) => {
	const {
		controlId: p
	} = g.useContext(Gn);
	l = de(l, "form-label");
	let h = "col-form-label";
	typeof i == "string" && (h = `${h} ${h}-${i}`);
	const y = ie(s, l, u && "visually-hidden", i && h);
	return f = f || p, i ? x.jsx(Hy, {
		ref: m,
		as: "label",
		className: y,
		htmlFor: f,
		...d
	}) : x.jsx(a, {
		ref: m,
		className: y,
		htmlFor: f,
		...d
	})
});
gg.displayName = "FormLabel";
const bg = g.forwardRef(({
	bsPrefix: a,
	className: l,
	id: i,
	...u
}, s) => {
	const {
		controlId: f
	} = g.useContext(Gn);
	return a = de(a, "form-range"), x.jsx("input", {
		...u,
		type: "range",
		ref: s,
		className: ie(l, a),
		id: i || f
	})
});
bg.displayName = "FormRange";
const xg = g.forwardRef(({
	bsPrefix: a,
	size: l,
	htmlSize: i,
	className: u,
	isValid: s = !1,
	isInvalid: f = !1,
	id: d,
	...m
}, p) => {
	const {
		controlId: h
	} = g.useContext(Gn);
	return a = de(a, "form-select"), x.jsx("select", {
		...m,
		size: i,
		ref: p,
		className: ie(u, a, l && `${a}-${l}`, s && "is-valid", f && "is-invalid"),
		id: d || h
	})
});
xg.displayName = "FormSelect";
const Eg = g.forwardRef(({
	bsPrefix: a,
	className: l,
	as: i = "small",
	muted: u,
	...s
}, f) => (a = de(a, "form-text"), x.jsx(i, {
	...s,
	ref: f,
	className: ie(l, a, u && "text-muted")
})));
Eg.displayName = "FormText";
const Sg = g.forwardRef((a, l) => x.jsx(Fu, {
	...a,
	ref: l,
	type: "switch"
}));
Sg.displayName = "Switch";
const iO = Object.assign(Sg, {
		Input: Fu.Input,
		Label: Fu.Label
	}),
	Rg = g.forwardRef(({
		bsPrefix: a,
		className: l,
		children: i,
		controlId: u,
		label: s,
		...f
	}, d) => (a = de(a, "form-floating"), x.jsxs(Vf, {
		ref: d,
		className: ie(l, a),
		controlId: u,
		...f,
		children: [i, x.jsx("label", {
			htmlFor: u,
			children: s
		})]
	})));
Rg.displayName = "FloatingLabel";
const uO = {
		_ref: Ot.any,
		validated: Ot.bool,
		as: Ot.elementType
	},
	Qf = g.forwardRef(({
		className: a,
		validated: l,
		as: i = "form",
		...u
	}, s) => x.jsx(i, {
		...u,
		ref: s,
		className: ie(a, l && "was-validated")
	}));
Qf.displayName = "Form";
Qf.propTypes = uO;
const pe = Object.assign(Qf, {
		Group: Vf,
		Control: rO,
		Floating: yg,
		Check: Fu,
		Switch: iO,
		Label: gg,
		Text: Eg,
		Range: bg,
		Select: xg,
		FloatingLabel: Rg
	}),
	Av = a => !a || typeof a == "function" ? a : l => {
		a.current = l
	};

function oO(a, l) {
	const i = Av(a),
		u = Av(l);
	return s => {
		i && i(s), u && u(s)
	}
}

function mo(a, l) {
	return g.useMemo(() => oO(a, l), [a, l])
}
const Og = g.createContext(null),
	sO = ["as", "active", "eventKey"];

function cO(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}

function Tg({
	key: a,
	onClick: l,
	active: i,
	id: u,
	role: s,
	disabled: f
}) {
	const d = g.useContext(Va),
		m = g.useContext(co),
		p = g.useContext(Og);
	let h = i;
	const y = {
		role: s
	};
	if (m) {
		!s && m.role === "tablist" && (y.role = "tab");
		const E = m.getControllerId(a ?? null),
			S = m.getControlledId(a ?? null);
		y[Jl("event-key")] = a, y.id = E || u, h = i == null && a != null ? m.activeKey === a : i, (h || !(p != null && p.unmountOnExit) && !(p != null && p.mountOnEnter)) && (y["aria-controls"] = S)
	}
	return y.role === "tab" && (y["aria-selected"] = h, h || (y.tabIndex = -1), f && (y.tabIndex = -1, y["aria-disabled"] = !0)), y.onClick = mt(E => {
		f || (l == null || l(E), a != null && d && !E.isPropagationStopped() && d(a, E))
	}), [y, {
		isActive: h
	}]
}
const wg = g.forwardRef((a, l) => {
	let {
		as: i = Df,
		active: u,
		eventKey: s
	} = a, f = cO(a, sO);
	const [d, m] = Tg(Object.assign({
		key: di(s, f.href),
		active: u
	}, f));
	return d[Jl("active")] = m.isActive, x.jsx(i, Object.assign({}, f, d, {
		ref: l
	}))
});
wg.displayName = "NavItem";
const fO = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function dO(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}
const jv = () => {},
	Dv = Jl("event-key"),
	Cg = g.forwardRef((a, l) => {
		let {
			as: i = "div",
			onSelect: u,
			activeKey: s,
			role: f,
			onKeyDown: d
		} = a, m = dO(a, fO);
		const p = qy(),
			h = g.useRef(!1),
			y = g.useContext(Va),
			E = g.useContext(Og);
		let S, C;
		E && (f = f || "tablist", s = E.activeKey, S = E.getControlledId, C = E.getControllerId);
		const R = g.useRef(null),
			A = _ => {
				const Y = R.current;
				if (!Y) return null;
				const q = Bn(Y, `[${Dv}]:not([aria-disabled=true])`),
					Q = Y.querySelector("[aria-selected=true]");
				if (!Q || Q !== document.activeElement) return null;
				const Z = q.indexOf(Q);
				if (Z === -1) return null;
				let I = Z + _;
				return I >= q.length && (I = 0), I < 0 && (I = q.length - 1), q[I]
			},
			w = (_, Y) => {
				_ != null && (u == null || u(_, Y), y == null || y(_, Y))
			},
			D = _ => {
				if (d == null || d(_), !E) return;
				let Y;
				switch (_.key) {
					case "ArrowLeft":
					case "ArrowUp":
						Y = A(-1);
						break;
					case "ArrowRight":
					case "ArrowDown":
						Y = A(1);
						break;
					default:
						return
				}
				Y && (_.preventDefault(), w(Y.dataset[IR("EventKey")] || null, _), h.current = !0, p())
			};
		g.useEffect(() => {
			if (R.current && h.current) {
				const _ = R.current.querySelector(`[${Dv}][aria-selected=true]`);
				_ == null || _.focus()
			}
			h.current = !1
		});
		const $ = mo(l, R);
		return x.jsx(Va.Provider, {
			value: w,
			children: x.jsx(co.Provider, {
				value: {
					role: f,
					activeKey: di(s),
					getControlledId: S || jv,
					getControllerId: C || jv
				},
				children: x.jsx(i, Object.assign({}, m, {
					onKeyDown: D,
					ref: $,
					role: f
				}))
			})
		})
	});
Cg.displayName = "Nav";
const hO = Object.assign(Cg, {
	Item: wg
});

function Wc(a) {
	a === void 0 && (a = ro());
	try {
		var l = a.activeElement;
		return !l || !l.nodeName ? null : l
	} catch {
		return a.body
	}
}

function mO(a) {
	const l = g.useRef(a);
	return l.current = a, l
}

function pO(a) {
	const l = mO(a);
	g.useEffect(() => () => l.current(), [])
}

function vO(a = document) {
	const l = a.defaultView;
	return Math.abs(l.innerWidth - a.documentElement.clientWidth)
}
const Mv = Jl("modal-open");
class Kf {
	constructor({
		ownerDocument: l,
		handleContainerOverflow: i = !0,
		isRTL: u = !1
	} = {}) {
		this.handleContainerOverflow = i, this.isRTL = u, this.modals = [], this.ownerDocument = l
	}
	getScrollbarWidth() {
		return vO(this.ownerDocument)
	}
	getElement() {
		return (this.ownerDocument || document).body
	}
	setModalAttributes(l) {}
	removeModalAttributes(l) {}
	setContainerStyle(l) {
		const i = {
				overflow: "hidden"
			},
			u = this.isRTL ? "paddingLeft" : "paddingRight",
			s = this.getElement();
		l.style = {
			overflow: s.style.overflow,
			[u]: s.style[u]
		}, l.scrollBarWidth && (i[u] = `${parseInt(qn(s,u)||"0",10)+l.scrollBarWidth}px`), s.setAttribute(Mv, ""), qn(s, i)
	}
	reset() {
		[...this.modals].forEach(l => this.remove(l))
	}
	removeContainerStyle(l) {
		const i = this.getElement();
		i.removeAttribute(Mv), Object.assign(i.style, l.style)
	}
	add(l) {
		let i = this.modals.indexOf(l);
		return i !== -1 || (i = this.modals.length, this.modals.push(l), this.setModalAttributes(l), i !== 0) || (this.state = {
			scrollBarWidth: this.getScrollbarWidth(),
			style: {}
		}, this.handleContainerOverflow && this.setContainerStyle(this.state)), i
	}
	remove(l) {
		const i = this.modals.indexOf(l);
		i !== -1 && (this.modals.splice(i, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(l))
	}
	isTopModal(l) {
		return !!this.modals.length && this.modals[this.modals.length - 1] === l
	}
}
const Pc = (a, l) => io ? a == null ? (l || ro()).body : (typeof a == "function" && (a = a()), a && "current" in a && (a = a.current), a && ("nodeType" in a || a.getBoundingClientRect) ? a : null) : null;

function yO(a, l) {
	const i = fo(),
		[u, s] = g.useState(() => Pc(a, i == null ? void 0 : i.document));
	if (!u) {
		const f = Pc(a);
		f && s(f)
	}
	return g.useEffect(() => {}, [l, u]), g.useEffect(() => {
		const f = Pc(a);
		f !== u && s(f)
	}, [a, u]), u
}

function gO({
	children: a,
	in: l,
	onExited: i,
	mountOnEnter: u,
	unmountOnExit: s
}) {
	const f = g.useRef(null),
		d = g.useRef(l),
		m = mt(i);
	g.useEffect(() => {
		l ? d.current = !0 : m(f.current)
	}, [l, m]);
	const p = mo(f, Zl(a)),
		h = g.cloneElement(a, {
			ref: p
		});
	return l ? h : s || !d.current && u ? null : h
}
const bO = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];

function xO(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}

function EO(a) {
	let {
		onEnter: l,
		onEntering: i,
		onEntered: u,
		onExit: s,
		onExiting: f,
		onExited: d,
		addEndListener: m,
		children: p
	} = a, h = xO(a, bO);
	const y = g.useRef(null),
		E = mo(y, Zl(p)),
		S = Y => q => {
			Y && y.current && Y(y.current, q)
		},
		C = g.useCallback(S(l), [l]),
		R = g.useCallback(S(i), [i]),
		A = g.useCallback(S(u), [u]),
		w = g.useCallback(S(s), [s]),
		D = g.useCallback(S(f), [f]),
		$ = g.useCallback(S(d), [d]),
		_ = g.useCallback(S(m), [m]);
	return Object.assign({}, h, {
		nodeRef: y
	}, l && {
		onEnter: C
	}, i && {
		onEntering: R
	}, u && {
		onEntered: A
	}, s && {
		onExit: w
	}, f && {
		onExiting: D
	}, d && {
		onExited: $
	}, m && {
		addEndListener: _
	}, {
		children: typeof p == "function" ? (Y, q) => p(Y, Object.assign({}, q, {
			ref: E
		})) : g.cloneElement(p, {
			ref: E
		})
	})
}
const SO = ["component"];

function RO(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}
const OO = g.forwardRef((a, l) => {
	let {
		component: i
	} = a, u = RO(a, SO);
	const s = EO(u);
	return x.jsx(i, Object.assign({
		ref: l
	}, s))
});

function TO({
	in: a,
	onTransition: l
}) {
	const i = g.useRef(null),
		u = g.useRef(!0),
		s = mt(l);
	return fv(() => {
		if (!i.current) return;
		let f = !1;
		return s({
			in: a,
			element: i.current,
			initial: u.current,
			isStale: () => f
		}), () => {
			f = !0
		}
	}, [a, s]), fv(() => (u.current = !1, () => {
		u.current = !0
	}), []), i
}

function wO({
	children: a,
	in: l,
	onExited: i,
	onEntered: u,
	transition: s
}) {
	const [f, d] = g.useState(!l);
	l && f && d(!1);
	const m = TO({
			in: !!l,
			onTransition: h => {
				const y = () => {
					h.isStale() || (h.in ? u == null || u(h.element, h.initial) : (d(!0), i == null || i(h.element)))
				};
				Promise.resolve(s(h)).then(y, E => {
					throw h.in || d(!0), E
				})
			}
		}),
		p = mo(m, Zl(a));
	return f && !l ? null : g.cloneElement(a, {
		ref: p
	})
}

function _v(a, l, i) {
	return a ? x.jsx(OO, Object.assign({}, i, {
		component: a
	})) : l ? x.jsx(wO, Object.assign({}, i, {
		transition: l
	})) : x.jsx(gO, Object.assign({}, i))
}
const CO = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];

function NO(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if ({}.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}
let Ic;

function AO(a) {
	return Ic || (Ic = new Kf({
		ownerDocument: a == null ? void 0 : a.document
	})), Ic
}

function jO(a) {
	const l = fo(),
		i = a || AO(l),
		u = g.useRef({
			dialog: null,
			backdrop: null
		});
	return Object.assign(u.current, {
		add: () => i.add(u.current),
		remove: () => i.remove(u.current),
		isTopModal: () => i.isTopModal(u.current),
		setDialogRef: g.useCallback(s => {
			u.current.dialog = s
		}, []),
		setBackdropRef: g.useCallback(s => {
			u.current.backdrop = s
		}, [])
	})
}
const Ng = g.forwardRef((a, l) => {
	let {
		show: i = !1,
		role: u = "dialog",
		className: s,
		style: f,
		children: d,
		backdrop: m = !0,
		keyboard: p = !0,
		onBackdropClick: h,
		onEscapeKeyDown: y,
		transition: E,
		runTransition: S,
		backdropTransition: C,
		runBackdropTransition: R,
		autoFocus: A = !0,
		enforceFocus: w = !0,
		restoreFocus: D = !0,
		restoreFocusOptions: $,
		renderDialog: _,
		renderBackdrop: Y = Ce => x.jsx("div", Object.assign({}, Ce)),
		manager: q,
		container: Q,
		onShow: Z,
		onHide: I = () => {},
		onExit: te,
		onExited: se,
		onExiting: ae,
		onEnter: le,
		onEntering: he,
		onEntered: we
	} = a, xe = NO(a, CO);
	const B = fo(),
		K = yO(Q),
		F = jO(q),
		ce = Sy(),
		T = Ry(i),
		[X, W] = g.useState(!i),
		J = g.useRef(null);
	g.useImperativeHandle(l, () => F, [F]), io && !T && i && (J.current = Wc(B == null ? void 0 : B.document)), i && X && W(!1);
	const P = mt(() => {
			if (F.add(), $t.current = va(document, "keydown", ye), We.current = va(document, "focus", () => setTimeout(ee), !0), Z && Z(), A) {
				var Ce, xn;
				const Ie = Wc((Ce = (xn = F.dialog) == null ? void 0 : xn.ownerDocument) != null ? Ce : B == null ? void 0 : B.document);
				F.dialog && Ie && !Zu(F.dialog, Ie) && (J.current = Ie, F.dialog.focus())
			}
		}),
		ue = mt(() => {
			if (F.remove(), $t.current == null || $t.current(), We.current == null || We.current(), D) {
				var Ce;
				(Ce = J.current) == null || Ce.focus == null || Ce.focus($), J.current = null
			}
		});
	g.useEffect(() => {
		!i || !K || P()
	}, [i, K, P]), g.useEffect(() => {
		X && ue()
	}, [X, ue]), pO(() => {
		ue()
	});
	const ee = mt(() => {
			if (!w || !ce() || !F.isTopModal()) return;
			const Ce = Wc(B == null ? void 0 : B.document);
			F.dialog && Ce && !Zu(F.dialog, Ce) && F.dialog.focus()
		}),
		Xe = mt(Ce => {
			Ce.target === Ce.currentTarget && (h == null || h(Ce), m === !0 && I())
		}),
		ye = mt(Ce => {
			p && BE(Ce) && F.isTopModal() && (y == null || y(Ce), Ce.defaultPrevented || I())
		}),
		We = g.useRef(),
		$t = g.useRef(),
		Qe = (...Ce) => {
			W(!0), se == null || se(...Ce)
		};
	if (!K) return null;
	const Pe = Object.assign({
		role: u,
		ref: F.setDialogRef,
		"aria-modal": u === "dialog" ? !0 : void 0
	}, xe, {
		style: f,
		className: s,
		tabIndex: -1
	});
	let yt = _ ? _(Pe) : x.jsx("div", Object.assign({}, Pe, {
		children: g.cloneElement(d, {
			role: "document"
		})
	}));
	yt = _v(E, S, {
		unmountOnExit: !0,
		mountOnEnter: !0,
		appear: !0,
		in: !!i,
		onExit: te,
		onExiting: ae,
		onExited: Qe,
		onEnter: le,
		onEntering: he,
		onEntered: we,
		children: yt
	});
	let At = null;
	return m && (At = Y({
		ref: F.setBackdropRef,
		onClick: Xe
	}), At = _v(C, R, {
		in: !!i,
		appear: !0,
		mountOnEnter: !0,
		unmountOnExit: !0,
		children: At
	})), x.jsx(x.Fragment, {
		children: $l.createPortal(x.jsxs(x.Fragment, {
			children: [At, yt]
		}), K)
	})
});
Ng.displayName = "Modal";
const DO = Object.assign(Ng, {
	Manager: Kf
});

function MO(a, l) {
	return a.classList ? a.classList.contains(l) : (" " + (a.className.baseVal || a.className) + " ").indexOf(" " + l + " ") !== -1
}

function _O(a, l) {
	a.classList ? a.classList.add(l) : MO(a, l) || (typeof a.className == "string" ? a.className = a.className + " " + l : a.setAttribute("class", (a.className && a.className.baseVal || "") + " " + l))
}

function Uv(a, l) {
	return a.replace(new RegExp("(^|\\s)" + l + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}

function UO(a, l) {
	a.classList ? a.classList.remove(l) : typeof a.className == "string" ? a.className = Uv(a.className, l) : a.setAttribute("class", Uv(a.className && a.className.baseVal || "", l))
}
const Ll = {
	FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
	STICKY_CONTENT: ".sticky-top",
	NAVBAR_TOGGLER: ".navbar-toggler"
};
class Ag extends Kf {
	adjustAndStore(l, i, u) {
		const s = i.style[l];
		i.dataset[l] = s, qn(i, {
			[l]: `${parseFloat(qn(i,l))+u}px`
		})
	}
	restore(l, i) {
		const u = i.dataset[l];
		u !== void 0 && (delete i.dataset[l], qn(i, {
			[l]: u
		}))
	}
	setContainerStyle(l) {
		super.setContainerStyle(l);
		const i = this.getElement();
		if (_O(i, "modal-open"), !l.scrollBarWidth) return;
		const u = this.isRTL ? "paddingLeft" : "paddingRight",
			s = this.isRTL ? "marginLeft" : "marginRight";
		Bn(i, Ll.FIXED_CONTENT).forEach(f => this.adjustAndStore(u, f, l.scrollBarWidth)), Bn(i, Ll.STICKY_CONTENT).forEach(f => this.adjustAndStore(s, f, -l.scrollBarWidth)), Bn(i, Ll.NAVBAR_TOGGLER).forEach(f => this.adjustAndStore(s, f, l.scrollBarWidth))
	}
	removeContainerStyle(l) {
		super.removeContainerStyle(l);
		const i = this.getElement();
		UO(i, "modal-open");
		const u = this.isRTL ? "paddingLeft" : "paddingRight",
			s = this.isRTL ? "marginLeft" : "marginRight";
		Bn(i, Ll.FIXED_CONTENT).forEach(f => this.restore(u, f)), Bn(i, Ll.STICKY_CONTENT).forEach(f => this.restore(s, f)), Bn(i, Ll.NAVBAR_TOGGLER).forEach(f => this.restore(s, f))
	}
}
let ef;

function zO(a) {
	return ef || (ef = new Ag(a)), ef
}
const jg = g.createContext({
		onHide() {}
	}),
	Dg = g.forwardRef(({
		closeLabel: a = "Close",
		closeVariant: l,
		closeButton: i = !1,
		onHide: u,
		children: s,
		...f
	}, d) => {
		const m = g.useContext(jg),
			p = Xa(() => {
				m == null || m.onHide(), u == null || u()
			});
		return x.jsxs("div", {
			ref: d,
			...f,
			children: [s, i && x.jsx(Mf, {
				"aria-label": a,
				variant: l,
				onClick: p
			})]
		})
	});
Dg.displayName = "AbstractModalHeader";
const Mg = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "div",
	...u
}, s) => (l = de(l, "nav-item"), x.jsx(i, {
	ref: s,
	className: ie(a, l),
	...u
})));
Mg.displayName = "NavItem";
const _g = g.forwardRef(({
	bsPrefix: a,
	className: l,
	as: i = si,
	active: u,
	eventKey: s,
	disabled: f = !1,
	...d
}, m) => {
	a = de(a, "nav-link");
	const [p, h] = Tg({
		key: di(s, d.href),
		active: u,
		disabled: f,
		...d
	});
	return x.jsx(i, {
		...d,
		...p,
		ref: m,
		disabled: f,
		className: ie(l, a, f && "disabled", h.isActive && "active")
	})
});
_g.displayName = "NavLink";
const Ug = g.forwardRef((a, l) => {
	const {
		as: i = "div",
		bsPrefix: u,
		variant: s,
		fill: f = !1,
		justify: d = !1,
		navbar: m,
		navbarScroll: p,
		className: h,
		activeKey: y,
		...E
	} = lo(a, {
		activeKey: "onSelect"
	}), S = de(u, "nav");
	let C, R, A = !1;
	const w = g.useContext(Ka),
		D = g.useContext(Uf);
	return w ? (C = w.bsPrefix, A = m ?? !0) : D && ({
		cardHeaderBsPrefix: R
	} = D), x.jsx(hO, {
		as: i,
		ref: l,
		activeKey: y,
		className: ie(h, {
			[S]: !A,
			[`${C}-nav`]: A,
			[`${C}-nav-scroll`]: A && p,
			[`${R}-${s}`]: !!R,
			[`${S}-${s}`]: !!s,
			[`${S}-fill`]: f,
			[`${S}-justified`]: d
		}),
		...E
	})
});
Ug.displayName = "Nav";
const Hl = Object.assign(Ug, {
		Item: Mg,
		Link: _g
	}),
	zg = g.forwardRef(({
		bsPrefix: a,
		className: l,
		as: i,
		...u
	}, s) => {
		a = de(a, "navbar-brand");
		const f = i || (u.href ? "a" : "span");
		return x.jsx(f, {
			...u,
			ref: s,
			className: ie(l, a)
		})
	});
zg.displayName = "NavbarBrand";
const Bg = g.forwardRef(({
	children: a,
	bsPrefix: l,
	...i
}, u) => {
	l = de(l, "navbar-collapse");
	const s = g.useContext(Ka);
	return x.jsx(xy, {
		in: !!(s && s.expanded),
		...i,
		children: x.jsx("div", {
			ref: u,
			className: l,
			children: a
		})
	})
});
Bg.displayName = "NavbarCollapse";
const Lg = g.forwardRef(({
	bsPrefix: a,
	className: l,
	children: i,
	label: u = "Toggle navigation",
	as: s = "button",
	onClick: f,
	...d
}, m) => {
	a = de(a, "navbar-toggler");
	const {
		onToggle: p,
		expanded: h
	} = g.useContext(Ka) || {}, y = Xa(E => {
		f && f(E), p && p()
	});
	return s === "button" && (d.type = "button"), x.jsx(s, {
		...d,
		ref: m,
		onClick: y,
		"aria-label": u,
		className: ie(l, a, !h && "collapsed"),
		children: i || x.jsx("span", {
			className: `${a}-icon`
		})
	})
});
Lg.displayName = "NavbarToggle";
const mf = new WeakMap,
	zv = (a, l) => {
		if (!a || !l) return;
		const i = mf.get(l) || new Map;
		mf.set(l, i);
		let u = i.get(a);
		return u || (u = l.matchMedia(a), u.refCount = 0, i.set(u.media, u)), u
	};

function BO(a, l = typeof window > "u" ? void 0 : window) {
	const i = zv(a, l),
		[u, s] = g.useState(() => i ? i.matches : !1);
	return sg(() => {
		let f = zv(a, l);
		if (!f) return s(!1);
		let d = mf.get(l);
		const m = () => {
			s(f.matches)
		};
		return f.refCount++, f.addListener(m), m(), () => {
			f.removeListener(m), f.refCount--, f.refCount <= 0 && (d == null || d.delete(f.media)), f = void 0
		}
	}, [a]), u
}

function LO(a) {
	const l = Object.keys(a);

	function i(m, p) {
		return m === p ? p : m ? `${m} and ${p}` : p
	}

	function u(m) {
		return l[Math.min(l.indexOf(m) + 1, l.length - 1)]
	}

	function s(m) {
		const p = u(m);
		let h = a[p];
		return typeof h == "number" ? h = `${h-.2}px` : h = `calc(${h} - 0.2px)`, `(max-width: ${h})`
	}

	function f(m) {
		let p = a[m];
		return typeof p == "number" && (p = `${p}px`), `(min-width: ${p})`
	}

	function d(m, p, h) {
		let y;
		typeof m == "object" ? (y = m, h = p, p = !0) : (p = p || !0, y = {
			[m]: p
		});
		let E = g.useMemo(() => Object.entries(y).reduce((S, [C, R]) => ((R === "up" || R === !0) && (S = i(S, f(C))), (R === "down" || R === !0) && (S = i(S, s(C))), S), ""), [JSON.stringify(y)]);
		return BO(E, h)
	}
	return d
}
const HO = LO({
		xs: 0,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
		xxl: 1400
	}),
	Hg = g.forwardRef(({
		className: a,
		bsPrefix: l,
		as: i = "div",
		...u
	}, s) => (l = de(l, "offcanvas-body"), x.jsx(i, {
		ref: s,
		className: ie(a, l),
		...u
	})));
Hg.displayName = "OffcanvasBody";
const qO = {
		[ln]: "show",
		[Ln]: "show"
	},
	qg = g.forwardRef(({
		bsPrefix: a,
		className: l,
		children: i,
		in: u = !1,
		mountOnEnter: s = !1,
		unmountOnExit: f = !1,
		appear: d = !1,
		...m
	}, p) => (a = de(a, "offcanvas"), x.jsx(bi, {
		ref: p,
		addEndListener: uo,
		in: u,
		mountOnEnter: s,
		unmountOnExit: f,
		appear: d,
		...m,
		childRef: Zl(i),
		children: (h, y) => g.cloneElement(i, {
			...y,
			className: ie(l, i.props.className, (h === ln || h === oi) && `${a}-toggling`, qO[h])
		})
	})));
qg.displayName = "OffcanvasToggling";
const $g = g.forwardRef(({
	bsPrefix: a,
	className: l,
	closeLabel: i = "Close",
	closeButton: u = !1,
	...s
}, f) => (a = de(a, "offcanvas-header"), x.jsx(Dg, {
	ref: f,
	...s,
	className: ie(l, a),
	closeLabel: i,
	closeButton: u
})));
$g.displayName = "OffcanvasHeader";
const $O = Af("h5"),
	Yg = g.forwardRef(({
		className: a,
		bsPrefix: l,
		as: i = $O,
		...u
	}, s) => (l = de(l, "offcanvas-title"), x.jsx(i, {
		ref: s,
		className: ie(a, l),
		...u
	})));
Yg.displayName = "OffcanvasTitle";

function YO(a) {
	return x.jsx(qg, {
		...a
	})
}

function GO(a) {
	return x.jsx(Oy, {
		...a
	})
}
const Gg = g.forwardRef(({
	bsPrefix: a,
	className: l,
	children: i,
	"aria-labelledby": u,
	placement: s = "start",
	responsive: f,
	show: d = !1,
	backdrop: m = !0,
	keyboard: p = !0,
	scroll: h = !1,
	onEscapeKeyDown: y,
	onShow: E,
	onHide: S,
	container: C,
	autoFocus: R = !0,
	enforceFocus: A = !0,
	restoreFocus: w = !0,
	restoreFocusOptions: D,
	onEntered: $,
	onExit: _,
	onExiting: Y,
	onEnter: q,
	onEntering: Q,
	onExited: Z,
	backdropClassName: I,
	manager: te,
	renderStaticNode: se = !1,
	...ae
}, le) => {
	const he = g.useRef();
	a = de(a, "offcanvas");
	const [we, xe] = g.useState(!1), B = Xa(S), K = HO(f || "xs", "up");
	g.useEffect(() => {
		xe(f ? d && !K : d)
	}, [d, f, K]);
	const F = g.useMemo(() => ({
		onHide: B
	}), [B]);

	function ce() {
		return te || (h ? (he.current || (he.current = new Ag({
			handleContainerOverflow: !1
		})), he.current) : zO())
	}
	const T = (P, ...ue) => {
			P && (P.style.visibility = "visible"), q == null || q(P, ...ue)
		},
		X = (P, ...ue) => {
			P && (P.style.visibility = ""), Z == null || Z(...ue)
		},
		W = g.useCallback(P => x.jsx("div", {
			...P,
			className: ie(`${a}-backdrop`, I)
		}), [I, a]),
		J = P => x.jsx("div", {
			...P,
			...ae,
			className: ie(l, f ? `${a}-${f}` : a, `${a}-${s}`),
			"aria-labelledby": u,
			children: i
		});
	return x.jsxs(x.Fragment, {
		children: [!we && (f || se) && J({}), x.jsx(jg.Provider, {
			value: F,
			children: x.jsx(DO, {
				show: we,
				ref: le,
				backdrop: m,
				container: C,
				keyboard: p,
				autoFocus: R,
				enforceFocus: A && !h,
				restoreFocus: w,
				restoreFocusOptions: D,
				onEscapeKeyDown: y,
				onShow: E,
				onHide: B,
				onEnter: T,
				onEntering: Q,
				onEntered: $,
				onExit: _,
				onExiting: Y,
				onExited: X,
				manager: ce(),
				transition: YO,
				backdropTransition: GO,
				renderBackdrop: W,
				renderDialog: J
			})
		})]
	})
});
Gg.displayName = "Offcanvas";
const XO = Object.assign(Gg, {
		Body: Hg,
		Header: $g,
		Title: Yg
	}),
	Xg = g.forwardRef(({
		onHide: a,
		...l
	}, i) => {
		const u = g.useContext(Ka),
			s = Xa(() => {
				u == null || u.onToggle == null || u.onToggle(), a == null || a()
			});
		return x.jsx(XO, {
			ref: i,
			show: !!(u != null && u.expanded),
			...l,
			renderStaticNode: !0,
			onHide: s
		})
	});
Xg.displayName = "NavbarOffcanvas";
const kg = g.forwardRef(({
	className: a,
	bsPrefix: l,
	as: i = "span",
	...u
}, s) => (l = de(l, "navbar-text"), x.jsx(i, {
	ref: s,
	className: ie(a, l),
	...u
})));
kg.displayName = "NavbarText";
const Vg = g.forwardRef((a, l) => {
	const {
		bsPrefix: i,
		expand: u = !0,
		variant: s = "light",
		bg: f,
		fixed: d,
		sticky: m,
		className: p,
		as: h = "nav",
		expanded: y,
		onToggle: E,
		onSelect: S,
		collapseOnSelect: C = !1,
		...R
	} = lo(a, {
		expanded: "onToggle"
	}), A = de(i, "navbar"), w = g.useCallback((..._) => {
		S == null || S(..._), C && y && (E == null || E(!1))
	}, [S, C, y, E]);
	R.role === void 0 && h !== "nav" && (R.role = "navigation");
	let D = `${A}-expand`;
	typeof u == "string" && (D = `${D}-${u}`);
	const $ = g.useMemo(() => ({
		onToggle: () => E == null ? void 0 : E(!y),
		bsPrefix: A,
		expanded: !!y,
		expand: u
	}), [A, y, u, E]);
	return x.jsx(Ka.Provider, {
		value: $,
		children: x.jsx(Va.Provider, {
			value: w,
			children: x.jsx(h, {
				ref: l,
				...R,
				className: ie(p, A, u && D, s && `${A}-${s}`, f && `bg-${f}`, m && `sticky-${m}`, d && `fixed-${d}`)
			})
		})
	})
});
Vg.displayName = "Navbar";
const kO = Object.assign(Vg, {
		Brand: zg,
		Collapse: Bg,
		Offcanvas: Xg,
		Text: kg,
		Toggle: Lg
	}),
	Qg = g.forwardRef(({
		bsPrefix: a,
		className: l,
		striped: i,
		bordered: u,
		borderless: s,
		hover: f,
		size: d,
		variant: m,
		responsive: p,
		...h
	}, y) => {
		const E = de(a, "table"),
			S = ie(l, E, m && `${E}-${m}`, d && `${E}-${d}`, i && `${E}-${typeof i=="string"?`striped-${i}`:"striped"}`, u && `${E}-bordered`, s && `${E}-borderless`, f && `${E}-hover`),
			C = x.jsx("table", {
				...h,
				className: S,
				ref: y
			});
		if (p) {
			let R = `${E}-responsive`;
			return typeof p == "string" && (R = `${R}-${p}`), x.jsx("div", {
				className: R,
				children: C
			})
		}
		return C
	});
Qg.displayName = "Table";
var Kg = {
		color: void 0,
		size: void 0,
		className: void 0,
		style: void 0,
		attr: void 0
	},
	Bv = $e.createContext && $e.createContext(Kg),
	VO = ["attr", "size", "title"];

function QO(a, l) {
	if (a == null) return {};
	var i = KO(a, l),
		u, s;
	if (Object.getOwnPropertySymbols) {
		var f = Object.getOwnPropertySymbols(a);
		for (s = 0; s < f.length; s++) u = f[s], !(l.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(a, u) && (i[u] = a[u])
	}
	return i
}

function KO(a, l) {
	if (a == null) return {};
	var i = {};
	for (var u in a)
		if (Object.prototype.hasOwnProperty.call(a, u)) {
			if (l.indexOf(u) >= 0) continue;
			i[u] = a[u]
		} return i
}

function Wu() {
	return Wu = Object.assign ? Object.assign.bind() : function (a) {
		for (var l = 1; l < arguments.length; l++) {
			var i = arguments[l];
			for (var u in i) Object.prototype.hasOwnProperty.call(i, u) && (a[u] = i[u])
		}
		return a
	}, Wu.apply(this, arguments)
}

function Lv(a, l) {
	var i = Object.keys(a);
	if (Object.getOwnPropertySymbols) {
		var u = Object.getOwnPropertySymbols(a);
		l && (u = u.filter(function (s) {
			return Object.getOwnPropertyDescriptor(a, s).enumerable
		})), i.push.apply(i, u)
	}
	return i
}

function Pu(a) {
	for (var l = 1; l < arguments.length; l++) {
		var i = arguments[l] != null ? arguments[l] : {};
		l % 2 ? Lv(Object(i), !0).forEach(function (u) {
			ZO(a, u, i[u])
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : Lv(Object(i)).forEach(function (u) {
			Object.defineProperty(a, u, Object.getOwnPropertyDescriptor(i, u))
		})
	}
	return a
}

function ZO(a, l, i) {
	return l = JO(l), l in a ? Object.defineProperty(a, l, {
		value: i,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : a[l] = i, a
}

function JO(a) {
	var l = FO(a, "string");
	return typeof l == "symbol" ? l : l + ""
}

function FO(a, l) {
	if (typeof a != "object" || !a) return a;
	var i = a[Symbol.toPrimitive];
	if (i !== void 0) {
		var u = i.call(a, l);
		if (typeof u != "object") return u;
		throw new TypeError("@@toPrimitive must return a primitive value.")
	}
	return (l === "string" ? String : Number)(a)
}

function Zg(a) {
	return a && a.map((l, i) => $e.createElement(l.tag, Pu({
		key: i
	}, l.attr), Zg(l.child)))
}

function Jg(a) {
	return l => $e.createElement(WO, Wu({
		attr: Pu({}, a.attr)
	}, l), Zg(a.child))
}

function WO(a) {
	var l = i => {
		var {
			attr: u,
			size: s,
			title: f
		} = a, d = QO(a, VO), m = s || i.size || "1em", p;
		return i.className && (p = i.className), a.className && (p = (p ? p + " " : "") + a.className), $e.createElement("svg", Wu({
			stroke: "currentColor",
			fill: "currentColor",
			strokeWidth: "0"
		}, i.attr, u, d, {
			className: p,
			style: Pu(Pu({
				color: a.color || i.color
			}, i.style), a.style),
			height: m,
			width: m,
			xmlns: "http://www.w3.org/2000/svg"
		}), f && $e.createElement("title", null, f), a.children)
	};
	return Bv !== void 0 ? $e.createElement(Bv.Consumer, null, i => l(i)) : l(Kg)
}

function Hv(a) {
	return Jg({
		attr: {
			viewBox: "0 0 640 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"
			},
			child: []
		}]
	})(a)
}

function PO(a) {
	return Jg({
		attr: {
			viewBox: "0 0 448 512"
		},
		child: [{
			tag: "path",
			attr: {
				d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
			},
			child: []
		}]
	})(a)
}
const IO = "/assets/hoslogo2-eY5Nd-sn.JPG",
	po = () => {
		const [a, l] = g.useState(!1), [i, u] = g.useState(!1), [s, f] = g.useState(null), d = no(), m = y => {
			clearTimeout(s), y == "home" ? l(!0) : y == "reg" && u(!0)
		}, p = y => {
			y == "home" ? setTimeout(() => l(!1), 200) : y == "reg" && setTimeout(() => u(!1), 200), f(id)
		}, h = (y, E, S) => {
			S.source === "click" && l(!y)
		};
		return x.jsxs(x.Fragment, {
			children: [x.jsxs("div", {
				className: "head",
				children: [x.jsx("div", {
					children: x.jsx(Yl, {
						width: 100,
						height: 100,
						src: IO,
						style: {
							marginLeft: "15px"
						},
						alt: "hospital-logo"
					})
				}), x.jsxs("div", {
					className: "head-title",
					children: [x.jsx("h2", {
						children: "Sethu Hospital"
					}), x.jsx("p", {
						children: "294, Pulipandian Street, 1st Street, Jaihindpuram, Madurai - 625011 (Jeeva Nagar, Sundarajapuram, Rathinapuram, Satya Sai Nagar)"
					})]
				}), x.jsx("div", {
					style: {
						width: 60,
						height: 60,
						borderRadius: "50%",
						backgroundColor: "lightgrey",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginRight: "15px"
					},
					children: x.jsx(PO, {
						color: "red",
						size: 60,
						fontWeight: "bold"
					})
				})]
			}), x.jsx(kO, {
				bg: "dark",
				variant: "dark",
				children: x.jsxs(Hl, {
					className: "me-auto head-nav",
					children: [x.jsx(Hl.Link, {
						children: x.jsxs(an, {
							show: a,
							onMouseEnter: () => m("home"),
							onToggle: h,
							onMouseLeave: () => p("home"),
							children: [x.jsx(an.Toggle, {
								variant: "secondary",
								id: "dropdown-basic",
								children: "Home"
							}), x.jsxs(an.Menu, {
								className: "home-menu",
								children: [x.jsx(an.Item, {
									href: "#/action-1",
									children: "About Us"
								}), x.jsx(an.Item, {
									href: "#/action-2",
									children: "Contact Us"
								})]
							})]
						})
					}), x.jsx(Hl.Link, {
						href: "#features",
						children: x.jsxs(an, {
							show: i,
							onMouseEnter: () => m("reg"),
							onToggle: h,
							onMouseLeave: () => p("reg"),
							children: [x.jsx(an.Toggle, {
								variant: "secondary",
								id: "dropdown-basic",
								children: "Registration"
							}), x.jsxs(an.Menu, {
								className: "home-menu",
								children: [x.jsx(an.Item, {
									href: "/new-entry",
									children: "New Entry"
								}), x.jsx(an.Item, {
									href: "#/action-2",
									children: "Modify Entry"
								}), x.jsx(an.Item, {
									href: "#/action-2",
									children: "Delete Entry"
								})]
							})]
						})
					}), x.jsx(Hl.Link, {
						children: x.jsx(rn, {
							variant: "secondary",
							children: "Enquiry"
						})
					}), x.jsx(Hl.Link, {
						children: x.jsx(rn, {
							variant: "secondary",
							onClick: () => d("/dr-app"),
							children: "Doctor Appointment"
						})
					}), x.jsx(Hl.Link, {
						children: x.jsx(rn, {
							variant: "secondary",
							children: "Deletion"
						})
					})]
				})
			})]
		})
	},
	vo = () => {
		const a = new Date,
			l = `${String(a.getDate()).padStart(2,"0")}/${String(a.getMonth()+1).padStart(2,"0")}/${a.getFullYear()}`;
		return x.jsxs("div", {
			className: "bg-dark text-white footer-content",
			style: {
				position: "sticky",
				marginBottom: 0,
				left: "10px",
				textAlign: "center"
			},
			children: [x.jsx("p", {
				children: "Page Maintained by"
			}), x.jsx("p", {
				children: "Sanjay Karthick S"
			}), x.jsx("p", {
				children: "Page Updated on 20 May "
			}), x.jsxs("p", {
				children: ["Date:", l]
			})]
		})
	},
	eT = "/assets/sethu-hospital-jaihindpuram-madurai-DSReQ5fy.avif",
	tT = "/assets/kabilan-hospital-jaihindpuram-DTXN4aHo.avif",
	nT = "/assets/default-hospitals-10-b5SJCii1.jpg",
	aT = () => x.jsxs("div", {
		children: [x.jsx(po, {}), x.jsx("div", {
			children: x.jsxs(Ha, {
				children: [x.jsxs(Ha.Item, {
					children: [x.jsx(Yl, {
						className: "d-block w-100 object-fit-cover",
						src: eT,
						height: 500,
						alt: "First slide"
					}), x.jsx(Ha.Caption, {
						children: x.jsx("h3", {
							children: "Sethu Hospital Exterior"
						})
					})]
				}), x.jsxs(Ha.Item, {
					children: [x.jsx(Yl, {
						className: "d-block w-100",
						src: tT,
						height: 500,
						alt: "Second slide"
					}), x.jsxs(Ha.Caption, {
						children: [x.jsx("h3", {
							children: "Hospital interior"
						}), x.jsx("p", {
							children: "It's a busy hospital."
						})]
					})]
				}), x.jsxs(Ha.Item, {
					children: [x.jsx(Yl, {
						className: "d-block w-100",
						src: nT,
						height: 500,
						alt: "Third slide"
					}), x.jsxs(Ha.Caption, {
						children: [x.jsx("h3", {
							children: "Resourceful Doctors"
						}), x.jsx("p", {
							children: "The doctors will help the patients in all possible ways."
						})]
					})]
				})]
			})
		}), x.jsx(vo, {})]
	});

function Fg(a, l) {
	return function () {
		return a.apply(l, arguments)
	}
}
const {
	toString: lT
} = Object.prototype, {
	getPrototypeOf: Zf
} = Object, {
	iterator: yo,
	toStringTag: Wg
} = Symbol, go = (a => l => {
	const i = lT.call(l);
	return a[i] || (a[i] = i.slice(8, -1).toLowerCase())
})(Object.create(null)), un = a => (a = a.toLowerCase(), l => go(l) === a), bo = a => l => typeof l === a, {
	isArray: Fl
} = Array, hi = bo("undefined");

function rT(a) {
	return a !== null && !hi(a) && a.constructor !== null && !hi(a.constructor) && Ct(a.constructor.isBuffer) && a.constructor.isBuffer(a)
}
const Pg = un("ArrayBuffer");

function iT(a) {
	let l;
	return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? l = ArrayBuffer.isView(a) : l = a && a.buffer && Pg(a.buffer), l
}
const uT = bo("string"),
	Ct = bo("function"),
	Ig = bo("number"),
	xo = a => a !== null && typeof a == "object",
	oT = a => a === !0 || a === !1,
	Gu = a => {
		if (go(a) !== "object") return !1;
		const l = Zf(a);
		return (l === null || l === Object.prototype || Object.getPrototypeOf(l) === null) && !(Wg in a) && !(yo in a)
	},
	sT = un("Date"),
	cT = un("File"),
	fT = un("Blob"),
	dT = un("FileList"),
	hT = a => xo(a) && Ct(a.pipe),
	mT = a => {
		let l;
		return a && (typeof FormData == "function" && a instanceof FormData || Ct(a.append) && ((l = go(a)) === "formdata" || l === "object" && Ct(a.toString) && a.toString() === "[object FormData]"))
	},
	pT = un("URLSearchParams"),
	[vT, yT, gT, bT] = ["ReadableStream", "Request", "Response", "Headers"].map(un),
	xT = a => a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Ri(a, l, {
	allOwnKeys: i = !1
} = {}) {
	if (a === null || typeof a > "u") return;
	let u, s;
	if (typeof a != "object" && (a = [a]), Fl(a))
		for (u = 0, s = a.length; u < s; u++) l.call(null, a[u], u, a);
	else {
		const f = i ? Object.getOwnPropertyNames(a) : Object.keys(a),
			d = f.length;
		let m;
		for (u = 0; u < d; u++) m = f[u], l.call(null, a[m], m, a)
	}
}

function e0(a, l) {
	l = l.toLowerCase();
	const i = Object.keys(a);
	let u = i.length,
		s;
	for (; u-- > 0;)
		if (s = i[u], l === s.toLowerCase()) return s;
	return null
}
const $a = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global,
	t0 = a => !hi(a) && a !== $a;

function pf() {
	const {
		caseless: a
	} = t0(this) && this || {}, l = {}, i = (u, s) => {
		const f = a && e0(l, s) || s;
		Gu(l[f]) && Gu(u) ? l[f] = pf(l[f], u) : Gu(u) ? l[f] = pf({}, u) : Fl(u) ? l[f] = u.slice() : l[f] = u
	};
	for (let u = 0, s = arguments.length; u < s; u++) arguments[u] && Ri(arguments[u], i);
	return l
}
const ET = (a, l, i, {
		allOwnKeys: u
	} = {}) => (Ri(l, (s, f) => {
		i && Ct(s) ? a[f] = Fg(s, i) : a[f] = s
	}, {
		allOwnKeys: u
	}), a),
	ST = a => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a),
	RT = (a, l, i, u) => {
		a.prototype = Object.create(l.prototype, u), a.prototype.constructor = a, Object.defineProperty(a, "super", {
			value: l.prototype
		}), i && Object.assign(a.prototype, i)
	},
	OT = (a, l, i, u) => {
		let s, f, d;
		const m = {};
		if (l = l || {}, a == null) return l;
		do {
			for (s = Object.getOwnPropertyNames(a), f = s.length; f-- > 0;) d = s[f], (!u || u(d, a, l)) && !m[d] && (l[d] = a[d], m[d] = !0);
			a = i !== !1 && Zf(a)
		} while (a && (!i || i(a, l)) && a !== Object.prototype);
		return l
	},
	TT = (a, l, i) => {
		a = String(a), (i === void 0 || i > a.length) && (i = a.length), i -= l.length;
		const u = a.indexOf(l, i);
		return u !== -1 && u === i
	},
	wT = a => {
		if (!a) return null;
		if (Fl(a)) return a;
		let l = a.length;
		if (!Ig(l)) return null;
		const i = new Array(l);
		for (; l-- > 0;) i[l] = a[l];
		return i
	},
	CT = (a => l => a && l instanceof a)(typeof Uint8Array < "u" && Zf(Uint8Array)),
	NT = (a, l) => {
		const u = (a && a[yo]).call(a);
		let s;
		for (;
			(s = u.next()) && !s.done;) {
			const f = s.value;
			l.call(a, f[0], f[1])
		}
	},
	AT = (a, l) => {
		let i;
		const u = [];
		for (;
			(i = a.exec(l)) !== null;) u.push(i);
		return u
	},
	jT = un("HTMLFormElement"),
	DT = a => a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, u, s) {
		return u.toUpperCase() + s
	}),
	qv = (({
		hasOwnProperty: a
	}) => (l, i) => a.call(l, i))(Object.prototype),
	MT = un("RegExp"),
	n0 = (a, l) => {
		const i = Object.getOwnPropertyDescriptors(a),
			u = {};
		Ri(i, (s, f) => {
			let d;
			(d = l(s, f, a)) !== !1 && (u[f] = d || s)
		}), Object.defineProperties(a, u)
	},
	_T = a => {
		n0(a, (l, i) => {
			if (Ct(a) && ["arguments", "caller", "callee"].indexOf(i) !== -1) return !1;
			const u = a[i];
			if (Ct(u)) {
				if (l.enumerable = !1, "writable" in l) {
					l.writable = !1;
					return
				}
				l.set || (l.set = () => {
					throw Error("Can not rewrite read-only method '" + i + "'")
				})
			}
		})
	},
	UT = (a, l) => {
		const i = {},
			u = s => {
				s.forEach(f => {
					i[f] = !0
				})
			};
		return Fl(a) ? u(a) : u(String(a).split(l)), i
	},
	zT = () => {},
	BT = (a, l) => a != null && Number.isFinite(a = +a) ? a : l;

function LT(a) {
	return !!(a && Ct(a.append) && a[Wg] === "FormData" && a[yo])
}
const HT = a => {
		const l = new Array(10),
			i = (u, s) => {
				if (xo(u)) {
					if (l.indexOf(u) >= 0) return;
					if (!("toJSON" in u)) {
						l[s] = u;
						const f = Fl(u) ? [] : {};
						return Ri(u, (d, m) => {
							const p = i(d, s + 1);
							!hi(p) && (f[m] = p)
						}), l[s] = void 0, f
					}
				}
				return u
			};
		return i(a, 0)
	},
	qT = un("AsyncFunction"),
	$T = a => a && (xo(a) || Ct(a)) && Ct(a.then) && Ct(a.catch),
	a0 = ((a, l) => a ? setImmediate : l ? ((i, u) => ($a.addEventListener("message", ({
		source: s,
		data: f
	}) => {
		s === $a && f === i && u.length && u.shift()()
	}, !1), s => {
		u.push(s), $a.postMessage(i, "*")
	}))(`axios@${Math.random()}`, []) : i => setTimeout(i))(typeof setImmediate == "function", Ct($a.postMessage)),
	YT = typeof queueMicrotask < "u" ? queueMicrotask.bind($a) : typeof process < "u" && process.nextTick || a0,
	GT = a => a != null && Ct(a[yo]),
	H = {
		isArray: Fl,
		isArrayBuffer: Pg,
		isBuffer: rT,
		isFormData: mT,
		isArrayBufferView: iT,
		isString: uT,
		isNumber: Ig,
		isBoolean: oT,
		isObject: xo,
		isPlainObject: Gu,
		isReadableStream: vT,
		isRequest: yT,
		isResponse: gT,
		isHeaders: bT,
		isUndefined: hi,
		isDate: sT,
		isFile: cT,
		isBlob: fT,
		isRegExp: MT,
		isFunction: Ct,
		isStream: hT,
		isURLSearchParams: pT,
		isTypedArray: CT,
		isFileList: dT,
		forEach: Ri,
		merge: pf,
		extend: ET,
		trim: xT,
		stripBOM: ST,
		inherits: RT,
		toFlatObject: OT,
		kindOf: go,
		kindOfTest: un,
		endsWith: TT,
		toArray: wT,
		forEachEntry: NT,
		matchAll: AT,
		isHTMLForm: jT,
		hasOwnProperty: qv,
		hasOwnProp: qv,
		reduceDescriptors: n0,
		freezeMethods: _T,
		toObjectSet: UT,
		toCamelCase: DT,
		noop: zT,
		toFiniteNumber: BT,
		findKey: e0,
		global: $a,
		isContextDefined: t0,
		isSpecCompliantForm: LT,
		toJSONObject: HT,
		isAsyncFn: qT,
		isThenable: $T,
		setImmediate: a0,
		asap: YT,
		isIterable: GT
	};

function ge(a, l, i, u, s) {
	Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = a, this.name = "AxiosError", l && (this.code = l), i && (this.config = i), u && (this.request = u), s && (this.response = s, this.status = s.status ? s.status : null)
}
H.inherits(ge, Error, {
	toJSON: function () {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: H.toJSONObject(this.config),
			code: this.code,
			status: this.status
		}
	}
});
const l0 = ge.prototype,
	r0 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(a => {
	r0[a] = {
		value: a
	}
});
Object.defineProperties(ge, r0);
Object.defineProperty(l0, "isAxiosError", {
	value: !0
});
ge.from = (a, l, i, u, s, f) => {
	const d = Object.create(l0);
	return H.toFlatObject(a, d, function (p) {
		return p !== Error.prototype
	}, m => m !== "isAxiosError"), ge.call(d, a.message, l, i, u, s), d.cause = a, d.name = a.name, f && Object.assign(d, f), d
};
const XT = null;

function vf(a) {
	return H.isPlainObject(a) || H.isArray(a)
}

function i0(a) {
	return H.endsWith(a, "[]") ? a.slice(0, -2) : a
}

function $v(a, l, i) {
	return a ? a.concat(l).map(function (s, f) {
		return s = i0(s), !i && f ? "[" + s + "]" : s
	}).join(i ? "." : "") : l
}

function kT(a) {
	return H.isArray(a) && !a.some(vf)
}
const VT = H.toFlatObject(H, {}, null, function (l) {
	return /^is[A-Z]/.test(l)
});

function Eo(a, l, i) {
	if (!H.isObject(a)) throw new TypeError("target must be an object");
	l = l || new FormData, i = H.toFlatObject(i, {
		metaTokens: !0,
		dots: !1,
		indexes: !1
	}, !1, function (A, w) {
		return !H.isUndefined(w[A])
	});
	const u = i.metaTokens,
		s = i.visitor || y,
		f = i.dots,
		d = i.indexes,
		p = (i.Blob || typeof Blob < "u" && Blob) && H.isSpecCompliantForm(l);
	if (!H.isFunction(s)) throw new TypeError("visitor must be a function");

	function h(R) {
		if (R === null) return "";
		if (H.isDate(R)) return R.toISOString();
		if (!p && H.isBlob(R)) throw new ge("Blob is not supported. Use a Buffer instead.");
		return H.isArrayBuffer(R) || H.isTypedArray(R) ? p && typeof Blob == "function" ? new Blob([R]) : Buffer.from(R) : R
	}

	function y(R, A, w) {
		let D = R;
		if (R && !w && typeof R == "object") {
			if (H.endsWith(A, "{}")) A = u ? A : A.slice(0, -2), R = JSON.stringify(R);
			else if (H.isArray(R) && kT(R) || (H.isFileList(R) || H.endsWith(A, "[]")) && (D = H.toArray(R))) return A = i0(A), D.forEach(function (_, Y) {
				!(H.isUndefined(_) || _ === null) && l.append(d === !0 ? $v([A], Y, f) : d === null ? A : A + "[]", h(_))
			}), !1
		}
		return vf(R) ? !0 : (l.append($v(w, A, f), h(R)), !1)
	}
	const E = [],
		S = Object.assign(VT, {
			defaultVisitor: y,
			convertValue: h,
			isVisitable: vf
		});

	function C(R, A) {
		if (!H.isUndefined(R)) {
			if (E.indexOf(R) !== -1) throw Error("Circular reference detected in " + A.join("."));
			E.push(R), H.forEach(R, function (D, $) {
				(!(H.isUndefined(D) || D === null) && s.call(l, D, H.isString($) ? $.trim() : $, A, S)) === !0 && C(D, A ? A.concat($) : [$])
			}), E.pop()
		}
	}
	if (!H.isObject(a)) throw new TypeError("data must be an object");
	return C(a), l
}

function Yv(a) {
	const l = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+",
		"%00": "\0"
	};
	return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function (u) {
		return l[u]
	})
}

function Jf(a, l) {
	this._pairs = [], a && Eo(a, this, l)
}
const u0 = Jf.prototype;
u0.append = function (l, i) {
	this._pairs.push([l, i])
};
u0.toString = function (l) {
	const i = l ? function (u) {
		return l.call(this, u, Yv)
	} : Yv;
	return this._pairs.map(function (s) {
		return i(s[0]) + "=" + i(s[1])
	}, "").join("&")
};

function QT(a) {
	return encodeURIComponent(a).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function o0(a, l, i) {
	if (!l) return a;
	const u = i && i.encode || QT;
	H.isFunction(i) && (i = {
		serialize: i
	});
	const s = i && i.serialize;
	let f;
	if (s ? f = s(l, i) : f = H.isURLSearchParams(l) ? l.toString() : new Jf(l, i).toString(u), f) {
		const d = a.indexOf("#");
		d !== -1 && (a = a.slice(0, d)), a += (a.indexOf("?") === -1 ? "?" : "&") + f
	}
	return a
}
class Gv {
	constructor() {
		this.handlers = []
	}
	use(l, i, u) {
		return this.handlers.push({
			fulfilled: l,
			rejected: i,
			synchronous: u ? u.synchronous : !1,
			runWhen: u ? u.runWhen : null
		}), this.handlers.length - 1
	}
	eject(l) {
		this.handlers[l] && (this.handlers[l] = null)
	}
	clear() {
		this.handlers && (this.handlers = [])
	}
	forEach(l) {
		H.forEach(this.handlers, function (u) {
			u !== null && l(u)
		})
	}
}
const s0 = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1
	},
	KT = typeof URLSearchParams < "u" ? URLSearchParams : Jf,
	ZT = typeof FormData < "u" ? FormData : null,
	JT = typeof Blob < "u" ? Blob : null,
	FT = {
		isBrowser: !0,
		classes: {
			URLSearchParams: KT,
			FormData: ZT,
			Blob: JT
		},
		protocols: ["http", "https", "file", "blob", "url", "data"]
	},
	Ff = typeof window < "u" && typeof document < "u",
	yf = typeof navigator == "object" && navigator || void 0,
	WT = Ff && (!yf || ["ReactNative", "NativeScript", "NS"].indexOf(yf.product) < 0),
	PT = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function",
	IT = Ff && window.location.href || "http://localhost",
	ew = Object.freeze(Object.defineProperty({
		__proto__: null,
		hasBrowserEnv: Ff,
		hasStandardBrowserEnv: WT,
		hasStandardBrowserWebWorkerEnv: PT,
		navigator: yf,
		origin: IT
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	pt = {
		...ew,
		...FT
	};

function tw(a, l) {
	return Eo(a, new pt.classes.URLSearchParams, Object.assign({
		visitor: function (i, u, s, f) {
			return pt.isNode && H.isBuffer(i) ? (this.append(u, i.toString("base64")), !1) : f.defaultVisitor.apply(this, arguments)
		}
	}, l))
}

function nw(a) {
	return H.matchAll(/\w+|\[(\w*)]/g, a).map(l => l[0] === "[]" ? "" : l[1] || l[0])
}

function aw(a) {
	const l = {},
		i = Object.keys(a);
	let u;
	const s = i.length;
	let f;
	for (u = 0; u < s; u++) f = i[u], l[f] = a[f];
	return l
}

function c0(a) {
	function l(i, u, s, f) {
		let d = i[f++];
		if (d === "__proto__") return !0;
		const m = Number.isFinite(+d),
			p = f >= i.length;
		return d = !d && H.isArray(s) ? s.length : d, p ? (H.hasOwnProp(s, d) ? s[d] = [s[d], u] : s[d] = u, !m) : ((!s[d] || !H.isObject(s[d])) && (s[d] = []), l(i, u, s[d], f) && H.isArray(s[d]) && (s[d] = aw(s[d])), !m)
	}
	if (H.isFormData(a) && H.isFunction(a.entries)) {
		const i = {};
		return H.forEachEntry(a, (u, s) => {
			l(nw(u), s, i, 0)
		}), i
	}
	return null
}

function lw(a, l, i) {
	if (H.isString(a)) try {
		return (l || JSON.parse)(a), H.trim(a)
	} catch (u) {
		if (u.name !== "SyntaxError") throw u
	}
	return (i || JSON.stringify)(a)
}
const Oi = {
	transitional: s0,
	adapter: ["xhr", "http", "fetch"],
	transformRequest: [function (l, i) {
		const u = i.getContentType() || "",
			s = u.indexOf("application/json") > -1,
			f = H.isObject(l);
		if (f && H.isHTMLForm(l) && (l = new FormData(l)), H.isFormData(l)) return s ? JSON.stringify(c0(l)) : l;
		if (H.isArrayBuffer(l) || H.isBuffer(l) || H.isStream(l) || H.isFile(l) || H.isBlob(l) || H.isReadableStream(l)) return l;
		if (H.isArrayBufferView(l)) return l.buffer;
		if (H.isURLSearchParams(l)) return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), l.toString();
		let m;
		if (f) {
			if (u.indexOf("application/x-www-form-urlencoded") > -1) return tw(l, this.formSerializer).toString();
			if ((m = H.isFileList(l)) || u.indexOf("multipart/form-data") > -1) {
				const p = this.env && this.env.FormData;
				return Eo(m ? {
					"files[]": l
				} : l, p && new p, this.formSerializer)
			}
		}
		return f || s ? (i.setContentType("application/json", !1), lw(l)) : l
	}],
	transformResponse: [function (l) {
		const i = this.transitional || Oi.transitional,
			u = i && i.forcedJSONParsing,
			s = this.responseType === "json";
		if (H.isResponse(l) || H.isReadableStream(l)) return l;
		if (l && H.isString(l) && (u && !this.responseType || s)) {
			const d = !(i && i.silentJSONParsing) && s;
			try {
				return JSON.parse(l)
			} catch (m) {
				if (d) throw m.name === "SyntaxError" ? ge.from(m, ge.ERR_BAD_RESPONSE, this, null, this.response) : m
			}
		}
		return l
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: pt.classes.FormData,
		Blob: pt.classes.Blob
	},
	validateStatus: function (l) {
		return l >= 200 && l < 300
	},
	headers: {
		common: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": void 0
		}
	}
};
H.forEach(["delete", "get", "head", "post", "put", "patch"], a => {
	Oi.headers[a] = {}
});
const rw = H.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
	iw = a => {
		const l = {};
		let i, u, s;
		return a && a.split(`
`).forEach(function (d) {
			s = d.indexOf(":"), i = d.substring(0, s).trim().toLowerCase(), u = d.substring(s + 1).trim(), !(!i || l[i] && rw[i]) && (i === "set-cookie" ? l[i] ? l[i].push(u) : l[i] = [u] : l[i] = l[i] ? l[i] + ", " + u : u)
		}), l
	},
	Xv = Symbol("internals");

function ni(a) {
	return a && String(a).trim().toLowerCase()
}

function Xu(a) {
	return a === !1 || a == null ? a : H.isArray(a) ? a.map(Xu) : String(a)
}

function uw(a) {
	const l = Object.create(null),
		i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let u;
	for (; u = i.exec(a);) l[u[1]] = u[2];
	return l
}
const ow = a => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());

function tf(a, l, i, u, s) {
	if (H.isFunction(u)) return u.call(this, l, i);
	if (s && (l = i), !!H.isString(l)) {
		if (H.isString(u)) return l.indexOf(u) !== -1;
		if (H.isRegExp(u)) return u.test(l)
	}
}

function sw(a) {
	return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (l, i, u) => i.toUpperCase() + u)
}

function cw(a, l) {
	const i = H.toCamelCase(" " + l);
	["get", "set", "has"].forEach(u => {
		Object.defineProperty(a, u + i, {
			value: function (s, f, d) {
				return this[u].call(this, l, s, f, d)
			},
			configurable: !0
		})
	})
}
let Nt = class {
	constructor(l) {
		l && this.set(l)
	}
	set(l, i, u) {
		const s = this;

		function f(m, p, h) {
			const y = ni(p);
			if (!y) throw new Error("header name must be a non-empty string");
			const E = H.findKey(s, y);
			(!E || s[E] === void 0 || h === !0 || h === void 0 && s[E] !== !1) && (s[E || p] = Xu(m))
		}
		const d = (m, p) => H.forEach(m, (h, y) => f(h, y, p));
		if (H.isPlainObject(l) || l instanceof this.constructor) d(l, i);
		else if (H.isString(l) && (l = l.trim()) && !ow(l)) d(iw(l), i);
		else if (H.isObject(l) && H.isIterable(l)) {
			let m = {},
				p, h;
			for (const y of l) {
				if (!H.isArray(y)) throw TypeError("Object iterator must return a key-value pair");
				m[h = y[0]] = (p = m[h]) ? H.isArray(p) ? [...p, y[1]] : [p, y[1]] : y[1]
			}
			d(m, i)
		} else l != null && f(i, l, u);
		return this
	}
	get(l, i) {
		if (l = ni(l), l) {
			const u = H.findKey(this, l);
			if (u) {
				const s = this[u];
				if (!i) return s;
				if (i === !0) return uw(s);
				if (H.isFunction(i)) return i.call(this, s, u);
				if (H.isRegExp(i)) return i.exec(s);
				throw new TypeError("parser must be boolean|regexp|function")
			}
		}
	}
	has(l, i) {
		if (l = ni(l), l) {
			const u = H.findKey(this, l);
			return !!(u && this[u] !== void 0 && (!i || tf(this, this[u], u, i)))
		}
		return !1
	}
	delete(l, i) {
		const u = this;
		let s = !1;

		function f(d) {
			if (d = ni(d), d) {
				const m = H.findKey(u, d);
				m && (!i || tf(u, u[m], m, i)) && (delete u[m], s = !0)
			}
		}
		return H.isArray(l) ? l.forEach(f) : f(l), s
	}
	clear(l) {
		const i = Object.keys(this);
		let u = i.length,
			s = !1;
		for (; u--;) {
			const f = i[u];
			(!l || tf(this, this[f], f, l, !0)) && (delete this[f], s = !0)
		}
		return s
	}
	normalize(l) {
		const i = this,
			u = {};
		return H.forEach(this, (s, f) => {
			const d = H.findKey(u, f);
			if (d) {
				i[d] = Xu(s), delete i[f];
				return
			}
			const m = l ? sw(f) : String(f).trim();
			m !== f && delete i[f], i[m] = Xu(s), u[m] = !0
		}), this
	}
	concat(...l) {
		return this.constructor.concat(this, ...l)
	}
	toJSON(l) {
		const i = Object.create(null);
		return H.forEach(this, (u, s) => {
			u != null && u !== !1 && (i[s] = l && H.isArray(u) ? u.join(", ") : u)
		}), i
	} [Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]()
	}
	toString() {
		return Object.entries(this.toJSON()).map(([l, i]) => l + ": " + i).join(`
`)
	}
	getSetCookie() {
		return this.get("set-cookie") || []
	}
	get[Symbol.toStringTag]() {
		return "AxiosHeaders"
	}
	static from(l) {
		return l instanceof this ? l : new this(l)
	}
	static concat(l, ...i) {
		const u = new this(l);
		return i.forEach(s => u.set(s)), u
	}
	static accessor(l) {
		const u = (this[Xv] = this[Xv] = {
				accessors: {}
			}).accessors,
			s = this.prototype;

		function f(d) {
			const m = ni(d);
			u[m] || (cw(s, d), u[m] = !0)
		}
		return H.isArray(l) ? l.forEach(f) : f(l), this
	}
};
Nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
H.reduceDescriptors(Nt.prototype, ({
	value: a
}, l) => {
	let i = l[0].toUpperCase() + l.slice(1);
	return {
		get: () => a,
		set(u) {
			this[i] = u
		}
	}
});
H.freezeMethods(Nt);

function nf(a, l) {
	const i = this || Oi,
		u = l || i,
		s = Nt.from(u.headers);
	let f = u.data;
	return H.forEach(a, function (m) {
		f = m.call(i, f, s.normalize(), l ? l.status : void 0)
	}), s.normalize(), f
}

function f0(a) {
	return !!(a && a.__CANCEL__)
}

function Wl(a, l, i) {
	ge.call(this, a ?? "canceled", ge.ERR_CANCELED, l, i), this.name = "CanceledError"
}
H.inherits(Wl, ge, {
	__CANCEL__: !0
});

function d0(a, l, i) {
	const u = i.config.validateStatus;
	!i.status || !u || u(i.status) ? a(i) : l(new ge("Request failed with status code " + i.status, [ge.ERR_BAD_REQUEST, ge.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4], i.config, i.request, i))
}

function fw(a) {
	const l = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
	return l && l[1] || ""
}

function dw(a, l) {
	a = a || 10;
	const i = new Array(a),
		u = new Array(a);
	let s = 0,
		f = 0,
		d;
	return l = l !== void 0 ? l : 1e3,
		function (p) {
			const h = Date.now(),
				y = u[f];
			d || (d = h), i[s] = p, u[s] = h;
			let E = f,
				S = 0;
			for (; E !== s;) S += i[E++], E = E % a;
			if (s = (s + 1) % a, s === f && (f = (f + 1) % a), h - d < l) return;
			const C = y && h - y;
			return C ? Math.round(S * 1e3 / C) : void 0
		}
}

function hw(a, l) {
	let i = 0,
		u = 1e3 / l,
		s, f;
	const d = (h, y = Date.now()) => {
		i = y, s = null, f && (clearTimeout(f), f = null), a.apply(null, h)
	};
	return [(...h) => {
		const y = Date.now(),
			E = y - i;
		E >= u ? d(h, y) : (s = h, f || (f = setTimeout(() => {
			f = null, d(s)
		}, u - E)))
	}, () => s && d(s)]
}
const Iu = (a, l, i = 3) => {
		let u = 0;
		const s = dw(50, 250);
		return hw(f => {
			const d = f.loaded,
				m = f.lengthComputable ? f.total : void 0,
				p = d - u,
				h = s(p),
				y = d <= m;
			u = d;
			const E = {
				loaded: d,
				total: m,
				progress: m ? d / m : void 0,
				bytes: p,
				rate: h || void 0,
				estimated: h && m && y ? (m - d) / h : void 0,
				event: f,
				lengthComputable: m != null,
				[l ? "download" : "upload"]: !0
			};
			a(E)
		}, i)
	},
	kv = (a, l) => {
		const i = a != null;
		return [u => l[0]({
			lengthComputable: i,
			total: a,
			loaded: u
		}), l[1]]
	},
	Vv = a => (...l) => H.asap(() => a(...l)),
	mw = pt.hasStandardBrowserEnv ? ((a, l) => i => (i = new URL(i, pt.origin), a.protocol === i.protocol && a.host === i.host && (l || a.port === i.port)))(new URL(pt.origin), pt.navigator && /(msie|trident)/i.test(pt.navigator.userAgent)) : () => !0,
	pw = pt.hasStandardBrowserEnv ? {
		write(a, l, i, u, s, f) {
			const d = [a + "=" + encodeURIComponent(l)];
			H.isNumber(i) && d.push("expires=" + new Date(i).toGMTString()), H.isString(u) && d.push("path=" + u), H.isString(s) && d.push("domain=" + s), f === !0 && d.push("secure"), document.cookie = d.join("; ")
		},
		read(a) {
			const l = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
			return l ? decodeURIComponent(l[3]) : null
		},
		remove(a) {
			this.write(a, "", Date.now() - 864e5)
		}
	} : {
		write() {},
		read() {
			return null
		},
		remove() {}
	};

function vw(a) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)
}

function yw(a, l) {
	return l ? a.replace(/\/?\/$/, "") + "/" + l.replace(/^\/+/, "") : a
}

function h0(a, l, i) {
	let u = !vw(l);
	return a && (u || i == !1) ? yw(a, l) : l
}
const Qv = a => a instanceof Nt ? {
	...a
} : a;

function Qa(a, l) {
	l = l || {};
	const i = {};

	function u(h, y, E, S) {
		return H.isPlainObject(h) && H.isPlainObject(y) ? H.merge.call({
			caseless: S
		}, h, y) : H.isPlainObject(y) ? H.merge({}, y) : H.isArray(y) ? y.slice() : y
	}

	function s(h, y, E, S) {
		if (H.isUndefined(y)) {
			if (!H.isUndefined(h)) return u(void 0, h, E, S)
		} else return u(h, y, E, S)
	}

	function f(h, y) {
		if (!H.isUndefined(y)) return u(void 0, y)
	}

	function d(h, y) {
		if (H.isUndefined(y)) {
			if (!H.isUndefined(h)) return u(void 0, h)
		} else return u(void 0, y)
	}

	function m(h, y, E) {
		if (E in l) return u(h, y);
		if (E in a) return u(void 0, h)
	}
	const p = {
		url: f,
		method: f,
		data: f,
		baseURL: d,
		transformRequest: d,
		transformResponse: d,
		paramsSerializer: d,
		timeout: d,
		timeoutMessage: d,
		withCredentials: d,
		withXSRFToken: d,
		adapter: d,
		responseType: d,
		xsrfCookieName: d,
		xsrfHeaderName: d,
		onUploadProgress: d,
		onDownloadProgress: d,
		decompress: d,
		maxContentLength: d,
		maxBodyLength: d,
		beforeRedirect: d,
		transport: d,
		httpAgent: d,
		httpsAgent: d,
		cancelToken: d,
		socketPath: d,
		responseEncoding: d,
		validateStatus: m,
		headers: (h, y, E) => s(Qv(h), Qv(y), E, !0)
	};
	return H.forEach(Object.keys(Object.assign({}, a, l)), function (y) {
		const E = p[y] || s,
			S = E(a[y], l[y], y);
		H.isUndefined(S) && E !== m || (i[y] = S)
	}), i
}
const m0 = a => {
		const l = Qa({}, a);
		let {
			data: i,
			withXSRFToken: u,
			xsrfHeaderName: s,
			xsrfCookieName: f,
			headers: d,
			auth: m
		} = l;
		l.headers = d = Nt.from(d), l.url = o0(h0(l.baseURL, l.url, l.allowAbsoluteUrls), a.params, a.paramsSerializer), m && d.set("Authorization", "Basic " + btoa((m.username || "") + ":" + (m.password ? unescape(encodeURIComponent(m.password)) : "")));
		let p;
		if (H.isFormData(i)) {
			if (pt.hasStandardBrowserEnv || pt.hasStandardBrowserWebWorkerEnv) d.setContentType(void 0);
			else if ((p = d.getContentType()) !== !1) {
				const [h, ...y] = p ? p.split(";").map(E => E.trim()).filter(Boolean) : [];
				d.setContentType([h || "multipart/form-data", ...y].join("; "))
			}
		}
		if (pt.hasStandardBrowserEnv && (u && H.isFunction(u) && (u = u(l)), u || u !== !1 && mw(l.url))) {
			const h = s && f && pw.read(f);
			h && d.set(s, h)
		}
		return l
	},
	gw = typeof XMLHttpRequest < "u",
	bw = gw && function (a) {
		return new Promise(function (i, u) {
			const s = m0(a);
			let f = s.data;
			const d = Nt.from(s.headers).normalize();
			let {
				responseType: m,
				onUploadProgress: p,
				onDownloadProgress: h
			} = s, y, E, S, C, R;

			function A() {
				C && C(), R && R(), s.cancelToken && s.cancelToken.unsubscribe(y), s.signal && s.signal.removeEventListener("abort", y)
			}
			let w = new XMLHttpRequest;
			w.open(s.method.toUpperCase(), s.url, !0), w.timeout = s.timeout;

			function D() {
				if (!w) return;
				const _ = Nt.from("getAllResponseHeaders" in w && w.getAllResponseHeaders()),
					q = {
						data: !m || m === "text" || m === "json" ? w.responseText : w.response,
						status: w.status,
						statusText: w.statusText,
						headers: _,
						config: a,
						request: w
					};
				d0(function (Z) {
					i(Z), A()
				}, function (Z) {
					u(Z), A()
				}, q), w = null
			}
			"onloadend" in w ? w.onloadend = D : w.onreadystatechange = function () {
				!w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(D)
			}, w.onabort = function () {
				w && (u(new ge("Request aborted", ge.ECONNABORTED, a, w)), w = null)
			}, w.onerror = function () {
				u(new ge("Network Error", ge.ERR_NETWORK, a, w)), w = null
			}, w.ontimeout = function () {
				let Y = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
				const q = s.transitional || s0;
				s.timeoutErrorMessage && (Y = s.timeoutErrorMessage), u(new ge(Y, q.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED, a, w)), w = null
			}, f === void 0 && d.setContentType(null), "setRequestHeader" in w && H.forEach(d.toJSON(), function (Y, q) {
				w.setRequestHeader(q, Y)
			}), H.isUndefined(s.withCredentials) || (w.withCredentials = !!s.withCredentials), m && m !== "json" && (w.responseType = s.responseType), h && ([S, R] = Iu(h, !0), w.addEventListener("progress", S)), p && w.upload && ([E, C] = Iu(p), w.upload.addEventListener("progress", E), w.upload.addEventListener("loadend", C)), (s.cancelToken || s.signal) && (y = _ => {
				w && (u(!_ || _.type ? new Wl(null, a, w) : _), w.abort(), w = null)
			}, s.cancelToken && s.cancelToken.subscribe(y), s.signal && (s.signal.aborted ? y() : s.signal.addEventListener("abort", y)));
			const $ = fw(s.url);
			if ($ && pt.protocols.indexOf($) === -1) {
				u(new ge("Unsupported protocol " + $ + ":", ge.ERR_BAD_REQUEST, a));
				return
			}
			w.send(f || null)
		})
	},
	xw = (a, l) => {
		const {
			length: i
		} = a = a ? a.filter(Boolean) : [];
		if (l || i) {
			let u = new AbortController,
				s;
			const f = function (h) {
				if (!s) {
					s = !0, m();
					const y = h instanceof Error ? h : this.reason;
					u.abort(y instanceof ge ? y : new Wl(y instanceof Error ? y.message : y))
				}
			};
			let d = l && setTimeout(() => {
				d = null, f(new ge(`timeout ${l} of ms exceeded`, ge.ETIMEDOUT))
			}, l);
			const m = () => {
				a && (d && clearTimeout(d), d = null, a.forEach(h => {
					h.unsubscribe ? h.unsubscribe(f) : h.removeEventListener("abort", f)
				}), a = null)
			};
			a.forEach(h => h.addEventListener("abort", f));
			const {
				signal: p
			} = u;
			return p.unsubscribe = () => H.asap(m), p
		}
	},
	Ew = function* (a, l) {
		let i = a.byteLength;
		if (i < l) {
			yield a;
			return
		}
		let u = 0,
			s;
		for (; u < i;) s = u + l, yield a.slice(u, s), u = s
	},
	Sw = async function* (a, l) {
		for await (const i of Rw(a)) yield* Ew(i, l)
	}, Rw = async function* (a) {
		if (a[Symbol.asyncIterator]) {
			yield* a;
			return
		}
		const l = a.getReader();
		try {
			for (;;) {
				const {
					done: i,
					value: u
				} = await l.read();
				if (i) break;
				yield u
			}
		} finally {
			await l.cancel()
		}
	}, Kv = (a, l, i, u) => {
		const s = Sw(a, l);
		let f = 0,
			d, m = p => {
				d || (d = !0, u && u(p))
			};
		return new ReadableStream({
			async pull(p) {
				try {
					const {
						done: h,
						value: y
					} = await s.next();
					if (h) {
						m(), p.close();
						return
					}
					let E = y.byteLength;
					if (i) {
						let S = f += E;
						i(S)
					}
					p.enqueue(new Uint8Array(y))
				} catch (h) {
					throw m(h), h
				}
			},
			cancel(p) {
				return m(p), s.return()
			}
		}, {
			highWaterMark: 2
		})
	}, So = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", p0 = So && typeof ReadableStream == "function", Ow = So && (typeof TextEncoder == "function" ? (a => l => a.encode(l))(new TextEncoder) : async a => new Uint8Array(await new Response(a).arrayBuffer())), v0 = (a, ...l) => {
		try {
			return !!a(...l)
		} catch {
			return !1
		}
	}, Tw = p0 && v0(() => {
		let a = !1;
		const l = new Request(pt.origin, {
			body: new ReadableStream,
			method: "POST",
			get duplex() {
				return a = !0, "half"
			}
		}).headers.has("Content-Type");
		return a && !l
	}), Zv = 64 * 1024, gf = p0 && v0(() => H.isReadableStream(new Response("").body)), eo = {
		stream: gf && (a => a.body)
	};
So && (a => {
	["text", "arrayBuffer", "blob", "formData", "stream"].forEach(l => {
		!eo[l] && (eo[l] = H.isFunction(a[l]) ? i => i[l]() : (i, u) => {
			throw new ge(`Response type '${l}' is not supported`, ge.ERR_NOT_SUPPORT, u)
		})
	})
})(new Response);
const ww = async a => {
	if (a == null) return 0;
	if (H.isBlob(a)) return a.size;
	if (H.isSpecCompliantForm(a)) return (await new Request(pt.origin, {
		method: "POST",
		body: a
	}).arrayBuffer()).byteLength;
	if (H.isArrayBufferView(a) || H.isArrayBuffer(a)) return a.byteLength;
	if (H.isURLSearchParams(a) && (a = a + ""), H.isString(a)) return (await Ow(a)).byteLength
}, Cw = async (a, l) => {
	const i = H.toFiniteNumber(a.getContentLength());
	return i ?? ww(l)
}, Nw = So && (async a => {
	let {
		url: l,
		method: i,
		data: u,
		signal: s,
		cancelToken: f,
		timeout: d,
		onDownloadProgress: m,
		onUploadProgress: p,
		responseType: h,
		headers: y,
		withCredentials: E = "same-origin",
		fetchOptions: S
	} = m0(a);
	h = h ? (h + "").toLowerCase() : "text";
	let C = xw([s, f && f.toAbortSignal()], d),
		R;
	const A = C && C.unsubscribe && (() => {
		C.unsubscribe()
	});
	let w;
	try {
		if (p && Tw && i !== "get" && i !== "head" && (w = await Cw(y, u)) !== 0) {
			let q = new Request(l, {
					method: "POST",
					body: u,
					duplex: "half"
				}),
				Q;
			if (H.isFormData(u) && (Q = q.headers.get("content-type")) && y.setContentType(Q), q.body) {
				const [Z, I] = kv(w, Iu(Vv(p)));
				u = Kv(q.body, Zv, Z, I)
			}
		}
		H.isString(E) || (E = E ? "include" : "omit");
		const D = "credentials" in Request.prototype;
		R = new Request(l, {
			...S,
			signal: C,
			method: i.toUpperCase(),
			headers: y.normalize().toJSON(),
			body: u,
			duplex: "half",
			credentials: D ? E : void 0
		});
		let $ = await fetch(R);
		const _ = gf && (h === "stream" || h === "response");
		if (gf && (m || _ && A)) {
			const q = {};
			["status", "statusText", "headers"].forEach(te => {
				q[te] = $[te]
			});
			const Q = H.toFiniteNumber($.headers.get("content-length")),
				[Z, I] = m && kv(Q, Iu(Vv(m), !0)) || [];
			$ = new Response(Kv($.body, Zv, Z, () => {
				I && I(), A && A()
			}), q)
		}
		h = h || "text";
		let Y = await eo[H.findKey(eo, h) || "text"]($, a);
		return !_ && A && A(), await new Promise((q, Q) => {
			d0(q, Q, {
				data: Y,
				headers: Nt.from($.headers),
				status: $.status,
				statusText: $.statusText,
				config: a,
				request: R
			})
		})
	} catch (D) {
		throw A && A(), D && D.name === "TypeError" && /Load failed|fetch/i.test(D.message) ? Object.assign(new ge("Network Error", ge.ERR_NETWORK, a, R), {
			cause: D.cause || D
		}) : ge.from(D, D && D.code, a, R)
	}
}), bf = {
	http: XT,
	xhr: bw,
	fetch: Nw
};
H.forEach(bf, (a, l) => {
	if (a) {
		try {
			Object.defineProperty(a, "name", {
				value: l
			})
		} catch {}
		Object.defineProperty(a, "adapterName", {
			value: l
		})
	}
});
const Jv = a => `- ${a}`,
	Aw = a => H.isFunction(a) || a === null || a === !1,
	y0 = {
		getAdapter: a => {
			a = H.isArray(a) ? a : [a];
			const {
				length: l
			} = a;
			let i, u;
			const s = {};
			for (let f = 0; f < l; f++) {
				i = a[f];
				let d;
				if (u = i, !Aw(i) && (u = bf[(d = String(i)).toLowerCase()], u === void 0)) throw new ge(`Unknown adapter '${d}'`);
				if (u) break;
				s[d || "#" + f] = u
			}
			if (!u) {
				const f = Object.entries(s).map(([m, p]) => `adapter ${m} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build"));
				let d = l ? f.length > 1 ? `since :
` + f.map(Jv).join(`
`) : " " + Jv(f[0]) : "as no adapter specified";
				throw new ge("There is no suitable adapter to dispatch the request " + d, "ERR_NOT_SUPPORT")
			}
			return u
		},
		adapters: bf
	};

function af(a) {
	if (a.cancelToken && a.cancelToken.throwIfRequested(), a.signal && a.signal.aborted) throw new Wl(null, a)
}

function Fv(a) {
	return af(a), a.headers = Nt.from(a.headers), a.data = nf.call(a, a.transformRequest), ["post", "put", "patch"].indexOf(a.method) !== -1 && a.headers.setContentType("application/x-www-form-urlencoded", !1), y0.getAdapter(a.adapter || Oi.adapter)(a).then(function (u) {
		return af(a), u.data = nf.call(a, a.transformResponse, u), u.headers = Nt.from(u.headers), u
	}, function (u) {
		return f0(u) || (af(a), u && u.response && (u.response.data = nf.call(a, a.transformResponse, u.response), u.response.headers = Nt.from(u.response.headers))), Promise.reject(u)
	})
}
const g0 = "1.9.0",
	Ro = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((a, l) => {
	Ro[a] = function (u) {
		return typeof u === a || "a" + (l < 1 ? "n " : " ") + a
	}
});
const Wv = {};
Ro.transitional = function (l, i, u) {
	function s(f, d) {
		return "[Axios v" + g0 + "] Transitional option '" + f + "'" + d + (u ? ". " + u : "")
	}
	return (f, d, m) => {
		if (l === !1) throw new ge(s(d, " has been removed" + (i ? " in " + i : "")), ge.ERR_DEPRECATED);
		return i && !Wv[d] && (Wv[d] = !0, console.warn(s(d, " has been deprecated since v" + i + " and will be removed in the near future"))), l ? l(f, d, m) : !0
	}
};
Ro.spelling = function (l) {
	return (i, u) => (console.warn(`${u} is likely a misspelling of ${l}`), !0)
};

function jw(a, l, i) {
	if (typeof a != "object") throw new ge("options must be an object", ge.ERR_BAD_OPTION_VALUE);
	const u = Object.keys(a);
	let s = u.length;
	for (; s-- > 0;) {
		const f = u[s],
			d = l[f];
		if (d) {
			const m = a[f],
				p = m === void 0 || d(m, f, a);
			if (p !== !0) throw new ge("option " + f + " must be " + p, ge.ERR_BAD_OPTION_VALUE);
			continue
		}
		if (i !== !0) throw new ge("Unknown option " + f, ge.ERR_BAD_OPTION)
	}
}
const ku = {
		assertOptions: jw,
		validators: Ro
	},
	pn = ku.validators;
let Ga = class {
	constructor(l) {
		this.defaults = l || {}, this.interceptors = {
			request: new Gv,
			response: new Gv
		}
	}
	async request(l, i) {
		try {
			return await this._request(l, i)
		} catch (u) {
			if (u instanceof Error) {
				let s = {};
				Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error;
				const f = s.stack ? s.stack.replace(/^.+\n/, "") : "";
				try {
					u.stack ? f && !String(u.stack).endsWith(f.replace(/^.+\n.+\n/, "")) && (u.stack += `
` + f) : u.stack = f
				} catch {}
			}
			throw u
		}
	}
	_request(l, i) {
		typeof l == "string" ? (i = i || {}, i.url = l) : i = l || {}, i = Qa(this.defaults, i);
		const {
			transitional: u,
			paramsSerializer: s,
			headers: f
		} = i;
		u !== void 0 && ku.assertOptions(u, {
			silentJSONParsing: pn.transitional(pn.boolean),
			forcedJSONParsing: pn.transitional(pn.boolean),
			clarifyTimeoutError: pn.transitional(pn.boolean)
		}, !1), s != null && (H.isFunction(s) ? i.paramsSerializer = {
			serialize: s
		} : ku.assertOptions(s, {
			encode: pn.function,
			serialize: pn.function
		}, !0)), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), ku.assertOptions(i, {
			baseUrl: pn.spelling("baseURL"),
			withXsrfToken: pn.spelling("withXSRFToken")
		}, !0), i.method = (i.method || this.defaults.method || "get").toLowerCase();
		let d = f && H.merge(f.common, f[i.method]);
		f && H.forEach(["delete", "get", "head", "post", "put", "patch", "common"], R => {
			delete f[R]
		}), i.headers = Nt.concat(d, f);
		const m = [];
		let p = !0;
		this.interceptors.request.forEach(function (A) {
			typeof A.runWhen == "function" && A.runWhen(i) === !1 || (p = p && A.synchronous, m.unshift(A.fulfilled, A.rejected))
		});
		const h = [];
		this.interceptors.response.forEach(function (A) {
			h.push(A.fulfilled, A.rejected)
		});
		let y, E = 0,
			S;
		if (!p) {
			const R = [Fv.bind(this), void 0];
			for (R.unshift.apply(R, m), R.push.apply(R, h), S = R.length, y = Promise.resolve(i); E < S;) y = y.then(R[E++], R[E++]);
			return y
		}
		S = m.length;
		let C = i;
		for (E = 0; E < S;) {
			const R = m[E++],
				A = m[E++];
			try {
				C = R(C)
			} catch (w) {
				A.call(this, w);
				break
			}
		}
		try {
			y = Fv.call(this, C)
		} catch (R) {
			return Promise.reject(R)
		}
		for (E = 0, S = h.length; E < S;) y = y.then(h[E++], h[E++]);
		return y
	}
	getUri(l) {
		l = Qa(this.defaults, l);
		const i = h0(l.baseURL, l.url, l.allowAbsoluteUrls);
		return o0(i, l.params, l.paramsSerializer)
	}
};
H.forEach(["delete", "get", "head", "options"], function (l) {
	Ga.prototype[l] = function (i, u) {
		return this.request(Qa(u || {}, {
			method: l,
			url: i,
			data: (u || {}).data
		}))
	}
});
H.forEach(["post", "put", "patch"], function (l) {
	function i(u) {
		return function (f, d, m) {
			return this.request(Qa(m || {}, {
				method: l,
				headers: u ? {
					"Content-Type": "multipart/form-data"
				} : {},
				url: f,
				data: d
			}))
		}
	}
	Ga.prototype[l] = i(), Ga.prototype[l + "Form"] = i(!0)
});
let Dw = class b0 {
	constructor(l) {
		if (typeof l != "function") throw new TypeError("executor must be a function.");
		let i;
		this.promise = new Promise(function (f) {
			i = f
		});
		const u = this;
		this.promise.then(s => {
			if (!u._listeners) return;
			let f = u._listeners.length;
			for (; f-- > 0;) u._listeners[f](s);
			u._listeners = null
		}), this.promise.then = s => {
			let f;
			const d = new Promise(m => {
				u.subscribe(m), f = m
			}).then(s);
			return d.cancel = function () {
				u.unsubscribe(f)
			}, d
		}, l(function (f, d, m) {
			u.reason || (u.reason = new Wl(f, d, m), i(u.reason))
		})
	}
	throwIfRequested() {
		if (this.reason) throw this.reason
	}
	subscribe(l) {
		if (this.reason) {
			l(this.reason);
			return
		}
		this._listeners ? this._listeners.push(l) : this._listeners = [l]
	}
	unsubscribe(l) {
		if (!this._listeners) return;
		const i = this._listeners.indexOf(l);
		i !== -1 && this._listeners.splice(i, 1)
	}
	toAbortSignal() {
		const l = new AbortController,
			i = u => {
				l.abort(u)
			};
		return this.subscribe(i), l.signal.unsubscribe = () => this.unsubscribe(i), l.signal
	}
	static source() {
		let l;
		return {
			token: new b0(function (s) {
				l = s
			}),
			cancel: l
		}
	}
};

function Mw(a) {
	return function (i) {
		return a.apply(null, i)
	}
}

function _w(a) {
	return H.isObject(a) && a.isAxiosError === !0
}
const xf = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511
};
Object.entries(xf).forEach(([a, l]) => {
	xf[l] = a
});

function x0(a) {
	const l = new Ga(a),
		i = Fg(Ga.prototype.request, l);
	return H.extend(i, Ga.prototype, l, {
		allOwnKeys: !0
	}), H.extend(i, l, null, {
		allOwnKeys: !0
	}), i.create = function (s) {
		return x0(Qa(a, s))
	}, i
}
const Ge = x0(Oi);
Ge.Axios = Ga;
Ge.CanceledError = Wl;
Ge.CancelToken = Dw;
Ge.isCancel = f0;
Ge.VERSION = g0;
Ge.toFormData = Eo;
Ge.AxiosError = ge;
Ge.Cancel = Ge.CanceledError;
Ge.all = function (l) {
	return Promise.all(l)
};
Ge.spread = Mw;
Ge.isAxiosError = _w;
Ge.mergeConfig = Qa;
Ge.AxiosHeaders = Nt;
Ge.formToJSON = a => c0(H.isHTMLForm(a) ? new FormData(a) : a);
Ge.getAdapter = y0.getAdapter;
Ge.HttpStatusCode = xf;
Ge.default = Ge;
const {
	Axios: Gw,
	AxiosError: Xw,
	CanceledError: kw,
	isCancel: Vw,
	CancelToken: Qw,
	VERSION: Kw,
	all: Zw,
	Cancel: Jw,
	isAxiosError: Fw,
	spread: Ww,
	toFormData: Pw,
	AxiosHeaders: Iw,
	HttpStatusCode: e2,
	formToJSON: t2,
	getAdapter: n2,
	mergeConfig: a2
} = Ge, Uw = () => {
	const [a, l] = g.useState({
		pname: "",
		pmail: "",
		pmobile: "",
		p_age: "",
		pgender: "",
		pmname: "",
		add1: "",
		add2: ""
	}), [i, u] = g.useState("No file chosen, yet!"), [s, f] = g.useState(null), d = E => {
		const S = E.target.files[0];
		S && (f(S), u(S.name))
	}, m = E => {
		E.preventDefault();
		const S = E.dataTransfer.files[0];
		S && (f(S), u(S.name))
	}, p = E => {
		E.preventDefault()
	}, h = E => {
		const {
			name: S,
			value: C
		} = E.target;
		l(R => ({
			...R,
			[S]: C
		}))
	}, y = E => {
		E.preventDefault();
		const S = new FormData;
		Object.entries(a).forEach(([C, R]) => {
			S.append(C, R)
		}), s && S.append("img", s), Ge.post("http://localhost:5000/api/patients", S, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		}).then(C => {
			console.log("Form submitted successfully:", C.data), l({
				pname: "",
				pmail: "",
				pmobile: "",
				p_age: "",
				pgender: "",
				pmname: "",
				add1: "",
				add2: "",
				labrep: ""
			}), f(null), u("No file chosen, yet!")
		}).catch(C => {
			console.error("Form submission error:", C)
		})
	};
	return x.jsxs("div", {
		className: "new-entry-form",
		children: [x.jsx(po, {}), x.jsxs(qa, {
			className: "new-entry-form-card",
			children: [x.jsx(qa.Header, {
				children: "New Entry Form"
			}), x.jsx(qa.Body, {
				children: x.jsxs(pe, {
					onSubmit: y,
					children: [x.jsxs(pe.Group, {
						controlId: "formPatientName",
						className: "mb-4",
						children: [x.jsx(pe.Label, {
							children: "Patient Name"
						}), x.jsx(pe.Control, {
							type: "text",
							placeholder: "Enter Name",
							name: "pname",
							value: a.pname,
							onChange: h
						})]
					}), x.jsxs(pe.Group, {
						controlId: "formPatientEmail",
						className: "mb-4",
						children: [x.jsx(pe.Label, {
							children: "Email"
						}), x.jsx(pe.Control, {
							type: "email",
							placeholder: "Enter Email ID",
							name: "pmail",
							value: a.pmail,
							onChange: h
						}), x.jsx(pe.Text, {
							className: "text-muted",
							children: "We'll never share your email with anyone else."
						})]
					}), x.jsxs(pe.Group, {
						controlId: "formPatientMobile",
						className: "mb-4",
						children: [x.jsx(pe.Label, {
							children: "Mobile Number"
						}), x.jsx(pe.Control, {
							type: "number",
							placeholder: "Enter Mobile Number",
							name: "pmobile",
							value: a.pmobile,
							onChange: h
						}), x.jsx(pe.Text, {
							className: "text-muted",
							children: "We'll never share your mobile number with anyone else."
						})]
					}), x.jsxs(pe.Group, {
						controlId: "formPatientAge",
						className: "mb-4",
						children: [x.jsx(pe.Label, {
							children: "Age"
						}), x.jsx(pe.Control, {
							type: "number",
							placeholder: "Enter Age",
							name: "p_age",
							value: a.p_age,
							onChange: h
						})]
					}), x.jsxs(pe.Group, {
						controlId: "formPatientGender",
						className: "mb-4",
						children: [x.jsx(pe.Label, {
							children: "Gender"
						}), x.jsx(pe.Check, {
							type: "radio",
							label: "Male",
							name: "pgender",
							className: "user-select-gender",
							id: "radio-button-id",
							value: "M",
							onChange: h,
							checked: a.pgender === "M"
						}), x.jsx(pe.Check, {
							type: "radio",
							label: "Female",
							name: "pgender",
							className: "user-select-gender",
							id: "radio-button-id",
							value: "F",
							onChange: h,
							checked: a.pgender === "F"
						}), x.jsx(pe.Check, {
							type: "radio",
							label: "Other",
							name: "pgender",
							className: "user-select-gender",
							id: "radio-button-id",
							value: "O",
							onChange: h,
							checked: a.pgender === "O"
						})]
					}), x.jsxs(pe.Group, {
						controlId: "formPatientMom",
						className: "mb-4",
						children: [x.jsx(pe.Label, {
							children: "Mother's Maiden Name"
						}), x.jsx(pe.Control, {
							type: "text",
							placeholder: "Enter mother's name",
							name: "pmname",
							value: a.pmname,
							onChange: h
						})]
					}), x.jsxs(pe.Group, {
						controlId: "formPatientAddress1",
						className: "mb-4",
						children: [x.jsx(pe.Label, {
							children: "Address1"
						}), x.jsx(pe.Control, {
							as: "textarea",
							name: "add1",
							rows: 5,
							value: a.add1,
							onChange: h
						})]
					}), x.jsxs(pe.Group, {
						controlId: "formPatientAddress2",
						className: "mb-4",
						children: [x.jsx(pe.Label, {
							children: "Address2"
						}), x.jsx(pe.Control, {
							as: "textarea",
							name: "add2",
							rows: 5,
							value: a.add2,
							onChange: h
						})]
					}), x.jsxs("div", {
						className: "d-flex align-items-center",
						children: [x.jsxs("div", {
							className: "text-center",
							children: [x.jsx(pe.Label, {
								children: "Image"
							}), x.jsx(Qu, {
								className: "d-flex flex-column",
								children: x.jsxs("div", {
									className: "border border-dashed p-5 text-center",
									onDragOver: p,
									onDrop: m,
									style: {
										width: "100%",
										maxWidth: "400px",
										borderColor: "#ccc",
										borderRadius: "12px",
										backgroundColor: "#f9f9f9"
									},
									children: [x.jsx(Hv, {
										size: 50,
										color: "#B6B09F"
									}), x.jsx("p", {
										className: "mt-3",
										children: i
									}), x.jsxs(pe.Group, {
										controlId: "formFile",
										className: "mt-3",
										children: [x.jsx(pe.Label, {
											children: x.jsx(rn, {
												variant: "primary",
												style: {
													background: "linear-gradient(to right, #CD5656, #AF3E3E)",
													border: "none"
												},
												children: "Choose a File"
											})
										}), x.jsx(pe.Control, {
											type: "file",
											onChange: d,
											style: {
												display: "none"
											}
										})]
									})]
								})
							})]
						}), x.jsxs("div", {
							className: "text-center",
							children: [x.jsx(pe.Label, {
								children: "Lab Report"
							}), x.jsx(Qu, {
								className: "d-flex flex-column",
								children: x.jsxs("div", {
									className: "border border-dashed p-5 text-center",
									onDragOver: p,
									onDrop: m,
									style: {
										width: "100%",
										maxWidth: "400px",
										borderColor: "#ccc",
										borderRadius: "12px",
										backgroundColor: "#f9f9f9"
									},
									children: [x.jsx(Hv, {
										size: 50,
										color: "#B6B09F"
									}), x.jsx("p", {
										className: "mt-3",
										children: i
									}), x.jsxs(pe.Group, {
										controlId: "formFile",
										className: "mt-3",
										children: [x.jsx(pe.Label, {
											children: x.jsx(rn, {
												variant: "primary",
												style: {
													background: "linear-gradient(to right, #CD5656, #AF3E3E)",
													border: "none"
												},
												children: "Choose a File"
											})
										}), x.jsx(pe.Control, {
											type: "file",
											onChange: d,
											style: {
												display: "none"
											}
										})]
									})]
								})
							})]
						})]
					}), x.jsx("center", {
						children: x.jsx(rn, {
							variant: "primary",
							type: "submit",
							className: "entry-form-submit",
							children: "Submit"
						})
					})]
				})
			})]
		}), x.jsx(vo, {})]
	})
}, zw = () => {
	const [a, l] = g.useState([]), i = no();
	g.useEffect(() => {
		Ge.get("http://localhost:5000/api/patients/pending").then(s => l(s.data)).catch(s => console.error("Error fetching patients:", s))
	}, []);
	const u = s => {
		i("/patient-details", {
			state: {
				patient: s
			}
		})
	};
	return x.jsxs(x.Fragment, {
		children: [x.jsx(po, {}), x.jsxs(Qu, {
			className: "mt-5 mb-5",
			children: [x.jsx("h3", {
				children: "Pending Patients"
			}), x.jsxs(Qg, {
				striped: !0,
				bordered: !0,
				hover: !0,
				responsive: !0,
				children: [x.jsx("thead", {
					children: x.jsxs("tr", {
						children: [x.jsx("th", {
							children: "ID"
						}), x.jsx("th", {
							children: "Name"
						}), x.jsx("th", {
							children: "Email"
						}), x.jsx("th", {
							children: "Mobile"
						}), x.jsx("th", {
							children: "Age"
						}), x.jsx("th", {
							children: "Gender"
						}), x.jsx("th", {
							children: "Mother's Name"
						}), x.jsx("th", {
							children: "Address1"
						}), x.jsx("th", {
							children: "Address2"
						}), x.jsx("th", {
							children: "Image"
						}), x.jsx("th", {
							children: "Action"
						})]
					})
				}), x.jsx("tbody", {
					children: a.map(s => x.jsxs("tr", {
						children: [x.jsx("td", {
							children: s.patient_id
						}), x.jsx("td", {
							children: s.name
						}), x.jsx("td", {
							children: s.email
						}), x.jsx("td", {
							children: s.mobile
						}), x.jsx("td", {
							children: s.age
						}), x.jsx("td", {
							children: s.gender
						}), x.jsx("td", {
							children: s.mother_name
						}), x.jsx("td", {
							children: s.address1
						}), x.jsx("td", {
							children: s.address2
						}), x.jsx("td", {
							children: s.image ? x.jsx(rn, {
								variant: "secondary",
								children: x.jsx("a", {
									href: `http://localhost:5000/uploads/${s.image}`,
									target: "_blank",
									rel: "noreferrer",
									style: {
										textDecoration: "none",
										color: "white"
									},
									children: "View Image"
								})
							}) : "No Image"
						}), x.jsx("td", {
							children: x.jsx(rn, {
								variant: "secondary",
								onClick: () => u(s),
								children: "Attend"
							})
						})]
					}, s.patient_id))
				})]
			})]
		}), x.jsx(vo, {})]
	})
}, Bw = () => {
	const a = ga(),
		{
			patient: l
		} = a.state || {},
		i = no(),
		[u, s] = g.useState({
			presc: "",
			report: "",
			remarks: "",
			p_id: l == null ? void 0 : l.patient_id
		}),
		f = m => {
			const {
				name: p,
				value: h
			} = m.target;
			s(y => ({
				...y,
				[p]: h
			}))
		},
		d = m => {
			m.preventDefault(), Ge.post("http://localhost:5000/api/patient_attend", u).then(p => {
				console.log("Form submitted successfully:", p.data), s({
					presc: "",
					report: "",
					remarks: ""
				}), i("/dr-app")
			}).catch(p => {
				console.error("Form submission error:", p)
			})
		};
	return x.jsxs("div", {
		className: "patient-details",
		children: [x.jsx(po, {}), x.jsx("center", {
			children: x.jsxs(qa, {
				className: "patient-details-card",
				children: [x.jsx(qa.Header, {
					children: x.jsx(qa.Title, {
						className: "text-center fw-bold",
						children: "Patient Details"
					})
				}), x.jsxs(qa.Body, {
					children: [x.jsxs("div", {
						className: "row mb-3",
						children: [x.jsx("div", {
							className: "col-md-4 fw-bold",
							children: "Patient"
						}), x.jsx("div", {
							className: "col-md-8",
							children: l == null ? void 0 : l.name
						})]
					}), x.jsxs("div", {
						className: "row mb-3",
						children: [x.jsx("div", {
							className: "col-md-4 fw-bold",
							children: "Patient ID"
						}), x.jsx("div", {
							className: "col-md-8",
							children: l == null ? void 0 : l.patient_id
						})]
					}), x.jsxs("div", {
						className: "row mb-3",
						children: [x.jsx("div", {
							className: "col-md-4 fw-bold",
							children: "Mail"
						}), x.jsx("div", {
							className: "col-md-8",
							children: l == null ? void 0 : l.email
						})]
					}), x.jsxs("div", {
						className: "row mb-3",
						children: [x.jsx("div", {
							className: "col-md-4 fw-bold",
							children: "Mobile"
						}), x.jsx("div", {
							className: "col-md-8",
							children: l == null ? void 0 : l.mobile
						})]
					}), x.jsxs("div", {
						className: "row mb-3",
						children: [x.jsx("div", {
							className: "col-md-4 fw-bold",
							children: "Age"
						}), x.jsx("div", {
							className: "col-md-8",
							children: l == null ? void 0 : l.age
						})]
					}), x.jsxs("div", {
						className: "row mb-3",
						children: [x.jsx("div", {
							className: "col-md-4 fw-bold",
							children: "Gender"
						}), x.jsx("div", {
							className: "col-md-8",
							children: (l == null ? void 0 : l.gender) === "M" ? "Male" : (l == null ? void 0 : l.gender) === "F" ? "Female" : "Other"
						})]
					}), x.jsxs("div", {
						className: "row mb-3",
						children: [x.jsx("div", {
							className: "col-md-4 fw-bold",
							children: "Mother's Name"
						}), x.jsx("div", {
							className: "col-md-8",
							children: l == null ? void 0 : l.mother_name
						})]
					}), x.jsxs("div", {
						className: "row mb-3",
						children: [x.jsx("div", {
							className: "col-md-4 fw-bold",
							children: "Address1"
						}), x.jsx("div", {
							className: "col-md-8",
							children: l == null ? void 0 : l.address1
						})]
					}), x.jsxs("div", {
						className: "row mb-3",
						children: [x.jsx("div", {
							className: "col-md-4 fw-bold",
							children: "Address2"
						}), x.jsx("div", {
							className: "col-md-8",
							children: l == null ? void 0 : l.address2
						})]
					}), x.jsxs("div", {
						className: "row mb-3",
						children: [x.jsx("div", {
							className: "col-md-4 fw-bold",
							children: "Image"
						}), x.jsx("div", {
							className: "col-md-8",
							children: l != null && l.image ? x.jsx(Yl, {
								src: `http://localhost:5000/uploads/${l.image}`,
								alt: "Patient",
								style: {
									maxWidth: "100%",
									height: "auto",
									borderRadius: "8px"
								}
							}) : "No image"
						})]
					}), x.jsxs(pe, {
						onSubmit: d,
						children: [x.jsxs(pe.Group, {
							className: "mb-3",
							children: [x.jsx(pe.Label, {
								children: "Prescription"
							}), x.jsx(pe.Control, {
								as: "textarea",
								rows: 3,
								name: "presc",
								value: u.presc,
								onChange: f
							})]
						}), x.jsxs(pe.Group, {
							className: "mb-3",
							children: [x.jsx(pe.Label, {
								children: "Lab Report"
							}), x.jsx(pe.Control, {
								as: "textarea",
								rows: 3,
								name: "report",
								value: u.report,
								onChange: f
							})]
						}), x.jsxs(pe.Group, {
							className: "mb-3",
							children: [x.jsx(pe.Label, {
								children: "Remarks"
							}), x.jsx(pe.Control, {
								as: "textarea",
								rows: 3,
								name: "remarks",
								value: u.remarks,
								onChange: f
							})]
						}), x.jsx(rn, {
							type: "submit",
							className: "submit-btn",
							children: "Submit"
						})]
					})]
				})]
			})
		}), x.jsx(vo, {})]
	})
};

function Lw() {
	return x.jsx(aE, {
		children: x.jsx(_x, {
			children: x.jsxs(ql, {
				path: "/",
				children: [x.jsx(ql, {
					index: !0,
					element: x.jsx(aT, {})
				}), x.jsx(ql, {
					path: "/new-entry",
					element: x.jsx(Uw, {})
				}), x.jsx(ql, {
					path: "/dr-app",
					element: x.jsx(zw, {})
				}), x.jsx(ql, {
					path: "/patient-details",
					element: x.jsx(Bw, {})
				})]
			})
		})
	})
}
G1.createRoot(document.getElementById("root")).render(x.jsx(g.StrictMode, {
	children: x.jsx(Lw, {})
}));