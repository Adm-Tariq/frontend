import { useEffect, useRef } from "react";

const Ad728x90 = (props) => {
  const banner = useRef(null);

  const atOptions = {
    key: "90882ba3881c2aa2a5d4c801c7c59635",
    format: "iframe",
    height: 90,
    width: 728,
    params: {},
  };

  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//aboardstepbugs.com/90882ba3881c2aa2a5d4c801c7c59635/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);

  return (
    <div
      ref={banner}
      className={`${props.display} mx-auto my-3 text-center`}
    ></div>
  );
};

export default Ad728x90;
