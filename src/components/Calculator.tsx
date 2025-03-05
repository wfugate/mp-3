
import styled from 'styled-components';
import { useCalculator } from './useCalculator'; // Import the custom hook
import {useRef} from 'react';
// Styled Components
const CalculatorContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 5vw;
    display: flex;
    flex-direction: column;
`;

const CalculatorTitle = styled.h1`
    text-align: center;
    font-size: calc(2.5vw);
    font-family: 'Oi', sans-serif;
    color: #6b6158;
`;

const CalculatorResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Output = styled.h3`
    text-align: center;
    padding: 0;
    font-size: calc(1.5vw);
    font-family: 'Oi', sans-serif;
    color: ${(props) => (props.results < 0 ? 'red' : 'black')};
`;

const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    font-size: calc(1vw);
    font-family: 'Oi', sans-serif;
    border-radius: 10%;
    background: #fff2b7;
    margin: 0.5vw;
    padding: 0.5vw;
    width: 40%;
`;

const Buttons = styled.div`
    padding: 0.5vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Oi', sans-serif;

`;

const Button = styled.button`
    border-radius: 50%;
    height: 4vw;
    width: 4vw;
    font-size: calc(1.4vw);
    font-weight: bold;
    font-family: 'Oi', sans-serif;
    color: #6b6158;
    background-color: #ff69ad;
    margin: 1vw;
    cursor: pointer;
`;

const ClearButton = styled.button`
    border-radius: 0;
    height: 3vw;
    width: 20vw;
    font-size: calc(1.4vw);
    font-weight: bold;
    font-family: 'Oi', sans-serif;
    background-color: #6983ff;
    color: #6b6158;
    margin: 1vw auto;
`;

const CalculatorResultLabel = styled.p`
    font-family: 'Oi', sans-serif;
    font-size: calc(1.5vw);
`;


export default function Calculator() {
    const int1Ref = useRef(null);
    const int2Ref = useRef(null);
    const { result, compute, clearAll } = useCalculator();

    const performOperation = (op : string) => {
        const int1 = int1Ref.current.value;
        const int2 = int2Ref.current.value;
        compute(int1, int2, op);
    };

    const clearCalculator = () => {
        int1Ref.current.value = '';
        int2Ref.current.value = '';
        clearAll();
    };


    return (
        <CalculatorContainer>
            <CalculatorTitle>Calculate!</CalculatorTitle>
            <CalculatorResult>
                <CalculatorResultLabel>Result:</CalculatorResultLabel>
                <Output result={result}>{result}</Output>
            </CalculatorResult>
            <Inputs>
                <Input
                    type="number"
                    placeholder="Enter first number"
                    ref={int1Ref}
                />
                <Input
                    type="number"
                    placeholder="Enter second number"
                    ref={int2Ref}
                />
            </Inputs>
            <Buttons>
                <Button onClick={() => performOperation('*')}>*</Button>
                <Button onClick={() => performOperation('/')}>/</Button>
                <Button onClick={() => performOperation('+')}>+</Button>
                <Button onClick={() => performOperation('-')}>-</Button>
                <Button onClick={() => performOperation('**')}>**</Button>
            </Buttons>
            <ClearButton onClick={clearCalculator}>Clear</ClearButton>
        </CalculatorContainer>
    );
}