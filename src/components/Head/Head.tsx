import { Helmet } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | Vite template` : undefined}
      defaultTitle="Vite template"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
