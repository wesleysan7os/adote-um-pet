import { NextPage } from 'next';
import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material';

import { useRegister } from '../../data/pages/pets/useRegister';
import { Title } from '../../ui/components/Title/Title';

const Register: NextPage = () => {
  const {
    name,
    history,
    pictureAddress,
    setName,
    setHistory,
    setPictureAddress,
    register,
    message,
    setMessage,
  } = useRegister();
  return (
    <>
      <Title
        title="Cadastro de Pets para Adoção"
        subtitle="Preencha os dados do novo Pet"
      />

      <Paper sx={{ maxWidth: 970, mx: "auto", p: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Nome"
              placeholder="Digite o nome do pet"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              label="História do Pet"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Endereço da imagem"
              placeholder="Digite o endereço da imagem"
              fullWidth
            ></TextField>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              component="a"
              href="https://imgur.com/upload"
              target="_blank"
            >
              Enviar imagem
            </Button>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              onClick={register}
              variant="contained"
              fullWidth
              sx={{ maxWidth: { md: 200 }, mt: 4 }}
            >
              Cadastrar Pet
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar 
        open={message.length > 0}
        autoHideDuration={2500}
        onClose={() => setMessage("")}
        message={message}
      />
    </>
  );
}

export default Register;