import Script from "next/script";

export const ScriptGeneral = () => {
  return (
    <>
      {/* google start */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JBFF7RBJKL"
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', 'G-JBFF7RBJKL');
        `}
      </Script>
      {/* google end */}

      {/* yandex start */}
      <Script id="yandex-metric">
        {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
        
        ym(95788534, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
        });
      `}
      </Script>
      {/* yandex end */}

      {/* google start */}
      <Script id="google-analytics-2">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N98X9TZ');
        `}
      </Script>
      {/* google end */}

      {/* conversion start */}
      <Script id="conversion">
        {`
              gtag('event', 'conversion', {'send_to': 'AW-10818875356/BHWMCPXAn84YENzf66Yo'});
        `}
      </Script>
      {/* conversion end */}
    </>
  );
};
