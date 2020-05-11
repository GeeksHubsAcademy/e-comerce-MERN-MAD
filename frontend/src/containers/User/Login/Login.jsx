import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import './Login.scss'
import { login } from '../../../redux/actions/users';
import { useHistory } from 'react-router-dom';
const Register = () => {
    const history = useHistory();
    const onFinish = user => {
        login(user).then(()=>{
            notification.success({message:'Conectado',description:'Usuario conectado con éxito'})
            setTimeout(() => {
                history.push('/')
            }, 1500);
        })
        .catch(error=>{
            console.error(error)
            notification.error({message:'Error en login',description:'Error al tratar de conectar al usuario'})
        })
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