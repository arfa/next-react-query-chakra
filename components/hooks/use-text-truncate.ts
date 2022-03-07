import { useState, useEffect } from 'react';

interface Config {
  maxLength?: number;
  ellipsis?: string;
}

const defaultConfig: Config = {
  maxLength: 120,
  ellipsis: '...',
};

export const useTextTruncate = (str: string = '', config?: Config) => {
  const settings = { ...defaultConfig, ...config } as Required<Config>;
  const [text, setText] = useState(str);

  useEffect(() => {
    if (text.length > settings.maxLength) {
      setText(text.substring(0, settings.maxLength - settings.ellipsis.length) + settings.ellipsis);
    }
  }, [text, settings.ellipsis, settings.maxLength]);

  return { text, setText };
};
