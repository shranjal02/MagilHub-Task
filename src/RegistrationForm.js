import React, { useState} from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    gender: "male",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Validate data
    if (
      formData.name.length < 5 ||
      formData.name.length > 10 ||
      isNaN(formData.mobile) ||
      formData.mobile.length !== 10 ||
      formData.password.length < 6 ||
      formData.password.length > 8 ||
      formData.password !== formData.confirmPassword
    ) {
      alert("Please fill out the form correctly.");
      return;
    }

    // Save data to local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
  };

  return (
    <div>
      <h2>Registration</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            minLength="5"
            maxLength="10"
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            pattern="\d{10}"
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength="6"
            maxLength="8"
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength="6"
            maxLength="8"
            required
          />
        </div>
        <div>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
