import { render,screen } from "@testing-library/react"
import App from "../App"

test('get by Placeholder Text',()=>{
    render(<App/>);
    const input = screen.getByPlaceholderText('enter username');
    expect(input).toBeInTheDocument();
})