const { Resend } = require('resend');

exports.handler = async function(event) {
  // CORS 头部
  const headers = {
    'Access-Control-Allow-Origin': '*', // 或者替换为您的确切域名
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // 处理 OPTIONS 请求 (预检请求)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // 只允许 POST 请求
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: '方法不允许' })
    };
  }

  // 初始化 Resend 客户端
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.TO_EMAIL_ADDRESS;
  
  if (!resendApiKey || !toEmail) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: '服务器配置错误：缺少 API 密钥或收件人邮箱。' })
    };
  }

  const resend = new Resend(resendApiKey);

  try {
    const { name, email, message } = JSON.parse(event.body);

    // 验证必填字段
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: '缺少必填字段：name, email, message' })
      };
    }

    // 发送邮件
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <p>You received a new message from your website contact form:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ message: '发送邮件失败', error: error.message || 'Unknown Resend error' })
      };
    }

    // 成功响应
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: '邮件发送成功!', data })
    };
  } catch (error) {
    console.error('API Endpoint Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: '发生意外错误', error: error.message })
    };
  }
};
