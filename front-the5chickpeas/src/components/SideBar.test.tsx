import { render, screen } from "@testing-library/react"
import SideBar from "./SideBar"

describe('When user is connected', ()=>{
    it('renders the sidebar with Dashboard link', ()=>{
        render(<SideBar />)
        expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
    })
})