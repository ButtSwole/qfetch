export type ReqArgsWithParams = [
  baseUrl: string,
  params?: Record<string, any>,
  init?: Omit<RequestInit, "body" | "method">
];

export type ReqArgsWithBody = [
  url: string,
  body?: any,
  init?: Omit<RequestInit, "body" | "method">
];

export const fetchWithParams = async (
  method: string,
  ...args: ReqArgsWithParams
) => {
  const [baseUrl, params, init] = args;
  const fullUrl = baseUrl + "?" + new URLSearchParams(params);
  const res = await fetch(fullUrl, { method, ...init });
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
};

export const fetchWithBody = async (
  method: string,
  ...args: ReqArgsWithBody
) => {
  const [url, body, init] = args;
  const res = await fetch(url, { body, method, ...init });
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
};
