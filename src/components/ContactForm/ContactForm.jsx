import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import '../ContactForm/ContactForm.module.css'

const ContactForm = ({ addContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄє\s]+$/, 'Поле ім\'я повинно містити тільки букви')
        .min(3, 'Мінімум 3 символи')
        .max(50, 'Максимум 50 символів')
        .required('Обов\'язкове поле'),
      number: Yup.string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, 'Номер телефону повинен бути в форматі xxx-xx-xx')
        .required('Обов\'язкове поле'),
    }),
    onSubmit: (values, { resetForm }) => {
      addContact(values.name, values.number);
      resetForm();
    },
  });

  return (
    <form className="contact-form" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div>{formik.errors.number}</div>
        ) : null}
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
