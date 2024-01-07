import path from "path";

const pathEslintFileConfig = path.relative(process.cwd(), ".eslintrc.cjs");

const buildEslintCommand = (filenames) =>
  `yarn eslint  --fix -c ${pathEslintFileConfig}   ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

export default {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
};
