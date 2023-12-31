import "./App.css";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import ModalWithForm from "./ModalWithForm/ModalWithForm.js";
import ItemModal from "./ItemModal/ItemModal.js";
import { useState } from "react";

function App() {
  const weatherTemp = "102";

  return (
    <div className="App">
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm />
      <ItemModal />
    </div>
  );
}

export default App;
