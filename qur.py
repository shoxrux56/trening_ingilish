"""Ingliz Trener data.js ni quradi.
Rus Trener'idagi (../trener/data.js) kun va jumla tartibiga ingliz jumlalarini qo'yadi.
Tarjima fayllari: en_<birinchi_jumla_raqami>.txt  (har qatorda bitta ingliz jumla, rus tartibida).
Faqat HAMMA jumlasi tarjima qilingan kunlar data.js ga kiradi.
Ishga tushirish:  python3 qur.py
"""
import glob, json, os, re
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "trener", "data.js")
s = open(SRC, encoding="utf-8").read()
days = json.loads(s[s.index("=") + 1:].strip().rstrip(";"))
order = [it[0] for d in days for it in d["i"]]
pos = {n: i for i, n in enumerate(order)}
en = {}
for f in sorted(glob.glob(os.path.join(HERE, "en_*.txt"))):
    start = int(re.search(r"en_(\d+)\.txt$", f).group(1))
    lines = [l.strip() for l in open(f, encoding="utf-8") if l.strip()]
    for k, t in enumerate(lines):
        en[order[pos[start] + k]] = t
out = []
for d in days:
    if all(it[0] in en for it in d["i"]):
        d2 = dict(d)
        d2["i"] = [[it[0], en[it[0]], it[2], it[3]] for it in d["i"]]
        out.append(d2)
open(os.path.join(HERE, "data.js"), "w", encoding="utf-8").write("window.DAYS=\n" + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ";\n")
print(f"{len(out)} kun, {sum(len(d['i']) for d in out)} jumla (jami {len(days)} kun, {len(order)} jumla)")
