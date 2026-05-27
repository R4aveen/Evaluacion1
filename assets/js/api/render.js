export function escapeHTML(str) {
    return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

export function renderSelectComunas(comunas) {
    const select = document.getElementById('comunas-select');
    
    select.innerHTML = '<option value="" selected="selected">Todas las comunas</option>';
    
    comunas.forEach(comuna => {
        const option = document.createElement('option');
        
        const valorLimpio = comuna.nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        
        option.value = escapeHTML(valorLimpio);
        option.textContent = comuna.nombre;
        
        select.appendChild(option);
    });
}

export function renderTablaComunas(comunas) {
    const contenedor = document.getElementById('tabla-comunas-contenedor');
    if (!contenedor) return;

    let html = `
        <table class="table table-bordered table-striped table-hover text-start m-0">
            <thead class="table-dark" style="position: sticky; top: 0; z-index: 1;">
                <tr>
                    <th>Código</th>
                    <th>Nombre Comuna</th>
                </tr>
            </thead>
            <tbody>
    `;

    comunas.forEach(comuna => {
        html += `
            <tr>
                <td>${escapeHTML(comuna.codigo || '-')}</td>
                <td>${escapeHTML(comuna.nombre)}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    contenedor.innerHTML = html;
}