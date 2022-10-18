import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

const Project = () => {
  return (
    <div className='page'>
      <p>Proyecto</p>
    </div>
  )
}

export default Project