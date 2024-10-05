import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer justify-around bg-neutral text-neutral-content p-6">
        <div>
          <h6 className="footer-title">Address</h6>
          <p>
            <i className="fa-solid fa-location-dot"></i> Nilkhet, Mirpur 6,
            Dhaka-1215
          </p>
          <p>
            <i className="fa-solid fa-earth-asia"></i> Dhaka, Bangladesh
          </p>
          <div className="flex items-center gap-3 mt-3">
            <a href="#">
              <img
                className="max-w-6"
                src="./twitter.png"
                alt="Icon of Twitter"
              />
            </a>
            <a href="#">
              <img
                className="max-w-6"
                src="./instagram.png"
                alt="Icon of Instagram"
              />
            </a>
            <a href="#">
              <img
                className="max-w-6"
                src="./facebook.png"
                alt="Icon of Facebook"
              />
            </a>
            <a href="#">
              <img
                className="max-w-6"
                src="./linkedin.png"
                alt="Icon of Linkedin"
              />
            </a>
          </div>
        </div>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Linkedin</a>
        </nav>
        <div>
          <h6 className="footer-title">Contact</h6>
          <p>
            <i className="fa-solid fa-globe"></i> www.expresscourseapp.com
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> Email:
            contact@expresscourseapp.com
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> Phone: 555-555-5555
          </p>
          <p>
            <i className="fa-solid fa-mobile-screen"></i> +880 1712-345678
          </p>
        </div>
      </footer>
      <div className="mx-auto text-center text-[15px] bg-slate-800 text-neutral-content py-4">
        <p>
          Copyright © {new Date().getFullYear()} Md. Ashraful Haque - All right
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
