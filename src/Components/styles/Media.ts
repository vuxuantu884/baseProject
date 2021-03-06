import styled from 'styled-components';

export const StyledMediaFigure = styled.figure<{ height: string }>`
  position: relative;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  background: ${props => props.theme.colors.dark};
  text-align: left;
  margin-bottom: 1px;
  height: ${props => props.height}px;
  img {
    position: relative;
    display: block;
    max-width: 100%;
    opacity: 0.8;
    transition: opacity 300ms, transform 300ms;
    opacity: 0.85;
    height: 300px;
    margin: auto;
    object-fit: cover;
  }
  &:hover > img {
    opacity: 0.6;
  }
  &:hover > figcaption > span {
    transform: translate3d(0, 0, 0);
    text-align: left;
  }
`;

export const StyledMediaCaption = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 1rem;
`;

export const StyledMediaTitle = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem 1rem;
  width: 50%;
  transition: transform 300ms;
  transform: translate3d(100%, 0, 0);
  text-align: right;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
`;

export const StyledMediaImage = styled.span<{ source: string }>`
  position: absolute;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.source});
  width: 100%;
  height: 100%;
`;

