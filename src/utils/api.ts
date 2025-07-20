interface ApiParams {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  baseUrl?: string;
}

export default async function callApi<ResponseType>(
  path: string,
  { method = "GET", baseUrl = "/api", body }: ApiParams = {}
): Promise<ResponseType> {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return await res.json();
}
