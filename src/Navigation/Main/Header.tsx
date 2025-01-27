import { HeaderButton } from "./HeaderButton";
import { Logo } from "./Logo";
import styled from "@emotion/styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <div>
        <HeaderButton label="Home" />
        <HeaderButton label="About Me" />
        <HeaderButton label="Resume" />
        <HeaderButton label="Projects" />
        <HeaderButton label="Achievements" />
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#FAF9F6",
  width: "fit-content",
  borderRadius: "50px",
  boxShadow: "5px 2px grey",
  margin: "20px",
});
