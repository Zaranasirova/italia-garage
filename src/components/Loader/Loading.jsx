// import React from 'react'

// const Loading = () => {
//   return (
//     <div className="hard-loader-overlay">
//     <div className="hard-loader">
//       <div className="cube"></div>
//       <div className="cube"></div>
//       <div className="cube"></div>
//       <div className="cube"></div>
//     </div>
//   </div>
//   )
// }

// export default Loading



///2-ci////
// import React from "react";
// import styled from "styled-components";

// const Loader = () => {
//   return (
//     <StyledWrapper>
//       <div className="container-lava">
//         <div className="lava-lamp">
//           <div className="bubble" />
//           <div className="bubble1" />
//           <div className="bubble2" />
//           <div className="bubble3" />
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   @keyframes drop {
//     0% {
//       transform: translateY(0px);
//     }
//     50% {
//       transform: translateY(80px);
//     }
//     100% {
//       transform: translateY(0px);
//     }
//   }

//   .container-lava {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: #212121;
//     z-index: 9999;
//   }
//   .lava-lamp {
//     position: relative;
//     width: 80px;
//     height: 120px;
//     background: #000;
//     border-radius: 25px;
//     overflow: hidden;
//     top: 50%;
//     left: 50%;
//   }

//   .bubble {
//     position: absolute;
//     top: 0;
//     width: 25px;
//     height: 25px;
//     background: linear-gradient(to bottom, #e64980, #ff8787);
//     border-radius: 50%;
//     left: 10px;
//     animation: drop 5s ease-in-out infinite;
//   }
//   .bubble1 {
//     position: absolute;
//     top: 0;
//     width: 25px;
//     height: 25px;
//     background: linear-gradient(to bottom, #82c91e, #3bc9db);
//     border-radius: 50%;
//     left: 20px;
//     animation: drop 3s ease-in-out infinite;
//   }
//   .bubble2 {
//     position: absolute;
//     top: 0;
//     width: 25px;
//     height: 25px;
//     background: linear-gradient(to bottom, #7950f2, #f783ac);
//     border-radius: 50%;
//     left: 30px;
//     animation: drop 4s ease-in-out infinite;
//     animation: drop 4s ease-in-out infinite;
//   }
//   .bubble3 {
//     position: absolute;
//     top: 0;
//     width: 25px;
//     height: 25px;
//     background: linear-gradient(to bottom, #4481eb, #04befe);
//     border-radius: 50%;
//     left: 40px;
//     animation: drop 6s ease-in-out infinite;
//   }
// `;

// export default Loader;




///3-cuu//






import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container-loader">
      <div className="loader" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`


 .container-loader {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: #212121;
     z-index: 9999;
   }


  .loader {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: -64px auto 0;
  background-color: #ccc;
  background-image: radial-gradient(#fff 4px, #0000  0),
                    radial-gradient(#fff 4px, #0000  0),
                    radial-gradient(#fff 4px, #0000  0),
                    radial-gradient(#fff 4px, #0000  0);
  background-position: 24px center, 8px center, -8px center, -24px center;
  position: relative;
  top:250px;
  left:0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15) inset;
  animation: flash 1s linear infinite;
}

.loader::before , .loader::after {
  content: '';
  position: absolute;
  border: 1px solid #ccc;
  border-top-color: #0000;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 20px;
  height: 22px;
  background: #fff;
}

.loader::before {
  width: 0px;
  height: 100px;
  transform: translate(-50% , 18px);
}

@keyframes flash {
  0% {
    background-image: radial-gradient(#DDD 4px, #0000  0),
        radial-gradient(#DDD 4px, #0000  0),
        radial-gradient(#DDD 4px, #0000  0),
        radial-gradient(#DDD 4px, #0000  0);
  }

  25% {
    background-image: radial-gradient(#DDD 4px, #0000  0),
      radial-gradient(#DDD 6px, #0000  0),
      radial-gradient(#DDD 6px, #0000  0),
      radial-gradient(#fff 6px, #0000  0);
  }

  50% {
    background-image: radial-gradient(#DDD 4px, #0000  0),
      radial-gradient(#DDD 6px, #0000  0),
      radial-gradient(#fff 6px, #0000  0),
      radial-gradient(#fff 6px, #0000  0);
  }

  75% {
    background-image: radial-gradient(#DDD 4px, #0000  0),
        radial-gradient(#fff 6px, #0000  0),
        radial-gradient(#fff 6px, #0000  0),
        radial-gradient(#fff 6px, #0000  0);
  }

  100% {
    background-image: radial-gradient(#fff 4px, #0000  0),
        radial-gradient(#fff 6px, #0000  0),
        radial-gradient(#fff 6px, #0000  0),
        radial-gradient(#fff 6px, #0000  0);
  }
}
`;

export default Loader;














