import { styled } from '@mui/material';

export const HeaderContainer = styled('header')`
  height: 115px;
  background-color: #f6f6f6;
  padding: ${({ theme }) => theme.spacing(2)};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 970px;
    margin: 0 auto;
    gap: ${({ theme }) => theme.spacing(2)};
  }

  a {
    font-size: 14px;
  }
`;

export const Logo = styled('img')`
  width: 125px;
`;

export const HeaderLinks = styled('nav')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  justify-content: end;
`; 