import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const dir = "public/brand";
const KEEP = new Set(["IHDR", "PLTE", "tRNS", "IDAT", "IEND"]);

function stripPng(buf) {
  const out = [buf.subarray(0, 8)];
  let i = 8;
  while (i < buf.length) {
    const len = buf.readUInt32BE(i);
    const type = buf.toString("ascii", i + 4, i + 8);
    const end = i + 12 + len;
    if (KEEP.has(type)) out.push(buf.subarray(i, end));
    i = end;
  }
  return Buffer.concat(out);
}

const stripSvg = (s) =>
  s.replace(/<metadata>[\s\S]*?<\/metadata>/g, "").replace(/\s+xmlns:c2pa="[^"]*"/g, "");

const files = [...readdirSync(dir).map((f) => join(dir, f)), "public/favicon.svg"];
for (const f of files) {
  const before = readFileSync(f);
  const after = f.endsWith(".png")
    ? stripPng(before)
    : Buffer.from(stripSvg(before.toString("utf8")), "utf8");
  if (after.length !== before.length) {
    writeFileSync(f, after);
    console.log(f, before.length, "->", after.length);
  }
}
