/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS Node.js launcher. */
const { execFileSync, spawn } = require("node:child_process");
const path = require("node:path");

// Respect an existing Windows proxy when no explicit environment proxy is set.
// No proxy is installed or enabled by this launcher.
const env = { ...process.env };
if (process.platform === "win32" && !env.HTTPS_PROXY && !env.https_proxy && !env.HTTP_PROXY && !env.http_proxy) {
  try {
    const settings = JSON.parse(execFileSync("powershell.exe", [
      "-NoProfile", "-NonInteractive", "-Command",
      "$p = Get-ItemProperty 'HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings'; @{ enabled = ($p.ProxyEnable -eq 1); server = $p.ProxyServer } | ConvertTo-Json -Compress",
    ], { encoding: "utf8", windowsHide: true, stdio: ["ignore", "pipe", "ignore"] }));
    if (settings.enabled && settings.server) {
      const server = settings.server.split(";").find(value => value.startsWith("https=")) || settings.server.split(";").find(value => value.startsWith("http=")) || settings.server.split(";")[0];
      const address = server.replace(/^https?=/, "");
      env.HTTPS_PROXY = /^[a-z]+:\/\//i.test(address) ? address : `http://${address}`;
      env.HTTP_PROXY = env.HTTPS_PROXY;
    }
  } catch {
    console.warn("Could not read Windows proxy settings. Using environment network settings.");
  }
}
if (env.HTTPS_PROXY || env.https_proxy || env.HTTP_PROXY || env.http_proxy) {
  env.NODE_USE_ENV_PROXY = "1";
  env.NO_PROXY = [env.NO_PROXY || env.no_proxy, "localhost", "127.0.0.1", "::1"].filter(Boolean).join(",");
  console.log("Using the configured proxy for external requests.");
}
const child = spawn(process.execPath, [require.resolve("next/dist/bin/next"), ...process.argv.slice(2)], {
  cwd: path.resolve(__dirname, ".."), env, stdio: "inherit", windowsHide: true,
});
child.on("error", () => { console.error("Could not start Next.js."); process.exitCode = 1; });
child.on("exit", code => { process.exitCode = code ?? 1; });
