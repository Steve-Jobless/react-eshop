import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  // background-color: coral;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f9f9f9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left:${props => props.direction ==="left" && "10px"};
  right:${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Slide = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px
  `;
const Description = styled.p`
  margin:50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  `;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor:pointer;
`;

export const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://images.unsplash.com/photo-1612878569417-a62601be8d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
