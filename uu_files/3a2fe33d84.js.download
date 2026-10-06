(function(){var r=document.getElementById("root");r&&(r.innerHTML=`<section id="study-content" class="view-section">
  <div id="study-app"></div>
</section>

<div class="wisp-settings-modal hidden" id="wisp-settings-modal">
  <div class="wisp-card">
    <div class="wisp-header">
      <h2><i class="fa-solid fa-gear" style="font-size:1.2rem;color:var(--accent)"></i>Settings</h2>
      <button class="close-btn" id="close-wisp-modal"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="settings-content" id="settings-tab-servers">
      <div class="section-title"><i class="fa-solid fa-shuffle"></i>Browse Engine</div>
      <div class="engine-toggle" id="engine-toggle">
        <button type="button" class="engine-btn" data-engine="scramjet"><i class="fa-solid fa-bolt"></i> Scramjet</button>
        <button type="button" class="engine-btn" data-engine="uv"><i class="fa-solid fa-shield-halved"></i> Ultraviolet</button>
      </div>
      <div class="section-title"><i class="fa-solid fa-network-wired"></i>Transport</div>
      <div class="engine-toggle" id="transport-toggle">
        <button type="button" class="engine-btn" data-transport="epoxy"><i class="fa-solid fa-feather"></i> Epoxy</button>
        <button type="button" class="engine-btn" data-transport="libcurl"><i class="fa-solid fa-tower-broadcast"></i> Libcurl</button>
      </div>
      <div class="section-title"><i class="fa-solid fa-magnifying-glass"></i>Page Zoom</div>
      <div class="zoom-control" id="zoom-control">
        <div class="zoom-pill">
          <button class="zoom-btn" id="zoom-out" title="Zoom out"><i class="fa-solid fa-minus"></i></button>
          <span class="zoom-level" id="zoom-level">100%</span>
          <button class="zoom-btn" id="zoom-in" title="Zoom in"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button class="zoom-reset" id="zoom-reset" title="Reset zoom"><i class="fa-solid fa-rotate-left"></i></button>
      </div>
      <div class="section-title"><i class="fa-solid fa-plug"></i>Custom Server</div>
      <div class="custom-input-group">
        <input type="text" id="custom-wisp-input" placeholder="wss://your-server.com/wisp/" spellcheck="false">
        <button id="save-custom-wisp"><i class="fa-solid fa-plus"></i></button>
      </div>
    </div>
    <div class="settings-footer">
      <i class="fa-solid fa-bolt" style="color:var(--accent);margin-right:6px"></i>Lower ping = faster browsing<span id="wisp-latency">measuring…</span>
    </div>
  </div>
</div>

<div class="wisp-settings-modal hidden" id="ext-modal">
  <div class="wisp-card">
    <div class="wisp-header">
      <h2><i class="fa-solid fa-puzzle-piece" style="font-size:1.2rem;color:var(--accent)"></i>Extensions</h2>
      <button class="close-btn" id="close-ext-modal"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="settings-content">
      <div class="section-title"><i class="fa-solid fa-code"></i>My scripts</div>
      <div class="us-list" id="us-list"></div>
      <button class="us-add-btn" id="us-add-btn"><i class="fa-solid fa-plus"></i> New userscript</button>
      <div class="us-editor hidden" id="us-editor">
        <input id="us-name" placeholder="Script name" spellcheck="false">
        <input id="us-match" placeholder="Match URL, or * for all sites" spellcheck="false">
        <textarea id="us-code" placeholder="JavaScript" spellcheck="false"></textarea>
        <div class="us-editor-btns">
          <button id="us-save"><i class="fa-solid fa-check"></i> Save</button>
          <button id="us-cancel" class="secondary">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>

<template id="nt-html-template"><!DOCTYPE html>
<html lang="en">
<head><script>document.head.appendChild(Object.assign(document.createElement("base"),{href:parent.location.href.split("?")[0].replace(/[^/]*$/,"")}));</script>
  <meta charset="UTF-8">
  <title>New Tab</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Outfit:wght@300..700&display=swap">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="561f898249.css">
</head>
<body>
  <div class="content">
    <div class="hero-block">
      <h1 class="gl-title">Tung Tung</h1>
    </div>
    <form class="search-wrap" id="searchForm">
      <div class="search-box">
        <span class="search-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="7"/>
            <line x1="16.5" y1="16.5" x2="22" y2="22"/>
          </svg>
        </span>
        <input type="text" id="searchInput" placeholder="Search or enter URL..." autocomplete="off" spellcheck="false">
      </div>
    </form>
    <div class="shortcuts" id="shortcuts"></div>
  </div>
  <div class="modal-overlay hidden" id="addModal">
    <div class="modal">
      <div class="modal-header">
        <h2>Add Shortcut</h2>
        <button class="modal-close" id="cancelAdd"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <label>Label</label>
      <input type="text" id="newLabel" placeholder="YouTube" spellcheck="false">
      <label>URL</label>
      <input type="text" id="newUrl" placeholder="https://youtube.com" spellcheck="false">
      <div class="modal-footer">
        <button class="btn-cancel" id="cancelAdd2">Cancel</button>
        <button class="btn-save" id="confirmAdd">Add</button>
      </div>
    </div>
  </div>
  <script src="91a7ebacba.js"><\/script>
<div style="display:none" aria-hidden="true">
  <h1>Study Portal — Standards-Aligned Practice for Kindergarten Through Grade 12</h1>
  <p>Study Portal is a free practice library for students, teachers and families. It covers mathematics, English language arts, science, social studies and world languages across every grade band, with diagnostic placement, spaced review and printable progress reports. Every skill is mapped to Common Core State Standards, the Next Generation Science Standards, or the relevant state framework.</p>
  <section>
    <h2>Mathematics</h2>
    <p>Kindergarten through grade 2 builds counting, place value, addition and subtraction within 100, measurement, and two-dimensional shapes. Grades 3 to 5 cover multiplication and division fluency, equivalent fractions, decimal operations, area and perimeter, volume, and coordinate graphing. Middle school moves through ratios and proportional relationships, integers and rational numbers, expressions and linear equations, the Pythagorean theorem, and introductory statistics and probability. High school tracks include Algebra I, Geometry, Algebra II, Precalculus, AP Statistics and AP Calculus AB and BC, with worked solutions for quadratics, logarithms, trigonometric identities, sequences and series, limits, derivatives and integrals.</p>
  </section>
  <section>
    <h2>English Language Arts</h2>
    <p>Early literacy begins with phonemic awareness, letter-sound correspondence, decoding, sight words and oral reading fluency. Later grades develop close reading of literary and informational text, main idea and supporting detail, author's purpose, point of view, figurative language, and evidence-based analysis. Writing instruction moves from sentence construction and paragraph structure to narrative, expository, argumentative and research writing, including thesis development, counterclaims, source evaluation, and citation in MLA and APA style. Grammar practice covers parts of speech, subject-verb agreement, verb tense, clauses, punctuation and commonly confused words.</p>
  </section>
  <section>
    <h2>Science</h2>
    <p>Elementary units introduce living and non-living things, habitats and food webs, weather and seasons, states of matter, forces and motion, and the water cycle. Middle school covers cells and heredity, body systems, ecosystems and energy flow, plate tectonics, the rock cycle, atomic structure, chemical reactions, waves, and the solar system. High school courses span Biology, Chemistry, Physics and Environmental Science, including photosynthesis and cellular respiration, Mendelian genetics and DNA replication, natural selection, stoichiometry, periodic trends, acids and bases, thermodynamics, kinematics, circuits and electromagnetism. Laboratory practice emphasises hypothesis formation, controlled variables, data tables, graphing and error analysis.</p>
  </section>
  <section>
    <h2>Social Studies</h2>
    <p>United States history runs from indigenous nations and colonial settlement through the Revolution, the Constitution, westward expansion, the Civil War and Reconstruction, industrialisation and immigration, the Progressive Era, the World Wars, the Great Depression, the Civil Rights Movement and the modern era. World history covers ancient river valley civilisations, classical Greece and Rome, medieval Europe, Islamic empires, dynastic China, the Renaissance and Reformation, exploration and colonisation, revolutions, and twentieth century conflict. Civics units address the three branches of government, federalism, the Bill of Rights, the legislative process, elections and civic participation. Geography and economics cover map skills, climate regions, population and migration, supply and demand, scarcity and opportunity cost, and personal financial literacy.</p>
  </section>
  <section>
    <h2>World Languages</h2>
    <p>Language courses combine audio-first lessons, native speaker dialogue, and written practice for Spanish, French, German, Italian, Portuguese, Mandarin Chinese, Japanese, Korean, Russian, Arabic, Hindi and English as a Second Language. Lessons are mapped to the Common European Framework of Reference across the A1, A2, B1, B2 and C1 bands, and to ACTFL proficiency levels for United States classrooms. Each unit pairs a contextual dialogue with vocabulary drilling, pronunciation practice, and a short composition task, and spaced repetition keeps earlier vocabulary in long-term memory.</p>
  </section>
  <section>
    <h2>Test Preparation</h2>
    <p>Preparation tracks cover the SAT and ACT, PSAT and NMSQT, AP examinations across mathematics, the sciences, history and world languages, and state summative assessments. Language certification tracks support DELE and SIELE for Spanish, DELF and DALF for French, the Goethe-Zertifikat for German, CILS for Italian, HSK for Mandarin, JLPT for Japanese, TOPIK for Korean, and TOEFL and IELTS for English. Full-length timed practice sections report a scaled score estimate alongside a breakdown of question types missed.</p>
  </section>
  <section>
    <h2>How Practice Works</h2>
    <p>A short diagnostic places each learner at the right starting skill rather than the start of a grade. Questions adapt as accuracy rises, and skills that were answered incorrectly return on a spaced schedule until they are secure. Every question includes a step-by-step explanation rather than a bare answer key. Teachers and families can view usage time, skills mastered, and per-standard breakdowns, and export progress reports for conferences, intervention planning and individualised education programme documentation.</p>
  </section>
  <section>
    <h2>Accessibility</h2>
    <p>The interface supports keyboard navigation, screen reader labelling, adjustable text size, high contrast display, and extended or untimed practice for learners with accommodations. Reading passages are available with text-to-speech, and mathematics content is written to be legible to assistive technology.</p>
  </section>
</div>
</body>
</html></template>`)})();
