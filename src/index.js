import React from 'react'
import styled from 'styled-components'
import { calculateColorVariation, calculateFontColor } from 'color-variation'

export const AwesomeButton = styled.button`
  background-color: ${props => props.color};
  color: ${props => calculateFontColor(props.color)};
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color .2s;
  &:hover {
    background-color: ${props => calculateColorVariation(props.color, 15)};
  }
`
