"use-client"
import { FAQ } from '@/components/data/faq';
import React, { useEffect } from "react";

const Faq = () => {

    const structuredData = React.useMemo(() => ({
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
    }), [])

    useEffect(() => {
        const faqScript = document.createElement('script');
        faqScript.type = "application/ld+json"
        faqScript.innerHTML = JSON.stringify(structuredData);
        document.head.appendChild(faqScript);

        return () => {
            // Cleanup the added script when the component unmounts
            document.head.removeChild(faqScript);
        };
    }, []);

    return null;
};

export default Faq;