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
    if (!select) return;

    // Get unique comunas
    const uniqueComunas = [...new Set(comunas.map(c => c.comuna))].sort();
    
    select.innerHTML = '<option value="" selected="selected">Todas las comunas</option>';
    
    uniqueComunas.forEach(comuna => {
        const option = document.createElement('option');
        option.value = escapeHTML(comuna);
        option.textContent = escapeHTML(comuna);
        select.appendChild(option);
    });
}

export function renderTablaComunas(comunas, page = 1, itemsPerPage = 10) {
    const contenedor = document.getElementById('tabla-comunas-contenedor');
    const paginationWrapper = document.getElementById('pagination-wrapper');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');

    if (!contenedor) return;

    const totalItems = comunas.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = comunas.slice(startIndex, endIndex);

    let html = '';

    if (paginatedItems.length === 0) {
        html = '<tr><td colspan="5" class="text-center py-4 text-secondary">No se encontraron sucursales con estos filtros.</td></tr>';
    } else {
        paginatedItems.forEach(item => {
            const isAbierta = item.estado.toLowerCase() === 'abierta';
            const statusClass = isAbierta ? 'badge-abierta' : 'badge-cerrada';
            const dotColor = isAbierta ? '#003698' : '#6c757d'; 
            
            html += `
                <tr>
                    <td class="py-3 px-3">
                        <div class="d-flex align-items-center gap-2">
                            <span style="display: inline-block; width: 6px; height: 6px; background-color: ${dotColor}; border-radius: 50%;"></span>
                            <span class="text-secondary" style="font-size: 13px; letter-spacing: 0.5px;">${escapeHTML(item.sucursal)}</span>
                        </div>
                    </td>
                    <td class="py-3 px-3 text-secondary" style="font-size: 13px;">${escapeHTML(item.region)}</td>
                    <td class="py-3 px-3 text-secondary" style="font-size: 13px;">${escapeHTML(item.comuna)}</td>
                    <td class="py-3 px-3 text-secondary" style="font-size: 13px;">${escapeHTML(item.direccion)}</td>
                    <td class="py-3 px-3 text-center">
                        <span class="badge rounded-pill ${statusClass}" style="font-weight: 500; padding: 6px 12px;">${escapeHTML(item.estado)}</span>
                    </td>
                </tr>
            `;
        });
    }

    contenedor.innerHTML = html;

    if (paginationWrapper) {
        paginationWrapper.classList.remove('d-none');
        if (totalItems <= itemsPerPage) {
            paginationWrapper.classList.add('d-none');
        } else {
            currentPageSpan.textContent = page;
            totalPagesSpan.textContent = totalPages;
            
            btnPrev.disabled = page === 1;
            btnNext.disabled = page === totalPages;
            
            btnPrev.style.color = page === 1 ? '#6c757d' : '#ea6f00';
            btnNext.style.color = page === totalPages ? '#6c757d' : '#ea6f00';
            btnPrev.classList.toggle('text-secondary', page === 1);
            btnNext.classList.toggle('text-secondary', page === totalPages);
        }
    }
}