import { useEffect, useRef } from "react";

const Ad300x250 = (props) => {
  const bannerAd300x250 = useRef(null);

  const atOptions = {
    key: "6fa7ddaabcbbdfb8759cd947899b1c60",
    format: "iframe",
    height: 250,
    width: 300,
    params: {},
  };

  useEffect(() => {
    if (bannerAd300x250.current && !bannerAd300x250.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//aboardstepbugs.com/6fa7ddaabcbbdfb8759cd947899b1c60/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      bannerAd300x250.current.append(conf);
      bannerAd300x250.current.append(script);
    }
  }, [bannerAd300x250]);

  return (
    <div
      key={props.key}
      ref={bannerAd300x250}
      className={`${props.display} mx-auto my-3 `}
    ></div>
  );
};

export default Ad300x250;
