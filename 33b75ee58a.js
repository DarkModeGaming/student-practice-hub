(function(){var r=document.getElementById("root");r&&(r.innerHTML=`<iframe id="frame" src="home.html" allowfullscreen allow="autoplay; fullscreen; gamepad; clipboard-write; encrypted-media; picture-in-picture"></iframe>

    <div class="nav-wrapper" id="navWrapper">
        <button class="nav-active-btn" id="activePageBtn">
            <i class="fa-solid fa-house"></i>
            <span class="tip">home</span>
        </button>

        <div class="nav-panel" id="navPanel">
            <div class="nav-main">
       <button class="nav-head" data-src="home.html" title="Home">
                    <i class="fa-solid fa-house"></i>
                    <span class="nav-head-txt">Home</span>
                </button>
                <div class="nav-list">
                    <button class="nav-btn" data-src="play.html" title="Updated â€” new games added">
                        <i class="fa-solid fa-gamepad"></i><span class="nb-label">Play</span><span class="nb-badge">updated</span>
                    </button>
                    <button class="nav-btn" data-src="apps.html">
                        <i class="fa-solid fa-th-large"></i><span class="nb-label">Apps</span>
                    </button>
                    <button class="nav-btn" data-src="chat.html">
                        <i class="fa-solid fa-comments"></i><span class="nb-label">Chat</span>
                    </button>
                    <button class="nav-btn" data-src="ai.html" title="Updated">
                        <i class="fa-solid fa-robot"></i><span class="nb-label">AI</span><span class="nb-badge">updated</span>
                    </button>
                    <button class="nav-btn" data-src="listen.html">
                        <i class="fa-solid fa-headphones"></i><span class="nb-label">Listen</span>
                    </button>
                    <button class="nav-btn" data-src="watch.html" title="Updated">
                        <i class="fa-solid fa-film"></i><span class="nb-label">Watch</span><span class="nb-badge">updated</span>
                    </button>
                    <button class="nav-btn" data-src="uu.html">
                        <i class="fa-solid fa-globe"></i><span class="nb-label">Browse</span>
                    </button>
                </div>
            </div>

            <div class="util-column">
                <button class="util-btn" id="cloakBtn">
                    <i class="fa-solid fa-shield-halved"></i>
                    <span class="tip">cloak</span>
                </button>
                <button class="util-btn" id="settingsBtn">
                    <i class="fa-solid fa-gear"></i>
                    <span class="tip">settings</span>
                </button>
            </div>
        </div>
    </div>

    <div id="toast" class="toast"></div>

    <div id="miniPlayer" class="mini-player">
        <img id="miCover" class="mi-cover" alt="">
        <div class="mi-info">
            <div id="miTitle" class="mi-title"></div>
            <div id="miArtist" class="mi-artist"></div>
            <div class="mi-progress" id="miProgress"><div id="miBar" class="mi-bar"></div><div class="mi-knob" id="miKnob"></div></div>
            <div class="mi-times"><span id="miCur">0:00</span><span id="miDur">0:00</span></div>
        </div>
        <div class="mi-ctrls">
            <button class="mi-btn" id="miPrev" title="Previous"><i class="fa-solid fa-backward-step"></i></button>
            <button class="mi-btn mi-play" id="miPlay" title="Play/Pause"><i class="fa-solid fa-play"></i></button>
            <button class="mi-btn" id="miNext" title="Next"><i class="fa-solid fa-forward-step"></i></button>
            <button class="mi-btn" id="miOpen" title="Open Music"><i class="fa-solid fa-up-right-from-square"></i></button>
            <button class="mi-btn" id="miMin" title="Minimize"><i class="fa-solid fa-minus"></i></button>
            <button class="mi-btn" id="miClose" title="Close"><i class="fa-solid fa-xmark"></i></button>
        </div>
    </div>`)})();
