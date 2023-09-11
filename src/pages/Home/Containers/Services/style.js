import styled from "styled-components";

import { Container } from "../../../../globalStyles";

export const ServicesContainer = styled(Container)`
  flex-direction: column;
`;

export const SwiperContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  .swiper {
    width: 100%;
    height: fit-content;
    padding-bottom: 40px;
    margin: 0 40px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .carousel__button {
    position: absolute;
    z-index: 20;
    top: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    transition: 0.2s;
    cursor: pointer;
    font-size: 22px;

    background: #fff;
    border: 2px solid var(--light-orange);
    color: var(--light-orange);

    &:hover {
      border: 2px solid var(--orange);
      color: var(--orange);
    }

    &.prev {
      left: -10px;
    }

    &.next {
      right: -10px;
    }
  }

  @media screen and (max-width: 800px) {
    .swiper {
      margin: 0;
    }

    .carousel__button {
      display: none;
    }
  }
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 6px;
  transition: 0.2s;
  cursor: pointer;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);

  .slide__image {
    width: 100%;
    height: 140px;
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slide__title {
    font-size: 17px;
    font-weight: 500;
    width: 100%;
    margin-bottom: 10px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 20px;
    max-height: 40px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .slide__description {
    font-size: 15px;
    font-weight: 300;
    text-align: justify;
    width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 19px;
    max-height: 114px;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }

  &:hover {
    transform: scale(1.04);
  }

  button {
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.3s;

    margin-top: 20px;

    padding: 4px 0;
    color: var(--white);
    background: var(--light-orange);

    &:hover {
      background: var(--orange);
    }

    a {
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  padding: 20px;
  border-radius: 8px;

  border: none;
  background-color: white;

  button {
  }

  .modal__header {
    display: flex;
    justify-content: space-between;
    height: 30px;
    margin-bottom: 20px;

    h2 {
      font-size: 22px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    svg {
      font-size: 22px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        transform: scale(1.15);
      }
    }
  }

  .modal__image_banner {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(10px);
    }
  }

  .modal__content {
    height: calc(100% - 50px);
    overflow: auto;
    padding-right: 15px;
    letter-spacing: 0.5px;
    font-size: 17px;
    font-weight: 300;
    line-height: 22px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    ::-webkit-scrollbar {
      width: 5px;
      z-index: 1000;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.1);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--light-orange);
      border-radius: 10px;
    }
  }
`;
