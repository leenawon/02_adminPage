import React, { useState } from 'react';
import styled from 'styled-components';

const AddImageButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.subBgColor};
  background-position: center center;
  background-size: cover;
`;

const AddImageButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  width: 170px;
  height: 40px;
  background-color: ${({ theme }) => theme.subBgColor};
  border: 1px solid ${({ theme }) => theme.pointColor};
  border-radius: ${({ theme }) => theme.miniRadius};
  cursor: pointer;
`;

const AddImageButtonInput = styled.input`
  position: absolute;
  width: 170px;
  height: 40px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

export default function FormImagePreview() {
  const [preview, setPreview] = useState({});
  const onChange = (e) => {
    if (!e.target.files[0].type.match('image/.*')) {
      alert('이미지 확장자만 업로드 가능합니다.');
      return;
    }
    setPreview((oldPreview) => {
      const src = URL.createObjectURL(e.target.files[0]);
      const newPreview = { name: e.target.files[0].name, src: src };
      return newPreview;
    });
  };
  return (
    <AddImageButtonWrapper style={{ backgroundImage: `url(${preview.src})` }}>
      <AddImageButton htmlFor="preview">+ 이미지 첨부</AddImageButton>
      <AddImageButtonInput
        type="file"
        accept="image/*"
        id="preview"
        onChange={onChange}
      />
    </AddImageButtonWrapper>
  );
}
