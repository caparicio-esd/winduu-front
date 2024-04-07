import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import CardIcon from "@/components/cards/CardIcon";
import SectionHeading from "@/components/headings/SectionHeading";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { Separator } from "@/components/ui/separator";
import { ChevronRightIcon } from "lucide-react";

const CategorySinglePage = ({ params }: { params: { cat_slug: string } }) => {
  return (
    <div className="flex flex-col gap-16 mb-20">
      <CardContainer adaptativity="fluid" screenHeight={93}>
        <Card
          layout="bottom-left"
          title={params.cat_slug[0].toUpperCase() + params.cat_slug.slice(1)}
          text="Las ventanas que combinan arquitectura, diseño y funcionalidad. Este tipo de ventanas practicables de aluminio son las más conocidas ya que ofrecen un tipo de abertura total y cuentan con un cierre totalmente hermético, por lo que garantizan un nivel de aislamiento térmico y acústico inmejorable."
          buttons={[
            { text: "Configurar", icon: ChevronRightIcon, primary: true },
          ]}
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3}>
        <SectionHeading adaptativity="dynamic">
          {/* TODO refactor in props */}
          <h2 className="text-3xl max-w-[30ch]">
            Descubre nuestras ventanas practicables
          </h2>
        </SectionHeading>
        <Card
          className="min-h-96"
          title="Forma y tamaño a tu medida"
          text="Creamos tu ventana según tus necesidades de tamaño, tipo de abertura y forma"
        ></Card>
        <Card
          className="min-h-96"
          title="Vidrios premium"
          text="Nuestra gama de practicables incorpora vidrios dobles o triples de Guardina Select de baja emisividad, opciones de control solar y barreras antirruido y laminados de seguridad"
        ></Card>
        <Card
          className="min-h-96"
          title="Manillas exclusivas"
          text="Disponemos de diferentes opciones de manillas exclusivas en Winduu."
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="fluid" screenHeight={50}>
        <Card
          layout="top-left"
          title="Personalizable"
          text="Crea tu ventana favorita en función de tus necesidades"
          buttons={[
            { text: "Configurar", icon: ChevronRightIcon, primary: true },
          ]}
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3}>
        <SectionHeading adaptativity="dynamic">
          {/* TODO refactor in props */}
          <h2 className="text-3xl max-w-[40ch]">
            Conoce nuestros kits de ventana practicable
          </h2>
        </SectionHeading>
        <CardIcon
          title="Confort"
          text="Con sistema de triple puente…equivalente a las ventanas de madera y PVC"
        ></CardIcon>
        <CardIcon
          title="Urban"
          text="Alta seguridad anti intrusión. Grados RC2-RC3, con hasta 8 anclajes y 3 tornillos por cerradero"
        ></CardIcon>
        <CardIcon
          title="Secure"
          text="Máximo aislamiento acústico. Incorpora láminas y vidrios de alta protección acústica. "
        ></CardIcon>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3}>
        <Separator className="col-span-full" />

        <Card
          picture="none"
          className="bg-transparent"
          preIcon={ChartBarIcon}
          text="Característica a..."
        />
        <Card
          picture="none"
          className="bg-transparent"
          preIcon={ChartBarIcon}
          text="Característica a..."
        />
        <Card
          picture="none"
          className="bg-transparent"
          preIcon={ChartBarIcon}
          text="Característica a..."
        />
        <Card
          picture="none"
          className="bg-transparent"
          preIcon={ChartBarIcon}
          text="Característica a..."
        />
        <Card
          picture="none"
          className="bg-transparent"
          preIcon={ChartBarIcon}
          text="Característica a..."
        />
        <Card
          picture="none"
          className="bg-transparent"
          preIcon={ChartBarIcon}
          text="Característica a..."
        />
        <Card
          picture="none"
          className="bg-transparent"
          preIcon={ChartBarIcon}
          text="Característica a..."
        />
        <Card
          picture="none"
          className="bg-transparent"
          preIcon={ChartBarIcon}
          text="Característica a..."
        />
        <Card
          picture="none"
          className="bg-transparent"
          preIcon={ChartBarIcon}
          text="Característica a..."
        />
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3}>
        <SectionHeading adaptativity="dynamic">
          {/* TODO refactor in props */}
          <h2 className="text-3xl max-w-[20ch]">Asómate a un mundo</h2>
        </SectionHeading>
        <Card
          className="min-h-96"
          title="Sostenible"
          text="Estándares máximos de eficiencia térmica, equivalentes sólo a las ventanas de madera. Con la belleza, la estabilidad y duración que sólo pueden ofrecerle las ventanas de aluminio."
        ></Card>
        <Card
          className="min-h-96"
          title="Seguro"
          text="Ventanas de alta seguridad, con opciones premium de blindaje anti intrusión"
        ></Card>
        <Card
          className="min-h-96"
          title="Tranquilo"
          text="Ventanas de alto nivel de aislamiento acústico, con opciones premium de protección anti ruido"
        ></Card>
      </CardContainer>
    </div>
  );
};

export default CategorySinglePage;
