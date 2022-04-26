// 
import React from 'react';
import {Formik,Form,Field} from 'formik';
import * as Yup from 'yup';

function FormikYup() {
    function validateEmail(value) {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }

    const SignUpSchema = Yup.object().shape(
        {
            username:Yup.string()
            .email('Username should be an email')
            .required('Field Required'),

            password: Yup.string()
            .required('Field Required')
        }
    );
    return (
        <div>
            <Formik
            initialValues = {
                {
                username:'',
                password:''
                }
            }
            validationSchema = {SignUpSchema}
            onSubmit = {values => {
                alert("Login Successful");
            }}
            >
            { ({errors,touched}) => (
                <Form>
                  <div>Username</div>
                 <Field name="username" id="emailField"/>
                 
                 {
                     errors.username && touched.username ? (<div id="emailError">{errors.username}</div>) : null
                 }
                 <div>Password</div>
                 <Field name="password" id="pswField"/>
                 {
                     errors.password && touched.password ? (<div id="pswError">{errors.password}</div>) : null
                 }
                 <button type="submit" id="submitBtn">Submit</button>
                 </Form>
            )}

            </Formik>
        </div>
    )
}

export default FormikYup