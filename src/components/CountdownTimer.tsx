import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  endTime: Date;
}

export default function CountdownTimer({ endTime }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(endTime).getTime();
      const distance = end - now;

      if (distance < 0) {
        setTimeLeft('終了');
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days > 0) {
        setTimeLeft(`${days}日 ${hours}時間`);
      } else if (hours > 0) {
        setTimeLeft(`${hours}時間 ${minutes}分`);
      } else {
        setTimeLeft(`${minutes}分 ${seconds}秒`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <span className="text-orange-600 font-medium">
      残り {timeLeft}
    </span>
  );
}
