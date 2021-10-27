import { Formik } from "formik";
import "./styles.scss";
import schema from "./schema";

export default function App() {
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    birthday: "",
    receiveOffers: true
  };
  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          const validatedValues = `
          firtName: ${values.firstName} 
          email : ${values.email} 
          password : ${values.password} 
          birthday: ${values.birthday} 
          receiveOffers: ${values.receiveOffers}`;
          alert(validatedValues);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="wrapper">
              <div className="form">
                <div className="input-container">
                  <input
                    type="text"
                    placeholder=" "
                    className={`form-input ${
                      errors.firstName && "form-danger"
                    }`}
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                  />
                  {errors.firstName && touched.firstName ? (
                    <p className="error-message">{errors.firstName}</p>
                  ) : null}
                  <label className="form-label">First Name*</label>
                </div>
                <div className="input-container">
                  <input
                    type="email"
                    placeholder=" "
                    className={`form-input ${errors.email && "form-danger"}`}
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                  <label className="form-label">Email*</label>
                </div>
                <div className="input-container">
                  <input
                    type="password"
                    placeholder=" "
                    className={`form-input ${errors.password && "form-danger"}`}
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <div className="error-message-wrapper">
                      <div className="error-message__content">
                        Your password must contain at least:
                      </div>
                      <div className="error-message__content">
                        <svg
                          role="img"
                          id="cross-red"
                          aria-hidden="true"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 12"
                          className="svg-icon"
                        >
                          <path
                            fill="red"
                            fill-rule="evenodd"
                            d="M11.685.095c-.24-.203-1.175-.058-1.41.219L6.423 4.868C5.24 3.338 4.17 1.99 3.153.753c-.143-.174-.42-.17-.63-.136-.288.047-.756.219-.86.496-.041.109-.022.22.054.313C2.909 2.879 4.115 4.4 5.402 6.075c-.828.965-1.67 1.759-2.486 2.527C2.068 9.4 1.19 10.228.325 11.25c-.1.117-.094.216-.071.278.034.097.125.16.27.185.054.01.12.015.192.015.348 0 .848-.113 1.02-.316.748-.885 1.512-1.58 2.25-2.25.705-.64 1.432-1.301 2.153-2.131.596.766 1.19 1.392 1.765 1.997.723.761 1.405 1.48 2.09 2.453.094.132.278.19.537.166.312-.028.812-.197.945-.484.053-.114.042-.233-.03-.336-.773-1.096-1.574-1.956-2.349-2.787-.631-.678-1.283-1.378-1.934-2.218L11.686.476c.138-.163.086-.307 0-.38"
                          ></path>
                        </svg>
                        <p>8 characters</p>
                      </div>
                      <div className="error-message__content">
                        <svg
                          role="img"
                          id="cross-red"
                          aria-hidden="true"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 12"
                          className="svg-icon"
                        >
                          <path
                            fill="red"
                            fill-rule="evenodd"
                            d="M11.685.095c-.24-.203-1.175-.058-1.41.219L6.423 4.868C5.24 3.338 4.17 1.99 3.153.753c-.143-.174-.42-.17-.63-.136-.288.047-.756.219-.86.496-.041.109-.022.22.054.313C2.909 2.879 4.115 4.4 5.402 6.075c-.828.965-1.67 1.759-2.486 2.527C2.068 9.4 1.19 10.228.325 11.25c-.1.117-.094.216-.071.278.034.097.125.16.27.185.054.01.12.015.192.015.348 0 .848-.113 1.02-.316.748-.885 1.512-1.58 2.25-2.25.705-.64 1.432-1.301 2.153-2.131.596.766 1.19 1.392 1.765 1.997.723.761 1.405 1.48 2.09 2.453.094.132.278.19.537.166.312-.028.812-.197.945-.484.053-.114.042-.233-.03-.336-.773-1.096-1.574-1.956-2.349-2.787-.631-.678-1.283-1.378-1.934-2.218L11.686.476c.138-.163.086-.307 0-.38"
                          ></path>
                        </svg>
                        <p>1 upper case and 1 lower case</p>
                      </div>
                      <div className="error-message__content">
                        <svg
                          role="img"
                          id="cross-red"
                          aria-hidden="true"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 12"
                          className="svg-icon"
                        >
                          <path
                            fill="red"
                            fill-rule="evenodd"
                            d="M11.685.095c-.24-.203-1.175-.058-1.41.219L6.423 4.868C5.24 3.338 4.17 1.99 3.153.753c-.143-.174-.42-.17-.63-.136-.288.047-.756.219-.86.496-.041.109-.022.22.054.313C2.909 2.879 4.115 4.4 5.402 6.075c-.828.965-1.67 1.759-2.486 2.527C2.068 9.4 1.19 10.228.325 11.25c-.1.117-.094.216-.071.278.034.097.125.16.27.185.054.01.12.015.192.015.348 0 .848-.113 1.02-.316.748-.885 1.512-1.58 2.25-2.25.705-.64 1.432-1.301 2.153-2.131.596.766 1.19 1.392 1.765 1.997.723.761 1.405 1.48 2.09 2.453.094.132.278.19.537.166.312-.028.812-.197.945-.484.053-.114.042-.233-.03-.336-.773-1.096-1.574-1.956-2.349-2.787-.631-.678-1.283-1.378-1.934-2.218L11.686.476c.138-.163.086-.307 0-.38"
                          ></path>
                        </svg>
                        <p>1 number</p>
                      </div>
                    </div>
                  )}
                  <label className="form-label">Password*</label>
                </div>
                <div className="input-container date">
                  <input
                    type="date"
                    className={`form-input ${errors.birthday && "form-danger"}`}
                    name="birthday"
                    onChange={handleChange}
                    value={values.birthday}
                  />
                  {errors.birthday && touched.birthday && (
                    <p className="error-message">{errors.birthday}</p>
                  )}
                  <label className="form-label">
                    Child's Birthday/Due date*
                  </label>
                </div>
                <div className="checkbox-container">
                  <p>Check the boxes to receive our partners offers</p>
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    name="receiveOffers"
                    onChange={handleChange}
                    checked={values.receiveOffers}
                  />
                </div>
                <div className="submit-button-container">
                  <input
                    type="submit"
                    className="submit-button"
                    value="Create your account"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
