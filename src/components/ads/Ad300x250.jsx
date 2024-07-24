import { useEffect, useRef } from "react";

const Ad300x250 = (props) => {
  const bannerAd300x250 = document.getElementsByClassName("bannerAd300x250");

  const atOptions = {
    key: "6fa7ddaabcbbdfb8759cd947899b1c60",
    format: "iframe",
    height: 250,
    width: 300,
    params: {},
  };

  useEffect(() => {
    for (let i = 0; i < bannerAd300x250.length; i++) {
      console.log(bannerAd300x250[i]);
      if (bannerAd300x250[i] && !bannerAd300x250[i].firstChild) {
        const conf = document.createElement("script");
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `//aboardstepbugs.com/6fa7ddaabcbbdfb8759cd947899b1c60/invoke.js`;
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

        bannerAd300x250[i].appendChild(conf);
        bannerAd300x250[i].appendChild(script);
      }
    }
  }, [bannerAd300x250]);

  return (
    <div className={`${props.display} mx-auto my-3 bannerAd300x250`}></div>
  );
};

export default Ad300x250;
