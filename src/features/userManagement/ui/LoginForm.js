import React from "react";
import { Button, Form, Input } from 'antd';
import { login } from '../model/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ListErrors from '../../../shared/ui/ListErrors';



function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errors } = useSelector(state => state.auth);

    const onFinish =  async (values) => {
        const data = await dispatch(login(values));
        if (data && data.payload && data.payload.user) {
            navigate('/');
        }
    };
    return (
        <div className="authWrapper">
            <div className="authHeader">
                <div className="authTitle"> Sign In</div>
                <Link to="/register">Need an account?</Link>
            </div>
            <ListErrors errors={errors} />
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