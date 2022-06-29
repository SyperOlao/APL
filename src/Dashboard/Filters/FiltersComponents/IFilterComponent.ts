export interface IFilterComponent {
    render(key: number): JSX.Element;

    getCurrentValue(): string | number | undefined;
}