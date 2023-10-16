import styled from "styled-components";
import React,{useState} from "react";

const Global = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

`;

const Background = styled.div`
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

`;

const Shape = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
`;

const ShapeFirst = styled(Shape)`
  background: linear-gradient(
    #9b22ea,
    #bf23f6
  );
  left: -60%;
  top: -5%;
`;

const ShapeLast = styled(Shape)`
  background: linear-gradient(
    to right,
    #ff512f,
    #f09819
  );
  right: -30px;
  bottom: -80px;
`;

const Form = styled.form`
  height: 70%;
  width: 80%;
  overflow-y:scroll;
  background-color: rgba(255, 255, 255, 0.07);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
`;

const Input = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 20px;
  font-weight: 300;
  border:1px solid black;
  color:white;
  font-weight:bold;
  ::placeholder {
    color: #e5e5e5;
  }
`;

const Button = styled.button`
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`;
const Label=styled.label`
  color:black;
  font-size:15px;
  font-weight:bold;
  background-color: rgba(255, 255, 255, 0.07);
  color:white;
`;

const options = [
  { value: 'Office To Home', label: 'Office To Home' },
  { value: 'Home To Office', label: 'Home To Office' },
]


import Dropdown from "./Dropdown";
const GlassmorphismForm = () => {
  const [selected, setSelected] = useState("Office To Home");
  return (
    <Global>
      <Background>
        <ShapeFirst />
        <ShapeLast />
      </Background>
      <Form>
        <Label htmlFor="mode">Mode of Convince</Label>
        <Input type="text" placeholder="For ex. Sedan" />
        <Label htmlFor="purpose">Purpose</Label>
        <Dropdown selected={selected} setSelected={setSelected} />
        <Label htmlFor="distance">Distance Travelled</Label>
        <Input type="number" placeholder="For ex. 20.40 km" />
        <Label htmlFor="pickupAddress">Pickup Address</Label>
        <Input type="text" placeholder="" />
        <Label htmlFor="destinationAddress">Destination Address</Label>
        <Input type="text" placeholder="" />
        <Label htmlFor="cost">Total Cost</Label>
        <Input type="number" placeholder="For ex. 30$"/>
        <Button>Submit</Button>
      </Form>
    </Global>
  );
};

const Heading=styled.h1`
 color:orange;
 justify-content:center;
 align-items:center;
 text-align:center;
 font-size:40px;

`
export default function App() {
  return (
      <>
      <Heading>ESS Self conveyance form</Heading>
      <GlassmorphismForm/>
      </>
  );
 }