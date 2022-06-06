import type { NextPage } from 'next'
import { Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material';

import { PetsList } from '../ui/components/PetsList/PetsList'
import { Title } from '../ui/components/Title/Title'
import { useIndex } from '../data/pages/useIndex';

const Home: NextPage = () => {
  const {
    petsList,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    monthlyFee,
    setMonthlyFee,
    message,
    setMessage
  } = useIndex();

  return (
    <>
      <Title
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <PetsList pets={petsList} onSelect={(pet) => setSelectedPet(pet)} />

      <Dialog
        open={!!selectedPet}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setSelectedPet(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="E-mail"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              value={monthlyFee}
              onChange={(e) => setMonthlyFee(e.target.value)}
              label="Quantia por mês" 
              type="number" 
              fullWidth 
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button onClick={() => setSelectedPet(null)}>Cancelar</Button>
          <Button variant="contained">Confirmar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={message.length > 0} 
        message={message} 
        autoHideDuration={2500}
        onClose={() => setMessage('')}
      />
    </>
  );
}

export default Home
