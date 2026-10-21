import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Modal behaviour for a container: moves focus in, traps Tab, closes on Escape,
 * locks page scroll and returns focus to whatever opened it.
 */
export function useDialog(ref: RefObject<HTMLElement | null>, onClose: () => void, active = true, lockScroll = true) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!active) return;
    const opener = document.activeElement as HTMLElement | null;
    const node = ref.current;
    const first = node?.querySelector<HTMLElement>('[data-autofocus]') ?? node?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus({ preventScroll: true });

    const previousOverflow = document.body.style.overflow;
    if (lockScroll) document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onCloseRef.current();
        return;
      }
      if (e.key !== 'Tab' || !node) return;
      const items = Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstItem) {
        e.preventDefault();
        lastItem.focus();
      } else if (!e.shiftKey && document.activeElement === lastItem) {
        e.preventDefault();
        firstItem.focus();
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      if (lockScroll) document.body.style.overflow = previousOverflow;
      if (opener && document.contains(opener)) opener.focus({ preventScroll: true });
    };
  }, [active, lockScroll, ref]);
}
