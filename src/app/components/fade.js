import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FadeContainer = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation: ${(props) => (props.show ? "fadeIn" : "fadeOut")} 1s;
`;
const Fade = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <FadeContainer show={show} onAnimationEnd={onAnimationEnd}>
        {children}
      </FadeContainer>
    )
  );
};

export default Fade;
