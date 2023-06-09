import { styled } from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.text.primaryColor};
  font-weight: 600;
  .btns {
    display: flex;
    /*  */
    box-sizing: content-box;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      /* background-color: #ccc; */
      box-sizing: content-box;

      &:hover {
        background-color: #f5f5f5;
      }
      ${(props) => props.theme.mixin.boxShadow};
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px; //圆角边框
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;

    //复用阴影动画效果的混入
    ${(props) => props.theme.mixin.boxShadow};

    .pannel {
      position: absolute;
      right: 0;
      top: 60px;
      width: 240px;
      /* height: 240px; */
      background-color: #fff;
      border-radius: 10px;
      border: 1px solid #ccc;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      font-weight: 400;
      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &:hover {
            font-weight: 600;
            background-color: #f5f5f5;
            ${(props) => props.theme.mixin.boxShadow}
          }
        }
      }
      .top {
        border-bottom: 1px solid #eee;
      }
    }
  }
`
