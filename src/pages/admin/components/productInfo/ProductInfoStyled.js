import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1.5px solid ${({ theme }) => theme.borderGrayColor};
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.titleSize};
  font-weight: 600;
  padding: 20px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.borderGrayColor};
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 1100px;
  gap: 1px;
  grid-template-columns: 1fr 5fr;
  background-color: ${({ theme }) => theme.borderGrayColor};
  font-size: ${({ theme }) => theme.bigFontSize};
`;

const Cols = styled.div`
  background-color: ${({ theme }) => theme.borderGrayColor};
  display: grid;
  width: 100%;
  grid-template-rows: 415px 415px 95px 95px 130px 230px 90px;
  height: 100%;
  gap: 1px;
`;

const BoxsGrid = styled.div`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.bigFontSize};
  background-color: ${({ theme }) => theme.mainBgColor};
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1px;
`;

const Box = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  border: 2.5px solid ${({ theme }) => theme.borderGrayColor};
  margin: 20px 10px;
  border-radius: ${({ theme }) => theme.miniRadius};
  padding: 25px 30px;
  overflow-y: scroll;
  max-height: 415px;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.bigFontSize};
`;

const SelectCategory = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.veryWeekBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2.5px solid ${({ theme }) => theme.pointColor};
  border-radius: ${({ theme }) => theme.bigRadius};
  margin-bottom: 15px;
  position: relative;
`;

const Text = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.mainBgColor};
`;

const GrayText = styled(Text)`
  background-color: ${({ theme }) => theme.lightGrayColor};
`;

const CancelBtn = styled.span`
  cursor: pointer;
`;

const Placeholder = styled.span`
  color: #757575;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;

const InputBox = styled.div`
  background-color: ${({ theme }) => theme.mainBgColor};
  display: flex;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  justify-content: space-between;
  padding-right: 10px;
  border: 2.5px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.bigRadius};
`;

const SelectTagBox = styled(InputBox)`
  height: 300px;
  word-spacing: 10px;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const Col = styled.div`
  display: grid;
  gap: 1px;
  width: 100%;
  place-content: center center;
  height: 100%;
  background-color: ${({ theme }) => theme.lightGrayColor};
`;

const ColTitle = styled.span`
  padding: 20px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.lightGrayColor};
  font-size: ${({ theme }) => theme.bigFontSize};
`;

const Category = styled.span``;

const SearchBtn = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2.5px solid ${({ theme }) => theme.pointColor};
  margin: 5px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.bigRadius};
  position: relative;
`;
const SecondRow = styled.div`
  background-color: ${({ theme }) => theme.mainBgColor};
  height: 100%;
  font-size: ${({ theme }) => theme.bigFontSize};
  display: flex;
  align-items: center;
`;

const FilterSearch = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.mainBgColor};
  height: 100%;
  font-size: ${({ theme }) => theme.bigFontSize};
  display: flex;
  flex-direction: column;
`;

const ImageLayout = styled.div`
  background-color: ${({ theme }) => theme.mainBgColor};
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  padding: 20px;
`;

const CodeGrid = styled.div`
  font-size: ${({ theme }) => theme.bigFontSize};
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  height: 100%;
  gap: 1px;
`;

const Normal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

const FilterDiv = styled.div`
  z-index: 2;
  display: grid;
  grid-template-rows: 1fr 3fr;
  position: absolute;
  width: 60vw;
  height: 600px;
  margin: auto;
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 3px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.bigRadius};
  overflow-y: scroll;
`;

const FilterTagBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: auto;
  padding-bottom: 200px;
  width: 100%;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 3px solid ${({ theme }) => theme.borderGrayColor};
  border-radius: ${({ theme }) => theme.bigRadius};
`;

const ViewTagWrapper = styled.div`
  display: flex;
  overflow-y: auto;
  flex-wrap: wrap;
`;

const ViewTagBox = styled.div`
  margin: 5px 10px;
  max-height: 50px;
  padding: 15px;
  display: flex;
  background-color: ${({ theme }) => theme.tagGreen};
  border-radius: ${({ theme }) => theme.miniRadius};
  cursor: pointer;
  align-items: center;
`;

const TagBox = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  max-height: 50px;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.tagGreen};
  border-radius: ${({ theme }) => theme.miniRadius};
  cursor: pointer;
`;
const TagSpan = styled.span`
  display: flex;
  font-size: ${({ theme }) => theme.bigFontSize};
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const OverScreen = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
`;

const ProductInfoStyled = {
  Container,
  Title,
  Grid,
  Cols,
  BoxsGrid,
  Box,
  SelectCategory,
  Text,
  GrayText,
  CancelBtn,
  Placeholder,
  InputBox,
  SelectTagBox,
  Col,
  ColTitle,
  Category,
  SearchBtn,
  SecondRow,
  FilterSearch,
  ImageLayout,
  CodeGrid,
  Normal,
  FilterDiv,
  FilterTagBox,
  ViewTagWrapper,
  ViewTagBox,
  TagBox,
  TagSpan,
  OverScreen,
};

export default ProductInfoStyled;
