import styled from "styled-components";

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <Wrapper>
      <div className="formrowselect">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <select
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          className="form-select"
        >
          {list.map((itemValue, index) => {
            return (
              <option key={index} value={itemValue}>
                {itemValue}
              </option>
            );
          })}
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .formrowselect {
    margin-bottom: 0.5rem;
  }
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .form-select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
    text-transform: capitalize;
  }
`;

export default FormRowSelect;
