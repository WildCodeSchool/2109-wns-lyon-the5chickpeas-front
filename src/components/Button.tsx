import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledButton = styled.button<{ color?: string; background?: string }>`
  background: black;
  padding: 0.75rem 0.5rem;
  margin: 10px;
  color: white;
  border-radius: 15px;
  width: max-content;
  height: max-content;
  font-size: medium;
  border: 1.5px solid orange;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
`;

/**
 *
 * @returns Button to customize
 */
export function ButtonCustom({
  children,
  color,
  background,
  onClick,
}: {
  children: any;
  color?: string;
  background?: string;
  onClick?: () => void;
}) {
  return (
    <StyledButton color={color} background={background} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

ButtonCustom.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
};
ButtonCustom.defaultProps = {
  color: null,
  background: null,
};
