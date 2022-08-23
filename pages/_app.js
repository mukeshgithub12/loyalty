import Navbar from "../components/Navbar";
import Header from "../components/Header";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, []);
  const [progress, setProgress] = useState(0);

  return (
    <>
    
      <LoadingBar
        color="#97cf66"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={400}
      />
      <Navbar />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
