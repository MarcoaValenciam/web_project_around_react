import React, { useState } from 'react';

export default function EditProfile(props) {
  const [name, setName] = useState(props.name);
  const [about, setAbout] = useState(props.about);

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value); // Actualiza About cuando cambie la entrada
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.handleUpdateUser({ name, about }); // Llama a la función handleUpdateUser con los nuevos valores
  }

  return (
    <form className="popup__form" name="profile-form" noValidate onSubmit={handleSubmit}>
      <label className="popup__field">
        <input 
          placeholder="Nombre"
          className="popup__input popup__input_type_name"
          id="profile-name"
          maxLength="40"
          minLength="6"
          name="profile-name"
          type="text"
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="profile-name-error"></span>
      </label>

      <label className="popup__field">
        <input 
          placeholder="Acerca de mí"
          className="popup__input popup__input_type_description"
          id="profile-description"
          name="profile-description"
          type="text"
          required
          value={about}
          onChange={handleAboutChange}  
        />
        <span className="popup__error" id="profile-description-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
