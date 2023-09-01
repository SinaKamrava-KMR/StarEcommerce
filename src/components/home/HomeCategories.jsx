import { styled } from "styled-components";
import { Title } from "../common/Title";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Container = styled.div`
  display: flex;

  gap: 1rem;
`;
const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 220px;
  gap: 3rem;
`;
const Item = styled.div`
  position: relative;

  height: 100%;
  overflow: hidden;
  border-radius: 1rem;
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.5) translate(-20px, 20px);
  }
`;
const FloatButton = styled.p`
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 10%;

  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
  gap: 1rem;
  cursor: pointer;

  box-shadow: 0 2px 5px #5656565c;
  &:hover {
    box-shadow: 0 2px 10px #4444445c;
  }
`;

function HomeCategories() {
  return (
    <Wrapper>
      <Title>دسته بندی ها</Title>

      <Container>
        <ItemsWrapper>
          <Item>
            <Image src="./public/categories/w1.jpg" />
            <FloatButton>
              <p> برند های محبوب</p>
              <HiArrowLongLeft fontSize={20} />
            </FloatButton>
          </Item>

          <Item>
            <Image src="./public/categories/w2.jpg" />
            <Link to={"/products?category=64ec453c6953de44bc52926e"}>
              <FloatButton>
                <p> لباس کژوال </p>
                <HiArrowLongLeft fontSize={20} />
              </FloatButton>
            </Link>
          </Item>
          <Item>
            <Image src="./public/categories/w3.jpg" />
            <Link to={"/products?category=64d78de9c3591a7ddbe60eb1"}>
              <FloatButton>
                <p> لباس خانم ها </p>
                <HiArrowLongLeft fontSize={20} />
              </FloatButton>
            </Link>
          </Item>
          <Item>
            <Image src="./public/categories/w4.jpg" />
            <Link to={"/products?category=64da398b40368270f54bd808"}>
              <FloatButton>
                <p> لباس مجلسی </p>
                <HiArrowLongLeft fontSize={20} />
              </FloatButton>
            </Link>
          </Item>
        </ItemsWrapper>
      </Container>
    </Wrapper>
  );
}

export default HomeCategories;
