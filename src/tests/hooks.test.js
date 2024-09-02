

// afterAll || afterEach || beaforeAll || beaforeEach . 

import { fireEvent, render, screen } from '@testing-library/react';
 import Hooks from '../components/Hooks';

beforeEach(()=>{
     console.log('before')
})

beforeAll(()=>{
    console.log('beforeAll')
})



   test("test case 1 ",()=>{
    console.log('Case 1');
    render(<Hooks/>);
    let Texts = screen.getByText("Hello");
    expect(Texts).toBeInTheDocument()
  })

  test("test case 2 ",()=>{
    console.log('Case 2');
    render(<Hooks/>);
    let Texts = screen.getByText("Java");
    expect(Texts).toBeInTheDocument()
  })

  test("test case 3 ",()=>{
    console.log('Case 3');
    render(<Hooks/>);
    let CheckInput = screen.getByRole("textbox");
    expect(CheckInput).toHaveAttribute("name","Enter Name")
  })
 

  

  afterAll(()=>{
    console.log('After All')
  })

  afterEach(()=>{
    console.log('After Each')
  })