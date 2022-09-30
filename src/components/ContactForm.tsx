import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";
import { PulseLoader } from "react-spinners";

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]  = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // console.log(formValues);
    setLoading(true)

    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formValues),
    }).then((res) => {
      // console.log(res);
      if(res.status === 200){
        setSubmitted(true)
      }
      setLoading(false)
    });

    setFormValues(initialFormValues)
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
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              required
              value={formValues.name}
            />
          </div>
          <div className={styles["field"]}>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              required
              value={formValues.email}
            />
          </div>
          <div className={styles["field"]}>
            <label htmlFor="message">Message</label>
            <textarea
              spellCheck="false"
              onChange={handleChange}
              id="message"
              name="message"
              required
              value={formValues.message}
            />
          </div>
          {loading ? (
            <button>
              <PulseLoader size="8px"></PulseLoader>
            </button>
          ) : (
            <button
              style={
                submitted
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
              disabled={submitted ? true : false}
            >
              {submitted ? "Sent ✓" : "Send"}
            </button>
          )}
        </form>
        <div className={styles["note"]}>
          <p>We will reach out to you soon</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
