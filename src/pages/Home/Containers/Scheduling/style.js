import styled from "styled-components";

import { Container } from "../../../../globalStyles";

export const SchedulingContainer = styled(Container)`
  flex-direction: column;

  .contact_content {
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  }
`;

export const SchedulingForm = styled.div`
  width: calc(50% - 20px);
  margin-right: 20px;

  /* border: 2px solid red; */

  input {
    width: 100%;
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  button {
    width: 100%;
    margin-top: 35px;

    @media screen and (max-width: 800px) {
      margin-top: 25px;
    }
  }

  div {
    margin: 20px 0;
  }

  p {
    margin-top: 10px;
    font-size: var(--text-paragraph);
  }

  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: var(--text);
    font-weight: 300;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: var(--light-orange);
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0 0 50px 0;
  }
`;

export const CtasContainer = styled.div`
  display: flex;
  margin-top: auto;

  button {
    display: flex;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.2s;
    padding: 0;

    a {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 8px 20px;

      color: var(--white);
    }

    &:nth-of-type(1) {
      width: calc(55% - 10px);
      margin-right: 10px;

      background-color: var(--green);

      &:hover {
        background: var(--light-green);

        a {
          color: var(--green);
        }
      }
    }

    &:nth-of-type(2) {
      width: calc(45% - 10px);
      margin-left: 10px;

      background-color: var(--light-orange);

      &:hover {
        background-color: var(--orange);

        a {
          color: var(--white);
        }
      }
    }

    svg {
      margin-left: 8px;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;

    button {
      width: 100% !important;
      &:nth-of-type(1) {
        margin: 0 0 10px 0;
      }

      &:nth-of-type(2) {
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 30px;
  }
`;

export const SchedulingInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 20px);
  margin-right: 20px;

  h3 {
    font-size: 20px;
    margin-bottom: 15px;

    color: var(--green);
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;

export const SchedulingMapContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(50% - 20px);
  height: 320px;
  margin-left: 20px;
  border-radius: 6px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 5;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 30px 0 0 0;
  }
`;

export const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 6px 12px;
  margin-bottom: 8px;
  border-radius: 50px;
  font-size: var(--text-paragraph);
  font-weight: 300;
  letter-spacing: 0.5px;
  transition: 0.2s;
  cursor: pointer;

  color: var(--text);

  &:hover {
    background: var(--light-green);
    color: var(--text);
  }

  &.notLink {
    cursor: default;

    &:hover {
      background: white;
    }
  }

  svg {
    margin-right: 10px;
    font-size: 20px;
  }

  &:last-of-type {
    margin: 0;
  }

  &:first-of-type {
    svg {
      font-size: 19px;
      margin-left: 1px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 6px 4px;
  }
`;
