// Endpoint for querying the fibonacci numbers
import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
    const { num } = req.params;

    const parsedNum = parseInt(num, 10);
    if (isNaN(parsedNum)) {
        res.send("fibonacci(undefined) is undefined");
        return;
    }

    const fibN: number = fibonacci(parsedNum);
    const result = fibN < 0 ? `fibonacci(${parsedNum}) is undefined` : `fibonacci(${parsedNum}) is ${fibN}`;

    res.send(result);
};
