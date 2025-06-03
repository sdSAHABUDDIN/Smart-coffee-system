import React from "react";

const timelineData = [
  {
    year: "2018",
    image: "/journey1.jpg",
    text: "Started with a vision to revolutionize coffee automation.",
    side: "left",
  },
  {
    year: "2019",
    image: "/journey2.jpg",
    text: "Launched our first prototype and received incredible feedback.",
    side: "right",
  },
  {
    year: "2021",
    image: "/journey3.jpg",
    text: "Expanded to multiple cities, delivering smart coffee experiences.",
    side: "left",
  },
  {
    year: "2024",
    image: "/journey4.jpg",
    text: "Introduced AI-based custom flavor technology.",
    side: "right",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-[#D69456] min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-[#3e2c23] mb-12">Our Journey</h1>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-4 border-amber-600 sm:left-5 sm:translate-x-0"></div>

        {/* Timeline Cards */}
        {timelineData.map((item, index) => {
          const isLeft = item.side === "left";
          return (
            <div
              key={index}
              className={`mb-12 flex flex-col sm:flex-row items-center ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Spacer for alignment */}
              <div className={`sm:w-1/2 ${isLeft ? "" : "sm:order-2"}`}>
                <div className="bg-[#FFCA99] rounded-xl shadow-lg p-4 w-full max-w-sm mx-auto">
                  <img
                    src={item.image}
                    alt={`Year ${item.year}`}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <p className="text-[#3e2c23] text-sm">{item.text}</p>
                </div>
              </div>

              {/* Year Box */}
              <div className="hidden sm:flex flex-col items-center mx-4">
                <div className="bg-white text-[#3e2c23] px-4 py-2 rounded-full shadow font-bold">
                  {item.year}
                </div>
              </div>

              {/* Year Box for mobile */}
              <div className="sm:hidden mt-2 text-center">
                <div className="bg-white text-[#3e2c23] inline-block px-4 py-1 rounded-full shadow font-bold">
                  {item.year}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
