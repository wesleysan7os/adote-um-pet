import { styled } from '@mui/material'

export const PetsList = styled('ul')`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2)};
`

export const PetItem = styled('li')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`

export const PetImage = styled('img')`
  width: 100%;
  ${({ theme }) => theme.breakpoints.up('md')} {
    height: 230px;
  }
`

export const PetInformation = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}
`

export const PetsName = styled('h2')`
  margin: 0;
`

export const PetsDescription = styled("p")`
  word-break: break-word;
  margin: 0;
`;