import clsx from "clsx";
import React, { FC, ReactNode } from "react";

type SectionHeadingPropsType = {
  adaptativity?: "fluid" | "framed" | "dynamic";
  children: ReactNode;
};

const SectionHeading: FC<SectionHeadingPropsType> = (props) => {
  // TODO refactor with CardContainer
  const isLayoutFluid = props.adaptativity == "fluid";
  const isLayoutFramed = props.adaptativity == "framed";
  const isLayoutDynamic = props.adaptativity == "dynamic";

  const sectionHeadingPropsClasses = clsx("grid gap-4", {
    "w-full": isLayoutFluid,
    "[`w-[calc(100%_-_4rem)]`]": isLayoutFramed,
    "container": isLayoutDynamic,
    "mx-auto": isLayoutFramed || isLayoutDynamic,
  });

  return <header className={sectionHeadingPropsClasses}>{props.children}</header>;
};

export default SectionHeading;
