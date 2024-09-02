import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



// test('Testing Input Component',()=>{
//   render(<App/>);
//   const CheckInput = screen.getByRole("textbox");
//   expect(CheckInput).toBeInTheDocument();

//   expect(CheckInput).toHaveAttribute("name","username")
// });
 


// for group test
// describe("UI test case group",()=>{
//   test("test case 1 ",()=>{
//     render(<App/>);
//     let CheckInput = screen.getByRole("textbox");
//     expect(CheckInput).toHaveAttribute("name","username")
//   })

//   test("test case 2 ",()=>{
//     render(<App/>);
//     let CheckInput = screen.getByRole("textbox");
//     expect(CheckInput).toHaveAttribute("name","username")
//   })

//   test("test case 3 ",()=>{
//     render(<App/>);
//     let CheckInput = screen.getByRole("textbox");
//     expect(CheckInput).toHaveAttribute("name","username")
//   })
// })




// test('on change event Testing',()=>{
//   render(<App/>);
//   let input= screen.getByRole("textbox");
//   fireEvent.change(input,{target:{value:'a'}});
//   expect(input.value).toBe("atest");
// })




// test("click event test case",()=>{
//   render(<App/>);
//   const btn = screen.getByRole("button");
//   fireEvent.click(btn);
//   expect(screen.getByText("hello")).toBeInTheDocument();
// })

