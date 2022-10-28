import React from 'react'
import { Container } from "@mui/material";
import Hero from '../Hero/Hero'
import Project from '../Project/Project';

const HomePage = () => {
return (
<Container>
    <div>
        <Hero />
        <Project/>
    </div>
</Container>
)
}

export default HomePage