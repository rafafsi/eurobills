import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

const City = ({ cityName, country, flag, image, altText, urlVideo, style }) => {
  return (
    <CityStyle>
      <Subtitle>
        {cityName} - {country}
      </Subtitle>
      <Media>
        <img src={image} alt={altText} style={style} />
        <ReactPlayer
          url={urlVideo}
          playing={false}
          volume={0.5}
          style={style}
        />
      </Media>
    </CityStyle>
  );
};

export default City;

const Subtitle = styled.h2`
  font-family: "Andika", sans-serif;
  align-self: flex-start;
`;

const CityStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: auto;

  * {
    margin: 10px;
  }
`;
