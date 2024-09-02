import { render,screen } from "@testing-library/react"
import App from "../App"

test ('getAllByRole',()=>{
render(<App/>);
const btn = screen.getAllByRole('button');
for(let i=0;i<btn.length;i++){
    expect(btn[i]).toBeInTheDocument();
}


const opt = screen.getAllByRole('option');
for(let i=0;i<opt.length;i++){
    expect(btn[i]).toBeInTheDocument();
}
})