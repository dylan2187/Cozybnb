import { styled } from 'styled-components'

export const CenterWrapper = styled.div`
  .searchBar {
    width: 300px;
    height: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 8px;
    border-radius: 25px;
    border: 1px solid #ddd;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 600;
    }
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primaryColor};
      color: #fff;
    }
  }
`
