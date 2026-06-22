export default function ImagePopup(props) {
    const { name, link } = props.card;
    
    return (
        <div className="popup__content">
            <img className="popup__content-content-image" src={link} alt={name} />
            <p className="popup__content-image-title">{name}</p>
        </div>
    );
}