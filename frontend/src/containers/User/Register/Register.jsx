import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './Register.scss'
const Register = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    return (
        <div className="formContainer">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={console.error}
            >
                <Form.Item
                    label="Nombre"
                    name="name"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'El email es requerido!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'La contraseña es requerida!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Register