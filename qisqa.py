"""Kunlarni qisqa darslarga bo'ladi: har dars <= 6 ta gap (15 ta bo'lsa 5+5+5, 14 ta bo'lsa 5+5+4).
Mavzu, daraja va sahna (t, lv, e, s) o'zgarmaydi. Grammatika kunlari (gramatika.js dagi d) yangi raqamga ko'chadi.
Ishga tushirish:  python3 qisqa.py   (data.js va gramatika.js ni joyida yangilaydi; qayta ishga tushirsa ham xavfsiz: <=6 bo'lsa tegmaydi)"""
import json, math, re, os
HERE = os.path.dirname(os.path.abspath(__file__))
MAXN = 6
dp = os.path.join(HERE, "data.js")
s = open(dp, encoding="utf-8").read()
days = json.loads(s[s.index("=") + 1:].strip().rstrip(";"))
out, last_of = [], {}
for d in days:
    n = len(d["i"])
    k = max(1, math.ceil(n / MAXN))
    b, e = divmod(n, k)
    p = 0
    for j in range(k):
        sz = b + (1 if j < e else 0)
        c = dict(d); c["i"] = d["i"][p:p + sz]; p += sz
        out.append(c)
    last_of[d["d"]] = len(out)          # eski kunning oxirgi bo'lagi (grammatika shundan keyin)
for i, c in enumerate(out, 1):
    c["d"] = i
open(dp, "w", encoding="utf-8").write("window.DAYS=\n" + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ";\n")
gp = os.path.join(HERE, "gramatika.js")
if os.path.exists(gp):
    g = open(gp, encoding="utf-8").read()
    i0 = g.index("=")
    gram = json.loads(g[i0 + 1:].strip().rstrip(";"))
    for t in gram:
        if isinstance(t.get("d"), int) and t["d"] in last_of:
            t["d"] = last_of[t["d"]]
    open(gp, "w", encoding="utf-8").write(g[:i0 + 1] + json.dumps(gram, ensure_ascii=False, separators=(",", ":")) + ";\n")
print(f"{len(days)} kun -> {len(out)} qisqa dars; gap: {sum(len(c['i']) for c in out)}; eng ko'pi {max(len(c['i']) for c in out)}")
