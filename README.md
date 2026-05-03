# element.pddshop.cc

一个可直接部署到 Vercel 的静态化学元素周期表页面。

## 本地预览

可以直接打开 `index.html` 预览静态页面。

如果希望通过本地 HTTP 服务预览，先安装依赖：

```bash
npm install
```

然后启动开发服务：

```bash
npm run dev
```

## 部署到 Vercel

1. 将项目上传到 GitHub。
2. 在 Vercel 中导入这个 GitHub 仓库。
3. Framework Preset 选择 `Other`。
4. Build Command 使用 `npm run build`。
5. Output Directory 使用 `dist`。

这些部署参数已经写入 `vercel.json`，通常导入仓库后可以直接使用。

## 仓库说明

- `index.html`：线上入口页面，也是 GitHub/Vercel 的主要提交文件。
- `index/`：旧服务器发布目录，已在 `.gitignore` 中排除，避免重复提交。
- `log/`：服务器日志，不应提交到 GitHub。
- `ssl/`：证书和私钥，不应提交到 GitHub。
