# Multi-Step Form App

This is a responsive multi-step form application built using React.js. The form consists of three steps: Personal Information, Address Information, and Confirmation. The application includes data validation, error handling, and navigation controls. Form data is persisted to local storage, ensuring users can return to their form without losing their progress.

## Features

- **Multi-Step Form**: Includes three steps with navigation controls.
- **Client-Side Validation**: Ensures all fields are filled and valid before allowing navigation to the next step.
- **Tabbed Navigation**: Allows users to switch between form steps easily.
- **Local Storage Persistence**: Saves form data to local storage on navigation between steps.
- **Responsive Design**: Ensures the form works well on desktop, tablet, and mobile screens.
- **Progress Bar**: Visual indicator of the user's progress through the form.
- **Loading State on Submit**: Disables submit button and shows a loading state until submission is complete.
- **Toasts for Feedback**: Uses the `sonner` toast library to provide feedback on form submission.

## Requirements

- Node.js
- npm or yarn

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/multi-step-form-app.git
   cd multi-step-form-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the Application**:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

4. **Open in Browser**:

   Open your browser and navigate to `http://localhost:3000`.

## Components

- **App.jsx**: Main component that handles state management and renders the form steps and navigation.
- **Tabs.jsx**: Component for tabbed navigation between form steps.
- **ProgressBar.jsx**: Component for displaying the progress bar.
- **PersonalForm.jsx**: Component for the Personal Information step.
- **AddressForm.jsx**: Component for the Address Information step.
- **ConfirmationForm.jsx**: Component for the Confirmation step.
- **Button.jsx**: Reusable button component.
- **Input.jsx**: Reusable input component with validation error display.

## Validation Rules

- **Name**: Required.
- **Email**: Must be in a valid email format.
- **Phone**: Must be exactly 10 digits.
- **Address Line 1**: Required.
- **City**: Required.
- **State**: Required.
- **Zip Code**: Must be a valid ZIP code format (5 digits or 5-4 digits).

## Notes

- The form data is saved to local storage on each step navigation, ensuring users can resume their progress even after refreshing the page.
- The submit button shows a loading state and is disabled while the form is being submitted.
- Toast messages provide feedback to the user upon successful form submission.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License.
