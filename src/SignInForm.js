// SignInForm.js
import React, { useState, useEffect } from "react";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load user data from local storage when the component mounts
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Handle user deletion
  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Filter users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSignIn = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) =>
        user.mobile === formData.mobile && user.password === formData.password
    );

    if (foundUser) {
      alert("Sign in successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {/* Add a search input */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <h2>Registered Users</h2>
      <ul>
      {filteredUsers.map((user, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Mobile Number:</strong> {user.mobile}
            </div>
            <div>
              <strong>Gender:</strong> {user.gender}
            </div>
            {/* Add a delete button */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form>
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
          <button type="button" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
