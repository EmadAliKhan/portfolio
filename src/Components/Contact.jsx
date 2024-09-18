import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import { Card, CardContent, Grid, TextField } from "@mui/material";
// import { addDoc, collection } from 'firebase/firestore';
import { db, addDoc, collection } from "./Firebase";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(
      "name",
      name,
      "email",
      email,
      "subject",
      subject,
      "message",
      message
    );
    console.log(db);

    try {
      if (!name || !email || !subject || !message) {
        alert("fill all the fields");
      }

      const docRef = await addDoc(collection, (db, "myData"), {
        name,
        email,
        subject,
        message,
      });
      console.log("Message Sent", docRef);
      console.log("Message Sent", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
      // alert("something went wrong while sending the data")
    }
  };

  return (
    <>
      <div
        className="container text-white"
        style={{ marginTop: "140px" }}
        id="contact"
      >
        <section className="row">
          <div className="col-12">
            <h1 className="double-underline">Contact Me</h1>

            <div className="d-flex flex-column align-items-center justify-content-center">
              <h4 className="pt-4 text-danger fw-bold">
                Have U Any Questions ?
              </h4>
              <p className="pt-2 fw-bold">I'M AT YOUR SERVICE</p>
            </div>
          </div>

          {/* location */}
          <div
            className="col-12 col-sm-6 col-md-4 mt-5 mb-3"
            data-aos="flip-left"
          >
            <div className="text-center">
              <p>
                <LocationOnIcon className="fs-1" />
              </p>
              <div className="text-white">
                <h5 className="fw-bold">ADDRESS:</h5>
                <p>
                  R-54,55 Sector 2B, Gulshan-e-Zahoor , Nizami Road, Lines Area
                  Karachi
                </p>
              </div>
            </div>
          </div>

          {/* email */}
          <div
            className="col-12 col-sm-6 col-md-4 mt-5 mb-3"
            data-aos="flip-up"
          >
            <div className="text-center">
              <p>
                <EmailIcon className="fs-1" />
              </p>
              <div className="text-white">
                <h5 className="fw-bold">Email:</h5>
                <p>emadalikhan5@gmail.com</p>
              </div>
            </div>
          </div>

          {/* website */}
          <div
            className="col-12 col-sm-6 col-md-4 mt-5 mb-3"
            data-aos="flip-right"
          >
            <div className="text-center">
              <p>
                <LanguageIcon className="fs-1" />
              </p>
              <div className="text-white">
                <h5 className="fw-bold">Website:</h5>
                <p>www.emadkhan.com</p>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <h4 className="pt-4 text-danger fw-bold">SEND ME AN EMAIL</h4>
            <p className="pt-2 fw-bold">I'M VERY RESPONSIVE TO MESSAGES</p>
          </div>

          <Card
            data-aos="flip-up"
            style={{
              margin: "0 auto",
              padding: "20px",
              background: "transparent",
            }}
          >
            <CardContent>
              <form onSubmit={sendMessage}>
                <Grid container spacing={2}>
                  <Grid xs={6} item>
                    <TextField
                      required
                      onChange={(e) => setName(e.target.value)}
                      label="Name"
                      placeholder="name"
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        style: { color: "white" }, // Change label color to white
                      }}
                      InputProps={{
                        style: { color: "white" }, // Change input text color to white
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "white", // Default border color
                            borderRadius: "25px", // Rounded corners
                          },
                          "&:hover fieldset": {
                            borderColor: "white", // Border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "white", // Border color when focused
                          },
                          "& textarea": {
                            color: "white", // Ensure multiline text is white
                          },
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "white", // Placeholder text color
                          opacity: 1, // Ensure full opacity for placeholder
                        },
                      }}
                    />
                  </Grid>
                  <Grid xs={6} item>
                    <TextField
                      required
                      label="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email"
                      variant="outlined"
                      fullWidth
                      type="email" // Ensure the password is masked
                      InputLabelProps={{
                        style: { color: "white" }, // Change label color to white
                      }}
                      InputProps={{
                        style: { color: "white" }, // Change input text color to white
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "white", // Default border color
                            borderRadius: "25px", // Rounded corners
                          },
                          "&:hover fieldset": {
                            borderColor: "white", // Border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "white", // Border color when focused
                          },
                          "& textarea": {
                            color: "white", // Ensure multiline text is white
                          },
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "white", // Placeholder text color
                          opacity: 1, // Ensure full opacity for placeholder
                        },
                      }}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      required
                      label="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="subject"
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        style: { color: "white" }, // Change label color to white
                      }}
                      InputProps={{
                        style: { color: "white" }, // Change input text color to white
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "white", // Default border color
                            borderRadius: "25px", // Rounded corners
                          },
                          "&:hover fieldset": {
                            borderColor: "white", // Border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "white", // Border color when focused
                          },
                          "& textarea": {
                            color: "white", // Ensure multiline text is white
                          },
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "white", // Placeholder text color
                          opacity: 1, // Ensure full opacity for placeholder
                        },
                      }}
                    />
                  </Grid>

                  <Grid xs={12} item>
                    <TextField
                      required
                      onChange={(e) => setMessage(e.target.value)}
                      label="Message"
                      placeholder="Write your message here..."
                      variant="outlined"
                      multiline
                      rows={4}
                      fullWidth
                      InputLabelProps={{
                        style: { color: "white" }, // Change label color to white
                      }}
                      InputProps={{
                        style: { color: "white" }, // Change input text color to white
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "white", // Default border color
                            borderRadius: "25px", // Rounded corners
                          },
                          "&:hover fieldset": {
                            borderColor: "white", // Border color on hover
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "white", // Border color when focused
                          },
                          "& textarea": {
                            color: "white", // Ensure multiline text is white
                          },
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "white", // Placeholder text color
                          opacity: 1, // Ensure full opacity for placeholder
                        },
                      }}
                    />
                  </Grid>

                  <Grid
                    xs={12}
                    marginTop={2}
                    item
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <button className="button" type="submit">
                      Send Message
                    </button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
};

export default Contact;
