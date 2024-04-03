import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <CardContainer adaptativity="fluid" screenHeight={100}>
        <Card
          layout="bottom-left"
          title="Producto destacado: Asómate al futuro"
          buttons={[
            { text: "Descubrir", icon: ChevronRightIcon, primary: true },
            { text: "Descubrir", icon: ChevronRightIcon, primary: false },
          ]}
        ></Card>
      </CardContainer>
      <CardContainer adaptativity="framed" cols={3}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardContainer>
      <CardContainer adaptativity="framed" screenHeight={50}>
        <Card
          layout="bottom-left"
          title="Producto destacado: Asómate al futuro"
          buttons={[
            { text: "Descubrir", icon: ChevronRightIcon, primary: true },
            { text: "Descubrir", icon: ChevronRightIcon, primary: false },
          ]}
        ></Card>
      </CardContainer>
    </div>
  );
};

export default Home;
