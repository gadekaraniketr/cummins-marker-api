/**
 * @returns 32 byte api key string
 */
function generateApiKey() {
    const length = 32;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let apiKey = '';
    for (let i = 0; i < length; i++) {
        apiKey += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return apiKey;
}

export { generateApiKey };