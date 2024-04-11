import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import SectionHeading from "@/components/headings/SectionHeading";
import Image from "next/image";
import React from "react";

const UsPage = () => {
  return (
    <div className="us_template">
      <CardContainer adaptativity="fluid" screenHeight={90}>
        <Card
          title="Nosotros"
          text="es la primera linea de productos de marca propìa, del Grupo fabricante Macrisal, la marca líder en carpintería industrial en Barcelona, con 36  años de experiencia en fabricación y desarrollo en carpintería de aluminio, dedicada exclusivamente al profesional."
          layout="bottom-left"
        />
      </CardContainer>

      <CardContainer adaptativity="fluid" screenHeight={90}>
        <Card
          title="Winduu"
          text="es la primera linea de productos de marca propìa, del Grupo fabricante Macrisal, la marca líder en carpintería industrial en Barcelona, con 36  años de experiencia en fabricación y desarrollo en carpintería de aluminio, dedicada exclusivamente al profesional."
        />
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3} className="my-12">
        <SectionHeading>
          <h2 className="text-3xl max-w-[20ch]">Tecnología Winduu</h2>
          <p className="max-w-[45ch] mb-2 mt-4">
            Estándares máximos de eficiencia térmica, equivalentes sólo a las
            ventanas de madera.
          </p>
          <p className="max-w-[45ch] mb-2">
            Con la belleza, la estabilidad y duración que sólo pueden ofrecerle
            las ventanas de aluminio. Nuestra avanzada tecnología, y nuestra
            capacidad productiva, nos permite:
          </p>
        </SectionHeading>
        <Card
          title="Producir cualquier medida y sistema de apertura "
          picture="none"
          className="min-h-96"
        />
        <Card
          title="Adaptarnos a tamaño de lote de producción"
          picture="none"
          className="min-h-96"
        />
        <Card
          title="Producir con costes ajustados"
          picture="none"
          className="min-h-96"
        />
      </CardContainer>

      <CardContainer adaptativity="dynamic" className="my-12">
        <SectionHeading>
          <h2 className="text-3xl max-w-[20ch]">Certificaciones</h2>
          <p className="max-w-[45ch] mb-2 mt-4">
            Nos centramos en los estándares y certificaciones tanto de Macrisal
            como de nuestros principales proveedores
          </p>
        </SectionHeading>
        <div className="inline-grid grid-cols-4 w-6/12 mx-auto my-8 gap-4">
          <div className="flex justify-center p-4 border">
            <Image src="/img_placeholder_mini.svg" alt="bla" width={50} height={50} />
          </div>
          <div className="flex justify-center p-4 border">
            <Image src="/img_placeholder_mini.svg" alt="bla" width={50} height={50} />
          </div>
          <div className="flex justify-center p-4 border">
            <Image src="/img_placeholder_mini.svg" alt="bla" width={50} height={50} />
          </div>
          <div className="flex justify-center p-4 border">
            <Image src="/img_placeholder_mini.svg" alt="bla" width={50} height={50} />
          </div>
          <div className="flex justify-center p-4 border">
            <Image src="/img_placeholder_mini.svg" alt="bla" width={50} height={50} />
          </div>
          <div className="flex justify-center p-4 border">
            <Image src="/img_placeholder_mini.svg" alt="bla" width={50} height={50} />
          </div>
          <div className="flex justify-center p-4 border">
            <Image src="/img_placeholder_mini.svg" alt="bla" width={50} height={50} />
          </div>
          <div className="flex justify-center p-4 border">
            <Image src="/img_placeholder_mini.svg" alt="bla" width={50} height={50} />
          </div>
        </div>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3} className="my-12">
        <SectionHeading>
          <h2 className="text-3xl max-w-[20ch]">Innovación</h2>
        </SectionHeading>
        <Card pretitle="fecha" title="Titular noticia" picture="none" className="min-h-96" />
        <Card pretitle="fecha" title="Titular noticia" picture="none" className="min-h-96" />
        <Card pretitle="fecha" title="Titular noticia" picture="none" className="min-h-96" />
      </CardContainer>
    </div>
  );
};

export default UsPage;
