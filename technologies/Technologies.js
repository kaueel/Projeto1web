class Technologies {
    static include() {
        const technologies = [
            {name: 'Grid Layout', explanation: 'Grid layout nos facilitou muito a vida quando o assunto é criar grids usando css'},
            {name: 'ES6', explanation: 'O uso da nova versão do JavaScript nos ajudou bastante também, usando ele, podemos fazer ' +
                                        'página dinâmicas bem mais flexíveis'},
            {name: 'Metodologia de desenvolvimento por componente', explanation: 'Pensamos em componentes ao desenvolver para web ' +
                                        'assim facilitando a separação de tarefas'},
        ];

        document.getElementById('technologies').innerHTML =
            technologies
                .map((technology) =>
                    `<div class="technology">
                        <div class="name">
                            <span class="value">${technology.name}</span>
                        </div>
                        <div class="explanation">
                            <span class="value">${technology.explanation}</span>
                        </div>
                    </div>`)
                .join("");
    }
}