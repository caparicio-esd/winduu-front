import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const ShopsPage = () => {
  const MapWithNoSSR = useMemo(() => dynamic(
    () => import('@/components/map/map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])
  
  return (
    <div className="flex flex-col gap-16 mb-20">
      <CardContainer adaptativity="fluid" screenHeight={93}>
        <Card
          layout="bottom-left"
          title="Nuestras tiendas"
          text="Un lugar donde podrás descubrir nuestros últimos diseños y novedades. Vive de primera mano nuestros productos, siente sus innovadores materiales... Aprovecha la oportunidad de hablar con nuestros expertos Winduu y resuelve todas tus dudas."
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3} className="gap-x-12">
        <div>
          <h3 className="text-xl mb-4">Encontrar una tienda</h3>
          <p className="text-sm mb-2">Ciudad, calle, código postal</p>
          <div>
            <Input />
          </div>
          <p>
            <Button variant="link" className="px-0">
              UTILIZAR MI UBICACIÓN
            </Button>
          </p>
        </div>
        <MapWithNoSSR />
      </CardContainer>
    </div>
  );
};

export default ShopsPage;
