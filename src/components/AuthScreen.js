import React from "react";
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { register } from '../app/reducers/auth';



function AuthScreen() {
    const dispatch = useDispatch();

    const onFinish =  (values) => {
        dispatch(register(values));
    };
    return (
        <>
            <Form onFinish={onFinish}>
                <Form.Item name="username" rules={[{ required: true, message: 'Please input your user!' }]}>
                    <Input placeholder="UserName" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sign up
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default AuthScreen;