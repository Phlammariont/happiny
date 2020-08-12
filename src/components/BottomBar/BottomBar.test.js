import React from 'react'
import BottomBar from './BottomBar'
import { render } from '@testing-library/react';

describe('In a suite of tests for BottomBar', () => {
  test('Should render the user email', () => {
    const { getByText } = render(<BottomBar user={{name: 'leon'}}/> )
    const explore = getByText("Explora")
    const calendar = getByText("Calendario")
    const profile = getByText('leon')
    expect(explore).toBeDefined()
    expect(calendar).toBeDefined()
    expect(profile).toBeDefined()
  })
})