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
- **Example**:  


##### Square Root
- **Endpoint**: `/sqrt`
- **Method**: `GET`
- **Query Parameters**:
- `number` (required): The number to find the square root of.
- **Example**:  
