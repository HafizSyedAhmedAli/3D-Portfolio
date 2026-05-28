"use client";
import { useState, type ChangeEvent } from "react";

type FloatInputProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  required?: boolean;
  disabled?: boolean;
};

const FloatInput = ({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  multiline,
  required,
  disabled,
}: FloatInputProps) => {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  const inputClass = `
    w-full bg-white/[0.03] border border-white/8
    hover:border-white/15 focus:border-emerald-500/60
    rounded-lg pl-5 pr-4 text-sm text-white
    outline-none transition-colors duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  return (
    <div className="relative group">
      <span className="absolute left-0 top-0 h-full w-px bg-emerald-400 scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 origin-top rounded-full" />

      {multiline ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          required={required}
          disabled={disabled}
          placeholder=" "
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputClass} pt-7 pb-3 resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          placeholder=" "
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputClass} pt-7 pb-2 h-14`}
        />
      )}

      <label
        htmlFor={id}
        className={`absolute left-5 pointer-events-none transition-all duration-200 ${
          lifted
            ? "top-2 text-[10px] tracking-widest uppercase text-emerald-400/70"
            : "top-4 text-sm text-white/40"
        }`}
      >
        {label}
      </label>
    </div>
  );
};
export default FloatInput;
