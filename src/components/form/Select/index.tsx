import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Check, ChevronDown, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const dropdownTriggerVariants = cva(
  "flex min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
  {
    variants: {
      state: {
        default: "",
        error: "border-red-500 focus:ring-red-500",
        disabled: "cursor-not-allowed opacity-50",
      },
      width: {
        default: "",
        full: "w-full",
      },
      focused: {
        true: "outline-none ring-2 ring-primary ring-offset-2",
        false: "",
      },
    },
    defaultVariants: {
      state: "default",
      width: "default",
      focused: false,
    },
  }
);

const dropdownContentVariants = cva(
  "absolute z-50 mt-1 w-full bg-popover rounded-md border border-input shadow-md",
  {
    variants: {
      position: {
        bottom: "top-full",
        top: "bottom-full",
      },
    },
    defaultVariants: {
      position: "bottom",
    },
  }
);

const dropdownOptionVariants = cva(
  "px-3 py-2 text-sm cursor-pointer flex items-center justify-between",
  {
    variants: {
      selected: {
        true: "bg-primary/10 text-primary",
        false: "hover:bg-muted",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
      highlighted: {
        true: "bg-primary/20 text-primary",
        false: "",
      },
    },
    defaultVariants: {
      selected: false,
      disabled: false,
      highlighted: false,
    },
  }
);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: SelectOption[];
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  placeholder?: string;
  disabled?: boolean;
  value?: string | string[];
  multiple?: boolean;
  onChange?: (value: string | string[]) => void;
  maxHeight?: number;
}

const Select = ({
  className,
  options,
  label,
  helperText,
  error,
  fullWidth = false,
  placeholder = "Select an option",
  disabled = false,
  value,
  multiple = false,
  onChange,
  maxHeight = 300,
  ...props
}: SelectProps) => {
  const id = props.id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const [isOpen, setIsOpen] = useState(false);
  //   const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const [selectedValue, setSelectedValue] = useState<string | string[]>(
    value || (multiple ? [] : "")
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Update internal state when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //   const handleKeyDown = (event: React.KeyboardEvent) => {
  //     if (disabled) return;

  //     switch (event.key) {
  //       case "Enter":
  //       case " ":
  //         event.preventDefault();
  //         if (!isOpen) {
  //           setIsOpen(true);
  //         } else if (highlightedIndex >= 0) {
  //           onChange?.(options[highlightedIndex].value);
  //           setIsOpen(false);
  //         }
  //         break;
  //       case "Escape":
  //         setIsOpen(false);
  //         break;
  //       case "ArrowDown":
  //         event.preventDefault();
  //         if (!isOpen) {
  //           setIsOpen(true);
  //         } else {
  //           setHighlightedIndex((prev) =>
  //             prev < options.length - 1 ? prev + 1 : prev
  //           );
  //         }
  //         break;
  //       case "ArrowUp":
  //         event.preventDefault();
  //         if (!isOpen) {
  //           setIsOpen(true);
  //         } else {
  //           setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  //         }
  //         break;
  //     }
  //   };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: string) => {
    if (disabled) return;

    if (multiple) {
      const values = Array.isArray(selectedValue) ? [...selectedValue] : [];

      if (values.includes(optionValue)) {
        const updatedValues = values.filter((v) => v !== optionValue);
        setSelectedValue(updatedValues);
        onChange?.(updatedValues);
      } else {
        const updatedValues = [...values, optionValue];
        setSelectedValue(updatedValues);
        onChange?.(updatedValues);
      }
    } else {
      setSelectedValue(optionValue);
      onChange?.(optionValue);
      setIsOpen(false);
    }
  };

  const removeOption = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();

    if (disabled) return;

    if (multiple && Array.isArray(selectedValue)) {
      const updatedValues = selectedValue.filter((v) => v !== optionValue);
      setSelectedValue(updatedValues);
      onChange?.(updatedValues);
    }
  };

  const getSelectedLabels = () => {
    if (
      !selectedValue ||
      (Array.isArray(selectedValue) && selectedValue.length === 0)
    ) {
      return null;
    }

    if (multiple && Array.isArray(selectedValue)) {
      return (
        <div className="flex flex-wrap gap-1">
          {selectedValue.map((val) => {
            const option = options.find((opt) => opt.value === val);
            return option ? (
              <div
                key={val}
                className="flex items-center bg-primary/10 text-primary rounded-full px-2 py-0.5 text-sm"
              >
                <span>{option.label}</span>
                <button
                  type="button"
                  onClick={(e) => removeOption(val, e)}
                  className="ml-1 p-0.5 hover:bg-primary/20 rounded-full transition-colors"
                  aria-label={`Remove ${option.label}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ) : null;
          })}
        </div>
      );
    } else {
      const option = options.find((opt) => opt.value === selectedValue);
      return option ? <span>{option.label}</span> : null;
    }
  };

  const selectedContent = getSelectedLabels();

  return (
    <div
      className={cn("space-y-2", fullWidth && "w-full")}
      ref={dropdownRef}
      //   onKeyDown={handleKeyDown}
    >
      {label && (
        <label htmlFor={id} className="block text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        <div
          id={id}
          className={cn(
            dropdownTriggerVariants({
              state: error ? "error" : disabled ? "disabled" : "default",
              width: fullWidth ? "full" : "default",
              focused: isOpen,
            }),
            className
          )}
          onClick={toggleDropdown}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleDropdown();
              e.preventDefault();
            }
          }}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={`${id}-dropdown`}
          {...props}
        >
          <div className="flex-grow truncate">
            {selectedContent || (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-200",
              isOpen && "transform rotate-180"
            )}
          />
        </div>

        {isOpen && (
          <div
            id={`${id}-dropdown`}
            className={dropdownContentVariants()}
            style={{ maxHeight: `${maxHeight}px`, overflowY: "auto" }}
          >
            <div className="py-1">
              {options.map((option) => {
                const isSelected = multiple
                  ? Array.isArray(selectedValue) &&
                    selectedValue.includes(option.value)
                  : selectedValue === option.value;

                return (
                  <div
                    key={option.value}
                    className={dropdownOptionVariants({
                      selected: isSelected,
                      disabled: option.disabled,
                      //   highlighted: Boolean(highlightedIndex === index),
                    })}
                    onClick={() =>
                      !option.disabled && handleOptionClick(option.value)
                    }
                  >
                    <span>{option.label}</span>
                    {isSelected && <Check className="h-4 w-4" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {helperText && !error && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
