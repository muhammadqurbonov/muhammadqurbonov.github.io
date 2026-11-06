/* Senova CRM page: renderer. Texts live in crm-content.js */
var CS = ["assets/img/crm-1.jpg", "assets/img/crm-2.jpg", "assets/img/crm-3.jpg", "assets/img/crm-4.jpg", "assets/img/crm-5.jpg"];

function crmCards(list) {
  return list.map(function (d) {
    return '<div class="card"><div class="ic">' + d[0] + '</div><h3>' + d[1] + '</h3><p>' + d[2] + '</p></div>';
  }).join("");
}
function crmList(items) {
  return items.map(function (x) { return "<li>" + x + "</li>"; }).join("");
}

function CR() {
  var t = CRC[L], a = t.p1, b = t.p2, u = CRM_URL;
  var chips = t.ind.map(function (x) { return "<span>" + x + "</span>"; }).join("");

  var hero =
    '<a href="#projects" style="color:var(--g);text-decoration:none">' + t.bk + '</a>' +
    '<div class="hero"><div><span class="badge"><i></i><span>' + t.b + '</span></span>' +
    '<h1>' + t.h + ' <span class="gr">' + t.hg + '</span></h1><p>' + t.p + '</p>' +
    '<div class="btns"><a class="btn p" target="_blank" rel="noopener" href="' + u + '">' + t.o + '</a>' +
    '<button class="btn" data-go="crm-p1">' + t.nav1 + '</button>' +
    '<button class="btn" data-go="crm-p2">' + t.nav2 + '</button></div></div>' +
    '<div class="pimg" style="width:min(520px,100%)"><img src="' + CS[2] + '" alt="Senova CRM"></div></div>';

  var part1 =
    '<section class="sec" id="crm-p1"><span class="part">' + a.part + '</span><h2>' + a.h + '</h2>' +
    '<p class="lead">' + a.lead + '</p><p class="lead">' + a.lead2 + '</p><div class="note">' + a.note + '</div>' +
    '<h3 class="sh">' + a.vsh + '</h3><div class="vs">' +
    '<div class="no"><h4>' + a.wo.t + '</h4><ul>' + crmList(a.wo.l) + '</ul></div>' +
    '<div class="yes"><h4>' + a.wi.t + '</h4><ul>' + crmList(a.wi.l) + '</ul></div></div>' +
    '<h3 class="sh">' + a.fh + '</h3><div class="flow">' +
    a.flow.map(function (f) { return '<div><h4>' + f[0] + '</h4><p>' + f[1] + '</p></div>'; }).join("") + '</div>' +
    '<h3 class="sh">' + a.bh + '</h3><div class="grid">' + crmCards(a.ben) + '</div>' +
    '<h3 class="sh">' + a.wh + '</h3><p>' + a.wp + '</p><div class="sk">' + chips + '</div>' +
    '<h3 class="sh">' + a.faqh + '</h3>' +
    a.faq.map(function (q) { return '<details><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>'; }).join("") +
    '</section>';

  var part2 =
    '<section class="sec" id="crm-p2"><span class="part">' + b.part + '</span><h2>' + b.h + '</h2>' +
    '<p class="lead">' + b.lead + '</p>' +
    '<h3 class="sh">' + b.ih + '</h3><p>' + b.ip + '</p>' +
    '<div class="tw"><table class="tbl"><thead><tr><th>' + b.thead[0] + '</th><th>' + b.thead[1] + '</th></tr></thead><tbody>' +
    b.rows.map(function (r) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>"; }).join("") + '</tbody></table></div>' +
    '<p>' + b.inote + '</p>' +
    '<h3 class="sh">' + b.mh + '</h3><div class="grid">' + crmCards(b.mod) + '</div>' +
    '<h3 class="sh">' + b.sth + '</h3><p>' + b.stp + '</p><div class="stg">' +
    b.stages.map(function (x, i) { return '<span class="s' + (i + 1) + '">' + x + '</span>'; }).join("") + '</div><p>' + b.stn + '</p>' +
    '<h3 class="sh">' + b.mth + '</h3><p>' + b.mtp + '</p><div class="met">' +
    b.met.map(function (m) { return '<div><b>' + m[0] + '</b><span>' + m[1] + '</span></div>'; }).join("") + '</div>' +
    '<h3 class="sh">' + b.dh + '</h3><p class="lead">' + b.dp + '</p>' +
    '<div class="steps">' + b.steps.map(function (x) { return "<div>" + x + "</div>"; }).join("") + '</div>' +
    '<h3 class="sh">' + b.gh + '</h3><div class="shots" style="align-items:start">' +
    CS.map(function (x, i) {
      return '<figure><img loading="lazy" alt="' + b.cap[i] + '" src="' + x + '"><figcaption>' + b.cap[i] + '</figcaption></figure>';
    }).join("") + '</div></section>';

  var cta =
    '<div class="cta"><h2>' + b.cta + '</h2><p>' + b.ctap + '</p><div class="btns" style="justify-content:center">' +
    '<a class="btn" target="_blank" rel="noopener" href="' + u + '">' + t.o + '</a>' +
    '<a class="btn" target="_blank" rel="noopener" href="https://t.me/m_qurbonov10">' + b.tg + '</a></div></div>';

  $("#crm").innerHTML = hero + part1 + part2 + cta;
}

/* smooth scroll for the two buttons in the hero */
document.addEventListener("click", function (e) {
  var b = e.target.closest && e.target.closest("[data-go]");
  if (!b) return;
  var el = document.getElementById(b.dataset.go);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
});
