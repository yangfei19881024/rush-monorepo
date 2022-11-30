// index.ts
import { log } from "@y/utils";
var core = () => {
  console.log("core change");
  console.log("core change again!!!");
  log.info("test", "Hello world!");
};
core();
var core_default = core;
export {
  core_default as default
};
