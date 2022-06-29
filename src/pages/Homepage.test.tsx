import {fireEvent, render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Homepage from './Homepage'
import SignUp from './SignUp'

test('When user arrive in the homepage', () => {
    render(
        <MemoryRouter>
            <Homepage />
        </MemoryRouter>
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByText(/Login/i)).toBeInTheDocument()

    describe('When user clicks sign up button', () => {
        it('go to signup page', () => {
            render(
                <MemoryRouter>
                    <SignUp />
                </MemoryRouter>
            )
            fireEvent.click(screen.getByRole('button'))
            expect(screen.getByText(/Sign up/i)).toBeInTheDocument()
        })
    })
})