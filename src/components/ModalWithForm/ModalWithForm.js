import "./ModalWithForm.css";

const ModalWithForm = ({
  title,
  children,
  onClose,
  buttonText,
  name,
  onSubmit,
  buttonTwoText,
  onButtonTwoSubmit,
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
          <div className="modal__buttons">
            <button className="modal__submit-button" type="submit">
              {buttonText}
            </button>
            <button
              className="modal__button-two"
              onClick={onButtonTwoSubmit}
              type="button"
            >
              {buttonTwoText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
