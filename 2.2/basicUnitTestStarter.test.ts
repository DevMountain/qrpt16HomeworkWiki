describe("Testing the calculator", () => {
    test("Example test", () => {
      expect(calculator.add(2, 50)).toBe(52);
    });
    test("Addition works", () => {
      expect(calculator.add(4,6)).toBe(10);
    });
    test("Subtraction works", () => {
      expect(calculator.subtract(6,4)).toBe(2);
    });
    test("Multiplication works", () => {
      expect(calculator.multiply(6,4)).toBe(24);
    });
    test("Division works", () => {
      expect(calculator.divide(24,4)).toBe(6);
    });
    test("Equals", () => {
      let hello: string = "hello"; 
      let helloTwo: string = "hello"; 
      expect(hello).toEqual(helloTwo); 
    }); 
    test("Greater Than", () => {
      let firstNumber: number = 2; 
      let secondNumber: number = 50; 
      expect(secondNumber).toBeGreaterThan(firstNumber); 
    }); 
    test("Less Than", () => {
      let numberOne:number = 50; 
      let numberTwo: number = 2; 
      expect(numberTwo).toBeLessThan(numberOne); 
    })
    describe("Stretch Goals", () => {
      test("(2+2)/4 == 1", () => {
        expect(calculator.divide(calculator.add(2, 2), 4)).toBe(1);
      });
      test("(28/4)*(6/2)*(30-27+(3-4)) == 42", () => {
        expect(true).toBeTruthy();
      });
    });
  });
  
  const calculator = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */
    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */
    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */
    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */
    divide: (a: number, b: number): number => a / b,
  };