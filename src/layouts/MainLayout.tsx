import Navbar from "@/components/common/Navbar/Navbar";
import TopOfferBar from "@/components/common/TopOfferBar/TopOfferBar";
import Footer from "@/components/common/Footer/Footer";

import styles from "./mainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({
  children,
}: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <TopOfferBar />
        <Navbar />
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;