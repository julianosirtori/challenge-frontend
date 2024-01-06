const path = require("path");

const pathEslintFileConfig = path.relative(process.cwd(), ".eslintrc.cjs");

const buildEslintCommand = (filenames) =>
  `yarn eslint  --fix -c ${pathEslintFileConfig}   ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
};
