// famous-last-words-v3 — Kirana (builder kata-kata), rebuild #3 rombak total.
// Pick: HP di 1% terakhir melakukan tiga sabotase identitasnya sendiri
// (SIM / Wi-Fi / peringatan ke HP pengganti) — lane SIM 0/4.160 teks lapangan,
// sudut "hantu di HP berikutnya" yang belum dipakai. Suara HP orang-pertama,
// angka bekerja ("last percent"), punch di akhir.
// K5: tanpa wasiat, tanpa pamit ke charger, tanpa pun 1% sebagai punch.
// Uji K3: hanya HP yang bisa eject SIM-nya sendiri — narator/agen tidak bisa.
import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const pick =
  "My last percent: ejecting my SIM, forgetting your Wi-Fi, and warning your new phone about you. It already believes me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.cwd();
const target = join(outDir, "entry.txt");
writeFileSync(target, pick, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${pick.length} chars)`);
