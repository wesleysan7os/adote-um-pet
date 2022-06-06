import { styled, Box } from "@mui/material";

export const HeaderContainer = styled('header')`
  display: flex;
  justify-content: space-around;
  padding: ${({theme}) => theme.spacing(4)};
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled('img')`
  width: 230px;
  ${({theme}) => theme.breakpoints.down('md')} {
    width: 210px;
  }
`;

export const StyledBox = styled(Box)`
  display: none;
  ${({theme}) => theme.breakpoints.down('md')} {
    display: flex;
    align-items: center;
  }
`