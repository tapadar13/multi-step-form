import Input from "../UI/Input";

const AddressForm = ({ formData, handleInputChange, errors }) => {
  return (
    <div>
      <Input
        label="Address Line 1"
        name="addressLine1"
        value={formData.addressLine1}
        onChange={handleInputChange}
        error={errors.addressLine1}
      />
      <Input
        label="Address Line 2 (Optional)"
        name="addressLine2"
        value={formData.addressLine2}
        onChange={handleInputChange}
      />
      <Input
        label="City"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        error={errors.city}
      />
      <Input
        label="State"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        error={errors.state}
      />
      <Input
        label="Zip Code"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleInputChange}
        error={errors.zipCode}
      />
    </div>
  );
};

export default AddressForm;
