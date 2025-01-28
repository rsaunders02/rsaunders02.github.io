import styled from "@emotion/styled";

export const Card = () => {
  return (
    <CardContainer>
      <CardContainerInner>
        <Title>School Donation Site!!!</Title>
        <Description>This is a description</Description>
      </CardContainerInner>
    </CardContainer>
  );
};

const CardContainer = styled.div({
  width: "300px",
  height: "300px",
  borderRadius: "50px",
  "&:hover": {
    transform: "rotateY(180deg)",
  },
  border: "solid black",
  perspective: "1000px",
});

const CardContainerInner = styled.div({
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
});

const Title = styled.div({
  margin: "15px",
  paddingLeft: "20px",
  borderBottom: "solid 1px",
  backfaceVisibility: "hidden",
});

const Description = styled.div({
  backgroundColor: "red",
  transform: "rotateY(180deg)",
  backfaceVisibility: "hidden",
});
