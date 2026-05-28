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
            { sucursal: 'APUMANQUE', region: 'Región Metropolitana', comuna: 'Las Condes', direccion: 'AV APOQUINDO # 5583 LOCAL 1', estado: 'Abierta' }, 
            { sucursal: 'BILBAO', region: 'Región Metropolitana', comuna: 'Providencia', direccion: 'AV BILBAO # 2094', estado: 'Abierta' }, 
            { sucursal: 'SAN DIEGO', region: 'Región Metropolitana', comuna: 'Santiago', direccion: 'SAN DIEGO # 1915', estado: 'Abierta' }
        ];
    }
}