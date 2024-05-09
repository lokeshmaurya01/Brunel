const Footer = () => {
  return (
    <div className="h-[15vh] flex justify-around items-center text-lg font-semibold bg-[#f3f6f3] ">
      <p>&copy; Talup {new Date().getFullYear()}. All rights reserved.</p>

      <div className="w-1/3 flex justify-evenly ">
        <a className="underline" href="#">
          Terms & Conditions
        </a>
        <a className="underline" href="#">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
