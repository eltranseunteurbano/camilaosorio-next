import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

const Contact = () => {
  return (
    <div className='page'>
      <p>Contacto</p>
    </div>
  )
}

export default Contact