# 🚀 快速部署指南

## 方式一：GitHub Pages（推荐）

### 步骤 1：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 创建新仓库，命名为 `academic-portfolio`
3. 保持公开（Public）

### 步骤 2：上传代码

在项目目录中运行：

```bash
# 初始化 git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 关联远程仓库（替换 yourusername 为你的 GitHub 用户名）
git branch -M main
git remote add origin https://github.com/yourusername/academic-portfolio.git

# 推送代码
git push -u origin main
```

### 步骤 3：配置 GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. Source 选择 **Deploy from a branch**
3. Branch 选择 **gh-pages** / **root**
4. 点击 **Save**

### 步骤 4：启用 GitHub Actions

1. 进入仓库的 **Actions** 标签
2. 点击 "I understand my workflows, go ahead and enable them"
3. 工作流会自动运行并部署网站

### 步骤 5：访问网站

等待几分钟后，访问：
```
https://yourusername.github.io/academic-portfolio
```

---

## 方式二：Vercel（更简单）

### 步骤 1：推送代码到 GitHub

同上，先将代码推送到 GitHub。

### 步骤 2：在 Vercel 部署

1. 登录 [Vercel](https://vercel.com)
2. 点击 **Add New Project**
3. 导入你的 GitHub 仓库
4. 框架预设选择 **Vite**
5. 点击 **Deploy**

部署完成后会自动获得一个域名，如 `https://academic-portfolio.vercel.app`

---

## 方式三：Netlify

### 步骤 1：推送代码到 GitHub

同上。

### 步骤 2：在 Netlify 部署

1. 登录 [Netlify](https://netlify.com)
2. 点击 **Add new site** → **Import an existing project**
3. 选择 GitHub 并授权
4. 选择你的仓库
5. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 点击 **Deploy site**

---

## 🔧 本地开发

如果你想在本地修改和预览：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建（用于生产部署）
npm run build
```

---

## 📝 更新网站

每次修改后，只需推送代码到 GitHub：

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions 会自动重新部署你的网站！

---

## ⚠️ 常见问题

### 1. 页面显示空白
- 检查 `vite.config.ts` 中的 `base` 是否设置为你的仓库名
- 确保所有资源路径正确

### 2. 样式没有生效
- 确保 `npm install` 成功运行
- 检查浏览器控制台是否有错误

### 3. 部署失败
- 检查 GitHub Actions 日志
- 确保 Node.js 版本 >= 18

### 4. 图片无法显示
- 确保图片放在 `public/` 文件夹
- 使用相对路径 `/image-name.jpg`

---

需要帮助？随时联系我！