import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { useDispatch } from 'react-redux';
import { updateUser } from '../model/auth';




const Settings = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = values => {
        dispatch(updateUser(values));

        console.log('Received values of form: ', values);
    };
    const loginOut = () => {
        dispatch({ type: 'auth/logout' });
    }

    // 假设这是我们要回填的数据
    const userData = {
        username: '张三',
        bio: '前端开发者',
        email: 'zhangsan@example.com',
        image: 'https://my-profile-pic.jpg',
    };

    return (
        <div className="authWrapper">
            <div className="authHeader">
                <div className="authTitle"> Your Settings</div>
            </div>
            <Form form={form} initialValues={userData} onFinish={onFinish}>
                <Form.Item name="image">
                    <Input />
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="bio">
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
                     Update Settings
                    </Button>
                </Form.Item>
            </Form>
            <Divider/>
            <Button type="danger" onClick={loginOut}>
                Or click here to logout.
            </Button>

        </div>


    );
};

export default Settings;
