import React from "react";
import TextField from "@material-ui/core/TextField";

const ContactManager = () => {
  return (
    <React.Fragment>
      <p>Contact Us</p>
      <p>Fill in the form below we will get back to you.</p>
      <div className="contact-container">
        <TextField
          className="contact-text"
          name="name"
          label="Name"
          type="text"
          variant="outlined"
        />

        <TextField
          className="contact-text"
          name="email"
          label="EMail"
          type="text"
          variant="outlined"
        />

        <TextField
          className="contact-text"
          name="phone"
          label="Phone"
          type="text"
          variant="outlined"
        />

        <br />
        <TextField
          multiline
          rows={4}
          rowsMax={4}
          type="text"
          variant="outlined"
          style={{ width: "100%", marginTop: "20px" }}
        />
        <br />
        <button >Submit</button>
      </div>
    </React.Fragment>
  );
};

export default ContactManager;
