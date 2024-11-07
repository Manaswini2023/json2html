export default function json2html(data) {
    const headers = Array.from(new Set(data.flatMap(item => Object.keys(item))));
  
    let html = `<table data-user="manaswinidevi2021@gmail.com">`;
    html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
    html += `<tbody>`;
    
    html += data.map(row => {
      return `<tr>${headers.map(header => `<td>${row[header] || ''}</td>`).join('')}</tr>`;
    }).join('');
    html += `</tbody></table>`;
    
    return html;
}
