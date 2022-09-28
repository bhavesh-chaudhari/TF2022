import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(formValues);

    // fetch("/api/mail", {
    //   method: "POST",
    //   body: JSON.stringify(formValues),
    // }).then((res) => {
    //   console.log(res);
    // });
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["heading"]}>
          <h2>Have Inquiries ? Leave us a Message...</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <div className={styles["field"]}>
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} type="text" id="name" name="name" required />
          </div>
          <div className={styles["field"]}>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className={styles["field"]}>
            <label htmlFor="message">Message</label>
            <textarea spellCheck="false" onChange={handleChange} id="message" name="message" required/>
          </div>
          <button>Send</button>
        </form>
        <div className={styles["note"]}>
          <p>We will reach out to you soon</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
