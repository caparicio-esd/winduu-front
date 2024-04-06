import clsx from "clsx";
import Link from "next/link";
import React, {
  FC,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  SVGProps,
} from "react";
import { Button } from "../ui/button";

type IconAlias = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
>;

type CardIconType = {
  icon?: IconAlias;
  title?: string;
  text?: string;
  picture?: string | "none";
  className?: string;
  link?: { title: string; href: string };
};

const CardIcon: FC<CardIconType> = (props) => {
  const cardIconHeaderStyleClasses = clsx(
    "card_icon_header flex justify-between items-center gap-2 px-8 py-12 container mx-auto bg-gray-100",
    "col-start-1 col-end-2 row-start-1 row-end-2",
  );
  const cardIconContentStyleClasses = clsx(
    "card_icon_content flex flex-col gap-2 px-8 py-8 container mx-auto",
    "col-start-1 col-end-2 row-start-2 row-end-3",
  );

  return (
    <article className={"card_icon grid " + props.className}>
      <div className={cardIconHeaderStyleClasses}>
        {props.title && <h2 className="text-xl max-w-[20ch]">{props.title}</h2>}
        {props.icon && <props.icon className="w-12" />}
      </div>
      <div className={cardIconContentStyleClasses}>
        {props.text && <p className="max-w-[35ch] mb-2">{props.text}</p>}
        {props.link && (
          <p className="max-w-[35ch] mb-2">
            <Link href={props.link.title}>
              <Button>{props.link.title}</Button>
            </Link>
          </p>
        )}
      </div>
    </article>
  );
};

export default CardIcon;
