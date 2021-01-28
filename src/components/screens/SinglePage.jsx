import React,{useState ,useEffect} from 'react';
import styles from 'styled-components';
import axios from 'axios';
import {Helmet} from "react-helmet";


function SinglePage({match}) {

    const [singlePlace, setSinglePlace] = useState([]);

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        console.log(match.params); 
        axios
            .get(`https://traveller.talrop.works/api/v1/places/view/${match.params.id}/`)
            .then(function (response) {
            // handle success  
                setSinglePlace(response.data.data);
                setGallery(response.data.data.gallery);
            })
                .catch(function (error) {
                // handle error
            });
    });

    let renderGallery = () => {
        return gallery.map((gallery) => (
            <Li key={gallery.id}>
                <ImageTwo src= {gallery.image} />
            </Li>
            ))
    }

    return (
        <Div>
            <Helmet>
                <title>{singlePlace.name}</title>
            </Helmet>

            <H1>{singlePlace.name}</H1>
            <SmallDiv>
                <LeftSpan>{singlePlace.category_name}</LeftSpan>
                <RightSpan>
                    <LocationIcon src={require('../../assets/images/place.svg').default} alt="Image" />
                    <Location>{singlePlace.location}</Location>
                </RightSpan>
            </SmallDiv>
            <ImageDiv>
                <Ul>
                <ImageOne src={singlePlace.image} alt="Image"/>
                    {renderGallery()}
                </Ul>
            </ImageDiv>
            <PlaceTitle>
                Place Details
            </PlaceTitle>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat odit cumque voluptates quod laborum accusamus ipsa possimus quisquam qui commodi asperiores sint, aut similique veniam dolore quasi, rerum modi aperiam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat odit cumque voluptates quod laborum accusamus ipsa possimus quisquam qui commodi asperiores sint, aut similique veniam dolore quasi, rerum modi aperiam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat odit cumque voluptates quod laborum accusamus ipsa possimus quisquam qui commodi asperiores sint, aut similique veniam dolore quasi, rerum modi aperiam.
            </Paragraph>
        </Div>
    )
}

export default SinglePage;

const Div = styles.div`
    width: 80%;
    margin: 0 auto;
`;
const H1 = styles.h1``;
const SmallDiv = styles.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;
const LeftSpan = styles.span`
    border-radius: 13px;
    border: 1px solid #cfcfcf;
    font-size: 14px;
    padding: 5px;
    display: inline-block;
    color: #cfcfcf;
    margin-right: 10px;
`;
const RightSpan = styles.span`
    display: flex;
    align-items: center;
`;
const LocationIcon = styles.img``;
const Location = styles.h4`
    font-weight: 400;
    font-size: 14px;
    color: #777;
    margin-left: 2px;
`;
const ImageDiv = styles.div``;
const ImageOne = styles.img`
    width: 100%;
    height: 100%;
    grid-row: 1 / 3;
`;
const ImageTwo = styles.img`
    width: 100%;
    height: 100%;
`;
const Ul = styles.ul`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 10px;
    border-radius: 8px;
    overflow: hidden;
`;
const Li = styles.li``;
const PlaceTitle = styles.h2`
    margin: 30px 0;
    font-weight: 500;
`;
const Paragraph = styles.p`
    font-weight: 300;
`;