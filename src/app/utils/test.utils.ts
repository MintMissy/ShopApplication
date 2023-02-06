import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function findElement<T>(fixture: ComponentFixture<T>, elementId: string) {
	return fixture.debugElement.query(By.css(`[data-testid="${elementId}"]`));
}

export function click<T>(fixture: ComponentFixture<T>, elementId: string) {
	const element = findElement(fixture, elementId);
	const event = createClickEvent(element.nativeElement);

	element.triggerEventHandler('click', event);
}

export function setFieldValue<T>(fixture: ComponentFixture<T>, elementId: string, value: any) {
	const element = findElement(fixture, elementId);
	const nativeElement = element.nativeElement;

	nativeElement.value = value;
	nativeElement.dispatchEvent(new Event('input'));
}

export function expectText<T>(fixture: ComponentFixture<T>, elementId: string, text: string) {
	const element = findElement(fixture, elementId);
	const textContent = element.nativeElement.textContent;

	expect(textContent).toBe(text);
}

export function createClickEvent(target: EventTarget): Partial<MouseEvent> {
	return {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		preventDefault(): void {},
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		stopPropagation(): void {},
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		stopImmediatePropagation(): void {},
		type: 'click',
		target,
		currentTarget: target,
		bubbles: true,
		cancelable: true,
		button: 0,
	};
}
