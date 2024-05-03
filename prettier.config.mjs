/** @type {import("prettier").Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
const config = {
  trailingComma: "all",
  tabWidth: 2,
  semi: false,
  printWidth: 120,
  plugins: [
    //
    "@ianvs/prettier-plugin-sort-imports",
  ],
  // @refs: https://github.com/IanVS/prettier-plugin-sort-imports#usage
  importOrder: [
    //
    "^vue",
    // "",
    "<BUILT_IN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "^~",
    "",
    "^\\.\\.",
    "",
    "^\\.",
  ],
}

export default config
