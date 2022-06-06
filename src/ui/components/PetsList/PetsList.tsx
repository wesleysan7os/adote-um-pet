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
  onSelect: (pet: Pet) => void;
}

export function PetsList({ pets, onSelect }: PetsListProps) {
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
              onClick={() => onSelect(pet)}
            >
              Adote {pet.name}
            </Button>
          </PetInformation>
        </PetItem>
      ))}
    </List>
  );
}