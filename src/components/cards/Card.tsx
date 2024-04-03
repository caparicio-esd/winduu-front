import React, {
  FC,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  SVGProps,
} from "react";

type IconAlias = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
>;

type CardType = {
  layout?:
    | "top-left"
    | "top-center"
    | "center-left"
    | "center-center"
    | "bottom-left"
    | "bottom-center";
  icon?: ReactNode;
  title?: string;
  text?: string;
  buttons?: { text: string; icon: IconAlias; primary: boolean }[];
};

const Card: FC<CardType> = (props) => {
  return (
    <div className="bg-gray-200 p-8">
      {props.title && <h2>{props.title}</h2>}
      {props.text && <p>{props.text}</p>}
      {props.buttons && props.buttons?.length > 0 && (
        <div className="buttons">
          {props.buttons?.map((button, i) => (
            <button key={i} className="inline-flex gap-2 items-center">
              <div className="label">{button.text}</div>
              <div className="icon">
                <button.icon className="h-4" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
