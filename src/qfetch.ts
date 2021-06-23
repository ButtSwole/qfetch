import {
  fetchWithBody,
  fetchWithParams,
  ReqArgsWithBody,
  ReqArgsWithParams
} from './utils';

const qfetch = {
  delete: async (...args: ReqArgsWithParams) => (
    await fetchWithParams("DELETE", ...args)
  ),

  get: async (...args: ReqArgsWithParams) => (
    await fetchWithParams("GET", ...args)
  ),

  head: async (...args: ReqArgsWithParams) => (
    await fetchWithParams("HEAD", ...args)
  ),

  options: async (...args: ReqArgsWithParams) => (
    await fetchWithParams("OPTIONS", ...args)
  ),

  patch: async (...args: ReqArgsWithBody) => (
    await fetchWithBody("PATCH", ...args)
  ),

  post: async (...args: ReqArgsWithBody) => (
    await fetchWithBody("POST", ...args)
  ),

  put: async (...args: ReqArgsWithBody) => (
    await fetchWithBody("PUT", ...args)
  ),
};

export default qfetch;


___i __________________________######____
_______________________________####______
_______________________________##________
_____________________________######_____
_____________ _______________#######_____
____####__________________#########___
___######__ ______________###_######___
#########_______________###__######__
_#######____ ___________###___######___
_______#################____######__
_______####### ###################__
________################____#####____
_________##_______ ____##_____####______
_________##___________##_____#########__ _
_______###__________###______#########__ _
