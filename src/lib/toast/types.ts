export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
	id: string;
	type: ToastType;
	title: string;
	message?: string;
	duration?: number;
	dismissible?: boolean;
}

export interface ToastOptions {
	type?: ToastType;
	title: string;
	message?: string;
	duration?: number;
	dismissible?: boolean;
}
