# SBTI — 赛博人格测试

## 1. Concept & Vision

互联网原住民专属人格测试。用自嘲黑话替代正经心理学语言，让测试结果成为年轻人的"社交名片"。不是"你是哪种领导力类型"，而是"你是哪种牛马"。

风格参照：SBTI (sbti.unun.dev) — 扁平图标 + 大量互联网黑话 + 暗黑色调 + 讽刺幽默。

## 2. Design Language

**美学方向：** 暗黑赛博 + 霓虹点缀，致敬终端/代码美学。不是小清新，是"我故意这么丑"的潮酷感。

**Color Palette:**
- Background: #0D0D0D (深黑)
- Card: #1A1A2E (深紫黑)
- Primary: #FF2D55 (霓虹粉)
- Secondary: #00D4FF (赛博蓝)
- Accent: #FFD93D (警示黄)
- Text Dark: #FFFFFF
- Text Light: #8B8B9A
- Border: #2A2A3E

**Typography:**
- Font: "PingFang SC", "Noto Sans SC", system-ui, sans-serif
- 标题: bold, 略偏斜，营造不稳定感
- 正文: 14-16px, 轻松感

**Motion:**
- 题目切换: 滑入/滑出，300ms ease
- 结果出现: scale up + 渐显，带点"砰"的戏剧感
- 按钮: hover 时微微发光

## 3. Layout & Structure

**单页结构：**
1. **封面** — 标题 + 一句话介绍 + 开始按钮
2. **题目页** — 进度条 + 题干 + 两选项（左右/上下排列）
3. **结果页** — 人格类型大标签 + 维度雷达图 + 好友分享

**响应式：** 移动优先，桌面居中显示

## 4. Features & Interactions

**测试流程：**
- 共 5 道二选一题目
- 每题选择后立即滑到下一题，无确认
- 最后一题选择后自动显示结果

**结果计算：**
- 5 题 × 2 选项 = 32 种人格类型
- 每种人格有：类型名（中英文）、icon、一句话解读、维度得分

**分享：**
- 结果页显示"分享给好友"按钮
- 点击复制结果文字（格式："我的赛博人格：[类型] [描述] #赛博人格测试"）

## 5. 人格类型设计

### 维度体系

| 维度 | A 选项 | B 选项 |
|------|--------|--------|
| 能量来源 | E（输出型） | I（囤积型） |
| 社交姿态 | S（社牛） | N（社恐） |
| 情绪底色 | T（乐观怪） | F（焦虑怪） |
| 行事风格 | P（卷王） | J（躺平师） |
| 危机应对 | A（硬刚） | C（摆烂） |

### 32 种人格类型表

| 代码 | 中文名 | 英文名 | 描述 |
|------|--------|--------|------|
| ESTJA | 卷王 | The Hustler | 永不停歇的卷王本王 |
| ESTJC | 硬刚王 | The Fighter | 遇事不决直接刚 |
| ESTFA | 乐观牛 | The Sunny Ox | 负面新闻都当没看见 |
| ESTFC | 自由人 | The Chiller | 卷不动了，摆 |
| ESNJA | 社牛卷王 | The Networker | 人脉即钱脉，卷起来 |
| ESNJC | 社牛战士 | The Charmer | 硬刚 + 社交牛杂 |
| ESNFA | 开心果 | The Vibes | 社交牛杂 + 乐观怪 |
| ESNFC | 躺平社牛 | The LifeEnjoyer | 社交满分，躺平至上 |
| EITJA | 独狼卷 | The SoloGrind | 一个人卷，安静地卷 |
| EITJC | 硬刚独狼 | The LoneWolf | 不需要队友 |
| EITFA | 独行乐 | The LoneFun | 一个人也能很开心 |
| EITFC | 独行侠 | The Hermit | 低质量社交不如没有 |
| ENNJA | 社交元人 | The Influencer | 人设包装大师 |
| ENNJC | 社交战士 | The Connector | 社交 + 硬刚 |
| ENNFA | 社牛乐观 | The EternalOptimist | 永远正能量 |
| ENNFC | 人间清醒 | The ZenMaster | 社交懒，低欲望 |
| ISTJA | 老黄牛 | The SilentWorker | 埋头干活不说话 |
| ISTJC | 守望者 | The Guardian | 默默守护稳稳输出 |
| ISTFA | 内卷乐 | The HappyGrinder | 卷并快乐着 |
| ISTFC | 独行躺王 | The DisciplinedSlacker | 表面躺实际卷 |
| ISNJA | 策划人 | The Strategist | 暗中观察谋划一切 |
| ISNJC | 冷面刚 | The IronCold | 社恐但硬刚 |
| ISNFA | 独处达人 | The HappyAlone | 独处且快乐 |
| ISNFC | 淡定王者 | The IceKing | 什么都与我无关 |
| INTJA | 卷神 | The GrindLord | 最高级的卷 |
| INTJC | 思想钢印 | The Ideologue | 我认为对的就是对的 |
| INTFA | 理想主义者 | The Dreamer | 内心戏很多 |
| INTFC | 摆烂大师 | The Procrastinator | 想卷但躺着更舒服 |
| INNJA | 大V | The Influencer | 影响力玩家 |
| INNJC | 键盘侠 | The KeyboardWarrior | 网上重拳出击 |
| INNFA | 彩虹屁 | The EgoTrip | 自我感觉超级好 |
| INNFC | 互联网嘴替 | The Troll | 专业嘴替 |

## 6. Technical Approach

- 单 HTML 文件，内联 CSS + JS
- 无外部依赖，无框架
- 结果计算纯前端 localStorage 可选（不必须）
- 题目数据硬编码在 JS 中
