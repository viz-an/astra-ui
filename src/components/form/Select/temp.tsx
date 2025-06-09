import React, { useEffect, useRef, useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else if (highlightedIndex >= 0) {
          onChange(options[highlightedIndex].value);
          setIsOpen(false);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex((prev) =>
            prev < options.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        }
        break;
    }
  };

  return (
    <div
      ref={selectRef}
      className={`relative w-full ${className}`}
      onKeyDown={handleKeyDown}
    >
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="select-options"
        aria-label={placeholder}
        tabIndex={disabled ? -1 : 0}
        className={`
          flex items-center justify-between w-full px-4 py-2 
          border rounded-md bg-white cursor-pointer
          ${
            disabled
              ? "bg-gray-100 cursor-not-allowed"
              : "hover:border-gray-400"
          }
          ${isOpen ? "border-gray-400" : "border-gray-300"}
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={!selectedOption ? "text-gray-400" : ""}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          ref={optionsRef}
          id="select-options"
          role="listbox"
          className="
            absolute z-10 w-full mt-1 bg-white border border-gray-300 
            rounded-md shadow-lg max-h-60 overflow-auto
          "
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              role="option"
              aria-selected={value === option.value}
              className={`
                px-4 py-2 cursor-pointer
                ${
                  value === option.value
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100"
                }
                ${highlightedIndex === index ? "bg-gray-100" : ""}
              `}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
