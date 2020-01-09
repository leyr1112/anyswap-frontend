import React from 'react'
import styled, { keyframes } from 'styled-components'
import Circle from '../../assets/images/circle-grey.svg'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.img`
  animation: 2s ${rotate} linear infinite;
  width: 16px;
  height: 16px;
`

const SpinnerWrapper = styled(Spinner)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.grey2};
`

const SpinnerWrapperLight = styled(SpinnerWrapper)`
  color: ${({ theme }) => theme.colors.grey1};
`

export default function Loader({ ...rest }) {
  return <SpinnerWrapper src={Circle} alt="loader" {...rest} />
}

export function LoaderLight({ ...rest }) {
  return <SpinnerWrapperLight src={Circle} alt="loader" {...rest} />
}