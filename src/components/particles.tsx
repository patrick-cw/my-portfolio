"use client";

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MousePosition {
  x: number | null;
  y: number | null;
  radius: number;
}

// Helper class for a single particle
class Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  // Base velocity
  vx: number;
  vy: number;
  // Mouse-induced velocity
  pushX: number;
  pushY: number;
  friction: number;

  constructor(private canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
    this.vx = (Math.random() - 0.5) * 0.1; // Slow independent horizontal movement
    this.vy = (Math.random() - 0.5) * 0.1; // Slow independent vertical movement
    this.pushX = 0;
    this.pushY = 0;
    this.friction = 0.95; // Slows down the mouse push effect
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
  }

  update(mouse: MousePosition) {
    // Mouse interaction
    if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius; // Inverted force
        
        if (distance < mouse.radius) {
            const pushStrength = force * 0.5; // Adjust push strength
            this.pushX += forceDirectionX * pushStrength;
            this.pushY += forceDirectionY * pushStrength;
        }
    }

    // Apply friction to the mouse-push velocity
    this.pushX *= this.friction;
    this.pushY *= this.friction;

    // Update position with both base velocity and mouse-push velocity
    this.x += this.vx + this.pushX;
    this.y += this.vy + this.pushY;

    // Screen wrapping logic
    if (this.x > this.canvas.width) this.x = 0;
    if (this.x < 0) this.x = this.canvas.width;
    if (this.y > this.canvas.height) this.y = 0;
    if (this.y < 0) this.y = this.canvas.height;
  }
}

export default function Particles({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef<MousePosition>({ x: null, y: null, radius: 100 });
  const animationFrameId = useRef<number>();

  const initParticles = (canvas: HTMLCanvasElement) => {
    particles.current = [];
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / 3000);
    for (let i = 0; i < numberOfParticles; i++) {
      particles.current.push(new Particle(canvas));
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (const particle of particles.current) {
      particle.update(mouse.current);
      particle.draw(context);
    }
    animationFrameId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas);
      animate();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };
    
    const handleMouseLeave = () => {
        mouse.current.x = null;
        mouse.current.y = null;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={cn('fixed top-0 left-0 w-full h-full -z-10', className)} />;
}
