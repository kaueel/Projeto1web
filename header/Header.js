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
                        <a class="value" href="../links/links.html">Links</a>
                    </div>
                    <div class="item">
                        <a class="value" href="../media/media.html">Media</a>
                    </div>
                </div>
            </div>`;
    }
}