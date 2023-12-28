import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__signature">Developed by Blake Cameron</p>
        <p className="footer__date">{currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
