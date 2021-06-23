type ReqArgsWithParams = [
  baseUrl: string,
  params?: Record<string, any>,
  init?: Omit<RequestInit, "body" | "method">
];

type ReqArgsWithBody = [
  url: string,
  body?: any,
  init?: Omit<RequestInit, "body" | "method">
];

const fetchWithParams = async (method: string, ...args: ReqArgsWithParams) => {
  const [baseUrl, params, init] = args;
  const fullUrl = baseUrl + "?" + new URLSearchParams(params);
  const res = await fetch(fullUrl, { method, ...init });
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
};

const fetchWithBody = async (method: string, ...args: ReqArgsWithBody) => {
  const [url, body, init] = args;
  const res = await fetch(url, { body, method, ...init });
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
};

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
