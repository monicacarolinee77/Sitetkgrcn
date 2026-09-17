const url = "https://cdn.databerjalan.com/cdn-cgi/image/width=auto,quality=75,fit=contain,format=auto/assets/images/store/2022-10-14T13:33:13.303Z_LOGO_PNG_1.png";
const dests = ["public/favicon.png","public/icon.png","public/apple-icon.png","src/app/favicon.ico","src/app/icon.png","src/app/apple-icon.png"];
const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
console.log("status", res.status, res.headers.get("content-type"));
if (!res.ok) throw new Error("fetch failed "+res.status);
const buf = Buffer.from(await res.arrayBuffer());
console.log("downloaded", buf.length);
import fs from "fs";
for (const d of dests) {
  fs.mkdirSync(d.split("/").slice(0,-1).join("/")||".", {recursive:true});
  fs.writeFileSync(d, buf);
  console.log("wrote", d);
}
fs.writeFileSync("fetch2-result.txt", `ok ${buf.length}\n`+dests.join("\n"));
