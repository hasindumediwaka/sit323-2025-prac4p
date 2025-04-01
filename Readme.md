# SIT323/SIT737 - Cloud Native Application Development

## 4.2C: Enhanced Functionality for the Calculator Microservice

### 1. Overview
This Calculator Microservice provides a simple API for performing basic and advanced arithmetic operations. 
It includes endpoints for addition, subtraction, multiplication, division, exponentiation, square root, and modulo. 
The service also includes enhanced error handling to ensure reliable and informative error messages for invalid inputs.

### 2. Advanced Arithmetic Operations

#### API Endpoints

##### Exponentiation
- **Endpoint**: `/exponentiate`
- **Method**: `GET`
- **Query Parameters**:
  - `base` (required): The base number.
  - `exponent` (required): The exponent number.
- **Example**:  http://localhost:3000/exponentiate?base=2&exponent=3


##### Square Root
- **Endpoint**: `/sqrt`
- **Method**: `GET`
- **Query Parameters**:
- `number` (required): The number to find the square root of.
- **Example**:  http://localhost:3000/sqrt?number=16

##### Modulo
- **Endpoint**: /modulo
- **Method**: GET
- **Query Parameters**:
- `dividend` (required): The dividend (numerator).
- `divisor` (required): The divisor (denominator).
- **Example**:  
http://localhost:3000/modulo?dividend=10&divisor=3

### 3. Handle Errors
- *Negative Square Root Handling*:  
```json
{
  "error": "Cannot compute square root of a negative number"
}


