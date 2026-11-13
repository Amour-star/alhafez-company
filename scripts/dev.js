const { spawn, spawnSync } = require("child_process");

const tailwindArgs = [
  "@tailwindcss/cli",
  "-i",
  "./src/styles/tailwind.css",
  "-o",
  "./src/index.css",
];

// Perform an initial synchronous build so src/index.css is ready before CRA starts
const initialBuild = spawnSync("npx", tailwindArgs, {
  stdio: "inherit",
  shell: true,
});

if (initialBuild.status !== 0) {
  process.exit(initialBuild.status || 1);
}

const cssWatcher = spawn("npx", [...tailwindArgs, "--watch"], {
  stdio: "inherit",
  shell: true,
});

const craServer = spawn("npx", ["react-scripts", "start"], {
  stdio: "inherit",
  shell: true,
});

const shutdown = (code) => {
  if (!cssWatcher.killed) cssWatcher.kill();
  if (!craServer.killed) craServer.kill();
  process.exit(code ?? 0);
};

craServer.on("close", shutdown);
process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));
