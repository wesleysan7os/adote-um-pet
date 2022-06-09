import { NextPage } from 'next';
import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material';

import { useRegister } from '../../data/pages/pets/useRegister';
import { Title } from '../../ui/components/Title/Title';

export const Register: NextPage = () => {
  return (
    <>
      <Title
        title="Cadastro de Pets para Adoção"
        subtitle="Preencha os dados do novo Pet"
      />

      <Paper sx={{ maxWidth: 970, mx: "auto", p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label="Nome" placeholder="Digite o nome do pet" />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="História do Pet" multiline rows={4} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Foto" placeholder="Digite o endereço da imagem" />
          </Grid>

          <Grid item></Grid>
        </Grid>
      </Paper>
    </>
  );
}