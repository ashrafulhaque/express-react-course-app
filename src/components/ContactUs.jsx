import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="bg-blue-500 py-5">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div>
            <img
              src="./contactus.png"
              className="max-h-[400px] bg-white mx-auto md:mt-8 border-4 border-gray-300 rounded-full"
              alt="Get in touch image"
            />
          </div>
          <div className="mx-auto px-10 my-8 min-w-full">
            <h2 className="font-play text-5xl py-6 font-bold">
              Get in <span className="text-white">Touch</span>
            </h2>
            <div className="flex gap-2 pt-3">
              <label className="form-control w-[50%]">
                <div className="label">
                  <span className="label-text text-white">FIRSTNAME</span>
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-[50%]">
                <div className="label">
                  <span className="label-text text-white">LASTNAME</span>
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">EMAIL</span>
              </div>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-white">MESSEGE</span>
              </div>
              <textarea
                placeholder="Messege"
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </label>

            <button className="btn btn-warning w-full mt-4">
              Send Messege
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
