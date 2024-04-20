"use client";

import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactPage = () => {
  const formSchema = z.object({
    name: z
      .string()
      .min(3, {
        message: "El nombre tiene que tener al menos 3 caracteres",
      })
      .max(100, {
        message: "El nombre tiene que tener como máximo 100 caracteres",
      }),
    email: z
      .string()
      .min(3, {
        message: "El email tiene que tener al menos 3 caracteres",
      })
      .max(100, {
        message: "El nombre tiene que tener como máximo 100 caracteres",
      })
      .email({
        message: "Tiene que ser un email",
      }),
    phone: z
      .string()
      .min(3, {
        message: "El teléfono tiene que tener al menos 3 caracteres",
      })
      .max(100, {
        message: "El teléfono tiene que tener como máximo 100 caracteres",
      })
      .optional(),
    message: z
      .string()
      .min(10, {
        message: "El mensaje tiene que tener al menos 3 caracteres",
      })
      .max(200, {
        message: "El mesnaje tiene que tener como máximo 200 caracteres",
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-16 mb-10">
      <CardContainer adaptativity="fluid" screenHeight={93}>
        <Card
          layout="bottom-left"
          title="Contacto"
          text="Descripción contacto"
        ></Card>
      </CardContainer>

      <CardContainer adaptativity="dynamic" cols={3}>
        <div className="col-start-1 col-span-1">
          <h1>Formulario de contacto</h1>
        </div>
        <div className="col-start-2 col-span-full">
          <Form {...form}>
            <form
              className="flex flex-col gap-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Pon tu nombre" {...field} />
                    </FormControl>
                    <FormDescription>
                      Pon un nombre para que podamos dirigirnos a ti
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Pon tu email" {...field} />
                    </FormControl>
                    <FormDescription>
                      Pon tu email para que podamos dirigirnos a ti
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="Pon tu teléfono" {...field} />
                    </FormControl>
                    <FormDescription>
                      Pon tu teléfono para que podamos dirigirnos a ti
                    </FormDescription>
                    <FormMessage className="absolute top-8 right-8" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Pon tu message" {...field} />
                    </FormControl>
                    <FormDescription>Pon tu message</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="form_control flex gap-2">
                <Button className="flex items-center gap-2" type="submit">
                  <span className="text">Enviar</span>
                  <PaperAirplaneIcon className="w-4" />
                </Button>
                <Button variant="outline" type="reset">
                  Reset
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardContainer>
    </div>
  );
};

export default ContactPage;
