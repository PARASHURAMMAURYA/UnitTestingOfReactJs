import { render ,screen} from "@testing-library/react"
import App from "../App"

test('get All By Placeholder Text',()=>{
    render(<App/>);
    const input = screen.getAllByPlaceholderText('enter username');
    for(let i=0;i<input.length;i++){
        expect(input[i]).toBeInTheDocument()
    }
})