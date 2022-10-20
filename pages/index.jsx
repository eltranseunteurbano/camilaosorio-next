import { useEffect } from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "@nextui-org/react";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
};

const Home = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, skipSnaps: false }, [
    Autoplay(),
  ]);
  const images = [
    "/home/home-1.jpg",
    "/home/home-2.jpg",
    "/home/home-3.jpg",
    "/home/home-4.jpg",
    "/home/home-5.jpg",
  ];

  return (
    <div className="page">
      <Head>
        <title>Camila Osorio</title>
        <meta name="description" content="Camila Osorio - Actress" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main style={{ inlineSize: "100%", blockSize: "calc(100vh - 76px)" }}>
        <div className="embla" ref={emblaRef} style={{ blockSize: "100%" }}>
          <div className="embla__container" style={{ blockSize: "100%" }}>
            {images.map((item, index) => (
              <div
                className="embla__slide"
                style={{ blockSize: "100%" }}
                key={item}
              >
                <Image
                  src={item}
                  showSkeleton
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  alt={`Image ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
