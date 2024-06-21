const ConfirmationForm = ({ formData }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Please review your information:
      </h2>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>
        <p>
          <strong>Address:</strong> {formData.addressLine1}
        </p>
        {formData.addressLine2 && (
          <p>
            <strong>Address Line 2:</strong> {formData.addressLine2}
          </p>
        )}
        <p>
          <strong>City:</strong> {formData.city}
        </p>
        <p>
          <strong>State:</strong> {formData.state}
        </p>
        <p>
          <strong>Zip Code:</strong> {formData.zipCode}
        </p>
      </div>
    </div>
  );
};

export default ConfirmationForm;
