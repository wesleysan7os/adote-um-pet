import NextLink from 'next/link';
import { Link } from '@mui/icons-material';
import { Box } from '@mui/material';

import { HeaderContainer, Logo, HeaderLinks } from './HeaderAdmin.style';

export function HeaderAdmin() {
  return (
    <HeaderContainer>
      <div>
        <Logo src={"/images/logo.svg"} alt={"Adote um Pet"} />
        <HeaderLinks>
          <NextLink href={"/pets/cadastro"}>
            <a>Cadastrar Pet</a>
          </NextLink>
          <NextLink href={"/pets/relatorio"}>
            <a>
              Relatório{' '} 
              <Box
                component="span"
                sx={{display: { sm: 'initial', xs: 'none'}}}
              >
                de Adoção
              </Box>
            </a>
          </NextLink>
        </HeaderLinks>
      </div>
    </HeaderContainer>
  );
}