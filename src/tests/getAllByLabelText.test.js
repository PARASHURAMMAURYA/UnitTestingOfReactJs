import { render ,screen} from "@testing-library/react"
import App from "../App"

test('get All By Label Text',()=>{
    render(<App/>);
    const input = screen.getAllByLabelText('Username');
    for(let i=0;i<input.length;i++){
        expect(input[i]).toBeInTheDocument();
    } 
})