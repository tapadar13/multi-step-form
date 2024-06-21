import { useState } from "react";
import PersonalForm from "./components/Form/PersonalForm";
import AddressForm from "./components/Form/AddressForm";
import ConfirmationForm from "./components/Form/ConfirmationForm";
import Button from "./components/UI/Button";

const STEPS = ["Personal Information", "Address Information", "Confirmation"];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        error = value.trim() ? "" : "Name is required";
        break;
      case "email":
        error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email format";
        break;
      case "phone":
        error = /^\d{10}$/.test(value) ? "" : "Phone must be 10 digits";
        break;
      case "addressLine1":
      case "city":
      case "state":
        error = value.trim() ? "" : `${name} is required`;
        break;
      case "zipCode":
        error = /^\d{5}(-\d{4})?$/.test(value) ? "" : "Invalid ZIP code";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const isStepValid = () => {
    const currentFields =
      currentStep === 0
        ? ["name", "email", "phone"]
        : ["addressLine1", "city", "state", "zipCode"];

    return currentFields.every(
      (field) => formData[field].trim() !== "" && !errors[field]
    );
  };

  const handleNext = () => {
    if (isStepValid()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (isStepValid()) {
      // Simulate API call
      setTimeout(() => {
        alert("Form submitted successfully!");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          zipCode: "",
        });
        setCurrentStep(0);
      }, 1000);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalForm
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );
      case 1:
        return (
          <AddressForm
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        );
      case 2:
        return <ConfirmationForm formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">{STEPS[currentStep]}</h1>
        {renderStep()}
        <div className="flex justify-between mt-6">
          <Button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="bg-gray-300 text-gray-700"
          >
            Back
          </Button>
          {currentStep === STEPS.length - 1 ? (
            <Button onClick={handleSubmit} className="bg-green-500 text-white">
              Submit
            </Button>
          ) : (
            <Button onClick={handleNext} className="bg-blue-500 text-white">
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
