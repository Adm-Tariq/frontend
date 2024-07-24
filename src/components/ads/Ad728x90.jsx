import { useEffect, useRef } from "react";

const Ad728x90 = (props) => {
  const bannerAd728x90 = useRef(null);

  const atOptions = {
    key: "90882ba3881c2aa2a5d4c801c7c59635",
    format: "iframe",
    height: 90,
    width: 728,
    params: {},
  };

  useEffect(() => {
    if (bannerAd728x90.current && !bannerAd728x90.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//aboardstepbugs.com/90882ba3881c2aa2a5d4c801c7c59635/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      bannerAd728x90.current.append(conf);
      bannerAd728x90.current.append(script);
    }
  }, [bannerAd728x90]);

  return (
    <div
      ref={bannerAd728x90}
      className={`${props.display} mx-auto my-3 text-center`}
    ></div>
  );
};

export default Ad728x90;
