export async function fetchComunas() {
    // Buscar otra api valida o lista de datos dummies de cchile: 'https://apis.digital.gob.cl/dpa/regiones/13/comunas'
    const url = './assets/data/comunas.json';
    
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error al cargar datos locales: ${res.status}`);
        
        const data = await res.json();
        return data;

    } catch (error) {
        console.warn('Error fetching comunas:', error);
        return [
            { codigo: '13114', nombre: 'Las Condes' }, 
            { codigo: '13123', nombre: 'Providencia' }, 
            { codigo: '13101', nombre: 'Santiago' }
        ];
    }
}