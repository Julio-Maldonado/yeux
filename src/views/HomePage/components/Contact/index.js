import React, { useReducer } from 'react';

import Modal from 'react-responsive-modal';
import Loader from 'react-loader-spinner';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../../../../components/H2';
import H3 from '../../../../components/H3';
import Img from '../../../../components/Img';
import ContactDesign from './contact.png';
import CenteredSection from '../../../../components/CenteredSection';
import YeuxLogo from './Yeux_50px_v2.png';

const sendEmail = async ({ name, emailAddress, subject, message }) => {
  try {
    const resp = await fetch(
      'https://blooming-beyond-72124.herokuapp.com/api/send_email',
      {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({ name, emailAddress, subject, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return resp.json();
  } catch (e) {
    return { success: false };
  }
};

const SectionWrapper = styled.div`
  padding: 0;
  margin: 0;
  padding-top: ${props => props.paddingTop};
`;

const Contact = ({ id, width, height, screenState }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      emailAddress: '',
      subject: 'General Question',
      message: '',
      modalFlag: false,
      loading: false,
      modalText: '',
    },
  );

  const handleChange = evt => {
    const { name } = evt.target;
    const newValue = evt.target.value;
    setUserInput({ [name]: newValue });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setUserInput({ loading: true });
    sendEmail(userInput).then(({ success }) => {
      setUserInput({ loading: false });
      openModal();
      if (success) {
        setUserInput({ modalText: 'Email successfully sent!' });
      } else {
        setUserInput({
          modalText: 'Email was not sent out...try again later.',
        });
      }
    });
  };

  const openModal = () => {
    setUserInput({ modalFlag: true });
  };

  const closeModal = () => {
    setUserInput({ modalFlag: false });
  };

  let [imageMaxWidth, logoImageHeight, logoImageMarginLeft] = [0, 0, 0];
  let paddingTop = "";
  if (screenState === "wide") {
    imageMaxWidth = width * 0.5;
    logoImageHeight = 20;
    logoImageMarginLeft = 4;
    paddingTop = "1vh";
  } else if (screenState === "full") {
    imageMaxWidth = width * 0.35;
    logoImageHeight = 20;
    logoImageMarginLeft = 4;
    paddingTop = "1vh";
  } else if (screenState === "pacman") {
    imageMaxWidth = width * 0.5;
    logoImageHeight = 17;
    logoImageMarginLeft = 4;
    paddingTop = "1vh";
  } else if (screenState === "half") {
    imageMaxWidth = width * 0.6;
    logoImageHeight = 17;
    logoImageMarginLeft = 3;
    paddingTop = "7.5vh";
  } else if (screenState === "mobile") {
    imageMaxWidth = width * 1;
    logoImageHeight = 14;
    logoImageMarginLeft = 2;
    paddingTop = "3vh";
  }

  return (
    <SectionWrapper id={id} paddingTop={paddingTop}>
      <CenteredSection height={height}>
        <div
          className="no-margin"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <H2 className="no-margin">We can&#39;t wait to meet</H2>
          <Img
            className="no-margin"
            src={YeuxLogo}
            alt="Yeux_text_logo"
            style={{
              width: 'auto',
              height: logoImageHeight,
              marginLeft: logoImageMarginLeft,
            }}
          />
          <H2 className="no-margin">.</H2>
        </div>
        <H3>Reach out to us and we&#39;ll respond promptly.</H3>
        <Img
          className="no-margin"
          src={ContactDesign}
          alt="Yeux_contact_image"
          style={{
            maxHeight: height,
            maxWidth: imageMaxWidth,
            width: 'auto',
            height: 'auto',
          }}
        />
        <form style={{ marginBottom: '1vh' }} onSubmit={e => onFormSubmit(e)}>
          <ul className="form-style-1">
            <li>
              <input
                type="text"
                name="firstName"
                className="field-divided"
                placeholder="First Name"
                value={userInput.firstName}
                onChange={handleChange}
                required
              />{' '}
              <input
                type="text"
                name="lastName"
                className="field-divided"
                placeholder="Last Name"
                value={userInput.lastName}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <input
                type="email"
                name="emailAddress"
                className="field-long"
                placeholder="Your Email Address"
                value={userInput.emailAddress}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <select
                name="subject"
                className="field-select"
                defaultValue="General Question"
                onChange={handleChange}
              >
                <option value="General Question">General Question</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </li>
            <li>
              <textarea
                name="message"
                id="message"
                className="field-long field-textarea"
                placeholder="Your Message"
                value={userInput.message}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
        <Modal open={userInput.modalFlag} onClose={closeModal} center>
          <br />
          <br />
          <center>
            <h2>{userInput.modalText}</h2>
          </center>
        </Modal>
        {userInput.loading ? (
          <div>
            <div
              style={{
                position: 'fixed',
                left: '0vw',
                top: '0vh',
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                backgroundColor: '#FFFFFF',
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: 'fixed',
                translate: "translate('-50%', '-50%')",
                left: '45vw',
                top: '15vh',
                zIndex: 9999,
              }}
            >
              <Loader
                type="ThreeDots"
                color="black"
                height="10vh"
                width="10vw"
              />
            </div>
          </div>
        ) : null}
      </CenteredSection>
    </SectionWrapper>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  screenState: PropTypes.string.isRequired,
};

export default Contact;
