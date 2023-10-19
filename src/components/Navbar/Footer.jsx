import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <h3 className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-300 ">
            Design By <span className=" italic">Oake Kywe Phyo Han</span>
          </h3>
          <p className="text-gray-500 text-xs">Zote By Focus</p>
        </div>

        <div>
          <h3 className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-400">
            Source By <span className=" italic">Sann Lynn Htun</span>
          </h3>
          <p className="text-gray-500 text-xs">ACE Data Systems</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
