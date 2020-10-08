import styled from "styled-components";

export default styled.div`
  .quote-container {
    width: auto;
    max-width: 90vw;
    padding: 2vh 3vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
    .quote-text {
      font-size: 6vh;
    }
    .long-text {
      font-size: 5vh;
    }
    .la-quote-left {
      font-size: 8vh;
    }
    .la-at {
      font-size: 2.5vh;
    }
    .quote-author {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 1vh;
      font-size: 3.5vh;
      font-weight: 400;
      font-style: italic;
    }
    .button-container {
      display: flex;
      margin-top: 3vh;
      justify-content: flex-start;
      button {
        cursor: pointer;
        font-size: 2vh;
        padding: 1vh 1vh;
        border-radius: 10px;
        color: #fff;
        background: #333;
        box-shadow: 0 0.3vh rgba(121, 121, 121, 0.65);
        * + * {
          margin-left: 1vh;
        }
        &:hover {
          filter: brightness(150%);
        }
        &:active {
          transform: translate(0, 0.5vh);
          box-shadow: 0 0.5vh rgba(255, 255, 255, 0.65);
        }
      }
    }
  }
  #footer {
    margin-top: 2vh;
  }
`;
