"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";

const Header = () => {
  // improve hover handling and create some animations

  const [hiddenMenu, setHiddenMenu] = useState(false);

  const headerLogoHoveredClasses = useMemo(
    () =>
      clsx("logo_hovered", {
        hidden: hiddenMenu,
      }),
    [hiddenMenu],
  );
  const headerLogoNormalClasses = useMemo(
    () =>
      clsx("logo_normal", {
        hidden: !hiddenMenu,
      }),
    [hiddenMenu],
  );
  const headerMenuBlockClasses = useMemo(
    () =>
      clsx("menu_section_body flex flex-col gap-1", {
        flex: !hiddenMenu,
        hidden: hiddenMenu,
      }),
    [hiddenMenu],
  );
  const headerNewsletterClasses = useMemo(
    () =>
      clsx("newsletter_contact", {
        hidden: hiddenMenu,
      }),
    [hiddenMenu],
  );

  useEffect(() => {
    setHiddenMenu(false);
  }, []);

  const headerEnterHandler = () => {
    setHiddenMenu(false);
  };
  const headerLeaveHandler = () => {
    setHiddenMenu(true);
  };

  return (
    <header
      className="header text-sm leading-snug p-4 fixed top-0 left-0 w-full h-auto"
      onMouseEnter={headerEnterHandler}
      onMouseLeave={headerLeaveHandler}
    >
      <div className="header_content flex gap-16">
        <div className="logo">
          <div className={headerLogoHoveredClasses}>
            <Link href="/">
              <Image
                src="/winduu_logo.svg"
                alt="logo"
                width={150}
                height={233.65}
                unselectable="on"
                draggable="false"
                priority={true}
              />
            </Link>
          </div>
          <div className={headerLogoNormalClasses}>
            <Link href="/">
              <Image
                src="/winduu_logo_h.svg"
                alt="logo"
                width={150}
                height={25.2}
                unselectable="on"
                draggable="false"
              />
            </Link>
          </div>
        </div>
        <div className="menu mr-auto flex gap-8">
          <div className="menu_section flex flex-col gap-4 min-w-40 pt-1">
            <div className="menu_section_header border-b border-gray-300 py-1">
              Ventanas
            </div>
            <div className={headerMenuBlockClasses}>
              <div className="menu_item">Practicables</div>
              <div className="menu_item">Corredera en línea</div>
              <div className="menu_item">Corredera elevable</div>
              <div className="menu_item">Corredera minimalista</div>
              <div className="menu_item">Exterior</div>
              <div className="menu_item">Divisiones interiores</div>
              <div className="menu_item">Vidrios</div>
            </div>
          </div>
          <div className="menu_section flex flex-col gap-4 min-w-40 pt-1">
            <div className="menu_section_header border-b border-gray-300 py-1">
              Otros productos
            </div>
            <div className={headerMenuBlockClasses}>
              <div className="menu_item">Puerta monopanel</div>
              <div className="menu_item">Puerta glass</div>
              <div className="menu_item">Persianas monoblock</div>
              <div className="menu_item">Persianas</div>
              <div className="menu_item">Mallorquinas</div>
              <div className="menu_item">Exterior</div>
              <div className="menu_item">Decoración</div>
            </div>
          </div>
          <div className="menu_section flex flex-col gap-4 min-w-40 pt-1">
            <div className="menu_section_header border-b border-gray-300 py-1">
              Compañía
            </div>
            <div className={headerMenuBlockClasses}>
              <div className="menu_item">
                <Link href="/us">Nosotros</Link>
              </div>
              <div className="menu_item">
                <Link href="/services">Servicios</Link>
              </div>
              <div className="menu_item">
                <Link href="/blog">Blog</Link>
              </div>
              <div className="menu_item">
                <Link href="/shops">Nuestra tiendas</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="meta min-w-64">
          <div className="contact_link">
            <Link href="/contact" className="flex p-2 bg-white">
              Contacto
            </Link>
          </div>
          <div className={headerNewsletterClasses}>
            <Link
              href="/contact"
              className="flex justify-between items-center py-2 px-2 border-b border-gray-400"
            >
              <span className="label">Newsletter</span>
              <span className="icon">
                <ChevronRightIcon width={24} />
              </span>
            </Link>
            <p className="text-xs p-2 max-w-[25ch]">
              Al suscribirte a la newsletter, aceptas los términos y condiciones
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
