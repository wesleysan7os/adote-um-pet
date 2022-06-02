import { Button } from '@mui/material';
import {
  PetsList as List,
  PetItem,
  PetImage,
  PetInformation,
  PetsName,
  PetsDescription
} from './PetsList.style';
import { Pet } from '../../../data/@types/Pet';

interface PetsListProps {
  pets: Pet[];
}

export function PetsList({ pets }: PetsListProps) {
  return (
    <List>
      { pets.map(pet => (
        <PetItem key={pet.id}>
          <PetImage src={pet.imageAddress} alt={pet.name}/>
          <PetInformation>
            <PetsName>{pet.name}</PetsName>
            <PetsDescription>{pet.history}</PetsDescription>
            <Button 
              fullWidth
              variant='contained'
            >
              Adote {pet.name}
            </Button>
          </PetInformation>
        </PetItem>
      ))}
    </List>
  );
}