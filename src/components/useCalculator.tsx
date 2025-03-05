import { useState } from 'react';

export function useCalculator() {
    const [int1, setInt1] = useState('');
    const [int2, setInt2] = useState('');
    const [result, setResult] = useState('');


    const compute = (int1 : number, int2 : number, op: string) => {
        const num1 = Number(int1);
        const num2 = Number(int2);

        const power = (int1: number, int2: number) =>{
            if (int2 === 0) {
                return 1;
            }
            if (int2 < 0) {
                let base : number = power(int1,-(int2));
                return (1 / base);
            }

            let result = 1;
            for (let i = 0; i < int2; i++) {
                result *= int1;
            }
            return result;
        };

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Invalid input');
            return;
        }

        switch (op) {
            case '+':
                setResult((num1+num2).toString());
                break;
            case '-':
                setResult((num1 - num2).toString());
                break;
            case '*':
                setResult((num1 * num2).toString());
                break;
            case '/':
                if (num2 == 0) {
                    setResult('Cannot divide by zero');
                } else {
                    setResult((num1 / num2).toString());
                }
                break;
            case '**':
                setResult(power(num1, num2).toString());
                break;
            default:
                setResult('');
        }
    };

    const clearAll = () => {
        setInt1('');
        setInt2('');
        setResult('');
    };

    return {
        int1,
        int2,
        result,
        compute,
        clearAll,
    };
}