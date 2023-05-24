import styled from 'styled-components'

export const TabsWrapper = styled.div`
  /* display: flex; */

  .item {
    box-sizing: border-box;
    //基础宽度：设置最小宽度
    flex-basis: 120px;
    flex-shrink: 0; //不压缩

    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
    }
  }
`
