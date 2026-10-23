export const defaultLang = "en" as const;
export type Lang = "en" | "zh";

// Flat dot-keyed dictionary. Human-facing copy lives here only; machine
// readouts (D0–D3 grades, status codes, test counts, module code names)
// stay literal in the components, identical in both locales.
export const ui = {
  en: {
    "meta.title":
      "Tier 0 — the operating layer for agent-run companies, with human sign-off on what matters",
    "meta.description":
      "An agent-native operating system for organizations and lines of business: seven modules around one shared decision kernel. Agents run execution and operations; decisions are graded D0–D3 and important ones wait for human sign-off; every record is Ed25519-sealed and replayable. Commerce is the first line of business; M0–M4 gates passed, built in public.",

    // ---------- HUD ----------
    "hud.status": "M4 GATE PASSED",
    "hud.modules": "MODULES",
    "hud.grades": "GRADES",
    "hud.milestones": "MILESTONES",

    // ---------- top nav ----------
    "nav.home": "Overview",
    "nav.architecture": "Architecture",
    "nav.principles": "Principles",
    "nav.modules": "Modules",
    "nav.gates": "Gates",
    "nav.roadmap": "Roadmap",
    "nav.contact": "Contact",
    "nav.langSwitch": "中文",

    // ---------- Hero ----------
    "hero.badge": "M4 GATE PASSED · BUILDING IN PUBLIC",
    "hero.title.line1": "The operating layer for",
    "hero.title.pre": "agent-run companies, with ",
    "hero.title.accent": "human sign-off",
    "hero.title.post": " on what matters",
    "hero.sub":
      "Tier 0 is an agent-native operating system for organizations and their lines of business: agents carry execution, processes and daily operations; decisions are graded by importance and what matters waits for human sign-off; every record is sealed and replayable. Commerce is the first line of business — common capability settles into a shared kernel, business-specific capability stays in applications, and the stack replicates to whatever comes next.",
    "hero.ctaPrimary": "Talk to us",
    "hero.ctaSecondary": "See the seven modules",
    "hero.meta.modules": "modules",
    "hero.meta.kernel": "shared decision kernel",
    "hero.meta.gates": "gates passed",
    "hero.map.bar": "PRODUCT FAMILY CONSOLE",
    "hero.map.status": "7 MODULES · 3 LAYERS",
    "hero.map.legend.layer": "layer",
    "hero.map.legend.kernel": "decision kernel · zeus",
    "hero.map.legend.audit": "audit chain · per-record seals",
    "hero.map.legend.calls": "calls / capability flow",
    "hero.map.note": "static architecture diagram — not a live status feed",

    // ---------- Architecture diagram ----------
    "arch.layer.app": "APPLICATION LAYER",
    "arch.layer.appSub": "lines of business",
    "arch.layer.platform": "PLATFORM LAYER",
    "arch.layer.platformSub": "shared capabilities",
    "arch.layer.kernel": "KERNEL LAYER",
    "arch.layer.kernelSub": "the operating core",
    "arch.m.commerce": "commerce closed loop",
    "arch.m.loom": "content base",
    "arch.m.job": "recruiting profiles",
    "arch.m.world": "quality-gate pipeline",
    "arch.m.atlas": "operations orchestration",
    "arch.m.zeus": "decision · sign-off · audit",
    "arch.m.dev": "delivery pipeline",
    "arch.rail.zeus": "DECISION KERNEL · D0–D3",
    "arch.rail.zeusSub": "shared by every module",
    "arch.rail.audit": "AUDIT CHAIN · ED25519",
    "arch.rail.auditSub": "per-record seals",

    // ---------- Principles ----------
    "principles.stencil": "operating principles",
    "principles.title": "Agents run the company. People hold the sign-off.",
    "principles.1.title": "AGENT-FIRST",
    "principles.1.body":
      "Execution, processes and daily operations are carried by agents. People are not in the execution loop — they are not required to watch every step.",
    "principles.2.title": "HUMAN SIGN-OFF",
    "principles.2.body":
      "Every decision is graded D0–D3 by importance and the thresholds are configurable. What counts as “important enough for a person” is set by the person.",
    "principles.3.title": "SEALED & REPLAYABLE",
    "principles.3.body":
      "Each decision record is sealed per-record with Ed25519 and can be replayed. Tampering, deletion or reordering fails closed.",
    "principles.close":
      "Autonomy has a boundary. Inside it, agents run at full speed; outside it, nothing moves without a human seal.",

    // ---------- Modules ----------
    "modules.stencil": "the product family",
    "modules.title": "Seven modules, one shared decision kernel",
    "modules.sub":
      "Common capability settles into the kernel and platform layers; business-specific capability lives in the applications. Every layer calls the same zeus kernel for important decisions, so sign-off and audit guarantees are identical no matter which business runs on top.",
    "modules.zeus.tag": "SHARED DECISION KERNEL",
    "modules.zeus.body":
      "Fan-out → deterministic aggregation → D0–D3 grading → human approval → audit replay. HTTP API v1, idempotent decisions, an SLA timeout state machine and versioned policy.",
    "modules.zeus.status": "KERNEL v1 READY",
    "modules.zeus.statusSub": "durable storage lands in M6",
    "modules.card.commerce.tag": "COMMERCE · APP",
    "modules.card.commerce.name": "Commerce OS",
    "modules.card.commerce.body":
      "Minimal commerce loop — product, content, gated listing, order pullback, refunds and customer service — behind a pluggable ChannelAdapter.",
    "modules.card.commerce.status": "SANDBOX E2E",
    "modules.card.loom.tag": "CONTENT · APP",
    "modules.card.loom.name": "Loom",
    "modules.card.loom.body":
      "Content base with a 13-stage chain and candidate review; real model output fires only behind an explicit switch.",
    "modules.card.loom.status": "REAL MODEL",
    "modules.card.job.tag": "RECRUITING · APP",
    "modules.card.job.name": "Job Agent",
    "modules.card.job.body":
      "Capability profiles for recruiting, covering both consumer and business sides.",
    "modules.card.job.status": "EXISTING",
    "modules.card.world.tag": "PIPELINE · PLATFORM",
    "modules.card.world.name": "Agent World",
    "modules.card.world.body":
      "Quality-gate pipeline: canvases, cost and quality metering, bidirectional MCP.",
    "modules.card.world.status": "EXISTING · M7",
    "modules.card.atlas.tag": "ORCHESTRATION · PLATFORM",
    "modules.card.atlas.name": "Atlas",
    "modules.card.atlas.body":
      "Business-entity orchestration: NL-to-canvas, three approval channels, compliance, shadow canary and evolution gating.",
    "modules.card.atlas.status": "EXISTING · M7",
    "modules.card.dev.tag": "DELIVERY · KERNEL",
    "modules.card.dev.name": "Agent Dev",
    "modules.card.dev.body":
      "Blueprint → Preview → Production delivery pipeline with acceptance evidence.",
    "modules.card.dev.status": "EXISTING · M5",
    "modules.footnote":
      "Test counts are dated snapshots (zeus / Commerce OS / Loom as of 2026-10-23; the existing modules as of 2026-10-21) and are re-verified before each release. “Existing” means the module already runs standalone and is wired into the shared kernel in its scheduled milestone.",

    // ---------- Gates ----------
    "gates.stencil": "engineering guarantees",
    "gates.title": "Built to fail-closed, never fail-open",
    "gates.sub":
      "Agents move money and trigger real external actions. Tier 0 would rather refuse with a precise error than execute something it cannot authorize. Four guarantees are enforced by code and tests.",
    "gates.1.title": "CONFIGURABLE GRADES",
    "gates.1.body":
      "D0 auto, D1 async approval, D2 sync approval, D3 blocked. Thresholds are configurable; past decisions keep their policyVersion forever and are never rewritten.",
    "gates.2.title": "FAIL-CLOSED BY DEFAULT",
    "gates.2.body":
      "An unregistered channel, a missing credential or an unreachable decision kernel is a refusal or 503 — never a downgrade to local guessing.",
    "gates.3.title": "PER-RECORD SEALS",
    "gates.3.body":
      "Every decision record is Ed25519-sealed as seq + prevHash + keyId + payload. Verification recomputes the whole chain; deletion, reorder or forgery fails closed.",
    "gates.4.title": "NO AUTO COMMITMENT",
    "gates.4.body":
      "Refund, compensation and promise intents are graded first; D2 and above always escalate to a human. A held decision never emits a customer-facing agent message.",

    // ---------- Roadmap ----------
    "roadmap.stencil": "build in public",
    "roadmap.title": "Milestone gates, each with reproducible acceptance",
    "roadmap.sub":
      "Tier 0 is built serially, M0 through M8. A gate opens only when its acceptance is verified end to end; no dates are published and no gate is claimed early.",
    "roadmap.m0.name": "M0 Baseline locked",
    "roadmap.m0.desc": "Scope, principles and the M0–M8 serial plan frozen.",
    "roadmap.m1.name": "M1 Decision kernel",
    "roadmap.m1.desc":
      "zeus: fan-out, deterministic aggregation, D0–D3 grading, approval and replay.",
    "roadmap.m2.name": "M2 Organization v1",
    "roadmap.m2.desc": "The first set of organization capabilities around the kernel.",
    "roadmap.m3.name": "M3 Commerce minimal loop",
    "roadmap.m3.desc": "The commerce closed loop on the offline sandbox.",
    "roadmap.m4.name": "M4 Content base & commerce content",
    "roadmap.m4.desc":
      "loom content base with real model output; content → review → gated listing verified.",
    "roadmap.m5.name": "M5 Delivery self-bootstrap",
    "roadmap.m5.desc": "The delivery pipeline builds the system itself.",
    "roadmap.m6.name": "M6 Persistence & real deployment",
    "roadmap.m6.desc": "Durable storage and real deployment; decisions leave in-memory.",
    "roadmap.m7.name": "M7 Executor wiring",
    "roadmap.m7.desc": "Wire existing executors (Agent World, Atlas) into the kernel.",
    "roadmap.m8.name": "M8 Ops console & notifications",
    "roadmap.m8.desc": "Operations console and notifications — the minimal operable form.",
    "roadmap.passed": "GATE PASSED",
    "roadmap.next": "NEXT",
    "roadmap.queued": "QUEUED",
    "roadmap.board.title": "CURRENT STATUS BOARD",
    "roadmap.board.sandbox": "sandbox-douyin",
    "roadmap.board.sandboxV": "ONLINE · offline replay",
    "roadmap.board.live": "live channels",
    "roadmap.board.liveV": "FAIL-CLOSED · needs credentials",
    "roadmap.board.content": "loom content",
    "roadmap.board.contentV": "REAL MODEL · explicit switch",
    "roadmap.board.kernel": "decision kernel",
    "roadmap.board.kernelV": "HTTP v1 · 503 when down",
    "roadmap.board.persistence": "persistence",
    "roadmap.board.persistenceV": "IN-MEMORY · durable in M6",
    "roadmap.board.pay": "payment · fulfillment",
    "roadmap.board.payV": "501 PLACEHOLDER",
    "roadmap.board.ops": "ops console",
    "roadmap.board.opsV": "PLANNED · M8",
    "roadmap.note":
      "No dates are published. Each gate opens only when its acceptance is verified end to end; nothing is claimed early.",

    // ---------- CTA ----------
    "cta.bar": "PARTNERS",
    "cta.eyebrow": "BUILDING IN PUBLIC · PARTNERS WELCOME",
    "cta.title": "Build the agent-run operating layer with us",
    "cta.sub":
      "Tier 0 is self-operated and self-funded first. The fastest path to a real store runs through partnerships — channels, models, cloud and payments. We can demo the sandbox commerce loop end to end today.",
    "cta.look.title": "We are looking for",
    "cta.look.1":
      "E-commerce platforms and store channels — Douyin e-commerce sandbox and formal qualifications first",
    "cta.look.2": "Model and cloud infrastructure",
    "cta.look.3": "Payment channels and store-entity qualifications",
    "cta.bring.title": "We can provide today",
    "cta.bring.1": "ChannelAdapter five-method contract plus a sandbox adapter",
    "cta.bring.2": "Decision service HTTP API v1: idempotency, approval, replay, audit",
    "cta.bring.3": "A live-demoable end-to-end sandbox commerce loop",
    "cta.partner": "Partner with us",
    "cta.wait.title": "Waitlist",
    "cta.wait.body":
      "For one-person companies and small teams. Leave your email; we will not contact you before the system is operable, and no date is promised.",
    "cta.wait.btn": "Join waitlist",
    "cta.note":
      "Tier 0 is a working name. State as of 2026-10-23: M4 passed; the system is not operable as a business before M8 — live channels, payments, store entities and persistence are explicitly pending.",

    // ---------- Footer ----------
    "foot.tag":
      "Agents run the company; humans sign off on what matters — every decision sealed and replayable.",
    "foot.nav.architecture": "Architecture",
    "foot.nav.principles": "Principles",
    "foot.nav.modules": "Modules",
    "foot.nav.gates": "Gates",
    "foot.nav.roadmap": "Roadmap",
    "foot.nav.cta": "Contact",
    "foot.nav.privacy": "Privacy",
    "foot.nav.terms": "Terms",
    "foot.meta": "M4 · GATE passed",
  },

  zh: {
    "meta.title": "Tier 0 — 公司运行的第零层：Agent 执行，人签重要决策",
    "meta.description":
      "以 Agent 为执行主体的组织与业务运行系统：七个模块围绕一个共享决策内核。Agent 承担执行与运营，决策按 D0–D3 分级、重要的由人签核，每条记录 Ed25519 封签、可回放。电商是第一个业务切口；M0–M4 决策门已过，公开自建。",

    // ---------- HUD ----------
    "hud.status": "M4 决策门已过",
    "hud.modules": "模块",
    "hud.grades": "分级",
    "hud.milestones": "里程碑",

    // ---------- top nav ----------
    "nav.home": "总览",
    "nav.architecture": "架构",
    "nav.principles": "原则",
    "nav.modules": "模块",
    "nav.gates": "承诺",
    "nav.roadmap": "进度",
    "nav.contact": "合作",
    "nav.langSwitch": "EN",

    // ---------- Hero ----------
    "hero.badge": "M4 决策门已过 · 公开自建",
    "hero.title.line1": "公司运行的第零层：",
    "hero.title.pre": "Agent 执行，",
    "hero.title.accent": "人签重要决策",
    "hero.title.post": "",
    "hero.sub":
      "Tier 0 是一套以 Agent 为执行主体的组织与业务运行系统：执行、流程与日常运营由 Agent 承担；决策按重要度分级，重要的由人签核；每条记录逐条封签、可审计回放。电商是第一个业务切口——通用能力沉淀为共享内核，业务特异能力留在应用层，整套架构可复制到下一个业务。",
    "hero.ctaPrimary": "寻求合作",
    "hero.ctaSecondary": "查看七个模块",
    "hero.meta.modules": "个模块",
    "hero.meta.kernel": "个共享决策内核",
    "hero.meta.gates": "决策门已过",
    "hero.map.bar": "产品族总控台",
    "hero.map.status": "7 模块 · 3 层",
    "hero.map.legend.layer": "层",
    "hero.map.legend.kernel": "决策内核 · zeus",
    "hero.map.legend.audit": "审计链 · 逐条封签",
    "hero.map.legend.calls": "能力调用",
    "hero.map.note": "静态架构示意，非实时状态",

    // ---------- Architecture diagram ----------
    "arch.layer.app": "应用层",
    "arch.layer.appSub": "业务切口",
    "arch.layer.platform": "平台层",
    "arch.layer.platformSub": "共享能力",
    "arch.layer.kernel": "内核层",
    "arch.layer.kernelSub": "运行核心",
    "arch.m.commerce": "电商闭环",
    "arch.m.loom": "内容底座",
    "arch.m.job": "招聘画像",
    "arch.m.world": "质量闸流水线",
    "arch.m.atlas": "运营体编排",
    "arch.m.zeus": "决策 · 签核 · 审计",
    "arch.m.dev": "交付管道",
    "arch.rail.zeus": "决策内核 · D0–D3",
    "arch.rail.zeusSub": "所有模块共用",
    "arch.rail.audit": "审计链 · ED25519",
    "arch.rail.auditSub": "逐条封签",

    // ---------- Principles ----------
    "principles.stencil": "运行原则",
    "principles.title": "Agent 为主，人签重要决策",
    "principles.1.title": "Agent 为主",
    "principles.1.body":
      "执行、流程与日常运营由 Agent 承担。人不在执行回路里，不需要盯每个环节。",
    "principles.2.title": "人签重要决策",
    "principles.2.body":
      "决策按重要度 D0–D3 分级，阈值可配置；什么级别的事需要人参与，由人自己定义。",
    "principles.3.title": "全程可审计",
    "principles.3.body":
      "每条决策记录逐条 Ed25519 封签、可回放；篡改、删改、重排一律拒开。",
    "principles.close":
      "自主有边界。边界之内，Agent 全速运行；边界之外，人签核之后才放行。",

    // ---------- Modules ----------
    "modules.stencil": "产品族",
    "modules.title": "七个模块，一个共享决策内核",
    "modules.sub":
      "通用能力沉淀在内核与平台层，业务特异能力留在应用层。任何一层遇到重要决策都调用同一个 zeus 内核，无论上层跑什么业务，签核与审计保证完全一致。",
    "modules.zeus.tag": "共享决策内核",
    "modules.zeus.body":
      "并行扇出 → 确定性聚合 → D0–D3 分级 → 人工裁决 → 审计回放；HTTP API v1、幂等决策、SLA 超时状态机、版本化策略。",
    "modules.zeus.status": "内核 v1 可用",
    "modules.zeus.statusSub": "持久化在 M6",
    "modules.card.commerce.tag": "电商 · 应用",
    "modules.card.commerce.name": "Commerce OS",
    "modules.card.commerce.body":
      "电商最小闭环：商品、内容、过门上架、订单回传、退款与客服，藏在可插拔的 ChannelAdapter 之后。",
    "modules.card.commerce.status": "沙箱端到端",
    "modules.card.loom.tag": "内容 · 应用",
    "modules.card.loom.name": "Loom",
    "modules.card.loom.body":
      "内容生产底座：13 段内容链与候选审核；真实模型产出只在显式开关后启用。",
    "modules.card.loom.status": "真实模型",
    "modules.card.job.tag": "招聘 · 应用",
    "modules.card.job.name": "Job Agent",
    "modules.card.job.body": "招聘能力画像，覆盖 C 端与 B 端。",
    "modules.card.job.status": "已有",
    "modules.card.world.tag": "流水线 · 平台",
    "modules.card.world.name": "Agent World",
    "modules.card.world.body": "质量闸流水线：画布、成本与质量计量、双向 MCP。",
    "modules.card.world.status": "已有 · M7",
    "modules.card.atlas.tag": "编排 · 平台",
    "modules.card.atlas.name": "Atlas",
    "modules.card.atlas.body":
      "业务运营体编排：NL 生成图、审批三渠道、合规、灰度影子与进化门控。",
    "modules.card.atlas.status": "已有 · M7",
    "modules.card.dev.tag": "交付 · 内核",
    "modules.card.dev.name": "Agent Dev",
    "modules.card.dev.body": "交付管道：Blueprint → Preview → Production，带验收证据。",
    "modules.card.dev.status": "已有 · M5",
    "modules.footnote":
      "测试数为带日期的快照（zeus / Commerce OS / Loom 为 2026-10-23 口径；已有模块为 2026-10-21 口径），每次发布前重新核验。「已有」指该模块已独立运行，并在计划里程碑中接入共享内核。",

    // ---------- Gates ----------
    "gates.stencil": "工程承诺",
    "gates.title": "为 fail-closed 而设计，不是 fail-open",
    "gates.sub":
      "Agent 会动钱、会触发真实外部动作。Tier 0 宁可拒绝并返回精确错误，也不执行无法授权的事。下面四条由代码和测试强制保证。",
    "gates.1.title": "分级可配置",
    "gates.1.body":
      "D0 自动、D1 异步审批、D2 同步审批、D3 阻断；阈值可配置，旧决策永久保留其 policyVersion，不追溯改写。",
    "gates.2.title": "默认熔断",
    "gates.2.body":
      "通道未注册、凭据缺失、决策内核不可达，一律拒绝或 503，绝不降级为本地猜测。",
    "gates.3.title": "逐条封签",
    "gates.3.body":
      "每条决策记录按 seq + prevHash + keyId + payload 做 Ed25519 封签；验签全量重算，删改、重排、伪造一律拒开。",
    "gates.4.title": "不自动承诺",
    "gates.4.body":
      "退款、补偿与承诺类意图优先分级，D2 及以上一律转人工；等待中的决策不会产生任何 Agent 对外发言。",

    // ---------- Roadmap ----------
    "roadmap.stencil": "公开进度",
    "roadmap.title": "里程碑决策门，每门都有可复现验收",
    "roadmap.sub":
      "Tier 0 按 M0→M8 串行推进，决策门只有在端到端验收通过后才打开；不公布日期，也不提前宣称过门。",
    "roadmap.m0.name": "M0 基线锁定",
    "roadmap.m0.desc": "范围、原则与 M0–M8 串行计划冻结。",
    "roadmap.m1.name": "M1 决策内核",
    "roadmap.m1.desc": "zeus：扇出、确定性聚合、D0–D3 分级、审批与回放。",
    "roadmap.m2.name": "M2 组织能力 v1",
    "roadmap.m2.desc": "围绕内核的第一批组织能力。",
    "roadmap.m3.name": "M3 电商最小闭环",
    "roadmap.m3.desc": "离线沙箱上的电商闭环。",
    "roadmap.m4.name": "M4 内容底座与电商内容",
    "roadmap.m4.desc": "loom 内容底座接入真实模型；内容→审核→过门上架验证。",
    "roadmap.m5.name": "M5 交付自举",
    "roadmap.m5.desc": "交付管道开始构建系统自身。",
    "roadmap.m6.name": "M6 持久化与真实部署",
    "roadmap.m6.desc": "持久化存储与真实部署，决策离开内存。",
    "roadmap.m7.name": "M7 执行器接线",
    "roadmap.m7.desc": "把已有执行器（Agent World、Atlas）接进内核。",
    "roadmap.m8.name": "M8 运营控制台与通知",
    "roadmap.m8.desc": "运营控制台与通知——最小可运营形态。",
    "roadmap.passed": "门已过",
    "roadmap.next": "下一程",
    "roadmap.queued": "排队中",
    "roadmap.board.title": "当前状态板",
    "roadmap.board.sandbox": "沙箱抖音",
    "roadmap.board.sandboxV": "在线 · 离线回放",
    "roadmap.board.live": "live 通道",
    "roadmap.board.liveV": "熔断中 · 待资质",
    "roadmap.board.content": "loom 内容",
    "roadmap.board.contentV": "真实模型 · 显式开关",
    "roadmap.board.kernel": "决策内核",
    "roadmap.board.kernelV": "HTTP v1 · 不可达 503",
    "roadmap.board.persistence": "持久化",
    "roadmap.board.persistenceV": "内存中 · M6 持久化",
    "roadmap.board.pay": "支付 · 履约",
    "roadmap.board.payV": "501 占位",
    "roadmap.board.ops": "运营控制台",
    "roadmap.board.opsV": "规划中 · M8",
    "roadmap.note": "不公布日期。每门只有在端到端验收通过后才打开，不提前宣称。",

    // ---------- CTA ----------
    "cta.bar": "合作",
    "cta.eyebrow": "公开自建 · 寻求合作",
    "cta.title": "一起把 Agent 运行的底座做出来",
    "cta.sub":
      "Tier 0 先自营、先自用。走向真实店铺最快的路径是合作：通道、模型、云与支付。沙箱电商闭环今天就可以端到端演示。",
    "cta.look.title": "我们在找",
    "cta.look.1": "电商平台与店铺通道（优先抖音电商沙箱与正式资质）",
    "cta.look.2": "模型与云基础设施",
    "cta.look.3": "支付通道与店铺主体资质",
    "cta.bring.title": "我们现在可提供",
    "cta.bring.1": "ChannelAdapter 五方法契约与沙箱适配器",
    "cta.bring.2": "决策服务 HTTP API v1：幂等、审批、重放、审计",
    "cta.bring.3": "可现场演示的端到端沙箱电商闭环",
    "cta.partner": "合作洽谈",
    "cta.wait.title": "早期试用登记",
    "cta.wait.body":
      "面向一个人公司与小企业。留下邮箱即可；系统可运营前不打扰，不承诺时间。",
    "cta.wait.btn": "登记 waitlist",
    "cta.note":
      "Tier 0 为工作名。2026-10-23 口径：M4 已过；M8 之前不构成可运营业务——live 通道、支付、店铺主体与持久化均为明确待办。",

    // ---------- Footer ----------
    "foot.tag": "Agent 运行公司，人签重要决策——每条决策都封签、可回放。",
    "foot.nav.architecture": "架构",
    "foot.nav.principles": "原则",
    "foot.nav.modules": "模块",
    "foot.nav.gates": "承诺",
    "foot.nav.roadmap": "进度",
    "foot.nav.cta": "合作",
    "foot.nav.privacy": "隐私",
    "foot.nav.terms": "条款",
    "foot.meta": "M4 · 决策门已过",
  },
} as const;
