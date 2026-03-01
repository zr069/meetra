'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[var(--text-primary)] mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full rounded-lg border bg-white px-4 py-2.5
            text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]
            focus:outline-none focus:ring-2 focus:ring-offset-0
            transition-colors
            ${error
              ? 'border-[var(--error)] focus:border-[var(--error)] focus:ring-[var(--error)]/20'
              : 'border-[var(--border)] focus:border-[var(--primary)] focus:ring-[var(--primary)]/20'
            }
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-[var(--error)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
