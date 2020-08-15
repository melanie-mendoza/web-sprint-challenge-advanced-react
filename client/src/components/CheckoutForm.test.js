import React from "react";
import * as rtl from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import '@testing-library/jest-dom/extend-expect';


afterEach(rtl.cleanup);
rtl.fireEvent.click;

// Write up the two tests here and make sure they are testing what the title shows

// test("form header renders", () => {});

// test("form shows success message on submit with form details", () => {});

test('Render the checkoutform', () => {
    const wrapper = rtl.render(<CheckoutForm />)
    
    // element is the dom element that we can make assertions against
    const element = wrapper.getByText('Checkout Form')

    // assert
    expect(element).toBeVisible()
    // make it fail by putting style on h2 -> style={{display: 'none'}}
    
    //wrapper.debug(wrapper.getByText(/you have ordered some plants woo-hoo/i))
    //wrapper.debug() -> logs out/shows the whole structure 
})

test('form shows success message on submit with form details', () => {
    const wrapper = rtl.render(<CheckoutForm />)
    rtl.fireEvent.click(wrapper.getByText('Checkout'))
    const element = wrapper.getByTestId('successMessage')
    expect(element).toBeVisible()
})
