import styled from 'styled-components'

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  //每行展示4个
  width: 25%;
  padding: 8px;

  .inner {
    width: 100%;
  }

  .cover {
    /* 解决问题：图片的大小不一致 */
    position: relative;
    box-sizing: border-box;
    /* 这个padding的目的是把图片的空间撑起来 */
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      /* display: none; */
      /* 使用绝对定位直接把图片盖上（在padding撑起来的空间） */
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${(props) => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`
