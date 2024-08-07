import { useEffect, useLayoutEffect, useState } from 'react';
import { createCounter } from '@/utils/helpers/counter/createCounter.ts';
import { counterValidate } from '@/utils/helpers/counter/counterValidate.ts';

type UseTimerOptions = {
  initialTime?: number;
  isTimeDown?: boolean;
  minTime?: number;
  maxTime?: number;
  updateInterval?: number;
  initialIsActive?: boolean;
};

export const useTimer = (options?: UseTimerOptions) => {
  const {
    value: initialValue,
    min,
    max,
  } = createCounter({
    initialValue: options?.initialTime ?? 0,
    min: options?.minTime ? (options.minTime >= 0 ? options.minTime : 0) : 0,
    max: options?.maxTime ?? Number.POSITIVE_INFINITY,
  });
  const [now, setNow] = useState(Date.now());
  const [startAt, setStartAt] = useState<number | null>(null);
  const [initialTime, setInitialTime] = useState(initialValue ?? 0);
  const timeFromStart = now - (startAt ?? now);
  const timer = options?.isTimeDown
    ? counterValidate(initialTime - timeFromStart, min, max)
    : counterValidate(timeFromStart + initialTime, min, max);

  useEffect(() => {
    if (options?.initialIsActive) toggleTimer();
  }, []);

  useLayoutEffect(() => {
    if (startAt == null) return;
    setNow(Date.now());
    const interval = setInterval(() => {
      setNow(Date.now());
    }, options?.updateInterval ?? 1000);
    return () => clearInterval(interval);
  }, [options?.updateInterval, startAt]);

  const toggleTimer = () => {
    if (startAt != null) {
      setInitialTime(timer);
      setStartAt(null);
    } else {
      setStartAt(Date.now());
    }
  };

  return {
    timer,
    toggleTimer,
  };
};
