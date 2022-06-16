const Footer = () => {
  return (
    <footer className="footer w-full flex justify-between items-center bg-slate-800 px-4 sm: py-6 relative bottom-0 text-gray-500">
      <div className="sm:flex min-w-[200px] justify-between mx-auto">
        <h2>{new Date().getFullYear()}</h2>
        <p>Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
