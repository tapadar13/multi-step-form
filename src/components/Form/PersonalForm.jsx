import Input from "../Input";

const PersonalForm = ({ formData, handleInputChange, errors }) => {
  return (
    <div>
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        error={errors.name}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <Input
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleInputChange}
        error={errors.phone}
      />
    </div>
  );
};

export default PersonalForm;
