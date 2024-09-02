import { render,screen } from "@testing-library/react"
 import App from "../App";

// test('get By Role Query',()=>{
//     render(<App/>);
// const inputField = screen.getByRole('textbox');
// const btn = screen.getByRole('button')
// expect(inputField).toBeInTheDocument();
// expect(inputField).toHaveValue('hello');
// expect(btn).toBeInTheDocument();
// });


/// multiple Elememt and custom role 

test('get bt role testing',()=>{
    render(<App/>)
    const btn1 = screen.getByRole("button",{name:'Click 1'});
    const btn2 = screen.getByRole("button",{name:'Click 2'});
    const text1 = screen.getByRole('textbox',{name:'UserName'});
    const text2 = screen.getByRole('textbox',{name:'City'});
    const div1  = screen.getByRole("dummy");
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(div1).toBeInTheDocument();


})