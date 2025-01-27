import styled from "@emotion/styled";

type HeaderButtonProps = {
  label: string;
};

export const HeaderButton = ({ label }: HeaderButtonProps) => {
  return (
    <HeaderButtonContainer>
      <div>{label}</div>
    </HeaderButtonContainer>
  );
};

const HeaderButtonContainer = styled.button({
  color: "orange",
  margin: "10px 30px",
  backgroundColor: "#FAF9F6",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    borderBottom: "solid black 2px",
  },
});
