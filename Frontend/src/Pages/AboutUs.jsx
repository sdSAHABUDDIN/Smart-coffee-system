import React from "react";

const timelineData = [
  {
    year: "2018",
    image: "coffee3.jpg",
    text: "Started with a vision to revolutionize coffee automation.",
    side: "left",
  },
  {
    year: "2019",
    image: "machine1.jpg",
    text: "Launched our first prototype and received incredible feedback.",
    side: "right",
  },
  {
    year: "2021",
    image: "shop1.jpg",
    text: "Expanded to multiple cities, delivering smart coffee experiences.",
    side: "left",
  },
  {
    year: "2024",
    image: "machine4.jpg",
    text: "Introduced AI-based custom flavor technology.",
    side: "right",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-[#D69456] min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-[#3e2c23] mb-12">
        Our Journey
      </h1>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full border-l-4 border-amber-600"></div>

        {timelineData.map((item, index) => {
          const isLeft = item.side === "left";
          return (
            <div
              key={index}
              className="relative mb-20 flex items-center justify-between"
            >
              {/* Left side content */}
              {isLeft ? (
                <div className="w-1/2 pr-8 flex justify-end relative -top-6">
                  <div className="bg-[#FFCA99] rounded-xl shadow-lg p-4 w-full max-w-sm">
                    <img
                      src={item.image}
                      alt={`Year ${item.year}`}
                      className="w-full h-60 object-cover rounded-lg mb-4"
                    />
                    <p className="text-[#3e2c23] text-sm">{item.text}</p>
                  </div>
                </div>
              ) : (
                <div className="w-1/2 pr-8"></div>
              )}

              {/* Year in center */}
              <div className="bg-white text-[#3e2c23] px-4 py-2 rounded-full shadow font-bold z-10">
                {item.year}
              </div>

              {/* Right side content */}
              {!isLeft ? (
                <div className="w-1/2 pl-8 flex justify-start relative top-6">
                  <div className="bg-[#FFCA99] rounded-xl shadow-lg p-4 w-full max-w-sm">
                    <img
                      src={item.image}
                      alt={`Year ${item.year}`}
                      className="w-full h-60 object-cover rounded-lg mb-4"
                    />
                    <p className="text-[#3e2c23] text-sm">{item.text}</p>
                  </div>
                </div>
              ) : (
                <div className="w-1/2 pl-8"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
