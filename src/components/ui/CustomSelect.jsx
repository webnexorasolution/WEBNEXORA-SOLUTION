import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import './CustomSelect.css';

export default function CustomSelect({
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  label,
  required = false,
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (optionValue) => {
    if (onChange) {
      onChange({ target: { name, value: optionValue } });
    }
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) =>
    typeof opt === 'string' ? opt === value : opt.value === value
  );

  const displayLabel = selectedOption
    ? typeof selectedOption === 'string'
      ? selectedOption
      : selectedOption.label
    : '';

  const selectedIcon =
    selectedOption && typeof selectedOption === 'object' && selectedOption.icon
      ? selectedOption.icon
      : null;

  return (
    <div className={`custom-select-wrapper ${className}`} ref={selectRef}>
      {label && (
        <label htmlFor={id} className="custom-select-label">
          {label} {required && <span className="req-star">*</span>}
        </label>
      )}

      {/* Hidden input for form data */}
      <input type="hidden" id={id} name={name} value={value} required={required} />

      {/* Trigger Button */}
      <button
        type="button"
        className={`custom-select-trigger ${isOpen ? 'is-active' : ''} ${value ? 'has-value' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="trigger-text">
          {displayLabel ? (
            <span className="selected-content">
              {selectedIcon && <span className="selected-icon">{selectedIcon}</span>}
              <span className="selected-text">{displayLabel}</span>
            </span>
          ) : (
            <span className="placeholder-text">{placeholder}</span>
          )}
        </span>
        <ChevronDown
          size={17}
          className={`select-chevron ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="custom-select-dropdown" role="listbox">
          <div className="custom-select-options-list">
            {options.map((opt) => {
              const optVal = typeof opt === 'string' ? opt : opt.value;
              const optLabel = typeof opt === 'string' ? opt : opt.label;
              const optIcon = typeof opt === 'object' && opt.icon ? opt.icon : null;
              const isSelected = value === optVal;

              return (
                <div
                  key={optVal}
                  role="option"
                  aria-selected={isSelected}
                  className={`custom-select-option ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => handleSelect(optVal)}
                >
                  <div className="option-left">
                    {optIcon && <span className="option-icon">{optIcon}</span>}
                    <span className="option-label">{optLabel}</span>
                  </div>
                  {isSelected && <Check size={15} className="option-check" />}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
