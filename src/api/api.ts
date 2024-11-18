interface APIResponse<T> {
    data: T | null,
    error: string | null
}

const fetchData = async <T>(URL: string, options?: RequestInit): Promise<APIResponse<T>> => {
    try {
    const response = await fetch(URL, options);

    if (!response.ok) {
        throw Error('request error');
    }
    const data: T = await response.json();
    
    return {data, error: null};
    } catch (error) {
        let errorMessage = 'Something went wrong'

        if(error instanceof Error) {
            errorMessage = error.message;
        }
        return {data: null, error: errorMessage};

    }
};

export default fetchData;