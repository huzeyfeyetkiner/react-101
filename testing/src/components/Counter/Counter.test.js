import {screen, render, waitFor} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Counter from "."

test("counter component test", async () => {
    render(<Counter />)

    const count = screen.getByText("0")

    const increaseBtn = screen.getByText("Increase")

   
    userEvent.click(increaseBtn);
   
   await waitFor(() => {
    expect(count).toHaveTextContent("1")
   })
})