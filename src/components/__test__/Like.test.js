import { render, screen, fireEvent } from "@testing-library/react"
import Like from '../Like'

test("default likes=0 ", () => {
    render(<Like/>)
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})

test("Likes increments in 1 unit ", () => {
    render(<Like/>)
        expect(screen.getByText("Likes: 0")).toBeInTheDocument(); // se usa para coprobar que los likes empiezan en 0  asi sabe que si le damos click a Like se sumara 1 y pasara de 0 --> 1
        fireEvent.click(screen.getByText("Like")) // fireeventpara comprobar eventos 
        expect(screen.getByText("Likes: 1")).toBeInTheDocument()
})

test("Likes drecrease in 1 unit ", () => {
    render(<Like/>)
    expect(screen.getByText("Likes: 0")).toBeInTheDocument(); // se usa para coprobar que los likes empiezan en 0  asi sabe que si le damos click a Like se sumara 1 y pasara de 0 --> 1
        fireEvent.click(screen.getByText("Like")) // fireeventpara comprobar eventos 
        expect(screen.getByText("Likes: 1")).toBeInTheDocument()
        fireEvent.click(screen.getByText("Dislike")) // fireeventpara comprobar eventos 
        expect(screen.getByText("Likes: 0")).toBeInTheDocument()
})