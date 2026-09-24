# LibraReserve - Library Book Reservation System

https://nazma1695.github.io/library-book-reservation/

## Course

Information System Design and Software Engineering Lab

## Project Type

Individual Project

## Project Title

Library Book Reservation System

---

## 1. Project Description

LibraReserve is a responsive web-based Library Book Reservation System.

The system allows users to learn about the library, explore featured books,
and submit an online reservation request.

The project contains two connected web pages:

1. Home / Landing Page
2. Book Reservation Form

No backend or database is required for this project.

---

## 2. Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons

---

## 3. Project Structure

library-book-reservation/

├── index.html

├── reservation.html

├── style.css

├── script.js

└── README.md

---

## 4. Page 1 - Landing Page

The landing page contains:

- Responsive navigation bar
- Home link
- Featured Books link
- About link
- Contact link
- Reservation link
- Mobile hamburger menu
- Hero section
- Book Now button
- Learn More button
- Three featured book cards
- About/service section
- Call-to-action section
- Footer
- Contact information
- Social media icons

---

## 5. Page 2 - Reservation Form

The reservation page contains the following fields:

1. Full Name
2. Email Address
3. Phone Number
4. Password
5. Confirm Password
6. Book Selection
7. Number of Copies
8. Reservation Date
9. Membership Type
10. Additional Request
11. Terms and Conditions

---

## 6. Input Types Used

The project uses more than five different input types:

- Text
- Email
- Telephone
- Password
- Number
- Date
- Select Dropdown
- Radio Button
- Textarea
- Checkbox

---

## 7. Client-Side Validation

JavaScript is used for client-side validation.

The validation includes:

### Required Fields

The system checks whether required fields are empty.

### Email Validation

The system checks whether the entered email follows a valid email format.

### Phone Validation

The system checks for a valid Bangladeshi phone number format.

Example:

01712345678

### Password Length

The password must contain at least 8 characters.

### Confirm Password

The Confirm Password field must match the Password field.

### Reservation Date

The user cannot select a date before the current date.

### Quantity

The number of copies must be between 1 and 3.

### Membership

The user must select a membership type.

### Terms

The user must agree to the terms and conditions.

---

## 8. Error Messages

Individual error messages are displayed next to the relevant fields.

Examples:

- Full name is required.
- Please enter a valid email address.
- Enter a valid Bangladeshi phone number.
- Password must contain at least 8 characters.
- Passwords do not match.
- Please select a book.
- Reservation date cannot be in the past.

---

## 9. Successful Submission

When all information is valid, a Bootstrap modal displays a reservation success message.

The modal shows:

- User name
- Email
- Phone
- Selected book
- Number of copies
- Reservation date
- Membership type
- Additional request

No backend is required.

---

## 10. Responsive Design

Bootstrap's responsive grid system and navbar are used to make
the website responsive on:

- Desktop
- Laptop
- Tablet
- Mobile devices

The navigation menu changes into a hamburger menu on small screens.


