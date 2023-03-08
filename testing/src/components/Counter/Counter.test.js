import {screen, render, waitFor} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

import Counter from "."


describe("Counter tests",() => {

    let count, increaseBtn, decreaseBtn

    //her bir test öncesinde çalışacak olan kodlar yazılır.
    beforeEach(() => {
        render(<Counter />)     
        count = screen.getByText("0")
        increaseBtn = screen.getByText("Increase")  
        decreaseBtn = screen.getByText("Decrease")  
    })

    // tüm testlerden önce bir kere çalışacak olan kodlar yazılır.
    // beforeAll(() => {
    //     console.log("Tüm testlerden önce bir kere çalışır");
    // })

    //her bir test sonrasında çalışacak olan kodlar yazılır.
    // afterEach(() => {
    //     console.log("her bir test sonrasında çalışır.");
    // })

    // tüm testler sonrasında bir kere çalışacak olan kodlar yazılır
    // afterAll(() => {
    //     console.log("tüm testler gerçekleştikten sonra bir kere çalışır");
    // })


    test("increase test", () => {     
            userEvent.click(increaseBtn);           
        
       waitFor(() => {
        expect(count).toHaveTextContent("1")
       })
    })

    test("decrease test", () => {      
        userEvent.click(decreaseBtn);  

       waitFor(() => {
        expect(count).toHaveTextContent("-1")
       })
    })
})

