export const OPTIONS = "OPTIONS";

export interface ModuleOptions {
  repositoryUrl: string;
  oAuthToken: string;
}

export const defaultModuleOptions: ModuleOptions = {
  repositoryUrl: "",
  oAuthToken: "",
};
