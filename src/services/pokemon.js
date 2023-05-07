import api from "./apiConfig.js";

export const getPokemon = async (id) => {
    try {
        const response = await api.get(`/pokemon/${id}`);
        return response.data
    } catch (error) {
        console.error(`Failed to get Pokemon sprite - error: ${error}`);
        throw error;
    }
}

export const getPokeInfo = async (id) => {
    try {
        const response = await api.get(`/pokemon-species/${id}`)
        return response.data
    } catch (error) {
        console.error(`Failed to get Pokemon info - error: ${error}`)        
    }
}