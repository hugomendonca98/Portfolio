import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import api from "../../global/services/api/apiForm";
import { ContactStyled } from "./styles";
import contactImg from "../../assets/images/contact.svg";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nome Muito Curto!")
    .required("Campo Nome Obrigatorio!"),
  message: Yup.string()
    .min(2, "Mensagem Muito Curta!")
    .required("Campo Mensagem Obrigatorio!"),
  email: Yup.string()
    .email("Email Invalido")
    .required("Campo Email Obrigatorio!")
});

const Contact = () => {

  const [formSuccess, setFormSuccess] = useState('none');
  const [btnDisabled, setBtnDisabled] = useState('')

  async function send(values) {
    const request = await api.post('QcUHMRrMR1ApyXYNnDpHX', values);
    console.log(request);
    setFormSuccess('block');
    setBtnDisabled(true);
  }

  function validateEmail(value) {
    let error;
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!value) {
      error = "Campo Obrigatorio!";
    } else if (!regex.test(value)) {
      error = "Email Invalido!";
    }
    return error;
  }

  function validateName(value) {
    let error;
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/g;
    if (!value) {
      error = "Campo Nome Obrigatorio!";
    } else if (!regex.test(value)) {
      error = "Nome Invalido!";
    }
    return error;
  }

  return (
    <ContactStyled id="contact">
      <div className="tittle">
        <h1>Contato</h1>
      </div>
      <div className="contact-img">
        <img src={contactImg} alt="" />
      </div>
      <div className="email">
        <a href="mailto:contato@hugomendonca.net">
          <i className="fas fa-envelope"></i>contato@hugomendonca.net
        </a>
      </div>
      <p>Ou</p>
      <Formik
        initialValues={{ name: "", message: "", email: "" }}
        validationSchema={ContactSchema}
        onSubmit={values => {
          send(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="contact-flex">
              <div>
                <Field
                  name="name"
                  type="text"
                  validate={validateName}
                  placeholder="Nome"
                  autoComplete="off"
                  style={
                    errors.name && touched.name
                      ? { border: "solid 1px red" }
                      : null
                  }
                />
                {errors.name && touched.name ? (
                  <div className="error"> {errors.name} </div>
                ) : null}
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  validate={validateEmail}
                  placeholder="Email"
                  autoComplete="off"
                  style={
                    errors.email && touched.email
                      ? { border: "solid 1px red" }
                      : null
                  }
                />
                {errors.email && touched.email && (
                  <div className="error"> {errors.email} </div>
                )}
              </div>
            </div>
            <div>
              <Field
                name="message"
                placeholder="Mensagem"
                style={
                  errors.message && touched.message
                    ? { border: "solid 1px red" }
                    : null
                }
              />
              {errors.message && touched.message ? (
                <div className="error"> {errors.message} </div>
              ) : null}
            </div>
            <button type="submit" disabled={btnDisabled}>Enviar</button>
              <div className="success" style={{display: `${formSuccess}`}}>Mensagem Enviada Com Sucesso!</div>
          </Form>
        )}
      </Formik>
    </ContactStyled>
  );
};

export default Contact;
