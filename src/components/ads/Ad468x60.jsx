import { useEffect, useRef } from "react";

const Ad468x60 = (props) => {
  const bannerAd468x60 = useRef(null);

  const atOptions = {
    key: "9de87720c42fee208ed5b524dc9bf2a6",
    format: "iframe",
    height: 60,
    width: 468,
    params: {},
  };

  useEffect(() => {
    if (bannerAd468x60.current && !bannerAd468x60.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//aboardstepbugs.com/9de87720c42fee208ed5b524dc9bf2a6/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      bannerAd468x60.current.append(conf);
      bannerAd468x60.current.append(script);
    }
  }, [bannerAd468x60]);

  return (
    <div
      ref={bannerAd468x60}
      className={`${props.display} mx-auto my-3 text-center`}
    ></div>
  );
};

export default Ad468x60;
