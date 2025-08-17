import { writable } from 'svelte/store';
import type { Toast, ToastOptions } from './types.js';

export const toasts = writable<Toast[]>([]);

const DEFAULT_DURATION = 5000; // 5 seconds
const DEFAULT_DISMISSIBLE = true;

function generateId(): string {
	return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function addToast(options: ToastOptions): string {
	const toast: Toast = {
		id: generateId(),
		type: options.type || 'info',
		title: options.title,
		message: options.message,
		duration: options.duration ?? DEFAULT_DURATION,
		dismissible: options.dismissible ?? DEFAULT_DISMISSIBLE
	};

	toasts.update(currentToasts => [...currentToasts, toast]);

	if (toast.duration && toast.duration > 0) {
		setTimeout(() => {
			removeToast(toast.id);
		}, toast.duration);
	}

	return toast.id;
}

export function removeToast(id: string): void {
	toasts.update(currentToasts => currentToasts.filter(toast => toast.id !== id));
}

export function clearAllToasts(): void {
	toasts.set([]);
}

export function showToast(title: string, message?: string, duration?: number): string {
	return addToast({ type: 'info', title, message, duration });
}

export function showSuccess(title: string, message?: string, duration?: number): string {
	return addToast({ type: 'success', title, message, duration });
}

export function showError(title: string, message?: string, duration?: number): string {
	return addToast({ type: 'error', title, message, duration });
}

export function showWarning(title: string, message?: string, duration?: number): string {
	return addToast({ type: 'warning', title, message, duration });
}
