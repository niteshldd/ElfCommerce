import React, { Component } from "react";
import { Container } from "reactstrap";
import FeaturedProductList from "./featuredProductList";
import NewProductList from "./newProductList";

class Home extends Component {
  render() {
    return (
      <Container>
        <FeaturedProductList />
        <NewProductList />
      </Container>
    );
  }
}

export default Home;
