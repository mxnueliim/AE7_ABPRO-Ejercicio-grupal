$(document).ready(function () {
    $('.confirmButton').on('click', function(e) {
        e.preventDefault();

        const formPrincipal = document.querySelector('.needs-validation');

        if (!formPrincipal.checkValidity()) {
            formPrincipal.classList.add('was-validated');
            return
        } else {
            alert('Estimado/a ' + $('#nombreCliente').val() + ' usted a reservado el servicio de ' + $('#tipoReparacion option:selected').text() + ' con éxito.');
            formPrincipal.reset();
            formPrincipal.classList.remove('was-validated');

        }
    })
})