import {useRef} from 'react';

export default function EditAvatar(props) {
  const avatarInputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const avatarLink = avatarInputRef.current.value;
    props.handleUpdateAvatar({ avatar: avatarLink });
  }

  return (
    <form
      className="popup__form" name="avatar-form" noValidate onSubmit={handleSubmit}>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="avatar-link"
          name="avatar"
          placeholder="Enlace a la imagen"
          required
          type="url"
          ref={avatarInputRef}
        />
        <span className="popup__error" id="avatar-link-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
 );
}

