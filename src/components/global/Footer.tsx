import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-sm leading-snug px-16 py-12 bg-gray-100">
      <div className="footer_content flex flex-col gap-24 w-full">
        <div className="footer_top flex justify-between">
          <div className="footer_logo">
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
          <div className="menu flex gap-8">
            <div className="menu_section flex flex-col gap-4 min-w-40 pt-1">
              <div className="menu_section_header border-b border-gray-300 py-1">
                Ventanas
              </div>
              <div className="menu_section_body flex flex-col gap-1">
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
              <div className="menu_section_body flex flex-col gap-1">
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
              <div className="menu_section_body flex flex-col gap-1">
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
            <div className="menu_section flex flex-col gap-4 min-w-40 pt-1">
              <div className="menu_section_header border-b border-gray-300 py-1">
                Social
              </div>
              <div className="menu_section_body flex flex-col gap-1">
                <div className="menu_item">Contacto</div>
                <div className="menu_item">Instagram</div>
                <div className="menu_item">Twitter</div>
                <div className="menu_item">Facebook</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>Winduu legal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
