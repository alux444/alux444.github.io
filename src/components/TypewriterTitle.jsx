import { useEffect, useRef } from "react";

const TypewriterTitle = () => {
  const titles = ["Software Engineer at Spark NZ", "UoA software engineering student"];

  const isCancelled = useRef(false);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const typewrite = async () => {
    console.log("running typewrite");
    let wordIdx = 0;
    // eslint-disable-next-line no-constant-condition
    while (!isCancelled.current) {
      let word = titles[wordIdx];
      let element = document.getElementById("job-titles");

      for (let i = 0; i < word.length; i++) {
        element.innerHTML += word.charAt(i);
        await sleep(100);
      }

      await sleep(2000);

      for (let i = 0; i < word.length; i++) {
        element.innerHTML = element.innerHTML.slice(0, -1);
        await sleep(100);
      }

      await sleep(500);
      wordIdx = (wordIdx + 1) % titles.length;
    }
  };

  useEffect(() => {
    async function run() {
      await typewrite();
    }
    run();
    return () => {
      isCancelled.current = true;
    };
  }, []);

  return (
    <div className="flex flex-row max-w-[90vw] flex-wrap text-center min-h-8">
      <p id="job-titles" className="titles" />
      <span id="cursor">|</span>
    </div>
  );
};

export default TypewriterTitle;
