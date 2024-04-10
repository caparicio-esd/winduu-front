import clsx from "clsx";
import React, { FC, ReactNode } from "react";

type CardContainerPropsType = {
  adaptativity?: "fluid" | "framed" | "dynamic";
  cols?: number;
  children: ReactNode;
  screenHeight?: number;
  className?: string;
};

const CardContainer: FC<CardContainerPropsType> = (props) => {
  const hasScreenHeight = props.screenHeight !== undefined;
  const isLayoutFluid = props.adaptativity == "fluid";
  const isLayoutFramed = props.adaptativity == "framed";
  const isLayoutDynamic = props.adaptativity == "dynamic";

  const cardContainerPropsClasses = clsx(
    "grid gap-4",
    {
      "w-full": isLayoutFluid,
      [`w-[calc(100%_-_4rem)]`]: isLayoutFramed,
      container: isLayoutDynamic,
      "mx-auto": isLayoutFramed || isLayoutDynamic,
    },
    props.className,
  );
  const cardContainerPropsStyles = {
    gridTemplateColumns:
      props.cols && props.cols > 1 ? `repeat(${props.cols}, 1fr)` : "1fr",
    minHeight: hasScreenHeight ? `${props.screenHeight}vh` : "",
  };

  return (
    <section
      className={cardContainerPropsClasses}
      style={cardContainerPropsStyles}
    >
      {props.children}
    </section>
  );
};

export default CardContainer;
