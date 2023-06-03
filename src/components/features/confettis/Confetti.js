import React, { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 5000,
};

export default function Confetti() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        ticks: 500,
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  useEffect(() => {
    fire();
  }, []);
  const fire = useCallback(() => {
    makeShot(0.4, {
      spread: 26,
      startVelocity: 70,
      origin: { y: 0.9 },
    });

    makeShot(0.3, {
      spread: 60,
      origin: { y: 0.92 },
    });

    makeShot(0.3, {
      spread: 88,
      scalar: 0.8,
      gravity: 0.6,
      origin: { y: 0.8 },
    });

    makeShot(0.1, {
      spread: 90,
      startVelocity: 25,
      gravity: 1.1,
      decay: 0.92,
      scalar: 1.2,
      origin: { y: 0.9 },
    });

    makeShot(0.5, {
      spread: 120,
      startVelocity: 100,
      gravity: 1.2,
      scalar: 2,
      origin: { y: 0.9 },
    });
    makeShot(0.6, {
      spread: 120,
      startVelocity: 100,
      gravity: 0.8,
      origin: { y: 0.9 },
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      origin: { y: 0.9 },
    });
  }, [makeShot]);

  return (
    <>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={canvasStyles}
      />
    </>
  );
}
