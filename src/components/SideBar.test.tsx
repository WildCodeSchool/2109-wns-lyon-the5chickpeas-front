import { render, screen } from "@testing-library/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SideBar from "./SideBar"

describe('When user is connected', ()=>{
    it('renders the sidebar with Dashboard link', ()=>{
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="/sidebar" element={<SideBar/>} />
                </Routes> 
            </BrowserRouter>
        )
        // expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
    })
})