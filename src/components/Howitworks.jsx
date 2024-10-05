import React from "react";

const Howitworks = () => {
  return (
    <div>
      <section className="bg-neutral-200 pb-10">
        <h2 className="font-play text-5xl pt-8 pb-6 text-center font-bold">
          How It <span className="text-blue-800">Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-around items-center mx-10 gap-10 py-6">
          <div class="card bg-base-100 shadow-xl rounded-none">
            <div class="card-body">
              <p className="text-gray-400 font-semibold">Step 1</p>
              <h2 class="card-title text-accent">Registar</h2>

              <ul className="steps steps-vertical text-[12px] ">
                <li className="step text-left">
                  Click the Register button on the navbar.
                </li>
                <li className="step text-left">
                  Provide your personal information.
                </li>
                <li className="step text-left">
                  Click on signup button to finish.
                </li>
              </ul>

              <div class="card-actions justify-end">
                <button class="btn btn-error btn-outline">Do IT Now</button>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl rounded-none py-10">
            <div class="card-body">
              <p className="text-gray-400 font-semibold">Step 2</p>
              <h2 class="card-title text-info">Login</h2>
              <ul className="steps steps-vertical text-[12px] ">
                <li className="step text-left">
                  Click the Login button on the navbar.
                </li>
                <li className="step text-left">
                  Enter your registered email and password.
                </li>
                <li className="step text-left">
                  You can log in using Google, Github too.
                </li>
              </ul>
              <div class="card-actions justify-end">
                <button class="btn btn-error btn-outline">Do IT Now</button>
              </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl rounded-none">
            <div class="card-body">
              <p className="text-gray-400 font-semibold">Step 3</p>
              <h2 class="card-title text-warning">Products</h2>
              <ul className="steps steps-vertical text-[12px] ">
                <li className="step text-left">
                  Explore courses in "Products" section.
                </li>
                <li className="step text-left">
                  Browse course title, author, price etc.
                </li>
                <li className="step text-left">
                  Click on view more for details.
                </li>
              </ul>
              <div class="card-actions justify-end">
                <button class="btn btn-error btn-outline">Do IT Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Howitworks;
