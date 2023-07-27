import Footer from "../../Components/Footer/Footer";
import MainPage from "../../Components/MainPage/MainPage";
import Navbar from "../../Components/Navbar/Navbar";

import styles from "./style";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <MainPage />
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
