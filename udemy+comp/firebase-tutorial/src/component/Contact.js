import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    pnumber: "",
    message: "",
  });
  let name, value;
  const onChange = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { fname, lname, pnumber, message } = user;

    if (fname && lname && pnumber && message) {
      const res = await fetch(
        "https://fir-tutorial-7368b-default-rtdb.firebaseio.com/firebase.json",
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            fname,
            lname,
            pnumber,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          fname: "",
          lname: "",
          pnumber: "",
          message: "",
        });

        alert("Your Data Stored");
      }
    } else {
      alert("Please fill all data");
    }
  };
  return (
    <>
      <h3>Contact Form</h3>

      <div class="container">
        <form method="post">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            required
            placeholder="Your name.."
            value={user.fname}
            onChange={onChange}
          />
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            required
            placeholder="Your last name.."
            value={user.lname}
            onChange={onChange}
          />
          <label for="pNumber">Phone No.</label>
          <br />
          <input
            type="number"
            id="pnumber"
            name="pnumber"
            required
            placeholder="Your no.."
            value={user.pnumber}
            onChange={onChange}
          />
          <br />
          <label for="message">Message</label>
          <br />
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            value={user.message}
            onChange={onChange}
          ></textarea>
          <br />
          <input type="submit" value="Submit" onClick={postData} />
        </form>
      </div>
    </>
  );
};

export default Contact;
