export default class Api {
  constructor() {
    this._baseUrl = "https://around-api.es.tripleten-services.com/v1";
    this._headers = {
        authorization: "0ee18665-8580-459d-bbbc-803e99e50944",
        "Content-Type": "application/json"
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // Ejemplo de uso de fetch para obtener la información del usuario desde la API
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

// Ejemplo de uso de fetch para actualizar la información del usuario en la API
  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(this._checkResponse);
  }

// Ejemplo de uso de fetch para actualizar la información del usuario en la API
  setUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this._checkResponse);
  }

  // Ejemplo de uso de fetch para obtener las tarjetas iniciales desde la API
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  // Ejemplo de uso de fetch para agregar una nueva tarjeta a la API
  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(this._checkResponse);
  }

  addLike(cardId) {
    // return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  removeLike(cardId) {
    // return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse);
  }
}

export const api = new Api();