import React, { Component } from "react";
import MainMemoriesSlider from "./../Components/MainMemoriesSlider";
import MemoryList from "./../Components/MemoryList";
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
