export default function fetcher(url: string, data = undefined) {
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log(res);
      if (!res.ok) throw new Error(res.statusText);

      if (res.status > 399 && res.status < 200) {
        throw new Error();
      }
      return res.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
}
