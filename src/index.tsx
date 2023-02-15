import * as React from "react";
import { StyledContainer } from "./styles";

type TestingComponent = {
  name: string;
};

const TestingComponent: React.FC<TestingComponent> = ({ name }) => {
  return (
    <StyledContainer>
      <h1>Talismar {name}</h1>;
    </StyledContainer>
  );
};

export default TestingComponent;
