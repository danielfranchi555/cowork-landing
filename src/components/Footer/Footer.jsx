import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#1D1E1C] w-full flex flex-col  gap-6 md:flex-row text-white text-center px-10 py-8 rounded-xl mt-40">
      <section className="flex flex-col gap-4 md:w-[50%] md:text-start md:flex md:flex-col md:gap-8 ">
        <h5 className="text-3xl font-bold">COWORK</h5>
        <p className="text-[15px]">
          Join our newsletter to stay up to date on features and releases.
        </p>
        <form
          action=""
          className="flex flex-col items-center gap-4 text-white w-full md:flex-row  "
        >
          <input
            type="text"
            placeholder="Enter your email"
            name=""
            id=""
            className="outline-none bg-transparent border-b py-2 w-full md:w-[300px] text-[13px] md:text-[15px]"
          />
          <button className=" py-2 px-6 bg-white rounded-full text-black max-w-max font-bold text-[14px]">
            Suscribe
          </button>
        </form>
        <p className="text-[13px] ">
          By subscribing you agree to with our Privacy Policy and provide
          consent to receive updates from our company.
        </p>
      </section>
      <section className=" flex flex-col gap-10 md:w-[50%] md:flex md:flex-row md:justify-between">
        <div className=" flex flex-col gap-4">
          <span className="font-bold text-[13px] ">EXPLORE MORE</span>
          <ul className="flex flex-col gap-2 text-[13px] md:text-[14px] md:text-start md:h-full md:justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Events</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-bold text-[13px] ">STAY CONNECTED </span>
          <ul className="flex flex-col gap-2 text-[13px] md:text-[14px] md:text-start  md:h-full md:justify-between">
            <li>Suscribe</li>
            <li>Member Stories </li>
            <li>Locations</li>
            <li>Write for us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-[13px] ">FOLLOW US</span>
          <ul className="flex flex-col gap-2 text-[13px] md:text-[14px] md:text-start  md:h-full md:justify-between">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pricing</li>
            <li>X</li>
            <li>Linkedin</li>
            <li>Youtube</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
