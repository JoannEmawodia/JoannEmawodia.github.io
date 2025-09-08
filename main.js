fetch('https://api.github.com/users/JoannEmawodia/repos')
    .then(response => response.json())
    .then(data => {
        const projetosDiv = document.getElementById('projetos');
        const ul = document.createElement('ul');
        ul.classList.add('list-unstyled');

        data.forEach(repo => {
            const li = document.createElement('li');
            li.classList.add('mb-2');
            li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
            ul.appendChild(li);
        });

        projetosDiv.appendChild(ul);
    })
    .catch(error => console.error('Erro ao buscar repositórios:', error));