type QRequestInit = Omit<RequestInit, "body" | "method">;
type QRequestParams = Record<string, string>;

const getFullUrl = (url: string, params?: QRequestParams) =>
  url + "?" + new URLSearchParams(params).toString();

const fetchWrapper = async (
  url: string,
  params?: QRequestParams,
  init?: RequestInit
) => {
  const res = await fetch(getFullUrl(url, params), init);
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
};

const qfetch = {
  delete: async (url: string, params?: QRequestParams, init?: QRequestInit) =>
    await fetchWrapper(url, params, { method: "DELETE", ...init }),

  get: async (url: string, params?: QRequestParams, init?: QRequestInit) =>
    await fetchWrapper(url, params, { method: "GET", ...init }),

  head: async (url: string, params?: QRequestParams, init?: QRequestInit) =>
    await fetchWrapper(url, params, { method: "HEAD", ...init }),

  options: async (url: string, params?: QRequestParams, init?: QRequestInit) =>
    await fetchWrapper(url, params, { method: "OPTIONS", ...init }),

  patch: async (
    url: string,
    params?: QRequestParams,
    body?: BodyInit,
    init?: QRequestInit
  ) => await fetchWrapper(url, params, { body, method: "PATCH", ...init }),

  post: async (
    url: string,
    params?: QRequestParams,
    body?: BodyInit,
    init?: QRequestInit
  ) => await fetchWrapper(url, params, { body, method: "POST", ...init }),

  put: async (
    url: string,
    params?: QRequestParams,
    body?: BodyInit,
    init?: QRequestInit
  ) => await fetchWrapper(url, params, { body, method: "PUT", ...init }),
};

export default qfetch;
