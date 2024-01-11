import React from "react";
import { Button, Form, Input } from 'antd';
import { useDispatch,useSelector} from 'react-redux';
import { register } from '../model/auth';
import { Link, useNavigate } from 'react-router-dom';
import ListErrors from '../../../shared/ui/ListErrors';



function RegisterForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errors, loading } = useSelector(state => state.auth);
    const onFinish =  async (values) => {
        const data = await dispatch(register(values));
        if (data && data.payload && data.payload.user) {
            navigate('/');
        }
    };
    return (
        <div className="authWrapper">
            <div className="authHeader">
                <div className="authTitle">Sign Up</div>
                <Link to="/login">Have an account?</Link>
            </div>
            {!loading &&  <ListErrors errors={errors} />}
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
        </div>
    );
}


export default RegisterForm;