import fs from "fs";
const src = "c:\\Users\\Administrator\\AppData\\Roaming\\Code\\User\\workspaceStorage\\9110e051415e805fcf2a51a2a9e2f3e4\\GitHub.copilot-chat\\chat-session-resources\\58b204d5-86f4-4733-8af4-e58c23f45fc6\\call_01a0a46881ff7480810eb4999188ccc1__vscode-1789460537297\\content.txt";
let raw = fs.readFileSync(src, "utf8");
// raw is like: Result: "data:image/png;base64,...."
let m = raw.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);
if (!m) { console.error("no match", raw.slice(0,500)); process.exit(1); }
const b64 = m[1];
const buf = Buffer.from(b64, "base64");
console.log("decoded", buf.length, "bytes");
const dests = ["public/favicon.png","public/icon.png","public/apple-icon.png","src/app/favicon.ico","src/app/icon.png","src/app/apple-icon.png"];
for (const d of dests) {
  fs.mkdirSync(d.split("/").slice(0,-1).join("/") || ".", {recursive:true});
  fs.writeFileSync(d, buf);
  console.log("wrote", d, buf.length);
}
fs.writeFileSync("write-favicon-result.txt", `ok ${buf.length}\n`+dests.join("\n"));
