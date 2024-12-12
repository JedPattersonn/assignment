import styles from "./styles.module.css";

export default function InformationForStaffPage() {
  const departments = [
    {
      title: "News",
      content:
        "Cantor College recently hosted the Software Engineering student of the year awards. Short-listed candidates from around the country attended the one day event.",
    },
    {
      title: "Academic Registry",
      content:
        "For academic regulations, assessment, awards, student records and course validation.",
    },
    {
      title: "Catering Services",
      content:
        "Contact the Catering Services regarding on and off-site catering.",
    },
    {
      title: "Financial Services",
      content:
        "The financial team based on the 2nd Floor are responsible for all areas of student finance as well as College budgeting.",
    },
    {
      title: "Information Systems Services",
      content:
        "The ISS team delivers the College's computing facilities including all hardware and software. They also run the staff helpdesk.",
    },
    {
      title: "Marketing Services",
      content:
        "The Marketing Team will help promote events and new courses. They will help with press release preparation.",
    },
    {
      title: "Personnel Services",
      content:
        "All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor.",
    },
    {
      title: "Facilities",
      content:
        "The facilities are responsible for the general care and maintenance of the College. All enquiries via the main helpdesk.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Information for Staff</h1>
      <div className={styles.grid}>
        {departments.map((department, index) => (
          <div key={index} className={styles.card}>
            <h2>{department.title}</h2>
            <p>{department.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
