import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

import { KeyboardArrowLeft } from "@mui/icons-material";
import { Button } from "@mui/material";


function HomeSectionCarousel({data, section_name}) {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1027: { items: 4.5 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = ()=> setActiveIndex(activeIndex-1);

  const slideNext = ()=> setActiveIndex(activeIndex+1);

  const controllActiveIndex = ({item})=> setActiveIndex(item);


  const items = data.slice(0,10).map((item) => (
    <HomeSectionCard item={item} />
  ));

  return (
    <div className="relative px-4 lg:px-8 ">
      <h2 className="p-5 text-xl font-extrabold text-gray-600">{section_name}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls

          onSlideChanged={controllActiveIndex}
          activeIndex={activeIndex}
        />

          {activeIndex !==0 && 
          <Button variant="contained" className="z-50" sx={{position:"absolute", top:"8rem", left:"0rem", transform:"translateX(-50%) rotate(90deg)", bgcolor:"white" }}
            onClick={slidePrev} >
            <KeyboardArrowLeft sx={{transform:"rotate(-90deg)", color:"black"}}/>
          </Button>}

          {activeIndex !== items.length-5 && 
             <Button variant="contained" className="z-50" sx={{position:"absolute", top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)", bgcolor:"white" }}
             onClick={slideNext}
           >
             <KeyboardArrowLeft sx={{transform:"rotate(90deg)", color:"black"}}/>
           </Button>
          }
        
      </div>
    </div>
  );
}

export default HomeSectionCarousel;





// import React, { useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

// import { KeyboardArrowLeft } from "@mui/icons-material";
// import { Button } from "@mui/material";

// function HomeSectionCarousel({ data, section_name }) {
//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1027: { items: 4.5 },
//   };

//   const [activeIndex, setActiveIndex] = useState(0);

//   const items = data.slice(0, 10).map((item) => <HomeSectionCard item={item} />);

//   const maxIndex = items.length - 5; // Limit the max index for the next button

//   const slidePrev = () => {
//     setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Prevent going below 0
//   };

//   const slideNext = () => {
//     setActiveIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex)); // Prevent exceeding maxIndex
//   };

//   const syncActiveIndex = ({ item }) => setActiveIndex(item);

//   return (
//     <div className="relative px-4 lg:px-8">
//       <h2 className="p-5 text-xl font-extrabold text-gray-600">{section_name}</h2>
//       <div className="relative p-5">
//         <AliceCarousel
//           items={items}
//           responsive={responsive}
//           disableButtonsControls
//           disableDotsControls
//           onSlideChanged={syncActiveIndex}
//           activeIndex={activeIndex} // Bind activeIndex to the carousel
//         />

//         {activeIndex !== 0 && (
//           <Button
//             variant="contained"
//             className="z-50"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               left: "0rem",
//               transform: "translateX(-50%) rotate(90deg)",
//               bgcolor: "white",
//             }}
//             onClick={slidePrev}
//           >
//             <KeyboardArrowLeft sx={{ transform: "rotate(-90deg)", color: "black" }} />
//           </Button>
//         )}

//         {activeIndex !== maxIndex && (
//           <Button
//             variant="contained"
//             className="z-50"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               right: "0rem",
//               transform: "translateX(50%) rotate(90deg)",
//               bgcolor: "white",
//             }}
//             onClick={slideNext}
//           >
//             <KeyboardArrowLeft sx={{ transform: "rotate(90deg)", color: "black" }} />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default HomeSectionCarousel;

