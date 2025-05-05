(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : r.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = e(r);
    fetch(r.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Ea = '168',
  zi = { ROTATE: 0, DOLLY: 1, PAN: 2 },
  ki = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Nu = 0,
  gl = 1,
  Ou = 2,
  jc = 1,
  Fu = 2,
  gn = 3,
  Wn = 0,
  De = 1,
  xn = 2,
  zn = 0,
  Hi = 1,
  xl = 2,
  bl = 3,
  Ml = 4,
  Bu = 5,
  si = 100,
  ku = 101,
  Vu = 102,
  zu = 103,
  Hu = 104,
  Gu = 200,
  Wu = 201,
  Xu = 202,
  ju = 203,
  Oo = 204,
  Fo = 205,
  qu = 206,
  Yu = 207,
  Ku = 208,
  $u = 209,
  Zu = 210,
  Ju = 211,
  Qu = 212,
  td = 213,
  ed = 214,
  nd = 0,
  id = 1,
  rd = 2,
  Cs = 3,
  sd = 4,
  od = 5,
  ad = 6,
  ld = 7,
  qc = 0,
  cd = 1,
  hd = 2,
  Hn = 0,
  ud = 1,
  dd = 2,
  pd = 3,
  fd = 4,
  md = 5,
  _d = 6,
  vd = 7,
  Yc = 300,
  qi = 301,
  Yi = 302,
  Bo = 303,
  ko = 304,
  Os = 306,
  Vo = 1e3,
  ai = 1001,
  zo = 1002,
  Xe = 1003,
  gd = 1004,
  jr = 1005,
  Qe = 1006,
  Zs = 1007,
  li = 1008,
  Sn = 1009,
  Kc = 1010,
  $c = 1011,
  br = 1012,
  Sa = 1013,
  hi = 1014,
  bn = 1015,
  Ar = 1016,
  ya = 1017,
  Ca = 1018,
  Ki = 1020,
  Zc = 35902,
  Jc = 1021,
  Qc = 1022,
  tn = 1023,
  th = 1024,
  eh = 1025,
  Gi = 1026,
  $i = 1027,
  nh = 1028,
  Ta = 1029,
  ih = 1030,
  Aa = 1031,
  Pa = 1033,
  vs = 33776,
  gs = 33777,
  xs = 33778,
  bs = 33779,
  Ho = 35840,
  Go = 35841,
  Wo = 35842,
  Xo = 35843,
  jo = 36196,
  qo = 37492,
  Yo = 37496,
  Ko = 37808,
  $o = 37809,
  Zo = 37810,
  Jo = 37811,
  Qo = 37812,
  ta = 37813,
  ea = 37814,
  na = 37815,
  ia = 37816,
  ra = 37817,
  sa = 37818,
  oa = 37819,
  aa = 37820,
  la = 37821,
  Ms = 36492,
  ca = 36494,
  ha = 36495,
  rh = 36283,
  ua = 36284,
  da = 36285,
  pa = 36286,
  xd = 3200,
  bd = 3201,
  sh = 0,
  Md = 1,
  kn = '',
  Je = 'srgb',
  qn = 'srgb-linear',
  Ra = 'display-p3',
  Fs = 'display-p3-linear',
  Ts = 'linear',
  Qt = 'srgb',
  As = 'rec709',
  Ps = 'p3',
  bi = 7680,
  wl = 519,
  wd = 512,
  Ed = 513,
  Sd = 514,
  oh = 515,
  yd = 516,
  Cd = 517,
  Td = 518,
  Ad = 519,
  El = 35044,
  Sl = '300 es',
  Mn = 2e3,
  Rs = 2001;
class _i {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[t] === void 0 && (i[t] = []), i[t].indexOf(e) === -1 && i[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const i = this._listeners;
    return i[t] !== void 0 && i[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const r = this._listeners[t];
    if (r !== void 0) {
      const s = r.indexOf(e);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[t.type];
    if (i !== void 0) {
      t.target = this;
      const r = i.slice(0);
      for (let s = 0, o = r.length; s < o; s++) r[s].call(this, t);
      t.target = null;
    }
  }
}
const we = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '0a',
    '0b',
    '0c',
    '0d',
    '0e',
    '0f',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '1a',
    '1b',
    '1c',
    '1d',
    '1e',
    '1f',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '2a',
    '2b',
    '2c',
    '2d',
    '2e',
    '2f',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '3a',
    '3b',
    '3c',
    '3d',
    '3e',
    '3f',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '4a',
    '4b',
    '4c',
    '4d',
    '4e',
    '4f',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '5a',
    '5b',
    '5c',
    '5d',
    '5e',
    '5f',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '6a',
    '6b',
    '6c',
    '6d',
    '6e',
    '6f',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '7a',
    '7b',
    '7c',
    '7d',
    '7e',
    '7f',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '8a',
    '8b',
    '8c',
    '8d',
    '8e',
    '8f',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '9a',
    '9b',
    '9c',
    '9d',
    '9e',
    '9f',
    'a0',
    'a1',
    'a2',
    'a3',
    'a4',
    'a5',
    'a6',
    'a7',
    'a8',
    'a9',
    'aa',
    'ab',
    'ac',
    'ad',
    'ae',
    'af',
    'b0',
    'b1',
    'b2',
    'b3',
    'b4',
    'b5',
    'b6',
    'b7',
    'b8',
    'b9',
    'ba',
    'bb',
    'bc',
    'bd',
    'be',
    'bf',
    'c0',
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
    'c8',
    'c9',
    'ca',
    'cb',
    'cc',
    'cd',
    'ce',
    'cf',
    'd0',
    'd1',
    'd2',
    'd3',
    'd4',
    'd5',
    'd6',
    'd7',
    'd8',
    'd9',
    'da',
    'db',
    'dc',
    'dd',
    'de',
    'df',
    'e0',
    'e1',
    'e2',
    'e3',
    'e4',
    'e5',
    'e6',
    'e7',
    'e8',
    'e9',
    'ea',
    'eb',
    'ec',
    'ed',
    'ee',
    'ef',
    'f0',
    'f1',
    'f2',
    'f3',
    'f4',
    'f5',
    'f6',
    'f7',
    'f8',
    'f9',
    'fa',
    'fb',
    'fc',
    'fd',
    'fe',
    'ff',
  ],
  ws = Math.PI / 180,
  fa = 180 / Math.PI;
function Pr() {
  const n = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    i = (Math.random() * 4294967295) | 0;
  return (
    we[n & 255] +
    we[(n >> 8) & 255] +
    we[(n >> 16) & 255] +
    we[(n >> 24) & 255] +
    '-' +
    we[t & 255] +
    we[(t >> 8) & 255] +
    '-' +
    we[((t >> 16) & 15) | 64] +
    we[(t >> 24) & 255] +
    '-' +
    we[(e & 63) | 128] +
    we[(e >> 8) & 255] +
    '-' +
    we[(e >> 16) & 255] +
    we[(e >> 24) & 255] +
    we[i & 255] +
    we[(i >> 8) & 255] +
    we[(i >> 16) & 255] +
    we[(i >> 24) & 255]
  ).toLowerCase();
}
function ye(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function Pd(n, t) {
  return ((n % t) + t) % t;
}
function Js(n, t, e) {
  return (1 - e) * n + e * t;
}
function ar(n, t) {
  switch (t.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error('Invalid component type.');
  }
}
function Pe(n, t) {
  switch (t.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error('Invalid component type.');
  }
}
const Rd = { DEG2RAD: ws };
class yt {
  constructor(t = 0, e = 0) {
    (yt.prototype.isVector2 = !0), (this.x = t), (this.y = e);
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return (this.x = t), (this.y = e), this;
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error('index is out of range: ' + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error('index is out of range: ' + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), this;
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), this;
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), this;
  }
  addVectors(t, e) {
    return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), this;
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), this;
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), this;
  }
  subVectors(t, e) {
    return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), this;
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), this;
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x,
      i = this.y,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[3] * i + r[6]),
      (this.y = r[1] * e + r[4] * i + r[7]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      this
    );
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(t, Math.min(e, i))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const i = this.dot(t) / e;
    return Math.acos(ye(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      i = this.y - t.y;
    return e * e + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this;
  }
  lerpVectors(t, e, i) {
    return (
      (this.x = t.x + (e.x - t.x) * i), (this.y = t.y + (e.y - t.y) * i), this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), t;
  }
  fromBufferAttribute(t, e) {
    return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
  }
  rotateAround(t, e) {
    const i = Math.cos(e),
      r = Math.sin(e),
      s = this.x - t.x,
      o = this.y - t.y;
    return (this.x = s * i - o * r + t.x), (this.y = s * r + o * i + t.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Dt {
  constructor(t, e, i, r, s, o, a, l, c) {
    (Dt.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, i, r, s, o, a, l, c);
  }
  set(t, e, i, r, s, o, a, l, c) {
    const h = this.elements;
    return (
      (h[0] = t),
      (h[1] = r),
      (h[2] = a),
      (h[3] = e),
      (h[4] = s),
      (h[5] = l),
      (h[6] = i),
      (h[7] = o),
      (h[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements,
      i = t.elements;
    return (
      (e[0] = i[0]),
      (e[1] = i[1]),
      (e[2] = i[2]),
      (e[3] = i[3]),
      (e[4] = i[4]),
      (e[5] = i[5]),
      (e[6] = i[6]),
      (e[7] = i[7]),
      (e[8] = i[8]),
      this
    );
  }
  extractBasis(t, e, i) {
    return (
      t.setFromMatrix3Column(this, 0),
      e.setFromMatrix3Column(this, 1),
      i.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return (
      this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const i = t.elements,
      r = e.elements,
      s = this.elements,
      o = i[0],
      a = i[3],
      l = i[6],
      c = i[1],
      h = i[4],
      d = i[7],
      p = i[2],
      m = i[5],
      g = i[8],
      b = r[0],
      f = r[3],
      u = r[6],
      S = r[1],
      M = r[4],
      y = r[7],
      F = r[2],
      A = r[5],
      T = r[8];
    return (
      (s[0] = o * b + a * S + l * F),
      (s[3] = o * f + a * M + l * A),
      (s[6] = o * u + a * y + l * T),
      (s[1] = c * b + h * S + d * F),
      (s[4] = c * f + h * M + d * A),
      (s[7] = c * u + h * y + d * T),
      (s[2] = p * b + m * S + g * F),
      (s[5] = p * f + m * M + g * A),
      (s[8] = p * u + m * y + g * T),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[3] *= t),
      (e[6] *= t),
      (e[1] *= t),
      (e[4] *= t),
      (e[7] *= t),
      (e[2] *= t),
      (e[5] *= t),
      (e[8] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      i = t[1],
      r = t[2],
      s = t[3],
      o = t[4],
      a = t[5],
      l = t[6],
      c = t[7],
      h = t[8];
    return (
      e * o * h - e * a * c - i * s * h + i * a * l + r * s * c - r * o * l
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      i = t[1],
      r = t[2],
      s = t[3],
      o = t[4],
      a = t[5],
      l = t[6],
      c = t[7],
      h = t[8],
      d = h * o - a * c,
      p = a * l - h * s,
      m = c * s - o * l,
      g = e * d + i * p + r * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / g;
    return (
      (t[0] = d * b),
      (t[1] = (r * c - h * i) * b),
      (t[2] = (a * i - r * o) * b),
      (t[3] = p * b),
      (t[4] = (h * e - r * l) * b),
      (t[5] = (r * s - a * e) * b),
      (t[6] = m * b),
      (t[7] = (i * l - c * e) * b),
      (t[8] = (o * e - i * s) * b),
      this
    );
  }
  transpose() {
    let t;
    const e = this.elements;
    return (
      (t = e[1]),
      (e[1] = e[3]),
      (e[3] = t),
      (t = e[2]),
      (e[2] = e[6]),
      (e[6] = t),
      (t = e[5]),
      (e[5] = e[7]),
      (e[7] = t),
      this
    );
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return (
      (t[0] = e[0]),
      (t[1] = e[3]),
      (t[2] = e[6]),
      (t[3] = e[1]),
      (t[4] = e[4]),
      (t[5] = e[7]),
      (t[6] = e[2]),
      (t[7] = e[5]),
      (t[8] = e[8]),
      this
    );
  }
  setUvTransform(t, e, i, r, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        i * l,
        i * c,
        -i * (l * o + c * a) + o + t,
        -r * c,
        r * l,
        -r * (-c * o + l * a) + a + e,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(t, e) {
    return this.premultiply(Qs.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Qs.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Qs.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return (
      t.isVector2
        ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
        : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
      this
    );
  }
  makeRotation(t) {
    const e = Math.cos(t),
      i = Math.sin(t);
    return this.set(e, -i, 0, i, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements,
      i = t.elements;
    for (let r = 0; r < 9; r++) if (e[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = t[i + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const i = this.elements;
    return (
      (t[e] = i[0]),
      (t[e + 1] = i[1]),
      (t[e + 2] = i[2]),
      (t[e + 3] = i[3]),
      (t[e + 4] = i[4]),
      (t[e + 5] = i[5]),
      (t[e + 6] = i[6]),
      (t[e + 7] = i[7]),
      (t[e + 8] = i[8]),
      t
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Qs = new Dt();
function ah(n) {
  for (let t = n.length - 1; t >= 0; --t) if (n[t] >= 65535) return !0;
  return !1;
}
function Mr(n) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', n);
}
function Ld() {
  const n = Mr('canvas');
  return (n.style.display = 'block'), n;
}
const yl = {};
function xr(n) {
  n in yl || ((yl[n] = !0), console.warn(n));
}
function Dd(n, t, e) {
  return new Promise(function (i, r) {
    function s() {
      switch (n.clientWaitSync(t, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case n.WAIT_FAILED:
          r();
          break;
        case n.TIMEOUT_EXPIRED:
          setTimeout(s, e);
          break;
        default:
          i();
      }
    }
    setTimeout(s, e);
  });
}
const Cl = new Dt().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  ),
  Tl = new Dt().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  ),
  lr = {
    [qn]: {
      transfer: Ts,
      primaries: As,
      luminanceCoefficients: [0.2126, 0.7152, 0.0722],
      toReference: (n) => n,
      fromReference: (n) => n,
    },
    [Je]: {
      transfer: Qt,
      primaries: As,
      luminanceCoefficients: [0.2126, 0.7152, 0.0722],
      toReference: (n) => n.convertSRGBToLinear(),
      fromReference: (n) => n.convertLinearToSRGB(),
    },
    [Fs]: {
      transfer: Ts,
      primaries: Ps,
      luminanceCoefficients: [0.2289, 0.6917, 0.0793],
      toReference: (n) => n.applyMatrix3(Tl),
      fromReference: (n) => n.applyMatrix3(Cl),
    },
    [Ra]: {
      transfer: Qt,
      primaries: Ps,
      luminanceCoefficients: [0.2289, 0.6917, 0.0793],
      toReference: (n) => n.convertSRGBToLinear().applyMatrix3(Tl),
      fromReference: (n) => n.applyMatrix3(Cl).convertLinearToSRGB(),
    },
  },
  Id = new Set([qn, Fs]),
  jt = {
    enabled: !0,
    _workingColorSpace: qn,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(n) {
      if (!Id.has(n))
        throw new Error(`Unsupported working color space, "${n}".`);
      this._workingColorSpace = n;
    },
    convert: function (n, t, e) {
      if (this.enabled === !1 || t === e || !t || !e) return n;
      const i = lr[t].toReference,
        r = lr[e].fromReference;
      return r(i(n));
    },
    fromWorkingColorSpace: function (n, t) {
      return this.convert(n, this._workingColorSpace, t);
    },
    toWorkingColorSpace: function (n, t) {
      return this.convert(n, t, this._workingColorSpace);
    },
    getPrimaries: function (n) {
      return lr[n].primaries;
    },
    getTransfer: function (n) {
      return n === kn ? Ts : lr[n].transfer;
    },
    getLuminanceCoefficients: function (n, t = this._workingColorSpace) {
      return n.fromArray(lr[t].luminanceCoefficients);
    },
  };
function Wi(n) {
  return n < 0.04045
    ? n * 0.0773993808
    : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function to(n) {
  return n < 0.0031308 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let Mi;
class Ud {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > 'u') return t.src;
    let e;
    if (t instanceof HTMLCanvasElement) e = t;
    else {
      Mi === void 0 && (Mi = Mr('canvas')),
        (Mi.width = t.width),
        (Mi.height = t.height);
      const i = Mi.getContext('2d');
      t instanceof ImageData
        ? i.putImageData(t, 0, 0)
        : i.drawImage(t, 0, 0, t.width, t.height),
        (e = Mi);
    }
    return e.width > 2048 || e.height > 2048
      ? (console.warn(
          'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons',
          t
        ),
        e.toDataURL('image/jpeg', 0.6))
      : e.toDataURL('image/png');
  }
  static sRGBToLinear(t) {
    if (
      (typeof HTMLImageElement < 'u' && t instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < 'u' && t instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < 'u' && t instanceof ImageBitmap)
    ) {
      const e = Mr('canvas');
      (e.width = t.width), (e.height = t.height);
      const i = e.getContext('2d');
      i.drawImage(t, 0, 0, t.width, t.height);
      const r = i.getImageData(0, 0, t.width, t.height),
        s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = Wi(s[o] / 255) * 255;
      return i.putImageData(r, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let i = 0; i < e.length; i++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray
          ? (e[i] = Math.floor(Wi(e[i] / 255) * 255))
          : (e[i] = Wi(e[i]));
      return { data: e, width: t.width, height: t.height };
    } else
      return (
        console.warn(
          'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.'
        ),
        t
      );
  }
}
let Nd = 0;
class lh {
  constructor(t = null) {
    (this.isSource = !0),
      Object.defineProperty(this, 'id', { value: Nd++ }),
      (this.uuid = Pr()),
      (this.data = t),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == 'string';
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const i = { uuid: this.uuid, url: '' },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(eo(r[o].image)) : s.push(eo(r[o]));
      } else s = eo(r);
      i.url = s;
    }
    return e || (t.images[this.uuid] = i), i;
  }
}
function eo(n) {
  return (typeof HTMLImageElement < 'u' && n instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && n instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && n instanceof ImageBitmap)
    ? Ud.getDataURL(n)
    : n.data
    ? {
        data: Array.from(n.data),
        width: n.width,
        height: n.height,
        type: n.data.constructor.name,
      }
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let Od = 0;
class Ce extends _i {
  constructor(
    t = Ce.DEFAULT_IMAGE,
    e = Ce.DEFAULT_MAPPING,
    i = ai,
    r = ai,
    s = Qe,
    o = li,
    a = tn,
    l = Sn,
    c = Ce.DEFAULT_ANISOTROPY,
    h = kn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, 'id', { value: Od++ }),
      (this.uuid = Pr()),
      (this.name = ''),
      (this.source = new lh(t)),
      (this.mipmaps = []),
      (this.mapping = e),
      (this.channel = 0),
      (this.wrapS = i),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new yt(0, 0)),
      (this.repeat = new yt(1, 1)),
      (this.center = new yt(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Dt()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = h),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.source = t.source),
      (this.mipmaps = t.mipmaps.slice(0)),
      (this.mapping = t.mapping),
      (this.channel = t.channel),
      (this.wrapS = t.wrapS),
      (this.wrapT = t.wrapT),
      (this.magFilter = t.magFilter),
      (this.minFilter = t.minFilter),
      (this.anisotropy = t.anisotropy),
      (this.format = t.format),
      (this.internalFormat = t.internalFormat),
      (this.type = t.type),
      this.offset.copy(t.offset),
      this.repeat.copy(t.repeat),
      this.center.copy(t.center),
      (this.rotation = t.rotation),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this.matrix.copy(t.matrix),
      (this.generateMipmaps = t.generateMipmaps),
      (this.premultiplyAlpha = t.premultiplyAlpha),
      (this.flipY = t.flipY),
      (this.unpackAlignment = t.unpackAlignment),
      (this.colorSpace = t.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == 'string';
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const i = {
      metadata: { version: 4.6, type: 'Texture', generator: 'Texture.toJSON' },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      e || (t.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  transformUv(t) {
    if (this.mapping !== Yc) return t;
    if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
      switch (this.wrapS) {
        case Vo:
          t.x = t.x - Math.floor(t.x);
          break;
        case ai:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case zo:
          Math.abs(Math.floor(t.x) % 2) === 1
            ? (t.x = Math.ceil(t.x) - t.x)
            : (t.x = t.x - Math.floor(t.x));
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case Vo:
          t.y = t.y - Math.floor(t.y);
          break;
        case ai:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case zo:
          Math.abs(Math.floor(t.y) % 2) === 1
            ? (t.y = Math.ceil(t.y) - t.y)
            : (t.y = t.y - Math.floor(t.y));
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
Ce.DEFAULT_IMAGE = null;
Ce.DEFAULT_MAPPING = Yc;
Ce.DEFAULT_ANISOTROPY = 1;
class te {
  constructor(t = 0, e = 0, i = 0, r = 1) {
    (te.prototype.isVector4 = !0),
      (this.x = t),
      (this.y = e),
      (this.z = i),
      (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, i, r) {
    return (this.x = t), (this.y = e), (this.z = i), (this.w = r), this;
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setZ(t) {
    return (this.z = t), this;
  }
  setW(t) {
    return (this.w = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error('index is out of range: ' + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error('index is out of range: ' + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.z = t.z),
      (this.w = t.w !== void 0 ? t.w : 1),
      this
    );
  }
  add(t) {
    return (
      (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
    );
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      (this.w = t.w + e.w),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      (this.w += t.w * e),
      this
    );
  }
  sub(t) {
    return (
      (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
    );
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      (this.w = t.w - e.w),
      this
    );
  }
  multiply(t) {
    return (
      (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
    );
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
  }
  applyMatrix4(t) {
    const e = this.x,
      i = this.y,
      r = this.z,
      s = this.w,
      o = t.elements;
    return (
      (this.x = o[0] * e + o[4] * i + o[8] * r + o[12] * s),
      (this.y = o[1] * e + o[5] * i + o[9] * r + o[13] * s),
      (this.z = o[2] * e + o[6] * i + o[10] * r + o[14] * s),
      (this.w = o[3] * e + o[7] * i + o[11] * r + o[15] * s),
      this
    );
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return (
      e < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, i, r, s;
    const l = t.elements,
      c = l[0],
      h = l[4],
      d = l[8],
      p = l[1],
      m = l[5],
      g = l[9],
      b = l[2],
      f = l[6],
      u = l[10];
    if (
      Math.abs(h - p) < 0.01 &&
      Math.abs(d - b) < 0.01 &&
      Math.abs(g - f) < 0.01
    ) {
      if (
        Math.abs(h + p) < 0.1 &&
        Math.abs(d + b) < 0.1 &&
        Math.abs(g + f) < 0.1 &&
        Math.abs(c + m + u - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const M = (c + 1) / 2,
        y = (m + 1) / 2,
        F = (u + 1) / 2,
        A = (h + p) / 4,
        T = (d + b) / 4,
        B = (g + f) / 4;
      return (
        M > y && M > F
          ? M < 0.01
            ? ((i = 0), (r = 0.707106781), (s = 0.707106781))
            : ((i = Math.sqrt(M)), (r = A / i), (s = T / i))
          : y > F
          ? y < 0.01
            ? ((i = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(y)), (i = A / r), (s = B / r))
          : F < 0.01
          ? ((i = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(F)), (i = T / s), (r = B / s)),
        this.set(i, r, s, e),
        this
      );
    }
    let S = Math.sqrt(
      (f - g) * (f - g) + (d - b) * (d - b) + (p - h) * (p - h)
    );
    return (
      Math.abs(S) < 0.001 && (S = 1),
      (this.x = (f - g) / S),
      (this.y = (d - b) / S),
      (this.z = (p - h) / S),
      (this.w = Math.acos((c + m + u - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return (
      (this.x = e[12]),
      (this.y = e[13]),
      (this.z = e[14]),
      (this.w = e[15]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      (this.w = Math.min(this.w, t.w)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      (this.w = Math.max(this.w, t.w)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      (this.w = Math.max(t.w, Math.min(e.w, this.w))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      (this.w = Math.max(t, Math.min(e, this.w))),
      this
    );
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(t, Math.min(e, i))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      (this.w += (t.w - this.w) * e),
      this
    );
  }
  lerpVectors(t, e, i) {
    return (
      (this.x = t.x + (e.x - t.x) * i),
      (this.y = t.y + (e.y - t.y) * i),
      (this.z = t.z + (e.z - t.z) * i),
      (this.w = t.w + (e.w - t.w) * i),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return (
      (this.x = t[e]),
      (this.y = t[e + 1]),
      (this.z = t[e + 2]),
      (this.w = t[e + 3]),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this.x),
      (t[e + 1] = this.y),
      (t[e + 2] = this.z),
      (t[e + 3] = this.w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      (this.w = t.getW(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Fd extends _i {
  constructor(t = 1, e = 1, i = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = t),
      (this.height = e),
      (this.depth = 1),
      (this.scissor = new te(0, 0, t, e)),
      (this.scissorTest = !1),
      (this.viewport = new te(0, 0, t, e));
    const r = { width: t, height: e, depth: 1 };
    i = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: Qe,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      i
    );
    const s = new Ce(
      r,
      i.mapping,
      i.wrapS,
      i.wrapT,
      i.magFilter,
      i.minFilter,
      i.format,
      i.type,
      i.anisotropy,
      i.colorSpace
    );
    (s.flipY = !1),
      (s.generateMipmaps = i.generateMipmaps),
      (s.internalFormat = i.internalFormat),
      (this.textures = []);
    const o = i.count;
    for (let a = 0; a < o; a++)
      (this.textures[a] = s.clone()),
        (this.textures[a].isRenderTargetTexture = !0);
    (this.depthBuffer = i.depthBuffer),
      (this.stencilBuffer = i.stencilBuffer),
      (this.resolveDepthBuffer = i.resolveDepthBuffer),
      (this.resolveStencilBuffer = i.resolveStencilBuffer),
      (this.depthTexture = i.depthTexture),
      (this.samples = i.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, i = 1) {
    if (this.width !== t || this.height !== e || this.depth !== i) {
      (this.width = t), (this.height = e), (this.depth = i);
      for (let r = 0, s = this.textures.length; r < s; r++)
        (this.textures[r].image.width = t),
          (this.textures[r].image.height = e),
          (this.textures[r].image.depth = i);
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.width = t.width),
      (this.height = t.height),
      (this.depth = t.depth),
      this.scissor.copy(t.scissor),
      (this.scissorTest = t.scissorTest),
      this.viewport.copy(t.viewport),
      (this.textures.length = 0);
    for (let i = 0, r = t.textures.length; i < r; i++)
      (this.textures[i] = t.textures[i].clone()),
        (this.textures[i].isRenderTargetTexture = !0);
    const e = Object.assign({}, t.texture.image);
    return (
      (this.texture.source = new lh(e)),
      (this.depthBuffer = t.depthBuffer),
      (this.stencilBuffer = t.stencilBuffer),
      (this.resolveDepthBuffer = t.resolveDepthBuffer),
      (this.resolveStencilBuffer = t.resolveStencilBuffer),
      t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()),
      (this.samples = t.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
class ui extends Fd {
  constructor(t = 1, e = 1, i = {}) {
    super(t, e, i), (this.isWebGLRenderTarget = !0);
  }
}
class ch extends Ce {
  constructor(t = null, e = 1, i = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: t, width: e, height: i, depth: r }),
      (this.magFilter = Xe),
      (this.minFilter = Xe),
      (this.wrapR = ai),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Bd extends Ce {
  constructor(t = null, e = 1, i = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: t, width: e, height: i, depth: r }),
      (this.magFilter = Xe),
      (this.minFilter = Xe),
      (this.wrapR = ai),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class di {
  constructor(t = 0, e = 0, i = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = t),
      (this._y = e),
      (this._z = i),
      (this._w = r);
  }
  static slerpFlat(t, e, i, r, s, o, a) {
    let l = i[r + 0],
      c = i[r + 1],
      h = i[r + 2],
      d = i[r + 3];
    const p = s[o + 0],
      m = s[o + 1],
      g = s[o + 2],
      b = s[o + 3];
    if (a === 0) {
      (t[e + 0] = l), (t[e + 1] = c), (t[e + 2] = h), (t[e + 3] = d);
      return;
    }
    if (a === 1) {
      (t[e + 0] = p), (t[e + 1] = m), (t[e + 2] = g), (t[e + 3] = b);
      return;
    }
    if (d !== b || l !== p || c !== m || h !== g) {
      let f = 1 - a;
      const u = l * p + c * m + h * g + d * b,
        S = u >= 0 ? 1 : -1,
        M = 1 - u * u;
      if (M > Number.EPSILON) {
        const F = Math.sqrt(M),
          A = Math.atan2(F, u * S);
        (f = Math.sin(f * A) / F), (a = Math.sin(a * A) / F);
      }
      const y = a * S;
      if (
        ((l = l * f + p * y),
        (c = c * f + m * y),
        (h = h * f + g * y),
        (d = d * f + b * y),
        f === 1 - a)
      ) {
        const F = 1 / Math.sqrt(l * l + c * c + h * h + d * d);
        (l *= F), (c *= F), (h *= F), (d *= F);
      }
    }
    (t[e] = l), (t[e + 1] = c), (t[e + 2] = h), (t[e + 3] = d);
  }
  static multiplyQuaternionsFlat(t, e, i, r, s, o) {
    const a = i[r],
      l = i[r + 1],
      c = i[r + 2],
      h = i[r + 3],
      d = s[o],
      p = s[o + 1],
      m = s[o + 2],
      g = s[o + 3];
    return (
      (t[e] = a * g + h * d + l * m - c * p),
      (t[e + 1] = l * g + h * p + c * d - a * m),
      (t[e + 2] = c * g + h * m + a * p - l * d),
      (t[e + 3] = h * g - a * d - l * p - c * m),
      t
    );
  }
  get x() {
    return this._x;
  }
  set x(t) {
    (this._x = t), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    (this._y = t), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    (this._z = t), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    (this._w = t), this._onChangeCallback();
  }
  set(t, e, i, r) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = i),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return (
      (this._x = t.x),
      (this._y = t.y),
      (this._z = t.z),
      (this._w = t.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(t, e = !0) {
    const i = t._x,
      r = t._y,
      s = t._z,
      o = t._order,
      a = Math.cos,
      l = Math.sin,
      c = a(i / 2),
      h = a(r / 2),
      d = a(s / 2),
      p = l(i / 2),
      m = l(r / 2),
      g = l(s / 2);
    switch (o) {
      case 'XYZ':
        (this._x = p * h * d + c * m * g),
          (this._y = c * m * d - p * h * g),
          (this._z = c * h * g + p * m * d),
          (this._w = c * h * d - p * m * g);
        break;
      case 'YXZ':
        (this._x = p * h * d + c * m * g),
          (this._y = c * m * d - p * h * g),
          (this._z = c * h * g - p * m * d),
          (this._w = c * h * d + p * m * g);
        break;
      case 'ZXY':
        (this._x = p * h * d - c * m * g),
          (this._y = c * m * d + p * h * g),
          (this._z = c * h * g + p * m * d),
          (this._w = c * h * d - p * m * g);
        break;
      case 'ZYX':
        (this._x = p * h * d - c * m * g),
          (this._y = c * m * d + p * h * g),
          (this._z = c * h * g - p * m * d),
          (this._w = c * h * d + p * m * g);
        break;
      case 'YZX':
        (this._x = p * h * d + c * m * g),
          (this._y = c * m * d + p * h * g),
          (this._z = c * h * g - p * m * d),
          (this._w = c * h * d - p * m * g);
        break;
      case 'XZY':
        (this._x = p * h * d - c * m * g),
          (this._y = c * m * d - p * h * g),
          (this._z = c * h * g + p * m * d),
          (this._w = c * h * d + p * m * g);
        break;
      default:
        console.warn(
          'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + o
        );
    }
    return e === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const i = e / 2,
      r = Math.sin(i);
    return (
      (this._x = t.x * r),
      (this._y = t.y * r),
      (this._z = t.z * r),
      (this._w = Math.cos(i)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t) {
    const e = t.elements,
      i = e[0],
      r = e[4],
      s = e[8],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[2],
      h = e[6],
      d = e[10],
      p = i + a + d;
    if (p > 0) {
      const m = 0.5 / Math.sqrt(p + 1);
      (this._w = 0.25 / m),
        (this._x = (h - l) * m),
        (this._y = (s - c) * m),
        (this._z = (o - r) * m);
    } else if (i > a && i > d) {
      const m = 2 * Math.sqrt(1 + i - a - d);
      (this._w = (h - l) / m),
        (this._x = 0.25 * m),
        (this._y = (r + o) / m),
        (this._z = (s + c) / m);
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - i - d);
      (this._w = (s - c) / m),
        (this._x = (r + o) / m),
        (this._y = 0.25 * m),
        (this._z = (l + h) / m);
    } else {
      const m = 2 * Math.sqrt(1 + d - i - a);
      (this._w = (o - r) / m),
        (this._x = (s + c) / m),
        (this._y = (l + h) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let i = t.dot(e) + 1;
    return (
      i < Number.EPSILON
        ? ((i = 0),
          Math.abs(t.x) > Math.abs(t.z)
            ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = i))
            : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = i)))
        : ((this._x = t.y * e.z - t.z * e.y),
          (this._y = t.z * e.x - t.x * e.z),
          (this._z = t.x * e.y - t.y * e.x),
          (this._w = i)),
      this.normalize()
    );
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(ye(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const i = this.angleTo(t);
    if (i === 0) return this;
    const r = Math.min(1, e / i);
    return this.slerp(t, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let t = this.length();
    return (
      t === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((t = 1 / t),
          (this._x = this._x * t),
          (this._y = this._y * t),
          (this._z = this._z * t),
          (this._w = this._w * t)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const i = t._x,
      r = t._y,
      s = t._z,
      o = t._w,
      a = e._x,
      l = e._y,
      c = e._z,
      h = e._w;
    return (
      (this._x = i * h + o * a + r * c - s * l),
      (this._y = r * h + o * l + s * a - i * c),
      (this._z = s * h + o * c + i * l - r * a),
      (this._w = o * h - i * a - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const i = this._x,
      r = this._y,
      s = this._z,
      o = this._w;
    let a = o * t._w + i * t._x + r * t._y + s * t._z;
    if (
      (a < 0
        ? ((this._w = -t._w),
          (this._x = -t._x),
          (this._y = -t._y),
          (this._z = -t._z),
          (a = -a))
        : this.copy(t),
      a >= 1)
    )
      return (this._w = o), (this._x = i), (this._y = r), (this._z = s), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - e;
      return (
        (this._w = m * o + e * this._w),
        (this._x = m * i + e * this._x),
        (this._y = m * r + e * this._y),
        (this._z = m * s + e * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      h = Math.atan2(c, a),
      d = Math.sin((1 - e) * h) / c,
      p = Math.sin(e * h) / c;
    return (
      (this._w = o * d + this._w * p),
      (this._x = i * d + this._x * p),
      (this._y = r * d + this._y * p),
      (this._z = s * d + this._z * p),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(t, e, i) {
    return this.copy(t).slerp(e, i);
  }
  random() {
    const t = 2 * Math.PI * Math.random(),
      e = 2 * Math.PI * Math.random(),
      i = Math.random(),
      r = Math.sqrt(1 - i),
      s = Math.sqrt(i);
    return this.set(
      r * Math.sin(t),
      r * Math.cos(t),
      s * Math.sin(e),
      s * Math.cos(e)
    );
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._w === this._w
    );
  }
  fromArray(t, e = 0) {
    return (
      (this._x = t[e]),
      (this._y = t[e + 1]),
      (this._z = t[e + 2]),
      (this._w = t[e + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this._x = t.getX(e)),
      (this._y = t.getY(e)),
      (this._z = t.getZ(e)),
      (this._w = t.getW(e)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class I {
  constructor(t = 0, e = 0, i = 0) {
    (I.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = i);
  }
  set(t, e, i) {
    return (
      i === void 0 && (i = this.z),
      (this.x = t),
      (this.y = e),
      (this.z = i),
      this
    );
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setZ(t) {
    return (this.z = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error('index is out of range: ' + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error('index is out of range: ' + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), this;
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
    );
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this;
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), this;
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
    );
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), this;
  }
  multiplyVectors(t, e) {
    return (
      (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
    );
  }
  applyEuler(t) {
    return this.applyQuaternion(Al.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Al.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x,
      i = this.y,
      r = this.z,
      s = t.elements;
    return (
      (this.x = s[0] * e + s[3] * i + s[6] * r),
      (this.y = s[1] * e + s[4] * i + s[7] * r),
      (this.z = s[2] * e + s[5] * i + s[8] * r),
      this
    );
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x,
      i = this.y,
      r = this.z,
      s = t.elements,
      o = 1 / (s[3] * e + s[7] * i + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * e + s[4] * i + s[8] * r + s[12]) * o),
      (this.y = (s[1] * e + s[5] * i + s[9] * r + s[13]) * o),
      (this.z = (s[2] * e + s[6] * i + s[10] * r + s[14]) * o),
      this
    );
  }
  applyQuaternion(t) {
    const e = this.x,
      i = this.y,
      r = this.z,
      s = t.x,
      o = t.y,
      a = t.z,
      l = t.w,
      c = 2 * (o * r - a * i),
      h = 2 * (a * e - s * r),
      d = 2 * (s * i - o * e);
    return (
      (this.x = e + l * c + o * d - a * h),
      (this.y = i + l * h + a * c - s * d),
      (this.z = r + l * d + s * h - o * c),
      this
    );
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
      t.projectionMatrix
    );
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
      t.matrixWorld
    );
  }
  transformDirection(t) {
    const e = this.x,
      i = this.y,
      r = this.z,
      s = t.elements;
    return (
      (this.x = s[0] * e + s[4] * i + s[8] * r),
      (this.y = s[1] * e + s[5] * i + s[9] * r),
      (this.z = s[2] * e + s[6] * i + s[10] * r),
      this.normalize()
    );
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      this
    );
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(
      Math.max(t, Math.min(e, i))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      this
    );
  }
  lerpVectors(t, e, i) {
    return (
      (this.x = t.x + (e.x - t.x) * i),
      (this.y = t.y + (e.y - t.y) * i),
      (this.z = t.z + (e.z - t.z) * i),
      this
    );
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const i = t.x,
      r = t.y,
      s = t.z,
      o = e.x,
      a = e.y,
      l = e.z;
    return (
      (this.x = r * l - s * a),
      (this.y = s * o - i * l),
      (this.z = i * a - r * o),
      this
    );
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const i = t.dot(this) / e;
    return this.copy(t).multiplyScalar(i);
  }
  projectOnPlane(t) {
    return no.copy(this).projectOnVector(t), this.sub(no);
  }
  reflect(t) {
    return this.sub(no.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const i = this.dot(t) / e;
    return Math.acos(ye(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      i = this.y - t.y,
      r = this.z - t.z;
    return e * e + i * i + r * r;
  }
  manhattanDistanceTo(t) {
    return (
      Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    );
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, i) {
    const r = Math.sin(e) * t;
    return (
      (this.x = r * Math.sin(i)),
      (this.y = Math.cos(e) * t),
      (this.z = r * Math.cos(i)),
      this
    );
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, i) {
    return (
      (this.x = t * Math.sin(e)), (this.y = i), (this.z = t * Math.cos(e)), this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(),
      i = this.setFromMatrixColumn(t, 1).length(),
      r = this.setFromMatrixColumn(t, 2).length();
    return (this.x = e), (this.y = i), (this.z = r), this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
  }
  setFromColor(t) {
    return (this.x = t.r), (this.y = t.g), (this.z = t.b), this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2,
      e = Math.random() * 2 - 1,
      i = Math.sqrt(1 - e * e);
    return (
      (this.x = i * Math.cos(t)), (this.y = e), (this.z = i * Math.sin(t)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const no = new I(),
  Al = new di();
class Rr {
  constructor(
    t = new I(1 / 0, 1 / 0, 1 / 0),
    e = new I(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = t), (this.max = e);
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, i = t.length; e < i; e += 3)
      this.expandByPoint(Ke.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, i = t.count; e < i; e++)
      this.expandByPoint(Ke.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const i = Ke.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(i), this.max.copy(t).add(i), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(t) {
    return this.isEmpty()
      ? t.set(0, 0, 0)
      : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const i = t.geometry;
    if (i !== void 0) {
      const s = i.getAttribute('position');
      if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0)
        for (let o = 0, a = s.count; o < a; o++)
          t.isMesh === !0
            ? t.getVertexPosition(o, Ke)
            : Ke.fromBufferAttribute(s, o),
            Ke.applyMatrix4(t.matrixWorld),
            this.expandByPoint(Ke);
      else
        t.boundingBox !== void 0
          ? (t.boundingBox === null && t.computeBoundingBox(),
            qr.copy(t.boundingBox))
          : (i.boundingBox === null && i.computeBoundingBox(),
            qr.copy(i.boundingBox)),
          qr.applyMatrix4(t.matrixWorld),
          this.union(qr);
    }
    const r = t.children;
    for (let s = 0, o = r.length; s < o; s++) this.expandByObject(r[s], e);
    return this;
  }
  containsPoint(t) {
    return (
      t.x >= this.min.x &&
      t.x <= this.max.x &&
      t.y >= this.min.y &&
      t.y <= this.max.y &&
      t.z >= this.min.z &&
      t.z <= this.max.z
    );
  }
  containsBox(t) {
    return (
      this.min.x <= t.min.x &&
      t.max.x <= this.max.x &&
      this.min.y <= t.min.y &&
      t.max.y <= this.max.y &&
      this.min.z <= t.min.z &&
      t.max.z <= this.max.z
    );
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return (
      t.max.x >= this.min.x &&
      t.min.x <= this.max.x &&
      t.max.y >= this.min.y &&
      t.min.y <= this.max.y &&
      t.max.z >= this.min.z &&
      t.min.z <= this.max.z
    );
  }
  intersectsSphere(t) {
    return (
      this.clampPoint(t.center, Ke),
      Ke.distanceToSquared(t.center) <= t.radius * t.radius
    );
  }
  intersectsPlane(t) {
    let e, i;
    return (
      t.normal.x > 0
        ? ((e = t.normal.x * this.min.x), (i = t.normal.x * this.max.x))
        : ((e = t.normal.x * this.max.x), (i = t.normal.x * this.min.x)),
      t.normal.y > 0
        ? ((e += t.normal.y * this.min.y), (i += t.normal.y * this.max.y))
        : ((e += t.normal.y * this.max.y), (i += t.normal.y * this.min.y)),
      t.normal.z > 0
        ? ((e += t.normal.z * this.min.z), (i += t.normal.z * this.max.z))
        : ((e += t.normal.z * this.max.z), (i += t.normal.z * this.min.z)),
      e <= -t.constant && i >= -t.constant
    );
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return !1;
    this.getCenter(cr),
      Yr.subVectors(this.max, cr),
      wi.subVectors(t.a, cr),
      Ei.subVectors(t.b, cr),
      Si.subVectors(t.c, cr),
      Pn.subVectors(Ei, wi),
      Rn.subVectors(Si, Ei),
      $n.subVectors(wi, Si);
    let e = [
      0,
      -Pn.z,
      Pn.y,
      0,
      -Rn.z,
      Rn.y,
      0,
      -$n.z,
      $n.y,
      Pn.z,
      0,
      -Pn.x,
      Rn.z,
      0,
      -Rn.x,
      $n.z,
      0,
      -$n.x,
      -Pn.y,
      Pn.x,
      0,
      -Rn.y,
      Rn.x,
      0,
      -$n.y,
      $n.x,
      0,
    ];
    return !io(e, wi, Ei, Si, Yr) ||
      ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !io(e, wi, Ei, Si, Yr))
      ? !1
      : (Kr.crossVectors(Pn, Rn),
        (e = [Kr.x, Kr.y, Kr.z]),
        io(e, wi, Ei, Si, Yr));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Ke).distanceTo(t);
  }
  getBoundingSphere(t) {
    return (
      this.isEmpty()
        ? t.makeEmpty()
        : (this.getCenter(t.center),
          (t.radius = this.getSize(Ke).length() * 0.5)),
      t
    );
  }
  intersect(t) {
    return (
      this.min.max(t.min),
      this.max.min(t.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty()
      ? this
      : (dn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        dn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        dn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        dn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        dn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        dn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        dn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        dn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(dn),
        this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const dn = [
    new I(),
    new I(),
    new I(),
    new I(),
    new I(),
    new I(),
    new I(),
    new I(),
  ],
  Ke = new I(),
  qr = new Rr(),
  wi = new I(),
  Ei = new I(),
  Si = new I(),
  Pn = new I(),
  Rn = new I(),
  $n = new I(),
  cr = new I(),
  Yr = new I(),
  Kr = new I(),
  Zn = new I();
function io(n, t, e, i, r) {
  for (let s = 0, o = n.length - 3; s <= o; s += 3) {
    Zn.fromArray(n, s);
    const a =
        r.x * Math.abs(Zn.x) + r.y * Math.abs(Zn.y) + r.z * Math.abs(Zn.z),
      l = t.dot(Zn),
      c = e.dot(Zn),
      h = i.dot(Zn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return !1;
  }
  return !0;
}
const kd = new Rr(),
  hr = new I(),
  ro = new I();
class La {
  constructor(t = new I(), e = -1) {
    (this.isSphere = !0), (this.center = t), (this.radius = e);
  }
  set(t, e) {
    return this.center.copy(t), (this.radius = e), this;
  }
  setFromPoints(t, e) {
    const i = this.center;
    e !== void 0 ? i.copy(e) : kd.setFromPoints(t).getCenter(i);
    let r = 0;
    for (let s = 0, o = t.length; s < o; s++)
      r = Math.max(r, i.distanceToSquared(t[s]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(t) {
    return this.center.copy(t.center), (this.radius = t.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const i = this.center.distanceToSquared(t);
    return (
      e.copy(t),
      i > this.radius * this.radius &&
        (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
      e
    );
  }
  getBoundingBox(t) {
    return this.isEmpty()
      ? (t.makeEmpty(), t)
      : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return (
      this.center.applyMatrix4(t),
      (this.radius = this.radius * t.getMaxScaleOnAxis()),
      this
    );
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), (this.radius = 0), this;
    hr.subVectors(t, this.center);
    const e = hr.lengthSq();
    if (e > this.radius * this.radius) {
      const i = Math.sqrt(e),
        r = (i - this.radius) * 0.5;
      this.center.addScaledVector(hr, r / i), (this.radius += r);
    }
    return this;
  }
  union(t) {
    return t.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(t), this)
      : (this.center.equals(t.center) === !0
          ? (this.radius = Math.max(this.radius, t.radius))
          : (ro.subVectors(t.center, this.center).setLength(t.radius),
            this.expandByPoint(hr.copy(t.center).add(ro)),
            this.expandByPoint(hr.copy(t.center).sub(ro))),
        this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const pn = new I(),
  so = new I(),
  $r = new I(),
  Ln = new I(),
  oo = new I(),
  Zr = new I(),
  ao = new I();
class hh {
  constructor(t = new I(), e = new I(0, 0, -1)) {
    (this.origin = t), (this.direction = e);
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, pn)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const i = e.dot(this.direction);
    return i < 0
      ? e.copy(this.origin)
      : e.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = pn.subVectors(t, this.origin).dot(this.direction);
    return e < 0
      ? this.origin.distanceToSquared(t)
      : (pn.copy(this.origin).addScaledVector(this.direction, e),
        pn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, i, r) {
    so.copy(t).add(e).multiplyScalar(0.5),
      $r.copy(e).sub(t).normalize(),
      Ln.copy(this.origin).sub(so);
    const s = t.distanceTo(e) * 0.5,
      o = -this.direction.dot($r),
      a = Ln.dot(this.direction),
      l = -Ln.dot($r),
      c = Ln.lengthSq(),
      h = Math.abs(1 - o * o);
    let d, p, m, g;
    if (h > 0)
      if (((d = o * l - a), (p = o * a - l), (g = s * h), d >= 0))
        if (p >= -g)
          if (p <= g) {
            const b = 1 / h;
            (d *= b),
              (p *= b),
              (m = d * (d + o * p + 2 * a) + p * (o * d + p + 2 * l) + c);
          } else
            (p = s),
              (d = Math.max(0, -(o * p + a))),
              (m = -d * d + p * (p + 2 * l) + c);
        else
          (p = -s),
            (d = Math.max(0, -(o * p + a))),
            (m = -d * d + p * (p + 2 * l) + c);
      else
        p <= -g
          ? ((d = Math.max(0, -(-o * s + a))),
            (p = d > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (m = -d * d + p * (p + 2 * l) + c))
          : p <= g
          ? ((d = 0),
            (p = Math.min(Math.max(-s, -l), s)),
            (m = p * (p + 2 * l) + c))
          : ((d = Math.max(0, -(o * s + a))),
            (p = d > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (m = -d * d + p * (p + 2 * l) + c));
    else
      (p = o > 0 ? -s : s),
        (d = Math.max(0, -(o * p + a))),
        (m = -d * d + p * (p + 2 * l) + c);
    return (
      i && i.copy(this.origin).addScaledVector(this.direction, d),
      r && r.copy(so).addScaledVector($r, p),
      m
    );
  }
  intersectSphere(t, e) {
    pn.subVectors(t.center, this.origin);
    const i = pn.dot(this.direction),
      r = pn.dot(pn) - i * i,
      s = t.radius * t.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r),
      a = i - o,
      l = i + o;
    return l < 0 ? null : a < 0 ? this.at(l, e) : this.at(a, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(t.normal) + t.constant) / e;
    return i >= 0 ? i : null;
  }
  intersectPlane(t, e) {
    const i = this.distanceToPlane(t);
    return i === null ? null : this.at(i, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let i, r, s, o, a, l;
    const c = 1 / this.direction.x,
      h = 1 / this.direction.y,
      d = 1 / this.direction.z,
      p = this.origin;
    return (
      c >= 0
        ? ((i = (t.min.x - p.x) * c), (r = (t.max.x - p.x) * c))
        : ((i = (t.max.x - p.x) * c), (r = (t.min.x - p.x) * c)),
      h >= 0
        ? ((s = (t.min.y - p.y) * h), (o = (t.max.y - p.y) * h))
        : ((s = (t.max.y - p.y) * h), (o = (t.min.y - p.y) * h)),
      i > o ||
      s > r ||
      ((s > i || isNaN(i)) && (i = s),
      (o < r || isNaN(r)) && (r = o),
      d >= 0
        ? ((a = (t.min.z - p.z) * d), (l = (t.max.z - p.z) * d))
        : ((a = (t.max.z - p.z) * d), (l = (t.min.z - p.z) * d)),
      i > l || a > r) ||
      ((a > i || i !== i) && (i = a), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(i >= 0 ? i : r, e)
    );
  }
  intersectsBox(t) {
    return this.intersectBox(t, pn) !== null;
  }
  intersectTriangle(t, e, i, r, s) {
    oo.subVectors(e, t), Zr.subVectors(i, t), ao.crossVectors(oo, Zr);
    let o = this.direction.dot(ao),
      a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    Ln.subVectors(this.origin, t);
    const l = a * this.direction.dot(Zr.crossVectors(Ln, Zr));
    if (l < 0) return null;
    const c = a * this.direction.dot(oo.cross(Ln));
    if (c < 0 || l + c > o) return null;
    const h = -a * Ln.dot(ao);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(t) {
    return (
      this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    );
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class le {
  constructor(t, e, i, r, s, o, a, l, c, h, d, p, m, g, b, f) {
    (le.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, i, r, s, o, a, l, c, h, d, p, m, g, b, f);
  }
  set(t, e, i, r, s, o, a, l, c, h, d, p, m, g, b, f) {
    const u = this.elements;
    return (
      (u[0] = t),
      (u[4] = e),
      (u[8] = i),
      (u[12] = r),
      (u[1] = s),
      (u[5] = o),
      (u[9] = a),
      (u[13] = l),
      (u[2] = c),
      (u[6] = h),
      (u[10] = d),
      (u[14] = p),
      (u[3] = m),
      (u[7] = g),
      (u[11] = b),
      (u[15] = f),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new le().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements,
      i = t.elements;
    return (
      (e[0] = i[0]),
      (e[1] = i[1]),
      (e[2] = i[2]),
      (e[3] = i[3]),
      (e[4] = i[4]),
      (e[5] = i[5]),
      (e[6] = i[6]),
      (e[7] = i[7]),
      (e[8] = i[8]),
      (e[9] = i[9]),
      (e[10] = i[10]),
      (e[11] = i[11]),
      (e[12] = i[12]),
      (e[13] = i[13]),
      (e[14] = i[14]),
      (e[15] = i[15]),
      this
    );
  }
  copyPosition(t) {
    const e = this.elements,
      i = t.elements;
    return (e[12] = i[12]), (e[13] = i[13]), (e[14] = i[14]), this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return (
      this.set(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(t, e, i) {
    return (
      t.setFromMatrixColumn(this, 0),
      e.setFromMatrixColumn(this, 1),
      i.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(t, e, i) {
    return (
      this.set(
        t.x,
        e.x,
        i.x,
        0,
        t.y,
        e.y,
        i.y,
        0,
        t.z,
        e.z,
        i.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(t) {
    const e = this.elements,
      i = t.elements,
      r = 1 / yi.setFromMatrixColumn(t, 0).length(),
      s = 1 / yi.setFromMatrixColumn(t, 1).length(),
      o = 1 / yi.setFromMatrixColumn(t, 2).length();
    return (
      (e[0] = i[0] * r),
      (e[1] = i[1] * r),
      (e[2] = i[2] * r),
      (e[3] = 0),
      (e[4] = i[4] * s),
      (e[5] = i[5] * s),
      (e[6] = i[6] * s),
      (e[7] = 0),
      (e[8] = i[8] * o),
      (e[9] = i[9] * o),
      (e[10] = i[10] * o),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromEuler(t) {
    const e = this.elements,
      i = t.x,
      r = t.y,
      s = t.z,
      o = Math.cos(i),
      a = Math.sin(i),
      l = Math.cos(r),
      c = Math.sin(r),
      h = Math.cos(s),
      d = Math.sin(s);
    if (t.order === 'XYZ') {
      const p = o * h,
        m = o * d,
        g = a * h,
        b = a * d;
      (e[0] = l * h),
        (e[4] = -l * d),
        (e[8] = c),
        (e[1] = m + g * c),
        (e[5] = p - b * c),
        (e[9] = -a * l),
        (e[2] = b - p * c),
        (e[6] = g + m * c),
        (e[10] = o * l);
    } else if (t.order === 'YXZ') {
      const p = l * h,
        m = l * d,
        g = c * h,
        b = c * d;
      (e[0] = p + b * a),
        (e[4] = g * a - m),
        (e[8] = o * c),
        (e[1] = o * d),
        (e[5] = o * h),
        (e[9] = -a),
        (e[2] = m * a - g),
        (e[6] = b + p * a),
        (e[10] = o * l);
    } else if (t.order === 'ZXY') {
      const p = l * h,
        m = l * d,
        g = c * h,
        b = c * d;
      (e[0] = p - b * a),
        (e[4] = -o * d),
        (e[8] = g + m * a),
        (e[1] = m + g * a),
        (e[5] = o * h),
        (e[9] = b - p * a),
        (e[2] = -o * c),
        (e[6] = a),
        (e[10] = o * l);
    } else if (t.order === 'ZYX') {
      const p = o * h,
        m = o * d,
        g = a * h,
        b = a * d;
      (e[0] = l * h),
        (e[4] = g * c - m),
        (e[8] = p * c + b),
        (e[1] = l * d),
        (e[5] = b * c + p),
        (e[9] = m * c - g),
        (e[2] = -c),
        (e[6] = a * l),
        (e[10] = o * l);
    } else if (t.order === 'YZX') {
      const p = o * l,
        m = o * c,
        g = a * l,
        b = a * c;
      (e[0] = l * h),
        (e[4] = b - p * d),
        (e[8] = g * d + m),
        (e[1] = d),
        (e[5] = o * h),
        (e[9] = -a * h),
        (e[2] = -c * h),
        (e[6] = m * d + g),
        (e[10] = p - b * d);
    } else if (t.order === 'XZY') {
      const p = o * l,
        m = o * c,
        g = a * l,
        b = a * c;
      (e[0] = l * h),
        (e[4] = -d),
        (e[8] = c * h),
        (e[1] = p * d + b),
        (e[5] = o * h),
        (e[9] = m * d - g),
        (e[2] = g * d - m),
        (e[6] = a * h),
        (e[10] = b * d + p);
    }
    return (
      (e[3] = 0),
      (e[7] = 0),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Vd, t, zd);
  }
  lookAt(t, e, i) {
    const r = this.elements;
    return (
      Fe.subVectors(t, e),
      Fe.lengthSq() === 0 && (Fe.z = 1),
      Fe.normalize(),
      Dn.crossVectors(i, Fe),
      Dn.lengthSq() === 0 &&
        (Math.abs(i.z) === 1 ? (Fe.x += 1e-4) : (Fe.z += 1e-4),
        Fe.normalize(),
        Dn.crossVectors(i, Fe)),
      Dn.normalize(),
      Jr.crossVectors(Fe, Dn),
      (r[0] = Dn.x),
      (r[4] = Jr.x),
      (r[8] = Fe.x),
      (r[1] = Dn.y),
      (r[5] = Jr.y),
      (r[9] = Fe.y),
      (r[2] = Dn.z),
      (r[6] = Jr.z),
      (r[10] = Fe.z),
      this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const i = t.elements,
      r = e.elements,
      s = this.elements,
      o = i[0],
      a = i[4],
      l = i[8],
      c = i[12],
      h = i[1],
      d = i[5],
      p = i[9],
      m = i[13],
      g = i[2],
      b = i[6],
      f = i[10],
      u = i[14],
      S = i[3],
      M = i[7],
      y = i[11],
      F = i[15],
      A = r[0],
      T = r[4],
      B = r[8],
      w = r[12],
      x = r[1],
      P = r[5],
      H = r[9],
      k = r[13],
      Y = r[2],
      q = r[6],
      G = r[10],
      $ = r[14],
      V = r[3],
      ot = r[7],
      ht = r[11],
      mt = r[15];
    return (
      (s[0] = o * A + a * x + l * Y + c * V),
      (s[4] = o * T + a * P + l * q + c * ot),
      (s[8] = o * B + a * H + l * G + c * ht),
      (s[12] = o * w + a * k + l * $ + c * mt),
      (s[1] = h * A + d * x + p * Y + m * V),
      (s[5] = h * T + d * P + p * q + m * ot),
      (s[9] = h * B + d * H + p * G + m * ht),
      (s[13] = h * w + d * k + p * $ + m * mt),
      (s[2] = g * A + b * x + f * Y + u * V),
      (s[6] = g * T + b * P + f * q + u * ot),
      (s[10] = g * B + b * H + f * G + u * ht),
      (s[14] = g * w + b * k + f * $ + u * mt),
      (s[3] = S * A + M * x + y * Y + F * V),
      (s[7] = S * T + M * P + y * q + F * ot),
      (s[11] = S * B + M * H + y * G + F * ht),
      (s[15] = S * w + M * k + y * $ + F * mt),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[4] *= t),
      (e[8] *= t),
      (e[12] *= t),
      (e[1] *= t),
      (e[5] *= t),
      (e[9] *= t),
      (e[13] *= t),
      (e[2] *= t),
      (e[6] *= t),
      (e[10] *= t),
      (e[14] *= t),
      (e[3] *= t),
      (e[7] *= t),
      (e[11] *= t),
      (e[15] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      i = t[4],
      r = t[8],
      s = t[12],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[13],
      h = t[2],
      d = t[6],
      p = t[10],
      m = t[14],
      g = t[3],
      b = t[7],
      f = t[11],
      u = t[15];
    return (
      g *
        (+s * l * d -
          r * c * d -
          s * a * p +
          i * c * p +
          r * a * m -
          i * l * m) +
      b *
        (+e * l * m -
          e * c * p +
          s * o * p -
          r * o * m +
          r * c * h -
          s * l * h) +
      f *
        (+e * c * d -
          e * a * m -
          s * o * d +
          i * o * m +
          s * a * h -
          i * c * h) +
      u *
        (-r * a * h - e * l * d + e * a * p + r * o * d - i * o * p + i * l * h)
    );
  }
  transpose() {
    const t = this.elements;
    let e;
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    );
  }
  setPosition(t, e, i) {
    const r = this.elements;
    return (
      t.isVector3
        ? ((r[12] = t.x), (r[13] = t.y), (r[14] = t.z))
        : ((r[12] = t), (r[13] = e), (r[14] = i)),
      this
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      i = t[1],
      r = t[2],
      s = t[3],
      o = t[4],
      a = t[5],
      l = t[6],
      c = t[7],
      h = t[8],
      d = t[9],
      p = t[10],
      m = t[11],
      g = t[12],
      b = t[13],
      f = t[14],
      u = t[15],
      S = d * f * c - b * p * c + b * l * m - a * f * m - d * l * u + a * p * u,
      M = g * p * c - h * f * c - g * l * m + o * f * m + h * l * u - o * p * u,
      y = h * b * c - g * d * c + g * a * m - o * b * m - h * a * u + o * d * u,
      F = g * d * l - h * b * l - g * a * p + o * b * p + h * a * f - o * d * f,
      A = e * S + i * M + r * y + s * F;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const T = 1 / A;
    return (
      (t[0] = S * T),
      (t[1] =
        (b * p * s -
          d * f * s -
          b * r * m +
          i * f * m +
          d * r * u -
          i * p * u) *
        T),
      (t[2] =
        (a * f * s -
          b * l * s +
          b * r * c -
          i * f * c -
          a * r * u +
          i * l * u) *
        T),
      (t[3] =
        (d * l * s -
          a * p * s -
          d * r * c +
          i * p * c +
          a * r * m -
          i * l * m) *
        T),
      (t[4] = M * T),
      (t[5] =
        (h * f * s -
          g * p * s +
          g * r * m -
          e * f * m -
          h * r * u +
          e * p * u) *
        T),
      (t[6] =
        (g * l * s -
          o * f * s -
          g * r * c +
          e * f * c +
          o * r * u -
          e * l * u) *
        T),
      (t[7] =
        (o * p * s -
          h * l * s +
          h * r * c -
          e * p * c -
          o * r * m +
          e * l * m) *
        T),
      (t[8] = y * T),
      (t[9] =
        (g * d * s -
          h * b * s -
          g * i * m +
          e * b * m +
          h * i * u -
          e * d * u) *
        T),
      (t[10] =
        (o * b * s -
          g * a * s +
          g * i * c -
          e * b * c -
          o * i * u +
          e * a * u) *
        T),
      (t[11] =
        (h * a * s -
          o * d * s -
          h * i * c +
          e * d * c +
          o * i * m -
          e * a * m) *
        T),
      (t[12] = F * T),
      (t[13] =
        (h * b * r -
          g * d * r +
          g * i * p -
          e * b * p -
          h * i * f +
          e * d * f) *
        T),
      (t[14] =
        (g * a * r -
          o * b * r -
          g * i * l +
          e * b * l +
          o * i * f -
          e * a * f) *
        T),
      (t[15] =
        (o * d * r -
          h * a * r +
          h * i * l -
          e * d * l -
          o * i * p +
          e * a * p) *
        T),
      this
    );
  }
  scale(t) {
    const e = this.elements,
      i = t.x,
      r = t.y,
      s = t.z;
    return (
      (e[0] *= i),
      (e[4] *= r),
      (e[8] *= s),
      (e[1] *= i),
      (e[5] *= r),
      (e[9] *= s),
      (e[2] *= i),
      (e[6] *= r),
      (e[10] *= s),
      (e[3] *= i),
      (e[7] *= r),
      (e[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const t = this.elements,
      e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
      i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
      r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, i, r));
  }
  makeTranslation(t, e, i) {
    return (
      t.isVector3
        ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(t) {
    const e = Math.cos(t),
      i = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t),
      i = Math.sin(t);
    return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t),
      i = Math.sin(t);
    return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const i = Math.cos(e),
      r = Math.sin(e),
      s = 1 - i,
      o = t.x,
      a = t.y,
      l = t.z,
      c = s * o,
      h = s * a;
    return (
      this.set(
        c * o + i,
        c * a - r * l,
        c * l + r * a,
        0,
        c * a + r * l,
        h * a + i,
        h * l - r * o,
        0,
        c * l - r * a,
        h * l + r * o,
        s * l * l + i,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(t, e, i) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, i, r, s, o) {
    return this.set(1, i, s, 0, t, 1, o, 0, e, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, i) {
    const r = this.elements,
      s = e._x,
      o = e._y,
      a = e._z,
      l = e._w,
      c = s + s,
      h = o + o,
      d = a + a,
      p = s * c,
      m = s * h,
      g = s * d,
      b = o * h,
      f = o * d,
      u = a * d,
      S = l * c,
      M = l * h,
      y = l * d,
      F = i.x,
      A = i.y,
      T = i.z;
    return (
      (r[0] = (1 - (b + u)) * F),
      (r[1] = (m + y) * F),
      (r[2] = (g - M) * F),
      (r[3] = 0),
      (r[4] = (m - y) * A),
      (r[5] = (1 - (p + u)) * A),
      (r[6] = (f + S) * A),
      (r[7] = 0),
      (r[8] = (g + M) * T),
      (r[9] = (f - S) * T),
      (r[10] = (1 - (p + b)) * T),
      (r[11] = 0),
      (r[12] = t.x),
      (r[13] = t.y),
      (r[14] = t.z),
      (r[15] = 1),
      this
    );
  }
  decompose(t, e, i) {
    const r = this.elements;
    let s = yi.set(r[0], r[1], r[2]).length();
    const o = yi.set(r[4], r[5], r[6]).length(),
      a = yi.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s),
      (t.x = r[12]),
      (t.y = r[13]),
      (t.z = r[14]),
      $e.copy(this);
    const c = 1 / s,
      h = 1 / o,
      d = 1 / a;
    return (
      ($e.elements[0] *= c),
      ($e.elements[1] *= c),
      ($e.elements[2] *= c),
      ($e.elements[4] *= h),
      ($e.elements[5] *= h),
      ($e.elements[6] *= h),
      ($e.elements[8] *= d),
      ($e.elements[9] *= d),
      ($e.elements[10] *= d),
      e.setFromRotationMatrix($e),
      (i.x = s),
      (i.y = o),
      (i.z = a),
      this
    );
  }
  makePerspective(t, e, i, r, s, o, a = Mn) {
    const l = this.elements,
      c = (2 * s) / (e - t),
      h = (2 * s) / (i - r),
      d = (e + t) / (e - t),
      p = (i + r) / (i - r);
    let m, g;
    if (a === Mn) (m = -(o + s) / (o - s)), (g = (-2 * o * s) / (o - s));
    else if (a === Rs) (m = -o / (o - s)), (g = (-o * s) / (o - s));
    else
      throw new Error(
        'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + a
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = d),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = h),
      (l[9] = p),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = m),
      (l[14] = g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(t, e, i, r, s, o, a = Mn) {
    const l = this.elements,
      c = 1 / (e - t),
      h = 1 / (i - r),
      d = 1 / (o - s),
      p = (e + t) * c,
      m = (i + r) * h;
    let g, b;
    if (a === Mn) (g = (o + s) * d), (b = -2 * d);
    else if (a === Rs) (g = s * d), (b = -1 * d);
    else
      throw new Error(
        'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + a
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -p),
      (l[1] = 0),
      (l[5] = 2 * h),
      (l[9] = 0),
      (l[13] = -m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = b),
      (l[14] = -g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(t) {
    const e = this.elements,
      i = t.elements;
    for (let r = 0; r < 16; r++) if (e[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = t[i + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const i = this.elements;
    return (
      (t[e] = i[0]),
      (t[e + 1] = i[1]),
      (t[e + 2] = i[2]),
      (t[e + 3] = i[3]),
      (t[e + 4] = i[4]),
      (t[e + 5] = i[5]),
      (t[e + 6] = i[6]),
      (t[e + 7] = i[7]),
      (t[e + 8] = i[8]),
      (t[e + 9] = i[9]),
      (t[e + 10] = i[10]),
      (t[e + 11] = i[11]),
      (t[e + 12] = i[12]),
      (t[e + 13] = i[13]),
      (t[e + 14] = i[14]),
      (t[e + 15] = i[15]),
      t
    );
  }
}
const yi = new I(),
  $e = new le(),
  Vd = new I(0, 0, 0),
  zd = new I(1, 1, 1),
  Dn = new I(),
  Jr = new I(),
  Fe = new I(),
  Pl = new le(),
  Rl = new di();
class ln {
  constructor(t = 0, e = 0, i = 0, r = ln.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = t),
      (this._y = e),
      (this._z = i),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(t) {
    (this._x = t), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    (this._y = t), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    (this._z = t), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    (this._order = t), this._onChangeCallback();
  }
  set(t, e, i, r = this._order) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = i),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return (
      (this._x = t._x),
      (this._y = t._y),
      (this._z = t._z),
      (this._order = t._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t, e = this._order, i = !0) {
    const r = t.elements,
      s = r[0],
      o = r[4],
      a = r[8],
      l = r[1],
      c = r[5],
      h = r[9],
      d = r[2],
      p = r[6],
      m = r[10];
    switch (e) {
      case 'XYZ':
        (this._y = Math.asin(ye(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-h, m)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(p, c)), (this._z = 0));
        break;
      case 'YXZ':
        (this._x = Math.asin(-ye(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-d, s)), (this._z = 0));
        break;
      case 'ZXY':
        (this._x = Math.asin(ye(p, -1, 1))),
          Math.abs(p) < 0.9999999
            ? ((this._y = Math.atan2(-d, m)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case 'ZYX':
        (this._y = Math.asin(-ye(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(p, m)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case 'YZX':
        (this._z = Math.asin(ye(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-h, c)), (this._y = Math.atan2(-d, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, m)));
        break;
      case 'XZY':
        (this._z = Math.asin(-ye(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(p, c)), (this._y = Math.atan2(a, s)))
            : ((this._x = Math.atan2(-h, m)), (this._y = 0));
        break;
      default:
        console.warn(
          'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' +
            e
        );
    }
    return (this._order = e), i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, i) {
    return (
      Pl.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Pl, e, i)
    );
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Rl.setFromEuler(this), this.setFromQuaternion(Rl, t);
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._order === this._order
    );
  }
  fromArray(t) {
    return (
      (this._x = t[0]),
      (this._y = t[1]),
      (this._z = t[2]),
      t[3] !== void 0 && (this._order = t[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._order),
      t
    );
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ln.DEFAULT_ORDER = 'XYZ';
class uh {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = ((1 << t) | 0) >>> 0;
  }
  enable(t) {
    this.mask |= (1 << t) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= (1 << t) | 0;
  }
  disable(t) {
    this.mask &= ~((1 << t) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & ((1 << t) | 0)) !== 0;
  }
}
let Hd = 0;
const Ll = new I(),
  Ci = new di(),
  fn = new le(),
  Qr = new I(),
  ur = new I(),
  Gd = new I(),
  Wd = new di(),
  Dl = new I(1, 0, 0),
  Il = new I(0, 1, 0),
  Ul = new I(0, 0, 1),
  Nl = { type: 'added' },
  Xd = { type: 'removed' },
  Ti = { type: 'childadded', child: null },
  lo = { type: 'childremoved', child: null };
class Ie extends _i {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, 'id', { value: Hd++ }),
      (this.uuid = Pr()),
      (this.name = ''),
      (this.type = 'Object3D'),
      (this.parent = null),
      (this.children = []),
      (this.up = Ie.DEFAULT_UP.clone());
    const t = new I(),
      e = new ln(),
      i = new di(),
      r = new I(1, 1, 1);
    function s() {
      i.setFromEuler(e, !1);
    }
    function o() {
      e.setFromQuaternion(i, void 0, !1);
    }
    e._onChange(s),
      i._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: t },
        rotation: { configurable: !0, enumerable: !0, value: e },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new le() },
        normalMatrix: { value: new Dt() },
      }),
      (this.matrix = new le()),
      (this.matrixWorld = new le()),
      (this.matrixAutoUpdate = Ie.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new uh()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(t),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Ci.setFromAxisAngle(t, e), this.quaternion.multiply(Ci), this;
  }
  rotateOnWorldAxis(t, e) {
    return Ci.setFromAxisAngle(t, e), this.quaternion.premultiply(Ci), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Dl, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Il, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Ul, t);
  }
  translateOnAxis(t, e) {
    return (
      Ll.copy(t).applyQuaternion(this.quaternion),
      this.position.add(Ll.multiplyScalar(e)),
      this
    );
  }
  translateX(t) {
    return this.translateOnAxis(Dl, t);
  }
  translateY(t) {
    return this.translateOnAxis(Il, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Ul, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.applyMatrix4(fn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(t, e, i) {
    t.isVector3 ? Qr.copy(t) : Qr.set(t, e, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      ur.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? fn.lookAt(ur, Qr, this.up)
        : fn.lookAt(Qr, ur, this.up),
      this.quaternion.setFromRotationMatrix(fn),
      r &&
        (fn.extractRotation(r.matrixWorld),
        Ci.setFromRotationMatrix(fn),
        this.quaternion.premultiply(Ci.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          t
        ),
        this)
      : (t && t.isObject3D
          ? (t.removeFromParent(),
            (t.parent = this),
            this.children.push(t),
            t.dispatchEvent(Nl),
            (Ti.child = t),
            this.dispatchEvent(Ti),
            (Ti.child = null))
          : console.error(
              'THREE.Object3D.add: object not an instance of THREE.Object3D.',
              t
            ),
        this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const e = this.children.indexOf(t);
    return (
      e !== -1 &&
        ((t.parent = null),
        this.children.splice(e, 1),
        t.dispatchEvent(Xd),
        (lo.child = t),
        this.dispatchEvent(lo),
        (lo.child = null)),
      this
    );
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      fn.copy(this.matrixWorld).invert(),
      t.parent !== null &&
        (t.parent.updateWorldMatrix(!0, !1), fn.multiply(t.parent.matrixWorld)),
      t.applyMatrix4(fn),
      t.removeFromParent(),
      (t.parent = this),
      this.children.push(t),
      t.updateWorldMatrix(!1, !0),
      t.dispatchEvent(Nl),
      (Ti.child = t),
      this.dispatchEvent(Ti),
      (Ti.child = null),
      this
    );
  }
  getObjectById(t) {
    return this.getObjectByProperty('id', t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty('name', t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let i = 0, r = this.children.length; i < r; i++) {
      const o = this.children[i].getObjectByProperty(t, e);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(t, e, i = []) {
    this[t] === e && i.push(this);
    const r = this.children;
    for (let s = 0, o = r.length; s < o; s++)
      r[s].getObjectsByProperty(t, e, i);
    return i;
  }
  getWorldPosition(t) {
    return (
      this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ur, t, Gd), t
    );
  }
  getWorldScale(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ur, Wd, t), t
    );
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {}
  traverse(t) {
    t(this);
    const e = this.children;
    for (let i = 0, r = e.length; i < r; i++) e[i].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let i = 0, r = e.length; i < r; i++) e[i].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || t) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (t = !0));
    const e = this.children;
    for (let i = 0, r = e.length; i < r; i++) e[i].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const i = this.parent;
    if (
      (t === !0 && i !== null && i.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      e === !0)
    ) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == 'string',
      i = {};
    e &&
      ((t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (i.metadata = {
        version: 4.6,
        type: 'Object',
        generator: 'Object3D.toJSON',
      }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== '' && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = 'InstancedMesh'),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = 'BatchedMesh'),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.visibility = this._visibility),
        (r.active = this._active),
        (r.bounds = this._bounds.map((a) => ({
          boxInitialized: a.boxInitialized,
          boxMin: a.box.min.toArray(),
          boxMax: a.box.max.toArray(),
          sphereInitialized: a.sphereInitialized,
          sphereRadius: a.sphere.radius,
          sphereCenter: a.sphere.center.toArray(),
        }))),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.geometryCount = this._geometryCount),
        (r.matricesTexture = this._matricesTexture.toJSON(t)),
        this._colorsTexture !== null &&
          (r.colorsTexture = this._colorsTexture.toJSON(t)),
        this.boundingSphere !== null &&
          (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (r.boundingBox = {
            min: r.boundingBox.min.toArray(),
            max: r.boundingBox.max.toArray(),
          }));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(t).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const d = l[c];
            s(t.shapes, d);
          }
        else s(t.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(t.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(t.materials, this.material[l]));
        r.material = a;
      } else r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(t.animations, l));
      }
    }
    if (e) {
      const a = o(t.geometries),
        l = o(t.materials),
        c = o(t.textures),
        h = o(t.images),
        d = o(t.shapes),
        p = o(t.skeletons),
        m = o(t.animations),
        g = o(t.nodes);
      a.length > 0 && (i.geometries = a),
        l.length > 0 && (i.materials = l),
        c.length > 0 && (i.textures = c),
        h.length > 0 && (i.images = h),
        d.length > 0 && (i.shapes = d),
        p.length > 0 && (i.skeletons = p),
        m.length > 0 && (i.animations = m),
        g.length > 0 && (i.nodes = g);
    }
    return (i.object = r), i;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (
      ((this.name = t.name),
      this.up.copy(t.up),
      this.position.copy(t.position),
      (this.rotation.order = t.rotation.order),
      this.quaternion.copy(t.quaternion),
      this.scale.copy(t.scale),
      this.matrix.copy(t.matrix),
      this.matrixWorld.copy(t.matrixWorld),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
      (this.layers.mask = t.layers.mask),
      (this.visible = t.visible),
      (this.castShadow = t.castShadow),
      (this.receiveShadow = t.receiveShadow),
      (this.frustumCulled = t.frustumCulled),
      (this.renderOrder = t.renderOrder),
      (this.animations = t.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      e === !0)
    )
      for (let i = 0; i < t.children.length; i++) {
        const r = t.children[i];
        this.add(r.clone());
      }
    return this;
  }
}
Ie.DEFAULT_UP = new I(0, 1, 0);
Ie.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ze = new I(),
  mn = new I(),
  co = new I(),
  _n = new I(),
  Ai = new I(),
  Pi = new I(),
  Ol = new I(),
  ho = new I(),
  uo = new I(),
  po = new I();
class rn {
  constructor(t = new I(), e = new I(), i = new I()) {
    (this.a = t), (this.b = e), (this.c = i);
  }
  static getNormal(t, e, i, r) {
    r.subVectors(i, e), Ze.subVectors(t, e), r.cross(Ze);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(t, e, i, r, s) {
    Ze.subVectors(r, e), mn.subVectors(i, e), co.subVectors(t, e);
    const o = Ze.dot(Ze),
      a = Ze.dot(mn),
      l = Ze.dot(co),
      c = mn.dot(mn),
      h = mn.dot(co),
      d = o * c - a * a;
    if (d === 0) return s.set(0, 0, 0), null;
    const p = 1 / d,
      m = (c * l - a * h) * p,
      g = (o * h - a * l) * p;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(t, e, i, r) {
    return this.getBarycoord(t, e, i, r, _n) === null
      ? !1
      : _n.x >= 0 && _n.y >= 0 && _n.x + _n.y <= 1;
  }
  static getInterpolation(t, e, i, r, s, o, a, l) {
    return this.getBarycoord(t, e, i, r, _n) === null
      ? ((l.x = 0),
        (l.y = 0),
        'z' in l && (l.z = 0),
        'w' in l && (l.w = 0),
        null)
      : (l.setScalar(0),
        l.addScaledVector(s, _n.x),
        l.addScaledVector(o, _n.y),
        l.addScaledVector(a, _n.z),
        l);
  }
  static isFrontFacing(t, e, i, r) {
    return Ze.subVectors(i, e), mn.subVectors(t, e), Ze.cross(mn).dot(r) < 0;
  }
  set(t, e, i) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(i), this;
  }
  setFromPointsAndIndices(t, e, i, r) {
    return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[r]), this;
  }
  setFromAttributeAndIndices(t, e, i, r) {
    return (
      this.a.fromBufferAttribute(t, e),
      this.b.fromBufferAttribute(t, i),
      this.c.fromBufferAttribute(t, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return (
      Ze.subVectors(this.c, this.b),
      mn.subVectors(this.a, this.b),
      Ze.cross(mn).length() * 0.5
    );
  }
  getMidpoint(t) {
    return t
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return rn.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return rn.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, i, r, s) {
    return rn.getInterpolation(t, this.a, this.b, this.c, e, i, r, s);
  }
  containsPoint(t) {
    return rn.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return rn.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const i = this.a,
      r = this.b,
      s = this.c;
    let o, a;
    Ai.subVectors(r, i), Pi.subVectors(s, i), ho.subVectors(t, i);
    const l = Ai.dot(ho),
      c = Pi.dot(ho);
    if (l <= 0 && c <= 0) return e.copy(i);
    uo.subVectors(t, r);
    const h = Ai.dot(uo),
      d = Pi.dot(uo);
    if (h >= 0 && d <= h) return e.copy(r);
    const p = l * d - h * c;
    if (p <= 0 && l >= 0 && h <= 0)
      return (o = l / (l - h)), e.copy(i).addScaledVector(Ai, o);
    po.subVectors(t, s);
    const m = Ai.dot(po),
      g = Pi.dot(po);
    if (g >= 0 && m <= g) return e.copy(s);
    const b = m * c - l * g;
    if (b <= 0 && c >= 0 && g <= 0)
      return (a = c / (c - g)), e.copy(i).addScaledVector(Pi, a);
    const f = h * g - m * d;
    if (f <= 0 && d - h >= 0 && m - g >= 0)
      return (
        Ol.subVectors(s, r),
        (a = (d - h) / (d - h + (m - g))),
        e.copy(r).addScaledVector(Ol, a)
      );
    const u = 1 / (f + b + p);
    return (
      (o = b * u),
      (a = p * u),
      e.copy(i).addScaledVector(Ai, o).addScaledVector(Pi, a)
    );
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const dh = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  In = { h: 0, s: 0, l: 0 },
  ts = { h: 0, s: 0, l: 0 };
function fo(n, t, e) {
  return (
    e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6
      ? n + (t - n) * 6 * e
      : e < 1 / 2
      ? t
      : e < 2 / 3
      ? n + (t - n) * 6 * (2 / 3 - e)
      : n
  );
}
class zt {
  constructor(t, e, i) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(t, e, i)
    );
  }
  set(t, e, i) {
    if (e === void 0 && i === void 0) {
      const r = t;
      r && r.isColor
        ? this.copy(r)
        : typeof r == 'number'
        ? this.setHex(r)
        : typeof r == 'string' && this.setStyle(r);
    } else this.setRGB(t, e, i);
    return this;
  }
  setScalar(t) {
    return (this.r = t), (this.g = t), (this.b = t), this;
  }
  setHex(t, e = Je) {
    return (
      (t = Math.floor(t)),
      (this.r = ((t >> 16) & 255) / 255),
      (this.g = ((t >> 8) & 255) / 255),
      (this.b = (t & 255) / 255),
      jt.toWorkingColorSpace(this, e),
      this
    );
  }
  setRGB(t, e, i, r = jt.workingColorSpace) {
    return (
      (this.r = t),
      (this.g = e),
      (this.b = i),
      jt.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(t, e, i, r = jt.workingColorSpace) {
    if (((t = Pd(t, 1)), (e = ye(e, 0, 1)), (i = ye(i, 0, 1)), e === 0))
      this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + e) : i + e - i * e,
        o = 2 * i - s;
      (this.r = fo(o, s, t + 1 / 3)),
        (this.g = fo(o, s, t)),
        (this.b = fo(o, s, t - 1 / 3));
    }
    return jt.toWorkingColorSpace(this, r), this;
  }
  setStyle(t, e = Je) {
    function i(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          'THREE.Color: Alpha component of ' + t + ' will be ignored.'
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(t))) {
      let s;
      const o = r[1],
        a = r[2];
      switch (o) {
        case 'rgb':
        case 'rgba':
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              i(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                e
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              i(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                e
              )
            );
          break;
        case 'hsl':
        case 'hsla':
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              i(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                e
              )
            );
          break;
        default:
          console.warn('THREE.Color: Unknown color model ' + t);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(t))) {
      const s = r[1],
        o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          e
        );
      if (o === 6) return this.setHex(parseInt(s, 16), e);
      console.warn('THREE.Color: Invalid hex color ' + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Je) {
    const i = dh[t.toLowerCase()];
    return (
      i !== void 0
        ? this.setHex(i, e)
        : console.warn('THREE.Color: Unknown color ' + t),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
  }
  copySRGBToLinear(t) {
    return (this.r = Wi(t.r)), (this.g = Wi(t.g)), (this.b = Wi(t.b)), this;
  }
  copyLinearToSRGB(t) {
    return (this.r = to(t.r)), (this.g = to(t.g)), (this.b = to(t.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Je) {
    return (
      jt.fromWorkingColorSpace(Ee.copy(this), t),
      Math.round(ye(Ee.r * 255, 0, 255)) * 65536 +
        Math.round(ye(Ee.g * 255, 0, 255)) * 256 +
        Math.round(ye(Ee.b * 255, 0, 255))
    );
  }
  getHexString(t = Je) {
    return ('000000' + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = jt.workingColorSpace) {
    jt.fromWorkingColorSpace(Ee.copy(this), e);
    const i = Ee.r,
      r = Ee.g,
      s = Ee.b,
      o = Math.max(i, r, s),
      a = Math.min(i, r, s);
    let l, c;
    const h = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const d = o - a;
      switch (((c = h <= 0.5 ? d / (o + a) : d / (2 - o - a)), o)) {
        case i:
          l = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - i) / d + 2;
          break;
        case s:
          l = (i - r) / d + 4;
          break;
      }
      l /= 6;
    }
    return (t.h = l), (t.s = c), (t.l = h), t;
  }
  getRGB(t, e = jt.workingColorSpace) {
    return (
      jt.fromWorkingColorSpace(Ee.copy(this), e),
      (t.r = Ee.r),
      (t.g = Ee.g),
      (t.b = Ee.b),
      t
    );
  }
  getStyle(t = Je) {
    jt.fromWorkingColorSpace(Ee.copy(this), t);
    const e = Ee.r,
      i = Ee.g,
      r = Ee.b;
    return t !== Je
      ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(
          r * 255
        )})`;
  }
  offsetHSL(t, e, i) {
    return this.getHSL(In), this.setHSL(In.h + t, In.s + e, In.l + i);
  }
  add(t) {
    return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
  }
  addColors(t, e) {
    return (
      (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
    );
  }
  addScalar(t) {
    return (this.r += t), (this.g += t), (this.b += t), this;
  }
  sub(t) {
    return (
      (this.r = Math.max(0, this.r - t.r)),
      (this.g = Math.max(0, this.g - t.g)),
      (this.b = Math.max(0, this.b - t.b)),
      this
    );
  }
  multiply(t) {
    return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
  }
  multiplyScalar(t) {
    return (this.r *= t), (this.g *= t), (this.b *= t), this;
  }
  lerp(t, e) {
    return (
      (this.r += (t.r - this.r) * e),
      (this.g += (t.g - this.g) * e),
      (this.b += (t.b - this.b) * e),
      this
    );
  }
  lerpColors(t, e, i) {
    return (
      (this.r = t.r + (e.r - t.r) * i),
      (this.g = t.g + (e.g - t.g) * i),
      (this.b = t.b + (e.b - t.b) * i),
      this
    );
  }
  lerpHSL(t, e) {
    this.getHSL(In), t.getHSL(ts);
    const i = Js(In.h, ts.h, e),
      r = Js(In.s, ts.s, e),
      s = Js(In.l, ts.l, e);
    return this.setHSL(i, r, s), this;
  }
  setFromVector3(t) {
    return (this.r = t.x), (this.g = t.y), (this.b = t.z), this;
  }
  applyMatrix3(t) {
    const e = this.r,
      i = this.g,
      r = this.b,
      s = t.elements;
    return (
      (this.r = s[0] * e + s[3] * i + s[6] * r),
      (this.g = s[1] * e + s[4] * i + s[7] * r),
      (this.b = s[2] * e + s[5] * i + s[8] * r),
      this
    );
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
  }
  fromBufferAttribute(t, e) {
    return (
      (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ee = new zt();
zt.NAMES = dh;
let jd = 0;
class Lr extends _i {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, 'id', { value: jd++ }),
      (this.uuid = Pr()),
      (this.name = ''),
      (this.type = 'Material'),
      (this.blending = Hi),
      (this.side = Wn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Oo),
      (this.blendDst = Fo),
      (this.blendEquation = si),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new zt(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = Cs),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = wl),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = bi),
      (this.stencilZFail = bi),
      (this.stencilZPass = bi),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const i = t[e];
        if (i === void 0) {
          console.warn(
            `THREE.Material: parameter '${e}' has value of undefined.`
          );
          continue;
        }
        const r = this[e];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${e}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        r && r.isColor
          ? r.set(i)
          : r && r.isVector3 && i && i.isVector3
          ? r.copy(i)
          : (this[e] = i);
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == 'string';
    e && (t = { textures: {}, images: {} });
    const i = {
      metadata: {
        version: 4.6,
        type: 'Material',
        generator: 'Material.toJSON',
      },
    };
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== '' && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      this.roughness !== void 0 && (i.roughness = this.roughness),
      this.metalness !== void 0 && (i.metalness = this.metalness),
      this.sheen !== void 0 && (i.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (i.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (i.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (i.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (i.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (i.shininess = this.shininess),
      this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (i.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
        (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (i.dispersion = this.dispersion),
      this.iridescence !== void 0 && (i.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (i.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (i.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(t).uuid),
      this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (i.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
      this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (i.matcap = this.matcap.toJSON(t).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (i.alphaMap = this.alphaMap.toJSON(t).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((i.lightMap = this.lightMap.toJSON(t).uuid),
        (i.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((i.aoMap = this.aoMap.toJSON(t).uuid),
        (i.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((i.bumpMap = this.bumpMap.toJSON(t).uuid),
        (i.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((i.normalMap = this.normalMap.toJSON(t).uuid),
        (i.normalMapType = this.normalMapType),
        (i.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((i.displacementMap = this.displacementMap.toJSON(t).uuid),
        (i.displacementScale = this.displacementScale),
        (i.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (i.roughnessMap = this.roughnessMap.toJSON(t).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (i.metalnessMap = this.metalnessMap.toJSON(t).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (i.emissiveMap = this.emissiveMap.toJSON(t).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (i.specularMap = this.specularMap.toJSON(t).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (i.specularColorMap = this.specularColorMap.toJSON(t).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((i.envMap = this.envMap.toJSON(t).uuid),
        this.combine !== void 0 && (i.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (i.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (i.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(t).uuid),
      this.transmission !== void 0 && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(t).uuid),
      this.thickness !== void 0 && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(t).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (i.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (i.size = this.size),
      this.shadowSide !== null && (i.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (i.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Hi && (i.blending = this.blending),
      this.side !== Wn && (i.side = this.side),
      this.vertexColors === !0 && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      this.transparent === !0 && (i.transparent = !0),
      this.blendSrc !== Oo && (i.blendSrc = this.blendSrc),
      this.blendDst !== Fo && (i.blendDst = this.blendDst),
      this.blendEquation !== si && (i.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (i.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (i.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha),
      this.depthFunc !== Cs && (i.depthFunc = this.depthFunc),
      this.depthTest === !1 && (i.depthTest = this.depthTest),
      this.depthWrite === !1 && (i.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (i.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (i.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== wl && (i.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (i.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (i.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== bi && (i.stencilFail = this.stencilFail),
      this.stencilZFail !== bi && (i.stencilZFail = this.stencilZFail),
      this.stencilZPass !== bi && (i.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (i.rotation = this.rotation),
      this.polygonOffset === !0 && (i.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (i.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (i.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (i.linewidth = this.linewidth),
      this.dashSize !== void 0 && (i.dashSize = this.dashSize),
      this.gapSize !== void 0 && (i.gapSize = this.gapSize),
      this.scale !== void 0 && (i.scale = this.scale),
      this.dithering === !0 && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (i.alphaHash = !0),
      this.alphaToCoverage === !0 && (i.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (i.forceSinglePass = !0),
      this.wireframe === !0 && (i.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (i.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== 'round' &&
        (i.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== 'round' &&
        (i.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (i.flatShading = !0),
      this.visible === !1 && (i.visible = !1),
      this.toneMapped === !1 && (i.toneMapped = !1),
      this.fog === !1 && (i.fog = !1),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (e) {
      const s = r(t.textures),
        o = r(t.images);
      s.length > 0 && (i.textures = s), o.length > 0 && (i.images = o);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.name = t.name),
      (this.blending = t.blending),
      (this.side = t.side),
      (this.vertexColors = t.vertexColors),
      (this.opacity = t.opacity),
      (this.transparent = t.transparent),
      (this.blendSrc = t.blendSrc),
      (this.blendDst = t.blendDst),
      (this.blendEquation = t.blendEquation),
      (this.blendSrcAlpha = t.blendSrcAlpha),
      (this.blendDstAlpha = t.blendDstAlpha),
      (this.blendEquationAlpha = t.blendEquationAlpha),
      this.blendColor.copy(t.blendColor),
      (this.blendAlpha = t.blendAlpha),
      (this.depthFunc = t.depthFunc),
      (this.depthTest = t.depthTest),
      (this.depthWrite = t.depthWrite),
      (this.stencilWriteMask = t.stencilWriteMask),
      (this.stencilFunc = t.stencilFunc),
      (this.stencilRef = t.stencilRef),
      (this.stencilFuncMask = t.stencilFuncMask),
      (this.stencilFail = t.stencilFail),
      (this.stencilZFail = t.stencilZFail),
      (this.stencilZPass = t.stencilZPass),
      (this.stencilWrite = t.stencilWrite);
    const e = t.clippingPlanes;
    let i = null;
    if (e !== null) {
      const r = e.length;
      i = new Array(r);
      for (let s = 0; s !== r; ++s) i[s] = e[s].clone();
    }
    return (
      (this.clippingPlanes = i),
      (this.clipIntersection = t.clipIntersection),
      (this.clipShadows = t.clipShadows),
      (this.shadowSide = t.shadowSide),
      (this.colorWrite = t.colorWrite),
      (this.precision = t.precision),
      (this.polygonOffset = t.polygonOffset),
      (this.polygonOffsetFactor = t.polygonOffsetFactor),
      (this.polygonOffsetUnits = t.polygonOffsetUnits),
      (this.dithering = t.dithering),
      (this.alphaTest = t.alphaTest),
      (this.alphaHash = t.alphaHash),
      (this.alphaToCoverage = t.alphaToCoverage),
      (this.premultipliedAlpha = t.premultipliedAlpha),
      (this.forceSinglePass = t.forceSinglePass),
      (this.visible = t.visible),
      (this.toneMapped = t.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  onBuild() {
    console.warn('Material: onBuild() has been removed.');
  }
}
class Da extends Lr {
  constructor(t) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = 'MeshBasicMaterial'),
      (this.color = new zt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new ln()),
      (this.combine = qc),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.fog = t.fog),
      this
    );
  }
}
const pe = new I(),
  es = new yt();
class on {
  constructor(t, e, i = !1) {
    if (Array.isArray(t))
      throw new TypeError(
        'THREE.BufferAttribute: array should be a Typed Array.'
      );
    (this.isBufferAttribute = !0),
      (this.name = ''),
      (this.array = t),
      (this.itemSize = e),
      (this.count = t !== void 0 ? t.length / e : 0),
      (this.normalized = i),
      (this.usage = El),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = bn),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  get updateRange() {
    return (
      xr(
        'THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.'
      ),
      this._updateRange
    );
  }
  setUsage(t) {
    return (this.usage = t), this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.array = new t.array.constructor(t.array)),
      (this.itemSize = t.itemSize),
      (this.count = t.count),
      (this.normalized = t.normalized),
      (this.usage = t.usage),
      (this.gpuType = t.gpuType),
      this
    );
  }
  copyAt(t, e, i) {
    (t *= this.itemSize), (i *= e.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[t + r] = e.array[i + r];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, i = this.count; e < i; e++)
        es.fromBufferAttribute(this, e),
          es.applyMatrix3(t),
          this.setXY(e, es.x, es.y);
    else if (this.itemSize === 3)
      for (let e = 0, i = this.count; e < i; e++)
        pe.fromBufferAttribute(this, e),
          pe.applyMatrix3(t),
          this.setXYZ(e, pe.x, pe.y, pe.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, i = this.count; e < i; e++)
      pe.fromBufferAttribute(this, e),
        pe.applyMatrix4(t),
        this.setXYZ(e, pe.x, pe.y, pe.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, i = this.count; e < i; e++)
      pe.fromBufferAttribute(this, e),
        pe.applyNormalMatrix(t),
        this.setXYZ(e, pe.x, pe.y, pe.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, i = this.count; e < i; e++)
      pe.fromBufferAttribute(this, e),
        pe.transformDirection(t),
        this.setXYZ(e, pe.x, pe.y, pe.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let i = this.array[t * this.itemSize + e];
    return this.normalized && (i = ar(i, this.array)), i;
  }
  setComponent(t, e, i) {
    return (
      this.normalized && (i = Pe(i, this.array)),
      (this.array[t * this.itemSize + e] = i),
      this
    );
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ar(e, this.array)), e;
  }
  setX(t, e) {
    return (
      this.normalized && (e = Pe(e, this.array)),
      (this.array[t * this.itemSize] = e),
      this
    );
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ar(e, this.array)), e;
  }
  setY(t, e) {
    return (
      this.normalized && (e = Pe(e, this.array)),
      (this.array[t * this.itemSize + 1] = e),
      this
    );
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ar(e, this.array)), e;
  }
  setZ(t, e) {
    return (
      this.normalized && (e = Pe(e, this.array)),
      (this.array[t * this.itemSize + 2] = e),
      this
    );
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ar(e, this.array)), e;
  }
  setW(t, e) {
    return (
      this.normalized && (e = Pe(e, this.array)),
      (this.array[t * this.itemSize + 3] = e),
      this
    );
  }
  setXY(t, e, i) {
    return (
      (t *= this.itemSize),
      this.normalized && ((e = Pe(e, this.array)), (i = Pe(i, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = i),
      this
    );
  }
  setXYZ(t, e, i, r) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = Pe(e, this.array)),
        (i = Pe(i, this.array)),
        (r = Pe(r, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = i),
      (this.array[t + 2] = r),
      this
    );
  }
  setXYZW(t, e, i, r, s) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = Pe(e, this.array)),
        (i = Pe(i, this.array)),
        (r = Pe(r, this.array)),
        (s = Pe(s, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = i),
      (this.array[t + 2] = r),
      (this.array[t + 3] = s),
      this
    );
  }
  onUpload(t) {
    return (this.onUploadCallback = t), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== '' && (t.name = this.name),
      this.usage !== El && (t.usage = this.usage),
      t
    );
  }
}
class ph extends on {
  constructor(t, e, i) {
    super(new Uint16Array(t), e, i);
  }
}
class fh extends on {
  constructor(t, e, i) {
    super(new Uint32Array(t), e, i);
  }
}
class an extends on {
  constructor(t, e, i) {
    super(new Float32Array(t), e, i);
  }
}
let qd = 0;
const Ge = new le(),
  mo = new Ie(),
  Ri = new I(),
  Be = new Rr(),
  dr = new Rr(),
  xe = new I();
class Yn extends _i {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, 'id', { value: qd++ }),
      (this.uuid = Pr()),
      (this.name = ''),
      (this.type = 'BufferGeometry'),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return (
      Array.isArray(t)
        ? (this.index = new (ah(t) ? fh : ph)(t, 1))
        : (this.index = t),
      this
    );
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return (this.attributes[t] = e), this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, i = 0) {
    this.groups.push({ start: t, count: e, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    (this.drawRange.start = t), (this.drawRange.count = e);
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), (e.needsUpdate = !0));
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new Dt().getNormalMatrix(t);
      i.applyNormalMatrix(s), (i.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(t), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(t) {
    return Ge.makeRotationFromQuaternion(t), this.applyMatrix4(Ge), this;
  }
  rotateX(t) {
    return Ge.makeRotationX(t), this.applyMatrix4(Ge), this;
  }
  rotateY(t) {
    return Ge.makeRotationY(t), this.applyMatrix4(Ge), this;
  }
  rotateZ(t) {
    return Ge.makeRotationZ(t), this.applyMatrix4(Ge), this;
  }
  translate(t, e, i) {
    return Ge.makeTranslation(t, e, i), this.applyMatrix4(Ge), this;
  }
  scale(t, e, i) {
    return Ge.makeScale(t, e, i), this.applyMatrix4(Ge), this;
  }
  lookAt(t) {
    return mo.lookAt(t), mo.updateMatrix(), this.applyMatrix4(mo.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Ri).negate(),
      this.translate(Ri.x, Ri.y, Ri.z),
      this
    );
  }
  setFromPoints(t) {
    const e = [];
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      e.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute('position', new an(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Rr());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.',
        this
      ),
        this.boundingBox.set(
          new I(-1 / 0, -1 / 0, -1 / 0),
          new I(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (t !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(t), e))
        for (let i = 0, r = e.length; i < r; i++) {
          const s = e[i];
          Be.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (xe.addVectors(this.boundingBox.min, Be.min),
                this.boundingBox.expandByPoint(xe),
                xe.addVectors(this.boundingBox.max, Be.max),
                this.boundingBox.expandByPoint(xe))
              : (this.boundingBox.expandByPoint(Be.min),
                this.boundingBox.expandByPoint(Be.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new La());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.',
        this
      ),
        this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (t) {
      const i = this.boundingSphere.center;
      if ((Be.setFromBufferAttribute(t), e))
        for (let s = 0, o = e.length; s < o; s++) {
          const a = e[s];
          dr.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (xe.addVectors(Be.min, dr.min),
                Be.expandByPoint(xe),
                xe.addVectors(Be.max, dr.max),
                Be.expandByPoint(xe))
              : (Be.expandByPoint(dr.min), Be.expandByPoint(dr.max));
        }
      Be.getCenter(i);
      let r = 0;
      for (let s = 0, o = t.count; s < o; s++)
        xe.fromBufferAttribute(t, s),
          (r = Math.max(r, i.distanceToSquared(xe)));
      if (e)
        for (let s = 0, o = e.length; s < o; s++) {
          const a = e[s],
            l = this.morphTargetsRelative;
          for (let c = 0, h = a.count; c < h; c++)
            xe.fromBufferAttribute(a, c),
              l && (Ri.fromBufferAttribute(t, c), xe.add(Ri)),
              (r = Math.max(r, i.distanceToSquared(xe)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const t = this.index,
      e = this.attributes;
    if (
      t === null ||
      e.position === void 0 ||
      e.normal === void 0 ||
      e.uv === void 0
    ) {
      console.error(
        'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)'
      );
      return;
    }
    const i = e.position,
      r = e.normal,
      s = e.uv;
    this.hasAttribute('tangent') === !1 &&
      this.setAttribute('tangent', new on(new Float32Array(4 * i.count), 4));
    const o = this.getAttribute('tangent'),
      a = [],
      l = [];
    for (let B = 0; B < i.count; B++) (a[B] = new I()), (l[B] = new I());
    const c = new I(),
      h = new I(),
      d = new I(),
      p = new yt(),
      m = new yt(),
      g = new yt(),
      b = new I(),
      f = new I();
    function u(B, w, x) {
      c.fromBufferAttribute(i, B),
        h.fromBufferAttribute(i, w),
        d.fromBufferAttribute(i, x),
        p.fromBufferAttribute(s, B),
        m.fromBufferAttribute(s, w),
        g.fromBufferAttribute(s, x),
        h.sub(c),
        d.sub(c),
        m.sub(p),
        g.sub(p);
      const P = 1 / (m.x * g.y - g.x * m.y);
      isFinite(P) &&
        (b
          .copy(h)
          .multiplyScalar(g.y)
          .addScaledVector(d, -m.y)
          .multiplyScalar(P),
        f
          .copy(d)
          .multiplyScalar(m.x)
          .addScaledVector(h, -g.x)
          .multiplyScalar(P),
        a[B].add(b),
        a[w].add(b),
        a[x].add(b),
        l[B].add(f),
        l[w].add(f),
        l[x].add(f));
    }
    let S = this.groups;
    S.length === 0 && (S = [{ start: 0, count: t.count }]);
    for (let B = 0, w = S.length; B < w; ++B) {
      const x = S[B],
        P = x.start,
        H = x.count;
      for (let k = P, Y = P + H; k < Y; k += 3)
        u(t.getX(k + 0), t.getX(k + 1), t.getX(k + 2));
    }
    const M = new I(),
      y = new I(),
      F = new I(),
      A = new I();
    function T(B) {
      F.fromBufferAttribute(r, B), A.copy(F);
      const w = a[B];
      M.copy(w),
        M.sub(F.multiplyScalar(F.dot(w))).normalize(),
        y.crossVectors(A, w);
      const P = y.dot(l[B]) < 0 ? -1 : 1;
      o.setXYZW(B, M.x, M.y, M.z, P);
    }
    for (let B = 0, w = S.length; B < w; ++B) {
      const x = S[B],
        P = x.start,
        H = x.count;
      for (let k = P, Y = P + H; k < Y; k += 3)
        T(t.getX(k + 0)), T(t.getX(k + 1)), T(t.getX(k + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index,
      e = this.getAttribute('position');
    if (e !== void 0) {
      let i = this.getAttribute('normal');
      if (i === void 0)
        (i = new on(new Float32Array(e.count * 3), 3)),
          this.setAttribute('normal', i);
      else for (let p = 0, m = i.count; p < m; p++) i.setXYZ(p, 0, 0, 0);
      const r = new I(),
        s = new I(),
        o = new I(),
        a = new I(),
        l = new I(),
        c = new I(),
        h = new I(),
        d = new I();
      if (t)
        for (let p = 0, m = t.count; p < m; p += 3) {
          const g = t.getX(p + 0),
            b = t.getX(p + 1),
            f = t.getX(p + 2);
          r.fromBufferAttribute(e, g),
            s.fromBufferAttribute(e, b),
            o.fromBufferAttribute(e, f),
            h.subVectors(o, s),
            d.subVectors(r, s),
            h.cross(d),
            a.fromBufferAttribute(i, g),
            l.fromBufferAttribute(i, b),
            c.fromBufferAttribute(i, f),
            a.add(h),
            l.add(h),
            c.add(h),
            i.setXYZ(g, a.x, a.y, a.z),
            i.setXYZ(b, l.x, l.y, l.z),
            i.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let p = 0, m = e.count; p < m; p += 3)
          r.fromBufferAttribute(e, p + 0),
            s.fromBufferAttribute(e, p + 1),
            o.fromBufferAttribute(e, p + 2),
            h.subVectors(o, s),
            d.subVectors(r, s),
            h.cross(d),
            i.setXYZ(p + 0, h.x, h.y, h.z),
            i.setXYZ(p + 1, h.x, h.y, h.z),
            i.setXYZ(p + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (i.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, i = t.count; e < i; e++)
      xe.fromBufferAttribute(t, e),
        xe.normalize(),
        t.setXYZ(e, xe.x, xe.y, xe.z);
  }
  toNonIndexed() {
    function t(a, l) {
      const c = a.array,
        h = a.itemSize,
        d = a.normalized,
        p = new c.constructor(l.length * h);
      let m = 0,
        g = 0;
      for (let b = 0, f = l.length; b < f; b++) {
        a.isInterleavedBufferAttribute
          ? (m = l[b] * a.data.stride + a.offset)
          : (m = l[b] * h);
        for (let u = 0; u < h; u++) p[g++] = c[m++];
      }
      return new on(p, h, d);
    }
    if (this.index === null)
      return (
        console.warn(
          'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'
        ),
        this
      );
    const e = new Yn(),
      i = this.index.array,
      r = this.attributes;
    for (const a in r) {
      const l = r[a],
        c = t(l, i);
      e.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let h = 0, d = c.length; h < d; h++) {
        const p = c[h],
          m = t(p, i);
        l.push(m);
      }
      e.morphAttributes[a] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: 'BufferGeometry',
        generator: 'BufferGeometry.toJSON',
      },
    };
    if (
      ((t.uuid = this.uuid),
      (t.type = this.type),
      this.name !== '' && (t.name = this.name),
      Object.keys(this.userData).length > 0 && (t.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null &&
      (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array),
      });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        h = [];
      for (let d = 0, p = c.length; d < p; d++) {
        const m = c[d];
        h.push(m.toJSON(t.data));
      }
      h.length > 0 && ((r[l] = h), (s = !0));
    }
    s &&
      ((t.data.morphAttributes = r),
      (t.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (t.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      t
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const e = {};
    this.name = t.name;
    const i = t.index;
    i !== null && this.setIndex(i.clone(e));
    const r = t.attributes;
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(e));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const h = [],
        d = s[c];
      for (let p = 0, m = d.length; p < m; p++) h.push(d[p].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const o = t.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const d = o[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const a = t.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = t.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = t.drawRange.start),
      (this.drawRange.count = t.drawRange.count),
      (this.userData = t.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
const Fl = new le(),
  Jn = new hh(),
  ns = new La(),
  Bl = new I(),
  Li = new I(),
  Di = new I(),
  Ii = new I(),
  _o = new I(),
  is = new I(),
  rs = new yt(),
  ss = new yt(),
  os = new yt(),
  kl = new I(),
  Vl = new I(),
  zl = new I(),
  as = new I(),
  ls = new I();
class je extends Ie {
  constructor(t = new Yn(), e = new Da()) {
    super(),
      (this.isMesh = !0),
      (this.type = 'Mesh'),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      t.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
      t.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          t.morphTargetDictionary
        )),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      i = Object.keys(e);
    if (i.length > 0) {
      const r = e[i[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const i = this.geometry,
      r = i.attributes.position,
      s = i.morphAttributes.position,
      o = i.morphTargetsRelative;
    e.fromBufferAttribute(r, t);
    const a = this.morphTargetInfluences;
    if (s && a) {
      is.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = a[l],
          d = s[l];
        h !== 0 &&
          (_o.fromBufferAttribute(d, t),
          o ? is.addScaledVector(_o, h) : is.addScaledVector(_o.sub(e), h));
      }
      e.add(is);
    }
    return e;
  }
  raycast(t, e) {
    const i = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (i.boundingSphere === null && i.computeBoundingSphere(),
      ns.copy(i.boundingSphere),
      ns.applyMatrix4(s),
      Jn.copy(t.ray).recast(t.near),
      !(
        ns.containsPoint(Jn.origin) === !1 &&
        (Jn.intersectSphere(ns, Bl) === null ||
          Jn.origin.distanceToSquared(Bl) > (t.far - t.near) ** 2)
      ) &&
        (Fl.copy(s).invert(),
        Jn.copy(t.ray).applyMatrix4(Fl),
        !(i.boundingBox !== null && Jn.intersectsBox(i.boundingBox) === !1) &&
          this._computeIntersections(t, e, Jn)));
  }
  _computeIntersections(t, e, i) {
    let r;
    const s = this.geometry,
      o = this.material,
      a = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      h = s.attributes.uv1,
      d = s.attributes.normal,
      p = s.groups,
      m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, b = p.length; g < b; g++) {
          const f = p[g],
            u = o[f.materialIndex],
            S = Math.max(f.start, m.start),
            M = Math.min(
              a.count,
              Math.min(f.start + f.count, m.start + m.count)
            );
          for (let y = S, F = M; y < F; y += 3) {
            const A = a.getX(y),
              T = a.getX(y + 1),
              B = a.getX(y + 2);
            (r = cs(this, u, t, i, c, h, d, A, T, B)),
              r &&
                ((r.faceIndex = Math.floor(y / 3)),
                (r.face.materialIndex = f.materialIndex),
                e.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start),
          b = Math.min(a.count, m.start + m.count);
        for (let f = g, u = b; f < u; f += 3) {
          const S = a.getX(f),
            M = a.getX(f + 1),
            y = a.getX(f + 2);
          (r = cs(this, o, t, i, c, h, d, S, M, y)),
            r && ((r.faceIndex = Math.floor(f / 3)), e.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, b = p.length; g < b; g++) {
          const f = p[g],
            u = o[f.materialIndex],
            S = Math.max(f.start, m.start),
            M = Math.min(
              l.count,
              Math.min(f.start + f.count, m.start + m.count)
            );
          for (let y = S, F = M; y < F; y += 3) {
            const A = y,
              T = y + 1,
              B = y + 2;
            (r = cs(this, u, t, i, c, h, d, A, T, B)),
              r &&
                ((r.faceIndex = Math.floor(y / 3)),
                (r.face.materialIndex = f.materialIndex),
                e.push(r));
          }
        }
      else {
        const g = Math.max(0, m.start),
          b = Math.min(l.count, m.start + m.count);
        for (let f = g, u = b; f < u; f += 3) {
          const S = f,
            M = f + 1,
            y = f + 2;
          (r = cs(this, o, t, i, c, h, d, S, M, y)),
            r && ((r.faceIndex = Math.floor(f / 3)), e.push(r));
        }
      }
  }
}
function Yd(n, t, e, i, r, s, o, a) {
  let l;
  if (
    (t.side === De
      ? (l = i.intersectTriangle(o, s, r, !0, a))
      : (l = i.intersectTriangle(r, s, o, t.side === Wn, a)),
    l === null)
  )
    return null;
  ls.copy(a), ls.applyMatrix4(n.matrixWorld);
  const c = e.ray.origin.distanceTo(ls);
  return c < e.near || c > e.far
    ? null
    : { distance: c, point: ls.clone(), object: n };
}
function cs(n, t, e, i, r, s, o, a, l, c) {
  n.getVertexPosition(a, Li),
    n.getVertexPosition(l, Di),
    n.getVertexPosition(c, Ii);
  const h = Yd(n, t, e, i, Li, Di, Ii, as);
  if (h) {
    r &&
      (rs.fromBufferAttribute(r, a),
      ss.fromBufferAttribute(r, l),
      os.fromBufferAttribute(r, c),
      (h.uv = rn.getInterpolation(as, Li, Di, Ii, rs, ss, os, new yt()))),
      s &&
        (rs.fromBufferAttribute(s, a),
        ss.fromBufferAttribute(s, l),
        os.fromBufferAttribute(s, c),
        (h.uv1 = rn.getInterpolation(as, Li, Di, Ii, rs, ss, os, new yt()))),
      o &&
        (kl.fromBufferAttribute(o, a),
        Vl.fromBufferAttribute(o, l),
        zl.fromBufferAttribute(o, c),
        (h.normal = rn.getInterpolation(as, Li, Di, Ii, kl, Vl, zl, new I())),
        h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a, b: l, c, normal: new I(), materialIndex: 0 };
    rn.getNormal(Li, Di, Ii, d.normal), (h.face = d);
  }
  return h;
}
class Dr extends Yn {
  constructor(t = 1, e = 1, i = 1, r = 1, s = 1, o = 1) {
    super(),
      (this.type = 'BoxGeometry'),
      (this.parameters = {
        width: t,
        height: e,
        depth: i,
        widthSegments: r,
        heightSegments: s,
        depthSegments: o,
      });
    const a = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (o = Math.floor(o));
    const l = [],
      c = [],
      h = [],
      d = [];
    let p = 0,
      m = 0;
    g('z', 'y', 'x', -1, -1, i, e, t, o, s, 0),
      g('z', 'y', 'x', 1, -1, i, e, -t, o, s, 1),
      g('x', 'z', 'y', 1, 1, t, i, e, r, o, 2),
      g('x', 'z', 'y', 1, -1, t, i, -e, r, o, 3),
      g('x', 'y', 'z', 1, -1, t, e, i, r, s, 4),
      g('x', 'y', 'z', -1, -1, t, e, -i, r, s, 5),
      this.setIndex(l),
      this.setAttribute('position', new an(c, 3)),
      this.setAttribute('normal', new an(h, 3)),
      this.setAttribute('uv', new an(d, 2));
    function g(b, f, u, S, M, y, F, A, T, B, w) {
      const x = y / T,
        P = F / B,
        H = y / 2,
        k = F / 2,
        Y = A / 2,
        q = T + 1,
        G = B + 1;
      let $ = 0,
        V = 0;
      const ot = new I();
      for (let ht = 0; ht < G; ht++) {
        const mt = ht * P - k;
        for (let Ot = 0; Ot < q; Ot++) {
          const Kt = Ot * x - H;
          (ot[b] = Kt * S),
            (ot[f] = mt * M),
            (ot[u] = Y),
            c.push(ot.x, ot.y, ot.z),
            (ot[b] = 0),
            (ot[f] = 0),
            (ot[u] = A > 0 ? 1 : -1),
            h.push(ot.x, ot.y, ot.z),
            d.push(Ot / T),
            d.push(1 - ht / B),
            ($ += 1);
        }
      }
      for (let ht = 0; ht < B; ht++)
        for (let mt = 0; mt < T; mt++) {
          const Ot = p + mt + q * ht,
            Kt = p + mt + q * (ht + 1),
            z = p + (mt + 1) + q * (ht + 1),
            J = p + (mt + 1) + q * ht;
          l.push(Ot, Kt, J), l.push(Kt, z, J), (V += 6);
        }
      a.addGroup(m, V, w), (m += V), (p += $);
    }
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new Dr(
      t.width,
      t.height,
      t.depth,
      t.widthSegments,
      t.heightSegments,
      t.depthSegments
    );
  }
}
function Zi(n) {
  const t = {};
  for (const e in n) {
    t[e] = {};
    for (const i in n[e]) {
      const r = n[e][i];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              'UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().'
            ),
            (t[e][i] = null))
          : (t[e][i] = r.clone())
        : Array.isArray(r)
        ? (t[e][i] = r.slice())
        : (t[e][i] = r);
    }
  }
  return t;
}
function Se(n) {
  const t = {};
  for (let e = 0; e < n.length; e++) {
    const i = Zi(n[e]);
    for (const r in i) t[r] = i[r];
  }
  return t;
}
function Kd(n) {
  const t = [];
  for (let e = 0; e < n.length; e++) t.push(n[e].clone());
  return t;
}
function mh(n) {
  const t = n.getRenderTarget();
  return t === null
    ? n.outputColorSpace
    : t.isXRRenderTarget === !0
    ? t.texture.colorSpace
    : jt.workingColorSpace;
}
const $d = { clone: Zi, merge: Se };
var Zd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Jd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Xn extends Lr {
  constructor(t) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = 'ShaderMaterial'),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Zd),
      (this.fragmentShader = Jd),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.fragmentShader = t.fragmentShader),
      (this.vertexShader = t.vertexShader),
      (this.uniforms = Zi(t.uniforms)),
      (this.uniformsGroups = Kd(t.uniformsGroups)),
      (this.defines = Object.assign({}, t.defines)),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.fog = t.fog),
      (this.lights = t.lights),
      (this.clipping = t.clipping),
      (this.extensions = Object.assign({}, t.extensions)),
      (this.glslVersion = t.glslVersion),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    (e.glslVersion = this.glslVersion), (e.uniforms = {});
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture
        ? (e.uniforms[r] = { type: 't', value: o.toJSON(t).uuid })
        : o && o.isColor
        ? (e.uniforms[r] = { type: 'c', value: o.getHex() })
        : o && o.isVector2
        ? (e.uniforms[r] = { type: 'v2', value: o.toArray() })
        : o && o.isVector3
        ? (e.uniforms[r] = { type: 'v3', value: o.toArray() })
        : o && o.isVector4
        ? (e.uniforms[r] = { type: 'v4', value: o.toArray() })
        : o && o.isMatrix3
        ? (e.uniforms[r] = { type: 'm3', value: o.toArray() })
        : o && o.isMatrix4
        ? (e.uniforms[r] = { type: 'm4', value: o.toArray() })
        : (e.uniforms[r] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines),
      (e.vertexShader = this.vertexShader),
      (e.fragmentShader = this.fragmentShader),
      (e.lights = this.lights),
      (e.clipping = this.clipping);
    const i = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (i[r] = !0);
    return Object.keys(i).length > 0 && (e.extensions = i), e;
  }
}
class _h extends Ie {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = 'Camera'),
      (this.matrixWorldInverse = new le()),
      (this.projectionMatrix = new le()),
      (this.projectionMatrixInverse = new le()),
      (this.coordinateSystem = Mn);
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.matrixWorldInverse.copy(t.matrixWorldInverse),
      this.projectionMatrix.copy(t.projectionMatrix),
      this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
      (this.coordinateSystem = t.coordinateSystem),
      this
    );
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Un = new I(),
  Hl = new yt(),
  Gl = new yt();
class ke extends _h {
  constructor(t = 50, e = 1, i = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = 'PerspectiveCamera'),
      (this.fov = t),
      (this.zoom = 1),
      (this.near = i),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = e),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.fov = t.fov),
      (this.zoom = t.zoom),
      (this.near = t.near),
      (this.far = t.far),
      (this.focus = t.focus),
      (this.aspect = t.aspect),
      (this.view = t.view === null ? null : Object.assign({}, t.view)),
      (this.filmGauge = t.filmGauge),
      (this.filmOffset = t.filmOffset),
      this
    );
  }
  setFocalLength(t) {
    const e = (0.5 * this.getFilmHeight()) / t;
    (this.fov = fa * 2 * Math.atan(e)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(ws * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / t;
  }
  getEffectiveFOV() {
    return fa * 2 * Math.atan(Math.tan(ws * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, i) {
    Un.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      e.set(Un.x, Un.y).multiplyScalar(-t / Un.z),
      Un.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      i.set(Un.x, Un.y).multiplyScalar(-t / Un.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, Hl, Gl), e.subVectors(Gl, Hl);
  }
  setViewOffset(t, e, i, r, s, o) {
    (this.aspect = t / e),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = i),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = (t * Math.tan(ws * 0.5 * this.fov)) / this.zoom,
      i = 2 * e,
      r = this.aspect * i,
      s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (s += (o.offsetX * r) / l),
        (e -= (o.offsetY * i) / c),
        (r *= o.width / l),
        (i *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (t * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        e,
        e - i,
        t,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.fov = this.fov),
      (e.object.zoom = this.zoom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      (e.object.focus = this.focus),
      (e.object.aspect = this.aspect),
      this.view !== null && (e.object.view = Object.assign({}, this.view)),
      (e.object.filmGauge = this.filmGauge),
      (e.object.filmOffset = this.filmOffset),
      e
    );
  }
}
const Ui = -90,
  Ni = 1;
class Qd extends Ie {
  constructor(t, e, i) {
    super(),
      (this.type = 'CubeCamera'),
      (this.renderTarget = i),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const r = new ke(Ui, Ni, t, e);
    (r.layers = this.layers), this.add(r);
    const s = new ke(Ui, Ni, t, e);
    (s.layers = this.layers), this.add(s);
    const o = new ke(Ui, Ni, t, e);
    (o.layers = this.layers), this.add(o);
    const a = new ke(Ui, Ni, t, e);
    (a.layers = this.layers), this.add(a);
    const l = new ke(Ui, Ni, t, e);
    (l.layers = this.layers), this.add(l);
    const c = new ke(Ui, Ni, t, e);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem,
      e = this.children.concat(),
      [i, r, s, o, a, l] = e;
    for (const c of e) this.remove(c);
    if (t === Mn)
      i.up.set(0, 1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, -1, 0),
        a.up.set(0, 1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (t === Rs)
      i.up.set(0, -1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, -1, 0),
        a.up.set(0, -1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else
      throw new Error(
        'THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ' +
          t
      );
    for (const c of e) this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: r } = this;
    this.coordinateSystem !== t.coordinateSystem &&
      ((this.coordinateSystem = t.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, o, a, l, c, h] = this.children,
      d = t.getRenderTarget(),
      p = t.getActiveCubeFace(),
      m = t.getActiveMipmapLevel(),
      g = t.xr.enabled;
    t.xr.enabled = !1;
    const b = i.texture.generateMipmaps;
    (i.texture.generateMipmaps = !1),
      t.setRenderTarget(i, 0, r),
      t.render(e, s),
      t.setRenderTarget(i, 1, r),
      t.render(e, o),
      t.setRenderTarget(i, 2, r),
      t.render(e, a),
      t.setRenderTarget(i, 3, r),
      t.render(e, l),
      t.setRenderTarget(i, 4, r),
      t.render(e, c),
      (i.texture.generateMipmaps = b),
      t.setRenderTarget(i, 5, r),
      t.render(e, h),
      t.setRenderTarget(d, p, m),
      (t.xr.enabled = g),
      (i.texture.needsPMREMUpdate = !0);
  }
}
class Ia extends Ce {
  constructor(t, e, i, r, s, o, a, l, c, h) {
    (t = t !== void 0 ? t : []),
      (e = e !== void 0 ? e : qi),
      super(t, e, i, r, s, o, a, l, c, h),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class tp extends ui {
  constructor(t = 1, e = {}) {
    super(t, t, e), (this.isWebGLCubeRenderTarget = !0);
    const i = { width: t, height: t, depth: 1 },
      r = [i, i, i, i, i, i];
    (this.texture = new Ia(
      r,
      e.mapping,
      e.wrapS,
      e.wrapT,
      e.magFilter,
      e.minFilter,
      e.format,
      e.type,
      e.anisotropy,
      e.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        e.generateMipmaps !== void 0 ? e.generateMipmaps : !1),
      (this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Qe);
  }
  fromEquirectangularTexture(t, e) {
    (this.texture.type = e.type),
      (this.texture.colorSpace = e.colorSpace),
      (this.texture.generateMipmaps = e.generateMipmaps),
      (this.texture.minFilter = e.minFilter),
      (this.texture.magFilter = e.magFilter);
    const i = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new Dr(5, 5, 5),
      s = new Xn({
        name: 'CubemapFromEquirect',
        uniforms: Zi(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: De,
        blending: zn,
      });
    s.uniforms.tEquirect.value = e;
    const o = new je(r, s),
      a = e.minFilter;
    return (
      e.minFilter === li && (e.minFilter = Qe),
      new Qd(1, 10, this).update(t, o),
      (e.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(t, e, i, r) {
    const s = t.getRenderTarget();
    for (let o = 0; o < 6; o++) t.setRenderTarget(this, o), t.clear(e, i, r);
    t.setRenderTarget(s);
  }
}
const vo = new I(),
  ep = new I(),
  np = new Dt();
class Bn {
  constructor(t = new I(1, 0, 0), e = 0) {
    (this.isPlane = !0), (this.normal = t), (this.constant = e);
  }
  set(t, e) {
    return this.normal.copy(t), (this.constant = e), this;
  }
  setComponents(t, e, i, r) {
    return this.normal.set(t, e, i), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
  }
  setFromCoplanarPoints(t, e, i) {
    const r = vo.subVectors(i, e).cross(ep.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), (this.constant = t.constant), this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), (this.constant *= t), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const i = t.delta(vo),
      r = this.normal.dot(i);
    if (r === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(i, s);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start),
      i = this.distanceToPoint(t.end);
    return (e < 0 && i > 0) || (i < 0 && e > 0);
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const i = e || np.getNormalMatrix(t),
      r = this.coplanarPoint(vo).applyMatrix4(t),
      s = this.normal.applyMatrix3(i).normalize();
    return (this.constant = -r.dot(s)), this;
  }
  translate(t) {
    return (this.constant -= t.dot(this.normal)), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Qn = new La(),
  hs = new I();
class Ua {
  constructor(
    t = new Bn(),
    e = new Bn(),
    i = new Bn(),
    r = new Bn(),
    s = new Bn(),
    o = new Bn()
  ) {
    this.planes = [t, e, i, r, s, o];
  }
  set(t, e, i, r, s, o) {
    const a = this.planes;
    return (
      a[0].copy(t),
      a[1].copy(e),
      a[2].copy(i),
      a[3].copy(r),
      a[4].copy(s),
      a[5].copy(o),
      this
    );
  }
  copy(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++) e[i].copy(t.planes[i]);
    return this;
  }
  setFromProjectionMatrix(t, e = Mn) {
    const i = this.planes,
      r = t.elements,
      s = r[0],
      o = r[1],
      a = r[2],
      l = r[3],
      c = r[4],
      h = r[5],
      d = r[6],
      p = r[7],
      m = r[8],
      g = r[9],
      b = r[10],
      f = r[11],
      u = r[12],
      S = r[13],
      M = r[14],
      y = r[15];
    if (
      (i[0].setComponents(l - s, p - c, f - m, y - u).normalize(),
      i[1].setComponents(l + s, p + c, f + m, y + u).normalize(),
      i[2].setComponents(l + o, p + h, f + g, y + S).normalize(),
      i[3].setComponents(l - o, p - h, f - g, y - S).normalize(),
      i[4].setComponents(l - a, p - d, f - b, y - M).normalize(),
      e === Mn)
    )
      i[5].setComponents(l + a, p + d, f + b, y + M).normalize();
    else if (e === Rs) i[5].setComponents(a, d, b, M).normalize();
    else
      throw new Error(
        'THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ' +
          e
      );
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(),
        Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(),
        Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Qn);
  }
  intersectsSprite(t) {
    return (
      Qn.center.set(0, 0, 0),
      (Qn.radius = 0.7071067811865476),
      Qn.applyMatrix4(t.matrixWorld),
      this.intersectsSphere(Qn)
    );
  }
  intersectsSphere(t) {
    const e = this.planes,
      i = t.center,
      r = -t.radius;
    for (let s = 0; s < 6; s++) if (e[s].distanceToPoint(i) < r) return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = e[i];
      if (
        ((hs.x = r.normal.x > 0 ? t.max.x : t.min.x),
        (hs.y = r.normal.y > 0 ? t.max.y : t.min.y),
        (hs.z = r.normal.z > 0 ? t.max.z : t.min.z),
        r.distanceToPoint(hs) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++) if (e[i].distanceToPoint(t) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function vh() {
  let n = null,
    t = !1,
    e = null,
    i = null;
  function r(s, o) {
    e(s, o), (i = n.requestAnimationFrame(r));
  }
  return {
    start: function () {
      t !== !0 && e !== null && ((i = n.requestAnimationFrame(r)), (t = !0));
    },
    stop: function () {
      n.cancelAnimationFrame(i), (t = !1);
    },
    setAnimationLoop: function (s) {
      e = s;
    },
    setContext: function (s) {
      n = s;
    },
  };
}
function ip(n) {
  const t = new WeakMap();
  function e(a, l) {
    const c = a.array,
      h = a.usage,
      d = c.byteLength,
      p = n.createBuffer();
    n.bindBuffer(l, p), n.bufferData(l, c, h), a.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = n.FLOAT;
    else if (c instanceof Uint16Array)
      a.isFloat16BufferAttribute ? (m = n.HALF_FLOAT) : (m = n.UNSIGNED_SHORT);
    else if (c instanceof Int16Array) m = n.SHORT;
    else if (c instanceof Uint32Array) m = n.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = n.INT;
    else if (c instanceof Int8Array) m = n.BYTE;
    else if (c instanceof Uint8Array) m = n.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = n.UNSIGNED_BYTE;
    else
      throw new Error(
        'THREE.WebGLAttributes: Unsupported buffer data format: ' + c
      );
    return {
      buffer: p,
      type: m,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: a.version,
      size: d,
    };
  }
  function i(a, l, c) {
    const h = l.array,
      d = l._updateRange,
      p = l.updateRanges;
    if (
      (n.bindBuffer(c, a),
      d.count === -1 && p.length === 0 && n.bufferSubData(c, 0, h),
      p.length !== 0)
    ) {
      for (let m = 0, g = p.length; m < g; m++) {
        const b = p[m];
        n.bufferSubData(c, b.start * h.BYTES_PER_ELEMENT, h, b.start, b.count);
      }
      l.clearUpdateRanges();
    }
    d.count !== -1 &&
      (n.bufferSubData(c, d.offset * h.BYTES_PER_ELEMENT, h, d.offset, d.count),
      (d.count = -1)),
      l.onUploadCallback();
  }
  function r(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), t.get(a);
  }
  function s(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = t.get(a);
    l && (n.deleteBuffer(l.buffer), t.delete(a));
  }
  function o(a, l) {
    if (
      (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute)
    ) {
      const h = t.get(a);
      (!h || h.version < a.version) &&
        t.set(a, {
          buffer: a.buffer,
          type: a.type,
          bytesPerElement: a.elementSize,
          version: a.version,
        });
      return;
    }
    const c = t.get(a);
    if (c === void 0) t.set(a, e(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      i(c.buffer, a, l), (c.version = a.version);
    }
  }
  return { get: r, remove: s, update: o };
}
class Bs extends Yn {
  constructor(t = 1, e = 1, i = 1, r = 1) {
    super(),
      (this.type = 'PlaneGeometry'),
      (this.parameters = {
        width: t,
        height: e,
        widthSegments: i,
        heightSegments: r,
      });
    const s = t / 2,
      o = e / 2,
      a = Math.floor(i),
      l = Math.floor(r),
      c = a + 1,
      h = l + 1,
      d = t / a,
      p = e / l,
      m = [],
      g = [],
      b = [],
      f = [];
    for (let u = 0; u < h; u++) {
      const S = u * p - o;
      for (let M = 0; M < c; M++) {
        const y = M * d - s;
        g.push(y, -S, 0), b.push(0, 0, 1), f.push(M / a), f.push(1 - u / l);
      }
    }
    for (let u = 0; u < l; u++)
      for (let S = 0; S < a; S++) {
        const M = S + c * u,
          y = S + c * (u + 1),
          F = S + 1 + c * (u + 1),
          A = S + 1 + c * u;
        m.push(M, y, A), m.push(y, F, A);
      }
    this.setIndex(m),
      this.setAttribute('position', new an(g, 3)),
      this.setAttribute('normal', new an(b, 3)),
      this.setAttribute('uv', new an(f, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new Bs(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var rp = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  sp = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  op = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  ap = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  lp = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  cp = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  hp = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  up = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  dp = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  pp = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  fp = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  mp = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  _p = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  vp = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  gp = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  xp = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  bp = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Mp = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  wp = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Ep = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Sp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  yp = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  Cp = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  Tp = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  Ap = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Pp = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Rp = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Lp = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Dp = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Ip = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Up = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
  Np = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Op = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Fp = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Bp = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  kp = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Vp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  zp = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Hp = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Gp = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Wp = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Xp = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  jp = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  qp = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Yp = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Kp = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  $p = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Zp = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Jp = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Qp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  tf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  ef = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  nf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  rf = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  sf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  of = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  af = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  lf = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  cf = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  hf = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  uf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  df = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  pf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  ff = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  mf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  _f = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  vf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  gf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  xf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  bf = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  Mf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  wf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Ef = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Sf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  yf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Cf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Tf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Af = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Pf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Rf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Lf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Df = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  If = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Uf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Nf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Of = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Ff = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Bf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  kf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Vf = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  zf = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Hf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Gf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Wf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Xf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  jf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  qf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Yf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Kf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  $f = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Zf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Jf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Qf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  tm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  em = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  nm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  im = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const rm = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  sm = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  om = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  am = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  lm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  cm = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  hm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  um = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  dm = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  pm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  fm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  mm = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  _m = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  vm = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  gm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  xm = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  bm = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Mm = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  wm = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Em = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Sm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  ym = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Cm = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Tm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Am = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Pm = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Rm = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Lm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Dm = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Im = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Um = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Nm = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Om = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Fm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Lt = {
    alphahash_fragment: rp,
    alphahash_pars_fragment: sp,
    alphamap_fragment: op,
    alphamap_pars_fragment: ap,
    alphatest_fragment: lp,
    alphatest_pars_fragment: cp,
    aomap_fragment: hp,
    aomap_pars_fragment: up,
    batching_pars_vertex: dp,
    batching_vertex: pp,
    begin_vertex: fp,
    beginnormal_vertex: mp,
    bsdfs: _p,
    iridescence_fragment: vp,
    bumpmap_pars_fragment: gp,
    clipping_planes_fragment: xp,
    clipping_planes_pars_fragment: bp,
    clipping_planes_pars_vertex: Mp,
    clipping_planes_vertex: wp,
    color_fragment: Ep,
    color_pars_fragment: Sp,
    color_pars_vertex: yp,
    color_vertex: Cp,
    common: Tp,
    cube_uv_reflection_fragment: Ap,
    defaultnormal_vertex: Pp,
    displacementmap_pars_vertex: Rp,
    displacementmap_vertex: Lp,
    emissivemap_fragment: Dp,
    emissivemap_pars_fragment: Ip,
    colorspace_fragment: Up,
    colorspace_pars_fragment: Np,
    envmap_fragment: Op,
    envmap_common_pars_fragment: Fp,
    envmap_pars_fragment: Bp,
    envmap_pars_vertex: kp,
    envmap_physical_pars_fragment: $p,
    envmap_vertex: Vp,
    fog_vertex: zp,
    fog_pars_vertex: Hp,
    fog_fragment: Gp,
    fog_pars_fragment: Wp,
    gradientmap_pars_fragment: Xp,
    lightmap_pars_fragment: jp,
    lights_lambert_fragment: qp,
    lights_lambert_pars_fragment: Yp,
    lights_pars_begin: Kp,
    lights_toon_fragment: Zp,
    lights_toon_pars_fragment: Jp,
    lights_phong_fragment: Qp,
    lights_phong_pars_fragment: tf,
    lights_physical_fragment: ef,
    lights_physical_pars_fragment: nf,
    lights_fragment_begin: rf,
    lights_fragment_maps: sf,
    lights_fragment_end: of,
    logdepthbuf_fragment: af,
    logdepthbuf_pars_fragment: lf,
    logdepthbuf_pars_vertex: cf,
    logdepthbuf_vertex: hf,
    map_fragment: uf,
    map_pars_fragment: df,
    map_particle_fragment: pf,
    map_particle_pars_fragment: ff,
    metalnessmap_fragment: mf,
    metalnessmap_pars_fragment: _f,
    morphinstance_vertex: vf,
    morphcolor_vertex: gf,
    morphnormal_vertex: xf,
    morphtarget_pars_vertex: bf,
    morphtarget_vertex: Mf,
    normal_fragment_begin: wf,
    normal_fragment_maps: Ef,
    normal_pars_fragment: Sf,
    normal_pars_vertex: yf,
    normal_vertex: Cf,
    normalmap_pars_fragment: Tf,
    clearcoat_normal_fragment_begin: Af,
    clearcoat_normal_fragment_maps: Pf,
    clearcoat_pars_fragment: Rf,
    iridescence_pars_fragment: Lf,
    opaque_fragment: Df,
    packing: If,
    premultiplied_alpha_fragment: Uf,
    project_vertex: Nf,
    dithering_fragment: Of,
    dithering_pars_fragment: Ff,
    roughnessmap_fragment: Bf,
    roughnessmap_pars_fragment: kf,
    shadowmap_pars_fragment: Vf,
    shadowmap_pars_vertex: zf,
    shadowmap_vertex: Hf,
    shadowmask_pars_fragment: Gf,
    skinbase_vertex: Wf,
    skinning_pars_vertex: Xf,
    skinning_vertex: jf,
    skinnormal_vertex: qf,
    specularmap_fragment: Yf,
    specularmap_pars_fragment: Kf,
    tonemapping_fragment: $f,
    tonemapping_pars_fragment: Zf,
    transmission_fragment: Jf,
    transmission_pars_fragment: Qf,
    uv_pars_fragment: tm,
    uv_pars_vertex: em,
    uv_vertex: nm,
    worldpos_vertex: im,
    background_vert: rm,
    background_frag: sm,
    backgroundCube_vert: om,
    backgroundCube_frag: am,
    cube_vert: lm,
    cube_frag: cm,
    depth_vert: hm,
    depth_frag: um,
    distanceRGBA_vert: dm,
    distanceRGBA_frag: pm,
    equirect_vert: fm,
    equirect_frag: mm,
    linedashed_vert: _m,
    linedashed_frag: vm,
    meshbasic_vert: gm,
    meshbasic_frag: xm,
    meshlambert_vert: bm,
    meshlambert_frag: Mm,
    meshmatcap_vert: wm,
    meshmatcap_frag: Em,
    meshnormal_vert: Sm,
    meshnormal_frag: ym,
    meshphong_vert: Cm,
    meshphong_frag: Tm,
    meshphysical_vert: Am,
    meshphysical_frag: Pm,
    meshtoon_vert: Rm,
    meshtoon_frag: Lm,
    points_vert: Dm,
    points_frag: Im,
    shadow_vert: Um,
    shadow_frag: Nm,
    sprite_vert: Om,
    sprite_frag: Fm,
  },
  it = {
    common: {
      diffuse: { value: new zt(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Dt() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Dt() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Dt() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Dt() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Dt() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Dt() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Dt() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Dt() },
      normalScale: { value: new yt(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Dt() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Dt() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Dt() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Dt() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new zt(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new zt(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Dt() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Dt() },
    },
    sprite: {
      diffuse: { value: new zt(16777215) },
      opacity: { value: 1 },
      center: { value: new yt(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Dt() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Dt() },
      alphaTest: { value: 0 },
    },
  },
  nn = {
    basic: {
      uniforms: Se([
        it.common,
        it.specularmap,
        it.envmap,
        it.aomap,
        it.lightmap,
        it.fog,
      ]),
      vertexShader: Lt.meshbasic_vert,
      fragmentShader: Lt.meshbasic_frag,
    },
    lambert: {
      uniforms: Se([
        it.common,
        it.specularmap,
        it.envmap,
        it.aomap,
        it.lightmap,
        it.emissivemap,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        it.fog,
        it.lights,
        { emissive: { value: new zt(0) } },
      ]),
      vertexShader: Lt.meshlambert_vert,
      fragmentShader: Lt.meshlambert_frag,
    },
    phong: {
      uniforms: Se([
        it.common,
        it.specularmap,
        it.envmap,
        it.aomap,
        it.lightmap,
        it.emissivemap,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        it.fog,
        it.lights,
        {
          emissive: { value: new zt(0) },
          specular: { value: new zt(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Lt.meshphong_vert,
      fragmentShader: Lt.meshphong_frag,
    },
    standard: {
      uniforms: Se([
        it.common,
        it.envmap,
        it.aomap,
        it.lightmap,
        it.emissivemap,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        it.roughnessmap,
        it.metalnessmap,
        it.fog,
        it.lights,
        {
          emissive: { value: new zt(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Lt.meshphysical_vert,
      fragmentShader: Lt.meshphysical_frag,
    },
    toon: {
      uniforms: Se([
        it.common,
        it.aomap,
        it.lightmap,
        it.emissivemap,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        it.gradientmap,
        it.fog,
        it.lights,
        { emissive: { value: new zt(0) } },
      ]),
      vertexShader: Lt.meshtoon_vert,
      fragmentShader: Lt.meshtoon_frag,
    },
    matcap: {
      uniforms: Se([
        it.common,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        it.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Lt.meshmatcap_vert,
      fragmentShader: Lt.meshmatcap_frag,
    },
    points: {
      uniforms: Se([it.points, it.fog]),
      vertexShader: Lt.points_vert,
      fragmentShader: Lt.points_frag,
    },
    dashed: {
      uniforms: Se([
        it.common,
        it.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Lt.linedashed_vert,
      fragmentShader: Lt.linedashed_frag,
    },
    depth: {
      uniforms: Se([it.common, it.displacementmap]),
      vertexShader: Lt.depth_vert,
      fragmentShader: Lt.depth_frag,
    },
    normal: {
      uniforms: Se([
        it.common,
        it.bumpmap,
        it.normalmap,
        it.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Lt.meshnormal_vert,
      fragmentShader: Lt.meshnormal_frag,
    },
    sprite: {
      uniforms: Se([it.sprite, it.fog]),
      vertexShader: Lt.sprite_vert,
      fragmentShader: Lt.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Dt() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Lt.background_vert,
      fragmentShader: Lt.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Dt() },
      },
      vertexShader: Lt.backgroundCube_vert,
      fragmentShader: Lt.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Lt.cube_vert,
      fragmentShader: Lt.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Lt.equirect_vert,
      fragmentShader: Lt.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Se([
        it.common,
        it.displacementmap,
        {
          referencePosition: { value: new I() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Lt.distanceRGBA_vert,
      fragmentShader: Lt.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Se([
        it.lights,
        it.fog,
        { color: { value: new zt(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Lt.shadow_vert,
      fragmentShader: Lt.shadow_frag,
    },
  };
nn.physical = {
  uniforms: Se([
    nn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Dt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Dt() },
      clearcoatNormalScale: { value: new yt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Dt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Dt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Dt() },
      sheen: { value: 0 },
      sheenColor: { value: new zt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Dt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Dt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Dt() },
      transmissionSamplerSize: { value: new yt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Dt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new zt(0) },
      specularColor: { value: new zt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Dt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Dt() },
      anisotropyVector: { value: new yt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Dt() },
    },
  ]),
  vertexShader: Lt.meshphysical_vert,
  fragmentShader: Lt.meshphysical_frag,
};
const us = { r: 0, b: 0, g: 0 },
  ti = new ln(),
  Bm = new le();
function km(n, t, e, i, r, s, o) {
  const a = new zt(0);
  let l = s === !0 ? 0 : 1,
    c,
    h,
    d = null,
    p = 0,
    m = null;
  function g(S) {
    let M = S.isScene === !0 ? S.background : null;
    return (
      M && M.isTexture && (M = (S.backgroundBlurriness > 0 ? e : t).get(M)), M
    );
  }
  function b(S) {
    let M = !1;
    const y = g(S);
    y === null ? u(a, l) : y && y.isColor && (u(y, 1), (M = !0));
    const F = n.xr.getEnvironmentBlendMode();
    F === 'additive'
      ? i.buffers.color.setClear(0, 0, 0, 1, o)
      : F === 'alpha-blend' && i.buffers.color.setClear(0, 0, 0, 0, o),
      (n.autoClear || M) &&
        (i.buffers.depth.setTest(!0),
        i.buffers.depth.setMask(!0),
        i.buffers.color.setMask(!0),
        n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function f(S, M) {
    const y = g(M);
    y && (y.isCubeTexture || y.mapping === Os)
      ? (h === void 0 &&
          ((h = new je(
            new Dr(1, 1, 1),
            new Xn({
              name: 'BackgroundCubeMaterial',
              uniforms: Zi(nn.backgroundCube.uniforms),
              vertexShader: nn.backgroundCube.vertexShader,
              fragmentShader: nn.backgroundCube.fragmentShader,
              side: De,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            })
          )),
          h.geometry.deleteAttribute('normal'),
          h.geometry.deleteAttribute('uv'),
          (h.onBeforeRender = function (F, A, T) {
            this.matrixWorld.copyPosition(T.matrixWorld);
          }),
          Object.defineProperty(h.material, 'envMap', {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          r.update(h)),
        ti.copy(M.backgroundRotation),
        (ti.x *= -1),
        (ti.y *= -1),
        (ti.z *= -1),
        y.isCubeTexture &&
          y.isRenderTargetTexture === !1 &&
          ((ti.y *= -1), (ti.z *= -1)),
        (h.material.uniforms.envMap.value = y),
        (h.material.uniforms.flipEnvMap.value =
          y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1),
        (h.material.uniforms.backgroundBlurriness.value =
          M.backgroundBlurriness),
        (h.material.uniforms.backgroundIntensity.value = M.backgroundIntensity),
        h.material.uniforms.backgroundRotation.value.setFromMatrix4(
          Bm.makeRotationFromEuler(ti)
        ),
        (h.material.toneMapped = jt.getTransfer(y.colorSpace) !== Qt),
        (d !== y || p !== y.version || m !== n.toneMapping) &&
          ((h.material.needsUpdate = !0),
          (d = y),
          (p = y.version),
          (m = n.toneMapping)),
        h.layers.enableAll(),
        S.unshift(h, h.geometry, h.material, 0, 0, null))
      : y &&
        y.isTexture &&
        (c === void 0 &&
          ((c = new je(
            new Bs(2, 2),
            new Xn({
              name: 'BackgroundMaterial',
              uniforms: Zi(nn.background.uniforms),
              vertexShader: nn.background.vertexShader,
              fragmentShader: nn.background.fragmentShader,
              side: Wn,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            })
          )),
          c.geometry.deleteAttribute('normal'),
          Object.defineProperty(c.material, 'map', {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          r.update(c)),
        (c.material.uniforms.t2D.value = y),
        (c.material.uniforms.backgroundIntensity.value = M.backgroundIntensity),
        (c.material.toneMapped = jt.getTransfer(y.colorSpace) !== Qt),
        y.matrixAutoUpdate === !0 && y.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(y.matrix),
        (d !== y || p !== y.version || m !== n.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (d = y),
          (p = y.version),
          (m = n.toneMapping)),
        c.layers.enableAll(),
        S.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function u(S, M) {
    S.getRGB(us, mh(n)), i.buffers.color.setClear(us.r, us.g, us.b, M, o);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (S, M = 1) {
      a.set(S), (l = M), u(a, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (S) {
      (l = S), u(a, l);
    },
    render: b,
    addToRenderList: f,
  };
}
function Vm(n, t) {
  const e = n.getParameter(n.MAX_VERTEX_ATTRIBS),
    i = {},
    r = p(null);
  let s = r,
    o = !1;
  function a(x, P, H, k, Y) {
    let q = !1;
    const G = d(k, H, P);
    s !== G && ((s = G), c(s.object)),
      (q = m(x, k, H, Y)),
      q && g(x, k, H, Y),
      Y !== null && t.update(Y, n.ELEMENT_ARRAY_BUFFER),
      (q || o) &&
        ((o = !1),
        y(x, P, H, k),
        Y !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.get(Y).buffer));
  }
  function l() {
    return n.createVertexArray();
  }
  function c(x) {
    return n.bindVertexArray(x);
  }
  function h(x) {
    return n.deleteVertexArray(x);
  }
  function d(x, P, H) {
    const k = H.wireframe === !0;
    let Y = i[x.id];
    Y === void 0 && ((Y = {}), (i[x.id] = Y));
    let q = Y[P.id];
    q === void 0 && ((q = {}), (Y[P.id] = q));
    let G = q[k];
    return G === void 0 && ((G = p(l())), (q[k] = G)), G;
  }
  function p(x) {
    const P = [],
      H = [],
      k = [];
    for (let Y = 0; Y < e; Y++) (P[Y] = 0), (H[Y] = 0), (k[Y] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: H,
      attributeDivisors: k,
      object: x,
      attributes: {},
      index: null,
    };
  }
  function m(x, P, H, k) {
    const Y = s.attributes,
      q = P.attributes;
    let G = 0;
    const $ = H.getAttributes();
    for (const V in $)
      if ($[V].location >= 0) {
        const ht = Y[V];
        let mt = q[V];
        if (
          (mt === void 0 &&
            (V === 'instanceMatrix' &&
              x.instanceMatrix &&
              (mt = x.instanceMatrix),
            V === 'instanceColor' && x.instanceColor && (mt = x.instanceColor)),
          ht === void 0 || ht.attribute !== mt || (mt && ht.data !== mt.data))
        )
          return !0;
        G++;
      }
    return s.attributesNum !== G || s.index !== k;
  }
  function g(x, P, H, k) {
    const Y = {},
      q = P.attributes;
    let G = 0;
    const $ = H.getAttributes();
    for (const V in $)
      if ($[V].location >= 0) {
        let ht = q[V];
        ht === void 0 &&
          (V === 'instanceMatrix' &&
            x.instanceMatrix &&
            (ht = x.instanceMatrix),
          V === 'instanceColor' && x.instanceColor && (ht = x.instanceColor));
        const mt = {};
        (mt.attribute = ht),
          ht && ht.data && (mt.data = ht.data),
          (Y[V] = mt),
          G++;
      }
    (s.attributes = Y), (s.attributesNum = G), (s.index = k);
  }
  function b() {
    const x = s.newAttributes;
    for (let P = 0, H = x.length; P < H; P++) x[P] = 0;
  }
  function f(x) {
    u(x, 0);
  }
  function u(x, P) {
    const H = s.newAttributes,
      k = s.enabledAttributes,
      Y = s.attributeDivisors;
    (H[x] = 1),
      k[x] === 0 && (n.enableVertexAttribArray(x), (k[x] = 1)),
      Y[x] !== P && (n.vertexAttribDivisor(x, P), (Y[x] = P));
  }
  function S() {
    const x = s.newAttributes,
      P = s.enabledAttributes;
    for (let H = 0, k = P.length; H < k; H++)
      P[H] !== x[H] && (n.disableVertexAttribArray(H), (P[H] = 0));
  }
  function M(x, P, H, k, Y, q, G) {
    G === !0
      ? n.vertexAttribIPointer(x, P, H, Y, q)
      : n.vertexAttribPointer(x, P, H, k, Y, q);
  }
  function y(x, P, H, k) {
    b();
    const Y = k.attributes,
      q = H.getAttributes(),
      G = P.defaultAttributeValues;
    for (const $ in q) {
      const V = q[$];
      if (V.location >= 0) {
        let ot = Y[$];
        if (
          (ot === void 0 &&
            ($ === 'instanceMatrix' &&
              x.instanceMatrix &&
              (ot = x.instanceMatrix),
            $ === 'instanceColor' && x.instanceColor && (ot = x.instanceColor)),
          ot !== void 0)
        ) {
          const ht = ot.normalized,
            mt = ot.itemSize,
            Ot = t.get(ot);
          if (Ot === void 0) continue;
          const Kt = Ot.buffer,
            z = Ot.type,
            J = Ot.bytesPerElement,
            ft = z === n.INT || z === n.UNSIGNED_INT || ot.gpuType === Sa;
          if (ot.isInterleavedBufferAttribute) {
            const lt = ot.data,
              wt = lt.stride,
              At = ot.offset;
            if (lt.isInstancedInterleavedBuffer) {
              for (let Nt = 0; Nt < V.locationSize; Nt++)
                u(V.location + Nt, lt.meshPerAttribute);
              x.isInstancedMesh !== !0 &&
                k._maxInstanceCount === void 0 &&
                (k._maxInstanceCount = lt.meshPerAttribute * lt.count);
            } else
              for (let Nt = 0; Nt < V.locationSize; Nt++) f(V.location + Nt);
            n.bindBuffer(n.ARRAY_BUFFER, Kt);
            for (let Nt = 0; Nt < V.locationSize; Nt++)
              M(
                V.location + Nt,
                mt / V.locationSize,
                z,
                ht,
                wt * J,
                (At + (mt / V.locationSize) * Nt) * J,
                ft
              );
          } else {
            if (ot.isInstancedBufferAttribute) {
              for (let lt = 0; lt < V.locationSize; lt++)
                u(V.location + lt, ot.meshPerAttribute);
              x.isInstancedMesh !== !0 &&
                k._maxInstanceCount === void 0 &&
                (k._maxInstanceCount = ot.meshPerAttribute * ot.count);
            } else
              for (let lt = 0; lt < V.locationSize; lt++) f(V.location + lt);
            n.bindBuffer(n.ARRAY_BUFFER, Kt);
            for (let lt = 0; lt < V.locationSize; lt++)
              M(
                V.location + lt,
                mt / V.locationSize,
                z,
                ht,
                mt * J,
                (mt / V.locationSize) * lt * J,
                ft
              );
          }
        } else if (G !== void 0) {
          const ht = G[$];
          if (ht !== void 0)
            switch (ht.length) {
              case 2:
                n.vertexAttrib2fv(V.location, ht);
                break;
              case 3:
                n.vertexAttrib3fv(V.location, ht);
                break;
              case 4:
                n.vertexAttrib4fv(V.location, ht);
                break;
              default:
                n.vertexAttrib1fv(V.location, ht);
            }
        }
      }
    }
    S();
  }
  function F() {
    B();
    for (const x in i) {
      const P = i[x];
      for (const H in P) {
        const k = P[H];
        for (const Y in k) h(k[Y].object), delete k[Y];
        delete P[H];
      }
      delete i[x];
    }
  }
  function A(x) {
    if (i[x.id] === void 0) return;
    const P = i[x.id];
    for (const H in P) {
      const k = P[H];
      for (const Y in k) h(k[Y].object), delete k[Y];
      delete P[H];
    }
    delete i[x.id];
  }
  function T(x) {
    for (const P in i) {
      const H = i[P];
      if (H[x.id] === void 0) continue;
      const k = H[x.id];
      for (const Y in k) h(k[Y].object), delete k[Y];
      delete H[x.id];
    }
  }
  function B() {
    w(), (o = !0), s !== r && ((s = r), c(s.object));
  }
  function w() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: a,
    reset: B,
    resetDefaultState: w,
    dispose: F,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: T,
    initAttributes: b,
    enableAttribute: f,
    disableUnusedAttributes: S,
  };
}
function zm(n, t, e) {
  let i;
  function r(c) {
    i = c;
  }
  function s(c, h) {
    n.drawArrays(i, c, h), e.update(h, i, 1);
  }
  function o(c, h, d) {
    d !== 0 && (n.drawArraysInstanced(i, c, h, d), e.update(h, i, d));
  }
  function a(c, h, d) {
    if (d === 0) return;
    t.get('WEBGL_multi_draw').multiDrawArraysWEBGL(i, c, 0, h, 0, d);
    let m = 0;
    for (let g = 0; g < d; g++) m += h[g];
    e.update(m, i, 1);
  }
  function l(c, h, d, p) {
    if (d === 0) return;
    const m = t.get('WEBGL_multi_draw');
    if (m === null) for (let g = 0; g < c.length; g++) o(c[g], h[g], p[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(i, c, 0, h, 0, p, 0, d);
      let g = 0;
      for (let b = 0; b < d; b++) g += h[b];
      for (let b = 0; b < p.length; b++) e.update(g, i, p[b]);
    }
  }
  (this.setMode = r),
    (this.render = s),
    (this.renderInstances = o),
    (this.renderMultiDraw = a),
    (this.renderMultiDrawInstances = l);
}
function Hm(n, t, e, i) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (t.has('EXT_texture_filter_anisotropic') === !0) {
      const A = t.get('EXT_texture_filter_anisotropic');
      r = n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function o(A) {
    return !(
      A !== tn &&
      i.convert(A) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function a(A) {
    const T =
      A === Ar &&
      (t.has('EXT_color_buffer_half_float') || t.has('EXT_color_buffer_float'));
    return !(
      A !== Sn &&
      i.convert(A) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) &&
      A !== bn &&
      !T
    );
  }
  function l(A) {
    if (A === 'highp') {
      if (
        n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision >
          0 &&
        n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision >
          0
      )
        return 'highp';
      A = 'mediump';
    }
    return A === 'mediump' &&
      n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision >
        0 &&
      n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision >
        0
      ? 'mediump'
      : 'lowp';
  }
  let c = e.precision !== void 0 ? e.precision : 'highp';
  const h = l(c);
  h !== c &&
    (console.warn(
      'THREE.WebGLRenderer:',
      c,
      'not supported, using',
      h,
      'instead.'
    ),
    (c = h));
  const d = e.logarithmicDepthBuffer === !0,
    p = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),
    m = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    g = n.getParameter(n.MAX_TEXTURE_SIZE),
    b = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),
    f = n.getParameter(n.MAX_VERTEX_ATTRIBS),
    u = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),
    S = n.getParameter(n.MAX_VARYING_VECTORS),
    M = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),
    y = m > 0,
    F = n.getParameter(n.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: o,
    textureTypeReadable: a,
    precision: c,
    logarithmicDepthBuffer: d,
    maxTextures: p,
    maxVertexTextures: m,
    maxTextureSize: g,
    maxCubemapSize: b,
    maxAttributes: f,
    maxVertexUniforms: u,
    maxVaryings: S,
    maxFragmentUniforms: M,
    vertexTextures: y,
    maxSamples: F,
  };
}
function Gm(n) {
  const t = this;
  let e = null,
    i = 0,
    r = !1,
    s = !1;
  const o = new Bn(),
    a = new Dt(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, p) {
      const m = d.length !== 0 || p || i !== 0 || r;
      return (r = p), (i = d.length), m;
    }),
    (this.beginShadows = function () {
      (s = !0), h(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (d, p) {
      e = h(d, p, 0);
    }),
    (this.setState = function (d, p, m) {
      const g = d.clippingPlanes,
        b = d.clipIntersection,
        f = d.clipShadows,
        u = n.get(d);
      if (!r || g === null || g.length === 0 || (s && !f)) s ? h(null) : c();
      else {
        const S = s ? 0 : i,
          M = S * 4;
        let y = u.clippingState || null;
        (l.value = y), (y = h(g, p, M, m));
        for (let F = 0; F !== M; ++F) y[F] = e[F];
        (u.clippingState = y),
          (this.numIntersection = b ? this.numPlanes : 0),
          (this.numPlanes += S);
      }
    });
  function c() {
    l.value !== e && ((l.value = e), (l.needsUpdate = i > 0)),
      (t.numPlanes = i),
      (t.numIntersection = 0);
  }
  function h(d, p, m, g) {
    const b = d !== null ? d.length : 0;
    let f = null;
    if (b !== 0) {
      if (((f = l.value), g !== !0 || f === null)) {
        const u = m + b * 4,
          S = p.matrixWorldInverse;
        a.getNormalMatrix(S),
          (f === null || f.length < u) && (f = new Float32Array(u));
        for (let M = 0, y = m; M !== b; ++M, y += 4)
          o.copy(d[M]).applyMatrix4(S, a),
            o.normal.toArray(f, y),
            (f[y + 3] = o.constant);
      }
      (l.value = f), (l.needsUpdate = !0);
    }
    return (t.numPlanes = b), (t.numIntersection = 0), f;
  }
}
function Wm(n) {
  let t = new WeakMap();
  function e(o, a) {
    return a === Bo ? (o.mapping = qi) : a === ko && (o.mapping = Yi), o;
  }
  function i(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === Bo || a === ko)
        if (t.has(o)) {
          const l = t.get(o).texture;
          return e(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new tp(l.height);
            return (
              c.fromEquirectangularTexture(n, o),
              t.set(o, c),
              o.addEventListener('dispose', r),
              e(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener('dispose', r);
    const l = t.get(a);
    l !== void 0 && (t.delete(a), l.dispose());
  }
  function s() {
    t = new WeakMap();
  }
  return { get: i, dispose: s };
}
class Xm extends _h {
  constructor(t = -1, e = 1, i = 1, r = -1, s = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = 'OrthographicCamera'),
      (this.zoom = 1),
      (this.view = null),
      (this.left = t),
      (this.right = e),
      (this.top = i),
      (this.bottom = r),
      (this.near = s),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.left = t.left),
      (this.right = t.right),
      (this.top = t.top),
      (this.bottom = t.bottom),
      (this.near = t.near),
      (this.far = t.far),
      (this.zoom = t.zoom),
      (this.view = t.view === null ? null : Object.assign({}, t.view)),
      this
    );
  }
  setViewOffset(t, e, i, r, s, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = i),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom),
      e = (this.top - this.bottom) / (2 * this.zoom),
      i = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = i - t,
      o = i + t,
      a = r + e,
      l = r - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (o = s + c * this.view.width),
        (a -= h * this.view.offsetY),
        (l = a - h * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      s,
      o,
      a,
      l,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.zoom = this.zoom),
      (e.object.left = this.left),
      (e.object.right = this.right),
      (e.object.top = this.top),
      (e.object.bottom = this.bottom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      this.view !== null && (e.object.view = Object.assign({}, this.view)),
      e
    );
  }
}
const Vi = 4,
  Wl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  oi = 20,
  go = new Xm(),
  Xl = new zt();
let xo = null,
  bo = 0,
  Mo = 0,
  wo = !1;
const ii = (1 + Math.sqrt(5)) / 2,
  Oi = 1 / ii,
  jl = [
    new I(-ii, Oi, 0),
    new I(ii, Oi, 0),
    new I(-Oi, 0, ii),
    new I(Oi, 0, ii),
    new I(0, ii, -Oi),
    new I(0, ii, Oi),
    new I(-1, 1, -1),
    new I(1, 1, -1),
    new I(-1, 1, 1),
    new I(1, 1, 1),
  ];
class ql {
  constructor(t) {
    (this._renderer = t),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, i = 0.1, r = 100) {
    (xo = this._renderer.getRenderTarget()),
      (bo = this._renderer.getActiveCubeFace()),
      (Mo = this._renderer.getActiveMipmapLevel()),
      (wo = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(t, i, r, s),
      e > 0 && this._blur(s, 0, 0, e),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = $l()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Kl()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(t) {
    (this._lodMax = Math.floor(Math.log2(t))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(xo, bo, Mo),
      (this._renderer.xr.enabled = wo),
      (t.scissorTest = !1),
      ds(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === qi || t.mapping === Yi
      ? this._setSize(
          t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width
        )
      : this._setSize(t.image.width / 4),
      (xo = this._renderer.getRenderTarget()),
      (bo = this._renderer.getActiveCubeFace()),
      (Mo = this._renderer.getActiveMipmapLevel()),
      (wo = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const i = e || this._allocateTargets();
    return (
      this._textureToCubeUV(t, i), this._applyPMREM(i), this._cleanup(i), i
    );
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112),
      e = 4 * this._cubeSize,
      i = {
        magFilter: Qe,
        minFilter: Qe,
        generateMipmaps: !1,
        type: Ar,
        format: tn,
        colorSpace: qn,
        depthBuffer: !1,
      },
      r = Yl(t, e, i);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== t ||
      this._pingPongRenderTarget.height !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Yl(t, e, i));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = jm(s)),
        (this._blurMaterial = qm(s, t, e));
    }
    return r;
  }
  _compileMaterial(t) {
    const e = new je(this._lodPlanes[0], t);
    this._renderer.compile(e, go);
  }
  _sceneToCubeUV(t, e, i, r) {
    const a = new ke(90, 1, e, i),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      h = this._renderer,
      d = h.autoClear,
      p = h.toneMapping;
    h.getClearColor(Xl), (h.toneMapping = Hn), (h.autoClear = !1);
    const m = new Da({
        name: 'PMREM.Background',
        side: De,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new je(new Dr(), m);
    let b = !1;
    const f = t.background;
    f
      ? f.isColor && (m.color.copy(f), (t.background = null), (b = !0))
      : (m.color.copy(Xl), (b = !0));
    for (let u = 0; u < 6; u++) {
      const S = u % 3;
      S === 0
        ? (a.up.set(0, l[u], 0), a.lookAt(c[u], 0, 0))
        : S === 1
        ? (a.up.set(0, 0, l[u]), a.lookAt(0, c[u], 0))
        : (a.up.set(0, l[u], 0), a.lookAt(0, 0, c[u]));
      const M = this._cubeSize;
      ds(r, S * M, u > 2 ? M : 0, M, M),
        h.setRenderTarget(r),
        b && h.render(g, a),
        h.render(t, a);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (h.toneMapping = p),
      (h.autoClear = d),
      (t.background = f);
  }
  _textureToCubeUV(t, e) {
    const i = this._renderer,
      r = t.mapping === qi || t.mapping === Yi;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = $l()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          t.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Kl());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      o = new je(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = t;
    const l = this._cubeSize;
    ds(e, 0, 0, 3 * l, 2 * l), i.setRenderTarget(e), i.render(o, go);
  }
  _applyPMREM(t) {
    const e = this._renderer,
      i = e.autoClear;
    e.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const o = Math.sqrt(
          this._sigmas[s] * this._sigmas[s] -
            this._sigmas[s - 1] * this._sigmas[s - 1]
        ),
        a = jl[(r - s - 1) % jl.length];
      this._blur(t, s - 1, s, o, a);
    }
    e.autoClear = i;
  }
  _blur(t, e, i, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(t, o, e, i, r, 'latitudinal', s),
      this._halfBlur(o, t, i, i, r, 'longitudinal', s);
  }
  _halfBlur(t, e, i, r, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== 'latitudinal' &&
      o !== 'longitudinal' &&
      console.error(
        'blur direction must be either latitudinal or longitudinal!'
      );
    const h = 3,
      d = new je(this._lodPlanes[r], c),
      p = c.uniforms,
      m = this._sizeLods[i] - 1,
      g = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * oi - 1),
      b = s / g,
      f = isFinite(s) ? 1 + Math.floor(h * b) : oi;
    f > oi &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${oi}`
      );
    const u = [];
    let S = 0;
    for (let T = 0; T < oi; ++T) {
      const B = T / b,
        w = Math.exp((-B * B) / 2);
      u.push(w), T === 0 ? (S += w) : T < f && (S += 2 * w);
    }
    for (let T = 0; T < u.length; T++) u[T] = u[T] / S;
    (p.envMap.value = t.texture),
      (p.samples.value = f),
      (p.weights.value = u),
      (p.latitudinal.value = o === 'latitudinal'),
      a && (p.poleAxis.value = a);
    const { _lodMax: M } = this;
    (p.dTheta.value = g), (p.mipInt.value = M - i);
    const y = this._sizeLods[r],
      F = 3 * y * (r > M - Vi ? r - M + Vi : 0),
      A = 4 * (this._cubeSize - y);
    ds(e, F, A, 3 * y, 2 * y), l.setRenderTarget(e), l.render(d, go);
  }
}
function jm(n) {
  const t = [],
    e = [],
    i = [];
  let r = n;
  const s = n - Vi + 1 + Wl.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    e.push(a);
    let l = 1 / a;
    o > n - Vi ? (l = Wl[o - n + Vi - 1]) : o === 0 && (l = 0), i.push(l);
    const c = 1 / (a - 2),
      h = -c,
      d = 1 + c,
      p = [h, h, d, h, d, d, h, h, d, d, h, d],
      m = 6,
      g = 6,
      b = 3,
      f = 2,
      u = 1,
      S = new Float32Array(b * g * m),
      M = new Float32Array(f * g * m),
      y = new Float32Array(u * g * m);
    for (let A = 0; A < m; A++) {
      const T = ((A % 3) * 2) / 3 - 1,
        B = A > 2 ? 0 : -1,
        w = [
          T,
          B,
          0,
          T + 2 / 3,
          B,
          0,
          T + 2 / 3,
          B + 1,
          0,
          T,
          B,
          0,
          T + 2 / 3,
          B + 1,
          0,
          T,
          B + 1,
          0,
        ];
      S.set(w, b * g * A), M.set(p, f * g * A);
      const x = [A, A, A, A, A, A];
      y.set(x, u * g * A);
    }
    const F = new Yn();
    F.setAttribute('position', new on(S, b)),
      F.setAttribute('uv', new on(M, f)),
      F.setAttribute('faceIndex', new on(y, u)),
      t.push(F),
      r > Vi && r--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: i };
}
function Yl(n, t, e) {
  const i = new ui(n, t, e);
  return (
    (i.texture.mapping = Os),
    (i.texture.name = 'PMREM.cubeUv'),
    (i.scissorTest = !0),
    i
  );
}
function ds(n, t, e, i, r) {
  n.viewport.set(t, e, i, r), n.scissor.set(t, e, i, r);
}
function qm(n, t, e) {
  const i = new Float32Array(oi),
    r = new I(0, 1, 0);
  return new Xn({
    name: 'SphericalGaussianBlur',
    defines: {
      n: oi,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${n}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: Na(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: zn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Kl() {
  return new Xn({
    name: 'EquirectangularToCubeUV',
    uniforms: { envMap: { value: null } },
    vertexShader: Na(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: zn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function $l() {
  return new Xn({
    name: 'CubemapToCubeUV',
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Na(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: zn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Na() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Ym(n) {
  let t = new WeakMap(),
    e = null;
  function i(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === Bo || l === ko,
        h = l === qi || l === Yi;
      if (c || h) {
        let d = t.get(a);
        const p = d !== void 0 ? d.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== p)
          return (
            e === null && (e = new ql(n)),
            (d = c ? e.fromEquirectangular(a, d) : e.fromCubemap(a, d)),
            (d.texture.pmremVersion = a.pmremVersion),
            t.set(a, d),
            d.texture
          );
        if (d !== void 0) return d.texture;
        {
          const m = a.image;
          return (c && m && m.height > 0) || (h && m && r(m))
            ? (e === null && (e = new ql(n)),
              (d = c ? e.fromEquirectangular(a) : e.fromCubemap(a)),
              (d.texture.pmremVersion = a.pmremVersion),
              t.set(a, d),
              a.addEventListener('dispose', s),
              d.texture)
            : null;
        }
      }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) a[h] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener('dispose', s);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function o() {
    (t = new WeakMap()), e !== null && (e.dispose(), (e = null));
  }
  return { get: i, dispose: o };
}
function Km(n) {
  const t = {};
  function e(i) {
    if (t[i] !== void 0) return t[i];
    let r;
    switch (i) {
      case 'WEBGL_depth_texture':
        r =
          n.getExtension('WEBGL_depth_texture') ||
          n.getExtension('MOZ_WEBGL_depth_texture') ||
          n.getExtension('WEBKIT_WEBGL_depth_texture');
        break;
      case 'EXT_texture_filter_anisotropic':
        r =
          n.getExtension('EXT_texture_filter_anisotropic') ||
          n.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
          n.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
        break;
      case 'WEBGL_compressed_texture_s3tc':
        r =
          n.getExtension('WEBGL_compressed_texture_s3tc') ||
          n.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
          n.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
        break;
      case 'WEBGL_compressed_texture_pvrtc':
        r =
          n.getExtension('WEBGL_compressed_texture_pvrtc') ||
          n.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        break;
      default:
        r = n.getExtension(i);
    }
    return (t[i] = r), r;
  }
  return {
    has: function (i) {
      return e(i) !== null;
    },
    init: function () {
      e('EXT_color_buffer_float'),
        e('WEBGL_clip_cull_distance'),
        e('OES_texture_float_linear'),
        e('EXT_color_buffer_half_float'),
        e('WEBGL_multisampled_render_to_texture'),
        e('WEBGL_render_shared_exponent');
    },
    get: function (i) {
      const r = e(i);
      return (
        r === null &&
          xr('THREE.WebGLRenderer: ' + i + ' extension not supported.'),
        r
      );
    },
  };
}
function $m(n, t, e, i) {
  const r = {},
    s = new WeakMap();
  function o(d) {
    const p = d.target;
    p.index !== null && t.remove(p.index);
    for (const g in p.attributes) t.remove(p.attributes[g]);
    for (const g in p.morphAttributes) {
      const b = p.morphAttributes[g];
      for (let f = 0, u = b.length; f < u; f++) t.remove(b[f]);
    }
    p.removeEventListener('dispose', o), delete r[p.id];
    const m = s.get(p);
    m && (t.remove(m), s.delete(p)),
      i.releaseStatesOfGeometry(p),
      p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount,
      e.memory.geometries--;
  }
  function a(d, p) {
    return (
      r[p.id] === !0 ||
        (p.addEventListener('dispose', o),
        (r[p.id] = !0),
        e.memory.geometries++),
      p
    );
  }
  function l(d) {
    const p = d.attributes;
    for (const g in p) t.update(p[g], n.ARRAY_BUFFER);
    const m = d.morphAttributes;
    for (const g in m) {
      const b = m[g];
      for (let f = 0, u = b.length; f < u; f++) t.update(b[f], n.ARRAY_BUFFER);
    }
  }
  function c(d) {
    const p = [],
      m = d.index,
      g = d.attributes.position;
    let b = 0;
    if (m !== null) {
      const S = m.array;
      b = m.version;
      for (let M = 0, y = S.length; M < y; M += 3) {
        const F = S[M + 0],
          A = S[M + 1],
          T = S[M + 2];
        p.push(F, A, A, T, T, F);
      }
    } else if (g !== void 0) {
      const S = g.array;
      b = g.version;
      for (let M = 0, y = S.length / 3 - 1; M < y; M += 3) {
        const F = M + 0,
          A = M + 1,
          T = M + 2;
        p.push(F, A, A, T, T, F);
      }
    } else return;
    const f = new (ah(p) ? fh : ph)(p, 1);
    f.version = b;
    const u = s.get(d);
    u && t.remove(u), s.set(d, f);
  }
  function h(d) {
    const p = s.get(d);
    if (p) {
      const m = d.index;
      m !== null && p.version < m.version && c(d);
    } else c(d);
    return s.get(d);
  }
  return { get: a, update: l, getWireframeAttribute: h };
}
function Zm(n, t, e) {
  let i;
  function r(p) {
    i = p;
  }
  let s, o;
  function a(p) {
    (s = p.type), (o = p.bytesPerElement);
  }
  function l(p, m) {
    n.drawElements(i, m, s, p * o), e.update(m, i, 1);
  }
  function c(p, m, g) {
    g !== 0 && (n.drawElementsInstanced(i, m, s, p * o, g), e.update(m, i, g));
  }
  function h(p, m, g) {
    if (g === 0) return;
    t.get('WEBGL_multi_draw').multiDrawElementsWEBGL(i, m, 0, s, p, 0, g);
    let f = 0;
    for (let u = 0; u < g; u++) f += m[u];
    e.update(f, i, 1);
  }
  function d(p, m, g, b) {
    if (g === 0) return;
    const f = t.get('WEBGL_multi_draw');
    if (f === null) for (let u = 0; u < p.length; u++) c(p[u] / o, m[u], b[u]);
    else {
      f.multiDrawElementsInstancedWEBGL(i, m, 0, s, p, 0, b, 0, g);
      let u = 0;
      for (let S = 0; S < g; S++) u += m[S];
      for (let S = 0; S < b.length; S++) e.update(u, i, b[S]);
    }
  }
  (this.setMode = r),
    (this.setIndex = a),
    (this.render = l),
    (this.renderInstances = c),
    (this.renderMultiDraw = h),
    (this.renderMultiDrawInstances = d);
}
function Jm(n) {
  const t = { geometries: 0, textures: 0 },
    e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(s, o, a) {
    switch ((e.calls++, o)) {
      case n.TRIANGLES:
        e.triangles += a * (s / 3);
        break;
      case n.LINES:
        e.lines += a * (s / 2);
        break;
      case n.LINE_STRIP:
        e.lines += a * (s - 1);
        break;
      case n.LINE_LOOP:
        e.lines += a * s;
        break;
      case n.POINTS:
        e.points += a * s;
        break;
      default:
        console.error('THREE.WebGLInfo: Unknown draw mode:', o);
        break;
    }
  }
  function r() {
    (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: r,
    update: i,
  };
}
function Qm(n, t, e) {
  const i = new WeakMap(),
    r = new te();
  function s(o, a, l) {
    const c = o.morphTargetInfluences,
      h =
        a.morphAttributes.position ||
        a.morphAttributes.normal ||
        a.morphAttributes.color,
      d = h !== void 0 ? h.length : 0;
    let p = i.get(a);
    if (p === void 0 || p.count !== d) {
      let x = function () {
        B.dispose(), i.delete(a), a.removeEventListener('dispose', x);
      };
      var m = x;
      p !== void 0 && p.texture.dispose();
      const g = a.morphAttributes.position !== void 0,
        b = a.morphAttributes.normal !== void 0,
        f = a.morphAttributes.color !== void 0,
        u = a.morphAttributes.position || [],
        S = a.morphAttributes.normal || [],
        M = a.morphAttributes.color || [];
      let y = 0;
      g === !0 && (y = 1), b === !0 && (y = 2), f === !0 && (y = 3);
      let F = a.attributes.position.count * y,
        A = 1;
      F > t.maxTextureSize &&
        ((A = Math.ceil(F / t.maxTextureSize)), (F = t.maxTextureSize));
      const T = new Float32Array(F * A * 4 * d),
        B = new ch(T, F, A, d);
      (B.type = bn), (B.needsUpdate = !0);
      const w = y * 4;
      for (let P = 0; P < d; P++) {
        const H = u[P],
          k = S[P],
          Y = M[P],
          q = F * A * 4 * P;
        for (let G = 0; G < H.count; G++) {
          const $ = G * w;
          g === !0 &&
            (r.fromBufferAttribute(H, G),
            (T[q + $ + 0] = r.x),
            (T[q + $ + 1] = r.y),
            (T[q + $ + 2] = r.z),
            (T[q + $ + 3] = 0)),
            b === !0 &&
              (r.fromBufferAttribute(k, G),
              (T[q + $ + 4] = r.x),
              (T[q + $ + 5] = r.y),
              (T[q + $ + 6] = r.z),
              (T[q + $ + 7] = 0)),
            f === !0 &&
              (r.fromBufferAttribute(Y, G),
              (T[q + $ + 8] = r.x),
              (T[q + $ + 9] = r.y),
              (T[q + $ + 10] = r.z),
              (T[q + $ + 11] = Y.itemSize === 4 ? r.w : 1));
        }
      }
      (p = { count: d, texture: B, size: new yt(F, A) }),
        i.set(a, p),
        a.addEventListener('dispose', x);
    }
    if (o.isInstancedMesh === !0 && o.morphTexture !== null)
      l.getUniforms().setValue(n, 'morphTexture', o.morphTexture, e);
    else {
      let g = 0;
      for (let f = 0; f < c.length; f++) g += c[f];
      const b = a.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(n, 'morphTargetBaseInfluence', b),
        l.getUniforms().setValue(n, 'morphTargetInfluences', c);
    }
    l.getUniforms().setValue(n, 'morphTargetsTexture', p.texture, e),
      l.getUniforms().setValue(n, 'morphTargetsTextureSize', p.size);
  }
  return { update: s };
}
function t_(n, t, e, i) {
  let r = new WeakMap();
  function s(l) {
    const c = i.render.frame,
      h = l.geometry,
      d = t.get(l, h);
    if (
      (r.get(d) !== c && (t.update(d), r.set(d, c)),
      l.isInstancedMesh &&
        (l.hasEventListener('dispose', a) === !1 &&
          l.addEventListener('dispose', a),
        r.get(l) !== c &&
          (e.update(l.instanceMatrix, n.ARRAY_BUFFER),
          l.instanceColor !== null && e.update(l.instanceColor, n.ARRAY_BUFFER),
          r.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const p = l.skeleton;
      r.get(p) !== c && (p.update(), r.set(p, c));
    }
    return d;
  }
  function o() {
    r = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener('dispose', a),
      e.remove(c.instanceMatrix),
      c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
class gh extends Ce {
  constructor(t, e, i, r, s, o, a, l, c, h = Gi) {
    if (h !== Gi && h !== $i)
      throw new Error(
        'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'
      );
    i === void 0 && h === Gi && (i = hi),
      i === void 0 && h === $i && (i = Ki),
      super(null, r, s, o, a, l, h, i, c),
      (this.isDepthTexture = !0),
      (this.image = { width: t, height: e }),
      (this.magFilter = a !== void 0 ? a : Xe),
      (this.minFilter = l !== void 0 ? l : Xe),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(t) {
    return super.copy(t), (this.compareFunction = t.compareFunction), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      this.compareFunction !== null &&
        (e.compareFunction = this.compareFunction),
      e
    );
  }
}
const xh = new Ce(),
  Zl = new gh(1, 1),
  bh = new ch(),
  Mh = new Bd(),
  wh = new Ia(),
  Jl = [],
  Ql = [],
  tc = new Float32Array(16),
  ec = new Float32Array(9),
  nc = new Float32Array(4);
function tr(n, t, e) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const r = t * e;
  let s = Jl[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (Jl[r] = s)), t !== 0)) {
    i.toArray(s, 0);
    for (let o = 1, a = 0; o !== t; ++o) (a += e), n[o].toArray(s, a);
  }
  return s;
}
function ve(n, t) {
  if (n.length !== t.length) return !1;
  for (let e = 0, i = n.length; e < i; e++) if (n[e] !== t[e]) return !1;
  return !0;
}
function ge(n, t) {
  for (let e = 0, i = t.length; e < i; e++) n[e] = t[e];
}
function ks(n, t) {
  let e = Ql[t];
  e === void 0 && ((e = new Int32Array(t)), (Ql[t] = e));
  for (let i = 0; i !== t; ++i) e[i] = n.allocateTextureUnit();
  return e;
}
function e_(n, t) {
  const e = this.cache;
  e[0] !== t && (n.uniform1f(this.addr, t), (e[0] = t));
}
function n_(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (n.uniform2f(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (ve(e, t)) return;
    n.uniform2fv(this.addr, t), ge(e, t);
  }
}
function i_(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (n.uniform3f(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) &&
      (n.uniform3f(this.addr, t.r, t.g, t.b),
      (e[0] = t.r),
      (e[1] = t.g),
      (e[2] = t.b));
  else {
    if (ve(e, t)) return;
    n.uniform3fv(this.addr, t), ge(e, t);
  }
}
function r_(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (n.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (ve(e, t)) return;
    n.uniform4fv(this.addr, t), ge(e, t);
  }
}
function s_(n, t) {
  const e = this.cache,
    i = t.elements;
  if (i === void 0) {
    if (ve(e, t)) return;
    n.uniformMatrix2fv(this.addr, !1, t), ge(e, t);
  } else {
    if (ve(e, i)) return;
    nc.set(i), n.uniformMatrix2fv(this.addr, !1, nc), ge(e, i);
  }
}
function o_(n, t) {
  const e = this.cache,
    i = t.elements;
  if (i === void 0) {
    if (ve(e, t)) return;
    n.uniformMatrix3fv(this.addr, !1, t), ge(e, t);
  } else {
    if (ve(e, i)) return;
    ec.set(i), n.uniformMatrix3fv(this.addr, !1, ec), ge(e, i);
  }
}
function a_(n, t) {
  const e = this.cache,
    i = t.elements;
  if (i === void 0) {
    if (ve(e, t)) return;
    n.uniformMatrix4fv(this.addr, !1, t), ge(e, t);
  } else {
    if (ve(e, i)) return;
    tc.set(i), n.uniformMatrix4fv(this.addr, !1, tc), ge(e, i);
  }
}
function l_(n, t) {
  const e = this.cache;
  e[0] !== t && (n.uniform1i(this.addr, t), (e[0] = t));
}
function c_(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (n.uniform2i(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (ve(e, t)) return;
    n.uniform2iv(this.addr, t), ge(e, t);
  }
}
function h_(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (n.uniform3i(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else {
    if (ve(e, t)) return;
    n.uniform3iv(this.addr, t), ge(e, t);
  }
}
function u_(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (n.uniform4i(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (ve(e, t)) return;
    n.uniform4iv(this.addr, t), ge(e, t);
  }
}
function d_(n, t) {
  const e = this.cache;
  e[0] !== t && (n.uniform1ui(this.addr, t), (e[0] = t));
}
function p_(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (n.uniform2ui(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (ve(e, t)) return;
    n.uniform2uiv(this.addr, t), ge(e, t);
  }
}
function f_(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (n.uniform3ui(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else {
    if (ve(e, t)) return;
    n.uniform3uiv(this.addr, t), ge(e, t);
  }
}
function m_(n, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (n.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (ve(e, t)) return;
    n.uniform4uiv(this.addr, t), ge(e, t);
  }
}
function __(n, t, e) {
  const i = this.cache,
    r = e.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r));
  let s;
  this.type === n.SAMPLER_2D_SHADOW
    ? ((Zl.compareFunction = oh), (s = Zl))
    : (s = xh),
    e.setTexture2D(t || s, r);
}
function v_(n, t, e) {
  const i = this.cache,
    r = e.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    e.setTexture3D(t || Mh, r);
}
function g_(n, t, e) {
  const i = this.cache,
    r = e.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    e.setTextureCube(t || wh, r);
}
function x_(n, t, e) {
  const i = this.cache,
    r = e.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), (i[0] = r)),
    e.setTexture2DArray(t || bh, r);
}
function b_(n) {
  switch (n) {
    case 5126:
      return e_;
    case 35664:
      return n_;
    case 35665:
      return i_;
    case 35666:
      return r_;
    case 35674:
      return s_;
    case 35675:
      return o_;
    case 35676:
      return a_;
    case 5124:
    case 35670:
      return l_;
    case 35667:
    case 35671:
      return c_;
    case 35668:
    case 35672:
      return h_;
    case 35669:
    case 35673:
      return u_;
    case 5125:
      return d_;
    case 36294:
      return p_;
    case 36295:
      return f_;
    case 36296:
      return m_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return __;
    case 35679:
    case 36299:
    case 36307:
      return v_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return g_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return x_;
  }
}
function M_(n, t) {
  n.uniform1fv(this.addr, t);
}
function w_(n, t) {
  const e = tr(t, this.size, 2);
  n.uniform2fv(this.addr, e);
}
function E_(n, t) {
  const e = tr(t, this.size, 3);
  n.uniform3fv(this.addr, e);
}
function S_(n, t) {
  const e = tr(t, this.size, 4);
  n.uniform4fv(this.addr, e);
}
function y_(n, t) {
  const e = tr(t, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, e);
}
function C_(n, t) {
  const e = tr(t, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, e);
}
function T_(n, t) {
  const e = tr(t, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, e);
}
function A_(n, t) {
  n.uniform1iv(this.addr, t);
}
function P_(n, t) {
  n.uniform2iv(this.addr, t);
}
function R_(n, t) {
  n.uniform3iv(this.addr, t);
}
function L_(n, t) {
  n.uniform4iv(this.addr, t);
}
function D_(n, t) {
  n.uniform1uiv(this.addr, t);
}
function I_(n, t) {
  n.uniform2uiv(this.addr, t);
}
function U_(n, t) {
  n.uniform3uiv(this.addr, t);
}
function N_(n, t) {
  n.uniform4uiv(this.addr, t);
}
function O_(n, t, e) {
  const i = this.cache,
    r = t.length,
    s = ks(e, r);
  ve(i, s) || (n.uniform1iv(this.addr, s), ge(i, s));
  for (let o = 0; o !== r; ++o) e.setTexture2D(t[o] || xh, s[o]);
}
function F_(n, t, e) {
  const i = this.cache,
    r = t.length,
    s = ks(e, r);
  ve(i, s) || (n.uniform1iv(this.addr, s), ge(i, s));
  for (let o = 0; o !== r; ++o) e.setTexture3D(t[o] || Mh, s[o]);
}
function B_(n, t, e) {
  const i = this.cache,
    r = t.length,
    s = ks(e, r);
  ve(i, s) || (n.uniform1iv(this.addr, s), ge(i, s));
  for (let o = 0; o !== r; ++o) e.setTextureCube(t[o] || wh, s[o]);
}
function k_(n, t, e) {
  const i = this.cache,
    r = t.length,
    s = ks(e, r);
  ve(i, s) || (n.uniform1iv(this.addr, s), ge(i, s));
  for (let o = 0; o !== r; ++o) e.setTexture2DArray(t[o] || bh, s[o]);
}
function V_(n) {
  switch (n) {
    case 5126:
      return M_;
    case 35664:
      return w_;
    case 35665:
      return E_;
    case 35666:
      return S_;
    case 35674:
      return y_;
    case 35675:
      return C_;
    case 35676:
      return T_;
    case 5124:
    case 35670:
      return A_;
    case 35667:
    case 35671:
      return P_;
    case 35668:
    case 35672:
      return R_;
    case 35669:
    case 35673:
      return L_;
    case 5125:
      return D_;
    case 36294:
      return I_;
    case 36295:
      return U_;
    case 36296:
      return N_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return O_;
    case 35679:
    case 36299:
    case 36307:
      return F_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return B_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return k_;
  }
}
class z_ {
  constructor(t, e, i) {
    (this.id = t),
      (this.addr = i),
      (this.cache = []),
      (this.type = e.type),
      (this.setValue = b_(e.type));
  }
}
class H_ {
  constructor(t, e, i) {
    (this.id = t),
      (this.addr = i),
      (this.cache = []),
      (this.type = e.type),
      (this.size = e.size),
      (this.setValue = V_(e.type));
  }
}
class G_ {
  constructor(t) {
    (this.id = t), (this.seq = []), (this.map = {});
  }
  setValue(t, e, i) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(t, e[a.id], i);
    }
  }
}
const Eo = /(\w+)(\])?(\[|\.)?/g;
function ic(n, t) {
  n.seq.push(t), (n.map[t.id] = t);
}
function W_(n, t, e) {
  const i = n.name,
    r = i.length;
  for (Eo.lastIndex = 0; ; ) {
    const s = Eo.exec(i),
      o = Eo.lastIndex;
    let a = s[1];
    const l = s[2] === ']',
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === '[' && o + 2 === r))) {
      ic(e, c === void 0 ? new z_(a, n, t) : new H_(a, n, t));
      break;
    } else {
      let d = e.map[a];
      d === void 0 && ((d = new G_(a)), ic(e, d)), (e = d);
    }
  }
}
class Es {
  constructor(t, e) {
    (this.seq = []), (this.map = {});
    const i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let r = 0; r < i; ++r) {
      const s = t.getActiveUniform(e, r),
        o = t.getUniformLocation(e, s.name);
      W_(s, o, this);
    }
  }
  setValue(t, e, i, r) {
    const s = this.map[e];
    s !== void 0 && s.setValue(t, i, r);
  }
  setOptional(t, e, i) {
    const r = e[i];
    r !== void 0 && this.setValue(t, i, r);
  }
  static upload(t, e, i, r) {
    for (let s = 0, o = e.length; s !== o; ++s) {
      const a = e[s],
        l = i[a.id];
      l.needsUpdate !== !1 && a.setValue(t, l.value, r);
    }
  }
  static seqWithValue(t, e) {
    const i = [];
    for (let r = 0, s = t.length; r !== s; ++r) {
      const o = t[r];
      o.id in e && i.push(o);
    }
    return i;
  }
}
function rc(n, t, e) {
  const i = n.createShader(t);
  return n.shaderSource(i, e), n.compileShader(i), i;
}
const X_ = 37297;
let j_ = 0;
function q_(n, t) {
  const e = n.split(`
`),
    i = [],
    r = Math.max(t - 6, 0),
    s = Math.min(t + 6, e.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    i.push(`${a === t ? '>' : ' '} ${a}: ${e[o]}`);
  }
  return i.join(`
`);
}
function Y_(n) {
  const t = jt.getPrimaries(jt.workingColorSpace),
    e = jt.getPrimaries(n);
  let i;
  switch (
    (t === e
      ? (i = '')
      : t === Ps && e === As
      ? (i = 'LinearDisplayP3ToLinearSRGB')
      : t === As && e === Ps && (i = 'LinearSRGBToLinearDisplayP3'),
    n)
  ) {
    case qn:
    case Fs:
      return [i, 'LinearTransferOETF'];
    case Je:
    case Ra:
      return [i, 'sRGBTransferOETF'];
    default:
      return (
        console.warn('THREE.WebGLProgram: Unsupported color space:', n),
        [i, 'LinearTransferOETF']
      );
  }
}
function sc(n, t, e) {
  const i = n.getShaderParameter(t, n.COMPILE_STATUS),
    r = n.getShaderInfoLog(t).trim();
  if (i && r === '') return '';
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return (
      e.toUpperCase() +
      `

` +
      r +
      `

` +
      q_(n.getShaderSource(t), o)
    );
  } else return r;
}
function K_(n, t) {
  const e = Y_(t);
  return `vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`;
}
function $_(n, t) {
  let e;
  switch (t) {
    case ud:
      e = 'Linear';
      break;
    case dd:
      e = 'Reinhard';
      break;
    case pd:
      e = 'Cineon';
      break;
    case fd:
      e = 'ACESFilmic';
      break;
    case _d:
      e = 'AgX';
      break;
    case vd:
      e = 'Neutral';
      break;
    case md:
      e = 'Custom';
      break;
    default:
      console.warn('THREE.WebGLProgram: Unsupported toneMapping:', t),
        (e = 'Linear');
  }
  return (
    'vec3 ' + n + '( vec3 color ) { return ' + e + 'ToneMapping( color ); }'
  );
}
const ps = new I();
function Z_() {
  jt.getLuminanceCoefficients(ps);
  const n = ps.x.toFixed(4),
    t = ps.y.toFixed(4),
    e = ps.z.toFixed(4);
  return [
    'float luminance( const in vec3 rgb ) {',
    `	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,
    '	return dot( weights, rgb );',
    '}',
  ].join(`
`);
}
function J_(n) {
  return [
    n.extensionClipCullDistance
      ? '#extension GL_ANGLE_clip_cull_distance : require'
      : '',
    n.extensionMultiDraw ? '#extension GL_ANGLE_multi_draw : require' : '',
  ].filter(gr).join(`
`);
}
function Q_(n) {
  const t = [];
  for (const e in n) {
    const i = n[e];
    i !== !1 && t.push('#define ' + e + ' ' + i);
  }
  return t.join(`
`);
}
function tv(n, t) {
  const e = {},
    i = n.getProgramParameter(t, n.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const s = n.getActiveAttrib(t, r),
      o = s.name;
    let a = 1;
    s.type === n.FLOAT_MAT2 && (a = 2),
      s.type === n.FLOAT_MAT3 && (a = 3),
      s.type === n.FLOAT_MAT4 && (a = 4),
      (e[o] = {
        type: s.type,
        location: n.getAttribLocation(t, o),
        locationSize: a,
      });
  }
  return e;
}
function gr(n) {
  return n !== '';
}
function oc(n, t) {
  const e =
    t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return n
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, e)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function ac(n, t) {
  return n
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection
    );
}
const ev = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ma(n) {
  return n.replace(ev, iv);
}
const nv = new Map();
function iv(n, t) {
  let e = Lt[t];
  if (e === void 0) {
    const i = nv.get(t);
    if (i !== void 0)
      (e = Lt[i]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          t,
          i
        );
    else throw new Error('Can not resolve #include <' + t + '>');
  }
  return ma(e);
}
const rv =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function lc(n) {
  return n.replace(rv, sv);
}
function sv(n, t, e, i) {
  let r = '';
  for (let s = parseInt(t); s < parseInt(e); s++)
    r += i
      .replace(/\[\s*i\s*\]/g, '[ ' + s + ' ]')
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function cc(n) {
  let t = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;
  return (
    n.precision === 'highp'
      ? (t += `
#define HIGH_PRECISION`)
      : n.precision === 'mediump'
      ? (t += `
#define MEDIUM_PRECISION`)
      : n.precision === 'lowp' &&
        (t += `
#define LOW_PRECISION`),
    t
  );
}
function ov(n) {
  let t = 'SHADOWMAP_TYPE_BASIC';
  return (
    n.shadowMapType === jc
      ? (t = 'SHADOWMAP_TYPE_PCF')
      : n.shadowMapType === Fu
      ? (t = 'SHADOWMAP_TYPE_PCF_SOFT')
      : n.shadowMapType === gn && (t = 'SHADOWMAP_TYPE_VSM'),
    t
  );
}
function av(n) {
  let t = 'ENVMAP_TYPE_CUBE';
  if (n.envMap)
    switch (n.envMapMode) {
      case qi:
      case Yi:
        t = 'ENVMAP_TYPE_CUBE';
        break;
      case Os:
        t = 'ENVMAP_TYPE_CUBE_UV';
        break;
    }
  return t;
}
function lv(n) {
  let t = 'ENVMAP_MODE_REFLECTION';
  if (n.envMap)
    switch (n.envMapMode) {
      case Yi:
        t = 'ENVMAP_MODE_REFRACTION';
        break;
    }
  return t;
}
function cv(n) {
  let t = 'ENVMAP_BLENDING_NONE';
  if (n.envMap)
    switch (n.combine) {
      case qc:
        t = 'ENVMAP_BLENDING_MULTIPLY';
        break;
      case cd:
        t = 'ENVMAP_BLENDING_MIX';
        break;
      case hd:
        t = 'ENVMAP_BLENDING_ADD';
        break;
    }
  return t;
}
function hv(n) {
  const t = n.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2,
    i = 1 / t;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)),
    texelHeight: i,
    maxMip: e,
  };
}
function uv(n, t, e, i) {
  const r = n.getContext(),
    s = e.defines;
  let o = e.vertexShader,
    a = e.fragmentShader;
  const l = ov(e),
    c = av(e),
    h = lv(e),
    d = cv(e),
    p = hv(e),
    m = J_(e),
    g = Q_(s),
    b = r.createProgram();
  let f,
    u,
    S = e.glslVersion
      ? '#version ' +
        e.glslVersion +
        `
`
      : '';
  e.isRawShaderMaterial
    ? ((f = [
        '#define SHADER_TYPE ' + e.shaderType,
        '#define SHADER_NAME ' + e.shaderName,
        g,
      ].filter(gr).join(`
`)),
      f.length > 0 &&
        (f += `
`),
      (u = [
        '#define SHADER_TYPE ' + e.shaderType,
        '#define SHADER_NAME ' + e.shaderName,
        g,
      ].filter(gr).join(`
`)),
      u.length > 0 &&
        (u += `
`))
    : ((f = [
        cc(e),
        '#define SHADER_TYPE ' + e.shaderType,
        '#define SHADER_NAME ' + e.shaderName,
        g,
        e.extensionClipCullDistance ? '#define USE_CLIP_DISTANCE' : '',
        e.batching ? '#define USE_BATCHING' : '',
        e.batchingColor ? '#define USE_BATCHING_COLOR' : '',
        e.instancing ? '#define USE_INSTANCING' : '',
        e.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
        e.instancingMorph ? '#define USE_INSTANCING_MORPH' : '',
        e.useFog && e.fog ? '#define USE_FOG' : '',
        e.useFog && e.fogExp2 ? '#define FOG_EXP2' : '',
        e.map ? '#define USE_MAP' : '',
        e.envMap ? '#define USE_ENVMAP' : '',
        e.envMap ? '#define ' + h : '',
        e.lightMap ? '#define USE_LIGHTMAP' : '',
        e.aoMap ? '#define USE_AOMAP' : '',
        e.bumpMap ? '#define USE_BUMPMAP' : '',
        e.normalMap ? '#define USE_NORMALMAP' : '',
        e.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
        e.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
        e.displacementMap ? '#define USE_DISPLACEMENTMAP' : '',
        e.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        e.anisotropy ? '#define USE_ANISOTROPY' : '',
        e.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
        e.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        e.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        e.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        e.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        e.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        e.specularMap ? '#define USE_SPECULARMAP' : '',
        e.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
        e.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
        e.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        e.metalnessMap ? '#define USE_METALNESSMAP' : '',
        e.alphaMap ? '#define USE_ALPHAMAP' : '',
        e.alphaHash ? '#define USE_ALPHAHASH' : '',
        e.transmission ? '#define USE_TRANSMISSION' : '',
        e.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        e.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        e.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
        e.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
        e.mapUv ? '#define MAP_UV ' + e.mapUv : '',
        e.alphaMapUv ? '#define ALPHAMAP_UV ' + e.alphaMapUv : '',
        e.lightMapUv ? '#define LIGHTMAP_UV ' + e.lightMapUv : '',
        e.aoMapUv ? '#define AOMAP_UV ' + e.aoMapUv : '',
        e.emissiveMapUv ? '#define EMISSIVEMAP_UV ' + e.emissiveMapUv : '',
        e.bumpMapUv ? '#define BUMPMAP_UV ' + e.bumpMapUv : '',
        e.normalMapUv ? '#define NORMALMAP_UV ' + e.normalMapUv : '',
        e.displacementMapUv
          ? '#define DISPLACEMENTMAP_UV ' + e.displacementMapUv
          : '',
        e.metalnessMapUv ? '#define METALNESSMAP_UV ' + e.metalnessMapUv : '',
        e.roughnessMapUv ? '#define ROUGHNESSMAP_UV ' + e.roughnessMapUv : '',
        e.anisotropyMapUv
          ? '#define ANISOTROPYMAP_UV ' + e.anisotropyMapUv
          : '',
        e.clearcoatMapUv ? '#define CLEARCOATMAP_UV ' + e.clearcoatMapUv : '',
        e.clearcoatNormalMapUv
          ? '#define CLEARCOAT_NORMALMAP_UV ' + e.clearcoatNormalMapUv
          : '',
        e.clearcoatRoughnessMapUv
          ? '#define CLEARCOAT_ROUGHNESSMAP_UV ' + e.clearcoatRoughnessMapUv
          : '',
        e.iridescenceMapUv
          ? '#define IRIDESCENCEMAP_UV ' + e.iridescenceMapUv
          : '',
        e.iridescenceThicknessMapUv
          ? '#define IRIDESCENCE_THICKNESSMAP_UV ' + e.iridescenceThicknessMapUv
          : '',
        e.sheenColorMapUv
          ? '#define SHEEN_COLORMAP_UV ' + e.sheenColorMapUv
          : '',
        e.sheenRoughnessMapUv
          ? '#define SHEEN_ROUGHNESSMAP_UV ' + e.sheenRoughnessMapUv
          : '',
        e.specularMapUv ? '#define SPECULARMAP_UV ' + e.specularMapUv : '',
        e.specularColorMapUv
          ? '#define SPECULAR_COLORMAP_UV ' + e.specularColorMapUv
          : '',
        e.specularIntensityMapUv
          ? '#define SPECULAR_INTENSITYMAP_UV ' + e.specularIntensityMapUv
          : '',
        e.transmissionMapUv
          ? '#define TRANSMISSIONMAP_UV ' + e.transmissionMapUv
          : '',
        e.thicknessMapUv ? '#define THICKNESSMAP_UV ' + e.thicknessMapUv : '',
        e.vertexTangents && e.flatShading === !1 ? '#define USE_TANGENT' : '',
        e.vertexColors ? '#define USE_COLOR' : '',
        e.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        e.vertexUv1s ? '#define USE_UV1' : '',
        e.vertexUv2s ? '#define USE_UV2' : '',
        e.vertexUv3s ? '#define USE_UV3' : '',
        e.pointsUvs ? '#define USE_POINTS_UV' : '',
        e.flatShading ? '#define FLAT_SHADED' : '',
        e.skinning ? '#define USE_SKINNING' : '',
        e.morphTargets ? '#define USE_MORPHTARGETS' : '',
        e.morphNormals && e.flatShading === !1
          ? '#define USE_MORPHNORMALS'
          : '',
        e.morphColors ? '#define USE_MORPHCOLORS' : '',
        e.morphTargetsCount > 0
          ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + e.morphTextureStride
          : '',
        e.morphTargetsCount > 0
          ? '#define MORPHTARGETS_COUNT ' + e.morphTargetsCount
          : '',
        e.doubleSided ? '#define DOUBLE_SIDED' : '',
        e.flipSided ? '#define FLIP_SIDED' : '',
        e.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        e.shadowMapEnabled ? '#define ' + l : '',
        e.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
        e.numLightProbes > 0 ? '#define USE_LIGHT_PROBES' : '',
        e.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        'uniform mat4 modelMatrix;',
        'uniform mat4 modelViewMatrix;',
        'uniform mat4 projectionMatrix;',
        'uniform mat4 viewMatrix;',
        'uniform mat3 normalMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        '#ifdef USE_INSTANCING',
        '	attribute mat4 instanceMatrix;',
        '#endif',
        '#ifdef USE_INSTANCING_COLOR',
        '	attribute vec3 instanceColor;',
        '#endif',
        '#ifdef USE_INSTANCING_MORPH',
        '	uniform sampler2D morphTexture;',
        '#endif',
        'attribute vec3 position;',
        'attribute vec3 normal;',
        'attribute vec2 uv;',
        '#ifdef USE_UV1',
        '	attribute vec2 uv1;',
        '#endif',
        '#ifdef USE_UV2',
        '	attribute vec2 uv2;',
        '#endif',
        '#ifdef USE_UV3',
        '	attribute vec2 uv3;',
        '#endif',
        '#ifdef USE_TANGENT',
        '	attribute vec4 tangent;',
        '#endif',
        '#if defined( USE_COLOR_ALPHA )',
        '	attribute vec4 color;',
        '#elif defined( USE_COLOR )',
        '	attribute vec3 color;',
        '#endif',
        '#ifdef USE_SKINNING',
        '	attribute vec4 skinIndex;',
        '	attribute vec4 skinWeight;',
        '#endif',
        `
`,
      ].filter(gr).join(`
`)),
      (u = [
        cc(e),
        '#define SHADER_TYPE ' + e.shaderType,
        '#define SHADER_NAME ' + e.shaderName,
        g,
        e.useFog && e.fog ? '#define USE_FOG' : '',
        e.useFog && e.fogExp2 ? '#define FOG_EXP2' : '',
        e.alphaToCoverage ? '#define ALPHA_TO_COVERAGE' : '',
        e.map ? '#define USE_MAP' : '',
        e.matcap ? '#define USE_MATCAP' : '',
        e.envMap ? '#define USE_ENVMAP' : '',
        e.envMap ? '#define ' + c : '',
        e.envMap ? '#define ' + h : '',
        e.envMap ? '#define ' + d : '',
        p ? '#define CUBEUV_TEXEL_WIDTH ' + p.texelWidth : '',
        p ? '#define CUBEUV_TEXEL_HEIGHT ' + p.texelHeight : '',
        p ? '#define CUBEUV_MAX_MIP ' + p.maxMip + '.0' : '',
        e.lightMap ? '#define USE_LIGHTMAP' : '',
        e.aoMap ? '#define USE_AOMAP' : '',
        e.bumpMap ? '#define USE_BUMPMAP' : '',
        e.normalMap ? '#define USE_NORMALMAP' : '',
        e.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
        e.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
        e.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        e.anisotropy ? '#define USE_ANISOTROPY' : '',
        e.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
        e.clearcoat ? '#define USE_CLEARCOAT' : '',
        e.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        e.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        e.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        e.dispersion ? '#define USE_DISPERSION' : '',
        e.iridescence ? '#define USE_IRIDESCENCE' : '',
        e.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        e.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        e.specularMap ? '#define USE_SPECULARMAP' : '',
        e.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
        e.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
        e.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        e.metalnessMap ? '#define USE_METALNESSMAP' : '',
        e.alphaMap ? '#define USE_ALPHAMAP' : '',
        e.alphaTest ? '#define USE_ALPHATEST' : '',
        e.alphaHash ? '#define USE_ALPHAHASH' : '',
        e.sheen ? '#define USE_SHEEN' : '',
        e.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
        e.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
        e.transmission ? '#define USE_TRANSMISSION' : '',
        e.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        e.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        e.vertexTangents && e.flatShading === !1 ? '#define USE_TANGENT' : '',
        e.vertexColors || e.instancingColor || e.batchingColor
          ? '#define USE_COLOR'
          : '',
        e.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        e.vertexUv1s ? '#define USE_UV1' : '',
        e.vertexUv2s ? '#define USE_UV2' : '',
        e.vertexUv3s ? '#define USE_UV3' : '',
        e.pointsUvs ? '#define USE_POINTS_UV' : '',
        e.gradientMap ? '#define USE_GRADIENTMAP' : '',
        e.flatShading ? '#define FLAT_SHADED' : '',
        e.doubleSided ? '#define DOUBLE_SIDED' : '',
        e.flipSided ? '#define FLIP_SIDED' : '',
        e.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        e.shadowMapEnabled ? '#define ' + l : '',
        e.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
        e.numLightProbes > 0 ? '#define USE_LIGHT_PROBES' : '',
        e.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
        e.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        'uniform mat4 viewMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        e.toneMapping !== Hn ? '#define TONE_MAPPING' : '',
        e.toneMapping !== Hn ? Lt.tonemapping_pars_fragment : '',
        e.toneMapping !== Hn ? $_('toneMapping', e.toneMapping) : '',
        e.dithering ? '#define DITHERING' : '',
        e.opaque ? '#define OPAQUE' : '',
        Lt.colorspace_pars_fragment,
        K_('linearToOutputTexel', e.outputColorSpace),
        Z_(),
        e.useDepthPacking ? '#define DEPTH_PACKING ' + e.depthPacking : '',
        `
`,
      ].filter(gr).join(`
`))),
    (o = ma(o)),
    (o = oc(o, e)),
    (o = ac(o, e)),
    (a = ma(a)),
    (a = oc(a, e)),
    (a = ac(a, e)),
    (o = lc(o)),
    (a = lc(a)),
    e.isRawShaderMaterial !== !0 &&
      ((S = `#version 300 es
`),
      (f =
        [
          m,
          '#define attribute in',
          '#define varying out',
          '#define texture2D texture',
        ].join(`
`) +
        `
` +
        f),
      (u =
        [
          '#define varying in',
          e.glslVersion === Sl
            ? ''
            : 'layout(location = 0) out highp vec4 pc_fragColor;',
          e.glslVersion === Sl ? '' : '#define gl_FragColor pc_fragColor',
          '#define gl_FragDepthEXT gl_FragDepth',
          '#define texture2D texture',
          '#define textureCube texture',
          '#define texture2DProj textureProj',
          '#define texture2DLodEXT textureLod',
          '#define texture2DProjLodEXT textureProjLod',
          '#define textureCubeLodEXT textureLod',
          '#define texture2DGradEXT textureGrad',
          '#define texture2DProjGradEXT textureProjGrad',
          '#define textureCubeGradEXT textureGrad',
        ].join(`
`) +
        `
` +
        u));
  const M = S + f + o,
    y = S + u + a,
    F = rc(r, r.VERTEX_SHADER, M),
    A = rc(r, r.FRAGMENT_SHADER, y);
  r.attachShader(b, F),
    r.attachShader(b, A),
    e.index0AttributeName !== void 0
      ? r.bindAttribLocation(b, 0, e.index0AttributeName)
      : e.morphTargets === !0 && r.bindAttribLocation(b, 0, 'position'),
    r.linkProgram(b);
  function T(P) {
    if (n.debug.checkShaderErrors) {
      const H = r.getProgramInfoLog(b).trim(),
        k = r.getShaderInfoLog(F).trim(),
        Y = r.getShaderInfoLog(A).trim();
      let q = !0,
        G = !0;
      if (r.getProgramParameter(b, r.LINK_STATUS) === !1)
        if (((q = !1), typeof n.debug.onShaderError == 'function'))
          n.debug.onShaderError(r, b, F, A);
        else {
          const $ = sc(r, F, 'vertex'),
            V = sc(r, A, 'fragment');
          console.error(
            'THREE.WebGLProgram: Shader Error ' +
              r.getError() +
              ' - VALIDATE_STATUS ' +
              r.getProgramParameter(b, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              P.name +
              `
Material Type: ` +
              P.type +
              `

Program Info Log: ` +
              H +
              `
` +
              $ +
              `
` +
              V
          );
        }
      else
        H !== ''
          ? console.warn('THREE.WebGLProgram: Program Info Log:', H)
          : (k === '' || Y === '') && (G = !1);
      G &&
        (P.diagnostics = {
          runnable: q,
          programLog: H,
          vertexShader: { log: k, prefix: f },
          fragmentShader: { log: Y, prefix: u },
        });
    }
    r.deleteShader(F), r.deleteShader(A), (B = new Es(r, b)), (w = tv(r, b));
  }
  let B;
  this.getUniforms = function () {
    return B === void 0 && T(this), B;
  };
  let w;
  this.getAttributes = function () {
    return w === void 0 && T(this), w;
  };
  let x = e.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return x === !1 && (x = r.getProgramParameter(b, X_)), x;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        r.deleteProgram(b),
        (this.program = void 0);
    }),
    (this.type = e.shaderType),
    (this.name = e.shaderName),
    (this.id = j_++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = b),
    (this.vertexShader = F),
    (this.fragmentShader = A),
    this
  );
}
let dv = 0;
class pv {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(t) {
    const e = t.vertexShader,
      i = t.fragmentShader,
      r = this._getShaderStage(e),
      s = this._getShaderStage(i),
      o = this._getShaderCacheForMaterial(t);
    return (
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      this
    );
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const i of e)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let i = e.get(t);
    return i === void 0 && ((i = new Set()), e.set(t, i)), i;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let i = e.get(t);
    return i === void 0 && ((i = new fv(t)), e.set(t, i)), i;
  }
}
class fv {
  constructor(t) {
    (this.id = dv++), (this.code = t), (this.usedTimes = 0);
  }
}
function mv(n, t, e, i, r, s, o) {
  const a = new uh(),
    l = new pv(),
    c = new Set(),
    h = [],
    d = r.logarithmicDepthBuffer,
    p = r.vertexTextures;
  let m = r.precision;
  const g = {
    MeshDepthMaterial: 'depth',
    MeshDistanceMaterial: 'distanceRGBA',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshToonMaterial: 'toon',
    MeshStandardMaterial: 'physical',
    MeshPhysicalMaterial: 'physical',
    MeshMatcapMaterial: 'matcap',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points',
    ShadowMaterial: 'shadow',
    SpriteMaterial: 'sprite',
  };
  function b(w) {
    return c.add(w), w === 0 ? 'uv' : `uv${w}`;
  }
  function f(w, x, P, H, k) {
    const Y = H.fog,
      q = k.geometry,
      G = w.isMeshStandardMaterial ? H.environment : null,
      $ = (w.isMeshStandardMaterial ? e : t).get(w.envMap || G),
      V = $ && $.mapping === Os ? $.image.height : null,
      ot = g[w.type];
    w.precision !== null &&
      ((m = r.getMaxPrecision(w.precision)),
      m !== w.precision &&
        console.warn(
          'THREE.WebGLProgram.getParameters:',
          w.precision,
          'not supported, using',
          m,
          'instead.'
        ));
    const ht =
        q.morphAttributes.position ||
        q.morphAttributes.normal ||
        q.morphAttributes.color,
      mt = ht !== void 0 ? ht.length : 0;
    let Ot = 0;
    q.morphAttributes.position !== void 0 && (Ot = 1),
      q.morphAttributes.normal !== void 0 && (Ot = 2),
      q.morphAttributes.color !== void 0 && (Ot = 3);
    let Kt, z, J, ft;
    if (ot) {
      const Ht = nn[ot];
      (Kt = Ht.vertexShader), (z = Ht.fragmentShader);
    } else
      (Kt = w.vertexShader),
        (z = w.fragmentShader),
        l.update(w),
        (J = l.getVertexShaderID(w)),
        (ft = l.getFragmentShaderID(w));
    const lt = n.getRenderTarget(),
      wt = k.isInstancedMesh === !0,
      At = k.isBatchedMesh === !0,
      Nt = !!w.map,
      re = !!w.matcap,
      C = !!$,
      ce = !!w.aoMap,
      Yt = !!w.lightMap,
      $t = !!w.bumpMap,
      gt = !!w.normalMap,
      he = !!w.displacementMap,
      Ct = !!w.emissiveMap,
      Pt = !!w.metalnessMap,
      E = !!w.roughnessMap,
      _ = w.anisotropy > 0,
      O = w.clearcoat > 0,
      j = w.dispersion > 0,
      Z = w.iridescence > 0,
      K = w.sheen > 0,
      xt = w.transmission > 0,
      rt = _ && !!w.anisotropyMap,
      ct = O && !!w.clearcoatMap,
      Rt = O && !!w.clearcoatNormalMap,
      Q = O && !!w.clearcoatRoughnessMap,
      at = Z && !!w.iridescenceMap,
      Ft = Z && !!w.iridescenceThicknessMap,
      St = K && !!w.sheenColorMap,
      ut = K && !!w.sheenRoughnessMap,
      Tt = !!w.specularMap,
      Ut = !!w.specularColorMap,
      ne = !!w.specularIntensityMap,
      R = xt && !!w.transmissionMap,
      tt = xt && !!w.thicknessMap,
      W = !!w.gradientMap,
      X = !!w.alphaMap,
      nt = w.alphaTest > 0,
      bt = !!w.alphaHash,
      Bt = !!w.extensions;
    let ue = Hn;
    w.toneMapped &&
      (lt === null || lt.isXRRenderTarget === !0) &&
      (ue = n.toneMapping);
    const be = {
      shaderID: ot,
      shaderType: w.type,
      shaderName: w.name,
      vertexShader: Kt,
      fragmentShader: z,
      defines: w.defines,
      customVertexShaderID: J,
      customFragmentShaderID: ft,
      isRawShaderMaterial: w.isRawShaderMaterial === !0,
      glslVersion: w.glslVersion,
      precision: m,
      batching: At,
      batchingColor: At && k._colorsTexture !== null,
      instancing: wt,
      instancingColor: wt && k.instanceColor !== null,
      instancingMorph: wt && k.morphTexture !== null,
      supportsVertexTextures: p,
      outputColorSpace:
        lt === null
          ? n.outputColorSpace
          : lt.isXRRenderTarget === !0
          ? lt.texture.colorSpace
          : qn,
      alphaToCoverage: !!w.alphaToCoverage,
      map: Nt,
      matcap: re,
      envMap: C,
      envMapMode: C && $.mapping,
      envMapCubeUVHeight: V,
      aoMap: ce,
      lightMap: Yt,
      bumpMap: $t,
      normalMap: gt,
      displacementMap: p && he,
      emissiveMap: Ct,
      normalMapObjectSpace: gt && w.normalMapType === Md,
      normalMapTangentSpace: gt && w.normalMapType === sh,
      metalnessMap: Pt,
      roughnessMap: E,
      anisotropy: _,
      anisotropyMap: rt,
      clearcoat: O,
      clearcoatMap: ct,
      clearcoatNormalMap: Rt,
      clearcoatRoughnessMap: Q,
      dispersion: j,
      iridescence: Z,
      iridescenceMap: at,
      iridescenceThicknessMap: Ft,
      sheen: K,
      sheenColorMap: St,
      sheenRoughnessMap: ut,
      specularMap: Tt,
      specularColorMap: Ut,
      specularIntensityMap: ne,
      transmission: xt,
      transmissionMap: R,
      thicknessMap: tt,
      gradientMap: W,
      opaque:
        w.transparent === !1 && w.blending === Hi && w.alphaToCoverage === !1,
      alphaMap: X,
      alphaTest: nt,
      alphaHash: bt,
      combine: w.combine,
      mapUv: Nt && b(w.map.channel),
      aoMapUv: ce && b(w.aoMap.channel),
      lightMapUv: Yt && b(w.lightMap.channel),
      bumpMapUv: $t && b(w.bumpMap.channel),
      normalMapUv: gt && b(w.normalMap.channel),
      displacementMapUv: he && b(w.displacementMap.channel),
      emissiveMapUv: Ct && b(w.emissiveMap.channel),
      metalnessMapUv: Pt && b(w.metalnessMap.channel),
      roughnessMapUv: E && b(w.roughnessMap.channel),
      anisotropyMapUv: rt && b(w.anisotropyMap.channel),
      clearcoatMapUv: ct && b(w.clearcoatMap.channel),
      clearcoatNormalMapUv: Rt && b(w.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Q && b(w.clearcoatRoughnessMap.channel),
      iridescenceMapUv: at && b(w.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ft && b(w.iridescenceThicknessMap.channel),
      sheenColorMapUv: St && b(w.sheenColorMap.channel),
      sheenRoughnessMapUv: ut && b(w.sheenRoughnessMap.channel),
      specularMapUv: Tt && b(w.specularMap.channel),
      specularColorMapUv: Ut && b(w.specularColorMap.channel),
      specularIntensityMapUv: ne && b(w.specularIntensityMap.channel),
      transmissionMapUv: R && b(w.transmissionMap.channel),
      thicknessMapUv: tt && b(w.thicknessMap.channel),
      alphaMapUv: X && b(w.alphaMap.channel),
      vertexTangents: !!q.attributes.tangent && (gt || _),
      vertexColors: w.vertexColors,
      vertexAlphas:
        w.vertexColors === !0 &&
        !!q.attributes.color &&
        q.attributes.color.itemSize === 4,
      pointsUvs: k.isPoints === !0 && !!q.attributes.uv && (Nt || X),
      fog: !!Y,
      useFog: w.fog === !0,
      fogExp2: !!Y && Y.isFogExp2,
      flatShading: w.flatShading === !0,
      sizeAttenuation: w.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: k.isSkinnedMesh === !0,
      morphTargets: q.morphAttributes.position !== void 0,
      morphNormals: q.morphAttributes.normal !== void 0,
      morphColors: q.morphAttributes.color !== void 0,
      morphTargetsCount: mt,
      morphTextureStride: Ot,
      numDirLights: x.directional.length,
      numPointLights: x.point.length,
      numSpotLights: x.spot.length,
      numSpotLightMaps: x.spotLightMap.length,
      numRectAreaLights: x.rectArea.length,
      numHemiLights: x.hemi.length,
      numDirLightShadows: x.directionalShadowMap.length,
      numPointLightShadows: x.pointShadowMap.length,
      numSpotLightShadows: x.spotShadowMap.length,
      numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
      numLightProbes: x.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: w.dithering,
      shadowMapEnabled: n.shadowMap.enabled && P.length > 0,
      shadowMapType: n.shadowMap.type,
      toneMapping: ue,
      decodeVideoTexture:
        Nt &&
        w.map.isVideoTexture === !0 &&
        jt.getTransfer(w.map.colorSpace) === Qt,
      premultipliedAlpha: w.premultipliedAlpha,
      doubleSided: w.side === xn,
      flipSided: w.side === De,
      useDepthPacking: w.depthPacking >= 0,
      depthPacking: w.depthPacking || 0,
      index0AttributeName: w.index0AttributeName,
      extensionClipCullDistance:
        Bt &&
        w.extensions.clipCullDistance === !0 &&
        i.has('WEBGL_clip_cull_distance'),
      extensionMultiDraw:
        ((Bt && w.extensions.multiDraw === !0) || At) &&
        i.has('WEBGL_multi_draw'),
      rendererExtensionParallelShaderCompile: i.has(
        'KHR_parallel_shader_compile'
      ),
      customProgramCacheKey: w.customProgramCacheKey(),
    };
    return (
      (be.vertexUv1s = c.has(1)),
      (be.vertexUv2s = c.has(2)),
      (be.vertexUv3s = c.has(3)),
      c.clear(),
      be
    );
  }
  function u(w) {
    const x = [];
    if (
      (w.shaderID
        ? x.push(w.shaderID)
        : (x.push(w.customVertexShaderID), x.push(w.customFragmentShaderID)),
      w.defines !== void 0)
    )
      for (const P in w.defines) x.push(P), x.push(w.defines[P]);
    return (
      w.isRawShaderMaterial === !1 &&
        (S(x, w), M(x, w), x.push(n.outputColorSpace)),
      x.push(w.customProgramCacheKey),
      x.join()
    );
  }
  function S(w, x) {
    w.push(x.precision),
      w.push(x.outputColorSpace),
      w.push(x.envMapMode),
      w.push(x.envMapCubeUVHeight),
      w.push(x.mapUv),
      w.push(x.alphaMapUv),
      w.push(x.lightMapUv),
      w.push(x.aoMapUv),
      w.push(x.bumpMapUv),
      w.push(x.normalMapUv),
      w.push(x.displacementMapUv),
      w.push(x.emissiveMapUv),
      w.push(x.metalnessMapUv),
      w.push(x.roughnessMapUv),
      w.push(x.anisotropyMapUv),
      w.push(x.clearcoatMapUv),
      w.push(x.clearcoatNormalMapUv),
      w.push(x.clearcoatRoughnessMapUv),
      w.push(x.iridescenceMapUv),
      w.push(x.iridescenceThicknessMapUv),
      w.push(x.sheenColorMapUv),
      w.push(x.sheenRoughnessMapUv),
      w.push(x.specularMapUv),
      w.push(x.specularColorMapUv),
      w.push(x.specularIntensityMapUv),
      w.push(x.transmissionMapUv),
      w.push(x.thicknessMapUv),
      w.push(x.combine),
      w.push(x.fogExp2),
      w.push(x.sizeAttenuation),
      w.push(x.morphTargetsCount),
      w.push(x.morphAttributeCount),
      w.push(x.numDirLights),
      w.push(x.numPointLights),
      w.push(x.numSpotLights),
      w.push(x.numSpotLightMaps),
      w.push(x.numHemiLights),
      w.push(x.numRectAreaLights),
      w.push(x.numDirLightShadows),
      w.push(x.numPointLightShadows),
      w.push(x.numSpotLightShadows),
      w.push(x.numSpotLightShadowsWithMaps),
      w.push(x.numLightProbes),
      w.push(x.shadowMapType),
      w.push(x.toneMapping),
      w.push(x.numClippingPlanes),
      w.push(x.numClipIntersection),
      w.push(x.depthPacking);
  }
  function M(w, x) {
    a.disableAll(),
      x.supportsVertexTextures && a.enable(0),
      x.instancing && a.enable(1),
      x.instancingColor && a.enable(2),
      x.instancingMorph && a.enable(3),
      x.matcap && a.enable(4),
      x.envMap && a.enable(5),
      x.normalMapObjectSpace && a.enable(6),
      x.normalMapTangentSpace && a.enable(7),
      x.clearcoat && a.enable(8),
      x.iridescence && a.enable(9),
      x.alphaTest && a.enable(10),
      x.vertexColors && a.enable(11),
      x.vertexAlphas && a.enable(12),
      x.vertexUv1s && a.enable(13),
      x.vertexUv2s && a.enable(14),
      x.vertexUv3s && a.enable(15),
      x.vertexTangents && a.enable(16),
      x.anisotropy && a.enable(17),
      x.alphaHash && a.enable(18),
      x.batching && a.enable(19),
      x.dispersion && a.enable(20),
      x.batchingColor && a.enable(21),
      w.push(a.mask),
      a.disableAll(),
      x.fog && a.enable(0),
      x.useFog && a.enable(1),
      x.flatShading && a.enable(2),
      x.logarithmicDepthBuffer && a.enable(3),
      x.skinning && a.enable(4),
      x.morphTargets && a.enable(5),
      x.morphNormals && a.enable(6),
      x.morphColors && a.enable(7),
      x.premultipliedAlpha && a.enable(8),
      x.shadowMapEnabled && a.enable(9),
      x.doubleSided && a.enable(10),
      x.flipSided && a.enable(11),
      x.useDepthPacking && a.enable(12),
      x.dithering && a.enable(13),
      x.transmission && a.enable(14),
      x.sheen && a.enable(15),
      x.opaque && a.enable(16),
      x.pointsUvs && a.enable(17),
      x.decodeVideoTexture && a.enable(18),
      x.alphaToCoverage && a.enable(19),
      w.push(a.mask);
  }
  function y(w) {
    const x = g[w.type];
    let P;
    if (x) {
      const H = nn[x];
      P = $d.clone(H.uniforms);
    } else P = w.uniforms;
    return P;
  }
  function F(w, x) {
    let P;
    for (let H = 0, k = h.length; H < k; H++) {
      const Y = h[H];
      if (Y.cacheKey === x) {
        (P = Y), ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && ((P = new uv(n, x, w, s)), h.push(P)), P;
  }
  function A(w) {
    if (--w.usedTimes === 0) {
      const x = h.indexOf(w);
      (h[x] = h[h.length - 1]), h.pop(), w.destroy();
    }
  }
  function T(w) {
    l.remove(w);
  }
  function B() {
    l.dispose();
  }
  return {
    getParameters: f,
    getProgramCacheKey: u,
    getUniforms: y,
    acquireProgram: F,
    releaseProgram: A,
    releaseShaderCache: T,
    programs: h,
    dispose: B,
  };
}
function _v() {
  let n = new WeakMap();
  function t(o) {
    return n.has(o);
  }
  function e(o) {
    let a = n.get(o);
    return a === void 0 && ((a = {}), n.set(o, a)), a;
  }
  function i(o) {
    n.delete(o);
  }
  function r(o, a, l) {
    n.get(o)[a] = l;
  }
  function s() {
    n = new WeakMap();
  }
  return { has: t, get: e, remove: i, update: r, dispose: s };
}
function vv(n, t) {
  return n.groupOrder !== t.groupOrder
    ? n.groupOrder - t.groupOrder
    : n.renderOrder !== t.renderOrder
    ? n.renderOrder - t.renderOrder
    : n.material.id !== t.material.id
    ? n.material.id - t.material.id
    : n.z !== t.z
    ? n.z - t.z
    : n.id - t.id;
}
function hc(n, t) {
  return n.groupOrder !== t.groupOrder
    ? n.groupOrder - t.groupOrder
    : n.renderOrder !== t.renderOrder
    ? n.renderOrder - t.renderOrder
    : n.z !== t.z
    ? t.z - n.z
    : n.id - t.id;
}
function uc() {
  const n = [];
  let t = 0;
  const e = [],
    i = [],
    r = [];
  function s() {
    (t = 0), (e.length = 0), (i.length = 0), (r.length = 0);
  }
  function o(d, p, m, g, b, f) {
    let u = n[t];
    return (
      u === void 0
        ? ((u = {
            id: d.id,
            object: d,
            geometry: p,
            material: m,
            groupOrder: g,
            renderOrder: d.renderOrder,
            z: b,
            group: f,
          }),
          (n[t] = u))
        : ((u.id = d.id),
          (u.object = d),
          (u.geometry = p),
          (u.material = m),
          (u.groupOrder = g),
          (u.renderOrder = d.renderOrder),
          (u.z = b),
          (u.group = f)),
      t++,
      u
    );
  }
  function a(d, p, m, g, b, f) {
    const u = o(d, p, m, g, b, f);
    m.transmission > 0
      ? i.push(u)
      : m.transparent === !0
      ? r.push(u)
      : e.push(u);
  }
  function l(d, p, m, g, b, f) {
    const u = o(d, p, m, g, b, f);
    m.transmission > 0
      ? i.unshift(u)
      : m.transparent === !0
      ? r.unshift(u)
      : e.unshift(u);
  }
  function c(d, p) {
    e.length > 1 && e.sort(d || vv),
      i.length > 1 && i.sort(p || hc),
      r.length > 1 && r.sort(p || hc);
  }
  function h() {
    for (let d = t, p = n.length; d < p; d++) {
      const m = n[d];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: e,
    transmissive: i,
    transparent: r,
    init: s,
    push: a,
    unshift: l,
    finish: h,
    sort: c,
  };
}
function gv() {
  let n = new WeakMap();
  function t(i, r) {
    const s = n.get(i);
    let o;
    return (
      s === void 0
        ? ((o = new uc()), n.set(i, [o]))
        : r >= s.length
        ? ((o = new uc()), s.push(o))
        : (o = s[r]),
      o
    );
  }
  function e() {
    n = new WeakMap();
  }
  return { get: t, dispose: e };
}
function xv() {
  const n = {};
  return {
    get: function (t) {
      if (n[t.id] !== void 0) return n[t.id];
      let e;
      switch (t.type) {
        case 'DirectionalLight':
          e = { direction: new I(), color: new zt() };
          break;
        case 'SpotLight':
          e = {
            position: new I(),
            direction: new I(),
            color: new zt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case 'PointLight':
          e = { position: new I(), color: new zt(), distance: 0, decay: 0 };
          break;
        case 'HemisphereLight':
          e = { direction: new I(), skyColor: new zt(), groundColor: new zt() };
          break;
        case 'RectAreaLight':
          e = {
            color: new zt(),
            position: new I(),
            halfWidth: new I(),
            halfHeight: new I(),
          };
          break;
      }
      return (n[t.id] = e), e;
    },
  };
}
function bv() {
  const n = {};
  return {
    get: function (t) {
      if (n[t.id] !== void 0) return n[t.id];
      let e;
      switch (t.type) {
        case 'DirectionalLight':
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new yt(),
          };
          break;
        case 'SpotLight':
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new yt(),
          };
          break;
        case 'PointLight':
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new yt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (n[t.id] = e), e;
    },
  };
}
let Mv = 0;
function wv(n, t) {
  return (
    (t.castShadow ? 2 : 0) -
    (n.castShadow ? 2 : 0) +
    (t.map ? 1 : 0) -
    (n.map ? 1 : 0)
  );
}
function Ev(n) {
  const t = new xv(),
    e = bv(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let c = 0; c < 9; c++) i.probe.push(new I());
  const r = new I(),
    s = new le(),
    o = new le();
  function a(c) {
    let h = 0,
      d = 0,
      p = 0;
    for (let w = 0; w < 9; w++) i.probe[w].set(0, 0, 0);
    let m = 0,
      g = 0,
      b = 0,
      f = 0,
      u = 0,
      S = 0,
      M = 0,
      y = 0,
      F = 0,
      A = 0,
      T = 0;
    c.sort(wv);
    for (let w = 0, x = c.length; w < x; w++) {
      const P = c[w],
        H = P.color,
        k = P.intensity,
        Y = P.distance,
        q = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight) (h += H.r * k), (d += H.g * k), (p += H.b * k);
      else if (P.isLightProbe) {
        for (let G = 0; G < 9; G++)
          i.probe[G].addScaledVector(P.sh.coefficients[G], k);
        T++;
      } else if (P.isDirectionalLight) {
        const G = t.get(P);
        if ((G.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow)) {
          const $ = P.shadow,
            V = e.get(P);
          (V.shadowIntensity = $.intensity),
            (V.shadowBias = $.bias),
            (V.shadowNormalBias = $.normalBias),
            (V.shadowRadius = $.radius),
            (V.shadowMapSize = $.mapSize),
            (i.directionalShadow[m] = V),
            (i.directionalShadowMap[m] = q),
            (i.directionalShadowMatrix[m] = P.shadow.matrix),
            S++;
        }
        (i.directional[m] = G), m++;
      } else if (P.isSpotLight) {
        const G = t.get(P);
        G.position.setFromMatrixPosition(P.matrixWorld),
          G.color.copy(H).multiplyScalar(k),
          (G.distance = Y),
          (G.coneCos = Math.cos(P.angle)),
          (G.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
          (G.decay = P.decay),
          (i.spot[b] = G);
        const $ = P.shadow;
        if (
          (P.map &&
            ((i.spotLightMap[F] = P.map),
            F++,
            $.updateMatrices(P),
            P.castShadow && A++),
          (i.spotLightMatrix[b] = $.matrix),
          P.castShadow)
        ) {
          const V = e.get(P);
          (V.shadowIntensity = $.intensity),
            (V.shadowBias = $.bias),
            (V.shadowNormalBias = $.normalBias),
            (V.shadowRadius = $.radius),
            (V.shadowMapSize = $.mapSize),
            (i.spotShadow[b] = V),
            (i.spotShadowMap[b] = q),
            y++;
        }
        b++;
      } else if (P.isRectAreaLight) {
        const G = t.get(P);
        G.color.copy(H).multiplyScalar(k),
          G.halfWidth.set(P.width * 0.5, 0, 0),
          G.halfHeight.set(0, P.height * 0.5, 0),
          (i.rectArea[f] = G),
          f++;
      } else if (P.isPointLight) {
        const G = t.get(P);
        if (
          (G.color.copy(P.color).multiplyScalar(P.intensity),
          (G.distance = P.distance),
          (G.decay = P.decay),
          P.castShadow)
        ) {
          const $ = P.shadow,
            V = e.get(P);
          (V.shadowIntensity = $.intensity),
            (V.shadowBias = $.bias),
            (V.shadowNormalBias = $.normalBias),
            (V.shadowRadius = $.radius),
            (V.shadowMapSize = $.mapSize),
            (V.shadowCameraNear = $.camera.near),
            (V.shadowCameraFar = $.camera.far),
            (i.pointShadow[g] = V),
            (i.pointShadowMap[g] = q),
            (i.pointShadowMatrix[g] = P.shadow.matrix),
            M++;
        }
        (i.point[g] = G), g++;
      } else if (P.isHemisphereLight) {
        const G = t.get(P);
        G.skyColor.copy(P.color).multiplyScalar(k),
          G.groundColor.copy(P.groundColor).multiplyScalar(k),
          (i.hemi[u] = G),
          u++;
      }
    }
    f > 0 &&
      (n.has('OES_texture_float_linear') === !0
        ? ((i.rectAreaLTC1 = it.LTC_FLOAT_1), (i.rectAreaLTC2 = it.LTC_FLOAT_2))
        : ((i.rectAreaLTC1 = it.LTC_HALF_1), (i.rectAreaLTC2 = it.LTC_HALF_2))),
      (i.ambient[0] = h),
      (i.ambient[1] = d),
      (i.ambient[2] = p);
    const B = i.hash;
    (B.directionalLength !== m ||
      B.pointLength !== g ||
      B.spotLength !== b ||
      B.rectAreaLength !== f ||
      B.hemiLength !== u ||
      B.numDirectionalShadows !== S ||
      B.numPointShadows !== M ||
      B.numSpotShadows !== y ||
      B.numSpotMaps !== F ||
      B.numLightProbes !== T) &&
      ((i.directional.length = m),
      (i.spot.length = b),
      (i.rectArea.length = f),
      (i.point.length = g),
      (i.hemi.length = u),
      (i.directionalShadow.length = S),
      (i.directionalShadowMap.length = S),
      (i.pointShadow.length = M),
      (i.pointShadowMap.length = M),
      (i.spotShadow.length = y),
      (i.spotShadowMap.length = y),
      (i.directionalShadowMatrix.length = S),
      (i.pointShadowMatrix.length = M),
      (i.spotLightMatrix.length = y + F - A),
      (i.spotLightMap.length = F),
      (i.numSpotLightShadowsWithMaps = A),
      (i.numLightProbes = T),
      (B.directionalLength = m),
      (B.pointLength = g),
      (B.spotLength = b),
      (B.rectAreaLength = f),
      (B.hemiLength = u),
      (B.numDirectionalShadows = S),
      (B.numPointShadows = M),
      (B.numSpotShadows = y),
      (B.numSpotMaps = F),
      (B.numLightProbes = T),
      (i.version = Mv++));
  }
  function l(c, h) {
    let d = 0,
      p = 0,
      m = 0,
      g = 0,
      b = 0;
    const f = h.matrixWorldInverse;
    for (let u = 0, S = c.length; u < S; u++) {
      const M = c[u];
      if (M.isDirectionalLight) {
        const y = i.directional[d];
        y.direction.setFromMatrixPosition(M.matrixWorld),
          r.setFromMatrixPosition(M.target.matrixWorld),
          y.direction.sub(r),
          y.direction.transformDirection(f),
          d++;
      } else if (M.isSpotLight) {
        const y = i.spot[m];
        y.position.setFromMatrixPosition(M.matrixWorld),
          y.position.applyMatrix4(f),
          y.direction.setFromMatrixPosition(M.matrixWorld),
          r.setFromMatrixPosition(M.target.matrixWorld),
          y.direction.sub(r),
          y.direction.transformDirection(f),
          m++;
      } else if (M.isRectAreaLight) {
        const y = i.rectArea[g];
        y.position.setFromMatrixPosition(M.matrixWorld),
          y.position.applyMatrix4(f),
          o.identity(),
          s.copy(M.matrixWorld),
          s.premultiply(f),
          o.extractRotation(s),
          y.halfWidth.set(M.width * 0.5, 0, 0),
          y.halfHeight.set(0, M.height * 0.5, 0),
          y.halfWidth.applyMatrix4(o),
          y.halfHeight.applyMatrix4(o),
          g++;
      } else if (M.isPointLight) {
        const y = i.point[p];
        y.position.setFromMatrixPosition(M.matrixWorld),
          y.position.applyMatrix4(f),
          p++;
      } else if (M.isHemisphereLight) {
        const y = i.hemi[b];
        y.direction.setFromMatrixPosition(M.matrixWorld),
          y.direction.transformDirection(f),
          b++;
      }
    }
  }
  return { setup: a, setupView: l, state: i };
}
function dc(n) {
  const t = new Ev(n),
    e = [],
    i = [];
  function r(h) {
    (c.camera = h), (e.length = 0), (i.length = 0);
  }
  function s(h) {
    e.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function a() {
    t.setup(e);
  }
  function l(h) {
    t.setupView(e, h);
  }
  const c = {
    lightsArray: e,
    shadowsArray: i,
    camera: null,
    lights: t,
    transmissionRenderTarget: {},
  };
  return {
    init: r,
    state: c,
    setupLights: a,
    setupLightsView: l,
    pushLight: s,
    pushShadow: o,
  };
}
function Sv(n) {
  let t = new WeakMap();
  function e(r, s = 0) {
    const o = t.get(r);
    let a;
    return (
      o === void 0
        ? ((a = new dc(n)), t.set(r, [a]))
        : s >= o.length
        ? ((a = new dc(n)), o.push(a))
        : (a = o[s]),
      a
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: e, dispose: i };
}
class yv extends Lr {
  constructor(t) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = 'MeshDepthMaterial'),
      (this.depthPacking = xd),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.depthPacking = t.depthPacking),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      this
    );
  }
}
class Cv extends Lr {
  constructor(t) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = 'MeshDistanceMaterial'),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      this
    );
  }
}
const Tv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Av = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Pv(n, t, e) {
  let i = new Ua();
  const r = new yt(),
    s = new yt(),
    o = new te(),
    a = new yv({ depthPacking: bd }),
    l = new Cv(),
    c = {},
    h = e.maxTextureSize,
    d = { [Wn]: De, [De]: Wn, [xn]: xn },
    p = new Xn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new yt() },
        radius: { value: 4 },
      },
      vertexShader: Tv,
      fragmentShader: Av,
    }),
    m = p.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Yn();
  g.setAttribute(
    'position',
    new on(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const b = new je(g, p),
    f = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = jc);
  let u = this.type;
  this.render = function (A, T, B) {
    if (
      f.enabled === !1 ||
      (f.autoUpdate === !1 && f.needsUpdate === !1) ||
      A.length === 0
    )
      return;
    const w = n.getRenderTarget(),
      x = n.getActiveCubeFace(),
      P = n.getActiveMipmapLevel(),
      H = n.state;
    H.setBlending(zn),
      H.buffers.color.setClear(1, 1, 1, 1),
      H.buffers.depth.setTest(!0),
      H.setScissorTest(!1);
    const k = u !== gn && this.type === gn,
      Y = u === gn && this.type !== gn;
    for (let q = 0, G = A.length; q < G; q++) {
      const $ = A[q],
        V = $.shadow;
      if (V === void 0) {
        console.warn('THREE.WebGLShadowMap:', $, 'has no shadow.');
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      r.copy(V.mapSize);
      const ot = V.getFrameExtents();
      if (
        (r.multiply(ot),
        s.copy(V.mapSize),
        (r.x > h || r.y > h) &&
          (r.x > h &&
            ((s.x = Math.floor(h / ot.x)),
            (r.x = s.x * ot.x),
            (V.mapSize.x = s.x)),
          r.y > h &&
            ((s.y = Math.floor(h / ot.y)),
            (r.y = s.y * ot.y),
            (V.mapSize.y = s.y))),
        V.map === null || k === !0 || Y === !0)
      ) {
        const mt = this.type !== gn ? { minFilter: Xe, magFilter: Xe } : {};
        V.map !== null && V.map.dispose(),
          (V.map = new ui(r.x, r.y, mt)),
          (V.map.texture.name = $.name + '.shadowMap'),
          V.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(V.map), n.clear();
      const ht = V.getViewportCount();
      for (let mt = 0; mt < ht; mt++) {
        const Ot = V.getViewport(mt);
        o.set(s.x * Ot.x, s.y * Ot.y, s.x * Ot.z, s.y * Ot.w),
          H.viewport(o),
          V.updateMatrices($, mt),
          (i = V.getFrustum()),
          y(T, B, V.camera, $, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === gn && S(V, B),
        (V.needsUpdate = !1);
    }
    (u = this.type), (f.needsUpdate = !1), n.setRenderTarget(w, x, P);
  };
  function S(A, T) {
    const B = t.update(b);
    p.defines.VSM_SAMPLES !== A.blurSamples &&
      ((p.defines.VSM_SAMPLES = A.blurSamples),
      (m.defines.VSM_SAMPLES = A.blurSamples),
      (p.needsUpdate = !0),
      (m.needsUpdate = !0)),
      A.mapPass === null && (A.mapPass = new ui(r.x, r.y)),
      (p.uniforms.shadow_pass.value = A.map.texture),
      (p.uniforms.resolution.value = A.mapSize),
      (p.uniforms.radius.value = A.radius),
      n.setRenderTarget(A.mapPass),
      n.clear(),
      n.renderBufferDirect(T, null, B, p, b, null),
      (m.uniforms.shadow_pass.value = A.mapPass.texture),
      (m.uniforms.resolution.value = A.mapSize),
      (m.uniforms.radius.value = A.radius),
      n.setRenderTarget(A.map),
      n.clear(),
      n.renderBufferDirect(T, null, B, m, b, null);
  }
  function M(A, T, B, w) {
    let x = null;
    const P =
      B.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (P !== void 0) x = P;
    else if (
      ((x = B.isPointLight === !0 ? l : a),
      (n.localClippingEnabled &&
        T.clipShadows === !0 &&
        Array.isArray(T.clippingPlanes) &&
        T.clippingPlanes.length !== 0) ||
        (T.displacementMap && T.displacementScale !== 0) ||
        (T.alphaMap && T.alphaTest > 0) ||
        (T.map && T.alphaTest > 0))
    ) {
      const H = x.uuid,
        k = T.uuid;
      let Y = c[H];
      Y === void 0 && ((Y = {}), (c[H] = Y));
      let q = Y[k];
      q === void 0 &&
        ((q = x.clone()), (Y[k] = q), T.addEventListener('dispose', F)),
        (x = q);
    }
    if (
      ((x.visible = T.visible),
      (x.wireframe = T.wireframe),
      w === gn
        ? (x.side = T.shadowSide !== null ? T.shadowSide : T.side)
        : (x.side = T.shadowSide !== null ? T.shadowSide : d[T.side]),
      (x.alphaMap = T.alphaMap),
      (x.alphaTest = T.alphaTest),
      (x.map = T.map),
      (x.clipShadows = T.clipShadows),
      (x.clippingPlanes = T.clippingPlanes),
      (x.clipIntersection = T.clipIntersection),
      (x.displacementMap = T.displacementMap),
      (x.displacementScale = T.displacementScale),
      (x.displacementBias = T.displacementBias),
      (x.wireframeLinewidth = T.wireframeLinewidth),
      (x.linewidth = T.linewidth),
      B.isPointLight === !0 && x.isMeshDistanceMaterial === !0)
    ) {
      const H = n.properties.get(x);
      H.light = B;
    }
    return x;
  }
  function y(A, T, B, w, x) {
    if (A.visible === !1) return;
    if (
      A.layers.test(T.layers) &&
      (A.isMesh || A.isLine || A.isPoints) &&
      (A.castShadow || (A.receiveShadow && x === gn)) &&
      (!A.frustumCulled || i.intersectsObject(A))
    ) {
      A.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, A.matrixWorld);
      const k = t.update(A),
        Y = A.material;
      if (Array.isArray(Y)) {
        const q = k.groups;
        for (let G = 0, $ = q.length; G < $; G++) {
          const V = q[G],
            ot = Y[V.materialIndex];
          if (ot && ot.visible) {
            const ht = M(A, ot, w, x);
            A.onBeforeShadow(n, A, T, B, k, ht, V),
              n.renderBufferDirect(B, null, k, ht, A, V),
              A.onAfterShadow(n, A, T, B, k, ht, V);
          }
        }
      } else if (Y.visible) {
        const q = M(A, Y, w, x);
        A.onBeforeShadow(n, A, T, B, k, q, null),
          n.renderBufferDirect(B, null, k, q, A, null),
          A.onAfterShadow(n, A, T, B, k, q, null);
      }
    }
    const H = A.children;
    for (let k = 0, Y = H.length; k < Y; k++) y(H[k], T, B, w, x);
  }
  function F(A) {
    A.target.removeEventListener('dispose', F);
    for (const B in c) {
      const w = c[B],
        x = A.target.uuid;
      x in w && (w[x].dispose(), delete w[x]);
    }
  }
}
function Rv(n) {
  function t() {
    let R = !1;
    const tt = new te();
    let W = null;
    const X = new te(0, 0, 0, 0);
    return {
      setMask: function (nt) {
        W !== nt && !R && (n.colorMask(nt, nt, nt, nt), (W = nt));
      },
      setLocked: function (nt) {
        R = nt;
      },
      setClear: function (nt, bt, Bt, ue, be) {
        be === !0 && ((nt *= ue), (bt *= ue), (Bt *= ue)),
          tt.set(nt, bt, Bt, ue),
          X.equals(tt) === !1 && (n.clearColor(nt, bt, Bt, ue), X.copy(tt));
      },
      reset: function () {
        (R = !1), (W = null), X.set(-1, 0, 0, 0);
      },
    };
  }
  function e() {
    let R = !1,
      tt = null,
      W = null,
      X = null;
    return {
      setTest: function (nt) {
        nt ? ft(n.DEPTH_TEST) : lt(n.DEPTH_TEST);
      },
      setMask: function (nt) {
        tt !== nt && !R && (n.depthMask(nt), (tt = nt));
      },
      setFunc: function (nt) {
        if (W !== nt) {
          switch (nt) {
            case nd:
              n.depthFunc(n.NEVER);
              break;
            case id:
              n.depthFunc(n.ALWAYS);
              break;
            case rd:
              n.depthFunc(n.LESS);
              break;
            case Cs:
              n.depthFunc(n.LEQUAL);
              break;
            case sd:
              n.depthFunc(n.EQUAL);
              break;
            case od:
              n.depthFunc(n.GEQUAL);
              break;
            case ad:
              n.depthFunc(n.GREATER);
              break;
            case ld:
              n.depthFunc(n.NOTEQUAL);
              break;
            default:
              n.depthFunc(n.LEQUAL);
          }
          W = nt;
        }
      },
      setLocked: function (nt) {
        R = nt;
      },
      setClear: function (nt) {
        X !== nt && (n.clearDepth(nt), (X = nt));
      },
      reset: function () {
        (R = !1), (tt = null), (W = null), (X = null);
      },
    };
  }
  function i() {
    let R = !1,
      tt = null,
      W = null,
      X = null,
      nt = null,
      bt = null,
      Bt = null,
      ue = null,
      be = null;
    return {
      setTest: function (Ht) {
        R || (Ht ? ft(n.STENCIL_TEST) : lt(n.STENCIL_TEST));
      },
      setMask: function (Ht) {
        tt !== Ht && !R && (n.stencilMask(Ht), (tt = Ht));
      },
      setFunc: function (Ht, un, en) {
        (W !== Ht || X !== un || nt !== en) &&
          (n.stencilFunc(Ht, un, en), (W = Ht), (X = un), (nt = en));
      },
      setOp: function (Ht, un, en) {
        (bt !== Ht || Bt !== un || ue !== en) &&
          (n.stencilOp(Ht, un, en), (bt = Ht), (Bt = un), (ue = en));
      },
      setLocked: function (Ht) {
        R = Ht;
      },
      setClear: function (Ht) {
        be !== Ht && (n.clearStencil(Ht), (be = Ht));
      },
      reset: function () {
        (R = !1),
          (tt = null),
          (W = null),
          (X = null),
          (nt = null),
          (bt = null),
          (Bt = null),
          (ue = null),
          (be = null);
      },
    };
  }
  const r = new t(),
    s = new e(),
    o = new i(),
    a = new WeakMap(),
    l = new WeakMap();
  let c = {},
    h = {},
    d = new WeakMap(),
    p = [],
    m = null,
    g = !1,
    b = null,
    f = null,
    u = null,
    S = null,
    M = null,
    y = null,
    F = null,
    A = new zt(0, 0, 0),
    T = 0,
    B = !1,
    w = null,
    x = null,
    P = null,
    H = null,
    k = null;
  const Y = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let q = !1,
    G = 0;
  const $ = n.getParameter(n.VERSION);
  $.indexOf('WebGL') !== -1
    ? ((G = parseFloat(/^WebGL (\d)/.exec($)[1])), (q = G >= 1))
    : $.indexOf('OpenGL ES') !== -1 &&
      ((G = parseFloat(/^OpenGL ES (\d)/.exec($)[1])), (q = G >= 2));
  let V = null,
    ot = {};
  const ht = n.getParameter(n.SCISSOR_BOX),
    mt = n.getParameter(n.VIEWPORT),
    Ot = new te().fromArray(ht),
    Kt = new te().fromArray(mt);
  function z(R, tt, W, X) {
    const nt = new Uint8Array(4),
      bt = n.createTexture();
    n.bindTexture(R, bt),
      n.texParameteri(R, n.TEXTURE_MIN_FILTER, n.NEAREST),
      n.texParameteri(R, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let Bt = 0; Bt < W; Bt++)
      R === n.TEXTURE_3D || R === n.TEXTURE_2D_ARRAY
        ? n.texImage3D(tt, 0, n.RGBA, 1, 1, X, 0, n.RGBA, n.UNSIGNED_BYTE, nt)
        : n.texImage2D(
            tt + Bt,
            0,
            n.RGBA,
            1,
            1,
            0,
            n.RGBA,
            n.UNSIGNED_BYTE,
            nt
          );
    return bt;
  }
  const J = {};
  (J[n.TEXTURE_2D] = z(n.TEXTURE_2D, n.TEXTURE_2D, 1)),
    (J[n.TEXTURE_CUBE_MAP] = z(
      n.TEXTURE_CUBE_MAP,
      n.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (J[n.TEXTURE_2D_ARRAY] = z(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1)),
    (J[n.TEXTURE_3D] = z(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1)),
    r.setClear(0, 0, 0, 1),
    s.setClear(1),
    o.setClear(0),
    ft(n.DEPTH_TEST),
    s.setFunc(Cs),
    $t(!1),
    gt(gl),
    ft(n.CULL_FACE),
    ce(zn);
  function ft(R) {
    c[R] !== !0 && (n.enable(R), (c[R] = !0));
  }
  function lt(R) {
    c[R] !== !1 && (n.disable(R), (c[R] = !1));
  }
  function wt(R, tt) {
    return h[R] !== tt
      ? (n.bindFramebuffer(R, tt),
        (h[R] = tt),
        R === n.DRAW_FRAMEBUFFER && (h[n.FRAMEBUFFER] = tt),
        R === n.FRAMEBUFFER && (h[n.DRAW_FRAMEBUFFER] = tt),
        !0)
      : !1;
  }
  function At(R, tt) {
    let W = p,
      X = !1;
    if (R) {
      (W = d.get(tt)), W === void 0 && ((W = []), d.set(tt, W));
      const nt = R.textures;
      if (W.length !== nt.length || W[0] !== n.COLOR_ATTACHMENT0) {
        for (let bt = 0, Bt = nt.length; bt < Bt; bt++)
          W[bt] = n.COLOR_ATTACHMENT0 + bt;
        (W.length = nt.length), (X = !0);
      }
    } else W[0] !== n.BACK && ((W[0] = n.BACK), (X = !0));
    X && n.drawBuffers(W);
  }
  function Nt(R) {
    return m !== R ? (n.useProgram(R), (m = R), !0) : !1;
  }
  const re = {
    [si]: n.FUNC_ADD,
    [ku]: n.FUNC_SUBTRACT,
    [Vu]: n.FUNC_REVERSE_SUBTRACT,
  };
  (re[zu] = n.MIN), (re[Hu] = n.MAX);
  const C = {
    [Gu]: n.ZERO,
    [Wu]: n.ONE,
    [Xu]: n.SRC_COLOR,
    [Oo]: n.SRC_ALPHA,
    [Zu]: n.SRC_ALPHA_SATURATE,
    [Ku]: n.DST_COLOR,
    [qu]: n.DST_ALPHA,
    [ju]: n.ONE_MINUS_SRC_COLOR,
    [Fo]: n.ONE_MINUS_SRC_ALPHA,
    [$u]: n.ONE_MINUS_DST_COLOR,
    [Yu]: n.ONE_MINUS_DST_ALPHA,
    [Ju]: n.CONSTANT_COLOR,
    [Qu]: n.ONE_MINUS_CONSTANT_COLOR,
    [td]: n.CONSTANT_ALPHA,
    [ed]: n.ONE_MINUS_CONSTANT_ALPHA,
  };
  function ce(R, tt, W, X, nt, bt, Bt, ue, be, Ht) {
    if (R === zn) {
      g === !0 && (lt(n.BLEND), (g = !1));
      return;
    }
    if ((g === !1 && (ft(n.BLEND), (g = !0)), R !== Bu)) {
      if (R !== b || Ht !== B) {
        if (
          ((f !== si || M !== si) &&
            (n.blendEquation(n.FUNC_ADD), (f = si), (M = si)),
          Ht)
        )
          switch (R) {
            case Hi:
              n.blendFuncSeparate(
                n.ONE,
                n.ONE_MINUS_SRC_ALPHA,
                n.ONE,
                n.ONE_MINUS_SRC_ALPHA
              );
              break;
            case xl:
              n.blendFunc(n.ONE, n.ONE);
              break;
            case bl:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case Ml:
              n.blendFuncSeparate(n.ZERO, n.SRC_COLOR, n.ZERO, n.SRC_ALPHA);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', R);
              break;
          }
        else
          switch (R) {
            case Hi:
              n.blendFuncSeparate(
                n.SRC_ALPHA,
                n.ONE_MINUS_SRC_ALPHA,
                n.ONE,
                n.ONE_MINUS_SRC_ALPHA
              );
              break;
            case xl:
              n.blendFunc(n.SRC_ALPHA, n.ONE);
              break;
            case bl:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case Ml:
              n.blendFunc(n.ZERO, n.SRC_COLOR);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', R);
              break;
          }
        (u = null),
          (S = null),
          (y = null),
          (F = null),
          A.set(0, 0, 0),
          (T = 0),
          (b = R),
          (B = Ht);
      }
      return;
    }
    (nt = nt || tt),
      (bt = bt || W),
      (Bt = Bt || X),
      (tt !== f || nt !== M) &&
        (n.blendEquationSeparate(re[tt], re[nt]), (f = tt), (M = nt)),
      (W !== u || X !== S || bt !== y || Bt !== F) &&
        (n.blendFuncSeparate(C[W], C[X], C[bt], C[Bt]),
        (u = W),
        (S = X),
        (y = bt),
        (F = Bt)),
      (ue.equals(A) === !1 || be !== T) &&
        (n.blendColor(ue.r, ue.g, ue.b, be), A.copy(ue), (T = be)),
      (b = R),
      (B = !1);
  }
  function Yt(R, tt) {
    R.side === xn ? lt(n.CULL_FACE) : ft(n.CULL_FACE);
    let W = R.side === De;
    tt && (W = !W),
      $t(W),
      R.blending === Hi && R.transparent === !1
        ? ce(zn)
        : ce(
            R.blending,
            R.blendEquation,
            R.blendSrc,
            R.blendDst,
            R.blendEquationAlpha,
            R.blendSrcAlpha,
            R.blendDstAlpha,
            R.blendColor,
            R.blendAlpha,
            R.premultipliedAlpha
          ),
      s.setFunc(R.depthFunc),
      s.setTest(R.depthTest),
      s.setMask(R.depthWrite),
      r.setMask(R.colorWrite);
    const X = R.stencilWrite;
    o.setTest(X),
      X &&
        (o.setMask(R.stencilWriteMask),
        o.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask),
        o.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)),
      Ct(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits),
      R.alphaToCoverage === !0
        ? ft(n.SAMPLE_ALPHA_TO_COVERAGE)
        : lt(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function $t(R) {
    w !== R && (R ? n.frontFace(n.CW) : n.frontFace(n.CCW), (w = R));
  }
  function gt(R) {
    R !== Nu
      ? (ft(n.CULL_FACE),
        R !== x &&
          (R === gl
            ? n.cullFace(n.BACK)
            : R === Ou
            ? n.cullFace(n.FRONT)
            : n.cullFace(n.FRONT_AND_BACK)))
      : lt(n.CULL_FACE),
      (x = R);
  }
  function he(R) {
    R !== P && (q && n.lineWidth(R), (P = R));
  }
  function Ct(R, tt, W) {
    R
      ? (ft(n.POLYGON_OFFSET_FILL),
        (H !== tt || k !== W) && (n.polygonOffset(tt, W), (H = tt), (k = W)))
      : lt(n.POLYGON_OFFSET_FILL);
  }
  function Pt(R) {
    R ? ft(n.SCISSOR_TEST) : lt(n.SCISSOR_TEST);
  }
  function E(R) {
    R === void 0 && (R = n.TEXTURE0 + Y - 1),
      V !== R && (n.activeTexture(R), (V = R));
  }
  function _(R, tt, W) {
    W === void 0 && (V === null ? (W = n.TEXTURE0 + Y - 1) : (W = V));
    let X = ot[W];
    X === void 0 && ((X = { type: void 0, texture: void 0 }), (ot[W] = X)),
      (X.type !== R || X.texture !== tt) &&
        (V !== W && (n.activeTexture(W), (V = W)),
        n.bindTexture(R, tt || J[R]),
        (X.type = R),
        (X.texture = tt));
  }
  function O() {
    const R = ot[V];
    R !== void 0 &&
      R.type !== void 0 &&
      (n.bindTexture(R.type, null), (R.type = void 0), (R.texture = void 0));
  }
  function j() {
    try {
      n.compressedTexImage2D.apply(n, arguments);
    } catch (R) {
      console.error('THREE.WebGLState:', R);
    }
  }
  function Z() {
    try {
      n.compressedTexImage3D.apply(n, arguments);
    } catch (R) {
      console.error('THREE.WebGLState:', R);
    }
  }
  function K() {
    try {
      n.texSubImage2D.apply(n, arguments);
    } catch (R) {
      console.error('THREE.WebGLState:', R);
    }
  }
  function xt() {
    try {
      n.texSubImage3D.apply(n, arguments);
    } catch (R) {
      console.error('THREE.WebGLState:', R);
    }
  }
  function rt() {
    try {
      n.compressedTexSubImage2D.apply(n, arguments);
    } catch (R) {
      console.error('THREE.WebGLState:', R);
    }
  }
  function ct() {
    try {
      n.compressedTexSubImage3D.apply(n, arguments);
    } catch (R) {
      console.error('THREE.WebGLState:', R);
    }
  }
  function Rt() {
    try {
      n.texStorage2D.apply(n, arguments);
    } catch (R) {
      console.error('THREE.WebGLState:', R);
    }
  }
  function Q() {
    try {
      n.texStorage3D.apply(n, arguments);
    } catch (R) {
      console.error('THREE.WebGLState:', R);
    }
  }
  function at() {
    try {
      n.texImage2D.apply(n, arguments);
    } catch (R) {
      console.error('THREE.WebGLState:', R);
    }
  }
  function Ft() {
    try {
      n.texImage3D.apply(n, arguments);
    } catch (R) {
      console.error('THREE.WebGLState:', R);
    }
  }
  function St(R) {
    Ot.equals(R) === !1 && (n.scissor(R.x, R.y, R.z, R.w), Ot.copy(R));
  }
  function ut(R) {
    Kt.equals(R) === !1 && (n.viewport(R.x, R.y, R.z, R.w), Kt.copy(R));
  }
  function Tt(R, tt) {
    let W = l.get(tt);
    W === void 0 && ((W = new WeakMap()), l.set(tt, W));
    let X = W.get(R);
    X === void 0 && ((X = n.getUniformBlockIndex(tt, R.name)), W.set(R, X));
  }
  function Ut(R, tt) {
    const X = l.get(tt).get(R);
    a.get(tt) !== X &&
      (n.uniformBlockBinding(tt, X, R.__bindingPointIndex), a.set(tt, X));
  }
  function ne() {
    n.disable(n.BLEND),
      n.disable(n.CULL_FACE),
      n.disable(n.DEPTH_TEST),
      n.disable(n.POLYGON_OFFSET_FILL),
      n.disable(n.SCISSOR_TEST),
      n.disable(n.STENCIL_TEST),
      n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),
      n.blendEquation(n.FUNC_ADD),
      n.blendFunc(n.ONE, n.ZERO),
      n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO),
      n.blendColor(0, 0, 0, 0),
      n.colorMask(!0, !0, !0, !0),
      n.clearColor(0, 0, 0, 0),
      n.depthMask(!0),
      n.depthFunc(n.LESS),
      n.clearDepth(1),
      n.stencilMask(4294967295),
      n.stencilFunc(n.ALWAYS, 0, 4294967295),
      n.stencilOp(n.KEEP, n.KEEP, n.KEEP),
      n.clearStencil(0),
      n.cullFace(n.BACK),
      n.frontFace(n.CCW),
      n.polygonOffset(0, 0),
      n.activeTexture(n.TEXTURE0),
      n.bindFramebuffer(n.FRAMEBUFFER, null),
      n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
      n.bindFramebuffer(n.READ_FRAMEBUFFER, null),
      n.useProgram(null),
      n.lineWidth(1),
      n.scissor(0, 0, n.canvas.width, n.canvas.height),
      n.viewport(0, 0, n.canvas.width, n.canvas.height),
      (c = {}),
      (V = null),
      (ot = {}),
      (h = {}),
      (d = new WeakMap()),
      (p = []),
      (m = null),
      (g = !1),
      (b = null),
      (f = null),
      (u = null),
      (S = null),
      (M = null),
      (y = null),
      (F = null),
      (A = new zt(0, 0, 0)),
      (T = 0),
      (B = !1),
      (w = null),
      (x = null),
      (P = null),
      (H = null),
      (k = null),
      Ot.set(0, 0, n.canvas.width, n.canvas.height),
      Kt.set(0, 0, n.canvas.width, n.canvas.height),
      r.reset(),
      s.reset(),
      o.reset();
  }
  return {
    buffers: { color: r, depth: s, stencil: o },
    enable: ft,
    disable: lt,
    bindFramebuffer: wt,
    drawBuffers: At,
    useProgram: Nt,
    setBlending: ce,
    setMaterial: Yt,
    setFlipSided: $t,
    setCullFace: gt,
    setLineWidth: he,
    setPolygonOffset: Ct,
    setScissorTest: Pt,
    activeTexture: E,
    bindTexture: _,
    unbindTexture: O,
    compressedTexImage2D: j,
    compressedTexImage3D: Z,
    texImage2D: at,
    texImage3D: Ft,
    updateUBOMapping: Tt,
    uniformBlockBinding: Ut,
    texStorage2D: Rt,
    texStorage3D: Q,
    texSubImage2D: K,
    texSubImage3D: xt,
    compressedTexSubImage2D: rt,
    compressedTexSubImage3D: ct,
    scissor: St,
    viewport: ut,
    reset: ne,
  };
}
function pc(n, t, e, i) {
  const r = Lv(i);
  switch (e) {
    case Jc:
      return n * t;
    case th:
      return n * t;
    case eh:
      return n * t * 2;
    case nh:
      return ((n * t) / r.components) * r.byteLength;
    case Ta:
      return ((n * t) / r.components) * r.byteLength;
    case ih:
      return ((n * t * 2) / r.components) * r.byteLength;
    case Aa:
      return ((n * t * 2) / r.components) * r.byteLength;
    case Qc:
      return ((n * t * 3) / r.components) * r.byteLength;
    case tn:
      return ((n * t * 4) / r.components) * r.byteLength;
    case Pa:
      return ((n * t * 4) / r.components) * r.byteLength;
    case vs:
    case gs:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case xs:
    case bs:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Go:
    case Xo:
      return (Math.max(n, 16) * Math.max(t, 8)) / 4;
    case Ho:
    case Wo:
      return (Math.max(n, 8) * Math.max(t, 8)) / 2;
    case jo:
    case qo:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Yo:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Ko:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case $o:
      return Math.floor((n + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Zo:
      return Math.floor((n + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Jo:
      return Math.floor((n + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Qo:
      return Math.floor((n + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case ta:
      return Math.floor((n + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case ea:
      return Math.floor((n + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case na:
      return Math.floor((n + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case ia:
      return Math.floor((n + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case ra:
      return Math.floor((n + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case sa:
      return Math.floor((n + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case oa:
      return Math.floor((n + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case aa:
      return Math.floor((n + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case la:
      return Math.floor((n + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Ms:
    case ca:
    case ha:
      return Math.ceil(n / 4) * Math.ceil(t / 4) * 16;
    case rh:
    case ua:
      return Math.ceil(n / 4) * Math.ceil(t / 4) * 8;
    case da:
    case pa:
      return Math.ceil(n / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function Lv(n) {
  switch (n) {
    case Sn:
    case Kc:
      return { byteLength: 1, components: 1 };
    case br:
    case $c:
    case Ar:
      return { byteLength: 2, components: 1 };
    case ya:
    case Ca:
      return { byteLength: 2, components: 4 };
    case hi:
    case Sa:
    case bn:
      return { byteLength: 4, components: 1 };
    case Zc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${n}.`);
}
function Dv(n, t, e, i, r, s, o) {
  const a = t.has('WEBGL_multisampled_render_to_texture')
      ? t.get('WEBGL_multisampled_render_to_texture')
      : null,
    l =
      typeof navigator > 'u' ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    c = new yt(),
    h = new WeakMap();
  let d;
  const p = new WeakMap();
  let m = !1;
  try {
    m =
      typeof OffscreenCanvas < 'u' &&
      new OffscreenCanvas(1, 1).getContext('2d') !== null;
  } catch {}
  function g(E, _) {
    return m ? new OffscreenCanvas(E, _) : Mr('canvas');
  }
  function b(E, _, O) {
    let j = 1;
    const Z = Pt(E);
    if (
      ((Z.width > O || Z.height > O) && (j = O / Math.max(Z.width, Z.height)),
      j < 1)
    )
      if (
        (typeof HTMLImageElement < 'u' && E instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < 'u' && E instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < 'u' && E instanceof ImageBitmap) ||
        (typeof VideoFrame < 'u' && E instanceof VideoFrame)
      ) {
        const K = Math.floor(j * Z.width),
          xt = Math.floor(j * Z.height);
        d === void 0 && (d = g(K, xt));
        const rt = _ ? g(K, xt) : d;
        return (
          (rt.width = K),
          (rt.height = xt),
          rt.getContext('2d').drawImage(E, 0, 0, K, xt),
          console.warn(
            'THREE.WebGLRenderer: Texture has been resized from (' +
              Z.width +
              'x' +
              Z.height +
              ') to (' +
              K +
              'x' +
              xt +
              ').'
          ),
          rt
        );
      } else
        return (
          'data' in E &&
            console.warn(
              'THREE.WebGLRenderer: Image in DataTexture is too big (' +
                Z.width +
                'x' +
                Z.height +
                ').'
            ),
          E
        );
    return E;
  }
  function f(E) {
    return E.generateMipmaps && E.minFilter !== Xe && E.minFilter !== Qe;
  }
  function u(E) {
    n.generateMipmap(E);
  }
  function S(E, _, O, j, Z = !1) {
    if (E !== null) {
      if (n[E] !== void 0) return n[E];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          E +
          "'"
      );
    }
    let K = _;
    if (
      (_ === n.RED &&
        (O === n.FLOAT && (K = n.R32F),
        O === n.HALF_FLOAT && (K = n.R16F),
        O === n.UNSIGNED_BYTE && (K = n.R8)),
      _ === n.RED_INTEGER &&
        (O === n.UNSIGNED_BYTE && (K = n.R8UI),
        O === n.UNSIGNED_SHORT && (K = n.R16UI),
        O === n.UNSIGNED_INT && (K = n.R32UI),
        O === n.BYTE && (K = n.R8I),
        O === n.SHORT && (K = n.R16I),
        O === n.INT && (K = n.R32I)),
      _ === n.RG &&
        (O === n.FLOAT && (K = n.RG32F),
        O === n.HALF_FLOAT && (K = n.RG16F),
        O === n.UNSIGNED_BYTE && (K = n.RG8)),
      _ === n.RG_INTEGER &&
        (O === n.UNSIGNED_BYTE && (K = n.RG8UI),
        O === n.UNSIGNED_SHORT && (K = n.RG16UI),
        O === n.UNSIGNED_INT && (K = n.RG32UI),
        O === n.BYTE && (K = n.RG8I),
        O === n.SHORT && (K = n.RG16I),
        O === n.INT && (K = n.RG32I)),
      _ === n.RGB && O === n.UNSIGNED_INT_5_9_9_9_REV && (K = n.RGB9_E5),
      _ === n.RGBA)
    ) {
      const xt = Z ? Ts : jt.getTransfer(j);
      O === n.FLOAT && (K = n.RGBA32F),
        O === n.HALF_FLOAT && (K = n.RGBA16F),
        O === n.UNSIGNED_BYTE && (K = xt === Qt ? n.SRGB8_ALPHA8 : n.RGBA8),
        O === n.UNSIGNED_SHORT_4_4_4_4 && (K = n.RGBA4),
        O === n.UNSIGNED_SHORT_5_5_5_1 && (K = n.RGB5_A1);
    }
    return (
      (K === n.R16F ||
        K === n.R32F ||
        K === n.RG16F ||
        K === n.RG32F ||
        K === n.RGBA16F ||
        K === n.RGBA32F) &&
        t.get('EXT_color_buffer_float'),
      K
    );
  }
  function M(E, _) {
    let O;
    return (
      E
        ? _ === null || _ === hi || _ === Ki
          ? (O = n.DEPTH24_STENCIL8)
          : _ === bn
          ? (O = n.DEPTH32F_STENCIL8)
          : _ === br &&
            ((O = n.DEPTH24_STENCIL8),
            console.warn(
              'DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.'
            ))
        : _ === null || _ === hi || _ === Ki
        ? (O = n.DEPTH_COMPONENT24)
        : _ === bn
        ? (O = n.DEPTH_COMPONENT32F)
        : _ === br && (O = n.DEPTH_COMPONENT16),
      O
    );
  }
  function y(E, _) {
    return f(E) === !0 ||
      (E.isFramebufferTexture && E.minFilter !== Xe && E.minFilter !== Qe)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : E.mipmaps !== void 0 && E.mipmaps.length > 0
      ? E.mipmaps.length
      : E.isCompressedTexture && Array.isArray(E.image)
      ? _.mipmaps.length
      : 1;
  }
  function F(E) {
    const _ = E.target;
    _.removeEventListener('dispose', F), T(_), _.isVideoTexture && h.delete(_);
  }
  function A(E) {
    const _ = E.target;
    _.removeEventListener('dispose', A), w(_);
  }
  function T(E) {
    const _ = i.get(E);
    if (_.__webglInit === void 0) return;
    const O = E.source,
      j = p.get(O);
    if (j) {
      const Z = j[_.__cacheKey];
      Z.usedTimes--,
        Z.usedTimes === 0 && B(E),
        Object.keys(j).length === 0 && p.delete(O);
    }
    i.remove(E);
  }
  function B(E) {
    const _ = i.get(E);
    n.deleteTexture(_.__webglTexture);
    const O = E.source,
      j = p.get(O);
    delete j[_.__cacheKey], o.memory.textures--;
  }
  function w(E) {
    const _ = i.get(E);
    if ((E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget))
      for (let j = 0; j < 6; j++) {
        if (Array.isArray(_.__webglFramebuffer[j]))
          for (let Z = 0; Z < _.__webglFramebuffer[j].length; Z++)
            n.deleteFramebuffer(_.__webglFramebuffer[j][Z]);
        else n.deleteFramebuffer(_.__webglFramebuffer[j]);
        _.__webglDepthbuffer && n.deleteRenderbuffer(_.__webglDepthbuffer[j]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let j = 0; j < _.__webglFramebuffer.length; j++)
          n.deleteFramebuffer(_.__webglFramebuffer[j]);
      else n.deleteFramebuffer(_.__webglFramebuffer);
      if (
        (_.__webglDepthbuffer && n.deleteRenderbuffer(_.__webglDepthbuffer),
        _.__webglMultisampledFramebuffer &&
          n.deleteFramebuffer(_.__webglMultisampledFramebuffer),
        _.__webglColorRenderbuffer)
      )
        for (let j = 0; j < _.__webglColorRenderbuffer.length; j++)
          _.__webglColorRenderbuffer[j] &&
            n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);
      _.__webglDepthRenderbuffer &&
        n.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const O = E.textures;
    for (let j = 0, Z = O.length; j < Z; j++) {
      const K = i.get(O[j]);
      K.__webglTexture &&
        (n.deleteTexture(K.__webglTexture), o.memory.textures--),
        i.remove(O[j]);
    }
    i.remove(E);
  }
  let x = 0;
  function P() {
    x = 0;
  }
  function H() {
    const E = x;
    return (
      E >= r.maxTextures &&
        console.warn(
          'THREE.WebGLTextures: Trying to use ' +
            E +
            ' texture units while this GPU supports only ' +
            r.maxTextures
        ),
      (x += 1),
      E
    );
  }
  function k(E) {
    const _ = [];
    return (
      _.push(E.wrapS),
      _.push(E.wrapT),
      _.push(E.wrapR || 0),
      _.push(E.magFilter),
      _.push(E.minFilter),
      _.push(E.anisotropy),
      _.push(E.internalFormat),
      _.push(E.format),
      _.push(E.type),
      _.push(E.generateMipmaps),
      _.push(E.premultiplyAlpha),
      _.push(E.flipY),
      _.push(E.unpackAlignment),
      _.push(E.colorSpace),
      _.join()
    );
  }
  function Y(E, _) {
    const O = i.get(E);
    if (
      (E.isVideoTexture && he(E),
      E.isRenderTargetTexture === !1 &&
        E.version > 0 &&
        O.__version !== E.version)
    ) {
      const j = E.image;
      if (j === null)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but no image data found.'
        );
      else if (j.complete === !1)
        console.warn(
          'THREE.WebGLRenderer: Texture marked for update but image is incomplete'
        );
      else {
        Kt(O, E, _);
        return;
      }
    }
    e.bindTexture(n.TEXTURE_2D, O.__webglTexture, n.TEXTURE0 + _);
  }
  function q(E, _) {
    const O = i.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      Kt(O, E, _);
      return;
    }
    e.bindTexture(n.TEXTURE_2D_ARRAY, O.__webglTexture, n.TEXTURE0 + _);
  }
  function G(E, _) {
    const O = i.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      Kt(O, E, _);
      return;
    }
    e.bindTexture(n.TEXTURE_3D, O.__webglTexture, n.TEXTURE0 + _);
  }
  function $(E, _) {
    const O = i.get(E);
    if (E.version > 0 && O.__version !== E.version) {
      z(O, E, _);
      return;
    }
    e.bindTexture(n.TEXTURE_CUBE_MAP, O.__webglTexture, n.TEXTURE0 + _);
  }
  const V = { [Vo]: n.REPEAT, [ai]: n.CLAMP_TO_EDGE, [zo]: n.MIRRORED_REPEAT },
    ot = {
      [Xe]: n.NEAREST,
      [gd]: n.NEAREST_MIPMAP_NEAREST,
      [jr]: n.NEAREST_MIPMAP_LINEAR,
      [Qe]: n.LINEAR,
      [Zs]: n.LINEAR_MIPMAP_NEAREST,
      [li]: n.LINEAR_MIPMAP_LINEAR,
    },
    ht = {
      [wd]: n.NEVER,
      [Ad]: n.ALWAYS,
      [Ed]: n.LESS,
      [oh]: n.LEQUAL,
      [Sd]: n.EQUAL,
      [Td]: n.GEQUAL,
      [yd]: n.GREATER,
      [Cd]: n.NOTEQUAL,
    };
  function mt(E, _) {
    if (
      (_.type === bn &&
        t.has('OES_texture_float_linear') === !1 &&
        (_.magFilter === Qe ||
          _.magFilter === Zs ||
          _.magFilter === jr ||
          _.magFilter === li ||
          _.minFilter === Qe ||
          _.minFilter === Zs ||
          _.minFilter === jr ||
          _.minFilter === li) &&
        console.warn(
          'THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.'
        ),
      n.texParameteri(E, n.TEXTURE_WRAP_S, V[_.wrapS]),
      n.texParameteri(E, n.TEXTURE_WRAP_T, V[_.wrapT]),
      (E === n.TEXTURE_3D || E === n.TEXTURE_2D_ARRAY) &&
        n.texParameteri(E, n.TEXTURE_WRAP_R, V[_.wrapR]),
      n.texParameteri(E, n.TEXTURE_MAG_FILTER, ot[_.magFilter]),
      n.texParameteri(E, n.TEXTURE_MIN_FILTER, ot[_.minFilter]),
      _.compareFunction &&
        (n.texParameteri(E, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE),
        n.texParameteri(E, n.TEXTURE_COMPARE_FUNC, ht[_.compareFunction])),
      t.has('EXT_texture_filter_anisotropic') === !0)
    ) {
      if (
        _.magFilter === Xe ||
        (_.minFilter !== jr && _.minFilter !== li) ||
        (_.type === bn && t.has('OES_texture_float_linear') === !1)
      )
        return;
      if (_.anisotropy > 1 || i.get(_).__currentAnisotropy) {
        const O = t.get('EXT_texture_filter_anisotropic');
        n.texParameterf(
          E,
          O.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, r.getMaxAnisotropy())
        ),
          (i.get(_).__currentAnisotropy = _.anisotropy);
      }
    }
  }
  function Ot(E, _) {
    let O = !1;
    E.__webglInit === void 0 &&
      ((E.__webglInit = !0), _.addEventListener('dispose', F));
    const j = _.source;
    let Z = p.get(j);
    Z === void 0 && ((Z = {}), p.set(j, Z));
    const K = k(_);
    if (K !== E.__cacheKey) {
      Z[K] === void 0 &&
        ((Z[K] = { texture: n.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (O = !0)),
        Z[K].usedTimes++;
      const xt = Z[E.__cacheKey];
      xt !== void 0 &&
        (Z[E.__cacheKey].usedTimes--, xt.usedTimes === 0 && B(_)),
        (E.__cacheKey = K),
        (E.__webglTexture = Z[K].texture);
    }
    return O;
  }
  function Kt(E, _, O) {
    let j = n.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) &&
      (j = n.TEXTURE_2D_ARRAY),
      _.isData3DTexture && (j = n.TEXTURE_3D);
    const Z = Ot(E, _),
      K = _.source;
    e.bindTexture(j, E.__webglTexture, n.TEXTURE0 + O);
    const xt = i.get(K);
    if (K.version !== xt.__version || Z === !0) {
      e.activeTexture(n.TEXTURE0 + O);
      const rt = jt.getPrimaries(jt.workingColorSpace),
        ct = _.colorSpace === kn ? null : jt.getPrimaries(_.colorSpace),
        Rt =
          _.colorSpace === kn || rt === ct ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, _.flipY),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        n.pixelStorei(n.UNPACK_ALIGNMENT, _.unpackAlignment),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Rt);
      let Q = b(_.image, !1, r.maxTextureSize);
      Q = Ct(_, Q);
      const at = s.convert(_.format, _.colorSpace),
        Ft = s.convert(_.type);
      let St = S(_.internalFormat, at, Ft, _.colorSpace, _.isVideoTexture);
      mt(j, _);
      let ut;
      const Tt = _.mipmaps,
        Ut = _.isVideoTexture !== !0,
        ne = xt.__version === void 0 || Z === !0,
        R = K.dataReady,
        tt = y(_, Q);
      if (_.isDepthTexture)
        (St = M(_.format === $i, _.type)),
          ne &&
            (Ut
              ? e.texStorage2D(n.TEXTURE_2D, 1, St, Q.width, Q.height)
              : e.texImage2D(
                  n.TEXTURE_2D,
                  0,
                  St,
                  Q.width,
                  Q.height,
                  0,
                  at,
                  Ft,
                  null
                ));
      else if (_.isDataTexture)
        if (Tt.length > 0) {
          Ut &&
            ne &&
            e.texStorage2D(n.TEXTURE_2D, tt, St, Tt[0].width, Tt[0].height);
          for (let W = 0, X = Tt.length; W < X; W++)
            (ut = Tt[W]),
              Ut
                ? R &&
                  e.texSubImage2D(
                    n.TEXTURE_2D,
                    W,
                    0,
                    0,
                    ut.width,
                    ut.height,
                    at,
                    Ft,
                    ut.data
                  )
                : e.texImage2D(
                    n.TEXTURE_2D,
                    W,
                    St,
                    ut.width,
                    ut.height,
                    0,
                    at,
                    Ft,
                    ut.data
                  );
          _.generateMipmaps = !1;
        } else
          Ut
            ? (ne && e.texStorage2D(n.TEXTURE_2D, tt, St, Q.width, Q.height),
              R &&
                e.texSubImage2D(
                  n.TEXTURE_2D,
                  0,
                  0,
                  0,
                  Q.width,
                  Q.height,
                  at,
                  Ft,
                  Q.data
                ))
            : e.texImage2D(
                n.TEXTURE_2D,
                0,
                St,
                Q.width,
                Q.height,
                0,
                at,
                Ft,
                Q.data
              );
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Ut &&
            ne &&
            e.texStorage3D(
              n.TEXTURE_2D_ARRAY,
              tt,
              St,
              Tt[0].width,
              Tt[0].height,
              Q.depth
            );
          for (let W = 0, X = Tt.length; W < X; W++)
            if (((ut = Tt[W]), _.format !== tn))
              if (at !== null)
                if (Ut) {
                  if (R)
                    if (_.layerUpdates.size > 0) {
                      const nt = pc(ut.width, ut.height, _.format, _.type);
                      for (const bt of _.layerUpdates) {
                        const Bt = ut.data.subarray(
                          (bt * nt) / ut.data.BYTES_PER_ELEMENT,
                          ((bt + 1) * nt) / ut.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(
                          n.TEXTURE_2D_ARRAY,
                          W,
                          0,
                          0,
                          bt,
                          ut.width,
                          ut.height,
                          1,
                          at,
                          Bt,
                          0,
                          0
                        );
                      }
                      _.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(
                        n.TEXTURE_2D_ARRAY,
                        W,
                        0,
                        0,
                        0,
                        ut.width,
                        ut.height,
                        Q.depth,
                        at,
                        ut.data,
                        0,
                        0
                      );
                } else
                  e.compressedTexImage3D(
                    n.TEXTURE_2D_ARRAY,
                    W,
                    St,
                    ut.width,
                    ut.height,
                    Q.depth,
                    0,
                    ut.data,
                    0,
                    0
                  );
              else
                console.warn(
                  'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                );
            else
              Ut
                ? R &&
                  e.texSubImage3D(
                    n.TEXTURE_2D_ARRAY,
                    W,
                    0,
                    0,
                    0,
                    ut.width,
                    ut.height,
                    Q.depth,
                    at,
                    Ft,
                    ut.data
                  )
                : e.texImage3D(
                    n.TEXTURE_2D_ARRAY,
                    W,
                    St,
                    ut.width,
                    ut.height,
                    Q.depth,
                    0,
                    at,
                    Ft,
                    ut.data
                  );
        } else {
          Ut &&
            ne &&
            e.texStorage2D(n.TEXTURE_2D, tt, St, Tt[0].width, Tt[0].height);
          for (let W = 0, X = Tt.length; W < X; W++)
            (ut = Tt[W]),
              _.format !== tn
                ? at !== null
                  ? Ut
                    ? R &&
                      e.compressedTexSubImage2D(
                        n.TEXTURE_2D,
                        W,
                        0,
                        0,
                        ut.width,
                        ut.height,
                        at,
                        ut.data
                      )
                    : e.compressedTexImage2D(
                        n.TEXTURE_2D,
                        W,
                        St,
                        ut.width,
                        ut.height,
                        0,
                        ut.data
                      )
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
                    )
                : Ut
                ? R &&
                  e.texSubImage2D(
                    n.TEXTURE_2D,
                    W,
                    0,
                    0,
                    ut.width,
                    ut.height,
                    at,
                    Ft,
                    ut.data
                  )
                : e.texImage2D(
                    n.TEXTURE_2D,
                    W,
                    St,
                    ut.width,
                    ut.height,
                    0,
                    at,
                    Ft,
                    ut.data
                  );
        }
      else if (_.isDataArrayTexture)
        if (Ut) {
          if (
            (ne &&
              e.texStorage3D(
                n.TEXTURE_2D_ARRAY,
                tt,
                St,
                Q.width,
                Q.height,
                Q.depth
              ),
            R)
          )
            if (_.layerUpdates.size > 0) {
              const W = pc(Q.width, Q.height, _.format, _.type);
              for (const X of _.layerUpdates) {
                const nt = Q.data.subarray(
                  (X * W) / Q.data.BYTES_PER_ELEMENT,
                  ((X + 1) * W) / Q.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(
                  n.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  X,
                  Q.width,
                  Q.height,
                  1,
                  at,
                  Ft,
                  nt
                );
              }
              _.clearLayerUpdates();
            } else
              e.texSubImage3D(
                n.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                at,
                Ft,
                Q.data
              );
        } else
          e.texImage3D(
            n.TEXTURE_2D_ARRAY,
            0,
            St,
            Q.width,
            Q.height,
            Q.depth,
            0,
            at,
            Ft,
            Q.data
          );
      else if (_.isData3DTexture)
        Ut
          ? (ne &&
              e.texStorage3D(n.TEXTURE_3D, tt, St, Q.width, Q.height, Q.depth),
            R &&
              e.texSubImage3D(
                n.TEXTURE_3D,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                at,
                Ft,
                Q.data
              ))
          : e.texImage3D(
              n.TEXTURE_3D,
              0,
              St,
              Q.width,
              Q.height,
              Q.depth,
              0,
              at,
              Ft,
              Q.data
            );
      else if (_.isFramebufferTexture) {
        if (ne)
          if (Ut) e.texStorage2D(n.TEXTURE_2D, tt, St, Q.width, Q.height);
          else {
            let W = Q.width,
              X = Q.height;
            for (let nt = 0; nt < tt; nt++)
              e.texImage2D(n.TEXTURE_2D, nt, St, W, X, 0, at, Ft, null),
                (W >>= 1),
                (X >>= 1);
          }
      } else if (Tt.length > 0) {
        if (Ut && ne) {
          const W = Pt(Tt[0]);
          e.texStorage2D(n.TEXTURE_2D, tt, St, W.width, W.height);
        }
        for (let W = 0, X = Tt.length; W < X; W++)
          (ut = Tt[W]),
            Ut
              ? R && e.texSubImage2D(n.TEXTURE_2D, W, 0, 0, at, Ft, ut)
              : e.texImage2D(n.TEXTURE_2D, W, St, at, Ft, ut);
        _.generateMipmaps = !1;
      } else if (Ut) {
        if (ne) {
          const W = Pt(Q);
          e.texStorage2D(n.TEXTURE_2D, tt, St, W.width, W.height);
        }
        R && e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, at, Ft, Q);
      } else e.texImage2D(n.TEXTURE_2D, 0, St, at, Ft, Q);
      f(_) && u(j), (xt.__version = K.version), _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function z(E, _, O) {
    if (_.image.length !== 6) return;
    const j = Ot(E, _),
      Z = _.source;
    e.bindTexture(n.TEXTURE_CUBE_MAP, E.__webglTexture, n.TEXTURE0 + O);
    const K = i.get(Z);
    if (Z.version !== K.__version || j === !0) {
      e.activeTexture(n.TEXTURE0 + O);
      const xt = jt.getPrimaries(jt.workingColorSpace),
        rt = _.colorSpace === kn ? null : jt.getPrimaries(_.colorSpace),
        ct =
          _.colorSpace === kn || xt === rt ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, _.flipY),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        n.pixelStorei(n.UNPACK_ALIGNMENT, _.unpackAlignment),
        n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, ct);
      const Rt = _.isCompressedTexture || _.image[0].isCompressedTexture,
        Q = _.image[0] && _.image[0].isDataTexture,
        at = [];
      for (let X = 0; X < 6; X++)
        !Rt && !Q
          ? (at[X] = b(_.image[X], !0, r.maxCubemapSize))
          : (at[X] = Q ? _.image[X].image : _.image[X]),
          (at[X] = Ct(_, at[X]));
      const Ft = at[0],
        St = s.convert(_.format, _.colorSpace),
        ut = s.convert(_.type),
        Tt = S(_.internalFormat, St, ut, _.colorSpace),
        Ut = _.isVideoTexture !== !0,
        ne = K.__version === void 0 || j === !0,
        R = Z.dataReady;
      let tt = y(_, Ft);
      mt(n.TEXTURE_CUBE_MAP, _);
      let W;
      if (Rt) {
        Ut &&
          ne &&
          e.texStorage2D(n.TEXTURE_CUBE_MAP, tt, Tt, Ft.width, Ft.height);
        for (let X = 0; X < 6; X++) {
          W = at[X].mipmaps;
          for (let nt = 0; nt < W.length; nt++) {
            const bt = W[nt];
            _.format !== tn
              ? St !== null
                ? Ut
                  ? R &&
                    e.compressedTexSubImage2D(
                      n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                      nt,
                      0,
                      0,
                      bt.width,
                      bt.height,
                      St,
                      bt.data
                    )
                  : e.compressedTexImage2D(
                      n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                      nt,
                      Tt,
                      bt.width,
                      bt.height,
                      0,
                      bt.data
                    )
                : console.warn(
                    'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()'
                  )
              : Ut
              ? R &&
                e.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  nt,
                  0,
                  0,
                  bt.width,
                  bt.height,
                  St,
                  ut,
                  bt.data
                )
              : e.texImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  nt,
                  Tt,
                  bt.width,
                  bt.height,
                  0,
                  St,
                  ut,
                  bt.data
                );
          }
        }
      } else {
        if (((W = _.mipmaps), Ut && ne)) {
          W.length > 0 && tt++;
          const X = Pt(at[0]);
          e.texStorage2D(n.TEXTURE_CUBE_MAP, tt, Tt, X.width, X.height);
        }
        for (let X = 0; X < 6; X++)
          if (Q) {
            Ut
              ? R &&
                e.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  0,
                  0,
                  at[X].width,
                  at[X].height,
                  St,
                  ut,
                  at[X].data
                )
              : e.texImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  Tt,
                  at[X].width,
                  at[X].height,
                  0,
                  St,
                  ut,
                  at[X].data
                );
            for (let nt = 0; nt < W.length; nt++) {
              const Bt = W[nt].image[X].image;
              Ut
                ? R &&
                  e.texSubImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    nt + 1,
                    0,
                    0,
                    Bt.width,
                    Bt.height,
                    St,
                    ut,
                    Bt.data
                  )
                : e.texImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    nt + 1,
                    Tt,
                    Bt.width,
                    Bt.height,
                    0,
                    St,
                    ut,
                    Bt.data
                  );
            }
          } else {
            Ut
              ? R &&
                e.texSubImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  0,
                  0,
                  St,
                  ut,
                  at[X]
                )
              : e.texImage2D(
                  n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  Tt,
                  St,
                  ut,
                  at[X]
                );
            for (let nt = 0; nt < W.length; nt++) {
              const bt = W[nt];
              Ut
                ? R &&
                  e.texSubImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    nt + 1,
                    0,
                    0,
                    St,
                    ut,
                    bt.image[X]
                  )
                : e.texImage2D(
                    n.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    nt + 1,
                    Tt,
                    St,
                    ut,
                    bt.image[X]
                  );
            }
          }
      }
      f(_) && u(n.TEXTURE_CUBE_MAP),
        (K.__version = Z.version),
        _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function J(E, _, O, j, Z, K) {
    const xt = s.convert(O.format, O.colorSpace),
      rt = s.convert(O.type),
      ct = S(O.internalFormat, xt, rt, O.colorSpace);
    if (!i.get(_).__hasExternalTextures) {
      const Q = Math.max(1, _.width >> K),
        at = Math.max(1, _.height >> K);
      Z === n.TEXTURE_3D || Z === n.TEXTURE_2D_ARRAY
        ? e.texImage3D(Z, K, ct, Q, at, _.depth, 0, xt, rt, null)
        : e.texImage2D(Z, K, ct, Q, at, 0, xt, rt, null);
    }
    e.bindFramebuffer(n.FRAMEBUFFER, E),
      gt(_)
        ? a.framebufferTexture2DMultisampleEXT(
            n.FRAMEBUFFER,
            j,
            Z,
            i.get(O).__webglTexture,
            0,
            $t(_)
          )
        : (Z === n.TEXTURE_2D ||
            (Z >= n.TEXTURE_CUBE_MAP_POSITIVE_X &&
              Z <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          n.framebufferTexture2D(
            n.FRAMEBUFFER,
            j,
            Z,
            i.get(O).__webglTexture,
            K
          ),
      e.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function ft(E, _, O) {
    if ((n.bindRenderbuffer(n.RENDERBUFFER, E), _.depthBuffer)) {
      const j = _.depthTexture,
        Z = j && j.isDepthTexture ? j.type : null,
        K = M(_.stencilBuffer, Z),
        xt = _.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT,
        rt = $t(_);
      gt(_)
        ? a.renderbufferStorageMultisampleEXT(
            n.RENDERBUFFER,
            rt,
            K,
            _.width,
            _.height
          )
        : O
        ? n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            rt,
            K,
            _.width,
            _.height
          )
        : n.renderbufferStorage(n.RENDERBUFFER, K, _.width, _.height),
        n.framebufferRenderbuffer(n.FRAMEBUFFER, xt, n.RENDERBUFFER, E);
    } else {
      const j = _.textures;
      for (let Z = 0; Z < j.length; Z++) {
        const K = j[Z],
          xt = s.convert(K.format, K.colorSpace),
          rt = s.convert(K.type),
          ct = S(K.internalFormat, xt, rt, K.colorSpace),
          Rt = $t(_);
        O && gt(_) === !1
          ? n.renderbufferStorageMultisample(
              n.RENDERBUFFER,
              Rt,
              ct,
              _.width,
              _.height
            )
          : gt(_)
          ? a.renderbufferStorageMultisampleEXT(
              n.RENDERBUFFER,
              Rt,
              ct,
              _.width,
              _.height
            )
          : n.renderbufferStorage(n.RENDERBUFFER, ct, _.width, _.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function lt(E, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error(
        'Depth Texture with cube render targets is not supported'
      );
    if (
      (e.bindFramebuffer(n.FRAMEBUFFER, E),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        'renderTarget.depthTexture must be an instance of THREE.DepthTexture'
      );
    (!i.get(_.depthTexture).__webglTexture ||
      _.depthTexture.image.width !== _.width ||
      _.depthTexture.image.height !== _.height) &&
      ((_.depthTexture.image.width = _.width),
      (_.depthTexture.image.height = _.height),
      (_.depthTexture.needsUpdate = !0)),
      Y(_.depthTexture, 0);
    const j = i.get(_.depthTexture).__webglTexture,
      Z = $t(_);
    if (_.depthTexture.format === Gi)
      gt(_)
        ? a.framebufferTexture2DMultisampleEXT(
            n.FRAMEBUFFER,
            n.DEPTH_ATTACHMENT,
            n.TEXTURE_2D,
            j,
            0,
            Z
          )
        : n.framebufferTexture2D(
            n.FRAMEBUFFER,
            n.DEPTH_ATTACHMENT,
            n.TEXTURE_2D,
            j,
            0
          );
    else if (_.depthTexture.format === $i)
      gt(_)
        ? a.framebufferTexture2DMultisampleEXT(
            n.FRAMEBUFFER,
            n.DEPTH_STENCIL_ATTACHMENT,
            n.TEXTURE_2D,
            j,
            0,
            Z
          )
        : n.framebufferTexture2D(
            n.FRAMEBUFFER,
            n.DEPTH_STENCIL_ATTACHMENT,
            n.TEXTURE_2D,
            j,
            0
          );
    else throw new Error('Unknown depthTexture format');
  }
  function wt(E) {
    const _ = i.get(E),
      O = E.isWebGLCubeRenderTarget === !0;
    if (_.__boundDepthTexture !== E.depthTexture) {
      const j = E.depthTexture;
      if ((_.__depthDisposeCallback && _.__depthDisposeCallback(), j)) {
        const Z = () => {
          delete _.__boundDepthTexture,
            delete _.__depthDisposeCallback,
            j.removeEventListener('dispose', Z);
        };
        j.addEventListener('dispose', Z), (_.__depthDisposeCallback = Z);
      }
      _.__boundDepthTexture = j;
    }
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error(
          'target.depthTexture not supported in Cube render targets'
        );
      lt(_.__webglFramebuffer, E);
    } else if (O) {
      _.__webglDepthbuffer = [];
      for (let j = 0; j < 6; j++)
        if (
          (e.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer[j]),
          _.__webglDepthbuffer[j] === void 0)
        )
          (_.__webglDepthbuffer[j] = n.createRenderbuffer()),
            ft(_.__webglDepthbuffer[j], E, !1);
        else {
          const Z = E.stencilBuffer
              ? n.DEPTH_STENCIL_ATTACHMENT
              : n.DEPTH_ATTACHMENT,
            K = _.__webglDepthbuffer[j];
          n.bindRenderbuffer(n.RENDERBUFFER, K),
            n.framebufferRenderbuffer(n.FRAMEBUFFER, Z, n.RENDERBUFFER, K);
        }
    } else if (
      (e.bindFramebuffer(n.FRAMEBUFFER, _.__webglFramebuffer),
      _.__webglDepthbuffer === void 0)
    )
      (_.__webglDepthbuffer = n.createRenderbuffer()),
        ft(_.__webglDepthbuffer, E, !1);
    else {
      const j = E.stencilBuffer
          ? n.DEPTH_STENCIL_ATTACHMENT
          : n.DEPTH_ATTACHMENT,
        Z = _.__webglDepthbuffer;
      n.bindRenderbuffer(n.RENDERBUFFER, Z),
        n.framebufferRenderbuffer(n.FRAMEBUFFER, j, n.RENDERBUFFER, Z);
    }
    e.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function At(E, _, O) {
    const j = i.get(E);
    _ !== void 0 &&
      J(
        j.__webglFramebuffer,
        E,
        E.texture,
        n.COLOR_ATTACHMENT0,
        n.TEXTURE_2D,
        0
      ),
      O !== void 0 && wt(E);
  }
  function Nt(E) {
    const _ = E.texture,
      O = i.get(E),
      j = i.get(_);
    E.addEventListener('dispose', A);
    const Z = E.textures,
      K = E.isWebGLCubeRenderTarget === !0,
      xt = Z.length > 1;
    if (
      (xt ||
        (j.__webglTexture === void 0 && (j.__webglTexture = n.createTexture()),
        (j.__version = _.version),
        o.memory.textures++),
      K)
    ) {
      O.__webglFramebuffer = [];
      for (let rt = 0; rt < 6; rt++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          O.__webglFramebuffer[rt] = [];
          for (let ct = 0; ct < _.mipmaps.length; ct++)
            O.__webglFramebuffer[rt][ct] = n.createFramebuffer();
        } else O.__webglFramebuffer[rt] = n.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let rt = 0; rt < _.mipmaps.length; rt++)
          O.__webglFramebuffer[rt] = n.createFramebuffer();
      } else O.__webglFramebuffer = n.createFramebuffer();
      if (xt)
        for (let rt = 0, ct = Z.length; rt < ct; rt++) {
          const Rt = i.get(Z[rt]);
          Rt.__webglTexture === void 0 &&
            ((Rt.__webglTexture = n.createTexture()), o.memory.textures++);
        }
      if (E.samples > 0 && gt(E) === !1) {
        (O.__webglMultisampledFramebuffer = n.createFramebuffer()),
          (O.__webglColorRenderbuffer = []),
          e.bindFramebuffer(n.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
        for (let rt = 0; rt < Z.length; rt++) {
          const ct = Z[rt];
          (O.__webglColorRenderbuffer[rt] = n.createRenderbuffer()),
            n.bindRenderbuffer(n.RENDERBUFFER, O.__webglColorRenderbuffer[rt]);
          const Rt = s.convert(ct.format, ct.colorSpace),
            Q = s.convert(ct.type),
            at = S(
              ct.internalFormat,
              Rt,
              Q,
              ct.colorSpace,
              E.isXRRenderTarget === !0
            ),
            Ft = $t(E);
          n.renderbufferStorageMultisample(
            n.RENDERBUFFER,
            Ft,
            at,
            E.width,
            E.height
          ),
            n.framebufferRenderbuffer(
              n.FRAMEBUFFER,
              n.COLOR_ATTACHMENT0 + rt,
              n.RENDERBUFFER,
              O.__webglColorRenderbuffer[rt]
            );
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null),
          E.depthBuffer &&
            ((O.__webglDepthRenderbuffer = n.createRenderbuffer()),
            ft(O.__webglDepthRenderbuffer, E, !0)),
          e.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (K) {
      e.bindTexture(n.TEXTURE_CUBE_MAP, j.__webglTexture),
        mt(n.TEXTURE_CUBE_MAP, _);
      for (let rt = 0; rt < 6; rt++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let ct = 0; ct < _.mipmaps.length; ct++)
            J(
              O.__webglFramebuffer[rt][ct],
              E,
              _,
              n.COLOR_ATTACHMENT0,
              n.TEXTURE_CUBE_MAP_POSITIVE_X + rt,
              ct
            );
        else
          J(
            O.__webglFramebuffer[rt],
            E,
            _,
            n.COLOR_ATTACHMENT0,
            n.TEXTURE_CUBE_MAP_POSITIVE_X + rt,
            0
          );
      f(_) && u(n.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (xt) {
      for (let rt = 0, ct = Z.length; rt < ct; rt++) {
        const Rt = Z[rt],
          Q = i.get(Rt);
        e.bindTexture(n.TEXTURE_2D, Q.__webglTexture),
          mt(n.TEXTURE_2D, Rt),
          J(
            O.__webglFramebuffer,
            E,
            Rt,
            n.COLOR_ATTACHMENT0 + rt,
            n.TEXTURE_2D,
            0
          ),
          f(Rt) && u(n.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let rt = n.TEXTURE_2D;
      if (
        ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
          (rt = E.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY),
        e.bindTexture(rt, j.__webglTexture),
        mt(rt, _),
        _.mipmaps && _.mipmaps.length > 0)
      )
        for (let ct = 0; ct < _.mipmaps.length; ct++)
          J(O.__webglFramebuffer[ct], E, _, n.COLOR_ATTACHMENT0, rt, ct);
      else J(O.__webglFramebuffer, E, _, n.COLOR_ATTACHMENT0, rt, 0);
      f(_) && u(rt), e.unbindTexture();
    }
    E.depthBuffer && wt(E);
  }
  function re(E) {
    const _ = E.textures;
    for (let O = 0, j = _.length; O < j; O++) {
      const Z = _[O];
      if (f(Z)) {
        const K = E.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : n.TEXTURE_2D,
          xt = i.get(Z).__webglTexture;
        e.bindTexture(K, xt), u(K), e.unbindTexture();
      }
    }
  }
  const C = [],
    ce = [];
  function Yt(E) {
    if (E.samples > 0) {
      if (gt(E) === !1) {
        const _ = E.textures,
          O = E.width,
          j = E.height;
        let Z = n.COLOR_BUFFER_BIT;
        const K = E.stencilBuffer
            ? n.DEPTH_STENCIL_ATTACHMENT
            : n.DEPTH_ATTACHMENT,
          xt = i.get(E),
          rt = _.length > 1;
        if (rt)
          for (let ct = 0; ct < _.length; ct++)
            e.bindFramebuffer(n.FRAMEBUFFER, xt.__webglMultisampledFramebuffer),
              n.framebufferRenderbuffer(
                n.FRAMEBUFFER,
                n.COLOR_ATTACHMENT0 + ct,
                n.RENDERBUFFER,
                null
              ),
              e.bindFramebuffer(n.FRAMEBUFFER, xt.__webglFramebuffer),
              n.framebufferTexture2D(
                n.DRAW_FRAMEBUFFER,
                n.COLOR_ATTACHMENT0 + ct,
                n.TEXTURE_2D,
                null,
                0
              );
        e.bindFramebuffer(
          n.READ_FRAMEBUFFER,
          xt.__webglMultisampledFramebuffer
        ),
          e.bindFramebuffer(n.DRAW_FRAMEBUFFER, xt.__webglFramebuffer);
        for (let ct = 0; ct < _.length; ct++) {
          if (
            (E.resolveDepthBuffer &&
              (E.depthBuffer && (Z |= n.DEPTH_BUFFER_BIT),
              E.stencilBuffer &&
                E.resolveStencilBuffer &&
                (Z |= n.STENCIL_BUFFER_BIT)),
            rt)
          ) {
            n.framebufferRenderbuffer(
              n.READ_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0,
              n.RENDERBUFFER,
              xt.__webglColorRenderbuffer[ct]
            );
            const Rt = i.get(_[ct]).__webglTexture;
            n.framebufferTexture2D(
              n.DRAW_FRAMEBUFFER,
              n.COLOR_ATTACHMENT0,
              n.TEXTURE_2D,
              Rt,
              0
            );
          }
          n.blitFramebuffer(0, 0, O, j, 0, 0, O, j, Z, n.NEAREST),
            l === !0 &&
              ((C.length = 0),
              (ce.length = 0),
              C.push(n.COLOR_ATTACHMENT0 + ct),
              E.depthBuffer &&
                E.resolveDepthBuffer === !1 &&
                (C.push(K),
                ce.push(K),
                n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, ce)),
              n.invalidateFramebuffer(n.READ_FRAMEBUFFER, C));
        }
        if (
          (e.bindFramebuffer(n.READ_FRAMEBUFFER, null),
          e.bindFramebuffer(n.DRAW_FRAMEBUFFER, null),
          rt)
        )
          for (let ct = 0; ct < _.length; ct++) {
            e.bindFramebuffer(n.FRAMEBUFFER, xt.__webglMultisampledFramebuffer),
              n.framebufferRenderbuffer(
                n.FRAMEBUFFER,
                n.COLOR_ATTACHMENT0 + ct,
                n.RENDERBUFFER,
                xt.__webglColorRenderbuffer[ct]
              );
            const Rt = i.get(_[ct]).__webglTexture;
            e.bindFramebuffer(n.FRAMEBUFFER, xt.__webglFramebuffer),
              n.framebufferTexture2D(
                n.DRAW_FRAMEBUFFER,
                n.COLOR_ATTACHMENT0 + ct,
                n.TEXTURE_2D,
                Rt,
                0
              );
          }
        e.bindFramebuffer(
          n.DRAW_FRAMEBUFFER,
          xt.__webglMultisampledFramebuffer
        );
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && l) {
        const _ = E.stencilBuffer
          ? n.DEPTH_STENCIL_ATTACHMENT
          : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function $t(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function gt(E) {
    const _ = i.get(E);
    return (
      E.samples > 0 &&
      t.has('WEBGL_multisampled_render_to_texture') === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function he(E) {
    const _ = o.render.frame;
    h.get(E) !== _ && (h.set(E, _), E.update());
  }
  function Ct(E, _) {
    const O = E.colorSpace,
      j = E.format,
      Z = E.type;
    return (
      E.isCompressedTexture === !0 ||
        E.isVideoTexture === !0 ||
        (O !== qn &&
          O !== kn &&
          (jt.getTransfer(O) === Qt
            ? (j !== tn || Z !== Sn) &&
              console.warn(
                'THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.'
              )
            : console.error(
                'THREE.WebGLTextures: Unsupported texture color space:',
                O
              ))),
      _
    );
  }
  function Pt(E) {
    return (
      typeof HTMLImageElement < 'u' && E instanceof HTMLImageElement
        ? ((c.width = E.naturalWidth || E.width),
          (c.height = E.naturalHeight || E.height))
        : typeof VideoFrame < 'u' && E instanceof VideoFrame
        ? ((c.width = E.displayWidth), (c.height = E.displayHeight))
        : ((c.width = E.width), (c.height = E.height)),
      c
    );
  }
  (this.allocateTextureUnit = H),
    (this.resetTextureUnits = P),
    (this.setTexture2D = Y),
    (this.setTexture2DArray = q),
    (this.setTexture3D = G),
    (this.setTextureCube = $),
    (this.rebindTextures = At),
    (this.setupRenderTarget = Nt),
    (this.updateRenderTargetMipmap = re),
    (this.updateMultisampleRenderTarget = Yt),
    (this.setupDepthRenderbuffer = wt),
    (this.setupFrameBufferTexture = J),
    (this.useMultisampledRTT = gt);
}
function Iv(n, t) {
  function e(i, r = kn) {
    let s;
    const o = jt.getTransfer(r);
    if (i === Sn) return n.UNSIGNED_BYTE;
    if (i === ya) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === Ca) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === Zc) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === Kc) return n.BYTE;
    if (i === $c) return n.SHORT;
    if (i === br) return n.UNSIGNED_SHORT;
    if (i === Sa) return n.INT;
    if (i === hi) return n.UNSIGNED_INT;
    if (i === bn) return n.FLOAT;
    if (i === Ar) return n.HALF_FLOAT;
    if (i === Jc) return n.ALPHA;
    if (i === Qc) return n.RGB;
    if (i === tn) return n.RGBA;
    if (i === th) return n.LUMINANCE;
    if (i === eh) return n.LUMINANCE_ALPHA;
    if (i === Gi) return n.DEPTH_COMPONENT;
    if (i === $i) return n.DEPTH_STENCIL;
    if (i === nh) return n.RED;
    if (i === Ta) return n.RED_INTEGER;
    if (i === ih) return n.RG;
    if (i === Aa) return n.RG_INTEGER;
    if (i === Pa) return n.RGBA_INTEGER;
    if (i === vs || i === gs || i === xs || i === bs)
      if (o === Qt)
        if (((s = t.get('WEBGL_compressed_texture_s3tc_srgb')), s !== null)) {
          if (i === vs) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (i === gs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (i === xs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (i === bs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = t.get('WEBGL_compressed_texture_s3tc')), s !== null)) {
        if (i === vs) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (i === gs) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (i === xs) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (i === bs) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (i === Ho || i === Go || i === Wo || i === Xo)
      if (((s = t.get('WEBGL_compressed_texture_pvrtc')), s !== null)) {
        if (i === Ho) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (i === Go) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (i === Wo) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (i === Xo) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (i === jo || i === qo || i === Yo)
      if (((s = t.get('WEBGL_compressed_texture_etc')), s !== null)) {
        if (i === jo || i === qo)
          return o === Qt ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (i === Yo)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      i === Ko ||
      i === $o ||
      i === Zo ||
      i === Jo ||
      i === Qo ||
      i === ta ||
      i === ea ||
      i === na ||
      i === ia ||
      i === ra ||
      i === sa ||
      i === oa ||
      i === aa ||
      i === la
    )
      if (((s = t.get('WEBGL_compressed_texture_astc')), s !== null)) {
        if (i === Ko)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (i === $o)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (i === Zo)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (i === Jo)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (i === Qo)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (i === ta)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (i === ea)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (i === na)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (i === ia)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (i === ra)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (i === sa)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (i === oa)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (i === aa)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (i === la)
          return o === Qt
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (i === Ms || i === ca || i === ha)
      if (((s = t.get('EXT_texture_compression_bptc')), s !== null)) {
        if (i === Ms)
          return o === Qt
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (i === ca) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (i === ha) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (i === rh || i === ua || i === da || i === pa)
      if (((s = t.get('EXT_texture_compression_rgtc')), s !== null)) {
        if (i === Ms) return s.COMPRESSED_RED_RGTC1_EXT;
        if (i === ua) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (i === da) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (i === pa) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return i === Ki ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: e };
}
class Uv extends ke {
  constructor(t = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = t);
  }
}
class fs extends Ie {
  constructor() {
    super(), (this.isGroup = !0), (this.type = 'Group');
  }
}
const Nv = { type: 'move' };
class So {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new fs()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new fs()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new I()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new I())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new fs()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new I()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new I())),
      this._grip
    );
  }
  dispatchEvent(t) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(t),
      this._grip !== null && this._grip.dispatchEvent(t),
      this._hand !== null && this._hand.dispatchEvent(t),
      this
    );
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const i of t.hand.values()) this._getHandJoint(e, i);
    }
    return this.dispatchEvent({ type: 'connected', data: t }), this;
  }
  disconnect(t) {
    return (
      this.dispatchEvent({ type: 'disconnected', data: t }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(t, e, i) {
    let r = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (t && e.session.visibilityState !== 'visible-blurred') {
      if (c && t.hand) {
        o = !0;
        for (const b of t.hand.values()) {
          const f = e.getJointPose(b, i),
            u = this._getHandJoint(c, b);
          f !== null &&
            (u.matrix.fromArray(f.transform.matrix),
            u.matrix.decompose(u.position, u.rotation, u.scale),
            (u.matrixWorldNeedsUpdate = !0),
            (u.jointRadius = f.radius)),
            (u.visible = f !== null);
        }
        const h = c.joints['index-finger-tip'],
          d = c.joints['thumb-tip'],
          p = h.position.distanceTo(d.position),
          m = 0.02,
          g = 0.005;
        c.inputState.pinching && p > m + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: 'pinchend',
              handedness: t.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            p <= m - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: 'pinchstart',
              handedness: t.handedness,
              target: this,
            }));
      } else
        l !== null &&
          t.gripSpace &&
          ((s = e.getPose(t.gripSpace, i)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      a !== null &&
        ((r = e.getPose(t.targetRaySpace, i)),
        r === null && s !== null && (r = s),
        r !== null &&
          (a.matrix.fromArray(r.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          (a.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(r.linearVelocity))
            : (a.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(r.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(Nv)));
    }
    return (
      a !== null && (a.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const i = new fs();
      (i.matrixAutoUpdate = !1),
        (i.visible = !1),
        (t.joints[e.jointName] = i),
        t.add(i);
    }
    return t.joints[e.jointName];
  }
}
const Ov = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  Fv = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Bv {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(t, e, i) {
    if (this.texture === null) {
      const r = new Ce(),
        s = t.properties.get(r);
      (s.__webglTexture = e.texture),
        (e.depthNear != i.depthNear || e.depthFar != i.depthFar) &&
          ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = r);
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport,
        i = new Xn({
          vertexShader: Ov,
          fragmentShader: Fv,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: e.z },
            depthHeight: { value: e.w },
          },
        });
      this.mesh = new je(new Bs(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class kv extends _i {
  constructor(t, e) {
    super();
    const i = this;
    let r = null,
      s = 1,
      o = null,
      a = 'local-floor',
      l = 1,
      c = null,
      h = null,
      d = null,
      p = null,
      m = null,
      g = null;
    const b = new Bv(),
      f = e.getContextAttributes();
    let u = null,
      S = null;
    const M = [],
      y = [],
      F = new yt();
    let A = null;
    const T = new ke();
    T.layers.enable(1), (T.viewport = new te());
    const B = new ke();
    B.layers.enable(2), (B.viewport = new te());
    const w = [T, B],
      x = new Uv();
    x.layers.enable(1), x.layers.enable(2);
    let P = null,
      H = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (z) {
        let J = M[z];
        return (
          J === void 0 && ((J = new So()), (M[z] = J)), J.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (z) {
        let J = M[z];
        return J === void 0 && ((J = new So()), (M[z] = J)), J.getGripSpace();
      }),
      (this.getHand = function (z) {
        let J = M[z];
        return J === void 0 && ((J = new So()), (M[z] = J)), J.getHandSpace();
      });
    function k(z) {
      const J = y.indexOf(z.inputSource);
      if (J === -1) return;
      const ft = M[J];
      ft !== void 0 &&
        (ft.update(z.inputSource, z.frame, c || o),
        ft.dispatchEvent({ type: z.type, data: z.inputSource }));
    }
    function Y() {
      r.removeEventListener('select', k),
        r.removeEventListener('selectstart', k),
        r.removeEventListener('selectend', k),
        r.removeEventListener('squeeze', k),
        r.removeEventListener('squeezestart', k),
        r.removeEventListener('squeezeend', k),
        r.removeEventListener('end', Y),
        r.removeEventListener('inputsourceschange', q);
      for (let z = 0; z < M.length; z++) {
        const J = y[z];
        J !== null && ((y[z] = null), M[z].disconnect(J));
      }
      (P = null),
        (H = null),
        b.reset(),
        t.setRenderTarget(u),
        (m = null),
        (p = null),
        (d = null),
        (r = null),
        (S = null),
        Kt.stop(),
        (i.isPresenting = !1),
        t.setPixelRatio(A),
        t.setSize(F.width, F.height, !1),
        i.dispatchEvent({ type: 'sessionend' });
    }
    (this.setFramebufferScaleFactor = function (z) {
      (s = z),
        i.isPresenting === !0 &&
          console.warn(
            'THREE.WebXRManager: Cannot change framebuffer scale while presenting.'
          );
    }),
      (this.setReferenceSpaceType = function (z) {
        (a = z),
          i.isPresenting === !0 &&
            console.warn(
              'THREE.WebXRManager: Cannot change reference space type while presenting.'
            );
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (z) {
        c = z;
      }),
      (this.getBaseLayer = function () {
        return p !== null ? p : m;
      }),
      (this.getBinding = function () {
        return d;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (z) {
        if (((r = z), r !== null)) {
          if (
            ((u = t.getRenderTarget()),
            r.addEventListener('select', k),
            r.addEventListener('selectstart', k),
            r.addEventListener('selectend', k),
            r.addEventListener('squeeze', k),
            r.addEventListener('squeezestart', k),
            r.addEventListener('squeezeend', k),
            r.addEventListener('end', Y),
            r.addEventListener('inputsourceschange', q),
            f.xrCompatible !== !0 && (await e.makeXRCompatible()),
            (A = t.getPixelRatio()),
            t.getSize(F),
            r.renderState.layers === void 0)
          ) {
            const J = {
              antialias: f.antialias,
              alpha: !0,
              depth: f.depth,
              stencil: f.stencil,
              framebufferScaleFactor: s,
            };
            (m = new XRWebGLLayer(r, e, J)),
              r.updateRenderState({ baseLayer: m }),
              t.setPixelRatio(1),
              t.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (S = new ui(m.framebufferWidth, m.framebufferHeight, {
                format: tn,
                type: Sn,
                colorSpace: t.outputColorSpace,
                stencilBuffer: f.stencil,
              }));
          } else {
            let J = null,
              ft = null,
              lt = null;
            f.depth &&
              ((lt = f.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
              (J = f.stencil ? $i : Gi),
              (ft = f.stencil ? Ki : hi));
            const wt = {
              colorFormat: e.RGBA8,
              depthFormat: lt,
              scaleFactor: s,
            };
            (d = new XRWebGLBinding(r, e)),
              (p = d.createProjectionLayer(wt)),
              r.updateRenderState({ layers: [p] }),
              t.setPixelRatio(1),
              t.setSize(p.textureWidth, p.textureHeight, !1),
              (S = new ui(p.textureWidth, p.textureHeight, {
                format: tn,
                type: Sn,
                depthTexture: new gh(
                  p.textureWidth,
                  p.textureHeight,
                  ft,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  J
                ),
                stencilBuffer: f.stencil,
                colorSpace: t.outputColorSpace,
                samples: f.antialias ? 4 : 0,
                resolveDepthBuffer: p.ignoreDepthValues === !1,
              }));
          }
          (S.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (o = await r.requestReferenceSpace(a)),
            Kt.setContext(r),
            Kt.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: 'sessionstart' });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return b.getDepthTexture();
      });
    function q(z) {
      for (let J = 0; J < z.removed.length; J++) {
        const ft = z.removed[J],
          lt = y.indexOf(ft);
        lt >= 0 && ((y[lt] = null), M[lt].disconnect(ft));
      }
      for (let J = 0; J < z.added.length; J++) {
        const ft = z.added[J];
        let lt = y.indexOf(ft);
        if (lt === -1) {
          for (let At = 0; At < M.length; At++)
            if (At >= y.length) {
              y.push(ft), (lt = At);
              break;
            } else if (y[At] === null) {
              (y[At] = ft), (lt = At);
              break;
            }
          if (lt === -1) break;
        }
        const wt = M[lt];
        wt && wt.connect(ft);
      }
    }
    const G = new I(),
      $ = new I();
    function V(z, J, ft) {
      G.setFromMatrixPosition(J.matrixWorld),
        $.setFromMatrixPosition(ft.matrixWorld);
      const lt = G.distanceTo($),
        wt = J.projectionMatrix.elements,
        At = ft.projectionMatrix.elements,
        Nt = wt[14] / (wt[10] - 1),
        re = wt[14] / (wt[10] + 1),
        C = (wt[9] + 1) / wt[5],
        ce = (wt[9] - 1) / wt[5],
        Yt = (wt[8] - 1) / wt[0],
        $t = (At[8] + 1) / At[0],
        gt = Nt * Yt,
        he = Nt * $t,
        Ct = lt / (-Yt + $t),
        Pt = Ct * -Yt;
      if (
        (J.matrixWorld.decompose(z.position, z.quaternion, z.scale),
        z.translateX(Pt),
        z.translateZ(Ct),
        z.matrixWorld.compose(z.position, z.quaternion, z.scale),
        z.matrixWorldInverse.copy(z.matrixWorld).invert(),
        wt[10] === -1)
      )
        z.projectionMatrix.copy(J.projectionMatrix),
          z.projectionMatrixInverse.copy(J.projectionMatrixInverse);
      else {
        const E = Nt + Ct,
          _ = re + Ct,
          O = gt - Pt,
          j = he + (lt - Pt),
          Z = ((C * re) / _) * E,
          K = ((ce * re) / _) * E;
        z.projectionMatrix.makePerspective(O, j, Z, K, E, _),
          z.projectionMatrixInverse.copy(z.projectionMatrix).invert();
      }
    }
    function ot(z, J) {
      J === null
        ? z.matrixWorld.copy(z.matrix)
        : z.matrixWorld.multiplyMatrices(J.matrixWorld, z.matrix),
        z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    this.updateCamera = function (z) {
      if (r === null) return;
      let J = z.near,
        ft = z.far;
      b.texture !== null &&
        (b.depthNear > 0 && (J = b.depthNear),
        b.depthFar > 0 && (ft = b.depthFar)),
        (x.near = B.near = T.near = J),
        (x.far = B.far = T.far = ft),
        (P !== x.near || H !== x.far) &&
          (r.updateRenderState({ depthNear: x.near, depthFar: x.far }),
          (P = x.near),
          (H = x.far));
      const lt = z.parent,
        wt = x.cameras;
      ot(x, lt);
      for (let At = 0; At < wt.length; At++) ot(wt[At], lt);
      wt.length === 2
        ? V(x, T, B)
        : x.projectionMatrix.copy(T.projectionMatrix),
        ht(z, x, lt);
    };
    function ht(z, J, ft) {
      ft === null
        ? z.matrix.copy(J.matrixWorld)
        : (z.matrix.copy(ft.matrixWorld),
          z.matrix.invert(),
          z.matrix.multiply(J.matrixWorld)),
        z.matrix.decompose(z.position, z.quaternion, z.scale),
        z.updateMatrixWorld(!0),
        z.projectionMatrix.copy(J.projectionMatrix),
        z.projectionMatrixInverse.copy(J.projectionMatrixInverse),
        z.isPerspectiveCamera &&
          ((z.fov = fa * 2 * Math.atan(1 / z.projectionMatrix.elements[5])),
          (z.zoom = 1));
    }
    (this.getCamera = function () {
      return x;
    }),
      (this.getFoveation = function () {
        if (!(p === null && m === null)) return l;
      }),
      (this.setFoveation = function (z) {
        (l = z),
          p !== null && (p.fixedFoveation = z),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = z);
      }),
      (this.hasDepthSensing = function () {
        return b.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return b.getMesh(x);
      });
    let mt = null;
    function Ot(z, J) {
      if (((h = J.getViewerPose(c || o)), (g = J), h !== null)) {
        const ft = h.views;
        m !== null &&
          (t.setRenderTargetFramebuffer(S, m.framebuffer),
          t.setRenderTarget(S));
        let lt = !1;
        ft.length !== x.cameras.length && ((x.cameras.length = 0), (lt = !0));
        for (let At = 0; At < ft.length; At++) {
          const Nt = ft[At];
          let re = null;
          if (m !== null) re = m.getViewport(Nt);
          else {
            const ce = d.getViewSubImage(p, Nt);
            (re = ce.viewport),
              At === 0 &&
                (t.setRenderTargetTextures(
                  S,
                  ce.colorTexture,
                  p.ignoreDepthValues ? void 0 : ce.depthStencilTexture
                ),
                t.setRenderTarget(S));
          }
          let C = w[At];
          C === void 0 &&
            ((C = new ke()),
            C.layers.enable(At),
            (C.viewport = new te()),
            (w[At] = C)),
            C.matrix.fromArray(Nt.transform.matrix),
            C.matrix.decompose(C.position, C.quaternion, C.scale),
            C.projectionMatrix.fromArray(Nt.projectionMatrix),
            C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),
            C.viewport.set(re.x, re.y, re.width, re.height),
            At === 0 &&
              (x.matrix.copy(C.matrix),
              x.matrix.decompose(x.position, x.quaternion, x.scale)),
            lt === !0 && x.cameras.push(C);
        }
        const wt = r.enabledFeatures;
        if (wt && wt.includes('depth-sensing')) {
          const At = d.getDepthInformation(ft[0]);
          At && At.isValid && At.texture && b.init(t, At, r.renderState);
        }
      }
      for (let ft = 0; ft < M.length; ft++) {
        const lt = y[ft],
          wt = M[ft];
        lt !== null && wt !== void 0 && wt.update(lt, J, c || o);
      }
      mt && mt(z, J),
        J.detectedPlanes &&
          i.dispatchEvent({ type: 'planesdetected', data: J }),
        (g = null);
    }
    const Kt = new vh();
    Kt.setAnimationLoop(Ot),
      (this.setAnimationLoop = function (z) {
        mt = z;
      }),
      (this.dispose = function () {});
  }
}
const ei = new ln(),
  Vv = new le();
function zv(n, t) {
  function e(f, u) {
    f.matrixAutoUpdate === !0 && f.updateMatrix(), u.value.copy(f.matrix);
  }
  function i(f, u) {
    u.color.getRGB(f.fogColor.value, mh(n)),
      u.isFog
        ? ((f.fogNear.value = u.near), (f.fogFar.value = u.far))
        : u.isFogExp2 && (f.fogDensity.value = u.density);
  }
  function r(f, u, S, M, y) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial
      ? s(f, u)
      : u.isMeshToonMaterial
      ? (s(f, u), d(f, u))
      : u.isMeshPhongMaterial
      ? (s(f, u), h(f, u))
      : u.isMeshStandardMaterial
      ? (s(f, u), p(f, u), u.isMeshPhysicalMaterial && m(f, u, y))
      : u.isMeshMatcapMaterial
      ? (s(f, u), g(f, u))
      : u.isMeshDepthMaterial
      ? s(f, u)
      : u.isMeshDistanceMaterial
      ? (s(f, u), b(f, u))
      : u.isMeshNormalMaterial
      ? s(f, u)
      : u.isLineBasicMaterial
      ? (o(f, u), u.isLineDashedMaterial && a(f, u))
      : u.isPointsMaterial
      ? l(f, u, S, M)
      : u.isSpriteMaterial
      ? c(f, u)
      : u.isShadowMaterial
      ? (f.color.value.copy(u.color), (f.opacity.value = u.opacity))
      : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(f, u) {
    (f.opacity.value = u.opacity),
      u.color && f.diffuse.value.copy(u.color),
      u.emissive &&
        f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),
      u.map && ((f.map.value = u.map), e(u.map, f.mapTransform)),
      u.alphaMap &&
        ((f.alphaMap.value = u.alphaMap), e(u.alphaMap, f.alphaMapTransform)),
      u.bumpMap &&
        ((f.bumpMap.value = u.bumpMap),
        e(u.bumpMap, f.bumpMapTransform),
        (f.bumpScale.value = u.bumpScale),
        u.side === De && (f.bumpScale.value *= -1)),
      u.normalMap &&
        ((f.normalMap.value = u.normalMap),
        e(u.normalMap, f.normalMapTransform),
        f.normalScale.value.copy(u.normalScale),
        u.side === De && f.normalScale.value.negate()),
      u.displacementMap &&
        ((f.displacementMap.value = u.displacementMap),
        e(u.displacementMap, f.displacementMapTransform),
        (f.displacementScale.value = u.displacementScale),
        (f.displacementBias.value = u.displacementBias)),
      u.emissiveMap &&
        ((f.emissiveMap.value = u.emissiveMap),
        e(u.emissiveMap, f.emissiveMapTransform)),
      u.specularMap &&
        ((f.specularMap.value = u.specularMap),
        e(u.specularMap, f.specularMapTransform)),
      u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
    const S = t.get(u),
      M = S.envMap,
      y = S.envMapRotation;
    M &&
      ((f.envMap.value = M),
      ei.copy(y),
      (ei.x *= -1),
      (ei.y *= -1),
      (ei.z *= -1),
      M.isCubeTexture &&
        M.isRenderTargetTexture === !1 &&
        ((ei.y *= -1), (ei.z *= -1)),
      f.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(ei)),
      (f.flipEnvMap.value =
        M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
      (f.reflectivity.value = u.reflectivity),
      (f.ior.value = u.ior),
      (f.refractionRatio.value = u.refractionRatio)),
      u.lightMap &&
        ((f.lightMap.value = u.lightMap),
        (f.lightMapIntensity.value = u.lightMapIntensity),
        e(u.lightMap, f.lightMapTransform)),
      u.aoMap &&
        ((f.aoMap.value = u.aoMap),
        (f.aoMapIntensity.value = u.aoMapIntensity),
        e(u.aoMap, f.aoMapTransform));
  }
  function o(f, u) {
    f.diffuse.value.copy(u.color),
      (f.opacity.value = u.opacity),
      u.map && ((f.map.value = u.map), e(u.map, f.mapTransform));
  }
  function a(f, u) {
    (f.dashSize.value = u.dashSize),
      (f.totalSize.value = u.dashSize + u.gapSize),
      (f.scale.value = u.scale);
  }
  function l(f, u, S, M) {
    f.diffuse.value.copy(u.color),
      (f.opacity.value = u.opacity),
      (f.size.value = u.size * S),
      (f.scale.value = M * 0.5),
      u.map && ((f.map.value = u.map), e(u.map, f.uvTransform)),
      u.alphaMap &&
        ((f.alphaMap.value = u.alphaMap), e(u.alphaMap, f.alphaMapTransform)),
      u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
  }
  function c(f, u) {
    f.diffuse.value.copy(u.color),
      (f.opacity.value = u.opacity),
      (f.rotation.value = u.rotation),
      u.map && ((f.map.value = u.map), e(u.map, f.mapTransform)),
      u.alphaMap &&
        ((f.alphaMap.value = u.alphaMap), e(u.alphaMap, f.alphaMapTransform)),
      u.alphaTest > 0 && (f.alphaTest.value = u.alphaTest);
  }
  function h(f, u) {
    f.specular.value.copy(u.specular),
      (f.shininess.value = Math.max(u.shininess, 1e-4));
  }
  function d(f, u) {
    u.gradientMap && (f.gradientMap.value = u.gradientMap);
  }
  function p(f, u) {
    (f.metalness.value = u.metalness),
      u.metalnessMap &&
        ((f.metalnessMap.value = u.metalnessMap),
        e(u.metalnessMap, f.metalnessMapTransform)),
      (f.roughness.value = u.roughness),
      u.roughnessMap &&
        ((f.roughnessMap.value = u.roughnessMap),
        e(u.roughnessMap, f.roughnessMapTransform)),
      u.envMap && (f.envMapIntensity.value = u.envMapIntensity);
  }
  function m(f, u, S) {
    (f.ior.value = u.ior),
      u.sheen > 0 &&
        (f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),
        (f.sheenRoughness.value = u.sheenRoughness),
        u.sheenColorMap &&
          ((f.sheenColorMap.value = u.sheenColorMap),
          e(u.sheenColorMap, f.sheenColorMapTransform)),
        u.sheenRoughnessMap &&
          ((f.sheenRoughnessMap.value = u.sheenRoughnessMap),
          e(u.sheenRoughnessMap, f.sheenRoughnessMapTransform))),
      u.clearcoat > 0 &&
        ((f.clearcoat.value = u.clearcoat),
        (f.clearcoatRoughness.value = u.clearcoatRoughness),
        u.clearcoatMap &&
          ((f.clearcoatMap.value = u.clearcoatMap),
          e(u.clearcoatMap, f.clearcoatMapTransform)),
        u.clearcoatRoughnessMap &&
          ((f.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap),
          e(u.clearcoatRoughnessMap, f.clearcoatRoughnessMapTransform)),
        u.clearcoatNormalMap &&
          ((f.clearcoatNormalMap.value = u.clearcoatNormalMap),
          e(u.clearcoatNormalMap, f.clearcoatNormalMapTransform),
          f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),
          u.side === De && f.clearcoatNormalScale.value.negate())),
      u.dispersion > 0 && (f.dispersion.value = u.dispersion),
      u.iridescence > 0 &&
        ((f.iridescence.value = u.iridescence),
        (f.iridescenceIOR.value = u.iridescenceIOR),
        (f.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0]),
        (f.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1]),
        u.iridescenceMap &&
          ((f.iridescenceMap.value = u.iridescenceMap),
          e(u.iridescenceMap, f.iridescenceMapTransform)),
        u.iridescenceThicknessMap &&
          ((f.iridescenceThicknessMap.value = u.iridescenceThicknessMap),
          e(u.iridescenceThicknessMap, f.iridescenceThicknessMapTransform))),
      u.transmission > 0 &&
        ((f.transmission.value = u.transmission),
        (f.transmissionSamplerMap.value = S.texture),
        f.transmissionSamplerSize.value.set(S.width, S.height),
        u.transmissionMap &&
          ((f.transmissionMap.value = u.transmissionMap),
          e(u.transmissionMap, f.transmissionMapTransform)),
        (f.thickness.value = u.thickness),
        u.thicknessMap &&
          ((f.thicknessMap.value = u.thicknessMap),
          e(u.thicknessMap, f.thicknessMapTransform)),
        (f.attenuationDistance.value = u.attenuationDistance),
        f.attenuationColor.value.copy(u.attenuationColor)),
      u.anisotropy > 0 &&
        (f.anisotropyVector.value.set(
          u.anisotropy * Math.cos(u.anisotropyRotation),
          u.anisotropy * Math.sin(u.anisotropyRotation)
        ),
        u.anisotropyMap &&
          ((f.anisotropyMap.value = u.anisotropyMap),
          e(u.anisotropyMap, f.anisotropyMapTransform))),
      (f.specularIntensity.value = u.specularIntensity),
      f.specularColor.value.copy(u.specularColor),
      u.specularColorMap &&
        ((f.specularColorMap.value = u.specularColorMap),
        e(u.specularColorMap, f.specularColorMapTransform)),
      u.specularIntensityMap &&
        ((f.specularIntensityMap.value = u.specularIntensityMap),
        e(u.specularIntensityMap, f.specularIntensityMapTransform));
  }
  function g(f, u) {
    u.matcap && (f.matcap.value = u.matcap);
  }
  function b(f, u) {
    const S = t.get(u).light;
    f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),
      (f.nearDistance.value = S.shadow.camera.near),
      (f.farDistance.value = S.shadow.camera.far);
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: r };
}
function Hv(n, t, e, i) {
  let r = {},
    s = {},
    o = [];
  const a = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(S, M) {
    const y = M.program;
    i.uniformBlockBinding(S, y);
  }
  function c(S, M) {
    let y = r[S.id];
    y === void 0 &&
      (g(S), (y = h(S)), (r[S.id] = y), S.addEventListener('dispose', f));
    const F = M.program;
    i.updateUBOMapping(S, F);
    const A = t.render.frame;
    s[S.id] !== A && (p(S), (s[S.id] = A));
  }
  function h(S) {
    const M = d();
    S.__bindingPointIndex = M;
    const y = n.createBuffer(),
      F = S.__size,
      A = S.usage;
    return (
      n.bindBuffer(n.UNIFORM_BUFFER, y),
      n.bufferData(n.UNIFORM_BUFFER, F, A),
      n.bindBuffer(n.UNIFORM_BUFFER, null),
      n.bindBufferBase(n.UNIFORM_BUFFER, M, y),
      y
    );
  }
  function d() {
    for (let S = 0; S < a; S++) if (o.indexOf(S) === -1) return o.push(S), S;
    return (
      console.error(
        'THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.'
      ),
      0
    );
  }
  function p(S) {
    const M = r[S.id],
      y = S.uniforms,
      F = S.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, M);
    for (let A = 0, T = y.length; A < T; A++) {
      const B = Array.isArray(y[A]) ? y[A] : [y[A]];
      for (let w = 0, x = B.length; w < x; w++) {
        const P = B[w];
        if (m(P, A, w, F) === !0) {
          const H = P.__offset,
            k = Array.isArray(P.value) ? P.value : [P.value];
          let Y = 0;
          for (let q = 0; q < k.length; q++) {
            const G = k[q],
              $ = b(G);
            typeof G == 'number' || typeof G == 'boolean'
              ? ((P.__data[0] = G),
                n.bufferSubData(n.UNIFORM_BUFFER, H + Y, P.__data))
              : G.isMatrix3
              ? ((P.__data[0] = G.elements[0]),
                (P.__data[1] = G.elements[1]),
                (P.__data[2] = G.elements[2]),
                (P.__data[3] = 0),
                (P.__data[4] = G.elements[3]),
                (P.__data[5] = G.elements[4]),
                (P.__data[6] = G.elements[5]),
                (P.__data[7] = 0),
                (P.__data[8] = G.elements[6]),
                (P.__data[9] = G.elements[7]),
                (P.__data[10] = G.elements[8]),
                (P.__data[11] = 0))
              : (G.toArray(P.__data, Y),
                (Y += $.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          n.bufferSubData(n.UNIFORM_BUFFER, H, P.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function m(S, M, y, F) {
    const A = S.value,
      T = M + '_' + y;
    if (F[T] === void 0)
      return (
        typeof A == 'number' || typeof A == 'boolean'
          ? (F[T] = A)
          : (F[T] = A.clone()),
        !0
      );
    {
      const B = F[T];
      if (typeof A == 'number' || typeof A == 'boolean') {
        if (B !== A) return (F[T] = A), !0;
      } else if (B.equals(A) === !1) return B.copy(A), !0;
    }
    return !1;
  }
  function g(S) {
    const M = S.uniforms;
    let y = 0;
    const F = 16;
    for (let T = 0, B = M.length; T < B; T++) {
      const w = Array.isArray(M[T]) ? M[T] : [M[T]];
      for (let x = 0, P = w.length; x < P; x++) {
        const H = w[x],
          k = Array.isArray(H.value) ? H.value : [H.value];
        for (let Y = 0, q = k.length; Y < q; Y++) {
          const G = k[Y],
            $ = b(G),
            V = y % F,
            ot = V % $.boundary,
            ht = V + ot;
          (y += ot),
            ht !== 0 && F - ht < $.storage && (y += F - ht),
            (H.__data = new Float32Array(
              $.storage / Float32Array.BYTES_PER_ELEMENT
            )),
            (H.__offset = y),
            (y += $.storage);
        }
      }
    }
    const A = y % F;
    return A > 0 && (y += F - A), (S.__size = y), (S.__cache = {}), this;
  }
  function b(S) {
    const M = { boundary: 0, storage: 0 };
    return (
      typeof S == 'number' || typeof S == 'boolean'
        ? ((M.boundary = 4), (M.storage = 4))
        : S.isVector2
        ? ((M.boundary = 8), (M.storage = 8))
        : S.isVector3 || S.isColor
        ? ((M.boundary = 16), (M.storage = 12))
        : S.isVector4
        ? ((M.boundary = 16), (M.storage = 16))
        : S.isMatrix3
        ? ((M.boundary = 48), (M.storage = 48))
        : S.isMatrix4
        ? ((M.boundary = 64), (M.storage = 64))
        : S.isTexture
        ? console.warn(
            'THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.'
          )
        : console.warn(
            'THREE.WebGLRenderer: Unsupported uniform value type.',
            S
          ),
      M
    );
  }
  function f(S) {
    const M = S.target;
    M.removeEventListener('dispose', f);
    const y = o.indexOf(M.__bindingPointIndex);
    o.splice(y, 1), n.deleteBuffer(r[M.id]), delete r[M.id], delete s[M.id];
  }
  function u() {
    for (const S in r) n.deleteBuffer(r[S]);
    (o = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: u };
}
class Gv {
  constructor(t = {}) {
    const {
      canvas: e = Ld(),
      context: i = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = 'default',
      failIfMajorPerformanceCaveat: d = !1,
    } = t;
    this.isWebGLRenderer = !0;
    let p;
    if (i !== null) {
      if (
        typeof WebGLRenderingContext < 'u' &&
        i instanceof WebGLRenderingContext
      )
        throw new Error(
          'THREE.WebGLRenderer: WebGL 1 is not supported since r163.'
        );
      p = i.getContextAttributes().alpha;
    } else p = o;
    const m = new Uint32Array(4),
      g = new Int32Array(4);
    let b = null,
      f = null;
    const u = [],
      S = [];
    (this.domElement = e),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Je),
      (this.toneMapping = Hn),
      (this.toneMappingExposure = 1);
    const M = this;
    let y = !1,
      F = 0,
      A = 0,
      T = null,
      B = -1,
      w = null;
    const x = new te(),
      P = new te();
    let H = null;
    const k = new zt(0);
    let Y = 0,
      q = e.width,
      G = e.height,
      $ = 1,
      V = null,
      ot = null;
    const ht = new te(0, 0, q, G),
      mt = new te(0, 0, q, G);
    let Ot = !1;
    const Kt = new Ua();
    let z = !1,
      J = !1;
    const ft = new le(),
      lt = new I(),
      wt = new te(),
      At = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Nt = !1;
    function re() {
      return T === null ? $ : 1;
    }
    let C = i;
    function ce(v, L) {
      return e.getContext(v, L);
    }
    try {
      const v = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: d,
      };
      if (
        ('setAttribute' in e &&
          e.setAttribute('data-engine', `three.js r${Ea}`),
        e.addEventListener('webglcontextlost', W, !1),
        e.addEventListener('webglcontextrestored', X, !1),
        e.addEventListener('webglcontextcreationerror', nt, !1),
        C === null)
      ) {
        const L = 'webgl2';
        if (((C = ce(L, v)), C === null))
          throw ce(L)
            ? new Error(
                'Error creating WebGL context with your selected attributes.'
              )
            : new Error('Error creating WebGL context.');
      }
    } catch (v) {
      throw (console.error('THREE.WebGLRenderer: ' + v.message), v);
    }
    let Yt,
      $t,
      gt,
      he,
      Ct,
      Pt,
      E,
      _,
      O,
      j,
      Z,
      K,
      xt,
      rt,
      ct,
      Rt,
      Q,
      at,
      Ft,
      St,
      ut,
      Tt,
      Ut,
      ne;
    function R() {
      (Yt = new Km(C)),
        Yt.init(),
        (Tt = new Iv(C, Yt)),
        ($t = new Hm(C, Yt, t, Tt)),
        (gt = new Rv(C)),
        (he = new Jm(C)),
        (Ct = new _v()),
        (Pt = new Dv(C, Yt, gt, Ct, $t, Tt, he)),
        (E = new Wm(M)),
        (_ = new Ym(M)),
        (O = new ip(C)),
        (Ut = new Vm(C, O)),
        (j = new $m(C, O, he, Ut)),
        (Z = new t_(C, j, O, he)),
        (Ft = new Qm(C, $t, Pt)),
        (Rt = new Gm(Ct)),
        (K = new mv(M, E, _, Yt, $t, Ut, Rt)),
        (xt = new zv(M, Ct)),
        (rt = new gv()),
        (ct = new Sv(Yt)),
        (at = new km(M, E, _, gt, Z, p, l)),
        (Q = new Pv(M, Z, $t)),
        (ne = new Hv(C, he, $t, gt)),
        (St = new zm(C, Yt, he)),
        (ut = new Zm(C, Yt, he)),
        (he.programs = K.programs),
        (M.capabilities = $t),
        (M.extensions = Yt),
        (M.properties = Ct),
        (M.renderLists = rt),
        (M.shadowMap = Q),
        (M.state = gt),
        (M.info = he);
    }
    R();
    const tt = new kv(M, C);
    (this.xr = tt),
      (this.getContext = function () {
        return C;
      }),
      (this.getContextAttributes = function () {
        return C.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const v = Yt.get('WEBGL_lose_context');
        v && v.loseContext();
      }),
      (this.forceContextRestore = function () {
        const v = Yt.get('WEBGL_lose_context');
        v && v.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return $;
      }),
      (this.setPixelRatio = function (v) {
        v !== void 0 && (($ = v), this.setSize(q, G, !1));
      }),
      (this.getSize = function (v) {
        return v.set(q, G);
      }),
      (this.setSize = function (v, L, U = !0) {
        if (tt.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (q = v),
          (G = L),
          (e.width = Math.floor(v * $)),
          (e.height = Math.floor(L * $)),
          U === !0 && ((e.style.width = v + 'px'), (e.style.height = L + 'px')),
          this.setViewport(0, 0, v, L);
      }),
      (this.getDrawingBufferSize = function (v) {
        return v.set(q * $, G * $).floor();
      }),
      (this.setDrawingBufferSize = function (v, L, U) {
        (q = v),
          (G = L),
          ($ = U),
          (e.width = Math.floor(v * U)),
          (e.height = Math.floor(L * U)),
          this.setViewport(0, 0, v, L);
      }),
      (this.getCurrentViewport = function (v) {
        return v.copy(x);
      }),
      (this.getViewport = function (v) {
        return v.copy(ht);
      }),
      (this.setViewport = function (v, L, U, N) {
        v.isVector4 ? ht.set(v.x, v.y, v.z, v.w) : ht.set(v, L, U, N),
          gt.viewport(x.copy(ht).multiplyScalar($).round());
      }),
      (this.getScissor = function (v) {
        return v.copy(mt);
      }),
      (this.setScissor = function (v, L, U, N) {
        v.isVector4 ? mt.set(v.x, v.y, v.z, v.w) : mt.set(v, L, U, N),
          gt.scissor(P.copy(mt).multiplyScalar($).round());
      }),
      (this.getScissorTest = function () {
        return Ot;
      }),
      (this.setScissorTest = function (v) {
        gt.setScissorTest((Ot = v));
      }),
      (this.setOpaqueSort = function (v) {
        V = v;
      }),
      (this.setTransparentSort = function (v) {
        ot = v;
      }),
      (this.getClearColor = function (v) {
        return v.copy(at.getClearColor());
      }),
      (this.setClearColor = function () {
        at.setClearColor.apply(at, arguments);
      }),
      (this.getClearAlpha = function () {
        return at.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        at.setClearAlpha.apply(at, arguments);
      }),
      (this.clear = function (v = !0, L = !0, U = !0) {
        let N = 0;
        if (v) {
          let D = !1;
          if (T !== null) {
            const et = T.texture.format;
            D = et === Pa || et === Aa || et === Ta;
          }
          if (D) {
            const et = T.texture.type,
              st =
                et === Sn ||
                et === hi ||
                et === br ||
                et === Ki ||
                et === ya ||
                et === Ca,
              dt = at.getClearColor(),
              pt = at.getClearAlpha(),
              Mt = dt.r,
              Et = dt.g,
              _t = dt.b;
            st
              ? ((m[0] = Mt),
                (m[1] = Et),
                (m[2] = _t),
                (m[3] = pt),
                C.clearBufferuiv(C.COLOR, 0, m))
              : ((g[0] = Mt),
                (g[1] = Et),
                (g[2] = _t),
                (g[3] = pt),
                C.clearBufferiv(C.COLOR, 0, g));
          } else N |= C.COLOR_BUFFER_BIT;
        }
        L && (N |= C.DEPTH_BUFFER_BIT),
          U &&
            ((N |= C.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          C.clear(N);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        e.removeEventListener('webglcontextlost', W, !1),
          e.removeEventListener('webglcontextrestored', X, !1),
          e.removeEventListener('webglcontextcreationerror', nt, !1),
          rt.dispose(),
          ct.dispose(),
          Ct.dispose(),
          E.dispose(),
          _.dispose(),
          Z.dispose(),
          Ut.dispose(),
          ne.dispose(),
          K.dispose(),
          tt.dispose(),
          tt.removeEventListener('sessionstart', en),
          tt.removeEventListener('sessionend', ul),
          Kn.stop();
      });
    function W(v) {
      v.preventDefault(),
        console.log('THREE.WebGLRenderer: Context Lost.'),
        (y = !0);
    }
    function X() {
      console.log('THREE.WebGLRenderer: Context Restored.'), (y = !1);
      const v = he.autoReset,
        L = Q.enabled,
        U = Q.autoUpdate,
        N = Q.needsUpdate,
        D = Q.type;
      R(),
        (he.autoReset = v),
        (Q.enabled = L),
        (Q.autoUpdate = U),
        (Q.needsUpdate = N),
        (Q.type = D);
    }
    function nt(v) {
      console.error(
        'THREE.WebGLRenderer: A WebGL context could not be created. Reason: ',
        v.statusMessage
      );
    }
    function bt(v) {
      const L = v.target;
      L.removeEventListener('dispose', bt), Bt(L);
    }
    function Bt(v) {
      ue(v), Ct.remove(v);
    }
    function ue(v) {
      const L = Ct.get(v).programs;
      L !== void 0 &&
        (L.forEach(function (U) {
          K.releaseProgram(U);
        }),
        v.isShaderMaterial && K.releaseShaderCache(v));
    }
    this.renderBufferDirect = function (v, L, U, N, D, et) {
      L === null && (L = At);
      const st = D.isMesh && D.matrixWorld.determinant() < 0,
        dt = Lu(v, L, U, N, D);
      gt.setMaterial(N, st);
      let pt = U.index,
        Mt = 1;
      if (N.wireframe === !0) {
        if (((pt = j.getWireframeAttribute(U)), pt === void 0)) return;
        Mt = 2;
      }
      const Et = U.drawRange,
        _t = U.attributes.position;
      let Gt = Et.start * Mt,
        se = (Et.start + Et.count) * Mt;
      et !== null &&
        ((Gt = Math.max(Gt, et.start * Mt)),
        (se = Math.min(se, (et.start + et.count) * Mt))),
        pt !== null
          ? ((Gt = Math.max(Gt, 0)), (se = Math.min(se, pt.count)))
          : _t != null &&
            ((Gt = Math.max(Gt, 0)), (se = Math.min(se, _t.count)));
      const oe = se - Gt;
      if (oe < 0 || oe === 1 / 0) return;
      Ut.setup(D, N, dt, U, pt);
      let Ne,
        Wt = St;
      if (
        (pt !== null && ((Ne = O.get(pt)), (Wt = ut), Wt.setIndex(Ne)),
        D.isMesh)
      )
        N.wireframe === !0
          ? (gt.setLineWidth(N.wireframeLinewidth * re()), Wt.setMode(C.LINES))
          : Wt.setMode(C.TRIANGLES);
      else if (D.isLine) {
        let vt = N.linewidth;
        vt === void 0 && (vt = 1),
          gt.setLineWidth(vt * re()),
          D.isLineSegments
            ? Wt.setMode(C.LINES)
            : D.isLineLoop
            ? Wt.setMode(C.LINE_LOOP)
            : Wt.setMode(C.LINE_STRIP);
      } else
        D.isPoints
          ? Wt.setMode(C.POINTS)
          : D.isSprite && Wt.setMode(C.TRIANGLES);
      if (D.isBatchedMesh)
        if (D._multiDrawInstances !== null)
          Wt.renderMultiDrawInstances(
            D._multiDrawStarts,
            D._multiDrawCounts,
            D._multiDrawCount,
            D._multiDrawInstances
          );
        else if (Yt.get('WEBGL_multi_draw'))
          Wt.renderMultiDraw(
            D._multiDrawStarts,
            D._multiDrawCounts,
            D._multiDrawCount
          );
        else {
          const vt = D._multiDrawStarts,
            Me = D._multiDrawCounts,
            Xt = D._multiDrawCount,
            Ye = pt ? O.get(pt).bytesPerElement : 1,
            xi = Ct.get(N).currentProgram.getUniforms();
          for (let Oe = 0; Oe < Xt; Oe++)
            xi.setValue(C, '_gl_DrawID', Oe), Wt.render(vt[Oe] / Ye, Me[Oe]);
        }
      else if (D.isInstancedMesh) Wt.renderInstances(Gt, oe, D.count);
      else if (U.isInstancedBufferGeometry) {
        const vt = U._maxInstanceCount !== void 0 ? U._maxInstanceCount : 1 / 0,
          Me = Math.min(U.instanceCount, vt);
        Wt.renderInstances(Gt, oe, Me);
      } else Wt.render(Gt, oe);
    };
    function be(v, L, U) {
      v.transparent === !0 && v.side === xn && v.forceSinglePass === !1
        ? ((v.side = De),
          (v.needsUpdate = !0),
          Xr(v, L, U),
          (v.side = Wn),
          (v.needsUpdate = !0),
          Xr(v, L, U),
          (v.side = xn))
        : Xr(v, L, U);
    }
    (this.compile = function (v, L, U = null) {
      U === null && (U = v),
        (f = ct.get(U)),
        f.init(L),
        S.push(f),
        U.traverseVisible(function (D) {
          D.isLight &&
            D.layers.test(L.layers) &&
            (f.pushLight(D), D.castShadow && f.pushShadow(D));
        }),
        v !== U &&
          v.traverseVisible(function (D) {
            D.isLight &&
              D.layers.test(L.layers) &&
              (f.pushLight(D), D.castShadow && f.pushShadow(D));
          }),
        f.setupLights();
      const N = new Set();
      return (
        v.traverse(function (D) {
          const et = D.material;
          if (et)
            if (Array.isArray(et))
              for (let st = 0; st < et.length; st++) {
                const dt = et[st];
                be(dt, U, D), N.add(dt);
              }
            else be(et, U, D), N.add(et);
        }),
        S.pop(),
        (f = null),
        N
      );
    }),
      (this.compileAsync = function (v, L, U = null) {
        const N = this.compile(v, L, U);
        return new Promise((D) => {
          function et() {
            if (
              (N.forEach(function (st) {
                Ct.get(st).currentProgram.isReady() && N.delete(st);
              }),
              N.size === 0)
            ) {
              D(v);
              return;
            }
            setTimeout(et, 10);
          }
          Yt.get('KHR_parallel_shader_compile') !== null
            ? et()
            : setTimeout(et, 10);
        });
      });
    let Ht = null;
    function un(v) {
      Ht && Ht(v);
    }
    function en() {
      Kn.stop();
    }
    function ul() {
      Kn.start();
    }
    const Kn = new vh();
    Kn.setAnimationLoop(un),
      typeof self < 'u' && Kn.setContext(self),
      (this.setAnimationLoop = function (v) {
        (Ht = v), tt.setAnimationLoop(v), v === null ? Kn.stop() : Kn.start();
      }),
      tt.addEventListener('sessionstart', en),
      tt.addEventListener('sessionend', ul),
      (this.render = function (v, L) {
        if (L !== void 0 && L.isCamera !== !0) {
          console.error(
            'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.'
          );
          return;
        }
        if (y === !0) return;
        if (
          (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(),
          L.parent === null &&
            L.matrixWorldAutoUpdate === !0 &&
            L.updateMatrixWorld(),
          tt.enabled === !0 &&
            tt.isPresenting === !0 &&
            (tt.cameraAutoUpdate === !0 && tt.updateCamera(L),
            (L = tt.getCamera())),
          v.isScene === !0 && v.onBeforeRender(M, v, L, T),
          (f = ct.get(v, S.length)),
          f.init(L),
          S.push(f),
          ft.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse),
          Kt.setFromProjectionMatrix(ft),
          (J = this.localClippingEnabled),
          (z = Rt.init(this.clippingPlanes, J)),
          (b = rt.get(v, u.length)),
          b.init(),
          u.push(b),
          tt.enabled === !0 && tt.isPresenting === !0)
        ) {
          const et = M.xr.getDepthSensingMesh();
          et !== null && qs(et, L, -1 / 0, M.sortObjects);
        }
        qs(v, L, 0, M.sortObjects),
          b.finish(),
          M.sortObjects === !0 && b.sort(V, ot),
          (Nt =
            tt.enabled === !1 ||
            tt.isPresenting === !1 ||
            tt.hasDepthSensing() === !1),
          Nt && at.addToRenderList(b, v),
          this.info.render.frame++,
          z === !0 && Rt.beginShadows();
        const U = f.state.shadowsArray;
        Q.render(U, v, L),
          z === !0 && Rt.endShadows(),
          this.info.autoReset === !0 && this.info.reset();
        const N = b.opaque,
          D = b.transmissive;
        if ((f.setupLights(), L.isArrayCamera)) {
          const et = L.cameras;
          if (D.length > 0)
            for (let st = 0, dt = et.length; st < dt; st++) {
              const pt = et[st];
              pl(N, D, v, pt);
            }
          Nt && at.render(v);
          for (let st = 0, dt = et.length; st < dt; st++) {
            const pt = et[st];
            dl(b, v, pt, pt.viewport);
          }
        } else D.length > 0 && pl(N, D, v, L), Nt && at.render(v), dl(b, v, L);
        T !== null &&
          (Pt.updateMultisampleRenderTarget(T), Pt.updateRenderTargetMipmap(T)),
          v.isScene === !0 && v.onAfterRender(M, v, L),
          Ut.resetDefaultState(),
          (B = -1),
          (w = null),
          S.pop(),
          S.length > 0
            ? ((f = S[S.length - 1]),
              z === !0 && Rt.setGlobalState(M.clippingPlanes, f.state.camera))
            : (f = null),
          u.pop(),
          u.length > 0 ? (b = u[u.length - 1]) : (b = null);
      });
    function qs(v, L, U, N) {
      if (v.visible === !1) return;
      if (v.layers.test(L.layers)) {
        if (v.isGroup) U = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === !0 && v.update(L);
        else if (v.isLight) f.pushLight(v), v.castShadow && f.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || Kt.intersectsSprite(v)) {
            N && wt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ft);
            const st = Z.update(v),
              dt = v.material;
            dt.visible && b.push(v, st, dt, U, wt.z, null);
          }
        } else if (
          (v.isMesh || v.isLine || v.isPoints) &&
          (!v.frustumCulled || Kt.intersectsObject(v))
        ) {
          const st = Z.update(v),
            dt = v.material;
          if (
            (N &&
              (v.boundingSphere !== void 0
                ? (v.boundingSphere === null && v.computeBoundingSphere(),
                  wt.copy(v.boundingSphere.center))
                : (st.boundingSphere === null && st.computeBoundingSphere(),
                  wt.copy(st.boundingSphere.center)),
              wt.applyMatrix4(v.matrixWorld).applyMatrix4(ft)),
            Array.isArray(dt))
          ) {
            const pt = st.groups;
            for (let Mt = 0, Et = pt.length; Mt < Et; Mt++) {
              const _t = pt[Mt],
                Gt = dt[_t.materialIndex];
              Gt && Gt.visible && b.push(v, st, Gt, U, wt.z, _t);
            }
          } else dt.visible && b.push(v, st, dt, U, wt.z, null);
        }
      }
      const et = v.children;
      for (let st = 0, dt = et.length; st < dt; st++) qs(et[st], L, U, N);
    }
    function dl(v, L, U, N) {
      const D = v.opaque,
        et = v.transmissive,
        st = v.transparent;
      f.setupLightsView(U),
        z === !0 && Rt.setGlobalState(M.clippingPlanes, U),
        N && gt.viewport(x.copy(N)),
        D.length > 0 && Wr(D, L, U),
        et.length > 0 && Wr(et, L, U),
        st.length > 0 && Wr(st, L, U),
        gt.buffers.depth.setTest(!0),
        gt.buffers.depth.setMask(!0),
        gt.buffers.color.setMask(!0),
        gt.setPolygonOffset(!1);
    }
    function pl(v, L, U, N) {
      if ((U.isScene === !0 ? U.overrideMaterial : null) !== null) return;
      f.state.transmissionRenderTarget[N.id] === void 0 &&
        (f.state.transmissionRenderTarget[N.id] = new ui(1, 1, {
          generateMipmaps: !0,
          type:
            Yt.has('EXT_color_buffer_half_float') ||
            Yt.has('EXT_color_buffer_float')
              ? Ar
              : Sn,
          minFilter: li,
          samples: 4,
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: jt.workingColorSpace,
        }));
      const et = f.state.transmissionRenderTarget[N.id],
        st = N.viewport || x;
      et.setSize(st.z, st.w);
      const dt = M.getRenderTarget();
      M.setRenderTarget(et),
        M.getClearColor(k),
        (Y = M.getClearAlpha()),
        Y < 1 && M.setClearColor(16777215, 0.5),
        M.clear(),
        Nt && at.render(U);
      const pt = M.toneMapping;
      M.toneMapping = Hn;
      const Mt = N.viewport;
      if (
        (N.viewport !== void 0 && (N.viewport = void 0),
        f.setupLightsView(N),
        z === !0 && Rt.setGlobalState(M.clippingPlanes, N),
        Wr(v, U, N),
        Pt.updateMultisampleRenderTarget(et),
        Pt.updateRenderTargetMipmap(et),
        Yt.has('WEBGL_multisampled_render_to_texture') === !1)
      ) {
        let Et = !1;
        for (let _t = 0, Gt = L.length; _t < Gt; _t++) {
          const se = L[_t],
            oe = se.object,
            Ne = se.geometry,
            Wt = se.material,
            vt = se.group;
          if (Wt.side === xn && oe.layers.test(N.layers)) {
            const Me = Wt.side;
            (Wt.side = De),
              (Wt.needsUpdate = !0),
              fl(oe, U, N, Ne, Wt, vt),
              (Wt.side = Me),
              (Wt.needsUpdate = !0),
              (Et = !0);
          }
        }
        Et === !0 &&
          (Pt.updateMultisampleRenderTarget(et),
          Pt.updateRenderTargetMipmap(et));
      }
      M.setRenderTarget(dt),
        M.setClearColor(k, Y),
        Mt !== void 0 && (N.viewport = Mt),
        (M.toneMapping = pt);
    }
    function Wr(v, L, U) {
      const N = L.isScene === !0 ? L.overrideMaterial : null;
      for (let D = 0, et = v.length; D < et; D++) {
        const st = v[D],
          dt = st.object,
          pt = st.geometry,
          Mt = N === null ? st.material : N,
          Et = st.group;
        dt.layers.test(U.layers) && fl(dt, L, U, pt, Mt, Et);
      }
    }
    function fl(v, L, U, N, D, et) {
      v.onBeforeRender(M, L, U, N, D, et),
        v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, v.matrixWorld),
        v.normalMatrix.getNormalMatrix(v.modelViewMatrix),
        D.onBeforeRender(M, L, U, N, v, et),
        D.transparent === !0 && D.side === xn && D.forceSinglePass === !1
          ? ((D.side = De),
            (D.needsUpdate = !0),
            M.renderBufferDirect(U, L, N, D, v, et),
            (D.side = Wn),
            (D.needsUpdate = !0),
            M.renderBufferDirect(U, L, N, D, v, et),
            (D.side = xn))
          : M.renderBufferDirect(U, L, N, D, v, et),
        v.onAfterRender(M, L, U, N, D, et);
    }
    function Xr(v, L, U) {
      L.isScene !== !0 && (L = At);
      const N = Ct.get(v),
        D = f.state.lights,
        et = f.state.shadowsArray,
        st = D.state.version,
        dt = K.getParameters(v, D.state, et, L, U),
        pt = K.getProgramCacheKey(dt);
      let Mt = N.programs;
      (N.environment = v.isMeshStandardMaterial ? L.environment : null),
        (N.fog = L.fog),
        (N.envMap = (v.isMeshStandardMaterial ? _ : E).get(
          v.envMap || N.environment
        )),
        (N.envMapRotation =
          N.environment !== null && v.envMap === null
            ? L.environmentRotation
            : v.envMapRotation),
        Mt === void 0 &&
          (v.addEventListener('dispose', bt),
          (Mt = new Map()),
          (N.programs = Mt));
      let Et = Mt.get(pt);
      if (Et !== void 0) {
        if (N.currentProgram === Et && N.lightsStateVersion === st)
          return _l(v, dt), Et;
      } else
        (dt.uniforms = K.getUniforms(v)),
          v.onBeforeCompile(dt, M),
          (Et = K.acquireProgram(dt, pt)),
          Mt.set(pt, Et),
          (N.uniforms = dt.uniforms);
      const _t = N.uniforms;
      return (
        ((!v.isShaderMaterial && !v.isRawShaderMaterial) ||
          v.clipping === !0) &&
          (_t.clippingPlanes = Rt.uniform),
        _l(v, dt),
        (N.needsLights = Iu(v)),
        (N.lightsStateVersion = st),
        N.needsLights &&
          ((_t.ambientLightColor.value = D.state.ambient),
          (_t.lightProbe.value = D.state.probe),
          (_t.directionalLights.value = D.state.directional),
          (_t.directionalLightShadows.value = D.state.directionalShadow),
          (_t.spotLights.value = D.state.spot),
          (_t.spotLightShadows.value = D.state.spotShadow),
          (_t.rectAreaLights.value = D.state.rectArea),
          (_t.ltc_1.value = D.state.rectAreaLTC1),
          (_t.ltc_2.value = D.state.rectAreaLTC2),
          (_t.pointLights.value = D.state.point),
          (_t.pointLightShadows.value = D.state.pointShadow),
          (_t.hemisphereLights.value = D.state.hemi),
          (_t.directionalShadowMap.value = D.state.directionalShadowMap),
          (_t.directionalShadowMatrix.value = D.state.directionalShadowMatrix),
          (_t.spotShadowMap.value = D.state.spotShadowMap),
          (_t.spotLightMatrix.value = D.state.spotLightMatrix),
          (_t.spotLightMap.value = D.state.spotLightMap),
          (_t.pointShadowMap.value = D.state.pointShadowMap),
          (_t.pointShadowMatrix.value = D.state.pointShadowMatrix)),
        (N.currentProgram = Et),
        (N.uniformsList = null),
        Et
      );
    }
    function ml(v) {
      if (v.uniformsList === null) {
        const L = v.currentProgram.getUniforms();
        v.uniformsList = Es.seqWithValue(L.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function _l(v, L) {
      const U = Ct.get(v);
      (U.outputColorSpace = L.outputColorSpace),
        (U.batching = L.batching),
        (U.batchingColor = L.batchingColor),
        (U.instancing = L.instancing),
        (U.instancingColor = L.instancingColor),
        (U.instancingMorph = L.instancingMorph),
        (U.skinning = L.skinning),
        (U.morphTargets = L.morphTargets),
        (U.morphNormals = L.morphNormals),
        (U.morphColors = L.morphColors),
        (U.morphTargetsCount = L.morphTargetsCount),
        (U.numClippingPlanes = L.numClippingPlanes),
        (U.numIntersection = L.numClipIntersection),
        (U.vertexAlphas = L.vertexAlphas),
        (U.vertexTangents = L.vertexTangents),
        (U.toneMapping = L.toneMapping);
    }
    function Lu(v, L, U, N, D) {
      L.isScene !== !0 && (L = At), Pt.resetTextureUnits();
      const et = L.fog,
        st = N.isMeshStandardMaterial ? L.environment : null,
        dt =
          T === null
            ? M.outputColorSpace
            : T.isXRRenderTarget === !0
            ? T.texture.colorSpace
            : qn,
        pt = (N.isMeshStandardMaterial ? _ : E).get(N.envMap || st),
        Mt =
          N.vertexColors === !0 &&
          !!U.attributes.color &&
          U.attributes.color.itemSize === 4,
        Et = !!U.attributes.tangent && (!!N.normalMap || N.anisotropy > 0),
        _t = !!U.morphAttributes.position,
        Gt = !!U.morphAttributes.normal,
        se = !!U.morphAttributes.color;
      let oe = Hn;
      N.toneMapped &&
        (T === null || T.isXRRenderTarget === !0) &&
        (oe = M.toneMapping);
      const Ne =
          U.morphAttributes.position ||
          U.morphAttributes.normal ||
          U.morphAttributes.color,
        Wt = Ne !== void 0 ? Ne.length : 0,
        vt = Ct.get(N),
        Me = f.state.lights;
      if (z === !0 && (J === !0 || v !== w)) {
        const He = v === w && N.id === B;
        Rt.setState(N, v, He);
      }
      let Xt = !1;
      N.version === vt.__version
        ? ((vt.needsLights && vt.lightsStateVersion !== Me.state.version) ||
            vt.outputColorSpace !== dt ||
            (D.isBatchedMesh && vt.batching === !1) ||
            (!D.isBatchedMesh && vt.batching === !0) ||
            (D.isBatchedMesh &&
              vt.batchingColor === !0 &&
              D.colorTexture === null) ||
            (D.isBatchedMesh &&
              vt.batchingColor === !1 &&
              D.colorTexture !== null) ||
            (D.isInstancedMesh && vt.instancing === !1) ||
            (!D.isInstancedMesh && vt.instancing === !0) ||
            (D.isSkinnedMesh && vt.skinning === !1) ||
            (!D.isSkinnedMesh && vt.skinning === !0) ||
            (D.isInstancedMesh &&
              vt.instancingColor === !0 &&
              D.instanceColor === null) ||
            (D.isInstancedMesh &&
              vt.instancingColor === !1 &&
              D.instanceColor !== null) ||
            (D.isInstancedMesh &&
              vt.instancingMorph === !0 &&
              D.morphTexture === null) ||
            (D.isInstancedMesh &&
              vt.instancingMorph === !1 &&
              D.morphTexture !== null) ||
            vt.envMap !== pt ||
            (N.fog === !0 && vt.fog !== et) ||
            (vt.numClippingPlanes !== void 0 &&
              (vt.numClippingPlanes !== Rt.numPlanes ||
                vt.numIntersection !== Rt.numIntersection)) ||
            vt.vertexAlphas !== Mt ||
            vt.vertexTangents !== Et ||
            vt.morphTargets !== _t ||
            vt.morphNormals !== Gt ||
            vt.morphColors !== se ||
            vt.toneMapping !== oe ||
            vt.morphTargetsCount !== Wt) &&
          (Xt = !0)
        : ((Xt = !0), (vt.__version = N.version));
      let Ye = vt.currentProgram;
      Xt === !0 && (Ye = Xr(N, L, D));
      let xi = !1,
        Oe = !1,
        Ys = !1;
      const de = Ye.getUniforms(),
        An = vt.uniforms;
      if (
        (gt.useProgram(Ye.program) && ((xi = !0), (Oe = !0), (Ys = !0)),
        N.id !== B && ((B = N.id), (Oe = !0)),
        xi || w !== v)
      ) {
        de.setValue(C, 'projectionMatrix', v.projectionMatrix),
          de.setValue(C, 'viewMatrix', v.matrixWorldInverse);
        const He = de.map.cameraPosition;
        He !== void 0 &&
          He.setValue(C, lt.setFromMatrixPosition(v.matrixWorld)),
          $t.logarithmicDepthBuffer &&
            de.setValue(
              C,
              'logDepthBufFC',
              2 / (Math.log(v.far + 1) / Math.LN2)
            ),
          (N.isMeshPhongMaterial ||
            N.isMeshToonMaterial ||
            N.isMeshLambertMaterial ||
            N.isMeshBasicMaterial ||
            N.isMeshStandardMaterial ||
            N.isShaderMaterial) &&
            de.setValue(C, 'isOrthographic', v.isOrthographicCamera === !0),
          w !== v && ((w = v), (Oe = !0), (Ys = !0));
      }
      if (D.isSkinnedMesh) {
        de.setOptional(C, D, 'bindMatrix'),
          de.setOptional(C, D, 'bindMatrixInverse');
        const He = D.skeleton;
        He &&
          (He.boneTexture === null && He.computeBoneTexture(),
          de.setValue(C, 'boneTexture', He.boneTexture, Pt));
      }
      D.isBatchedMesh &&
        (de.setOptional(C, D, 'batchingTexture'),
        de.setValue(C, 'batchingTexture', D._matricesTexture, Pt),
        de.setOptional(C, D, 'batchingIdTexture'),
        de.setValue(C, 'batchingIdTexture', D._indirectTexture, Pt),
        de.setOptional(C, D, 'batchingColorTexture'),
        D._colorsTexture !== null &&
          de.setValue(C, 'batchingColorTexture', D._colorsTexture, Pt));
      const Ks = U.morphAttributes;
      if (
        ((Ks.position !== void 0 ||
          Ks.normal !== void 0 ||
          Ks.color !== void 0) &&
          Ft.update(D, U, Ye),
        (Oe || vt.receiveShadow !== D.receiveShadow) &&
          ((vt.receiveShadow = D.receiveShadow),
          de.setValue(C, 'receiveShadow', D.receiveShadow)),
        N.isMeshGouraudMaterial &&
          N.envMap !== null &&
          ((An.envMap.value = pt),
          (An.flipEnvMap.value =
            pt.isCubeTexture && pt.isRenderTargetTexture === !1 ? -1 : 1)),
        N.isMeshStandardMaterial &&
          N.envMap === null &&
          L.environment !== null &&
          (An.envMapIntensity.value = L.environmentIntensity),
        Oe &&
          (de.setValue(C, 'toneMappingExposure', M.toneMappingExposure),
          vt.needsLights && Du(An, Ys),
          et && N.fog === !0 && xt.refreshFogUniforms(An, et),
          xt.refreshMaterialUniforms(
            An,
            N,
            $,
            G,
            f.state.transmissionRenderTarget[v.id]
          ),
          Es.upload(C, ml(vt), An, Pt)),
        N.isShaderMaterial &&
          N.uniformsNeedUpdate === !0 &&
          (Es.upload(C, ml(vt), An, Pt), (N.uniformsNeedUpdate = !1)),
        N.isSpriteMaterial && de.setValue(C, 'center', D.center),
        de.setValue(C, 'modelViewMatrix', D.modelViewMatrix),
        de.setValue(C, 'normalMatrix', D.normalMatrix),
        de.setValue(C, 'modelMatrix', D.matrixWorld),
        N.isShaderMaterial || N.isRawShaderMaterial)
      ) {
        const He = N.uniformsGroups;
        for (let $s = 0, Uu = He.length; $s < Uu; $s++) {
          const vl = He[$s];
          ne.update(vl, Ye), ne.bind(vl, Ye);
        }
      }
      return Ye;
    }
    function Du(v, L) {
      (v.ambientLightColor.needsUpdate = L),
        (v.lightProbe.needsUpdate = L),
        (v.directionalLights.needsUpdate = L),
        (v.directionalLightShadows.needsUpdate = L),
        (v.pointLights.needsUpdate = L),
        (v.pointLightShadows.needsUpdate = L),
        (v.spotLights.needsUpdate = L),
        (v.spotLightShadows.needsUpdate = L),
        (v.rectAreaLights.needsUpdate = L),
        (v.hemisphereLights.needsUpdate = L);
    }
    function Iu(v) {
      return (
        v.isMeshLambertMaterial ||
        v.isMeshToonMaterial ||
        v.isMeshPhongMaterial ||
        v.isMeshStandardMaterial ||
        v.isShadowMaterial ||
        (v.isShaderMaterial && v.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return F;
    }),
      (this.getActiveMipmapLevel = function () {
        return A;
      }),
      (this.getRenderTarget = function () {
        return T;
      }),
      (this.setRenderTargetTextures = function (v, L, U) {
        (Ct.get(v.texture).__webglTexture = L),
          (Ct.get(v.depthTexture).__webglTexture = U);
        const N = Ct.get(v);
        (N.__hasExternalTextures = !0),
          (N.__autoAllocateDepthBuffer = U === void 0),
          N.__autoAllocateDepthBuffer ||
            (Yt.has('WEBGL_multisampled_render_to_texture') === !0 &&
              (console.warn(
                'THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided'
              ),
              (N.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (v, L) {
        const U = Ct.get(v);
        (U.__webglFramebuffer = L), (U.__useDefaultFramebuffer = L === void 0);
      }),
      (this.setRenderTarget = function (v, L = 0, U = 0) {
        (T = v), (F = L), (A = U);
        let N = !0,
          D = null,
          et = !1,
          st = !1;
        if (v) {
          const pt = Ct.get(v);
          if (pt.__useDefaultFramebuffer !== void 0)
            gt.bindFramebuffer(C.FRAMEBUFFER, null), (N = !1);
          else if (pt.__webglFramebuffer === void 0) Pt.setupRenderTarget(v);
          else if (pt.__hasExternalTextures)
            Pt.rebindTextures(
              v,
              Ct.get(v.texture).__webglTexture,
              Ct.get(v.depthTexture).__webglTexture
            );
          else if (v.depthBuffer) {
            const _t = v.depthTexture;
            if (pt.__boundDepthTexture !== _t) {
              if (
                _t !== null &&
                Ct.has(_t) &&
                (v.width !== _t.image.width || v.height !== _t.image.height)
              )
                throw new Error(
                  'WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.'
                );
              Pt.setupDepthRenderbuffer(v);
            }
          }
          const Mt = v.texture;
          (Mt.isData3DTexture ||
            Mt.isDataArrayTexture ||
            Mt.isCompressedArrayTexture) &&
            (st = !0);
          const Et = Ct.get(v).__webglFramebuffer;
          v.isWebGLCubeRenderTarget
            ? (Array.isArray(Et[L]) ? (D = Et[L][U]) : (D = Et[L]), (et = !0))
            : v.samples > 0 && Pt.useMultisampledRTT(v) === !1
            ? (D = Ct.get(v).__webglMultisampledFramebuffer)
            : Array.isArray(Et)
            ? (D = Et[U])
            : (D = Et),
            x.copy(v.viewport),
            P.copy(v.scissor),
            (H = v.scissorTest);
        } else
          x.copy(ht).multiplyScalar($).floor(),
            P.copy(mt).multiplyScalar($).floor(),
            (H = Ot);
        if (
          (gt.bindFramebuffer(C.FRAMEBUFFER, D) && N && gt.drawBuffers(v, D),
          gt.viewport(x),
          gt.scissor(P),
          gt.setScissorTest(H),
          et)
        ) {
          const pt = Ct.get(v.texture);
          C.framebufferTexture2D(
            C.FRAMEBUFFER,
            C.COLOR_ATTACHMENT0,
            C.TEXTURE_CUBE_MAP_POSITIVE_X + L,
            pt.__webglTexture,
            U
          );
        } else if (st) {
          const pt = Ct.get(v.texture),
            Mt = L || 0;
          C.framebufferTextureLayer(
            C.FRAMEBUFFER,
            C.COLOR_ATTACHMENT0,
            pt.__webglTexture,
            U || 0,
            Mt
          );
        }
        B = -1;
      }),
      (this.readRenderTargetPixels = function (v, L, U, N, D, et, st) {
        if (!(v && v.isWebGLRenderTarget)) {
          console.error(
            'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
          );
          return;
        }
        let dt = Ct.get(v).__webglFramebuffer;
        if ((v.isWebGLCubeRenderTarget && st !== void 0 && (dt = dt[st]), dt)) {
          gt.bindFramebuffer(C.FRAMEBUFFER, dt);
          try {
            const pt = v.texture,
              Mt = pt.format,
              Et = pt.type;
            if (!$t.textureFormatReadable(Mt)) {
              console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
              );
              return;
            }
            if (!$t.textureTypeReadable(Et)) {
              console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.'
              );
              return;
            }
            L >= 0 &&
              L <= v.width - N &&
              U >= 0 &&
              U <= v.height - D &&
              C.readPixels(L, U, N, D, Tt.convert(Mt), Tt.convert(Et), et);
          } finally {
            const pt = T !== null ? Ct.get(T).__webglFramebuffer : null;
            gt.bindFramebuffer(C.FRAMEBUFFER, pt);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        v,
        L,
        U,
        N,
        D,
        et,
        st
      ) {
        if (!(v && v.isWebGLRenderTarget))
          throw new Error(
            'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
          );
        let dt = Ct.get(v).__webglFramebuffer;
        if ((v.isWebGLCubeRenderTarget && st !== void 0 && (dt = dt[st]), dt)) {
          gt.bindFramebuffer(C.FRAMEBUFFER, dt);
          try {
            const pt = v.texture,
              Mt = pt.format,
              Et = pt.type;
            if (!$t.textureFormatReadable(Mt))
              throw new Error(
                'THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.'
              );
            if (!$t.textureTypeReadable(Et))
              throw new Error(
                'THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.'
              );
            if (L >= 0 && L <= v.width - N && U >= 0 && U <= v.height - D) {
              const _t = C.createBuffer();
              C.bindBuffer(C.PIXEL_PACK_BUFFER, _t),
                C.bufferData(C.PIXEL_PACK_BUFFER, et.byteLength, C.STREAM_READ),
                C.readPixels(L, U, N, D, Tt.convert(Mt), Tt.convert(Et), 0),
                C.flush();
              const Gt = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
              await Dd(C, Gt, 4);
              try {
                C.bindBuffer(C.PIXEL_PACK_BUFFER, _t),
                  C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, et);
              } finally {
                C.deleteBuffer(_t), C.deleteSync(Gt);
              }
              return et;
            }
          } finally {
            const pt = T !== null ? Ct.get(T).__webglFramebuffer : null;
            gt.bindFramebuffer(C.FRAMEBUFFER, pt);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (v, L = null, U = 0) {
        v.isTexture !== !0 &&
          (xr(
            'WebGLRenderer: copyFramebufferToTexture function signature has changed.'
          ),
          (L = arguments[0] || null),
          (v = arguments[1]));
        const N = Math.pow(2, -U),
          D = Math.floor(v.image.width * N),
          et = Math.floor(v.image.height * N),
          st = L !== null ? L.x : 0,
          dt = L !== null ? L.y : 0;
        Pt.setTexture2D(v, 0),
          C.copyTexSubImage2D(C.TEXTURE_2D, U, 0, 0, st, dt, D, et),
          gt.unbindTexture();
      }),
      (this.copyTextureToTexture = function (v, L, U = null, N = null, D = 0) {
        v.isTexture !== !0 &&
          (xr(
            'WebGLRenderer: copyTextureToTexture function signature has changed.'
          ),
          (N = arguments[0] || null),
          (v = arguments[1]),
          (L = arguments[2]),
          (D = arguments[3] || 0),
          (U = null));
        let et, st, dt, pt, Mt, Et;
        U !== null
          ? ((et = U.max.x - U.min.x),
            (st = U.max.y - U.min.y),
            (dt = U.min.x),
            (pt = U.min.y))
          : ((et = v.image.width), (st = v.image.height), (dt = 0), (pt = 0)),
          N !== null ? ((Mt = N.x), (Et = N.y)) : ((Mt = 0), (Et = 0));
        const _t = Tt.convert(L.format),
          Gt = Tt.convert(L.type);
        Pt.setTexture2D(L, 0),
          C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, L.flipY),
          C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha),
          C.pixelStorei(C.UNPACK_ALIGNMENT, L.unpackAlignment);
        const se = C.getParameter(C.UNPACK_ROW_LENGTH),
          oe = C.getParameter(C.UNPACK_IMAGE_HEIGHT),
          Ne = C.getParameter(C.UNPACK_SKIP_PIXELS),
          Wt = C.getParameter(C.UNPACK_SKIP_ROWS),
          vt = C.getParameter(C.UNPACK_SKIP_IMAGES),
          Me = v.isCompressedTexture ? v.mipmaps[D] : v.image;
        C.pixelStorei(C.UNPACK_ROW_LENGTH, Me.width),
          C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Me.height),
          C.pixelStorei(C.UNPACK_SKIP_PIXELS, dt),
          C.pixelStorei(C.UNPACK_SKIP_ROWS, pt),
          v.isDataTexture
            ? C.texSubImage2D(C.TEXTURE_2D, D, Mt, Et, et, st, _t, Gt, Me.data)
            : v.isCompressedTexture
            ? C.compressedTexSubImage2D(
                C.TEXTURE_2D,
                D,
                Mt,
                Et,
                Me.width,
                Me.height,
                _t,
                Me.data
              )
            : C.texSubImage2D(C.TEXTURE_2D, D, Mt, Et, et, st, _t, Gt, Me),
          C.pixelStorei(C.UNPACK_ROW_LENGTH, se),
          C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, oe),
          C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ne),
          C.pixelStorei(C.UNPACK_SKIP_ROWS, Wt),
          C.pixelStorei(C.UNPACK_SKIP_IMAGES, vt),
          D === 0 && L.generateMipmaps && C.generateMipmap(C.TEXTURE_2D),
          gt.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (
        v,
        L,
        U = null,
        N = null,
        D = 0
      ) {
        v.isTexture !== !0 &&
          (xr(
            'WebGLRenderer: copyTextureToTexture3D function signature has changed.'
          ),
          (U = arguments[0] || null),
          (N = arguments[1] || null),
          (v = arguments[2]),
          (L = arguments[3]),
          (D = arguments[4] || 0));
        let et, st, dt, pt, Mt, Et, _t, Gt, se;
        const oe = v.isCompressedTexture ? v.mipmaps[D] : v.image;
        U !== null
          ? ((et = U.max.x - U.min.x),
            (st = U.max.y - U.min.y),
            (dt = U.max.z - U.min.z),
            (pt = U.min.x),
            (Mt = U.min.y),
            (Et = U.min.z))
          : ((et = oe.width),
            (st = oe.height),
            (dt = oe.depth),
            (pt = 0),
            (Mt = 0),
            (Et = 0)),
          N !== null
            ? ((_t = N.x), (Gt = N.y), (se = N.z))
            : ((_t = 0), (Gt = 0), (se = 0));
        const Ne = Tt.convert(L.format),
          Wt = Tt.convert(L.type);
        let vt;
        if (L.isData3DTexture) Pt.setTexture3D(L, 0), (vt = C.TEXTURE_3D);
        else if (L.isDataArrayTexture || L.isCompressedArrayTexture)
          Pt.setTexture2DArray(L, 0), (vt = C.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            'THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.'
          );
          return;
        }
        C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, L.flipY),
          C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha),
          C.pixelStorei(C.UNPACK_ALIGNMENT, L.unpackAlignment);
        const Me = C.getParameter(C.UNPACK_ROW_LENGTH),
          Xt = C.getParameter(C.UNPACK_IMAGE_HEIGHT),
          Ye = C.getParameter(C.UNPACK_SKIP_PIXELS),
          xi = C.getParameter(C.UNPACK_SKIP_ROWS),
          Oe = C.getParameter(C.UNPACK_SKIP_IMAGES);
        C.pixelStorei(C.UNPACK_ROW_LENGTH, oe.width),
          C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, oe.height),
          C.pixelStorei(C.UNPACK_SKIP_PIXELS, pt),
          C.pixelStorei(C.UNPACK_SKIP_ROWS, Mt),
          C.pixelStorei(C.UNPACK_SKIP_IMAGES, Et),
          v.isDataTexture || v.isData3DTexture
            ? C.texSubImage3D(vt, D, _t, Gt, se, et, st, dt, Ne, Wt, oe.data)
            : L.isCompressedArrayTexture
            ? C.compressedTexSubImage3D(
                vt,
                D,
                _t,
                Gt,
                se,
                et,
                st,
                dt,
                Ne,
                oe.data
              )
            : C.texSubImage3D(vt, D, _t, Gt, se, et, st, dt, Ne, Wt, oe),
          C.pixelStorei(C.UNPACK_ROW_LENGTH, Me),
          C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Xt),
          C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ye),
          C.pixelStorei(C.UNPACK_SKIP_ROWS, xi),
          C.pixelStorei(C.UNPACK_SKIP_IMAGES, Oe),
          D === 0 && L.generateMipmaps && C.generateMipmap(vt),
          gt.unbindTexture();
      }),
      (this.initRenderTarget = function (v) {
        Ct.get(v).__webglFramebuffer === void 0 && Pt.setupRenderTarget(v);
      }),
      (this.initTexture = function (v) {
        v.isCubeTexture
          ? Pt.setTextureCube(v, 0)
          : v.isData3DTexture
          ? Pt.setTexture3D(v, 0)
          : v.isDataArrayTexture || v.isCompressedArrayTexture
          ? Pt.setTexture2DArray(v, 0)
          : Pt.setTexture2D(v, 0),
          gt.unbindTexture();
      }),
      (this.resetState = function () {
        (F = 0), (A = 0), (T = null), gt.reset(), Ut.reset();
      }),
      typeof __THREE_DEVTOOLS__ < 'u' &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent('observe', { detail: this })
        );
  }
  get coordinateSystem() {
    return Mn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    (e.drawingBufferColorSpace = t === Ra ? 'display-p3' : 'srgb'),
      (e.unpackColorSpace =
        jt.workingColorSpace === Fs ? 'display-p3' : 'srgb');
  }
}
class Wv extends Ie {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = 'Scene'),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new ln()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new ln()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < 'u' &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent('observe', { detail: this })
        );
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      t.background !== null && (this.background = t.background.clone()),
      t.environment !== null && (this.environment = t.environment.clone()),
      t.fog !== null && (this.fog = t.fog.clone()),
      (this.backgroundBlurriness = t.backgroundBlurriness),
      (this.backgroundIntensity = t.backgroundIntensity),
      this.backgroundRotation.copy(t.backgroundRotation),
      (this.environmentIntensity = t.environmentIntensity),
      this.environmentRotation.copy(t.environmentRotation),
      t.overrideMaterial !== null &&
        (this.overrideMaterial = t.overrideMaterial.clone()),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      this.fog !== null && (e.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (e.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (e.object.backgroundIntensity = this.backgroundIntensity),
      (e.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (e.object.environmentIntensity = this.environmentIntensity),
      (e.object.environmentRotation = this.environmentRotation.toArray()),
      e
    );
  }
}
class Oa extends Yn {
  constructor(
    t = 1,
    e = 32,
    i = 16,
    r = 0,
    s = Math.PI * 2,
    o = 0,
    a = Math.PI
  ) {
    super(),
      (this.type = 'SphereGeometry'),
      (this.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: i,
        phiStart: r,
        phiLength: s,
        thetaStart: o,
        thetaLength: a,
      }),
      (e = Math.max(3, Math.floor(e))),
      (i = Math.max(2, Math.floor(i)));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const h = [],
      d = new I(),
      p = new I(),
      m = [],
      g = [],
      b = [],
      f = [];
    for (let u = 0; u <= i; u++) {
      const S = [],
        M = u / i;
      let y = 0;
      u === 0 && o === 0
        ? (y = 0.5 / e)
        : u === i && l === Math.PI && (y = -0.5 / e);
      for (let F = 0; F <= e; F++) {
        const A = F / e;
        (d.x = -t * Math.cos(r + A * s) * Math.sin(o + M * a)),
          (d.y = t * Math.cos(o + M * a)),
          (d.z = t * Math.sin(r + A * s) * Math.sin(o + M * a)),
          g.push(d.x, d.y, d.z),
          p.copy(d).normalize(),
          b.push(p.x, p.y, p.z),
          f.push(A + y, 1 - M),
          S.push(c++);
      }
      h.push(S);
    }
    for (let u = 0; u < i; u++)
      for (let S = 0; S < e; S++) {
        const M = h[u][S + 1],
          y = h[u][S],
          F = h[u + 1][S],
          A = h[u + 1][S + 1];
        (u !== 0 || o > 0) && m.push(M, y, A),
          (u !== i - 1 || l < Math.PI) && m.push(y, F, A);
      }
    this.setIndex(m),
      this.setAttribute('position', new an(g, 3)),
      this.setAttribute('normal', new an(b, 3)),
      this.setAttribute('uv', new an(f, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new Oa(
      t.radius,
      t.widthSegments,
      t.heightSegments,
      t.phiStart,
      t.phiLength,
      t.thetaStart,
      t.thetaLength
    );
  }
}
class Ir extends Lr {
  constructor(t) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: '' }),
      (this.type = 'MeshStandardMaterial'),
      (this.color = new zt(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new zt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = sh),
      (this.normalScale = new yt(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new ln()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { STANDARD: '' }),
      this.color.copy(t.color),
      (this.roughness = t.roughness),
      (this.metalness = t.metalness),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.roughnessMap = t.roughnessMap),
      (this.metalnessMap = t.metalnessMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.envMapIntensity = t.envMapIntensity),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
const fc = {
  enabled: !1,
  files: {},
  add: function (n, t) {
    this.enabled !== !1 && (this.files[n] = t);
  },
  get: function (n) {
    if (this.enabled !== !1) return this.files[n];
  },
  remove: function (n) {
    delete this.files[n];
  },
  clear: function () {
    this.files = {};
  },
};
class Xv {
  constructor(t, e, i) {
    const r = this;
    let s = !1,
      o = 0,
      a = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = t),
      (this.onProgress = e),
      (this.onError = i),
      (this.itemStart = function (h) {
        a++, s === !1 && r.onStart !== void 0 && r.onStart(h, o, a), (s = !0);
      }),
      (this.itemEnd = function (h) {
        o++,
          r.onProgress !== void 0 && r.onProgress(h, o, a),
          o === a && ((s = !1), r.onLoad !== void 0 && r.onLoad());
      }),
      (this.itemError = function (h) {
        r.onError !== void 0 && r.onError(h);
      }),
      (this.resolveURL = function (h) {
        return l ? l(h) : h;
      }),
      (this.setURLModifier = function (h) {
        return (l = h), this;
      }),
      (this.addHandler = function (h, d) {
        return c.push(h, d), this;
      }),
      (this.removeHandler = function (h) {
        const d = c.indexOf(h);
        return d !== -1 && c.splice(d, 2), this;
      }),
      (this.getHandler = function (h) {
        for (let d = 0, p = c.length; d < p; d += 2) {
          const m = c[d],
            g = c[d + 1];
          if ((m.global && (m.lastIndex = 0), m.test(h))) return g;
        }
        return null;
      });
  }
}
const jv = new Xv();
class Vs {
  constructor(t) {
    (this.manager = t !== void 0 ? t : jv),
      (this.crossOrigin = 'anonymous'),
      (this.withCredentials = !1),
      (this.path = ''),
      (this.resourcePath = ''),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(t, e) {
    const i = this;
    return new Promise(function (r, s) {
      i.load(t, r, e, s);
    });
  }
  parse() {}
  setCrossOrigin(t) {
    return (this.crossOrigin = t), this;
  }
  setWithCredentials(t) {
    return (this.withCredentials = t), this;
  }
  setPath(t) {
    return (this.path = t), this;
  }
  setResourcePath(t) {
    return (this.resourcePath = t), this;
  }
  setRequestHeader(t) {
    return (this.requestHeader = t), this;
  }
}
Vs.DEFAULT_MATERIAL_NAME = '__DEFAULT';
class Eh extends Vs {
  constructor(t) {
    super(t);
  }
  load(t, e, i, r) {
    this.path !== void 0 && (t = this.path + t),
      (t = this.manager.resolveURL(t));
    const s = this,
      o = fc.get(t);
    if (o !== void 0)
      return (
        s.manager.itemStart(t),
        setTimeout(function () {
          e && e(o), s.manager.itemEnd(t);
        }, 0),
        o
      );
    const a = Mr('img');
    function l() {
      h(), fc.add(t, this), e && e(this), s.manager.itemEnd(t);
    }
    function c(d) {
      h(), r && r(d), s.manager.itemError(t), s.manager.itemEnd(t);
    }
    function h() {
      a.removeEventListener('load', l, !1),
        a.removeEventListener('error', c, !1);
    }
    return (
      a.addEventListener('load', l, !1),
      a.addEventListener('error', c, !1),
      t.slice(0, 5) !== 'data:' &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      s.manager.itemStart(t),
      (a.src = t),
      a
    );
  }
}
class qv extends Vs {
  constructor(t) {
    super(t);
  }
  load(t, e, i, r) {
    const s = new Ia();
    s.colorSpace = Je;
    const o = new Eh(this.manager);
    o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
    let a = 0;
    function l(c) {
      o.load(
        t[c],
        function (h) {
          (s.images[c] = h), a++, a === 6 && ((s.needsUpdate = !0), e && e(s));
        },
        void 0,
        r
      );
    }
    for (let c = 0; c < t.length; ++c) l(c);
    return s;
  }
}
class Yv extends Vs {
  constructor(t) {
    super(t);
  }
  load(t, e, i, r) {
    const s = new Ce(),
      o = new Eh(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        t,
        function (a) {
          (s.image = a), (s.needsUpdate = !0), e !== void 0 && e(s);
        },
        i,
        r
      ),
      s
    );
  }
}
class Sh extends Ie {
  constructor(t, e = 1) {
    super(),
      (this.isLight = !0),
      (this.type = 'Light'),
      (this.color = new zt(t)),
      (this.intensity = e);
  }
  dispose() {}
  copy(t, e) {
    return (
      super.copy(t, e),
      this.color.copy(t.color),
      (this.intensity = t.intensity),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.color = this.color.getHex()),
      (e.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (e.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (e.object.distance = this.distance),
      this.angle !== void 0 && (e.object.angle = this.angle),
      this.decay !== void 0 && (e.object.decay = this.decay),
      this.penumbra !== void 0 && (e.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (e.object.target = this.target.uuid),
      e
    );
  }
}
const yo = new le(),
  mc = new I(),
  _c = new I();
class Kv {
  constructor(t) {
    (this.camera = t),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new yt(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new le()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Ua()),
      (this._frameExtents = new yt(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new te(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera,
      i = this.matrix;
    mc.setFromMatrixPosition(t.matrixWorld),
      e.position.copy(mc),
      _c.setFromMatrixPosition(t.target.matrixWorld),
      e.lookAt(_c),
      e.updateMatrixWorld(),
      yo.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(yo),
      i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      i.multiply(yo);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return (
      (this.camera = t.camera.clone()),
      (this.intensity = t.intensity),
      (this.bias = t.bias),
      (this.radius = t.radius),
      this.mapSize.copy(t.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return (
      this.intensity !== 1 && (t.intensity = this.intensity),
      this.bias !== 0 && (t.bias = this.bias),
      this.normalBias !== 0 && (t.normalBias = this.normalBias),
      this.radius !== 1 && (t.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (t.mapSize = this.mapSize.toArray()),
      (t.camera = this.camera.toJSON(!1).object),
      delete t.camera.matrix,
      t
    );
  }
}
const vc = new le(),
  pr = new I(),
  Co = new I();
class $v extends Kv {
  constructor() {
    super(new ke(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new yt(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new te(2, 1, 1, 1),
        new te(0, 1, 1, 1),
        new te(3, 1, 1, 1),
        new te(1, 1, 1, 1),
        new te(3, 0, 1, 1),
        new te(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new I(1, 0, 0),
        new I(-1, 0, 0),
        new I(0, 0, 1),
        new I(0, 0, -1),
        new I(0, 1, 0),
        new I(0, -1, 0),
      ]),
      (this._cubeUps = [
        new I(0, 1, 0),
        new I(0, 1, 0),
        new I(0, 1, 0),
        new I(0, 1, 0),
        new I(0, 0, 1),
        new I(0, 0, -1),
      ]);
  }
  updateMatrices(t, e = 0) {
    const i = this.camera,
      r = this.matrix,
      s = t.distance || i.far;
    s !== i.far && ((i.far = s), i.updateProjectionMatrix()),
      pr.setFromMatrixPosition(t.matrixWorld),
      i.position.copy(pr),
      Co.copy(i.position),
      Co.add(this._cubeDirections[e]),
      i.up.copy(this._cubeUps[e]),
      i.lookAt(Co),
      i.updateMatrixWorld(),
      r.makeTranslation(-pr.x, -pr.y, -pr.z),
      vc.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(vc);
  }
}
class Zv extends Sh {
  constructor(t, e, i = 0, r = 2) {
    super(t, e),
      (this.isPointLight = !0),
      (this.type = 'PointLight'),
      (this.distance = i),
      (this.decay = r),
      (this.shadow = new $v());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.distance = t.distance),
      (this.decay = t.decay),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
class Jv extends Sh {
  constructor(t, e) {
    super(t, e), (this.isAmbientLight = !0), (this.type = 'AmbientLight');
  }
}
class gc {
  constructor(t = 1, e = 0, i = 0) {
    return (this.radius = t), (this.phi = e), (this.theta = i), this;
  }
  set(t, e, i) {
    return (this.radius = t), (this.phi = e), (this.theta = i), this;
  }
  copy(t) {
    return (
      (this.radius = t.radius), (this.phi = t.phi), (this.theta = t.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, i) {
    return (
      (this.radius = Math.sqrt(t * t + e * e + i * i)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(t, i)),
          (this.phi = Math.acos(ye(e / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Qv extends _i {
  constructor(t, e) {
    super(),
      (this.object = t),
      (this.domElement = e),
      (this.enabled = !0),
      (this.state = -1),
      (this.keys = {}),
      (this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }),
      (this.touches = { ONE: null, TWO: null });
  }
  connect() {}
  disconnect() {}
  dispose() {}
  update() {}
}
typeof __THREE_DEVTOOLS__ < 'u' &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent('register', { detail: { revision: Ea } })
  );
typeof window < 'u' &&
  (window.__THREE__
    ? console.warn('WARNING: Multiple instances of Three.js being imported.')
    : (window.__THREE__ = Ea));
const xc = { type: 'change' },
  Fa = { type: 'start' },
  yh = { type: 'end' },
  ms = new hh(),
  bc = new Bn(),
  tg = Math.cos(70 * Rd.DEG2RAD),
  me = new I(),
  Re = 2 * Math.PI,
  Zt = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6,
  },
  To = 1e-6;
class eg extends Qv {
  constructor(t, e = null) {
    super(t, e),
      (this.state = Zt.NONE),
      (this.enabled = !0),
      (this.target = new I()),
      (this.cursor = new I()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: 'ArrowLeft',
        UP: 'ArrowUp',
        RIGHT: 'ArrowRight',
        BOTTOM: 'ArrowDown',
      }),
      (this.mouseButtons = {
        LEFT: zi.ROTATE,
        MIDDLE: zi.DOLLY,
        RIGHT: zi.PAN,
      }),
      (this.touches = { ONE: ki.ROTATE, TWO: ki.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this._lastPosition = new I()),
      (this._lastQuaternion = new di()),
      (this._lastTargetPosition = new I()),
      (this._quat = new di().setFromUnitVectors(t.up, new I(0, 1, 0))),
      (this._quatInverse = this._quat.clone().invert()),
      (this._spherical = new gc()),
      (this._sphericalDelta = new gc()),
      (this._scale = 1),
      (this._panOffset = new I()),
      (this._rotateStart = new yt()),
      (this._rotateEnd = new yt()),
      (this._rotateDelta = new yt()),
      (this._panStart = new yt()),
      (this._panEnd = new yt()),
      (this._panDelta = new yt()),
      (this._dollyStart = new yt()),
      (this._dollyEnd = new yt()),
      (this._dollyDelta = new yt()),
      (this._dollyDirection = new I()),
      (this._mouse = new yt()),
      (this._performCursorZoom = !1),
      (this._pointers = []),
      (this._pointerPositions = {}),
      (this._controlActive = !1),
      (this._onPointerMove = ig.bind(this)),
      (this._onPointerDown = ng.bind(this)),
      (this._onPointerUp = rg.bind(this)),
      (this._onContextMenu = ug.bind(this)),
      (this._onMouseWheel = ag.bind(this)),
      (this._onKeyDown = lg.bind(this)),
      (this._onTouchStart = cg.bind(this)),
      (this._onTouchMove = hg.bind(this)),
      (this._onMouseDown = sg.bind(this)),
      (this._onMouseMove = og.bind(this)),
      (this._interceptControlDown = dg.bind(this)),
      (this._interceptControlUp = pg.bind(this)),
      this.domElement !== null && this.connect(),
      this.update();
  }
  connect() {
    this.domElement.addEventListener('pointerdown', this._onPointerDown),
      this.domElement.addEventListener('pointercancel', this._onPointerUp),
      this.domElement.addEventListener('contextmenu', this._onContextMenu),
      this.domElement.addEventListener('wheel', this._onMouseWheel, {
        passive: !1,
      }),
      this.domElement
        .getRootNode()
        .addEventListener('keydown', this._interceptControlDown, {
          passive: !0,
          capture: !0,
        }),
      (this.domElement.style.touchAction = 'none');
  }
  disconnect() {
    this.domElement.removeEventListener('pointerdown', this._onPointerDown),
      this.domElement.removeEventListener('pointermove', this._onPointerMove),
      this.domElement.removeEventListener('pointerup', this._onPointerUp),
      this.domElement.removeEventListener('pointercancel', this._onPointerUp),
      this.domElement.removeEventListener('wheel', this._onMouseWheel),
      this.domElement.removeEventListener('contextmenu', this._onContextMenu),
      this.stopListenToKeyEvents(),
      this.domElement
        .getRootNode()
        .removeEventListener('keydown', this._interceptControlDown, {
          capture: !0,
        }),
      (this.domElement.style.touchAction = 'auto');
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener('keydown', this._onKeyDown),
      (this._domElementKeyEvents = t);
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null &&
      (this._domElementKeyEvents.removeEventListener(
        'keydown',
        this._onKeyDown
      ),
      (this._domElementKeyEvents = null));
  }
  saveState() {
    this.target0.copy(this.target),
      this.position0.copy(this.object.position),
      (this.zoom0 = this.object.zoom);
  }
  reset() {
    this.target.copy(this.target0),
      this.object.position.copy(this.position0),
      (this.object.zoom = this.zoom0),
      this.object.updateProjectionMatrix(),
      this.dispatchEvent(xc),
      this.update(),
      (this.state = Zt.NONE);
  }
  update(t = null) {
    const e = this.object.position;
    me.copy(e).sub(this.target),
      me.applyQuaternion(this._quat),
      this._spherical.setFromVector3(me),
      this.autoRotate &&
        this.state === Zt.NONE &&
        this._rotateLeft(this._getAutoRotationAngle(t)),
      this.enableDamping
        ? ((this._spherical.theta +=
            this._sphericalDelta.theta * this.dampingFactor),
          (this._spherical.phi +=
            this._sphericalDelta.phi * this.dampingFactor))
        : ((this._spherical.theta += this._sphericalDelta.theta),
          (this._spherical.phi += this._sphericalDelta.phi));
    let i = this.minAzimuthAngle,
      r = this.maxAzimuthAngle;
    isFinite(i) &&
      isFinite(r) &&
      (i < -Math.PI ? (i += Re) : i > Math.PI && (i -= Re),
      r < -Math.PI ? (r += Re) : r > Math.PI && (r -= Re),
      i <= r
        ? (this._spherical.theta = Math.max(
            i,
            Math.min(r, this._spherical.theta)
          ))
        : (this._spherical.theta =
            this._spherical.theta > (i + r) / 2
              ? Math.max(i, this._spherical.theta)
              : Math.min(r, this._spherical.theta))),
      (this._spherical.phi = Math.max(
        this.minPolarAngle,
        Math.min(this.maxPolarAngle, this._spherical.phi)
      )),
      this._spherical.makeSafe(),
      this.enableDamping === !0
        ? this.target.addScaledVector(this._panOffset, this.dampingFactor)
        : this.target.add(this._panOffset),
      this.target.sub(this.cursor),
      this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
      this.target.add(this.cursor);
    let s = !1;
    if (
      (this.zoomToCursor && this._performCursorZoom) ||
      this.object.isOrthographicCamera
    )
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      (this._spherical.radius = this._clampDistance(
        this._spherical.radius * this._scale
      )),
        (s = o != this._spherical.radius);
    }
    if (
      (me.setFromSpherical(this._spherical),
      me.applyQuaternion(this._quatInverse),
      e.copy(this.target).add(me),
      this.object.lookAt(this.target),
      this.enableDamping === !0
        ? ((this._sphericalDelta.theta *= 1 - this.dampingFactor),
          (this._sphericalDelta.phi *= 1 - this.dampingFactor),
          this._panOffset.multiplyScalar(1 - this.dampingFactor))
        : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)),
      this.zoomToCursor && this._performCursorZoom)
    ) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const a = me.length();
        o = this._clampDistance(a * this._scale);
        const l = a - o;
        this.object.position.addScaledVector(this._dollyDirection, l),
          this.object.updateMatrixWorld(),
          (s = !!l);
      } else if (this.object.isOrthographicCamera) {
        const a = new I(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const l = this.object.zoom;
        (this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / this._scale)
        )),
          this.object.updateProjectionMatrix(),
          (s = l !== this.object.zoom);
        const c = new I(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object),
          this.object.position.sub(c).add(a),
          this.object.updateMatrixWorld(),
          (o = me.length());
      } else
        console.warn(
          'WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.'
        ),
          (this.zoomToCursor = !1);
      o !== null &&
        (this.screenSpacePanning
          ? this.target
              .set(0, 0, -1)
              .transformDirection(this.object.matrix)
              .multiplyScalar(o)
              .add(this.object.position)
          : (ms.origin.copy(this.object.position),
            ms.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(ms.direction)) < tg
              ? this.object.lookAt(this.target)
              : (bc.setFromNormalAndCoplanarPoint(this.object.up, this.target),
                ms.intersectPlane(bc, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      (this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.object.zoom / this._scale)
      )),
        o !== this.object.zoom &&
          (this.object.updateProjectionMatrix(), (s = !0));
    }
    return (
      (this._scale = 1),
      (this._performCursorZoom = !1),
      s ||
      this._lastPosition.distanceToSquared(this.object.position) > To ||
      8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > To ||
      this._lastTargetPosition.distanceToSquared(this.target) > To
        ? (this.dispatchEvent(xc),
          this._lastPosition.copy(this.object.position),
          this._lastQuaternion.copy(this.object.quaternion),
          this._lastTargetPosition.copy(this.target),
          !0)
        : !1
    );
  }
  _getAutoRotationAngle(t) {
    return t !== null
      ? (Re / 60) * this.autoRotateSpeed * t
      : (Re / 60 / 60) * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    me.setFromMatrixColumn(e, 0),
      me.multiplyScalar(-t),
      this._panOffset.add(me);
  }
  _panUp(t, e) {
    this.screenSpacePanning === !0
      ? me.setFromMatrixColumn(e, 1)
      : (me.setFromMatrixColumn(e, 0), me.crossVectors(this.object.up, me)),
      me.multiplyScalar(t),
      this._panOffset.add(me);
  }
  _pan(t, e) {
    const i = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const r = this.object.position;
      me.copy(r).sub(this.target);
      let s = me.length();
      (s *= Math.tan(((this.object.fov / 2) * Math.PI) / 180)),
        this._panLeft((2 * t * s) / i.clientHeight, this.object.matrix),
        this._panUp((2 * e * s) / i.clientHeight, this.object.matrix);
    } else
      this.object.isOrthographicCamera
        ? (this._panLeft(
            (t * (this.object.right - this.object.left)) /
              this.object.zoom /
              i.clientWidth,
            this.object.matrix
          ),
          this._panUp(
            (e * (this.object.top - this.object.bottom)) /
              this.object.zoom /
              i.clientHeight,
            this.object.matrix
          ))
        : (console.warn(
            'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'
          ),
          (this.enablePan = !1));
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale /= t)
      : (console.warn(
          'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
        ),
        (this.enableZoom = !1));
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale *= t)
      : (console.warn(
          'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.'
        ),
        (this.enableZoom = !1));
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = !0;
    const i = this.domElement.getBoundingClientRect(),
      r = t - i.left,
      s = e - i.top,
      o = i.width,
      a = i.height;
    (this._mouse.x = (r / o) * 2 - 1),
      (this._mouse.y = -(s / a) * 2 + 1),
      this._dollyDirection
        .set(this._mouse.x, this._mouse.y, 1)
        .unproject(this.object)
        .sub(this.object.position)
        .normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX),
      this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY),
      this._rotateDelta
        .subVectors(this._rotateEnd, this._rotateStart)
        .multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft((Re * this._rotateDelta.x) / e.clientHeight),
      this._rotateUp((Re * this._rotateDelta.y) / e.clientHeight),
      this._rotateStart.copy(this._rotateEnd),
      this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY),
      this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
      this._dollyDelta.y > 0
        ? this._dollyOut(this._getZoomScale(this._dollyDelta.y))
        : this._dollyDelta.y < 0 &&
          this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
      this._dollyStart.copy(this._dollyEnd),
      this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY),
      this._panDelta
        .subVectors(this._panEnd, this._panStart)
        .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd),
      this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY),
      t.deltaY < 0
        ? this._dollyIn(this._getZoomScale(t.deltaY))
        : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)),
      this.update();
  }
  _handleKeyDown(t) {
    let e = !1;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey
          ? this._rotateUp(
              (Re * this.rotateSpeed) / this.domElement.clientHeight
            )
          : this._pan(0, this.keyPanSpeed),
          (e = !0);
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey
          ? this._rotateUp(
              (-Re * this.rotateSpeed) / this.domElement.clientHeight
            )
          : this._pan(0, -this.keyPanSpeed),
          (e = !0);
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey
          ? this._rotateLeft(
              (Re * this.rotateSpeed) / this.domElement.clientHeight
            )
          : this._pan(this.keyPanSpeed, 0),
          (e = !0);
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey
          ? this._rotateLeft(
              (-Re * this.rotateSpeed) / this.domElement.clientHeight
            )
          : this._pan(-this.keyPanSpeed, 0),
          (e = !0);
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t),
        i = 0.5 * (t.pageX + e.x),
        r = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(i, r);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t),
        i = 0.5 * (t.pageX + e.x),
        r = 0.5 * (t.pageY + e.y);
      this._panStart.set(i, r);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t),
      i = t.pageX - e.x,
      r = t.pageY - e.y,
      s = Math.sqrt(i * i + r * r);
    this._dollyStart.set(0, s);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t),
      this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t),
      this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const i = this._getSecondPointerPosition(t),
        r = 0.5 * (t.pageX + i.x),
        s = 0.5 * (t.pageY + i.y);
      this._rotateEnd.set(r, s);
    }
    this._rotateDelta
      .subVectors(this._rotateEnd, this._rotateStart)
      .multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft((Re * this._rotateDelta.x) / e.clientHeight),
      this._rotateUp((Re * this._rotateDelta.y) / e.clientHeight),
      this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t),
        i = 0.5 * (t.pageX + e.x),
        r = 0.5 * (t.pageY + e.y);
      this._panEnd.set(i, r);
    }
    this._panDelta
      .subVectors(this._panEnd, this._panStart)
      .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t),
      i = t.pageX - e.x,
      r = t.pageY - e.y,
      s = Math.sqrt(i * i + r * r);
    this._dollyEnd.set(0, s),
      this._dollyDelta.set(
        0,
        Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)
      ),
      this._dollyOut(this._dollyDelta.y),
      this._dollyStart.copy(this._dollyEnd);
    const o = (t.pageX + e.x) * 0.5,
      a = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(o, a);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t),
      this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t),
      this.enableRotate && this._handleTouchMoveRotate(t);
  }
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) {
        this._pointers.splice(e, 1);
        return;
      }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e] == t.pointerId) return !0;
    return !1;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && ((e = new yt()), (this._pointerPositions[t.pointerId] = e)),
      e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e =
      t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  _customWheelEvent(t) {
    const e = t.deltaMode,
      i = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (e) {
      case 1:
        i.deltaY *= 16;
        break;
      case 2:
        i.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (i.deltaY *= 10), i;
  }
}
function ng(n) {
  this.enabled !== !1 &&
    (this._pointers.length === 0 &&
      (this.domElement.setPointerCapture(n.pointerId),
      this.domElement.addEventListener('pointermove', this._onPointerMove),
      this.domElement.addEventListener('pointerup', this._onPointerUp)),
    !this._isTrackingPointer(n) &&
      (this._addPointer(n),
      n.pointerType === 'touch'
        ? this._onTouchStart(n)
        : this._onMouseDown(n)));
}
function ig(n) {
  this.enabled !== !1 &&
    (n.pointerType === 'touch' ? this._onTouchMove(n) : this._onMouseMove(n));
}
function rg(n) {
  switch ((this._removePointer(n), this._pointers.length)) {
    case 0:
      this.domElement.releasePointerCapture(n.pointerId),
        this.domElement.removeEventListener('pointermove', this._onPointerMove),
        this.domElement.removeEventListener('pointerup', this._onPointerUp),
        this.dispatchEvent(yh),
        (this.state = Zt.NONE);
      break;
    case 1:
      const t = this._pointers[0],
        e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function sg(n) {
  let t;
  switch (n.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case zi.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(n), (this.state = Zt.DOLLY);
      break;
    case zi.ROTATE:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(n), (this.state = Zt.PAN);
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(n), (this.state = Zt.ROTATE);
      }
      break;
    case zi.PAN:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(n), (this.state = Zt.ROTATE);
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(n), (this.state = Zt.PAN);
      }
      break;
    default:
      this.state = Zt.NONE;
  }
  this.state !== Zt.NONE && this.dispatchEvent(Fa);
}
function og(n) {
  switch (this.state) {
    case Zt.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(n);
      break;
    case Zt.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(n);
      break;
    case Zt.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(n);
      break;
  }
}
function ag(n) {
  this.enabled === !1 ||
    this.enableZoom === !1 ||
    this.state !== Zt.NONE ||
    (n.preventDefault(),
    this.dispatchEvent(Fa),
    this._handleMouseWheel(this._customWheelEvent(n)),
    this.dispatchEvent(yh));
}
function lg(n) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(n);
}
function cg(n) {
  switch ((this._trackPointer(n), this._pointers.length)) {
    case 1:
      switch (this.touches.ONE) {
        case ki.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(n), (this.state = Zt.TOUCH_ROTATE);
          break;
        case ki.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(n), (this.state = Zt.TOUCH_PAN);
          break;
        default:
          this.state = Zt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case ki.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(n), (this.state = Zt.TOUCH_DOLLY_PAN);
          break;
        case ki.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(n),
            (this.state = Zt.TOUCH_DOLLY_ROTATE);
          break;
        default:
          this.state = Zt.NONE;
      }
      break;
    default:
      this.state = Zt.NONE;
  }
  this.state !== Zt.NONE && this.dispatchEvent(Fa);
}
function hg(n) {
  switch ((this._trackPointer(n), this.state)) {
    case Zt.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(n), this.update();
      break;
    case Zt.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(n), this.update();
      break;
    case Zt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(n), this.update();
      break;
    case Zt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(n), this.update();
      break;
    default:
      this.state = Zt.NONE;
  }
}
function ug(n) {
  this.enabled !== !1 && n.preventDefault();
}
function dg(n) {
  n.key === 'Control' &&
    ((this._controlActive = !0),
    this.domElement
      .getRootNode()
      .addEventListener('keyup', this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
function pg(n) {
  n.key === 'Control' &&
    ((this._controlActive = !1),
    this.domElement
      .getRootNode()
      .removeEventListener('keyup', this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */ function Jt(
  n
) {
  return n == null;
}
function Ba(n) {
  return n !== null && typeof n == 'object';
}
function _a(n) {
  return n !== null && typeof n == 'object';
}
function fg(n, t) {
  if (n.length !== t.length) return !1;
  for (let e = 0; e < n.length; e++) if (n[e] !== t[e]) return !1;
  return !0;
}
function pi(n, t) {
  return Array.from(new Set([...Object.keys(n), ...Object.keys(t)])).reduce(
    (i, r) => {
      const s = n[r],
        o = t[r];
      return _a(s) && _a(o)
        ? Object.assign(Object.assign({}, i), { [r]: pi(s, o) })
        : Object.assign(Object.assign({}, i), { [r]: r in t ? o : s });
    },
    {}
  );
}
function ka(n) {
  return Ba(n) ? 'target' in n : !1;
}
const mg = {
  alreadydisposed: () => 'View has been already disposed',
  invalidparams: (n) => `Invalid parameters for '${n.name}'`,
  nomatchingcontroller: (n) => `No matching controller for '${n.key}'`,
  nomatchingview: (n) => `No matching view for '${JSON.stringify(n.params)}'`,
  notbindable: () => 'Value is not bindable',
  notcompatible: (n) => `Not compatible with  plugin '${n.id}'`,
  propertynotfound: (n) => `Property '${n.name}' not found`,
  shouldneverhappen: () => 'This error should never happen',
};
class ae {
  static alreadyDisposed() {
    return new ae({ type: 'alreadydisposed' });
  }
  static notBindable() {
    return new ae({ type: 'notbindable' });
  }
  static notCompatible(t, e) {
    return new ae({ type: 'notcompatible', context: { id: `${t}.${e}` } });
  }
  static propertyNotFound(t) {
    return new ae({ type: 'propertynotfound', context: { name: t } });
  }
  static shouldNeverHappen() {
    return new ae({ type: 'shouldneverhappen' });
  }
  constructor(t) {
    var e;
    (this.message =
      (e = mg[t.type](t.context)) !== null && e !== void 0
        ? e
        : 'Unexpected error'),
      (this.name = this.constructor.name),
      (this.stack = new Error(this.message).stack),
      (this.type = t.type);
  }
  toString() {
    return this.message;
  }
}
class Ls {
  constructor(t, e) {
    (this.obj_ = t), (this.key = e);
  }
  static isBindable(t) {
    return !(t === null || (typeof t != 'object' && typeof t != 'function'));
  }
  read() {
    return this.obj_[this.key];
  }
  write(t) {
    this.obj_[this.key] = t;
  }
  writeProperty(t, e) {
    const i = this.read();
    if (!Ls.isBindable(i)) throw ae.notBindable();
    if (!(t in i)) throw ae.propertyNotFound(t);
    i[t] = e;
  }
}
class fe {
  constructor() {
    this.observers_ = {};
  }
  on(t, e, i) {
    var r;
    let s = this.observers_[t];
    return (
      s || (s = this.observers_[t] = []),
      s.push({
        handler: e,
        key: (r = i == null ? void 0 : i.key) !== null && r !== void 0 ? r : e,
      }),
      this
    );
  }
  off(t, e) {
    const i = this.observers_[t];
    return i && (this.observers_[t] = i.filter((r) => r.key !== e)), this;
  }
  emit(t, e) {
    const i = this.observers_[t];
    i &&
      i.forEach((r) => {
        r.handler(e);
      });
  }
}
class _g {
  constructor(t, e) {
    var i;
    (this.constraint_ = e == null ? void 0 : e.constraint),
      (this.equals_ =
        (i = e == null ? void 0 : e.equals) !== null && i !== void 0
          ? i
          : (r, s) => r === s),
      (this.emitter = new fe()),
      (this.rawValue_ = t);
  }
  get constraint() {
    return this.constraint_;
  }
  get rawValue() {
    return this.rawValue_;
  }
  set rawValue(t) {
    this.setRawValue(t, { forceEmit: !1, last: !0 });
  }
  setRawValue(t, e) {
    const i = e ?? { forceEmit: !1, last: !0 },
      r = this.constraint_ ? this.constraint_.constrain(t) : t,
      s = this.rawValue_;
    (this.equals_(s, r) && !i.forceEmit) ||
      (this.emitter.emit('beforechange', { sender: this }),
      (this.rawValue_ = r),
      this.emitter.emit('change', {
        options: i,
        previousRawValue: s,
        rawValue: r,
        sender: this,
      }));
  }
}
class vg {
  constructor(t) {
    (this.emitter = new fe()), (this.value_ = t);
  }
  get rawValue() {
    return this.value_;
  }
  set rawValue(t) {
    this.setRawValue(t, { forceEmit: !1, last: !0 });
  }
  setRawValue(t, e) {
    const i = e ?? { forceEmit: !1, last: !0 },
      r = this.value_;
    (r === t && !i.forceEmit) ||
      (this.emitter.emit('beforechange', { sender: this }),
      (this.value_ = t),
      this.emitter.emit('change', {
        options: i,
        previousRawValue: r,
        rawValue: this.value_,
        sender: this,
      }));
  }
}
class gg {
  constructor(t) {
    (this.emitter = new fe()),
      (this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this)),
      (this.onValueChange_ = this.onValueChange_.bind(this)),
      (this.value_ = t),
      this.value_.emitter.on('beforechange', this.onValueBeforeChange_),
      this.value_.emitter.on('change', this.onValueChange_);
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  onValueBeforeChange_(t) {
    this.emitter.emit(
      'beforechange',
      Object.assign(Object.assign({}, t), { sender: this })
    );
  }
  onValueChange_(t) {
    this.emitter.emit(
      'change',
      Object.assign(Object.assign({}, t), { sender: this })
    );
  }
}
function ee(n, t) {
  const e = t == null ? void 0 : t.constraint,
    i = t == null ? void 0 : t.equals;
  return !e && !i ? new vg(n) : new _g(n, t);
}
function xg(n) {
  return [
    new gg(n),
    (t, e) => {
      n.setRawValue(t, e);
    },
  ];
}
class It {
  constructor(t) {
    (this.emitter = new fe()), (this.valMap_ = t);
    for (const e in this.valMap_)
      this.valMap_[e].emitter.on('change', () => {
        this.emitter.emit('change', { key: e, sender: this });
      });
  }
  static createCore(t) {
    return Object.keys(t).reduce(
      (i, r) => Object.assign(i, { [r]: ee(t[r]) }),
      {}
    );
  }
  static fromObject(t) {
    const e = this.createCore(t);
    return new It(e);
  }
  get(t) {
    return this.valMap_[t].rawValue;
  }
  set(t, e) {
    this.valMap_[t].rawValue = e;
  }
  value(t) {
    return this.valMap_[t];
  }
}
class Ur {
  constructor(t) {
    this.values = It.fromObject({ max: t.max, min: t.min });
  }
  constrain(t) {
    const e = this.values.get('max'),
      i = this.values.get('min');
    return Math.min(Math.max(t, i), e);
  }
}
class bg {
  constructor(t) {
    this.values = It.fromObject({ max: t.max, min: t.min });
  }
  constrain(t) {
    const e = this.values.get('max'),
      i = this.values.get('min');
    let r = t;
    return Jt(i) || (r = Math.max(r, i)), Jt(e) || (r = Math.min(r, e)), r;
  }
}
class Mg {
  constructor(t, e = 0) {
    (this.step = t), (this.origin = e);
  }
  constrain(t) {
    const e = this.origin % this.step,
      i = Math.round((t - e) / this.step);
    return e + i * this.step;
  }
}
class wg {
  constructor(t) {
    this.text = t;
  }
  evaluate() {
    return Number(this.text);
  }
  toString() {
    return this.text;
  }
}
const Eg = {
  '**': (n, t) => Math.pow(n, t),
  '*': (n, t) => n * t,
  '/': (n, t) => n / t,
  '%': (n, t) => n % t,
  '+': (n, t) => n + t,
  '-': (n, t) => n - t,
  '<<': (n, t) => n << t,
  '>>': (n, t) => n >> t,
  '>>>': (n, t) => n >>> t,
  '&': (n, t) => n & t,
  '^': (n, t) => n ^ t,
  '|': (n, t) => n | t,
};
class Sg {
  constructor(t, e, i) {
    (this.left = e), (this.operator = t), (this.right = i);
  }
  evaluate() {
    const t = Eg[this.operator];
    if (!t) throw new Error(`unexpected binary operator: '${this.operator}`);
    return t(this.left.evaluate(), this.right.evaluate());
  }
  toString() {
    return [
      'b(',
      this.left.toString(),
      this.operator,
      this.right.toString(),
      ')',
    ].join(' ');
  }
}
const yg = { '+': (n) => n, '-': (n) => -n, '~': (n) => ~n };
class Cg {
  constructor(t, e) {
    (this.operator = t), (this.expression = e);
  }
  evaluate() {
    const t = yg[this.operator];
    if (!t) throw new Error(`unexpected unary operator: '${this.operator}`);
    return t(this.expression.evaluate());
  }
  toString() {
    return ['u(', this.operator, this.expression.toString(), ')'].join(' ');
  }
}
function Va(n) {
  return (t, e) => {
    for (let i = 0; i < n.length; i++) {
      const r = n[i](t, e);
      if (r !== '') return r;
    }
    return '';
  };
}
function wr(n, t) {
  var e;
  const i = n.substr(t).match(/^\s+/);
  return (e = i && i[0]) !== null && e !== void 0 ? e : '';
}
function Tg(n, t) {
  const e = n.substr(t, 1);
  return e.match(/^[1-9]$/) ? e : '';
}
function Er(n, t) {
  var e;
  const i = n.substr(t).match(/^[0-9]+/);
  return (e = i && i[0]) !== null && e !== void 0 ? e : '';
}
function Ag(n, t) {
  const e = Er(n, t);
  if (e !== '') return e;
  const i = n.substr(t, 1);
  if (((t += 1), i !== '-' && i !== '+')) return '';
  const r = Er(n, t);
  return r === '' ? '' : i + r;
}
function za(n, t) {
  const e = n.substr(t, 1);
  if (((t += 1), e.toLowerCase() !== 'e')) return '';
  const i = Ag(n, t);
  return i === '' ? '' : e + i;
}
function Ch(n, t) {
  const e = n.substr(t, 1);
  if (e === '0') return e;
  const i = Tg(n, t);
  return (t += i.length), i === '' ? '' : i + Er(n, t);
}
function Pg(n, t) {
  const e = Ch(n, t);
  if (((t += e.length), e === '')) return '';
  const i = n.substr(t, 1);
  if (((t += i.length), i !== '.')) return '';
  const r = Er(n, t);
  return (t += r.length), e + i + r + za(n, t);
}
function Rg(n, t) {
  const e = n.substr(t, 1);
  if (((t += e.length), e !== '.')) return '';
  const i = Er(n, t);
  return (t += i.length), i === '' ? '' : e + i + za(n, t);
}
function Lg(n, t) {
  const e = Ch(n, t);
  return (t += e.length), e === '' ? '' : e + za(n, t);
}
const Dg = Va([Pg, Rg, Lg]);
function Ig(n, t) {
  var e;
  const i = n.substr(t).match(/^[01]+/);
  return (e = i && i[0]) !== null && e !== void 0 ? e : '';
}
function Ug(n, t) {
  const e = n.substr(t, 2);
  if (((t += e.length), e.toLowerCase() !== '0b')) return '';
  const i = Ig(n, t);
  return i === '' ? '' : e + i;
}
function Ng(n, t) {
  var e;
  const i = n.substr(t).match(/^[0-7]+/);
  return (e = i && i[0]) !== null && e !== void 0 ? e : '';
}
function Og(n, t) {
  const e = n.substr(t, 2);
  if (((t += e.length), e.toLowerCase() !== '0o')) return '';
  const i = Ng(n, t);
  return i === '' ? '' : e + i;
}
function Fg(n, t) {
  var e;
  const i = n.substr(t).match(/^[0-9a-f]+/i);
  return (e = i && i[0]) !== null && e !== void 0 ? e : '';
}
function Bg(n, t) {
  const e = n.substr(t, 2);
  if (((t += e.length), e.toLowerCase() !== '0x')) return '';
  const i = Fg(n, t);
  return i === '' ? '' : e + i;
}
const kg = Va([Ug, Og, Bg]),
  Vg = Va([kg, Dg]);
function zg(n, t) {
  const e = Vg(n, t);
  return (t += e.length), e === '' ? null : { evaluable: new wg(e), cursor: t };
}
function Hg(n, t) {
  const e = n.substr(t, 1);
  if (((t += e.length), e !== '(')) return null;
  const i = Ah(n, t);
  if (!i) return null;
  (t = i.cursor), (t += wr(n, t).length);
  const r = n.substr(t, 1);
  return (
    (t += r.length), r !== ')' ? null : { evaluable: i.evaluable, cursor: t }
  );
}
function Gg(n, t) {
  var e;
  return (e = zg(n, t)) !== null && e !== void 0 ? e : Hg(n, t);
}
function Th(n, t) {
  const e = Gg(n, t);
  if (e) return e;
  const i = n.substr(t, 1);
  if (((t += i.length), i !== '+' && i !== '-' && i !== '~')) return null;
  const r = Th(n, t);
  return r
    ? ((t = r.cursor), { cursor: t, evaluable: new Cg(i, r.evaluable) })
    : null;
}
function Wg(n, t, e) {
  e += wr(t, e).length;
  const i = n.filter((r) => t.startsWith(r, e))[0];
  return i
    ? ((e += i.length), (e += wr(t, e).length), { cursor: e, operator: i })
    : null;
}
function Xg(n, t) {
  return (e, i) => {
    const r = n(e, i);
    if (!r) return null;
    i = r.cursor;
    let s = r.evaluable;
    for (;;) {
      const o = Wg(t, e, i);
      if (!o) break;
      i = o.cursor;
      const a = n(e, i);
      if (!a) return null;
      (i = a.cursor), (s = new Sg(o.operator, s, a.evaluable));
    }
    return s ? { cursor: i, evaluable: s } : null;
  };
}
const jg = [
  ['**'],
  ['*', '/', '%'],
  ['+', '-'],
  ['<<', '>>>', '>>'],
  ['&'],
  ['^'],
  ['|'],
].reduce((n, t) => Xg(n, t), Th);
function Ah(n, t) {
  return (t += wr(n, t).length), jg(n, t);
}
function qg(n) {
  const t = Ah(n, 0);
  return !t || t.cursor + wr(n, t.cursor).length !== n.length
    ? null
    : t.evaluable;
}
function yn(n) {
  var t;
  const e = qg(n);
  return (t = e == null ? void 0 : e.evaluate()) !== null && t !== void 0
    ? t
    : null;
}
function Ph(n) {
  if (typeof n == 'number') return n;
  if (typeof n == 'string') {
    const t = yn(n);
    if (!Jt(t)) return t;
  }
  return 0;
}
function Yg(n) {
  return String(n);
}
function Ue(n) {
  return (t) => t.toFixed(Math.max(Math.min(n, 20), 0));
}
function qt(n, t, e, i, r) {
  const s = (n - t) / (e - t);
  return i + s * (r - i);
}
function Mc(n) {
  return String(n.toFixed(10)).split('.')[1].replace(/0+$/, '').length;
}
function _e(n, t, e) {
  return Math.min(Math.max(n, t), e);
}
function Rh(n, t) {
  return ((n % t) + t) % t;
}
function Kg(n, t) {
  return Jt(n.step) ? Math.max(Mc(t), 2) : Mc(n.step);
}
function Lh(n) {
  var t;
  return (t = n.step) !== null && t !== void 0 ? t : 1;
}
function Dh(n, t) {
  var e;
  const i = Math.abs((e = n.step) !== null && e !== void 0 ? e : t);
  return i === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(i)) - 1);
}
function Ih(n, t) {
  return Jt(n.step) ? null : new Mg(n.step, t);
}
function Uh(n) {
  return !Jt(n.max) && !Jt(n.min)
    ? new Ur({ max: n.max, min: n.min })
    : !Jt(n.max) || !Jt(n.min)
    ? new bg({ max: n.max, min: n.min })
    : null;
}
function Nh(n, t) {
  var e, i, r;
  return {
    formatter: (e = n.format) !== null && e !== void 0 ? e : Ue(Kg(n, t)),
    keyScale: (i = n.keyScale) !== null && i !== void 0 ? i : Lh(n),
    pointerScale: (r = n.pointerScale) !== null && r !== void 0 ? r : Dh(n, t),
  };
}
function Oh(n) {
  return {
    format: n.optional.function,
    keyScale: n.optional.number,
    max: n.optional.number,
    min: n.optional.number,
    pointerScale: n.optional.number,
    step: n.optional.number,
  };
}
function Ha(n) {
  return {
    constraint: n.constraint,
    textProps: It.fromObject(Nh(n.params, n.initialValue)),
  };
}
class vi {
  constructor(t) {
    this.controller = t;
  }
  get element() {
    return this.controller.view.element;
  }
  get disabled() {
    return this.controller.viewProps.get('disabled');
  }
  set disabled(t) {
    this.controller.viewProps.set('disabled', t);
  }
  get hidden() {
    return this.controller.viewProps.get('hidden');
  }
  set hidden(t) {
    this.controller.viewProps.set('hidden', t);
  }
  dispose() {
    this.controller.viewProps.set('disposed', !0);
  }
  importState(t) {
    return this.controller.importState(t);
  }
  exportState() {
    return this.controller.exportState();
  }
}
class zs {
  constructor(t) {
    this.target = t;
  }
}
class Nr extends zs {
  constructor(t, e, i) {
    super(t), (this.value = e), (this.last = i ?? !0);
  }
}
class $g extends zs {
  constructor(t, e) {
    super(t), (this.expanded = e);
  }
}
class Zg extends zs {
  constructor(t, e) {
    super(t), (this.index = e);
  }
}
class Jg extends zs {
  constructor(t, e) {
    super(t), (this.native = e);
  }
}
class Sr extends vi {
  constructor(t) {
    super(t),
      (this.onValueChange_ = this.onValueChange_.bind(this)),
      (this.emitter_ = new fe()),
      this.controller.value.emitter.on('change', this.onValueChange_);
  }
  get label() {
    return this.controller.labelController.props.get('label');
  }
  set label(t) {
    this.controller.labelController.props.set('label', t);
  }
  get key() {
    return this.controller.value.binding.target.key;
  }
  get tag() {
    return this.controller.tag;
  }
  set tag(t) {
    this.controller.tag = t;
  }
  on(t, e) {
    const i = e.bind(this);
    return (
      this.emitter_.on(
        t,
        (r) => {
          i(r);
        },
        { key: e }
      ),
      this
    );
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
  refresh() {
    this.controller.value.fetch();
  }
  onValueChange_(t) {
    const e = this.controller.value;
    this.emitter_.emit(
      'change',
      new Nr(this, e.binding.target.read(), t.options.last)
    );
  }
}
class Qg {
  constructor(t, e) {
    (this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this)),
      (this.onValueChange_ = this.onValueChange_.bind(this)),
      (this.binding = e),
      (this.value_ = t),
      this.value_.emitter.on('beforechange', this.onValueBeforeChange_),
      this.value_.emitter.on('change', this.onValueChange_),
      (this.emitter = new fe());
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  set rawValue(t) {
    this.value_.rawValue = t;
  }
  setRawValue(t, e) {
    this.value_.setRawValue(t, e);
  }
  fetch() {
    this.value_.rawValue = this.binding.read();
  }
  push() {
    this.binding.write(this.value_.rawValue);
  }
  onValueBeforeChange_(t) {
    this.emitter.emit(
      'beforechange',
      Object.assign(Object.assign({}, t), { sender: this })
    );
  }
  onValueChange_(t) {
    this.push(),
      this.emitter.emit(
        'change',
        Object.assign(Object.assign({}, t), { sender: this })
      );
  }
}
function t0(n) {
  if (!('binding' in n)) return !1;
  const t = n.binding;
  return ka(t) && 'read' in t && 'write' in t;
}
function e0(n, t) {
  const i = Object.keys(t).reduce((r, s) => {
    if (r === void 0) return;
    const o = t[s],
      a = o(n[s]);
    return a.succeeded
      ? Object.assign(Object.assign({}, r), { [s]: a.value })
      : void 0;
  }, {});
  return i;
}
function n0(n, t) {
  return n.reduce((e, i) => {
    if (e === void 0) return;
    const r = t(i);
    if (!(!r.succeeded || r.value === void 0)) return [...e, r.value];
  }, []);
}
function i0(n) {
  return n === null ? !1 : typeof n == 'object';
}
function vn(n) {
  return (t) => (e) => {
    if (!t && e === void 0) return { succeeded: !1, value: void 0 };
    if (t && e === void 0) return { succeeded: !0, value: void 0 };
    const i = n(e);
    return i !== void 0
      ? { succeeded: !0, value: i }
      : { succeeded: !1, value: void 0 };
  };
}
function wc(n) {
  return {
    custom: (t) => vn(t)(n),
    boolean: vn((t) => (typeof t == 'boolean' ? t : void 0))(n),
    number: vn((t) => (typeof t == 'number' ? t : void 0))(n),
    string: vn((t) => (typeof t == 'string' ? t : void 0))(n),
    function: vn((t) => (typeof t == 'function' ? t : void 0))(n),
    constant: (t) => vn((e) => (e === t ? t : void 0))(n),
    raw: vn((t) => t)(n),
    object: (t) =>
      vn((e) => {
        if (i0(e)) return e0(e, t);
      })(n),
    array: (t) =>
      vn((e) => {
        if (Array.isArray(e)) return n0(e, t);
      })(n),
  };
}
const va = { optional: wc(!0), required: wc(!1) };
function ie(n, t) {
  const e = t(va),
    i = va.required.object(e)(n);
  return i.succeeded ? i.value : void 0;
}
function Ve(n, t, e, i) {
  if (t && !t(n)) return !1;
  const r = ie(n, e);
  return r ? i(r) : !1;
}
function ze(n, t) {
  var e;
  return pi(
    (e = n == null ? void 0 : n()) !== null && e !== void 0 ? e : {},
    t
  );
}
function ci(n) {
  return 'value' in n;
}
function Fh(n) {
  if (!Ba(n) || !('binding' in n)) return !1;
  const t = n.binding;
  return ka(t);
}
const sn = 'http://www.w3.org/2000/svg';
function Ds(n) {
  n.offsetHeight;
}
function r0(n, t) {
  const e = n.style.transition;
  (n.style.transition = 'none'), t(), (n.style.transition = e);
}
function Ga(n) {
  return n.ontouchstart !== void 0;
}
function s0() {
  return globalThis;
}
function o0() {
  return s0().document;
}
function a0(n) {
  const t = n.ownerDocument.defaultView;
  return t && 'document' in t
    ? n.getContext('2d', { willReadFrequently: !0 })
    : null;
}
const l0 = {
  check: '<path d="M2 8l4 4l8 -8"/>',
  dropdown: '<path d="M5 7h6l-3 3 z"/>',
  p2dpad:
    '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>',
};
function Hs(n, t) {
  const e = n.createElementNS(sn, 'svg');
  return (e.innerHTML = l0[t]), e;
}
function Bh(n, t, e) {
  n.insertBefore(t, n.children[e]);
}
function Wa(n) {
  n.parentElement && n.parentElement.removeChild(n);
}
function kh(n) {
  for (; n.children.length > 0; ) n.removeChild(n.children[0]);
}
function c0(n) {
  for (; n.childNodes.length > 0; ) n.removeChild(n.childNodes[0]);
}
function Vh(n) {
  return n.relatedTarget
    ? n.relatedTarget
    : 'explicitOriginalTarget' in n
    ? n.explicitOriginalTarget
    : null;
}
function En(n, t) {
  n.emitter.on('change', (e) => {
    t(e.rawValue);
  }),
    t(n.rawValue);
}
function cn(n, t, e) {
  En(n.value(t), e);
}
const h0 = 'tp';
function kt(n) {
  return (e, i) =>
    [h0, '-', n, 'v', e ? `_${e}` : '', i ? `-${i}` : ''].join('');
}
const fr = kt('lbl');
function u0(n, t) {
  const e = n.createDocumentFragment();
  return (
    t
      .split(
        `
`
      )
      .map((r) => n.createTextNode(r))
      .forEach((r, s) => {
        s > 0 && e.appendChild(n.createElement('br')), e.appendChild(r);
      }),
    e
  );
}
class zh {
  constructor(t, e) {
    (this.element = t.createElement('div')),
      this.element.classList.add(fr()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('div');
    i.classList.add(fr('l')),
      cn(e.props, 'label', (s) => {
        Jt(s)
          ? this.element.classList.add(fr(void 0, 'nol'))
          : (this.element.classList.remove(fr(void 0, 'nol')),
            c0(i),
            i.appendChild(u0(t, s)));
      }),
      this.element.appendChild(i),
      (this.labelElement = i);
    const r = t.createElement('div');
    r.classList.add(fr('v')),
      this.element.appendChild(r),
      (this.valueElement = r);
  }
}
class Hh {
  constructor(t, e) {
    (this.props = e.props),
      (this.valueController = e.valueController),
      (this.viewProps = e.valueController.viewProps),
      (this.view = new zh(t, { props: e.props, viewProps: this.viewProps })),
      this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importProps(t) {
    return Ve(
      t,
      null,
      (e) => ({ label: e.optional.string }),
      (e) => (this.props.set('label', e.label), !0)
    );
  }
  exportProps() {
    return ze(null, { label: this.props.get('label') });
  }
}
function d0() {
  return ['veryfirst', 'first', 'last', 'verylast'];
}
const Ec = kt(''),
  Sc = { veryfirst: 'vfst', first: 'fst', last: 'lst', verylast: 'vlst' };
class Gs {
  constructor(t) {
    (this.parent_ = null),
      (this.blade = t.blade),
      (this.view = t.view),
      (this.viewProps = t.viewProps);
    const e = this.view.element;
    this.blade.value('positions').emitter.on('change', () => {
      d0().forEach((i) => {
        e.classList.remove(Ec(void 0, Sc[i]));
      }),
        this.blade.get('positions').forEach((i) => {
          e.classList.add(Ec(void 0, Sc[i]));
        });
    }),
      this.viewProps.handleDispose(() => {
        Wa(e);
      });
  }
  get parent() {
    return this.parent_;
  }
  set parent(t) {
    (this.parent_ = t),
      this.viewProps.set(
        'parent',
        this.parent_ ? this.parent_.viewProps : null
      );
  }
  importState(t) {
    return Ve(
      t,
      null,
      (e) => ({ disabled: e.required.boolean, hidden: e.required.boolean }),
      (e) => (this.viewProps.importState(e), !0)
    );
  }
  exportState() {
    return ze(null, Object.assign({}, this.viewProps.exportState()));
  }
}
class fi extends Gs {
  constructor(t, e) {
    if (e.value !== e.valueController.value) throw ae.shouldNeverHappen();
    const i = e.valueController.viewProps,
      r = new Hh(t, {
        blade: e.blade,
        props: e.props,
        valueController: e.valueController,
      });
    super(
      Object.assign(Object.assign({}, e), {
        view: new zh(t, { props: e.props, viewProps: i }),
        viewProps: i,
      })
    ),
      (this.labelController = r),
      (this.value = e.value),
      (this.valueController = e.valueController),
      this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importState(t) {
    return Ve(
      t,
      (e) => {
        var i, r, s;
        return (
          super.importState(e) &&
          this.labelController.importProps(e) &&
          ((s =
            (r = (i = this.valueController).importProps) === null ||
            r === void 0
              ? void 0
              : r.call(i, t)) !== null && s !== void 0
            ? s
            : !0)
        );
      },
      (e) => ({ value: e.optional.raw }),
      (e) => (e.value && (this.value.rawValue = e.value), !0)
    );
  }
  exportState() {
    var t, e, i;
    return ze(
      () => super.exportState(),
      Object.assign(
        Object.assign(
          { value: this.value.rawValue },
          this.labelController.exportProps()
        ),
        (i =
          (e = (t = this.valueController).exportProps) === null || e === void 0
            ? void 0
            : e.call(t)) !== null && i !== void 0
          ? i
          : {}
      )
    );
  }
}
function yc(n) {
  const t = Object.assign({}, n);
  return delete t.value, t;
}
class Gh extends fi {
  constructor(t, e) {
    super(t, e), (this.tag = e.tag);
  }
  importState(t) {
    return Ve(
      t,
      (e) => super.importState(yc(t)),
      (e) => ({ tag: e.optional.string }),
      (e) => ((this.tag = e.tag), !0)
    );
  }
  exportState() {
    return ze(() => yc(super.exportState()), {
      binding: {
        key: this.value.binding.target.key,
        value: this.value.binding.target.read(),
      },
      tag: this.tag,
    });
  }
}
function p0(n) {
  return ci(n) && Fh(n.value);
}
class f0 extends Gh {
  importState(t) {
    return Ve(
      t,
      (e) => super.importState(e),
      (e) => ({ binding: e.required.object({ value: e.required.raw }) }),
      (e) => (
        this.value.binding.inject(e.binding.value), this.value.fetch(), !0
      )
    );
  }
}
function m0(n) {
  return ci(n) && t0(n.value);
}
function Wh(n, t) {
  for (; n.length < t; ) n.push(void 0);
}
function _0(n) {
  const t = [];
  return Wh(t, n), t;
}
function v0(n) {
  const t = n.indexOf(void 0);
  return t < 0 ? n : n.slice(0, t);
}
function g0(n, t) {
  const e = [...v0(n), t];
  return (
    e.length > n.length ? e.splice(0, e.length - n.length) : Wh(e, n.length), e
  );
}
class x0 {
  constructor(t) {
    (this.emitter = new fe()),
      (this.onTick_ = this.onTick_.bind(this)),
      (this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this)),
      (this.onValueChange_ = this.onValueChange_.bind(this)),
      (this.binding = t.binding),
      (this.value_ = ee(_0(t.bufferSize))),
      this.value_.emitter.on('beforechange', this.onValueBeforeChange_),
      this.value_.emitter.on('change', this.onValueChange_),
      (this.ticker = t.ticker),
      this.ticker.emitter.on('tick', this.onTick_),
      this.fetch();
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  set rawValue(t) {
    this.value_.rawValue = t;
  }
  setRawValue(t, e) {
    this.value_.setRawValue(t, e);
  }
  fetch() {
    this.value_.rawValue = g0(this.value_.rawValue, this.binding.read());
  }
  onTick_() {
    this.fetch();
  }
  onValueBeforeChange_(t) {
    this.emitter.emit(
      'beforechange',
      Object.assign(Object.assign({}, t), { sender: this })
    );
  }
  onValueChange_(t) {
    this.emitter.emit(
      'change',
      Object.assign(Object.assign({}, t), { sender: this })
    );
  }
}
function b0(n) {
  if (!('binding' in n)) return !1;
  const t = n.binding;
  return ka(t) && 'read' in t && !('write' in t);
}
class M0 extends Gh {
  exportState() {
    return ze(() => super.exportState(), { binding: { readonly: !0 } });
  }
}
function w0(n) {
  return ci(n) && b0(n.value);
}
class E0 extends vi {
  get label() {
    return this.controller.labelController.props.get('label');
  }
  set label(t) {
    this.controller.labelController.props.set('label', t);
  }
  get title() {
    var t;
    return (t = this.controller.buttonController.props.get('title')) !== null &&
      t !== void 0
      ? t
      : '';
  }
  set title(t) {
    this.controller.buttonController.props.set('title', t);
  }
  on(t, e) {
    const i = e.bind(this);
    return (
      this.controller.buttonController.emitter.on(t, (s) => {
        i(new Jg(this, s.nativeEvent));
      }),
      this
    );
  }
  off(t, e) {
    return this.controller.buttonController.emitter.off(t, e), this;
  }
}
function S0(n, t, e) {
  e ? n.classList.add(t) : n.classList.remove(t);
}
function er(n, t) {
  return (e) => {
    S0(n, t, e);
  };
}
function Xa(n, t) {
  En(n, (e) => {
    t.textContent = e ?? '';
  });
}
const Ao = kt('btn');
class y0 {
  constructor(t, e) {
    (this.element = t.createElement('div')),
      this.element.classList.add(Ao()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('button');
    i.classList.add(Ao('b')),
      e.viewProps.bindDisabled(i),
      this.element.appendChild(i),
      (this.buttonElement = i);
    const r = t.createElement('div');
    r.classList.add(Ao('t')),
      Xa(e.props.value('title'), r),
      this.buttonElement.appendChild(r);
  }
}
class C0 {
  constructor(t, e) {
    (this.emitter = new fe()),
      (this.onClick_ = this.onClick_.bind(this)),
      (this.props = e.props),
      (this.viewProps = e.viewProps),
      (this.view = new y0(t, { props: this.props, viewProps: this.viewProps })),
      this.view.buttonElement.addEventListener('click', this.onClick_);
  }
  importProps(t) {
    return Ve(
      t,
      null,
      (e) => ({ title: e.optional.string }),
      (e) => (this.props.set('title', e.title), !0)
    );
  }
  exportProps() {
    return ze(null, { title: this.props.get('title') });
  }
  onClick_(t) {
    this.emitter.emit('click', { nativeEvent: t, sender: this });
  }
}
class Cc extends Gs {
  constructor(t, e) {
    const i = new C0(t, { props: e.buttonProps, viewProps: e.viewProps }),
      r = new Hh(t, {
        blade: e.blade,
        props: e.labelProps,
        valueController: i,
      });
    super({ blade: e.blade, view: r.view, viewProps: e.viewProps }),
      (this.buttonController = i),
      (this.labelController = r);
  }
  importState(t) {
    return Ve(
      t,
      (e) =>
        super.importState(e) &&
        this.buttonController.importProps(e) &&
        this.labelController.importProps(e),
      () => ({}),
      () => !0
    );
  }
  exportState() {
    return ze(
      () => super.exportState(),
      Object.assign(
        Object.assign({}, this.buttonController.exportProps()),
        this.labelController.exportProps()
      )
    );
  }
}
class Xh {
  constructor(t) {
    const [e, i] = t.split('-'),
      r = e.split('.');
    (this.major = parseInt(r[0], 10)),
      (this.minor = parseInt(r[1], 10)),
      (this.patch = parseInt(r[2], 10)),
      (this.prerelease = i ?? null);
  }
  toString() {
    const t = [this.major, this.minor, this.patch].join('.');
    return this.prerelease !== null ? [t, this.prerelease].join('-') : t;
  }
}
const nr = new Xh('2.0.5');
function Ae(n) {
  return Object.assign({ core: nr }, n);
}
const T0 = Ae({
  id: 'button',
  type: 'blade',
  accept(n) {
    const t = ie(n, (e) => ({
      title: e.required.string,
      view: e.required.constant('button'),
      label: e.optional.string,
    }));
    return t ? { params: t } : null;
  },
  controller(n) {
    return new Cc(n.document, {
      blade: n.blade,
      buttonProps: It.fromObject({ title: n.params.title }),
      labelProps: It.fromObject({ label: n.params.label }),
      viewProps: n.viewProps,
    });
  },
  api(n) {
    return n.controller instanceof Cc ? new E0(n.controller) : null;
  },
});
function A0(n, t) {
  return n.addBlade(Object.assign(Object.assign({}, t), { view: 'button' }));
}
function P0(n, t) {
  return n.addBlade(Object.assign(Object.assign({}, t), { view: 'folder' }));
}
function R0(n, t) {
  return n.addBlade(Object.assign(Object.assign({}, t), { view: 'tab' }));
}
function L0(n) {
  return Ba(n) ? 'refresh' in n && typeof n.refresh == 'function' : !1;
}
function D0(n, t) {
  if (!Ls.isBindable(n)) throw ae.notBindable();
  return new Ls(n, t);
}
class I0 {
  constructor(t, e) {
    (this.onRackValueChange_ = this.onRackValueChange_.bind(this)),
      (this.controller_ = t),
      (this.emitter_ = new fe()),
      (this.pool_ = e),
      this.controller_.rack.emitter.on('valuechange', this.onRackValueChange_);
  }
  get children() {
    return this.controller_.rack.children.map((t) => this.pool_.createApi(t));
  }
  addBinding(t, e, i) {
    const r = i ?? {},
      s = this.controller_.element.ownerDocument,
      o = this.pool_.createBinding(s, D0(t, e), r),
      a = this.pool_.createBindingApi(o);
    return this.add(a, r.index);
  }
  addFolder(t) {
    return P0(this, t);
  }
  addButton(t) {
    return A0(this, t);
  }
  addTab(t) {
    return R0(this, t);
  }
  add(t, e) {
    const i = t.controller;
    return this.controller_.rack.add(i, e), t;
  }
  remove(t) {
    this.controller_.rack.remove(t.controller);
  }
  addBlade(t) {
    const e = this.controller_.element.ownerDocument,
      i = this.pool_.createBlade(e, t),
      r = this.pool_.createApi(i);
    return this.add(r, t.index);
  }
  on(t, e) {
    const i = e.bind(this);
    return (
      this.emitter_.on(
        t,
        (r) => {
          i(r);
        },
        { key: e }
      ),
      this
    );
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
  refresh() {
    this.children.forEach((t) => {
      L0(t) && t.refresh();
    });
  }
  onRackValueChange_(t) {
    const e = t.bladeController,
      i = this.pool_.createApi(e),
      r = Fh(e.value) ? e.value.binding : null;
    this.emitter_.emit(
      'change',
      new Nr(i, r ? r.target.read() : e.value.rawValue, t.options.last)
    );
  }
}
class ja extends vi {
  constructor(t, e) {
    super(t), (this.rackApi_ = new I0(t.rackController, e));
  }
  refresh() {
    this.rackApi_.refresh();
  }
}
class qa extends Gs {
  constructor(t) {
    super({
      blade: t.blade,
      view: t.view,
      viewProps: t.rackController.viewProps,
    }),
      (this.rackController = t.rackController);
  }
  importState(t) {
    return Ve(
      t,
      (e) => super.importState(e),
      (e) => ({ children: e.required.array(e.required.raw) }),
      (e) =>
        this.rackController.rack.children.every((i, r) =>
          i.importState(e.children[r])
        )
    );
  }
  exportState() {
    return ze(() => super.exportState(), {
      children: this.rackController.rack.children.map((t) => t.exportState()),
    });
  }
}
function ga(n) {
  return 'rackController' in n;
}
class U0 {
  constructor(t) {
    (this.emitter = new fe()),
      (this.items_ = []),
      (this.cache_ = new Set()),
      (this.onSubListAdd_ = this.onSubListAdd_.bind(this)),
      (this.onSubListRemove_ = this.onSubListRemove_.bind(this)),
      (this.extract_ = t);
  }
  get items() {
    return this.items_;
  }
  allItems() {
    return Array.from(this.cache_);
  }
  find(t) {
    for (const e of this.allItems()) if (t(e)) return e;
    return null;
  }
  includes(t) {
    return this.cache_.has(t);
  }
  add(t, e) {
    if (this.includes(t)) throw ae.shouldNeverHappen();
    const i = e !== void 0 ? e : this.items_.length;
    this.items_.splice(i, 0, t), this.cache_.add(t);
    const r = this.extract_(t);
    r &&
      (r.emitter.on('add', this.onSubListAdd_),
      r.emitter.on('remove', this.onSubListRemove_),
      r.allItems().forEach((s) => {
        this.cache_.add(s);
      })),
      this.emitter.emit('add', { index: i, item: t, root: this, target: this });
  }
  remove(t) {
    const e = this.items_.indexOf(t);
    if (e < 0) return;
    this.items_.splice(e, 1), this.cache_.delete(t);
    const i = this.extract_(t);
    i &&
      (i.allItems().forEach((r) => {
        this.cache_.delete(r);
      }),
      i.emitter.off('add', this.onSubListAdd_),
      i.emitter.off('remove', this.onSubListRemove_)),
      this.emitter.emit('remove', {
        index: e,
        item: t,
        root: this,
        target: this,
      });
  }
  onSubListAdd_(t) {
    this.cache_.add(t.item),
      this.emitter.emit('add', {
        index: t.index,
        item: t.item,
        root: this,
        target: t.target,
      });
  }
  onSubListRemove_(t) {
    this.cache_.delete(t.item),
      this.emitter.emit('remove', {
        index: t.index,
        item: t.item,
        root: this,
        target: t.target,
      });
  }
}
function N0(n, t) {
  for (let e = 0; e < n.length; e++) {
    const i = n[e];
    if (ci(i) && i.value === t) return i;
  }
  return null;
}
function O0(n) {
  return ga(n) ? n.rackController.rack.bcSet_ : null;
}
class F0 {
  constructor(t) {
    var e, i;
    (this.emitter = new fe()),
      (this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this)),
      (this.onSetAdd_ = this.onSetAdd_.bind(this)),
      (this.onSetRemove_ = this.onSetRemove_.bind(this)),
      (this.onChildDispose_ = this.onChildDispose_.bind(this)),
      (this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this)),
      (this.onChildValueChange_ = this.onChildValueChange_.bind(this)),
      (this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this)),
      (this.onRackLayout_ = this.onRackLayout_.bind(this)),
      (this.onRackValueChange_ = this.onRackValueChange_.bind(this)),
      (this.blade_ = (e = t.blade) !== null && e !== void 0 ? e : null),
      (i = this.blade_) === null ||
        i === void 0 ||
        i.value('positions').emitter.on('change', this.onBladePositionsChange_),
      (this.viewProps = t.viewProps),
      (this.bcSet_ = new U0(O0)),
      this.bcSet_.emitter.on('add', this.onSetAdd_),
      this.bcSet_.emitter.on('remove', this.onSetRemove_);
  }
  get children() {
    return this.bcSet_.items;
  }
  add(t, e) {
    var i;
    (i = t.parent) === null || i === void 0 || i.remove(t),
      (t.parent = this),
      this.bcSet_.add(t, e);
  }
  remove(t) {
    (t.parent = null), this.bcSet_.remove(t);
  }
  find(t) {
    return this.bcSet_.allItems().filter(t);
  }
  onSetAdd_(t) {
    this.updatePositions_();
    const e = t.target === t.root;
    if (
      (this.emitter.emit('add', {
        bladeController: t.item,
        index: t.index,
        root: e,
        sender: this,
      }),
      !e)
    )
      return;
    const i = t.item;
    if (
      (i.viewProps.emitter.on('change', this.onChildViewPropsChange_),
      i.blade
        .value('positions')
        .emitter.on('change', this.onChildPositionsChange_),
      i.viewProps.handleDispose(this.onChildDispose_),
      ci(i))
    )
      i.value.emitter.on('change', this.onChildValueChange_);
    else if (ga(i)) {
      const r = i.rackController.rack;
      if (r) {
        const s = r.emitter;
        s.on('layout', this.onRackLayout_),
          s.on('valuechange', this.onRackValueChange_);
      }
    }
  }
  onSetRemove_(t) {
    this.updatePositions_();
    const e = t.target === t.root;
    if (
      (this.emitter.emit('remove', {
        bladeController: t.item,
        root: e,
        sender: this,
      }),
      !e)
    )
      return;
    const i = t.item;
    if (ci(i)) i.value.emitter.off('change', this.onChildValueChange_);
    else if (ga(i)) {
      const r = i.rackController.rack;
      if (r) {
        const s = r.emitter;
        s.off('layout', this.onRackLayout_),
          s.off('valuechange', this.onRackValueChange_);
      }
    }
  }
  updatePositions_() {
    const t = this.bcSet_.items.filter((r) => !r.viewProps.get('hidden')),
      e = t[0],
      i = t[t.length - 1];
    this.bcSet_.items.forEach((r) => {
      const s = [];
      r === e &&
        (s.push('first'),
        (!this.blade_ || this.blade_.get('positions').includes('veryfirst')) &&
          s.push('veryfirst')),
        r === i &&
          (s.push('last'),
          (!this.blade_ || this.blade_.get('positions').includes('verylast')) &&
            s.push('verylast')),
        r.blade.set('positions', s);
    });
  }
  onChildPositionsChange_() {
    this.updatePositions_(), this.emitter.emit('layout', { sender: this });
  }
  onChildViewPropsChange_(t) {
    this.updatePositions_(), this.emitter.emit('layout', { sender: this });
  }
  onChildDispose_() {
    this.bcSet_.items
      .filter((e) => e.viewProps.get('disposed'))
      .forEach((e) => {
        this.bcSet_.remove(e);
      });
  }
  onChildValueChange_(t) {
    const e = N0(this.find(ci), t.sender);
    if (!e) throw ae.alreadyDisposed();
    this.emitter.emit('valuechange', {
      bladeController: e,
      options: t.options,
      sender: this,
    });
  }
  onRackLayout_(t) {
    this.updatePositions_(), this.emitter.emit('layout', { sender: this });
  }
  onRackValueChange_(t) {
    this.emitter.emit('valuechange', {
      bladeController: t.bladeController,
      options: t.options,
      sender: this,
    });
  }
  onBladePositionsChange_() {
    this.updatePositions_();
  }
}
class Ya {
  constructor(t) {
    (this.onRackAdd_ = this.onRackAdd_.bind(this)),
      (this.onRackRemove_ = this.onRackRemove_.bind(this)),
      (this.element = t.element),
      (this.viewProps = t.viewProps);
    const e = new F0({
      blade: t.root ? void 0 : t.blade,
      viewProps: t.viewProps,
    });
    e.emitter.on('add', this.onRackAdd_),
      e.emitter.on('remove', this.onRackRemove_),
      (this.rack = e),
      this.viewProps.handleDispose(() => {
        for (let i = this.rack.children.length - 1; i >= 0; i--)
          this.rack.children[i].viewProps.set('disposed', !0);
      });
  }
  onRackAdd_(t) {
    t.root && Bh(this.element, t.bladeController.view.element, t.index);
  }
  onRackRemove_(t) {
    t.root && Wa(t.bladeController.view.element);
  }
}
function ir() {
  return new It({ positions: ee([], { equals: fg }) });
}
class Or extends It {
  constructor(t) {
    super(t);
  }
  static create(t) {
    const e = {
        completed: !0,
        expanded: t,
        expandedHeight: null,
        shouldFixHeight: !1,
        temporaryExpanded: null,
      },
      i = It.createCore(e);
    return new Or(i);
  }
  get styleExpanded() {
    var t;
    return (t = this.get('temporaryExpanded')) !== null && t !== void 0
      ? t
      : this.get('expanded');
  }
  get styleHeight() {
    if (!this.styleExpanded) return '0';
    const t = this.get('expandedHeight');
    return this.get('shouldFixHeight') && !Jt(t) ? `${t}px` : 'auto';
  }
  bindExpandedClass(t, e) {
    const i = () => {
      this.styleExpanded ? t.classList.add(e) : t.classList.remove(e);
    };
    cn(this, 'expanded', i), cn(this, 'temporaryExpanded', i);
  }
  cleanUpTransition() {
    this.set('shouldFixHeight', !1),
      this.set('expandedHeight', null),
      this.set('completed', !0);
  }
}
function B0(n, t) {
  let e = 0;
  return (
    r0(t, () => {
      n.set('expandedHeight', null),
        n.set('temporaryExpanded', !0),
        Ds(t),
        (e = t.clientHeight),
        n.set('temporaryExpanded', null),
        Ds(t);
    }),
    e
  );
}
function Tc(n, t) {
  t.style.height = n.styleHeight;
}
function Ka(n, t) {
  n.value('expanded').emitter.on('beforechange', () => {
    if ((n.set('completed', !1), Jt(n.get('expandedHeight')))) {
      const e = B0(n, t);
      e > 0 && n.set('expandedHeight', e);
    }
    n.set('shouldFixHeight', !0), Ds(t);
  }),
    n.emitter.on('change', () => {
      Tc(n, t);
    }),
    Tc(n, t),
    t.addEventListener('transitionend', (e) => {
      e.propertyName === 'height' && n.cleanUpTransition();
    });
}
class jh extends ja {
  constructor(t, e) {
    super(t, e),
      (this.emitter_ = new fe()),
      this.controller.foldable.value('expanded').emitter.on('change', (i) => {
        this.emitter_.emit('fold', new $g(this, i.sender.rawValue));
      }),
      this.rackApi_.on('change', (i) => {
        this.emitter_.emit('change', i);
      });
  }
  get expanded() {
    return this.controller.foldable.get('expanded');
  }
  set expanded(t) {
    this.controller.foldable.set('expanded', t);
  }
  get title() {
    return this.controller.props.get('title');
  }
  set title(t) {
    this.controller.props.set('title', t);
  }
  get children() {
    return this.rackApi_.children;
  }
  addBinding(t, e, i) {
    return this.rackApi_.addBinding(t, e, i);
  }
  addFolder(t) {
    return this.rackApi_.addFolder(t);
  }
  addButton(t) {
    return this.rackApi_.addButton(t);
  }
  addTab(t) {
    return this.rackApi_.addTab(t);
  }
  add(t, e) {
    return this.rackApi_.add(t, e);
  }
  remove(t) {
    this.rackApi_.remove(t);
  }
  addBlade(t) {
    return this.rackApi_.addBlade(t);
  }
  on(t, e) {
    const i = e.bind(this);
    return (
      this.emitter_.on(
        t,
        (r) => {
          i(r);
        },
        { key: e }
      ),
      this
    );
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
const qh = kt('cnt');
class k0 {
  constructor(t, e) {
    var i;
    (this.className_ = kt(
      (i = e.viewName) !== null && i !== void 0 ? i : 'fld'
    )),
      (this.element = t.createElement('div')),
      this.element.classList.add(this.className_(), qh()),
      e.viewProps.bindClassModifiers(this.element),
      (this.foldable_ = e.foldable),
      this.foldable_.bindExpandedClass(
        this.element,
        this.className_(void 0, 'expanded')
      ),
      cn(
        this.foldable_,
        'completed',
        er(this.element, this.className_(void 0, 'cpl'))
      );
    const r = t.createElement('button');
    r.classList.add(this.className_('b')),
      cn(e.props, 'title', (c) => {
        Jt(c)
          ? this.element.classList.add(this.className_(void 0, 'not'))
          : this.element.classList.remove(this.className_(void 0, 'not'));
      }),
      e.viewProps.bindDisabled(r),
      this.element.appendChild(r),
      (this.buttonElement = r);
    const s = t.createElement('div');
    s.classList.add(this.className_('i')), this.element.appendChild(s);
    const o = t.createElement('div');
    o.classList.add(this.className_('t')),
      Xa(e.props.value('title'), o),
      this.buttonElement.appendChild(o),
      (this.titleElement = o);
    const a = t.createElement('div');
    a.classList.add(this.className_('m')), this.buttonElement.appendChild(a);
    const l = t.createElement('div');
    l.classList.add(this.className_('c')),
      this.element.appendChild(l),
      (this.containerElement = l);
  }
}
class xa extends qa {
  constructor(t, e) {
    var i;
    const r = Or.create((i = e.expanded) !== null && i !== void 0 ? i : !0),
      s = new k0(t, {
        foldable: r,
        props: e.props,
        viewName: e.root ? 'rot' : void 0,
        viewProps: e.viewProps,
      });
    super(
      Object.assign(Object.assign({}, e), {
        rackController: new Ya({
          blade: e.blade,
          element: s.containerElement,
          root: e.root,
          viewProps: e.viewProps,
        }),
        view: s,
      })
    ),
      (this.onTitleClick_ = this.onTitleClick_.bind(this)),
      (this.props = e.props),
      (this.foldable = r),
      Ka(this.foldable, this.view.containerElement),
      this.rackController.rack.emitter.on('add', () => {
        this.foldable.cleanUpTransition();
      }),
      this.rackController.rack.emitter.on('remove', () => {
        this.foldable.cleanUpTransition();
      }),
      this.view.buttonElement.addEventListener('click', this.onTitleClick_);
  }
  get document() {
    return this.view.element.ownerDocument;
  }
  importState(t) {
    return Ve(
      t,
      (e) => super.importState(e),
      (e) => ({ expanded: e.required.boolean, title: e.optional.string }),
      (e) => (
        this.foldable.set('expanded', e.expanded),
        this.props.set('title', e.title),
        !0
      )
    );
  }
  exportState() {
    return ze(() => super.exportState(), {
      expanded: this.foldable.get('expanded'),
      title: this.props.get('title'),
    });
  }
  onTitleClick_() {
    this.foldable.set('expanded', !this.foldable.get('expanded'));
  }
}
const V0 = Ae({
    id: 'folder',
    type: 'blade',
    accept(n) {
      const t = ie(n, (e) => ({
        title: e.required.string,
        view: e.required.constant('folder'),
        expanded: e.optional.boolean,
      }));
      return t ? { params: t } : null;
    },
    controller(n) {
      return new xa(n.document, {
        blade: n.blade,
        expanded: n.params.expanded,
        props: It.fromObject({ title: n.params.title }),
        viewProps: n.viewProps,
      });
    },
    api(n) {
      return n.controller instanceof xa ? new jh(n.controller, n.pool) : null;
    },
  }),
  z0 = kt('');
function Ac(n, t) {
  return er(n, z0(void 0, t));
}
class Tn extends It {
  constructor(t) {
    var e;
    super(t),
      (this.onDisabledChange_ = this.onDisabledChange_.bind(this)),
      (this.onParentChange_ = this.onParentChange_.bind(this)),
      (this.onParentGlobalDisabledChange_ =
        this.onParentGlobalDisabledChange_.bind(this)),
      ([this.globalDisabled_, this.setGlobalDisabled_] = xg(
        ee(this.getGlobalDisabled_())
      )),
      this.value('disabled').emitter.on('change', this.onDisabledChange_),
      this.value('parent').emitter.on('change', this.onParentChange_),
      (e = this.get('parent')) === null ||
        e === void 0 ||
        e.globalDisabled.emitter.on(
          'change',
          this.onParentGlobalDisabledChange_
        );
  }
  static create(t) {
    var e, i, r;
    const s = t ?? {};
    return new Tn(
      It.createCore({
        disabled: (e = s.disabled) !== null && e !== void 0 ? e : !1,
        disposed: !1,
        hidden: (i = s.hidden) !== null && i !== void 0 ? i : !1,
        parent: (r = s.parent) !== null && r !== void 0 ? r : null,
      })
    );
  }
  get globalDisabled() {
    return this.globalDisabled_;
  }
  bindClassModifiers(t) {
    En(this.globalDisabled_, Ac(t, 'disabled')),
      cn(this, 'hidden', Ac(t, 'hidden'));
  }
  bindDisabled(t) {
    En(this.globalDisabled_, (e) => {
      t.disabled = e;
    });
  }
  bindTabIndex(t) {
    En(this.globalDisabled_, (e) => {
      t.tabIndex = e ? -1 : 0;
    });
  }
  handleDispose(t) {
    this.value('disposed').emitter.on('change', (e) => {
      e && t();
    });
  }
  importState(t) {
    this.set('disabled', t.disabled), this.set('hidden', t.hidden);
  }
  exportState() {
    return { disabled: this.get('disabled'), hidden: this.get('hidden') };
  }
  getGlobalDisabled_() {
    const t = this.get('parent');
    return (t ? t.globalDisabled.rawValue : !1) || this.get('disabled');
  }
  updateGlobalDisabled_() {
    this.setGlobalDisabled_(this.getGlobalDisabled_());
  }
  onDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentGlobalDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentChange_(t) {
    var e;
    const i = t.previousRawValue;
    i == null ||
      i.globalDisabled.emitter.off(
        'change',
        this.onParentGlobalDisabledChange_
      ),
      (e = this.get('parent')) === null ||
        e === void 0 ||
        e.globalDisabled.emitter.on(
          'change',
          this.onParentGlobalDisabledChange_
        ),
      this.updateGlobalDisabled_();
  }
}
const Pc = kt('tbp');
class H0 {
  constructor(t, e) {
    (this.element = t.createElement('div')),
      this.element.classList.add(Pc()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('div');
    i.classList.add(Pc('c')),
      this.element.appendChild(i),
      (this.containerElement = i);
  }
}
const mr = kt('tbi');
class G0 {
  constructor(t, e) {
    (this.element = t.createElement('div')),
      this.element.classList.add(mr()),
      e.viewProps.bindClassModifiers(this.element),
      cn(e.props, 'selected', (s) => {
        s
          ? this.element.classList.add(mr(void 0, 'sel'))
          : this.element.classList.remove(mr(void 0, 'sel'));
      });
    const i = t.createElement('button');
    i.classList.add(mr('b')),
      e.viewProps.bindDisabled(i),
      this.element.appendChild(i),
      (this.buttonElement = i);
    const r = t.createElement('div');
    r.classList.add(mr('t')),
      Xa(e.props.value('title'), r),
      this.buttonElement.appendChild(r),
      (this.titleElement = r);
  }
}
class W0 {
  constructor(t, e) {
    (this.emitter = new fe()),
      (this.onClick_ = this.onClick_.bind(this)),
      (this.props = e.props),
      (this.viewProps = e.viewProps),
      (this.view = new G0(t, { props: e.props, viewProps: e.viewProps })),
      this.view.buttonElement.addEventListener('click', this.onClick_);
  }
  onClick_() {
    this.emitter.emit('click', { sender: this });
  }
}
class ba extends qa {
  constructor(t, e) {
    const i = new H0(t, { viewProps: e.viewProps });
    super(
      Object.assign(Object.assign({}, e), {
        rackController: new Ya({
          blade: e.blade,
          element: i.containerElement,
          viewProps: e.viewProps,
        }),
        view: i,
      })
    ),
      (this.onItemClick_ = this.onItemClick_.bind(this)),
      (this.ic_ = new W0(t, { props: e.itemProps, viewProps: Tn.create() })),
      this.ic_.emitter.on('click', this.onItemClick_),
      (this.props = e.props),
      cn(this.props, 'selected', (r) => {
        this.itemController.props.set('selected', r),
          this.viewProps.set('hidden', !r);
      });
  }
  get itemController() {
    return this.ic_;
  }
  importState(t) {
    return Ve(
      t,
      (e) => super.importState(e),
      (e) => ({ selected: e.required.boolean, title: e.required.string }),
      (e) => (
        this.ic_.props.set('selected', e.selected),
        this.ic_.props.set('title', e.title),
        !0
      )
    );
  }
  exportState() {
    return ze(() => super.exportState(), {
      selected: this.ic_.props.get('selected'),
      title: this.ic_.props.get('title'),
    });
  }
  onItemClick_() {
    this.props.set('selected', !0);
  }
}
class X0 extends ja {
  constructor(t, e) {
    super(t, e),
      (this.emitter_ = new fe()),
      (this.onSelect_ = this.onSelect_.bind(this)),
      (this.pool_ = e),
      this.rackApi_.on('change', (i) => {
        this.emitter_.emit('change', i);
      }),
      this.controller.tab.selectedIndex.emitter.on('change', this.onSelect_);
  }
  get pages() {
    return this.rackApi_.children;
  }
  addPage(t) {
    const e = this.controller.view.element.ownerDocument,
      i = new ba(e, {
        blade: ir(),
        itemProps: It.fromObject({ selected: !1, title: t.title }),
        props: It.fromObject({ selected: !1 }),
        viewProps: Tn.create(),
      }),
      r = this.pool_.createApi(i);
    return this.rackApi_.add(r, t.index);
  }
  removePage(t) {
    this.rackApi_.remove(this.rackApi_.children[t]);
  }
  on(t, e) {
    const i = e.bind(this);
    return (
      this.emitter_.on(
        t,
        (r) => {
          i(r);
        },
        { key: e }
      ),
      this
    );
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
  onSelect_(t) {
    this.emitter_.emit('select', new Zg(this, t.rawValue));
  }
}
class j0 extends ja {
  get title() {
    var t;
    return (t = this.controller.itemController.props.get('title')) !== null &&
      t !== void 0
      ? t
      : '';
  }
  set title(t) {
    this.controller.itemController.props.set('title', t);
  }
  get selected() {
    return this.controller.props.get('selected');
  }
  set selected(t) {
    this.controller.props.set('selected', t);
  }
  get children() {
    return this.rackApi_.children;
  }
  addButton(t) {
    return this.rackApi_.addButton(t);
  }
  addFolder(t) {
    return this.rackApi_.addFolder(t);
  }
  addTab(t) {
    return this.rackApi_.addTab(t);
  }
  add(t, e) {
    this.rackApi_.add(t, e);
  }
  remove(t) {
    this.rackApi_.remove(t);
  }
  addBinding(t, e, i) {
    return this.rackApi_.addBinding(t, e, i);
  }
  addBlade(t) {
    return this.rackApi_.addBlade(t);
  }
}
const Rc = -1;
class q0 {
  constructor() {
    (this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this)),
      (this.empty = ee(!0)),
      (this.selectedIndex = ee(Rc)),
      (this.items_ = []);
  }
  add(t, e) {
    const i = e ?? this.items_.length;
    this.items_.splice(i, 0, t),
      t.emitter.on('change', this.onItemSelectedChange_),
      this.keepSelection_();
  }
  remove(t) {
    const e = this.items_.indexOf(t);
    e < 0 ||
      (this.items_.splice(e, 1),
      t.emitter.off('change', this.onItemSelectedChange_),
      this.keepSelection_());
  }
  keepSelection_() {
    if (this.items_.length === 0) {
      (this.selectedIndex.rawValue = Rc), (this.empty.rawValue = !0);
      return;
    }
    const t = this.items_.findIndex((e) => e.rawValue);
    t < 0
      ? (this.items_.forEach((e, i) => {
          e.rawValue = i === 0;
        }),
        (this.selectedIndex.rawValue = 0))
      : (this.items_.forEach((e, i) => {
          e.rawValue = i === t;
        }),
        (this.selectedIndex.rawValue = t)),
      (this.empty.rawValue = !1);
  }
  onItemSelectedChange_(t) {
    if (t.rawValue) {
      const e = this.items_.findIndex((i) => i === t.sender);
      this.items_.forEach((i, r) => {
        i.rawValue = r === e;
      }),
        (this.selectedIndex.rawValue = e);
    } else this.keepSelection_();
  }
}
const _r = kt('tab');
class Y0 {
  constructor(t, e) {
    (this.element = t.createElement('div')),
      this.element.classList.add(_r(), qh()),
      e.viewProps.bindClassModifiers(this.element),
      En(e.empty, er(this.element, _r(void 0, 'nop')));
    const i = t.createElement('div');
    i.classList.add(_r('t')),
      this.element.appendChild(i),
      (this.itemsElement = i);
    const r = t.createElement('div');
    r.classList.add(_r('i')), this.element.appendChild(r);
    const s = t.createElement('div');
    s.classList.add(_r('c')),
      this.element.appendChild(s),
      (this.contentsElement = s);
  }
}
class Lc extends qa {
  constructor(t, e) {
    const i = new q0(),
      r = new Y0(t, { empty: i.empty, viewProps: e.viewProps });
    super({
      blade: e.blade,
      rackController: new Ya({
        blade: e.blade,
        element: r.contentsElement,
        viewProps: e.viewProps,
      }),
      view: r,
    }),
      (this.onRackAdd_ = this.onRackAdd_.bind(this)),
      (this.onRackRemove_ = this.onRackRemove_.bind(this));
    const s = this.rackController.rack;
    s.emitter.on('add', this.onRackAdd_),
      s.emitter.on('remove', this.onRackRemove_),
      (this.tab = i);
  }
  add(t, e) {
    this.rackController.rack.add(t, e);
  }
  remove(t) {
    this.rackController.rack.remove(this.rackController.rack.children[t]);
  }
  onRackAdd_(t) {
    if (!t.root) return;
    const e = t.bladeController;
    Bh(this.view.itemsElement, e.itemController.view.element, t.index),
      e.itemController.viewProps.set('parent', this.viewProps),
      this.tab.add(e.props.value('selected'));
  }
  onRackRemove_(t) {
    if (!t.root) return;
    const e = t.bladeController;
    Wa(e.itemController.view.element),
      e.itemController.viewProps.set('parent', null),
      this.tab.remove(e.props.value('selected'));
  }
}
const Yh = Ae({
  id: 'tab',
  type: 'blade',
  accept(n) {
    const t = ie(n, (e) => ({
      pages: e.required.array(e.required.object({ title: e.required.string })),
      view: e.required.constant('tab'),
    }));
    return !t || t.pages.length === 0 ? null : { params: t };
  },
  controller(n) {
    const t = new Lc(n.document, { blade: n.blade, viewProps: n.viewProps });
    return (
      n.params.pages.forEach((e) => {
        const i = new ba(n.document, {
          blade: ir(),
          itemProps: It.fromObject({ selected: !1, title: e.title }),
          props: It.fromObject({ selected: !1 }),
          viewProps: Tn.create(),
        });
        t.add(i);
      }),
      t
    );
  },
  api(n) {
    return n.controller instanceof Lc
      ? new X0(n.controller, n.pool)
      : n.controller instanceof ba
      ? new j0(n.controller, n.pool)
      : null;
  },
});
function K0(n, t) {
  const e = n.accept(t.params);
  if (!e) return null;
  const i = ie(t.params, (r) => ({
    disabled: r.optional.boolean,
    hidden: r.optional.boolean,
  }));
  return n.controller({
    blade: ir(),
    document: t.document,
    params: Object.assign(Object.assign({}, e.params), {
      disabled: i == null ? void 0 : i.disabled,
      hidden: i == null ? void 0 : i.hidden,
    }),
    viewProps: Tn.create({
      disabled: i == null ? void 0 : i.disabled,
      hidden: i == null ? void 0 : i.hidden,
    }),
  });
}
class $a extends Sr {
  get options() {
    return this.controller.valueController.props.get('options');
  }
  set options(t) {
    this.controller.valueController.props.set('options', t);
  }
}
class $0 {
  constructor() {
    (this.disabled = !1), (this.emitter = new fe());
  }
  dispose() {}
  tick() {
    this.disabled || this.emitter.emit('tick', { sender: this });
  }
}
class Z0 {
  constructor(t, e) {
    (this.disabled_ = !1),
      (this.timerId_ = null),
      (this.onTick_ = this.onTick_.bind(this)),
      (this.doc_ = t),
      (this.emitter = new fe()),
      (this.interval_ = e),
      this.setTimer_();
  }
  get disabled() {
    return this.disabled_;
  }
  set disabled(t) {
    (this.disabled_ = t),
      this.disabled_ ? this.clearTimer_() : this.setTimer_();
  }
  dispose() {
    this.clearTimer_();
  }
  clearTimer_() {
    if (this.timerId_ === null) return;
    const t = this.doc_.defaultView;
    t && t.clearInterval(this.timerId_), (this.timerId_ = null);
  }
  setTimer_() {
    if ((this.clearTimer_(), this.interval_ <= 0)) return;
    const t = this.doc_.defaultView;
    t && (this.timerId_ = t.setInterval(this.onTick_, this.interval_));
  }
  onTick_() {
    this.disabled_ || this.emitter.emit('tick', { sender: this });
  }
}
class Fr {
  constructor(t) {
    this.constraints = t;
  }
  constrain(t) {
    return this.constraints.reduce((e, i) => i.constrain(e), t);
  }
}
function Is(n, t) {
  if (n instanceof t) return n;
  if (n instanceof Fr) {
    const e = n.constraints.reduce(
      (i, r) => i || (r instanceof t ? r : null),
      null
    );
    if (e) return e;
  }
  return null;
}
class Br {
  constructor(t) {
    this.values = It.fromObject({ options: t });
  }
  constrain(t) {
    const e = this.values.get('options');
    return e.length === 0 || e.filter((r) => r.value === t).length > 0
      ? t
      : e[0].value;
  }
}
function kr(n) {
  var t;
  const e = va;
  if (Array.isArray(n))
    return (t = ie({ items: n }, (i) => ({
      items: i.required.array(
        i.required.object({ text: i.required.string, value: i.required.raw })
      ),
    }))) === null || t === void 0
      ? void 0
      : t.items;
  if (typeof n == 'object') return e.required.raw(n).value;
}
function Za(n) {
  if (Array.isArray(n)) return n;
  const t = [];
  return (
    Object.keys(n).forEach((e) => {
      t.push({ text: e, value: n[e] });
    }),
    t
  );
}
function Ja(n) {
  return Jt(n) ? null : new Br(Za(n));
}
const Po = kt('lst');
class J0 {
  constructor(t, e) {
    (this.onValueChange_ = this.onValueChange_.bind(this)),
      (this.props_ = e.props),
      (this.element = t.createElement('div')),
      this.element.classList.add(Po()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('select');
    i.classList.add(Po('s')),
      e.viewProps.bindDisabled(i),
      this.element.appendChild(i),
      (this.selectElement = i);
    const r = t.createElement('div');
    r.classList.add(Po('m')),
      r.appendChild(Hs(t, 'dropdown')),
      this.element.appendChild(r),
      e.value.emitter.on('change', this.onValueChange_),
      (this.value_ = e.value),
      cn(this.props_, 'options', (s) => {
        kh(this.selectElement),
          s.forEach((o) => {
            const a = t.createElement('option');
            (a.textContent = o.text), this.selectElement.appendChild(a);
          }),
          this.update_();
      });
  }
  update_() {
    const t = this.props_.get('options').map((e) => e.value);
    this.selectElement.selectedIndex = t.indexOf(this.value_.rawValue);
  }
  onValueChange_() {
    this.update_();
  }
}
class jn {
  constructor(t, e) {
    (this.onSelectChange_ = this.onSelectChange_.bind(this)),
      (this.props = e.props),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.view = new J0(t, {
        props: this.props,
        value: this.value,
        viewProps: this.viewProps,
      })),
      this.view.selectElement.addEventListener('change', this.onSelectChange_);
  }
  onSelectChange_(t) {
    const e = t.currentTarget;
    this.value.rawValue = this.props.get('options')[e.selectedIndex].value;
  }
  importProps(t) {
    return Ve(
      t,
      null,
      (e) => ({ options: e.required.custom(kr) }),
      (e) => (this.props.set('options', Za(e.options)), !0)
    );
  }
  exportProps() {
    return ze(null, { options: this.props.get('options') });
  }
}
const Dc = kt('pop');
class Q0 {
  constructor(t, e) {
    (this.element = t.createElement('div')),
      this.element.classList.add(Dc()),
      e.viewProps.bindClassModifiers(this.element),
      En(e.shows, er(this.element, Dc(void 0, 'v')));
  }
}
class Kh {
  constructor(t, e) {
    (this.shows = ee(!1)),
      (this.viewProps = e.viewProps),
      (this.view = new Q0(t, { shows: this.shows, viewProps: this.viewProps }));
  }
}
const Ic = kt('txt');
class tx {
  constructor(t, e) {
    (this.onChange_ = this.onChange_.bind(this)),
      (this.element = t.createElement('div')),
      this.element.classList.add(Ic()),
      e.viewProps.bindClassModifiers(this.element),
      (this.props_ = e.props),
      this.props_.emitter.on('change', this.onChange_);
    const i = t.createElement('input');
    i.classList.add(Ic('i')),
      (i.type = 'text'),
      e.viewProps.bindDisabled(i),
      this.element.appendChild(i),
      (this.inputElement = i),
      e.value.emitter.on('change', this.onChange_),
      (this.value_ = e.value),
      this.refresh();
  }
  refresh() {
    const t = this.props_.get('formatter');
    this.inputElement.value = t(this.value_.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}
class yr {
  constructor(t, e) {
    (this.onInputChange_ = this.onInputChange_.bind(this)),
      (this.parser_ = e.parser),
      (this.props = e.props),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.view = new tx(t, {
        props: e.props,
        value: this.value,
        viewProps: this.viewProps,
      })),
      this.view.inputElement.addEventListener('change', this.onInputChange_);
  }
  onInputChange_(t) {
    const i = t.currentTarget.value,
      r = this.parser_(i);
    Jt(r) || (this.value.rawValue = r), this.view.refresh();
  }
}
function ex(n) {
  return String(n);
}
function $h(n) {
  return n === 'false' ? !1 : !!n;
}
function Uc(n) {
  return ex(n);
}
function nx(n) {
  return (t) => n.reduce((e, i) => (e !== null ? e : i(t)), null);
}
const ix = Ue(0);
function Us(n) {
  return ix(n) + '%';
}
function Zh(n) {
  return String(n);
}
function Ma(n) {
  return n;
}
function rr({ primary: n, secondary: t, forward: e, backward: i }) {
  let r = !1;
  function s(o) {
    r || ((r = !0), o(), (r = !1));
  }
  n.emitter.on('change', (o) => {
    s(() => {
      t.setRawValue(e(n.rawValue, t.rawValue), o.options);
    });
  }),
    t.emitter.on('change', (o) => {
      s(() => {
        n.setRawValue(i(n.rawValue, t.rawValue), o.options);
      }),
        s(() => {
          t.setRawValue(e(n.rawValue, t.rawValue), o.options);
        });
    }),
    s(() => {
      t.setRawValue(e(n.rawValue, t.rawValue), { forceEmit: !1, last: !0 });
    });
}
function Le(n, t) {
  const e = n * (t.altKey ? 0.1 : 1) * (t.shiftKey ? 10 : 1);
  return t.upKey ? +e : t.downKey ? -e : 0;
}
function Cr(n) {
  return {
    altKey: n.altKey,
    downKey: n.key === 'ArrowDown',
    shiftKey: n.shiftKey,
    upKey: n.key === 'ArrowUp',
  };
}
function Cn(n) {
  return {
    altKey: n.altKey,
    downKey: n.key === 'ArrowLeft',
    shiftKey: n.shiftKey,
    upKey: n.key === 'ArrowRight',
  };
}
function rx(n) {
  return n === 'ArrowUp' || n === 'ArrowDown';
}
function Jh(n) {
  return rx(n) || n === 'ArrowLeft' || n === 'ArrowRight';
}
function Ro(n, t) {
  var e, i;
  const r = t.ownerDocument.defaultView,
    s = t.getBoundingClientRect();
  return {
    x:
      n.pageX -
      (((e = r && r.scrollX) !== null && e !== void 0 ? e : 0) + s.left),
    y:
      n.pageY -
      (((i = r && r.scrollY) !== null && i !== void 0 ? i : 0) + s.top),
  };
}
class gi {
  constructor(t) {
    (this.lastTouch_ = null),
      (this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this)),
      (this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this)),
      (this.onMouseDown_ = this.onMouseDown_.bind(this)),
      (this.onTouchEnd_ = this.onTouchEnd_.bind(this)),
      (this.onTouchMove_ = this.onTouchMove_.bind(this)),
      (this.onTouchStart_ = this.onTouchStart_.bind(this)),
      (this.elem_ = t),
      (this.emitter = new fe()),
      t.addEventListener('touchstart', this.onTouchStart_, { passive: !1 }),
      t.addEventListener('touchmove', this.onTouchMove_, { passive: !0 }),
      t.addEventListener('touchend', this.onTouchEnd_),
      t.addEventListener('mousedown', this.onMouseDown_);
  }
  computePosition_(t) {
    const e = this.elem_.getBoundingClientRect();
    return {
      bounds: { width: e.width, height: e.height },
      point: t ? { x: t.x, y: t.y } : null,
    };
  }
  onMouseDown_(t) {
    var e;
    t.preventDefault(),
      (e = t.currentTarget) === null || e === void 0 || e.focus();
    const i = this.elem_.ownerDocument;
    i.addEventListener('mousemove', this.onDocumentMouseMove_),
      i.addEventListener('mouseup', this.onDocumentMouseUp_),
      this.emitter.emit('down', {
        altKey: t.altKey,
        data: this.computePosition_(Ro(t, this.elem_)),
        sender: this,
        shiftKey: t.shiftKey,
      });
  }
  onDocumentMouseMove_(t) {
    this.emitter.emit('move', {
      altKey: t.altKey,
      data: this.computePosition_(Ro(t, this.elem_)),
      sender: this,
      shiftKey: t.shiftKey,
    });
  }
  onDocumentMouseUp_(t) {
    const e = this.elem_.ownerDocument;
    e.removeEventListener('mousemove', this.onDocumentMouseMove_),
      e.removeEventListener('mouseup', this.onDocumentMouseUp_),
      this.emitter.emit('up', {
        altKey: t.altKey,
        data: this.computePosition_(Ro(t, this.elem_)),
        sender: this,
        shiftKey: t.shiftKey,
      });
  }
  onTouchStart_(t) {
    t.preventDefault();
    const e = t.targetTouches.item(0),
      i = this.elem_.getBoundingClientRect();
    this.emitter.emit('down', {
      altKey: t.altKey,
      data: this.computePosition_(
        e ? { x: e.clientX - i.left, y: e.clientY - i.top } : void 0
      ),
      sender: this,
      shiftKey: t.shiftKey,
    }),
      (this.lastTouch_ = e);
  }
  onTouchMove_(t) {
    const e = t.targetTouches.item(0),
      i = this.elem_.getBoundingClientRect();
    this.emitter.emit('move', {
      altKey: t.altKey,
      data: this.computePosition_(
        e ? { x: e.clientX - i.left, y: e.clientY - i.top } : void 0
      ),
      sender: this,
      shiftKey: t.shiftKey,
    }),
      (this.lastTouch_ = e);
  }
  onTouchEnd_(t) {
    var e;
    const i =
        (e = t.targetTouches.item(0)) !== null && e !== void 0
          ? e
          : this.lastTouch_,
      r = this.elem_.getBoundingClientRect();
    this.emitter.emit('up', {
      altKey: t.altKey,
      data: this.computePosition_(
        i ? { x: i.clientX - r.left, y: i.clientY - r.top } : void 0
      ),
      sender: this,
      shiftKey: t.shiftKey,
    });
  }
}
const We = kt('txt');
class sx {
  constructor(t, e) {
    (this.onChange_ = this.onChange_.bind(this)),
      (this.props_ = e.props),
      this.props_.emitter.on('change', this.onChange_),
      (this.element = t.createElement('div')),
      this.element.classList.add(We(), We(void 0, 'num')),
      e.arrayPosition &&
        this.element.classList.add(We(void 0, e.arrayPosition)),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('input');
    i.classList.add(We('i')),
      (i.type = 'text'),
      e.viewProps.bindDisabled(i),
      this.element.appendChild(i),
      (this.inputElement = i),
      (this.onDraggingChange_ = this.onDraggingChange_.bind(this)),
      (this.dragging_ = e.dragging),
      this.dragging_.emitter.on('change', this.onDraggingChange_),
      this.element.classList.add(We()),
      this.inputElement.classList.add(We('i'));
    const r = t.createElement('div');
    r.classList.add(We('k')),
      this.element.appendChild(r),
      (this.knobElement = r);
    const s = t.createElementNS(sn, 'svg');
    s.classList.add(We('g')), this.knobElement.appendChild(s);
    const o = t.createElementNS(sn, 'path');
    o.classList.add(We('gb')), s.appendChild(o), (this.guideBodyElem_ = o);
    const a = t.createElementNS(sn, 'path');
    a.classList.add(We('gh')), s.appendChild(a), (this.guideHeadElem_ = a);
    const l = t.createElement('div');
    l.classList.add(kt('tt')()),
      this.knobElement.appendChild(l),
      (this.tooltipElem_ = l),
      e.value.emitter.on('change', this.onChange_),
      (this.value = e.value),
      this.refresh();
  }
  onDraggingChange_(t) {
    if (t.rawValue === null) {
      this.element.classList.remove(We(void 0, 'drg'));
      return;
    }
    this.element.classList.add(We(void 0, 'drg'));
    const e = t.rawValue / this.props_.get('pointerScale'),
      i = e + (e > 0 ? -1 : e < 0 ? 1 : 0),
      r = _e(-i, -4, 4);
    this.guideHeadElem_.setAttributeNS(
      null,
      'd',
      [`M ${i + r},0 L${i},4 L${i + r},8`, `M ${e},-1 L${e},9`].join(' ')
    ),
      this.guideBodyElem_.setAttributeNS(null, 'd', `M 0,4 L${e},4`);
    const s = this.props_.get('formatter');
    (this.tooltipElem_.textContent = s(this.value.rawValue)),
      (this.tooltipElem_.style.left = `${e}px`);
  }
  refresh() {
    const t = this.props_.get('formatter');
    this.inputElement.value = t(this.value.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}
class Vr {
  constructor(t, e) {
    var i;
    (this.originRawValue_ = 0),
      (this.onInputChange_ = this.onInputChange_.bind(this)),
      (this.onInputKeyDown_ = this.onInputKeyDown_.bind(this)),
      (this.onInputKeyUp_ = this.onInputKeyUp_.bind(this)),
      (this.onPointerDown_ = this.onPointerDown_.bind(this)),
      (this.onPointerMove_ = this.onPointerMove_.bind(this)),
      (this.onPointerUp_ = this.onPointerUp_.bind(this)),
      (this.parser_ = e.parser),
      (this.props = e.props),
      (this.sliderProps_ =
        (i = e.sliderProps) !== null && i !== void 0 ? i : null),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.dragging_ = ee(null)),
      (this.view = new sx(t, {
        arrayPosition: e.arrayPosition,
        dragging: this.dragging_,
        props: this.props,
        value: this.value,
        viewProps: this.viewProps,
      })),
      this.view.inputElement.addEventListener('change', this.onInputChange_),
      this.view.inputElement.addEventListener('keydown', this.onInputKeyDown_),
      this.view.inputElement.addEventListener('keyup', this.onInputKeyUp_);
    const r = new gi(this.view.knobElement);
    r.emitter.on('down', this.onPointerDown_),
      r.emitter.on('move', this.onPointerMove_),
      r.emitter.on('up', this.onPointerUp_);
  }
  constrainValue_(t) {
    var e, i;
    const r =
        (e = this.sliderProps_) === null || e === void 0
          ? void 0
          : e.get('min'),
      s =
        (i = this.sliderProps_) === null || i === void 0
          ? void 0
          : i.get('max');
    let o = t;
    return (
      r !== void 0 && (o = Math.max(o, r)),
      s !== void 0 && (o = Math.min(o, s)),
      o
    );
  }
  onInputChange_(t) {
    const i = t.currentTarget.value,
      r = this.parser_(i);
    Jt(r) || (this.value.rawValue = this.constrainValue_(r)),
      this.view.refresh();
  }
  onInputKeyDown_(t) {
    const e = Le(this.props.get('keyScale'), Cr(t));
    e !== 0 &&
      this.value.setRawValue(this.constrainValue_(this.value.rawValue + e), {
        forceEmit: !1,
        last: !1,
      });
  }
  onInputKeyUp_(t) {
    Le(this.props.get('keyScale'), Cr(t)) !== 0 &&
      this.value.setRawValue(this.value.rawValue, { forceEmit: !0, last: !0 });
  }
  onPointerDown_() {
    (this.originRawValue_ = this.value.rawValue), (this.dragging_.rawValue = 0);
  }
  computeDraggingValue_(t) {
    if (!t.point) return null;
    const e = t.point.x - t.bounds.width / 2;
    return this.constrainValue_(
      this.originRawValue_ + e * this.props.get('pointerScale')
    );
  }
  onPointerMove_(t) {
    const e = this.computeDraggingValue_(t.data);
    e !== null &&
      (this.value.setRawValue(e, { forceEmit: !1, last: !1 }),
      (this.dragging_.rawValue = this.value.rawValue - this.originRawValue_));
  }
  onPointerUp_(t) {
    const e = this.computeDraggingValue_(t.data);
    e !== null &&
      (this.value.setRawValue(e, { forceEmit: !0, last: !0 }),
      (this.dragging_.rawValue = null));
  }
}
const Lo = kt('sld');
class ox {
  constructor(t, e) {
    (this.onChange_ = this.onChange_.bind(this)),
      (this.props_ = e.props),
      this.props_.emitter.on('change', this.onChange_),
      (this.element = t.createElement('div')),
      this.element.classList.add(Lo()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('div');
    i.classList.add(Lo('t')),
      e.viewProps.bindTabIndex(i),
      this.element.appendChild(i),
      (this.trackElement = i);
    const r = t.createElement('div');
    r.classList.add(Lo('k')),
      this.trackElement.appendChild(r),
      (this.knobElement = r),
      e.value.emitter.on('change', this.onChange_),
      (this.value = e.value),
      this.update_();
  }
  update_() {
    const t = _e(
      qt(
        this.value.rawValue,
        this.props_.get('min'),
        this.props_.get('max'),
        0,
        100
      ),
      0,
      100
    );
    this.knobElement.style.width = `${t}%`;
  }
  onChange_() {
    this.update_();
  }
}
class ax {
  constructor(t, e) {
    (this.onKeyDown_ = this.onKeyDown_.bind(this)),
      (this.onKeyUp_ = this.onKeyUp_.bind(this)),
      (this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this)),
      (this.onPointerUp_ = this.onPointerUp_.bind(this)),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.props = e.props),
      (this.view = new ox(t, {
        props: this.props,
        value: this.value,
        viewProps: this.viewProps,
      })),
      (this.ptHandler_ = new gi(this.view.trackElement)),
      this.ptHandler_.emitter.on('down', this.onPointerDownOrMove_),
      this.ptHandler_.emitter.on('move', this.onPointerDownOrMove_),
      this.ptHandler_.emitter.on('up', this.onPointerUp_),
      this.view.trackElement.addEventListener('keydown', this.onKeyDown_),
      this.view.trackElement.addEventListener('keyup', this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    t.point &&
      this.value.setRawValue(
        qt(
          _e(t.point.x, 0, t.bounds.width),
          0,
          t.bounds.width,
          this.props.get('min'),
          this.props.get('max')
        ),
        e
      );
  }
  onPointerDownOrMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !1, last: !1 });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !0, last: !0 });
  }
  onKeyDown_(t) {
    const e = Le(this.props.get('keyScale'), Cn(t));
    e !== 0 &&
      this.value.setRawValue(this.value.rawValue + e, {
        forceEmit: !1,
        last: !1,
      });
  }
  onKeyUp_(t) {
    Le(this.props.get('keyScale'), Cn(t)) !== 0 &&
      this.value.setRawValue(this.value.rawValue, { forceEmit: !0, last: !0 });
  }
}
const Do = kt('sldtxt');
class lx {
  constructor(t, e) {
    (this.element = t.createElement('div')), this.element.classList.add(Do());
    const i = t.createElement('div');
    i.classList.add(Do('s')),
      (this.sliderView_ = e.sliderView),
      i.appendChild(this.sliderView_.element),
      this.element.appendChild(i);
    const r = t.createElement('div');
    r.classList.add(Do('t')),
      (this.textView_ = e.textView),
      r.appendChild(this.textView_.element),
      this.element.appendChild(r);
  }
}
class Ns {
  constructor(t, e) {
    (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.sliderC_ = new ax(t, {
        props: e.sliderProps,
        value: e.value,
        viewProps: this.viewProps,
      })),
      (this.textC_ = new Vr(t, {
        parser: e.parser,
        props: e.textProps,
        sliderProps: e.sliderProps,
        value: e.value,
        viewProps: e.viewProps,
      })),
      (this.view = new lx(t, {
        sliderView: this.sliderC_.view,
        textView: this.textC_.view,
      }));
  }
  get sliderController() {
    return this.sliderC_;
  }
  get textController() {
    return this.textC_;
  }
  importProps(t) {
    return Ve(
      t,
      null,
      (e) => ({ max: e.required.number, min: e.required.number }),
      (e) => {
        const i = this.sliderC_.props;
        return i.set('max', e.max), i.set('min', e.min), !0;
      }
    );
  }
  exportProps() {
    const t = this.sliderC_.props;
    return ze(null, { max: t.get('max'), min: t.get('min') });
  }
}
function Qh(n) {
  return {
    sliderProps: new It({ keyScale: n.keyScale, max: n.max, min: n.min }),
    textProps: new It({
      formatter: ee(n.formatter),
      keyScale: n.keyScale,
      pointerScale: ee(n.pointerScale),
    }),
  };
}
const cx = { containerUnitSize: 'cnt-usz' };
function tu(n) {
  return `--${cx[n]}`;
}
function Tr(n) {
  return Oh(n);
}
function Vn(n) {
  if (_a(n)) return ie(n, Tr);
}
function wn(n, t) {
  if (!n) return;
  const e = [],
    i = Ih(n, t);
  i && e.push(i);
  const r = Uh(n);
  return r && e.push(r), new Fr(e);
}
function hx(n) {
  return n ? n.major === nr.major : !1;
}
function eu(n) {
  if (n === 'inline' || n === 'popup') return n;
}
function zr(n, t) {
  n.write(t);
}
const _s = kt('ckb');
class ux {
  constructor(t, e) {
    (this.onValueChange_ = this.onValueChange_.bind(this)),
      (this.element = t.createElement('div')),
      this.element.classList.add(_s()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('label');
    i.classList.add(_s('l')),
      this.element.appendChild(i),
      (this.labelElement = i);
    const r = t.createElement('input');
    r.classList.add(_s('i')),
      (r.type = 'checkbox'),
      this.labelElement.appendChild(r),
      (this.inputElement = r),
      e.viewProps.bindDisabled(this.inputElement);
    const s = t.createElement('div');
    s.classList.add(_s('w')), this.labelElement.appendChild(s);
    const o = Hs(t, 'check');
    s.appendChild(o),
      e.value.emitter.on('change', this.onValueChange_),
      (this.value = e.value),
      this.update_();
  }
  update_() {
    this.inputElement.checked = this.value.rawValue;
  }
  onValueChange_() {
    this.update_();
  }
}
class dx {
  constructor(t, e) {
    (this.onInputChange_ = this.onInputChange_.bind(this)),
      (this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this)),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.view = new ux(t, { value: this.value, viewProps: this.viewProps })),
      this.view.inputElement.addEventListener('change', this.onInputChange_),
      this.view.labelElement.addEventListener(
        'mousedown',
        this.onLabelMouseDown_
      );
  }
  onInputChange_(t) {
    const e = t.currentTarget;
    (this.value.rawValue = e.checked), t.preventDefault(), t.stopPropagation();
  }
  onLabelMouseDown_(t) {
    t.preventDefault();
  }
}
function px(n) {
  const t = [],
    e = Ja(n.options);
  return e && t.push(e), new Fr(t);
}
const fx = Ae({
    id: 'input-bool',
    type: 'input',
    accept: (n, t) => {
      if (typeof n != 'boolean') return null;
      const e = ie(t, (i) => ({
        options: i.optional.custom(kr),
        readonly: i.optional.constant(!1),
      }));
      return e ? { initialValue: n, params: e } : null;
    },
    binding: {
      reader: (n) => $h,
      constraint: (n) => px(n.params),
      writer: (n) => zr,
    },
    controller: (n) => {
      const t = n.document,
        e = n.value,
        i = n.constraint,
        r = i && Is(i, Br);
      return r
        ? new jn(t, {
            props: new It({ options: r.values.value('options') }),
            value: e,
            viewProps: n.viewProps,
          })
        : new dx(t, { value: e, viewProps: n.viewProps });
    },
    api(n) {
      return typeof n.controller.value.rawValue != 'boolean'
        ? null
        : n.controller.valueController instanceof jn
        ? new $a(n.controller)
        : null;
    },
  }),
  ni = kt('col');
class mx {
  constructor(t, e) {
    (this.element = t.createElement('div')),
      this.element.classList.add(ni()),
      e.foldable.bindExpandedClass(this.element, ni(void 0, 'expanded')),
      cn(e.foldable, 'completed', er(this.element, ni(void 0, 'cpl')));
    const i = t.createElement('div');
    i.classList.add(ni('h')), this.element.appendChild(i);
    const r = t.createElement('div');
    r.classList.add(ni('s')), i.appendChild(r), (this.swatchElement = r);
    const s = t.createElement('div');
    if (
      (s.classList.add(ni('t')),
      i.appendChild(s),
      (this.textElement = s),
      e.pickerLayout === 'inline')
    ) {
      const o = t.createElement('div');
      o.classList.add(ni('p')),
        this.element.appendChild(o),
        (this.pickerElement = o);
    } else this.pickerElement = null;
  }
}
function _x(n, t, e) {
  const i = _e(n / 255, 0, 1),
    r = _e(t / 255, 0, 1),
    s = _e(e / 255, 0, 1),
    o = Math.max(i, r, s),
    a = Math.min(i, r, s),
    l = o - a;
  let c = 0,
    h = 0;
  const d = (a + o) / 2;
  return (
    l !== 0 &&
      ((h = l / (1 - Math.abs(o + a - 1))),
      i === o
        ? (c = (r - s) / l)
        : r === o
        ? (c = 2 + (s - i) / l)
        : (c = 4 + (i - r) / l),
      (c = c / 6 + (c < 0 ? 1 : 0))),
    [c * 360, h * 100, d * 100]
  );
}
function vx(n, t, e) {
  const i = ((n % 360) + 360) % 360,
    r = _e(t / 100, 0, 1),
    s = _e(e / 100, 0, 1),
    o = (1 - Math.abs(2 * s - 1)) * r,
    a = o * (1 - Math.abs(((i / 60) % 2) - 1)),
    l = s - o / 2;
  let c, h, d;
  return (
    i >= 0 && i < 60
      ? ([c, h, d] = [o, a, 0])
      : i >= 60 && i < 120
      ? ([c, h, d] = [a, o, 0])
      : i >= 120 && i < 180
      ? ([c, h, d] = [0, o, a])
      : i >= 180 && i < 240
      ? ([c, h, d] = [0, a, o])
      : i >= 240 && i < 300
      ? ([c, h, d] = [a, 0, o])
      : ([c, h, d] = [o, 0, a]),
    [(c + l) * 255, (h + l) * 255, (d + l) * 255]
  );
}
function gx(n, t, e) {
  const i = _e(n / 255, 0, 1),
    r = _e(t / 255, 0, 1),
    s = _e(e / 255, 0, 1),
    o = Math.max(i, r, s),
    a = Math.min(i, r, s),
    l = o - a;
  let c;
  l === 0
    ? (c = 0)
    : o === i
    ? (c = 60 * (((((r - s) / l) % 6) + 6) % 6))
    : o === r
    ? (c = 60 * ((s - i) / l + 2))
    : (c = 60 * ((i - r) / l + 4));
  const h = o === 0 ? 0 : l / o,
    d = o;
  return [c, h * 100, d * 100];
}
function nu(n, t, e) {
  const i = Rh(n, 360),
    r = _e(t / 100, 0, 1),
    s = _e(e / 100, 0, 1),
    o = s * r,
    a = o * (1 - Math.abs(((i / 60) % 2) - 1)),
    l = s - o;
  let c, h, d;
  return (
    i >= 0 && i < 60
      ? ([c, h, d] = [o, a, 0])
      : i >= 60 && i < 120
      ? ([c, h, d] = [a, o, 0])
      : i >= 120 && i < 180
      ? ([c, h, d] = [0, o, a])
      : i >= 180 && i < 240
      ? ([c, h, d] = [0, a, o])
      : i >= 240 && i < 300
      ? ([c, h, d] = [a, 0, o])
      : ([c, h, d] = [o, 0, a]),
    [(c + l) * 255, (h + l) * 255, (d + l) * 255]
  );
}
function xx(n, t, e) {
  const i = e + (t * (100 - Math.abs(2 * e - 100))) / 200;
  return [
    n,
    i !== 0 ? (t * (100 - Math.abs(2 * e - 100))) / i : 0,
    e + (t * (100 - Math.abs(2 * e - 100))) / (2 * 100),
  ];
}
function bx(n, t, e) {
  const i = 100 - Math.abs((e * (200 - t)) / 100 - 100);
  return [n, i !== 0 ? (t * e) / i : 0, (e * (200 - t)) / (2 * 100)];
}
function hn(n) {
  return [n[0], n[1], n[2]];
}
function Ws(n, t) {
  return [n[0], n[1], n[2], t];
}
const Mx = {
  hsl: { hsl: (n, t, e) => [n, t, e], hsv: xx, rgb: vx },
  hsv: { hsl: bx, hsv: (n, t, e) => [n, t, e], rgb: nu },
  rgb: { hsl: _x, hsv: gx, rgb: (n, t, e) => [n, t, e] },
};
function Ji(n, t) {
  return [
    t === 'float' ? 1 : n === 'rgb' ? 255 : 360,
    t === 'float' ? 1 : n === 'rgb' ? 255 : 100,
    t === 'float' ? 1 : n === 'rgb' ? 255 : 100,
  ];
}
function wx(n, t) {
  return n === t ? t : Rh(n, t);
}
function iu(n, t, e) {
  var i;
  const r = Ji(t, e);
  return [
    t === 'rgb' ? _e(n[0], 0, r[0]) : wx(n[0], r[0]),
    _e(n[1], 0, r[1]),
    _e(n[2], 0, r[2]),
    _e((i = n[3]) !== null && i !== void 0 ? i : 1, 0, 1),
  ];
}
function Nc(n, t, e, i) {
  const r = Ji(t, e),
    s = Ji(t, i);
  return n.map((o, a) => (o / r[a]) * s[a]);
}
function ru(n, t, e) {
  const i = Nc(n, t.mode, t.type, 'int'),
    r = Mx[t.mode][e.mode](...i);
  return Nc(r, e.mode, 'int', e.type);
}
class Vt {
  static black() {
    return new Vt([0, 0, 0], 'rgb');
  }
  constructor(t, e) {
    (this.type = 'int'), (this.mode = e), (this.comps_ = iu(t, e, this.type));
  }
  getComponents(t) {
    return Ws(
      ru(
        hn(this.comps_),
        { mode: this.mode, type: this.type },
        { mode: t ?? this.mode, type: this.type }
      ),
      this.comps_[3]
    );
  }
  toRgbaObject() {
    const t = this.getComponents('rgb');
    return { r: t[0], g: t[1], b: t[2], a: t[3] };
  }
}
const Nn = kt('colp');
class Ex {
  constructor(t, e) {
    (this.alphaViews_ = null),
      (this.element = t.createElement('div')),
      this.element.classList.add(Nn()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('div');
    i.classList.add(Nn('hsv'));
    const r = t.createElement('div');
    r.classList.add(Nn('sv')),
      (this.svPaletteView_ = e.svPaletteView),
      r.appendChild(this.svPaletteView_.element),
      i.appendChild(r);
    const s = t.createElement('div');
    s.classList.add(Nn('h')),
      (this.hPaletteView_ = e.hPaletteView),
      s.appendChild(this.hPaletteView_.element),
      i.appendChild(s),
      this.element.appendChild(i);
    const o = t.createElement('div');
    if (
      (o.classList.add(Nn('rgb')),
      (this.textsView_ = e.textsView),
      o.appendChild(this.textsView_.element),
      this.element.appendChild(o),
      e.alphaViews)
    ) {
      this.alphaViews_ = {
        palette: e.alphaViews.palette,
        text: e.alphaViews.text,
      };
      const a = t.createElement('div');
      a.classList.add(Nn('a'));
      const l = t.createElement('div');
      l.classList.add(Nn('ap')),
        l.appendChild(this.alphaViews_.palette.element),
        a.appendChild(l);
      const c = t.createElement('div');
      c.classList.add(Nn('at')),
        c.appendChild(this.alphaViews_.text.element),
        a.appendChild(c),
        this.element.appendChild(a);
    }
  }
  get allFocusableElements() {
    const t = [
      this.svPaletteView_.element,
      this.hPaletteView_.element,
      this.textsView_.modeSelectElement,
      ...this.textsView_.inputViews.map((e) => e.inputElement),
    ];
    return (
      this.alphaViews_ &&
        t.push(
          this.alphaViews_.palette.element,
          this.alphaViews_.text.inputElement
        ),
      t
    );
  }
}
function Sx(n) {
  return n === 'int' ? 'int' : n === 'float' ? 'float' : void 0;
}
function Qa(n) {
  return ie(n, (t) => ({
    color: t.optional.object({
      alpha: t.optional.boolean,
      type: t.optional.custom(Sx),
    }),
    expanded: t.optional.boolean,
    picker: t.optional.custom(eu),
    readonly: t.optional.constant(!1),
  }));
}
function mi(n) {
  return n ? 0.1 : 1;
}
function su(n) {
  var t;
  return (t = n.color) === null || t === void 0 ? void 0 : t.type;
}
class tl {
  constructor(t, e) {
    (this.type = 'float'), (this.mode = e), (this.comps_ = iu(t, e, this.type));
  }
  getComponents(t) {
    return Ws(
      ru(
        hn(this.comps_),
        { mode: this.mode, type: this.type },
        { mode: t ?? this.mode, type: this.type }
      ),
      this.comps_[3]
    );
  }
  toRgbaObject() {
    const t = this.getComponents('rgb');
    return { r: t[0], g: t[1], b: t[2], a: t[3] };
  }
}
const yx = { int: (n, t) => new Vt(n, t), float: (n, t) => new tl(n, t) };
function el(n, t, e) {
  return yx[e](n, t);
}
function Cx(n) {
  return n.type === 'float';
}
function Tx(n) {
  return n.type === 'int';
}
function Ax(n) {
  const t = n.getComponents(),
    e = Ji(n.mode, 'int');
  return new Vt(
    [
      Math.round(qt(t[0], 0, 1, 0, e[0])),
      Math.round(qt(t[1], 0, 1, 0, e[1])),
      Math.round(qt(t[2], 0, 1, 0, e[2])),
      t[3],
    ],
    n.mode
  );
}
function Px(n) {
  const t = n.getComponents(),
    e = Ji(n.mode, 'int');
  return new tl(
    [
      qt(t[0], 0, e[0], 0, 1),
      qt(t[1], 0, e[1], 0, 1),
      qt(t[2], 0, e[2], 0, 1),
      t[3],
    ],
    n.mode
  );
}
function Te(n, t) {
  if (n.type === t) return n;
  if (Tx(n) && t === 'float') return Px(n);
  if (Cx(n) && t === 'int') return Ax(n);
  throw ae.shouldNeverHappen();
}
function Rx(n, t) {
  return (
    n.alpha === t.alpha &&
    n.mode === t.mode &&
    n.notation === t.notation &&
    n.type === t.type
  );
}
function qe(n, t) {
  const e = n.match(/^(.+)%$/);
  return Math.min(e ? parseFloat(e[1]) * 0.01 * t : parseFloat(n), t);
}
const Lx = {
  deg: (n) => n,
  grad: (n) => (n * 360) / 400,
  rad: (n) => (n * 360) / (2 * Math.PI),
  turn: (n) => n * 360,
};
function ou(n) {
  const t = n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
  if (!t) return parseFloat(n);
  const e = parseFloat(t[1]),
    i = t[2];
  return Lx[i](e);
}
function au(n) {
  const t = n.match(
    /^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
  );
  if (!t) return null;
  const e = [qe(t[1], 255), qe(t[2], 255), qe(t[3], 255)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e;
}
function Dx(n) {
  const t = au(n);
  return t ? new Vt(t, 'rgb') : null;
}
function lu(n) {
  const t = n.match(
    /^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
  );
  if (!t) return null;
  const e = [qe(t[1], 255), qe(t[2], 255), qe(t[3], 255), qe(t[4], 1)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e;
}
function Ix(n) {
  const t = lu(n);
  return t ? new Vt(t, 'rgb') : null;
}
function cu(n) {
  const t = n.match(
    /^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
  );
  if (!t) return null;
  const e = [ou(t[1]), qe(t[2], 100), qe(t[3], 100)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e;
}
function Ux(n) {
  const t = cu(n);
  return t ? new Vt(t, 'hsl') : null;
}
function hu(n) {
  const t = n.match(
    /^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
  );
  if (!t) return null;
  const e = [ou(t[1]), qe(t[2], 100), qe(t[3], 100), qe(t[4], 1)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e;
}
function Nx(n) {
  const t = hu(n);
  return t ? new Vt(t, 'hsl') : null;
}
function uu(n) {
  const t = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (t)
    return [
      parseInt(t[1] + t[1], 16),
      parseInt(t[2] + t[2], 16),
      parseInt(t[3] + t[3], 16),
    ];
  const e = n.match(
    /^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/
  );
  return e
    ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
    : null;
}
function Ox(n) {
  const t = uu(n);
  return t ? new Vt(t, 'rgb') : null;
}
function du(n) {
  const t = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (t)
    return [
      parseInt(t[1] + t[1], 16),
      parseInt(t[2] + t[2], 16),
      parseInt(t[3] + t[3], 16),
      qt(parseInt(t[4] + t[4], 16), 0, 255, 0, 1),
    ];
  const e = n.match(
    /^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/
  );
  return e
    ? [
        parseInt(e[1], 16),
        parseInt(e[2], 16),
        parseInt(e[3], 16),
        qt(parseInt(e[4], 16), 0, 255, 0, 1),
      ]
    : null;
}
function Fx(n) {
  const t = du(n);
  return t ? new Vt(t, 'rgb') : null;
}
function pu(n) {
  const t = n.match(
    /^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/
  );
  if (!t) return null;
  const e = [parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3])];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e;
}
function Bx(n) {
  return (t) => {
    const e = pu(t);
    return e ? el(e, 'rgb', n) : null;
  };
}
function fu(n) {
  const t = n.match(
    /^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/
  );
  if (!t) return null;
  const e = [
    parseFloat(t[1]),
    parseFloat(t[2]),
    parseFloat(t[3]),
    parseFloat(t[4]),
  ];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e;
}
function kx(n) {
  return (t) => {
    const e = fu(t);
    return e ? el(e, 'rgb', n) : null;
  };
}
const Vx = [
  { parser: uu, result: { alpha: !1, mode: 'rgb', notation: 'hex' } },
  { parser: du, result: { alpha: !0, mode: 'rgb', notation: 'hex' } },
  { parser: au, result: { alpha: !1, mode: 'rgb', notation: 'func' } },
  { parser: lu, result: { alpha: !0, mode: 'rgb', notation: 'func' } },
  { parser: cu, result: { alpha: !1, mode: 'hsl', notation: 'func' } },
  { parser: hu, result: { alpha: !0, mode: 'hsl', notation: 'func' } },
  { parser: pu, result: { alpha: !1, mode: 'rgb', notation: 'object' } },
  { parser: fu, result: { alpha: !0, mode: 'rgb', notation: 'object' } },
];
function zx(n) {
  return Vx.reduce(
    (t, { parser: e, result: i }) => t || (e(n) ? i : null),
    null
  );
}
function Hx(n, t = 'int') {
  const e = zx(n);
  return e
    ? e.notation === 'hex' && t !== 'float'
      ? Object.assign(Object.assign({}, e), { type: 'int' })
      : e.notation === 'func'
      ? Object.assign(Object.assign({}, e), { type: t })
      : null
    : null;
}
function Hr(n) {
  const t = [Ox, Fx, Dx, Ix, Ux, Nx];
  t.push(Bx('int'), kx('int'));
  const e = nx(t);
  return (i) => {
    const r = e(i);
    return r ? Te(r, n) : null;
  };
}
function Gx(n) {
  const t = Hr('int');
  if (typeof n != 'string') return Vt.black();
  const e = t(n);
  return e ?? Vt.black();
}
function mu(n) {
  const t = _e(Math.floor(n), 0, 255).toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function nl(n, t = '#') {
  const e = hn(n.getComponents('rgb')).map(mu).join('');
  return `${t}${e}`;
}
function il(n, t = '#') {
  const e = n.getComponents('rgb'),
    i = [e[0], e[1], e[2], e[3] * 255].map(mu).join('');
  return `${t}${i}`;
}
function _u(n) {
  const t = Ue(0),
    e = Te(n, 'int');
  return `rgb(${hn(e.getComponents('rgb'))
    .map((r) => t(r))
    .join(', ')})`;
}
function Ss(n) {
  const t = Ue(2),
    e = Ue(0);
  return `rgba(${Te(n, 'int')
    .getComponents('rgb')
    .map((s, o) => (o === 3 ? t : e)(s))
    .join(', ')})`;
}
function Wx(n) {
  const t = [Ue(0), Us, Us],
    e = Te(n, 'int');
  return `hsl(${hn(e.getComponents('hsl'))
    .map((r, s) => t[s](r))
    .join(', ')})`;
}
function Xx(n) {
  const t = [Ue(0), Us, Us, Ue(2)];
  return `hsla(${Te(n, 'int')
    .getComponents('hsl')
    .map((r, s) => t[s](r))
    .join(', ')})`;
}
function vu(n, t) {
  const e = Ue(t === 'float' ? 2 : 0),
    i = ['r', 'g', 'b'],
    r = Te(n, t);
  return `{${hn(r.getComponents('rgb'))
    .map((o, a) => `${i[a]}: ${e(o)}`)
    .join(', ')}}`;
}
function jx(n) {
  return (t) => vu(t, n);
}
function gu(n, t) {
  const e = Ue(2),
    i = Ue(t === 'float' ? 2 : 0),
    r = ['r', 'g', 'b', 'a'];
  return `{${Te(n, t)
    .getComponents('rgb')
    .map((a, l) => {
      const c = l === 3 ? e : i;
      return `${r[l]}: ${c(a)}`;
    })
    .join(', ')}}`;
}
function qx(n) {
  return (t) => gu(t, n);
}
const Yx = [
  {
    format: { alpha: !1, mode: 'rgb', notation: 'hex', type: 'int' },
    stringifier: nl,
  },
  {
    format: { alpha: !0, mode: 'rgb', notation: 'hex', type: 'int' },
    stringifier: il,
  },
  {
    format: { alpha: !1, mode: 'rgb', notation: 'func', type: 'int' },
    stringifier: _u,
  },
  {
    format: { alpha: !0, mode: 'rgb', notation: 'func', type: 'int' },
    stringifier: Ss,
  },
  {
    format: { alpha: !1, mode: 'hsl', notation: 'func', type: 'int' },
    stringifier: Wx,
  },
  {
    format: { alpha: !0, mode: 'hsl', notation: 'func', type: 'int' },
    stringifier: Xx,
  },
  ...['int', 'float'].reduce(
    (n, t) => [
      ...n,
      {
        format: { alpha: !1, mode: 'rgb', notation: 'object', type: t },
        stringifier: jx(t),
      },
      {
        format: { alpha: !0, mode: 'rgb', notation: 'object', type: t },
        stringifier: qx(t),
      },
    ],
    []
  ),
];
function xu(n) {
  return Yx.reduce(
    (t, e) => t || (Rx(e.format, n) ? e.stringifier : null),
    null
  );
}
const vr = kt('apl');
class Kx {
  constructor(t, e) {
    (this.onValueChange_ = this.onValueChange_.bind(this)),
      (this.value = e.value),
      this.value.emitter.on('change', this.onValueChange_),
      (this.element = t.createElement('div')),
      this.element.classList.add(vr()),
      e.viewProps.bindClassModifiers(this.element),
      e.viewProps.bindTabIndex(this.element);
    const i = t.createElement('div');
    i.classList.add(vr('b')), this.element.appendChild(i);
    const r = t.createElement('div');
    r.classList.add(vr('c')), i.appendChild(r), (this.colorElem_ = r);
    const s = t.createElement('div');
    s.classList.add(vr('m')),
      this.element.appendChild(s),
      (this.markerElem_ = s);
    const o = t.createElement('div');
    o.classList.add(vr('p')),
      this.markerElem_.appendChild(o),
      (this.previewElem_ = o),
      this.update_();
  }
  update_() {
    const t = this.value.rawValue,
      e = t.getComponents('rgb'),
      i = new Vt([e[0], e[1], e[2], 0], 'rgb'),
      r = new Vt([e[0], e[1], e[2], 255], 'rgb'),
      s = ['to right', Ss(i), Ss(r)];
    (this.colorElem_.style.background = `linear-gradient(${s.join(',')})`),
      (this.previewElem_.style.backgroundColor = Ss(t));
    const o = qt(e[3], 0, 1, 0, 100);
    this.markerElem_.style.left = `${o}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class $x {
  constructor(t, e) {
    (this.onKeyDown_ = this.onKeyDown_.bind(this)),
      (this.onKeyUp_ = this.onKeyUp_.bind(this)),
      (this.onPointerDown_ = this.onPointerDown_.bind(this)),
      (this.onPointerMove_ = this.onPointerMove_.bind(this)),
      (this.onPointerUp_ = this.onPointerUp_.bind(this)),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.view = new Kx(t, { value: this.value, viewProps: this.viewProps })),
      (this.ptHandler_ = new gi(this.view.element)),
      this.ptHandler_.emitter.on('down', this.onPointerDown_),
      this.ptHandler_.emitter.on('move', this.onPointerMove_),
      this.ptHandler_.emitter.on('up', this.onPointerUp_),
      this.view.element.addEventListener('keydown', this.onKeyDown_),
      this.view.element.addEventListener('keyup', this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const i = t.point.x / t.bounds.width,
      r = this.value.rawValue,
      [s, o, a] = r.getComponents('hsv');
    this.value.setRawValue(new Vt([s, o, a, i], 'hsv'), e);
  }
  onPointerDown_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !1, last: !1 });
  }
  onPointerMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !1, last: !1 });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !0, last: !0 });
  }
  onKeyDown_(t) {
    const e = Le(mi(!0), Cn(t));
    if (e === 0) return;
    const i = this.value.rawValue,
      [r, s, o, a] = i.getComponents('hsv');
    this.value.setRawValue(new Vt([r, s, o, a + e], 'hsv'), {
      forceEmit: !1,
      last: !1,
    });
  }
  onKeyUp_(t) {
    Le(mi(!0), Cn(t)) !== 0 &&
      this.value.setRawValue(this.value.rawValue, { forceEmit: !0, last: !0 });
  }
}
const Fi = kt('coltxt');
function Zx(n) {
  const t = n.createElement('select'),
    e = [
      { text: 'RGB', value: 'rgb' },
      { text: 'HSL', value: 'hsl' },
      { text: 'HSV', value: 'hsv' },
      { text: 'HEX', value: 'hex' },
    ];
  return (
    t.appendChild(
      e.reduce((i, r) => {
        const s = n.createElement('option');
        return (
          (s.textContent = r.text), (s.value = r.value), i.appendChild(s), i
        );
      }, n.createDocumentFragment())
    ),
    t
  );
}
class Jx {
  constructor(t, e) {
    (this.element = t.createElement('div')),
      this.element.classList.add(Fi()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('div');
    i.classList.add(Fi('m')),
      (this.modeElem_ = Zx(t)),
      this.modeElem_.classList.add(Fi('ms')),
      i.appendChild(this.modeSelectElement),
      e.viewProps.bindDisabled(this.modeElem_);
    const r = t.createElement('div');
    r.classList.add(Fi('mm')),
      r.appendChild(Hs(t, 'dropdown')),
      i.appendChild(r),
      this.element.appendChild(i);
    const s = t.createElement('div');
    s.classList.add(Fi('w')),
      this.element.appendChild(s),
      (this.inputsElem_ = s),
      (this.inputViews_ = e.inputViews),
      this.applyInputViews_(),
      En(e.mode, (o) => {
        this.modeElem_.value = o;
      });
  }
  get modeSelectElement() {
    return this.modeElem_;
  }
  get inputViews() {
    return this.inputViews_;
  }
  set inputViews(t) {
    (this.inputViews_ = t), this.applyInputViews_();
  }
  applyInputViews_() {
    kh(this.inputsElem_);
    const t = this.element.ownerDocument;
    this.inputViews_.forEach((e) => {
      const i = t.createElement('div');
      i.classList.add(Fi('c')),
        i.appendChild(e.element),
        this.inputsElem_.appendChild(i);
    });
  }
}
function Qx(n) {
  return Ue(n === 'float' ? 2 : 0);
}
function tb(n, t, e) {
  const i = Ji(n, t)[e];
  return new Ur({ min: 0, max: i });
}
function eb(n, t, e) {
  return new Vr(n, {
    arrayPosition: e === 0 ? 'fst' : e === 2 ? 'lst' : 'mid',
    parser: t.parser,
    props: It.fromObject({
      formatter: Qx(t.colorType),
      keyScale: mi(!1),
      pointerScale: t.colorType === 'float' ? 0.01 : 1,
    }),
    value: ee(0, { constraint: tb(t.colorMode, t.colorType, e) }),
    viewProps: t.viewProps,
  });
}
function nb(n, t) {
  const e = {
    colorMode: t.colorMode,
    colorType: t.colorType,
    parser: yn,
    viewProps: t.viewProps,
  };
  return [0, 1, 2].map((i) => {
    const r = eb(n, e, i);
    return (
      rr({
        primary: t.value,
        secondary: r.value,
        forward(s) {
          return Te(s, t.colorType).getComponents(t.colorMode)[i];
        },
        backward(s, o) {
          const a = t.colorMode,
            c = Te(s, t.colorType).getComponents(a);
          c[i] = o;
          const h = el(Ws(hn(c), c[3]), a, t.colorType);
          return Te(h, 'int');
        },
      }),
      r
    );
  });
}
function ib(n, t) {
  const e = new yr(n, {
    parser: Hr('int'),
    props: It.fromObject({ formatter: nl }),
    value: ee(Vt.black()),
    viewProps: t.viewProps,
  });
  return (
    rr({
      primary: t.value,
      secondary: e.value,
      forward: (i) => new Vt(hn(i.getComponents()), i.mode),
      backward: (i, r) =>
        new Vt(Ws(hn(r.getComponents(i.mode)), i.getComponents()[3]), i.mode),
    }),
    [e]
  );
}
function rb(n) {
  return n !== 'hex';
}
class sb {
  constructor(t, e) {
    (this.onModeSelectChange_ = this.onModeSelectChange_.bind(this)),
      (this.colorType_ = e.colorType),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.colorMode = ee(this.value.rawValue.mode)),
      (this.ccs_ = this.createComponentControllers_(t)),
      (this.view = new Jx(t, {
        mode: this.colorMode,
        inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view],
        viewProps: this.viewProps,
      })),
      this.view.modeSelectElement.addEventListener(
        'change',
        this.onModeSelectChange_
      );
  }
  createComponentControllers_(t) {
    const e = this.colorMode.rawValue;
    return rb(e)
      ? nb(t, {
          colorMode: e,
          colorType: this.colorType_,
          value: this.value,
          viewProps: this.viewProps,
        })
      : ib(t, { value: this.value, viewProps: this.viewProps });
  }
  onModeSelectChange_(t) {
    const e = t.currentTarget;
    (this.colorMode.rawValue = e.value),
      (this.ccs_ = this.createComponentControllers_(
        this.view.element.ownerDocument
      )),
      (this.view.inputViews = this.ccs_.map((i) => i.view));
  }
}
const Io = kt('hpl');
class ob {
  constructor(t, e) {
    (this.onValueChange_ = this.onValueChange_.bind(this)),
      (this.value = e.value),
      this.value.emitter.on('change', this.onValueChange_),
      (this.element = t.createElement('div')),
      this.element.classList.add(Io()),
      e.viewProps.bindClassModifiers(this.element),
      e.viewProps.bindTabIndex(this.element);
    const i = t.createElement('div');
    i.classList.add(Io('c')), this.element.appendChild(i);
    const r = t.createElement('div');
    r.classList.add(Io('m')),
      this.element.appendChild(r),
      (this.markerElem_ = r),
      this.update_();
  }
  update_() {
    const t = this.value.rawValue,
      [e] = t.getComponents('hsv');
    this.markerElem_.style.backgroundColor = _u(new Vt([e, 100, 100], 'hsv'));
    const i = qt(e, 0, 360, 0, 100);
    this.markerElem_.style.left = `${i}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class ab {
  constructor(t, e) {
    (this.onKeyDown_ = this.onKeyDown_.bind(this)),
      (this.onKeyUp_ = this.onKeyUp_.bind(this)),
      (this.onPointerDown_ = this.onPointerDown_.bind(this)),
      (this.onPointerMove_ = this.onPointerMove_.bind(this)),
      (this.onPointerUp_ = this.onPointerUp_.bind(this)),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.view = new ob(t, { value: this.value, viewProps: this.viewProps })),
      (this.ptHandler_ = new gi(this.view.element)),
      this.ptHandler_.emitter.on('down', this.onPointerDown_),
      this.ptHandler_.emitter.on('move', this.onPointerMove_),
      this.ptHandler_.emitter.on('up', this.onPointerUp_),
      this.view.element.addEventListener('keydown', this.onKeyDown_),
      this.view.element.addEventListener('keyup', this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const i = qt(_e(t.point.x, 0, t.bounds.width), 0, t.bounds.width, 0, 360),
      r = this.value.rawValue,
      [, s, o, a] = r.getComponents('hsv');
    this.value.setRawValue(new Vt([i, s, o, a], 'hsv'), e);
  }
  onPointerDown_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !1, last: !1 });
  }
  onPointerMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !1, last: !1 });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !0, last: !0 });
  }
  onKeyDown_(t) {
    const e = Le(mi(!1), Cn(t));
    if (e === 0) return;
    const i = this.value.rawValue,
      [r, s, o, a] = i.getComponents('hsv');
    this.value.setRawValue(new Vt([r + e, s, o, a], 'hsv'), {
      forceEmit: !1,
      last: !1,
    });
  }
  onKeyUp_(t) {
    Le(mi(!1), Cn(t)) !== 0 &&
      this.value.setRawValue(this.value.rawValue, { forceEmit: !0, last: !0 });
  }
}
const Uo = kt('svp'),
  Oc = 64;
class lb {
  constructor(t, e) {
    (this.onValueChange_ = this.onValueChange_.bind(this)),
      (this.value = e.value),
      this.value.emitter.on('change', this.onValueChange_),
      (this.element = t.createElement('div')),
      this.element.classList.add(Uo()),
      e.viewProps.bindClassModifiers(this.element),
      e.viewProps.bindTabIndex(this.element);
    const i = t.createElement('canvas');
    (i.height = Oc),
      (i.width = Oc),
      i.classList.add(Uo('c')),
      this.element.appendChild(i),
      (this.canvasElement = i);
    const r = t.createElement('div');
    r.classList.add(Uo('m')),
      this.element.appendChild(r),
      (this.markerElem_ = r),
      this.update_();
  }
  update_() {
    const t = a0(this.canvasElement);
    if (!t) return;
    const i = this.value.rawValue.getComponents('hsv'),
      r = this.canvasElement.width,
      s = this.canvasElement.height,
      o = t.getImageData(0, 0, r, s),
      a = o.data;
    for (let h = 0; h < s; h++)
      for (let d = 0; d < r; d++) {
        const p = qt(d, 0, r, 0, 100),
          m = qt(h, 0, s, 100, 0),
          g = nu(i[0], p, m),
          b = (h * r + d) * 4;
        (a[b] = g[0]), (a[b + 1] = g[1]), (a[b + 2] = g[2]), (a[b + 3] = 255);
      }
    t.putImageData(o, 0, 0);
    const l = qt(i[1], 0, 100, 0, 100);
    this.markerElem_.style.left = `${l}%`;
    const c = qt(i[2], 0, 100, 100, 0);
    this.markerElem_.style.top = `${c}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class cb {
  constructor(t, e) {
    (this.onKeyDown_ = this.onKeyDown_.bind(this)),
      (this.onKeyUp_ = this.onKeyUp_.bind(this)),
      (this.onPointerDown_ = this.onPointerDown_.bind(this)),
      (this.onPointerMove_ = this.onPointerMove_.bind(this)),
      (this.onPointerUp_ = this.onPointerUp_.bind(this)),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.view = new lb(t, { value: this.value, viewProps: this.viewProps })),
      (this.ptHandler_ = new gi(this.view.element)),
      this.ptHandler_.emitter.on('down', this.onPointerDown_),
      this.ptHandler_.emitter.on('move', this.onPointerMove_),
      this.ptHandler_.emitter.on('up', this.onPointerUp_),
      this.view.element.addEventListener('keydown', this.onKeyDown_),
      this.view.element.addEventListener('keyup', this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const i = qt(t.point.x, 0, t.bounds.width, 0, 100),
      r = qt(t.point.y, 0, t.bounds.height, 100, 0),
      [s, , , o] = this.value.rawValue.getComponents('hsv');
    this.value.setRawValue(new Vt([s, i, r, o], 'hsv'), e);
  }
  onPointerDown_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !1, last: !1 });
  }
  onPointerMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !1, last: !1 });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !0, last: !0 });
  }
  onKeyDown_(t) {
    Jh(t.key) && t.preventDefault();
    const [e, i, r, s] = this.value.rawValue.getComponents('hsv'),
      o = mi(!1),
      a = Le(o, Cn(t)),
      l = Le(o, Cr(t));
    (a === 0 && l === 0) ||
      this.value.setRawValue(new Vt([e, i + a, r + l, s], 'hsv'), {
        forceEmit: !1,
        last: !1,
      });
  }
  onKeyUp_(t) {
    const e = mi(!1),
      i = Le(e, Cn(t)),
      r = Le(e, Cr(t));
    (i === 0 && r === 0) ||
      this.value.setRawValue(this.value.rawValue, { forceEmit: !0, last: !0 });
  }
}
class hb {
  constructor(t, e) {
    (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.hPaletteC_ = new ab(t, {
        value: this.value,
        viewProps: this.viewProps,
      })),
      (this.svPaletteC_ = new cb(t, {
        value: this.value,
        viewProps: this.viewProps,
      })),
      (this.alphaIcs_ = e.supportsAlpha
        ? {
            palette: new $x(t, {
              value: this.value,
              viewProps: this.viewProps,
            }),
            text: new Vr(t, {
              parser: yn,
              props: It.fromObject({
                pointerScale: 0.01,
                keyScale: 0.1,
                formatter: Ue(2),
              }),
              value: ee(0, { constraint: new Ur({ min: 0, max: 1 }) }),
              viewProps: this.viewProps,
            }),
          }
        : null),
      this.alphaIcs_ &&
        rr({
          primary: this.value,
          secondary: this.alphaIcs_.text.value,
          forward: (i) => i.getComponents()[3],
          backward: (i, r) => {
            const s = i.getComponents();
            return (s[3] = r), new Vt(s, i.mode);
          },
        }),
      (this.textsC_ = new sb(t, {
        colorType: e.colorType,
        value: this.value,
        viewProps: this.viewProps,
      })),
      (this.view = new Ex(t, {
        alphaViews: this.alphaIcs_
          ? {
              palette: this.alphaIcs_.palette.view,
              text: this.alphaIcs_.text.view,
            }
          : null,
        hPaletteView: this.hPaletteC_.view,
        supportsAlpha: e.supportsAlpha,
        svPaletteView: this.svPaletteC_.view,
        textsView: this.textsC_.view,
        viewProps: this.viewProps,
      }));
  }
  get textsController() {
    return this.textsC_;
  }
}
const No = kt('colsw');
class ub {
  constructor(t, e) {
    (this.onValueChange_ = this.onValueChange_.bind(this)),
      e.value.emitter.on('change', this.onValueChange_),
      (this.value = e.value),
      (this.element = t.createElement('div')),
      this.element.classList.add(No()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('div');
    i.classList.add(No('sw')),
      this.element.appendChild(i),
      (this.swatchElem_ = i);
    const r = t.createElement('button');
    r.classList.add(No('b')),
      e.viewProps.bindDisabled(r),
      this.element.appendChild(r),
      (this.buttonElement = r),
      this.update_();
  }
  update_() {
    const t = this.value.rawValue;
    this.swatchElem_.style.backgroundColor = il(t);
  }
  onValueChange_() {
    this.update_();
  }
}
class db {
  constructor(t, e) {
    (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.view = new ub(t, { value: this.value, viewProps: this.viewProps }));
  }
}
class rl {
  constructor(t, e) {
    (this.onButtonBlur_ = this.onButtonBlur_.bind(this)),
      (this.onButtonClick_ = this.onButtonClick_.bind(this)),
      (this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this)),
      (this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this)),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.foldable_ = Or.create(e.expanded)),
      (this.swatchC_ = new db(t, {
        value: this.value,
        viewProps: this.viewProps,
      }));
    const i = this.swatchC_.view.buttonElement;
    i.addEventListener('blur', this.onButtonBlur_),
      i.addEventListener('click', this.onButtonClick_),
      (this.textC_ = new yr(t, {
        parser: e.parser,
        props: It.fromObject({ formatter: e.formatter }),
        value: this.value,
        viewProps: this.viewProps,
      })),
      (this.view = new mx(t, {
        foldable: this.foldable_,
        pickerLayout: e.pickerLayout,
      })),
      this.view.swatchElement.appendChild(this.swatchC_.view.element),
      this.view.textElement.appendChild(this.textC_.view.element),
      (this.popC_ =
        e.pickerLayout === 'popup'
          ? new Kh(t, { viewProps: this.viewProps })
          : null);
    const r = new hb(t, {
      colorType: e.colorType,
      supportsAlpha: e.supportsAlpha,
      value: this.value,
      viewProps: this.viewProps,
    });
    r.view.allFocusableElements.forEach((s) => {
      s.addEventListener('blur', this.onPopupChildBlur_),
        s.addEventListener('keydown', this.onPopupChildKeydown_);
    }),
      (this.pickerC_ = r),
      this.popC_
        ? (this.view.element.appendChild(this.popC_.view.element),
          this.popC_.view.element.appendChild(r.view.element),
          rr({
            primary: this.foldable_.value('expanded'),
            secondary: this.popC_.shows,
            forward: (s) => s,
            backward: (s, o) => o,
          }))
        : this.view.pickerElement &&
          (this.view.pickerElement.appendChild(this.pickerC_.view.element),
          Ka(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onButtonBlur_(t) {
    if (!this.popC_) return;
    const e = this.view.element,
      i = t.relatedTarget;
    (!i || !e.contains(i)) && (this.popC_.shows.rawValue = !1);
  }
  onButtonClick_() {
    this.foldable_.set('expanded', !this.foldable_.get('expanded')),
      this.foldable_.get('expanded') &&
        this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(t) {
    if (!this.popC_) return;
    const e = this.popC_.view.element,
      i = Vh(t);
    (i && e.contains(i)) ||
      (i && i === this.swatchC_.view.buttonElement && !Ga(e.ownerDocument)) ||
      (this.popC_.shows.rawValue = !1);
  }
  onPopupChildKeydown_(t) {
    this.popC_
      ? t.key === 'Escape' && (this.popC_.shows.rawValue = !1)
      : this.view.pickerElement &&
        t.key === 'Escape' &&
        this.swatchC_.view.buttonElement.focus();
  }
}
function pb(n) {
  return hn(n.getComponents('rgb')).reduce(
    (t, e) => (t << 8) | (Math.floor(e) & 255),
    0
  );
}
function fb(n) {
  return (
    n.getComponents('rgb').reduce((t, e, i) => {
      const r = Math.floor(i === 3 ? e * 255 : e) & 255;
      return (t << 8) | r;
    }, 0) >>> 0
  );
}
function mb(n) {
  return new Vt([(n >> 16) & 255, (n >> 8) & 255, n & 255], 'rgb');
}
function _b(n) {
  return new Vt(
    [
      (n >> 24) & 255,
      (n >> 16) & 255,
      (n >> 8) & 255,
      qt(n & 255, 0, 255, 0, 1),
    ],
    'rgb'
  );
}
function vb(n) {
  return typeof n != 'number' ? Vt.black() : mb(n);
}
function gb(n) {
  return typeof n != 'number' ? Vt.black() : _b(n);
}
function ys(n, t) {
  return typeof n != 'object' || Jt(n) ? !1 : t in n && typeof n[t] == 'number';
}
function bu(n) {
  return ys(n, 'r') && ys(n, 'g') && ys(n, 'b');
}
function Mu(n) {
  return bu(n) && ys(n, 'a');
}
function wu(n) {
  return bu(n);
}
function sl(n, t) {
  if (n.mode !== t.mode || n.type !== t.type) return !1;
  const e = n.getComponents(),
    i = t.getComponents();
  for (let r = 0; r < e.length; r++) if (e[r] !== i[r]) return !1;
  return !0;
}
function Fc(n) {
  return 'a' in n ? [n.r, n.g, n.b, n.a] : [n.r, n.g, n.b];
}
function xb(n) {
  const t = xu(n);
  return t
    ? (e, i) => {
        zr(e, t(i));
      }
    : null;
}
function bb(n) {
  const t = n ? fb : pb;
  return (e, i) => {
    zr(e, t(i));
  };
}
function Mb(n, t, e) {
  const r = Te(t, e).toRgbaObject();
  n.writeProperty('r', r.r),
    n.writeProperty('g', r.g),
    n.writeProperty('b', r.b),
    n.writeProperty('a', r.a);
}
function wb(n, t, e) {
  const r = Te(t, e).toRgbaObject();
  n.writeProperty('r', r.r),
    n.writeProperty('g', r.g),
    n.writeProperty('b', r.b);
}
function Eb(n, t) {
  return (e, i) => {
    n ? Mb(e, i, t) : wb(e, i, t);
  };
}
function Sb(n) {
  var t;
  return !!(
    !((t = n == null ? void 0 : n.color) === null || t === void 0) && t.alpha
  );
}
function yb(n) {
  return n ? (t) => il(t, '0x') : (t) => nl(t, '0x');
}
function Cb(n) {
  return 'color' in n || n.view === 'color';
}
const Tb = Ae({
  id: 'input-color-number',
  type: 'input',
  accept: (n, t) => {
    if (typeof n != 'number' || !Cb(t)) return null;
    const e = Qa(t);
    return e
      ? {
          initialValue: n,
          params: Object.assign(Object.assign({}, e), { supportsAlpha: Sb(t) }),
        }
      : null;
  },
  binding: {
    reader: (n) => (n.params.supportsAlpha ? gb : vb),
    equals: sl,
    writer: (n) => bb(n.params.supportsAlpha),
  },
  controller: (n) => {
    var t, e;
    return new rl(n.document, {
      colorType: 'int',
      expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : !1,
      formatter: yb(n.params.supportsAlpha),
      parser: Hr('int'),
      pickerLayout:
        (e = n.params.picker) !== null && e !== void 0 ? e : 'popup',
      supportsAlpha: n.params.supportsAlpha,
      value: n.value,
      viewProps: n.viewProps,
    });
  },
});
function Ab(n, t) {
  if (!wu(n)) return Te(Vt.black(), t);
  if (t === 'int') {
    const e = Fc(n);
    return new Vt(e, 'rgb');
  }
  if (t === 'float') {
    const e = Fc(n);
    return new tl(e, 'rgb');
  }
  return Te(Vt.black(), 'int');
}
function Pb(n) {
  return Mu(n);
}
function Rb(n) {
  return (t) => {
    const e = Ab(t, n);
    return Te(e, 'int');
  };
}
function Lb(n, t) {
  return (e) => (n ? gu(e, t) : vu(e, t));
}
const Db = Ae({
    id: 'input-color-object',
    type: 'input',
    accept: (n, t) => {
      var e;
      if (!wu(n)) return null;
      const i = Qa(t);
      return i
        ? {
            initialValue: n,
            params: Object.assign(Object.assign({}, i), {
              colorType: (e = su(t)) !== null && e !== void 0 ? e : 'int',
            }),
          }
        : null;
    },
    binding: {
      reader: (n) => Rb(n.params.colorType),
      equals: sl,
      writer: (n) => Eb(Pb(n.initialValue), n.params.colorType),
    },
    controller: (n) => {
      var t, e;
      const i = Mu(n.initialValue);
      return new rl(n.document, {
        colorType: n.params.colorType,
        expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : !1,
        formatter: Lb(i, n.params.colorType),
        parser: Hr('int'),
        pickerLayout:
          (e = n.params.picker) !== null && e !== void 0 ? e : 'popup',
        supportsAlpha: i,
        value: n.value,
        viewProps: n.viewProps,
      });
    },
  }),
  Ib = Ae({
    id: 'input-color-string',
    type: 'input',
    accept: (n, t) => {
      if (typeof n != 'string' || t.view === 'text') return null;
      const e = Hx(n, su(t));
      if (!e) return null;
      const i = xu(e);
      if (!i) return null;
      const r = Qa(t);
      return r
        ? {
            initialValue: n,
            params: Object.assign(Object.assign({}, r), {
              format: e,
              stringifier: i,
            }),
          }
        : null;
    },
    binding: {
      reader: () => Gx,
      equals: sl,
      writer: (n) => {
        const t = xb(n.params.format);
        if (!t) throw ae.notBindable();
        return t;
      },
    },
    controller: (n) => {
      var t, e;
      return new rl(n.document, {
        colorType: n.params.format.type,
        expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : !1,
        formatter: n.params.stringifier,
        parser: Hr('int'),
        pickerLayout:
          (e = n.params.picker) !== null && e !== void 0 ? e : 'popup',
        supportsAlpha: n.params.format.alpha,
        value: n.value,
        viewProps: n.viewProps,
      });
    },
  });
class ol {
  constructor(t) {
    (this.components = t.components), (this.asm_ = t.assembly);
  }
  constrain(t) {
    const e = this.asm_.toComponents(t).map((i, r) => {
      var s, o;
      return (o =
        (s = this.components[r]) === null || s === void 0
          ? void 0
          : s.constrain(i)) !== null && o !== void 0
        ? o
        : i;
    });
    return this.asm_.fromComponents(e);
  }
}
const Bc = kt('pndtxt');
class Ub {
  constructor(t, e) {
    (this.textViews = e.textViews),
      (this.element = t.createElement('div')),
      this.element.classList.add(Bc()),
      this.textViews.forEach((i) => {
        const r = t.createElement('div');
        r.classList.add(Bc('a')),
          r.appendChild(i.element),
          this.element.appendChild(r);
      });
  }
}
function Nb(n, t, e) {
  return new Vr(n, {
    arrayPosition: e === 0 ? 'fst' : e === t.axes.length - 1 ? 'lst' : 'mid',
    parser: t.parser,
    props: t.axes[e].textProps,
    value: ee(0, { constraint: t.axes[e].constraint }),
    viewProps: t.viewProps,
  });
}
class al {
  constructor(t, e) {
    (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.acs_ = e.axes.map((i, r) => Nb(t, e, r))),
      this.acs_.forEach((i, r) => {
        rr({
          primary: this.value,
          secondary: i.value,
          forward: (s) => e.assembly.toComponents(s)[r],
          backward: (s, o) => {
            const a = e.assembly.toComponents(s);
            return (a[r] = o), e.assembly.fromComponents(a);
          },
        });
      }),
      (this.view = new Ub(t, { textViews: this.acs_.map((i) => i.view) }));
  }
  get textControllers() {
    return this.acs_;
  }
}
class Ob extends Sr {
  get max() {
    return this.controller.valueController.sliderController.props.get('max');
  }
  set max(t) {
    this.controller.valueController.sliderController.props.set('max', t);
  }
  get min() {
    return this.controller.valueController.sliderController.props.get('min');
  }
  set min(t) {
    this.controller.valueController.sliderController.props.set('min', t);
  }
}
function Fb(n, t) {
  const e = [],
    i = Ih(n, t);
  i && e.push(i);
  const r = Uh(n);
  r && e.push(r);
  const s = Ja(n.options);
  return s && e.push(s), new Fr(e);
}
const Bb = Ae({
  id: 'input-number',
  type: 'input',
  accept: (n, t) => {
    if (typeof n != 'number') return null;
    const e = ie(t, (i) =>
      Object.assign(Object.assign({}, Oh(i)), {
        options: i.optional.custom(kr),
        readonly: i.optional.constant(!1),
      })
    );
    return e ? { initialValue: n, params: e } : null;
  },
  binding: {
    reader: (n) => Ph,
    constraint: (n) => Fb(n.params, n.initialValue),
    writer: (n) => zr,
  },
  controller: (n) => {
    const t = n.value,
      e = n.constraint,
      i = e && Is(e, Br);
    if (i)
      return new jn(n.document, {
        props: new It({ options: i.values.value('options') }),
        value: t,
        viewProps: n.viewProps,
      });
    const r = Nh(n.params, t.rawValue),
      s = e && Is(e, Ur);
    return s
      ? new Ns(
          n.document,
          Object.assign(
            Object.assign(
              {},
              Qh(
                Object.assign(Object.assign({}, r), {
                  keyScale: ee(r.keyScale),
                  max: s.values.value('max'),
                  min: s.values.value('min'),
                })
              )
            ),
            { parser: yn, value: t, viewProps: n.viewProps }
          )
        )
      : new Vr(n.document, {
          parser: yn,
          props: It.fromObject(r),
          value: t,
          viewProps: n.viewProps,
        });
  },
  api(n) {
    return typeof n.controller.value.rawValue != 'number'
      ? null
      : n.controller.valueController instanceof Ns
      ? new Ob(n.controller)
      : n.controller.valueController instanceof jn
      ? new $a(n.controller)
      : null;
  },
});
class Gn {
  constructor(t = 0, e = 0) {
    (this.x = t), (this.y = e);
  }
  getComponents() {
    return [this.x, this.y];
  }
  static isObject(t) {
    if (Jt(t)) return !1;
    const e = t.x,
      i = t.y;
    return !(typeof e != 'number' || typeof i != 'number');
  }
  static equals(t, e) {
    return t.x === e.x && t.y === e.y;
  }
  toObject() {
    return { x: this.x, y: this.y };
  }
}
const Eu = {
    toComponents: (n) => n.getComponents(),
    fromComponents: (n) => new Gn(...n),
  },
  Bi = kt('p2d');
class kb {
  constructor(t, e) {
    (this.element = t.createElement('div')),
      this.element.classList.add(Bi()),
      e.viewProps.bindClassModifiers(this.element),
      En(e.expanded, er(this.element, Bi(void 0, 'expanded')));
    const i = t.createElement('div');
    i.classList.add(Bi('h')), this.element.appendChild(i);
    const r = t.createElement('button');
    r.classList.add(Bi('b')),
      r.appendChild(Hs(t, 'p2dpad')),
      e.viewProps.bindDisabled(r),
      i.appendChild(r),
      (this.buttonElement = r);
    const s = t.createElement('div');
    if (
      (s.classList.add(Bi('t')),
      i.appendChild(s),
      (this.textElement = s),
      e.pickerLayout === 'inline')
    ) {
      const o = t.createElement('div');
      o.classList.add(Bi('p')),
        this.element.appendChild(o),
        (this.pickerElement = o);
    } else this.pickerElement = null;
  }
}
const On = kt('p2dp');
class Vb {
  constructor(t, e) {
    (this.onFoldableChange_ = this.onFoldableChange_.bind(this)),
      (this.onPropsChange_ = this.onPropsChange_.bind(this)),
      (this.onValueChange_ = this.onValueChange_.bind(this)),
      (this.props_ = e.props),
      this.props_.emitter.on('change', this.onPropsChange_),
      (this.element = t.createElement('div')),
      this.element.classList.add(On()),
      e.layout === 'popup' && this.element.classList.add(On(void 0, 'p')),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('div');
    i.classList.add(On('p')),
      e.viewProps.bindTabIndex(i),
      this.element.appendChild(i),
      (this.padElement = i);
    const r = t.createElementNS(sn, 'svg');
    r.classList.add(On('g')),
      this.padElement.appendChild(r),
      (this.svgElem_ = r);
    const s = t.createElementNS(sn, 'line');
    s.classList.add(On('ax')),
      s.setAttributeNS(null, 'x1', '0'),
      s.setAttributeNS(null, 'y1', '50%'),
      s.setAttributeNS(null, 'x2', '100%'),
      s.setAttributeNS(null, 'y2', '50%'),
      this.svgElem_.appendChild(s);
    const o = t.createElementNS(sn, 'line');
    o.classList.add(On('ax')),
      o.setAttributeNS(null, 'x1', '50%'),
      o.setAttributeNS(null, 'y1', '0'),
      o.setAttributeNS(null, 'x2', '50%'),
      o.setAttributeNS(null, 'y2', '100%'),
      this.svgElem_.appendChild(o);
    const a = t.createElementNS(sn, 'line');
    a.classList.add(On('l')),
      a.setAttributeNS(null, 'x1', '50%'),
      a.setAttributeNS(null, 'y1', '50%'),
      this.svgElem_.appendChild(a),
      (this.lineElem_ = a);
    const l = t.createElement('div');
    l.classList.add(On('m')),
      this.padElement.appendChild(l),
      (this.markerElem_ = l),
      e.value.emitter.on('change', this.onValueChange_),
      (this.value = e.value),
      this.update_();
  }
  get allFocusableElements() {
    return [this.padElement];
  }
  update_() {
    const [t, e] = this.value.rawValue.getComponents(),
      i = this.props_.get('max'),
      r = qt(t, -i, +i, 0, 100),
      s = qt(e, -i, +i, 0, 100),
      o = this.props_.get('invertsY') ? 100 - s : s;
    this.lineElem_.setAttributeNS(null, 'x2', `${r}%`),
      this.lineElem_.setAttributeNS(null, 'y2', `${o}%`),
      (this.markerElem_.style.left = `${r}%`),
      (this.markerElem_.style.top = `${o}%`);
  }
  onValueChange_() {
    this.update_();
  }
  onPropsChange_() {
    this.update_();
  }
  onFoldableChange_() {
    this.update_();
  }
}
function kc(n, t, e) {
  return [Le(t[0], Cn(n)), Le(t[1], Cr(n)) * (e ? 1 : -1)];
}
class zb {
  constructor(t, e) {
    (this.onPadKeyDown_ = this.onPadKeyDown_.bind(this)),
      (this.onPadKeyUp_ = this.onPadKeyUp_.bind(this)),
      (this.onPointerDown_ = this.onPointerDown_.bind(this)),
      (this.onPointerMove_ = this.onPointerMove_.bind(this)),
      (this.onPointerUp_ = this.onPointerUp_.bind(this)),
      (this.props = e.props),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.view = new Vb(t, {
        layout: e.layout,
        props: this.props,
        value: this.value,
        viewProps: this.viewProps,
      })),
      (this.ptHandler_ = new gi(this.view.padElement)),
      this.ptHandler_.emitter.on('down', this.onPointerDown_),
      this.ptHandler_.emitter.on('move', this.onPointerMove_),
      this.ptHandler_.emitter.on('up', this.onPointerUp_),
      this.view.padElement.addEventListener('keydown', this.onPadKeyDown_),
      this.view.padElement.addEventListener('keyup', this.onPadKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const i = this.props.get('max'),
      r = qt(t.point.x, 0, t.bounds.width, -i, +i),
      s = qt(
        this.props.get('invertsY') ? t.bounds.height - t.point.y : t.point.y,
        0,
        t.bounds.height,
        -i,
        +i
      );
    this.value.setRawValue(new Gn(r, s), e);
  }
  onPointerDown_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !1, last: !1 });
  }
  onPointerMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !1, last: !1 });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: !0, last: !0 });
  }
  onPadKeyDown_(t) {
    Jh(t.key) && t.preventDefault();
    const [e, i] = kc(
      t,
      [this.props.get('xKeyScale'), this.props.get('yKeyScale')],
      this.props.get('invertsY')
    );
    (e === 0 && i === 0) ||
      this.value.setRawValue(
        new Gn(this.value.rawValue.x + e, this.value.rawValue.y + i),
        { forceEmit: !1, last: !1 }
      );
  }
  onPadKeyUp_(t) {
    const [e, i] = kc(
      t,
      [this.props.get('xKeyScale'), this.props.get('yKeyScale')],
      this.props.get('invertsY')
    );
    (e === 0 && i === 0) ||
      this.value.setRawValue(this.value.rawValue, { forceEmit: !0, last: !0 });
  }
}
class Hb {
  constructor(t, e) {
    var i, r;
    (this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this)),
      (this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this)),
      (this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this)),
      (this.onPadButtonClick_ = this.onPadButtonClick_.bind(this)),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.foldable_ = Or.create(e.expanded)),
      (this.popC_ =
        e.pickerLayout === 'popup'
          ? new Kh(t, { viewProps: this.viewProps })
          : null);
    const s = new zb(t, {
      layout: e.pickerLayout,
      props: new It({
        invertsY: ee(e.invertsY),
        max: ee(e.max),
        xKeyScale: e.axes[0].textProps.value('keyScale'),
        yKeyScale: e.axes[1].textProps.value('keyScale'),
      }),
      value: this.value,
      viewProps: this.viewProps,
    });
    s.view.allFocusableElements.forEach((o) => {
      o.addEventListener('blur', this.onPopupChildBlur_),
        o.addEventListener('keydown', this.onPopupChildKeydown_);
    }),
      (this.pickerC_ = s),
      (this.textC_ = new al(t, {
        assembly: Eu,
        axes: e.axes,
        parser: e.parser,
        value: this.value,
        viewProps: this.viewProps,
      })),
      (this.view = new kb(t, {
        expanded: this.foldable_.value('expanded'),
        pickerLayout: e.pickerLayout,
        viewProps: this.viewProps,
      })),
      this.view.textElement.appendChild(this.textC_.view.element),
      (i = this.view.buttonElement) === null ||
        i === void 0 ||
        i.addEventListener('blur', this.onPadButtonBlur_),
      (r = this.view.buttonElement) === null ||
        r === void 0 ||
        r.addEventListener('click', this.onPadButtonClick_),
      this.popC_
        ? (this.view.element.appendChild(this.popC_.view.element),
          this.popC_.view.element.appendChild(this.pickerC_.view.element),
          rr({
            primary: this.foldable_.value('expanded'),
            secondary: this.popC_.shows,
            forward: (o) => o,
            backward: (o, a) => a,
          }))
        : this.view.pickerElement &&
          (this.view.pickerElement.appendChild(this.pickerC_.view.element),
          Ka(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onPadButtonBlur_(t) {
    if (!this.popC_) return;
    const e = this.view.element,
      i = t.relatedTarget;
    (!i || !e.contains(i)) && (this.popC_.shows.rawValue = !1);
  }
  onPadButtonClick_() {
    this.foldable_.set('expanded', !this.foldable_.get('expanded')),
      this.foldable_.get('expanded') &&
        this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(t) {
    if (!this.popC_) return;
    const e = this.popC_.view.element,
      i = Vh(t);
    (i && e.contains(i)) ||
      (i && i === this.view.buttonElement && !Ga(e.ownerDocument)) ||
      (this.popC_.shows.rawValue = !1);
  }
  onPopupChildKeydown_(t) {
    this.popC_
      ? t.key === 'Escape' && (this.popC_.shows.rawValue = !1)
      : this.view.pickerElement &&
        t.key === 'Escape' &&
        this.view.buttonElement.focus();
  }
}
function Gb(n) {
  return Gn.isObject(n) ? new Gn(n.x, n.y) : new Gn();
}
function Wb(n, t) {
  n.writeProperty('x', t.x), n.writeProperty('y', t.y);
}
function Xb(n, t) {
  return new ol({
    assembly: Eu,
    components: [
      wn(Object.assign(Object.assign({}, n), n.x), t.x),
      wn(Object.assign(Object.assign({}, n), n.y), t.y),
    ],
  });
}
function Vc(n, t) {
  var e, i;
  if (!Jt(n.min) || !Jt(n.max))
    return Math.max(
      Math.abs((e = n.min) !== null && e !== void 0 ? e : 0),
      Math.abs((i = n.max) !== null && i !== void 0 ? i : 0)
    );
  const r = Lh(n);
  return Math.max(Math.abs(r) * 10, Math.abs(t) * 10);
}
function jb(n, t) {
  var e, i;
  const r = Vc(pi(n, (e = n.x) !== null && e !== void 0 ? e : {}), t.x),
    s = Vc(pi(n, (i = n.y) !== null && i !== void 0 ? i : {}), t.y);
  return Math.max(r, s);
}
function qb(n) {
  if (!('y' in n)) return !1;
  const t = n.y;
  return t && 'inverted' in t ? !!t.inverted : !1;
}
const Yb = Ae({
  id: 'input-point2d',
  type: 'input',
  accept: (n, t) => {
    if (!Gn.isObject(n)) return null;
    const e = ie(t, (i) =>
      Object.assign(Object.assign({}, Tr(i)), {
        expanded: i.optional.boolean,
        picker: i.optional.custom(eu),
        readonly: i.optional.constant(!1),
        x: i.optional.custom(Vn),
        y: i.optional.object(
          Object.assign(Object.assign({}, Tr(i)), {
            inverted: i.optional.boolean,
          })
        ),
      })
    );
    return e ? { initialValue: n, params: e } : null;
  },
  binding: {
    reader: () => Gb,
    constraint: (n) => Xb(n.params, n.initialValue),
    equals: Gn.equals,
    writer: () => Wb,
  },
  controller: (n) => {
    var t, e;
    const i = n.document,
      r = n.value,
      s = n.constraint,
      o = [n.params.x, n.params.y];
    return new Hb(i, {
      axes: r.rawValue.getComponents().map((a, l) => {
        var c;
        return Ha({
          constraint: s.components[l],
          initialValue: a,
          params: pi(n.params, (c = o[l]) !== null && c !== void 0 ? c : {}),
        });
      }),
      expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : !1,
      invertsY: qb(n.params),
      max: jb(n.params, r.rawValue),
      parser: yn,
      pickerLayout:
        (e = n.params.picker) !== null && e !== void 0 ? e : 'popup',
      value: r,
      viewProps: n.viewProps,
    });
  },
});
class Xi {
  constructor(t = 0, e = 0, i = 0) {
    (this.x = t), (this.y = e), (this.z = i);
  }
  getComponents() {
    return [this.x, this.y, this.z];
  }
  static isObject(t) {
    if (Jt(t)) return !1;
    const e = t.x,
      i = t.y,
      r = t.z;
    return !(
      typeof e != 'number' ||
      typeof i != 'number' ||
      typeof r != 'number'
    );
  }
  static equals(t, e) {
    return t.x === e.x && t.y === e.y && t.z === e.z;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z };
  }
}
const Su = {
  toComponents: (n) => n.getComponents(),
  fromComponents: (n) => new Xi(...n),
};
function Kb(n) {
  return Xi.isObject(n) ? new Xi(n.x, n.y, n.z) : new Xi();
}
function $b(n, t) {
  n.writeProperty('x', t.x),
    n.writeProperty('y', t.y),
    n.writeProperty('z', t.z);
}
function Zb(n, t) {
  return new ol({
    assembly: Su,
    components: [
      wn(Object.assign(Object.assign({}, n), n.x), t.x),
      wn(Object.assign(Object.assign({}, n), n.y), t.y),
      wn(Object.assign(Object.assign({}, n), n.z), t.z),
    ],
  });
}
const Jb = Ae({
  id: 'input-point3d',
  type: 'input',
  accept: (n, t) => {
    if (!Xi.isObject(n)) return null;
    const e = ie(t, (i) =>
      Object.assign(Object.assign({}, Tr(i)), {
        readonly: i.optional.constant(!1),
        x: i.optional.custom(Vn),
        y: i.optional.custom(Vn),
        z: i.optional.custom(Vn),
      })
    );
    return e ? { initialValue: n, params: e } : null;
  },
  binding: {
    reader: (n) => Kb,
    constraint: (n) => Zb(n.params, n.initialValue),
    equals: Xi.equals,
    writer: (n) => $b,
  },
  controller: (n) => {
    const t = n.value,
      e = n.constraint,
      i = [n.params.x, n.params.y, n.params.z];
    return new al(n.document, {
      assembly: Su,
      axes: t.rawValue.getComponents().map((r, s) => {
        var o;
        return Ha({
          constraint: e.components[s],
          initialValue: r,
          params: pi(n.params, (o = i[s]) !== null && o !== void 0 ? o : {}),
        });
      }),
      parser: yn,
      value: t,
      viewProps: n.viewProps,
    });
  },
});
class ji {
  constructor(t = 0, e = 0, i = 0, r = 0) {
    (this.x = t), (this.y = e), (this.z = i), (this.w = r);
  }
  getComponents() {
    return [this.x, this.y, this.z, this.w];
  }
  static isObject(t) {
    if (Jt(t)) return !1;
    const e = t.x,
      i = t.y,
      r = t.z,
      s = t.w;
    return !(
      typeof e != 'number' ||
      typeof i != 'number' ||
      typeof r != 'number' ||
      typeof s != 'number'
    );
  }
  static equals(t, e) {
    return t.x === e.x && t.y === e.y && t.z === e.z && t.w === e.w;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z, w: this.w };
  }
}
const yu = {
  toComponents: (n) => n.getComponents(),
  fromComponents: (n) => new ji(...n),
};
function Qb(n) {
  return ji.isObject(n) ? new ji(n.x, n.y, n.z, n.w) : new ji();
}
function tM(n, t) {
  n.writeProperty('x', t.x),
    n.writeProperty('y', t.y),
    n.writeProperty('z', t.z),
    n.writeProperty('w', t.w);
}
function eM(n, t) {
  return new ol({
    assembly: yu,
    components: [
      wn(Object.assign(Object.assign({}, n), n.x), t.x),
      wn(Object.assign(Object.assign({}, n), n.y), t.y),
      wn(Object.assign(Object.assign({}, n), n.z), t.z),
      wn(Object.assign(Object.assign({}, n), n.w), t.w),
    ],
  });
}
const nM = Ae({
  id: 'input-point4d',
  type: 'input',
  accept: (n, t) => {
    if (!ji.isObject(n)) return null;
    const e = ie(t, (i) =>
      Object.assign(Object.assign({}, Tr(i)), {
        readonly: i.optional.constant(!1),
        w: i.optional.custom(Vn),
        x: i.optional.custom(Vn),
        y: i.optional.custom(Vn),
        z: i.optional.custom(Vn),
      })
    );
    return e ? { initialValue: n, params: e } : null;
  },
  binding: {
    reader: (n) => Qb,
    constraint: (n) => eM(n.params, n.initialValue),
    equals: ji.equals,
    writer: (n) => tM,
  },
  controller: (n) => {
    const t = n.value,
      e = n.constraint,
      i = [n.params.x, n.params.y, n.params.z, n.params.w];
    return new al(n.document, {
      assembly: yu,
      axes: t.rawValue.getComponents().map((r, s) => {
        var o;
        return Ha({
          constraint: e.components[s],
          initialValue: r,
          params: pi(n.params, (o = i[s]) !== null && o !== void 0 ? o : {}),
        });
      }),
      parser: yn,
      value: t,
      viewProps: n.viewProps,
    });
  },
});
function iM(n) {
  const t = [],
    e = Ja(n.options);
  return e && t.push(e), new Fr(t);
}
const rM = Ae({
    id: 'input-string',
    type: 'input',
    accept: (n, t) => {
      if (typeof n != 'string') return null;
      const e = ie(t, (i) => ({
        readonly: i.optional.constant(!1),
        options: i.optional.custom(kr),
      }));
      return e ? { initialValue: n, params: e } : null;
    },
    binding: {
      reader: (n) => Zh,
      constraint: (n) => iM(n.params),
      writer: (n) => zr,
    },
    controller: (n) => {
      const t = n.document,
        e = n.value,
        i = n.constraint,
        r = i && Is(i, Br);
      return r
        ? new jn(t, {
            props: new It({ options: r.values.value('options') }),
            value: e,
            viewProps: n.viewProps,
          })
        : new yr(t, {
            parser: (s) => s,
            props: It.fromObject({ formatter: Ma }),
            value: e,
            viewProps: n.viewProps,
          });
    },
    api(n) {
      return typeof n.controller.value.rawValue != 'string'
        ? null
        : n.controller.valueController instanceof jn
        ? new $a(n.controller)
        : null;
    },
  }),
  Gr = { monitor: { defaultInterval: 200, defaultRows: 3 } },
  zc = kt('mll');
class sM {
  constructor(t, e) {
    (this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
      (this.formatter_ = e.formatter),
      (this.element = t.createElement('div')),
      this.element.classList.add(zc()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('textarea');
    i.classList.add(zc('i')),
      (i.style.height = `calc(var(${tu('containerUnitSize')}) * ${e.rows})`),
      (i.readOnly = !0),
      e.viewProps.bindDisabled(i),
      this.element.appendChild(i),
      (this.textareaElem_ = i),
      e.value.emitter.on('change', this.onValueUpdate_),
      (this.value = e.value),
      this.update_();
  }
  update_() {
    const t = this.textareaElem_,
      e = t.scrollTop === t.scrollHeight - t.clientHeight,
      i = [];
    this.value.rawValue.forEach((r) => {
      r !== void 0 && i.push(this.formatter_(r));
    }),
      (t.textContent = i.join(`
`)),
      e && (t.scrollTop = t.scrollHeight);
  }
  onValueUpdate_() {
    this.update_();
  }
}
class ll {
  constructor(t, e) {
    (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.view = new sM(t, {
        formatter: e.formatter,
        rows: e.rows,
        value: this.value,
        viewProps: this.viewProps,
      }));
  }
}
const Hc = kt('sgl');
class oM {
  constructor(t, e) {
    (this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
      (this.formatter_ = e.formatter),
      (this.element = t.createElement('div')),
      this.element.classList.add(Hc()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('input');
    i.classList.add(Hc('i')),
      (i.readOnly = !0),
      (i.type = 'text'),
      e.viewProps.bindDisabled(i),
      this.element.appendChild(i),
      (this.inputElement = i),
      e.value.emitter.on('change', this.onValueUpdate_),
      (this.value = e.value),
      this.update_();
  }
  update_() {
    const t = this.value.rawValue,
      e = t[t.length - 1];
    this.inputElement.value = e !== void 0 ? this.formatter_(e) : '';
  }
  onValueUpdate_() {
    this.update_();
  }
}
class cl {
  constructor(t, e) {
    (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.view = new oM(t, {
        formatter: e.formatter,
        value: this.value,
        viewProps: this.viewProps,
      }));
  }
}
const aM = Ae({
  id: 'monitor-bool',
  type: 'monitor',
  accept: (n, t) => {
    if (typeof n != 'boolean') return null;
    const e = ie(t, (i) => ({
      readonly: i.required.constant(!0),
      rows: i.optional.number,
    }));
    return e ? { initialValue: n, params: e } : null;
  },
  binding: { reader: (n) => $h },
  controller: (n) => {
    var t;
    return n.value.rawValue.length === 1
      ? new cl(n.document, {
          formatter: Uc,
          value: n.value,
          viewProps: n.viewProps,
        })
      : new ll(n.document, {
          formatter: Uc,
          rows:
            (t = n.params.rows) !== null && t !== void 0
              ? t
              : Gr.monitor.defaultRows,
          value: n.value,
          viewProps: n.viewProps,
        });
  },
});
class lM extends Sr {
  get max() {
    return this.controller.valueController.props.get('max');
  }
  set max(t) {
    this.controller.valueController.props.set('max', t);
  }
  get min() {
    return this.controller.valueController.props.get('min');
  }
  set min(t) {
    this.controller.valueController.props.set('min', t);
  }
}
const Fn = kt('grl');
class cM {
  constructor(t, e) {
    (this.onCursorChange_ = this.onCursorChange_.bind(this)),
      (this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
      (this.element = t.createElement('div')),
      this.element.classList.add(Fn()),
      e.viewProps.bindClassModifiers(this.element),
      (this.formatter_ = e.formatter),
      (this.props_ = e.props),
      (this.cursor_ = e.cursor),
      this.cursor_.emitter.on('change', this.onCursorChange_);
    const i = t.createElementNS(sn, 'svg');
    i.classList.add(Fn('g')),
      (i.style.height = `calc(var(${tu('containerUnitSize')}) * ${e.rows})`),
      this.element.appendChild(i),
      (this.svgElem_ = i);
    const r = t.createElementNS(sn, 'polyline');
    this.svgElem_.appendChild(r), (this.lineElem_ = r);
    const s = t.createElement('div');
    s.classList.add(Fn('t'), kt('tt')()),
      this.element.appendChild(s),
      (this.tooltipElem_ = s),
      e.value.emitter.on('change', this.onValueUpdate_),
      (this.value = e.value),
      this.update_();
  }
  get graphElement() {
    return this.svgElem_;
  }
  update_() {
    const { clientWidth: t, clientHeight: e } = this.element,
      i = this.value.rawValue.length - 1,
      r = this.props_.get('min'),
      s = this.props_.get('max'),
      o = [];
    this.value.rawValue.forEach((d, p) => {
      if (d === void 0) return;
      const m = qt(p, 0, i, 0, t),
        g = qt(d, r, s, e, 0);
      o.push([m, g].join(','));
    }),
      this.lineElem_.setAttributeNS(null, 'points', o.join(' '));
    const a = this.tooltipElem_,
      l = this.value.rawValue[this.cursor_.rawValue];
    if (l === void 0) {
      a.classList.remove(Fn('t', 'a'));
      return;
    }
    const c = qt(this.cursor_.rawValue, 0, i, 0, t),
      h = qt(l, r, s, e, 0);
    (a.style.left = `${c}px`),
      (a.style.top = `${h}px`),
      (a.textContent = `${this.formatter_(l)}`),
      a.classList.contains(Fn('t', 'a')) ||
        (a.classList.add(Fn('t', 'a'), Fn('t', 'in')),
        Ds(a),
        a.classList.remove(Fn('t', 'in')));
  }
  onValueUpdate_() {
    this.update_();
  }
  onCursorChange_() {
    this.update_();
  }
}
class Cu {
  constructor(t, e) {
    if (
      ((this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this)),
      (this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this)),
      (this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this)),
      (this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this)),
      (this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this)),
      (this.props = e.props),
      (this.value = e.value),
      (this.viewProps = e.viewProps),
      (this.cursor_ = ee(-1)),
      (this.view = new cM(t, {
        cursor: this.cursor_,
        formatter: e.formatter,
        rows: e.rows,
        props: this.props,
        value: this.value,
        viewProps: this.viewProps,
      })),
      !Ga(t))
    )
      this.view.element.addEventListener('mousemove', this.onGraphMouseMove_),
        this.view.element.addEventListener(
          'mouseleave',
          this.onGraphMouseLeave_
        );
    else {
      const i = new gi(this.view.element);
      i.emitter.on('down', this.onGraphPointerDown_),
        i.emitter.on('move', this.onGraphPointerMove_),
        i.emitter.on('up', this.onGraphPointerUp_);
    }
  }
  importProps(t) {
    return Ve(
      t,
      null,
      (e) => ({ max: e.required.number, min: e.required.number }),
      (e) => (this.props.set('max', e.max), this.props.set('min', e.min), !0)
    );
  }
  exportProps() {
    return ze(null, { max: this.props.get('max'), min: this.props.get('min') });
  }
  onGraphMouseLeave_() {
    this.cursor_.rawValue = -1;
  }
  onGraphMouseMove_(t) {
    const { clientWidth: e } = this.view.element;
    this.cursor_.rawValue = Math.floor(
      qt(t.offsetX, 0, e, 0, this.value.rawValue.length)
    );
  }
  onGraphPointerDown_(t) {
    this.onGraphPointerMove_(t);
  }
  onGraphPointerMove_(t) {
    if (!t.data.point) {
      this.cursor_.rawValue = -1;
      return;
    }
    this.cursor_.rawValue = Math.floor(
      qt(t.data.point.x, 0, t.data.bounds.width, 0, this.value.rawValue.length)
    );
  }
  onGraphPointerUp_() {
    this.cursor_.rawValue = -1;
  }
}
function wa(n) {
  return Jt(n.format) ? Ue(2) : n.format;
}
function hM(n) {
  var t;
  return n.value.rawValue.length === 1
    ? new cl(n.document, {
        formatter: wa(n.params),
        value: n.value,
        viewProps: n.viewProps,
      })
    : new ll(n.document, {
        formatter: wa(n.params),
        rows:
          (t = n.params.rows) !== null && t !== void 0
            ? t
            : Gr.monitor.defaultRows,
        value: n.value,
        viewProps: n.viewProps,
      });
}
function uM(n) {
  var t, e, i;
  return new Cu(n.document, {
    formatter: wa(n.params),
    rows:
      (t = n.params.rows) !== null && t !== void 0 ? t : Gr.monitor.defaultRows,
    props: It.fromObject({
      max: (e = n.params.max) !== null && e !== void 0 ? e : 100,
      min: (i = n.params.min) !== null && i !== void 0 ? i : 0,
    }),
    value: n.value,
    viewProps: n.viewProps,
  });
}
function Gc(n) {
  return n.view === 'graph';
}
const dM = Ae({
    id: 'monitor-number',
    type: 'monitor',
    accept: (n, t) => {
      if (typeof n != 'number') return null;
      const e = ie(t, (i) => ({
        format: i.optional.function,
        max: i.optional.number,
        min: i.optional.number,
        readonly: i.required.constant(!0),
        rows: i.optional.number,
        view: i.optional.string,
      }));
      return e ? { initialValue: n, params: e } : null;
    },
    binding: { defaultBufferSize: (n) => (Gc(n) ? 64 : 1), reader: (n) => Ph },
    controller: (n) => (Gc(n.params) ? uM(n) : hM(n)),
    api: (n) =>
      n.controller.valueController instanceof Cu ? new lM(n.controller) : null,
  }),
  pM = Ae({
    id: 'monitor-string',
    type: 'monitor',
    accept: (n, t) => {
      if (typeof n != 'string') return null;
      const e = ie(t, (i) => ({
        multiline: i.optional.boolean,
        readonly: i.required.constant(!0),
        rows: i.optional.number,
      }));
      return e ? { initialValue: n, params: e } : null;
    },
    binding: { reader: (n) => Zh },
    controller: (n) => {
      var t;
      const e = n.value;
      return e.rawValue.length > 1 || n.params.multiline
        ? new ll(n.document, {
            formatter: Ma,
            rows:
              (t = n.params.rows) !== null && t !== void 0
                ? t
                : Gr.monitor.defaultRows,
            value: e,
            viewProps: n.viewProps,
          })
        : new cl(n.document, {
            formatter: Ma,
            value: e,
            viewProps: n.viewProps,
          });
    },
  });
class fM {
  constructor() {
    this.map_ = new Map();
  }
  get(t) {
    var e;
    return (e = this.map_.get(t)) !== null && e !== void 0 ? e : null;
  }
  has(t) {
    return this.map_.has(t);
  }
  add(t, e) {
    return (
      this.map_.set(t, e),
      t.viewProps.handleDispose(() => {
        this.map_.delete(t);
      }),
      e
    );
  }
}
class mM {
  constructor(t) {
    (this.target = t.target),
      (this.reader_ = t.reader),
      (this.writer_ = t.writer);
  }
  read() {
    return this.reader_(this.target.read());
  }
  write(t) {
    this.writer_(this.target, t);
  }
  inject(t) {
    this.write(this.reader_(t));
  }
}
function _M(n, t) {
  var e;
  const i = n.accept(t.target.read(), t.params);
  if (Jt(i)) return null;
  const r = {
      target: t.target,
      initialValue: i.initialValue,
      params: i.params,
    },
    s = ie(t.params, (d) => ({
      disabled: d.optional.boolean,
      hidden: d.optional.boolean,
      label: d.optional.string,
      tag: d.optional.string,
    })),
    o = n.binding.reader(r),
    a = n.binding.constraint ? n.binding.constraint(r) : void 0,
    l = new mM({ reader: o, target: t.target, writer: n.binding.writer(r) }),
    c = new Qg(
      ee(o(i.initialValue), { constraint: a, equals: n.binding.equals }),
      l
    ),
    h = n.controller({
      constraint: a,
      document: t.document,
      initialValue: i.initialValue,
      params: i.params,
      value: c,
      viewProps: Tn.create({
        disabled: s == null ? void 0 : s.disabled,
        hidden: s == null ? void 0 : s.hidden,
      }),
    });
  return new f0(t.document, {
    blade: ir(),
    props: It.fromObject({
      label:
        'label' in t.params
          ? (e = s == null ? void 0 : s.label) !== null && e !== void 0
            ? e
            : null
          : t.target.key,
    }),
    tag: s == null ? void 0 : s.tag,
    value: c,
    valueController: h,
  });
}
class vM {
  constructor(t) {
    (this.target = t.target), (this.reader_ = t.reader);
  }
  read() {
    return this.reader_(this.target.read());
  }
}
function gM(n, t) {
  return t === 0 ? new $0() : new Z0(n, t ?? Gr.monitor.defaultInterval);
}
function xM(n, t) {
  var e, i, r;
  const s = n.accept(t.target.read(), t.params);
  if (Jt(s)) return null;
  const o = {
      target: t.target,
      initialValue: s.initialValue,
      params: s.params,
    },
    a = ie(t.params, (p) => ({
      bufferSize: p.optional.number,
      disabled: p.optional.boolean,
      hidden: p.optional.boolean,
      interval: p.optional.number,
      label: p.optional.string,
    })),
    l = n.binding.reader(o),
    c =
      (i =
        (e = a == null ? void 0 : a.bufferSize) !== null && e !== void 0
          ? e
          : n.binding.defaultBufferSize &&
            n.binding.defaultBufferSize(s.params)) !== null && i !== void 0
        ? i
        : 1,
    h = new x0({
      binding: new vM({ reader: l, target: t.target }),
      bufferSize: c,
      ticker: gM(t.document, a == null ? void 0 : a.interval),
    }),
    d = n.controller({
      document: t.document,
      params: s.params,
      value: h,
      viewProps: Tn.create({
        disabled: a == null ? void 0 : a.disabled,
        hidden: a == null ? void 0 : a.hidden,
      }),
    });
  return (
    d.viewProps.bindDisabled(h.ticker),
    d.viewProps.handleDispose(() => {
      h.ticker.dispose();
    }),
    new M0(t.document, {
      blade: ir(),
      props: It.fromObject({
        label:
          'label' in t.params
            ? (r = a == null ? void 0 : a.label) !== null && r !== void 0
              ? r
              : null
            : t.target.key,
      }),
      value: h,
      valueController: d,
    })
  );
}
class bM {
  constructor(t) {
    (this.pluginsMap_ = { blades: [], inputs: [], monitors: [] }),
      (this.apiCache_ = t);
  }
  getAll() {
    return [
      ...this.pluginsMap_.blades,
      ...this.pluginsMap_.inputs,
      ...this.pluginsMap_.monitors,
    ];
  }
  register(t, e) {
    if (!hx(e.core)) throw ae.notCompatible(t, e.id);
    e.type === 'blade'
      ? this.pluginsMap_.blades.unshift(e)
      : e.type === 'input'
      ? this.pluginsMap_.inputs.unshift(e)
      : e.type === 'monitor' && this.pluginsMap_.monitors.unshift(e);
  }
  createInput_(t, e, i) {
    return this.pluginsMap_.inputs.reduce(
      (r, s) => r ?? _M(s, { document: t, target: e, params: i }),
      null
    );
  }
  createMonitor_(t, e, i) {
    return this.pluginsMap_.monitors.reduce(
      (r, s) => r ?? xM(s, { document: t, params: i, target: e }),
      null
    );
  }
  createBinding(t, e, i) {
    const r = e.read();
    if (Jt(r))
      throw new ae({ context: { key: e.key }, type: 'nomatchingcontroller' });
    const s = this.createInput_(t, e, i);
    if (s) return s;
    const o = this.createMonitor_(t, e, i);
    if (o) return o;
    throw new ae({ context: { key: e.key }, type: 'nomatchingcontroller' });
  }
  createBlade(t, e) {
    const i = this.pluginsMap_.blades.reduce(
      (r, s) => r ?? K0(s, { document: t, params: e }),
      null
    );
    if (!i) throw new ae({ type: 'nomatchingview', context: { params: e } });
    return i;
  }
  createInputBindingApi_(t) {
    const e = this.pluginsMap_.inputs.reduce((i, r) => {
      var s, o;
      return (
        i ||
        ((o =
          (s = r.api) === null || s === void 0
            ? void 0
            : s.call(r, { controller: t })) !== null && o !== void 0
          ? o
          : null)
      );
    }, null);
    return this.apiCache_.add(t, e ?? new Sr(t));
  }
  createMonitorBindingApi_(t) {
    const e = this.pluginsMap_.monitors.reduce((i, r) => {
      var s, o;
      return (
        i ||
        ((o =
          (s = r.api) === null || s === void 0
            ? void 0
            : s.call(r, { controller: t })) !== null && o !== void 0
          ? o
          : null)
      );
    }, null);
    return this.apiCache_.add(t, e ?? new Sr(t));
  }
  createBindingApi(t) {
    if (this.apiCache_.has(t)) return this.apiCache_.get(t);
    if (m0(t)) return this.createInputBindingApi_(t);
    if (w0(t)) return this.createMonitorBindingApi_(t);
    throw ae.shouldNeverHappen();
  }
  createApi(t) {
    if (this.apiCache_.has(t)) return this.apiCache_.get(t);
    if (p0(t)) return this.createBindingApi(t);
    const e = this.pluginsMap_.blades.reduce(
      (i, r) => i ?? r.api({ controller: t, pool: this }),
      null
    );
    if (!e) throw ae.shouldNeverHappen();
    return this.apiCache_.add(t, e);
  }
}
const MM = new fM();
function wM() {
  const n = new bM(MM);
  return (
    [Yb, Jb, nM, rM, Bb, Ib, Db, Tb, fx, aM, pM, dM, T0, V0, Yh].forEach(
      (t) => {
        n.register('core', t);
      }
    ),
    n
  );
}
class EM extends vi {
  constructor(t) {
    super(t),
      (this.emitter_ = new fe()),
      this.controller.value.emitter.on('change', (e) => {
        this.emitter_.emit('change', new Nr(this, e.rawValue));
      });
  }
  get label() {
    return this.controller.labelController.props.get('label');
  }
  set label(t) {
    this.controller.labelController.props.set('label', t);
  }
  get options() {
    return this.controller.valueController.props.get('options');
  }
  set options(t) {
    this.controller.valueController.props.set('options', t);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(t) {
    this.controller.value.rawValue = t;
  }
  on(t, e) {
    const i = e.bind(this);
    return (
      this.emitter_.on(
        t,
        (r) => {
          i(r);
        },
        { key: e }
      ),
      this
    );
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
class SM extends vi {}
class yM extends vi {
  constructor(t) {
    super(t),
      (this.emitter_ = new fe()),
      this.controller.value.emitter.on('change', (e) => {
        this.emitter_.emit('change', new Nr(this, e.rawValue));
      });
  }
  get label() {
    return this.controller.labelController.props.get('label');
  }
  set label(t) {
    this.controller.labelController.props.set('label', t);
  }
  get max() {
    return this.controller.valueController.sliderController.props.get('max');
  }
  set max(t) {
    this.controller.valueController.sliderController.props.set('max', t);
  }
  get min() {
    return this.controller.valueController.sliderController.props.get('min');
  }
  set min(t) {
    this.controller.valueController.sliderController.props.set('min', t);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(t) {
    this.controller.value.rawValue = t;
  }
  on(t, e) {
    const i = e.bind(this);
    return (
      this.emitter_.on(
        t,
        (r) => {
          i(r);
        },
        { key: e }
      ),
      this
    );
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
class CM extends vi {
  constructor(t) {
    super(t),
      (this.emitter_ = new fe()),
      this.controller.value.emitter.on('change', (e) => {
        this.emitter_.emit('change', new Nr(this, e.rawValue));
      });
  }
  get label() {
    return this.controller.labelController.props.get('label');
  }
  set label(t) {
    this.controller.labelController.props.set('label', t);
  }
  get formatter() {
    return this.controller.valueController.props.get('formatter');
  }
  set formatter(t) {
    this.controller.valueController.props.set('formatter', t);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(t) {
    this.controller.value.rawValue = t;
  }
  on(t, e) {
    const i = e.bind(this);
    return (
      this.emitter_.on(
        t,
        (r) => {
          i(r);
        },
        { key: e }
      ),
      this
    );
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
const TM = (function () {
  return {
    id: 'list',
    type: 'blade',
    core: nr,
    accept(n) {
      const t = ie(n, (e) => ({
        options: e.required.custom(kr),
        value: e.required.raw,
        view: e.required.constant('list'),
        label: e.optional.string,
      }));
      return t ? { params: t } : null;
    },
    controller(n) {
      const t = new Br(Za(n.params.options)),
        e = ee(n.params.value, { constraint: t }),
        i = new jn(n.document, {
          props: new It({ options: t.values.value('options') }),
          value: e,
          viewProps: n.viewProps,
        });
      return new fi(n.document, {
        blade: n.blade,
        props: It.fromObject({ label: n.params.label }),
        value: e,
        valueController: i,
      });
    },
    api(n) {
      return !(n.controller instanceof fi) ||
        !(n.controller.valueController instanceof jn)
        ? null
        : new EM(n.controller);
    },
  };
})();
class AM extends jh {
  constructor(t, e) {
    super(t, e);
  }
  get element() {
    return this.controller.view.element;
  }
}
class PM extends xa {
  constructor(t, e) {
    super(t, {
      expanded: e.expanded,
      blade: e.blade,
      props: e.props,
      root: !0,
      viewProps: e.viewProps,
    });
  }
}
const Wc = kt('spr');
class RM {
  constructor(t, e) {
    (this.element = t.createElement('div')),
      this.element.classList.add(Wc()),
      e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement('hr');
    i.classList.add(Wc('r')), this.element.appendChild(i);
  }
}
class Xc extends Gs {
  constructor(t, e) {
    super(
      Object.assign(Object.assign({}, e), {
        view: new RM(t, { viewProps: e.viewProps }),
      })
    );
  }
}
const LM = {
    id: 'separator',
    type: 'blade',
    core: nr,
    accept(n) {
      const t = ie(n, (e) => ({ view: e.required.constant('separator') }));
      return t ? { params: t } : null;
    },
    controller(n) {
      return new Xc(n.document, { blade: n.blade, viewProps: n.viewProps });
    },
    api(n) {
      return n.controller instanceof Xc ? new SM(n.controller) : null;
    },
  },
  DM = {
    id: 'slider',
    type: 'blade',
    core: nr,
    accept(n) {
      const t = ie(n, (e) => ({
        max: e.required.number,
        min: e.required.number,
        view: e.required.constant('slider'),
        format: e.optional.function,
        label: e.optional.string,
        value: e.optional.number,
      }));
      return t ? { params: t } : null;
    },
    controller(n) {
      var t, e;
      const i = (t = n.params.value) !== null && t !== void 0 ? t : 0,
        r = new Ur({ max: n.params.max, min: n.params.min }),
        s = ee(i, { constraint: r }),
        o = new Ns(
          n.document,
          Object.assign(
            Object.assign(
              {},
              Qh({
                formatter:
                  (e = n.params.format) !== null && e !== void 0 ? e : Yg,
                keyScale: ee(1),
                max: r.values.value('max'),
                min: r.values.value('min'),
                pointerScale: Dh(n.params, i),
              })
            ),
            { parser: yn, value: s, viewProps: n.viewProps }
          )
        );
      return new fi(n.document, {
        blade: n.blade,
        props: It.fromObject({ label: n.params.label }),
        value: s,
        valueController: o,
      });
    },
    api(n) {
      return !(n.controller instanceof fi) ||
        !(n.controller.valueController instanceof Ns)
        ? null
        : new yM(n.controller);
    },
  },
  IM = (function () {
    return {
      id: 'text',
      type: 'blade',
      core: nr,
      accept(n) {
        const t = ie(n, (e) => ({
          parse: e.required.function,
          value: e.required.raw,
          view: e.required.constant('text'),
          format: e.optional.function,
          label: e.optional.string,
        }));
        return t ? { params: t } : null;
      },
      controller(n) {
        var t;
        const e = ee(n.params.value),
          i = new yr(n.document, {
            parser: n.params.parse,
            props: It.fromObject({
              formatter:
                (t = n.params.format) !== null && t !== void 0
                  ? t
                  : (r) => String(r),
            }),
            value: e,
            viewProps: n.viewProps,
          });
        return new fi(n.document, {
          blade: n.blade,
          props: It.fromObject({ label: n.params.label }),
          value: e,
          valueController: i,
        });
      },
      api(n) {
        return !(n.controller instanceof fi) ||
          !(n.controller.valueController instanceof yr)
          ? null
          : new CM(n.controller);
      },
    };
  })();
function UM(n) {
  const t = n.createElement('div');
  return t.classList.add(kt('dfw')()), n.body && n.body.appendChild(t), t;
}
function NM(n, t, e) {
  if (n.querySelector(`style[data-tp-style=${t}]`)) return;
  const i = n.createElement('style');
  (i.dataset.tpStyle = t), (i.textContent = e), n.head.appendChild(i);
}
class OM extends AM {
  constructor(t) {
    var e, i;
    const r = t ?? {},
      s = (e = r.document) !== null && e !== void 0 ? e : o0(),
      o = wM(),
      a = new PM(s, {
        expanded: r.expanded,
        blade: ir(),
        props: It.fromObject({ title: r.title }),
        viewProps: Tn.create(),
      });
    super(a, o),
      (this.pool_ = o),
      (this.containerElem_ =
        (i = r.container) !== null && i !== void 0 ? i : UM(s)),
      this.containerElem_.appendChild(this.element),
      (this.doc_ = s),
      (this.usesDefaultWrapper_ = !r.container),
      this.setUpDefaultPlugins_();
  }
  get document() {
    if (!this.doc_) throw ae.alreadyDisposed();
    return this.doc_;
  }
  dispose() {
    const t = this.containerElem_;
    if (!t) throw ae.alreadyDisposed();
    if (this.usesDefaultWrapper_) {
      const e = t.parentElement;
      e && e.removeChild(t);
    }
    (this.containerElem_ = null), (this.doc_ = null), super.dispose();
  }
  registerPlugin(t) {
    t.css && NM(this.document, `plugin-${t.id}`, t.css),
      ('plugin' in t ? [t.plugin] : 'plugins' in t ? t.plugins : []).forEach(
        (i) => {
          this.pool_.register(t.id, i);
        }
      );
  }
  setUpDefaultPlugins_() {
    this.registerPlugin({
      id: 'default',
      css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',
      plugins: [TM, LM, DM, Yh, IM],
    });
  }
}
new Xh('4.0.5');
new OM();
const sr = new Wv(),
  or = new Yv(),
  Tu = new qv();
Tu.setPath('./dist/textures/cubeMap/');
const FM = or.load('./textures/2k_sun.jpg'),
  BM = or.load('./dist/textures/2k_mercury.jpg'),
  kM = or.load('./dist/textures/2k_venus_surface.jpg'),
  VM = or.load('./dist/textures/2k_earth_daymap.jpg'),
  zM = or.load('./dist/textures/2k_mars.jpg'),
  HM = or.load('./dist/textures/2k_moon.jpg'),
  GM = Tu.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
sr.background = GM;
const WM = new Ir({ map: BM }),
  XM = new Ir({ map: kM }),
  jM = new Ir({ map: VM }),
  qM = new Ir({ map: zM }),
  YM = new Ir({ map: HM }),
  hl = new Oa(1, 32, 32),
  KM = new Da({ map: FM }),
  Au = new je(hl, KM);
Au.scale.setScalar(5);
sr.add(Au);
const ri = [
    {
      name: 'Mercury',
      radius: 0.5,
      distance: 10,
      speed: 0.01,
      material: WM,
      moons: [],
    },
    {
      name: 'Venus',
      radius: 0.8,
      distance: 15,
      speed: 0.007,
      material: XM,
      moons: [],
    },
    {
      name: 'Earth',
      radius: 1,
      distance: 20,
      speed: 0.005,
      material: jM,
      moons: [{ name: 'Moon', radius: 0.3, distance: 3, speed: 0.015 }],
    },
    {
      name: 'Mars',
      radius: 0.7,
      distance: 25,
      speed: 0.003,
      material: qM,
      moons: [
        { name: 'Phobos', radius: 0.1, distance: 2, speed: 0.02 },
        {
          name: 'Deimos',
          radius: 0.2,
          distance: 3,
          speed: 0.015,
          color: 16777215,
        },
      ],
    },
  ],
  $M = (n) => {
    const t = new je(hl, n.material);
    return t.scale.setScalar(n.radius), (t.position.x = n.distance), t;
  },
  ZM = (n) => {
    const t = new je(hl, YM);
    return t.scale.setScalar(n.radius), (t.position.x = n.distance), t;
  },
  JM = ri.map((n) => {
    const t = $M(n);
    return (
      sr.add(t),
      n.moons.forEach((e) => {
        const i = ZM(e);
        t.add(i);
      }),
      t
    );
  }),
  QM = new Jv(16777215, 0.03);
sr.add(QM);
const tw = new Zv(16777215, 200);
sr.add(tw);
const Qi = new ke(35, window.innerWidth / window.innerHeight, 0.1, 400);
Qi.position.z = 100;
Qi.position.y = 5;
const Pu = document.querySelector('canvas.threejs'),
  Xs = new Gv({ canvas: Pu, antialias: !0 });
Xs.setSize(window.innerWidth, window.innerHeight);
Xs.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const js = new eg(Qi, Pu);
js.enableDamping = !0;
js.maxDistance = 200;
js.minDistance = 20;
window.addEventListener('resize', () => {
  (Qi.aspect = window.innerWidth / window.innerHeight),
    Qi.updateProjectionMatrix(),
    Xs.setSize(window.innerWidth, window.innerHeight);
});
const Ru = () => {
  JM.forEach((n, t) => {
    (n.rotation.y += ri[t].speed),
      (n.position.x = Math.sin(n.rotation.y) * ri[t].distance),
      (n.position.z = Math.cos(n.rotation.y) * ri[t].distance),
      n.children.forEach((e, i) => {
        (e.rotation.y += ri[t].moons[i].speed),
          (e.position.x = Math.sin(e.rotation.y) * ri[t].moons[i].distance),
          (e.position.z = Math.cos(e.rotation.y) * ri[t].moons[i].distance);
      });
  }),
    js.update(),
    Xs.render(sr, Qi),
    window.requestAnimationFrame(Ru);
};
Ru();
