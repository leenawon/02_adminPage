import styled from 'styled-components';

const Container = styled.div`
  margin: 20px 0px 0px 10px;
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

export default function FormRadio({ attr, radio }) {
  const { width, height, onClick } = attr;
  return (
    <>
      {radio.map((item, index) => (
        <Container key={index}>
          <Radio
            id={item.id}
            name={item.name}
            value={item.value}
            defaultChecked={item.defaultChecked}
            onClick={onClick}
            width={width}
            height={height}
            readOnly
          />
          <Label htmlFor={item.id} onClick={onClick}>
            {item.text}
          </Label>
        </Container>
      ))}
    </>
  );
}
