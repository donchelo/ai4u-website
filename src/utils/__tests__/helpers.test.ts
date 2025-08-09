import {
  scrollToTop,
  scrollToElement,
  groupBy,
  debounce,
  capitalize,
  truncate,
  isValidEmail,
  isValidPhone,
  formatDate,
  formatRelativeTime,
  isMobile,
  isTablet,
  isDesktop,
  storage
} from '../helpers';

// Mock window.scrollTo
const mockScrollTo = jest.fn();
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true
});

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage
});

// Mock console.error
const originalError = console.error;
const mockConsoleError = jest.fn();

describe('Helpers Utils', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    console.error = mockConsoleError;
  });

  afterAll(() => {
    console.error = originalError;
  });

  describe('scrollToTop', () => {
    it('should scroll to top with smooth behavior by default', () => {
      scrollToTop();
      
      expect(mockScrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth'
      });
    });

    it('should scroll to top with specified behavior', () => {
      scrollToTop('auto');
      
      expect(mockScrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'auto'
      });
    });
  });

  describe('scrollToElement', () => {
    beforeEach(() => {
      // Mock getElementById
      const mockElement = {
        offsetTop: 500
      };
      document.getElementById = jest.fn().mockReturnValue(mockElement);
    });

    it('should scroll to element with no offset', () => {
      scrollToElement('test-element');
      
      expect(document.getElementById).toHaveBeenCalledWith('test-element');
      expect(mockScrollTo).toHaveBeenCalledWith({
        top: 500,
        behavior: 'smooth'
      });
    });

    it('should scroll to element with offset', () => {
      scrollToElement('test-element', 100);
      
      expect(mockScrollTo).toHaveBeenCalledWith({
        top: 400,
        behavior: 'smooth'
      });
    });

    it('should not scroll if element is not found', () => {
      document.getElementById = jest.fn().mockReturnValue(null);
      
      scrollToElement('nonexistent-element');
      
      expect(mockScrollTo).not.toHaveBeenCalled();
    });
  });

  describe('groupBy', () => {
    it('should group array by key function', () => {
      const array = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 }
      ];
      
      const grouped = groupBy(array, item => item.age);
      
      expect(grouped).toEqual({
        25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
        30: [{ name: 'Bob', age: 30 }]
      });
    });

    it('should handle empty array', () => {
      const result = groupBy([], () => 'key');
      
      expect(result).toEqual({});
    });

    it('should handle string keys', () => {
      const array = ['apple', 'banana', 'apricot', 'blueberry'];
      const grouped = groupBy(array, item => item[0]);
      
      expect(grouped).toEqual({
        'a': ['apple', 'apricot'],
        'b': ['banana', 'blueberry']
      });
    });
  });

  describe('debounce', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should delay function execution', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);
      
      debouncedFn('test');
      
      expect(mockFn).not.toHaveBeenCalled();
      
      jest.advanceTimersByTime(100);
      
      expect(mockFn).toHaveBeenCalledWith('test');
    });

    it('should cancel previous call when called again', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);
      
      debouncedFn('first');
      jest.advanceTimersByTime(50);
      debouncedFn('second');
      
      jest.advanceTimersByTime(100);
      
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('second');
    });

    it('should handle multiple arguments', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);
      
      debouncedFn('arg1', 'arg2', 'arg3');
      
      jest.advanceTimersByTime(100);
      
      expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2', 'arg3');
    });
  });

  describe('capitalize', () => {
    it('should capitalize first letter and lowercase rest', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('HELLO')).toBe('Hello');
      expect(capitalize('hELLO')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle single character', () => {
      expect(capitalize('a')).toBe('A');
      expect(capitalize('A')).toBe('A');
    });
  });

  describe('truncate', () => {
    it('should truncate long strings', () => {
      const longString = 'This is a very long string that should be truncated';
      const result = truncate(longString, 20);
      
      expect(result).toBe('This is a very long ...');
      expect(result.length).toBe(23); // 20 + '...'
    });

    it('should not truncate short strings', () => {
      const shortString = 'Short';
      const result = truncate(shortString, 20);
      
      expect(result).toBe('Short');
    });

    it('should handle exact length', () => {
      const exactString = 'Exactly twenty chars';
      const result = truncate(exactString, 20);
      
      expect(result).toBe('Exactly twenty chars');
    });
  });

  describe('isValidEmail', () => {
    it('should validate correct emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co')).toBe(true);
      expect(isValidEmail('user+tag@example.org')).toBe(true);
    });

    it('should reject invalid emails', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('@example.com')).toBe(false);
      expect(isValidEmail('test..test@example.com')).toBe(false);
    });

    it('should handle empty string', () => {
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('should validate correct phone numbers', () => {
      expect(isValidPhone('1234567890')).toBe(true);
      expect(isValidPhone('+1234567890')).toBe(true);
      expect(isValidPhone('+57 300 123 4567')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(isValidPhone('123')).toBe(false);
      expect(isValidPhone('abc123')).toBe(false);
      expect(isValidPhone('0123456789')).toBe(false); // starts with 0
    });

    it('should handle empty string', () => {
      expect(isValidPhone('')).toBe(false);
    });
  });

  describe('formatDate', () => {
    it('should format date with default locale', () => {
      const date = new Date('2024-01-15');
      const formatted = formatDate(date);
      
      // Should be in Spanish format
      expect(formatted).toMatch(/15 de enero de 2024/);
    });

    it('should format date with specified locale', () => {
      const date = new Date('2024-01-15');
      const formatted = formatDate(date, 'en-US');
      
      expect(formatted).toMatch(/January 15, 2024/);
    });
  });

  describe('formatRelativeTime', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2024-01-15T12:00:00Z'));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should return "hace un momento" for recent times', () => {
      const recentDate = new Date('2024-01-15T11:59:30Z'); // 30 seconds ago
      
      expect(formatRelativeTime(recentDate)).toBe('hace un momento');
    });

    it('should return minutes for times within an hour', () => {
      const minutesAgo = new Date('2024-01-15T11:30:00Z'); // 30 minutes ago
      
      expect(formatRelativeTime(minutesAgo)).toBe('hace 30 minutos');
    });

    it('should return hours for times within a day', () => {
      const hoursAgo = new Date('2024-01-15T09:00:00Z'); // 3 hours ago
      
      expect(formatRelativeTime(hoursAgo)).toBe('hace 3 horas');
    });

    it('should return days for times within a month', () => {
      const daysAgo = new Date('2024-01-13T12:00:00Z'); // 2 days ago
      
      expect(formatRelativeTime(daysAgo)).toBe('hace 2 días');
    });

    it('should return formatted date for old times', () => {
      const oldDate = new Date('2023-01-15T12:00:00Z'); // More than a month ago
      const result = formatRelativeTime(oldDate);
      
      expect(result).toMatch(/15 de enero de 2023/);
    });
  });

  describe('responsive design utilities', () => {
    it('should detect mobile screens', () => {
      Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });
      
      expect(isMobile()).toBe(true);
      expect(isTablet()).toBe(false);
      expect(isDesktop()).toBe(false);
    });

    it('should detect tablet screens', () => {
      Object.defineProperty(window, 'innerWidth', { value: 800, configurable: true });
      
      expect(isMobile()).toBe(false);
      expect(isTablet()).toBe(true);
      expect(isDesktop()).toBe(false);
    });

    it('should detect desktop screens', () => {
      Object.defineProperty(window, 'innerWidth', { value: 1200, configurable: true });
      
      expect(isMobile()).toBe(false);
      expect(isTablet()).toBe(false);
      expect(isDesktop()).toBe(true);
    });
  });

  describe('storage utilities', () => {
    beforeEach(() => {
      mockLocalStorage.getItem.mockClear();
      mockLocalStorage.setItem.mockClear();
      mockLocalStorage.removeItem.mockClear();
      mockLocalStorage.clear.mockClear();
      mockConsoleError.mockClear();
    });

    describe('storage.get', () => {
      it('should get and parse stored value', () => {
        mockLocalStorage.getItem.mockReturnValue('{"test": "value"}');
        
        const result = storage.get('testKey');
        
        expect(mockLocalStorage.getItem).toHaveBeenCalledWith('testKey');
        expect(result).toEqual({ test: 'value' });
      });

      it('should return default value if item not found', () => {
        mockLocalStorage.getItem.mockReturnValue(null);
        
        const result = storage.get('testKey', 'default');
        
        expect(result).toBe('default');
      });

      it('should return null if no default and item not found', () => {
        mockLocalStorage.getItem.mockReturnValue(null);
        
        const result = storage.get('testKey');
        
        expect(result).toBe(null);
      });

      it('should handle JSON parsing errors gracefully', () => {
        mockLocalStorage.getItem.mockReturnValue('invalid-json');
        
        const result = storage.get('testKey', 'default');
        
        expect(result).toBe('default');
      });
    });

    describe('storage.set', () => {
      it('should stringify and store value', () => {
        const testValue = { test: 'value' };
        
        storage.set('testKey', testValue);
        
        expect(mockLocalStorage.setItem).toHaveBeenCalledWith('testKey', '{"test":"value"}');
      });

      it('should handle storage errors gracefully', () => {
        mockLocalStorage.setItem.mockImplementation(() => {
          throw new Error('Storage error');
        });
        
        storage.set('testKey', 'value');
        
        expect(mockConsoleError).toHaveBeenCalledWith('Error saving to localStorage:', expect.any(Error));
      });
    });

    describe('storage.remove', () => {
      it('should remove item from storage', () => {
        storage.remove('testKey');
        
        expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('testKey');
      });

      it('should handle removal errors gracefully', () => {
        mockLocalStorage.removeItem.mockImplementation(() => {
          throw new Error('Remove error');
        });
        
        storage.remove('testKey');
        
        expect(mockConsoleError).toHaveBeenCalledWith('Error removing from localStorage:', expect.any(Error));
      });
    });

    describe('storage.clear', () => {
      it('should clear all storage', () => {
        storage.clear();
        
        expect(mockLocalStorage.clear).toHaveBeenCalled();
      });

      it('should handle clear errors gracefully', () => {
        mockLocalStorage.clear.mockImplementation(() => {
          throw new Error('Clear error');
        });
        
        storage.clear();
        
        expect(mockConsoleError).toHaveBeenCalledWith('Error clearing localStorage:', expect.any(Error));
      });
    });
  });
});