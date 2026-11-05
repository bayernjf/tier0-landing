# Handoff — Tier 0 Landing

> 状态主入口。开工前先读；每完成一个工作单元立即更新（已完成划掉、待办保留）。

## Current state（2026-11-06）

- **发布闭环**：dev → main 已于 2026-11-05 经 PR #1 合并（该仓无 CI，无检查项直接合）；
  实测 origin/main 与 origin/dev 内容完全一致（git diff 为空）。
- **上线状态：仍未上线**。README 明确标注「线上（规划）」，最新提交
  `9f0298d docs(readme): mark tier0 landing as not live`；`https://tier0.bayjf.com` 尚不可用。
- 技术栈：Astro + TypeScript（静态站点），npm 包管理；构建产物在 `dist/`（不入库）。

## 待办（待 owner 拍板）

- **路线二选一**：
  - 维持「不部署 + 改文案」——统一改写可能暗示在线的文案，保留 README 的「（规划）」标注；
  - 走上线五步——建 Cloudflare Pages 项目 → 构建命令带 `npx playwright install chromium`
    → 首次部署 → 绑 `tier0.bayjf.com` + CNAME → 验 HTTPS/canonical。
- 依据：`README.md`；`bayjf/docs/ops/tier0-landing-origin-2026-11-04.md`；
  `bayjf/docs/CLOUDFLARE_PAGES_SETUP.md`。
