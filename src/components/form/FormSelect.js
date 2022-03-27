import styled from 'styled-components';

const Select = styled.select`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 2px solid ${({ theme }) => theme.borderColor};
`;

export default function FormSelect({ attr, option }) {
  const { name, defaultValue, required, onChange, onClick, width, height } =
    attr;

  return (
    <Select
      name={name}
      defaultValue={defaultValue}
      required={required}
      onChange={onChange}
      onClick={onClick}
      width={width}
      height={height}
    >
      {option.map((item, index) => {
        return (
          <option
            key={index}
            value={item.value}
            selected={item.selected}
            disabled={item.disabled}
          >
            {item.name}
          </option>
        );
      })}
    </Select>
  );
}
