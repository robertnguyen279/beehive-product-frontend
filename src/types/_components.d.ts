import React from 'react';

export interface HomeChild {
  isLaptop: boolean;
}

export interface InputType {
  type: string;
  onChange: (value: React.FormEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  prefixIcon?: string;
  value: string;
  placeholder?: string;
  name: string;
  className?: string;
}

export interface CheckBoxType {
  name: string;
  label: string;
  value: string;
  className?: string;
}
