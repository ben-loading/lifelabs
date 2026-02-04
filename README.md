# Life Labs

Life 系列产品的门户落地页，传达「人生 · 玄学 · 科技」的理念，链接各 Life 系列小产品（如 lifecode）。

## 本地运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 配置

复制 `.env.local.example` 为 `.env.local`，按需配置：

- **NEXT_PUBLIC_LIFECODE_URL**：lifecode 产品链接。门户页「了解更多」与页脚中的 lifecode 链接会使用该值；未设置时默认为 `#`。

## 构建与部署

```bash
npm run build
npm start
```

静态落地页，可部署到 Vercel 或任意静态/Node 托管。
