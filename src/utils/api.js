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
  async getUserInfo() {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    });
    return this._checkResponse(res);
  }

// Ejemplo de uso de fetch para actualizar la información del usuario en la API
  async setUserInfo({ name, about }) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    });
    return this._checkResponse(res);
  }

// Ejemplo de uso de fetch para actualizar la información del usuario en la API
  async setUserAvatar({ avatar }) {
    const res = await fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    });
    return this._checkResponse(res);
  }

  // Ejemplo de uso de fetch para obtener las tarjetas iniciales desde la API
  async getInitialCards() {
    const res = await fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    });
    return this._checkResponse(res);
  }

  // Ejemplo de uso de fetch para agregar una nueva tarjeta a la API
  async addCard({ name, link }) {
    const res = await fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    });
    return this._checkResponse(res);
  }

  async addLike(cardId) {
    // return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
    const res = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    });
    return this._checkResponse(res);
  }

  async removeLike(cardId) {
    // return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
    const res = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    });
    return this._checkResponse(res);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this.addLike(cardId) : this.removeLike(cardId);
  }

  async deleteCard(cardId) {
    const res = await fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    });
    return this._checkResponse(res);
  }
}

export const api = new Api();