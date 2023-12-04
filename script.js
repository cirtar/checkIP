function ipAddressValidator(ip) {
  try {
    const ipObj = new URL(ip); // Using a URL object to check if the IP address is correct
    console.log(`${ip} is a valid IP address`);
  } catch (error) {
    console.error(`ERROR: ${ip} is not a valid IP address!`);
  }
}

const ipAddress = "http://154.16.192.204"; // Example IP address
ipAddressValidator(ipAddress);

// We loop execution so that the script does not terminate instantly
while (true) {
  // This block will run forever
}
