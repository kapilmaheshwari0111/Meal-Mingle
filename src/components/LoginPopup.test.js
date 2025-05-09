// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import LoginPopup from "../LoginPopup";  // Adjust the path accordingly

// describe("LoginPopup Component", () => {
//   let setShowLoginMock;

//   beforeEach(() => {
//     setShowLoginMock = jest.fn();
//     render(<LoginPopup setShowLogin={setShowLoginMock} />);
//   });

//   // Red: Test fails initially
//   test("should display role selection on Sign Up", () => {
//     expect(screen.getByText("Select Your Role")).toBeInTheDocument();
//     expect(screen.getByText("User")).toBeInTheDocument();
//     expect(screen.getByText("Driver")).toBeInTheDocument();
//     expect(screen.getByText("Restaurant")).toBeInTheDocument();
//   });

//   // Green: Implement feature and pass the test
//   test("should allow role selection and move to the sign-up form", () => {
//     fireEvent.click(screen.getByText("User"));
//     expect(screen.queryByText("Select Your Role")).not.toBeInTheDocument();
//     expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
//   });

//   test("should validate email and password", () => {
//     fireEvent.click(screen.getByText("User")); // Select a role to proceed
//     fireEvent.click(screen.getByText("Create Account"));

//     expect(screen.getByText("Email is required")).toBeInTheDocument();
//     expect(screen.getByText("Password is required")).toBeInTheDocument();
//   });

//   test("should show an error if terms and conditions are not accepted", () => {
//     fireEvent.click(screen.getByText("User"));
//     fireEvent.change(screen.getByPlaceholderText("Your email"), {
//       target: { value: "test@example.com" },
//     });
//     fireEvent.change(screen.getByPlaceholderText("Your password"), {
//       target: { value: "123456" },
//     });

//     fireEvent.click(screen.getByText("Create Account"));
//     expect(screen.getByText("You must accept the terms and conditions")).toBeInTheDocument();
//   });

//   test("should submit the form successfully when valid data is entered", () => {
//     fireEvent.click(screen.getByText("User"));
//     fireEvent.change(screen.getByPlaceholderText("Your name"), {
//       target: { value: "John Doe" },
//     });
//     fireEvent.change(screen.getByPlaceholderText("Your email"), {
//       target: { value: "test@example.com" },
//     });
//     fireEvent.change(screen.getByPlaceholderText("Your password"), {
//       target: { value: "123456" },
//     });
//     fireEvent.click(screen.getByRole("checkbox"));
//     fireEvent.click(screen.getByText("Create Account"));

//     expect(setShowLoginMock).toHaveBeenCalledWith(false);
//   });

//   test("should switch between Login and Sign Up", () => {
//     fireEvent.click(screen.getByText("Login here"));
//     expect(screen.getByText("Login")).toBeInTheDocument();

//     fireEvent.click(screen.getByText("Click here"));
//     expect(screen.getByText("Sign Up")).toBeInTheDocument();
//   });
// });


import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPopup from "../LoginPopup";  // Adjust the path accordingly

describe("LoginPopup Component", () => {
  let setShowLoginMock;

  beforeEach(() => {
    setShowLoginMock = jest.fn();
    render(<LoginPopup setShowLogin={setShowLoginMock} />);
  });

  test("should display role selection on Sign Up", () => {
    expect(screen.getByText("Select Your Role")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "User" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Driver" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Restaurant" })).toBeInTheDocument();
  });

  test("should allow role selection and move to the sign-up form", async () => {
    fireEvent.click(screen.getByText("User"));
    await waitFor(() => {
      expect(screen.queryByText("Select Your Role")).not.toBeInTheDocument();
      expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
    });
  });

  test("should validate email and password", async () => {
    fireEvent.click(screen.getByText("User"));
    fireEvent.click(screen.getByText("Create Account"));

    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  test("should show an error if terms and conditions are not accepted", async () => {
    fireEvent.click(screen.getByText("User"));
    fireEvent.change(screen.getByPlaceholderText("Your email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Your password"), { target: { value: "123456" } });

    fireEvent.click(screen.getByText("Create Account"));

    screen.debug(); // Debugging the DOM

    await waitFor(() => {
      expect(screen.getByText("You must accept the terms and conditions")).toBeInTheDocument();
    });
  });

  test("should submit the form successfully when valid data is entered", async () => {
    fireEvent.click(screen.getByText("User"));
    fireEvent.change(screen.getByPlaceholderText("Your name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByPlaceholderText("Your email"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Your password"), { target: { value: "123456" } });
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByText("Create Account"));

    await waitFor(() => expect(setShowLoginMock).toHaveBeenCalledWith(false));
  });

  test("should switch between Login and Sign Up", () => {
    fireEvent.click(screen.getByText("Login here"));
    expect(screen.getByText("Login")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Click here"));
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });
});
