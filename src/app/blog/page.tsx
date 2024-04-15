import CardContainer from "@/components/cards/CardContainer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const BlogPage = () => {
  return (
    <div className="blog flex flex-col gap-16 mt-24 mb-20">
      <CardContainer
        adaptativity="dynamic"
        cols={3}
        className="gap-x-12 gap-y-12"
      >
        <div className="header">
          <h1 className="text-3xl">Noticias</h1>
        </div>
        <div className="header_filters flex flex-col gap-2 text-sm col-span-2">
          <div className="uppercase text-xs">Categorias</div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-blue-500">
              Todas
            </Button>
            <Button variant="outline">Innovación</Button>
            <Button variant="outline">Materiales</Button>
          </div>
        </div>
        {/* TODO refactor cards */}
        <div className="card_blog gap-12 col-span-full grid grid-cols-3">
          <picture className="card_blog_picture rounded bg-gray-100 h-96 w-full flex items-center justify-center col-start-2 col-span-2">
            <Image
              src="/img_placeholder.svg"
              alt="place"
              width={150}
              height={100}
            />
          </picture>
          <div className="card_blog_content flex flex-col gap-2 col-start-1 row-start-1">
            <div className="card_blog_date text-xs uppercase">Fecha</div>
            <div className="card_blog_title text-2xl">Título de noticia</div>
            <div className="card_blog_excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
              magni unde, dolores ex esse dicta earum illum. Aspernatur quae
              consequuntur est asperiores aperiam at eaque mollitia, repudiandae
              ipsam ea.
            </div>
            <div className="read_more">
              <Button
                variant="link"
                size="sm"
                className="flex gap-2 px-0"
                asChild
              >
                <a href="/blog/test-blog" className="inline-flex">
                  <div className="label">Leer más</div>
                  <div className="icon">
                    <ArrowRightIcon className="w-4" />
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="card_blog flex flex-col gap-4">
          <picture className="card_blog_picture rounded bg-gray-100 h-44 w-full flex items-center justify-center">
            <Image
              src="/img_placeholder.svg"
              alt="place"
              width={150}
              height={100}
            />
          </picture>
          <div className="card_blog_content flex flex-col gap-2">
            <div className="card_blog_date text-xs uppercase">Fecha</div>
            <div className="card_blog_title text-2xl">Título de noticia</div>
            <div className="card_blog_excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
              magni unde, dolores ex esse dicta earum illum. Aspernatur quae
              consequuntur est asperiores aperiam at eaque mollitia, repudiandae
              ipsam ea.
            </div>
            <div className="read_more">
              <Button
                variant="link"
                size="sm"
                className="flex gap-2 px-0"
                asChild
              >
                <a href="/blog/test-blog" className="inline-flex">
                  <div className="label">Leer más</div>
                  <div className="icon">
                    <ArrowRightIcon className="w-4" />
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="card_blog flex flex-col gap-4">
          <picture className="card_blog_picture rounded bg-gray-100 h-44 w-full flex items-center justify-center">
            <Image
              src="/img_placeholder.svg"
              alt="place"
              width={150}
              height={100}
            />
          </picture>
          <div className="card_blog_content flex flex-col gap-2">
            <div className="card_blog_date text-xs uppercase">Fecha</div>
            <div className="card_blog_title text-2xl">Título de noticia</div>
            <div className="card_blog_excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
              magni unde, dolores ex esse dicta earum illum. Aspernatur quae
              consequuntur est asperiores aperiam at eaque mollitia, repudiandae
              ipsam ea.
            </div>
            <div className="read_more">
              <Button
                variant="link"
                size="sm"
                className="flex gap-2 px-0"
                asChild
              >
                <a href="/blog/test-blog" className="inline-flex">
                  <div className="label">Leer más</div>
                  <div className="icon">
                    <ArrowRightIcon className="w-4" />
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="card_blog flex flex-col gap-4">
          <picture className="card_blog_picture rounded bg-gray-100 h-44 w-full flex items-center justify-center">
            <Image
              src="/img_placeholder.svg"
              alt="place"
              width={150}
              height={100}
            />
          </picture>
          <div className="card_blog_content flex flex-col gap-2">
            <div className="card_blog_date text-xs uppercase">Fecha</div>
            <div className="card_blog_title text-2xl">Título de noticia</div>
            <div className="card_blog_excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
              magni unde, dolores ex esse dicta earum illum. Aspernatur quae
              consequuntur est asperiores aperiam at eaque mollitia, repudiandae
              ipsam ea.
            </div>
            <div className="read_more">
              <Button
                variant="link"
                size="sm"
                className="flex gap-2 px-0"
                asChild
              >
                <a href="/blog/test-blog" className="inline-flex">
                  <div className="label">Leer más</div>
                  <div className="icon">
                    <ArrowRightIcon className="w-4" />
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="card_blog flex flex-col gap-4">
          <picture className="card_blog_picture rounded bg-gray-100 h-44 w-full flex items-center justify-center">
            <Image
              src="/img_placeholder.svg"
              alt="place"
              width={150}
              height={100}
            />
          </picture>
          <div className="card_blog_content flex flex-col gap-2">
            <div className="card_blog_date text-xs uppercase">Fecha</div>
            <div className="card_blog_title text-2xl">Título de noticia</div>
            <div className="card_blog_excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
              magni unde, dolores ex esse dicta earum illum. Aspernatur quae
              consequuntur est asperiores aperiam at eaque mollitia, repudiandae
              ipsam ea.
            </div>
            <div className="read_more">
              <Button
                variant="link"
                size="sm"
                className="flex gap-2 px-0"
                asChild
              >
                <a href="/blog/test-blog" className="inline-flex">
                  <div className="label">Leer más</div>
                  <div className="icon">
                    <ArrowRightIcon className="w-4" />
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="card_blog flex flex-col gap-4">
          <picture className="card_blog_picture rounded bg-gray-100 h-44 w-full flex items-center justify-center">
            <Image
              src="/img_placeholder.svg"
              alt="place"
              width={150}
              height={100}
            />
          </picture>
          <div className="card_blog_content flex flex-col gap-2">
            <div className="card_blog_date text-xs uppercase">Fecha</div>
            <div className="card_blog_title text-2xl">Título de noticia</div>
            <div className="card_blog_excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
              magni unde, dolores ex esse dicta earum illum. Aspernatur quae
              consequuntur est asperiores aperiam at eaque mollitia, repudiandae
              ipsam ea.
            </div>
            <div className="read_more">
              <Button
                variant="link"
                size="sm"
                className="flex gap-2 px-0"
                asChild
              >
                <a href="/blog/test-blog" className="inline-flex">
                  <div className="label">Leer más</div>
                  <div className="icon">
                    <ArrowRightIcon className="w-4" />
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="card_blog flex flex-col gap-4">
          <picture className="card_blog_picture rounded bg-gray-100 h-44 w-full flex items-center justify-center">
            <Image
              src="/img_placeholder.svg"
              alt="place"
              width={150}
              height={100}
            />
          </picture>
          <div className="card_blog_content flex flex-col gap-2">
            <div className="card_blog_date text-xs uppercase">Fecha</div>
            <div className="card_blog_title text-2xl">Título de noticia</div>
            <div className="card_blog_excerpt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
              magni unde, dolores ex esse dicta earum illum. Aspernatur quae
              consequuntur est asperiores aperiam at eaque mollitia, repudiandae
              ipsam ea.
            </div>
            <div className="read_more">
              <Button
                variant="link"
                size="sm"
                className="flex gap-2 px-0"
                asChild
              >
                <a href="/blog/test-blog" className="inline-flex">
                  <div className="label">Leer más</div>
                  <div className="icon">
                    <ArrowRightIcon className="w-4" />
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default BlogPage;
