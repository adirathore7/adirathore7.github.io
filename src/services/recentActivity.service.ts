import { mockRecentActivity } from "../mockData/mockRecentActivity";


export async function fetchRecentActivity() {
    // Placeholder for API call
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    let data = [...mockRecentActivity];
    return data;
}