import { useState } from "react";

import { Pet } from "../@types/Pet";

export function useIndex() {
  const [petsList, setPetsList] = useState<Pet[]>([
    {
      id: 1,
      name: "Bidu",
      history:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, fugit perferendis quis expedita debitis doloremque, enim consequuntur beatae voluptatibus excepturi odit illum repellendus nulladignissimos soluta animi eum recusandae ducimus?  sit amet consectetur adipisicing elit. Ad, fugit perferendis quis expedita debitis doloremque,  consectetur adipisicing elit. Ad, fugit perferendis quis expedita debitis doloremque, enim consequuntur beatae voluptatibus excepturi odit illum repellendus nulladignissimos soluta animi eum recusandae ducimus?",
      imageAddress:
        "https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_900x506.jpg.webp",
    },
    {
      id: 2,
      name: "Scooby",
      history:
        "Dolor sit amet consectetur adipisicing elit. Ad, fugit perferendis quis expedita debitis doloremque, enim consequuntur beatae voluptatibus excepturi odit illum repellendus nulladignissimos soluta animi eum recusandae ducimus?  sit amet consectetur adipisicing elit. Ad, fugit perferendis quis expedita debitis doloremque,  consectetur adipisicing elit. Ad, fugit perferendis quis expedita debitis doloremque, enim consequuntur beatae voluptatibus excepturi odit illum repellendus nulladignissimos soluta animi eum recusandae ducimus?",
      imageAddress:
        "https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453",
    },
  ]);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  return {
    petsList,
    selectedPet,
    setSelectedPet
  };
}