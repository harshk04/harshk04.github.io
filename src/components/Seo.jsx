import { Helmet } from 'react-helmet-async';

const defaultMeta = {
  title: 'Harsh Kumawat | AI/ML Engineer & Data Scientist',
  description:
    'Portfolio of Harsh Kumawat — ECE undergraduate specialising in AI/ML, data science, and human-centred product builds.',
  url: 'https://harshk.is-a.dev',
  image: 'https://harshk.is-a.dev/images/profile2.jpeg',
};

const Seo = ({ title, description, image, url, children }) => {
  const metaTitle = title ? `${title} · Harsh Kumawat` : defaultMeta.title;
  const metaDescription = description ?? defaultMeta.description;
  const metaUrl = url ?? defaultMeta.url;
  const metaImage = image ?? defaultMeta.image;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={metaTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <link rel="canonical" href={metaUrl} />
      {children}
    </Helmet>
  );
};

export default Seo;
