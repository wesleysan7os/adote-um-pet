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
import { TextService } from '../../../data/services/TextService';

interface PetsListProps {
  pets: Pet[];
}

export function PetsList({ pets }: PetsListProps) {
  const maxSize = 250;
  
  return (
    <List>
      { pets.map(pet => (
        <PetItem key={pet.id}>
          <PetImage src={pet.imageAddress} alt={pet.name}/>
          <PetInformation>
            <PetsName>{pet.name}</PetsName>
            <PetsDescription>
              {TextService.textLimiter(pet.history, maxSize)}
            </PetsDescription>
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