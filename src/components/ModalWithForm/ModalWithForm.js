import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  children,
  onClose,
  buttonText,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <p className="modal__title">{title}</p>
        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
