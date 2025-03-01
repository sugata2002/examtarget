import React, { useEffect, useRef, useState } from "react";

function JobNotification() {
  const listRef = useRef(null);
  const [scrolling, setScrolling] = useState(true); // Track scroll state

  useEffect(() => {
    const scrollSpeed = 1; // Adjust speed (higher = faster)
    const scrollInterval = 30; // Interval time in milliseconds
    let scrollAmount = 0;
    let interval;

    const startScrolling = () => {
      if (listRef.current) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= listRef.current.scrollHeight / 2) {
          scrollAmount = 0; // Reset scroll for infinite loop effect
        }
        listRef.current.scrollTop = scrollAmount;
      }
    };

    const handleMouseEnter = () => setScrolling(false); // Pause scrolling on hover
    const handleMouseLeave = () => setScrolling(true); // Resume scrolling

    if (scrolling) {
      interval = setInterval(startScrolling, scrollInterval);
    }

    listRef.current.addEventListener("mouseenter", handleMouseEnter);
    listRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      listRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      listRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [scrolling]); // Depend on scrolling state

  return (
    <div className="bg-blue-600 p-4 rounded-2xl w-full mx-auto">
      {/* Header with Red Dot */}
      <div className="flex items-center bg-white p-3 rounded-lg">
        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
        <span className="font-semibold text-black text-sm md:text-base">
          Job Notification
        </span>
      </div>

      {/* Job List - Auto Scroll Effect */}
      <div
        ref={listRef}
        className="bg-gray-300 p-4 mt-4 rounded-lg h-[200px] cursor-pointer overflow-hidden"
      >
        <ul className="list-disc pl-5 text-black text-sm md:text-base space-y-2">
          {[...Array(2)].map((_, i) => ( // Duplicate list for smooth looping
            <React.Fragment key={i}>
              <li>
                Army Ordnance Corps AOC Various Post Online Form 2024{" "}
                <span className="text-red-600">Last Date: 22/12/2024</span>
              </li>
              <li>
                Coast Guard Assistant Commandant Online Form 2024{" "}
                <span className="text-red-600">Last Date: 24/12/2024</span>
              </li>
              <li>
                BSF Constable GD Sports Quota Online Form 2024{" "}
                <span className="text-red-600">Last Date: 30/12/2024</span>
              </li>
              <li>
                Naval Dockyard Visakhapatnam Apprentices Online Form 2024{" "}
                <span className="text-red-600">Last Date: 02/01/2025</span>
              </li>
              <li>
                RSMSSB Junior Engineer JEn Online Form 2024{" "}
                <span className="text-red-600">Last Date: 27/12/2024</span>
              </li>
              <li>
                UPSSSC 10+2 Junior Assistant Online Form 2024{" "}
                <span className="text-red-600">Last Date: 22/01/2025</span>
              </li>
              <li>
                Bihar Vidhan Sabha Security Guard Online Form 2024{" "}
                <span className="text-red-600">Last Date: 13/12/2024</span>
              </li>
              <li>
                Bihar Vidhan Sabha Advt No 02/2023 to 05/2023 Online Form{" "}
                <span className="text-red-600">Last Date: 13/12/2024</span>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default JobNotification;
