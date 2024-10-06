import React from "react";

const ImageSection = () => {
  return (
    <>
      <section>
        <h2 className="font-play text-5xl pt-8 text-center font-bold">
          <span className="text-orange-600">Build</span> Something Amazing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 mx-10 py-10">
          {/* Row 1 */}
          {/* Image 1 (col-span-2, row-span-2) */}
          <div className="md:row-span-2 md:col-span-1">
            <img
              src="https://fastly.picsum.photos/id/477/4919/3258.jpg?hmac=5slG-7zTEnvjv53wzZSfhn52E_1v7UtAMJMs_8cjlLc"
              alt="Image 1"
              className="w-full h-full object-cover shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          {/* Image 2 (col-span-1, row-span-1) */}
          <div className="md:row-span-1">
            <img
              src="https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc"
              alt="Image 2"
              className="w-full h-full object-cover shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          {/* Image 3 (col-span-2, row-span-2) */}
          <div className="md:row-span-2 md:col-span-1">
            <img
              src="https://fastly.picsum.photos/id/392/5000/3333.jpg?hmac=vCaGuB6rQAiaofdQHatQL4DHgkyR2l-Ms9GWAL63CBQ"
              alt="Image 3"
              className="w-full h-full object-cover shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Row 2 */}
          {/* Image 4 (col-span-1, row-span-1) */}
          <div className="md:row-span-2 md:col-span-1">
            <img
              src="https://fastly.picsum.photos/id/456/3823/2549.jpg?hmac=d_xvaCWRiYc9iO87BIW3VK5BqITrMITiygpQkPEhnMo"
              alt="Image 4"
              className="w-full h-full object-cover shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          {/* Image 5 (col-span-2, row-span-2) */}
          <div className="md:row-span-1 md:col-span-1">
            <img
              src="https://fastly.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8"
              alt="Image 5"
              className="w-full h-full object-cover shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          {/* Image 6 (col-span-1, row-span-1) */}
          <div className="md:row-span-1 md:col-span-1">
            <img
              src="https://fastly.picsum.photos/id/370/4928/3264.jpg?hmac=UGe0txSnG4hhV-fAoi7e3mTnvQFhYYNcPJJbYFePh5Q"
              alt="Image 6"
              className="w-full h-full object-cover shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageSection;
