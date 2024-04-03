import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import SectionHeading from "@/components/headings/SectionHeading";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <CardContainer adaptativity="fluid" screenHeight={93}>
        <Card
          className="mb-8"
          layout="bottom-left"
          title="Producto destacado: Asómate al futuro"
          buttons={[
            { text: "Descubrir", icon: ChevronRightIcon, primary: true },
            { text: "Configurar", icon: ChevronRightIcon, primary: false },
          ]}
        ></Card>
      </CardContainer>
      <SectionHeading adaptativity="dynamic">
        {/* TODO refactor in props */}
        <h2 className="text-xl max-w-[20ch]">Asómate a un mundo</h2>
        <p className="max-w-[35ch] mb-2 mt-4">
          De altísima calidad de serie,  permiten incorporar opciones premium
          opcionales:
        </p>
      </SectionHeading>
      <CardContainer adaptativity="dynamic" cols={3}>
        <Card picture="none"></Card>
        <Card picture="none"></Card>
        <Card picture="none"></Card>
      </CardContainer>
      <CardContainer adaptativity="framed" screenHeight={50}>
        <Card
          className="mt-8 mb-16"
          layout="top-left"
          title="Producto destacado: Asómate al futuro"
          text="De ventanas, puertas y complementos de extraordinario diseño."
          buttons={[
            { text: "Descubrir", icon: ChevronRightIcon, primary: true },
            { text: "Configurar", icon: ChevronRightIcon, primary: false },
          ]}
        ></Card>
      </CardContainer>
    </div>
  );
};

export default Home;
