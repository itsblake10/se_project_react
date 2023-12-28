import "./ModalWithForm.css";

const ModalWithForm = () => {
  return (
    <div className="add-garment__modal">
      <div className="add-garment__modal-container">
        <button className="add-garment__modal-close-button"></button>
        <p className="add-garment__modal-title">New garment</p>
        <form className="add-garment__modal-form">
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={FormData.name}
              //   onChange={handleInputChange}
              required
            ></input>
            <label>Image</label>
            <input
              type="text"
              id="image"
              name="image"
              value={FormData.link}
              //   onChange={handleInputChange}
              required
            ></input>
          </fieldset>
          <fieldset>
            <label>Select the weather type:</label>
            <input type="radio"></input>
          </fieldset>
          <button className="add-garment__modal-add-button">Add garment</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
