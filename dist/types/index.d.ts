import { GridAppModuleConfiguration, RGBColor, GridAppModule, GridApp } from '@isergeevv/html-grid-app-base';

interface GridAppMiniMapModuleConfiguration extends GridAppModuleConfiguration {
    backgroundColor: RGBColor;
}

declare class GridAppMiniMap extends GridAppModule {
    constructor(app: GridApp, config: GridAppMiniMapModuleConfiguration);
    onMouseDown(_e: MouseEvent): void;
    onMouseMove(_e: MouseEvent): void;
    onMouseUp(_e: MouseEvent): void;
    onClick(_e: MouseEvent): void;
    onWheelMove(_e: WheelEvent): void;
    onKeyDown(_e: KeyboardEvent): void;
    onKeyUp(_e: KeyboardEvent): void;
    onContextMenu(_e: KeyboardEvent): void;
    import(_data: object): void;
    export(): object;
}

export { GridAppMiniMap };
