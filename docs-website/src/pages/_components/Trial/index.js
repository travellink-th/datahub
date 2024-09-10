import React from "react";
import styles from "./trial.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

const Trial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.trial}>
        <div className={styles.trial_left}>
          <div className={styles.left_content}>
            <span className="">Discover. Observe. Govern.</span>
            <p className="">
              Get a free trial of<br/><b>DataHub</b> cloud today
            </p>
            <div className={styles.btn_div}>
              <a>Book a Demo</a>
              <a>Product Tour</a>
            </div>
            <Link className={styles.start_arrow}>Get started with Core →</Link>
          </div>
        </div>
        <div className={styles.trial_right}>
          <div className={styles.right_content}>
            <div className={styles.right_l}>
              <div className={styles.soc}>
                <img
                  width={60}
                  height={60}
                  src={useBaseUrl("/img/lock-soc.svg")}
                />
                SOC 2 <br />
                compliant
              </div>
              <div className={styles.cost}>
                <img
                  width={60}
                  height={60}
                  src={useBaseUrl("/img/dollar.svg")}
                />
                Reduce tool clutter,
                <br /> operational burden <br /> and costs.
              </div>
            </div>
            <div className={styles.right_r}>
              <div className={styles.enterprise}>
                <img
                  width={60}
                  height={60}
                  src={useBaseUrl("/img/building.svg")}
                />
                Built for <br /> Enterprize Scale.
              </div>
              <div className={styles.link}>
                <img width={60} height={75} src={useBaseUrl("/img/link.svg")} />
                One link to rule
                <br /> them all.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
