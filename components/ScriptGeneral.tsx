import Image from "next/image";
import Script from "next/script";

export const ScriptGeneral = () => {
  return (
    <>
      {/* google start */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JBFF7RBJKL" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', 'G-JBFF7RBJKL');
        `}
      </Script>
      {/* google end */}

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

      <noscript>
        <div>
          <Image
            src="https://mc.yandex.ru/watch/95788534"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};
