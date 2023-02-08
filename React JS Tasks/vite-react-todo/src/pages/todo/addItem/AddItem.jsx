import React from 'react'
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export default function AddItem({addItem}) {
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        addItem(
            {
                id: `id_${Math.round(Date.now() * Math.random())}`,
                title: value,
                status: false
            }
        )
    }

    return (
        <div>
            <Input value={value} onChange={handleChange} />
            <Button onClick={handleClick} />
        </div>
    )
}