import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer_outer_container}>
      <div className={styles.footer_inner_container}>
        <div className={styles.footer_icons}>
          <FacebookOutlinedIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>

        <div className={styles.footer_data}>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Legal Notice</li>
              <li>Cookie Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>About This Project</li>
              <li>Portfolio Projects</li>
              <li>Developer Info</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <li>Source Code (Demo)</li>
              <li>Educational Use Only</li>
            </ul>
          </div>
        </div>

        <div className={styles.service_code}>
          <p>Demo Project</p>
        </div>

        {/* IMPORTANT DISCLAIMER SECTION */}
        <div
          style={{
            marginTop: "15px",
            fontSize: "12px",
            textAlign: "center",
            color: "#999",
          }}
        >
          <p>
            <strong>Disclaimer:</strong> This website is a personal portfolio
            project created for educational and demonstration purposes only. It
            is not affiliated with Netflix, Inc. No real services,
            subscriptions, or commercial transactions are offered on this site.
          </p>
        </div>

        <div className={styles.Copy_write}>
          &copy; 2026 Demo Project by Berhanu Mengesha – All Rights Reserved
        </div>
      </div>
    </div>
  );
}
