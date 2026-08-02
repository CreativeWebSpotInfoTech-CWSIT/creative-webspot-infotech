import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical, schema }) {
    const siteName = "Creative WebSpot Info Tech";
    const url = "https://creativewebspot.com";

    return (
        <Helmet>
            <title>{`${title} | ${siteName}`}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`${url}${canonical}`} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={`${url}${canonical}`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}