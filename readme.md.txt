SIT323/SIT737- Cloud Native Application Development 
4.2C: Enhanced Functionality for the Calculator Microservice 
1. Overview 
This Calculator Microservice provides a simple API for performing basic and 
advanced arithmetic operations. It includes endpoints for addition, subtraction, 
multiplication, division, exponentiation, square root, and modulo. The service also 
includes enhanced error handling to ensure reliable and informative error messages 
for invalid inputs. 
2. advanced arithmetic operations 
2.1. 
API Endpoints 
➢ Exponentiation 
http://localhost:3000/exponentiate?base=2&exponent=3 
• Endpoint: /exponentiate 
• Method: GET 
• Query Parameters: 
base (required): The base number. 
exponent (required): The exponent number. 
➢ Square Root 
http://localhost:3000/sqrt?number=16 
• Endpoint: /sqrt 
• Method: GET 
• Query Parameters: 
number (required): The number to find the square root of. 
➢ Modulo 
http://localhost:3000/modulo?dividend=10&divisor=3 
• Endpoint: /modulo 
• Method: GET 
• Query Parameters: 
dividend (required): The dividend (numerator). 
divisor (required): The divisor (denominator). 
3. Implement the API Endpoints 
4. Handle Errors 
➢ Negative Square Root: If a negative number is provided for the square root 
calculation: 
5. GitHub repository link 
➢ https://github.com/hasindumediwaka/sit323-2025-prac4p.git 