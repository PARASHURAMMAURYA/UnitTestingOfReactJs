import { fireEvent, render ,screen} from "@testing-library/react"
import FunctionMethod from "../components/FunctionMethod"

test('function method testing',()=>{
    render(<FunctionMethod/>);
    const btn = screen.getByTestId('btn1');
    fireEvent.click(btn);
    expect(screen.getByText('hello')).toBeInTheDocument();
})
 