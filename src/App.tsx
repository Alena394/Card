import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/StyledBtn";
import {Wrapper} from "./components/Wrapper";
import image from './Rectangle 1.svg'
import {myTheme} from "./styles/Theme.styled";
import {Title} from "./components/Title";
import {Text} from "./components/Text";


function App() {
    return (<Wrapper>
            <img src={image} alt={'card'}/>
            <Title>Headline</Title>
            <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
            <StyledBtn firstBtn>See more</StyledBtn>
            <StyledBtn secondBtn>Save</StyledBtn>
        </Wrapper>

    );
}

export default App;


