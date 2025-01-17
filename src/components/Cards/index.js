import React from "react";
import styled from "styled-components";

export const Cards = ({ children }) => (
  <Wrapper>
    <Grid>{children}</Grid>
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 0 16px;
`;

const Grid = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  max-width: 1000px;
  grid-auto-rows: minmax(160px, auto);
  grid-gap: 26px;
  margin-bottom: 80px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;
