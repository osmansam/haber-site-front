import styled from "styled-components";

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <Wrapper>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className="form-input"
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .form-row {
    margin-bottom: 1rem;
    width: 40vh;
  }
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .form-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
`;
export default FormRow;
