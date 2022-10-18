import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

const Reel = () => {
  return (
    <div className='page'>
      <p>Reel</p>
    </div>
  )
}

export default Reel