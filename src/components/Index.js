import React from 'react';
import Slider from "../components/Slider";
import Trends from "../components/Trends";
import Customer from "./Customer";
import About from "../components/About";
import Projects from "../components/Projects";
import Counter from "../components/Counter";
import Fancy from "../components/Fancy/Fancy";
import Blogs from "../components/Blogs";

const Index = () => {
    return (
        <>
            <Slider />
            <Trends />
            <Customer />
            <About />
            <Projects />
            <Counter />
            <Fancy />
            <Blogs />
        </>
    )
}

export default Index;