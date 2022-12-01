import React from 'react';
import { Switch } from '@patternfly/react-core';
import { Control, Controller, FieldValues } from 'react-hook-form';

type SwitchInputProps = {
  name: string;
  label: string;
  id: string;
  labelOff?: string;
  control: Control<FieldValues, any> | undefined;
};

export const SwitchInput: React.FunctionComponent<SwitchInputProps> = ({ id, name, label, labelOff, control }) => {
  console.log(control, 'control');
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Switch id={id} label={label} labelOff={labelOff} isChecked={value} onChange={onChange} aria-label="Switch" />
      )}
    />
  );
};
