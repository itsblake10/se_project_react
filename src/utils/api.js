const baseUrl = "http://localhost:3001";

const _checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

/* ----------------------------------- GET ---------------------------------- */

export const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => {
    return _checkResponse(res);
  });
};

/* ---------------------------------- POST ---------------------------------- */

export const addItem = (name, imageUrl, weather) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  })
    .then((res) => _checkResponse(res))
    .then((data) => {
      return data;
    });
};

/* ---------------------------------- DELTE --------------------------------- */

export const deleteItem = (itemId) => {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => {
    return _checkResponse(res);
  });
};
