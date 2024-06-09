const baseUrl = "http://localhost:3001";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

/* -------------------------------------------------------------------------- */
/*                                    ITEMS                                   */
/* -------------------------------------------------------------------------- */

/* ----------------------------------- GET ITEMS ---------------------------------- */
export const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

/* ---------------------------------- ADD ITEM ---------------------------------- */
export const addItem = (name, imageUrl, weather, token) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
  })
    .then((res) => checkResponse(res))
    .then((data) => {
      return data;
    });
};

/* ---------------------------------- DELETE ITEM --------------------------------- */
export const deleteItem = (itemId, token) => {
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

/* -------------------------------------------------------------------------- */
/*                                    USERS                                   */
/* -------------------------------------------------------------------------- */

/* ---------------------------------- ADD USER ---------------------------------- */
// export const addUser = (email, password, name, avatarUrl) => {
//   return fetch(`${baseUrl}/signup`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password,
//       name: name,
//       avatarUrl: avatarUrl,
//     }),
//   })
//     .then((res) => checkResponse(res))
//     .then((data) => {
//       return data;
//     });
// };

/* ------------------------------ LOG USER IN ------------------------------ */
// export const loginUser = (email, password) => {
//   return fetch(`${baseUrl}/signin`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password,
//     }),
//   })
//     .then((res) => checkResponse(res))
//     .then((data) => {
//       localStorage.setItem("jwt", data.token);
//       return data;
//     });
// };
