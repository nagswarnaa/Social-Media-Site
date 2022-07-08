export async function fetchData(route = '', data = {}, methodType) {

    let req = {
        method: methodType,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (methodType == 'POST' || methodType == 'DELETE') {
        req['body'] = JSON.stringify(data);
    }
    const response = await fetch(`http://localhost:5000${route}`, req);
    if (response.ok) {
        return await response.json()
    }
    else {
        throw await response.json()
    }
}