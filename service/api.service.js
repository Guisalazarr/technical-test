const baseUrl = 'https://api-technica-test.onrender.com';

// Metodo POST para conexão com a API.
export async function toPost(rote, data, token) {
    
        const response = await fetch(`${baseUrl}/${rote}`, {
            method: 'POST',
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return await response.json()
} 

// Metodo GET para conexão com a API
export async function toGet(rote, token) {
        const response = await fetch(`${baseUrl}/${rote}`,{
        method: 'GET',
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
        }
    })

        return await response.json()
        
} 


// Metodo DELETE para conexão com a API
export async function toDelete(rote, token) {
    
    const response = await fetch(`${baseUrl}/${rote}`,{
    method: 'DELETE',
    headers: {
        'Authorization':`${token}`,
        'Content-Type': 'application/json',
    }
})

    return await response.json()
    
} 




