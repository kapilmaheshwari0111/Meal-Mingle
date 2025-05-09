import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrentState] = useState("Sign Up");
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (currState === "Sign Up" && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const endpoint = currState === "Sign Up" ? "signup" : "login";
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: currState === "Sign Up" ? selectedRole : undefined,
      };

      try {
        const response = await fetch(`http://localhost:5000/${endpoint}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        const data = await response.json();
        if (response.ok) {
          alert(data.message);
          if (currState === "Login") {
            localStorage.setItem("token", data.token);
          }
          setShowLogin(false);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="loginpopup">
      <form className="loginpopupcont" onSubmit={handleSubmit}>
        <div className="loginpopuptitle">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        {currState === "Sign Up" && !selectedRole ? (
          <div className="role-selection">
            <h2>Select Your Role</h2>
            <button type="button" onClick={() => handleRoleSelection("User")} className="role-button">
              User
            </button>
            <button type="button" onClick={() => handleRoleSelection("Driver")} className="role-button">
              Driver
            </button>
            <button type="button" onClick={() => handleRoleSelection("Restaurant")} className="role-button">
              Restaurant
            </button>
          </div>
        ) : (
          <>
            <div className="loginpopupinput">
              {currState === "Sign Up" && (
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
              )}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
            </div>
            <button type="submit">
              {currState === "Sign Up" ? "Create Account" : "Login"}
            </button>
            <div className="loginpopupcondition">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <p>I agree to terms and conditions</p>
              {errors.termsAccepted && <p className="error">{errors.termsAccepted}</p>}
            </div>
          </>
        )}

        {currState === "Login" ? (
          <p>
            Create a new account
            <span onClick={() => setCurrentState("Sign Up")}>&nbsp;&nbsp;&nbsp; Click here</span>
          </p>
        ) : (
          <p>
            Already have an account
            <span onClick={() => setCurrentState("Login")}>&nbsp;&nbsp;&nbsp; Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
