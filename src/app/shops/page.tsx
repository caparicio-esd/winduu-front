"use client"

import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

const ShopsPage = () => {
  const [currentLocation, setCurrentLocation] = useState<{lat: number, lng: number} | null>(null)
  const MapWithNoSSR = useMemo(
    () =>
      dynamic(() => import("@/components/map/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );

  const locationPromise = new Promise<{lat: number, lng: number}>((res, rej) => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        res({lat, lng})
      })
    } catch {
      rej("Not able to get coords")
    }
  })

  const locationService = async () => {
    const location = await locationPromise.then(c => c)
    setCurrentLocation(location)
  }

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
            <Button variant="link" className="px-0 text-xs" onClick={locationService}>
              UTILIZAR MI UBICACIÓN
            </Button>
          </p>
          <p>{JSON.stringify(currentLocation)}</p>
        </div>
        
        <MapWithNoSSR />
      </CardContainer>
    </div>
  );
};

export default ShopsPage;
