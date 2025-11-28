Markdown

# Flexus 实时监控大屏 (Flexus Monitor Dashboard)

![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)
![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D.svg)
![Chart.js](https://img.shields.io/badge/Chart.js-Running-FF6384.svg)
![Huawei Cloud](https://img.shields.io/badge/Huawei_Cloud-Flexus_L_Instance-red.svg)
![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)

## 📖 项目简介 (Introduction)

本项目是专为 **华为云 Flexus 应用服务器 (L实例)** 设计的轻量级实时资源监控看板。

区别于传统的云控制台监控，本项目采用 **Node.js** 作为高性能后端采集 Agent，配合 **Vue.js 3** 和 **Chart.js** 构建了响应式的可视化前端。它能够以毫秒级的低延迟，实时展示服务器的 CPU 负载和内存使用情况，帮助开发者直观地掌握云主机的运行状态。

本项目也是 **华为沃土云创计划** 的实践项目，展示了 JavaScript 全栈技术在云运维监控领域的应用。

---

## ✨ 核心特性 (Features)

* **实时采集：** 后端 API 每秒读取 `proc` 文件系统，获取最精准的硬件状态。
* **可视化大屏：** 采用 Cyberpunk (赛博朋克) 风格的暗色 UI，集成动态波形图。
* **零依赖部署：** 前端采用 CDN 引入，无需 Webpack/Vite 编译，后端仅依赖 Express，开箱即用。
* **跨平台兼容：** 完美运行于 Ubuntu/CentOS 等主流 Linux 发行版。

---

## 🛠️ 技术栈 (Tech Stack)

* **基础设施 (Infrastructure):** Huawei Cloud Flexus L Instance
* **后端 (Backend):** Node.js, Express, Systeminformation
* **前端 (Frontend):** Vue.js 3 (Composition API), Chart.js
* **通信 (Communication):** RESTful API, JSON

---

## 🚀 快速开始 (Quick Start)

### 1. 环境准备

确保你的 Flexus 服务器已安装 Node.js 环境：
bash
apt update
apt install nodejs npm -y

2. 克隆与安装
Bash
git clone [你的Git仓库地址]
cd monitor_app
npm install

3. 启动监控服务
Bash
node server.js
服务默认运行在 8080 端口。
请确保华为云安全组已放行 TCP:8080 端口。
5. 访问大屏
打开浏览器访问：http://<你的公网IP>:8080

☁️ 云架构说明 (Cloud Architecture)
Flexus 应用服务器: 承载 Node.js 运行时环境，提供计算算力。

EIP (弹性公网IP): 提供公网访问入口，使运维人员可远程查看监控面板。

📄 许可证 (License)
MIT License
