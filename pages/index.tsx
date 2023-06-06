import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
          <Image
            src="/background_7.svg"
            width={100}
            height={100}
            style={{ borderRadius: "10%", minWidth:"150px", width: "42%", height: "42%" }}
            alt="Hero asset, NFT marketplace"
            quality={100}
            className={styles.heroAsset}
          />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Non-fungible
                </span>
                <br />
                rolled up.
              </h1>
              <p className={styles.heroSubtitle}>
                Welcome to the {" "}
                <Link
                  className={styles.link}
                  href="https://celestia.org"
                  target="_blank"
                >
                  build market
                </Link>
                , the first generative art marketplace on Celestia.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/browse">
                  Browse
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://github.com/jcstein/market"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
