class Links {
    static include() {
        const links = [
            {title: 'tecmundo', url: 'www.tecmundo.com.br'},
            {title: 'techtudo', url: 'www.techtudo.com.br'},
            {title: 'Valor Econômico', url: 'www.valor.com.br'},
            {title: 'Tecnologia Uol', url: 'www.tecnologia.uol.com.br'},
            {title: 'Moblee', url: 'www.moblee.com.br'},
            {title: 'Observador', url: 'www.observador.pt'},
        ];

        document.getElementById('links').innerHTML =
            links
                .map((link) =>
                    `<div class="link">
                            <div class="title">${link.title}</div>
                            <div class="url"><a href="${link.url}">${link.url}</a></div>
                        </div>`)
                .join("");
    }
}