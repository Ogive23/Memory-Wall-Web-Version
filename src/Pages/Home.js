import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import { User } from '../Models/User';
import MainMemoriesSlider from './../Components/MainMemoriesSlider';
import MemoryList from './../Components/MemoryList';
import { Memory } from './../Models/Memory';
export class HomePage extends Component {
    render() {
        let user = new User();
        let memory = new Memory();
        console.log(user);
        return (
            <div>
                <MainMemoriesSlider />
                <MemoryList />
            </div>
        )
    }
}

export default HomePage
