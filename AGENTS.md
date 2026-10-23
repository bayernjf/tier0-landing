# AGENTS.md — tier0-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
Tier 0 产品族落地页：公司运行的第零层——Agent 执行，人签重要决策。七个模块（commerce-os、
loom、job-agent、agent-world、atlas、zeus、agent-dev）分三层（应用 / 平台 / 内核）围绕一个
共享决策内核 zeus。页面定位是 build-in-public 技术状态页 + 合作入口，不是客户转化型营销页。
Astro 7 静态站点，中英双语，工业运营控制台视觉（沿用家族 *-landing 设计系统）。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（SSG，`output: 'static'`） |
| 样式 | 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens` |
| i18n | Astro i18n：`/` 英文（默认无前缀）、`/zh/` 中文 |
| 共享包 | `@bay/landing-ui`（品牌返链、GitHub Star） |
| Node / 包管理 | >= 22.12 / npm |

## 常用命令
```bash
npm install
npm run dev       # 开发服务器（端口 3018）
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## 约定
- 所有**面向人的文案**走 `src/i18n/ui.ts`，新增字符串必须同时提供中英两版。
- 机器读数（D0–D3 分级、HTTP 状态码、里程碑编号 M0–M8、测试数、模块 mono 代号）可在组件中
  以字面量出现，两种语言保持一致（参考 `ArchitectureDiagram.astro` 与 HUD）。
- 文案事实必须与 `../Tier0-深度分析` 文档目录（handoff、组合级 PRD、任务列表）一致：
  M0–M4 已过、M5–M8 待办、D0–D3、423/501/503、测试数为带日期快照（2026-10-23 / 10-21）。
- 不夸大未交付能力：live 通道、支付、店铺主体、持久化、运营控制台均为待办，状态必须如实标注。
- `npm run build` 内含 `scripts/shot.mjs`（Playwright 截图，静态端口 5188），预览 / OG 图是
  构建产物，不要提交。
- 改域名要同步 `src/consts.ts` 的 `SITE_URL` 与 `public/robots.txt` 的 Sitemap 地址。

## 不要做的事
- 不要直接改构建产物 `dist/`。
- 不要把面向人的文案硬编码进组件（一律走 i18n 字典）。
- 不要写定价、注册、上线日期、客户案例；不要承诺 M8 前可运营。
- 不要把 waitlist 写成表单或数据收集；唯一联系方式是 mailto。
- 不要提交 `.env` 或任何密钥。
