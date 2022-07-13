    // Esperando a porta do servidor
    let port = document.cookie.substring(5);

    // Esperando os Estados da API
    fetch(`http://localhost:${port}/estados`)
      .then((response) => response.json())
      .then(data => {
        // Criando os Options
        for (let i = 0; i <= data.length; i++) {
          let opt = document.createElement('option');
          opt.value = data[i].sigla;
          opt.innerHTML = data[i].estado;
          opt.setAttribute("data-geo", data[i].regiao); 
          select.appendChild(opt);
        }
      })

    // Recebendo o Option selecionado
    select.addEventListener('change', function handleChange(event) {
      let regiao = this.options[this.selectedIndex].getAttribute('data-geo')
      const data = {sigla: event.target.value, geo: regiao};

      // Enviando Option selecionado
      fetch(`http://localhost:${port}/estados`, {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json()) // Resposta da API
        .then((data) => {
          document.getElementById("response").innerHTML = data;
        })
        .catch((error) => {
          console.log("Error:", error)
        });
    });