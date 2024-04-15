import clsx from "clsx";
import React, {
  FC,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  SVGProps,
} from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";

type IconAlias = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
>;
export type ButtonVariantProps =
  | "link"
  | "ghost"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | null
  | undefined;

type CardType = {
  layout?:
    | "top-left"
    | "top-center"
    | "center-left"
    | "center-center"
    | "bottom-left"
    | "bottom-center";
  preIcon?: IconAlias | string;
  lastIcon?: IconAlias;
  title?: string;
  text?: string;
  buttons?: { text: string; icon: IconAlias; primary: boolean }[];
  picture?: string | "none";
  className?: string;
  pretitle?: string;
};

const Card: FC<CardType> = (props) => {
  const isLayoutDefined = props.layout !== undefined;
  const cardContentStyleClasses = clsx(
    "card_content flex flex-col gap-2 px-8 py-16 container mx-auto items-start relative",
    "col-start-1 col-end-2 row-start-1 row-end-2",
    {
      "self-start":
        isLayoutDefined && ["top-left", "top-center"].includes(props.layout!),
      "self-center":
        isLayoutDefined &&
        ["center-left", "center-center"].includes(props.layout!),
      "self-end":
        isLayoutDefined &&
        ["bottom-left", "bottom-center"].includes(props.layout!),
    },
  );

  return (
    <article className={"card bg-gray-100 grid " + props.className}>
      <picture className="card_picture col-start-1 col-end-2 row-start-1 row-end-2">
        {props.picture && props.picture !== "none" && (
          // TODO improve picture sizing
          <Image
            src={props.picture}
            alt={props.title || ""}
            className="w-full h-full object-cover"
          />
        )}
        {props.picture === undefined && (
          <Image
            src="/img_placeholder.svg"
            alt="img_placeholder"
            className="w-full h-full object-center object-scale-down"
            height={100}
            width={100}
          />
        )}
      </picture>
      <div className={cardContentStyleClasses}>
        {props.preIcon && <props.preIcon className="w-6" />}
        {props.pretitle && <p className="uppercase text-xs">{props.pretitle}</p>}
        {props.title && <h2 className="text-xl max-w-[20ch]">{props.title}</h2>}
        {props.text && <p className="max-w-[35ch] mb-2">{props.text}</p>}
        {props.buttons && props.buttons?.length > 0 && (
          <div className="buttons flex gap-2">
            {props.buttons?.map((button, i) => (
              <Button
                key={i}
                className="inline-flex gap-2 items-center"
                variant={(!button.primary ? "ghost" : "") as ButtonVariantProps}
              >
                <div className="label">{button.text}</div>
                <div className="icon">
                  <button.icon className="h-4" />
                </div>
              </Button>
            ))}
          </div>
        )}
        {props.lastIcon && (
          <Button variant="ghost" className="absolute right-4 bottom-8">
            <props.lastIcon className="w-6" />
          </Button>
        )}
      </div>
    </article>
  );
};

export default Card;
