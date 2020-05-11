import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import './Register.scss'
import { register } from '../../../redux/actions/users';
import { useHistory } from 'react-router-dom';
const Register = () => {
    const history = useHistory();
    const onFinish = user => {
        register(user).then(()=>{
            notification.success({message:'Usuario registrado',description:'Usuario registrado con éxito'})
            history.push('/login')
        })
        .catch(error=>{
            console.error(error)
            notification.error({message:'Error en registro',description:'Error al tratar de registrar al usuario'})
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