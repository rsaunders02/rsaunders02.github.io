import styled from "@emotion/styled";

type CardProps = {
  title: string;
  description: string;
};

export const Card = (props: CardProps) => {
  const { title, description } = props;
  return (
    <CardContainer>
      <CardContainerInner className="CardClass">
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContainerInner>
    </CardContainer>
  );
};

const CardFaceStyle = styled.div({
  height: "100%",
  width: "100%",
  position: "absolute",
});

const CardContainer = styled.div({
  position: "relative",
  width: "300px",
  height: "300px",
  borderRadius: "50px",
  border: "solid black",
  perspective: "1000px",
  "&:hover": {
    [`.CardClass`]: {
      transform: "rotateY(180deg)",
      cursor: "pointer",
    },
  },
});

const CardContainerInner = styled(CardFaceStyle)({
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
});

const Title = styled(CardFaceStyle)({
  marginTop: "15px",
  backfaceVisibility: "hidden",
  display: "flex",
  justifyContent: "center",
});

const Description = styled(CardFaceStyle)({
  transform: "rotateY(180deg)",
  backfaceVisibility: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
