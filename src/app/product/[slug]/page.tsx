import CardContainer from "@/components/cards/CardContainer";
import SectionHeading from "@/components/headings/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";
import {
  ChevronLeftIcon,
  PlusIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { CameraIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

const ProductsSinglePage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="product_name">
      <section className="my-24">
        <CardContainer adaptativity="dynamic" cols={3} className="gap-x-12">
          <div className="picture_big col-start-1 col-span-2 text-sm">
            <div className="picture_big_content w-full aspect-square max-h-[70vh] relative bg-slate-100 sticky top-24">
              <Image
                src="/img_placeholder.svg"
                alt="img_placeholder"
                width={10}
                height={10}
                className="w-full h-full object-none"
              />
              <div className="picture_big_menu flex gap-2 absolute bottom-4 left-4">
                <Button>Configuración</Button>
                <Button variant="outline">Exterior</Button>
                <Button variant="outline">Interior</Button>
              </div>
            </div>
          </div>
          <div className="col-start-3 col-span-1">
            <h1 className="text-2xl mb-8">
              {params.slug[0].toUpperCase() +
                params.slug.slice(1).replaceAll("-", " ")}
            </h1>

            <section className="mb-8">
              <h3 className="mb-3">Características</h3>
              <div>
                <div className="flex gap-4 border-b py-2">
                  <span className="icon">
                    <Square3Stack3DIcon className="w-5" />
                  </span>
                  <span>Apertura de hasta 180º</span>
                </div>
                <div className="flex gap-4 border-b py-2">
                  <span className="icon">
                    <Square3Stack3DIcon className="w-5" />
                  </span>
                  <span>
                    Una ventana que permite hasta un 20% más de superficie
                    acristalada, respecto a una ventana normal
                  </span>
                </div>
                <div className="flex gap-4 border-b py-2">
                  <span className="icon">
                    <Square3Stack3DIcon className="w-5" />
                  </span>
                  <span>Estética elegante</span>
                </div>
                <div className="flex gap-4 border-b py-2">
                  <span className="icon">
                    <Square3Stack3DIcon className="w-5" />
                  </span>
                  <span>
                    Incorpora de serie, todas las ventajas de nuestra Gama
                    confort, de máximo rendimiento térmico
                  </span>
                </div>
                <div className="flex gap-4 border-b py-2">
                  <span className="icon">
                    <Square3Stack3DIcon className="w-5" />
                  </span>
                  <span>Permite un gran ahorro de energía</span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="mb-3">Apertura</h3>
              <div>
                <Button
                  variant="outline"
                  className="rounded-none border-blue-500"
                >
                  <CameraIcon className="text-blue-500 w-5" />
                </Button>
                <Button variant="outline" className="rounded-none">
                  <CameraIcon className="text-gray-300 w-5" />
                </Button>
                <Button variant="outline" className="rounded-none">
                  <CameraIcon className="text-gray-300 w-5" />
                </Button>
                <Button variant="outline" className="rounded-none">
                  <CameraIcon className="text-gray-300 w-5" />
                </Button>
                <Button variant="outline" className="rounded-none">
                  <CameraIcon className="text-gray-300 w-5" />
                </Button>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="mb-3">Color</h3>
              <div>
                <Button
                  variant="outline"
                  className="rounded-none border-blue-500"
                >
                  <CameraIcon className="text-blue-500 w-5" />
                </Button>
                <Button variant="outline" className="rounded-none">
                  <CameraIcon className="text-gray-300 w-5" />
                </Button>
                <Button variant="outline" className="rounded-none">
                  <CameraIcon className="text-gray-300 w-5" />
                </Button>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="mb-3">Manilla</h3>
              <div>
                <Button
                  variant="outline"
                  className="rounded-none border-blue-500"
                >
                  <CameraIcon className="text-blue-500 w-5" />
                </Button>
                <Button variant="outline" className="rounded-none">
                  <CameraIcon className="text-gray-300 w-5" />
                </Button>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="mb-3">Gama</h3>
              <div className="border border-blue-500 p-4 flex items-center gap-4 mb-2">
                <div className="flex-1 flex flex-col gap-2">
                  <h4>Confort</h4>
                  <p className="text-xs max-w-[30ch]">
                    Opción premium en estanqueidad y confort térmico
                  </p>
                  <p className="text-xs max-w-[30ch] text-blue-600">
                    Equivalente en eficacia térmica a las ventanas de madera y
                    PVC
                  </p>
                </div>
                <div>
                  <PlusIcon className="w-8" />
                </div>
              </div>
              <div className="border border-gray-300 p-4 flex items-center gap-4 mb-2">
                <div className="flex-1 flex flex-col gap-2">
                  <h4>Secure</h4>
                  <p className="text-xs max-w-[30ch]">
                    Opción premium en seguridad / sistema anti intrusión
                  </p>
                </div>
                <div>
                  <PlusIcon className="w-8" />
                </div>
              </div>
              <div className="border border-gray-300 p-4 flex items-center gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <h4>Urban</h4>
                  <p className="text-xs max-w-[30ch]">
                    Opción premium en protección contra el ruido
                  </p>
                </div>
                <div>
                  <PlusIcon className="w-8" />
                </div>
              </div>
            </section>

            <Separator className="my-4" />
            <section className="">
              <h3 className="mb-3">Envía la configuración a tu correo</h3>
              <div className="flex gap-2">
                <Input placeholder="Correo" />
                <Button className="flex items-center gap-3">
                  <span>Enviar</span>
                  <span>
                    <ChevronRightIcon className="w-4" />
                  </span>
                </Button>
              </div>
            </section>
          </div>
        </CardContainer>
      </section>

      <section className="my-12">
        <CardContainer adaptativity="dynamic">
          <SectionHeading>
            <h2 className="text-3xl max-w-[20ch]">
              Vidrio - Detalles técnicos
            </h2>
          </SectionHeading>
          <div className="grid grid-cols-5 text-sm">
            <div className="py-4 border-b contents">
              <div className="font-bold border-b py-3"></div>
              <div className="border-b py-3 font-bold text-lg flex flex-col gap-4">
                <div>
                  <Image
                    src="/img_placeholder_mini.svg"
                    alt="img_placeholder_mini"
                    width={50}
                    height={50}
                  />
                </div>
                <div>67RT HO C16</div>
              </div>
              <div className="border-b py-3 font-bold text-lg flex flex-col gap-4">
                <div>
                  <Image
                    src="/img_placeholder_mini.svg"
                    alt="img_placeholder_mini"
                    width={50}
                    height={50}
                  />
                </div>
                <div>67RT HO C16</div>
              </div>
              <div className="border-b py-3 font-bold text-lg flex flex-col gap-4">
                <div>
                  <Image
                    src="/img_placeholder_mini.svg"
                    alt="img_placeholder_mini"
                    width={50}
                    height={50}
                  />
                </div>
                <div>67RT HO C16</div>
              </div>
              <div className="border-b py-3 font-bold text-lg flex flex-col gap-4">
                <div>
                  <Image
                    src="/img_placeholder_mini.svg"
                    alt="img_placeholder_mini"
                    width={50}
                    height={50}
                  />
                </div>
                <div>67RT HO C16</div>
              </div>
            </div>
            <div className="py-4 border-b contents">
              <div className="font-bold border-b py-3">
                <div className="max-w-[20ch]">Apertura máxima</div>
              </div>
              <div className="border-b py-3">1,2 w/m2K</div>
              <div className="border-b py-3">1,2 w/m2K</div>
              <div className="border-b py-3">1,2 w/m2K</div>
              <div className="border-b py-3">1,2 w/m2K</div>
            </div>
            <div className="py-4 border-b contents">
              <div className="font-bold border-b py-3">
                <div className="max-w-[20ch]">Número de hojas</div>
              </div>
              <div className="border-b py-3">4</div>
              <div className="border-b py-3">4</div>
              <div className="border-b py-3">4</div>
              <div className="border-b py-3">4</div>
            </div>
            <div className="py-4 border-b contents">
              <div className="font-bold border-b py-3">
                <div className="max-w-[20ch]">Protección térmica</div>
              </div>
              <div className="border-b py-3">C5</div>
              <div className="border-b py-3">C5</div>
              <div className="border-b py-3">C5</div>
              <div className="border-b py-3">C5</div>
            </div>
            <div className="py-4 border-b contents">
              <div className="font-bold border-b py-3">
                <div className="max-w-[20ch]">Seguridad de serie</div>
              </div>
              <div className="border-b py-3">E2100</div>
              <div className="border-b py-3">E2100</div>
              <div className="border-b py-3">E2100</div>
              <div className="border-b py-3">E2100</div>
            </div>
            <div className="py-4 border-b contents">
              <div className="font-bold border-b py-3">
                <div className="max-w-[20ch]">Seguridad con opción Secure</div>
              </div>
              <div className="border-b py-3">40db</div>
              <div className="border-b py-3">40db</div>
              <div className="border-b py-3">40db</div>
              <div className="border-b py-3">40db</div>
            </div>
            <div className="py-4 border-b contents">
              <div className="font-bold border-b py-3">
                <div className="max-w-[20ch]">Protección acústica de serie</div>
              </div>
              <div className="border-b py-3">100 kg/hoja</div>
              <div className="border-b py-3">100 kg/hoja</div>
              <div className="border-b py-3">100 kg/hoja</div>
              <div className="border-b py-3">100 kg/hoja</div>
            </div>
            <div className="py-4 border-b contents">
              <div className="font-bold border-b py-3">
                <div className="max-w-[20ch]">
                  Protección acústica con opción Secure
                </div>
              </div>
              <div className="border-b py-3">hasta 30mm</div>
              <div className="border-b py-3">hasta 30mm</div>
              <div className="border-b py-3">hasta 30mm</div>
              <div className="border-b py-3">hasta 30mm</div>
            </div>
            <div className="py-4 border-b contents">
              <div className="font-bold border-b py-3">
                <div className="max-w-[20ch]">Peso máximo de la hoja</div>
              </div>
              <div className="border-b py-3">10 kg</div>
              <div className="border-b py-3">10 kg</div>
              <div className="border-b py-3">10 kg</div>
              <div className="border-b py-3">10 kg</div>
            </div>
            <div className="py-4 border-b contents">
              <div className="font-bold border-b py-3">
                <div className="max-w-[20ch]">Espesor del vidrio</div>
              </div>
              <div className="border-b py-3">3cm</div>
              <div className="border-b py-3">3cm</div>
              <div className="border-b py-3">3cm</div>
              <div className="border-b py-3">3cm</div>
            </div>
          </div>
        </CardContainer>
      </section>

      <section className="my-12">
        <CardContainer adaptativity="dynamic">
          <SectionHeading>
            <h2 className="text-3xl max-w-[20ch]">Preguntas frecuentes</h2>
          </SectionHeading>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Pregunta frecuente 1</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Pregunta frecuente 2</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Pregunta frecuente 3</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Pregunta frecuente 4</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContainer>
      </section>
    </div>
  );
};

export default ProductsSinglePage;
