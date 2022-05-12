import Sum from "../Components/Sum";
import { render, screen, cleanup } from "@testing-library/react";
import { shallow } from "enzyme";


import App from "../App";

test("adds 1 and 2 equals to 3", () => {
  const sum = { a: 10, b: 20 };
  render(<Sum values={sum} />);
  const sumElement = screen.getByTestId("sum-1");
  expect(sumElement).toBeInTheDocument();
  expect(sumElement).toHaveTextContent(10);
});


describe("Counter testing", () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<App />);
    })
    it("render counter text",()=>{        
        console.log(wrapper.debug());
        expect(wrapper.find("h1").text()).toContain("Testing counter text"); 
    });
    
    it("render a button with text of increment",() => {
        expect(wrapper.find('#increment-btn').text()).toBe('Increment');
    });

    it("render the initial value of state in a div",()=>{
        expect(wrapper.find('#counter-value').text()).toBe("0");
    });

    it("render the click event of increment button and increment counter value", () => {
        wrapper.find('#increment-btn').simulate('click');
        expect(wrapper.find('#counter-value').text()).toBe("1");
    });

    it("render the click event of decrement button and decrement counter value", () => {
        wrapper.find('#increment-btn').simulate('click');
        expect(wrapper.find('#counter-value').text()).toBe("1");
        wrapper.find('#decrement-btn').simulate('click');
        expect(wrapper.find('#counter-value').text()).toBe("0");
        
    })
});
