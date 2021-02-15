// Module boilerplate for future reference.
// The idea is to export this servermiddleware as a module
// that will register a servermiddleware

// Types
import { Module } from "@nuxt/types";

// Local
import { createContentApiServer } from "./server";
import { ModuleOptions, defaultModuleOptions } from "./options";

const contentApiModule: Module<ModuleOptions> = function (moduleOptions) {
  // Merge default options with user options
  const options: ModuleOptions = { ...defaultModuleOptions, ...moduleOptions };

  // Create a contentApiServer with the given options
  const contentApiServer = createContentApiServer(options);

  // Register the server middleware
  this.nuxt.moduleContainer.addServerMiddleware(contentApiServer);
};

export default contentApiModule;

// REQUIRED if publishing the module as npm package
import meta from "../package.json";
export { meta };
