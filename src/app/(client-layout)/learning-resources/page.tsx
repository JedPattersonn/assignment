import styles from "./styles.module.css";

export default function LearningResourcesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Library and Resource Centre Rules</h1>

      <div className={styles.section}>
        <h2>Introduction</h2>
        <p>
          All students and staff of the College are entitled to register as
          members of the Library and Resource Centre and to use the facilities
          for the purpose of their course of study or College employment.
        </p>
        <p>
          Membership may also be extended to other individuals and to persons
          nominated from other organisations: a fee is usually charged. Access
          to the Library and Resource Centre for study purposes may be made
          available to non-members by arrangement.
        </p>
        <p>
          Use of facilities implies acceptance of the Library and Resource
          Centre rules. These are designed to protect the interests of all users
          and to ensure that the College operates within the law and can carry
          out its functions efficiently and effectively.
        </p>
      </div>

      <div className={styles.section}>
        <h2>A. Access</h2>
        <ol>
          <li>
            The use of Library and Resource Centre facilities is normally
            limited to use for the educational and other purposes of the
            College.
          </li>
          <li>
            All individuals wishing to become members must comply with the
            registration procedures. These include an undertaking to abide by
            Library and Resource Centre rules.
          </li>
          <li>
            Non-members must sign the Visitors&apos; Book on each visit, and may
            be required to produce written identification.
          </li>
          <li>
            ID cards issued by the College are not transferable from one person
            to another. The person named on each card is responsible for all
            items borrowed on it.
          </li>
        </ol>
      </div>

      <div className={styles.section}>
        <h2>B. Use of Facilities</h2>
        <ol>
          <li>
            The Library is not responsible for loss of, or damage to, personal
            belongings. Users must take reasonable precautions against theft of
            their belongings.
          </li>
          <li>
            All users are required to conduct themselves quietly throughout the
            Library. No conversation is permitted in those areas designated as
            &apos;Silent&apos; areas.
          </li>
          <li>
            Personal stereos may not be used in the Library and Resource Centre.
          </li>
          <li>Mobile phones must be turned off in all Library study areas.</li>
          <li>
            Users should not make use of mains electrical supplies without
            proper testing.
          </li>
          <li>Eating and drinking are not permitted in any public areas.</li>
          <li>
            Action will be taken against any person misusing furniture,
            facilities or materials.
          </li>
        </ol>
      </div>
    </div>
  );
}
