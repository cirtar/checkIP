# IP Address Validator (JavaScript)

This simple JavaScript script checks the validity of an IP address using the `URL` object in the browser environment.

## Usage

1. Open your browser's developer console (`Ctrl + Shift + J` or `Cmd + Option + J` on macOS).
2. Copy and paste the script into the console.
3. Modify the `ipAddress` variable with the desired IP address.
4. Execute the script to see if the IP address is valid.

```javascript
function ipAddressValidator(ip) {
  try {
    const ipObj = new URL(ip); // Use URL object for basic IP address validation
    console.log(`${ip} is a valid IP address`);
  } catch (error) {
    console.error(`ERROR: ${ip} is not a valid IP address!`);
  }
}

const ipAddress = "http://154.16.192.204"; // Example IP address
ipAddressValidator(ipAddress);

// Loop indefinitely to prevent the script from terminating
while (true) {
  // This block will run indefinitely
}
```
## Note: 
The URL object is used here for basic validation.  
In real-world scenarios, more sophisticated methods might be needed for accurate IP address validation.
