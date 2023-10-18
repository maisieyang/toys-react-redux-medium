import React from 'react';
import { Form, Input, Button } from 'antd';
import './auth.css';




const Settings = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    // 假设这是我们要回填的数据
    const userData = {
        username: '张三',
        introduction: '前端开发者',
        email: 'zhangsan@example.com',
        address: 'https://my-profile-pic.jpg',
    };

    const onUploadChange = info => {
        if (info.file.status === 'done') {
            // 在这里处理上传成功后的逻辑，例如更新表单的地址字段
            let imageUrl = info.file.response.url; // 假设响应体有一个url字段
            form.setFieldsValue({ address: imageUrl });
        }
    };

    return (
        <div className="authWrapper">
            <div className="authHeader">
                <div className="authTitle"> Your Settings</div>
            </div>
            <Form form={form} initialValues={userData} onFinish={onFinish}>
                <Form.Item name="address">
                    <Input />
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="introduction">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: '请输入邮箱!', type: 'email' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>

        </div>


    );
};

export default Settings;
