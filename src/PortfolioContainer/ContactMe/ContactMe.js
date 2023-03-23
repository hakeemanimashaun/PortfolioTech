import React, { useRef, useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);
  const form = useRef();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    // try {
    //   let data = {
    //     name,
    //     email,
    //     message,
    //   };
    //   setBool(true);
    //   const res = await axios.post(`/contact`, data);
    //   if (name.length === 0 || email.length === 0 || message.length === 0) {
    //     setBanner(res.data.msg);
    //     toast.error(res.data.msg);
    //     setBool(false);
    //   } else if (res.status === 200) {
    //     setBanner(res.data.msg);
    //     toast.success(res.data.msg);
    //     setBool(false);

    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    setBool(true)
    emailjs
      .sendForm(
        "service_ro9iidh",
        "template_auayqp3",
        form.current,
        "Tcdan_aI-lkMT7jPr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setBanner(result.text);
          toast.success(result.text);
          setBool(false);

          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          toast.success(error.text);
          setBool(false);
        }
      );
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>{" "}
          <a href="https://www.linkedin.com/in/hakeem-animashaun-b1600715a/">
            <i className="fa fa-linkedin-square" />
          </a>
          <a href="https://medium.com/@hakeem.animashaun">
            <i className="fa fa-medium" />
          </a>
          <a href="https://github.com/hakeemanimashaun?tab=repositories">
            <i className="fa fa-github-square" />
          </a>
          <a href="#">
            <i className="fa fa-youtube-square" />
          </a>
          <a href="https://twitter.com/itshk_baby">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form ref={form} onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} name="email" />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} name="message" />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
        <button
          className="up-btn"
          onClick={() => ScrollService.scrollHandler.scrollToHome()}
        >
          ⬆️
        </button>
      </div>
    </div>
  );
}
