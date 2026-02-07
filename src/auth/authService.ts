
/*
 Mock authentication service. In real applications, this would interface with a backend API.
 Kept simple for demonstration purposes.
*/
export async function login(email: string, password: string) {
  // Simulate login API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
    // Return a mock user object
    if (email === "test@email.com" && password === "test123") {
        return { name: "John Doe" };
    }
    // Simulate login failure
    throw new Error("Invalid email or password");
}