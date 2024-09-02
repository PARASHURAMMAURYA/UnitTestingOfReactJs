import { render,screen } from "@testing-library/react"
import App from "../App"

test('get By Label Text case 1 ',()=>{
    render(<App/>)
    const input = screen.getByLabelText("UserName");
    expect(input).toBeInTheDocument();
});

test('get By Label Text case 2',()=>{
    render(<App/>)
    const checkbox = screen.getByLabelText("Skills");
    expect(checkbox).toBeInTheDocument();  
});

test('get By label Text case 3',()=>{
    render(<App/>);
    const radio = screen.getByLabelText("Gender");
    expect(radio).toBeInTheDocument();
})