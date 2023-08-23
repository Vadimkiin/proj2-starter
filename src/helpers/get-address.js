export async function getAddress(ip = '8.8.8.8') {
    const response = await fetch(`
        https://geo.ipify.org/api/v2/country,city?apiKey=at_UiYHakjFXyF39dJqcRfb5GTGSAyhO&ipAddress=${ip}`);
    
    return await response.json();
}

export async function getCurrentAddress() {
    const response = await fetch(`
    https://api.ipify.org?format=json`);
    
    return await response.json();
}