import React, { Component } from 'react';
import styled from 'styled-components'
import { Container } from './boxes';
import Profiles from './profiles';
import AmbassadorsData from './ambassadors.json';
import { Link } from './tasks'

// Text in the section
const Text = styled.section`
    width: 580px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140.8%;
    text-align: center;
    color: #2C2C2C;
    padding-top: 10rem;
    margin: auto;

    @media(max-width: 770px) {
        width: 75vw;
        font-size: 1.3rem;
    }

`

//Shuffle ambassador profile photos
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


class People extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ambassadorList: [],
            isDefault: true
        }
    }

    componentDidMount() {
        const ambassadorList = AmbassadorsData;
        const shuffledList = shuffleArray(ambassadorList);
        this.setState({
            ambassadorList: ambassadorList,
            shuffledList: shuffledList
        })
    }

    render() {
        var profilePhotos = []
        var { ambassadorList }  = this.state;
        ambassadorList = AmbassadorsData;

            // Show shuffled profile photos
            var shuffledList = shuffleArray(ambassadorList);
            profilePhotos = shuffledList.map((item, index) => {
                return <Profiles
                    profile={item}
                    key={`car-list-key ${index}`}
                />
            })

        return (

            <div style={{ display: 'block', marginTop: '3rem' }}>
                
                <div className="ellipse-up">

                    <Container><Text>We are spread across the world with different backgrounds and areas of expertise</Text></Container>
                    <Link> <a href="http://bit.ly/status-ambassador-application" target="_blank" rel="noopener noreferrer"> Join Us </a> </Link>

                </div>

                <div className="center">
                    <ul className="contributors">
                        {profilePhotos}
                    </ul>
                </div>



            </div>

        );
    }
}


export default People;