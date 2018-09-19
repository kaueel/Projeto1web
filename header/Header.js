class Header {
    static include() {
        document.getElementById('header').innerHTML = document.getElementById('header').innerHTML +
            `<div class="header-component">
                <div class="left">
                    <div class="item">
                        <span>Projeto1web</span>
                    </div>
                </div>
                <div class="right">
                    <div class="item">
                        <a class="value" href="./test1/test1.html">Test 1</a>
                    </div>
                    <div class="item">
                        <a class="value" href="./test2/test2.html">Test 2</a>
                    </div>
                </div>
            </div>`;
    }
}