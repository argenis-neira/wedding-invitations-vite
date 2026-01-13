import React, { useEffect } from "react";

// 1. Tipos para el retorno del tiempo
interface TimeRemaining {
  Total: number;
  Days: number;
  Hours: number;
  Minutes: number;
  Seconds: number;
}

interface TimerProps {
  dateStr: string;
}

const Timer: React.FC<TimerProps> = ({ dateStr }) => {
  
  const getTimeRemaining = (endtime: string | Date): TimeRemaining => {
    const t = Date.parse(endtime.toString()) - Date.parse(new Date().toString());
    return {
      Total: t,
      Days: Math.floor(t / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((t / 1000 / 60) % 60),
      Seconds: Math.floor((t / 1000) % 60),
    };
  };

  useEffect(() => {
    // Definimos el tipo para los trackers
    interface ITracker {
      el: HTMLElement;
      update: (val: number | string) => void;
      currentValue?: string | number;
    }

    // Usamos 'any' o tipos específicos para las funciones constructoras de estilo antiguo
    function CountdownTracker(this: ITracker, label: string, value: number) {
      const el = document.getElementById(label);
      if (!el) return;

      this.el = el;
      const top = el.querySelector(".card__top") as HTMLElement;
      const bottom = el.querySelector(".card__bottom") as HTMLElement;
      const back = el.querySelector(".card__back") as HTMLElement;
      const backBottom = el.querySelector(".card__back .card__bottom") as HTMLElement;

      this.update = (val: number | string) => {
        const formattedVal = Number(val) >= 100 ? val.toString() : ("0" + val).slice(-2);
        
        if (formattedVal !== this.currentValue) {
          if (this.currentValue !== undefined && Number(this.currentValue) >= 0) {
            back.setAttribute("data-value", this.currentValue.toString());
            bottom.setAttribute("data-value", this.currentValue.toString());
          }
          this.currentValue = formattedVal;
          top.innerText = this.currentValue.toString();
          backBottom.setAttribute("data-value", this.currentValue.toString());

          this.el.classList.remove("flip");
          void this.el.offsetWidth; // Trigger reflow
          this.el.classList.add("flip");
        }
      };

      this.update(value);
    }

    function Clock(this: any, countdown: Date) {
      this.el = document.getElementById("flip-flop-clock");

      const trackers: Record<string, ITracker> = {};
      const t = getTimeRemaining(countdown);
      let timeinterval: number;

      for (const key in t) {
        if (key === "Total") continue;
        // @ts-ignore - Instanciación estilo antiguo
        trackers[key] = new (CountdownTracker as any)(key, t[key as keyof TimeRemaining]);
      }

      let i = 0;
      const updateClock = () => {
        timeinterval = requestAnimationFrame(updateClock);

        if (i++ % 10) return;

        const timeData = getTimeRemaining(countdown);
        if (timeData.Total < 0) {
          cancelAnimationFrame(timeinterval);
          for (const key in trackers) {
            trackers[key].update(0);
          }
          return;
        }

        for (const key in trackers) {
          trackers[key].update(timeData[key as keyof TimeRemaining]);
        }
      };

      setTimeout(updateClock, 500);
    }

    const deadline = new Date(dateStr);
    // @ts-ignore - Instanciación estilo antiguo
    new (Clock as any)(deadline);

    // Limpieza básica (opcional pero recomendada)
  }, [dateStr]);

  return (
    <div id="flip-flop-clock" className="flip-clock">
      <span id="Days" className="flip-clock__piece flip">
        <b className="flip-clock__card card">
          <b className="card__top"></b>
          <b className="card__bottom"></b>
          <b className="card__back">
            <b className="card__bottom" data-value=""></b>
          </b>
        </b>
        <span className="flip-clock__slot start-slot">Días</span>
      </span>
      <span id="Hours" className="flip-clock__piece flip">
        <b className="flip-clock__card card">
          <b className="card__top"></b>
          <b className="card__bottom"></b>
          <b className="card__back">
            <b className="card__bottom" data-value=""></b>
          </b>
        </b>
        <span className="flip-clock__slot">Horas</span>
      </span>
      <span id="Minutes" className="flip-clock__piece flip">
        <b className="flip-clock__card card">
          <b className="card__top"></b>
          <b className="card__bottom" data-value=""></b>
          <b className="card__back" data-value="">
            <b className="card__bottom" data-value=""></b>
          </b>
        </b>
        <span className="flip-clock__slot">Minutos</span>
      </span>
      <span id="Seconds" className="flip-clock__piece flip">
        <b className="flip-clock__card card">
          <b className="card__top"></b>
          <b className="card__bottom" data-value=""></b>
          <b className="card__back" data-value="">
            <b className="card__bottom" data-value=""></b>
          </b>
        </b>
        <span className="flip-clock__slot end-slot">Segundos</span>
      </span>
    </div>
  );
};

export default Timer;