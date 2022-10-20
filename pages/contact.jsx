import { Container, Text, Grid, Link } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
};

const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Camila Osorio - {t("contact.title")}</title>
        <meta name="description" content="Camila Osorio - Actress" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="contact-main">
        <section className="contact-img"></section>
        <Container
          sm
          display="flex"
          direction="column"
          justify="center"
          alignItems="center"
          css={{ padding: "4rem", boxSizing: "border-box", gap: "5rem" }}
        >
          <div style={{ maxInlineSize: 600 }}>
            <Text h1 size={30} css={{ textAlign: "center" }} color="primary">
              {t("contact.title")}
            </Text>
            <Text css={{ textAlign: "center" }}>
              {t("contact.description")}
            </Text>
          </div>
          <article className="contact-content">
            <div>
              <Text
                h2
                size="1.5rem"
                color="secondary"
                css={{ textAlign: "center" }}
              >
                {t("contact.phone")}
              </Text>
              <ul>
                <li>
                  <span itemProp="telephone">
                    <Link
                      href="tel:+573112817187"
                      color="text"
                      isExternal
                      block
                    >
                      +57 311 281 7187
                    </Link>
                  </span>
                </li>
                <li>
                  <span itemProp="telephone">
                    <Link
                      href="tel:+573186901604"
                      color="text"
                      isExternal
                      block
                    >
                      +57 318 690 1604
                    </Link>
                  </span>
                </li>
                <li>
                  <span itemProp="telephone">
                    <Link
                      href="tel:+573132102345"
                      color="text"
                      isExternal
                      block
                    >
                      +57 313 210 2345
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <Text
                h2
                size="1.5rem"
                color="secondary"
                css={{ textAlign: "center" }}
              >
                {t("contact.mail")}
              </Text>
              <ul>
                <li>
                  <Link
                    href="mailto:comunicaciones@vtg.com.co"
                    color="text"
                    isExternal
                    block
                  >
                    comunicaciones@vtg.com.co
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:productorejecutivo@vtg.com.co"
                    color="text"
                    isExternal
                    block
                  >
                    productorejecutivo@vtg.com.co
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:administracion@vtg.com.co"
                    color="text"
                    isExternal
                    block
                  >
                    administracion@vtg.com.co
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Text
                h2
                size="1.5rem"
                color="secondary"
                css={{ textAlign: "center" }}
              >
                {t("contact.social")}
              </Text>
              <ul>
                <li>
                  <Link
                    href="https://www.instagram.com/camila.osoriof/"
                    color="text"
                    isExternal
                    block
                  >
                    Instagram: @camila.osoriof
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/channel/UCiALvWWcIUYXzbrBVZ0hEWQ"
                    color="text"
                    isExternal
                    block
                  >
                    YouTube: Camila Osorio
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.vtg.com.co/talentodetail?id=134"
                    color="text"
                    isExternal
                    block
                  >
                    VTG: Camila Osorio
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </Container>
      </main>
    </>
  );
};

export default Contact;
