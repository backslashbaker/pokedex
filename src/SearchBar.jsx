import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

// export default function SearchBar() {
//   return (
//     <div>SearchBar</div>
//   )
// }

export default function SearchBar({ onSubmit }) {
  const onFinish = (values) => {
    console.log('Success:', values);
    onSubmit(values.pokemon)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name='basic'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Pokemon'
        name='pokemon'
        rules={[
          {
            required: true,
            message: 'Please input your pokemon!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
