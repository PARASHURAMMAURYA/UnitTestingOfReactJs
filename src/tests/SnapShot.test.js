import { render } from "@testing-library/react";
import SnapShot from "../components/Snapshot";

test('SnapShot Testing',()=>{
    const container = render(<SnapShot/>);
    expect(container).toMatchSnapshot();
})