import Head from 'next/head';

const CustomHead = ({ title }) => {
  const defaultTitle = 'Yohans Hailu Kasaw | Full Stack Web Developer';
  const defaultDescription =
    "Yohans Hailu Kasaw is an energetic Software Engineer with over 4 years of experience in designing and implementing dynamic web applications. Ranked in the top 2.5% on LeetCode, Yohans specializes in cloud technologies, DevOps, and web development using React.js and Vue.js.";

  return (
    <Head>
      <title>{title ? `${title} | Yohans Kasaw` : defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta
        name="keywords"
        content="Yohans Hailu Kasaw, Full Stack Developer, Web Developer, Software Engineer, React.js, Vue.js, MERN Stack, DevOps, Cloud Technologies, API Development, Microservices, CI/CD, LeetCode Top 2.5%"
      />
      <meta name="author" content="Yohans Hailu Kasaw" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? `${title} | Yohans Kasaw` : defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://www.yohanskasaw.com" />
      <meta property="og:site_name" content="Yohans Hailu Kasaw Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | Yohans Kasaw` : defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta name="twitter:creator" content="@yohanskasaw" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Yohans Hailu Kasaw",
            url: "https://www.yohanskasaw.com",
            email: "mailto:yohanshailukasaw@gmail.com",
            sameAs: [
              "https://www.linkedin.com/in/yohans-hailu/",
              "https://github.com/yohans-kasaw",
            ],
            jobTitle: "Full Stack Web Developer",
            description:
              "Energetic Software Engineer with over 4 years of experience in designing and implementing dynamic web applications. Ranked in the top 2.5% on LeetCode, adept at solving complex problems. Proficient in cloud technologies, DevOps, and web development using React.js and Vue.js.",
            worksFor: {
              "@type": "Organization",
              name: "OwlBox AI",
            },
            alumniOf: [
              {
                "@type": "EducationalOrganization",
                name: "Addis Ababa University",
              },
              {
                "@type": "EducationalOrganization",
                name: "Africa to Silicon Valley (A2SV)",
              },
            ],
          }),
        }}
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Additional Meta Tags */}
      <link rel="canonical" href="https://www.yohanskasaw.me" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Yohans Hailu Kasaw',
};
