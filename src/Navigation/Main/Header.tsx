import {HeaderButton} from './HeaderButton';
import styled from '@emotion/styled'

export const Header = () => {
  return (
    <HeaderContainer>
     <HeaderButton label='Home'/>
     <HeaderButton label='About Me'/>
     <HeaderButton label='Resume'/>
     <HeaderButton label='Projects'/>
     <HeaderButton label='Achievements'/>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div({
    display: 'flex',
    justifyContent: 'flex-end'
});
