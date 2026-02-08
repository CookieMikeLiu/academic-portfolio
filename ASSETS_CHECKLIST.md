# 📋 Assets Checklist

以下是你需要提供或更新的素材清单，以便完成你的学术个人主页：

## ✅ 必需项

### 1. 个人信息更新
文件：`src/data/portfolioData.ts`

需要修改的内容：
- [ ] **姓名** - 替换 "Your Name"
- [ ] **职位** - 如 "PhD Student", "Research Scientist" 等
- [ ] **机构** - 你的大学或研究所名称
- [ ] **邮箱** - 你的学术邮箱
- [ ] **个人简介** - 2-3句话介绍你的研究兴趣

### 2. 照片
- [ ] **个人照片** - 建议尺寸：800x800px 或更高，正方形
  - 保存位置：`public/profile-photo.jpg`
  - 格式：JPG 或 PNG
  - 风格：专业学术照（建议使用正式头像）

## 📚 学术信息

### 3. 教育背景
文件：`src/data/portfolioData.ts` 中的 `education` 数组

需要添加：
- [ ] **博士/硕士/本科** - 学位、学校、时间、简要描述

### 4. 发表论文
文件：`src/data/portfolioData.ts` 中的 `publications` 数组

需要添加每篇论文的：
- [ ] 标题
- [ ] 作者列表（你的名字加粗）
- [ ] 发表会议/期刊
- [ ] 发表年份
- [ ] 论文链接（PDF/项目页/arXiv）
- [ ] 代码链接（如有）
- [ ] 简要摘要

### 5. 研究项目
文件：`src/data/portfolioData.ts` 中的 `projects` 数组

需要添加：
- [ ] 项目名称
- [ ] 项目描述
- [ ] 项目图片（可选）
- [ ] GitHub/演示链接

### 6. 获奖情况
文件：`src/data/portfolioData.ts` 中的 `awards` 数组

需要添加：
- [ ] 奖项名称
- [ ] 颁发机构
- [ ] 获奖年份
- [ ] 简要描述

## 🔗 链接更新

### 7. 社交/学术链接
文件：`src/data/portfolioData.ts` 中的 `personalInfo`

- [ ] Google Scholar 链接（已提供）
- [ ] GitHub 主页
- [ ] LinkedIn 主页
- [ ] Twitter/X 主页

## 🎨 可选定制

### 8. 颜色主题
文件：`tailwind.config.js`

可以自定义：
- [ ] 主色调（primary）
- [ ] 强调色（accent）

### 9. 研究兴趣标签
文件：`src/data/portfolioData.ts` 中的 `researchInterests`

- [ ] 更新为你的实际研究领域

### 10. 技能列表
文件：`src/data/portfolioData.ts` 中的 `skills`

- [ ] 编程语言
- [ ] 框架/工具
- [ ] 语言能力

## 🚀 部署前检查

- [ ] 更新 `package.json` 中的 `homepage` 字段为你的 GitHub Pages 地址
- [ ] 更新 `vite.config.ts` 中的 `base` 字段为你的仓库名
- [ ] 确保所有链接都是有效的
- [ ] 检查拼写和语法

## 📁 素材汇总

请提供以下文件（可以压缩包形式）：

1. `profile-photo.jpg` - 个人照片
2. 项目相关图片（如果有）
3. 任何其他想要展示的媒体文件

将这些文件放入 `public/` 文件夹即可。

---

💡 **提示**：你可以分批次提供这些素材，我先帮你搭建基础框架，后续再逐步完善！