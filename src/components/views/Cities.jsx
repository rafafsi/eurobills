import styled from "styled-components";
import Wrapper from "../layout/Wrapper";

import City from "../layout/City";
import { Container } from "../layout/Container";
import { cities as data } from "../../data/dataCities";

const Cities = () => {
  const styleDefault = {
    width: "50%",
  };

  return (
    <Container>
      <Title>Cities</Title>
      {data.map((city, id) => (
        <Wrapper>
          <City
            cityName={city.cityName}
            country={city.country}
            flag={city.flag}
            altText={city.altText}
            image={city.photo}
            urlVideo={city.url}
            style={styleDefault}
          />
        </Wrapper>
      ))}
    </Container>
  );
};

export default Cities;

const Title = styled.h1`
  font-family: "Yeon Sung", cursive;
  text-align: center;
  font-size: 2em;
`;
