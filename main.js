(function () {
  const cfg = window.FREEDOM_CONFIG || {};
  const el = document.getElementById("typewriter");
  if (!el) return;

  const text = cfg.text ?? "FREEDOM.";
  const charDelayMs = Number(cfg.charDelayMs) || 120;
  const pauseAfterCompleteMs = Number(cfg.pauseAfterCompleteMs) || 0;
  const loop = cfg.loop !== false;
  const pauseBeforeRestartMs = Number(cfg.pauseBeforeRestartMs) || 2200;
  const showCursor = cfg.showCursor !== false;
  const cursorStyle = cfg.cursorStyle === "char" ? "char" : "bar";
  const cursorChar = cfg.cursorChar ?? "|";
  const cursorWidth = cfg.cursorWidth ?? "0.09em";
  const cursorHeight = cfg.cursorHeight ?? "1em";
  const cursorBlinkMs = Number(cfg.cursorBlinkMs) || 530;
  const cursorBeforeStart = cfg.cursorBeforeStart !== false;

  document.documentElement.style.backgroundColor =
    cfg.backgroundColor ?? "#000000";

  el.style.fontSize = cfg.fontSize ?? "clamp(2rem, 8vw, 4.5rem)";
  el.style.letterSpacing = cfg.letterSpacing ?? "0.2em";
  el.style.lineHeight = String(cfg.lineHeight ?? 1.2);
  el.style.fontFamily =
    cfg.fontFamily ?? 'Consolas, "Courier New", monospace';
  el.style.color = cfg.textColor ?? "#e8e8e8";
  el.style.setProperty("--cursor-width", cursorWidth);
  el.style.setProperty("--cursor-height", cursorHeight);

  let displayed = "";
  let index = 0;
  let blinkTimer = null;
  let cursorVisible = true;

  function render() {
    if (!showCursor) {
      el.innerHTML = escapeHtml(displayed);
      return;
    }
    const classes = ["cursor"];
    if (cursorStyle === "char") classes.push("is-char");
    if (!cursorVisible) classes.push("is-off");
    const inner =
      cursorStyle === "char" ? escapeHtml(cursorChar) : "";
    const cursorHtml = `<span class="${classes.join(" ")}" aria-hidden="true">${inner}</span>`;
    el.innerHTML = escapeHtml(displayed) + cursorHtml;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function startBlink() {
    if (!showCursor) return;
    stopBlink();
    blinkTimer = window.setInterval(() => {
      cursorVisible = !cursorVisible;
      render();
    }, cursorBlinkMs);
  }

  function stopBlink() {
    if (blinkTimer !== null) {
      window.clearInterval(blinkTimer);
      blinkTimer = null;
    }
  }

  function resetText() {
    displayed = "";
    index = 0;
    cursorVisible = true;
  }

  function scheduleRestart() {
    if (!loop) return;
    window.setTimeout(() => {
      stopBlink();
      resetText();
      beginTyping();
    }, pauseBeforeRestartMs);
  }

  function typeNext() {
    if (index < text.length) {
      displayed += text[index];
      index += 1;
      cursorVisible = true;
      render();
      window.setTimeout(typeNext, charDelayMs);
      return;
    }

    window.setTimeout(() => {
      startBlink();
      scheduleRestart();
    }, pauseAfterCompleteMs);
  }

  function beginTyping() {
    if (cursorBeforeStart && showCursor) {
      render();
      startBlink();
      window.setTimeout(() => {
        stopBlink();
        cursorVisible = true;
        typeNext();
      }, charDelayMs);
    } else {
      typeNext();
    }
  }

  beginTyping();
})();
