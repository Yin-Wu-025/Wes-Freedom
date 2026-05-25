/**
 * 調整畫面時主要改這個檔案即可。
 * 改完重新整理瀏覽器（GitHub Pages 上也是同樣方式）。
 */
window.FREEDOM_CONFIG = {
  /** 要逐步打出的文字 */
  text: "FREEDOM",

  /** 每個字出現的間隔（毫秒），數字越小越快 */
  charDelayMs: 120,

  /** 全部打完後，游標閃爍前的暫停（毫秒），0 表示不暫停 */
  pauseAfterCompleteMs: 400,

  /** 是否重複播放（打完並停留後重新從頭打字） */
  loop: true,

  /** 重複播放前，完整文字停留多久（毫秒，含游標閃爍時間） */
  pauseBeforeRestartMs: 2200,

  /** 是否在打完後持續顯示閃爍游標 */
  showCursor: true,

  /**
   * 游標樣式
   * - "bar"：直條（像一般打字游標）
   * - "char"：用文字字元當游標（搭配 cursorChar）
   */
  cursorStyle: "bar",

  /** 僅 cursorStyle 為 "char" 時使用，例如 "|" */
  cursorChar: "|",

  /** 直條游標寬度，例如 "2px" 或 "0.1em" */
  cursorWidth: "0.09em",

  /** 直條游標高度，例如 "1em"（通常與字高一致） */
  cursorHeight: "1em",

  /** 游標閃爍週期（毫秒） */
  cursorBlinkMs: 530,

  /** 字體大小，例如 "2.5rem" 或 "48px" */
  fontSize: "clamp(2rem, 8vw, 4.5rem)",

  /** 字距（letter-spacing），例如 "0.15em" 或 "8px" */
  letterSpacing: "0.2em",

  /** 行高，影響垂直視覺密度 */
  lineHeight: 1.2,

  /**
   * 字體族（index.html 已載入 JetBrains Mono，手機/電腦會一致）
   * 若改字型，請同步改 index.html 的 Google Fonts 連結
   */
  fontFamily: '"JetBrains Mono", monospace',

  /** 文字顏色（終端機綠可改 "#33ff33" 等） */
  textColor: "#e8e8e8",

  /** 背景色 */
  backgroundColor: "#000000",

  /** 是否在第一個字出現前顯示游標（空白時閃爍） */
  cursorBeforeStart: true,
};
