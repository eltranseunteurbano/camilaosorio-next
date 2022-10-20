import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
};

const Reel = () => {
  return (
    <main style={{ backgroundColor: "#000", inlineSize: "100%", blockSize: "calc(100vh - 76px)" }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/EXS_WqpnH80"
        title="DEMO REEL CAMILA OSORIO"
        frameborder="0"
        allowfullscreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ position: 'absolute', insetBlockStart: 76, insetInlineStart: 0, inlineSize: '100%', blockSize: 'calc(100% - 76px)'}}
      ></iframe>
    </main>
  );
};

export default Reel;
