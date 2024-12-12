import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>Contact Us</h3>
          <p>Email: info@cantorcollege.ac.uk</p>
          <p>Phone: (01321) 2340 235</p>
          <p>Address: Cantor College, Main Street, Sheffield, SC4 2BB</p>
        </div>

        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/information-for-students">
                Information for Students
              </Link>
            </li>
            <li>
              <Link href="/information-for-staff">Information for Staff</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Follow Us</h3>
          <ul>
            <li>
              <Link href="https://twitter.com/cantorcollege" target="_blank">
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/school/cantorcollege/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} Cantor College. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
