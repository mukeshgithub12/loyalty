import Head from "next/head";
// import Script from "next/script";
import Breadcrumb from "../components/Breadcrumb";
import Dashboard from "./Dashboard";


export default function Home() {
  return (
    <>
      <Head>
        <title>Loyalty</title>
        <meta name="description" content="Zenscale" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- vendor css (always place at last) --> */}

      </Head>
      <div className="pcoded-main-container">
        <Breadcrumb page_title="Dashboard"/>
        <div className="pcoded-content">
          <div className="dashboard_main pcoded-content zen_card bg-white">
            <Dashboard/>
          </div>
        </div>
      </div>
    </>
  );
}
