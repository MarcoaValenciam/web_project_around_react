import {useState} from 'react';

export default function NewCard(props) {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  
  function handleLinkChange(event) {
    setLink(event.target.value);
  }
  
  function handleAddPlaceSubmit(event) {
    event.preventDefault();
    // Enviamos los datos usando directamente las variables de estado
    props.handleAddPlaceSubmit({
    name: name,
    link: link
    });
  }
  
  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleAddPlaceSubmit}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Titulo"
          required
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="card-name-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Enlace a la imagen"
          required
          type="url"
          value={link}
          onChange={handleLinkChange}
        />
        <span className="popup__error" id="card-link-error"></span>
      </label>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
