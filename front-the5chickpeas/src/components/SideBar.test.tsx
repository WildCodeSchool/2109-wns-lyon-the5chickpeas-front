import { render, screen } from "@testing-library/react"
import SideBar from "./SideBar"

describe('When user navigate to profile page', ()=>{
    it('renders Dashboard', ()=>{
        render(<SideBar />)
        expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
    })
})