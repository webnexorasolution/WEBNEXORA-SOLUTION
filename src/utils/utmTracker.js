// ========================================================
// WEBNEXORA SOLUTION — UTM PARAMETER TRACKING UTILITY
// Captures and preserves campaign parameters across session
// ========================================================

const UTM_STORAGE_KEY = 'webnexora_utm_params';

export function captureUTMParams() {
  if (typeof window === 'undefined') return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref'];
    const captured = {};

    utmKeys.forEach((key) => {
      const val = urlParams.get(key);
      if (val) {
        captured[key] = val.trim();
      }
    });

    if (Object.keys(captured).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(captured));
      return captured;
    }

    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    return {};
  }
}

export function getStoredUTMParams() {
  if (typeof window === 'undefined') return {};
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    return {};
  }
}
