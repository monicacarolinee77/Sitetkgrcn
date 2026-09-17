import fs from "fs";
import https from "https";
const url = "https://cdn.databerjalan.com/cdn-cgi/image/width=auto,quality=75,fit=contain,format=auto/assets/images/store/2022-10-14T13:33:13.303Z_LOGO_PNG_1.png";
const dests = ["public/favicon.png","public/icon.png","public/apple-icon.png","src/app/favicon.ico","src/app/icon.png","src/app/apple-icon.png"];
function dl(u) {
  return new Promise((resolve, reject) => {
    https.get(u, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log("redirect", res.headers.location);
        dl(res.headers.location).then(resolve, reject);
        return;
      }
      if (res.statusCode !== 200) { reject(new Error("status "+res.statusCode)); return; }
      const chunks=[];
      res.on("data", c=>chunks.push(c));
      res.on("end", ()=>resolve(Buffer.concat(chunks)));
    }).on("error", reject);
  });
}
try {
  const buf = await dl(url);
  console.log("downloaded", buf.length, "bytes, png?", buf.slice(0,8).toString("hex"));
  for (const d of dests) {
    fs.mkdirSync(d.split("/").slice(0,-1).join("/") || ".", { recursive: true });
    fs.writeFileSync(d, buf);
    console.log("wrote", d);
  }
  fs.writeFileSync("fetch-logo-result.txt", `ok ${buf.length}\n`+dests.join("\n"));
} catch(e) {
  console.error(e);
  fs.writeFileSync("fetch-logo-result.txt", "error: "+String(e.stack||e));
}
