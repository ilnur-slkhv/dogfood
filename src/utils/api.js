const onResponce = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getProductList() {
    return fetch(`${this._baseUrl}/products`, {
      headers: this._headers,
    }).then(onResponce);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/v2/group-7/users/me`, {
      headers: this._headers,
    }).then(onResponce);
  }
}

const config = {
  baseUrl: "https://api.react-learning.ru",
  headers: {
    "content-type": "application/json",
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNzU5Yjk4YjAzOGY3NzlkMTYiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NTAsImV4cCI6MTY5OTQ0Nzk1MH0.ktu-7UJDiVujzrxDDOurhHRJLu5uaJ0E-3n0Vt0m3AQ",
  },
};

const api = new Api(config);

export default api;
