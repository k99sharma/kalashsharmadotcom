const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <div className="footer text-xs text-neutral-500">
      {`© ${year} Kalash Sharma · Built with curiosity, shipped with care.`}
    </div>
  );
};

export default Footer;
