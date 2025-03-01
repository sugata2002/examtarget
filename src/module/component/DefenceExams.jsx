import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import planeImage from "../../assets/homepage/plane.png"; // Update the path accordingly

const exams = [
  { name: "UPSC CDS" },
  { name: "UPSC NDA" },
  { name: "INET Indian Navy" },
  { name: "AFCAT Indian Air Force" },
  { name: "Agniveer Vayu IAF(x)" },
];

function DefenceExams() {
  return (
    <div className="bg-blue-600 p-4 rounded-2xl w-full mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-3 rounded-3xl">
        <span className="font-semibold text-black">Defence Exams</span>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2} 
        breakpoints={{
          640: { slidesPerView: 2 }, // Mobile
          768: { slidesPerView: 3 }, // Tablets
          1024: { slidesPerView: 5 }, // Desktops
        }}
        className="mt-4"
      >
        {exams.map((exam, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-300 p-4 rounded-lg flex flex-col items-center justify-between shadow-md relative">
              {/* Text & Image */}
              <div className="flex flex-col items-center">
                <span className="text-center text-sm font-medium">{exam.name}</span>
                <img src={planeImage} alt="Plane" className="w-[4rem] h-[4rem] mt-2" />
              </div>

              
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md absolute bottom-3 right-3">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DefenceExams;
