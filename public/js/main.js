function btnSearchClick() {
    $(".btn-search-home").click()
}

function check_add_order() {
    var e = $("#order_quantity").val(),
        t = $("#search_id_product").val(),
        n = parseInt(e);
    return !(isNaN(n) || "" == t || n < 0) || (alert("H\xe3y ch\u1ecdn s\u1ea3n ph\u1ea9m v\xe0 nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng c\u1ea7n mua"), !1)
}

function checkForm(e) {
    var t = $("#captcha_valid").val().toUpperCase();
    return trim($("#input_captcha_valid").val()).toUpperCase() == trim(t) ? void clickOrder(e.target) : ($("#notice").text("M\xe3 b\u1ea3o v\u1ec7 kh\xf4ng ch\xednh x\xe1c!").show().fadeOut(3e3), e.preventDefault(), !1)
}

function checkdefault() {
    return !0
}

function echeck(e) {
    var t = "@",
        n = ".",
        i = e.indexOf(t),
        o = e.length;
    e.indexOf(n);
    return "" != e && (-1 != e.indexOf(t) && (-1 != e.indexOf(t) && 0 != e.indexOf(t) && e.indexOf(t) != o && (-1 != e.indexOf(n) && 0 != e.indexOf(n) && e.indexOf(n) != o && (-1 == e.indexOf(t, i + 1) && (e.substring(i - 1, i) != n && e.substring(i + 1, i + 2) != n && (-1 != e.indexOf(n, i + 2) && -1 == e.indexOf(" ")))))))
}

function trim(e) {
    for (var t = e; 32 == t.charCodeAt(0);) t = t.substring(1);
    for (; 32 == t.charCodeAt(t.length - 1);) t = t.substring(0, t.length - 1);
    return t
}

function showAd(e, t, n, i, o) {
    var r = $(window).width(),
        a = e + t + 2 * n;
    startLY = startRY = (r - a) / 2, r > a - 90 ? (set1(i, 245, startLY), set2(o, 245, startRY)) : ($(i).css("display", "none"), $(o).css("display", "none"))
}

function set1(e, t, n) {
    $(e).css({
        left: n,
        top: t,
        position: "fixed",
        display: "block"
    })
}

function set2(e, t, n) {
    $(e).css({
        right: n,
        top: t,
        position: "fixed",
        display: "block"
    })
}

function clickOrder(e) {
    $(e).val("Loading...")
}

function addItemString(e, t) {
    return e = e + t + ","
}

function removeString(e, t) {
    return e = e.replace(t + ",", "")
}

function setSessionLocal() {
    Cart.lists.length > 0 && $.ajax({
        url: "/carts/localSession",
        type: "POST",
        dataType: "script",
        data: {
            cartSession: Cart.lists,
            count: Cart.lists.length
        }
    })
}
if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = !!e && "length" in e && e.length,
                n = fe.type(e);
            return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e, t, n) {
            if (fe.isFunction(t)) return fe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return fe.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if ($e.test(t)) return fe.filter(t, e, n);
                t = fe.filter(t, e)
            }
            return fe.grep(e, function(e) {
                return fe.inArray(e, t) > -1 !== n
            })
        }

        function o(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }

        function r(e) {
            var t = {};
            return fe.each(e.match(Ee) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (ie.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (a(), fe.ready())
        }

        function l(e, t, n) {
            if (n === undefined && 1 === e.nodeType) {
                var i = "data-" + t.replace(De, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? fe.parseJSON(n) : n)
                    } catch (e) {}
                    fe.data(e, t, n)
                } else n = undefined
            }
            return n
        }

        function c(e) {
            var t;
            for (t in e)
                if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function u(e, t, n, i) {
            if (Ae(e)) {
                var o, r, a = fe.expando,
                    s = e.nodeType,
                    l = s ? fe.cache : e,
                    c = s ? e[a] : e[a] && a;
                if (c && l[c] && (i || l[c].data) || n !== undefined || "string" != typeof t) return c || (c = s ? e[a] = ne.pop() || fe.guid++ : a), l[c] || (l[c] = s ? {} : {
                    toJSON: fe.noop
                }), "object" != typeof t && "function" != typeof t || (i ? l[c] = fe.extend(l[c], t) : l[c].data = fe.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), n !== undefined && (r[fe.camelCase(t)] = n), "string" == typeof t ? null == (o = r[t]) && (o = r[fe.camelCase(t)]) : o = r, o
            }
        }

        function d(e, t, n) {
            if (Ae(e)) {
                var i, o, r = e.nodeType,
                    a = r ? fe.cache : e,
                    s = r ? e[fe.expando] : fe.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in i ? t = [t] : (t = fe.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                        for (; o--;) delete i[t[o]];
                        if (n ? !c(i) : !fe.isEmptyObject(i)) return
                    }(n || (delete a[s].data, c(a[s]))) && (r ? fe.cleanData([e], !0) : de.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
                }
            }
        }

        function p(e, t, n, i) {
            var o, r = 1,
                a = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return fe.css(e, t, "")
                },
                l = s(),
                c = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
                u = (fe.cssNumber[t] || "px" !== c && +l) && He.exec(fe.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do {
                    r = r || ".5", u /= r, fe.style(e, t, u + c)
                } while (r !== (r = s() / l) && 1 !== r && --a)
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }

        function f(e) {
            var t = We.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function h(e, t) {
            var n, i, o = 0,
                r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
            if (!r)
                for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || fe.nodeName(i, t) ? r.push(i) : fe.merge(r, h(i, t));
            return t === undefined || t && fe.nodeName(e, t) ? fe.merge([e], r) : r
        }

        function m(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) fe._data(n, "globalEval", !t || fe._data(t[i], "globalEval"))
        }

        function g(e) {
            Me.test(e.type) && (e.defaultChecked = e.checked)
        }

        function v(e, t, n, i, o) {
            for (var r, a, s, l, c, u, d, p = e.length, v = f(t), y = [], b = 0; b < p; b++)
                if ((a = e[b]) || 0 === a)
                    if ("object" === fe.type(a)) fe.merge(y, a.nodeType ? [a] : a);
                    else if (Xe.test(a)) {
                for (l = l || v.appendChild(t.createElement("div")), c = (qe.exec(a) || ["", ""])[1].toLowerCase(), d = Be[c] || Be._default, l.innerHTML = d[1] + fe.htmlPrefilter(a) + d[2], r = d[0]; r--;) l = l.lastChild;
                if (!de.leadingWhitespace && ze.test(a) && y.push(t.createTextNode(ze.exec(a)[0])), !de.tbody)
                    for (a = "table" !== c || Qe.test(a) ? "<table>" !== d[1] || Qe.test(a) ? 0 : l : l.firstChild, r = a && a.childNodes.length; r--;) fe.nodeName(u = a.childNodes[r], "tbody") && !u.childNodes.length && a.removeChild(u);
                for (fe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = v.lastChild
            } else y.push(t.createTextNode(a));
            for (l && v.removeChild(l), de.appendChecked || fe.grep(h(y, "input"), g), b = 0; a = y[b++];)
                if (i && fe.inArray(a, i) > -1) o && o.push(a);
                else if (s = fe.contains(a.ownerDocument, a), l = h(v.appendChild(a), "script"), s && m(l), n)
                for (r = 0; a = l[r++];) Re.test(a.type || "") && n.push(a);
            return l = null, v
        }

        function y() {
            return !0
        }

        function b() {
            return !1
        }

        function w() {
            try {
                return ie.activeElement
            } catch (e) {}
        }

        function x(e, t, n, i, o, r) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = undefined);
                for (s in t) x(e, s, n, i, t[s], r);
                return e
            }
            if (null == i && null == o ? (o = n, i = n = undefined) : null == o && ("string" == typeof n ? (o = i, i = undefined) : (o = i, i = n, n = undefined)), !1 === o) o = b;
            else if (!o) return e;
            return 1 === r && (a = o, o = function(e) {
                return fe().off(e), a.apply(this, arguments)
            }, o.guid = a.guid || (a.guid = fe.guid++)), e.each(function() {
                fe.event.add(this, t, o, i, n)
            })
        }

        function _(e, t) {
            return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function $(e) {
            return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e
        }

        function k(e) {
            var t = it.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function C(e, t) {
            if (1 === t.nodeType && fe.hasData(e)) {
                var n, i, o, r = fe._data(e),
                    a = fe._data(t, r),
                    s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, o = s[n].length; i < o; i++) fe.event.add(t, n, s[n][i])
                }
                a.data && (a.data = fe.extend({}, a.data))
            }
        }

        function T(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !de.noCloneEvent && t[fe.expando]) {
                    o = fe._data(t);
                    for (i in o.events) fe.removeEvent(t, i, o.handle);
                    t.removeAttribute(fe.expando)
                }
                "script" === n && t.text !== e.text ? ($(t).text = e.text, k(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Me.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function S(e, t, n, i) {
            t = re.apply([], t);
            var o, r, a, s, l, c, u = 0,
                d = e.length,
                p = d - 1,
                f = t[0],
                m = fe.isFunction(f);
            if (m || d > 1 && "string" == typeof f && !de.checkClone && nt.test(f)) return e.each(function(o) {
                var r = e.eq(o);
                m && (t[0] = f.call(this, o, r.html())), S(r, t, n, i)
            });
            if (d && (c = v(t, e[0].ownerDocument, !1, e, i), o = c.firstChild, 1 === c.childNodes.length && (c = o), o || i)) {
                for (s = fe.map(h(c, "script"), $), a = s.length; u < d; u++) r = c, u !== p && (r = fe.clone(r, !0, !0), a && fe.merge(s, h(r, "script"))), n.call(e[u], r, u);
                if (a)
                    for (l = s[s.length - 1].ownerDocument, fe.map(s, k), u = 0; u < a; u++) r = s[u], Re.test(r.type || "") && !fe._data(r, "globalEval") && fe.contains(l, r) && (r.src ? fe._evalUrl && fe._evalUrl(r.src) : fe.globalEval((r.text || r.textContent || r.innerHTML || "").replace(ot, "")));
                c = o = null
            }
            return e
        }

        function E(e, t, n) {
            for (var i, o = t ? fe.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || fe.cleanData(h(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && m(h(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function j(e, t) {
            var n = fe(t.createElement(e)).appendTo(t.body),
                i = fe.css(n[0], "display");
            return n.detach(), i
        }

        function N(e) {
            var t = ie,
                n = lt[e];
            return n || (n = j(e, t), "none" !== n && n || (st = (st || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (st[0].contentWindow || st[0].contentDocument).document, t.write(), t.close(), n = j(e, t), st.detach()), lt[e] = n), n
        }

        function A(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function I(e) {
            if (e in $t) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = _t.length; n--;)
                if ((e = _t[n] + t) in $t) return e
        }

        function D(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++) i = e[a], i.style && (r[a] = fe._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Le(i) && (r[a] = fe._data(i, "olddisplay", N(i.nodeName)))) : (o = Le(i), (n && "none" !== n || !o) && fe._data(i, "olddisplay", o ? n : fe.css(i, "display"))));
            for (a = 0; a < s; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function P(e, t, n) {
            var i = bt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function H(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += fe.css(e, n + Fe[r], !0, o)), i ? ("content" === n && (a -= fe.css(e, "padding" + Fe[r], !0, o)), "margin" !== n && (a -= fe.css(e, "border" + Fe[r] + "Width", !0, o))) : (a += fe.css(e, "padding" + Fe[r], !0, o), "padding" !== n && (a += fe.css(e, "border" + Fe[r] + "Width", !0, o)));
            return a
        }

        function F(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = ft(e),
                a = de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, r);
            if (o <= 0 || null == o) {
                if (o = ht(e, t, r), (o < 0 || null == o) && (o = e.style[t]), ut.test(o)) return o;
                i = a && (de.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + H(e, t, n || (a ? "border" : "content"), i, r) + "px"
        }

        function L(e, t, n, i, o) {
            return new L.prototype.init(e, t, n, i, o)
        }

        function O() {
            return e.setTimeout(function() {
                kt = undefined
            }), kt = fe.now()
        }

        function M(e, t) {
            var n, i = {
                    height: e
                },
                o = 0;
            for (t = t ? 1 : 0; o < 4; o += 2 - t) n = Fe[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function q(e, t, n) {
            for (var i, o = (W.tweeners[t] || []).concat(W.tweeners["*"]), r = 0, a = o.length; r < a; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function R(e, t, n) {
            var i, o, r, a, s, l, c, u = this,
                d = {},
                p = e.style,
                f = e.nodeType && Le(e),
                h = fe._data(e, "fxshow");
            n.queue || (s = fe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--, fe.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = fe.css(e, "display"), "inline" === ("none" === c ? fe._data(e, "olddisplay") || N(e.nodeName) : c) && "none" === fe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", de.shrinkWrapBlocks() || u.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], Tt.exec(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !h || h[i] === undefined) continue;
                        f = !0
                    }
                    d[i] = h && h[i] || fe.style(e, i)
                } else c = undefined;
            if (fe.isEmptyObject(d)) "inline" === ("none" === c ? N(e.nodeName) : c) && (p.display = c);
            else {
                h ? "hidden" in h && (f = h.hidden) : h = fe._data(e, "fxshow", {}), r && (h.hidden = !f), f ? fe(e).show() : u.done(function() {
                    fe(e).hide()
                }), u.done(function() {
                    var t;
                    fe._removeData(e, "fxshow");
                    for (t in d) fe.style(e, t, d[t])
                });
                for (i in d) a = q(f ? h[i] : 0, i, u), i in h || (h[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function z(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = fe.camelCase(n), o = t[i], r = e[n], fe.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = fe.cssHooks[i]) && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
                } else t[i] = o
        }

        function W(e, t, n) {
            var i, o, r = 0,
                a = W.prefilters.length,
                s = fe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var t = kt || O(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r);
                    return s.notifyWith(e, [c, r, n]), r < 1 && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: fe.extend({}, t),
                    opts: fe.extend(!0, {
                        specialEasing: {},
                        easing: fe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: kt || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = fe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (z(u, c.opts.specialEasing); r < a; r++)
                if (i = W.prefilters[r].call(c, e, u, c.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(c.elem, c.opts.queue).stop = fe.proxy(i.stop, i)), i;
            return fe.map(u, q, c), fe.isFunction(c.opts.start) && c.opts.start.call(e, c), fe.fx.timer(fe.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function B(e) {
            return fe.attr(e, "class") || ""
        }

        function X(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(Ee) || [];
                if (fe.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Q(e, t, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, fe.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var r = {},
                a = e === Vt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function G(e, t) {
            var n, i, o = fe.ajaxSettings.flatOptions || {};
            for (i in t) t[i] !== undefined && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && fe.extend(!0, e, n), e
        }

        function Y(e, t, n) {
            for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), o === undefined && (o = e.mimeType || t.getResponseHeader("Content-Type"));
            if (o)
                for (a in s)
                    if (s[a] && s[a].test(o)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        r = a;
                        break
                    }
                    i || (i = a)
                }
                r = r || i
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function U(e, t, n, i) {
            var o, r, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (r = u.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (!(a = c[l + " " + r] || c["* " + r]))
                    for (o in c)
                        if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], u.unshift(s[1]));
                            break
                        }
                if (!0 !== a)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function J(e) {
            return e.style && e.style.display || fe.css(e, "display")
        }

        function V(e) {
            if (!fe.contains(e.ownerDocument || ie, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === J(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function K(e, t, n, i) {
            var o;
            if (fe.isArray(t)) fe.each(t, function(t, o) {
                n || nn.test(e) ? i(e, o) : K(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== fe.type(t)) i(e, t);
            else
                for (o in t) K(e + "[" + o + "]", t[o], n, i)
        }

        function Z() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        }

        function ee() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function te(e) {
            return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var ne = [],
            ie = e.document,
            oe = ne.slice,
            re = ne.concat,
            ae = ne.push,
            se = ne.indexOf,
            le = {},
            ce = le.toString,
            ue = le.hasOwnProperty,
            de = {},
            pe = "1.12.4",
            fe = function(e, t) {
                return new fe.fn.init(e, t)
            },
            he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            me = /^-ms-/,
            ge = /-([\da-z])/gi,
            ve = function(e, t) {
                return t.toUpperCase()
            };
        fe.fn = fe.prototype = {
            jquery: pe,
            constructor: fe,
            selector: "",
            length: 0,
            toArray: function() {
                return oe.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : oe.call(this)
            },
            pushStack: function(e) {
                var t = fe.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return fe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(fe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(oe.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ae,
            sort: ne.sort,
            splice: ne.splice
        }, fe.extend = fe.fn.extend = function() {
            var e, t, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || fe.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (o = arguments[s]))
                    for (i in o) e = a[i], n = o[i], a !== n && (c && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1, r = e && fe.isArray(e) ? e : []) : r = e && fe.isPlainObject(e) ? e : {}, a[i] = fe.extend(c, r, n)) : n !== undefined && (a[i] = n));
            return a
        }, fe.extend({
            expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === fe.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === fe.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (!de.ownFirst)
                    for (t in e) return ue.call(e, t);
                for (t in e);
                return t === undefined || ue.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && fe.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(me, "ms-").replace(ge, ve)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var i, o = 0;
                if (n(e))
                    for (i = e.length; o < i && !1 !== t.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === t.call(e[o], o, e[o])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(he, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? fe.merge(i, "string" == typeof e ? [e] : e) : ae.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (se) return se.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n;) e[o++] = t[i++];
                if (n !== n)
                    for (; t[i] !== undefined;) e[o++] = t[i++];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) !== a && i.push(e[o]);
                return i
            },
            map: function(e, t, i) {
                var o, r, a = 0,
                    s = [];
                if (n(e))
                    for (o = e.length; a < o; a++) null != (r = t(e[a], a, i)) && s.push(r);
                else
                    for (a in e) null != (r = t(e[a], a, i)) && s.push(r);
                return re.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                return "string" == typeof t && (o = e[t], t = e, e = o), fe.isFunction(e) ? (n = oe.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(oe.call(arguments)))
                }, i.guid = e.guid = e.guid || fe.guid++, i) : undefined
            },
            now: function() {
                return +new Date
            },
            support: de
        }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            le["[object " + t + "]"] = t.toLowerCase()
        });
        var ye = function(e) {
            function t(e, t, n, i) {
                var o, r, a, s, l, c, d, f, h = t && t.ownerDocument,
                    m = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                if (!i && ((t ? t.ownerDocument || t : q) !== I && A(t), t = t || I, P)) {
                    if (11 !== m && (c = ve.exec(e)))
                        if (o = c[1]) {
                            if (9 === m) {
                                if (!(a = t.getElementById(o))) return n;
                                if (a.id === o) return n.push(a), n
                            } else if (h && (a = h.getElementById(o)) && O(t, a) && a.id === o) return n.push(a), n
                        } else {
                            if (c[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((o = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n
                        }
                    if (x.qsa && !X[e + " "] && (!H || !H.test(e))) {
                        if (1 !== m) h = t, f = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = M), d = C(e), r = d.length, l = pe.test(s) ? "#" + s : "[id='" + s + "']"; r--;) d[r] = l + " " + p(d[r]);
                            f = d.join(","), h = ye.test(e) && u(t.parentNode) || t
                        }
                        if (f) try {
                            return K.apply(n, h.querySelectorAll(f)), n
                        } catch (e) {} finally {
                            s === M && t.removeAttribute("id")
                        }
                    }
                }
                return S(e.replace(se, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[M] = !0, e
            }

            function o(e) {
                var t = I.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function d() {}

            function p(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = z++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, a) {
                    var s, l, c, u = [R, r];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) {
                                if (c = t[M] || (t[M] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === R && s[1] === r) return u[2] = s[2];
                                if (l[i] = u, u[2] = e(t, n, a)) return !0
                            }
                }
            }

            function h(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, n, i) {
                for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
                return i
            }

            function g(e, t, n, i, o) {
                for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
                return a
            }

            function v(e, t, n, o, r, a) {
                return o && !o[M] && (o = v(o)), r && !r[M] && (r = v(r, a)), i(function(i, a, s, l) {
                    var c, u, d, p = [],
                        f = [],
                        h = a.length,
                        v = i || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !i && t ? v : g(v, p, e, s, l),
                        b = n ? r || (i ? e : h || o) ? [] : a : y;
                    if (n && n(y, b, s, l), o)
                        for (c = g(b, f), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = r ? ee(i, d) : p[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else b = g(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : K.apply(a, b)
                })
            }

            function y(e) {
                for (var t, n, i, o = e.length, r = _.relative[e[0].type], a = r || _.relative[" "], s = r ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, a, !0), c = f(function(e) {
                        return ee(t, e) > -1
                    }, a, !0), u = [function(e, n, i) {
                        var o = !r && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, o
                    }]; s < o; s++)
                    if (n = _.relative[e[s].type]) u = [f(h(u), n)];
                    else {
                        if (n = _.filter[e[s].type].apply(null, e[s].matches), n[M]) {
                            for (i = ++s; i < o && !_.relative[e[i].type]; i++);
                            return v(s > 1 && h(u), s > 1 && p(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, s < i && y(e.slice(s, i)), i < o && y(e = e.slice(i)), i < o && p(e))
                        }
                        u.push(n)
                    }
                return h(u)
            }

            function b(e, n) {
                var o = n.length > 0,
                    r = e.length > 0,
                    a = function(i, a, s, l, c) {
                        var u, d, p, f = 0,
                            h = "0",
                            m = i && [],
                            v = [],
                            y = E,
                            b = i || r && _.find.TAG("*", c),
                            w = R += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (c && (E = a === I || a || c); h !== x && null != (u = b[h]); h++) {
                            if (r && u) {
                                for (d = 0, a || u.ownerDocument === I || (A(u), s = !P); p = e[d++];)
                                    if (p(u, a || I, s)) {
                                        l.push(u);
                                        break
                                    }
                                c && (R = w)
                            }
                            o && ((u = !p && u) && f--, i && m.push(u))
                        }
                        if (f += h, o && h !== f) {
                            for (d = 0; p = n[d++];) p(m, v, a, s);
                            if (i) {
                                if (f > 0)
                                    for (; h--;) m[h] || v[h] || (v[h] = J.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (R = w, E = y), m
                    };
                return o ? i(a) : a
            }
            var w, x, _, $, k, C, T, S, E, j, N, A, I, D, P, H, F, L, O, M = "sizzle" + 1 * new Date,
                q = e.document,
                R = 0,
                z = 0,
                W = n(),
                B = n(),
                X = n(),
                Q = function(e, t) {
                    return e === t && (N = !0), 0
                },
                G = 1 << 31,
                Y = {}.hasOwnProperty,
                U = [],
                J = U.pop,
                V = U.push,
                K = U.push,
                Z = U.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                ae = new RegExp(ne + "+", "g"),
                se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(re),
                pe = new RegExp("^" + ie + "$"),
                fe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                he = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                xe = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                _e = function() {
                    A()
                };
            try {
                K.apply(U = Z.call(q.childNodes), q.childNodes), U[q.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: U.length ? function(e, t) {
                        V.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, A = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : q;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, D = I.documentElement, P = !k(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)), x.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = o(function(e) {
                    return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = ge.test(I.getElementsByClassName), x.getById = o(function(e) {
                    return D.appendChild(e).id = M, !I.getElementsByName || !I.getElementsByName(M).length
                }), x.getById ? (_.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, _.filter.ID = function(e) {
                    var t = e.replace(we, xe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete _.find.ID, _.filter.ID = function(e) {
                    var t = e.replace(we, xe);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), _.find.TAG = x.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, _.find.CLASS = x.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && P) return t.getElementsByClassName(e)
                }, F = [], H = [], (x.qsa = ge.test(I.querySelectorAll)) && (o(function(e) {
                    D.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || H.push(".#.+[+~]")
                }), o(function(e) {
                    var t = I.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
                })), (x.matchesSelector = ge.test(L = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
                    x.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), F.push("!=", re)
                }), H = H.length && new RegExp(H.join("|")), F = F.length && new RegExp(F.join("|")), t = ge.test(D.compareDocumentPosition), O = t || ge.test(D.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, Q = t ? function(e, t) {
                    if (e === t) return N = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === q && O(q, e) ? -1 : t === I || t.ownerDocument === q && O(q, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return N = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        l = [t];
                    if (!o || !r) return e === I ? -1 : t === I ? 1 : o ? -1 : r ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                    if (o === r) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? a(s[i], l[i]) : s[i] === q ? -1 : l[i] === q ? 1 : 0
                }, I) : I
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== I && A(e), n = n.replace(ue, "='$1']"), x.matchesSelector && P && !X[n + " "] && (!F || !F.test(n)) && (!H || !H.test(n))) try {
                    var i = L.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, I, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== I && A(e), O(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== I && A(e);
                var n = _.attrHandle[t.toLowerCase()],
                    i = n && Y.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !P) : undefined;
                return i !== undefined ? i : x.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (N = !x.detectDuplicates, j = !x.sortStable && e.slice(0), e.sort(Q), N) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return j = null, e
            }, $ = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += $(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += $(t);
                return n
            }, _ = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, p, f, h, m = r !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (p = t; p = p[m];)
                                            if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (p = g, d = p[M] || (p[M] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === R && c[1], b = f && c[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (b = f = 0) || h.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            u[e] = [R, f, b];
                                            break
                                        }
                                } else if (y && (p = t, d = p[M] || (p[M] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], f = c[0] === R && c[1], b = f), !1 === b)
                                    for (;
                                        (p = ++f && p && p[m] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[M] || (p[M] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [R, b]), p !== t)););
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[M] ? r(n) : r.length > 1 ? (o = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            o = T(e.replace(se, "$1"));
                        return o[M] ? i(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(we, xe),
                            function(t) {
                                return (t.textContent || t.innerText || $(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === D
                    },
                    focus: function(e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !_.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, _.pseudos.nth = _.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[w] = s(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[w] = l(w);
            return d.prototype = _.filters = _.pseudos, _.setFilters = new d, C = t.tokenize = function(e, n) {
                var i, o, r, a, s, l, c, u = B[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = _.preFilter; s;) {
                    i && !(o = le.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ce.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(se, " ")
                    }), s = s.slice(i.length));
                    for (a in _.filter) !(o = fe[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : B(e, l).slice(0)
            }, T = t.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = X[e + " "];
                if (!r) {
                    for (t || (t = C(e)), n = t.length; n--;) r = y(t[n]), r[M] ? i.push(r) : o.push(r);
                    r = X(e, b(o, i)), r.selector = e
                }
                return r
            }, S = t.select = function(e, t, n, i) {
                var o, r, a, s, l, c = "function" == typeof e && e,
                    d = !i && C(e = c.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && x.getById && 9 === t.nodeType && P && _.relative[r[1].type]) {
                        if (!(t = (_.find.ID(a.matches[0].replace(we, xe), t) || [])[0])) return n;
                        c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                    }
                    for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !_.relative[s = a.type]);)
                        if ((l = _.find[s]) && (i = l(a.matches[0].replace(we, xe), ye.test(r[0].type) && u(t.parentNode) || t))) {
                            if (r.splice(o, 1), !(e = i.length && p(r))) return K.apply(n, i), n;
                            break
                        }
                }
                return (c || T(e, d))(i, t, !P, n, !t || ye.test(e) && u(t.parentNode) || t), n
            }, x.sortStable = M.split("").sort(Q).join("") === M, x.detectDuplicates = !!N, A(), x.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(I.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(te, function(e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains;
        var be = function(e, t, n) {
                for (var i = [], o = n !== undefined;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && fe(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            we = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            xe = fe.expr.match.needsContext,
            _e = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            $e = /^.[^:#\[\.,]*$/;
        fe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, fe.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                    for (t = 0; t < o; t++)
                        if (fe.contains(i[t], this)) return !0
                }));
                for (t = 0; t < o; t++) fe.find(e, i[t], n);
                return n = this.pushStack(o > 1 ? fe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && xe.test(e) ? fe(e) : e || [], !1).length
            }
        });
        var ke, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (fe.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || ke, "string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ce.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), _e.test(i[1]) && fe.isPlainObject(t))
                        for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if ((o = ie.getElementById(i[2])) && o.parentNode) {
                    if (o.id !== i[2]) return ke.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = ie, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this))
        }).prototype = fe.fn, ke = fe(ie);
        var Te = /^(?:parents|prev(?:Until|All))/,
            Se = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        fe.fn.extend({
            has: function(e) {
                var t, n = fe(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (fe.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, o = this.length, r = [], a = xe.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? fe.uniqueSort(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), fe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return be(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return be(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return be(e, "nextSibling")
            },
            prevAll: function(e) {
                return be(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return be(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return be(e, "previousSibling", n)
            },
            siblings: function(e) {
                return we((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return we(e.firstChild)
            },
            contents: function(e) {
                return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
            }
        }, function(e, t) {
            fe.fn[e] = function(n, i) {
                var o = fe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = fe.filter(i, o)), this.length > 1 && (Se[e] || (o = fe.uniqueSort(o)), Te.test(e) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var Ee = /\S+/g;
        fe.Callbacks = function(e) {
            e = "string" == typeof e ? r(e) : fe.extend({}, e);
            var t, n, i, o, a = [],
                s = [],
                l = -1,
                c = function() {
                    for (o = e.once, i = t = !0; s.length; l = -1)
                        for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
                },
                u = {
                    add: function() {
                        return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                            fe.each(n, function(n, i) {
                                fe.isFunction(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== fe.type(i) && t(i)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return fe.each(arguments, function(e, t) {
                            for (var n;
                                (n = fe.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? fe.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return o = s = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return o = !0, n || u.disable(), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(e, n) {
                        return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, fe.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", fe.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", fe.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", fe.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return fe.Deferred(function(n) {
                                fe.each(t, function(t, r) {
                                    var a = fe.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? fe.extend(e, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, fe.each(t, function(e, r) {
                    var a = r[2],
                        s = r[3];
                    i[r[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, i, o = 0,
                    r = oe.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && fe.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : fe.Deferred(),
                    c = function(e, n, i) {
                        return function(o) {
                            n[e] = this, i[e] = arguments.length > 1 ? oe.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); o < a; o++) r[o] && fe.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(l.reject) : --s;
                return s || l.resolveWith(i, r), l.promise()
            }
        });
        var je;
        fe.fn.ready = function(e) {
            return fe.ready.promise().done(e), this
        }, fe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? fe.readyWait++ : fe.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, !0 !== e && --fe.readyWait > 0 || (je.resolveWith(ie, [fe]), fe.fn.triggerHandler && (fe(ie).triggerHandler("ready"), fe(ie).off("ready"))))
            }
        }), fe.ready.promise = function(t) {
            if (!je)
                if (je = fe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(fe.ready);
                else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s);
            else {
                ie.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && ie.documentElement
                } catch (e) {}
                n && n.doScroll && function t() {
                    if (!fe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return e.setTimeout(t, 50)
                        }
                        a(), fe.ready()
                    }
                }()
            }
            return je.promise(t)
        }, fe.ready.promise();
        var Ne;
        for (Ne in fe(de)) break;
        de.ownFirst = "0" === Ne, de.inlineBlockNeedsLayout = !1, fe(function() {
                var e, t, n, i;
                (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = ie.createElement("div");
                de.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    de.deleteExpando = !1
                }
                e = null
            }();
        var Ae = function(e) {
                var t = fe.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            },
            Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            De = /([A-Z])/g;
        fe.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return !!(e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando]) && !c(e)
                },
                data: function(e, t, n) {
                    return u(e, t, n)
                },
                removeData: function(e, t) {
                    return d(e, t)
                },
                _data: function(e, t, n) {
                    return u(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return d(e, t, !0)
                }
            }), fe.fn.extend({
                data: function(e, t) {
                    var n, i, o, r = this[0],
                        a = r && r.attributes;
                    if (e === undefined) {
                        if (this.length && (o = fe.data(r), 1 === r.nodeType && !fe._data(r, "parsedAttrs"))) {
                            for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = fe.camelCase(i.slice(5)), l(r, i, o[i])));
                            fe._data(r, "parsedAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        fe.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                        fe.data(this, e, t)
                    }) : r ? l(r, e, fe.data(r, e)) : undefined
                },
                removeData: function(e) {
                    return this.each(function() {
                        fe.removeData(this, e)
                    })
                }
            }), fe.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = fe._data(e, t), n && (!i || fe.isArray(n) ? i = fe._data(e, t, fe.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = fe.queue(e, t),
                        i = n.length,
                        o = n.shift(),
                        r = fe._queueHooks(e, t),
                        a = function() {
                            fe.dequeue(e, t)
                        };
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return fe._data(e, n) || fe._data(e, n, {
                        empty: fe.Callbacks("once memory").add(function() {
                            fe._removeData(e, t + "queue"), fe._removeData(e, n)
                        })
                    })
                }
            }), fe.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : t === undefined ? this : this.each(function() {
                        var n = fe.queue(this, e, t);
                        fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        fe.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                        o = fe.Deferred(),
                        r = this,
                        a = this.length,
                        s = function() {
                            --i || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = fe._data(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                    return s(), o.promise(t)
                }
            }),
            function() {
                var e;
                de.shrinkWrapBlocks = function() {
                    if (null != e) return e;
                    e = !1;
                    var t, n, i;
                    return (n = ie.getElementsByTagName("body")[0]) && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
                }
            }();
        var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            He = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
            Fe = ["Top", "Right", "Bottom", "Left"],
            Le = function(e, t) {
                return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
            },
            Oe = function(e, t, n, i, o, r, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === fe.type(n)) {
                    o = !0;
                    for (s in n) Oe(e, t, s, n[s], !0, r, a)
                } else if (i !== undefined && (o = !0, fe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(fe(e), n)
                    })), t))
                    for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            },
            Me = /^(?:checkbox|radio)$/i,
            qe = /<([\w:-]+)/,
            Re = /^$|\/(?:java|ecma)script/i,
            ze = /^\s+/,
            We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() {
            var e = ie.createElement("div"),
                t = ie.createDocumentFragment(),
                n = ie.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", de.leadingWhitespace = 3 === e.firstChild.nodeType, de.tbody = !e.getElementsByTagName("tbody").length, de.htmlSerialize = !!e.getElementsByTagName("link").length, de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), de.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, de.noCloneEvent = !!e.addEventListener, e[fe.expando] = 1, de.attributes = !e.getAttribute(fe.expando)
        }();
        var Be = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td;
        var Xe = /<|&#?\w+;/,
            Qe = /<tbody/i;
        ! function() {
            var t, n, i = ie.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = !1 === i.attributes[n].expando);
            i = null
        }();
        var Ge = /^(?:input|select|textarea)$/i,
            Ye = /^key/,
            Ue = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Je = /^(?:focusinfocus|focusoutblur)$/,
            Ve = /^([^.]*)(?:\.(.+)|)/;
        fe.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, a, s, l, c, u, d, p, f, h, m, g = fe._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = fe.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                            return void 0 === fe || e && fe.event.triggered === e.type ? undefined : fe.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = e), t = (t || "").match(Ee) || [""], s = t.length; s--;) r = Ve.exec(t[s]) || [], f = m = r[1], h = (r[2] || "").split(".").sort(), f && (c = fe.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = fe.event.special[f] || {}, d = fe.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && fe.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, l), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, h, u) || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), fe.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, o) {
                var r, a, s, l, c, u, d, p, f, h, m, g = fe.hasData(e) && fe._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(Ee) || [""], c = t.length; c--;)
                        if (s = Ve.exec(t[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = fe.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) a = p[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || fe.removeEvent(e, f, g.handle), delete u[f])
                        } else
                            for (f in u) fe.event.remove(e, f + t[c], n, i, !0);
                    fe.isEmptyObject(u) && (delete g.handle, fe._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, o) {
                var r, a, s, l, c, u, d, p = [i || ie],
                    f = ue.call(t, "type") ? t.type : t,
                    h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = u = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Je.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), c = fe.event.special[f] || {}, o || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                    if (!o && !c.noBubble && !fe.isWindow(i)) {
                        for (l = c.delegateType || f, Je.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), u = s;
                        u === (i.ownerDocument || ie) && p.push(u.defaultView || u.parentWindow || e)
                    }
                    for (d = 0;
                        (s = p[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || f, r = (fe._data(s, "events") || {})[t.type] && fe._data(s, "handle"), r && r.apply(s, n), (r = a && s[a]) && r.apply && Ae(s) && (t.result = r.apply(s, n), !1 === t.result && t.preventDefault());
                    if (t.type = f, !o && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), n)) && Ae(i) && a && i[f] && !fe.isWindow(i)) {
                        u = i[a], u && (i[a] = null), fe.event.triggered = f;
                        try {
                            i[f]()
                        } catch (e) {}
                        fe.event.triggered = undefined, u && (i[a] = u)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = fe.event.fix(e);
                var t, n, i, o, r, a = [],
                    s = oe.call(arguments),
                    l = (fe._data(this, "events") || {})[e.type] || [],
                    c = fe.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (a = fe.event.handlers.call(this, e, l), t = 0;
                        (o = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, (i = ((fe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; n < s; n++) r = t[n], o = r.selector + " ", i[o] === undefined && (i[o] = r.needsContext ? fe(o, this).index(l) > -1 : fe.find(o, this, null, [l]).length), i[o] && i.push(r);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[fe.expando]) return e;
                var t, n, i, o = e.type,
                    r = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Ue.test(o) ? this.mouseHooks : Ye.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new fe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, o, r = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || r === undefined || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== w() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === w() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (fe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(e) {
                        return fe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                var i = fe.extend(new fe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                fe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }, fe.removeEvent = ie.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, fe.Event = function(e, t) {
            if (!(this instanceof fe.Event)) return new fe.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? y : b) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), this[fe.expando] = !0
        }, fe.Event.prototype = {
            constructor: fe.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, fe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            fe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return o && (o === i || fe.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), de.submit || (fe.event.special.submit = {
            setup: function() {
                if (fe.nodeName(this, "form")) return !1;
                fe.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : undefined;
                    n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                        e._submitBubble = !0
                    }), fe._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                if (fe.nodeName(this, "form")) return !1;
                fe.event.remove(this, "._submit")
            }
        }), de.change || (fe.event.special.change = {
            setup: function() {
                if (Ge.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), fe.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e)
                })), !1;
                fe.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ge.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                    }), fe._data(t, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return fe.event.remove(this, "._change"), !Ge.test(this.nodeName)
            }
        }), de.focusin || fe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                fe.event.simulate(t, e.target, fe.event.fix(e))
            };
            fe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = fe._data(i, t);
                    o || i.addEventListener(e, n, !0), fe._data(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = fe._data(i, t) - 1;
                    o ? fe._data(i, t, o) : (i.removeEventListener(e, n, !0), fe._removeData(i, t))
                }
            }
        }), fe.fn.extend({
            on: function(e, t, n, i) {
                return x(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return x(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = b), this.each(function() {
                    fe.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    fe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return fe.event.trigger(e, t, n, !0)
            }
        });
        var Ke = / jQuery\d+="(?:null|\d+)"/g,
            Ze = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
            et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            tt = /<script|<style|<link/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            it = /^true\/(.*)/,
            ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            rt = f(ie),
            at = rt.appendChild(ie.createElement("div"));
        fe.extend({
            htmlPrefilter: function(e) {
                return e.replace(et, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, o, r, a, s, l = fe.contains(e.ownerDocument, e);
                if (de.html5Clone || fe.isXMLDoc(e) || !Ze.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(r = at.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                    for (i = h(r), s = h(e), a = 0; null != (o = s[a]); ++a) i[a] && T(o, i[a]);
                if (t)
                    if (n)
                        for (s = s || h(e), i = i || h(r), a = 0; null != (o = s[a]); a++) C(o, i[a]);
                    else C(e, r);
                return i = h(r, "script"), i.length > 0 && m(i, !l && h(e, "script")), i = s = o = null, r
            },
            cleanData: function(e, t) {
                for (var n, i, o, r, a = 0, s = fe.expando, l = fe.cache, c = de.attributes, u = fe.event.special; null != (n = e[a]); a++)
                    if ((t || Ae(n)) && (o = n[s], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) u[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], c || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), ne.push(o))
                    }
            }
        }), fe.fn.extend({
            domManip: S,
            detach: function(e) {
                return E(this, e, !0)
            },
            remove: function(e) {
                return E(this, e)
            },
            text: function(e) {
                return Oe(this, function(e) {
                    return e === undefined ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return S(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        _(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return S(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = _(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return S(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return S(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && fe.cleanData(h(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && fe.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return fe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Oe(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(Ke, "") : undefined;
                    if ("string" == typeof e && !tt.test(e) && (de.htmlSerialize || !Ze.test(e)) && (de.leadingWhitespace || !ze.test(e)) && !Be[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = fe.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(h(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return S(this, arguments, function(t) {
                    var n = this.parentNode;
                    fe.inArray(this, e) < 0 && (fe.cleanData(h(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), fe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            fe.fn[e] = function(e) {
                for (var n, i = 0, o = [], r = fe(e), a = r.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), fe(r[i])[t](n), ae.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var st, lt = {
                HTML: "block",
                BODY: "block"
            },
            ct = /^margin/,
            ut = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
            dt = function(e, t, n, i) {
                var o, r, a = {};
                for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                o = n.apply(e, i || []);
                for (r in t) e.style[r] = a[r];
                return o
            },
            pt = ie.documentElement;
        ! function() {
            function t() {
                var t, u, d = ie.documentElement;
                d.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = o = s = !1, i = a = !0, e.getComputedStyle && (u = e.getComputedStyle(c), n = "1%" !== (u || {}).top, s = "2px" === (u || {}).marginLeft, o = "4px" === (u || {
                    width: "4px"
                }).width, c.style.marginRight = "50%", i = "4px" === (u || {
                    marginRight: "4px"
                }).marginRight, t = c.appendChild(ie.createElement("div")), t.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), c.removeChild(t)), c.style.display = "none", r = 0 === c.getClientRects().length, r && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", t = c.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", r = 0 === t[0].offsetHeight)), d.removeChild(l)
            }
            var n, i, o, r, a, s, l = ie.createElement("div"),
                c = ie.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === c.style.opacity, de.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === c.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, fe.extend(de, {
                reliableHiddenOffsets: function() {
                    return null == n && t(), r
                },
                boxSizingReliable: function() {
                    return null == n && t(), o
                },
                pixelMarginRight: function() {
                    return null == n && t(), i
                },
                pixelPosition: function() {
                    return null == n && t(), n
                },
                reliableMarginRight: function() {
                    return null == n && t(), a
                },
                reliableMarginLeft: function() {
                    return null == n && t(), s
                }
            }))
        }();
        var ft, ht, mt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (ft = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        }, ht = function(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || ft(e), a = n ? n.getPropertyValue(t) || n[t] : undefined, "" !== a && a !== undefined || fe.contains(e.ownerDocument, e) || (a = fe.style(e, t)), n && !de.pixelMarginRight() && ut.test(a) && ct.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r), a === undefined ? a : a + ""
        }) : pt.currentStyle && (ft = function(e) {
            return e.currentStyle
        }, ht = function(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || ft(e), a = n ? n[t] : undefined, null == a && s && s[t] && (a = s[t]), ut.test(a) && !mt.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), a === undefined ? a : a + "" || "auto"
        });
        var gt = /alpha\([^)]*\)/i,
            vt = /opacity\s*=\s*([^)]*)/i,
            yt = /^(none|table(?!-c[ea]).+)/,
            bt = new RegExp("^(" + Pe + ")(.*)$", "i"),
            wt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            xt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            _t = ["Webkit", "O", "Moz", "ms"],
            $t = ie.createElement("div").style;
        fe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = ht(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": de.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = fe.camelCase(t),
                        l = e.style;
                    if (t = fe.cssProps[s] || (fe.cssProps[s] = I(s) || s), a = fe.cssHooks[t] || fe.cssHooks[s], n === undefined) return a && "get" in a && (o = a.get(e, !1, i)) !== undefined ? o : l[t];
                    if (r = typeof n, "string" === r && (o = He.exec(n)) && o[1] && (n = p(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (fe.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && (n = a.set(e, n, i)) === undefined))) try {
                        l[t] = n
                    } catch (e) {}
                }
            },
            css: function(e, t, n, i) {
                var o, r, a, s = fe.camelCase(t);
                return t = fe.cssProps[s] || (fe.cssProps[s] = I(s) || s), a = fe.cssHooks[t] || fe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), r === undefined && (r = ht(e, t, i)), "normal" === r && t in xt && (r = xt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }), fe.each(["height", "width"], function(e, t) {
            fe.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return yt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, wt, function() {
                        return F(e, t, i)
                    }) : F(e, t, i)
                },
                set: function(e, n, i) {
                    var o = i && ft(e);
                    return P(e, n, i ? H(e, t, i, de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), de.opacity || (fe.cssHooks.opacity = {
            get: function(e, t) {
                return vt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    o = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === fe.trim(r.replace(gt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = gt.test(r) ? r.replace(gt, o) : r + " " + o)
            }
        }), fe.cssHooks.marginRight = A(de.reliableMarginRight, function(e, t) {
            if (t) return dt(e, {
                display: "inline-block"
            }, ht, [e, "marginRight"])
        }), fe.cssHooks.marginLeft = A(de.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(ht(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
        }), fe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            fe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Fe[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ct.test(e) || (fe.cssHooks[e + t].set = P)
        }), fe.fn.extend({
            css: function(e, t) {
                return Oe(this, function(e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (fe.isArray(t)) {
                        for (i = ft(e), o = t.length; a < o; a++) r[t[a]] = fe.css(e, t[a], !1, i);
                        return r
                    }
                    return n !== undefined ? fe.style(e, t, n) : fe.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return D(this, !0)
            },
            hide: function() {
                return D(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Le(this) ? fe(this).show() : fe(this).hide()
                })
            }
        }), fe.Tween = L, L.prototype = {
            constructor: L,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (fe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = L.propHooks[this.prop];
                return e && e.get ? e.get(this) : L.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = L.propHooks[this.prop];
                return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
            }
        }, L.prototype.init.prototype = L.prototype, L.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, fe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, fe.fx = L.prototype.init, fe.fx.step = {};
        var kt, Ct, Tt = /^(?:toggle|show|hide)$/,
            St = /queueHooks$/;
        fe.Animation = fe.extend(W, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return p(n.elem, e, He.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ee);
                    for (var n, i = 0, o = e.length; i < o; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
                },
                prefilters: [R],
                prefilter: function(e, t) {
                    t ? W.prefilters.unshift(e) : W.prefilters.push(e)
                }
            }), fe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? fe.extend({}, e) : {
                    complete: n || !n && t || fe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !fe.isFunction(t) && t
                };
                return i.duration = fe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in fe.fx.speeds ? fe.fx.speeds[i.duration] : fe.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
                }, i
            }, fe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Le).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = fe.isEmptyObject(e),
                        r = fe.speed(t, n, i),
                        a = function() {
                            var t = W(this, fe.extend({}, e), r);
                            (o || fe._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = fe.timers,
                            a = fe._data(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && St.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        !t && n || fe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = fe._data(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = fe.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, fe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), fe.each(["toggle", "show", "hide"], function(e, t) {
                var n = fe.fn[t];
                fe.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(M(t, !0), e, i, o)
                }
            }), fe.each({
                slideDown: M("show"),
                slideUp: M("hide"),
                slideToggle: M("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                fe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), fe.timers = [], fe.fx.tick = function() {
                var e, t = fe.timers,
                    n = 0;
                for (kt = fe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || fe.fx.stop(), kt = undefined
            }, fe.fx.timer = function(e) {
                fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
            }, fe.fx.interval = 13, fe.fx.start = function() {
                Ct || (Ct = e.setInterval(fe.fx.tick, fe.fx.interval))
            }, fe.fx.stop = function() {
                e.clearInterval(Ct), Ct = null
            }, fe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, fe.fn.delay = function(t, n) {
                return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var o = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(o)
                    }
                })
            },
            function() {
                var e, t = ie.createElement("input"),
                    n = ie.createElement("div"),
                    i = ie.createElement("select"),
                    o = i.appendChild(ie.createElement("option"));
                n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", de.getSetAttribute = "t" !== n.className, de.style = /top/.test(e.getAttribute("style")), de.hrefNormalized = "/a" === e.getAttribute("href"), de.checkOn = !!t.value, de.optSelected = o.selected, de.enctype = !!ie.createElement("form").enctype, i.disabled = !0, de.optDisabled = !o.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), de.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), de.radioValue = "t" === t.value
            }();
        var Et = /\r/g,
            jt = /[\x20\t\r\n\f]+/g;
        fe.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0]; {
                    if (arguments.length) return i = fe.isFunction(e), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, fe(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : fe.isArray(o) && (o = fe.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, o, "value") !== undefined || (this.value = o))
                    });
                    if (o) return (t = fe.valHooks[o.type] || fe.valHooks[o.nodeName.toLowerCase()]) && "get" in t && (n = t.get(o, "value")) !== undefined ? n : (n = o.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "" : n)
                }
            }
        }), fe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = fe.find.attr(e, "value");
                        return null != t ? t : fe.trim(fe.text(e)).replace(jt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                            if (n = i[l], (n.selected || l === o) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = fe(n).val(), r) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = fe.makeArray(t), a = o.length; a--;)
                            if (i = o[a], fe.inArray(fe.valHooks.option.get(i), r) > -1) try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), fe.each(["radio", "checkbox"], function() {
            fe.valHooks[this] = {
                set: function(e, t) {
                    if (fe.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1
                }
            }, de.checkOn || (fe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Nt, At, It = fe.expr.attrHandle,
            Dt = /^(?:checked|selected)$/i,
            Pt = de.getSetAttribute,
            Ht = de.input;
        fe.fn.extend({
            attr: function(e, t) {
                return Oe(this, fe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    fe.removeAttr(this, e)
                })
            }
        }), fe.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === r && fe.isXMLDoc(e) || (t = t.toLowerCase(), o = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? At : Nt)), n !== undefined ? null === n ? void fe.removeAttr(e, t) : o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = fe.find.attr(e, t), null == i ? undefined : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!de.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                    r = t && t.match(Ee);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? Ht && Pt || !Dt.test(n) ? e[i] = !1 : e[fe.camelCase("default-" + n)] = e[i] = !1 : fe.attr(e, n, ""), e.removeAttribute(Pt ? n : i)
            }
        }), At = {
            set: function(e, t, n) {
                return !1 === t ? fe.removeAttr(e, n) : Ht && Pt || !Dt.test(n) ? e.setAttribute(!Pt && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = It[t] || fe.find.attr;
            Ht && Pt || !Dt.test(t) ? It[t] = function(e, t, i) {
                var o, r;
                return i || (r = It[t], It[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, It[t] = r), o
            } : It[t] = function(e, t, n) {
                if (!n) return e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Ht && Pt || (fe.attrHooks.value = {
            set: function(e, t, n) {
                if (!fe.nodeName(e, "input")) return Nt && Nt.set(e, t, n);
                e.defaultValue = t
            }
        }), Pt || (Nt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, It.id = It.name = It.coords = function(e, t, n) {
            var i;
            if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, fe.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: Nt.set
        }, fe.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Nt.set(e, "" !== t && t, n)
            }
        }, fe.each(["width", "height"], function(e, t) {
            fe.attrHooks[t] = {
                set: function(e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            }
        })), de.style || (fe.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || undefined
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Ft = /^(?:input|select|textarea|button|object)$/i,
            Lt = /^(?:a|area)$/i;
        fe.fn.extend({
            prop: function(e, t) {
                return Oe(this, fe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = fe.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = undefined, delete this[e]
                    } catch (e) {}
                })
            }
        }), fe.extend({
            prop: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, o = fe.propHooks[t]), n !== undefined ? o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = fe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Ft.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), de.hrefNormalized || fe.each(["href", "src"], function(e, t) {
            fe.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), de.optSelected || (fe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            fe.propFix[this.toLowerCase()] = this
        }), de.enctype || (fe.propFix.enctype = "encoding");
        var Ot = /[\t\r\n\f]/g;
        fe.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, a, s, l = 0;
                if (fe.isFunction(e)) return this.each(function(t) {
                    fe(this).addClass(e.call(this, t, B(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(Ee) || []; n = this[l++];)
                        if (o = B(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ot, " ")) {
                            for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = fe.trim(i), o !== s && fe.attr(n, "class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, a, s, l = 0;
                if (fe.isFunction(e)) return this.each(function(t) {
                    fe(this).removeClass(e.call(this, t, B(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Ee) || []; n = this[l++];)
                        if (o = B(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ot, " ")) {
                            for (a = 0; r = t[a++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            s = fe.trim(i), o !== s && fe.attr(n, "class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                    fe(this).toggleClass(e.call(this, n, B(this), t), t)
                }) : this.each(function() {
                    var t, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = fe(this), r = e.match(Ee) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else e !== undefined && "boolean" !== n || (t = B(this), t && fe._data(this, "__className__", t), fe.attr(this, "class", t || !1 === e ? "" : fe._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + B(n) + " ").replace(Ot, " ").indexOf(t) > -1) return !0;
                return !1
            }
        }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            fe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), fe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var Mt = e.location,
            qt = fe.now(),
            Rt = /\?/,
            zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        fe.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                o = fe.trim(t + "");
            return o && !fe.trim(o.replace(zt, function(e, t, o, r) {
                return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
            })) ? Function("return " + o)() : fe.error("Invalid JSON: " + t)
        }, fe.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (e) {
                n = undefined
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
        };
        var Wt = /#.*$/,
            Bt = /([?&])_=[^&]*/,
            Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Gt = /^(?:GET|HEAD)$/,
            Yt = /^\/\//,
            Ut = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Jt = {},
            Vt = {},
            Kt = "*/".concat("*"),
            Zt = Mt.href,
            en = Ut.exec(Zt.toLowerCase()) || [];
        fe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Zt,
                type: "GET",
                isLocal: Qt.test(en[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Kt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": fe.parseJSON,
                    "text xml": fe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? G(G(e, fe.ajaxSettings), t) : G(fe.ajaxSettings, e)
            },
            ajaxPrefilter: X(Jt),
            ajaxTransport: X(Vt),
            ajax: function(t, n) {
                function i(t, n, i, o) {
                    var r, d, y, b, x, $ = n;
                    2 !== w && (w = 2, l && e.clearTimeout(l), u = undefined, s = o || "", _.readyState = t > 0 ? 4 : 0, r = t >= 200 && t < 300 || 304 === t, i && (b = Y(p, _, i)), b = U(p, b, _, r), r ? (p.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (fe.lastModified[a] = x), (x = _.getResponseHeader("etag")) && (fe.etag[a] = x)), 204 === t || "HEAD" === p.type ? $ = "nocontent" : 304 === t ? $ = "notmodified" : ($ = b.state, d = b.data, y = b.error, r = !y)) : (y = $, !t && $ || ($ = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (n || $) + "", r ? m.resolveWith(f, [d, $, _]) : m.rejectWith(f, [_, $, y]), _.statusCode(v), v = undefined, c && h.trigger(r ? "ajaxSuccess" : "ajaxError", [_, p, r ? d : y]), g.fireWith(f, [_, $]), c && (h.trigger("ajaxComplete", [_, p]), --fe.active || fe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = undefined), n = n || {};
                var o, r, a, s, l, c, u, d, p = fe.ajaxSetup({}, n),
                    f = p.context || p,
                    h = p.context && (f.nodeType || f.jquery) ? fe(f) : fe.event,
                    m = fe.Deferred(),
                    g = fe.Callbacks("once memory"),
                    v = p.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    x = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === w) {
                                if (!d)
                                    for (d = {}; t = Xt.exec(s);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return w || (e = b[n] = b[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return w || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (w < 2)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else _.always(e[_.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return u && u.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, p.url = ((t || p.url || Zt) + "").replace(Wt, "").replace(Yt, en[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = fe.trim(p.dataType || "*").toLowerCase().match(Ee) || [""], null == p.crossDomain && (o = Ut.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === en[1] && o[2] === en[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = fe.param(p.data, p.traditional)), Q(Jt, p, n, _), 2 === w) return _;
                c = fe.event && p.global, c && 0 == fe.active++ && fe.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Gt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Rt.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Bt.test(a) ? a.replace(Bt, "$1_=" + qt++) : a + (Rt.test(a) ? "&" : "?") + "_=" + qt++)), p.ifModified && (fe.lastModified[a] && _.setRequestHeader("If-Modified-Since", fe.lastModified[a]), fe.etag[a] && _.setRequestHeader("If-None-Match", fe.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : p.accepts["*"]);
                for (r in p.headers) _.setRequestHeader(r, p.headers[r]);
                if (p.beforeSend && (!1 === p.beforeSend.call(f, _, p) || 2 === w)) return _.abort();
                x = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[r](p[r]);
                if (u = Q(Vt, p, n, _)) {
                    if (_.readyState = 1, c && h.trigger("ajaxSend", [_, p]), 2 === w) return _;
                    p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                        _.abort("timeout")
                    }, p.timeout));
                    try {
                        w = 1, u.send(y, i)
                    } catch (e) {
                        if (!(w < 2)) throw e;
                        i(-1, e)
                    }
                } else i(-1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) {
                return fe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return fe.get(e, undefined, t, "script")
            }
        }), fe.each(["get", "post"], function(e, t) {
            fe[t] = function(e, n, i, o) {
                return fe.isFunction(n) && (o = o || i, i = n, n = undefined), fe.ajax(fe.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, fe.isPlainObject(e) && e))
            }
        }), fe._evalUrl = function(e) {
            return fe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, fe.fn.extend({
            wrapAll: function(e) {
                if (fe.isFunction(e)) return this.each(function(t) {
                    fe(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return fe.isFunction(e) ? this.each(function(t) {
                    fe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = fe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = fe.isFunction(e);
                return this.each(function(n) {
                    fe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), fe.expr.filters.hidden = function(e) {
            return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : V(e)
        }, fe.expr.filters.visible = function(e) {
            return !fe.expr.filters.hidden(e)
        };
        var tn = /%20/g,
            nn = /\[\]$/,
            on = /\r?\n/g,
            rn = /^(?:submit|button|image|reset|file)$/i,
            an = /^(?:input|select|textarea|keygen)/i;
        fe.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    t = fe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (t === undefined && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) K(n, e[n], t, o);
            return i.join("&").replace(tn, "+")
        }, fe.fn.extend({
            serialize: function() {
                return fe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = fe.prop(this, "elements");
                    return e ? fe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !fe(this).is(":disabled") && an.test(this.nodeName) && !rn.test(e) && (this.checked || !Me.test(e))
                }).map(function(e, t) {
                    var n = fe(this).val();
                    return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(on, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(on, "\r\n")
                    }
                }).get()
            }
        }), fe.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
            return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
        } : Z;
        var sn = 0,
            ln = {},
            cn = fe.ajaxSettings.xhr();
        e.attachEvent && e.attachEvent("onunload", function() {
            for (var e in ln) ln[e](undefined, !0)
        }), de.cors = !!cn && "withCredentials" in cn, cn = de.ajax = !!cn, cn && fe.ajaxTransport(function(t) {
            if (!t.crossDomain || de.cors) {
                var n;
                return {
                    send: function(i, o) {
                        var r, a = t.xhr(),
                            s = ++sn;
                        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (r in t.xhrFields) a[r] = t.xhrFields[r];
                        t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (r in i) i[r] !== undefined && a.setRequestHeader(r, i[r] + "");
                        a.send(t.hasContent && t.data || null), n = function(e, i) {
                            var r, l, c;
                            if (n && (i || 4 === a.readyState))
                                if (delete ln[s], n = undefined, a.onreadystatechange = fe.noop, i) 4 !== a.readyState && a.abort();
                                else {
                                    c = {}, r = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (e) {
                                        l = ""
                                    }
                                    r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
                                }
                            c && o(r, l, c, a.getAllResponseHeaders())
                        }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n()
                    },
                    abort: function() {
                        n && n(undefined, !0)
                    }
                }
            }
        }), fe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return fe.globalEval(e), e
                }
            }
        }), fe.ajaxPrefilter("script", function(e) {
            e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), fe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = ie.head || fe("head")[0] || ie.documentElement;
                return {
                    send: function(i, o) {
                        t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(undefined, !0)
                    }
                }
            }
        });
        var un = [],
            dn = /(=)\?(?=&|$)|\?\?/;
        fe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = un.pop() || fe.expando + "_" + qt++;
                return this[e] = !0, e
            }
        }), fe.ajaxPrefilter("json jsonp", function(t, n, i) {
            var o, r, a, s = !1 !== t.jsonp && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(dn, "$1" + o) : !1 !== t.jsonp && (t.url += (Rt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || fe.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                a = arguments
            }, i.always(function() {
                r === undefined ? fe(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, un.push(o)), a && fe.isFunction(r) && r(a[0]), a = r = undefined
            }), "script"
        }), fe.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ie;
            var i = _e.exec(e),
                o = !n && [];
            return i ? [t.createElement(i[1])] : (i = v([e], t, o), o && o.length && fe(o).remove(), fe.merge([], i.childNodes))
        };
        var pn = fe.fn.load;
        fe.fn.load = function(e, t, n) {
            if ("string" != typeof e && pn) return pn.apply(this, arguments);
            var i, o, r, a = this,
                s = e.indexOf(" ");
            return s > -1 && (i = fe.trim(e.slice(s, e.length)), e = e.slice(0, s)), fe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (o = "POST"), a.length > 0 && fe.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, r || [e.responseText, t, e])
                })
            }), this
        }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            fe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), fe.expr.filters.animated = function(e) {
            return fe.grep(fe.timers, function(t) {
                return e === t.elem
            }).length
        }, fe.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, a, s, l, c, u = fe.css(e, "position"),
                    d = fe(e),
                    p = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), r = fe.css(e, "top"), l = fe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && fe.inArray("auto", [r, l]) > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : d.css(p)
            }
        }, fe.fn.extend({
            offset: function(e) {
                if (arguments.length) return e === undefined ? this : this.each(function(t) {
                    fe.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                if (r) return t = r.documentElement, fe.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = te(r), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === fe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - fe.css(i, "marginTop", !0),
                        left: t.left - n.left - fe.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");) e = e.offsetParent;
                    return e || pt
                })
            }
        }), fe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            fe.fn[e] = function(i) {
                return Oe(this, function(e, i, o) {
                    var r = te(e);
                    if (o === undefined) return r ? t in r ? r[t] : r.document.documentElement[i] : e[i];
                    r ? r.scrollTo(n ? fe(r).scrollLeft() : o, n ? o : fe(r).scrollTop()) : e[i] = o
                }, e, i, arguments.length, null)
            }
        }), fe.each(["top", "left"], function(e, t) {
            fe.cssHooks[t] = A(de.pixelPosition, function(e, n) {
                if (n) return n = ht(e, t), ut.test(n) ? fe(e).position()[t] + "px" : n
            })
        }), fe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            fe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                fe.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === o ? "margin" : "border");
                    return Oe(this, function(t, n, i) {
                        var o;
                        return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : i === undefined ? fe.css(t, n, a) : fe.style(t, n, i, a)
                    }, t, r ? i : undefined, r, null)
                }
            })
        }), fe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), fe.fn.size = function() {
            return this.length
        }, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return fe
        });
        var fn = e.jQuery,
            hn = e.$;
        return fe.noConflict = function(t) {
            return e.$ === fe && (e.$ = hn), t && e.jQuery === fe && (e.jQuery = fn), fe
        }, t || (e.jQuery = e.$ = fe), fe
    }), function(e, t) {
        "use strict";
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function() {
                return e("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function() {
                return e("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function(e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t)
            },
            refreshCSRFTokens: function() {
                e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function(t, n, i) {
                var o = e.Event(n);
                return t.trigger(o, i), !1 !== o.result
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            isRemote: function(e) {
                return e.data("remote") !== t && !1 !== e.data("remote")
            },
            handleRemote: function(i) {
                var o, r, a, s, l, c;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        o = i.data("ujs:submit-button-formmethod") || i.attr("method"), r = i.data("ujs:submit-button-formaction") || i.attr("action"), a = e(i[0]).serializeArray();
                        var u = i.data("ujs:submit-button");
                        u && (a.push(u), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), a = i.data("params") || null);
                    return c = {
                        type: o || "GET",
                        data: a,
                        dataType: l,
                        beforeSend: function(e, o) {
                            if (o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), !n.fire(i, "ajax:beforeSend", [e, o])) return !1;
                            i.trigger("ajax:send", e)
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(r)
                    }, s && (c.xhrFields = {
                        withCredentials: s
                    }), r && (c.url = r), n.ajax(c)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
                } catch (e) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var o = n.href(i),
                    r = i.data("method"),
                    a = i.attr("target"),
                    s = n.csrfToken(),
                    l = n.csrfParam(),
                    c = e('<form method="post" action="' + o + '"></form>'),
                    u = '<input name="_method" value="' + r + '" type="hidden" />';
                l === t || s === t || n.isCrossDomain(o) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    o = !1;
                if (!i) return !0;
                if (n.fire(e, "confirm")) {
                    try {
                        o = n.confirm(i)
                    } catch (e) {
                        (console.error || console.log).call(console, e.stack || e)
                    }
                    t = n.fire(e, "confirm:complete", [o])
                }
                return o && t
            },
            blankInputs: function(t, n, i) {
                var o, r, a, s, l = e(),
                    c = n || "input,textarea",
                    u = t.find(c),
                    d = {};
                return u.each(function() {
                    o = e(this), o.is("input[type=radio]") ? (s = o.attr("name"), d[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (a = t.find('input[type=radio][name="' + s + '"]'), l = l.add(a)), d[s] = s)) : (r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !!o.val()) === i && (l = l.add(o))
                }), !!l.length && l
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var i = e.data("disable-with");
                i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                }), e.data("ujs:disabled", !0)
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), e(window).on("pageshow.rails", function() {
            e(e.rails.enableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableFormElement(t)
            }), e(e.rails.linkDisableSelector).each(function() {
                var t = e(this);
                t.data("ujs:disabled") && e.rails.enableElement(t)
            })
        }), i.on("ajax:complete", n.linkDisableSelector, function() {
            n.enableElement(e(this))
        }), i.on("ajax:complete", n.buttonDisableSelector, function() {
            n.enableFormElement(e(this))
        }), i.on("click.rails", n.linkClickSelector, function(t) {
            var i = e(this),
                o = i.data("method"),
                r = i.data("params"),
                a = t.metaKey || t.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(t);
            if (!a && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
                if (a && (!o || "GET" === o) && !r) return !0;
                var s = n.handleRemote(i);
                return !1 === s ? n.enableElement(i) : s.fail(function() {
                    n.enableElement(i)
                }), !1
            }
            return o ? (n.handleMethod(i), !1) : void 0
        }), i.on("click.rails", n.buttonClickSelector, function(t) {
            var i = e(this);
            if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var o = n.handleRemote(i);
            return !1 === o ? n.enableFormElement(i) : o.fail(function() {
                n.enableFormElement(i)
            }), !1
        }), i.on("change.rails", n.inputChangeSelector, function(t) {
            var i = e(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.on("submit.rails", n.formSubmitSelector, function(i) {
            var o, r, a = e(this),
                s = n.isRemote(a);
            if (!n.allowAction(a)) return n.stopEverything(i);
            if (a.attr("novalidate") === t)
                if (a.data("ujs:formnovalidate-button") === t) {
                    if ((o = n.blankInputs(a, n.requiredInputSelector, !1)) && n.fire(a, "ajax:aborted:required", [o])) return n.stopEverything(i)
                } else a.data("ujs:formnovalidate-button", t);
            if (s) {
                if (r = n.nonBlankInputs(a, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(a)
                    }, 13);
                    var l = n.fire(a, "ajax:aborted:file", [r]);
                    return l || setTimeout(function() {
                        n.enableFormElements(a)
                    }, 13), l
                }
                return n.handleRemote(a), !1
            }
            setTimeout(function() {
                n.disableFormElements(a)
            }, 13)
        }), i.on("click.rails", n.formInputClickSelector, function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var o = i.attr("name"),
                r = o ? {
                    name: o,
                    value: i.val()
                } : null,
                a = i.closest("form");
            0 === a.length && (a = e("#" + i.attr("form"))), a.data("ujs:submit-button", r), a.data("ujs:formnovalidate-button", i.attr("formnovalidate")), a.data("ujs:submit-button-formaction", i.attr("formaction")), a.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }), i.on("ajax:send.rails", n.formSubmitSelector, function(t) {
            this === t.target && n.disableFormElements(e(this))
        }), i.on("ajax:complete.rails", n.formSubmitSelector, function(t) {
            this === t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery), void 0 === dd_domreadycheck) var dd_domreadycheck = !1;
var ddlevelsmenu = {
    enableshim: !0,
    arrowpointers: {
        rightarrow: ["", 12, 12],
        showarrow: {
            toplevel: !0,
            sublevel: !0
        }
    },
    hideinterval: 10,
    effects: {
        enableswipe: !0,
        enableslide: !0,
        enablefade: !0,
        duration: 10
    },
    httpsiframesrc: "blank.htm",
    topmenuids: [],
    topitems: {},
    subuls: {},
    lastactivesubul: {},
    topitemsindex: -1,
    ulindex: -1,
    hidetimers: {},
    shimadded: !1,
    nonFF: !/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent),
    getoffset: function(e, t) {
        return e.offsetParent ? e[t] + this.getoffset(e.offsetParent, t) : e[t]
    },
    getoffsetof: function(e) {
        e._offsets = {
            left: this.getoffset(e, "offsetLeft"),
            top: this.getoffset(e, "offsetTop")
        }
    },
    getwindowsize: function() {
        this.docwidth = window.innerWidth ? window.innerWidth - 10 : this.standardbody.clientWidth - 10, this.docheight = window.innerHeight ? window.innerHeight - 15 : this.standardbody.clientHeight - 18
    },
    gettopitemsdimensions: function() {
        for (var e = 0; e < this.topmenuids.length; e++)
            for (var t = this.topmenuids[e], n = 0; n < this.topitems[t].length; n++) {
                var i = this.topitems[t][n],
                    o = document.getElementById(i.getAttribute("rel"));
                i._dimensions = {
                    w: i.offsetWidth,
                    h: i.offsetHeight,
                    submenuw: o.offsetWidth,
                    submenuh: o.offsetHeight
                }
            }
    },
    isContained: function(e, t) {
        for (var t = window.event || t, n = t.relatedTarget || ("mouseover" == t.type ? t.fromElement : t.toElement); n && n != e;) try {
            n = n.parentNode
        } catch (t) {
            n = e
        }
        return n == e
    },
    addpointer: function(e, t, n, i) {
        var o = document.createElement("img");
        o.src = n[0], o.style.width = n[1] + "px", o.style.height = n[2] + "px", "rightarrowpointer" == t && (o.style.left = e.offsetWidth - n[2] - 2 + "px"), o.className = t;
        var r = e.childNodes[1 != e.firstChild.nodeType ? 1 : 0];
        r && "SPAN" == r.tagName && (e = r), "before" == i ? e.insertBefore(o, e.firstChild) : e.appendChild(o)
    },
    css: function(e, t, n) {
        var i = new RegExp("(^|\\s+)" + t + "($|\\s+)", "ig");
        if ("check" == n) return i.test(e.className);
        "remove" == n ? e.className = e.className.replace(i, "") : "add" != n || i.test(e.className) || (e.className += " " + t)
    },
    addshimmy: function(e) {
        var t = window.opera ? document.createElement("div") : document.createElement("iframe");
        t.className = "ddiframeshim", t.setAttribute("src", "https:" == location.protocol ? this.httpsiframesrc : "about:blank"), t.setAttribute("frameborder", "0"), e.appendChild(t);
        try {
            t.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"
        } catch (e) {}
        return t
    },
    positionshim: function(e, t, n, i, o) {
        if (e._istoplevel) {
            var o = window.pageYOffset ? window.pageYOffset : this.standardbody.scrollTop,
                r = e._offsets.top - o,
                a = o + this.docheight - e._offsets.top - e._dimensions.h;
            r > 0 && (this.shimmy.topshim.style.left = i + "px", this.shimmy.topshim.style.top = o + "px", this.shimmy.topshim.style.width = "99%", this.shimmy.topshim.style.height = r + "px"), a > 0 && (this.shimmy.bottomshim.style.left = i + "px", this.shimmy.bottomshim.style.top = e._offsets.top + e._dimensions.h + "px", this.shimmy.bottomshim.style.width = "99%", this.shimmy.bottomshim.style.height = a + "px")
        }
    },
    hideshim: function() {
        this.shimmy.topshim.style.width = this.shimmy.bottomshim.style.width = 0, this.shimmy.topshim.style.height = this.shimmy.bottomshim.style.height = 0
    },
    buildmenu: function(e, t, n, i, o, r) {
        t._master = e, t._pos = i, t._istoplevel = o, o && this.addEvent(t, function() {
            ddlevelsmenu.hidemenu(ddlevelsmenu.subuls[this._master][parseInt(this._pos)])
        }, "click"), this.subuls[e][i] = n, t._dimensions = {
            w: t.offsetWidth,
            h: t.offsetHeight,
            submenuw: n.offsetWidth,
            submenuh: n.offsetHeight
        }, this.getoffsetof(t), n.parentNode.style.left = 0, n.parentNode.style.top = 0, n.parentNode.style.visibility = "hidden", n.style.visibility = "hidden", this.addEvent(t, function(e) {
            if (!ddlevelsmenu.isContained(this, e)) {
                var n = ddlevelsmenu.subuls[this._master][parseInt(this._pos)];
                this._istoplevel && (ddlevelsmenu.css(this, "selected", "add"), clearTimeout(ddlevelsmenu.hidetimers[this._master][this._pos])), ddlevelsmenu.getoffsetof(t);
                var i = window.pageXOffset ? window.pageXOffset : ddlevelsmenu.standardbody.scrollLeft,
                    o = window.pageYOffset ? window.pageYOffset : ddlevelsmenu.standardbody.scrollTop,
                    a = this._offsets.left + this._dimensions.submenuw + (this._istoplevel && "topbar" == r ? 0 : this._dimensions.w),
                    s = this._offsets.top + this._dimensions.submenuh,
                    l = this._istoplevel ? this._offsets.left + ("sidebar" == r ? this._dimensions.w : 0) : this._dimensions.w;
                a - i > ddlevelsmenu.docwidth && (l += -this._dimensions.submenuw + (this._istoplevel && "topbar" == r ? this._dimensions.w : -this._dimensions.w)), n.parentNode.style.left = l + "px";
                var c = this._istoplevel ? this._offsets.top + ("sidebar" == r ? 0 : this._dimensions.h) : this.offsetTop;
                s - o > ddlevelsmenu.docheight && (this._dimensions.submenuh < this._offsets.top + ("sidebar" == r ? this._dimensions.h : 0) - o ? c += -this._dimensions.submenuh + (this._istoplevel && "topbar" == r ? -this._dimensions.h : this._dimensions.h) : c += -(this._offsets.top - o) + (this._istoplevel && "topbar" == r ? -this._dimensions.h : 0)), n.parentNode.style.top = c + "px", ddlevelsmenu.enableshim && (0 == ddlevelsmenu.effects.enableswipe || ddlevelsmenu.nonFF) ? ddlevelsmenu.positionshim(t, n, r, i, o) : n.FFscrollInfo = {
                    x: i,
                    y: o
                }, ddlevelsmenu.showmenu(t, n, r)
            }
        }, "mouseover"), this.addEvent(t, function(e) {
            var t = ddlevelsmenu.subuls[this._master][parseInt(this._pos)];
            this._istoplevel ? ddlevelsmenu.isContained(this, e) || ddlevelsmenu.isContained(t.parentNode, e) || ddlevelsmenu.hidemenu(t.parentNode) : this._istoplevel || ddlevelsmenu.isContained(this, e) || ddlevelsmenu.hidemenu(t.parentNode)
        }, "mouseout")
    },
    setopacity: function(e, t) {
        if (e.style.opacity = t, "string" != typeof e.style.opacity) {
            e.style.MozOpacity = t;
            try {
                e.filters && (e.style.filter = "progid:DXImageTransform.Microsoft.alpha(opacity=" + 100 * t + ")")
            } catch (e) {}
        }
    },
    showmenu: function(e, t, n) {
        if (this.addEvent(e, function() {
                ddlevelsmenu.css(e, "selected", "add")
            }, "mouseover"), this.addEvent(e, function(t) {
                var n = ddlevelsmenu.subuls[this._master][parseInt(this._pos)];
                this._istoplevel ? ddlevelsmenu.isContained(this, t) || ddlevelsmenu.isContained(n.parentNode, t) || ddlevelsmenu.css(e, "selected", "remove") : ddlevelsmenu.isContained(this, t) || ddlevelsmenu.css(e, "selected", "remove")
            }, "mouseout"), this.effects.enableswipe || this.effects.enablefade) {
            if (this.effects.enableswipe) {
                var i = e._istoplevel && "topbar" == n ? e._dimensions.submenuh : e._dimensions.submenuw;
                t.parentNode.style.width = t.parentNode.style.height = 0, t.parentNode.style.overflow = "hidden"
            }
            this.effects.enablefade && (t.parentNode.style.width = t.offsetWidth + "px", t.parentNode.style.height = t.offsetHeight + "px", this.setopacity(t.parentNode, 0)), t._curanimatedegree = 0, t.parentNode.style.visibility = "visible", t.style.visibility = "visible", clearInterval(t._animatetimer), t._starttime = (new Date).getTime(), t._animatetimer = setInterval(function() {
                ddlevelsmenu.revealmenu(e, t, i, n)
            }, 10)
        } else t.parentNode.style.visibility = "visible", t.style.visibility = "visible"
    },
    revealmenu: function(e, t, n, i) {
        var o = (new Date).getTime() - t._starttime;
        o < this.effects.duration ? (this.effects.enableswipe && (0 == t._curanimatedegree && (t.parentNode.style[e._istoplevel && "topbar" == i ? "width" : "height"] = (e._istoplevel && "topbar" == i ? t.offsetWidth : t.offsetHeight) + "px"), t.parentNode.style[e._istoplevel && "topbar" == i ? "height" : "width"] = t._curanimatedegree * n + "px", this.effects.enableslide && (t.style[e._istoplevel && "topbar" == i ? "top" : "left"] = Math.floor((t._curanimatedegree - 1) * n) + "px")), this.effects.enablefade && this.setopacity(t.parentNode, t._curanimatedegree)) : (clearInterval(t._animatetimer), this.effects.enableswipe && (t.parentNode.style.width = t.offsetWidth + "px", t.parentNode.style.height = t.offsetHeight + "px", t.parentNode.style.overflow = "visible", this.effects.enableslide && (t.style.top = 0, t.style.left = 0)), this.effects.enablefade && (this.setopacity(t.parentNode, 1), t.parentNode.style.filter = ""), this.enableshim && t.FFscrollInfo && this.positionshim(e, t, i, t.FFscrollInfo.x, t.FFscrollInfo.y)), t._curanimatedegree = (1 - Math.cos(o / this.effects.duration * Math.PI)) / 2
    },
    hidemenu: function(e) {
        "undefined" != typeof e._pos && (this.css(this.topitems[e._master][parseInt(e._pos)], "selected", "remove"), this.enableshim && this.hideshim()), clearInterval(e.firstChild._animatetimer), e.style.left = 0, e.style.top = "-1000px", e.style.visibility = "hidden", e.firstChild.style.visibility = "hidden"
    },
    addEvent: function(e, t, n) {
        e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent && e.attachEvent("on" + n, function() {
            return t.call(e, window.event)
        })
    },
    domready: function(e) {
        if (dd_domreadycheck) return void e();
        document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
            document.removeEventListener("DOMContentLoaded", arguments.callee, !1), e(), dd_domreadycheck = !0
        }, !1) : document.attachEvent && document.documentElement.doScroll && window == window.top && function() {
            if (dd_domreadycheck) return void e();
            try {
                document.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(arguments.callee, 0)
            }
            e(), dd_domreadycheck = !0
        }(), document.attachEvent && parent.length > 0 && this.addEvent(window, function() {
            e()
        }, "load")
    },
    init: function(e, t) {
        this.standardbody = "CSS1Compat" == document.compatMode ? document.documentElement : document.body, this.topitemsindex = -1, this.ulindex = -1, this.topmenuids.push(e), this.topitems[e] = [], this.subuls[e] = [], this.hidetimers[e] = [], this.enableshim && !this.shimadded && (this.shimmy = {}, this.shimmy.topshim = this.addshimmy(document.body), this.shimmy.bottomshim = this.addshimmy(document.body), this.shimadded = !0);
        var n = document.getElementById(e),
            i = n.getElementsByTagName("a");
        this.getwindowsize();
        for (var o = 0; o < i.length; o++)
            if (i[o].getAttribute("rel")) {
                this.topitemsindex++, this.ulindex++;
                var r = i[o];
                this.topitems[e][this.topitemsindex] = r;
                var a = document.getElementById(r.getAttribute("rel")),
                    s = document.createElement("div");
                s.className = "ddsubmenustyle", a.removeAttribute("class"), s.appendChild(a), document.body.appendChild(s), s.style.zIndex = 2e3, s._master = e, s._pos = this.topitemsindex, this.addEvent(s, function() {
                    ddlevelsmenu.hidemenu(this)
                }, "click");
                "sidebar" == t ? this.arrowpointers.rightarrow : this.arrowpointers.downarrow;
                this.arrowpointers.showarrow.toplevel && this.buildmenu(e, r, a, this.ulindex, !0, t), s.onmouseover = function() {
                    clearTimeout(ddlevelsmenu.hidetimers[this._master][this._pos])
                }, this.addEvent(s, function(e) {
                    if (!ddlevelsmenu.isContained(this, e) && !ddlevelsmenu.isContained(ddlevelsmenu.topitems[this._master][parseInt(this._pos)], e)) {
                        var t = this;
                        ddlevelsmenu.enableshim && ddlevelsmenu.hideshim(), ddlevelsmenu.hidetimers[this._master][this._pos] = setTimeout(function() {
                            ddlevelsmenu.hidemenu(t)
                        }, ddlevelsmenu.hideinterval)
                    }
                }, "mouseout");
                for (var l = a.getElementsByTagName("ul"), c = 0; c < l.length; c++) {
                    this.ulindex++;
                    var u = l[c].parentNode,
                        d = document.createElement("div");
                    d.appendChild(l[c]), u.appendChild(d), this.arrowpointers.showarrow.sublevel && this.buildmenu(e, u, l[c], this.ulindex, !1, t)
                }
            }
        this.addEvent(window, function() {
            ddlevelsmenu.getwindowsize(), ddlevelsmenu.gettopitemsdimensions()
        }, "resize")
    },
    setup: function(e, t) {
        this.domready(function() {
            ddlevelsmenu.init(e, t)
        })
    }
};
! function(e, t) {
    function n(e) {
        return !!("" === e || e && e.charCodeAt && e.substr)
    }

    function i(e) {
        return d ? d(e) : "[object Array]" === p.call(e)
    }

    function o(e) {
        return e && "[object Object]" === p.call(e)
    }

    function r(e, t) {
        var n;
        e = e || {}, t = t || {};
        for (n in t) t.hasOwnProperty(n) && null == e[n] && (e[n] = t[n]);
        return e
    }

    function a(e, t, n) {
        var i, o, r = [];
        if (!e) return r;
        if (u && e.map === u) return e.map(t, n);
        for (i = 0, o = e.length; i < o; i++) r[i] = t.call(n, e[i], i, e);
        return r
    }

    function s(e, t) {
        return e = Math.round(Math.abs(e)), isNaN(e) ? t : e
    }

    function l(e) {
        var t = c.settings.currency.format;
        return "function" == typeof e && (e = e()), n(e) && e.match("%v") ? {
            pos: e,
            neg: e.replace("-", "").replace("%v", "-%v"),
            zero: e
        } : e && e.pos && e.pos.match("%v") ? e : n(t) ? c.settings.currency.format = {
            pos: t,
            neg: t.replace("%v", "-%v"),
            zero: t
        } : t
    }
    var c = {};
    c.version = "0.3.2", c.settings = {
        currency: {
            symbol: "$",
            format: "%s%v",
            decimal: ".",
            thousand: ",",
            precision: 0,
            grouping: 3
        },
        number: {
            precision: 0,
            grouping: 3,
            thousand: ",",
            decimal: "."
        }
    };
    var u = Array.prototype.map,
        d = Array.isArray,
        p = Object.prototype.toString,
        f = c.unformat = c.parse = function(e, t) {
            if (i(e)) return a(e, function(e) {
                return f(e, t)
            });
            if ("number" == typeof(e = e || 0)) return e;
            t = t || c.settings.number.decimal;
            var n = new RegExp("[^0-9-" + t + "]", ["g"]),
                o = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(n, "").replace(t, "."));
            return isNaN(o) ? 0 : o
        },
        h = c.toFixed = function(e, t) {
            t = s(t, c.settings.number.precision);
            var n = Math.pow(10, t);
            return (Math.round(c.unformat(e) * n) / n).toFixed(t)
        },
        m = c.formatNumber = function(e, t, n, l) {
            if (i(e)) return a(e, function(e) {
                return m(e, t, n, l)
            });
            e = f(e);
            var u = r(o(t) ? t : {
                    precision: t,
                    thousand: n,
                    decimal: l
                }, c.settings.number),
                d = s(u.precision),
                p = e < 0 ? "-" : "",
                g = parseInt(h(Math.abs(e || 0), d), 10) + "",
                v = g.length > 3 ? g.length % 3 : 0;
            return p + (v ? g.substr(0, v) + u.thousand : "") + g.substr(v).replace(/(\d{3})(?=\d)/g, "$1" + u.thousand) + (d ? u.decimal + h(Math.abs(e), d).split(".")[1] : "")
        },
        g = c.formatMoney = function(e, t, n, u, d, p) {
            if (i(e)) return a(e, function(e) {
                return g(e, t, n, u, d, p)
            });
            e = f(e);
            var h = r(o(t) ? t : {
                    symbol: t,
                    precision: n,
                    thousand: u,
                    decimal: d,
                    format: p
                }, c.settings.currency),
                v = l(h.format);
            return (e > 0 ? v.pos : e < 0 ? v.neg : v.zero).replace("%s", h.symbol).replace("%v", m(Math.abs(e), s(h.precision), h.thousand, h.decimal))
        };
    c.formatColumn = function(e, t, u, d, p, h) {
        if (!e) return [];
        var g = r(o(t) ? t : {
                symbol: t,
                precision: u,
                thousand: d,
                decimal: p,
                format: h
            }, c.settings.currency),
            v = l(g.format),
            y = v.pos.indexOf("%s") < v.pos.indexOf("%v"),
            b = 0;
        return a(a(e, function(e) {
            if (i(e)) return c.formatColumn(e, g);
            e = f(e);
            var t = e > 0 ? v.pos : e < 0 ? v.neg : v.zero,
                n = t.replace("%s", g.symbol).replace("%v", m(Math.abs(e), s(g.precision), g.thousand, g.decimal));
            return n.length > b && (b = n.length), n
        }), function(e) {
            return n(e) && e.length < b ? y ? e.replace(g.symbol, g.symbol + new Array(b - e.length + 1).join(" ")) : new Array(b - e.length + 1).join(" ") + e : e
        })
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = c), exports.accounting = c) : "function" == typeof define && define.amd ? define([], function() {
        return c
    }) : (c.noConflict = function(n) {
        return function() {
            return e.accounting = n, c.noConflict = t, c
        }
    }(e.accounting), e.accounting = c)
}(this),
function(e) {
    e.fn.easyTooltip = function(t) {
        var n, i = {
                xOffset: 10,
                yOffset: 25,
                tooltipId: "easyTooltip",
                clickRemove: !1,
                content: "",
                useElement: ""
            },
            t = e.extend(i, t);
        this.each(function() {
            var i = e(this).attr("title");
            e(this).hover(function(o) {
                n = "" != t.content ? t.content : i, n = "" != t.useElement ? e("#" + t.useElement).html() : n, e(this).attr("title", ""), "" != n && n != undefined && (e("body").append("<div id='" + t.tooltipId + "'>" + n + "</div>"), e("#" + t.tooltipId).css("position", "absolute").css("top", o.pageY - t.yOffset + "px").css("left", o.pageX + t.xOffset + "px").css("display", "none").fadeIn("fast"))
            }, function() {
                e("#" + t.tooltipId).remove(), e(this).attr("title", i)
            }), e(this).mousemove(function(n) {
                e("#" + t.tooltipId).css("top", n.pageY - t.yOffset + "px").css("left", n.pageX + t.xOffset + "px")
            }), t.clickRemove && e(this).mousedown(function() {
                e("#" + t.tooltipId).remove(), e(this).attr("title", i)
            })
        })
    }
}(jQuery),
function(e) {
    e.fn.featureList = function(t) {
        var n = e(this),
            i = e(t.output);
        return new jQuery.featureList(n, i, t), this
    }, e.featureList = function(t, n, i) {
        function o(e) {
            void 0 === e && (e = a + 1, e = e >= r ? 0 : e), t.removeClass("current").filter(":eq(" + e + ")").addClass("current"), n.stop(!0, !0).filter(":visible").fadeOut(), n.filter(":eq(" + e + ")").fadeIn(function() {
                a = e
            })
        }
        var i = i || {},
            r = t.length,
            a = i.start_item || 0;
        if (i.pause_on_hover = i.pause_on_hover || !0, i.transition_interval = i.transition_interval || 5e3, n.hide().eq(a).show(), t.eq(a).addClass("current"), t.hover(function() {
                if (e(this).hasClass("current")) return !1;
                o(t.index(this))
            }), i.transition_interval > 0) {
            var s = setInterval(function() {
                o()
            }, i.transition_interval);
            i.pause_on_hover && t.mouseenter(function() {
                clearInterval(s)
            }).mouseleave(function() {
                clearInterval(s), s = setInterval(function() {
                    o()
                }, i.transition_interval)
            })
        }
    }
}(jQuery),
function(e) {
    e.fn.simplyScroll = function(t) {
        return this.each(function() {
            new e.simplyScroll(this, t)
        })
    };
    var t = {
        className: "simply-scroll",
        frameRate: 24,
        speed: 1,
        horizontal: !0,
        autoMode: "off",
        pauseOnHover: !0,
        startOnLoad: !1,
        localJsonSource: "",
        flickrFeed: "",
        jsonImgWidth: 240,
        jsonImgHeight: 180
    };
    e.simplyScroll = function(n, i) {
        var o = this;
        this.o = e.extend({}, t, i || {}), this.auto = "off" !== this.o.autoMode, this.$list = e(n), this.$list.addClass("simply-scroll-list").wrap('<div class="simply-scroll-clip"></div>').parent().wrap('<div class="' + this.o.className + ' simply-scroll-container"></div>'), this.o.auto || this.$list.parent().parent().prepend('<div class="simply-scroll-forward"></div>').prepend('<div class="simply-scroll-back"></div>'), this.o.flickrFeed ? e.getJSON(this.o.flickrFeed + "&format=json&jsoncallback=?", function(t) {
            json = [], e.each(t.items, function(e, t) {
                json.push({
                    src: t.media.m,
                    title: t.title,
                    link: t.link
                })
            }), o.renderData(json)
        }) : this.o.localJsonSource ? e.getJSON(this.o.localJsonSource, function(e) {
            o.renderData(e)
        }) : this.o.startOnLoad ? e(window).load(function() {
            o.init()
        }) : this.init()
    }, e.simplyScroll.fn = e.simplyScroll.prototype = {}, e.simplyScroll.fn.extend = e.simplyScroll.extend = e.extend, e.simplyScroll.fn.extend({
        init: function() {
            if (this.$items = this.$list.children(), this.$clip = this.$list.parent(), this.$container = this.$clip.parent(), this.o.horizontal ? (this.itemMax = this.$items[0].offsetWidth, this.clipMax = this.$clip.width(), this.dimension = "width", this.moveBackClass = "simply-scroll-btn-left", this.moveForwardClass = "simply-scroll-btn-right") : (this.itemMax = this.$items[0].offsetHeight, this.clipMax = this.$clip.height(), this.dimension = "height", this.moveBackClass = "simply-scroll-btn-up", this.moveForwardClass = "simply-scroll-btn-down"), this.posMin = 0, this.posMax = this.$items.length * this.itemMax, this.$list.css(this.dimension, this.posMax + "px"), "loop" == this.o.autoMode) {
                var t = Math.ceil(this.clipMax / this.itemMax);
                this.$items.slice(0, t).clone(!0).appendTo(this.$list), this.posMax += this.clipMax - this.o.speed, this.$list.css(this.dimension, this.posMax + this.itemMax * t + "px")
            }
            for (this.interval = null, this.intervalDelay = Math.floor(1e3 / this.o.frameRate); this.itemMax % this.o.speed != 0;)
                if (0 === --this.o.speed) {
                    this.o.speed = 1;
                    break
                }
            var n = this;
            this.trigger = null, this.funcMoveBack = function() {
                n.trigger = this, n.moveBack()
            }, this.funcMoveForward = function() {
                n.trigger = this, n.moveForward()
            }, this.funcMoveStop = function() {
                n.moveStop()
            }, this.funcMoveResume = function() {
                n.moveResume()
            }, this.auto ? (this.o.pauseOnHover && this.$clip.hover(this.funcMoveStop, this.funcMoveResume), this.moveForward()) : (this.$btnBack = e(".simply-scroll-back", this.$container).addClass("simply-scroll-btn " + this.moveBackClass + " disabled").hover(this.funcMoveBack, this.funcMoveStop), this.$btnForward = e(".simply-scroll-forward", this.$container).addClass("simply-scroll-btn " + this.moveForwardClass).hover(this.funcMoveForward, this.funcMoveStop))
        },
        moveForward: function() {
            var e = this;
            this.movement = "forward", null !== this.trigger && this.$btnBack.removeClass("disabled"), e.interval = setInterval(function() {
                !e.o.horizontal && e.$clip[0].scrollTop < e.posMax - e.clipMax ? e.$clip[0].scrollTop += e.o.speed : e.o.horizontal && e.$clip[0].scrollLeft < e.posMax - e.clipMax ? e.$clip[0].scrollLeft += e.o.speed : "loop" == e.o.autoMode ? e.resetPos() : e.moveStop(e.movement)
            }, e.intervalDelay)
        },
        moveBack: function() {
            var e = this;
            this.movement = "back", null !== this.trigger && this.$btnForward.removeClass("disabled"), e.interval = setInterval(function() {
                !e.o.horizontal && e.$clip[0].scrollTop > 0 ? e.$clip[0].scrollTop -= e.o.speed : e.o.horizontal && e.$clip[0].scrollLeft > 0 ? e.$clip[0].scrollLeft -= e.o.speed : "loop" == e.o.autoMode ? e.resetPos() : e.moveStop(e.movement)
            }, e.intervalDelay)
        },
        moveStop: function(t) {
            clearInterval(this.interval), null !== this.trigger && (void 0 !== t && e(this.trigger).addClass("disabled"), this.trigger = null), this.auto && "bounce" == this.o.autoMode && ("forward" == t ? this.moveBack() : this.moveForward())
        },
        moveResume: function() {
            "forward" == this.movement ? this.moveForward() : this.moveBack()
        },
        resetPos: function() {
            this.o.horizontal ? this.$clip[0].scrollLeft = 0 : this.$clip[0].scrollTop = 0
        },
        renderData: function(t) {
            if (t.length > 0) {
                var n = this;
                e.each(t, function(t, i) {
                    e("<img/>").attr({
                        src: i.src,
                        title: i.title,
                        alt: i.title,
                        width: n.o.jsonImgWidth,
                        height: n.o.jsonImgHeight
                    }).appendTo(n.$list)
                }), this.init()
            }
        }
    })
}(jQuery),
function(e) {
    e.fn.carouFredSel = function(t) {
        return this.each(function() {
            var n = e.extend(!0, {}, e.fn.carouFredSel.defaults, t),
                i = e(this),
                o = i.wrap('<div class="caroufredsel_wrapper" />').parent(),
                r = e("> *", i),
                a = r.length,
                s = 0,
                l = null,
                c = "up" == n.direction || "left" == n.direction ? "next" : "prev";
            "object" != typeof n.items && (n.items = {
                visible: n.items
            }), n.items.width || (n.items.width = r.outerWidth(!0)), n.items.height || (n.items.height = r.outerHeight(!0)), n.visibleItems && (n.items.visible = n.visibleItems), "number" != typeof n.scroll.duration && (n.scroll.duration = 500), null == n.scroll.items && (n.scroll.items = n.items.visible), n.auto = e.fn.carouFredSel.getNaviObject(n.auto, !1, !0), n.prev = e.fn.carouFredSel.getNaviObject(n.prev), n.next = e.fn.carouFredSel.getNaviObject(n.next), n.pagination = e.fn.carouFredSel.getNaviObject(n.pagination, !0), n.auto = e.extend({}, n.scroll, n.auto), n.prev = e.extend({}, n.scroll, n.prev), n.next = e.extend({}, n.scroll, n.next), n.pagination = e.extend({}, n.scroll, n.pagination), "function" != typeof n.pagination.anchorBuilder && (n.pagination.anchorBuilder = e.fn.carouFredSel.pageAnchorBuilder), "boolean" != typeof n.pagination.keys && (n.pagination.keys = !1), "boolean" != typeof n.auto.play && (n.auto.play = !0), "boolean" != typeof n.auto.nap && (n.auto.nap = !0), "number" != typeof n.auto.delay && (n.auto.delay = 0), "number" != typeof n.auto.pauseDuration && (n.auto.pauseDuration = 6 * n.auto.duration), n.auto.pauseDuration == n.auto.duration && (n.auto.duration -= 10), n.prev.name = "prev", n.next.name = "next", n.pagination.name = "pagination", i.css({
                position: "absolute"
            }), o.css({
                position: "relative",
                overflow: "hidden"
            });
            var u = e.fn.carouFredSel.getSizes(n, r.filter(":lt(" + n.items.visible + ")"), !0);
            o.css(u[0], u[1]).css(u[2], u[3]);
            var u = e.fn.carouFredSel.getSizes(n, r);
            i.css(u[0], 2 * u[1]).css(u[2], u[3]), i.bind("pause", function() {
                null != l && clearTimeout(l)
            }).bind("play", function(e, t, o) {
                n.auto.play && (void 0 === t && (t = c), void 0 === o && (o = 0), l = setTimeout(function() {
                    i.is(":animated") ? i.trigger("pause").trigger("play", t) : i.trigger(t, n.auto)
                }, n.auto.pauseDuration + o))
            }).bind("prev", function(t, r, l) {
                if (!i.is(":animated")) {
                    if (n.items.visible >= a) return void e.fn.carouFredSel.log("Not enough items: not scrolling");
                    if ("number" == typeof r && (l = r), "object" != typeof r && (r = n.prev), "number" != typeof l && (l = r.items), "number" != typeof l) return void e.fn.carouFredSel.log("Not a valid number.");
                    i.find("> *:gt(" + (a - l - 1) + ")").prependTo(i), a < n.items.visible + l && i.find("> *:lt(" + (n.items.visible + l - a) + ")").clone(!0).appendTo(i), s -= l, s < 0 && (s += a);
                    var c = e.fn.carouFredSel.getCurrentItems(i, n, l),
                        u = e.fn.carouFredSel.getSizes(n, c[0].filter(":lt(" + l + ")")),
                        d = e.fn.carouFredSel.getSizes(n, c[0], !0),
                        p = {},
                        f = {},
                        h = "auto" == r.duration ? n.scroll.duration / n.scroll.items * l : r.duration;
                    p[u[4]] = 0, f[u[0]] = d[1], f[u[2]] = d[3], r.onBefore && r.onBefore(c[1], c[0], r.name), o.animate(f, {
                        duration: h,
                        easing: r.easing
                    }), i.data("numItems", l).data("sliderObj", r).data("oldItems", c[1]).data("newItems", c[0]).css(u[4], -u[1]).animate(p, {
                        duration: h,
                        easing: r.easing,
                        complete: function() {
                            a < n.items.visible + i.data("numItems") && i.find("> *:gt(" + (a - 1) + ")").remove(), i.data("sliderObj").onAfter && i.data("sliderObj").onAfter(i.data("oldItems"), i.data("newItems"), i.data("sliderObj").name)
                        }
                    }), i.trigger("updatePageStatus").trigger("pause").trigger("play", "prev")
                }
            }).bind("next", function(t, r, l) {
                if (!i.is(":animated")) {
                    if (n.items.visible >= a) return void e.fn.carouFredSel.log("Not enough items: not scrolling");
                    if ("number" == typeof r && (l = r), "object" != typeof r && (r = n.next), "number" != typeof l && (l = r.items), "number" != typeof l) return void e.fn.carouFredSel.log("Not a valid number.");
                    a < n.items.visible + l && i.find("> *:lt(" + (n.items.visible + l - a) + ")").clone(!0).appendTo(i), s += l, s >= a && (s -= a);
                    var c = e.fn.carouFredSel.getCurrentItems(i, n, l),
                        u = e.fn.carouFredSel.getSizes(n, c[0].filter(":lt(" + l + ")")),
                        d = e.fn.carouFredSel.getSizes(n, c[1], !0),
                        p = {},
                        f = {},
                        h = "auto" == r.duration ? n.scroll.duration / n.scroll.items * l : r.duration;
                    p[u[4]] = -u[1], f[u[0]] = d[1], f[u[2]] = d[3], r.onBefore && r.onBefore(c[0], c[1], r.name), o.animate(f, {
                        duration: h,
                        easing: r.easing
                    }), i.data("numItems", l).data("sliderObj", r).data("oldItems", c[0]).data("newItems", c[1]).animate(p, {
                        duration: h,
                        easing: r.easing,
                        complete: function() {
                            i.data("sliderObj").onAfter && i.data("sliderObj").onAfter(i.data("oldItems"), i.data("newItems"), i.data("sliderObj").name), a < n.items.visible + i.data("numItems") && i.find("> *:gt(" + (a - 1) + ")").remove(), i.css(u[4], 0).find("> *:lt(" + i.data("numItems") + ")").appendTo(i)
                        }
                    }), i.trigger("updatePageStatus").trigger("pause").trigger("play", "next")
                }
            }).bind("scrollTo", function(t, n, o, r) {
                if (!i.is(":animated")) {
                    if ("string" == typeof n && (n = parseInt(n)), "object" == typeof n ? n = i.find("> *").index(n) : "number" == typeof n && (n += -s + a) >= a && (n -= a), "number" != typeof n || -1 == n) return void e.fn.carouFredSel.log("Not a valid number.");
                    "string" == typeof o && (o = parseInt(o)), "number" != typeof o && (o = 0), "object" != typeof r && (r = !1), n += o, n < 0 && (n += a), n >= a && (n -= a), 0 != n && (n < a / 2 ? i.trigger("next", [r, n]) : i.trigger("prev", [r, a - n]))
                }
            }).bind("slideTo", function(e, t, n, o) {
                i.trigger("scrollTo", [t, n, o])
            }).bind("insertItem", function(t, o, l) {
                if ("string" == typeof o && (o = e(o)), "object" != typeof o || "undefined" == typeof o.jquery || 0 == o.length) return void e.fn.carouFredSel.log("Not a valid object.");
                if (void 0 === l && (l = "after"), "number" == typeof l && (l -= 1), "string" == typeof l && (l = "before" == l ? a - 1 : "after" == l ? n.items.visible - 1 : "end" == l ? a - s - 1 : e(l)), "object" == typeof l && (l = i.find("> *").index(l) - 1), "number" != typeof l) return void e.fn.carouFredSel.log("Not a valid number.");
                var c = a - s;
                c >= a && (c -= a), l >= c && c > 0 && (s += o.length);
                var u = i.find("> *");
                u.length < 2 ? -1 == l ? i.prepend(o) : i.append(o) : -1 == l ? u.filter(":nth(0)").before(o) : u.filter(":nth(" + l + ")").after(o), r = i.find("> *"), a = r.length;
                var d = e.fn.carouFredSel.getSizes(n, r);
                i.css(d[0], 2 * d[1]).css(d[2], d[3]).trigger("updatePageStatus", !0)
            }).bind("removeItem", function(t, o) {
                if ("object" == typeof o && "undefined" == typeof o.jquery && (o = e(o)), "string" == typeof o && (o = e(o)), "number" == typeof o && (o = i.find("> *:nth(" + o + ")")), "object" != typeof o || "undefined" == typeof o.jquery || 0 == o.length) return void e.fn.carouFredSel.log("Not a valid object.");
                var l = i.find("> *").index(o),
                    c = a - s;
                c >= a && (c -= a), l >= c && c > 0 ? s -= o.length : c - o.length == 0 && (s = 0), o.remove(), r = i.find("> *"), a = r.length;
                var u = e.fn.carouFredSel.getSizes(n, r);
                i.css(u[0], 2 * u[1]).css(u[2], u[3]).trigger("updatePageStatus", !0)
            }).bind("updatePageStatus", function(t, o) {
                if (null == n.pagination.container || 0 == n.pagination.container.length) return !1;
                if ("boolean" == typeof o && o) {
                    n.pagination.container.find("> *").remove();
                    for (var r = 0; r < Math.ceil(a / n.items.visible); r++) n.pagination.container.append(n.pagination.anchorBuilder(r + 1));
                    n.pagination.container.find("> *").each(function(t) {
                        e(this).unbind("click").click(function() {
                            return i.trigger("scrollTo", [t * n.items.visible, 0, n.pagination]), !1
                        })
                    })
                }
                var l = Math.round(s / n.items.visible);
                n.pagination.container.find("> *").removeClass("selected").filter(":nth(" + l + ")").addClass("selected")
            }), n.auto.pauseOnHover && n.auto.play && i.hover(function() {
                i.trigger("pause")
            }, function() {
                i.trigger("play", c)
            }), null != n.prev.button && n.prev.button.length && (n.prev.button.click(function() {
                return i.trigger("prev"), !1
            }), n.prev.pauseOnHover && n.auto.play && n.prev.button.hover(function() {
                i.trigger("pause")
            }, function() {
                i.trigger("play", c)
            })), null != n.next.button && n.next.button.length && (n.next.button.click(function() {
                return i.trigger("next"), !1
            }), n.next.pauseOnHover && n.auto.play && n.next.button.hover(function() {
                i.trigger("pause")
            }, function() {
                i.trigger("play", c)
            })), null != n.pagination.container && n.pagination.container.length && (i.trigger("updatePageStatus", !0), n.pagination.pauseOnHover && n.auto.play && n.pagination.container.hover(function() {
                i.trigger("pause")
            }, function() {
                i.trigger("play", c)
            })), (n.next.key || n.prev.key) && e(document).keyup(function(e) {
                var t = e.keyCode;
                t == n.next.key && i.trigger("next"), t == n.prev.key && i.trigger("prev")
            }), n.pagination.keys && e(document).keyup(function(e) {
                var t = e.keyCode;
                t >= 49 && t < 58 && (t = (t - 49) * n.items.visible) <= a && i.trigger("scrollTo", [t, 0, n.pagination])
            }), n.auto.play && (i.trigger("play", [c, n.auto.delay]), e.fn.nap && n.auto.nap && i.nap("pause", "play"))
        })
    }, e.fn.carouFredSel.defaults = {
        width: null,
        height: null,
        items: {
            visible: 5
        },
        direction: "left",
        scroll: {
            items: null,
            easing: "swing",
            duration: null,
            pauseOnHover: !1,
            onBefore: null,
            onAfter: null
        }
    }, e.fn.carouFredSel.getKeyCode = function(e) {
        return "right" == e ? 39 : "left" == e ? 37 : "up" == e ? 38 : "down" == e ? 40 : -1
    }, e.fn.carouFredSel.getNaviObject = function(t, n, i) {
        if ("boolean" != typeof n && (n = !1), "boolean" != typeof i && (i = !1), void 0 === t && (t = {}), "string" == typeof t) {
            var o = e.fn.carouFredSel.getKeyCode(t);
            t = -1 == o ? e(t) : o
        }
        return n ? ("undefined" != typeof t.jquery && (t = {
            container: t
        }), "boolean" == typeof t && (t = {
            keys: t
        }), "string" == typeof t.container && (t.container = e(t.container))) : i ? ("boolean" == typeof t && (t = {
            play: t
        }), "number" == typeof t && (t = {
            pauseDuration: t
        })) : ("undefined" != typeof t.jquery && (t = {
            button: t
        }), "number" == typeof t && (t = {
            key: t
        }), "string" == typeof t.button && (t.button = e(t.button)), "string" == typeof t.key && (t.key = e.fn.carouFredSel.getKeyCode(t.key))), t
    }, e.fn.carouFredSel.getCurrentItems = function(e, t, n) {
        return [e.find("> *:lt(" + t.items.visible + ")"), e.find("> *:lt(" + (t.items.visible + n) + "):gt(" + (n - 1) + ")")]
    }, e.fn.carouFredSel.log = function(e) {
        try {
            console.log("carouFredSel: " + e)
        } catch (e) {}
    }, e.fn.carouFredSel.pageAnchorBuilder = function(e) {
        return '<a href="#"><span>' + e + "</span></a>"
    }, e.fn.carouFredSel.getSizes = function(t, n, i) {
        "boolean" != typeof i && (i = !1);
        var o = "right" == t.direction || "left" == t.direction ? ["width", "outerWidth", "height", "outerHeight", "left"] : ["height", "outerHeight", "width", "outerWidth", "top"],
            r = 0,
            a = 0;
        return r = i && "number" == typeof t[o[0]] ? t[o[0]] : "number" == typeof t.items[o[0]] ? t.items[o[0]] * n.length : e.fn.carouFredSel.getSizeTotal(n, o[1]), a = i && "number" == typeof t[o[2]] ? t[o[2]] : "number" == typeof t.items[o[2]] ? t.items[o[2]] : e.fn.carouFredSel.getSizeMax(n, o[3]), [o[0], r, o[2], a, o[4]]
    }, e.fn.carouFredSel.getSizeTotal = function(t, n) {
        var i = 0;
        return t.each(function() {
            i += e(this)[n](!0)
        }), i
    }, e.fn.carouFredSel.getSizeMax = function(t, n) {
        var i = 0,
            o = 0;
        return t.each(function() {
            o = e(this)[n](!0), i < o && (i = o)
        }), i
    }
}(jQuery),
function(e) {
    function t() {
        var e = location.href;
        return hashtag = -1 !== e.indexOf("#prettyPhoto") && decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
    }

    function n() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }

    function i() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }

    function o(e, t) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var n = "[\\?&]" + e + "=([^&#]*)",
            i = new RegExp(n),
            o = i.exec(t);
        return null == o ? "" : o[1]
    }
    e.prettyPhoto = {
        version: "3.1.6"
    }, e.fn.prettyPhoto = function(r) {
        function a() {
            e(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (T / 2 - v.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
                height: v.contentHeight,
                width: v.contentWidth
            }, settings.animation_speed), $pp_pic_holder.animate({
                top: projectedTop,
                left: S / 2 - v.containerWidth / 2 < 0 ? 0 : S / 2 - v.containerWidth / 2,
                width: v.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(v.height).width(v.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == d(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (v.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide()), !settings.autoplay_slideshow || $ || y || e.prettyPhoto.startSlideshow(), settings.changepicturecallback(), y = !0
            }), m(), r.ajaxcallback()
        }

        function s(t) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                e(".pp_loaderIcon").show(), t()
            })
        }

        function l(t) {
            t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
        }

        function c(e, t) {
            if (resized = !1, u(e, t), imageWidth = e, imageHeight = t, (_ > S || x > T) && doresize && settings.allow_resize && !C) {
                for (resized = !0, fitting = !1; !fitting;) _ > S ? (imageWidth = S - 200, imageHeight = t / e * imageWidth) : x > T ? (imageHeight = T - 200, imageWidth = e / t * imageHeight) : fitting = !0, x = imageHeight, _ = imageWidth;
                (_ > S || x > T) && c(_, x), u(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(x),
                containerWidth: Math.floor(_) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(b),
                contentWidth: Math.floor(w),
                resized: resized
            }
        }

        function u(t, n) {
            t = parseFloat(t), n = parseFloat(n), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            }), titleHeight += $pp_title.height(), $pp_title.remove(), b = n + detailsHeight, w = t, x = b + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), _ = t
        }

        function d(e) {
            return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image"
        }

        function p() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = f(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = T / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > T) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: S / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }

        function f() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }

        function h() {
            T = e(window).height(), S = e(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(S)
        }

        function m() {
            isSet && settings.overlay_gallery && "image" == d(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((v.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }

        function g() {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), e("body").append(settings.markup), $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"), isSet && settings.overlay_gallery) {
                currentGalleryPage = 0, toInject = "";
                for (var t = 0; t < pp_images.length; t++) pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function() {
                    return e.prettyPhoto.changeGalleryPage("next"), e.prettyPhoto.stopSlideshow(), !1
                }), $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return e.prettyPhoto.changeGalleryPage("previous"), e.prettyPhoto.stopSlideshow(), !1
                }), $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }), itemWidth = 57, $pp_gallery_li.each(function(t) {
                    e(this).find("a").click(function() {
                        return e.prettyPhoto.changePage(t), e.prettyPhoto.stopSlideshow(), !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return e.prettyPhoto.startSlideshow(), !1
            })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
                opacity: 0,
                height: e(document).height(),
                width: e(window).width()
            }).bind("click", function() {
                settings.modal || e.prettyPhoto.close()
            }), e("a.pp_close").bind("click", function() {
                return e.prettyPhoto.close(), !1
            }), settings.allow_expand && e("a.pp_expand").bind("click", function() {
                return e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), s(function() {
                    e.prettyPhoto.open()
                }), !1
            }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return e.prettyPhoto.changePage("previous"), e.prettyPhoto.stopSlideshow(), !1
            }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return e.prettyPhoto.changePage("next"), e.prettyPhoto.stopSlideshow(), !1
            }), p()
        }
        r = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, r);
        var v, y, b, w, x, _, $, k = this,
            C = !1,
            T = e(window).height(),
            S = e(window).width();
        return doresize = !0, scroll_pos = f(), e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            p(), h()
        }), r.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
                case 37:
                    e.prettyPhoto.changePage("previous"), t.preventDefault();
                    break;
                case 39:
                    e.prettyPhoto.changePage("next"), t.preventDefault();
                    break;
                case 27:
                    settings.modal || e.prettyPhoto.close(), t.preventDefault()
            }
        }), e.prettyPhoto.initialize = function() {
            return settings = r, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = e(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(k, function(t) {
                if (-1 != e(t).attr(settings.hook).indexOf(theRel)) return e(t).attr("href")
            }) : e.makeArray(e(this).attr("href")), pp_titles = isSet ? jQuery.map(k, function(t) {
                if (-1 != e(t).attr(settings.hook).indexOf(theRel)) return e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : ""
            }) : e.makeArray(e(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(k, function(t) {
                if (-1 != e(t).attr(settings.hook).indexOf(theRel)) return e(t).attr("title") ? e(t).attr("title") : ""
            }) : e.makeArray(e(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(e(this).attr("href"), pp_images), rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)), g(this), settings.allow_resize && e(window).bind("scroll.prettyphoto", function() {
                p()
            }), e.prettyPhoto.open(), !1
        }, e.prettyPhoto.open = function(t) {
            return "undefined" == typeof settings && (settings = r, pp_images = e.makeArray(arguments[0]), pp_titles = arguments[1] ? e.makeArray(arguments[1]) : e.makeArray(""), pp_descriptions = arguments[2] ? e.makeArray(arguments[2]) : e.makeArray(""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, g(t.target)), settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), l(e(pp_images).size()), e(".pp_loaderIcon").show(), settings.deeplinking && n(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), C = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), C = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), C = !0), $pp_pic_holder.fadeIn(function() {
                switch (settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, d(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image, nextImage = new Image, isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function() {
                            v = c(imgPreloader.width, imgPreloader.height), a()
                        }, imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist."), e.prettyPhoto.close()
                        }, imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        v = c(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, o("rel", pp_images[set_position]) ? movie += "?rel=" + o("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        v = c(movie_width, movie_height), movie_id = pp_images[set_position];
                        var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                            n = movie_id.match(t);
                        movie = "http://player.vimeo.com/video/" + n[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = v.width + "/embed/?moog_width=" + v.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, v.height).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        v = c(movie_width, movie_height), v.height += 15, v.contentHeight += 15, v.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        v = c(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        v = c(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, v.width).replace(/{height}/g, v.height).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = !1, v = c(movie_width, movie_height), doresize = !0, skipInjection = !0, e.get(pp_images[set_position], function(e) {
                            toInject = settings.inline_markup.replace(/{content}/g, e), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, a()
                        });
                        break;
                    case "custom":
                        v = c(movie_width, movie_height), toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, v = c(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, a())
            }), !1
        }, e.prettyPhoto.changePage = function(t) {
            currentGalleryPage = 0, "previous" == t ? --set_position < 0 && (set_position = e(pp_images).size() - 1) : "next" == t ? ++set_position > e(pp_images).size() - 1 && (set_position = 0) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), s(function() {
                e.prettyPhoto.open()
            })
        }, e.prettyPhoto.changeGalleryPage = function(e) {
            "next" == e ? ++currentGalleryPage > totalPage && (currentGalleryPage = 0) : "previous" == e ? --currentGalleryPage < 0 && (currentGalleryPage = totalPage) : currentGalleryPage = e, slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }, e.prettyPhoto.startSlideshow = function() {
            void 0 === $ ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return e.prettyPhoto.stopSlideshow(), !1
            }), $ = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next")
        }, e.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return e.prettyPhoto.startSlideshow(), !1
            }), clearInterval($), $ = undefined
        }, e.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                e(this).remove()
            }), $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), e(this).remove(), e(window).unbind("scroll.prettyphoto"), i(), settings.callback(), doresize = !0, y = !1, delete settings
            }))
        }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function() {
            e("a[" + r.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;
! function(e) {
    e.fn.autoComplete = function(t) {
        var n = e.extend({}, e.fn.autoComplete.defaults, t);
        return "string" == typeof t ? (this.each(function() {
            var n = e(this);
            "destroy" == t && (e(window).off("resize.autocomplete", n.updateSC), n.off("blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete"), n.data("autocomplete") ? n.attr("autocomplete", n.data("autocomplete")) : n.removeAttr("autocomplete"), e(n.data("sc")).remove(), n.removeData("sc").removeData("autocomplete"))
        }), this) : this.each(function() {
            function t(e, t) {
                var o = i.val();
                if (i.cache[o] = e, e.length && o.length >= n.minChars) {
                    for (var r = "", a = 0; a < e.length; a++) r += n.renderItem(e[a], o);
                    i.scs.html(r), t != undefined ? i.sc.html(i.scs).append(t) : i.sc.html(i.scs), i.updateSC(0)
                } else i.sc.hide()
            }
            var i = e(this);
            i.sc = e('<div class="autocomplete-suggestions ' + n.menuClass + '"></div>'), i.scs = e('<div class="autocomplete-suggestion-s"></div>'), i.data("sc", i.sc).data("autocomplete", i.attr("autocomplete")), i.attr("autocomplete", "off"), i.cache = {}, i.last_val = "", i.updateSC = function(t, n) {
                if (i.sc.css({
                        top: i.offset().top + i.outerHeight(),
                        left: i.offset().left,
                        width: i.outerWidth()
                    }), !t && (i.sc.show(), i.sc.maxHeight || (i.sc.maxHeight = parseInt(i.sc.css("max-height"))), i.sc.suggestionHeight || (i.sc.suggestionHeight = e(".autocomplete-suggestion", i.sc).first().outerHeight()), i.sc.suggestionHeight))
                    if (n) {
                        var o = i.sc.scrollTop(),
                            r = n.offset().top - i.sc.offset().top;
                        r + i.sc.suggestionHeight - i.sc.maxHeight > 0 ? i.sc.scrollTop(r + i.sc.suggestionHeight + o - i.sc.maxHeight) : r < 0 && i.sc.scrollTop(r + o)
                    } else i.sc.scrollTop(0)
            }, e(window).on("resize.autocomplete", i.updateSC), i.sc.appendTo("body"), i.sc.on("mouseleave", ".autocomplete-suggestion", function() {
                e(".autocomplete-suggestion.selected").removeClass("selected")
            }), i.sc.on("mouseenter", ".autocomplete-suggestion", function() {
                e(".autocomplete-suggestion.selected").removeClass("selected"), e(this).addClass("selected")
            }), i.sc.on("mousedown click", ".autocomplete-suggestion", function(t) {
                var o = e(this),
                    r = o.data("href"),
                    a = o.data("val");
                return (a || o.hasClass("autocomplete-suggestion")) && (i.val(a), n.onSelect(t, r, o), i.sc.hide()), !1
            }), i.on("blur.autocomplete", function() {
                try {
                    over_sb = e(".autocomplete-suggestions:hover").length
                } catch (e) {
                    over_sb = 0
                }
                over_sb ? i.is(":focus") || setTimeout(function() {
                    i.focus()
                }, 20) : (i.last_val = i.val(), i.sc.hide(), setTimeout(function() {
                    i.sc.hide()
                }, 350))
            }), n.minChars || i.on("focus.autocomplete", function() {
                i.last_val = "\n", i.trigger("keyup.autocomplete")
            }), i.on("keydown.autocomplete", function(t) {
                if ((40 == t.which || 38 == t.which) && i.sc.html()) {
                    var o, r = e(".autocomplete-suggestion.selected", i.sc);
                    return r.length ? (o = 40 == t.which ? r.next(".autocomplete-suggestion") : r.prev(".autocomplete-suggestion"), o.length ? (r.removeClass("selected"), i.val(o.addClass("selected").data("val"))) : (r.removeClass("selected"), i.val(i.last_val), o = 0)) : (o = 40 == t.which ? e(".autocomplete-suggestion", i.sc).first() : e(".autocomplete-suggestion", i.sc).last(), i.val(o.addClass("selected").data("val"))), i.updateSC(0, o), !1
                }
                if (27 == t.which) i.val(i.last_val).sc.hide();
                else if (13 == t.which || 9 == t.which) {
                    var r = e(".autocomplete-suggestion.selected", i.sc);
                    r.length && i.sc.is(":visible") && (n.onSelect(t, r.data("href"), r), setTimeout(function() {
                        i.sc.hide()
                    }, 20))
                }
            }), i.on("keyup.autocomplete", function(o) {
                if (!~e.inArray(o.which, [13, 27, 35, 36, 37, 38, 39, 40])) {
                    var r = i.val();
                    if (r.length >= n.minChars) {
                        if (r != i.last_val) {
                            if (i.last_val = r, clearTimeout(i.timer), n.cache) {
                                if (r in i.cache) return void t(i.cache[r]);
                                for (var a = 1; a < r.length - n.minChars; a++) {
                                    var s = r.slice(0, r.length - a);
                                    if (s in i.cache && !i.cache[s].length) return void t([])
                                }
                            }
                            i.timer = setTimeout(function() {
                                n.source(r, t)
                            }, n.delay)
                        }
                    } else i.last_val = r, i.sc.hide()
                }
            })
        })
    }, e.fn.autoComplete.defaults = {
        source: 0,
        minChars: 2,
        delay: 150,
        cache: 0,
        menuClass: "",
        renderItem: function(e, t) {
            t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            var n = new RegExp("(" + t.split(" ").join("|") + ")", "gi");
            return '<a class="autocomplete-suggestion" data-href="/products/' + e.slug + '" data-val="' + e.data + '">' + e.data.replace(n, "<b>$1</b>") + "</a>"
        },
        onSelect: function(e, t) {
            window.location.href = t
        }
    }
}(jQuery), $(document).ready(function() {

    function linkImage(image) {
        if (image.split("/").length > 2) {
            return image;
        } else {
            return `/images/${image}`;
        }
    }

    var unit_price = function(note) {
        if (note) {
            return note;
        } else {
            return 'Cái';
        }
    }

    $("#txtQuery").autoComplete({
        source: function(e, t) {
            $.getJSON("/search_autohome", {
                q: e.toLowerCase()
            }, function(e) {
                var n = [];
                p = e.products, total = e.total;
                var i = $("html").attr("lang");
                $(p).each(function() {
                    var e = "" != $(this)[0].unit && null != $(this)[0].unit ? $(this)[0].unit : "C\xe1i",
                        t = "" != $(this)[0].unit_en ? $(this)[0].unit_en : "Pc",
                        o = "en" == i ? t : e,
                        r = $(this)[0].name;
                    n.push({
                        data: r,
                        slug: $(this)[0].slug,
                        image_id: $(this)[0].image,
                        price: $(this)[0].price,
                        note: $(this)[0].note
                    })
                });
                var o = "en" == i ? "View all " + total + " results" : "Xem t\u1ea5t c\u1ea3 " + total + " k\u1ebft qu\u1ea3";
                $div = '<div class="view-more-search" onclick="btnSearchClick();">' + o + "</div>", t(n, $div)
            })
        },
        renderItem: function(e, t) {
            t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            var n = new RegExp("(" + t.split(" ").join("|") + ")", "gi"),
                i = accounting.formatMoney(e.price, "", 0);
            return '<a class="autocomplete-suggestion" data-href="/products/' + e.slug + '" data-val="' + e.data + '"><img src="' + linkImage(e.image_id) + '"><span class="ne">' + e.data + '</span><span class="pri">' + i + "/" + unit_price(e.note) +
                "</span></a>"
        },
        onSelect: function(e, t) {
            window.location.href = t
        }
    }), $("#txtQueryTop").autoComplete({
        source: function(e, t) {
            $.getJSON("/search_autohome", {
                q: e.toLowerCase()
            }, function(e) {
                var n = [];
                p = e.products, total = e.total;
                var i = $("html").attr("lang");
                $(p).each(function() {
                    var e = "" != $(this)[0].unit && null != $(this)[0].unit ? $(this)[0].unit : "C\xe1i",
                        t = "" != $(this)[0].unit_en ? $(this)[0].unit_en : "Pc",
                        o = "en" == i ? t : e,
                        r = $(this)[0].name;
                    n.push({
                        data: r,
                        slug: $(this)[0].slug,
                        image_id: $(this)[0].image,
                        price: $(this)[0].price,
                        note: $(this)[0].note
                    })
                });
                var o = "en" == i ? "View all " + total + " results" : "Xem t\u1ea5t c\u1ea3 " + total + " k\u1ebft qu\u1ea3";
                $div = '<div class="view-more-search" onclick="btnSearchClick();">' + o + "</div>", t(n, $div)
            })
        },
        renderItem: function(e, t) {
            t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            var n = new RegExp("(" + t.split(" ").join("|") + ")", "gi"),
                i = accounting.formatMoney(e.price, "", 0);
            return '<a class="autocomplete-suggestion" data-href="/products/' + e.slug + '" data-val="' + e.data + '"><img src="' + linkImage(e.image_id) + '"><span class="ne">' + e.data + '</span><span class="pri">' + i + "/" + unit_price(e.note) + "</span></a>"
        }
    }), $("#search_name_product").autoComplete({
        source: function(e, t) {
            $.getJSON("/search/order_online.json", {
                q: e.toLowerCase()
            }, function(e) {
                var n = [];
                $(e).each(function() {
                    var e = "" != $(this)[0].unit && null != $(this)[0].unit ? $(this)[0].unit : "C\xe1i",
                        t = "" != $(this)[0].unit_en ? $(this)[0].unit_en : "Pc",
                        i = $("html").attr("lang"),
                        o = "en" == i ? t : e,
                        r = $(this)[0].price,
                        a = "en" == i ? $(this)[0].name_en : $(this)[0].name,
                        s = null !== $(this)[0].inventory ? $(this)[0].inventory : 0;
                    n.push({
                        data: a,
                        slug: $(this)[0].slug,
                        inventory: s,
                        image_id: $(this)[0].image_id,
                        unit: o,
                        price: r,
                        value: $(this)[0].id
                    })
                }), t(n)
            })
        },
        renderItem: function(e, t) {
            t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            var n = new RegExp("(" + t.split(" ").join("|") + ")", "gi"),
                i = accounting.formatMoney(e.price, "", 0);
            return '<a class="autocomplete-suggestion" data-href="/products/' + e.slug + '" data-inventory="' + e.inventory + '" data-unit="' + e.unit + '" data-id="' + e.value + '"  data-image="' + e.image_id + '" data-val="' + e.data + '"><img src="/upload/medium/' + e.image_id + '.jpg"><span class="ne">' + e.data.replace(n, "<b>$1</b>") + '</span><span class="pri">' + i + "\u0111/" + e.unit + "</span></a>"
        },
        onSelect: function(e, t, n) {
            $.getJSON("/carts/get_product_price.json", {
                product_id: $(n).data("id")
            }, function(e) {
                _price_result = accounting.formatMoney(e.price, "", 0), $("#price").text(_price_result), $(".currency-cart").text(e.currency)
            }), $("#inventory").text($(n).data("inventory")), $("#image-and-name-add-cart img").attr("src", "/upload/large/" + $(n).data("image") + ".jpg").show(), $("#search_id_product").val($(n).data("id")), $("#list-search-order-online").hide(), $(".unit-cart").text($(n).data("unit"))
        }
    }), $(".btn-search-home").click(function(e) {
        return $parent = $(this).parent(".namesub"), $input = $parent.find(".defaultText"), "" != $input.val() || (e.preventDefault(), !1)
    }), $("#txtQuery").keypress(function(e) {
        if (13 == e.which && "" == $("#txtQuery").val()) return !1
    }), $("#search_name_product").keypress(function(e) {
        if (13 == e.which) return !1
    })
});
var SupportBox = {
    options: {
        loaded: !1,
        url: "https://thegioiic.com/supports.json",
        btnClose: ".btn-close-dialog-support",
        buttonOpen: ".btn-show-dialog-support",
        buttonClose: '<input type="button" class="btn-close-dialog-support"></div>',
        divBox: '<div class="dialog-box"></div>',
        divTitle: '<div class="dialog-box-title"></div>',
        divContent: '<div class="dialog-box-content"></div>',
        li_parent: '<li class="parent"><span>{support_name}</span></li>',
        li_children: '<li class="children"><span>{name}</span><a class="zalo" href="http://zalo.me/{zalo}" target="_blank"><img src="https://thegioiic.com/images/icon_zalo.png" style="border: none;" width="24px" height="24px"></a><a class="skype" href="skype:{skype}?chat" target="_blank"><img src="https://thegioiic.com/images/icon_skype.png" style="border: none;" width="24px" height="24px"></a><a class="facebook" href="https://www.facebook.com/{messenger}" target="_blank"><img src="https://thegioiic.com/images/icon_messenger.png" style="border: none;" width="24px" height="24px"></a><b>Tel: {mobile}</b></li>'
    },
    init: function(e) {
        var t = $.extend(SupportBox.options, e);
        $(document).ready(function() {
            button = t.buttonOpen, buttonClose = t.btnClose, $(button).click(function(e) {
                t.loaded ? $(".dialog-box").show() : $.ajax({
                    url: t.url,
                    method: "GET",
                    dataType: "JSON",
                    crossDomain: !0,
                    success: function(e) {
                        SupportBox.buildbox($, t, e)
                    }
                }), e.preventDefault()
            }), $(buttonClose).click(function() {
                SupportBox.hiddebox($, t.divBox)
            })
        })
    },
    buildbox: function(e, t, n) {
        $ul = e("<ul></ul>"), e.each(n, function(n, i) {
            i.supporter.length > 0 && ($ulchild = e("<ul></ul>"), $li = e(t.li_parent.replace(/{support_name}/g, i.support_name)), e.each(i.supporter, function(e, n) {
                $ulchild.append(t.li_children.replace(/{name}/g, n.name).replace(/{zalo}/g, n.yahoo).replace(/{skype}/g, n.skype).replace(/{messenger}/g, n.msn).replace(/{mobile}/g, n.mobile))
            }), $li.append($ulchild), $ul.append($li))
        }), $titleDiv = e(t.divTitle), $containerDiv = e(t.divBox), $contentDiv = e(t.divContent), $buttonClose = e(t.buttonClose), "en" == e("html").attr("lang") ? $titleDiv.append("<h1>Online support</h1>").append($buttonClose).appendTo($containerDiv) : $titleDiv.append("<h1>H\u1ed7 tr\u1ee3 tr\u1ef1c tuy\u1ebfn</h1>").append($buttonClose).appendTo($containerDiv), $contentDiv.append($ul).appendTo($containerDiv), $div = e('<div class="support-box"></div>'), $containerDiv.appendTo($div), $div.appendTo("body"), $div.find(t.btnClose).bind("click", function() {
            SupportBox.hiddebox($containerDiv)
        }), SupportBox.showbox(e, $containerDiv), t.loaded = !0
    },
    showbox: function(e, t) {
        var n = e(window).height(),
            i = e(window).width(),
            o = t.width(),
            r = t.height();
        t.css({
            top: (n - r) / 2 + "px",
            left: (i - o) / 2 + "px"
        }), t.show()
    },
    hiddebox: function(e) {
        e.hide()
    }
};
SupportBox.init(), $(document).ready(function() {
    $(window).resize(function() {
        showAd(999, 5, 142, "#divAdRight", "#divAdLeft")
    }), showAd(999, 5, 142, "#divAdRight", "#divAdLeft")
});
var menu = {
    fadesettings: {
        overduration: 50,
        outduration: 10
    },
    getoffsetof: function(e) {
        e._offsets = {
            w: e.outerWidth(),
            h: e.outerHeight()
        }
    },
    isContained: function(e, t) {
        for (var t = window.event || t, n = t.relatedTarget || ("mouseover" == t.type ? t.fromElement : t.toElement); n && n != e;) try {
            n = n.parentNode
        } catch (t) {
            n = e
        }
        return n == e
    },
    cssClass: function(e, t, n) {
        var i = new RegExp("(^|\\s+)" + t + "($|\\s+)", "ig");
        if ("check" == n) return i.test(e.className);
        "remove" == n ? e.className = e.className.replace(i, "") : "add" != n || i.test(e.className) || (e.className += " " + t)
    },
    addEvent: function(e, t, n) {
        e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent && e.attachEvent("on" + n, function() {
            return t.call(e, window.event)
        })
    },
    buildmenu: function(e) {
        jQuery(document).ready(function(t) {
            var n = t("#" + e + " > ul > li");
            $menuid = t("#" + e), dimensions = {
                t: 31,
                l: t("#" + e).innerWidth()
            }, n.each(function() {
                var e = this,
                    n = t(this).find("ul:eq(0)");
                menu.addEvent(e, function() {
                    menu.cssClass(e, "current", "add"), menu.showmenu(n, dimensions)
                }, "mouseover"), menu.addEvent(e, function(t) {
                    menu.isContained(e, t) || (menu.cssClass(e, "current", "remove"), menu.hidemenu(n))
                }, "mouseout")
            })
        })
    },
    build: function(e) {
        jQuery(document).ready(function(t) {
            var n = t("li.root");
            $menuid = t("#" + e), dimension = {
                t: 0,
                l: t("#" + e).innerWidth() - 1
            }, n.each(function() {
                var e = this,
                    n = t(this).find("ul:eq(0)"),
                    i = t(this).find(".spana");
                n.css({
                    minHeight: $menuid.height() - 2
                }), menu.addEvent(e, function() {
                    t(n).children().length > 0 && (menu.cssClass(e, "current", "add"), menu.showmenu(n, dimension))
                }, "mouseover"), menu.addEvent(e, function(t) {
                    menu.isContained(e, t) || (menu.cssClass(e, "current", "remove"), menu.hidemenu(n))
                }, "mouseout"), i.each(function() {
                    var e = this,
                        i = t(this).parent().find("ul:eq(0)"),
                        o = t(this).parent().find(".close")[0];
                    i.css({
                        minHeight: n.height()
                    }), menu.addEvent(e, function(n) {
                        t(i).children().length > 0 && (n.stopPropagation(), n.preventDefault(), menu.cssClass(e, "current", "add"), menu.showmenu(i, {
                            t: -1,
                            l: 0
                        }))
                    }, "click"), menu.addEvent(o, function(e) {
                        e.stopPropagation(), e.preventDefault(), menu.hidemenu(i)
                    }, "click")
                })
            })
        })
    },
    showmenu: function(e, t) {
        $(e).css({
            top: t.t,
            left: t.l - 1,
            visibility: "visible",
            zIndex: 9999
        }).fadeIn(1)
    },
    hidemenu: function(e) {
        $(e).css({
            top: -1e3,
            left: -500,
            visibility: "hidden",
            zIndex: -1
        }), $(e).find("ul").css({
            top: -1e3,
            left: -500,
            visibility: "hidden",
            zIndex: -1
        })
    }
};
(function() {
    this.Cart || (this.Cart = {}), Cart.lists = [], Cart.addItem = function(e, t) {
        var n = !1;
        Cart.lists.forEach(function(i) {
            if (e == i.id) return i.quantity = parseInt(i.quantity) + parseInt(t), void(n = !0)
        }), 0 == n && Cart.lists.push({
            id: e,
            quantity: parseInt(t)
        }), Cart.storeCart()
    }, Cart.updateItem = function(e, t) {
        Cart.lists.forEach(function(n) {
            if (e == n.id) return void(n.quantity = parseInt(t))
        }), Cart.storeCart()
    }, Cart.deleteItem = function(e) {
        for (var t = 0; t < Cart.lists.length; t++) Cart.lists[t].id == e && Cart.lists.splice(t, 1);
        Cart.storeCart()
    }, Cart.getCart = function() {
        var e = localStorage.getItem("cartItemList");
        Cart.lists = JSON.parse(e) || []
    }, Cart.storeCart = function() {
        localStorage.setItem("cartItemList", JSON.stringify(Cart.lists))
    }, Cart.removeCart = function() {
        localStorage.removeItem("cartItemList")
    }, Cart.getCart()
}).call(this),
    function(e) {
        e.fn.zoomImage = function(t) {
            var n = {
                layerW: 100,
                layerH: 100,
                layerOpacity: .2,
                layerBgc: "#000",
                showPanelW: 350,
                showPanelH: 350,
                marginL: 5,
                marginT: 0
            };
            t = e.extend({}, n, t), e(this).each(function() {
                var n = e(this).css({
                        position: "relative"
                    }),
                    i = n.offset(),
                    o = n.width(),
                    r = n.height();
                n.find("img").css({
                    width: "100%",
                    height: "100%"
                });
                var a = t.showPanelW / t.layerW,
                    s = t.showPanelH / t.layerH,
                    l = e(".show").offset().left,
                    c = e(".show").offset().top,
                    u = e("<img>").attr("src", n.attr("href")).css({
                        position: "absolute",
                        left: "0",
                        top: "0",
                        width: o * a,
                        height: r * s
                    }).attr("id", "big-img"),
                    d = e("<div>").css({
                        display: "none",
                        position: "absolute",
                        left: "0",
                        top: "0",
                        backgroundColor: t.layerBgc,
                        width: t.layerW,
                        height: t.layerH,
                        opacity: t.layerOpacity,
                        border: "1px solid #ccc",
                        cursor: "crosshair"
                    }),
                    p = e("<div>").css({
                        display: "none",
                        position: "absolute",
                        overflow: "hidden",
                        "z-index": "10000",
                        left: l + 300,
                        top: c,
                        width: t.showPanelW,
                        height: t.showPanelH
                    }).append(u);
                n.append(d), e("body").append(p), n.on("mousemove", function(e) {
                    var n = e.pageX - i.left,
                        l = e.pageY - i.top;
                    n <= t.layerW / 2 ? n = 0 : n >= o - t.layerW / 2 ? n = o - t.layerW : n -= t.layerW / 2, l < t.layerH / 2 ? l = 0 : l >= r - t.layerH / 2 ? l = r - t.layerH : l -= t.layerH / 2, d.css({
                        left: n,
                        top: l
                    }), u.css({
                        left: -n * a,
                        top: -l * s
                    })
                }).on("mouseenter", function() {
                    d.show(), p.show()
                }).on("mouseleave", function() {
                    d.hide(), p.hide()
                })
            })
        }
    }(jQuery), $(document).ready(function() {
        var listCart = [];
        var cardOld = localStorage.getItem("list_card");
        if (cardOld) {
            listCart = JSON.parse(cardOld);
        }
        $(".card_value").html(listCart.length);
        $html = $("#main-search").html(), $(".auto-load-topic-forum").each(function() {
                $.ajax({
                    url: $(this).attr("data-url"),
                    dataType: "script"
                })
            }), $(".defaultText").focus(function() {
                $(this).val() == $(this)[0].title && ($(this).removeClass("defaultTextActive"), $(this).val(""))
            }), $(".mn-product").click(function() {
                $top = $(this).offset().top, $left = $(this).offset().left, $height = $(this).height(), $("#menubar").show().css({
                    top: $top + $height,
                    left: $left,
                    visibility: "visible"
                }), $(".overlay").show(), $(this).addClass("mmcurrent")
            }), $(document).click(function(e) {
                $target = $(e.target), $target.closest("#menubar").length || !$("#menubar").is(":visible") || $target.closest(".mn-product").length || ($("#menubar").hide(), $(".overlay").hide(), $(".mn-product").removeClass("mmcurrent"))
            }), $(".defaultText").blur(function() {
                "" == $(this).val() && ($(this).addClass("defaultTextActive"), $(this).val($(this)[0].title))
            }), $(".product-option:first-child").addClass("pcurrent"), $(".product-option:first-child").find("input").prop("checked", !0), $(".product-option").click(function() {
                var e = $("#product_option_id").val();
                1 == $(this).find("input").is(":checked") ? ($(this).removeClass("pcurrent"), $(this).find("input").prop("checked", !1), $("#product_option_id").val(removeString(e, $(this).attr("data-id"))), console.log("-")) : ($(this).addClass("pcurrent"), $(this).find("input").prop("checked", !0), $("#product_option_id").val(addItemString(e, $(this).attr("data-id"))), console.log("+"))
            }), $(".product-option input").click(function() {
                $("#product_option_id").val();
                1 == $(this).is(":checked") ? ($(this).parent().removeClass("pcurrent"), $(this).prop("checked", !1), console.log("-")) : ($(this).parent().addClass("pcurrent"), $(this).prop("checked", !0), console.log("+"))
            }), $(".defaultText").blur(), $(".go-top").click(function() {
                $(window).scrollTop(1)
            }), $(".ordered_btn").is(":checked") ? $("#ordered").show() : $("#ordered").hide(), $(".ordered_btn").click(function() {
                $(this).is(":checked") ? $("#ordered").show() : $("#ordered").hide()
            }), $(window).keypress(function(e) {
                e.which
            }), $(window).scroll(function() {
                var e = jQuery(window).scrollTop();
                parseInt(e) <= 50 ? $("#top-fix-scroll").css({
                    display: "none"
                }) : $("#top-fix-scroll").css({
                    display: "block"
                }), parseInt(e) >= 500 ? $(".go-top").css({
                    display: "block"
                }) : $(".go-top").css({
                    display: "none"
                })
            }), $(".cart-popup-hover-main").hover(function() {
                $(".cart-popup-hover").css({
                    display: "block"
                })
            }, function() {
                $(".cart-popup-hover").css({
                    display: "none"
                })
            }), $(".cart-popup-hover-scroll").hover(function() {
                $(".cart-popup-hover-scroll .cart-popup-hover").css({
                    display: "block"
                })
            }, function() {
                $(".cart-popup-hover").css({
                    display: "none"
                })
            }), $(".menu-doc img.view-menu-btn").click(function() {
                $(".menu-doc ul").toggle("slide")
            }), $(".menu-doc ul span").click(function() {
                $(".menu-doc ul").css({
                    display: "none"
                })
            }), $("body").click(function(e) {
                $(e.target).closest("#search-mobile").length || $("#search-mobile").hide()
            }),
            $(".review-product").click(function() {
                var product_id = parseInt($(this).attr("id"));
                var listSee = [];
                var seeOld = localStorage.getItem("saw_product");
                var isExits = false;
                if (seeOld) {
                    listSee = JSON.parse(seeOld);
                    listSee.forEach(function(value) {
                        if (value.id == product_id) {
                            isExits = true;
                        }
                    });
                }
                if (!isExits) {
                    listSee.push({ id: product_id });
                }
                localStorage.setItem("saw_product", JSON.stringify(listSee));
            }),
            $(".btn-cart").click(function(e) {
                e.preventDefault();
                var product_id = parseInt($(this).attr("id"));
                var quantity = $('.quantity-buy').val();
                var listCard = [];
                var cardOld = localStorage.getItem("list_card");
                var isExits = false;
                if (cardOld) {
                    listCard = JSON.parse(cardOld);
                    listCard.map(function(value) {
                        if (value.id == product_id) {
                            isExits = true;
                            return value.quantity = parseInt(value.quantity) + parseInt(quantity);
                        }
                    });
                }
                if (!isExits) {
                    listCard.push({ id: product_id, quantity: quantity });
                }
                localStorage.setItem("list_card", JSON.stringify(listCard));
                $(".card_value").html(listCard.length);
                toastr.success('Thêm thành công');
            }),
            $(".adtocartdestop").find(".btn-cart").click(function() {

                $parent = $(this).parents(".adtocartdestop");
                var e = $parent.find(".quantity-buy").val(),
                    t = $parent.find(".product_id").val();
                !isNaN(e) && "" != e && e > -1 ? $.ajax({
                    url: "/carts/add_to_cart",
                    type: "POST",
                    dataType: "script",
                    data: {
                        id: t,
                        quantitybuy: e
                    }
                }) : alert("!!!Error!!!")
            }), $(".touchspin-down").click(function() {
                $quantity = $(this).parents(".touchspin").find(".quantity-buy");
                var e = $quantity.val();
                e = parseInt(e) - 1, e = e < 1 ? 1 : e, $quantity.val(e)
            }), $(".touchspin-up").click(function() {
                $quantity = $(this).parents(".touchspin").find(".quantity-buy");
                var e = $quantity.val();
                e = parseInt(e) + 1, $quantity.val(e)
            }), setTimeout(function() {
                $(".alert").remove()
            }, 4e3), $(".show").zoomImage(), $(".show-small-img:first-of-type").css({
                border: "solid 1px #951b25",
                padding: "2px"
            }), $(".show-small-img:first-of-type").attr("alt", "now").siblings().removeAttr("alt"), $(".show-small-img").click(function() {
                $("#show-img").attr("src", $(this).attr("src")), $("#big-img").attr("src", $(this).attr("src")), $(this).attr("alt", "now").siblings().removeAttr("alt"), $(this).css({
                    border: "solid 1px #951b25"
                }).siblings().css({
                    border: "solid 1px #eee",
                    padding: "0"
                }), $("#small-img-roll").children().length > 4 && ($(this).index() >= 3 && $(this).index() < $("#small-img-roll").children().length - 1 ? $("#small-img-roll").css("left", 46 * -($(this).index() - 2) + "px") : $(this).index() == $("#small-img-roll").children().length - 1 ? $("#small-img-roll").css("left", 46 * -($("#small-img-roll").children().length - 4) + "px") : $("#small-img-roll").css("left", "0"))
            }), $("#next-img").click(function() {
                $("#show-img").attr("src", $(".show-small-img[alt='now']").next().attr("src")), $("#big-img").attr("src", $(".show-small-img[alt='now']").next().attr("src")), $(".show-small-img[alt='now']").next().css({
                    border: "solid 1px #951b25"
                }).siblings().css({
                    border: "solid 1px #eee",
                    padding: "0"
                }), $(".show-small-img[alt='now']").next().attr("alt", "now").siblings().removeAttr("alt"), $("#small-img-roll").children().length > 4 && ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $("#small-img-roll").children().length - 1 ? $("#small-img-roll").css("left", 46 * -($(".show-small-img[alt='now']").index() - 2) + "px") : $(".show-small-img[alt='now']").index() == $("#small-img-roll").children().length - 1 ? $("#small-img-roll").css("left", 46 * -($("#small-img-roll").children().length - 4) + "px") : $("#small-img-roll").css("left", "0"))
            }), $("#prev-img").click(function() {
                $("#show-img").attr("src", $(".show-small-img[alt='now']").prev().attr("src")), $("#big-img").attr("src", $(".show-small-img[alt='now']").prev().attr("src")), $(".show-small-img[alt='now']").prev().css({
                    border: "solid 1px #951b25"
                }).siblings().css({
                    border: "solid 1px #eee",
                    padding: "0"
                }), $(".show-small-img[alt='now']").prev().attr("alt", "now").siblings().removeAttr("alt"), $("#small-img-roll").children().length > 4 && ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $("#small-img-roll").children().length - 1 ? $("#small-img-roll").css("left", 46 * -($(".show-small-img[alt='now']").index() - 2) + "px") : $(".show-small-img[alt='now']").index() == $("#small-img-roll").children().length - 1 ? $("#small-img-roll").css("left", 46 * -($("#small-img-roll").children().length - 4) + "px") : $("#small-img-roll").css("left", "0"))
            })
    });

jQuery(document).ready(function($) {
    $.featureList(
        $("#tabs li a"),
        $("#output li"), {
            start_item: 1
        }
    );
});