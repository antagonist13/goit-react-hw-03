import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm({ addContact }) {
    const fieldId = useId();
    const handleSubmit = (values, actions) => {
        addContact(values);
        actions.resetForm();
    };
    const UserSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Мінімум 3 символи!")
        .max(30, "Максимум 30 символів!")
        .required("Обов'язково заповнити!"),
    number: Yup.string()
        .min(3, "Мінімум 3 символи!")
        .max(30, "Максимум 30 символів!")
        .required("Обов'язково заповнити!"),
    });
    
    return <Formik
            initialValues={{
            name: "",
            number: "",
            }}
            validationSchema={UserSchema}
            onSubmit={handleSubmit}
            >
        <Form>
            <div>
                <label htmlFor={`${fieldId}-name`}>Name</label>
                <Field
                    type="text"
                    name="name"
                    id={`${fieldId}-name`}
                />
                <ErrorMessage
                    name="name"
                    component="span"
                />
            </div>
             <div>
                <label htmlFor={`${fieldId}-number`}>Number</label>
                <Field
                    type="text"
                    name="number"
                    id={`${fieldId}-number`}
                />
                <ErrorMessage
                    name="number"
                    component="span"
                />
            </div>
            <button type="submit"> Add Contact </button>
        </Form>
    </Formik>
    
    
}
