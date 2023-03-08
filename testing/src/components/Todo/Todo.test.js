import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index"

describe("Todo testleri", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />)

        button = screen.getByText("Add")
        input = screen.getByLabelText("Text")

    })

    test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
        const items = screen.getAllByText(/Item/i)

        expect(items.length).toEqual(3)
    })

    test("input ve buton dökümanda bulunmalı", () => {
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    } )

    test("Inputa girilen string değer listeye eklenmeli", async () => {
        const name = "Huzo"

        // inputa değer giriyoruz
        await userEvent.type(input, name)

        // butona tıklattırıyoruz
        await userEvent.click(button)

        // await anahtar kelimesini kullandım ki önce değer girilsin ardından butona tıklanması beklensin ve en sonra çıktıyı sayfa üzerinde bekleyeyim.
        
        // inputa girilen değerin butona tıklandıktan sonra sayfa içerisinde olmasını bekliyoruz
        expect(screen.getByText(name)).toBeInTheDocument();
        
        
    })

})