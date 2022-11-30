// index.ts
import { log } from "@y/utils";
var core = () => {
  console.log("core change");
  log.info("test", "Hello world!");
};
core();
var core_default = core;
export {
  core_default as default
};
