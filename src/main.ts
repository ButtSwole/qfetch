type QRequestInit = Omit<RequestInit, "body" | "method">;
type QRequestParams = Record<string, any>;

const fetch_ = async (
  url: string,
  params?: QRequestParams,
  init?: RequestInit
) => {
  const fullUrl = url + "?" + new URLSearchParams(params);
  const res = await fetch(fullUrl, init);
  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
};

const qfetch = {
  delete: async (
    baseUrl: string,
    params?: QRequestParams,
    init?: QRequestInit
  ) => await fetch_(baseUrl, params, { method: "DELETE", ...init }),

  get: async (baseUrl: string, params?: QRequestParams, init?: QRequestInit) =>
    await fetch_(baseUrl, params, { method: "GET", ...init }),

  head: async (baseUrl: string, params?: QRequestParams, init?: QRequestInit) =>
    await fetch_(baseUrl, params, { method: "HEAD", ...init }),

  options: async (
    baseUrl: string,
    params?: QRequestParams,
    init?: QRequestInit
  ) => await fetch_(baseUrl, params, { method: "OPTIONS", ...init }),

  patch: async (
    baseUrl: string,
    data?: any,
    params?: QRequestParams,
    init?: QRequestInit
  ) =>
    await fetch_(baseUrl, params, {
      body: JSON.stringify(data),
      method: "PATCH",
      ...init,
    }),

  post: async (
    baseUrl: string,
    data?: any,
    params?: QRequestParams,
    init?: QRequestInit
  ) =>
    await fetch_(baseUrl, params, {
      body: JSON.stringify(data),
      method: "POST",
      ...init,
    }),

  put: async (
    baseUrl: string,
    data?: any,
    params?: QRequestParams,
    init?: QRequestInit
  ) =>
    await fetch_(baseUrl, params, {
      body: JSON.stringify(data),
      method: "PUT",
      ...init,
    }),
};

export default qfetch;
