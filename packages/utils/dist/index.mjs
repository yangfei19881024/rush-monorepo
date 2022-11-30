// index.ts
import log from "npmlog";
log.heading = "js-cli";
log.addLevel("success", 2e3, { fg: "green", bold: true });
console.log("utils changed!------>");
export {
  log
};
