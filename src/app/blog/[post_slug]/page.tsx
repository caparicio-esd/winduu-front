import Card from "@/components/cards/Card";
import CardContainer from "@/components/cards/CardContainer";
import SectionHeading from "@/components/headings/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogSinglePage = ({ params }: { params: { post_slug: string } }) => {
  return (
    <div className="blog flex flex-col gap-16 mt-24 mb-20">
      <CardContainer
        adaptativity="dynamic"
        cols={3}
        className="gap-x-12 gap-y-12"
      >
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
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eum magni unde, dolores ex esse dicta earum illum. Aspernatur
                quae consequuntur est asperiores aperiam at eaque mollitia,
                repudiandae ipsam ea.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eum magni unde, dolores ex esse dicta earum illum. Aspernatur
                quae consequuntur est asperiores aperiam at eaque mollitia,
                repudiandae ipsam ea.
              </p>
            </div>
          </div>
        </div>
        <div className="card_blog gap-12 col-span-full grid grid-cols-3">
          <div className="card_blog_content flex flex-col gap-2 col-start-2 col-span-2">
            <div className="card_blog_excerpt max-w-[50ch]">
              <p className="mb-4 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eum magni unde, dolores ex esse dicta earum illum. Aspernatur
                quae consequuntur est asperiores aperiam at eaque mollitia,
                repudiandae ipsam ea.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eum magni unde, dolores ex esse dicta earum illum. Aspernatur
                quae consequuntur est asperiores aperiam at eaque mollitia,
                repudiandae ipsam ea.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eum magni unde, dolores ex esse dicta earum illum. Aspernatur
                quae consequuntur est asperiores aperiam at eaque mollitia,
                repudiandae ipsam ea.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eum magni unde, dolores ex esse dicta earum illum. Aspernatur
                quae consequuntur est asperiores aperiam at eaque mollitia,
                repudiandae ipsam ea.
              </p>
            </div>
          </div>
        </div>
      </CardContainer>
      <CardContainer adaptativity="framed">
        <Card picture="none" className="h-96"></Card>
      </CardContainer>
      <CardContainer
        adaptativity="dynamic"
        cols={3}
        className="gap-x-12 gap-y-12"
      >
        <SectionHeading>
          <h2 className="text-3xl max-w-[20ch]">Asómate a un mundo</h2>
        </SectionHeading>
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

export default BlogSinglePage;
