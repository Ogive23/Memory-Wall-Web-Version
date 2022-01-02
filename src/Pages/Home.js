import React, { Component } from "react";
import MainMemoriesSlider from "../Components/Home Page/MainMemoriesSlider";
import MemoryList from "../Components/Home Page/MemoryList";
export class HomePage extends Component {
  render() {
    return (
      <>
        <MainMemoriesSlider />
        <MemoryList />
      </>
    );
  }
}

export default HomePage;
