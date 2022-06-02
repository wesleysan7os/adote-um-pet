import { styled } from '@mui/material';

export const HeaderContainer = styled('header')`
  display: flex;
  justify-content: center;
  padding: ${({theme}) => theme.spacing(6)};
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled('img')`
  width: 230px;
`;