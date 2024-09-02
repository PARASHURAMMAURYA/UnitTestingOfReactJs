import renderer from 'react-test-renderer';
import ClassComponent from '../components/ClassComponent'

test('class component method testing',()=>{
const componentData = renderer.create(<ClassComponent/>).getInstance();
 expect(componentData.getUserList()).toMatch("user list");
})