# FREEDOM — 靜態打字動畫頁

黑底、終端機風格字體，畫面正中央以打字效果顯示 `FREEDOM.`。

## 本機預覽

### 方法一（最簡單，不用裝任何東西）

在檔案總管雙擊 **`index.html`**，用 Chrome / Edge 開啟即可。

### 方法二（本機小伺服器，你已安裝 Python）

在專案資料夾 `Wes_Freedom` 開 PowerShell，執行：

```powershell
cd c:\Users\yinwu\Wes_Freedom
python -m http.server 8080
```

瀏覽器開啟：**http://localhost:8080**

要停止伺服器：在該終端機按 `Ctrl + C`。

### 方法三（需要 Node.js，你目前沒有所以會失敗）

若之後安裝了 [Node.js](https://nodejs.org/)，才可以用：

```bash
npx --yes serve .
```

## 調整畫面

編輯 **`config.js`**，常用項目：

| 設定 | 說明 |
|------|------|
| `charDelayMs` | 每字速度，越小越快 |
| `loop` | 是否重複播放 |
| `pauseBeforeRestartMs` | 每輪結束後停留多久再重播 |
| `fontSize` | 字體大小 |
| `letterSpacing` | 字距 |
| `textColor` / `backgroundColor` | 前景與背景色 |
| `cursorChar` / `cursorBlinkMs` | 游標樣式與閃爍速度 |

改完存檔後重新整理頁面即可。

## 推送到 GitHub

本專案已是 Git 儲存庫。若尚未建立遠端 repo，請先在 GitHub 網站建立空 repository（例如 `Wes-Freedom`，**不要**勾選 README）。

在專案資料夾執行（把 `YOUR_USERNAME` 換成你的 GitHub 帳號）：

```powershell
cd c:\Users\yinwu\Wes_Freedom
git remote add origin https://github.com/YOUR_USERNAME/Wes-Freedom.git
git push -u origin main
```

若 Git 指令找不到，請**關閉再開啟** PowerShell，或暫時用完整路徑：

```powershell
& "C:\Program Files\Git\bin\git.exe" push -u origin main
```

第一次 push 可能會跳出 GitHub 登入視窗。

## 用 GitHub 網址給別人看（GitHub Pages）

1. 完成上方 push。
2. 根目錄已有 `index.html`。
3. Repository → **Settings** → **Pages**。
4. **Source** 選 **Deploy from a branch**。
5. **Branch** 選 `main`（或 `master`），資料夾選 **`/ (root)`**，儲存。
6. 幾分鐘後網址會是：

   `https://<你的使用者名稱>.github.io/<repository名稱>/`

例如使用者 `yinwu`、repo 名 `Wes-Freedom`：

`https://yinwu.github.io/Wes-Freedom/`

## 檔案結構

```
index.html   # 頁面結構
styles.css   # 版面（置中）
config.js    # 可調參數（主要改這裡）
main.js      # 打字與游標動畫
```
