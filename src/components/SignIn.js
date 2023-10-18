import React from "react";
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../app/reducers/auth';
import { Link } from 'react-router-dom';
import './auth.css';



function SignIn() {
    const dispatch = useDispatch();

    const onFinish =  (values) => {
        dispatch(login(values));
    };
    return (
        <div className="authWrapper">
            <div className="authHeader">
                <div className="authTitle"> Sign In</div>
                <Link to="/register">Need an account?</Link>
            </div>
            <Form onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default SignIn;