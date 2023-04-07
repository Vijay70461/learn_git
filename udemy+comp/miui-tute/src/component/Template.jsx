import React from "react";
import { Container } from "@mui/system";
import Header from "./Header";
import FeaturedPost from "./FeaturedPost";
import GridPost from "./GridPost";

const Template = () => {
  return (
    <div>
      <Container>
        <Header />
        <FeaturedPost />
        <GridPost />
      </Container>
    </div>
  );
};

export default Template;
