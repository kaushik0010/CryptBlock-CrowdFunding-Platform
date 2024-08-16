import "../styles/globals.css";

import { Navbar, Footer } from "../Components";
import {CrowdFundingProvider} from '../Context/CrowdFunding'

export default function App({ Component, pageProps }) {
  return(
    <>
      <CrowdFundingProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CrowdFundingProvider>
    </>
  ); 
}
