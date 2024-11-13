"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./facilities.module.css";

const facilityImages = [
  "/images/facility1.jpg",
  "/images/facility2.jpg",
  "/images/facility3.jpg",
];

const facilitiesList = [
  "Wi-Fi Technology Throughout",
  "Pool Teaching Rooms (25-80 Students)",
  "Specialist Faculty Facilities",
  "Double Height Lecture Theatre",
  "Three-Storey Glass Open Atrium",
  "Meeting Rooms",
  "Office Accommodation",
  "Specialist IT Facilities",
  "Reception Desk Area",
  "Catering Outlet",
  "Accessible Parking for Disabled Badge Holders",
  "Cycle Racks",
  "Gallery",
];

export default function Facilities() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % facilityImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <h1>Our Facilities</h1>
        <p>
          The College is located in the attractive and pleasantly refurbished
          Building. The building houses computing laboratories, and
          lecture/tutorial rooms. It has its own catering facilities and student
          work areas. There is also a car park to the back of the building.
        </p>
        <p>
          Our building has space of 9500m², houses over 240 staff and provides
          teaching space for more than 1600 students.
        </p>
      </section>

      <div className={styles.facilitiesLayout}>
        <section className={styles.facilitiesSection}>
          <h2>Our Facilities Include:</h2>
          <ul className={styles.facilitiesList}>
            {facilitiesList.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </section>

        <section className={styles.mapSection}>
          <h2>Location</h2>
          <Image
            src="/images/map.jpg"
            alt="College Location Map"
            width={800}
            height={400}
            className={styles.map}
            priority
          />
        </section>
      </div>

      <section className={styles.slideshow}>
        {facilityImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Facility image ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
          />
        ))}
        <div className={styles.slideshowControls}>
          <button
            className={styles.slideshowButton}
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? facilityImages.length - 1 : prev - 1
              )
            }
          >
            Previous
          </button>
          <button
            className={styles.slideshowButton}
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % facilityImages.length)
            }
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
