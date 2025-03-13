import { FAQ } from '@/components/data/faq';
import Script from 'next/script';

export default function Faq() {
    const structuredData = {
        "@context": "http://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ.map(item => ({
            "@type": "Question",
            "name": item.Question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.Answer
            }
        }))
    };

    return (
        <Script 
            id="faq-schema"
            type="application/ld+json"
        >
            {JSON.stringify(structuredData)}
        </Script>
    );
}