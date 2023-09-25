canvas.height = video.videoHeight;
//     canvas.width = video.videoWidth;
//   
(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
  
          // Após 3 segundos, redefina os alertas de validação para seus estados normais
          setTimeout(function () {
            form.classList.remove('was-validated');
          }, 3000); // 3000 milissegundos (3 segundos)
        }
      }, false);
    });
  })();

{
    "recommendations" [
        "esbenp.prettier-vscode"
    ]
}