import '../css/main.css';
import React from 'react';
import Script from 'next/script';
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script id="yandex-metrica" strategy="afterInteractive">
      {`
         (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
         m[i].l=1*new Date();
         for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
         k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
         (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
         ym(98607127, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
         });
         `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4YLD4C59R1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4YLD4C59R1');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};
export default App;
