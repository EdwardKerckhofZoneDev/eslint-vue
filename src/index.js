#!/usr/bin/env node
const path = require("path");
const { writeFile } = require("fs").promises;

(async () => {
  const eslintrc = path.join(process.cwd(), ".eslintrc.json");

  const config = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "plugin:vue/vue3-recommended",
      "eslint:recommended",
      "prettier",
      "prettier/vue",
      "@vue/typescript",
    ],
    plugins: ["vue"],
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
  };

  await writeFile(eslintrc, JSON.stringify(config, null, 2));

  console.log(".eslintrc.json successfully created");
})();
