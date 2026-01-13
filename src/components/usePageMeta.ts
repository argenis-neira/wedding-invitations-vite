import { useEffect } from 'react';

const usePageMeta = (title: string, iconUrl?: string) => {
  useEffect(() => {
    // Cambia el título de la pestaña
    document.title = title;

    // Cambia el favicon si se proporciona uno
    if (iconUrl) {
      const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
      if (link) {
        link.href = iconUrl;
      }
    }
  }, [title, iconUrl]);
};

export default usePageMeta;