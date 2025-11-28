const express = require('express');
const si = require('systeminformation');
const app = express();
const path = require('path');

// 允许跨域（为了简单）
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// 提供静态文件 (前端页面)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API接口：返回CPU和内存使用率
app.get('/api/stats', async (req, res) => {
    try {
        const cpu = await si.currentLoad();
        const mem = await si.mem();
        res.json({
            cpu: cpu.currentLoad.toFixed(2),
            memUsed: mem.active,
            memTotal: mem.total,
            memUsage: ((mem.active / mem.total) * 100).toFixed(2)
        });
    } catch (e) {
        res.status(500).send('Error');
    }
});

// 监听 8080 端口 (和之前的5000错开)
app.listen(8080, '0.0.0.0', () => {
    console.log('监控大屏已启动: http://0.0.0.0:8080');
});
