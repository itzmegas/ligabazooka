import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import NextImage from "next/image";
import React from "react";

const battlecats = [
  {
    id: 1,
    name: "Chili Parker",
    image: "/chili.jpg",
    description: "chili flow parker",
  },
];

const Battlecats = () => {
  return (
    <div className="h-full">
      <div className="grid grid-flow-col auto-cols-max justify-center">
        {battlecats.map((battlecat) => (
          <Card key={battlecat.id} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{battlecat.name}</h4>
              <p className="text-tiny uppercase font-bold">
                {battlecat.description}
              </p>
              <small className="text-default-500"></small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                as={NextImage}
                alt="Card background"
                className="object-cover rounded-xl"
                src={battlecat.image}
                width={270}
                height={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Battlecats;
