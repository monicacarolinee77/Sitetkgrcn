const url = "https://cdn.databerjalan.com/cdn-cgi/image/width=auto,quality=75,fit=contain,format=auto/assets/images/store/2022-10-14T13:33:13.303Z_LOGO_PNG_1.png";
const outFiles = ["public/favicon.png", "public/icon.png", "public/apple-icon.png", "src/app/favicon.ico", "src/app/icon.png", "src/app/apple-icon.png"];
const res = await fetch(url);
if (!res.ok) throw new Error(`fetch failed ${res.status} ${res.statusText}`);
const buf = Buffer.from(await res.arrayBuffer());
console.log(`downloaded ${buf.length} bytes`);
import fs from "fs";
for (const f of outFiles) {
  fs.writeFileSync(f, buf);
  console.log(`wrote ${f} (${buf.length})`);
}
