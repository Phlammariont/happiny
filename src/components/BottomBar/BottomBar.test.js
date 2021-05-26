import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import BottomBar from './BottomBar'
import { render } from '@testing-library/react';
const renderWithMockRouter = (Component) => {
  return render(
    <MemoryRouter>
      {Component}
    </MemoryRouter>
  )
}
describe('In a suite of tests for BottomBar', () => {
  test('Should render the user email', () => {
    const { getByText } = renderWithMockRouter(<BottomBar user={{name: 'leon'}}/> )
    const explore = getByText("Principal")
    const calendar = getByText("Calendario")
    const profile = getByText('Perfil')
    expect(explore).toBeDefined()
    expect(calendar).toBeDefined()
    expect(profile).toBeDefined()
  })
})