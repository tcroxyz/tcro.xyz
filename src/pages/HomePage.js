import React from "react";
import Particles from "../components/Particles";
import styled from "styled-components";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="p-particles-js">
        <Particles />
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 16rem;
    z-index: -1;
  }
`;

export default HomePage;
