import { useCallback, useState } from 'react';
import { TAG_LIST as TAG, CATEGORY_DATA as DATA } from 'utils/DataSet';
import { FormAddImg, FormAddOneImg, FormCheckBox, FormInput } from 'components';
import InputBar from './InputBar';
import ProductInfoStyled from './ProductInfoStyled';

const {
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
} = ProductInfoStyled;

const PATTERN = /[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/g;

export default function ProductInfo() {
  const [product, setProduct] = useState(DATA);
  const [isCheck, setIsCheck] = useState(0);
  const [focus, setFocus] = useState(false);
  const [tag, setTag] = useState([]);
  const [query, setQuery] = useState('');
  const focusClick = () => {
    setFocus((prev) => !prev);
  };

  const onTagClick = (e) => {
    setTag((oldTag) => {
      const findIndex = oldTag.findIndex(
        (item) => item.value === e.target.innerText
      );
      if (findIndex !== -1) return oldTag;
      else {
        return [...oldTag, { id: Date.now(), value: e.target.innerText }];
      }
    });
    setFocus(false);
  };
  const onDeleteTag = (id) => {
    setTag((oldTag) => {
      const findIndex = oldTag.findIndex((item) => item.id === id);
      return [...oldTag.slice(0, findIndex), ...oldTag.slice(findIndex + 1)];
    });
  };

  const onSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);
  const onDelete = (value) => {
    setProduct((oldProduct) => {
      const findIndex = oldProduct.findIndex((item) => item.value === value);
      const newProduct = [
        ...oldProduct.slice(0, findIndex),
        { value: oldProduct[findIndex].value, checked: false },
        ...oldProduct.slice(findIndex + 1),
      ];
      setIsCheck((prev) => prev - 1);
      return newProduct;
    });
  };

  const onChange = useCallback((e) => {
    setProduct((oldProduct) => {
      const findIndex = oldProduct.findIndex(
        (item) => item.value === e.target.value
      );

      if (oldProduct[findIndex].checked) {
        const newProduct = [
          ...oldProduct.slice(0, findIndex),
          { value: oldProduct[findIndex].value, checked: false },
          ...oldProduct.slice(findIndex + 1),
        ];
        setIsCheck((prev) => prev - 1);
        return newProduct;
      } else {
        const newProduct = [
          ...oldProduct.slice(0, findIndex),
          { value: oldProduct[findIndex].value, checked: true },
          ...oldProduct.slice(findIndex + 1),
        ];
        setIsCheck((prev) => prev + 1);
        return newProduct;
      }
    });
  }, []);

  return (
    <Container>
      <Title>상품 기본 정보</Title>
      <Grid>
        <Cols>
          <Col>
            <ColTitle>카테고리</ColTitle>
          </Col>
          <Col>
            <ColTitle>필터 태그</ColTitle>
          </Col>
          <Col>
            <ColTitle>상품명</ColTitle>
          </Col>
          <Col>
            <ColTitle>상품 구성 소개 정보</ColTitle>
          </Col>
          <Col>
            <ColTitle>상품 썸네일</ColTitle>
          </Col>
          <Col>
            <ColTitle>상품 대표 이미지</ColTitle>
          </Col>
          <Col>
            <ColTitle>상품 총 재고</ColTitle>
          </Col>
        </Cols>
        <Cols>
          <BoxsGrid>
            <Box>
              <FormCheckBox
                attrs={{
                  name: 'food',
                  data: product,
                  onChange,
                }}
              />
            </Box>
            <Box>
              {product.map((item) => (
                <SelectCategory
                  style={{
                    display: item.checked ? 'flex' : 'none',
                  }}
                  key={item.value}
                >
                  <Category>{item.value}</Category>
                  <CancelBtn onClick={() => onDelete(item.value)}>X</CancelBtn>
                </SelectCategory>
              ))}
              {isCheck <= 0 && (
                <Normal
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    color: '#9F9F9F',
                  }}
                >
                  카테고리를 지정해 주세요.
                </Normal>
              )}
            </Box>
          </BoxsGrid>
          <FilterSearch style={{ padding: '20px 10px' }}>
            <InputBox onClick={focusClick}>
              <ViewTagWrapper>
                <Placeholder>필터 태그를 검색해 주세요.</Placeholder>
              </ViewTagWrapper>
              <SearchBtn>검색</SearchBtn>
            </InputBox>
            <SelectTagBox>
              {tag.length > 0 &&
                tag.map((item) => (
                  <ViewTagBox key={item.id}>
                    <TagSpan>{item.value}</TagSpan>
                    <TagSpan onClick={() => onDeleteTag(item.id)}>X</TagSpan>
                  </ViewTagBox>
                ))}
            </SelectTagBox>
          </FilterSearch>
          {focus && (
            <FilterDiv>
              <FilterSearch style={{ padding: '20px 10px' }}>
                <InputBox>
                  <FormInput
                    attr={{
                      placeholder: '필터 태그를 검색해 주세요.',
                      onChange: onSearch,
                    }}
                  />
                  <SearchBtn>검색</SearchBtn>
                </InputBox>
              </FilterSearch>
              <FilterTagBox>
                {(PATTERN.test(query) === false) | (query.length > 5) &&
                query.length !== 0 ? (
                  <p>검색 결과 없음</p>
                ) : (
                  TAG.sort().map((item) => {
                    const match = item === query;
                    if (query.length === 0) {
                      return (
                        <TagBox onClick={onTagClick}>
                          <TagSpan>{item}</TagSpan>
                        </TagBox>
                      );
                    } else if (query.length === 1) {
                      if (item.includes(query[0])) {
                        return (
                          <TagBox onClick={onTagClick}>
                            <TagSpan>{item}</TagSpan>
                          </TagBox>
                        );
                      } else if (match) {
                        return (
                          <TagBox onClick={onTagClick}>
                            <TagSpan>{item}</TagSpan>
                          </TagBox>
                        );
                      }
                    } else if (query.length === 2) {
                      if (match) {
                        return (
                          <TagBox onClick={onTagClick}>
                            <TagSpan>{item}</TagSpan>
                          </TagBox>
                        );
                      } else if (
                        item.includes(query[0]) ||
                        item.includes(query[1])
                      ) {
                        return (
                          item.includes(query[0]) ||
                          (item.includes(query[1]) && (
                            <TagBox onClick={onTagClick}>
                              <TagSpan>{item}</TagSpan>
                            </TagBox>
                          ))
                        );
                      } else {
                        return (
                          item.includes(query[0]) &&
                          item.includes(query[1]) && (
                            <TagBox onClick={onTagClick}>
                              <TagSpan>{item}</TagSpan>
                            </TagBox>
                          )
                        );
                      }
                    } else if (query.length === 3) {
                      if (match) {
                        return (
                          <TagBox onClick={onTagClick}>
                            <TagSpan>{item}</TagSpan>
                          </TagBox>
                        );
                      } else if (
                        item.includes(query[0]) ||
                        item.includes(query[1]) ||
                        item.includes(query[2])
                      ) {
                        return (
                          item.includes(query[0]) ||
                          item.includes(query[1]) ||
                          item.includes(query[2]) || (
                            <TagBox onClick={onTagClick}>
                              <TagSpan>{item}</TagSpan>
                            </TagBox>
                          )
                        );
                      } else {
                        return (
                          item.includes(query[0]) &&
                          item.includes(query[1]) &&
                          item.includes(query[2]) && (
                            <TagBox onClick={onTagClick}>
                              <TagSpan>{item}</TagSpan>
                            </TagBox>
                          )
                        );
                      }
                    } else if (query.length === 4) {
                      if (match) {
                        return (
                          <TagBox onClick={onTagClick}>
                            <TagSpan>{item}</TagSpan>
                          </TagBox>
                        );
                      } else {
                        return (
                          item.includes(query[0]) &&
                          item.includes(query[1]) &&
                          item.includes(query[2]) &&
                          item.includes(query[3]) && (
                            <TagBox onClick={onTagClick}>
                              <TagSpan>{item}</TagSpan>
                            </TagBox>
                          )
                        );
                      }
                    } else if (query.length === 5) {
                      if (match) {
                        return (
                          <TagBox onClick={onTagClick}>
                            <TagSpan>{item}</TagSpan>
                          </TagBox>
                        );
                      } else {
                        return (
                          item.includes(query[0]) &&
                          item.includes(query[1]) &&
                          item.includes(query[2]) &&
                          item.includes(query[3]) &&
                          item.includes(query[4]) && (
                            <TagBox onClick={onTagClick}>
                              <TagSpan>{item}</TagSpan>
                            </TagBox>
                          )
                        );
                      }
                    }
                  })
                )}
              </FilterTagBox>
            </FilterDiv>
          )}
          {focus && <OverScreen onClick={focusClick} />}
          <CodeGrid>
            <InputBar placeholder="상품명을 입력해 주세요." />
            <GrayText>상품 코드</GrayText>
            <Text>1643435697397</Text>
          </CodeGrid>
          <InputBar placeholder="상품 구성 소개 정보를 입력해 주세요." />
          <ImageLayout>
            <FormAddOneImg InputId="single" />
          </ImageLayout>
          <ImageLayout>
            <FormAddImg InputId="mutiii" />
          </ImageLayout>
          <SecondRow style={{ paddingLeft: '20px' }}>5개</SecondRow>
        </Cols>
      </Grid>
    </Container>
  );
}
