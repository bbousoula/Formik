import { useState } from "react";
import { Formik } from "formik";
import "./styles.scss";
import schema from "./schema";

export default function App() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

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
                      errors.firstName && touched.firstName && "form-danger"
                    }`}
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    className={`form-input ${
                      errors.email && touched.email && "form-danger"
                    }`}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <p className="error-message">{errors.email}</p>
                  )}
                  <label className="form-label">Email*</label>
                </div>
                <div className="input-container">
                  <input
                    type={isPasswordShown ? "text" : "password"}
                    placeholder=" "
                    className={`form-input ${
                      errors.password && touched.password && "form-danger"
                    }`}
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />

                  <svg
                    role="img"
                    id="eye-icon"
                    aria-labelledby="eye-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 16 15"
                    className="svg-icon-camel"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordShown ? (
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M15.664 7.554c-.25-.117-.493-.255-.736-.386l-.19-.098c.25-.282.468-.593.642-.936.153-.304-.11-1.299-.382-.763-1.266 2.5-5.049 3.087-7.531 2.88-1.469-.122-3.043-.437-4.378-1.078-.681-.328-1.324-.773-1.864-1.3-.329-.323-.55-.776-.918-1.044-.292-.213-.443.821-.143 1.04.22.16.403.53.589.73.217.235.457.45.705.653.084.068.169.134.254.199-.258.308-.525.609-.743.952-.126.2-.11.56 0 .763.112.206.266.183.382 0 .27-.424.646-.772.946-1.173.024-.032.044-.068.06-.105.344.208.704.388 1.08.533.838.32 1.725.563 2.622.725-.073.367-.154.734-.241 1.099-.053.218-.08.562.096.737.166.167.327-.016.37-.193.123-.515.237-1.033.335-1.554.493.07.987.116 1.476.132.804.026 1.7-.039 2.591-.218.096.551.233 1.094.35 1.64.04.183.205.35.37.194.178-.17.142-.528.096-.738-.088-.408-.187-.812-.266-1.222 1.008-.26 1.98-.674 2.772-1.279l.03.03c.215.18.5.302.747.434.243.131.486.27.736.386.367.17.471-.888.143-1.04"
                      ></path>
                    ) : (
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M7.614 3.69c3.27.004 6.277 1.845 8.22 4.369.198.256.01 1.23-.257.882-1.424-1.85-3.426-3.314-5.687-3.923.548.55.899 1.273.879 2.091-.04 1.637-1.387 3.022-3.016 3.131-2.695.181-3.394-3.26-2.255-5.203-1.836.57-3.43 1.823-4.748 3.238.131.173.258.35.41.498.51.5 1.12.921 1.764 1.231 1.264.607 2.755.906 4.145 1.021 2.35.196 5.931-.36 7.13-2.727.257-.507.507.435.362.722-1.193 2.354-4.485 3.141-6.897 3.061-1.487-.049-3.02-.362-4.41-.895-.683-.262-1.308-.644-1.874-1.107-.235-.191-.462-.395-.668-.618-.176-.19-.349-.54-.558-.691-.117-.086-.161-.304-.153-.515-.006-.171.02-.337.092-.419 1.915-2.192 4.472-4.15 7.521-4.146zm-.04 1.085c-2.698.107-2.779 4.663.18 4.444 1.153-.085 2.542-.984 2.418-2.265-.107-1.099-1.368-1.822-2.387-1.968-.1-.014-.168-.098-.21-.21zm.372 1.493l.1.011c.394.072.566.463.61.827.053.426-.11.865-.592.845-.112-.005-.224-.037-.323-.09H7.74c-.498-.075-.614-.69-.482-1.099.014-.045.033-.087.055-.127.037-.1.097-.181.187-.219.15-.117.344-.174.547-.137z"
                      ></path>
                    )}
                  </svg>
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
                            fillRule="evenodd"
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
                            fillRule="evenodd"
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
                            filrule="evenodd"
                            d="M11.685.095c-.24-.203-1.175-.058-1.41.219L6.423 4.868C5.24 3.338 4.17 1.99 3.153.753c-.143-.174-.42-.17-.63-.136-.288.047-.756.219-.86.496-.041.109-.022.22.054.313C2.909 2.879 4.115 4.4 5.402 6.075c-.828.965-1.67 1.759-2.486 2.527C2.068 9.4 1.19 10.228.325 11.25c-.1.117-.094.216-.071.278.034.097.125.16.27.185.054.01.12.015.192.015.348 0 .848-.113 1.02-.316.748-.885 1.512-1.58 2.25-2.25.705-.64 1.432-1.301 2.153-2.131.596.766 1.19 1.392 1.765 1.997.723.761 1.405 1.48 2.09 2.453.094.132.278.19.537.166.312-.028.812-.197.945-.484.053-.114.042-.233-.03-.336-.773-1.096-1.574-1.956-2.349-2.787-.631-.678-1.283-1.378-1.934-2.218L11.686.476c.138-.163.086-.307 0-.38"
                          ></path>
                        </svg>
                        <p>1 number</p>
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
                            filrule="evenodd"
                            d="M11.685.095c-.24-.203-1.175-.058-1.41.219L6.423 4.868C5.24 3.338 4.17 1.99 3.153.753c-.143-.174-.42-.17-.63-.136-.288.047-.756.219-.86.496-.041.109-.022.22.054.313C2.909 2.879 4.115 4.4 5.402 6.075c-.828.965-1.67 1.759-2.486 2.527C2.068 9.4 1.19 10.228.325 11.25c-.1.117-.094.216-.071.278.034.097.125.16.27.185.054.01.12.015.192.015.348 0 .848-.113 1.02-.316.748-.885 1.512-1.58 2.25-2.25.705-.64 1.432-1.301 2.153-2.131.596.766 1.19 1.392 1.765 1.997.723.761 1.405 1.48 2.09 2.453.094.132.278.19.537.166.312-.028.812-.197.945-.484.053-.114.042-.233-.03-.336-.773-1.096-1.574-1.956-2.349-2.787-.631-.678-1.283-1.378-1.934-2.218L11.686.476c.138-.163.086-.307 0-.38"
                          ></path>
                        </svg>
                        <p>one special case Character</p>
                      </div>
                    </div>
                  )}
                  <label className="form-label">Password*</label>
                </div>
                <div className="input-container">
                  <input
                    type="date"
                    placeholder=" "
                    className={`form-input date ${
                      errors.birthday && touched.birthday && "form-danger"
                    }`}
                    name="birthday"
                    onChange={handleChange}
                    onBlur={handleBlur}
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
