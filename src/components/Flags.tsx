'use client';
import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

const Flags = () => {
  const [selected, setSelected] = useState('NG');
  const onSelect = (code: string): void => {
    setSelected(code);
    console.log(code);
  };

  const countries = ['US', 'GB', 'DE', 'FR', 'NG', 'ES'];

  return (
    <div className="demo-wrapper">
      <ReactFlagsSelect
        selected={selected}
        onSelect={onSelect}
        countries={countries}
        showSelectedLabel={false}
        selectedSize={32}
        className="menu-flags"
        selectButtonClassName="border-0 p-0"
      />
    </div>
  );
};

export default Flags;
