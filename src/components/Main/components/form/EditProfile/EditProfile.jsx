export default function EditProfile(props) {
  const { name, activity } = props;

  return (
    <form className="popup__form" name="profile-form" noValidate>
      <label className="popup__field">
        <input 
          placeholder="Nombre"
          className="popup__input popup__input_type_name"
          id="profile-name"
          maxLength="40"
          minLength=""
          name="profile-name"
          type="text"
          required
          value={name}
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
          value={activity}
        />
        <span className="popup__error" id="profile-description-error"></span>
      </label>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
