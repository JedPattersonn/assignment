import Image from "next/image";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <h2>How to find us:</h2>
        <p>Cantor College</p>
        <p>Main Street</p>
        <p>Sheffield SC4 2BB</p>
        <p>
          Tel: <a href="tel:01321-2340-235">(01321) 2340 235</a>
        </p>
        <p>
          Fax: <a href="tel:01321-2340-236">(01321) 2340 236</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:info@cantorcollege.ac.uk">info@cantorcollege.ac.uk</a>
        </p>
      </div>
      <div className={styles.imageSection}>
        <Image
          src="/images/students.jpg"
          alt="Cantor College Logo"
          fill
          priority
        />
      </div>
    </div>
  );
}
