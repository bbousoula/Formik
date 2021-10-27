import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  email: yup
    .string()
    .email("Please enter a valid email such as you@mail.com.")
    .required("Please enter you email address."),
  password: yup.string().min(4).max(8).required(),
  birthday: yup.date().required(`Please enter your child's birthday/due date`),
  receiveOffers: yup.boolean().required()
});

export default schema;
