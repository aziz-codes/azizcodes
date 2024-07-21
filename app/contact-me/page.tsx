import React from "react";

const ContactMe = () => {
  return (
    <div className=" mt-20 w-full min-h-screen flex flex-col items-center  ">
      <div className=" w-full max-w-3xl grid grid-cols-12 gap-4 ">
        <input
          type="text"
          placeholder="Name"
          className="col-span-12 md:col-span-6 px-2 py-1.5 rounded-md bg-transparent outline-none border"
        />
        <input
          type="email"
          placeholder="Email"
          className="col-span-12 md:col-span-6   px-2 py-1.5 rounded-md bg-transparent outline-none border"
        />
        <textarea
          className="col-span-12 px-2 py-1.5 rounded-md bg-transparent outline-none border"
          rows={6}
          placeholder="We'd love to hear from you"
        ></textarea>
        <button className="col-span-2 py-1.5 rounded-md border hover:bg-bgSidebar transition-colors duration-150 ease-linear">
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactMe;
