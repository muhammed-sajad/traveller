import React,{useState ,useEffect} from 'react';
import styles from 'styled-components';
import axios from 'axios';
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";

function Place() {

    const [location,setLocation] = useState([]);

    useEffect(()=> {
        axios
            .get(`https://traveller.talrop.works/api/v1/places/`)
            .then(function (response) {
                setLocation(response.data.data);
            })
            .catch(function (error) {
            })
            .then(function () {
            });
    },[]);

    let renderPlace = () => {
        return location.map((place) => (
            <Link to={`/place/${place.id}/`}>
                <Li key={place.id}>
                    <PlaceImage src={place.image} alt={place.name}/>
                    <Box>
                        <H3>{place.name}</H3>
                        <Span>
                            <LocationIcon src={require('../../assets/images/place.svg').default} alt="logo" />
                            <H4>{place.location}</H4>
                        </Span>
                    </Box>
                </Li>
            </Link>
        ))
    }

    return (
        <>
            <Helmet>
                <title>Places | Moke Travel</title>
            </Helmet>
            <Section>
                <H1>Welcome</H1>
                <Paragraph>Explore the world around you</Paragraph>
                <div>
                    <Ul>
                        {renderPlace()}
                    </Ul>
                </div>
            </Section>
        </>
    )
}

export default Place


const Section = styles.section`
    
`;
const H1 = styles.h1`
`;
const Paragraph = styles.p`
    color: #cfcfcf;
    margin: 30px 0;
`;
const H3 = styles.h3`
`;
const H4 = styles.h4`
    font-weight: 400;
`;
const PlaceImage = styles.img`
    width: 400px;
    height: 250px;
    border-radius: 5px;
`;
const Box = styles.div`
    padding: 10px 20px;
`;
const Ul = styles.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    @media all and (max-width: 980px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: 1fr 1fr;
    }
    @media all and (max-width: 360px) {
        grid-template-columns: 1fr;
    }
`;
const Li = styles.li`
    margin-bottom: 20px;
`;
const Span = styles.span`
    display: flex;
`;
const LocationIcon = styles.img`
    margin-right: 10px;
`;