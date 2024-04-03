import clsx from "clsx";
import React, { FC, ReactNode } from "react";

type CardContainerPropsType = {
  adaptativity?: "fluid" | "framed" | "dynamic";
  cols?: number;
  children: ReactNode;
  screenHeight?: number;
};

const CardContainer: FC<CardContainerPropsType> = (props) => {
  const hasScreenHeight = props.screenHeight !== undefined;
  const isLayoutFluid = props.adaptativity == "fluid";
  const isLayoutFramed = props.adaptativity == "framed";

  const cardContainerPropsClasses = clsx("grid gap-4", {
    "w-full": isLayoutFluid,
    [`w-[calc(100%_-_4rem)]`]: isLayoutFramed,
    "mx-auto": isLayoutFramed,
  });
  const cardContainerPropsStyles = {
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
    height: hasScreenHeight ? `${props.screenHeight}vh` : "",
  };

  return (
    <div className={cardContainerPropsClasses} style={cardContainerPropsStyles}>
      {props.children}
    </div>
  );
};

export default CardContainer;
