const path = require("path");
const paths = require("./paths");

const libPath = "node_modules/@UI/src/lib/";
const constantsPath = "node_modules/@UI/src/constants/";
const componentsPath = "node_modules/@UI/src/components/";
const utilsPath = "node_modules/@UI/src/utils/";
const stylePath = "node_modules/@UI/src/styles/";
const accountsContainersPath = "src/containers/";
const accountsUtilsPath = "src/utils/";
const accountsContextPath = "src/context/";
const accountsConstantsPath = "src/constants/";
const accountsIconsPath = "src/icons/";

module.exports = {
  alias: {
    Lib: path.resolve(paths.appRoot, libPath),
    Constants: path.resolve(paths.appRoot, constantsPath),
    Components: path.resolve(paths.appRoot, componentsPath),
    Utils: path.resolve(paths.appRoot, utilsPath),
    Styles: path.resolve(paths.appRoot, stylePath),
    AccountsContainers: path.resolve(paths.appRoot, accountsContainersPath),
    AccountsUtils: path.resolve(paths.appRoot, accountsUtilsPath),
    AccountsContext: path.resolve(paths.appRoot, accountsContextPath),
    AccountsConstants: path.resolve(paths.appRoot, accountsConstantsPath),
    AccountsIcons: path.resolve(paths.appRoot, accountsIconsPath)
  }
};
