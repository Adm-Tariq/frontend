import { useEffect, useRef } from "react";

const Ad320x50 = (props) => {
  const bannerAd320x50 = useRef(null);

  const atOptions = {
    key: "2d78fc9e22aaee9731ba17900957e441",
    format: "iframe",
    height: 50,
    width: 320,
    params: {},
  };

  useEffect(() => {
    if (bannerAd320x50.current && !bannerAd320x50.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//aboardstepbugs.com/2d78fc9e22aaee9731ba17900957e441/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      bannerAd320x50.current.append(conf);
      bannerAd320x50.current.append(script);
    }
  }, [bannerAd320x50]);

  return (
    <div
      ref={bannerAd320x50}
      className={`${props.display} mx-auto my-3 text-center`}
    ></div>
  );
};

export default Ad320x50;
