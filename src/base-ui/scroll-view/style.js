import { styled } from 'styled-components'

export const ViewWrapper = styled.div`
  /* display: flex; */
  overflow: hidden;

  .scroll-content {
    position: relative;
    display: flex;

    transition: transform 300ms ease; //设置transformer动画
  }
`
