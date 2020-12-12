import Head from "next/head";
import React from "react";

export function SeoHead({ title, description, imageUrl })
{
    return <Head>
        <title>{title}</title>
        <meta property="og:title" content={title}/>
        <meta name="description" content={description}/>
        <meta property="og:description" content={description}/>
        <meta property="og:image" content={imageUrl}/>
        <meta name="twitter:card" content="summary_large_image" />
    </Head>
}