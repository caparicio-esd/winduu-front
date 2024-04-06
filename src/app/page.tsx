import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import CardIcon from "@/components/cards/CardIcon";
import SectionHeading from "@/components/headings/SectionHeading";
import {
  ChartBarIcon,
  ChevronRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-16 mb-20">
      <CardContainer adaptativity="fluid" screenHeight={93}>
        <Card
          layout="bottom-left"
          title="Producto destacado: Asómate al futuro"
          buttons={[
            { text: "Descubrir", icon: ChevronRightIcon, primary: true },
            { text: "Configurar", icon: ChevronRightIcon, primary: false },
          ]}
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3}>
        <SectionHeading adaptativity="dynamic">
          {/* TODO refactor in props */}
          <h2 className="text-3xl max-w-[20ch]">Asómate a un mundo</h2>
          <p className="max-w-[35ch] mb-2 mt-4">
            De altísima calidad de serie,  permiten incorporar opciones premium
            opcionales:
          </p>
        </SectionHeading>
        <Card
          className="min-h-96"
          picture="none"
          title="Sostenible"
          text="Estándares máximos de eficiencia térmica, equivalentes sólo a las ventanas de madera. Con la belleza, la estabilidad y duración que sólo pueden ofrecerle  las ventanas de aluminio."
        ></Card>
        <Card
          className="min-h-96"
          picture="none"
          title="Seguro"
          text="Ventanas de alta seguridad, con opciones premium de blindaje anti intrusión"
        ></Card>
        <Card
          className="min-h-96"
          picture="none"
          title="Tranquilo"
          text="Ventanas de alto nivel de aislamiento acústico, con opciones premium de protección anti ruido"
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="fluid" screenHeight={50}>
        <Card
          layout="top-left"
          title="Producto destacado: Asómate al futuro"
          text="De ventanas, puertas y complementos de extraordinario diseño."
          buttons={[
            { text: "Descubrir", icon: ChevronRightIcon, primary: true },
            { text: "Configurar", icon: ChevronRightIcon, primary: false },
          ]}
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3}>
        <SectionHeading adaptativity="dynamic">
          {/* TODO refactor in props */}
          <h2 className="text-3xl max-w-[20ch]">Nuestras gamas</h2>
          <p className="max-w-[35ch] mb-2 mt-4">
            De altísima calidad de serie,  permiten incorporar opciones premium
            opcionales:
          </p>
        </SectionHeading>
        <CardIcon
          title="Confort"
          text="Con sistema de triple puente…equivalente a las ventanas de madera y PVC"
          link={{ title: "Saber más", href: "asdasdas" }}
          icon={PlusCircleIcon}
        ></CardIcon>
        <CardIcon
          title="Urban"
          text="Alta seguridad anti intrusión. Grados RC2-RC3, con hasta 8 anclajes y 3 tornillos por cerradero"
          link={{ title: "Saber más", href: "asdasdas" }}
          icon={PlusCircleIcon}
        ></CardIcon>
        <CardIcon
          title="Secure"
          text="Máximo aislamiento acústico. Incorpora láminas y vidrios de alta protección acústica. "
          link={{ title: "Saber más", href: "asdasdas" }}
          icon={PlusCircleIcon}
        ></CardIcon>
      </CardContainer>

      <CardContainer adaptativity="fluid" screenHeight={50}>
        <Card
          layout="top-left"
          title="La sostenibilidad y la eficiencia energética como eje de diferenciación"
          text="Más allá de su atractivo diseño o de su alta funcionalidad y resistencia, nuestras ventanas de aluminio 100%, son perfectamente reciclables, lo que contribuye a reducir las emisiones de dióxido de carbono. "
          buttons={[
            { text: "Descubrir", icon: ChevronRightIcon, primary: true },
            { text: "Servicios", icon: ChevronRightIcon, primary: false },
          ]}
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="framed" screenHeight={50}>
        <Card
          layout="top-left"
          title="Wisita nuestras tiendas Winduu"
          text="Nuestras tiendas exposición, son espacios pensados comunicar, experimentar y  sentir cada detalle de nuestros productos Winduu. Productos que se exhiben con elegancia, mostrando todo el potencial que ofrecen. "
          buttons={[
            {
              text: "Descubrir tiendas",
              icon: ChevronRightIcon,
              primary: true,
            },
          ]}
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3}>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Wisita nuestras tiendas Winduu"
          text="Nuestras tiendas exposición, son espacios pensados comunicar, experimentar y  sentir cada detalle de nuestros productos Winduu. Productos que se exhiben con elegancia, mostrando todo el potencial que ofrecen. "
          picture="none"
        ></Card>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Wisita nuestras tiendas Winduu"
          text="Nuestras tiendas exposición, son espacios pensados comunicar, experimentar y  sentir cada detalle de nuestros productos Winduu. Productos que se exhiben con elegancia, mostrando todo el potencial que ofrecen. "
          picture="none"
        ></Card>
        <Card
          className="row-span-3"
          layout="top-left"
          title="Wisita nuestras tiendas Winduu"
          text="Nuestras tiendas exposición, son espacios pensados comunicar, experimentar y  sentir cada detalle de nuestros productos Winduu. Productos que se exhiben con elegancia, mostrando todo el potencial que ofrecen. "
          picture="none"
          buttons={[
            {
              text: "Descubrir tiendas",
              icon: ChevronRightIcon,
              primary: true,
            },
          ]}
        ></Card>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Wisita nuestras tiendas Winduu"
          text="Nuestras tiendas exposición, son espacios pensados comunicar, experimentar y  sentir cada detalle de nuestros productos Winduu. Productos que se exhiben con elegancia, mostrando todo el potencial que ofrecen. "
          picture="none"
        ></Card>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Wisita nuestras tiendas Winduu"
          text="Nuestras tiendas exposición, son espacios pensados comunicar, experimentar y  sentir cada detalle de nuestros productos Winduu. Productos que se exhiben con elegancia, mostrando todo el potencial que ofrecen. "
          picture="none"
        ></Card>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Wisita nuestras tiendas Winduu"
          text="Nuestras tiendas exposición, son espacios pensados comunicar, experimentar y  sentir cada detalle de nuestros productos Winduu. Productos que se exhiben con elegancia, mostrando todo el potencial que ofrecen. "
          picture="none"
        ></Card>
        <Card
          preIcon={ChartBarIcon}
          layout="top-left"
          title="Wisita nuestras tiendas Winduu"
          text="Nuestras tiendas exposición, son espacios pensados comunicar, experimentar y  sentir cada detalle de nuestros productos Winduu. Productos que se exhiben con elegancia, mostrando todo el potencial que ofrecen. "
          picture="none"
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3}>
        <SectionHeading adaptativity="dynamic">
          {/* TODO refactor in props */}
          <h2 className="text-3xl max-w-[20ch]">Nuestras tiendas</h2>
        </SectionHeading>
        <Card
          className="min-h-96"
          picture="none"
          title="Tienda a"
          text="Dirección blablablabla...blabla"
          lastIcon={ChevronRightIcon}
        ></Card>
        <Card
          className="min-h-96"
          picture="none"
          title="Tienda b"
          text="Dirección blablablabla...blabla"
          lastIcon={ChevronRightIcon}
        ></Card>
        <Card
          className="min-h-96"
          picture="none"
          title="Tienda c"
          text="Dirección blablablabla...blabla"
          lastIcon={ChevronRightIcon}
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={4}>
        <SectionHeading adaptativity="dynamic">
          {/* TODO refactor in props */}
          <h2 className="text-3xl max-w-[20ch]">Últimas noticias</h2>
        </SectionHeading>
        <Card
          className="min-h-96"
          picture="none"
          title="Noticia a"
          text="Lorem"
          lastIcon={ChevronRightIcon}
        ></Card>
        <Card
          className="min-h-96"
          picture="none"
          title="Noticia b"
          text="Lorem"
          lastIcon={ChevronRightIcon}
        ></Card>
        <Card
          className="min-h-96"
          picture="none"
          title="Noticia c"
          text="Lorem"
          lastIcon={ChevronRightIcon}
        ></Card>
        <Card
          className="min-h-96"
          picture="none"
          title="Noticia d"
          text="Lorem"
          lastIcon={ChevronRightIcon}
        ></Card>
      </CardContainer>
    </div>
  );
};

export default Home;
