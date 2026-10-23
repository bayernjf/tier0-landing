# Tier 0 — Landing

公司运行的第零层：Agent 执行，人签重要决策。Tier 0 产品族的 build-in-public 技术状态页与
合作入口——七个模块分三层（应用 / 平台 / 内核）围绕一个共享决策内核 zeus；决策按 D0–D3
分级、重要的由人签核，每条记录 Ed25519 逐条封签、可回放；电商是第一个业务切口。

- 线上（规划）：https://tier0.bayjf.com （English）· https://tier0.bayjf.com/zh/ （简体中文）
- 站点源码：https://github.com/bayernjf/tier0-landing

「Tier 0」为工作名；正式伞品牌名待定。

## 技术栈

- [Astro 7](https://astro.build) 静态站点，`output: 'static'`
- 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens`
- `@bay/landing-ui` 提供品牌链接与 GitHub Star 组件
- 双语路由由 Astro i18n 提供：`/` 英文（默认，无前缀）、`/zh/` 中文

## 本地开发

需要 Node 22.12+（`node -v` 确认；Astro 7 会拒绝 20.x）。

```bash
npm install
npm run dev
```

开发服务器默认跑在 3018 端口（见 `.claude/launch.json`）。

## 构建

```bash
npm run build
```

`astro build` 之后会自动跑 `scripts/shot.mjs`：在 `dist/` 上起静态服务（端口 5188），用
Playwright 截取两种语言的首屏，产出 `dist/preview-en.png` 与 `dist/preview-zh.png` 作为
og:image。预览图不入库，每次构建现生成。首次构建前装一次浏览器内核：

```bash
npx playwright install chromium
```

其他脚本：

```bash
npm run preview   # 预览 dist
npm run check     # astro check 类型检查
npm run shot      # 只重截预览图（需要 dist 已存在）
```

## 页面结构

```
Hero（id=architecture）  定位 + 三层架构图（ArchitectureDiagram）
Principles               三原则：Agent 为主 / 人签重要决策 / 全程可审计
Modules                  zeus 横条（共享内核）+ 6 个模块卡（状态 badge + 证据）
Gates                    四条工程承诺（分级 / fail-closed / 封签 / 不自动承诺）
Roadmap                   M0–M8 里程碑时间轴 + 当前能力状态板
Cta                       合作方向（通道/模型/云/支付）+ waitlist（mailto）
```

## 目录结构

```
public/            favicon、brand mark、robots.txt、llms.txt / llms-en.txt
scripts/shot.mjs   构建后截取 og:image
src/consts.ts      站点级常量（域名、社交、og 图路径、mailto 链接）
src/i18n/          ui.ts 文案字典 + index.ts 语言工具
src/layouts/       Layout.astro（head、reveal 脚本、CRT 层）
src/components/    SEO、Hud、Hero、ArchitectureDiagram、Principles、Modules、
                   Gates、Roadmap、Cta、Footer、Logo
src/pages/         index.astro（en）、zh/index.astro、404.astro、
                   privacy / terms（两种语言各一份）
src/styles/        global.css
```

## 事实口径

- 测试数是带日期快照：zeus / Commerce OS / Loom / Agent Dev 为 2026-10-23 口径
  （zeus 2227 / commerce 74 / loom 1481 / agent-dev 535），已有 Agent World / Atlas /
  Job Agent 为 2026-10-21 口径；发布前应在对应产品仓实跑复核。
- 里程碑状态：M0–M5 已过；M6 本地持久化/备份/部署工件完成并演练，但真实云部署与
  live 店铺接入受外部凭据阻塞、GATE-M6 未完整过门；M7–M8 排队；不公布日期。
- 能力状态：sandbox-douyin 在线（离线回放）、live 通道缺凭据 422 已验证（熔断）、
  loom 真实模型显式开关、决策内核 HTTP v1（不可达 503）、持久化已本地落地且备份就绪、
  现网部署工件就绪但云阻塞、支付/履约 501、运营控制台规划中。

## 部署到 Cloudflare Pages（Git 集成）

- Production branch：`main`
- Build command：`npx playwright install chromium && npm run build`
- Build output directory：`dist`
- Environment variables：`NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0`

域名：`tier0-landing.pages.dev` + 自定义域名 `tier0.bayjf.com`
（DNS 里需要一条 `CNAME tier0 → tier0-landing.pages.dev`，Proxied）。
换域名时要同步改 `src/consts.ts` 的 `SITE_URL` 和 `public/robots.txt` 里的 Sitemap 地址。

## SEO

- 每种语言独立的 title / description，取自 `src/i18n/ui.ts` 的 `meta.*`
- canonical + 三条 hreflang（自身、另一语言、x-default）
- Open Graph + Twitter `summary_large_image`，og:image 用构建时截图
- JSON-LD `@graph`：Organization / WebSite / SoftwareApplication
- `@astrojs/sitemap` 生成带 hreflang 互指的 sitemap
- `prefetch` 全站预取，`inlineStylesheets: 'auto'`

## GEO（生成式引擎优化）

- `public/robots.txt` 显式放行 GPTBot、ClaudeBot、PerplexityBot、CCBot 等 AI 爬虫
- `public/llms.txt`（中文）与 `public/llms-en.txt`（英文）用 markdown 自述三层七模块、
  三原则、D0–D3、四条工程承诺、M0–M8 状态板与合作方向，供答案引擎直接引用
