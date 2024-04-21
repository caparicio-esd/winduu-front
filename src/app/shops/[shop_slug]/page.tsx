import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

const SingleShopPage = ({ params }: { params: { shop_slug: string } }) => {
  const MapWithNoSSR = useMemo(
    () =>
      dynamic(() => import("@/components/map/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div className="flex flex-col gap-16 mb-20">
      <CardContainer adaptativity="fluid" screenHeight={100}>
        <Card
          layout="bottom-left"
          title="Madrid - Tienda whatever"
          text="Un lugar donde podrás descubrir nuestros últimos diseños y novedades. Vive de primera mano nuestros productos, siente sus innovadores materiales... Aprovecha la oportunidad de hablar con nuestros expertos Winduu y resuelve todas tus dudas."
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3} className="gap-x-12">
        <div className="col-start-1 col-span-1">
          <h2 className="text-2xl mb-4">Dirección</h2>
          <p>Calle, 00 28000 España 1km</p>
        </div>
        <div className="col-start-2 col-span-full">
          <h2 className="text-2xl mb-4">Horarios</h2>
          <div className="flex justify-between border-b pb-2 mb-2">
            <div>Lunes-Viernes</div>
            <div>10:00-19:00</div>
          </div>
          <div className="flex justify-between border-b pb-2 mb-2">
            <div>Sábados</div>
            <div>Cerrado</div>
          </div>
        </div>
        <div className="col-start-2 col-span-full">
          <h2 className="text-2xl mb-4">Ubicación</h2>
          <MapWithNoSSR />
        </div>
      </CardContainer>
    </div>
  );
};

export default SingleShopPage;
