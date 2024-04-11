import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import SectionHeading from "@/components/headings/SectionHeading";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

const ServicesPage = () => {
  // TODO create sliders in cards
  // TODO create scroll down button
  return (
    <div className="flex flex-col gap-16 mb-20">
      <CardContainer adaptativity="fluid" screenHeight={93}>
        <Card
          layout="bottom-left"
          title="Sólo productos garantizados con certificación CE"
          text="Descripción servicios"
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3}>
        <SectionHeading adaptativity="dynamic">
          {/* TODO refactor in props */}
          <h2 className="text-3xl max-w-[20ch]">
            Compromiso exclusivo con el profesional
          </h2>
          <p className="max-w-[55ch] mb-2 mt-4">
            El rendimiento de la carpintería depende tanto del fabricante como
            del instalador, por ello, Winduu opta desde sus orígenes por
            trabajar en colaboración exclusiva con instaladores profesionales.
          </p>
          <p className="max-w-[55ch] mb-2 mt-4">
            Un reconocimiento mutuo que ha sido clave para nuestro éxito. La
            alianza industrial-profesional garantiza una integración perfecta
            entre la buena carpintería y su perfecta instalación.
          </p>
        </SectionHeading>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Opciones"
          text="Ventanas suministradas con o sin vidrio"
          picture="none"
        ></Card>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Plazos rápidos"
          text="Presupuestos en 24-48 horas. Fabricación rápida"
          picture="none"
        ></Card>
        <Card
          className="row-span-3"
          layout="top-left"
          text="El rendimiento de la carpintería depende tanto del fabricante como del instalador, por ello, Winduu opta desde sus orígenes por trabajar en colaboración exclusiva con instaladores profesionales. Un reconocimiento mutuo que ha sido clave para nuestro éxito. La alianza industrial-profesional garantiza una integración perfecta entre la buena carpintería y su perfecta instalación."
          picture="none"
        ></Card>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Instalación"
          text="Optativa de todos nuestros productos, o apoyo al instalador"
          picture="none"
        ></Card>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Distribución"
          text="Distribución rápida a toda la península, a pie de obra "
          picture="none"
        ></Card>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Formación y Asistencia Técnica"
          text="A todos nuestros clientes profesionales y distribuidores exclusivos"
          picture="none"
        ></Card>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Garantía"
          text="En productos e instalación"
          picture="none"
        ></Card>
      </CardContainer>
    </div>
  );
};

export default ServicesPage;
