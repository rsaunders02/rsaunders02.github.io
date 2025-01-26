import styled from '@emotion/styled'

type HeaderButtonProps = {
    label: string;
}

export const HeaderButton = ({label}:HeaderButtonProps) => {
    return (
      <HeaderButtonContainer>
       <div>{label}</div>
      </HeaderButtonContainer>
    );
  }

  const HeaderButtonContainer = styled.div({
    color: 'orange',
    margin: '10px',
  });
  