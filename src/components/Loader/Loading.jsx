// import React from "react";
// import styled from "styled-components";

// const Loader = () => {
//   return (
//     <StyledWrapper>
//       <div className="container-loader">
//       <div className="loader" />
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`

//  .container-loader {
//      position: fixed;
//      top: 0;
//      left: 0;
//      width: 100%;
//      height: 100%;
//      background: #212121;
//      z-index: 9999;
//    }

//   .loader {
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   margin: -64px auto 0;
//   background-color: #ccc;
//   background-image: radial-gradient(#fff 4px, #0000  0),
//                     radial-gradient(#fff 4px, #0000  0),
//                     radial-gradient(#fff 4px, #0000  0),
//                     radial-gradient(#fff 4px, #0000  0);
//   background-position: 24px center, 8px center, -8px center, -24px center;
//   position: relative;
//   top:250px;
//   left:0;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.15) inset;
//   animation: flash 1s linear infinite;
// }

// .loader::before , .loader::after {
//   content: '';
//   position: absolute;
//   border: 1px solid #ccc;
//   border-top-color: #0000;
//   left: 50%;
//   top: 100%;
//   transform: translateX(-50%);
//   width: 20px;
//   height: 22px;
//   background: #fff;
// }

// .loader::before {
//   width: 0px;
//   height: 100px;
//   transform: translate(-50% , 18px);
// }

// @keyframes flash {
//   0% {
//     background-image: radial-gradient(#DDD 4px, #0000  0),
//         radial-gradient(#DDD 4px, #0000  0),
//         radial-gradient(#DDD 4px, #0000  0),
//         radial-gradient(#DDD 4px, #0000  0);
//   }

//   25% {
//     background-image: radial-gradient(#DDD 4px, #0000  0),
//       radial-gradient(#DDD 6px, #0000  0),
//       radial-gradient(#DDD 6px, #0000  0),
//       radial-gradient(#fff 6px, #0000  0);
//   }

//   50% {
//     background-image: radial-gradient(#DDD 4px, #0000  0),
//       radial-gradient(#DDD 6px, #0000  0),
//       radial-gradient(#fff 6px, #0000  0),
//       radial-gradient(#fff 6px, #0000  0);
//   }

//   75% {
//     background-image: radial-gradient(#DDD 4px, #0000  0),
//         radial-gradient(#fff 6px, #0000  0),
//         radial-gradient(#fff 6px, #0000  0),
//         radial-gradient(#fff 6px, #0000  0);
//   }

//   100% {
//     background-image: radial-gradient(#fff 4px, #0000  0),
//         radial-gradient(#fff 6px, #0000  0),
//         radial-gradient(#fff 6px, #0000  0),
//         radial-gradient(#fff 6px, #0000  0);
//   }
// }
// `;

// export default Loader;

import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container-loader">
        <div className="terminal-loader">
          <div className="terminal-header">
            <div className="terminal-title">Status</div>
            <div className="terminal-controls">
              <div className="control close" />
              <div className="control minimize" />
              <div className="control maximize" />
            </div>
          </div>
          <div className="text">Loading...</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @keyframes blinkCursor {
    50% {
      border-right-color: transparent;
    }
  }

  @keyframes typeAndDelete {
    0%,
    10% {
      width: 0;
    }
    45%,
    55% {
      width: 6.2em;
    } /* adjust width based on content */
    90%,
    100% {
      width: 0;
    }
  }

  .container-loader {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #212121;
    z-index: 9999;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .terminal-loader {
    border: 0.1em solid #333;
    background-color: #1a1a1a;
    color: #0f0;
    font-family: "Courier New", Courier, monospace;
    font-size: 1em;
    padding: 2.5em 2em;
    width: 18em;
    margin: 100px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }

  .terminal-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1.5em;
    background-color: #333;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 0 0.4em;
    box-sizing: border-box;
  }

  .terminal-controls {
    float: right;
  }

  .control {
    display: inline-block;
    width: 0.6em;
    height: 0.6em;
    margin-left: 0.4em;
    border-radius: 50%;
    background-color: #777;
  }

  .control.close {
    background-color: #e33;
  }

  .control.minimize {
    background-color: #ee0;
  }

  .control.maximize {
    background-color: #0b0;
  }

  .terminal-title {
    float: left;
    line-height: 1.5em;
    color: #eee;
    font-size:16px;
  }

  .text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.2em solid green; /* Cursor */
    animation: typeAndDelete 4s steps(11) infinite,
      blinkCursor 0.5s step-end infinite alternate;
    margin-top: 1.5em;
    font-size:22px
  }
`;

export default Loader;
