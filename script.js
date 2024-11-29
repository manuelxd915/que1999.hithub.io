
function calcularSubredes() {
    const ip = document.getElementById('ip').value;
    const mascara = document.getElementById('mascara').value;
    const cantidadSubredes = parseInt(document.getElementById('subredes').value);


    const bitsNecesarios = Math.ceil(Math.log2(cantidadSubredes));
    
    const ipPartes = ip.split('.');
    const mascaraPartes = mascara.split('.');
    
    const tablaBody = document.getElementById('tablaBody');
    tablaBody.innerHTML = '';


    let baseIP = parseInt(ipPartes[3]);
    let incremento = 256 / Math.pow(2, bitsNecesarios);

    for (let i = 0; i < Math.pow(2, bitsNecesarios); i++) {
        let tr = document.createElement('tr');
   
        let primeraIP = `${ipPartes[0]}.${ipPartes[1]}.${ipPartes[2]}.${baseIP}`;
        let ultimaIP = `${ipPartes[0]}.${ipPartes[1]}.${ipPartes[2]}.${baseIP}`;
        let broadcast = `${ipPartes[0]}.${ipPartes[1]}.${ipPartes[2]}.${baseIP}`;

        tr.innerHTML = `
            <td>${primeraIP}</td>
            <td>${ultimaIP}</td>
            <td>${mascara}</td>
            <td>${broadcast}</td>
        `;
        
        tablaBody.appendChild(tr);
        baseIP += incremento;
    }
}
