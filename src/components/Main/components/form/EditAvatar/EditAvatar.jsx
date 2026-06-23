export default function EditAvatar(props) {
  const { link } = props;

  return (
    <form
      className="popup__form" name="avatar-form" noValidate>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="avatar-link"
          name="avatar"
          placeholder="Enlace a la imagen"
          required
          type="url"
          value={link}
        />
        <span className="popup__error" id="avatar-link-error"></span>
      </label>
      {/* <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
        />
        <span className="popup__error" id="card-link-error"></span>
      </label> */}
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
 );
}

